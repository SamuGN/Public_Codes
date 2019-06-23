<!DOCTYPE html>
<html lang="en" class="no-js" >
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta name="description" content="" />
<meta name="author" content="" />
<!--[if IE]>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<![endif]-->
<title>Grupo heridas Axarquia</title>
<!-- BOOTSTRAP CORE CSS -->
<link href="assets/css/bootstrap.css" rel="stylesheet" />
<!-- ION ICONS STYLES -->
<link href="assets/css/ionicons.css" rel="stylesheet" />
<!-- FONT AWESOME ICONS STYLES -->
<link href="assets/css/font-awesome.css" rel="stylesheet" />
<!-- FANCYBOX POPUP STYLES -->
<link href="assets/js/source/jquery.fancybox.css" rel="stylesheet" />
<!-- STYLES FOR VIEWPORT ANIMATION -->
<link href="assets/css/animations.min.css" rel="stylesheet" />
<!-- CUSTOM CSS -->
<link href="assets/css/style-red.css" rel="stylesheet" />

<script type="text/javascript" src="assets/js/js.js"></script>
<!-- HTML5 Shiv and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->



</head>
<body data-spy="scroll" data-target="#menu-section" style="background-image:img/2.jpg">
<!--MENU SECTION START-->
<div class="navbar navbar-inverse navbar-fixed-top scroll-me" id="menu-section" >
<div class="container">
<div class="navbar-header">
<img src="assets/img/logo.png">

<a class="navbar-brand" href="index.html">



</a>

</div>
<?php
$id=$_POST["nompaciente"];

$link = mysqli_connect("localhost", "root","","heridas_axarquia");



$query = "SELECT nombre FROM pacientes where id=".$id;     // Esta linea hace la consulta
    $result = mysqli_query($link,$query);
	$registro = mysqli_fetch_array($result);
	

	//Liberas el resultado
mysqli_free_result($result);


//Cerras coneccion
mysqli_close($link); 

?>



<center>
<label id="paciente">
<?php
echo "Paciente: ". $registro[0]."</br>";
$fecha_actual=date("d/m/Y");
echo $fecha_actual;
?>
</label>
</center>
</div>

</div>
<!--MENU SECTION END-->
<!--HOME SECTION START-->

<!--SERVICE SECTION START-->
<section id="services" >
<div class="container">
<div class="row text-center header">
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></br>
<h3>ESCALA EMINA</h3>
<hr />
</div>
</div>


<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">


<div class="services-wrapper">




<center>


<div class="book-form agileits-login">
							<form action="guardaremi.php" method="post" name="miform" id="miform">
								
								
								
								
									<div class="span1_of_1">
										<!-- start_section_room -->
										<label id="titulo">ESTADO MENTAL: </label>
										<div class="section_room">
											
											<select id="estmental"  class="frm-field required">
												<option value="null"></option>
												<option value="0">Orientado</option>
												<option value="1">Desorientado, apático, o pasivo</option>
												<option value="2">Letárgico / Hipercinético</option>         
												<option value="3">Comatoso</option>
											</select>
										</div>	
									</div>
									<div class="clear"></div></br>
									<div class="span1_of_1">
										<label id="titulo">MOVILIDAD: </label>
										<!-- start_section_room -->
										<div class="section_room">
											
											<select id="mov" onchange="change_country(this.value)" class="frm-field required sect">
												<option value="null"></option>
												<option value="0">Completa</option>
												<option value="1">Ligeramente limitada</option>
												<option value="2">Limitación importante</option>         
												<option value="3">Inmóvil</option>
												
											</select>
										</div>	
									</div> 
									<div class="clear"></div></br>
									<div class="span1_of_1">
										<label id="titulo">INCONTINENCIA: </label>
										<!-- start_section_room -->
										<div class="section_room">
											
											<select id="inc" onchange="change_country(this.value)" class="frm-field required sect">
												<option value="null"></option>
												<option value="0">No</option>
												<option value="1">Urinaria o fecal limitada</option>
												<option value="2">Urinaria o fecal habitual</option>         
												<option value="3">Urinaria y fecal</option>
												
											</select>
										</div>	
									</div> 
									<div class="clear"></div></br>
									<div class="span1_of_1">
										<label id="titulo">NUTRICION: </label>
										<!-- start_section_room -->
										<div class="section_room">
											
											<select id="nut" onchange="change_country(this.value)" class="frm-field required sect">
												<option value="null"></option>
												<option value="0">Correcta</option>
												<option value="1">Ocasionalmente incompleta</option>
												<option value="2">Incompleta</option>         
												<option value="3">No ingesta</option>
												
											</select>
										</div>	
									</div> 
									
									<div class="clear"></div></br>
									<div class="span1_of_1">
										<label id="titulo">ACTIVIDAD: </label>
										<!-- start_section_room -->
										<div class="section_room">
											
											<select id="act" onchange="change_country(this.value)" class="frm-field required sect">
												<option value="null"></option>
												<option value="0">Deambula</option>
												<option value="1">Deambula con ayuda</option>
												<option value="2">Siempre con ayuda</option>         
												<option value="3">No deambula</option>
												
											</select>
										</div>	
									</div> 
								</div> 
												<br/>
												<label id="resultado" style="display:none;"></label>
								<input type="button" class="boton" value="Calcular" onclick="emina()" id="btnemina">
								<input type="submit" class="boton" value=Guardar id="btneminasave" style="display:none;">
							</form>
							
						</div>

