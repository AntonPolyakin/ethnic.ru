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



<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

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
//var rus = [0, 'хлеб', 'село','кошка','друг', 'село']; 
//var erz = [0, 'кше', 'веле','катка','ялга', 'велесь']; 

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
 
//далее проблема сложносоставных слов

$('#field2').html(function(x, y) { 

//y=y.split(/\s* \s*/); only spaces 
y= y.match(/[A-Za-z0-9а-яА-Я]+|./g);


return y.reduce(function(arr, item, ci) { 
	if (item.length>0){
f_Lang.reduce(function(previousValue, prev, i, cur) { 
/*if (i==2636){
alert('массив: '+cur 
+'\n ар: '+typeof arr[0]
+'\n итем: '+item
+'\n посл: '+previousValue 
+'\n прев: '+prev
); 
}*/
if ((''+item).toLowerCase()!==(''+prev).toLowerCase()){
return item.replace(new RegExp('^'+prev+'$', 'gi'), Lang[i]);
} else {

if (typeof arr[ci]=='object'){
	
return arr[ci].push(item.replace(new RegExp('^'+prev+'$', 'gi'), Lang[i]));
}else {
return arr[ci] = [item.replace(new RegExp('^'+prev+'$', 'gi'), Lang[i])];
}

}

}, 0); 
}

return arr;
}, y); 
}); 
}; 
}; 
};
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
    p.innerHTML = p.innerText.split(/\. /g).map(function (word) {
        return '<span class="parag">' + capitalizeFirstLetter(word) + '</span>'
    }).join('. ');

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
    showLines();
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

</head>
<body>

	<div id="wrapper">
		<!-- Header страницы -->
		<header>

			<div id="logo"><span>Переводчик</span>
			</div>

<div id="follow_block">
	<i class="fa fa-github" aria-hidden="true"></i>
<i class="fa fa-vk" aria-hidden="true"></i>
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
										<button onclick="alert('функция в разработке');"><i class="fa fa-microphone" aria-hidden="true"></i> <span>Голосовой ввод</span></button>
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

						<div id="reverse_block"><button><i class="fa fa-exchange" aria-hidden="true"></i></button></div>

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
									<div name="text2" id="field2" contenteditable="false" ></div>
									
									<!--<textarea name="text2" id="field2" readonly></textarea>-->
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
												<button><i class="fa fa-pencil" aria-hidden="true"></i><span> Предложить перевод</span></button>
											</div>
										
									</div>
								</div>			
							</div>
							<div id="dictionary_block">
								<div class="dictionary" id="words_block_first">
									<div id="words_content_left">
										<h4>Похожие слова</h4>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur rerum sunt saepe, molestiae soluta similique maiores illum rem ut vitae, error. Veritatis eos, similique animi neque unde repellat error sapiente!</div>
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
							<a href="" class="bottom_menu_links">Мобильная версия</a>
							<a href="" class="bottom_menu_links">О переводчике "Этник"</a>
							<a href="" class="bottom_menu_links">Отправить отзыв</a>

						</div>
						<div class="copyright cassing"><img src="unsonet_logo.png" alt="" height='32px'></div>
					</footer>
				</div>

			</body>
			</html
