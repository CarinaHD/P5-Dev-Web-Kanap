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
        id:varId
    }
})

//stockage des informations dans le localstorage --- 
product = []
    if(localStorage.getItem("cart")!==null){
        product = JSON.parse(localStorage.getItem("cart"))
        //products.push(product)
    } else {
        products.push(product)
    }
    localStorage.setItem("cart",JSON.stringify (product))

//alerte si la couleur n'est pas sélectionnée
if ("#colors" != ''){
    alert ('Choisissez la couleur de votre canapé!')
}

//alerte si la quantité est inférieur à 1
else if ("#quantity" < 0) {
    alert('Sélectionnez le nombre de canapé souhaité!')
}

//alerte si la quantité atteint plus de 100 
else if ("#quantity" >=100){
    alert ('Vous avez atteint le nombre maximum sur ce modèle!')
}

// dans le panier 
    const inMyCart = () => {
        
        //redirection vers = cart.html avec voir mon panier:
      if (confirm("Voir mon panier ou je continue mes achats")) {
        window.location.href = "cart.html";
      }
      
      //redirection vers = index.html avec je continue mes achats:
      else{
        window.location.href = "index.html";
      }
    }  

//si le produit était déjà présent dans le panier on incrémente la quantité du produit
const myProduct = {
    quantity:quantity,
    color:colors,
    id:varId
}

/*if (cartDetail) {
    cartDetail.quantity = cartDetail.quantity + myProduct.quantity;
    localStorage.setItem("cart", JSON.stringify(products));
}*/


getProduct()

