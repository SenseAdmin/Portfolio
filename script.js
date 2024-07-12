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
    if (counterRight > 100) {
      clearInterval(counterInterval);
    }
  }, 20);
});



document.addEventListener('DOMContentLoaded', () => {
  const element1 = document.getElementById('1');
  const element2 = document.getElementById('f');
  const element3 = document.getElementById('g');
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
  const headerBtnContainer = document.querySelector('.header-btn-container');
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
      headerBtnContainer.style.background = '#000';
    } else {
      burger.classList.add('open');
      burgerInner.classList.add('open');
      burgerButtonInner1.classList.add('open');
      burgerButtonInner2.classList.add('open');
      burgerButtonInner3.classList.add('open');
      logo.style.filter = 'invert(100%)';
      headerBtnContainer.style.background = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const headerBtn = document.getElementById('header-btn');
  const headerBtnCont = document.getElementById('header-btn-cont');

  headerBtn.addEventListener('click', function() {
    if (headerBtnCont.classList.contains('open')) {
      headerBtnCont.classList.remove('open');
    } else {
      headerBtnCont.classList.add('open');
      headerBtn.style.display = 'none';
    }
  })
})

document.addEventListener('DOMContentLoaded', function() {
  const headerBtn = document.getElementById('header-btn-mobile');
  const headerBtnCont = document.getElementById('header-btn-cont');

  headerBtn.addEventListener('click', function() {
    if (headerBtnCont.classList.contains('open')) {
      headerBtnCont.classList.remove('open');
    } else {
      headerBtnCont.classList.add('open');
      headerBtn.style.display = 'none';
    }
  })
})




document.addEventListener('DOMContentLoaded', function() {
  const slideshow = document.getElementById('slideshow');
  const slides = [
    { path: 'img/slide1.png', position: 'bottom -25px left 0' },
    { path: 'img/slide2.png', position: 'bottom 0px left 5px' },
    { path: 'img/slide3.png', position: 'bottom 0 left 0' },
    { path: 'img/slide7.png', position: 'bottom 0 left -10px' },
    { path: 'img/slide5.png', position: 'bottom 0 left 0' },
    { path: 'img/slide6.png', position: 'bottom 0 left 0' }
  ];

  let currentSlide = 0;

  function changeSlide() {
    slideshow.style.opacity = '0.1'; // Затухание
    setTimeout(function() {
      slideshow.style.background = `url(${slides[currentSlide].path}) ${slides[currentSlide].position} no-repeat`;
      slideshow.style.backgroundSize = 'cover'; // Уменьшение изображения чтобы поместилось в блок
      slideshow.style.transition = "opacity 1.5s, background-size 0.5s"; // Переход для плавного изменения прозрачности и размера фона
      slideshow.style.opacity = 1; // Появление нового слайда после затухания
    }, 500); // Задержка после затухания
    currentSlide = (currentSlide + 1) % slides.length; // Обновляем индекс слайда, чтобы зациклить слайды
  }

  changeSlide(); // Показываем первый слайд сразу

  setInterval(changeSlide, 5500); // Меняем слайд каждые 5.5 секунд
});


