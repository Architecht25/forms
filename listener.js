document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector("#clickme");
  const sound = document.getElementById("Audio");

  let hasPlayed = false; // ✅ Empêche de jouer plusieurs fois

  if (button && sound) {
    button.addEventListener('click', () => {
      if (!hasPlayed) {
        sound.currentTime = 0;
        sound.play().catch(err => {
          console.warn("Le son n’a pas pu être joué :", err);
        });
        hasPlayed = true; // 🔒 Bloque les lectures futures
      }

    button.textContent = 'Enjoy the ride!';
    });
  }
});
