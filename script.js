/*======================
    Scroll to Element
======================= */
$('#start').click(function() {
    $('html, body').animate({
    scrollTop: $("#form").offset().top
    }, 2000);
});

/*======================
    Scroll to Top
======================= */
$('.top').click(function() {
    $('html, body').animate({
    scrollTop: 0
    }, 2000);
});

/*==========================
    Scroll Btn Hide & Show
============================ */
$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $("#toTop").fadeIn(); // scroll to top btn
    } else {
      $("#toTop").fadeOut(); // scroll to top btn
    }
});

/*=============================
    Slick initalize & Unslick 
    particular view port
=============================== */

function slick_on_mobile(slider){
    $(window).on('load resize', function() {
        if ($(window).width() > 1199) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
            return
        }
        if (!slider.hasClass('slick-initialized')) {
            return slider.slick({
                dots: false,
                arrows: false,
                autoplay:true,
                autoplaySpeed:1000,
                centerMode: true
            });
        }
    });
}
slick_on_mobile($('.testi-quotes'));

/*======================
    Form Validation
======================= */

function valid_name(value) {
    var valid = /^[a-zA-Z ]*$/;
    return valid.test(value); //method to validate name field. method tests for a match in a string.
}
  
function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}
  
function ValidatePhoneNumber(telephone) {
    var reg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return telephone.length != 10 ? false : reg.test(telephone);
}
  
$('input[name="your-email"]').keyup(function() {
    var value = $(this).val();
    var valid = validateEmail(value);

        if (value == "") {
            $(this).parents(".form-group").addClass("error").removeClass("success");
        }

        if (value) {
          $(this).parents(".form-group").removeClass("error");
            if (valid) {
                $(this).parents(".form-group").addClass("success");
            } else {
                $(this).parents(".form-group").addClass("error");
            }
        }
});


/*=========================
    Sticky Section
===========================*/
function sticky_relocate() {
    var sticky_foot = $(".sticky-bottom");
    var win = $(window);
    var a = sticky_foot.offset().top;
    var b = sticky_foot.height();
    var c = win.height();
    var d = win.scrollTop();
    var e = d + win.innerHeight();
    var f = a + sticky_foot.outerHeight();
    if (((e > a) && (d < f)) || ($(window).scrollTop() >= 100) ){
        $('.blog-strip').addClass('scrollUp');
    }
    if (((c+d)>(a+b)) || ($(window).scrollTop() <= 200)) {
        $('.blog-strip').removeClass('scrollUp');
    }
}
  
$(window).scroll(function(){
    sticky_relocate();
});


/*=================================
    Auto Pop-Up Certain Time Delay
===================================*/
$(window).on('load', function(){
    function showwindow(){
      $("#pop-up").show();
    }
    setTimeout(showwindow,10000); //10 seconds
    function hidewindow(){
      $("#pop-up").hide();
    }
    $(".close-pop-up").click(function(){
      hidewindow();
    });
});


/*=====================
    Sticky NavBar 
=======================*/
function sticky(navbar) {
    var c, currentScrollTop = 0;

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1) {
            navbar.addClass('fixed-header');
        }
        else {
            navbar.removeClass('fixed-header');
        }
    });
}
sticky($('.site-header'));


/*=================
    Page Progress
===================*/
<progress id="progressbar" value="0" max="100"></progress>

$(window).scroll(function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        var position = scrollPercent;
    $("#progressbar").attr('value', position);
});


/*===================================
    Background Image Using data-bg
=====================================*/
function dataBg(imgcontainer) {
    $(imgcontainer).each(function() {
        var img = $(this).data('bg');
        $(this).css({"background-image": "url(" + img + ")"});
    })
}
dataBg('.our-works-banner .item');

/*===================================
    Getting Name from Image
=====================================*/
function altTag(){
    $('.slider_item img').each(function(){
       let imgSrc = $(this).attr('src'); //getting "images/slider/attck-on-titan.jpg" 
       let splitSrcValue = imgSrc.split('/'); //(3) ["images", "slider", "attck-on-titan.jpg"]
       let fileExten = splitSrcValue[splitSrcValue.length-1]; //"attck-on-titan.jpg"
       let file = fileExten.split('.')[0];//"attck-on-titan"
       let removeHypens = file.split('-').join(' '); //"attck on titan"
       $(this).attr("alt", removeHypens);
       $(this).attr("title", removeHypens);
       $(this).siblings('.slider_content').append($("<h2></h2>").text(removeHypens));
    });
}
altTag();

/*===================================
    Range Value Getting
=====================================*/
function rangeValues(){
    let input = $('[type="range"]');
    input.each(function(){
       let data_min = $(this).attr('min');
       let data_max = $(this).attr('max');
       $(this).parent().attr('min', data_min);
       $(this).parent().attr('max', data_max);
    });
}
rangeValues();

function Change(){
    let range = $('input[type=range]');
    range.on('input', function (){
        $(this).siblings('span').text($(this).val());
        let value = (this.value-this.min)/(this.max-this.min)*100;
        $(this).css({'background-image':'linear-gradient(to right, #7579e7 0%, #7579e7 ' + value + '%, #fff ' + value + '%, white 100%'});
    });
    // for initial showing
    range.each(function(){
        $(this).siblings('span').text($(this).val());
        let value = ($(this).val()-$(this).attr('min'))/($(this).attr('max')-$(this).attr('min'))*100;
        $(this).css({'background-image':'linear-gradient(to right, #7579e7 0%, #7579e7 ' + value + '%, #fff ' + value + '%, white 100%'});
    });
}
Change();