// Evento para el formulario de registro
document.querySelector('#registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Cuenta creada con éxito.');
});

// Evento para el formulario de inicio de sesión
document.querySelector('#loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Inicio de sesión exitoso.');
});
