var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var firstPart = document.querySelector('.first-part');
    var secondPart = document.querySelector('.second-part');

    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Scrolling downwards, hide contents
        firstPart.classList.add('hide-contents');
    } else {
        // Scrolling upwards, show contents
        firstPart.classList.remove('hide-contents');
    }

    lastScrollTop = st <= 0 ? 0 : st;
});
