// List of images and their captions
const images = [
  "img/photo1.jpg",
  "img/photo2.jpg",
  "img/photo3.jpg",
  "img/photo4.jpg",
  // Add more image file paths as needed
];

const captions = [
  "Photo 1",
  "Photo 2",
  "Photo 3",
  "Photo 4",
  // Add corresponding captions for each image
];

let currentIndex = 0;

// Function to load the next image and update caption
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
  document.getElementById("caption").textContent = captions[currentIndex];
}

// Add an event listener to the image
document.getElementById("mainImage").addEventListener("click", showNextImage);
