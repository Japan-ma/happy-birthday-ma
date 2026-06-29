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