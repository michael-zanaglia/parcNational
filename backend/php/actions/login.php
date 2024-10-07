<?php
session_start();
include("../class/db.php");
include("../class/users.php");
$conn=new Database;
if(isset($_SESSION["uid"])){
	return False;					// Déja log
	exit();
}
if(!isset($_POST)){
	return False;					// Pas de $_POST
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
	if(password_verify($password,$r_password)){
		$_SESSION=[];
		$_SESSION["username"]=	$r_username;
		$_SESSION["uid"]=	$id;
		header("Location:/");
		return True;				// Yeah!
		exit();
	}else{
		return False;				// Mauvais mot de passe
		exit();
	}
}else{
	return False;					// Utilisateur inexistant
	exit();
}