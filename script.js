document.addEventListener("DOMContentLoaded", function() {
  // Запретить скроллинг при показе loading overlay
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  // Разрешить скроллинг после скрытия loading overlay
  function enableScroll() {
    document.body.style.overflow = 'auto';
  }

  // Показать загрузочный overlay при загрузке страницы
  document.querySelector('.loading-overlay').style.display = 'flex';
  disableScroll();

  // Скрыть загрузочный overlay через 5 секунд
  setTimeout(function() {
    document.querySelector('.loading-overlay').style.display = 'none';
    enableScroll();
  }, 5000); // 5 second delay
});



