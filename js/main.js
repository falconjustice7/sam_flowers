// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get audio elements
  const audio = document.getElementById('bgMusic');
  const muteBtn = document.getElementById('muteBtn');
  
  // Function to handle audio play
  const playAudio = () => {
    try {
      audio.volume = 0.3; // Set volume to 30%
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
          // Show mute button to indicate audio is available
          muteBtn.style.display = 'block';
        });
      }
    } catch (e) {
      console.log("Audio error:", e);
    }
    
    // Remove event listeners after first interaction
    document.removeEventListener('click', playAudio);
    document.removeEventListener('keydown', playAudio);
  };

  // Enable audio on any user interaction
  document.addEventListener('click', playAudio);
  document.addEventListener('keydown', playAudio);

  // Mute toggle functionality
  muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
  });

  // Show birthday message after delay
  setTimeout(() => {
    const message = document.querySelector('.birthday-message');
    if (message) {
      message.style.animation = 'fadeIn 2s forwards, pulse 2s infinite';
      
      // Add floating hearts effect
      setInterval(() => {
        if (!audio.paused) createFloatingHeart();
      }, 1500);
    }
  }, 3000);

  // Start flower animations
  if (typeof animationTimeline === 'function') {
    animationTimeline();
  }
});

// Remove container class on load
window.onload = () => {
  document.body.classList.remove("container");
};

