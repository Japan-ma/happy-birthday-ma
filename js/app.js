// Happy Birthday Ma 💜

// Create Stars
const starsContainer = document.getElementById("stars");

if (starsContainer) {
  for (let i = 0; i < 300; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = (Math.random() * 3) + "s";

    starsContainer.appendChild(star);
  }
}

// Create Shooting Stars
const shootingContainer = document.getElementById("shooting-stars");

if (shootingContainer) {
  for (let i = 0; i < 5; i++) {
    const s = document.createElement("div");
    s.className = "shooting-star";

    s.style.top = (Math.random() * 60) + "%";
    s.style.left = "-200px";
    s.style.animationDelay = (i * 2) + "s";

    shootingContainer.appendChild(s);
  }
}

// Open Gift Button
const giftButton = document.getElementById("openGift");

if (giftButton) {
  giftButton.addEventListener("click", () => {
    window.location.href = CONFIG.pages.letter;
  });
}// Music Button
const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {

    const audio = new Audio(CONFIG.music.file);
    audio.loop = true;
    audio.volume = CONFIG.music.volume;

    let playing = false;

    musicBtn.addEventListener("click", () => {

        if (!playing) {
            audio.play();
            musicBtn.textContent = "⏸";
            playing = true;
        } else {
            audio.pause();
            musicBtn.textContent = "🎵";
            playing = false;
        }

    });

}
// Memories Page - Next Button
const nextPageBtn = document.getElementById("nextPage");

if (nextPageBtn) {
    nextPageBtn.addEventListener("click", () => {
        window.location.href = CONFIG.pages.memorie;
    });
}
// ===============================
// Letter Typewriter Effect
// ===============================

const letterText = document.getElementById("letterText");

if (letterText) {

    const message = `Happy Birthday, My Dearest Ma 💜

Today is all about you.

Thank you for coming into my life and making every day brighter.

I hope your smile never fades, your dreams come true, and your heart is always filled with happiness.

No matter where life takes us, you will always have a special place in my heart.

Happy Birthday! 🎂💜`;

    letterText.textContent = "";

    let index = 0;

    function typeLetter() {

        if (index < message.length) {

            letterText.textContent += message.charAt(index);

            index++;

            setTimeout(typeLetter, 40);

        }

    }

    typeLetter();

}
// ===============================
// Letter Page - Next Button
// ===============================

const nextWish = document.getElementById("nextWish");

if (nextWish) {

    nextWish.addEventListener("click", () => {

        window.location.href = CONFIG.pages.countdown;

    });

}
// ===============================
// Birthday Countdown
// ===============================

const countdown = document.getElementById("countdown");

if (countdown) {

    function updateCountdown() {

        const now = new Date();

        let target = new Date(now.getFullYear(), 6, 6); // July = 6

        if (now > target) {
            target = new Date(now.getFullYear() + 1, 6, 6);
        }

        const diff = target - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdown.innerHTML =
            `🎂 ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

}
// ===============================
// Wishes Page - Next Button
// ===============================

const finalPage = document.getElementById("finalPage");

if (finalPage) {

    finalPage.addEventListener("click", () => {

        window.location.href = CONFIG.pages.surprise;

    });

}
// ===============================
// Replay Story
// ===============================

const replayStory = document.getElementById("replayStory");

if (replayStory) {

    replayStory.addEventListener("click", () => {

        window.location.href = CONFIG.pages.welcome;

    });

}
// ===============================
// Floating Hearts
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💜";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 800);

// ===============================
// Fireworks Effect
// ===============================

function createFirework() {

    const firework = document.createElement("div");

    firework.innerHTML = "✨";

    firework.style.position = "fixed";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.fontSize = (20 + Math.random() * 30) + "px";
    firework.style.pointerEvents = "none";
    firework.style.zIndex = "9999";
    firework.style.transition = "all 1s ease";

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.style.transform = "scale(2)";
        firework.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        firework.remove();
    }, 1200);

}

setInterval(createFirework, 1500);
// ===============================
// Gallery Lightbox
// ===============================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

document.querySelectorAll(".gallery img").forEach(photo=>{

    photo.addEventListener("click",()=>{

        lightbox.classList.add("active");
        lightboxImage.src = photo.src;

    });

});

if(lightbox){

    lightbox.addEventListener("click",()=>{

        lightbox.classList.remove("active");

    });

}
// ===============================
// Smooth Page Transition
// ===============================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

document.querySelectorAll("a").forEach(link => {

    if (link.target === "_blank") return;

    link.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        if (!href || href.startsWith("#")) return;

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = href;
        }, 500);

    });

});
// ===============================
// Smooth Navigation
// ===============================

function goToPage(url){

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = url;

    },500);

}
// ===============================
// Confetti Effect
// ===============================

function createConfetti(){

    const colors = [
        "#ff4d6d",
        "#ffd60a",
        "#60a5fa",
        "#a855f7",
        "#ffffff"
    ];

    const confetti = document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left = Math.random()*100 + "vw";
    confetti.style.background =
        colors[Math.floor(Math.random()*colors.length)];

    confetti.style.animationDuration =
        (3 + Math.random()*2) + "s";

    document.body.appendChild(confetti);

    setTimeout(()=>{
        confetti.remove();
    },5000);

}

setInterval(createConfetti,180);
// ===============================
// Mouse Glow
// ===============================

const cursorGlow = document.getElementById("cursorGlow");

if (cursorGlow) {

    document.addEventListener("mousemove", (e) => {

        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";

    });

}
// ===============================
// Loading Screen
// ===============================

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.classList.add("loader-hide");

            setTimeout(()=>{

                loader.remove();

            },800);

        },1500);

    }

});
// ===============================
// Birthday Cake
// ===============================

const birthdayCake = document.getElementById("birthdayCake");

if (birthdayCake) {

    birthdayCake.addEventListener("click", () => {

        for (let i = 0; i < 60; i++) {

            createConfetti();

        }

        alert("🎉 Happy Birthday Ma! 💜");

    });

}
// ===============================
// Heart Rain
// ===============================

function createHeartRain(){

    const heart = document.createElement("div");

    heart.className = "heart-rain";
    heart.innerHTML = "💜";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    heart.style.fontSize = (18 + Math.random() * 16) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(createHeartRain, 500);