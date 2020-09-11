/*В JavaScript есть переменные, функции, операторы, условия. */
//Функция alert - применяется, чтобы вывести какое-либо сообщение пользователю.
/*В JavaScript строки заключаются в "". Чтобы узнать произошла синтаксическая ошибка или нет, переходим на наш сайт
и там нажимаем "просмотреть код", далее в Console, и там будет написанно*/
//alert("привет");
	//alert("Привет мир!");

//Вся структура HTML называется DOM-Дерево
/*jQuery — набор функций JavaScript, фокусирующийся на взаимодействии JavaScript и HTML. ОН ДОЛЖЕН ПОДКЛЮЧАТЬСЯ ПЕРВЫМ,
до наших скриптов. Он облегчает нам жизнь.*/
//Чтобы использовать jQuery-фреймворк пишем jQuery или $
jQuery('document').ready(function(){ //Создание своей функции. Событие ready - вызывается, когда веб-страница полностью загружена.
//Чтобы тег <script> подключался в теге <head>, так как тег <head> исполняется до тега <body>, то наш код работать без этого не будет 
//Когда мы пишем 'document', то jQuery понимает что мы обращаемся всей веб-странице. Код который будет находиться в этой функции 
//сработает ТОЛЬКО ТОГДА, когда загрузиться вся веб-страница, и тег <body> загрузиться раньше, чем сработает <script>

	//После слова jQuery можем изменять html-теги, то есть, например <body>
	//Метод append добавляет что-либо на страницу. Добавляем в тег <body> и через точку вызываем метод append.
	jQuery('body').append('<a href="https://www.youtube.com/">Перейти на главную youtube </a>'); 
	
	//jQuery('div').remove(); //Метод remove удалит со страницы
	//jQuery('div,a').remove(); //в скобках можно перечислять сразу несколько тегов
	
	var p_clone; //Создаем переменную, в которую поместим клонируемый элемент
	p_clone = jQuery('#abzac').clone(); //Метод clone клонирует элемент
	jQuery('body').append(p_clone);
	
	jQuery('button').on('click',function(){ //Функция, (наш мини-калькулятор). После jQuery пишем, на какой элемент будем вешать
	//событие-клика(на тег <button>), метод on присоеденяет событие click к элементу(тегу <button>)
		var value1, value2;
		value1 = jQuery('#value1').val(); //Метод val "достает" значение элемента #value1 (через решетку берем id из нашего html-документа
		value2 = jQuery('#value2').val();
		//alert(value1 + value2); //В этом случае функция alert выдаст нам не прибавление чисел, а запишет их просто слитно в одну строку,
		//alert(value2); //так как метод val возвращает значение полей в виде строк, и происходит конкатенация строк(объеденение)
		//Можем в alert записать: ('Значение 1: ' + value1 + '\n' + 'Значение 2: ' + value2); \n - как endl в С++
		var value3;
		value1 = parseInt(value1); //Функция parseInt конвертирует наши числа которые были получены методом val в строковом виде обратно
		value2 = parseInt(value2); //в числа
		value3 = value1 + value2;
		//alert(value3); //Теперь выведется сумма чисел
		jQuery('#value3').html(value3); //Метод html, меняет содержимое тега, (у нас div), то есть вместо "result" 
		//будет написаны цифры(наш результат вычисления) 
	});
	jQuery('input').on('keyup',function(){ //Событие "keyup" посылается элементу в тот момент, 
		var value4, value5;  //когда пользователь отпустит нажатую клавишу на клавиатуре. on присоеденяет keyup к тегу <input>
		value4 = jQuery('#value4').val();
		value5 = jQuery('#value5').val();
		var value6;
		value4 = parseInt(value4);
		value5 = parseInt(value5);
		value6 = value4 - value5;
		jQuery('#value6').html(value6);
	});
	jQuery('input').on('keyup',function(){
		var value7, value8;
		value7 = jQuery('#value7').val();
		value8 = jQuery('#value8').val();
		var value9;
		value7 = parseInt(value7);
		value8 = parseInt(value8);
		value9 = value7 * value8;
		jQuery('#value9').html(value9);
	});
	
	
	var vvod1; //Функция prompt - нужна для ввода пользователем в окно для ввода
	//vvod1 = prompt('Введите ваше имя','Имя'); //Первый параметр - то что будут у нас спрашивать, второй - стандартное значение(можно оставить пустым ' ') 
	jQuery('#name').html(vvod1);
	
	var question;
	//question = confirm('Удалить калькулятор +- ?'); //Функция confirm - Принимает 1 параметр(вопрос), с помощью нее можем запрашивать 
	//if(question == true) { jQuery('#pribavlenie').remove(); jQuery('#otnimanie').remove(); } //подтверждения на какие-либо операции.
	//Когда нас спросят удалить ли элемент со страницы - он удалиться если нажмем "ОК"
	 
	 
	 
		//ПЕРЕМЕННЫЕ 
	var myNumber = 10.454; 
	var myString = "Привет, мир!";
	var myBoolean = true; //false 
	var myNull = null; //null = пустота
	var myUndefined = undefined; //значение undefined = отсутствует(никакого значения нет) (по умолчанию если не дать значение переменной,
	//то у нее будет значение undefined)
	
	
	
		//ЧИСЛА
	//1 Number
	//В JavaScript мы можем работать с примитивными типами данных как с объектами.
	//В JavaScript есть специально встроенный объекты, с набором методов которые выполняют различные операции.
	var var1 = 10; //integer 
	var var2 = 10.10 //float
	var var3 = 10e3; //e - степень, то есть 10е3 = 10000 //pow
	console.log(Number.MAX_SAFE_INTEGER); //Number - объект, метод MAX_SAFE_INTEGER - показывает максимальное число int = 2e53 - 1 = 9007199254740991.
	console.log(Math.pow(2, 53) - 1); //Math - объект, выполняет различные математические операции. Метод pow - возводит число в степень.
	console.log(Number.MIN_SAFE_INTEGER);  //Это константа, как и MAX_SAFE_INTEGER.
	console.log(Number.MAX_VALUE); //Максимально допустимое число, с которым умеет работать JavaScript
	console.log(Number.MIN_VALUE); 
	console.log(Number.POSITIVE_INFINITY); //+ бесконечность
	console.log(Number.NEGATIVE_INFINITY); //- бесконечность
	console.log(Number.NaN); //Not a Number - спец. значение которое не является числом, но тип числовой.
	console.log(typeof NaN); //получаем тип number
	const var4 = 2 / undefined; //объявили константу 
	console.log(Number.isNaN(var4)); //Метод isNaN - проверяет, является ли это число NaN'ом
	console.log(Number.isFinite); //Метод isFinite - проверяет, является ли это число конечным
	
	var varInt = '40';
	var varFloat = '40.42';
	console.log(Number.parseInt(varInt) + 2); //Методы parse можно вызывать и как функции, без Number. 
	console.log(Number.parseFloat(varFloat) + 2); //Методы parse - преобразовывают из строкового значения, в другие(чтобы избежать конкатенации)
	
	console.log(0.4 + 0.2); //Получим не 0.6, а 0.6000000000000001 , все из-за того, как устроен JS на низком уровне
	console.log(parseFloat((0.4 + 0.2).toFixed(1)));//чтобы получить нормальный результат. Метод toFixed - отбрасывает и округляет знаки после .
	//Этот метод не просто отбрасывает, а округляет. В параметр пишем кол-во знаков, необходимых нам после . Так как после использования
	//метода toFixed значение превратилось в строковый тип, используем метод parseFloat и превращаем обратно в числовой тип данных.
	var newNumber = 2.457; //Допустим, нам нужно чтобы был только 1 знак после точки(упростить до десятых)
	newNumber = newNumber.toFixed(1); 
	console.log(newNumber); 

	//2 Math
	console.log(Math.pow(2, 53) - 1); //Math - объект, выполняет различные математические операции. Метод pow - возводит число в степень.
	//При работе с дробными числами, нам может понадобиться округление. 
	console.log(Math.round(5.65)); //Метод round - отвечает за округление(по правилам математики)
	console.log(Math.ceil(5.25)); //Метод ceil - всегда округляет в большую сторону
	console.log(Math.floor(5.75)); //Метод floor - всегда округляет в меньшую сторону
	console.log(Math.trunc(100.1000)); //Метод trunc - работает как toFixed, только удаляет сразу всю дробную часть.
	var p1 = 5;
	var p2 = 4; //Чтобы извлечь корень нужно взять объект Math и у него вызвать метод sqrt
	console.log(Math.sqrt(p1+p2)); 
	console.log(Math.E); //Метод E - число экспонента
	console.log(Math.PI) //Метод PI - число PI
	console.log(Math.abs(-100)); //Метод abs - модуль
	console.log(Math.max(12, 32, 43, 45)); //Метод max - выбирает максимальное число из списка
	console.log(Math.min(12, 32, 43, 45)); //Метод min - выбирает минимальное число из списка
	console.log(Math.random());
	function getRandom(min, max) { //Функция генерирующая случайные числа в заданном диапазоне (дробные)
		return Math.random() * (max - min) + min  
	}
	console.log(getRandom(10, 20));
	function getRandomInt(min, max) { ////Функция генерирующая случайные числа в заданном диапазоне (целые)
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
	console.log(getRandomInt(10, 20));
	
	//3 BigInt
	//BigInt - тип данных, нужен для того чтобы работать с числами которые больше чем 9007199254740991(int)
	console.log(9007199254740991999n - 900719925474099199n); //приписываем к числу букву n
	//С BigInt мы не можем работать с десятичными числами
	console.log(parseInt(10n) - 4); //Чтобы работать вместе с BigInt и Int нужно сначала преобразовать BigInt в Int. Получим 6
	console.log(10n - BigInt(4)); //Или так. Получим 6n
	
	
	
		//СТРОКИ
	console.log(myString.toLowerCase()); //Метод toLowerCase - меняет регистр всех букв на маленькие. Не принимает параметров
	console.log(myString.toUpperCase()); //Метод toUpperCase - меняет регистр всех букв на большие. Не принимает параметров
	var name = 'Max';
	var age = 18;
	var Info1 = 'Hello, my name ' + name + ' and my ages ' + age + ' age.'  
	console.log(Info1);
	var Info = `Hello, my name ${name} and my ages ${age} age.`; //так удобнее записывать, без конкатенаций, и не запутаемся.
	console.log(Info); //в {} после $ мы можем передавать переменную либо функцию 
	
	var test = 'Mozi';
	console.log(test.length); //Метод length - узнает размер строки(или массива)
	console.log(test.charAt(2)); //Метод charAt - с его помощью можем узнать на какой позиции находится определенный символ = z
	console.log(test.indexOf('ozi')); //Метод indexOf - проверяет, есть ли такая подстрока в нашей переменной строки, в результат выдает с какого индекса начинает идти то, что мы передали параметром
	console.log(test.startsWith('Moz')); //Метод startsWith - проверяет, начинается ли наша строка с этих символов(передаваемых в параметре)
	console.log(test.toLowerCase().startsWith('moz'));
	console.log(test.endsWith('ra')); //Метод endsWith - проверяет, заканчивается ли наша строка с этих символов(передаваемых в параметре)
	console.log(test.repeat(3)); //Метод repeat - получаем строчку, повторенную определенное кол-во раз
	var var5 = '   password   ';
	console.log(var5.trim()); //Метод trim - получаем строку без пробелов
	console.log(var5.trimLeft()); //если хотим убрать пробелы слева
	console.log(var5.trimRight()); //если хотим убрать пробелы справа
	
	function logPerson(s, name, age){
		if (age < 0) { age = 'Еще не родился' };
		return `${s[0]} ${name} ${s[1]} ${age} ${s[2]}`;
	}
	var personName = 'Max';
	var personAge = '18';
	var output = logPerson`Name: ${personName}, Age: ${personAge}`;
	console.log(output);
	var personName2 = 'Pid';
	var personAge2 = '-7';
	var output = logPerson`Name: ${personName2}, Age: ${personAge2}`;
	console.log(output); //Мы можем использовать такой альтернативный синтаксис 
	
	
	
		//МАССИВЫ
	//1
	var names = ["Gerv", "Kodg", "Lovb"]; 
	console.log(names[2]); // = Array
	console.log(names[0].toUpperCase()); // = MAX (выведет большими буквами)
	names[1] = "Lof"; //изменили элемент массива
	console.log(names); //Так весь массив выведется в консоль
	for(var i = 0; i < names.length; i++) 
	{
		console.log(names[i]); 	
	}
	console.log(names.length); //Метод length - узнает размер массива (или строки)
	for (var nameeee of names) //цикл for of (вывел одно и тоже 4 раза ???) ?????????????????????
	{
		console.log(names); 	
	}			
	
	//Массив который мы создали, содержит большое количество различных методов
	names.push('Dthn'); //Метод push - добавляет элемент в конец массива
	names.unshift('Kodf'); //Метод unshift - добавляет элемент в начало массива
	console.log(names); 
	//names.shift(); //Метод shift - удаляет элемент с начала массива
	//names.pop(); //Метод pop - удаляет элемент в конце массива
	var firstName = names.shift(); //Если нам нужно удалить первый элемент из массива, и еще поработать с ним, то можно занести этот элемент в переменную.
	var lastName = names.pop();
	
	console.log(names.indexOf('Kodf')); //Метод indexOf - возвращает индекс того элемента, который мы ищем этот метод подходит
	//для примитивных типов данных (Т.е. когда массив состоит не из объектов) 
	var indexName = names.indexOf('Dthn'); console.log(names[indexName]); names[indexName] = 'Kilp';
	
	console.log(names.reverse()); //Метод reverse - порядок элементов в массиве меняется на обратный
	console.log(names.includes('Kilp'));  //Метод includes - проверяет, есть ли такой элемент в массиве(возвращает true или false) 
	
	var text = 'String Int Double'; //Если нам нужно поменять порядок элементов в строке на обратный:
	var reverseText = text.split('').reverse().join(''); //Метод split - превращает строку в массив. В котором запятые , делят строку на элементы
	console.log(reverseText); //массива. Если передать в параметр пустую строку '' то получим массив букв всей этой строки.
	//И так как наша строка уже является массивом а не строкой, то можем использовать метод reverse. 
	//Метод join - превращает массив в строку, указываем '' чтобы убрать все запятые. 
	
	//Есть методы, высокого порядка(findIndex и find к ним относятся). Но есть методы, которые позволяют нам получать новые
	//данные из уже существуещего массива, например преобразование всего массива к новому, или фильтрация массивов.
	var upperCaseNames = names.map(namee => { //Метод map - возвращает нам новый преобразованный как-либо массив.
		return namee.toUpperCase(); //создаем новый массив и переводим весь наш массив namee-строк в верхний регистр
	});	
	console.log(upperCaseNames);
	//2
	var fib = [1, 1, 2, 3, 5, 8, 13]; //массив чисел	
	var pow2Fib = fib.map(num => num ** 2);//возведём каждый из элементов в квадрат. 
	console.log(pow2Fib); //Метод map - вернул нам новый массив(pow2Fib), в котором все числа были возведены в ^2 
	var sqrt = num => Math.sqrt(num); //создадим функцию извлечения квадрата из массива
	var sqrtFib = pow2Fib.map(sqrt); //Метод map - вернул нам новый массив (sqrtFib), в котором из всех чисел был взят корень
	console.log(sqrtFib); 
	
	console.log(fib); //[1, 1, 2, 3, 5, 8, 13] допустим, нам нужно отфильтровать этот массив, избавиться от ненужных элементов
	var newFib = fib.filter(num => { //Метод filter - позволяет убрать ненужные элементы массива
		if (num > 3) {return num;} 
	});
	console.log(newFib);
	//3 
	var people = [
		{ name: 'Vi', surname: 'Vor', budget: 4200}, 
		{ name: 'El', surname: 'Elo', budget: 3500},
		{ name: 'Ek', surname: 'Miv', budget: 1700}, //создали 3 объекта
	]
	var indexName2 = people.findIndex(function(person) { //Метод findIndex - тоже самое как и indexOf, только для объектов
		//console.log(person); //в параметр функции передаем слово (например person) с помощью которого будем обращаться 
 		return person.surname == 'Miv'; //к полям объектов
	});
	console.log(indexName2);
	
	var person = people.find(function(person) { //Метод find - позволяет найти нужный объект (вводя значение какого-либо поля)
 		return person.surname == 'Miv'; 
	});
	console.log(person);
		//можно сократить код, и написать в одну строчку через стрелочную функцию
		//var person = people.find(person => person.surname == 'Miv');
	var findedPerson;
	for (var person of people) {
		console.log(person);
		if (person.surname == 'Vor') {findedPerson = person;} //Нашли нужный нам объект через for и if
	}
	console.log(findedPerson);
	
	var allBudget = people.filter(person => person.budget > 2000).reduce(function(acc, person) { 
	//Метод reduce - позволяет объеденять все значения массива в одно значение
		acc += person.budget; //принимает первым параметром функцию(с 2 параметрами, первый - туда будет записываться сумма   
		return acc; //(например чисел), второй - придумываем название для объектов через которое будем обращаться к полю budget)
	}, 0) //а вторым начальное значение, с которого мы хотим считать
	console.log(allBudget); 
	//Это Цепь Вызовов - сначала вызываем метод filter возвращает новый массив, а у массивов есть метод reduce
	


		//ФУНКЦИИ
	//1
	function foo(x, y)
	{
		//console.log("Hello World");
		return x + y;
	}
	console.log(foo(10, 100));
	
	function calculateAge(year)
	{
		return 2020 - year;
	}
	function infoAboutHuman(name, year)
	{
		var age = calculateAge(year);
		console.log('Имя ' + name + ' Возраст ' + age );
	}
	infoAboutHuman('Maksim', 2002);
	
	//2 В JavaScript есть несколько способов создания функций. //Function Declaration - это обычный способ создания функций
	var infoAboutHuman2 = function infoAboutHuman2(name) { //Function Expression - способ создания функции, записываем ее в 
		console.log('Имя2 - ' + name); //переменную. 
	}		
	infoAboutHuman2('Maxi');
	//Отличие Declaration от Expression в том, что мы можем вызывать Declaration функцию когда захотим(до ее создания), 
	//а Expression функцию можно вызывать только после создания. 
	console.log(typeof infoAboutHuman); //typeof покажет нам, что это тип function, но на самом деле типа данных function 
	//не существует. Функции - это объекты. 
	console.dir(infoAboutHuman); //Метод dir - дает нам информацию о функции
	console.log(typeof infoAboutHuman2);//тип данных function
	
	//3 Анонимные функции
	let counter = 0;
	const interval = setInterval(function(){ //Метод setInterval - позволяющий нашей анонимной функции срабатывать через
	//определенное количество времени, передаем вторым параметром значение //в милисекундах 
		if (counter == 5) {clearInterval(interval);} //Метод  clearInterval - остановит нашу функцию 
		else {console.log(++counter);} 
	}, 1000); //Каждые 1000 милисекунд будет срабатывать наша анонимная функция 
	setTimeout(function test10(){ //Метод setTimeout - создает задержку до того как сработает функция
		console.log('test'); //По аналогии присутствует Метод clearTimeout
	}, 5000) 
	
	//4 Стрелочные функции
	function test(name) {
		console.log('Hello ' + name);
	}
	var arrow = (name) => { //Стрелочная функция arrow
		console.log('Hello ' + name);
	}
	arrow('Max');
	var arrow2 = name => console.log('Hello ' + name); //Если у нас всего 1 параметр, то можем записать его без ()скобок,
	//и если функция состоит из 1 строки, то можем записать ее без {}скобок. Если параметров нет, то нужно указать пустые ().
	//console.log('Hello ' + name); - такая конструкция по умолчанию делает return (return писать ненадо)
	
	//5 Параметры по умолчанию
	var sum = (a = 0, b = 0) => a + b;  //Если мы не передадим один из параметров, то будет использовано значение, которое мы
	console.log(sum(41)); //дали ему по умолчанию
	
	function sumAll(...all) { //Допустим, у нас есть функция, которая будет принимать неограниченное количество параметров
		console.log(all);//Оператор ... собирает все наши значения параметров и собирает из них массив all
		var result = 0;
		for(var num of all) { //цикл for of. 
			result += num;
		}
		return result;
	}
	var res = sumAll(1, 2, 3, 4, 5);
	console.log(res);
	
	//6 Замыкания
	//Замыкания - такое явление, когда мы из одной функции возвращаем другую
	function createMember(name) {
		return function(lastName) {
			console.log(name + lastName);
		}
	}
	var logWithLastName = createMember('Vlad'); //Имя Vlad сохранилось в анонимной функции return и каждый раз, когда мы будем 
	console.log(logWithLastName('Minin')); //вызывать эту функцию, она уже замкнула у себя этот параметр(name), 
	console.log(logWithLastName('Pers')); //а параметр lastName он уже меняется.
	console.log(logWithLastName('Loz')); //Таким образом мы можем делать приватные переменные (так как нативного механизма
	//позволяющего сделать приватные переменные нет).	
	
	
	
		//ОБЪЕКТЫ. Однако, в JavaScript нет концепции класса. 
	var myObject = { //создаем объект (составной тип данных)
		name: "Максим", //Поля объекта
		age: 25,
		languages: ['Ru', 'En', 'Ua'], //полем может быть массив
		'complex key': 'Complex Value ', //ключ ?
		['key_' + (1 + 3)]: 'Computed Key', //ключ ?
		getFullInfo: function() //Создаем метод - указываем его название, дальше говорим что это функция
		{
			return this.name + " " + this.age; //Если находимся внутри объекта, то this говорит что мы обращаемся к текущему объекту(в котором находимся)
		},
		info() {
			console.info('Информация про человека по имени:', this.name);
		}
	};
		//console.log(myObject.name);
	myObject.name = "Петя";
		//console.log(myObject.name);
		//console.log(myObject.getFullInfo());
	myObject.languages.push('By'); //добавляем элемент в конец массива
		//console.log(myObject);
	
	//console.log(myObject.complex key); //так не можем получить доступ к ключу
	var ageKey = 'age';
	console.log(myObject[ageKey]);
	console.log(myObject['complex key']); //так обращаться к ключам нужно тогда, когда мы используем динамические составляющие
	
	//myObject['key_4'] = undefined; //Ключ еще находиться в объекте со значением undefined
	delete myObject['key_4']; //Ключ удалится из объекта
	console.log(myObject);
	console.log(myObject['key_4']);
	
	//Деструктуризация 
	var name = myObject.name; //записываем поле в отдельную переменную
	var age = myObject.age;	
	var languages = myObject.languages; 
	console.log(name, age, languages); //Чтобы не дублировать код, можно писать в новом синтаксисе
	var {name, age = 10, languages} = myObject; //	<-- используем деструктуризацию
	console.log(name, age, languages); //age = 10 - это значение по умолчанию, если у age будет значение undefined
	
	//В массивах мы можем использовать циклы, позволяющие делать нам итерации по элементам массива. С объектами так сделать нельзя.
	//Они не итерируемые. Но все же мы можем это реализовать.
	for(var key in myObject) { //цикл for in. Цикл for in опасен тем, что он бежит не только по ключам объекта, 
	//но также может заходить в его прототип, чтобы избежать проблем, нужно записать проверку
		if (myObject.hasOwnProperty(key)) { 
		//Метод hasOwnProperty - используется для определения того, содержит ли объект указанное свойство в качестве собственного
	//свойства объекта; в отличие от оператора in, этот метод не проверяет существование свойств в цепочке прототипов объекта.
			console.log('key:', key); //key - выводит нам названия полей(без их значений) объекта
			console.log('value:', myObject[key]); //myObject[key] - так выведет значения полей
		} 
	}
	//Можем итерироваться по объекту без цикла. 
	var keys = Object.keys(myObject); //Глобальный объект Object и у него есть Метод keys - получает ключи(названия полей) 
		//объекта (он не идет по прототипу)
	console.log(keys); //получаем массив состоящий из ключей объекта(названия полей)
	keys.forEach((key) => { //Так как keys это массив, можем использовать цикл.
		console.log('key:', key); //Цикл forEach - делает итерации по массиву, принимает в себя функцию с параметром  
		console.log('value:', myObject[key]); //каждого итерируемого элемента - key
	});
	
	//Context 
	myObject.info();
	
	var logger = {
		keys() {
			console.log('Object keys:', Object.keys(this));
		},
		keysAndValues() {
			Object.keys(this).forEach( key => { //В таком случае обычную функцию использовать нельзя, потому что 
				console.log(`"${key}": ${this[key]}`) //function задает свой собственный Context, 
			}) //И this здесь относится к текущему объекту, то function создает новый Context. Это можно исправить 2-мя способами:			
		},
		keysAndValuess() {
			var self = this; //записать this в отдельную переменную 
			Object.keys(this).forEach(function(key) { 
				console.log(`"${key}": ${self[key]}`) //и использовать ее здесь
			})
		},
		keysAndValuesss() {
			Object.keys(this).forEach(function(key) { 
				console.log(`"${key}": ${this[key]}`) 
			}.bind(this)) //.bind(this) можем вызвать метод bind
		},
		//Стрелочные функции не создают собственный Context 
		
		withParams(top = false, between = false, bottom = false) {
			if (top) {
				console.log('-------- Start --------');
			}
			Object.keys(this).forEach( (key, index, array) => { 
				console.log(`"${key}": ${this[key]}`)  
				if (between && index != array.length - 1) {
					console.log('----------------');
				}
			}) 
			if (bottom) {
				console.log('-------- End --------');
			}
		}
	};
	var bound = logger.keys.bind(myObject); //B JS функции и методы - являются объектами, а это значит что 
	//мы можем вызвать у них свои методы то есть вызываем метод у метода. Метод bind - привязывает определенный контекст который
	//мы сами выберем, с помощью этого метода мы говорим "пожалуйста в этом методе (на 425 строке) 'this' будет тем объектом
	//который мы сами передадим 
	bound(); //получаем массив ключей объекта 
	logger.keys.call(myObject); //Метод call - аналогично bind, только сразу, без записи в переменную
	logger.keysAndValuesss.call(myObject); 
	
	logger.withParams.call(myObject, true, true, true);
	logger.withParams.apply(myObject, [true, true, true]); //Метод apply - аналогично call, за одним исключением: постоянных
	//принимает в себя всегда 2 параметра: myObject и массив параметров которые нужны для нашей функции
	
	
	
		//Асинхронность. JavaScript - однопоточный язык. 
		//Event Loop - Параллелизм/Многопоточность в JavaScript работает за счёт цикла событий (event loop)
		//Таймауты и интервалы.
		var timeout = setTimeout( () => {
			console.log('After timeout'); 
		}, 2000) //Эта операция была асинхронной
		clearTimeout(timeout); //отключили таймаут
		
		var delay = (callback, wait = 5000) => {
			setTimeout(callback, wait); //Первым параметром setTimeout принимает в себя функцию, 
		} //но мы не можем ее описать т.к. работаем с функцией delay, поэтому пишем ее в параметры функции delay
		delay( () => {
			console.log('After 3 seconds');
		}, 3000) //если не укажем здесь кол-во милисекунд, то будет значение по умолчанию wait = 5000
		
		//В JavaScript присутсвует интересный механизм который позволяет работать нам с асинхронным кодом более удобно
		//Он называется Promise
		var delay = (wait = 1000) => {
			var promise = new Promise( (resolve, reject) => { //Promise - глобальный класс 
				setTimeout( () => {
					resolve(); 
					//reject('Что-то пошло не так'); //эта строчка перейдет в блок catch в err
				}, wait) 
			})  
			return promise;
		}
		delay(2500)
		.then( () => { //сюда пишем код
			console.log('After 2,5 seconds');
		})  
		.catch(err => console.error('Error:', err)) //здесь обработка ошибок
		.finally( () => console.log('Finally')); //финал :)
		//Когда приходиться работать с большим количеством асинхронного кода, нам пригодяться Promise. Когда идут подряд
		//несколько вложенных функций, то сложно управлять такой структурой кода. Promise - предназначены для того, чтобы убрать
		//большой уровень вложенности. В Promise, в методе .then мы можем возвращать другой Promise и не переходить на более
		//глубинный уровень.
		var getData = () => new Promise(resolve => resolve([
			1, 1, 2, 3, 5, 8, 13 
		]))
		getData().then(data => console.log(data)); 
		
		async function asyncExample() {
			await delay(3000); //Чтобы сначала выполнилась функция delay, а только потом getData, нам нужно написать 
			var data = await getData(); //await, но чтобы написать await нужно сделать функцию асинхронной (дописать в начале async)
			console.log('Data', data); //вместо then можем записать так
		}  
		asyncExample(); 
		//Что делать если появилась какая-то ошибка?
		
		
		
		

		var arrow = (name) => { //Стрелочная функция arrow
			console.log('Hello ' + name);
		}
		
		var arrow2 = name => console.log('Hello ' + name) //Стрелочная функция arrow
		
	 
	
	
	
	
	
	
});