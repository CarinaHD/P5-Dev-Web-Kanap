//récupération de l'API - lien entre un produit de la page d'accueil la page produit
const varId=new URL(window.location.href).searchParams.get("id")
async function init () {
    
    const product = await getProduct()
    displayProduct(product)
}
init ()


//rechercher un produit par son id

async function getProduct(){
    return await fetch ("http://localhost:3000/api/products/"+varId)
    .then(function (data){
     return data.json()

    }) 
}

//affichage du produit 

function displayProduct(product){
     //création de l'image
     const imgElement = document.createElement("img")
     document.querySelector(".item__img").appendChild(imgElement)
     imgElement.setAttribute("src",product.imageUrl)

     //afficher le nom du produit
     const title = (document.getElementById('title').innerHTML = product.name)

     //afficher le prix
     const price = (document.getElementById('price').innerHTML = product.price)

     //afficher la description
     const descriptionElement = (document.getElementById('description').innerHTML = product.description)

     //le choix des couleurs
     const choiceColors = document.getElementById("colors")
     for (color of product.colors){
         choiceColors.innerHTML +=`<option value="${color}">${color}</option>`
     }
 }


//ajout des produits dans le panier selon les couleurs et quantités souhaités

const addToCart = document.querySelector("#addToCart")

//condition pour valider en cliquant sur le bouton "Ajouter au panier" 
addToCart.addEventListener("click",()=>{ 
    const product = {
        quantity:document.getElementById("quantity").value,
        color:document.getElementById("colors").value,
        id:varId,
    }
    storeToLocalStorage(product)

function storeToLocalStorage(product) {
    console.log(product)

     //alerte si la couleur n'est pas sélectionnée
     if (!product.color){
        alert ('Choisissez la couleur de votre canapé!');
        return;
    }

    //alerte si la quantité est inférieur à 1
    else if (product.quantity < 0) {
        alert('Sélectionnez le nombre de canapé souhaité!');
        return;
    }

    //alerte si la quantité atteint plus de 100 
    else if (product.quantity >=100){
        alert ('Vous avez atteint le nombre maximum sur ce modèle!');
        return;
    }
}


products = [] 

const localStorageClient = localStorage.getItem("cart") 

if(!localStorageClient){
    products.push (product)
}
else {products.push (product)
    }
localStorage.setItem("cart"),JSON.stringify(product)

storeToLocalStorage(product) = JSON.parse(localStorage.getItem("cart"));


//popup fenêtre confirmation d'ajout d'article ou continuer les achats avec la fonction ci-dessous
const messageFromMyCart = () => {
            
    //redirection vers = cart.html avec 'voir mon panier', le client cliquera sur OK:
if (confirm("Voir mon panier OK ou je continue mes achats ANNULER")) {
    window.location.href = "cart.html";
}

//redirection vers = index.html avec 'je continue mes achats', le client cliquera sur ANNULER:
else{
    window.location.href = "index.html";
}
}

//s'il y a des produits  dans le localStorage
if (localStorageClient){

// avec la method find() si l'id et la couleur d'un produit existant
    let moreProduct = localStorageClient.find(
        (moreProduct) =>
        moreProduct.varId == product.id && moreProduct.color == product.color
    );
}  

//si oui, on additionne les quantités correspondant au même id et même couleur
if (moreProduct){
    moreProduct.quantity = moreProduct.quantity + product.quantity;
    localStorageClient.setItem("cart",JSON.stringify(product));
    messageFromMyCart();
    return;
}

//s'il n'y a pas de produits dans le localStorage
else{
    let newLocalStorageClient = [];
    newLocalStorageClient.push(product);
    localStorageClient.setItem("cart",JSON.stringify(newLocalStorageClient));
    messageFromMyCart();
}
})

getProduct()

