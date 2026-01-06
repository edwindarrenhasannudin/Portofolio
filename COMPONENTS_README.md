# Portfolio HTML Modularization

## Overview
The `index.html` file has been split into separate modular components for better maintainability and readability.

## Directory Structure

```
components/
├── header.html          (Navigation header)
├── splash.html          (Splash screen)
├── home.html            (Hero/Home section)
├── about.html           (About me section)
├── services.html        (Services section)
├── portfolio.html       (Projects/Portfolio section - longest component)
├── certificates.html    (Certificates section)
└── contact.html         (Contact & Footer section)
```

## Benefits

✅ **Better Organization**: Each section in its own file  
✅ **Easier Maintenance**: Update individual sections without touching main file  
✅ **Reduced Main File**: `index.html` reduced from 431 lines to ~95 lines  
✅ **Reusable Components**: Components can be easily reused or modified  
✅ **Cleaner Code**: Separation of concerns  

## How It Works

The `index.html` uses the Fetch API to dynamically load each component:

```javascript
function loadComponent(componentPath, placeholderId) {
    fetch(componentPath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(placeholderId).innerHTML = html;
        })
        .catch(error => console.error('Error loading component:', error));
}
```

Components are loaded in order:
1. Header
2. Splash Screen
3. Home
4. About
5. Services
6. Portfolio
7. Certificates
8. Contact

## File Size Comparison

**Before**: `index.html` - 431 lines  
**After**: `index.html` - ~95 lines (78% reduction)

Component breakdown:
- `portfolio.html` - 213 lines (largest component)
- `home.html` - 48 lines
- `contact.html` - 31 lines
- `header.html` - 17 lines
- `about.html` - 16 lines
- `services.html` - 19 lines
- `certificates.html` - 20 lines
- `splash.html` - 4 lines

## Usage Notes

⚠️ **Important**: When deploying to GitHub Pages, ensure the `components` folder is included in your repository.

To modify a section:
1. Edit the corresponding file in `components/` folder
2. No need to touch `index.html`
3. Changes are automatically loaded on page refresh

## Integration with Existing Systems

All existing functionality is preserved:
- All CSS classes work the same
- All JavaScript modules work the same
- All external dependencies remain the same
- SEO meta tags are unchanged

The component loading happens after DOM parsing, so all scripts load correctly.
