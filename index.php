<!DOCTYPE html>
<html>
<head>
  <title>Этник - Переводчик</title>

  <link rel="icon"  href="src/img/favicon.png" type="image/png">
  <link rel="stylesheet" type="text/css" href="src/css/style.css?ver=<?php echo date(dmYHis);?>" >
  <link rel="stylesheet" href="src/css/virtual-keyboard.css?ver=<?php echo date(dmYHis);?>">

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="keywords" content="переводчик, словарь, перевод текста, эрзянский, онлайн перевод">
  <meta name="description" content="Этник Переводчик - бесплатный онлайн переводчик текста с открытым исходным кодом  позволяющий переводить слова, фразы на различные языки.">

<meta property="og:locale" content="ru_RU"/>
  <meta property="og:url" content="<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Этник Переводчик" />
  <meta property="og:description" content="Онлайн переводчик текста" />
  <meta property="og:image" content="src/img/logo.png" />
  <meta property="og:site_name" content="Этник Переводчик"/>
  

  <meta name="twitter:card" content="summary"></meta> 
  <meta name="twitter:title" content="Этник Переводчик"></meta> 
  <meta name="twitter:description" content="Онлайн переводчик текста"></meta> 
  <meta name="twitter:image" content="/src/img/logo.png"></meta>

  <meta name="yandex-tableau-widget" content="logo=/src/img/logo.png, color=#a33" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

  <script src="src/js/virtual-keyboard.js"></script>
  
  <script type="text/javascript" src="src/js/main.js?ver=<?php echo date(dmYHis);?>"></script>
  <!--scripts-->
  <script type="text/javascript" src="src/js/scripts.js?ver=<?php echo date(dmYHis);?>"></script>
  <!--/scripts-->
  <!--dictionaries-->
  <script type="text/javascript" src="src/dictionaries/rus.js?ver=<?php echo date(dmYHis);?>"></script>
  <script type="text/javascript" src="src/dictionaries/myv.js?ver=<?php echo date(dmYHis);?>"></script>
  <!--/dictionaries-->



</head>
<body>
	<div id="wrapper">		
		<!-- Header страницы -->
		<header>

			<div id="logo"><span>Переводчик</span>
			</div>


		</header>
		<!-- Основное содержимое страниц -->

    <aside>

      <div class="aside-select">
        <div class="select__first-lang">
          <button class="select-button">Исходный язык</button>
        </div>
        <div class="select__reverse"><button><i class="fa fa-exchange" aria-hidden="true" style="
        transform: rotate(90deg);
        "></i></button></div>
        <div class="select__second-lang">
          <button class="select-button">Язык перевода</button>
        </div>
      </div>
      <div class="aside-search">

        <input placeholder="Поиск языка" type="text" id="aside-search-input" maxlength="30">
        <label for="aside-search-input"><i class="fa fa-search" aria-hidden="true"></i></label>
      </div>
      <div class="select-lang-menu"></div>


    </aside>

    <main>
     <div class="cassing" id="text_fields">  

      <div id="cassing_texture"></div>

      <div class="fields" id="first_text_field" >
       <div id="left_field" tabindex="0">
        <div class="top_panel_left">

         <span class="lang_select_first">
          <select id="selector_language">
           <!--<языки>-->
           
           <!--<языки>-->
         </select>

       </span>

       <div class="left_buttons">
        <button onclick="document.getElementById('field1').value='';"><i class="fa fa-times" aria-hidden="true"></i>
         <span>Очистить</span></button>
         <button onclick="if('speechSynthesis' in window) window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('field1').value))"><i class="fa fa-volume-up" aria-hidden="true"></i>
          <span>Прослушать</span></button>

        </div>

      </div>
      <textarea name="text" id="field1" oninput="down(this)" onfocus="document.getElementById('left_field').style.outline='thick solid #FFB0B0'" onblur="document.getElementById('left_field').style.outline='none'" maxlength="1000" onkeypress="autosize();counter(this);" onKeyUp="counter(this);calc_words();" onchange="counter(this);" virtual-keyboard ></textarea>

      <div id="autocomplete_words">
        <a href="#" class="words_hints" id="pod1" onclick="word_paste(this)" tabindex="0"></a>
        <a href="#" class="words_hints" id="pod2" onclick="word_paste(this)" tabindex="0"></a>
        <a href="#" class="words_hints" id="pod3" onclick="word_paste(this)" tabindex="0"></a>
        <a href="#" class="words_hints" id="pod4" onclick="word_paste(this)" tabindex="0"></a>
        <a href="#" class="words_hints" id="pod5" onclick="word_paste(this)" tabindex="0"></a>
      </div>


      <div class="bottom_panel">
       <div class="bottom_panel_block">

        <div class="left_buttons_botton">
          <button disabled><i class="fa fa-microphone" aria-hidden="true"></i> <span>Голосовой ввод</span></button>
          <button onclick="if (this.lastElementChild.innerText=='Экранная клавиатура'){ this.lastElementChild.innerText = 'Скрыть клавиатуру';document.getElementById('keyboard').style.display='block';} 
          else {this.lastElementChild.innerText = 'Экранная клавиатура';document.getElementById('keyboard').style.display='none'};" class="virtual-keyboard-hook" data-target-id="field1" data-keyboard-mapping="qwerty"><i class="fa fa-keyboard-o" aria-hidden="true"></i> <span>Экранная клавиатура</span></button></div>
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
     <span class="lang_select_second">
      <select id="language">
       <!--<языки>-->
       
       <!--</языки>-->
     </select>
   </span>

   <div class="right_buttons">
    <button onclick="if('speechSynthesis' in window) window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('field2').value))"><i class="fa fa-volume-up" aria-hidden="true"></i>
     <span>Прослушать</span></button>
     <button id="copyButton" onclick="copy()"><i class="fa fa-clone" aria-hidden="true"></i><span>Копировать</span></button>

   </div>

   <button class="translate_button" ><span>Перевести</span><i class="fa fa-chevron-right" aria-hidden="true"></i></button>

 </div>
 <div name="text2" id="field2" contenteditable="false" data-text="Перевод">

 </div>

 <div class="bottom_panel">
   <div class="right_buttons_botton">
    <button class="helptip" onclick="helptip(this)"><i class="fa fa-share-square-o" aria-hidden="true"></i><span>Поделиться</span>
      <div id="soc_block">
       <a href="http://vkontakte.ru/share.php?url=<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" onclick="window.open(this.href, 'vkontakte', 'width=600, height=400'); return false;" target="_blank" class="vk_s"><i class="fa fa-vk" aria-hidden="true"></i></a>
       <a href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&amp;st.s=1&amp;st._surl=<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" onclick="window.open(this.href, 'odnoklassniki', 'width=600, height=400'); return false;" target="_blank" class="ok_s"><i class="fa fa-odnoklassniki" aria-hidden="true"></i></a>
       <a href="http://www.facebook.com/sharer.php?u=<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>&t=MY_TITLE&src=sp" onclick="window.open(this.href, 'facebook', 'width=600, height=400'); return false;" target="_blank" class="fb_s"><i class="fa fa-facebook" aria-hidden="true"></i></a>
       <a href="https://plus.google.com/share?url=<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" onclick="window.open(this.href, 'google', 'width=600, height=400'); return false;" target="_blank" class="gp_s"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
       <a href="https://twitter.com/intent/tweet?text=<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" onclick="window.open(this.href, 'twitter', 'width=600, height=400'); return false;" target="_blank" class="tw_s"><i class="fa fa-twitter" aria-hidden="true"></i></a>
     </div>
   </button>
   <button disabled><i class="fa fa-pencil" aria-hidden="true"></i><span>Предложить перевод</span></button>
 </div>

