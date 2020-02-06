 //maneira de pegar o nome mais rapido
// const $nome = document.querySelector("div") maneira de pegar o nome, mas tem que pensar em qual é o elemento, classe, tag...


const $calcular = document.getElementById('calcular');

function calcularMedia(){
    const $nome = document.getElementById('nome');
    const $nota1 = document.getElementById('nota1');
    const $nota2 = document.getElementById('nota2');
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');
    const media = (parseInt($nota1.value) + parseInt($nota2.value))/2;
    $media.value = media;

    if( media >= 5 ) {
        $situacao.value = "Aprovado";
        $situacao.classList.remove('reprovado');
        $situacao.classList.add('aprovado');   
    }else{
        $situacao.value = "Reprovado";
        $situacao.classList.add('reprovado');
        $situacao.classList.remove('aprovado');
    }
}

$calcular.addEventListener('click', calcularMedia);

