const hamburger=document.querySelector(".hamburger"),navMenu=document.querySelector(".nav-menu");function mobileMenu(){hamburger.classList.toggle("active"),navMenu.classList.toggle("active")}hamburger.addEventListener("click",mobileMenu);const navLink=document.querySelectorAll(".nav-link");function closeMenu(){hamburger.classList.remove("active"),navMenu.classList.remove("active")}navLink.forEach((e=>e.addEventListener("click",closeMenu)));