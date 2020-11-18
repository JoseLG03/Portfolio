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


$(function() {
  $("form[name='contacto']").validate({

    rules: {

      nombre: "required",

      mensaje: "required",

      email: {
        required: true,
        email: true
      }
    },

    messages: {

      nombre: "Please, enter your name.",

      email: "Please, enter your e-mail",

      mensaje: "Please, enter your message"    

    },

    submitHandler: function(form) {

      form.submit();

    }

  });

});

//Limpiar formulario
function limpiarFormulario(){
  setTimeout('document.getElementById("contacto").reset()',1000);
  return false;
}

//Ocultar informacion
$(document).ready(function(){
  $("#lang").hide();
  $("#idioma").show();
  $(".esp").hide();
  $("#nombreForm").hide();
  $("#mensajeForm").hide();



  $("#idioma").click(function(){
    $("#idioma").hide();
    $("#lang").show();

    $(".esp").show();
    $("#nombreForm").show();
    $("#mensajeForm").show();
    
    $(".eng").hide();
    $("#nameForm").hide();
    $("#messageForm").hide();
  });

  $("#lang").click(function(){
    $("#lang").hide();
    $("#idioma").show();

    $(".eng").show();
    $("#nameForm").show();
    $("#messageForm").show();

    $(".esp").hide();
    $("#nombreForm").hide();
    $("#mensajeForm").hide();
  });
});