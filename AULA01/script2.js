 //maneira de pegar o nome mais rapido
// const $nome = document.querySelector("div") maneira de pegar o nome, mas tem que pensar em qual é o elemento, classe, tag...


const $calcular = document.getElementById('calcular');
const calcularMedia = (nota1, nota2) => (parseInt(nota1) + parseInt(nota2)) / 2;
const verificaSituacao = ( media ) => media >= 5? "Aprovado" : "Reprovado";

const exibirMedia = () => {
    const $nome = document.getElementById('nome');
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');
    
    const media = calcularMedia (nota1, nota2);

    $situacao.value = verificaSituacao (media);

    // if( media >= 5 ) {
    //     $situacao.value = "Aprovado";
    //     $situacao.classList.remove('reprovado');
    //     $situacao.classList.add('aprovado');   
    // }else{
    //     $situacao.value = "Reprovado";
    //     $situacao.classList.add('reprovado');
    //     $situacao.classList.remove('aprovado');
    // }

    $media.value = media;
}

const calcularConceito = () => {
    const media = document.getElementById('media').value
    const $conceito = document.getElementById('conceito');
    if( media < 3){
        $conceito.value = "E";
    }else if(media < 5 ){
        $conceito.value = "D";
    }else if(media < 8){
        $conceito.value = "C";
    }else if(media < 10){
        $conceito.value = "B";
    }else{
        $conceito.value = "A";
    }
}



const calcular = () => {
    exibirMedia();
    calcularConceito();
}

$calcular.addEventListener('click', calcular);

