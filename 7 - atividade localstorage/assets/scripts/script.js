window.onload = function carregaDados() {
    dadosObjeto = leituraDados();
    if (dadosObjeto !== null) {
        imprimeDados(JSON.stringify(dadosObjeto));
    }
}

function leituraDados() {
    var dadosString = localStorage.getItem('database');
    var dadosObjeto = [];
    if (dadosString === null) {
        dadosObjeto = {
            tarefas: []
        }
        localStorage.setItem("database", JSON.stringify(dadosObjeto));
    }
    else {
        dadosObjeto = JSON.parse(dadosString);
    }
    return dadosObjeto;
}

document.querySelector('#adicionarTarefa').addEventListener('click', () => {
    const dataTarefa = document.querySelector('#dataTarefa');
    const horaTarefa = document.querySelector('#horaTarefa');
    const conteudoTarefa = document.querySelector('#conteudoTarefa');
    if ((dataTarefa.value == '') || (horaTarefa.value == '') || (conteudoTarefa.value == '')) {
        dataTarefa.style.border = 'red solid 1px';
        horaTarefa.style.border = 'red solid 1px';
        conteudoTarefa.style.border = 'red solid 1px';
    }
    else {
        dataTarefa.style.border = '';
        horaTarefa.style.border = '';
        conteudoTarefa.style.border = '';
        adicionarTarefa(dataTarefa.value, horaTarefa.value, conteudoTarefa.value);
    }
});
function adicionarTarefa(data, hora, nomeTarefa) {
    let dadosObjeto = leituraDados();
    let tarefaAdicionar =
    {
        'id': pegaID(),
        'data': data,
        'hora': hora,
        'tarefa': nomeTarefa
    }
    dadosObjeto.tarefas.push(tarefaAdicionar);
    localStorage.setItem('database', JSON.stringify(dadosObjeto));
    imprimeDados();
}

function imprimeDados() {
    document.querySelector('.tarefasTela').innerHTML = '';
    dadosObjeto = leituraDados();
    dadosObjeto.tarefas.forEach(eachTarefas => {
        let defaultHTML = '<div class="tarefa1">' +
            '<h3 id="dias">' + eachTarefas.data + '</h3>' +
            '<h3 id="horas">' + eachTarefas.hora + '</h3>' +
            '<h3 id="tarefa">' + eachTarefas.tarefa + '</h3>' +
            '<div class="icons">' +
            '<button class="btnApagar"><i class="fa-solid fa-trash"></i></button>' +
            '<button class="btnCheck"><i class="fa-regular fa-square-check"></i></button>' +
            '</div>' +
            '</div>'
        document.querySelector('.tarefasTela').innerHTML += defaultHTML;
    });
}

let bntConfirm = document.querySelector('#bnt2');
let colorBack = document.querySelector('#verify').backgroundColor;
console.log(colorBack)
bntConfirm.addEventListener('click', () => {
    let backgroundColor = window.getComputedStyle(colorBack).backgroundColor;
    console.log(backgroundColor)
    if (backgroundColor === 'rgb(255, 255, 255)') {
        bntConfirm.style.backgroundColor = 'rgba(22, 143, 22, 0.692)';
    } else {
        bntConfirm.style.backgroundColor = 'rgb(255, 255, 255)';
    }
});

function pegaID(){
    dadosObjeto = leituraDados();
    let tamanhoVetor = dadosObjeto.tarefas.length;
    return tamanhoVetor
}

