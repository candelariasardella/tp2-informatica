document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita recarga inmediata


    Swal.fire({
      title: '¡Mensaje enviado!',
      text: 'Gracias por contactarte. Te responderemos pronto.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      form.reset(); // limpia el formulario
    });
  });
});
