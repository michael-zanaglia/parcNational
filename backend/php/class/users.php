<?php
if(!class_exists("Database")){
	include("db.php");
	$conn=new Database;
}
class User{
	function user_exists($uid){
		global $conn;
		$sql=$conn->prepare("select username from users where id_user = ?");
		$sql=$conn->execute([$uid]);
		if($conn->row_count()>0){return true;}
		return false;
	}
	function un_exists($username){
		global $conn;
		$sql=$conn->prepare("select username from users where upper(username) = ?");
		$sql=$conn->execute([strtoupper($username)]);
		if($conn->row_count()>0){return true;}
		return false;
	}
	function get_id_by_un($username){
		global $conn;
		$sql=$conn->prepare("select id_user from users where upper(username) = ?");
		$sql=$conn->execute([strtoupper($username)]);
		return $conn->fetch()[0];
	}
	function get_un_by_id($uid){
		global $conn;
		$sql=$conn->prepare("select username from users where id_user = ?");
		$sql=$conn->execute([$uid]);
		return $conn->fetch()[0];
	}
	function get_password($uid){
		global $conn;
		$sql=$conn->prepare("select password from users where id_user = ?");
		$sql=$conn->execute([$uid]);
		return $conn->fetch()[0];
	}
}