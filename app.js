document.addEventListener('DOMContentLoaded', function() {
    // Obtener la información del usuario almacenada en sessionStorage
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    // Verificar si hay información del usuario
    if (currentUser) {
        // Mostrar el saldo en algún lugar de tu HTML (por ejemplo, un div con el id 'saldo')
        document.getElementById('banking').textContent = 'Saldo Actual: $' + currentUser.saldo;
    } else {
        // Manejar el caso en que no hay información del usuario
        alert('Acceso no autorizado. Por favor inicie sesión.');
        // Redirigir a la página de inicio de sesión
        window.location.href = 'index.html';
    }
});
