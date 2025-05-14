document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    // Simulação de usuário válido
    const validEmail = "rafa.stamm470@gmail.com";
    const validPassword = "juliags1";

    if (email === validEmail && password === validPassword) {
        localStorage.setItem('auth', 'true'); // Salva autenticação
        window.location.href = "dashboard.html"; // Redireciona
    } else {
        errorElement.textContent = "E-mail ou senha incorretos!";
    }
});
