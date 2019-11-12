var slider = tns({
    container: '.carousel__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false
  });

  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };

  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };