
//IMC
/*let imc = (peso, altura) => peso / (altura * altura);

let imc = (peso, altura) => {
   let r = peso / (altura * altura);
   return r;
}

let resultudo  = imc(80, 1.75);
console.log(resultudo);
*/
//

/*
var a, b, c;
var vetor = [10,20,30,40];

[a, b, ...c] = vetor;

console.log(a);
console.log(b);
console.log(c);
*/

/*
function multiplicacao(a, b=2){
    console.log(a);
    console.log(b);
}

multiplicacao(10);
*/

/*
function alfa(a, b, ...entrada){
    console.log(a);
    console.log(b);
    console.log(entrada);
}

alfa('A','B','C','D');
*/

/*
for (let i = 0; i < 10; i++) {
    
}

console.log(i)
*/


//PROMISE
/*
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2017);
    }, 3000);
});

let p2 = p.then((result) => {
    console.log(result);

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve(2018);
        }, 3000);
    });
});

p2.then((result) => {
    console.log(result);
});
*/

//Nome, email, cpf, idade, genero
let p = new Promise((resolve, reject) => {
    mostrarLoading();

    reject(1);
})
.then(validarNome)
.then(validarEmail)
.then(validarCPF)
.then(validarIdade)
.then(validarGenero)
.catch(tratarReject);

function mostrarLoading() {
    console.log('Mostrar Loading');
}

function validarNome(result){
    console.log('Validar nome');

    return result;
}

function validarEmail(result){
    console.log('Validar email');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 3000);
    });
}

function validarCPF(result){
    console.log('Validar CPF');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 3000);
    });
}

function validarIdade(result){
    console.log('Validar idade');

    return result;
}

function validarGenero(result){
    console.log('Validar genero');

    return result;
}

function tratarReject(reason){
    console.log(reason);
}