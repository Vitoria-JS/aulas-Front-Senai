"use strict";

let BD = [
    {
        "paises": "Mundo",
        "casos": "<div class='spinner gold'></div>",
        "deaths": "<div class='spinner red'></div>"
    }
];

const showCountries = (Countries) => {
    const painel = `
        <div class="pais">
            ${Countries.paises}
        </div>
        <div class="card casos">
            <div class="numeros">
                ${Countries.casos}
            </div>
            <div class="titulo">
                CASOS
            </div>
        </div>
        <div class="card mortes">
            <div class="numeros">
                ${Countries.deaths}
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

// const getCoronaMundo = async () => {
//     const url = 'https://api.covid19api.com/Countries';
//     const getApi = await fetch (url);
//     const json = await getApi.json();
//     const mundo = await {
//                             "paises": "Mundo",
//                             "casos": json.Countries.TotalConfirmed,
//                             "mortes": json.Countries.TotalDeaths
//     }
//     showCountries (mundo);
// }

const getCoronaCountry = async () => {
    const url = 'https://corona.lmao.ninja/countries?sort=country';
    const getApi = await fetch (url);
    const json = await getApi.json();
    BD = json;
}

const findCountry = ( evento ) => {
    let countryMap = evento.target.id;
    const getCountry = BD.find(country => country.countryInfo.iso2 == countryMap? country:"");
    const country = {
        "paises": getCountry.country,
        "casos": getCountry.cases,
        "deaths": getCountry.deaths
    };
    showCountries (country);
}

document.querySelector('svg').addEventListener('click', findCountry);

showCountries (BD[0]);

getCoronaCountry();