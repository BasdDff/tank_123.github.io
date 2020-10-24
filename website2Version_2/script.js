$(document).ready(function(){
	$(".slider").owlCarousel({ //Используем класс slider, а не служебный owl-carousel, так как если будем использовать этот плагин
		items: 1, //для нескольких слайдеров, то могут быть конфликты. Слайдер будет инициализироваться по нашему классу slider.
		loop: true, //Слайды идут бесконечно, повторяясь
		autoplay: true, //Автоматическая прокрутка слайдов
		autoplayTimeout: 5000 //Время за которое будут обновляться слайды
	});
  
	jQuery('.mobile_menu').on('click', function(){ //Для мобильного меню
		var target1 = jQuery(this).data('target'); //вызываем метод data со значением data-атрибута target в тег <button> передали атрибут data-target
		jQuery(target1).toggleClass("navi-main-open"); //Метод toggleClass - добавляет или убирает класс navi-main-open, когда мы будем
	}); //кликать по меню, и дальше в CSS описываем класс navi-main-open, чтобы когда он появлялся открывалось меню
  

  
});