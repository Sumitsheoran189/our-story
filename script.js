const correctPassword = "19012026";

function checkPassword() {

    const entered =
    document.getElementById("password").value;

    if(entered === correctPassword){

        document.getElementById("login-screen")
        .style.display = "none";

        document.getElementById("main-content")
        .style.display = "block";

    } else {

        document.getElementById("error")
        .innerText =
        "Hint: The day our forever officially began ❤️";

    }

}

function scrollToChapter(){

    document.getElementById("story-content")
    .style.display = "block";

    document.getElementById("chapter1")
    .scrollIntoView({
        behavior:"smooth"
    });

}

/* SCROLL FADE-IN FOR CHAPTERS */

const chapters = document.querySelectorAll(".chapter");

const chapterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
});

chapters.forEach(chapter => chapterObserver.observe(chapter));

const weddingDate =
new Date("November 25, 2026 00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = weddingDate - now;

const days =
Math.floor(distance / (1000 * 60 * 60 * 24));

const hours =
Math.floor((distance %
(1000 * 60 * 60 * 24))
/
(1000 * 60 * 60));

const minutes =
Math.floor((distance %
(1000 * 60 * 60))
/
(1000 * 60));

const seconds =
Math.floor((distance %
(1000 * 60))
/
1000);

document.getElementById("days").innerText =
days;

document.getElementById("hours").innerText =
hours;

document.getElementById("minutes").innerText =
minutes;

document.getElementById("seconds").innerText =
seconds;

},1000);