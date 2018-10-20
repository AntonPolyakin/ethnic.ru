<!DOCTYPE html>
<html>
<head>
<title>Этник - Переводчик</title>

	<link rel="icon" href=​"favicon.png" type="image/png">
	<link rel="stylesheet" type="text/css" href="style.css?ver=<?php echo date(dmYHis);?>" >
<link rel="stylesheet" href="virtual-keyboard.css?ver=<?php echo date(dmYHis);?>">

	<meta charset="UTF-8">
	<meta name="keywords" content="переводчик, словарь, перевод текста">
	<meta name="description" content="Онлайн переводчик текста">


<meta property="og:url" content="<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Этник Переводчик" />
<meta property="og:description" content="Онлайн переводчик текста" />
<meta property="og:image" content="/logo.png" />
<meta property="fb:app_id" content="идентификатор_вашего_приложения_Facebook"></meta>

<meta name="twitter:card" content="summary"></meta> 
<meta name="twitter:title" content=""></meta> 
<meta name="twitter:description" content=""></meta> 
<meta name="twitter:image" content=""></meta>


<!--feedback php-->
<?php
	$msg_box = ""; // в этой переменной будем хранить сообщения формы
	
	if($_POST['btn_submit']){
		$errors = array(); // контейнер для ошибок
		// проверяем корректность полей
		if($_POST['user_name'] == "") 	 $errors[] = "Поле 'Ваше имя' не заполнено!";
		if($_POST['user_email'] == "") 	 $errors[] = "Поле 'Ваш e-mail' не заполнено!";
		if($_POST['text_comment'] == "") $errors[] = "Поле 'Текст сообщения' не заполнено!";

		// если форма без ошибок
		if(empty($errors)){		
			// собираем данные из формы
			$message  = "Имя пользователя: " . $_POST['user_name'] . "<br/>";
			$message .= "E-mail пользователя: " . $_POST['user_email'] . "<br/>";
			$message .= "Текст письма: " . $_POST['text_comment'];		
			send_mail($message); // отправим письмо
			// выведем сообщение об успехе
			$msg_box = "<span style='color: gray;'>Сообщение успешно отправлено!</span>";
		}else{
			// если были ошибки, то выводим их
			$msg_box = "";
			foreach($errors as $one_error){
				$msg_box .= "<span style='color: #8c0000;'>$one_error</span><br/>";
			}
		}
	}
	
	// функция отправки письма
	function send_mail($message){
		// почта, на которую придет письмо
		$mail_to = "anton16p@ya.ru"; 
		// тема письма
		$subject = "Письмо с обратной связи";
		
		// заголовок письма
		$headers= "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
		$headers .= "From: Тестовое письмо <no-reply@test.com>\r\n"; // от кого письмо
		
		// отправляем письмо 
		mail($mail_to, $subject, $message, $headers);
	}
?>
<!--feedback php end-->



<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>

	<script src="virtual-keyboard.js"></script>
	<!--rubber_field-->
	<script language="javascript">

function autosize(){
    var text = $('#field1');

    text.each(function(){
        $(this).attr('rows',1);
        resize($(this));
    });

    text.on('input', function(){
        resize($(this));
    });
    
    function resize ($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight+'px');
    }
}	
</script>

	<!--symbol_counter-->
	<script>
		function counter(el)
		{var wrapper = document.createElement('DIV');
		wrapper.innerHTML = el.value;
		var len = (wrapper.textContent || wrapper.innerText).length;
		document.getElementById('symbol_count').innerHTML = el.value.length + ' / ' + el.maxLength;
	}
</script>

<!--copy-->
<script>
function selectText(elementId) {
var doc = document,
text = doc.getElementById(elementId),
range,
selection;
if (doc.body.createTextRange) {
range = document.body.createTextRange();
range.moveToElementText(text);
range.select();
} else if (window.getSelection) {
selection = window.getSelection();
range = document.createRange();
range.selectNodeContents(text);
selection.removeAllRanges();
selection.addRange(range);
}};

function copy() {
selectText('field2');
document.execCommand("copy");
};

