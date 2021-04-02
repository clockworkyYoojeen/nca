$(document).ready(function () {
    $('.about-us__slider').slick({
        nextArrow: '<button type="button" class="about-us__nav-arrow slick-next"></button>',
        prevArrow: '<button type="button" class="about-us__nav-arrow slick-prev"></button>',
    })
    $('.our_team__slider').slick({
        nextArrow: '<button type="button" class="our_team__slider-button slick-next"></button>',
        prevArrow: '<button type="button" class="our_team__slider-button slick-prev"></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // autoplay: true,
        speed: 500,
        easing: 'ease',
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    })
    let initName = document.querySelector('.our_team__slider-item.slick-current').dataset.name
    let initPosition = document.querySelector('.our_team__slider-item.slick-current').dataset.position

    const employeeNameEl = document.querySelector('.employee_name')
    const employeePosEl = document.querySelector('.employee_position')

    employeeNameEl.innerHTML = initName
    employeePosEl.innerHTML = initPosition

    $('.our_team__slider').on('afterChange', function (slick, currentSlide) {
        let currentInd = currentSlide.currentSlide
        let name = currentSlide["$slides"][currentInd].dataset.name;
        let position = currentSlide["$slides"][currentInd].dataset.position;

        employeeNameEl.innerHTML = name
        employeePosEl.innerHTML = position

    })

    $('.trust__slider').slick({
        nextArrow: '<div class="arrow-right"></div>',
        prevArrow: '<div class="arrow-left"></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    })

    $('.portfolio__slider').slick({
        nextArrow: '<div class="arrow-right"></div>',
        prevArrow: '<div class="arrow-left"></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.portfolio__slider2',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    })

    $('.portfolio__slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    })

    // $('.portfolio').on('click', function () {
    //     $.ajax({
    //         url: "/test.js?ind=1",
    //         type: "GET",
    //         success: function (data) {
    //             alert('fine!')
    //             console.log(data);
    //         },
    //         error: function () {
    //             alert('hmmmm...')
    //         }
    //     });
    // })
})
