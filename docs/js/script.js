// Скол

var linkNav = document.querySelectorAll('[href^="#"]');
var V = 0.1;
for (var i = 0; i < linkNav.length; i++) {

    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1'),
            t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}

// Вверх

var scrollPos = 0;
var bar = document.querySelector('.bar');
window.onscroll = function() {
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
   var documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;

   if ((documentHeight - clientHeight) <= scrollTop) {
     bar.classList.add('bar--on');
   } else if (scrollTop == 0) {
     bar.classList.remove('bar--on');
   } else if (scrollTop > scrollPos) {
     bar.classList.remove('bar--on');
   } else {
     bar.classList.add('bar--on');
   }
   scrollPos = scrollTop;
}
