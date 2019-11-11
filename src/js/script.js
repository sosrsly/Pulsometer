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
