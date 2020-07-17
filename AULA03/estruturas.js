"use strict";
// criando array, array é um objeto
//prompt - cria uma caixa de texto para o usuario preencher antes de mostrar o site
//notas.push (prompt("Digite uma nota"));
//confirm - pergunta se deseja aceitar ou cancelar EX: "deseja realmente sair?"
//notas.push (confirm("Digite uma nota"));
const notas = [2,8,15,0,8];
const clientes = [
    {nome: "Vitoria", idade: 43, cidade: "Jandira",},
    {nome:"Joao", idade: 18, cidade:"Barueri,"}

]
// let notasAtuzalizadas = [];
// const limite = notas.length;

// for(let indice = 0; indice <limite; indice++){
//     notasAtuzalizadas.push(notas [indice] * 10); 
// }

/*map() = mapeia o array, argumento = callback - função
MAP - retorna um novo array do mesmo tamanho modificado ou não;
argumentos:
1º elemento
2º indice
3º array
*/
const notasAtuzalizadas= notas.map( (elemento) => elemento * 10 )

//filter - filtra as notas de acordo com uma função ( calback)
const notasAcimaDaMedia = notas.filter( notas => notas >= 5);

/*reduce - argumentos (callback(função), valorInicial(declarar, 0 - numero, "" - string))
reduce acumula os elementos
argumentos:
1º acumulador
2º elemento
3º indice
4ºarray
*/
const notasTotal = notas.reduce( (acc, notas) => acc + notas);

const notasPares100 = notas.filter( notas => notas % 2 == 0).map (notas => notas + 100);

const exibirDados = (el, cliente, titulo = "Sem titulo") => {
    el.innerHTML += `
        <div class='card'>
           <div class='titulo'>
                ${titulo}
            </div>
            <div>
                ${cliente.nome}<br>
                ${cliente.cidade}<br>
                ${cliente.idade}<br>
                ${cliente.nome}<br>
                ${cliente.cidade}<br>
                ${cliente.idade}<br>
            </div>
        </div>  
            `;
}

const $resultados = document.getElementById('resultados');

clientes.forEach ((cliente) => exibirDados ($resultados, cliente));

// exibirDados ($resultados, notas);
// exibirDados ($resultados, notasPares100);

// console.log( notas);
// console.log( notasAtuzalizadas );
// console.log( notasTotal);
// console.log( notasAcimaDaMedia);