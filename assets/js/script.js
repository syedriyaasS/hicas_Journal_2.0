// sticky-navbar
// document.addEventListener('DOMContentLoaded', function() {
//     var navbar = document.querySelector('.navbar');
//     var descSection = document.querySelector('.banner-btns');

//     window.addEventListener('scroll', function() {
//         var rect = descSection.getBoundingClientRect();
//         if (rect.top <= 0) {
//             navbar.classList.add('sticky');
//         } else {
//             navbar.classList.remove('sticky');
//         }
//     });
// });




// document.addEventListener('DOMContentLoaded', function() {
    //     var navbar = document.querySelector('.navbar');
    //     var descSections = document.querySelectorAll('.banner-btns, .managing-committee-column');
    
    //     window.addEventListener('scroll', function() {
    //         descSections.forEach(function(section) {
    //             var rect = section.getBoundingClientRect();
    //             if (rect.top <= 0) {
    //                 navbar.classList.add('sticky');
    //             } else {
    //                 navbar.classList.remove('sticky');
    //             }
    //         });
    //     });
    // });
    
    // document.addEventListener('DOMContentLoaded', function() {
    //     var navbar = document.querySelector('.navbar');
    //     var descSections = document.querySelectorAll('.banner-btns, .managing-committee-section');
    
    //     // Function to check section positions
    //     function checkSections() {
    //         let stickyAdded = false;
    //         descSections.forEach(function(section) {
    //             var rect = section.getBoundingClientRect();
    //             if (rect.top <= 0 && !stickyAdded) {
    //                 navbar.classList.add('sticky');
    //                 stickyAdded = true;  // Only add sticky once
    //             } else if (rect.top > 0) {
    //                 navbar.classList.remove('sticky');
    //             }
    //         });
    //     }
    
        // Throttle function to limit how often scroll event is fired
    //     function throttle(func, limit) {
    //         let lastFunc;
    //         let lastRan;
    //         return function() {
    //             const context = this;
    //             const args = arguments;
    //             if (!lastRan) {
    //                 func.apply(context, args);
    //                 lastRan = Date.now();
    //             } else {
    //                 clearTimeout(lastFunc);
    //                 lastFunc = setTimeout(function() {
    //                     if (Date.now() - lastRan >= limit) {
    //                         func.apply(context, args);
    //                         lastRan = Date.now();
    //                     }
    //                 }, limit - (Date.now() - lastRan));
    //             }
    //         };
    //     }
    
    //     // Listen for scroll event with throttling
    //     window.addEventListener('scroll', throttle(checkSections, 100));
    // });