function applyDarkModePreference() {
    const body = document.body;
    const toggleImg = document.querySelector('.toggle-img');
    
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
        toggleImg.src = toggleImg.src.replace("images/dark.png", "images/light.png");
    } else {
        body.classList.remove("dark-mode");
        toggleImg.src = toggleImg.src.replace("images/light.png", "images/dark.png");
    }
}

function toggleDarkMode() {
    const body = document.body;
    const toggleImg = document.querySelector('.toggle-img');

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "false");
        toggleImg.src = toggleImg.src.replace("images/light.png", "images/dark.png");
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "true");
        toggleImg.src = toggleImg.src.replace("images/dark.png", "images/light.png");
    }
}

// Ensure dark mode preference is applied when the page loads
document.addEventListener("DOMContentLoaded", applyDarkModePreference);

// Ensure the latest dark mode choice is applied even when using the back button
window.addEventListener("pageshow", applyDarkModePreference);
