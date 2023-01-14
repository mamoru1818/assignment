jQuery('.drawer_icon').on('click', function (e) {
  e.preventDefault();
  jQuery('.drawer_icon').toggleClass('is-active');
  jQuery('.drawer_content').toggleClass('is-active');
  jQuery('.drawer_background').toggleClass('is-active');

  return false;
});

jQuery('.drawer_content_item a').on('click', function (e) {
  e.preventDefault();
  jQuery('.drawer_icon').removeClass('is-active');
  jQuery('.drawer_content').removeClass('is-active');
  jQuery('.drawer_background').removeClass('is-active');

  return false;
});

const mySwiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      spaceBetween: 40,
    },
    768: {
      spaceBetween: 30,
    }
  },
});

jQuery('a[href^="#"]').click(function () {
  var header = jQuery(".header").innerHeight();
  var speed = 300;
  var id = jQuery(this).attr("href");
  var target = jQuery("#" == id ? "html" : id);
  var position = jQuery(target).offset().top - header;
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

jQuery('.faqs__box__q').on("click", function () {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.faqs__box__icon').toggleClass('is-open');
});

jQuery(window).on("scroll", function () {
  if (500 < jQuery(this).scrollTop()) {
    jQuery('.pagetop').addClass('is-show');
  } else {
    jQuery('.pagetop').removeClass('is-show');
  }
});

//googleform
let $form = $('#form');
$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        $form.slideUp()
        $('#js-success').slideDown()
      },
      200: function () {
        $form.slideUp()
        $('#js-error').slideDown()
      }
    }
  });
  return false;
});

//formの入力確認
$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});
