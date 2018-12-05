/*swap language*/
$(document).ready(function() {
$('.reverse_block button, .select__reverse button').on('click', function() {

var val1 = $('#selector_language option:selected');
var val2 = $('#language option:selected');

 
$('#selector_language option:eq(' + val2.index() + ')').prop('selected', true);
$('#language option:eq(' + val1.index() + ')').prop('selected', true);
$('#selector_language, #language').trigger('click');
$('#selector_language, #language').trigger('change');
});
});
/*end swap language*/

/*hide copy language*/
$(document).ready(function() {
$("#selector_language, #language").each(function(cSelect) {
    $(this).data('stored-value', $(this).val());
  });

  $("#selector_language, #language").change(function() {
    var cSelected = $(this).val();
    var cPrevious = $(this).data('stored-value');
    $(this).data('stored-value', cSelected);

    var otherSelects = $("#selector_language, #language").not(this);

    otherSelects.find('option[value=' + cPrevious + ']').removeAttr('disabled');
    otherSelects.find('option[value=' + cSelected + ']').attr('disabled', 'disabled');
  });
 });
/*end hide copy language*/

/*textarea autosize*/
function autosize() {
    var text = $('#field1');

    text.each(function() {
        $(this).attr('rows', 1);
        resize($(this));
    });

    text.on('input', function() {
        resize($(this));
    });

    function resize($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight + 'px');
    }
}
/*end textarea autosize*/

/* focus on textarea*/
window.addEventListener("load", function() {
    document.getElementById('first_text_field').onclick = function(event) {
        if (event.target.tagName !== 'SELECT') {
            document.getElementById('field1').focus();
        }
    }
});
/* end focus on textarea*/

/* language menu */
$(document).ready(function() {

    $(function() {
        $("#selector_language, #language").load("../../languages.html");
    });

    // change text in aside buttons
    function getSelectedToButtons() {
        $('.select__first-lang button').text($('#selector_language option:selected:not([disabled])').text());
        $('.select__second-lang button').text($('#language option:selected:not([disabled])').text());
        f_Lang_check();
    }

    $('#selector_language, #language').change(function() {
        getSelectedToButtons();
    });
    //buttom's events
    $('.select__first-lang button').click(function(e) {
        $('#selector_language').trigger('click');
        $('#selector_language').trigger('change');
        $(e.target).addClass('active');
        $('.select__second-lang button').removeClass('active');
    });

    $('.select__second-lang button').click(function(e) {
        $('#language').trigger('click');
        $('#language').trigger('change');
        $(e.target).addClass('active');
        $('.select__first-lang button').removeClass('active');
    });

    //Select into ul list
    var container = document;
    container.addEventListener("click", function(event) {
        if (event.target.tagName === 'SELECT' && event.target.id === 'selector_language' || event.target.id === 'language') {

            var thisSelect = 'select#' + event.target.id;

            $('.select-lang-menu').html('<ul class="lang-list"></ul>');
            $(thisSelect + ' option').each(function() {
if(!$(this).attr('disabled')){
                $('ul.lang-list').append('<li><a href="#" data-value="' + $(this).val() + '">' + $(this).text() + '</a></li>');
            }else{
$('ul.lang-list').append('<li><span data-value="' + $(this).val() + '">' + $(this).text() + '</span></li>');
            }
            });

            //set first item as active on ready and update list when dropdown selected
            var e = $('option:selected:not([disabled])', event.target).index();
            $('ul.lang-list li:eq(' + e + ')').addClass('active');

            // set active to selction and sync

            // update dropdown when links selected
            $('ul.lang-list > li > a').click(function() {

                
                var e = $(this).parent().index();

                if (!$(thisSelect + ' option:eq(' + e + ')').attr('disabled')) {
$('ul.lang-list > li').removeClass('active');
                $(this).parent().addClass('active');

                $(thisSelect + ' option:eq(' + e + ')').prop('selected', true);
                getSelectedToButtons();
            }else{
                alert('Словарь отсутствует');
            }
            });
        }
    });

});


