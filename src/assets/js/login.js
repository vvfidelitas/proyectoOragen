function validar(){ 

var usuario = document.getElementById("username").value; 
var pass = document.getElementById("password").value; 

var request = new XMLHttpRequest(); 

//peticion al BD//

request.open("POST", "../../code/login.php",true); 


request.send("username="+usuario); 

request.onreadystatechange = function(){ 
	if(request.readyState == 4 && request.status == 200){ 
		if (request.responseText != "") {
			var data = JSON.parse(request.responseText);
			for(var usuario in data){
				if(pass==data[usuario].password){
					window.location.href="index.html";
				}else{
					alert("Usuario o contraseña incorrecto");
				}
			}
		}else{
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

function registro(){ 

var usuario = document.getElementById("username").value; 
var nom = document.getElementById("name").value;
var pass = document.getElementById("password").value; 
 

var request = new XMLHttpRequest(); 

//peticion al BD//

request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
request.open("POST","../../code/login.php",true); 


request.send("username="+usuario+"&usuario="+pass+"&name="+nom+"&password="+contrasena); 

request.onreadystatechange = function(){ 
	if(request.readyState == 4 && request.status == 200){ 
		alert(request.responseText);
		if (request.responseText != "") {
				window.location.href="login.html";
			}else{
				alert("No Registrado");
			}
		}else{
		}
	}
}




