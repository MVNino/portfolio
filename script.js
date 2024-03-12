function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.getElementById("copyright");
  copyrightElement.innerHTML = "Copyright &#169; " + currentYear + " Marlon Niño. All Rights Reserved.";
});