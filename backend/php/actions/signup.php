<?php
session_start();
include("../class/db.php");
if(!isset($_POST)){
	header("Location:/signup.php");
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
if($username_used>0){header("Location:/signup.php?err=un_at");exit();}			// username deja pris
if(strlen($username)<3){header("Location:/signup.php?err=un_nle");exit();}		// username pas assez long
if($email_used>0){header("Location:/signup.php?err=email");exit();}			// email deja pris
if(strlen($password1)<8){header("Location:/signup.php?err=psswd_nle");exit();}		// Mot de passe trop court
if($password1!=$password2){header("Location:/signup.php?err=ncp_psswd");exit();}	// Mots de passes pas correspondants

$conn->prepare("insert into users (username,password,firstname,lastname,email,birthdate,gender,role) values (?,?,?,?,?,?,?,?)");
if($conn->execute([$username,password_hash($password1,PASSWORD_DEFAULT),$fname,$lname,$email,$bdate,$gender,"user"])){
	header("Location:/index.php");
	exit();
}else{
	header("Location:/signup.php&err=");
	exit();
}