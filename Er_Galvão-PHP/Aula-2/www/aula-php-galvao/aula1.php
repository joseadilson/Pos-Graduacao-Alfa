<?php
/*require '../../class/Usuario.php';
require '../../class/Admin.php';
$a = new Admin(new Usuario());
//var_dump($a->usuario->autenticar());
var_dump($a);
*/
require '../../class/Usuario.php';
$u = new Usuario(); //Executar o construtor da classe
$u->setLogin('jose');
echo $u->getLogin();
//$u->senha = '122';
if ($u->autenticar()) {
	echo 'Sucesso!';
} else {
	
	echo 'Usuario e/ou senha inconrreto(s)!';
}