! function(e) {
    var i = {};

    function t(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = i, t.d = function(e, i, n) {
        t.o(e, i) || Object.defineProperty(e, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.n = function(e) {
        var i = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(i, "a", i), i
    }, t.o = function(e, i) {
        return Object.prototype.hasOwnProperty.call(e, i)
    }, t.p = "", t(t.s = 86)
}([function(e, i, t) {
    var n = t(6),
        r = t(13),
        a = t(12),
        s = t(36),
        c = t(24),
        o = function(e, i, t) {
            var u, y, l, f, k = e & o.F,
                p = e & o.G,
                h = e & o.S,
                d = e & o.P,
                v = e & o.B,
                w = p ? n : h ? n[i] || (n[i] = {}) : (n[i] || {}).prototype,
                m = p ? r : r[i] || (r[i] = {}),
                b = m.prototype || (m.prototype = {});
            for (u in p && (t = i), t) l = ((y = !k && w && void 0 !== w[u]) ? w : t)[u], f = v && y ? c(l, n) : d && "function" == typeof l ? c(Function.call, l) : l, w && s(w, u, l, e & o.U), m[u] != l && a(m, u, f), d && b[u] != l && (b[u] = l)
        };
    n.core = r, o.F = 1, o.G = 2, o.S = 4, o.P = 8, o.B = 16, o.W = 32, o.U = 64, o.R = 128, e.exports = o
}, function(e, i, t) {
    "use strict";
    var n = t(7);
    e.exports = function(e, i) {
        return !!e && n(function() {
            i ? e.call(null, function() {}, 1) : e.call(null)
        })
    }
}, function(e, i, t) {
    var n = t(34)("wks"),
        r = t(25),
        a = t(6).Symbol,
        s = "function" == typeof a;
    (e.exports = function(e) {
        return n[e] || (n[e] = s && a[e] || (s ? a : r)("Symbol." + e))
    }).store = n
}, function(e, i, t) {
    var n = t(21),
        r = Math.min;
    e.exports = function(e) {
        return e > 0 ? r(n(e), 9007199254740991) : 0
    }
}, function(e, i, t) {
    var n = t(24),
        r = t(16),
        a = t(5),
        s = t(3),
        c = t(61);
    e.exports = function(e, i) {
        var t = 1 == e,
            o = 2 == e,
            u = 3 == e,
            y = 4 == e,
            l = 6 == e,
            f = 5 == e || l,
            k = i || c;
        return function(i, c, p) {
            for (var h, d, v = a(i), w = r(v), m = n(c, p, 3), b = s(w.length), E = 0, x = t ? k(i, b) : o ? k(i, 0) : void 0; b > E; E++)
                if ((f || E in w) && (d = m(h = w[E], E, v), e))
                    if (t) x[E] = d;
                    else if (d) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return h;
                case 6:
                    return E;
                case 2:
                    x.push(h)
            } else if (y) return !1;
            return l ? -1 : u || y ? y : x
        }
    }
}, function(e, i, t) {
    var n = t(27);
    e.exports = function(e) {
        return Object(n(e))
    }
}, function(e, i) {
    var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = t)
}, function(e, i) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, i, t) {
    var n = t(2)("unscopables"),
        r = Array.prototype;
    void 0 == r[n] && t(12)(r, n, {}), e.exports = function(e) {
        r[n][e] = !0
    }
}, function(e, i, t) {
    var n = t(16),
        r = t(27);
    e.exports = function(e) {
        return n(r(e))
    }
}, function(e, i, t) {
    e.exports = !t(7)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, i, t) {
    var n = t(20),
        r = t(81),
        a = t(80),
        s = Object.defineProperty;
    i.f = t(10) ? Object.defineProperty : function(e, i, t) {
        if (n(e), i = a(i, !0), n(t), r) try {
            return s(e, i, t)
        } catch (e) {}
        if ("get" in t || "set" in t) throw TypeError("Accessors not supported!");
        return "value" in t && (e[i] = t.value), e
    }
}, function(e, i, t) {
    var n = t(11),
        r = t(26);
    e.exports = t(10) ? function(e, i, t) {
        return n.f(e, i, r(1, t))
    } : function(e, i, t) {
        return e[i] = t, e
    }
}, function(e, i) {
    var t = e.exports = {
        version: "2.5.6"
    };
    "number" == typeof __e && (__e = t)
}, function(e, i, t) {
    var n = t(21),
        r = Math.max,
        a = Math.min;
    e.exports = function(e, i) {
        return (e = n(e)) < 0 ? r(e + i, 0) : a(e, i)
    }
}, function(e, i) {
    var t = {}.toString;
    e.exports = function(e) {
        return t.call(e).slice(8, -1)
    }
}, function(e, i, t) {
    var n = t(15);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == n(e) ? e.split("") : Object(e)
    }
}, function(e, i) {
    e.exports = {}
}, function(e, i) {
    var t = {}.hasOwnProperty;
    e.exports = function(e, i) {
        return t.call(e, i)
    }
}, function(e, i) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, i, t) {
    var n = t(19);
    e.exports = function(e) {
        if (!n(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, i) {
    var t = Math.ceil,
        n = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
    }
}, function(e, i, t) {
    var n = t(34)("keys"),
        r = t(25);
    e.exports = function(e) {
        return n[e] || (n[e] = r(e))
    }
}, function(e, i) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, i, t) {
    var n = t(23);
    e.exports = function(e, i, t) {
        if (n(e), void 0 === i) return e;
        switch (t) {
            case 1:
                return function(t) {
                    return e.call(i, t)
                };
            case 2:
                return function(t, n) {
                    return e.call(i, t, n)
                };
            case 3:
                return function(t, n, r) {
                    return e.call(i, t, n, r)
                }
        }
        return function() {
            return e.apply(i, arguments)
        }
    }
}, function(e, i) {
    var t = 0,
        n = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36))
    }
}, function(e, i) {
    e.exports = function(e, i) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: i
        }
    }
}, function(e, i) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, i, t) {
    var n = t(23),
        r = t(5),
        a = t(16),
        s = t(3);
    e.exports = function(e, i, t, c, o) {
        n(i);
        var u = r(e),
            y = a(u),
            l = s(u.length),
            f = o ? l - 1 : 0,
            k = o ? -1 : 1;
        if (t < 2)
            for (;;) {
                if (f in y) {
                    c = y[f], f += k;
                    break
                }
                if (f += k, o ? f < 0 : l <= f) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; o ? f >= 0 : l > f; f += k) f in y && (c = i(c, y[f], f, u));
        return c
    }
}, function(e, i, t) {
    "use strict";
    var n = t(11),
        r = t(26);
    e.exports = function(e, i, t) {
        i in e ? n.f(e, i, r(0, t)) : e[i] = t
    }
}, function(e, i, t) {
    var n = t(15);
    e.exports = Array.isArray || function(e) {
        return "Array" == n(e)
    }
}, function(e, i, t) {
    var n = t(11).f,
        r = t(18),
        a = t(2)("toStringTag");
    e.exports = function(e, i, t) {
        e && !r(e = t ? e : e.prototype, a) && n(e, a, {
            configurable: !0,
            value: i
        })
    }
}, function(e, i, t) {
    var n = t(6).document;
    e.exports = n && n.documentElement
}, function(e, i) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, i, t) {
    var n = t(13),
        r = t(6),
        a = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (e.exports = function(e, i) {
        return a[e] || (a[e] = void 0 !== i ? i : {})
    })("versions", []).push({
        version: n.version,
        mode: t(38) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev"
    })
}, function(e, i, t) {
    var n = t(9),
        r = t(3),
        a = t(14);
    e.exports = function(e) {
        return function(i, t, s) {
            var c, o = n(i),
                u = r(o.length),
                y = a(s, u);
            if (e && t != t) {
                for (; u > y;)
                    if ((c = o[y++]) != c) return !0
            } else
                for (; u > y; y++)
                    if ((e || y in o) && o[y] === t) return e || y || 0;
            return !e && -1
        }
    }
}, function(e, i, t) {
    var n = t(6),
        r = t(12),
        a = t(18),
        s = t(25)("src"),
        c = Function.toString,
        o = ("" + c).split("toString");
    t(13).inspectSource = function(e) {
        return c.call(e)
    }, (e.exports = function(e, i, t, c) {
        var u = "function" == typeof t;
        u && (a(t, "name") || r(t, "name", i)), e[i] !== t && (u && (a(t, s) || r(t, s, e[i] ? "" + e[i] : o.join(String(i)))), e === n ? e[i] = t : c ? e[i] ? e[i] = t : r(e, i, t) : (delete e[i], r(e, i, t)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[s] || c.call(this)
    })
}, function(e, i, t) {
    var n = t(19),
        r = t(6).document,
        a = n(r) && n(r.createElement);
    e.exports = function(e) {
        return a ? r.createElement(e) : {}
    }
}, function(e, i) {
    e.exports = !1
}, function(e, i, t) {
    "use strict";
    var n = t(38),
        r = t(0),
        a = t(36),
        s = t(12),
        c = t(17),
        o = t(79),
        u = t(31),
        y = t(74),
        l = t(2)("iterator"),
        f = !([].keys && "next" in [].keys()),
        k = function() {
            return this
        };
    e.exports = function(e, i, t, p, h, d, v) {
        o(t, i, p);
        var w, m, b, E = function(e) {
                if (!f && e in K) return K[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new t(this, e)
                        }
                }
                return function() {
                    return new t(this, e)
                }
            },
            x = i + " Iterator",
            g = "values" == h,
            C = !1,
            K = e.prototype,
            A = K[l] || K["@@iterator"] || h && K[h],
            R = A || E(h),
            P = h ? g ? E("entries") : R : void 0,
            I = "Array" == i && K.entries || A;
        if (I && (b = y(I.call(new e))) !== Object.prototype && b.next && (u(b, x, !0), n || "function" == typeof b[l] || s(b, l, k)), g && A && "values" !== A.name && (C = !0, R = function() {
                return A.call(this)
            }), n && !v || !f && !C && K[l] || s(K, l, R), c[i] = R, c[x] = k, h)
            if (w = {
                    values: g ? R : E("values"),
                    keys: d ? R : E("keys"),
                    entries: P
                }, v)
                for (m in w) m in K || a(K, m, w[m]);
            else r(r.P + r.F * (f || C), i, w);
        return w
    }
}, function(e, i, t) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    i.default = [{
        key: "q",
        ascii: "113"
    }, {
        key: "w",
        ascii: "119"
    }, {
        key: "e",
        ascii: "101"
    }, {
        key: "r",
        ascii: "114"
    }, {
        key: "t",
        ascii: "116"
    }, {
        key: "y",
        ascii: "121"
    }, {
        key: "u",
        ascii: "117"
    }, {
        key: "i",
        ascii: "105"
    }, {
        key: "o",
        ascii: "111"
    }, {
        key: "p",
        ascii: "112"
    }, {
        key: "a",
        ascii: "97"
    }, {
        key: "s",
        ascii: "115"
    }, {
        key: "d",
        ascii: "100"
    }, {
        key: "f",
        ascii: "102"
    }, {
        key: "g",
        ascii: "103"
    }, {
        key: "h",
        ascii: "104"
    }, {
        key: "j",
        ascii: "106"
    }, {
        key: "k",
        ascii: "107"
    }, {
        key: "l",
        ascii: "108"
    }, {
        key: "'",
        ascii: "39"
    }, {
        key: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        action: "uppercase"
    }, {
        key: "z",
        ascii: "122"
    }, {
        key: "x",
        ascii: "120"
    }, {
        key: "c",
        ascii: "99"
    }, {
        key: "v",
        ascii: "118"
    }, {
        key: "b",
        ascii: "98"
    }, {
        key: "n",
        ascii: "110"
    }, {
        key: "m",
        ascii: "109"
    }, {
        key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        ascii: "8",
        action: "backspace",
        class: "backspace-key"
    }, {
        key: "#123?",
        action: "numerics"
    }, {
        key: ",",
        ascii: "44"
    }, {
        key: "",
        action: "emotes"
    }, {
        key: "Space",
        ascii: "32",
        class: "space-key"
    }, {
        key: ".",
        ascii: "46"
    }, {
        key: "Enter",
        ascii: "13",
        class: "enter-key",
        action: "enter"
    }, {
        key: "Q",
        ascii: "81"
    }, {
        key: "W",
        ascii: "87"
    }, {
        key: "E",
        ascii: "69"
    }, {
        key: "R",
        ascii: "82"
    }, {
        key: "T",
        ascii: "84"
    }, {
        key: "Y",
        ascii: "89"
    }, {
        key: "U",
        ascii: "85"
    }, {
        key: "I",
        ascii: "73"
    }, {
        key: "O",
        ascii: "79"
    }, {
        key: "P",
        ascii: "80"
    }, {
        key: "A",
        ascii: "65"
    }, {
        key: "S",
        ascii: "83"
    }, {
        key: "D",
        ascii: "68"
    }, {
        key: "F",
        ascii: "70"
    }, {
        key: "G",
        ascii: "71"
    }, {
        key: "H",
        ascii: "72"
    }, {
        key: "J",
        ascii: "74"
    }, {
        key: "K",
        ascii: "75"
    }, {
        key: "L",
        ascii: "76"
    }, {
        key: "'",
        ascii: "39"
    }, {
        key: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        action: "lowercase"
    }, {
        key: "Z",
        ascii: "90"
    }, {
        key: "X",
        ascii: "88"
    }, {
        key: "C",
        ascii: "67"
    }, {
        key: "V",
        ascii: "86"
    }, {
        key: "B",
        ascii: "66"
    }, {
        key: "N",
        ascii: "78"
    }, {
        key: "M",
        ascii: "77"
    }, {
        key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        ascii: "8",
        action: "backspace",
        class: "backspace-key"
    }, {
        key: "#123?",
        action: "numerics"
    }, {
        key: ",",
        ascii: "44"
    }, {
        key: "",
        action: "emotes"
    }, {
        key: "Space",
        ascii: "32",
        class: "space-key"
    }, {
        key: ".",
        ascii: "46"
    }, {
        key: "Enter",
        ascii: "13",
        class: "enter-key",
        action: "enter"
    }, {
        key: "1",
        ascii: "49"
    }, {
        key: "2",
        ascii: "50"
    }, {
        key: "3",
        ascii: "51"
    }, {
        key: "4",
        ascii: "52"
    }, {
        key: "5",
        ascii: "53"
    }, {
        key: "6",
        ascii: "54"
    }, {
        key: "7",
        ascii: "55"
    }, {
        key: "8",
        ascii: "56"
    }, {
        key: "9",
        ascii: "57"
    }, {
        key: "0",
        ascii: "48"
    }, {
        key: "@",
        ascii: "64"
    }, {
        key: "#",
        ascii: "35"
    }, {
        key: "€",
        ascii: "8364"
    }, {
        key: "_",
        ascii: "95"
    }, {
        key: "&",
        ascii: "38"
    }, {
        key: "-",
        ascii: "45"
    }, {
        key: "+",
        ascii: "43"
    }, {
        key: "(",
        ascii: "40"
    }, {
        key: ")",
        ascii: "41"
    }, {
        key: "/",
        ascii: "47"
    }, {
        key: "=\\<",
        action: "extrakeys"
    }, {
        key: "*",
        ascii: "42"
    }, {
        key: '"',
        ascii: "34"
    }, {
        key: "'",
        ascii: "39"
    }, {
        key: ":",
        ascii: "58"
    }, {
        key: ";",
        ascii: "59"
    }, {
        key: "!",
        ascii: "33"
    }, {
        key: "?",
        ascii: "63"
    }, {
        key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        ascii: "8",
        action: "backspace",
        class: "backspace-key"
    }, {
        key: "ABC",
        action: "lowercase"
    }, {
        key: ",",
        ascii: "44"
    }, {
        key: "",
        action: "emotes"
    }, {
        key: "Space",
        ascii: "32",
        class: "space-key"
    }, {
        key: ".",
        ascii: "46"
    }, {
        key: "Enter",
        ascii: "13",
        class: "enter-key",
        action: "enter"
    }, {
        key: "~",
        ascii: "126"
    }, {
        key: "`",
        ascii: "96"
    }, {
        key: "|",
        ascii: "124"
    }, {
        key: "·",
        ascii: "183"
    }, {
        key: "=",
        ascii: "61"
    }, {
        key: "^",
        ascii: "94"
    }, {
        key: "{",
        ascii: "123"
    }, {
        key: "}",
        ascii: "125"
    }, {
        key: "%",
        ascii: "37"
    }, {
        key: "\\",
        ascii: "92"
    }, {
        key: "[",
        ascii: "91"
    }, {
        key: "]",
        ascii: "93"
    }, {
        key: "€",
        ascii: "8364"
    }, {
        key: "_",
        ascii: "95"
    }, {
        key: "&",
        ascii: "38"
    }, {
        key: "-",
        ascii: "45"
    }, {
        key: "+",
        ascii: "43"
    }, {
        key: "(",
        ascii: "40"
    }, {
        key: ")",
        ascii: "41"
    }, {
        key: "/",
        ascii: "47"
    }, {
        key: "#123?",
        action: "numerics"
    }, {
        key: "*",
        ascii: "42"
    }, {
        key: '"',
        ascii: "34"
    }, {
        key: "'",
        ascii: "39"
    }, {
        key: ":",
        ascii: "58"
    }, {
        key: ";",
        ascii: "59"
    }, {
        key: "!",
        ascii: "33"
    }, {
        key: "?",
        ascii: "63"
    }, {
        key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        ascii: "8",
        action: "backspace",
        class: "backspace-key"
    }]
}, function(e, i, t) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    i.default = [{
        key: "a",
        ascii: "97"
    }, {
        key: "z",
        ascii: "122"
    }, {
        key: "e",
        ascii: "101"
    }, {
        key: "r",
        ascii: "114"
    }, {
        key: "t",
        ascii: "116"
    }, {
        key: "y",
        ascii: "121"
    }, {
        key: "u",
        ascii: "117"
    }, {
        key: "i",
        ascii: "105"
    }, {
        key: "o",
        ascii: "111"
    }, {
        key: "p",
        ascii: "112"
    }, {
        key: "q",
        ascii: "113"
    }, {
        key: "s",
        ascii: "115"
    }, {
        key: "d",
        ascii: "100"
    }, {
        key: "f",
        ascii: "102"
    }, {
        key: "g",
        ascii: "103"
    }, {
        key: "h",
        ascii: "104"
    }, {
        key: "j",
        ascii: "106"
    }, {
        key: "k",
        ascii: "107"
    }, {
        key: "l",
        ascii: "108"
    }, {
        key: "m",
        ascii: "109"
    }, {
        key: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        action: "uppercase"
    }, {
        key: "x",
        ascii: "120"
    }, {
        key: "w",
        ascii: "119"
    }, {
        key: "c",
        ascii: "99"
    }, {
        key: "v",
        ascii: "118"
    }, {
        key: "b",
        ascii: "98"
    }, {
        key: "n",
        ascii: "110"
    }, {
        key: "'",
        ascii: "39"
    }, {
        key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        ascii: "8",
        action: "backspace",
        class: "backspace-key"
    }, {
        key: "#123?",
        action: "numerics"
    }, {
        key: ",",
        ascii: "44"
    }, {
        key: "",
        action: "emotes"
    }, {
        key: "Space",
        ascii: "32",
        class: "space-key"
    }, {
        key: ".",
        ascii: "46"
    }, {
        key: "Enter",
        ascii: "13",
        class: "enter-key",
        action: "enter"
    }, {
        key: "A",
        ascii: "65"
    }, {
        key: "Z",
        ascii: "90"
    }, {
        key: "E",
        ascii: "69"
    }, {
        key: "R",
        ascii: "82"
    }, {
        key: "T",
        ascii: "84"
    }, {
        key: "Y",
        ascii: "89"
    }, {
        key: "U",
        ascii: "85"
    }, {
        key: "I",
        ascii: "73"
    }, {
        key: "O",
        ascii: "79"
    }, {
        key: "P",
        ascii: "80"
    }, {
        key: "Q",
        ascii: "81"
    }, {
        key: "S",
        ascii: "83"
    }, {
        key: "D",
        ascii: "68"
    }, {
        key: "F",
        ascii: "70"
    }, {
        key: "G",
        ascii: "71"
    }, {
        key: "H",
        ascii: "72"
    }, {
        key: "J",
        ascii: "74"
    }, {
        key: "K",
        ascii: "75"
    }, {
        key: "L",
        ascii: "76"
    }, {
        key: "M",
        ascii: "77"
    }, {
        key: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        action: "lowercase"
    }, {
        key: "X",
        ascii: "88"
    }, {
        key: "W",
        ascii: "87"
    }, {
        key: "C",
        ascii: "67"
    }, {
        key: "V",
        ascii: "86"
    }, {
        key: "B",
        ascii: "66"
    }, {
        key: "N",
        ascii: "78"
    }, {
        key: "'",
        ascii: "39"
    }, {
        key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        ascii: "8",
        action: "backspace",
        class: "backspace-key"
    }, {
        key: "#123?",
        action: "numerics"
    }, {
        key: ",",
        ascii: "44"
    }, {
        key: "",
        action: "emotes"
    }, {
        key: "Space",
        ascii: "32",
        class: "space-key"
    }, {
        key: ".",
        ascii: "46"
    }, {
        key: "Enter",
        ascii: "13",
        class: "enter-key",
        action: "enter"
    }, {
        key: "1",
        ascii: "49"
    }, {
        key: "2",
        ascii: "50"
    }, {
        key: "3",
        ascii: "51"
    }, {
        key: "4",
        ascii: "52"
    }, {
        key: "5",
        ascii: "53"
    }, {
        key: "6",
        ascii: "54"
    }, {
        key: "7",
        ascii: "55"
    }, {
        key: "8",
        ascii: "56"
    }, {
        key: "9",
        ascii: "57"
    }, {
        key: "0",
        ascii: "48"
    }, {
        key: "@",
        ascii: "64"
    }, {
        key: "#",
        ascii: "35"
    }, {
        key: "€",
        ascii: "8364"
    }, {
        key: "_",
        ascii: "95"
    }, {
        key: "&",
        ascii: "38"
    }, {
        key: "-",
        ascii: "45"
    }, {
        key: "+",
        ascii: "43"
    }, {
        key: "(",
        ascii: "40"
    }, {
        key: ")",
        ascii: "41"
    }, {
        key: "/",
        ascii: "47"
    }, {
        key: "=\\<",
        action: "extrakeys"
    }, {
        key: "*",
        ascii: "42"
    }, {
        key: '"',
        ascii: "34"
    }, {
        key: "'",
        ascii: "39"
    }, {
        key: ":",
        ascii: "58"
    }, {
        key: ";",
        ascii: "59"
    }, {
        key: "!",
        ascii: "33"
    }, {
        key: "?",
        ascii: "63"
    }, {
        key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        ascii: "8",
        action: "backspace",
        class: "backspace-key"
    }, {
        key: "ABC",
        action: "lowercase"
    }, {
        key: ",",
        ascii: "44"
    }, {
        key: "",
        action: "emotes"
    }, {
        key: "Space",
        ascii: "32",
        class: "space-key"
    }, {
        key: ".",
        ascii: "46"
    }, {
        key: "Enter",
        ascii: "13",
        class: "enter-key",
        action: "enter"
    }, {
        key: "~",
        ascii: "126"
    }, {
        key: "`",
        ascii: "96"
    }, {
        key: "|",
        ascii: "124"
    }, {
        key: "·",
        ascii: "183"
    }, {
        key: "=",
        ascii: "61"
    }, {
        key: "^",
        ascii: "94"
    }, {
        key: "{",
        ascii: "123"
    }, {
        key: "}",
        ascii: "125"
    }, {
        key: "%",
        ascii: "37"
    }, {
        key: "\\",
        ascii: "92"
    }, {
        key: "[",
        ascii: "91"
    }, {
        key: "]",
        ascii: "93"
    }, {
        key: "€",
        ascii: "8364"
    }, {
        key: "_",
        ascii: "95"
    }, {
        key: "&",
        ascii: "38"
    }, {
        key: "-",
        ascii: "45"
    }, {
        key: "+",
        ascii: "43"
    }, {
        key: "(",
        ascii: "40"
    }, {
        key: ")",
        ascii: "41"
    }, {
        key: "/",
        ascii: "47"
    }, {
        key: "#123?",
        action: "numerics"
    }, {
        key: "*",
        ascii: "42"
    }, {
        key: '"',
        ascii: "34"
    }, {
        key: "'",
        ascii: "39"
    }, {
        key: ":",
        ascii: "58"
    }, {
        key: ";",
        ascii: "59"
    }, {
        key: "!",
        ascii: "33"
    }, {
        key: "?",
        ascii: "63"
    }, {
        key: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        ascii: "8",
        action: "backspace",
        class: "backspace-key"
    }]
}, function(e, i) {
    e.exports = function(e, i) {
        return {
            value: i,
            done: !!e
        }
    }
}, function(e, i, t) {
    "use strict";
    var n = t(8),
        r = t(42),
        a = t(17),
        s = t(9);
    e.exports = t(39)(Array, "Array", function(e, i) {
        this._t = s(e), this._i = 0, this._k = i
    }, function() {
        var e = this._t,
            i = this._k,
            t = this._i++;
        return !e || t >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == i ? t : "values" == i ? e[t] : [t, e[t]])
    }, "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries")
}, function(e, i, t) {
    "use strict";
    var n = t(6),
        r = t(11),
        a = t(10),
        s = t(2)("species");
    e.exports = function(e) {
        var i = n[e];
        a && i && !i[s] && r.f(i, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, i, t) {
    t(44)("Array")
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(4)(6),
        a = "findIndex",
        s = !0;
    a in [] && Array(1)[a](function() {
        s = !1
    }), n(n.P + n.F * s, "Array", {
        findIndex: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), t(8)(a)
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(4)(5),
        a = !0;
    "find" in [] && Array(1).find(function() {
        a = !1
    }), n(n.P + n.F * a, "Array", {
        find: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), t(8)("find")
}, function(e, i, t) {
    "use strict";
    var n = t(5),
        r = t(14),
        a = t(3);
    e.exports = function(e) {
        for (var i = n(this), t = a(i.length), s = arguments.length, c = r(s > 1 ? arguments[1] : void 0, t), o = s > 2 ? arguments[2] : void 0, u = void 0 === o ? t : r(o, t); u > c;) i[c++] = e;
        return i
    }
}, function(e, i, t) {
    var n = t(0);
    n(n.P, "Array", {
        fill: t(48)
    }), t(8)("fill")
}, function(e, i, t) {
    "use strict";
    var n = t(5),
        r = t(14),
        a = t(3);
    e.exports = [].copyWithin || function(e, i) {
        var t = n(this),
            s = a(t.length),
            c = r(e, s),
            o = r(i, s),
            u = arguments.length > 2 ? arguments[2] : void 0,
            y = Math.min((void 0 === u ? s : r(u, s)) - o, s - c),
            l = 1;
        for (o < c && c < o + y && (l = -1, o += y - 1, c += y - 1); y-- > 0;) o in t ? t[c] = t[o] : delete t[c], c += l, o += l;
        return t
    }
}, function(e, i, t) {
    var n = t(0);
    n(n.P, "Array", {
        copyWithin: t(50)
    }), t(8)("copyWithin")
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(9),
        a = t(21),
        s = t(3),
        c = [].lastIndexOf,
        o = !!c && 1 / [1].lastIndexOf(1, -0) < 0;
    n(n.P + n.F * (o || !t(1)(c)), "Array", {
        lastIndexOf: function(e) {
            if (o) return c.apply(this, arguments) || 0;
            var i = r(this),
                t = s(i.length),
                n = t - 1;
            for (arguments.length > 1 && (n = Math.min(n, a(arguments[1]))), n < 0 && (n = t + n); n >= 0; n--)
                if (n in i && i[n] === e) return n || 0;
            return -1
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(35)(!1),
        a = [].indexOf,
        s = !!a && 1 / [1].indexOf(1, -0) < 0;
    n(n.P + n.F * (s || !t(1)(a)), "Array", {
        indexOf: function(e) {
            return s ? a.apply(this, arguments) || 0 : r(this, e, arguments[1])
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(28);
    n(n.P + n.F * !t(1)([].reduceRight, !0), "Array", {
        reduceRight: function(e) {
            return r(this, e, arguments.length, arguments[1], !0)
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(28);
    n(n.P + n.F * !t(1)([].reduce, !0), "Array", {
        reduce: function(e) {
            return r(this, e, arguments.length, arguments[1], !1)
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(4)(4);
    n(n.P + n.F * !t(1)([].every, !0), "Array", {
        every: function(e) {
            return r(this, e, arguments[1])
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(4)(3);
    n(n.P + n.F * !t(1)([].some, !0), "Array", {
        some: function(e) {
            return r(this, e, arguments[1])
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(4)(2);
    n(n.P + n.F * !t(1)([].filter, !0), "Array", {
        filter: function(e) {
            return r(this, e, arguments[1])
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(4)(1);
    n(n.P + n.F * !t(1)([].map, !0), "Array", {
        map: function(e) {
            return r(this, e, arguments[1])
        }
    })
}, function(e, i, t) {
    var n = t(19),
        r = t(30),
        a = t(2)("species");
    e.exports = function(e) {
        var i;
        return r(e) && ("function" != typeof(i = e.constructor) || i !== Array && !r(i.prototype) || (i = void 0), n(i) && null === (i = i[a]) && (i = void 0)), void 0 === i ? Array : i
    }
}, function(e, i, t) {
    var n = t(60);
    e.exports = function(e, i) {
        return new(n(e))(i)
    }
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(4)(0),
        a = t(1)([].forEach, !0);
    n(n.P + n.F * !a, "Array", {
        forEach: function(e) {
            return r(this, e, arguments[1])
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(23),
        a = t(5),
        s = t(7),
        c = [].sort,
        o = [1, 2, 3];
    n(n.P + n.F * (s(function() {
        o.sort(void 0)
    }) || !s(function() {
        o.sort(null)
    }) || !t(1)(c)), "Array", {
        sort: function(e) {
            return void 0 === e ? c.call(a(this)) : c.call(a(this), r(e))
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(32),
        a = t(15),
        s = t(14),
        c = t(3),
        o = [].slice;
    n(n.P + n.F * t(7)(function() {
        r && o.call(r)
    }), "Array", {
        slice: function(e, i) {
            var t = c(this.length),
                n = a(this);
            if (i = void 0 === i ? t : i, "Array" == n) return o.call(this, e, i);
            for (var r = s(e, t), u = s(i, t), y = c(u - r), l = new Array(y), f = 0; f < y; f++) l[f] = "String" == n ? this.charAt(r + f) : this[r + f];
            return l
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(9),
        a = [].join;
    n(n.P + n.F * (t(16) != Object || !t(1)(a)), "Array", {
        join: function(e) {
            return a.call(r(this), void 0 === e ? "," : e)
        }
    })
}, function(e, i, t) {
    "use strict";
    var n = t(0),
        r = t(29);
    n(n.S + n.F * t(7)(function() {
        function e() {}
        return !(Array.of.call(e) instanceof e)
    }), "Array", { of: function() {
            for (var e = 0, i = arguments.length, t = new("function" == typeof this ? this : Array)(i); i > e;) r(t, e, arguments[e++]);
            return t.length = i, t
        }
    })
}, function(e, i, t) {
    var n = t(2)("iterator"),
        r = !1;
    try {
        var a = [7][n]();
        a.return = function() {
            r = !0
        }, Array.from(a, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, i) {
        if (!i && !r) return !1;
        var t = !1;
        try {
            var a = [7],
                s = a[n]();
            s.next = function() {
                return {
                    done: t = !0
                }
            }, a[n] = function() {
                return s
            }, e(a)
        } catch (e) {}
        return t
    }
}, function(e, i, t) {
    var n = t(15),
        r = t(2)("toStringTag"),
        a = "Arguments" == n(function() {
            return arguments
        }());
    e.exports = function(e) {
        var i, t, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(t = function(e, i) {
            try {
                return e[i]
            } catch (e) {}
        }(i = Object(e), r)) ? t : a ? n(i) : "Object" == (s = n(i)) && "function" == typeof i.callee ? "Arguments" : s
    }
}, function(e, i, t) {
    var n = t(68),
        r = t(2)("iterator"),
        a = t(17);
    e.exports = t(13).getIteratorMethod = function(e) {
        if (void 0 != e) return e[r] || e["@@iterator"] || a[n(e)]
    }
}, function(e, i, t) {
    var n = t(17),
        r = t(2)("iterator"),
        a = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (n.Array === e || a[r] === e)
    }
}, function(e, i, t) {
    var n = t(20);
    e.exports = function(e, i, t, r) {
        try {
            return r ? i(n(t)[0], t[1]) : i(t)
        } catch (i) {
            var a = e.return;
            throw void 0 !== a && n(a.call(e)), i
        }
    }
}, function(e, i, t) {
    "use strict";
    var n = t(24),
        r = t(0),
        a = t(5),
        s = t(71),
        c = t(70),
        o = t(3),
        u = t(29),
        y = t(69);
    r(r.S + r.F * !t(67)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var i, t, r, l, f = a(e),
                k = "function" == typeof this ? this : Array,
                p = arguments.length,
                h = p > 1 ? arguments[1] : void 0,
                d = void 0 !== h,
                v = 0,
                w = y(f);
            if (d && (h = n(h, p > 2 ? arguments[2] : void 0, 2)), void 0 == w || k == Array && c(w))
                for (t = new k(i = o(f.length)); i > v; v++) u(t, v, d ? h(f[v], v) : f[v]);
            else
                for (l = w.call(f), t = new k; !(r = l.next()).done; v++) u(t, v, d ? s(l, h, [r.value, v], !0) : r.value);
            return t.length = v, t
        }
    })
}, function(e, i, t) {
    var n = t(0);
    n(n.S, "Array", {
        isArray: t(30)
    })
}, function(e, i, t) {
    var n = t(18),
        r = t(5),
        a = t(22)("IE_PROTO"),
        s = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = r(e), n(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}, function(e, i, t) {
    var n = t(18),
        r = t(9),
        a = t(35)(!1),
        s = t(22)("IE_PROTO");
    e.exports = function(e, i) {
        var t, c = r(e),
            o = 0,
            u = [];
        for (t in c) t != s && n(c, t) && u.push(t);
        for (; i.length > o;) n(c, t = i[o++]) && (~a(u, t) || u.push(t));
        return u
    }
}, function(e, i, t) {
    var n = t(75),
        r = t(33);
    e.exports = Object.keys || function(e) {
        return n(e, r)
    }
}, function(e, i, t) {
    var n = t(11),
        r = t(20),
        a = t(76);
    e.exports = t(10) ? Object.defineProperties : function(e, i) {
        r(e);
        for (var t, s = a(i), c = s.length, o = 0; c > o;) n.f(e, t = s[o++], i[t]);
        return e
    }
}, function(e, i, t) {
    var n = t(20),
        r = t(77),
        a = t(33),
        s = t(22)("IE_PROTO"),
        c = function() {},
        o = function() {
            var e, i = t(37)("iframe"),
                n = a.length;
            for (i.style.display = "none", t(32).appendChild(i), i.src = "javascript:", (e = i.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), o = e.F; n--;) delete o.prototype[a[n]];
            return o()
        };
    e.exports = Object.create || function(e, i) {
        var t;
        return null !== e ? (c.prototype = n(e), t = new c, c.prototype = null, t[s] = e) : t = o(), void 0 === i ? t : r(t, i)
    }
}, function(e, i, t) {
    "use strict";
    var n = t(78),
        r = t(26),
        a = t(31),
        s = {};
    t(12)(s, t(2)("iterator"), function() {
        return this
    }), e.exports = function(e, i, t) {
        e.prototype = n(s, {
            next: r(1, t)
        }), a(e, i + " Iterator")
    }
}, function(e, i, t) {
    var n = t(19);
    e.exports = function(e, i) {
        if (!n(e)) return e;
        var t, r;
        if (i && "function" == typeof(t = e.toString) && !n(r = t.call(e))) return r;
        if ("function" == typeof(t = e.valueOf) && !n(r = t.call(e))) return r;
        if (!i && "function" == typeof(t = e.toString) && !n(r = t.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, i, t) {
    e.exports = !t(10) && !t(7)(function() {
        return 7 != Object.defineProperty(t(37)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, i, t) {
    var n = t(21),
        r = t(27);
    e.exports = function(e) {
        return function(i, t) {
            var a, s, c = String(r(i)),
                o = n(t),
                u = c.length;
            return o < 0 || o >= u ? e ? "" : void 0 : (a = c.charCodeAt(o)) < 55296 || a > 56319 || o + 1 === u || (s = c.charCodeAt(o + 1)) < 56320 || s > 57343 ? e ? c.charAt(o) : a : e ? c.slice(o, o + 2) : s - 56320 + (a - 55296 << 10) + 65536
        }
    }
}, function(e, i, t) {
    "use strict";
    var n = t(82)(!0);
    t(39)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, i = this._t,
            t = this._i;
        return t >= i.length ? {
            value: void 0,
            done: !0
        } : (e = n(i, t), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, i, t) {
    t(83), t(73), t(72), t(66), t(65), t(64), t(63), t(62), t(59), t(58), t(57), t(56), t(55), t(54), t(53), t(52), t(51), t(49), t(47), t(46), t(45), t(43), e.exports = t(13).Array
}, function(e, i, t) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, i) {
            for (var t = 0; t < i.length; t++) {
                var n = i[t];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(i, t, n) {
            return t && e(i.prototype, t), n && e(i, n), i
        }
    }();
    t(84);
    var r = s(t(41)),
        a = s(t(40));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = "onInputValueChange_VK",
        o = "onEnterKey_VK",
        u = "onBackSpaceKey_VK",
        y = function() {
            function e() {
                ! function(e, i) {
                    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.currentInputElement = null, this.targetedInputsElements = new Set, this.isvisible = !1, this.keyboardContainer = null, this.actionsContainer = null, this.inputCaretPosition = 0, this.rows = [this.row1, this.row2, this.row3, this.row4], this.keys = null
            }
            return n(e, [{
                key: "enterKeyEvent",
                value: function(e, i, t) {
                    var n = this;
                    e.addEventListener("click", function() {
                        var e = n.currentInputElement.value;
                        n.currentInputElement.value = n.currentInputElement.value.slice(0, n.inputCaretPosition) + "\n" + n.currentInputElement.value.slice(n.inputCaretPosition), n.incrementCaretPosition();
                        var r = new CustomEvent(o, {
                            detail: {
                                keyAscii: t[i].ascii,
                                keyValue: t[i].key,
                                newInputValue: n.currentInputElement.value,
                                oldInputValue: e
                            }
                        });
                        n.currentInputElement.dispatchEvent(r)
                    })
                }
            }, {
                key: "backSpaceKeyEvent",
                value: function(e, i, t) {
                    var n = this;
                    e.addEventListener("click", function() {
                        var e = n.currentInputElement.value,
                            r = n.currentInputElement.selectionStart,
                            a = n.currentInputElement.selectionEnd;
                        r !== a ? (n.currentInputElement.value = e.substring(0, r) + e.substring(a, e.length), n.currentInputElement.setSelectionRange(n.inputCaretPosition, n.inputCaretPosition), n.currentInputElement.focus()) : n.currentInputElement.value && n.inputCaretPosition && (n.currentInputElement.value = n.currentInputElement.value.slice(0, n.inputCaretPosition - 1) + n.currentInputElement.value.slice(n.inputCaretPosition), n.decrementCaretPosition());
                        var s = new CustomEvent(u, {
                            detail: {
                                keyAscii: t[i].ascii,
                                keyValue: t[i].action,
                                newInputValue: n.currentInputElement.value,
                                oldInputValue: e
                            }
                        });
                        n.currentInputElement.dispatchEvent(s)
                    })
                }
            }, {
                key: "upperCaseKeyEvent",
                value: function(e) {
                    var i = this;
                    e.addEventListener("click", function() {
                        i.setVisibleKeyboardRows(Array.of(i.upperkeysRow0, i.upperkeysRow1, i.upperkeysRow2, i.upperkeysRow3))
                    })
                }
            }, {
                key: "lowerCaseKeyEvent",
                value: function(e) {
                    var i = this;
                    e.addEventListener("click", function() {
                        i.setVisibleKeyboardRows(Array.of(i.lowkeysRow0, i.lowkeysRow1, i.lowkeysRow2, i.lowkeysRow3))
                    })
                }
            }, {
                key: "numericsKeyEvent",
                value: function(e) {
                    var i = this;
                    e.addEventListener("click", function() {
                        i.setVisibleKeyboardRows(Array.of(i.numericKeysRow0, i.numericKeysRow1, i.numericKeysRow2, i.numericKeysRow3))
                    })
                }
            }, {
                key: "extraKeyEvent",
                value: function(e) {
                    var i = this;
                    e.addEventListener("click", function() {
                        i.setVisibleKeyboardRows(Array.of(i.extraKeysRow0, i.extraKeysRow1, i.extraKeysRow2, i.numericKeysRow3))
                    })
                }
            }, {
                key: "inputKeyEvent",
                value: function(e, i, t) {
                    var n = this;
                    e.addEventListener("click", function() {
                        var e = n.currentInputElement.value;
                        n.currentInputElement.value = n.currentInputElement.value.slice(0, n.inputCaretPosition) + String.fromCharCode(t[i].ascii) + n.currentInputElement.value.slice(n.inputCaretPosition), n.incrementCaretPosition();
                        var r = new CustomEvent(c, {
                            detail: {
                                keyAscii: t[i].ascii,
                                keyValue: t[i].key,
                                newInputValue: n.currentInputElement.value,
                                oldInputValue: e
                            }
                        });
                        n.currentInputElement.dispatchEvent(r)
                    })
                }
            }, {
                key: "incrementCaretPosition",
                value: function() {
                    this.inputCaretPosition += 1, this.currentInputElement.setSelectionRange(this.inputCaretPosition, this.inputCaretPosition), this.currentInputElement.focus()
                }
            }, {
                key: "decrementCaretPosition",
                value: function() {
                    this.inputCaretPosition -= 1, this.currentInputElement.setSelectionRange(this.inputCaretPosition, this.inputCaretPosition), this.currentInputElement.focus()
                }
            }, {
                key: "initKeys",
                value: function(e, i, t) {
                    for (var n = [], r = 0, a = e; r < i; r += 1, a += 1) n[r] = document.createElement("div"), n[r].classList.add("key"), t[a].class && n[r].classList.add(t[a].class), t[a].action && n[r].setAttribute("data-action", t[a].action), t[a].ascii && n[r].setAttribute("data-ascii", t[a].ascii), t[a].key && (n[r].innerHTML = t[a].key), "enter" === t[a].action && this.enterKeyEvent(n[r], a, t), "backspace" === t[a].action && this.backSpaceKeyEvent(n[r], a, t), "uppercase" === t[a].action && this.upperCaseKeyEvent(n[r]), "lowercase" === t[a].action && this.lowerCaseKeyEvent(n[r]), "numerics" === t[a].action && this.numericsKeyEvent(n[r], a, t), "extrakeys" === t[a].action && this.extraKeyEvent(n[r], a, t), t[a].action || this.inputKeyEvent(n[r], a, t);
                    return n
                }
            }, {
                key: "initKeyboardContainer",
                value: function() {
                	
                    this.keyboardContainer = document.createElement("div"), this.keyboardContainer.classList.add("keyboard-container"), this.keyboardContainer.appendChild(this.actionsContainer)
                
                }
            }, {
                key: "initKeyboardActionsContainer",
                value: function() {
                    this.actionsContainer = document.createElement("div"), this.actionsContainer.classList.add("actions-container"), this.actionsContainer.innerHTML = '<span class="close-button"><i class="fa fa-times" aria-hidden="true"></i></span>'
                }
            }, {
                key: "initAllContainers",
                value: function() {
                    this.initKeyboardActionsContainer(), this.initKeyboardContainer()
                }
            }, {
                key: "constructKeyboard",
                value: function(e, i, t) {
                    for (var n = this, r = 0; r < this.rows.length; r += 1) this.rows[r] = document.createElement("div"), this.rows[r].classList.add("row-virtual-keyboard");
                    i.querySelector(".close-button").addEventListener("click", function() {
                        n.closeKeyboard()
                    }), this.lowkeysRow0 = this.initKeys(0, 10, e), this.lowkeysRow1 = this.initKeys(10, 10, e), this.lowkeysRow2 = this.initKeys(20, 9, e), this.lowkeysRow3 = this.initKeys(29, 6, e), this.upperkeysRow0 = this.initKeys(35, 10, e), this.upperkeysRow1 = this.initKeys(45, 10, e), this.upperkeysRow2 = this.initKeys(55, 9, e), this.upperkeysRow3 = this.initKeys(64, 6, e), this.numericKeysRow0 = this.initKeys(70, 10, e), this.numericKeysRow1 = this.initKeys(80, 10, e), this.numericKeysRow2 = this.initKeys(90, 9, e), this.numericKeysRow3 = this.initKeys(99, 6, e), this.extraKeysRow0 = this.initKeys(105, 10, e), this.extraKeysRow1 = this.initKeys(115, 10, e), this.extraKeysRow2 = this.initKeys(125, 9, e), this.keys = this.lowkeysRow0.concat(this.lowkeysRow1, this.lowkeysRow2, this.lowkeysRow3, this.upperkeysRow0, this.upperkeysRow1, this.upperkeysRow2, this.upperkeysRow3, this.numericKeysRow0, this.numericKeysRow1, this.numericKeysRow2, this.extraKeysRow0, this.extraKeysRow1, this.extraKeysRow2), this.setVisibleKeyboardRows(Array.of(this.lowkeysRow0, this.lowkeysRow1, this.lowkeysRow2, this.lowkeysRow3)), t.appendChild(i);
                    for (var a = 0; a < this.rows.length; a += 1) t.appendChild(this.rows[a]);
                    document.body.appendChild(t)
                }
            }, {
                key: "setVisibleKeyboardRows",
                value: function(e) {
                    for (var i = 0; i < e.length; i += 1) {
                        for (; this.rows[i].firstChild;) this.rows[i].removeChild(this.rows[i].firstChild);
                        for (var t = 0; t < e[i].length; t += 1) this.rows[i].appendChild(e[i][t])
                    }
                }
            }, {
                key: "setKeyboardPosition",
                value: function(e) {
                    var i = e.getBoundingClientRect(),
                        t = this.keyboardContainer.getBoundingClientRect().width,
                        n = e.offsetWidth / 2 - t / 2 + i.left + document.documentElement.scrollLeft,
                        r = i.top + e.offsetHeight + 15 + document.documentElement.scrollTop;
                    n < 20 && (n = 20)//, this.keyboardContainer.style.left = n + "px", this.keyboardContainer.style.top = r + "px"
                }
            }, {
                key: "launchVirtualKeyboard",
                value: function() {
                    var e = this,
                        i = document.querySelectorAll(".virtual-keyboard-hook");
                    i.length > 0 && Array.from(i).forEach(function(i) {
                        i.addEventListener("click", e.handleClickOnVirtualKeyboardHook.bind(e, i));
                    })
                }
            }, {
                key: "handleClickOnVirtualKeyboardHook",
                value: function(e) {
                    var i = this,
                        t = document.getElementById(e.dataset.targetId),
                        n = e.dataset.keyboardMapping;
                    t && n && (this.currentInputElement = t, this.targetedInputsElements.has(t) || (this.keyboardContainer && this.keyboardContainer.parentNode.removeChild(this.keyboardContainer), this.initAllContainers(), "qwerty" === n ? this.constructKeyboard(a.default, this.actionsContainer, this.keyboardContainer) : this.constructKeyboard(r.default, this.actionsContainer, this.keyboardContainer), t.addEventListener("click", function() {
                        i.inputCaretPosition = i.currentInputElement.selectionStart;
                
                    }), t.addEventListener("keydown", function() {
                        i.inputCaretPosition = i.currentInputElement.selectionStart + 1
                    }), this.inputCaretPosition = t.value.length, this.targetedInputsElements.add(t)), this.currentInputElement = t, this.setKeyboardPosition(this.currentInputElement), this.isvisible = !0, document.getElementById('keyboard').appendChild(this.keyboardContainer),this.keyboardContainer.classList.add("visible"), this.currentInputElement.focus())
                }
            }, {
                key: "closeKeyboard",
                value: function() {
                    this.isvisible = !1, this.keyboardContainer.classList.remove("visible");
                }
            }]), e
        }();
    i.default = y
}, function(e, i, t) {
    "use strict";
    var n, r = t(85),
        a = (n = r) && n.__esModule ? n : {
            default: n
        };
    ["WebComponentsReady", "DOMContentLoaded"].map(function(e) {
        return document.addEventListener(e, function() {
            (new a.default).launchVirtualKeyboard()
        })
    })
}]);