/* for textarea
	function copy(text) {
	
		var t = document.getElementById("field2");
		t.innerHTML = text;
		t.select()
		try {
			var successful = document.execCommand('copy')
			var msg = successful ? 'successfully' : 'unsuccessfully'
			console.log('text coppied ' + msg)
		} catch (err) {
			console.log('Unable to copy text')
		}
		t.innerHTML = ''
	}
*/
</script>

<!--tooltip-->
<script type="text/javascript">
	// Основная функция, передаем в нее обрабатываемый тег
// или this (для текущего тега)
function helptip(t) {
    // Разрешаем закрытие подсказок
    // Создаем постоянную переменную этой функции для этих целей
    // Условимся: если ноль, то можно закрывать, а если единица, то нельзя
    helptip.v = 0;
    // Берем последний дочерний тег
    var b = t.children[(t.children.length-1)];
    // Если открыт, то закрываем
    if (b.style.display=="block") helptipx();
    else {
        // Закрываем все
        helptipx();
        // Открываем текущий
        b.style.display = "block"; document.querySelector(".helptip").style.background='#ebebeb';
        // Запрещаем закрытие подсказки вызванного последующими событиями
        helptip.v = 1;
    }
}
// Функция закрывает все подсказки
function helptipx() {
    // Если было нажатие для открытия подсказки, то закрывать нельзя
    // Поэтому проверяем:
    if (helptip.v==1) {
        // Разрешаем закрытие в будущем
        helptip.v = 0;
        // И выходим
        return;
    }
    // Выбираем все теги с классом .helptip
    var s = document.querySelectorAll(".helptip");
    // и перебираем их циклом
    for (var i=0; i < s.length; i++) {
        // Скрываем последний дочерний тег
        s[i].children[(s[i].children.length-1)].style.display = "none";document.querySelector(".helptip").style.background='none';
    }
}


</script>

<!--dictionaries-->
<script src="dictionaries/rus.js?ver=<?php echo date(dmYHis);?>"></script>
<script src="dictionaries/erz.js?ver=<?php echo date(dmYHis);?>"></script>
<!--/dictionaries-->


<script type="text/javascript">


//тут был словарь 
//var rus = [0, 'хлеб', 'село','кошка','друг', 'село','кошка друг']; 
//var erz = [0, 'кше', 'веле','катка','ялга', 'велесь','спанчбоб']; 

var f_Lang;

function f_Lang_check(){
f_Lang = $('#selector_language').val();
//if(f_Lang==='find') {f_Lang = rus};
if(f_Lang==='f_rus') {f_Lang = rus}; 
if(f_Lang==='f_erz') {f_Lang = erz};
if(f_Lang==='f_mok') {f_Lang = mok};
return f_Lang;
};

