<?php
echo file_exists("php/db.php")."<br>";
function print_exec($command){
	echo "<b>$command:</b><br>";
	$res=shell_exec($command);
	$res=str_replace("\n","<br>",$res);
	$res=str_replace("\t","    ",$res);
	echo $res."_________________<br>";
}

print_exec("ls -al");
print_exec("ls php -al");
print_exec("pwd");

include("php/db.php");
$db=new Database;
?>