//your JS code here. If required.
 document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const checkbox = document.getElementById('checkbox');

            // Check if checkbox is checked
            if (checkbox.checked) {
                // Save details to local storage
                localStorage.setItem('username', usernameInput.value);
                localStorage.setItem('password', passwordInput.value);
            } else {
                // Remove details from local storage
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            // Show alert with the logged-in username
            alert('Logged in as ' + usernameInput.value);



nst savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');
        const existingButton = document.getElementById('existing');

        if (savedUsername && savedPassword) {
            // Show existing user button
            existingButton.style.display = 'block';
        }

  existingButton.addEventListener('click', function () {
            // Show alert with the saved username
            alert('Logged in as ' + savedUsername);
        });
	 
        });