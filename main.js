let users = [
    { username: 'Abraham', password: '1234', saldo: 200 },
    { username: 'Stiven', password: '5678', saldo: 240 },
    { username: 'Hiromi', password: '4321', saldo: 500 },
];

function validateCredentials() {
    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Buscar el usuario en la lista
    const user = users.find(function(u) {
        return u.username === username && u.password === password;
    });

    // Validar el usuario
    if (user) {
        // Almacenar la información del usuario en sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify(user));

        // Redirigir a la página del menú
        return window.location.href = 'menu.html';
    } else {
        alert('Acceso denegado. Por favor verifique sus credenciales');
    }
}