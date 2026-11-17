const validarFormulario = (nombre, email, mensaje) => {
  if (!nombre || !email || !mensaje) {
    return false;
  }

  const nombreEsValido = nombre.trim() !== "";
  const emailEsValido = email.trim() !== "";
  const mensajeEsValido = mensaje.trim() !== "";

  return nombreEsValido && emailEsValido && mensajeEsValido;
};

const enviarFormulario = (nombre, email, mensaje) => {
  const formularioEsValido = validarFormulario(nombre, email, mensaje);

  if (formularioEsValido) {
    console.log("¡Formulario enviado con éxito!");
  } else {
    console.log("Por favor completa todos los campos.");
  }
};

enviarFormulario("Ana", "ana@correo.com", "Hola, quiero más información.");