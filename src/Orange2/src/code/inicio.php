<?php
include "conectar.php";
//$accion = $_POST ['accion'];

if($conexion) {
 //echo "1";//probar si hay conexion.
 $consulta =" SELECT * FROM tbProductos";
 $devolverP = $conexion -> query ($consulta);//nos devuelve los resultados y los guarda

$JSON=[];
	if($devolverP -> num_rows > 0){
	    while($fila = mysqli_fetch_assoc($devolverP)){//guardamos los resultados, peor no les decimos d3 dond3 vienen 
	    	//echo $fila['nombProducto'];
	    	$JSON[]=$fila;	    }
	}
	echo json_encode($JSON);
}else{
//echo "0";
echo json_encode(["error"=> "no hay conexion a la base de datos"]);

}

?>
