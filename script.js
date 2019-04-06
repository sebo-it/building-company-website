document.addEventListener("DOMContentLoaded", afterDomContentLoaded);
function afterDomContentLoaded(){
    const mainMenu = document.getElementById("main-menu");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.addEventListener("click", toggleMobileMenu);

    const popupBg = document.getElementsByClassName("popup-bg")[0];
    const infoPopupCloseBtn = document.getElementById("popup-close-btn");
    infoPopupCloseBtn.addEventListener("click", closePopup);
    popupBg.addEventListener("click", closePopup);

    function toggleMobileMenu(){
        hamburgerMenu.classList.toggle("close-menu-icon");
        mainMenu.classList.toggle("flex")
    }

    function closePopup(){
        popupBg = document.getElementsByClassName("popup-bg")[0].style.display = "none";
    }
}