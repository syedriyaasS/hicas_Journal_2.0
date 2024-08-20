document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('hicas-footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});