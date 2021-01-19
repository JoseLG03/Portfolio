<?php

$email_to = "antares069@gmail.com";

$email_subject = "Detalles del formulario de contacto:\n\n";
$name = "Nombre: " . $_POST['nombre'] . "\n";
$email = "E-mail: " . $_POST['email'] . "\n";
$message = "Mensaje: " . $_POST['mensaje'] . "\n";
$contenido = $name.$email.$message;

mail($email_to, $email_subject, $contenido);
header("location:https://codingwithpepe.com/");

?>