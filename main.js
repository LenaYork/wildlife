const modalMenu = document.querySelector(".modal-container");
const burgerMenu = document.querySelector("#burger-menu");
const closeIcon = document.querySelector("#close-icon");
burgerMenu.addEventListener("click", () => {
    modalMenu.classList.add("visible");
    
});

closeIcon.addEventListener("click", () => {
    modalMenu.classList.remove("visible");
});