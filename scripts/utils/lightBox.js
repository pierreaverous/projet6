
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
function displayModalLightbox(index, photographerObjectMediaTab) { // onclick
  if (oldElement != null)
    articleToShow.removeChild(oldElement)
  let photographerbOjectMedia = photographerObjectMediaTab[index]
 
// on modifie l'index pour que quand on est au premier on arrive ensuite au dernier
  let indexPrev = index - 1;
  if (index == 0) {
    indexPrev = photographerObjectMediaTab.length - 1;
  }
// on fait l'inverse de dernier au 1er
  let indexNext = index + 1;
  if (index == photographerObjectMediaTab.length - 1) {
    indexNext = 0;
  }

// fonction next de l'evenement click qui permet de clear et ensuite afficher la prochaine photo 
  let next = () => {
    arrowRight.removeEventListener('click', next)
    displayModalLightbox(indexNext, photographerObjectMediaTab)

  };
// fonction prev l'evenement click qui permet de remove et de clear et ensuite afficher la precedente photo 

  let prev = () => {
    arrowLeft.removeEventListener('click', prev)
    displayModalLightbox(indexPrev, photographerObjectMediaTab)

  };

  arrowLeft.addEventListener('click', prev)

  arrowRight.addEventListener('click', next)

  // evenement qui permet de changer d'image avec les fleche du clavier 
  document.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.code === 'Escape') {
      closeModalLightBox();
    }
    if (event.code === 'ArrowLeft') {
      
      displayModalLightbox(indexPrev, photographerObjectMediaTab);
    }
    if (event.code === 'ArrowRight') {
      displayModalLightbox(indexNext, photographerObjectMediaTab);
    }
  });



  lightBoxModal.style.display = 'flex';
  const photographerModelById = MediaFactoryPage(photographerbOjectMedia);
  const userCardByIdDOM = photographerModelById.createModalContent();
  oldElement = userCardByIdDOM
 

  articleToShow.appendChild(userCardByIdDOM);

}

// Close contact modal
function closeModalLightBox() {
  lightBoxModal.style.display = 'none';
}





