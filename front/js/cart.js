console.log("salut panier")
const varId=new URL(window.location.href).searchParams.get("id")
let localStorageClient = JSON.parse(localStorage.getItem("cart"));

let products = []


//si le panier est vide
if(localStorageClient === null){
    document.querySelector('h1').textContent = 'Le panier est vide!';
    console.log("ton panier est vide")
}
// si le panier n'est pas vide
else{
    document.querySelector('h1').textContent = 'Votre panier';
    console.log("non je suis pas vide")
}

    for (i = 0 ; i < localStorageClient.lenght; i++) 
    {
        console.log(localStorageClient.lenght)
    }
    
for (product in localStorageClient) {
    fetch('http://localhost:3000/api/products/')
        .then( (response) => response.json())
        .then( (data) => {


//Création du tableau pour les produits 
products.push(product.varId);

// Injection du code HTML

const positionPorduct = document.querySelector('#cart__items');
console.log(positionPorduct)

document.querySelector('#cart__items').innerHTML += `<article class="cart__item" data-id="${localStorageClient[i].varID}" data-color="${localStorageClient[i].colors}">
    <div class="cart__item__img">
    <img src="${localStorageClient[i].imageUrl}" alt="${localStorageClient[i].altTxt}">
    </div>
    <div class="cart__item__content">
    <div class="cart__item__content__description">
        <h2>${localStorageClient[i].name}</h2>
        <p>${localStorageClient[i].colors}</p>
        <p>${localStorageClient[i].price}</p>
    </div>
    <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
        <p>Qté : ${localStorageClient[i].quantity}</p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${localStorageClient[i].quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
        <p class="deleteItem">Supprimer</p>
        </div>
    </div>
    </div>
    </article>`;

        })
    }
