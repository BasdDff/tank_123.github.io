$(document).ready(function(){
	
	//При нажатии на кнопку Submit(Где обратный звонок) будет всплывающее окно

	//Еще один способ (Кнопка в самом низу сайта)
	document.addEventListener("click", function(e) {
		if (e.target.className=="youtube_link_size") {
			alert("click");
		}
	});
	
});