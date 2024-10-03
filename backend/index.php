<?php
session_start();
include("php/class/debug.php");
include("php/class/db.php");
$db=new Database;
if(isset($_SESSION["username"])){
	?>
	<p>You are signed in as <?php echo$_SESSION["username"]; ?></p>
	<?php
}else{
	?>
	<p>You are not signed in.</p>
	<?php
}
?>
<style>
*{font-family:verdana;}
td{padding:5px;}
table{border-collapse:collapse;}
th{background:#777;border:#000 1px solid;color:#fff;}
td{background:#ddd;}
th b{filter:drop-shadow(#000 -1px 2px 1px);}
th{box-shadow:#0005 0px 0px 4px inset;padding:4px;}
td{border:#000 1px solid;box-shadow:#0005 0px 0px 10px inset;/*text-shadow:#000 0px 0px 8px;*/}
</style>
<a href="/login.php">Log In</a><br/>
<a href="/signup.php">Sign up</a>
<form method=post action=/php/actions/logout.php>
	<input type=submit value="Log out">
</form>
<b>Users</b>
<table border=1>
<tr>
<th><b>ID</b></th>
<th><b>Username</b></th>
<th><b>Prénom</b></th>
<th><b>Nom</b></th>
<th><b>E-mail</b></th>
<th><b>Sexe</b></th>
<th><b>Date de naissance</b></th>
</tr>
<?php
$users=$db->sel_all("users");
foreach($users as &$user){
	?>
	<tr>
		<td><?="N° ".$user["id_user"];?></td>
		<td><?=$user["username"];?></td>
		<td><?=$user["firstname"];?></td>
		<td><?=$user["lastname"];?></td>
		<td><?=$user["email"];?></td>
		<td><?=$user["gender"]=="h"?"<font color=#00f>Homme</font>":"<font color=#f0f>Femme</font>";?></td>
		<td><?=$user["birthdate"];?></td>
	</tr>
	<?php
}
//check_file("php/class/db.php");
//print_exec("ls -R / | grep \"sql\"");
//print_exec("mysql");
