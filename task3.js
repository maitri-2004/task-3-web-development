// Carousel Images
const carouselImages = [
  'https://picsum.photos/id/1011/600/400',
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1025/600/400'
];

let currentIndex = 0;
const imageElement = document.getElementById("carouselImage");
const indicatorsContainer = document.getElementById("carouselIndicators");

function renderIndicators() {
  indicatorsContainer.innerHTML = '';
  carouselImages.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add(index === currentIndex ? 'active' : '');
    dot.onclick = () => showImage(index);
    indicatorsContainer.appendChild(dot);
  });
}

function showImage(index) {
  currentIndex = index;
  imageElement.src = carouselImages[index];
  renderIndicators();
}

function navigateCarousel(direction) {
  currentIndex = (currentIndex + direction + carouselImages.length) % carouselImages.length;
  showImage(currentIndex);
}

// Initialize carousel
document.addEventListener("DOMContentLoaded", () => {
  showImage(currentIndex);
});

// Joke API
async function fetchJoke() {
  const jokeBox = document.getElementById("jokeBox");
  jokeBox.textContent = "Loading joke...";
  try {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await res.json();
    jokeBox.textContent = data.joke || "Couldn't fetch a joke.";
  } catch (error) {
    jokeBox.textContent = "Error fetching joke. Try again.";
  }
}
