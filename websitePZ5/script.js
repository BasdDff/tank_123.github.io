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
			clickable: true
		},
	});
  
	jQuery('.mobile_menu').on('click', function(){ //Для мобильного меню
		let target1 = jQuery(this).data('target'); //вызываем метод data со значением data-атрибута target в тег <button> передали атрибут data-target
		jQuery(target1).toggleClass("navi-main-open"); //Метод toggleClass - добавляет или убирает класс navi-main-open, когда мы будем
	}); //кликать по меню, и дальше в CSS описываем класс navi-main-open, чтобы когда он появлялся открывалось меню
			
		
			
	//ПЗ 5		
	//При нажатии на кнопку Submit(Где обратный звонок) будет всплывающее окно

	//Еще один способ (Кнопка в самом низу сайта)
	document.addEventListener("click", function(e) {
		if (e.target.className=="youtube_link_size") {
			alert("click");
		}
	});
	
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
		
	//Валидация
	let form = document.getElementById('form');
	form.addEventListener('submit', formSend);
	
	async function formSend(event) {
		event.preventDefault(); //preventDefault - запрещаем стандартную отправку формы
		
		let error = formValidate(form);

		//let formData = new FormData(form);

		if(error === 0) {
			/*$('.form').off('keydown');*/
			/*$("#form").unbind("submit", preventDefault);*/
			//$("#form").get(0).error = true;
			 //$(this).trigger('anyEvent');
			$('#form').unbind('submit').submit();


			alert('Спасибо за обращение!');
		}
		else {
			alert('Заполните обязательные поля!');
		}
	}
	
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req'); //req - required добавим этот класс в html к тем полям которые необходимо проверять
		
		for(let i = 0; i < formReq.length; i++) {
			let input = formReq[i];
			formRemoveError(input);
			if(input.classList.contains('_email')) {
				if(emailTest(input)) {
					formAddError(input);
					error++;
				}
			}
			else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			}
			else {
				if(input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	

	
	
	
	
	
	
	
	
	
	

  
});