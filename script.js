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
  const element4 = document.getElementById('4');
  const element5 = document.getElementById('5');

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
            setTimeout(() => {
              element3.classList.remove('open');
              setTimeout(() => {
                element4.classList.add('open');
                setTimeout(() => {
                  element4.classList.remove('open');
                    setTimeout(() => {
                    element5.classList.add('open');
                  }, 2000);
                }, 2000);
              }, 1000);
            }, 2000);
          }, 1000);
        }, 2000);
      }, 1000);
    }, 1000);
  }, 3500);
});


document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.getElementById('burger-btn');
  const burger = document.querySelector('.burger');
  const burgerInner = document.querySelector('.burger-inner');
  const burgerButtonInner1 = document.querySelector('.burger-button-inner1');
  const burgerButtonInner2 = document.querySelector('.burger-button-inner2');
  const burgerButtonInner3 = document.querySelector('.burger-button-inner3');
  const logo = document.getElementById('logo');

  burgerBtn.addEventListener('click', function() {
    if (burger.classList.contains('open')) {
      burger.classList.remove('open');
      burgerInner.classList.remove('open');
      burgerButtonInner1.classList.remove('open');
      burgerButtonInner2.classList.remove('open');
      burgerButtonInner3.classList.remove('open');
      logo.style.filter = 'none';
    } else {
      burger.classList.add('open');
      burgerInner.classList.add('open');
      burgerButtonInner1.classList.add('open');
      burgerButtonInner2.classList.add('open');
      burgerButtonInner3.classList.add('open');
      logo.style.filter = 'invert(100%)';
    }
  });
});
