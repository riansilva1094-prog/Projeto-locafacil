
//==============================
// HEADER AO ROLAR
//==============================

const header = document.getElementById("header");


if(header){

    window.addEventListener("scroll",()=>{


        if(window.scrollY > 80){

            header.classList.add("ativo");


        }else{


            header.classList.remove("ativo");


        }


    });

}





//==============================
// BOTÃO VER VEÍCULOS
//==============================


const btnPrimary = document.querySelector(".btn-primary");


if(btnPrimary){


    btnPrimary.addEventListener("click",function(e){


        e.preventDefault();


        const veiculos = document.querySelector("#veiculos");


        if(veiculos){


            veiculos.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


}





//==============================
// FILTROS DE VEÍCULOS
//==============================


const botoesFiltro = document.querySelectorAll(".filtros button");

const cardsVeiculos = document.querySelectorAll(".card-veiculo");



let filtroAtual = "todos";

let textoPesquisa = "";





function atualizarVeiculos(){


    cardsVeiculos.forEach(card=>{


        const nome = card
        .querySelector("h3")
        .textContent
        .toLowerCase();



        const categoriaCard = [...card.classList]
        .find(classe => classe !== "card-veiculo");



        const pertenceFiltro =


            filtroAtual === "todos" ||

            categoriaCard === filtroAtual;



        const pertencePesquisa =


            nome.includes(textoPesquisa);




        if(pertenceFiltro && pertencePesquisa){


            card.style.display="block";


        }else{


            card.style.display="none";


        }



    });



}





botoesFiltro.forEach(botao=>{


    botao.addEventListener("click",()=>{


        botoesFiltro.forEach(btn=>{


            btn.classList.remove("ativo");


        });



        botao.classList.add("ativo");



        filtroAtual = botao.dataset.filter;



        atualizarVeiculos();



    });



});





//==============================
// PESQUISA POR NOME
//==============================


const pesquisaVeiculo = document.getElementById("pesquisaVeiculo");



if(pesquisaVeiculo){


    pesquisaVeiculo.addEventListener("keyup",()=>{


        textoPesquisa = pesquisaVeiculo
        .value
        .toLowerCase();



        atualizarVeiculos();



    });


}





//==============================
// SELECT CATEGORIA
//==============================


const categoria = document.getElementById("categoria");



if(categoria){


    categoria.addEventListener("change",()=>{


        filtroAtual = categoria.value;



        atualizarVeiculos();



    });


}







//==============================
// ANIMAÇÃO DOS CARDS
//==============================


cardsVeiculos.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.style.transform="translateY(-8px)";


    });



    card.addEventListener("mouseleave",()=>{


        card.style.transform="translateY(0)";


    });



});