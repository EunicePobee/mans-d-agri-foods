// For Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// For slider1
let slider = tns({
    container : ".my-slider",
    "slideBy" : "1",
    "speed" : 400,
    "nav" : false,
    autoplay : true,
    controls: false,
    autoplayButtonOutput : false,
    responsive: {
        1600: {
            items : 3,
            gutter : 20
        },
        1024: {
            items : 3,
            gutter : 20
        },
        768: {
            items : 2,
            gutter : 20
        },
        480: {
            items : 1,
            gutter : 20
        }
    }
})

// For slider2
let slider2 = tns({
    container : ".my-slider2",
    "slideBy" : "1",
    "speed" : 400,
    "nav" : false,
    autoplay : true,
    controls: false,
    autoplayButtonOutput : false,
    responsive: {
        1600: {
            items : 3,
            gutter : 20
        },
        1024: {
            items : 3,
            gutter : 20
        },
        768: {
            items : 2,
            gutter : 20
        },
        480: {
            items : 1,
            gutter : 20
        }
    }
})