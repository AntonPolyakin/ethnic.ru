//тут был словарь 
//var rus = [0, 'хлеб', 'село','кошка','друг', 'село','кошка друг']; 
//var myv = [0, 'кше', 'веле','катка','ялга', 'велесь','спанчбоб']; 

// Функция проверки установленного первого языка (first language);
var f_Lang;

function f_Lang_check() {
    f_Lang = $('#selector_language').val();
    //if(f_Lang==='find') {f_Lang = rus};
    if (f_Lang === 'rus') {
        f_Lang = rus;
    }
    if (f_Lang === 'myv') {
        f_Lang = myv;
    }
    return f_Lang;
}

// проверить исходный язык после загрузки документа
$(window).on("load", function() {
    f_Lang_check();
});
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

    function lastWord(o) {
        return ("" + o).replace(/[\s-]+$/, '').split(/[\s-]/).pop();
    }
    /*
    lastWord('This is a test.'); // => 'test.'
    lastWord('Here is something to-do.'); // => 'do.'
    */

    if (lastWord(obj.value.length) > 0) {
        for (var i = 0; i < f_Lang.length; i++) {
            //какого хера тут треугольные числа
            if (reg.test(f_Lang[i])) {
                t.innerHTML = f_Lang[i];

                t.style.display = "block";
            } else if (reg.test(f_Lang[i + 1])) {
                t2.innerHTML = f_Lang[i + 1];
                t2.style.display = "block";
            } else if (reg.test(f_Lang[i + 3])) {
                t3.innerHTML = f_Lang[i + 3];
                t3.style.display = "block";

            } else if (reg.test(f_Lang[i + 6])) {
                t4.innerHTML = f_Lang[i + 6];
                t4.style.display = "block";
            } else if (reg.test(f_Lang[i + 10])) {
                t5.innerHTML = f_Lang[i + 10];
                t5.style.display = "block";
            }


        }
    }
    $(function() {
        var original = [];
        $('.words_hints').each(function() {
            var thisText = $(this).text();
            if (original[thisText]) {
                $(this).css('display', 'none');
            } else {
                original[thisText] = true;
            }
        });
    });

}

/*
var str = 'I like my dog'; 
var newEndStr = 'cat'; 
console.log(ReplaceLastWord(str, newEndStr)); // => I like my cat
*/
function ReplaceLastWord(str, newStr) {
    return str.replace(/\s\S+$/, newStr);
}

function setFocus() {      
    document.getElementById("field1").focus(); 
}
var words_counter;

function calc_words() {
    var val = $.trim($("#field1").val()).split(/\s+/g);
    words_counter = $.grep(val, function(str) {
        return $.trim(str).length > 0;
    }).length;
    return words_counter;
}

function word_paste(ids) {
    var a;
    if (words_counter > 1) {
        a = document.getElementById('field1').value = ReplaceLastWord(document.getElementById('field1').value, ' ' + ids.innerHTML);
        document.getElementById('autocomplete_words').style.visibility = "hidden";
        setFocus();
    } else {
        a = document.getElementById('field1').value = ids.innerHTML;
        document.getElementById('autocomplete_words').style.visibility = "hidden";
        setFocus();
    }
}
//конец живого поиска

function translate() {
    document.getElementById('field2').innerText = document.getElementById('field1').value;

    // $('select#language').change(function() {
    //     var lanRegion = $(this).val();
    //     localStorage.removeItem("lanRegion");
    //     localStorage.setItem('lanRegion', '' + lanRegion + '');
    // });

    var Lang = $('#language').val();
    
        if (Lang === 'rus') {
            Lang = rus;
        }
        if (Lang === 'myv') {
            Lang = myv;
        }

        if (Lang.length > 1) {
            ///////////////////////////////////////////////////////////main algorithm
            $('#field2').html(function(x, y) {
                //y=y.split(/\s* \s*/); only spaces 
                y = y.replace(/<[^>]+>/g, '');
                y = y.match(/[A-Za-z0-9а-яА-Я]+|./g);
                y.clean(' ');
                var newArr;
                var itemsRange;
                var firstArr = y.slice();

                newArr = y.reduce(function(arr, item, ci) {
                    for (var di = ci; di < y.length; di++) {

                        if (di <= ci) {
                            itemsRange = item;
                        } else {
                            itemsRange = y.multiGetRange(ci, di).join(' ');
                        }

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

                            if (('' + itemsRange).toLowerCase() == ('' + prev).toLowerCase()) {

                                if ((di - ci) >= 1) {

                                    // изменяет заданное количество элементов массива
                                    var removeValFromIndex = range(ci, di);
                                    for (var r = removeValFromIndex.length - 1; r >= 0; r--) {
                                        arr.splice(removeValFromIndex[r], 1, '');
                                    }
                                    return arr[di] = [itemsRange.replace(new RegExp('^' + prev + '$', 'gi'), Lang[i])];
                                } else {

                                    if (typeof arr[ci] == 'object') {
                                        return arr[ci].push(itemsRange.replace(new RegExp('^' + prev + '$', 'gi'), Lang[i]));
                                    } else {
                                        return arr[ci] = [itemsRange.replace(new RegExp('^' + prev + '$', 'gi'), Lang[i])];
                                    }
                                }

                            } else {
                                return [itemsRange.toString().replace(new RegExp('^' + prev + '$', 'gi'), Lang[i])];
                            }

                        }, 0);

                    }

                    return arr;
                }, firstArr);

                var fieldContent = '';
                newArr.clean('');
                newArr.reduce(function(mas, newItem, i) {
                    if (newArr[i][1] === undefined || typeof(newArr[i]) == 'string') {
                        return fieldContent = fieldContent + '<span>' + newItem + '</span> ';
                    } else {
                        return fieldContent = fieldContent +
                            '<span id="word-' + i + '" class="word-show-hint" data-hint="#word-hint-' + i + '">' + newArr[i][0] + '</span> ' + '<div id="word-hint-' + i + '" class="word-hint"><ul class="selectMenuBox">' + generateList(newItem).innerHTML + '</ul></div>';
                    }

                }, y);

                return fieldContent;

            });
