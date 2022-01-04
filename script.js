//음식카테고리
var swiper = new Swiper(".snbSwiper", {
    slidesPerView: "auto",
    preventClicks: true,
    preventClicksPropagation: false,
    observer: true,
    observeParents: true
});
var $snbSwiperItem = $(".snbSwiper .swiper-wrapper .swiper-slide a");
    $snbSwiperItem.click(function(){
    var target = $(this).parent();
    $snbSwiperItem.parent().removeClass("active")
    target.addClass("active");
    muCenter(target);
})

    function muCenter(target){
        var snbwrap = $(".snbSwiper .swiper-wrapper");
        var targetPos = target.position();
        var box = $(".snbSwiper");
        var boxHarf = box.width()/2;
        var pos;
        var listWidth = 0;
    
        snbwrap.find(".swiper-slide").each(function(){ listWidth += $(this).outerWidth(); })
        
        var selectTargetPos = targetPos.left + target.outerWidth()/2;
        if (selectTargetPos <= boxHarf) { // left
            pos = 0;
        }else if ((listWidth - selectTargetPos) <= boxHarf) { //right
            pos = listWidth-box.width();
        }else {
            pos = selectTargetPos - boxHarf;
        };

        setTimeout(function(){snbwrap.css({
            "transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
            "transition-duration": "500ms"
        })}, 200); 

        $(function (global, $) { 
            var $menu = snbwrap.find(".swiper-slide"), 
                $contents = $(".menu"),
                $doc = $("html, body"); 
              $(function () { 
                  $menu.on("click", "a", function(e){ 
                      var $target = $(this).parent();
                      var idx = $target.index();
                      var section = $contents.eq(idx);
                      var offsetTop = section.offset().top; 
                        $doc.stop().animate({ scrollTop :offsetTop - 170 + "px"}, 800);
                            return false; 
                        }); 
                }); 
                $(window).scroll(function(){
                var scltop = $(window).scrollTop();
                target.each($contents, function(idx, item){
                    var $target = $contents.eq(idx),
                        i = $target.index(),
                        targetTop = $target.offset().top;

                    if (targetTop <= scltop) {
                        $menu.removeClass('active');
                        $menu.eq(idx).addClass('active');
                    }
                    if (!(200 >= scltop)) {
                        $menu.removeClass('active');
                    }
                })
            });

            $(".tab-menu > li > a").click(function(e){
                e.preventDefault();
                var curLink = $(this);
                var scrollPoint = $(links.attr("href")).position().top;
                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 500);
            });

            $(window).scroll(function(){
                scrollHandle();
            });

            function scrollHandle(){
                var currentScrollPos = $(document).scrollTop();

                $('.tab-menu > li > a').each(function () {
                    var curLink = $(this);
                    var refElem = $(curLink.attr('href'));

                    if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                        $('.tab-menu > li').removeClass("active");
                        curLink.parent().addClass("active");
                    }
                    else {
                        curLink.parent().removeClass("active");
                    }
                });
            }

        }(window, window.jQuery));
        
}


// $(document).ready(function () {
//     //Smooth scrolling when click to nav
//     $('.tab-menu > li > a').click(function (e) {
//         e.preventDefault();
//         var curLink = $(this);
//         var scrollPoint = $(curLink.attr('href')).position().top;
//         $('body,html').animate({
//             scrollTop: scrollPoint
//         }, 500);
//     })

//     $(window).scroll(function () {
//         onScrollHandle();
//     });

//     function onScrollHandle() {
//         //Navbar shrink when scroll down
//         $(".main").toggleClass("navbar-shrink", $(this).scrollTop() > 50);

//         //Get current scroll position
//         var currentScrollPos = $(document).scrollTop();

//         //Iterate through all node
//         $('.tab-menu > li').each(function () {
//             var curLink = $(this);
//             var refElem = $(curLink.attr('href'));
//             //Compare the value of current position and the every section position in each scroll
//             if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
//                 //Remove class active in all nav
//                 $('.tab-menu > li').removeClass("active");
//                 //Add class active
//                 curLink.parent().addClass("active");
//             }
//             else {
//                 curLink.parent().removeClass("active");
//             }
//         });
//     }
// });
