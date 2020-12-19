"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (e, t) {
  var n = [],
      i = e.document,
      r = n.slice,
      o = n.concat,
      s = n.push,
      a = n.indexOf,
      u = {},
      c = u.toString,
      l = u.hasOwnProperty,
      f = {},
      h = "2.2.4",
      d = function d(e, t) {
    return new d.fn.init(e, t);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      g = /^-ms-/,
      m = /-([\da-z])/gi,
      v = function v(e, t) {
    return t.toUpperCase();
  };

  function y(e) {
    var t = !!e && "length" in e && e.length,
        n = d.type(e);
    return "function" !== n && !d.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  d.fn = d.prototype = {
    jquery: h,
    constructor: d,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return r.call(this);
    },
    get: function get(e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this);
    },
    pushStack: function pushStack(e) {
      var t = d.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function each(e) {
      return d.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(d.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(r.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, d.extend = d.fn.extend = function () {
    var e,
        t,
        n,
        i,
        r,
        o,
        s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        c = !1;

    for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == _typeof(s) || d.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = s[t], s !== (i = e[t]) && (c && i && (d.isPlainObject(i) || (r = d.isArray(i))) ? (r ? (r = !1, o = n && d.isArray(n) ? n : []) : o = n && d.isPlainObject(n) ? n : {}, s[t] = d.extend(c, o, i)) : void 0 !== i && (s[t] = i));
      }
    }

    return s;
  }, d.extend({
    expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isFunction: function isFunction(e) {
      return "function" === d.type(e);
    },
    isArray: Array.isArray,
    isWindow: function isWindow(e) {
      return null != e && e === e.window;
    },
    isNumeric: function isNumeric(e) {
      var t = e && e.toString();
      return !d.isArray(e) && t - parseFloat(t) + 1 >= 0;
    },
    isPlainObject: function isPlainObject(e) {
      var t;
      if ("object" !== d.type(e) || e.nodeType || d.isWindow(e)) return !1;
      if (e.constructor && !l.call(e, "constructor") && !l.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;

      for (t in e) {
        ;
      }

      return void 0 === t || l.call(e, t);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    type: function type(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? u[c.call(e)] || "object" : _typeof(e);
    },
    globalEval: function globalEval(e) {
      var t,
          n = eval;
      (e = d.trim(e)) && (1 === e.indexOf("use strict") ? ((t = i.createElement("script")).text = e, i.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    },
    camelCase: function camelCase(e) {
      return e.replace(g, "ms-").replace(m, v);
    },
    nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function each(e, t) {
      var n,
          i = 0;
      if (y(e)) for (n = e.length; n > i && !1 !== t.call(e[i], i, e[i]); i++) {
        ;
      } else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }
      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (y(Object(e)) ? d.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : a.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, i = 0, r = e.length; n > i; i++) {
        e[r++] = t[i];
      }

      return e.length = r, e;
    },
    grep: function grep(e, t, n) {
      for (var i = [], r = 0, o = e.length, s = !n; o > r; r++) {
        !t(e[r], r) !== s && i.push(e[r]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var i,
          r,
          s = 0,
          a = [];
      if (y(e)) for (i = e.length; i > s; s++) {
        null != (r = t(e[s], s, n)) && a.push(r);
      } else for (s in e) {
        null != (r = t(e[s], s, n)) && a.push(r);
      }
      return o.apply([], a);
    },
    guid: 1,
    proxy: function proxy(e, t) {
      var n, i, o;
      return "string" == typeof t && (n = e[t], t = e, e = n), d.isFunction(e) ? (i = r.call(arguments, 2), (o = function o() {
        return e.apply(t || this, i.concat(r.call(arguments)));
      }).guid = e.guid = e.guid || d.guid++, o) : void 0;
    },
    now: Date.now,
    support: f
  }), "function" == typeof Symbol && (d.fn[Symbol.iterator] = n[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    u["[object " + t + "]"] = t.toLowerCase();
  });

  var x = function (e) {
    var t,
        n,
        i,
        r,
        o,
        s,
        a,
        u,
        c,
        l,
        f,
        h,
        d,
        p,
        g,
        m,
        v,
        y,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        C = 0,
        T = 0,
        S = oe(),
        j = oe(),
        E = oe(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        k = 1 << 31,
        N = {}.hasOwnProperty,
        P = [],
        A = P.pop,
        I = P.push,
        L = P.push,
        q = P.slice,
        O = function O(e, t) {
      for (var n = 0, i = e.length; i > n; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        F = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        R = "\\[" + F + "*(" + M + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + F + "*\\]",
        W = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
        B = new RegExp(F + "+", "g"),
        $ = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
        z = new RegExp("^" + F + "*," + F + "*"),
        V = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
        _ = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
        G = new RegExp(W),
        X = new RegExp("^" + M + "$"),
        U = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M + "|[*])"),
      ATTR: new RegExp("^" + R),
      PSEUDO: new RegExp("^" + W),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + H + ")$", "i"),
      needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /^(?:input|select|textarea|button)$/i,
        Q = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        ee = /'|\\/g,
        te = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var i = "0x" + t - 65536;
      return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        ie = function ie() {
      h();
    };

    try {
      L.apply(P = q.call(w.childNodes), w.childNodes), P[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: P.length ? function (e, t) {
          I.apply(e, q.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function re(e, t, i, r) {
      var o,
          a,
          c,
          l,
          f,
          p,
          v,
          y,
          C = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
      if (i = i || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return i;

      if (!r && ((t ? t.ownerDocument || t : w) !== d && h(t), t = t || d, g)) {
        if (11 !== T && (p = K.exec(e))) if (o = p[1]) {
          if (9 === T) {
            if (!(c = t.getElementById(o))) return i;
            if (c.id === o) return i.push(c), i;
          } else if (C && (c = C.getElementById(o)) && x(t, c) && c.id === o) return i.push(c), i;
        } else {
          if (p[2]) return L.apply(i, t.getElementsByTagName(e)), i;
          if ((o = p[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i;
        }

        if (n.qsa && !E[e + " "] && (!m || !m.test(e))) {
          if (1 !== T) C = t, y = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((l = t.getAttribute("id")) ? l = l.replace(ee, "\\$&") : t.setAttribute("id", l = b), a = (v = s(e)).length, f = X.test(l) ? "#" + l : "[id='" + l + "']"; a--;) {
              v[a] = f + " " + ge(v[a]);
            }

            y = v.join(","), C = Z.test(e) && de(t.parentNode) || t;
          }
          if (y) try {
            return L.apply(i, C.querySelectorAll(y)), i;
          } catch (e) {} finally {
            l === b && t.removeAttribute("id");
          }
        }
      }

      return u(e.replace($, "$1"), t, i, r);
    }

    function oe() {
      var e = [];
      return function t(n, r) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r;
      };
    }

    function se(e) {
      return e[b] = !0, e;
    }

    function ae(e) {
      var t = d.createElement("div");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function ue(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) {
        i.attrHandle[n[r]] = t;
      }
    }

    function ce(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || k) - (~e.sourceIndex || k);
      if (i) return i;
      if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function le(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }

    function fe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, i) {
          for (var r, o = e([], n.length, t), s = o.length; s--;) {
            n[r = o[s]] && (n[r] = !(i[r] = n[r]));
          }
        });
      });
    }

    function de(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }

    for (t in n = re.support = {}, o = re.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, h = re.setDocument = function (e) {
      var t,
          r,
          s = e ? e.ownerDocument || e : w;
      return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, g = !o(d), (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = ae(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ae(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ae(function (e) {
        return p.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }, i.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete i.find.ID, i.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            r = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          for (; n = o[r++];) {
            1 === n.nodeType && i.push(n);
          }

          return i;
        }

        return o;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        return void 0 !== t.getElementsByClassName && g ? t.getElementsByClassName(e) : void 0;
      }, v = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (ae(function (e) {
        p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]");
      }), ae(function (e) {
        var t = d.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
      })), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ae(function (e) {
        n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", W);
      }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), x = t || J.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;
        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : l ? O(l, e) - O(l, t) : 0 : 4 & i ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;
        var n,
            i = 0,
            r = e.parentNode,
            o = t.parentNode,
            s = [e],
            a = [t];
        if (!r || !o) return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : l ? O(l, e) - O(l, t) : 0;
        if (r === o) return ce(e, t);

        for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }

        for (n = t; n = n.parentNode;) {
          a.unshift(n);
        }

        for (; s[i] === a[i];) {
          i++;
        }

        return i ? ce(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0;
      }, d) : d;
    }, re.matches = function (e, t) {
      return re(e, null, null, t);
    }, re.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && h(e), t = t.replace(_, "='$1']"), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
        var i = y.call(e, t);
        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}
      return re(t, d, null, [e]).length > 0;
    }, re.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && h(e), x(e, t);
    }, re.attr = function (e, t) {
      (e.ownerDocument || e) !== d && h(e);
      var r = i.attrHandle[t.toLowerCase()],
          o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, re.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, re.uniqueSort = function (e) {
      var t,
          i = [],
          r = 0,
          o = 0;

      if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(D), f) {
        for (; t = e[o++];) {
          t === e[o] && (r = i.push(o));
        }

        for (; r--;) {
          e.splice(i[r], 1);
        }
      }

      return l = null, e;
    }, r = re.getText = function (e) {
      var t,
          n = "",
          i = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += r(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += r(t);
      }

      return n;
    }, (i = re.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: U,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = S[e + " "];
          return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && S(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (i) {
            var r = re.attr(i, e);
            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function CHILD(e, t, n, i, r) {
          var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
          return 1 === i && 0 === r ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var c,
                l,
                f,
                h,
                d,
                p,
                g = o !== s ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !u && !a,
                x = !1;

            if (m) {
              if (o) {
                for (; g;) {
                  for (h = t; h = h[g];) {
                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                  }

                  p = g = "only" === e && !p && "nextSibling";
                }

                return !0;
              }

              if (p = [s ? m.firstChild : m.lastChild], s && y) {
                for (x = (d = (c = (l = (f = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (x = d = 0) || p.pop();) {
                  if (1 === h.nodeType && ++x && h === t) {
                    l[e] = [C, d, x];
                    break;
                  }
                }
              } else if (y && (x = d = (c = (l = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === x) for (; (h = ++d && h && h[g] || (x = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++x || (y && ((l = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [C, x]), h !== t));) {
                ;
              }

              return (x -= r) === i || x % i == 0 && x / i >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
          return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            for (var i, o = r(e, t), s = o.length; s--;) {
              e[i = O(e, o[s])] = !(n[i] = o[s]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: se(function (e) {
          var t = [],
              n = [],
              i = a(e.replace($, "$1"));
          return i[b] ? se(function (e, t, n, r) {
            for (var o, s = i(e, null, r, []), a = e.length; a--;) {
              (o = s[a]) && (e[a] = !(t[a] = o));
            }
          }) : function (e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: se(function (e) {
          return function (t) {
            return re(e, t).length > 0;
          };
        }),
        contains: se(function (e) {
          return e = e.replace(te, ne), function (t) {
            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
          };
        }),
        lang: se(function (e) {
          return X.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
            var n;

            do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === p;
        },
        focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function enabled(e) {
          return !1 === e.disabled;
        },
        disabled: function disabled(e) {
          return !0 === e.disabled;
        },
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !i.pseudos.empty(e);
        },
        header: function header(e) {
          return Q.test(e.nodeName);
        },
        input: function input(e) {
          return Y.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: he(function () {
          return [0];
        }),
        last: he(function (e, t) {
          return [t - 1];
        }),
        eq: he(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: he(function (e, t) {
          for (var n = 0; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: he(function (e, t) {
          for (var n = 1; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: he(function (e, t, n) {
          for (var i = 0 > n ? n + t : n; --i >= 0;) {
            e.push(i);
          }

          return e;
        }),
        gt: he(function (e, t, n) {
          for (var i = 0 > n ? n + t : n; ++i < t;) {
            e.push(i);
          }

          return e;
        })
      }
    }).pseudos.nth = i.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      i.pseudos[t] = le(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      i.pseudos[t] = fe(t);
    }

    function pe() {}

    function ge(e) {
      for (var t = 0, n = e.length, i = ""; n > t; t++) {
        i += e[t].value;
      }

      return i;
    }

    function me(e, t, n) {
      var i = t.dir,
          r = n && "parentNode" === i,
          o = T++;
      return t.first ? function (t, n, o) {
        for (; t = t[i];) {
          if (1 === t.nodeType || r) return e(t, n, o);
        }
      } : function (t, n, s) {
        var a,
            u,
            c,
            l = [C, o];

        if (s) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || r) && e(t, n, s)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || r) {
            if ((a = (u = (c = t[b] || (t[b] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[i]) && a[0] === C && a[1] === o) return l[2] = a[2];
            if (u[i] = l, l[2] = e(t, n, s)) return !0;
          }
        }
      };
    }

    function ve(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var r = e.length; r--;) {
          if (!e[r](t, n, i)) return !1;
        }

        return !0;
      } : e[0];
    }

    function ye(e, t, n, i, r) {
      for (var o, s = [], a = 0, u = e.length, c = null != t; u > a; a++) {
        (o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
      }

      return s;
    }

    function xe(e, t, n, i, r, o) {
      return i && !i[b] && (i = xe(i)), r && !r[b] && (r = xe(r, o)), se(function (o, s, a, u) {
        var c,
            l,
            f,
            h = [],
            d = [],
            p = s.length,
            g = o || function (e, t, n) {
          for (var i = 0, r = t.length; r > i; i++) {
            re(e, t[i], n);
          }

          return n;
        }(t || "*", a.nodeType ? [a] : a, []),
            m = !e || !o && t ? g : ye(g, h, e, a, u),
            v = n ? r || (o ? e : p || i) ? [] : s : m;

        if (n && n(m, v, a, u), i) for (c = ye(v, d), i(c, [], a, u), l = c.length; l--;) {
          (f = c[l]) && (v[d[l]] = !(m[d[l]] = f));
        }

        if (o) {
          if (r || e) {
            if (r) {
              for (c = [], l = v.length; l--;) {
                (f = v[l]) && c.push(m[l] = f);
              }

              r(null, v = [], c, u);
            }

            for (l = v.length; l--;) {
              (f = v[l]) && (c = r ? O(o, f) : h[l]) > -1 && (o[c] = !(s[c] = f));
            }
          }
        } else v = ye(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, u) : L.apply(s, v);
      });
    }

    function be(e) {
      for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], u = s ? 1 : 0, l = me(function (e) {
        return e === t;
      }, a, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, a, !0), h = [function (e, n, i) {
        var r = !s && (i || n !== c) || ((t = n).nodeType ? l(e, n, i) : f(e, n, i));
        return t = null, r;
      }]; o > u; u++) {
        if (n = i.relative[e[u].type]) h = [me(ve(h), n)];else {
          if ((n = i.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (r = ++u; o > r && !i.relative[e[r].type]; r++) {
              ;
            }

            return xe(u > 1 && ve(h), u > 1 && ge(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace($, "$1"), n, r > u && be(e.slice(u, r)), o > r && be(e = e.slice(r)), o > r && ge(e));
          }

          h.push(n);
        }
      }

      return ve(h);
    }

    function we(e, t) {
      var n = t.length > 0,
          r = e.length > 0,
          o = function o(_o, s, a, u, l) {
        var f,
            p,
            m,
            v = 0,
            y = "0",
            x = _o && [],
            b = [],
            w = c,
            T = _o || r && i.find.TAG("*", l),
            S = C += null == w ? 1 : Math.random() || .1,
            j = T.length;

        for (l && (c = s === d || s || l); y !== j && null != (f = T[y]); y++) {
          if (r && f) {
            for (p = 0, s || f.ownerDocument === d || (h(f), a = !g); m = e[p++];) {
              if (m(f, s || d, a)) {
                u.push(f);
                break;
              }
            }

            l && (C = S);
          }

          n && ((f = !m && f) && v--, _o && x.push(f));
        }

        if (v += y, n && y !== v) {
          for (p = 0; m = t[p++];) {
            m(x, b, s, a);
          }

          if (_o) {
            if (v > 0) for (; y--;) {
              x[y] || b[y] || (b[y] = A.call(u));
            }
            b = ye(b);
          }

          L.apply(u, b), l && !_o && b.length > 0 && v + t.length > 1 && re.uniqueSort(u);
        }

        return l && (C = S, c = w), x;
      };

      return n ? se(o) : o;
    }

    return pe.prototype = i.filters = i.pseudos, i.setFilters = new pe(), s = re.tokenize = function (e, t) {
      var n,
          r,
          o,
          s,
          a,
          u,
          c,
          l = j[e + " "];
      if (l) return t ? 0 : l.slice(0);

      for (a = e, u = [], c = i.preFilter; a;) {
        for (s in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = V.exec(a)) && (n = r.shift(), o.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), i.filter) {
          !(r = U[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
            value: n,
            type: s,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? re.error(e) : j(e, u).slice(0);
    }, a = re.compile = function (e, t) {
      var n,
          i = [],
          r = [],
          o = E[e + " "];

      if (!o) {
        for (t || (t = s(e)), n = t.length; n--;) {
          (o = be(t[n]))[b] ? i.push(o) : r.push(o);
        }

        (o = E(e, we(r, i))).selector = e;
      }

      return o;
    }, u = re.select = function (e, t, r, o) {
      var u,
          c,
          l,
          f,
          h,
          d = "function" == typeof e && e,
          p = !o && s(e = d.selector || e);

      if (r = r || [], 1 === p.length) {
        if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && n.getById && 9 === t.nodeType && g && i.relative[c[1].type]) {
          if (!(t = (i.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return r;
          d && (t = t.parentNode), e = e.slice(c.shift().value.length);
        }

        for (u = U.needsContext.test(e) ? 0 : c.length; u-- && (l = c[u], !i.relative[f = l.type]);) {
          if ((h = i.find[f]) && (o = h(l.matches[0].replace(te, ne), Z.test(c[0].type) && de(t.parentNode) || t))) {
            if (c.splice(u, 1), !(e = o.length && ge(c))) return L.apply(r, o), r;
            break;
          }
        }
      }

      return (d || a(e, p))(o, t, !g, r, !t || Z.test(e) && de(t.parentNode) || t), r;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, h(), n.sortDetached = ae(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("div"));
    }), ae(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ue("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ae(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ue("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
    }), ae(function (e) {
      return null == e.getAttribute("disabled");
    }) || ue(H, function (e, t, n) {
      var i;
      return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), re;
  }(e);

  d.find = x, d.expr = x.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = x.uniqueSort, d.text = x.getText, d.isXMLDoc = x.isXML, d.contains = x.contains;

  var b = function b(e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (r && d(e).is(n)) break;
        i.push(e);
      }
    }

    return i;
  },
      w = function w(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      C = d.expr.match.needsContext,
      T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      S = /^.[^:#\[\.,]*$/;

  function j(e, t, n) {
    if (d.isFunction(t)) return d.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    });
    if (t.nodeType) return d.grep(e, function (e) {
      return e === t !== n;
    });

    if ("string" == typeof t) {
      if (S.test(t)) return d.filter(t, e, n);
      t = d.filter(t, e);
    }

    return d.grep(e, function (e) {
      return a.call(t, e) > -1 !== n;
    });
  }

  d.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? d.find.matchesSelector(i, e) ? [i] : [] : d.find.matches(e, d.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, d.fn.extend({
    find: function find(e) {
      var t,
          n = this.length,
          i = [],
          r = this;
      if ("string" != typeof e) return this.pushStack(d(e).filter(function () {
        for (t = 0; n > t; t++) {
          if (d.contains(r[t], this)) return !0;
        }
      }));

      for (t = 0; n > t; t++) {
        d.find(e, r[t], i);
      }

      return (i = this.pushStack(n > 1 ? d.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && C.test(e) ? d(e) : e || [], !1).length;
    }
  });
  var E,
      D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (d.fn.init = function (e, t, n) {
    var r, o;
    if (!e) return this;

    if (n = n || E, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof d ? t[0] : t, d.merge(this, d.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), T.test(r[1]) && d.isPlainObject(t)) for (r in t) {
          d.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (o = i.getElementById(r[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = i, this.selector = e, this;
    }

    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : d.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), d.makeArray(e, this));
  }).prototype = d.fn, E = d(i);
  var k = /^(?:parents|prev(?:Until|All))/,
      N = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {
      ;
    }

    return e;
  }

  d.fn.extend({
    has: function has(e) {
      var t = d(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; n > e; e++) {
          if (d.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      for (var n, i = 0, r = this.length, o = [], s = C.test(e) || "string" != typeof e ? d(e, t || this.context) : 0; r > i; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }

      return this.pushStack(o.length > 1 ? d.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? a.call(d(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(d.uniqueSort(d.merge(this.get(), d(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), d.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return b(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return b(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return b(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return b(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return b(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return b(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return w((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return w(e.firstChild);
    },
    contents: function contents(e) {
      return e.contentDocument || d.merge([], e.childNodes);
    }
  }, function (e, t) {
    d.fn[e] = function (n, i) {
      var r = d.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = d.filter(i, r)), this.length > 1 && (N[e] || d.uniqueSort(r), k.test(e) && r.reverse()), this.pushStack(r);
    };
  });
  var A,
      I = /\S+/g;

  function L() {
    i.removeEventListener("DOMContentLoaded", L), e.removeEventListener("load", L), d.ready();
  }

  d.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};
      return d.each(e.match(I) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : d.extend({}, e);

    var t,
        n,
        i,
        r,
        o = [],
        s = [],
        a = -1,
        u = function u() {
      for (r = e.once, i = t = !0; s.length; a = -1) {
        for (n = s.shift(); ++a < o.length;) {
          !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
    },
        c = {
      add: function add() {
        return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
          d.each(n, function (n, i) {
            d.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== d.type(i) && t(i);
          });
        }(arguments), n && !t && u()), this;
      },
      remove: function remove() {
        return d.each(arguments, function (e, t) {
          for (var n; (n = d.inArray(t, o, n)) > -1;) {
            o.splice(n, 1), a >= n && a--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? d.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function empty() {
        return o && (o = []), this;
      },
      disable: function disable() {
        return r = s = [], o = n = "", this;
      },
      disabled: function disabled() {
        return !o;
      },
      lock: function lock() {
        return r = s = [], n || (o = n = ""), this;
      },
      locked: function locked() {
        return !!r;
      },
      fireWith: function fireWith(e, n) {
        return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || u()), this;
      },
      fire: function fire() {
        return c.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!i;
      }
    };

    return c;
  }, d.extend({
    Deferred: function Deferred(e) {
      var t = [["resolve", "done", d.Callbacks("once memory"), "resolved"], ["reject", "fail", d.Callbacks("once memory"), "rejected"], ["notify", "progress", d.Callbacks("memory")]],
          n = "pending",
          i = {
        state: function state() {
          return n;
        },
        always: function always() {
          return r.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var e = arguments;
          return d.Deferred(function (n) {
            d.each(t, function (t, o) {
              var s = d.isFunction(e[t]) && e[t];
              r[o[1]](function () {
                var e = s && s.apply(this, arguments);
                e && d.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? d.extend(e, i) : i;
        }
      },
          r = {};
      return i.pipe = i.then, d.each(t, function (e, o) {
        var s = o[2],
            a = o[3];
        i[o[1]] = s.add, a && s.add(function () {
          n = a;
        }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
          return r[o[0] + "With"](this === r ? i : this, arguments), this;
        }, r[o[0] + "With"] = s.fireWith;
      }), i.promise(r), e && e.call(r, r), r;
    },
    when: function when(e) {
      var t,
          n,
          i,
          o = 0,
          s = r.call(arguments),
          a = s.length,
          u = 1 !== a || e && d.isFunction(e.promise) ? a : 0,
          c = 1 === u ? e : d.Deferred(),
          l = function l(e, n, i) {
        return function (o) {
          n[e] = this, i[e] = arguments.length > 1 ? r.call(arguments) : o, i === t ? c.notifyWith(n, i) : --u || c.resolveWith(n, i);
        };
      };

      if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) {
        s[o] && d.isFunction(s[o].promise) ? s[o].promise().progress(l(o, n, t)).done(l(o, i, s)).fail(c.reject) : --u;
      }
      return u || c.resolveWith(i, s), c.promise();
    }
  }), d.fn.ready = function (e) {
    return d.ready.promise().done(e), this;
  }, d.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(e) {
      e ? d.readyWait++ : d.ready(!0);
    },
    ready: function ready(e) {
      (!0 === e ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== e && --d.readyWait > 0 || (A.resolveWith(i, [d]), d.fn.triggerHandler && (d(i).triggerHandler("ready"), d(i).off("ready"))));
    }
  }), d.ready.promise = function (t) {
    return A || (A = d.Deferred(), "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(d.ready) : (i.addEventListener("DOMContentLoaded", L), e.addEventListener("load", L))), A.promise(t);
  }, d.ready.promise();

  var q = function q(e, t, n, i, r, o, s) {
    var a = 0,
        u = e.length,
        c = null == n;
    if ("object" === d.type(n)) for (a in r = !0, n) {
      q(e, t, a, n[a], !0, o, s);
    } else if (void 0 !== i && (r = !0, d.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function t(e, _t, n) {
      return c.call(d(e), n);
    })), t)) for (; u > a; a++) {
      t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    }
    return r ? e : c ? t.call(e) : u ? t(e[0], n) : o;
  },
      O = function O(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function H() {
    this.expando = d.expando + H.uid++;
  }

  H.uid = 1, H.prototype = {
    register: function register(e, t) {
      var n = t || {};
      return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
        value: n,
        writable: !0,
        configurable: !0
      }), e[this.expando];
    },
    cache: function cache(e) {
      if (!O(e)) return {};
      var t = e[this.expando];
      return t || (t = {}, O(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var i,
          r = this.cache(e);
      if ("string" == typeof t) r[t] = n;else for (i in t) {
        r[i] = t[i];
      }
      return r;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
    },
    access: function access(e, t, n) {
      var i;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, d.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          i,
          r,
          o = e[this.expando];

      if (void 0 !== o) {
        if (void 0 === t) this.register(e);else {
          d.isArray(t) ? i = t.concat(t.map(d.camelCase)) : (r = d.camelCase(t), t in o ? i = [t, r] : i = (i = r) in o ? [i] : i.match(I) || []), n = i.length;

          for (; n--;) {
            delete o[i[n]];
          }
        }
        (void 0 === t || d.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !d.isEmptyObject(t);
    }
  };
  var F = new H(),
      M = new H(),
      R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      W = /[A-Z]/g;

  function B(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(W, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : R.test(n) ? d.parseJSON(n) : n);
      } catch (e) {}

      M.set(e, t, n);
    } else n = void 0;
    return n;
  }

  d.extend({
    hasData: function hasData(e) {
      return M.hasData(e) || F.hasData(e);
    },
    data: function data(e, t, n) {
      return M.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      M.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return F.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      F.remove(e, t);
    }
  }), d.fn.extend({
    data: function data(e, t) {
      var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (r = M.get(o), 1 === o.nodeType && !F.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = d.camelCase(i.slice(5)), B(o, i, r[i]));
          }

          F.set(o, "hasDataAttrs", !0);
        }

        return r;
      }

      return "object" == _typeof(e) ? this.each(function () {
        M.set(this, e);
      }) : q(this, function (t) {
        var n, i;

        if (o && void 0 === t) {
          if (void 0 !== (n = M.get(o, e) || M.get(o, e.replace(W, "-$&").toLowerCase()))) return n;
          if (i = d.camelCase(e), void 0 !== (n = M.get(o, i))) return n;
          if (void 0 !== (n = B(o, i, void 0))) return n;
        } else i = d.camelCase(e), this.each(function () {
          var n = M.get(this, i);
          M.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && M.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        M.remove(this, e);
      });
    }
  }), d.extend({
    queue: function queue(e, t, n) {
      var i;
      return e ? (t = (t || "fx") + "queue", i = F.get(e, t), n && (!i || d.isArray(n) ? i = F.access(e, t, d.makeArray(n)) : i.push(n)), i || []) : void 0;
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = d.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = d._queueHooks(e, t);

      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
        d.dequeue(e, t);
      }, o)), !i && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return F.get(e, n) || F.access(e, n, {
        empty: d.Callbacks("once memory").add(function () {
          F.remove(e, [t + "queue", n]);
        })
      });
    }
  }), d.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? d.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = d.queue(this, e, t);
        d._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && d.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        d.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          i = 1,
          r = d.Deferred(),
          o = this,
          s = this.length,
          a = function a() {
        --i || r.resolveWith(o, [o]);
      };

      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (n = F.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }

      return a(), r.promise(t);
    }
  });

  var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      z = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
      V = ["Top", "Right", "Bottom", "Left"],
      _ = function _(e, t) {
    return e = t || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e);
  };

  function G(e, t, n, i) {
    var r,
        o = 1,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return d.css(e, t, "");
    },
        u = a(),
        c = n && n[3] || (d.cssNumber[t] ? "" : "px"),
        l = (d.cssNumber[t] || "px" !== c && +u) && z.exec(d.css(e, t));

    if (l && l[3] !== c) {
      c = c || l[3], n = n || [], l = +u || 1;

      do {
        l /= o = o || ".5", d.style(e, t, l + c);
      } while (o !== (o = a() / u) && 1 !== o && --s);
    }

    return n && (l = +l || +u || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = l, i.end = r)), r;
  }

  var X = /^(?:checkbox|radio)$/i,
      U = /<([\w:-]+)/,
      Y = /^$|\/(?:java|ecma)script/i,
      Q = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function J(e, t) {
    var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && d.nodeName(e, t) ? d.merge([e], n) : n;
  }

  function K(e, t) {
    for (var n = 0, i = e.length; i > n; n++) {
      F.set(e[n], "globalEval", !t || F.get(t[n], "globalEval"));
    }
  }

  Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;
  var Z = /<|&#?\w+;/;

  function ee(e, t, n, i, r) {
    for (var o, s, a, u, c, l, f = t.createDocumentFragment(), h = [], p = 0, g = e.length; g > p; p++) {
      if ((o = e[p]) || 0 === o) if ("object" === d.type(o)) d.merge(h, o.nodeType ? [o] : o);else if (Z.test(o)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (U.exec(o) || ["", ""])[1].toLowerCase(), u = Q[a] || Q._default, s.innerHTML = u[1] + d.htmlPrefilter(o) + u[2], l = u[0]; l--;) {
          s = s.lastChild;
        }

        d.merge(h, s.childNodes), (s = f.firstChild).textContent = "";
      } else h.push(t.createTextNode(o));
    }

    for (f.textContent = "", p = 0; o = h[p++];) {
      if (i && d.inArray(o, i) > -1) r && r.push(o);else if (c = d.contains(o.ownerDocument, o), s = J(f.appendChild(o), "script"), c && K(s), n) for (l = 0; o = s[l++];) {
        Y.test(o.type || "") && n.push(o);
      }
    }

    return f;
  }

  !function () {
    var e = i.createDocumentFragment().appendChild(i.createElement("div")),
        t = i.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), f.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();
  var te = /^key/,
      ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ie = /^([^.]*)(?:\.(.+)|)/;

  function re() {
    return !0;
  }

  function oe() {
    return !1;
  }

  function se() {
    try {
      return i.activeElement;
    } catch (e) {}
  }

  function ae(e, t, n, i, r, o) {
    var s, a;

    if ("object" == _typeof(t)) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
        ae(e, a, n, i, t[a], o);
      }

      return e;
    }

    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = oe;else if (!r) return e;
    return 1 === o && (s = r, (r = function r(e) {
      return d().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = d.guid++)), e.each(function () {
      d.event.add(this, t, r, i, n);
    });
  }

  d.event = {
    global: {},
    add: function add(e, t, n, i, r) {
      var o,
          s,
          a,
          u,
          c,
          l,
          f,
          h,
          p,
          g,
          m,
          v = F.get(e);
      if (v) for (n.handler && (n = (o = n).handler, r = o.selector), n.guid || (n.guid = d.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
        return void 0 !== d && d.event.triggered !== t.type ? d.event.dispatch.apply(e, arguments) : void 0;
      }), c = (t = (t || "").match(I) || [""]).length; c--;) {
        p = m = (a = ie.exec(t[c]) || [])[1], g = (a[2] || "").split(".").sort(), p && (f = d.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = d.event.special[p] || {}, l = d.extend({
          type: p,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: r,
          needsContext: r && d.expr.match.needsContext.test(r),
          namespace: g.join(".")
        }, o), (h = u[p]) || ((h = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, g, s) || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, l) : h.push(l), d.event.global[p] = !0);
      }
    },
    remove: function remove(e, t, n, i, r) {
      var o,
          s,
          a,
          u,
          c,
          l,
          f,
          h,
          p,
          g,
          m,
          v = F.hasData(e) && F.get(e);

      if (v && (u = v.events)) {
        for (c = (t = (t || "").match(I) || [""]).length; c--;) {
          if (p = m = (a = ie.exec(t[c]) || [])[1], g = (a[2] || "").split(".").sort(), p) {
            for (f = d.event.special[p] || {}, h = u[p = (i ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) {
              l = h[o], !r && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount--, f.remove && f.remove.call(e, l));
            }

            s && !h.length && (f.teardown && !1 !== f.teardown.call(e, g, v.handle) || d.removeEvent(e, p, v.handle), delete u[p]);
          } else for (p in u) {
            d.event.remove(e, p + t[c], n, i, !0);
          }
        }

        d.isEmptyObject(u) && F.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      e = d.event.fix(e);
      var t,
          n,
          i,
          o,
          s,
          a = [],
          u = r.call(arguments),
          c = (F.get(this, "events") || {})[e.type] || [],
          l = d.event.special[e.type] || {};

      if (u[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
        for (a = d.event.handlers.call(this, e, c), t = 0; (o = a[t++]) && !e.isPropagationStopped();) {
          for (e.currentTarget = o.elem, n = 0; (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();) {
            e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (i = ((d.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
          }
        }

        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          i,
          r,
          o,
          s = [],
          a = t.delegateCount,
          u = e.target;
      if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u !== this; u = u.parentNode || this) {
        if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
          for (i = [], n = 0; a > n; n++) {
            void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? d(r, this).index(u) > -1 : d.find(r, this, null, [u]).length), i[r] && i.push(o);
          }

          i.length && s.push({
            elem: u,
            handlers: i
          });
        }
      }
      return a < t.length && s.push({
        elem: this,
        handlers: t.slice(a)
      }), s;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(e, t) {
        var n,
            r,
            o,
            s = t.button;
        return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || i).documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    fix: function fix(e) {
      if (e[d.expando]) return e;
      var t,
          n,
          r,
          o = e.type,
          s = e,
          a = this.fixHooks[o];

      for (a || (this.fixHooks[o] = a = ne.test(o) ? this.mouseHooks : te.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new d.Event(s), t = r.length; t--;) {
        e[n = r[t]] = s[n];
      }

      return e.target || (e.target = i), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          return this !== se() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === se() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return "checkbox" === this.type && this.click && d.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function _default(e) {
          return d.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, d.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, d.Event = function (e, t) {
    return this instanceof d.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? re : oe) : this.type = e, t && d.extend(this, t), this.timeStamp = e && e.timeStamp || d.now(), void (this[d.expando] = !0)) : new d.Event(e, t);
  }, d.Event.prototype = {
    constructor: d.Event,
    isDefaultPrevented: oe,
    isPropagationStopped: oe,
    isImmediatePropagationStopped: oe,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = re, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = re, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = re, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, d.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    d.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            i = this,
            r = e.relatedTarget,
            o = e.handleObj;
        return r && (r === i || d.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), d.fn.extend({
    on: function on(e, t, n, i) {
      return ae(this, e, t, n, i);
    },
    one: function one(e, t, n, i) {
      return ae(this, e, t, n, i, 1);
    },
    off: function off(e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, d(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

      if ("object" == _typeof(e)) {
        for (r in e) {
          this.off(r, t, e[r]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = oe), this.each(function () {
        d.event.remove(this, e, n, t);
      });
    }
  });
  var ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ce = /<script|<style|<link/i,
      le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fe = /^true\/(.*)/,
      he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function de(e, t) {
    return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }

  function pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function ge(e) {
    var t = fe.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }

  function me(e, t) {
    var n, i, r, o, s, a, u, c;

    if (1 === t.nodeType) {
      if (F.hasData(e) && (o = F.access(e), s = F.set(t, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) {
        for (n = 0, i = c[r].length; i > n; n++) {
          d.event.add(t, r, c[r][n]);
        }
      }
      M.hasData(e) && (a = M.access(e), u = d.extend({}, a), M.set(t, u));
    }
  }

  function ve(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && X.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function ye(e, t, n, i) {
    t = o.apply([], t);
    var r,
        s,
        a,
        u,
        c,
        l,
        h = 0,
        p = e.length,
        g = p - 1,
        m = t[0],
        v = d.isFunction(m);
    if (v || p > 1 && "string" == typeof m && !f.checkClone && le.test(m)) return e.each(function (r) {
      var o = e.eq(r);
      v && (t[0] = m.call(this, r, o.html())), ye(o, t, n, i);
    });

    if (p && (s = (r = ee(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
      for (u = (a = d.map(J(r, "script"), pe)).length; p > h; h++) {
        c = r, h !== g && (c = d.clone(c, !0, !0), u && d.merge(a, J(c, "script"))), n.call(e[h], c, h);
      }

      if (u) for (l = a[a.length - 1].ownerDocument, d.map(a, ge), h = 0; u > h; h++) {
        c = a[h], Y.test(c.type || "") && !F.access(c, "globalEval") && d.contains(l, c) && (c.src ? d._evalUrl && d._evalUrl(c.src) : d.globalEval(c.textContent.replace(he, "")));
      }
    }

    return e;
  }

  function xe(e, t, n) {
    for (var i, r = t ? d.filter(t, e) : e, o = 0; null != (i = r[o]); o++) {
      n || 1 !== i.nodeType || d.cleanData(J(i)), i.parentNode && (n && d.contains(i.ownerDocument, i) && K(J(i, "script")), i.parentNode.removeChild(i));
    }

    return e;
  }

  d.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(ue, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var i,
          r,
          o,
          s,
          a = e.cloneNode(!0),
          u = d.contains(e.ownerDocument, e);
      if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e))) for (s = J(a), i = 0, r = (o = J(e)).length; r > i; i++) {
        ve(o[i], s[i]);
      }
      if (t) if (n) for (o = o || J(e), s = s || J(a), i = 0, r = o.length; r > i; i++) {
        me(o[i], s[i]);
      } else me(e, a);
      return (s = J(a, "script")).length > 0 && K(s, !u && J(e, "script")), a;
    },
    cleanData: function cleanData(e) {
      for (var t, n, i, r = d.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (O(n)) {
          if (t = n[F.expando]) {
            if (t.events) for (i in t.events) {
              r[i] ? d.event.remove(n, i) : d.removeEvent(n, i, t.handle);
            }
            n[F.expando] = void 0;
          }

          n[M.expando] && (n[M.expando] = void 0);
        }
      }
    }
  }), d.fn.extend({
    domManip: ye,
    detach: function detach(e) {
      return xe(this, e, !0);
    },
    remove: function remove(e) {
      return xe(this, e);
    },
    text: function text(e) {
      return q(this, function (e) {
        return void 0 === e ? d.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return ye(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || de(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return ye(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = de(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return ye(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return ye(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (d.cleanData(J(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return d.clone(this, e, t);
      });
    },
    html: function html(e) {
      return q(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !ce.test(e) && !Q[(U.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = d.htmlPrefilter(e);

          try {
            for (; i > n; n++) {
              1 === (t = this[n] || {}).nodeType && (d.cleanData(J(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return ye(this, arguments, function (t) {
        var n = this.parentNode;
        d.inArray(this, e) < 0 && (d.cleanData(J(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), d.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    d.fn[e] = function (e) {
      for (var n, i = [], r = d(e), o = r.length - 1, a = 0; o >= a; a++) {
        n = a === o ? this : this.clone(!0), d(r[a])[t](n), s.apply(i, n.get());
      }

      return this.pushStack(i);
    };
  });
  var be,
      we = {
    HTML: "block",
    BODY: "block"
  };

  function Ce(e, t) {
    var n = d(t.createElement(e)).appendTo(t.body),
        i = d.css(n[0], "display");
    return n.detach(), i;
  }

  function Te(e) {
    var t = i,
        n = we[e];
    return n || ("none" !== (n = Ce(e, t)) && n || ((t = (be = (be || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ce(e, t), be.detach()), we[e] = n), n;
  }

  var Se = /^margin/,
      je = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
      Ee = function Ee(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      De = function De(e, t, n, i) {
    var r,
        o,
        s = {};

    for (o in t) {
      s[o] = e.style[o], e.style[o] = t[o];
    }

    for (o in r = n.apply(e, i || []), t) {
      e.style[o] = s[o];
    }

    return r;
  },
      ke = i.documentElement;

  function Ne(e, t, n) {
    var i,
        r,
        o,
        s,
        a = e.style;
    return "" !== (s = (n = n || Ee(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || d.contains(e.ownerDocument, e) || (s = d.style(e, t)), n && !f.pixelMarginRight() && je.test(s) && Se.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s;
  }

  function Pe(e, t) {
    return {
      get: function get() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      }
    };
  }

  !function () {
    var t,
        n,
        r,
        o,
        s = i.createElement("div"),
        a = i.createElement("div");

    if (a.style) {
      var _u = function _u() {
        a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", ke.appendChild(s);
        var i = e.getComputedStyle(a);
        t = "1%" !== i.top, o = "2px" === i.marginLeft, n = "4px" === i.width, a.style.marginRight = "50%", r = "4px" === i.marginRight, ke.removeChild(s);
      };

      a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), d.extend(f, {
        pixelPosition: function pixelPosition() {
          return _u(), t;
        },
        boxSizingReliable: function boxSizingReliable() {
          return null == n && _u(), n;
        },
        pixelMarginRight: function pixelMarginRight() {
          return null == n && _u(), r;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return null == n && _u(), o;
        },
        reliableMarginRight: function reliableMarginRight() {
          var t,
              n = a.appendChild(i.createElement("div"));
          return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", ke.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), ke.removeChild(s), a.removeChild(n), t;
        }
      });
    }
  }();
  var Ae = /^(none|table(?!-c[ea]).+)/,
      Ie = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Le = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      qe = ["Webkit", "O", "Moz", "ms"],
      Oe = i.createElement("div").style;

  function He(e) {
    if (e in Oe) return e;

    for (var t = e[0].toUpperCase() + e.slice(1), n = qe.length; n--;) {
      if ((e = qe[n] + t) in Oe) return e;
    }
  }

  function Fe(e, t, n) {
    var i = z.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }

  function Me(e, t, n, i, r) {
    for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) {
      "margin" === n && (s += d.css(e, n + V[o], !0, r)), i ? ("content" === n && (s -= d.css(e, "padding" + V[o], !0, r)), "margin" !== n && (s -= d.css(e, "border" + V[o] + "Width", !0, r))) : (s += d.css(e, "padding" + V[o], !0, r), "padding" !== n && (s += d.css(e, "border" + V[o] + "Width", !0, r)));
    }

    return s;
  }

  function Re(e, t, n) {
    var i = !0,
        r = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Ee(e),
        s = "border-box" === d.css(e, "boxSizing", !1, o);

    if (0 >= r || null == r) {
      if ((0 > (r = Ne(e, t, o)) || null == r) && (r = e.style[t]), je.test(r)) return r;
      i = s && (f.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0;
    }

    return r + Me(e, t, n || (s ? "border" : "content"), i, o) + "px";
  }

  function We(e, t) {
    for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) {
      (i = e[s]).style && (o[s] = F.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && _(i) && (o[s] = F.access(i, "olddisplay", Te(i.nodeName)))) : (r = _(i), "none" === n && r || F.set(i, "olddisplay", r ? n : d.css(i, "display"))));
    }

    for (s = 0; a > s; s++) {
      (i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
    }

    return e;
  }

  function Be(e, t, n, i, r) {
    return new Be.prototype.init(e, t, n, i, r);
  }

  d.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Ne(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
            o,
            s,
            a = d.camelCase(t),
            u = e.style;
        return t = d.cssProps[a] || (d.cssProps[a] = He(a) || a), s = d.cssHooks[t] || d.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t] : ("string" === (o = _typeof(n)) && (r = z.exec(n)) && r[1] && (n = G(e, t, r), o = "number"), void (null != n && n == n && ("number" === o && (n += r && r[3] || (d.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u[t] = n))));
      }
    },
    css: function css(e, t, n, i) {
      var r,
          o,
          s,
          a = d.camelCase(t);
      return t = d.cssProps[a] || (d.cssProps[a] = He(a) || a), (s = d.cssHooks[t] || d.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Ne(e, t, i)), "normal" === r && t in Le && (r = Le[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r;
    }
  }), d.each(["height", "width"], function (e, t) {
    d.cssHooks[t] = {
      get: function get(e, n, i) {
        return n ? Ae.test(d.css(e, "display")) && 0 === e.offsetWidth ? De(e, Ie, function () {
          return Re(e, t, i);
        }) : Re(e, t, i) : void 0;
      },
      set: function set(e, n, i) {
        var r,
            o = i && Ee(e),
            s = i && Me(e, t, i, "border-box" === d.css(e, "boxSizing", !1, o), o);
        return s && (r = z.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = d.css(e, t)), Fe(0, n, s);
      }
    };
  }), d.cssHooks.marginLeft = Pe(f.reliableMarginLeft, function (e, t) {
    return t ? (parseFloat(Ne(e, "marginLeft")) || e.getBoundingClientRect().left - De(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), d.cssHooks.marginRight = Pe(f.reliableMarginRight, function (e, t) {
    return t ? De(e, {
      display: "inline-block"
    }, Ne, [e, "marginRight"]) : void 0;
  }), d.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    d.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) {
          r[e + V[i] + t] = o[i] || o[i - 2] || o[0];
        }

        return r;
      }
    }, Se.test(e) || (d.cssHooks[e + t].set = Fe);
  }), d.fn.extend({
    css: function css(e, t) {
      return q(this, function (e, t, n) {
        var i,
            r,
            o = {},
            s = 0;

        if (d.isArray(t)) {
          for (i = Ee(e), r = t.length; r > s; s++) {
            o[t[s]] = d.css(e, t[s], !1, i);
          }

          return o;
        }

        return void 0 !== n ? d.style(e, t, n) : d.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function show() {
      return We(this, !0);
    },
    hide: function hide() {
      return We(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        _(this) ? d(this).show() : d(this).hide();
      });
    }
  }), d.Tween = Be, Be.prototype = {
    constructor: Be,
    init: function init(e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || d.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (d.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = Be.propHooks[this.prop];
      return e && e.get ? e.get(this) : Be.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = Be.propHooks[this.prop];
      return this.options.duration ? this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Be.propHooks._default.set(this), this;
    }
  }, Be.prototype.init.prototype = Be.prototype, Be.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = d.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        d.fx.step[e.prop] ? d.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[d.cssProps[e.prop]] && !d.cssHooks[e.prop] ? e.elem[e.prop] = e.now : d.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, Be.propHooks.scrollTop = Be.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, d.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, d.fx = Be.prototype.init, d.fx.step = {};
  var $e,
      ze,
      Ve = /^(?:toggle|show|hide)$/,
      _e = /queueHooks$/;

  function Ge() {
    return e.setTimeout(function () {
      $e = void 0;
    }), $e = d.now();
  }

  function Xe(e, t) {
    var n,
        i = 0,
        r = {
      height: e
    };

    for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
      r["margin" + (n = V[i])] = r["padding" + n] = e;
    }

    return t && (r.opacity = r.width = e), r;
  }

  function Ue(e, t, n) {
    for (var i, r = (Ye.tweeners[t] || []).concat(Ye.tweeners["*"]), o = 0, s = r.length; s > o; o++) {
      if (i = r[o].call(n, t, e)) return i;
    }
  }

  function Ye(e, t, n) {
    var i,
        r,
        o = 0,
        s = Ye.prefilters.length,
        a = d.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (r) return !1;

      for (var t = $e || Ge(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; s > o; o++) {
        c.tweens[o].run(i);
      }

      return a.notifyWith(e, [c, i, n]), 1 > i && s ? n : (a.resolveWith(e, [c]), !1);
    },
        c = a.promise({
      elem: e,
      props: d.extend({}, t),
      opts: d.extend(!0, {
        specialEasing: {},
        easing: d.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: $e || Ge(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var i = d.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(i), i;
      },
      stop: function stop(t) {
        var n = 0,
            i = t ? c.tweens.length : 0;
        if (r) return this;

        for (r = !0; i > n; n++) {
          c.tweens[n].run(1);
        }

        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      }
    }),
        l = c.props;

    for (function (e, t) {
      var n, i, r, o, s;

      for (n in e) {
        if (r = t[i = d.camelCase(n)], o = e[n], d.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = d.cssHooks[i]) && ("expand" in s)) for (n in o = s.expand(o), delete e[i], o) {
          (n in e) || (e[n] = o[n], t[n] = r);
        } else t[i] = r;
      }
    }(l, c.opts.specialEasing); s > o; o++) {
      if (i = Ye.prefilters[o].call(c, e, l, c.opts)) return d.isFunction(i.stop) && (d._queueHooks(c.elem, c.opts.queue).stop = d.proxy(i.stop, i)), i;
    }

    return d.map(l, Ue, c), d.isFunction(c.opts.start) && c.opts.start.call(e, c), d.fx.timer(d.extend(u, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
  }

  d.Animation = d.extend(Ye, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return G(n.elem, e, z.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      d.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(I);

      for (var n, i = 0, r = e.length; r > i; i++) {
        n = e[i], Ye.tweeners[n] = Ye.tweeners[n] || [], Ye.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          u,
          c,
          l = this,
          f = {},
          h = e.style,
          p = e.nodeType && _(e),
          g = F.get(e, "fxshow");

      for (i in n.queue || (null == (a = d._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
        a.unqueued || u();
      }), a.unqueued++, l.always(function () {
        l.always(function () {
          a.unqueued--, d.queue(e, "fx").length || a.empty.fire();
        });
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = d.css(e, "display")) ? F.get(e, "olddisplay") || Te(e.nodeName) : c) && "none" === d.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", l.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), t) {
        if (r = t[i], Ve.exec(r)) {
          if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
            if ("show" !== r || !g || void 0 === g[i]) continue;
            p = !0;
          }

          f[i] = g && g[i] || d.style(e, i);
        } else c = void 0;
      }

      if (d.isEmptyObject(f)) "inline" === ("none" === c ? Te(e.nodeName) : c) && (h.display = c);else for (i in g ? "hidden" in g && (p = g.hidden) : g = F.access(e, "fxshow", {}), o && (g.hidden = !p), p ? d(e).show() : l.done(function () {
        d(e).hide();
      }), l.done(function () {
        var t;

        for (t in F.remove(e, "fxshow"), f) {
          d.style(e, t, f[t]);
        }
      }), f) {
        s = Ue(p ? g[i] : 0, i, l), i in g || (g[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? Ye.prefilters.unshift(e) : Ye.prefilters.push(e);
    }
  }), d.speed = function (e, t, n) {
    var i = e && "object" == _typeof(e) ? d.extend({}, e) : {
      complete: n || !n && t || d.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !d.isFunction(t) && t
    };
    return i.duration = d.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in d.fx.speeds ? d.fx.speeds[i.duration] : d.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      d.isFunction(i.old) && i.old.call(this), i.queue && d.dequeue(this, i.queue);
    }, i;
  }, d.fn.extend({
    fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(_).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, i);
    },
    animate: function animate(e, t, n, i) {
      var r = d.isEmptyObject(e),
          o = d.speed(t, n, i),
          s = function s() {
        var t = Ye(this, d.extend({}, e), o);
        (r || F.get(this, "finish")) && t.stop(!0);
      };

      return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
    },
    stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            r = null != e && e + "queueHooks",
            o = d.timers,
            s = F.get(this);
        if (r) s[r] && s[r].stop && i(s[r]);else for (r in s) {
          s[r] && s[r].stop && _e.test(r) && i(s[r]);
        }

        for (r = o.length; r--;) {
          o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
        }

        !t && n || d.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = F.get(this),
            i = n[e + "queue"],
            r = n[e + "queueHooks"],
            o = d.timers,
            s = i ? i.length : 0;

        for (n.finish = !0, d.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; s > t; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), d.each(["toggle", "show", "hide"], function (e, t) {
    var n = d.fn[t];

    d.fn[t] = function (e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Xe(t, !0), e, i, r);
    };
  }), d.each({
    slideDown: Xe("show"),
    slideUp: Xe("hide"),
    slideToggle: Xe("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    d.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), d.timers = [], d.fx.tick = function () {
    var e,
        t = 0,
        n = d.timers;

    for ($e = d.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || d.fx.stop(), $e = void 0;
  }, d.fx.timer = function (e) {
    d.timers.push(e), e() ? d.fx.start() : d.timers.pop();
  }, d.fx.interval = 13, d.fx.start = function () {
    ze || (ze = e.setInterval(d.fx.tick, d.fx.interval));
  }, d.fx.stop = function () {
    e.clearInterval(ze), ze = null;
  }, d.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, d.fn.delay = function (t, n) {
    return t = d.fx && d.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
      var r = e.setTimeout(n, t);

      i.stop = function () {
        e.clearTimeout(r);
      };
    });
  }, function () {
    var e = i.createElement("input"),
        t = i.createElement("select"),
        n = t.appendChild(i.createElement("option"));
    e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = n.selected, t.disabled = !0, f.optDisabled = !n.disabled, (e = i.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value;
  }();
  var Qe,
      Je = d.expr.attrHandle;
  d.fn.extend({
    attr: function attr(e, t) {
      return q(this, d.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        d.removeAttr(this, e);
      });
    }
  }), d.extend({
    attr: function attr(e, t, n) {
      var i,
          r,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? d.prop(e, t, n) : (1 === o && d.isXMLDoc(e) || (t = t.toLowerCase(), r = d.attrHooks[t] || (d.expr.match.bool.test(t) ? Qe : void 0)), void 0 !== n ? null === n ? void d.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = d.find.attr(e, t)) ? void 0 : i);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!f.radioValue && "radio" === t && d.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          i,
          r = 0,
          o = t && t.match(I);
      if (o && 1 === e.nodeType) for (; n = o[r++];) {
        i = d.propFix[n] || n, d.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n);
      }
    }
  }), Qe = {
    set: function set(e, t, n) {
      return !1 === t ? d.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, d.each(d.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = Je[t] || d.find.attr;

    Je[t] = function (e, t, i) {
      var r, o;
      return i || (o = Je[t], Je[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Je[t] = o), r;
    };
  });
  var Ke = /^(?:input|select|textarea|button)$/i,
      Ze = /^(?:a|area)$/i;
  d.fn.extend({
    prop: function prop(e, t) {
      return q(this, d.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[d.propFix[e] || e];
      });
    }
  }), d.extend({
    prop: function prop(e, t, n) {
      var i,
          r,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && d.isXMLDoc(e) || (t = d.propFix[t] || t, r = d.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = d.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Ke.test(e.nodeName) || Ze.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), f.optSelected || (d.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    d.propFix[this.toLowerCase()] = this;
  });
  var et = /[\t\r\n\f]/g;

  function tt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  d.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          u = 0;
      if (d.isFunction(e)) return this.each(function (t) {
        d(this).addClass(e.call(this, t, tt(this)));
      });
      if ("string" == typeof e && e) for (t = e.match(I) || []; n = this[u++];) {
        if (r = tt(n), i = 1 === n.nodeType && (" " + r + " ").replace(et, " ")) {
          for (s = 0; o = t[s++];) {
            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
          }

          r !== (a = d.trim(i)) && n.setAttribute("class", a);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          u = 0;
      if (d.isFunction(e)) return this.each(function (t) {
        d(this).removeClass(e.call(this, t, tt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e) for (t = e.match(I) || []; n = this[u++];) {
        if (r = tt(n), i = 1 === n.nodeType && (" " + r + " ").replace(et, " ")) {
          for (s = 0; o = t[s++];) {
            for (; i.indexOf(" " + o + " ") > -1;) {
              i = i.replace(" " + o + " ", " ");
            }
          }

          r !== (a = d.trim(i)) && n.setAttribute("class", a);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e);

      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : d.isFunction(e) ? this.each(function (n) {
        d(this).toggleClass(e.call(this, n, tt(this), t), t);
      }) : this.each(function () {
        var t, i, r, o;
        if ("string" === n) for (i = 0, r = d(this), o = e.match(I) || []; t = o[i++];) {
          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = tt(this)) && F.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : F.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;

      for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + tt(n) + " ").replace(et, " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  });
  var nt = /\r/g,
      it = /[\x20\t\r\n\f]+/g;
  d.fn.extend({
    val: function val(e) {
      var t,
          n,
          i,
          r = this[0];
      return arguments.length ? (i = d.isFunction(e), this.each(function (n) {
        var r;
        1 === this.nodeType && (null == (r = i ? e.call(this, n, d(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : d.isArray(r) && (r = d.map(r, function (e) {
          return null == e ? "" : e + "";
        })), (t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
      })) : r ? (t = d.valHooks[r.type] || d.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(nt, "") : null == n ? "" : n : void 0;
    }
  }), d.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = d.find.attr(e, "value");
          return null != t ? t : d.trim(d.text(e)).replace(it, " ");
        }
      },
      select: {
        get: function get(e) {
          for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++) {
            if (((n = i[u]).selected || u === r) && (f.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
              if (t = d(n).val(), o) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          for (var n, i, r = e.options, o = d.makeArray(t), s = r.length; s--;) {
            ((i = r[s]).selected = d.inArray(d.valHooks.option.get(i), o) > -1) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), d.each(["radio", "checkbox"], function () {
    d.valHooks[this] = {
      set: function set(e, t) {
        return d.isArray(t) ? e.checked = d.inArray(d(e).val(), t) > -1 : void 0;
      }
    }, f.checkOn || (d.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var rt = /^(?:focusinfocus|focusoutblur)$/;
  d.extend(d.event, {
    trigger: function trigger(t, n, r, o) {
      var s,
          a,
          u,
          c,
          f,
          h,
          p,
          g = [r || i],
          m = l.call(t, "type") ? t.type : t,
          v = l.call(t, "namespace") ? t.namespace.split(".") : [];

      if (a = u = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !rt.test(m + d.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), f = m.indexOf(":") < 0 && "on" + m, (t = t[d.expando] ? t : new d.Event(m, "object" == _typeof(t) && t)).isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : d.makeArray(n, [t]), p = d.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, n))) {
        if (!o && !p.noBubble && !d.isWindow(r)) {
          for (c = p.delegateType || m, rt.test(c + m) || (a = a.parentNode); a; a = a.parentNode) {
            g.push(a), u = a;
          }

          u === (r.ownerDocument || i) && g.push(u.defaultView || u.parentWindow || e);
        }

        for (s = 0; (a = g[s++]) && !t.isPropagationStopped();) {
          t.type = s > 1 ? c : p.bindType || m, (h = (F.get(a, "events") || {})[t.type] && F.get(a, "handle")) && h.apply(a, n), (h = f && a[f]) && h.apply && O(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
        }

        return t.type = m, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), n) || !O(r) || f && d.isFunction(r[m]) && !d.isWindow(r) && ((u = r[f]) && (r[f] = null), d.event.triggered = m, r[m](), d.event.triggered = void 0, u && (r[f] = u)), t.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var i = d.extend(new d.Event(), n, {
        type: e,
        isSimulated: !0
      });
      d.event.trigger(i, null, t);
    }
  }), d.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        d.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      return n ? d.event.trigger(e, t, n, !0) : void 0;
    }
  }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    d.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), d.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), f.focusin = "onfocusin" in e, f.focusin || d.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      d.event.simulate(t, e.target, d.event.fix(e));
    };

    d.event.special[t] = {
      setup: function setup() {
        var i = this.ownerDocument || this,
            r = F.access(i, t);
        r || i.addEventListener(e, n, !0), F.access(i, t, (r || 0) + 1);
      },
      teardown: function teardown() {
        var i = this.ownerDocument || this,
            r = F.access(i, t) - 1;
        r ? F.access(i, t, r) : (i.removeEventListener(e, n, !0), F.remove(i, t));
      }
    };
  });
  var ot = e.location,
      st = d.now(),
      at = /\?/;
  d.parseJSON = function (e) {
    return JSON.parse(e + "");
  }, d.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + t), n;
  };
  var ut = /#.*$/,
      ct = /([?&])_=[^&]*/,
      lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ft = /^(?:GET|HEAD)$/,
      ht = /^\/\//,
      dt = {},
      pt = {},
      gt = "*/".concat("*"),
      mt = i.createElement("a");

  function vt(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i,
          r = 0,
          o = t.toLowerCase().match(I) || [];
      if (d.isFunction(n)) for (; i = o[r++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }

  function yt(e, t, n, i) {
    var r = {},
        o = e === pt;

    function s(a) {
      var u;
      return r[a] = !0, d.each(e[a] || [], function (e, a) {
        var c = a(t, n, i);
        return "string" != typeof c || o || r[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
      }), u;
    }

    return s(t.dataTypes[0]) || !r["*"] && s("*");
  }

  function xt(e, t) {
    var n,
        i,
        r = d.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    }

    return i && d.extend(!0, e, i), e;
  }

  mt.href = ot.href, d.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ot.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ot.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": gt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": d.parseJSON,
        "text xml": d.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? xt(xt(e, d.ajaxSettings), t) : xt(d.ajaxSettings, e);
    },
    ajaxPrefilter: vt(dt),
    ajaxTransport: vt(pt),
    ajax: function ajax(t, n) {
      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var r,
          o,
          s,
          a,
          u,
          c,
          l,
          f,
          h = d.ajaxSetup({}, n),
          p = h.context || h,
          g = h.context && (p.nodeType || p.jquery) ? d(p) : d.event,
          m = d.Deferred(),
          v = d.Callbacks("once memory"),
          y = h.statusCode || {},
          x = {},
          b = {},
          w = 0,
          C = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (2 === w) {
            if (!a) for (a = {}; t = lt.exec(s);) {
              a[t[1].toLowerCase()] = t[2];
            }
            t = a[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === w ? s : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();
          return w || (e = b[n] = b[n] || e, x[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return w || (h.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (2 > w) for (t in e) {
            y[t] = [y[t], e[t]];
          } else T.always(e[T.status]);
          return this;
        },
        abort: function abort(e) {
          var t = e || C;
          return r && r.abort(t), S(0, t), this;
        }
      };

      if (m.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, h.url = ((t || h.url || ot.href) + "").replace(ut, "").replace(ht, ot.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = d.trim(h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
        c = i.createElement("a");

        try {
          c.href = h.url, c.href = c.href, h.crossDomain = mt.protocol + "//" + mt.host != c.protocol + "//" + c.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = d.param(h.data, h.traditional)), yt(dt, h, n, T), 2 === w) return T;

      for (f in (l = d.event && h.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ft.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (at.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = ct.test(o) ? o.replace(ct, "$1_=" + st++) : o + (at.test(o) ? "&" : "?") + "_=" + st++)), h.ifModified && (d.lastModified[o] && T.setRequestHeader("If-Modified-Since", d.lastModified[o]), d.etag[o] && T.setRequestHeader("If-None-Match", d.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + gt + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
        T.setRequestHeader(f, h.headers[f]);
      }

      if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || 2 === w)) return T.abort();

      for (f in C = "abort", {
        success: 1,
        error: 1,
        complete: 1
      }) {
        T[f](h[f]);
      }

      if (r = yt(pt, h, n, T)) {
        if (T.readyState = 1, l && g.trigger("ajaxSend", [T, h]), 2 === w) return T;
        h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          T.abort("timeout");
        }, h.timeout));

        try {
          w = 1, r.send(x, S);
        } catch (e) {
          if (!(2 > w)) throw e;
          S(-1, e);
        }
      } else S(-1, "No Transport");

      function S(t, n, i, a) {
        var c,
            f,
            x,
            b,
            C,
            S = n;
        2 !== w && (w = 2, u && e.clearTimeout(u), r = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (b = function (e, t, n) {
          for (var i, r, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) {
            u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (i) for (r in a) {
            if (a[r] && a[r].test(i)) {
              u.unshift(r);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (r in n) {
              if (!u[0] || e.converters[r + " " + u[0]]) {
                o = r;
                break;
              }

              s || (s = r);
            }

            o = o || s;
          }
          return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
        }(h, T, i)), b = function (e, t, n, i) {
          var r,
              o,
              s,
              a,
              u,
              c = {},
              l = e.dataTypes.slice();
          if (l[1]) for (s in e.converters) {
            c[s.toLowerCase()] = e.converters[s];
          }

          for (o = l.shift(); o;) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(s = c[u + " " + o] || c["* " + o])) for (r in c) {
                if ((a = r.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                  !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], l.unshift(a[1]));
                  break;
                }
              }
              if (!0 !== s) if (s && e["throws"]) t = s(t);else try {
                t = s(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: s ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(h, b, T, c), c ? (h.ifModified && ((C = T.getResponseHeader("Last-Modified")) && (d.lastModified[o] = C), (C = T.getResponseHeader("etag")) && (d.etag[o] = C)), 204 === t || "HEAD" === h.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = b.state, f = b.data, c = !(x = b.error))) : (x = S, !t && S || (S = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || S) + "", c ? m.resolveWith(p, [f, S, T]) : m.rejectWith(p, [T, S, x]), T.statusCode(y), y = void 0, l && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? f : x]), v.fireWith(p, [T, S]), l && (g.trigger("ajaxComplete", [T, h]), --d.active || d.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return d.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return d.get(e, void 0, t, "script");
    }
  }), d.each(["get", "post"], function (e, t) {
    d[t] = function (e, n, i, r) {
      return d.isFunction(n) && (r = r || i, i = n, n = void 0), d.ajax(d.extend({
        url: e,
        type: t,
        dataType: r,
        data: n,
        success: i
      }, d.isPlainObject(e) && e));
    };
  }), d._evalUrl = function (e) {
    return d.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  }, d.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return d.isFunction(e) ? this.each(function (t) {
        d(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = d(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this);
    },
    wrapInner: function wrapInner(e) {
      return d.isFunction(e) ? this.each(function (t) {
        d(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = d(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = d.isFunction(e);
      return this.each(function (n) {
        d(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        d.nodeName(this, "body") || d(this).replaceWith(this.childNodes);
      }).end();
    }
  }), d.expr.filters.hidden = function (e) {
    return !d.expr.filters.visible(e);
  }, d.expr.filters.visible = function (e) {
    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
  };
  var bt = /%20/g,
      wt = /\[\]$/,
      Ct = /\r?\n/g,
      Tt = /^(?:submit|button|image|reset|file)$/i,
      St = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, i) {
    var r;
    if (d.isArray(t)) d.each(t, function (t, r) {
      n || wt.test(e) ? i(e, r) : jt(e + "[" + ("object" == _typeof(r) && null != r ? t : "") + "]", r, n, i);
    });else if (n || "object" !== d.type(t)) i(e, t);else for (r in t) {
      jt(e + "[" + r + "]", t[r], n, i);
    }
  }

  d.param = function (e, t) {
    var n,
        i = [],
        r = function r(e, t) {
      t = d.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };

    if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, function () {
      r(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, r);
    }
    return i.join("&").replace(bt, "+");
  }, d.fn.extend({
    serialize: function serialize() {
      return d.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = d.prop(this, "elements");
        return e ? d.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !d(this).is(":disabled") && St.test(this.nodeName) && !Tt.test(e) && (this.checked || !X.test(e));
      }).map(function (e, t) {
        var n = d(this).val();
        return null == n ? null : d.isArray(n) ? d.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Ct, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Ct, "\r\n")
        };
      }).get();
    }
  }), d.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };
  var Et = {
    0: 200,
    1223: 204
  },
      Dt = d.ajaxSettings.xhr();
  f.cors = !!Dt && "withCredentials" in Dt, f.ajax = Dt = !!Dt, d.ajaxTransport(function (t) {
    var _n, i;

    return f.cors || Dt && !t.crossDomain ? {
      send: function send(r, o) {
        var s,
            a = t.xhr();
        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }

        for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) {
          a.setRequestHeader(s, r[s]);
        }

        _n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Et[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
              binary: a.response
            } : {
              text: a.responseText
            }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n(), i = a.onerror = _n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");

        try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      },
      abort: function abort() {
        _n && _n();
      }
    } : void 0;
  }), d.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return d.globalEval(e), e;
      }
    }
  }), d.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), d.ajaxTransport("script", function (e) {
    var t, _n2;

    if (e.crossDomain) return {
      send: function send(r, o) {
        t = d("<script>").prop({
          charset: e.scriptCharset,
          src: e.url
        }).on("load error", _n2 = function n(e) {
          t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
        }), i.head.appendChild(t[0]);
      },
      abort: function abort() {
        _n2 && _n2();
      }
    };
  });
  var kt = [],
      Nt = /(=)\?(?=&|$)|\?\?/;
  d.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = kt.pop() || d.expando + "_" + st++;
      return this[e] = !0, e;
    }
  }), d.ajaxPrefilter("json jsonp", function (t, n, i) {
    var r,
        o,
        s,
        a = !1 !== t.jsonp && (Nt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
    return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Nt, "$1" + r) : !1 !== t.jsonp && (t.url += (at.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
      return s || d.error(r + " was not called"), s[0];
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === o ? d(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, kt.push(r)), s && d.isFunction(o) && o(s[0]), s = o = void 0;
    }), "script") : void 0;
  }), d.parseHTML = function (e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || i;
    var r = T.exec(e),
        o = !n && [];
    return r ? [t.createElement(r[1])] : (r = ee([e], t, o), o && o.length && d(o).remove(), d.merge([], r.childNodes));
  };
  var Pt = d.fn.load;

  function At(e) {
    return d.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }

  d.fn.load = function (e, t, n) {
    if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
    var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");
    return a > -1 && (i = d.trim(e.slice(a)), e = e.slice(0, a)), d.isFunction(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (r = "POST"), s.length > 0 && d.ajax({
      url: e,
      type: r || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, s.html(i ? d("<div>").append(d.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    d.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), d.expr.filters.animated = function (e) {
    return d.grep(d.timers, function (t) {
      return e === t.elem;
    }).length;
  }, d.offset = {
    setOffset: function setOffset(e, t, n) {
      var i,
          r,
          o,
          s,
          a,
          u,
          c = d.css(e, "position"),
          l = d(e),
          f = {};
      "static" === c && (e.style.position = "relative"), a = l.offset(), o = d.css(e, "top"), u = d.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (s = (i = l.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), d.isFunction(t) && (t = t.call(e, n, d.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : l.css(f);
    }
  }, d.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        d.offset.setOffset(this, e, t);
      });
      var t,
          n,
          i = this[0],
          r = {
        top: 0,
        left: 0
      },
          o = i && i.ownerDocument;
      return o ? (t = o.documentElement, d.contains(t, i) ? (r = i.getBoundingClientRect(), n = At(o), {
        top: r.top + n.pageYOffset - t.clientTop,
        left: r.left + n.pageXOffset - t.clientLeft
      }) : r) : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            i = {
          top: 0,
          left: 0
        };
        return "fixed" === d.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), d.nodeName(e[0], "html") || (i = e.offset()), i.top += d.css(e[0], "borderTopWidth", !0), i.left += d.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - i.top - d.css(n, "marginTop", !0),
          left: t.left - i.left - d.css(n, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === d.css(e, "position");) {
          e = e.offsetParent;
        }

        return e || ke;
      });
    }
  }), d.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    d.fn[e] = function (i) {
      return q(this, function (e, i, r) {
        var o = At(e);
        return void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r);
      }, e, i, arguments.length);
    };
  }), d.each(["top", "left"], function (e, t) {
    d.cssHooks[t] = Pe(f.pixelPosition, function (e, n) {
      return n ? (n = Ne(e, t), je.test(n) ? d(e).position()[t] + "px" : n) : void 0;
    });
  }), d.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    d.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, i) {
      d.fn[i] = function (i, r) {
        var o = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === r ? "margin" : "border");
        return q(this, function (t, n, i) {
          var r;
          return d.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? d.css(t, n, s) : d.style(t, n, i, s);
        }, t, o ? i : void 0, o, null);
      };
    });
  }), d.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    size: function size() {
      return this.length;
    }
  }), d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return d;
  });
  var It = e.jQuery,
      Lt = e.$;
  return d.noConflict = function (t) {
    return e.$ === d && (e.$ = Lt), t && e.jQuery === d && (e.jQuery = It), d;
  }, t || (e.jQuery = e.$ = d), d;
}), function e(t, n, i) {
  function r(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var u = "function" == typeof require && require;
        if (!a && u) return u(s, !0);
        if (o) return o(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      var l = n[s] = {
        exports: {}
      };
      t[s][0].call(l.exports, function (e) {
        var n = t[s][1][e];
        return r(n || e);
      }, l, l.exports, e, t, n, i);
    }

    return n[s].exports;
  }

  for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) {
    r(i[s]);
  }

  return r;
}({
  1: [function (e, t, n) {
    "use strict";

    function i(e) {
      this.getElement(e.element), this.x1 = 0, this.y1 = 0, this.name = e.name || !1, this.elToSetClassOn = e.elToSetClassOn || "body", this.direction = e.direction || "diagonal", this.customDirection = e.customDirection || {}, this.validateInput("direction"), this.isPausedWhenNotInView = e.isPausedWhenNotInView || !1, this.states = e.states, this.stateTransitionSpeed = e.stateTransitionSpeed || 1e3, this.previousTimeStamp = null, this.progress = 0, this.isPaused = !1, this.isCleared = !1, this.isPausedBecauseNotInView = !1, this.context = this.canvas.getContext("2d"), this.channels = {}, this.channelsIndex = 0, this.activeState = e.defaultStateName || "default-state", this.isChangingState = !1, this.currentColors = [], this.currentColorsPos = [], this.activetransitionSpeed = null, this.eventPolyfill(), this.scrollDebounceThreshold = e.scrollDebounceThreshold || 300, this.scrollDebounceTimeout = null, this.isImgLoaded = !1, this.isCanvasInWindowView = !1, this.firstScrollInit = !0, this.animating = !1, this.gradientLength = this.states[this.activeState].gradients[0].length, e.image && e.image.source && (this.image = {
        source: e.image.source,
        position: e.image.position || ["center", "center"],
        stretchMode: e.image.stretchMode || !1,
        blendingMode: e.image.blendingMode || !1
      }), this.events = {
        start: new CustomEvent("granim:start"),
        end: new CustomEvent("granim:end"),
        gradientChange: function gradientChange(e) {
          return new CustomEvent("granim:gradientChange", {
            detail: {
              isLooping: e.isLooping,
              colorsFrom: e.colorsFrom,
              colorsTo: e.colorsTo,
              activeState: e.activeState
            },
            bubbles: !1,
            cancelable: !1
          });
        }
      }, this.callbacks = {
        onStart: "function" == typeof e.onStart && e.onStart,
        onGradientChange: "function" == typeof e.onGradientChange && e.onGradientChange,
        onEnd: "function" == typeof e.onEnd && e.onEnd
      }, this.getDimensions(), this.canvas.setAttribute("width", this.x1), this.canvas.setAttribute("height", this.y1), this.setColors(), this.image && (this.validateInput("image"), this.prepareImage()), this.pauseWhenNotInViewNameSpace = this.pauseWhenNotInView.bind(this), this.setSizeAttributesNameSpace = this.setSizeAttributes.bind(this), this.onResize(), this.isPausedWhenNotInView ? this.onScroll() : this.image || (this.refreshColorsAndPos(), this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.animating = !0), this.callbacks.onStart && this.callbacks.onStart(), this.canvas.dispatchEvent(this.events.start);
    }

    i.prototype.animateColors = e("./animateColors.js"), i.prototype.changeBlendingMode = e("./changeBlendingMode.js"), i.prototype.changeDirection = e("./changeDirection.js"), i.prototype.changeState = e("./changeState.js"), i.prototype.clear = e("./clear.js"), i.prototype.convertColorToRgba = e("./convertColorToRgba.js"), i.prototype.destroy = e("./destroy.js"), i.prototype.eventPolyfill = e("./eventPolyfill.js"), i.prototype.getColor = e("./getColor.js"), i.prototype.getColorDiff = e("./getColorDiff.js"), i.prototype.getColorPos = e("./getColorPos.js"), i.prototype.getColorPosDiff = e("./getColorPosDiff.js"), i.prototype.getCurrentColors = e("./getCurrentColors.js"), i.prototype.getCurrentColorsPos = e("./getCurrentColorsPos.js"), i.prototype.getDimensions = e("./getDimensions.js"), i.prototype.getElement = e("./getElement.js"), i.prototype.getLightness = e("./getLightness.js"), i.prototype.makeGradient = e("./makeGradient.js"), i.prototype.onResize = e("./onResize.js"), i.prototype.onScroll = e("./onScroll.js"), i.prototype.pause = e("./pause.js"), i.prototype.pauseWhenNotInView = e("./pauseWhenNotInView.js"), i.prototype.play = e("./play.js"), i.prototype.prepareImage = e("./prepareImage.js"), i.prototype.refreshColorsAndPos = e("./refreshColorsAndPos.js"), i.prototype.setColors = e("./setColors.js"), i.prototype.setDirection = e("./setDirection.js"), i.prototype.setSizeAttributes = e("./setSizeAttributes.js"), i.prototype.triggerError = e("./triggerError.js"), i.prototype.validateInput = e("./validateInput.js"), t.exports = i;
  }, {
    "./animateColors.js": 2,
    "./changeBlendingMode.js": 3,
    "./changeDirection.js": 4,
    "./changeState.js": 5,
    "./clear.js": 6,
    "./convertColorToRgba.js": 7,
    "./destroy.js": 8,
    "./eventPolyfill.js": 9,
    "./getColor.js": 10,
    "./getColorDiff.js": 11,
    "./getColorPos.js": 12,
    "./getColorPosDiff.js": 13,
    "./getCurrentColors.js": 14,
    "./getCurrentColorsPos.js": 15,
    "./getDimensions.js": 16,
    "./getElement.js": 17,
    "./getLightness.js": 18,
    "./makeGradient.js": 19,
    "./onResize.js": 20,
    "./onScroll.js": 21,
    "./pause.js": 22,
    "./pauseWhenNotInView.js": 23,
    "./play.js": 24,
    "./prepareImage.js": 25,
    "./refreshColorsAndPos.js": 26,
    "./setColors.js": 27,
    "./setDirection.js": 28,
    "./setSizeAttributes.js": 29,
    "./triggerError.js": 30,
    "./validateInput.js": 31
  }],
  2: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      var t,
          n,
          i,
          r = e - this.previousTimeStamp > 100,
          o = void 0 === this.states[this.activeState].loop || this.states[this.activeState].loop;
      (null === this.previousTimeStamp || r) && (this.previousTimeStamp = e), this.progress = this.progress + (e - this.previousTimeStamp), t = (this.progress / this.activetransitionSpeed * 100).toFixed(2), this.previousTimeStamp = e, this.refreshColorsAndPos(t), t < 100 ? this.animation = requestAnimationFrame(this.animateColors.bind(this)) : this.channelsIndex < this.states[this.activeState].gradients.length - 2 || o ? (this.isChangingState && (this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3, this.isChangingState = !1), this.previousTimeStamp = null, this.progress = 0, this.channelsIndex++, n = !1, this.channelsIndex === this.states[this.activeState].gradients.length - 1 ? n = !0 : this.channelsIndex === this.states[this.activeState].gradients.length && (this.channelsIndex = 0), i = void 0 === this.states[this.activeState].gradients[this.channelsIndex + 1] ? this.states[this.activeState].gradients[0] : this.states[this.activeState].gradients[this.channelsIndex + 1], this.setColors(), this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.callbacks.onGradientChange && this.callbacks.onGradientChange({
        isLooping: n,
        colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
        colorsTo: i,
        activeState: this.activeState
      }), this.canvas.dispatchEvent(this.events.gradientChange({
        isLooping: n,
        colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
        colorsTo: i,
        activeState: this.activeState
      }))) : (cancelAnimationFrame(this.animation), this.callbacks.onEnd && this.callbacks.onEnd(), this.canvas.dispatchEvent(new CustomEvent("granim:end")));
    };
  }, {}],
  3: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      this.context.clearRect(0, 0, this.x1, this.y1), this.context.globalCompositeOperation = this.image.blendingMode = e, this.validateInput("blendingMode"), this.isPaused && this.refreshColorsAndPos();
    };
  }, {}],
  4: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      this.context.clearRect(0, 0, this.x1, this.y1), this.direction = e, this.validateInput("direction"), this.isPaused && this.refreshColorsAndPos();
    };
  }, {}],
  5: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      var t = this;
      this.activeState !== e && (this.isPaused || (this.isPaused = !0, this.pause()), this.channelsIndex = -1, this.activetransitionSpeed = this.stateTransitionSpeed, this.activeColorsDiff = [], this.activeColorsPosDiff = [], this.activeColors = this.getCurrentColors(), this.activeColorsPos = this.getCurrentColorsPos(), this.progress = 0, this.previousTimeStamp = null, this.isChangingState = !0, this.states[e].gradients[0].forEach(function (e, n, i) {
        var r = t.convertColorToRgba(t.getColor(e)),
            o = t.getColorPos(e, n),
            s = t.getColorDiff(t.activeColors[n], r),
            a = t.getColorPosDiff(t.activeColorsPos[n], o);
        t.activeColorsDiff.push(s), t.activeColorsPosDiff.push(a);
      }), this.activeState = e, this.play());
    };
  }, {}],
  6: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      this.isPaused ? this.isPaused = !1 : cancelAnimationFrame(this.animation), this.isCleared = !0, this.context.clearRect(0, 0, this.x1, this.y1);
    };
  }, {}],
  7: [function (e, t, n) {
    "use strict";

    function i(e, t, n) {
      return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
    }

    function r(e, t, n, r) {
      var o, s, a, u, c;
      return 0 === t ? o = s = a = n : (o = i(c = 2 * n - (u = n < .5 ? n * (1 + t) : n + t - n * t), u, e + 1 / 3), s = i(c, u, e), a = i(c, u, e - 1 / 3)), [Math.round(255 * o), Math.round(255 * s), Math.round(255 * a), r];
    }

    var o,
        s = {
      hexa: /^#(?:[0-9a-fA-F]{3}){1,2}$/,
      rgba: /^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(.?\d{1,3})\)$/,
      rgb: /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/,
      hsla: /^hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?(.?\d{1,3})\)$/,
      hsl: /^hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)$/
    };

    t.exports = function (e) {
      switch (function (e) {
        for (var t = Object.keys(s), n = 0; n < t.length; n++) {
          if (o = s[t[n]].exec(e)) return t[n];
        }

        return !1;
      }(e)) {
        default:
          this.triggerError("colorType");

        case "hexa":
          return function (e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
              return t + t + n + n + i + i;
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 1] : null;
          }(e);

        case "rgba":
          return [parseInt(o[1], 10), parseInt(o[2], 10), parseInt(o[3], 10), parseFloat(o[4])];

        case "rgb":
          return [parseInt(o[1], 10), parseInt(o[2], 10), parseInt(o[3], 10), 1];

        case "hsla":
          return r(parseInt(o[1], 10) / 360, parseInt(o[2], 10) / 100, parseInt(o[3], 10) / 100, parseFloat(o[4]));

        case "hsl":
          return r(parseInt(o[1], 10) / 360, parseInt(o[2], 10) / 100, parseInt(o[3], 10) / 100, 1);
      }
    };
  }, {}],
  8: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      this.onResize("removeListeners"), this.onScroll("removeListeners"), this.clear();
    };
  }, {}],
  9: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      function e(e, t) {
        t = t || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
      }

      "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e);
    };
  }, {}],
  10: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      return "string" == typeof e ? e : "object" == _typeof(e) && e.color ? e.color : void this.triggerError("gradient.color");
    };
  }, {}],
  11: [function (e, t, n) {
    "use strict";

    t.exports = function (e, t) {
      for (var n = 0, i = []; n < 4; n++) {
        i.push(t[n] - e[n]);
      }

      return i;
    };
  }, {}],
  12: [function (e, t, n) {
    "use strict";

    t.exports = function (e, t) {
      return "object" == _typeof(e) && e.pos ? e.pos : parseFloat(t ? (1 / (this.gradientLength - 1) * t).toFixed(2) : 0);
    };
  }, {}],
  13: [function (e, t, n) {
    "use strict";

    t.exports = function (e, t) {
      return t - e;
    };
  }, {}],
  14: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      var e,
          t,
          n = [];

      for (e = 0; e < this.currentColors.length; e++) {
        for (n.push([]), t = 0; t < 4; t++) {
          n[e].push(this.currentColors[e][t]);
        }
      }

      return n;
    };
  }, {}],
  15: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      var e,
          t = [];

      for (e = 0; e < this.currentColorsPos.length; e++) {
        t.push(this.currentColorsPos[e]);
      }

      return t;
    };
  }, {}],
  16: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      this.x1 = this.canvas.offsetWidth, this.y1 = this.canvas.offsetHeight;
    };
  }, {}],
  17: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      if (e instanceof HTMLCanvasElement) this.canvas = e;else {
        if ("string" != typeof e) throw new Error("The element you used is neither a String, nor a HTMLCanvasElement");
        this.canvas = document.querySelector(e);
      }
      if (!this.canvas) throw new Error("`" + e + "` could not be found in the DOM");
    };
  }, {}],
  18: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      var e,
          t,
          n = null,
          i = this.getCurrentColors().map(function (e) {
        return Math.max(e[0], e[1], e[2]);
      });

      for (t = 0; t < i.length; t++) {
        n = null === n ? i[t] : n + i[t], t === i.length - 1 && (e = Math.round(n / (t + 1)));
      }

      return e >= 128 ? "light" : "dark";
    };
  }, {}],
  19: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      var e = this.setDirection(),
          t = document.querySelector(this.elToSetClassOn).classList,
          n = 0;

      for (this.context.clearRect(0, 0, this.x1, this.y1), this.image && this.context.drawImage(this.imageNode, this.imagePosition.x, this.imagePosition.y, this.imagePosition.width, this.imagePosition.height); n < this.currentColors.length; n++) {
        e.addColorStop(this.currentColorsPos[n], "rgba(" + this.currentColors[n][0] + ", " + this.currentColors[n][1] + ", " + this.currentColors[n][2] + ", " + this.currentColors[n][3] + ")");
      }

      this.name && ("light" === this.getLightness() ? (t.remove(this.name + "-dark"), t.add(this.name + "-light")) : (t.remove(this.name + "-light"), t.add(this.name + "-dark"))), this.context.fillStyle = e, this.context.fillRect(0, 0, this.x1, this.y1);
    };
  }, {}],
  20: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      return "removeListeners" === e ? void window.removeEventListener("resize", this.setSizeAttributesNameSpace) : void window.addEventListener("resize", this.setSizeAttributesNameSpace);
    };
  }, {}],
  21: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      return "removeListeners" === e ? void window.removeEventListener("scroll", this.pauseWhenNotInViewNameSpace) : (window.addEventListener("scroll", this.pauseWhenNotInViewNameSpace), void this.pauseWhenNotInViewNameSpace());
    };
  }, {}],
  22: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      var t = "isPausedBecauseNotInView" === e;
      this.isCleared || (t || (this.isPaused = !0), cancelAnimationFrame(this.animation), this.animating = !1);
    };
  }, {}],
  23: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      var e = this;
      this.scrollDebounceTimeout && clearTimeout(this.scrollDebounceTimeout), this.scrollDebounceTimeout = setTimeout(function () {
        var t = e.canvas.getBoundingClientRect();

        if (e.isCanvasInWindowView = !(t.bottom < 0 || t.right < 0 || t.left > window.innerWidth || t.top > window.innerHeight), e.isCanvasInWindowView) {
          if (!e.isPaused || e.firstScrollInit) {
            if (e.image && !e.isImgLoaded) return;
            e.isPausedBecauseNotInView = !1, e.play("isPlayedBecauseInView"), e.firstScrollInit = !1;
          }
        } else !e.image && e.firstScrollInit && (e.refreshColorsAndPos(), e.firstScrollInit = !1), e.isPaused || e.isPausedBecauseNotInView || (e.isPausedBecauseNotInView = !0, e.pause("isPausedBecauseNotInView"));
      }, this.scrollDebounceThreshold);
    };
  }, {}],
  24: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      "isPlayedBecauseInView" === e || (this.isPaused = !1), this.isCleared = !1, this.animating || (this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.animating = !0);
    };
  }, {}],
  25: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      function e() {
        function e(e) {
          var n,
              i = t[e + "1"],
              r = t["x" === e ? "imgOriginalWidth" : "imgOriginalHeight"],
              o = "x" === e ? t.image.position[0] : t.image.position[1];

          switch (o) {
            case "center":
              n = r > i ? -(r - i) / 2 : (i - r) / 2, t.imagePosition[e] = n, t.imagePosition["x" === e ? "width" : "height"] = r;
              break;

            case "top":
              t.imagePosition.y = 0, t.imagePosition.height = r;
              break;

            case "bottom":
              t.imagePosition.y = i - r, t.imagePosition.height = r;
              break;

            case "right":
              t.imagePosition.x = i - r, t.imagePosition.width = r;
              break;

            case "left":
              t.imagePosition.x = 0, t.imagePosition.width = r;
          }

          if (t.image.stretchMode) switch (o = "x" === e ? t.image.stretchMode[0] : t.image.stretchMode[1]) {
            case "none":
              break;

            case "stretch":
              t.imagePosition[e] = 0, t.imagePosition["x" === e ? "width" : "height"] = i;
              break;

            case "stretch-if-bigger":
              if (r < i) break;
              t.imagePosition[e] = 0, t.imagePosition["x" === e ? "width" : "height"] = i;
              break;

            case "stretch-if-smaller":
              if (r > i) break;
              t.imagePosition[e] = 0, t.imagePosition["x" === e ? "width" : "height"] = i;
          }
        }

        var n;

        for (n = 0; n < 2; n++) {
          e(n ? "y" : "x");
        }
      }

      var t = this;
      return this.imagePosition || (this.imagePosition = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }), this.image.blendingMode && (this.context.globalCompositeOperation = this.image.blendingMode), this.imageNode ? void e() : (this.imageNode = new Image(), this.imageNode.onerror = function () {
        throw new Error("Granim: The image source is invalid.");
      }, this.imageNode.onload = function () {
        t.imgOriginalWidth = t.imageNode.width, t.imgOriginalHeight = t.imageNode.height, e(), t.refreshColorsAndPos(), t.isPausedWhenNotInView && !t.isCanvasInWindowView || (t.animation = requestAnimationFrame(t.animateColors.bind(t))), t.isImgLoaded = !0;
      }, void (this.imageNode.src = this.image.source));
    };
  }, {}],
  26: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      var t,
          n,
          i,
          r,
          o = this;

      for (i = 0; i < this.activeColors.length; i++) {
        for (r = 0; r < 4; r++) {
          (t = o.activeColors[i][r] + (3 !== r ? Math.ceil(o.activeColorsDiff[i][r] / 100 * e) : Math.round(o.activeColorsDiff[i][r] / 100 * e * 100) / 100)) <= 255 && t >= 0 && (o.currentColors[i][r] = t);
        }

        (n = parseFloat((o.activeColorsPos[i] + o.activeColorsPosDiff[i] / 100 * e).toFixed(4))) <= 1 && n >= 0 && (o.currentColorsPos[i] = n);
      }

      this.makeGradient();
    };
  }, {}],
  27: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      var e,
          t,
          n,
          i,
          r = this;
      return this.channels[this.activeState] || (this.channels[this.activeState] = []), void 0 !== this.channels[this.activeState][this.channelsIndex] ? (this.activeColors = this.channels[this.activeState][this.channelsIndex].colors, this.activeColorsDiff = this.channels[this.activeState][this.channelsIndex].colorsDiff, this.activeColorsPos = this.channels[this.activeState][this.channelsIndex].colorsPos, void (this.activeColorsPosDiff = this.channels[this.activeState][this.channelsIndex].colorsPosDiff)) : (this.channels[this.activeState].push([{}]), this.channels[this.activeState][this.channelsIndex].colors = [], this.channels[this.activeState][this.channelsIndex].colorsDiff = [], this.channels[this.activeState][this.channelsIndex].colorsPos = [], this.channels[this.activeState][this.channelsIndex].colorsPosDiff = [], this.activeColors = [], this.activeColorsDiff = [], this.activeColorsPos = [], this.activeColorsPosDiff = [], this.states[this.activeState].gradients[this.channelsIndex].forEach(function (o, s) {
        var a = r.getColorPos(o, s),
            u = (o = r.getColor(o), r.convertColorToRgba(o)),
            c = r.channels[r.activeState];
        c[r.channelsIndex].colors.push(u), r.activeColors.push(u), c[r.channelsIndex].colorsPos.push(a), r.activeColorsPos.push(a), r.isCurrentColorsSet || (r.currentColors.push(r.convertColorToRgba(o)), r.currentColorsPos.push(a)), r.channelsIndex === r.states[r.activeState].gradients.length - 1 ? (e = r.getColorDiff(c[r.channelsIndex].colors[s], c[0].colors[s]), t = r.getColorPosDiff(c[r.channelsIndex].colorsPos[s], c[0].colorsPos[s])) : (n = r.convertColorToRgba(r.getColor(r.states[r.activeState].gradients[r.channelsIndex + 1][s])), i = r.getColorPos(r.states[r.activeState].gradients[r.channelsIndex + 1][s], s), e = r.getColorDiff(c[r.channelsIndex].colors[s], n), t = r.getColorPosDiff(c[r.channelsIndex].colorsPos[s], i)), c[r.channelsIndex].colorsDiff.push(e), r.activeColorsDiff.push(e), c[r.channelsIndex].colorsPosDiff.push(t), r.activeColorsPosDiff.push(t);
      }), this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3, void (this.isCurrentColorsSet = !0));
    };
  }, {}],
  28: [function (e, t, n) {
    "use strict";

    function i(e, t) {
      return e.indexOf("%") > -1 ? t / 100 * parseInt(e.split("%")[0], 10) : parseInt(e.split("px")[0], 10);
    }

    t.exports = function () {
      var e = this.context;

      switch (this.direction) {
        case "diagonal":
          return e.createLinearGradient(0, 0, this.x1, this.y1);

        case "left-right":
          return e.createLinearGradient(0, 0, this.x1, 0);

        case "top-bottom":
          return e.createLinearGradient(this.x1 / 2, 0, this.x1 / 2, this.y1);

        case "radial":
          return e.createRadialGradient(this.x1 / 2, this.y1 / 2, this.x1 / 2, this.x1 / 2, this.y1 / 2, 0);

        case "custom":
          return e.createLinearGradient(i(this.customDirection.x0, this.x1), i(this.customDirection.y0, this.y1), i(this.customDirection.x1, this.x1), i(this.customDirection.y1, this.y1));
      }
    };
  }, {}],
  29: [function (e, t, n) {
    "use strict";

    t.exports = function () {
      this.getDimensions(), this.canvas.setAttribute("width", this.x1), this.canvas.setAttribute("height", this.y1), this.image && this.prepareImage(), this.refreshColorsAndPos();
    };
  }, {}],
  30: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      throw new Error('Granim: Input error on "' + e + '" option.\nCheck the API https://sarcadass.github.io/granim.js/api.html.');
    };
  }, {}],
  31: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      var t = ["none", "stretch", "stretch-if-smaller", "stretch-if-bigger"];

      switch (e) {
        case "image":
          Array.isArray(this.image.position) && 2 === this.image.position.length && -1 !== ["left", "center", "right"].indexOf(this.image.position[0]) && -1 !== ["top", "center", "bottom"].indexOf(this.image.position[1]) || this.triggerError("image.position"), this.image.stretchMode && (Array.isArray(this.image.stretchMode) && 2 === this.image.stretchMode.length && -1 !== t.indexOf(this.image.stretchMode[0]) && -1 !== t.indexOf(this.image.stretchMode[1]) || this.triggerError("image.stretchMode"));
          break;

        case "blendingMode":
          -1 === ["multiply", "screen", "normal", "overlay", "darken", "lighten", "lighter", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"].indexOf(this.image.blendingMode) && (this.clear(), this.triggerError("blendingMode"));
          break;

        case "direction":
          -1 === ["diagonal", "left-right", "top-bottom", "radial", "custom"].indexOf(this.direction) ? this.triggerError("direction") : "custom" === this.direction && (function (e) {
            for (var t, n = !0, i = 0; n && i < e.length;) {
              if ("string" != typeof (t = e[i])) n = !1;else {
                var r,
                    o = null;
                -1 !== t.indexOf("px") && (o = "px"), -1 !== t.indexOf("%") && (o = "%"), r = t.split(o).filter(function (e) {
                  return e.length > 0;
                }), (!o || r.length > 2 || !r[0] || r[1] || !/^-?\d+\.?\d*$/.test(r[0])) && (n = !1);
              }
              i++;
            }

            return n;
          }([this.customDirection.x0, this.customDirection.x1, this.customDirection.y0, this.customDirection.y1]) || this.triggerError("customDirection"));
      }
    };
  }, {}],
  32: [function (e, t, n) {
    window.Granim = e("./lib/Granim.js");
  }, {
    "./lib/Granim.js": 1
  }]
}, {}, [32]);