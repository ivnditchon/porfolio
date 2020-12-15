// Team Images Hover
const teamBox2 = document.querySelector(".team__box2__image");
let box2__image = teamBox2.querySelector("img");

box2__image.addEventListener("mouseover", () => {
    box2__image.setAttribute("src", "assets/images/nerah.jpg");
});
box2__image.addEventListener("mouseout", () => {
    box2__image.setAttribute("src", "assets/images/almaizer.jpg");
});

const teamBox3 = document.querySelector(".team__box3__image");
let box3__image = teamBox3.querySelector("img");

box3__image.addEventListener("mouseover", () => {
    box3__image.setAttribute("src", "assets/images/kenu.jpg");
});
box3__image.addEventListener("mouseout", () => {
    box3__image.setAttribute("src", "assets/images/aiman.jpg");
});

const teamBox4 = document.querySelector(".team__box4__image");
let box4__image = teamBox4.querySelector("img");

box4__image.addEventListener("mouseover", () => {
    box4__image.setAttribute("src", "assets/images/farhana.jpg");
});
box4__image.addEventListener("mouseout", () => {
    box4__image.setAttribute("src", "assets/images/rashab.jpg");
});

const teamBox5 = document.querySelector(".team__box5__image");
let box5__image = teamBox5.querySelector("img");

box5__image.addEventListener("mouseover", () => {
    box5__image.setAttribute("src", "assets/images/jho ara.jpg");
});
box5__image.addEventListener("mouseout", () => {
    box5__image.setAttribute("src", "assets/images/almansour.jpg");
});

const teamBox6 = document.querySelector(".team__box6__image");
let box6__image = teamBox6.querySelector("img");

box6__image.addEventListener("mouseover", () => {
    box6__image.setAttribute("src", "assets/images/romina.jpg");
});
box6__image.addEventListener("mouseout", () => {
    box6__image.setAttribute("src", "assets/images/norham.jpg");
});

const toggleMenu = () => {
    const menu = document.querySelector("#menu");
    const nav = document.querySelector("#nav");

    menu.addEventListener("click", () => {
        nav.classList.toggle("nav__active");
    });

};

toggleMenu();

