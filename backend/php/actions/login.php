<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
session_start();
include("../class/db.php");
include("../class/users.php");
$conn=new Database;
if(isset($_SESSION["uid"])){
	return false;					// Déja log
	exit();
}
if(!isset($_POST)){
	return false;					// Pas de $_POST
	exit();
}
$username=$_POST["username"];
$password=$_POST["password"];
$UM=new User;
$uexists=$UM->un_exists($username);
if($uexists){
	$id=		$UM->get_id_by_un($username);
	$r_username=	$UM->get_un_by_id($id);
	$r_password=	$UM->get_password($id);
	$role=		$UM->get_role($id);
	if(password_verify($password,$r_password)){
		$_SESSION=[];
		$_SESSION["username"]=	$r_username;
		$_SESSION["uid"]=	$id;
		$_SESSION["role"]=	$role;
		return true;				// Yeah!
		exit();
	}else{
		return false;				// Mauvais mot de passe
		exit();
	}
}else{
	return false;					// Utilisateur inexistant
	exit();
}