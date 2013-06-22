<?php

$config['charset'] = 'utf8';
$config['prefix'] = 'aws_';
$config['driver'] = 'MySQLi';
$config['master'] = array (
  'charset' => 'utf8',
  'host' => 'localhost',
  'username' => 'root',
  'password' => '123456',
  'dbname' => 'answers'
);
$config['slave'] = array(
	'charset' => 'utf8',
	'host' => 'localhost',
	'username' => 'root',
	'password' => '123456',
	'dbname' => 'test'
);