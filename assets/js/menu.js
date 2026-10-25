// Mobile menu toggle
(function () {
  var button = document.querySelector('.menu-toggle');
  var header = document.querySelector('.site-header');
  if (!button || !header) return;
  button.addEventListener('click', function () {
    var open = header.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
