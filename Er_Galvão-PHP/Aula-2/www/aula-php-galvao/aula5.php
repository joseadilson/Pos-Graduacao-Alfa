<?php

use Alfa\BancoDeDados

$db = BancoDeDados::Singleton('root', '', 'localhost', 'mydb');
$db->host = 'localhost';

/*
$db2 = BancoDeDados::Singleton('root', '', 'localhost', 'mydb');
var_dump($db);
var_dump($db2);
*/
var_dump(get_class_vars(get_class($db)));

/*GET_OBJECT_VARS*(param)/
/*GET_CLASS_VARS*(param)/
/*OOALFA*/