function seleccionar_todo(){
	
   for (i=0;i<document.f1.elements.length;i++)
      if(document.f1.elements[i].type == "checkbox")
         document.f1.elements[i].checked=1
} 
function deseleccionar_todo(){
   for (i=0;i<document.f1.elements.length;i++)
      if(document.f1.elements[i].type == "checkbox")
         document.f1.elements[i].checked=0
} 

 
/*var uno="Hola texto de ejemplo...";*/
 
/* definimos una variable llamada uno que contendra el texto que escribiremos con el efecto
maquina de escribir*/
 var uno="Signo de la creatividad, independencia, originalidad, sentido del yo y autosuficiencia. Naturaleza individualista y agresiva. Iniciadores de acciones, espíritu pionero, coraje, extraordinaria voluntad y determinación.</br></br> Es símbolo del liderazgo, aquellos con capacidades y habilidades para el mando. Ambiciosos y dispuestos a asumir riesgos para llegar a la cima. Llamados a destacar en el trabajo y los negocios.</br></br>A veces son excesivamente firmes o agresivos, dominadores, impulsivos, egocéntricos, presuntuosos y obstinados.</br></br>Aunque de naturaleza son afectuosos y amables, les cuesta mostrar sus sentimientos, siendo en este punto introvertidos y bastante reservados.";
var a=0;
var tres="";
 
/* creamos un string vacio*/
 
 
 
 
 
 
 
 
function escribir (){
var dos=uno.charAt(a)
 
/* aqui definimos una variable dos que contendra el carater de lugar a (a es un numero y representa el orden de los carateres en el texto en este caso vale 0)*/
 
a=a+1
 
/* aqui le aumentamos en 1 el valor a la variable a para que cuando llamemos de nuevo a la funcion escribir tendra el valor sumado en uno*/
 
tres=tres+dos
 
/* al string vacio tres lo concatenamos con el caracter de lugar a extraido del texto y lo guardamos en tres nuevamente */
 
document.getElementById("texto").innerHTML=tres
 
/*con esto insertamos en el div con id=texto el texto en la variable 3*/
 if (tres.length == uno.length) clearInterval(interval);
}

 
/*usamos la funcion llamada setInterval, esta llama a la funcion escribir() cada 0,100 segundos*/
 






