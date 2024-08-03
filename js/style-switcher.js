// toggle style switcher

const styleSwitcherToggle = document.querySelector(".style-switcher-toggeler");
styleSwitcherToggle.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style switcher scroll
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});
// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style")
function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled", true);
        }
    });
}
//theme light and darkmode
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
//side bar
// document.querySelectorAll(".nav .nav-item").forEach(item => {
//     item.addEventListener("click", () => {
//         // Remove the active class from all items
//         document.querySelectorAll(".nav .nav-item").forEach(i => i.classList.remove("active"));
//         // Add the active class to the clicked item
//         item.classList.add("active");
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling for menu links
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to update active menu item based on scroll position
    function updateActiveMenu() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= (sectionTop - 50) && window.scrollY < (sectionTop + sectionHeight - 50)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    }

    // Update active menu item on scroll
    window.addEventListener('scroll', updateActiveMenu);

    // Also update active menu item on load to account for initial scroll position
    updateActiveMenu();
});