"use strict";

const encontrarJogos = async () => {
        const url = `https://api.rawg.io/api/games`;
        const getApi = await fetch(url);
        const api = await getApi.json();
        const array = api.results;
        const id = array[0];
        console.log(id);
        preencherFormulario(id);
}

const preencherFormulario = (id) => {
    const post = document.getElementById('1');
    post.innerHTML = id.background_image;

    console.log(post);
    // const nome = document.getElementById('1').value = id.name;
    // console.log(nome);
}

encontrarJogos();


window.addEventListener('load', function(evento) {
    // console.log("funcionou");
});