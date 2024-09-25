<?php
include("php/class/debug.php");
include("php/class/db.php");
$db=new Database;

check_file("php/class/db.php");
//print_exec("ls -R / | grep \"sql\"");
print_exec("mysql");
?>