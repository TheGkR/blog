var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var firstPart = document.querySelector('.first-part');
    var secondPart = document.querySelector('.second-part');
    var button = document.querySelector('.scroll-button');

    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Scrolling downwards
        if (!secondPart.classList.contains('active')) {
            firstPart.classList.add('hide-contents');
        }
    } else {
        // Scrolling upwards
        if (!secondPart.classList.contains('active')) {
            firstPart.classList.remove('hide-contents');
        }
    }

    lastScrollTop = st <= 0 ? 0 : st;
});
