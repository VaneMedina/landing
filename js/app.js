console.log("hola")
var body = document.getElementById('body');


function scrollBody(){
    let scrollTopp = document.documentElement.scrollTop;
    console.log(scrollTopp);
    body.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -214, 0, 1);';
    body.style.opacity = '1;';
    body.style.pointerEvents = 'all;';
    //body.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,'+ scrollTopp * -0.3 +', 0, 1)';
}

window.addEventListener('scroll', scrollBody);
//console.log(scrollTop)

/*let alertMessage = document.querySelector(".alert__messages");
let buttonClose = alertMessage.querySelector('button[data-dismiss="alert"]');
let body = document.querySelector('body');
let alert = document.querySelector(".alert");


if(alert) {
    document.addEventListener('scroll', function() {
        if($(this).scrollTop() >= 95 && $(window).width() > 992) {
        var screenSize = window.innerWidth;
		var header = document.querySelector('header#header');
		alertMessage.classList.add('fixed-alert');
		var fixedHeight = alertMessage.offsetHeight + header.offsetHeight;
		body.style.paddingTop = alertMessage.offsetHeight + 57 + 'px';
		body.style.paddingBottom = alertMessage.offsetHeight + 'px';

        buttonClose.addEventListener('click', function() {
            body.style.paddingTop = 57 + 'px';
            body.style.paddingBottom = 0 + 'px';
        })
        }else if ($(this).scrollTop() <= 94 && $(window).width() > 992) {
            alertMessage.classList.remove('fixed-alert');

            buttonClose.addEventListener('click', function() {
                body.style.paddingTop = 0 + 'px';
                body.style.paddingBottom = 0 + 'px';
            });
        }
    });
}
buttonClose.addEventListener('click', function() {
    body.style.paddingTop = 0 + 'px';
    body.style.paddingBottom = 0 + 'px';
});
*/
$(document).ready(function(){
    $('.my-carousel').slick({
        slidesToShow: 4,
        infinite: false,
        variableWidth: true,
        responsive: [
			{
				breakpoint: 992,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
    });
  });
