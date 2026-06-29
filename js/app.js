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
    window.location.href = CONFIG.pages.memories;
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
        window.location.href = CONFIG.pages.letter;
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

        window.location.href = CONFIG.pages.wishes;

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