/* end language menu */

/* search language */
$(document).ready(function() {
    $("#aside-search-input").on('keyup', function() {
        var search = $(this).val().toLowerCase();
        //Go through each list item and hide if not match search

        $(".lang-list li").each(function() {
            if ($(this).html().toLowerCase().indexOf(search) != -1) {
                $(this).show();
            } else {
                $(this).hide();
            }

        });

    });
});
/* end search language */


/* symbol_counter */
function counter(el) {
    var wrapper = document.createElement('DIV');
    wrapper.innerHTML = el.value;
    var len = (wrapper.textContent || wrapper.innerText).length;
    document.getElementById('symbol_count').innerHTML = el.value.length + ' / ' + el.maxLength;
}
/* end symbol_counter */

/* copy */
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
    }
};

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
/*end copy */

/* tooltip */
// Основная функция, передаем в нее обрабатываемый тег
// или this (для текущего тега)
function helptip(t) {
    // Разрешаем закрытие подсказок
    // Создаем постоянную переменную этой функции для этих целей
    // Условимся: если ноль, то можно закрывать, а если единица, то нельзя
    helptip.v = 0;
    // Берем последний дочерний тег
    var b = t.children[(t.children.length - 1)];
    // Если открыт, то закрываем
    if (b.style.display == "block") helptipx();
    else {
        // Закрываем все
        helptipx();
        // Открываем текущий
        b.style.display = "block";
        document.querySelector(".helptip").style.background = '#ebebeb';
        // Запрещаем закрытие подсказки вызванного последующими событиями
        helptip.v = 1;
    }
}
// Функция закрывает все подсказки
function helptipx() {
    // Если было нажатие для открытия подсказки, то закрывать нельзя
    // Поэтому проверяем:
    if (helptip.v == 1) {
        // Разрешаем закрытие в будущем
        helptip.v = 0;
        // И выходим
        return;
    }
    // Выбираем все теги с классом .helptip
    var s = document.querySelectorAll(".helptip");
    // и перебираем их циклом
    for (var i = 0; i < s.length; i++) {
        // Скрываем последний дочерний тег
        s[i].children[(s[i].children.length - 1)].style.display = "none";
        document.querySelector(".helptip").style.background = 'none';
    }
}
/* end tooltip */

/* modal */
$(document).ready(function() {

    //get the height and width of the page
    var window_width = $(window).width();
    var window_height = $(window).height();
    //vertical and horizontal centering of modal window(s)
    /*we will use each function so if we have more then 1
    modal window we center them all*/
    $('.modal_window').each(function() {
        //get the height and width of the modal
        //var modal_height = $(this).outerHeight();
        //var modal_width = $(this).outerWidth();
        //calculate top and left offset needed for centering
        //var top = (window_height-modal_height)/2;
        //var left = (window_width-modal_width)/2;
        //apply new top and left css values
        //$(this).css({'top' : top , 'left' : left});

    });

    $('.activate_modal').click(function() {
        //get the id of the modal window stored in the name of the activating element
        var modal_id = $(this).attr('name');
        //use the function to show it
        show_modal(modal_id);
    });

    $('.close_modal').click(function() {
        //use the function to close it
        close_modal();
    });
    //THE FUNCTIONS

    function close_modal() {
        //hide the mask
        $('#mask').fadeOut(500);
        $('#wrapper').css({
            'overflow': ''
        });
        //hide modal window(s)
        $('.modal_window').fadeOut(500);
    }

    function show_modal(modal_id) {
        //set display to block and opacity to 0 so we can use fadeTo
        $('#mask').css({
            'display': 'block',
            opacity: 0.5
        });
        $('#wrapper').css({
            'overflow': 'hidden'
        });
        //fade in the mask to opacity 0.8
        $('#mask').fadeTo(500, 0.5);
        //show the modal window
        $('#' + modal_id).fadeIn(500);

    }
});
/* end modal */