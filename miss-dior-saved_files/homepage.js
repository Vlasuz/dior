jQuery(function($){initSlick()});function initSlick(){jQuery(".carousel-list .slideset").not(".js-tab-hidden .slideset").slick({infinite:false,dots:false,speed:300,slidesToShow:7,slidesToScroll:7,responsive:[{breakpoint:2E3,settings:{slidesToShow:6,slidesToScroll:6}},{breakpoint:1600,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:1280,settings:{slidesToShow:4,slidesToScroll:4}}]})}var Homepage={};
(function($){Homepage.initSlideShow=function(){$("div#imageslider").fadeGallery({slides:"li.slide",event:"click",autoRotation:true,switchTime:5E3,animSpeed:500,autoHeight:true,generatePagination:"div.switcher"});return this};$(document).ready(function(){Homepage.initSlideShow();setSliderHeight()});$(window).resize(function(){setSliderHeight()});function setSliderHeight(){}})(jQuery);
