//URL searchParams
const urlConfirmation = URL(window.location.href).searchParams.get("id")
const orderId = id

//id du produit apparant à la confirmation de l'achat du panier
const idConfirmed = document.querySelector("#orderId");
idConfirmed.innerHTML = '<span id="orderId">${"orderId"}</span></p>';

//stockage des informations vide dans le localstorage
localStorage.clear ();