///////////////////////////////////////////////////////////end main algorithm

        }
    
}


//проверка наличия блоков и истории
function checkTitle() {
    var blockHide = $('#dictionary_history h4');
    if ($('.history_container .history_block').length <= 0) {
        blockHide.css("display", "none");
    } else {
        blockHide.css("display", "block");
    }
}
// вывод истории переводов
function addHistory(words, translation, l1t, l2t) {
    if ($('.history_container .history_block').length > 4) {
        $('.history_container .history_block:last').remove();
    }
    $('.history_container').prepend('<div class="history_block"><span class="history_text"><span class ="history_lang">' + l1t + ': </span>' + words + '<br><span class ="history_lang">' + l2t + ': </span>' + translation + '</span><button class="delete_history_block" onclick="$(this).parent().remove();checkTitle();"><i class="fa fa-times" aria-hidden="true"></i></button>' + '</div>').prependTo('.history_container');
    checkTitle();
}

// создание числового диапазона в виде массива
function range(start, count) {
    if (arguments.length == 1) {
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
Array.prototype.multiGetRange = function(lowEnd, highEnd) {
    var numArr = [],
        c = highEnd - lowEnd + 1;
    while (c--) {
        numArr[c] = highEnd--;
    }
    var args = Array.apply(null, numArr);
    var result = [];

    for (var i = 0; i < numArr.length; i++) {
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

//показ текста в консоли
function showLines() {
    var lines = getLines();
    console.log(
        lines.map(function(line) {
            return line.map(function(span) {
                return span.innerText;
            }).join('');
        }));
}

//разделение текста
function splitLines() {
    var p = document.querySelectorAll("#field2")[0];
    p.innerHTML = p.innerHTML.split(/\<span\>[\.]\<\/span\>/g).map(function(word) {
        return '<span class="parag">' + capitalizeFirstLetter(word) + '</span>'
    }).join('<span>.</span> ');

}

//? 
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

/* блок функций после загрузки страницы */
$('document').ready(function govno() {


    $('.translate_button').on('click', function(e) {
        // отменяем стандартное действие при клике
f_Lang_check();
        translate();
        splitLines();

        /* hint and select box */
        $(function() {
            $('.word-show-hint').on("click", function(e) {
                e = e || window.event;
                e.preventDefault();

                var ypos = $(this).position().top + 25; //sometimes .offset().top
                var xpos = $(this).position().left; //sometimes .offset().left
                var WordHint = $(this).data('hint');
                var WordId = $(this).attr('id');
                $(WordHint).css('top', ypos);
                $(WordHint).css('left', xpos);
                $(WordHint).toggle('fast');
                return false;

            });

            $('ul.selectMenuBox > li.option').click(function() {

                var parentId = $(this).parents(":eq(1)").attr('id').replace('hint-', '');
                $('#' + parentId).text($(this).text());
            });

            document.onclick = function(e) {
                if ($(e.target).hasClass('word-hint') === false)
                    $('.word-hint').hide('fast');
                return;
            }
        });
        /* end hint and select box */

        addHistory(document.getElementById('field1').value, document.getElementById('field2').innerText, $("#selector_language option:selected").text(), $("#language option:selected").text());

        //    showLines();
        e.preventDefault();

        // Получаем адрес страницы
        var href = window.location.href;

        // Передаем адрес страницы в функцию
        getContent(href, true);
    });
});
/* конец блока функций после загрузки страницы */

// Добавляем обработчик события popstate, 
// происходящего при нажатии на кнопку назад/вперед в браузере  
window.addEventListener("popstate", function(e) {
    // Передаем текущий URL
    getContent(location.pathname, false);
});

/* Функция загрузки контента */
function getContent(url, addEntry) {
    $.get(url).done(function(data) {
        // Обновление только текстового содержимого в сером блоке


        $('#field2').text();


        //$('#logo').html($(data).find("#logo").html());
        // Если был выполнен клик в меню - добавляем запись в стек истории сеанса
        // Если была нажата кнопка назад/вперед, добавлять записи в историю не надо

        if (addEntry == true) {
            // Добавляем запись в историю, используя pushState
            var new_url = document.getElementById('field1').value;
            new_url = new_url.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
            new_url = new_url.replace(/ /g, "_");
            window.history.pushState('', '', '?w=' + new_url);
        }

    });

}
/* конец функции загрузки контента */