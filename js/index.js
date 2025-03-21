// Ao carregar a pagina executa as funções de buscar os dados
document.addEventListener("DOMContentLoaded",async() =>{
    setTimeout(() => {
        toggleLoading();
    },2000);

    let tredingContainer = document.querySelector("#trendingMovies");
    tredingContainer.innerHTML = "";
    for(let i = 1; i <= 20; i++){
        tredingContainer.innerHTML += `<a href='detalhes.html?id=${i}'>
                    <img src="img/posters/${i}.jpg" alt="${i}">
                </a>`
    }
})


//Trendng Movies Scroll
const containerTrendMovies = document.getElementById("trendMovies");

let scrollIntervalTrendingMovies; //Controlador para o intervalo de scroll
let scrollDirectionTrendingMovies = 0; //Direção do scroll (0 = parado, 1  = direita, -1 esquerda)

containerTrendingMovies.addEventListener("mousemove",(e) => {
    const boundingRect = containerTrendMovies.getBoundingClientRect();
    const mouseX = e.clientX;

    const threshold = 200; //Distancia das bordas para ativar o scroll

    if(mouseX < boundingRect.left + threshold){
        scrollDirectionTrendingMovies = -1; //Scroll para a esquerda
        containerTrendingMoviesMovies 
    }

})