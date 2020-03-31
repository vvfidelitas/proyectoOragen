function desplegar(){
var texto = document.getElementById("TextField").value;

	var viajero = new XMLHttpRequest();
	viajero.open(
		"GET",
		"Carrito.php?bsqd="+texto+"&lmt=5",
		true
		);
	viajero.send(null);
viajero.onreadystatechange = function(){
		if(viajero.readyState == 4 && viajero.status == 200){
			switch(viajero.responseText){
				case "-1":
					alert("ERROR CONEXIÓN");
					break;
				case "0":
					document.getElementById("respuesta").innerHTML += "No hubo resultados.<br>";	
					break;
				default:
				var coleccion = JSON.parse(viajero.responseText);

				for(var actual in coleccion){
					mostrarCarrito(coleccion[actual]);	

				}
			}
		}
	}
}

function mostrarCarrito(productoCarrito){
	var divItem = document.createElement("div");
	var imagen = document.createElement("img");
	imagen.setAttribute("src","imagenes/productos/"+productoCarrito.imagen)
imagen.setAttribute("class","imgCarrito");

					var titulo=document.createElement("h3");
					var tituloTxt = document.createTextNode(
						productoCarrito.nombre);
					
					var parr=document.createElement("p");
					var parrText = document.createTextNode(
						productoCarrito.id);

					var bComp = document.createElement("input");
					bComp.setAttribute("value",
						"Comprar");

					bComp.setAttribute("type","button");

				bComp.setAttribute("onclick","comprar(\""+productoCarrito.id+"\")");

					parr.appendChild(parrText);


					titulo.appendChild(tituloTxt);
					
					divItem.appendChild(titulo);
					divItem.appendChild(imagen);
					divItem.appendChild(parr);
					divItem.appendChild(bComp);

					divItem.setAttribute("class", "resultado")

					document.getElementById("Contenido").appendChild(divItem);
				
}

function comprar(id){

}
