window.addEventListener('load', function() {
  const loaderWrapper = document.getElementById('loader-wrapper');
  const content = document.getElementById('content');

  loaderWrapper.style.display = 'flex';
  content.style.display = 'block';

  setTimeout(function() {
    loaderWrapper.style.display = 'none';
  }, 5000);
});


window.addEventListener('load', function() {
  const counterRightElement = document.getElementById('counter-right');

  let counterRight = 1;

  const counterInterval = setInterval(function() {
    counterRightElement.textContent = String(counterRight).padStart(2, '0');

    counterRight++;
    if (counterRight > 99) {
      clearInterval(counterInterval);
    }
  }, 20);
});
