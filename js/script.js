
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});


var visible = false;
function openList(id){
   if (visible) {
        document.getElementById(id).style.display = 'none';
        visible = false;
    } else {
        document.getElementById(id).style.display = 'block';
        visible = true;
    }
};


var flag = true;
function openPalette(id){
	if (visible) {
        document.getElementById(id).style.display = 'none';
        visible = false;
    } else {
        document.getElementById(id).style.display = 'flex';
        document.getElementById('colors__hidden').classList.add('open');
        visible = true;
    }
};


if($('.carusel__body').length>0){
	$('.carusel__body').slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: false,
		accessibility:false,
		//slidesToShow: 2,
		pauseOnHover:false,
		autoplaySpeed: 2500, 
		adaptiveHeight:true,
		 responsive: [
		 	{
		      breakpoint: 3840,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4,
		        arrows: true		        

		      }
		    },
		    {
		      breakpoint: 1441,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4,
		        arrows: true
		      }
		    },
		      {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        arrows: true		        
		      }
		    },

		     {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    },

		    {
		      breakpoint: 360,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
}

if($('.slider__body').length>0){
	$('.slider__body').slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: false,
		accessibility:false,
		slidesToShow:1,
		pauseOnHover:false,
		autoplaySpeed: 2500, 
		adaptiveHeight:true,
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
				
			}
		}]
	});
}


