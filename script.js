const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Randomize the starting position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duration between 3s and 5s

    // Add the heart to the container
    heartsContainer.appendChild(heart);

    // Remove the heart after the animation is done
    setTimeout(() => {
        heart.remove();
    }, 5000); // Matches the animation duration
}

// Generate a new heart every 300ms
setInterval(createHeart, 300);
