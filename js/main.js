$(document).ready(function () {


  var kxx = 0
  $('.mainslider-nav_index').each(function () {
    kxx = $(this).find('.mainslider__number').size();
    var myWidth = 100 / kxx - 2;
    $(this).find('.mainslider__number').width(myWidth + '%');
    kxx = 0;
  });

  $(".mainslider__slider_index").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3e3,
    arrows: false,
    dots: false,
    asNavFor: ".mainslider-nav_index"
  }), $(".mainslider-nav_index").slick({
    infinite: true,
    slidesToShow: 0,
    slidesToScroll: 0,
    asNavFor: ".mainslider__slider_index",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });

  $(".carsslider__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    prevArrow: $(".carsslider__arrow_left"),
    nextArrow: $(".carsslider__arrow_right"),
     responsive: [
    {
      breakpoint: 1023,
      settings: {
         slidesToShow: 3,
    slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
         slidesToShow: 2,
    slidesToScroll: 1,
      }
    },    
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });

  $(".carsslider__slider2").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    mobileFirst: false,
    prevArrow: $(".carsslider__arrow_left"),
    nextArrow: $(".carsslider__arrow_right"),
     responsive: [
    {
        breakpoint: 1023,
        settings: {
         slidesToShow: 3,
    slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
         slidesToShow: 2,
    slidesToScroll: 1,
      }
    },    
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });

  $(".newsslider__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: '0px',
    autoplay: false,
    variableWidth: true,
    centerMode: true,
    arrows: true,
    dots: false,
    prevArrow: $(".newsslider__arrow_left"),
    nextArrow: $(".newsslider__arrow_right"),
  });

  $(".offersslider__slider").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    prevArrow: $(".offersslider__arrow_left"),
    nextArrow: $(".offersslider__arrow_right"),
    responsive: [
    {
      breakpoint: 1023,
      settings: {
         slidesToShow: 4,
    slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
         slidesToShow: 3,
    slidesToScroll: 1,
      }
    },    
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
  });





  

