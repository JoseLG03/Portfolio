let logo_face = document.getElementById( 'logo_face' );
let logo_github = document.getElementById( 'logo_github' );
let logo_linkedin = document.getElementById( 'logo_linkedin' );
let logo_whats = document.getElementById('logo_whats');

//funcion para cambiar el src de la imagen del logo
function cambiarImagen(id, img){
  document.getElementById(id).src=img;
}

logo_face.onmouseover = function(){
  cambiarImagen('logo_face', './img/facebook_azul.png');
}  

logo_face.onmouseleave = function(){
  cambiarImagen('logo_face', './img/facebook_negro.png');
}  

logo_github.onmouseover = function(){
  cambiarImagen('logo_github', './img/github_azul.png');
}  

logo_github.onmouseleave = function(){
  cambiarImagen('logo_github', './img/github_negro.png');
}   

logo_linkedin.onmouseover = function(){
  cambiarImagen('logo_linkedin', './img/linkedin_azul.png');
}  

logo_linkedin.onmouseleave = function(){
  cambiarImagen('logo_linkedin', './img/linkedin_negro.png');
}   

logo_whats.onmouseover = function(){
  cambiarImagen('logo_whats', './img/whatsapp_verde.png');
}  

logo_whats.onmouseleave = function(){
  cambiarImagen('logo_whats', './img/whatsapp_negro.png');
}   

  
