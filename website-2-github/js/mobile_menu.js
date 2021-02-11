$(document).ready(function(){
	
	jQuery('.mobile_menu').on('click', function(){ //Для мобильного меню
		let target1 = jQuery(this).data('target'); //вызываем метод data со значением data-атрибута target в тег <button> передали атрибут data-target
		jQuery(target1).toggleClass("navi-main-open"); //Метод toggleClass - добавляет или убирает(переключает) класс navi-main-open, когда мы будем
	}); //кликать по меню, и дальше в CSS описываем класс navi-main-open, чтобы когда он появлялся открывалось меню
	
});