/*var a;

a = 10;

console.log(a);
*/
/*
var semana = ["Segunda", "Terça", "Quarta", "Quinta"];
console.log(semana);
console.log(semana[2]);

semana[4] = "Sexta";
console.log(semana)

semana.push("jose")
console.log(semana)*/

/*
var nomes = [];

nomes = {
    presidente : 'AAAAAA',
    vice : 'BBBBB',
    presidente_camara : 'CCCCCC'
};

console.log(nomes)
*/

/*
var pedido = {
    cliente: {
        nome: 'josé',
        endereco: {
            rua: 'rua: rubi',
            numero: 150
        }
    },
    produtos: [
        {
            nome: 'produto 1',
            preco: 10
        },
        {
            nome: 'produto 2',
            preco: 20
        }
    ]
};

console.log(pedido.cliente.nome)
console.log(pedido.cliente.endereco)
console.log(pedido.produtos)
console.log(pedido.produtos[0].preco)

var produto = pedido.produtos[0];
console.log(produto.preco);

*/

/*
var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
*/

/*
for (var j = 1;  j <=5; j++ ) {
    console.log(j);
}
*/

/*
var endereco = {
    rua: 'Av Brasil',
    numero: 182,
    cidade: 'Umuarama'
};

for (var i in endereco) {
    console.log(endereco[i]);
}
*/

/*
function escrever(a) {
    console.log(a);
}

escrever('Hellow');
escrever('Word');
*/

/*
function soma(a, b , c ){
    var d = a + b+ c;
    return d;
}

console.log(soma(1,1,1));

var resultado = soma (5, 5, 5);
console.log(resultado);
*/

/*
var soma = function(a, b) {
    return a + b;
}

var r = soma(1,5);
console.log(r);
*/

/*
function animacao(posFim) {
    posFim('Fim');
}

animacao(function(a){
    console.log(a);
});
*/


/*
function animacao(posFim) { 
    setTimeout(function() {
        console.log('Oiii');
    }, 3000);
}

animacao(function(a){
    console.log(a);
});
*/

/*
setTimeout(function() {
    console.log('Oiii');
}, 3000);
console.log('Agora');
*/

/***********Eventos***********/

window.onload = iniciar;

function iniciar() {
    //var botao = document.getElementById('botao');
    
    //botao.addEventListener("click", botaoClicado);

    var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', botaoClicado);
}

function botaoClicado(){
    var campo = document.getElementById('idade');

    console.log(campo.value);
}