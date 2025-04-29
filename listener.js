document.addEventListener('DOMContentLoaded', () => {
  // Select the button (by class, id, or other selector)
  const button = document.querySelector("#clickme"); // Adjust selector as needed
  // const audio = new audio('sound.mp3');

  button.addEventListener('click', () => {
    // Add Bootstrap's .disabled class for styling
    button.classList.add('disabled');
    // Disable the button for real (prevents further clicks)
    button.disabled = true;
    // Change the text to "Bingo!"
    button.textContent = 'Enjoy the ride!';

    // Optional: Play sound if <audio id="sound" src="sound.mp3"></audio> exists
    const sound = document.querySelector("#metallicaAudio");
    if (sound) {
      sound.play();
    }
  });
});
