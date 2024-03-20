const modalMenu = document.querySelector(".modal-container");
const burgerMenu = document.querySelector("#burger-menu");
const closeIcon = document.querySelector("#close-icon");

const blogLink = document.querySelector("#mobile-blog");
const contactsLink = document.querySelector("#mobile-contacts");

burgerMenu.addEventListener("click", () => {
    modalMenu.classList.add("visible");

});

const closeModal = () => {
    modalMenu.classList.remove("visible");
}

[closeIcon, blogLink, contactsLink].forEach(link => {
    link.addEventListener("click", closeModal);
});