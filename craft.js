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
  "craftpics/sweat 1.png",
  "craftpics/sweat detail.png",
  "craftpics/Roulette Threadgill Poster.png",
  "craftpics/Studio 34 Poster Vertical.png",
  "craftpics/ricochetbracelet.jpg",
  "craftpics/lefthand.jpg",
  "craftpics/Careful Closeup Poster.png",
  "craftpics/cobynecklace.jpg",
  "craftpics/camiring.jpg",
  "craftpics/merch1.JPG",
  "craftpics/merch2.JPG",
  "craftpics/merch3.JPG",
  // Add more image file paths as needed
];

const captions = [
  "Gig poster for Careful In The Sun at C'mon Everybody (colored pencil, pen)",
  "Handcarved, reluctantly/retroactively titled Sperm Spoon, for isa, front",
  "Sperm Spoon, back",
  "Crocheted mohair bell hat, modeled by Kyle",
  "Another angle...",
  "Gig poster for Careful In The Sun at Sisters (colored pencil, pen)",
  "Crocheted tank",
  "Modeling...",
  "Tour poster for Careful In The Sun Spring Tour (photo collage)",
  "Crocheted hat with feather charm detail",
  "Modeling the sexy hat!",
  "Gig poster for Lesley Mok's stone week (watercolor, photo collage)",
  "Tee shirt design for sinonó",
  "Tee back design",
  "Gig poster for Maya Keren/Emmanuel Michael at Bar Sundown (colored pencil, marker)",
  "Visible sashiko mend to a burn hole in my favorite sweatshirt",
  "Mend detail",
  "Gig poster for Rahul Carlberg/Maya Keren at Roulette (watercolor marker, pen)",
  "Gig poster for Careful In The Sun at Studio 34 (watercolor marker)",
  "Ricochet bracelet (silver finished with liver of sulphur)"
  "Left hand dowsing charm (copper)"
  "Gig poster for Careful In The Sun at Closeup (marker, photo collage)"
  "Graduation necklace for Coby (silver)"
  "Ring for cami (silver)"
  "Travel altar and incense holder Slow Burn Merch, indigo colorway (silk, cotton, mohair, copper)"
  "Travel altar and incense holder Slow Burn Merch, lilac colorway (silk, cotton, mohair, copper)"
  "Travel altars looking pretty"
    
  // Add corresponding captions for each image
];

let currentIndex = 0;

// Function to load the next image and update caption
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
  document.getElementById("caption").textContent = captions[currentIndex];
}

// Function to go to the previous image, connected to the nav arrows
function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
  document.getElementById("caption").textContent = captions[currentIndex];
}

// Add an event listener to the image
document.getElementById("mainImage").addEventListener("click", showNextImage);
