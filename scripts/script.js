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

let arrayProjectImage = ["https://tm.ibxk.com.br/2017/08/29/29113431754537.jpg?ims=1200x675", "imagens/horas.jpg", "imagens/tempo.png", "imagens/tarefas.jpeg", "imagens/pokemon.jpg", "imagens/memoria.jpg", "imagens/tictactoe.png", "imagens/paint.jpg", "https://st2.depositphotos.com/1064545/7645/i/450/depositphotos_76456337-stock-photo-3d-white-people-doubting-man.jpg","https://imovelguide.com.br/images/logo-imovel-guide.png", "imagens/filme.jpg", "imagens/spectrus.png", "imagens/chat.jpg", "imagens/drive.png", "imagens/rede_social.png", "imagens/drone.jpg"];

let arrayProjectName = ["Android", "Horas", "Previsão do Tempo", "Lista de Tarefas", "Pokedex", "Jogo da Memória", "Jogo da Velha", "Paint", "Advinha", "ImovelGuide", "Movies", "Spectrus", "Chat", "Drive", "Rede Social", "Drone Tello"];

let arraydescriptionProject = ["Meu primeiro projeto, feito com HTML e CSS, esse projeto mostra a história do android, com recursos de imagem e vídeo.", "Projeto simples que mostra hora e imagem correspondente ao horário do dia, as imagens são alteradas dinamicamente com o recarregar da página e/ou com a mudança de horário (Projeto feito consumindo a api do pexels).","É uma aplicação web que fornece informações sobre a previsão do tempo para qualquer localização. A aplicação utiliza a integração com uma API de previsão do tempo para fornecer dados atualizados, incluindo temperatura, condições climáticas, umidade e velocidade do vento.", "Este projeto foi  desenvolvido usando HTML, CSS e JavaScript. Ele oferece uma solução eficaz para o gerenciamento de tarefas diárias. A interface do usuário é projetada de forma responsiva, garantindo uma experiência consistente em computadores, tablets e dispositivos móveis.", "A Pokédex é um projeto de website que permite aos usuários procurarem um pokemon específico. Este projeto foi desenvolvido com HTML, CSS e JavaScript e consome a API da Pokédex, uma fonte de dados com informações sobre Pokémons.", "O projeto é um jogo da memória desenvolvido utilizando HTML, CSS e JavaScript. A estrutura básica consiste em um tabuleiro de cartas viradas para baixo, onde cada carta é representada por um elemento <div>. O objetivo do jogador é encontrar todos os pares de cartas correspondentes virando duas cartas por vez.",
"O Jogo da Velha é um clássico jogo de tabuleiro para dois jogadores, onde cada jogador alternadamente marca espaços em uma grade 3x3. O objetivo é formar uma linha horizontal, vertical ou diagonal com suas próprias marcas. O primeiro jogador a conseguir isso é declarado vencedor. Se todas as casas forem preenchidas e não houver vencedor, o jogo termina em empate.", "É uma aplicação web que simula as funcionalidades básicas do Microsoft Paint, permitindo que os usuários desenhem, pintem e editem imagens diretamente em um canvas HTML5.", "Esse Projeto é um jogo de advinha onde os usuários precisam acertar a palavra sorteada, se suas chances esgotarem o jogo acaba, busque a pontuação máxima!",  "Teste técnico da empresa, visando o domínio de HTML, CSS E Javascript, projeto 100% responsivo e adaptável, possui utilização do plugin do Jquery Mask para máscaras de cpf e telefone, e a biblioteca do HTMLCanvas2 para transformar código em imagem", "Esse projeto permite aos usuários explorar e descobrir uma ampla variedade de filmes utilizando a API do TMDb (The Movie Database). Com uma interface simples e intuitiva, os usuários podem acessar uma vasta coleção de informações sobre filmes, desde os mais populares até os mais obscuros.", "(em andamento) Este projeto é um site/aplicativo de alguel para academias, está sendo desenvolvido com HTML, CSS, Javascript, PHP, Ajax e SQL. Os usuários poderão ver seus treinos, acompanhar sua evolução, procurar pelo perfil de outros usuários, etc...", "Este projeto visa criar um sistema de chat online em tempo real utilizando a tecnologia de WebSockets. A aplicação permitirá que usuários se conectem e conversem em salas de chat, onde as mensagens são enviadas e recebidas instantaneamente sem a necessidade de atualizar a página.", "É uma aplicação backend desenvolvida em Node.js que permite aos usuários fazer upload de arquivos diretamente para suas contas do Google Drive. Utilizando a API do Google Drive, a aplicação facilita o armazenamento e gerenciamento de arquivos na nuvem de forma segura e eficiente.", "O projeto consiste no desenvolvimento de uma mini rede social com funcionalidades incríveis, incluindo a capacidade de adicionar posts, curtir publicações, comentar e interagir com outros usuários. A plataforma está sendo construída utilizando tecnologias web como HTML, CSS, JavaScript (incluindo jQuery), PHP e SQL para o banco de dados.", "Projeto escolar grande onde fui responsável pelo back com node.js, o objetivo do projeto era automatizar o percurso de um drone, adicionando vários comandos a uma rota específica e executando-a quando chamada pelo front. Tecnologias Utilizadas: Node.js, Express.js, mysql2 e Tello.js (biblioteca do drone) http://filmes.wuaze.com/drone.mp4"];

let arrayLinkProject = ["https://luisgarduci.github.io/projeto-android/", "https://luisgarduci.github.io/Horas/", "https://luisgarduci.github.io/Tempo/", "https://luisgarduci.github.io/Tarefas/","https://luisgarduci.github.io/Pokedex/", "https://luisgarduci.github.io/Memoria/", "https://luisgarduci.github.io/Jogo-da-Velha/", "https://luisgarduci.github.io/paint/", "https://luisgarduci.github.io/advinha/", "https://luisgarduci.github.io/ImovelGuide/", "http://filmes.wuaze.com/Filme/index.php", "http://spectrus.free.nf", "https://chat-f8l8.onrender.com/", "https://github.com/luisgarduci/drive", "http://miniblog.kesug.com/Blog/paginas/feed.php", "https://github.com/luisgarduci/drone"];


image.src = arrayProjectImage[index];
name.textContent = arrayProjectName[index];
description.textContent = arraydescriptionProject[index];
link.href = arrayLinkProject[index];

right_arrows.forEach (right_arrow => {
    right_arrow.addEventListener("click", () => {
        if (index < 15) {
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

    

    

    