//fonction appelant l'API - lien entre un produit de la page d'accueil la page produit

const searchParams = new URL(document.location).searchparams
const id = searchParams.get ("id")
const url = "http://localhost:3000/api/products/$(id)"

const getNosProduits = () =>  {
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function (data){
        console.log(data)

        //détail de la page produit

        //création de l'image
        const imgElement = document.createElement("img")
        document.querySelector(".item__img").appendChild(imgElement)
        img.getAttribute("src",`${data.imageUrl}`)

        //afficher le nom du produit
        const title = (document.getElementById('title').innerHTML = data.name)

        //afficher le prix
        const price = (document.getElementById('price').innerHTML = data.price)

        //afficher la description
        const descriptionElement = (document.getElementById('description').innerHTML = data.description)

        //le choix des couleurs
        const choiceColors = document.getElementById("colors")
        for (colors in data.colors){
            choiceColors.innerHTML +=`<option value="${data.colors[colors]}"</option>`
        }
    })

}

//Ajout des produits dans le panier

const addToCart = document.querySelector("addToCart")
addToCart.addEventListener("click")

