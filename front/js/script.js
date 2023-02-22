const url = "http://localhost:3000/api/products"
const section = document.getElementById("items")

const getArticles = () => {
    fetch(url)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
      console.log (data)
        for(products in data){
            section.innerHTML += `<a href="./product.html?id=42">
            <article>
              <img src="${data[products].imageUrl}" alt="${data[products].altTxt}">
              <h3 class="productName">${data[products].name}</h3>
              <p class="productDescription">${data[products].description}</p>
            </article>
          </a>`
        }
    })
}

getArticles()