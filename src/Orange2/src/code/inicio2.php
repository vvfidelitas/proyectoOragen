<?php
	//error_reporting(E_ERROR | E_PARSE);
	$cnxn = mysqli_connect("localhost","root","","Proyecto");
	
	if(!$cnxn){
		echo "-1";
	}else{
		//CONEXION VERIFICADA: código CRUD BD
		mysqli_set_charset($cnxn, "utf8"); 
		$consulta ="SELECT * FROM `tbProductos`";
		$respuesta = mysqli_query($cnxn, $consulta);
		if(mysqli_num_rows($respuesta) > 0){
			$nuevoArreglo = array();

			while($row =mysqli_fetch_assoc($respuesta))
			{
    			$nuevoArreglo[] = $row;
			}
			header('Content-Type: application/json');
			echo json_encode($nuevoArreglo);
		}else{
			echo "0";
		}

	}

?>