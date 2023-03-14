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

//stockage des informations dans le localstorage --- window.localStorage.getItem ()
    products = []
    if(localStorage.getItem("cart")!==null){
        products = JSON.parse(localStorage.getItem("cart"))
        products.push(product)
    } else {
        products.push(product)
    }
    localStorage.setItem("cart",JSON.stringify (products))
})

//condition de l'article ajouté au panier en plusieurs exemplaires

//alerte apparaissant si l'article est ajouté au panier
function productAdded (){
    const body = document.querySelector('body')
    const message = document.createElement ('p')
    message.innerHTML ='<p>Ajouté au panier</p>'
}

//création d'une alerte si le panier dépasse le nombre maximum autorité
function productAdded (){
    const body = document.querySelector('body')
    const alertMessage = document.createElement ('p')
    alertMessage.innerHTML ='<p>Vous avez atteint le nombre maximum!</p>'
}

//condition de l'article ajouté au panier en supprimant un ou plusieurs exemplaires


getProduct()

