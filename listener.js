document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector("#clickme");
  const messageBox = document.querySelector("#message");
  const sound = document.querySelector("#audio");

  if (button && messageBox) {
    button.addEventListener('click', () => {
      button.textContent = 'at least you remain with a good sound 🎸';
      messageBox.style.display = 'block';
      sound.play();
    });
  }
});