//далее живой поиск, автозамена слов
//f_Lang - массив со словами   
//f_Lang.sort();
  function down(obj) {
    var reg = new RegExp('^' + lastWord(obj.value), 'i'),
    t = document.getElementById('pod1'); 
    var t2 = document.getElementById('pod2');
    var t3 = document.getElementById('pod3');
    var t4 = document.getElementById('pod4');
    var t5 = document.getElementById('pod5');
    t.innerHTML = '';
    t2.innerHTML = '';
    t3.innerHTML = '';
    t4.innerHTML = '';
    t5.innerHTML = '';
    t.style.display = "none";
    t2.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "none";
    t5.style.display = "none";
    document.getElementById('autocomplete_words').style.visibility = "visible";
     
    if (lastWord(obj.value.length) > 0)
    for (var i = 0; i < f_Lang.length; i++) {
    //какого хера тут треугольные числа
    if (reg.test(f_Lang[i])) {
    t.innerHTML = f_Lang[i]; 
    
    t.style.display = "block";

        }
  else if (reg.test(f_Lang[i+1])) {
    t2.innerHTML = f_Lang[i+1]; 
     t2.style.display = "block";

        }
    else if (reg.test(f_Lang[i+3])) {
    t3.innerHTML = f_Lang[i+3]; 
     t3.style.display = "block";
 
        }
        
         else if (reg.test(f_Lang[i+6])) {
    t4.innerHTML = f_Lang[i+6]; 
     t4.style.display = "block";

        }
         else if (reg.test(f_Lang[i+10])) {
    t5.innerHTML = f_Lang[i+10]; 
     t5.style.display = "block";
        }; 
      
      
    };
    
    $(function(){
var original = [];
$('.words_hints').each(function() {
    var thisText = $(this).text();
    if (original[thisText]){
        $(this).css('display', 'none');}
    else{
        original[thisText] = true;}
});
});
   
 };
 
 var lastWord = function(o) {
  return (""+o).replace(/[\s-]+$/,'').split(/[\s-]/).pop();
};
/*
lastWord('This is a test.'); // => 'test.'
lastWord('Here is something to-do.'); // => 'do.'
*/

 function ReplaceLastWord(str, newStr) {
   return str.replace(/\s\S+$/, newStr);
}
/*
var str = 'I like my dog'; 
var newEndStr = 'cat'; 
console.log(ReplaceLastWord(str, newEndStr)); // => I like my cat
*/
 function setFocus(){
      document.getElementById("field1").focus();
 }
 var words_counter;
 function calc_words()
{
     val = $.trim($("#field1").val()).split(/\s+/g);
     words_counter=$.grep(val,function (str) { return $.trim(str).length>0; }).length;
     return words_counter;
}
 
 function word_paste(ids) {

 if(words_counter>1){

    var a = document.getElementById('field1').value = ReplaceLastWord(document.getElementById('field1').value,  ' ' + ids.innerHTML);
    document.getElementById('autocomplete_words').style.visibility = "hidden";
    setFocus();
 }
 else {   var a = document.getElementById('field1').value = ids.innerHTML;
    document.getElementById('autocomplete_words').style.visibility = "hidden";
     setFocus();
};
}
//конец живого поиска

function translate(){
document.getElementById('field2').innerText=document.getElementById('field1').value;
 
$('select#language').change(function() {
lanRegion = $(this).val();
localStorage.removeItem("lanRegion"); // Мало ли xD 
localStorage.setItem('lanRegion', ''+lanRegion+'');
});

Lang = localStorage.getItem("lanRegion");
$('#language option[value="'+Lang+'"]').attr('selected', 'selected');


if(localStorage["lanRegion"] == undefined) { } else { 
if(Lang==='rus') {Lang = rus}; 
if(Lang==='erz') {Lang = erz};
if(Lang==='mok') {Lang = mok};
if(Lang.length > 1) {
 

//main algorithm
$('#field2').html(function(x, y) { 

//y=y.split(/\s* \s*/); only spaces 
y= y.replace(/<[^>]+>/g,'');
y= y.match(/[A-Za-z0-9а-яА-Я]+|./g);
y.clean(' ');
var newArr; 
var itemsRange;
var firstArr = y.slice();

newArr = y.reduce(function(arr, item, ci) { 
for (var di = ci; di < y.length; di++){

if(di <= ci){
	itemsRange = item;
}else {
	itemsRange = y.multiGetRange(ci, di).join(' ');
}


//alert(ci+' '+di);

f_Lang.reduce(function(previousValue, prev, i, cur) { 

/*
alert('массив: '+cur 
	+'\n copyар фул: '+ y
+'\n ар фул: '+ arr
+'\n ар итем: '+arr[ci]
+'\n итем: '+item
+'\n посл: '+previousValue 
+'\n прев: '+prev
+'\n и: '+i
+'\n итемсРэндж: '+itemsRange
); 
*/

if ((''+itemsRange).toLowerCase()==(''+prev).toLowerCase()){

if ((di-ci)>=1){
	
// изменяет заданное количество элементов массива
	var removeValFromIndex = range(ci,di); 
    for (var r = removeValFromIndex.length -1; r >= 0; r--){
arr.splice(removeValFromIndex[r],1,'');
}


return arr[di] = [itemsRange.replace(new RegExp('^'+prev+'$', 'gi'), Lang[i])];
}else{

	if (typeof arr[ci]=='object'){
		return arr[ci].push(itemsRange.replace(new RegExp('^'+prev+'$', 'gi'), Lang[i]));
	} else {
		return arr[ci] = [itemsRange.replace(new RegExp('^'+prev+'$', 'gi'), Lang[i])];
	}
}

} else {
	return [itemsRange.toString().replace(new RegExp('^'+prev+'$', 'gi'), Lang[i])];
	}

}, 0); 

}

return arr;
},firstArr); 


var fieldContent = '';
newArr.clean('');
newArr.reduce(function(mas, newItem, i) { 
if (newArr[i][1]==undefined || typeof(newArr[i])=='string'){
		return fieldContent = fieldContent+ '<span>' + newItem +'</span> ' ;
	}else {	
		return fieldContent = fieldContent+
'<span id="word-'+i+'" class="word-show-hint" data-hint="#word-hint-'+i+'">'+newArr[i][0]+'</span> '+'<div id="word-hint-'+i+'" class="word-hint"><ul class="selectMenuBox">'+generateList(newItem).innerHTML+'</ul></div>';
	}

}, y); 

return fieldContent;

}); 
}; 
}; 
};

