let localStorageClient = JSON.parse(localStorage.getItem("cart"));

//si le panier est vide
if(localStorageClient === null){
    document.querySelector('h1').textContent = 'Le panier est vide!';
    console.log("ton panier est vide")
}
// si le panier n'est pas vide
else {
    document.querySelector('h1').textContent = 'Votre panier';
    console.log("non je suis pas vide")
}

function displayProducts(products) {
    if (products) {
        const positionProduct = document.querySelector('#cart__items');

        for (product of products) {
            //Création du tableau pour les produits 
            console.log('display', product.price);
            
            //affichage des articles choisis dans le panier
            positionProduct.innerHTML += `<article class="cart__item" data-id="${product.id}" data-color="${product.colors}">
                <div class="cart__item__img">
                    <img src="${product.imageUrl}" alt="${product.altTxt}">
                </div>
                <div class="cart__item__content">
                    <div class="cart__item__content__description">
                        <h2>${product.name}</h2>
                        <p>${product.color}</p>
                        <p>${product.price} €</p>
                    </div>
                    <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                            <p>Qté : ${product.quantity}</p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                        </div>
                        <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                        </div>
                    </div>
                </div>
                </article>`;

                }
    }
}

function enrichProductsWithDataFromAPI() {
    // Pour chaque produit de mon local storage, je récupère le produit de l'API pour récupérer son prix
    // J'ajoute à mon produit du local storage la propriété prix
    fetch('http://localhost:3000/api/products/')
    .then( (response) => response.json())
    .then(productsAPI => {
        for (product of localStorageClient) {
            const productAPI = productsAPI.find(element => element.id = product.id)
            product.price = productAPI.price
            product.name = productAPI.name
            product.imageUrl = productAPI.imageUrl
        }
        return localStorageClient
    })
    .then(localStorageClient => displayProducts(localStorageClient))
}
enrichProductsWithDataFromAPI()