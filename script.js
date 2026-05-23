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
    notas.push({
        texto: textarea.value,
        data: new Date().toLocaleString()
    });
    textarea.value = "";
    mostrarNotas();
}

function mostrarNotas(){
    
    listanotas.innerHTML = "";

    notas.forEach((nota, index) => {

        listanotas.innerHTML += `
            <div class="nota">
                <p>${nota.texto}</p>
                <small>Criado em ${nota.data}</small>
                <button onclick="deletarNota(${index})">Deletar</button>
            </div>
        `;
    });
}

function deletarNota(i){

    const confirmacao = confirm("Tem certeza que deseja deletar esta nota?");

    if (!confirmacao) {
        return;
    }

    notas.splice(i,1);

    mostrarNotas();
}