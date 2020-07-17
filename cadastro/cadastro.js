"use strict";

import { validator, emailValidator } from "./masks.js";

const $novo = document.getElementById('novo');
const $fechar = document.getElementById('fechar');
const $salvar = document.getElementById('salvar');
const $pegaInput = document.querySelectorAll('.modal > input');

// ClassList - gerencia as classes do elemento, adiciona, remove, ve o conteudo...
const exibirModal = () => document.querySelector(".conteiner-modal").classList.add('exibirModal');
const fecharModal = () => document.querySelector(".conteiner-modal").classList.remove('exibirModal');

const salvarAluno = () => {
    console.log("código para salvar");
    fecharModal();
};

validator (document.getElementById('form'));
emailValidator (document.getElementById('email'));

const renderizarTabela = (data) =>{
    
    const $registros = document.getElementById('registros');

    data.forEach(element => {
        const $tr = document.createElement('tr');
        $tr.innerHTML = `
            <td>${element.id}</td>
            <td>${element.nome}</td>
            <td>${element.email}</td>
            <td>${element.celular}</td>
            <td>${element.cidade}</td>
            <td>
                <button id= editar-${element.codigo}>editar</button>
                <button id= excluir-${element.codigo}>excluir</button>
            </td>`;
        $registros.appendChild($tr);
    });
}

const getAlunos = async url =>{
    const response = await fetch (url);
    const json = await response.json();
    return json.data;
};

const showAlunos = async () => {
    const alunos = await getAlunos ('http://localhost/PWFE/aulas-Front-Senai/apiphp/alunos/');
    const formatAlunos = alunos.map ( ({id:id, nome:nome, email, celular, cidade})=>
                                        ({id, nome, email, celular, cidade}));
    renderizarTabela (formatAlunos);
}

showAlunos();
$novo.addEventListener('click', exibirModal);
$fechar.addEventListener('click', fecharModal);
$salvar.addEventListener('click', salvarAluno);