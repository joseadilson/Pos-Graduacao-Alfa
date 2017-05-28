<?php
/*PDO*/
require '../../autoload.php';

use Alfa\Usuario;

/*INSERT*/
$login = $_GET['usuario'];

$dsn = 'mysql:dbname=phpconfbr;host=localhost';

$dbh = new PDO($dsn, 'root', '');

$u = new Usuario($login);

$u->salvarLogin($dbh);

$dbh = null;