<!--<input type="button" class="boton" value="Calcular" onclick="sumar()"/>-->
</center>

</div>
</div>


<div class="container">
<div class="row text-center header">
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
<h3>ESCALA BRADEN</h3>
<hr />
</div>
</div>


<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">


<div class="services-wrapper">




<center>


<div class="book-form agileits-login">
							<form action="#" method="post" name="miform" id="miform">
								
								
								
								
									<div class="span1_of_1">
										<!-- start_section_room -->
										<label id="titulo">PERCEPCION SENSORIAL: </label>
										<div class="section_room">
											
											<select id="perc" onchange="change_country(this.value)" class="frm-field required">
												<option value="null"></option>
												<option value="1">Completamente limitada</option>
												<option value="2">Muy limitada</option>
												<option value="3">Ligeramente limitada</option>         
												<option value="4">Sin limitaciones</option>
											</select>
										</div>	
									</div>
									<div class="clear"></div></br>
									<div class="span1_of_1">
										<label id="titulo">EXPOSICION A LA HUMEDAD: </label>
										<!-- start_section_room -->
										<div class="section_room">
											
											<select id="humedad" onchange="change_country(this.value)" class="frm-field required sect">
												<option value="null"></option>
												<option value="1">Constantemente</option>
												<option value="2">A menudo</option>
												<option value="3">Ocasionalmente</option>         
												<option value="4">Raramente</option>
												
											</select>
										</div>	
									</div> 
									<div class="clear"></div></br>
									<div class="span1_of_1">
										<label id="titulo">ACTIVIDAD: </label>
										<!-- start_section_room -->
										<div class="section_room">
											
											<select id="act2" onchange="change_country(this.value)" class="frm-field required sect">
												<option value="null"></option>
												<option value="1">Encamado</option>
												<option value="2">En silla</option>
												<option value="3">Deambula en ocasiones</option>         
												<option value="4">Deambula con frecuencia</option>
												
											</select>
										</div>	
									</div> 
									<div class="clear"></div></br>
									<div class="span1_of_1">
										<label id="titulo">MOVILIDAD: </label>
										<!-- start_section_room -->
										<div class="section_room">
											
											<select id="movilidad" onchange="change_country(this.value)" class="frm-field required sect">
												<option value="null"></option>
												<option value="1">Inmóvil</option>
												<option value="2">Muy limitada</option>
												<option value="3">Ligeramente limitada</option>         
												<option value="4">Sin limitaciones</option>
												
											</select>
										</div>	
									</div> 
									
									<div class="clear"></div></br>
									<div class="span1_of_1">
										<label id="titulo">NUTRICION: </label>
										<!-- start_section_room -->
										<div class="section_room">
											
											<select id="nut2" onchange="change_country(this.value)" class="frm-field required sect">
												<option value="null"></option>
												<option value="1">Muy pobre</option>
												<option value="2">Inadecuada</option>
												<option value="3">Adecuada</option>         
												<option value="4">Excelente</option>
												
											</select>
										</div>	
									</div> 
									<div class="clear"></div></br>
