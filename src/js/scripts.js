
/*preloader*/
// window.addEventListener("load", function() {
//     var myApp = (function() {

//       let dummyFunction = function() {
//         let preloader = document.all['js-preloader'];
//         preloader.classList.toggle('preloader-fadeout', true);
//         setTimeout(function() {
//           preloader.remove();
//       }, 1000);

//     };

//     return {
//         dummyFunction: dummyFunction
//     };

// })();


// myApp.dummyFunction();
// });
/*end preloader*/

/*swap language*/
$(document).ready(function() {
    $('#reverse_block button, .select__reverse button').on('click', function() {

        var val1 = $('#selector_language option:selected');
        var val2 = $('#language option:selected');


        $('#selector_language option:eq(' + val2.index() + ')').prop('selected', true);
        $('#language option:eq(' + val1.index() + ')').prop('selected', true);
        $('#selector_language, #language').trigger('click');
        $('#selector_language, #language').trigger('change');
    });
});
/*end swap language*/


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
$(window).on("load", function() {

    $(function() {
        $("#selector_language, #language").load("../../languages.html");
    });




    /*end hide copy language*/
    // change text in aside buttons
    function getSelectedToButtons() {
        $('.select__first-lang button').html($('#selector_language option:selected').text());
        $('.select__second-lang button').html($('#language option:selected').text());
        f_Lang_check();
    }

//hide copy language

$("#text_fields select").each(function(cSelect) {
    $(this).data('stored-value', $(this).val());
});


function disableCopyItems(selector) {
    var cSelected = $(selector).val();
    var cPrevious = $(selector).data('stored-value');
    $(selector).data('stored-value', cSelected);

    var otherSelects = $("#text_fields select").not(selector);

    otherSelects.find('option[value=' + cPrevious + ']').removeAttr('disabled');
    otherSelects.find('option[value=' + cSelected + ']').attr('disabled', 'disabled');
    getSelectedToButtons();
}

$('#text_fields select').change(function(e){disableCopyItems(e.target)});


    //buttom's events
    $('.select_buttons button').click(function(e) {
        var selectBlock, selectBlockJS;
        if($(e.target).parent().index() == 0){
            selectBlock = $('#selector_language');
            selectBlockJS = document.getElementById('selector_language');
        }else if ($(e.target).parent().index() == 2){
            selectBlock = $('#language');
            selectBlockJS = document.getElementById('language');
        }

        disableCopyItems(selectBlockJS);
        selectBlock.trigger('click');
        $(e.target).addClass('active');
        $(e.target).parent().siblings('.select_buttons').find('button').removeClass('active');
        getSelectedToButtons();

    });

// getmenu
function getSelectItems(thisSelect){
    $('.select-lang-menu').html('<ul class="lang-list"></ul>');
    $(thisSelect + ' option').each(function() {
        if (!$(this).attr('disabled')) {
            $('ul.lang-list').append('<li><a href="#" data-value="' + $(this).val() + '">' + $(this).text() + '</a></li>');
        } else {
            $('ul.lang-list').append('<li><span data-value="' + $(this).val() + '">' + $(this).text() + '</span></li>');
        }
    });
}

    //Select into ul list
    var container = document;
    container.addEventListener("click", function(event) {
        if (event.target.tagName === 'SELECT' && event.target.id === 'selector_language' || event.target.id === 'language') {


            var thisSelect = 'select#' + event.target.id;

            getSelectItems(thisSelect);
            //set first item as active on ready and update list when dropdown selected
            var e = $('option:selected', event.target).index();
            $('ul.lang-list li:eq(' + e + ')').addClass('active');

            // set active to selction and sync

            // update dropdown when links selected
            $('ul.lang-list > li > a').click(function() {


                var e = $(this).parent().index();

                if (!$(thisSelect + ' option:eq(' + e + ')').attr('disabled')) {
                    $('ul.lang-list > li').removeClass('active');
                    $(this).parent().addClass('active');

                    $(thisSelect + ' option:eq(' + e + ')').prop('selected', true);


                    $(thisSelect).trigger('click');
                    $(thisSelect).trigger('change');
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
        $('.modal_header').remove().fadeOut(500);

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

        $('.modal_window').prepend('<div class="modal_header"><i class="fa fa-times close_modal" aria-hidden="true"></i></div>');
        //fade in the mask to opacity 0.8
        $('#mask').fadeTo(500, 0.5);
        //show the modal window
        $('#' + modal_id).fadeIn(500);

        $('i.close_modal').click(function() {
        //use the function to close it
        close_modal();
    });


    }
});
/* end modal */