// вывод истории переводов
function addHistory(words, translation, l1t, l2t){	    
if ($('#parent_history_div .pay_block').length > 4) {
    		$('#parent_history_div .pay_block:last').remove();
    	}
		       var clonedDiv=$('#parent_history_div').prepend('<div class="pay_block"><span class="history_text"><span class ="history_lang">'+l1t+' язык: </span>'+words+'<br><span class ="history_lang">'+l2t+' язык: </span>'+translation+'</span><button class="delete_pay_block" onclick="$(this).parent().remove();"><i class="fa fa-times" aria-hidden="true"></i></button>' +'</div>').prependTo('#parent_history_div');
		 }
// создание числового диапазона в виде массива
function range(start, count) {
    if(arguments.length == 1) {
        count = start;
        start = 0;
    }

    var foo = [];
    for (var i = 0; i < count; i++) {
        foo.push(start + i);
    }
    return foo;
}

// вывод диапазона элементов массива
Array.prototype.multiGetRange = function(lowEnd,highEnd){
    var numArr = [ ],
    c = highEnd - lowEnd + 1;
    while ( c-- ) {
        numArr[c] = highEnd--;
    }
    var args = Array.apply(null, numArr);
    var result = [];
      
    for(var i = 0; i < numArr.length; i++){
        result.push(this[args[i]]);
    }         
    return result;
};
// удаление элементов содержащих определенное значение
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};


// создание списка из массива
function generateList(items) {
  return items.reduce((ul, item) => {
    var li = document.createElement('li');
    li.className = "option";
    if (!Array.isArray(item)) {
      li.innerText = item;
    } else {
      var new_ul = generateList(item);
      li.appendChild(new_ul);
    }

    ul.appendChild(li);
    return ul;
  }, document.createElement('ul'));
}

 //разделение текста
function showLines() {
    var lines = getLines();
    console.log(
    lines.map(function (line) {
        return line.map(function (span) {
            return span.innerText;
        }).join('')
    }));
}

function splitLines() {
    var p = document.querySelectorAll("#field2")[0];
    p.innerHTML = p.innerHTML.split(/\<span\>[\.]\<\/span\>/g).map(function (word) {
        return '<span class="parag">' + capitalizeFirstLetter(word) + '</span>'
    }).join('<span>.</span> ');

}

function getLines() {
    var lines = [];
    var line;
    var p = document.querySelectorAll("#field2")[0];
    var words = p.getElementsByTagName('span');
    var lastTop;
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.offsetTop != lastTop) {
            lastTop = word.offsetTop;
            line = [];
            lines.push(line);
        }
        line.push(word);
    }
    return lines;
}


//заглавные буквы
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
 //конец разделения текста




//начало

