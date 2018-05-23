function nameUser(){
	var user = document.getElementById("name").value;
	user = document.getElementById("hi").innerHTML = "Hola " + user;
}

function ysblf(){
	document.getElementById("infoBetty").style.display = "block";
}

function cierra(){
	document.getElementById("infoBetty").style.display = "none";
}
// segunda parte Paulina huañaco
//pedir correo e imprimirlo
function mailUser(){
	var email = document.getElementById("mail").value;
	email = document.getElementById("print").innerHTML = "Tu correo es :  " + email;
}