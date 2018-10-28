$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<span style="font-size: 30px; color: #b3b3be;"><i class="fas fa-angle-left"></i></span>', '<span style="font-size: 30px; color: #b3b3be;"><i class="fas fa-angle-right"></i></span>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('#owl-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<span style="font-size: 30px; color: #b3b3be;"><i class="fas fa-angle-left"></i></span>', '<span style="font-size: 30px; color: #b3b3be;"><i class="fas fa-angle-right"></i></span>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
window.onscroll = function () { myFunction() };

var header = document.getElementById("myNavbar");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});
function hadleToggle(e) {
    if ($(this).children('label').hasClass('down')) {
        console.log('iku')
        $(this).children('label').addClass('up')
        $(this).children('label').removeClass('down')
    }
    else {
        $(this).children('label').addClass('down')
        $(this).children('label').removeClass('up')
    }
}

$('.mydown').click(hadleToggle)

$('.btn-number').click(function (e) {
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function () {
    $(this).data('oldValue', $(this).val());
});
