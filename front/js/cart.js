let localStorageClient = JSON.parse(localStorage.getItem("cart"));

let products = []

let i = 0;
    
for (product in localStorageClient) {
    fetch('http://localhost:3000/api/products/'+varId)
        .then( (response) => response.json())
        .then( (data) => {

//Création du tableau pour les produits à envoyer au serveur
products.push(product.varId);

localStorageClient[i].imageUrl = data.imageUrl;
localStorageClient[i].altTxt = data.altTxt;
localStorageClient[i].name = data.name;
localStorageClient[i].price = data.price;

document.querySelector('#cart__items').innerHTML += `<article class="cart__item" data-id= ${localStorageClient[i].id}  data-color= ${localStorageClient[i].colors}>
    <article class="cart__item" data-id="${product.varId}" data-color="${product.color}">
                <div class="cart__item__img">
                  <img src="${localStorageClient[i].imageUrl}" alt="${localStorageClient[i].altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${localStorageClient[i].name}</h2>
                    <p>Vert</p>
                    <p>42,00 €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`;

        TotalPriceQuantity();
        deleteProduct();
        modifValue();

        i++;

    });
    
}