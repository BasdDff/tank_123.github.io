$(document).ready(function(){
	
	//Анимации
	//У каждого объекта, у которого есть класс _anim-items при достижении скроллом 1/4 его высоты либо 1/4 высоты окна браузера если
	//высота объекта больше чем окно браузера, то ему добавляется класс _active
	let animItems = document.querySelectorAll('._anim-items');
	if (animItems.length > 0) { //Проверка есть ли такие классы (querySelectorAll возвращает массив)
		window.addEventListener('scroll', animationOnScroll); //Добавляем событие при скролле
		function animationOnScroll() {
			for(let i = 0; i < animItems.length; i++) {
				let animItem = animItems[i]; //Получение каждого элемента массива
				let animItemHeight = animItem.offsetHeight; //Получение высоты объекта
				let animItemOffset = offset(animItem).top; //Получение позиции объекта относительно верха(насколько объект находиться ниже чем верх страницы)
				let animStart = 4; //Коэффициент, регулирует момент старта анимации
				
				let animItemPoint = window.innerHeight - animItemHeight / animStart; //Высота окна браузера - высота объекта / коэф.
				if(animItemHeight > window.innerHeight) { //Если анимированный объект выше высоты окна браузера
					animItemPoint = window.innerHeight - window.innerHeight / animStart; //Высота окна браузера - высота окна браузера / коэф.
				}
				
				if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				//Если прокрутили > чем позиция объекта - точка старта и прокрутили < чем позиция объекта + высота, тогда добавляем класс _active
					animItem.classList.add('_active');
				}
				else {  
					if(!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}
				}
			}
		}
		function offset(el) {
			let rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		setTimeout(() => {
			animationOnScroll();
		}, 3000);
		
	}
	
});