window.onload = () => {

    document.getElementById('botao').addEventListener('click',botaoClicado);

}

function  botaoClicado() {
    let p = new Promise((resolve, reject) => {
        mostrarLoading();
        resolve({});
    })
    .then((result) => {
        
    })
    .then(pegarValor1)
    .then(pegarValor2)
    .then(converterValores)
    .then(validarValores)
    .then(calcularResultado)
    .then(mostrarResultado)
    .catch((reason) => {
        window.alert(reason);
    })
    .then(esconderLoading)
    ;
}

function mostrarLoading() {
    console.log('Mostrar Loading');
}

function esconderLoading() {
    console.log('Esconder Loading');
}

function pegarValor1(result) {
    let campo = document.getElementById('a');
    result.valor1 = campo.value;
    return result;
}

function pegarValor2(result) {
    let campo = document.getElementById('b');
    result.valor2 = campo.value;
    return result;
}

function calcularResultado(result) {
    result.resultado = result.valor1 + result.valor2;

    return result.resultado;
}

function mostrarResultado(result) {
    window.alert(result);
}

function converterValores(result){
    result.valor1 = parseInt(result.valor1);
    result.valor2 = parseInt(result.valor2);

    return result;
}

function validarValores(result) {
    
    if (isNaN(result.valor1) || isNaN(result.valor2) )  {
        return Promise.reject('Valor inválido');
    }

    return result;
}