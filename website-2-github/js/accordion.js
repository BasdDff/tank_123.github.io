$(document).ready(function(){
	
	//4. Створити ефект аккордіон.
	$(".accordion-item_trigger").click(function(){
		//$(this).next(".accordion-item_content").toggle(); //toggle отображает/скрывает (none или block)
		$(this).next(".accordion-item_content").slideToggle(300);
	});
	
});