$(document).ready(function () {
    svg4everybody({});
});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}

const mainSwiper = new Swiper('.swiper-container.main-slider', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,

    navigation: {
        nextEl: '.swiper-button-next.main-slider__btn-next',
        prevEl: '.swiper-button-prev.main-slider__btn-prev',
    },

})

const reviewsSwiper = new Swiper('.swiper-container.reviews-slider', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 100,
    breakpoints: {
        640: {
            slidesPerView: 2
        }
    },
    navigation: {
        nextEl: '.swiper-button-next.reviews-slider__btn-next',
        prevEl: '.swiper-button-prev.reviews-slider__btn-prev',
    },

})

const portfolioSwiper = new Swiper('.swiper-container.portfolio-slider', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    navigation: {
        nextEl: '.swiper-button-next.portfolio-slider__btn-next',
        prevEl: '.swiper-button-prev.portfolio-slider__btn-prev',
    },

})

$(document).ready(function() {
    $('.gallery__item').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: function(item) {
                return item.el.find('img').attr('title');
            }
        }
    })
})

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$dropdownToggle.on('click', function() {
    const $this = $(this);
    if ($this.parent().hasClass('show')) {
        if ($this.length && $this.attr('href')) {
            location.href = $this.attr('href');
        }
    } else {

    }
});

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});

$('.popover-icon-box').on('click', function() {
    const $this = $(this)
        $this.toggleClass('popover-icon-box_active')
})

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()!=0) {
            $('#toTop').fadeIn(500);
            $('#sticky-nav').addClass('nav-show');
        }
        else {
            $('#toTop').fadeOut(500);
            $('#sticky-nav').removeClass('nav-show');
        }
    });
    if ($(this).scrollTop()!=0) {
        $('#toTop').fadeIn();
    }
    else {
        $('#toTop').fadeOut();
    }
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});

$(function () {
    $('nav ul li a').each(function () {
        const location = window.location.href;
        const link = this.href;
        if(location === link) {
            $(this).parent().addClass('active');
        }
    });
});


// Rating
if ($('.rating #starrating').length) {
    $('input[name=rating]').on('change', function(e){
        $('#starrating').val($(e.target).val());
    })
}
if ($('.reviews__stars.rating').length) {
    $('.reviews__stars.rating').each(function(){
        var starValue = $(this).attr('data-star-value');
        $(this).find(`input[value=${starValue}]`).prop("checked", true);
    })
}

// Current day marking
function isToday() {
    const day = new Date().getDay()

    let week = document.querySelectorAll('[data-day]')
    for (let i = 0; i < week.length; i++) {
        const forAttr = week[i].getAttribute('data-day');
        if (forAttr == day) {
            week[i].style.color="#000"
        }
    }
}

isToday()