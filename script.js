let darkModeToggle = document.getElementById('darkModeToggle');
let body = document.body;

// Check if dark mode is enabled from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
} else {
    body.classList.remove('dark-mode');
    darkModeToggle.checked = false;
}

darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); // Save the preference
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled'); // Save the preference
}

