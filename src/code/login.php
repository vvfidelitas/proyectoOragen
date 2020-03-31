<?php 



$mysqli = new mysqli("localhost", "root", "", "proyecto");

if($mysqli->connect_errno) {
	echo "Falló la conexion a la base de datos";
}

return $mysqli;
?>

<?php 
session_start();
include 'conectar.php'; 

if($conexion->connect_error){
}else{

$usuario=$_SESSION['ID_USUARIO']; 


$sql = "SELECT * FROM usuario WHERE ID_USUARIO LIKE '$usuario%';"; 

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
