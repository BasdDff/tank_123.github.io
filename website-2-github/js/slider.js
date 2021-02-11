$(document).ready(function(){
	
	new Swiper('.image-slider', {
		
		//Стрелки по бокам
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		
		//Кнопки навигации снизу
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets', //bullets - кнопки внизу
			clickable: true,
			dynamicBullets: true,
			//type: 'fraction', номера слайдов 1/3 2/3 и тд. вместо bullets
		},
		
		//Полоса прокрутки снизу
		/*scrollbar: {
			el: '.swiper-scrollbar',
			
			draggable: true //Возможность передвигать слайды по этой линии
		},*/
		
		 //Свайп влево вправо по картинке (в любом месте)
		simulateTouch: true,
		
		//Количество элементов(у нас картинок) в одном слайде
		slidesPerView: 1,
		//13:00
		
		//Бесконечность
		loop: true,
		
		//Автопрокрутка
		autoplay: {
			//Пауза между прокруткой
			delay: 5000,
			//Отключение после ручного использования
			disableOnInteraction: true
		}
	});
	
});