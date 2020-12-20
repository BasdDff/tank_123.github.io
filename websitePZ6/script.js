$(document).ready(function(){
	
	jQuery('.mobile_menu').on('click', function(){ //Для мобильного меню
		let target1 = jQuery(this).data('target'); //вызываем метод data со значением data-атрибута target в тег <button> передали атрибут data-target
		jQuery(target1).toggleClass("navi-main-open"); //Метод toggleClass - добавляет или убирает(переключает) класс navi-main-open, когда мы будем
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
	
	

	//ПЗ 6
	//1. При натисканні на зображення приховувати його
	let hide_images = $(".grid_repair_item").on('click',function(){ 
		hide_images.css( "display", "none" );
	});
	//2. Додати на сторінку форму, яка містить кілька елементів форми, при цьому при виборі певного значення в одному елементі 
	//відображати інший елемент;
	let fromCity = document.getElementById('formKharkiv');
	
	//let feedback_remove = document.getElementById('form');
	//let feedback_add = document.getElementById('Kharkiv_Form');
	let areaKharkiv = document.getElementById('areaKharkiv');
	
	fromCity.onclick = function () { 
		fromCity.style.display = "none";
		//jQuery(feedback_remove).remove();
		//jQuery(feedback_add).append('<div> Перейти на главную youtube </div>'); 
		areaKharkiv.style.display = "block";
	}
	//3. Створити ефект каруселі
	let dots = document.getElementsByClassName('dots-item'),
		dotsArea = document.getElementsByClassName('dots-block')[0],
		sliders = document.getElementsByClassName('slider-item');
		previousButton = document.getElementById('left-button'), 
		nextButton = document.getElementById('right-button'),
		slideIndex = 1;
		
		showSliders(slideIndex);
		
	function showSliders (n) {
		if(n < 1) {
			slideIndex = sliders.length;
		}
		else if(n > sliders.length) {
			slideIndex = 1;
		}
		for(let i = 0; i < sliders.length; i++) {
			sliders[i].style.display = "none";
		}
		for(let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('active');
		}
		sliders[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].classList.add('active');
	}
	
	function addSliders(n) {
		showSliders(slideIndex += n); 
	}
	previousButton.onclick = function() {
		addSliders(-1);	
	}
	nextButton.onclick = function() {
		addSliders(1);
	}
	function currentSlide(n) {
		showSliders(slideIndex = n);
	}
	dotsArea.onclick = function(e) {
		for(let i = 0; i < dots.length + 1; i++) {
			if(e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	}
	//4. Створити ефект аккордіон.
	$(".accordion-item_trigger").click(function(){
		//$(this).next(".accordion-item_content").toggle(); //toggle отображает/скрывает (none или block)
		$(this).next(".accordion-item_content").slideToggle(300);
	});
	//5. За допомогою Sortable створити переміщувані контейнери; 
	$(function() {
		$(".sortable").sortable();
		$(".sortable").disableSelection();
	});
	//6. Створити область вмісту з декількома панелями, кожна з яких пов'язана з заголовком в списку.
	$(function() {
		$('.tabs').tabs();
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
});