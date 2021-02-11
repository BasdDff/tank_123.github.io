$(document).ready(function(){
	
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