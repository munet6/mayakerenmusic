// List of images and their captions
const images = [
  "craftpics/C'mon Everybody Careful.png",
  "craftpics/sperm spoon front.jpg",
  "craftpics/sperm spoon back.jpg",
  "craftpics/bell hat 1.jpg",
  // Add more image file paths as needed
];

const captions = [
  "Gig poster for Careful In The Sun at C'mon Everybody",
  "Reluctantly/retroactively titled Sperm Spoon, for isa, front",
  "Reluctantly/retroactively titled Sperm Spoon, for isa, back",
  "Crocheted bell hat, modeled by Kyle",
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
