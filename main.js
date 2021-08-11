/* Hamburger menu toggle open/close */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/* Hamburger menu, close when clicking link */

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* Cookie Container */

const cookieContainer = document.querySelector(".cookieContainer");
const cookieBtn = document.querySelector(".cookieBtn");

cookieBtn.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed"))
        cookieContainer.classList.add("active")
}, 2000);

/* Collapsible */

/* Somehow this does not work from the js file,
but works in the html.

document.querySelectorAll('.collapsibleButton').forEach(button => {
    button.addEventListener('click', () => {
        const collapsibleContent = button.nextElementSibling;

        button.classList.toggle('collapsibleButtonActive');

        if (button.classList.contains('collapsibleButtonActive')) {
            collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
        }
        else {
            collapsibleContent.style.maxHeight = 0;
        }
    });
}); */