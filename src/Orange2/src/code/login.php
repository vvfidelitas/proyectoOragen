<?php 

$username = $_GET["username"];
$clave = $_GET["password"]; 

session_start();
include 'conectar.php'; 
$cnxn = mysqli_connect("localhost","root","","proyecto");
	
if(!$cnxn){
		echo "-1";
}else{
	//CONEXION VERIFICADA: código CRUD BD
	error_reporting(E_ERROR | E_PARSE);//no muestra el warning
	mysqli_set_charset($cnxn, "utf8");//no contempla el espa;ol
	//Cortesía Monge Solís
	$sql = "SELECT * FROM tbusuarios WHERE nombUsuario = '$username' AND contrasena = '$clave'"; 

	$respuesta = mysqli_query($cnxn, $sql);
	if(mysqli_num_rows($respuesta) > 0){
		echo "1";
	}else{
		echo "0";
	}
}

?>