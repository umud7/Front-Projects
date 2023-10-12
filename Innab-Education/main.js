//jquery for toggle dropdown menus
$(document).ready(function(){
    //toggle sub-menus
    $(".sub-btn").click(function(){
      $(this).next(".sub-menu").slideToggle();
    });

    //toggle more-menus
    $(".more-btn").click(function(){
      $(this).next(".more-menu").slideToggle();
    });
  });

  //javascript for the responsive navigation menu
  var menu = document.querySelector(".menu");
  var menuBtn = document.querySelector(".menu-btn");
  var closeBtn = document.querySelector(".close-btn");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  //javascript for the navigation bar effects on scroll
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  

  const btns = document.querySelectorAll('.nav-btn');
  const slides = document.querySelectorAll('.video-slider');
  const contents = document.querySelectorAll('.content');

  var sliderNav = function(index) {
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    contents.forEach((content) => {
        content.classList.remove('active');
    });
    btns[index].classList.add('active');
    slides[index].classList.add('active');
    contents[index].classList.add('active');
  }

  btns.forEach((btn,i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    })
  })


  // Start Fixed Section Home Page
const counts = document.querySelectorAll('.count')
const speed = 15

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 60)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})
// End Fixed Section Home Page


// Start Partnyor Section Home Page

$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover:false,
      responsive: [{
          breakpoint: 768,
          setting: {
              slidesToShow:4
          }
      }, {
          breakpoint: 520,
          setting: {
              slidesToShow: 3
          }
      }]
  });
});

// End Partnyor Section Home Page


// ! Project Box Təlimlər Hissəsi

$(document).on('click','.project-filter li',function(){
  $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
  });
  
  
  $(document).ready(function(){
  $('.list').click(function(){
     const value = $(this).attr('data-filter');
     if(value == 'all'){
      $('.project-box').show('1000');
     }
     else{
      $('.project-box').not('.'+value).hide('1000');
      $('.project-box').filter('.'+value).show('1000');
     }
  });
  });
  
  
    // Sayfa yüklendiğinde önceki izlenme sayılarını yerel depodan alalım
    document.addEventListener('DOMContentLoaded', function () {
      const courses = document.querySelectorAll('.courses');
  
      courses.forEach(course => {
        const starRating = course.querySelector('.star');
        const courseId = course.querySelector('h6').textContent;
  
        // Önceki izlenme sayısını yerel depodan alalım veya varsayılan olarak 239 olarak ayarlayalım
        let currentViews = localStorage.getItem(courseId) || 0;
  
        // İzlenme sayısını güncelleyelim
        starRating.innerHTML = `(${currentViews})`;
  
        // Her kursun üzerine tıklanınca izlenme sayısını arttıracak olay dinleyici ekleyelim
        course.addEventListener('click', function () {
          // İzlenme sayısını arttıralım
          currentViews++;
  
          // Güncellenmiş izlenme sayısını ekranda gösterelim
          starRating.innerHTML = `(${currentViews})`;
  
          // Güncellenmiş izlenme sayısını yerel depoya kaydedelim
          localStorage.setItem(courseId, currentViews.toString());
        });
      });
    });



/* Simple Scroll Reveal
 * @author Machine Agency [hello@machine-agency.com]
 * @link http://machine-agency.com
 */
jQuery(document).ready( function($) {
  var revealClass = '.animated';
  var targetClass = '.has-scroll-reveal:not(' + revealClass + ')';
  var offset = 50; // Offset from bottom of viewport in pixels.

  var winHeight = $(window).height();

  // Recalc height of window in case of resize
  $(window).bind('resizeEnd', function() {
    winHeight = $(window).height();
  });

  // Fire when page loads
  triggerAnimation(revealClass, targetClass, offset, winHeight);

  // Also fire on scroll
  $(window).on('scroll', function() {
      triggerAnimation(revealClass, targetClass, offset, winHeight);
  }); // window.on('scroll')

}); // document.ready

function triggerAnimation(revealClass, targetClass, offset, winHeight) {

    // Get current scrollPos
    var trigger = $(window).scrollTop() + winHeight - offset;

    // Loop through elements we're affecting
    $(targetClass).each(function() {
      var elementOffset = $(this).offset().top;

      if( elementOffset < trigger ) {

        $(this).addClass( revealClass.replace('.','') );
      }
    });

}

/*
* ResizeEnd
*
* Example:
* $(window).bind('resizeEnd', function() {
*  console.log('resize ended 500ms ago');
* });
*/
$(window).resize(function() {

  if(this.resizeTO) clearTimeout(this.resizeTO);

  this.resizeTO = setTimeout(function() {
      $(this).trigger('resizeEnd');
  }, 500);

});


