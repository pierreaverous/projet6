function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    // dom de la premiere page des photographes
    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        const div_price = document.createElement('div');
        div_price.textContent = `${price}€/jour`
        const div_localisation = document.createElement('div');
        div_localisation.textContent = `${city}, ${country}`
        const div_tagline = document.createElement('div');
        div_tagline.textContent = tagline
        const a = document.createElement('a');
        a.setAttribute("href",`photographer.html?id=${id}`)
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        //ajout classe pour img classeList.add sert ajouté une classe
        img.classList.add("photo");
        h2.classList.add('name');
        div_localisation.classList.add("localisation");
        div_tagline.classList.add("tagline");
        div_price.classList.add("prix");
        
        a.appendChild(img);
        article.appendChild(a);
        article.appendChild(h2);
        article.appendChild(div_localisation);
        article.appendChild(div_tagline);
        article.appendChild(div_price);
       // setattribut pour les aria-label
       article.setAttribute("aria-label", `Carte de ${name},.`);
       article.setAttribute("aria-describedBy", "picture");
       a.setAttribute("aria-label", `lien vers la page de ${name}`)
       h2.setAttribute("aria-label",`Le nom de l'artiste est ${name}` );
       div_localisation.setAttribute("aria-label", `Le lieux est ${city} dans le pays ${country}`);
       div_tagline.setAttribute("aria-label", `petite description ${tagline}`);
       div_price.setAttribute("aria-label", `le prix est de ${price} euros par jour`)

        return (article);
    }
    return { name, picture, getUserCardDOM }
}


// page photographe individuelle 

function photographerFactoryPage(dataID) {
  
  const { name, portrait, id, city, country, tagline, price,   } = dataID;
  
  const picture = `assets/photographers/${portrait}`;
   // dom du header de la page photographer id 
  function createPhotographerCardDOMPage() {
    const article = document.createElement('article');
    const div = document.createElement('div');
    const divPhoto = document.createElement('div');
    const divButton = document.createElement('div')
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', `${name}`);
    const h1 = document.createElement('h1');
    h1.textContent = name;
    const h2 = document.createElement('h2');
    h2.textContent = `${city}, ${country}`;
    const h3 = document.createElement('h3');
    h3.textContent = tagline;
   
    const span = document.createElement('span');
    span.innerHTML = '<button tabindex="4" class="contact-button" role="button" onclick="displayModal()">Contactez-moi</button>';
    // ajout des classe pour le css
    img.classList.add("Photograph");
    h1.classList.add('name');
    h2.classList.add("localisation");
    h3.classList.add("tagline")
    article.classList.add("article")
    div.classList.add("divTextHeader")
    divPhoto.classList.add("divPhoto")
    divButton.classList.add("divButton")
    
    /* totalLike.classList.add("like-total") */

   

    //ce qui apparais dans la page photographer
    article.appendChild(div);
    divButton.appendChild(span);
    article.appendChild(divButton)
    article.appendChild(divPhoto);
    divPhoto.appendChild(img);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    
    // accesibility 

    divPhoto.setAttribute("aria-label", `photo de ${name},.`);
    img.setAttribute("aria-describedBy", "picture");
    divButton.setAttribute("aria-label", 'button qui ouvre le formulaire')
    divButton.setAttribute("aria-describedBy", "button")
    h1.setAttribute("aria-label", `le ${name}du photographe `)
    h2.setAttribute("aria-label", ` origine:${city} ${country} `)
    h3.setAttribute("aria-label", `la phrase d'accroche du photographe ${tagline}`)
    /* div_price.appendChild(totalLike) */

    
      return (article);
  }
  return { name, picture,createPhotographerCardDOMPage }
}

