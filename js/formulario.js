document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('form-contacto');

  formulario.addEventListener('submit', function(e) {
    e.preventDefault(); //evita envío real y recarga

    Swal.fire({
      title: '¡Mensaje enviado!',
      text: 'Gracias por contactarte. Te responderemos pronto.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then(function() {
      formulario.reset();
    });

  });
});
