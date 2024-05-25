


// Obtenengo el formulario
const form = document.getElementById('formRegister');

// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtengo los campos del formulario
    const nombre = document.getElementById('firstname').value;
    const apellido = document.getElementById('lastname').value;
    const correo = document.getElementById('email').value;
    const contraseña = document.getElementById('password').value;
    const fechaNacimiento = document.getElementById('birthday').value;
    const país = document.getElementById('country').value;
    const términos = document.getElementById('terms').checked;

    // Verificar que todos los campos estén completos
    if (nombre === '' || apellido === '' || correo === '' || contraseña === '' || fechaNacimiento === '' || país === '' || !términos) {
        alert('Por favor, complete todos los campos y acepte los términos y condiciones.');
        return false;
    }

    // Si todos los campos están completos, manda cartel de exito y vuelve a index
    alert(nombre + ", te has registrado satisfactoriamente.");
    window.location.href = 'index.html';
}

// queda escuchando...
form.addEventListener('submit', validarFormulario);
