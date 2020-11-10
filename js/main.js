let logo_face = document.getElementById( 'logo_face' );
let logo_github = document.getElementById( 'logo_github' );
let logo_linkedin = document.getElementById( 'logo_linkedin' );
let logo_whats = document.getElementById('logo_whats');

//funcion para cambiar el src de la imagen del logo
function cambiarImagen(id, img){
  document.getElementById(id).src=img;
}

logo_face.onmouseover = function(){
  cambiarImagen(logo_face.id, './img/facebook_azul.png');
}  

logo_face.onmouseleave = function(){
  cambiarImagen(logo_face.id, './img/facebook_negro.png');
}  

logo_github.onmouseover = function(){
  cambiarImagen(logo_github.id, './img/github_azul.png');
}  

logo_github.onmouseleave = function(){
  cambiarImagen(logo_github.id, './img/github_negro.png');
}   

logo_linkedin.onmouseover = function(){
  cambiarImagen(logo_linkedin.id, './img/linkedin_azul.png');
}  

logo_linkedin.onmouseleave = function(){
  cambiarImagen(logo_linkedin.id, './img/linkedin_negro.png');
}   

logo_whats.onmouseover = function(){
  cambiarImagen(logo_whats.id, './img/whatsapp_verde.png');
}  

logo_whats.onmouseleave = function(){
  cambiarImagen(logo_whats.id, './img/whatsapp_negro.png');
}   

//valition form
var namePattern = "^[a-z A-Z]{4,30}$";
var emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";

function checkInput(idInput, pattern) {
	return $(idInput).val().match(pattern) ? true : false;
}

function checkTextarea(idText) {
	return $(idText).val().length > 12 ? true : false;	
}

function enableSubmit (idForm) {
	$(idForm + " button.submit").removeAttr("disabled");
}

function disableSubmit (idForm) {
	$(idForm + " button.submit").attr("disabled", "disabled");
}

function checkForm (idForm) {
	$(idForm + " *").on("change keydown", function() {
    if (checkInput("#nombre", namePattern) 
    //&&  
    //  checkInput("#email", emailPattern) &&
    //  checkTextarea("#mensaje")
    )
		{
      enableSubmit(idForm);
      console.log("boton habilitado");
		} else {
      disableSubmit(idForm);
      console.log("boton deshabilitado");
		}
	});
}

$(function() {
	checkForm("#contacto");
});
