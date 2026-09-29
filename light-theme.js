var icon = document.getElementById("icon");

if (icon) {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const isLight = savedTheme !== "dark";
    document.body.classList.toggle("light-theme", isLight);
    icon.src = isLight ? "assets/moon.png" : "assets/sun.png";

    icon.onclick = function() {
        const useLightTheme = document.body.classList.toggle("light-theme");
        localStorage.setItem("portfolio-theme", useLightTheme ? "light" : "dark");
        icon.src = useLightTheme ? "assets/moon.png" : "assets/sun.png";
    };
}