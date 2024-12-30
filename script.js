// Registro
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && email && password) {
        alert(`Registro completado para ${username}. ¡Correo de verificación enviado a ${email}!`);
        console.log("Registro:", { username, email, password });
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Inicio de Sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
        alert(`Inicio de sesión exitoso para el correo: ${email}`);
        console.log("Inicio de sesión:", { email, password });
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
