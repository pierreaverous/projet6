async function getPhotographers() {
    
    // Penser à remplacer par les données récupérées dans le json
    const reponse = await fetch("./data/photographers.json");
    const data = await reponse.json();
    console.log(data)

    // et bien retourner le tableau photographers seulement une fois
    return data

    
    



}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    console.log(photographerFactory(photographers))
    photographers.forEach((photographer) => {
        const photographerModel = this.photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};




