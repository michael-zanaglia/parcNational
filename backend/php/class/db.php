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
	function sel_all($table){
		//echo"<b>Select all from \"$table\"</b>";
		$sql="select * from ".$table;
		$res=$this->conn->query($sql);
		$res=$res->fetchAll(PDO::FETCH_ASSOC);
		return $res;
	}
	function sel_from($what,$table,$arg,$single=false){
		$sql="select ".$what." from ".$table." ".$arg;
		$sql=$this->conn->query($sql);
		if($sql->rowCount()>0){
			$res=$sql->fetchAll(PDO::FETCH_ASSOC);
			if($single){//pr que je récupere une simple array et pas une array avec une seule array dedans
				$res=$res[0];
			}
			return $res;
		}else{
			return array();
		}
	}
}
