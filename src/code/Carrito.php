<?php
	$termino = $_GET["bsqd"];
	$cantidad = ( (int)$_GET["lmt"] );
	$cnxn = mysqli_connect("localhost","root","","proyecto");
	
	if(!$cnxn){
		echo "-1";
	}else{
		mysqli_set_charset($cnxn, "utf8"); 
		$consulta ="SELECT * FROM `carrito`";
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