$('document').ready(function govno(){
	f_Lang_check();



    $('.translate_button').on('click', function (e){      
        // отменяем стандартное действие при клике
    

        translate();
splitLines();

//tooltip and select box
$(function () {
	  $('.word-show-hint').on("click", function(e){ 
	  	e = e || window.event; 
	  	e.preventDefault();
	  	var ypos = $(this).offset().top+25;
	  	var xpos = $(this).offset().left;
	  	var WordHint =  $(this).data('hint');
    	var WordId = $(this).attr('id');
	  	$(WordHint).css('top',ypos);
	  	$(WordHint).css('left',xpos);
	  	$(WordHint).toggle('fast');         
	  	return false; 
	  	

	  	});
      
$('ul.selectMenuBox > li.option').click(function() { 
      
      	var parentId = $(this).parents(":eq(1)").attr('id').replace('hint-', ''); 
       $('#'+parentId).text($(this).text());
      });

      document.onclick = function(e){ 
	  	if ($(e.target).hasClass('word-hint')==false) 
	  	$('.word-hint').hide('fast');
	  	return;
	  }          
	});

//end tooltip and select box  

addHistory(document.getElementById('field1').value,document.getElementById('field2').innerText,$("#selector_language option:selected").text(),$("#language option:selected").text());

//    showLines();
        e.preventDefault();
        // Получаем адрес страницы


        var href = window.location.href;

        // Передаем адрес страницы в функцию
        getContent(href, true);
    });
});

// Добавляем обработчик события popstate, 
// происходящего при нажатии на кнопку назад/вперед в браузере  
window.addEventListener("popstate", function(e) {
    // Передаем текущий URL
    getContent(location.pathname, false);
});

// Функция загрузки контента
function getContent(url, addEntry) {
    $.get(url).done(function(data) {
        // Обновление только текстового содержимого в сером блоке
      

    $('#field2').text();


    //$('#logo').html($(data).find("#logo").html());
        // Если был выполнен клик в меню - добавляем запись в стек истории сеанса
        // Если была нажата кнопка назад/вперед, добавлять записи в историю не надо

        if(addEntry == true) {
            // Добавляем запись в историю, используя pushState
            var new_url=document.getElementById('field1').value;
            new_url=new_url.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
new_url=new_url.replace(/ /g,"_");
window.history.pushState('', '', '?w='+new_url);
        }

    });

};


//конец функции
</script>

<script>
	$( document ).ready(function() {
	    //get the height and width of the page
    var window_width = $(window).width();
    var window_height = $(window).height();
    //vertical and horizontal centering of modal window(s)
    /*we will use each function so if we have more then 1
    modal window we center them all*/
    $('.modal_window').each(function(){
        //get the height and width of the modal
        //var modal_height = $(this).outerHeight();
        //var modal_width = $(this).outerWidth();
        //calculate top and left offset needed for centering
        //var top = (window_height-modal_height)/2;
        //var left = (window_width-modal_width)/2;
        //apply new top and left css values
        //$(this).css({'top' : top , 'left' : left});

    });

        $('.activate_modal').click(function(){
              //get the id of the modal window stored in the name of the activating element
              var modal_id = $(this).attr('name');
              //use the function to show it
              show_modal(modal_id);
        });

        $('.close_modal').click(function(){
            //use the function to close it
            close_modal();
        });
    //THE FUNCTIONS

    function close_modal(){
        //hide the mask
        $('#mask').fadeOut(500);
        $('#wrapper').css({ 'overflow' : ''});
        //hide modal window(s)
        $('.modal_window').fadeOut(500);
    }

    function show_modal(modal_id){
        //set display to block and opacity to 0 so we can use fadeTo
        $('#mask').css({ 'display' : 'block', opacity : 0.5});
        $('#wrapper').css({ 'overflow' : 'hidden'});
        //fade in the mask to opacity 0.8
        $('#mask').fadeTo(500,0.5);
         //show the modal window
        $('#'+modal_id).fadeIn(500);

    }
});
</script>

</head>
<body>
	<div id='mask' class='close_modal'></div>
	<div id="wrapper">		
		<!-- Header страницы -->
		<header>

			<div id="logo"><span>Переводчик</span>
			</div>

<div id="follow_block">
	<a href="https://github.com/AntonPolyakin/ethnic.ru" target="_blank" title="GitHub"><i class="fa fa-github" aria-hidden="true"></i></a>
