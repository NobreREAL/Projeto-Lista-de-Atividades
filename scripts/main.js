//Criando o botão para adicionr em cada item da lista.

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
        div.style.display = "none";
    }
}