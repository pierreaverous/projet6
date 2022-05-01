
const lightBoxModal = document.getElementById('lightbox_modal')
const articleToShow = document.getElementById('articleToShow')


// On keyup event, close contact modal
document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.code === 'Escape') {
    closeModalLightBox();
  }
});
// On click event, close contact modal
document.getElementById('modal-lightBox__close').addEventListener('click', () => {
  closeModalLightBox();
});

var oldElement = null;
// Display contact modal
function displayModalLightbox(index, photographerObjectMediaTab) { // onclick
  if (oldElement != null)
    articleToShow.removeChild(oldElement)
    const photographerbOjectMedia = photographerObjectMediaTab[index]
    console.log(photographerbOjectMedia)
    lightBoxModal.style.display = 'flex';
    const photographerModelById = MediaFactoryPage(photographerbOjectMedia);
    const userCardByIdDOM = photographerModelById.createModalContent();
    oldElement = userCardByIdDOM
    
    articleToShow.appendChild(userCardByIdDOM);
    
    /* console.log(oldElement) */
    
}
function next (photographerObjectMediaTab, photographerbOjectMedia){
  console.log(photographerbOjectMedia)
  if(photographerObjectMediaTab != photographerbOjectMedia ){
    photographerbOjectMedia +=1;
  }
 
}

document.getElementById('arrowLightboxleft').addEventListener('click', () => {
  next();
});

  
// Close contact modal
function closeModalLightBox() {
  lightBoxModal.style.display = 'none';
}
// class light box 





