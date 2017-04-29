window.onload = () => {

    document.getElementById('botao').addEventListener('click', iniciarProjeto);

}

function iniciarProjeto() {
    let p = new Promise((resolve, reject) => {
        mostrarLoading();
        resolve({});
    })
    .then((result) => {
        
    })
    .then(obterValorGasolina)
    .then(obterValorAlcool)
    .then(converterValores)
    .then(calcularPreco)

    .then(esconderLoading)
    ;
}

function mostrarLoading() {
    console.log('Mostrar loading');
}

function esconderLoading() {
    console.log('Esconder loading');
}

function obterValorGasolina(result) {
    let campo = document.getElementById('gasolina');
    result.valorGasolina = campo.value;
    return result;
}

function obterValorAlcool(result) {
    let campo = document.getElementById('alcool');
    result.valorAlcool = campo.value;
    return result;
}

function converterValores(result) {
    result.valorGasolina = parseFloat(result.valorGasolina);
    result.valorAlcool   = parseFloat(result.valorAlcool);

    return result;
}

function calcularPreco(result) {
    result.resultado = result.valorAlcool / result.valorGasolina;

    console.log(result.resultado);
}

