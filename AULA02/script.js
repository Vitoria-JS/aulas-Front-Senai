"use strict"; /*Código limpo, correto*/

const calcularImc = (peso, altura) => peso / (altura**2);

const definirEstado = (imc) => {
    let msg;
    if(imc < 18.6){
        msg ='abaixo do peso. Atenção';
    }else if(imc < 25){
        msg = 'peso ideal. Parabéns!';
    }else if(imc < 30){
        msg = 'levemente acima do peso.';
    }else if(imc < 35){
        msg = 'obesidade grau I';
    }else if(imc < 40){
        msg = 'obesidade grau II. Atenção';
    }else{
        msg = 'obesidade grau III. Atenção';
    }
    return msg;
}

const exibirResultado = () => {
    const nome = document.getElementById('Nome').value;
    const peso = document.getElementById('Peso').value; /*Puxando o elemento do index */
    const altura = document.getElementById('Altura').value; /*Puxando o elemento do index */
    const $resultado = document.getElementById('resultado');
    const imc = calcularImc (peso, altura);
    const estado = definirEstado (imc);

    $resultado.innerHTML = `${nome} seu IMC foi de: ${imc} você está ${estado}`/*colocando o resultado dentro do HTML */
}

document.getElementById('btnCalcular').addEventListener ('click', exibirResultado); /*chamando direto o botão*/