<a href="https://vk.com/id66838282" target="_blank" title="VK"><i class="fa fa-vk" aria-hidden="true"></i></a>
</div>
		</header>
		<!-- Основное содержимое страниц -->

		<main>
			<div class="cassing" id="text_fields">  
				<div class="fields" id="first_text_field" >
					<div id="left_field" tabindex="0">
						<div class="top_panel_left">

									<span class="lang_select_left">
										<select id="selector_language" onchange="f_Lang_check()">
											<!--<option value="find">Определить язык</option>-->
											<option value="f_rus">Русский</option>
											<option value="f_erz">Эрьзянский</option>
											<!--<option value="f_mok">Мокшанский</option>-->
										</select>

									</span>

							<div class="left_buttons">
								<button onclick="document.getElementById('field1').value='';"><i class="fa fa-times" aria-hidden="true"></i>
									<span>Очистить</span></button>
									<button onclick="if('speechSynthesis' in window) window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('field1').value))"><i class="fa fa-volume-up" aria-hidden="true"></i>
										<span>Прослушать</span></button>

									</div>
									
								</div>
								<textarea name="text" id="field1" oninput="down(this)" onfocus="document.getElementById('left_field').style.outline='thick solid #FFB0B0'" onblur="document.getElementById('left_field').style.outline='none'" maxlength="5000" onkeypress="autosize();counter(this);" onKeyUp="counter(this);calc_words();" onchange="counter(this);" virtual-keyboard ></textarea>

<div id="autocomplete_words">
<span class="words_hints" id="pod1" onclick="word_paste(this)"></span>
<span class="words_hints" id="pod2" onclick="word_paste(this)"></span>
<span class="words_hints" id="pod3" onclick="word_paste(this)"></span>
<span class="words_hints" id="pod4" onclick="word_paste(this)"></span>
<span class="words_hints" id="pod5" onclick="word_paste(this)"></span>
</div>


								<div class="bottom_panel">
									<div class="bottom_panel_block">

										<div class="left_buttons_botton">
										<button disabled><i class="fa fa-microphone" aria-hidden="true"></i> <span>Голосовой ввод</span></button>
										<button onclick="if (this.lastElementChild.innerText=='Экранная клавиатура'){ this.lastElementChild.innerText = 'Скрыть экранную клавиатуру';document.getElementById('keyboard').firstElementChild.style.display='block';} 
else {this.lastElementChild.innerText = 'Экранная клавиатура';document.getElementById('keyboard').firstElementChild.style.display='none'};" class="virtual-keyboard-hook" data-target-id="field1" data-keyboard-mapping="qwerty"><i class="fa fa-keyboard-o" aria-hidden="true"></i> <span>Экранная клавиатура</span></button></div>
										<span id="symbol_count"></span>
										</div>
										<!--keyboard-->
										<div id="keyboard">
										</div>




								</div>
							</div>
						</div>

						<div id="reverse_block"><button disabled><i class="fa fa-exchange" aria-hidden="true"></i></button></div>

						<div class="fields" id="second_text_field">
							<div id="right_field">
								<div class="top_panel_right">
									<span class="lang_select_right">
										<select id="language">
							
											<option value="rus" selected>Русский</option>
											<option value="erz">Эрьзянский</option>
											<!--<option value="mok">Мокшанский</option>-->
										</select>
									</span>
									
									<div class="right_buttons">
										<button onclick="if('speechSynthesis' in window) window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('field2').value))"><i class="fa fa-volume-up" aria-hidden="true"></i>
											<span>Прослушать</span></button>
											<button id="copyButton" 
											 onclick="copy()"><i class="fa fa-clone" aria-hidden="true"></i> <span>Копировать</span></button>

										</div>

<button class="translate_button" >Перевести <i class="fa fa-chevron-right" aria-hidden="true"></i></button>

									</div>
									<div name="text2" id="field2" contenteditable="false" >
										
									</div>
															
									<div class="bottom_panel">
											<div class="right_buttons_botton">
												<button class="helptip" onclick="helptip(this)"><i class="fa fa-share-square-o" aria-hidden="true"></i><span>Поделиться</span>

