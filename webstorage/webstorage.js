"use strict";

// Webstorage - Guarda temporariamente as informações sobre os usuários.

// localstorage retorna um json livre que da para trabalhar livremente

// para inserir um dado no local storage utiliza-se o comando localStorage.setItem('nome', 'bruno')

// para pegar um dado no local storage utiliza-se o comando localStorage.getItem('nome')

// para remover um dado no local storage utiliza-se o comando localStorage.removeItem('estado')

// para limpar um dado no local storage utiliza-se o comando localStorage.clear()

// alert (caixa de texto, prompt (pergunta + caixa de texto), confirm(caixa ok ou cancelar))
const $btnAdicionar = document.getElementById( 'btnDado' );
const $btnAtualizar = document.getElementById( 'btnAtualizar' );
const $btnExcluir = document.getElementById( 'btnExcluir' );
const $btnLimpar = document.getElementById( 'btnLimpar' );
const $resultadoDado = document.getElementById( 'resultadoDado' );

const existeNomes = () => {
    return localStorage.hasOwnProperty( 'nomes' );
}

const transformaEmJason = ( key ) => {
    return JSON.parse( localStorage.getItem( key ) );
    // console.log(x);
    // return x;
}

const transformaEmString = ( json ) => {
    return JSON.stringify( json );
}

const atualizarLista = () => {
    var nome = localStorage.getItem( 'nome' );

    $resultadoDado.innerHTML = ``;

    if( existeNomes() ){
        var json = transformaEmJason( 'nomes' );
        json.forEach( key => {
            $resultadoDado.innerHTML += `<div>${ key.nome }</div>`;
        });
    }
}

const adicionar = () => {
    let nomes = new Array();

    var nome = prompt( "Insira o nome que será adicionado:" );

    if( existeNomes() ){
        nomes = transformaEmJason( 'nomes' );
    }

    nomes.push( { 'nome' : nome } );

    localStorage.setItem( 'nomes', transformaEmString( nomes ) );

    atualizarLista();
}

const remover = () => {
    if( !existeNomes() ){
        alert('Não há nenhum nome na lista');
    }
    else{
        var nome = prompt( "Insira o nome que será removido:" );

        var nomes = transformaEmJason( 'nomes' );

        // console.log(nomes);

        var nomesAtualizados = nomes.filter( n => n.nome != nome );

        // console.log( nomesAtualizados );

        localStorage.setItem( 'nomes', transformaEmString( nomesAtualizados ) );

        // var x = nomes.filter( ( item ) => { return item != nome } )

        // console.log(x[0]);

        // localStorage.removeItem(  );

        // console.log( nomes.filter( ( e ) => { return e == nome } ) );

        // localStorage.setItem( 'nomes', JSON.stringify( x ) );
    }
    atualizarLista();
}

const atualizar = () => {
    if( !existeNomes() ){
        alert('Não há nenhum nome na lista');
    }
    else{
        var nome = prompt( "Insira o nome que será alterado:" );

        var novoNome = prompt( "Insira o novo nome:" );

        var nomes = transformaEmJason( 'nomes' );

        // console.log(nomes);

        var nomesAtualizados = nomes.map( n => { if( n.nome == nome ){
                    return n = {'nome' : novoNome };
                }
                else{
                    return n
                }
            }
        );

        // console.log( nomesAtualizados );

        localStorage.setItem( 'nomes', transformaEmString( nomesAtualizados ) );
    }
    atualizarLista();
}

const limpar = () => {
    localStorage.clear();

    atualizarLista();
}

const inicializaPagina = () => {
    if( existeNomes() ){
        atualizarLista();
    }
}

inicializaPagina();

$btnAdicionar.addEventListener('click', ()=>{ adicionar() })
$btnExcluir.addEventListener('click', ()=>{ remover() })
$btnAtualizar.addEventListener('click', ()=>{ atualizar() })
$btnLimpar.addEventListener('click', ()=>{ limpar() })