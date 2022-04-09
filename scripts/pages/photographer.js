//Mettre le code JavaScript lié à la page photographer.html
/* const url = new URLSearchParams(window.location.search);
let idPhotograph = url.get("id");
idPhotograph = parseInt(idPhotograph);
console.log(idPhotograph)  */


const initPhotographerPage = () => {
  fetch('./data/photographers.json') // Get .json
    .then((response) => response.json()) // Make JS object
    .then((data) => {
      const searchParams = new URLSearchParams(window.location.search); // Make a new empty URLSearchParams object
      const photographerId = searchParams.get('id'); // Return the first found id value 
      const photographerToDisplay = data.photographers.find( // = objects containing this photographer id
        (element) => element.id == photographerId, 
      );
      const mediasToDisplay = data.media.filter( // = objects containing this photographer id
      (element) => element.photographerId == photographerId,
      );
      console.log(photographerToDisplay)
      console.log(mediasToDisplay)
      displayPhotographer(photographerToDisplay);
      displayMedias(mediasToDisplay)
     // Launch displayPhotographer
    });
};

initPhotographerPage(); // Launch init

const displayPhotographer = (photographerObject) => {
  const photographerHeader = document.querySelector('.photograph-header'); // Add userCardDOM node
  const photographerModel = photographerFactoryPage(photographerObject); // Object keys/values
  const userCardDOM = photographerModel.createPhotographerCardDOMPage(); 
  photographerHeader.appendChild(userCardDOM);
};

const displayMedias = (medias) => {
  const mediasCards = document.querySelector('.photograph-media-cards'); // Add mediasCards node 

  // MEDIAS DOM
  // Likes and lightbox display
  const displayMediaDom = (medias) => {
    
    // IMAGE OR VIDEO (cf. factory)
    medias.forEach((media) => {
      if (media.hasOwnProperty('image')) { // Return boolean, true of false, if image...
        mediasCards.append(createImageFactoryPage(media)); 
      } else if (media.hasOwnProperty('video')) {
        mediasCards.append(createVideoFactoryPage(media)); 
      }
    });

  }
}
