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

const subscribeButton = document.querySelector(".notified-input-button");

subscribeButton.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.querySelector(".notified-input").value;
    if (isValidEmail(email)) {
        location.reload();
    } else if (email) { showPopup() };
});

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function showPopup() {
    document.getElementById("popup").style.opacity = 1;
    setTimeout(() => {
        document.getElementById("popup").style.opacity = 0;
    }, 3000);
}

// function hidePopup() {
//     document.getElementById("popup").style.opacity = 0;
// }