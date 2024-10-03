<?php
session_start();
include("../class/db.php");
include("../class/users.php");
$conn=new Database;
if(isset($_SESSION["uid"])){header("Location:/");exit();}	// Deja login
if(!isset($_POST)){header("Location:/");exit();}		// Pas de $_POST
$username=$_POST["username"];
$password=$_POST["password"];
$UM=new User;
$uexists=$UM->un_exists($username);
if($uexists){
	$id=		$UM->get_id_by_un($username);
	$r_username=	$UM->get_un_by_id($id);
	$r_password=	$UM->get_password($id);
	if(password_verify($password,$r_password)){
		$_SESSION=[];					// Mot de pass bon
		$_SESSION["username"]=	$r_username;
		$_SESSION["uid"]=	$id;
		header("Location:/");
		exit();
	}else{header("Location:/login.php?err=psswd");exit();}
}else{header("Location:/login.php?err=unk");exit();}		// Utilisateur introuvable