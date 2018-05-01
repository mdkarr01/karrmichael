// animations
// window width is at least 480px
var jmediaquery = window.matchMedia("(min-width: 578px)")
if (jmediaquery.matches) {
    $('.animate_service').css('opacity', 0);
    $('.animated-featured').css('opacity', 0);
    $('.featured-text').css('opacity', 0);
    $('.test-animation-1').css('opacity', 0);
    $('.test-animation-2').css('opacity', 0);

    var waypoint = new Waypoint({
        element: document.getElementById('services'),
        offset: '50%',
        handler: function () {
            $('.animate_service').addClass('animated fadeInUp');
        }
    })

    var waypoint = new Waypoint({
                element: document.getElementById('portfolio'),
                offset: '50%',
                handler: function () {
                    $('.animated-featured').addClass('animated rotateInUpLeft');
                    $('.featured-text').addClass('animated fadeInLeft');
                }
                // })

                var waypoint = new Waypoint({
                    element: document.getElementById('testimonial'),
                    offset: '50%',
                    handler: function () {
                        $('.test-animation-1').addClass('animated fadeInRight');
                        $('.test-animation-2').addClass('animated fadeInLeft');
                    }
                })
            }