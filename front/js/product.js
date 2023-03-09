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

const addToCart = document.querySelector("addToCart")

//condition pour valider en cliquant sur le bouton "Ajouter au panier"
addToCart.addEventListener("click",()=>{ 
    const product = {
        quantity:document.getElementById("quantity").value,
        color:document.getElementById("colors").value,
        id:id
    } 

//stockage des informations dans le localstorage
addProductLocalStorage = []
if(localStorage.getItem("addToCart")!==null){
    addProductLocalStorage = JSON.parse(localStorage.getItem("addToCart"))
    addProductLocalStorage.push(addToCart)
    localStorage.setItem("addToCart",JSON.stringify(addProductLocalStorage))
} else {
    addProductLocalStorage.push(addToCart)
    localStorage.setItem("addToCart",JSON.stringify (addProductLocalStorage))
}
})

getProduct()

