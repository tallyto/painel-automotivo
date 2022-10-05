const buttonOpen = document.getElementById("garageOpen");
const buttonClose = document.getElementById("garageClose");
const acender = document.getElementById("acender");
const apagar = document.getElementById("apagar");

buttonOpen.addEventListener("click", (event) => {
  alert("Abrindo garagem");
});

buttonClose.addEventListener("click", (event) => {
  alert("Fechando garagem");
});

acender.addEventListener("click", event => {
    alert("Luz acesa")
})

apagar.addEventListener("click", event => {
    alert("Luz apagada")
})
