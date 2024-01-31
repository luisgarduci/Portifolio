let icons = document.querySelectorAll(".icon");
let header = document.querySelector(".header-modo-claro");
let informations = document.querySelector(".container-informations");
let body = document.querySelector(".corpo-modo-claro");
let titles = document.querySelector(".titles-modo-claro");
let skills = document.querySelectorAll(".skill");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        header.classList.toggle("modo-escuro");
        informations.classList.toggle("modo-escuro")
        body.classList.toggle("corpo-modo-escuro");
        titles.classList.toggle("titles-modo-escuro");
        for (let i = 0; i < skills.length; i++)
        skills[i].classList.toggle("skill-modo-escuro");
        })
})


let left_arrows = document.querySelectorAll(".left-arrow");
let right_arrows = document.querySelectorAll(".right-arrow");
let index = 0;
let image = document.getElementById("image-project");
let name = document.getElementById("name-project");
let description = document.getElementById("description-project");
let link = document.getElementById("link-project");
let arrayProjectImage = ["spectrus.png", "tempo.png", "tarefas.jpeg", "pokemon.jpg"];
let arrayProjectName = ["Spectrus", "Previsão do Tempo", "Lista de Tarefas", "Pokedex"];
let arraydescriptionProject = ["(em andamento) Este projeto é um site/aplicativo de alguel para academias, está sendo desenvolvido com HTML, CSS, Javascript, PHP, Ajax e SQL. Os usuários poderão ver seus treinos, acompanhar sua evolução, procurar pelo perfil de outros usuários, etc...", "É uma aplicação web que fornece informações sobre a previsão do tempo para qualquer localização. A aplicação utiliza a integração com uma API de previsão do tempo para fornecer dados atualizados, incluindo temperatura, condições climáticas, umidade e velocidade do vento.", "Este projeto foi  desenvolvido usando HTML, CSS e JavaScript. Ele oferece uma solução eficaz para o gerenciamento de tarefas diárias. A interface do usuário é projetada de forma responsiva, garantindo uma experiência consistente em computadores, tablets e dispositivos móveis.", "A Pokédex é um projeto de website que permite aos usuários procurarem um pokemon específico. Este projeto foi desenvolvido com HTML, CSS e JavaScript e consome a API da Pokédex, uma fonte de dados com informações sobre Pokémons."];

let arrayLinkProject = ["http://spcetrus.free.nf", "https://luisgarduci.github.io/Tempo/", "https://luisgarduci.github.io/Tarefas/","https://luisgarduci.github.io/Pokedex/"]


image.src = arrayProjectImage[index];
name.textContent = arrayProjectName[index];
description.textContent = arraydescriptionProject[index];
link.href = arrayLinkProject[index];

right_arrows.forEach (right_arrow => {
    right_arrow.addEventListener("click", () => {
        if (index < 3) {
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

    

    

    