<?php  
class Admin {
	public $usuario;
	public $matricula;
	function __constructor(Usuario $usuario) {
		$this->usuario = $usuario;
	}
	function autenticar() {
		
		if ($this->usuario->autenticar()) {
			
		}
	}
}