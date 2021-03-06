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

<meta name="yandex-verification" content="b9a972018937aab7" />
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

<!-- <div class="preloader" id="js-preloader">
  <div class="spin"></div>
</div> -->

  
	<div id="wrapper">		
		<!-- Header страницы -->
		<header>

			<div id="logo"><span>Переводчик</span>
			</div>


		</header>
		<!-- Основное содержимое страниц -->

    <aside>

      <div class="aside-select">
        <div class="select__first-lang select_buttons">
          <button class="select-button">Исходный язык</button>
        </div>
        <div class="select__reverse"><button><i class="fa fa-exchange" aria-hidden="true" style="
        transform: rotate(90deg);
        "></i></button></div>
        <div class="select__second-lang select_buttons">
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

<div class="left_buttons">
        <button onclick="document.getElementById('field1').value='';"><i class="fa fa-times" aria-hidden="true"></i>
         <span>Очистить</span></button>
         <button onclick="if('speechSynthesis' in window) window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('field1').value))"><i class="fa fa-volume-up" aria-hidden="true"></i>
          <span>Прослушать</span></button>

        </div>

         <span class="lang_select_first">
          <select id="selector_language">
           <!--<языки>-->
           
           <!--<языки>-->
         </select>
       </span>

       

<button class="translate_button" ><span>Перевести</span><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
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

  
 </div>
 <div name="text2" id="field2" contenteditable="false" data-text="Перевод">
 </div>
<div id="progressbar">
         Идет перевод...
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
    <li><a href="#" class="bottom_menu_links activate_modal" name="terms_window">Пользовательское соглашение</a></li>
    <li><a href="#" class="bottom_menu_links activate_modal" name="help_window">Помощь</a></li>
  </ul> 
    <!-- /links -->
    <!-- windows -->
    <div id='mobile_window' class='modal_window'><span>Мобильная версия сайта находится в разработке</span></div>					
    <div id='about_window' class='modal_window'><h1 style="text-align: center;">Этник Переводчик</h1>Это бесплатный сервис с открытым исходным кодом  позволяющий переводить слова, фразы на различные языки. В данный момент доступен русский и эрзянский словари содержащие более 40 тыс. слов.<br/><br/><span style="color:gray; font-size:12px;float:right;">Версия приложения: 0.2.0 (beta)</span></div>						
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

<div id='terms_window' class='modal_window'>
  
<h1>Условия использования сервиса Этник - Переводчик</h1>

<div class="body conbody" style="color: rgb(0, 0, 0); font-size: 15px;">
<h2>1. Общие положения</h2>

<p>1.1. &laquo;Unsonet&raquo;&nbsp;предлагает пользователю сети Интернет (далее &ndash; Пользователь) &mdash; использовать сервис Этник -Переводчик, доступный по адресу:&nbsp;http://ethnic.ml/ (далее &ndash; &laquo;Сервис&raquo;).</p>

<p>1.2. Начиная использовать Сервис/его отдельные функции, Пользователь считается принявшим настоящие Условия в полном объеме, без всяких оговорок и исключений. В случае несогласия Пользователя с какими-либо из положений указанных документов, Пользователь не вправе использовать Сервис.</p>

<p>1.3. Настоящие Условия могут быть изменены <span style="color:rgb(0, 0, 0); font-size:15px">Unsonet</span> без какого-либо специального уведомления, новая редакция Условий вступает в силу с момента ее размещения в сети Интернет по указанному в настоящем абзаце адресу, если иное не предусмотрено новой редакцией Условий.&nbsp;</p>

<p>1.4. В случае если <span style="color:rgb(0, 0, 0); font-size:15px">Unsonet</span> были внесены какие-либо изменения в настоящие Условия, в порядке, предусмотренном п. 1.3. настоящих Условий, с которыми Пользователь не согласен, он обязан прекратить использование Сервиса.</p>

<p>1.5. Сервис предлагает Пользователю возможность бесплатного доступа к сервису автоматизированного перевода текстов Пользователя. Все существующие на данный момент функции Сервиса, а также любое развитие их и/или добавление новых является предметом настоящих Условий.</p>

<h2>2. Использования Сервиса. Отдельные функции Сервиса</h2>

<p>2.1. Сервис предоставляет Пользователю возможность автоматического перевода с одного языка на другой текстов, введенных Пользователем.</p>

<p>2.2. Автоматизированный перевод текстов и веб-страниц выполняется с помощью общедоступных&nbsp;технологий.</p>

<p>2.3. Сервис предоставляется Пользователю для личного некоммерческого использования.</p>

<p>2.4. <span style="color:rgb(0, 0, 0); font-size:15px">Unsonet</span> оставляет за собой право на свое усмотрение ограничить доступ Пользователя к Сервису (или к определенным функциям Сервиса, если это возможно технологически).</p>
</div>


</div>


<div id='help_window' class='modal_window'>

  <h1>Перевод текста</h1>

<div class="body conbody" style="color: rgb(0, 0, 0); font-size: 15px;">
<h2>Переключить язык</h2>

<p>В качестве исходного языка и языка перевода Сервис автоматически выбирает русский язык.</p>

<p>Первый блок служит для ввода исходного текста, второй - отображает переведенный текст. Чтобы изменить язык перевода или исходного текста, в дестктопном отображении сервиса нажмите на соответсующие языкам кнопки, а в мобильном отображении нажмите название языка и выберите из списка нужное.</p>

<p>Чтобы переключить направление перевода, нажмите кнопку&nbsp;<i class="fa fa-exchange" aria-hidden="true" style="
        transform: rotate(90deg);
        "></i></p>

<h2>Получить альтернативный перевод отдельного слова из фразы</h2>

<p>В блоке с переведенным текстом нажмите на слово, для которого нужно получить все совпадения в словаре.</p>

<h2>Скопировать перевод</h2>

<p>Нажмите кнопку&nbsp;<i class="fa fa-clone" aria-hidden="true"></i>.</p>

<h2>Использовать подсказки</h2>

<div class="p" style="margin: 10px 0px;">Начните вводить текст для перевода и подсказки покажут продолжение слова или наиболее вероятное следующее слово:
<ul>
  <li>Чтобы воспользоваться подсказкой, нажмите на клавиатуре клавишу&nbsp;Tab&nbsp;или выберите подсказку указателем мыши.</li>
</ul>
</div>
<h2>Использовать экранную клавиатуру </h2>

<p>Вы можете использовать виртуальную клавиатуру для ввода текста. Для этого нажмите кнопку&nbsp;<i class="fa fa-keyboard-o" aria-hidden="true"></i>. Используйте указатель мыши для ввода символов.</p>


</div>


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
