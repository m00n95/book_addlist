class Livre
{
    constructor(title, author, image)
    {
        this.title = title;
        this.author = author;
        this.image = image;
    }

    createLivreElement()
    {
        const livreElement = document.createElement('div');
        livreElement.classList.add('col-md-3');  // Taille unique pour la div contenant le livre et ses infos

        livreElement.innerHTML =  // HTML créer en js pour aller dans la div qui contient les livres
        `<div class="card" style="width: 18rem;">
            <img src="${this.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.author}</p>
                <button type="button" class="btn btn-danger delete">Supprimer</button>
            </div>
        </div>`

        return livreElement;
    }
}

export default Livre;