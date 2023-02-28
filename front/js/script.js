const url = "http://localhost:3000/api/products"
const section = document.getElementById("items")

//insertion des produits dans la page d'accueil
const getProducts = async () => {
  
    return fetch(url)
    .then(async function (response){
        return response.json()
    })
         
}

function displayProducts(products){
  let template = ""
  for(product of products){
    template += `<a href="./product.html?id=42">
    <article>
      <img src="${product.imageUrl}" alt="${product.altTxt}">
      <h3 class="productName">${product.name}</h3>
      <p class="productDescription">${product.description}</p>
    </article>
  </a>`
}
section.innerHTML = template
}

async function init (){
  const products = await getProducts()
displayProducts(products)
}
init()