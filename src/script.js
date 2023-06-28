import Livre from "./livre";

const form = document.querySelector('form');

form.addEventListener('submit', (e) =>
{
    e.preventDefault(); // Ne recharge pas la page automatiquement 

    const titleInput = document.querySelector('#title-input');
    const authorInput = document.querySelector('#author-input');
    const imageInput = document.querySelector('#image-input');

    // récupération des valeurs 
    const title = titleInput.value;
    const author = authorInput.value;
    const image = imageInput.value;

    const newLivre = new Livre(title, author, image);
    const livreElement = newLivre.createLivreElement();
    $(livreElement).hide(); // cacher l'élément avant le fade in

    const deleteButton = livreElement.querySelector(".delete"); // Pour effacer une carte grâce au bouton supprimer
    deleteButton.addEventListener("click", function() 
    {
    livreElement.remove();
    });

    const livresContainer = document.querySelector('.row');
    livresContainer.appendChild(livreElement);
    $(livreElement).fadeIn("slow"); // la carte apparaît en fade in

    // les champs du formulaire sont réinitialisés
    titleInput.value = ""; 
    authorInput.value = "";
    imageInput.value = "";
});