<?php
class Database{
	private $conn;
	private $host;
	private $dbname;
	private $user;
	private $passwd;
	function __construct(){
		$this->host="mysql-db";
		$this->dbname="mercantour";
		$this->user="root";
		$this->passwd="root_password";
		$this->conn=new PDO("mysql:host=$this->host;dbname=$this->dbname;charset=utf8",$this->user,$this->passwd);
	}
}