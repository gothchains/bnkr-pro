!(function (t, n) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = n())
        : "function" == typeof define && define.amd
        ? define([], n)
        : "object" == typeof exports
        ? (exports.LunaCommandPalette = n())
        : (t.LunaCommandPalette = n());
})(window, function () {
    return (function (t) {
        var n = {};
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
        }
        return (
            (e.m = t),
            (e.c = n),
            (e.d = function (t, n, r) {
                e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
            }),
            (e.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (e.t = function (t, n) {
                if ((1 & n && (t = e(t)), 8 & n)) return t;
                if (4 & n && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if ((e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t))
                    for (var o in t)
                        e.d(
                            r,
                            o,
                            function (n) {
                                return t[n];
                            }.bind(null, o)
                        );
                return r;
            }),
            (e.n = function (t) {
                var n =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return e.d(n, "a", n), n;
            }),
            (e.o = function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n);
            }),
            (e.p = "/assets/"),
            e((e.s = 37))
        );
    })([
        function (t, n, e) {
            var r = e(7),
                o = e(4),
                i = e(22);
            (n = function (t, n, e) {
                var u, a;
                if (((n = i(n, e)), r(t))) for (u = 0, a = t.length; u < a; u++) n(t[u], u, t);
                else {
                    var c = o(t);
                    for (u = 0, a = c.length; u < a; u++) n(t[c[u]], c[u], t);
                }
                return t;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(11);
            (n = function (t) {
                return "[object String]" === r(t);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(1),
                o = e(9),
                i = e(28);
            (n = function (t) {
                return o(r(t) ? new i(t) : t);
            }),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t) {
                return void 0 === t;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(12);
            (n = Object.keys
                ? Object.keys
                : function (t) {
                      var n = [];
                      for (var e in t) r(t, e) && n.push(e);
                      return n;
                  }),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t) {
                var n = typeof t;
                return !!t && ("function" === n || "object" === n);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(11);
            (n = Array.isArray
                ? Array.isArray
                : function (t) {
                      return "[object Array]" === r(t);
                  }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(14),
                o = e(8),
                i = Math.pow(2, 53) - 1;
            (n = function (t) {
                if (!t) return !1;
                var n = t.length;
                return r(n) && n >= 0 && n <= i && !o(t);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(11);
            (n = function (t) {
                var n = r(t);
                return "[object Function]" === n || "[object GeneratorFunction]" === n || "[object AsyncFunction]" === n;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(7),
                o = e(10),
                i = e(6),
                u = e(1);
            (n = function (t) {
                return t ? (i(t) ? t : r(t) && !u(t) ? o(t) : [t]) : [];
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(15),
                o = e(4),
                i = e(7);
            (n = function (t, n, e) {
                n = r(n, e);
                for (var u = !i(t) && o(t), a = (u || t).length, c = Array(a), s = 0; s < a; s++) {
                    var f = u ? u[s] : s;
                    c[s] = n(t[f], f, t);
                }
                return c;
            }),
                (t.exports = n);
        },
        function (t, n) {
            var e = Object.prototype.toString;
            (n = function (t) {
                return e.call(t);
            }),
                (t.exports = n);
        },
        function (t, n) {
            var e = Object.prototype.hasOwnProperty;
            (n = function (t, n) {
                return e.call(t, n);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(20),
                o = e(9),
                i = e(48),
                u = e(17),
                a = e(50);
            var c = ((n = function (t, n) {
                return c.extend(t, n);
            }).Base = (function t(n, e, c) {
                c = c || {};
                var s = e.className || u(e, "initialize.name") || "";
                delete e.className;
                var f = function () {
                    var t = o(arguments);
                    return (this.initialize && this.initialize.apply(this, t)) || this;
                };
                if (!a)
                    try {
                        f = new Function("toArr", "return function " + s + "(){var args = toArr(arguments);return this.initialize ? this.initialize.apply(this, args) || this : this;};")(o);
                    } catch (t) {}
                return (
                    i(f, n),
                    (f.prototype.constructor = f),
                    (f.extend = function (n, e) {
                        return t(f, n, e);
                    }),
                    (f.inherits = function (t) {
                        i(f, t);
                    }),
                    (f.methods = function (t) {
                        return r(f.prototype, t), f;
                    }),
                    (f.statics = function (t) {
                        return r(f, t), f;
                    }),
                    f.methods(e).statics(c),
                    f
                );
            })(Object, {
                className: "Base",
                callSuper: function (t, n, e) {
                    return t.prototype[n].apply(this, e);
                },
                toString: function () {
                    return this.constructor.name;
                },
            }));
            t.exports = n;
        },
        function (t, n, e) {
            var r = e(11);
            (n = function (t) {
                return "[object Number]" === r(t);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(8),
                o = e(5),
                i = e(6),
                u = e(22),
                a = e(43),
                c = e(46),
                s = e(25);
            (n = function (t, n, e) {
                return null == t ? c : r(t) ? u(t, n, e) : o(t) && !i(t) ? a(t) : s(t);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(75),
                o = e(76);
            (n = function (t, n) {
                return null == n && t.trim ? t.trim() : r(o(t, n), n);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(3),
                o = e(47);
            (n = function (t, n) {
                var e;
                for (e = (n = o(n, t)).shift(); !r(e); ) {
                    if (null == (t = t[e])) return;
                    e = n.shift();
                }
                return t;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(60),
                o = e(1),
                i = e(7),
                u = e(61);
            (n = function (t, n) {
                return o(t) ? t.indexOf(n) > -1 : (i(t) || (t = u(t)), r(t, n) >= 0);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(13),
                o = e(12),
                i = e(0),
                u = e(51),
                a = e(52),
                c = e(55);
            (n = r(
                {
                    initialize: function () {
                        this._events = this._events || {};
                    },
                    on: function (t, n) {
                        return (this._events[t] = this._events[t] || []), this._events[t].push(n), this;
                    },
                    off: function (t, n) {
                        var e = this._events;
                        if (o(e, t)) {
                            var r = e[t].indexOf(n);
                            return r > -1 && e[t].splice(r, 1), this;
                        }
                    },
                    once: function (t, n) {
                        return this.on(t, a(n)), this;
                    },
                    emit: function (t) {
                        var n = this;
                        if (o(this._events, t)) {
                            var e = u(arguments, 1),
                                r = c(this._events[t]);
                            return (
                                i(
                                    r,
                                    function (t) {
                                        return t.apply(n, e);
                                    },
                                    this
                                ),
                                this
                            );
                        }
                    },
                    removeAllListeners: function (t) {
                        return t ? delete this._events[t] : (this._events = {}), this;
                    },
                },
                {
                    mixin: function (t) {
                        i(["on", "off", "once", "emit", "removeAllListeners"], function (e) {
                            t[e] = n.prototype[e];
                        }),
                            (t._events = t._events || {});
                    },
                }
            )),
                (t.exports = n);
        },
        function (t, n, e) {
            (n = e(21)(e(41))), (t.exports = n);
        },
        function (t, n, e) {
            var r = e(3),
                o = e(0);
            (n = function (t, n) {
                return function (e) {
                    return (
                        o(arguments, function (i, u) {
                            if (0 !== u) {
                                var a = t(i);
                                o(a, function (t) {
                                    (n && !r(e[t])) || (e[t] = i[t]);
                                });
                            }
                        }),
                        e
                    );
                };
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(3);
            (n = function (t, n, e) {
                if (r(n)) return t;
                switch (null == e ? 3 : e) {
                    case 1:
                        return function (e) {
                            return t.call(n, e);
                        };
                    case 3:
                        return function (e, r, o) {
                            return t.call(n, e, r, o);
                        };
                    case 4:
                        return function (e, r, o, i) {
                            return t.call(n, e, r, o, i);
                        };
                }
                return function () {
                    return t.apply(n, arguments);
                };
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(24);
            function o(t, n) {
                return t === n;
            }
            (n = function (t, n) {
                return (
                    (n = n || o),
                    r(t, function (t, e, r) {
                        for (var o = r.length; ++e < o; ) if (n(t, r[e])) return !1;
                        return !0;
                    })
                );
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(15),
                o = e(0);
            (n = function (t, n, e) {
                var i = [];
                return (
                    (n = r(n, e)),
                    o(t, function (t, e, r) {
                        n(t, e, r) && i.push(t);
                    }),
                    i
                );
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(6),
                o = e(17);
            (n = function (t) {
                return r(t)
                    ? function (n) {
                          return o(n, t);
                      }
                    : ((n = t),
                      function (t) {
                          return null == t ? void 0 : t[n];
                      });
                var n;
            }),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t, n) {
                return (
                    (n = null == n ? t.length - 1 : +n),
                    function () {
                        var e,
                            r = Math.max(arguments.length - n, 0),
                            o = new Array(r);
                        for (e = 0; e < r; e++) o[e] = arguments[e + n];
                        switch (n) {
                            case 0:
                                return t.call(this, o);
                            case 1:
                                return t.call(this, arguments[0], o);
                            case 2:
                                return t.call(this, arguments[0], arguments[1], o);
                        }
                        var i = new Array(n + 1);
                        for (e = 0; e < n; e++) i[e] = arguments[e];
                        return (i[n] = o), t.apply(this, i);
                    }
                );
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(28),
                o = e(57),
                i = e(58),
                u = e(59),
                a = e(31),
                c = e(66),
                s = e(32),
                f = e(67),
                l = e(68),
                p = e(69),
                h = e(71),
                d = e(73),
                v = e(3),
                m = e(1);
            (n = function (t) {
                return new r(t);
            }),
                r.methods({
                    offset: function () {
                        return o(this);
                    },
                    hide: function () {
                        return this.css("display", "none");
                    },
                    show: function () {
                        return i(this), this;
                    },
                    first: function () {
                        return n(this[0]);
                    },
                    last: function () {
                        return n(s(this));
                    },
                    get: function (t) {
                        return this[t];
                    },
                    eq: function (t) {
                        return n(this[t]);
                    },
                    on: function (t, n, e) {
                        return p.on(this, t, n, e), this;
                    },
                    off: function (t, n, e) {
                        return p.off(this, t, n, e), this;
                    },
                    html: function (t) {
                        var n = c.html(this, t);
                        return v(t) ? n : this;
                    },
                    text: function (t) {
                        var n = c.text(this, t);
                        return v(t) ? n : this;
                    },
                    val: function (t) {
                        var n = c.val(this, t);
                        return v(t) ? n : this;
                    },
                    css: function (t, n) {
                        var e = u(this, t, n);
                        return g(t, n) ? e : this;
                    },
                    attr: function (t, n) {
                        var e = a(this, t, n);
                        return g(t, n) ? e : this;
                    },
                    data: function (t, n) {
                        var e = l(this, t, n);
                        return g(t, n) ? e : this;
                    },
                    rmAttr: function (t) {
                        return a.remove(this, t), this;
                    },
                    remove: function () {
                        return f(this), this;
                    },
                    addClass: function (t) {
                        return h.add(this, t), this;
                    },
                    rmClass: function (t) {
                        return h.remove(this, t), this;
                    },
                    toggleClass: function (t) {
                        return h.toggle(this, t), this;
                    },
                    hasClass: function (t) {
                        return h.has(this, t);
                    },
                    parent: function () {
                        return n(this[0].parentNode);
                    },
                    append: function (t) {
                        return d.append(this, t), this;
                    },
                    prepend: function (t) {
                        return d.prepend(this, t), this;
                    },
                    before: function (t) {
                        return d.before(this, t), this;
                    },
                    after: function (t) {
                        return d.after(this, t), this;
                    },
                });
            var g = function (t, n) {
                return v(n) && m(t);
            };
            t.exports = n;
        },
        function (t, n, e) {
            var r = e(13),
                o = e(1),
                i = e(0),
                u = e(56),
                a = new (n = r({
                    className: "Select",
                    initialize: function (t) {
                        return (this.length = 0), t ? (o(t) ? a.find(t) : void (t.nodeType && ((this[0] = t), (this.length = 1)))) : this;
                    },
                    find: function (t) {
                        var e = new n();
                        return (
                            this.each(function () {
                                u(e, this.querySelectorAll(t));
                            }),
                            e
                        );
                    },
                    each: function (t) {
                        return (
                            i(this, function (n, e) {
                                t.call(n, e, n);
                            }),
                            this
                        );
                    },
                }))(document);
            t.exports = n;
        },
        function (t, n, e) {
            var r = e(30);
            (n = function (t) {
                return r(t).join("-");
            }),
                (t.exports = n);
        },
        function (t, n) {
            var e = /([A-Z])/g,
                r = /[_.\- ]+/g,
                o = /(^-)|(-$)/g;
            (n = function (t) {
                return (t = t.replace(e, "-$1").toLowerCase().replace(r, "-").replace(o, "")).split("-");
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(9),
                o = e(5),
                i = e(1),
                u = e(0),
                a = e(3),
                c = e(2);
            ((n = function (t, n, e) {
                if (((t = c(t)), a(e) && i(n)))
                    return (function (t, n) {
                        return t.getAttribute(n);
                    })(t[0], n);
                var r = n;
                o(r) || ((r = {})[n] = e),
                    (function (t, n) {
                        u(t, function (t) {
                            u(n, function (n, e) {
                                t.setAttribute(e, n);
                            });
                        });
                    })(t, r);
            }).remove = function (t, n) {
                (t = c(t)),
                    (n = r(n)),
                    u(t, function (t) {
                        u(n, function (n) {
                            t.removeAttribute(n);
                        });
                    });
            }),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t) {
                var n = t ? t.length : 0;
                if (n) return t[n - 1];
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(34);
            (n = function (t) {
                return r(t).toLocaleLowerCase();
            }),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t) {
                return null == t ? "" : t.toString();
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(14),
                o = e(5),
                i = e(8),
                u = e(1);
            (n = function (t) {
                if (r(t)) return t;
                if (o(t)) {
                    var n = i(t.valueOf) ? t.valueOf() : t;
                    t = o(n) ? n + "" : n;
                }
                return u(t) ? +t : 0 === t ? t : +t;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(1),
                o = e(95);
            n = function (t) {
                return r(t) ? i[t] : f[t];
            };
            for (
                var i = {
                        backspace: 8,
                        tab: 9,
                        enter: 13,
                        shift: 16,
                        ctrl: 17,
                        alt: 18,
                        "pause/break": 19,
                        "caps lock": 20,
                        esc: 27,
                        space: 32,
                        "page up": 33,
                        "page down": 34,
                        end: 35,
                        home: 36,
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40,
                        insert: 45,
                        delete: 46,
                        windows: 91,
                        "right windows": 92,
                        "windows menu": 93,
                        "numpad *": 106,
                        "numpad +": 107,
                        "numpad -": 109,
                        "numpad .": 110,
                        "numpad /": 111,
                        "num lock": 144,
                        "scroll lock": 145,
                        ";": 186,
                        "=": 187,
                        ",": 188,
                        "-": 189,
                        ".": 190,
                        "/": 191,
                        "`": 192,
                        "[": 219,
                        "\\": 220,
                        "]": 221,
                        "'": 222,
                    },
                    u = 97;
                u < 123;
                u++
            )
                i[String.fromCharCode(u)] = u - 32;
            for (var a = 48; a < 58; a++) i[a - 48] = a;
            for (var c = 1; c < 13; c++) i["f" + c] = c + 111;
            for (var s = 0; s < 10; s++) i["numpad " + s] = s + 96;
            var f = o(i);
            t.exports = n;
        },
        function (t, n, e) {
            e(38), (t.exports = e(39));
        },
        function (t, n, e) {},
        function (t, n, e) {
            "use strict";
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function (t, n) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, n) {
                                    t.__proto__ = n;
                                }) ||
                            function (t, n) {
                                for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
                            })(t, n);
                    }),
                    function (t, n) {
                        function e() {
                            this.constructor = t;
                        }
                        r(t, n), (t.prototype = null === n ? Object.create(n) : ((e.prototype = n.prototype), new e()));
                    }),
                i =
                    (this && this.__makeTemplateObject) ||
                    function (t, n) {
                        return Object.defineProperty ? Object.defineProperty(t, "raw", { value: n }) : (t.raw = n), t;
                    },
                u =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
            Object.defineProperty(n, "__esModule", { value: !0 });
            var a,
                c,
                s = u(e(40)),
                f = u(e(87)),
                l = u(e(27)),
                p = u(e(89)),
                h = u(e(16)),
                d = u(e(91)),
                v = u(e(0)),
                m = u(e(34)),
                g = u(e(35)),
                x = u(e(94)),
                y = u(e(33)),
                b = u(e(36)),
                w = (function (t) {
                    function n(n, e) {
                        var r = void 0 === e ? {} : e,
                            o = r.placeholder,
                            u = void 0 === o ? "Type a command" : o,
                            c = r.commands,
                            s = void 0 === c ? [] : c,
                            l = r.shortcut,
                            g = void 0 === l ? "Ctrl+P" : l,
                            x = t.call(this, n, { compName: "command-palette" }) || this;
                        return (
                            (x.activeIdx = 0),
                            (x.keyword = ""),
                            (x.curCommands = []),
                            (x.hide = function () {
                                window.removeEventListener("resize", x.calcWidth), x.$container.addClass(x.c("hidden"));
                            }),
                            (x.show = function (t) {
                                t && t.preventDefault && t.preventDefault(), x.calcWidth(), window.addEventListener("resize", x.calcWidth), x.render(), x.$container.rmClass(x.c("hidden")), x.input.focus();
                            }),
                            (x.calcWidth = function () {
                                var t = window.innerWidth;
                                t > 500 && (t = 500), x.$body.css({ width: t });
                            }),
                            (x.onKeydown = function (t) {
                                t = t.origEvent;
                                var n = x.activeIdx,
                                    e = x.curCommands;
                                switch (t.keyCode) {
                                    case b.default("down"):
                                        n > -1 && (++n >= e.length && (n = 0), x.setActive(n));
                                        break;
                                    case b.default("up"):
                                        n > -1 && (--n < 0 && (n = e.length - 1), x.setActive(n));
                                        break;
                                    case b.default("enter"):
                                        if (n > -1) e[n].handler(), x.hide();
                                        break;
                                    case b.default("esc"):
                                        x.hide();
                                }
                            }),
                            (x.onInput = function () {
                                var t = h.default(x.input.value);
                                t !== x.keyword && ((x.keyword = t), x.render());
                            }),
                            (x.render = function () {
                                var t = x.options.commands,
                                    n = x,
                                    e = n.c,
                                    r = n.$list,
                                    o = n.keyword;
                                if ((o && (t = d.default(o, t, { key: "title" })), (x.activeIdx = 0), p.default(t))) r.addClass(e("hidden")), x.setActive(-1);
                                else {
                                    var u = "";
                                    v.default(t, function (t, n) {
                                        u += x.c(
                                            f.default(
                                                a ||
                                                    (a = i(
                                                        ['\n        <li data-idx="', '">\n          <span class="title">', "</span>\n          ", "\n        </li>\n        "],
                                                        ['\n        <li data-idx="', '">\n          <span class="title">', "</span>\n          ", "\n        </li>\n        "]
                                                    )),
                                                m.default(n),
                                                t.title,
                                                t.shortcut ? '<span class="shortcut">' + t.shortcut + "</span>" : ""
                                            )
                                        );
                                    }),
                                        r.html(u).rmClass(e("hidden")),
                                        x.setActive(0);
                                }
                                x.curCommands = t;
                            }),
                            x.hide(),
                            (x.options = { placeholder: u, commands: s, shortcut: g }),
                            x.initTpl(),
                            (x.$body = x.find(".body")),
                            (x.$input = x.find(".input")),
                            (x.input = x.$input.get(0)),
                            (x.$list = x.find(".list")),
                            x.bindEvent(),
                            x
                        );
                    }
                    return (
                        o(n, t),
                        (n.prototype.destroy = function () {
                            var n = this.options,
                                e = n.shortcut,
                                r = n.commands;
                            this.hide(),
                                e && x.default.off(y.default(e), this.show),
                                v.default(r, function (t) {
                                    var n = t.shortcut,
                                        e = t.handler;
                                    n && x.default.off(y.default(n), e);
                                }),
                                this.$container.off("click", this.hide),
                                t.prototype.destroy.call(this);
                        }),
                        (n.prototype.bindEvent = function () {
                            var t = this.options,
                                n = t.shortcut,
                                e = t.commands;
                            this.$input.on("input", this.onInput).on("keydown", this.onKeydown),
                                this.$body.on("click", function (t) {
                                    return t.stopPropagation();
                                }),
                                this.$container.on("click", this.hide);
                            var r = this;
                            this.$list.on("click", "li", function () {
                                var t = l.default(this),
                                    n = g.default(t.data("idx"));
                                r.curCommands[n].handler(), r.hide();
                            }),
                                n && x.default.on(y.default(n), this.show),
                                v.default(e, function (t) {
                                    var n = t.shortcut,
                                        e = t.handler;
                                    n && x.default.on(y.default(n), e);
                                });
                        }),
                        (n.prototype.setActive = function (t) {
                            if (((this.activeIdx = t), !(t < 0))) {
                                var n = this.c;
                                this.find(".active").rmClass(n("active")), this.$body.find('[data-idx="' + m.default(t) + '"]').addClass(n("active"));
                            }
                        }),
                        (n.prototype.initTpl = function () {
                            var t = this.options;
                            this.$container.html(
                                this.c(
                                    f.default(
                                        c ||
                                            (c = i(
                                                ['\n      <div class="body">\n        <input class="input" type="text" placeholder="', '"></input>\n        <ul class="list hidden"></ul>\n      </div>\n      '],
                                                ['\n      <div class="body">\n        <input class="input" type="text" placeholder="', '"></input>\n        <ul class="list hidden"></ul>\n      </div>\n      ']
                                            )),
                                        t.placeholder
                                    )
                                )
                            );
                        }),
                        n
                    );
                })(s.default);
            (t.exports = w), (t.exports.default = w);
        },
        function (t, n, e) {
            "use strict";
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function (t, n) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, n) {
                                    t.__proto__ = n;
                                }) ||
                            function (t, n) {
                                for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
                            })(t, n);
                    }),
                    function (t, n) {
                        function e() {
                            this.constructor = t;
                        }
                        r(t, n), (t.prototype = null === n ? Object.create(n) : ((e.prototype = n.prototype), new e()));
                    }),
                i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
            Object.defineProperty(n, "__esModule", { value: !0 });
            var u = i(e(19)),
                a = i(e(27)),
                c = e(74),
                s = i(e(0)),
                f = (function (t) {
                    function n(n, e) {
                        var r = e.compName,
                            o = t.call(this) || this;
                        return (o.compName = r), (o.c = c.classPrefix(r)), (o.options = {}), (o.container = n), (o.$container = a.default(n)), o.$container.addClass("luna-" + r), o;
                    }
                    return (
                        o(n, t),
                        (n.prototype.destroy = function () {
                            this.$container.rmClass("luna-" + this.compName), this.$container.html(""), this.emit("destroy"), this.removeAllListeners();
                        }),
                        (n.prototype.setOption = function (t, n) {
                            var e = this,
                                r = this.options,
                                o = {};
                            "string" == typeof t ? (o[t] = n) : (o = t),
                                s.default(o, function (t, n) {
                                    var o = r[n];
                                    (r[n] = t), e.emit("optionChange", n, t, o);
                                });
                        }),
                        (n.prototype.find = function (t) {
                            return this.$container.find(this.c(t));
                        }),
                        n
                    );
                })(u.default);
            n.default = f;
        },
        function (t, n, e) {
            var r = e(4),
                o = e(42),
                i = e(23),
                u = Object.getOwnPropertyNames,
                a = Object.getOwnPropertySymbols;
            (n = function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    e = n.prototype,
                    c = void 0 === e || e,
                    s = n.unenumerable,
                    f = void 0 !== s && s,
                    l = n.symbol,
                    p = void 0 !== l && l,
                    h = [];
                if ((f || p) && u) {
                    var d = r;
                    f && u && (d = u);
                    do {
                        (h = h.concat(d(t))), p && a && (h = h.concat(a(t)));
                    } while (c && (t = o(t)) && t !== Object.prototype);
                    h = i(h);
                } else if (c) for (var v in t) h.push(v);
                else h = r(t);
                return h;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(5),
                o = e(8),
                i = Object.getPrototypeOf,
                u = {}.constructor;
            (n = function (t) {
                if (r(t)) {
                    if (i) return i(t);
                    var n = t.__proto__;
                    return n || null === n ? n : o(t.constructor) ? t.constructor.prototype : t instanceof u ? u.prototype : void 0;
                }
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(44),
                o = e(45);
            (n = function (t) {
                return (
                    (t = r({}, t)),
                    function (n) {
                        return o(n, t);
                    }
                );
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(4);
            (n = e(21)(r)), (t.exports = n);
        },
        function (t, n, e) {
            var r = e(4);
            (n = function (t, n) {
                var e = r(n),
                    o = e.length;
                if (null == t) return !o;
                t = Object(t);
                for (var i = 0; i < o; i++) {
                    var u = e[i];
                    if (n[u] !== t[u] || !(u in t)) return !1;
                }
                return !0;
            }),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t) {
                return t;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(12),
                o = e(6);
            n = function (t, n) {
                if (o(t)) return t;
                if (n && r(n, t)) return [t];
                var e = [];
                return (
                    t.replace(i, function (t, n, r, o) {
                        e.push(r ? o.replace(u, "$1") : n || t);
                    }),
                    e
                );
            };
            var i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                u = /\\(\\)?/g;
            t.exports = n;
        },
        function (t, n, e) {
            var r = e(49);
            (n = function (t, n) {
                t.prototype = r(n.prototype);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(5);
            n = function (t) {
                if (!r(t)) return {};
                if (o) return o(t);
                function n() {}
                return (n.prototype = t), new n();
            };
            var o = Object.create;
            t.exports = n;
        },
        function (t, n, e) {
            var r = e(8);
            (n = "undefined" != typeof wx && r(wx.openLocation)), (t.exports = n);
        },
        function (t, n) {
            (n = function (t, n, e) {
                var r = t.length;
                (n = null == n ? 0 : n < 0 ? Math.max(r + n, 0) : Math.min(n, r)), (e = null == e ? r : e < 0 ? Math.max(r + e, 0) : Math.min(e, r));
                for (var o = []; n < e; ) o.push(t[n++]);
                return o;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            (n = e(53)(e(54), 2)), (t.exports = n);
        },
        function (t, n, e) {
            var r = e(26),
                o = e(9);
            (n = r(function (t, n) {
                return function () {
                    var e = [];
                    return (e = (e = e.concat(n)).concat(o(arguments))), t.apply(this, e);
                };
            })),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t, n) {
                var e;
                return function () {
                    return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = null), e;
                };
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(5),
                o = e(6),
                i = e(20);
            (n = function (t) {
                return r(t) ? (o(t) ? t.slice() : i({}, t)) : t;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            (n = e(26)(function (t, n) {
                for (var e = t.length, r = 0, o = n.length; r < o; r++) for (var i = n[r], u = 0, a = i.length; u < a; u++) t[e++] = i[u];
                return (t.length = e), t;
            })),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(2);
            (n = function (t) {
                var n = (t = r(t))[0].getBoundingClientRect();
                return { left: n.left + window.pageXOffset, top: n.top + window.pageYOffset, width: Math.round(n.width), height: Math.round(n.height) };
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(0),
                o = e(2);
            n = function (t) {
                (t = o(t)),
                    r(t, function (t) {
                        (function (t) {
                            return "none" == getComputedStyle(t, "").getPropertyValue("display");
                        })(t) &&
                            (t.style.display = (function (t) {
                                var n, e;
                                i[t] ||
                                    ((n = document.createElement(t)),
                                    document.documentElement.appendChild(n),
                                    (e = getComputedStyle(n, "").getPropertyValue("display")),
                                    n.parentNode.removeChild(n),
                                    "none" == e && (e = "block"),
                                    (i[t] = e));
                                return i[t];
                            })(t.nodeName));
                    });
            };
            var i = {};
            t.exports = n;
        },
        function (t, n, e) {
            var r = e(1),
                o = e(5),
                i = e(29),
                u = e(3),
                a = e(18),
                c = e(14),
                s = e(2),
                f = e(62),
                l = e(0);
            n = function (t, n, e) {
                if (((t = s(t)), u(e) && r(n)))
                    return (function (t, n) {
                        return t.style[f(n)] || getComputedStyle(t, "").getPropertyValue(n);
                    })(t[0], n);
                var h = n;
                o(h) || ((h = {})[n] = e),
                    (function (t, n) {
                        l(t, function (t) {
                            var e = ";";
                            l(n, function (t, n) {
                                (n = f.dash(n)),
                                    (e +=
                                        n +
                                        ":" +
                                        (function (t, n) {
                                            return c(n) && !a(p, i(t)) ? n + "px" : n;
                                        })(n, t) +
                                        ";");
                            }),
                                (t.style.cssText += e);
                        });
                    })(t, h);
            };
            var p = ["column-count", "columns", "font-weight", "line-weight", "opacity", "z-index", "zoom"];
            t.exports = n;
        },
        function (t, n) {
            (n = function (t, n, e) {
                return Array.prototype.indexOf.call(t, n, e);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(0);
            (n = function (t) {
                var n = [];
                return (
                    r(t, function (t) {
                        n.push(t);
                    }),
                    n
                );
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(63),
                o = e(64),
                i = e(65),
                u = e(12),
                a = e(29);
            (n = r(function (t) {
                if (((t = t.replace(s, "")), (t = o(t)), u(f, t))) return t;
                for (var n = c.length; n--; ) {
                    var e = c[n] + i(t);
                    if (u(f, e)) return e;
                }
                return t;
            })).dash = r(function (t) {
                var e = n(t);
                return (s.test(e) ? "-" : "") + a(e);
            });
            var c = ["O", "ms", "Moz", "Webkit"],
                s = /^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g,
                f = document.createElement("p").style;
            t.exports = n;
        },
        function (t, n, e) {
            var r = e(12);
            (n = function (t, n) {
                var e = function (o) {
                    var i = e.cache,
                        u = "" + (n ? n.apply(this, arguments) : o);
                    return r(i, u) || (i[u] = t.apply(this, arguments)), i[u];
                };
                return (e.cache = {}), e;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(30);
            function o(t, n) {
                this[n] = t.replace(/\w/, function (t) {
                    return t.toUpperCase();
                });
            }
            (n = function (t) {
                var n = r(t),
                    e = n[0];
                return n.shift(), n.forEach(o, n), (e += n.join(""));
            }),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t) {
                return t.length < 1 ? t : t[0].toUpperCase() + t.slice(1);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(3),
                o = e(0),
                i = e(2);
            function u(t) {
                return function (n, e) {
                    var u = (n = i(n))[0];
                    if (r(e)) return u ? u[t] : "";
                    u &&
                        o(n, function (n) {
                            n[t] = e;
                        });
                };
            }
            (n = { html: u("innerHTML"), text: u("textContent"), val: u("value") }), (t.exports = n);
        },
        function (t, n, e) {
            var r = e(0),
                o = e(2);
            (n = function (t) {
                (t = o(t)),
                    r(t, function (t) {
                        var n = t.parentNode;
                        n && n.removeChild(t);
                    });
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(31),
                o = e(1),
                i = e(5),
                u = e(0);
            e(2);
            (n = function (t, n, e) {
                var a = n;
                return (
                    o(n) && (a = "data-" + n),
                    i(n) &&
                        ((a = {}),
                        u(n, function (t, n) {
                            a["data-" + n] = t;
                        })),
                    r(t, a, e)
                );
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(70),
                o = e(3),
                i = e(2),
                u = e(0);
            function a(t) {
                return function (n, e, a, c) {
                    (n = i(n)),
                        o(c) && ((c = a), (a = void 0)),
                        u(n, function (n) {
                            r[t](n, e, a, c);
                        });
                };
            }
            (n = { on: a("add"), off: a("remove") }), (t.exports = n);
        },
        function (t, n, e) {
            var r = e(13),
                o = e(18);
            function i() {
                return !0;
            }
            function u() {
                return !1;
            }
            function a(t) {
                var e,
                    r = this.events[t.type],
                    o = c.call(this, t, r);
                t = new n.Event(t);
                for (var i, u, a = 0; (u = o[a++]) && !t.isPropagationStopped(); )
                    for (t.curTarget = u.el, i = 0; (e = u.handlers[i++]) && !t.isImmediatePropagationStopped(); ) !1 === e.handler.apply(u.el, [t]) && (t.preventDefault(), t.stopPropagation());
            }
            function c(t, n) {
                var e,
                    r,
                    i,
                    u,
                    a = t.target,
                    c = [],
                    s = n.delegateCount;
                if (a.nodeType)
                    for (; a !== this; a = a.parentNode || this) {
                        for (r = [], u = 0; u < s; u++) void 0 === r[(e = (i = n[u]).selector + " ")] && (r[e] = o(this.querySelectorAll(e), a)), r[e] && r.push(i);
                        r.length && c.push({ el: a, handlers: r });
                    }
                return s < n.length && c.push({ el: this, handlers: n.slice(s) }), c;
            }
            (n = {
                add: function (t, n, e, r) {
                    var o,
                        i = { selector: e, handler: r };
                    t.events || (t.events = {}),
                        (o = t.events[n]) ||
                            (((o = t.events[n] = []).delegateCount = 0),
                            t.addEventListener(
                                n,
                                function () {
                                    a.apply(t, arguments);
                                },
                                !1
                            )),
                        e ? o.splice(o.delegateCount++, 0, i) : o.push(i);
                },
                remove: function (t, n, e, r) {
                    var o = t.events;
                    if (o && o[n]) for (var i, u = o[n], a = u.length; a--; ) (i = u[a]), (e && i.selector != e) || i.handler != r || (u.splice(a, 1), i.selector && u.delegateCount--);
                },
                Event: r({
                    className: "Event",
                    initialize: function (t) {
                        this.origEvent = t;
                    },
                    isDefaultPrevented: u,
                    isPropagationStopped: u,
                    isImmediatePropagationStopped: u,
                    preventDefault: function () {
                        var t = this.origEvent;
                        (this.isDefaultPrevented = i), t && t.preventDefault && t.preventDefault();
                    },
                    stopPropagation: function () {
                        var t = this.origEvent;
                        (this.isPropagationStopped = i), t && t.stopPropagation && t.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var t = this.origEvent;
                        (this.isImmediatePropagationStopped = i), t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(9),
                o = e(72),
                i = e(2),
                u = e(1),
                a = e(0);
            function c(t) {
                return u(t) ? t.split(/\s+/) : r(t);
            }
            (n = {
                add: function (t, e) {
                    t = i(t);
                    var r = c(e);
                    a(t, function (t) {
                        var e = [];
                        a(r, function (r) {
                            n.has(t, r) || e.push(r);
                        }),
                            0 !== e.length && (t.className += (t.className ? " " : "") + e.join(" "));
                    });
                },
                has: function (t, n) {
                    t = i(t);
                    var e = new RegExp("(^|\\s)" + n + "(\\s|$)");
                    return o(t, function (t) {
                        return e.test(t.className);
                    });
                },
                toggle: function (t, e) {
                    (t = i(t)),
                        a(t, function (t) {
                            if (!n.has(t, e)) return n.add(t, e);
                            n.remove(t, e);
                        });
                },
                remove: function (t, n) {
                    t = i(t);
                    var e = c(n);
                    a(t, function (t) {
                        a(e, function (n) {
                            t.classList.remove(n);
                        });
                    });
                },
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(15),
                o = e(7),
                i = e(4);
            (n = function (t, n, e) {
                n = r(n, e);
                for (var u = !o(t) && i(t), a = (u || t).length, c = 0; c < a; c++) {
                    var s = u ? u[c] : c;
                    if (n(t[s], s, t)) return !0;
                }
                return !1;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(0),
                o = e(2),
                i = e(1);
            function u(t) {
                return function (n, e) {
                    (n = o(n)),
                        r(n, function (n) {
                            if (i(e)) n.insertAdjacentHTML(t, e);
                            else {
                                var r = n.parentNode;
                                switch (t) {
                                    case "beforebegin":
                                        r && r.insertBefore(e, n);
                                        break;
                                    case "afterend":
                                        r && r.insertBefore(e, n.nextSibling);
                                        break;
                                    case "beforeend":
                                        n.appendChild(e);
                                        break;
                                    case "afterbegin":
                                        n.prepend(e);
                                }
                            }
                        });
                };
            }
            (n = { before: u("beforebegin"), after: u("afterend"), append: u("beforeend"), prepend: u("afterbegin") }), (t.exports = n);
        },
        function (t, n, e) {
            "use strict";
            var r =
                (this && this.__importDefault) ||
                function (t) {
                    return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(n, "__esModule", { value: !0 }), (n.pxToNum = n.executeAfterTransition = n.hasVerticalScrollbar = n.measuredScrollbarWidth = n.eventClient = n.drag = n.classPrefix = void 0);
            var o = r(e(10)),
                i = r(e(16)),
                u = r(e(77)),
                a = r(e(80)),
                c = r(e(14)),
                s = r(e(18)),
                f = r(e(35));
            n.classPrefix = function (t) {
                var n = "luna-" + t + "-";
                function e(t) {
                    return o
                        .default(i.default(t).split(/\s+/), function (t) {
                            return s.default(t, n)
                                ? t
                                : t.replace(/[\w-]+/, function (t) {
                                      return "" + n + t;
                                  });
                        })
                        .join(" ");
                }
                return function (t) {
                    if (/<[^>]*>/g.test(t))
                        try {
                            var n = a.default.parse(t);
                            return (
                                (function t(n, e) {
                                    for (var r = 0, o = n.length; r < o; r++) {
                                        var i = n[r];
                                        e(i), i.content && t(i.content, e);
                                    }
                                })(n, function (t) {
                                    t.attrs && t.attrs.class && (t.attrs.class = e(t.attrs.class));
                                }),
                                a.default.stringify(n)
                            );
                        } catch (n) {
                            return e(t);
                        }
                    return e(t);
                };
            };
            var l,
                p = "ontouchstart" in u.default,
                h = { start: "touchstart", move: "touchmove", end: "touchend" },
                d = { start: "mousedown", move: "mousemove", end: "mouseup" };
            (n.drag = function (t) {
                return p ? h[t] : d[t];
            }),
                (n.eventClient = function (t, n) {
                    var e = "x" === t ? "clientX" : "clientY";
                    return n[e] ? n[e] : n.changedTouches ? n.changedTouches[0][e] : 0;
                }),
                (n.measuredScrollbarWidth = function () {
                    if (c.default(l)) return l;
                    if (!document) return 16;
                    var t = document.createElement("div"),
                        n = document.createElement("div");
                    return (
                        t.setAttribute("style", "display: block; width: 100px; height: 100px; overflow: scroll;"),
                        n.setAttribute("style", "height: 200px"),
                        t.appendChild(n),
                        document.body.appendChild(t),
                        (l = t.offsetWidth - t.clientWidth),
                        document.body.removeChild(t),
                        l
                    );
                }),
                (n.hasVerticalScrollbar = function (t) {
                    return t.scrollHeight > t.offsetHeight;
                }),
                (n.executeAfterTransition = function (t, n) {
                    var e = function (r) {
                        r.target === t && (t.removeEventListener("transitionend", e), n());
                    };
                    t.addEventListener("transitionend", e);
                }),
                (n.pxToNum = function (t) {
                    return f.default(t.replace("px", ""));
                });
        },
        function (t, n) {
            var e = /^\s+/;
            (n = function (t, n) {
                if (null == n) return t.trimLeft ? t.trimLeft() : t.replace(e, "");
                for (var r, o, i = 0, u = t.length, a = n.length, c = !0; c && i < u; )
                    for (c = !1, r = -1, o = t.charAt(i); ++r < a; )
                        if (o === n[r]) {
                            (c = !0), i++;
                            break;
                        }
                return i >= u ? "" : t.substr(i, u);
            }),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t, n) {
                if (null == n) {
                    if (t.trimRight) return t.trimRight();
                    n = " \r\n\t\f\v";
                }
                for (var e, r, o = t.length - 1, i = n.length, u = !0; u && o >= 0; )
                    for (u = !1, e = -1, r = t.charAt(o); ++e < i; )
                        if (r === n[e]) {
                            (u = !0), o--;
                            break;
                        }
                return o >= 0 ? t.substring(0, o + 1) : "";
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            (function (r) {
                var o = e(79);
                (n = o ? window : r), (t.exports = n);
            }.call(this, e(78)));
        },
        function (t, n) {
            var e;
            e = (function () {
                return this;
            })();
            try {
                e = e || new Function("return this")();
            } catch (t) {
                "object" == typeof window && (e = window);
            }
            t.exports = e;
        },
        function (t, n) {
            (n = "object" == typeof window && "object" == typeof document && 9 === document.nodeType), (t.exports = n);
        },
        function (t, n, e) {
            var r = e(81),
                o = e(84),
                i = e(6),
                u = e(0),
                a = e(1),
                c = e(86);
            var s = function (t) {
                    return t.replace(/&quot;/g, '"');
                },
                f = function (t) {
                    return t.replace(/"/g, "&amp;quot;");
                };
            (n = {
                parse: function (t) {
                    var n = [],
                        e = new o();
                    return (
                        r(t, {
                            start: function (t, n) {
                                (n = c(n, function (t) {
                                    return s(t);
                                })),
                                    e.push({ tag: t, attrs: n });
                            },
                            end: function () {
                                var t = e.pop();
                                if (e.size) {
                                    var r = e.peek();
                                    i(r.content) || (r.content = []), r.content.push(t);
                                } else n.push(t);
                            },
                            comment: function (t) {
                                var r = "\x3c!--".concat(t, "--\x3e"),
                                    o = e.peek();
                                o ? (o.content || (o.content = []), o.content.push(r)) : n.push(r);
                            },
                            text: function (t) {
                                var r = e.peek();
                                r ? (r.content || (r.content = []), r.content.push(t)) : n.push(t);
                            },
                        }),
                        n
                    );
                },
                stringify: function t(n) {
                    var e = "";
                    return (
                        i(n)
                            ? u(n, function (n) {
                                  return (e += t(n));
                              })
                            : a(n)
                            ? (e = n)
                            : ((e += "<".concat(n.tag)),
                              u(n.attrs, function (t, n) {
                                  return (e += " ".concat(n, '="').concat(f(t), '"'));
                              }),
                              (e += ">"),
                              n.content && (e += t(n.content)),
                              (e += "</".concat(n.tag, ">"))),
                        e
                    );
                },
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(32),
                o = e(82),
                i = e(83),
                u = e(33);
            n = function (t, n) {
                for (var e, o = [], p = t; t; ) {
                    if (((e = !0), r(o) && l[r(o)])) {
                        var h = new RegExp("</".concat(r(o), "[^>]*>")).exec(t);
                        if (h) {
                            var d = t.substring(0, h.index);
                            (t = t.substring(h.index + h[0].length)), d && n.text && n.text(d);
                        }
                        _("", r(o));
                    } else {
                        if (i(t, "\x3c!--")) {
                            var v = t.indexOf("--\x3e");
                            v >= 0 && (n.comment && n.comment(t.substring(4, v)), (t = t.substring(v + 3)), (e = !1));
                        } else if (i(t, "<!")) {
                            var m = t.match(a);
                            m && (n.text && n.text(t.substring(0, m[0].length)), (t = t.substring(m[0].length)), (e = !1));
                        } else if (i(t, "</")) {
                            var g = t.match(c);
                            g && ((t = t.substring(g[0].length)), g[0].replace(c, _), (e = !1));
                        } else if (i(t, "<")) {
                            var x = t.match(s);
                            x && ((t = t.substring(x[0].length)), x[0].replace(s, w), (e = !1));
                        }
                        if (e) {
                            var y = t.indexOf("<"),
                                b = y < 0 ? t : t.substring(0, y);
                            (t = y < 0 ? "" : t.substring(y)), n.text && n.text(b);
                        }
                    }
                    if (p === t) throw Error("Parse Error: " + t);
                    p = t;
                }
                function w(t, e, r, i) {
                    if (((e = u(e)), (i = !!i) || o.push(e), n.start)) {
                        var a = {};
                        r.replace(f, function (t, n, e, r, o) {
                            a[n] = e || r || o || "";
                        }),
                            n.start(e, a, i);
                    }
                }
                function _(t, e) {
                    var r;
                    if ((e = u(e))) for (r = o.length - 1; r >= 0 && o[r] !== e; r--);
                    else r = 0;
                    if (r >= 0) {
                        for (var i = o.length - 1; i >= r; i--) n.end && n.end(o[i]);
                        o.length = r;
                    }
                }
                _();
            };
            var a = /^<!\s*doctype((?:\s+[\w:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i,
                c = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
                s = /^<([-A-Za-z0-9_]+)((?:\s+[-A-Za-z0-9_:@.]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i,
                f = /([-A-Za-z0-9_:@.]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
                l = o("script,style".split(","));
            t.exports = n;
        },
        function (t, n, e) {
            var r = e(0),
                o = e(3),
                i = e(8);
            (n = function (t, n) {
                o(n) && (n = !0);
                var e = i(n),
                    u = {};
                return (
                    r(t, function (t) {
                        u[t] = e ? n(t) : n;
                    }),
                    u
                );
            }),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t, n) {
                return 0 === t.indexOf(n);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(13),
                o = e(85);
            (n = r({
                initialize: function () {
                    this.clear();
                },
                clear: function () {
                    (this._items = []), (this.size = 0);
                },
                push: function (t) {
                    return this._items.push(t), ++this.size;
                },
                pop: function () {
                    if (this.size) return this.size--, this._items.pop();
                },
                peek: function () {
                    return this._items[this.size - 1];
                },
                forEach: function (t, n) {
                    n = arguments.length > 1 ? n : this;
                    for (var e = this._items, r = this.size - 1, o = 0; r >= 0; r--, o++) t.call(n, e[r], o, this);
                },
                toArr: function () {
                    return o(this._items);
                },
            })),
                (t.exports = n);
        },
        function (t, n) {
            (n = function (t) {
                var n = t.length,
                    e = Array(n);
                n--;
                for (var r = 0; r <= n; r++) e[n - r] = t[r];
                return e;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(15),
                o = e(4);
            (n = function (t, n, e) {
                n = r(n, e);
                for (var i = o(t), u = i.length, a = {}, c = 0; c < u; c++) {
                    var s = i[c];
                    a[s] = n(t[s], s, t);
                }
                return a;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(1),
                o = e(9),
                i = e(88),
                u = e(10),
                a = e(16);
            n = function (t) {
                r(t) && (t = o(t));
                for (var n = "", e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), f = 1; f < e; f++) s[f - 1] = arguments[f];
                for (var l = 0, p = t.length; l < p; l++) (n += t[l]), s[l] && (n += s[l]);
                for (var h = n.split("\n"), d = [], v = 0, m = h.length; v < m; v++) {
                    var g = h[v],
                        x = g.match(c);
                    x && d.push(x[1].length);
                }
                var y = d.length > 0 ? i.apply(null, d) : 0;
                return a(
                    u(h, function (t) {
                        return " " === t[0] ? t.slice(y) : t;
                    }).join("\n")
                );
            };
            var c = /^(\s+)\S+/;
            t.exports = n;
        },
        function (t, n) {
            (n = function () {
                for (var t = arguments, n = t[0], e = 1, r = t.length; e < r; e++) t[e] < n && (n = t[e]);
                return n;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(7),
                o = e(6),
                i = e(1),
                u = e(90),
                a = e(4);
            (n = function (t) {
                return null == t || (r(t) && (o(t) || i(t) || u(t)) ? 0 === t.length : 0 === a(t).length);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(11);
            (n = function (t) {
                return "[object Arguments]" === r(t);
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(24),
                o = e(10),
                i = e(1),
                u = e(17),
                a = e(92),
                c = e(93);
            function s(t, n) {
                return i(t) ? t : u(t, n.key) || "";
            }
            function f(t, n) {
                var e = n.length,
                    r = t.length;
                if (r > e) return !1;
                if (r === e) return t === n;
                for (var o = 0, i = 0; o < r; o++) {
                    for (var u = t.charCodeAt(o), a = !1; i < e; )
                        if (n.charCodeAt(i++) === u) {
                            a = !0;
                            break;
                        }
                    if (!a) return !1;
                }
                return !0;
            }
            (n = function (t, n) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return (
                    e.caseSensitive || (t = t.toLowerCase()),
                    (n = o(n, function (n) {
                        var r = s(n, e);
                        return e.caseSensitive || (r = r.toLowerCase()), { value: n, levenshtein: a(t, r), string: r };
                    })),
                    (n = r(n, function (n) {
                        return f(t, n.string);
                    })).sort(function (t, n) {
                        return t.levenshtein - n.levenshtein;
                    }),
                    c(n, "value")
                );
            }),
                (t.exports = n);
        },
        function (t, n) {
            var e = [],
                r = [];
            (n = function (t, n) {
                if (t === n) return 0;
                if (t.length > n.length) {
                    var o = t;
                    (t = n), (n = o);
                }
                var i = t.length,
                    u = n.length;
                if (!i) return u;
                if (!u) return i;
                for (; i > 0 && t.charCodeAt(i - 1) === n.charCodeAt(u - 1); ) i--, u--;
                if (!i) return u;
                for (var a = 0; a < i && t.charCodeAt(a) === n.charCodeAt(a); ) a++;
                if (((u -= a), !(i -= a))) return u;
                for (var c, s, f, l = 0, p = 0; p < u; ) (r[p] = n.charCodeAt(a + p)), (e[p] = ++p);
                for (var h = 0; h < i; h++) {
                    (c = h), (l = h + 1), (f = t.charCodeAt(a + h));
                    for (var d = 0; d < u; d++) (s = l), (l = c), (c = e[d]), f !== r[d] && (c < l && (l = c), s < l && (l = s), l++), (e[d] = l);
                }
                return l;
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(10),
                o = e(25);
            (n = function (t, n) {
                return r(t, o(n));
            }),
                (t.exports = n);
        },
        function (t, n, e) {
            var r = e(19),
                o = e(36),
                i = e(0),
                u = e(23),
                a = e(16),
                c = e(10);
            n = {
                on: function (t, n) {
                    (t = t.split(l)),
                        i(t, function (t) {
                            s.on(f(t), n);
                        });
                },
                off: function (t, n) {
                    (t = t.split(l)),
                        i(t, function (t) {
                            s.off(f(t), n);
                        });
                },
            };
            var s = new r();
            function f(t) {
                var n = t.split(p);
                return (
                    (n = c(n, function (t) {
                        return a(t);
                    })),
                    (n = u(n)).sort(),
                    n.join("+")
                );
            }
            document.addEventListener("keydown", function (t) {
                var n = [];
                t.ctrlKey && n.push("ctrl"), t.shiftKey && n.push("shift"), n.push(o(t.keyCode)), s.emit(f(n.join("+")), t);
            });
            var l = /,/g,
                p = /\+/g;
            t.exports = n;
        },
        function (t, n, e) {
            var r = e(0);
            (n = function (t) {
                var n = {};
                return (
                    r(t, function (t, e) {
                        n[t] = e;
                    }),
                    n
                );
            }),
                (t.exports = n);
        },
    ]);
});
