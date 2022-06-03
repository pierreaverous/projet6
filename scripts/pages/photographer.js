//Mettre le code JavaScript lié à la page photographer.html
/* const url = new URLSearchParams(window.location.search);
let idPhotograph = url.get("id");
idPhotograph = parseInt(idPhotograph);
console.log(idPhotograph)  */

const date = document.getElementById('date')


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
    const prices = photographerToDisplay.price;
    console.log(prices)
    const priceForDay = document.getElementById('div_prix_day')
    priceForDay.textContent = `${prices} € / jour`
    console.log(priceForDay)
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
  /* console.log(photographerObjectMediaTab) */
  const photographerMedia = document.querySelector('.photograph-media-cards');
  photographerMedia.innerHTML = ''

   // je crée la variable like qui contient mon tableau 
    /* console.log(photographerObjectMediaTab) */
  const like = photographerObjectMediaTab;
  // je creé la variabla like qui est un nouveau tableau ou on est allé selectionné que les likes
  function getNumberOfLike () {
    return  like.map(element =>{
      return element.likes
    }).reduce((accum, current) => accum + current)
  }
  
  
  // et je fait la sum de tout les likes dans le tableau 
  
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
      totalLikes.textContent = getNumberOfLike();
     
    })

  })
  
  const totalLikes = document.getElementById('total-like')
  totalLikes.textContent = getNumberOfLike() ;
  /* console.log(totalLikes) */

};

function addEventModal(userCardByIdDOM, index, photographerObjectMediaTab) {
  userCardByIdDOM.addEventListener('click', () => displayModalLightbox(index, photographerObjectMediaTab))
}





async function initPageMedia() {
  // Récupère les datas des photographes
  const PhotographersByMedia = await getPhotographersByMedia();
  displayPhotographerMedia(PhotographersByMedia);
  // sort by popularité
  
  document.getElementById('popularity').addEventListener('click', () => {
    let dropdowns = document.getElementById("myDropdown");
    dropdowns.classList.toggle("show")
    button.classList.remove("hide")
    PhotographersByMedia.sort((a, b) =>{
        return b.likes > a.likes? 1:-1
      })
      displayPhotographerMedia(PhotographersByMedia);
  });
    
    
    
  

   // sort par title
   
   
   
   document.getElementById('titre').addEventListener('click', () => {
    let dropdowns = document.getElementById("myDropdown");
    dropdowns.classList.toggle("show")
    button.classList.remove("hide")
     PhotographersByMedia.sort((a, b) =>{
      if(a.title< b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
      
     })
    
     displayPhotographerMedia(PhotographersByMedia);
   });

  

   // sort par date 
   
   /* console.log(document.getElementById('populaire')) */
   console.log(document.getElementById('date'))
   document.getElementById('date').addEventListener('click', () => {
     let dropdowns = document.getElementById("myDropdown");
     dropdowns.classList.toggle("show")
     button.classList.remove("hide")
     console.log(PhotographersByMedia)
     PhotographersByMedia.sort((a, b) =>{
       new Date(b.date) > new Date(a.date);
       if(a.date > b.date) { return -1; }
      if(a.date < b.date) { return 1; }
      return 0;
      })
      console.log(PhotographersByMedia)
      
      displayPhotographerMedia(PhotographersByMedia);
      });

   
    
};
  /* PhotographersByMedia.sort(filterpopularité())
  PhotographersByMedia.sort(filterTitle()) */



initPageMedia();





/*  document.getElementById('trier').addEventListener('click', () => {
  PhotographersByMedia.sort((a, b) =>{ b.likes - a.likes
    
  })
 }); */