//$(document).ready(function(){})
$(function(){
    //변수에 담기
    let gnb = $('#gnb'), 
        gnbLI = gnb.children('li'),
        dep1 = gnb.children('li').children('a.dep1'),
        dep2 = gnb.find('.dep2');

    //dep1.mouseenter(function(){})
    //dep1.mouseleave(function(){})

    gnbLI.on('mouseenter',function(){
        $(this).addClass('on')
        $(this).children('.dep2').stop().fadeIn()
    })

    gnbLI.on('mouseleave',function(){
        $(this).removeClass('on')
        $(this).children('.dep2').stop().fadeOut()
    })

    //탭메뉴
    //변수에 담기
    let tabMenu = $('.tab-menu li')
    
    //tabMenu.click(function(){})
    tabMenu.on('click',function(event){
        console.log(event)
        event.preventDefault(); // 이벤트 기본동작을 못하게함
        let activeCon = $(this).children('a').attr('href')
        console.log(activeCon)

        $('#sec1 .wrap').hide()
        $(activeCon).show()

        tabMenu.children('a').removeClass('on')
        $(this).children('a').addClass('on')
    })
    
    //swiper
    const swiper = new Swiper('#mainSlide', {

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        loop: true,

        pagination: {
          el: '.paging',
          clickable : true,
        },
      
        navigation: {
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        },

      });
})

