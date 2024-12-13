const countdownElement = document.getElementById("countdownTimer");
const previewBtn = document.getElementById("preview");
const message = document.getElementById("message");

function updateCountdown() {
  const newYear = new Date("January 1, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = newYear - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days}:${hours}:${minutes}:${seconds}`;

  if (timeLeft < 0) {
    clearInterval(timer);
    countdownElement.textContent = "00:00:00:00";
    message.classList.remove("hidden");
    message.textContent = "Happy New Year! 🎉";
  }
}

previewBtn.addEventListener("click", () => {
    message.textContent = "Happy New Year! 🎉"; 
    message.classList.remove("hidden"); 
    message.classList.add("animated-message");
  
    setTimeout(() => {
      message.classList.remove("animated-message");
    }, 3000);
});

const timer = setInterval(updateCountdown, 1000);