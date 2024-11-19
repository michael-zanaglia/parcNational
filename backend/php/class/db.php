<?php
class Database{
	public $conn;
	private $host;
	private $dbname;
	private $user;
	private $passwd;
	public $prepared;
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
	function prepare($request){
		$this->prepared=$this->conn->prepare($request);
	}
	function execute($args=array()){
		if($args==array()){
			return $this->conn->execute();
		}else{
			$index=1;
			foreach($args as&$arg){
				$this->prepared->bindParam($index,$arg);
				$index++;
			}
			return $this->prepared->execute();
		}
	}
	function row_count(){
		return $this->prepared->rowCount();
	}
	function fetch(){
		return $this->prepared->fetch();
	}
	function fetch_all(){
		return $this->prepared->fetchAll(PDO::FETCH_ASSOC);
	}
}
