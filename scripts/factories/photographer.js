function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

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


const photographerFactoryPage = (photographerObject) => { // Get photographer object
    const {
      name, portrait, city, country, tagline,
    } = photographerObject; // key/value name, portrait etc. 
    const picture = `assets/photographers/${portrait}`;
  
    const createPhotographerCardDOMPage = () => { // Build DOM
        //creation des element 
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
     

      //ce qui apparais dans la page photographer
      article.appendChild(div);
      divButton.appendChild(span);
      article.appendChild(divButton)
      article.appendChild(divPhoto);
      divPhoto.appendChild(img);
      div.appendChild(h1);
      div.appendChild(h2);
      div.appendChild(h3);
      
      
      return article;
    };
  
    return { // an object
      createPhotographerCardDOMPage,
    };
  };
