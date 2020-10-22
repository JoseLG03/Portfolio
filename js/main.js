let logo_face = document.getElementById( 'logo_face' );
let logo_github = document.getElementById( 'logo_github' );

//funcion para cambiar el src de la imagen del logo
function cambiarImagen(id, img){
  document.getElementById(id).src=img;
}

logo_face.onmouseover = function(){
  cambiarImagen('logo_face', "./img/facebook_azul.png");
}  

logo_face.onmouseover = function(){
  cambiarImagen('logo_face', "./img/facebook_negro.png");
}  


logo_github.onmouseover = function(){
  cambiarImagen('logo_github', './img/github_azul.png');
}  

logo_github.onmouseleave = function(){
  cambiarImagen('logo_github', './img/github_negro.png');
}   

  
