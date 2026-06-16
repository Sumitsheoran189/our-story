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

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("password");
    if(input){
        input.addEventListener("keydown", (e) => {
            if(e.key === "Enter") checkPassword();
        });
    }
});

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

/* WHY I LOVE YOU */

const reasons = [
    "Because your eyes… they don't just look beautiful, they hold me there a second longer than I expect, every single time.",
    "Because your smile isn't just something I see — it's something I feel… and somehow it stays with me long after you're gone.",
    "Because the way you get excited over ice cream, cakes, and chocolates… it's not just cute, it's you at your purest, and I swear I fall for that version of you every time.",
    "Because I don't know what's sweeter — you or the desserts you love so much… and honestly, I don't think I'll ever figure that out.",
    "Because there's something about the way you care… it's soft, quiet, and real — the kind of love people search for their whole lives.",
    "Because the way your eyes light up over the smallest things makes me want to give you everything that makes you that happy.",
    "Because even when you're just being yourself — laughing, talking, stealing a bite of dessert — you don't realise how completely you have my attention.",
    "Because your loving nature isn't loud, it isn't forced… it just exists so naturally that it makes everything around you feel warmer.",
    "Because the way you smile after having something sweet… I don't think any dessert will ever be as perfect as that moment.",
    "Because you don't just make moments special — you become the reason they matter.",
    "Because sometimes I find myself staring at you, not saying anything… just taking you in, like I don't want to miss a single detail.",
    "Because you make ordinary things — like sharing a dessert or sitting quietly — feel like something unforgettable.",
    "Because there's this softness in you… in your eyes, your voice, your heart… and I don't think I'll ever get enough of it.",
    "Because I've realised, it's not just your smile or your eyes or your sweet little habits — it's the way all of it comes together… and somehow feels meant for me.",
    "Because loving you doesn't feel like something I'm trying to do… it just happens, naturally, every time I think of you.",
    "Because at some point, it stopped being about the little things… and became about you being everything I didn't even know I needed.",
    "Because the way you laugh — really laugh — is the kind of thing that makes a place feel instantly warmer, and I never want to stop hearing it.",
    "Because you have this quiet strength about you… you don't announce it, you don't need to… it just shows, in everything you do.",
    "Because talking to you at the end of a long day somehow makes the whole day feel worth it.",
    "Because the way you make people around you feel seen and cared for… it tells me everything I need to know about who you are.",
    "Because even in the smallest, most ordinary moments — a glance, a smile, a quiet second — you somehow take my breath away.",
    "Because I think about our future and feel excited, not nervous… and that's entirely because of you.",
    "Because you've made me understand what it means to truly look forward to someone — not just a moment, but a whole lifetime.",
    "Because the closer I get to knowing you, the more I realise there is to love… and somehow that feeling just keeps growing.",
    "Because you don't try to be anyone other than yourself… and the person you are is already more than I ever hoped for.",
    "Because whenever something good happens, you're the first person I want to tell.",
    "Because you've somehow made 'forever' feel like something I can't wait for, instead of something far away.",
    "Because the thought of building a life with you — the small moments, the big ones, all of it — feels like the best thing in the world.",
    "Because you are, without question, the best part of everything that's happened to me since 19 January 2026.",
    "Because after everything — every conversation, every memory, every moment — if I had to choose again, I would still choose you. Every single time."
];

let currentIndex = 0;
let usedIndexes = [0];

function showReason(){

    const textEl = document.getElementById("reason-text");

    textEl.classList.add("fade");

    setTimeout(() => {

        let next;

        if(usedIndexes.length === reasons.length){
            usedIndexes = [];
        }

        do {
            next = Math.floor(Math.random() * reasons.length);
        } while(usedIndexes.includes(next));

        usedIndexes.push(next);

        textEl.textContent = reasons[next];

        textEl.classList.remove("fade");

    }, 400);

}

/* SECRET LETTER */

function revealLetter(){
    const btn = document.getElementById("secret-trigger");
    const letter = document.getElementById("hidden-letter");

    btn.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        letter.scrollIntoView({ behavior:"smooth" });
    }, 100);
}

window.addEventListener("scroll", () => {
    const trigger = document.getElementById("secret-trigger");
    if(!trigger) return;

    const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100;

    if(scrolledToBottom){
        trigger.classList.add("visible");
    }
});

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