<div class="span1_of_1">
										<label id="titulo">ROCE Y PELIGRO DE LESIONES: </label>
										<!-- start_section_room -->
										<div class="section_room">
											
											<select id="pro" onchange="change_country(this.value)" class="frm-field required sect">
												<option value="null"></option>
												<option value="1">Problema</option>
												<option value="2">Problema potencial</option>
												<option value="3">Sin problema aparente</option>         

												
											</select>
										</div>	
									</div> 
								</div> 
												<br/>
								<input type="button" class="boton" value="Calcular" onclick="braden()" id="btnbraden">
								<input type="submit" class="boton" value=Guardar id="btnbradensave" style="display:none;">
							</form>
						</div>


</center>

</div>
</div>

</section>
<!--SERVICE SECTION END-->
<!--PRICING SECTION START-->



<!--PRIICING SECTION END-->
<!--WORK SECTION START-->

<!--WORK SECTION END-->
<!--TEAM SECTION START-->

<!--TEAM SECTION END-->
<!--GRID SECTION START-->

<!--GRID SECTION END-->
<!--CONTACT SECTION START-->
<section id="contact" >
<div class="container">
<div class="row text-center header animate-in" data-anim-type="fade-in-up">
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

<h3>Contacto</h3>
<hr />

</div>
</div>

<div class="row animate-in" data-anim-type="fade-in-up">

<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
<div class="contact-wrapper">
<h3>Redes sociales</h3>
<p>
También puedes contactar con nosotros en:
</p>
<div class="social-below">
<a href="#" class="btn button-custom btn-custom-two" > Facebook</a>
<a href="#" class="btn button-custom btn-custom-two" > Twitter</a>
<a href="#" class="btn button-custom btn-custom-two" > Google +</a>
</div>
</div>

</div>
<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
<div class="contact-wrapper">
<h3>Contacto</h3>
<h4><strong>Email : </strong> grupoheridasaxarquia@gmail.com </h4>
<h4><strong>Tlf : </strong> 619 486 474 </h4>

</div>

</div>
<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
<div class="contact-wrapper">
<h3>Direccion : </h3>
<h4>Torre del mar </h4>
<h4>Axarquia / Málaga</h4>
<div class="footer-div" >
&copy; 2017 GHA.es | <a href="http://www.designbootstrap.com/" target="_blank" >por Samuel Garcia</a>
</div>
</div>

</div>

</div>


</div>
</section>
<!--CONTACT SECTION END-->

<!-- JAVASCRIPT FILES PLACED AT THE BOTTOM TO REDUCE THE LOADING TIME -->
<!-- CORE JQUERY -->
<script src="assets/js/jquery-1.11.1.js"></script>
<!-- BOOTSTRAP SCRIPTS -->
<script src="assets/js/bootstrap.js"></script>
<!-- EASING SCROLL SCRIPTS PLUGIN -->
<script src="assets/js/vegas/jquery.vegas.min.js"></script>
<!-- VEGAS SLIDESHOW SCRIPTS -->
<script src="assets/js/jquery.easing.min.js"></script>
<!-- FANCYBOX PLUGIN -->
<script src="assets/js/source/jquery.fancybox.js"></script>
<!-- ISOTOPE SCRIPTS -->
<script src="assets/js/jquery.isotope.js"></script>
<!-- VIEWPORT ANIMATION SCRIPTS   -->
<script src="assets/js/appear.min.js"></script>
<script src="assets/js/animations.min.js"></script>
<!-- CUSTOM SCRIPTS -->
<script src="assets/js/custom.js"></script>
</body>

</html>
