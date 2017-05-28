<?php
require '../../autoload.php';

/*INSERT*//*
$login = $_GET['usuario'];

$dsn = 'mysql:dbname=phpconfbr;host=localhost';

$dbh = new PDO($dsn, 'root', '');

$sql = "INSERT INTO usuario (login) VALUES (:login)";

$stmt = $dbh->prepare($sql);

$stmt->bindParam(':login', $login, PDO::PARAM_STR);

$stmt->execute();

$dbh = null;
*/


/*SELECT *//*
$id = $_GET['id'];

$dsn = 'mysql:dbname=phpconfbr;host=localhost';

$dbh = new PDO($dsn, 'root', '');

$sql = "SELECT login FROM usuario WHERE id=:id";

$stmt = $dbh->prepare($sql);

$stmt->bindParam(':id', $id, PDO::PARAM_INT);

$stmt->execute();

while ($registro= $stmt->fetchObject()) {
    echo $registro->login;

}

$dbh = null;
*/