//Media Factory 
class Media {
  constructor ({title , id, date , photographerId, likes, price, src}
    ){
    this.title = title;
    this.id = id;
    this.date = date;
    this.photographerId = photographerId;
    this.likes  = likes ;
    this.price =price;
    this.src = src;
    
  } 
  createMediaDOMPage(){


  }

}
// creation de l'article image
class MediaImg extends Media{
  constructor(data){
    super({...data, src: data.image})

  }
  createMediaDOMPage(){
    const article = document.createElement('article');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = this.likes;
    const svg = document.createElement('img')
    svg.setAttribute('src', './assets/icons/heart-regular.svg')
    img.setAttribute('src',`./assets/photographers/${this.photographerId}/${this.src}`);
    img.innerHTML = '<role="button" onclick="displayModal()"></button>';
    
    const h1 = document.createElement('h1');
    h1.textContent = this.title;
    
    // ajout des classe pour le css
    img.classList.add("PhotographMedia");
    h1.classList.add("titleMedia")
    div.classList.add("photographeText")
    h2.classList.add("like-number")
    svg.classList.add("heart-icon")
    
   

    //ce qui apparais dans la page photographer
    article.appendChild(img);
    article.appendChild(div);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(svg)
    /* console.log(h2)
     */
  
    // accessibilité de l'article image
    
    img.setAttribute("tabindex","3")
    img.setAttribute("aria-label", `${this.title} est le titre de l'image`)
    img.setAttribute("aria-describedBy", "picture")
    h2.setAttribute("aria-label", `${this.likes} est le nombres de likes`)
    h1.setAttribute("aria-label", `${this.title} est le titre de l'image`)
    



    return article;
  }
  // creation de la modale light box
  createModalContent(){
    const article = document.createElement('article');
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src',`/assets/photographers/${this.photographerId}/${this.src}`);
    img.innerHTML = '<role="button" onclick="displayModal()"></button>';
    
    const h1 = document.createElement('h1');
    h1.textContent = this.title;
    
    // ajout des classe pour le css
    img.classList.add("PhotographModalLightbox");
    h1.classList.add("titleMedia-lightBox")
    article.classList.add("articleLightBox")
    
    
   

    //ce qui apparais dans la page photographer
    article.appendChild(img);
    article.appendChild(div);
    article.appendChild(h1);

    // Accesibilité pour la lightboxx
    img.setAttribute("tabindex","4")
    img.setAttribute("aria-label", `la photo s'appelle ${this.title}`)
    h1.setAttribute("aria-label", `${this.title} est le titre de l'image`)
    
    
  



    return article;
  }

  
}

//creation de l'article video 
class MediaVideo extends Media{
  constructor(data){
    super({...data, src: data.video})

  }
  createMediaDOMPage(){
    const article = document.createElement('article');
    const video = document.createElement('video');
    const src = document.createElement('source');
    const div = document.createElement('div');
    const svg = document.createElement('img')
    svg.setAttribute('src', './assets/icons/heart-regular.svg')
    
   video.setAttribute('src',`/assets/photographers/${this.photographerId}/${this.src}`);
   video.setAttribute("type", "video/mp4");
   video.setAttribute("poster", `./assets/photographers/${this.photographerId}/${this.src}`)
   video.setAttribute("controls", false);
   video.setAttribute("autoplay", false);
   src.setAttribute('src', `./assets/photographers/${this.photographerId}/${this.src}`)
   src.setAttribute('type', 'video/mp4')
   
   const h1 = document.createElement('h1');
   h1.textContent = this.title;
   const h2 = document.createElement('h2');
    h2.textContent = this.likes;

    
  
    // ajout des classe pour le css
    
   
   
    video.classList.add("video-card");
    h1.classList.add("titleMedia");
    div.classList.add("photographeText")
    h2.classList.add("like-number")
    svg.classList.add("heart-icon")

    
    
    

    
   

    //ce qui apparais dans la page photographer
    
    article.appendChild(video);
    video.appendChild(src);
    article.appendChild(div);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(svg)

   // Accesibilité Article video 
   video.setAttribute("aria-label", `${this.title} est le titre de a video`)
   video.setAttribute("aria-describedBy", "video")
   svg.setAttribute("aria-label", ` est l'icon d'un coeur`)
   svg.setAttribute('aria-describedBy', "icon")
   h2.setAttribute("aria-label", `${this.likes} est le nombres de likes`)
   h1.setAttribute("aria-label", `${this.title} est le titre de l'image`)
    
    return article;
  }

  

  createModalContent(){
    const article = document.createElement('article');
    const video = document.createElement('video')
    const src = document.createElement('source')
    
   video.setAttribute('src',`/assets/photographers/${this.photographerId}/${this.src}`);
   video.setAttribute("type", "video/mp4");
   video.setAttribute("poster", `./assets/photographers/${this.photographerId}/${this.src}`)
   video.setAttribute("controls", false);
   video.setAttribute("autoplay", false);
   src.setAttribute('src', `./assets/photographers/${this.photographerId}/${this.src}`)
   src.setAttribute('type', 'video/mp4')
   
   const h1 = document.createElement('h1');
   h1.textContent = this.title;
  
    // ajout des classe pour le css
    
   
   
    video.classList.add("video-card-light")
    h1.classList.add("titleMedia-lightBox")
    article.classList.add("articleLightBox");

    
   

    //ce qui apparais dans la page photographer
    
    article.appendChild(video);
    video.appendChild(src);
    article.appendChild(h1);

   
    
    return article;
  }

}




function MediaFactoryPage(data) {
  if (data.hasOwnProperty('image')){
    return new MediaImg(data)
  }
  if (data.hasOwnProperty('video')){
    return new MediaVideo(data)
  }
}

























































