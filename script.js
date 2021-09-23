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

// Tablistt

/* 
<div class="tabs">
   <div class="tab-header">
      <div></div>
   </div>
   <div class="tab-indicator">
      <div class="indicator-line"></div>
   </div>
   <div class="tab-body">
      <div class="tab-info"></div>
   </div>
</div> 
*/

let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let tabsPane = tabHeader.getElementsByTagName("div");
for(let i=0;i<tabsPane.length;i++){
   tabsPane[i].addEventListener("click",function(){
      tabHeader.getElementsByClassName("active")[0].classList.remove("active");
      tabsPane[i].classList.add("active");
      tabBody.getElementsByClassName("active")[0].classList.remove("active");
      tabBody.getElementsByClassName("tab_info")[i].classList.add("active");
      tabIndicator.style.left = `calc(calc(100% / 6) * ${i})`;
   });
}

// Slider Indicator

/* <div class="progress-barr"><div class="indicate"></div></div> */

let $catSlider = $('.cloud_slider'); //slider
var $progressBar = $('.indicate'); //indicator

$catSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
   var act = $('.cloud_slider').find('.slick-active').length;
   var calc = ((nextSlide) / (slick.slideCount - act)) * 100;
   var ts = slick.slideCount - 1;
   var n = 100 / (ts - nextSlide);
   if (!(calc >= 100)) {
      $progressBar.css('left', 'calc(' + calc + '% - 0px)');
   } else {
      $progressBar.css('left', 'calc(100% - 100px)');
   }
});


//pileup

/* <div class="card-stack">

   <div class="card-stack-item">
      <div class="card-stack-container">
         <div class="card-stack-inner">
            <div class="card-left">
               <a href="/wp-content/uploads/2021/07/Pagebuilder_config-PT-1-width.png" data-fancybox="preview" data-width="1494" data-height="1187" title="Click Me">
                  <img src="/wp-content/uploads/2021/07/Pagebuilder_config-PT-1.png" alt="Storefront customization and Content management made easy" width="575" height="470" class="lazy" loading="lazy">
               </a>
            </div>
            <div class="card-right">
               <div class="card-header">
                  <h2 class="text-black title-22 text-center">Storefront customization and Content management made easy</h2>
               </div>
               <div class="card-body">
                  <ul class="text-black title-16">
                     <li>Magento’s Page Builder helps create a rich and compelling experience</li>
                     <li>Merchants can manage content without depending on developers</li>
                     <li>Roll out campaigns and content changes at a higher velocity</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div class="card-stack-item"></div>

</div> */

const e = document.querySelectorAll(".card-stack"), 
      t = ["load", "resize", "scroll"];
e.forEach((e) => {
   const o = e.querySelectorAll(".card-stack-item");
   t.forEach((e) => {
      window.addEventListener(e, () => {
      const e = [].slice.call(o).reverse();
      e.reduce((t, o, a) => {
         const n = o.clientHeight + parseInt(window.getComputedStyle(o).getPropertyValue("margin-bottom")),
            r = t + (n - (e[a - 1] ? e[a - 1].offsetTop - o.offsetTop : n)) / n,
            l = o.firstElementChild,
            s = l.firstElementChild,
            c = "calc(-1rem * " + r + ")",
            d = "calc(1 - .2 * " + r + ")",
            i = "calc(1 - .03 * " + r + ")";
         return (l.style.transform = "translateY(" + c + ") scale(" + i + ")"), (s.style.opacity = d), r;
      }, 0);
      });
   });
});


//slider cirle progress

/* <div class="hero-txt-container">
      <div class="hero-txt">
         <div class="slidedown">
               <div class="top-img">
                  <?php $top_img = get_field('top_image'); ?>
                  <img src="<?php echo $top_img['url'];?>" width="300" height="100" alt="<?php echo $top_img['alt'];?>">
               </div>
               <h1><?php echo the_field('hero_heading'); ?></h1>
               <p><?php echo the_field('hero_sub_heading'); ?></p>
         </div>
      </div>
      <div class="hero-txt what-sec">
         <div class="slidedown">
               <?php $field = get_field_object('what_we_do'); ?>
               <div class="what-we-do-content">
                  <?php echo $field['value']; ?>
               </div>
         </div>
      </div>
      <div class="hero-txt what-sec cloud-sec">
         <div class="slidedown">
               <div class="what-we-do-content">
                  <?php $field = get_field_object('cloud_details'); ?>
                  <?php echo $field['value']; ?>
               </div>
         </div>
      </div>
   </div>
   <div class="progressBarContainer">
      <div class="item">
         <svg data-slick-index="0" class="progressBar"></svg>
      </div>
      <div class="item">
         <svg data-slick-index="1" class="progressBar"></svg>
      </div>
      <div class="item">
         <svg data-slick-index="2" class="progressBar"></svg>
      </div>
   </div> */

$('.hero-txt-container').slick({
   infinite: true,
   arrows: false,
   dots: false,
   slidesToShow: 1,
   slidesToScroll: 1,
   cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
   fade: true,
   autoplay: true,
   autoplaySpeed: 6000,
 });

 $slick = $('.hero-txt-container');
 $slick.on("mouseenter", function(){
   isPause = true;
 }).on("mouseleave", function(){
   isPause = false;
 })

 var percentTime;
 var tick;
 var time = 5;
 var progressBarIndex = 0;

 $('.progressBarContainer .progressBar').each(function(index) {
   var progress = "<circle r='10' cx='20' cy='20' class='circlemain inProgress inProgress" + index + "'></circle><circle r='4' cx='20' cy='20' class='circle'></circle>";
   $(this).html(progress);
 });

 function startProgressbar() {
   resetProgressbar();
   percentTime = 0;
   isPause = false;
   tick = setInterval(interval, 5);
 }
 var $rbar = $('.circlemain');
 var rlen = 2 * Math.PI * $rbar.attr('r');

 function interval() {
   if (($('.hero-txt-container .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
     progressBarIndex = $('.hero-txt-container .slick-track div[aria-hidden="false"]').data("slickIndex");
     startProgressbar();
   } if (isPause === false) {
       percentTime += 1 / (time + 5);
       $('.inProgress' + progressBarIndex).css({
         'stroke-dasharray': rlen,
         'stroke-dashoffset': rlen * (1 - percentTime / 100),
         'stroke' : "#ef0e34"
       });
     if (percentTime >= 100) {
       $('.hero-txt-container').slick('slickNext');
       progressBarIndex++;
       if (progressBarIndex > 2) {
         progressBarIndex = 0;
       }
       startProgressbar();
     }
   }
 }

 function resetProgressbar() {
   $('.inProgress').css({
     'stroke-dasharray': 0,
     'stroke-dashoffset': 0 ,
     'stroke': "transparent"
   });
   clearInterval(tick);
 }
 startProgressbar();
 // End ticking machine

 $('.item').click(function () {
   clearInterval(tick);
   var goToThisIndex = $(this).find("svg").data("slickIndex");
   $('.hero-txt-container').slick('slickGoTo', goToThisIndex, false);
   startProgressbar();
 });