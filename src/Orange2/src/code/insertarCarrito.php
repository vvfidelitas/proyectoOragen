<?php
	$IDdeProdcuto = $_GET["idP"];
	error_reporting(E_ERROR | E_PARSE);
	$cnxn = mysqli_connect("localhost","root","","Proyecto");
	
	if(!$cnxn){
		echo "-1";
	}else{
		//CONEXION VERIFICADA: código CRUD BD
		mysqli_set_charset($cnxn, "utf8"); 
		$sql ="INSERT INTO `Carrito` (`idProducto`,`nombProducto`,`cantidad`,`precio`,`img`) 
		SELECT `idProducto`,`nombProducto`,`cantidad`,`precio`,`img` FROM `tbProductos` where 
		`idProducto`= '$IDdeProdcuto' ";
		if($cxn->query($sql)===TRUE){
			echo "Datos insertados exitosamente";
		}else{
			echo "Error: ".$sql ."<br>" $cxn->error;
		}
	
	}
	$cxn->close();
?>