function valida(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
        
    // Patron de entrada, en este caso solo acepta letras
    patron =/[A-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}



function resuma(valor){
var resultado =0;
while (valor > 10)
			{
				
				/*document.getElementById("demo").innerHTML += "es mas de 10 </br>" + suma + "</br>";*/
			
			
			var sumalen= valor.toString().length;
			/*document.getElementById("demo").innerHTML += "longitud:" + sumalen;*/
			
			for (var i = sumalen-1; i > -1; i--) {
				var digi = valor.toString().substr(i,1);
			/*	document.getElementById("demo").innerHTML += "</br>" + i + " " + digi;*/
				resultado+= parseInt(digi);
											}
			
			
				valor = resultado;
				resultado = resultado.toString();
					
					/*document.getElementById("demo").innerHTML +="El resultado de su <b>nombre</b> es mal: <b>" + sumanew + "</b></br>";*/
			}
return resultado;
}



function myFunction() {
	document.getElementById("demo").innerHTML = "";
	
	var valor = document.getElementById("name").value;
	valor = valor.toLowerCase();
	var valor2 = document.getElementById("apel").value;
	valor2 = valor2.toLowerCase();
	var valor3 = document.getElementById("fecha").value;
	
	var len = valor.length-1;
	var len2 = valor2.length-1;
	var len3 = valor3.length-1;
    /*var res = valor.split("");*/
	
	
	
	var sumanew3 =0;
    var suma = 0;
	var suma2 = 0;
	var suma3 = 0;
	
	var interno =0;
	var externo =0;
	var mision=0;
	var num = 0;
	
	
	
	
	
	while(len>=0){
			var letra = valor.substr(len,1)
			if (letra == "a" |  letra == "j" | letra == "s")
			{
			suma += 1;
			if (letra=="a"){
				interno += 1;
			}
			else{
				externo += 1;
			}
				
			}
			if (letra == "b" |  letra == "k" | letra == "t")
			{
			suma += 2;
			externo += 2;
				
			}
			if (letra == "c" |  letra == "l" | letra == "u")
			{
			suma += 3;
			if (letra=="u"){
				interno += 3;
			}
			else{
				externo += 3;
			}
				
			}
			
			if (letra == "d" |  letra == "m" | letra == "v")
			{
			suma += 4;
			externo += 4;
				
			}
			if (letra == "e" |  letra == "n" | letra == "w" | letra == "ñ")
			{
			suma += 5;
			if (letra=="e"){
				interno += 5;
			}
			else{
				externo += 5;
			}
				
			}
			
			if (letra == "f" |  letra == "o" | letra == "x")
			{
			suma += 6;
			if (letra=="o"){
				interno += 6;
			}
				externo += 6;
			}
			
			if (letra == "g" |  letra == "p" | letra == "y")
			{
			suma += 7;
			externo += 7;
				
			}
			if (letra == "h" |  letra == "q" | letra == "z")
			{
			suma += 8;
			externo += 8;
			}
			if (letra == "i" |  letra == "r")
			{
			suma += 9;
			if (letra=="i"){
				interno += 9;
			}
			else{
				externo += 9;
			}
				
			}
			
			
		/*document.getElementById("demo").innerHTML += externo;
		document.getElementById("demo").innerHTML += "</br>";*/
			
			len--;
		}
		
		while (suma > 10)
			{
				
				/*document.getElementById("demo").innerHTML += "es mas de 10 </br>" + suma + "</br>";*/
			
			var sumanew =0;
			var sumalen= suma.toString().length;
			/*document.getElementById("demo").innerHTML += "longitud:" + sumalen;*/
			
			for (var i = sumalen-1; i > -1; i--) {
				var digi = suma.toString().substr(i,1);
			/*	document.getElementById("demo").innerHTML += "</br>" + i + " " + digi;*/
				sumanew+= parseInt(digi);
											}
			
			
				suma = sumanew;
				sumanew = sumanew.toString();
					
					/*document.getElementById("demo").innerHTML +="El resultado de su <b>nombre</b> es mal: <b>" + sumanew + "</b></br>";*/
			}
		
		document.getElementById("demo").innerHTML +="El resultado de su <b>nombre</b> es: <b>" + suma + "</b></br>";
		




while(len2>=0){
			var letra2 = valor2.substr(len2,1)
			if (letra2 == "a" |  letra2 == "j" | letra2 == "s")
			{
			suma2 += 1;
			if (letra2=="a"){
				interno += 1;
			}
			else{
				externo += 1;
			}
				
			}
			if (letra2 == "b" |  letra2 == "k" | letra2 == "t")
			{
			suma2 += 2;
			externo += 2;
			}
			if (letra2 == "c" |  letra2 == "l" | letra2 == "u")
			{
			suma2 += 3;
			if (letra2=="u"){
				interno += 3;
			}
			else{
				externo += 3;
			}
			}
			
			if (letra2 == "d" |  letra2 == "m" | letra2 == "v")
			{
			suma2 += 4;
			externo += 4;
			}
			if (letra2 == "e" |  letra2 == "n" | letra2 == "w" | letra2 == "ñ")
			{
			suma2 += 5;
			if (letra2=="e"){
				interno += 5;
			}
			else{
				externo += 5;
			}
			}
			
			if (letra2 == "f" |  letra2 == "o" | letra2 == "x")
			{
			suma2 += 6;
			if (letra2=="o"){
				interno += 6;
			}
			else{
				externo += 6;
			}
			}
			
			if (letra2 == "g" |  letra2 == "p" | letra2 == "y")
			{
			suma2 += 7;
			externo += 7;	
			}
			if (letra2 == "h" |  letra2 == "q" | letra2 == "z")
			{
			suma2 += 8;
			externo += 8;	
			}
			if (letra2 == "i" |  letra2 == "r")
			{
			suma2 += 9;
			if (letra2=="i"){
				interno += 9;
			}
			else{
				externo += 9;
			}
			}
			
		/*document.getElementById("demo").innerHTML += externo + "</br>";*/
		
			
			len2--;
		}
		
		if (interno > 10)
		{
			var intlen= interno.toString().length;
			num = 0;
			for (var i = intlen-1; i > -1; i--) {
				var digi3 = interno.toString().substr(i,1);
			/*	document.getElementById("demo").innerHTML += "</br>" + i + "INTERNO: " + digi3;*/
				num += parseInt(digi3);
											}
				interno= parseInt(num);
		}
		
		if (externo > 10)
		{
			/*document.getElementById("demo").innerHTML += "</br>" + i + "EXTERNO: " + externo;*/
			var extlen= externo.toString().length;
			num = 0;
			for (var i = extlen-1; i > -1; i--) {
				var digi4 = externo.toString().substr(i,1);
			/*	document.getElementById("demo").innerHTML += "</br>" + i + "digito: " + digi4;*/
				num += parseInt(digi4);
											}
				externo= parseInt(num);
			
		}
		
		while(suma2 > 10)
			{
				
				/*document.getElementById("demo").innerHTML += "es mas de 10 </br>" + suma2 + "</br>";*/
			var sumanew2 =0;
			
			var sumalen2= suma2.toString().length;
			/*document.getElementById("demo").innerHTML += "longitud:" + sumalen;*/
			
			for (var i = sumalen2-1; i > -1; i--) {
				var digi2 = suma2.toString().substr(i,1);
				/*document.getElementById("demo").innerHTML += "</br>" + i + " " + digi;*/
				sumanew2+= parseInt(digi2);
											}
			
			
					suma2= sumanew2;
					sumanew2 = sumanew2.toString();
				
					
			}
		
			
			document.getElementById("demo").innerHTML +="El resultado de su <b>apellido</b> es: <b>" + suma2 + "</b></br><hr>";
			
		
			document.getElementById("demo").innerHTML +="</br>El resultado de su <b>numero interno</b> es: <b>" + interno + "</b></br>";
			document.getElementById("demo").innerHTML +="El resultado de su <b>numero externo</b> es: <b>" + externo + "</b></br><hr>";
			
		
		
		
while(len3>=0){
			var letra3 = valor3.substr(len3,1)
			if (letra3!="-"){
			var numero= parseInt(letra3);
			suma3 += numero;
			}
			/*document.getElementById("demo").innerHTML += suma3;
			document.getElementById("demo").innerHTML += "</br>";*/
			
			len3--;
		}
		
		if (suma3 > 10)
			{
				
				/*document.getElementById("demo").innerHTML += "es mas de 10 </br>" + suma + "</br>";*/
			
			
			var sumalen3= suma3.toString().length;
			/*document.getElementById("demo").innerHTML += "longitud:" + sumalen;*/
			
			for (var i = sumalen3-1; i > -1; i--) {
				var digi3 = suma3.toString().substr(i,1);
				/*document.getElementById("demo").innerHTML += "</br>" + i + " " + digi;*/
				sumanew3+= parseInt(digi3);
											}
			
			
					suma3= sumanew3;
					sumanew3 = sumanew3.toString();
					document.getElementById("demo").innerHTML +="<b>¿Quién eres?</b>: <b>" + suma3 + "</b></br>";
			}
		
			document.getElementById("demo").innerHTML +="<hr><b>Su número destino </b>es: <b>" + (suma3+mision) + "</b></br>";
			
			
		document.getElementById("demo").style.visibility= "visible";
		document.getElementById("explicacion").style.visibility= "visible";
		
		
		if (suma == 1)
		{
		
		document.getElementById("explicacion").innerHTML ="<button id='btnefec'>Número nombre</button><div id='texto'></div>";
		/*document.getElementById("explicacion").innerHTML +="Signo de la creatividad, independencia, originalidad, sentido del yo y autosuficiencia. Naturaleza individualista y agresiva. Iniciadores de acciones, espíritu pionero, coraje, extraordinaria voluntad y determinación.</br></br> Es símbolo del liderazgo, aquellos con capacidades y habilidades para el mando. Ambiciosos y dispuestos a asumir riesgos para llegar a la cima. Llamados a destacar en el trabajo y los negocios.</br></br>A veces son excesivamente firmes o agresivos, dominadores, impulsivos, egocéntricos, presuntuosos y obstinados.</br></br>Aunque de naturaleza son afectuosos y amables, les cuesta mostrar sus sentimientos, siendo en este punto introvertidos y bastante reservados.";*/
		setInterval("escribir()", 40);
		}
		if (suma == 2)
		{
		document.getElementById("explicacion").innerHTML +="<img src='2.gif' > Signo de la empatía, cooperación, adaptabilidad, consideración hacia los demás, supersensibilidad hacia las necesidades de los demás. Símbolo del equilibrio, la unión y la receptividad.</br></br>Es buen socio, compañero o pareja; también hace un magnífico papel como arbitro o mediador: Es modesto, sincero, influenciable espiritualmente y buen diplomático.</br></br> Es el número de los artistas y personas con sensibilidad y tendencias románticas.</br></br> En el trabajo son buenos compañeros y pacientes, tienen buenas ideas para trabajar en equipo y no son proclives a llevar ellos mismos la iniciativa o acaparar el protagonismo.</br></br> En el lado negativo son tímidos, pueden “ahogarse” en los detalles, generar algunos miedos y caer en depresión.</br></br>Si encuentran la pareja adecuada pueden vivir y hacer vivir una gran historia de amor romántico durante muchos años.";	
		}
		if (suma == 3)
		{
		document.getElementById("explicacion").innerHTML +="<img src='3.gif' > Auto-expresivo en muchas vertientes y con capacidad comunicativa; Es el signo de la expresión artística, sociabilidad, simpatía, superficialidad y espíritu derrochador. Símbolo de la comunicación, la interacción y la neutralidad. Incansable optimismo, felicidad y del disfrute de la vida. Pueden ser amantes divertidos.</br></br>A veces está asociado a la inspiración y a la inteligencia imaginativa con capacidades especiales. Son también personas con sentido del humor, y capaces de identificar y generar las ideas más importantes que pueden llegar a ser claves en las esferas del pensamiento, las instituciones o las empresas.</br></br>En el lado negativo son proclives a la dispersión de sus esfuerzos, la exageración, a los proyectos inacabados, a la falta de dirección...";	
		}
		if (suma== 4)
		{
		document.getElementById("explicacion").innerHTML +="<img src='4.gif' > Fuerte sentido del orden y los valores. Es el signo de lo práctico, la lealtad, la rigidez y la represión. También es símbolo de la creación, de la lucha contra los límites, de la mentalidad científica, la atención al detalle, capaz de alcanzar logros importantes y con ingenio para la organización. Finas habilidades administrativas.</br></br>Aquellos llamados a tener y dentro del respeto a la ley el orden y la justicia en general. Su actuación en la legalidad les proporciona autoridad personal, el cumplimiento de sus obligaciones y el logro de éxitos y puestos de responsabilidad en las más altas esferas de la sociedad.</br></br>En el lado negativo: falta de imaginación, atrapado por el detalle, testarudo y de opiniones fijas, discutidor, lento a la hora de actuar, demasiado serio y en ocasiones confuso.";	
		}
		
		if (suma== 5)
		{
		document.getElementById("explicacion").innerHTML +="<img src='5.gif' > Signo de la acción y la inquietud. Es el símbolo de la libertad, la adaptabilidad, el espíritu viajero y aventurero, pero también de la inconsistencia y del abuso de los sentidos. Expansivo y sociable, de nuevas y visionarias ideas; de pensamientos rápidos, polifacético, curioso y explorador; ingenioso a la hora de utilizar la libertad de forma constructiva.</br></br>También es el número de la fortuna, la magia y la aventura. Son personas que les atrae lo desconocido, lo extraño, lo misterioso.</br></br>En el lado negativo, demasiada inquietud, a veces descontento e insatisfecho, de temperamento tenso, suele tomar muchas decisiones precipitadas, impaciente, falto de aplicación a los temas.";	
		}
		
		document.getElementById("explicacion").innerHTML +="<hr>";
		
		if (suma2 == 1 && suma !=1)
		{
		
		document.getElementById("explicacion").innerHTML +="<img src='1.gif' > Signo de la creatividad, independencia, originalidad, sentido del yo y autosuficiencia. Naturaleza individualista y agresiva. Iniciadores de acciones, espíritu pionero, coraje, extraordinaria voluntad y determinación.</br></br> Es símbolo del liderazgo, aquellos con capacidades y habilidades para el mando. Ambiciosos y dispuestos a asumir riesgos para llegar a la cima. Llamados a destacar en el trabajo y los negocios.</br></br>A veces son excesivamente firmes o agresivos, dominadores, impulsivos, egocéntricos, presuntuosos y obstinados.</br></br>Aunque de naturaleza son afectuosos y amables, les cuesta mostrar sus sentimientos, siendo en este punto introvertidos y bastante reservados.";
		
		}
		if (suma2 == 2 && suma !=2)
		{
		document.getElementById("explicacion").innerHTML +="<img src='2.gif' > Signo de la empatía, cooperación, adaptabilidad, consideración hacia los demás, supersensibilidad hacia las necesidades de los demás. Símbolo del equilibrio, la unión y la receptividad.</br></br>Es buen socio, compañero o pareja; también hace un magnífico papel como arbitro o mediador: Es modesto, sincero, influenciable espiritualmente y buen diplomático.</br></br> Es el número de los artistas y personas con sensibilidad y tendencias románticas.</br></br> En el trabajo son buenos compañeros y pacientes, tienen buenas ideas para trabajar en equipo y no son proclives a llevar ellos mismos la iniciativa o acaparar el protagonismo.</br></br> En el lado negativo son tímidos, pueden “ahogarse” en los detalles, generar algunos miedos y caer en depresión.</br></br>Si encuentran la pareja adecuada pueden vivir y hacer vivir una gran historia de amor romántico durante muchos años.";	
		}
		if (suma2 == 3 && suma !=3)
		{
		document.getElementById("explicacion").innerHTML +="<img src='3.gif' > Auto-expresivo en muchas vertientes y con capacidad comunicativa; Es el signo de la expresión artística, sociabilidad, simpatía, superficialidad y espíritu derrochador. Símbolo de la comunicación, la interacción y la neutralidad. Incansable optimismo, felicidad y del disfrute de la vida. Pueden ser amantes divertidos.</br></br>A veces está asociado a la inspiración y a la inteligencia imaginativa con capacidades especiales. Son también personas con sentido del humor, y capaces de identificar y generar las ideas más importantes que pueden llegar a ser claves en las esferas del pensamiento, las instituciones o las empresas.</br></br>En el lado negativo son proclives a la dispersión de sus esfuerzos, la exageración, a los proyectos inacabados, a la falta de dirección...";	
		}
		if (suma2 == 4 && suma !=4)
		{
		document.getElementById("explicacion").innerHTML +="<img src='4.gif' > Fuerte sentido del orden y los valores. Es el signo de lo práctico, la lealtad, la rigidez y la represión. También es símbolo de la creación, de la lucha contra los límites, de la mentalidad científica, la atención al detalle, capaz de alcanzar logros importantes y con ingenio para la organización. Finas habilidades administrativas.</br></br>Aquellos llamados a tener y dentro del respeto a la ley el orden y la justicia en general. Su actuación en la legalidad les proporciona autoridad personal, el cumplimiento de sus obligaciones y el logro de éxitos y puestos de responsabilidad en las más altas esferas de la sociedad.</br></br>En el lado negativo: falta de imaginación, atrapado por el detalle, testarudo y de opiniones fijas, discutidor, lento a la hora de actuar, demasiado serio y en ocasiones confuso.";	
		}
		
		if (suma2 == 5 && suma !=5)
		{
		document.getElementById("explicacion").innerHTML +="<img src='5.gif' > Signo de la acción y la inquietud. Es el símbolo de la libertad, la adaptabilidad, el espíritu viajero y aventurero, pero también de la inconsistencia y del abuso de los sentidos. Expansivo y sociable, de nuevas y visionarias ideas; de pensamientos rápidos, polifacético, curioso y explorador; ingenioso a la hora de utilizar la libertad de forma constructiva.</br></br>También es el número de la fortuna, la magia y la aventura. Son personas que les atrae lo desconocido, lo extraño, lo misterioso.</br></br>En el lado negativo, demasiada inquietud, a veces descontento e insatisfecho, de temperamento tenso, suele tomar muchas decisiones precipitadas, impaciente, falto de aplicación a los temas.";	
		}
		
		
	if(document.getElementById("elegir1").checked==true){
		
		mision2();	
	}
	if(document.getElementById("elegir3").checked==true){
		ciclos();	
	}
	function mision2(){
		mision= suma + suma2;
		if (mision > 10)
		{
			/*document.getElementById("demo").innerHTML += "</br>" + i + "EXTERNO: " + externo;*/
			var extlen= mision.toString().length;
			num = 0;
			for (var i = extlen-1; i > -1; i--) {
				var digi4 = mision.toString().substr(i,1);
			/*	document.getElementById("demo").innerHTML += "</br>" + i + "digito: " + digi4;*/
				num += parseInt(digi4);
											}
				mision= parseInt(num);
			
		}	
			document.getElementById("explicacion").innerHTML +="<p id='tooltip1'><a href='#'><button id='btnefec'>Número mision</button><span>Número de la misión<br/>Número de la profesión<br/>Número del amor</span></a></p>";
			document.getElementById("explicacion").innerHTML +="El resultado de su <b>numero mision</b> es: <b>" + mision + "</b></br>";
			document.getElementById("demo").innerHTML +="</br>El resultado de su <b>numero mision</b> es: <b>" + mision + "</b></br>";
			
		
	}
	
	function ciclos(){
		
		var cprin = 0;
		var cbase = 0;
		var cfinal = 0;
		
		
		var m = valor3.toString().substr(5,1);
		cprin+= parseInt(m);
		m = valor3.toString().substr(6,1);
		cprin+= parseInt(m);
			
		var d = valor3.toString().substr(8,1);
		cbase+= parseInt(d);
		d = valor3.toString().substr(9,1);
		cbase+= parseInt(d);
		
		for (var i = 0; i < 4; i++) {
			var a = valor3.toString().substr(i,1);
			/*	document.getElementById("demo").innerHTML += "</br>" + i + "INTERNO: " + digi3;*/
			cfinal+= parseInt(a);
				}
			while(cfinal > 10)
			{
				
				/*document.getElementById("demo").innerHTML += "es mas de 10 </br>" + suma2 + "</br>";*/
			var cfinalnew =0;
			
			
			/*document.getElementById("demo").innerHTML += "longitud:" + sumalen;*/
			
			for (var i = 0; i < 2; i++) {
				var f = cfinal.toString().substr(i,1);
			
				/*document.getElementById("demo").innerHTML += "</br>" + i + " " + digi;*/
				cfinalnew+= parseInt(f);
											}
				cfinal= cfinalnew;
			}
			
		var ckarma = cprin + cbase + cfinal;	
	
		
		
			
		document.getElementById("demo").innerHTML +="</br>El resultado de su <b>numero ciclo principal o infancia</b> es: <b>" + cprin + "</b></br>";
		document.getElementById("demo").innerHTML +="</br>El resultado de su <b>numero ciclo base o madurez</b> es: <b>" + cbase + "</b></br>";
		document.getElementById("demo").innerHTML +="</br>El resultado de su <b>numero ciclo final</b> es: <b>" + cfinal + "</b></br>";
		document.getElementById("demo").innerHTML +="</br>El resultado de su <b>numero ciclo karmico</b> es: <b>" + ckarma + "</b></br>";
		
			document.getElementById("explicacion").innerHTML +="<p id='tooltip1'><a href='#'><button id='btn' >Números ciclos</button><span>Ciclo principal: " + cprin + "<br/>Ciclo base: " + cbase + "<br/>Ciclo final: " + cfinal + "<br/>Ciclo karmico: " + ckarma + "</span></a></p>";
			document.getElementById("explicacion").innerHTML +="El resultado de su <b>numero mision</b> es: <b>" + mision + "</b></br>";
			document.getElementById("demo").innerHTML +="</br>El resultado de su <b>numero mision</b> es: <b>" + mision + "</b></br>";
			
		
		
		
	}
	
	function mostrar(){
		
		
		
		document.getElementById("explicacion").innerHTML ="</br>El resultado de su <b>numero ciclo principal o infancia</b> es: <b>" + cprin + "</b></br>";
		document.getElementById("explicacion").innerHTML +="</br>El resultado de su <b>numero ciclo base o madurez</b> es: <b>" + cbase + "</b></br>";
		document.getElementById("explicacion").innerHTML +="</br>El resultado de su <b>numero ciclo final</b> es: <b>" + cfinal + "</b></br>";
		document.getElementById("explicacion").innerHTML +="</br>El resultado de su <b>numero ciclo karmico</b> es: <b>" + ckarma + "</b></br>";
		
		
	}	
		
}
