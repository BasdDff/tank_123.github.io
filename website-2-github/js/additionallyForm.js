$(document).ready(function(){
	
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
	
});