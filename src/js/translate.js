onmessage = function(e){

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
}

var y = e.data[0][0];
y.reduce = [].reduce;
y.join = [].join;
y.multiGetRange = [].multiGetRange;
y.slice = [].slice;
// for (var i = 0; i < e.data[0][0].length; i++) {
//   y[i] = e.data[0][0][i];
// }

var f_Lang = e.data[1][0];
for (var i = 0; i < e.data[1][0].length; i++) {
f_Lang[i] = e.data[1][0][i];
}

var Lang = e.data[2][0];
for (var i = 0; i < e.data[2][0].length; i++) {
Lang[i] = e.data[2][0][i];
}

var firstArr = y.slice();
var newArr;
var itemsRange;



newArr = y.reduce(function(arr, item, ci) {

    

                    for (var di = ci; di < y.length; di++) {

                        if (di <= ci) {
                            itemsRange = item;
                        } else {
                            itemsRange = y.multiGetRange(ci, di).join(' ');
                        }

                        f_Lang.reduce(function(previousValue, prev, i, cur) {
                        	
                            if (('' + itemsRange).toLowerCase() == ('' + prev).toLowerCase()) {

                                if ((di - ci) >= 1) {

                                    // изменяет заданное количество элементов массива
                                    var removeValFromIndex = range(ci, di-1);
                                   
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
                }, firstArr );


postMessage(newArr);

};