param(
    [ValidateRange(1, 100)]
    [int]$Quality = 88,
    [ValidateRange(1, 10000)]
    [int]$MaxDimension = 1600
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$assetsDirectory = Join-Path $projectRoot 'assets'
$outputDirectory = Join-Path $assetsDirectory 'optimized-certificates'
$carouselFile = Join-Path $projectRoot 'js/certificates.js'
$supportedExtensions = @('.png', '.jpg', '.jpeg')

if (-not (Test-Path $carouselFile)) {
    throw "Carousel file not found: $carouselFile"
}

Add-Type -AssemblyName System.Drawing
New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null

$sourceFiles = @{}
$carouselContent = Get-Content $carouselFile -Raw
$carouselNames = [regex]::Matches(
    $carouselContent,
    "assets/optimized-certificates/([^']+)\.jpg"
)

foreach ($match in $carouselNames) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($match.Groups[1].Value)
    foreach ($extension in $supportedExtensions) {
        $candidate = Join-Path $assetsDirectory ($baseName + $extension)
        if (Test-Path $candidate) {
            $sourceFiles[$candidate] = Get-Item $candidate
            break
        }
    }
}

Get-ChildItem $assetsDirectory -File | Where-Object {
    $_.Extension.ToLowerInvariant() -in $supportedExtensions -and
    $_.BaseName -match '(?i)sertifikat|certificate'
} | ForEach-Object {
    $sourceFiles[$_.FullName] = $_
}

if ($sourceFiles.Count -eq 0) {
    Write-Output 'No certificate images found to compress.'
    exit 0
}

$jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
$encoderParameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new(
    [System.Drawing.Imaging.Encoder]::Quality,
    [long]$Quality
)

try {
    foreach ($source in $sourceFiles.Values) {
        $outputPath = Join-Path $outputDirectory ($source.BaseName + '.jpg')
        if ((Test-Path $outputPath) -and
            (Get-Item $outputPath).LastWriteTime -ge $source.LastWriteTime) {
            Write-Output "Up to date: $($source.Name)"
            continue
        }

        $image = [System.Drawing.Image]::FromFile($source.FullName)
        try {
            $scale = [Math]::Min(1.0, $MaxDimension / [double][Math]::Max($image.Width, $image.Height))
            $width = [Math]::Max(1, [int][Math]::Round($image.Width * $scale))
            $height = [Math]::Max(1, [int][Math]::Round($image.Height * $scale))
            $bitmap = [System.Drawing.Bitmap]::new(
                $width,
                $height,
                [System.Drawing.Imaging.PixelFormat]::Format24bppRgb
            )
            try {
                $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
                try {
                    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                    $graphics.Clear([System.Drawing.Color]::White)
                    $graphics.DrawImage($image, 0, 0, $width, $height)
                }
                finally {
                    $graphics.Dispose()
                }

                $bitmap.Save($outputPath, $jpegEncoder, $encoderParameters)
            }
            finally {
                $bitmap.Dispose()
            }
        }
        finally {
            $image.Dispose()
        }

        $output = Get-Item $outputPath
        Write-Output ('{0}: {1:N0} KB -> {2:N0} KB' -f `
            $source.Name, ($source.Length / 1KB), ($output.Length / 1KB))
    }
}
finally {
    $encoderParameters.Dispose()
}