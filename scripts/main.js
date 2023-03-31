//Criando o botão para adicionar em cada item da lista.

import { novoItem } from "./functions.js";

let minhaListaNode = document.getElementsByTagName("LI");

let contador = 0;

for (contador = 0; contador < minhaListaNode.length; contador++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "deletar";
    span.appendChild(txt);
    minhaListaNode[contador].appendChild(span);
}

//Clicando em um botao de fechar para esconder o item.

let fechar = document.getElementsByClassName("deletar");
for (contador = 0; contador < fechar.length; ++contador) {
    fechar[contador].onclick = function() {
        let div = this.parentElement;
        div.remove();
    }
}

// Adicionando um símbolo de checado enquanto clica na lista

let lista = document.querySelector('ul');
lista.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked')
    }
}, false);

// Adicionando um novo item quando clicando no botão de Adicionar

let botaoAdd = document.querySelector(".adicionar-atividade");


botaoAdd.addEventListener("click", () => {
    novoItem(fechar, minhaListaNode.length);
})

// Salvamento dinâmico da informação na página.


