function ingresar(){ 

var usuario = document.getElementById("usser").value; 
var pass = document.getElementById("passw").value; 

var request = new XMLHttpRequest(); 

//peticion al BD//

request.open("POST","../code/login.php?username="+usuario+"&password="+pass,true); 
request.send(); 

request.onreadystatechange = function(){ 
	if(request.readyState == 4 && request.status == 200){ 
		if (request.responseText != "0") {
				window.location.href="inicio.html";
		}else{
				alert("Usuario o contraseña incorrecto");
			}
		
	}else{
	}
   }
}


function usuario(){
var request = new XMLHttpRequest(); 

//peticion al BD//
request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
request.open("POST", "../../code/login.php",true); 


request.send("usser="+usuario+"&passw="+passw); 

request.onreadystatechange = function(){ 
	if(request.readyState == 4 && request.status == 200){ 
		if (request.responseText != "") {
			var data = JSON.parse(request.responseText);
			for(var usuario in data){
				var textnode = document.createTextNode(data[usuario].NOM_USUARIO);

				var node = document.createElement("h3");

				node.appendChild(textnode);

				document.getElementById("h1-name").appendChild(node);
			}
		}else{
		}
	}else{
	}
}
}

function registrar(){ 

var usuario = document.getElementById("username").value; 
var nom = document.getElementById("nombre").value;
var pass = document.getElementById("pass").value; 
 

var request = new XMLHttpRequest(); 

//peticion al BD//

request.open("POST","../code/registrar.php?username="+usuario+"&usuario="+nom+"&password="+pass,true);
request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 


request.send(); 

request.onreadystatechange = function(){ 
	if(request.readyState == 4 && request.status == 200){ 
		alert(request.responseText);
		if (request.responseText != "0") {
				window.location.href="inicio.html";
			}else{
				alert("No Registrado");
			}
		}else{
		}
	}
}




