 function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip if not a transform
    this.classList.remove("playing"); // removes the "playing" class
}

      function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return; // stops the function from running
        audio.currentTime = 0; // resets the audio to the beginning of the clip when it's played again
        audio.play(); // starts playing
        key.classList.add("playing"); // adds the "playing" class to the key
      }

      const keys = document.querySelectorAll(".key");
      keys.forEach((key) =>
        key.addEventListener("transitionend", removeTransition)
      );
      window.addEventListener("keydown", playSound);