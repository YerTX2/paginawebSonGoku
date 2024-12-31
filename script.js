// Evento para cambiar de pestaña
document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetTab = document.getElementById(this.getAttribute('data-tab'));

    // Desactivar todas las pestañas
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });

    // Activar la pestaña seleccionada
    targetTab.classList.add('active');
  });
});

// Mostrar la primera pestaña por defecto
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tab-link').click();
});
