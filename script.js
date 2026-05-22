let notas = [];

const textarea = document.getElementById('criacaodenota');
const botao = document.getElementById('salvarnota');
const listanotas = document.getElementById('listadenotas');

botao.onclick = function() {
    const nota = textarea.value;
    if (nota.trim()===""){
        alert("Digite algo para salvar a nota!");
        return;
    }
    notas.push(nota);
    textarea.value = "";
    mostrarNotas();
}

function mostrarNotas(){

    listanotas.innerHTML = "";

    for (let i = 0; i < notas.length; i++){

        listanotas.innerHTML += `
            <div class="nota">
                <p>${notas[i]}</p>
                <button onclick="deletarNota(${i})">Deletar</button>
            </div>
        `;
    }
}

function deletarNota(i){

    notas.splice(i,1);

    mostrarNotas();
}