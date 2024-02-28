let icons = document.querySelectorAll(".icon");
let header = document.querySelector(".header");
let informations = document.querySelector(".container-informations");
let body = document.querySelector(".corpo");
let titles = document.querySelector(".titles-modo-claro");
let skills = document.querySelectorAll(".skill");
let menuIcon = document.getElementById("menu");
let closeIcon = document.querySelector(".close");
let menu = document.querySelector(".menu-smartphone");
let footer = document.querySelector(".footer");
let MenuFirstLine = document.querySelector(".firstLine");
let MenuSecondLine = document.querySelector(".secondLine");
let header_smartphone = document.querySelector(".header-smartphone");

menuIcon.addEventListener("click", () => {
  menu.style.display = "flex";
})

closeIcon.addEventListener("click", () => {
  menu.style.display = "none";
})

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        header.classList.toggle("modo-escuro");
        informations.classList.toggle("modo-escuro")
        body.classList.toggle("corpo-modo-escuro");
        titles.classList.toggle("titles-modo-escuro");
        for (let i = 0; i < skills.length; i++) {
            skills[i].classList.toggle("skill-modo-escuro");
        }
        footer.classList.toggle("modo-escuro");
        menu.classList.toggle("modo-escuro");
        MenuFirstLine.classList.toggle("modo-escuro");
        MenuSecondLine.classList.toggle("modo-escuro");
        header_smartphone.classList.toggle("modo-escuro");
        })
        
})



let left_arrows = document.querySelectorAll(".left-arrow");
let right_arrows = document.querySelectorAll(".right-arrow");
let index = 0;
let image = document.getElementById("image-project");
let name = document.getElementById("name-project");
let description = document.getElementById("description-project");
let link = document.getElementById("link-project");
let arrayProjectImage = ["spectrus.png", "tempo.png", "tarefas.jpeg", "pokemon.jpg", "https://imovelguide.com.br/images/logo-imovel-guide.png"];
let arrayProjectName = ["Spectrus", "Previsão do Tempo", "Lista de Tarefas", "Pokedex", "ImovelGuide"];
let arraydescriptionProject = ["(em andamento) Este projeto é um site/aplicativo de alguel para academias, está sendo desenvolvido com HTML, CSS, Javascript, PHP, Ajax e SQL. Os usuários poderão ver seus treinos, acompanhar sua evolução, procurar pelo perfil de outros usuários, etc...", "É uma aplicação web que fornece informações sobre a previsão do tempo para qualquer localização. A aplicação utiliza a integração com uma API de previsão do tempo para fornecer dados atualizados, incluindo temperatura, condições climáticas, umidade e velocidade do vento.", "Este projeto foi  desenvolvido usando HTML, CSS e JavaScript. Ele oferece uma solução eficaz para o gerenciamento de tarefas diárias. A interface do usuário é projetada de forma responsiva, garantindo uma experiência consistente em computadores, tablets e dispositivos móveis.", "A Pokédex é um projeto de website que permite aos usuários procurarem um pokemon específico. Este projeto foi desenvolvido com HTML, CSS e JavaScript e consome a API da Pokédex, uma fonte de dados com informações sobre Pokémons.", "Teste técnico da empresa, visando o domínio de HTML, CSS E Javascript, projeto 100% responsivo e adaptável, possui utilização do plugin do Jquery Mask para máscaras de cpf e telefone, e a biblioteca do HTMLCanvas2 para transformar código em imagem"];

let arrayLinkProject = ["http://spcetrus.free.nf", "https://luisgarduci.github.io/Tempo/", "https://luisgarduci.github.io/Tarefas/","https://luisgarduci.github.io/Pokedex/", "https://luisgarduci.github.io/ImovelGuide/"]


image.src = arrayProjectImage[index];
name.textContent = arrayProjectName[index];
description.textContent = arraydescriptionProject[index];
link.href = arrayLinkProject[index];

right_arrows.forEach (right_arrow => {
    right_arrow.addEventListener("click", () => {
        if (index < 4) {
            index++;
            image.src = arrayProjectImage[index];
            name.textContent = arrayProjectName[index];
            description.textContent = arraydescriptionProject[index];
            link.href = arrayLinkProject[index];
        }
        })
        right_arrow.style.cursor = "pointer";
})

left_arrows.forEach(left_arrow => {
    left_arrow.addEventListener("click", () => {
        if (index > 0) {
            index--;
            image.src = arrayProjectImage[index];
            name.textContent = arrayProjectName[index];
            description.textContent = arraydescriptionProject[index];
            link.href = arrayLinkProject[index];
        }
})
left_arrow.style.cursor = "pointer";

})

    

    

    