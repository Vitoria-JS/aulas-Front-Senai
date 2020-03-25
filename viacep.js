"use stritc";
const cep = document.getElementById('cep');

const encontrarCep =  (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch (url).then (res => res.json()).then (dados => preencherFormulario (dados));
}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

cep.addEventListener("blur", evento => encontrarCep(cep.value));