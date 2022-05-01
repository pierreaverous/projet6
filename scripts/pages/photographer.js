//Mettre le code JavaScript lié à la page photographer.html
/* const url = new URLSearchParams(window.location.search);
let idPhotograph = url.get("id");
idPhotograph = parseInt(idPhotograph);
console.log(idPhotograph)  */


async function getPhotographersById() {

  // Penser à remplacer par les données récupérées dans le json
  const reponse = await fetch("./data/photographers.json");
  const data = await reponse.json();
  const searchParams = new URLSearchParams(window.location.search);
  const photographerId = searchParams.get('id');
  const photographerToDisplay = data.photographers.find(
    (element) => element.id == photographerId
  );

  /*  console.log(photographerToDisplay) */
  // et bien retourner le tableau photographers seulement une fois
  return photographerToDisplay
}
/* console.log(getPhotographersById()) */

async function displayPhotographer(photographerObject) {

  const photographerHeader = document.querySelector('.photograph-header');
  /* console.log(photographerObject) */
  const photographerModelById = photographerFactoryPage(photographerObject);
  const userCardByIdDOM = photographerModelById.createPhotographerCardDOMPage();
  photographerHeader.appendChild(userCardByIdDOM);


};

async function initPage() {
  // Récupère les datas des photographes
  const photographers = await getPhotographersById();
  displayPhotographer(photographers);
};

initPage();




// js pour les media ! *
async function getPhotographersByMedia() {

  // Penser à remplacer par les données récupérées dans le json
  const reponse = await fetch("./data/photographers.json");
  const data = await reponse.json();
  const searchParams = new URLSearchParams(window.location.search);
  const photographerId = searchParams.get('id');
  const mediasToDisplay = data.media.filter( // = objects containing this photographer id
    (element) => element.photographerId == photographerId,
  );

  /* console.log(photographerToDisplay) */
  // et bien retourner le tableau photographers seulement une fois
  console.log(mediasToDisplay)
  return mediasToDisplay
}


async function displayPhotographerMedia(photographerObjectMediaTab) {
  console.log(photographerObjectMediaTab)
  const photographerMedia = document.querySelector('.photograph-media-cards');
  /* console.log(photographerObject) */

  let index = 0;
  photographerObjectMediaTab.forEach((photographerObjMedia) => {
   
    const photographerModelById = MediaFactoryPage(photographerObjMedia);
    const userCardByIdDOM = photographerModelById.createMediaDOMPage();
    /*  console.log(userCardByIdDOM) */
    photographerMedia.appendChild(userCardByIdDOM);

    addEventModal(userCardByIdDOM, index, photographerObjectMediaTab)
    ////Ajout de la fonction pour la light box prendre exemple au dessus re creer un dom dans das lightboxjs
    index += 1;
   
   
  })

};

function addEventModal(userCardByIdDOM, index, photographerObjectMediaTab) {
  userCardByIdDOM.addEventListener('click', () => displayModalLightbox(index, photographerObjectMediaTab))
}


async function initPageMedia() {
  // Récupère les datas des photographes
  const PhotographersByMedia = await getPhotographersByMedia();
  displayPhotographerMedia(PhotographersByMedia);
};

initPageMedia();


