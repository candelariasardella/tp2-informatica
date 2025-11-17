document.addEventListener('DOMContentLoaded', function () {

  const formulario = document.getElementById('form-contacto');

  formulario.addEventListener('submit', async function (e) {

    // evito envío 
    e.preventDefault();

    // valores
    const nombre = document.getElementById("nombre").value.trim(); //saca espacio vacío
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^[0-9]{7,15}$/;

    // validaciones
    if (nombre === "") {
      Swal.fire("Nombre incompleto", "Por favor ingresá tu nombre.", "warning");
      return;
    }

    if (!emailRegex.test(email)) {
      Swal.fire("Email inválido", "Ingresá un correo válido.", "warning");
      return;
    }

    if (!telRegex.test(telefono)) {
      Swal.fire(
        "Teléfono incorrecto",
        "Debe contener entre 7 y 15 números.",
        "warning"
      );
      return;
    }

    if (mensaje.length < 10) {
      Swal.fire(
        "Mensaje muy corto",
        "Tu mensaje debe tener al menos 10 caracteres.",
        "warning"
      );
      return;
    }

    // sweet alert
    await Swal.fire({
      title: "¡Mensaje enviado!",
      text: "Gracias por contactarte. Te responderemos pronto.",
      icon: "success",
      confirmButtonText: "Aceptar"
    });

  
    formulario.submit();
  });

});
