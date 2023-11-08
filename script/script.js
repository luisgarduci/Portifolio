let seta = document.querySelector("#seta");
document.addEventListener ("scroll" , () => {
    if (document.documentElement.scrollTop >= 500) {
        seta.style.visibility = "visible";
    }
    else {
        seta.style.visibility = "hidden";
    }
})

let btnmodo = document.getElementById("modo");
let footer = document.querySelector(".footer-modo-escuro");
let cabecalho = document.querySelector (".header-modo-escuro");
let hamburguer = document.getElementById ("hamburguer");
let nav = document.querySelector(".navegacao");

btnmodo.addEventListener ("click", () => {
  footer.classList.toggle ("footer-modo-claro");
  cabecalho.classList.toggle ("header-modo-claro");
  hamburguer.classList.toggle ("hamburguer-modo-claro");
})

hamburguer.addEventListener ("click" , () => {
    nav.style.left = "0px"
    nav.style.visibility = "visible"
    nav.style.transitionDuration = "0.8s";
    hamburguer.style.left = "35px"
    hamburguer.style.transitionDuration = "0.9s";
    setTimeout(() => {
        nav.style.left = "-200px";
        nav.style.transitionDuration = "1.3s";
        hamburguer.style.left = "10px";
    }, 10000);
    })

    hamburguer.addEventListener("dblclick" , () => {
        nav.style.left = "-200px";
        nav.style.transitionDuration = "1.3s";
        hamburguer.style.left = "10px";
    })


