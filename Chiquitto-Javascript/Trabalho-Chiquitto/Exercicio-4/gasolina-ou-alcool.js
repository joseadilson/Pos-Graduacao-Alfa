window.onload = () => {

    document.getElementById('botao').addEventListener('click', iniciarProjeto);

}

function iniciarProjeto() {
    Promise.resolve(null)
    .then(obterValorGasolina)
    .then(obterValorAlcool)
    .then(converterValores)
    .then(validarCampos)
    .then(calcularValores)
    .catch((reason) => {
        window.alert(reason);
    })
    ;
}

function obterValorGasolina() {
    let campoGasolina = document.getElementById('gasolina');
    
    return campoGasolina.value;
}


function obterValorAlcool(result) {
    let campos      = {};
    let campoAlcool = document.getElementById('alcool');
    campos.gasolina = result;
    campos.alcool   = campoAlcool.value;

    return campos;
}

function converterValores(campos){
    campos.alcool   = parseFloat(campos.alcool);
    campos.gasolina = parseFloat(campos.gasolina);

    return campos;
}

function validarCampos(campos) {
    if (isNaN(campos.alcool) || isNaN(campos.gasolina)) {
        return Promise.reject('Valores inválidos, somente numeros!');
    }

    return campos;
}

function calcularValores(campos){
    let resultado = campos.alcool / campos.gasolina;

    if (resultado > 0.70) {
        window.alert('Gasolina e mais vantajoso.')
    } else {
        window.alert('Alcool e mais vantajoso');
    }
}