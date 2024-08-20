window.addEventListener('load', function() {
    document.getElementById('hicas-header').style.opacity = '1';
});
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('hicas-header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});