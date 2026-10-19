// Copy buttons on code blocks (figure.code > figcaption > button.copy).
document.addEventListener('click', function (e) {
  var btn = e.target.closest && e.target.closest('button.copy');
  if (!btn) return;
  var code = btn.closest('figure.code').querySelector('pre code');
  navigator.clipboard.writeText(code.innerText).then(function () {
    btn.textContent = 'Copied';
    setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
  });
});
