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


const ANIMALS = [
    {
        name: "Deer",
        description: "Naturalist investigation",
        pic: "./assets/deer.jpg"
    },
    {
        name: "Squirrel",
        description: "Kamikaze squirrels",
        pic: "./assets/squirrel.jpg"
    },
    {
        name: "Bird",
        description: "Birds Fight club",
        pic: "./assets/bird.jpg"
    },
    {
        name: "Fox",
        description: "Witty hunter",
        pic: "./assets/fox.jpg"
    },
    {
        name: "Wolf",
        description: "Clever strategist",
        pic: "./assets/wolf.jpg"
    },
    {
        name: "Tiger",
        description: "Striped lazy cat",
        pic: "./assets/tiger.jpg"
    },
]

let windowWidth = window.innerWidth;
window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
})

const picsContainer = document.querySelector(".pics-container");

function createCards() {
    ANIMALS.map((animal) => {
        const card = document.createElement("div");
        card.classList.add("slider-pic");
        const cardText = document.createElement("div");
        cardText.classList.add("pictext");
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("slider-title");
        cardTitle.textContent = animal.name;
        const cardDescription = document.createElement("p");
        cardDescription.classList.add("slider-text");
        cardDescription.textContent = animal.description;
        const cardImage = document.createElement("img");
        cardImage.setAttribute("alt", animal.name);
        cardImage.setAttribute("src", animal.pic);
        cardText.append(cardTitle, cardDescription);
        card.append(cardText, cardImage);
        picsContainer.appendChild(card);
    })

}

createCards();

const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

const sliderStep = 360;

leftArrow.addEventListener("click", () => {
    picsContainer.scrollLeft -= sliderStep;
})

rightArrow.addEventListener("click", () => {
    picsContainer.scrollLeft += sliderStep;
})