// Seleccionando elementos del DOM
let loadingSection = document.querySelector(".loading");
let headerSection = document.querySelector("header");
let footer = document.querySelector("footer");

//Declaracion de funciones
//Esconde el preloader
function esconderLoading() {
  setTimeout(() => {
    loadingSection.style.display = "none";
    headerSection.style.display = "flex";
    footer.style.display = "flex";
  }, 2000);
}

esconderLoading();