//fonction appelant l'API - lien entre un produit de la page d'accueil la page produit

const searchParams = new URL(document.location).searchparams
const id = searchParams.get ("id")
const url = "http://localhost:3000/api/products/$(id)"

const getProducts = () =>  {
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function (products){
        console.log(products)

        //détail de la page produit

        //création de l'image
        const imgElement = document.createElement("img")
        document.querySelector(".item__img").appendChild(imgElement)
        img.getAttribute("src",`${products.imageUrl}`)

        //afficher le nom du produit
        const title = (document.getElementById('title').innerHTML = products.name)

        //afficher le prix
        const price = (document.getElementById('price').innerHTML = products.price)

        //afficher la description
        const descriptionElement = (document.getElementById('description').innerHTML = products.description)

        //le choix des couleurs
        const choiceColors = document.getElementById("colors")
        for (colors in products.colors){
            choiceColors.innerHTML +=`<option value="${products.colors}"</option>`
        }
    })

}

//Ajout des produits dans le panier

const addToCart = document.querySelector("addToCart")
addToCart.addEventListener("click")

