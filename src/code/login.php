<?php 
session_start();
include 'conectar.php'; 

if($conexion->connect_error){
}else{

$comid=$_GET["comid"];

$sql = "UPDATE publicaciones SET LIKES=LIKES+1 WHERE ID='$comid';"; 

$respuesta = $conexion->query($sql);
	
	if($respuesta===TRUE){
		echo "";
}else{
	echo "";
}


$usuario=$_SESSION['ID_USUARIO'];

$sql = "SELECT ID, DESCR, FECHA,LIKES FROM publicaciones where USER = '$usuario' ORDER BY FECHA;"; 

$respuesta = $conexion->query($sql);
	
	if($respuesta->num_rows > 0){
		//echo "bienvenido"; 
		$arreglo = array();

		while ($fila = mysqli_fetch_assoc($respuesta)) {
			$arreglo[]=$fila;
		}

		header('Content-Type:L application/json');
		echo json_encode($arreglo);

}else{
	echo "";
}
}
