<?php
session_start();
include("../class/db.php");
if(!isset($_POST)){
	echo "NOPOST";exit();								// Pas de $_POST
}

$username=	$_POST["username"];
$fname=		$_POST["fname"];
$lname=		$_POST["lname"];
$gender=	$_POST["gender"];
$email=		$_POST["email"];
$bdate=		$_POST["bdate"];
$password1=	$_POST["password1"];
$password2=	$_POST["password2"];

$conn=new Database;
$conn->prepare("select * from users where upper(username) = ?");
$conn->execute([$_POST["username"]]);
$username_used=$conn->row_count();

$conn->prepare("select * from users where upper(email) = ?");
$conn->execute([$_POST["email"]]);
$email_used=$conn->row_count();

/* VERIFICATIONS */
if($username_used>0){echo "PSEUDODP";exit();}						// username deja pris
if(strlen($username)<3){echo "PSEUDOPAL";exit();}					// username pas assez long
if($email_used>0){echo "EMAILDP";exit();}						// email deja pris
if(strlen($password1)<8){echo "MDPPAL";exit();}						// Mot de passe trop court
if($password1!=$password2){echo"MDPPC";exit();}						// Mots de passes pas correspondants

$conn->prepare("insert into users (username,password,firstname,lastname,email,birthdate,gender,role) values (?,?,?,?,?,?,?,?)");
if($conn->execute([$username,password_hash($password1,PASSWORD_DEFAULT),$fname,$lname,$email,$bdate,$gender,"user"])){
	echo"OK";		// Utilisateur inscrit
	exit();
}else{
	echo"PASOK";		// Erreur interne
	exit();
}