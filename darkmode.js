document.addEventListener("DOMContentLoaded", function() {
  // Get the dark mode toggle image element if it exists
  const toggleImg = document.querySelector('.toggle-img');
  
  // Check the stored value and apply dark mode if needed
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    if (toggleImg) {
      toggleImg.src = "light.png";
    }
  } else {
    if (toggleImg) {
      toggleImg.src = "dark.png";
    }
  }
});