<div id="soc_block">
			<a href="http://vkontakte.ru/share.php?url=<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" onclick="window.open(this.href, 'vkontakte', 'width=600, height=400'); return false;" target="_blank" class="vk_s"></a>
			<a href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&amp;st.s=1&amp;st._surl=<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" onclick="window.open(this.href, 'odnoklassniki', 'width=600, height=400'); return false;" target="_blank" class="ok_s"></a>
			<a href="http://www.facebook.com/sharer.php?u=<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>&t=MY_TITLE&src=sp" onclick="window.open(this.href, 'facebook', 'width=600, height=400'); return false;" target="_blank" class="fb_s"></a>
			<a href="https://plus.google.com/share?url=<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" onclick="window.open(this.href, 'google', 'width=600, height=400'); return false;" target="_blank" class="gp_s"></a>
			<a href="https://twitter.com/intent/tweet?text=<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" onclick="window.open(this.href, 'twitter', 'width=600, height=400'); return false;" target="_blank" class="tw_s"></a>
			</div>
			

												</button>
												<button disabled><i class="fa fa-pencil" aria-hidden="true"></i><span> Предложить перевод</span></button>
											</div>
										
									</div>
								</div>			
							</div>
							<div id="dictionary_block">
								<div class="dictionary" id="words_block_first">
									<div id="words_content_left">
										<h4>История переводов</h4>
									<div id='parent_history_div'>   
 
</div>
								</div>
								</div>
								<div class="dictionary" id="words_block_second">
									<div id="words_content_right">
										<h4>Варианты перевода</h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore similique, quidem atque consequuntur, et unde ipsa iusto omnis repudiandae, officiis, mollitia. Consectetur impedit, non cupiditate at eligendi tempore aliquid!</div>
								</div>
							</div>
						</div>





					</main>


					<!-- Подвал сайта -->
					<footer>
						<div id="bottom_menu">
							<a href="#" class="bottom_menu_links activate_modal" name="mobile_window" >Мобильная версия</a>

<div id='mobile_window' class='modal_window'>Мобильная версия сайта находится в разработке</div>

							<a href="#" class="bottom_menu_links activate_modal" name="about_window">О переводчике "Этник"</a>

<div id='about_window' class='modal_window'><h1>Этник Переводчик</h1>Это бесплатный сервис с открытым исходным кодом  позволяющий переводить слова, фразы на различные языки. В данный момент доступен русский и эрзянский словари содержащие более 40 тыс. слов.<br/><br/><img src="unsonet_logo.png" alt="" height="16px" style="float:right;"><span style="color:gray; font-size:12px;float:right;">v. 0.0.1 (beta)</span></div>
							<a href="#" class="bottom_menu_links activate_modal" name="feed_window">Отправить отзыв</a>
<div id='feed_window' class='modal_window'>Будем признательны, если вы оставите отзыв, предложение или пожелание.
<!--feed-back-->
<br/>
    <?= $msg_box; // вывод сообщений ?>
    <br/>
    <form action="<?=$_SERVER['PHP_SELF'];?>" method="post" name="frm_feedback">      
        <input type="text" name="user_name" placeholder="Ваше имя" value="<?=($_POST['user_name']) ? $_POST['user_name'] : ""; // сохраняем то, что вводили?>" /><br/>
              
        <input type="text" name="user_email" placeholder="Ваш e-mail" value="<?=($_POST['user_email']) ? $_POST['user_email'] : ""; // сохраняем то, что вводили?>" /><br/>
                 
        <textarea class="feedfield" placeholder="Текст сообщения" name="text_comment"><?=($_POST['text_comment']) ? $_POST['text_comment'] : ""; // сохраняем то, что вводили?></textarea>
         
        <br/>
        <input class="translate_button" type="submit" value="Отправить" name="btn_submit" />
    </form>
 <!--feed-back end-->



</div>
						</div>
						<div class="copyright cassing"><img src="unsonet_logo.png" alt="" height='32px'></div>
					</footer>
				</div>

			</body>
			</html