if ($("#maxCost1").length) {
  

  function prettify(num) {
    var n = num.toString();
    var separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
  }

  var $test1 = $("#maxCost1");
  var val1 = $test1.prop("value");
  $test1.prop("value", prettify(val1));


  /* <слайдер сумма кредита> */
  $('input#maxCost1').on('focusin', function () {
    $(this).val("");
  });

  $('input#minCost1').on('focusin', function () {
    $(this).val("");
  });
  $('input#maxCost2').on('focusin', function () {
    $(this).val("");
  });

  $('input#minCost2').on('focusin', function () {
    $(this).val("");
  });

  try {


    jQuery("#sliderprice1").slider({
      min: 100000,
      max: 4000000,
      value: 823000,
      range: "min",
      stop: function (event, ui) {
        jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("value"));

        var val1 = $test1.prop("value");
        $test1.prop("value", prettify(val1));

      },
      slide: function (event, ui) {
        jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("value"));
        
        var val1 = $test1.prop("value");
        $test1.prop("value", prettify(val1));
      }
    });

  


    jQuery("input#maxCost1").change(function () {

      var value2 = jQuery("input#maxCost1").val();

      if (value2 > 4000000) {
        value2 = 4000000;
        jQuery("input#maxCost1").val(4000000)
      }

     
      jQuery("#sliderprice1").slider("value", value2);
      var val1 = $test1.prop("value");
      $test1.prop("value", prettify(val1));
    });


  } catch (err) {

  };

  /* </слайдер сумма кредита> */

  try {


    jQuery("#sliderprice2").slider({
      min: 1,
      max: 5,
      value: 2,
      range: "min",
      stop: function (event, ui) {

        jQuery("input#maxCost2").val(jQuery("#sliderprice2").slider("value"));


      },
      slide: function (event, ui) {
        jQuery("input#maxCost2").val(jQuery("#sliderprice2").slider("value"));

      }
    });


    jQuery("input#maxCost2").change(function () {

      var value1 = jQuery("input#minCost2").val();
      var value2 = jQuery("input#maxCost2").val();

     

      if (parseInt(value1) > parseInt(value2)) {
        value2 = value1;
        jQuery("input#maxCost2").val(value2);
      }
      jQuery("#sliderprice2").slider("value", value2);

    });


  } catch (err) {

  };

  /* </слайдер сумма кредита> */
}

  $('.brandslider__slider').each(function () {


    var slToShow = 3;

    var slcount = $(this).find('.brandslider__slide').length;


    var $slider = $(this);
    var $progressBar = $(this).parent().find('.progress');
    var $progressBarLabel = $(this).parent().find('.slider__label');

    var initcalc = slToShow / slcount * 100;

    $progressBar
      .css('width', initcalc + '%')
      .attr('aria-valuenow', initcalc);

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var calc = ((nextSlide) / (slcount)) * 100;

      $progressBar
        .css('width', initcalc + calc + '%')
        .attr('aria-valuenow', initcalc + calc);

    });

    $(this).slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '0px',
      autoplay: true,
      variableWidth: true,
      centerMode: true,
      autoplayspeed: 3000,
      arrows: false,
      dots: false,

    });
  });


      $('.brandslider__slide').on('click', function(e) {
          if (!$(this).hasClass("slick-active")) {
              e.preventDefault();
              if($(this).attr("data-slick-index") > $(this).siblings('.slick-current').attr("data-slick-index") ) {
                   $(this).closest(".slick-slider").slick("slickNext");
              } else {
                   $(this).closest(".slick-slider").slick("slickPrev");
              }
                
              
         }
    });


  try {
    $(".mainslider__slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3e3,
      arrows: true,
      dots: true,
      prevArrow: $(".mainslider__left"),
      nextArrow: $(".mainslider__right"),
      asNavFor: ".mainslider-nav"
    }), $(".mainslider-nav").slick({
      infinite: true,
      slidesToShow: 0,
      slidesToScroll: 0,
      asNavFor: ".mainslider__slider",
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true
    })
  } catch (e) {}


  try {
    $('.carblockslider__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.carblockslider__navslider',
      responsive: [
   
          {
            breakpoint: 767,
            settings: {
              dots: true,
            }
          },    
          
        ]
    });
    $('.carblockslider__navslider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.carblockslider__slider',
      dots: false,
      vertical: true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
   
    {
      breakpoint: 767,
      settings: {
        vertical: false,
         slidesToShow: 0,
         slidesToScroll: 1,
      }
    },    
    
  ]
    });
  } catch (e) {}

  try {
    $('.carblockslider__slider_full').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.carblockslider__navslider_full',
       responsive: [
   
          {
            breakpoint: 767,
            settings: {
              dots: true,
            }
          },    
          
        ]
    });
    $('.carblockslider__navslider_full').slick({
      slidesToShow: 0,
      slidesToScroll: 1,
      asNavFor: '.carblockslider__slider_full',
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });

    /* $('.carblockslider__navslider_full').on('mouseenter', '.slick-slide', function (e) {
         var $currTarget = $(e.currentTarget), 
             index = $currTarget.data('slick-index'),
             slickObj = $('.carblockslider__slider_full').slick('getSlick');

         slickObj.slickGoTo(index);

         });*/


  } catch (e) {}


  $('.carblockslider__more a').on('click', function (e) {
    e.preventDefault();
    $(".carblockslider__navslider").slick('slickNext');
  });

  $('.menubutton').on('click', function () {
    $('.headermain').slideToggle();
  });

  



  $('.mobilemenubtn').on('click', function () {
    $('.header__mainmenu').slideToggle();
    $('.mainslider-nav_index').addClass('active');
  });

  $('.mobilemenuclose').on('click', function () {
    $('.header__mainmenu').hide();
    $('.mainslider-nav_index').removeClass('active');
  });



  $(".thumb-item").brazzersCarousel(), $(".obzor__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: ".obzor__navslider"
  }), $(".obzor__navslider").slick({
    slidesToShow: 0,
    slidesToScroll: 1,
    asNavFor: ".obzor__slider",
    dots: false,
    infinite: false,
    initialSlide: 2,
    centerMode: true,
    swipe: false,
    focusOnSelect: true,
    prevArrow: $(".obzor__navleft"),
    nextArrow: $(".obzor__navright")
  });


  try {
    $(".carslider__slider").each(function () {
      $(this).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3e3,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: $(this).parent().parent().parent().find(".carslider-nav")
      })
    }), $(".carslider-nav").each(function () {
      $(this).slick({
        infinite: true,
        slidesToShow: 0,
        slidesToScroll: 0,
        asNavFor: $(this).parent().parent().find(".carslider__slider"),
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
      })
    })
  } catch (e) {}
  $(".carslider__right").click(function (e) {
    $(this).parent().parent().find(".slick-slider").slick("slickNext")
  }), $(".carslider__left").click(function (e) {
    $(this).parent().parent().find(".slick-slider").slick("slickPrev")
  }), setTimeout(function () {
    [].forEach.call(document.querySelectorAll("img[data-src]"), function (e) {
      e.setAttribute("src", e.getAttribute("data-src")), e.onload = function () {
        e.removeAttribute("data-src")
      }
    })
  }, 2e3), (new WOW).init(), $("input[type=tel]").mask("+7 (999) 999-99-99"), $("input.datetime").mask("99 99 9999")
}), $(document).ready(function () {
  function e() {
    $(".dom-popup").css("display", "none")
  }
  $(".close-modal").on("click", e), $("#modal_close_href").on("click", e)
});

