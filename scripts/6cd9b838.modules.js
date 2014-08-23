/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash -o ./dist/lodash.compat.js`
 */
;
(function () {
  function n(n, t, e) {
    e = (e || 0) - 1;
    for (var r = n ? n.length : 0; ++e < r;)
      if (n[e] === t)
        return e;
    return -1;
  }
  function t(t, e) {
    var r = typeof e;
    if (t = t.l, 'boolean' == r || null == e)
      return t[e] ? 0 : -1;
    'number' != r && 'string' != r && (r = 'object');
    var u = 'number' == r ? e : b + e;
    return t = (t = t[r]) && t[u], 'object' == r ? t && -1 < n(t, e) ? 0 : -1 : t ? 0 : -1;
  }
  function e(n) {
    var t = this.l, e = typeof n;
    if ('boolean' == e || null == n)
      t[n] = true;
    else {
      'number' != e && 'string' != e && (e = 'object');
      var r = 'number' == e ? n : b + n, t = t[e] || (t[e] = {});
      'object' == e ? (t[r] || (t[r] = [])).push(n) : t[r] = true;
    }
  }
  function r(n) {
    return n.charCodeAt(0);
  }
  function u(n, t) {
    for (var e = n.m, r = t.m, u = -1, o = e.length; ++u < o;) {
      var a = e[u], i = r[u];
      if (a !== i) {
        if (a > i || typeof a == 'undefined')
          return 1;
        if (a < i || typeof i == 'undefined')
          return -1;
      }
    }
    return n.n - t.n;
  }
  function o(n) {
    var t = -1, r = n.length, u = n[0], o = n[r / 2 | 0], a = n[r - 1];
    if (u && typeof u == 'object' && o && typeof o == 'object' && a && typeof a == 'object')
      return false;
    for (u = l(), u['false'] = u['null'] = u['true'] = u.undefined = false, o = l(), o.k = n, o.l = u, o.push = e; ++t < r;)
      o.push(n[t]);
    return o;
  }
  function a(n) {
    return '\\' + Y[n];
  }
  function i() {
    return v.pop() || [];
  }
  function l() {
    return y.pop() || {
      k: null,
      l: null,
      m: null,
      'false': false,
      n: 0,
      'null': false,
      number: null,
      object: null,
      push: null,
      string: null,
      'true': false,
      undefined: false,
      o: null
    };
  }
  function f(n) {
    return typeof n.toString != 'function' && typeof (n + '') == 'string';
  }
  function c(n) {
    n.length = 0, v.length < w && v.push(n);
  }
  function p(n) {
    var t = n.l;
    t && p(t), n.k = n.l = n.m = n.object = n.number = n.string = n.o = null, y.length < w && y.push(n);
  }
  function s(n, t, e) {
    t || (t = 0), typeof e == 'undefined' && (e = n ? n.length : 0);
    var r = -1;
    e = e - t || 0;
    for (var u = Array(0 > e ? 0 : e); ++r < e;)
      u[r] = n[t + r];
    return u;
  }
  function g(e) {
    function v(n) {
      return n && typeof n == 'object' && !qe(n) && we.call(n, '__wrapped__') ? n : new y(n);
    }
    function y(n, t) {
      this.__chain__ = !!t, this.__wrapped__ = n;
    }
    function w(n) {
      function t() {
        if (r) {
          var n = s(r);
          je.apply(n, arguments);
        }
        if (this instanceof t) {
          var o = nt(e.prototype), n = e.apply(o, n || arguments);
          return xt(n) ? n : o;
        }
        return e.apply(u, n || arguments);
      }
      var e = n[0], r = n[2], u = n[4];
      return ze(t, n), t;
    }
    function Y(n, t, e, r, u) {
      if (e) {
        var o = e(n);
        if (typeof o != 'undefined')
          return o;
      }
      if (!xt(n))
        return n;
      var a = he.call(n);
      if (!V[a] || !Le.nodeClass && f(n))
        return n;
      var l = Te[a];
      switch (a) {
      case L:
      case z:
        return new l(+n);
      case W:
      case M:
        return new l(n);
      case J:
        return o = l(n.source, S.exec(n)), o.lastIndex = n.lastIndex, o;
      }
      if (a = qe(n), t) {
        var p = !r;
        r || (r = i()), u || (u = i());
        for (var g = r.length; g--;)
          if (r[g] == n)
            return u[g];
        o = a ? l(n.length) : {};
      } else
        o = a ? s(n) : Ye({}, n);
      return a && (we.call(n, 'index') && (o.index = n.index), we.call(n, 'input') && (o.input = n.input)), t ? (r.push(n), u.push(o), (a ? Xe : tr)(n, function (n, a) {
        o[a] = Y(n, t, e, r, u);
      }), p && (c(r), c(u)), o) : o;
    }
    function nt(n) {
      return xt(n) ? Se(n) : {};
    }
    function tt(n, t, e) {
      if (typeof n != 'function')
        return Ht;
      if (typeof t == 'undefined' || !('prototype' in n))
        return n;
      var r = n.__bindData__;
      if (typeof r == 'undefined' && (Le.funcNames && (r = !n.name), r = r || !Le.funcDecomp, !r)) {
        var u = be.call(n);
        Le.funcNames || (r = !A.test(u)), r || (r = B.test(u), ze(n, r));
      }
      if (false === r || true !== r && 1 & r[1])
        return n;
      switch (e) {
      case 1:
        return function (e) {
          return n.call(t, e);
        };
      case 2:
        return function (e, r) {
          return n.call(t, e, r);
        };
      case 3:
        return function (e, r, u) {
          return n.call(t, e, r, u);
        };
      case 4:
        return function (e, r, u, o) {
          return n.call(t, e, r, u, o);
        };
      }
      return Mt(n, t);
    }
    function et(n) {
      function t() {
        var n = l ? a : this;
        if (u) {
          var h = s(u);
          je.apply(h, arguments);
        }
        return (o || c) && (h || (h = s(arguments)), o && je.apply(h, o), c && h.length < i) ? (r |= 16, et([
          e,
          p ? r : -4 & r,
          h,
          null,
          a,
          i
        ])) : (h || (h = arguments), f && (e = n[g]), this instanceof t ? (n = nt(e.prototype), h = e.apply(n, h), xt(h) ? h : n) : e.apply(n, h));
      }
      var e = n[0], r = n[1], u = n[2], o = n[3], a = n[4], i = n[5], l = 1 & r, f = 2 & r, c = 4 & r, p = 8 & r, g = e;
      return ze(t, n), t;
    }
    function rt(e, r) {
      var u = -1, a = ht(), i = e ? e.length : 0, l = i >= _ && a === n, f = [];
      if (l) {
        var c = o(r);
        c ? (a = t, r = c) : l = false;
      }
      for (; ++u < i;)
        c = e[u], 0 > a(r, c) && f.push(c);
      return l && p(r), f;
    }
    function ot(n, t, e, r) {
      r = (r || 0) - 1;
      for (var u = n ? n.length : 0, o = []; ++r < u;) {
        var a = n[r];
        if (a && typeof a == 'object' && typeof a.length == 'number' && (qe(a) || dt(a))) {
          t || (a = ot(a, t, e));
          var i = -1, l = a.length, f = o.length;
          for (o.length += l; ++i < l;)
            o[f++] = a[i];
        } else
          e || o.push(a);
      }
      return o;
    }
    function at(n, t, e, r, u, o) {
      if (e) {
        var a = e(n, t);
        if (typeof a != 'undefined')
          return !!a;
      }
      if (n === t)
        return 0 !== n || 1 / n == 1 / t;
      if (n === n && !(n && X[typeof n] || t && X[typeof t]))
        return false;
      if (null == n || null == t)
        return n === t;
      var l = he.call(n), p = he.call(t);
      if (l == T && (l = G), p == T && (p = G), l != p)
        return false;
      switch (l) {
      case L:
      case z:
        return +n == +t;
      case W:
        return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
      case J:
      case M:
        return n == ie(t);
      }
      if (p = l == $, !p) {
        var s = we.call(n, '__wrapped__'), g = we.call(t, '__wrapped__');
        if (s || g)
          return at(s ? n.__wrapped__ : n, g ? t.__wrapped__ : t, e, r, u, o);
        if (l != G || !Le.nodeClass && (f(n) || f(t)))
          return false;
        if (l = !Le.argsObject && dt(n) ? oe : n.constructor, s = !Le.argsObject && dt(t) ? oe : t.constructor, l != s && !(jt(l) && l instanceof l && jt(s) && s instanceof s) && 'constructor' in n && 'constructor' in t)
          return false;
      }
      for (l = !u, u || (u = i()), o || (o = i()), s = u.length; s--;)
        if (u[s] == n)
          return o[s] == t;
      var h = 0, a = true;
      if (u.push(n), o.push(t), p) {
        if (s = n.length, h = t.length, (a = h == s) || r)
          for (; h--;)
            if (p = s, g = t[h], r)
              for (; p-- && !(a = at(n[p], g, e, r, u, o)););
            else if (!(a = at(n[h], g, e, r, u, o)))
              break;
      } else
        nr(t, function (t, i, l) {
          return we.call(l, i) ? (h++, a = we.call(n, i) && at(n[i], t, e, r, u, o)) : void 0;
        }), a && !r && nr(n, function (n, t, e) {
          return we.call(e, t) ? a = -1 < --h : void 0;
        });
      return u.pop(), o.pop(), l && (c(u), c(o)), a;
    }
    function it(n, t, e, r, u) {
      (qe(t) ? Dt : tr)(t, function (t, o) {
        var a, i, l = t, f = n[o];
        if (t && ((i = qe(t)) || er(t))) {
          for (l = r.length; l--;)
            if (a = r[l] == t) {
              f = u[l];
              break;
            }
          if (!a) {
            var c;
            e && (l = e(f, t), c = typeof l != 'undefined') && (f = l), c || (f = i ? qe(f) ? f : [] : er(f) ? f : {}), r.push(t), u.push(f), c || it(f, t, e, r, u);
          }
        } else
          e && (l = e(f, t), typeof l == 'undefined' && (l = t)), typeof l != 'undefined' && (f = l);
        n[o] = f;
      });
    }
    function lt(n, t) {
      return n + de(Fe() * (t - n + 1));
    }
    function ft(e, r, u) {
      var a = -1, l = ht(), f = e ? e.length : 0, s = [], g = !r && f >= _ && l === n, h = u || g ? i() : s;
      for (g && (h = o(h), l = t); ++a < f;) {
        var v = e[a], y = u ? u(v, a, e) : v;
        (r ? !a || h[h.length - 1] !== y : 0 > l(h, y)) && ((u || g) && h.push(y), s.push(v));
      }
      return g ? (c(h.k), p(h)) : u && c(h), s;
    }
    function ct(n) {
      return function (t, e, r) {
        var u = {};
        if (e = v.createCallback(e, r, 3), qe(t)) {
          r = -1;
          for (var o = t.length; ++r < o;) {
            var a = t[r];
            n(u, a, e(a, r, t), t);
          }
        } else
          Xe(t, function (t, r, o) {
            n(u, t, e(t, r, o), o);
          });
        return u;
      };
    }
    function pt(n, t, e, r, u, o) {
      var a = 1 & t, i = 4 & t, l = 16 & t, f = 32 & t;
      if (!(2 & t || jt(n)))
        throw new le();
      l && !e.length && (t &= -17, l = e = false), f && !r.length && (t &= -33, f = r = false);
      var c = n && n.__bindData__;
      return c && true !== c ? (c = s(c), c[2] && (c[2] = s(c[2])), c[3] && (c[3] = s(c[3])), !a || 1 & c[1] || (c[4] = u), !a && 1 & c[1] && (t |= 8), !i || 4 & c[1] || (c[5] = o), l && je.apply(c[2] || (c[2] = []), e), f && Ee.apply(c[3] || (c[3] = []), r), c[1] |= t, pt.apply(null, c)) : (1 == t || 17 === t ? w : et)([
        n,
        t,
        e,
        r,
        u,
        o
      ]);
    }
    function st() {
      Q.h = F, Q.b = Q.c = Q.g = Q.i = '', Q.e = 't', Q.j = true;
      for (var n, t = 0; n = arguments[t]; t++)
        for (var e in n)
          Q[e] = n[e];
      t = Q.a, Q.d = /^[^,]+/.exec(t)[0], n = ee, t = 'return function(' + t + '){', e = Q;
      var r = 'var n,t=' + e.d + ',E=' + e.e + ';if(!t)return E;' + e.i + ';';
      e.b ? (r += 'var u=t.length;n=-1;if(' + e.b + '){', Le.unindexedChars && (r += 'if(s(t)){t=t.split(\'\')}'), r += 'while(++n<u){' + e.g + ';}}else{') : Le.nonEnumArgs && (r += 'var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+=\'\';' + e.g + ';}}else{'), Le.enumPrototypes && (r += 'var G=typeof t==\'function\';'), Le.enumErrorProps && (r += 'var F=t===k||t instanceof Error;');
      var u = [];
      if (Le.enumPrototypes && u.push('!(G&&n=="prototype")'), Le.enumErrorProps && u.push('!(F&&(n=="message"||n=="name"))'), e.j && e.f)
        r += 'var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];', u.length && (r += 'if(' + u.join('&&') + '){'), r += e.g + ';', u.length && (r += '}'), r += '}';
      else if (r += 'for(n in t){', e.j && u.push('m.call(t, n)'), u.length && (r += 'if(' + u.join('&&') + '){'), r += e.g + ';', u.length && (r += '}'), r += '}', Le.nonEnumShadows) {
        for (r += 'if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];', k = 0; 7 > k; k++)
          r += 'n=\'' + e.h[k] + '\';if((!(r&&x[n])&&m.call(t,n))', e.j || (r += '||(!x[n]&&t[n]!==A[n])'), r += '){' + e.g + '}';
        r += '}';
      }
      return (e.b || Le.nonEnumArgs) && (r += '}'), r += e.c + ';return E', n('d,j,k,m,o,p,q,s,v,A,B,y,I,J,L', t + r + '}')(tt, q, ce, we, d, dt, qe, kt, Q.f, pe, X, $e, M, se, he);
    }
    function gt(n) {
      return Ve[n];
    }
    function ht() {
      var t = (t = v.indexOf) === zt ? n : t;
      return t;
    }
    function vt(n) {
      return typeof n == 'function' && ve.test(n);
    }
    function yt(n) {
      var t, e;
      return !n || he.call(n) != G || (t = n.constructor, jt(t) && !(t instanceof t)) || !Le.argsClass && dt(n) || !Le.nodeClass && f(n) ? false : Le.ownLast ? (nr(n, function (n, t, r) {
        return e = we.call(r, t), false;
      }), false !== e) : (nr(n, function (n, t) {
        e = t;
      }), typeof e == 'undefined' || we.call(n, e));
    }
    function mt(n) {
      return He[n];
    }
    function dt(n) {
      return n && typeof n == 'object' && typeof n.length == 'number' && he.call(n) == T || false;
    }
    function bt(n, t, e) {
      var r = We(n), u = r.length;
      for (t = tt(t, e, 3); u-- && (e = r[u], false !== t(n[e], e, n)););
      return n;
    }
    function _t(n) {
      var t = [];
      return nr(n, function (n, e) {
        jt(n) && t.push(e);
      }), t.sort();
    }
    function wt(n) {
      for (var t = -1, e = We(n), r = e.length, u = {}; ++t < r;) {
        var o = e[t];
        u[n[o]] = o;
      }
      return u;
    }
    function jt(n) {
      return typeof n == 'function';
    }
    function xt(n) {
      return !(!n || !X[typeof n]);
    }
    function Ct(n) {
      return typeof n == 'number' || n && typeof n == 'object' && he.call(n) == W || false;
    }
    function kt(n) {
      return typeof n == 'string' || n && typeof n == 'object' && he.call(n) == M || false;
    }
    function Et(n) {
      for (var t = -1, e = We(n), r = e.length, u = Zt(r); ++t < r;)
        u[t] = n[e[t]];
      return u;
    }
    function Ot(n, t, e) {
      var r = -1, u = ht(), o = n ? n.length : 0, a = false;
      return e = (0 > e ? Be(0, o + e) : e) || 0, qe(n) ? a = -1 < u(n, t, e) : typeof o == 'number' ? a = -1 < (kt(n) ? n.indexOf(t, e) : u(n, t, e)) : Xe(n, function (n) {
        return ++r < e ? void 0 : !(a = n === t);
      }), a;
    }
    function St(n, t, e) {
      var r = true;
      if (t = v.createCallback(t, e, 3), qe(n)) {
        e = -1;
        for (var u = n.length; ++e < u && (r = !!t(n[e], e, n)););
      } else
        Xe(n, function (n, e, u) {
          return r = !!t(n, e, u);
        });
      return r;
    }
    function At(n, t, e) {
      var r = [];
      if (t = v.createCallback(t, e, 3), qe(n)) {
        e = -1;
        for (var u = n.length; ++e < u;) {
          var o = n[e];
          t(o, e, n) && r.push(o);
        }
      } else
        Xe(n, function (n, e, u) {
          t(n, e, u) && r.push(n);
        });
      return r;
    }
    function It(n, t, e) {
      if (t = v.createCallback(t, e, 3), !qe(n)) {
        var r;
        return Xe(n, function (n, e, u) {
          return t(n, e, u) ? (r = n, false) : void 0;
        }), r;
      }
      e = -1;
      for (var u = n.length; ++e < u;) {
        var o = n[e];
        if (t(o, e, n))
          return o;
      }
    }
    function Dt(n, t, e) {
      if (t && typeof e == 'undefined' && qe(n)) {
        e = -1;
        for (var r = n.length; ++e < r && false !== t(n[e], e, n););
      } else
        Xe(n, t, e);
      return n;
    }
    function Nt(n, t, e) {
      var r = n, u = n ? n.length : 0;
      if (t = t && typeof e == 'undefined' ? t : tt(t, e, 3), qe(n))
        for (; u-- && false !== t(n[u], u, n););
      else {
        if (typeof u != 'number')
          var o = We(n), u = o.length;
        else
          Le.unindexedChars && kt(n) && (r = n.split(''));
        Xe(n, function (n, e, a) {
          return e = o ? o[--u] : --u, t(r[e], e, a);
        });
      }
      return n;
    }
    function Bt(n, t, e) {
      var r = -1, u = n ? n.length : 0, o = Zt(typeof u == 'number' ? u : 0);
      if (t = v.createCallback(t, e, 3), qe(n))
        for (; ++r < u;)
          o[r] = t(n[r], r, n);
      else
        Xe(n, function (n, e, u) {
          o[++r] = t(n, e, u);
        });
      return o;
    }
    function Pt(n, t, e) {
      var u = -1 / 0, o = u;
      if (typeof t != 'function' && e && e[t] === n && (t = null), null == t && qe(n)) {
        e = -1;
        for (var a = n.length; ++e < a;) {
          var i = n[e];
          i > o && (o = i);
        }
      } else
        t = null == t && kt(n) ? r : v.createCallback(t, e, 3), Xe(n, function (n, e, r) {
          e = t(n, e, r), e > u && (u = e, o = n);
        });
      return o;
    }
    function Rt(n, t, e, r) {
      var u = 3 > arguments.length;
      if (t = v.createCallback(t, r, 4), qe(n)) {
        var o = -1, a = n.length;
        for (u && (e = n[++o]); ++o < a;)
          e = t(e, n[o], o, n);
      } else
        Xe(n, function (n, r, o) {
          e = u ? (u = false, n) : t(e, n, r, o);
        });
      return e;
    }
    function Ft(n, t, e, r) {
      var u = 3 > arguments.length;
      return t = v.createCallback(t, r, 4), Nt(n, function (n, r, o) {
        e = u ? (u = false, n) : t(e, n, r, o);
      }), e;
    }
    function Tt(n) {
      var t = -1, e = n ? n.length : 0, r = Zt(typeof e == 'number' ? e : 0);
      return Dt(n, function (n) {
        var e = lt(0, ++t);
        r[t] = r[e], r[e] = n;
      }), r;
    }
    function $t(n, t, e) {
      var r;
      if (t = v.createCallback(t, e, 3), qe(n)) {
        e = -1;
        for (var u = n.length; ++e < u && !(r = t(n[e], e, n)););
      } else
        Xe(n, function (n, e, u) {
          return !(r = t(n, e, u));
        });
      return !!r;
    }
    function Lt(n, t, e) {
      var r = 0, u = n ? n.length : 0;
      if (typeof t != 'number' && null != t) {
        var o = -1;
        for (t = v.createCallback(t, e, 3); ++o < u && t(n[o], o, n);)
          r++;
      } else if (r = t, null == r || e)
        return n ? n[0] : h;
      return s(n, 0, Pe(Be(0, r), u));
    }
    function zt(t, e, r) {
      if (typeof r == 'number') {
        var u = t ? t.length : 0;
        r = 0 > r ? Be(0, u + r) : r || 0;
      } else if (r)
        return r = Kt(t, e), t[r] === e ? r : -1;
      return n(t, e, r);
    }
    function qt(n, t, e) {
      if (typeof t != 'number' && null != t) {
        var r = 0, u = -1, o = n ? n.length : 0;
        for (t = v.createCallback(t, e, 3); ++u < o && t(n[u], u, n);)
          r++;
      } else
        r = null == t || e ? 1 : Be(0, t);
      return s(n, r);
    }
    function Kt(n, t, e, r) {
      var u = 0, o = n ? n.length : u;
      for (e = e ? v.createCallback(e, r, 1) : Ht, t = e(t); u < o;)
        r = u + o >>> 1, e(n[r]) < t ? u = r + 1 : o = r;
      return u;
    }
    function Wt(n, t, e, r) {
      return typeof t != 'boolean' && null != t && (r = e, e = typeof t != 'function' && r && r[t] === n ? null : t, t = false), null != e && (e = v.createCallback(e, r, 3)), ft(n, t, e);
    }
    function Gt() {
      for (var n = 1 < arguments.length ? arguments : arguments[0], t = -1, e = n ? Pt(ar(n, 'length')) : 0, r = Zt(0 > e ? 0 : e); ++t < e;)
        r[t] = ar(n, t);
      return r;
    }
    function Jt(n, t) {
      var e = -1, r = n ? n.length : 0, u = {};
      for (t || !r || qe(n[0]) || (t = []); ++e < r;) {
        var o = n[e];
        t ? u[o] = t[e] : o && (u[o[0]] = o[1]);
      }
      return u;
    }
    function Mt(n, t) {
      return 2 < arguments.length ? pt(n, 17, s(arguments, 2), null, t) : pt(n, 1, null, null, t);
    }
    function Vt(n, t, e) {
      var r, u, o, a, i, l, f, c = 0, p = false, s = true;
      if (!jt(n))
        throw new le();
      if (t = Be(0, t) || 0, true === e)
        var g = true, s = false;
      else
        xt(e) && (g = e.leading, p = 'maxWait' in e && (Be(t, e.maxWait) || 0), s = 'trailing' in e ? e.trailing : s);
      var v = function () {
          var e = t - (ir() - a);
          0 < e ? l = Ce(v, e) : (u && me(u), e = f, u = l = f = h, e && (c = ir(), o = n.apply(i, r), l || u || (r = i = null)));
        }, y = function () {
          l && me(l), u = l = f = h, (s || p !== t) && (c = ir(), o = n.apply(i, r), l || u || (r = i = null));
        };
      return function () {
        if (r = arguments, a = ir(), i = this, f = s && (l || !g), false === p)
          var e = g && !l;
        else {
          u || g || (c = a);
          var h = p - (a - c), m = 0 >= h;
          m ? (u && (u = me(u)), c = a, o = n.apply(i, r)) : u || (u = Ce(y, h));
        }
        return m && l ? l = me(l) : l || t === p || (l = Ce(v, t)), e && (m = true, o = n.apply(i, r)), !m || l || u || (r = i = null), o;
      };
    }
    function Ht(n) {
      return n;
    }
    function Ut(n, t, e) {
      var r = true, u = t && _t(t);
      t && (e || u.length) || (null == e && (e = t), o = y, t = n, n = v, u = _t(t)), false === e ? r = false : xt(e) && 'chain' in e && (r = e.chain);
      var o = n, a = jt(o);
      Dt(u, function (e) {
        var u = n[e] = t[e];
        a && (o.prototype[e] = function () {
          var t = this.__chain__, e = this.__wrapped__, a = [e];
          if (je.apply(a, arguments), a = u.apply(n, a), r || t) {
            if (e === a && xt(a))
              return this;
            a = new o(a), a.__chain__ = t;
          }
          return a;
        });
      });
    }
    function Qt() {
    }
    function Xt(n) {
      return function (t) {
        return t[n];
      };
    }
    function Yt() {
      return this.__wrapped__;
    }
    e = e ? ut.defaults(Z.Object(), e, ut.pick(Z, R)) : Z;
    var Zt = e.Array, ne = e.Boolean, te = e.Date, ee = e.Function, re = e.Math, ue = e.Number, oe = e.Object, ae = e.RegExp, ie = e.String, le = e.TypeError, fe = [], ce = e.Error.prototype, pe = oe.prototype, se = ie.prototype, ge = e._, he = pe.toString, ve = ae('^' + ie(he).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/toString| for [^\]]+/g, '.*?') + '$'), ye = re.ceil, me = e.clearTimeout, de = re.floor, be = ee.prototype.toString, _e = vt(_e = oe.getPrototypeOf) && _e, we = pe.hasOwnProperty, je = fe.push, xe = pe.propertyIsEnumerable, Ce = e.setTimeout, ke = fe.splice, Ee = fe.unshift, Oe = function () {
        try {
          var n = {}, t = vt(t = oe.defineProperty) && t, e = t(n, n, n) && t;
        } catch (r) {
        }
        return e;
      }(), Se = vt(Se = oe.create) && Se, Ae = vt(Ae = Zt.isArray) && Ae, Ie = e.isFinite, De = e.isNaN, Ne = vt(Ne = oe.keys) && Ne, Be = re.max, Pe = re.min, Re = e.parseInt, Fe = re.random, Te = {};
    Te[$] = Zt, Te[L] = ne, Te[z] = te, Te[K] = ee, Te[G] = oe, Te[W] = ue, Te[J] = ae, Te[M] = ie;
    var $e = {};
    $e[$] = $e[z] = $e[W] = {
      constructor: true,
      toLocaleString: true,
      toString: true,
      valueOf: true
    }, $e[L] = $e[M] = {
      constructor: true,
      toString: true,
      valueOf: true
    }, $e[q] = $e[K] = $e[J] = {
      constructor: true,
      toString: true
    }, $e[G] = { constructor: true }, function () {
      for (var n = F.length; n--;) {
        var t, e = F[n];
        for (t in $e)
          we.call($e, t) && !we.call($e[t], e) && ($e[t][e] = false);
      }
    }(), y.prototype = v.prototype;
    var Le = v.support = {};
    !function () {
      var n = function () {
          this.x = 1;
        }, t = {
          0: 1,
          length: 1
        }, r = [];
      n.prototype = {
        valueOf: 1,
        y: 1
      };
      for (var u in new n())
        r.push(u);
      for (u in arguments);
      Le.argsClass = he.call(arguments) == T, Le.argsObject = arguments.constructor == oe && !(arguments instanceof Zt), Le.enumErrorProps = xe.call(ce, 'message') || xe.call(ce, 'name'), Le.enumPrototypes = xe.call(n, 'prototype'), Le.funcDecomp = !vt(e.WinRTError) && B.test(g), Le.funcNames = typeof ee.name == 'string', Le.nonEnumArgs = 0 != u, Le.nonEnumShadows = !/valueOf/.test(r), Le.ownLast = 'x' != r[0], Le.spliceObjects = (fe.splice.call(t, 0, 1), !t[0]), Le.unindexedChars = 'xx' != 'x'[0] + oe('x')[0];
      try {
        Le.nodeClass = !(he.call(document) == G && !({ toString: 0 } + ''));
      } catch (o) {
        Le.nodeClass = true;
      }
    }(1), v.templateSettings = {
      escape: /<%-([\s\S]+?)%>/g,
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: I,
      variable: '',
      imports: { _: v }
    }, Se || (nt = function () {
      function n() {
      }
      return function (t) {
        if (xt(t)) {
          n.prototype = t;
          var r = new n();
          n.prototype = null;
        }
        return r || e.Object();
      };
    }());
    var ze = Oe ? function (n, t) {
        U.value = t, Oe(n, '__bindData__', U);
      } : Qt;
    Le.argsClass || (dt = function (n) {
      return n && typeof n == 'object' && typeof n.length == 'number' && we.call(n, 'callee') && !xe.call(n, 'callee') || false;
    });
    var qe = Ae || function (n) {
        return n && typeof n == 'object' && typeof n.length == 'number' && he.call(n) == $ || false;
      }, Ke = st({
        a: 'z',
        e: '[]',
        i: 'if(!(B[typeof z]))return E',
        g: 'E.push(n)'
      }), We = Ne ? function (n) {
        return xt(n) ? Le.enumPrototypes && typeof n == 'function' || Le.nonEnumArgs && n.length && dt(n) ? Ke(n) : Ne(n) : [];
      } : Ke, Ge = {
        a: 'g,e,K',
        i: 'e=e&&typeof K==\'undefined\'?e:d(e,K,3)',
        b: 'typeof u==\'number\'',
        v: We,
        g: 'if(e(t[n],n,g)===false)return E'
      }, Je = {
        a: 'z,H,l',
        i: 'var a=arguments,b=0,c=typeof l==\'number\'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){',
        v: We,
        g: 'if(typeof E[n]==\'undefined\')E[n]=t[n]',
        c: '}}'
      }, Me = {
        i: 'if(!B[typeof t])return E;' + Ge.i,
        b: false
      }, Ve = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
      }, He = wt(Ve), Ue = ae('(' + We(He).join('|') + ')', 'g'), Qe = ae('[' + We(Ve).join('') + ']', 'g'), Xe = st(Ge), Ye = st(Je, {
        i: Je.i.replace(';', ';if(c>3&&typeof a[c-2]==\'function\'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]==\'function\'){e=a[--c]}'),
        g: 'E[n]=e?e(E[n],t[n]):t[n]'
      }), Ze = st(Je), nr = st(Ge, Me, { j: false }), tr = st(Ge, Me);
    jt(/x/) && (jt = function (n) {
      return typeof n == 'function' && he.call(n) == K;
    });
    var er = _e ? function (n) {
        if (!n || he.call(n) != G || !Le.argsClass && dt(n))
          return false;
        var t = n.valueOf, e = vt(t) && (e = _e(t)) && _e(e);
        return e ? n == e || _e(n) == e : yt(n);
      } : yt, rr = ct(function (n, t, e) {
        we.call(n, e) ? n[e]++ : n[e] = 1;
      }), ur = ct(function (n, t, e) {
        (we.call(n, e) ? n[e] : n[e] = []).push(t);
      }), or = ct(function (n, t, e) {
        n[e] = t;
      }), ar = Bt, ir = vt(ir = te.now) && ir || function () {
        return new te().getTime();
      }, lr = 8 == Re(j + '08') ? Re : function (n, t) {
        return Re(kt(n) ? n.replace(D, '') : n, t || 0);
      };
    return v.after = function (n, t) {
      if (!jt(t))
        throw new le();
      return function () {
        return 1 > --n ? t.apply(this, arguments) : void 0;
      };
    }, v.assign = Ye, v.at = function (n) {
      var t = arguments, e = -1, r = ot(t, true, false, 1), t = t[2] && t[2][t[1]] === n ? 1 : r.length, u = Zt(t);
      for (Le.unindexedChars && kt(n) && (n = n.split('')); ++e < t;)
        u[e] = n[r[e]];
      return u;
    }, v.bind = Mt, v.bindAll = function (n) {
      for (var t = 1 < arguments.length ? ot(arguments, true, false, 1) : _t(n), e = -1, r = t.length; ++e < r;) {
        var u = t[e];
        n[u] = pt(n[u], 1, null, null, n);
      }
      return n;
    }, v.bindKey = function (n, t) {
      return 2 < arguments.length ? pt(t, 19, s(arguments, 2), null, n) : pt(t, 3, null, null, n);
    }, v.chain = function (n) {
      return n = new y(n), n.__chain__ = true, n;
    }, v.compact = function (n) {
      for (var t = -1, e = n ? n.length : 0, r = []; ++t < e;) {
        var u = n[t];
        u && r.push(u);
      }
      return r;
    }, v.compose = function () {
      for (var n = arguments, t = n.length; t--;)
        if (!jt(n[t]))
          throw new le();
      return function () {
        for (var t = arguments, e = n.length; e--;)
          t = [n[e].apply(this, t)];
        return t[0];
      };
    }, v.constant = function (n) {
      return function () {
        return n;
      };
    }, v.countBy = rr, v.create = function (n, t) {
      var e = nt(n);
      return t ? Ye(e, t) : e;
    }, v.createCallback = function (n, t, e) {
      var r = typeof n;
      if (null == n || 'function' == r)
        return tt(n, t, e);
      if ('object' != r)
        return Xt(n);
      var u = We(n), o = u[0], a = n[o];
      return 1 != u.length || a !== a || xt(a) ? function (t) {
        for (var e = u.length, r = false; e-- && (r = at(t[u[e]], n[u[e]], null, true)););
        return r;
      } : function (n) {
        return n = n[o], a === n && (0 !== a || 1 / a == 1 / n);
      };
    }, v.curry = function (n, t) {
      return t = typeof t == 'number' ? t : +t || n.length, pt(n, 4, null, null, null, t);
    }, v.debounce = Vt, v.defaults = Ze, v.defer = function (n) {
      if (!jt(n))
        throw new le();
      var t = s(arguments, 1);
      return Ce(function () {
        n.apply(h, t);
      }, 1);
    }, v.delay = function (n, t) {
      if (!jt(n))
        throw new le();
      var e = s(arguments, 2);
      return Ce(function () {
        n.apply(h, e);
      }, t);
    }, v.difference = function (n) {
      return rt(n, ot(arguments, true, true, 1));
    }, v.filter = At, v.flatten = function (n, t, e, r) {
      return typeof t != 'boolean' && null != t && (r = e, e = typeof t != 'function' && r && r[t] === n ? null : t, t = false), null != e && (n = Bt(n, e, r)), ot(n, t);
    }, v.forEach = Dt, v.forEachRight = Nt, v.forIn = nr, v.forInRight = function (n, t, e) {
      var r = [];
      nr(n, function (n, t) {
        r.push(t, n);
      });
      var u = r.length;
      for (t = tt(t, e, 3); u-- && false !== t(r[u--], r[u], n););
      return n;
    }, v.forOwn = tr, v.forOwnRight = bt, v.functions = _t, v.groupBy = ur, v.indexBy = or, v.initial = function (n, t, e) {
      var r = 0, u = n ? n.length : 0;
      if (typeof t != 'number' && null != t) {
        var o = u;
        for (t = v.createCallback(t, e, 3); o-- && t(n[o], o, n);)
          r++;
      } else
        r = null == t || e ? 1 : t || r;
      return s(n, 0, Pe(Be(0, u - r), u));
    }, v.intersection = function () {
      for (var e = [], r = -1, u = arguments.length, a = i(), l = ht(), f = l === n, s = i(); ++r < u;) {
        var g = arguments[r];
        (qe(g) || dt(g)) && (e.push(g), a.push(f && g.length >= _ && o(r ? e[r] : s)));
      }
      var f = e[0], h = -1, v = f ? f.length : 0, y = [];
      n:
        for (; ++h < v;) {
          var m = a[0], g = f[h];
          if (0 > (m ? t(m, g) : l(s, g))) {
            for (r = u, (m || s).push(g); --r;)
              if (m = a[r], 0 > (m ? t(m, g) : l(e[r], g)))
                continue n;
            y.push(g);
          }
        }
      for (; u--;)
        (m = a[u]) && p(m);
      return c(a), c(s), y;
    }, v.invert = wt, v.invoke = function (n, t) {
      var e = s(arguments, 2), r = -1, u = typeof t == 'function', o = n ? n.length : 0, a = Zt(typeof o == 'number' ? o : 0);
      return Dt(n, function (n) {
        a[++r] = (u ? t : n[t]).apply(n, e);
      }), a;
    }, v.keys = We, v.map = Bt, v.mapValues = function (n, t, e) {
      var r = {};
      return t = v.createCallback(t, e, 3), tr(n, function (n, e, u) {
        r[e] = t(n, e, u);
      }), r;
    }, v.max = Pt, v.memoize = function (n, t) {
      if (!jt(n))
        throw new le();
      var e = function () {
        var r = e.cache, u = t ? t.apply(this, arguments) : b + arguments[0];
        return we.call(r, u) ? r[u] : r[u] = n.apply(this, arguments);
      };
      return e.cache = {}, e;
    }, v.merge = function (n) {
      var t = arguments, e = 2;
      if (!xt(n))
        return n;
      if ('number' != typeof t[2] && (e = t.length), 3 < e && 'function' == typeof t[e - 2])
        var r = tt(t[--e - 1], t[e--], 2);
      else
        2 < e && 'function' == typeof t[e - 1] && (r = t[--e]);
      for (var t = s(arguments, 1, e), u = -1, o = i(), a = i(); ++u < e;)
        it(n, t[u], r, o, a);
      return c(o), c(a), n;
    }, v.min = function (n, t, e) {
      var u = 1 / 0, o = u;
      if (typeof t != 'function' && e && e[t] === n && (t = null), null == t && qe(n)) {
        e = -1;
        for (var a = n.length; ++e < a;) {
          var i = n[e];
          i < o && (o = i);
        }
      } else
        t = null == t && kt(n) ? r : v.createCallback(t, e, 3), Xe(n, function (n, e, r) {
          e = t(n, e, r), e < u && (u = e, o = n);
        });
      return o;
    }, v.omit = function (n, t, e) {
      var r = {};
      if (typeof t != 'function') {
        var u = [];
        nr(n, function (n, t) {
          u.push(t);
        });
        for (var u = rt(u, ot(arguments, true, false, 1)), o = -1, a = u.length; ++o < a;) {
          var i = u[o];
          r[i] = n[i];
        }
      } else
        t = v.createCallback(t, e, 3), nr(n, function (n, e, u) {
          t(n, e, u) || (r[e] = n);
        });
      return r;
    }, v.once = function (n) {
      var t, e;
      if (!jt(n))
        throw new le();
      return function () {
        return t ? e : (t = true, e = n.apply(this, arguments), n = null, e);
      };
    }, v.pairs = function (n) {
      for (var t = -1, e = We(n), r = e.length, u = Zt(r); ++t < r;) {
        var o = e[t];
        u[t] = [
          o,
          n[o]
        ];
      }
      return u;
    }, v.partial = function (n) {
      return pt(n, 16, s(arguments, 1));
    }, v.partialRight = function (n) {
      return pt(n, 32, null, s(arguments, 1));
    }, v.pick = function (n, t, e) {
      var r = {};
      if (typeof t != 'function')
        for (var u = -1, o = ot(arguments, true, false, 1), a = xt(n) ? o.length : 0; ++u < a;) {
          var i = o[u];
          i in n && (r[i] = n[i]);
        }
      else
        t = v.createCallback(t, e, 3), nr(n, function (n, e, u) {
          t(n, e, u) && (r[e] = n);
        });
      return r;
    }, v.pluck = ar, v.property = Xt, v.pull = function (n) {
      for (var t = arguments, e = 0, r = t.length, u = n ? n.length : 0; ++e < r;)
        for (var o = -1, a = t[e]; ++o < u;)
          n[o] === a && (ke.call(n, o--, 1), u--);
      return n;
    }, v.range = function (n, t, e) {
      n = +n || 0, e = typeof e == 'number' ? e : +e || 1, null == t && (t = n, n = 0);
      var r = -1;
      t = Be(0, ye((t - n) / (e || 1)));
      for (var u = Zt(t); ++r < t;)
        u[r] = n, n += e;
      return u;
    }, v.reject = function (n, t, e) {
      return t = v.createCallback(t, e, 3), At(n, function (n, e, r) {
        return !t(n, e, r);
      });
    }, v.remove = function (n, t, e) {
      var r = -1, u = n ? n.length : 0, o = [];
      for (t = v.createCallback(t, e, 3); ++r < u;)
        e = n[r], t(e, r, n) && (o.push(e), ke.call(n, r--, 1), u--);
      return o;
    }, v.rest = qt, v.shuffle = Tt, v.sortBy = function (n, t, e) {
      var r = -1, o = qe(t), a = n ? n.length : 0, f = Zt(typeof a == 'number' ? a : 0);
      for (o || (t = v.createCallback(t, e, 3)), Dt(n, function (n, e, u) {
          var a = f[++r] = l();
          o ? a.m = Bt(t, function (t) {
            return n[t];
          }) : (a.m = i())[0] = t(n, e, u), a.n = r, a.o = n;
        }), a = f.length, f.sort(u); a--;)
        n = f[a], f[a] = n.o, o || c(n.m), p(n);
      return f;
    }, v.tap = function (n, t) {
      return t(n), n;
    }, v.throttle = function (n, t, e) {
      var r = true, u = true;
      if (!jt(n))
        throw new le();
      return false === e ? r = false : xt(e) && (r = 'leading' in e ? e.leading : r, u = 'trailing' in e ? e.trailing : u), H.leading = r, H.maxWait = t, H.trailing = u, Vt(n, t, H);
    }, v.times = function (n, t, e) {
      n = -1 < (n = +n) ? n : 0;
      var r = -1, u = Zt(n);
      for (t = tt(t, e, 1); ++r < n;)
        u[r] = t(r);
      return u;
    }, v.toArray = function (n) {
      return n && typeof n.length == 'number' ? Le.unindexedChars && kt(n) ? n.split('') : s(n) : Et(n);
    }, v.transform = function (n, t, e, r) {
      var u = qe(n);
      if (null == e)
        if (u)
          e = [];
        else {
          var o = n && n.constructor;
          e = nt(o && o.prototype);
        }
      return t && (t = v.createCallback(t, r, 4), (u ? Xe : tr)(n, function (n, r, u) {
        return t(e, n, r, u);
      })), e;
    }, v.union = function () {
      return ft(ot(arguments, true, true));
    }, v.uniq = Wt, v.values = Et, v.where = At, v.without = function (n) {
      return rt(n, s(arguments, 1));
    }, v.wrap = function (n, t) {
      return pt(t, 16, [n]);
    }, v.xor = function () {
      for (var n = -1, t = arguments.length; ++n < t;) {
        var e = arguments[n];
        if (qe(e) || dt(e))
          var r = r ? ft(rt(r, e).concat(rt(e, r))) : e;
      }
      return r || [];
    }, v.zip = Gt, v.zipObject = Jt, v.collect = Bt, v.drop = qt, v.each = Dt, v.eachRight = Nt, v.extend = Ye, v.methods = _t, v.object = Jt, v.select = At, v.tail = qt, v.unique = Wt, v.unzip = Gt, Ut(v), v.clone = function (n, t, e, r) {
      return typeof t != 'boolean' && null != t && (r = e, e = t, t = false), Y(n, t, typeof e == 'function' && tt(e, r, 1));
    }, v.cloneDeep = function (n, t, e) {
      return Y(n, true, typeof t == 'function' && tt(t, e, 1));
    }, v.contains = Ot, v.escape = function (n) {
      return null == n ? '' : ie(n).replace(Qe, gt);
    }, v.every = St, v.find = It, v.findIndex = function (n, t, e) {
      var r = -1, u = n ? n.length : 0;
      for (t = v.createCallback(t, e, 3); ++r < u;)
        if (t(n[r], r, n))
          return r;
      return -1;
    }, v.findKey = function (n, t, e) {
      var r;
      return t = v.createCallback(t, e, 3), tr(n, function (n, e, u) {
        return t(n, e, u) ? (r = e, false) : void 0;
      }), r;
    }, v.findLast = function (n, t, e) {
      var r;
      return t = v.createCallback(t, e, 3), Nt(n, function (n, e, u) {
        return t(n, e, u) ? (r = n, false) : void 0;
      }), r;
    }, v.findLastIndex = function (n, t, e) {
      var r = n ? n.length : 0;
      for (t = v.createCallback(t, e, 3); r--;)
        if (t(n[r], r, n))
          return r;
      return -1;
    }, v.findLastKey = function (n, t, e) {
      var r;
      return t = v.createCallback(t, e, 3), bt(n, function (n, e, u) {
        return t(n, e, u) ? (r = e, false) : void 0;
      }), r;
    }, v.has = function (n, t) {
      return n ? we.call(n, t) : false;
    }, v.identity = Ht, v.indexOf = zt, v.isArguments = dt, v.isArray = qe, v.isBoolean = function (n) {
      return true === n || false === n || n && typeof n == 'object' && he.call(n) == L || false;
    }, v.isDate = function (n) {
      return n && typeof n == 'object' && he.call(n) == z || false;
    }, v.isElement = function (n) {
      return n && 1 === n.nodeType || false;
    }, v.isEmpty = function (n) {
      var t = true;
      if (!n)
        return t;
      var e = he.call(n), r = n.length;
      return e == $ || e == M || (Le.argsClass ? e == T : dt(n)) || e == G && typeof r == 'number' && jt(n.splice) ? !r : (tr(n, function () {
        return t = false;
      }), t);
    }, v.isEqual = function (n, t, e, r) {
      return at(n, t, typeof e == 'function' && tt(e, r, 2));
    }, v.isFinite = function (n) {
      return Ie(n) && !De(parseFloat(n));
    }, v.isFunction = jt, v.isNaN = function (n) {
      return Ct(n) && n != +n;
    }, v.isNull = function (n) {
      return null === n;
    }, v.isNumber = Ct, v.isObject = xt, v.isPlainObject = er, v.isRegExp = function (n) {
      return n && X[typeof n] && he.call(n) == J || false;
    }, v.isString = kt, v.isUndefined = function (n) {
      return typeof n == 'undefined';
    }, v.lastIndexOf = function (n, t, e) {
      var r = n ? n.length : 0;
      for (typeof e == 'number' && (r = (0 > e ? Be(0, r + e) : Pe(e, r - 1)) + 1); r--;)
        if (n[r] === t)
          return r;
      return -1;
    }, v.mixin = Ut, v.noConflict = function () {
      return e._ = ge, this;
    }, v.noop = Qt, v.now = ir, v.parseInt = lr, v.random = function (n, t, e) {
      var r = null == n, u = null == t;
      return null == e && (typeof n == 'boolean' && u ? (e = n, n = 1) : u || typeof t != 'boolean' || (e = t, u = true)), r && u && (t = 1), n = +n || 0, u ? (t = n, n = 0) : t = +t || 0, e || n % 1 || t % 1 ? (e = Fe(), Pe(n + e * (t - n + parseFloat('1e-' + ((e + '').length - 1))), t)) : lt(n, t);
    }, v.reduce = Rt, v.reduceRight = Ft, v.result = function (n, t) {
      if (n) {
        var e = n[t];
        return jt(e) ? n[t]() : e;
      }
    }, v.runInContext = g, v.size = function (n) {
      var t = n ? n.length : 0;
      return typeof t == 'number' ? t : We(n).length;
    }, v.some = $t, v.sortedIndex = Kt, v.template = function (n, t, e) {
      var r = v.templateSettings;
      n = ie(n || ''), e = Ze({}, e, r);
      var u, o = Ze({}, e.imports, r.imports), r = We(o), o = Et(o), i = 0, l = e.interpolate || N, f = '__p+=\'', l = ae((e.escape || N).source + '|' + l.source + '|' + (l === I ? O : N).source + '|' + (e.evaluate || N).source + '|$', 'g');
      n.replace(l, function (t, e, r, o, l, c) {
        return r || (r = o), f += n.slice(i, c).replace(P, a), e && (f += '\'+__e(' + e + ')+\''), l && (u = true, f += '\';' + l + ';\n__p+=\''), r && (f += '\'+((__t=(' + r + '))==null?\'\':__t)+\''), i = c + t.length, t;
      }), f += '\';', l = e = e.variable, l || (e = 'obj', f = 'with(' + e + '){' + f + '}'), f = (u ? f.replace(x, '') : f).replace(C, '$1').replace(E, '$1;'), f = 'function(' + e + '){' + (l ? '' : e + '||(' + e + '={});') + 'var __t,__p=\'\',__e=_.escape' + (u ? ',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,\'\')}' : ';') + f + 'return __p}';
      try {
        var c = ee(r, 'return ' + f).apply(h, o);
      } catch (p) {
        throw p.source = f, p;
      }
      return t ? c(t) : (c.source = f, c);
    }, v.unescape = function (n) {
      return null == n ? '' : ie(n).replace(Ue, mt);
    }, v.uniqueId = function (n) {
      var t = ++m;
      return ie(null == n ? '' : n) + t;
    }, v.all = St, v.any = $t, v.detect = It, v.findWhere = It, v.foldl = Rt, v.foldr = Ft, v.include = Ot, v.inject = Rt, Ut(function () {
      var n = {};
      return tr(v, function (t, e) {
        v.prototype[e] || (n[e] = t);
      }), n;
    }(), false), v.first = Lt, v.last = function (n, t, e) {
      var r = 0, u = n ? n.length : 0;
      if (typeof t != 'number' && null != t) {
        var o = u;
        for (t = v.createCallback(t, e, 3); o-- && t(n[o], o, n);)
          r++;
      } else if (r = t, null == r || e)
        return n ? n[u - 1] : h;
      return s(n, Be(0, u - r));
    }, v.sample = function (n, t, e) {
      return n && typeof n.length != 'number' ? n = Et(n) : Le.unindexedChars && kt(n) && (n = n.split('')), null == t || e ? n ? n[lt(0, n.length - 1)] : h : (n = Tt(n), n.length = Pe(Be(0, t), n.length), n);
    }, v.take = Lt, v.head = Lt, tr(v, function (n, t) {
      var e = 'sample' !== t;
      v.prototype[t] || (v.prototype[t] = function (t, r) {
        var u = this.__chain__, o = n(this.__wrapped__, t, r);
        return u || null != t && (!r || e && typeof t == 'function') ? new y(o, u) : o;
      });
    }), v.VERSION = '2.4.1', v.prototype.chain = function () {
      return this.__chain__ = true, this;
    }, v.prototype.toString = function () {
      return ie(this.__wrapped__);
    }, v.prototype.value = Yt, v.prototype.valueOf = Yt, Xe([
      'join',
      'pop',
      'shift'
    ], function (n) {
      var t = fe[n];
      v.prototype[n] = function () {
        var n = this.__chain__, e = t.apply(this.__wrapped__, arguments);
        return n ? new y(e, n) : e;
      };
    }), Xe([
      'push',
      'reverse',
      'sort',
      'unshift'
    ], function (n) {
      var t = fe[n];
      v.prototype[n] = function () {
        return t.apply(this.__wrapped__, arguments), this;
      };
    }), Xe([
      'concat',
      'slice',
      'splice'
    ], function (n) {
      var t = fe[n];
      v.prototype[n] = function () {
        return new y(t.apply(this.__wrapped__, arguments), this.__chain__);
      };
    }), Le.spliceObjects || Xe([
      'pop',
      'shift',
      'splice'
    ], function (n) {
      var t = fe[n], e = 'splice' == n;
      v.prototype[n] = function () {
        var n = this.__chain__, r = this.__wrapped__, u = t.apply(r, arguments);
        return 0 === r.length && delete r[0], n || e ? new y(u, n) : u;
      };
    }), v;
  }
  var h, v = [], y = [], m = 0, d = {}, b = +new Date() + '', _ = 75, w = 40, j = ' \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000', x = /\b__p\+='';/g, C = /\b(__p\+=)''\+/g, E = /(__e\(.*?\)|\b__t\))\+'';/g, O = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, S = /\w*$/, A = /^\s*function[ \n\r\t]+\w/, I = /<%=([\s\S]+?)%>/g, D = RegExp('^[' + j + ']*0+(?=.$)'), N = /($^)/, B = /\bthis\b/, P = /['\n\r\t\u2028\u2029\\]/g, R = 'Array Boolean Date Error Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout'.split(' '), F = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(' '), T = '[object Arguments]', $ = '[object Array]', L = '[object Boolean]', z = '[object Date]', q = '[object Error]', K = '[object Function]', W = '[object Number]', G = '[object Object]', J = '[object RegExp]', M = '[object String]', V = {};
  V[K] = false, V[T] = V[$] = V[L] = V[z] = V[W] = V[G] = V[J] = V[M] = true;
  var H = {
      leading: false,
      maxWait: 0,
      trailing: false
    }, U = {
      configurable: false,
      enumerable: false,
      value: null,
      writable: false
    }, Q = {
      a: '',
      b: null,
      c: '',
      d: '',
      e: '',
      v: null,
      g: '',
      h: null,
      support: null,
      i: '',
      j: false
    }, X = {
      'boolean': false,
      'function': true,
      object: true,
      number: false,
      string: false,
      undefined: false
    }, Y = {
      '\\': '\\',
      '\'': '\'',
      '\n': 'n',
      '\r': 'r',
      '\t': 't',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    }, Z = X[typeof window] && window || this, nt = X[typeof exports] && exports && !exports.nodeType && exports, tt = X[typeof module] && module && !module.nodeType && module, et = tt && tt.exports === nt && nt, rt = X[typeof global] && global;
  !rt || rt.global !== rt && rt.window !== rt || (Z = rt);
  var ut = g();
  typeof define == 'function' && typeof define.amd == 'object' && define.amd ? (Z._ = ut, define(function () {
    return ut;
  })) : nt && tt ? et ? (tt.exports = ut)._ = ut : nt._ = ut : Z._ = ut;
}.call(this));
/**
 * State-based routing for AngularJS
 * @version v0.2.10
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
/* commonjs package manager support (eg componentjs) */
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'ui.router';
}
(function (window, angular, undefined) {
  /*jshint globalstrict:true*/
  /*global angular:false*/
  'use strict';
  var isDefined = angular.isDefined, isFunction = angular.isFunction, isString = angular.isString, isObject = angular.isObject, isArray = angular.isArray, forEach = angular.forEach, extend = angular.extend, copy = angular.copy;
  function inherit(parent, extra) {
    return extend(new (extend(function () {
    }, { prototype: parent }))(), extra);
  }
  function merge(dst) {
    forEach(arguments, function (obj) {
      if (obj !== dst) {
        forEach(obj, function (value, key) {
          if (!dst.hasOwnProperty(key))
            dst[key] = value;
        });
      }
    });
    return dst;
  }
  /**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
  function ancestors(first, second) {
    var path = [];
    for (var n in first.path) {
      if (first.path[n] !== second.path[n])
        break;
      path.push(first.path[n]);
    }
    return path;
  }
  /**
 * IE8-safe wrapper for `Object.keys()`.
 *
 * @param {Object} object A JavaScript object.
 * @return {Array} Returns the keys of the object as an array.
 */
  function keys(object) {
    if (Object.keys) {
      return Object.keys(object);
    }
    var result = [];
    angular.forEach(object, function (val, key) {
      result.push(key);
    });
    return result;
  }
  /**
 * IE8-safe wrapper for `Array.prototype.indexOf()`.
 *
 * @param {Array} array A JavaScript array.
 * @param {*} value A value to search the array for.
 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
 */
  function arraySearch(array, value) {
    if (Array.prototype.indexOf) {
      return array.indexOf(value, Number(arguments[2]) || 0);
    }
    var len = array.length >>> 0, from = Number(arguments[2]) || 0;
    from = from < 0 ? Math.ceil(from) : Math.floor(from);
    if (from < 0)
      from += len;
    for (; from < len; from++) {
      if (from in array && array[from] === value)
        return from;
    }
    return -1;
  }
  /**
 * Merges a set of parameters with all parameters inherited between the common parents of the
 * current state and a given destination state.
 *
 * @param {Object} currentParams The value of the current state parameters ($stateParams).
 * @param {Object} newParams The set of parameters which will be composited with inherited params.
 * @param {Object} $current Internal definition of object representing the current state.
 * @param {Object} $to Internal definition of object representing state to transition to.
 */
  function inheritParams(currentParams, newParams, $current, $to) {
    var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];
    for (var i in parents) {
      if (!parents[i].params || !parents[i].params.length)
        continue;
      parentParams = parents[i].params;
      for (var j in parentParams) {
        if (arraySearch(inheritList, parentParams[j]) >= 0)
          continue;
        inheritList.push(parentParams[j]);
        inherited[parentParams[j]] = currentParams[parentParams[j]];
      }
    }
    return extend({}, inherited, newParams);
  }
  /**
 * Normalizes a set of values to string or `null`, filtering them by a list of keys.
 *
 * @param {Array} keys The list of keys to normalize/return.
 * @param {Object} values An object hash of values to normalize.
 * @return {Object} Returns an object hash of normalized string values.
 */
  function normalize(keys, values) {
    var normalized = {};
    forEach(keys, function (name) {
      var value = values[name];
      normalized[name] = value != null ? String(value) : null;
    });
    return normalized;
  }
  /**
 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
 *
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
 *                     it defaults to the list of keys in `a`.
 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
 */
  function equalForKeys(a, b, keys) {
    if (!keys) {
      keys = [];
      for (var n in a)
        keys.push(n);  // Used instead of Object.keys() for IE8 compatibility
    }
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (a[k] != b[k])
        return false;  // Not '===', values aren't necessarily normalized
    }
    return true;
  }
  /**
 * Returns the subset of an object, based on a list of keys.
 *
 * @param {Array} keys
 * @param {Object} values
 * @return {Boolean} Returns a subset of `values`.
 */
  function filterByKeys(keys, values) {
    var filtered = {};
    forEach(keys, function (name) {
      filtered[name] = values[name];
    });
    return filtered;
  }
  /**
 * @ngdoc overview
 * @name ui.router.util
 *
 * @description
 * # ui.router.util sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 *
 */
  angular.module('ui.router.util', ['ng']);
  /**
 * @ngdoc overview
 * @name ui.router.router
 * 
 * @requires ui.router.util
 *
 * @description
 * # ui.router.router sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 */
  angular.module('ui.router.router', ['ui.router.util']);
  /**
 * @ngdoc overview
 * @name ui.router.state
 * 
 * @requires ui.router.router
 * @requires ui.router.util
 *
 * @description
 * # ui.router.state sub-module
 *
 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 * 
 */
  angular.module('ui.router.state', [
    'ui.router.router',
    'ui.router.util'
  ]);
  /**
 * @ngdoc overview
 * @name ui.router
 *
 * @requires ui.router.state
 *
 * @description
 * # ui.router
 * 
 * ## The main module for ui.router 
 * There are several sub-modules included with the ui.router module, however only this module is needed
 * as a dependency within your angular app. The other modules are for organization purposes. 
 *
 * The modules are:
 * * ui.router - the main "umbrella" module
 * * ui.router.router - 
 * 
 * *You'll need to include **only** this module as the dependency within your angular app.*
 * 
 * <pre>
 * <!doctype html>
 * <html ng-app="myApp">
 * <head>
 *   <script src="js/angular.js"></script>
 *   <!-- Include the ui-router script -->
 *   <script src="js/angular-ui-router.min.js"></script>
 *   <script>
 *     // ...and add 'ui.router' as a dependency
 *     var myApp = angular.module('myApp', ['ui.router']);
 *   </script>
 * </head>
 * <body>
 * </body>
 * </html>
 * </pre>
 */
  angular.module('ui.router', ['ui.router.state']);
  angular.module('ui.router.compat', ['ui.router']);
  /**
 * @ngdoc object
 * @name ui.router.util.$resolve
 *
 * @requires $q
 * @requires $injector
 *
 * @description
 * Manages resolution of (acyclic) graphs of promises.
 */
  $Resolve.$inject = [
    '$q',
    '$injector'
  ];
  function $Resolve($q, $injector) {
    var VISIT_IN_PROGRESS = 1, VISIT_DONE = 2, NOTHING = {}, NO_DEPENDENCIES = [], NO_LOCALS = NOTHING, NO_PARENT = extend($q.when(NOTHING), {
        $$promises: NOTHING,
        $$values: NOTHING
      });
    /**
   * @ngdoc function
   * @name ui.router.util.$resolve#study
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Studies a set of invocables that are likely to be used multiple times.
   * <pre>
   * $resolve.study(invocables)(locals, parent, self)
   * </pre>
   * is equivalent to
   * <pre>
   * $resolve.resolve(invocables, locals, parent, self)
   * </pre>
   * but the former is more efficient (in fact `resolve` just calls `study` 
   * internally).
   *
   * @param {object} invocables Invocable objects
   * @return {function} a function to pass in locals, parent and self
   */
    this.study = function (invocables) {
      if (!isObject(invocables))
        throw new Error('\'invocables\' must be an object');
      // Perform a topological sort of invocables to build an ordered plan
      var plan = [], cycle = [], visited = {};
      function visit(value, key) {
        if (visited[key] === VISIT_DONE)
          return;
        cycle.push(key);
        if (visited[key] === VISIT_IN_PROGRESS) {
          cycle.splice(0, cycle.indexOf(key));
          throw new Error('Cyclic dependency: ' + cycle.join(' -> '));
        }
        visited[key] = VISIT_IN_PROGRESS;
        if (isString(value)) {
          plan.push(key, [function () {
              return $injector.get(value);
            }], NO_DEPENDENCIES);
        } else {
          var params = $injector.annotate(value);
          forEach(params, function (param) {
            if (param !== key && invocables.hasOwnProperty(param))
              visit(invocables[param], param);
          });
          plan.push(key, value, params);
        }
        cycle.pop();
        visited[key] = VISIT_DONE;
      }
      forEach(invocables, visit);
      invocables = cycle = visited = null;
      // plan is all that's required
      function isResolve(value) {
        return isObject(value) && value.then && value.$$promises;
      }
      return function (locals, parent, self) {
        if (isResolve(locals) && self === undefined) {
          self = parent;
          parent = locals;
          locals = null;
        }
        if (!locals)
          locals = NO_LOCALS;
        else if (!isObject(locals)) {
          throw new Error('\'locals\' must be an object');
        }
        if (!parent)
          parent = NO_PARENT;
        else if (!isResolve(parent)) {
          throw new Error('\'parent\' must be a promise returned by $resolve.resolve()');
        }
        // To complete the overall resolution, we have to wait for the parent
        // promise and for the promise for each invokable in our plan.
        var resolution = $q.defer(), result = resolution.promise, promises = result.$$promises = {}, values = extend({}, locals), wait = 1 + plan.length / 3, merged = false;
        function done() {
          // Merge parent values we haven't got yet and publish our own $$values
          if (!--wait) {
            if (!merged)
              merge(values, parent.$$values);
            result.$$values = values;
            result.$$promises = true;
            // keep for isResolve()
            resolution.resolve(values);
          }
        }
        function fail(reason) {
          result.$$failure = reason;
          resolution.reject(reason);
        }
        // Short-circuit if parent has already failed
        if (isDefined(parent.$$failure)) {
          fail(parent.$$failure);
          return result;
        }
        // Merge parent values if the parent has already resolved, or merge
        // parent promises and wait if the parent resolve is still in progress.
        if (parent.$$values) {
          merged = merge(values, parent.$$values);
          done();
        } else {
          extend(promises, parent.$$promises);
          parent.then(done, fail);
        }
        // Process each invocable in the plan, but ignore any where a local of the same name exists.
        for (var i = 0, ii = plan.length; i < ii; i += 3) {
          if (locals.hasOwnProperty(plan[i]))
            done();
          else
            invoke(plan[i], plan[i + 1], plan[i + 2]);
        }
        function invoke(key, invocable, params) {
          // Create a deferred for this invocation. Failures will propagate to the resolution as well.
          var invocation = $q.defer(), waitParams = 0;
          function onfailure(reason) {
            invocation.reject(reason);
            fail(reason);
          }
          // Wait for any parameter that we have a promise for (either from parent or from this
          // resolve; in that case study() will have made sure it's ordered before us in the plan).
          forEach(params, function (dep) {
            if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
              waitParams++;
              promises[dep].then(function (result) {
                values[dep] = result;
                if (!--waitParams)
                  proceed();
              }, onfailure);
            }
          });
          if (!waitParams)
            proceed();
          function proceed() {
            if (isDefined(result.$$failure))
              return;
            try {
              invocation.resolve($injector.invoke(invocable, self, values));
              invocation.promise.then(function (result) {
                values[key] = result;
                done();
              }, onfailure);
            } catch (e) {
              onfailure(e);
            }
          }
          // Publish promise synchronously; invocations further down in the plan may depend on it.
          promises[key] = invocation.promise;
        }
        return result;
      };
    };
    /**
   * @ngdoc function
   * @name ui.router.util.$resolve#resolve
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Resolves a set of invocables. An invocable is a function to be invoked via 
   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
   * An invocable can either return a value directly,
   * or a `$q` promise. If a promise is returned it will be resolved and the 
   * resulting value will be used instead. Dependencies of invocables are resolved 
   * (in this order of precedence)
   *
   * - from the specified `locals`
   * - from another invocable that is part of this `$resolve` call
   * - from an invocable that is inherited from a `parent` call to `$resolve` 
   *   (or recursively
   * - from any ancestor `$resolve` of that parent).
   *
   * The return value of `$resolve` is a promise for an object that contains 
   * (in this order of precedence)
   *
   * - any `locals` (if specified)
   * - the resolved return values of all injectables
   * - any values inherited from a `parent` call to `$resolve` (if specified)
   *
   * The promise will resolve after the `parent` promise (if any) and all promises 
   * returned by injectables have been resolved. If any invocable 
   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
   * same error. A rejection of a `parent` promise (if specified) will likewise be 
   * propagated immediately. Once the `$resolve` promise has been rejected, no 
   * further invocables will be called.
   * 
   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
   * to throw an error. As a special case, an injectable can depend on a parameter 
   * with the same name as the injectable, which will be fulfilled from the `parent` 
   * injectable of the same name. This allows inherited values to be decorated. 
   * Note that in this case any other injectable in the same `$resolve` with the same
   * dependency would see the decorated value, not the inherited value.
   *
   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
   * exception.
   *
   * Invocables are invoked eagerly as soon as all dependencies are available. 
   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
   *
   * As a special case, an invocable can be a string, in which case it is taken to 
   * be a service name to be passed to `$injector.get()`. This is supported primarily 
   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
   * routes.
   *
   * @param {object} invocables functions to invoke or 
   * `$injector` services to fetch.
   * @param {object} locals  values to make available to the injectables
   * @param {object} parent  a promise returned by another call to `$resolve`.
   * @param {object} self  the `this` for the invoked methods
   * @return {object} Promise for an object that contains the resolved return value
   * of all invocables, as well as any inherited and local values.
   */
    this.resolve = function (invocables, locals, parent, self) {
      return this.study(invocables)(locals, parent, self);
    };
  }
  angular.module('ui.router.util').service('$resolve', $Resolve);
  /**
 * @ngdoc object
 * @name ui.router.util.$templateFactory
 *
 * @requires $http
 * @requires $templateCache
 * @requires $injector
 *
 * @description
 * Service. Manages loading of templates.
 */
  $TemplateFactory.$inject = [
    '$http',
    '$templateCache',
    '$injector'
  ];
  function $TemplateFactory($http, $templateCache, $injector) {
    /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromConfig
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a configuration object. 
   *
   * @param {object} config Configuration object for which to load a template. 
   * The following properties are search in the specified order, and the first one 
   * that is defined is used to create the template:
   *
   * @param {string|object} config.template html string template or function to 
   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
   * @param {string|object} config.templateUrl url to load or a function returning 
   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
   * @param {Function} config.templateProvider function to invoke via 
   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
   * @param {object} params  Parameters to pass to the template function.
   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
   * via a `templateProvider`. Defaults to `{ params: params }`.
   *
   * @return {string|object}  The template html as a string, or a promise for 
   * that string,or `null` if no template is configured.
   */
    this.fromConfig = function (config, params, locals) {
      return isDefined(config.template) ? this.fromString(config.template, params) : isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) : isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) : null;
    };
    /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromString
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a string or a function returning a string.
   *
   * @param {string|object} template html template as a string or function that 
   * returns an html template as a string.
   * @param {object} params Parameters to pass to the template function.
   *
   * @return {string|object} The template html as a string, or a promise for that 
   * string.
   */
    this.fromString = function (template, params) {
      return isFunction(template) ? template(params) : template;
    };
    /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   * 
   * @description
   * Loads a template from the a URL via `$http` and `$templateCache`.
   *
   * @param {string|Function} url url of the template to load, or a function 
   * that returns a url.
   * @param {Object} params Parameters to pass to the url function.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
    this.fromUrl = function (url, params) {
      if (isFunction(url))
        url = url(params);
      if (url == null)
        return null;
      else
        return $http.get(url, { cache: $templateCache }).then(function (response) {
          return response.data;
        });
    };
    /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template by invoking an injectable provider function.
   *
   * @param {Function} provider Function to invoke via `$injector.invoke`
   * @param {Object} params Parameters for the template.
   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
   * `{ params: params }`.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
    this.fromProvider = function (provider, params, locals) {
      return $injector.invoke(provider, null, locals || { params: params });
    };
  }
  angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);
  /**
 * @ngdoc object
 * @name ui.router.util.type:UrlMatcher
 *
 * @description
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
 * 
 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
 * syntax, which optionally allows a regular expression for the parameter to be specified:
 *
 * * `':'` name - colon placeholder
 * * `'*'` name - catch-all placeholder
 * * `'{' name '}'` - curly placeholder
 * * `'{' name ':' regexp '}'` - curly placeholder with regexp. Should the regexp itself contain
 *   curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters). For colon 
 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
 * number of characters other than '/'. For catch-all placeholders the path parameter matches
 * any number of characters.
 * 
 * Examples:
 * 
 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
 * * `'/user/{id:[^/]*}'` - Same as the previous example.
 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * `'/files/*path'` - ditto.
 *
 * @param {string} pattern  the pattern to compile into a matcher.
 *
 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
 *   non-null) will start with this prefix.
 *
 * @property {string} source  The pattern that was passed into the contructor
 *
 * @property {string} sourcePath  The path portion of the source property
 *
 * @property {string} sourceSearch  The search portion of the source property
 *
 * @property {string} regex  The constructed regex that will be used to match against the url when 
 *   it is time to determine which url will match.
 *
 * @returns {Object}  New UrlMatcher object
 */
  function UrlMatcher(pattern) {
    // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
    //   '*' name
    //   ':' name
    //   '{' name '}'
    //   '{' name ':' regexp '}'
    // The regular expression is somewhat complicated due to the need to allow curly braces
    // inside the regular expression. The placeholder regexp breaks down as follows:
    //    ([:*])(\w+)               classic placeholder ($1 / $2)
    //    \{(\w+)(?:\:( ... ))?\}   curly brace placeholder ($3) with optional regexp ... ($4)
    //    (?: ... | ... | ... )+    the regexp consists of any number of atoms, an atom being either
    //    [^{}\\]+                  - anything other than curly braces or backslash
    //    \\.                       - a backslash escape
    //    \{(?:[^{}\\]+|\\.)*\}     - a matched set of curly braces containing other atoms
    var placeholder = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, names = {}, compiled = '^', last = 0, m, segments = this.segments = [], params = this.params = [];
    function addParameter(id) {
      if (!/^\w+(-+\w+)*$/.test(id))
        throw new Error('Invalid parameter name \'' + id + '\' in pattern \'' + pattern + '\'');
      if (names[id])
        throw new Error('Duplicate parameter name \'' + id + '\' in pattern \'' + pattern + '\'');
      names[id] = true;
      params.push(id);
    }
    function quoteRegExp(string) {
      return string.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
    }
    this.source = pattern;
    // Split into static segments separated by path parameter placeholders.
    // The number of segments is always 1 more than the number of parameters.
    var id, regexp, segment;
    while (m = placeholder.exec(pattern)) {
      id = m[2] || m[3];
      // IE[78] returns '' for unmatched groups instead of null
      regexp = m[4] || (m[1] == '*' ? '.*' : '[^/]*');
      segment = pattern.substring(last, m.index);
      if (segment.indexOf('?') >= 0)
        break;
      // we're into the search part
      compiled += quoteRegExp(segment) + '(' + regexp + ')';
      addParameter(id);
      segments.push(segment);
      last = placeholder.lastIndex;
    }
    segment = pattern.substring(last);
    // Find any search parameter names and remove them from the last segment
    var i = segment.indexOf('?');
    if (i >= 0) {
      var search = this.sourceSearch = segment.substring(i);
      segment = segment.substring(0, i);
      this.sourcePath = pattern.substring(0, last + i);
      // Allow parameters to be separated by '?' as well as '&' to make concat() easier
      forEach(search.substring(1).split(/[&?]/), addParameter);
    } else {
      this.sourcePath = pattern;
      this.sourceSearch = '';
    }
    compiled += quoteRegExp(segment) + '$';
    segments.push(segment);
    this.regexp = new RegExp(compiled);
    this.prefix = segments[0];
  }
  /**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#concat
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns a new matcher for a pattern constructed by appending the path part and adding the
 * search parameters of the specified pattern to this pattern. The current pattern is not
 * modified. This can be understood as creating a pattern for URLs that are relative to (or
 * suffixes of) the current pattern.
 *
 * @example
 * The following two matchers are equivalent:
 * ```
 * new UrlMatcher('/user/{id}?q').concat('/details?date');
 * new UrlMatcher('/user/{id}/details?q&date');
 * ```
 *
 * @param {string} pattern  The pattern to append.
 * @returns {ui.router.util.type:UrlMatcher}  A matcher for the concatenated pattern.
 */
  UrlMatcher.prototype.concat = function (pattern) {
    // Because order of search parameters is irrelevant, we can add our own search
    // parameters to the end of the new pattern. Parse the new pattern by itself
    // and then join the bits together, but it's much easier to do this on a string level.
    return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch);
  };
  UrlMatcher.prototype.toString = function () {
    return this.source;
  };
  /**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#exec
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Tests the specified path against this matcher, and returns an object containing the captured
 * parameter values, or null if the path does not match. The returned object contains the values
 * of any search parameters that are mentioned in the pattern, but their value may be null if
 * they are not present in `searchParams`. This means that search parameters are always treated
 * as optional.
 *
 * @example
 * ```
 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', { x:'1', q:'hello' });
 * // returns { id:'bob', q:'hello', r:null }
 * ```
 *
 * @param {string} path  The URL path to match, e.g. `$location.path()`.
 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
 * @returns {Object}  The captured parameter values.
 */
  UrlMatcher.prototype.exec = function (path, searchParams) {
    var m = this.regexp.exec(path);
    if (!m)
      return null;
    var params = this.params, nTotal = params.length, nPath = this.segments.length - 1, values = {}, i;
    if (nPath !== m.length - 1)
      throw new Error('Unbalanced capture group in route \'' + this.source + '\'');
    for (i = 0; i < nPath; i++)
      values[params[i]] = m[i + 1];
    for (; i < nTotal; i++)
      values[params[i]] = searchParams[params[i]];
    return values;
  };
  /**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#parameters
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns the names of all path and search parameters of this pattern in an unspecified order.
 * 
 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
 *    pattern has no parameters, an empty array is returned.
 */
  UrlMatcher.prototype.parameters = function () {
    return this.params;
  };
  /**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#format
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Creates a URL that matches this pattern by substituting the specified values
 * for the path and search parameters. Null values for path parameters are
 * treated as empty strings.
 *
 * @example
 * ```
 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
 * // returns '/user/bob?q=yes'
 * ```
 *
 * @param {Object} values  the values to substitute for the parameters in this pattern.
 * @returns {string}  the formatted URL (path and optionally search part).
 */
  UrlMatcher.prototype.format = function (values) {
    var segments = this.segments, params = this.params;
    if (!values)
      return segments.join('');
    var nPath = segments.length - 1, nTotal = params.length, result = segments[0], i, search, value;
    for (i = 0; i < nPath; i++) {
      value = values[params[i]];
      // TODO: Maybe we should throw on null here? It's not really good style to use '' and null interchangeabley
      if (value != null)
        result += encodeURIComponent(value);
      result += segments[i + 1];
    }
    for (; i < nTotal; i++) {
      value = values[params[i]];
      if (value != null) {
        result += (search ? '&' : '?') + params[i] + '=' + encodeURIComponent(value);
        search = true;
      }
    }
    return result;
  };
  /**
 * @ngdoc object
 * @name ui.router.util.$urlMatcherFactory
 *
 * @description
 * Factory for {@link ui.router.util.type:UrlMatcher} instances. The factory is also available to providers
 * under the name `$urlMatcherFactoryProvider`.
 */
  function $UrlMatcherFactory() {
    /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#compile
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Creates a {@link ui.router.util.type:UrlMatcher} for the specified pattern.
   *   
   * @param {string} pattern  The URL pattern.
   * @returns {ui.router.util.type:UrlMatcher}  The UrlMatcher.
   */
    this.compile = function (pattern) {
      return new UrlMatcher(pattern);
    };
    /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#isMatcher
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Returns true if the specified object is a UrlMatcher, or false otherwise.
   *
   * @param {Object} object  The object to perform the type check against.
   * @returns {Boolean}  Returns `true` if the object has the following functions: `exec`, `format`, and `concat`.
   */
    this.isMatcher = function (o) {
      return isObject(o) && isFunction(o.exec) && isFunction(o.format) && isFunction(o.concat);
    };
    /* No need to document $get, since it returns this */
    this.$get = function () {
      return this;
    };
  }
  // Register as a provider so it's available to other providers
  angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
  /**
 * @ngdoc object
 * @name ui.router.router.$urlRouterProvider
 *
 * @requires ui.router.util.$urlMatcherFactoryProvider
 *
 * @description
 * `$urlRouterProvider` has the responsibility of watching `$location`. 
 * When `$location` changes it runs through a list of rules one by one until a 
 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
 *
 * There are several methods on `$urlRouterProvider` that make it useful to use directly
 * in your module config.
 */
  $UrlRouterProvider.$inject = ['$urlMatcherFactoryProvider'];
  function $UrlRouterProvider($urlMatcherFactory) {
    var rules = [], otherwise = null;
    // Returns a string that is a prefix of all strings matching the RegExp
    function regExpPrefix(re) {
      var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
      return prefix != null ? prefix[1].replace(/\\(.)/g, '$1') : '';
    }
    // Interpolates matched values into a String.replace()-style pattern
    function interpolate(pattern, match) {
      return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
        return match[what === '$' ? 0 : Number(what)];
      });
    }
    /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#rule
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines rules that are used by `$urlRouterProvider to find matches for
   * specific URLs.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // Here's an example of how you might allow case insensitive urls
   *   $urlRouterProvider.rule(function ($injector, $location) {
   *     var path = $location.path(),
   *         normalized = path.toLowerCase();
   *
   *     if (path !== normalized) {
   *       return normalized;
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {object} rule Handler function that takes `$injector` and `$location`
   * services as arguments. You can use them to return a valid path as a string.
   *
   * @return {object} $urlRouterProvider - $urlRouterProvider instance
   */
    this.rule = function (rule) {
      if (!isFunction(rule))
        throw new Error('\'rule\' must be a function');
      rules.push(rule);
      return this;
    };
    /**
   * @ngdoc object
   * @name ui.router.router.$urlRouterProvider#otherwise
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines a path that is used when an invalied route is requested.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // if the path doesn't match any of the urls you configured
   *   // otherwise will take care of routing the user to the
   *   // specified url
   *   $urlRouterProvider.otherwise('/index');
   *
   *   // Example of using function rule as param
   *   $urlRouterProvider.otherwise(function ($injector, $location) {
   *     ...
   *   });
   * });
   * </pre>
   *
   * @param {string|object} rule The url path you want to redirect to or a function 
   * rule that returns the url path. The function version is passed two params: 
   * `$injector` and `$location` services.
   *
   * @return {object} $urlRouterProvider - $urlRouterProvider instance
   */
    this.otherwise = function (rule) {
      if (isString(rule)) {
        var redirect = rule;
        rule = function () {
          return redirect;
        };
      } else if (!isFunction(rule))
        throw new Error('\'rule\' must be a function');
      otherwise = rule;
      return this;
    };
    function handleIfMatch($injector, handler, match) {
      if (!match)
        return false;
      var result = $injector.invoke(handler, handler, { $match: match });
      return isDefined(result) ? result : true;
    }
    /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#when
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Registers a handler for a given url matching. if handle is a string, it is
   * treated as a redirect, and is interpolated according to the syyntax of match
   * (i.e. like String.replace() for RegExp, or like a UrlMatcher pattern otherwise).
   *
   * If the handler is a function, it is injectable. It gets invoked if `$location`
   * matches. You have the option of inject the match object as `$match`.
   *
   * The handler can return
   *
   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
   *   will continue trying to find another one that matches.
   * - **string** which is treated as a redirect and passed to `$location.url()`
   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
   *     if ($state.$current.navigable !== state ||
   *         !equalForKeys($match, $stateParams) {
   *      $state.transitionTo(state, $match, false);
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {string|object} what The incoming path that you want to redirect.
   * @param {string|object} handler The path you want to redirect your user to.
   */
    this.when = function (what, handler) {
      var redirect, handlerIsString = isString(handler);
      if (isString(what))
        what = $urlMatcherFactory.compile(what);
      if (!handlerIsString && !isFunction(handler) && !isArray(handler))
        throw new Error('invalid \'handler\' in when()');
      var strategies = {
          matcher: function (what, handler) {
            if (handlerIsString) {
              redirect = $urlMatcherFactory.compile(handler);
              handler = [
                '$match',
                function ($match) {
                  return redirect.format($match);
                }
              ];
            }
            return extend(function ($injector, $location) {
              return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
            }, { prefix: isString(what.prefix) ? what.prefix : '' });
          },
          regex: function (what, handler) {
            if (what.global || what.sticky)
              throw new Error('when() RegExp must not be global or sticky');
            if (handlerIsString) {
              redirect = handler;
              handler = [
                '$match',
                function ($match) {
                  return interpolate(redirect, $match);
                }
              ];
            }
            return extend(function ($injector, $location) {
              return handleIfMatch($injector, handler, what.exec($location.path()));
            }, { prefix: regExpPrefix(what) });
          }
        };
      var check = {
          matcher: $urlMatcherFactory.isMatcher(what),
          regex: what instanceof RegExp
        };
      for (var n in check) {
        if (check[n]) {
          return this.rule(strategies[n](what, handler));
        }
      }
      throw new Error('invalid \'what\' in when()');
    };
    /**
   * @ngdoc object
   * @name ui.router.router.$urlRouter
   *
   * @requires $location
   * @requires $rootScope
   * @requires $injector
   *
   * @description
   *
   */
    this.$get = [
      '$location',
      '$rootScope',
      '$injector',
      function ($location, $rootScope, $injector) {
        // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
        function update(evt) {
          if (evt && evt.defaultPrevented)
            return;
          function check(rule) {
            var handled = rule($injector, $location);
            if (handled) {
              if (isString(handled))
                $location.replace().url(handled);
              return true;
            }
            return false;
          }
          var n = rules.length, i;
          for (i = 0; i < n; i++) {
            if (check(rules[i]))
              return;
          }
          // always check otherwise last to allow dynamic updates to the set of rules
          if (otherwise)
            check(otherwise);
        }
        $rootScope.$on('$locationChangeSuccess', update);
        return {
          sync: function () {
            update();
          }
        };
      }
    ];
  }
  angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);
  /**
 * @ngdoc object
 * @name ui.router.state.$stateProvider
 *
 * @requires ui.router.router.$urlRouterProvider
 * @requires ui.router.util.$urlMatcherFactoryProvider
 * @requires $locationProvider
 *
 * @description
 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
 * on state.
 *
 * A state corresponds to a "place" in the application in terms of the overall UI and
 * navigation. A state describes (via the controller / template / view properties) what
 * the UI looks like and does at that place.
 *
 * States often have things in common, and the primary way of factoring out these
 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
 * nested states.
 *
 * The `$stateProvider` provides interfaces to declare these states for your app.
 */
  $StateProvider.$inject = [
    '$urlRouterProvider',
    '$urlMatcherFactoryProvider',
    '$locationProvider'
  ];
  function $StateProvider($urlRouterProvider, $urlMatcherFactory, $locationProvider) {
    var root, states = {}, $state, queue = {}, abstractKey = 'abstract';
    // Builds state properties from definition passed to registerState()
    var stateBuilder = {
        parent: function (state) {
          if (isDefined(state.parent) && state.parent)
            return findState(state.parent);
          // regex matches any valid composite state name
          // would match "contact.list" but not "contacts"
          var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
          return compositeName ? findState(compositeName[1]) : root;
        },
        data: function (state) {
          if (state.parent && state.parent.data) {
            state.data = state.self.data = extend({}, state.parent.data, state.data);
          }
          return state.data;
        },
        url: function (state) {
          var url = state.url;
          if (isString(url)) {
            if (url.charAt(0) == '^') {
              return $urlMatcherFactory.compile(url.substring(1));
            }
            return (state.parent.navigable || root).url.concat(url);
          }
          if ($urlMatcherFactory.isMatcher(url) || url == null) {
            return url;
          }
          throw new Error('Invalid url \'' + url + '\' in state \'' + state + '\'');
        },
        navigable: function (state) {
          return state.url ? state : state.parent ? state.parent.navigable : null;
        },
        params: function (state) {
          if (!state.params) {
            return state.url ? state.url.parameters() : state.parent.params;
          }
          if (!isArray(state.params))
            throw new Error('Invalid params in state \'' + state + '\'');
          if (state.url)
            throw new Error('Both params and url specicified in state \'' + state + '\'');
          return state.params;
        },
        views: function (state) {
          var views = {};
          forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
            if (name.indexOf('@') < 0)
              name += '@' + state.parent.name;
            views[name] = view;
          });
          return views;
        },
        ownParams: function (state) {
          if (!state.parent) {
            return state.params;
          }
          var paramNames = {};
          forEach(state.params, function (p) {
            paramNames[p] = true;
          });
          forEach(state.parent.params, function (p) {
            if (!paramNames[p]) {
              throw new Error('Missing required parameter \'' + p + '\' in state \'' + state.name + '\'');
            }
            paramNames[p] = false;
          });
          var ownParams = [];
          forEach(paramNames, function (own, p) {
            if (own)
              ownParams.push(p);
          });
          return ownParams;
        },
        path: function (state) {
          return state.parent ? state.parent.path.concat(state) : [];  // exclude root from path
        },
        includes: function (state) {
          var includes = state.parent ? extend({}, state.parent.includes) : {};
          includes[state.name] = true;
          return includes;
        },
        $delegates: {}
      };
    function isRelative(stateName) {
      return stateName.indexOf('.') === 0 || stateName.indexOf('^') === 0;
    }
    function findState(stateOrName, base) {
      var isStr = isString(stateOrName), name = isStr ? stateOrName : stateOrName.name, path = isRelative(name);
      if (path) {
        if (!base)
          throw new Error('No reference point given for path \'' + name + '\'');
        var rel = name.split('.'), i = 0, pathLength = rel.length, current = base;
        for (; i < pathLength; i++) {
          if (rel[i] === '' && i === 0) {
            current = base;
            continue;
          }
          if (rel[i] === '^') {
            if (!current.parent)
              throw new Error('Path \'' + name + '\' not valid for state \'' + base.name + '\'');
            current = current.parent;
            continue;
          }
          break;
        }
        rel = rel.slice(i).join('.');
        name = current.name + (current.name && rel ? '.' : '') + rel;
      }
      var state = states[name];
      if (state && (isStr || !isStr && (state === stateOrName || state.self === stateOrName))) {
        return state;
      }
      return undefined;
    }
    function queueState(parentName, state) {
      if (!queue[parentName]) {
        queue[parentName] = [];
      }
      queue[parentName].push(state);
    }
    function registerState(state) {
      // Wrap a new object around the state so we can store our private details easily.
      state = inherit(state, {
        self: state,
        resolve: state.resolve || {},
        toString: function () {
          return this.name;
        }
      });
      var name = state.name;
      if (!isString(name) || name.indexOf('@') >= 0)
        throw new Error('State must have a valid name');
      if (states.hasOwnProperty(name))
        throw new Error('State \'' + name + '\'\' is already defined');
      // Get parent name
      var parentName = name.indexOf('.') !== -1 ? name.substring(0, name.lastIndexOf('.')) : isString(state.parent) ? state.parent : '';
      // If parent is not registered yet, add state to queue and register later
      if (parentName && !states[parentName]) {
        return queueState(parentName, state.self);
      }
      for (var key in stateBuilder) {
        if (isFunction(stateBuilder[key]))
          state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
      }
      states[name] = state;
      // Register the state in the global state list and with $urlRouter if necessary.
      if (!state[abstractKey] && state.url) {
        $urlRouterProvider.when(state.url, [
          '$match',
          '$stateParams',
          function ($match, $stateParams) {
            if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
              $state.transitionTo(state, $match, { location: false });
            }
          }
        ]);
      }
      // Register any queued children
      if (queue[name]) {
        for (var i = 0; i < queue[name].length; i++) {
          registerState(queue[name][i]);
        }
      }
      return state;
    }
    // Checks text to see if it looks like a glob.
    function isGlob(text) {
      return text.indexOf('*') > -1;
    }
    // Returns true if glob matches current $state name.
    function doesStateMatchGlob(glob) {
      var globSegments = glob.split('.'), segments = $state.$current.name.split('.');
      //match greedy starts
      if (globSegments[0] === '**') {
        segments = segments.slice(segments.indexOf(globSegments[1]));
        segments.unshift('**');
      }
      //match greedy ends
      if (globSegments[globSegments.length - 1] === '**') {
        segments.splice(segments.indexOf(globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
        segments.push('**');
      }
      if (globSegments.length != segments.length) {
        return false;
      }
      //match single stars
      for (var i = 0, l = globSegments.length; i < l; i++) {
        if (globSegments[i] === '*') {
          segments[i] = '*';
        }
      }
      return segments.join('') === globSegments.join('');
    }
    // Implicit root state that is always active
    root = registerState({
      name: '',
      url: '^',
      views: null,
      'abstract': true
    });
    root.navigable = null;
    /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#decorator
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Allows you to extend (carefully) or override (at your own peril) the 
   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
   * to add custom functionality to ui-router, for example inferring templateUrl 
   * based on the state name.
   *
   * When passing only a name, it returns the current (original or decorated) builder
   * function that matches `name`.
   *
   * The builder functions that can be decorated are listed below. Though not all
   * necessarily have a good use case for decoration, that is up to you to decide.
   *
   * In addition, users can attach custom decorators, which will generate new 
   * properties within the state's internal definition. There is currently no clear 
   * use-case for this beyond accessing internal states (i.e. $state.$current), 
   * however, expect this to become increasingly relevant as we introduce additional 
   * meta-programming features.
   *
   * **Warning**: Decorators should not be interdependent because the order of 
   * execution of the builder functions in non-deterministic. Builder functions 
   * should only be dependent on the state definition object and super function.
   *
   *
   * Existing builder functions and current return values:
   *
   * - **parent** `{object}` - returns the parent state object.
   * - **data** `{object}` - returns state data, including any inherited data that is not
   *   overridden by own values (if any).
   * - **url** `{object}` - returns a {link ui.router.util.type:UrlMatcher} or null.
   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
   *   navigable).
   * - **params** `{object}` - returns an array of state params that are ensured to 
   *   be a super-set of parent's params.
   * - **views** `{object}` - returns a views object where each key is an absolute view 
   *   name (i.e. "viewName@stateName") and each value is the config object 
   *   (template, controller) for the view. Even when you don't use the views object 
   *   explicitly on a state config, one is still created for you internally.
   *   So by decorating this builder function you have access to decorating template 
   *   and controller properties.
   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
   *   not including any params defined by ancestor states.
   * - **path** `{string}` - returns the full path from the root down to this state. 
   *   Needed for state activation.
   * - **includes** `{object}` - returns an object that includes every state that 
   *   would pass a '$state.includes()' test.
   *
   * @example
   * <pre>
   * // Override the internal 'views' builder with a function that takes the state
   * // definition, and a reference to the internal function being overridden:
   * $stateProvider.decorator('views', function ($state, parent) {
   *   var result = {},
   *       views = parent(state);
   *
   *   angular.forEach(view, function (config, name) {
   *     var autoName = (state.name + '.' + name).replace('.', '/');
   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
   *     result[name] = config;
   *   });
   *   return result;
   * });
   *
   * $stateProvider.state('home', {
   *   views: {
   *     'contact.list': { controller: 'ListController' },
   *     'contact.item': { controller: 'ItemController' }
   *   }
   * });
   *
   * // ...
   *
   * $state.go('home');
   * // Auto-populates list and item views with /partials/home/contact/list.html,
   * // and /partials/home/contact/item.html, respectively.
   * </pre>
   *
   * @param {string} name The name of the builder function to decorate. 
   * @param {object} func A function that is responsible for decorating the original 
   * builder function. The function receives two parameters:
   *
   *   - `{object}` - state - The state config object.
   *   - `{object}` - super - The original builder function.
   *
   * @return {object} $stateProvider - $stateProvider instance
   */
    this.decorator = decorator;
    function decorator(name, func) {
      /*jshint validthis: true */
      if (isString(name) && !isDefined(func)) {
        return stateBuilder[name];
      }
      if (!isFunction(func) || !isString(name)) {
        return this;
      }
      if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
        stateBuilder.$delegates[name] = stateBuilder[name];
      }
      stateBuilder[name] = func;
      return this;
    }
    /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#state
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Registers a state configuration under a given state name. The stateConfig object
   * has the following acceptable properties.
   *
   * <a id='template'></a>
   *
   * - **`template`** - {string|function=} - html template as a string or a function that returns
   *   an html template as a string which should be used by the uiView directives. This property 
   *   takes precedence over templateUrl.
   *   
   *   If `template` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
   *     applying the current state
   *
   * <a id='templateUrl'></a>
   *
   * - **`templateUrl`** - {string|function=} - path or function that returns a path to an html 
   *   template that should be used by uiView.
   *   
   *   If `templateUrl` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
   *     applying the current state
   *
   * <a id='templateProvider'></a>
   *
   * - **`templateProvider`** - {function=} - Provider function that returns HTML content
   *   string.
   *
   * <a id='controller'></a>
   *
   * - **`controller`** - {string|function=} -  Controller fn that should be associated with newly 
   *   related scope or the name of a registered controller if passed as a string.
   *
   * <a id='controllerProvider'></a>
   *
   * - **`controllerProvider`** - {function=} - Injectable provider function that returns
   *   the actual controller or string.
   *
   * <a id='controllerAs'></a>
   * 
   * - **`controllerAs`** – {string=} – A controller alias name. If present the controller will be 
   *   published to scope under the controllerAs name.
   *
   * <a id='resolve'></a>
   *
   * - **`resolve`** - {object.&lt;string, function&gt;=} - An optional map of dependencies which 
   *   should be injected into the controller. If any of these dependencies are promises, 
   *   the router will wait for them all to be resolved or one to be rejected before the 
   *   controller is instantiated. If all the promises are resolved successfully, the values 
   *   of the resolved promises are injected and $stateChangeSuccess event is fired. If any 
   *   of the promises are rejected the $stateChangeError event is fired. The map object is:
   *   
   *   - key - {string}: name of dependency to be injected into controller
   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
   *     it is injected and return value it treated as dependency. If result is a promise, it is 
   *     resolved before its value is injected into controller.
   *
   * <a id='url'></a>
   *
   * - **`url`** - {string=} - A url with optional parameters. When a state is navigated or
   *   transitioned to, the `$stateParams` service will be populated with any 
   *   parameters that were passed.
   *
   * <a id='params'></a>
   *
   * - **`params`** - {object=} - An array of parameter names or regular expressions. Only 
   *   use this within a state if you are not using url. Otherwise you can specify your
   *   parameters within the url. When a state is navigated or transitioned to, the 
   *   $stateParams service will be populated with any parameters that were passed.
   *
   * <a id='views'></a>
   *
   * - **`views`** - {object=} - Use the views property to set up multiple views or to target views
   *   manually/explicitly.
   *
   * <a id='abstract'></a>
   *
   * - **`abstract`** - {boolean=} - An abstract state will never be directly activated, 
   *   but can provide inherited properties to its common children states.
   *
   * <a id='onEnter'></a>
   *
   * - **`onEnter`** - {object=} - Callback function for when a state is entered. Good way
   *   to trigger an action or dispatch an event, such as opening a dialog.
   *
   * <a id='onExit'></a>
   *
   * - **`onExit`** - {object=} - Callback function for when a state is exited. Good way to
   *   trigger an action or dispatch an event, such as opening a dialog.
   *
   * <a id='reloadOnSearch'></a>
   *
   * - **`reloadOnSearch = true`** - {boolean=} - If `false`, will not retrigger the same state 
   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
   *   Useful for when you'd like to modify $location.search() without triggering a reload.
   *
   * <a id='data'></a>
   *
   * - **`data`** - {object=} - Arbitrary data object, useful for custom configuration.
   *
   * @example
   * <pre>
   * // Some state name examples
   *
   * // stateName can be a single top-level name (must be unique).
   * $stateProvider.state("home", {});
   *
   * // Or it can be a nested state name. This state is a child of the 
   * // above "home" state.
   * $stateProvider.state("home.newest", {});
   *
   * // Nest states as deeply as needed.
   * $stateProvider.state("home.newest.abc.xyz.inception", {});
   *
   * // state() returns $stateProvider, so you can chain state declarations.
   * $stateProvider
   *   .state("home", {})
   *   .state("about", {})
   *   .state("contacts", {});
   * </pre>
   *
   * @param {string} name A unique state name, e.g. "home", "about", "contacts". 
   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
   * @param {object} definition State configuration object.
   */
    this.state = state;
    function state(name, definition) {
      /*jshint validthis: true */
      if (isObject(name))
        definition = name;
      else
        definition.name = name;
      registerState(definition);
      return this;
    }
    /**
   * @ngdoc object
   * @name ui.router.state.$state
   *
   * @requires $rootScope
   * @requires $q
   * @requires ui.router.state.$view
   * @requires $injector
   * @requires ui.router.util.$resolve
   * @requires ui.router.state.$stateParams
   *
   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
   * you'd like to test against the current active state.
   * @property {object} current A reference to the state's config object. However 
   * you passed it in. Useful for accessing custom data.
   * @property {object} transition Currently pending transition. A promise that'll 
   * resolve or reject.
   *
   * @description
   * `$state` service is responsible for representing states as well as transitioning
   * between them. It also provides interfaces to ask for current state or even states
   * you're coming from.
   */
    // $urlRouter is injected just to ensure it gets instantiated
    this.$get = $get;
    $get.$inject = [
      '$rootScope',
      '$q',
      '$view',
      '$injector',
      '$resolve',
      '$stateParams',
      '$location',
      '$urlRouter',
      '$browser'
    ];
    function $get($rootScope, $q, $view, $injector, $resolve, $stateParams, $location, $urlRouter, $browser) {
      var TransitionSuperseded = $q.reject(new Error('transition superseded'));
      var TransitionPrevented = $q.reject(new Error('transition prevented'));
      var TransitionAborted = $q.reject(new Error('transition aborted'));
      var TransitionFailed = $q.reject(new Error('transition failed'));
      var currentLocation = $location.url();
      var baseHref = $browser.baseHref();
      function syncUrl() {
        if ($location.url() !== currentLocation) {
          $location.url(currentLocation);
          $location.replace();
        }
      }
      root.locals = {
        resolve: null,
        globals: { $stateParams: {} }
      };
      $state = {
        params: {},
        current: root.self,
        $current: root,
        transition: null
      };
      /**
     * @ngdoc function
     * @name ui.router.state.$state#reload
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method that force reloads the current state. All resolves are re-resolved, events are not re-fired, 
     * and controllers reinstantiated (bug with controllers reinstantiating right now, fixing soon).
     *
     * @example
     * <pre>
     * var app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * </pre>
     *
     * `reload()` is just an alias for:
     * <pre>
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: false 
     * });
     * </pre>
     */
      $state.reload = function reload() {
        $state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: false,
          notify: false
        });
      };
      /**
     * @ngdoc function
     * @name ui.router.state.$state#go
     * @methodOf ui.router.state.$state
     *
     * @description
     * Convenience method for transitioning to a new state. `$state.go` calls 
     * `$state.transitionTo` internally but automatically sets options to 
     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
     * This allows you to easily use an absolute or relative to path and specify 
     * only the parameters you'd like to update (while letting unspecified parameters 
     * inherit from the currently active ancestor states).
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * </pre>
     * <img src='../ngdoc_assets/StateGoExamples.png'/>
     *
     * @param {string} to Absolute state name or relative state path. Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to a parent state
     * - `$state.go('^.sibling')` - will go to a sibling state
     * - `$state.go('.child.grandchild')` - will go to grandchild state
     *
     * @param {object=} params A map of the parameters that will be sent to the state, 
     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
     * defined parameters. This allows, for example, going to a sibling state that shares parameters
     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
     * will get you all current parameters, etc.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *
     * @returns {promise} A promise representing the state of the new transition.
     *
     * Possible success values:
     *
     * - $state.current
     *
     * <br/>Possible rejection values:
     *
     * - 'transition superseded' - when a newer transition has been started after this one
     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
     *   when a `$stateNotFound` `event.retry` promise errors.
     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
     * - *resolve error* - when an error has occurred with a `resolve`
     *
     */
      $state.go = function go(to, params, options) {
        return this.transitionTo(to, params, extend({
          inherit: true,
          relative: $state.$current
        }, options));
      };
      /**
     * @ngdoc function
     * @name ui.router.state.$state#transitionTo
     * @methodOf ui.router.state.$state
     *
     * @description
     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * </pre>
     *
     * @param {string} to State name.
     * @param {object=} toParams A map of the parameters that will be sent to the state,
     * will populate $stateParams.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *
     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
      $state.transitionTo = function transitionTo(to, toParams, options) {
        toParams = toParams || {};
        options = extend({
          location: true,
          inherit: false,
          relative: null,
          notify: true,
          reload: false,
          $retry: false
        }, options || {});
        var from = $state.$current, fromParams = $state.params, fromPath = from.path;
        var evt, toState = findState(to, options.relative);
        if (!isDefined(toState)) {
          // Broadcast not found event and abort the transition if prevented
          var redirect = {
              to: to,
              toParams: toParams,
              options: options
            };
          /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateNotFound
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when a requested state **cannot be found** using the provided state name during transition.
         * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
         * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
         * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
         * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
         *
         * @param {Object} event Event object.
         * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
         * @param {State} fromState Current state object.
         * @param {Object} fromParams Current state params.
         *
         * @example
         *
         * <pre>
         * // somewhere, assume lazy.state has not been defined
         * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
         *
         * // somewhere else
         * $scope.$on('$stateNotFound',
         * function(event, unfoundState, fromState, fromParams){
         *     console.log(unfoundState.to); // "lazy.state"
         *     console.log(unfoundState.toParams); // {a:1, b:2}
         *     console.log(unfoundState.options); // {inherit:false} + default options
         * })
         * </pre>
         */
          evt = $rootScope.$broadcast('$stateNotFound', redirect, from.self, fromParams);
          if (evt.defaultPrevented) {
            syncUrl();
            return TransitionAborted;
          }
          // Allow the handler to return a promise to defer state lookup retry
          if (evt.retry) {
            if (options.$retry) {
              syncUrl();
              return TransitionFailed;
            }
            var retryTransition = $state.transition = $q.when(evt.retry);
            retryTransition.then(function () {
              if (retryTransition !== $state.transition)
                return TransitionSuperseded;
              redirect.options.$retry = true;
              return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
            }, function () {
              return TransitionAborted;
            });
            syncUrl();
            return retryTransition;
          }
          // Always retry once if the $stateNotFound was not prevented
          // (handles either redirect changed or state lazy-definition)
          to = redirect.to;
          toParams = redirect.toParams;
          options = redirect.options;
          toState = findState(to, options.relative);
          if (!isDefined(toState)) {
            if (options.relative)
              throw new Error('Could not resolve \'' + to + '\' from state \'' + options.relative + '\'');
            throw new Error('No such state \'' + to + '\'');
          }
        }
        if (toState[abstractKey])
          throw new Error('Cannot transition to abstract state \'' + to + '\'');
        if (options.inherit)
          toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
        to = toState;
        var toPath = to.path;
        // Starting from the root of the path, keep all levels that haven't changed
        var keep, state, locals = root.locals, toLocals = [];
        for (keep = 0, state = toPath[keep]; state && state === fromPath[keep] && equalForKeys(toParams, fromParams, state.ownParams) && !options.reload; keep++, state = toPath[keep]) {
          locals = toLocals[keep] = state.locals;
        }
        // If we're going to the same state and all locals are kept, we've got nothing to do.
        // But clear 'transition', as we still want to cancel any other pending transitions.
        // TODO: We may not want to bump 'transition' if we're called from a location change that we've initiated ourselves,
        // because we might accidentally abort a legitimate transition initiated from code?
        if (shouldTriggerReload(to, from, locals, options)) {
          if (to.self.reloadOnSearch !== false)
            syncUrl();
          $state.transition = null;
          return $q.when($state.current);
        }
        // Normalize/filter parameters before we pass them to event handlers etc.
        toParams = normalize(to.params, toParams || {});
        // Broadcast start event and cancel the transition if requested
        if (options.notify) {
          /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeStart
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when the state transition **begins**. You can use `event.preventDefault()`
         * to prevent the transition from happening and then the transition promise will be
         * rejected with a `'transition prevented'` value.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         *
         * @example
         *
         * <pre>
         * $rootScope.$on('$stateChangeStart',
         * function(event, toState, toParams, fromState, fromParams){
         *     event.preventDefault();
         *     // transitionTo() promise will be rejected with
         *     // a 'transition prevented' error
         * })
         * </pre>
         */
          evt = $rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams);
          if (evt.defaultPrevented) {
            syncUrl();
            return TransitionPrevented;
          }
        }
        // Resolve locals for the remaining states, but don't update any global state just
        // yet -- if anything fails to resolve the current state needs to remain untouched.
        // We also set up an inheritance chain for the locals here. This allows the view directive
        // to quickly look up the correct definition for each view in the current state. Even
        // though we create the locals object itself outside resolveState(), it is initially
        // empty and gets filled asynchronously. We need to keep track of the promise for the
        // (fully resolved) current locals, and pass this down the chain.
        var resolved = $q.when(locals);
        for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
          locals = toLocals[l] = inherit(locals);
          resolved = resolveState(state, toParams, state === to, resolved, locals);
        }
        // Once everything is resolved, we are ready to perform the actual transition
        // and return a promise for the new state. We also keep track of what the
        // current promise is, so that we can detect overlapping transitions and
        // keep only the outcome of the last transition.
        var transition = $state.transition = resolved.then(function () {
            var l, entering, exiting;
            if ($state.transition !== transition)
              return TransitionSuperseded;
            // Exit 'from' states not kept
            for (l = fromPath.length - 1; l >= keep; l--) {
              exiting = fromPath[l];
              if (exiting.self.onExit) {
                $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
              }
              exiting.locals = null;
            }
            // Enter 'to' states not kept
            for (l = keep; l < toPath.length; l++) {
              entering = toPath[l];
              entering.locals = toLocals[l];
              if (entering.self.onEnter) {
                $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
              }
            }
            // Run it again, to catch any transitions in callbacks
            if ($state.transition !== transition)
              return TransitionSuperseded;
            // Update globals in $state
            $state.$current = to;
            $state.current = to.self;
            $state.params = toParams;
            copy($state.params, $stateParams);
            $state.transition = null;
            // Update $location
            var toNav = to.navigable;
            if (options.location && toNav) {
              $location.url(toNav.url.format(toNav.locals.globals.$stateParams));
              if (options.location === 'replace') {
                $location.replace();
              }
            }
            if (options.notify) {
              /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeSuccess
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired once the state transition is **complete**.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         */
              $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
            }
            currentLocation = $location.url();
            return $state.current;
          }, function (error) {
            if ($state.transition !== transition)
              return TransitionSuperseded;
            $state.transition = null;
            /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeError
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when an **error occurs** during transition. It's important to note that if you
         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
         * they will not throw traditionally. You must listen for this $stateChangeError event to
         * catch **ALL** errors.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         * @param {Error} error The resolve error object.
         */
            $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);
            syncUrl();
            return $q.reject(error);
          });
        return transition;
      };
      /**
     * @ngdoc function
     * @name ui.router.state.$state#is
     * @methodOf ui.router.state.$state
     *
     * @description
     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
     * but only checks for the full state name. If params is supplied then it will be 
     * tested for strict equality against the current active params object, so all params 
     * must match with none missing and no extras.
     *
     * @example
     * <pre>
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     *
     * // everything else would return false
     * </pre>
     *
     * @param {string|object} stateName The state name or state object you'd like to check.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like 
     * to test against the current active state.
     * @returns {boolean} Returns true if it is the state.
     */
      $state.is = function is(stateOrName, params) {
        var state = findState(stateOrName);
        if (!isDefined(state)) {
          return undefined;
        }
        if ($state.$current !== state) {
          return false;
        }
        return isDefined(params) && params !== null ? angular.equals($stateParams, params) : true;
      };
      /**
     * @ngdoc function
     * @name ui.router.state.$state#includes
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method to determine if the current active state is equal to or is the child of the 
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * @example
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     * </pre>
     *
     * @description
     * Basic globing patterns will also work.
     *
     * @example
     * <pre>
     * $state.$current.name = 'contacts.details.item.url';
     *
     * $state.includes("*.details.*.*"); // returns true
     * $state.includes("*.details.**"); // returns true
     * $state.includes("**.item.**"); // returns true
     * $state.includes("*.details.item.url"); // returns true
     * $state.includes("*.details.*.url"); // returns true
     * $state.includes("*.details.*"); // returns false
     * $state.includes("item.**"); // returns false
     * </pre>
     *
     * @param {string} stateOrName A partial name to be searched for within the current state name.
     * @param {object} params A param object, e.g. `{sectionId: section.id}`, 
     * that you'd like to test against the current active state.
     * @returns {boolean} Returns true if it does include the state
     */
      $state.includes = function includes(stateOrName, params) {
        if (isString(stateOrName) && isGlob(stateOrName)) {
          if (doesStateMatchGlob(stateOrName)) {
            stateOrName = $state.$current.name;
          } else {
            return false;
          }
        }
        var state = findState(stateOrName);
        if (!isDefined(state)) {
          return undefined;
        }
        if (!isDefined($state.$current.includes[state.name])) {
          return false;
        }
        var validParams = true;
        angular.forEach(params, function (value, key) {
          if (!isDefined($stateParams[key]) || $stateParams[key] !== value) {
            validParams = false;
          }
        });
        return validParams;
      };
      /**
     * @ngdoc function
     * @name ui.router.state.$state#href
     * @methodOf ui.router.state.$state
     *
     * @description
     * A url generation method that returns the compiled url for the given state populated with the given params.
     *
     * @example
     * <pre>
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * </pre>
     *
     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
     * @param {object=} params An object of parameter values to fill the state's required parameters.
     * @param {object=} options Options object. The options are:
     *
     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
     *    ancestor with a valid url).
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
     * 
     * @returns {string} compiled state url
     */
      $state.href = function href(stateOrName, params, options) {
        options = extend({
          lossy: true,
          inherit: false,
          absolute: false,
          relative: $state.$current
        }, options || {});
        var state = findState(stateOrName, options.relative);
        if (!isDefined(state))
          return null;
        params = inheritParams($stateParams, params || {}, $state.$current, state);
        var nav = state && options.lossy ? state.navigable : state;
        var url = nav && nav.url ? nav.url.format(normalize(state.params, params || {})) : null;
        if (!$locationProvider.html5Mode() && url) {
          url = '#' + $locationProvider.hashPrefix() + url;
        }
        if (baseHref !== '/') {
          if ($locationProvider.html5Mode()) {
            url = baseHref.slice(0, -1) + url;
          } else if (options.absolute) {
            url = baseHref.slice(1) + url;
          }
        }
        if (options.absolute && url) {
          url = $location.protocol() + '://' + $location.host() + ($location.port() == 80 || $location.port() == 443 ? '' : ':' + $location.port()) + (!$locationProvider.html5Mode() && url ? '/' : '') + url;
        }
        return url;
      };
      /**
     * @ngdoc function
     * @name ui.router.state.$state#get
     * @methodOf ui.router.state.$state
     *
     * @description
     * Returns the state configuration object for any specific state or all states.
     *
     * @param {string|object=} stateOrName If provided, will only get the config for
     * the requested state. If not provided, returns an array of ALL state configs.
     * @returns {object|array} State configuration object or array of all objects.
     */
      $state.get = function (stateOrName, context) {
        if (!isDefined(stateOrName)) {
          var list = [];
          forEach(states, function (state) {
            list.push(state.self);
          });
          return list;
        }
        var state = findState(stateOrName, context);
        return state && state.self ? state.self : null;
      };
      function resolveState(state, params, paramsAreFiltered, inherited, dst) {
        // Make a restricted $stateParams with only the parameters that apply to this state if
        // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
        // we also need $stateParams to be available for any $injector calls we make during the
        // dependency resolution process.
        var $stateParams = paramsAreFiltered ? params : filterByKeys(state.params, params);
        var locals = { $stateParams: $stateParams };
        // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
        // We're also including $stateParams in this; that way the parameters are restricted
        // to the set that should be visible to the state, and are independent of when we update
        // the global $state and $stateParams values.
        dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
        var promises = [dst.resolve.then(function (globals) {
              dst.globals = globals;
            })];
        if (inherited)
          promises.push(inherited);
        // Resolve template and dependencies for all views.
        forEach(state.views, function (view, name) {
          var injectables = view.resolve && view.resolve !== state.resolve ? view.resolve : {};
          injectables.$template = [function () {
              return $view.load(name, {
                view: view,
                locals: locals,
                params: $stateParams,
                notify: false
              }) || '';
            }];
          promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function (result) {
            // References to the controller (only instantiated at link time)
            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
              var injectLocals = angular.extend({}, injectables, locals);
              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
            } else {
              result.$$controller = view.controller;
            }
            // Provide access to the state itself for internal use
            result.$$state = state;
            result.$$controllerAs = view.controllerAs;
            dst[name] = result;
          }));
        });
        // Wait for all the promises and then return the activation object
        return $q.all(promises).then(function (values) {
          return dst;
        });
      }
      return $state;
    }
    function shouldTriggerReload(to, from, locals, options) {
      if (to === from && (locals === from.locals && !options.reload || to.self.reloadOnSearch === false)) {
        return true;
      }
    }
  }
  angular.module('ui.router.state').value('$stateParams', {}).provider('$state', $StateProvider);
  $ViewProvider.$inject = [];
  function $ViewProvider() {
    this.$get = $get;
    /**
   * @ngdoc object
   * @name ui.router.state.$view
   *
   * @requires ui.router.util.$templateFactory
   * @requires $rootScope
   *
   * @description
   *
   */
    $get.$inject = [
      '$rootScope',
      '$templateFactory'
    ];
    function $get($rootScope, $templateFactory) {
      return {
        load: function load(name, options) {
          var result, defaults = {
              template: null,
              controller: null,
              view: null,
              locals: null,
              notify: true,
              async: true,
              params: {}
            };
          options = extend(defaults, options);
          if (options.view) {
            result = $templateFactory.fromConfig(options.view, options.params, options.locals);
          }
          if (result && options.notify) {
            /**
         * @ngdoc event
         * @name ui.router.state.$state#$viewContentLoading
         * @eventOf ui.router.state.$view
         * @eventType broadcast on root scope
         * @description
         *
         * Fired once the view **begins loading**, *before* the DOM is rendered.
         *
         * @param {Object} event Event object.
         * @param {Object} viewConfig The view config properties (template, controller, etc).
         *
         * @example
         *
         * <pre>
         * $scope.$on('$viewContentLoading',
         * function(event, viewConfig){
         *     // Access to all the view config properties.
         *     // and one special property 'targetView'
         *     // viewConfig.targetView
         * });
         * </pre>
         */
            $rootScope.$broadcast('$viewContentLoading', options);
          }
          return result;
        }
      };
    }
  }
  angular.module('ui.router.state').provider('$view', $ViewProvider);
  /**
 * @ngdoc object
 * @name ui.router.state.$uiViewScrollProvider
 *
 * @description
 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
 */
  function $ViewScrollProvider() {
    var useAnchorScroll = false;
    /**
   * @ngdoc function
   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
   * @methodOf ui.router.state.$uiViewScrollProvider
   *
   * @description
   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
   * scrolling based on the url anchor.
   */
    this.useAnchorScroll = function () {
      useAnchorScroll = true;
    };
    /**
   * @ngdoc object
   * @name ui.router.state.$uiViewScroll
   *
   * @requires $anchorScroll
   * @requires $timeout
   *
   * @description
   * When called with a jqLite element, it scrolls the element into view (after a
   * `$timeout` so the DOM has time to refresh).
   *
   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
   */
    this.$get = [
      '$anchorScroll',
      '$timeout',
      function ($anchorScroll, $timeout) {
        if (useAnchorScroll) {
          return $anchorScroll;
        }
        return function ($element) {
          $timeout(function () {
            $element[0].scrollIntoView();
          }, 0, false);
        };
      }
    ];
  }
  angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);
  /**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-view
 *
 * @requires ui.router.state.$state
 * @requires $compile
 * @requires $controller
 * @requires $injector
 * @requires ui.router.state.$uiViewScroll
 * @requires $document
 *
 * @restrict ECA
 *
 * @description
 * The ui-view directive tells $state where to place your templates.
 *
 * @param {string=} ui-view A view name. The name should be unique amongst the other views in the
 * same state. You can have views of the same name that live in different states.
 *
 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
 * scroll ui-view elements into view when they are populated during a state activation.
 *
 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
 *
 * @param {string=} onload Expression to evaluate whenever the view updates.
 * 
 * @example
 * A view can be unnamed or named. 
 * <pre>
 * <!-- Unnamed -->
 * <div ui-view></div> 
 * 
 * <!-- Named -->
 * <div ui-view="viewName"></div>
 * </pre>
 *
 * You can only have one unnamed view within any template (or root html). If you are only using a 
 * single view and it is unnamed then you can populate it like so:
 * <pre>
 * <div ui-view></div> 
 * $stateProvider.state("home", {
 *   template: "<h1>HELLO!</h1>"
 * })
 * </pre>
 * 
 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
 * config property, by name, in this case an empty name:
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * But typically you'll only use the views property if you name your view or have more than one view 
 * in the same template. There's not really a compelling reason to name a view if its the only one, 
 * but you could if you wanted, like so:
 * <pre>
 * <div ui-view="main"></div>
 * </pre> 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "main": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * Really though, you'll use views to set up multiple views:
 * <pre>
 * <div ui-view></div>
 * <div ui-view="chart"></div> 
 * <div ui-view="data"></div> 
 * </pre>
 * 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     },
 *     "chart": {
 *       template: "<chart_thing/>"
 *     },
 *     "data": {
 *       template: "<data_thing/>"
 *     }
 *   }    
 * })
 * </pre>
 *
 * Examples for `autoscroll`:
 *
 * <pre>
 * <!-- If autoscroll present with no expression,
 *      then scroll ui-view into view -->
 * <ui-view autoscroll/>
 *
 * <!-- If autoscroll present with valid expression,
 *      then scroll ui-view into view if expression evaluates to true -->
 * <ui-view autoscroll='true'/>
 * <ui-view autoscroll='false'/>
 * <ui-view autoscroll='scopeVariable'/>
 * </pre>
 */
  $ViewDirective.$inject = [
    '$state',
    '$injector',
    '$uiViewScroll'
  ];
  function $ViewDirective($state, $injector, $uiViewScroll) {
    function getService() {
      return $injector.has ? function (service) {
        return $injector.has(service) ? $injector.get(service) : null;
      } : function (service) {
        try {
          return $injector.get(service);
        } catch (e) {
          return null;
        }
      };
    }
    var service = getService(), $animator = service('$animator'), $animate = service('$animate');
    // Returns a set of DOM manipulation functions based on which Angular version
    // it should use
    function getRenderer(attrs, scope) {
      var statics = function () {
        return {
          enter: function (element, target, cb) {
            target.after(element);
            cb();
          },
          leave: function (element, cb) {
            element.remove();
            cb();
          }
        };
      };
      if ($animate) {
        return {
          enter: function (element, target, cb) {
            $animate.enter(element, null, target, cb);
          },
          leave: function (element, cb) {
            $animate.leave(element, cb);
          }
        };
      }
      if ($animator) {
        var animate = $animator && $animator(scope, attrs);
        return {
          enter: function (element, target, cb) {
            animate.enter(element, null, target);
            cb();
          },
          leave: function (element, cb) {
            animate.leave(element);
            cb();
          }
        };
      }
      return statics();
    }
    var directive = {
        restrict: 'ECA',
        terminal: true,
        priority: 400,
        transclude: 'element',
        compile: function (tElement, tAttrs, $transclude) {
          return function (scope, $element, attrs) {
            var previousEl, currentEl, currentScope, latestLocals, onloadExp = attrs.onload || '', autoScrollExp = attrs.autoscroll, renderer = getRenderer(attrs, scope);
            scope.$on('$stateChangeSuccess', function () {
              updateView(false);
            });
            scope.$on('$viewContentLoading', function () {
              updateView(false);
            });
            updateView(true);
            function cleanupLastView() {
              if (previousEl) {
                previousEl.remove();
                previousEl = null;
              }
              if (currentScope) {
                currentScope.$destroy();
                currentScope = null;
              }
              if (currentEl) {
                renderer.leave(currentEl, function () {
                  previousEl = null;
                });
                previousEl = currentEl;
                currentEl = null;
              }
            }
            function updateView(firstTime) {
              var newScope = scope.$new(), name = currentEl && currentEl.data('$uiViewName'), previousLocals = name && $state.$current && $state.$current.locals[name];
              if (!firstTime && previousLocals === latestLocals)
                return;
              // nothing to do
              var clone = $transclude(newScope, function (clone) {
                  renderer.enter(clone, $element, function onUiViewEnter() {
                    if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                      $uiViewScroll(clone);
                    }
                  });
                  cleanupLastView();
                });
              latestLocals = $state.$current.locals[clone.data('$uiViewName')];
              currentEl = clone;
              currentScope = newScope;
              /**
           * @ngdoc event
           * @name ui.router.state.directive:ui-view#$viewContentLoaded
           * @eventOf ui.router.state.directive:ui-view
           * @eventType emits on ui-view directive scope
           * @description           *
           * Fired once the view is **loaded**, *after* the DOM is rendered.
           *
           * @param {Object} event Event object.
           */
              currentScope.$emit('$viewContentLoaded');
              currentScope.$eval(onloadExp);
            }
          };
        }
      };
    return directive;
  }
  $ViewDirectiveFill.$inject = [
    '$compile',
    '$controller',
    '$state'
  ];
  function $ViewDirectiveFill($compile, $controller, $state) {
    return {
      restrict: 'ECA',
      priority: -400,
      compile: function (tElement) {
        var initial = tElement.html();
        return function (scope, $element, attrs) {
          var name = attrs.uiView || attrs.name || '', inherited = $element.inheritedData('$uiView');
          if (name.indexOf('@') < 0) {
            name = name + '@' + (inherited ? inherited.state.name : '');
          }
          $element.data('$uiViewName', name);
          var current = $state.$current, locals = current && current.locals[name];
          if (!locals) {
            return;
          }
          $element.data('$uiView', {
            name: name,
            state: locals.$$state
          });
          $element.html(locals.$template ? locals.$template : initial);
          var link = $compile($element.contents());
          if (locals.$$controller) {
            locals.$scope = scope;
            var controller = $controller(locals.$$controller, locals);
            if (locals.$$controllerAs) {
              scope[locals.$$controllerAs] = controller;
            }
            $element.data('$ngControllerController', controller);
            $element.children().data('$ngControllerController', controller);
          }
          link(scope);
        };
      }
    };
  }
  angular.module('ui.router.state').directive('uiView', $ViewDirective);
  angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);
  function parseStateRef(ref) {
    var parsed = ref.replace(/\n/g, ' ').match(/^([^(]+?)\s*(\((.*)\))?$/);
    if (!parsed || parsed.length !== 4)
      throw new Error('Invalid state ref \'' + ref + '\'');
    return {
      state: parsed[1],
      paramExpr: parsed[3] || null
    };
  }
  function stateContext(el) {
    var stateData = el.parent().inheritedData('$uiView');
    if (stateData && stateData.state && stateData.state.name) {
      return stateData.state;
    }
  }
  /**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref
 *
 * @requires ui.router.state.$state
 * @requires $timeout
 *
 * @restrict A
 *
 * @description
 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
 * URL, the directive will automatically generate & update the `href` attribute via 
 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
 * the link will trigger a state transition with optional parameters. 
 *
 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
 * handled natively by the browser.
 *
 * You can also use relative state paths within ui-sref, just like the relative 
 * paths passed to `$state.go()`. You just need to be aware that the path is relative
 * to the state that the link lives in, in other words the state that loaded the 
 * template containing the link.
 *
 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
 * and `reload`.
 *
 * @example
 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
 * following template:
 * <pre>
 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a>
 * 
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
 *     </li>
 * </ul>
 * </pre>
 * 
 * Then the compiled html would be (assuming Html5Mode is off):
 * <pre>
 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a>
 * 
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
 *     </li>
 * </ul>
 *
 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
 * </pre>
 *
 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
 */
  $StateRefDirective.$inject = [
    '$state',
    '$timeout'
  ];
  function $StateRefDirective($state, $timeout) {
    var allowedOptions = [
        'location',
        'inherit',
        'reload'
      ];
    return {
      restrict: 'A',
      require: '?^uiSrefActive',
      link: function (scope, element, attrs, uiSrefActive) {
        var ref = parseStateRef(attrs.uiSref);
        var params = null, url = null, base = stateContext(element) || $state.$current;
        var isForm = element[0].nodeName === 'FORM';
        var attr = isForm ? 'action' : 'href', nav = true;
        var options = { relative: base };
        var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};
        angular.forEach(allowedOptions, function (option) {
          if (option in optionsOverride) {
            options[option] = optionsOverride[option];
          }
        });
        var update = function (newVal) {
          if (newVal)
            params = newVal;
          if (!nav)
            return;
          var newHref = $state.href(ref.state, params, options);
          if (uiSrefActive) {
            uiSrefActive.$$setStateInfo(ref.state, params);
          }
          if (!newHref) {
            nav = false;
            return false;
          }
          element[0][attr] = newHref;
        };
        if (ref.paramExpr) {
          scope.$watch(ref.paramExpr, function (newVal, oldVal) {
            if (newVal !== params)
              update(newVal);
          }, true);
          params = scope.$eval(ref.paramExpr);
        }
        update();
        if (isForm)
          return;
        element.bind('click', function (e) {
          var button = e.which || e.button;
          if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target'))) {
            // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
            $timeout(function () {
              $state.go(ref.state, params, options);
            });
            e.preventDefault();
          }
        });
      }
    };
  }
  /**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * A directive working alongside ui-sref to add classes to an element when the 
 * related ui-sref directive's state is active, and removing them when it is inactive.
 * The primary use-case is to simplify the special appearance of navigation menus 
 * relying on `ui-sref`, by having the "active" state's menu button appear different,
 * distinguishing it from the inactive menu items.
 *
 * @example
 * Given the following template:
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item">
 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 * 
 * When the app state is "app.user", and contains the state parameter "user" with value "bilbobaggins", 
 * the resulting HTML will appear as (note the 'active' class):
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item active">
 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 * 
 * The class name is interpolated **once** during the directives link time (any further changes to the 
 * interpolated value are ignored). 
 * 
 * Multiple classes may be specified in a space-separated format:
 * <pre>
 * <ul>
 *   <li ui-sref-active='class1 class2 class3'>
 *     <a ui-sref="app.user">link</a>
 *   </li>
 * </ul>
 * </pre>
 */
  $StateActiveDirective.$inject = [
    '$state',
    '$stateParams',
    '$interpolate'
  ];
  function $StateActiveDirective($state, $stateParams, $interpolate) {
    return {
      restrict: 'A',
      controller: [
        '$scope',
        '$element',
        '$attrs',
        function ($scope, $element, $attrs) {
          var state, params, activeClass;
          // There probably isn't much point in $observing this
          activeClass = $interpolate($attrs.uiSrefActive || '', false)($scope);
          // Allow uiSref to communicate with uiSrefActive
          this.$$setStateInfo = function (newState, newParams) {
            state = $state.get(newState, stateContext($element));
            params = newParams;
            update();
          };
          $scope.$on('$stateChangeSuccess', update);
          // Update route state
          function update() {
            if ($state.$current.self === state && matchesParams()) {
              $element.addClass(activeClass);
            } else {
              $element.removeClass(activeClass);
            }
          }
          function matchesParams() {
            return !params || equalForKeys(params, $stateParams);
          }
        }
      ]
    };
  }
  angular.module('ui.router.state').directive('uiSref', $StateRefDirective).directive('uiSrefActive', $StateActiveDirective);
  /**
 * @ngdoc filter
 * @name ui.router.state.filter:isState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
 */
  $IsStateFilter.$inject = ['$state'];
  function $IsStateFilter($state) {
    return function (state) {
      return $state.is(state);
    };
  }
  /**
 * @ngdoc filter
 * @name ui.router.state.filter:includedByState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
 */
  $IncludedByStateFilter.$inject = ['$state'];
  function $IncludedByStateFilter($state) {
    return function (state) {
      return $state.includes(state);
    };
  }
  angular.module('ui.router.state').filter('isState', $IsStateFilter).filter('includedByState', $IncludedByStateFilter);
  /*
 * @ngdoc object
 * @name ui.router.compat.$routeProvider
 *
 * @requires ui.router.state.$stateProvider
 * @requires ui.router.router.$urlRouterProvider
 *
 * @description
 * `$routeProvider` of the `ui.router.compat` module overwrites the existing
 * `routeProvider` from the core. This is done to provide compatibility between
 * the UI Router and the core router.
 *
 * It also provides a `when()` method to register routes that map to certain urls.
 * Behind the scenes it actually delegates either to 
 * {@link ui.router.router.$urlRouterProvider $urlRouterProvider} or to the 
 * {@link ui.router.state.$stateProvider $stateProvider} to postprocess the given 
 * router definition object.
 */
  $RouteProvider.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];
  function $RouteProvider($stateProvider, $urlRouterProvider) {
    var routes = [];
    onEnterRoute.$inject = ['$$state'];
    function onEnterRoute($$state) {
      /*jshint validthis: true */
      this.locals = $$state.locals.globals;
      this.params = this.locals.$stateParams;
    }
    function onExitRoute() {
      /*jshint validthis: true */
      this.locals = null;
      this.params = null;
    }
    this.when = when;
    /*
   * @ngdoc function
   * @name ui.router.compat.$routeProvider#when
   * @methodOf ui.router.compat.$routeProvider
   *
   * @description
   * Registers a route with a given route definition object. The route definition
   * object has the same interface the angular core route definition object has.
   * 
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.compat']);
   *
   * app.config(function ($routeProvider) {
   *   $routeProvider.when('home', {
   *     controller: function () { ... },
   *     templateUrl: 'path/to/template'
   *   });
   * });
   * </pre>
   *
   * @param {string} url URL as string
   * @param {object} route Route definition object
   *
   * @return {object} $routeProvider - $routeProvider instance
   */
    function when(url, route) {
      /*jshint validthis: true */
      if (route.redirectTo != null) {
        // Redirect, configure directly on $urlRouterProvider
        var redirect = route.redirectTo, handler;
        if (isString(redirect)) {
          handler = redirect;  // leave $urlRouterProvider to handle
        } else if (isFunction(redirect)) {
          // Adapt to $urlRouterProvider API
          handler = function (params, $location) {
            return redirect(params, $location.path(), $location.search());
          };
        } else {
          throw new Error('Invalid \'redirectTo\' in when()');
        }
        $urlRouterProvider.when(url, handler);
      } else {
        // Regular route, configure as state
        $stateProvider.state(inherit(route, {
          parent: null,
          name: 'route:' + encodeURIComponent(url),
          url: url,
          onEnter: onEnterRoute,
          onExit: onExitRoute
        }));
      }
      routes.push(route);
      return this;
    }
    /*
   * @ngdoc object
   * @name ui.router.compat.$route
   *
   * @requires ui.router.state.$state
   * @requires $rootScope
   * @requires $routeParams
   *
   * @property {object} routes - Array of registered routes.
   * @property {object} params - Current route params as object.
   * @property {string} current - Name of the current route.
   *
   * @description
   * The `$route` service provides interfaces to access defined routes. It also let's
   * you access route params through `$routeParams` service, so you have fully
   * control over all the stuff you would actually get from angular's core `$route`
   * service.
   */
    this.$get = $get;
    $get.$inject = [
      '$state',
      '$rootScope',
      '$routeParams'
    ];
    function $get($state, $rootScope, $routeParams) {
      var $route = {
          routes: routes,
          params: $routeParams,
          current: undefined
        };
      function stateAsRoute(state) {
        return state.name !== '' ? state : undefined;
      }
      $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
        $rootScope.$broadcast('$routeChangeStart', stateAsRoute(to), stateAsRoute(from));
      });
      $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
        $route.current = stateAsRoute(to);
        $rootScope.$broadcast('$routeChangeSuccess', stateAsRoute(to), stateAsRoute(from));
        copy(toParams, $route.params);
      });
      $rootScope.$on('$stateChangeError', function (ev, to, toParams, from, fromParams, error) {
        $rootScope.$broadcast('$routeChangeError', stateAsRoute(to), stateAsRoute(from), error);
      });
      return $route;
    }
  }
  angular.module('ui.router.compat').provider('$route', $RouteProvider).directive('ngView', $ViewDirective);
}(window, window.angular));
/**
 * @license AngularJS v1.2.22
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function (window, angular, undefined) {
  'use strict';
  var $resourceMinErr = angular.$$minErr('$resource');
  // Helper functions and regex to lookup a dotted path on an object
  // stopping at undefined/null.  The path must be composed of ASCII
  // identifiers (just like $parse)
  var MEMBER_NAME_REGEX = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
  function isValidDottedPath(path) {
    return path != null && path !== '' && path !== 'hasOwnProperty' && MEMBER_NAME_REGEX.test('.' + path);
  }
  function lookupDottedPath(obj, path) {
    if (!isValidDottedPath(path)) {
      throw $resourceMinErr('badmember', 'Dotted member path "@{0}" is invalid.', path);
    }
    var keys = path.split('.');
    for (var i = 0, ii = keys.length; i < ii && obj !== undefined; i++) {
      var key = keys[i];
      obj = obj !== null ? obj[key] : undefined;
    }
    return obj;
  }
  /**
 * Create a shallow copy of an object and clear other fields from the destination
 */
  function shallowClearAndCopy(src, dst) {
    dst = dst || {};
    angular.forEach(dst, function (value, key) {
      delete dst[key];
    });
    for (var key in src) {
      if (src.hasOwnProperty(key) && !(key.charAt(0) === '$' && key.charAt(1) === '$')) {
        dst[key] = src[key];
      }
    }
    return dst;
  }
  /**
 * @ngdoc module
 * @name ngResource
 * @description
 *
 * # ngResource
 *
 * The `ngResource` module provides interaction support with RESTful services
 * via the $resource service.
 *
 *
 * <div doc-module-components="ngResource"></div>
 *
 * See {@link ngResource.$resource `$resource`} for usage.
 */
  /**
 * @ngdoc service
 * @name $resource
 * @requires $http
 *
 * @description
 * A factory which creates a resource object that lets you interact with
 * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.
 *
 * The returned resource object has action methods which provide high-level behaviors without
 * the need to interact with the low level {@link ng.$http $http} service.
 *
 * Requires the {@link ngResource `ngResource`} module to be installed.
 *
 * @param {string} url A parametrized URL template with parameters prefixed by `:` as in
 *   `/user/:username`. If you are using a URL with a port number (e.g.
 *   `http://example.com:8080/api`), it will be respected.
 *
 *   If you are using a url with a suffix, just add the suffix, like this:
 *   `$resource('http://example.com/resource.json')` or `$resource('http://example.com/:id.json')`
 *   or even `$resource('http://example.com/resource/:resource_id.:format')`
 *   If the parameter before the suffix is empty, :resource_id in this case, then the `/.` will be
 *   collapsed down to a single `.`.  If you need this sequence to appear and not collapse then you
 *   can escape it with `/\.`.
 *
 * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in
 *   `actions` methods. If any of the parameter value is a function, it will be executed every time
 *   when a param value needs to be obtained for a request (unless the param was overridden).
 *
 *   Each key value in the parameter object is first bound to url template if present and then any
 *   excess keys are appended to the url search query after the `?`.
 *
 *   Given a template `/path/:verb` and parameter `{verb:'greet', salutation:'Hello'}` results in
 *   URL `/path/greet?salutation=Hello`.
 *
 *   If the parameter value is prefixed with `@` then the value for that parameter will be extracted
 *   from the corresponding property on the `data` object (provided when calling an action method).  For
 *   example, if the `defaultParam` object is `{someParam: '@someProp'}` then the value of `someParam`
 *   will be `data.someProp`.
 *
 * @param {Object.<Object>=} actions Hash with declaration of custom action that should extend
 *   the default set of resource actions. The declaration should be created in the format of {@link
 *   ng.$http#usage_parameters $http.config}:
 *
 *       {action1: {method:?, params:?, isArray:?, headers:?, ...},
 *        action2: {method:?, params:?, isArray:?, headers:?, ...},
 *        ...}
 *
 *   Where:
 *
 *   - **`action`** – {string} – The name of action. This name becomes the name of the method on
 *     your resource object.
 *   - **`method`** – {string} – Case insensitive HTTP method (e.g. `GET`, `POST`, `PUT`,
 *     `DELETE`, `JSONP`, etc).
 *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of
 *     the parameter value is a function, it will be executed every time when a param value needs to
 *     be obtained for a request (unless the param was overridden).
 *   - **`url`** – {string} – action specific `url` override. The url templating is supported just
 *     like for the resource-level urls.
 *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array,
 *     see `returns` section.
 *   - **`transformRequest`** –
 *     `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     request body and headers and returns its transformed (typically serialized) version.
 *   - **`transformResponse`** –
 *     `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     response body and headers and returns its transformed (typically deserialized) version.
 *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the
 *     GET request, otherwise if a cache instance built with
 *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for
 *     caching.
 *   - **`timeout`** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise} that
 *     should abort the request when resolved.
 *   - **`withCredentials`** - `{boolean}` - whether to set the `withCredentials` flag on the
 *     XHR object. See
 *     [requests with credentials](https://developer.mozilla.org/en/http_access_control#section_5)
 *     for more information.
 *   - **`responseType`** - `{string}` - see
 *     [requestType](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType).
 *   - **`interceptor`** - `{Object=}` - The interceptor object has two optional methods -
 *     `response` and `responseError`. Both `response` and `responseError` interceptors get called
 *     with `http response` object. See {@link ng.$http $http interceptors}.
 *
 * @returns {Object} A resource "class" object with methods for the default set of resource actions
 *   optionally extended with custom `actions`. The default set contains these actions:
 *   ```js
 *   { 'get':    {method:'GET'},
 *     'save':   {method:'POST'},
 *     'query':  {method:'GET', isArray:true},
 *     'remove': {method:'DELETE'},
 *     'delete': {method:'DELETE'} };
 *   ```
 *
 *   Calling these methods invoke an {@link ng.$http} with the specified http method,
 *   destination and parameters. When the data is returned from the server then the object is an
 *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it
 *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,
 *   read, update, delete) on server-side data like this:
 *   ```js
 *   var User = $resource('/user/:userId', {userId:'@id'});
 *   var user = User.get({userId:123}, function() {
 *     user.abc = true;
 *     user.$save();
 *   });
 *   ```
 *
 *   It is important to realize that invoking a $resource object method immediately returns an
 *   empty reference (object or array depending on `isArray`). Once the data is returned from the
 *   server the existing reference is populated with the actual data. This is a useful trick since
 *   usually the resource is assigned to a model which is then rendered by the view. Having an empty
 *   object results in no rendering, once the data arrives from the server then the object is
 *   populated with the data and the view automatically re-renders itself showing the new data. This
 *   means that in most cases one never has to write a callback function for the action methods.
 *
 *   The action methods on the class object or instance object can be invoked with the following
 *   parameters:
 *
 *   - HTTP GET "class" actions: `Resource.action([parameters], [success], [error])`
 *   - non-GET "class" actions: `Resource.action([parameters], postData, [success], [error])`
 *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`
 *
 *   Success callback is called with (value, responseHeaders) arguments. Error callback is called
 *   with (httpResponse) argument.
 *
 *   Class actions return empty instance (with additional properties below).
 *   Instance actions return promise of the action.
 *
 *   The Resource instances and collection have these additional properties:
 *
 *   - `$promise`: the {@link ng.$q promise} of the original server interaction that created this
 *     instance or collection.
 *
 *     On success, the promise is resolved with the same resource instance or collection object,
 *     updated with data from server. This makes it easy to use in
 *     {@link ngRoute.$routeProvider resolve section of $routeProvider.when()} to defer view
 *     rendering until the resource(s) are loaded.
 *
 *     On failure, the promise is resolved with the {@link ng.$http http response} object, without
 *     the `resource` property.
 *
 *     If an interceptor object was provided, the promise will instead be resolved with the value
 *     returned by the interceptor.
 *
 *   - `$resolved`: `true` after first server interaction is completed (either with success or
 *      rejection), `false` before that. Knowing if the Resource has been resolved is useful in
 *      data-binding.
 *
 * @example
 *
 * # Credit card resource
 *
 * ```js
     // Define CreditCard class
     var CreditCard = $resource('/user/:userId/card/:cardId',
      {userId:123, cardId:'@id'}, {
       charge: {method:'POST', params:{charge:true}}
      });

     // We can retrieve a collection from the server
     var cards = CreditCard.query(function() {
       // GET: /user/123/card
       // server returns: [ {id:456, number:'1234', name:'Smith'} ];

       var card = cards[0];
       // each item is an instance of CreditCard
       expect(card instanceof CreditCard).toEqual(true);
       card.name = "J. Smith";
       // non GET methods are mapped onto the instances
       card.$save();
       // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
       // server returns: {id:456, number:'1234', name: 'J. Smith'};

       // our custom method is mapped as well.
       card.$charge({amount:9.99});
       // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
     });

     // we can create an instance as well
     var newCard = new CreditCard({number:'0123'});
     newCard.name = "Mike Smith";
     newCard.$save();
     // POST: /user/123/card {number:'0123', name:'Mike Smith'}
     // server returns: {id:789, number:'0123', name: 'Mike Smith'};
     expect(newCard.id).toEqual(789);
 * ```
 *
 * The object returned from this function execution is a resource "class" which has "static" method
 * for each action in the definition.
 *
 * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and
 * `headers`.
 * When the data is returned from the server then the object is an instance of the resource type and
 * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD
 * operations (create, read, update, delete) on server-side data.

   ```js
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123}, function(user) {
       user.abc = true;
       user.$save();
     });
   ```
 *
 * It's worth noting that the success callback for `get`, `query` and other methods gets passed
 * in the response that came from the server as well as $http header getter function, so one
 * could rewrite the above example and get access to http headers as:
 *
   ```js
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123}, function(u, getResponseHeaders){
       u.abc = true;
       u.$save(function(u, putResponseHeaders) {
         //u => saved user object
         //putResponseHeaders => $http header getter
       });
     });
   ```
 *
 * You can also access the raw `$http` promise via the `$promise` property on the object returned
 *
   ```
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123})
         .$promise.then(function(user) {
           $scope.user = user;
         });
   ```

 * # Creating a custom 'PUT' request
 * In this example we create a custom method on our resource to make a PUT request
 * ```js
 *    var app = angular.module('app', ['ngResource', 'ngRoute']);
 *
 *    // Some APIs expect a PUT request in the format URL/object/ID
 *    // Here we are creating an 'update' method
 *    app.factory('Notes', ['$resource', function($resource) {
 *    return $resource('/notes/:id', null,
 *        {
 *            'update': { method:'PUT' }
 *        });
 *    }]);
 *
 *    // In our controller we get the ID from the URL using ngRoute and $routeParams
 *    // We pass in $routeParams and our Notes factory along with $scope
 *    app.controller('NotesCtrl', ['$scope', '$routeParams', 'Notes',
                                      function($scope, $routeParams, Notes) {
 *    // First get a note object from the factory
 *    var note = Notes.get({ id:$routeParams.id });
 *    $id = note.id;
 *
 *    // Now call update passing in the ID first then the object you are updating
 *    Notes.update({ id:$id }, note);
 *
 *    // This will PUT /notes/ID with the note object in the request payload
 *    }]);
 * ```
 */
  angular.module('ngResource', ['ng']).factory('$resource', [
    '$http',
    '$q',
    function ($http, $q) {
      var DEFAULT_ACTIONS = {
          'get': { method: 'GET' },
          'save': { method: 'POST' },
          'query': {
            method: 'GET',
            isArray: true
          },
          'remove': { method: 'DELETE' },
          'delete': { method: 'DELETE' }
        };
      var noop = angular.noop, forEach = angular.forEach, extend = angular.extend, copy = angular.copy, isFunction = angular.isFunction;
      /**
     * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
     * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
     * segments:
     *    segment       = *pchar
     *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
     *    pct-encoded   = "%" HEXDIG HEXDIG
     *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
     *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
     *                     / "*" / "+" / "," / ";" / "="
     */
      function encodeUriSegment(val) {
        return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
      }
      /**
     * This method is intended for encoding *key* or *value* parts of query component. We need a
     * custom method because encodeURIComponent is too aggressive and encodes stuff that doesn't
     * have to be encoded per http://tools.ietf.org/html/rfc3986:
     *    query       = *( pchar / "/" / "?" )
     *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
     *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
     *    pct-encoded   = "%" HEXDIG HEXDIG
     *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
     *                     / "*" / "+" / "," / ";" / "="
     */
      function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
      }
      function Route(template, defaults) {
        this.template = template;
        this.defaults = defaults || {};
        this.urlParams = {};
      }
      Route.prototype = {
        setUrlParams: function (config, params, actionUrl) {
          var self = this, url = actionUrl || self.template, val, encodedVal;
          var urlParams = self.urlParams = {};
          forEach(url.split(/\W/), function (param) {
            if (param === 'hasOwnProperty') {
              throw $resourceMinErr('badname', 'hasOwnProperty is not a valid parameter name.');
            }
            if (!new RegExp('^\\d+$').test(param) && param && new RegExp('(^|[^\\\\]):' + param + '(\\W|$)').test(url)) {
              urlParams[param] = true;
            }
          });
          url = url.replace(/\\:/g, ':');
          params = params || {};
          forEach(self.urlParams, function (_, urlParam) {
            val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
            if (angular.isDefined(val) && val !== null) {
              encodedVal = encodeUriSegment(val);
              url = url.replace(new RegExp(':' + urlParam + '(\\W|$)', 'g'), function (match, p1) {
                return encodedVal + p1;
              });
            } else {
              url = url.replace(new RegExp('(/?):' + urlParam + '(\\W|$)', 'g'), function (match, leadingSlashes, tail) {
                if (tail.charAt(0) == '/') {
                  return tail;
                } else {
                  return leadingSlashes + tail;
                }
              });
            }
          });
          // strip trailing slashes and set the url
          url = url.replace(/\/+$/, '') || '/';
          // then replace collapse `/.` if found in the last URL path segment before the query
          // E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`
          url = url.replace(/\/\.(?=\w+($|\?))/, '.');
          // replace escaped `/\.` with `/.`
          config.url = url.replace(/\/\\\./, '/.');
          // set params - delegate param encoding to $http
          forEach(params, function (value, key) {
            if (!self.urlParams[key]) {
              config.params = config.params || {};
              config.params[key] = value;
            }
          });
        }
      };
      function resourceFactory(url, paramDefaults, actions) {
        var route = new Route(url);
        actions = extend({}, DEFAULT_ACTIONS, actions);
        function extractParams(data, actionParams) {
          var ids = {};
          actionParams = extend({}, paramDefaults, actionParams);
          forEach(actionParams, function (value, key) {
            if (isFunction(value)) {
              value = value();
            }
            ids[key] = value && value.charAt && value.charAt(0) == '@' ? lookupDottedPath(data, value.substr(1)) : value;
          });
          return ids;
        }
        function defaultResponseInterceptor(response) {
          return response.resource;
        }
        function Resource(value) {
          shallowClearAndCopy(value || {}, this);
        }
        forEach(actions, function (action, name) {
          var hasBody = /^(POST|PUT|PATCH)$/i.test(action.method);
          Resource[name] = function (a1, a2, a3, a4) {
            var params = {}, data, success, error;
            /* jshint -W086 */
            /* (purposefully fall through case statements) */
            switch (arguments.length) {
            case 4:
              error = a4;
              success = a3;
            //fallthrough
            case 3:
            case 2:
              if (isFunction(a2)) {
                if (isFunction(a1)) {
                  success = a1;
                  error = a2;
                  break;
                }
                success = a2;
                error = a3;  //fallthrough
              } else {
                params = a1;
                data = a2;
                success = a3;
                break;
              }
            case 1:
              if (isFunction(a1))
                success = a1;
              else if (hasBody)
                data = a1;
              else
                params = a1;
              break;
            case 0:
              break;
            default:
              throw $resourceMinErr('badargs', 'Expected up to 4 arguments [params, data, success, error], got {0} arguments', arguments.length);
            }
            /* jshint +W086 */
            /* (purposefully fall through case statements) */
            var isInstanceCall = this instanceof Resource;
            var value = isInstanceCall ? data : action.isArray ? [] : new Resource(data);
            var httpConfig = {};
            var responseInterceptor = action.interceptor && action.interceptor.response || defaultResponseInterceptor;
            var responseErrorInterceptor = action.interceptor && action.interceptor.responseError || undefined;
            forEach(action, function (value, key) {
              if (key != 'params' && key != 'isArray' && key != 'interceptor') {
                httpConfig[key] = copy(value);
              }
            });
            if (hasBody)
              httpConfig.data = data;
            route.setUrlParams(httpConfig, extend({}, extractParams(data, action.params || {}), params), action.url);
            var promise = $http(httpConfig).then(function (response) {
                var data = response.data, promise = value.$promise;
                if (data) {
                  // Need to convert action.isArray to boolean in case it is undefined
                  // jshint -W018
                  if (angular.isArray(data) !== !!action.isArray) {
                    throw $resourceMinErr('badcfg', 'Error in resource configuration. Expected ' + 'response to contain an {0} but got an {1}', action.isArray ? 'array' : 'object', angular.isArray(data) ? 'array' : 'object');
                  }
                  // jshint +W018
                  if (action.isArray) {
                    value.length = 0;
                    forEach(data, function (item) {
                      if (typeof item === 'object') {
                        value.push(new Resource(item));
                      } else {
                        // Valid JSON values may be string literals, and these should not be converted
                        // into objects. These items will not have access to the Resource prototype
                        // methods, but unfortunately there
                        value.push(item);
                      }
                    });
                  } else {
                    shallowClearAndCopy(data, value);
                    value.$promise = promise;
                  }
                }
                value.$resolved = true;
                response.resource = value;
                return response;
              }, function (response) {
                value.$resolved = true;
                (error || noop)(response);
                return $q.reject(response);
              });
            promise = promise.then(function (response) {
              var value = responseInterceptor(response);
              (success || noop)(value, response.headers);
              return value;
            }, responseErrorInterceptor);
            if (!isInstanceCall) {
              // we are creating instance / collection
              // - set the initial promise
              // - return the instance / collection
              value.$promise = promise;
              value.$resolved = false;
              return value;
            }
            // instance call
            return promise;
          };
          Resource.prototype['$' + name] = function (params, success, error) {
            if (isFunction(params)) {
              error = success;
              success = params;
              params = {};
            }
            var result = Resource[name].call(this, params, this, success, error);
            return result.$promise || result;
          };
        });
        Resource.bind = function (additionalParamDefaults) {
          return resourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
        };
        return Resource;
      }
      return resourceFactory;
    }
  ]);
}(window, window.angular));