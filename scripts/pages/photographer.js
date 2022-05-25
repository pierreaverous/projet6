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
  /* console.log(mediasToDisplay) */
  return mediasToDisplay
}


async function displayPhotographerMedia(photographerObjectMediaTab) {
  console.log(photographerObjectMediaTab)
  const photographerMedia = document.querySelector('.photograph-media-cards');
  
  
  
  photographerObjectMediaTab.forEach((photographerObjMedia, index) => {
    
    const photographerModelById = MediaFactoryPage(photographerObjMedia);
    const userCardByIdDOM = photographerModelById.createMediaDOMPage();
    /*  console.log(userCardByIdDOM) */
    photographerMedia.appendChild(userCardByIdDOM);

    addEventModal(userCardByIdDOM, index, photographerObjectMediaTab)
    ////Ajout de la fonction pour la light box prendre exemple au dessus re creer un dom dans das lightboxjs
    // on est allez selectioné l'icon on lui a aplliquer un evenement en allant chercher dans le tableau la propriété like ( photographerObjectMediaTab[index].likes++)
   const  likesNumber = (userCardByIdDOM.querySelector('.like-number')) 
   /* console.log( userCardByIdDOM.querySelector('.heart-icon')) */
   userCardByIdDOM.querySelector('.heart-icon').addEventListener('click', () => {
     photographerObjectMediaTab[index].likes++ // on la incémenter 
     // on est allez cherchez l'affichage du nombre de likes et on lui a ajouté ca nouvelle valeur avec photographerObjectMediaTab[index].likes
     likesNumber.textContent = photographerObjectMediaTab[index].likes;
   })
    /* console.log(index) */
    // je crée la variable like qui contient mon tableau 
  const like = photographerObjectMediaTab;
  // je creé la variabla like qui est un nouveau tableau ou on est allé selectionné que les likes
  let likes = like.map(element =>{
    return element.likes
  })
  console.log(likes)
  // et je fait la sum de tout les likes dans le tableau 
  let sum = 0;
  
  for (let i = 0; i < likes.length; i++) {
    sum += likes[i];
  }
  console.log(sum)
  /* const  sumLike = (userCardByIdDOM.querySelector('.like-total'))
  sumLike.textContent = sum 
  console.log(sumLike) */
 

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


