<?php
class Usuario {
	private $login;
	private $senha;
	public $data_criacao;

	function __construct() {
		$this->data_criacao = new DateTime();
	}

	public function setLogin($login) {
		if ($this->login == null) {
			$this->login = $login;
		} else {
			die('Erro!');
		}
		$this->login = $login;
	}

	public function getLogin() {
		return $this->login;
	}


	function autenticar() {
		//Código semi-fake
		$registro = new StdClass();
		$registro->login = 'jose';
		$registro->senha = '123';

		if ($this->login == $registro->login and $this->senha == $registro->senha) {
			return true;
		} else {
			return false;
		}


	}
}