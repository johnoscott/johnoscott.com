/* site.js — progressive enhancement (pages read fully without it): Copy buttons on code blocks. From Dozable's docs.js. */
(function () {
  'use strict';
  document.body.classList.add('js');
  document.querySelectorAll('.code .copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.closest('.code').querySelector('code').textContent.replace(/\n$/, '');
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () {
        b.textContent = 'Copied'; b.setAttribute('data-done', '');
        setTimeout(function () { b.textContent = 'Copy'; b.removeAttribute('data-done'); }, 1500);
      }, function () { b.textContent = 'Press ⌘C'; });
    });
  });
})();
