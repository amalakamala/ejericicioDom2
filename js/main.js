function cantidadMensajes() {
	var menS = document.getElementsByClassName("mensaje").length;

	var respuesta="";
	if(menS == 1){
		respuesta = "Es muy poco";
	}else if( 2 <= menS && menS < 4){
		respuesta = "No esta mal";
	}else if(menS >= 4){
		respuesta = "Son muchos!";
	}
	document.getElementById("num_mensajes").innerHTML = "Los elementos con la clase mensaje : " + respuesta;
}

cantidadMensajes();