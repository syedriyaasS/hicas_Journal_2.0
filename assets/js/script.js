// sticky-navbar
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var descSection = document.querySelector('.banner-btns');

    window.addEventListener('scroll', function() {
        var rect = descSection.getBoundingClientRect();
        if (rect.top <= 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});