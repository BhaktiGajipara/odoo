document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const searchButton = document.getElementById('search-button');

    
     });

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("login-button").addEventListener("click", function() {
            window.location.href = "../login-signup/login.html";
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("signup-button").addEventListener("click", function() {
            window.location.href = "../login-signup/signup.html";
        });
    });

    signupButton.addEventListener('click', () => {
        alert('Signup button clicked');
        // Implement signup functionality here
    });

    searchButton.addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        alert(`Search for: ${query}`);
        // Implement search functionality here
    });
