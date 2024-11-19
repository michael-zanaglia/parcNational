<?php
//echo"<b>DEBUG INCLUDED</b><br>";
function print_exec($command){
	echo "<b>$command:</b>";
	$res=shell_exec($command);
	if($res==null){
		echo"<b> NULL RESULT</b><br>";
		return;
	}else{
		echo"<br>";
	}
	$res=str_replace("<","&lt;",$res);
	$res=str_replace(">","&gt;",$res);
	$res=str_replace("\n","<br>",$res);
	$res=str_replace("\t","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",$res);
	echo $res."____________________<br>";
}
function check_file($file){
	echo"<b>FILE: </b>".$file." ";
	echo(file_exists($file))?"<b>OK</b><br>":"<b>NOT OK</b><br>";
};