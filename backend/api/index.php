<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header('Content-Type:application/json');
include("../php/class/db.php");
include("../php/class/debug.php");
$conn=new Database;
$page="";
$arg="";
if(isset($_GET["page"])){
	$page=$_GET["page"];
}
if(isset($_GET["arg"])){
	$arg=$_GET["arg"];
}
if($page!=""){
	if($page=="index"){
		if($arg=="wallpaper"){
			echo json_encode($conn->sel_from("*","index_photos","where id_index_photos = 1",true)["photo"]);
		}else if($arg=="camping"){
			echo json_encode(explode("\n",$conn->sel_from("photos","campings","order by id_camping desc limit 1",true)["photos"])[0]);
		}else if($arg=="circuit"){
			echo json_encode(explode("\n",$conn->sel_from("photos","circuits","order by id_circuit desc limit 1",true)["photos"])[0]);
		}else{
			echo"{}";
		}
	}else if($page=="circuits"){
		if($arg==""){
			echo json_encode($conn->sel_all("circuits"));
		}else{
			echo json_encode($conn->sel_from("*","circuits","where id_circuit = ".$arg,true));
		}
	}else if($page=="refuges"){
		if($arg==""){
			echo json_encode($conn->sel_all("campings"));
		}else{
			echo json_encode($conn->sel_from("*","campings","where id_camping = ".$arg,true));
		}
	}else if($page=="billets"){
		if($arg==""){
			if(isset($_SESSION["uid"])){
				echo json_encode($conn->sel_from("*","billets","where id_user = ".$_SESSION["uid"]));
			}else{
				echo"{}";
			}
		}else{
			if(isset($_SESSION["uid"])){
				$buyer_id=$conn->sel_from("*","billets","where id_billet = ".$arg,true)["id_user"];
				if($_SESSION["uid"]==$buyer_id){
					echo json_encode($conn->sel_from("*","billets","where id_billet = ".$arg,true));
				}else{
					echo"{}";
				}
			}else{
				echo"{}";
			}
		}
	}else if($page=="infos"){
		if(isset($_GET["info_id"])){
			$info_id=$_GET["info_id"];
		}else{
			$info_id="";
		}
		if($info_id==""){
			if($arg=="actu"){
				echo json_encode($conn->sel_from("*","informations"," where id_info_type = 1"));
			}else if($arg=="annonces"){
				echo json_encode($conn->sel_from("*","informations"," where id_info_type = 2"));
			}else{
				echo"{}";
			}
		}else{
			echo json_encode($conn->sel_from("*","informations"," where id_information = ".$info_id,true));
		}
	}else{
		echo"{}";
	}
}else{
	if(!ctype_space($arg)&&$arg!=""){
		if($arg=="place"){
			echo json_encode($conn->sel_all("placetype"));
		}else{
			echo"{}";
		}
	}else{
		echo"{}";
	}
}