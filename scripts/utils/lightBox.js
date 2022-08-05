
const lightBoxModal = document.getElementById('lightbox_modal')
const articleToShow = document.getElementById('articleToShow')
const arrowRight = document.getElementById('arrowLightboxleft')
const arrowLeft = document.getElementById('arrowLightbox')


// On keyup event, close contact modal

// On click event, close contact modal
document.getElementById('modal-lightBox__close').addEventListener('click', () => {
  closeModalLightBox();
});

var oldElement = null;


  
     
// Display contact modal
let currentIndex = 0;
function displayModalLightbox(index, photographerObjectMediaTab) { // onclick
  currentIndex = index
  if (oldElement != null)
    articleToShow.removeChild(oldElement)
  let photographerbOjectMedia = photographerObjectMediaTab[index]
 
  lightBoxModal.style.display = 'flex';
  lightBoxModal.setAttribute("aria-hidden", "false");
  onOpenModal()
  togglePhotographeMediaArea()
  const photographerModelById = MediaFactoryPage(photographerbOjectMedia);
  const userCardByIdDOM = photographerModelById.createModalContent();
  oldElement = userCardByIdDOM


  articleToShow.appendChild(userCardByIdDOM);


}



// on fait l'inverse de dernier au 1er
document.addEventListener('keyup', (event) => {
  /* event.target. */
  
  event.preventDefault();
  
  console.log('null') 
  if  (lightBoxModal.style.display === 'none') return  
  
  if (event.code === 'Escape') {
    closeModalLightBox();
  }
  
  if (event.code === 'ArrowLeft') {
    let indexPrev = currentIndex - 1;
    if (currentIndex == 0) {
      indexPrev = photographerMedias.length - 1;
    }
    displayModalLightbox(indexPrev, photographerMedias);
  }
  if (event.code === 'ArrowRight') {
    let indexNext = currentIndex + 1;
    if (currentIndex == photographerMedias.length - 1) {
      indexNext = 0;
    }
    displayModalLightbox(indexNext, photographerMedias);
  }
});



let next = () => {
  console.log('fffff')
  let indexNext = currentIndex + 1;
  if (currentIndex == photographerMedias.length - 1) {
    indexNext = 0;
  }
  displayModalLightbox(indexNext, photographerMedias) 
};
// fonction prev l'evenement click qui permet de remove et de clear et ensuite afficher la precedente photo 

let prev = () => {
  console.log('fffff')
  let indexPrev = currentIndex - 1;
  if (currentIndex == 0) {
    indexPrev = photographerMedias.length - 1;
  }
  displayModalLightbox(indexPrev, photographerMedias)
};

arrowLeft.addEventListener('click', prev)

arrowRight.addEventListener('click', next)

// Close contact modal
function closeModalLightBox() {
  lightBoxModal.style.display = 'none';
  lightBoxModal.setAttribute("arial-hidden", "true");
  onCloseModal();
  togglePhotographeMediaArea();
}





