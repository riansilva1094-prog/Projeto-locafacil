// ================================
// SELETORES
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

const btnLogin = document.querySelector(".btn-login");
const btnCadastro = document.querySelector(".btn-secondary");
const btnVeiculos = document.querySelector(".btn-primary");

const links = document.querySelectorAll(".menu a");

// ================================
// MENU MOBILE
// ================================

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}

// Fecha o menu ao clicar em um link

links.forEach(link => {

    link.addEventListener("click", () => {

        if (menu.classList.contains("active")) {

            menu.classList.remove("active");
            menuToggle.classList.remove("active");

        }

    });

});

// ================================
// BOTÃO LOGIN
// ================================

if (btnLogin) {

    btnLogin.addEventListener("click", () => {

        window.location.href = "login.html";

    });

}

// ================================
// BOTÃO CADASTRO
// ================================

if (btnCadastro) {

    btnCadastro.addEventListener("click", () => {

        const cadastro = document.querySelector("#cadastro");

        if (cadastro) {

            cadastro.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}

// ================================
// BOTÃO VER VEÍCULOS
// ================================

if (btnVeiculos) {

    btnVeiculos.addEventListener("click", () => {

        const veiculos = document.querySelector("#veiculos");

        if (veiculos) {

            veiculos.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}

// ================================
// SCROLL SUAVE DO MENU
// ================================

links.forEach(link => {

    link.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ================================
// NAVBAR AO ROLAR A PÁGINA
// ================================

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "#000";
        navbar.style.transition = ".4s";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";

    }

});

// ================================
// ANIMAÇÃO DOS BOTÕES
// ================================

const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {

    botao.addEventListener("mouseenter", () => {

        botao.style.transform = "scale(1.05)";
        botao.style.transition = ".3s";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "scale(1)";

    });

});

// ================================
// ANO AUTOMÁTICO
// ================================

const ano = document.getElementById("ano");

if (ano) {

    ano.textContent = new Date().getFullYear();

}

// ================================
// BOAS-VINDAS
// ================================

window.addEventListener("load", () => {

    console.log("Bem-vindo à LocaFácil!");

});