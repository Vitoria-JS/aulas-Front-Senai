"use strict";

let BD = [
    {
        "uf": "Brazil",
        "suspeitos": "<div class='spinner blue'></div>",
        "casos": "<div class='spinner gold'></div>",
        "mortes": "<div class='spinner red'></div>"
    }
];

const showData = (data) => {
    const painel = `
        <div class="estado">
            ${data.uf}
        </div>
        <div class="card suspeitos">
            <div class="numeros">
                ${data.suspeitos}
            </div>
            <div class="titulo">
                SUSPEITOS
            </div>
        </div>
        <div class="card casos">
            <div class="numeros">
                ${data.casos}
            </div>
            <div class="titulo">
                CASOS
            </div>
        </div>
        <div class="card mortes">
            <div class="numeros">
                ${data.mortes}
            </div>
            <div class="titulo">
                MORTES
            </div>
        </div>
    `;

    const $container = document.createElement ('div');
    $container.innerHTML = painel;

    const $info = document.getElementById ('info');
    $info.removeChild ($info.firstChild);
    $info.appendChild ($container);
};

const getCoronaBrazil = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
    const getApi = await fetch (url);
    const json = await getApi.json();
    const brazil = await {
                            "uf": "Brazil",
                            "suspeitos": json.data.cases,
                            "casos": json.data.confirmed,
                            "mortes": json.data.deaths
    }
    showData (brazil);
}

const getCoronaState = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/';
    const getApi = await fetch (url);
    const json = await getApi.json();
    BD = await json.data;
}

const findState = ( evento ) => {
    const ufMap = evento.target.parentNode.id;
    const getState = BD.find (state => state.uf.match(ufMap));
    const state = {
        "uf": getState.uf,
        "suspeitos": getState.suspects,
        "casos": getState.cases,
        "mortes": getState.deaths
    }
    showData (state);
}

document.querySelector('svg').addEventListener('click', findState);

showData (BD[0]);

getCoronaState();

getCoronaBrazil ();