function sendForm(e) {
  var i = e,
    o = new FormData(e);
  $(i).attr("data-metrika-target");
  $.ajax({
    type: "POST",
    url: "/mail/send.php",
    contentType: false,
    processData: false,
    data: o,
    dataType: "json",
    success: function (o) {
      if (console.log(o), "success" == o.result) {
        var r = $(i).find('input[name="name"]').val(),
          s = $(i).find('input[name="phone"]').val();
        roistatGoal.reach({
          name: r,
          text: "Заявка",
          phone: s
        }), $("input").removeClass("error_input"), $(".modal").on("show.bs.modal", function () {
          $(".modal").not($(this)).each(function () {
            $(this).modal("hide")
          })
        }), $("#myModal_spasibo").modal("show"), $(i).find("input").val(""), ym(68064520, "reachGoal", "id1")
      } else {
        for (var a in $("input").removeClass("error_input"), o.text_error) $(e).find('input[name="' + a + '"]').addClass("error_input"), 0
      }
    },
    error: function (e) {
      console.log(e)
    },
    beforeSend: function () {
      console.log("loading..."), $(".modal").prepend('<div class="loader">dd</div>')
    },
    complete: function () {
      $(".loader").remove()
    }
  })
}


if ($(document).width() > 1199) {
  var a = document.querySelector('.aside'),
    b = null,
    P = 30;
  window.addEventListener('scroll', Ascroll, false);
  document.body.addEventListener('scroll', Ascroll, false);

  function Ascroll() {
    if (b == null) {
      var Sa = getComputedStyle(a, ''),
        s = '';
      for (var i = 0; i < Sa.length; i++) {
        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
          s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
        }
      }
      b = document.createElement('div');
      b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
      a.insertBefore(b, a.firstChild);
      var l = a.childNodes.length;
      for (var i = 1; i < l; i++) {
        b.appendChild(a.childNodes[1]);
      }
      a.style.height = b.getBoundingClientRect().height + 'px';
      a.style.padding = '0';
      a.style.border = '0';
    }
    var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.carsslider').getBoundingClientRect().top + 30);
    if ((Ra.top - P) <= 0) {
      if ((Ra.top - P) <= R) {
        b.className = 'stop';
        b.style.top = -R + 'px';
      } else {
        b.className = 'sticky';
        b.style.top = P + 'px';
      }
    } else {
      b.className = '';
      b.style.top = '';
    }
    window.addEventListener('resize', function () {
      a.children[0].style.width = getComputedStyle(a, '').width
    }, false);
  }
}
else {
      $('li.hasChild > a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('.submenu').slideToggle();
  });
}