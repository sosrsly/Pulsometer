// let number = 77,
//     name = "alex",
//     leftBorderRight = true,
//     answer,
//     objApple;

// objApple = {
//     name: "apple",
//     weight: 250,
//     color: "red"
// }

// answer = confirm("Вам есть 18 лет?");
// // console.log(answer);

// if (answer) {
//     console.log("right")
// } else
//     console.log("error");

// for(i = 1; i < 10; i = i*2) {
//     console.log(i);
// }

// function login(userLogin) {
//     console.log(userLogin);
// }

// login(objApple.name);

// $(document).ready(function(){
//     $('.carousel__slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     dots: true,
//                     arrows: false
//             }   }
//         ]
//     });
//   });


(function($) {
  $(function() {
   
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

  });

  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn(500);
});

$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks, #order').fadeOut(500);
});

$('.button_catalog').each(function(i){
  $(this).on('click', function(){
    $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    $('.overlay, #order').fadeIn(500);
  })
});

function validationForm (form){
  $(form).validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true
      },
      email: {
        required: true
      }
    },
    messages: {
      name: "*Пожалуйста, введите ваше имя",
      email: "*Пожалуйста, введите ваш email",
      phone: "*Пожалуйста, введите ваш номер телефона"
    }
  });
};

validationForm('#consultation .search-form');
validationForm('#main-form');
validationForm('#order .search-form');

})(jQuery);


  
