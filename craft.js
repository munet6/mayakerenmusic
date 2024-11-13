// List of images and their captions
const images = [
  "craftpics/C'mon Everybody Careful.png",
  "craftpics/sperm spoon front.jpg",
  "craftpics/sperm spoon back.jpg",
  "craftpics/bell hat 1.jpg",
  "craftpics/bell hat 2.jpg",
  "craftpics/Careful Sisters.jpg",
  "craftpics/crochet tank 1.jpg",
  "craftpics/crochet tank 2.jpg",
  "craftpics/Careful Spring Tour.png",
  "craftpics/feather hat.jpg",
  "craftpics/feather hat model.jpg",
  "craftpics/Lesley Stone.png",
  "craftpics/sinono tee front.png",
  "craftpics/sinono tee back.png",
  "craftpics/Duo Bar Sundown.jpg",
  // Add more image file paths as needed
];

const captions = [
  "Gig poster for Careful In The Sun at C'mon Everybody",
  "Reluctantly/retroactively titled Sperm Spoon, for isa, front",
  "Reluctantly/retroactively titled Sperm Spoon, for isa, back",
  "Crocheted bell hat, modeled by Kyle",
  "Another angle...",
  "Gig poster for Careful In The Sun at Sisters",
  "Crocheted tank",
  "Modeling...",
  "Tour poster for Careful In The Sun Spring Tour",
  "Crocheted hat with feather charm detail",
  "Modeling the sexy hat!",
  "Gig poster for Lesley Mok's stone week",
  "Tee shirt design for sinonó",
  "Tee back design",
  "Gig poster for Maya Keren/Emmanuel Michael at Bar Sundown",
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
