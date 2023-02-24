const url = "http://localhost:3000/api/products"
const section = document.getElementById("items")

//insertion des produits dans la page d'accueil
const getProducts = async () => {
  
    fetch(url)
    .then(function (response){
        return response.json()
    })
         
}

function displayProducts(products){
  let template = ""
  for(product in products){
    template += `<a href="./product.html?id=42">
    <article>
      <img src="${product[products].imageUrl}" alt="${product[products].altTxt}">
      <h3 class="productName">${product[products].name}</h3>
      <p class="productDescription">${product[products].description}</p>
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