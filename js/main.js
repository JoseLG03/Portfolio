let logo_face = document.getElementById( 'logo_face' );

logo_face.onmouseover = function() { 
  this.style.backgroundColor = '#607D8B';
}

logo_face.onmouseleave= function() { 
    this.style.backgroundColor = '#cfd8dc';
}

function cambiarImagen(id, img){
    document.getElementById(id).src=img;
  }