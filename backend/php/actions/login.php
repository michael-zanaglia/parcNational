<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");
session_start();
include("../class/db.php");
include("../class/users.php");
$conn=new Database;
if(isset($_SESSION["uid"])){
	echo json_encode(['success' => False]) ;					// Déja log
	exit();
}
if(!isset($_POST)){
	echo json_encode(['success' => False]) ;					// Pas de $_POST
	exit();
}
$username=$_POST["username"];
$password=$_POST["password"];
$UM=new User;
$uexists=$UM->un_exists($username);
if($uexists){
	$id= $UM->get_id_by_un($username);
	$r_username= $UM->get_un_by_id($id);
	$r_password= $UM->get_password($id);
	if(password_verify($password,$r_password)){
		$_SESSION=[];
		$_SESSION["username"]=$r_username;
		$_SESSION["uid"]=$id;
		
		echo json_encode(['success' => True]) ;				// Yeah!
		exit();
	}else{
		echo json_encode(['success' => False]) ;				// Mauvais mot de passe
		exit();
	}
}else{
	echo json_encode(['success' => False]) ;					// Utilisateur inexistant
	exit();
}