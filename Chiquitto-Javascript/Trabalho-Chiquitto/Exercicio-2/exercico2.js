'use strict';

const isIsograma = (str) => !!str.match(/(.).*?\1/);

window.onload = () => {
	document.getElementById('testar').addEventListener('click', () => {
		let value = document.getElementById('entrada').value,
			saida;

		saida = (value ? `É um isograma: ${isIsograma(value)}` : "Entre com um valor" );
		document.getElementById("saida").innerHTML = saida;
	})
}