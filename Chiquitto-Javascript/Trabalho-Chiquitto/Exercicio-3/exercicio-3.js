'use strict';

class Pessoa {
	set nome (nome) {
  	this._nome = nome;
  }
  get nome () {
  	return this._nome;
  }
  incluir () {
  	return `Inclusão do Objeto ${this.constructor.name}`;
  }
  alterar () {
  	return `Alteração do Objeto ${this.constructor.name}`;
  }
  excluir () {
  	return `Exclusão do Objeto ${this.constructor.name}`;
  }
}

class Cliente extends Pessoa {
  constructor() {
  	super();
  }
  set senha (senha) {
  	this._senha = senha;
  }
  get senha () {
  	return this._senha;
  }
  set email (email) {
  	this._email = email;
  }
  get email () {
  	return this._email;
  }
}

class Vendedor extends Pessoa {
	constructor() {
  	super();
  }
}

class Loja {
	set nome (nome) {
  	this._nome = nome;
  }
  get nome () {
  	return this._nome;
  }
  set endereco (endereco) {
  	this._endereco = endereco;
  }
  get endereco () {
  	return this._endereco;
  }
}

class Venda {
	set cliente (cliente) {
  	this._cliente = cliente;
  }
  get cliente () {
  	return this._cliente;
  }
  set dataVenda (dataVenda) {
  	this._dataVenda = dataVenda;
  }
  get dataVenda () {
  	return this._dataVenda;
  }
  set situacao (situacao) {
  	this._situacao = situacao;
  }
  get situacao () {
  	return this._situacao;
  }
  set valor (valor) {
  	this._valor = valor;
  }
  get valor () {
  	return this._valor;
  }
	set subtotal (subtotal) {
  	this._subtotal = subtotal;
  }
  get subtotal () {
  	return this._subtotal;
  }
  incluir () {
  	return `Inclusão do Objeto ${this.constructor.name}`;
  }
  cancelar () {
  	return `Cancelar do Objeto ${this.constructor.name}`;
  }
}

class Livro {
	set descricao (descricao) {
  	this._descricao = descricao;
  }
  set descricao (descricao) {
  	this._descricao = descricao;
  }
  get descricao () {
  	return this._descricao;
  }
  set titulo (titulo) {
  	this._titulo = titulo;
  }
  get titulo () {
  	return this._titulo;
  }
  set autor (autor) {
    this._autor = autor;
  }
  get autor () {
    return this._autor;
  }
}

class LivroImpresso extends Livro {
	constructor() {
		super();
	}
}

class Ebook extends Livro {
	constructor() {
  	super();
  }
}

// Instancia de pessoa
let pessoa = new Pessoa();
// Seta os atributos
pessoa.nome = 'Chiquitto';
// Chamada de metodos
console.log(`${pessoa.incluir()} \n ${pessoa.alterar()} \n ${pessoa.excluir()}`);
// Imprime o objeto
console.log(pessoa);


// Instancia de Cliente
let cliente = new Cliente();
// Seta os atributos
cliente.nome = 'João Antonio';
cliente.senha = '123Mudar';
cliente.email = 'joao@hostname.com.br'
// Chamada de metodos
console.log(`${cliente.incluir()} \n  ${cliente.alterar()} \n ${cliente.excluir()}`);
// Imprime o objetos
console.log(cliente);

// Instancia de Vendedor
let vendedor = new Vendedor();
// seta os atributos
vendedor.nome = 'José Adilson';
// Chamada de metodos
console.log(`${vendedor.incluir()} \n ${vendedor.alterar()} \n ${vendedor.excluir()}`);
// Imprime o objeto
console.log(vendedor);

// Instancia de Vendedor
let loja = new Loja();
// seta os atributos
loja.nome = 'Bar do zé';
// Imprime o objeto
console.log(loja);

// Instancia do livro
let livro = new Livro();
// Seto os atrbutor
livro.nome = 'A igreja do Diabo';
livro.autor = 'Machado de Assis';
livro.descricao = 'De uma idéia mirífica. Conta um velho manuscrito beneditino que o Diabo, em certo dia, teve a idéia de fundar uma igreja.';
// Imprimo o objeto
console.log(livro);

// Instancia de LivroImpresso
let livroImpresso = new LivroImpresso();
// Seto os atributos
livroImpresso.nome = 'Os últimos dias de Krypton';
livroImpresso.autor = 'KEVIN J. ANDERSON';
livroImpresso.descricao = 'Antes da calamidade que fez com que o pequeno Kal-El - Super-Homem.';
// Imprimo o objeto
console.log(livroImpresso);

// Instancia de LivroImpresso
let ebook = new Ebook();
// Seto os atributos
ebook.nome = 'JavaScript: The Good Parts (Inglês)';
ebook.autor = 'Douglas Crockford';
ebook.descricao = 'Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript.';
// Imprimo o objeto
console.log(ebook);

// Instancia de Venda
let venda = new Venda();
// Seto os atributos
venda.cliente = cliente;
venda.dataVenda = new Date();
venda.situacao = 'Aberta';
venda.valor = 666;
venda.subtotal = 666;
// Chamada de metodos
console.log(`${venda.incluir()} \n ${venda.cancelar()}`);
// Imprimo o objeto
console.log(venda);