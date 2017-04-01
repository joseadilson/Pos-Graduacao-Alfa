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