</div>
</div>			
</div>


</div>


<div id="dictionary_block">

 <div id="dictionary_words">
  <div class="words_content_left">
    <h4>Похожие слова</h4>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
  <div class="words_line"></div>
  <div class="words_content_right">
    <h4>Варианты перевода</h4>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore similique, quidem atque consequuntur, et unde ipsa iusto omnis repudiandae, officiis, mollitia. Consectetur impedit, non cupiditate at eligendi tempore aliquid!
  </div>
</div>

<div id="dictionary_history">
  <h4>История переводов</h4>
  <div class='history_container'>   

  </div>
</div>


</div>


</main>


<!-- Подвал сайта -->
<footer>
  <div id='mask' class='close_modal'></div>

  <nav id="bottom_menu">
    <!-- links -->        
    <ul>            
    <li><a href="#" class="bottom_menu_links activate_modal" name="mobile_window" >Мобильная версия</a></li>
    <li><a href="#" class="bottom_menu_links activate_modal" name="about_window">О сервисе</a></li>
    <li><a href="#" class="bottom_menu_links activate_modal" name="feed_window">Отправить отзыв</a></li>
    <li><a href="#" class="" name="">Пользовательское соглашение</a></li>
    <li><a href="#" class="" name="">Помощь</a></li>
  </ul> 
    <!-- /links -->
    <!-- windows -->
    <div id='mobile_window' class='modal_window'>Мобильная версия сайта находится в разработке</div>					
    <div id='about_window' class='modal_window'><h1>Этник Переводчик</h1>Это бесплатный сервис с открытым исходным кодом  позволяющий переводить слова, фразы на различные языки. В данный момент доступен русский и эрзянский словари содержащие более 40 тыс. слов.<br/><br/><span style="color:gray; font-size:12px;float:right;">v. 0.1.0 (beta)</span></div>						
    <div id='feed_window' class='modal_window'>Будем признательны, если вы оставите отзыв, предложение или пожелание.
      <!--feed-back-->
      <!--feedback php-->
      <?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    
    if($_POST['btn_submit']){
        $errors = array(); // контейнер для ошибок
        // проверяем корректность полей
        if($_POST['user_name'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
        if($_POST['user_email'] == "")   $errors[] = "Поле 'Ваш e-mail' не заполнено!";
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
  </nav>
  <div class="copyright cassing">

    <div id="follow_block">
      
      <a href="#" title="Unsonet"><i class="fa fa-unsonet" aria-hidden="true"></i></a>
      <a href="https://github.com/AntonPolyakin/ethnic.ru" target="_blank" title="GitHub"><i class="fa fa-github" aria-hidden="true"></i></a>
      <a href="https://vk.com/id66838282" target="_blank" title="VK"><i class="fa fa-vk" aria-hidden="true"></i></a>

    </div>

  </div>
</footer>
</div>

</body>
</html>
