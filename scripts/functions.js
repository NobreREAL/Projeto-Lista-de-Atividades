export function novoItem(fechar, tamanhoLista, arrayAtividades)
{
    if (tamanhoLista > 100)
    {
        alert("Lista está cheia!");
    } else {

        let li = document.createElement('li');
        let inputValor = document.getElementById("input-tarefa").value;
        let t = document.createTextNode(inputValor);

        const atividadeLista = {
            "tarefa": inputValor
        }

        arrayAtividades.push(atividadeLista);

        localStorage.setItem("item", JSON.stringify(arrayAtividades));

        li.appendChild(t);
        if (inputValor === '') {
            alert("Você precisa escrever algo!");
        } else {
            document.getElementById("escopo-lista").appendChild(li);
        }
        document.getElementById("escopo-lista").value = '';

        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "deletar";
        span.appendChild(txt);
        li.appendChild(span);

        for (let i = 0; i < fechar.length;  ++i) {
            fechar[i].onclick = function() {
                let div = this.parentElement;
                div.remove();
            }
        }
    }
}

