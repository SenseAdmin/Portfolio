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

document.addEventListener('DOMContentLoaded', () => {
  const element1 = document.getElementById('1');
  const element2 = document.getElementById('2');
  const element3 = document.getElementById('3');

  setTimeout(() => {
    element1.classList.add('open');
    setTimeout(() => {
      element1.classList.remove('open');
      setTimeout(() => {
        element2.classList.add('open');
        setTimeout(() => {
          element2.classList.remove('open');
          setTimeout(() => {
            element3.classList.add('open');
          }, 1000);
        }, 2000);
      }, 1000);
    }, 3000);
  }, 3500);
});
