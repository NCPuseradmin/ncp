;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const o of i) if (o.type === 'childList') for (const s of o.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
function Of(e, t) {
  const n = Object.create(null),
    r = e.split(',')
  for (let i = 0; i < r.length; i++) n[r[i]] = !0
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i]
}
const qt = {},
  ms = [],
  Xr = () => {},
  A2 = () => !1,
  fc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Rf = (e) => e.startsWith('onUpdate:'),
  an = Object.assign,
  Mf = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  L2 = Object.prototype.hasOwnProperty,
  St = (e, t) => L2.call(e, t),
  tt = Array.isArray,
  vs = (e) => Fs(e) === '[object Map]',
  hc = (e) => Fs(e) === '[object Set]',
  Qh = (e) => Fs(e) === '[object Date]',
  N2 = (e) => Fs(e) === '[object RegExp]',
  ht = (e) => typeof e == 'function',
  Yt = (e) => typeof e == 'string',
  no = (e) => typeof e == 'symbol',
  Rt = (e) => e !== null && typeof e == 'object',
  Op = (e) => (Rt(e) || ht(e)) && ht(e.then) && ht(e.catch),
  Rp = Object.prototype.toString,
  Fs = (e) => Rp.call(e),
  P2 = (e) => Fs(e).slice(8, -1),
  Mp = (e) => Fs(e) === '[object Object]',
  Df = (e) => Yt(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Gl = Of(',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'),
  dc = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  C2 = /-(\w)/g,
  Zr = dc((e) => e.replace(C2, (t, n) => (n ? n.toUpperCase() : ''))),
  j2 = /\B([A-Z])/g,
  Os = dc((e) => e.replace(j2, '-$1').toLowerCase()),
  pc = dc((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Nu = dc((e) => (e ? `on${pc(e)}` : '')),
  To = (e, t) => !Object.is(e, t),
  bs = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  tc = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  I2 = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  E2 = (e) => {
    const t = Yt(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Zh
const ef = () =>
  Zh || (Zh = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : typeof global < 'u' ? global : {})
function Bf(e) {
  if (tt(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        i = Yt(r) ? R2(r) : Bf(r)
      if (i) for (const o in i) t[o] = i[o]
    }
    return t
  } else if (Yt(e) || Rt(e)) return e
}
const T2 = /;(?![^(]*\))/g,
  F2 = /:([^]+)/,
  O2 = /\/\*[^]*?\*\//g
function R2(e) {
  const t = {}
  return (
    e
      .replace(O2, '')
      .split(T2)
      .forEach((n) => {
        if (n) {
          const r = n.split(F2)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function Jt(e) {
  let t = ''
  if (Yt(e)) t = e
  else if (tt(e))
    for (let n = 0; n < e.length; n++) {
      const r = Jt(e[n])
      r && (t += r + ' ')
    }
  else if (Rt(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const M2 = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  D2 = Of(M2)
function Dp(e) {
  return !!e || e === ''
}
function B2(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let r = 0; n && r < e.length; r++) n = ks(e[r], t[r])
  return n
}
function ks(e, t) {
  if (e === t) return !0
  let n = Qh(e),
    r = Qh(t)
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1
  if (((n = no(e)), (r = no(t)), n || r)) return e === t
  if (((n = tt(e)), (r = tt(t)), n || r)) return n && r ? B2(e, t) : !1
  if (((n = Rt(e)), (r = Rt(t)), n || r)) {
    if (!n || !r) return !1
    const i = Object.keys(e).length,
      o = Object.keys(t).length
    if (i !== o) return !1
    for (const s in e) {
      const l = e.hasOwnProperty(s),
        c = t.hasOwnProperty(s)
      if ((l && !c) || (!l && c) || !ks(e[s], t[s])) return !1
    }
  }
  return String(e) === String(t)
}
function Bp(e, t) {
  return e.findIndex((n) => ks(n, t))
}
const Je = (e) => (Yt(e) ? e : e == null ? '' : tt(e) || (Rt(e) && (e.toString === Rp || !ht(e.toString))) ? JSON.stringify(e, qp, 2) : String(e)),
  qp = (e, t) =>
    t && t.__v_isRef
      ? qp(e, t.value)
      : vs(t)
        ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, i], o) => ((n[Pu(r, o) + ' =>'] = i), n), {}) }
        : hc(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Pu(n)) }
          : no(t)
            ? Pu(t)
            : Rt(t) && !tt(t) && !Mp(t)
              ? String(t)
              : t,
  Pu = (e, t = '') => {
    var n
    return no(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let jr
class q2 {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = jr),
      !t && jr && (this.index = (jr.scopes || (jr.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = jr
      try {
        return (jr = this), t()
      } finally {
        jr = n
      }
    }
  }
  on() {
    jr = this
  }
  off() {
    jr = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, r
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop()
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop()
        i && i !== this && ((this.parent.scopes[this.index] = i), (i.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function z2(e, t = jr) {
  t && t.active && t.effects.push(e)
}
function U2() {
  return jr
}
const qf = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  zp = (e) => (e.w & ro) > 0,
  Up = (e) => (e.n & ro) > 0,
  H2 = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ro
  },
  $2 = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let r = 0; r < t.length; r++) {
        const i = t[r]
        zp(i) && !Up(i) ? i.delete(e) : (t[n++] = i), (i.w &= ~ro), (i.n &= ~ro)
      }
      t.length = n
    }
  },
  tf = new WeakMap()
let _a = 0,
  ro = 1
const nf = 30
let Ir
const No = Symbol(''),
  rf = Symbol('')
class zf {
  constructor(t, n = null, r) {
    ;(this.fn = t), (this.scheduler = n), (this.active = !0), (this.deps = []), (this.parent = void 0), z2(this, r)
  }
  run() {
    if (!this.active) return this.fn()
    let t = Ir,
      n = Zi
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (this.parent = Ir), (Ir = this), (Zi = !0), (ro = 1 << ++_a), _a <= nf ? H2(this) : ed(this), this.fn()
    } finally {
      _a <= nf && $2(this), (ro = 1 << --_a), (Ir = this.parent), (Zi = n), (this.parent = void 0), this.deferStop && this.stop()
    }
  }
  stop() {
    Ir === this ? (this.deferStop = !0) : this.active && (ed(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function ed(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let Zi = !0
const Hp = []
function Rs() {
  Hp.push(Zi), (Zi = !1)
}
function Ms() {
  const e = Hp.pop()
  Zi = e === void 0 ? !0 : e
}
function $n(e, t, n) {
  if (Zi && Ir) {
    let r = tf.get(e)
    r || tf.set(e, (r = new Map()))
    let i = r.get(n)
    i || r.set(n, (i = qf())), $p(i)
  }
}
function $p(e, t) {
  let n = !1
  _a <= nf ? Up(e) || ((e.n |= ro), (n = !zp(e))) : (n = !e.has(Ir)), n && (e.add(Ir), Ir.deps.push(e))
}
function wi(e, t, n, r, i, o) {
  const s = tf.get(e)
  if (!s) return
  let l = []
  if (t === 'clear') l = [...s.values()]
  else if (n === 'length' && tt(e)) {
    const c = Number(r)
    s.forEach((f, h) => {
      ;(h === 'length' || (!no(h) && h >= c)) && l.push(f)
    })
  } else
    switch ((n !== void 0 && l.push(s.get(n)), t)) {
      case 'add':
        tt(e) ? Df(n) && l.push(s.get('length')) : (l.push(s.get(No)), vs(e) && l.push(s.get(rf)))
        break
      case 'delete':
        tt(e) || (l.push(s.get(No)), vs(e) && l.push(s.get(rf)))
        break
      case 'set':
        vs(e) && l.push(s.get(No))
        break
    }
  if (l.length === 1) l[0] && of(l[0])
  else {
    const c = []
    for (const f of l) f && c.push(...f)
    of(qf(c))
  }
}
function of(e, t) {
  const n = tt(e) ? e : [...e]
  for (const r of n) r.computed && td(r)
  for (const r of n) r.computed || td(r)
}
function td(e, t) {
  ;(e !== Ir || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const V2 = Of('__proto__,__v_isRef,__isVue'),
  Vp = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(no)
  ),
  nd = W2()
function W2() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = kt(this)
        for (let o = 0, s = this.length; o < s; o++) $n(r, 'get', o + '')
        const i = r[t](...n)
        return i === -1 || i === !1 ? r[t](...n.map(kt)) : i
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        Rs()
        const r = kt(this)[t].apply(this, n)
        return Ms(), r
      }
    }),
    e
  )
}
function G2(e) {
  const t = kt(this)
  return $n(t, 'has', e), t.hasOwnProperty(e)
}
class Wp {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._shallow = n)
  }
  get(t, n, r) {
    const i = this._isReadonly,
      o = this._shallow
    if (n === '__v_isReactive') return !i
    if (n === '__v_isReadonly') return i
    if (n === '__v_isShallow') return o
    if (n === '__v_raw') return r === (i ? (o ? s5 : Yp) : o ? Jp : Kp).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0
    const s = tt(t)
    if (!i) {
      if (s && St(nd, n)) return Reflect.get(nd, n, r)
      if (n === 'hasOwnProperty') return G2
    }
    const l = Reflect.get(t, n, r)
    return (no(n) ? Vp.has(n) : V2(n)) || (i || $n(t, 'get', n), o) ? l : jn(l) ? (s && Df(n) ? l : l.value) : Rt(l) ? (i ? Qp(l) : er(l)) : l
  }
}
class Gp extends Wp {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, i) {
    let o = t[n]
    if (As(o) && jn(o) && !jn(r)) return !1
    if (!this._shallow && (!nc(r) && !As(r) && ((o = kt(o)), (r = kt(r))), !tt(t) && jn(o) && !jn(r))) return (o.value = r), !0
    const s = tt(t) && Df(n) ? Number(n) < t.length : St(t, n),
      l = Reflect.set(t, n, r, i)
    return t === kt(i) && (s ? To(r, o) && wi(t, 'set', n, r) : wi(t, 'add', n, r)), l
  }
  deleteProperty(t, n) {
    const r = St(t, n)
    t[n]
    const i = Reflect.deleteProperty(t, n)
    return i && r && wi(t, 'delete', n, void 0), i
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return (!no(n) || !Vp.has(n)) && $n(t, 'has', n), r
  }
  ownKeys(t) {
    return $n(t, 'iterate', tt(t) ? 'length' : No), Reflect.ownKeys(t)
  }
}
class K2 extends Wp {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const J2 = new Gp(),
  Y2 = new K2(),
  X2 = new Gp(!0),
  Uf = (e) => e,
  gc = (e) => Reflect.getPrototypeOf(e)
function Ol(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const i = kt(e),
    o = kt(t)
  n || (To(t, o) && $n(i, 'get', t), $n(i, 'get', o))
  const { has: s } = gc(i),
    l = r ? Uf : n ? Vf : Ta
  if (s.call(i, t)) return l(e.get(t))
  if (s.call(i, o)) return l(e.get(o))
  e !== i && e.get(t)
}
function Rl(e, t = !1) {
  const n = this.__v_raw,
    r = kt(n),
    i = kt(e)
  return t || (To(e, i) && $n(r, 'has', e), $n(r, 'has', i)), e === i ? n.has(e) : n.has(e) || n.has(i)
}
function Ml(e, t = !1) {
  return (e = e.__v_raw), !t && $n(kt(e), 'iterate', No), Reflect.get(e, 'size', e)
}
function rd(e) {
  e = kt(e)
  const t = kt(this)
  return gc(t).has.call(t, e) || (t.add(e), wi(t, 'add', e, e)), this
}
function id(e, t) {
  t = kt(t)
  const n = kt(this),
    { has: r, get: i } = gc(n)
  let o = r.call(n, e)
  o || ((e = kt(e)), (o = r.call(n, e)))
  const s = i.call(n, e)
  return n.set(e, t), o ? To(t, s) && wi(n, 'set', e, t) : wi(n, 'add', e, t), this
}
function od(e) {
  const t = kt(this),
    { has: n, get: r } = gc(t)
  let i = n.call(t, e)
  i || ((e = kt(e)), (i = n.call(t, e))), r && r.call(t, e)
  const o = t.delete(e)
  return i && wi(t, 'delete', e, void 0), o
}
function sd() {
  const e = kt(this),
    t = e.size !== 0,
    n = e.clear()
  return t && wi(e, 'clear', void 0, void 0), n
}
function Dl(e, t) {
  return function (r, i) {
    const o = this,
      s = o.__v_raw,
      l = kt(s),
      c = t ? Uf : e ? Vf : Ta
    return !e && $n(l, 'iterate', No), s.forEach((f, h) => r.call(i, c(f), c(h), o))
  }
}
function Bl(e, t, n) {
  return function (...r) {
    const i = this.__v_raw,
      o = kt(i),
      s = vs(o),
      l = e === 'entries' || (e === Symbol.iterator && s),
      c = e === 'keys' && s,
      f = i[e](...r),
      h = n ? Uf : t ? Vf : Ta
    return (
      !t && $n(o, 'iterate', c ? rf : No),
      {
        next() {
          const { value: g, done: v } = f.next()
          return v ? { value: g, done: v } : { value: l ? [h(g[0]), h(g[1])] : h(g), done: v }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function qi(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Q2() {
  const e = {
      get(o) {
        return Ol(this, o)
      },
      get size() {
        return Ml(this)
      },
      has: Rl,
      add: rd,
      set: id,
      delete: od,
      clear: sd,
      forEach: Dl(!1, !1)
    },
    t = {
      get(o) {
        return Ol(this, o, !1, !0)
      },
      get size() {
        return Ml(this)
      },
      has: Rl,
      add: rd,
      set: id,
      delete: od,
      clear: sd,
      forEach: Dl(!1, !0)
    },
    n = {
      get(o) {
        return Ol(this, o, !0)
      },
      get size() {
        return Ml(this, !0)
      },
      has(o) {
        return Rl.call(this, o, !0)
      },
      add: qi('add'),
      set: qi('set'),
      delete: qi('delete'),
      clear: qi('clear'),
      forEach: Dl(!0, !1)
    },
    r = {
      get(o) {
        return Ol(this, o, !0, !0)
      },
      get size() {
        return Ml(this, !0)
      },
      has(o) {
        return Rl.call(this, o, !0)
      },
      add: qi('add'),
      set: qi('set'),
      delete: qi('delete'),
      clear: qi('clear'),
      forEach: Dl(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = Bl(o, !1, !1)), (n[o] = Bl(o, !0, !1)), (t[o] = Bl(o, !1, !0)), (r[o] = Bl(o, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [Z2, e5, t5, n5] = Q2()
function Hf(e, t) {
  const n = t ? (e ? n5 : t5) : e ? e5 : Z2
  return (r, i, o) => (i === '__v_isReactive' ? !e : i === '__v_isReadonly' ? e : i === '__v_raw' ? r : Reflect.get(St(n, i) && i in r ? n : r, i, o))
}
const r5 = { get: Hf(!1, !1) },
  i5 = { get: Hf(!1, !0) },
  o5 = { get: Hf(!0, !1) },
  Kp = new WeakMap(),
  Jp = new WeakMap(),
  Yp = new WeakMap(),
  s5 = new WeakMap()
function a5(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function l5(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : a5(P2(e))
}
function er(e) {
  return As(e) ? e : $f(e, !1, J2, r5, Kp)
}
function Xp(e) {
  return $f(e, !1, X2, i5, Jp)
}
function Qp(e) {
  return $f(e, !0, Y2, o5, Yp)
}
function $f(e, t, n, r, i) {
  if (!Rt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = i.get(e)
  if (o) return o
  const s = l5(e)
  if (s === 0) return e
  const l = new Proxy(e, s === 2 ? r : n)
  return i.set(e, l), l
}
function ys(e) {
  return As(e) ? ys(e.__v_raw) : !!(e && e.__v_isReactive)
}
function As(e) {
  return !!(e && e.__v_isReadonly)
}
function nc(e) {
  return !!(e && e.__v_isShallow)
}
function Zp(e) {
  return ys(e) || As(e)
}
function kt(e) {
  const t = e && e.__v_raw
  return t ? kt(t) : e
}
function e1(e) {
  return tc(e, '__v_skip', !0), e
}
const Ta = (e) => (Rt(e) ? er(e) : e),
  Vf = (e) => (Rt(e) ? Qp(e) : e)
function t1(e) {
  Zi && Ir && ((e = kt(e)), $p(e.dep || (e.dep = qf())))
}
function n1(e, t) {
  e = kt(e)
  const n = e.dep
  n && of(n)
}
function jn(e) {
  return !!(e && e.__v_isRef === !0)
}
function _t(e) {
  return r1(e, !1)
}
function c5(e) {
  return r1(e, !0)
}
function r1(e, t) {
  return jn(e) ? e : new u5(e, t)
}
class u5 {
  constructor(t, n) {
    ;(this.__v_isShallow = n), (this.dep = void 0), (this.__v_isRef = !0), (this._rawValue = n ? t : kt(t)), (this._value = n ? t : Ta(t))
  }
  get value() {
    return t1(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || nc(t) || As(t)
    ;(t = n ? t : kt(t)), To(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : Ta(t)), n1(this))
  }
}
function Pn(e) {
  return jn(e) ? e.value : e
}
const f5 = {
  get: (e, t, n) => Pn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t]
    return jn(i) && !jn(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, r)
  }
}
function i1(e) {
  return ys(e) ? e : new Proxy(e, f5)
}
class h5 {
  constructor(t, n, r, i) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new zf(t, () => {
        this._dirty || ((this._dirty = !0), n1(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = kt(this)
    return t1(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value
  }
  set value(t) {
    this._setter(t)
  }
}
function d5(e, t, n = !1) {
  let r, i
  const o = ht(e)
  return o ? ((r = e), (i = Xr)) : ((r = e.get), (i = e.set)), new h5(r, i, o || !i, n)
}
function eo(e, t, n, r) {
  let i
  try {
    i = r ? e(...r) : e()
  } catch (o) {
    mc(o, t, n)
  }
  return i
}
function fr(e, t, n, r) {
  if (ht(e)) {
    const o = eo(e, t, n, r)
    return (
      o &&
        Op(o) &&
        o.catch((s) => {
          mc(s, t, n)
        }),
      o
    )
  }
  const i = []
  for (let o = 0; o < e.length; o++) i.push(fr(e[o], t, n, r))
  return i
}
function mc(e, t, n, r = !0) {
  const i = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const s = t.proxy,
      l = n
    for (; o; ) {
      const f = o.ec
      if (f) {
        for (let h = 0; h < f.length; h++) if (f[h](e, s, l) === !1) return
      }
      o = o.parent
    }
    const c = t.appContext.config.errorHandler
    if (c) {
      eo(c, null, 10, [e, s, l])
      return
    }
  }
  p5(e, n, i, r)
}
function p5(e, t, n, r = !0) {
  console.error(e)
}
let Fa = !1,
  sf = !1
const Cn = []
let Kr = 0
const ws = []
let bi = null,
  So = 0
const o1 = Promise.resolve()
let Wf = null
function s1(e) {
  const t = Wf || o1
  return e ? t.then(this ? e.bind(this) : e) : t
}
function g5(e) {
  let t = Kr + 1,
    n = Cn.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      i = Cn[r],
      o = Oa(i)
    o < e || (o === e && i.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function Gf(e) {
  ;(!Cn.length || !Cn.includes(e, Fa && e.allowRecurse ? Kr + 1 : Kr)) && (e.id == null ? Cn.push(e) : Cn.splice(g5(e.id), 0, e), a1())
}
function a1() {
  !Fa && !sf && ((sf = !0), (Wf = o1.then(c1)))
}
function m5(e) {
  const t = Cn.indexOf(e)
  t > Kr && Cn.splice(t, 1)
}
function v5(e) {
  tt(e) ? ws.push(...e) : (!bi || !bi.includes(e, e.allowRecurse ? So + 1 : So)) && ws.push(e), a1()
}
function ad(e, t, n = Fa ? Kr + 1 : 0) {
  for (; n < Cn.length; n++) {
    const r = Cn[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      Cn.splice(n, 1), n--, r()
    }
  }
}
function l1(e) {
  if (ws.length) {
    const t = [...new Set(ws)]
    if (((ws.length = 0), bi)) {
      bi.push(...t)
      return
    }
    for (bi = t, bi.sort((n, r) => Oa(n) - Oa(r)), So = 0; So < bi.length; So++) bi[So]()
    ;(bi = null), (So = 0)
  }
}
const Oa = (e) => (e.id == null ? 1 / 0 : e.id),
  b5 = (e, t) => {
    const n = Oa(e) - Oa(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function c1(e) {
  ;(sf = !1), (Fa = !0), Cn.sort(b5)
  try {
    for (Kr = 0; Kr < Cn.length; Kr++) {
      const t = Cn[Kr]
      t && t.active !== !1 && eo(t, null, 14)
    }
  } finally {
    ;(Kr = 0), (Cn.length = 0), l1(), (Fa = !1), (Wf = null), (Cn.length || ws.length) && c1()
  }
}
function y5(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || qt
  let i = n
  const o = t.startsWith('update:'),
    s = o && t.slice(7)
  if (s && s in r) {
    const h = `${s === 'modelValue' ? 'model' : s}Modifiers`,
      { number: g, trim: v } = r[h] || qt
    v && (i = n.map((p) => (Yt(p) ? p.trim() : p))), g && (i = n.map(I2))
  }
  let l,
    c = r[(l = Nu(t))] || r[(l = Nu(Zr(t)))]
  !c && o && (c = r[(l = Nu(Os(t)))]), c && fr(c, e, 6, i)
  const f = r[l + 'Once']
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), fr(f, e, 6, i)
  }
}
function u1(e, t, n = !1) {
  const r = t.emitsCache,
    i = r.get(e)
  if (i !== void 0) return i
  const o = e.emits
  let s = {},
    l = !1
  if (!ht(e)) {
    const c = (f) => {
      const h = u1(f, t, !0)
      h && ((l = !0), an(s, h))
    }
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
  }
  return !o && !l ? (Rt(e) && r.set(e, null), null) : (tt(o) ? o.forEach((c) => (s[c] = null)) : an(s, o), Rt(e) && r.set(e, s), s)
}
function vc(e, t) {
  return !e || !fc(t) ? !1 : ((t = t.slice(2).replace(/Once$/, '')), St(e, t[0].toLowerCase() + t.slice(1)) || St(e, Os(t)) || St(e, t))
}
let _n = null,
  bc = null
function rc(e) {
  const t = _n
  return (_n = e), (bc = (e && e.type.__scopeId) || null), t
}
function f1(e) {
  bc = e
}
function h1() {
  bc = null
}
function Lt(e, t = _n, n) {
  if (!t || e._n) return e
  const r = (...i) => {
    r._d && yd(-1)
    const o = rc(t)
    let s
    try {
      s = e(...i)
    } finally {
      rc(o), r._d && yd(1)
    }
    return s
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Cu(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    props: o,
    propsOptions: [s],
    slots: l,
    attrs: c,
    emit: f,
    render: h,
    renderCache: g,
    data: v,
    setupState: p,
    ctx: b,
    inheritAttrs: w
  } = e
  let L, _
  const x = rc(e)
  try {
    if (n.shapeFlag & 4) {
      const C = i || r,
        D = C
      ;(L = Gr(h.call(D, C, g, o, p, v, b))), (_ = c)
    } else {
      const C = t
      ;(L = Gr(C.length > 1 ? C(o, { attrs: c, slots: l, emit: f }) : C(o, null))), (_ = t.props ? c : w5(c))
    }
  } catch (C) {
    ;(Aa.length = 0), mc(C, e, 1), (L = Xe(hr))
  }
  let k = L
  if (_ && w !== !1) {
    const C = Object.keys(_),
      { shapeFlag: D } = k
    C.length && D & 7 && (s && C.some(Rf) && (_ = _5(_, s)), (k = xi(k, _)))
  }
  return n.dirs && ((k = xi(k)), (k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs)), n.transition && (k.transition = n.transition), (L = k), rc(x), L
}
const w5 = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || fc(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  _5 = (e, t) => {
    const n = {}
    for (const r in e) (!Rf(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function x5(e, t, n) {
  const { props: r, children: i, component: o } = e,
    { props: s, children: l, patchFlag: c } = t,
    f = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return r ? ld(r, s, f) : !!s
    if (c & 8) {
      const h = t.dynamicProps
      for (let g = 0; g < h.length; g++) {
        const v = h[g]
        if (s[v] !== r[v] && !vc(f, v)) return !0
      }
    }
  } else return (i || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? (s ? ld(r, s, f) : !0) : !!s
  return !1
}
function ld(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let i = 0; i < r.length; i++) {
    const o = r[i]
    if (t[o] !== e[o] && !vc(n, o)) return !0
  }
  return !1
}
function S5({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const Kf = 'components'
function bt(e, t) {
  return g1(Kf, e, !0, t) || e
}
const d1 = Symbol.for('v-ndc')
function p1(e) {
  return Yt(e) ? g1(Kf, e, !1) || e : e || d1
}
function g1(e, t, n = !0, r = !1) {
  const i = _n || vn
  if (i) {
    const o = i.type
    if (e === Kf) {
      const l = hf(o, !1)
      if (l && (l === t || l === Zr(t) || l === pc(Zr(t)))) return o
    }
    const s = cd(i[e] || o[e], t) || cd(i.appContext[e], t)
    return !s && r ? o : s
  }
}
function cd(e, t) {
  return e && (e[t] || e[Zr(t)] || e[pc(Zr(t))])
}
const m1 = (e) => e.__isSuspense
function k5(e, t) {
  t && t.pendingBranch ? (tt(e) ? t.effects.push(...e) : t.effects.push(e)) : v5(e)
}
function Cx(e, t) {
  return yc(e, null, t)
}
function A5(e, t) {
  return yc(e, null, { flush: 'post' })
}
const ql = {}
function _s(e, t, n) {
  return yc(e, t, n)
}
function yc(e, t, { immediate: n, deep: r, flush: i, onTrack: o, onTrigger: s } = qt) {
  var l
  const c = U2() === ((l = vn) == null ? void 0 : l.scope) ? vn : null
  let f,
    h = !1,
    g = !1
  if (
    (jn(e)
      ? ((f = () => e.value), (h = nc(e)))
      : ys(e)
        ? ((f = () => e), (r = !0))
        : tt(e)
          ? ((g = !0),
            (h = e.some((C) => ys(C) || nc(C))),
            (f = () =>
              e.map((C) => {
                if (jn(C)) return C.value
                if (ys(C)) return Ao(C)
                if (ht(C)) return eo(C, c, 2)
              })))
          : ht(e)
            ? t
              ? (f = () => eo(e, c, 2))
              : (f = () => {
                  if (!(c && c.isUnmounted)) return v && v(), fr(e, c, 3, [p])
                })
            : (f = Xr),
    t && r)
  ) {
    const C = f
    f = () => Ao(C())
  }
  let v,
    p = (C) => {
      v = x.onStop = () => {
        eo(C, c, 4), (v = x.onStop = void 0)
      }
    },
    b
  if (Ba)
    if (((p = Xr), t ? n && fr(t, c, 3, [f(), g ? [] : void 0, p]) : f(), i === 'sync')) {
      const C = vg()
      b = C.__watcherHandles || (C.__watcherHandles = [])
    } else return Xr
  let w = g ? new Array(e.length).fill(ql) : ql
  const L = () => {
    if (x.active)
      if (t) {
        const C = x.run()
        ;(r || h || (g ? C.some((D, U) => To(D, w[U])) : To(C, w))) &&
          (v && v(), fr(t, c, 3, [C, w === ql ? void 0 : g && w[0] === ql ? [] : w, p]), (w = C))
      } else x.run()
  }
  L.allowRecurse = !!t
  let _
  i === 'sync' ? (_ = L) : i === 'post' ? (_ = () => wn(L, c && c.suspense)) : ((L.pre = !0), c && (L.id = c.uid), (_ = () => Gf(L)))
  const x = new zf(f, _)
  t ? (n ? L() : (w = x.run())) : i === 'post' ? wn(x.run.bind(x), c && c.suspense) : x.run()
  const k = () => {
    x.stop(), c && c.scope && Mf(c.scope.effects, x)
  }
  return b && b.push(k), k
}
function L5(e, t, n) {
  const r = this.proxy,
    i = Yt(e) ? (e.includes('.') ? v1(r, e) : () => r[e]) : e.bind(r, r)
  let o
  ht(t) ? (o = t) : ((o = t.handler), (n = t))
  const s = vn
  Cs(this)
  const l = yc(i, o.bind(r), n)
  return s ? Cs(s) : Po(), l
}
function v1(e, t) {
  const n = t.split('.')
  return () => {
    let r = e
    for (let i = 0; i < n.length && r; i++) r = r[n[i]]
    return r
  }
}
function Ao(e, t) {
  if (!Rt(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), jn(e))) Ao(e.value, t)
  else if (tt(e)) for (let n = 0; n < e.length; n++) Ao(e[n], t)
  else if (hc(e) || vs(e))
    e.forEach((n) => {
      Ao(n, t)
    })
  else if (Mp(e)) for (const n in e) Ao(e[n], t)
  return e
}
function lr(e, t) {
  const n = _n
  if (n === null) return e
  const r = kc(n) || n.proxy,
    i = e.dirs || (e.dirs = [])
  for (let o = 0; o < t.length; o++) {
    let [s, l, c, f = qt] = t[o]
    s && (ht(s) && (s = { mounted: s, updated: s }), s.deep && Ao(l), i.push({ dir: s, instance: r, value: l, oldValue: void 0, arg: c, modifiers: f }))
  }
  return e
}
function yo(e, t, n, r) {
  const i = e.dirs,
    o = t && t.dirs
  for (let s = 0; s < i.length; s++) {
    const l = i[s]
    o && (l.oldValue = o[s].value)
    let c = l.dir[r]
    c && (Rs(), fr(c, n, 8, [e.el, l, e, t]), Ms())
  }
}
const Gi = Symbol('_leaveCb'),
  zl = Symbol('_enterCb')
function b1() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    so(() => {
      e.isMounted = !0
    }),
    Xf(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const ar = [Function, Array],
  y1 = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ar,
    onEnter: ar,
    onAfterEnter: ar,
    onEnterCancelled: ar,
    onBeforeLeave: ar,
    onLeave: ar,
    onAfterLeave: ar,
    onLeaveCancelled: ar,
    onBeforeAppear: ar,
    onAppear: ar,
    onAfterAppear: ar,
    onAppearCancelled: ar
  },
  N5 = {
    name: 'BaseTransition',
    props: y1,
    setup(e, { slots: t }) {
      const n = Va(),
        r = b1()
      let i
      return () => {
        const o = t.default && Jf(t.default(), !0)
        if (!o || !o.length) return
        let s = o[0]
        if (o.length > 1) {
          for (const w of o)
            if (w.type !== hr) {
              s = w
              break
            }
        }
        const l = kt(e),
          { mode: c } = l
        if (r.isLeaving) return ju(s)
        const f = ud(s)
        if (!f) return ju(s)
        const h = Ra(f, l, r, n)
        Ls(f, h)
        const g = n.subTree,
          v = g && ud(g)
        let p = !1
        const { getTransitionKey: b } = f.type
        if (b) {
          const w = b()
          i === void 0 ? (i = w) : w !== i && ((i = w), (p = !0))
        }
        if (v && v.type !== hr && (!Yi(f, v) || p)) {
          const w = Ra(v, l, r, n)
          if ((Ls(v, w), c === 'out-in'))
            return (
              (r.isLeaving = !0),
              (w.afterLeave = () => {
                ;(r.isLeaving = !1), n.update.active !== !1 && n.update()
              }),
              ju(s)
            )
          c === 'in-out' &&
            f.type !== hr &&
            (w.delayLeave = (L, _, x) => {
              const k = w1(r, v)
              ;(k[String(v.key)] = v),
                (L[Gi] = () => {
                  _(), (L[Gi] = void 0), delete h.delayedLeave
                }),
                (h.delayedLeave = x)
            })
        }
        return s
      }
    }
  },
  P5 = N5
function w1(e, t) {
  const { leavingVNodes: n } = e
  let r = n.get(t.type)
  return r || ((r = Object.create(null)), n.set(t.type, r)), r
}
function Ra(e, t, n, r) {
  const {
      appear: i,
      mode: o,
      persisted: s = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: f,
      onEnterCancelled: h,
      onBeforeLeave: g,
      onLeave: v,
      onAfterLeave: p,
      onLeaveCancelled: b,
      onBeforeAppear: w,
      onAppear: L,
      onAfterAppear: _,
      onAppearCancelled: x
    } = t,
    k = String(e.key),
    C = w1(n, e),
    D = (N, V) => {
      N && fr(N, r, 9, V)
    },
    U = (N, V) => {
      const Q = V[1]
      D(N, V), tt(N) ? N.every((P) => P.length <= 1) && Q() : N.length <= 1 && Q()
    },
    E = {
      mode: o,
      persisted: s,
      beforeEnter(N) {
        let V = l
        if (!n.isMounted)
          if (i) V = w || l
          else return
        N[Gi] && N[Gi](!0)
        const Q = C[k]
        Q && Yi(e, Q) && Q.el[Gi] && Q.el[Gi](), D(V, [N])
      },
      enter(N) {
        let V = c,
          Q = f,
          P = h
        if (!n.isMounted)
          if (i) (V = L || c), (Q = _ || f), (P = x || h)
          else return
        let S = !1
        const z = (N[zl] = ($) => {
          S || ((S = !0), $ ? D(P, [N]) : D(Q, [N]), E.delayedLeave && E.delayedLeave(), (N[zl] = void 0))
        })
        V ? U(V, [N, z]) : z()
      },
      leave(N, V) {
        const Q = String(e.key)
        if ((N[zl] && N[zl](!0), n.isUnmounting)) return V()
        D(g, [N])
        let P = !1
        const S = (N[Gi] = (z) => {
          P || ((P = !0), V(), z ? D(b, [N]) : D(p, [N]), (N[Gi] = void 0), C[Q] === e && delete C[Q])
        })
        ;(C[Q] = e), v ? U(v, [N, S]) : S()
      },
      clone(N) {
        return Ra(N, t, n, r)
      }
    }
  return E
}
function ju(e) {
  if (wc(e)) return (e = xi(e)), (e.children = null), e
}
function ud(e) {
  return wc(e) ? (e.children ? e.children[0] : void 0) : e
}
function Ls(e, t) {
  e.shapeFlag & 6 && e.component
    ? Ls(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Jf(e, t = !1, n) {
  let r = [],
    i = 0
  for (let o = 0; o < e.length; o++) {
    let s = e[o]
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : o)
    s.type === He ? (s.patchFlag & 128 && i++, (r = r.concat(Jf(s.children, t, l)))) : (t || s.type !== hr) && r.push(l != null ? xi(s, { key: l }) : s)
  }
  if (i > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2
  return r
}
/*! #__NO_SIDE_EFFECTS__ */ function _1(e, t) {
  return ht(e) ? an({ name: e.name }, t, { setup: e }) : e
}
const xs = (e) => !!e.type.__asyncLoader,
  wc = (e) => e.type.__isKeepAlive,
  C5 = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] },
    setup(e, { slots: t }) {
      const n = Va(),
        r = n.ctx
      if (!r.renderer)
        return () => {
          const x = t.default && t.default()
          return x && x.length === 1 ? x[0] : x
        }
      const i = new Map(),
        o = new Set()
      let s = null
      const l = n.suspense,
        {
          renderer: {
            p: c,
            m: f,
            um: h,
            o: { createElement: g }
          }
        } = r,
        v = g('div')
      ;(r.activate = (x, k, C, D, U) => {
        const E = x.component
        f(x, k, C, 0, l),
          c(E.vnode, x, k, C, E, l, D, x.slotScopeIds, U),
          wn(() => {
            ;(E.isDeactivated = !1), E.a && bs(E.a)
            const N = x.props && x.props.onVnodeMounted
            N && cr(N, E.parent, x)
          }, l)
      }),
        (r.deactivate = (x) => {
          const k = x.component
          f(x, v, null, 1, l),
            wn(() => {
              k.da && bs(k.da)
              const C = x.props && x.props.onVnodeUnmounted
              C && cr(C, k.parent, x), (k.isDeactivated = !0)
            }, l)
        })
      function p(x) {
        Iu(x), h(x, n, l, !0)
      }
      function b(x) {
        i.forEach((k, C) => {
          const D = hf(k.type)
          D && (!x || !x(D)) && w(C)
        })
      }
      function w(x) {
        const k = i.get(x)
        !s || !Yi(k, s) ? p(k) : s && Iu(s), i.delete(x), o.delete(x)
      }
      _s(
        () => [e.include, e.exclude],
        ([x, k]) => {
          x && b((C) => xa(x, C)), k && b((C) => !xa(k, C))
        },
        { flush: 'post', deep: !0 }
      )
      let L = null
      const _ = () => {
        L != null && i.set(L, Eu(n.subTree))
      }
      return (
        so(_),
        Yf(_),
        Xf(() => {
          i.forEach((x) => {
            const { subTree: k, suspense: C } = n,
              D = Eu(k)
            if (x.type === D.type && x.key === D.key) {
              Iu(D)
              const U = D.component.da
              U && wn(U, C)
              return
            }
            p(x)
          })
        }),
        () => {
          if (((L = null), !t.default)) return null
          const x = t.default(),
            k = x[0]
          if (x.length > 1) return (s = null), x
          if (!Da(k) || (!(k.shapeFlag & 4) && !(k.shapeFlag & 128))) return (s = null), k
          let C = Eu(k)
          const D = C.type,
            U = hf(xs(C) ? C.type.__asyncResolved || {} : D),
            { include: E, exclude: N, max: V } = e
          if ((E && (!U || !xa(E, U))) || (N && U && xa(N, U))) return (s = C), k
          const Q = C.key == null ? D : C.key,
            P = i.get(Q)
          return (
            C.el && ((C = xi(C)), k.shapeFlag & 128 && (k.ssContent = C)),
            (L = Q),
            P
              ? ((C.el = P.el), (C.component = P.component), C.transition && Ls(C, C.transition), (C.shapeFlag |= 512), o.delete(Q), o.add(Q))
              : (o.add(Q), V && o.size > parseInt(V, 10) && w(o.values().next().value)),
            (C.shapeFlag |= 256),
            (s = C),
            m1(k.type) ? k : C
          )
        }
      )
    }
  },
  j5 = C5
function xa(e, t) {
  return tt(e) ? e.some((n) => xa(n, t)) : Yt(e) ? e.split(',').includes(t) : N2(e) ? e.test(t) : !1
}
function I5(e, t) {
  x1(e, 'a', t)
}
function E5(e, t) {
  x1(e, 'da', t)
}
function x1(e, t, n = vn) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n
      for (; i; ) {
        if (i.isDeactivated) return
        i = i.parent
      }
      return e()
    })
  if ((_c(t, r, n), n)) {
    let i = n.parent
    for (; i && i.parent; ) wc(i.parent.vnode) && T5(r, t, n, i), (i = i.parent)
  }
}
function T5(e, t, n, r) {
  const i = _c(t, e, r, !0)
  Qf(() => {
    Mf(r[t], i)
  }, n)
}
function Iu(e) {
  ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
}
function Eu(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function _c(e, t, n = vn, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...s) => {
          if (n.isUnmounted) return
          Rs(), Cs(n)
          const l = fr(t, n, e, s)
          return Po(), Ms(), l
        })
    return r ? i.unshift(o) : i.push(o), o
  }
}
const Si =
    (e) =>
    (t, n = vn) =>
      (!Ba || e === 'sp') && _c(e, (...r) => t(...r), n),
  F5 = Si('bm'),
  so = Si('m'),
  O5 = Si('bu'),
  Yf = Si('u'),
  Xf = Si('bum'),
  Qf = Si('um'),
  R5 = Si('sp'),
  M5 = Si('rtg'),
  D5 = Si('rtc')
function B5(e, t = vn) {
  _c('ec', e, t)
}
function Bt(e, t, n, r) {
  let i
  const o = n && n[r]
  if (tt(e) || Yt(e)) {
    i = new Array(e.length)
    for (let s = 0, l = e.length; s < l; s++) i[s] = t(e[s], s, void 0, o && o[s])
  } else if (typeof e == 'number') {
    i = new Array(e)
    for (let s = 0; s < e; s++) i[s] = t(s + 1, s, void 0, o && o[s])
  } else if (Rt(e))
    if (e[Symbol.iterator]) i = Array.from(e, (s, l) => t(s, l, void 0, o && o[l]))
    else {
      const s = Object.keys(e)
      i = new Array(s.length)
      for (let l = 0, c = s.length; l < c; l++) {
        const f = s[l]
        i[l] = t(e[f], f, l, o && o[l])
      }
    }
  else i = []
  return n && (n[r] = i), i
}
function Ns(e, t, n = {}, r, i) {
  if (_n.isCE || (_n.parent && xs(_n.parent) && _n.parent.isCE)) return t !== 'default' && (n.name = t), Xe('slot', n, r && r())
  let o = e[t]
  o && o._c && (o._d = !1), _e()
  const s = o && S1(o(n)),
    l = Ht(He, { key: n.key || (s && s.key) || `_${t}` }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2)
  return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), o && o._c && (o._d = !0), l
}
function S1(e) {
  return e.some((t) => (Da(t) ? !(t.type === hr || (t.type === He && !S1(t.children))) : !0)) ? e : null
}
const af = (e) => (e ? (F1(e) ? kc(e) || e.proxy : af(e.parent)) : null),
  ka = an(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => af(e.parent),
    $root: (e) => af(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Zf(e),
    $forceUpdate: (e) => e.f || (e.f = () => Gf(e.update)),
    $nextTick: (e) => e.n || (e.n = s1.bind(e.proxy)),
    $watch: (e) => L5.bind(e)
  }),
  Tu = (e, t) => e !== qt && !e.__isScriptSetup && St(e, t),
  q5 = {
    get({ _: e }, t) {
      const { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: l, appContext: c } = e
      let f
      if (t[0] !== '$') {
        const p = s[t]
        if (p !== void 0)
          switch (p) {
            case 1:
              return r[t]
            case 2:
              return i[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (Tu(r, t)) return (s[t] = 1), r[t]
          if (i !== qt && St(i, t)) return (s[t] = 2), i[t]
          if ((f = e.propsOptions[0]) && St(f, t)) return (s[t] = 3), o[t]
          if (n !== qt && St(n, t)) return (s[t] = 4), n[t]
          lf && (s[t] = 0)
        }
      }
      const h = ka[t]
      let g, v
      if (h) return t === '$attrs' && $n(e, 'get', t), h(e)
      if ((g = l.__cssModules) && (g = g[t])) return g
      if (n !== qt && St(n, t)) return (s[t] = 4), n[t]
      if (((v = c.config.globalProperties), St(v, t))) return v[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: i, ctx: o } = e
      return Tu(i, t)
        ? ((i[t] = n), !0)
        : r !== qt && St(r, t)
          ? ((r[t] = n), !0)
          : St(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o } }, s) {
      let l
      return !!n[s] || (e !== qt && St(e, s)) || Tu(t, s) || ((l = o[0]) && St(l, s)) || St(r, s) || St(ka, s) || St(i.config.globalProperties, s)
    },
    defineProperty(e, t, n) {
      return n.get != null ? (e._.accessCache[t] = 0) : St(n, 'value') && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
  }
function z5() {
  return U5().attrs
}
function U5() {
  const e = Va()
  return e.setupContext || (e.setupContext = R1(e))
}
function fd(e) {
  return tt(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let lf = !0
function H5(e) {
  const t = Zf(e),
    n = e.proxy,
    r = e.ctx
  ;(lf = !1), t.beforeCreate && hd(t.beforeCreate, e, 'bc')
  const {
    data: i,
    computed: o,
    methods: s,
    watch: l,
    provide: c,
    inject: f,
    created: h,
    beforeMount: g,
    mounted: v,
    beforeUpdate: p,
    updated: b,
    activated: w,
    deactivated: L,
    beforeDestroy: _,
    beforeUnmount: x,
    destroyed: k,
    unmounted: C,
    render: D,
    renderTracked: U,
    renderTriggered: E,
    errorCaptured: N,
    serverPrefetch: V,
    expose: Q,
    inheritAttrs: P,
    components: S,
    directives: z,
    filters: $
  } = t
  if ((f && $5(f, r, null), s))
    for (const H in s) {
      const X = s[H]
      ht(X) && (r[H] = X.bind(n))
    }
  if (i) {
    const H = i.call(n, n)
    Rt(H) && (e.data = er(H))
  }
  if (((lf = !0), o))
    for (const H in o) {
      const X = o[H],
        ne = ht(X) ? X.bind(n, n) : ht(X.get) ? X.get.bind(n, n) : Xr,
        fe = !ht(X) && ht(X.set) ? X.set.bind(n) : Xr,
        xe = ur({ get: ne, set: fe })
      Object.defineProperty(r, H, { enumerable: !0, configurable: !0, get: () => xe.value, set: (A) => (xe.value = A) })
    }
  if (l) for (const H in l) k1(l[H], r, n, H)
  if (c) {
    const H = ht(c) ? c.call(n) : c
    Reflect.ownKeys(H).forEach((X) => {
      Kl(X, H[X])
    })
  }
  h && hd(h, e, 'c')
  function W(H, X) {
    tt(X) ? X.forEach((ne) => H(ne.bind(n))) : X && H(X.bind(n))
  }
  if ((W(F5, g), W(so, v), W(O5, p), W(Yf, b), W(I5, w), W(E5, L), W(B5, N), W(D5, U), W(M5, E), W(Xf, x), W(Qf, C), W(R5, V), tt(Q)))
    if (Q.length) {
      const H = e.exposed || (e.exposed = {})
      Q.forEach((X) => {
        Object.defineProperty(H, X, { get: () => n[X], set: (ne) => (n[X] = ne) })
      })
    } else e.exposed || (e.exposed = {})
  D && e.render === Xr && (e.render = D), P != null && (e.inheritAttrs = P), S && (e.components = S), z && (e.directives = z)
}
function $5(e, t, n = Xr) {
  tt(e) && (e = cf(e))
  for (const r in e) {
    const i = e[r]
    let o
    Rt(i) ? ('default' in i ? (o = Tr(i.from || r, i.default, !0)) : (o = Tr(i.from || r))) : (o = Tr(i)),
      jn(o) ? Object.defineProperty(t, r, { enumerable: !0, configurable: !0, get: () => o.value, set: (s) => (o.value = s) }) : (t[r] = o)
  }
}
function hd(e, t, n) {
  fr(tt(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function k1(e, t, n, r) {
  const i = r.includes('.') ? v1(n, r) : () => n[r]
  if (Yt(e)) {
    const o = t[e]
    ht(o) && _s(i, o)
  } else if (ht(e)) _s(i, e.bind(n))
  else if (Rt(e))
    if (tt(e)) e.forEach((o) => k1(o, t, n, r))
    else {
      const o = ht(e.handler) ? e.handler.bind(n) : t[e.handler]
      ht(o) && _s(i, o, e)
    }
}
function Zf(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: i,
      optionsCache: o,
      config: { optionMergeStrategies: s }
    } = e.appContext,
    l = o.get(t)
  let c
  return l ? (c = l) : !i.length && !n && !r ? (c = t) : ((c = {}), i.length && i.forEach((f) => ic(c, f, s, !0)), ic(c, t, s)), Rt(t) && o.set(t, c), c
}
function ic(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t
  o && ic(e, o, n, !0), i && i.forEach((s) => ic(e, s, n, !0))
  for (const s in t)
    if (!(r && s === 'expose')) {
      const l = V5[s] || (n && n[s])
      e[s] = l ? l(e[s], t[s]) : t[s]
    }
  return e
}
const V5 = {
  data: dd,
  props: pd,
  emits: pd,
  methods: Sa,
  computed: Sa,
  beforeCreate: En,
  created: En,
  beforeMount: En,
  mounted: En,
  beforeUpdate: En,
  updated: En,
  beforeDestroy: En,
  beforeUnmount: En,
  destroyed: En,
  unmounted: En,
  activated: En,
  deactivated: En,
  errorCaptured: En,
  serverPrefetch: En,
  components: Sa,
  directives: Sa,
  watch: G5,
  provide: dd,
  inject: W5
}
function dd(e, t) {
  return t
    ? e
      ? function () {
          return an(ht(e) ? e.call(this, this) : e, ht(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function W5(e, t) {
  return Sa(cf(e), cf(t))
}
function cf(e) {
  if (tt(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function En(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Sa(e, t) {
  return e ? an(Object.create(null), e, t) : t
}
function pd(e, t) {
  return e ? (tt(e) && tt(t) ? [...new Set([...e, ...t])] : an(Object.create(null), fd(e), fd(t ?? {}))) : t
}
function G5(e, t) {
  if (!e) return t
  if (!t) return e
  const n = an(Object.create(null), e)
  for (const r in t) n[r] = En(e[r], t[r])
  return n
}
function A1() {
  return {
    app: null,
    config: {
      isNativeTag: A2,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let K5 = 0
function J5(e, t) {
  return function (r, i = null) {
    ht(r) || (r = an({}, r)), i != null && !Rt(i) && (i = null)
    const o = A1(),
      s = new WeakSet()
    let l = !1
    const c = (o.app = {
      _uid: K5++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: bg,
      get config() {
        return o.config
      },
      set config(f) {},
      use(f, ...h) {
        return s.has(f) || (f && ht(f.install) ? (s.add(f), f.install(c, ...h)) : ht(f) && (s.add(f), f(c, ...h))), c
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), c
      },
      component(f, h) {
        return h ? ((o.components[f] = h), c) : o.components[f]
      },
      directive(f, h) {
        return h ? ((o.directives[f] = h), c) : o.directives[f]
      },
      mount(f, h, g) {
        if (!l) {
          const v = Xe(r, i)
          return (
            (v.appContext = o), h && t ? t(v, f) : e(v, f, g), (l = !0), (c._container = f), (f.__vue_app__ = c), kc(v.component) || v.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__)
      },
      provide(f, h) {
        return (o.provides[f] = h), c
      },
      runWithContext(f) {
        oc = c
        try {
          return f()
        } finally {
          oc = null
        }
      }
    })
    return c
  }
}
let oc = null
function Kl(e, t) {
  if (vn) {
    let n = vn.provides
    const r = vn.parent && vn.parent.provides
    r === n && (n = vn.provides = Object.create(r)), (n[e] = t)
  }
}
function Tr(e, t, n = !1) {
  const r = vn || _n
  if (r || oc) {
    const i = r ? (r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides) : oc._context.provides
    if (i && e in i) return i[e]
    if (arguments.length > 1) return n && ht(t) ? t.call(r && r.proxy) : t
  }
}
function Y5(e, t, n, r = !1) {
  const i = {},
    o = {}
  tc(o, Sc, 1), (e.propsDefaults = Object.create(null)), L1(e, t, i, o)
  for (const s in e.propsOptions[0]) s in i || (i[s] = void 0)
  n ? (e.props = r ? i : Xp(i)) : e.type.props ? (e.props = i) : (e.props = o), (e.attrs = o)
}
function X5(e, t, n, r) {
  const {
      props: i,
      attrs: o,
      vnode: { patchFlag: s }
    } = e,
    l = kt(i),
    [c] = e.propsOptions
  let f = !1
  if ((r || s > 0) && !(s & 16)) {
    if (s & 8) {
      const h = e.vnode.dynamicProps
      for (let g = 0; g < h.length; g++) {
        let v = h[g]
        if (vc(e.emitsOptions, v)) continue
        const p = t[v]
        if (c)
          if (St(o, v)) p !== o[v] && ((o[v] = p), (f = !0))
          else {
            const b = Zr(v)
            i[b] = uf(c, l, b, p, e, !1)
          }
        else p !== o[v] && ((o[v] = p), (f = !0))
      }
    }
  } else {
    L1(e, t, i, o) && (f = !0)
    let h
    for (const g in l)
      (!t || (!St(t, g) && ((h = Os(g)) === g || !St(t, h)))) &&
        (c ? n && (n[g] !== void 0 || n[h] !== void 0) && (i[g] = uf(c, l, g, void 0, e, !0)) : delete i[g])
    if (o !== l) for (const g in o) (!t || !St(t, g)) && (delete o[g], (f = !0))
  }
  f && wi(e, 'set', '$attrs')
}
function L1(e, t, n, r) {
  const [i, o] = e.propsOptions
  let s = !1,
    l
  if (t)
    for (let c in t) {
      if (Gl(c)) continue
      const f = t[c]
      let h
      i && St(i, (h = Zr(c)))
        ? !o || !o.includes(h)
          ? (n[h] = f)
          : ((l || (l = {}))[h] = f)
        : vc(e.emitsOptions, c) || ((!(c in r) || f !== r[c]) && ((r[c] = f), (s = !0)))
    }
  if (o) {
    const c = kt(n),
      f = l || qt
    for (let h = 0; h < o.length; h++) {
      const g = o[h]
      n[g] = uf(i, c, g, f[g], e, !St(f, g))
    }
  }
  return s
}
function uf(e, t, n, r, i, o) {
  const s = e[n]
  if (s != null) {
    const l = St(s, 'default')
    if (l && r === void 0) {
      const c = s.default
      if (s.type !== Function && !s.skipFactory && ht(c)) {
        const { propsDefaults: f } = i
        n in f ? (r = f[n]) : (Cs(i), (r = f[n] = c.call(null, t)), Po())
      } else r = c
    }
    s[0] && (o && !l ? (r = !1) : s[1] && (r === '' || r === Os(n)) && (r = !0))
  }
  return r
}
function N1(e, t, n = !1) {
  const r = t.propsCache,
    i = r.get(e)
  if (i) return i
  const o = e.props,
    s = {},
    l = []
  let c = !1
  if (!ht(e)) {
    const h = (g) => {
      c = !0
      const [v, p] = N1(g, t, !0)
      an(s, v), p && l.push(...p)
    }
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h)
  }
  if (!o && !c) return Rt(e) && r.set(e, ms), ms
  if (tt(o))
    for (let h = 0; h < o.length; h++) {
      const g = Zr(o[h])
      gd(g) && (s[g] = qt)
    }
  else if (o)
    for (const h in o) {
      const g = Zr(h)
      if (gd(g)) {
        const v = o[h],
          p = (s[g] = tt(v) || ht(v) ? { type: v } : an({}, v))
        if (p) {
          const b = bd(Boolean, p.type),
            w = bd(String, p.type)
          ;(p[0] = b > -1), (p[1] = w < 0 || b < w), (b > -1 || St(p, 'default')) && l.push(g)
        }
      }
    }
  const f = [s, l]
  return Rt(e) && r.set(e, f), f
}
function gd(e) {
  return e[0] !== '$'
}
function md(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function vd(e, t) {
  return md(e) === md(t)
}
function bd(e, t) {
  return tt(t) ? t.findIndex((n) => vd(n, e)) : ht(t) && vd(t, e) ? 0 : -1
}
const P1 = (e) => e[0] === '_' || e === '$stable',
  eh = (e) => (tt(e) ? e.map(Gr) : [Gr(e)]),
  Q5 = (e, t, n) => {
    if (t._n) return t
    const r = Lt((...i) => eh(t(...i)), n)
    return (r._c = !1), r
  },
  C1 = (e, t, n) => {
    const r = e._ctx
    for (const i in e) {
      if (P1(i)) continue
      const o = e[i]
      if (ht(o)) t[i] = Q5(i, o, r)
      else if (o != null) {
        const s = eh(o)
        t[i] = () => s
      }
    }
  },
  j1 = (e, t) => {
    const n = eh(t)
    e.slots.default = () => n
  },
  Z5 = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = kt(t)), tc(t, '_', n)) : C1(t, (e.slots = {}))
    } else (e.slots = {}), t && j1(e, t)
    tc(e.slots, Sc, 1)
  },
  eg = (e, t, n) => {
    const { vnode: r, slots: i } = e
    let o = !0,
      s = qt
    if (r.shapeFlag & 32) {
      const l = t._
      l ? (n && l === 1 ? (o = !1) : (an(i, t), !n && l === 1 && delete i._)) : ((o = !t.$stable), C1(t, i)), (s = t)
    } else t && (j1(e, t), (s = { default: 1 }))
    if (o) for (const l in i) !P1(l) && s[l] == null && delete i[l]
  }
function ff(e, t, n, r, i = !1) {
  if (tt(e)) {
    e.forEach((v, p) => ff(v, t && (tt(t) ? t[p] : t), n, r, i))
    return
  }
  if (xs(r) && !i) return
  const o = r.shapeFlag & 4 ? kc(r.component) || r.component.proxy : r.el,
    s = i ? null : o,
    { i: l, r: c } = e,
    f = t && t.r,
    h = l.refs === qt ? (l.refs = {}) : l.refs,
    g = l.setupState
  if ((f != null && f !== c && (Yt(f) ? ((h[f] = null), St(g, f) && (g[f] = null)) : jn(f) && (f.value = null)), ht(c))) eo(c, l, 12, [s, h])
  else {
    const v = Yt(c),
      p = jn(c)
    if (v || p) {
      const b = () => {
        if (e.f) {
          const w = v ? (St(g, c) ? g[c] : h[c]) : c.value
          i
            ? tt(w) && Mf(w, o)
            : tt(w)
              ? w.includes(o) || w.push(o)
              : v
                ? ((h[c] = [o]), St(g, c) && (g[c] = h[c]))
                : ((c.value = [o]), e.k && (h[e.k] = c.value))
        } else v ? ((h[c] = s), St(g, c) && (g[c] = s)) : p && ((c.value = s), e.k && (h[e.k] = s))
      }
      s ? ((b.id = -1), wn(b, n)) : b()
    }
  }
}
const wn = k5
function tg(e) {
  return ng(e)
}
function ng(e, t) {
  const n = ef()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: i,
      patchProp: o,
      createElement: s,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: h,
      parentNode: g,
      nextSibling: v,
      setScopeId: p = Xr,
      insertStaticContent: b
    } = e,
    w = (q, K, ae, ie = null, R = null, ke = null, Le = !1, ge = null, we = !!K.dynamicChildren) => {
      if (q === K) return
      q && !Yi(q, K) && ((ie = Y(q)), A(q, R, ke, !0), (q = null)), K.patchFlag === -2 && ((we = !1), (K.dynamicChildren = null))
      const { type: ve, ref: Pe, shapeFlag: Ie } = K
      switch (ve) {
        case xc:
          L(q, K, ae, ie)
          break
        case hr:
          _(q, K, ae, ie)
          break
        case Jl:
          q == null && x(K, ae, ie, Le)
          break
        case He:
          S(q, K, ae, ie, R, ke, Le, ge, we)
          break
        default:
          Ie & 1
            ? D(q, K, ae, ie, R, ke, Le, ge, we)
            : Ie & 6
              ? z(q, K, ae, ie, R, ke, Le, ge, we)
              : (Ie & 64 || Ie & 128) && ve.process(q, K, ae, ie, R, ke, Le, ge, we, se)
      }
      Pe != null && R && ff(Pe, q && q.ref, ke, K || q, !K)
    },
    L = (q, K, ae, ie) => {
      if (q == null) r((K.el = l(K.children)), ae, ie)
      else {
        const R = (K.el = q.el)
        K.children !== q.children && f(R, K.children)
      }
    },
    _ = (q, K, ae, ie) => {
      q == null ? r((K.el = c(K.children || '')), ae, ie) : (K.el = q.el)
    },
    x = (q, K, ae, ie) => {
      ;[q.el, q.anchor] = b(q.children, K, ae, ie, q.el, q.anchor)
    },
    k = ({ el: q, anchor: K }, ae, ie) => {
      let R
      for (; q && q !== K; ) (R = v(q)), r(q, ae, ie), (q = R)
      r(K, ae, ie)
    },
    C = ({ el: q, anchor: K }) => {
      let ae
      for (; q && q !== K; ) (ae = v(q)), i(q), (q = ae)
      i(K)
    },
    D = (q, K, ae, ie, R, ke, Le, ge, we) => {
      ;(Le = Le || K.type === 'svg'), q == null ? U(K, ae, ie, R, ke, Le, ge, we) : V(q, K, R, ke, Le, ge, we)
    },
    U = (q, K, ae, ie, R, ke, Le, ge) => {
      let we, ve
      const { type: Pe, props: Ie, shapeFlag: Me, transition: Be, dirs: $e } = q
      if (
        ((we = q.el = s(q.type, ke, Ie && Ie.is, Ie)),
        Me & 8 ? h(we, q.children) : Me & 16 && N(q.children, we, null, ie, R, ke && Pe !== 'foreignObject', Le, ge),
        $e && yo(q, null, ie, 'created'),
        E(we, q, q.scopeId, Le, ie),
        Ie)
      ) {
        for (const Ze in Ie) Ze !== 'value' && !Gl(Ze) && o(we, Ze, null, Ie[Ze], ke, q.children, ie, R, re)
        'value' in Ie && o(we, 'value', null, Ie.value), (ve = Ie.onVnodeBeforeMount) && cr(ve, ie, q)
      }
      $e && yo(q, null, ie, 'beforeMount')
      const Qe = rg(R, Be)
      Qe && Be.beforeEnter(we),
        r(we, K, ae),
        ((ve = Ie && Ie.onVnodeMounted) || Qe || $e) &&
          wn(() => {
            ve && cr(ve, ie, q), Qe && Be.enter(we), $e && yo(q, null, ie, 'mounted')
          }, R)
    },
    E = (q, K, ae, ie, R) => {
      if ((ae && p(q, ae), ie)) for (let ke = 0; ke < ie.length; ke++) p(q, ie[ke])
      if (R) {
        let ke = R.subTree
        if (K === ke) {
          const Le = R.vnode
          E(q, Le, Le.scopeId, Le.slotScopeIds, R.parent)
        }
      }
    },
    N = (q, K, ae, ie, R, ke, Le, ge, we = 0) => {
      for (let ve = we; ve < q.length; ve++) {
        const Pe = (q[ve] = ge ? Ki(q[ve]) : Gr(q[ve]))
        w(null, Pe, K, ae, ie, R, ke, Le, ge)
      }
    },
    V = (q, K, ae, ie, R, ke, Le) => {
      const ge = (K.el = q.el)
      let { patchFlag: we, dynamicChildren: ve, dirs: Pe } = K
      we |= q.patchFlag & 16
      const Ie = q.props || qt,
        Me = K.props || qt
      let Be
      ae && wo(ae, !1), (Be = Me.onVnodeBeforeUpdate) && cr(Be, ae, K, q), Pe && yo(K, q, ae, 'beforeUpdate'), ae && wo(ae, !0)
      const $e = R && K.type !== 'foreignObject'
      if ((ve ? Q(q.dynamicChildren, ve, ge, ae, ie, $e, ke) : Le || X(q, K, ge, null, ae, ie, $e, ke, !1), we > 0)) {
        if (we & 16) P(ge, K, Ie, Me, ae, ie, R)
        else if ((we & 2 && Ie.class !== Me.class && o(ge, 'class', null, Me.class, R), we & 4 && o(ge, 'style', Ie.style, Me.style, R), we & 8)) {
          const Qe = K.dynamicProps
          for (let Ze = 0; Ze < Qe.length; Ze++) {
            const Ge = Qe[Ze],
              ot = Ie[Ge],
              qe = Me[Ge]
            ;(qe !== ot || Ge === 'value') && o(ge, Ge, ot, qe, R, q.children, ae, ie, re)
          }
        }
        we & 1 && q.children !== K.children && h(ge, K.children)
      } else !Le && ve == null && P(ge, K, Ie, Me, ae, ie, R)
      ;((Be = Me.onVnodeUpdated) || Pe) &&
        wn(() => {
          Be && cr(Be, ae, K, q), Pe && yo(K, q, ae, 'updated')
        }, ie)
    },
    Q = (q, K, ae, ie, R, ke, Le) => {
      for (let ge = 0; ge < K.length; ge++) {
        const we = q[ge],
          ve = K[ge],
          Pe = we.el && (we.type === He || !Yi(we, ve) || we.shapeFlag & 70) ? g(we.el) : ae
        w(we, ve, Pe, null, ie, R, ke, Le, !0)
      }
    },
    P = (q, K, ae, ie, R, ke, Le) => {
      if (ae !== ie) {
        if (ae !== qt) for (const ge in ae) !Gl(ge) && !(ge in ie) && o(q, ge, ae[ge], null, Le, K.children, R, ke, re)
        for (const ge in ie) {
          if (Gl(ge)) continue
          const we = ie[ge],
            ve = ae[ge]
          we !== ve && ge !== 'value' && o(q, ge, ve, we, Le, K.children, R, ke, re)
        }
        'value' in ie && o(q, 'value', ae.value, ie.value)
      }
    },
    S = (q, K, ae, ie, R, ke, Le, ge, we) => {
      const ve = (K.el = q ? q.el : l('')),
        Pe = (K.anchor = q ? q.anchor : l(''))
      let { patchFlag: Ie, dynamicChildren: Me, slotScopeIds: Be } = K
      Be && (ge = ge ? ge.concat(Be) : Be),
        q == null
          ? (r(ve, ae, ie), r(Pe, ae, ie), N(K.children, ae, Pe, R, ke, Le, ge, we))
          : Ie > 0 && Ie & 64 && Me && q.dynamicChildren
            ? (Q(q.dynamicChildren, Me, ae, R, ke, Le, ge), (K.key != null || (R && K === R.subTree)) && I1(q, K, !0))
            : X(q, K, ae, Pe, R, ke, Le, ge, we)
    },
    z = (q, K, ae, ie, R, ke, Le, ge, we) => {
      ;(K.slotScopeIds = ge), q == null ? (K.shapeFlag & 512 ? R.ctx.activate(K, ae, ie, Le, we) : $(K, ae, ie, R, ke, Le, we)) : de(q, K, we)
    },
    $ = (q, K, ae, ie, R, ke, Le) => {
      const ge = (q.component = fg(q, ie, R))
      if ((wc(q) && (ge.ctx.renderer = se), hg(ge), ge.asyncDep)) {
        if ((R && R.registerDep(ge, W), !q.el)) {
          const we = (ge.subTree = Xe(hr))
          _(null, we, K, ae)
        }
        return
      }
      W(ge, q, K, ae, R, ke, Le)
    },
    de = (q, K, ae) => {
      const ie = (K.component = q.component)
      if (x5(q, K, ae))
        if (ie.asyncDep && !ie.asyncResolved) {
          H(ie, K, ae)
          return
        } else (ie.next = K), m5(ie.update), ie.update()
      else (K.el = q.el), (ie.vnode = K)
    },
    W = (q, K, ae, ie, R, ke, Le) => {
      const ge = () => {
          if (q.isMounted) {
            let { next: Pe, bu: Ie, u: Me, parent: Be, vnode: $e } = q,
              Qe = Pe,
              Ze
            wo(q, !1),
              Pe ? ((Pe.el = $e.el), H(q, Pe, Le)) : (Pe = $e),
              Ie && bs(Ie),
              (Ze = Pe.props && Pe.props.onVnodeBeforeUpdate) && cr(Ze, Be, Pe, $e),
              wo(q, !0)
            const Ge = Cu(q),
              ot = q.subTree
            ;(q.subTree = Ge),
              w(ot, Ge, g(ot.el), Y(ot), q, R, ke),
              (Pe.el = Ge.el),
              Qe === null && S5(q, Ge.el),
              Me && wn(Me, R),
              (Ze = Pe.props && Pe.props.onVnodeUpdated) && wn(() => cr(Ze, Be, Pe, $e), R)
          } else {
            let Pe
            const { el: Ie, props: Me } = K,
              { bm: Be, m: $e, parent: Qe } = q,
              Ze = xs(K)
            if ((wo(q, !1), Be && bs(Be), !Ze && (Pe = Me && Me.onVnodeBeforeMount) && cr(Pe, Qe, K), wo(q, !0), Ie && je)) {
              const Ge = () => {
                ;(q.subTree = Cu(q)), je(Ie, q.subTree, q, R, null)
              }
              Ze ? K.type.__asyncLoader().then(() => !q.isUnmounted && Ge()) : Ge()
            } else {
              const Ge = (q.subTree = Cu(q))
              w(null, Ge, ae, ie, q, R, ke), (K.el = Ge.el)
            }
            if (($e && wn($e, R), !Ze && (Pe = Me && Me.onVnodeMounted))) {
              const Ge = K
              wn(() => cr(Pe, Qe, Ge), R)
            }
            ;(K.shapeFlag & 256 || (Qe && xs(Qe.vnode) && Qe.vnode.shapeFlag & 256)) && q.a && wn(q.a, R), (q.isMounted = !0), (K = ae = ie = null)
          }
        },
        we = (q.effect = new zf(ge, () => Gf(ve), q.scope)),
        ve = (q.update = () => we.run())
      ;(ve.id = q.uid), wo(q, !0), ve()
    },
    H = (q, K, ae) => {
      K.component = q
      const ie = q.vnode.props
      ;(q.vnode = K), (q.next = null), X5(q, K.props, ie, ae), eg(q, K.children, ae), Rs(), ad(q), Ms()
    },
    X = (q, K, ae, ie, R, ke, Le, ge, we = !1) => {
      const ve = q && q.children,
        Pe = q ? q.shapeFlag : 0,
        Ie = K.children,
        { patchFlag: Me, shapeFlag: Be } = K
      if (Me > 0) {
        if (Me & 128) {
          fe(ve, Ie, ae, ie, R, ke, Le, ge, we)
          return
        } else if (Me & 256) {
          ne(ve, Ie, ae, ie, R, ke, Le, ge, we)
          return
        }
      }
      Be & 8
        ? (Pe & 16 && re(ve, R, ke), Ie !== ve && h(ae, Ie))
        : Pe & 16
          ? Be & 16
            ? fe(ve, Ie, ae, ie, R, ke, Le, ge, we)
            : re(ve, R, ke, !0)
          : (Pe & 8 && h(ae, ''), Be & 16 && N(Ie, ae, ie, R, ke, Le, ge, we))
    },
    ne = (q, K, ae, ie, R, ke, Le, ge, we) => {
      ;(q = q || ms), (K = K || ms)
      const ve = q.length,
        Pe = K.length,
        Ie = Math.min(ve, Pe)
      let Me
      for (Me = 0; Me < Ie; Me++) {
        const Be = (K[Me] = we ? Ki(K[Me]) : Gr(K[Me]))
        w(q[Me], Be, ae, null, R, ke, Le, ge, we)
      }
      ve > Pe ? re(q, R, ke, !0, !1, Ie) : N(K, ae, ie, R, ke, Le, ge, we, Ie)
    },
    fe = (q, K, ae, ie, R, ke, Le, ge, we) => {
      let ve = 0
      const Pe = K.length
      let Ie = q.length - 1,
        Me = Pe - 1
      for (; ve <= Ie && ve <= Me; ) {
        const Be = q[ve],
          $e = (K[ve] = we ? Ki(K[ve]) : Gr(K[ve]))
        if (Yi(Be, $e)) w(Be, $e, ae, null, R, ke, Le, ge, we)
        else break
        ve++
      }
      for (; ve <= Ie && ve <= Me; ) {
        const Be = q[Ie],
          $e = (K[Me] = we ? Ki(K[Me]) : Gr(K[Me]))
        if (Yi(Be, $e)) w(Be, $e, ae, null, R, ke, Le, ge, we)
        else break
        Ie--, Me--
      }
      if (ve > Ie) {
        if (ve <= Me) {
          const Be = Me + 1,
            $e = Be < Pe ? K[Be].el : ie
          for (; ve <= Me; ) w(null, (K[ve] = we ? Ki(K[ve]) : Gr(K[ve])), ae, $e, R, ke, Le, ge, we), ve++
        }
      } else if (ve > Me) for (; ve <= Ie; ) A(q[ve], R, ke, !0), ve++
      else {
        const Be = ve,
          $e = ve,
          Qe = new Map()
        for (ve = $e; ve <= Me; ve++) {
          const dt = (K[ve] = we ? Ki(K[ve]) : Gr(K[ve]))
          dt.key != null && Qe.set(dt.key, ve)
        }
        let Ze,
          Ge = 0
        const ot = Me - $e + 1
        let qe = !1,
          cn = 0
        const gt = new Array(ot)
        for (ve = 0; ve < ot; ve++) gt[ve] = 0
        for (ve = Be; ve <= Ie; ve++) {
          const dt = q[ve]
          if (Ge >= ot) {
            A(dt, R, ke, !0)
            continue
          }
          let vt
          if (dt.key != null) vt = Qe.get(dt.key)
          else
            for (Ze = $e; Ze <= Me; Ze++)
              if (gt[Ze - $e] === 0 && Yi(dt, K[Ze])) {
                vt = Ze
                break
              }
          vt === void 0 ? A(dt, R, ke, !0) : ((gt[vt - $e] = ve + 1), vt >= cn ? (cn = vt) : (qe = !0), w(dt, K[vt], ae, null, R, ke, Le, ge, we), Ge++)
        }
        const Rn = qe ? ig(gt) : ms
        for (Ze = Rn.length - 1, ve = ot - 1; ve >= 0; ve--) {
          const dt = $e + ve,
            vt = K[dt],
            Kn = dt + 1 < Pe ? K[dt + 1].el : ie
          gt[ve] === 0 ? w(null, vt, ae, Kn, R, ke, Le, ge, we) : qe && (Ze < 0 || ve !== Rn[Ze] ? xe(vt, ae, Kn, 2) : Ze--)
        }
      }
    },
    xe = (q, K, ae, ie, R = null) => {
      const { el: ke, type: Le, transition: ge, children: we, shapeFlag: ve } = q
      if (ve & 6) {
        xe(q.component.subTree, K, ae, ie)
        return
      }
      if (ve & 128) {
        q.suspense.move(K, ae, ie)
        return
      }
      if (ve & 64) {
        Le.move(q, K, ae, se)
        return
      }
      if (Le === He) {
        r(ke, K, ae)
        for (let Ie = 0; Ie < we.length; Ie++) xe(we[Ie], K, ae, ie)
        r(q.anchor, K, ae)
        return
      }
      if (Le === Jl) {
        k(q, K, ae)
        return
      }
      if (ie !== 2 && ve & 1 && ge)
        if (ie === 0) ge.beforeEnter(ke), r(ke, K, ae), wn(() => ge.enter(ke), R)
        else {
          const { leave: Ie, delayLeave: Me, afterLeave: Be } = ge,
            $e = () => r(ke, K, ae),
            Qe = () => {
              Ie(ke, () => {
                $e(), Be && Be()
              })
            }
          Me ? Me(ke, $e, Qe) : Qe()
        }
      else r(ke, K, ae)
    },
    A = (q, K, ae, ie = !1, R = !1) => {
      const { type: ke, props: Le, ref: ge, children: we, dynamicChildren: ve, shapeFlag: Pe, patchFlag: Ie, dirs: Me } = q
      if ((ge != null && ff(ge, null, ae, q, !0), Pe & 256)) {
        K.ctx.deactivate(q)
        return
      }
      const Be = Pe & 1 && Me,
        $e = !xs(q)
      let Qe
      if (($e && (Qe = Le && Le.onVnodeBeforeUnmount) && cr(Qe, K, q), Pe & 6)) ee(q.component, ae, ie)
      else {
        if (Pe & 128) {
          q.suspense.unmount(ae, ie)
          return
        }
        Be && yo(q, null, K, 'beforeUnmount'),
          Pe & 64
            ? q.type.remove(q, K, ae, R, se, ie)
            : ve && (ke !== He || (Ie > 0 && Ie & 64))
              ? re(ve, K, ae, !1, !0)
              : ((ke === He && Ie & 384) || (!R && Pe & 16)) && re(we, K, ae),
          ie && B(q)
      }
      ;(($e && (Qe = Le && Le.onVnodeUnmounted)) || Be) &&
        wn(() => {
          Qe && cr(Qe, K, q), Be && yo(q, null, K, 'unmounted')
        }, ae)
    },
    B = (q) => {
      const { type: K, el: ae, anchor: ie, transition: R } = q
      if (K === He) {
        G(ae, ie)
        return
      }
      if (K === Jl) {
        C(q)
        return
      }
      const ke = () => {
        i(ae), R && !R.persisted && R.afterLeave && R.afterLeave()
      }
      if (q.shapeFlag & 1 && R && !R.persisted) {
        const { leave: Le, delayLeave: ge } = R,
          we = () => Le(ae, ke)
        ge ? ge(q.el, ke, we) : we()
      } else ke()
    },
    G = (q, K) => {
      let ae
      for (; q !== K; ) (ae = v(q)), i(q), (q = ae)
      i(K)
    },
    ee = (q, K, ae) => {
      const { bum: ie, scope: R, update: ke, subTree: Le, um: ge } = q
      ie && bs(ie),
        R.stop(),
        ke && ((ke.active = !1), A(Le, q, K, ae)),
        ge && wn(ge, K),
        wn(() => {
          q.isUnmounted = !0
        }, K),
        K &&
          K.pendingBranch &&
          !K.isUnmounted &&
          q.asyncDep &&
          !q.asyncResolved &&
          q.suspenseId === K.pendingId &&
          (K.deps--, K.deps === 0 && K.resolve())
    },
    re = (q, K, ae, ie = !1, R = !1, ke = 0) => {
      for (let Le = ke; Le < q.length; Le++) A(q[Le], K, ae, ie, R)
    },
    Y = (q) => (q.shapeFlag & 6 ? Y(q.component.subTree) : q.shapeFlag & 128 ? q.suspense.next() : v(q.anchor || q.el)),
    oe = (q, K, ae) => {
      q == null ? K._vnode && A(K._vnode, null, null, !0) : w(K._vnode || null, q, K, null, null, null, ae), ad(), l1(), (K._vnode = q)
    },
    se = { p: w, um: A, m: xe, r: B, mt: $, mc: N, pc: X, pbc: Q, n: Y, o: e }
  let Se, je
  return t && ([Se, je] = t(se)), { render: oe, hydrate: Se, createApp: J5(oe, Se) }
}
function wo({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function rg(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function I1(e, t, n = !1) {
  const r = e.children,
    i = t.children
  if (tt(r) && tt(i))
    for (let o = 0; o < r.length; o++) {
      const s = r[o]
      let l = i[o]
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = i[o] = Ki(i[o])), (l.el = s.el)), n || I1(s, l)),
        l.type === xc && (l.el = s.el)
    }
}
function ig(e) {
  const t = e.slice(),
    n = [0]
  let r, i, o, s, l
  const c = e.length
  for (r = 0; r < c; r++) {
    const f = e[r]
    if (f !== 0) {
      if (((i = n[n.length - 1]), e[i] < f)) {
        ;(t[r] = i), n.push(r)
        continue
      }
      for (o = 0, s = n.length - 1; o < s; ) (l = (o + s) >> 1), e[n[l]] < f ? (o = l + 1) : (s = l)
      f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r))
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; ) (n[o] = s), (s = t[s])
  return n
}
const og = (e) => e.__isTeleport,
  He = Symbol.for('v-fgt'),
  xc = Symbol.for('v-txt'),
  hr = Symbol.for('v-cmt'),
  Jl = Symbol.for('v-stc'),
  Aa = []
let Er = null
function _e(e = !1) {
  Aa.push((Er = e ? null : []))
}
function sg() {
  Aa.pop(), (Er = Aa[Aa.length - 1] || null)
}
let Ma = 1
function yd(e) {
  Ma += e
}
function E1(e) {
  return (e.dynamicChildren = Ma > 0 ? Er || ms : null), sg(), Ma > 0 && Er && Er.push(e), e
}
function Ne(e, t, n, r, i, o) {
  return E1(te(e, t, n, r, i, o, !0))
}
function Ht(e, t, n, r, i) {
  return E1(Xe(e, t, n, r, i, !0))
}
function Da(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Yi(e, t) {
  return e.type === t.type && e.key === t.key
}
const Sc = '__vInternal',
  T1 = ({ key: e }) => e ?? null,
  Yl = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e), e != null ? (Yt(e) || jn(e) || ht(e) ? { i: _n, r: e, k: t, f: !!n } : e) : null
  )
function te(e, t = null, n = null, r = 0, i = null, o = e === He ? 0 : 1, s = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && T1(t),
    ref: t && Yl(t),
    scopeId: bc,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: _n
  }
  return (
    l ? (th(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= Yt(n) ? 8 : 16),
    Ma > 0 && !s && Er && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Er.push(c),
    c
  )
}
const Xe = ag
function ag(e, t = null, n = null, r = 0, i = null, o = !1) {
  if (((!e || e === d1) && (e = hr), Da(e))) {
    const l = xi(e, t, !0)
    return n && th(l, n), Ma > 0 && !o && Er && (l.shapeFlag & 6 ? (Er[Er.indexOf(e)] = l) : Er.push(l)), (l.patchFlag |= -2), l
  }
  if ((gg(e) && (e = e.__vccOpts), t)) {
    t = lg(t)
    let { class: l, style: c } = t
    l && !Yt(l) && (t.class = Jt(l)), Rt(c) && (Zp(c) && !tt(c) && (c = an({}, c)), (t.style = Bf(c)))
  }
  const s = Yt(e) ? 1 : m1(e) ? 128 : og(e) ? 64 : Rt(e) ? 4 : ht(e) ? 2 : 0
  return te(e, t, n, r, i, s, o, !0)
}
function lg(e) {
  return e ? (Zp(e) || Sc in e ? an({}, e) : e) : null
}
function xi(e, t, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: s } = e,
    l = t ? Ps(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && T1(l),
    ref: t && t.ref ? (n && i ? (tt(i) ? i.concat(Yl(t)) : [i, Yl(t)]) : Yl(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== He ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && xi(e.ssContent),
    ssFallback: e.ssFallback && xi(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function Ke(e = ' ', t = 0) {
  return Xe(xc, null, e, t)
}
function Vn(e = '', t = !1) {
  return t ? (_e(), Ht(hr, null, e)) : Xe(hr, null, e)
}
function Gr(e) {
  return e == null || typeof e == 'boolean' ? Xe(hr) : tt(e) ? Xe(He, null, e.slice()) : typeof e == 'object' ? Ki(e) : Xe(xc, null, String(e))
}
function Ki(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : xi(e)
}
function th(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (tt(t)) n = 16
  else if (typeof t == 'object')
    if (r & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), th(e, i()), i._c && (i._d = !0))
      return
    } else {
      n = 32
      const i = t._
      !i && !(Sc in t) ? (t._ctx = _n) : i === 3 && _n && (_n.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else ht(t) ? ((t = { default: t, _ctx: _n }), (n = 32)) : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ke(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Ps(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const i in r)
      if (i === 'class') t.class !== r.class && (t.class = Jt([t.class, r.class]))
      else if (i === 'style') t.style = Bf([t.style, r.style])
      else if (fc(i)) {
        const o = t[i],
          s = r[i]
        s && o !== s && !(tt(o) && o.includes(s)) && (t[i] = o ? [].concat(o, s) : s)
      } else i !== '' && (t[i] = r[i])
  }
  return t
}
function cr(e, t, n, r = null) {
  fr(e, t, 7, [n, r])
}
const cg = A1()
let ug = 0
function fg(e, t, n) {
  const r = e.type,
    i = (t ? t.appContext : e.appContext) || cg,
    o = {
      uid: ug++,
      vnode: e,
      type: r,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new q2(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: N1(r, i),
      emitsOptions: u1(r, i),
      emit: null,
      emitted: null,
      propsDefaults: qt,
      inheritAttrs: r.inheritAttrs,
      ctx: qt,
      data: qt,
      props: qt,
      attrs: qt,
      slots: qt,
      refs: qt,
      setupState: qt,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = y5.bind(null, o)), e.ce && e.ce(o), o
}
let vn = null
const Va = () => vn || _n
let nh,
  cs,
  wd = '__VUE_INSTANCE_SETTERS__'
;(cs = ef()[wd]) || (cs = ef()[wd] = []),
  cs.push((e) => (vn = e)),
  (nh = (e) => {
    cs.length > 1 ? cs.forEach((t) => t(e)) : cs[0](e)
  })
const Cs = (e) => {
    nh(e), e.scope.on()
  },
  Po = () => {
    vn && vn.scope.off(), nh(null)
  }
function F1(e) {
  return e.vnode.shapeFlag & 4
}
let Ba = !1
function hg(e, t = !1) {
  Ba = t
  const { props: n, children: r } = e.vnode,
    i = F1(e)
  Y5(e, n, i, t), Z5(e, r)
  const o = i ? dg(e, t) : void 0
  return (Ba = !1), o
}
function dg(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = e1(new Proxy(e.ctx, q5)))
  const { setup: r } = n
  if (r) {
    const i = (e.setupContext = r.length > 1 ? R1(e) : null)
    Cs(e), Rs()
    const o = eo(r, e, 0, [e.props, i])
    if ((Ms(), Po(), Op(o))) {
      if ((o.then(Po, Po), t))
        return o
          .then((s) => {
            _d(e, s, t)
          })
          .catch((s) => {
            mc(s, e, 0)
          })
      e.asyncDep = o
    } else _d(e, o, t)
  } else O1(e, t)
}
function _d(e, t, n) {
  ht(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : Rt(t) && (e.setupState = i1(t)), O1(e, n)
}
let xd
function O1(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && xd && !r.render) {
      const i = r.template || Zf(e).template
      if (i) {
        const { isCustomElement: o, compilerOptions: s } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          f = an(an({ isCustomElement: o, delimiters: l }, s), c)
        r.render = xd(i, f)
      }
    }
    e.render = r.render || Xr
  }
  {
    Cs(e), Rs()
    try {
      H5(e)
    } finally {
      Ms(), Po()
    }
  }
}
function pg(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return $n(e, 'get', '$attrs'), t[n]
      }
    }))
  )
}
function R1(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return pg(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}
function kc(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(i1(e1(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in ka) return ka[n](e)
        },
        has(t, n) {
          return n in t || n in ka
        }
      }))
    )
}
function hf(e, t = !0) {
  return ht(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function gg(e) {
  return ht(e) && '__vccOpts' in e
}
const ur = (e, t) => d5(e, t, Ba)
function rh(e, t, n) {
  const r = arguments.length
  return r === 2
    ? Rt(t) && !tt(t)
      ? Da(t)
        ? Xe(e, null, [t])
        : Xe(e, t)
      : Xe(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Da(n) && (n = [n]), Xe(e, t, n))
}
const mg = Symbol.for('v-scx'),
  vg = () => Tr(mg),
  bg = '3.3.11',
  yg = 'http://www.w3.org/2000/svg',
  ko = typeof document < 'u' ? document : null,
  Sd = ko && ko.createElement('template'),
  wg = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const i = t ? ko.createElementNS(yg, e) : ko.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && r && r.multiple != null && i.setAttribute('multiple', r.multiple), i
    },
    createText: (e) => ko.createTextNode(e),
    createComment: (e) => ko.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ko.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, r, i, o) {
      const s = n ? n.previousSibling : t.lastChild
      if (i && (i === o || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); );
      else {
        Sd.innerHTML = r ? `<svg>${e}</svg>` : e
        const l = Sd.content
        if (r) {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  zi = 'transition',
  ga = 'animation',
  js = Symbol('_vtc'),
  Ac = (e, { slots: t }) => rh(P5, D1(e), t)
Ac.displayName = 'Transition'
const M1 = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  _g = (Ac.props = an({}, y1, M1)),
  _o = (e, t = []) => {
    tt(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  kd = (e) => (e ? (tt(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function D1(e) {
  const t = {}
  for (const S in e) S in M1 || (t[S] = e[S])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: r,
      duration: i,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: s = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: f = s,
      appearToClass: h = l,
      leaveFromClass: g = `${n}-leave-from`,
      leaveActiveClass: v = `${n}-leave-active`,
      leaveToClass: p = `${n}-leave-to`
    } = e,
    b = xg(i),
    w = b && b[0],
    L = b && b[1],
    {
      onBeforeEnter: _,
      onEnter: x,
      onEnterCancelled: k,
      onLeave: C,
      onLeaveCancelled: D,
      onBeforeAppear: U = _,
      onAppear: E = x,
      onAppearCancelled: N = k
    } = t,
    V = (S, z, $) => {
      Wi(S, z ? h : l), Wi(S, z ? f : s), $ && $()
    },
    Q = (S, z) => {
      ;(S._isLeaving = !1), Wi(S, g), Wi(S, p), Wi(S, v), z && z()
    },
    P = (S) => (z, $) => {
      const de = S ? E : x,
        W = () => V(z, S, $)
      _o(de, [z, W]),
        Ad(() => {
          Wi(z, S ? c : o), vi(z, S ? h : l), kd(de) || Ld(z, r, w, W)
        })
    }
  return an(t, {
    onBeforeEnter(S) {
      _o(_, [S]), vi(S, o), vi(S, s)
    },
    onBeforeAppear(S) {
      _o(U, [S]), vi(S, c), vi(S, f)
    },
    onEnter: P(!1),
    onAppear: P(!0),
    onLeave(S, z) {
      S._isLeaving = !0
      const $ = () => Q(S, z)
      vi(S, g),
        q1(),
        vi(S, v),
        Ad(() => {
          S._isLeaving && (Wi(S, g), vi(S, p), kd(C) || Ld(S, r, L, $))
        }),
        _o(C, [S, $])
    },
    onEnterCancelled(S) {
      V(S, !1), _o(k, [S])
    },
    onAppearCancelled(S) {
      V(S, !0), _o(N, [S])
    },
    onLeaveCancelled(S) {
      Q(S), _o(D, [S])
    }
  })
}
function xg(e) {
  if (e == null) return null
  if (Rt(e)) return [Fu(e.enter), Fu(e.leave)]
  {
    const t = Fu(e)
    return [t, t]
  }
}
function Fu(e) {
  return E2(e)
}
function vi(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[js] || (e[js] = new Set())).add(t)
}
function Wi(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r))
  const n = e[js]
  n && (n.delete(t), n.size || (e[js] = void 0))
}
function Ad(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Sg = 0
function Ld(e, t, n, r) {
  const i = (e._endId = ++Sg),
    o = () => {
      i === e._endId && r()
    }
  if (n) return setTimeout(o, n)
  const { type: s, timeout: l, propCount: c } = B1(e, t)
  if (!s) return r()
  const f = s + 'end'
  let h = 0
  const g = () => {
      e.removeEventListener(f, v), o()
    },
    v = (p) => {
      p.target === e && ++h >= c && g()
    }
  setTimeout(() => {
    h < c && g()
  }, l + 1),
    e.addEventListener(f, v)
}
function B1(e, t) {
  const n = window.getComputedStyle(e),
    r = (b) => (n[b] || '').split(', '),
    i = r(`${zi}Delay`),
    o = r(`${zi}Duration`),
    s = Nd(i, o),
    l = r(`${ga}Delay`),
    c = r(`${ga}Duration`),
    f = Nd(l, c)
  let h = null,
    g = 0,
    v = 0
  t === zi
    ? s > 0 && ((h = zi), (g = s), (v = o.length))
    : t === ga
      ? f > 0 && ((h = ga), (g = f), (v = c.length))
      : ((g = Math.max(s, f)), (h = g > 0 ? (s > f ? zi : ga) : null), (v = h ? (h === zi ? o.length : c.length) : 0))
  const p = h === zi && /\b(transform|all)(,|$)/.test(r(`${zi}Property`).toString())
  return { type: h, timeout: g, propCount: v, hasTransform: p }
}
function Nd(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, r) => Pd(n) + Pd(e[r])))
}
function Pd(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function q1() {
  return document.body.offsetHeight
}
function kg(e, t, n) {
  const r = e[js]
  r && (t = (t ? [t, ...r] : [...r]).join(' ')), t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const ih = Symbol('_vod'),
  Ul = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[ih] = e.style.display === 'none' ? '' : e.style.display), n && t ? n.beforeEnter(e) : ma(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), ma(e, !0), r.enter(e))
            : r.leave(e, () => {
                ma(e, !1)
              })
          : ma(e, t))
    },
    beforeUnmount(e, { value: t }) {
      ma(e, t)
    }
  }
function ma(e, t) {
  e.style.display = t ? e[ih] : 'none'
}
function Ag(e, t, n) {
  const r = e.style,
    i = Yt(n)
  if (n && !i) {
    if (t && !Yt(t)) for (const o in t) n[o] == null && df(r, o, '')
    for (const o in n) df(r, o, n[o])
  } else {
    const o = r.display
    i ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'), ih in e && (r.display = o)
  }
}
const Cd = /\s*!important$/
function df(e, t, n) {
  if (tt(n)) n.forEach((r) => df(e, t, r))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const r = Lg(e, t)
    Cd.test(n) ? e.setProperty(Os(r), n.replace(Cd, ''), 'important') : (e[r] = n)
  }
}
const jd = ['Webkit', 'Moz', 'ms'],
  Ou = {}
function Lg(e, t) {
  const n = Ou[t]
  if (n) return n
  let r = Zr(t)
  if (r !== 'filter' && r in e) return (Ou[t] = r)
  r = pc(r)
  for (let i = 0; i < jd.length; i++) {
    const o = jd[i] + r
    if (o in e) return (Ou[t] = o)
  }
  return t
}
const Id = 'http://www.w3.org/1999/xlink'
function Ng(e, t, n, r, i) {
  if (r && t.startsWith('xlink:')) n == null ? e.removeAttributeNS(Id, t.slice(6, t.length)) : e.setAttributeNS(Id, t, n)
  else {
    const o = D2(t)
    n == null || (o && !Dp(n)) ? e.removeAttribute(t) : e.setAttribute(t, o ? '' : n)
  }
}
function Pg(e, t, n, r, i, o, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && s(r, i, o), (e[t] = n ?? '')
    return
  }
  const l = e.tagName
  if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
    e._value = n
    const f = l === 'OPTION' ? e.getAttribute('value') : e.value,
      h = n ?? ''
    f !== h && (e.value = h), n == null && e.removeAttribute(t)
    return
  }
  let c = !1
  if (n === '' || n == null) {
    const f = typeof e[t]
    f === 'boolean' ? (n = Dp(n)) : n == null && f === 'string' ? ((n = ''), (c = !0)) : f === 'number' && ((n = 0), (c = !0))
  }
  try {
    e[t] = n
  } catch {}
  c && e.removeAttribute(t)
}
function oh(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function Cg(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const Ed = Symbol('_vei')
function jg(e, t, n, r, i = null) {
  const o = e[Ed] || (e[Ed] = {}),
    s = o[t]
  if (r && s) s.value = r
  else {
    const [l, c] = Ig(t)
    if (r) {
      const f = (o[t] = Fg(r, i))
      oh(e, l, f, c)
    } else s && (Cg(e, l, s, c), (o[t] = void 0))
  }
}
const Td = /(?:Once|Passive|Capture)$/
function Ig(e) {
  let t
  if (Td.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Td)); ) (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Os(e.slice(2)), t]
}
let Ru = 0
const Eg = Promise.resolve(),
  Tg = () => Ru || (Eg.then(() => (Ru = 0)), (Ru = Date.now()))
function Fg(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    fr(Og(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = Tg()), n
}
function Og(e, t) {
  if (tt(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (i) => !i._stopped && r && r(i))
    )
  } else return t
}
const Fd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  Rg = (e, t, n, r, i = !1, o, s, l, c) => {
    t === 'class'
      ? kg(e, r, i)
      : t === 'style'
        ? Ag(e, n, r)
        : fc(t)
          ? Rf(t) || jg(e, t, n, r, s)
          : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : Mg(e, t, r, i))
            ? Pg(e, t, r, o, s, l, c)
            : (t === 'true-value' ? (e._trueValue = r) : t === 'false-value' && (e._falseValue = r), Ng(e, t, r, i))
  }
function Mg(e, t, n, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Fd(t) && ht(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const i = e.tagName
    if (i === 'IMG' || i === 'VIDEO' || i === 'CANVAS' || i === 'SOURCE') return !1
  }
  return Fd(t) && Yt(n) ? !1 : t in e
}
function sh(e) {
  const t = Va()
  if (!t) return
  const n = (t.ut = (i = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((o) => gf(o, i))
    }),
    r = () => {
      const i = e(t.proxy)
      pf(t.subTree, i), n(i)
    }
  A5(r),
    so(() => {
      const i = new MutationObserver(r)
      i.observe(t.subTree.el.parentNode, { childList: !0 }), Qf(() => i.disconnect())
    })
}
function pf(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense
    ;(e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          pf(n.activeBranch, t)
        })
  }
  for (; e.component; ) e = e.component.subTree
  if (e.shapeFlag & 1 && e.el) gf(e.el, t)
  else if (e.type === He) e.children.forEach((n) => pf(n, t))
  else if (e.type === Jl) {
    let { el: n, anchor: r } = e
    for (; n && (gf(n, t), n !== r); ) n = n.nextSibling
  }
}
function gf(e, t) {
  if (e.nodeType === 1) {
    const n = e.style
    for (const r in t) n.setProperty(`--${r}`, t[r])
  }
}
const z1 = new WeakMap(),
  U1 = new WeakMap(),
  sc = Symbol('_moveCb'),
  Od = Symbol('_enterCb'),
  H1 = {
    name: 'TransitionGroup',
    props: an({}, _g, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Va(),
        r = b1()
      let i, o
      return (
        Yf(() => {
          if (!i.length) return
          const s = e.moveClass || `${e.name || 'v'}-move`
          if (!Hg(i[0].el, n.vnode.el, s)) return
          i.forEach(qg), i.forEach(zg)
          const l = i.filter(Ug)
          q1(),
            l.forEach((c) => {
              const f = c.el,
                h = f.style
              vi(f, s), (h.transform = h.webkitTransform = h.transitionDuration = '')
              const g = (f[sc] = (v) => {
                ;(v && v.target !== f) ||
                  ((!v || /transform$/.test(v.propertyName)) && (f.removeEventListener('transitionend', g), (f[sc] = null), Wi(f, s)))
              })
              f.addEventListener('transitionend', g)
            })
        }),
        () => {
          const s = kt(e),
            l = D1(s)
          let c = s.tag || He
          ;(i = o), (o = t.default ? Jf(t.default()) : [])
          for (let f = 0; f < o.length; f++) {
            const h = o[f]
            h.key != null && Ls(h, Ra(h, l, r, n))
          }
          if (i)
            for (let f = 0; f < i.length; f++) {
              const h = i[f]
              Ls(h, Ra(h, l, r, n)), z1.set(h, h.el.getBoundingClientRect())
            }
          return Xe(c, null, o)
        }
      )
    }
  },
  Dg = (e) => delete e.mode
H1.props
const Bg = H1
function qg(e) {
  const t = e.el
  t[sc] && t[sc](), t[Od] && t[Od]()
}
function zg(e) {
  U1.set(e, e.el.getBoundingClientRect())
}
function Ug(e) {
  const t = z1.get(e),
    n = U1.get(e),
    r = t.left - n.left,
    i = t.top - n.top
  if (r || i) {
    const o = e.el.style
    return (o.transform = o.webkitTransform = `translate(${r}px,${i}px)`), (o.transitionDuration = '0s'), e
  }
}
function Hg(e, t, n) {
  const r = e.cloneNode(),
    i = e[js]
  i &&
    i.forEach((l) => {
      l.split(/\s+/).forEach((c) => c && r.classList.remove(c))
    }),
    n.split(/\s+/).forEach((l) => l && r.classList.add(l)),
    (r.style.display = 'none')
  const o = t.nodeType === 1 ? t : t.parentNode
  o.appendChild(r)
  const { hasTransform: s } = B1(r)
  return o.removeChild(r), s
}
const ac = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1
    return tt(t) ? (n) => bs(t, n) : t
  },
  Ss = Symbol('_assign'),
  hs = {
    deep: !0,
    created(e, t, n) {
      ;(e[Ss] = ac(n)),
        oh(e, 'change', () => {
          const r = e._modelValue,
            i = $1(e),
            o = e.checked,
            s = e[Ss]
          if (tt(r)) {
            const l = Bp(r, i),
              c = l !== -1
            if (o && !c) s(r.concat(i))
            else if (!o && c) {
              const f = [...r]
              f.splice(l, 1), s(f)
            }
          } else if (hc(r)) {
            const l = new Set(r)
            o ? l.add(i) : l.delete(i), s(l)
          } else s(V1(e, o))
        })
    },
    mounted: Rd,
    beforeUpdate(e, t, n) {
      ;(e[Ss] = ac(n)), Rd(e, t, n)
    }
  }
function Rd(e, { value: t, oldValue: n }, r) {
  ;(e._modelValue = t),
    tt(t) ? (e.checked = Bp(t, r.props.value) > -1) : hc(t) ? (e.checked = t.has(r.props.value)) : t !== n && (e.checked = ks(t, V1(e, !0)))
}
const Md = {
  created(e, { value: t }, n) {
    ;(e.checked = ks(t, n.props.value)),
      (e[Ss] = ac(n)),
      oh(e, 'change', () => {
        e[Ss]($1(e))
      })
  },
  beforeUpdate(e, { value: t, oldValue: n }, r) {
    ;(e[Ss] = ac(r)), t !== n && (e.checked = ks(t, r.props.value))
  }
}
function $1(e) {
  return '_value' in e ? e._value : e.value
}
function V1(e, t) {
  const n = t ? '_trueValue' : '_falseValue'
  return n in e ? e[n] : t
}
const $g = ['ctrl', 'shift', 'alt', 'meta'],
  Vg = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => $g.some((n) => e[`${n}Key`] && !t.includes(n))
  },
  ah = (e, t) =>
    e._withMods ||
    (e._withMods = (n, ...r) => {
      for (let i = 0; i < t.length; i++) {
        const o = Vg[t[i]]
        if (o && o(n, t)) return
      }
      return e(n, ...r)
    }),
  Wg = an({ patchProp: Rg }, wg)
let Dd
function Gg() {
  return Dd || (Dd = tg(Wg))
}
const Kg = (...e) => {
  const t = Gg().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const i = Jg(r)
      if (!i) return
      const o = t._component
      !ht(o) && !o.render && !o.template && (o.template = i.innerHTML), (i.innerHTML = '')
      const s = n(i, !1, i instanceof SVGElement)
      return i instanceof Element && (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')), s
    }),
    t
  )
}
function Jg(e) {
  return Yt(e) ? document.querySelector(e) : e
}
const dn = er({
    list: [],
    add(e) {
      this.list.push(e)
    }
  }),
  Wr = er({
    index: 0,
    set(e = 0) {
      this.index = e
    }
  }),
  jx = er({
    index: 0,
    set(e = 0) {
      this.index = e
    }
  }),
  W1 = _t(!1)
er({ preTest: !1, postTest: !1, caseScenario: !1 })
const Ix = _t(null),
  Yg = {
    __name: 'TheToast',
    setup(e) {
      const t = _t([])
      let n = null
      _s(
        () => dn.list,
        () => {
          dn.list.length >= 1 &&
            n === null &&
            (setTimeout(() => {
              t.value.push(dn.list[0].msg)
            }, 150),
            (n = setTimeout(() => {
              dn.list.shift(), t.value.shift(), (n = null)
            }, dn.list[0].duration)))
        },
        { deep: !0 }
      )
      function r() {
        window.location.reload()
      }
      return (i, o) => (
        _e(),
        Ht(
          Bg,
          { name: 'toast-fade-scale', tag: 'ul' },
          {
            default: Lt(() => [
              (_e(!0),
              Ne(
                He,
                null,
                Bt(
                  t.value,
                  (s, l) => (
                    _e(),
                    Ne(
                      'li',
                      {
                        key: l,
                        class:
                          'pointer-events-none absolute left-4 right-4 top-4 z-50 flex min-w-0 flex-row items-center justify-between gap-4 rounded-xl bg-stone-800/[98%] p-4 font-medium text-stone-200 shadow-lg md:left-auto md:min-w-[440px] md:text-lg'
                      },
                      [
                        Ke(Je(s) + ' ', 1),
                        Pn(dn).list[0].showAction
                          ? (_e(),
                            Ne(
                              'button',
                              {
                                key: 0,
                                onClick: o[0] || (o[0] = (c) => r()),
                                class: 'pointer-events-auto h-full text-blue-600 transition-colors hover:text-blue-500'
                              },
                              ' Refresh '
                            ))
                          : Vn('', !0)
                      ]
                    )
                  )
                ),
                128
              ))
            ]),
            _: 1
          }
        )
      )
    }
  },
  Xg = {
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const r = bt('router-view')
        return (
          _e(),
          Ne(
            He,
            null,
            [
              /\/admin\/home*/.test(t.$route.path)
                ? (_e(), Ht(r, { key: 1 }))
                : (_e(),
                  Ht(
                    r,
                    { key: 0 },
                    {
                      default: Lt(({ Component: i, route: o }) => [
                        Xe(
                          Ac,
                          { name: 'fade-scale', mode: 'out-in' },
                          { default: Lt(() => [(_e(), Ne('div', { class: 'w-full', key: o.path }, [(_e(), Ht(p1(i)))]))]), _: 2 },
                          1024
                        )
                      ]),
                      _: 1
                    }
                  )),
              Xe(Yg)
            ],
            64
          )
        )
      }
    }
  },
  Qg = 'modulepreload',
  Zg = function (e) {
    return '/ncp/' + e
  },
  Bd = {},
  yi = function (t, n, r) {
    let i = Promise.resolve()
    if (n && n.length > 0) {
      const o = document.getElementsByTagName('link')
      i = Promise.all(
        n.map((s) => {
          if (((s = Zg(s)), s in Bd)) return
          Bd[s] = !0
          const l = s.endsWith('.css'),
            c = l ? '[rel="stylesheet"]' : ''
          if (!!r)
            for (let g = o.length - 1; g >= 0; g--) {
              const v = o[g]
              if (v.href === s && (!l || v.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${s}"]${c}`)) return
          const h = document.createElement('link')
          if (((h.rel = l ? 'stylesheet' : Qg), l || ((h.as = 'script'), (h.crossOrigin = '')), (h.href = s), document.head.appendChild(h), l))
            return new Promise((g, v) => {
              h.addEventListener('load', g), h.addEventListener('error', () => v(new Error(`Unable to preload CSS for ${s}`)))
            })
        })
      )
    }
    return i
      .then(() => t())
      .catch((o) => {
        const s = new Event('vite:preloadError', { cancelable: !0 })
        if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented)) throw o
      })
  }
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const ds = typeof window < 'u'
function em(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const It = Object.assign
function Mu(e, t) {
  const n = {}
  for (const r in t) {
    const i = t[r]
    n[r] = Fr(i) ? i.map(e) : e(i)
  }
  return n
}
const La = () => {},
  Fr = Array.isArray,
  tm = /\/$/,
  nm = (e) => e.replace(tm, '')
function Du(e, t, n = '/') {
  let r,
    i = {},
    o = '',
    s = ''
  const l = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 && ((r = t.slice(0, c)), (o = t.slice(c + 1, l > -1 ? l : t.length)), (i = e(o))),
    l > -1 && ((r = r || t.slice(0, l)), (s = t.slice(l, t.length))),
    (r = sm(r ?? t, n)),
    { fullPath: r + (o && '?') + o + s, path: r, query: i, hash: s }
  )
}
function rm(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function qd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function im(e, t, n) {
  const r = t.matched.length - 1,
    i = n.matched.length - 1
  return r > -1 && r === i && Is(t.matched[r], n.matched[i]) && G1(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Is(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function G1(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!om(e[n], t[n])) return !1
  return !0
}
function om(e, t) {
  return Fr(e) ? zd(e, t) : Fr(t) ? zd(t, e) : e === t
}
function zd(e, t) {
  return Fr(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function sm(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    r = e.split('/'),
    i = r[r.length - 1]
  ;(i === '..' || i === '.') && r.push('')
  let o = n.length - 1,
    s,
    l
  for (s = 0; s < r.length; s++)
    if (((l = r[s]), l !== '.'))
      if (l === '..') o > 1 && o--
      else break
  return n.slice(0, o).join('/') + '/' + r.slice(s - (s === r.length ? 1 : 0)).join('/')
}
var qa
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(qa || (qa = {}))
var Na
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Na || (Na = {}))
function am(e) {
  if (!e)
    if (ds) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), nm(e)
}
const lm = /^[^#]+#/
function cm(e, t) {
  return e.replace(lm, '#') + t
}
function um(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) }
}
const Lc = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function fm(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      i = typeof n == 'string' ? (r ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n
    if (!i) return
    t = um(i, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}
function Ud(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const mf = new Map()
function hm(e, t) {
  mf.set(e, t)
}
function dm(e) {
  const t = mf.get(e)
  return mf.delete(e), t
}
let pm = () => location.protocol + '//' + location.host
function K1(e, t) {
  const { pathname: n, search: r, hash: i } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let l = i.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = i.slice(l)
    return c[0] !== '/' && (c = '/' + c), qd(c, '')
  }
  return qd(n, e) + r + i
}
function gm(e, t, n, r) {
  let i = [],
    o = [],
    s = null
  const l = ({ state: v }) => {
    const p = K1(e, location),
      b = n.value,
      w = t.value
    let L = 0
    if (v) {
      if (((n.value = p), (t.value = v), s && s === b)) {
        s = null
        return
      }
      L = w ? v.position - w.position : 0
    } else r(p)
    i.forEach((_) => {
      _(n.value, b, { delta: L, type: qa.pop, direction: L ? (L > 0 ? Na.forward : Na.back) : Na.unknown })
    })
  }
  function c() {
    s = n.value
  }
  function f(v) {
    i.push(v)
    const p = () => {
      const b = i.indexOf(v)
      b > -1 && i.splice(b, 1)
    }
    return o.push(p), p
  }
  function h() {
    const { history: v } = window
    v.state && v.replaceState(It({}, v.state, { scroll: Lc() }), '')
  }
  function g() {
    for (const v of o) v()
    ;(o = []), window.removeEventListener('popstate', l), window.removeEventListener('beforeunload', h)
  }
  return (
    window.addEventListener('popstate', l), window.addEventListener('beforeunload', h, { passive: !0 }), { pauseListeners: c, listen: f, destroy: g }
  )
}
function Hd(e, t, n, r = !1, i = !1) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: i ? Lc() : null }
}
function mm(e) {
  const { history: t, location: n } = window,
    r = { value: K1(e, n) },
    i = { value: t.state }
  i.value || o(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: !0, scroll: null }, !0)
  function o(c, f, h) {
    const g = e.indexOf('#'),
      v = g > -1 ? (n.host && document.querySelector('base') ? e : e.slice(g)) + c : pm() + e + c
    try {
      t[h ? 'replaceState' : 'pushState'](f, '', v), (i.value = f)
    } catch (p) {
      console.error(p), n[h ? 'replace' : 'assign'](v)
    }
  }
  function s(c, f) {
    const h = It({}, t.state, Hd(i.value.back, c, i.value.forward, !0), f, { position: i.value.position })
    o(c, h, !0), (r.value = c)
  }
  function l(c, f) {
    const h = It({}, i.value, t.state, { forward: c, scroll: Lc() })
    o(h.current, h, !0)
    const g = It({}, Hd(r.value, c, null), { position: h.position + 1 }, f)
    o(c, g, !1), (r.value = c)
  }
  return { location: r, state: i, push: l, replace: s }
}
function vm(e) {
  e = am(e)
  const t = mm(e),
    n = gm(e, t.state, t.location, t.replace)
  function r(o, s = !0) {
    s || n.pauseListeners(), history.go(o)
  }
  const i = It({ location: '', base: e, go: r, createHref: cm.bind(null, e) }, t, n)
  return (
    Object.defineProperty(i, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(i, 'state', { enumerable: !0, get: () => t.state.value }),
    i
  )
}
function bm(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function J1(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const Ui = { path: '/', name: void 0, params: {}, query: {}, hash: '', fullPath: '/', matched: [], meta: {}, redirectedFrom: void 0 },
  Y1 = Symbol('')
var $d
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'), (e[(e.cancelled = 8)] = 'cancelled'), (e[(e.duplicated = 16)] = 'duplicated')
})($d || ($d = {}))
function Es(e, t) {
  return It(new Error(), { type: e, [Y1]: !0 }, t)
}
function gi(e, t) {
  return e instanceof Error && Y1 in e && (t == null || !!(e.type & t))
}
const Vd = '[^/]+?',
  ym = { sensitive: !1, strict: !1, start: !0, end: !0 },
  wm = /[.+*?^${}()[\]/\\]/g
function _m(e, t) {
  const n = It({}, ym, t),
    r = []
  let i = n.start ? '^' : ''
  const o = []
  for (const f of e) {
    const h = f.length ? [] : [90]
    n.strict && !f.length && (i += '/')
    for (let g = 0; g < f.length; g++) {
      const v = f[g]
      let p = 40 + (n.sensitive ? 0.25 : 0)
      if (v.type === 0) g || (i += '/'), (i += v.value.replace(wm, '\\$&')), (p += 40)
      else if (v.type === 1) {
        const { value: b, repeatable: w, optional: L, regexp: _ } = v
        o.push({ name: b, repeatable: w, optional: L })
        const x = _ || Vd
        if (x !== Vd) {
          p += 10
          try {
            new RegExp(`(${x})`)
          } catch (C) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${x}): ` + C.message)
          }
        }
        let k = w ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`
        g || (k = L && f.length < 2 ? `(?:/${k})` : '/' + k),
          L && (k += '?'),
          (i += k),
          (p += 20),
          L && (p += -8),
          w && (p += -20),
          x === '.*' && (p += -50)
      }
      h.push(p)
    }
    r.push(h)
  }
  if (n.strict && n.end) {
    const f = r.length - 1
    r[f][r[f].length - 1] += 0.7000000000000001
  }
  n.strict || (i += '/?'), n.end ? (i += '$') : n.strict && (i += '(?:/|$)')
  const s = new RegExp(i, n.sensitive ? '' : 'i')
  function l(f) {
    const h = f.match(s),
      g = {}
    if (!h) return null
    for (let v = 1; v < h.length; v++) {
      const p = h[v] || '',
        b = o[v - 1]
      g[b.name] = p && b.repeatable ? p.split('/') : p
    }
    return g
  }
  function c(f) {
    let h = '',
      g = !1
    for (const v of e) {
      ;(!g || !h.endsWith('/')) && (h += '/'), (g = !1)
      for (const p of v)
        if (p.type === 0) h += p.value
        else if (p.type === 1) {
          const { value: b, repeatable: w, optional: L } = p,
            _ = b in f ? f[b] : ''
          if (Fr(_) && !w) throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`)
          const x = Fr(_) ? _.join('/') : _
          if (!x)
            if (L) v.length < 2 && (h.endsWith('/') ? (h = h.slice(0, -1)) : (g = !0))
            else throw new Error(`Missing required param "${b}"`)
          h += x
        }
    }
    return h || '/'
  }
  return { re: s, score: r, keys: o, parse: l, stringify: c }
}
function xm(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n]
    if (r) return r
    n++
  }
  return e.length < t.length ? (e.length === 1 && e[0] === 80 ? -1 : 1) : e.length > t.length ? (t.length === 1 && t[0] === 80 ? 1 : -1) : 0
}
function Sm(e, t) {
  let n = 0
  const r = e.score,
    i = t.score
  for (; n < r.length && n < i.length; ) {
    const o = xm(r[n], i[n])
    if (o) return o
    n++
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Wd(r)) return 1
    if (Wd(i)) return -1
  }
  return i.length - r.length
}
function Wd(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const km = { type: 0, value: '' },
  Am = /[a-zA-Z0-9_]/
function Lm(e) {
  if (!e) return [[]]
  if (e === '/') return [[km]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(p) {
    throw new Error(`ERR (${n})/"${f}": ${p}`)
  }
  let n = 0,
    r = n
  const i = []
  let o
  function s() {
    o && i.push(o), (o = [])
  }
  let l = 0,
    c,
    f = '',
    h = ''
  function g() {
    f &&
      (n === 0
        ? o.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 && (c === '*' || c === '+') && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
            o.push({ type: 1, value: f, regexp: h, repeatable: c === '*' || c === '+', optional: c === '*' || c === '?' }))
          : t('Invalid state to consume buffer'),
      (f = ''))
  }
  function v() {
    f += c
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === '\\' && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        c === '/' ? (f && g(), s()) : c === ':' ? (g(), (n = 1)) : v()
        break
      case 4:
        v(), (n = r)
        break
      case 1:
        c === '(' ? (n = 2) : Am.test(c) ? v() : (g(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--)
        break
      case 2:
        c === ')' ? (h[h.length - 1] == '\\' ? (h = h.slice(0, -1) + c) : (n = 3)) : (h += c)
        break
      case 3:
        g(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--, (h = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), g(), s(), i
}
function Nm(e, t, n) {
  const r = _m(Lm(e.path), n),
    i = It(r, { record: e, parent: t, children: [], alias: [] })
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function Pm(e, t) {
  const n = [],
    r = new Map()
  t = Jd({ strict: !1, end: !0, sensitive: !1 }, t)
  function i(h) {
    return r.get(h)
  }
  function o(h, g, v) {
    const p = !v,
      b = Cm(h)
    b.aliasOf = v && v.record
    const w = Jd(t, h),
      L = [b]
    if ('alias' in h) {
      const k = typeof h.alias == 'string' ? [h.alias] : h.alias
      for (const C of k) L.push(It({}, b, { components: v ? v.record.components : b.components, path: C, aliasOf: v ? v.record : b }))
    }
    let _, x
    for (const k of L) {
      const { path: C } = k
      if (g && C[0] !== '/') {
        const D = g.record.path,
          U = D[D.length - 1] === '/' ? '' : '/'
        k.path = g.record.path + (C && U + C)
      }
      if (((_ = Nm(k, g, w)), v ? v.alias.push(_) : ((x = x || _), x !== _ && x.alias.push(_), p && h.name && !Kd(_) && s(h.name)), b.children)) {
        const D = b.children
        for (let U = 0; U < D.length; U++) o(D[U], _, v && v.children[U])
      }
      ;(v = v || _), ((_.record.components && Object.keys(_.record.components).length) || _.record.name || _.record.redirect) && c(_)
    }
    return x
      ? () => {
          s(x)
        }
      : La
  }
  function s(h) {
    if (J1(h)) {
      const g = r.get(h)
      g && (r.delete(h), n.splice(n.indexOf(g), 1), g.children.forEach(s), g.alias.forEach(s))
    } else {
      const g = n.indexOf(h)
      g > -1 && (n.splice(g, 1), h.record.name && r.delete(h.record.name), h.children.forEach(s), h.alias.forEach(s))
    }
  }
  function l() {
    return n
  }
  function c(h) {
    let g = 0
    for (; g < n.length && Sm(h, n[g]) >= 0 && (h.record.path !== n[g].record.path || !X1(h, n[g])); ) g++
    n.splice(g, 0, h), h.record.name && !Kd(h) && r.set(h.record.name, h)
  }
  function f(h, g) {
    let v,
      p = {},
      b,
      w
    if ('name' in h && h.name) {
      if (((v = r.get(h.name)), !v)) throw Es(1, { location: h })
      ;(w = v.record.name),
        (p = It(
          Gd(
            g.params,
            v.keys.filter((x) => !x.optional).map((x) => x.name)
          ),
          h.params &&
            Gd(
              h.params,
              v.keys.map((x) => x.name)
            )
        )),
        (b = v.stringify(p))
    } else if ('path' in h) (b = h.path), (v = n.find((x) => x.re.test(b))), v && ((p = v.parse(b)), (w = v.record.name))
    else {
      if (((v = g.name ? r.get(g.name) : n.find((x) => x.re.test(g.path))), !v)) throw Es(1, { location: h, currentLocation: g })
      ;(w = v.record.name), (p = It({}, g.params, h.params)), (b = v.stringify(p))
    }
    const L = []
    let _ = v
    for (; _; ) L.unshift(_.record), (_ = _.parent)
    return { name: w, path: b, params: p, matched: L, meta: Im(L) }
  }
  return e.forEach((h) => o(h)), { addRoute: o, resolve: f, removeRoute: s, getRoutes: l, getRecordMatcher: i }
}
function Gd(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function Cm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: jm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function jm(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n
  return t
}
function Kd(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Im(e) {
  return e.reduce((t, n) => It(t, n.meta), {})
}
function Jd(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function X1(e, t) {
  return t.children.some((n) => n === e || X1(e, n))
}
const Q1 = /#/g,
  Em = /&/g,
  Tm = /\//g,
  Fm = /=/g,
  Om = /\?/g,
  Z1 = /\+/g,
  Rm = /%5B/g,
  Mm = /%5D/g,
  e0 = /%5E/g,
  Dm = /%60/g,
  t0 = /%7B/g,
  Bm = /%7C/g,
  n0 = /%7D/g,
  qm = /%20/g
function lh(e) {
  return encodeURI('' + e)
    .replace(Bm, '|')
    .replace(Rm, '[')
    .replace(Mm, ']')
}
function zm(e) {
  return lh(e).replace(t0, '{').replace(n0, '}').replace(e0, '^')
}
function vf(e) {
  return lh(e)
    .replace(Z1, '%2B')
    .replace(qm, '+')
    .replace(Q1, '%23')
    .replace(Em, '%26')
    .replace(Dm, '`')
    .replace(t0, '{')
    .replace(n0, '}')
    .replace(e0, '^')
}
function Um(e) {
  return vf(e).replace(Fm, '%3D')
}
function Hm(e) {
  return lh(e).replace(Q1, '%23').replace(Om, '%3F')
}
function $m(e) {
  return e == null ? '' : Hm(e).replace(Tm, '%2F')
}
function lc(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function Vm(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const r = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let i = 0; i < r.length; ++i) {
    const o = r[i].replace(Z1, ' '),
      s = o.indexOf('='),
      l = lc(s < 0 ? o : o.slice(0, s)),
      c = s < 0 ? null : lc(o.slice(s + 1))
    if (l in t) {
      let f = t[l]
      Fr(f) || (f = t[l] = [f]), f.push(c)
    } else t[l] = c
  }
  return t
}
function Yd(e) {
  let t = ''
  for (let n in e) {
    const r = e[n]
    if (((n = Um(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Fr(r) ? r.map((o) => o && vf(o)) : [r && vf(r)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function Wm(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 && (t[n] = Fr(r) ? r.map((i) => (i == null ? null : '' + i)) : r == null ? r : '' + r)
  }
  return t
}
const Gm = Symbol(''),
  Xd = Symbol(''),
  Nc = Symbol(''),
  ch = Symbol(''),
  bf = Symbol('')
function va() {
  let e = []
  function t(r) {
    return (
      e.push(r),
      () => {
        const i = e.indexOf(r)
        i > -1 && e.splice(i, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function Ji(e, t, n, r, i) {
  const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || [])
  return () =>
    new Promise((s, l) => {
      const c = (g) => {
          g === !1
            ? l(Es(4, { from: n, to: t }))
            : g instanceof Error
              ? l(g)
              : bm(g)
                ? l(Es(2, { from: t, to: g }))
                : (o && r.enterCallbacks[i] === o && typeof g == 'function' && o.push(g), s())
        },
        f = e.call(r && r.instances[i], t, n, c)
      let h = Promise.resolve(f)
      e.length < 3 && (h = h.then(c)), h.catch((g) => l(g))
    })
}
function Bu(e, t, n, r) {
  const i = []
  for (const o of e)
    for (const s in o.components) {
      let l = o.components[s]
      if (!(t !== 'beforeRouteEnter' && !o.instances[s]))
        if (Km(l)) {
          const f = (l.__vccOpts || l)[t]
          f && i.push(Ji(f, n, r, o, s))
        } else {
          let c = l()
          i.push(() =>
            c.then((f) => {
              if (!f) return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`))
              const h = em(f) ? f.default : f
              o.components[s] = h
              const v = (h.__vccOpts || h)[t]
              return v && Ji(v, n, r, o, s)()
            })
          )
        }
    }
  return i
}
function Km(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function Qd(e) {
  const t = Tr(Nc),
    n = Tr(ch),
    r = ur(() => t.resolve(Pn(e.to))),
    i = ur(() => {
      const { matched: c } = r.value,
        { length: f } = c,
        h = c[f - 1],
        g = n.matched
      if (!h || !g.length) return -1
      const v = g.findIndex(Is.bind(null, h))
      if (v > -1) return v
      const p = Zd(c[f - 2])
      return f > 1 && Zd(h) === p && g[g.length - 1].path !== p ? g.findIndex(Is.bind(null, c[f - 2])) : v
    }),
    o = ur(() => i.value > -1 && Qm(n.params, r.value.params)),
    s = ur(() => i.value > -1 && i.value === n.matched.length - 1 && G1(n.params, r.value.params))
  function l(c = {}) {
    return Xm(c) ? t[Pn(e.replace) ? 'replace' : 'push'](Pn(e.to)).catch(La) : Promise.resolve()
  }
  return { route: r, href: ur(() => r.value.href), isActive: o, isExactActive: s, navigate: l }
}
const Jm = _1({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: Qd,
    setup(e, { slots: t }) {
      const n = er(Qd(e)),
        { options: r } = Tr(Nc),
        i = ur(() => ({
          [ep(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [ep(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]: n.isExactActive
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : rh('a', { 'aria-current': n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: i.value }, o)
      }
    }
  }),
  Ym = Jm
function Xm(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Qm(e, t) {
  for (const n in t) {
    const r = t[n],
      i = e[n]
    if (typeof r == 'string') {
      if (r !== i) return !1
    } else if (!Fr(i) || i.length !== r.length || r.some((o, s) => o !== i[s])) return !1
  }
  return !0
}
function Zd(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const ep = (e, t, n) => e ?? t ?? n,
  Zm = _1({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Tr(bf),
        i = ur(() => e.route || r.value),
        o = Tr(Xd, 0),
        s = ur(() => {
          let f = Pn(o)
          const { matched: h } = i.value
          let g
          for (; (g = h[f]) && !g.components; ) f++
          return f
        }),
        l = ur(() => i.value.matched[s.value])
      Kl(
        Xd,
        ur(() => s.value + 1)
      ),
        Kl(Gm, l),
        Kl(bf, i)
      const c = _t()
      return (
        _s(
          () => [c.value, l.value, e.name],
          ([f, h, g], [v, p, b]) => {
            h &&
              ((h.instances[g] = f),
              p &&
                p !== h &&
                f &&
                f === v &&
                (h.leaveGuards.size || (h.leaveGuards = p.leaveGuards), h.updateGuards.size || (h.updateGuards = p.updateGuards))),
              f && h && (!p || !Is(h, p) || !v) && (h.enterCallbacks[g] || []).forEach((w) => w(f))
          },
          { flush: 'post' }
        ),
        () => {
          const f = i.value,
            h = e.name,
            g = l.value,
            v = g && g.components[h]
          if (!v) return tp(n.default, { Component: v, route: f })
          const p = g.props[h],
            b = p ? (p === !0 ? f.params : typeof p == 'function' ? p(f) : p) : null,
            L = rh(
              v,
              It({}, b, t, {
                onVnodeUnmounted: (_) => {
                  _.component.isUnmounted && (g.instances[h] = null)
                },
                ref: c
              })
            )
          return tp(n.default, { Component: L, route: f }) || L
        }
      )
    }
  })
function tp(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const ev = Zm
function tv(e) {
  const t = Pm(e.routes, e),
    n = e.parseQuery || Vm,
    r = e.stringifyQuery || Yd,
    i = e.history,
    o = va(),
    s = va(),
    l = va(),
    c = c5(Ui)
  let f = Ui
  ds && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const h = Mu.bind(null, (Y) => '' + Y),
    g = Mu.bind(null, $m),
    v = Mu.bind(null, lc)
  function p(Y, oe) {
    let se, Se
    return J1(Y) ? ((se = t.getRecordMatcher(Y)), (Se = oe)) : (Se = Y), t.addRoute(Se, se)
  }
  function b(Y) {
    const oe = t.getRecordMatcher(Y)
    oe && t.removeRoute(oe)
  }
  function w() {
    return t.getRoutes().map((Y) => Y.record)
  }
  function L(Y) {
    return !!t.getRecordMatcher(Y)
  }
  function _(Y, oe) {
    if (((oe = It({}, oe || c.value)), typeof Y == 'string')) {
      const ae = Du(n, Y, oe.path),
        ie = t.resolve({ path: ae.path }, oe),
        R = i.createHref(ae.fullPath)
      return It(ae, ie, { params: v(ie.params), hash: lc(ae.hash), redirectedFrom: void 0, href: R })
    }
    let se
    if ('path' in Y) se = It({}, Y, { path: Du(n, Y.path, oe.path).path })
    else {
      const ae = It({}, Y.params)
      for (const ie in ae) ae[ie] == null && delete ae[ie]
      ;(se = It({}, Y, { params: g(ae) })), (oe.params = g(oe.params))
    }
    const Se = t.resolve(se, oe),
      je = Y.hash || ''
    Se.params = h(v(Se.params))
    const q = rm(r, It({}, Y, { hash: zm(je), path: Se.path })),
      K = i.createHref(q)
    return It({ fullPath: q, hash: je, query: r === Yd ? Wm(Y.query) : Y.query || {} }, Se, { redirectedFrom: void 0, href: K })
  }
  function x(Y) {
    return typeof Y == 'string' ? Du(n, Y, c.value.path) : It({}, Y)
  }
  function k(Y, oe) {
    if (f !== Y) return Es(8, { from: oe, to: Y })
  }
  function C(Y) {
    return E(Y)
  }
  function D(Y) {
    return C(It(x(Y), { replace: !0 }))
  }
  function U(Y) {
    const oe = Y.matched[Y.matched.length - 1]
    if (oe && oe.redirect) {
      const { redirect: se } = oe
      let Se = typeof se == 'function' ? se(Y) : se
      return (
        typeof Se == 'string' && ((Se = Se.includes('?') || Se.includes('#') ? (Se = x(Se)) : { path: Se }), (Se.params = {})),
        It({ query: Y.query, hash: Y.hash, params: 'path' in Se ? {} : Y.params }, Se)
      )
    }
  }
  function E(Y, oe) {
    const se = (f = _(Y)),
      Se = c.value,
      je = Y.state,
      q = Y.force,
      K = Y.replace === !0,
      ae = U(se)
    if (ae) return E(It(x(ae), { state: typeof ae == 'object' ? It({}, je, ae.state) : je, force: q, replace: K }), oe || se)
    const ie = se
    ie.redirectedFrom = oe
    let R
    return (
      !q && im(r, Se, se) && ((R = Es(16, { to: ie, from: Se })), xe(Se, Se, !0, !1)),
      (R ? Promise.resolve(R) : Q(ie, Se))
        .catch((ke) => (gi(ke) ? (gi(ke, 2) ? ke : fe(ke)) : X(ke, ie, Se)))
        .then((ke) => {
          if (ke) {
            if (gi(ke, 2))
              return E(It({ replace: K }, x(ke.to), { state: typeof ke.to == 'object' ? It({}, je, ke.to.state) : je, force: q }), oe || ie)
          } else ke = S(ie, Se, !0, K, je)
          return P(ie, Se, ke), ke
        })
    )
  }
  function N(Y, oe) {
    const se = k(Y, oe)
    return se ? Promise.reject(se) : Promise.resolve()
  }
  function V(Y) {
    const oe = G.values().next().value
    return oe && typeof oe.runWithContext == 'function' ? oe.runWithContext(Y) : Y()
  }
  function Q(Y, oe) {
    let se
    const [Se, je, q] = nv(Y, oe)
    se = Bu(Se.reverse(), 'beforeRouteLeave', Y, oe)
    for (const ae of Se)
      ae.leaveGuards.forEach((ie) => {
        se.push(Ji(ie, Y, oe))
      })
    const K = N.bind(null, Y, oe)
    return (
      se.push(K),
      re(se)
        .then(() => {
          se = []
          for (const ae of o.list()) se.push(Ji(ae, Y, oe))
          return se.push(K), re(se)
        })
        .then(() => {
          se = Bu(je, 'beforeRouteUpdate', Y, oe)
          for (const ae of je)
            ae.updateGuards.forEach((ie) => {
              se.push(Ji(ie, Y, oe))
            })
          return se.push(K), re(se)
        })
        .then(() => {
          se = []
          for (const ae of q)
            if (ae.beforeEnter)
              if (Fr(ae.beforeEnter)) for (const ie of ae.beforeEnter) se.push(Ji(ie, Y, oe))
              else se.push(Ji(ae.beforeEnter, Y, oe))
          return se.push(K), re(se)
        })
        .then(() => (Y.matched.forEach((ae) => (ae.enterCallbacks = {})), (se = Bu(q, 'beforeRouteEnter', Y, oe)), se.push(K), re(se)))
        .then(() => {
          se = []
          for (const ae of s.list()) se.push(Ji(ae, Y, oe))
          return se.push(K), re(se)
        })
        .catch((ae) => (gi(ae, 8) ? ae : Promise.reject(ae)))
    )
  }
  function P(Y, oe, se) {
    l.list().forEach((Se) => V(() => Se(Y, oe, se)))
  }
  function S(Y, oe, se, Se, je) {
    const q = k(Y, oe)
    if (q) return q
    const K = oe === Ui,
      ae = ds ? history.state : {}
    se && (Se || K ? i.replace(Y.fullPath, It({ scroll: K && ae && ae.scroll }, je)) : i.push(Y.fullPath, je)), (c.value = Y), xe(Y, oe, se, K), fe()
  }
  let z
  function $() {
    z ||
      (z = i.listen((Y, oe, se) => {
        if (!ee.listening) return
        const Se = _(Y),
          je = U(Se)
        if (je) {
          E(It(je, { replace: !0 }), Se).catch(La)
          return
        }
        f = Se
        const q = c.value
        ds && hm(Ud(q.fullPath, se.delta), Lc()),
          Q(Se, q)
            .catch((K) =>
              gi(K, 12)
                ? K
                : gi(K, 2)
                  ? (E(K.to, Se)
                      .then((ae) => {
                        gi(ae, 20) && !se.delta && se.type === qa.pop && i.go(-1, !1)
                      })
                      .catch(La),
                    Promise.reject())
                  : (se.delta && i.go(-se.delta, !1), X(K, Se, q))
            )
            .then((K) => {
              ;(K = K || S(Se, q, !1)),
                K && (se.delta && !gi(K, 8) ? i.go(-se.delta, !1) : se.type === qa.pop && gi(K, 20) && i.go(-1, !1)),
                P(Se, q, K)
            })
            .catch(La)
      }))
  }
  let de = va(),
    W = va(),
    H
  function X(Y, oe, se) {
    fe(Y)
    const Se = W.list()
    return Se.length ? Se.forEach((je) => je(Y, oe, se)) : console.error(Y), Promise.reject(Y)
  }
  function ne() {
    return H && c.value !== Ui
      ? Promise.resolve()
      : new Promise((Y, oe) => {
          de.add([Y, oe])
        })
  }
  function fe(Y) {
    return H || ((H = !Y), $(), de.list().forEach(([oe, se]) => (Y ? se(Y) : oe())), de.reset()), Y
  }
  function xe(Y, oe, se, Se) {
    const { scrollBehavior: je } = e
    if (!ds || !je) return Promise.resolve()
    const q = (!se && dm(Ud(Y.fullPath, 0))) || ((Se || !se) && history.state && history.state.scroll) || null
    return s1()
      .then(() => je(Y, oe, q))
      .then((K) => K && fm(K))
      .catch((K) => X(K, Y, oe))
  }
  const A = (Y) => i.go(Y)
  let B
  const G = new Set(),
    ee = {
      currentRoute: c,
      listening: !0,
      addRoute: p,
      removeRoute: b,
      hasRoute: L,
      getRoutes: w,
      resolve: _,
      options: e,
      push: C,
      replace: D,
      go: A,
      back: () => A(-1),
      forward: () => A(1),
      beforeEach: o.add,
      beforeResolve: s.add,
      afterEach: l.add,
      onError: W.add,
      isReady: ne,
      install(Y) {
        const oe = this
        Y.component('RouterLink', Ym),
          Y.component('RouterView', ev),
          (Y.config.globalProperties.$router = oe),
          Object.defineProperty(Y.config.globalProperties, '$route', { enumerable: !0, get: () => Pn(c) }),
          ds && !B && c.value === Ui && ((B = !0), C(i.location).catch((je) => {}))
        const se = {}
        for (const je in Ui) Object.defineProperty(se, je, { get: () => c.value[je], enumerable: !0 })
        Y.provide(Nc, oe), Y.provide(ch, Xp(se)), Y.provide(bf, c)
        const Se = Y.unmount
        G.add(Y),
          (Y.unmount = function () {
            G.delete(Y), G.size < 1 && ((f = Ui), z && z(), (z = null), (c.value = Ui), (B = !1), (H = !1)), Se()
          })
      }
    }
  function re(Y) {
    return Y.reduce((oe, se) => oe.then(() => V(se)), Promise.resolve())
  }
  return ee
}
function nv(e, t) {
  const n = [],
    r = [],
    i = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let s = 0; s < o; s++) {
    const l = t.matched[s]
    l && (e.matched.find((f) => Is(f, l)) ? r.push(l) : n.push(l))
    const c = e.matched[s]
    c && (t.matched.find((f) => Is(f, c)) || i.push(c))
  }
  return [n, r, i]
}
function ao() {
  return Tr(Nc)
}
function Pc() {
  return Tr(ch)
}
function r0(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: rv } = Object.prototype,
  { getPrototypeOf: uh } = Object,
  Cc = ((e) => (t) => {
    const n = rv.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  ei = (e) => ((e = e.toLowerCase()), (t) => Cc(t) === e),
  jc = (e) => (t) => typeof t === e,
  { isArray: Ds } = Array,
  za = jc('undefined')
function iv(e) {
  return e !== null && !za(e) && e.constructor !== null && !za(e.constructor) && dr(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const i0 = ei('ArrayBuffer')
function ov(e) {
  let t
  return typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && i0(e.buffer)), t
}
const sv = jc('string'),
  dr = jc('function'),
  o0 = jc('number'),
  Ic = (e) => e !== null && typeof e == 'object',
  av = (e) => e === !0 || e === !1,
  Xl = (e) => {
    if (Cc(e) !== 'object') return !1
    const t = uh(e)
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
  },
  lv = ei('Date'),
  cv = ei('File'),
  uv = ei('Blob'),
  fv = ei('FileList'),
  hv = (e) => Ic(e) && dr(e.pipe),
  dv = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (dr(e.append) && ((t = Cc(e)) === 'formdata' || (t === 'object' && dr(e.toString) && e.toString() === '[object FormData]'))))
    )
  },
  pv = ei('URLSearchParams'),
  gv = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
function Wa(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, i
  if ((typeof e != 'object' && (e = [e]), Ds(e))) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e)
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length
    let l
    for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e)
  }
}
function s0(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    i
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i
  return null
}
const a0 = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global,
  l0 = (e) => !za(e) && e !== a0
function yf() {
  const { caseless: e } = (l0(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && s0(t, i)) || i
      Xl(t[o]) && Xl(r) ? (t[o] = yf(t[o], r)) : Xl(r) ? (t[o] = yf({}, r)) : Ds(r) ? (t[o] = r.slice()) : (t[o] = r)
    }
  for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && Wa(arguments[r], n)
  return t
}
const mv = (e, t, n, { allOwnKeys: r } = {}) => (
    Wa(
      t,
      (i, o) => {
        n && dr(i) ? (e[o] = r0(i, n)) : (e[o] = i)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  vv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  bv = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  yv = (e, t, n, r) => {
    let i, o, s
    const l = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; ) (s = i[o]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0))
      e = n !== !1 && uh(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  wv = (e, t, n) => {
    ;(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  _v = (e) => {
    if (!e) return null
    if (Ds(e)) return e
    let t = e.length
    if (!o0(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  xv = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && uh(Uint8Array)),
  Sv = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let i
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value
      t.call(e, o[0], o[1])
    }
  },
  kv = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  Av = ei('HTMLFormElement'),
  Lv = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i
    }),
  np = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Nv = ei('RegExp'),
  c0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    Wa(n, (i, o) => {
      let s
      ;(s = t(i, o, e)) !== !1 && (r[o] = s || i)
    }),
      Object.defineProperties(e, r)
  },
  Pv = (e) => {
    c0(e, (t, n) => {
      if (dr(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
      const r = e[n]
      if (dr(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  Cv = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0
        })
      }
    return Ds(e) ? r(e) : r(String(e).split(t)), n
  },
  jv = () => {},
  Iv = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  qu = 'abcdefghijklmnopqrstuvwxyz',
  rp = '0123456789',
  u0 = { DIGIT: rp, ALPHA: qu, ALPHA_DIGIT: qu + qu.toUpperCase() + rp },
  Ev = (e = 16, t = u0.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    for (; e--; ) n += t[(Math.random() * r) | 0]
    return n
  }
function Tv(e) {
  return !!(e && dr(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator])
}
const Fv = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Ic(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[i] = r
            const o = Ds(r) ? [] : {}
            return (
              Wa(r, (s, l) => {
                const c = n(s, i + 1)
                !za(c) && (o[l] = c)
              }),
              (t[i] = void 0),
              o
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  Ov = ei('AsyncFunction'),
  Rv = (e) => e && (Ic(e) || dr(e)) && dr(e.then) && dr(e.catch),
  Fe = {
    isArray: Ds,
    isArrayBuffer: i0,
    isBuffer: iv,
    isFormData: dv,
    isArrayBufferView: ov,
    isString: sv,
    isNumber: o0,
    isBoolean: av,
    isObject: Ic,
    isPlainObject: Xl,
    isUndefined: za,
    isDate: lv,
    isFile: cv,
    isBlob: uv,
    isRegExp: Nv,
    isFunction: dr,
    isStream: hv,
    isURLSearchParams: pv,
    isTypedArray: xv,
    isFileList: fv,
    forEach: Wa,
    merge: yf,
    extend: mv,
    trim: gv,
    stripBOM: vv,
    inherits: bv,
    toFlatObject: yv,
    kindOf: Cc,
    kindOfTest: ei,
    endsWith: wv,
    toArray: _v,
    forEachEntry: Sv,
    matchAll: kv,
    isHTMLForm: Av,
    hasOwnProperty: np,
    hasOwnProp: np,
    reduceDescriptors: c0,
    freezeMethods: Pv,
    toObjectSet: Cv,
    toCamelCase: Lv,
    noop: jv,
    toFiniteNumber: Iv,
    findKey: s0,
    global: a0,
    isContextDefined: l0,
    ALPHABET: u0,
    generateString: Ev,
    isSpecCompliantForm: Tv,
    toJSONObject: Fv,
    isAsyncFn: Ov,
    isThenable: Rv
  }
function wt(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i)
}
Fe.inherits(wt, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: Fe.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    }
  }
})
const f0 = wt.prototype,
  h0 = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach((e) => {
  h0[e] = { value: e }
})
Object.defineProperties(wt, h0)
Object.defineProperty(f0, 'isAxiosError', { value: !0 })
wt.from = (e, t, n, r, i, o) => {
  const s = Object.create(f0)
  return (
    Fe.toFlatObject(
      e,
      s,
      function (c) {
        return c !== Error.prototype
      },
      (l) => l !== 'isAxiosError'
    ),
    wt.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  )
}
const Mv = null
function wf(e) {
  return Fe.isPlainObject(e) || Fe.isArray(e)
}
function d0(e) {
  return Fe.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function ip(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = d0(i)), !n && o ? '[' + i + ']' : i
        })
        .join(n ? '.' : '')
    : t
}
function Dv(e) {
  return Fe.isArray(e) && !e.some(wf)
}
const Bv = Fe.toFlatObject(Fe, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function Ec(e, t, n) {
  if (!Fe.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = Fe.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (w, L) {
      return !Fe.isUndefined(L[w])
    }))
  const r = n.metaTokens,
    i = n.visitor || h,
    o = n.dots,
    s = n.indexes,
    c = (n.Blob || (typeof Blob < 'u' && Blob)) && Fe.isSpecCompliantForm(t)
  if (!Fe.isFunction(i)) throw new TypeError('visitor must be a function')
  function f(b) {
    if (b === null) return ''
    if (Fe.isDate(b)) return b.toISOString()
    if (!c && Fe.isBlob(b)) throw new wt('Blob is not supported. Use a Buffer instead.')
    return Fe.isArrayBuffer(b) || Fe.isTypedArray(b) ? (c && typeof Blob == 'function' ? new Blob([b]) : Buffer.from(b)) : b
  }
  function h(b, w, L) {
    let _ = b
    if (b && !L && typeof b == 'object') {
      if (Fe.endsWith(w, '{}')) (w = r ? w : w.slice(0, -2)), (b = JSON.stringify(b))
      else if ((Fe.isArray(b) && Dv(b)) || ((Fe.isFileList(b) || Fe.endsWith(w, '[]')) && (_ = Fe.toArray(b))))
        return (
          (w = d0(w)),
          _.forEach(function (k, C) {
            !(Fe.isUndefined(k) || k === null) && t.append(s === !0 ? ip([w], C, o) : s === null ? w : w + '[]', f(k))
          }),
          !1
        )
    }
    return wf(b) ? !0 : (t.append(ip(L, w, o), f(b)), !1)
  }
  const g = [],
    v = Object.assign(Bv, { defaultVisitor: h, convertValue: f, isVisitable: wf })
  function p(b, w) {
    if (!Fe.isUndefined(b)) {
      if (g.indexOf(b) !== -1) throw Error('Circular reference detected in ' + w.join('.'))
      g.push(b),
        Fe.forEach(b, function (_, x) {
          ;(!(Fe.isUndefined(_) || _ === null) && i.call(t, _, Fe.isString(x) ? x.trim() : x, w, v)) === !0 && p(_, w ? w.concat(x) : [x])
        }),
        g.pop()
    }
  }
  if (!Fe.isObject(e)) throw new TypeError('data must be an object')
  return p(e), t
}
function op(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function fh(e, t) {
  ;(this._pairs = []), e && Ec(e, this, t)
}
const p0 = fh.prototype
p0.append = function (t, n) {
  this._pairs.push([t, n])
}
p0.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, op)
      }
    : op
  return this._pairs
    .map(function (i) {
      return n(i[0]) + '=' + n(i[1])
    }, '')
    .join('&')
}
function qv(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function g0(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || qv,
    i = n && n.serialize
  let o
  if ((i ? (o = i(t, n)) : (o = Fe.isURLSearchParams(t) ? t.toString() : new fh(t, n).toString(r)), o)) {
    const s = e.indexOf('#')
    s !== -1 && (e = e.slice(0, s)), (e += (e.indexOf('?') === -1 ? '?' : '&') + o)
  }
  return e
}
class zv {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    Fe.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const sp = zv,
  m0 = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  Uv = typeof URLSearchParams < 'u' ? URLSearchParams : fh,
  Hv = typeof FormData < 'u' ? FormData : null,
  $v = typeof Blob < 'u' ? Blob : null,
  Vv = { isBrowser: !0, classes: { URLSearchParams: Uv, FormData: Hv, Blob: $v }, protocols: ['http', 'https', 'file', 'blob', 'url', 'data'] },
  v0 = typeof window < 'u' && typeof document < 'u',
  Wv = ((e) => v0 && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(typeof navigator < 'u' && navigator.product),
  Gv = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function',
  Kv = Object.freeze(
    Object.defineProperty({ __proto__: null, hasBrowserEnv: v0, hasStandardBrowserEnv: Wv, hasStandardBrowserWebWorkerEnv: Gv }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  Jr = { ...Kv, ...Vv }
function Jv(e, t) {
  return Ec(
    e,
    new Jr.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return Jr.isNode && Fe.isBuffer(n) ? (this.append(r, n.toString('base64')), !1) : o.defaultVisitor.apply(this, arguments)
        }
      },
      t
    )
  )
}
function Yv(e) {
  return Fe.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function Xv(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const i = n.length
  let o
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o])
  return t
}
function b0(e) {
  function t(n, r, i, o) {
    let s = n[o++]
    const l = Number.isFinite(+s),
      c = o >= n.length
    return (
      (s = !s && Fe.isArray(i) ? i.length : s),
      c
        ? (Fe.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
        : ((!i[s] || !Fe.isObject(i[s])) && (i[s] = []), t(n, r, i[s], o) && Fe.isArray(i[s]) && (i[s] = Xv(i[s])), !l)
    )
  }
  if (Fe.isFormData(e) && Fe.isFunction(e.entries)) {
    const n = {}
    return (
      Fe.forEachEntry(e, (r, i) => {
        t(Yv(r), i, n, 0)
      }),
      n
    )
  }
  return null
}
function Qv(e, t, n) {
  if (Fe.isString(e))
    try {
      return (t || JSON.parse)(e), Fe.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const hh = {
  transitional: m0,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        i = r.indexOf('application/json') > -1,
        o = Fe.isObject(t)
      if ((o && Fe.isHTMLForm(t) && (t = new FormData(t)), Fe.isFormData(t))) return i && i ? JSON.stringify(b0(t)) : t
      if (Fe.isArrayBuffer(t) || Fe.isBuffer(t) || Fe.isStream(t) || Fe.isFile(t) || Fe.isBlob(t)) return t
      if (Fe.isArrayBufferView(t)) return t.buffer
      if (Fe.isURLSearchParams(t)) return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
      let l
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1) return Jv(t, this.formSerializer).toString()
        if ((l = Fe.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const c = this.env && this.env.FormData
          return Ec(l ? { 'files[]': t } : t, c && new c(), this.formSerializer)
        }
      }
      return o || i ? (n.setContentType('application/json', !1), Qv(t)) : t
    }
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || hh.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === 'json'
      if (t && Fe.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i
        try {
          return JSON.parse(t)
        } catch (l) {
          if (s) throw l.name === 'SyntaxError' ? wt.from(l, wt.ERR_BAD_RESPONSE, this, null, this.response) : l
        }
      }
      return t
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Jr.classes.FormData, Blob: Jr.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } }
}
Fe.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  hh.headers[e] = {}
})
const dh = hh,
  Zv = Fe.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ]),
  eb = (e) => {
    const t = {}
    let n, r, i
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            ;(i = s.indexOf(':')),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && Zv[n])) && (n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  ap = Symbol('internals')
function ba(e) {
  return e && String(e).trim().toLowerCase()
}
function Ql(e) {
  return e === !1 || e == null ? e : Fe.isArray(e) ? e.map(Ql) : String(e)
}
function tb(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const nb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function zu(e, t, n, r, i) {
  if (Fe.isFunction(r)) return r.call(this, t, n)
  if ((i && (t = n), !!Fe.isString(t))) {
    if (Fe.isString(r)) return t.indexOf(r) !== -1
    if (Fe.isRegExp(r)) return r.test(t)
  }
}
function rb(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function ib(e, t) {
  const n = Fe.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s)
      },
      configurable: !0
    })
  })
}
class Tc {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const i = this
    function o(l, c, f) {
      const h = ba(c)
      if (!h) throw new Error('header name must be a non-empty string')
      const g = Fe.findKey(i, h)
      ;(!g || i[g] === void 0 || f === !0 || (f === void 0 && i[g] !== !1)) && (i[g || c] = Ql(l))
    }
    const s = (l, c) => Fe.forEach(l, (f, h) => o(f, h, c))
    return (
      Fe.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : Fe.isString(t) && (t = t.trim()) && !nb(t)
          ? s(eb(t), n)
          : t != null && o(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = ba(t)), t)) {
      const r = Fe.findKey(this, t)
      if (r) {
        const i = this[r]
        if (!n) return i
        if (n === !0) return tb(i)
        if (Fe.isFunction(n)) return n.call(this, i, r)
        if (Fe.isRegExp(n)) return n.exec(i)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = ba(t)), t)) {
      const r = Fe.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || zu(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let i = !1
    function o(s) {
      if (((s = ba(s)), s)) {
        const l = Fe.findKey(r, s)
        l && (!n || zu(r, r[l], l, n)) && (delete r[l], (i = !0))
      }
    }
    return Fe.isArray(t) ? t.forEach(o) : o(t), i
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      i = !1
    for (; r--; ) {
      const o = n[r]
      ;(!t || zu(this, this[o], o, t, !0)) && (delete this[o], (i = !0))
    }
    return i
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      Fe.forEach(this, (i, o) => {
        const s = Fe.findKey(r, o)
        if (s) {
          ;(n[s] = Ql(i)), delete n[o]
          return
        }
        const l = t ? rb(o) : String(o).trim()
        l !== o && delete n[o], (n[l] = Ql(i)), (r[l] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      Fe.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && Fe.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((i) => r.set(i)), r
  }
  static accessor(t) {
    const r = (this[ap] = this[ap] = { accessors: {} }).accessors,
      i = this.prototype
    function o(s) {
      const l = ba(s)
      r[l] || (ib(i, s), (r[l] = !0))
    }
    return Fe.isArray(t) ? t.forEach(o) : o(t), this
  }
}
Tc.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization'])
Fe.reduceDescriptors(Tc.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(r) {
      this[n] = r
    }
  }
})
Fe.freezeMethods(Tc)
const _i = Tc
function Uu(e, t) {
  const n = this || dh,
    r = t || n,
    i = _i.from(r.headers)
  let o = r.data
  return (
    Fe.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
  )
}
function y0(e) {
  return !!(e && e.__CANCEL__)
}
function Ga(e, t, n) {
  wt.call(this, e ?? 'canceled', wt.ERR_CANCELED, t, n), (this.name = 'CanceledError')
}
Fe.inherits(Ga, wt, { __CANCEL__: !0 })
function ob(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new wt(
          'Request failed with status code ' + n.status,
          [wt.ERR_BAD_REQUEST, wt.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      )
}
const sb = Jr.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, i, o) {
        const s = [e + '=' + encodeURIComponent(t)]
        Fe.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
          Fe.isString(r) && s.push('path=' + r),
          Fe.isString(i) && s.push('domain=' + i),
          o === !0 && s.push('secure'),
          (document.cookie = s.join('; '))
      },
      read(e) {
        const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
        return t ? decodeURIComponent(t[3]) : null
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5)
      }
    }
  : {
      write() {},
      read() {
        return null
      },
      remove() {}
    }
function ab(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function lb(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function w0(e, t) {
  return e && !ab(t) ? lb(e, t) : t
}
const cb = Jr.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let r
      function i(o) {
        let s = o
        return (
          t && (n.setAttribute('href', s), (s = n.href)),
          n.setAttribute('href', s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname
          }
        )
      }
      return (
        (r = i(window.location.href)),
        function (s) {
          const l = Fe.isString(s) ? i(s) : s
          return l.protocol === r.protocol && l.host === r.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function ub(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function fb(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let i = 0,
    o = 0,
    s
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const f = Date.now(),
        h = r[o]
      s || (s = f), (n[i] = c), (r[i] = f)
      let g = o,
        v = 0
      for (; g !== i; ) (v += n[g++]), (g = g % e)
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), f - s < t)) return
      const p = h && f - h
      return p ? Math.round((v * 1e3) / p) : void 0
    }
  )
}
function lp(e, t) {
  let n = 0
  const r = fb(50, 250)
  return (i) => {
    const o = i.loaded,
      s = i.lengthComputable ? i.total : void 0,
      l = o - n,
      c = r(l),
      f = o <= s
    n = o
    const h = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && s && f ? (s - o) / c : void 0,
      event: i
    }
    ;(h[t ? 'download' : 'upload'] = !0), e(h)
  }
}
const hb = typeof XMLHttpRequest < 'u',
  db =
    hb &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data
        const o = _i.from(e.headers).normalize()
        let { responseType: s, withXSRFToken: l } = e,
          c
        function f() {
          e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener('abort', c)
        }
        let h
        if (Fe.isFormData(i)) {
          if (Jr.hasStandardBrowserEnv || Jr.hasStandardBrowserWebWorkerEnv) o.setContentType(!1)
          else if ((h = o.getContentType()) !== !1) {
            const [w, ...L] = h
              ? h
                  .split(';')
                  .map((_) => _.trim())
                  .filter(Boolean)
              : []
            o.setContentType([w || 'multipart/form-data', ...L].join('; '))
          }
        }
        let g = new XMLHttpRequest()
        if (e.auth) {
          const w = e.auth.username || '',
            L = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''
          o.set('Authorization', 'Basic ' + btoa(w + ':' + L))
        }
        const v = w0(e.baseURL, e.url)
        g.open(e.method.toUpperCase(), g0(v, e.params, e.paramsSerializer), !0), (g.timeout = e.timeout)
        function p() {
          if (!g) return
          const w = _i.from('getAllResponseHeaders' in g && g.getAllResponseHeaders()),
            _ = {
              data: !s || s === 'text' || s === 'json' ? g.responseText : g.response,
              status: g.status,
              statusText: g.statusText,
              headers: w,
              config: e,
              request: g
            }
          ob(
            function (k) {
              n(k), f()
            },
            function (k) {
              r(k), f()
            },
            _
          ),
            (g = null)
        }
        if (
          ('onloadend' in g
            ? (g.onloadend = p)
            : (g.onreadystatechange = function () {
                !g || g.readyState !== 4 || (g.status === 0 && !(g.responseURL && g.responseURL.indexOf('file:') === 0)) || setTimeout(p)
              }),
          (g.onabort = function () {
            g && (r(new wt('Request aborted', wt.ECONNABORTED, e, g)), (g = null))
          }),
          (g.onerror = function () {
            r(new wt('Network Error', wt.ERR_NETWORK, e, g)), (g = null)
          }),
          (g.ontimeout = function () {
            let L = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded'
            const _ = e.transitional || m0
            e.timeoutErrorMessage && (L = e.timeoutErrorMessage), r(new wt(L, _.clarifyTimeoutError ? wt.ETIMEDOUT : wt.ECONNABORTED, e, g)), (g = null)
          }),
          Jr.hasStandardBrowserEnv && (l && Fe.isFunction(l) && (l = l(e)), l || (l !== !1 && cb(v))))
        ) {
          const w = e.xsrfHeaderName && e.xsrfCookieName && sb.read(e.xsrfCookieName)
          w && o.set(e.xsrfHeaderName, w)
        }
        i === void 0 && o.setContentType(null),
          'setRequestHeader' in g &&
            Fe.forEach(o.toJSON(), function (L, _) {
              g.setRequestHeader(_, L)
            }),
          Fe.isUndefined(e.withCredentials) || (g.withCredentials = !!e.withCredentials),
          s && s !== 'json' && (g.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' && g.addEventListener('progress', lp(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' && g.upload && g.upload.addEventListener('progress', lp(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((c = (w) => {
              g && (r(!w || w.type ? new Ga(null, e, g) : w), g.abort(), (g = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal && (e.signal.aborted ? c() : e.signal.addEventListener('abort', c)))
        const b = ub(v)
        if (b && Jr.protocols.indexOf(b) === -1) {
          r(new wt('Unsupported protocol ' + b + ':', wt.ERR_BAD_REQUEST, e))
          return
        }
        g.send(i || null)
      })
    },
  _f = { http: Mv, xhr: db }
Fe.forEach(_f, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const cp = (e) => `- ${e}`,
  pb = (e) => Fe.isFunction(e) || e === null || e === !1,
  _0 = {
    getAdapter: (e) => {
      e = Fe.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      const i = {}
      for (let o = 0; o < t; o++) {
        n = e[o]
        let s
        if (((r = n), !pb(n) && ((r = _f[(s = String(n)).toLowerCase()]), r === void 0))) throw new wt(`Unknown adapter '${s}'`)
        if (r) break
        i[s || '#' + o] = r
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([l, c]) => `adapter ${l} ` + (c === !1 ? 'is not supported by the environment' : 'is not available in the build')
        )
        let s = t
          ? o.length > 1
            ? `since :
` +
              o.map(cp).join(`
`)
            : ' ' + cp(o[0])
          : 'as no adapter specified'
        throw new wt('There is no suitable adapter to dispatch the request ' + s, 'ERR_NOT_SUPPORT')
      }
      return r
    },
    adapters: _f
  }
function Hu(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new Ga(null, e)
}
function up(e) {
  return (
    Hu(e),
    (e.headers = _i.from(e.headers)),
    (e.data = Uu.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 && e.headers.setContentType('application/x-www-form-urlencoded', !1),
    _0
      .getAdapter(e.adapter || dh.adapter)(e)
      .then(
        function (r) {
          return Hu(e), (r.data = Uu.call(e, e.transformResponse, r)), (r.headers = _i.from(r.headers)), r
        },
        function (r) {
          return (
            y0(r) ||
              (Hu(e),
              r && r.response && ((r.response.data = Uu.call(e, e.transformResponse, r.response)), (r.response.headers = _i.from(r.response.headers)))),
            Promise.reject(r)
          )
        }
      )
  )
}
const fp = (e) => (e instanceof _i ? e.toJSON() : e)
function Ts(e, t) {
  t = t || {}
  const n = {}
  function r(f, h, g) {
    return Fe.isPlainObject(f) && Fe.isPlainObject(h)
      ? Fe.merge.call({ caseless: g }, f, h)
      : Fe.isPlainObject(h)
        ? Fe.merge({}, h)
        : Fe.isArray(h)
          ? h.slice()
          : h
  }
  function i(f, h, g) {
    if (Fe.isUndefined(h)) {
      if (!Fe.isUndefined(f)) return r(void 0, f, g)
    } else return r(f, h, g)
  }
  function o(f, h) {
    if (!Fe.isUndefined(h)) return r(void 0, h)
  }
  function s(f, h) {
    if (Fe.isUndefined(h)) {
      if (!Fe.isUndefined(f)) return r(void 0, f)
    } else return r(void 0, h)
  }
  function l(f, h, g) {
    if (g in t) return r(f, h)
    if (g in e) return r(void 0, f)
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (f, h) => i(fp(f), fp(h), !0)
  }
  return (
    Fe.forEach(Object.keys(Object.assign({}, e, t)), function (h) {
      const g = c[h] || i,
        v = g(e[h], t[h], h)
      ;(Fe.isUndefined(v) && g !== l) || (n[h] = v)
    }),
    n
  )
}
const x0 = '1.6.2',
  ph = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  ph[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
  }
})
const hp = {}
ph.transitional = function (t, n, r) {
  function i(o, s) {
    return '[Axios v' + x0 + "] Transitional option '" + o + "'" + s + (r ? '. ' + r : '')
  }
  return (o, s, l) => {
    if (t === !1) throw new wt(i(s, ' has been removed' + (n ? ' in ' + n : '')), wt.ERR_DEPRECATED)
    return (
      n && !hp[s] && ((hp[s] = !0), console.warn(i(s, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
      t ? t(o, s, l) : !0
    )
  }
}
function gb(e, t, n) {
  if (typeof e != 'object') throw new wt('options must be an object', wt.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let i = r.length
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o]
    if (s) {
      const l = e[o],
        c = l === void 0 || s(l, o, e)
      if (c !== !0) throw new wt('option ' + o + ' must be ' + c, wt.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new wt('Unknown option ' + o, wt.ERR_BAD_OPTION)
  }
}
const xf = { assertOptions: gb, validators: ph },
  Hi = xf.validators
class cc {
  constructor(t) {
    ;(this.defaults = t), (this.interceptors = { request: new sp(), response: new sp() })
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = Ts(this.defaults, n))
    const { transitional: r, paramsSerializer: i, headers: o } = n
    r !== void 0 &&
      xf.assertOptions(
        r,
        {
          silentJSONParsing: Hi.transitional(Hi.boolean),
          forcedJSONParsing: Hi.transitional(Hi.boolean),
          clarifyTimeoutError: Hi.transitional(Hi.boolean)
        },
        !1
      ),
      i != null &&
        (Fe.isFunction(i) ? (n.paramsSerializer = { serialize: i }) : xf.assertOptions(i, { encode: Hi.function, serialize: Hi.function }, !0)),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let s = o && Fe.merge(o.common, o[n.method])
    o &&
      Fe.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (b) => {
        delete o[b]
      }),
      (n.headers = _i.concat(s, o))
    const l = []
    let c = !0
    this.interceptors.request.forEach(function (w) {
      ;(typeof w.runWhen == 'function' && w.runWhen(n) === !1) || ((c = c && w.synchronous), l.unshift(w.fulfilled, w.rejected))
    })
    const f = []
    this.interceptors.response.forEach(function (w) {
      f.push(w.fulfilled, w.rejected)
    })
    let h,
      g = 0,
      v
    if (!c) {
      const b = [up.bind(this), void 0]
      for (b.unshift.apply(b, l), b.push.apply(b, f), v = b.length, h = Promise.resolve(n); g < v; ) h = h.then(b[g++], b[g++])
      return h
    }
    v = l.length
    let p = n
    for (g = 0; g < v; ) {
      const b = l[g++],
        w = l[g++]
      try {
        p = b(p)
      } catch (L) {
        w.call(this, L)
        break
      }
    }
    try {
      h = up.call(this, p)
    } catch (b) {
      return Promise.reject(b)
    }
    for (g = 0, v = f.length; g < v; ) h = h.then(f[g++], f[g++])
    return h
  }
  getUri(t) {
    t = Ts(this.defaults, t)
    const n = w0(t.baseURL, t.url)
    return g0(n, t.params, t.paramsSerializer)
  }
}
Fe.forEach(['delete', 'get', 'head', 'options'], function (t) {
  cc.prototype[t] = function (n, r) {
    return this.request(Ts(r || {}, { method: t, url: n, data: (r || {}).data }))
  }
})
Fe.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, s, l) {
      return this.request(Ts(l || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: o, data: s }))
    }
  }
  ;(cc.prototype[t] = n()), (cc.prototype[t + 'Form'] = n(!0))
})
const Zl = cc
class gh {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (o) {
      n = o
    })
    const r = this
    this.promise.then((i) => {
      if (!r._listeners) return
      let o = r._listeners.length
      for (; o-- > 0; ) r._listeners[o](i)
      r._listeners = null
    }),
      (this.promise.then = (i) => {
        let o
        const s = new Promise((l) => {
          r.subscribe(l), (o = l)
        }).then(i)
        return (
          (s.cancel = function () {
            r.unsubscribe(o)
          }),
          s
        )
      }),
      t(function (o, s, l) {
        r.reason || ((r.reason = new Ga(o, s, l)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new gh(function (i) {
        t = i
      }),
      cancel: t
    }
  }
}
const mb = gh
function vb(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function bb(e) {
  return Fe.isObject(e) && e.isAxiosError === !0
}
const Sf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
}
Object.entries(Sf).forEach(([e, t]) => {
  Sf[t] = e
})
const yb = Sf
function S0(e) {
  const t = new Zl(e),
    n = r0(Zl.prototype.request, t)
  return (
    Fe.extend(n, Zl.prototype, t, { allOwnKeys: !0 }),
    Fe.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return S0(Ts(e, i))
    }),
    n
  )
}
const ln = S0(dh)
ln.Axios = Zl
ln.CanceledError = Ga
ln.CancelToken = mb
ln.isCancel = y0
ln.VERSION = x0
ln.toFormData = Ec
ln.AxiosError = wt
ln.Cancel = ln.CanceledError
ln.all = function (t) {
  return Promise.all(t)
}
ln.spread = vb
ln.isAxiosError = bb
ln.mergeConfig = Ts
ln.AxiosHeaders = _i
ln.formToJSON = (e) => b0(Fe.isHTMLForm(e) ? new FormData(e) : e)
ln.getAdapter = _0.getAdapter
ln.HttpStatusCode = yb
ln.default = ln
const Hn = ln,
  wb = { class: 'flex h-[100svh] flex-col justify-end bg-gradient-to-b from-blue-300 to-blue-500 sm:items-center sm:justify-center' },
  _b = { class: 'flex w-full flex-col gap-2 sm:max-w-[600px] sm:p-4' },
  xb = te('h1', { class: 'px-4 drop-shadow-lg' }, 'Welcome to TakeCare', -1),
  Sb = { key: 1 },
  kb = { class: 'text-right text-sm lg:text-base' },
  Ab = {
    __name: 'LoginPage',
    setup(e) {
      const t = ao(),
        n = _t({ email: null, password: null }),
        r = _t({ email: { message: null, color: null }, password: { message: null, color: null } }),
        i = _t(!1)
      function o() {
        ;(i.value = !0),
          (r.value.email.message = null),
          (r.value.email.color = null),
          (r.value.password.message = null),
          (r.value.password.color = null),
          Hn.post('https://ncp-api-uzr5.onrender.com/user/login', { email: n.value.email, password: n.value.password })
            .then((s) => {
              localStorage.setItem('ncp_user_id', s.data.userId),
                localStorage.setItem('ncp_user_section', s.data.section),
                localStorage.setItem('ncp_token', s.data.token),
                localStorage.setItem('ncp_finished_pre_test', s.data.finishedPreTest),
                localStorage.setItem('ncp_finished_post_test', s.data.finishedPostTest),
                localStorage.setItem('ncp_finished_intro', s.data.finishedIntro),
                localStorage.setItem('ncp_pre_test_session', !1),
                localStorage.setItem('ncp_post_test_session', !1),
                localStorage.setItem('ncp_case_scenario_category', void 0),
                localStorage.setItem('ncp_case_scenario_number', void 0),
                localStorage.setItem('ncp_case_scenario_id', void 0),
                localStorage.setItem('ncp_case_scenario_session', !1),
                localStorage.setItem('ncp_case_scenario_step', 1),
                localStorage.setItem(
                  'ncp_case_scenario_answers',
                  JSON.stringify({
                    subjective: null,
                    objective: [],
                    nursingDiagnosis: null,
                    shortTermGoal: [],
                    longTermGoal: [],
                    independent: [],
                    dependent: []
                  })
                ),
                t.push({ name: 'introduction' }),
                dn.add({ msg: 'Successfully logged in.', duration: 2e3 })
            })
            .catch((s) => {
              ;(i.value = !1),
                s.response.data.message === 'Account not yet approved.' || s.response.status === 401 || s.response.status === 400
                  ? ((r.value.email.message = s.response.data.message),
                    (r.value.email.color = 'error'),
                    (r.value.password.message = null),
                    (r.value.password.color = 'error'))
                  : s.response.data.message === 'Wrong password!'
                    ? ((r.value.email.message = null),
                      (r.value.email.color = null),
                      (r.value.password.message = s.response.data.message),
                      (r.value.password.color = 'error'))
                    : dn.add({ msg: s.response.data, duration: 4e3 })
            })
      }
      return (s, l) => {
        const c = bt('VFormTextbox'),
          f = bt('VLoader'),
          h = bt('VButton'),
          g = bt('VLinkButton')
        return (
          _e(),
          Ne('div', wb, [
            te('div', _b, [
              xb,
              te(
                'form',
                {
                  onSubmit: l[2] || (l[2] = ah((v) => o(), ['prevent'])),
                  class: 'flex w-full flex-col gap-2 rounded-t-2xl bg-blue-50 px-4 py-4 sm:rounded-2xl'
                },
                [
                  Xe(
                    c,
                    {
                      modelValue: n.value.email,
                      'onUpdate:modelValue': l[0] || (l[0] = (v) => (n.value.email = v)),
                      color: r.value.email.color,
                      'sub-label': r.value.email.message,
                      label: 'Email',
                      type: 'email',
                      autocomplete: 'username',
                      required: ''
                    },
                    null,
                    8,
                    ['modelValue', 'color', 'sub-label']
                  ),
                  Xe(
                    c,
                    {
                      modelValue: n.value.password,
                      'onUpdate:modelValue': l[1] || (l[1] = (v) => (n.value.password = v)),
                      color: r.value.password.color,
                      'sub-label': r.value.password.message,
                      label: 'Password',
                      type: 'password',
                      autocomplete: 'current-password',
                      required: ''
                    },
                    null,
                    8,
                    ['modelValue', 'color', 'sub-label']
                  ),
                  Xe(
                    h,
                    { disabled: i.value, class: 'justify-center' },
                    {
                      default: Lt(() => [i.value ? (_e(), Ht(f, { key: 0, size: '16px', thickness: '2px' })) : (_e(), Ne('span', Sb, 'Login'))]),
                      _: 1
                    },
                    8,
                    ['disabled']
                  ),
                  te('div', kb, [Ke(" Don't have an account? "), Xe(g, { to: { name: 'signup' } }, { default: Lt(() => [Ke(' Create one ')]), _: 1 })])
                ],
                32
              )
            ])
          ])
        )
      }
    }
  },
  Lb = { class: 'flex h-[100svh] flex-col justify-end bg-gradient-to-b from-blue-300 to-blue-500 sm:items-center sm:justify-center' },
  Nb = { class: 'flex w-full flex-col gap-2 sm:max-w-[600px] sm:p-4' },
  Pb = te('h1', { class: 'px-4 drop-shadow-lg' }, 'Create an account', -1),
  Cb = { class: 'flex max-h-[360px] flex-col gap-2 overflow-y-auto px-4 pt-6 sm:max-h-[calc(480px-72pxpx)]' },
  jb = { class: 'flex flex-col gap-2 sm:flex-row sm:items-center' },
  Ib = { class: 'flex flex-col gap-2 px-4' },
  Eb = { class: 'flex flex-row gap-1 text-sm' },
  Tb = { key: 1 },
  Fb = { class: 'text-right text-sm lg:text-base' },
  Ob = { class: 'flex flex-col gap-2 p-4' },
  Rb = te('h1', null, 'Terms and Conditions', -1),
  Mb = te(
    'div',
    { class: 'max-h-[400px] overflow-y-auto' },
    ' Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd Lorem ipsum asjkdhaksdhk askdhaksjd askdhasjkhdjkasd ',
    -1
  ),
  Db = {
    __name: 'SignupPage',
    setup(e) {
      const t = ao(),
        n = _t(!1),
        r = _t(!1),
        i = _t({ email: null, password: null, confirmPassword: null, firstName: null, lastName: null, section: '1A' }),
        o = _t({ email: { message: null, color: null }, password: { color: null }, confirmPassword: { message: null, color: null } }),
        s = _t(!1)
      function l() {
        i.value.password === i.value.confirmPassword
          ? ((s.value = !0),
            (o.value.email.message = null),
            (o.value.email.color = null),
            (o.value.password.color = null),
            (o.value.confirmPassword.message = null),
            (o.value.confirmPassword.color = null),
            Hn.post('https://ncp-api-uzr5.onrender.com/user/create', {
              email: i.value.email,
              password: i.value.password,
              name: i.value.firstName + ' ' + i.value.lastName,
              section: i.value.section
            })
              .then(() => {
                dn.add({ msg: 'Account created successfully', duration: 2e3 }),
                  dn.add({ msg: 'Please wait for the account approval', duration: 4e3 }),
                  t.push({ name: 'login' })
              })
              .catch((c) => {
                c.response.status === 409
                  ? (dn.add({ msg: 'An error occured!', duration: 2e3 }),
                    (o.value.email.message = 'Email is already used'),
                    (o.value.email.color = 'error'))
                  : dn.add({ msg: c.response.message, duration: 4e3 }),
                  (s.value = !1)
              }))
          : ((o.value.password.color = 'error'),
            (o.value.confirmPassword.message = 'Passwords are not the same'),
            (o.value.confirmPassword.color = 'error'))
      }
      return (c, f) => {
        const h = bt('VFormTextbox'),
          g = bt('VSelect'),
          v = bt('VLinkButton'),
          p = bt('VLoader'),
          b = bt('VButton'),
          w = bt('VModal')
        return (
          _e(),
          Ne(
            He,
            null,
            [
              te('div', Lb, [
                te('div', Nb, [
                  Pb,
                  te(
                    'form',
                    {
                      onSubmit: f[8] || (f[8] = ah((L) => l(), ['prevent'])),
                      class: 'flex w-full flex-col gap-2 overflow-hidden rounded-t-2xl bg-blue-50 pb-4 sm:rounded-2xl'
                    },
                    [
                      te('div', Cb, [
                        Xe(
                          h,
                          {
                            modelValue: i.value.email,
                            'onUpdate:modelValue': f[0] || (f[0] = (L) => (i.value.email = L)),
                            color: o.value.email.color,
                            'sub-label': o.value.email.message,
                            label: 'Email',
                            type: 'email',
                            autocomplete: 'username',
                            required: ''
                          },
                          null,
                          8,
                          ['modelValue', 'color', 'sub-label']
                        ),
                        Xe(
                          h,
                          {
                            modelValue: i.value.password,
                            'onUpdate:modelValue': f[1] || (f[1] = (L) => (i.value.password = L)),
                            color: o.value.password.color,
                            label: 'Password',
                            type: 'password',
                            autocomplete: 'new-password',
                            required: ''
                          },
                          null,
                          8,
                          ['modelValue', 'color']
                        ),
                        Xe(
                          h,
                          {
                            modelValue: i.value.confirmPassword,
                            'onUpdate:modelValue': f[2] || (f[2] = (L) => (i.value.confirmPassword = L)),
                            color: o.value.confirmPassword.color,
                            'sub-label': o.value.confirmPassword.message,
                            label: 'Confirm Password',
                            type: 'password',
                            autocomplete: 'new-password',
                            required: ''
                          },
                          null,
                          8,
                          ['modelValue', 'color', 'sub-label']
                        ),
                        te('div', jb, [
                          Xe(
                            h,
                            {
                              modelValue: i.value.firstName,
                              'onUpdate:modelValue': f[3] || (f[3] = (L) => (i.value.firstName = L)),
                              label: 'First Name',
                              type: 'text',
                              class: 'sm:w-full',
                              required: ''
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          Xe(
                            h,
                            {
                              modelValue: i.value.lastName,
                              'onUpdate:modelValue': f[4] || (f[4] = (L) => (i.value.lastName = L)),
                              label: 'Last Name',
                              type: 'text',
                              class: 'sm:w-full',
                              required: ''
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        Xe(
                          g,
                          {
                            modelValue: i.value.section,
                            'onUpdate:modelValue': f[5] || (f[5] = (L) => (i.value.section = L)),
                            label: 'Class Section',
                            options: ['1A', '1B', '1C', '1D']
                          },
                          null,
                          8,
                          ['modelValue']
                        )
                      ]),
                      te('div', Ib, [
                        te('div', Eb, [
                          lr(
                            te(
                              'input',
                              { 'onUpdate:modelValue': f[6] || (f[6] = (L) => (r.value = L)), type: 'checkbox', class: 'cursor-pointer' },
                              null,
                              512
                            ),
                            [[hs, r.value]]
                          ),
                          Ke(' I Agree to the '),
                          Xe(
                            v,
                            { variant: 'button', type: 'button', onClick: f[7] || (f[7] = (L) => (n.value = !n.value)) },
                            { default: Lt(() => [Ke(' Terms and Conditions ')]), _: 1 }
                          )
                        ]),
                        Xe(
                          b,
                          { disabled: !r.value || s.value, type: 'submit', class: 'justify-center' },
                          {
                            default: Lt(() => [
                              s.value ? (_e(), Ht(p, { key: 0, size: '16px', thickness: '2px' })) : (_e(), Ne('span', Tb, 'Create Account'))
                            ]),
                            _: 1
                          },
                          8,
                          ['disabled']
                        ),
                        te('div', Fb, [
                          Ke(' Already have and account? '),
                          Xe(v, { to: { name: 'login' } }, { default: Lt(() => [Ke(' Login here ')]), _: 1 })
                        ])
                      ])
                    ],
                    32
                  )
                ])
              ]),
              Xe(
                w,
                { 'go-open': n.value, 'onUpdate:goOpen': f[10] || (f[10] = (L) => (n.value = L)), 'click-outside': !1 },
                {
                  default: Lt(() => [
                    te('div', Ob, [
                      Rb,
                      Mb,
                      Xe(
                        b,
                        { onClick: f[9] || (f[9] = (L) => (n.value = !n.value)), type: 'button', class: 'justify-center' },
                        { default: Lt(() => [Ke(' Close ')]), _: 1 }
                      )
                    ])
                  ]),
                  _: 1
                },
                8,
                ['go-open']
              )
            ],
            64
          )
        )
      }
    }
  },
  Bb = { class: 'flex h-[100svh] w-full items-center justify-center px-4' },
  qb = { class: 'flex w-full flex-col items-center justify-center gap-4 sm:w-3/4' },
  zb = te('h1', { class: 'place-self-start' }, 'Introduction', -1),
  Ub = { class: 'flex flex-col gap-2 p-4' },
  Hb = te(
    'div',
    { class: 'relative w-full overflow-hidden rounded-2xl pt-[56.25%]' },
    [
      te('video', { class: 'absolute left-0 top-0 h-full w-full', controls: '' }, [
        te('source', {
          src: 'https://www.dropbox.com/scl/fi/ilr9358x8bgmo65usni4h/Mobile-App-Presentation-_-Video-Template.mp4?rlkey=ddsds9sbx2w970vpz7c3g7nk2&raw=1',
          type: 'video/mp4'
        }),
        Ke(' Your browser does not support HTML video. ')
      ])
    ],
    -1
  ),
  $b = {
    __name: 'IntroductionPage',
    setup(e) {
      const t = er({ preTest: !0, goToHomePage: !0 }),
        n = er({
          welcomeModal: !1,
          welcomeToggle() {
            this.welcomeModal = !this.welcomeModal
          },
          closeWelcomeToggle() {
            ;(this.welcomeModal = !this.welcomeModal), (t.preTest = !1), (t.goToHomePage = !1)
          },
          preTestModal: !1,
          preTestToggle() {
            this.preTestModal = !this.preTestModal
          },
          postIntroModal: !1,
          postIntroToggle() {
            this.postIntroModal = !this.postIntroModal
          }
        })
      return (r, i) => {
        const o = bt('VIntroButton'),
          s = bt('VButton'),
          l = bt('VModal')
        return (
          _e(),
          Ne(
            He,
            null,
            [
              te('div', Bb, [
                te('div', qb, [
                  zb,
                  Xe(o, {
                    onClick: i[0] || (i[0] = (c) => n.welcomeToggle()),
                    title: 'Intro to TakeCare',
                    desc: 'A video tutorial on how to use this app',
                    step: 1
                  }),
                  Xe(
                    o,
                    {
                      onClick: i[1] || (i[1] = (c) => r.$router.push({ name: 'pre-test' })),
                      disabled: t.preTest,
                      title: 'Pre-test',
                      desc: 'A test to take your initial scores',
                      step: 2
                    },
                    null,
                    8,
                    ['disabled']
                  )
                ])
              ]),
              Xe(
                l,
                { 'go-open': n.welcomeModal, 'onUpdate:goOpen': i[3] || (i[3] = (c) => (n.welcomeModal = c)), 'click-outside': !1 },
                {
                  default: Lt(() => [
                    te('div', Ub, [
                      Hb,
                      Xe(
                        s,
                        { onClick: i[2] || (i[2] = (c) => n.closeWelcomeToggle()), class: 'justify-center' },
                        { default: Lt(() => [Ke('Close')]), _: 1 }
                      )
                    ])
                  ]),
                  _: 1
                },
                8,
                ['go-open']
              )
            ],
            64
          )
        )
      }
    }
  },
  Bs = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, i] of t) n[r] = i
    return n
  },
  ti = (e) => (f1('data-v-b206f25a'), (e = e()), h1(), e),
  Vb = { class: 'flex h-[100svh] flex-col' },
  Wb = { class: 'flex grow flex-col overflow-y-scroll' },
  Gb = { class: 'sticky top-0 flex flex-row items-center justify-between bg-blue-50/70 px-4 pb-4 pt-6 backdrop-blur-xl' },
  Kb = ti(() => te('h1', null, 'App Name', -1)),
  Jb = { class: 'flex w-full shrink-0 flex-row items-center justify-between overflow-hidden border-t bg-blue-50 px-3 font-medium' },
  Yb = { class: 'mt-0 flex w-full flex-row items-center justify-around gap-4' },
  Xb = ti(() => te('span', { class: 'material-icons-round' }, ' space_dashboard ', -1)),
  Qb = ti(() => te('span', null, 'Dashboard', -1)),
  Zb = [Xb, Qb],
  ey = ti(() => te('span', { class: 'material-icons' }, ' view_stream ', -1)),
  ty = ti(() => te('span', null, 'Cases', -1)),
  ny = [ey, ty],
  ry = ti(() => te('span', { class: 'material-icons' }, ' history ', -1)),
  iy = ti(() => te('span', null, 'Case History', -1)),
  oy = [ry, iy],
  sy = { class: 'flex flex-col gap-2 p-4' },
  ay = ti(() =>
    te(
      'div',
      { class: 'relative w-full overflow-hidden rounded-2xl pt-[56.25%]' },
      [
        te('video', { class: 'absolute left-0 top-0 h-full w-full', controls: '' }, [
          te('source', {
            src: 'https://www.dropbox.com/scl/fi/ilr9358x8bgmo65usni4h/Mobile-App-Presentation-_-Video-Template.mp4?rlkey=ddsds9sbx2w970vpz7c3g7nk2&raw=1',
            type: 'video/mp4'
          }),
          Ke(' Your browser does not support HTML video. ')
        ])
      ],
      -1
    )
  ),
  ly = { class: 'flex flex-col gap-2 p-4' },
  cy = { class: 'flex flex-row items-center justify-between' },
  uy = ti(() => te('h2', null, 'Settings', -1)),
  fy = { key: 1 },
  hy = { key: 1 },
  dy = ti(() =>
    te(
      'p',
      { class: 'flex flex-row items-center gap-1 text-sm text-neutral-500' },
      [
        te('span', { class: 'material-icons-round text-[16px]' }, ' warning '),
        Ke(' This will delete all of the data related to you including your test and case scenario histories ')
      ],
      -1
    )
  ),
  py = {
    __name: 'TheBottomNavbar',
    setup(e) {
      const t = localStorage.getItem('ncp_user_id'),
        n = ao(),
        r = _t({
          profileModal: !1,
          profileToggle() {
            this.profileModal = !this.profileModal
          },
          postTestModal: !JSON.parse(localStorage.getItem('ncp_finished_intro')),
          async postTestToggle() {
            ;(this.postTestModal = !this.postTestModal),
              dn.add({ msg: 'Updating information...', duration: 2e3 }),
              await Hn.put(`https://ncp-api-uzr5.onrender.com/user/update/${t}`, { finished_intro: !0 })
                .then(() => {
                  localStorage.setItem('ncp_finished_intro', !0), dn.add({ msg: 'Successfully updated.', duration: 4e3 })
                })
                .catch(() => {
                  dn.add({ msg: 'Update failed', duration: 4e3 })
                })
          }
        }),
        i = _t(!1)
      function o() {
        ;(i.value = !0),
          Hn.delete('https://ncp-api-uzr5.onrender.com/user/logout', { headers: { Authorization: `Bearer ${localStorage.getItem('ncp_token')}` } })
            .then(() => {
              localStorage.removeItem('ncp_user_id'),
                localStorage.removeItem('ncp_user_section'),
                localStorage.removeItem('ncp_token'),
                localStorage.removeItem('ncp_finished_pre_test'),
                localStorage.removeItem('ncp_finished_post_test'),
                localStorage.removeItem('ncp_pre_test_session'),
                localStorage.removeItem('ncp_post_test_session'),
                localStorage.removeItem('ncp_case_scenario_category'),
                localStorage.removeItem('ncp_case_scenario_number'),
                localStorage.removeItem('ncp_case_scenario_id'),
                localStorage.removeItem('ncp_case_scenario_session'),
                localStorage.removeItem('ncp_case_scenario_step'),
                localStorage.removeItem('ncp_case_scenario_answers'),
                n.push({ name: 'login' }),
                Wr.set(0),
                dn.add({ msg: 'Logged out successfully.', duration: 4e3 })
            })
            .catch((c) => console.log(c))
      }
      const s = _t(!1),
        l = _t({
          state: !1,
          toggle() {
            this.state = !this.state
          },
          confirm() {
            ;(s.value = !0),
              this.toggle(),
              Hn.delete(`https://ncp-api-uzr5.onrender.com/user/delete/${t}`)
                .then(() => {
                  localStorage.removeItem('ncp_user_id'),
                    localStorage.removeItem('ncp_user_section'),
                    localStorage.removeItem('ncp_token'),
                    localStorage.removeItem('ncp_finished_pre_test'),
                    localStorage.removeItem('ncp_finished_post_test'),
                    localStorage.removeItem('ncp_pre_test_session'),
                    localStorage.removeItem('ncp_post_test_session'),
                    localStorage.removeItem('ncp_case_scenario_category'),
                    localStorage.removeItem('ncp_case_scenario_number'),
                    localStorage.removeItem('ncp_case_scenario_id'),
                    localStorage.removeItem('ncp_case_scenario_session'),
                    localStorage.removeItem('ncp_case_scenario_step'),
                    localStorage.removeItem('ncp_case_scenario_answers'),
                    n.push({ name: 'login' }),
                    Wr.set(0),
                    dn.add({ msg: 'Account deleted successfully', duration: 4e3 })
                })
                .catch((c) => {
                  ;(i.value = !1), (s.value = !1), console.log(c)
                })
          }
        })
      return (c, f) => {
        const h = bt('VIconButton'),
          g = bt('VButton'),
          v = bt('VModal'),
          p = bt('VLoader'),
          b = bt('VDialog')
        return (
          _e(),
          Ne(
            He,
            null,
            [
              te('div', Vb, [
                te('div', Wb, [
                  te('div', Gb, [
                    Kb,
                    Xe(h, { onClick: f[0] || (f[0] = (w) => r.value.profileToggle()), variant: 'ghost', size: 'lg', icon: 'settings' })
                  ]),
                  Ns(c.$slots, 'default', {}, void 0, !0)
                ]),
                te('div', Jb, [
                  te('div', Yb, [
                    te(
                      'button',
                      { onClick: f[1] || (f[1] = (w) => Pn(Wr).set(0)), class: Jt([[Pn(Wr).index === 0 ? 'active' : ''], 'nav-points']) },
                      Zb,
                      2
                    ),
                    te(
                      'button',
                      { onClick: f[2] || (f[2] = (w) => Pn(Wr).set(1)), class: Jt([[Pn(Wr).index === 1 ? 'active' : ''], 'nav-points']) },
                      ny,
                      2
                    ),
                    te(
                      'button',
                      { onClick: f[3] || (f[3] = (w) => Pn(Wr).set(2)), class: Jt([[Pn(Wr).index === 2 ? 'active' : ''], 'nav-points']) },
                      oy,
                      2
                    )
                  ])
                ])
              ]),
              Xe(
                v,
                { 'go-open': r.value.postTestModal, 'onUpdate:goOpen': f[5] || (f[5] = (w) => (r.value.postTestModal = w)), 'click-outside': !1 },
                {
                  default: Lt(() => [
                    te('div', sy, [
                      ay,
                      Xe(
                        g,
                        { onClick: f[4] || (f[4] = (w) => r.value.postTestToggle()), class: 'justify-center' },
                        { default: Lt(() => [Ke('Close')]), _: 1 }
                      )
                    ])
                  ]),
                  _: 1
                },
                8,
                ['go-open']
              ),
              Xe(
                v,
                { 'go-open': r.value.profileModal, 'onUpdate:goOpen': f[9] || (f[9] = (w) => (r.value.profileModal = w)), 'click-outside': !1 },
                {
                  default: Lt(() => [
                    te('div', ly, [
                      te('div', cy, [
                        uy,
                        Xe(h, { onClick: f[6] || (f[6] = (w) => r.value.profileToggle()), variant: 'ghost', size: 'lg', icon: 'close' })
                      ]),
                      Xe(
                        g,
                        { onClick: f[7] || (f[7] = (w) => o()), disabled: i.value, color: 'warning', class: 'justify-center' },
                        {
                          default: Lt(() => [i.value ? (_e(), Ht(p, { key: 0, size: '16px', thickness: '2px' })) : (_e(), Ne('span', fy, 'Logout'))]),
                          _: 1
                        },
                        8,
                        ['disabled']
                      ),
                      Xe(
                        g,
                        { onClick: f[8] || (f[8] = (w) => l.value.toggle()), disabled: s.value, color: 'error', class: 'justify-center' },
                        {
                          default: Lt(() => [
                            s.value ? (_e(), Ht(p, { key: 0, size: '16px', thickness: '2px' })) : (_e(), Ne('span', hy, 'Delete Account'))
                          ]),
                          _: 1
                        },
                        8,
                        ['disabled']
                      ),
                      dy
                    ])
                  ]),
                  _: 1
                },
                8,
                ['go-open']
              ),
              Xe(
                b,
                {
                  'go-open': l.value.state,
                  'onUpdate:goOpen': f[10] || (f[10] = (w) => (l.value.state = w)),
                  header: 'Account Deletion',
                  body: 'Do you really want to delete your account?',
                  'cancel-label': 'No',
                  'confirm-label': 'Yes',
                  onConfirm: f[11] || (f[11] = (w) => l.value.confirm())
                },
                null,
                8,
                ['go-open']
              )
            ],
            64
          )
        )
      }
    }
  },
  gy = Bs(py, [['__scopeId', 'data-v-b206f25a']]),
  my = { class: 'w-full' },
  vy = { class: 'grid grid-cols-1 gap-2 px-2 pb-2 md:grid-cols-2 md:px-12 xl:px-24' },
  by = te(
    'div',
    {
      class:
        "h-52 w-full shrink-0 rounded-2xl bg-[url('https://us.123rf.com/450wm/captainvector/captainvector2204/captainvector220403921/185074387-a-brain.jpg?ver=6')] bg-cover bg-center"
    },
    null,
    -1
  ),
  yy = te('div', { class: 'flex w-full grow flex-col p-4' }, [te('h2', null, 'Neuro'), te('span', null, 'Small description here')], -1),
  wy = [by, yy],
  _y = { class: 'w-full bg-blue-50 p-4 text-center' },
  xy = { class: 'flex grow flex-col gap-2 px-2 pb-2' },
  Sy = { key: 0, class: 'flex items-center justify-center py-[5px]' },
  ky = {
    __name: 'CasesTab',
    setup(e) {
      const t = ao(),
        n = _t(null),
        r = _t(!0),
        i = er({
          categoryModal: !1,
          category: '',
          categoryToggle(s) {
            ;(this.categoryModal = !this.categoryModal),
              (this.category = s),
              Hn.get(`https://ncp-api-uzr5.onrender.com/case-scenarios/get-all/${s}`).then((l) => {
                ;(n.value = l.data), (r.value = !1)
              })
          }
        })
      function o(s, l, c) {
        localStorage.setItem('ncp_case_scenario_category', c),
          localStorage.setItem('ncp_case_scenario_number', s),
          localStorage.setItem('ncp_case_scenario_id', l),
          t.push({ name: 'case scenario', params: { number: s, id: l, category: c } })
      }
      return (s, l) => {
        const c = bt('VLoader'),
          f = bt('VButton'),
          h = bt('VBottomSheet')
        return (
          _e(),
          Ne('div', my, [
            te('div', vy, [
              (_e(),
              Ne(
                He,
                null,
                Bt(7, (g) =>
                  te(
                    'button',
                    {
                      key: g,
                      onClick: l[0] || (l[0] = (v) => i.categoryToggle('neuro')),
                      class:
                        'flex flex-col rounded-2xl border bg-blue-50 text-start shadow-lg transition-colors hover:border-blue-400 hover:bg-blue-200'
                    },
                    wy
                  )
                ),
                64
              ))
            ]),
            Xe(
              h,
              { 'go-up': i.categoryModal, 'onUpdate:goUp': l[1] || (l[1] = (g) => (i.categoryModal = g)) },
              {
                default: Lt(() => [
                  te('div', _y, [te('h2', null, Je(i.category.charAt(0).toUpperCase() + i.category.slice(1)), 1)]),
                  te('div', xy, [
                    r.value
                      ? (_e(), Ne('div', Sy, [Xe(c, { size: '32px', thickness: '2px' })]))
                      : (_e(!0),
                        Ne(
                          He,
                          { key: 1 },
                          Bt(
                            n.value,
                            (g, v) => (
                              _e(),
                              Ht(
                                f,
                                { key: g, onClick: (p) => o(v + 1, g.id, 'neuro'), class: 'justify-center' },
                                { default: Lt(() => [Ke(' Case Scenario ' + Je(v + 1), 1)]), _: 2 },
                                1032,
                                ['onClick']
                              )
                            )
                          ),
                          128
                        ))
                  ])
                ]),
                _: 1
              },
              8,
              ['go-up']
            )
          ])
        )
      }
    }
  },
  Ay = { class: 'overflow-y-auto' },
  Ly = { key: 0, class: 'flex h-[calc(100svh-137px)] flex-col items-center justify-center' },
  Ny = { key: 0, class: 'flex flex-col px-4 pb-[69px] xl:px-24' },
  Py = { class: 'flex h-10 w-10 items-center justify-center' },
  Cy = { class: 'text-xl font-bold md:text-2xl' },
  jy = { class: 'flex flex-col pl-2' },
  Iy = { class: 'text-lg font-medium leading-none md:text-[20px]' },
  Ey = { class: 'leading-none md:text-[18px]' },
  Ty = te('div', { class: 'flex flex-row items-center gap-1 pr-2' }, [te('span', { class: 'material-icons' }, ' chevron_right ')], -1),
  Fy = te('hr', { class: 'mx-2' }, null, -1),
  Oy = { key: 1, class: 'flex h-[calc(100svh-137px)] flex-col items-center justify-center' },
  Ry = te(
    'div',
    { class: 'flex flex-col items-center text-neutral-400/50' },
    [
      te('span', { class: 'material-icons pr-2 text-[125px] text-neutral-400/50' }, ' history '),
      te('h2', { class: 'font-medium' }, 'No case history found'),
      te('p', null, 'Your case scenario records will display here')
    ],
    -1
  ),
  My = [Ry],
  Dy = {
    __name: 'CaseScenarioHistoryTab',
    setup(e) {
      const t = _t([]),
        n = _t(!0)
      return (
        so(() => {
          Hn.get(`https://ncp-api-uzr5.onrender.com/case-scenario-history/${localStorage.getItem('ncp_user_id')}/get-all`).then((r) => {
            ;(t.value = r.data), (n.value = !1)
          })
        }),
        (r, i) => {
          const o = bt('VLoader'),
            s = bt('router-link')
          return (
            _e(),
            Ne('div', Ay, [
              n.value
                ? (_e(), Ne('div', Ly, [Xe(o, { size: '48px', thickness: '2px' })]))
                : (_e(),
                  Ne(
                    He,
                    { key: 1 },
                    [
                      t.value.length !== 0
                        ? (_e(),
                          Ne('div', Ny, [
                            (_e(!0),
                            Ne(
                              He,
                              null,
                              Bt(
                                t.value,
                                (l, c) => (
                                  _e(),
                                  Ne(
                                    He,
                                    { key: c },
                                    [
                                      Xe(
                                        s,
                                        {
                                          to: { name: 'evaluation', params: { id: l.id } },
                                          class:
                                            'inline-grid select-none auto-cols-[max-content_auto_max-content] grid-flow-col items-center rounded-lg border-b-neutral-200 py-4 transition-colors hover:bg-neutral-400/10'
                                        },
                                        {
                                          default: Lt(() => [
                                            te('div', Py, [te('span', Cy, Je(c + 1), 1)]),
                                            te('div', jy, [
                                              te('span', Iy, Je(new Date(l.dateTaken).toLocaleString()), 1),
                                              te('span', Ey, ' Category: ' + Je(l.category), 1)
                                            ]),
                                            Ty
                                          ]),
                                          _: 2
                                        },
                                        1032,
                                        ['to']
                                      ),
                                      Fy
                                    ],
                                    64
                                  )
                                )
                              ),
                              128
                            ))
                          ]))
                        : (_e(), Ne('div', Oy, My))
                    ],
                    64
                  ))
            ])
          )
        }
      )
    }
  },
  By = { class: 'flex w-full flex-col gap-2 px-2 pb-2 sm:gap-4 lg:min-h-[560px] lg:grow lg:flex-row lg:pb-10 lg:pt-5 xl:px-24' },
  qy = ['disabled'],
  zy = {
    key: 0,
    class:
      'flex h-full w-full flex-row items-end justify-center gap-6 bg-gradient-to-t from-gray-950/50 to-transparent px-4 pb-16 group-disabled:bg-gradient-to-t group-disabled:from-gray-950/70 group-disabled:to-gray-950/40'
  },
  Uy = te('p', { class: 'text-4xl font-medium leading-none text-blue-50 drop-shadow-md sm:text-5xl' }, 'Please wait', -1),
  Hy = {
    key: 1,
    class:
      'flex h-full w-full flex-col items-center justify-end bg-gradient-to-t from-gray-950/50 to-transparent px-4 pb-16 group-disabled:bg-gradient-to-t group-disabled:from-gray-950/70 group-disabled:to-gray-950/40'
  },
  $y = te('p', { class: 'text-4xl font-medium leading-none text-blue-50 drop-shadow-md sm:text-5xl' }, 'Post Test Finished', -1),
  Vy = [$y],
  Wy = {
    key: 2,
    class:
      'flex h-full w-full flex-col items-center justify-end bg-gradient-to-t from-gray-950/50 to-transparent px-4 pb-6 group-disabled:bg-gradient-to-t group-disabled:from-gray-950/70 group-disabled:to-gray-950/40 md:items-start md:px-10 md:py-10'
  },
  Gy = te('p', { class: 'text-4xl font-medium leading-none text-blue-50 drop-shadow-md sm:text-5xl' }, 'Take the Post Test', -1),
  Ky = { key: 0, class: 'text-sm text-blue-50 drop-shadow-md sm:text-base' },
  Jy = { key: 1, class: 'text-sm text-blue-50 drop-shadow-md sm:text-base' },
  Yy = { class: 'flex flex-col gap-2 sm:gap-4 lg:basis-1/2' },
  Xy = { class: 'flex h-44 w-full flex-col rounded-2xl border border-neutral-300 p-4 lg:h-auto lg:basis-1/2 lg:flex-col' },
  Qy = te('p', { class: 'text-2xl sm:text-3xl' }, 'Pre Test Score', -1),
  Zy = { class: 'flex grow items-center justify-center' },
  e4 = { key: 1, class: 'text-5xl font-bold sm:text-6xl sm:font-black' },
  t4 = { class: 'flex h-44 w-full flex-col rounded-2xl border border-neutral-300 p-4 lg:h-auto lg:basis-1/2 lg:flex-col' },
  n4 = te('p', { class: 'text-2xl sm:text-3xl' }, 'Post Test Score', -1),
  r4 = { class: 'flex grow items-center justify-center' },
  i4 = { key: 1, class: 'text-5xl font-bold sm:text-6xl sm:font-black' },
  o4 = { key: 2, class: 'text-3xl font-medium sm:text-4xl sm:font-semibold' },
  s4 = {
    __name: 'DashboardTab',
    setup(e) {
      const t = Pc(),
        n = ao()
      function r(f) {
        return f.split('').reverse().join('')
      }
      const i = _t(null),
        o = _t(null),
        s = _t([]),
        l = _t(!0)
      so(async () => {
        let f,
          h = r(localStorage.getItem('ncp_user_section'))
        await Hn.get('https://ncp-api-uzr5.onrender.com/enable-post-test/get').then(async (g) => {
          ;(f = g.data),
            await Hn.get(`https://ncp-api-uzr5.onrender.com/test-history/${t.params.userId}`).then((v) => {
              let p = v.data.find((w) => w.test_type === 'PRETEST'),
                b = v.data.find((w) => w.test_type === 'POSTTEST')
              ;(s.value = { preTest: p.score, postTest: b !== void 0 ? b.score : null }), (l.value = !1)
            })
        }),
          (i.value = f[h]),
          (o.value = JSON.parse(localStorage.getItem('ncp_finished_post_test')))
      })
      function c() {
        ;(W1.value = !0), n.push({ name: 'post-test' })
      }
      return (f, h) => {
        const g = bt('VLoader')
        return (
          _e(),
          Ne('div', By, [
            te(
              'button',
              {
                onClick: h[0] || (h[0] = (v) => c()),
                disabled: !i.value || o.value,
                class:
                  "group col-span-8 h-96 overflow-hidden rounded-2xl bg-[url('https://www.ucl.ac.uk/ioe/sites/ioe/files/styles/large_image/public/lilac-blouse-school-uniform.png?itok=KGavEVWp')] bg-cover bg-top shadow-lg sm:h-[560px] lg:h-full lg:basis-1/2"
              },
              [
                l.value
                  ? (_e(),
                    Ne('div', zy, [
                      Uy,
                      Xe(g, { size: '30px', thickness: '2px', class: 'md:hidden' }),
                      Xe(g, { size: '48px', thickness: '2px', class: 'hidden md:block' })
                    ]))
                  : o.value
                    ? (_e(), Ne('div', Hy, Vy))
                    : (_e(),
                      Ne('div', Wy, [
                        Gy,
                        i.value ? (_e(), Ne('p', Jy, 'Click Here')) : (_e(), Ne('p', Ky, '(Please wait for your moderator to enable this)'))
                      ]))
              ],
              8,
              qy
            ),
            te('div', Yy, [
              te('div', Xy, [
                Qy,
                te('div', Zy, [
                  l.value
                    ? (_e(),
                      Ne(
                        He,
                        { key: 0 },
                        [
                          Xe(g, { size: '30px', thickness: '2px', class: 'md:hidden' }),
                          Xe(g, { size: '48px', thickness: '2px', class: 'hidden md:block' })
                        ],
                        64
                      ))
                    : s.value.preTest !== null
                      ? (_e(), Ne('p', e4, Je(s.value.preTest), 1))
                      : Vn('', !0)
                ])
              ]),
              te('div', t4, [
                n4,
                te('div', r4, [
                  l.value
                    ? (_e(),
                      Ne(
                        He,
                        { key: 0 },
                        [
                          Xe(g, { size: '30px', thickness: '2px', class: 'md:hidden' }),
                          Xe(g, { size: '48px', thickness: '2px', class: 'hidden md:block' })
                        ],
                        64
                      ))
                    : s.value.postTest !== null
                      ? (_e(), Ne('p', i4, Je(s.value.postTest), 1))
                      : (_e(), Ne('p', o4, 'Not yet taken'))
                ])
              ])
            ])
          ])
        )
      }
    }
  },
  a4 = {
    __name: 'HomePage',
    setup(e) {
      const t = [s4, ky, Dy]
      return (n, r) => (
        _e(),
        Ht(gy, null, {
          default: Lt(() => [
            Xe(Ac, { name: 'fade-up', mode: 'out-in' }, { default: Lt(() => [(_e(), Ht(j5, null, [(_e(), Ht(p1(t[Pn(Wr).index])))], 1024))]), _: 1 })
          ]),
          _: 1
        })
      )
    }
  }
function Et(e) {
  '@babel/helpers - typeof'
  return (
    (Et =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
          }),
    Et(e)
  )
}
var Tn = Uint8Array,
  Fn = Uint16Array,
  Ua = Uint32Array,
  Fc = new Tn([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
  Oc = new Tn([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
  kf = new Tn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
  k0 = function (e, t) {
    for (var n = new Fn(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1]
    for (var i = new Ua(n[30]), r = 1; r < 30; ++r) for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r
    return [n, i]
  },
  A0 = k0(Fc, 2),
  L0 = A0[0],
  Af = A0[1]
;(L0[28] = 258), (Af[258] = 28)
var N0 = k0(Oc, 0),
  l4 = N0[0],
  dp = N0[1],
  Lf = new Fn(32768)
for (var zt = 0; zt < 32768; ++zt) {
  var $i = ((zt & 43690) >>> 1) | ((zt & 21845) << 1)
  ;($i = (($i & 52428) >>> 2) | (($i & 13107) << 2)),
    ($i = (($i & 61680) >>> 4) | (($i & 3855) << 4)),
    (Lf[zt] = ((($i & 65280) >>> 8) | (($i & 255) << 8)) >>> 1)
}
var Qr = function (e, t, n) {
    for (var r = e.length, i = 0, o = new Fn(t); i < r; ++i) ++o[e[i] - 1]
    var s = new Fn(t)
    for (i = 0; i < t; ++i) s[i] = (s[i - 1] + o[i - 1]) << 1
    var l
    if (n) {
      l = new Fn(1 << t)
      var c = 15 - t
      for (i = 0; i < r; ++i)
        if (e[i]) for (var f = (i << 4) | e[i], h = t - e[i], g = s[e[i] - 1]++ << h, v = g | ((1 << h) - 1); g <= v; ++g) l[Lf[g] >>> c] = f
    } else for (l = new Fn(r), i = 0; i < r; ++i) l[i] = Lf[s[e[i] - 1]++] >>> (15 - e[i])
    return l
  },
  io = new Tn(288)
for (var zt = 0; zt < 144; ++zt) io[zt] = 8
for (var zt = 144; zt < 256; ++zt) io[zt] = 9
for (var zt = 256; zt < 280; ++zt) io[zt] = 7
for (var zt = 280; zt < 288; ++zt) io[zt] = 8
var Ha = new Tn(32)
for (var zt = 0; zt < 32; ++zt) Ha[zt] = 5
var c4 = Qr(io, 9, 0),
  u4 = Qr(io, 9, 1),
  f4 = Qr(Ha, 5, 0),
  h4 = Qr(Ha, 5, 1),
  $u = function (e) {
    for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n])
    return t
  },
  Pr = function (e, t, n) {
    var r = (t / 8) >> 0
    return ((e[r] | (e[r + 1] << 8)) >>> (t & 7)) & n
  },
  Vu = function (e, t) {
    var n = (t / 8) >> 0
    return (e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)) >>> (t & 7)
  },
  mh = function (e) {
    return ((e / 8) >> 0) + (e & 7 && 1)
  },
  P0 = function (e, t, n) {
    ;(t == null || t < 0) && (t = 0), (n == null || n > e.length) && (n = e.length)
    var r = new (e instanceof Fn ? Fn : e instanceof Ua ? Ua : Tn)(n - t)
    return r.set(e.subarray(t, n)), r
  },
  d4 = function (e, t, n) {
    var r = e.length,
      i = !t || n,
      o = !n || n.i
    n || (n = {}), t || (t = new Tn(r * 3))
    var s = function (re) {
        var Y = t.length
        if (re > Y) {
          var oe = new Tn(Math.max(Y * 2, re))
          oe.set(t), (t = oe)
        }
      },
      l = n.f || 0,
      c = n.p || 0,
      f = n.b || 0,
      h = n.l,
      g = n.d,
      v = n.m,
      p = n.n,
      b = r * 8
    do {
      if (!h) {
        n.f = l = Pr(e, c, 1)
        var w = Pr(e, c + 1, 3)
        if (((c += 3), w))
          if (w == 1) (h = u4), (g = h4), (v = 9), (p = 5)
          else if (w == 2) {
            var k = Pr(e, c, 31) + 257,
              C = Pr(e, c + 10, 15) + 4,
              D = k + Pr(e, c + 5, 31) + 1
            c += 14
            for (var U = new Tn(D), E = new Tn(19), N = 0; N < C; ++N) E[kf[N]] = Pr(e, c + N * 3, 7)
            c += C * 3
            var V = $u(E),
              Q = (1 << V) - 1
            if (!o && c + D * (V + 7) > b) break
            for (var P = Qr(E, V, 1), N = 0; N < D; ) {
              var S = P[Pr(e, c, Q)]
              c += S & 15
              var L = S >>> 4
              if (L < 16) U[N++] = L
              else {
                var z = 0,
                  $ = 0
                for (
                  L == 16
                    ? (($ = 3 + Pr(e, c, 3)), (c += 2), (z = U[N - 1]))
                    : L == 17
                      ? (($ = 3 + Pr(e, c, 7)), (c += 3))
                      : L == 18 && (($ = 11 + Pr(e, c, 127)), (c += 7));
                  $--;

                )
                  U[N++] = z
              }
            }
            var de = U.subarray(0, k),
              W = U.subarray(k)
            ;(v = $u(de)), (p = $u(W)), (h = Qr(de, v, 1)), (g = Qr(W, p, 1))
          } else throw 'invalid block type'
        else {
          var L = mh(c) + 4,
            _ = e[L - 4] | (e[L - 3] << 8),
            x = L + _
          if (x > r) {
            if (o) throw 'unexpected EOF'
            break
          }
          i && s(f + _), t.set(e.subarray(L, x), f), (n.b = f += _), (n.p = c = x * 8)
          continue
        }
        if (c > b) throw 'unexpected EOF'
      }
      i && s(f + 131072)
      for (var H = (1 << v) - 1, X = (1 << p) - 1, ne = v + p + 18; o || c + ne < b; ) {
        var z = h[Vu(e, c) & H],
          fe = z >>> 4
        if (((c += z & 15), c > b)) throw 'unexpected EOF'
        if (!z) throw 'invalid length/literal'
        if (fe < 256) t[f++] = fe
        else if (fe == 256) {
          h = null
          break
        } else {
          var xe = fe - 254
          if (fe > 264) {
            var N = fe - 257,
              A = Fc[N]
            ;(xe = Pr(e, c, (1 << A) - 1) + L0[N]), (c += A)
          }
          var B = g[Vu(e, c) & X],
            G = B >>> 4
          if (!B) throw 'invalid distance'
          c += B & 15
          var W = l4[G]
          if (G > 3) {
            var A = Oc[G]
            ;(W += Vu(e, c) & ((1 << A) - 1)), (c += A)
          }
          if (c > b) throw 'unexpected EOF'
          i && s(f + 131072)
          for (var ee = f + xe; f < ee; f += 4) (t[f] = t[f - W]), (t[f + 1] = t[f + 1 - W]), (t[f + 2] = t[f + 2 - W]), (t[f + 3] = t[f + 3 - W])
          f = ee
        }
      }
      ;(n.l = h), (n.p = c), (n.b = f), h && ((l = 1), (n.m = v), (n.d = g), (n.n = p))
    } while (!l)
    return f == t.length ? t : P0(t, 0, f)
  },
  mi = function (e, t, n) {
    n <<= t & 7
    var r = (t / 8) >> 0
    ;(e[r] |= n), (e[r + 1] |= n >>> 8)
  },
  ya = function (e, t, n) {
    n <<= t & 7
    var r = (t / 8) >> 0
    ;(e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16)
  },
  Wu = function (e, t) {
    for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] })
    var i = n.length,
      o = n.slice()
    if (!i) return [new Tn(0), 0]
    if (i == 1) {
      var s = new Tn(n[0].s + 1)
      return (s[n[0].s] = 1), [s, 1]
    }
    n.sort(function (D, U) {
      return D.f - U.f
    }),
      n.push({ s: -1, f: 25001 })
    var l = n[0],
      c = n[1],
      f = 0,
      h = 1,
      g = 2
    for (n[0] = { s: -1, f: l.f + c.f, l, r: c }; h != i - 1; )
      (l = n[n[f].f < n[g].f ? f++ : g++]), (c = n[f != h && n[f].f < n[g].f ? f++ : g++]), (n[h++] = { s: -1, f: l.f + c.f, l, r: c })
    for (var v = o[0].s, r = 1; r < i; ++r) o[r].s > v && (v = o[r].s)
    var p = new Fn(v + 1),
      b = Nf(n[h - 1], p, 0)
    if (b > t) {
      var r = 0,
        w = 0,
        L = b - t,
        _ = 1 << L
      for (
        o.sort(function (U, E) {
          return p[E.s] - p[U.s] || U.f - E.f
        });
        r < i;
        ++r
      ) {
        var x = o[r].s
        if (p[x] > t) (w += _ - (1 << (b - p[x]))), (p[x] = t)
        else break
      }
      for (w >>>= L; w > 0; ) {
        var k = o[r].s
        p[k] < t ? (w -= 1 << (t - p[k]++ - 1)) : ++r
      }
      for (; r >= 0 && w; --r) {
        var C = o[r].s
        p[C] == t && (--p[C], ++w)
      }
      b = t
    }
    return [new Tn(p), b]
  },
  Nf = function (e, t, n) {
    return e.s == -1 ? Math.max(Nf(e.l, t, n + 1), Nf(e.r, t, n + 1)) : (t[e.s] = n)
  },
  pp = function (e) {
    for (var t = e.length; t && !e[--t]; );
    for (
      var n = new Fn(++t),
        r = 0,
        i = e[0],
        o = 1,
        s = function (c) {
          n[r++] = c
        },
        l = 1;
      l <= t;
      ++l
    )
      if (e[l] == i && l != t) ++o
      else {
        if (!i && o > 2) {
          for (; o > 138; o -= 138) s(32754)
          o > 2 && (s(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305), (o = 0))
        } else if (o > 3) {
          for (s(i), --o; o > 6; o -= 6) s(8304)
          o > 2 && (s(((o - 3) << 5) | 8208), (o = 0))
        }
        for (; o--; ) s(i)
        ;(o = 1), (i = e[l])
      }
    return [n.subarray(0, r), t]
  },
  wa = function (e, t) {
    for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r]
    return n
  },
  ec = function (e, t, n) {
    var r = n.length,
      i = mh(t + 2)
    ;(e[i] = r & 255), (e[i + 1] = r >>> 8), (e[i + 2] = e[i] ^ 255), (e[i + 3] = e[i + 1] ^ 255)
    for (var o = 0; o < r; ++o) e[i + o + 4] = n[o]
    return (i + 4 + r) * 8
  },
  gp = function (e, t, n, r, i, o, s, l, c, f, h) {
    mi(t, h++, n), ++i[256]
    for (
      var g = Wu(i, 15),
        v = g[0],
        p = g[1],
        b = Wu(o, 15),
        w = b[0],
        L = b[1],
        _ = pp(v),
        x = _[0],
        k = _[1],
        C = pp(w),
        D = C[0],
        U = C[1],
        E = new Fn(19),
        N = 0;
      N < x.length;
      ++N
    )
      E[x[N] & 31]++
    for (var N = 0; N < D.length; ++N) E[D[N] & 31]++
    for (var V = Wu(E, 7), Q = V[0], P = V[1], S = 19; S > 4 && !Q[kf[S - 1]]; --S);
    var z = (f + 5) << 3,
      $ = wa(i, io) + wa(o, Ha) + s,
      de = wa(i, v) + wa(o, w) + s + 14 + 3 * S + wa(E, Q) + (2 * E[16] + 3 * E[17] + 7 * E[18])
    if (z <= $ && z <= de) return ec(t, h, e.subarray(c, c + f))
    var W, H, X, ne
    if ((mi(t, h, 1 + (de < $)), (h += 2), de < $)) {
      ;(W = Qr(v, p, 0)), (H = v), (X = Qr(w, L, 0)), (ne = w)
      var fe = Qr(Q, P, 0)
      mi(t, h, k - 257), mi(t, h + 5, U - 1), mi(t, h + 10, S - 4), (h += 14)
      for (var N = 0; N < S; ++N) mi(t, h + 3 * N, Q[kf[N]])
      h += 3 * S
      for (var xe = [x, D], A = 0; A < 2; ++A)
        for (var B = xe[A], N = 0; N < B.length; ++N) {
          var G = B[N] & 31
          mi(t, h, fe[G]), (h += Q[G]), G > 15 && (mi(t, h, (B[N] >>> 5) & 127), (h += B[N] >>> 12))
        }
    } else (W = c4), (H = io), (X = f4), (ne = Ha)
    for (var N = 0; N < l; ++N)
      if (r[N] > 255) {
        var G = (r[N] >>> 18) & 31
        ya(t, h, W[G + 257]), (h += H[G + 257]), G > 7 && (mi(t, h, (r[N] >>> 23) & 31), (h += Fc[G]))
        var ee = r[N] & 31
        ya(t, h, X[ee]), (h += ne[ee]), ee > 3 && (ya(t, h, (r[N] >>> 5) & 8191), (h += Oc[ee]))
      } else ya(t, h, W[r[N]]), (h += H[r[N]])
    return ya(t, h, W[256]), h + H[256]
  },
  p4 = new Ua([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
  g4 = new Tn(0),
  m4 = function (e, t, n, r, i, o) {
    var s = e.length,
      l = new Tn(r + s + 5 * (1 + Math.floor(s / 7e3)) + i),
      c = l.subarray(r, l.length - i),
      f = 0
    if (!t || s < 8)
      for (var h = 0; h <= s; h += 65535) {
        var g = h + 65535
        g < s ? (f = ec(c, f, e.subarray(h, g))) : ((c[h] = o), (f = ec(c, f, e.subarray(h, s))))
      }
    else {
      for (
        var v = p4[t - 1],
          p = v >>> 13,
          b = v & 8191,
          w = (1 << n) - 1,
          L = new Fn(32768),
          _ = new Fn(w + 1),
          x = Math.ceil(n / 3),
          k = 2 * x,
          C = function (ae) {
            return (e[ae] ^ (e[ae + 1] << x) ^ (e[ae + 2] << k)) & w
          },
          D = new Ua(25e3),
          U = new Fn(288),
          E = new Fn(32),
          N = 0,
          V = 0,
          h = 0,
          Q = 0,
          P = 0,
          S = 0;
        h < s;
        ++h
      ) {
        var z = C(h),
          $ = h & 32767,
          de = _[z]
        if (((L[$] = de), (_[z] = $), P <= h)) {
          var W = s - h
          if ((N > 7e3 || Q > 24576) && W > 423) {
            ;(f = gp(e, c, 0, D, U, E, V, Q, S, h - S, f)), (Q = N = V = 0), (S = h)
            for (var H = 0; H < 286; ++H) U[H] = 0
            for (var H = 0; H < 30; ++H) E[H] = 0
          }
          var X = 2,
            ne = 0,
            fe = b,
            xe = ($ - de) & 32767
          if (W > 2 && z == C(h - xe))
            for (var A = Math.min(p, W) - 1, B = Math.min(32767, h), G = Math.min(258, W); xe <= B && --fe && $ != de; ) {
              if (e[h + X] == e[h + X - xe]) {
                for (var ee = 0; ee < G && e[h + ee] == e[h + ee - xe]; ++ee);
                if (ee > X) {
                  if (((X = ee), (ne = xe), ee > A)) break
                  for (var re = Math.min(xe, ee - 2), Y = 0, H = 0; H < re; ++H) {
                    var oe = (h - xe + H + 32768) & 32767,
                      se = L[oe],
                      Se = (oe - se + 32768) & 32767
                    Se > Y && ((Y = Se), (de = oe))
                  }
                }
              }
              ;($ = de), (de = L[$]), (xe += ($ - de + 32768) & 32767)
            }
          if (ne) {
            D[Q++] = 268435456 | (Af[X] << 18) | dp[ne]
            var je = Af[X] & 31,
              q = dp[ne] & 31
            ;(V += Fc[je] + Oc[q]), ++U[257 + je], ++E[q], (P = h + X), ++N
          } else (D[Q++] = e[h]), ++U[e[h]]
        }
      }
      ;(f = gp(e, c, o, D, U, E, V, Q, S, h - S, f)), o || (f = ec(c, f, g4))
    }
    return P0(l, 0, r + mh(f) + i)
  },
  v4 = function () {
    var e = 1,
      t = 0
    return {
      p: function (n) {
        for (var r = e, i = t, o = n.length, s = 0; s != o; ) {
          for (var l = Math.min(s + 5552, o); s < l; ++s) (r += n[s]), (i += r)
          ;(r %= 65521), (i %= 65521)
        }
        ;(e = r), (t = i)
      },
      d: function () {
        return (((e >>> 8) << 16) | ((t & 255) << 8) | (t >>> 8)) + ((e & 255) << 23) * 2
      }
    }
  },
  b4 = function (e, t, n, r, i) {
    return m4(e, t.level == null ? 6 : t.level, t.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 12 + t.mem, n, r, !i)
  },
  y4 = function (e, t, n) {
    for (; n; ++t) (e[t] = n), (n >>>= 8)
  },
  w4 = function (e, t) {
    var n = t.level,
      r = n == 0 ? 0 : n < 6 ? 1 : n == 9 ? 3 : 2
    ;(e[0] = 120), (e[1] = (r << 6) | (r ? 32 - 2 * r : 1))
  },
  _4 = function (e) {
    if ((e[0] & 15) != 8 || e[0] >>> 4 > 7 || ((e[0] << 8) | e[1]) % 31) throw 'invalid zlib data'
    if (e[1] & 32) throw 'invalid zlib data: preset dictionaries not supported'
  }
function Pf(e, t) {
  t === void 0 && (t = {})
  var n = v4()
  n.p(e)
  var r = b4(e, t, 2, 4)
  return w4(r, t), y4(r, r.length - 4, n.d()), r
}
function x4(e, t) {
  return d4((_4(e), e.subarray(2, -4)), t)
}
var st = (function () {
  return typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : this
})()
function Gu() {
  st.console && typeof st.console.log == 'function' && st.console.log.apply(st.console, arguments)
}
var Ot = {
  log: Gu,
  warn: function (e) {
    st.console && (typeof st.console.warn == 'function' ? st.console.warn.apply(st.console, arguments) : Gu.call(null, arguments))
  },
  error: function (e) {
    st.console && (typeof st.console.error == 'function' ? st.console.error.apply(st.console, arguments) : Gu(e))
  }
}
function Ku(e, t, n) {
  var r = new XMLHttpRequest()
  r.open('GET', e),
    (r.responseType = 'blob'),
    (r.onload = function () {
      xo(r.response, t, n)
    }),
    (r.onerror = function () {
      Ot.error('could not download file')
    }),
    r.send()
}
function mp(e) {
  var t = new XMLHttpRequest()
  t.open('HEAD', e, !1)
  try {
    t.send()
  } catch {}
  return t.status >= 200 && t.status <= 299
}
function Hl(e) {
  try {
    e.dispatchEvent(new MouseEvent('click'))
  } catch {
    var t = document.createEvent('MouseEvents')
    t.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
  }
}
var Pa,
  Cf,
  xo =
    st.saveAs ||
    ((typeof window > 'u' ? 'undefined' : Et(window)) !== 'object' || window !== st
      ? function () {}
      : typeof HTMLAnchorElement < 'u' && 'download' in HTMLAnchorElement.prototype
        ? function (e, t, n) {
            var r = st.URL || st.webkitURL,
              i = document.createElement('a')
            ;(t = t || e.name || 'download'),
              (i.download = t),
              (i.rel = 'noopener'),
              typeof e == 'string'
                ? ((i.href = e), i.origin !== location.origin ? (mp(i.href) ? Ku(e, t, n) : Hl(i, (i.target = '_blank'))) : Hl(i))
                : ((i.href = r.createObjectURL(e)),
                  setTimeout(function () {
                    r.revokeObjectURL(i.href)
                  }, 4e4),
                  setTimeout(function () {
                    Hl(i)
                  }, 0))
          }
        : 'msSaveOrOpenBlob' in navigator
          ? function (e, t, n) {
              if (((t = t || e.name || 'download'), typeof e == 'string'))
                if (mp(e)) Ku(e, t, n)
                else {
                  var r = document.createElement('a')
                  ;(r.href = e),
                    (r.target = '_blank'),
                    setTimeout(function () {
                      Hl(r)
                    })
                }
              else
                navigator.msSaveOrOpenBlob(
                  (function (i, o) {
                    return (
                      o === void 0
                        ? (o = { autoBom: !1 })
                        : Et(o) !== 'object' && (Ot.warn('Deprecated: Expected third argument to be a object'), (o = { autoBom: !o })),
                      o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)
                        ? new Blob(['\uFEFF', i], { type: i.type })
                        : i
                    )
                  })(e, n),
                  t
                )
            }
          : function (e, t, n, r) {
              if (((r = r || open('', '_blank')) && (r.document.title = r.document.body.innerText = 'downloading...'), typeof e == 'string'))
                return Ku(e, t, n)
              var i = e.type === 'application/octet-stream',
                o = /constructor/i.test(st.HTMLElement) || st.safari,
                s = /CriOS\/[\d]+/.test(navigator.userAgent)
              if ((s || (i && o)) && (typeof FileReader > 'u' ? 'undefined' : Et(FileReader)) === 'object') {
                var l = new FileReader()
                ;(l.onloadend = function () {
                  var h = l.result
                  ;(h = s ? h : h.replace(/^data:[^;]*;/, 'data:attachment/file;')), r ? (r.location.href = h) : (location = h), (r = null)
                }),
                  l.readAsDataURL(e)
              } else {
                var c = st.URL || st.webkitURL,
                  f = c.createObjectURL(e)
                r ? (r.location = f) : (location.href = f),
                  (r = null),
                  setTimeout(function () {
                    c.revokeObjectURL(f)
                  }, 4e4)
              }
            })
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */ function C0(e) {
  var t
  ;(e = e || ''),
    (this.ok = !1),
    e.charAt(0) == '#' && (e = e.substr(1, 6)),
    (e =
      {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
      }[(e = (e = e.replace(/ /g, '')).toLowerCase())] || e)
  for (
    var n = [
        {
          re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
          example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
          process: function (l) {
            return [parseInt(l[1]), parseInt(l[2]), parseInt(l[3])]
          }
        },
        {
          re: /^(\w{2})(\w{2})(\w{2})$/,
          example: ['#00ff00', '336699'],
          process: function (l) {
            return [parseInt(l[1], 16), parseInt(l[2], 16), parseInt(l[3], 16)]
          }
        },
        {
          re: /^(\w{1})(\w{1})(\w{1})$/,
          example: ['#fb0', 'f0f'],
          process: function (l) {
            return [parseInt(l[1] + l[1], 16), parseInt(l[2] + l[2], 16), parseInt(l[3] + l[3], 16)]
          }
        }
      ],
      r = 0;
    r < n.length;
    r++
  ) {
    var i = n[r].re,
      o = n[r].process,
      s = i.exec(e)
    s && ((t = o(s)), (this.r = t[0]), (this.g = t[1]), (this.b = t[2]), (this.ok = !0))
  }
  ;(this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
    (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
    (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
    (this.toRGB = function () {
      return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')'
    }),
    (this.toHex = function () {
      var l = this.r.toString(16),
        c = this.g.toString(16),
        f = this.b.toString(16)
      return l.length == 1 && (l = '0' + l), c.length == 1 && (c = '0' + c), f.length == 1 && (f = '0' + f), '#' + l + c + f
    })
}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */ function Ju(e, t) {
  var n = e[0],
    r = e[1],
    i = e[2],
    o = e[3]
  ;(n = kn(n, r, i, o, t[0], 7, -680876936)),
    (o = kn(o, n, r, i, t[1], 12, -389564586)),
    (i = kn(i, o, n, r, t[2], 17, 606105819)),
    (r = kn(r, i, o, n, t[3], 22, -1044525330)),
    (n = kn(n, r, i, o, t[4], 7, -176418897)),
    (o = kn(o, n, r, i, t[5], 12, 1200080426)),
    (i = kn(i, o, n, r, t[6], 17, -1473231341)),
    (r = kn(r, i, o, n, t[7], 22, -45705983)),
    (n = kn(n, r, i, o, t[8], 7, 1770035416)),
    (o = kn(o, n, r, i, t[9], 12, -1958414417)),
    (i = kn(i, o, n, r, t[10], 17, -42063)),
    (r = kn(r, i, o, n, t[11], 22, -1990404162)),
    (n = kn(n, r, i, o, t[12], 7, 1804603682)),
    (o = kn(o, n, r, i, t[13], 12, -40341101)),
    (i = kn(i, o, n, r, t[14], 17, -1502002290)),
    (n = An(n, (r = kn(r, i, o, n, t[15], 22, 1236535329)), i, o, t[1], 5, -165796510)),
    (o = An(o, n, r, i, t[6], 9, -1069501632)),
    (i = An(i, o, n, r, t[11], 14, 643717713)),
    (r = An(r, i, o, n, t[0], 20, -373897302)),
    (n = An(n, r, i, o, t[5], 5, -701558691)),
    (o = An(o, n, r, i, t[10], 9, 38016083)),
    (i = An(i, o, n, r, t[15], 14, -660478335)),
    (r = An(r, i, o, n, t[4], 20, -405537848)),
    (n = An(n, r, i, o, t[9], 5, 568446438)),
    (o = An(o, n, r, i, t[14], 9, -1019803690)),
    (i = An(i, o, n, r, t[3], 14, -187363961)),
    (r = An(r, i, o, n, t[8], 20, 1163531501)),
    (n = An(n, r, i, o, t[13], 5, -1444681467)),
    (o = An(o, n, r, i, t[2], 9, -51403784)),
    (i = An(i, o, n, r, t[7], 14, 1735328473)),
    (n = Ln(n, (r = An(r, i, o, n, t[12], 20, -1926607734)), i, o, t[5], 4, -378558)),
    (o = Ln(o, n, r, i, t[8], 11, -2022574463)),
    (i = Ln(i, o, n, r, t[11], 16, 1839030562)),
    (r = Ln(r, i, o, n, t[14], 23, -35309556)),
    (n = Ln(n, r, i, o, t[1], 4, -1530992060)),
    (o = Ln(o, n, r, i, t[4], 11, 1272893353)),
    (i = Ln(i, o, n, r, t[7], 16, -155497632)),
    (r = Ln(r, i, o, n, t[10], 23, -1094730640)),
    (n = Ln(n, r, i, o, t[13], 4, 681279174)),
    (o = Ln(o, n, r, i, t[0], 11, -358537222)),
    (i = Ln(i, o, n, r, t[3], 16, -722521979)),
    (r = Ln(r, i, o, n, t[6], 23, 76029189)),
    (n = Ln(n, r, i, o, t[9], 4, -640364487)),
    (o = Ln(o, n, r, i, t[12], 11, -421815835)),
    (i = Ln(i, o, n, r, t[15], 16, 530742520)),
    (n = Nn(n, (r = Ln(r, i, o, n, t[2], 23, -995338651)), i, o, t[0], 6, -198630844)),
    (o = Nn(o, n, r, i, t[7], 10, 1126891415)),
    (i = Nn(i, o, n, r, t[14], 15, -1416354905)),
    (r = Nn(r, i, o, n, t[5], 21, -57434055)),
    (n = Nn(n, r, i, o, t[12], 6, 1700485571)),
    (o = Nn(o, n, r, i, t[3], 10, -1894986606)),
    (i = Nn(i, o, n, r, t[10], 15, -1051523)),
    (r = Nn(r, i, o, n, t[1], 21, -2054922799)),
    (n = Nn(n, r, i, o, t[8], 6, 1873313359)),
    (o = Nn(o, n, r, i, t[15], 10, -30611744)),
    (i = Nn(i, o, n, r, t[6], 15, -1560198380)),
    (r = Nn(r, i, o, n, t[13], 21, 1309151649)),
    (n = Nn(n, r, i, o, t[4], 6, -145523070)),
    (o = Nn(o, n, r, i, t[11], 10, -1120210379)),
    (i = Nn(i, o, n, r, t[2], 15, 718787259)),
    (r = Nn(r, i, o, n, t[9], 21, -343485551)),
    (e[0] = Qi(n, e[0])),
    (e[1] = Qi(r, e[1])),
    (e[2] = Qi(i, e[2])),
    (e[3] = Qi(o, e[3]))
}
function Rc(e, t, n, r, i, o) {
  return (t = Qi(Qi(t, e), Qi(r, o))), Qi((t << i) | (t >>> (32 - i)), n)
}
function kn(e, t, n, r, i, o, s) {
  return Rc((t & n) | (~t & r), e, t, i, o, s)
}
function An(e, t, n, r, i, o, s) {
  return Rc((t & r) | (n & ~r), e, t, i, o, s)
}
function Ln(e, t, n, r, i, o, s) {
  return Rc(t ^ n ^ r, e, t, i, o, s)
}
function Nn(e, t, n, r, i, o, s) {
  return Rc(n ^ (t | ~r), e, t, i, o, s)
}
function j0(e) {
  var t,
    n = e.length,
    r = [1732584193, -271733879, -1732584194, 271733878]
  for (t = 64; t <= e.length; t += 64) Ju(r, S4(e.substring(t - 64, t)))
  e = e.substring(t - 64)
  var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (t = 0; t < e.length; t++) i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3)
  if (((i[t >> 2] |= 128 << (t % 4 << 3)), t > 55)) for (Ju(r, i), t = 0; t < 16; t++) i[t] = 0
  return (i[14] = 8 * n), Ju(r, i), r
}
function S4(e) {
  var t,
    n = []
  for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24)
  return n
}
;(Pa = st.atob.bind(st)), (Cf = st.btoa.bind(st))
var vp = '0123456789abcdef'.split('')
function k4(e) {
  for (var t = '', n = 0; n < 4; n++) t += vp[(e >> (8 * n + 4)) & 15] + vp[(e >> (8 * n)) & 15]
  return t
}
function A4(e) {
  return String.fromCharCode((255 & e) >> 0, (65280 & e) >> 8, (16711680 & e) >> 16, (4278190080 & e) >> 24)
}
function jf(e) {
  return j0(e).map(A4).join('')
}
var L4 =
  (function (e) {
    for (var t = 0; t < e.length; t++) e[t] = k4(e[t])
    return e.join('')
  })(j0('hello')) != '5d41402abc4b2a76b9719d911017c592'
function Qi(e, t) {
  if (L4) {
    var n = (65535 & e) + (65535 & t)
    return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
  }
  return (e + t) & 4294967295
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */ function If(e, t) {
  var n, r, i, o
  if (e !== n) {
    for (var s = ((i = e), (o = 1 + ((256 / e.length) >> 0)), new Array(o + 1).join(i)), l = [], c = 0; c < 256; c++) l[c] = c
    var f = 0
    for (c = 0; c < 256; c++) {
      var h = l[c]
      ;(f = (f + h + s.charCodeAt(c)) % 256), (l[c] = l[f]), (l[f] = h)
    }
    ;(n = e), (r = l)
  } else l = r
  var g = t.length,
    v = 0,
    p = 0,
    b = ''
  for (c = 0; c < g; c++)
    (p = (p + (h = l[(v = (v + 1) % 256)])) % 256),
      (l[v] = l[p]),
      (l[p] = h),
      (s = l[(l[v] + l[p]) % 256]),
      (b += String.fromCharCode(t.charCodeAt(c) ^ s))
  return b
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */ var bp = { print: 4, modify: 8, copy: 16, 'annot-forms': 32 }
function ps(e, t, n, r) {
  ;(this.v = 1), (this.r = 2)
  var i = 192
  e.forEach(function (l) {
    if (bp.perm !== void 0) throw new Error('Invalid permission: ' + l)
    i += bp[l]
  }),
    (this.padding = '(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz')
  var o = (t + this.padding).substr(0, 32),
    s = (n + this.padding).substr(0, 32)
  ;(this.O = this.processOwnerPassword(o, s)),
    (this.P = -(1 + (255 ^ i))),
    (this.encryptionKey = jf(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5)),
    (this.U = If(this.encryptionKey, this.padding))
}
function gs(e) {
  if (/[^\u0000-\u00ff]/.test(e)) throw new Error('Invalid PDF Name Object: ' + e + ', Only accept ASCII characters.')
  for (var t = '', n = e.length, r = 0; r < n; r++) {
    var i = e.charCodeAt(r)
    i < 33 ||
    i === 35 ||
    i === 37 ||
    i === 40 ||
    i === 41 ||
    i === 47 ||
    i === 60 ||
    i === 62 ||
    i === 91 ||
    i === 93 ||
    i === 123 ||
    i === 125 ||
    i > 126
      ? (t += '#' + ('0' + i.toString(16)).slice(-2))
      : (t += e[r])
  }
  return t
}
function yp(e) {
  if (Et(e) !== 'object') throw new Error('Invalid Context passed to initialize PubSub (jsPDF-module)')
  var t = {}
  ;(this.subscribe = function (n, r, i) {
    if (((i = i || !1), typeof n != 'string' || typeof r != 'function' || typeof i != 'boolean'))
      throw new Error('Invalid arguments passed to PubSub.subscribe (jsPDF-module)')
    t.hasOwnProperty(n) || (t[n] = {})
    var o = Math.random().toString(35)
    return (t[n][o] = [r, !!i]), o
  }),
    (this.unsubscribe = function (n) {
      for (var r in t) if (t[r][n]) return delete t[r][n], Object.keys(t[r]).length === 0 && delete t[r], !0
      return !1
    }),
    (this.publish = function (n) {
      if (t.hasOwnProperty(n)) {
        var r = Array.prototype.slice.call(arguments, 1),
          i = []
        for (var o in t[n]) {
          var s = t[n][o]
          try {
            s[0].apply(e, r)
          } catch (l) {
            st.console && Ot.error('jsPDF PubSub Error', l.message, l)
          }
          s[1] && i.push(o)
        }
        i.length && i.forEach(this.unsubscribe)
      }
    }),
    (this.getTopics = function () {
      return t
    })
}
function $a(e) {
  if (!(this instanceof $a)) return new $a(e)
  var t = 'opacity,stroke-opacity'.split(',')
  for (var n in e) e.hasOwnProperty(n) && t.indexOf(n) >= 0 && (this[n] = e[n])
  ;(this.id = ''), (this.objectNumber = -1)
}
function I0(e, t) {
  ;(this.gState = e), (this.matrix = t), (this.id = ''), (this.objectNumber = -1)
}
function Xi(e, t, n, r, i) {
  if (!(this instanceof Xi)) return new Xi(e, t, n, r, i)
  ;(this.type = e === 'axial' ? 2 : 3), (this.coords = t), (this.colors = n), I0.call(this, r, i)
}
function Lo(e, t, n, r, i) {
  if (!(this instanceof Lo)) return new Lo(e, t, n, r, i)
  ;(this.boundingBox = e), (this.xStep = t), (this.yStep = n), (this.stream = ''), (this.cloneIndex = 0), I0.call(this, r, i)
}
function rt(e) {
  var t,
    n = typeof arguments[0] == 'string' ? arguments[0] : 'p',
    r = arguments[1],
    i = arguments[2],
    o = arguments[3],
    s = [],
    l = 1,
    c = 16,
    f = 'S',
    h = null
  Et((e = e || {})) === 'object' &&
    ((n = e.orientation),
    (r = e.unit || r),
    (i = e.format || i),
    (o = e.compress || e.compressPdf || o),
    (h = e.encryption || null) !== null &&
      ((h.userPassword = h.userPassword || ''), (h.ownerPassword = h.ownerPassword || ''), (h.userPermissions = h.userPermissions || [])),
    (l = typeof e.userUnit == 'number' ? Math.abs(e.userUnit) : 1),
    e.precision !== void 0 && (t = e.precision),
    e.floatPrecision !== void 0 && (c = e.floatPrecision),
    (f = e.defaultPathOperation || 'S')),
    (s = e.filters || (o === !0 ? ['FlateEncode'] : s)),
    (r = r || 'mm'),
    (n = ('' + (n || 'P')).toLowerCase())
  var g = e.putOnlyUsedFonts || !1,
    v = {},
    p = { internal: {}, __private__: {} }
  p.__private__.PubSub = yp
  var b = '1.3',
    w = (p.__private__.getPdfVersion = function () {
      return b
    })
  p.__private__.setPdfVersion = function (d) {
    b = d
  }
  var L = {
    a0: [2383.94, 3370.39],
    a1: [1683.78, 2383.94],
    a2: [1190.55, 1683.78],
    a3: [841.89, 1190.55],
    a4: [595.28, 841.89],
    a5: [419.53, 595.28],
    a6: [297.64, 419.53],
    a7: [209.76, 297.64],
    a8: [147.4, 209.76],
    a9: [104.88, 147.4],
    a10: [73.7, 104.88],
    b0: [2834.65, 4008.19],
    b1: [2004.09, 2834.65],
    b2: [1417.32, 2004.09],
    b3: [1000.63, 1417.32],
    b4: [708.66, 1000.63],
    b5: [498.9, 708.66],
    b6: [354.33, 498.9],
    b7: [249.45, 354.33],
    b8: [175.75, 249.45],
    b9: [124.72, 175.75],
    b10: [87.87, 124.72],
    c0: [2599.37, 3676.54],
    c1: [1836.85, 2599.37],
    c2: [1298.27, 1836.85],
    c3: [918.43, 1298.27],
    c4: [649.13, 918.43],
    c5: [459.21, 649.13],
    c6: [323.15, 459.21],
    c7: [229.61, 323.15],
    c8: [161.57, 229.61],
    c9: [113.39, 161.57],
    c10: [79.37, 113.39],
    dl: [311.81, 623.62],
    letter: [612, 792],
    'government-letter': [576, 756],
    legal: [612, 1008],
    'junior-legal': [576, 360],
    ledger: [1224, 792],
    tabloid: [792, 1224],
    'credit-card': [153, 243]
  }
  p.__private__.getPageFormats = function () {
    return L
  }
  var _ = (p.__private__.getPageFormat = function (d) {
    return L[d]
  })
  i = i || 'a4'
  var x = { COMPAT: 'compat', ADVANCED: 'advanced' },
    k = x.COMPAT
  function C() {
    this.saveGraphicsState(),
      R(new it(qe, 0, 0, -qe, 0, Ni() * qe).toString() + ' cm'),
      this.setFontSize(this.getFontSize() / qe),
      (f = 'n'),
      (k = x.ADVANCED)
  }
  function D() {
    this.restoreGraphicsState(), (f = 'S'), (k = x.COMPAT)
  }
  var U = (p.__private__.combineFontStyleAndFontWeight = function (d, I) {
    if ((d == 'bold' && I == 'normal') || (d == 'bold' && I == 400) || (d == 'normal' && I == 'italic') || (d == 'bold' && I == 'italic'))
      throw new Error('Invalid Combination of fontweight and fontstyle')
    return (
      I &&
        (d =
          I == 400 || I === 'normal'
            ? d === 'italic'
              ? 'italic'
              : 'normal'
            : (I != 700 && I !== 'bold') || d !== 'normal'
              ? (I == 700 ? 'bold' : I) + '' + d
              : 'bold'),
      d
    )
  })
  ;(p.advancedAPI = function (d) {
    var I = k === x.COMPAT
    return I && C.call(this), typeof d != 'function' || (d(this), I && D.call(this)), this
  }),
    (p.compatAPI = function (d) {
      var I = k === x.ADVANCED
      return I && D.call(this), typeof d != 'function' || (d(this), I && C.call(this)), this
    }),
    (p.isAdvancedAPI = function () {
      return k === x.ADVANCED
    })
  var E,
    N = function (d) {
      if (k !== x.ADVANCED) throw new Error(d + " is only available in 'advanced' API mode. You need to call advancedAPI() first.")
    },
    V =
      (p.roundToPrecision =
      p.__private__.roundToPrecision =
        function (d, I) {
          var Z = t || I
          if (isNaN(d) || isNaN(Z)) throw new Error('Invalid argument passed to jsPDF.roundToPrecision')
          return d.toFixed(Z).replace(/0+$/, '')
        })
  E =
    p.hpf =
    p.__private__.hpf =
      typeof c == 'number'
        ? function (d) {
            if (isNaN(d)) throw new Error('Invalid argument passed to jsPDF.hpf')
            return V(d, c)
          }
        : c === 'smart'
          ? function (d) {
              if (isNaN(d)) throw new Error('Invalid argument passed to jsPDF.hpf')
              return V(d, d > -1 && d < 1 ? 16 : 5)
            }
          : function (d) {
              if (isNaN(d)) throw new Error('Invalid argument passed to jsPDF.hpf')
              return V(d, 16)
            }
  var Q =
      (p.f2 =
      p.__private__.f2 =
        function (d) {
          if (isNaN(d)) throw new Error('Invalid argument passed to jsPDF.f2')
          return V(d, 2)
        }),
    P = (p.__private__.f3 = function (d) {
      if (isNaN(d)) throw new Error('Invalid argument passed to jsPDF.f3')
      return V(d, 3)
    }),
    S =
      (p.scale =
      p.__private__.scale =
        function (d) {
          if (isNaN(d)) throw new Error('Invalid argument passed to jsPDF.scale')
          return k === x.COMPAT ? d * qe : k === x.ADVANCED ? d : void 0
        }),
    z = function (d) {
      return k === x.COMPAT ? Ni() - d : k === x.ADVANCED ? d : void 0
    },
    $ = function (d) {
      return S(z(d))
    }
  p.__private__.setPrecision = p.setPrecision = function (d) {
    typeof parseInt(d, 10) == 'number' && (t = parseInt(d, 10))
  }
  var de,
    W = '00000000000000000000000000000000',
    H = (p.__private__.getFileId = function () {
      return W
    }),
    X = (p.__private__.setFileId = function (d) {
      return (
        (W =
          d !== void 0 && /^[a-fA-F0-9]{32}$/.test(d)
            ? d.toUpperCase()
            : W.split('')
                .map(function () {
                  return 'ABCDEF0123456789'.charAt(Math.floor(16 * Math.random()))
                })
                .join('')),
        h !== null && (xn = new ps(h.userPermissions, h.userPassword, h.ownerPassword, W)),
        W
      )
    })
  ;(p.setFileId = function (d) {
    return X(d), this
  }),
    (p.getFileId = function () {
      return H()
    })
  var ne = (p.__private__.convertDateToPDFDate = function (d) {
      var I = d.getTimezoneOffset(),
        Z = I < 0 ? '+' : '-',
        le = Math.floor(Math.abs(I / 60)),
        me = Math.abs(I % 60),
        Ce = [Z, G(le), "'", G(me), "'"].join('')
      return ['D:', d.getFullYear(), G(d.getMonth() + 1), G(d.getDate()), G(d.getHours()), G(d.getMinutes()), G(d.getSeconds()), Ce].join('')
    }),
    fe = (p.__private__.convertPDFDateToDate = function (d) {
      var I = parseInt(d.substr(2, 4), 10),
        Z = parseInt(d.substr(6, 2), 10) - 1,
        le = parseInt(d.substr(8, 2), 10),
        me = parseInt(d.substr(10, 2), 10),
        Ce = parseInt(d.substr(12, 2), 10),
        De = parseInt(d.substr(14, 2), 10)
      return new Date(I, Z, le, me, Ce, De, 0)
    }),
    xe = (p.__private__.setCreationDate = function (d) {
      var I
      if ((d === void 0 && (d = new Date()), d instanceof Date)) I = ne(d)
      else {
        if (
          !/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(
            d
          )
        )
          throw new Error('Invalid argument passed to jsPDF.setCreationDate')
        I = d
      }
      return (de = I)
    }),
    A = (p.__private__.getCreationDate = function (d) {
      var I = de
      return d === 'jsDate' && (I = fe(de)), I
    })
  ;(p.setCreationDate = function (d) {
    return xe(d), this
  }),
    (p.getCreationDate = function (d) {
      return A(d)
    })
  var B,
    G = (p.__private__.padd2 = function (d) {
      return ('0' + parseInt(d)).slice(-2)
    }),
    ee = (p.__private__.padd2Hex = function (d) {
      return ('00' + (d = d.toString())).substr(d.length)
    }),
    re = 0,
    Y = [],
    oe = [],
    se = 0,
    Se = [],
    je = [],
    q = !1,
    K = oe,
    ae = function () {
      ;(re = 0), (se = 0), (oe = []), (Y = []), (Se = []), (ii = nn()), (mr = nn())
    }
  p.__private__.setCustomOutputDestination = function (d) {
    ;(q = !0), (K = d)
  }
  var ie = function (d) {
    q || (K = d)
  }
  p.__private__.resetCustomOutputDestination = function () {
    ;(q = !1), (K = oe)
  }
  var R = (p.__private__.out = function (d) {
      return (d = d.toString()), (se += d.length + 1), K.push(d), K
    }),
    ke = (p.__private__.write = function (d) {
      return R(arguments.length === 1 ? d.toString() : Array.prototype.join.call(arguments, ' '))
    }),
    Le = (p.__private__.getArrayBuffer = function (d) {
      for (var I = d.length, Z = new ArrayBuffer(I), le = new Uint8Array(Z); I--; ) le[I] = d.charCodeAt(I)
      return Z
    }),
    ge = [
      ['Helvetica', 'helvetica', 'normal', 'WinAnsiEncoding'],
      ['Helvetica-Bold', 'helvetica', 'bold', 'WinAnsiEncoding'],
      ['Helvetica-Oblique', 'helvetica', 'italic', 'WinAnsiEncoding'],
      ['Helvetica-BoldOblique', 'helvetica', 'bolditalic', 'WinAnsiEncoding'],
      ['Courier', 'courier', 'normal', 'WinAnsiEncoding'],
      ['Courier-Bold', 'courier', 'bold', 'WinAnsiEncoding'],
      ['Courier-Oblique', 'courier', 'italic', 'WinAnsiEncoding'],
      ['Courier-BoldOblique', 'courier', 'bolditalic', 'WinAnsiEncoding'],
      ['Times-Roman', 'times', 'normal', 'WinAnsiEncoding'],
      ['Times-Bold', 'times', 'bold', 'WinAnsiEncoding'],
      ['Times-Italic', 'times', 'italic', 'WinAnsiEncoding'],
      ['Times-BoldItalic', 'times', 'bolditalic', 'WinAnsiEncoding'],
      ['ZapfDingbats', 'zapfdingbats', 'normal', null],
      ['Symbol', 'symbol', 'normal', null]
    ]
  p.__private__.getStandardFonts = function () {
    return ge
  }
  var we = e.fontSize || 16
  p.__private__.setFontSize = p.setFontSize = function (d) {
    return (we = k === x.ADVANCED ? d / qe : d), this
  }
  var ve,
    Pe =
      (p.__private__.getFontSize =
      p.getFontSize =
        function () {
          return k === x.COMPAT ? we : we * qe
        }),
    Ie = e.R2L || !1
  ;(p.__private__.setR2L = p.setR2L =
    function (d) {
      return (Ie = d), this
    }),
    (p.__private__.getR2L = p.getR2L =
      function () {
        return Ie
      })
  var Me,
    Be = (p.__private__.setZoomMode = function (d) {
      var I = [void 0, null, 'fullwidth', 'fullheight', 'fullpage', 'original']
      if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(d)) ve = d
      else if (isNaN(d)) {
        if (I.indexOf(d) === -1)
          throw new Error(
            'zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + d + '" is not recognized.'
          )
        ve = d
      } else ve = parseInt(d, 10)
    })
  p.__private__.getZoomMode = function () {
    return ve
  }
  var $e,
    Qe = (p.__private__.setPageMode = function (d) {
      if ([void 0, null, 'UseNone', 'UseOutlines', 'UseThumbs', 'FullScreen'].indexOf(d) == -1)
        throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + d + '" is not recognized.')
      Me = d
    })
  p.__private__.getPageMode = function () {
    return Me
  }
  var Ze = (p.__private__.setLayoutMode = function (d) {
    if ([void 0, null, 'continuous', 'single', 'twoleft', 'tworight', 'two'].indexOf(d) == -1)
      throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + d + '" is not recognized.')
    $e = d
  })
  ;(p.__private__.getLayoutMode = function () {
    return $e
  }),
    (p.__private__.setDisplayMode = p.setDisplayMode =
      function (d, I, Z) {
        return Be(d), Ze(I), Qe(Z), this
      })
  var Ge = { title: '', subject: '', author: '', keywords: '', creator: '' }
  ;(p.__private__.getDocumentProperty = function (d) {
    if (Object.keys(Ge).indexOf(d) === -1) throw new Error('Invalid argument passed to jsPDF.getDocumentProperty')
    return Ge[d]
  }),
    (p.__private__.getDocumentProperties = function () {
      return Ge
    }),
    (p.__private__.setDocumentProperties =
      p.setProperties =
      p.setDocumentProperties =
        function (d) {
          for (var I in Ge) Ge.hasOwnProperty(I) && d[I] && (Ge[I] = d[I])
          return this
        }),
    (p.__private__.setDocumentProperty = function (d, I) {
      if (Object.keys(Ge).indexOf(d) === -1) throw new Error('Invalid arguments passed to jsPDF.setDocumentProperty')
      return (Ge[d] = I)
    })
  var ot,
    qe,
    cn,
    gt,
    Rn,
    dt = {},
    vt = {},
    Kn = [],
    Nt = {},
    lo = {},
    $t = {},
    pr = {},
    ri = null,
    Vt = 0,
    lt = [],
    Pt = new yp(p),
    co = e.hotfixes || [],
    bn = {},
    Mr = {},
    Dr = [],
    it = function d(I, Z, le, me, Ce, De) {
      if (!(this instanceof d)) return new d(I, Z, le, me, Ce, De)
      isNaN(I) && (I = 1),
        isNaN(Z) && (Z = 0),
        isNaN(le) && (le = 0),
        isNaN(me) && (me = 1),
        isNaN(Ce) && (Ce = 0),
        isNaN(De) && (De = 0),
        (this._matrix = [I, Z, le, me, Ce, De])
    }
  Object.defineProperty(it.prototype, 'sx', {
    get: function () {
      return this._matrix[0]
    },
    set: function (d) {
      this._matrix[0] = d
    }
  }),
    Object.defineProperty(it.prototype, 'shy', {
      get: function () {
        return this._matrix[1]
      },
      set: function (d) {
        this._matrix[1] = d
      }
    }),
    Object.defineProperty(it.prototype, 'shx', {
      get: function () {
        return this._matrix[2]
      },
      set: function (d) {
        this._matrix[2] = d
      }
    }),
    Object.defineProperty(it.prototype, 'sy', {
      get: function () {
        return this._matrix[3]
      },
      set: function (d) {
        this._matrix[3] = d
      }
    }),
    Object.defineProperty(it.prototype, 'tx', {
      get: function () {
        return this._matrix[4]
      },
      set: function (d) {
        this._matrix[4] = d
      }
    }),
    Object.defineProperty(it.prototype, 'ty', {
      get: function () {
        return this._matrix[5]
      },
      set: function (d) {
        this._matrix[5] = d
      }
    }),
    Object.defineProperty(it.prototype, 'a', {
      get: function () {
        return this._matrix[0]
      },
      set: function (d) {
        this._matrix[0] = d
      }
    }),
    Object.defineProperty(it.prototype, 'b', {
      get: function () {
        return this._matrix[1]
      },
      set: function (d) {
        this._matrix[1] = d
      }
    }),
    Object.defineProperty(it.prototype, 'c', {
      get: function () {
        return this._matrix[2]
      },
      set: function (d) {
        this._matrix[2] = d
      }
    }),
    Object.defineProperty(it.prototype, 'd', {
      get: function () {
        return this._matrix[3]
      },
      set: function (d) {
        this._matrix[3] = d
      }
    }),
    Object.defineProperty(it.prototype, 'e', {
      get: function () {
        return this._matrix[4]
      },
      set: function (d) {
        this._matrix[4] = d
      }
    }),
    Object.defineProperty(it.prototype, 'f', {
      get: function () {
        return this._matrix[5]
      },
      set: function (d) {
        this._matrix[5] = d
      }
    }),
    Object.defineProperty(it.prototype, 'rotation', {
      get: function () {
        return Math.atan2(this.shx, this.sx)
      }
    }),
    Object.defineProperty(it.prototype, 'scaleX', {
      get: function () {
        return this.decompose().scale.sx
      }
    }),
    Object.defineProperty(it.prototype, 'scaleY', {
      get: function () {
        return this.decompose().scale.sy
      }
    }),
    Object.defineProperty(it.prototype, 'isIdentity', {
      get: function () {
        return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0
      }
    }),
    (it.prototype.join = function (d) {
      return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(E).join(d)
    }),
    (it.prototype.multiply = function (d) {
      var I = d.sx * this.sx + d.shy * this.shx,
        Z = d.sx * this.shy + d.shy * this.sy,
        le = d.shx * this.sx + d.sy * this.shx,
        me = d.shx * this.shy + d.sy * this.sy,
        Ce = d.tx * this.sx + d.ty * this.shx + this.tx,
        De = d.tx * this.shy + d.ty * this.sy + this.ty
      return new it(I, Z, le, me, Ce, De)
    }),
    (it.prototype.decompose = function () {
      var d = this.sx,
        I = this.shy,
        Z = this.shx,
        le = this.sy,
        me = this.tx,
        Ce = this.ty,
        De = Math.sqrt(d * d + I * I),
        Ve = (d /= De) * Z + (I /= De) * le
      ;(Z -= d * Ve), (le -= I * Ve)
      var et = Math.sqrt(Z * Z + le * le)
      return (
        (Ve /= et),
        d * (le /= et) < I * (Z /= et) && ((d = -d), (I = -I), (Ve = -Ve), (De = -De)),
        { scale: new it(De, 0, 0, et, 0, 0), translate: new it(1, 0, 0, 1, me, Ce), rotate: new it(d, I, -I, d, 0, 0), skew: new it(1, 0, Ve, 1, 0, 0) }
      )
    }),
    (it.prototype.toString = function (d) {
      return this.join(' ')
    }),
    (it.prototype.inversed = function () {
      var d = this.sx,
        I = this.shy,
        Z = this.shx,
        le = this.sy,
        me = this.tx,
        Ce = this.ty,
        De = 1 / (d * le - I * Z),
        Ve = le * De,
        et = -I * De,
        ut = -Z * De,
        pt = d * De
      return new it(Ve, et, ut, pt, -Ve * me - ut * Ce, -et * me - pt * Ce)
    }),
    (it.prototype.applyToPoint = function (d) {
      var I = d.x * this.sx + d.y * this.shx + this.tx,
        Z = d.x * this.shy + d.y * this.sy + this.ty
      return new Ko(I, Z)
    }),
    (it.prototype.applyToRectangle = function (d) {
      var I = this.applyToPoint(d),
        Z = this.applyToPoint(new Ko(d.x + d.w, d.y + d.h))
      return new Ys(I.x, I.y, Z.x - I.x, Z.y - I.y)
    }),
    (it.prototype.clone = function () {
      var d = this.sx,
        I = this.shy,
        Z = this.shx,
        le = this.sy,
        me = this.tx,
        Ce = this.ty
      return new it(d, I, Z, le, me, Ce)
    }),
    (p.Matrix = it)
  var gr = (p.matrixMult = function (d, I) {
      return I.multiply(d)
    }),
    Br = new it(1, 0, 0, 1, 0, 0)
  p.unitMatrix = p.identityMatrix = Br
  var Mn = function (d, I) {
    if (!lo[d]) {
      var Z = (I instanceof Xi ? 'Sh' : 'P') + (Object.keys(Nt).length + 1).toString(10)
      ;(I.id = Z), (lo[d] = Z), (Nt[Z] = I), Pt.publish('addPattern', I)
    }
  }
  ;(p.ShadingPattern = Xi),
    (p.TilingPattern = Lo),
    (p.addShadingPattern = function (d, I) {
      return N('addShadingPattern()'), Mn(d, I), this
    }),
    (p.beginTilingPattern = function (d) {
      N('beginTilingPattern()'),
        hl(d.boundingBox[0], d.boundingBox[1], d.boundingBox[2] - d.boundingBox[0], d.boundingBox[3] - d.boundingBox[1], d.matrix)
    }),
    (p.endTilingPattern = function (d, I) {
      N('endTilingPattern()'),
        (I.stream = je[B].join(`
`)),
        Mn(d, I),
        Pt.publish('endTilingPattern', I),
        Dr.pop().restore()
    })
  var un = (p.__private__.newObject = function () {
      var d = nn()
      return Jn(d, !0), d
    }),
    nn = (p.__private__.newObjectDeferred = function () {
      return (
        re++,
        (Y[re] = function () {
          return se
        }),
        re
      )
    }),
    Jn = function (d, I) {
      return (I = typeof I == 'boolean' && I), (Y[d] = se), I && R(d + ' 0 obj'), d
    },
    Oo = (p.__private__.newAdditionalObject = function () {
      var d = { objId: nn(), content: '' }
      return Se.push(d), d
    }),
    ii = nn(),
    mr = nn(),
    vr = (p.__private__.decodeColorString = function (d) {
      var I = d.split(' ')
      if (I.length !== 2 || (I[1] !== 'g' && I[1] !== 'G'))
        I.length === 5 && (I[4] === 'k' || I[4] === 'K') && (I = [(1 - I[0]) * (1 - I[3]), (1 - I[1]) * (1 - I[3]), (1 - I[2]) * (1 - I[3]), 'r'])
      else {
        var Z = parseFloat(I[0])
        I = [Z, Z, Z, 'r']
      }
      for (var le = '#', me = 0; me < 3; me++) le += ('0' + Math.floor(255 * parseFloat(I[me])).toString(16)).slice(-2)
      return le
    }),
    br = (p.__private__.encodeColorString = function (d) {
      var I
      typeof d == 'string' && (d = { ch1: d })
      var Z = d.ch1,
        le = d.ch2,
        me = d.ch3,
        Ce = d.ch4,
        De = d.pdfColorType === 'draw' ? ['G', 'RG', 'K'] : ['g', 'rg', 'k']
      if (typeof Z == 'string' && Z.charAt(0) !== '#') {
        var Ve = new C0(Z)
        if (Ve.ok) Z = Ve.toHex()
        else if (!/^\d*\.?\d*$/.test(Z)) throw new Error('Invalid color "' + Z + '" passed to jsPDF.encodeColorString.')
      }
      if (
        (typeof Z == 'string' && /^#[0-9A-Fa-f]{3}$/.test(Z) && (Z = '#' + Z[1] + Z[1] + Z[2] + Z[2] + Z[3] + Z[3]),
        typeof Z == 'string' && /^#[0-9A-Fa-f]{6}$/.test(Z))
      ) {
        var et = parseInt(Z.substr(1), 16)
        ;(Z = (et >> 16) & 255), (le = (et >> 8) & 255), (me = 255 & et)
      }
      if (le === void 0 || (Ce === void 0 && Z === le && le === me))
        if (typeof Z == 'string') I = Z + ' ' + De[0]
        else
          switch (d.precision) {
            case 2:
              I = Q(Z / 255) + ' ' + De[0]
              break
            case 3:
            default:
              I = P(Z / 255) + ' ' + De[0]
          }
      else if (Ce === void 0 || Et(Ce) === 'object') {
        if (Ce && !isNaN(Ce.a) && Ce.a === 0) return (I = ['1.', '1.', '1.', De[1]].join(' '))
        if (typeof Z == 'string') I = [Z, le, me, De[1]].join(' ')
        else
          switch (d.precision) {
            case 2:
              I = [Q(Z / 255), Q(le / 255), Q(me / 255), De[1]].join(' ')
              break
            default:
            case 3:
              I = [P(Z / 255), P(le / 255), P(me / 255), De[1]].join(' ')
          }
      } else if (typeof Z == 'string') I = [Z, le, me, Ce, De[2]].join(' ')
      else
        switch (d.precision) {
          case 2:
            I = [Q(Z), Q(le), Q(me), Q(Ce), De[2]].join(' ')
            break
          case 3:
          default:
            I = [P(Z), P(le), P(me), P(Ce), De[2]].join(' ')
        }
      return I
    }),
    qr = (p.__private__.getFilters = function () {
      return s
    }),
    tr = (p.__private__.putStream = function (d) {
      var I = (d = d || {}).data || '',
        Z = d.filters || qr(),
        le = d.alreadyAppliedFilters || [],
        me = d.addLength1 || !1,
        Ce = I.length,
        De = d.objectId,
        Ve = function (Sn) {
          return Sn
        }
      if (h !== null && De === void 0) throw new Error('ObjectId must be passed to putStream for file encryption')
      h !== null && (Ve = xn.encryptor(De, 0))
      var et = {}
      Z === !0 && (Z = ['FlateEncode'])
      var ut = d.additionalKeyValues || [],
        pt =
          (et = rt.API.processDataByFilters !== void 0 ? rt.API.processDataByFilters(I, Z) : { data: I, reverseChain: [] }).reverseChain +
          (Array.isArray(le) ? le.join(' ') : le.toString())
      if (
        (et.data.length !== 0 && (ut.push({ key: 'Length', value: et.data.length }), me === !0 && ut.push({ key: 'Length1', value: Ce })),
        pt.length != 0)
      )
        if (pt.split('/').length - 1 == 1) ut.push({ key: 'Filter', value: pt })
        else {
          ut.push({ key: 'Filter', value: '[' + pt + ']' })
          for (var yt = 0; yt < ut.length; yt += 1)
            if (ut[yt].key === 'DecodeParms') {
              for (var Ut = [], Wt = 0; Wt < et.reverseChain.split('/').length - 1; Wt += 1) Ut.push('null')
              Ut.push(ut[yt].value), (ut[yt].value = '[' + Ut.join(' ') + ']')
            }
        }
      R('<<')
      for (var rn = 0; rn < ut.length; rn++) R('/' + ut[rn].key + ' ' + ut[rn].value)
      R('>>'), et.data.length !== 0 && (R('stream'), R(Ve(et.data)), R('endstream'))
    }),
    zr = (p.__private__.putPage = function (d) {
      var I = d.number,
        Z = d.data,
        le = d.objId,
        me = d.contentsObjId
      Jn(le, !0),
        R('<</Type /Page'),
        R('/Parent ' + d.rootDictionaryObjId + ' 0 R'),
        R('/Resources ' + d.resourceDictionaryObjId + ' 0 R'),
        R(
          '/MediaBox [' +
            parseFloat(E(d.mediaBox.bottomLeftX)) +
            ' ' +
            parseFloat(E(d.mediaBox.bottomLeftY)) +
            ' ' +
            E(d.mediaBox.topRightX) +
            ' ' +
            E(d.mediaBox.topRightY) +
            ']'
        ),
        d.cropBox !== null &&
          R(
            '/CropBox [' + E(d.cropBox.bottomLeftX) + ' ' + E(d.cropBox.bottomLeftY) + ' ' + E(d.cropBox.topRightX) + ' ' + E(d.cropBox.topRightY) + ']'
          ),
        d.bleedBox !== null &&
          R(
            '/BleedBox [' +
              E(d.bleedBox.bottomLeftX) +
              ' ' +
              E(d.bleedBox.bottomLeftY) +
              ' ' +
              E(d.bleedBox.topRightX) +
              ' ' +
              E(d.bleedBox.topRightY) +
              ']'
          ),
        d.trimBox !== null &&
          R(
            '/TrimBox [' + E(d.trimBox.bottomLeftX) + ' ' + E(d.trimBox.bottomLeftY) + ' ' + E(d.trimBox.topRightX) + ' ' + E(d.trimBox.topRightY) + ']'
          ),
        d.artBox !== null &&
          R('/ArtBox [' + E(d.artBox.bottomLeftX) + ' ' + E(d.artBox.bottomLeftY) + ' ' + E(d.artBox.topRightX) + ' ' + E(d.artBox.topRightY) + ']'),
        typeof d.userUnit == 'number' && d.userUnit !== 1 && R('/UserUnit ' + d.userUnit),
        Pt.publish('putPage', { objId: le, pageContext: lt[I], pageNumber: I, page: Z }),
        R('/Contents ' + me + ' 0 R'),
        R('>>'),
        R('endobj')
      var Ce = Z.join(`
`)
      return (
        k === x.ADVANCED &&
          (Ce += `
Q`),
        Jn(me, !0),
        tr({ data: Ce, filters: qr(), objectId: me }),
        R('endobj'),
        le
      )
    }),
    uo = (p.__private__.putPages = function () {
      var d,
        I,
        Z = []
      for (d = 1; d <= Vt; d++) (lt[d].objId = nn()), (lt[d].contentsObjId = nn())
      for (d = 1; d <= Vt; d++)
        Z.push(
          zr({
            number: d,
            data: je[d],
            objId: lt[d].objId,
            contentsObjId: lt[d].contentsObjId,
            mediaBox: lt[d].mediaBox,
            cropBox: lt[d].cropBox,
            bleedBox: lt[d].bleedBox,
            trimBox: lt[d].trimBox,
            artBox: lt[d].artBox,
            userUnit: lt[d].userUnit,
            rootDictionaryObjId: ii,
            resourceDictionaryObjId: mr
          })
        )
      Jn(ii, !0), R('<</Type /Pages')
      var le = '/Kids ['
      for (I = 0; I < Vt; I++) le += Z[I] + ' 0 R '
      R(le + ']'), R('/Count ' + Vt), R('>>'), R('endobj'), Pt.publish('postPutPages')
    }),
    Ro = function (d) {
      Pt.publish('putFont', { font: d, out: R, newObject: un, putStream: tr }),
        d.isAlreadyPutted !== !0 &&
          ((d.objectNumber = un()),
          R('<<'),
          R('/Type /Font'),
          R('/BaseFont /' + gs(d.postScriptName)),
          R('/Subtype /Type1'),
          typeof d.encoding == 'string' && R('/Encoding /' + d.encoding),
          R('/FirstChar 32'),
          R('/LastChar 255'),
          R('>>'),
          R('endobj'))
    },
    Mo = function () {
      for (var d in dt) dt.hasOwnProperty(d) && (g === !1 || (g === !0 && v.hasOwnProperty(d))) && Ro(dt[d])
    },
    Do = function (d) {
      d.objectNumber = un()
      var I = []
      I.push({ key: 'Type', value: '/XObject' }),
        I.push({ key: 'Subtype', value: '/Form' }),
        I.push({ key: 'BBox', value: '[' + [E(d.x), E(d.y), E(d.x + d.width), E(d.y + d.height)].join(' ') + ']' }),
        I.push({ key: 'Matrix', value: '[' + d.matrix.toString() + ']' })
      var Z = d.pages[1].join(`
`)
      tr({ data: Z, additionalKeyValues: I, objectId: d.objectNumber }), R('endobj')
    },
    Bo = function () {
      for (var d in bn) bn.hasOwnProperty(d) && Do(bn[d])
    },
    Ka = function (d, I) {
      var Z,
        le = [],
        me = 1 / (I - 1)
      for (Z = 0; Z < 1; Z += me) le.push(Z)
      if ((le.push(1), d[0].offset != 0)) {
        var Ce = { offset: 0, color: d[0].color }
        d.unshift(Ce)
      }
      if (d[d.length - 1].offset != 1) {
        var De = { offset: 1, color: d[d.length - 1].color }
        d.push(De)
      }
      for (var Ve = '', et = 0, ut = 0; ut < le.length; ut++) {
        for (Z = le[ut]; Z > d[et + 1].offset; ) et++
        var pt = d[et].offset,
          yt = (Z - pt) / (d[et + 1].offset - pt),
          Ut = d[et].color,
          Wt = d[et + 1].color
        Ve +=
          ee(Math.round((1 - yt) * Ut[0] + yt * Wt[0]).toString(16)) +
          ee(Math.round((1 - yt) * Ut[1] + yt * Wt[1]).toString(16)) +
          ee(Math.round((1 - yt) * Ut[2] + yt * Wt[2]).toString(16))
      }
      return Ve.trim()
    },
    Mc = function (d, I) {
      I || (I = 21)
      var Z = un(),
        le = Ka(d.colors, I),
        me = []
      me.push({ key: 'FunctionType', value: '0' }),
        me.push({ key: 'Domain', value: '[0.0 1.0]' }),
        me.push({ key: 'Size', value: '[' + I + ']' }),
        me.push({ key: 'BitsPerSample', value: '8' }),
        me.push({ key: 'Range', value: '[0.0 1.0 0.0 1.0 0.0 1.0]' }),
        me.push({ key: 'Decode', value: '[0.0 1.0 0.0 1.0 0.0 1.0]' }),
        tr({ data: le, additionalKeyValues: me, alreadyAppliedFilters: ['/ASCIIHexDecode'], objectId: Z }),
        R('endobj'),
        (d.objectNumber = un()),
        R('<< /ShadingType ' + d.type),
        R('/ColorSpace /DeviceRGB')
      var Ce = '/Coords [' + E(parseFloat(d.coords[0])) + ' ' + E(parseFloat(d.coords[1])) + ' '
      d.type === 2
        ? (Ce += E(parseFloat(d.coords[2])) + ' ' + E(parseFloat(d.coords[3])))
        : (Ce += E(parseFloat(d.coords[2])) + ' ' + E(parseFloat(d.coords[3])) + ' ' + E(parseFloat(d.coords[4])) + ' ' + E(parseFloat(d.coords[5]))),
        R((Ce += ']')),
        d.matrix && R('/Matrix [' + d.matrix.toString() + ']'),
        R('/Function ' + Z + ' 0 R'),
        R('/Extend [true true]'),
        R('>>'),
        R('endobj')
    },
    Dc = function (d, I) {
      var Z = nn(),
        le = un()
      I.push({ resourcesOid: Z, objectOid: le }), (d.objectNumber = le)
      var me = []
      me.push({ key: 'Type', value: '/Pattern' }),
        me.push({ key: 'PatternType', value: '1' }),
        me.push({ key: 'PaintType', value: '1' }),
        me.push({ key: 'TilingType', value: '1' }),
        me.push({ key: 'BBox', value: '[' + d.boundingBox.map(E).join(' ') + ']' }),
        me.push({ key: 'XStep', value: E(d.xStep) }),
        me.push({ key: 'YStep', value: E(d.yStep) }),
        me.push({ key: 'Resources', value: Z + ' 0 R' }),
        d.matrix && me.push({ key: 'Matrix', value: '[' + d.matrix.toString() + ']' }),
        tr({ data: d.stream, additionalKeyValues: me, objectId: d.objectNumber }),
        R('endobj')
    },
    qo = function (d) {
      var I
      for (I in Nt) Nt.hasOwnProperty(I) && (Nt[I] instanceof Xi ? Mc(Nt[I]) : Nt[I] instanceof Lo && Dc(Nt[I], d))
    },
    Ja = function (d) {
      for (var I in ((d.objectNumber = un()), R('<<'), d))
        switch (I) {
          case 'opacity':
            R('/ca ' + Q(d[I]))
            break
          case 'stroke-opacity':
            R('/CA ' + Q(d[I]))
        }
      R('>>'), R('endobj')
    },
    Bc = function () {
      var d
      for (d in $t) $t.hasOwnProperty(d) && Ja($t[d])
    },
    qs = function () {
      for (var d in (R('/XObject <<'), bn)) bn.hasOwnProperty(d) && bn[d].objectNumber >= 0 && R('/' + d + ' ' + bn[d].objectNumber + ' 0 R')
      Pt.publish('putXobjectDict'), R('>>')
    },
    qc = function () {
      ;(xn.oid = un()),
        R('<<'),
        R('/Filter /Standard'),
        R('/V ' + xn.v),
        R('/R ' + xn.r),
        R('/U <' + xn.toHexString(xn.U) + '>'),
        R('/O <' + xn.toHexString(xn.O) + '>'),
        R('/P ' + xn.P),
        R('>>'),
        R('endobj')
    },
    Ya = function () {
      for (var d in (R('/Font <<'), dt))
        dt.hasOwnProperty(d) && (g === !1 || (g === !0 && v.hasOwnProperty(d))) && R('/' + d + ' ' + dt[d].objectNumber + ' 0 R')
      R('>>')
    },
    zc = function () {
      if (Object.keys(Nt).length > 0) {
        for (var d in (R('/Shading <<'), Nt))
          Nt.hasOwnProperty(d) && Nt[d] instanceof Xi && Nt[d].objectNumber >= 0 && R('/' + d + ' ' + Nt[d].objectNumber + ' 0 R')
        Pt.publish('putShadingPatternDict'), R('>>')
      }
    },
    zo = function (d) {
      if (Object.keys(Nt).length > 0) {
        for (var I in (R('/Pattern <<'), Nt))
          Nt.hasOwnProperty(I) &&
            Nt[I] instanceof p.TilingPattern &&
            Nt[I].objectNumber >= 0 &&
            Nt[I].objectNumber < d &&
            R('/' + I + ' ' + Nt[I].objectNumber + ' 0 R')
        Pt.publish('putTilingPatternDict'), R('>>')
      }
    },
    Uc = function () {
      if (Object.keys($t).length > 0) {
        var d
        for (d in (R('/ExtGState <<'), $t)) $t.hasOwnProperty(d) && $t[d].objectNumber >= 0 && R('/' + d + ' ' + $t[d].objectNumber + ' 0 R')
        Pt.publish('putGStateDict'), R('>>')
      }
    },
    Xt = function (d) {
      Jn(d.resourcesOid, !0), R('<<'), R('/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]'), Ya(), zc(), zo(d.objectOid), Uc(), qs(), R('>>'), R('endobj')
    },
    Xa = function () {
      var d = []
      Mo(),
        Bc(),
        Bo(),
        qo(d),
        Pt.publish('putResources'),
        d.forEach(Xt),
        Xt({ resourcesOid: mr, objectOid: Number.MAX_SAFE_INTEGER }),
        Pt.publish('postPutResources')
    },
    Qa = function () {
      Pt.publish('putAdditionalObjects')
      for (var d = 0; d < Se.length; d++) {
        var I = Se[d]
        Jn(I.objId, !0), R(I.content), R('endobj')
      }
      Pt.publish('postPutAdditionalObjects')
    },
    Za = function (d) {
      ;(vt[d.fontName] = vt[d.fontName] || {}), (vt[d.fontName][d.fontStyle] = d.id)
    },
    zs = function (d, I, Z, le, me) {
      var Ce = {
        id: 'F' + (Object.keys(dt).length + 1).toString(10),
        postScriptName: d,
        fontName: I,
        fontStyle: Z,
        encoding: le,
        isStandardFont: me || !1,
        metadata: {}
      }
      return Pt.publish('addFont', { font: Ce, instance: this }), (dt[Ce.id] = Ce), Za(Ce), Ce.id
    },
    Hc = function (d) {
      for (var I = 0, Z = ge.length; I < Z; I++) {
        var le = zs.call(this, d[I][0], d[I][1], d[I][2], ge[I][3], !0)
        g === !1 && (v[le] = !0)
        var me = d[I][0].split('-')
        Za({ id: le, fontName: me[0], fontStyle: me[1] || '' })
      }
      Pt.publish('addFonts', { fonts: dt, dictionary: vt })
    },
    yr = function (d) {
      return (
        (d.foo = function () {
          try {
            return d.apply(this, arguments)
          } catch (le) {
            var I = le.stack || ''
            ~I.indexOf(' at ') && (I = I.split(' at ')[1])
            var Z =
              'Error in function ' +
              I.split(
                `
`
              )[0].split('<')[0] +
              ': ' +
              le.message
            if (!st.console) throw new Error(Z)
            st.console.error(Z, le), st.alert && alert(Z)
          }
        }),
        (d.foo.bar = d),
        d.foo
      )
    },
    Uo = function (d, I) {
      var Z, le, me, Ce, De, Ve, et, ut, pt
      if (
        ((me = (I = I || {}).sourceEncoding || 'Unicode'),
        (De = I.outputEncoding),
        (I.autoencode || De) &&
          dt[ot].metadata &&
          dt[ot].metadata[me] &&
          dt[ot].metadata[me].encoding &&
          ((Ce = dt[ot].metadata[me].encoding),
          !De && dt[ot].encoding && (De = dt[ot].encoding),
          !De && Ce.codePages && (De = Ce.codePages[0]),
          typeof De == 'string' && (De = Ce[De]),
          De))
      ) {
        for (et = !1, Ve = [], Z = 0, le = d.length; Z < le; Z++)
          (ut = De[d.charCodeAt(Z)]) ? Ve.push(String.fromCharCode(ut)) : Ve.push(d[Z]), Ve[Z].charCodeAt(0) >> 8 && (et = !0)
        d = Ve.join('')
      }
      for (Z = d.length; et === void 0 && Z !== 0; ) d.charCodeAt(Z - 1) >> 8 && (et = !0), Z--
      if (!et) return d
      for (Ve = I.noBOM ? [] : [254, 255], Z = 0, le = d.length; Z < le; Z++) {
        if ((pt = (ut = d.charCodeAt(Z)) >> 8) >> 8)
          throw new Error('Character at position ' + Z + " of string '" + d + "' exceeds 16bits. Cannot be encoded into UCS-2 BE")
        Ve.push(pt), Ve.push(ut - (pt << 8))
      }
      return String.fromCharCode.apply(void 0, Ve)
    },
    Dn =
      (p.__private__.pdfEscape =
      p.pdfEscape =
        function (d, I) {
          return Uo(d, I).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
        }),
    Us = (p.__private__.beginPage = function (d) {
      ;(je[++Vt] = []),
        (lt[Vt] = {
          objId: 0,
          contentsObjId: 0,
          userUnit: Number(l),
          artBox: null,
          bleedBox: null,
          cropBox: null,
          trimBox: null,
          mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(d[0]), topRightY: Number(d[1]) }
        }),
        tl(Vt),
        ie(je[B])
    }),
    el = function (d, I) {
      var Z, le, me
      switch (
        ((n = I || n),
        typeof d == 'string' && ((Z = _(d.toLowerCase())), Array.isArray(Z) && ((le = Z[0]), (me = Z[1]))),
        Array.isArray(d) && ((le = d[0] * qe), (me = d[1] * qe)),
        isNaN(le) && ((le = i[0]), (me = i[1])),
        (le > 14400 || me > 14400) &&
          (Ot.warn('A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400'),
          (le = Math.min(14400, le)),
          (me = Math.min(14400, me))),
        (i = [le, me]),
        n.substr(0, 1))
      ) {
        case 'l':
          me > le && (i = [me, le])
          break
        case 'p':
          le > me && (i = [me, le])
      }
      Us(i), al(Ws), R(wr), Ks !== 0 && R(Ks + ' J'), Js !== 0 && R(Js + ' j'), Pt.publish('addPage', { pageNumber: Vt })
    },
    $c = function (d) {
      d > 0 && d <= Vt && (je.splice(d, 1), lt.splice(d, 1), Vt--, B > Vt && (B = Vt), this.setPage(B))
    },
    tl = function (d) {
      d > 0 && d <= Vt && (B = d)
    },
    Vc =
      (p.__private__.getNumberOfPages =
      p.getNumberOfPages =
        function () {
          return je.length - 1
        }),
    nl = function (d, I, Z) {
      var le,
        me = void 0
      return (
        (Z = Z || {}),
        (d = d !== void 0 ? d : dt[ot].fontName),
        (I = I !== void 0 ? I : dt[ot].fontStyle),
        (le = d.toLowerCase()),
        vt[le] !== void 0 && vt[le][I] !== void 0
          ? (me = vt[le][I])
          : vt[d] !== void 0 && vt[d][I] !== void 0
            ? (me = vt[d][I])
            : Z.disableWarning === !1 &&
              Ot.warn("Unable to look up font label for font '" + d + "', '" + I + "'. Refer to getFontList() for available fonts."),
        me || Z.noFallback || ((me = vt.times[I]) == null && (me = vt.times.normal)),
        me
      )
    },
    Wc = (p.__private__.putInfo = function () {
      var d = un(),
        I = function (le) {
          return le
        }
      for (var Z in (h !== null && (I = xn.encryptor(d, 0)), R('<<'), R('/Producer (' + Dn(I('jsPDF ' + rt.version)) + ')'), Ge))
        Ge.hasOwnProperty(Z) && Ge[Z] && R('/' + Z.substr(0, 1).toUpperCase() + Z.substr(1) + ' (' + Dn(I(Ge[Z])) + ')')
      R('/CreationDate (' + Dn(I(de)) + ')'), R('>>'), R('endobj')
    }),
    Hs = (p.__private__.putCatalog = function (d) {
      var I = (d = d || {}).rootDictionaryObjId || ii
      switch ((un(), R('<<'), R('/Type /Catalog'), R('/Pages ' + I + ' 0 R'), ve || (ve = 'fullwidth'), ve)) {
        case 'fullwidth':
          R('/OpenAction [3 0 R /FitH null]')
          break
        case 'fullheight':
          R('/OpenAction [3 0 R /FitV null]')
          break
        case 'fullpage':
          R('/OpenAction [3 0 R /Fit]')
          break
        case 'original':
          R('/OpenAction [3 0 R /XYZ null null 1]')
          break
        default:
          var Z = '' + ve
          Z.substr(Z.length - 1) === '%' && (ve = parseInt(ve) / 100), typeof ve == 'number' && R('/OpenAction [3 0 R /XYZ null null ' + Q(ve) + ']')
      }
      switch (($e || ($e = 'continuous'), $e)) {
        case 'continuous':
          R('/PageLayout /OneColumn')
          break
        case 'single':
          R('/PageLayout /SinglePage')
          break
        case 'two':
        case 'twoleft':
          R('/PageLayout /TwoColumnLeft')
          break
        case 'tworight':
          R('/PageLayout /TwoColumnRight')
      }
      Me && R('/PageMode /' + Me), Pt.publish('putCatalog'), R('>>'), R('endobj')
    }),
    Gc = (p.__private__.putTrailer = function () {
      R('trailer'),
        R('<<'),
        R('/Size ' + (re + 1)),
        R('/Root ' + re + ' 0 R'),
        R('/Info ' + (re - 1) + ' 0 R'),
        h !== null && R('/Encrypt ' + xn.oid + ' 0 R'),
        R('/ID [ <' + W + '> <' + W + '> ]'),
        R('>>')
    }),
    Kc = (p.__private__.putHeader = function () {
      R('%PDF-' + b), R('%ºß¬à')
    }),
    Jc = (p.__private__.putXRef = function () {
      var d = '0000000000'
      R('xref'), R('0 ' + (re + 1)), R('0000000000 65535 f ')
      for (var I = 1; I <= re; I++)
        typeof Y[I] == 'function'
          ? R((d + Y[I]()).slice(-10) + ' 00000 n ')
          : Y[I] !== void 0
            ? R((d + Y[I]).slice(-10) + ' 00000 n ')
            : R('0000000000 00000 n ')
    }),
    oi = (p.__private__.buildDocument = function () {
      ae(), ie(oe), Pt.publish('buildDocument'), Kc(), uo(), Qa(), Xa(), h !== null && qc(), Wc(), Hs()
      var d = se
      return (
        Jc(),
        Gc(),
        R('startxref'),
        R('' + d),
        R('%%EOF'),
        ie(je[B]),
        oe.join(`
`)
      )
    }),
    Ho = (p.__private__.getBlob = function (d) {
      return new Blob([Le(d)], { type: 'application/pdf' })
    }),
    $o =
      (p.output =
      p.__private__.output =
        yr(function (d, I) {
          switch ((typeof (I = I || {}) == 'string' ? (I = { filename: I }) : (I.filename = I.filename || 'generated.pdf'), d)) {
            case void 0:
              return oi()
            case 'save':
              p.save(I.filename)
              break
            case 'arraybuffer':
              return Le(oi())
            case 'blob':
              return Ho(oi())
            case 'bloburi':
            case 'bloburl':
              if (st.URL !== void 0 && typeof st.URL.createObjectURL == 'function') return (st.URL && st.URL.createObjectURL(Ho(oi()))) || void 0
              Ot.warn('bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.')
              break
            case 'datauristring':
            case 'dataurlstring':
              var Z = '',
                le = oi()
              try {
                Z = Cf(le)
              } catch {
                Z = Cf(unescape(encodeURIComponent(le)))
              }
              return 'data:application/pdf;filename=' + I.filename + ';base64,' + Z
            case 'pdfobjectnewwindow':
              if (Object.prototype.toString.call(st) === '[object Window]') {
                var me = 'https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js',
                  Ce =
                    ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"'
                I.pdfObjectUrl && ((me = I.pdfObjectUrl), (Ce = ''))
                var De =
                    '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' +
                    me +
                    '"' +
                    Ce +
                    '></script><script >PDFObject.embed("' +
                    this.output('dataurlstring') +
                    '", ' +
                    JSON.stringify(I) +
                    ');</script></body></html>',
                  Ve = st.open()
                return Ve !== null && Ve.document.write(De), Ve
              }
              throw new Error('The option pdfobjectnewwindow just works in a browser-environment.')
            case 'pdfjsnewwindow':
              if (Object.prototype.toString.call(st) === '[object Window]') {
                var et =
                    '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' +
                    (I.pdfJsUrl || 'examples/PDF.js/web/viewer.html') +
                    '?file=&downloadName=' +
                    I.filename +
                    '" width="500px" height="400px" /></body></html>',
                  ut = st.open()
                if (ut !== null) {
                  ut.document.write(et)
                  var pt = this
                  ut.document.documentElement.querySelector('#pdfViewer').onload = function () {
                    ;(ut.document.title = I.filename),
                      ut.document.documentElement.querySelector('#pdfViewer').contentWindow.PDFViewerApplication.open(pt.output('bloburl'))
                  }
                }
                return ut
              }
              throw new Error('The option pdfjsnewwindow just works in a browser-environment.')
            case 'dataurlnewwindow':
              if (Object.prototype.toString.call(st) !== '[object Window]')
                throw new Error('The option dataurlnewwindow just works in a browser-environment.')
              var yt =
                  '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' +
                  this.output('datauristring', I) +
                  '"></iframe></body></html>',
                Ut = st.open()
              if ((Ut !== null && (Ut.document.write(yt), (Ut.document.title = I.filename)), Ut || typeof safari > 'u')) return Ut
              break
            case 'datauri':
            case 'dataurl':
              return (st.document.location.href = this.output('datauristring', I))
            default:
              return null
          }
        })),
    rl = function (d) {
      return Array.isArray(co) === !0 && co.indexOf(d) > -1
    }
  switch (r) {
    case 'pt':
      qe = 1
      break
    case 'mm':
      qe = 72 / 25.4
      break
    case 'cm':
      qe = 72 / 2.54
      break
    case 'in':
      qe = 72
      break
    case 'px':
      qe = rl('px_scaling') == 1 ? 0.75 : 96 / 72
      break
    case 'pc':
    case 'em':
      qe = 12
      break
    case 'ex':
      qe = 6
      break
    default:
      if (typeof r != 'number') throw new Error('Invalid unit: ' + r)
      qe = r
  }
  var xn = null
  xe(), X()
  var Yc = function (d) {
      return h !== null
        ? xn.encryptor(d, 0)
        : function (I) {
            return I
          }
    },
    il =
      (p.__private__.getPageInfo =
      p.getPageInfo =
        function (d) {
          if (isNaN(d) || d % 1 != 0) throw new Error('Invalid argument passed to jsPDF.getPageInfo')
          return { objId: lt[d].objId, pageNumber: d, pageContext: lt[d] }
        }),
    at = (p.__private__.getPageInfoByObjId = function (d) {
      if (isNaN(d) || d % 1 != 0) throw new Error('Invalid argument passed to jsPDF.getPageInfoByObjId')
      for (var I in lt) if (lt[I].objId === d) break
      return il(I)
    }),
    Xc =
      (p.__private__.getCurrentPageInfo =
      p.getCurrentPageInfo =
        function () {
          return { objId: lt[B].objId, pageNumber: B, pageContext: lt[B] }
        })
  ;(p.addPage = function () {
    return el.apply(this, arguments), this
  }),
    (p.setPage = function () {
      return tl.apply(this, arguments), ie.call(this, je[B]), this
    }),
    (p.insertPage = function (d) {
      return this.addPage(), this.movePage(B, d), this
    }),
    (p.movePage = function (d, I) {
      var Z, le
      if (d > I) {
        ;(Z = je[d]), (le = lt[d])
        for (var me = d; me > I; me--) (je[me] = je[me - 1]), (lt[me] = lt[me - 1])
        ;(je[I] = Z), (lt[I] = le), this.setPage(I)
      } else if (d < I) {
        ;(Z = je[d]), (le = lt[d])
        for (var Ce = d; Ce < I; Ce++) (je[Ce] = je[Ce + 1]), (lt[Ce] = lt[Ce + 1])
        ;(je[I] = Z), (lt[I] = le), this.setPage(I)
      }
      return this
    }),
    (p.deletePage = function () {
      return $c.apply(this, arguments), this
    }),
    (p.__private__.text = p.text =
      function (d, I, Z, le, me) {
        var Ce,
          De,
          Ve,
          et,
          ut,
          pt,
          yt,
          Ut,
          Wt,
          rn = (le = le || {}).scope || this
        if (typeof d == 'number' && typeof I == 'number' && (typeof Z == 'string' || Array.isArray(Z))) {
          var Sn = Z
          ;(Z = I), (I = d), (d = Sn)
        }
        if (
          (arguments[3] instanceof it
            ? (N('The transform parameter of text() with a Matrix value'), (Wt = me))
            : ((Ve = arguments[4]),
              (et = arguments[5]),
              (Et((yt = arguments[3])) === 'object' && yt !== null) ||
                (typeof Ve == 'string' && ((et = Ve), (Ve = null)),
                typeof yt == 'string' && ((et = yt), (yt = null)),
                typeof yt == 'number' && ((Ve = yt), (yt = null)),
                (le = { flags: yt, angle: Ve, align: et }))),
          isNaN(I) || isNaN(Z) || d == null)
        )
          throw new Error('Invalid arguments passed to jsPDF.text')
        if (d.length === 0) return rn
        var pn = '',
          _r = !1,
          Yn = typeof le.lineHeightFactor == 'number' ? le.lineHeightFactor : ho,
          ai = rn.internal.scaleFactor
        function dl(Mt) {
          return (Mt = Mt.split('	').join(Array(le.TabLen || 9).join(' '))), Dn(Mt, yt)
        }
        function ea(Mt) {
          for (var Dt, Qt = Mt.concat(), fn = [], fi = Qt.length; fi--; )
            typeof (Dt = Qt.shift()) == 'string'
              ? fn.push(Dt)
              : Array.isArray(Mt) && (Dt.length === 1 || (Dt[1] === void 0 && Dt[2] === void 0))
                ? fn.push(Dt[0])
                : fn.push([Dt[0], Dt[1], Dt[2]])
          return fn
        }
        function ta(Mt, Dt) {
          var Qt
          if (typeof Mt == 'string') Qt = Dt(Mt)[0]
          else if (Array.isArray(Mt)) {
            for (var fn, fi, Ei = Mt.concat(), is = [], gl = Ei.length; gl--; )
              typeof (fn = Ei.shift()) == 'string'
                ? is.push(Dt(fn)[0])
                : Array.isArray(fn) && typeof fn[0] == 'string' && ((fi = Dt(fn[0], fn[1], fn[2])), is.push([fi[0], fi[1], fi[2]]))
            Qt = is
          }
          return Qt
        }
        var Yo = !1,
          na = !0
        if (typeof d == 'string') Yo = !0
        else if (Array.isArray(d)) {
          var ra = d.concat()
          De = []
          for (var Xo, Bn = ra.length; Bn--; ) (typeof (Xo = ra.shift()) != 'string' || (Array.isArray(Xo) && typeof Xo[0] != 'string')) && (na = !1)
          Yo = na
        }
        if (Yo === !1) throw new Error('Type of text must be string or Array. "' + d + '" is not recognized.')
        typeof d == 'string' && (d = d.match(/[\r?\n]/) ? d.split(/\r\n|\r|\n/g) : [d])
        var Qo = we / rn.internal.scaleFactor,
          Zo = Qo * (Yn - 1)
        switch (le.baseline) {
          case 'bottom':
            Z -= Zo
            break
          case 'top':
            Z += Qo - Zo
            break
          case 'hanging':
            Z += Qo - 2 * Zo
            break
          case 'middle':
            Z += Qo / 2 - Zo
        }
        if (
          ((pt = le.maxWidth || 0) > 0 &&
            (typeof d == 'string'
              ? (d = rn.splitTextToSize(d, pt))
              : Object.prototype.toString.call(d) === '[object Array]' &&
                (d = d.reduce(function (Mt, Dt) {
                  return Mt.concat(rn.splitTextToSize(Dt, pt))
                }, []))),
          (Ce = { text: d, x: I, y: Z, options: le, mutex: { pdfEscape: Dn, activeFontKey: ot, fonts: dt, activeFontSize: we } }),
          Pt.publish('preProcessText', Ce),
          (d = Ce.text),
          (Ve = (le = Ce.options).angle),
          !(Wt instanceof it) && Ve && typeof Ve == 'number')
        ) {
          ;(Ve *= Math.PI / 180), le.rotationDirection === 0 && (Ve = -Ve), k === x.ADVANCED && (Ve = -Ve)
          var es = Math.cos(Ve),
            ia = Math.sin(Ve)
          Wt = new it(es, ia, -ia, es, 0, 0)
        } else Ve && Ve instanceof it && (Wt = Ve)
        k !== x.ADVANCED || Wt || (Wt = Br),
          (ut = le.charSpace || Go) !== void 0 &&
            ((pn +=
              E(S(ut)) +
              ` Tc
`),
            this.setCharSpace(this.getCharSpace() || 0)),
          (Ut = le.horizontalScale) !== void 0 &&
            (pn +=
              E(100 * Ut) +
              ` Tz
`),
          le.lang
        var qn = -1,
          au = le.renderingMode !== void 0 ? le.renderingMode : le.stroke,
          oa = rn.internal.getCurrentPageInfo().pageContext
        switch (au) {
          case 0:
          case !1:
          case 'fill':
            qn = 0
            break
          case 1:
          case !0:
          case 'stroke':
            qn = 1
            break
          case 2:
          case 'fillThenStroke':
            qn = 2
            break
          case 3:
          case 'invisible':
            qn = 3
            break
          case 4:
          case 'fillAndAddForClipping':
            qn = 4
            break
          case 5:
          case 'strokeAndAddPathForClipping':
            qn = 5
            break
          case 6:
          case 'fillThenStrokeAndAddToPathForClipping':
            qn = 6
            break
          case 7:
          case 'addToPathForClipping':
            qn = 7
        }
        var pl = oa.usedRenderingMode !== void 0 ? oa.usedRenderingMode : -1
        qn !== -1
          ? (pn +=
              qn +
              ` Tr
`)
          : pl !== -1 &&
            (pn += `0 Tr
`),
          qn !== -1 && (oa.usedRenderingMode = qn),
          (et = le.align || 'left')
        var xr,
          sa = we * Yn,
          lu = rn.internal.pageSize.getWidth(),
          cu = dt[ot]
        ;(ut = le.charSpace || Go), (pt = le.maxWidth || 0), (yt = Object.assign({ autoencode: !0, noBOM: !0 }, le.flags))
        var Pi = []
        if (Object.prototype.toString.call(d) === '[object Array]') {
          var nr
          ;(De = ea(d)),
            et !== 'left' &&
              (xr = De.map(function (Mt) {
                return (rn.getStringUnitWidth(Mt, { font: cu, charSpace: ut, fontSize: we, doKerning: !1 }) * we) / ai
              }))
          var Sr,
            Ci = 0
          if (et === 'right') {
            ;(I -= xr[0]), (d = []), (Bn = De.length)
            for (var Hr = 0; Hr < Bn; Hr++)
              Hr === 0 ? ((Sr = si(I)), (nr = Ai(Z))) : ((Sr = S(Ci - xr[Hr])), (nr = -sa)), d.push([De[Hr], Sr, nr]), (Ci = xr[Hr])
          } else if (et === 'center') {
            ;(I -= xr[0] / 2), (d = []), (Bn = De.length)
            for (var li = 0; li < Bn; li++)
              li === 0 ? ((Sr = si(I)), (nr = Ai(Z))) : ((Sr = S((Ci - xr[li]) / 2)), (nr = -sa)), d.push([De[li], Sr, nr]), (Ci = xr[li])
          } else if (et === 'left') {
            ;(d = []), (Bn = De.length)
            for (var ts = 0; ts < Bn; ts++) d.push(De[ts])
          } else {
            if (et !== 'justify') throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".')
            ;(d = []), (Bn = De.length), (pt = pt !== 0 ? pt : lu)
            for (var kr = 0; kr < Bn; kr++)
              (nr = kr === 0 ? Ai(Z) : -sa),
                (Sr = kr === 0 ? si(I) : 0),
                kr < Bn - 1 ? Pi.push(E(S((pt - xr[kr]) / (De[kr].split(' ').length - 1)))) : Pi.push(0),
                d.push([De[kr], Sr, nr])
          }
        }
        var ns = typeof le.R2L == 'boolean' ? le.R2L : Ie
        ns === !0 &&
          (d = ta(d, function (Mt, Dt, Qt) {
            return [Mt.split('').reverse().join(''), Dt, Qt]
          })),
          (Ce = { text: d, x: I, y: Z, options: le, mutex: { pdfEscape: Dn, activeFontKey: ot, fonts: dt, activeFontSize: we } }),
          Pt.publish('postProcessText', Ce),
          (d = Ce.text),
          (_r = Ce.mutex.isHex || !1)
        var aa = dt[ot].encoding
        ;(aa !== 'WinAnsiEncoding' && aa !== 'StandardEncoding') ||
          (d = ta(d, function (Mt, Dt, Qt) {
            return [dl(Mt), Dt, Qt]
          })),
          (De = ea(d)),
          (d = [])
        for (
          var ji,
            Ar,
            ci,
            mo = 0,
            rs = 1,
            vo = Array.isArray(De[0]) ? rs : mo,
            Ii = '',
            la = function (Mt, Dt, Qt) {
              var fn = ''
              return (
                Qt instanceof it
                  ? ((Qt = typeof le.angle == 'number' ? gr(Qt, new it(1, 0, 0, 1, Mt, Dt)) : gr(new it(1, 0, 0, 1, Mt, Dt), Qt)),
                    k === x.ADVANCED && (Qt = gr(new it(1, 0, 0, -1, 0, 0), Qt)),
                    (fn =
                      Qt.join(' ') +
                      ` Tm
`))
                  : (fn =
                      E(Mt) +
                      ' ' +
                      E(Dt) +
                      ` Td
`),
                fn
              )
            },
            rr = 0;
          rr < De.length;
          rr++
        ) {
          switch (((Ii = ''), vo)) {
            case rs:
              ;(ci = (_r ? '<' : '(') + De[rr][0] + (_r ? '>' : ')')), (ji = parseFloat(De[rr][1])), (Ar = parseFloat(De[rr][2]))
              break
            case mo:
              ;(ci = (_r ? '<' : '(') + De[rr] + (_r ? '>' : ')')), (ji = si(I)), (Ar = Ai(Z))
          }
          Pi !== void 0 &&
            Pi[rr] !== void 0 &&
            (Ii =
              Pi[rr] +
              ` Tw
`),
            rr === 0 ? d.push(Ii + la(ji, Ar, Wt) + ci) : vo === mo ? d.push(Ii + ci) : vo === rs && d.push(Ii + la(ji, Ar, Wt) + ci)
        }
        ;(d =
          vo === mo
            ? d.join(` Tj
T* `)
            : d.join(` Tj
`)),
          (d += ` Tj
`)
        var ui = `BT
/`
        return (
          (ui +=
            ot +
            ' ' +
            we +
            ` Tf
`),
          (ui +=
            E(we * Yn) +
            ` TL
`),
          (ui +=
            po +
            `
`),
          (ui += pn),
          (ui += d),
          R((ui += 'ET')),
          (v[ot] = !0),
          rn
        )
      })
  var Qc =
    (p.__private__.clip =
    p.clip =
      function (d) {
        return R(d === 'evenodd' ? 'W*' : 'W'), this
      })
  ;(p.clipEvenOdd = function () {
    return Qc('evenodd')
  }),
    (p.__private__.discardPath = p.discardPath =
      function () {
        return R('n'), this
      })
  var Ur = (p.__private__.isValidStyle = function (d) {
    var I = !1
    return [void 0, null, 'S', 'D', 'F', 'DF', 'FD', 'f', 'f*', 'B', 'B*', 'n'].indexOf(d) !== -1 && (I = !0), I
  })
  p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function (d) {
    return Ur(d) && (f = d), this
  }
  var ol =
      (p.__private__.getStyle =
      p.getStyle =
        function (d) {
          var I = f
          switch (d) {
            case 'D':
            case 'S':
              I = 'S'
              break
            case 'F':
              I = 'f'
              break
            case 'FD':
            case 'DF':
              I = 'B'
              break
            case 'f':
            case 'f*':
            case 'B':
            case 'B*':
              I = d
          }
          return I
        }),
    sl = (p.close = function () {
      return R('h'), this
    })
  ;(p.stroke = function () {
    return R('S'), this
  }),
    (p.fill = function (d) {
      return Vo('f', d), this
    }),
    (p.fillEvenOdd = function (d) {
      return Vo('f*', d), this
    }),
    (p.fillStroke = function (d) {
      return Vo('B', d), this
    }),
    (p.fillStrokeEvenOdd = function (d) {
      return Vo('B*', d), this
    })
  var Vo = function (d, I) {
      Et(I) === 'object' ? eu(I, d) : R(d)
    },
    $s = function (d) {
      d === null || (k === x.ADVANCED && d === void 0) || ((d = ol(d)), R(d))
    }
  function Zc(d, I, Z, le, me) {
    var Ce = new Lo(I || this.boundingBox, Z || this.xStep, le || this.yStep, this.gState, me || this.matrix)
    Ce.stream = this.stream
    var De = d + '$$' + this.cloneIndex++ + '$$'
    return Mn(De, Ce), Ce
  }
  var eu = function (d, I) {
      var Z = lo[d.key],
        le = Nt[Z]
      if (le instanceof Xi) R('q'), R(tu(I)), le.gState && p.setGState(le.gState), R(d.matrix.toString() + ' cm'), R('/' + Z + ' sh'), R('Q')
      else if (le instanceof Lo) {
        var me = new it(1, 0, 0, -1, 0, Ni())
        d.matrix && ((me = me.multiply(d.matrix || Br)), (Z = Zc.call(le, d.key, d.boundingBox, d.xStep, d.yStep, me).id)),
          R('q'),
          R('/Pattern cs'),
          R('/' + Z + ' scn'),
          le.gState && p.setGState(le.gState),
          R(I),
          R('Q')
      }
    },
    tu = function (d) {
      switch (d) {
        case 'f':
        case 'F':
          return 'W n'
        case 'f*':
          return 'W* n'
        case 'B':
          return 'W S'
        case 'B*':
          return 'W* S'
        case 'S':
          return 'W S'
        case 'n':
          return 'W n'
      }
    },
    Vs = (p.moveTo = function (d, I) {
      return R(E(S(d)) + ' ' + E($(I)) + ' m'), this
    }),
    fo = (p.lineTo = function (d, I) {
      return R(E(S(d)) + ' ' + E($(I)) + ' l'), this
    }),
    ki = (p.curveTo = function (d, I, Z, le, me, Ce) {
      return R([E(S(d)), E($(I)), E(S(Z)), E($(le)), E(S(me)), E($(Ce)), 'c'].join(' ')), this
    })
  ;(p.__private__.line = p.line =
    function (d, I, Z, le, me) {
      if (isNaN(d) || isNaN(I) || isNaN(Z) || isNaN(le) || !Ur(me)) throw new Error('Invalid arguments passed to jsPDF.line')
      return k === x.COMPAT ? this.lines([[Z - d, le - I]], d, I, [1, 1], me || 'S') : this.lines([[Z - d, le - I]], d, I, [1, 1]).stroke()
    }),
    (p.__private__.lines = p.lines =
      function (d, I, Z, le, me, Ce) {
        var De, Ve, et, ut, pt, yt, Ut, Wt, rn, Sn, pn, _r
        if (
          (typeof d == 'number' && ((_r = Z), (Z = I), (I = d), (d = _r)),
          (le = le || [1, 1]),
          (Ce = Ce || !1),
          isNaN(I) || isNaN(Z) || !Array.isArray(d) || !Array.isArray(le) || !Ur(me) || typeof Ce != 'boolean')
        )
          throw new Error('Invalid arguments passed to jsPDF.lines')
        for (Vs(I, Z), De = le[0], Ve = le[1], ut = d.length, Sn = I, pn = Z, et = 0; et < ut; et++)
          (pt = d[et]).length === 2
            ? ((Sn = pt[0] * De + Sn), (pn = pt[1] * Ve + pn), fo(Sn, pn))
            : ((yt = pt[0] * De + Sn),
              (Ut = pt[1] * Ve + pn),
              (Wt = pt[2] * De + Sn),
              (rn = pt[3] * Ve + pn),
              (Sn = pt[4] * De + Sn),
              (pn = pt[5] * Ve + pn),
              ki(yt, Ut, Wt, rn, Sn, pn))
        return Ce && sl(), $s(me), this
      }),
    (p.path = function (d) {
      for (var I = 0; I < d.length; I++) {
        var Z = d[I],
          le = Z.c
        switch (Z.op) {
          case 'm':
            Vs(le[0], le[1])
            break
          case 'l':
            fo(le[0], le[1])
            break
          case 'c':
            ki.apply(this, le)
            break
          case 'h':
            sl()
        }
      }
      return this
    }),
    (p.__private__.rect = p.rect =
      function (d, I, Z, le, me) {
        if (isNaN(d) || isNaN(I) || isNaN(Z) || isNaN(le) || !Ur(me)) throw new Error('Invalid arguments passed to jsPDF.rect')
        return k === x.COMPAT && (le = -le), R([E(S(d)), E($(I)), E(S(Z)), E(S(le)), 're'].join(' ')), $s(me), this
      }),
    (p.__private__.triangle = p.triangle =
      function (d, I, Z, le, me, Ce, De) {
        if (isNaN(d) || isNaN(I) || isNaN(Z) || isNaN(le) || isNaN(me) || isNaN(Ce) || !Ur(De))
          throw new Error('Invalid arguments passed to jsPDF.triangle')
        return (
          this.lines(
            [
              [Z - d, le - I],
              [me - Z, Ce - le],
              [d - me, I - Ce]
            ],
            d,
            I,
            [1, 1],
            De,
            !0
          ),
          this
        )
      }),
    (p.__private__.roundedRect = p.roundedRect =
      function (d, I, Z, le, me, Ce, De) {
        if (isNaN(d) || isNaN(I) || isNaN(Z) || isNaN(le) || isNaN(me) || isNaN(Ce) || !Ur(De))
          throw new Error('Invalid arguments passed to jsPDF.roundedRect')
        var Ve = (4 / 3) * (Math.SQRT2 - 1)
        return (
          (me = Math.min(me, 0.5 * Z)),
          (Ce = Math.min(Ce, 0.5 * le)),
          this.lines(
            [
              [Z - 2 * me, 0],
              [me * Ve, 0, me, Ce - Ce * Ve, me, Ce],
              [0, le - 2 * Ce],
              [0, Ce * Ve, -me * Ve, Ce, -me, Ce],
              [2 * me - Z, 0],
              [-me * Ve, 0, -me, -Ce * Ve, -me, -Ce],
              [0, 2 * Ce - le],
              [0, -Ce * Ve, me * Ve, -Ce, me, -Ce]
            ],
            d + me,
            I,
            [1, 1],
            De,
            !0
          ),
          this
        )
      }),
    (p.__private__.ellipse = p.ellipse =
      function (d, I, Z, le, me) {
        if (isNaN(d) || isNaN(I) || isNaN(Z) || isNaN(le) || !Ur(me)) throw new Error('Invalid arguments passed to jsPDF.ellipse')
        var Ce = (4 / 3) * (Math.SQRT2 - 1) * Z,
          De = (4 / 3) * (Math.SQRT2 - 1) * le
        return (
          Vs(d + Z, I),
          ki(d + Z, I - De, d + Ce, I - le, d, I - le),
          ki(d - Ce, I - le, d - Z, I - De, d - Z, I),
          ki(d - Z, I + De, d - Ce, I + le, d, I + le),
          ki(d + Ce, I + le, d + Z, I + De, d + Z, I),
          $s(me),
          this
        )
      }),
    (p.__private__.circle = p.circle =
      function (d, I, Z, le) {
        if (isNaN(d) || isNaN(I) || isNaN(Z) || !Ur(le)) throw new Error('Invalid arguments passed to jsPDF.circle')
        return this.ellipse(d, I, Z, Z, le)
      }),
    (p.setFont = function (d, I, Z) {
      return Z && (I = U(I, Z)), (ot = nl(d, I, { disableWarning: !1 })), this
    })
  var nu =
    (p.__private__.getFont =
    p.getFont =
      function () {
        return dt[nl.apply(p, arguments)]
      })
  ;(p.__private__.getFontList = p.getFontList =
    function () {
      var d,
        I,
        Z = {}
      for (d in vt) if (vt.hasOwnProperty(d)) for (I in ((Z[d] = []), vt[d])) vt[d].hasOwnProperty(I) && Z[d].push(I)
      return Z
    }),
    (p.addFont = function (d, I, Z, le, me) {
      var Ce = ['StandardEncoding', 'MacRomanEncoding', 'Identity-H', 'WinAnsiEncoding']
      return (
        arguments[3] && Ce.indexOf(arguments[3]) !== -1 ? (me = arguments[3]) : arguments[3] && Ce.indexOf(arguments[3]) == -1 && (Z = U(Z, le)),
        (me = me || 'Identity-H'),
        zs.call(this, d, I, Z, me)
      )
    })
  var ho,
    Ws = e.lineWidth || 0.200025,
    Wo =
      (p.__private__.getLineWidth =
      p.getLineWidth =
        function () {
          return Ws
        }),
    al =
      (p.__private__.setLineWidth =
      p.setLineWidth =
        function (d) {
          return (Ws = d), R(E(S(d)) + ' w'), this
        })
  p.__private__.setLineDash =
    rt.API.setLineDash =
    rt.API.setLineDashPattern =
      function (d, I) {
        if (((d = d || []), (I = I || 0), isNaN(I) || !Array.isArray(d))) throw new Error('Invalid arguments passed to jsPDF.setLineDash')
        return (
          (d = d
            .map(function (Z) {
              return E(S(Z))
            })
            .join(' ')),
          (I = E(S(I))),
          R('[' + d + '] ' + I + ' d'),
          this
        )
      }
  var ll =
    (p.__private__.getLineHeight =
    p.getLineHeight =
      function () {
        return we * ho
      })
  p.__private__.getLineHeight = p.getLineHeight = function () {
    return we * ho
  }
  var cl =
      (p.__private__.setLineHeightFactor =
      p.setLineHeightFactor =
        function (d) {
          return typeof (d = d || 1.15) == 'number' && (ho = d), this
        }),
    ul =
      (p.__private__.getLineHeightFactor =
      p.getLineHeightFactor =
        function () {
          return ho
        })
  cl(e.lineHeight)
  var si = (p.__private__.getHorizontalCoordinate = function (d) {
      return S(d)
    }),
    Ai = (p.__private__.getVerticalCoordinate = function (d) {
      return k === x.ADVANCED ? d : lt[B].mediaBox.topRightY - lt[B].mediaBox.bottomLeftY - S(d)
    }),
    ru =
      (p.__private__.getHorizontalCoordinateString =
      p.getHorizontalCoordinateString =
        function (d) {
          return E(si(d))
        }),
    Li =
      (p.__private__.getVerticalCoordinateString =
      p.getVerticalCoordinateString =
        function (d) {
          return E(Ai(d))
        }),
    wr = e.strokeColor || '0 G'
  ;(p.__private__.getStrokeColor = p.getDrawColor =
    function () {
      return vr(wr)
    }),
    (p.__private__.setStrokeColor = p.setDrawColor =
      function (d, I, Z, le) {
        return (wr = br({ ch1: d, ch2: I, ch3: Z, ch4: le, pdfColorType: 'draw', precision: 2 })), R(wr), this
      })
  var Gs = e.fillColor || '0 g'
  ;(p.__private__.getFillColor = p.getFillColor =
    function () {
      return vr(Gs)
    }),
    (p.__private__.setFillColor = p.setFillColor =
      function (d, I, Z, le) {
        return (Gs = br({ ch1: d, ch2: I, ch3: Z, ch4: le, pdfColorType: 'fill', precision: 2 })), R(Gs), this
      })
  var po = e.textColor || '0 g',
    iu =
      (p.__private__.getTextColor =
      p.getTextColor =
        function () {
          return vr(po)
        })
  p.__private__.setTextColor = p.setTextColor = function (d, I, Z, le) {
    return (po = br({ ch1: d, ch2: I, ch3: Z, ch4: le, pdfColorType: 'text', precision: 3 })), this
  }
  var Go = e.charSpace,
    ou =
      (p.__private__.getCharSpace =
      p.getCharSpace =
        function () {
          return parseFloat(Go || 0)
        })
  p.__private__.setCharSpace = p.setCharSpace = function (d) {
    if (isNaN(d)) throw new Error('Invalid argument passed to jsPDF.setCharSpace')
    return (Go = d), this
  }
  var Ks = 0
  ;(p.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }),
    (p.__private__.setLineCap = p.setLineCap =
      function (d) {
        var I = p.CapJoinStyles[d]
        if (I === void 0) throw new Error("Line cap style of '" + d + "' is not recognized. See or extend .CapJoinStyles property for valid styles")
        return (Ks = I), R(I + ' J'), this
      })
  var Js = 0
  ;(p.__private__.setLineJoin = p.setLineJoin =
    function (d) {
      var I = p.CapJoinStyles[d]
      if (I === void 0) throw new Error("Line join style of '" + d + "' is not recognized. See or extend .CapJoinStyles property for valid styles")
      return (Js = I), R(I + ' j'), this
    }),
    (p.__private__.setLineMiterLimit =
      p.__private__.setMiterLimit =
      p.setLineMiterLimit =
      p.setMiterLimit =
        function (d) {
          if (((d = d || 0), isNaN(d))) throw new Error('Invalid argument passed to jsPDF.setLineMiterLimit')
          return R(E(S(d)) + ' M'), this
        }),
    (p.GState = $a),
    (p.setGState = function (d) {
      ;(d = typeof d == 'string' ? $t[pr[d]] : fl(null, d)).equals(ri) || (R('/' + d.id + ' gs'), (ri = d))
    })
  var fl = function (d, I) {
    if (!d || !pr[d]) {
      var Z = !1
      for (var le in $t)
        if ($t.hasOwnProperty(le) && $t[le].equals(I)) {
          Z = !0
          break
        }
      if (Z) I = $t[le]
      else {
        var me = 'GS' + (Object.keys($t).length + 1).toString(10)
        ;($t[me] = I), (I.id = me)
      }
      return d && (pr[d] = I.id), Pt.publish('addGState', I), I
    }
  }
  ;(p.addGState = function (d, I) {
    return fl(d, I), this
  }),
    (p.saveGraphicsState = function () {
      return R('q'), Kn.push({ key: ot, size: we, color: po }), this
    }),
    (p.restoreGraphicsState = function () {
      R('Q')
      var d = Kn.pop()
      return (ot = d.key), (we = d.size), (po = d.color), (ri = null), this
    }),
    (p.setCurrentTransformationMatrix = function (d) {
      return R(d.toString() + ' cm'), this
    }),
    (p.comment = function (d) {
      return R('#' + d), this
    })
  var Ko = function (d, I) {
      var Z = d || 0
      Object.defineProperty(this, 'x', {
        enumerable: !0,
        get: function () {
          return Z
        },
        set: function (Ce) {
          isNaN(Ce) || (Z = parseFloat(Ce))
        }
      })
      var le = I || 0
      Object.defineProperty(this, 'y', {
        enumerable: !0,
        get: function () {
          return le
        },
        set: function (Ce) {
          isNaN(Ce) || (le = parseFloat(Ce))
        }
      })
      var me = 'pt'
      return (
        Object.defineProperty(this, 'type', {
          enumerable: !0,
          get: function () {
            return me
          },
          set: function (Ce) {
            me = Ce.toString()
          }
        }),
        this
      )
    },
    Ys = function (d, I, Z, le) {
      Ko.call(this, d, I), (this.type = 'rect')
      var me = Z || 0
      Object.defineProperty(this, 'w', {
        enumerable: !0,
        get: function () {
          return me
        },
        set: function (De) {
          isNaN(De) || (me = parseFloat(De))
        }
      })
      var Ce = le || 0
      return (
        Object.defineProperty(this, 'h', {
          enumerable: !0,
          get: function () {
            return Ce
          },
          set: function (De) {
            isNaN(De) || (Ce = parseFloat(De))
          }
        }),
        this
      )
    },
    Xs = function () {
      ;(this.page = Vt),
        (this.currentPage = B),
        (this.pages = je.slice(0)),
        (this.pagesContext = lt.slice(0)),
        (this.x = cn),
        (this.y = gt),
        (this.matrix = Rn),
        (this.width = go(B)),
        (this.height = Ni(B)),
        (this.outputDestination = K),
        (this.id = ''),
        (this.objectNumber = -1)
    }
  Xs.prototype.restore = function () {
    ;(Vt = this.page),
      (B = this.currentPage),
      (lt = this.pagesContext),
      (je = this.pages),
      (cn = this.x),
      (gt = this.y),
      (Rn = this.matrix),
      Qs(B, this.width),
      Zs(B, this.height),
      (K = this.outputDestination)
  }
  var hl = function (d, I, Z, le, me) {
      Dr.push(new Xs()), (Vt = B = 0), (je = []), (cn = d), (gt = I), (Rn = me), Us([Z, le])
    },
    su = function (d) {
      if (Mr[d]) Dr.pop().restore()
      else {
        var I = new Xs(),
          Z = 'Xo' + (Object.keys(bn).length + 1).toString(10)
        ;(I.id = Z), (Mr[d] = Z), (bn[Z] = I), Pt.publish('addFormObject', I), Dr.pop().restore()
      }
    }
  for (var Jo in ((p.beginFormObject = function (d, I, Z, le, me) {
    return hl(d, I, Z, le, me), this
  }),
  (p.endFormObject = function (d) {
    return su(d), this
  }),
  (p.doFormObject = function (d, I) {
    var Z = bn[Mr[d]]
    return R('q'), R(I.toString() + ' cm'), R('/' + Z.id + ' Do'), R('Q'), this
  }),
  (p.getFormObject = function (d) {
    var I = bn[Mr[d]]
    return { x: I.x, y: I.y, width: I.width, height: I.height, matrix: I.matrix }
  }),
  (p.save = function (d, I) {
    return (
      (d = d || 'generated.pdf'),
      ((I = I || {}).returnPromise = I.returnPromise || !1),
      I.returnPromise === !1
        ? (xo(Ho(oi()), d), typeof xo.unload == 'function' && st.setTimeout && setTimeout(xo.unload, 911), this)
        : new Promise(function (Z, le) {
            try {
              var me = xo(Ho(oi()), d)
              typeof xo.unload == 'function' && st.setTimeout && setTimeout(xo.unload, 911), Z(me)
            } catch (Ce) {
              le(Ce.message)
            }
          })
    )
  }),
  rt.API))
    rt.API.hasOwnProperty(Jo) &&
      (Jo === 'events' && rt.API.events.length
        ? (function (d, I) {
            var Z, le, me
            for (me = I.length - 1; me !== -1; me--)
              (Z = I[me][0]), (le = I[me][1]), d.subscribe.apply(d, [Z].concat(typeof le == 'function' ? [le] : le))
          })(Pt, rt.API.events)
        : (p[Jo] = rt.API[Jo]))
  var go = (p.getPageWidth = function (d) {
      return (lt[(d = d || B)].mediaBox.topRightX - lt[d].mediaBox.bottomLeftX) / qe
    }),
    Qs = (p.setPageWidth = function (d, I) {
      lt[d].mediaBox.topRightX = I * qe + lt[d].mediaBox.bottomLeftX
    }),
    Ni = (p.getPageHeight = function (d) {
      return (lt[(d = d || B)].mediaBox.topRightY - lt[d].mediaBox.bottomLeftY) / qe
    }),
    Zs = (p.setPageHeight = function (d, I) {
      lt[d].mediaBox.topRightY = I * qe + lt[d].mediaBox.bottomLeftY
    })
  return (
    (p.internal = {
      pdfEscape: Dn,
      getStyle: ol,
      getFont: nu,
      getFontSize: Pe,
      getCharSpace: ou,
      getTextColor: iu,
      getLineHeight: ll,
      getLineHeightFactor: ul,
      getLineWidth: Wo,
      write: ke,
      getHorizontalCoordinate: si,
      getVerticalCoordinate: Ai,
      getCoordinateString: ru,
      getVerticalCoordinateString: Li,
      collections: {},
      newObject: un,
      newAdditionalObject: Oo,
      newObjectDeferred: nn,
      newObjectDeferredBegin: Jn,
      getFilters: qr,
      putStream: tr,
      events: Pt,
      scaleFactor: qe,
      pageSize: {
        getWidth: function () {
          return go(B)
        },
        setWidth: function (d) {
          Qs(B, d)
        },
        getHeight: function () {
          return Ni(B)
        },
        setHeight: function (d) {
          Zs(B, d)
        }
      },
      encryptionOptions: h,
      encryption: xn,
      getEncryptor: Yc,
      output: $o,
      getNumberOfPages: Vc,
      pages: je,
      out: R,
      f2: Q,
      f3: P,
      getPageInfo: il,
      getPageInfoByObjId: at,
      getCurrentPageInfo: Xc,
      getPDFVersion: w,
      Point: Ko,
      Rectangle: Ys,
      Matrix: it,
      hasHotfix: rl
    }),
    Object.defineProperty(p.internal.pageSize, 'width', {
      get: function () {
        return go(B)
      },
      set: function (d) {
        Qs(B, d)
      },
      enumerable: !0,
      configurable: !0
    }),
    Object.defineProperty(p.internal.pageSize, 'height', {
      get: function () {
        return Ni(B)
      },
      set: function (d) {
        Zs(B, d)
      },
      enumerable: !0,
      configurable: !0
    }),
    Hc.call(p, ge),
    (ot = 'F1'),
    el(i, n),
    Pt.publish('initialized'),
    p
  )
}
;(ps.prototype.lsbFirstWord = function (e) {
  return String.fromCharCode((e >> 0) & 255, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255)
}),
  (ps.prototype.toHexString = function (e) {
    return e
      .split('')
      .map(function (t) {
        return ('0' + (255 & t.charCodeAt(0)).toString(16)).slice(-2)
      })
      .join('')
  }),
  (ps.prototype.hexToBytes = function (e) {
    for (var t = [], n = 0; n < e.length; n += 2) t.push(String.fromCharCode(parseInt(e.substr(n, 2), 16)))
    return t.join('')
  }),
  (ps.prototype.processOwnerPassword = function (e, t) {
    return If(jf(t).substr(0, 5), e)
  }),
  (ps.prototype.encryptor = function (e, t) {
    var n = jf(this.encryptionKey + String.fromCharCode(255 & e, (e >> 8) & 255, (e >> 16) & 255, 255 & t, (t >> 8) & 255)).substr(0, 10)
    return function (r) {
      return If(n, r)
    }
  }),
  ($a.prototype.equals = function (e) {
    var t,
      n = 'id,objectNumber,equals'
    if (!e || Et(e) !== Et(this)) return !1
    var r = 0
    for (t in this)
      if (!(n.indexOf(t) >= 0)) {
        if ((this.hasOwnProperty(t) && !e.hasOwnProperty(t)) || this[t] !== e[t]) return !1
        r++
      }
    for (t in e) e.hasOwnProperty(t) && n.indexOf(t) < 0 && r--
    return r === 0
  }),
  (rt.API = { events: [] }),
  (rt.version = '2.5.1')
var Kt = rt.API,
  vh = 1,
  Fo = function (e) {
    return e.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
  },
  us = function (e) {
    return e.replace(/\\\\/g, '\\').replace(/\\\(/g, '(').replace(/\\\)/g, ')')
  },
  ct = function (e) {
    return e.toFixed(2)
  },
  Vi = function (e) {
    return e.toFixed(5)
  }
Kt.__acroform__ = {}
var Wn = function (e, t) {
    ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e)
  },
  wp = function (e) {
    return e * vh
  },
  Vr = function (e) {
    var t = new T0(),
      n = Ye.internal.getHeight(e) || 0,
      r = Ye.internal.getWidth(e) || 0
    return (t.BBox = [0, 0, Number(ct(r)), Number(ct(n))]), t
  },
  N4 = (Kt.__acroform__.setBit = function (e, t) {
    if (((e = e || 0), (t = t || 0), isNaN(e) || isNaN(t))) throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.setBit')
    return (e |= 1 << t)
  }),
  P4 = (Kt.__acroform__.clearBit = function (e, t) {
    if (((e = e || 0), (t = t || 0), isNaN(e) || isNaN(t))) throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.clearBit')
    return (e &= ~(1 << t))
  }),
  C4 = (Kt.__acroform__.getBit = function (e, t) {
    if (isNaN(e) || isNaN(t)) throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.getBit')
    return e & (1 << t) ? 1 : 0
  }),
  Zt = (Kt.__acroform__.getBitForPdf = function (e, t) {
    if (isNaN(e) || isNaN(t)) throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf')
    return C4(e, t - 1)
  }),
  en = (Kt.__acroform__.setBitForPdf = function (e, t) {
    if (isNaN(e) || isNaN(t)) throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf')
    return N4(e, t - 1)
  }),
  tn = (Kt.__acroform__.clearBitForPdf = function (e, t) {
    if (isNaN(e) || isNaN(t)) throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf')
    return P4(e, t - 1)
  }),
  j4 = (Kt.__acroform__.calculateCoordinates = function (e, t) {
    var n = t.internal.getHorizontalCoordinate,
      r = t.internal.getVerticalCoordinate,
      i = e[0],
      o = e[1],
      s = e[2],
      l = e[3],
      c = {}
    return (
      (c.lowerLeft_X = n(i) || 0),
      (c.lowerLeft_Y = r(o + l) || 0),
      (c.upperRight_X = n(i + s) || 0),
      (c.upperRight_Y = r(o) || 0),
      [Number(ct(c.lowerLeft_X)), Number(ct(c.lowerLeft_Y)), Number(ct(c.upperRight_X)), Number(ct(c.upperRight_Y))]
    )
  }),
  I4 = function (e) {
    if (e.appearanceStreamContent) return e.appearanceStreamContent
    if (e.V || e.DV) {
      var t = [],
        n = e._V || e.DV,
        r = Ef(e, n),
        i = e.scope.internal.getFont(e.fontName, e.fontStyle).id
      t.push('/Tx BMC'),
        t.push('q'),
        t.push('BT'),
        t.push(e.scope.__private__.encodeColorString(e.color)),
        t.push('/' + i + ' ' + ct(r.fontSize) + ' Tf'),
        t.push('1 0 0 1 0 0 Tm'),
        t.push(r.text),
        t.push('ET'),
        t.push('Q'),
        t.push('EMC')
      var o = Vr(e)
      return (
        (o.scope = e.scope),
        (o.stream = t.join(`
`)),
        o
      )
    }
  },
  Ef = function (e, t) {
    var n = e.fontSize === 0 ? e.maxFontSize : e.fontSize,
      r = { text: '', fontSize: '' },
      i = (t = (t = t.substr(0, 1) == '(' ? t.substr(1) : t).substr(t.length - 1) == ')' ? t.substr(0, t.length - 1) : t).split(' ')
    i = e.multiline
      ? i.map(function (P) {
          return P.split(`
`)
        })
      : i.map(function (P) {
          return [P]
        })
    var o = n,
      s = Ye.internal.getHeight(e) || 0
    s = s < 0 ? -s : s
    var l = Ye.internal.getWidth(e) || 0
    l = l < 0 ? -l : l
    var c = function (P, S, z) {
      if (P + 1 < i.length) {
        var $ = S + ' ' + i[P + 1][0]
        return $l($, e, z).width <= l - 4
      }
      return !1
    }
    o++
    e: for (; o > 0; ) {
      ;(t = ''), o--
      var f,
        h,
        g = $l('3', e, o).height,
        v = e.multiline ? s - o : (s - g) / 2,
        p = (v += 2),
        b = 0,
        w = 0,
        L = 0
      if (o <= 0) {
        ;(t = `(...) Tj
`),
          (t +=
            '% Width of Text: ' +
            $l(t, e, (o = 12)).width +
            ', FieldWidth:' +
            l +
            `
`)
        break
      }
      for (var _ = '', x = 0, k = 0; k < i.length; k++)
        if (i.hasOwnProperty(k)) {
          var C = !1
          if (i[k].length !== 1 && L !== i[k].length - 1) {
            if ((g + 2) * (x + 2) + 2 > s) continue e
            ;(_ += i[k][L]), (C = !0), (w = k), k--
          } else {
            _ = (_ += i[k][L] + ' ').substr(_.length - 1) == ' ' ? _.substr(0, _.length - 1) : _
            var D = parseInt(k),
              U = c(D, _, o),
              E = k >= i.length - 1
            if (U && !E) {
              ;(_ += ' '), (L = 0)
              continue
            }
            if (U || E) {
              if (E) w = D
              else if (e.multiline && (g + 2) * (x + 2) + 2 > s) continue e
            } else {
              if (!e.multiline || (g + 2) * (x + 2) + 2 > s) continue e
              w = D
            }
          }
          for (var N = '', V = b; V <= w; V++) {
            var Q = i[V]
            if (e.multiline) {
              if (V === w) {
                ;(N += Q[L] + ' '), (L = (L + 1) % Q.length)
                continue
              }
              if (V === b) {
                N += Q[Q.length - 1] + ' '
                continue
              }
            }
            N += Q[0] + ' '
          }
          switch (((N = N.substr(N.length - 1) == ' ' ? N.substr(0, N.length - 1) : N), (h = $l(N, e, o).width), e.textAlign)) {
            case 'right':
              f = l - h - 2
              break
            case 'center':
              f = (l - h) / 2
              break
            case 'left':
            default:
              f = 2
          }
          ;(t +=
            ct(f) +
            ' ' +
            ct(p) +
            ` Td
`),
            (t +=
              '(' +
              Fo(N) +
              `) Tj
`),
            (t +=
              -ct(f) +
              ` 0 Td
`),
            (p = -(o + 2)),
            (h = 0),
            (b = C ? w : w + 1),
            x++,
            (_ = '')
        }
      break
    }
    return (r.text = t), (r.fontSize = o), r
  },
  $l = function (e, t, n) {
    var r = t.scope.internal.getFont(t.fontName, t.fontStyle),
      i = t.scope.getStringUnitWidth(e, { font: r, fontSize: parseFloat(n), charSpace: 0 }) * parseFloat(n)
    return { height: t.scope.getStringUnitWidth('3', { font: r, fontSize: parseFloat(n), charSpace: 0 }) * parseFloat(n) * 1.5, width: i }
  },
  E4 = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 },
  T4 = function (e, t) {
    var n = { type: 'reference', object: e }
    t.internal.getPageInfo(e.page).pageContext.annotations.find(function (r) {
      return r.type === n.type && r.object === n.object
    }) === void 0 && t.internal.getPageInfo(e.page).pageContext.annotations.push(n)
  },
  F4 = function (e, t) {
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = n,
          i = e[n]
        t.internal.newObjectDeferredBegin(i.objId, !0), Et(i) === 'object' && typeof i.putStream == 'function' && i.putStream(), delete e[r]
      }
  },
  O4 = function (e, t) {
    if (((t.scope = e), e.internal !== void 0 && (e.internal.acroformPlugin === void 0 || e.internal.acroformPlugin.isInitialized === !1))) {
      if (((Or.FieldNum = 0), (e.internal.acroformPlugin = JSON.parse(JSON.stringify(E4))), e.internal.acroformPlugin.acroFormDictionaryRoot))
        throw new Error('Exception while creating AcroformDictionary')
      ;(vh = e.internal.scaleFactor),
        (e.internal.acroformPlugin.acroFormDictionaryRoot = new F0()),
        (e.internal.acroformPlugin.acroFormDictionaryRoot.scope = e),
        (e.internal.acroformPlugin.acroFormDictionaryRoot._eventID = e.internal.events.subscribe('postPutResources', function () {
          ;(function (n) {
            n.internal.events.unsubscribe(n.internal.acroformPlugin.acroFormDictionaryRoot._eventID),
              delete n.internal.acroformPlugin.acroFormDictionaryRoot._eventID,
              (n.internal.acroformPlugin.printedOut = !0)
          })(e)
        })),
        e.internal.events.subscribe('buildDocument', function () {
          ;(function (n) {
            n.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0
            var r = n.internal.acroformPlugin.acroFormDictionaryRoot.Fields
            for (var i in r)
              if (r.hasOwnProperty(i)) {
                var o = r[i]
                ;(o.objId = void 0), o.hasAnnotation && T4(o, n)
              }
          })(e)
        }),
        e.internal.events.subscribe('putCatalog', function () {
          ;(function (n) {
            if (n.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error('putCatalogCallback: Root missing.')
            n.internal.write('/AcroForm ' + n.internal.acroformPlugin.acroFormDictionaryRoot.objId + ' 0 R')
          })(e)
        }),
        e.internal.events.subscribe('postPutPages', function (n) {
          ;(function (r, i) {
            var o = !r
            for (var s in (r ||
              (i.internal.newObjectDeferredBegin(i.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0),
              i.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),
            (r = r || i.internal.acroformPlugin.acroFormDictionaryRoot.Kids)))
              if (r.hasOwnProperty(s)) {
                var l = r[s],
                  c = [],
                  f = l.Rect
                if (
                  (l.Rect && (l.Rect = j4(l.Rect, i)),
                  i.internal.newObjectDeferredBegin(l.objId, !0),
                  (l.DA = Ye.createDefaultAppearanceStream(l)),
                  Et(l) === 'object' && typeof l.getKeyValueListForStream == 'function' && (c = l.getKeyValueListForStream()),
                  (l.Rect = f),
                  l.hasAppearanceStream && !l.appearanceStreamContent)
                ) {
                  var h = I4(l)
                  c.push({ key: 'AP', value: '<</N ' + h + '>>' }), i.internal.acroformPlugin.xForms.push(h)
                }
                if (l.appearanceStreamContent) {
                  var g = ''
                  for (var v in l.appearanceStreamContent)
                    if (l.appearanceStreamContent.hasOwnProperty(v)) {
                      var p = l.appearanceStreamContent[v]
                      if (((g += '/' + v + ' '), (g += '<<'), Object.keys(p).length >= 1 || Array.isArray(p))) {
                        for (var s in p)
                          if (p.hasOwnProperty(s)) {
                            var b = p[s]
                            typeof b == 'function' && (b = b.call(i, l)),
                              (g += '/' + s + ' ' + b + ' '),
                              i.internal.acroformPlugin.xForms.indexOf(b) >= 0 || i.internal.acroformPlugin.xForms.push(b)
                          }
                      } else
                        typeof (b = p) == 'function' && (b = b.call(i, l)),
                          (g += '/' + s + ' ' + b),
                          i.internal.acroformPlugin.xForms.indexOf(b) >= 0 || i.internal.acroformPlugin.xForms.push(b)
                      g += '>>'
                    }
                  c.push({
                    key: 'AP',
                    value:
                      `<<
` +
                      g +
                      '>>'
                  })
                }
                i.internal.putStream({ additionalKeyValues: c, objectId: l.objId }), i.internal.out('endobj')
              }
            o && F4(i.internal.acroformPlugin.xForms, i)
          })(n, e)
        }),
        (e.internal.acroformPlugin.isInitialized = !0)
    }
  },
  E0 = (Kt.__acroform__.arrayToPdfArray = function (e, t, n) {
    var r = function (s) {
      return s
    }
    if (Array.isArray(e)) {
      for (var i = '[', o = 0; o < e.length; o++)
        switch ((o !== 0 && (i += ' '), Et(e[o]))) {
          case 'boolean':
          case 'number':
          case 'object':
            i += e[o].toString()
            break
          case 'string':
            e[o].substr(0, 1) !== '/'
              ? (t !== void 0 && n && (r = n.internal.getEncryptor(t)), (i += '(' + Fo(r(e[o].toString())) + ')'))
              : (i += e[o].toString())
        }
      return (i += ']')
    }
    throw new Error('Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray')
  }),
  Yu = function (e, t, n) {
    var r = function (i) {
      return i
    }
    return t !== void 0 && n && (r = n.internal.getEncryptor(t)), (e = e || '').toString(), (e = '(' + Fo(r(e)) + ')')
  },
  Yr = function () {
    ;(this._objId = void 0),
      (this._scope = void 0),
      Object.defineProperty(this, 'objId', {
        get: function () {
          if (this._objId === void 0) {
            if (this.scope === void 0) return
            this._objId = this.scope.internal.newObjectDeferred()
          }
          return this._objId
        },
        set: function (e) {
          this._objId = e
        }
      }),
      Object.defineProperty(this, 'scope', { value: this._scope, writable: !0 })
  }
;(Yr.prototype.toString = function () {
  return this.objId + ' 0 R'
}),
  (Yr.prototype.putStream = function () {
    var e = this.getKeyValueListForStream()
    this.scope.internal.putStream({ data: this.stream, additionalKeyValues: e, objectId: this.objId }), this.scope.internal.out('endobj')
  }),
  (Yr.prototype.getKeyValueListForStream = function () {
    var e = [],
      t = Object.getOwnPropertyNames(this).filter(function (o) {
        return o != 'content' && o != 'appearanceStreamContent' && o != 'scope' && o != 'objId' && o.substring(0, 1) != '_'
      })
    for (var n in t)
      if (Object.getOwnPropertyDescriptor(this, t[n]).configurable === !1) {
        var r = t[n],
          i = this[r]
        i &&
          (Array.isArray(i)
            ? e.push({ key: r, value: E0(i, this.objId, this.scope) })
            : i instanceof Yr
              ? ((i.scope = this.scope), e.push({ key: r, value: i.objId + ' 0 R' }))
              : typeof i != 'function' && e.push({ key: r, value: i }))
      }
    return e
  })
var T0 = function () {
  Yr.call(this),
    Object.defineProperty(this, 'Type', { value: '/XObject', configurable: !1, writable: !0 }),
    Object.defineProperty(this, 'Subtype', { value: '/Form', configurable: !1, writable: !0 }),
    Object.defineProperty(this, 'FormType', { value: 1, configurable: !1, writable: !0 })
  var e,
    t = []
  Object.defineProperty(this, 'BBox', {
    configurable: !1,
    get: function () {
      return t
    },
    set: function (n) {
      t = n
    }
  }),
    Object.defineProperty(this, 'Resources', { value: '2 0 R', configurable: !1, writable: !0 }),
    Object.defineProperty(this, 'stream', {
      enumerable: !1,
      configurable: !0,
      set: function (n) {
        e = n.trim()
      },
      get: function () {
        return e || null
      }
    })
}
Wn(T0, Yr)
var F0 = function () {
  Yr.call(this)
  var e,
    t = []
  Object.defineProperty(this, 'Kids', {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return t.length > 0 ? t : void 0
    }
  }),
    Object.defineProperty(this, 'Fields', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return t
      }
    }),
    Object.defineProperty(this, 'DA', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        if (e) {
          var n = function (r) {
            return r
          }
          return this.scope && (n = this.scope.internal.getEncryptor(this.objId)), '(' + Fo(n(e)) + ')'
        }
      },
      set: function (n) {
        e = n
      }
    })
}
Wn(F0, Yr)
var Or = function e() {
  Yr.call(this)
  var t = 4
  Object.defineProperty(this, 'F', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      return t
    },
    set: function (_) {
      if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute F supplied.')
      t = _
    }
  }),
    Object.defineProperty(this, 'showWhenPrinted', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(t, 3)
      },
      set: function (_) {
        _ ? (this.F = en(t, 3)) : (this.F = tn(t, 3))
      }
    })
  var n = 0
  Object.defineProperty(this, 'Ff', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      return n
    },
    set: function (_) {
      if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute Ff supplied.')
      n = _
    }
  })
  var r = []
  Object.defineProperty(this, 'Rect', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      if (r.length !== 0) return r
    },
    set: function (_) {
      r = _ !== void 0 ? _ : []
    }
  }),
    Object.defineProperty(this, 'x', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !r || isNaN(r[0]) ? 0 : r[0]
      },
      set: function (_) {
        r[0] = _
      }
    }),
    Object.defineProperty(this, 'y', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !r || isNaN(r[1]) ? 0 : r[1]
      },
      set: function (_) {
        r[1] = _
      }
    }),
    Object.defineProperty(this, 'width', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !r || isNaN(r[2]) ? 0 : r[2]
      },
      set: function (_) {
        r[2] = _
      }
    }),
    Object.defineProperty(this, 'height', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !r || isNaN(r[3]) ? 0 : r[3]
      },
      set: function (_) {
        r[3] = _
      }
    })
  var i = ''
  Object.defineProperty(this, 'FT', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return i
    },
    set: function (_) {
      switch (_) {
        case '/Btn':
        case '/Tx':
        case '/Ch':
        case '/Sig':
          i = _
          break
        default:
          throw new Error('Invalid value "' + _ + '" for attribute FT supplied.')
      }
    }
  })
  var o = null
  Object.defineProperty(this, 'T', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      if (!o || o.length < 1) {
        if (this instanceof uc) return
        o = 'FieldObject' + e.FieldNum++
      }
      var _ = function (x) {
        return x
      }
      return this.scope && (_ = this.scope.internal.getEncryptor(this.objId)), '(' + Fo(_(o)) + ')'
    },
    set: function (_) {
      o = _.toString()
    }
  }),
    Object.defineProperty(this, 'fieldName', {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return o
      },
      set: function (_) {
        o = _
      }
    })
  var s = 'helvetica'
  Object.defineProperty(this, 'fontName', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return s
    },
    set: function (_) {
      s = _
    }
  })
  var l = 'normal'
  Object.defineProperty(this, 'fontStyle', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return l
    },
    set: function (_) {
      l = _
    }
  })
  var c = 0
  Object.defineProperty(this, 'fontSize', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return c
    },
    set: function (_) {
      c = _
    }
  })
  var f = void 0
  Object.defineProperty(this, 'maxFontSize', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return f === void 0 ? 50 / vh : f
    },
    set: function (_) {
      f = _
    }
  })
  var h = 'black'
  Object.defineProperty(this, 'color', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return h
    },
    set: function (_) {
      h = _
    }
  })
  var g = '/F1 0 Tf 0 g'
  Object.defineProperty(this, 'DA', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      if (!(!g || this instanceof uc || this instanceof to)) return Yu(g, this.objId, this.scope)
    },
    set: function (_) {
      ;(_ = _.toString()), (g = _)
    }
  })
  var v = null
  Object.defineProperty(this, 'DV', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      if (v) return this instanceof hn ? v : Yu(v, this.objId, this.scope)
    },
    set: function (_) {
      ;(_ = _.toString()), (v = this instanceof hn ? _ : _.substr(0, 1) === '(' ? us(_.substr(1, _.length - 2)) : us(_))
    }
  }),
    Object.defineProperty(this, 'defaultValue', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this instanceof hn ? us(v.substr(1, v.length - 1)) : v
      },
      set: function (_) {
        ;(_ = _.toString()), (v = this instanceof hn ? '/' + _ : _)
      }
    })
  var p = null
  Object.defineProperty(this, '_V', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      if (p) return p
    },
    set: function (_) {
      this.V = _
    }
  }),
    Object.defineProperty(this, 'V', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        if (p) return this instanceof hn ? p : Yu(p, this.objId, this.scope)
      },
      set: function (_) {
        ;(_ = _.toString()), (p = this instanceof hn ? _ : _.substr(0, 1) === '(' ? us(_.substr(1, _.length - 2)) : us(_))
      }
    }),
    Object.defineProperty(this, 'value', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this instanceof hn ? us(p.substr(1, p.length - 1)) : p
      },
      set: function (_) {
        ;(_ = _.toString()), (p = this instanceof hn ? '/' + _ : _)
      }
    }),
    Object.defineProperty(this, 'hasAnnotation', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this.Rect
      }
    }),
    Object.defineProperty(this, 'Type', {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return this.hasAnnotation ? '/Annot' : null
      }
    }),
    Object.defineProperty(this, 'Subtype', {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return this.hasAnnotation ? '/Widget' : null
      }
    })
  var b,
    w = !1
  Object.defineProperty(this, 'hasAppearanceStream', {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return w
    },
    set: function (_) {
      ;(_ = !!_), (w = _)
    }
  }),
    Object.defineProperty(this, 'page', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        if (b) return b
      },
      set: function (_) {
        b = _
      }
    }),
    Object.defineProperty(this, 'readOnly', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 1)
      },
      set: function (_) {
        _ ? (this.Ff = en(this.Ff, 1)) : (this.Ff = tn(this.Ff, 1))
      }
    }),
    Object.defineProperty(this, 'required', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 2)
      },
      set: function (_) {
        _ ? (this.Ff = en(this.Ff, 2)) : (this.Ff = tn(this.Ff, 2))
      }
    }),
    Object.defineProperty(this, 'noExport', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 3)
      },
      set: function (_) {
        _ ? (this.Ff = en(this.Ff, 3)) : (this.Ff = tn(this.Ff, 3))
      }
    })
  var L = null
  Object.defineProperty(this, 'Q', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      if (L !== null) return L
    },
    set: function (_) {
      if ([0, 1, 2].indexOf(_) === -1) throw new Error('Invalid value "' + _ + '" for attribute Q supplied.')
      L = _
    }
  }),
    Object.defineProperty(this, 'textAlign', {
      get: function () {
        var _
        switch (L) {
          case 0:
          default:
            _ = 'left'
            break
          case 1:
            _ = 'center'
            break
          case 2:
            _ = 'right'
        }
        return _
      },
      configurable: !0,
      enumerable: !0,
      set: function (_) {
        switch (_) {
          case 'right':
          case 2:
            L = 2
            break
          case 'center':
          case 1:
            L = 1
            break
          case 'left':
          case 0:
          default:
            L = 0
        }
      }
    })
}
Wn(Or, Yr)
var Co = function () {
  Or.call(this), (this.FT = '/Ch'), (this.V = '()'), (this.fontName = 'zapfdingbats')
  var e = 0
  Object.defineProperty(this, 'TI', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return e
    },
    set: function (n) {
      e = n
    }
  }),
    Object.defineProperty(this, 'topIndex', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return e
      },
      set: function (n) {
        e = n
      }
    })
  var t = []
  Object.defineProperty(this, 'Opt', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return E0(t, this.objId, this.scope)
    },
    set: function (n) {
      var r, i
      ;(i = []),
        typeof (r = n) == 'string' &&
          (i = (function (o, s, l) {
            l || (l = 1)
            for (var c, f = []; (c = s.exec(o)); ) f.push(c[l])
            return f
          })(r, /\((.*?)\)/g)),
        (t = i)
    }
  }),
    (this.getOptions = function () {
      return t
    }),
    (this.setOptions = function (n) {
      ;(t = n), this.sort && t.sort()
    }),
    (this.addOption = function (n) {
      ;(n = (n = n || '').toString()), t.push(n), this.sort && t.sort()
    }),
    (this.removeOption = function (n, r) {
      for (r = r || !1, n = (n = n || '').toString(); t.indexOf(n) !== -1 && (t.splice(t.indexOf(n), 1), r !== !1); );
    }),
    Object.defineProperty(this, 'combo', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 18)
      },
      set: function (n) {
        n ? (this.Ff = en(this.Ff, 18)) : (this.Ff = tn(this.Ff, 18))
      }
    }),
    Object.defineProperty(this, 'edit', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 19)
      },
      set: function (n) {
        this.combo === !0 && (n ? (this.Ff = en(this.Ff, 19)) : (this.Ff = tn(this.Ff, 19)))
      }
    }),
    Object.defineProperty(this, 'sort', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 20)
      },
      set: function (n) {
        n ? ((this.Ff = en(this.Ff, 20)), t.sort()) : (this.Ff = tn(this.Ff, 20))
      }
    }),
    Object.defineProperty(this, 'multiSelect', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 22)
      },
      set: function (n) {
        n ? (this.Ff = en(this.Ff, 22)) : (this.Ff = tn(this.Ff, 22))
      }
    }),
    Object.defineProperty(this, 'doNotSpellCheck', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 23)
      },
      set: function (n) {
        n ? (this.Ff = en(this.Ff, 23)) : (this.Ff = tn(this.Ff, 23))
      }
    }),
    Object.defineProperty(this, 'commitOnSelChange', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 27)
      },
      set: function (n) {
        n ? (this.Ff = en(this.Ff, 27)) : (this.Ff = tn(this.Ff, 27))
      }
    }),
    (this.hasAppearanceStream = !1)
}
Wn(Co, Or)
var jo = function () {
  Co.call(this), (this.fontName = 'helvetica'), (this.combo = !1)
}
Wn(jo, Co)
var Io = function () {
  jo.call(this), (this.combo = !0)
}
Wn(Io, jo)
var Ca = function () {
  Io.call(this), (this.edit = !0)
}
Wn(Ca, Io)
var hn = function () {
  Or.call(this),
    (this.FT = '/Btn'),
    Object.defineProperty(this, 'noToggleToOff', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 15)
      },
      set: function (n) {
        n ? (this.Ff = en(this.Ff, 15)) : (this.Ff = tn(this.Ff, 15))
      }
    }),
    Object.defineProperty(this, 'radio', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 16)
      },
      set: function (n) {
        n ? (this.Ff = en(this.Ff, 16)) : (this.Ff = tn(this.Ff, 16))
      }
    }),
    Object.defineProperty(this, 'pushButton', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 17)
      },
      set: function (n) {
        n ? (this.Ff = en(this.Ff, 17)) : (this.Ff = tn(this.Ff, 17))
      }
    }),
    Object.defineProperty(this, 'radioIsUnison', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 26)
      },
      set: function (n) {
        n ? (this.Ff = en(this.Ff, 26)) : (this.Ff = tn(this.Ff, 26))
      }
    })
  var e,
    t = {}
  Object.defineProperty(this, 'MK', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      var n = function (o) {
        return o
      }
      if ((this.scope && (n = this.scope.internal.getEncryptor(this.objId)), Object.keys(t).length !== 0)) {
        var r,
          i = []
        for (r in (i.push('<<'), t)) i.push('/' + r + ' (' + Fo(n(t[r])) + ')')
        return (
          i.push('>>'),
          i.join(`
`)
        )
      }
    },
    set: function (n) {
      Et(n) === 'object' && (t = n)
    }
  }),
    Object.defineProperty(this, 'caption', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return t.CA || ''
      },
      set: function (n) {
        typeof n == 'string' && (t.CA = n)
      }
    }),
    Object.defineProperty(this, 'AS', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return e
      },
      set: function (n) {
        e = n
      }
    }),
    Object.defineProperty(this, 'appearanceState', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return e.substr(1, e.length - 1)
      },
      set: function (n) {
        e = '/' + n
      }
    })
}
Wn(hn, Or)
var ja = function () {
  hn.call(this), (this.pushButton = !0)
}
Wn(ja, hn)
var Eo = function () {
  hn.call(this), (this.radio = !0), (this.pushButton = !1)
  var e = []
  Object.defineProperty(this, 'Kids', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return e
    },
    set: function (t) {
      e = t !== void 0 ? t : []
    }
  })
}
Wn(Eo, hn)
var uc = function () {
  var e, t
  Or.call(this),
    Object.defineProperty(this, 'Parent', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return e
      },
      set: function (i) {
        e = i
      }
    }),
    Object.defineProperty(this, 'optionName', {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return t
      },
      set: function (i) {
        t = i
      }
    })
  var n,
    r = {}
  Object.defineProperty(this, 'MK', {
    enumerable: !1,
    configurable: !1,
    get: function () {
      var i = function (l) {
        return l
      }
      this.scope && (i = this.scope.internal.getEncryptor(this.objId))
      var o,
        s = []
      for (o in (s.push('<<'), r)) s.push('/' + o + ' (' + Fo(i(r[o])) + ')')
      return (
        s.push('>>'),
        s.join(`
`)
      )
    },
    set: function (i) {
      Et(i) === 'object' && (r = i)
    }
  }),
    Object.defineProperty(this, 'caption', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return r.CA || ''
      },
      set: function (i) {
        typeof i == 'string' && (r.CA = i)
      }
    }),
    Object.defineProperty(this, 'AS', {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return n
      },
      set: function (i) {
        n = i
      }
    }),
    Object.defineProperty(this, 'appearanceState', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return n.substr(1, n.length - 1)
      },
      set: function (i) {
        n = '/' + i
      }
    }),
    (this.caption = 'l'),
    (this.appearanceState = 'Off'),
    (this._AppearanceType = Ye.RadioButton.Circle),
    (this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName))
}
Wn(uc, Or),
  (Eo.prototype.setAppearance = function (e) {
    if (!('createAppearanceStream' in e) || !('getCA' in e)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!")
    for (var t in this.Kids)
      if (this.Kids.hasOwnProperty(t)) {
        var n = this.Kids[t]
        ;(n.appearanceStreamContent = e.createAppearanceStream(n.optionName)), (n.caption = e.getCA())
      }
  }),
  (Eo.prototype.createOption = function (e) {
    var t = new uc()
    return (t.Parent = this), (t.optionName = e), this.Kids.push(t), R4.call(this.scope, t), t
  })
var Ia = function () {
  hn.call(this),
    (this.fontName = 'zapfdingbats'),
    (this.caption = '3'),
    (this.appearanceState = 'On'),
    (this.value = 'On'),
    (this.textAlign = 'center'),
    (this.appearanceStreamContent = Ye.CheckBox.createAppearanceStream())
}
Wn(Ia, hn)
var to = function () {
  Or.call(this),
    (this.FT = '/Tx'),
    Object.defineProperty(this, 'multiline', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 13)
      },
      set: function (t) {
        t ? (this.Ff = en(this.Ff, 13)) : (this.Ff = tn(this.Ff, 13))
      }
    }),
    Object.defineProperty(this, 'fileSelect', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 21)
      },
      set: function (t) {
        t ? (this.Ff = en(this.Ff, 21)) : (this.Ff = tn(this.Ff, 21))
      }
    }),
    Object.defineProperty(this, 'doNotSpellCheck', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 23)
      },
      set: function (t) {
        t ? (this.Ff = en(this.Ff, 23)) : (this.Ff = tn(this.Ff, 23))
      }
    }),
    Object.defineProperty(this, 'doNotScroll', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 24)
      },
      set: function (t) {
        t ? (this.Ff = en(this.Ff, 24)) : (this.Ff = tn(this.Ff, 24))
      }
    }),
    Object.defineProperty(this, 'comb', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 25)
      },
      set: function (t) {
        t ? (this.Ff = en(this.Ff, 25)) : (this.Ff = tn(this.Ff, 25))
      }
    }),
    Object.defineProperty(this, 'richText', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 26)
      },
      set: function (t) {
        t ? (this.Ff = en(this.Ff, 26)) : (this.Ff = tn(this.Ff, 26))
      }
    })
  var e = null
  Object.defineProperty(this, 'MaxLen', {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return e
    },
    set: function (t) {
      e = t
    }
  }),
    Object.defineProperty(this, 'maxLength', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return e
      },
      set: function (t) {
        Number.isInteger(t) && (e = t)
      }
    }),
    Object.defineProperty(this, 'hasAppearanceStream', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this.V || this.DV
      }
    })
}
Wn(to, Or)
var Ea = function () {
  to.call(this),
    Object.defineProperty(this, 'password', {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Zt(this.Ff, 14)
      },
      set: function (e) {
        e ? (this.Ff = en(this.Ff, 14)) : (this.Ff = tn(this.Ff, 14))
      }
    }),
    (this.password = !0)
}
Wn(Ea, to)
var Ye = {
  CheckBox: {
    createAppearanceStream: function () {
      return { N: { On: Ye.CheckBox.YesNormal }, D: { On: Ye.CheckBox.YesPushDown, Off: Ye.CheckBox.OffPushDown } }
    },
    YesPushDown: function (e) {
      var t = Vr(e)
      t.scope = e.scope
      var n = [],
        r = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
        i = e.scope.__private__.encodeColorString(e.color),
        o = Ef(e, e.caption)
      return (
        n.push('0.749023 g'),
        n.push('0 0 ' + ct(Ye.internal.getWidth(e)) + ' ' + ct(Ye.internal.getHeight(e)) + ' re'),
        n.push('f'),
        n.push('BMC'),
        n.push('q'),
        n.push('0 0 1 rg'),
        n.push('/' + r + ' ' + ct(o.fontSize) + ' Tf ' + i),
        n.push('BT'),
        n.push(o.text),
        n.push('ET'),
        n.push('Q'),
        n.push('EMC'),
        (t.stream = n.join(`
`)),
        t
      )
    },
    YesNormal: function (e) {
      var t = Vr(e)
      t.scope = e.scope
      var n = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
        r = e.scope.__private__.encodeColorString(e.color),
        i = [],
        o = Ye.internal.getHeight(e),
        s = Ye.internal.getWidth(e),
        l = Ef(e, e.caption)
      return (
        i.push('1 g'),
        i.push('0 0 ' + ct(s) + ' ' + ct(o) + ' re'),
        i.push('f'),
        i.push('q'),
        i.push('0 0 1 rg'),
        i.push('0 0 ' + ct(s - 1) + ' ' + ct(o - 1) + ' re'),
        i.push('W'),
        i.push('n'),
        i.push('0 g'),
        i.push('BT'),
        i.push('/' + n + ' ' + ct(l.fontSize) + ' Tf ' + r),
        i.push(l.text),
        i.push('ET'),
        i.push('Q'),
        (t.stream = i.join(`
`)),
        t
      )
    },
    OffPushDown: function (e) {
      var t = Vr(e)
      t.scope = e.scope
      var n = []
      return (
        n.push('0.749023 g'),
        n.push('0 0 ' + ct(Ye.internal.getWidth(e)) + ' ' + ct(Ye.internal.getHeight(e)) + ' re'),
        n.push('f'),
        (t.stream = n.join(`
`)),
        t
      )
    }
  },
  RadioButton: {
    Circle: {
      createAppearanceStream: function (e) {
        var t = { D: { Off: Ye.RadioButton.Circle.OffPushDown }, N: {} }
        return (t.N[e] = Ye.RadioButton.Circle.YesNormal), (t.D[e] = Ye.RadioButton.Circle.YesPushDown), t
      },
      getCA: function () {
        return 'l'
      },
      YesNormal: function (e) {
        var t = Vr(e)
        t.scope = e.scope
        var n = [],
          r = Ye.internal.getWidth(e) <= Ye.internal.getHeight(e) ? Ye.internal.getWidth(e) / 4 : Ye.internal.getHeight(e) / 4
        r = Number((0.9 * r).toFixed(5))
        var i = Ye.internal.Bezier_C,
          o = Number((r * i).toFixed(5))
        return (
          n.push('q'),
          n.push('1 0 0 1 ' + Vi(Ye.internal.getWidth(e) / 2) + ' ' + Vi(Ye.internal.getHeight(e) / 2) + ' cm'),
          n.push(r + ' 0 m'),
          n.push(r + ' ' + o + ' ' + o + ' ' + r + ' 0 ' + r + ' c'),
          n.push('-' + o + ' ' + r + ' -' + r + ' ' + o + ' -' + r + ' 0 c'),
          n.push('-' + r + ' -' + o + ' -' + o + ' -' + r + ' 0 -' + r + ' c'),
          n.push(o + ' -' + r + ' ' + r + ' -' + o + ' ' + r + ' 0 c'),
          n.push('f'),
          n.push('Q'),
          (t.stream = n.join(`
`)),
          t
        )
      },
      YesPushDown: function (e) {
        var t = Vr(e)
        t.scope = e.scope
        var n = [],
          r = Ye.internal.getWidth(e) <= Ye.internal.getHeight(e) ? Ye.internal.getWidth(e) / 4 : Ye.internal.getHeight(e) / 4
        r = Number((0.9 * r).toFixed(5))
        var i = Number((2 * r).toFixed(5)),
          o = Number((i * Ye.internal.Bezier_C).toFixed(5)),
          s = Number((r * Ye.internal.Bezier_C).toFixed(5))
        return (
          n.push('0.749023 g'),
          n.push('q'),
          n.push('1 0 0 1 ' + Vi(Ye.internal.getWidth(e) / 2) + ' ' + Vi(Ye.internal.getHeight(e) / 2) + ' cm'),
          n.push(i + ' 0 m'),
          n.push(i + ' ' + o + ' ' + o + ' ' + i + ' 0 ' + i + ' c'),
          n.push('-' + o + ' ' + i + ' -' + i + ' ' + o + ' -' + i + ' 0 c'),
          n.push('-' + i + ' -' + o + ' -' + o + ' -' + i + ' 0 -' + i + ' c'),
          n.push(o + ' -' + i + ' ' + i + ' -' + o + ' ' + i + ' 0 c'),
          n.push('f'),
          n.push('Q'),
          n.push('0 g'),
          n.push('q'),
          n.push('1 0 0 1 ' + Vi(Ye.internal.getWidth(e) / 2) + ' ' + Vi(Ye.internal.getHeight(e) / 2) + ' cm'),
          n.push(r + ' 0 m'),
          n.push(r + ' ' + s + ' ' + s + ' ' + r + ' 0 ' + r + ' c'),
          n.push('-' + s + ' ' + r + ' -' + r + ' ' + s + ' -' + r + ' 0 c'),
          n.push('-' + r + ' -' + s + ' -' + s + ' -' + r + ' 0 -' + r + ' c'),
          n.push(s + ' -' + r + ' ' + r + ' -' + s + ' ' + r + ' 0 c'),
          n.push('f'),
          n.push('Q'),
          (t.stream = n.join(`
`)),
          t
        )
      },
      OffPushDown: function (e) {
        var t = Vr(e)
        t.scope = e.scope
        var n = [],
          r = Ye.internal.getWidth(e) <= Ye.internal.getHeight(e) ? Ye.internal.getWidth(e) / 4 : Ye.internal.getHeight(e) / 4
        r = Number((0.9 * r).toFixed(5))
        var i = Number((2 * r).toFixed(5)),
          o = Number((i * Ye.internal.Bezier_C).toFixed(5))
        return (
          n.push('0.749023 g'),
          n.push('q'),
          n.push('1 0 0 1 ' + Vi(Ye.internal.getWidth(e) / 2) + ' ' + Vi(Ye.internal.getHeight(e) / 2) + ' cm'),
          n.push(i + ' 0 m'),
          n.push(i + ' ' + o + ' ' + o + ' ' + i + ' 0 ' + i + ' c'),
          n.push('-' + o + ' ' + i + ' -' + i + ' ' + o + ' -' + i + ' 0 c'),
          n.push('-' + i + ' -' + o + ' -' + o + ' -' + i + ' 0 -' + i + ' c'),
          n.push(o + ' -' + i + ' ' + i + ' -' + o + ' ' + i + ' 0 c'),
          n.push('f'),
          n.push('Q'),
          (t.stream = n.join(`
`)),
          t
        )
      }
    },
    Cross: {
      createAppearanceStream: function (e) {
        var t = { D: { Off: Ye.RadioButton.Cross.OffPushDown }, N: {} }
        return (t.N[e] = Ye.RadioButton.Cross.YesNormal), (t.D[e] = Ye.RadioButton.Cross.YesPushDown), t
      },
      getCA: function () {
        return '8'
      },
      YesNormal: function (e) {
        var t = Vr(e)
        t.scope = e.scope
        var n = [],
          r = Ye.internal.calculateCross(e)
        return (
          n.push('q'),
          n.push('1 1 ' + ct(Ye.internal.getWidth(e) - 2) + ' ' + ct(Ye.internal.getHeight(e) - 2) + ' re'),
          n.push('W'),
          n.push('n'),
          n.push(ct(r.x1.x) + ' ' + ct(r.x1.y) + ' m'),
          n.push(ct(r.x2.x) + ' ' + ct(r.x2.y) + ' l'),
          n.push(ct(r.x4.x) + ' ' + ct(r.x4.y) + ' m'),
          n.push(ct(r.x3.x) + ' ' + ct(r.x3.y) + ' l'),
          n.push('s'),
          n.push('Q'),
          (t.stream = n.join(`
`)),
          t
        )
      },
      YesPushDown: function (e) {
        var t = Vr(e)
        t.scope = e.scope
        var n = Ye.internal.calculateCross(e),
          r = []
        return (
          r.push('0.749023 g'),
          r.push('0 0 ' + ct(Ye.internal.getWidth(e)) + ' ' + ct(Ye.internal.getHeight(e)) + ' re'),
          r.push('f'),
          r.push('q'),
          r.push('1 1 ' + ct(Ye.internal.getWidth(e) - 2) + ' ' + ct(Ye.internal.getHeight(e) - 2) + ' re'),
          r.push('W'),
          r.push('n'),
          r.push(ct(n.x1.x) + ' ' + ct(n.x1.y) + ' m'),
          r.push(ct(n.x2.x) + ' ' + ct(n.x2.y) + ' l'),
          r.push(ct(n.x4.x) + ' ' + ct(n.x4.y) + ' m'),
          r.push(ct(n.x3.x) + ' ' + ct(n.x3.y) + ' l'),
          r.push('s'),
          r.push('Q'),
          (t.stream = r.join(`
`)),
          t
        )
      },
      OffPushDown: function (e) {
        var t = Vr(e)
        t.scope = e.scope
        var n = []
        return (
          n.push('0.749023 g'),
          n.push('0 0 ' + ct(Ye.internal.getWidth(e)) + ' ' + ct(Ye.internal.getHeight(e)) + ' re'),
          n.push('f'),
          (t.stream = n.join(`
`)),
          t
        )
      }
    }
  },
  createDefaultAppearanceStream: function (e) {
    var t = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
      n = e.scope.__private__.encodeColorString(e.color)
    return '/' + t + ' ' + e.fontSize + ' Tf ' + n
  }
}
;(Ye.internal = {
  Bezier_C: 0.551915024494,
  calculateCross: function (e) {
    var t = Ye.internal.getWidth(e),
      n = Ye.internal.getHeight(e),
      r = Math.min(t, n)
    return {
      x1: { x: (t - r) / 2, y: (n - r) / 2 + r },
      x2: { x: (t - r) / 2 + r, y: (n - r) / 2 },
      x3: { x: (t - r) / 2, y: (n - r) / 2 },
      x4: { x: (t - r) / 2 + r, y: (n - r) / 2 + r }
    }
  }
}),
  (Ye.internal.getWidth = function (e) {
    var t = 0
    return Et(e) === 'object' && (t = wp(e.Rect[2])), t
  }),
  (Ye.internal.getHeight = function (e) {
    var t = 0
    return Et(e) === 'object' && (t = wp(e.Rect[3])), t
  })
var R4 = (Kt.addField = function (e) {
  if ((O4(this, e), !(e instanceof Or))) throw new Error('Invalid argument passed to jsPDF.addField.')
  var t
  return (
    (t = e).scope.internal.acroformPlugin.printedOut &&
      ((t.scope.internal.acroformPlugin.printedOut = !1), (t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null)),
    t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t),
    (e.page = e.scope.internal.getCurrentPageInfo().pageNumber),
    this
  )
})
;(Kt.AcroFormChoiceField = Co),
  (Kt.AcroFormListBox = jo),
  (Kt.AcroFormComboBox = Io),
  (Kt.AcroFormEditBox = Ca),
  (Kt.AcroFormButton = hn),
  (Kt.AcroFormPushButton = ja),
  (Kt.AcroFormRadioButton = Eo),
  (Kt.AcroFormCheckBox = Ia),
  (Kt.AcroFormTextField = to),
  (Kt.AcroFormPasswordField = Ea),
  (Kt.AcroFormAppearance = Ye),
  (Kt.AcroForm = {
    ChoiceField: Co,
    ListBox: jo,
    ComboBox: Io,
    EditBox: Ca,
    Button: hn,
    PushButton: ja,
    RadioButton: Eo,
    CheckBox: Ia,
    TextField: to,
    PasswordField: Ea,
    Appearance: Ye
  }),
  (rt.AcroForm = {
    ChoiceField: Co,
    ListBox: jo,
    ComboBox: Io,
    EditBox: Ca,
    Button: hn,
    PushButton: ja,
    RadioButton: Eo,
    CheckBox: Ia,
    TextField: to,
    PasswordField: Ea,
    Appearance: Ye
  })
var M4 = rt.AcroForm
function O0(e) {
  return e.reduce(function (t, n, r) {
    return (t[n] = r), t
  }, {})
}
;(function (e) {
  e.__addimage__ = {}
  var t = 'UNKNOWN',
    n = {
      PNG: [[137, 80, 78, 71]],
      TIFF: [
        [77, 77, 0, 42],
        [73, 73, 42, 0]
      ],
      JPEG: [
        [255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
        [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
        [255, 216, 255, 219],
        [255, 216, 255, 238]
      ],
      JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
      GIF87a: [[71, 73, 70, 56, 55, 97]],
      GIF89a: [[71, 73, 70, 56, 57, 97]],
      WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]],
      BMP: [
        [66, 77],
        [66, 65],
        [67, 73],
        [67, 80],
        [73, 67],
        [80, 84]
      ]
    },
    r = (e.__addimage__.getImageFileTypeByImageData = function (P, S) {
      var z,
        $,
        de,
        W,
        H,
        X = t
      if ((S = S || t) === 'RGBA' || (P.data !== void 0 && P.data instanceof Uint8ClampedArray && 'height' in P && 'width' in P)) return 'RGBA'
      if (U(P))
        for (H in n)
          for (de = n[H], z = 0; z < de.length; z += 1) {
            for (W = !0, $ = 0; $ < de[z].length; $ += 1)
              if (de[z][$] !== void 0 && de[z][$] !== P[$]) {
                W = !1
                break
              }
            if (W === !0) {
              X = H
              break
            }
          }
      else
        for (H in n)
          for (de = n[H], z = 0; z < de.length; z += 1) {
            for (W = !0, $ = 0; $ < de[z].length; $ += 1)
              if (de[z][$] !== void 0 && de[z][$] !== P.charCodeAt($)) {
                W = !1
                break
              }
            if (W === !0) {
              X = H
              break
            }
          }
      return X === t && S !== t && (X = S), X
    }),
    i = function P(S) {
      for (var z = this.internal.write, $ = this.internal.putStream, de = (0, this.internal.getFilters)(); de.indexOf('FlateEncode') !== -1; )
        de.splice(de.indexOf('FlateEncode'), 1)
      S.objectId = this.internal.newObject()
      var W = []
      if (
        (W.push({ key: 'Type', value: '/XObject' }),
        W.push({ key: 'Subtype', value: '/Image' }),
        W.push({ key: 'Width', value: S.width }),
        W.push({ key: 'Height', value: S.height }),
        S.colorSpace === L.INDEXED
          ? W.push({
              key: 'ColorSpace',
              value:
                '[/Indexed /DeviceRGB ' +
                (S.palette.length / 3 - 1) +
                ' ' +
                ('sMask' in S && S.sMask !== void 0 ? S.objectId + 2 : S.objectId + 1) +
                ' 0 R]'
            })
          : (W.push({ key: 'ColorSpace', value: '/' + S.colorSpace }),
            S.colorSpace === L.DEVICE_CMYK && W.push({ key: 'Decode', value: '[1 0 1 0 1 0 1 0]' })),
        W.push({ key: 'BitsPerComponent', value: S.bitsPerComponent }),
        'decodeParameters' in S && S.decodeParameters !== void 0 && W.push({ key: 'DecodeParms', value: '<<' + S.decodeParameters + '>>' }),
        'transparency' in S && Array.isArray(S.transparency))
      ) {
        for (var H = '', X = 0, ne = S.transparency.length; X < ne; X++) H += S.transparency[X] + ' ' + S.transparency[X] + ' '
        W.push({ key: 'Mask', value: '[' + H + ']' })
      }
      S.sMask !== void 0 && W.push({ key: 'SMask', value: S.objectId + 1 + ' 0 R' })
      var fe = S.filter !== void 0 ? ['/' + S.filter] : void 0
      if (
        ($({ data: S.data, additionalKeyValues: W, alreadyAppliedFilters: fe, objectId: S.objectId }), z('endobj'), 'sMask' in S && S.sMask !== void 0)
      ) {
        var xe = '/Predictor ' + S.predictor + ' /Colors 1 /BitsPerComponent ' + S.bitsPerComponent + ' /Columns ' + S.width,
          A = { width: S.width, height: S.height, colorSpace: 'DeviceGray', bitsPerComponent: S.bitsPerComponent, decodeParameters: xe, data: S.sMask }
        'filter' in S && (A.filter = S.filter), P.call(this, A)
      }
      if (S.colorSpace === L.INDEXED) {
        var B = this.internal.newObject()
        $({ data: N(new Uint8Array(S.palette)), objectId: B }), z('endobj')
      }
    },
    o = function () {
      var P = this.internal.collections.addImage_images
      for (var S in P) i.call(this, P[S])
    },
    s = function () {
      var P,
        S = this.internal.collections.addImage_images,
        z = this.internal.write
      for (var $ in S) z('/I' + (P = S[$]).index, P.objectId, '0', 'R')
    },
    l = function () {
      this.internal.collections.addImage_images ||
        ((this.internal.collections.addImage_images = {}),
        this.internal.events.subscribe('putResources', o),
        this.internal.events.subscribe('putXobjectDict', s))
    },
    c = function () {
      var P = this.internal.collections.addImage_images
      return l.call(this), P
    },
    f = function () {
      return Object.keys(this.internal.collections.addImage_images).length
    },
    h = function (P) {
      return typeof e['process' + P.toUpperCase()] == 'function'
    },
    g = function (P) {
      return Et(P) === 'object' && P.nodeType === 1
    },
    v = function (P, S) {
      if (P.nodeName === 'IMG' && P.hasAttribute('src')) {
        var z = '' + P.getAttribute('src')
        if (z.indexOf('data:image/') === 0) return Pa(unescape(z).split('base64,').pop())
        var $ = e.loadFile(z, !0)
        if ($ !== void 0) return $
      }
      if (P.nodeName === 'CANVAS') {
        if (P.width === 0 || P.height === 0) throw new Error('Given canvas must have data. Canvas width: ' + P.width + ', height: ' + P.height)
        var de
        switch (S) {
          case 'PNG':
            de = 'image/png'
            break
          case 'WEBP':
            de = 'image/webp'
            break
          case 'JPEG':
          case 'JPG':
          default:
            de = 'image/jpeg'
        }
        return Pa(P.toDataURL(de, 1).split('base64,').pop())
      }
    },
    p = function (P) {
      var S = this.internal.collections.addImage_images
      if (S) {
        for (var z in S) if (P === S[z].alias) return S[z]
      }
    },
    b = function (P, S, z) {
      return (
        P || S || ((P = -96), (S = -96)),
        P < 0 && (P = (-1 * z.width * 72) / P / this.internal.scaleFactor),
        S < 0 && (S = (-1 * z.height * 72) / S / this.internal.scaleFactor),
        P === 0 && (P = (S * z.width) / z.height),
        S === 0 && (S = (P * z.height) / z.width),
        [P, S]
      )
    },
    w = function (P, S, z, $, de, W) {
      var H = b.call(this, z, $, de),
        X = this.internal.getCoordinateString,
        ne = this.internal.getVerticalCoordinateString,
        fe = c.call(this)
      if (((z = H[0]), ($ = H[1]), (fe[de.index] = de), W)) {
        W *= Math.PI / 180
        var xe = Math.cos(W),
          A = Math.sin(W),
          B = function (ee) {
            return ee.toFixed(4)
          },
          G = [B(xe), B(A), B(-1 * A), B(xe), 0, 0, 'cm']
      }
      this.internal.write('q'),
        W
          ? (this.internal.write([1, '0', '0', 1, X(P), ne(S + $), 'cm'].join(' ')),
            this.internal.write(G.join(' ')),
            this.internal.write([X(z), '0', '0', X($), '0', '0', 'cm'].join(' ')))
          : this.internal.write([X(z), '0', '0', X($), X(P), ne(S + $), 'cm'].join(' ')),
        this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, 'cm'].join(' ')),
        this.internal.write('/I' + de.index + ' Do'),
        this.internal.write('Q')
    },
    L = (e.color_spaces = {
      DEVICE_RGB: 'DeviceRGB',
      DEVICE_GRAY: 'DeviceGray',
      DEVICE_CMYK: 'DeviceCMYK',
      CAL_GREY: 'CalGray',
      CAL_RGB: 'CalRGB',
      LAB: 'Lab',
      ICC_BASED: 'ICCBased',
      INDEXED: 'Indexed',
      PATTERN: 'Pattern',
      SEPARATION: 'Separation',
      DEVICE_N: 'DeviceN'
    })
  e.decode = {
    DCT_DECODE: 'DCTDecode',
    FLATE_DECODE: 'FlateDecode',
    LZW_DECODE: 'LZWDecode',
    JPX_DECODE: 'JPXDecode',
    JBIG2_DECODE: 'JBIG2Decode',
    ASCII85_DECODE: 'ASCII85Decode',
    ASCII_HEX_DECODE: 'ASCIIHexDecode',
    RUN_LENGTH_DECODE: 'RunLengthDecode',
    CCITT_FAX_DECODE: 'CCITTFaxDecode'
  }
  var _ = (e.image_compression = { NONE: 'NONE', FAST: 'FAST', MEDIUM: 'MEDIUM', SLOW: 'SLOW' }),
    x = (e.__addimage__.sHashCode = function (P) {
      var S,
        z,
        $ = 0
      if (typeof P == 'string') for (z = P.length, S = 0; S < z; S++) ($ = ($ << 5) - $ + P.charCodeAt(S)), ($ |= 0)
      else if (U(P)) for (z = P.byteLength / 2, S = 0; S < z; S++) ($ = ($ << 5) - $ + P[S]), ($ |= 0)
      return $
    }),
    k = (e.__addimage__.validateStringAsBase64 = function (P) {
      ;(P = P || '').toString().trim()
      var S = !0
      return (
        P.length === 0 && (S = !1),
        P.length % 4 != 0 && (S = !1),
        /^[A-Za-z0-9+/]+$/.test(P.substr(0, P.length - 2)) === !1 && (S = !1),
        /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(P.substr(-2)) === !1 && (S = !1),
        S
      )
    }),
    C = (e.__addimage__.extractImageFromDataUrl = function (P) {
      var S = (P = P || '').split('base64,'),
        z = null
      if (S.length === 2) {
        var $ = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(S[0])
        Array.isArray($) && (z = { mimeType: $[1], charset: $[2], data: S[1] })
      }
      return z
    }),
    D = (e.__addimage__.supportsArrayBuffer = function () {
      return typeof ArrayBuffer < 'u' && typeof Uint8Array < 'u'
    })
  e.__addimage__.isArrayBuffer = function (P) {
    return D() && P instanceof ArrayBuffer
  }
  var U = (e.__addimage__.isArrayBufferView = function (P) {
      return (
        D() &&
        typeof Uint32Array < 'u' &&
        (P instanceof Int8Array ||
          P instanceof Uint8Array ||
          (typeof Uint8ClampedArray < 'u' && P instanceof Uint8ClampedArray) ||
          P instanceof Int16Array ||
          P instanceof Uint16Array ||
          P instanceof Int32Array ||
          P instanceof Uint32Array ||
          P instanceof Float32Array ||
          P instanceof Float64Array)
      )
    }),
    E = (e.__addimage__.binaryStringToUint8Array = function (P) {
      for (var S = P.length, z = new Uint8Array(S), $ = 0; $ < S; $++) z[$] = P.charCodeAt($)
      return z
    }),
    N = (e.__addimage__.arrayBufferToBinaryString = function (P) {
      for (var S = '', z = U(P) ? P : new Uint8Array(P), $ = 0; $ < z.length; $ += 8192) S += String.fromCharCode.apply(null, z.subarray($, $ + 8192))
      return S
    })
  e.addImage = function () {
    var P, S, z, $, de, W, H, X, ne
    if (
      (typeof arguments[1] == 'number'
        ? ((S = t),
          (z = arguments[1]),
          ($ = arguments[2]),
          (de = arguments[3]),
          (W = arguments[4]),
          (H = arguments[5]),
          (X = arguments[6]),
          (ne = arguments[7]))
        : ((S = arguments[1]),
          (z = arguments[2]),
          ($ = arguments[3]),
          (de = arguments[4]),
          (W = arguments[5]),
          (H = arguments[6]),
          (X = arguments[7]),
          (ne = arguments[8])),
      Et((P = arguments[0])) === 'object' && !g(P) && 'imageData' in P)
    ) {
      var fe = P
      ;(P = fe.imageData),
        (S = fe.format || S || t),
        (z = fe.x || z || 0),
        ($ = fe.y || $ || 0),
        (de = fe.w || fe.width || de),
        (W = fe.h || fe.height || W),
        (H = fe.alias || H),
        (X = fe.compression || X),
        (ne = fe.rotation || fe.angle || ne)
    }
    var xe = this.internal.getFilters()
    if ((X === void 0 && xe.indexOf('FlateEncode') !== -1 && (X = 'SLOW'), isNaN(z) || isNaN($)))
      throw new Error('Invalid coordinates passed to jsPDF.addImage')
    l.call(this)
    var A = V.call(this, P, S, H, X)
    return w.call(this, z, $, de, W, A, ne), this
  }
  var V = function (P, S, z, $) {
      var de, W, H
      if (typeof P == 'string' && r(P) === t) {
        P = unescape(P)
        var X = Q(P, !1)
        ;(X !== '' || (X = e.loadFile(P, !0)) !== void 0) && (P = X)
      }
      if ((g(P) && (P = v(P, S)), (S = r(P, S)), !h(S)))
        throw new Error("addImage does not support files of type '" + S + "', please ensure that a plugin for '" + S + "' support is added.")
      if (
        (((H = z) == null || H.length === 0) &&
          (z = (function (ne) {
            return typeof ne == 'string' || U(ne) ? x(ne) : U(ne.data) ? x(ne.data) : null
          })(P)),
        (de = p.call(this, z)) ||
          (D() && (P instanceof Uint8Array || S === 'RGBA' || ((W = P), (P = E(P)))),
          (de = this['process' + S.toUpperCase()](
            P,
            f.call(this),
            z,
            (function (ne) {
              return ne && typeof ne == 'string' && (ne = ne.toUpperCase()), ne in e.image_compression ? ne : _.NONE
            })($),
            W
          ))),
        !de)
      )
        throw new Error('An unknown error occurred whilst processing the image.')
      return de
    },
    Q = (e.__addimage__.convertBase64ToBinaryString = function (P, S) {
      var z
      S = typeof S != 'boolean' || S
      var $,
        de = ''
      if (typeof P == 'string') {
        $ = (z = C(P)) !== null ? z.data : P
        try {
          de = Pa($)
        } catch (W) {
          if (S)
            throw k($)
              ? new Error('atob-Error in jsPDF.convertBase64ToBinaryString ' + W.message)
              : new Error('Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ')
        }
      }
      return de
    })
  e.getImageProperties = function (P) {
    var S,
      z,
      $ = ''
    if ((g(P) && (P = v(P)), typeof P == 'string' && r(P) === t && (($ = Q(P, !1)) === '' && ($ = e.loadFile(P) || ''), (P = $)), (z = r(P)), !h(z)))
      throw new Error("addImage does not support files of type '" + z + "', please ensure that a plugin for '" + z + "' support is added.")
    if ((!D() || P instanceof Uint8Array || (P = E(P)), !(S = this['process' + z.toUpperCase()](P))))
      throw new Error('An unknown error occurred whilst processing the image')
    return (S.fileType = z), S
  }
})(rt.API),
  (function (e) {
    var t = function (n) {
      if (n !== void 0 && n != '') return !0
    }
    rt.API.events.push([
      'addPage',
      function (n) {
        this.internal.getPageInfo(n.pageNumber).pageContext.annotations = []
      }
    ]),
      e.events.push([
        'putPage',
        function (n) {
          for (
            var r,
              i,
              o,
              s = this.internal.getCoordinateString,
              l = this.internal.getVerticalCoordinateString,
              c = this.internal.getPageInfoByObjId(n.objId),
              f = n.pageContext.annotations,
              h = !1,
              g = 0;
            g < f.length && !h;
            g++
          )
            switch ((r = f[g]).type) {
              case 'link':
                ;(t(r.options.url) || t(r.options.pageNumber)) && (h = !0)
                break
              case 'reference':
              case 'text':
              case 'freetext':
                h = !0
            }
          if (h != 0) {
            this.internal.write('/Annots [')
            for (var v = 0; v < f.length; v++) {
              r = f[v]
              var p = this.internal.pdfEscape,
                b = this.internal.getEncryptor(n.objId)
              switch (r.type) {
                case 'reference':
                  this.internal.write(' ' + r.object.objId + ' 0 R ')
                  break
                case 'text':
                  var w = this.internal.newAdditionalObject(),
                    L = this.internal.newAdditionalObject(),
                    _ = this.internal.getEncryptor(w.objId),
                    x = r.title || 'Note'
                  ;(o =
                    '<</Type /Annot /Subtype /Text ' +
                    (i = '/Rect [' + s(r.bounds.x) + ' ' + l(r.bounds.y + r.bounds.h) + ' ' + s(r.bounds.x + r.bounds.w) + ' ' + l(r.bounds.y) + '] ') +
                    '/Contents (' +
                    p(_(r.contents)) +
                    ')'),
                    (o += ' /Popup ' + L.objId + ' 0 R'),
                    (o += ' /P ' + c.objId + ' 0 R'),
                    (o += ' /T (' + p(_(x)) + ') >>'),
                    (w.content = o)
                  var k = w.objId + ' 0 R'
                  ;(o =
                    '<</Type /Annot /Subtype /Popup ' +
                    (i =
                      '/Rect [' +
                      s(r.bounds.x + 30) +
                      ' ' +
                      l(r.bounds.y + r.bounds.h) +
                      ' ' +
                      s(r.bounds.x + r.bounds.w + 30) +
                      ' ' +
                      l(r.bounds.y) +
                      '] ') +
                    ' /Parent ' +
                    k),
                    r.open && (o += ' /Open true'),
                    (o += ' >>'),
                    (L.content = o),
                    this.internal.write(w.objId, '0 R', L.objId, '0 R')
                  break
                case 'freetext':
                  i = '/Rect [' + s(r.bounds.x) + ' ' + l(r.bounds.y) + ' ' + s(r.bounds.x + r.bounds.w) + ' ' + l(r.bounds.y + r.bounds.h) + '] '
                  var C = r.color || '#000000'
                  ;(o = '<</Type /Annot /Subtype /FreeText ' + i + '/Contents (' + p(b(r.contents)) + ')'),
                    (o += ' /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#' + C + ')'),
                    (o += ' /Border [0 0 0]'),
                    (o += ' >>'),
                    this.internal.write(o)
                  break
                case 'link':
                  if (r.options.name) {
                    var D = this.annotations._nameMap[r.options.name]
                    ;(r.options.pageNumber = D.page), (r.options.top = D.y)
                  } else r.options.top || (r.options.top = 0)
                  if (
                    ((i = '/Rect [' + r.finalBounds.x + ' ' + r.finalBounds.y + ' ' + r.finalBounds.w + ' ' + r.finalBounds.h + '] '),
                    (o = ''),
                    r.options.url)
                  )
                    o = '<</Type /Annot /Subtype /Link ' + i + '/Border [0 0 0] /A <</S /URI /URI (' + p(b(r.options.url)) + ') >>'
                  else if (r.options.pageNumber)
                    switch (
                      ((o =
                        '<</Type /Annot /Subtype /Link ' +
                        i +
                        '/Border [0 0 0] /Dest [' +
                        this.internal.getPageInfo(r.options.pageNumber).objId +
                        ' 0 R'),
                      (r.options.magFactor = r.options.magFactor || 'XYZ'),
                      r.options.magFactor)
                    ) {
                      case 'Fit':
                        o += ' /Fit]'
                        break
                      case 'FitH':
                        o += ' /FitH ' + r.options.top + ']'
                        break
                      case 'FitV':
                        ;(r.options.left = r.options.left || 0), (o += ' /FitV ' + r.options.left + ']')
                        break
                      case 'XYZ':
                      default:
                        var U = l(r.options.top)
                        ;(r.options.left = r.options.left || 0),
                          r.options.zoom === void 0 && (r.options.zoom = 0),
                          (o += ' /XYZ ' + r.options.left + ' ' + U + ' ' + r.options.zoom + ']')
                    }
                  o != '' && ((o += ' >>'), this.internal.write(o))
              }
            }
            this.internal.write(']')
          }
        }
      ]),
      (e.createAnnotation = function (n) {
        var r = this.internal.getCurrentPageInfo()
        switch (n.type) {
          case 'link':
            this.link(n.bounds.x, n.bounds.y, n.bounds.w, n.bounds.h, n)
            break
          case 'text':
          case 'freetext':
            r.pageContext.annotations.push(n)
        }
      }),
      (e.link = function (n, r, i, o, s) {
        var l = this.internal.getCurrentPageInfo(),
          c = this.internal.getCoordinateString,
          f = this.internal.getVerticalCoordinateString
        l.pageContext.annotations.push({ finalBounds: { x: c(n), y: f(r), w: c(n + i), h: f(r + o) }, options: s, type: 'link' })
      }),
      (e.textWithLink = function (n, r, i, o) {
        var s,
          l,
          c = this.getTextWidth(n),
          f = this.internal.getLineHeight() / this.internal.scaleFactor
        if (o.maxWidth !== void 0) {
          l = o.maxWidth
          var h = this.splitTextToSize(n, l).length
          s = Math.ceil(f * h)
        } else (l = c), (s = f)
        return (
          this.text(n, r, i, o), (i += 0.2 * f), o.align === 'center' && (r -= c / 2), o.align === 'right' && (r -= c), this.link(r, i - f, l, s, o), c
        )
      }),
      (e.getTextWidth = function (n) {
        var r = this.internal.getFontSize()
        return (this.getStringUnitWidth(n) * r) / this.internal.scaleFactor
      })
  })(rt.API),
  (function (e) {
    var t = {
        1569: [65152],
        1570: [65153, 65154],
        1571: [65155, 65156],
        1572: [65157, 65158],
        1573: [65159, 65160],
        1574: [65161, 65162, 65163, 65164],
        1575: [65165, 65166],
        1576: [65167, 65168, 65169, 65170],
        1577: [65171, 65172],
        1578: [65173, 65174, 65175, 65176],
        1579: [65177, 65178, 65179, 65180],
        1580: [65181, 65182, 65183, 65184],
        1581: [65185, 65186, 65187, 65188],
        1582: [65189, 65190, 65191, 65192],
        1583: [65193, 65194],
        1584: [65195, 65196],
        1585: [65197, 65198],
        1586: [65199, 65200],
        1587: [65201, 65202, 65203, 65204],
        1588: [65205, 65206, 65207, 65208],
        1589: [65209, 65210, 65211, 65212],
        1590: [65213, 65214, 65215, 65216],
        1591: [65217, 65218, 65219, 65220],
        1592: [65221, 65222, 65223, 65224],
        1593: [65225, 65226, 65227, 65228],
        1594: [65229, 65230, 65231, 65232],
        1601: [65233, 65234, 65235, 65236],
        1602: [65237, 65238, 65239, 65240],
        1603: [65241, 65242, 65243, 65244],
        1604: [65245, 65246, 65247, 65248],
        1605: [65249, 65250, 65251, 65252],
        1606: [65253, 65254, 65255, 65256],
        1607: [65257, 65258, 65259, 65260],
        1608: [65261, 65262],
        1609: [65263, 65264, 64488, 64489],
        1610: [65265, 65266, 65267, 65268],
        1649: [64336, 64337],
        1655: [64477],
        1657: [64358, 64359, 64360, 64361],
        1658: [64350, 64351, 64352, 64353],
        1659: [64338, 64339, 64340, 64341],
        1662: [64342, 64343, 64344, 64345],
        1663: [64354, 64355, 64356, 64357],
        1664: [64346, 64347, 64348, 64349],
        1667: [64374, 64375, 64376, 64377],
        1668: [64370, 64371, 64372, 64373],
        1670: [64378, 64379, 64380, 64381],
        1671: [64382, 64383, 64384, 64385],
        1672: [64392, 64393],
        1676: [64388, 64389],
        1677: [64386, 64387],
        1678: [64390, 64391],
        1681: [64396, 64397],
        1688: [64394, 64395],
        1700: [64362, 64363, 64364, 64365],
        1702: [64366, 64367, 64368, 64369],
        1705: [64398, 64399, 64400, 64401],
        1709: [64467, 64468, 64469, 64470],
        1711: [64402, 64403, 64404, 64405],
        1713: [64410, 64411, 64412, 64413],
        1715: [64406, 64407, 64408, 64409],
        1722: [64414, 64415],
        1723: [64416, 64417, 64418, 64419],
        1726: [64426, 64427, 64428, 64429],
        1728: [64420, 64421],
        1729: [64422, 64423, 64424, 64425],
        1733: [64480, 64481],
        1734: [64473, 64474],
        1735: [64471, 64472],
        1736: [64475, 64476],
        1737: [64482, 64483],
        1739: [64478, 64479],
        1740: [64508, 64509, 64510, 64511],
        1744: [64484, 64485, 64486, 64487],
        1746: [64430, 64431],
        1747: [64432, 64433]
      },
      n = {
        65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 },
        65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 },
        65165: { 65247: { 65248: { 65258: 65010 } } },
        1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }
      },
      r = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 },
      i = [1570, 1571, 1573, 1575]
    e.__arabicParser__ = {}
    var o = (e.__arabicParser__.isInArabicSubstitutionA = function (w) {
        return t[w.charCodeAt(0)] !== void 0
      }),
      s = (e.__arabicParser__.isArabicLetter = function (w) {
        return typeof w == 'string' && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(w)
      }),
      l = (e.__arabicParser__.isArabicEndLetter = function (w) {
        return s(w) && o(w) && t[w.charCodeAt(0)].length <= 2
      }),
      c = (e.__arabicParser__.isArabicAlfLetter = function (w) {
        return s(w) && i.indexOf(w.charCodeAt(0)) >= 0
      })
    e.__arabicParser__.arabicLetterHasIsolatedForm = function (w) {
      return s(w) && o(w) && t[w.charCodeAt(0)].length >= 1
    }
    var f = (e.__arabicParser__.arabicLetterHasFinalForm = function (w) {
      return s(w) && o(w) && t[w.charCodeAt(0)].length >= 2
    })
    e.__arabicParser__.arabicLetterHasInitialForm = function (w) {
      return s(w) && o(w) && t[w.charCodeAt(0)].length >= 3
    }
    var h = (e.__arabicParser__.arabicLetterHasMedialForm = function (w) {
        return s(w) && o(w) && t[w.charCodeAt(0)].length == 4
      }),
      g = (e.__arabicParser__.resolveLigatures = function (w) {
        var L = 0,
          _ = n,
          x = '',
          k = 0
        for (L = 0; L < w.length; L += 1)
          _[w.charCodeAt(L)] !== void 0
            ? (k++,
              typeof (_ = _[w.charCodeAt(L)]) == 'number' && ((x += String.fromCharCode(_)), (_ = n), (k = 0)),
              L === w.length - 1 && ((_ = n), (x += w.charAt(L - (k - 1))), (L -= k - 1), (k = 0)))
            : ((_ = n), (x += w.charAt(L - k)), (L -= k), (k = 0))
        return x
      })
    e.__arabicParser__.isArabicDiacritic = function (w) {
      return w !== void 0 && r[w.charCodeAt(0)] !== void 0
    }
    var v = (e.__arabicParser__.getCorrectForm = function (w, L, _) {
        return s(w)
          ? o(w) === !1
            ? -1
            : !f(w) || (!s(L) && !s(_)) || (!s(_) && l(L)) || (l(w) && !s(L)) || (l(w) && c(L)) || (l(w) && l(L))
              ? 0
              : h(w) && s(L) && !l(L) && s(_) && f(_)
                ? 3
                : l(w) || !s(_)
                  ? 1
                  : 2
          : -1
      }),
      p = function (w) {
        var L = 0,
          _ = 0,
          x = 0,
          k = '',
          C = '',
          D = '',
          U = (w = w || '').split('\\s+'),
          E = []
        for (L = 0; L < U.length; L += 1) {
          for (E.push(''), _ = 0; _ < U[L].length; _ += 1)
            (k = U[L][_]),
              (C = U[L][_ - 1]),
              (D = U[L][_ + 1]),
              s(k) ? ((x = v(k, C, D)), (E[L] += x !== -1 ? String.fromCharCode(t[k.charCodeAt(0)][x]) : k)) : (E[L] += k)
          E[L] = g(E[L])
        }
        return E.join(' ')
      },
      b =
        (e.__arabicParser__.processArabic =
        e.processArabic =
          function () {
            var w,
              L = typeof arguments[0] == 'string' ? arguments[0] : arguments[0].text,
              _ = []
            if (Array.isArray(L)) {
              var x = 0
              for (_ = [], x = 0; x < L.length; x += 1) Array.isArray(L[x]) ? _.push([p(L[x][0]), L[x][1], L[x][2]]) : _.push([p(L[x])])
              w = _
            } else w = p(L)
            return typeof arguments[0] == 'string' ? w : ((arguments[0].text = w), arguments[0])
          })
    e.events.push(['preProcessText', b])
  })(rt.API),
  (rt.API.autoPrint = function (e) {
    var t
    switch ((((e = e || {}).variant = e.variant || 'non-conform'), e.variant)) {
      case 'javascript':
        this.addJS('print({});')
        break
      case 'non-conform':
      default:
        this.internal.events.subscribe('postPutResources', function () {
          ;(t = this.internal.newObject()),
            this.internal.out('<<'),
            this.internal.out('/S /Named'),
            this.internal.out('/Type /Action'),
            this.internal.out('/N /Print'),
            this.internal.out('>>'),
            this.internal.out('endobj')
        }),
          this.internal.events.subscribe('putCatalog', function () {
            this.internal.out('/OpenAction ' + t + ' 0 R')
          })
    }
    return this
  }),
  (function (e) {
    var t = function () {
      var n = void 0
      Object.defineProperty(this, 'pdf', {
        get: function () {
          return n
        },
        set: function (l) {
          n = l
        }
      })
      var r = 150
      Object.defineProperty(this, 'width', {
        get: function () {
          return r
        },
        set: function (l) {
          ;(r = isNaN(l) || Number.isInteger(l) === !1 || l < 0 ? 150 : l),
            this.getContext('2d').pageWrapXEnabled && (this.getContext('2d').pageWrapX = r + 1)
        }
      })
      var i = 300
      Object.defineProperty(this, 'height', {
        get: function () {
          return i
        },
        set: function (l) {
          ;(i = isNaN(l) || Number.isInteger(l) === !1 || l < 0 ? 300 : l),
            this.getContext('2d').pageWrapYEnabled && (this.getContext('2d').pageWrapY = i + 1)
        }
      })
      var o = []
      Object.defineProperty(this, 'childNodes', {
        get: function () {
          return o
        },
        set: function (l) {
          o = l
        }
      })
      var s = {}
      Object.defineProperty(this, 'style', {
        get: function () {
          return s
        },
        set: function (l) {
          s = l
        }
      }),
        Object.defineProperty(this, 'parentNode', {})
    }
    ;(t.prototype.getContext = function (n, r) {
      var i
      if ((n = n || '2d') !== '2d') return null
      for (i in r) this.pdf.context2d.hasOwnProperty(i) && (this.pdf.context2d[i] = r[i])
      return (this.pdf.context2d._canvas = this), this.pdf.context2d
    }),
      (t.prototype.toDataURL = function () {
        throw new Error('toDataURL is not implemented.')
      }),
      e.events.push([
        'initialized',
        function () {
          ;(this.canvas = new t()), (this.canvas.pdf = this)
        }
      ])
  })(rt.API),
  (function (e) {
    var t = { left: 0, top: 0, bottom: 0, right: 0 },
      n = !1,
      r = function () {
        this.internal.__cell__ === void 0 &&
          ((this.internal.__cell__ = {}),
          (this.internal.__cell__.padding = 3),
          (this.internal.__cell__.headerFunction = void 0),
          (this.internal.__cell__.margins = Object.assign({}, t)),
          (this.internal.__cell__.margins.width = this.getPageWidth()),
          i.call(this))
      },
      i = function () {
        ;(this.internal.__cell__.lastCell = new o()), (this.internal.__cell__.pages = 1)
      },
      o = function () {
        var c = arguments[0]
        Object.defineProperty(this, 'x', {
          enumerable: !0,
          get: function () {
            return c
          },
          set: function (w) {
            c = w
          }
        })
        var f = arguments[1]
        Object.defineProperty(this, 'y', {
          enumerable: !0,
          get: function () {
            return f
          },
          set: function (w) {
            f = w
          }
        })
        var h = arguments[2]
        Object.defineProperty(this, 'width', {
          enumerable: !0,
          get: function () {
            return h
          },
          set: function (w) {
            h = w
          }
        })
        var g = arguments[3]
        Object.defineProperty(this, 'height', {
          enumerable: !0,
          get: function () {
            return g
          },
          set: function (w) {
            g = w
          }
        })
        var v = arguments[4]
        Object.defineProperty(this, 'text', {
          enumerable: !0,
          get: function () {
            return v
          },
          set: function (w) {
            v = w
          }
        })
        var p = arguments[5]
        Object.defineProperty(this, 'lineNumber', {
          enumerable: !0,
          get: function () {
            return p
          },
          set: function (w) {
            p = w
          }
        })
        var b = arguments[6]
        return (
          Object.defineProperty(this, 'align', {
            enumerable: !0,
            get: function () {
              return b
            },
            set: function (w) {
              b = w
            }
          }),
          this
        )
      }
    ;(o.prototype.clone = function () {
      return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align)
    }),
      (o.prototype.toArray = function () {
        return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align]
      }),
      (e.setHeaderFunction = function (c) {
        return r.call(this), (this.internal.__cell__.headerFunction = typeof c == 'function' ? c : void 0), this
      }),
      (e.getTextDimensions = function (c, f) {
        r.call(this)
        var h = (f = f || {}).fontSize || this.getFontSize(),
          g = f.font || this.getFont(),
          v = f.scaleFactor || this.internal.scaleFactor,
          p = 0,
          b = 0,
          w = 0,
          L = this
        if (!Array.isArray(c) && typeof c != 'string') {
          if (typeof c != 'number')
            throw new Error('getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.')
          c = String(c)
        }
        var _ = f.maxWidth
        _ > 0
          ? typeof c == 'string'
            ? (c = this.splitTextToSize(c, _))
            : Object.prototype.toString.call(c) === '[object Array]' &&
              (c = c.reduce(function (k, C) {
                return k.concat(L.splitTextToSize(C, _))
              }, []))
          : (c = Array.isArray(c) ? c : [c])
        for (var x = 0; x < c.length; x++) p < (w = this.getStringUnitWidth(c[x], { font: g }) * h) && (p = w)
        return (
          p !== 0 && (b = c.length), { w: (p /= v), h: Math.max((b * h * this.getLineHeightFactor() - h * (this.getLineHeightFactor() - 1)) / v, 0) }
        )
      }),
      (e.cellAddPage = function () {
        r.call(this), this.addPage()
        var c = this.internal.__cell__.margins || t
        return (this.internal.__cell__.lastCell = new o(c.left, c.top, void 0, void 0)), (this.internal.__cell__.pages += 1), this
      })
    var s = (e.cell = function () {
      var c
      ;(c = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])),
        r.call(this)
      var f = this.internal.__cell__.lastCell,
        h = this.internal.__cell__.padding,
        g = this.internal.__cell__.margins || t,
        v = this.internal.__cell__.tableHeaderRow,
        p = this.internal.__cell__.printHeaders
      return (
        f.lineNumber !== void 0 &&
          (f.lineNumber === c.lineNumber
            ? ((c.x = (f.x || 0) + (f.width || 0)), (c.y = f.y || 0))
            : f.y + f.height + c.height + g.bottom > this.getPageHeight()
              ? (this.cellAddPage(), (c.y = g.top), p && v && (this.printHeaderRow(c.lineNumber, !0), (c.y += v[0].height)))
              : (c.y = f.y + f.height || c.y)),
        c.text[0] !== void 0 &&
          (this.rect(c.x, c.y, c.width, c.height, n === !0 ? 'FD' : void 0),
          c.align === 'right'
            ? this.text(c.text, c.x + c.width - h, c.y + h, { align: 'right', baseline: 'top' })
            : c.align === 'center'
              ? this.text(c.text, c.x + c.width / 2, c.y + h, { align: 'center', baseline: 'top', maxWidth: c.width - h - h })
              : this.text(c.text, c.x + h, c.y + h, { align: 'left', baseline: 'top', maxWidth: c.width - h - h })),
        (this.internal.__cell__.lastCell = c),
        this
      )
    })
    e.table = function (c, f, h, g, v) {
      if ((r.call(this), !h)) throw new Error('No data for PDF table.')
      var p,
        b,
        w,
        L,
        _ = [],
        x = [],
        k = [],
        C = {},
        D = {},
        U = [],
        E = [],
        N = (v = v || {}).autoSize || !1,
        V = v.printHeaders !== !1,
        Q = v.css && v.css['font-size'] !== void 0 ? 16 * v.css['font-size'] : v.fontSize || 12,
        P = v.margins || Object.assign({ width: this.getPageWidth() }, t),
        S = typeof v.padding == 'number' ? v.padding : 3,
        z = v.headerBackgroundColor || '#c8c8c8',
        $ = v.headerTextColor || '#000'
      if (
        (i.call(this),
        (this.internal.__cell__.printHeaders = V),
        (this.internal.__cell__.margins = P),
        (this.internal.__cell__.table_font_size = Q),
        (this.internal.__cell__.padding = S),
        (this.internal.__cell__.headerBackgroundColor = z),
        (this.internal.__cell__.headerTextColor = $),
        this.setFontSize(Q),
        g == null)
      )
        (x = _ = Object.keys(h[0])),
          (k = _.map(function () {
            return 'left'
          }))
      else if (Array.isArray(g) && Et(g[0]) === 'object')
        for (
          _ = g.map(function (fe) {
            return fe.name
          }),
            x = g.map(function (fe) {
              return fe.prompt || fe.name || ''
            }),
            k = g.map(function (fe) {
              return fe.align || 'left'
            }),
            p = 0;
          p < g.length;
          p += 1
        )
          D[g[p].name] = g[p].width * (19.049976 / 25.4)
      else
        Array.isArray(g) &&
          typeof g[0] == 'string' &&
          ((x = _ = g),
          (k = _.map(function () {
            return 'left'
          })))
      if (N || (Array.isArray(g) && typeof g[0] == 'string'))
        for (p = 0; p < _.length; p += 1) {
          for (
            C[(L = _[p])] = h.map(function (fe) {
              return fe[L]
            }),
              this.setFont(void 0, 'bold'),
              U.push(this.getTextDimensions(x[p], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w),
              b = C[L],
              this.setFont(void 0, 'normal'),
              w = 0;
            w < b.length;
            w += 1
          )
            U.push(this.getTextDimensions(b[w], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w)
          ;(D[L] = Math.max.apply(null, U) + S + S), (U = [])
        }
      if (V) {
        var de = {}
        for (p = 0; p < _.length; p += 1) (de[_[p]] = {}), (de[_[p]].text = x[p]), (de[_[p]].align = k[p])
        var W = l.call(this, de, D)
        ;(E = _.map(function (fe) {
          return new o(c, f, D[fe], W, de[fe].text, void 0, de[fe].align)
        })),
          this.setTableHeaderRow(E),
          this.printHeaderRow(1, !1)
      }
      var H = g.reduce(function (fe, xe) {
        return (fe[xe.name] = xe.align), fe
      }, {})
      for (p = 0; p < h.length; p += 1) {
        'rowStart' in v && v.rowStart instanceof Function && v.rowStart({ row: p, data: h[p] }, this)
        var X = l.call(this, h[p], D)
        for (w = 0; w < _.length; w += 1) {
          var ne = h[p][_[w]]
          'cellStart' in v && v.cellStart instanceof Function && v.cellStart({ row: p, col: w, data: ne }, this),
            s.call(this, new o(c, f, D[_[w]], X, ne, p + 2, H[_[w]]))
        }
      }
      return (this.internal.__cell__.table_x = c), (this.internal.__cell__.table_y = f), this
    }
    var l = function (c, f) {
      var h = this.internal.__cell__.padding,
        g = this.internal.__cell__.table_font_size,
        v = this.internal.scaleFactor
      return Object.keys(c)
        .map(function (p) {
          var b = c[p]
          return this.splitTextToSize(b.hasOwnProperty('text') ? b.text : b, f[p] - h - h)
        }, this)
        .map(function (p) {
          return (this.getLineHeightFactor() * p.length * g) / v + h + h
        }, this)
        .reduce(function (p, b) {
          return Math.max(p, b)
        }, 0)
    }
    ;(e.setTableHeaderRow = function (c) {
      r.call(this), (this.internal.__cell__.tableHeaderRow = c)
    }),
      (e.printHeaderRow = function (c, f) {
        if ((r.call(this), !this.internal.__cell__.tableHeaderRow)) throw new Error('Property tableHeaderRow does not exist.')
        var h
        if (((n = !0), typeof this.internal.__cell__.headerFunction == 'function')) {
          var g = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages)
          this.internal.__cell__.lastCell = new o(g[0], g[1], g[2], g[3], void 0, -1)
        }
        this.setFont(void 0, 'bold')
        for (var v = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
          ;(h = this.internal.__cell__.tableHeaderRow[p].clone()), f && ((h.y = this.internal.__cell__.margins.top || 0), v.push(h)), (h.lineNumber = c)
          var b = this.getTextColor()
          this.setTextColor(this.internal.__cell__.headerTextColor),
            this.setFillColor(this.internal.__cell__.headerBackgroundColor),
            s.call(this, h),
            this.setTextColor(b)
        }
        v.length > 0 && this.setTableHeaderRow(v), this.setFont(void 0, 'normal'), (n = !1)
      })
  })(rt.API)
var R0 = { italic: ['italic', 'oblique', 'normal'], oblique: ['oblique', 'italic', 'normal'], normal: ['normal', 'oblique', 'italic'] },
  M0 = ['ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'normal', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded'],
  Tf = O0(M0),
  D0 = [100, 200, 300, 400, 500, 600, 700, 800, 900],
  D4 = O0(D0)
function Ff(e) {
  var t = e.family.replace(/"|'/g, '').toLowerCase(),
    n = (function (o) {
      return R0[(o = o || 'normal')] ? o : 'normal'
    })(e.style),
    r = (function (o) {
      if (!o) return 400
      if (typeof o == 'number') return o >= 100 && o <= 900 && o % 100 == 0 ? o : 400
      if (/^\d00$/.test(o)) return parseInt(o)
      switch (o) {
        case 'bold':
          return 700
        case 'normal':
        default:
          return 400
      }
    })(e.weight),
    i = (function (o) {
      return typeof Tf[(o = o || 'normal')] == 'number' ? o : 'normal'
    })(e.stretch)
  return { family: t, style: n, weight: r, stretch: i, src: e.src || [], ref: e.ref || { name: t, style: [i, n, r].join(' ') } }
}
function _p(e, t, n, r) {
  var i
  for (i = n; i >= 0 && i < t.length; i += r) if (e[t[i]]) return e[t[i]]
  for (i = n; i >= 0 && i < t.length; i -= r) if (e[t[i]]) return e[t[i]]
}
var B4 = { 'sans-serif': 'helvetica', fixed: 'courier', monospace: 'courier', terminal: 'courier', cursive: 'times', fantasy: 'times', serif: 'times' },
  xp = { caption: 'times', icon: 'times', menu: 'times', 'message-box': 'times', 'small-caption': 'times', 'status-bar': 'times' }
function Sp(e) {
  return [e.stretch, e.style, e.weight, e.family].join(' ')
}
function q4(e, t, n) {
  for (
    var r = (n = n || {}).defaultFontFamily || 'times', i = Object.assign({}, B4, n.genericFontFamilies || {}), o = null, s = null, l = 0;
    l < t.length;
    ++l
  )
    if ((i[(o = Ff(t[l])).family] && (o.family = i[o.family]), e.hasOwnProperty(o.family))) {
      s = e[o.family]
      break
    }
  if (!(s = s || e[r])) throw new Error("Could not find a font-family for the rule '" + Sp(o) + "' and default family '" + r + "'.")
  if (
    ((s = (function (c, f) {
      if (f[c]) return f[c]
      var h = Tf[c],
        g = h <= Tf.normal ? -1 : 1,
        v = _p(f, M0, h, g)
      if (!v) throw new Error('Could not find a matching font-stretch value for ' + c)
      return v
    })(o.stretch, s)),
    (s = (function (c, f) {
      if (f[c]) return f[c]
      for (var h = R0[c], g = 0; g < h.length; ++g) if (f[h[g]]) return f[h[g]]
      throw new Error('Could not find a matching font-style for ' + c)
    })(o.style, s)),
    !(s = (function (c, f) {
      if (f[c]) return f[c]
      if (c === 400 && f[500]) return f[500]
      if (c === 500 && f[400]) return f[400]
      var h = D4[c],
        g = _p(f, D0, h, c < 400 ? -1 : 1)
      if (!g) throw new Error('Could not find a matching font-weight for value ' + c)
      return g
    })(o.weight, s)))
  )
    throw new Error("Failed to resolve a font for the rule '" + Sp(o) + "'.")
  return s
}
function kp(e) {
  return e.trimLeft()
}
function z4(e, t) {
  for (var n = 0; n < e.length; ) {
    if (e.charAt(n) === t) return [e.substring(0, n), e.substring(n + 1)]
    n += 1
  }
  return null
}
function U4(e) {
  var t = e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i)
  return t === null ? null : [t[0], e.substring(t[0].length)]
}
var Vl,
  Ap,
  Lp,
  Xu = ['times']
;(function (e) {
  var t,
    n,
    r,
    i,
    o,
    s,
    l,
    c,
    f,
    h = function (A) {
      return (
        (A = A || {}),
        (this.isStrokeTransparent = A.isStrokeTransparent || !1),
        (this.strokeOpacity = A.strokeOpacity || 1),
        (this.strokeStyle = A.strokeStyle || '#000000'),
        (this.fillStyle = A.fillStyle || '#000000'),
        (this.isFillTransparent = A.isFillTransparent || !1),
        (this.fillOpacity = A.fillOpacity || 1),
        (this.font = A.font || '10px sans-serif'),
        (this.textBaseline = A.textBaseline || 'alphabetic'),
        (this.textAlign = A.textAlign || 'left'),
        (this.lineWidth = A.lineWidth || 1),
        (this.lineJoin = A.lineJoin || 'miter'),
        (this.lineCap = A.lineCap || 'butt'),
        (this.path = A.path || []),
        (this.transform = A.transform !== void 0 ? A.transform.clone() : new c()),
        (this.globalCompositeOperation = A.globalCompositeOperation || 'normal'),
        (this.globalAlpha = A.globalAlpha || 1),
        (this.clip_path = A.clip_path || []),
        (this.currentPoint = A.currentPoint || new s()),
        (this.miterLimit = A.miterLimit || 10),
        (this.lastPoint = A.lastPoint || new s()),
        (this.lineDashOffset = A.lineDashOffset || 0),
        (this.lineDash = A.lineDash || []),
        (this.margin = A.margin || [0, 0, 0, 0]),
        (this.prevPageLastElemOffset = A.prevPageLastElemOffset || 0),
        (this.ignoreClearRect = typeof A.ignoreClearRect != 'boolean' || A.ignoreClearRect),
        this
      )
    }
  e.events.push([
    'initialized',
    function () {
      ;(this.context2d = new g(this)),
        (t = this.internal.f2),
        (n = this.internal.getCoordinateString),
        (r = this.internal.getVerticalCoordinateString),
        (i = this.internal.getHorizontalCoordinate),
        (o = this.internal.getVerticalCoordinate),
        (s = this.internal.Point),
        (l = this.internal.Rectangle),
        (c = this.internal.Matrix),
        (f = new h())
    }
  ])
  var g = function (A) {
    Object.defineProperty(this, 'canvas', {
      get: function () {
        return { parentNode: !1, style: !1 }
      }
    })
    var B = A
    Object.defineProperty(this, 'pdf', {
      get: function () {
        return B
      }
    })
    var G = !1
    Object.defineProperty(this, 'pageWrapXEnabled', {
      get: function () {
        return G
      },
      set: function (ie) {
        G = !!ie
      }
    })
    var ee = !1
    Object.defineProperty(this, 'pageWrapYEnabled', {
      get: function () {
        return ee
      },
      set: function (ie) {
        ee = !!ie
      }
    })
    var re = 0
    Object.defineProperty(this, 'posX', {
      get: function () {
        return re
      },
      set: function (ie) {
        isNaN(ie) || (re = ie)
      }
    })
    var Y = 0
    Object.defineProperty(this, 'posY', {
      get: function () {
        return Y
      },
      set: function (ie) {
        isNaN(ie) || (Y = ie)
      }
    }),
      Object.defineProperty(this, 'margin', {
        get: function () {
          return f.margin
        },
        set: function (ie) {
          var R
          typeof ie == 'number'
            ? (R = [ie, ie, ie, ie])
            : (((R = new Array(4))[0] = ie[0]),
              (R[1] = ie.length >= 2 ? ie[1] : R[0]),
              (R[2] = ie.length >= 3 ? ie[2] : R[0]),
              (R[3] = ie.length >= 4 ? ie[3] : R[1])),
            (f.margin = R)
        }
      })
    var oe = !1
    Object.defineProperty(this, 'autoPaging', {
      get: function () {
        return oe
      },
      set: function (ie) {
        oe = ie
      }
    })
    var se = 0
    Object.defineProperty(this, 'lastBreak', {
      get: function () {
        return se
      },
      set: function (ie) {
        se = ie
      }
    })
    var Se = []
    Object.defineProperty(this, 'pageBreaks', {
      get: function () {
        return Se
      },
      set: function (ie) {
        Se = ie
      }
    }),
      Object.defineProperty(this, 'ctx', {
        get: function () {
          return f
        },
        set: function (ie) {
          ie instanceof h && (f = ie)
        }
      }),
      Object.defineProperty(this, 'path', {
        get: function () {
          return f.path
        },
        set: function (ie) {
          f.path = ie
        }
      })
    var je = []
    Object.defineProperty(this, 'ctxStack', {
      get: function () {
        return je
      },
      set: function (ie) {
        je = ie
      }
    }),
      Object.defineProperty(this, 'fillStyle', {
        get: function () {
          return this.ctx.fillStyle
        },
        set: function (ie) {
          var R
          ;(R = v(ie)),
            (this.ctx.fillStyle = R.style),
            (this.ctx.isFillTransparent = R.a === 0),
            (this.ctx.fillOpacity = R.a),
            this.pdf.setFillColor(R.r, R.g, R.b, { a: R.a }),
            this.pdf.setTextColor(R.r, R.g, R.b, { a: R.a })
        }
      }),
      Object.defineProperty(this, 'strokeStyle', {
        get: function () {
          return this.ctx.strokeStyle
        },
        set: function (ie) {
          var R = v(ie)
          ;(this.ctx.strokeStyle = R.style),
            (this.ctx.isStrokeTransparent = R.a === 0),
            (this.ctx.strokeOpacity = R.a),
            R.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (R.a, this.pdf.setDrawColor(R.r, R.g, R.b))
        }
      }),
      Object.defineProperty(this, 'lineCap', {
        get: function () {
          return this.ctx.lineCap
        },
        set: function (ie) {
          ;['butt', 'round', 'square'].indexOf(ie) !== -1 && ((this.ctx.lineCap = ie), this.pdf.setLineCap(ie))
        }
      }),
      Object.defineProperty(this, 'lineWidth', {
        get: function () {
          return this.ctx.lineWidth
        },
        set: function (ie) {
          isNaN(ie) || ((this.ctx.lineWidth = ie), this.pdf.setLineWidth(ie))
        }
      }),
      Object.defineProperty(this, 'lineJoin', {
        get: function () {
          return this.ctx.lineJoin
        },
        set: function (ie) {
          ;['bevel', 'round', 'miter'].indexOf(ie) !== -1 && ((this.ctx.lineJoin = ie), this.pdf.setLineJoin(ie))
        }
      }),
      Object.defineProperty(this, 'miterLimit', {
        get: function () {
          return this.ctx.miterLimit
        },
        set: function (ie) {
          isNaN(ie) || ((this.ctx.miterLimit = ie), this.pdf.setMiterLimit(ie))
        }
      }),
      Object.defineProperty(this, 'textBaseline', {
        get: function () {
          return this.ctx.textBaseline
        },
        set: function (ie) {
          this.ctx.textBaseline = ie
        }
      }),
      Object.defineProperty(this, 'textAlign', {
        get: function () {
          return this.ctx.textAlign
        },
        set: function (ie) {
          ;['right', 'end', 'center', 'left', 'start'].indexOf(ie) !== -1 && (this.ctx.textAlign = ie)
        }
      })
    var q = null
    function K(ie, R) {
      if (q === null) {
        var ke = (function (Le) {
          var ge = []
          return (
            Object.keys(Le).forEach(function (we) {
              Le[we].forEach(function (ve) {
                var Pe = null
                switch (ve) {
                  case 'bold':
                    Pe = { family: we, weight: 'bold' }
                    break
                  case 'italic':
                    Pe = { family: we, style: 'italic' }
                    break
                  case 'bolditalic':
                    Pe = { family: we, weight: 'bold', style: 'italic' }
                    break
                  case '':
                  case 'normal':
                    Pe = { family: we }
                }
                Pe !== null && ((Pe.ref = { name: we, style: ve }), ge.push(Pe))
              })
            }),
            ge
          )
        })(ie.getFontList())
        q = (function (Le) {
          for (var ge = {}, we = 0; we < Le.length; ++we) {
            var ve = Ff(Le[we]),
              Pe = ve.family,
              Ie = ve.stretch,
              Me = ve.style,
              Be = ve.weight
            ;(ge[Pe] = ge[Pe] || {}), (ge[Pe][Ie] = ge[Pe][Ie] || {}), (ge[Pe][Ie][Me] = ge[Pe][Ie][Me] || {}), (ge[Pe][Ie][Me][Be] = ve)
          }
          return ge
        })(ke.concat(R))
      }
      return q
    }
    var ae = null
    Object.defineProperty(this, 'fontFaces', {
      get: function () {
        return ae
      },
      set: function (ie) {
        ;(q = null), (ae = ie)
      }
    }),
      Object.defineProperty(this, 'font', {
        get: function () {
          return this.ctx.font
        },
        set: function (ie) {
          var R
          if (
            ((this.ctx.font = ie),
            (R =
              /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(
                ie
              )) !== null)
          ) {
            var ke = R[1],
              Le = (R[2], R[3]),
              ge = R[4],
              we = (R[5], R[6]),
              ve = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(ge)[2]
            ;(ge = Math.floor(
              ve === 'px'
                ? parseFloat(ge) * this.pdf.internal.scaleFactor
                : ve === 'em'
                  ? parseFloat(ge) * this.pdf.getFontSize()
                  : parseFloat(ge) * this.pdf.internal.scaleFactor
            )),
              this.pdf.setFontSize(ge)
            var Pe = (function (Ge) {
              var ot,
                qe,
                cn = [],
                gt = Ge.trim()
              if (gt === '') return Xu
              if (gt in xp) return [xp[gt]]
              for (; gt !== ''; ) {
                switch (((qe = null), (ot = (gt = kp(gt)).charAt(0)))) {
                  case '"':
                  case "'":
                    qe = z4(gt.substring(1), ot)
                    break
                  default:
                    qe = U4(gt)
                }
                if (qe === null || (cn.push(qe[0]), (gt = kp(qe[1])) !== '' && gt.charAt(0) !== ',')) return Xu
                gt = gt.replace(/^,/, '')
              }
              return cn
            })(we)
            if (this.fontFaces) {
              var Ie = q4(
                K(this.pdf, this.fontFaces),
                Pe.map(function (Ge) {
                  return { family: Ge, stretch: 'normal', weight: Le, style: ke }
                })
              )
              this.pdf.setFont(Ie.ref.name, Ie.ref.style)
            } else {
              var Me = ''
              ;(Le === 'bold' || parseInt(Le, 10) >= 700 || ke === 'bold') && (Me = 'bold'),
                ke === 'italic' && (Me += 'italic'),
                Me.length === 0 && (Me = 'normal')
              for (
                var Be = '',
                  $e = {
                    arial: 'Helvetica',
                    Arial: 'Helvetica',
                    verdana: 'Helvetica',
                    Verdana: 'Helvetica',
                    helvetica: 'Helvetica',
                    Helvetica: 'Helvetica',
                    'sans-serif': 'Helvetica',
                    fixed: 'Courier',
                    monospace: 'Courier',
                    terminal: 'Courier',
                    cursive: 'Times',
                    fantasy: 'Times',
                    serif: 'Times'
                  },
                  Qe = 0;
                Qe < Pe.length;
                Qe++
              ) {
                if (this.pdf.internal.getFont(Pe[Qe], Me, { noFallback: !0, disableWarning: !0 }) !== void 0) {
                  Be = Pe[Qe]
                  break
                }
                if (Me === 'bolditalic' && this.pdf.internal.getFont(Pe[Qe], 'bold', { noFallback: !0, disableWarning: !0 }) !== void 0)
                  (Be = Pe[Qe]), (Me = 'bold')
                else if (this.pdf.internal.getFont(Pe[Qe], 'normal', { noFallback: !0, disableWarning: !0 }) !== void 0) {
                  ;(Be = Pe[Qe]), (Me = 'normal')
                  break
                }
              }
              if (Be === '') {
                for (var Ze = 0; Ze < Pe.length; Ze++)
                  if ($e[Pe[Ze]]) {
                    Be = $e[Pe[Ze]]
                    break
                  }
              }
              ;(Be = Be === '' ? 'Times' : Be), this.pdf.setFont(Be, Me)
            }
          }
        }
      }),
      Object.defineProperty(this, 'globalCompositeOperation', {
        get: function () {
          return this.ctx.globalCompositeOperation
        },
        set: function (ie) {
          this.ctx.globalCompositeOperation = ie
        }
      }),
      Object.defineProperty(this, 'globalAlpha', {
        get: function () {
          return this.ctx.globalAlpha
        },
        set: function (ie) {
          this.ctx.globalAlpha = ie
        }
      }),
      Object.defineProperty(this, 'lineDashOffset', {
        get: function () {
          return this.ctx.lineDashOffset
        },
        set: function (ie) {
          ;(this.ctx.lineDashOffset = ie), xe.call(this)
        }
      }),
      Object.defineProperty(this, 'lineDash', {
        get: function () {
          return this.ctx.lineDash
        },
        set: function (ie) {
          ;(this.ctx.lineDash = ie), xe.call(this)
        }
      }),
      Object.defineProperty(this, 'ignoreClearRect', {
        get: function () {
          return this.ctx.ignoreClearRect
        },
        set: function (ie) {
          this.ctx.ignoreClearRect = !!ie
        }
      })
  }
  ;(g.prototype.setLineDash = function (A) {
    this.lineDash = A
  }),
    (g.prototype.getLineDash = function () {
      return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice()
    }),
    (g.prototype.fill = function () {
      C.call(this, 'fill', !1)
    }),
    (g.prototype.stroke = function () {
      C.call(this, 'stroke', !1)
    }),
    (g.prototype.beginPath = function () {
      this.path = [{ type: 'begin' }]
    }),
    (g.prototype.moveTo = function (A, B) {
      if (isNaN(A) || isNaN(B))
        throw (Ot.error('jsPDF.context2d.moveTo: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.moveTo'))
      var G = this.ctx.transform.applyToPoint(new s(A, B))
      this.path.push({ type: 'mt', x: G.x, y: G.y }), (this.ctx.lastPoint = new s(A, B))
    }),
    (g.prototype.closePath = function () {
      var A = new s(0, 0),
        B = 0
      for (B = this.path.length - 1; B !== -1; B--)
        if (this.path[B].type === 'begin' && Et(this.path[B + 1]) === 'object' && typeof this.path[B + 1].x == 'number') {
          A = new s(this.path[B + 1].x, this.path[B + 1].y)
          break
        }
      this.path.push({ type: 'close' }), (this.ctx.lastPoint = new s(A.x, A.y))
    }),
    (g.prototype.lineTo = function (A, B) {
      if (isNaN(A) || isNaN(B))
        throw (Ot.error('jsPDF.context2d.lineTo: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.lineTo'))
      var G = this.ctx.transform.applyToPoint(new s(A, B))
      this.path.push({ type: 'lt', x: G.x, y: G.y }), (this.ctx.lastPoint = new s(G.x, G.y))
    }),
    (g.prototype.clip = function () {
      ;(this.ctx.clip_path = JSON.parse(JSON.stringify(this.path))), C.call(this, null, !0)
    }),
    (g.prototype.quadraticCurveTo = function (A, B, G, ee) {
      if (isNaN(G) || isNaN(ee) || isNaN(A) || isNaN(B))
        throw (
          (Ot.error('jsPDF.context2d.quadraticCurveTo: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.quadraticCurveTo'))
        )
      var re = this.ctx.transform.applyToPoint(new s(G, ee)),
        Y = this.ctx.transform.applyToPoint(new s(A, B))
      this.path.push({ type: 'qct', x1: Y.x, y1: Y.y, x: re.x, y: re.y }), (this.ctx.lastPoint = new s(re.x, re.y))
    }),
    (g.prototype.bezierCurveTo = function (A, B, G, ee, re, Y) {
      if (isNaN(re) || isNaN(Y) || isNaN(A) || isNaN(B) || isNaN(G) || isNaN(ee))
        throw (
          (Ot.error('jsPDF.context2d.bezierCurveTo: Invalid arguments', arguments),
          new Error('Invalid arguments passed to jsPDF.context2d.bezierCurveTo'))
        )
      var oe = this.ctx.transform.applyToPoint(new s(re, Y)),
        se = this.ctx.transform.applyToPoint(new s(A, B)),
        Se = this.ctx.transform.applyToPoint(new s(G, ee))
      this.path.push({ type: 'bct', x1: se.x, y1: se.y, x2: Se.x, y2: Se.y, x: oe.x, y: oe.y }), (this.ctx.lastPoint = new s(oe.x, oe.y))
    }),
    (g.prototype.arc = function (A, B, G, ee, re, Y) {
      if (isNaN(A) || isNaN(B) || isNaN(G) || isNaN(ee) || isNaN(re))
        throw (Ot.error('jsPDF.context2d.arc: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.arc'))
      if (((Y = !!Y), !this.ctx.transform.isIdentity)) {
        var oe = this.ctx.transform.applyToPoint(new s(A, B))
        ;(A = oe.x), (B = oe.y)
        var se = this.ctx.transform.applyToPoint(new s(0, G)),
          Se = this.ctx.transform.applyToPoint(new s(0, 0))
        G = Math.sqrt(Math.pow(se.x - Se.x, 2) + Math.pow(se.y - Se.y, 2))
      }
      Math.abs(re - ee) >= 2 * Math.PI && ((ee = 0), (re = 2 * Math.PI)),
        this.path.push({ type: 'arc', x: A, y: B, radius: G, startAngle: ee, endAngle: re, counterclockwise: Y })
    }),
    (g.prototype.arcTo = function (A, B, G, ee, re) {
      throw new Error('arcTo not implemented.')
    }),
    (g.prototype.rect = function (A, B, G, ee) {
      if (isNaN(A) || isNaN(B) || isNaN(G) || isNaN(ee))
        throw (Ot.error('jsPDF.context2d.rect: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.rect'))
      this.moveTo(A, B),
        this.lineTo(A + G, B),
        this.lineTo(A + G, B + ee),
        this.lineTo(A, B + ee),
        this.lineTo(A, B),
        this.lineTo(A + G, B),
        this.lineTo(A, B)
    }),
    (g.prototype.fillRect = function (A, B, G, ee) {
      if (isNaN(A) || isNaN(B) || isNaN(G) || isNaN(ee))
        throw (Ot.error('jsPDF.context2d.fillRect: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.fillRect'))
      if (!p.call(this)) {
        var re = {}
        this.lineCap !== 'butt' && ((re.lineCap = this.lineCap), (this.lineCap = 'butt')),
          this.lineJoin !== 'miter' && ((re.lineJoin = this.lineJoin), (this.lineJoin = 'miter')),
          this.beginPath(),
          this.rect(A, B, G, ee),
          this.fill(),
          re.hasOwnProperty('lineCap') && (this.lineCap = re.lineCap),
          re.hasOwnProperty('lineJoin') && (this.lineJoin = re.lineJoin)
      }
    }),
    (g.prototype.strokeRect = function (A, B, G, ee) {
      if (isNaN(A) || isNaN(B) || isNaN(G) || isNaN(ee))
        throw (
          (Ot.error('jsPDF.context2d.strokeRect: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.strokeRect'))
        )
      b.call(this) || (this.beginPath(), this.rect(A, B, G, ee), this.stroke())
    }),
    (g.prototype.clearRect = function (A, B, G, ee) {
      if (isNaN(A) || isNaN(B) || isNaN(G) || isNaN(ee))
        throw (Ot.error('jsPDF.context2d.clearRect: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.clearRect'))
      this.ignoreClearRect || ((this.fillStyle = '#ffffff'), this.fillRect(A, B, G, ee))
    }),
    (g.prototype.save = function (A) {
      A = typeof A != 'boolean' || A
      for (var B = this.pdf.internal.getCurrentPageInfo().pageNumber, G = 0; G < this.pdf.internal.getNumberOfPages(); G++)
        this.pdf.setPage(G + 1), this.pdf.internal.out('q')
      if ((this.pdf.setPage(B), A)) {
        this.ctx.fontSize = this.pdf.internal.getFontSize()
        var ee = new h(this.ctx)
        this.ctxStack.push(this.ctx), (this.ctx = ee)
      }
    }),
    (g.prototype.restore = function (A) {
      A = typeof A != 'boolean' || A
      for (var B = this.pdf.internal.getCurrentPageInfo().pageNumber, G = 0; G < this.pdf.internal.getNumberOfPages(); G++)
        this.pdf.setPage(G + 1), this.pdf.internal.out('Q')
      this.pdf.setPage(B),
        A &&
          this.ctxStack.length !== 0 &&
          ((this.ctx = this.ctxStack.pop()),
          (this.fillStyle = this.ctx.fillStyle),
          (this.strokeStyle = this.ctx.strokeStyle),
          (this.font = this.ctx.font),
          (this.lineCap = this.ctx.lineCap),
          (this.lineWidth = this.ctx.lineWidth),
          (this.lineJoin = this.ctx.lineJoin),
          (this.lineDash = this.ctx.lineDash),
          (this.lineDashOffset = this.ctx.lineDashOffset))
    }),
    (g.prototype.toDataURL = function () {
      throw new Error('toDataUrl not implemented.')
    })
  var v = function (A) {
      var B, G, ee, re
      if ((A.isCanvasGradient === !0 && (A = A.getColor()), !A)) return { r: 0, g: 0, b: 0, a: 0, style: A }
      if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(A)) (B = 0), (G = 0), (ee = 0), (re = 0)
      else {
        var Y = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(A)
        if (Y !== null) (B = parseInt(Y[1])), (G = parseInt(Y[2])), (ee = parseInt(Y[3])), (re = 1)
        else if ((Y = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(A)) !== null)
          (B = parseInt(Y[1])), (G = parseInt(Y[2])), (ee = parseInt(Y[3])), (re = parseFloat(Y[4]))
        else {
          if (((re = 1), typeof A == 'string' && A.charAt(0) !== '#')) {
            var oe = new C0(A)
            A = oe.ok ? oe.toHex() : '#000000'
          }
          A.length === 4
            ? ((B = A.substring(1, 2)), (B += B), (G = A.substring(2, 3)), (G += G), (ee = A.substring(3, 4)), (ee += ee))
            : ((B = A.substring(1, 3)), (G = A.substring(3, 5)), (ee = A.substring(5, 7))),
            (B = parseInt(B, 16)),
            (G = parseInt(G, 16)),
            (ee = parseInt(ee, 16))
        }
      }
      return { r: B, g: G, b: ee, a: re, style: A }
    },
    p = function () {
      return this.ctx.isFillTransparent || this.globalAlpha == 0
    },
    b = function () {
      return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0)
    }
  ;(g.prototype.fillText = function (A, B, G, ee) {
    if (isNaN(B) || isNaN(G) || typeof A != 'string')
      throw (Ot.error('jsPDF.context2d.fillText: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.fillText'))
    if (((ee = isNaN(ee) ? void 0 : ee), !p.call(this))) {
      var re = X(this.ctx.transform.rotation),
        Y = this.ctx.transform.scaleX
      S.call(this, { text: A, x: B, y: G, scale: Y, angle: re, align: this.textAlign, maxWidth: ee })
    }
  }),
    (g.prototype.strokeText = function (A, B, G, ee) {
      if (isNaN(B) || isNaN(G) || typeof A != 'string')
        throw (
          (Ot.error('jsPDF.context2d.strokeText: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.strokeText'))
        )
      if (!b.call(this)) {
        ee = isNaN(ee) ? void 0 : ee
        var re = X(this.ctx.transform.rotation),
          Y = this.ctx.transform.scaleX
        S.call(this, { text: A, x: B, y: G, scale: Y, renderingMode: 'stroke', angle: re, align: this.textAlign, maxWidth: ee })
      }
    }),
    (g.prototype.measureText = function (A) {
      if (typeof A != 'string')
        throw (
          (Ot.error('jsPDF.context2d.measureText: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.measureText'))
        )
      var B = this.pdf,
        G = this.pdf.internal.scaleFactor,
        ee = B.internal.getFontSize(),
        re = (B.getStringUnitWidth(A) * ee) / B.internal.scaleFactor,
        Y = function (oe) {
          var se = (oe = oe || {}).width || 0
          return (
            Object.defineProperty(this, 'width', {
              get: function () {
                return se
              }
            }),
            this
          )
        }
      return new Y({ width: (re *= Math.round(((96 * G) / 72) * 1e4) / 1e4) })
    }),
    (g.prototype.scale = function (A, B) {
      if (isNaN(A) || isNaN(B))
        throw (Ot.error('jsPDF.context2d.scale: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.scale'))
      var G = new c(A, 0, 0, B, 0, 0)
      this.ctx.transform = this.ctx.transform.multiply(G)
    }),
    (g.prototype.rotate = function (A) {
      if (isNaN(A))
        throw (Ot.error('jsPDF.context2d.rotate: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.rotate'))
      var B = new c(Math.cos(A), Math.sin(A), -Math.sin(A), Math.cos(A), 0, 0)
      this.ctx.transform = this.ctx.transform.multiply(B)
    }),
    (g.prototype.translate = function (A, B) {
      if (isNaN(A) || isNaN(B))
        throw (Ot.error('jsPDF.context2d.translate: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.translate'))
      var G = new c(1, 0, 0, 1, A, B)
      this.ctx.transform = this.ctx.transform.multiply(G)
    }),
    (g.prototype.transform = function (A, B, G, ee, re, Y) {
      if (isNaN(A) || isNaN(B) || isNaN(G) || isNaN(ee) || isNaN(re) || isNaN(Y))
        throw (Ot.error('jsPDF.context2d.transform: Invalid arguments', arguments), new Error('Invalid arguments passed to jsPDF.context2d.transform'))
      var oe = new c(A, B, G, ee, re, Y)
      this.ctx.transform = this.ctx.transform.multiply(oe)
    }),
    (g.prototype.setTransform = function (A, B, G, ee, re, Y) {
      ;(A = isNaN(A) ? 1 : A),
        (B = isNaN(B) ? 0 : B),
        (G = isNaN(G) ? 0 : G),
        (ee = isNaN(ee) ? 1 : ee),
        (re = isNaN(re) ? 0 : re),
        (Y = isNaN(Y) ? 0 : Y),
        (this.ctx.transform = new c(A, B, G, ee, re, Y))
    })
  var w = function () {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0
  }
  g.prototype.drawImage = function (A, B, G, ee, re, Y, oe, se, Se) {
    var je = this.pdf.getImageProperties(A),
      q = 1,
      K = 1,
      ae = 1,
      ie = 1
    ee !== void 0 && se !== void 0 && ((ae = se / ee), (ie = Se / re), (q = ((je.width / ee) * se) / ee), (K = ((je.height / re) * Se) / re)),
      Y === void 0 && ((Y = B), (oe = G), (B = 0), (G = 0)),
      ee !== void 0 && se === void 0 && ((se = ee), (Se = re)),
      ee === void 0 && se === void 0 && ((se = je.width), (Se = je.height))
    for (
      var R,
        ke = this.ctx.transform.decompose(),
        Le = X(ke.rotate.shx),
        ge = new c(),
        we = (ge = (ge = (ge = ge.multiply(ke.translate)).multiply(ke.skew)).multiply(ke.scale)).applyToRectangle(
          new l(Y - B * ae, oe - G * ie, ee * q, re * K)
        ),
        ve = L.call(this, we),
        Pe = [],
        Ie = 0;
      Ie < ve.length;
      Ie += 1
    )
      Pe.indexOf(ve[Ie]) === -1 && Pe.push(ve[Ie])
    if ((k(Pe), this.autoPaging))
      for (var Me = Pe[0], Be = Pe[Pe.length - 1], $e = Me; $e < Be + 1; $e++) {
        this.pdf.setPage($e)
        var Qe = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
          Ze = $e === 1 ? this.posY + this.margin[0] : this.margin[0],
          Ge = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
          ot = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
          qe = $e === 1 ? 0 : Ge + ($e - 2) * ot
        if (this.ctx.clip_path.length !== 0) {
          var cn = this.path
          ;(R = JSON.parse(JSON.stringify(this.ctx.clip_path))),
            (this.path = x(R, this.posX + this.margin[3], -qe + Ze + this.ctx.prevPageLastElemOffset)),
            D.call(this, 'fill', !0),
            (this.path = cn)
        }
        var gt = JSON.parse(JSON.stringify(we))
        gt = x([gt], this.posX + this.margin[3], -qe + Ze + this.ctx.prevPageLastElemOffset)[0]
        var Rn = ($e > Me || $e < Be) && w.call(this)
        Rn && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Qe, ot, null).clip().discardPath()),
          this.pdf.addImage(A, 'JPEG', gt.x, gt.y, gt.w, gt.h, null, null, Le),
          Rn && this.pdf.restoreGraphicsState()
      }
    else this.pdf.addImage(A, 'JPEG', we.x, we.y, we.w, we.h, null, null, Le)
  }
  var L = function (A, B, G) {
      var ee = []
      ;(B = B || this.pdf.internal.pageSize.width), (G = G || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2])
      var re = this.posY + this.ctx.prevPageLastElemOffset
      switch (A.type) {
        default:
        case 'mt':
        case 'lt':
          ee.push(Math.floor((A.y + re) / G) + 1)
          break
        case 'arc':
          ee.push(Math.floor((A.y + re - A.radius) / G) + 1), ee.push(Math.floor((A.y + re + A.radius) / G) + 1)
          break
        case 'qct':
          var Y = ne(this.ctx.lastPoint.x, this.ctx.lastPoint.y, A.x1, A.y1, A.x, A.y)
          ee.push(Math.floor((Y.y + re) / G) + 1), ee.push(Math.floor((Y.y + Y.h + re) / G) + 1)
          break
        case 'bct':
          var oe = fe(this.ctx.lastPoint.x, this.ctx.lastPoint.y, A.x1, A.y1, A.x2, A.y2, A.x, A.y)
          ee.push(Math.floor((oe.y + re) / G) + 1), ee.push(Math.floor((oe.y + oe.h + re) / G) + 1)
          break
        case 'rect':
          ee.push(Math.floor((A.y + re) / G) + 1), ee.push(Math.floor((A.y + A.h + re) / G) + 1)
      }
      for (var se = 0; se < ee.length; se += 1) for (; this.pdf.internal.getNumberOfPages() < ee[se]; ) _.call(this)
      return ee
    },
    _ = function () {
      var A = this.fillStyle,
        B = this.strokeStyle,
        G = this.font,
        ee = this.lineCap,
        re = this.lineWidth,
        Y = this.lineJoin
      this.pdf.addPage(), (this.fillStyle = A), (this.strokeStyle = B), (this.font = G), (this.lineCap = ee), (this.lineWidth = re), (this.lineJoin = Y)
    },
    x = function (A, B, G) {
      for (var ee = 0; ee < A.length; ee++)
        switch (A[ee].type) {
          case 'bct':
            ;(A[ee].x2 += B), (A[ee].y2 += G)
          case 'qct':
            ;(A[ee].x1 += B), (A[ee].y1 += G)
          case 'mt':
          case 'lt':
          case 'arc':
          default:
            ;(A[ee].x += B), (A[ee].y += G)
        }
      return A
    },
    k = function (A) {
      return A.sort(function (B, G) {
        return B - G
      })
    },
    C = function (A, B) {
      for (
        var G,
          ee,
          re = this.fillStyle,
          Y = this.strokeStyle,
          oe = this.lineCap,
          se = this.lineWidth,
          Se = Math.abs(se * this.ctx.transform.scaleX),
          je = this.lineJoin,
          q = JSON.parse(JSON.stringify(this.path)),
          K = JSON.parse(JSON.stringify(this.path)),
          ae = [],
          ie = 0;
        ie < K.length;
        ie++
      )
        if (K[ie].x !== void 0) for (var R = L.call(this, K[ie]), ke = 0; ke < R.length; ke += 1) ae.indexOf(R[ke]) === -1 && ae.push(R[ke])
      for (var Le = 0; Le < ae.length; Le++) for (; this.pdf.internal.getNumberOfPages() < ae[Le]; ) _.call(this)
      if ((k(ae), this.autoPaging))
        for (var ge = ae[0], we = ae[ae.length - 1], ve = ge; ve < we + 1; ve++) {
          this.pdf.setPage(ve), (this.fillStyle = re), (this.strokeStyle = Y), (this.lineCap = oe), (this.lineWidth = Se), (this.lineJoin = je)
          var Pe = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
            Ie = ve === 1 ? this.posY + this.margin[0] : this.margin[0],
            Me = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
            Be = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
            $e = ve === 1 ? 0 : Me + (ve - 2) * Be
          if (this.ctx.clip_path.length !== 0) {
            var Qe = this.path
            ;(G = JSON.parse(JSON.stringify(this.ctx.clip_path))),
              (this.path = x(G, this.posX + this.margin[3], -$e + Ie + this.ctx.prevPageLastElemOffset)),
              D.call(this, A, !0),
              (this.path = Qe)
          }
          if (
            ((ee = JSON.parse(JSON.stringify(q))),
            (this.path = x(ee, this.posX + this.margin[3], -$e + Ie + this.ctx.prevPageLastElemOffset)),
            B === !1 || ve === 0)
          ) {
            var Ze = (ve > ge || ve < we) && w.call(this)
            Ze && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Pe, Be, null).clip().discardPath()),
              D.call(this, A, B),
              Ze && this.pdf.restoreGraphicsState()
          }
          this.lineWidth = se
        }
      else (this.lineWidth = Se), D.call(this, A, B), (this.lineWidth = se)
      this.path = q
    },
    D = function (A, B) {
      if ((A !== 'stroke' || B || !b.call(this)) && (A === 'stroke' || B || !p.call(this))) {
        for (var G, ee, re = [], Y = this.path, oe = 0; oe < Y.length; oe++) {
          var se = Y[oe]
          switch (se.type) {
            case 'begin':
              re.push({ begin: !0 })
              break
            case 'close':
              re.push({ close: !0 })
              break
            case 'mt':
              re.push({ start: se, deltas: [], abs: [] })
              break
            case 'lt':
              var Se = re.length
              if (Y[oe - 1] && !isNaN(Y[oe - 1].x) && ((G = [se.x - Y[oe - 1].x, se.y - Y[oe - 1].y]), Se > 0)) {
                for (; Se >= 0; Se--)
                  if (re[Se - 1].close !== !0 && re[Se - 1].begin !== !0) {
                    re[Se - 1].deltas.push(G), re[Se - 1].abs.push(se)
                    break
                  }
              }
              break
            case 'bct':
              ;(G = [se.x1 - Y[oe - 1].x, se.y1 - Y[oe - 1].y, se.x2 - Y[oe - 1].x, se.y2 - Y[oe - 1].y, se.x - Y[oe - 1].x, se.y - Y[oe - 1].y]),
                re[re.length - 1].deltas.push(G)
              break
            case 'qct':
              var je = Y[oe - 1].x + (2 / 3) * (se.x1 - Y[oe - 1].x),
                q = Y[oe - 1].y + (2 / 3) * (se.y1 - Y[oe - 1].y),
                K = se.x + (2 / 3) * (se.x1 - se.x),
                ae = se.y + (2 / 3) * (se.y1 - se.y),
                ie = se.x,
                R = se.y
              ;(G = [je - Y[oe - 1].x, q - Y[oe - 1].y, K - Y[oe - 1].x, ae - Y[oe - 1].y, ie - Y[oe - 1].x, R - Y[oe - 1].y]),
                re[re.length - 1].deltas.push(G)
              break
            case 'arc':
              re.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(re[re.length - 1].abs) && re[re.length - 1].abs.push(se)
          }
        }
        ee = B ? null : A === 'stroke' ? 'stroke' : 'fill'
        for (var ke = !1, Le = 0; Le < re.length; Le++)
          if (re[Le].arc)
            for (var ge = re[Le].abs, we = 0; we < ge.length; we++) {
              var ve = ge[we]
              ve.type === 'arc'
                ? N.call(this, ve.x, ve.y, ve.radius, ve.startAngle, ve.endAngle, ve.counterclockwise, void 0, B, !ke)
                : z.call(this, ve.x, ve.y),
                (ke = !0)
            }
          else if (re[Le].close === !0) this.pdf.internal.out('h'), (ke = !1)
          else if (re[Le].begin !== !0) {
            var Pe = re[Le].start.x,
              Ie = re[Le].start.y
            $.call(this, re[Le].deltas, Pe, Ie), (ke = !0)
          }
        ee && V.call(this, ee), B && Q.call(this)
      }
    },
    U = function (A) {
      var B = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
        G = B * (this.pdf.internal.getLineHeightFactor() - 1)
      switch (this.ctx.textBaseline) {
        case 'bottom':
          return A - G
        case 'top':
          return A + B - G
        case 'hanging':
          return A + B - 2 * G
        case 'middle':
          return A + B / 2 - G
        case 'ideographic':
          return A
        case 'alphabetic':
        default:
          return A
      }
    },
    E = function (A) {
      return A + (this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor) * (this.pdf.internal.getLineHeightFactor() - 1)
    }
  ;(g.prototype.createLinearGradient = function () {
    var A = function () {}
    return (
      (A.colorStops = []),
      (A.addColorStop = function (B, G) {
        this.colorStops.push([B, G])
      }),
      (A.getColor = function () {
        return this.colorStops.length === 0 ? '#000000' : this.colorStops[0][1]
      }),
      (A.isCanvasGradient = !0),
      A
    )
  }),
    (g.prototype.createPattern = function () {
      return this.createLinearGradient()
    }),
    (g.prototype.createRadialGradient = function () {
      return this.createLinearGradient()
    })
  var N = function (A, B, G, ee, re, Y, oe, se, Se) {
      for (var je = W.call(this, G, ee, re, Y), q = 0; q < je.length; q++) {
        var K = je[q]
        q === 0 && (Se ? P.call(this, K.x1 + A, K.y1 + B) : z.call(this, K.x1 + A, K.y1 + B)), de.call(this, A, B, K.x2, K.y2, K.x3, K.y3, K.x4, K.y4)
      }
      se ? Q.call(this) : V.call(this, oe)
    },
    V = function (A) {
      switch (A) {
        case 'stroke':
          this.pdf.internal.out('S')
          break
        case 'fill':
          this.pdf.internal.out('f')
      }
    },
    Q = function () {
      this.pdf.clip(), this.pdf.discardPath()
    },
    P = function (A, B) {
      this.pdf.internal.out(n(A) + ' ' + r(B) + ' m')
    },
    S = function (A) {
      var B
      switch (A.align) {
        case 'right':
        case 'end':
          B = 'right'
          break
        case 'center':
          B = 'center'
          break
        case 'left':
        case 'start':
        default:
          B = 'left'
      }
      var G = this.pdf.getTextDimensions(A.text),
        ee = U.call(this, A.y),
        re = E.call(this, ee) - G.h,
        Y = this.ctx.transform.applyToPoint(new s(A.x, ee)),
        oe = this.ctx.transform.decompose(),
        se = new c()
      se = (se = (se = se.multiply(oe.translate)).multiply(oe.skew)).multiply(oe.scale)
      for (
        var Se,
          je,
          q,
          K = this.ctx.transform.applyToRectangle(new l(A.x, ee, G.w, G.h)),
          ae = se.applyToRectangle(new l(A.x, re, G.w, G.h)),
          ie = L.call(this, ae),
          R = [],
          ke = 0;
        ke < ie.length;
        ke += 1
      )
        R.indexOf(ie[ke]) === -1 && R.push(ie[ke])
      if ((k(R), this.autoPaging))
        for (var Le = R[0], ge = R[R.length - 1], we = Le; we < ge + 1; we++) {
          this.pdf.setPage(we)
          var ve = we === 1 ? this.posY + this.margin[0] : this.margin[0],
            Pe = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
            Ie = this.pdf.internal.pageSize.height - this.margin[2],
            Me = Ie - this.margin[0],
            Be = this.pdf.internal.pageSize.width - this.margin[1],
            $e = Be - this.margin[3],
            Qe = we === 1 ? 0 : Pe + (we - 2) * Me
          if (this.ctx.clip_path.length !== 0) {
            var Ze = this.path
            ;(Se = JSON.parse(JSON.stringify(this.ctx.clip_path))),
              (this.path = x(Se, this.posX + this.margin[3], -1 * Qe + ve)),
              D.call(this, 'fill', !0),
              (this.path = Ze)
          }
          var Ge = x([JSON.parse(JSON.stringify(ae))], this.posX + this.margin[3], -Qe + ve + this.ctx.prevPageLastElemOffset)[0]
          A.scale >= 0.01 &&
            ((je = this.pdf.internal.getFontSize()), this.pdf.setFontSize(je * A.scale), (q = this.lineWidth), (this.lineWidth = q * A.scale))
          var ot = this.autoPaging !== 'text'
          if (ot || Ge.y + Ge.h <= Ie) {
            if (ot || (Ge.y >= ve && Ge.x <= Be)) {
              var qe = ot ? A.text : this.pdf.splitTextToSize(A.text, A.maxWidth || Be - Ge.x)[0],
                cn = x([JSON.parse(JSON.stringify(K))], this.posX + this.margin[3], -Qe + ve + this.ctx.prevPageLastElemOffset)[0],
                gt = ot && (we > Le || we < ge) && w.call(this)
              gt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], $e, Me, null).clip().discardPath()),
                this.pdf.text(qe, cn.x, cn.y, { angle: A.angle, align: B, renderingMode: A.renderingMode }),
                gt && this.pdf.restoreGraphicsState()
            }
          } else Ge.y < Ie && (this.ctx.prevPageLastElemOffset += Ie - Ge.y)
          A.scale >= 0.01 && (this.pdf.setFontSize(je), (this.lineWidth = q))
        }
      else
        A.scale >= 0.01 &&
          ((je = this.pdf.internal.getFontSize()), this.pdf.setFontSize(je * A.scale), (q = this.lineWidth), (this.lineWidth = q * A.scale)),
          this.pdf.text(A.text, Y.x + this.posX, Y.y + this.posY, { angle: A.angle, align: B, renderingMode: A.renderingMode, maxWidth: A.maxWidth }),
          A.scale >= 0.01 && (this.pdf.setFontSize(je), (this.lineWidth = q))
    },
    z = function (A, B, G, ee) {
      ;(G = G || 0), (ee = ee || 0), this.pdf.internal.out(n(A + G) + ' ' + r(B + ee) + ' l')
    },
    $ = function (A, B, G) {
      return this.pdf.lines(A, B, G, null, null)
    },
    de = function (A, B, G, ee, re, Y, oe, se) {
      this.pdf.internal.out([t(i(G + A)), t(o(ee + B)), t(i(re + A)), t(o(Y + B)), t(i(oe + A)), t(o(se + B)), 'c'].join(' '))
    },
    W = function (A, B, G, ee) {
      for (var re = 2 * Math.PI, Y = Math.PI / 2; B > G; ) B -= re
      var oe = Math.abs(G - B)
      oe < re && ee && (oe = re - oe)
      for (var se = [], Se = ee ? -1 : 1, je = B; oe > 1e-5; ) {
        var q = je + Se * Math.min(oe, Y)
        se.push(H.call(this, A, je, q)), (oe -= Math.abs(q - je)), (je = q)
      }
      return se
    },
    H = function (A, B, G) {
      var ee = (G - B) / 2,
        re = A * Math.cos(ee),
        Y = A * Math.sin(ee),
        oe = re,
        se = -Y,
        Se = oe * oe + se * se,
        je = Se + oe * re + se * Y,
        q = ((4 / 3) * (Math.sqrt(2 * Se * je) - je)) / (oe * Y - se * re),
        K = oe - q * se,
        ae = se + q * oe,
        ie = K,
        R = -ae,
        ke = ee + B,
        Le = Math.cos(ke),
        ge = Math.sin(ke)
      return {
        x1: A * Math.cos(B),
        y1: A * Math.sin(B),
        x2: K * Le - ae * ge,
        y2: K * ge + ae * Le,
        x3: ie * Le - R * ge,
        y3: ie * ge + R * Le,
        x4: A * Math.cos(G),
        y4: A * Math.sin(G)
      }
    },
    X = function (A) {
      return (180 * A) / Math.PI
    },
    ne = function (A, B, G, ee, re, Y) {
      var oe = A + 0.5 * (G - A),
        se = B + 0.5 * (ee - B),
        Se = re + 0.5 * (G - re),
        je = Y + 0.5 * (ee - Y),
        q = Math.min(A, re, oe, Se),
        K = Math.max(A, re, oe, Se),
        ae = Math.min(B, Y, se, je),
        ie = Math.max(B, Y, se, je)
      return new l(q, ae, K - q, ie - ae)
    },
    fe = function (A, B, G, ee, re, Y, oe, se) {
      var Se,
        je,
        q,
        K,
        ae,
        ie,
        R,
        ke,
        Le,
        ge,
        we,
        ve,
        Pe,
        Ie,
        Me = G - A,
        Be = ee - B,
        $e = re - G,
        Qe = Y - ee,
        Ze = oe - re,
        Ge = se - Y
      for (je = 0; je < 41; je++)
        (Le = (R = (q = A + (Se = je / 40) * Me) + Se * ((ae = G + Se * $e) - q)) + Se * (ae + Se * (re + Se * Ze - ae) - R)),
          (ge = (ke = (K = B + Se * Be) + Se * ((ie = ee + Se * Qe) - K)) + Se * (ie + Se * (Y + Se * Ge - ie) - ke)),
          je == 0
            ? ((we = Le), (ve = ge), (Pe = Le), (Ie = ge))
            : ((we = Math.min(we, Le)), (ve = Math.min(ve, ge)), (Pe = Math.max(Pe, Le)), (Ie = Math.max(Ie, ge)))
      return new l(Math.round(we), Math.round(ve), Math.round(Pe - we), Math.round(Ie - ve))
    },
    xe = function () {
      if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
        var A,
          B,
          G = ((A = this.ctx.lineDash), (B = this.ctx.lineDashOffset), JSON.stringify({ lineDash: A, lineDashOffset: B }))
        this.prevLineDash !== G && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), (this.prevLineDash = G))
      }
    }
})(rt.API),
  (function (e) {
    var t = function (o) {
        var s, l, c, f, h, g, v, p, b, w
        for (l = [], c = 0, f = (o += s = '\0\0\0\0'.slice(o.length % 4 || 4)).length; f > c; c += 4)
          (h = (o.charCodeAt(c) << 24) + (o.charCodeAt(c + 1) << 16) + (o.charCodeAt(c + 2) << 8) + o.charCodeAt(c + 3)) !== 0
            ? ((g = (h = ((h = ((h = ((h = (h - (w = h % 85)) / 85) - (b = h % 85)) / 85) - (p = h % 85)) / 85) - (v = h % 85)) / 85) % 85),
              l.push(g + 33, v + 33, p + 33, b + 33, w + 33))
            : l.push(122)
        return (
          (function (L, _) {
            for (var x = _; x > 0; x--) L.pop()
          })(l, s.length),
          String.fromCharCode.apply(String, l) + '~>'
        )
      },
      n = function (o) {
        var s,
          l,
          c,
          f,
          h,
          g = String,
          v = 'length',
          p = 255,
          b = 'charCodeAt',
          w = 'slice',
          L = 'replace'
        for (o[w](-2), o = o[w](0, -2)[L](/\s/g, '')[L]('z', '!!!!!'), c = [], f = 0, h = (o += s = 'uuuuu'[w](o[v] % 5 || 5))[v]; h > f; f += 5)
          (l = 52200625 * (o[b](f) - 33) + 614125 * (o[b](f + 1) - 33) + 7225 * (o[b](f + 2) - 33) + 85 * (o[b](f + 3) - 33) + (o[b](f + 4) - 33)),
            c.push(p & (l >> 24), p & (l >> 16), p & (l >> 8), p & l)
        return (
          (function (_, x) {
            for (var k = x; k > 0; k--) _.pop()
          })(c, s[v]),
          g.fromCharCode.apply(g, c)
        )
      },
      r = function (o) {
        var s = new RegExp(/^([0-9A-Fa-f]{2})+$/)
        if (((o = o.replace(/\s/g, '')).indexOf('>') !== -1 && (o = o.substr(0, o.indexOf('>'))), o.length % 2 && (o += '0'), s.test(o) === !1))
          return ''
        for (var l = '', c = 0; c < o.length; c += 2) l += String.fromCharCode('0x' + (o[c] + o[c + 1]))
        return l
      },
      i = function (o) {
        for (var s = new Uint8Array(o.length), l = o.length; l--; ) s[l] = o.charCodeAt(l)
        return (o = (s = Pf(s)).reduce(function (c, f) {
          return c + String.fromCharCode(f)
        }, ''))
      }
    e.processDataByFilters = function (o, s) {
      var l = 0,
        c = o || '',
        f = []
      for (typeof (s = s || []) == 'string' && (s = [s]), l = 0; l < s.length; l += 1)
        switch (s[l]) {
          case 'ASCII85Decode':
          case '/ASCII85Decode':
            ;(c = n(c)), f.push('/ASCII85Encode')
            break
          case 'ASCII85Encode':
          case '/ASCII85Encode':
            ;(c = t(c)), f.push('/ASCII85Decode')
            break
          case 'ASCIIHexDecode':
          case '/ASCIIHexDecode':
            ;(c = r(c)), f.push('/ASCIIHexEncode')
            break
          case 'ASCIIHexEncode':
          case '/ASCIIHexEncode':
            ;(c =
              c
                .split('')
                .map(function (h) {
                  return ('0' + h.charCodeAt().toString(16)).slice(-2)
                })
                .join('') + '>'),
              f.push('/ASCIIHexDecode')
            break
          case 'FlateEncode':
          case '/FlateEncode':
            ;(c = i(c)), f.push('/FlateDecode')
            break
          default:
            throw new Error('The filter: "' + s[l] + '" is not implemented')
        }
      return { data: c, reverseChain: f.reverse().join(' ') }
    }
  })(rt.API),
  (function (e) {
    ;(e.loadFile = function (t, n, r) {
      return (function (i, o, s) {
        ;(o = o !== !1), (s = typeof s == 'function' ? s : function () {})
        var l = void 0
        try {
          l = (function (c, f, h) {
            var g = new XMLHttpRequest(),
              v = 0,
              p = function (b) {
                var w = b.length,
                  L = [],
                  _ = String.fromCharCode
                for (v = 0; v < w; v += 1) L.push(_(255 & b.charCodeAt(v)))
                return L.join('')
              }
            if (
              (g.open('GET', c, !f),
              g.overrideMimeType('text/plain; charset=x-user-defined'),
              f === !1 &&
                (g.onload = function () {
                  g.status === 200 ? h(p(this.responseText)) : h(void 0)
                }),
              g.send(null),
              f && g.status === 200)
            )
              return p(g.responseText)
          })(i, o, s)
        } catch {}
        return l
      })(t, n, r)
    }),
      (e.loadImageFile = e.loadFile)
  })(rt.API),
  (function (e) {
    function t() {
      return (st.html2canvas ? Promise.resolve(st.html2canvas) : yi(() => import('./html2canvas.esm-Ry1SfrtC.js'), __vite__mapDeps([])))
        .catch(function (s) {
          return Promise.reject(new Error('Could not load html2canvas: ' + s))
        })
        .then(function (s) {
          return s.default ? s.default : s
        })
    }
    function n() {
      return (st.DOMPurify ? Promise.resolve(st.DOMPurify) : yi(() => import('./purify.es-zHtM-7sw.js'), __vite__mapDeps([])))
        .catch(function (s) {
          return Promise.reject(new Error('Could not load dompurify: ' + s))
        })
        .then(function (s) {
          return s.default ? s.default : s
        })
    }
    var r = function (s) {
        var l = Et(s)
        return l === 'undefined'
          ? 'undefined'
          : l === 'string' || s instanceof String
            ? 'string'
            : l === 'number' || s instanceof Number
              ? 'number'
              : l === 'function' || s instanceof Function
                ? 'function'
                : s && s.constructor === Array
                  ? 'array'
                  : s && s.nodeType === 1
                    ? 'element'
                    : l === 'object'
                      ? 'object'
                      : 'unknown'
      },
      i = function (s, l) {
        var c = document.createElement(s)
        for (var f in (l.className && (c.className = l.className),
        l.innerHTML && l.dompurify && (c.innerHTML = l.dompurify.sanitize(l.innerHTML)),
        l.style))
          c.style[f] = l.style[f]
        return c
      },
      o = function s(l) {
        var c = Object.assign(s.convert(Promise.resolve()), JSON.parse(JSON.stringify(s.template))),
          f = s.convert(Promise.resolve(), c)
        return (f = (f = f.setProgress(1, s, 1, [s])).set(l))
      }
    ;((o.prototype = Object.create(Promise.prototype)).constructor = o),
      (o.convert = function (s, l) {
        return (s.__proto__ = l || o.prototype), s
      }),
      (o.template = {
        prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function () {} },
        progress: { val: 0, state: null, n: 0, stack: [] },
        opt: { filename: 'file.pdf', margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: 'transparent' }
      }),
      (o.prototype.from = function (s, l) {
        return this.then(function () {
          switch (
            (l =
              l ||
              (function (c) {
                switch (r(c)) {
                  case 'string':
                    return 'string'
                  case 'element':
                    return c.nodeName.toLowerCase() === 'canvas' ? 'canvas' : 'element'
                  default:
                    return 'unknown'
                }
              })(s))
          ) {
            case 'string':
              return this.then(n).then(function (c) {
                return this.set({ src: i('div', { innerHTML: s, dompurify: c }) })
              })
            case 'element':
              return this.set({ src: s })
            case 'canvas':
              return this.set({ canvas: s })
            case 'img':
              return this.set({ img: s })
            default:
              return this.error('Unknown source type.')
          }
        })
      }),
      (o.prototype.to = function (s) {
        switch (s) {
          case 'container':
            return this.toContainer()
          case 'canvas':
            return this.toCanvas()
          case 'img':
            return this.toImg()
          case 'pdf':
            return this.toPdf()
          default:
            return this.error('Invalid target.')
        }
      }),
      (o.prototype.toContainer = function () {
        return this.thenList([
          function () {
            return this.prop.src || this.error('Cannot duplicate - no source HTML.')
          },
          function () {
            return this.prop.pageSize || this.setPageSize()
          }
        ]).then(function () {
          var s = {
              position: 'relative',
              display: 'inline-block',
              width:
                (typeof this.opt.width != 'number' || isNaN(this.opt.width) || typeof this.opt.windowWidth != 'number' || isNaN(this.opt.windowWidth)
                  ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth)
                  : this.opt.windowWidth) + 'px',
              left: 0,
              right: 0,
              top: 0,
              margin: 'auto',
              backgroundColor: this.opt.backgroundColor
            },
            l = (function c(f, h) {
              for (var g = f.nodeType === 3 ? document.createTextNode(f.nodeValue) : f.cloneNode(!1), v = f.firstChild; v; v = v.nextSibling)
                (h !== !0 && v.nodeType === 1 && v.nodeName === 'SCRIPT') || g.appendChild(c(v, h))
              return (
                f.nodeType === 1 &&
                  (f.nodeName === 'CANVAS'
                    ? ((g.width = f.width), (g.height = f.height), g.getContext('2d').drawImage(f, 0, 0))
                    : (f.nodeName !== 'TEXTAREA' && f.nodeName !== 'SELECT') || (g.value = f.value),
                  g.addEventListener(
                    'load',
                    function () {
                      ;(g.scrollTop = f.scrollTop), (g.scrollLeft = f.scrollLeft)
                    },
                    !0
                  )),
                g
              )
            })(this.prop.src, this.opt.html2canvas.javascriptEnabled)
          l.tagName === 'BODY' &&
            (s.height =
              Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
              ) + 'px'),
            (this.prop.overlay = i('div', {
              className: 'html2pdf__overlay',
              style: { position: 'fixed', overflow: 'hidden', zIndex: 1e3, left: '-100000px', right: 0, bottom: 0, top: 0 }
            })),
            (this.prop.container = i('div', { className: 'html2pdf__container', style: s })),
            this.prop.container.appendChild(l),
            this.prop.container.firstChild.appendChild(
              i('div', { style: { clear: 'both', border: '0 none transparent', margin: 0, padding: 0, height: 0 } })
            ),
            (this.prop.container.style.float = 'none'),
            this.prop.overlay.appendChild(this.prop.container),
            document.body.appendChild(this.prop.overlay),
            (this.prop.container.firstChild.style.position = 'relative'),
            (this.prop.container.height =
              Math.max(
                this.prop.container.firstChild.clientHeight,
                this.prop.container.firstChild.scrollHeight,
                this.prop.container.firstChild.offsetHeight
              ) + 'px')
        })
      }),
      (o.prototype.toCanvas = function () {
        var s = [
          function () {
            return document.body.contains(this.prop.container) || this.toContainer()
          }
        ]
        return this.thenList(s)
          .then(t)
          .then(function (l) {
            var c = Object.assign({}, this.opt.html2canvas)
            return delete c.onrendered, l(this.prop.container, c)
          })
          .then(function (l) {
            ;(this.opt.html2canvas.onrendered || function () {})(l), (this.prop.canvas = l), document.body.removeChild(this.prop.overlay)
          })
      }),
      (o.prototype.toContext2d = function () {
        var s = [
          function () {
            return document.body.contains(this.prop.container) || this.toContainer()
          }
        ]
        return this.thenList(s)
          .then(t)
          .then(function (l) {
            var c = this.opt.jsPDF,
              f = this.opt.fontFaces,
              h =
                typeof this.opt.width != 'number' || isNaN(this.opt.width) || typeof this.opt.windowWidth != 'number' || isNaN(this.opt.windowWidth)
                  ? 1
                  : this.opt.width / this.opt.windowWidth,
              g = Object.assign(
                {
                  async: !0,
                  allowTaint: !0,
                  scale: h,
                  scrollX: this.opt.scrollX || 0,
                  scrollY: this.opt.scrollY || 0,
                  backgroundColor: '#ffffff',
                  imageTimeout: 15e3,
                  logging: !0,
                  proxy: null,
                  removeContainer: !0,
                  foreignObjectRendering: !1,
                  useCORS: !1
                },
                this.opt.html2canvas
              )
            if (
              (delete g.onrendered,
              (c.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging),
              (c.context2d.posX = this.opt.x),
              (c.context2d.posY = this.opt.y),
              (c.context2d.margin = this.opt.margin),
              (c.context2d.fontFaces = f),
              f)
            )
              for (var v = 0; v < f.length; ++v) {
                var p = f[v],
                  b = p.src.find(function (w) {
                    return w.format === 'truetype'
                  })
                b && c.addFont(b.url, p.ref.name, p.ref.style)
              }
            return (
              (g.windowHeight = g.windowHeight || 0),
              (g.windowHeight =
                g.windowHeight == 0
                  ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight)
                  : g.windowHeight),
              c.context2d.save(!0),
              l(this.prop.container, g)
            )
          })
          .then(function (l) {
            this.opt.jsPDF.context2d.restore(!0),
              (this.opt.html2canvas.onrendered || function () {})(l),
              (this.prop.canvas = l),
              document.body.removeChild(this.prop.overlay)
          })
      }),
      (o.prototype.toImg = function () {
        return this.thenList([
          function () {
            return this.prop.canvas || this.toCanvas()
          }
        ]).then(function () {
          var s = this.prop.canvas.toDataURL('image/' + this.opt.image.type, this.opt.image.quality)
          ;(this.prop.img = document.createElement('img')), (this.prop.img.src = s)
        })
      }),
      (o.prototype.toPdf = function () {
        return this.thenList([
          function () {
            return this.toContext2d()
          }
        ]).then(function () {
          this.prop.pdf = this.prop.pdf || this.opt.jsPDF
        })
      }),
      (o.prototype.output = function (s, l, c) {
        return (c = c || 'pdf').toLowerCase() === 'img' || c.toLowerCase() === 'image' ? this.outputImg(s, l) : this.outputPdf(s, l)
      }),
      (o.prototype.outputPdf = function (s, l) {
        return this.thenList([
          function () {
            return this.prop.pdf || this.toPdf()
          }
        ]).then(function () {
          return this.prop.pdf.output(s, l)
        })
      }),
      (o.prototype.outputImg = function (s) {
        return this.thenList([
          function () {
            return this.prop.img || this.toImg()
          }
        ]).then(function () {
          switch (s) {
            case void 0:
            case 'img':
              return this.prop.img
            case 'datauristring':
            case 'dataurlstring':
              return this.prop.img.src
            case 'datauri':
            case 'dataurl':
              return (document.location.href = this.prop.img.src)
            default:
              throw 'Image output type "' + s + '" is not supported.'
          }
        })
      }),
      (o.prototype.save = function (s) {
        return this.thenList([
          function () {
            return this.prop.pdf || this.toPdf()
          }
        ])
          .set(s ? { filename: s } : null)
          .then(function () {
            this.prop.pdf.save(this.opt.filename)
          })
      }),
      (o.prototype.doCallback = function () {
        return this.thenList([
          function () {
            return this.prop.pdf || this.toPdf()
          }
        ]).then(function () {
          this.prop.callback(this.prop.pdf)
        })
      }),
      (o.prototype.set = function (s) {
        if (r(s) !== 'object') return this
        var l = Object.keys(s || {}).map(function (c) {
          if (c in o.template.prop)
            return function () {
              this.prop[c] = s[c]
            }
          switch (c) {
            case 'margin':
              return this.setMargin.bind(this, s.margin)
            case 'jsPDF':
              return function () {
                return (this.opt.jsPDF = s.jsPDF), this.setPageSize()
              }
            case 'pageSize':
              return this.setPageSize.bind(this, s.pageSize)
            default:
              return function () {
                this.opt[c] = s[c]
              }
          }
        }, this)
        return this.then(function () {
          return this.thenList(l)
        })
      }),
      (o.prototype.get = function (s, l) {
        return this.then(function () {
          var c = s in o.template.prop ? this.prop[s] : this.opt[s]
          return l ? l(c) : c
        })
      }),
      (o.prototype.setMargin = function (s) {
        return this.then(function () {
          switch (r(s)) {
            case 'number':
              s = [s, s, s, s]
            case 'array':
              if ((s.length === 2 && (s = [s[0], s[1], s[0], s[1]]), s.length === 4)) break
            default:
              return this.error('Invalid margin array.')
          }
          this.opt.margin = s
        }).then(this.setPageSize)
      }),
      (o.prototype.setPageSize = function (s) {
        function l(c, f) {
          return Math.floor(((c * f) / 72) * 96)
        }
        return this.then(function () {
          ;(s = s || rt.getPageSize(this.opt.jsPDF)).hasOwnProperty('inner') ||
            ((s.inner = { width: s.width - this.opt.margin[1] - this.opt.margin[3], height: s.height - this.opt.margin[0] - this.opt.margin[2] }),
            (s.inner.px = { width: l(s.inner.width, s.k), height: l(s.inner.height, s.k) }),
            (s.inner.ratio = s.inner.height / s.inner.width)),
            (this.prop.pageSize = s)
        })
      }),
      (o.prototype.setProgress = function (s, l, c, f) {
        return (
          s != null && (this.progress.val = s),
          l != null && (this.progress.state = l),
          c != null && (this.progress.n = c),
          f != null && (this.progress.stack = f),
          (this.progress.ratio = this.progress.val / this.progress.state),
          this
        )
      }),
      (o.prototype.updateProgress = function (s, l, c, f) {
        return this.setProgress(s ? this.progress.val + s : null, l || null, c ? this.progress.n + c : null, f ? this.progress.stack.concat(f) : null)
      }),
      (o.prototype.then = function (s, l) {
        var c = this
        return this.thenCore(s, l, function (f, h) {
          return (
            c.updateProgress(null, null, 1, [f]),
            Promise.prototype.then
              .call(this, function (g) {
                return c.updateProgress(null, f), g
              })
              .then(f, h)
              .then(function (g) {
                return c.updateProgress(1), g
              })
          )
        })
      }),
      (o.prototype.thenCore = function (s, l, c) {
        ;(c = c || Promise.prototype.then), s && (s = s.bind(this)), l && (l = l.bind(this))
        var f =
            Promise.toString().indexOf('[native code]') !== -1 && Promise.name === 'Promise'
              ? this
              : o.convert(Object.assign({}, this), Promise.prototype),
          h = c.call(f, s, l)
        return o.convert(h, this.__proto__)
      }),
      (o.prototype.thenExternal = function (s, l) {
        return Promise.prototype.then.call(this, s, l)
      }),
      (o.prototype.thenList = function (s) {
        var l = this
        return (
          s.forEach(function (c) {
            l = l.thenCore(c)
          }),
          l
        )
      }),
      (o.prototype.catch = function (s) {
        s && (s = s.bind(this))
        var l = Promise.prototype.catch.call(this, s)
        return o.convert(l, this)
      }),
      (o.prototype.catchExternal = function (s) {
        return Promise.prototype.catch.call(this, s)
      }),
      (o.prototype.error = function (s) {
        return this.then(function () {
          throw new Error(s)
        })
      }),
      (o.prototype.using = o.prototype.set),
      (o.prototype.saveAs = o.prototype.save),
      (o.prototype.export = o.prototype.output),
      (o.prototype.run = o.prototype.then),
      (rt.getPageSize = function (s, l, c) {
        if (Et(s) === 'object') {
          var f = s
          ;(s = f.orientation), (l = f.unit || l), (c = f.format || c)
        }
        ;(l = l || 'mm'), (c = c || 'a4'), (s = ('' + (s || 'P')).toLowerCase())
        var h,
          g = ('' + c).toLowerCase(),
          v = {
            a0: [2383.94, 3370.39],
            a1: [1683.78, 2383.94],
            a2: [1190.55, 1683.78],
            a3: [841.89, 1190.55],
            a4: [595.28, 841.89],
            a5: [419.53, 595.28],
            a6: [297.64, 419.53],
            a7: [209.76, 297.64],
            a8: [147.4, 209.76],
            a9: [104.88, 147.4],
            a10: [73.7, 104.88],
            b0: [2834.65, 4008.19],
            b1: [2004.09, 2834.65],
            b2: [1417.32, 2004.09],
            b3: [1000.63, 1417.32],
            b4: [708.66, 1000.63],
            b5: [498.9, 708.66],
            b6: [354.33, 498.9],
            b7: [249.45, 354.33],
            b8: [175.75, 249.45],
            b9: [124.72, 175.75],
            b10: [87.87, 124.72],
            c0: [2599.37, 3676.54],
            c1: [1836.85, 2599.37],
            c2: [1298.27, 1836.85],
            c3: [918.43, 1298.27],
            c4: [649.13, 918.43],
            c5: [459.21, 649.13],
            c6: [323.15, 459.21],
            c7: [229.61, 323.15],
            c8: [161.57, 229.61],
            c9: [113.39, 161.57],
            c10: [79.37, 113.39],
            dl: [311.81, 623.62],
            letter: [612, 792],
            'government-letter': [576, 756],
            legal: [612, 1008],
            'junior-legal': [576, 360],
            ledger: [1224, 792],
            tabloid: [792, 1224],
            'credit-card': [153, 243]
          }
        switch (l) {
          case 'pt':
            h = 1
            break
          case 'mm':
            h = 72 / 25.4
            break
          case 'cm':
            h = 72 / 2.54
            break
          case 'in':
            h = 72
            break
          case 'px':
            h = 0.75
            break
          case 'pc':
          case 'em':
            h = 12
            break
          case 'ex':
            h = 6
            break
          default:
            throw 'Invalid unit: ' + l
        }
        var p,
          b = 0,
          w = 0
        if (v.hasOwnProperty(g)) (b = v[g][1] / h), (w = v[g][0] / h)
        else
          try {
            ;(b = c[1]), (w = c[0])
          } catch {
            throw new Error('Invalid format: ' + c)
          }
        if (s === 'p' || s === 'portrait') (s = 'p'), w > b && ((p = w), (w = b), (b = p))
        else {
          if (s !== 'l' && s !== 'landscape') throw 'Invalid orientation: ' + s
          ;(s = 'l'), b > w && ((p = w), (w = b), (b = p))
        }
        return { width: w, height: b, unit: l, k: h, orientation: s }
      }),
      (e.html = function (s, l) {
        ;((l = l || {}).callback = l.callback || function () {}),
          (l.html2canvas = l.html2canvas || {}),
          (l.html2canvas.canvas = l.html2canvas.canvas || this.canvas),
          (l.jsPDF = l.jsPDF || this),
          (l.fontFaces = l.fontFaces ? l.fontFaces.map(Ff) : null)
        var c = new o(l)
        return l.worker ? c : c.from(s).doCallback()
      })
  })(rt.API),
  (rt.API.addJS = function (e) {
    return (
      (Lp = e),
      this.internal.events.subscribe('postPutResources', function () {
        ;(Vl = this.internal.newObject()),
          this.internal.out('<<'),
          this.internal.out('/Names [(EmbeddedJS) ' + (Vl + 1) + ' 0 R]'),
          this.internal.out('>>'),
          this.internal.out('endobj'),
          (Ap = this.internal.newObject()),
          this.internal.out('<<'),
          this.internal.out('/S /JavaScript'),
          this.internal.out('/JS (' + Lp + ')'),
          this.internal.out('>>'),
          this.internal.out('endobj')
      }),
      this.internal.events.subscribe('putCatalog', function () {
        Vl !== void 0 && Ap !== void 0 && this.internal.out('/Names <</JavaScript ' + Vl + ' 0 R>>')
      }),
      this
    )
  }),
  (function (e) {
    var t
    e.events.push([
      'postPutResources',
      function () {
        var n = this,
          r = /^(\d+) 0 obj$/
        if (this.outline.root.children.length > 0)
          for (var i = n.outline.render().split(/\r\n/), o = 0; o < i.length; o++) {
            var s = i[o],
              l = r.exec(s)
            if (l != null) {
              var c = l[1]
              n.internal.newObjectDeferredBegin(c, !1)
            }
            n.internal.write(s)
          }
        if (this.outline.createNamedDestinations) {
          var f = this.internal.pages.length,
            h = []
          for (o = 0; o < f; o++) {
            var g = n.internal.newObject()
            h.push(g)
            var v = n.internal.getPageInfo(o + 1)
            n.internal.write('<< /D[' + v.objId + ' 0 R /XYZ null null null]>> endobj')
          }
          var p = n.internal.newObject()
          for (n.internal.write('<< /Names [ '), o = 0; o < h.length; o++) n.internal.write('(page_' + (o + 1) + ')' + h[o] + ' 0 R')
          n.internal.write(' ] >>', 'endobj'),
            (t = n.internal.newObject()),
            n.internal.write('<< /Dests ' + p + ' 0 R'),
            n.internal.write('>>', 'endobj')
        }
      }
    ]),
      e.events.push([
        'putCatalog',
        function () {
          this.outline.root.children.length > 0 &&
            (this.internal.write('/Outlines', this.outline.makeRef(this.outline.root)),
            this.outline.createNamedDestinations && this.internal.write('/Names ' + t + ' 0 R'))
        }
      ]),
      e.events.push([
        'initialized',
        function () {
          var n = this
          ;(n.outline = { createNamedDestinations: !1, root: { children: [] } }),
            (n.outline.add = function (r, i, o) {
              var s = { title: i, options: o, children: [] }
              return r == null && (r = this.root), r.children.push(s), s
            }),
            (n.outline.render = function () {
              return (
                (this.ctx = {}),
                (this.ctx.val = ''),
                (this.ctx.pdf = n),
                this.genIds_r(this.root),
                this.renderRoot(this.root),
                this.renderItems(this.root),
                this.ctx.val
              )
            }),
            (n.outline.genIds_r = function (r) {
              r.id = n.internal.newObjectDeferred()
              for (var i = 0; i < r.children.length; i++) this.genIds_r(r.children[i])
            }),
            (n.outline.renderRoot = function (r) {
              this.objStart(r),
                this.line('/Type /Outlines'),
                r.children.length > 0 &&
                  (this.line('/First ' + this.makeRef(r.children[0])), this.line('/Last ' + this.makeRef(r.children[r.children.length - 1]))),
                this.line('/Count ' + this.count_r({ count: 0 }, r)),
                this.objEnd()
            }),
            (n.outline.renderItems = function (r) {
              for (var i = this.ctx.pdf.internal.getVerticalCoordinateString, o = 0; o < r.children.length; o++) {
                var s = r.children[o]
                this.objStart(s),
                  this.line('/Title ' + this.makeString(s.title)),
                  this.line('/Parent ' + this.makeRef(r)),
                  o > 0 && this.line('/Prev ' + this.makeRef(r.children[o - 1])),
                  o < r.children.length - 1 && this.line('/Next ' + this.makeRef(r.children[o + 1])),
                  s.children.length > 0 &&
                    (this.line('/First ' + this.makeRef(s.children[0])), this.line('/Last ' + this.makeRef(s.children[s.children.length - 1])))
                var l = (this.count = this.count_r({ count: 0 }, s))
                if ((l > 0 && this.line('/Count ' + l), s.options && s.options.pageNumber)) {
                  var c = n.internal.getPageInfo(s.options.pageNumber)
                  this.line('/Dest [' + c.objId + ' 0 R /XYZ 0 ' + i(0) + ' 0]')
                }
                this.objEnd()
              }
              for (var f = 0; f < r.children.length; f++) this.renderItems(r.children[f])
            }),
            (n.outline.line = function (r) {
              this.ctx.val +=
                r +
                `\r
`
            }),
            (n.outline.makeRef = function (r) {
              return r.id + ' 0 R'
            }),
            (n.outline.makeString = function (r) {
              return '(' + n.internal.pdfEscape(r) + ')'
            }),
            (n.outline.objStart = function (r) {
              this.ctx.val +=
                `\r
` +
                r.id +
                ` 0 obj\r
<<\r
`
            }),
            (n.outline.objEnd = function () {
              this.ctx.val += `>> \r
endobj\r
`
            }),
            (n.outline.count_r = function (r, i) {
              for (var o = 0; o < i.children.length; o++) r.count++, this.count_r(r, i.children[o])
              return r.count
            })
        }
      ])
  })(rt.API),
  (function (e) {
    var t = [192, 193, 194, 195, 196, 197, 198, 199]
    e.processJPEG = function (n, r, i, o, s, l) {
      var c,
        f = this.decode.DCT_DECODE,
        h = null
      if (typeof n == 'string' || this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) {
        switch (
          ((n = s || n),
          (n = this.__addimage__.isArrayBuffer(n) ? new Uint8Array(n) : n),
          (c = (function (g) {
            for (
              var v, p = 256 * g.charCodeAt(4) + g.charCodeAt(5), b = g.length, w = { width: 0, height: 0, numcomponents: 1 }, L = 4;
              L < b;
              L += 2
            ) {
              if (((L += p), t.indexOf(g.charCodeAt(L + 1)) !== -1)) {
                ;(v = 256 * g.charCodeAt(L + 5) + g.charCodeAt(L + 6)),
                  (w = { width: 256 * g.charCodeAt(L + 7) + g.charCodeAt(L + 8), height: v, numcomponents: g.charCodeAt(L + 9) })
                break
              }
              p = 256 * g.charCodeAt(L + 2) + g.charCodeAt(L + 3)
            }
            return w
          })((n = this.__addimage__.isArrayBufferView(n) ? this.__addimage__.arrayBufferToBinaryString(n) : n))).numcomponents)
        ) {
          case 1:
            l = this.color_spaces.DEVICE_GRAY
            break
          case 4:
            l = this.color_spaces.DEVICE_CMYK
            break
          case 3:
            l = this.color_spaces.DEVICE_RGB
        }
        h = { data: n, width: c.width, height: c.height, colorSpace: l, bitsPerComponent: 8, filter: f, index: r, alias: i }
      }
      return h
    }
  })(rt.API)
var fs,
  Wl,
  Np,
  Pp,
  Cp,
  H4 = (function () {
    var e, t, n
    function r(o) {
      var s, l, c, f, h, g, v, p, b, w, L, _, x, k
      for (
        this.data = o, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, g = null;
        ;

      ) {
        switch (
          ((s = this.readUInt32()),
          (b = function () {
            var C, D
            for (D = [], C = 0; C < 4; ++C) D.push(String.fromCharCode(this.data[this.pos++]))
            return D
          }
            .call(this)
            .join('')))
        ) {
          case 'IHDR':
            ;(this.width = this.readUInt32()),
              (this.height = this.readUInt32()),
              (this.bits = this.data[this.pos++]),
              (this.colorType = this.data[this.pos++]),
              (this.compressionMethod = this.data[this.pos++]),
              (this.filterMethod = this.data[this.pos++]),
              (this.interlaceMethod = this.data[this.pos++])
            break
          case 'acTL':
            this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] }
            break
          case 'PLTE':
            this.palette = this.read(s)
            break
          case 'fcTL':
            g && this.animation.frames.push(g),
              (this.pos += 4),
              (g = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }),
              (h = this.readUInt16()),
              (f = this.readUInt16() || 100),
              (g.delay = (1e3 * h) / f),
              (g.disposeOp = this.data[this.pos++]),
              (g.blendOp = this.data[this.pos++]),
              (g.data = [])
            break
          case 'IDAT':
          case 'fdAT':
            for (
              b === 'fdAT' && ((this.pos += 4), (s -= 4)), o = (g != null ? g.data : void 0) || this.imgData, _ = 0;
              0 <= s ? _ < s : _ > s;
              0 <= s ? ++_ : --_
            )
              o.push(this.data[this.pos++])
            break
          case 'tRNS':
            switch (((this.transparency = {}), this.colorType)) {
              case 3:
                if (((c = this.palette.length / 3), (this.transparency.indexed = this.read(s)), this.transparency.indexed.length > c))
                  throw new Error('More transparent colors than palette size')
                if ((w = c - this.transparency.indexed.length) > 0)
                  for (x = 0; 0 <= w ? x < w : x > w; 0 <= w ? ++x : --x) this.transparency.indexed.push(255)
                break
              case 0:
                this.transparency.grayscale = this.read(s)[0]
                break
              case 2:
                this.transparency.rgb = this.read(s)
            }
            break
          case 'tEXt':
            ;(v = (L = this.read(s)).indexOf(0)),
              (p = String.fromCharCode.apply(String, L.slice(0, v))),
              (this.text[p] = String.fromCharCode.apply(String, L.slice(v + 1)))
            break
          case 'IEND':
            return (
              g && this.animation.frames.push(g),
              (this.colors = function () {
                switch (this.colorType) {
                  case 0:
                  case 3:
                  case 4:
                    return 1
                  case 2:
                  case 6:
                    return 3
                }
              }.call(this)),
              (this.hasAlphaChannel = (k = this.colorType) === 4 || k === 6),
              (l = this.colors + (this.hasAlphaChannel ? 1 : 0)),
              (this.pixelBitlength = this.bits * l),
              (this.colorSpace = function () {
                switch (this.colors) {
                  case 1:
                    return 'DeviceGray'
                  case 3:
                    return 'DeviceRGB'
                }
              }.call(this)),
              void (this.imgData = new Uint8Array(this.imgData))
            )
          default:
            this.pos += s
        }
        if (((this.pos += 4), this.pos > this.data.length)) throw new Error('Incomplete or corrupt PNG file')
      }
    }
    ;(r.prototype.read = function (o) {
      var s, l
      for (l = [], s = 0; 0 <= o ? s < o : s > o; 0 <= o ? ++s : --s) l.push(this.data[this.pos++])
      return l
    }),
      (r.prototype.readUInt32 = function () {
        return (this.data[this.pos++] << 24) | (this.data[this.pos++] << 16) | (this.data[this.pos++] << 8) | this.data[this.pos++]
      }),
      (r.prototype.readUInt16 = function () {
        return (this.data[this.pos++] << 8) | this.data[this.pos++]
      }),
      (r.prototype.decodePixels = function (o) {
        var s = this.pixelBitlength / 8,
          l = new Uint8Array(this.width * this.height * s),
          c = 0,
          f = this
        if ((o == null && (o = this.imgData), o.length === 0)) return new Uint8Array(0)
        function h(g, v, p, b) {
          var w,
            L,
            _,
            x,
            k,
            C,
            D,
            U,
            E,
            N,
            V,
            Q,
            P,
            S,
            z,
            $,
            de,
            W,
            H,
            X,
            ne,
            fe = Math.ceil((f.width - g) / p),
            xe = Math.ceil((f.height - v) / b),
            A = f.width == fe && f.height == xe
          for (S = s * fe, Q = A ? l : new Uint8Array(S * xe), C = o.length, P = 0, L = 0; P < xe && c < C; ) {
            switch (o[c++]) {
              case 0:
                for (x = de = 0; de < S; x = de += 1) Q[L++] = o[c++]
                break
              case 1:
                for (x = W = 0; W < S; x = W += 1) (w = o[c++]), (k = x < s ? 0 : Q[L - s]), (Q[L++] = (w + k) % 256)
                break
              case 2:
                for (x = H = 0; H < S; x = H += 1)
                  (w = o[c++]), (_ = (x - (x % s)) / s), (z = P && Q[(P - 1) * S + _ * s + (x % s)]), (Q[L++] = (z + w) % 256)
                break
              case 3:
                for (x = X = 0; X < S; x = X += 1)
                  (w = o[c++]),
                    (_ = (x - (x % s)) / s),
                    (k = x < s ? 0 : Q[L - s]),
                    (z = P && Q[(P - 1) * S + _ * s + (x % s)]),
                    (Q[L++] = (w + Math.floor((k + z) / 2)) % 256)
                break
              case 4:
                for (x = ne = 0; ne < S; x = ne += 1)
                  (w = o[c++]),
                    (_ = (x - (x % s)) / s),
                    (k = x < s ? 0 : Q[L - s]),
                    P === 0 ? (z = $ = 0) : ((z = Q[(P - 1) * S + _ * s + (x % s)]), ($ = _ && Q[(P - 1) * S + (_ - 1) * s + (x % s)])),
                    (D = k + z - $),
                    (U = Math.abs(D - k)),
                    (N = Math.abs(D - z)),
                    (V = Math.abs(D - $)),
                    (E = U <= N && U <= V ? k : N <= V ? z : $),
                    (Q[L++] = (w + E) % 256)
                break
              default:
                throw new Error('Invalid filter algorithm: ' + o[c - 1])
            }
            if (!A) {
              var B = ((v + P * b) * f.width + g) * s,
                G = P * S
              for (x = 0; x < fe; x += 1) {
                for (var ee = 0; ee < s; ee += 1) l[B++] = Q[G++]
                B += (p - 1) * s
              }
            }
            P++
          }
        }
        return (
          (o = x4(o)),
          f.interlaceMethod == 1
            ? (h(0, 0, 8, 8), h(4, 0, 8, 8), h(0, 4, 4, 8), h(2, 0, 4, 4), h(0, 2, 2, 4), h(1, 0, 2, 2), h(0, 1, 1, 2))
            : h(0, 0, 1, 1),
          l
        )
      }),
      (r.prototype.decodePalette = function () {
        var o, s, l, c, f, h, g, v, p
        for (
          l = this.palette, h = this.transparency.indexed || [], f = new Uint8Array((h.length || 0) + l.length), c = 0, o = 0, s = g = 0, v = l.length;
          g < v;
          s = g += 3
        )
          (f[c++] = l[s]), (f[c++] = l[s + 1]), (f[c++] = l[s + 2]), (f[c++] = (p = h[o++]) != null ? p : 255)
        return f
      }),
      (r.prototype.copyToImageData = function (o, s) {
        var l, c, f, h, g, v, p, b, w, L, _
        if (
          ((c = this.colors),
          (w = null),
          (l = this.hasAlphaChannel),
          this.palette.length && ((w = (_ = this._decodedPalette) != null ? _ : (this._decodedPalette = this.decodePalette())), (c = 4), (l = !0)),
          (b = (f = o.data || o).length),
          (g = w || s),
          (h = v = 0),
          c === 1)
        )
          for (; h < b; ) (p = w ? 4 * s[h / 4] : v), (L = g[p++]), (f[h++] = L), (f[h++] = L), (f[h++] = L), (f[h++] = l ? g[p++] : 255), (v = p)
        else for (; h < b; ) (p = w ? 4 * s[h / 4] : v), (f[h++] = g[p++]), (f[h++] = g[p++]), (f[h++] = g[p++]), (f[h++] = l ? g[p++] : 255), (v = p)
      }),
      (r.prototype.decode = function () {
        var o
        return (o = new Uint8Array(this.width * this.height * 4)), this.copyToImageData(o, this.decodePixels()), o
      })
    var i = function () {
      if (Object.prototype.toString.call(st) === '[object Window]') {
        try {
          ;(t = st.document.createElement('canvas')), (n = t.getContext('2d'))
        } catch {
          return !1
        }
        return !0
      }
      return !1
    }
    return (
      i(),
      (e = function (o) {
        var s
        if (i() === !0)
          return (
            (n.width = o.width),
            (n.height = o.height),
            n.clearRect(0, 0, o.width, o.height),
            n.putImageData(o, 0, 0),
            ((s = new Image()).src = t.toDataURL()),
            s
          )
        throw new Error('This method requires a Browser with Canvas-capability.')
      }),
      (r.prototype.decodeFrames = function (o) {
        var s, l, c, f, h, g, v, p
        if (this.animation) {
          for (p = [], l = h = 0, g = (v = this.animation.frames).length; h < g; l = ++h)
            (s = v[l]),
              (c = o.createImageData(s.width, s.height)),
              (f = this.decodePixels(new Uint8Array(s.data))),
              this.copyToImageData(c, f),
              (s.imageData = c),
              p.push((s.image = e(c)))
          return p
        }
      }),
      (r.prototype.renderFrame = function (o, s) {
        var l, c, f
        return (
          (l = (c = this.animation.frames)[s]),
          (f = c[s - 1]),
          s === 0 && o.clearRect(0, 0, this.width, this.height),
          (f != null ? f.disposeOp : void 0) === 1
            ? o.clearRect(f.xOffset, f.yOffset, f.width, f.height)
            : (f != null ? f.disposeOp : void 0) === 2 && o.putImageData(f.imageData, f.xOffset, f.yOffset),
          l.blendOp === 0 && o.clearRect(l.xOffset, l.yOffset, l.width, l.height),
          o.drawImage(l.image, l.xOffset, l.yOffset)
        )
      }),
      (r.prototype.animate = function (o) {
        var s,
          l,
          c,
          f,
          h,
          g,
          v = this
        return (
          (l = 0),
          (g = this.animation),
          (f = g.numFrames),
          (c = g.frames),
          (h = g.numPlays),
          (s = function () {
            var p, b
            if (((p = l++ % f), (b = c[p]), v.renderFrame(o, p), f > 1 && l / f < h)) return (v.animation._timeout = setTimeout(s, b.delay))
          })()
        )
      }),
      (r.prototype.stopAnimation = function () {
        var o
        return clearTimeout((o = this.animation) != null ? o._timeout : void 0)
      }),
      (r.prototype.render = function (o) {
        var s, l
        return (
          o._png && o._png.stopAnimation(),
          (o._png = this),
          (o.width = this.width),
          (o.height = this.height),
          (s = o.getContext('2d')),
          this.animation
            ? (this.decodeFrames(s), this.animate(s))
            : ((l = s.createImageData(this.width, this.height)), this.copyToImageData(l, this.decodePixels()), s.putImageData(l, 0, 0))
        )
      }),
      r
    )
  })()
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 *//**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */ function $4(e) {
  var t = 0
  if (e[t++] !== 71 || e[t++] !== 73 || e[t++] !== 70 || e[t++] !== 56 || ((e[t++] + 1) & 253) != 56 || e[t++] !== 97)
    throw new Error('Invalid GIF 87a/89a header.')
  var n = e[t++] | (e[t++] << 8),
    r = e[t++] | (e[t++] << 8),
    i = e[t++],
    o = i >> 7,
    s = 1 << ((7 & i) + 1)
  e[t++], e[t++]
  var l = null,
    c = null
  o && ((l = t), (c = s), (t += 3 * s))
  var f = !0,
    h = [],
    g = 0,
    v = null,
    p = 0,
    b = null
  for (this.width = n, this.height = r; f && t < e.length; )
    switch (e[t++]) {
      case 33:
        switch (e[t++]) {
          case 255:
            if (
              e[t] !== 11 ||
              (e[t + 1] == 78 &&
                e[t + 2] == 69 &&
                e[t + 3] == 84 &&
                e[t + 4] == 83 &&
                e[t + 5] == 67 &&
                e[t + 6] == 65 &&
                e[t + 7] == 80 &&
                e[t + 8] == 69 &&
                e[t + 9] == 50 &&
                e[t + 10] == 46 &&
                e[t + 11] == 48 &&
                e[t + 12] == 3 &&
                e[t + 13] == 1 &&
                e[t + 16] == 0)
            )
              (t += 14), (b = e[t++] | (e[t++] << 8)), t++
            else
              for (t += 12; ; ) {
                if (!((P = e[t++]) >= 0)) throw Error('Invalid block size')
                if (P === 0) break
                t += P
              }
            break
          case 249:
            if (e[t++] !== 4 || e[t + 4] !== 0) throw new Error('Invalid graphics extension block.')
            var w = e[t++]
            ;(g = e[t++] | (e[t++] << 8)), (v = e[t++]), !(1 & w) && (v = null), (p = (w >> 2) & 7), t++
            break
          case 254:
            for (;;) {
              if (!((P = e[t++]) >= 0)) throw Error('Invalid block size')
              if (P === 0) break
              t += P
            }
            break
          default:
            throw new Error('Unknown graphic control label: 0x' + e[t - 1].toString(16))
        }
        break
      case 44:
        var L = e[t++] | (e[t++] << 8),
          _ = e[t++] | (e[t++] << 8),
          x = e[t++] | (e[t++] << 8),
          k = e[t++] | (e[t++] << 8),
          C = e[t++],
          D = (C >> 6) & 1,
          U = 1 << ((7 & C) + 1),
          E = l,
          N = c,
          V = !1
        C >> 7 && ((V = !0), (E = t), (N = U), (t += 3 * U))
        var Q = t
        for (t++; ; ) {
          var P
          if (!((P = e[t++]) >= 0)) throw Error('Invalid block size')
          if (P === 0) break
          t += P
        }
        h.push({
          x: L,
          y: _,
          width: x,
          height: k,
          has_local_palette: V,
          palette_offset: E,
          palette_size: N,
          data_offset: Q,
          data_length: t - Q,
          transparent_index: v,
          interlaced: !!D,
          delay: g,
          disposal: p
        })
        break
      case 59:
        f = !1
        break
      default:
        throw new Error('Unknown gif block: 0x' + e[t - 1].toString(16))
    }
  ;(this.numFrames = function () {
    return h.length
  }),
    (this.loopCount = function () {
      return b
    }),
    (this.frameInfo = function (S) {
      if (S < 0 || S >= h.length) throw new Error('Frame index out of range.')
      return h[S]
    }),
    (this.decodeAndBlitFrameBGRA = function (S, z) {
      var $ = this.frameInfo(S),
        de = $.width * $.height,
        W = new Uint8Array(de)
      jp(e, $.data_offset, W, de)
      var H = $.palette_offset,
        X = $.transparent_index
      X === null && (X = 256)
      var ne = $.width,
        fe = n - ne,
        xe = ne,
        A = 4 * ($.y * n + $.x),
        B = 4 * (($.y + $.height) * n + $.x),
        G = A,
        ee = 4 * fe
      $.interlaced === !0 && (ee += 4 * n * 7)
      for (var re = 8, Y = 0, oe = W.length; Y < oe; ++Y) {
        var se = W[Y]
        if ((xe === 0 && ((xe = ne), (G += ee) >= B && ((ee = 4 * fe + 4 * n * (re - 1)), (G = A + (ne + fe) * (re << 1)), (re >>= 1))), se === X))
          G += 4
        else {
          var Se = e[H + 3 * se],
            je = e[H + 3 * se + 1],
            q = e[H + 3 * se + 2]
          ;(z[G++] = q), (z[G++] = je), (z[G++] = Se), (z[G++] = 255)
        }
        --xe
      }
    }),
    (this.decodeAndBlitFrameRGBA = function (S, z) {
      var $ = this.frameInfo(S),
        de = $.width * $.height,
        W = new Uint8Array(de)
      jp(e, $.data_offset, W, de)
      var H = $.palette_offset,
        X = $.transparent_index
      X === null && (X = 256)
      var ne = $.width,
        fe = n - ne,
        xe = ne,
        A = 4 * ($.y * n + $.x),
        B = 4 * (($.y + $.height) * n + $.x),
        G = A,
        ee = 4 * fe
      $.interlaced === !0 && (ee += 4 * n * 7)
      for (var re = 8, Y = 0, oe = W.length; Y < oe; ++Y) {
        var se = W[Y]
        if ((xe === 0 && ((xe = ne), (G += ee) >= B && ((ee = 4 * fe + 4 * n * (re - 1)), (G = A + (ne + fe) * (re << 1)), (re >>= 1))), se === X))
          G += 4
        else {
          var Se = e[H + 3 * se],
            je = e[H + 3 * se + 1],
            q = e[H + 3 * se + 2]
          ;(z[G++] = Se), (z[G++] = je), (z[G++] = q), (z[G++] = 255)
        }
        --xe
      }
    })
}
function jp(e, t, n, r) {
  for (
    var i = e[t++], o = 1 << i, s = o + 1, l = s + 1, c = i + 1, f = (1 << c) - 1, h = 0, g = 0, v = 0, p = e[t++], b = new Int32Array(4096), w = null;
    ;

  ) {
    for (; h < 16 && p !== 0; ) (g |= e[t++] << h), (h += 8), p === 1 ? (p = e[t++]) : --p
    if (h < c) break
    var L = g & f
    if (((g >>= c), (h -= c), L !== o)) {
      if (L === s) break
      for (var _ = L < l ? L : w, x = 0, k = _; k > o; ) (k = b[k] >> 8), ++x
      var C = k
      if (v + x + (_ !== L ? 1 : 0) > r) return void Ot.log('Warning, gif stream longer than expected.')
      n[v++] = C
      var D = (v += x)
      for (_ !== L && (n[v++] = C), k = _; x--; ) (k = b[k]), (n[--D] = 255 & k), (k >>= 8)
      w !== null && l < 4096 && ((b[l++] = (w << 8) | C), l >= f + 1 && c < 12 && (++c, (f = (f << 1) | 1))), (w = L)
    } else (l = s + 1), (f = (1 << (c = i + 1)) - 1), (w = null)
  }
  return v !== r && Ot.log('Warning, gif stream shorter than expected.'), n
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/ function Qu(e) {
  var t,
    n,
    r,
    i,
    o,
    s = Math.floor,
    l = new Array(64),
    c = new Array(64),
    f = new Array(64),
    h = new Array(64),
    g = new Array(65535),
    v = new Array(65535),
    p = new Array(64),
    b = new Array(64),
    w = [],
    L = 0,
    _ = 7,
    x = new Array(64),
    k = new Array(64),
    C = new Array(64),
    D = new Array(256),
    U = new Array(2048),
    E = [
      0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52,
      54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63
    ],
    N = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    V = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    Q = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
    P = [
      1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114,
      130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89,
      90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149,
      150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199,
      200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247,
      248, 249, 250
    ],
    S = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    $ = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
    de = [
      0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10,
      22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89,
      90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148,
      149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198,
      199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248,
      249, 250
    ]
  function W(A, B) {
    for (var G = 0, ee = 0, re = new Array(), Y = 1; Y <= 16; Y++) {
      for (var oe = 1; oe <= A[Y]; oe++) (re[B[ee]] = []), (re[B[ee]][0] = G), (re[B[ee]][1] = Y), ee++, G++
      G *= 2
    }
    return re
  }
  function H(A) {
    for (var B = A[0], G = A[1] - 1; G >= 0; ) B & (1 << G) && (L |= 1 << _), G--, --_ < 0 && (L == 255 ? (X(255), X(0)) : X(L), (_ = 7), (L = 0))
  }
  function X(A) {
    w.push(A)
  }
  function ne(A) {
    X((A >> 8) & 255), X(255 & A)
  }
  function fe(A, B, G, ee, re) {
    for (
      var Y,
        oe = re[0],
        se = re[240],
        Se = (function (ge, we) {
          var ve,
            Pe,
            Ie,
            Me,
            Be,
            $e,
            Qe,
            Ze,
            Ge,
            ot,
            qe = 0
          for (Ge = 0; Ge < 8; ++Ge) {
            ;(ve = ge[qe]), (Pe = ge[qe + 1]), (Ie = ge[qe + 2]), (Me = ge[qe + 3]), (Be = ge[qe + 4]), ($e = ge[qe + 5]), (Qe = ge[qe + 6])
            var cn = ve + (Ze = ge[qe + 7]),
              gt = ve - Ze,
              Rn = Pe + Qe,
              dt = Pe - Qe,
              vt = Ie + $e,
              Kn = Ie - $e,
              Nt = Me + Be,
              lo = Me - Be,
              $t = cn + Nt,
              pr = cn - Nt,
              ri = Rn + vt,
              Vt = Rn - vt
            ;(ge[qe] = $t + ri), (ge[qe + 4] = $t - ri)
            var lt = 0.707106781 * (Vt + pr)
            ;(ge[qe + 2] = pr + lt), (ge[qe + 6] = pr - lt)
            var Pt = 0.382683433 * (($t = lo + Kn) - (Vt = dt + gt)),
              co = 0.5411961 * $t + Pt,
              bn = 1.306562965 * Vt + Pt,
              Mr = 0.707106781 * (ri = Kn + dt),
              Dr = gt + Mr,
              it = gt - Mr
            ;(ge[qe + 5] = it + co), (ge[qe + 3] = it - co), (ge[qe + 1] = Dr + bn), (ge[qe + 7] = Dr - bn), (qe += 8)
          }
          for (qe = 0, Ge = 0; Ge < 8; ++Ge) {
            ;(ve = ge[qe]), (Pe = ge[qe + 8]), (Ie = ge[qe + 16]), (Me = ge[qe + 24]), (Be = ge[qe + 32]), ($e = ge[qe + 40]), (Qe = ge[qe + 48])
            var gr = ve + (Ze = ge[qe + 56]),
              Br = ve - Ze,
              Mn = Pe + Qe,
              un = Pe - Qe,
              nn = Ie + $e,
              Jn = Ie - $e,
              Oo = Me + Be,
              ii = Me - Be,
              mr = gr + Oo,
              vr = gr - Oo,
              br = Mn + nn,
              qr = Mn - nn
            ;(ge[qe] = mr + br), (ge[qe + 32] = mr - br)
            var tr = 0.707106781 * (qr + vr)
            ;(ge[qe + 16] = vr + tr), (ge[qe + 48] = vr - tr)
            var zr = 0.382683433 * ((mr = ii + Jn) - (qr = un + Br)),
              uo = 0.5411961 * mr + zr,
              Ro = 1.306562965 * qr + zr,
              Mo = 0.707106781 * (br = Jn + un),
              Do = Br + Mo,
              Bo = Br - Mo
            ;(ge[qe + 40] = Bo + uo), (ge[qe + 24] = Bo - uo), (ge[qe + 8] = Do + Ro), (ge[qe + 56] = Do - Ro), qe++
          }
          for (Ge = 0; Ge < 64; ++Ge) (ot = ge[Ge] * we[Ge]), (p[Ge] = ot > 0 ? (ot + 0.5) | 0 : (ot - 0.5) | 0)
          return p
        })(A, B),
        je = 0;
      je < 64;
      ++je
    )
      b[E[je]] = Se[je]
    var q = b[0] - G
    ;(G = b[0]), q == 0 ? H(ee[0]) : (H(ee[v[(Y = 32767 + q)]]), H(g[Y]))
    for (var K = 63; K > 0 && b[K] == 0; ) K--
    if (K == 0) return H(oe), G
    for (var ae, ie = 1; ie <= K; ) {
      for (var R = ie; b[ie] == 0 && ie <= K; ) ++ie
      var ke = ie - R
      if (ke >= 16) {
        ae = ke >> 4
        for (var Le = 1; Le <= ae; ++Le) H(se)
        ke &= 15
      }
      ;(Y = 32767 + b[ie]), H(re[(ke << 4) + v[Y]]), H(g[Y]), ie++
    }
    return K != 63 && H(oe), G
  }
  function xe(A) {
    ;(A = Math.min(Math.max(A, 1), 100)),
      o != A &&
        ((function (B) {
          for (
            var G = [
                16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22,
                37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99
              ],
              ee = 0;
            ee < 64;
            ee++
          ) {
            var re = s((G[ee] * B + 50) / 100)
            ;(re = Math.min(Math.max(re, 1), 255)), (l[E[ee]] = re)
          }
          for (
            var Y = [
                17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99,
                99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99
              ],
              oe = 0;
            oe < 64;
            oe++
          ) {
            var se = s((Y[oe] * B + 50) / 100)
            ;(se = Math.min(Math.max(se, 1), 255)), (c[E[oe]] = se)
          }
          for (var Se = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], je = 0, q = 0; q < 8; q++)
            for (var K = 0; K < 8; K++) (f[je] = 1 / (l[E[je]] * Se[q] * Se[K] * 8)), (h[je] = 1 / (c[E[je]] * Se[q] * Se[K] * 8)), je++
        })(A < 50 ? Math.floor(5e3 / A) : Math.floor(200 - 2 * A)),
        (o = A))
  }
  ;(this.encode = function (A, B) {
    B && xe(B),
      (w = new Array()),
      (L = 0),
      (_ = 7),
      ne(65496),
      ne(65504),
      ne(16),
      X(74),
      X(70),
      X(73),
      X(70),
      X(0),
      X(1),
      X(1),
      X(0),
      ne(1),
      ne(1),
      X(0),
      X(0),
      (function () {
        ne(65499), ne(132), X(0)
        for (var Pe = 0; Pe < 64; Pe++) X(l[Pe])
        X(1)
        for (var Ie = 0; Ie < 64; Ie++) X(c[Ie])
      })(),
      (function (Pe, Ie) {
        ne(65472), ne(17), X(8), ne(Ie), ne(Pe), X(3), X(1), X(17), X(0), X(2), X(17), X(1), X(3), X(17), X(1)
      })(A.width, A.height),
      (function () {
        ne(65476), ne(418), X(0)
        for (var Pe = 0; Pe < 16; Pe++) X(N[Pe + 1])
        for (var Ie = 0; Ie <= 11; Ie++) X(V[Ie])
        X(16)
        for (var Me = 0; Me < 16; Me++) X(Q[Me + 1])
        for (var Be = 0; Be <= 161; Be++) X(P[Be])
        X(1)
        for (var $e = 0; $e < 16; $e++) X(S[$e + 1])
        for (var Qe = 0; Qe <= 11; Qe++) X(z[Qe])
        X(17)
        for (var Ze = 0; Ze < 16; Ze++) X($[Ze + 1])
        for (var Ge = 0; Ge <= 161; Ge++) X(de[Ge])
      })(),
      ne(65498),
      ne(12),
      X(3),
      X(1),
      X(0),
      X(2),
      X(17),
      X(3),
      X(17),
      X(0),
      X(63),
      X(0)
    var G = 0,
      ee = 0,
      re = 0
    ;(L = 0), (_ = 7), (this.encode.displayName = '_encode_')
    for (var Y, oe, se, Se, je, q, K, ae, ie, R = A.data, ke = A.width, Le = A.height, ge = 4 * ke, we = 0; we < Le; ) {
      for (Y = 0; Y < ge; ) {
        for (je = ge * we + Y, K = -1, ae = 0, ie = 0; ie < 64; ie++)
          (q = je + (ae = ie >> 3) * ge + (K = 4 * (7 & ie))),
            we + ae >= Le && (q -= ge * (we + 1 + ae - Le)),
            Y + K >= ge && (q -= Y + K - ge + 4),
            (oe = R[q++]),
            (se = R[q++]),
            (Se = R[q++]),
            (x[ie] = ((U[oe] + U[(se + 256) >> 0] + U[(Se + 512) >> 0]) >> 16) - 128),
            (k[ie] = ((U[(oe + 768) >> 0] + U[(se + 1024) >> 0] + U[(Se + 1280) >> 0]) >> 16) - 128),
            (C[ie] = ((U[(oe + 1280) >> 0] + U[(se + 1536) >> 0] + U[(Se + 1792) >> 0]) >> 16) - 128)
        ;(G = fe(x, f, G, t, r)), (ee = fe(k, h, ee, n, i)), (re = fe(C, h, re, n, i)), (Y += 32)
      }
      we += 8
    }
    if (_ >= 0) {
      var ve = []
      ;(ve[1] = _ + 1), (ve[0] = (1 << (_ + 1)) - 1), H(ve)
    }
    return ne(65497), new Uint8Array(w)
  }),
    (e = e || 50),
    (function () {
      for (var A = String.fromCharCode, B = 0; B < 256; B++) D[B] = A(B)
    })(),
    (t = W(N, V)),
    (n = W(S, z)),
    (r = W(Q, P)),
    (i = W($, de)),
    (function () {
      for (var A = 1, B = 2, G = 1; G <= 15; G++) {
        for (var ee = A; ee < B; ee++) (v[32767 + ee] = G), (g[32767 + ee] = []), (g[32767 + ee][1] = G), (g[32767 + ee][0] = ee)
        for (var re = -(B - 1); re <= -A; re++) (v[32767 + re] = G), (g[32767 + re] = []), (g[32767 + re][1] = G), (g[32767 + re][0] = B - 1 + re)
        ;(A <<= 1), (B <<= 1)
      }
    })(),
    (function () {
      for (var A = 0; A < 256; A++)
        (U[A] = 19595 * A),
          (U[(A + 256) >> 0] = 38470 * A),
          (U[(A + 512) >> 0] = 7471 * A + 32768),
          (U[(A + 768) >> 0] = -11059 * A),
          (U[(A + 1024) >> 0] = -21709 * A),
          (U[(A + 1280) >> 0] = 32768 * A + 8421375),
          (U[(A + 1536) >> 0] = -27439 * A),
          (U[(A + 1792) >> 0] = -5329 * A)
    })(),
    xe(e)
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function Cr(e, t) {
  if (
    ((this.pos = 0),
    (this.buffer = e),
    (this.datav = new DataView(e.buffer)),
    (this.is_with_alpha = !!t),
    (this.bottom_up = !0),
    (this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1])),
    (this.pos += 2),
    ['BM', 'BA', 'CI', 'CP', 'IC', 'PT'].indexOf(this.flag) === -1)
  )
    throw new Error('Invalid BMP File')
  this.parseHeader(), this.parseBGR()
}
function Ip(e) {
  function t(N) {
    if (!N) throw Error('assert :P')
  }
  function n(N, V, Q) {
    for (var P = 0; 4 > P; P++) if (N[V + P] != Q.charCodeAt(P)) return !0
    return !1
  }
  function r(N, V, Q, P, S) {
    for (var z = 0; z < S; z++) N[V + z] = Q[P + z]
  }
  function i(N, V, Q, P) {
    for (var S = 0; S < P; S++) N[V + S] = Q
  }
  function o(N) {
    return new Int32Array(N)
  }
  function s(N, V) {
    for (var Q = [], P = 0; P < N; P++) Q.push(new V())
    return Q
  }
  function l(N, V) {
    var Q = []
    return (
      (function P(S, z, $) {
        for (var de = $[z], W = 0; W < de && (S.push($.length > z + 1 ? [] : new V()), !($.length < z + 1)); W++) P(S[W], z + 1, $)
      })(Q, 0, N),
      Q
    )
  }
  var c = function () {
    var N = this
    function V(a, u) {
      for (var m = (1 << (u - 1)) >>> 0; a & m; ) m >>>= 1
      return m ? (a & (m - 1)) + m : a
    }
    function Q(a, u, m, y, j) {
      t(!(y % m))
      do a[u + (y -= m)] = j
      while (0 < y)
    }
    function P(a, u, m, y, j) {
      if ((t(2328 >= j), 512 >= j)) var T = o(512)
      else if ((T = o(j)) == null) return 0
      return (function (F, O, M, J, ce, be) {
        var ye,
          pe,
          Oe = O,
          Ae = 1 << M,
          ue = o(16),
          he = o(16)
        for (t(ce != 0), t(J != null), t(F != null), t(0 < M), pe = 0; pe < ce; ++pe) {
          if (15 < J[pe]) return 0
          ++ue[J[pe]]
        }
        if (ue[0] == ce) return 0
        for (he[1] = 0, ye = 1; 15 > ye; ++ye) {
          if (ue[ye] > 1 << ye) return 0
          he[ye + 1] = he[ye] + ue[ye]
        }
        for (pe = 0; pe < ce; ++pe) (ye = J[pe]), 0 < J[pe] && (be[he[ye]++] = pe)
        if (he[15] == 1) return ((J = new S()).g = 0), (J.value = be[0]), Q(F, Oe, 1, Ae, J), Ae
        var Ee,
          Re = -1,
          Te = Ae - 1,
          We = 0,
          ze = 1,
          nt = 1,
          Ue = 1 << M
        for (pe = 0, ye = 1, ce = 2; ye <= M; ++ye, ce <<= 1) {
          if (((ze += nt <<= 1), 0 > (nt -= ue[ye]))) return 0
          for (; 0 < ue[ye]; --ue[ye]) ((J = new S()).g = ye), (J.value = be[pe++]), Q(F, Oe + We, ce, Ue, J), (We = V(We, ye))
        }
        for (ye = M + 1, ce = 2; 15 >= ye; ++ye, ce <<= 1) {
          if (((ze += nt <<= 1), 0 > (nt -= ue[ye]))) return 0
          for (; 0 < ue[ye]; --ue[ye]) {
            if (((J = new S()), (We & Te) != Re)) {
              for (Oe += Ue, Ee = 1 << ((Re = ye) - M); 15 > Re && !(0 >= (Ee -= ue[Re])); ) ++Re, (Ee <<= 1)
              ;(Ae += Ue = 1 << (Ee = Re - M)), (F[O + (Re = We & Te)].g = Ee + M), (F[O + Re].value = Oe - O - Re)
            }
            ;(J.g = ye - M), (J.value = be[pe++]), Q(F, Oe + (We >> M), ce, Ue, J), (We = V(We, ye))
          }
        }
        return ze != 2 * he[15] - 1 ? 0 : Ae
      })(a, u, m, y, j, T)
    }
    function S() {
      this.value = this.g = 0
    }
    function z() {
      this.value = this.g = 0
    }
    function $() {
      ;(this.G = s(5, S)), (this.H = o(5)), (this.jc = this.Qb = this.qb = this.nd = 0), (this.pd = s(Bn, z))
    }
    function de(a, u, m, y) {
      t(a != null),
        t(u != null),
        t(2147483648 > y),
        (a.Ca = 254),
        (a.I = 0),
        (a.b = -8),
        (a.Ka = 0),
        (a.oa = u),
        (a.pa = m),
        (a.Jd = u),
        (a.Yc = m + y),
        (a.Zc = 4 <= y ? m + y - 4 + 1 : m),
        Y(a)
    }
    function W(a, u) {
      for (var m = 0; 0 < u--; ) m |= se(a, 128) << u
      return m
    }
    function H(a, u) {
      var m = W(a, u)
      return oe(a) ? -m : m
    }
    function X(a, u, m, y) {
      var j,
        T = 0
      for (t(a != null), t(u != null), t(4294967288 > y), a.Sb = y, a.Ra = 0, a.u = 0, a.h = 0, 4 < y && (y = 4), j = 0; j < y; ++j)
        T += u[m + j] << (8 * j)
      ;(a.Ra = T), (a.bb = y), (a.oa = u), (a.pa = m)
    }
    function ne(a) {
      for (; 8 <= a.u && a.bb < a.Sb; ) (a.Ra >>>= 8), (a.Ra += (a.oa[a.pa + a.bb] << (es - 8)) >>> 0), ++a.bb, (a.u -= 8)
      G(a) && ((a.h = 1), (a.u = 0))
    }
    function fe(a, u) {
      if ((t(0 <= u), !a.h && u <= Zo)) {
        var m = B(a) & Qo[u]
        return (a.u += u), ne(a), m
      }
      return (a.h = 1), (a.u = 0)
    }
    function xe() {
      ;(this.b = this.Ca = this.I = 0), (this.oa = []), (this.pa = 0), (this.Jd = []), (this.Yc = 0), (this.Zc = []), (this.Ka = 0)
    }
    function A() {
      ;(this.Ra = 0), (this.oa = []), (this.h = this.u = this.bb = this.Sb = this.pa = 0)
    }
    function B(a) {
      return (a.Ra >>> (a.u & (es - 1))) >>> 0
    }
    function G(a) {
      return t(a.bb <= a.Sb), a.h || (a.bb == a.Sb && a.u > es)
    }
    function ee(a, u) {
      ;(a.u = u), (a.h = G(a))
    }
    function re(a) {
      a.u >= ia && (t(a.u >= ia), ne(a))
    }
    function Y(a) {
      t(a != null && a.oa != null),
        a.pa < a.Zc
          ? ((a.I = (a.oa[a.pa++] | (a.I << 8)) >>> 0), (a.b += 8))
          : (t(a != null && a.oa != null),
            a.pa < a.Yc ? ((a.b += 8), (a.I = a.oa[a.pa++] | (a.I << 8))) : a.Ka ? (a.b = 0) : ((a.I <<= 8), (a.b += 8), (a.Ka = 1)))
    }
    function oe(a) {
      return W(a, 1)
    }
    function se(a, u) {
      var m = a.Ca
      0 > a.b && Y(a)
      var y = a.b,
        j = (m * u) >>> 8,
        T = (a.I >>> y > j) + 0
      for (T ? ((m -= j), (a.I -= ((j + 1) << y) >>> 0)) : (m = j + 1), y = m, j = 0; 256 <= y; ) (j += 8), (y >>= 8)
      return (y = 7 ^ (j + qn[y])), (a.b -= y), (a.Ca = (m << y) - 1), T
    }
    function Se(a, u, m) {
      ;(a[u + 0] = (m >> 24) & 255), (a[u + 1] = (m >> 16) & 255), (a[u + 2] = (m >> 8) & 255), (a[u + 3] = (m >> 0) & 255)
    }
    function je(a, u) {
      return (a[u + 0] << 0) | (a[u + 1] << 8)
    }
    function q(a, u) {
      return je(a, u) | (a[u + 2] << 16)
    }
    function K(a, u) {
      return je(a, u) | (je(a, u + 2) << 16)
    }
    function ae(a, u) {
      var m = 1 << u
      return t(a != null), t(0 < u), (a.X = o(m)), a.X == null ? 0 : ((a.Mb = 32 - u), (a.Xa = u), 1)
    }
    function ie(a, u) {
      t(a != null), t(u != null), t(a.Xa == u.Xa), r(u.X, 0, a.X, 0, 1 << u.Xa)
    }
    function R() {
      ;(this.X = []), (this.Xa = this.Mb = 0)
    }
    function ke(a, u, m, y) {
      t(m != null), t(y != null)
      var j = m[0],
        T = y[0]
      return j == 0 && (j = (a * T + u / 2) / u), T == 0 && (T = (u * j + a / 2) / a), 0 >= j || 0 >= T ? 0 : ((m[0] = j), (y[0] = T), 1)
    }
    function Le(a, u) {
      return (a + (1 << u) - 1) >>> u
    }
    function ge(a, u) {
      return (((((4278255360 & a) + (4278255360 & u)) >>> 0) & 4278255360) + ((((16711935 & a) + (16711935 & u)) >>> 0) & 16711935)) >>> 0
    }
    function we(a, u) {
      N[u] = function (m, y, j, T, F, O, M) {
        var J
        for (J = 0; J < F; ++J) {
          var ce = N[a](O[M + J - 1], j, T + J)
          O[M + J] = ge(m[y + J], ce)
        }
      }
    }
    function ve() {
      this.ud = this.hd = this.jd = 0
    }
    function Pe(a, u) {
      return (((4278124286 & (a ^ u)) >>> 1) + (a & u)) >>> 0
    }
    function Ie(a) {
      return 0 <= a && 256 > a ? a : 0 > a ? 0 : 255 < a ? 255 : void 0
    }
    function Me(a, u) {
      return Ie(a + ((a - u + 0.5) >> 1))
    }
    function Be(a, u, m) {
      return Math.abs(u - m) - Math.abs(a - m)
    }
    function $e(a, u, m, y, j, T, F) {
      for (y = T[F - 1], m = 0; m < j; ++m) T[F + m] = y = ge(a[u + m], y)
    }
    function Qe(a, u, m, y, j) {
      var T
      for (T = 0; T < m; ++T) {
        var F = a[u + T],
          O = (F >> 8) & 255,
          M = 16711935 & (M = (M = 16711935 & F) + ((O << 16) + O))
        y[j + T] = ((4278255360 & F) + M) >>> 0
      }
    }
    function Ze(a, u) {
      ;(u.jd = (a >> 0) & 255), (u.hd = (a >> 8) & 255), (u.ud = (a >> 16) & 255)
    }
    function Ge(a, u, m, y, j, T) {
      var F
      for (F = 0; F < y; ++F) {
        var O = u[m + F],
          M = O >>> 8,
          J = O,
          ce = 255 & (ce = (ce = O >>> 16) + ((((a.jd << 24) >> 24) * ((M << 24) >> 24)) >>> 5))
        ;(J = 255 & (J = (J = J + ((((a.hd << 24) >> 24) * ((M << 24) >> 24)) >>> 5)) + ((((a.ud << 24) >> 24) * ((ce << 24) >> 24)) >>> 5))),
          (j[T + F] = (4278255360 & O) + (ce << 16) + J)
      }
    }
    function ot(a, u, m, y, j) {
      ;(N[u] = function (T, F, O, M, J, ce, be, ye, pe) {
        for (M = be; M < ye; ++M) for (be = 0; be < pe; ++be) J[ce++] = j(O[y(T[F++])])
      }),
        (N[a] = function (T, F, O, M, J, ce, be) {
          var ye = 8 >> T.b,
            pe = T.Ea,
            Oe = T.K[0],
            Ae = T.w
          if (8 > ye)
            for (T = (1 << T.b) - 1, Ae = (1 << ye) - 1; F < O; ++F) {
              var ue,
                he = 0
              for (ue = 0; ue < pe; ++ue) ue & T || (he = y(M[J++])), (ce[be++] = j(Oe[he & Ae])), (he >>= ye)
            }
          else N['VP8LMapColor' + m](M, J, Oe, Ae, ce, be, F, O, pe)
        })
    }
    function qe(a, u, m, y, j) {
      for (m = u + m; u < m; ) {
        var T = a[u++]
        ;(y[j++] = (T >> 16) & 255), (y[j++] = (T >> 8) & 255), (y[j++] = (T >> 0) & 255)
      }
    }
    function cn(a, u, m, y, j) {
      for (m = u + m; u < m; ) {
        var T = a[u++]
        ;(y[j++] = (T >> 16) & 255), (y[j++] = (T >> 8) & 255), (y[j++] = (T >> 0) & 255), (y[j++] = (T >> 24) & 255)
      }
    }
    function gt(a, u, m, y, j) {
      for (m = u + m; u < m; ) {
        var T = (((F = a[u++]) >> 16) & 240) | ((F >> 12) & 15),
          F = ((F >> 0) & 240) | ((F >> 28) & 15)
        ;(y[j++] = T), (y[j++] = F)
      }
    }
    function Rn(a, u, m, y, j) {
      for (m = u + m; u < m; ) {
        var T = (((F = a[u++]) >> 16) & 248) | ((F >> 13) & 7),
          F = ((F >> 5) & 224) | ((F >> 3) & 31)
        ;(y[j++] = T), (y[j++] = F)
      }
    }
    function dt(a, u, m, y, j) {
      for (m = u + m; u < m; ) {
        var T = a[u++]
        ;(y[j++] = (T >> 0) & 255), (y[j++] = (T >> 8) & 255), (y[j++] = (T >> 16) & 255)
      }
    }
    function vt(a, u, m, y, j, T) {
      if (T == 0)
        for (m = u + m; u < m; ) Se(y, (((T = a[u++])[0] >> 24) | ((T[1] >> 8) & 65280) | ((T[2] << 8) & 16711680) | (T[3] << 24)) >>> 0), (j += 32)
      else r(y, j, a, u, m)
    }
    function Kn(a, u) {
      ;(N[u][0] = N[a + '0']),
        (N[u][1] = N[a + '1']),
        (N[u][2] = N[a + '2']),
        (N[u][3] = N[a + '3']),
        (N[u][4] = N[a + '4']),
        (N[u][5] = N[a + '5']),
        (N[u][6] = N[a + '6']),
        (N[u][7] = N[a + '7']),
        (N[u][8] = N[a + '8']),
        (N[u][9] = N[a + '9']),
        (N[u][10] = N[a + '10']),
        (N[u][11] = N[a + '11']),
        (N[u][12] = N[a + '12']),
        (N[u][13] = N[a + '13']),
        (N[u][14] = N[a + '0']),
        (N[u][15] = N[a + '0'])
    }
    function Nt(a) {
      return a == hu || a == du || a == _l || a == pu
    }
    function lo() {
      ;(this.eb = []), (this.size = this.A = this.fb = 0)
    }
    function $t() {
      ;(this.y = []),
        (this.f = []),
        (this.ea = []),
        (this.F = []),
        (this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0)
    }
    function pr() {
      ;(this.Rd = this.height = this.width = this.S = 0), (this.f = {}), (this.f.RGBA = new lo()), (this.f.kb = new $t()), (this.sd = null)
    }
    function ri() {
      ;(this.width = [0]), (this.height = [0]), (this.Pd = [0]), (this.Qd = [0]), (this.format = [0])
    }
    function Vt() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0
    }
    function lt(a) {
      return alert('todo:WebPSamplerProcessPlane'), a.T
    }
    function Pt(a, u) {
      var m = a.T,
        y = u.ba.f.RGBA,
        j = y.eb,
        T = y.fb + a.ka * y.A,
        F = or[u.ba.S],
        O = a.y,
        M = a.O,
        J = a.f,
        ce = a.N,
        be = a.ea,
        ye = a.W,
        pe = u.cc,
        Oe = u.dc,
        Ae = u.Mc,
        ue = u.Nc,
        he = a.ka,
        Ee = a.ka + a.T,
        Re = a.U,
        Te = (Re + 1) >> 1
      for (
        he == 0
          ? F(O, M, null, null, J, ce, be, ye, J, ce, be, ye, j, T, null, null, Re)
          : (F(u.ec, u.fc, O, M, pe, Oe, Ae, ue, J, ce, be, ye, j, T - y.A, j, T, Re), ++m);
        he + 2 < Ee;
        he += 2
      )
        (pe = J),
          (Oe = ce),
          (Ae = be),
          (ue = ye),
          (ce += a.Rc),
          (ye += a.Rc),
          (T += 2 * y.A),
          F(O, (M += 2 * a.fa) - a.fa, O, M, pe, Oe, Ae, ue, J, ce, be, ye, j, T - y.A, j, T, Re)
      return (
        (M += a.fa),
        a.j + Ee < a.o
          ? (r(u.ec, u.fc, O, M, Re), r(u.cc, u.dc, J, ce, Te), r(u.Mc, u.Nc, be, ye, Te), m--)
          : 1 & Ee || F(O, M, null, null, J, ce, be, ye, J, ce, be, ye, j, T + y.A, null, null, Re),
        m
      )
    }
    function co(a, u, m) {
      var y = a.F,
        j = [a.J]
      if (y != null) {
        var T = a.U,
          F = u.ba.S,
          O = F == wl || F == _l
        u = u.ba.f.RGBA
        var M = [0],
          J = a.ka
        ;(M[0] = a.T), a.Kb && (J == 0 ? --M[0] : (--J, (j[0] -= a.width)), a.j + a.ka + a.T == a.o && (M[0] = a.o - a.j - J))
        var ce = u.eb
        ;(J = u.fb + J * u.A), (a = gl(y, j[0], a.width, T, M, ce, J + (O ? 0 : 3), u.A)), t(m == M), a && Nt(F) && Ei(ce, J, O, T, M, u.A)
      }
      return 0
    }
    function bn(a) {
      var u = a.ma,
        m = u.ba.S,
        y = 11 > m,
        j = m == bl || m == yl || m == wl || m == fu || m == 12 || Nt(m)
      if (((u.memory = null), (u.Ib = null), (u.Jb = null), (u.Nd = null), !na(u.Oa, a, j ? 11 : 12))) return 0
      if ((j && Nt(m) && De(), a.da)) alert('todo:use_scaling')
      else {
        if (y) {
          if (((u.Ib = lt), a.Kb)) {
            if (((m = (a.U + 1) >> 1), (u.memory = o(a.U + 2 * m)), u.memory == null)) return 0
            ;(u.ec = u.memory), (u.fc = 0), (u.cc = u.ec), (u.dc = u.fc + a.U), (u.Mc = u.cc), (u.Nc = u.dc + m), (u.Ib = Pt), De()
          }
        } else alert('todo:EmitYUV')
        j && ((u.Jb = co), y && me())
      }
      if (y && !Fh) {
        for (a = 0; 256 > a; ++a)
          (s2[a] = (89858 * (a - 128) + Sl) >> xl),
            (c2[a] = -22014 * (a - 128) + Sl),
            (l2[a] = -45773 * (a - 128)),
            (a2[a] = (113618 * (a - 128) + Sl) >> xl)
        for (a = ua; a < vu; ++a) (u = (76283 * (a - 16) + Sl) >> xl), (u2[a - ua] = Yn(u, 255)), (f2[a - ua] = Yn((u + 8) >> 4, 15))
        Fh = 1
      }
      return 1
    }
    function Mr(a) {
      var u = a.ma,
        m = a.U,
        y = a.T
      return t(!(1 & a.ka)), 0 >= m || 0 >= y ? 0 : ((m = u.Ib(a, u)), u.Jb != null && u.Jb(a, u, m), (u.Dc += m), 1)
    }
    function Dr(a) {
      a.ma.memory = null
    }
    function it(a, u, m, y) {
      return fe(a, 8) != 47 ? 0 : ((u[0] = fe(a, 14) + 1), (m[0] = fe(a, 14) + 1), (y[0] = fe(a, 1)), fe(a, 3) != 0 ? 0 : !a.h)
    }
    function gr(a, u) {
      if (4 > a) return a + 1
      var m = (a - 2) >> 1
      return ((2 + (1 & a)) << m) + fe(u, m) + 1
    }
    function Br(a, u) {
      return 120 < u ? u - 120 : 1 <= (m = ((m = W0[u - 1]) >> 4) * a + (8 - (15 & m))) ? m : 1
      var m
    }
    function Mn(a, u, m) {
      var y = B(m),
        j = a[(u += 255 & y)].g - 8
      return 0 < j && (ee(m, m.u + 8), (y = B(m)), (u += a[u].value), (u += y & ((1 << j) - 1))), ee(m, m.u + a[u].g), a[u].value
    }
    function un(a, u, m) {
      return (m.g += a.g), (m.value += (a.value << u) >>> 0), t(8 >= m.g), a.g
    }
    function nn(a, u, m) {
      var y = a.xc
      return t((u = y == 0 ? 0 : a.vc[a.md * (m >> y) + (u >> y)]) < a.Wb), a.Ya[u]
    }
    function Jn(a, u, m, y) {
      var j = a.ab,
        T = a.c * u,
        F = a.C
      u = F + u
      var O = m,
        M = y
      for (y = a.Ta, m = a.Ua; 0 < j--; ) {
        var J = a.gc[j],
          ce = F,
          be = u,
          ye = O,
          pe = M,
          Oe = ((M = y), (O = m), J.Ea)
        switch ((t(ce < be), t(be <= J.nc), J.hc)) {
          case 2:
            pl(ye, pe, (be - ce) * Oe, M, O)
            break
          case 0:
            var Ae = ce,
              ue = be,
              he = M,
              Ee = O,
              Re = (Ue = J).Ea
            Ae == 0 && (au(ye, pe, null, null, 1, he, Ee), $e(ye, pe + 1, 0, 0, Re - 1, he, Ee + 1), (pe += Re), (Ee += Re), ++Ae)
            for (var Te = 1 << Ue.b, We = Te - 1, ze = Le(Re, Ue.b), nt = Ue.K, Ue = Ue.w + (Ae >> Ue.b) * ze; Ae < ue; ) {
              var At = nt,
                Ct = Ue,
                xt = 1
              for (oa(ye, pe, he, Ee - Re, 1, he, Ee); xt < Re; ) {
                var mt = (xt & ~We) + Te
                mt > Re && (mt = Re), (0, Pi[(At[Ct++] >> 8) & 15])(ye, pe + +xt, he, Ee + xt - Re, mt - xt, he, Ee + xt), (xt = mt)
              }
              ;(pe += Re), (Ee += Re), ++Ae & We || (Ue += ze)
            }
            be != J.nc && r(M, O - Oe, M, O + (be - ce - 1) * Oe, Oe)
            break
          case 1:
            for (
              Oe = ye, ue = pe, Re = (ye = J.Ea) - (Ee = ye & ~(he = (pe = 1 << J.b) - 1)), Ae = Le(ye, J.b), Te = J.K, J = J.w + (ce >> J.b) * Ae;
              ce < be;

            ) {
              for (We = Te, ze = J, nt = new ve(), Ue = ue + Ee, At = ue + ye; ue < Ue; )
                Ze(We[ze++], nt), nr(nt, Oe, ue, pe, M, O), (ue += pe), (O += pe)
              ue < At && (Ze(We[ze++], nt), nr(nt, Oe, ue, Re, M, O), (ue += Re), (O += Re)), ++ce & he || (J += Ae)
            }
            break
          case 3:
            if (ye == M && pe == O && 0 < J.b) {
              for (ue = M, ye = Oe = O + (be - ce) * Oe - (Ee = (be - ce) * Le(J.Ea, J.b)), pe = M, he = O, Ae = [], Ee = (Re = Ee) - 1; 0 <= Ee; --Ee)
                Ae[Ee] = pe[he + Ee]
              for (Ee = Re - 1; 0 <= Ee; --Ee) ue[ye + Ee] = Ae[Ee]
              xr(J, ce, be, M, Oe, M, O)
            } else xr(J, ce, be, ye, pe, M, O)
        }
        ;(O = y), (M = m)
      }
      M != m && r(y, m, O, M, T)
    }
    function Oo(a, u) {
      var m = a.V,
        y = a.Ba + a.c * a.C,
        j = u - a.C
      if ((t(u <= a.l.o), t(16 >= j), 0 < j)) {
        var T = a.l,
          F = a.Ta,
          O = a.Ua,
          M = T.width
        if ((Jn(a, j, m, y), (j = O = [O]), t((m = a.C) < (y = u)), t(T.v < T.va), y > T.o && (y = T.o), m < T.j)) {
          var J = T.j - m
          ;(m = T.j), (j[0] += J * M)
        }
        if ((m >= y ? (m = 0) : ((j[0] += 4 * T.v), (T.ka = m - T.j), (T.U = T.va - T.v), (T.T = y - m), (m = 1)), m)) {
          if (((O = O[0]), 11 > (m = a.ca).S)) {
            var ce = m.f.RGBA,
              be = ((y = m.S), (j = T.U), (T = T.T), (J = ce.eb), ce.A),
              ye = T
            for (ce = ce.fb + a.Ma * ce.A; 0 < ye--; ) {
              var pe = F,
                Oe = O,
                Ae = j,
                ue = J,
                he = ce
              switch (y) {
                case vl:
                  Sr(pe, Oe, Ae, ue, he)
                  break
                case bl:
                  Ci(pe, Oe, Ae, ue, he)
                  break
                case hu:
                  Ci(pe, Oe, Ae, ue, he), Ei(ue, he, 0, Ae, 1, 0)
                  break
                case kh:
                  ts(pe, Oe, Ae, ue, he)
                  break
                case yl:
                  vt(pe, Oe, Ae, ue, he, 1)
                  break
                case du:
                  vt(pe, Oe, Ae, ue, he, 1), Ei(ue, he, 0, Ae, 1, 0)
                  break
                case wl:
                  vt(pe, Oe, Ae, ue, he, 0)
                  break
                case _l:
                  vt(pe, Oe, Ae, ue, he, 0), Ei(ue, he, 1, Ae, 1, 0)
                  break
                case fu:
                  Hr(pe, Oe, Ae, ue, he)
                  break
                case pu:
                  Hr(pe, Oe, Ae, ue, he), is(ue, he, Ae, 1, 0)
                  break
                case Ah:
                  li(pe, Oe, Ae, ue, he)
                  break
                default:
                  t(0)
              }
              ;(O += M), (ce += be)
            }
            a.Ma += T
          } else alert('todo:EmitRescaledRowsYUVA')
          t(a.Ma <= m.height)
        }
      }
      ;(a.C = u), t(a.C <= a.i)
    }
    function ii(a) {
      var u
      if (0 < a.ua) return 0
      for (u = 0; u < a.Wb; ++u) {
        var m = a.Ya[u].G,
          y = a.Ya[u].H
        if (0 < m[1][y[1] + 0].g || 0 < m[2][y[2] + 0].g || 0 < m[3][y[3] + 0].g) return 0
      }
      return 1
    }
    function mr(a, u, m, y, j, T) {
      if (a.Z != 0) {
        var F = a.qd,
          O = a.rd
        for (t(Fi[a.Z] != null); u < m; ++u) Fi[a.Z](F, O, y, j, y, j, T), (F = y), (O = j), (j += T)
        ;(a.qd = F), (a.rd = O)
      }
    }
    function vr(a, u) {
      var m = a.l.ma,
        y = m.Z == 0 || m.Z == 1 ? a.l.j : a.C
      if (((y = a.C < y ? y : a.C), t(u <= a.l.o), u > y)) {
        var j = a.l.width,
          T = m.ca,
          F = m.tb + j * y,
          O = a.V,
          M = a.Ba + a.c * y,
          J = a.gc
        t(a.ab == 1), t(J[0].hc == 3), lu(J[0], y, u, O, M, T, F), mr(m, y, u, T, F, j)
      }
      a.C = a.Ma = u
    }
    function br(a, u, m, y, j, T, F) {
      var O = a.$ / y,
        M = a.$ % y,
        J = a.m,
        ce = a.s,
        be = m + a.$,
        ye = be
      j = m + y * j
      var pe = m + y * T,
        Oe = 280 + ce.ua,
        Ae = a.Pb ? O : 16777216,
        ue = 0 < ce.ua ? ce.Wa : null,
        he = ce.wc,
        Ee = be < pe ? nn(ce, M, O) : null
      t(a.C < T), t(pe <= j)
      var Re = !1
      e: for (;;) {
        for (; Re || be < pe; ) {
          var Te = 0
          if (O >= Ae) {
            var We = be - m
            t((Ae = a).Pb), (Ae.wd = Ae.m), (Ae.xd = We), 0 < Ae.s.ua && ie(Ae.s.Wa, Ae.s.vb), (Ae = O + K0)
          }
          if ((M & he || (Ee = nn(ce, M, O)), t(Ee != null), Ee.Qb && ((u[be] = Ee.qb), (Re = !0)), !Re))
            if ((re(J), Ee.jc)) {
              ;(Te = J), (We = u)
              var ze = be,
                nt = Ee.pd[B(Te) & (Bn - 1)]
              t(Ee.jc),
                256 > nt.g ? (ee(Te, Te.u + nt.g), (We[ze] = nt.value), (Te = 0)) : (ee(Te, Te.u + nt.g - 256), t(256 <= nt.value), (Te = nt.value)),
                Te == 0 && (Re = !0)
            } else Te = Mn(Ee.G[0], Ee.H[0], J)
          if (J.h) break
          if (Re || 256 > Te) {
            if (!Re)
              if (Ee.nd) u[be] = (Ee.qb | (Te << 8)) >>> 0
              else {
                if ((re(J), (Re = Mn(Ee.G[1], Ee.H[1], J)), re(J), (We = Mn(Ee.G[2], Ee.H[2], J)), (ze = Mn(Ee.G[3], Ee.H[3], J)), J.h)) break
                u[be] = ((ze << 24) | (Re << 16) | (Te << 8) | We) >>> 0
              }
            if (((Re = !1), ++be, ++M >= y && ((M = 0), ++O, F != null && O <= T && !(O % 16) && F(a, O), ue != null)))
              for (; ye < be; ) (Te = u[ye++]), (ue.X[((506832829 * Te) & 4294967295) >>> ue.Mb] = Te)
          } else if (280 > Te) {
            if (((Te = gr(Te - 256, J)), (We = Mn(Ee.G[4], Ee.H[4], J)), re(J), (We = Br(y, (We = gr(We, J)))), J.h)) break
            if (be - m < We || j - be < Te) break e
            for (ze = 0; ze < Te; ++ze) u[be + ze] = u[be + ze - We]
            for (be += Te, M += Te; M >= y; ) (M -= y), ++O, F != null && O <= T && !(O % 16) && F(a, O)
            if ((t(be <= j), M & he && (Ee = nn(ce, M, O)), ue != null))
              for (; ye < be; ) (Te = u[ye++]), (ue.X[((506832829 * Te) & 4294967295) >>> ue.Mb] = Te)
          } else {
            if (!(Te < Oe)) break e
            for (Re = Te - 280, t(ue != null); ye < be; ) (Te = u[ye++]), (ue.X[((506832829 * Te) & 4294967295) >>> ue.Mb] = Te)
            ;(Te = be), t(!(Re >>> (We = ue).Xa)), (u[Te] = We.X[Re]), (Re = !0)
          }
          Re || t(J.h == G(J))
        }
        if (a.Pb && J.h && be < j) t(a.m.h), (a.a = 5), (a.m = a.wd), (a.$ = a.xd), 0 < a.s.ua && ie(a.s.vb, a.s.Wa)
        else {
          if (J.h) break e
          F != null && F(a, O > T ? T : O), (a.a = 0), (a.$ = be - m)
        }
        return 1
      }
      return (a.a = 3), 0
    }
    function qr(a) {
      t(a != null), (a.vc = null), (a.yc = null), (a.Ya = null)
      var u = a.Wa
      u != null && (u.X = null), (a.vb = null), t(a != null)
    }
    function tr() {
      var a = new su()
      return a == null
        ? null
        : ((a.a = 0),
          (a.xb = Ph),
          Kn('Predictor', 'VP8LPredictors'),
          Kn('Predictor', 'VP8LPredictors_C'),
          Kn('PredictorAdd', 'VP8LPredictorsAdd'),
          Kn('PredictorAdd', 'VP8LPredictorsAdd_C'),
          (pl = Qe),
          (nr = Ge),
          (Sr = qe),
          (Ci = cn),
          (Hr = gt),
          (li = Rn),
          (ts = dt),
          (N.VP8LMapColor32b = sa),
          (N.VP8LMapColor8b = cu),
          a)
    }
    function zr(a, u, m, y, j) {
      var T = 1,
        F = [a],
        O = [u],
        M = y.m,
        J = y.s,
        ce = null,
        be = 0
      e: for (;;) {
        if (m)
          for (; T && fe(M, 1); ) {
            var ye = F,
              pe = O,
              Oe = y,
              Ae = 1,
              ue = Oe.m,
              he = Oe.gc[Oe.ab],
              Ee = fe(ue, 2)
            if (Oe.Oc & (1 << Ee)) T = 0
            else {
              switch (((Oe.Oc |= 1 << Ee), (he.hc = Ee), (he.Ea = ye[0]), (he.nc = pe[0]), (he.K = [null]), ++Oe.ab, t(4 >= Oe.ab), Ee)) {
                case 0:
                case 1:
                  ;(he.b = fe(ue, 3) + 2), (Ae = zr(Le(he.Ea, he.b), Le(he.nc, he.b), 0, Oe, he.K)), (he.K = he.K[0])
                  break
                case 3:
                  var Re,
                    Te = fe(ue, 8) + 1,
                    We = 16 < Te ? 0 : 4 < Te ? 1 : 2 < Te ? 2 : 3
                  if (((ye[0] = Le(he.Ea, We)), (he.b = We), (Re = Ae = zr(Te, 1, 0, Oe, he.K)))) {
                    var ze,
                      nt = Te,
                      Ue = he,
                      At = 1 << (8 >> Ue.b),
                      Ct = o(At)
                    if (Ct == null) Re = 0
                    else {
                      var xt = Ue.K[0],
                        mt = Ue.w
                      for (Ct[0] = Ue.K[0][0], ze = 1; ze < 1 * nt; ++ze) Ct[ze] = ge(xt[mt + ze], Ct[ze - 1])
                      for (; ze < 4 * At; ++ze) Ct[ze] = 0
                      ;(Ue.K[0] = null), (Ue.K[0] = Ct), (Re = 1)
                    }
                  }
                  Ae = Re
                  break
                case 2:
                  break
                default:
                  t(0)
              }
              T = Ae
            }
          }
        if (((F = F[0]), (O = O[0]), T && fe(M, 1) && !(T = 1 <= (be = fe(M, 4)) && 11 >= be))) {
          y.a = 3
          break e
        }
        var Ft
        if ((Ft = T))
          t: {
            var Tt,
              ft,
              on,
              zn = y,
              sn = F,
              Un = O,
              jt = be,
              Qn = m,
              Zn = zn.m,
              gn = zn.s,
              yn = [null],
              In = 1,
              sr = 0,
              $r = G0[jt]
            n: for (;;) {
              if (Qn && fe(Zn, 1)) {
                var mn = fe(Zn, 3) + 2,
                  di = Le(sn, mn),
                  bo = Le(Un, mn),
                  os = di * bo
                if (!zr(di, bo, 0, zn, yn)) break n
                for (yn = yn[0], gn.xc = mn, Tt = 0; Tt < os; ++Tt) {
                  var Oi = (yn[Tt] >> 8) & 65535
                  ;(yn[Tt] = Oi), Oi >= In && (In = Oi + 1)
                }
              }
              if (Zn.h) break n
              for (ft = 0; 5 > ft; ++ft) {
                var Gt = Lh[ft]
                !ft && 0 < jt && (Gt += 1 << jt), sr < Gt && (sr = Gt)
              }
              var bu = s(In * $r, S),
                Mh = In,
                Dh = s(Mh, $)
              if (Dh == null) var Al = null
              else t(65536 >= Mh), (Al = Dh)
              var fa = o(sr)
              if (Al == null || fa == null || bu == null) {
                zn.a = 1
                break n
              }
              var Ll = bu
              for (Tt = on = 0; Tt < In; ++Tt) {
                var Nr = Al[Tt],
                  ss = Nr.G,
                  as = Nr.H,
                  Bh = 0,
                  Nl = 1,
                  qh = 0
                for (ft = 0; 5 > ft; ++ft) {
                  ;(Gt = Lh[ft]), (ss[ft] = Ll), (as[ft] = on), !ft && 0 < jt && (Gt += 1 << jt)
                  i: {
                    var Pl,
                      yu = Gt,
                      Cl = zn,
                      ha = fa,
                      p2 = Ll,
                      g2 = on,
                      wu = 0,
                      Ri = Cl.m,
                      m2 = fe(Ri, 1)
                    if ((i(ha, 0, 0, yu), m2)) {
                      var v2 = fe(Ri, 1) + 1,
                        b2 = fe(Ri, 1),
                        zh = fe(Ri, b2 == 0 ? 1 : 8)
                      ;(ha[zh] = 1), v2 == 2 && (ha[(zh = fe(Ri, 8))] = 1)
                      var jl = 1
                    } else {
                      var Uh = o(19),
                        Hh = fe(Ri, 4) + 4
                      if (19 < Hh) {
                        Cl.a = 3
                        var Il = 0
                        break i
                      }
                      for (Pl = 0; Pl < Hh; ++Pl) Uh[V0[Pl]] = fe(Ri, 3)
                      var _u = void 0,
                        da = void 0,
                        $h = Cl,
                        y2 = Uh,
                        El = yu,
                        Vh = ha,
                        xu = 0,
                        Mi = $h.m,
                        Wh = 8,
                        Gh = s(128, S)
                      r: for (; P(Gh, 0, 7, y2, 19); ) {
                        if (fe(Mi, 1)) {
                          var w2 = 2 + 2 * fe(Mi, 3)
                          if ((_u = 2 + fe(Mi, w2)) > El) break r
                        } else _u = El
                        for (da = 0; da < El && _u--; ) {
                          re(Mi)
                          var Kh = Gh[0 + (127 & B(Mi))]
                          ee(Mi, Mi.u + Kh.g)
                          var ls = Kh.value
                          if (16 > ls) (Vh[da++] = ls), ls != 0 && (Wh = ls)
                          else {
                            var _2 = ls == 16,
                              Jh = ls - 16,
                              x2 = H0[Jh],
                              Yh = fe(Mi, U0[Jh]) + x2
                            if (da + Yh > El) break r
                            for (var S2 = _2 ? Wh : 0; 0 < Yh--; ) Vh[da++] = S2
                          }
                        }
                        xu = 1
                        break r
                      }
                      xu || ($h.a = 3), (jl = xu)
                    }
                    ;(jl = jl && !Ri.h) && (wu = P(p2, g2, 8, ha, yu)), jl && wu != 0 ? (Il = wu) : ((Cl.a = 3), (Il = 0))
                  }
                  if (Il == 0) break n
                  if ((Nl && $0[ft] == 1 && (Nl = Ll[on].g == 0), (Bh += Ll[on].g), (on += Il), 3 >= ft)) {
                    var pa,
                      Su = fa[0]
                    for (pa = 1; pa < Gt; ++pa) fa[pa] > Su && (Su = fa[pa])
                    qh += Su
                  }
                }
                if (
                  ((Nr.nd = Nl),
                  (Nr.Qb = 0),
                  Nl &&
                    ((Nr.qb = ((ss[3][as[3] + 0].value << 24) | (ss[1][as[1] + 0].value << 16) | ss[2][as[2] + 0].value) >>> 0),
                    Bh == 0 && 256 > ss[0][as[0] + 0].value && ((Nr.Qb = 1), (Nr.qb += ss[0][as[0] + 0].value << 8))),
                  (Nr.jc = !Nr.Qb && 6 > qh),
                  Nr.jc)
                ) {
                  var Tl,
                    pi = Nr
                  for (Tl = 0; Tl < Bn; ++Tl) {
                    var Di = Tl,
                      Bi = pi.pd[Di],
                      Fl = pi.G[0][pi.H[0] + Di]
                    256 <= Fl.value
                      ? ((Bi.g = Fl.g + 256), (Bi.value = Fl.value))
                      : ((Bi.g = 0),
                        (Bi.value = 0),
                        (Di >>= un(Fl, 8, Bi)),
                        (Di >>= un(pi.G[1][pi.H[1] + Di], 16, Bi)),
                        (Di >>= un(pi.G[2][pi.H[2] + Di], 0, Bi)),
                        un(pi.G[3][pi.H[3] + Di], 24, Bi))
                  }
                }
              }
              ;(gn.vc = yn), (gn.Wb = In), (gn.Ya = Al), (gn.yc = bu), (Ft = 1)
              break t
            }
            Ft = 0
          }
        if (!(T = Ft)) {
          y.a = 3
          break e
        }
        if (0 < be) {
          if (((J.ua = 1 << be), !ae(J.Wa, be))) {
            ;(y.a = 1), (T = 0)
            break e
          }
        } else J.ua = 0
        var ku = y,
          Xh = F,
          k2 = O,
          Au = ku.s,
          Lu = Au.xc
        if (((ku.c = Xh), (ku.i = k2), (Au.md = Le(Xh, Lu)), (Au.wc = Lu == 0 ? -1 : (1 << Lu) - 1), m)) {
          y.xb = t2
          break e
        }
        if ((ce = o(F * O)) == null) {
          ;(y.a = 1), (T = 0)
          break e
        }
        T = (T = br(y, ce, 0, F, O, O, null)) && !M.h
        break e
      }
      return T ? (j != null ? (j[0] = ce) : (t(ce == null), t(m)), (y.$ = 0), m || qr(J)) : qr(J), T
    }
    function uo(a, u) {
      var m = a.c * a.i,
        y = m + u + 16 * u
      return t(a.c <= u), (a.V = o(y)), a.V == null ? ((a.Ta = null), (a.Ua = 0), (a.a = 1), 0) : ((a.Ta = a.V), (a.Ua = a.Ba + m + u), 1)
    }
    function Ro(a, u) {
      var m = a.C,
        y = u - m,
        j = a.V,
        T = a.Ba + a.c * m
      for (t(u <= a.l.o); 0 < y; ) {
        var F = 16 < y ? 16 : y,
          O = a.l.ma,
          M = a.l.width,
          J = M * F,
          ce = O.ca,
          be = O.tb + M * m,
          ye = a.Ta,
          pe = a.Ua
        Jn(a, F, j, T), bh(ye, pe, ce, be, J), mr(O, m, m + F, ce, be, M), (y -= F), (j += F * a.c), (m += F)
      }
      t(m == u), (a.C = a.Ma = u)
    }
    function Mo() {
      this.ub = this.yd = this.td = this.Rb = 0
    }
    function Do() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0
    }
    function Bo() {
      ;(this.Fb = this.Bb = this.Cb = 0), (this.Zb = o(4)), (this.Lb = o(4))
    }
    function Ka() {
      this.Yb = (function () {
        var a = []
        return (
          (function u(m, y, j) {
            for (var T = j[y], F = 0; F < T && (m.push(j.length > y + 1 ? [] : 0), !(j.length < y + 1)); F++) u(m[F], y + 1, j)
          })(a, 0, [3, 11]),
          a
        )
      })()
    }
    function Mc() {
      ;(this.jb = o(3)), (this.Wc = l([4, 8], Ka)), (this.Xc = l([4, 17], Ka))
    }
    function Dc() {
      ;(this.Pc = this.wb = this.Tb = this.zd = 0), (this.vd = new o(4)), (this.od = new o(4))
    }
    function qo() {
      this.ld = this.La = this.dd = this.tc = 0
    }
    function Ja() {
      this.Na = this.la = 0
    }
    function Bc() {
      ;(this.Sc = [0, 0]), (this.Eb = [0, 0]), (this.Qc = [0, 0]), (this.ia = this.lc = 0)
    }
    function qs() {
      ;(this.ad = o(384)), (this.Za = 0), (this.Ob = o(16)), (this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0)
    }
    function qc() {
      ;(this.uc = this.M = this.Nb = 0), (this.wa = Array(new qo())), (this.Y = 0), (this.ya = Array(new qs())), (this.aa = 0), (this.l = new zo())
    }
    function Ya() {
      ;(this.y = o(16)), (this.f = o(8)), (this.ea = o(8))
    }
    function zc() {
      ;(this.cb = this.a = 0),
        (this.sc = ''),
        (this.m = new xe()),
        (this.Od = new Mo()),
        (this.Kc = new Do()),
        (this.ed = new Dc()),
        (this.Qa = new Bo()),
        (this.Ic = this.$c = this.Aa = 0),
        (this.D = new qc()),
        (this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0),
        (this.Jc = s(8, xe)),
        (this.ia = 0),
        (this.pb = s(4, Bc)),
        (this.Pa = new Mc()),
        (this.Bd = this.kc = 0),
        (this.Ac = []),
        (this.Bc = 0),
        (this.zc = [0, 0, 0, 0]),
        (this.Gd = Array(new Ya())),
        (this.Hd = 0),
        (this.rb = Array(new Ja())),
        (this.sb = 0),
        (this.wa = Array(new qo())),
        (this.Y = 0),
        (this.oc = []),
        (this.pc = 0),
        (this.sa = []),
        (this.ta = 0),
        (this.qa = []),
        (this.ra = 0),
        (this.Ha = []),
        (this.B = this.R = this.Ia = 0),
        (this.Ec = []),
        (this.M = this.ja = this.Vb = this.Fc = 0),
        (this.ya = Array(new qs())),
        (this.L = this.aa = 0),
        (this.gd = l([4, 2], qo)),
        (this.ga = null),
        (this.Fa = []),
        (this.Cc = this.qc = this.P = 0),
        (this.Gb = []),
        (this.Uc = 0),
        (this.mb = []),
        (this.nb = 0),
        (this.rc = []),
        (this.Ga = this.Vc = 0)
    }
    function zo() {
      ;(this.T = this.U = this.ka = this.height = this.width = 0),
        (this.y = []),
        (this.f = []),
        (this.ea = []),
        (this.Rc = this.fa = this.W = this.N = this.O = 0),
        (this.ma = 'void'),
        (this.put = 'VP8IoPutHook'),
        (this.ac = 'VP8IoSetupHook'),
        (this.bc = 'VP8IoTeardownHook'),
        (this.ha = this.Kb = 0),
        (this.data = []),
        (this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0),
        (this.F = []),
        (this.J = 0)
    }
    function Uc() {
      var a = new zc()
      return a != null && ((a.a = 0), (a.sc = 'OK'), (a.cb = 0), (a.Xb = 0), ca || (ca = Za)), a
    }
    function Xt(a, u, m) {
      return a.a == 0 && ((a.a = u), (a.sc = m), (a.cb = 0)), 0
    }
    function Xa(a, u, m) {
      return 3 <= m && a[u + 0] == 157 && a[u + 1] == 1 && a[u + 2] == 42
    }
    function Qa(a, u) {
      if (a == null) return 0
      if (((a.a = 0), (a.sc = 'OK'), u == null)) return Xt(a, 2, 'null VP8Io passed to VP8GetHeaders()')
      var m = u.data,
        y = u.w,
        j = u.ha
      if (4 > j) return Xt(a, 7, 'Truncated header.')
      var T = m[y + 0] | (m[y + 1] << 8) | (m[y + 2] << 16),
        F = a.Od
      if (((F.Rb = !(1 & T)), (F.td = (T >> 1) & 7), (F.yd = (T >> 4) & 1), (F.ub = T >> 5), 3 < F.td))
        return Xt(a, 3, 'Incorrect keyframe parameters.')
      if (!F.yd) return Xt(a, 4, 'Frame not displayable.')
      ;(y += 3), (j -= 3)
      var O = a.Kc
      if (F.Rb) {
        if (7 > j) return Xt(a, 7, 'cannot parse picture header')
        if (!Xa(m, y, j)) return Xt(a, 3, 'Bad code word')
        ;(O.c = 16383 & ((m[y + 4] << 8) | m[y + 3])),
          (O.Td = m[y + 4] >> 6),
          (O.i = 16383 & ((m[y + 6] << 8) | m[y + 5])),
          (O.Ud = m[y + 6] >> 6),
          (y += 7),
          (j -= 7),
          (a.za = (O.c + 15) >> 4),
          (a.Ub = (O.i + 15) >> 4),
          (u.width = O.c),
          (u.height = O.i),
          (u.Da = 0),
          (u.j = 0),
          (u.v = 0),
          (u.va = u.width),
          (u.o = u.height),
          (u.da = 0),
          (u.ib = u.width),
          (u.hb = u.height),
          (u.U = u.width),
          (u.T = u.height),
          i((T = a.Pa).jb, 0, 255, T.jb.length),
          t((T = a.Qa) != null),
          (T.Cb = 0),
          (T.Bb = 0),
          (T.Fb = 1),
          i(T.Zb, 0, 0, T.Zb.length),
          i(T.Lb, 0, 0, T.Lb)
      }
      if (F.ub > j) return Xt(a, 7, 'bad partition length')
      de((T = a.m), m, y, F.ub), (y += F.ub), (j -= F.ub), F.Rb && ((O.Ld = oe(T)), (O.Kd = oe(T))), (O = a.Qa)
      var M,
        J = a.Pa
      if ((t(T != null), t(O != null), (O.Cb = oe(T)), O.Cb)) {
        if (((O.Bb = oe(T)), oe(T))) {
          for (O.Fb = oe(T), M = 0; 4 > M; ++M) O.Zb[M] = oe(T) ? H(T, 7) : 0
          for (M = 0; 4 > M; ++M) O.Lb[M] = oe(T) ? H(T, 6) : 0
        }
        if (O.Bb) for (M = 0; 3 > M; ++M) J.jb[M] = oe(T) ? W(T, 8) : 255
      } else O.Bb = 0
      if (T.Ka) return Xt(a, 3, 'cannot parse segment header')
      if ((((O = a.ed).zd = oe(T)), (O.Tb = W(T, 6)), (O.wb = W(T, 3)), (O.Pc = oe(T)), O.Pc && oe(T))) {
        for (J = 0; 4 > J; ++J) oe(T) && (O.vd[J] = H(T, 6))
        for (J = 0; 4 > J; ++J) oe(T) && (O.od[J] = H(T, 6))
      }
      if (((a.L = O.Tb == 0 ? 0 : O.zd ? 1 : 2), T.Ka)) return Xt(a, 3, 'cannot parse filter header')
      var ce = j
      if (((j = M = y), (y = M + ce), (O = ce), (a.Xb = (1 << W(a.m, 2)) - 1), ce < 3 * (J = a.Xb))) m = 7
      else {
        for (M += 3 * J, O -= 3 * J, ce = 0; ce < J; ++ce) {
          var be = m[j + 0] | (m[j + 1] << 8) | (m[j + 2] << 16)
          be > O && (be = O), de(a.Jc[+ce], m, M, be), (M += be), (O -= be), (j += 3)
        }
        de(a.Jc[+J], m, M, O), (m = M < y ? 0 : 5)
      }
      if (m != 0) return Xt(a, m, 'cannot parse partitions')
      for (
        m = W((M = a.m), 7),
          j = oe(M) ? H(M, 4) : 0,
          y = oe(M) ? H(M, 4) : 0,
          O = oe(M) ? H(M, 4) : 0,
          J = oe(M) ? H(M, 4) : 0,
          M = oe(M) ? H(M, 4) : 0,
          ce = a.Qa,
          be = 0;
        4 > be;
        ++be
      ) {
        if (ce.Cb) {
          var ye = ce.Zb[be]
          ce.Fb || (ye += m)
        } else {
          if (0 < be) {
            a.pb[be] = a.pb[0]
            continue
          }
          ye = m
        }
        var pe = a.pb[be]
        ;(pe.Sc[0] = gu[Yn(ye + j, 127)]),
          (pe.Sc[1] = mu[Yn(ye + 0, 127)]),
          (pe.Eb[0] = 2 * gu[Yn(ye + y, 127)]),
          (pe.Eb[1] = (101581 * mu[Yn(ye + O, 127)]) >> 16),
          8 > pe.Eb[1] && (pe.Eb[1] = 8),
          (pe.Qc[0] = gu[Yn(ye + J, 117)]),
          (pe.Qc[1] = mu[Yn(ye + M, 127)]),
          (pe.lc = ye + M)
      }
      if (!F.Rb) return Xt(a, 4, 'Not a key frame.')
      for (oe(T), F = a.Pa, m = 0; 4 > m; ++m) {
        for (j = 0; 8 > j; ++j)
          for (y = 0; 3 > y; ++y) for (O = 0; 11 > O; ++O) (J = se(T, Z0[m][j][y][O]) ? W(T, 8) : X0[m][j][y][O]), (F.Wc[m][j].Yb[y][O] = J)
        for (j = 0; 17 > j; ++j) F.Xc[m][j] = F.Wc[m][e2[j]]
      }
      return (a.kc = oe(T)), a.kc && (a.Bd = W(T, 8)), (a.cb = 1)
    }
    function Za(a, u, m, y, j, T, F) {
      var O = u[j].Yb[m]
      for (m = 0; 16 > j; ++j) {
        if (!se(a, O[m + 0])) return j
        for (; !se(a, O[m + 1]); ) if (((O = u[++j].Yb[0]), (m = 0), j == 16)) return 16
        var M = u[j + 1].Yb
        if (se(a, O[m + 2])) {
          var J = a,
            ce = 0
          if (se(J, (ye = O)[(be = m) + 3]))
            if (se(J, ye[be + 6])) {
              for (O = 0, be = 2 * (ce = se(J, ye[be + 8])) + (ye = se(J, ye[be + 9 + ce])), ce = 0, ye = J0[be]; ye[O]; ++O) ce += ce + se(J, ye[O])
              ce += 3 + (8 << be)
            } else se(J, ye[be + 7]) ? ((ce = 7 + 2 * se(J, 165)), (ce += se(J, 145))) : (ce = 5 + se(J, 159))
          else ce = se(J, ye[be + 4]) ? 3 + se(J, ye[be + 5]) : 2
          O = M[2]
        } else (ce = 1), (O = M[1])
        ;(M = F + Y0[j]), 0 > (J = a).b && Y(J)
        var be,
          ye = J.b,
          pe = ((be = J.Ca >> 1) - (J.I >> ye)) >> 31
        --J.b, (J.Ca += pe), (J.Ca |= 1), (J.I -= ((be + 1) & pe) << ye), (T[M] = ((ce ^ pe) - pe) * y[(0 < j) + 0])
      }
      return 16
    }
    function zs(a) {
      var u = a.rb[a.sb - 1]
      ;(u.la = 0), (u.Na = 0), i(a.zc, 0, 0, a.zc.length), (a.ja = 0)
    }
    function Hc(a, u) {
      if (a == null) return 0
      if (u == null) return Xt(a, 2, 'NULL VP8Io parameter in VP8Decode().')
      if (!a.cb && !Qa(a, u)) return 0
      if ((t(a.cb), u.ac == null || u.ac(u))) {
        u.ob && (a.L = 0)
        var m = kl[a.L]
        if (
          (a.L == 2 ? ((a.yb = 0), (a.zb = 0)) : ((a.yb = (u.v - m) >> 4), (a.zb = (u.j - m) >> 4), 0 > a.yb && (a.yb = 0), 0 > a.zb && (a.zb = 0)),
          (a.Va = (u.o + 15 + m) >> 4),
          (a.Hb = (u.va + 15 + m) >> 4),
          a.Hb > a.za && (a.Hb = a.za),
          a.Va > a.Ub && (a.Va = a.Ub),
          0 < a.L)
        ) {
          var y = a.ed
          for (m = 0; 4 > m; ++m) {
            var j
            if (a.Qa.Cb) {
              var T = a.Qa.Lb[m]
              a.Qa.Fb || (T += y.Tb)
            } else T = y.Tb
            for (j = 0; 1 >= j; ++j) {
              var F = a.gd[m][j],
                O = T
              if ((y.Pc && ((O += y.vd[0]), j && (O += y.od[0])), 0 < (O = 0 > O ? 0 : 63 < O ? 63 : O))) {
                var M = O
                0 < y.wb && (M = 4 < y.wb ? M >> 2 : M >> 1) > 9 - y.wb && (M = 9 - y.wb),
                  1 > M && (M = 1),
                  (F.dd = M),
                  (F.tc = 2 * O + M),
                  (F.ld = 40 <= O ? 2 : 15 <= O ? 1 : 0)
              } else F.tc = 0
              F.La = j
            }
          }
        }
        m = 0
      } else Xt(a, 6, 'Frame setup failed'), (m = a.a)
      if ((m = m == 0)) {
        if (m) {
          ;(a.$c = 0), 0 < a.Aa || (a.Ic = d2)
          e: {
            ;(m = a.Ic), (y = 4 * (M = a.za))
            var J = 32 * M,
              ce = M + 1,
              be = 0 < a.L ? M * (0 < a.Aa ? 2 : 1) : 0,
              ye = (a.Aa == 2 ? 2 : 1) * M
            if ((F = y + 832 + (j = ((3 * (16 * m + kl[a.L])) / 2) * J) + (T = a.Fa != null && 0 < a.Fa.length ? a.Kc.c * a.Kc.i : 0)) != F) m = 0
            else {
              if (F > a.Vb) {
                if (((a.Vb = 0), (a.Ec = o(F)), (a.Fc = 0), a.Ec == null)) {
                  m = Xt(a, 1, 'no memory during frame initialization.')
                  break e
                }
                a.Vb = F
              }
              ;(F = a.Ec),
                (O = a.Fc),
                (a.Ac = F),
                (a.Bc = O),
                (O += y),
                (a.Gd = s(J, Ya)),
                (a.Hd = 0),
                (a.rb = s(ce + 1, Ja)),
                (a.sb = 1),
                (a.wa = be ? s(be, qo) : null),
                (a.Y = 0),
                (a.D.Nb = 0),
                (a.D.wa = a.wa),
                (a.D.Y = a.Y),
                0 < a.Aa && (a.D.Y += M),
                t(!0),
                (a.oc = F),
                (a.pc = O),
                (O += 832),
                (a.ya = s(ye, qs)),
                (a.aa = 0),
                (a.D.ya = a.ya),
                (a.D.aa = a.aa),
                a.Aa == 2 && (a.D.aa += M),
                (a.R = 16 * M),
                (a.B = 8 * M),
                (M = (J = kl[a.L]) * a.R),
                (J = (J / 2) * a.B),
                (a.sa = F),
                (a.ta = O + M),
                (a.qa = a.sa),
                (a.ra = a.ta + 16 * m * a.R + J),
                (a.Ha = a.qa),
                (a.Ia = a.ra + 8 * m * a.B + J),
                (a.$c = 0),
                (O += j),
                (a.mb = T ? F : null),
                (a.nb = T ? O : null),
                t(O + T <= a.Fc + a.Vb),
                zs(a),
                i(a.Ac, a.Bc, 0, y),
                (m = 1)
            }
          }
          if (m) {
            if (
              ((u.ka = 0),
              (u.y = a.sa),
              (u.O = a.ta),
              (u.f = a.qa),
              (u.N = a.ra),
              (u.ea = a.Ha),
              (u.Vd = a.Ia),
              (u.fa = a.R),
              (u.Rc = a.B),
              (u.F = null),
              (u.J = 0),
              !Sh)
            ) {
              for (m = -255; 255 >= m; ++m) yh[255 + m] = 0 > m ? -m : m
              for (m = -1020; 1020 >= m; ++m) wh[1020 + m] = -128 > m ? -128 : 127 < m ? 127 : m
              for (m = -112; 112 >= m; ++m) _h[112 + m] = -16 > m ? -16 : 15 < m ? 15 : m
              for (m = -255; 510 >= m; ++m) xh[255 + m] = 0 > m ? 0 : 255 < m ? 255 : m
              Sh = 1
            }
            ;(kr = Wc),
              (ns = $c),
              (ji = tl),
              (Ar = Vc),
              (ci = nl),
              (aa = el),
              (mo = Gs),
              (rs = po),
              (vo = ou),
              (Ii = Ks),
              (la = iu),
              (rr = Go),
              (ui = Js),
              (Mt = fl),
              (Dt = ul),
              (Qt = si),
              (fn = Ai),
              (fi = ru),
              (Lr[0] = Ur),
              (Lr[1] = Gc),
              (Lr[2] = Xc),
              (Lr[3] = Qc),
              (Lr[4] = ol),
              (Lr[5] = Vo),
              (Lr[6] = sl),
              (Lr[7] = $s),
              (Lr[8] = eu),
              (Lr[9] = Zc),
              (Ti[0] = rl),
              (Ti[1] = Jc),
              (Ti[2] = oi),
              (Ti[3] = Ho),
              (Ti[4] = xn),
              (Ti[5] = Yc),
              (Ti[6] = il),
              (hi[0] = ki),
              (hi[1] = Kc),
              (hi[2] = tu),
              (hi[3] = Vs),
              (hi[4] = ho),
              (hi[5] = nu),
              (hi[6] = Ws),
              (m = 1)
          } else m = 0
        }
        m &&
          (m = (function (pe, Oe) {
            for (pe.M = 0; pe.M < pe.Va; ++pe.M) {
              var Ae,
                ue = pe.Jc[pe.M & pe.Xb],
                he = pe.m,
                Ee = pe
              for (Ae = 0; Ae < Ee.za; ++Ae) {
                var Re = he,
                  Te = Ee,
                  We = Te.Ac,
                  ze = Te.Bc + 4 * Ae,
                  nt = Te.zc,
                  Ue = Te.ya[Te.aa + Ae]
                if (
                  (Te.Qa.Bb ? (Ue.$b = se(Re, Te.Pa.jb[0]) ? 2 + se(Re, Te.Pa.jb[2]) : se(Re, Te.Pa.jb[1])) : (Ue.$b = 0),
                  Te.kc && (Ue.Ad = se(Re, Te.Bd)),
                  (Ue.Za = !se(Re, 145) + 0),
                  Ue.Za)
                ) {
                  var At = Ue.Ob,
                    Ct = 0
                  for (Te = 0; 4 > Te; ++Te) {
                    var xt,
                      mt = nt[0 + Te]
                    for (xt = 0; 4 > xt; ++xt) {
                      mt = Q0[We[ze + xt]][mt]
                      for (var Ft = Nh[se(Re, mt[0])]; 0 < Ft; ) Ft = Nh[2 * Ft + se(Re, mt[Ft])]
                      ;(mt = -Ft), (We[ze + xt] = mt)
                    }
                    r(At, Ct, We, ze, 4), (Ct += 4), (nt[0 + Te] = mt)
                  }
                } else (mt = se(Re, 156) ? (se(Re, 128) ? 1 : 3) : se(Re, 163) ? 2 : 0), (Ue.Ob[0] = mt), i(We, ze, mt, 4), i(nt, 0, mt, 4)
                Ue.Dd = se(Re, 142) ? (se(Re, 114) ? (se(Re, 183) ? 1 : 3) : 2) : 0
              }
              if (Ee.m.Ka) return Xt(pe, 7, 'Premature end-of-partition0 encountered.')
              for (; pe.ja < pe.za; ++pe.ja) {
                if (((Ee = ue), (Re = (he = pe).rb[he.sb - 1]), (We = he.rb[he.sb + he.ja]), (Ae = he.ya[he.aa + he.ja]), (ze = he.kc ? Ae.Ad : 0)))
                  (Re.la = We.la = 0), Ae.Za || (Re.Na = We.Na = 0), (Ae.Hc = 0), (Ae.Gc = 0), (Ae.ia = 0)
                else {
                  var Tt, ft
                  if (
                    ((Re = We),
                    (We = Ee),
                    (ze = he.Pa.Xc),
                    (nt = he.ya[he.aa + he.ja]),
                    (Ue = he.pb[nt.$b]),
                    (Te = nt.ad),
                    (At = 0),
                    (Ct = he.rb[he.sb - 1]),
                    (mt = xt = 0),
                    i(Te, At, 0, 384),
                    nt.Za)
                  )
                    var on = 0,
                      zn = ze[3]
                  else {
                    Ft = o(16)
                    var sn = Re.Na + Ct.Na
                    if (((sn = ca(We, ze[1], sn, Ue.Eb, 0, Ft, 0)), (Re.Na = Ct.Na = (0 < sn) + 0), 1 < sn)) kr(Ft, 0, Te, At)
                    else {
                      var Un = (Ft[0] + 3) >> 3
                      for (Ft = 0; 256 > Ft; Ft += 16) Te[At + Ft] = Un
                    }
                    ;(on = 1), (zn = ze[0])
                  }
                  var jt = 15 & Re.la,
                    Qn = 15 & Ct.la
                  for (Ft = 0; 4 > Ft; ++Ft) {
                    var Zn = 1 & Qn
                    for (Un = ft = 0; 4 > Un; ++Un)
                      (jt = (jt >> 1) | ((Zn = (sn = ca(We, zn, (sn = Zn + (1 & jt)), Ue.Sc, on, Te, At)) > on) << 7)),
                        (ft = (ft << 2) | (3 < sn ? 3 : 1 < sn ? 2 : Te[At + 0] != 0)),
                        (At += 16)
                    ;(jt >>= 4), (Qn = (Qn >> 1) | (Zn << 7)), (xt = ((xt << 8) | ft) >>> 0)
                  }
                  for (zn = jt, on = Qn >> 4, Tt = 0; 4 > Tt; Tt += 2) {
                    for (ft = 0, jt = Re.la >> (4 + Tt), Qn = Ct.la >> (4 + Tt), Ft = 0; 2 > Ft; ++Ft) {
                      for (Zn = 1 & Qn, Un = 0; 2 > Un; ++Un)
                        (sn = Zn + (1 & jt)),
                          (jt = (jt >> 1) | ((Zn = 0 < (sn = ca(We, ze[2], sn, Ue.Qc, 0, Te, At))) << 3)),
                          (ft = (ft << 2) | (3 < sn ? 3 : 1 < sn ? 2 : Te[At + 0] != 0)),
                          (At += 16)
                      ;(jt >>= 2), (Qn = (Qn >> 1) | (Zn << 5))
                    }
                    ;(mt |= ft << (4 * Tt)), (zn |= (jt << 4) << Tt), (on |= (240 & Qn) << Tt)
                  }
                  ;(Re.la = zn), (Ct.la = on), (nt.Hc = xt), (nt.Gc = mt), (nt.ia = 43690 & mt ? 0 : Ue.ia), (ze = !(xt | mt))
                }
                if ((0 < he.L && ((he.wa[he.Y + he.ja] = he.gd[Ae.$b][Ae.Za]), (he.wa[he.Y + he.ja].La |= !ze)), Ee.Ka))
                  return Xt(pe, 7, 'Premature end-of-file encountered.')
              }
              if ((zs(pe), (he = Oe), (Ee = 1), (Ae = (ue = pe).D), (Re = 0 < ue.L && ue.M >= ue.zb && ue.M <= ue.Va), ue.Aa == 0))
                e: {
                  if (
                    ((Ae.M = ue.M),
                    (Ae.uc = Re),
                    ta(ue, Ae),
                    (Ee = 1),
                    (Ae = (ft = ue.D).Nb),
                    (Re = (mt = kl[ue.L]) * ue.R),
                    (We = (mt / 2) * ue.B),
                    (Ft = 16 * Ae * ue.R),
                    (Un = 8 * Ae * ue.B),
                    (ze = ue.sa),
                    (nt = ue.ta - Re + Ft),
                    (Ue = ue.qa),
                    (Te = ue.ra - We + Un),
                    (At = ue.Ha),
                    (Ct = ue.Ia - We + Un),
                    (Qn = (jt = ft.M) == 0),
                    (xt = jt >= ue.Va - 1),
                    ue.Aa == 2 && ta(ue, ft),
                    ft.uc)
                  )
                    for (Zn = (sn = ue).D.M, t(sn.D.uc), ft = sn.yb; ft < sn.Hb; ++ft) {
                      ;(on = ft), (zn = Zn)
                      var gn = (yn = (Gt = sn).D).Nb
                      Tt = Gt.R
                      var yn = yn.wa[yn.Y + on],
                        In = Gt.sa,
                        sr = Gt.ta + 16 * gn * Tt + 16 * on,
                        $r = yn.dd,
                        mn = yn.tc
                      if (mn != 0)
                        if ((t(3 <= mn), Gt.L == 1))
                          0 < on && Qt(In, sr, Tt, mn + 4), yn.La && fi(In, sr, Tt, mn), 0 < zn && Dt(In, sr, Tt, mn + 4), yn.La && fn(In, sr, Tt, mn)
                        else {
                          var di = Gt.B,
                            bo = Gt.qa,
                            os = Gt.ra + 8 * gn * di + 8 * on,
                            Oi = Gt.Ha,
                            Gt = Gt.Ia + 8 * gn * di + 8 * on
                          ;(gn = yn.ld),
                            0 < on && (rs(In, sr, Tt, mn + 4, $r, gn), Ii(bo, os, Oi, Gt, di, mn + 4, $r, gn)),
                            yn.La && (rr(In, sr, Tt, mn, $r, gn), Mt(bo, os, Oi, Gt, di, mn, $r, gn)),
                            0 < zn && (mo(In, sr, Tt, mn + 4, $r, gn), vo(bo, os, Oi, Gt, di, mn + 4, $r, gn)),
                            yn.La && (la(In, sr, Tt, mn, $r, gn), ui(bo, os, Oi, Gt, di, mn, $r, gn))
                        }
                    }
                  if ((ue.ia && alert('todo:DitherRow'), he.put != null)) {
                    if (
                      ((ft = 16 * jt),
                      (jt = 16 * (jt + 1)),
                      Qn
                        ? ((he.y = ue.sa), (he.O = ue.ta + Ft), (he.f = ue.qa), (he.N = ue.ra + Un), (he.ea = ue.Ha), (he.W = ue.Ia + Un))
                        : ((ft -= mt), (he.y = ze), (he.O = nt), (he.f = Ue), (he.N = Te), (he.ea = At), (he.W = Ct)),
                      xt || (jt -= mt),
                      jt > he.o && (jt = he.o),
                      (he.F = null),
                      (he.J = null),
                      ue.Fa != null &&
                        0 < ue.Fa.length &&
                        ft < jt &&
                        ((he.J = Zs(ue, he, ft, jt - ft)), (he.F = ue.mb), he.F == null && he.F.length == 0))
                    ) {
                      Ee = Xt(ue, 3, 'Could not decode alpha data.')
                      break e
                    }
                    ft < he.j &&
                      ((mt = he.j - ft),
                      (ft = he.j),
                      t(!(1 & mt)),
                      (he.O += ue.R * mt),
                      (he.N += ue.B * (mt >> 1)),
                      (he.W += ue.B * (mt >> 1)),
                      he.F != null && (he.J += he.width * mt)),
                      ft < jt &&
                        ((he.O += he.v),
                        (he.N += he.v >> 1),
                        (he.W += he.v >> 1),
                        he.F != null && (he.J += he.v),
                        (he.ka = ft - he.j),
                        (he.U = he.va - he.v),
                        (he.T = jt - ft),
                        (Ee = he.put(he)))
                  }
                  Ae + 1 != ue.Ic ||
                    xt ||
                    (r(ue.sa, ue.ta - Re, ze, nt + 16 * ue.R, Re),
                    r(ue.qa, ue.ra - We, Ue, Te + 8 * ue.B, We),
                    r(ue.Ha, ue.Ia - We, At, Ct + 8 * ue.B, We))
                }
              if (!Ee) return Xt(pe, 6, 'Output aborted.')
            }
            return 1
          })(a, u)),
          u.bc != null && u.bc(u),
          (m &= 1)
      }
      return m ? ((a.cb = 0), m) : 0
    }
    function yr(a, u, m, y, j) {
      ;(j = a[u + m + 32 * y] + (j >> 3)), (a[u + m + 32 * y] = -256 & j ? (0 > j ? 0 : 255) : j)
    }
    function Uo(a, u, m, y, j, T) {
      yr(a, u, 0, m, y + j), yr(a, u, 1, m, y + T), yr(a, u, 2, m, y - T), yr(a, u, 3, m, y - j)
    }
    function Dn(a) {
      return ((20091 * a) >> 16) + a
    }
    function Us(a, u, m, y) {
      var j,
        T = 0,
        F = o(16)
      for (j = 0; 4 > j; ++j) {
        var O = a[u + 0] + a[u + 8],
          M = a[u + 0] - a[u + 8],
          J = ((35468 * a[u + 4]) >> 16) - Dn(a[u + 12]),
          ce = Dn(a[u + 4]) + ((35468 * a[u + 12]) >> 16)
        ;(F[T + 0] = O + ce), (F[T + 1] = M + J), (F[T + 2] = M - J), (F[T + 3] = O - ce), (T += 4), u++
      }
      for (j = T = 0; 4 > j; ++j)
        (O = (a = F[T + 0] + 4) + F[T + 8]),
          (M = a - F[T + 8]),
          (J = ((35468 * F[T + 4]) >> 16) - Dn(F[T + 12])),
          yr(m, y, 0, 0, O + (ce = Dn(F[T + 4]) + ((35468 * F[T + 12]) >> 16))),
          yr(m, y, 1, 0, M + J),
          yr(m, y, 2, 0, M - J),
          yr(m, y, 3, 0, O - ce),
          T++,
          (y += 32)
    }
    function el(a, u, m, y) {
      var j = a[u + 0] + 4,
        T = (35468 * a[u + 4]) >> 16,
        F = Dn(a[u + 4]),
        O = (35468 * a[u + 1]) >> 16
      Uo(m, y, 0, j + F, (a = Dn(a[u + 1])), O), Uo(m, y, 1, j + T, a, O), Uo(m, y, 2, j - T, a, O), Uo(m, y, 3, j - F, a, O)
    }
    function $c(a, u, m, y, j) {
      Us(a, u, m, y), j && Us(a, u + 16, m, y + 4)
    }
    function tl(a, u, m, y) {
      ns(a, u + 0, m, y, 1), ns(a, u + 32, m, y + 128, 1)
    }
    function Vc(a, u, m, y) {
      var j
      for (a = a[u + 0] + 4, j = 0; 4 > j; ++j) for (u = 0; 4 > u; ++u) yr(m, y, u, j, a)
    }
    function nl(a, u, m, y) {
      a[u + 0] && Ar(a, u + 0, m, y),
        a[u + 16] && Ar(a, u + 16, m, y + 4),
        a[u + 32] && Ar(a, u + 32, m, y + 128),
        a[u + 48] && Ar(a, u + 48, m, y + 128 + 4)
    }
    function Wc(a, u, m, y) {
      var j,
        T = o(16)
      for (j = 0; 4 > j; ++j) {
        var F = a[u + 0 + j] + a[u + 12 + j],
          O = a[u + 4 + j] + a[u + 8 + j],
          M = a[u + 4 + j] - a[u + 8 + j],
          J = a[u + 0 + j] - a[u + 12 + j]
        ;(T[0 + j] = F + O), (T[8 + j] = F - O), (T[4 + j] = J + M), (T[12 + j] = J - M)
      }
      for (j = 0; 4 > j; ++j)
        (F = (a = T[0 + 4 * j] + 3) + T[3 + 4 * j]),
          (O = T[1 + 4 * j] + T[2 + 4 * j]),
          (M = T[1 + 4 * j] - T[2 + 4 * j]),
          (J = a - T[3 + 4 * j]),
          (m[y + 0] = (F + O) >> 3),
          (m[y + 16] = (J + M) >> 3),
          (m[y + 32] = (F - O) >> 3),
          (m[y + 48] = (J - M) >> 3),
          (y += 64)
    }
    function Hs(a, u, m) {
      var y,
        j = u - 32,
        T = Xn,
        F = 255 - a[j - 1]
      for (y = 0; y < m; ++y) {
        var O,
          M = T,
          J = F + a[u - 1]
        for (O = 0; O < m; ++O) a[u + O] = M[J + a[j + O]]
        u += 32
      }
    }
    function Gc(a, u) {
      Hs(a, u, 4)
    }
    function Kc(a, u) {
      Hs(a, u, 8)
    }
    function Jc(a, u) {
      Hs(a, u, 16)
    }
    function oi(a, u) {
      var m
      for (m = 0; 16 > m; ++m) r(a, u + 32 * m, a, u - 32, 16)
    }
    function Ho(a, u) {
      var m
      for (m = 16; 0 < m; --m) i(a, u, a[u - 1], 16), (u += 32)
    }
    function $o(a, u, m) {
      var y
      for (y = 0; 16 > y; ++y) i(u, m + 32 * y, a, 16)
    }
    function rl(a, u) {
      var m,
        y = 16
      for (m = 0; 16 > m; ++m) y += a[u - 1 + 32 * m] + a[u + m - 32]
      $o(y >> 5, a, u)
    }
    function xn(a, u) {
      var m,
        y = 8
      for (m = 0; 16 > m; ++m) y += a[u - 1 + 32 * m]
      $o(y >> 4, a, u)
    }
    function Yc(a, u) {
      var m,
        y = 8
      for (m = 0; 16 > m; ++m) y += a[u + m - 32]
      $o(y >> 4, a, u)
    }
    function il(a, u) {
      $o(128, a, u)
    }
    function at(a, u, m) {
      return (a + 2 * u + m + 2) >> 2
    }
    function Xc(a, u) {
      var m,
        y = u - 32
      for (
        y = new Uint8Array([
          at(a[y - 1], a[y + 0], a[y + 1]),
          at(a[y + 0], a[y + 1], a[y + 2]),
          at(a[y + 1], a[y + 2], a[y + 3]),
          at(a[y + 2], a[y + 3], a[y + 4])
        ]),
          m = 0;
        4 > m;
        ++m
      )
        r(a, u + 32 * m, y, 0, y.length)
    }
    function Qc(a, u) {
      var m = a[u - 1],
        y = a[u - 1 + 32],
        j = a[u - 1 + 64],
        T = a[u - 1 + 96]
      Se(a, u + 0, 16843009 * at(a[u - 1 - 32], m, y)),
        Se(a, u + 32, 16843009 * at(m, y, j)),
        Se(a, u + 64, 16843009 * at(y, j, T)),
        Se(a, u + 96, 16843009 * at(j, T, T))
    }
    function Ur(a, u) {
      var m,
        y = 4
      for (m = 0; 4 > m; ++m) y += a[u + m - 32] + a[u - 1 + 32 * m]
      for (y >>= 3, m = 0; 4 > m; ++m) i(a, u + 32 * m, y, 4)
    }
    function ol(a, u) {
      var m = a[u - 1 + 0],
        y = a[u - 1 + 32],
        j = a[u - 1 + 64],
        T = a[u - 1 - 32],
        F = a[u + 0 - 32],
        O = a[u + 1 - 32],
        M = a[u + 2 - 32],
        J = a[u + 3 - 32]
      ;(a[u + 0 + 96] = at(y, j, a[u - 1 + 96])),
        (a[u + 1 + 96] = a[u + 0 + 64] = at(m, y, j)),
        (a[u + 2 + 96] = a[u + 1 + 64] = a[u + 0 + 32] = at(T, m, y)),
        (a[u + 3 + 96] = a[u + 2 + 64] = a[u + 1 + 32] = a[u + 0 + 0] = at(F, T, m)),
        (a[u + 3 + 64] = a[u + 2 + 32] = a[u + 1 + 0] = at(O, F, T)),
        (a[u + 3 + 32] = a[u + 2 + 0] = at(M, O, F)),
        (a[u + 3 + 0] = at(J, M, O))
    }
    function sl(a, u) {
      var m = a[u + 1 - 32],
        y = a[u + 2 - 32],
        j = a[u + 3 - 32],
        T = a[u + 4 - 32],
        F = a[u + 5 - 32],
        O = a[u + 6 - 32],
        M = a[u + 7 - 32]
      ;(a[u + 0 + 0] = at(a[u + 0 - 32], m, y)),
        (a[u + 1 + 0] = a[u + 0 + 32] = at(m, y, j)),
        (a[u + 2 + 0] = a[u + 1 + 32] = a[u + 0 + 64] = at(y, j, T)),
        (a[u + 3 + 0] = a[u + 2 + 32] = a[u + 1 + 64] = a[u + 0 + 96] = at(j, T, F)),
        (a[u + 3 + 32] = a[u + 2 + 64] = a[u + 1 + 96] = at(T, F, O)),
        (a[u + 3 + 64] = a[u + 2 + 96] = at(F, O, M)),
        (a[u + 3 + 96] = at(O, M, M))
    }
    function Vo(a, u) {
      var m = a[u - 1 + 0],
        y = a[u - 1 + 32],
        j = a[u - 1 + 64],
        T = a[u - 1 - 32],
        F = a[u + 0 - 32],
        O = a[u + 1 - 32],
        M = a[u + 2 - 32],
        J = a[u + 3 - 32]
      ;(a[u + 0 + 0] = a[u + 1 + 64] = (T + F + 1) >> 1),
        (a[u + 1 + 0] = a[u + 2 + 64] = (F + O + 1) >> 1),
        (a[u + 2 + 0] = a[u + 3 + 64] = (O + M + 1) >> 1),
        (a[u + 3 + 0] = (M + J + 1) >> 1),
        (a[u + 0 + 96] = at(j, y, m)),
        (a[u + 0 + 64] = at(y, m, T)),
        (a[u + 0 + 32] = a[u + 1 + 96] = at(m, T, F)),
        (a[u + 1 + 32] = a[u + 2 + 96] = at(T, F, O)),
        (a[u + 2 + 32] = a[u + 3 + 96] = at(F, O, M)),
        (a[u + 3 + 32] = at(O, M, J))
    }
    function $s(a, u) {
      var m = a[u + 0 - 32],
        y = a[u + 1 - 32],
        j = a[u + 2 - 32],
        T = a[u + 3 - 32],
        F = a[u + 4 - 32],
        O = a[u + 5 - 32],
        M = a[u + 6 - 32],
        J = a[u + 7 - 32]
      ;(a[u + 0 + 0] = (m + y + 1) >> 1),
        (a[u + 1 + 0] = a[u + 0 + 64] = (y + j + 1) >> 1),
        (a[u + 2 + 0] = a[u + 1 + 64] = (j + T + 1) >> 1),
        (a[u + 3 + 0] = a[u + 2 + 64] = (T + F + 1) >> 1),
        (a[u + 0 + 32] = at(m, y, j)),
        (a[u + 1 + 32] = a[u + 0 + 96] = at(y, j, T)),
        (a[u + 2 + 32] = a[u + 1 + 96] = at(j, T, F)),
        (a[u + 3 + 32] = a[u + 2 + 96] = at(T, F, O)),
        (a[u + 3 + 64] = at(F, O, M)),
        (a[u + 3 + 96] = at(O, M, J))
    }
    function Zc(a, u) {
      var m = a[u - 1 + 0],
        y = a[u - 1 + 32],
        j = a[u - 1 + 64],
        T = a[u - 1 + 96]
      ;(a[u + 0 + 0] = (m + y + 1) >> 1),
        (a[u + 2 + 0] = a[u + 0 + 32] = (y + j + 1) >> 1),
        (a[u + 2 + 32] = a[u + 0 + 64] = (j + T + 1) >> 1),
        (a[u + 1 + 0] = at(m, y, j)),
        (a[u + 3 + 0] = a[u + 1 + 32] = at(y, j, T)),
        (a[u + 3 + 32] = a[u + 1 + 64] = at(j, T, T)),
        (a[u + 3 + 64] = a[u + 2 + 64] = a[u + 0 + 96] = a[u + 1 + 96] = a[u + 2 + 96] = a[u + 3 + 96] = T)
    }
    function eu(a, u) {
      var m = a[u - 1 + 0],
        y = a[u - 1 + 32],
        j = a[u - 1 + 64],
        T = a[u - 1 + 96],
        F = a[u - 1 - 32],
        O = a[u + 0 - 32],
        M = a[u + 1 - 32],
        J = a[u + 2 - 32]
      ;(a[u + 0 + 0] = a[u + 2 + 32] = (m + F + 1) >> 1),
        (a[u + 0 + 32] = a[u + 2 + 64] = (y + m + 1) >> 1),
        (a[u + 0 + 64] = a[u + 2 + 96] = (j + y + 1) >> 1),
        (a[u + 0 + 96] = (T + j + 1) >> 1),
        (a[u + 3 + 0] = at(O, M, J)),
        (a[u + 2 + 0] = at(F, O, M)),
        (a[u + 1 + 0] = a[u + 3 + 32] = at(m, F, O)),
        (a[u + 1 + 32] = a[u + 3 + 64] = at(y, m, F)),
        (a[u + 1 + 64] = a[u + 3 + 96] = at(j, y, m)),
        (a[u + 1 + 96] = at(T, j, y))
    }
    function tu(a, u) {
      var m
      for (m = 0; 8 > m; ++m) r(a, u + 32 * m, a, u - 32, 8)
    }
    function Vs(a, u) {
      var m
      for (m = 0; 8 > m; ++m) i(a, u, a[u - 1], 8), (u += 32)
    }
    function fo(a, u, m) {
      var y
      for (y = 0; 8 > y; ++y) i(u, m + 32 * y, a, 8)
    }
    function ki(a, u) {
      var m,
        y = 8
      for (m = 0; 8 > m; ++m) y += a[u + m - 32] + a[u - 1 + 32 * m]
      fo(y >> 4, a, u)
    }
    function nu(a, u) {
      var m,
        y = 4
      for (m = 0; 8 > m; ++m) y += a[u + m - 32]
      fo(y >> 3, a, u)
    }
    function ho(a, u) {
      var m,
        y = 4
      for (m = 0; 8 > m; ++m) y += a[u - 1 + 32 * m]
      fo(y >> 3, a, u)
    }
    function Ws(a, u) {
      fo(128, a, u)
    }
    function Wo(a, u, m) {
      var y = a[u - m],
        j = a[u + 0],
        T = 3 * (j - y) + uu[1020 + a[u - 2 * m] - a[u + m]],
        F = ml[112 + ((T + 4) >> 3)]
      ;(a[u - m] = Xn[255 + y + ml[112 + ((T + 3) >> 3)]]), (a[u + 0] = Xn[255 + j - F])
    }
    function al(a, u, m, y) {
      var j = a[u + 0],
        T = a[u + m]
      return ir[255 + a[u - 2 * m] - a[u - m]] > y || ir[255 + T - j] > y
    }
    function ll(a, u, m, y) {
      return 4 * ir[255 + a[u - m] - a[u + 0]] + ir[255 + a[u - 2 * m] - a[u + m]] <= y
    }
    function cl(a, u, m, y, j) {
      var T = a[u - 3 * m],
        F = a[u - 2 * m],
        O = a[u - m],
        M = a[u + 0],
        J = a[u + m],
        ce = a[u + 2 * m],
        be = a[u + 3 * m]
      return 4 * ir[255 + O - M] + ir[255 + F - J] > y
        ? 0
        : ir[255 + a[u - 4 * m] - T] <= j &&
            ir[255 + T - F] <= j &&
            ir[255 + F - O] <= j &&
            ir[255 + be - ce] <= j &&
            ir[255 + ce - J] <= j &&
            ir[255 + J - M] <= j
    }
    function ul(a, u, m, y) {
      var j = 2 * y + 1
      for (y = 0; 16 > y; ++y) ll(a, u + y, m, j) && Wo(a, u + y, m)
    }
    function si(a, u, m, y) {
      var j = 2 * y + 1
      for (y = 0; 16 > y; ++y) ll(a, u + y * m, 1, j) && Wo(a, u + y * m, 1)
    }
    function Ai(a, u, m, y) {
      var j
      for (j = 3; 0 < j; --j) ul(a, (u += 4 * m), m, y)
    }
    function ru(a, u, m, y) {
      var j
      for (j = 3; 0 < j; --j) si(a, (u += 4), m, y)
    }
    function Li(a, u, m, y, j, T, F, O) {
      for (T = 2 * T + 1; 0 < j--; ) {
        if (cl(a, u, m, T, F))
          if (al(a, u, m, O)) Wo(a, u, m)
          else {
            var M = a,
              J = u,
              ce = m,
              be = M[J - 2 * ce],
              ye = M[J - ce],
              pe = M[J + 0],
              Oe = M[J + ce],
              Ae = M[J + 2 * ce],
              ue = (27 * (Ee = uu[1020 + 3 * (pe - ye) + uu[1020 + be - Oe]]) + 63) >> 7,
              he = (18 * Ee + 63) >> 7,
              Ee = (9 * Ee + 63) >> 7
            ;(M[J - 3 * ce] = Xn[255 + M[J - 3 * ce] + Ee]),
              (M[J - 2 * ce] = Xn[255 + be + he]),
              (M[J - ce] = Xn[255 + ye + ue]),
              (M[J + 0] = Xn[255 + pe - ue]),
              (M[J + ce] = Xn[255 + Oe - he]),
              (M[J + 2 * ce] = Xn[255 + Ae - Ee])
          }
        u += y
      }
    }
    function wr(a, u, m, y, j, T, F, O) {
      for (T = 2 * T + 1; 0 < j--; ) {
        if (cl(a, u, m, T, F))
          if (al(a, u, m, O)) Wo(a, u, m)
          else {
            var M = a,
              J = u,
              ce = m,
              be = M[J - ce],
              ye = M[J + 0],
              pe = M[J + ce],
              Oe = ml[112 + (((Ae = 3 * (ye - be)) + 4) >> 3)],
              Ae = ml[112 + ((Ae + 3) >> 3)],
              ue = (Oe + 1) >> 1
            ;(M[J - 2 * ce] = Xn[255 + M[J - 2 * ce] + ue]),
              (M[J - ce] = Xn[255 + be + Ae]),
              (M[J + 0] = Xn[255 + ye - Oe]),
              (M[J + ce] = Xn[255 + pe - ue])
          }
        u += y
      }
    }
    function Gs(a, u, m, y, j, T) {
      Li(a, u, m, 1, 16, y, j, T)
    }
    function po(a, u, m, y, j, T) {
      Li(a, u, 1, m, 16, y, j, T)
    }
    function iu(a, u, m, y, j, T) {
      var F
      for (F = 3; 0 < F; --F) wr(a, (u += 4 * m), m, 1, 16, y, j, T)
    }
    function Go(a, u, m, y, j, T) {
      var F
      for (F = 3; 0 < F; --F) wr(a, (u += 4), 1, m, 16, y, j, T)
    }
    function ou(a, u, m, y, j, T, F, O) {
      Li(a, u, j, 1, 8, T, F, O), Li(m, y, j, 1, 8, T, F, O)
    }
    function Ks(a, u, m, y, j, T, F, O) {
      Li(a, u, 1, j, 8, T, F, O), Li(m, y, 1, j, 8, T, F, O)
    }
    function Js(a, u, m, y, j, T, F, O) {
      wr(a, u + 4 * j, j, 1, 8, T, F, O), wr(m, y + 4 * j, j, 1, 8, T, F, O)
    }
    function fl(a, u, m, y, j, T, F, O) {
      wr(a, u + 4, 1, j, 8, T, F, O), wr(m, y + 4, 1, j, 8, T, F, O)
    }
    function Ko() {
      ;(this.ba = new pr()),
        (this.ec = []),
        (this.cc = []),
        (this.Mc = []),
        (this.Dc = this.Nc = this.dc = this.fc = 0),
        (this.Oa = new Vt()),
        (this.memory = 0),
        (this.Ib = 'OutputFunc'),
        (this.Jb = 'OutputAlphaFunc'),
        (this.Nd = 'OutputRowFunc')
    }
    function Ys() {
      ;(this.data = []), (this.offset = this.kd = this.ha = this.w = 0), (this.na = []), (this.xa = this.gb = this.Ja = this.Sa = this.P = 0)
    }
    function Xs() {
      ;(this.nc = this.Ea = this.b = this.hc = 0), (this.K = []), (this.w = 0)
    }
    function hl() {
      ;(this.ua = 0),
        (this.Wa = new R()),
        (this.vb = new R()),
        (this.md = this.xc = this.wc = 0),
        (this.vc = []),
        (this.Wb = 0),
        (this.Ya = new $()),
        (this.yc = new S())
    }
    function su() {
      ;(this.xb = this.a = 0),
        (this.l = new zo()),
        (this.ca = new pr()),
        (this.V = []),
        (this.Ba = 0),
        (this.Ta = []),
        (this.Ua = 0),
        (this.m = new A()),
        (this.Pb = 0),
        (this.wd = new A()),
        (this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0),
        (this.s = new hl()),
        (this.ab = 0),
        (this.gc = s(4, Xs)),
        (this.Oc = 0)
    }
    function Jo() {
      ;(this.Lc = this.Z = this.$a = this.i = this.c = 0),
        (this.l = new zo()),
        (this.ic = 0),
        (this.ca = []),
        (this.tb = 0),
        (this.qd = null),
        (this.rd = 0)
    }
    function go(a, u, m, y, j, T, F) {
      for (a = a == null ? 0 : a[u + 0], u = 0; u < F; ++u) (j[T + u] = (a + m[y + u]) & 255), (a = j[T + u])
    }
    function Qs(a, u, m, y, j, T, F) {
      var O
      if (a == null) go(null, null, m, y, j, T, F)
      else for (O = 0; O < F; ++O) j[T + O] = (a[u + O] + m[y + O]) & 255
    }
    function Ni(a, u, m, y, j, T, F) {
      if (a == null) go(null, null, m, y, j, T, F)
      else {
        var O,
          M = a[u + 0],
          J = M,
          ce = M
        for (O = 0; O < F; ++O) (J = ce + (M = a[u + O]) - J), (ce = (m[y + O] + (-256 & J ? (0 > J ? 0 : 255) : J)) & 255), (J = M), (j[T + O] = ce)
      }
    }
    function Zs(a, u, m, y) {
      var j = u.width,
        T = u.o
      if ((t(a != null && u != null), 0 > m || 0 >= y || m + y > T)) return null
      if (!a.Cc) {
        if (a.ga == null) {
          var F
          if (
            ((a.ga = new Jo()),
            (F = a.ga == null) ||
              ((F = u.width * u.o),
              t(a.Gb.length == 0),
              (a.Gb = o(F)),
              (a.Uc = 0),
              a.Gb == null ? (F = 0) : ((a.mb = a.Gb), (a.nb = a.Uc), (a.rc = null), (F = 1)),
              (F = !F)),
            !F)
          ) {
            F = a.ga
            var O = a.Fa,
              M = a.P,
              J = a.qc,
              ce = a.mb,
              be = a.nb,
              ye = M + 1,
              pe = J - 1,
              Oe = F.l
            if (
              (t(O != null && ce != null && u != null),
              (Fi[0] = null),
              (Fi[1] = go),
              (Fi[2] = Qs),
              (Fi[3] = Ni),
              (F.ca = ce),
              (F.tb = be),
              (F.c = u.width),
              (F.i = u.height),
              t(0 < F.c && 0 < F.i),
              1 >= J)
            )
              u = 0
            else if (
              ((F.$a = (O[M + 0] >> 0) & 3),
              (F.Z = (O[M + 0] >> 2) & 3),
              (F.Lc = (O[M + 0] >> 4) & 3),
              (M = (O[M + 0] >> 6) & 3),
              0 > F.$a || 1 < F.$a || 4 <= F.Z || 1 < F.Lc || M)
            )
              u = 0
            else if (
              ((Oe.put = Mr),
              (Oe.ac = bn),
              (Oe.bc = Dr),
              (Oe.ma = F),
              (Oe.width = u.width),
              (Oe.height = u.height),
              (Oe.Da = u.Da),
              (Oe.v = u.v),
              (Oe.va = u.va),
              (Oe.j = u.j),
              (Oe.o = u.o),
              F.$a)
            )
              e: {
                t(F.$a == 1), (u = tr())
                t: for (;;) {
                  if (u == null) {
                    u = 0
                    break e
                  }
                  if (
                    (t(F != null),
                    (F.mc = u),
                    (u.c = F.c),
                    (u.i = F.i),
                    (u.l = F.l),
                    (u.l.ma = F),
                    (u.l.width = F.c),
                    (u.l.height = F.i),
                    (u.a = 0),
                    X(u.m, O, ye, pe),
                    !zr(F.c, F.i, 1, u, null) ||
                      (u.ab == 1 && u.gc[0].hc == 3 && ii(u.s)
                        ? ((F.ic = 1),
                          (O = u.c * u.i),
                          (u.Ta = null),
                          (u.Ua = 0),
                          (u.V = o(O)),
                          (u.Ba = 0),
                          u.V == null ? ((u.a = 1), (u = 0)) : (u = 1))
                        : ((F.ic = 0), (u = uo(u, F.c))),
                      !u))
                  )
                    break t
                  u = 1
                  break e
                }
                ;(F.mc = null), (u = 0)
              }
            else u = pe >= F.c * F.i
            F = !u
          }
          if (F) return null
          a.ga.Lc != 1 ? (a.Ga = 0) : (y = T - m)
        }
        t(a.ga != null), t(m + y <= T)
        e: {
          if (((u = (O = a.ga).c), (T = O.l.o), O.$a == 0)) {
            if (((ye = a.rc), (pe = a.Vc), (Oe = a.Fa), (M = a.P + 1 + m * u), (J = a.mb), (ce = a.nb + m * u), t(M <= a.P + a.qc), O.Z != 0))
              for (t(Fi[O.Z] != null), F = 0; F < y; ++F) Fi[O.Z](ye, pe, Oe, M, J, ce, u), (ye = J), (pe = ce), (ce += u), (M += u)
            else for (F = 0; F < y; ++F) r(J, ce, Oe, M, u), (ye = J), (pe = ce), (ce += u), (M += u)
            ;(a.rc = ye), (a.Vc = pe)
          } else {
            if ((t(O.mc != null), (u = m + y), t((F = O.mc) != null), t(u <= F.i), F.C >= u)) u = 1
            else if ((O.ic || me(), O.ic)) {
              ;(O = F.V), (ye = F.Ba), (pe = F.c)
              var Ae = F.i,
                ue = ((Oe = 1), (M = F.$ / pe), (J = F.$ % pe), (ce = F.m), (be = F.s), F.$),
                he = pe * Ae,
                Ee = pe * u,
                Re = be.wc,
                Te = ue < Ee ? nn(be, J, M) : null
              t(ue <= he), t(u <= Ae), t(ii(be))
              t: for (;;) {
                for (; !ce.h && ue < Ee; ) {
                  if ((J & Re || (Te = nn(be, J, M)), t(Te != null), re(ce), 256 > (Ae = Mn(Te.G[0], Te.H[0], ce))))
                    (O[ye + ue] = Ae), ++ue, ++J >= pe && ((J = 0), ++M <= u && !(M % 16) && vr(F, M))
                  else {
                    if (!(280 > Ae)) {
                      Oe = 0
                      break t
                    }
                    Ae = gr(Ae - 256, ce)
                    var We,
                      ze = Mn(Te.G[4], Te.H[4], ce)
                    if ((re(ce), !(ue >= (ze = Br(pe, (ze = gr(ze, ce)))) && he - ue >= Ae))) {
                      Oe = 0
                      break t
                    }
                    for (We = 0; We < Ae; ++We) O[ye + ue + We] = O[ye + ue + We - ze]
                    for (ue += Ae, J += Ae; J >= pe; ) (J -= pe), ++M <= u && !(M % 16) && vr(F, M)
                    ue < Ee && J & Re && (Te = nn(be, J, M))
                  }
                  t(ce.h == G(ce))
                }
                vr(F, M > u ? u : M)
                break t
              }
              !Oe || (ce.h && ue < he) ? ((Oe = 0), (F.a = ce.h ? 5 : 3)) : (F.$ = ue), (u = Oe)
            } else u = br(F, F.V, F.Ba, F.c, F.i, u, Ro)
            if (!u) {
              y = 0
              break e
            }
          }
          m + y >= T && (a.Cc = 1), (y = 1)
        }
        if (!y) return null
        if (a.Cc && ((y = a.ga) != null && (y.mc = null), (a.ga = null), 0 < a.Ga)) return alert('todo:WebPDequantizeLevels'), null
      }
      return a.nb + m * j
    }
    function d(a, u, m, y, j, T) {
      for (; 0 < j--; ) {
        var F,
          O = a,
          M = u + (m ? 1 : 0),
          J = a,
          ce = u + (m ? 0 : 3)
        for (F = 0; F < y; ++F) {
          var be = J[ce + 4 * F]
          be != 255 &&
            ((be *= 32897),
            (O[M + 4 * F + 0] = (O[M + 4 * F + 0] * be) >> 23),
            (O[M + 4 * F + 1] = (O[M + 4 * F + 1] * be) >> 23),
            (O[M + 4 * F + 2] = (O[M + 4 * F + 2] * be) >> 23))
        }
        u += T
      }
    }
    function I(a, u, m, y, j) {
      for (; 0 < y--; ) {
        var T
        for (T = 0; T < m; ++T) {
          var F = a[u + 2 * T + 0],
            O = 15 & (J = a[u + 2 * T + 1]),
            M = 4369 * O,
            J = (((240 & J) | (J >> 4)) * M) >> 16
          ;(a[u + 2 * T + 0] = (((((240 & F) | (F >> 4)) * M) >> 16) & 240) | ((((((15 & F) | (F << 4)) * M) >> 16) >> 4) & 15)),
            (a[u + 2 * T + 1] = (240 & J) | O)
        }
        u += j
      }
    }
    function Z(a, u, m, y, j, T, F, O) {
      var M,
        J,
        ce = 255
      for (J = 0; J < j; ++J) {
        for (M = 0; M < y; ++M) {
          var be = a[u + M]
          ;(T[F + 4 * M] = be), (ce &= be)
        }
        ;(u += m), (F += O)
      }
      return ce != 255
    }
    function le(a, u, m, y, j) {
      var T
      for (T = 0; T < j; ++T) m[y + T] = a[u + T] >> 8
    }
    function me() {
      ;(Ei = d), (is = I), (gl = Z), (bh = le)
    }
    function Ce(a, u, m) {
      N[a] = function (y, j, T, F, O, M, J, ce, be, ye, pe, Oe, Ae, ue, he, Ee, Re) {
        var Te,
          We = (Re - 1) >> 1,
          ze = O[M + 0] | (J[ce + 0] << 16),
          nt = be[ye + 0] | (pe[Oe + 0] << 16)
        t(y != null)
        var Ue = (3 * ze + nt + 131074) >> 2
        for (
          u(y[j + 0], 255 & Ue, Ue >> 16, Ae, ue), T != null && ((Ue = (3 * nt + ze + 131074) >> 2), u(T[F + 0], 255 & Ue, Ue >> 16, he, Ee)), Te = 1;
          Te <= We;
          ++Te
        ) {
          var At = O[M + Te] | (J[ce + Te] << 16),
            Ct = be[ye + Te] | (pe[Oe + Te] << 16),
            xt = ze + At + nt + Ct + 524296,
            mt = (xt + 2 * (At + nt)) >> 3
          ;(Ue = (mt + ze) >> 1),
            (ze = ((xt = (xt + 2 * (ze + Ct)) >> 3) + At) >> 1),
            u(y[j + 2 * Te - 1], 255 & Ue, Ue >> 16, Ae, ue + (2 * Te - 1) * m),
            u(y[j + 2 * Te - 0], 255 & ze, ze >> 16, Ae, ue + (2 * Te - 0) * m),
            T != null &&
              ((Ue = (xt + nt) >> 1),
              (ze = (mt + Ct) >> 1),
              u(T[F + 2 * Te - 1], 255 & Ue, Ue >> 16, he, Ee + (2 * Te - 1) * m),
              u(T[F + 2 * Te + 0], 255 & ze, ze >> 16, he, Ee + (2 * Te + 0) * m)),
            (ze = At),
            (nt = Ct)
        }
        1 & Re ||
          ((Ue = (3 * ze + nt + 131074) >> 2),
          u(y[j + Re - 1], 255 & Ue, Ue >> 16, Ae, ue + (Re - 1) * m),
          T != null && ((Ue = (3 * nt + ze + 131074) >> 2), u(T[F + Re - 1], 255 & Ue, Ue >> 16, he, Ee + (Re - 1) * m)))
      }
    }
    function De() {
      ;(or[vl] = n2),
        (or[bl] = Ch),
        (or[kh] = r2),
        (or[yl] = jh),
        (or[wl] = Ih),
        (or[fu] = Eh),
        (or[Ah] = i2),
        (or[hu] = Ch),
        (or[du] = jh),
        (or[_l] = Ih),
        (or[pu] = Eh)
    }
    function Ve(a) {
      return a & ~o2 ? (0 > a ? 0 : 255) : a >> Th
    }
    function et(a, u) {
      return Ve(((19077 * a) >> 8) + ((26149 * u) >> 8) - 14234)
    }
    function ut(a, u, m) {
      return Ve(((19077 * a) >> 8) - ((6419 * u) >> 8) - ((13320 * m) >> 8) + 8708)
    }
    function pt(a, u) {
      return Ve(((19077 * a) >> 8) + ((33050 * u) >> 8) - 17685)
    }
    function yt(a, u, m, y, j) {
      ;(y[j + 0] = et(a, m)), (y[j + 1] = ut(a, u, m)), (y[j + 2] = pt(a, u))
    }
    function Ut(a, u, m, y, j) {
      ;(y[j + 0] = pt(a, u)), (y[j + 1] = ut(a, u, m)), (y[j + 2] = et(a, m))
    }
    function Wt(a, u, m, y, j) {
      var T = ut(a, u, m)
      ;(u = ((T << 3) & 224) | (pt(a, u) >> 3)), (y[j + 0] = (248 & et(a, m)) | (T >> 5)), (y[j + 1] = u)
    }
    function rn(a, u, m, y, j) {
      var T = (240 & pt(a, u)) | 15
      ;(y[j + 0] = (240 & et(a, m)) | (ut(a, u, m) >> 4)), (y[j + 1] = T)
    }
    function Sn(a, u, m, y, j) {
      ;(y[j + 0] = 255), yt(a, u, m, y, j + 1)
    }
    function pn(a, u, m, y, j) {
      Ut(a, u, m, y, j), (y[j + 3] = 255)
    }
    function _r(a, u, m, y, j) {
      yt(a, u, m, y, j), (y[j + 3] = 255)
    }
    function Yn(a, u) {
      return 0 > a ? 0 : a > u ? u : a
    }
    function ai(a, u, m) {
      N[a] = function (y, j, T, F, O, M, J, ce, be) {
        for (var ye = ce + (-2 & be) * m; ce != ye; )
          u(y[j + 0], T[F + 0], O[M + 0], J, ce), u(y[j + 1], T[F + 0], O[M + 0], J, ce + m), (j += 2), ++F, ++M, (ce += 2 * m)
        1 & be && u(y[j + 0], T[F + 0], O[M + 0], J, ce)
      }
    }
    function dl(a, u, m) {
      return m == 0 ? (a == 0 ? (u == 0 ? 6 : 5) : u == 0 ? 4 : 0) : m
    }
    function ea(a, u, m, y, j) {
      switch (a >>> 30) {
        case 3:
          ns(u, m, y, j, 0)
          break
        case 2:
          aa(u, m, y, j)
          break
        case 1:
          Ar(u, m, y, j)
      }
    }
    function ta(a, u) {
      var m,
        y,
        j = u.M,
        T = u.Nb,
        F = a.oc,
        O = a.pc + 40,
        M = a.oc,
        J = a.pc + 584,
        ce = a.oc,
        be = a.pc + 600
      for (m = 0; 16 > m; ++m) F[O + 32 * m - 1] = 129
      for (m = 0; 8 > m; ++m) (M[J + 32 * m - 1] = 129), (ce[be + 32 * m - 1] = 129)
      for (
        0 < j
          ? (F[O - 1 - 32] = M[J - 1 - 32] = ce[be - 1 - 32] = 129)
          : (i(F, O - 32 - 1, 127, 21), i(M, J - 32 - 1, 127, 9), i(ce, be - 32 - 1, 127, 9)),
          y = 0;
        y < a.za;
        ++y
      ) {
        var ye = u.ya[u.aa + y]
        if (0 < y) {
          for (m = -1; 16 > m; ++m) r(F, O + 32 * m - 4, F, O + 32 * m + 12, 4)
          for (m = -1; 8 > m; ++m) r(M, J + 32 * m - 4, M, J + 32 * m + 4, 4), r(ce, be + 32 * m - 4, ce, be + 32 * m + 4, 4)
        }
        var pe = a.Gd,
          Oe = a.Hd + y,
          Ae = ye.ad,
          ue = ye.Hc
        if ((0 < j && (r(F, O - 32, pe[Oe].y, 0, 16), r(M, J - 32, pe[Oe].f, 0, 8), r(ce, be - 32, pe[Oe].ea, 0, 8)), ye.Za)) {
          var he = F,
            Ee = O - 32 + 16
          for (0 < j && (y >= a.za - 1 ? i(he, Ee, pe[Oe].y[15], 4) : r(he, Ee, pe[Oe + 1].y, 0, 4)), m = 0; 4 > m; m++)
            he[Ee + 128 + m] = he[Ee + 256 + m] = he[Ee + 384 + m] = he[Ee + 0 + m]
          for (m = 0; 16 > m; ++m, ue <<= 2) (he = F), (Ee = O + Oh[m]), Lr[ye.Ob[m]](he, Ee), ea(ue, Ae, 16 * +m, he, Ee)
        } else if (((he = dl(y, j, ye.Ob[0])), Ti[he](F, O), ue != 0)) for (m = 0; 16 > m; ++m, ue <<= 2) ea(ue, Ae, 16 * +m, F, O + Oh[m])
        for (
          m = ye.Gc,
            he = dl(y, j, ye.Dd),
            hi[he](M, J),
            hi[he](ce, be),
            ue = Ae,
            he = M,
            Ee = J,
            255 & (ye = m >> 0) && (170 & ye ? ji(ue, 256, he, Ee) : ci(ue, 256, he, Ee)),
            ye = ce,
            ue = be,
            255 & (m >>= 8) && (170 & m ? ji(Ae, 320, ye, ue) : ci(Ae, 320, ye, ue)),
            j < a.Ub - 1 && (r(pe[Oe].y, 0, F, O + 480, 16), r(pe[Oe].f, 0, M, J + 224, 8), r(pe[Oe].ea, 0, ce, be + 224, 8)),
            m = 8 * T * a.B,
            pe = a.sa,
            Oe = a.ta + 16 * y + 16 * T * a.R,
            Ae = a.qa,
            ye = a.ra + 8 * y + m,
            ue = a.Ha,
            he = a.Ia + 8 * y + m,
            m = 0;
          16 > m;
          ++m
        )
          r(pe, Oe + m * a.R, F, O + 32 * m, 16)
        for (m = 0; 8 > m; ++m) r(Ae, ye + m * a.B, M, J + 32 * m, 8), r(ue, he + m * a.B, ce, be + 32 * m, 8)
      }
    }
    function Yo(a, u, m, y, j, T, F, O, M) {
      var J = [0],
        ce = [0],
        be = 0,
        ye = M != null ? M.kd : 0,
        pe = M ?? new Ys()
      if (a == null || 12 > m) return 7
      ;(pe.data = a), (pe.w = u), (pe.ha = m), (u = [u]), (m = [m]), (pe.gb = [pe.gb])
      e: {
        var Oe = u,
          Ae = m,
          ue = pe.gb
        if ((t(a != null), t(Ae != null), t(ue != null), (ue[0] = 0), 12 <= Ae[0] && !n(a, Oe[0], 'RIFF'))) {
          if (n(a, Oe[0] + 8, 'WEBP')) {
            ue = 3
            break e
          }
          var he = K(a, Oe[0] + 4)
          if (12 > he || 4294967286 < he) {
            ue = 3
            break e
          }
          if (ye && he > Ae[0] - 8) {
            ue = 7
            break e
          }
          ;(ue[0] = he), (Oe[0] += 12), (Ae[0] -= 12)
        }
        ue = 0
      }
      if (ue != 0) return ue
      for (he = 0 < pe.gb[0], m = m[0]; ; ) {
        e: {
          var Ee = a
          ;(Ae = u), (ue = m)
          var Re = J,
            Te = ce,
            We = (Oe = [0])
          if ((((Ue = be = [be])[0] = 0), 8 > ue[0])) ue = 7
          else {
            if (!n(Ee, Ae[0], 'VP8X')) {
              if (K(Ee, Ae[0] + 4) != 10) {
                ue = 3
                break e
              }
              if (18 > ue[0]) {
                ue = 7
                break e
              }
              var ze = K(Ee, Ae[0] + 8),
                nt = 1 + q(Ee, Ae[0] + 12)
              if (2147483648 <= nt * (Ee = 1 + q(Ee, Ae[0] + 15))) {
                ue = 3
                break e
              }
              We != null && (We[0] = ze), Re != null && (Re[0] = nt), Te != null && (Te[0] = Ee), (Ae[0] += 18), (ue[0] -= 18), (Ue[0] = 1)
            }
            ue = 0
          }
        }
        if (((be = be[0]), (Oe = Oe[0]), ue != 0)) return ue
        if (((Ae = !!(2 & Oe)), !he && be)) return 3
        if ((T != null && (T[0] = !!(16 & Oe)), F != null && (F[0] = Ae), O != null && (O[0] = 0), (F = J[0]), (Oe = ce[0]), be && Ae && M == null)) {
          ue = 0
          break
        }
        if (4 > m) {
          ue = 7
          break
        }
        if ((he && be) || (!he && !be && !n(a, u[0], 'ALPH'))) {
          ;(m = [m]), (pe.na = [pe.na]), (pe.P = [pe.P]), (pe.Sa = [pe.Sa])
          e: {
            ;(ze = a), (ue = u), (he = m)
            var Ue = pe.gb
            ;(Re = pe.na), (Te = pe.P), (We = pe.Sa), (nt = 22), t(ze != null), t(he != null), (Ee = ue[0])
            var At = he[0]
            for (t(Re != null), t(We != null), Re[0] = null, Te[0] = null, We[0] = 0; ; ) {
              if (((ue[0] = Ee), (he[0] = At), 8 > At)) {
                ue = 7
                break e
              }
              var Ct = K(ze, Ee + 4)
              if (4294967286 < Ct) {
                ue = 3
                break e
              }
              var xt = (8 + Ct + 1) & -2
              if (((nt += xt), 0 < Ue && nt > Ue)) {
                ue = 3
                break e
              }
              if (!n(ze, Ee, 'VP8 ') || !n(ze, Ee, 'VP8L')) {
                ue = 0
                break e
              }
              if (At[0] < xt) {
                ue = 7
                break e
              }
              n(ze, Ee, 'ALPH') || ((Re[0] = ze), (Te[0] = Ee + 8), (We[0] = Ct)), (Ee += xt), (At -= xt)
            }
          }
          if (((m = m[0]), (pe.na = pe.na[0]), (pe.P = pe.P[0]), (pe.Sa = pe.Sa[0]), ue != 0)) break
        }
        ;(m = [m]), (pe.Ja = [pe.Ja]), (pe.xa = [pe.xa])
        e: if (
          ((Ue = a),
          (ue = u),
          (he = m),
          (Re = pe.gb[0]),
          (Te = pe.Ja),
          (We = pe.xa),
          (ze = ue[0]),
          (Ee = !n(Ue, ze, 'VP8 ')),
          (nt = !n(Ue, ze, 'VP8L')),
          t(Ue != null),
          t(he != null),
          t(Te != null),
          t(We != null),
          8 > he[0])
        )
          ue = 7
        else {
          if (Ee || nt) {
            if (((Ue = K(Ue, ze + 4)), 12 <= Re && Ue > Re - 12)) {
              ue = 3
              break e
            }
            if (ye && Ue > he[0] - 8) {
              ue = 7
              break e
            }
            ;(Te[0] = Ue), (ue[0] += 8), (he[0] -= 8), (We[0] = nt)
          } else (We[0] = 5 <= he[0] && Ue[ze + 0] == 47 && !(Ue[ze + 4] >> 5)), (Te[0] = he[0])
          ue = 0
        }
        if (((m = m[0]), (pe.Ja = pe.Ja[0]), (pe.xa = pe.xa[0]), (u = u[0]), ue != 0)) break
        if (4294967286 < pe.Ja) return 3
        if ((O == null || Ae || (O[0] = pe.xa ? 2 : 1), (F = [F]), (Oe = [Oe]), pe.xa)) {
          if (5 > m) {
            ue = 7
            break
          }
          ;(O = F),
            (ye = Oe),
            (Ae = T),
            a == null || 5 > m
              ? (a = 0)
              : 5 <= m && a[u + 0] == 47 && !(a[u + 4] >> 5)
                ? ((he = [0]),
                  (Ue = [0]),
                  (Re = [0]),
                  X((Te = new A()), a, u, m),
                  it(Te, he, Ue, Re) ? (O != null && (O[0] = he[0]), ye != null && (ye[0] = Ue[0]), Ae != null && (Ae[0] = Re[0]), (a = 1)) : (a = 0))
                : (a = 0)
        } else {
          if (10 > m) {
            ue = 7
            break
          }
          ;(O = Oe),
            a == null || 10 > m || !Xa(a, u + 3, m - 3)
              ? (a = 0)
              : ((ye = a[u + 0] | (a[u + 1] << 8) | (a[u + 2] << 16)),
                (Ae = 16383 & ((a[u + 7] << 8) | a[u + 6])),
                (a = 16383 & ((a[u + 9] << 8) | a[u + 8])),
                1 & ye || 3 < ((ye >> 1) & 7) || !((ye >> 4) & 1) || ye >> 5 >= pe.Ja || !Ae || !a
                  ? (a = 0)
                  : (F && (F[0] = Ae), O && (O[0] = a), (a = 1)))
        }
        if (!a || ((F = F[0]), (Oe = Oe[0]), be && (J[0] != F || ce[0] != Oe))) return 3
        M != null && ((M[0] = pe), (M.offset = u - M.w), t(4294967286 > u - M.w), t(M.offset == M.ha - m))
        break
      }
      return ue == 0 || (ue == 7 && be && M == null)
        ? (T != null && (T[0] |= pe.na != null && 0 < pe.na.length), y != null && (y[0] = F), j != null && (j[0] = Oe), 0)
        : ue
    }
    function na(a, u, m) {
      var y = u.width,
        j = u.height,
        T = 0,
        F = 0,
        O = y,
        M = j
      if (
        ((u.Da = a != null && 0 < a.Da),
        u.Da &&
          ((O = a.cd),
          (M = a.bd),
          (T = a.v),
          (F = a.j),
          11 > m || ((T &= -2), (F &= -2)),
          0 > T || 0 > F || 0 >= O || 0 >= M || T + O > y || F + M > j))
      )
        return 0
      if (((u.v = T), (u.j = F), (u.va = T + O), (u.o = F + M), (u.U = O), (u.T = M), (u.da = a != null && 0 < a.da), u.da)) {
        if (!ke(O, M, (m = [a.ib]), (T = [a.hb]))) return 0
        ;(u.ib = m[0]), (u.hb = T[0])
      }
      return (u.ob = a != null && a.ob), (u.Kb = a == null || !a.Sd), u.da && ((u.ob = u.ib < (3 * y) / 4 && u.hb < (3 * j) / 4), (u.Kb = 0)), 1
    }
    function ra(a) {
      if (a == null) return 2
      if (11 > a.S) {
        var u = a.f.RGBA
        ;(u.fb += (a.height - 1) * u.A), (u.A = -u.A)
      } else
        (u = a.f.kb),
          (a = a.height),
          (u.O += (a - 1) * u.fa),
          (u.fa = -u.fa),
          (u.N += ((a - 1) >> 1) * u.Ab),
          (u.Ab = -u.Ab),
          (u.W += ((a - 1) >> 1) * u.Db),
          (u.Db = -u.Db),
          u.F != null && ((u.J += (a - 1) * u.lb), (u.lb = -u.lb))
      return 0
    }
    function Xo(a, u, m, y) {
      if (y == null || 0 >= a || 0 >= u) return 2
      if (m != null) {
        if (m.Da) {
          var j = m.cd,
            T = m.bd,
            F = -2 & m.v,
            O = -2 & m.j
          if (0 > F || 0 > O || 0 >= j || 0 >= T || F + j > a || O + T > u) return 2
          ;(a = j), (u = T)
        }
        if (m.da) {
          if (!ke(a, u, (j = [m.ib]), (T = [m.hb]))) return 2
          ;(a = j[0]), (u = T[0])
        }
      }
      ;(y.width = a), (y.height = u)
      e: {
        var M = y.width,
          J = y.height
        if (((a = y.S), 0 >= M || 0 >= J || !(a >= vl && 13 > a))) a = 2
        else {
          if (0 >= y.Rd && y.sd == null) {
            F = T = j = u = 0
            var ce = (O = M * Rh[a]) * J
            if ((11 > a || ((T = ((J + 1) / 2) * (u = (M + 1) / 2)), a == 12 && (F = (j = M) * J)), (J = o(ce + 2 * T + F)) == null)) {
              a = 1
              break e
            }
            ;(y.sd = J),
              11 > a
                ? (((M = y.f.RGBA).eb = J), (M.fb = 0), (M.A = O), (M.size = ce))
                : (((M = y.f.kb).y = J),
                  (M.O = 0),
                  (M.fa = O),
                  (M.Fd = ce),
                  (M.f = J),
                  (M.N = 0 + ce),
                  (M.Ab = u),
                  (M.Cd = T),
                  (M.ea = J),
                  (M.W = 0 + ce + T),
                  (M.Db = u),
                  (M.Ed = T),
                  a == 12 && ((M.F = J), (M.J = 0 + ce + 2 * T)),
                  (M.Tc = F),
                  (M.lb = j))
          }
          if (((u = 1), (j = y.S), (T = y.width), (F = y.height), j >= vl && 13 > j))
            if (11 > j) (a = y.f.RGBA), (u &= (O = Math.abs(a.A)) * (F - 1) + T <= a.size), (u &= O >= T * Rh[j]), (u &= a.eb != null)
            else {
              ;(a = y.f.kb), (O = (T + 1) / 2), (ce = (F + 1) / 2), (M = Math.abs(a.fa)), (J = Math.abs(a.Ab))
              var be = Math.abs(a.Db),
                ye = Math.abs(a.lb),
                pe = ye * (F - 1) + T
              ;(u &= M * (F - 1) + T <= a.Fd),
                (u &= J * (ce - 1) + O <= a.Cd),
                (u = (u &= be * (ce - 1) + O <= a.Ed) & (M >= T) & (J >= O) & (be >= O)),
                (u &= a.y != null),
                (u &= a.f != null),
                (u &= a.ea != null),
                j == 12 && ((u &= ye >= T), (u &= pe <= a.Tc), (u &= a.F != null))
            }
          else u = 0
          a = u ? 0 : 2
        }
      }
      return a != 0 || (m != null && m.fd && (a = ra(y))), a
    }
    var Bn = 64,
      Qo = [
        0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607,
        16777215
      ],
      Zo = 24,
      es = 32,
      ia = 8,
      qn = [
        0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7
      ]
    we('Predictor0', 'PredictorAdd0'),
      (N.Predictor0 = function () {
        return 4278190080
      }),
      (N.Predictor1 = function (a) {
        return a
      }),
      (N.Predictor2 = function (a, u, m) {
        return u[m + 0]
      }),
      (N.Predictor3 = function (a, u, m) {
        return u[m + 1]
      }),
      (N.Predictor4 = function (a, u, m) {
        return u[m - 1]
      }),
      (N.Predictor5 = function (a, u, m) {
        return Pe(Pe(a, u[m + 1]), u[m + 0])
      }),
      (N.Predictor6 = function (a, u, m) {
        return Pe(a, u[m - 1])
      }),
      (N.Predictor7 = function (a, u, m) {
        return Pe(a, u[m + 0])
      }),
      (N.Predictor8 = function (a, u, m) {
        return Pe(u[m - 1], u[m + 0])
      }),
      (N.Predictor9 = function (a, u, m) {
        return Pe(u[m + 0], u[m + 1])
      }),
      (N.Predictor10 = function (a, u, m) {
        return Pe(Pe(a, u[m - 1]), Pe(u[m + 0], u[m + 1]))
      }),
      (N.Predictor11 = function (a, u, m) {
        var y = u[m + 0]
        return 0 >=
          Be((y >> 24) & 255, (a >> 24) & 255, ((u = u[m - 1]) >> 24) & 255) +
            Be((y >> 16) & 255, (a >> 16) & 255, (u >> 16) & 255) +
            Be((y >> 8) & 255, (a >> 8) & 255, (u >> 8) & 255) +
            Be(255 & y, 255 & a, 255 & u)
          ? y
          : a
      }),
      (N.Predictor12 = function (a, u, m) {
        var y = u[m + 0]
        return (
          ((Ie(((a >> 24) & 255) + ((y >> 24) & 255) - (((u = u[m - 1]) >> 24) & 255)) << 24) |
            (Ie(((a >> 16) & 255) + ((y >> 16) & 255) - ((u >> 16) & 255)) << 16) |
            (Ie(((a >> 8) & 255) + ((y >> 8) & 255) - ((u >> 8) & 255)) << 8) |
            Ie((255 & a) + (255 & y) - (255 & u))) >>>
          0
        )
      }),
      (N.Predictor13 = function (a, u, m) {
        var y = u[m - 1]
        return (
          ((Me(((a = Pe(a, u[m + 0])) >> 24) & 255, (y >> 24) & 255) << 24) |
            (Me((a >> 16) & 255, (y >> 16) & 255) << 16) |
            (Me((a >> 8) & 255, (y >> 8) & 255) << 8) |
            Me((a >> 0) & 255, (y >> 0) & 255)) >>>
          0
        )
      })
    var au = N.PredictorAdd0
    ;(N.PredictorAdd1 = $e),
      we('Predictor2', 'PredictorAdd2'),
      we('Predictor3', 'PredictorAdd3'),
      we('Predictor4', 'PredictorAdd4'),
      we('Predictor5', 'PredictorAdd5'),
      we('Predictor6', 'PredictorAdd6'),
      we('Predictor7', 'PredictorAdd7'),
      we('Predictor8', 'PredictorAdd8'),
      we('Predictor9', 'PredictorAdd9'),
      we('Predictor10', 'PredictorAdd10'),
      we('Predictor11', 'PredictorAdd11'),
      we('Predictor12', 'PredictorAdd12'),
      we('Predictor13', 'PredictorAdd13')
    var oa = N.PredictorAdd2
    ot(
      'ColorIndexInverseTransform',
      'MapARGB',
      '32b',
      function (a) {
        return (a >> 8) & 255
      },
      function (a) {
        return a
      }
    ),
      ot(
        'VP8LColorIndexInverseTransformAlpha',
        'MapAlpha',
        '8b',
        function (a) {
          return a
        },
        function (a) {
          return (a >> 8) & 255
        }
      )
    var pl,
      xr = N.ColorIndexInverseTransform,
      sa = N.MapARGB,
      lu = N.VP8LColorIndexInverseTransformAlpha,
      cu = N.MapAlpha,
      Pi = (N.VP8LPredictorsAdd = [])
    ;(Pi.length = 16), ((N.VP8LPredictors = []).length = 16), ((N.VP8LPredictorsAdd_C = []).length = 16), ((N.VP8LPredictors_C = []).length = 16)
    var nr,
      Sr,
      Ci,
      Hr,
      li,
      ts,
      kr,
      ns,
      aa,
      ji,
      Ar,
      ci,
      mo,
      rs,
      vo,
      Ii,
      la,
      rr,
      ui,
      Mt,
      Dt,
      Qt,
      fn,
      fi,
      Ei,
      is,
      gl,
      bh,
      yh = o(511),
      wh = o(2041),
      _h = o(225),
      xh = o(767),
      Sh = 0,
      uu = wh,
      ml = _h,
      Xn = xh,
      ir = yh,
      vl = 0,
      bl = 1,
      kh = 2,
      yl = 3,
      wl = 4,
      fu = 5,
      Ah = 6,
      hu = 7,
      du = 8,
      _l = 9,
      pu = 10,
      U0 = [2, 3, 7],
      H0 = [3, 3, 11],
      Lh = [280, 256, 256, 256, 40],
      $0 = [0, 1, 1, 1, 0],
      V0 = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      W0 = [
        24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75,
        52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62,
        120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110,
        48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112
      ],
      G0 = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
      K0 = 8,
      gu = [
        4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33,
        34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
        68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108,
        110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157
      ],
      mu = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94,
        96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170,
        173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284
      ],
      ca = null,
      J0 = [
        [173, 148, 140, 0],
        [176, 155, 140, 135, 0],
        [180, 157, 141, 134, 130, 0],
        [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
      ],
      Y0 = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
      Nh = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
      X0 = [
        [
          [
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
            [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
            [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
          ],
          [
            [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
            [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
            [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
          ],
          [
            [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
            [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
            [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
          ],
          [
            [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
            [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
            [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
          ],
          [
            [1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
            [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
            [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
          ],
          [
            [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
            [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
            [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
          ],
          [
            [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
          ]
        ],
        [
          [
            [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
            [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
            [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
          ],
          [
            [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
            [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
            [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
          ],
          [
            [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
            [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
            [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
          ],
          [
            [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
            [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
            [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
          ],
          [
            [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
            [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
            [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
          ],
          [
            [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
            [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
            [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
          ],
          [
            [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
            [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
            [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
          ],
          [
            [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
            [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
            [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
          ]
        ],
        [
          [
            [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
            [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
            [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
          ],
          [
            [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
            [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
            [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
          ],
          [
            [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
            [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
            [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
          ],
          [
            [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
            [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
            [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
          ],
          [
            [1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
            [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
            [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
            [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
            [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
          ]
        ],
        [
          [
            [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
            [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
            [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
          ],
          [
            [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
            [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
            [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
          ],
          [
            [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
            [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
            [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
          ],
          [
            [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
            [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
            [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
          ],
          [
            [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
            [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
            [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
          ],
          [
            [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
            [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
            [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
          ],
          [
            [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
            [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
            [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
          ],
          [
            [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ]
        ]
      ],
      Q0 = [
        [
          [231, 120, 48, 89, 115, 113, 120, 152, 112],
          [152, 179, 64, 126, 170, 118, 46, 70, 95],
          [175, 69, 143, 80, 85, 82, 72, 155, 103],
          [56, 58, 10, 171, 218, 189, 17, 13, 152],
          [114, 26, 17, 163, 44, 195, 21, 10, 173],
          [121, 24, 80, 195, 26, 62, 44, 64, 85],
          [144, 71, 10, 38, 171, 213, 144, 34, 26],
          [170, 46, 55, 19, 136, 160, 33, 206, 71],
          [63, 20, 8, 114, 114, 208, 12, 9, 226],
          [81, 40, 11, 96, 182, 84, 29, 16, 36]
        ],
        [
          [134, 183, 89, 137, 98, 101, 106, 165, 148],
          [72, 187, 100, 130, 157, 111, 32, 75, 80],
          [66, 102, 167, 99, 74, 62, 40, 234, 128],
          [41, 53, 9, 178, 241, 141, 26, 8, 107],
          [74, 43, 26, 146, 73, 166, 49, 23, 157],
          [65, 38, 105, 160, 51, 52, 31, 115, 128],
          [104, 79, 12, 27, 217, 255, 87, 17, 7],
          [87, 68, 71, 44, 114, 51, 15, 186, 23],
          [47, 41, 14, 110, 182, 183, 21, 17, 194],
          [66, 45, 25, 102, 197, 189, 23, 18, 22]
        ],
        [
          [88, 88, 147, 150, 42, 46, 45, 196, 205],
          [43, 97, 183, 117, 85, 38, 35, 179, 61],
          [39, 53, 200, 87, 26, 21, 43, 232, 171],
          [56, 34, 51, 104, 114, 102, 29, 93, 77],
          [39, 28, 85, 171, 58, 165, 90, 98, 64],
          [34, 22, 116, 206, 23, 34, 43, 166, 73],
          [107, 54, 32, 26, 51, 1, 81, 43, 31],
          [68, 25, 106, 22, 64, 171, 36, 225, 114],
          [34, 19, 21, 102, 132, 188, 16, 76, 124],
          [62, 18, 78, 95, 85, 57, 50, 48, 51]
        ],
        [
          [193, 101, 35, 159, 215, 111, 89, 46, 111],
          [60, 148, 31, 172, 219, 228, 21, 18, 111],
          [112, 113, 77, 85, 179, 255, 38, 120, 114],
          [40, 42, 1, 196, 245, 209, 10, 25, 109],
          [88, 43, 29, 140, 166, 213, 37, 43, 154],
          [61, 63, 30, 155, 67, 45, 68, 1, 209],
          [100, 80, 8, 43, 154, 1, 51, 26, 71],
          [142, 78, 78, 16, 255, 128, 34, 197, 171],
          [41, 40, 5, 102, 211, 183, 4, 1, 221],
          [51, 50, 17, 168, 209, 192, 23, 25, 82]
        ],
        [
          [138, 31, 36, 171, 27, 166, 38, 44, 229],
          [67, 87, 58, 169, 82, 115, 26, 59, 179],
          [63, 59, 90, 180, 59, 166, 93, 73, 154],
          [40, 40, 21, 116, 143, 209, 34, 39, 175],
          [47, 15, 16, 183, 34, 223, 49, 45, 183],
          [46, 17, 33, 183, 6, 98, 15, 32, 183],
          [57, 46, 22, 24, 128, 1, 54, 17, 37],
          [65, 32, 73, 115, 28, 128, 23, 128, 205],
          [40, 3, 9, 115, 51, 192, 18, 6, 223],
          [87, 37, 9, 115, 59, 77, 64, 21, 47]
        ],
        [
          [104, 55, 44, 218, 9, 54, 53, 130, 226],
          [64, 90, 70, 205, 40, 41, 23, 26, 57],
          [54, 57, 112, 184, 5, 41, 38, 166, 213],
          [30, 34, 26, 133, 152, 116, 10, 32, 134],
          [39, 19, 53, 221, 26, 114, 32, 73, 255],
          [31, 9, 65, 234, 2, 15, 1, 118, 73],
          [75, 32, 12, 51, 192, 255, 160, 43, 51],
          [88, 31, 35, 67, 102, 85, 55, 186, 85],
          [56, 21, 23, 111, 59, 205, 45, 37, 192],
          [55, 38, 70, 124, 73, 102, 1, 34, 98]
        ],
        [
          [125, 98, 42, 88, 104, 85, 117, 175, 82],
          [95, 84, 53, 89, 128, 100, 113, 101, 45],
          [75, 79, 123, 47, 51, 128, 81, 171, 1],
          [57, 17, 5, 71, 102, 57, 53, 41, 49],
          [38, 33, 13, 121, 57, 73, 26, 1, 85],
          [41, 10, 67, 138, 77, 110, 90, 47, 114],
          [115, 21, 2, 10, 102, 255, 166, 23, 6],
          [101, 29, 16, 10, 85, 128, 101, 196, 26],
          [57, 18, 10, 102, 102, 213, 34, 20, 43],
          [117, 20, 15, 36, 163, 128, 68, 1, 26]
        ],
        [
          [102, 61, 71, 37, 34, 53, 31, 243, 192],
          [69, 60, 71, 38, 73, 119, 28, 222, 37],
          [68, 45, 128, 34, 1, 47, 11, 245, 171],
          [62, 17, 19, 70, 146, 85, 55, 62, 70],
          [37, 43, 37, 154, 100, 163, 85, 160, 1],
          [63, 9, 92, 136, 28, 64, 32, 201, 85],
          [75, 15, 9, 9, 64, 255, 184, 119, 16],
          [86, 6, 28, 5, 64, 255, 25, 248, 1],
          [56, 8, 17, 132, 137, 255, 55, 116, 128],
          [58, 15, 20, 82, 135, 57, 26, 121, 40]
        ],
        [
          [164, 50, 31, 137, 154, 133, 25, 35, 218],
          [51, 103, 44, 131, 131, 123, 31, 6, 158],
          [86, 40, 64, 135, 148, 224, 45, 183, 128],
          [22, 26, 17, 131, 240, 154, 14, 1, 209],
          [45, 16, 21, 91, 64, 222, 7, 1, 197],
          [56, 21, 39, 155, 60, 138, 23, 102, 213],
          [83, 12, 13, 54, 192, 255, 68, 47, 28],
          [85, 26, 85, 85, 128, 128, 32, 146, 171],
          [18, 11, 7, 63, 144, 171, 4, 4, 246],
          [35, 27, 10, 146, 174, 171, 12, 26, 128]
        ],
        [
          [190, 80, 35, 99, 180, 80, 126, 54, 45],
          [85, 126, 47, 87, 176, 51, 41, 20, 32],
          [101, 75, 128, 139, 118, 146, 116, 128, 85],
          [56, 41, 15, 176, 236, 85, 37, 9, 62],
          [71, 30, 17, 119, 118, 255, 17, 18, 138],
          [101, 38, 60, 138, 55, 70, 43, 26, 142],
          [146, 36, 19, 30, 171, 255, 97, 27, 20],
          [138, 45, 61, 62, 219, 1, 81, 188, 64],
          [32, 41, 20, 117, 151, 142, 20, 21, 163],
          [112, 19, 12, 61, 195, 128, 48, 4, 24]
        ]
      ],
      Z0 = [
        [
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
            [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ],
        [
          [
            [217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
            [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
          ],
          [
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ],
        [
          [
            [186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
            [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
            [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ],
        [
          [
            [248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
            [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ]
      ],
      e2 = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
      Ti = [],
      Lr = [],
      hi = [],
      t2 = 1,
      Ph = 2,
      Fi = [],
      or = []
    Ce('UpsampleRgbLinePair', yt, 3),
      Ce('UpsampleBgrLinePair', Ut, 3),
      Ce('UpsampleRgbaLinePair', _r, 4),
      Ce('UpsampleBgraLinePair', pn, 4),
      Ce('UpsampleArgbLinePair', Sn, 4),
      Ce('UpsampleRgba4444LinePair', rn, 2),
      Ce('UpsampleRgb565LinePair', Wt, 2)
    var n2 = N.UpsampleRgbLinePair,
      r2 = N.UpsampleBgrLinePair,
      Ch = N.UpsampleRgbaLinePair,
      jh = N.UpsampleBgraLinePair,
      Ih = N.UpsampleArgbLinePair,
      Eh = N.UpsampleRgba4444LinePair,
      i2 = N.UpsampleRgb565LinePair,
      xl = 16,
      Sl = 1 << (xl - 1),
      ua = -227,
      vu = 482,
      Th = 6,
      o2 = (256 << Th) - 1,
      Fh = 0,
      s2 = o(256),
      a2 = o(256),
      l2 = o(256),
      c2 = o(256),
      u2 = o(vu - ua),
      f2 = o(vu - ua)
    ai('YuvToRgbRow', yt, 3),
      ai('YuvToBgrRow', Ut, 3),
      ai('YuvToRgbaRow', _r, 4),
      ai('YuvToBgraRow', pn, 4),
      ai('YuvToArgbRow', Sn, 4),
      ai('YuvToRgba4444Row', rn, 2),
      ai('YuvToRgb565Row', Wt, 2)
    var Oh = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396],
      kl = [0, 2, 8],
      h2 = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
      d2 = 1
    this.WebPDecodeRGBA = function (a, u, m, y, j) {
      var T = bl,
        F = new Ko(),
        O = new pr()
      ;(F.ba = O), (O.S = T), (O.width = [O.width]), (O.height = [O.height])
      var M = O.width,
        J = O.height,
        ce = new ri()
      if (ce == null || a == null) var be = 2
      else t(ce != null), (be = Yo(a, u, m, ce.width, ce.height, ce.Pd, ce.Qd, ce.format, null))
      if ((be != 0 ? (M = 0) : (M != null && (M[0] = ce.width[0]), J != null && (J[0] = ce.height[0]), (M = 1)), M)) {
        ;(O.width = O.width[0]), (O.height = O.height[0]), y != null && (y[0] = O.width), j != null && (j[0] = O.height)
        e: {
          if (
            ((y = new zo()),
            ((j = new Ys()).data = a),
            (j.w = u),
            (j.ha = m),
            (j.kd = 1),
            (u = [0]),
            t(j != null),
            ((a = Yo(j.data, j.w, j.ha, null, null, null, u, null, j)) == 0 || a == 7) && u[0] && (a = 4),
            (u = a) == 0)
          ) {
            if (
              (t(F != null),
              (y.data = j.data),
              (y.w = j.w + j.offset),
              (y.ha = j.ha - j.offset),
              (y.put = Mr),
              (y.ac = bn),
              (y.bc = Dr),
              (y.ma = F),
              j.xa)
            ) {
              if ((a = tr()) == null) {
                F = 1
                break e
              }
              if (
                (function (ye, pe) {
                  var Oe = [0],
                    Ae = [0],
                    ue = [0]
                  t: for (;;) {
                    if (ye == null) return 0
                    if (pe == null) return (ye.a = 2), 0
                    if (((ye.l = pe), (ye.a = 0), X(ye.m, pe.data, pe.w, pe.ha), !it(ye.m, Oe, Ae, ue))) {
                      ye.a = 3
                      break t
                    }
                    if (((ye.xb = Ph), (pe.width = Oe[0]), (pe.height = Ae[0]), !zr(Oe[0], Ae[0], 1, ye, null))) break t
                    return 1
                  }
                  return t(ye.a != 0), 0
                })(a, y)
              ) {
                if ((y = (u = Xo(y.width, y.height, F.Oa, F.ba)) == 0)) {
                  t: {
                    y = a
                    n: for (;;) {
                      if (y == null) {
                        y = 0
                        break t
                      }
                      if ((t(y.s.yc != null), t(y.s.Ya != null), t(0 < y.s.Wb), t((m = y.l) != null), t((j = m.ma) != null), y.xb != 0)) {
                        if (((y.ca = j.ba), (y.tb = j.tb), t(y.ca != null), !na(j.Oa, m, yl))) {
                          y.a = 2
                          break n
                        }
                        if (!uo(y, m.width) || m.da) break n
                        if (
                          ((m.da || Nt(y.ca.S)) && me(),
                          11 > y.ca.S || (alert('todo:WebPInitConvertARGBToYUV'), y.ca.f.kb.F != null && me()),
                          y.Pb && 0 < y.s.ua && y.s.vb.X == null && !ae(y.s.vb, y.s.Wa.Xa))
                        ) {
                          y.a = 1
                          break n
                        }
                        y.xb = 0
                      }
                      if (!br(y, y.V, y.Ba, y.c, y.i, m.o, Oo)) break n
                      ;(j.Dc = y.Ma), (y = 1)
                      break t
                    }
                    t(y.a != 0), (y = 0)
                  }
                  y = !y
                }
                y && (u = a.a)
              } else u = a.a
            } else {
              if ((a = new Uc()) == null) {
                F = 1
                break e
              }
              if (((a.Fa = j.na), (a.P = j.P), (a.qc = j.Sa), Qa(a, y))) {
                if ((u = Xo(y.width, y.height, F.Oa, F.ba)) == 0) {
                  if (((a.Aa = 0), (m = F.Oa), t((j = a) != null), m != null)) {
                    if (0 < (M = 0 > (M = m.Md) ? 0 : 100 < M ? 255 : (255 * M) / 100)) {
                      for (J = ce = 0; 4 > J; ++J) 12 > (be = j.pb[J]).lc && (be.ia = (M * h2[0 > be.lc ? 0 : be.lc]) >> 3), (ce |= be.ia)
                      ce && (alert('todo:VP8InitRandom'), (j.ia = 1))
                    }
                    ;(j.Ga = m.Id), 100 < j.Ga ? (j.Ga = 100) : 0 > j.Ga && (j.Ga = 0)
                  }
                  Hc(a, y) || (u = a.a)
                }
              } else u = a.a
            }
            u == 0 && F.Oa != null && F.Oa.fd && (u = ra(F.ba))
          }
          F = u
        }
        T = F != 0 ? null : 11 > T ? O.f.RGBA.eb : O.f.kb.y
      } else T = null
      return T
    }
    var Rh = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1]
  }
  function f(N, V) {
    for (var Q = '', P = 0; P < 4; P++) Q += String.fromCharCode(N[V++])
    return Q
  }
  function h(N, V) {
    return ((N[V + 0] << 0) | (N[V + 1] << 8) | (N[V + 2] << 16)) >>> 0
  }
  function g(N, V) {
    return ((N[V + 0] << 0) | (N[V + 1] << 8) | (N[V + 2] << 16) | (N[V + 3] << 24)) >>> 0
  }
  new c()
  var v = [0],
    p = [0],
    b = [],
    w = new c(),
    L = e,
    _ = (function (N, V) {
      var Q = {},
        P = 0,
        S = !1,
        z = 0,
        $ = 0
      if (
        ((Q.frames = []),
        !(function (B, G, ee, re) {
          for (var Y = 0; Y < re; Y++) if (B[G + Y] != ee.charCodeAt(Y)) return !0
          return !1
        })(N, V, 'RIFF', 4))
      ) {
        var de, W
        for (g(N, (V += 4)), V += 8; V < N.length; ) {
          var H = f(N, V),
            X = g(N, (V += 4))
          V += 4
          var ne = X + (1 & X)
          switch (H) {
            case 'VP8 ':
            case 'VP8L':
              Q.frames[P] === void 0 && (Q.frames[P] = {}),
                ((A = Q.frames[P]).src_off = S ? $ : V - 8),
                (A.src_size = z + X + 8),
                P++,
                S && ((S = !1), (z = 0), ($ = 0))
              break
            case 'VP8X':
              ;(A = Q.header = {}).feature_flags = N[V]
              var fe = V + 4
              ;(A.canvas_width = 1 + h(N, fe)), (fe += 3), (A.canvas_height = 1 + h(N, fe)), (fe += 3)
              break
            case 'ALPH':
              ;(S = !0), (z = ne + 8), ($ = V - 8)
              break
            case 'ANIM':
              ;((A = Q.header).bgcolor = g(N, V)), (fe = V + 4), (A.loop_count = ((de = N)[(W = fe) + 0] << 0) | (de[W + 1] << 8)), (fe += 2)
              break
            case 'ANMF':
              var xe, A
              ;((A = Q.frames[P] = {}).offset_x = 2 * h(N, V)),
                (V += 3),
                (A.offset_y = 2 * h(N, V)),
                (V += 3),
                (A.width = 1 + h(N, V)),
                (V += 3),
                (A.height = 1 + h(N, V)),
                (V += 3),
                (A.duration = h(N, V)),
                (V += 3),
                (xe = N[V++]),
                (A.dispose = 1 & xe),
                (A.blend = (xe >> 1) & 1)
          }
          H != 'ANMF' && (V += ne)
        }
        return Q
      }
    })(L, 0)
  ;(_.response = L), (_.rgbaoutput = !0), (_.dataurl = !1)
  var x = _.header ? _.header : null,
    k = _.frames ? _.frames : null
  if (x) {
    ;(x.loop_counter = x.loop_count), (v = [x.canvas_height]), (p = [x.canvas_width])
    for (var C = 0; C < k.length && k[C].blend != 0; C++);
  }
  var D = k[0],
    U = w.WebPDecodeRGBA(L, D.src_off, D.src_size, p, v)
  ;(D.rgba = U), (D.imgwidth = p[0]), (D.imgheight = v[0])
  for (var E = 0; E < p[0] * v[0] * 4; E++) b[E] = U[E]
  return (this.width = p), (this.height = v), (this.data = b), this
}
;(function (e) {
  var t = function () {
      return typeof Pf == 'function'
    },
    n = function (v, p, b, w) {
      var L = 4,
        _ = s
      switch (w) {
        case e.image_compression.FAST:
          ;(L = 1), (_ = o)
          break
        case e.image_compression.MEDIUM:
          ;(L = 6), (_ = l)
          break
        case e.image_compression.SLOW:
          ;(L = 9), (_ = c)
      }
      v = r(v, p, b, _)
      var x = Pf(v, { level: L })
      return e.__addimage__.arrayBufferToBinaryString(x)
    },
    r = function (v, p, b, w) {
      for (var L, _, x, k = v.length / p, C = new Uint8Array(v.length + k), D = h(), U = 0; U < k; U += 1) {
        if (((x = U * p), (L = v.subarray(x, x + p)), w)) C.set(w(L, b, _), x + U)
        else {
          for (var E, N = D.length, V = []; E < N; E += 1) V[E] = D[E](L, b, _)
          var Q = g(V.concat())
          C.set(V[Q], x + U)
        }
        _ = L
      }
      return C
    },
    i = function (v) {
      var p = Array.apply([], v)
      return p.unshift(0), p
    },
    o = function (v, p) {
      var b,
        w = [],
        L = v.length
      w[0] = 1
      for (var _ = 0; _ < L; _ += 1) (b = v[_ - p] || 0), (w[_ + 1] = (v[_] - b + 256) & 255)
      return w
    },
    s = function (v, p, b) {
      var w,
        L = [],
        _ = v.length
      L[0] = 2
      for (var x = 0; x < _; x += 1) (w = (b && b[x]) || 0), (L[x + 1] = (v[x] - w + 256) & 255)
      return L
    },
    l = function (v, p, b) {
      var w,
        L,
        _ = [],
        x = v.length
      _[0] = 3
      for (var k = 0; k < x; k += 1) (w = v[k - p] || 0), (L = (b && b[k]) || 0), (_[k + 1] = (v[k] + 256 - ((w + L) >>> 1)) & 255)
      return _
    },
    c = function (v, p, b) {
      var w,
        L,
        _,
        x,
        k = [],
        C = v.length
      k[0] = 4
      for (var D = 0; D < C; D += 1)
        (w = v[D - p] || 0), (L = (b && b[D]) || 0), (_ = (b && b[D - p]) || 0), (x = f(w, L, _)), (k[D + 1] = (v[D] - x + 256) & 255)
      return k
    },
    f = function (v, p, b) {
      if (v === p && p === b) return v
      var w = Math.abs(p - b),
        L = Math.abs(v - b),
        _ = Math.abs(v + p - b - b)
      return w <= L && w <= _ ? v : L <= _ ? p : b
    },
    h = function () {
      return [i, o, s, l, c]
    },
    g = function (v) {
      var p = v.map(function (b) {
        return b.reduce(function (w, L) {
          return w + Math.abs(L)
        }, 0)
      })
      return p.indexOf(Math.min.apply(null, p))
    }
  e.processPNG = function (v, p, b, w) {
    var L,
      _,
      x,
      k,
      C,
      D,
      U,
      E,
      N,
      V,
      Q,
      P,
      S,
      z,
      $,
      de = this.decode.FLATE_DECODE,
      W = ''
    if ((this.__addimage__.isArrayBuffer(v) && (v = new Uint8Array(v)), this.__addimage__.isArrayBufferView(v))) {
      if (((v = (x = new H4(v)).imgData), (_ = x.bits), (L = x.colorSpace), (C = x.colors), [4, 6].indexOf(x.colorType) !== -1)) {
        if (x.bits === 8) {
          ;(N = (E =
            x.pixelBitlength == 32
              ? new Uint32Array(x.decodePixels().buffer)
              : x.pixelBitlength == 16
                ? new Uint16Array(x.decodePixels().buffer)
                : new Uint8Array(x.decodePixels().buffer)).length),
            (Q = new Uint8Array(N * x.colors)),
            (V = new Uint8Array(N))
          var H,
            X = x.pixelBitlength - x.bits
          for (z = 0, $ = 0; z < N; z++) {
            for (S = E[z], H = 0; H < X; ) (Q[$++] = (S >>> H) & 255), (H += x.bits)
            V[z] = (S >>> H) & 255
          }
        }
        if (x.bits === 16) {
          ;(N = (E = new Uint32Array(x.decodePixels().buffer)).length),
            (Q = new Uint8Array(N * (32 / x.pixelBitlength) * x.colors)),
            (V = new Uint8Array(N * (32 / x.pixelBitlength))),
            (P = x.colors > 1),
            (z = 0),
            ($ = 0)
          for (var ne = 0; z < N; )
            (S = E[z++]),
              (Q[$++] = (S >>> 0) & 255),
              P && ((Q[$++] = (S >>> 16) & 255), (S = E[z++]), (Q[$++] = (S >>> 0) & 255)),
              (V[ne++] = (S >>> 16) & 255)
          _ = 8
        }
        w !== e.image_compression.NONE && t()
          ? ((v = n(Q, x.width * x.colors, x.colors, w)), (U = n(V, x.width, 1, w)))
          : ((v = Q), (U = V), (de = void 0))
      }
      if (x.colorType === 3 && ((L = this.color_spaces.INDEXED), (D = x.palette), x.transparency.indexed)) {
        var fe = x.transparency.indexed,
          xe = 0
        for (z = 0, N = fe.length; z < N; ++z) xe += fe[z]
        if ((xe /= 255) === N - 1 && fe.indexOf(0) !== -1) k = [fe.indexOf(0)]
        else if (xe !== N) {
          for (E = x.decodePixels(), V = new Uint8Array(E.length), z = 0, N = E.length; z < N; z++) V[z] = fe[E[z]]
          U = n(V, x.width, 1)
        }
      }
      var A = (function (B) {
        var G
        switch (B) {
          case e.image_compression.FAST:
            G = 11
            break
          case e.image_compression.MEDIUM:
            G = 13
            break
          case e.image_compression.SLOW:
            G = 14
            break
          default:
            G = 12
        }
        return G
      })(w)
      return (
        de === this.decode.FLATE_DECODE && (W = '/Predictor ' + A + ' '),
        (W += '/Colors ' + C + ' /BitsPerComponent ' + _ + ' /Columns ' + x.width),
        (this.__addimage__.isArrayBuffer(v) || this.__addimage__.isArrayBufferView(v)) && (v = this.__addimage__.arrayBufferToBinaryString(v)),
        ((U && this.__addimage__.isArrayBuffer(U)) || this.__addimage__.isArrayBufferView(U)) && (U = this.__addimage__.arrayBufferToBinaryString(U)),
        {
          alias: b,
          data: v,
          index: p,
          filter: de,
          decodeParameters: W,
          transparency: k,
          palette: D,
          sMask: U,
          predictor: A,
          width: x.width,
          height: x.height,
          bitsPerComponent: _,
          colorSpace: L
        }
      )
    }
  }
})(rt.API),
  (function (e) {
    ;(e.processGIF89A = function (t, n, r, i) {
      var o = new $4(t),
        s = o.width,
        l = o.height,
        c = []
      o.decodeAndBlitFrameRGBA(0, c)
      var f = { data: c, width: s, height: l },
        h = new Qu(100).encode(f, 100)
      return e.processJPEG.call(this, h, n, r, i)
    }),
      (e.processGIF87A = e.processGIF89A)
  })(rt.API),
  (Cr.prototype.parseHeader = function () {
    if (
      ((this.fileSize = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.reserved = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.offset = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.headerSize = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.width = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.height = this.datav.getInt32(this.pos, !0)),
      (this.pos += 4),
      (this.planes = this.datav.getUint16(this.pos, !0)),
      (this.pos += 2),
      (this.bitPP = this.datav.getUint16(this.pos, !0)),
      (this.pos += 2),
      (this.compress = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.rawSize = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.hr = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.vr = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.colors = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.importantColors = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15),
      this.bitPP < 15)
    ) {
      var e = this.colors === 0 ? 1 << this.bitPP : this.colors
      this.palette = new Array(e)
      for (var t = 0; t < e; t++) {
        var n = this.datav.getUint8(this.pos++, !0),
          r = this.datav.getUint8(this.pos++, !0),
          i = this.datav.getUint8(this.pos++, !0),
          o = this.datav.getUint8(this.pos++, !0)
        this.palette[t] = { red: i, green: r, blue: n, quad: o }
      }
    }
    this.height < 0 && ((this.height *= -1), (this.bottom_up = !1))
  }),
  (Cr.prototype.parseBGR = function () {
    this.pos = this.offset
    try {
      var e = 'bit' + this.bitPP,
        t = this.width * this.height * 4
      ;(this.data = new Uint8Array(t)), this[e]()
    } catch (n) {
      Ot.log('bit decode error:' + n)
    }
  }),
  (Cr.prototype.bit1 = function () {
    var e,
      t = Math.ceil(this.width / 8),
      n = t % 4
    for (e = this.height - 1; e >= 0; e--) {
      for (var r = this.bottom_up ? e : this.height - 1 - e, i = 0; i < t; i++)
        for (var o = this.datav.getUint8(this.pos++, !0), s = r * this.width * 4 + 8 * i * 4, l = 0; l < 8 && 8 * i + l < this.width; l++) {
          var c = this.palette[(o >> (7 - l)) & 1]
          ;(this.data[s + 4 * l] = c.blue), (this.data[s + 4 * l + 1] = c.green), (this.data[s + 4 * l + 2] = c.red), (this.data[s + 4 * l + 3] = 255)
        }
      n !== 0 && (this.pos += 4 - n)
    }
  }),
  (Cr.prototype.bit4 = function () {
    for (var e = Math.ceil(this.width / 2), t = e % 4, n = this.height - 1; n >= 0; n--) {
      for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < e; i++) {
        var o = this.datav.getUint8(this.pos++, !0),
          s = r * this.width * 4 + 2 * i * 4,
          l = o >> 4,
          c = 15 & o,
          f = this.palette[l]
        if (((this.data[s] = f.blue), (this.data[s + 1] = f.green), (this.data[s + 2] = f.red), (this.data[s + 3] = 255), 2 * i + 1 >= this.width))
          break
        ;(f = this.palette[c]),
          (this.data[s + 4] = f.blue),
          (this.data[s + 4 + 1] = f.green),
          (this.data[s + 4 + 2] = f.red),
          (this.data[s + 4 + 3] = 255)
      }
      t !== 0 && (this.pos += 4 - t)
    }
  }),
  (Cr.prototype.bit8 = function () {
    for (var e = this.width % 4, t = this.height - 1; t >= 0; t--) {
      for (var n = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
        var i = this.datav.getUint8(this.pos++, !0),
          o = n * this.width * 4 + 4 * r
        if (i < this.palette.length) {
          var s = this.palette[i]
          ;(this.data[o] = s.red), (this.data[o + 1] = s.green), (this.data[o + 2] = s.blue), (this.data[o + 3] = 255)
        } else (this.data[o] = 255), (this.data[o + 1] = 255), (this.data[o + 2] = 255), (this.data[o + 3] = 255)
      }
      e !== 0 && (this.pos += 4 - e)
    }
  }),
  (Cr.prototype.bit15 = function () {
    for (var e = this.width % 3, t = parseInt('11111', 2), n = this.height - 1; n >= 0; n--) {
      for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < this.width; i++) {
        var o = this.datav.getUint16(this.pos, !0)
        this.pos += 2
        var s = (((o & t) / t) * 255) | 0,
          l = ((((o >> 5) & t) / t) * 255) | 0,
          c = ((((o >> 10) & t) / t) * 255) | 0,
          f = o >> 15 ? 255 : 0,
          h = r * this.width * 4 + 4 * i
        ;(this.data[h] = c), (this.data[h + 1] = l), (this.data[h + 2] = s), (this.data[h + 3] = f)
      }
      this.pos += e
    }
  }),
  (Cr.prototype.bit16 = function () {
    for (var e = this.width % 3, t = parseInt('11111', 2), n = parseInt('111111', 2), r = this.height - 1; r >= 0; r--) {
      for (var i = this.bottom_up ? r : this.height - 1 - r, o = 0; o < this.width; o++) {
        var s = this.datav.getUint16(this.pos, !0)
        this.pos += 2
        var l = (((s & t) / t) * 255) | 0,
          c = ((((s >> 5) & n) / n) * 255) | 0,
          f = (((s >> 11) / t) * 255) | 0,
          h = i * this.width * 4 + 4 * o
        ;(this.data[h] = f), (this.data[h + 1] = c), (this.data[h + 2] = l), (this.data[h + 3] = 255)
      }
      this.pos += e
    }
  }),
  (Cr.prototype.bit24 = function () {
    for (var e = this.height - 1; e >= 0; e--) {
      for (var t = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
        var r = this.datav.getUint8(this.pos++, !0),
          i = this.datav.getUint8(this.pos++, !0),
          o = this.datav.getUint8(this.pos++, !0),
          s = t * this.width * 4 + 4 * n
        ;(this.data[s] = o), (this.data[s + 1] = i), (this.data[s + 2] = r), (this.data[s + 3] = 255)
      }
      this.pos += this.width % 4
    }
  }),
  (Cr.prototype.bit32 = function () {
    for (var e = this.height - 1; e >= 0; e--)
      for (var t = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
        var r = this.datav.getUint8(this.pos++, !0),
          i = this.datav.getUint8(this.pos++, !0),
          o = this.datav.getUint8(this.pos++, !0),
          s = this.datav.getUint8(this.pos++, !0),
          l = t * this.width * 4 + 4 * n
        ;(this.data[l] = o), (this.data[l + 1] = i), (this.data[l + 2] = r), (this.data[l + 3] = s)
      }
  }),
  (Cr.prototype.getData = function () {
    return this.data
  }),
  (function (e) {
    e.processBMP = function (t, n, r, i) {
      var o = new Cr(t, !1),
        s = o.width,
        l = o.height,
        c = { data: o.getData(), width: s, height: l },
        f = new Qu(100).encode(c, 100)
      return e.processJPEG.call(this, f, n, r, i)
    }
  })(rt.API),
  (Ip.prototype.getData = function () {
    return this.data
  }),
  (function (e) {
    e.processWEBP = function (t, n, r, i) {
      var o = new Ip(t),
        s = o.width,
        l = o.height,
        c = { data: o.getData(), width: s, height: l },
        f = new Qu(100).encode(c, 100)
      return e.processJPEG.call(this, f, n, r, i)
    }
  })(rt.API),
  (rt.API.processRGBA = function (e, t, n) {
    for (var r = e.data, i = r.length, o = new Uint8Array((i / 4) * 3), s = new Uint8Array(i / 4), l = 0, c = 0, f = 0; f < i; f += 4) {
      var h = r[f],
        g = r[f + 1],
        v = r[f + 2],
        p = r[f + 3]
      ;(o[l++] = h), (o[l++] = g), (o[l++] = v), (s[c++] = p)
    }
    var b = this.__addimage__.arrayBufferToBinaryString(o)
    return {
      alpha: this.__addimage__.arrayBufferToBinaryString(s),
      data: b,
      index: t,
      alias: n,
      colorSpace: 'DeviceRGB',
      bitsPerComponent: 8,
      width: e.width,
      height: e.height
    }
  }),
  (rt.API.setLanguage = function (e) {
    return (
      this.internal.languageSettings === void 0 && ((this.internal.languageSettings = {}), (this.internal.languageSettings.isSubscribed = !1)),
      {
        af: 'Afrikaans',
        sq: 'Albanian',
        ar: 'Arabic (Standard)',
        'ar-DZ': 'Arabic (Algeria)',
        'ar-BH': 'Arabic (Bahrain)',
        'ar-EG': 'Arabic (Egypt)',
        'ar-IQ': 'Arabic (Iraq)',
        'ar-JO': 'Arabic (Jordan)',
        'ar-KW': 'Arabic (Kuwait)',
        'ar-LB': 'Arabic (Lebanon)',
        'ar-LY': 'Arabic (Libya)',
        'ar-MA': 'Arabic (Morocco)',
        'ar-OM': 'Arabic (Oman)',
        'ar-QA': 'Arabic (Qatar)',
        'ar-SA': 'Arabic (Saudi Arabia)',
        'ar-SY': 'Arabic (Syria)',
        'ar-TN': 'Arabic (Tunisia)',
        'ar-AE': 'Arabic (U.A.E.)',
        'ar-YE': 'Arabic (Yemen)',
        an: 'Aragonese',
        hy: 'Armenian',
        as: 'Assamese',
        ast: 'Asturian',
        az: 'Azerbaijani',
        eu: 'Basque',
        be: 'Belarusian',
        bn: 'Bengali',
        bs: 'Bosnian',
        br: 'Breton',
        bg: 'Bulgarian',
        my: 'Burmese',
        ca: 'Catalan',
        ch: 'Chamorro',
        ce: 'Chechen',
        zh: 'Chinese',
        'zh-HK': 'Chinese (Hong Kong)',
        'zh-CN': 'Chinese (PRC)',
        'zh-SG': 'Chinese (Singapore)',
        'zh-TW': 'Chinese (Taiwan)',
        cv: 'Chuvash',
        co: 'Corsican',
        cr: 'Cree',
        hr: 'Croatian',
        cs: 'Czech',
        da: 'Danish',
        nl: 'Dutch (Standard)',
        'nl-BE': 'Dutch (Belgian)',
        en: 'English',
        'en-AU': 'English (Australia)',
        'en-BZ': 'English (Belize)',
        'en-CA': 'English (Canada)',
        'en-IE': 'English (Ireland)',
        'en-JM': 'English (Jamaica)',
        'en-NZ': 'English (New Zealand)',
        'en-PH': 'English (Philippines)',
        'en-ZA': 'English (South Africa)',
        'en-TT': 'English (Trinidad & Tobago)',
        'en-GB': 'English (United Kingdom)',
        'en-US': 'English (United States)',
        'en-ZW': 'English (Zimbabwe)',
        eo: 'Esperanto',
        et: 'Estonian',
        fo: 'Faeroese',
        fj: 'Fijian',
        fi: 'Finnish',
        fr: 'French (Standard)',
        'fr-BE': 'French (Belgium)',
        'fr-CA': 'French (Canada)',
        'fr-FR': 'French (France)',
        'fr-LU': 'French (Luxembourg)',
        'fr-MC': 'French (Monaco)',
        'fr-CH': 'French (Switzerland)',
        fy: 'Frisian',
        fur: 'Friulian',
        gd: 'Gaelic (Scots)',
        'gd-IE': 'Gaelic (Irish)',
        gl: 'Galacian',
        ka: 'Georgian',
        de: 'German (Standard)',
        'de-AT': 'German (Austria)',
        'de-DE': 'German (Germany)',
        'de-LI': 'German (Liechtenstein)',
        'de-LU': 'German (Luxembourg)',
        'de-CH': 'German (Switzerland)',
        el: 'Greek',
        gu: 'Gujurati',
        ht: 'Haitian',
        he: 'Hebrew',
        hi: 'Hindi',
        hu: 'Hungarian',
        is: 'Icelandic',
        id: 'Indonesian',
        iu: 'Inuktitut',
        ga: 'Irish',
        it: 'Italian (Standard)',
        'it-CH': 'Italian (Switzerland)',
        ja: 'Japanese',
        kn: 'Kannada',
        ks: 'Kashmiri',
        kk: 'Kazakh',
        km: 'Khmer',
        ky: 'Kirghiz',
        tlh: 'Klingon',
        ko: 'Korean',
        'ko-KP': 'Korean (North Korea)',
        'ko-KR': 'Korean (South Korea)',
        la: 'Latin',
        lv: 'Latvian',
        lt: 'Lithuanian',
        lb: 'Luxembourgish',
        mk: 'North Macedonia',
        ms: 'Malay',
        ml: 'Malayalam',
        mt: 'Maltese',
        mi: 'Maori',
        mr: 'Marathi',
        mo: 'Moldavian',
        nv: 'Navajo',
        ng: 'Ndonga',
        ne: 'Nepali',
        no: 'Norwegian',
        nb: 'Norwegian (Bokmal)',
        nn: 'Norwegian (Nynorsk)',
        oc: 'Occitan',
        or: 'Oriya',
        om: 'Oromo',
        fa: 'Persian',
        'fa-IR': 'Persian/Iran',
        pl: 'Polish',
        pt: 'Portuguese',
        'pt-BR': 'Portuguese (Brazil)',
        pa: 'Punjabi',
        'pa-IN': 'Punjabi (India)',
        'pa-PK': 'Punjabi (Pakistan)',
        qu: 'Quechua',
        rm: 'Rhaeto-Romanic',
        ro: 'Romanian',
        'ro-MO': 'Romanian (Moldavia)',
        ru: 'Russian',
        'ru-MO': 'Russian (Moldavia)',
        sz: 'Sami (Lappish)',
        sg: 'Sango',
        sa: 'Sanskrit',
        sc: 'Sardinian',
        sd: 'Sindhi',
        si: 'Singhalese',
        sr: 'Serbian',
        sk: 'Slovak',
        sl: 'Slovenian',
        so: 'Somani',
        sb: 'Sorbian',
        es: 'Spanish',
        'es-AR': 'Spanish (Argentina)',
        'es-BO': 'Spanish (Bolivia)',
        'es-CL': 'Spanish (Chile)',
        'es-CO': 'Spanish (Colombia)',
        'es-CR': 'Spanish (Costa Rica)',
        'es-DO': 'Spanish (Dominican Republic)',
        'es-EC': 'Spanish (Ecuador)',
        'es-SV': 'Spanish (El Salvador)',
        'es-GT': 'Spanish (Guatemala)',
        'es-HN': 'Spanish (Honduras)',
        'es-MX': 'Spanish (Mexico)',
        'es-NI': 'Spanish (Nicaragua)',
        'es-PA': 'Spanish (Panama)',
        'es-PY': 'Spanish (Paraguay)',
        'es-PE': 'Spanish (Peru)',
        'es-PR': 'Spanish (Puerto Rico)',
        'es-ES': 'Spanish (Spain)',
        'es-UY': 'Spanish (Uruguay)',
        'es-VE': 'Spanish (Venezuela)',
        sx: 'Sutu',
        sw: 'Swahili',
        sv: 'Swedish',
        'sv-FI': 'Swedish (Finland)',
        'sv-SV': 'Swedish (Sweden)',
        ta: 'Tamil',
        tt: 'Tatar',
        te: 'Teluga',
        th: 'Thai',
        tig: 'Tigre',
        ts: 'Tsonga',
        tn: 'Tswana',
        tr: 'Turkish',
        tk: 'Turkmen',
        uk: 'Ukrainian',
        hsb: 'Upper Sorbian',
        ur: 'Urdu',
        ve: 'Venda',
        vi: 'Vietnamese',
        vo: 'Volapuk',
        wa: 'Walloon',
        cy: 'Welsh',
        xh: 'Xhosa',
        ji: 'Yiddish',
        zu: 'Zulu'
      }[e] !== void 0 &&
        ((this.internal.languageSettings.languageCode = e),
        this.internal.languageSettings.isSubscribed === !1 &&
          (this.internal.events.subscribe('putCatalog', function () {
            this.internal.write('/Lang (' + this.internal.languageSettings.languageCode + ')')
          }),
          (this.internal.languageSettings.isSubscribed = !0))),
      this
    )
  }),
  (fs = rt.API),
  (Wl = fs.getCharWidthsArray =
    function (e, t) {
      var n,
        r,
        i = (t = t || {}).font || this.internal.getFont(),
        o = t.fontSize || this.internal.getFontSize(),
        s = t.charSpace || this.internal.getCharSpace(),
        l = t.widths ? t.widths : i.metadata.Unicode.widths,
        c = l.fof ? l.fof : 1,
        f = t.kerning ? t.kerning : i.metadata.Unicode.kerning,
        h = f.fof ? f.fof : 1,
        g = t.doKerning !== !1,
        v = 0,
        p = e.length,
        b = 0,
        w = l[0] || c,
        L = []
      for (n = 0; n < p; n++)
        (r = e.charCodeAt(n)),
          typeof i.metadata.widthOfString == 'function'
            ? L.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(r)) + s * (1e3 / o) || 0) / 1e3)
            : ((v = g && Et(f[r]) === 'object' && !isNaN(parseInt(f[r][b], 10)) ? f[r][b] / h : 0), L.push((l[r] || w) / c + v)),
          (b = r)
      return L
    }),
  (Np = fs.getStringUnitWidth =
    function (e, t) {
      var n = (t = t || {}).fontSize || this.internal.getFontSize(),
        r = t.font || this.internal.getFont(),
        i = t.charSpace || this.internal.getCharSpace()
      return (
        fs.processArabic && (e = fs.processArabic(e)),
        typeof r.metadata.widthOfString == 'function'
          ? r.metadata.widthOfString(e, n, i) / n
          : Wl.apply(this, arguments).reduce(function (o, s) {
              return o + s
            }, 0)
      )
    }),
  (Pp = function (e, t, n, r) {
    for (var i = [], o = 0, s = e.length, l = 0; o !== s && l + t[o] < n; ) (l += t[o]), o++
    i.push(e.slice(0, o))
    var c = o
    for (l = 0; o !== s; ) l + t[o] > r && (i.push(e.slice(c, o)), (l = 0), (c = o)), (l += t[o]), o++
    return c !== o && i.push(e.slice(c, o)), i
  }),
  (Cp = function (e, t, n) {
    n || (n = {})
    var r,
      i,
      o,
      s,
      l,
      c,
      f,
      h = [],
      g = [h],
      v = n.textIndent || 0,
      p = 0,
      b = 0,
      w = e.split(' '),
      L = Wl.apply(this, [' ', n])[0]
    if ((c = n.lineIndent === -1 ? w[0].length + 2 : n.lineIndent || 0)) {
      var _ = Array(c).join(' '),
        x = []
      w.map(function (C) {
        ;(C = C.split(/\s*\n/)).length > 1
          ? (x = x.concat(
              C.map(function (D, U) {
                return (
                  (U && D.length
                    ? `
`
                    : '') + D
                )
              })
            ))
          : x.push(C[0])
      }),
        (w = x),
        (c = Np.apply(this, [_, n]))
    }
    for (o = 0, s = w.length; o < s; o++) {
      var k = 0
      if (
        ((r = w[o]),
        c &&
          r[0] ==
            `
` &&
          ((r = r.substr(1)), (k = 1)),
        v +
          p +
          (b = (i = Wl.apply(this, [r, n])).reduce(function (C, D) {
            return C + D
          }, 0)) >
          t || k)
      ) {
        if (b > t) {
          for (l = Pp.apply(this, [r, i, t - (v + p), t]), h.push(l.shift()), h = [l.pop()]; l.length; ) g.push([l.shift()])
          b = i.slice(r.length - (h[0] ? h[0].length : 0)).reduce(function (C, D) {
            return C + D
          }, 0)
        } else h = [r]
        g.push(h), (v = b + c), (p = L)
      } else h.push(r), (v += p + b), (p = L)
    }
    return (
      (f = c
        ? function (C, D) {
            return (D ? _ : '') + C.join(' ')
          }
        : function (C) {
            return C.join(' ')
          }),
      g.map(f)
    )
  }),
  (fs.splitTextToSize = function (e, t, n) {
    var r,
      i = (n = n || {}).fontSize || this.internal.getFontSize(),
      o = function (h) {
        if (h.widths && h.kerning) return { widths: h.widths, kerning: h.kerning }
        var g = this.internal.getFont(h.fontName, h.fontStyle)
        return g.metadata.Unicode
          ? { widths: g.metadata.Unicode.widths || { 0: 1 }, kerning: g.metadata.Unicode.kerning || {} }
          : { font: g.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() }
      }.call(this, n)
    r = Array.isArray(e) ? e : String(e).split(/\r?\n/)
    var s = (1 * this.internal.scaleFactor * t) / i
    ;(o.textIndent = n.textIndent ? (1 * n.textIndent * this.internal.scaleFactor) / i : 0), (o.lineIndent = n.lineIndent)
    var l,
      c,
      f = []
    for (l = 0, c = r.length; l < c; l++) f = f.concat(Cp.apply(this, [r[l], s, o]))
    return f
  }),
  (function (e) {
    e.__fontmetrics__ = e.__fontmetrics__ || {}
    for (var t = 'klmnopqrstuvwxyz', n = {}, r = {}, i = 0; i < t.length; i++) (n[t[i]] = '0123456789abcdef'[i]), (r['0123456789abcdef'[i]] = t[i])
    var o = function (g) {
        return '0x' + parseInt(g, 10).toString(16)
      },
      s = (e.__fontmetrics__.compress = function (g) {
        var v,
          p,
          b,
          w,
          L = ['{']
        for (var _ in g) {
          if (
            ((v = g[_]),
            isNaN(parseInt(_, 10)) ? (p = "'" + _ + "'") : ((_ = parseInt(_, 10)), (p = (p = o(_).slice(2)).slice(0, -1) + r[p.slice(-1)])),
            typeof v == 'number')
          )
            v < 0 ? ((b = o(v).slice(3)), (w = '-')) : ((b = o(v).slice(2)), (w = '')), (b = w + b.slice(0, -1) + r[b.slice(-1)])
          else {
            if (Et(v) !== 'object') throw new Error("Don't know what to do with value type " + Et(v) + '.')
            b = s(v)
          }
          L.push(p + b)
        }
        return L.push('}'), L.join('')
      }),
      l = (e.__fontmetrics__.uncompress = function (g) {
        if (typeof g != 'string') throw new Error('Invalid argument passed to uncompress.')
        for (var v, p, b, w, L = {}, _ = 1, x = L, k = [], C = '', D = '', U = g.length - 1, E = 1; E < U; E += 1)
          (w = g[E]) == "'"
            ? v
              ? ((b = v.join('')), (v = void 0))
              : (v = [])
            : v
              ? v.push(w)
              : w == '{'
                ? (k.push([x, b]), (x = {}), (b = void 0))
                : w == '}'
                  ? (((p = k.pop())[0][p[1]] = x), (b = void 0), (x = p[0]))
                  : w == '-'
                    ? (_ = -1)
                    : b === void 0
                      ? n.hasOwnProperty(w)
                        ? ((C += n[w]), (b = parseInt(C, 16) * _), (_ = 1), (C = ''))
                        : (C += w)
                      : n.hasOwnProperty(w)
                        ? ((D += n[w]), (x[b] = parseInt(D, 16) * _), (_ = 1), (b = void 0), (D = ''))
                        : (D += w)
        return L
      }),
      c = {
        codePages: ['WinAnsiEncoding'],
        WinAnsiEncoding: l(
          '{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}'
        )
      },
      f = {
        Unicode: {
          Courier: c,
          'Courier-Bold': c,
          'Courier-BoldOblique': c,
          'Courier-Oblique': c,
          Helvetica: c,
          'Helvetica-Bold': c,
          'Helvetica-BoldOblique': c,
          'Helvetica-Oblique': c,
          'Times-Roman': c,
          'Times-Bold': c,
          'Times-BoldItalic': c,
          'Times-Italic': c
        }
      },
      h = {
        Unicode: {
          'Courier-Oblique': l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          'Times-BoldItalic': l(
            "{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"
          ),
          'Helvetica-Bold': l(
            "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
          ),
          Courier: l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          'Courier-BoldOblique': l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          'Times-Bold': l(
            "{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"
          ),
          Symbol: l(
            "{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"
          ),
          Helvetica: l(
            "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
          ),
          'Helvetica-BoldOblique': l(
            "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
          ),
          ZapfDingbats: l("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
          'Courier-Bold': l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          'Times-Italic': l(
            "{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"
          ),
          'Times-Roman': l(
            "{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"
          ),
          'Helvetica-Oblique': l(
            "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
          )
        }
      }
    e.events.push([
      'addFont',
      function (g) {
        var v = g.font,
          p = h.Unicode[v.postScriptName]
        p && ((v.metadata.Unicode = {}), (v.metadata.Unicode.widths = p.widths), (v.metadata.Unicode.kerning = p.kerning))
        var b = f.Unicode[v.postScriptName]
        b && ((v.metadata.Unicode.encoding = b), (v.encoding = b.codePages[0]))
      }
    ])
  })(rt.API),
  (function (e) {
    var t = function (n) {
      for (var r = n.length, i = new Uint8Array(r), o = 0; o < r; o++) i[o] = n.charCodeAt(o)
      return i
    }
    e.API.events.push([
      'addFont',
      function (n) {
        var r = void 0,
          i = n.font,
          o = n.instance
        if (!i.isStandardFont) {
          if (o === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').")
          if (typeof (r = o.existsFileInVFS(i.postScriptName) === !1 ? o.loadFile(i.postScriptName) : o.getFileFromVFS(i.postScriptName)) != 'string')
            throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').")
          ;(function (s, l) {
            ;(l = /^\x00\x01\x00\x00/.test(l) ? t(l) : t(Pa(l))),
              (s.metadata = e.API.TTFFont.open(l)),
              (s.metadata.Unicode = s.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }),
              (s.metadata.glyIdsUsed = [0])
          })(i, r)
        }
      }
    ])
  })(rt),
  (function (e) {
    function t() {
      return (st.canvg ? Promise.resolve(st.canvg) : yi(() => import('./index.es-YRGLwebh.js'), __vite__mapDeps([])))
        .catch(function (n) {
          return Promise.reject(new Error('Could not load canvg: ' + n))
        })
        .then(function (n) {
          return n.default ? n.default : n
        })
    }
    rt.API.addSvgAsImage = function (n, r, i, o, s, l, c, f) {
      if (isNaN(r) || isNaN(i))
        throw (Ot.error('jsPDF.addSvgAsImage: Invalid coordinates', arguments), new Error('Invalid coordinates passed to jsPDF.addSvgAsImage'))
      if (isNaN(o) || isNaN(s))
        throw (
          (Ot.error('jsPDF.addSvgAsImage: Invalid measurements', arguments),
          new Error('Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage'))
        )
      var h = document.createElement('canvas')
      ;(h.width = o), (h.height = s)
      var g = h.getContext('2d')
      ;(g.fillStyle = '#fff'), g.fillRect(0, 0, h.width, h.height)
      var v = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 },
        p = this
      return t()
        .then(
          function (b) {
            return b.fromString(g, n, v)
          },
          function () {
            return Promise.reject(new Error('Could not load canvg.'))
          }
        )
        .then(function (b) {
          return b.render(v)
        })
        .then(function () {
          p.addImage(h.toDataURL('image/jpeg', 1), r, i, o, s, c, f)
        })
    }
  })(),
  (rt.API.putTotalPages = function (e) {
    var t,
      n = 0
    parseInt(this.internal.getFont().id.substr(1), 10) < 15
      ? ((t = new RegExp(e, 'g')), (n = this.internal.getNumberOfPages()))
      : ((t = new RegExp(this.pdfEscape16(e, this.internal.getFont()), 'g')),
        (n = this.pdfEscape16(this.internal.getNumberOfPages() + '', this.internal.getFont())))
    for (var r = 1; r <= this.internal.getNumberOfPages(); r++)
      for (var i = 0; i < this.internal.pages[r].length; i++) this.internal.pages[r][i] = this.internal.pages[r][i].replace(t, n)
    return this
  }),
  (rt.API.viewerPreferences = function (e, t) {
    var n
    ;(e = e || {}), (t = t || !1)
    var r,
      i,
      o,
      s = {
        HideToolbar: { defaultValue: !1, value: !1, type: 'boolean', explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 },
        HideMenubar: { defaultValue: !1, value: !1, type: 'boolean', explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 },
        HideWindowUI: { defaultValue: !1, value: !1, type: 'boolean', explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 },
        FitWindow: { defaultValue: !1, value: !1, type: 'boolean', explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 },
        CenterWindow: { defaultValue: !1, value: !1, type: 'boolean', explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 },
        DisplayDocTitle: { defaultValue: !1, value: !1, type: 'boolean', explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 },
        NonFullScreenPageMode: {
          defaultValue: 'UseNone',
          value: 'UseNone',
          type: 'name',
          explicitSet: !1,
          valueSet: ['UseNone', 'UseOutlines', 'UseThumbs', 'UseOC'],
          pdfVersion: 1.3
        },
        Direction: { defaultValue: 'L2R', value: 'L2R', type: 'name', explicitSet: !1, valueSet: ['L2R', 'R2L'], pdfVersion: 1.3 },
        ViewArea: {
          defaultValue: 'CropBox',
          value: 'CropBox',
          type: 'name',
          explicitSet: !1,
          valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
          pdfVersion: 1.4
        },
        ViewClip: {
          defaultValue: 'CropBox',
          value: 'CropBox',
          type: 'name',
          explicitSet: !1,
          valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
          pdfVersion: 1.4
        },
        PrintArea: {
          defaultValue: 'CropBox',
          value: 'CropBox',
          type: 'name',
          explicitSet: !1,
          valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
          pdfVersion: 1.4
        },
        PrintClip: {
          defaultValue: 'CropBox',
          value: 'CropBox',
          type: 'name',
          explicitSet: !1,
          valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
          pdfVersion: 1.4
        },
        PrintScaling: {
          defaultValue: 'AppDefault',
          value: 'AppDefault',
          type: 'name',
          explicitSet: !1,
          valueSet: ['AppDefault', 'None'],
          pdfVersion: 1.6
        },
        Duplex: {
          defaultValue: '',
          value: 'none',
          type: 'name',
          explicitSet: !1,
          valueSet: ['Simplex', 'DuplexFlipShortEdge', 'DuplexFlipLongEdge', 'none'],
          pdfVersion: 1.7
        },
        PickTrayByPDFSize: { defaultValue: !1, value: !1, type: 'boolean', explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 },
        PrintPageRange: { defaultValue: '', value: '', type: 'array', explicitSet: !1, valueSet: null, pdfVersion: 1.7 },
        NumCopies: { defaultValue: 1, value: 1, type: 'integer', explicitSet: !1, valueSet: null, pdfVersion: 1.7 }
      },
      l = Object.keys(s),
      c = [],
      f = 0,
      h = 0,
      g = 0
    function v(b, w) {
      var L,
        _ = !1
      for (L = 0; L < b.length; L += 1) b[L] === w && (_ = !0)
      return _
    }
    if (
      (this.internal.viewerpreferences === void 0 &&
        ((this.internal.viewerpreferences = {}),
        (this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(s))),
        (this.internal.viewerpreferences.isSubscribed = !1)),
      (n = this.internal.viewerpreferences.configuration),
      e === 'reset' || t === !0)
    ) {
      var p = l.length
      for (g = 0; g < p; g += 1) (n[l[g]].value = n[l[g]].defaultValue), (n[l[g]].explicitSet = !1)
    }
    if (Et(e) === 'object') {
      for (i in e)
        if (((o = e[i]), v(l, i) && o !== void 0)) {
          if (n[i].type === 'boolean' && typeof o == 'boolean') n[i].value = o
          else if (n[i].type === 'name' && v(n[i].valueSet, o)) n[i].value = o
          else if (n[i].type === 'integer' && Number.isInteger(o)) n[i].value = o
          else if (n[i].type === 'array') {
            for (f = 0; f < o.length; f += 1)
              if (((r = !0), o[f].length === 1 && typeof o[f][0] == 'number')) c.push(String(o[f] - 1))
              else if (o[f].length > 1) {
                for (h = 0; h < o[f].length; h += 1) typeof o[f][h] != 'number' && (r = !1)
                r === !0 && c.push([o[f][0] - 1, o[f][1] - 1].join(' '))
              }
            n[i].value = '[' + c.join(' ') + ']'
          } else n[i].value = n[i].defaultValue
          n[i].explicitSet = !0
        }
    }
    return (
      this.internal.viewerpreferences.isSubscribed === !1 &&
        (this.internal.events.subscribe('putCatalog', function () {
          var b,
            w = []
          for (b in n) n[b].explicitSet === !0 && (n[b].type === 'name' ? w.push('/' + b + ' /' + n[b].value) : w.push('/' + b + ' ' + n[b].value))
          w.length !== 0 &&
            this.internal.write(
              `/ViewerPreferences
<<
` +
                w.join(`
`) +
                `
>>`
            )
        }),
        (this.internal.viewerpreferences.isSubscribed = !0)),
      (this.internal.viewerpreferences.configuration = n),
      this
    )
  }),
  (function (e) {
    var t = function () {
        var r =
            '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' +
            this.internal.__metadata__.namespaceuri +
            '"><jspdf:metadata>',
          i = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
          o = unescape(encodeURIComponent(r)),
          s = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
          l = unescape(encodeURIComponent('</jspdf:metadata></rdf:Description></rdf:RDF>')),
          c = unescape(encodeURIComponent('</x:xmpmeta>')),
          f = o.length + s.length + l.length + i.length + c.length
        ;(this.internal.__metadata__.metadata_object_number = this.internal.newObject()),
          this.internal.write('<< /Type /Metadata /Subtype /XML /Length ' + f + ' >>'),
          this.internal.write('stream'),
          this.internal.write(i + o + s + l + c),
          this.internal.write('endstream'),
          this.internal.write('endobj')
      },
      n = function () {
        this.internal.__metadata__.metadata_object_number &&
          this.internal.write('/Metadata ' + this.internal.__metadata__.metadata_object_number + ' 0 R')
      }
    e.addMetadata = function (r, i) {
      return (
        this.internal.__metadata__ === void 0 &&
          ((this.internal.__metadata__ = { metadata: r, namespaceuri: i || 'http://jspdf.default.namespaceuri/' }),
          this.internal.events.subscribe('putCatalog', n),
          this.internal.events.subscribe('postPutResources', t)),
        this
      )
    }
  })(rt.API),
  (function (e) {
    var t = e.API,
      n = (t.pdfEscape16 = function (o, s) {
        for (var l, c = s.metadata.Unicode.widths, f = ['', '0', '00', '000', '0000'], h = [''], g = 0, v = o.length; g < v; ++g) {
          if (
            ((l = s.metadata.characterToGlyph(o.charCodeAt(g))),
            s.metadata.glyIdsUsed.push(l),
            (s.metadata.toUnicode[l] = o.charCodeAt(g)),
            c.indexOf(l) == -1 && (c.push(l), c.push([parseInt(s.metadata.widthOfGlyph(l), 10)])),
            l == '0')
          )
            return h.join('')
          ;(l = l.toString(16)), h.push(f[4 - l.length], l)
        }
        return h.join('')
      }),
      r = function (o) {
        var s, l, c, f, h, g, v
        for (
          h = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`,
            c = [],
            g = 0,
            v = (l = Object.keys(o).sort(function (p, b) {
              return p - b
            })).length;
          g < v;
          g++
        )
          (s = l[g]),
            c.length >= 100 &&
              ((h +=
                `
` +
                c.length +
                ` beginbfchar
` +
                c.join(`
`) +
                `
endbfchar`),
              (c = [])),
            o[s] !== void 0 &&
              o[s] !== null &&
              typeof o[s].toString == 'function' &&
              ((f = ('0000' + o[s].toString(16)).slice(-4)), (s = ('0000' + (+s).toString(16)).slice(-4)), c.push('<' + s + '><' + f + '>'))
        return (
          c.length &&
            (h +=
              `
` +
              c.length +
              ` beginbfchar
` +
              c.join(`
`) +
              `
endbfchar
`),
          (h += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`)
        )
      }
    t.events.push([
      'putFont',
      function (o) {
        ;(function (s) {
          var l = s.font,
            c = s.out,
            f = s.newObject,
            h = s.putStream
          if (l.metadata instanceof e.API.TTFFont && l.encoding === 'Identity-H') {
            for (var g = l.metadata.Unicode.widths, v = l.metadata.subset.encode(l.metadata.glyIdsUsed, 1), p = '', b = 0; b < v.length; b++)
              p += String.fromCharCode(v[b])
            var w = f()
            h({ data: p, addLength1: !0, objectId: w }), c('endobj')
            var L = f()
            h({ data: r(l.metadata.toUnicode), addLength1: !0, objectId: L }), c('endobj')
            var _ = f()
            c('<<'),
              c('/Type /FontDescriptor'),
              c('/FontName /' + gs(l.fontName)),
              c('/FontFile2 ' + w + ' 0 R'),
              c('/FontBBox ' + e.API.PDFObject.convert(l.metadata.bbox)),
              c('/Flags ' + l.metadata.flags),
              c('/StemV ' + l.metadata.stemV),
              c('/ItalicAngle ' + l.metadata.italicAngle),
              c('/Ascent ' + l.metadata.ascender),
              c('/Descent ' + l.metadata.decender),
              c('/CapHeight ' + l.metadata.capHeight),
              c('>>'),
              c('endobj')
            var x = f()
            c('<<'),
              c('/Type /Font'),
              c('/BaseFont /' + gs(l.fontName)),
              c('/FontDescriptor ' + _ + ' 0 R'),
              c('/W ' + e.API.PDFObject.convert(g)),
              c('/CIDToGIDMap /Identity'),
              c('/DW 1000'),
              c('/Subtype /CIDFontType2'),
              c('/CIDSystemInfo'),
              c('<<'),
              c('/Supplement 0'),
              c('/Registry (Adobe)'),
              c('/Ordering (' + l.encoding + ')'),
              c('>>'),
              c('>>'),
              c('endobj'),
              (l.objectNumber = f()),
              c('<<'),
              c('/Type /Font'),
              c('/Subtype /Type0'),
              c('/ToUnicode ' + L + ' 0 R'),
              c('/BaseFont /' + gs(l.fontName)),
              c('/Encoding /' + l.encoding),
              c('/DescendantFonts [' + x + ' 0 R]'),
              c('>>'),
              c('endobj'),
              (l.isAlreadyPutted = !0)
          }
        })(o)
      }
    ]),
      t.events.push([
        'putFont',
        function (o) {
          ;(function (s) {
            var l = s.font,
              c = s.out,
              f = s.newObject,
              h = s.putStream
            if (l.metadata instanceof e.API.TTFFont && l.encoding === 'WinAnsiEncoding') {
              for (var g = l.metadata.rawData, v = '', p = 0; p < g.length; p++) v += String.fromCharCode(g[p])
              var b = f()
              h({ data: v, addLength1: !0, objectId: b }), c('endobj')
              var w = f()
              h({ data: r(l.metadata.toUnicode), addLength1: !0, objectId: w }), c('endobj')
              var L = f()
              c('<<'),
                c('/Descent ' + l.metadata.decender),
                c('/CapHeight ' + l.metadata.capHeight),
                c('/StemV ' + l.metadata.stemV),
                c('/Type /FontDescriptor'),
                c('/FontFile2 ' + b + ' 0 R'),
                c('/Flags 96'),
                c('/FontBBox ' + e.API.PDFObject.convert(l.metadata.bbox)),
                c('/FontName /' + gs(l.fontName)),
                c('/ItalicAngle ' + l.metadata.italicAngle),
                c('/Ascent ' + l.metadata.ascender),
                c('>>'),
                c('endobj'),
                (l.objectNumber = f())
              for (var _ = 0; _ < l.metadata.hmtx.widths.length; _++)
                l.metadata.hmtx.widths[_] = parseInt(l.metadata.hmtx.widths[_] * (1e3 / l.metadata.head.unitsPerEm))
              c(
                '<</Subtype/TrueType/Type/Font/ToUnicode ' +
                  w +
                  ' 0 R/BaseFont/' +
                  gs(l.fontName) +
                  '/FontDescriptor ' +
                  L +
                  ' 0 R/Encoding/' +
                  l.encoding +
                  ' /FirstChar 29 /LastChar 255 /Widths ' +
                  e.API.PDFObject.convert(l.metadata.hmtx.widths) +
                  '>>'
              ),
                c('endobj'),
                (l.isAlreadyPutted = !0)
            }
          })(o)
        }
      ])
    var i = function (o) {
      var s,
        l = o.text || '',
        c = o.x,
        f = o.y,
        h = o.options || {},
        g = o.mutex || {},
        v = g.pdfEscape,
        p = g.activeFontKey,
        b = g.fonts,
        w = p,
        L = '',
        _ = 0,
        x = '',
        k = b[w].encoding
      if (b[w].encoding !== 'Identity-H') return { text: l, x: c, y: f, options: h, mutex: g }
      for (x = l, w = p, Array.isArray(l) && (x = l[0]), _ = 0; _ < x.length; _ += 1)
        b[w].metadata.hasOwnProperty('cmap') && (s = b[w].metadata.cmap.unicode.codeMap[x[_].charCodeAt(0)]),
          s || (x[_].charCodeAt(0) < 256 && b[w].metadata.hasOwnProperty('Unicode')) ? (L += x[_]) : (L += '')
      var C = ''
      return (
        parseInt(w.slice(1)) < 14 || k === 'WinAnsiEncoding'
          ? (C = v(L, w)
              .split('')
              .map(function (D) {
                return D.charCodeAt(0).toString(16)
              })
              .join(''))
          : k === 'Identity-H' && (C = n(L, b[w])),
        (g.isHex = !0),
        { text: C, x: c, y: f, options: h, mutex: g }
      )
    }
    t.events.push([
      'postProcessText',
      function (o) {
        var s = o.text || '',
          l = [],
          c = { text: s, x: o.x, y: o.y, options: o.options, mutex: o.mutex }
        if (Array.isArray(s)) {
          var f = 0
          for (f = 0; f < s.length; f += 1)
            Array.isArray(s[f]) && s[f].length === 3
              ? l.push([i(Object.assign({}, c, { text: s[f][0] })).text, s[f][1], s[f][2]])
              : l.push(i(Object.assign({}, c, { text: s[f] })).text)
          o.text = l
        } else o.text = i(Object.assign({}, c, { text: s })).text
      }
    ])
  })(rt),
  (function (e) {
    var t = function () {
      return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0
    }
    ;(e.existsFileInVFS = function (n) {
      return t.call(this), this.internal.vFS[n] !== void 0
    }),
      (e.addFileToVFS = function (n, r) {
        return t.call(this), (this.internal.vFS[n] = r), this
      }),
      (e.getFileFromVFS = function (n) {
        return t.call(this), this.internal.vFS[n] !== void 0 ? this.internal.vFS[n] : null
      })
  })(rt.API),
  (function (e) {
    e.__bidiEngine__ = e.prototype.__bidiEngine__ = function (r) {
      var i,
        o,
        s,
        l,
        c,
        f,
        h,
        g = t,
        v = [
          [0, 3, 0, 1, 0, 0, 0],
          [0, 3, 0, 1, 2, 2, 0],
          [0, 3, 0, 17, 2, 0, 1],
          [0, 3, 5, 5, 4, 1, 0],
          [0, 3, 21, 21, 4, 0, 1],
          [0, 3, 5, 5, 4, 2, 0]
        ],
        p = [
          [2, 0, 1, 1, 0, 1, 0],
          [2, 0, 1, 1, 0, 2, 0],
          [2, 0, 2, 1, 3, 2, 0],
          [2, 0, 2, 33, 3, 1, 1]
        ],
        b = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 },
        w = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 },
        L = [
          '(',
          ')',
          '(',
          '<',
          '>',
          '<',
          '[',
          ']',
          '[',
          '{',
          '}',
          '{',
          '«',
          '»',
          '«',
          '‹',
          '›',
          '‹',
          '⁅',
          '⁆',
          '⁅',
          '⁽',
          '⁾',
          '⁽',
          '₍',
          '₎',
          '₍',
          '≤',
          '≥',
          '≤',
          '〈',
          '〉',
          '〈',
          '﹙',
          '﹚',
          '﹙',
          '﹛',
          '﹜',
          '﹛',
          '﹝',
          '﹞',
          '﹝',
          '﹤',
          '﹥',
          '﹤'
        ],
        _ = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),
        x = !1,
        k = 0
      this.__bidiEngine__ = {}
      var C = function (P) {
          var S = P.charCodeAt(),
            z = S >> 8,
            $ = w[z]
          return $ !== void 0 ? g[256 * $ + (255 & S)] : z === 252 || z === 253 ? 'AL' : _.test(z) ? 'L' : z === 8 ? 'R' : 'N'
        },
        D = function (P) {
          for (var S, z = 0; z < P.length; z++) {
            if ((S = C(P.charAt(z))) === 'L') return !1
            if (S === 'R') return !0
          }
          return !1
        },
        U = function (P, S, z, $) {
          var de,
            W,
            H,
            X,
            ne = S[$]
          switch (ne) {
            case 'L':
            case 'R':
              x = !1
              break
            case 'N':
            case 'AN':
              break
            case 'EN':
              x && (ne = 'AN')
              break
            case 'AL':
              ;(x = !0), (ne = 'R')
              break
            case 'WS':
              ne = 'N'
              break
            case 'CS':
              $ < 1 || $ + 1 >= S.length || ((de = z[$ - 1]) !== 'EN' && de !== 'AN') || ((W = S[$ + 1]) !== 'EN' && W !== 'AN')
                ? (ne = 'N')
                : x && (W = 'AN'),
                (ne = W === de ? W : 'N')
              break
            case 'ES':
              ne = (de = $ > 0 ? z[$ - 1] : 'B') === 'EN' && $ + 1 < S.length && S[$ + 1] === 'EN' ? 'EN' : 'N'
              break
            case 'ET':
              if ($ > 0 && z[$ - 1] === 'EN') {
                ne = 'EN'
                break
              }
              if (x) {
                ne = 'N'
                break
              }
              for (H = $ + 1, X = S.length; H < X && S[H] === 'ET'; ) H++
              ne = H < X && S[H] === 'EN' ? 'EN' : 'N'
              break
            case 'NSM':
              if (s && !l) {
                for (X = S.length, H = $ + 1; H < X && S[H] === 'NSM'; ) H++
                if (H < X) {
                  var fe = P[$],
                    xe = (fe >= 1425 && fe <= 2303) || fe === 64286
                  if (((de = S[H]), xe && (de === 'R' || de === 'AL'))) {
                    ne = 'R'
                    break
                  }
                }
              }
              ne = $ < 1 || (de = S[$ - 1]) === 'B' ? 'N' : z[$ - 1]
              break
            case 'B':
              ;(x = !1), (i = !0), (ne = k)
              break
            case 'S':
              ;(o = !0), (ne = 'N')
              break
            case 'LRE':
            case 'RLE':
            case 'LRO':
            case 'RLO':
            case 'PDF':
              x = !1
              break
            case 'BN':
              ne = 'N'
          }
          return ne
        },
        E = function (P, S, z) {
          var $ = P.split('')
          return z && N($, z, { hiLevel: k }), $.reverse(), S && S.reverse(), $.join('')
        },
        N = function (P, S, z) {
          var $,
            de,
            W,
            H,
            X,
            ne = -1,
            fe = P.length,
            xe = 0,
            A = [],
            B = k ? p : v,
            G = []
          for (x = !1, i = !1, o = !1, de = 0; de < fe; de++) G[de] = C(P[de])
          for (W = 0; W < fe; W++) {
            if (((X = xe), (A[W] = U(P, G, A, W)), ($ = 240 & (xe = B[X][b[A[W]]])), (xe &= 15), (S[W] = H = B[xe][5]), $ > 0))
              if ($ === 16) {
                for (de = ne; de < W; de++) S[de] = 1
                ne = -1
              } else ne = -1
            if (B[xe][6]) ne === -1 && (ne = W)
            else if (ne > -1) {
              for (de = ne; de < W; de++) S[de] = H
              ne = -1
            }
            G[W] === 'B' && (S[W] = 0), (z.hiLevel |= H)
          }
          o &&
            (function (ee, re, Y) {
              for (var oe = 0; oe < Y; oe++)
                if (ee[oe] === 'S') {
                  re[oe] = k
                  for (var se = oe - 1; se >= 0 && ee[se] === 'WS'; se--) re[se] = k
                }
            })(G, S, fe)
        },
        V = function (P, S, z, $, de) {
          if (!(de.hiLevel < P)) {
            if (P === 1 && k === 1 && !i) return S.reverse(), void (z && z.reverse())
            for (var W, H, X, ne, fe = S.length, xe = 0; xe < fe; ) {
              if ($[xe] >= P) {
                for (X = xe + 1; X < fe && $[X] >= P; ) X++
                for (ne = xe, H = X - 1; ne < H; ne++, H--) (W = S[ne]), (S[ne] = S[H]), (S[H] = W), z && ((W = z[ne]), (z[ne] = z[H]), (z[H] = W))
                xe = X
              }
              xe++
            }
          }
        },
        Q = function (P, S, z) {
          var $ = P.split(''),
            de = { hiLevel: k }
          return (
            z || (z = []),
            N($, z, de),
            (function (W, H, X) {
              if (X.hiLevel !== 0 && h) for (var ne, fe = 0; fe < W.length; fe++) H[fe] === 1 && (ne = L.indexOf(W[fe])) >= 0 && (W[fe] = L[ne + 1])
            })($, z, de),
            V(2, $, S, z, de),
            V(1, $, S, z, de),
            $.join('')
          )
        }
      return (
        (this.__bidiEngine__.doBidiReorder = function (P, S, z) {
          if (
            ((function (de, W) {
              if (W) for (var H = 0; H < de.length; H++) W[H] = H
              l === void 0 && (l = D(de)), f === void 0 && (f = D(de))
            })(P, S),
            s || !c || f)
          )
            if (s && c && l ^ f) (k = l ? 1 : 0), (P = E(P, S, z))
            else if (!s && c && f) (k = l ? 1 : 0), (P = Q(P, S, z)), (P = E(P, S))
            else if (!s || l || c || f) {
              if (s && !c && l ^ f) (P = E(P, S)), l ? ((k = 0), (P = Q(P, S, z))) : ((k = 1), (P = Q(P, S, z)), (P = E(P, S)))
              else if (s && l && !c && f) (k = 1), (P = Q(P, S, z)), (P = E(P, S))
              else if (!s && !c && l ^ f) {
                var $ = h
                l
                  ? ((k = 1), (P = Q(P, S, z)), (k = 0), (h = !1), (P = Q(P, S, z)), (h = $))
                  : ((k = 0), (P = Q(P, S, z)), (P = E(P, S)), (k = 1), (h = !1), (P = Q(P, S, z)), (h = $), (P = E(P, S)))
              }
            } else (k = 0), (P = Q(P, S, z))
          else (k = l ? 1 : 0), (P = Q(P, S, z))
          return P
        }),
        (this.__bidiEngine__.setOptions = function (P) {
          P && ((s = P.isInputVisual), (c = P.isOutputVisual), (l = P.isInputRtl), (f = P.isOutputRtl), (h = P.isSymmetricSwapping))
        }),
        this.__bidiEngine__.setOptions(r),
        this.__bidiEngine__
      )
    }
    var t = [
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'S',
        'B',
        'S',
        'WS',
        'B',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'B',
        'B',
        'B',
        'S',
        'WS',
        'N',
        'N',
        'ET',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'ES',
        'CS',
        'ES',
        'CS',
        'CS',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'CS',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'B',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'CS',
        'N',
        'ET',
        'ET',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'L',
        'N',
        'N',
        'BN',
        'N',
        'N',
        'ET',
        'ET',
        'EN',
        'EN',
        'N',
        'L',
        'N',
        'N',
        'N',
        'EN',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'ET',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'R',
        'NSM',
        'R',
        'NSM',
        'NSM',
        'R',
        'NSM',
        'NSM',
        'R',
        'NSM',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'N',
        'N',
        'N',
        'N',
        'N',
        'R',
        'R',
        'R',
        'R',
        'R',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'N',
        'N',
        'AL',
        'ET',
        'ET',
        'AL',
        'CS',
        'AL',
        'N',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AL',
        'AL',
        'N',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'AN',
        'ET',
        'AN',
        'AN',
        'AL',
        'AL',
        'AL',
        'NSM',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AN',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AL',
        'AL',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'N',
        'AL',
        'AL',
        'NSM',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'N',
        'N',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'AL',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'R',
        'R',
        'N',
        'N',
        'N',
        'N',
        'R',
        'N',
        'N',
        'N',
        'N',
        'N',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'WS',
        'BN',
        'BN',
        'BN',
        'L',
        'R',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'WS',
        'B',
        'LRE',
        'RLE',
        'PDF',
        'LRO',
        'RLO',
        'CS',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'CS',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'WS',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'N',
        'LRI',
        'RLI',
        'FSI',
        'PDI',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'BN',
        'EN',
        'L',
        'N',
        'N',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'ES',
        'ES',
        'N',
        'N',
        'N',
        'L',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'ES',
        'ES',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'R',
        'NSM',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'ES',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'N',
        'R',
        'R',
        'R',
        'R',
        'R',
        'N',
        'R',
        'N',
        'R',
        'R',
        'N',
        'R',
        'R',
        'N',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'R',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'NSM',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'CS',
        'N',
        'CS',
        'N',
        'N',
        'CS',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'ET',
        'N',
        'N',
        'ES',
        'ES',
        'N',
        'N',
        'N',
        'N',
        'N',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'N',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'AL',
        'N',
        'N',
        'BN',
        'N',
        'N',
        'N',
        'ET',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'ES',
        'CS',
        'ES',
        'CS',
        'CS',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'EN',
        'CS',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'L',
        'L',
        'L',
        'L',
        'L',
        'L',
        'N',
        'N',
        'L',
        'L',
        'L',
        'N',
        'N',
        'N',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'ET',
        'ET',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N',
        'N'
      ],
      n = new e.__bidiEngine__({ isInputVisual: !0 })
    e.API.events.push([
      'postProcessText',
      function (r) {
        var i = r.text,
          o = (r.x, r.y, r.options || {}),
          s = (r.mutex, o.lang, [])
        if (
          ((o.isInputVisual = typeof o.isInputVisual != 'boolean' || o.isInputVisual),
          n.setOptions(o),
          Object.prototype.toString.call(i) === '[object Array]')
        ) {
          var l = 0
          for (s = [], l = 0; l < i.length; l += 1)
            Object.prototype.toString.call(i[l]) === '[object Array]'
              ? s.push([n.doBidiReorder(i[l][0]), i[l][1], i[l][2]])
              : s.push([n.doBidiReorder(i[l])])
          r.text = s
        } else r.text = n.doBidiReorder(i)
        n.setOptions({ isInputVisual: !0 })
      }
    ])
  })(rt),
  (rt.API.TTFFont = (function () {
    function e(t) {
      var n
      if (((this.rawData = t), (n = this.contents = new oo(t)), (this.contents.pos = 4), n.readString(4) === 'ttcf'))
        throw new Error('TTCF not supported.')
      ;(n.pos = 0), this.parse(), (this.subset = new ow(this)), this.registerTTF()
    }
    return (
      (e.open = function (t) {
        return new e(t)
      }),
      (e.prototype.parse = function () {
        return (
          (this.directory = new V4(this.contents)),
          (this.head = new G4(this)),
          (this.name = new Q4(this)),
          (this.cmap = new B0(this)),
          (this.toUnicode = {}),
          (this.hhea = new K4(this)),
          (this.maxp = new Z4(this)),
          (this.hmtx = new ew(this)),
          (this.post = new Y4(this)),
          (this.os2 = new J4(this)),
          (this.loca = new iw(this)),
          (this.glyf = new tw(this)),
          (this.ascender = (this.os2.exists && this.os2.ascender) || this.hhea.ascender),
          (this.decender = (this.os2.exists && this.os2.decender) || this.hhea.decender),
          (this.lineGap = (this.os2.exists && this.os2.lineGap) || this.hhea.lineGap),
          (this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax])
        )
      }),
      (e.prototype.registerTTF = function () {
        var t, n, r, i, o
        if (
          ((this.scaleFactor = 1e3 / this.head.unitsPerEm),
          (this.bbox = function () {
            var s, l, c, f
            for (f = [], s = 0, l = (c = this.bbox).length; s < l; s++) (t = c[s]), f.push(Math.round(t * this.scaleFactor))
            return f
          }.call(this)),
          (this.stemV = 0),
          this.post.exists
            ? ((r = 255 & (i = this.post.italic_angle)), 32768 & (n = i >> 16) && (n = -(1 + (65535 ^ n))), (this.italicAngle = +(n + '.' + r)))
            : (this.italicAngle = 0),
          (this.ascender = Math.round(this.ascender * this.scaleFactor)),
          (this.decender = Math.round(this.decender * this.scaleFactor)),
          (this.lineGap = Math.round(this.lineGap * this.scaleFactor)),
          (this.capHeight = (this.os2.exists && this.os2.capHeight) || this.ascender),
          (this.xHeight = (this.os2.exists && this.os2.xHeight) || 0),
          (this.familyClass = ((this.os2.exists && this.os2.familyClass) || 0) >> 8),
          (this.isSerif = (o = this.familyClass) === 1 || o === 2 || o === 3 || o === 4 || o === 5 || o === 7),
          (this.isScript = this.familyClass === 10),
          (this.flags = 0),
          this.post.isFixedPitch && (this.flags |= 1),
          this.isSerif && (this.flags |= 2),
          this.isScript && (this.flags |= 8),
          this.italicAngle !== 0 && (this.flags |= 64),
          (this.flags |= 32),
          !this.cmap.unicode)
        )
          throw new Error('No unicode cmap for font')
      }),
      (e.prototype.characterToGlyph = function (t) {
        var n
        return ((n = this.cmap.unicode) != null ? n.codeMap[t] : void 0) || 0
      }),
      (e.prototype.widthOfGlyph = function (t) {
        var n
        return (n = 1e3 / this.head.unitsPerEm), this.hmtx.forGlyph(t).advance * n
      }),
      (e.prototype.widthOfString = function (t, n, r) {
        var i, o, s, l
        for (s = 0, o = 0, l = (t = '' + t).length; 0 <= l ? o < l : o > l; o = 0 <= l ? ++o : --o)
          (i = t.charCodeAt(o)), (s += this.widthOfGlyph(this.characterToGlyph(i)) + r * (1e3 / n) || 0)
        return s * (n / 1e3)
      }),
      (e.prototype.lineHeight = function (t, n) {
        var r
        return n == null && (n = !1), (r = n ? this.lineGap : 0), ((this.ascender + r - this.decender) / 1e3) * t
      }),
      e
    )
  })())
var Rr,
  oo = (function () {
    function e(t) {
      ;(this.data = t ?? []), (this.pos = 0), (this.length = this.data.length)
    }
    return (
      (e.prototype.readByte = function () {
        return this.data[this.pos++]
      }),
      (e.prototype.writeByte = function (t) {
        return (this.data[this.pos++] = t)
      }),
      (e.prototype.readUInt32 = function () {
        return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte()
      }),
      (e.prototype.writeUInt32 = function (t) {
        return this.writeByte((t >>> 24) & 255), this.writeByte((t >> 16) & 255), this.writeByte((t >> 8) & 255), this.writeByte(255 & t)
      }),
      (e.prototype.readInt32 = function () {
        var t
        return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t
      }),
      (e.prototype.writeInt32 = function (t) {
        return t < 0 && (t += 4294967296), this.writeUInt32(t)
      }),
      (e.prototype.readUInt16 = function () {
        return (this.readByte() << 8) | this.readByte()
      }),
      (e.prototype.writeUInt16 = function (t) {
        return this.writeByte((t >> 8) & 255), this.writeByte(255 & t)
      }),
      (e.prototype.readInt16 = function () {
        var t
        return (t = this.readUInt16()) >= 32768 ? t - 65536 : t
      }),
      (e.prototype.writeInt16 = function (t) {
        return t < 0 && (t += 65536), this.writeUInt16(t)
      }),
      (e.prototype.readString = function (t) {
        var n, r
        for (r = [], n = 0; 0 <= t ? n < t : n > t; n = 0 <= t ? ++n : --n) r[n] = String.fromCharCode(this.readByte())
        return r.join('')
      }),
      (e.prototype.writeString = function (t) {
        var n, r, i
        for (i = [], n = 0, r = t.length; 0 <= r ? n < r : n > r; n = 0 <= r ? ++n : --n) i.push(this.writeByte(t.charCodeAt(n)))
        return i
      }),
      (e.prototype.readShort = function () {
        return this.readInt16()
      }),
      (e.prototype.writeShort = function (t) {
        return this.writeInt16(t)
      }),
      (e.prototype.readLongLong = function () {
        var t, n, r, i, o, s, l, c
        return (
          (t = this.readByte()),
          (n = this.readByte()),
          (r = this.readByte()),
          (i = this.readByte()),
          (o = this.readByte()),
          (s = this.readByte()),
          (l = this.readByte()),
          (c = this.readByte()),
          128 & t
            ? -1 *
              (72057594037927940 * (255 ^ t) +
                281474976710656 * (255 ^ n) +
                1099511627776 * (255 ^ r) +
                4294967296 * (255 ^ i) +
                16777216 * (255 ^ o) +
                65536 * (255 ^ s) +
                256 * (255 ^ l) +
                (255 ^ c) +
                1)
            : 72057594037927940 * t + 281474976710656 * n + 1099511627776 * r + 4294967296 * i + 16777216 * o + 65536 * s + 256 * l + c
        )
      }),
      (e.prototype.writeLongLong = function (t) {
        var n, r
        return (
          (n = Math.floor(t / 4294967296)),
          (r = 4294967295 & t),
          this.writeByte((n >> 24) & 255),
          this.writeByte((n >> 16) & 255),
          this.writeByte((n >> 8) & 255),
          this.writeByte(255 & n),
          this.writeByte((r >> 24) & 255),
          this.writeByte((r >> 16) & 255),
          this.writeByte((r >> 8) & 255),
          this.writeByte(255 & r)
        )
      }),
      (e.prototype.readInt = function () {
        return this.readInt32()
      }),
      (e.prototype.writeInt = function (t) {
        return this.writeInt32(t)
      }),
      (e.prototype.read = function (t) {
        var n, r
        for (n = [], r = 0; 0 <= t ? r < t : r > t; r = 0 <= t ? ++r : --r) n.push(this.readByte())
        return n
      }),
      (e.prototype.write = function (t) {
        var n, r, i, o
        for (o = [], r = 0, i = t.length; r < i; r++) (n = t[r]), o.push(this.writeByte(n))
        return o
      }),
      e
    )
  })(),
  V4 = (function () {
    var e
    function t(n) {
      var r, i, o
      for (
        this.scalarType = n.readInt(),
          this.tableCount = n.readShort(),
          this.searchRange = n.readShort(),
          this.entrySelector = n.readShort(),
          this.rangeShift = n.readShort(),
          this.tables = {},
          i = 0,
          o = this.tableCount;
        0 <= o ? i < o : i > o;
        i = 0 <= o ? ++i : --i
      )
        (r = { tag: n.readString(4), checksum: n.readInt(), offset: n.readInt(), length: n.readInt() }), (this.tables[r.tag] = r)
    }
    return (
      (t.prototype.encode = function (n) {
        var r, i, o, s, l, c, f, h, g, v, p, b, w
        for (w in ((p = Object.keys(n).length),
        (c = Math.log(2)),
        (g = 16 * Math.floor(Math.log(p) / c)),
        (s = Math.floor(g / c)),
        (h = 16 * p - g),
        (i = new oo()).writeInt(this.scalarType),
        i.writeShort(p),
        i.writeShort(g),
        i.writeShort(s),
        i.writeShort(h),
        (o = 16 * p),
        (f = i.pos + o),
        (l = null),
        (b = []),
        n))
          for (
            v = n[w], i.writeString(w), i.writeInt(e(v)), i.writeInt(f), i.writeInt(v.length), b = b.concat(v), w === 'head' && (l = f), f += v.length;
            f % 4;

          )
            b.push(0), f++
        return i.write(b), (r = 2981146554 - e(i.data)), (i.pos = l + 8), i.writeUInt32(r), i.data
      }),
      (e = function (n) {
        var r, i, o, s
        for (n = q0.call(n); n.length % 4; ) n.push(0)
        for (o = new oo(n), i = 0, r = 0, s = n.length; r < s; r = r += 4) i += o.readUInt32()
        return 4294967295 & i
      }),
      t
    )
  })(),
  W4 = {}.hasOwnProperty,
  ni = function (e, t) {
    for (var n in t) W4.call(t, n) && (e[n] = t[n])
    function r() {
      this.constructor = e
    }
    return (r.prototype = t.prototype), (e.prototype = new r()), (e.__super__ = t.prototype), e
  }
Rr = (function () {
  function e(t) {
    var n
    ;(this.file = t),
      (n = this.file.directory.tables[this.tag]),
      (this.exists = !!n),
      n && ((this.offset = n.offset), (this.length = n.length), this.parse(this.file.contents))
  }
  return (
    (e.prototype.parse = function () {}),
    (e.prototype.encode = function () {}),
    (e.prototype.raw = function () {
      return this.exists ? ((this.file.contents.pos = this.offset), this.file.contents.read(this.length)) : null
    }),
    e
  )
})()
var G4 = (function (e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return (
      ni(t, Rr),
      (t.prototype.tag = 'head'),
      (t.prototype.parse = function (n) {
        return (
          (n.pos = this.offset),
          (this.version = n.readInt()),
          (this.revision = n.readInt()),
          (this.checkSumAdjustment = n.readInt()),
          (this.magicNumber = n.readInt()),
          (this.flags = n.readShort()),
          (this.unitsPerEm = n.readShort()),
          (this.created = n.readLongLong()),
          (this.modified = n.readLongLong()),
          (this.xMin = n.readShort()),
          (this.yMin = n.readShort()),
          (this.xMax = n.readShort()),
          (this.yMax = n.readShort()),
          (this.macStyle = n.readShort()),
          (this.lowestRecPPEM = n.readShort()),
          (this.fontDirectionHint = n.readShort()),
          (this.indexToLocFormat = n.readShort()),
          (this.glyphDataFormat = n.readShort())
        )
      }),
      (t.prototype.encode = function (n) {
        var r
        return (
          (r = new oo()).writeInt(this.version),
          r.writeInt(this.revision),
          r.writeInt(this.checkSumAdjustment),
          r.writeInt(this.magicNumber),
          r.writeShort(this.flags),
          r.writeShort(this.unitsPerEm),
          r.writeLongLong(this.created),
          r.writeLongLong(this.modified),
          r.writeShort(this.xMin),
          r.writeShort(this.yMin),
          r.writeShort(this.xMax),
          r.writeShort(this.yMax),
          r.writeShort(this.macStyle),
          r.writeShort(this.lowestRecPPEM),
          r.writeShort(this.fontDirectionHint),
          r.writeShort(n),
          r.writeShort(this.glyphDataFormat),
          r.data
        )
      }),
      t
    )
  })(),
  Ep = (function () {
    function e(t, n) {
      var r, i, o, s, l, c, f, h, g, v, p, b, w, L, _, x, k
      switch (
        ((this.platformID = t.readUInt16()),
        (this.encodingID = t.readShort()),
        (this.offset = n + t.readInt()),
        (g = t.pos),
        (t.pos = this.offset),
        (this.format = t.readUInt16()),
        (this.length = t.readUInt16()),
        (this.language = t.readUInt16()),
        (this.isUnicode = (this.platformID === 3 && this.encodingID === 1 && this.format === 4) || (this.platformID === 0 && this.format === 4)),
        (this.codeMap = {}),
        this.format)
      ) {
        case 0:
          for (c = 0; c < 256; ++c) this.codeMap[c] = t.readByte()
          break
        case 4:
          for (
            p = t.readUInt16(),
              v = p / 2,
              t.pos += 6,
              o = (function () {
                var C, D
                for (D = [], c = C = 0; 0 <= v ? C < v : C > v; c = 0 <= v ? ++C : --C) D.push(t.readUInt16())
                return D
              })(),
              t.pos += 2,
              w = (function () {
                var C, D
                for (D = [], c = C = 0; 0 <= v ? C < v : C > v; c = 0 <= v ? ++C : --C) D.push(t.readUInt16())
                return D
              })(),
              f = (function () {
                var C, D
                for (D = [], c = C = 0; 0 <= v ? C < v : C > v; c = 0 <= v ? ++C : --C) D.push(t.readUInt16())
                return D
              })(),
              h = (function () {
                var C, D
                for (D = [], c = C = 0; 0 <= v ? C < v : C > v; c = 0 <= v ? ++C : --C) D.push(t.readUInt16())
                return D
              })(),
              i = (this.length - t.pos + this.offset) / 2,
              l = (function () {
                var C, D
                for (D = [], c = C = 0; 0 <= i ? C < i : C > i; c = 0 <= i ? ++C : --C) D.push(t.readUInt16())
                return D
              })(),
              c = _ = 0,
              k = o.length;
            _ < k;
            c = ++_
          )
            for (L = o[c], r = x = b = w[c]; b <= L ? x <= L : x >= L; r = b <= L ? ++x : --x)
              h[c] === 0 ? (s = r + f[c]) : (s = l[h[c] / 2 + (r - b) - (v - c)] || 0) !== 0 && (s += f[c]), (this.codeMap[r] = 65535 & s)
      }
      t.pos = g
    }
    return (
      (e.encode = function (t, n) {
        var r,
          i,
          o,
          s,
          l,
          c,
          f,
          h,
          g,
          v,
          p,
          b,
          w,
          L,
          _,
          x,
          k,
          C,
          D,
          U,
          E,
          N,
          V,
          Q,
          P,
          S,
          z,
          $,
          de,
          W,
          H,
          X,
          ne,
          fe,
          xe,
          A,
          B,
          G,
          ee,
          re,
          Y,
          oe,
          se,
          Se,
          je,
          q
        switch (
          (($ = new oo()),
          (s = Object.keys(t).sort(function (K, ae) {
            return K - ae
          })),
          n)
        ) {
          case 'macroman':
            for (
              w = 0,
                L = (function () {
                  var K = []
                  for (b = 0; b < 256; ++b) K.push(0)
                  return K
                })(),
                x = { 0: 0 },
                o = {},
                de = 0,
                ne = s.length;
              de < ne;
              de++
            )
              x[(se = t[(i = s[de])])] == null && (x[se] = ++w), (o[i] = { old: t[i], new: x[t[i]] }), (L[i] = x[t[i]])
            return (
              $.writeUInt16(1),
              $.writeUInt16(0),
              $.writeUInt32(12),
              $.writeUInt16(0),
              $.writeUInt16(262),
              $.writeUInt16(0),
              $.write(L),
              { charMap: o, subtable: $.data, maxGlyphID: w + 1 }
            )
          case 'unicode':
            for (S = [], g = [], k = 0, x = {}, r = {}, _ = f = null, W = 0, fe = s.length; W < fe; W++)
              x[(D = t[(i = s[W])])] == null && (x[D] = ++k),
                (r[i] = { old: D, new: x[D] }),
                (l = x[D] - i),
                (_ != null && l === f) || (_ && g.push(_), S.push(i), (f = l)),
                (_ = i)
            for (
              _ && g.push(_),
                g.push(65535),
                S.push(65535),
                Q = 2 * (V = S.length),
                N = 2 * Math.pow(Math.log(V) / Math.LN2, 2),
                v = Math.log(N / 2) / Math.LN2,
                E = 2 * V - N,
                c = [],
                U = [],
                p = [],
                b = H = 0,
                xe = S.length;
              H < xe;
              b = ++H
            ) {
              if (((P = S[b]), (h = g[b]), P === 65535)) {
                c.push(0), U.push(0)
                break
              }
              if (P - (z = r[P].new) >= 32768)
                for (c.push(0), U.push(2 * (p.length + V - b)), i = X = P; P <= h ? X <= h : X >= h; i = P <= h ? ++X : --X) p.push(r[i].new)
              else c.push(z - P), U.push(0)
            }
            for (
              $.writeUInt16(3),
                $.writeUInt16(1),
                $.writeUInt32(12),
                $.writeUInt16(4),
                $.writeUInt16(16 + 8 * V + 2 * p.length),
                $.writeUInt16(0),
                $.writeUInt16(Q),
                $.writeUInt16(N),
                $.writeUInt16(v),
                $.writeUInt16(E),
                Y = 0,
                A = g.length;
              Y < A;
              Y++
            )
              (i = g[Y]), $.writeUInt16(i)
            for ($.writeUInt16(0), oe = 0, B = S.length; oe < B; oe++) (i = S[oe]), $.writeUInt16(i)
            for (Se = 0, G = c.length; Se < G; Se++) (l = c[Se]), $.writeUInt16(l)
            for (je = 0, ee = U.length; je < ee; je++) (C = U[je]), $.writeUInt16(C)
            for (q = 0, re = p.length; q < re; q++) (w = p[q]), $.writeUInt16(w)
            return { charMap: r, subtable: $.data, maxGlyphID: k + 1 }
        }
      }),
      e
    )
  })(),
  B0 = (function (e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return (
      ni(t, Rr),
      (t.prototype.tag = 'cmap'),
      (t.prototype.parse = function (n) {
        var r, i, o
        for (
          n.pos = this.offset, this.version = n.readUInt16(), o = n.readUInt16(), this.tables = [], this.unicode = null, i = 0;
          0 <= o ? i < o : i > o;
          i = 0 <= o ? ++i : --i
        )
          (r = new Ep(n, this.offset)), this.tables.push(r), r.isUnicode && this.unicode == null && (this.unicode = r)
        return !0
      }),
      (t.encode = function (n, r) {
        var i, o
        return (
          r == null && (r = 'macroman'),
          (i = Ep.encode(n, r)),
          (o = new oo()).writeUInt16(0),
          o.writeUInt16(1),
          (i.table = o.data.concat(i.subtable)),
          i
        )
      }),
      t
    )
  })(),
  K4 = (function (e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return (
      ni(t, Rr),
      (t.prototype.tag = 'hhea'),
      (t.prototype.parse = function (n) {
        return (
          (n.pos = this.offset),
          (this.version = n.readInt()),
          (this.ascender = n.readShort()),
          (this.decender = n.readShort()),
          (this.lineGap = n.readShort()),
          (this.advanceWidthMax = n.readShort()),
          (this.minLeftSideBearing = n.readShort()),
          (this.minRightSideBearing = n.readShort()),
          (this.xMaxExtent = n.readShort()),
          (this.caretSlopeRise = n.readShort()),
          (this.caretSlopeRun = n.readShort()),
          (this.caretOffset = n.readShort()),
          (n.pos += 8),
          (this.metricDataFormat = n.readShort()),
          (this.numberOfMetrics = n.readUInt16())
        )
      }),
      t
    )
  })(),
  J4 = (function (e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return (
      ni(t, Rr),
      (t.prototype.tag = 'OS/2'),
      (t.prototype.parse = function (n) {
        if (
          ((n.pos = this.offset),
          (this.version = n.readUInt16()),
          (this.averageCharWidth = n.readShort()),
          (this.weightClass = n.readUInt16()),
          (this.widthClass = n.readUInt16()),
          (this.type = n.readShort()),
          (this.ySubscriptXSize = n.readShort()),
          (this.ySubscriptYSize = n.readShort()),
          (this.ySubscriptXOffset = n.readShort()),
          (this.ySubscriptYOffset = n.readShort()),
          (this.ySuperscriptXSize = n.readShort()),
          (this.ySuperscriptYSize = n.readShort()),
          (this.ySuperscriptXOffset = n.readShort()),
          (this.ySuperscriptYOffset = n.readShort()),
          (this.yStrikeoutSize = n.readShort()),
          (this.yStrikeoutPosition = n.readShort()),
          (this.familyClass = n.readShort()),
          (this.panose = (function () {
            var r, i
            for (i = [], r = 0; r < 10; ++r) i.push(n.readByte())
            return i
          })()),
          (this.charRange = (function () {
            var r, i
            for (i = [], r = 0; r < 4; ++r) i.push(n.readInt())
            return i
          })()),
          (this.vendorID = n.readString(4)),
          (this.selection = n.readShort()),
          (this.firstCharIndex = n.readShort()),
          (this.lastCharIndex = n.readShort()),
          this.version > 0 &&
            ((this.ascent = n.readShort()),
            (this.descent = n.readShort()),
            (this.lineGap = n.readShort()),
            (this.winAscent = n.readShort()),
            (this.winDescent = n.readShort()),
            (this.codePageRange = (function () {
              var r, i
              for (i = [], r = 0; r < 2; r = ++r) i.push(n.readInt())
              return i
            })()),
            this.version > 1))
        )
          return (
            (this.xHeight = n.readShort()),
            (this.capHeight = n.readShort()),
            (this.defaultChar = n.readShort()),
            (this.breakChar = n.readShort()),
            (this.maxContext = n.readShort())
          )
      }),
      t
    )
  })(),
  Y4 = (function (e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return (
      ni(t, Rr),
      (t.prototype.tag = 'post'),
      (t.prototype.parse = function (n) {
        var r, i, o
        switch (
          ((n.pos = this.offset),
          (this.format = n.readInt()),
          (this.italicAngle = n.readInt()),
          (this.underlinePosition = n.readShort()),
          (this.underlineThickness = n.readShort()),
          (this.isFixedPitch = n.readInt()),
          (this.minMemType42 = n.readInt()),
          (this.maxMemType42 = n.readInt()),
          (this.minMemType1 = n.readInt()),
          (this.maxMemType1 = n.readInt()),
          this.format)
        ) {
          case 65536:
            break
          case 131072:
            var s
            for (i = n.readUInt16(), this.glyphNameIndex = [], s = 0; 0 <= i ? s < i : s > i; s = 0 <= i ? ++s : --s)
              this.glyphNameIndex.push(n.readUInt16())
            for (this.names = [], o = []; n.pos < this.offset + this.length; ) (r = n.readByte()), o.push(this.names.push(n.readString(r)))
            return o
          case 151552:
            return (i = n.readUInt16()), (this.offsets = n.read(i))
          case 196608:
            break
          case 262144:
            return (this.map = function () {
              var l, c, f
              for (f = [], s = l = 0, c = this.file.maxp.numGlyphs; 0 <= c ? l < c : l > c; s = 0 <= c ? ++l : --l) f.push(n.readUInt32())
              return f
            }.call(this))
        }
      }),
      t
    )
  })(),
  X4 = function (e, t) {
    ;(this.raw = e), (this.length = e.length), (this.platformID = t.platformID), (this.encodingID = t.encodingID), (this.languageID = t.languageID)
  },
  Q4 = (function (e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return (
      ni(t, Rr),
      (t.prototype.tag = 'name'),
      (t.prototype.parse = function (n) {
        var r, i, o, s, l, c, f, h, g, v, p
        for (n.pos = this.offset, n.readShort(), r = n.readShort(), c = n.readShort(), i = [], s = 0; 0 <= r ? s < r : s > r; s = 0 <= r ? ++s : --s)
          i.push({
            platformID: n.readShort(),
            encodingID: n.readShort(),
            languageID: n.readShort(),
            nameID: n.readShort(),
            length: n.readShort(),
            offset: this.offset + c + n.readShort()
          })
        for (f = {}, s = g = 0, v = i.length; g < v; s = ++g)
          (o = i[s]),
            (n.pos = o.offset),
            (h = n.readString(o.length)),
            (l = new X4(h, o)),
            f[(p = o.nameID)] == null && (f[p] = []),
            f[o.nameID].push(l)
        ;(this.strings = f),
          (this.copyright = f[0]),
          (this.fontFamily = f[1]),
          (this.fontSubfamily = f[2]),
          (this.uniqueSubfamily = f[3]),
          (this.fontName = f[4]),
          (this.version = f[5])
        try {
          this.postscriptName = f[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, '')
        } catch {
          this.postscriptName = f[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, '')
        }
        return (
          (this.trademark = f[7]),
          (this.manufacturer = f[8]),
          (this.designer = f[9]),
          (this.description = f[10]),
          (this.vendorUrl = f[11]),
          (this.designerUrl = f[12]),
          (this.license = f[13]),
          (this.licenseUrl = f[14]),
          (this.preferredFamily = f[15]),
          (this.preferredSubfamily = f[17]),
          (this.compatibleFull = f[18]),
          (this.sampleText = f[19])
        )
      }),
      t
    )
  })(),
  Z4 = (function (e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return (
      ni(t, Rr),
      (t.prototype.tag = 'maxp'),
      (t.prototype.parse = function (n) {
        return (
          (n.pos = this.offset),
          (this.version = n.readInt()),
          (this.numGlyphs = n.readUInt16()),
          (this.maxPoints = n.readUInt16()),
          (this.maxContours = n.readUInt16()),
          (this.maxCompositePoints = n.readUInt16()),
          (this.maxComponentContours = n.readUInt16()),
          (this.maxZones = n.readUInt16()),
          (this.maxTwilightPoints = n.readUInt16()),
          (this.maxStorage = n.readUInt16()),
          (this.maxFunctionDefs = n.readUInt16()),
          (this.maxInstructionDefs = n.readUInt16()),
          (this.maxStackElements = n.readUInt16()),
          (this.maxSizeOfInstructions = n.readUInt16()),
          (this.maxComponentElements = n.readUInt16()),
          (this.maxComponentDepth = n.readUInt16())
        )
      }),
      t
    )
  })(),
  ew = (function (e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return (
      ni(t, Rr),
      (t.prototype.tag = 'hmtx'),
      (t.prototype.parse = function (n) {
        var r, i, o, s, l, c, f
        for (n.pos = this.offset, this.metrics = [], r = 0, c = this.file.hhea.numberOfMetrics; 0 <= c ? r < c : r > c; r = 0 <= c ? ++r : --r)
          this.metrics.push({ advance: n.readUInt16(), lsb: n.readInt16() })
        for (
          o = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics,
            this.leftSideBearings = (function () {
              var h, g
              for (g = [], r = h = 0; 0 <= o ? h < o : h > o; r = 0 <= o ? ++h : --h) g.push(n.readInt16())
              return g
            })(),
            this.widths = function () {
              var h, g, v, p
              for (p = [], h = 0, g = (v = this.metrics).length; h < g; h++) (s = v[h]), p.push(s.advance)
              return p
            }.call(this),
            i = this.widths[this.widths.length - 1],
            f = [],
            r = l = 0;
          0 <= o ? l < o : l > o;
          r = 0 <= o ? ++l : --l
        )
          f.push(this.widths.push(i))
        return f
      }),
      (t.prototype.forGlyph = function (n) {
        return n in this.metrics
          ? this.metrics[n]
          : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[n - this.metrics.length] }
      }),
      t
    )
  })(),
  q0 = [].slice,
  tw = (function (e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return (
      ni(t, Rr),
      (t.prototype.tag = 'glyf'),
      (t.prototype.parse = function () {
        return (this.cache = {})
      }),
      (t.prototype.glyphFor = function (n) {
        var r, i, o, s, l, c, f, h, g, v
        return n in this.cache
          ? this.cache[n]
          : ((s = this.file.loca),
            (r = this.file.contents),
            (i = s.indexOf(n)),
            (o = s.lengthOf(n)) === 0
              ? (this.cache[n] = null)
              : ((r.pos = this.offset + i),
                (l = (c = new oo(r.read(o))).readShort()),
                (h = c.readShort()),
                (v = c.readShort()),
                (f = c.readShort()),
                (g = c.readShort()),
                (this.cache[n] = l === -1 ? new rw(c, h, v, f, g) : new nw(c, l, h, v, f, g)),
                this.cache[n]))
      }),
      (t.prototype.encode = function (n, r, i) {
        var o, s, l, c, f
        for (l = [], s = [], c = 0, f = r.length; c < f; c++) (o = n[r[c]]), s.push(l.length), o && (l = l.concat(o.encode(i)))
        return s.push(l.length), { table: l, offsets: s }
      }),
      t
    )
  })(),
  nw = (function () {
    function e(t, n, r, i, o, s) {
      ;(this.raw = t), (this.numberOfContours = n), (this.xMin = r), (this.yMin = i), (this.xMax = o), (this.yMax = s), (this.compound = !1)
    }
    return (
      (e.prototype.encode = function () {
        return this.raw.data
      }),
      e
    )
  })(),
  rw = (function () {
    function e(t, n, r, i, o) {
      var s, l
      for (
        this.raw = t,
          this.xMin = n,
          this.yMin = r,
          this.xMax = i,
          this.yMax = o,
          this.compound = !0,
          this.glyphIDs = [],
          this.glyphOffsets = [],
          s = this.raw;
        (l = s.readShort()), this.glyphOffsets.push(s.pos), this.glyphIDs.push(s.readUInt16()), 32 & l;

      )
        (s.pos += 1 & l ? 4 : 2), 128 & l ? (s.pos += 8) : 64 & l ? (s.pos += 4) : 8 & l && (s.pos += 2)
    }
    return (
      (e.prototype.encode = function () {
        var t, n, r
        for (n = new oo(q0.call(this.raw.data)), t = 0, r = this.glyphIDs.length; t < r; ++t) n.pos = this.glyphOffsets[t]
        return n.data
      }),
      e
    )
  })(),
  iw = (function (e) {
    function t() {
      return t.__super__.constructor.apply(this, arguments)
    }
    return (
      ni(t, Rr),
      (t.prototype.tag = 'loca'),
      (t.prototype.parse = function (n) {
        var r, i
        return (
          (n.pos = this.offset),
          (r = this.file.head.indexToLocFormat),
          (this.offsets =
            r === 0
              ? function () {
                  var o, s
                  for (s = [], i = 0, o = this.length; i < o; i += 2) s.push(2 * n.readUInt16())
                  return s
                }.call(this)
              : function () {
                  var o, s
                  for (s = [], i = 0, o = this.length; i < o; i += 4) s.push(n.readUInt32())
                  return s
                }.call(this))
        )
      }),
      (t.prototype.indexOf = function (n) {
        return this.offsets[n]
      }),
      (t.prototype.lengthOf = function (n) {
        return this.offsets[n + 1] - this.offsets[n]
      }),
      (t.prototype.encode = function (n, r) {
        for (var i = new Uint32Array(this.offsets.length), o = 0, s = 0, l = 0; l < i.length; ++l)
          if (((i[l] = o), s < r.length && r[s] == l)) {
            ++s, (i[l] = o)
            var c = this.offsets[l],
              f = this.offsets[l + 1] - c
            f > 0 && (o += f)
          }
        for (var h = new Array(4 * i.length), g = 0; g < i.length; ++g)
          (h[4 * g + 3] = 255 & i[g]),
            (h[4 * g + 2] = (65280 & i[g]) >> 8),
            (h[4 * g + 1] = (16711680 & i[g]) >> 16),
            (h[4 * g] = (4278190080 & i[g]) >> 24)
        return h
      }),
      t
    )
  })(),
  ow = (function () {
    function e(t) {
      ;(this.font = t), (this.subset = {}), (this.unicodes = {}), (this.next = 33)
    }
    return (
      (e.prototype.generateCmap = function () {
        var t, n, r, i, o
        for (n in ((i = this.font.cmap.tables[0].codeMap), (t = {}), (o = this.subset))) (r = o[n]), (t[n] = i[r])
        return t
      }),
      (e.prototype.glyphsFor = function (t) {
        var n, r, i, o, s, l, c
        for (i = {}, s = 0, l = t.length; s < l; s++) i[(o = t[s])] = this.font.glyf.glyphFor(o)
        for (o in ((n = []), i)) (r = i[o]) != null && r.compound && n.push.apply(n, r.glyphIDs)
        if (n.length > 0) for (o in (c = this.glyphsFor(n))) (r = c[o]), (i[o] = r)
        return i
      }),
      (e.prototype.encode = function (t, n) {
        var r, i, o, s, l, c, f, h, g, v, p, b, w, L, _
        for (i in ((r = B0.encode(this.generateCmap(), 'unicode')), (s = this.glyphsFor(t)), (p = { 0: 0 }), (_ = r.charMap))) p[(c = _[i]).old] = c.new
        for (b in ((v = r.maxGlyphID), s)) b in p || (p[b] = v++)
        return (
          (h = (function (x) {
            var k, C
            for (k in ((C = {}), x)) C[x[k]] = k
            return C
          })(p)),
          (g = Object.keys(h).sort(function (x, k) {
            return x - k
          })),
          (w = (function () {
            var x, k, C
            for (C = [], x = 0, k = g.length; x < k; x++) (l = g[x]), C.push(h[l])
            return C
          })()),
          (o = this.font.glyf.encode(s, w, p)),
          (f = this.font.loca.encode(o.offsets, w)),
          (L = {
            cmap: this.font.cmap.raw(),
            glyf: o.table,
            loca: f,
            hmtx: this.font.hmtx.raw(),
            hhea: this.font.hhea.raw(),
            maxp: this.font.maxp.raw(),
            post: this.font.post.raw(),
            name: this.font.name.raw(),
            head: this.font.head.encode(n)
          }),
          this.font.os2.exists && (L['OS/2'] = this.font.os2.raw()),
          this.font.directory.encode(L)
        )
      }),
      e
    )
  })()
rt.API.PDFObject = (function () {
  var e
  function t() {}
  return (
    (e = function (n, r) {
      return (Array(r + 1).join('0') + n).slice(-r)
    }),
    (t.convert = function (n) {
      var r, i, o, s
      if (Array.isArray(n))
        return (
          '[' +
          (function () {
            var l, c, f
            for (f = [], l = 0, c = n.length; l < c; l++) (r = n[l]), f.push(t.convert(r))
            return f
          })().join(' ') +
          ']'
        )
      if (typeof n == 'string') return '/' + n
      if (n != null && n.isString) return '(' + n + ')'
      if (n instanceof Date)
        return (
          '(D:' +
          e(n.getUTCFullYear(), 4) +
          e(n.getUTCMonth(), 2) +
          e(n.getUTCDate(), 2) +
          e(n.getUTCHours(), 2) +
          e(n.getUTCMinutes(), 2) +
          e(n.getUTCSeconds(), 2) +
          'Z)'
        )
      if ({}.toString.call(n) === '[object Object]') {
        for (i in ((o = ['<<']), n)) (s = n[i]), o.push('/' + i + ' ' + t.convert(s))
        return (
          o.push('>>'),
          o.join(`
`)
        )
      }
      return '' + n
    }),
    t
  )
})()
const sw = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      AcroForm: M4,
      AcroFormAppearance: Ye,
      AcroFormButton: hn,
      AcroFormCheckBox: Ia,
      AcroFormChoiceField: Co,
      AcroFormComboBox: Io,
      AcroFormEditBox: Ca,
      AcroFormListBox: jo,
      AcroFormPasswordField: Ea,
      AcroFormPushButton: ja,
      AcroFormRadioButton: Eo,
      AcroFormTextField: to,
      GState: $a,
      ShadingPattern: Xi,
      TilingPattern: Lo,
      default: rt,
      jsPDF: rt
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
var Zu = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {}
function Ex(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function aw(e) {
  if (e.__esModule) return e
  var t = e.default
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
    }
    n.prototype = t.prototype
  } else n = {}
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r)
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r]
              }
            }
      )
    }),
    n
  )
}
var lw = { exports: {} }
const cw = aw(sw)
/*!
 *
 *               jsPDF AutoTable plugin v3.8.1
 *
 *               Copyright (c) 2023 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *               Licensed under the MIT License.
 *               http://opensource.org/licenses/mit-license
 *
 */ ;(function (e, t) {
  ;(function (r, i) {
    e.exports = i(
      (function () {
        try {
          return cw
        } catch {}
      })()
    )
  })(typeof globalThis < 'u' ? globalThis : typeof Zu < 'u' ? Zu : typeof window < 'u' ? window : typeof self < 'u' ? self : Zu, function (n) {
    return (function () {
      var r = {
          662: function (l, c) {
            var f =
              (this && this.__extends) ||
              (function () {
                var v = function (p, b) {
                  return (
                    (v =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (w, L) {
                          w.__proto__ = L
                        }) ||
                      function (w, L) {
                        for (var _ in L) Object.prototype.hasOwnProperty.call(L, _) && (w[_] = L[_])
                      }),
                    v(p, b)
                  )
                }
                return function (p, b) {
                  if (typeof b != 'function' && b !== null) throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null')
                  v(p, b)
                  function w() {
                    this.constructor = p
                  }
                  p.prototype = b === null ? Object.create(b) : ((w.prototype = b.prototype), new w())
                }
              })()
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.CellHookData = c.HookData = void 0)
            var h = (function () {
              function v(p, b, w) {
                ;(this.table = b),
                  (this.pageNumber = b.pageNumber),
                  (this.pageCount = this.pageNumber),
                  (this.settings = b.settings),
                  (this.cursor = w),
                  (this.doc = p.getDocument())
              }
              return v
            })()
            c.HookData = h
            var g = (function (v) {
              f(p, v)
              function p(b, w, L, _, x, k) {
                var C = v.call(this, b, w, k) || this
                return (C.cell = L), (C.row = _), (C.column = x), (C.section = _.section), C
              }
              return p
            })(h)
            c.CellHookData = g
          },
          790: function (l, c, f) {
            Object.defineProperty(c, '__esModule', { value: !0 })
            var h = f(148),
              g = f(938),
              v = f(323),
              p = f(587),
              b = f(49),
              w = f(858)
            function L(_) {
              ;(_.API.autoTable = function () {
                for (var x = [], k = 0; k < arguments.length; k++) x[k] = arguments[k]
                var C
                x.length === 1
                  ? (C = x[0])
                  : (console.error('Use of deprecated autoTable initiation'), (C = x[2] || {}), (C.columns = x[0]), (C.body = x[1]))
                var D = (0, p.parseInput)(this, C),
                  U = (0, w.createTable)(this, D)
                return (0, b.drawTable)(this, U), this
              }),
                (_.API.lastAutoTable = !1),
                (_.API.previousAutoTable = !1),
                (_.API.autoTable.previous = !1),
                (_.API.autoTableText = function (x, k, C, D) {
                  ;(0, g.default)(x, k, C, D, this)
                }),
                (_.API.autoTableSetDefaults = function (x) {
                  return v.DocHandler.setDefaults(x, this), this
                }),
                (_.autoTableSetDefaults = function (x, k) {
                  v.DocHandler.setDefaults(x, k)
                }),
                (_.API.autoTableHtmlToJson = function (x, k) {
                  if ((k === void 0 && (k = !1), typeof window > 'u'))
                    return console.error('Cannot run autoTableHtmlToJson in non browser environment'), null
                  var C = new v.DocHandler(this),
                    D = (0, h.parseHtml)(C, x, window, k, !1),
                    U = D.head,
                    E = D.body,
                    N = U[0].map(function (V) {
                      return V.content
                    })
                  return { columns: N, rows: E, data: E }
                }),
                (_.API.autoTableEndPosY = function () {
                  console.error('Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.')
                  var x = this.lastAutoTable
                  return x && x.finalY ? x.finalY : 0
                }),
                (_.API.autoTableAddPageContent = function (x) {
                  return (
                    console.error(
                      'Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead.'
                    ),
                    _.API.autoTable.globalDefaults || (_.API.autoTable.globalDefaults = {}),
                    (_.API.autoTable.globalDefaults.addPageContent = x),
                    this
                  )
                }),
                (_.API.autoTableAddPage = function () {
                  return console.error('Use of deprecated function: autoTableAddPage. Use doc.addPage()'), this.addPage(), this
                })
            }
            c.default = L
          },
          938: function (l, c) {
            Object.defineProperty(c, '__esModule', { value: !0 })
            function f(h, g, v, p, b) {
              p = p || {}
              var w = 1.15,
                L = b.internal.scaleFactor,
                _ = b.internal.getFontSize() / L,
                x = b.getLineHeightFactor ? b.getLineHeightFactor() : w,
                k = _ * x,
                C = /\r\n|\r|\n/g,
                D = '',
                U = 1
              if (
                ((p.valign === 'middle' || p.valign === 'bottom' || p.halign === 'center' || p.halign === 'right') &&
                  ((D = typeof h == 'string' ? h.split(C) : h), (U = D.length || 1)),
                (v += _ * (2 - w)),
                p.valign === 'middle' ? (v -= (U / 2) * k) : p.valign === 'bottom' && (v -= U * k),
                p.halign === 'center' || p.halign === 'right')
              ) {
                var E = _
                if ((p.halign === 'center' && (E *= 0.5), D && U >= 1)) {
                  for (var N = 0; N < D.length; N++) b.text(D[N], g - b.getStringUnitWidth(D[N]) * E, v), (v += k)
                  return b
                }
                g -= b.getStringUnitWidth(h) * E
              }
              return p.halign === 'justify' ? b.text(h, g, v, { maxWidth: p.maxWidth || 100, align: 'justify' }) : b.text(h, g, v), b
            }
            c.default = f
          },
          200: function (l, c) {
            Object.defineProperty(c, '__esModule', { value: !0 }),
              (c.getPageAvailableWidth = c.parseSpacing = c.getFillStyle = c.addTableBorder = c.getStringWidth = void 0)
            function f(b, w, L) {
              L.applyStyles(w, !0)
              var _ = Array.isArray(b) ? b : [b],
                x = _.map(function (k) {
                  return L.getTextWidth(k)
                }).reduce(function (k, C) {
                  return Math.max(k, C)
                }, 0)
              return x
            }
            c.getStringWidth = f
            function h(b, w, L, _) {
              var x = w.settings.tableLineWidth,
                k = w.settings.tableLineColor
              b.applyStyles({ lineWidth: x, lineColor: k })
              var C = g(x, !1)
              C && b.rect(L.x, L.y, w.getWidth(b.pageSize().width), _.y - L.y, C)
            }
            c.addTableBorder = h
            function g(b, w) {
              var L = b > 0,
                _ = w || w === 0
              return L && _ ? 'DF' : L ? 'S' : _ ? 'F' : null
            }
            c.getFillStyle = g
            function v(b, w) {
              var L, _, x, k
              if (((b = b || w), Array.isArray(b))) {
                if (b.length >= 4) return { top: b[0], right: b[1], bottom: b[2], left: b[3] }
                if (b.length === 3) return { top: b[0], right: b[1], bottom: b[2], left: b[1] }
                if (b.length === 2) return { top: b[0], right: b[1], bottom: b[0], left: b[1] }
                b.length === 1 ? (b = b[0]) : (b = w)
              }
              return typeof b == 'object'
                ? (typeof b.vertical == 'number' && ((b.top = b.vertical), (b.bottom = b.vertical)),
                  typeof b.horizontal == 'number' && ((b.right = b.horizontal), (b.left = b.horizontal)),
                  {
                    left: (L = b.left) !== null && L !== void 0 ? L : w,
                    top: (_ = b.top) !== null && _ !== void 0 ? _ : w,
                    right: (x = b.right) !== null && x !== void 0 ? x : w,
                    bottom: (k = b.bottom) !== null && k !== void 0 ? k : w
                  })
                : (typeof b != 'number' && (b = w), { top: b, right: b, bottom: b, left: b })
            }
            c.parseSpacing = v
            function p(b, w) {
              var L = v(w.settings.margin, 0)
              return b.pageSize().width - (L.left + L.right)
            }
            c.getPageAvailableWidth = p
          },
          913: function (l, c) {
            var f =
              (this && this.__extends) ||
              (function () {
                var p = function (b, w) {
                  return (
                    (p =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (L, _) {
                          L.__proto__ = _
                        }) ||
                      function (L, _) {
                        for (var x in _) Object.prototype.hasOwnProperty.call(_, x) && (L[x] = _[x])
                      }),
                    p(b, w)
                  )
                }
                return function (b, w) {
                  if (typeof w != 'function' && w !== null) throw new TypeError('Class extends value ' + String(w) + ' is not a constructor or null')
                  p(b, w)
                  function L() {
                    this.constructor = b
                  }
                  b.prototype = w === null ? Object.create(w) : ((L.prototype = w.prototype), new L())
                }
              })()
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.getTheme = c.defaultStyles = c.HtmlRowInput = void 0)
            var h = (function (p) {
              f(b, p)
              function b(w) {
                var L = p.call(this) || this
                return (L._element = w), L
              }
              return b
            })(Array)
            c.HtmlRowInput = h
            function g(p) {
              return {
                font: 'helvetica',
                fontStyle: 'normal',
                overflow: 'linebreak',
                fillColor: !1,
                textColor: 20,
                halign: 'left',
                valign: 'top',
                fontSize: 10,
                cellPadding: 5 / p,
                lineColor: 200,
                lineWidth: 0,
                cellWidth: 'auto',
                minCellHeight: 0,
                minCellWidth: 0
              }
            }
            c.defaultStyles = g
            function v(p) {
              var b = {
                striped: {
                  table: { fillColor: 255, textColor: 80, fontStyle: 'normal' },
                  head: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
                  body: {},
                  foot: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
                  alternateRow: { fillColor: 245 }
                },
                grid: {
                  table: { fillColor: 255, textColor: 80, fontStyle: 'normal', lineWidth: 0.1 },
                  head: { textColor: 255, fillColor: [26, 188, 156], fontStyle: 'bold', lineWidth: 0 },
                  body: {},
                  foot: { textColor: 255, fillColor: [26, 188, 156], fontStyle: 'bold', lineWidth: 0 },
                  alternateRow: {}
                },
                plain: { head: { fontStyle: 'bold' }, foot: { fontStyle: 'bold' } }
              }
              return b[p]
            }
            c.getTheme = v
          },
          259: function (l, c, f) {
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.parseCss = void 0)
            var h = f(200)
            function g(L, _, x, k, C) {
              var D = {},
                U = 1.3333333333333333,
                E = p(_, function (ne) {
                  return C.getComputedStyle(ne).backgroundColor
                })
              E != null && (D.fillColor = E)
              var N = p(_, function (ne) {
                return C.getComputedStyle(ne).color
              })
              N != null && (D.textColor = N)
              var V = w(k, x)
              V && (D.cellPadding = V)
              var Q = 'borderTopColor',
                P = U * x,
                S = k.borderTopWidth
              if (k.borderBottomWidth === S && k.borderRightWidth === S && k.borderLeftWidth === S) {
                var z = (parseFloat(S) || 0) / P
                z && (D.lineWidth = z)
              } else
                (D.lineWidth = {
                  top: (parseFloat(k.borderTopWidth) || 0) / P,
                  right: (parseFloat(k.borderRightWidth) || 0) / P,
                  bottom: (parseFloat(k.borderBottomWidth) || 0) / P,
                  left: (parseFloat(k.borderLeftWidth) || 0) / P
                }),
                  D.lineWidth.top ||
                    (D.lineWidth.right
                      ? (Q = 'borderRightColor')
                      : D.lineWidth.bottom
                        ? (Q = 'borderBottomColor')
                        : D.lineWidth.left && (Q = 'borderLeftColor'))
              console.log(D.lineWidth)
              var $ = p(_, function (ne) {
                return C.getComputedStyle(ne)[Q]
              })
              $ != null && (D.lineColor = $)
              var de = ['left', 'right', 'center', 'justify']
              de.indexOf(k.textAlign) !== -1 && (D.halign = k.textAlign),
                (de = ['middle', 'bottom', 'top']),
                de.indexOf(k.verticalAlign) !== -1 && (D.valign = k.verticalAlign)
              var W = parseInt(k.fontSize || '')
              isNaN(W) || (D.fontSize = W / U)
              var H = v(k)
              H && (D.fontStyle = H)
              var X = (k.fontFamily || '').toLowerCase()
              return L.indexOf(X) !== -1 && (D.font = X), D
            }
            c.parseCss = g
            function v(L) {
              var _ = ''
              return (
                (L.fontWeight === 'bold' || L.fontWeight === 'bolder' || parseInt(L.fontWeight) >= 700) && (_ = 'bold'),
                (L.fontStyle === 'italic' || L.fontStyle === 'oblique') && (_ += 'italic'),
                _
              )
            }
            function p(L, _) {
              var x = b(L, _)
              if (!x) return null
              var k = x.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/)
              if (!k || !Array.isArray(k)) return null
              var C = [parseInt(k[1]), parseInt(k[2]), parseInt(k[3])],
                D = parseInt(k[4])
              return D === 0 || isNaN(C[0]) || isNaN(C[1]) || isNaN(C[2]) ? null : C
            }
            function b(L, _) {
              var x = _(L)
              return x === 'rgba(0, 0, 0, 0)' || x === 'transparent' || x === 'initial' || x === 'inherit'
                ? L.parentElement == null
                  ? null
                  : b(L.parentElement, _)
                : x
            }
            function w(L, _) {
              var x = [L.paddingTop, L.paddingRight, L.paddingBottom, L.paddingLeft],
                k = 96 / (72 / _),
                C = (parseInt(L.lineHeight) - parseInt(L.fontSize)) / _ / 2,
                D = x.map(function (E) {
                  return parseInt(E || '0') / k
                }),
                U = (0, h.parseSpacing)(D, 0)
              return C > U.top && (U.top = C), C > U.bottom && (U.bottom = C), U
            }
          },
          323: function (l, c) {
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.DocHandler = void 0)
            var f = {},
              h = (function () {
                function g(v) {
                  ;(this.jsPDFDocument = v),
                    (this.userStyles = {
                      textColor: v.getTextColor ? this.jsPDFDocument.getTextColor() : 0,
                      fontSize: v.internal.getFontSize(),
                      fontStyle: v.internal.getFont().fontStyle,
                      font: v.internal.getFont().fontName,
                      lineWidth: v.getLineWidth ? this.jsPDFDocument.getLineWidth() : 0,
                      lineColor: v.getDrawColor ? this.jsPDFDocument.getDrawColor() : 0
                    })
                }
                return (
                  (g.setDefaults = function (v, p) {
                    p === void 0 && (p = null), p ? (p.__autoTableDocumentDefaults = v) : (f = v)
                  }),
                  (g.unifyColor = function (v) {
                    return Array.isArray(v) ? v : typeof v == 'number' ? [v, v, v] : typeof v == 'string' ? [v] : null
                  }),
                  (g.prototype.applyStyles = function (v, p) {
                    var b, w, L
                    p === void 0 && (p = !1), v.fontStyle && this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(v.fontStyle)
                    var _ = this.jsPDFDocument.internal.getFont(),
                      x = _.fontStyle,
                      k = _.fontName
                    if ((v.font && (k = v.font), v.fontStyle)) {
                      x = v.fontStyle
                      var C = this.getFontList()[k]
                      C && C.indexOf(x) === -1 && (this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(C[0]), (x = C[0]))
                    }
                    if ((this.jsPDFDocument.setFont(k, x), v.fontSize && this.jsPDFDocument.setFontSize(v.fontSize), !p)) {
                      var D = g.unifyColor(v.fillColor)
                      D && (b = this.jsPDFDocument).setFillColor.apply(b, D),
                        (D = g.unifyColor(v.textColor)),
                        D && (w = this.jsPDFDocument).setTextColor.apply(w, D),
                        (D = g.unifyColor(v.lineColor)),
                        D && (L = this.jsPDFDocument).setDrawColor.apply(L, D),
                        typeof v.lineWidth == 'number' && this.jsPDFDocument.setLineWidth(v.lineWidth)
                    }
                  }),
                  (g.prototype.splitTextToSize = function (v, p, b) {
                    return this.jsPDFDocument.splitTextToSize(v, p, b)
                  }),
                  (g.prototype.rect = function (v, p, b, w, L) {
                    return this.jsPDFDocument.rect(v, p, b, w, L)
                  }),
                  (g.prototype.getLastAutoTable = function () {
                    return this.jsPDFDocument.lastAutoTable || null
                  }),
                  (g.prototype.getTextWidth = function (v) {
                    return this.jsPDFDocument.getTextWidth(v)
                  }),
                  (g.prototype.getDocument = function () {
                    return this.jsPDFDocument
                  }),
                  (g.prototype.setPage = function (v) {
                    this.jsPDFDocument.setPage(v)
                  }),
                  (g.prototype.addPage = function () {
                    return this.jsPDFDocument.addPage()
                  }),
                  (g.prototype.getFontList = function () {
                    return this.jsPDFDocument.getFontList()
                  }),
                  (g.prototype.getGlobalOptions = function () {
                    return f || {}
                  }),
                  (g.prototype.getDocumentOptions = function () {
                    return this.jsPDFDocument.__autoTableDocumentDefaults || {}
                  }),
                  (g.prototype.pageSize = function () {
                    var v = this.jsPDFDocument.internal.pageSize
                    return v.width == null && (v = { width: v.getWidth(), height: v.getHeight() }), v
                  }),
                  (g.prototype.scaleFactor = function () {
                    return this.jsPDFDocument.internal.scaleFactor
                  }),
                  (g.prototype.getLineHeightFactor = function () {
                    var v = this.jsPDFDocument
                    return v.getLineHeightFactor ? v.getLineHeightFactor() : 1.15
                  }),
                  (g.prototype.getLineHeight = function (v) {
                    return (v / this.scaleFactor()) * this.getLineHeightFactor()
                  }),
                  (g.prototype.pageNumber = function () {
                    var v = this.jsPDFDocument.internal.getCurrentPageInfo()
                    return v ? v.pageNumber : this.jsPDFDocument.internal.getNumberOfPages()
                  }),
                  g
                )
              })()
            c.DocHandler = h
          },
          148: function (l, c, f) {
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.parseHtml = void 0)
            var h = f(259),
              g = f(913)
            function v(w, L, _, x, k) {
              var C, D
              x === void 0 && (x = !1), k === void 0 && (k = !1)
              var U
              typeof L == 'string' ? (U = _.document.querySelector(L)) : (U = L)
              var E = Object.keys(w.getFontList()),
                N = w.scaleFactor(),
                V = [],
                Q = [],
                P = []
              if (!U) return console.error('Html table could not be found with input: ', L), { head: V, body: Q, foot: P }
              for (var S = 0; S < U.rows.length; S++) {
                var z = U.rows[S],
                  $ =
                    (D = (C = z == null ? void 0 : z.parentElement) === null || C === void 0 ? void 0 : C.tagName) === null || D === void 0
                      ? void 0
                      : D.toLowerCase(),
                  de = p(E, N, _, z, x, k)
                de && ($ === 'thead' ? V.push(de) : $ === 'tfoot' ? P.push(de) : Q.push(de))
              }
              return { head: V, body: Q, foot: P }
            }
            c.parseHtml = v
            function p(w, L, _, x, k, C) {
              for (var D = new g.HtmlRowInput(x), U = 0; U < x.cells.length; U++) {
                var E = x.cells[U],
                  N = _.getComputedStyle(E)
                if (k || N.display !== 'none') {
                  var V = void 0
                  C && (V = (0, h.parseCss)(w, E, L, N, _)), D.push({ rowSpan: E.rowSpan, colSpan: E.colSpan, styles: V, _element: E, content: b(E) })
                }
              }
              var Q = _.getComputedStyle(x)
              if (D.length > 0 && (k || Q.display !== 'none')) return D
            }
            function b(w) {
              var L = w.cloneNode(!0)
              return (
                (L.innerHTML = L.innerHTML.replace(/\n/g, '').replace(/ +/g, ' ')),
                (L.innerHTML = L.innerHTML.split(/<br.*?>/).map(function (_) {
                  return _.trim()
                }).join(`
`)),
                L.innerText || L.textContent || ''
              )
            }
          },
          587: function (l, c, f) {
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.parseInput = void 0)
            var h = f(148),
              g = f(360),
              v = f(200),
              p = f(323),
              b = f(291)
            function w(U, E) {
              var N = new p.DocHandler(U),
                V = N.getDocumentOptions(),
                Q = N.getGlobalOptions()
              ;(0, b.default)(N, Q, V, E)
              var P = (0, g.assign)({}, Q, V, E),
                S
              typeof window < 'u' && (S = window)
              var z = L(Q, V, E),
                $ = _(Q, V, E),
                de = x(N, P),
                W = C(N, P, S)
              return { id: E.tableId, content: W, hooks: $, styles: z, settings: de }
            }
            c.parseInput = w
            function L(U, E, N) {
              for (
                var V = { styles: {}, headStyles: {}, bodyStyles: {}, footStyles: {}, alternateRowStyles: {}, columnStyles: {} },
                  Q = function ($) {
                    if ($ === 'columnStyles') {
                      var de = U[$],
                        W = E[$],
                        H = N[$]
                      V.columnStyles = (0, g.assign)({}, de, W, H)
                    } else {
                      var X = [U, E, N],
                        ne = X.map(function (fe) {
                          return fe[$] || {}
                        })
                      V[$] = (0, g.assign)({}, ne[0], ne[1], ne[2])
                    }
                  },
                  P = 0,
                  S = Object.keys(V);
                P < S.length;
                P++
              ) {
                var z = S[P]
                Q(z)
              }
              return V
            }
            function _(U, E, N) {
              for (
                var V = [U, E, N], Q = { didParseCell: [], willDrawCell: [], didDrawCell: [], willDrawPage: [], didDrawPage: [] }, P = 0, S = V;
                P < S.length;
                P++
              ) {
                var z = S[P]
                z.didParseCell && Q.didParseCell.push(z.didParseCell),
                  z.willDrawCell && Q.willDrawCell.push(z.willDrawCell),
                  z.didDrawCell && Q.didDrawCell.push(z.didDrawCell),
                  z.willDrawPage && Q.willDrawPage.push(z.willDrawPage),
                  z.didDrawPage && Q.didDrawPage.push(z.didDrawPage)
              }
              return Q
            }
            function x(U, E) {
              var N,
                V,
                Q,
                P,
                S,
                z,
                $,
                de,
                W,
                H,
                X,
                ne,
                fe = (0, v.parseSpacing)(E.margin, 40 / U.scaleFactor()),
                xe = (N = k(U, E.startY)) !== null && N !== void 0 ? N : fe.top,
                A
              E.showFoot === !0
                ? (A = 'everyPage')
                : E.showFoot === !1
                  ? (A = 'never')
                  : (A = (V = E.showFoot) !== null && V !== void 0 ? V : 'everyPage')
              var B
              E.showHead === !0
                ? (B = 'everyPage')
                : E.showHead === !1
                  ? (B = 'never')
                  : (B = (Q = E.showHead) !== null && Q !== void 0 ? Q : 'everyPage')
              var G = (P = E.useCss) !== null && P !== void 0 ? P : !1,
                ee = E.theme || (G ? 'plain' : 'striped'),
                re = !!E.horizontalPageBreak,
                Y = (S = E.horizontalPageBreakRepeat) !== null && S !== void 0 ? S : null
              return {
                includeHiddenHtml: (z = E.includeHiddenHtml) !== null && z !== void 0 ? z : !1,
                useCss: G,
                theme: ee,
                startY: xe,
                margin: fe,
                pageBreak: ($ = E.pageBreak) !== null && $ !== void 0 ? $ : 'auto',
                rowPageBreak: (de = E.rowPageBreak) !== null && de !== void 0 ? de : 'auto',
                tableWidth: (W = E.tableWidth) !== null && W !== void 0 ? W : 'auto',
                showHead: B,
                showFoot: A,
                tableLineWidth: (H = E.tableLineWidth) !== null && H !== void 0 ? H : 0,
                tableLineColor: (X = E.tableLineColor) !== null && X !== void 0 ? X : 200,
                horizontalPageBreak: re,
                horizontalPageBreakRepeat: Y,
                horizontalPageBreakBehaviour: (ne = E.horizontalPageBreakBehaviour) !== null && ne !== void 0 ? ne : 'afterAllRows'
              }
            }
            function k(U, E) {
              var N = U.getLastAutoTable(),
                V = U.scaleFactor(),
                Q = U.pageNumber(),
                P = !1
              if (N && N.startPageNumber) {
                var S = N.startPageNumber + N.pageNumber - 1
                P = S === Q
              }
              return typeof E == 'number' ? E : (E == null || E === !1) && P && (N == null ? void 0 : N.finalY) != null ? N.finalY + 20 / V : null
            }
            function C(U, E, N) {
              var V = E.head || [],
                Q = E.body || [],
                P = E.foot || []
              if (E.html) {
                var S = E.includeHiddenHtml
                if (N) {
                  var z = (0, h.parseHtml)(U, E.html, N, S, E.useCss) || {}
                  ;(V = z.head || V), (Q = z.body || V), (P = z.foot || V)
                } else console.error('Cannot parse html in non browser environment')
              }
              var $ = E.columns || D(V, Q, P)
              return { columns: $, head: V, body: Q, foot: P }
            }
            function D(U, E, N) {
              var V = U[0] || E[0] || N[0] || [],
                Q = []
              return (
                Object.keys(V)
                  .filter(function (P) {
                    return P !== '_element'
                  })
                  .forEach(function (P) {
                    var S = 1,
                      z
                    Array.isArray(V) ? (z = V[parseInt(P)]) : (z = V[P]),
                      typeof z == 'object' && !Array.isArray(z) && (S = (z == null ? void 0 : z.colSpan) || 1)
                    for (var $ = 0; $ < S; $++) {
                      var de = void 0
                      Array.isArray(V) ? (de = Q.length) : (de = P + ($ > 0 ? '_'.concat($) : ''))
                      var W = { dataKey: de }
                      Q.push(W)
                    }
                  }),
                Q
              )
            }
          },
          291: function (l, c) {
            Object.defineProperty(c, '__esModule', { value: !0 })
            function f(g, v, p, b) {
              for (
                var w = function (k) {
                    k && typeof k != 'object' && console.error('The options parameter should be of type object, is: ' + typeof k),
                      typeof k.extendWidth < 'u' &&
                        ((k.tableWidth = k.extendWidth ? 'auto' : 'wrap'),
                        console.error('Use of deprecated option: extendWidth, use tableWidth instead.')),
                      typeof k.margins < 'u' &&
                        (typeof k.margin > 'u' && (k.margin = k.margins), console.error('Use of deprecated option: margins, use margin instead.')),
                      k.startY && typeof k.startY != 'number' && (console.error('Invalid value for startY option', k.startY), delete k.startY),
                      !k.didDrawPage &&
                        (k.afterPageContent || k.beforePageContent || k.afterPageAdd) &&
                        (console.error('The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead'),
                        (k.didDrawPage = function (P) {
                          g.applyStyles(g.userStyles),
                            k.beforePageContent && k.beforePageContent(P),
                            g.applyStyles(g.userStyles),
                            k.afterPageContent && k.afterPageContent(P),
                            g.applyStyles(g.userStyles),
                            k.afterPageAdd && P.pageNumber > 1 && P.afterPageAdd(P),
                            g.applyStyles(g.userStyles)
                        })),
                      ['createdHeaderCell', 'drawHeaderRow', 'drawRow', 'drawHeaderCell'].forEach(function (P) {
                        k[P] && console.error('The "'.concat(P, '" hook has changed in version 3.0, check the changelog for how to migrate.'))
                      }),
                      [
                        ['showFoot', 'showFooter'],
                        ['showHead', 'showHeader'],
                        ['didDrawPage', 'addPageContent'],
                        ['didParseCell', 'createdCell'],
                        ['headStyles', 'headerStyles']
                      ].forEach(function (P) {
                        var S = P[0],
                          z = P[1]
                        k[z] && (console.error('Use of deprecated option '.concat(z, '. Use ').concat(S, ' instead')), (k[S] = k[z]))
                      }),
                      [['padding', 'cellPadding'], ['lineHeight', 'rowHeight'], 'fontSize', 'overflow'].forEach(function (P) {
                        var S = typeof P == 'string' ? P : P[0],
                          z = typeof P == 'string' ? P : P[1]
                        typeof k[S] < 'u' &&
                          (typeof k.styles[z] > 'u' && (k.styles[z] = k[S]),
                          console.error('Use of deprecated option: ' + S + ', use the style ' + z + ' instead.'))
                      })
                    for (var C = 0, D = ['styles', 'bodyStyles', 'headStyles', 'footStyles']; C < D.length; C++) {
                      var U = D[C]
                      h(k[U] || {})
                    }
                    for (var E = k.columnStyles || {}, N = 0, V = Object.keys(E); N < V.length; N++) {
                      var Q = V[N]
                      h(E[Q] || {})
                    }
                  },
                  L = 0,
                  _ = [v, p, b];
                L < _.length;
                L++
              ) {
                var x = _[L]
                w(x)
              }
            }
            c.default = f
            function h(g) {
              g.rowHeight
                ? (console.error('Use of deprecated style rowHeight. It is renamed to minCellHeight.'),
                  g.minCellHeight || (g.minCellHeight = g.rowHeight))
                : g.columnWidth &&
                  (console.error('Use of deprecated style columnWidth. It is renamed to cellWidth.'), g.cellWidth || (g.cellWidth = g.columnWidth))
            }
          },
          287: function (l, c, f) {
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.Column = c.Cell = c.Row = c.Table = void 0)
            var h = f(913),
              g = f(662),
              v = f(200),
              p = (function () {
                function _(x, k) {
                  ;(this.pageNumber = 1),
                    (this.pageCount = 1),
                    (this.id = x.id),
                    (this.settings = x.settings),
                    (this.styles = x.styles),
                    (this.hooks = x.hooks),
                    (this.columns = k.columns),
                    (this.head = k.head),
                    (this.body = k.body),
                    (this.foot = k.foot)
                }
                return (
                  (_.prototype.getHeadHeight = function (x) {
                    return this.head.reduce(function (k, C) {
                      return k + C.getMaxCellHeight(x)
                    }, 0)
                  }),
                  (_.prototype.getFootHeight = function (x) {
                    return this.foot.reduce(function (k, C) {
                      return k + C.getMaxCellHeight(x)
                    }, 0)
                  }),
                  (_.prototype.allRows = function () {
                    return this.head.concat(this.body).concat(this.foot)
                  }),
                  (_.prototype.callCellHooks = function (x, k, C, D, U, E) {
                    for (var N = 0, V = k; N < V.length; N++) {
                      var Q = V[N],
                        P = new g.CellHookData(x, this, C, D, U, E),
                        S = Q(P) === !1
                      if (((C.text = Array.isArray(C.text) ? C.text : [C.text]), S)) return !1
                    }
                    return !0
                  }),
                  (_.prototype.callEndPageHooks = function (x, k) {
                    x.applyStyles(x.userStyles)
                    for (var C = 0, D = this.hooks.didDrawPage; C < D.length; C++) {
                      var U = D[C]
                      U(new g.HookData(x, this, k))
                    }
                  }),
                  (_.prototype.callWillDrawPageHooks = function (x, k) {
                    for (var C = 0, D = this.hooks.willDrawPage; C < D.length; C++) {
                      var U = D[C]
                      U(new g.HookData(x, this, k))
                    }
                  }),
                  (_.prototype.getWidth = function (x) {
                    if (typeof this.settings.tableWidth == 'number') return this.settings.tableWidth
                    if (this.settings.tableWidth === 'wrap') {
                      var k = this.columns.reduce(function (D, U) {
                        return D + U.wrappedWidth
                      }, 0)
                      return k
                    } else {
                      var C = this.settings.margin
                      return x - C.left - C.right
                    }
                  }),
                  _
                )
              })()
            c.Table = p
            var b = (function () {
              function _(x, k, C, D, U) {
                U === void 0 && (U = !1),
                  (this.height = 0),
                  (this.raw = x),
                  x instanceof h.HtmlRowInput && ((this.raw = x._element), (this.element = x._element)),
                  (this.index = k),
                  (this.section = C),
                  (this.cells = D),
                  (this.spansMultiplePages = U)
              }
              return (
                (_.prototype.getMaxCellHeight = function (x) {
                  var k = this
                  return x.reduce(function (C, D) {
                    var U
                    return Math.max(C, ((U = k.cells[D.index]) === null || U === void 0 ? void 0 : U.height) || 0)
                  }, 0)
                }),
                (_.prototype.hasRowSpan = function (x) {
                  var k = this
                  return (
                    x.filter(function (C) {
                      var D = k.cells[C.index]
                      return D ? D.rowSpan > 1 : !1
                    }).length > 0
                  )
                }),
                (_.prototype.canEntireRowFit = function (x, k) {
                  return this.getMaxCellHeight(k) <= x
                }),
                (_.prototype.getMinimumRowHeight = function (x, k) {
                  var C = this
                  return x.reduce(function (D, U) {
                    var E = C.cells[U.index]
                    if (!E) return 0
                    var N = k.getLineHeight(E.styles.fontSize),
                      V = E.padding('vertical'),
                      Q = V + N
                    return Q > D ? Q : D
                  }, 0)
                }),
                _
              )
            })()
            c.Row = b
            var w = (function () {
              function _(x, k, C) {
                var D, U
                ;(this.contentHeight = 0),
                  (this.contentWidth = 0),
                  (this.wrappedWidth = 0),
                  (this.minReadableWidth = 0),
                  (this.minWidth = 0),
                  (this.width = 0),
                  (this.height = 0),
                  (this.x = 0),
                  (this.y = 0),
                  (this.styles = k),
                  (this.section = C),
                  (this.raw = x)
                var E = x
                x != null && typeof x == 'object' && !Array.isArray(x)
                  ? ((this.rowSpan = x.rowSpan || 1),
                    (this.colSpan = x.colSpan || 1),
                    (E = (U = (D = x.content) !== null && D !== void 0 ? D : x.title) !== null && U !== void 0 ? U : x),
                    x._element && (this.raw = x._element))
                  : ((this.rowSpan = 1), (this.colSpan = 1))
                var N = E != null ? '' + E : '',
                  V = /\r\n|\r|\n/g
                this.text = N.split(V)
              }
              return (
                (_.prototype.getTextPos = function () {
                  var x
                  if (this.styles.valign === 'top') x = this.y + this.padding('top')
                  else if (this.styles.valign === 'bottom') x = this.y + this.height - this.padding('bottom')
                  else {
                    var k = this.height - this.padding('vertical')
                    x = this.y + k / 2 + this.padding('top')
                  }
                  var C
                  if (this.styles.halign === 'right') C = this.x + this.width - this.padding('right')
                  else if (this.styles.halign === 'center') {
                    var D = this.width - this.padding('horizontal')
                    C = this.x + D / 2 + this.padding('left')
                  } else C = this.x + this.padding('left')
                  return { x: C, y: x }
                }),
                (_.prototype.getContentHeight = function (x, k) {
                  k === void 0 && (k = 1.15)
                  var C = Array.isArray(this.text) ? this.text.length : 1,
                    D = (this.styles.fontSize / x) * k,
                    U = C * D + this.padding('vertical')
                  return Math.max(U, this.styles.minCellHeight)
                }),
                (_.prototype.padding = function (x) {
                  var k = (0, v.parseSpacing)(this.styles.cellPadding, 0)
                  return x === 'vertical' ? k.top + k.bottom : x === 'horizontal' ? k.left + k.right : k[x]
                }),
                _
              )
            })()
            c.Cell = w
            var L = (function () {
              function _(x, k, C) {
                ;(this.wrappedWidth = 0),
                  (this.minReadableWidth = 0),
                  (this.minWidth = 0),
                  (this.width = 0),
                  (this.dataKey = x),
                  (this.raw = k),
                  (this.index = C)
              }
              return (
                (_.prototype.getMaxCustomCellWidth = function (x) {
                  for (var k = 0, C = 0, D = x.allRows(); C < D.length; C++) {
                    var U = D[C],
                      E = U.cells[this.index]
                    E && typeof E.styles.cellWidth == 'number' && (k = Math.max(k, E.styles.cellWidth))
                  }
                  return k
                }),
                _
              )
            })()
            c.Column = L
          },
          360: function (l, c) {
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.assign = void 0)
            function f(h, g, v, p, b) {
              if (h == null) throw new TypeError('Cannot convert undefined or null to object')
              for (var w = Object(h), L = 1; L < arguments.length; L++) {
                var _ = arguments[L]
                if (_ != null) for (var x in _) Object.prototype.hasOwnProperty.call(_, x) && (w[x] = _[x])
              }
              return w
            }
            c.assign = f
          },
          858: function (l, c, f) {
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.createTable = void 0)
            var h = f(323),
              g = f(287),
              v = f(189),
              p = f(913),
              b = f(360)
            function w(U, E) {
              var N = new h.DocHandler(U),
                V = L(E, N.scaleFactor()),
                Q = new g.Table(E, V)
              return (0, v.calculateWidths)(N, Q), N.applyStyles(N.userStyles), Q
            }
            c.createTable = w
            function L(U, E) {
              var N = U.content,
                V = C(N.columns)
              if (N.head.length === 0) {
                var Q = x(V, 'head')
                Q && N.head.push(Q)
              }
              if (N.foot.length === 0) {
                var Q = x(V, 'foot')
                Q && N.foot.push(Q)
              }
              var P = U.settings.theme,
                S = U.styles
              return { columns: V, head: _('head', N.head, V, S, P, E), body: _('body', N.body, V, S, P, E), foot: _('foot', N.foot, V, S, P, E) }
            }
            function _(U, E, N, V, Q, P) {
              var S = {},
                z = E.map(function ($, de) {
                  for (var W = 0, H = {}, X = 0, ne = 0, fe = 0, xe = N; fe < xe.length; fe++) {
                    var A = xe[fe]
                    if (S[A.index] == null || S[A.index].left === 0)
                      if (ne === 0) {
                        var B = void 0
                        Array.isArray($) ? (B = $[A.index - X - W]) : (B = $[A.dataKey])
                        var G = {}
                        typeof B == 'object' && !Array.isArray(B) && (G = (B == null ? void 0 : B.styles) || {})
                        var ee = D(U, A, de, Q, V, P, G),
                          re = new g.Cell(B, ee, U)
                        ;(H[A.dataKey] = re), (H[A.index] = re), (ne = re.colSpan - 1), (S[A.index] = { left: re.rowSpan - 1, times: ne })
                      } else ne--, X++
                    else S[A.index].left--, (ne = S[A.index].times), W++
                  }
                  return new g.Row($, de, U, H)
                })
              return z
            }
            function x(U, E) {
              var N = {}
              return (
                U.forEach(function (V) {
                  if (V.raw != null) {
                    var Q = k(E, V.raw)
                    Q != null && (N[V.dataKey] = Q)
                  }
                }),
                Object.keys(N).length > 0 ? N : null
              )
            }
            function k(U, E) {
              if (U === 'head') {
                if (typeof E == 'object') return E.header || E.title || null
                if (typeof E == 'string' || typeof E == 'number') return E
              } else if (U === 'foot' && typeof E == 'object') return E.footer
              return null
            }
            function C(U) {
              return U.map(function (E, N) {
                var V, Q, P
                return (
                  typeof E == 'object' ? (P = (Q = (V = E.dataKey) !== null && V !== void 0 ? V : E.key) !== null && Q !== void 0 ? Q : N) : (P = N),
                  new g.Column(P, E, N)
                )
              })
            }
            function D(U, E, N, V, Q, P, S) {
              var z = (0, p.getTheme)(V),
                $
              U === 'head' ? ($ = Q.headStyles) : U === 'body' ? ($ = Q.bodyStyles) : U === 'foot' && ($ = Q.footStyles)
              var de = (0, b.assign)({}, z.table, z[U], Q.styles, $),
                W = Q.columnStyles[E.dataKey] || Q.columnStyles[E.index] || {},
                H = U === 'body' ? W : {},
                X = U === 'body' && N % 2 === 0 ? (0, b.assign)({}, z.alternateRow, Q.alternateRowStyles) : {},
                ne = (0, p.defaultStyles)(P),
                fe = (0, b.assign)({}, ne, de, X, H)
              return (0, b.assign)(fe, S)
            }
          },
          49: function (l, c, f) {
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.addPage = c.drawTable = void 0)
            var h = f(200),
              g = f(287),
              v = f(323),
              p = f(360),
              b = f(938),
              w = f(435)
            function L(W, H) {
              var X = H.settings,
                ne = X.startY,
                fe = X.margin,
                xe = { x: fe.left, y: ne },
                A = H.getHeadHeight(H.columns) + H.getFootHeight(H.columns),
                B = ne + fe.bottom + A
              if (X.pageBreak === 'avoid') {
                var G = H.body,
                  ee = G.reduce(function (oe, se) {
                    return oe + se.height
                  }, 0)
                B += ee
              }
              var re = new v.DocHandler(W)
              ;(X.pageBreak === 'always' || (X.startY != null && B > re.pageSize().height)) && (de(re), (xe.y = fe.top)),
                H.callWillDrawPageHooks(re, xe)
              var Y = (0, p.assign)({}, xe)
              ;(H.startPageNumber = re.pageNumber()),
                X.horizontalPageBreak
                  ? _(re, H, Y, xe)
                  : (re.applyStyles(re.userStyles),
                    (X.showHead === 'firstPage' || X.showHead === 'everyPage') &&
                      H.head.forEach(function (oe) {
                        return Q(re, H, oe, xe, H.columns)
                      }),
                    re.applyStyles(re.userStyles),
                    H.body.forEach(function (oe, se) {
                      var Se = se === H.body.length - 1
                      V(re, H, oe, Se, Y, xe, H.columns)
                    }),
                    re.applyStyles(re.userStyles),
                    (X.showFoot === 'lastPage' || X.showFoot === 'everyPage') &&
                      H.foot.forEach(function (oe) {
                        return Q(re, H, oe, xe, H.columns)
                      })),
                (0, h.addTableBorder)(re, H, Y, xe),
                H.callEndPageHooks(re, xe),
                (H.finalY = xe.y),
                (W.lastAutoTable = H),
                (W.previousAutoTable = H),
                W.autoTable && (W.autoTable.previous = H),
                re.applyStyles(re.userStyles)
            }
            c.drawTable = L
            function _(W, H, X, ne) {
              var fe = (0, w.calculateAllColumnsCanFitInPage)(W, H),
                xe = H.settings
              if (xe.horizontalPageBreakBehaviour === 'afterAllRows')
                fe.forEach(function (ee, re) {
                  W.applyStyles(W.userStyles),
                    re > 0 ? $(W, H, X, ne, ee.columns, !0) : x(W, H, ne, ee.columns),
                    k(W, H, X, ne, ee.columns),
                    D(W, H, ne, ee.columns)
                })
              else
                for (
                  var A = -1,
                    B = fe[0],
                    G = function () {
                      var ee = A
                      if (B) {
                        W.applyStyles(W.userStyles)
                        var re = B.columns
                        A >= 0 ? $(W, H, X, ne, re, !0) : x(W, H, ne, re), (ee = C(W, H, A + 1, ne, re)), D(W, H, ne, re)
                      }
                      var Y = ee - A
                      fe.slice(1).forEach(function (oe) {
                        W.applyStyles(W.userStyles), $(W, H, X, ne, oe.columns, !0), C(W, H, A + 1, ne, oe.columns, Y), D(W, H, ne, oe.columns)
                      }),
                        (A = ee)
                    };
                  A < H.body.length - 1;

                )
                  G()
            }
            function x(W, H, X, ne) {
              var fe = H.settings
              W.applyStyles(W.userStyles),
                (fe.showHead === 'firstPage' || fe.showHead === 'everyPage') &&
                  H.head.forEach(function (xe) {
                    return Q(W, H, xe, X, ne)
                  })
            }
            function k(W, H, X, ne, fe) {
              W.applyStyles(W.userStyles),
                H.body.forEach(function (xe, A) {
                  var B = A === H.body.length - 1
                  V(W, H, xe, B, X, ne, fe)
                })
            }
            function C(W, H, X, ne, fe, xe) {
              W.applyStyles(W.userStyles), (xe = xe ?? H.body.length)
              var A = Math.min(X + xe, H.body.length),
                B = -1
              return (
                H.body.slice(X, A).forEach(function (G, ee) {
                  var re = X + ee === H.body.length - 1,
                    Y = z(W, H, re, ne)
                  G.canEntireRowFit(Y, fe) && (Q(W, H, G, ne, fe), (B = X + ee))
                }),
                B
              )
            }
            function D(W, H, X, ne) {
              var fe = H.settings
              W.applyStyles(W.userStyles),
                (fe.showFoot === 'lastPage' || fe.showFoot === 'everyPage') &&
                  H.foot.forEach(function (xe) {
                    return Q(W, H, xe, X, ne)
                  })
            }
            function U(W, H, X) {
              var ne = X.getLineHeight(W.styles.fontSize),
                fe = W.padding('vertical'),
                xe = Math.floor((H - fe) / ne)
              return Math.max(0, xe)
            }
            function E(W, H, X, ne) {
              var fe = {}
              ;(W.spansMultiplePages = !0), (W.height = 0)
              for (var xe = 0, A = 0, B = X.columns; A < B.length; A++) {
                var G = B[A],
                  ee = W.cells[G.index]
                if (ee) {
                  Array.isArray(ee.text) || (ee.text = [ee.text])
                  var re = new g.Cell(ee.raw, ee.styles, ee.section)
                  ;(re = (0, p.assign)(re, ee)), (re.text = [])
                  var Y = U(ee, H, ne)
                  ee.text.length > Y && (re.text = ee.text.splice(Y, ee.text.length))
                  var oe = ne.scaleFactor(),
                    se = ne.getLineHeightFactor()
                  ;(ee.contentHeight = ee.getContentHeight(oe, se)),
                    ee.contentHeight >= H && ((ee.contentHeight = H), (re.styles.minCellHeight -= H)),
                    ee.contentHeight > W.height && (W.height = ee.contentHeight),
                    (re.contentHeight = re.getContentHeight(oe, se)),
                    re.contentHeight > xe && (xe = re.contentHeight),
                    (fe[G.index] = re)
                }
              }
              var Se = new g.Row(W.raw, -1, W.section, fe, !0)
              Se.height = xe
              for (var je = 0, q = X.columns; je < q.length; je++) {
                var G = q[je],
                  re = Se.cells[G.index]
                re && (re.height = Se.height)
                var ee = W.cells[G.index]
                ee && (ee.height = W.height)
              }
              return Se
            }
            function N(W, H, X, ne) {
              var fe = W.pageSize().height,
                xe = ne.settings.margin,
                A = xe.top + xe.bottom,
                B = fe - A
              H.section === 'body' && (B -= ne.getHeadHeight(ne.columns) + ne.getFootHeight(ne.columns))
              var G = H.getMinimumRowHeight(ne.columns, W),
                ee = G < X
              if (G > B)
                return (
                  console.error('Will not be able to print row '.concat(H.index, " correctly since it's minimum height is larger than page height")), !0
                )
              if (!ee) return !1
              var re = H.hasRowSpan(ne.columns),
                Y = H.getMaxCellHeight(ne.columns) > B
              return Y
                ? (re &&
                    console.error(
                      'The content of row '.concat(
                        H.index,
                        ' will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.'
                      )
                    ),
                  !0)
                : !(re || ne.settings.rowPageBreak === 'avoid')
            }
            function V(W, H, X, ne, fe, xe, A) {
              var B = z(W, H, ne, xe)
              if (X.canEntireRowFit(B, A)) Q(W, H, X, xe, A)
              else if (N(W, X, B, H)) {
                var G = E(X, B, H, W)
                Q(W, H, X, xe, A), $(W, H, fe, xe, A), V(W, H, G, ne, fe, xe, A)
              } else $(W, H, fe, xe, A), V(W, H, X, ne, fe, xe, A)
            }
            function Q(W, H, X, ne, fe) {
              ne.x = H.settings.margin.left
              for (var xe = 0, A = fe; xe < A.length; xe++) {
                var B = A[xe],
                  G = X.cells[B.index]
                if (!G) {
                  ne.x += B.width
                  continue
                }
                W.applyStyles(G.styles), (G.x = ne.x), (G.y = ne.y)
                var ee = H.callCellHooks(W, H.hooks.willDrawCell, G, X, B, ne)
                if (ee === !1) {
                  ne.x += B.width
                  continue
                }
                P(W, G, ne)
                var re = G.getTextPos()
                ;(0, b.default)(
                  G.text,
                  re.x,
                  re.y,
                  { halign: G.styles.halign, valign: G.styles.valign, maxWidth: Math.ceil(G.width - G.padding('left') - G.padding('right')) },
                  W.getDocument()
                ),
                  H.callCellHooks(W, H.hooks.didDrawCell, G, X, B, ne),
                  (ne.x += B.width)
              }
              ne.y += X.height
            }
            function P(W, H, X) {
              var ne = H.styles
              if ((W.getDocument().setFillColor(W.getDocument().getFillColor()), typeof ne.lineWidth == 'number')) {
                var fe = (0, h.getFillStyle)(ne.lineWidth, ne.fillColor)
                fe && W.rect(H.x, X.y, H.width, H.height, fe)
              } else typeof ne.lineWidth == 'object' && (ne.fillColor && W.rect(H.x, X.y, H.width, H.height, 'F'), S(W, H, X, ne.lineWidth))
            }
            function S(W, H, X, ne) {
              var fe, xe, A, B
              ne.top &&
                ((fe = X.x),
                (xe = X.y),
                (A = X.x + H.width),
                (B = X.y),
                ne.right && (A += 0.5 * ne.right),
                ne.left && (fe -= 0.5 * ne.left),
                G(ne.top, fe, xe, A, B)),
                ne.bottom &&
                  ((fe = X.x),
                  (xe = X.y + H.height),
                  (A = X.x + H.width),
                  (B = X.y + H.height),
                  ne.right && (A += 0.5 * ne.right),
                  ne.left && (fe -= 0.5 * ne.left),
                  G(ne.bottom, fe, xe, A, B)),
                ne.left &&
                  ((fe = X.x),
                  (xe = X.y),
                  (A = X.x),
                  (B = X.y + H.height),
                  ne.top && (xe -= 0.5 * ne.top),
                  ne.bottom && (B += 0.5 * ne.bottom),
                  G(ne.left, fe, xe, A, B)),
                ne.right &&
                  ((fe = X.x + H.width),
                  (xe = X.y),
                  (A = X.x + H.width),
                  (B = X.y + H.height),
                  ne.top && (xe -= 0.5 * ne.top),
                  ne.bottom && (B += 0.5 * ne.bottom),
                  G(ne.right, fe, xe, A, B))
              function G(ee, re, Y, oe, se) {
                W.getDocument().setLineWidth(ee), W.getDocument().line(re, Y, oe, se, 'S')
              }
            }
            function z(W, H, X, ne) {
              var fe = H.settings.margin.bottom,
                xe = H.settings.showFoot
              return (xe === 'everyPage' || (xe === 'lastPage' && X)) && (fe += H.getFootHeight(H.columns)), W.pageSize().height - ne.y - fe
            }
            function $(W, H, X, ne, fe, xe) {
              fe === void 0 && (fe = []),
                xe === void 0 && (xe = !1),
                W.applyStyles(W.userStyles),
                H.settings.showFoot === 'everyPage' &&
                  !xe &&
                  H.foot.forEach(function (B) {
                    return Q(W, H, B, ne, fe)
                  }),
                H.callEndPageHooks(W, ne)
              var A = H.settings.margin
              ;(0, h.addTableBorder)(W, H, X, ne),
                de(W),
                H.pageNumber++,
                H.pageCount++,
                (ne.x = A.left),
                (ne.y = A.top),
                (X.y = A.top),
                H.callWillDrawPageHooks(W, ne),
                H.settings.showHead === 'everyPage' &&
                  (H.head.forEach(function (B) {
                    return Q(W, H, B, ne, fe)
                  }),
                  W.applyStyles(W.userStyles))
            }
            c.addPage = $
            function de(W) {
              var H = W.pageNumber()
              W.setPage(H + 1)
              var X = W.pageNumber()
              return X === H ? (W.addPage(), !0) : !1
            }
          },
          435: function (l, c, f) {
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.calculateAllColumnsCanFitInPage = void 0)
            var h = f(200)
            function g(p, b, w) {
              var L
              w === void 0 && (w = {})
              var _ = (0, h.getPageAvailableWidth)(p, b),
                x = new Map(),
                k = [],
                C = [],
                D = []
              b.settings.horizontalPageBreakRepeat,
                Array.isArray(b.settings.horizontalPageBreakRepeat)
                  ? (D = b.settings.horizontalPageBreakRepeat)
                  : (typeof b.settings.horizontalPageBreakRepeat == 'string' || typeof b.settings.horizontalPageBreakRepeat == 'number') &&
                    (D = [b.settings.horizontalPageBreakRepeat]),
                D.forEach(function (V) {
                  var Q = b.columns.find(function (P) {
                    return P.dataKey === V || P.index === V
                  })
                  Q && !x.has(Q.index) && (x.set(Q.index, !0), k.push(Q.index), C.push(b.columns[Q.index]), (_ -= Q.wrappedWidth))
                })
              for (var U = !0, E = (L = w == null ? void 0 : w.start) !== null && L !== void 0 ? L : 0; E < b.columns.length; ) {
                if (x.has(E)) {
                  E++
                  continue
                }
                var N = b.columns[E].wrappedWidth
                if (U || _ >= N) (U = !1), k.push(E), C.push(b.columns[E]), (_ -= N)
                else break
                E++
              }
              return { colIndexes: k, columns: C, lastIndex: E - 1 }
            }
            function v(p, b) {
              for (var w = [], L = 0; L < b.columns.length; L++) {
                var _ = g(p, b, { start: L })
                _.columns.length && (w.push(_), (L = _.lastIndex))
              }
              return w
            }
            c.calculateAllColumnsCanFitInPage = v
          },
          189: function (l, c, f) {
            Object.defineProperty(c, '__esModule', { value: !0 }), (c.ellipsize = c.resizeColumns = c.calculateWidths = void 0)
            var h = f(200)
            function g(k, C) {
              v(k, C)
              var D = [],
                U = 0
              C.columns.forEach(function (N) {
                var V = N.getMaxCustomCellWidth(C)
                V ? (N.width = V) : ((N.width = N.wrappedWidth), D.push(N)), (U += N.width)
              })
              var E = C.getWidth(k.pageSize().width) - U
              E &&
                (E = p(D, E, function (N) {
                  return Math.max(N.minReadableWidth, N.minWidth)
                })),
                E &&
                  (E = p(D, E, function (N) {
                    return N.minWidth
                  })),
                (E = Math.abs(E)),
                !C.settings.horizontalPageBreak &&
                  E > 0.1 / k.scaleFactor() &&
                  ((E = E < 1 ? E : Math.round(E)), console.warn('Of the table content, '.concat(E, ' units width could not fit page'))),
                w(C),
                L(C, k),
                b(C)
            }
            c.calculateWidths = g
            function v(k, C) {
              var D = k.scaleFactor(),
                U = C.settings.horizontalPageBreak,
                E = (0, h.getPageAvailableWidth)(k, C)
              C.allRows().forEach(function (N) {
                for (var V = 0, Q = C.columns; V < Q.length; V++) {
                  var P = Q[V],
                    S = N.cells[P.index]
                  if (S) {
                    var z = C.hooks.didParseCell
                    C.callCellHooks(k, z, S, N, P, null)
                    var $ = S.padding('horizontal')
                    S.contentWidth = (0, h.getStringWidth)(S.text, S.styles, k) + $
                    var de = (0, h.getStringWidth)(S.text.join(' ').split(/\s+/), S.styles, k)
                    if (((S.minReadableWidth = de + S.padding('horizontal')), typeof S.styles.cellWidth == 'number'))
                      (S.minWidth = S.styles.cellWidth), (S.wrappedWidth = S.styles.cellWidth)
                    else if (S.styles.cellWidth === 'wrap' || U === !0)
                      S.contentWidth > E ? ((S.minWidth = E), (S.wrappedWidth = E)) : ((S.minWidth = S.contentWidth), (S.wrappedWidth = S.contentWidth))
                    else {
                      var W = 10 / D
                      ;(S.minWidth = S.styles.minCellWidth || W),
                        (S.wrappedWidth = S.contentWidth),
                        S.minWidth > S.wrappedWidth && (S.wrappedWidth = S.minWidth)
                    }
                  }
                }
              }),
                C.allRows().forEach(function (N) {
                  for (var V = 0, Q = C.columns; V < Q.length; V++) {
                    var P = Q[V],
                      S = N.cells[P.index]
                    if (S && S.colSpan === 1)
                      (P.wrappedWidth = Math.max(P.wrappedWidth, S.wrappedWidth)),
                        (P.minWidth = Math.max(P.minWidth, S.minWidth)),
                        (P.minReadableWidth = Math.max(P.minReadableWidth, S.minReadableWidth))
                    else {
                      var z = C.styles.columnStyles[P.dataKey] || C.styles.columnStyles[P.index] || {},
                        $ = z.cellWidth || z.minCellWidth
                      $ && typeof $ == 'number' && ((P.minWidth = $), (P.wrappedWidth = $))
                    }
                    S && (S.colSpan > 1 && !P.minWidth && (P.minWidth = S.minWidth), S.colSpan > 1 && !P.wrappedWidth && (P.wrappedWidth = S.minWidth))
                  }
                })
            }
            function p(k, C, D) {
              for (
                var U = C,
                  E = k.reduce(function (W, H) {
                    return W + H.wrappedWidth
                  }, 0),
                  N = 0;
                N < k.length;
                N++
              ) {
                var V = k[N],
                  Q = V.wrappedWidth / E,
                  P = U * Q,
                  S = V.width + P,
                  z = D(V),
                  $ = S < z ? z : S
                ;(C -= $ - V.width), (V.width = $)
              }
              if (((C = Math.round(C * 1e10) / 1e10), C)) {
                var de = k.filter(function (W) {
                  return C < 0 ? W.width > D(W) : !0
                })
                de.length && (C = p(de, C, D))
              }
              return C
            }
            c.resizeColumns = p
            function b(k) {
              for (var C = {}, D = 1, U = k.allRows(), E = 0; E < U.length; E++)
                for (var N = U[E], V = 0, Q = k.columns; V < Q.length; V++) {
                  var P = Q[V],
                    S = C[P.index]
                  if (D > 1) D--, delete N.cells[P.index]
                  else if (S) (S.cell.height += N.height), (D = S.cell.colSpan), delete N.cells[P.index], S.left--, S.left <= 1 && delete C[P.index]
                  else {
                    var z = N.cells[P.index]
                    if (!z) continue
                    if (((z.height = N.height), z.rowSpan > 1)) {
                      var $ = U.length - E,
                        de = z.rowSpan > $ ? $ : z.rowSpan
                      C[P.index] = { cell: z, left: de, row: N }
                    }
                  }
                }
            }
            function w(k) {
              for (var C = k.allRows(), D = 0; D < C.length; D++)
                for (var U = C[D], E = null, N = 0, V = 0, Q = 0; Q < k.columns.length; Q++) {
                  var P = k.columns[Q]
                  if (((V -= 1), V > 1 && k.columns[Q + 1])) (N += P.width), delete U.cells[P.index]
                  else if (E) {
                    var S = E
                    delete U.cells[P.index], (E = null), (S.width = P.width + N)
                  } else {
                    var S = U.cells[P.index]
                    if (!S) continue
                    if (((V = S.colSpan), (N = 0), S.colSpan > 1)) {
                      ;(E = S), (N += P.width)
                      continue
                    }
                    S.width = P.width + N
                  }
                }
            }
            function L(k, C) {
              for (var D = { count: 0, height: 0 }, U = 0, E = k.allRows(); U < E.length; U++) {
                for (var N = E[U], V = 0, Q = k.columns; V < Q.length; V++) {
                  var P = Q[V],
                    S = N.cells[P.index]
                  if (S) {
                    C.applyStyles(S.styles, !0)
                    var z = S.width - S.padding('horizontal')
                    if (S.styles.overflow === 'linebreak') S.text = C.splitTextToSize(S.text, z + 1 / C.scaleFactor(), { fontSize: S.styles.fontSize })
                    else if (S.styles.overflow === 'ellipsize') S.text = _(S.text, z, S.styles, C, '...')
                    else if (S.styles.overflow === 'hidden') S.text = _(S.text, z, S.styles, C, '')
                    else if (typeof S.styles.overflow == 'function') {
                      var $ = S.styles.overflow(S.text, z)
                      typeof $ == 'string' ? (S.text = [$]) : (S.text = $)
                    }
                    S.contentHeight = S.getContentHeight(C.scaleFactor(), C.getLineHeightFactor())
                    var de = S.contentHeight / S.rowSpan
                    S.rowSpan > 1 && D.count * D.height < de * S.rowSpan
                      ? (D = { height: de, count: S.rowSpan })
                      : D && D.count > 0 && D.height > de && (de = D.height),
                      de > N.height && (N.height = de)
                  }
                }
                D.count--
              }
            }
            function _(k, C, D, U, E) {
              return k.map(function (N) {
                return x(N, C, D, U, E)
              })
            }
            c.ellipsize = _
            function x(k, C, D, U, E) {
              var N = 1e4 * U.scaleFactor()
              if (((C = Math.ceil(C * N) / N), C >= (0, h.getStringWidth)(k, D, U))) return k
              for (; C < (0, h.getStringWidth)(k + E, D, U) && !(k.length <= 1); ) k = k.substring(0, k.length - 1)
              return k.trim() + E
            }
          },
          84: function (l) {
            if (typeof n > 'u') {
              var c = new Error("Cannot find module 'undefined'")
              throw ((c.code = 'MODULE_NOT_FOUND'), c)
            }
            l.exports = n
          }
        },
        i = {}
      function o(l) {
        var c = i[l]
        if (c !== void 0) return c.exports
        var f = (i[l] = { exports: {} })
        return r[l].call(f.exports, f, f.exports, o), f.exports
      }
      var s = {}
      return (
        (function () {
          var l = s
          Object.defineProperty(l, '__esModule', { value: !0 }),
            (l.Cell = l.Column = l.Row = l.Table = l.CellHookData = l.__drawTable = l.__createTable = l.applyPlugin = void 0)
          var c = o(790),
            f = o(587),
            h = o(49),
            g = o(858),
            v = o(287)
          Object.defineProperty(l, 'Table', {
            enumerable: !0,
            get: function () {
              return v.Table
            }
          })
          var p = o(662)
          Object.defineProperty(l, 'CellHookData', {
            enumerable: !0,
            get: function () {
              return p.CellHookData
            }
          })
          var b = o(287)
          Object.defineProperty(l, 'Cell', {
            enumerable: !0,
            get: function () {
              return b.Cell
            }
          }),
            Object.defineProperty(l, 'Column', {
              enumerable: !0,
              get: function () {
                return b.Column
              }
            }),
            Object.defineProperty(l, 'Row', {
              enumerable: !0,
              get: function () {
                return b.Row
              }
            })
          function w(C) {
            ;(0, c.default)(C)
          }
          l.applyPlugin = w
          function L(C, D) {
            var U = (0, f.parseInput)(C, D),
              E = (0, g.createTable)(C, U)
            ;(0, h.drawTable)(C, E)
          }
          function _(C, D) {
            var U = (0, f.parseInput)(C, D)
            return (0, g.createTable)(C, U)
          }
          l.__createTable = _
          function x(C, D) {
            ;(0, h.drawTable)(C, D)
          }
          l.__drawTable = x
          try {
            var k = o(84)
            k.jsPDF && (k = k.jsPDF), w(k)
          } catch {}
          l.default = L
        })(),
        s
      )
    })()
  })
})(lw)
const uw = '/ncp/assets/bulsu-logo-VfTyy2PR.png',
  fw = '/ncp/assets/CON-logo-55ijfaok.png'
function hw(e, t, n, r, i, o) {
  let s,
    l = new Image(),
    c = new Image()
  ;(l.src = uw), (c.src = fw)
  const f = new rt({ orientation: 'landscape', unit: 'cm', format: 'legal' })
  let h = f.internal.pageSize.getWidth()
  f.setFontSize(12),
    f.setFont('times'),
    f.addImage(l, 'PNG', h / 2 - 5, 1.25, 2, 2),
    f.text(
      `Bulacan State University
COLLEGE OF NURSING
City of Malolos, Bulacan`,
      h / 2,
      2,
      { align: 'center' }
    ),
    f.addImage(c, 'PNG', h / 2 + 3, 1.25, 2, 2),
    f.text('NURSING CARE PLAN', h / 2, 4, { align: 'center' }),
    f.setFont(void 0, 'bold').text(`Name: ${e}        Category: ${t}        Case ID: ${n}`, 2, 5),
    f.setFont(void 0, 'bold').text(`No. of Times Taken: ${r}        Date Handled: ${i}`, h - 2, 5, { align: 'right' }),
    f.autoTable({
      html: '#table',
      includeHiddenHtml: !0,
      useCss: !0,
      startY: 5.5,
      margin: 1.5,
      columnStyles: {
        0: { cellWidth: 32.56 / 6 },
        1: { cellWidth: 32.56 / 6 },
        2: { cellWidth: 32.56 / 6 },
        3: { cellWidth: 32.56 / 6 },
        4: { cellWidth: 32.56 / 6 },
        5: { cellWidth: 32.56 / 6 }
      },
      didDrawPage: (g) => (s = g.cursor.y)
    }),
    f
      .setFont(void 0, 'italic')
      .text(
        `Assessment - ${o[0]}%        Nursing Diagnosis - ${o[1]}%        Planning - ${o[2]}%        Intervention - ${o[3]}%        Evaluation - ${o[4]}%        Overall - ${o[5]}%`,
        h / 2,
        s + 0.75,
        { align: 'center' }
      ),
    window.open(f.output('bloburl'))
}
const dw = { class: 'flex h-[100svh] flex-col' },
  pw = { class: 'grow overflow-y-auto px-4 pb-4' },
  gw = te('div', { class: 'sticky top-0 z-10 bg-blue-50 pb-4 pt-6' }, [te('h1', null, 'Evaluation')], -1),
  mw = { class: 'flex flex-col items-center gap-2' },
  vw = te('h3', { class: 'pb-2 font-medium' }, 'Total Score', -1),
  bw = { class: 'flex w-full justify-center' },
  yw = te('hr', { class: 'mx-2 my-2 border-neutral-300' }, null, -1),
  ww = { class: 'flex flex-col gap-2 sm:px-24' },
  _w = { class: 'flex flex-col' },
  xw = { class: 'font-medium' },
  Sw = { key: 0, class: 'text-sm' },
  kw = { class: 'shrink-0 px-4 py-2' },
  Aw = { key: 0, class: "hidden w-full table-fixed border-collapse border border-black bg-white font-['Times'] text-[15px] text-black", id: 'table' },
  Lw = te(
    'tr',
    null,
    [
      te('th', { class: 'border border-black px-2 pb-6 pt-2 text-center' }, 'Assessment'),
      te('th', { class: 'border border-black px-2 pb-6 pt-2 text-center' }, 'Nursing Diagnosis'),
      te('th', { class: 'border border-black px-2 pb-6 pt-2 text-center' }, 'Planning'),
      te('th', { class: 'border border-black px-2 pb-6 pt-2 text-center' }, 'Intervention'),
      te('th', { class: 'border border-black px-2 pb-6 pt-2 text-center' }, 'Rationale'),
      te('th', { class: 'border border-black px-2 pb-6 pt-2 text-center' }, 'Evaluation')
    ],
    -1
  ),
  Nw = { class: 'border border-black px-4 py-2 text-start align-top' },
  Pw = te('br', null, null, -1),
  Cw = te('br', null, null, -1),
  jw = te('br', null, null, -1),
  Iw = te('br', null, null, -1),
  Ew = te('br', null, null, -1),
  Tw = te('br', null, null, -1),
  Fw = te('br', null, null, -1),
  Ow = { class: 'border border-black px-4 py-2 text-start align-top' },
  Rw = { class: 'border border-black px-4 py-2 text-start align-top' },
  Mw = te('br', null, null, -1),
  Dw = te('br', null, null, -1),
  Bw = te('br', null, null, -1),
  qw = te('br', null, null, -1),
  zw = te('br', null, null, -1),
  Uw = te('br', null, null, -1),
  Hw = te('br', null, null, -1),
  $w = te('br', null, null, -1),
  Vw = te('br', null, null, -1),
  Ww = te('br', null, null, -1),
  Gw = te('br', null, null, -1),
  Kw = te('br', null, null, -1),
  Jw = te('br', null, null, -1),
  Yw = { class: 'border border-black px-4 py-2 text-start align-top' },
  Xw = te('br', null, null, -1),
  Qw = te('br', null, null, -1),
  Zw = te('br', null, null, -1),
  e3 = te('br', null, null, -1),
  t3 = te('br', null, null, -1),
  n3 = te('br', null, null, -1),
  r3 = te('br', null, null, -1),
  i3 = te('br', null, null, -1),
  o3 = te('br', null, null, -1),
  s3 = { class: 'border border-black px-4 py-2 text-start align-top' },
  a3 = te('br', null, null, -1),
  l3 = te('br', null, null, -1),
  c3 = te('br', null, null, -1),
  u3 = te('br', null, null, -1),
  f3 = te('br', null, null, -1),
  h3 = te('br', null, null, -1),
  d3 = te('br', null, null, -1),
  p3 = { class: 'border border-black px-4 py-2 text-start align-top' },
  g3 = te('br', null, null, -1),
  m3 = te('br', null, null, -1),
  v3 = te('br', null, null, -1),
  b3 = te('br', null, null, -1),
  y3 = te('br', null, null, -1),
  w3 = te('br', null, null, -1),
  _3 = te('br', null, null, -1),
  x3 = te('br', null, null, -1),
  S3 = te('br', null, null, -1),
  k3 = te('br', null, null, -1),
  A3 = te('br', null, null, -1),
  L3 = te('br', null, null, -1),
  N3 = te('br', null, null, -1),
  P3 = te('br', null, null, -1),
  C3 = te('br', null, null, -1),
  j3 = te('br', null, null, -1),
  I3 = te('br', null, null, -1),
  E3 = te('br', null, null, -1),
  T3 = te('br', null, null, -1),
  F3 = te('br', null, null, -1),
  O3 = te('br', null, null, -1),
  R3 = te('br', null, null, -1),
  M3 = te('br', null, null, -1),
  D3 = {
    __name: 'EvaluationPage',
    setup(e) {
      const t = Pc(),
        n = ao(),
        r = ['Assessment', 'Nursing Diagnosis', 'Planning', 'Intervention', 'Evaluation']
      function i() {
        n.push({ name: 'home', params: { userId: localStorage.getItem('ncp_user_id') } })
      }
      const o = _t([]),
        s = _t(null),
        l = _t(!0)
      return (
        so(() => {
          Hn.get(`https://ncp-api-uzr5.onrender.com/case-scenario-history/${t.params.id}/get`).then((c) => {
            ;(s.value = c.data),
              o.value.push(s.value.score.assessment),
              o.value.push(s.value.score.nursingDiagnosis),
              o.value.push(s.value.score.planning),
              o.value.push(s.value.score.intervention),
              o.value.push(s.value.score.evaluation),
              o.value.push(s.value.score.overall),
              (l.value = !1)
          })
        }),
        (c, f) => {
          const h = bt('VLoader'),
            g = bt('VRadialProgress'),
            v = bt('VButton')
          return (
            _e(),
            Ne(
              He,
              null,
              [
                te('div', dw, [
                  te('div', pw, [
                    gw,
                    te('div', mw, [
                      vw,
                      te('div', bw, [
                        l.value
                          ? (_e(), Ht(h, { key: 0, size: '100px', thickness: '4px' }))
                          : (_e(),
                            Ht(
                              g,
                              {
                                key: 1,
                                size: '100px',
                                color: 'success',
                                thickness: '12px',
                                progress: o.value[5],
                                'max-value': 100,
                                class: 'text-xl font-semibold'
                              },
                              null,
                              8,
                              ['progress']
                            ))
                      ]),
                      Xe(
                        v,
                        {
                          onClick:
                            f[0] ||
                            (f[0] = (p) =>
                              Pn(hw)(
                                s.value.name,
                                s.value.category,
                                s.value.caseId,
                                s.value.timesTaken,
                                new Date(s.value.dateTaken).toLocaleString(),
                                o.value
                              )),
                          'start-icon': 'print',
                          class: 'w-fit'
                        },
                        { default: Lt(() => [Ke(' Nursing Care Plan ')]), _: 1 }
                      )
                    ]),
                    yw,
                    te('div', ww, [
                      (_e(),
                      Ne(
                        He,
                        null,
                        Bt(r, (p, b) =>
                          te('div', { key: b, class: 'flex flex-row items-center gap-2' }, [
                            l.value
                              ? (_e(), Ht(h, { key: 0, size: '72px', thickness: '4px' }))
                              : (_e(),
                                Ht(
                                  g,
                                  {
                                    key: 1,
                                    size: '72px',
                                    color: o.value[b] <= 7 ? 'error' : o.value[b] <= 14 ? 'warning' : 'success',
                                    thickness: '8px',
                                    progress: o.value[b],
                                    'max-value': 20,
                                    class: 'text-base font-medium'
                                  },
                                  null,
                                  8,
                                  ['color', 'progress']
                                )),
                            te('div', _w, [
                              te('span', xw, Je(p), 1),
                              l.value
                                ? Vn('', !0)
                                : (_e(), Ne('span', Sw, Je(o.value[b] <= 7 ? 'Unmet' : o.value[b] <= 14 ? 'Partially Met' : 'Met'), 1))
                            ])
                          ])
                        ),
                        64
                      ))
                    ])
                  ]),
                  te('div', kw, [
                    Xe(v, { onClick: f[1] || (f[1] = (p) => i()), class: 'w-full justify-center' }, { default: Lt(() => [Ke(' Back to Home ')]), _: 1 })
                  ])
                ]),
                s.value
                  ? (_e(),
                    Ne('table', Aw, [
                      Lw,
                      te('tr', null, [
                        te('td', Nw, [
                          Ke(' Subjective:'),
                          Pw,
                          Ke(' - ' + Je(s.value.answers.subjective) + ' ', 1),
                          Cw,
                          jw,
                          Ke(' Objective:'),
                          Iw,
                          (_e(!0),
                          Ne(
                            He,
                            null,
                            Bt(
                              s.value.answers.objective,
                              (p, b) => (
                                _e(),
                                Ne(
                                  He,
                                  { key: b },
                                  [
                                    b + 1 !== s.value.answers.objective.length
                                      ? (_e(), Ne(He, { key: 0 }, [Ke(' • ' + Je(p) + ' ', 1), Ew, Tw], 64))
                                      : (_e(), Ne(He, { key: 1 }, [Ke(' • ' + Je(p) + ' ', 1), Fw], 64))
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        te('td', Ow, Je(s.value.answers.nursingDiagnosis), 1),
                        te('td', Rw, [
                          Ke(' Short Term Goal:'),
                          Mw,
                          Ke(' - ' + Je(s.value.answers.shortTermGoalsDesc), 1),
                          Dw,
                          Bw,
                          (_e(!0),
                          Ne(
                            He,
                            null,
                            Bt(
                              s.value.answers.shortTermGoal,
                              (p, b) => (
                                _e(),
                                Ne(
                                  He,
                                  { key: b },
                                  [
                                    b + 1 !== s.value.answers.shortTermGoal.length
                                      ? (_e(), Ne(He, { key: 0 }, [Ke(' • ' + Je(p) + ' ', 1), qw, zw], 64))
                                      : (_e(), Ne(He, { key: 1 }, [Ke(' • ' + Je(p) + ' ', 1), Uw], 64))
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                          Hw,
                          Ke('Long Term Goal:'),
                          $w,
                          Ke(' - ' + Je(s.value.answers.longTermGoalsDesc), 1),
                          Vw,
                          Ww,
                          (_e(!0),
                          Ne(
                            He,
                            null,
                            Bt(
                              s.value.answers.longTermGoal,
                              (p, b) => (
                                _e(),
                                Ne(
                                  He,
                                  { key: b },
                                  [
                                    b + 1 !== s.value.answers.longTermGoal.length
                                      ? (_e(), Ne(He, { key: 0 }, [Ke(' • ' + Je(p) + ' ', 1), Gw, Kw], 64))
                                      : (_e(), Ne(He, { key: 1 }, [Ke(' • ' + Je(p) + ' ', 1), Jw], 64))
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        te('td', Yw, [
                          Ke(' Independent:'),
                          Xw,
                          (_e(!0),
                          Ne(
                            He,
                            null,
                            Bt(
                              s.value.answers.independent,
                              (p, b) => (
                                _e(),
                                Ne(
                                  He,
                                  { key: b },
                                  [
                                    b + 1 !== s.value.answers.independent.length
                                      ? (_e(), Ne(He, { key: 0 }, [Ke(' • ' + Je(p.split('::')[0]) + ' ', 1), Qw, Zw], 64))
                                      : (_e(), Ne(He, { key: 1 }, [Ke(' • ' + Je(p.split('::')[0]) + ' ', 1), e3], 64))
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                          t3,
                          Ke('Dependent:'),
                          n3,
                          (_e(!0),
                          Ne(
                            He,
                            null,
                            Bt(
                              s.value.answers.dependent,
                              (p, b) => (
                                _e(),
                                Ne(
                                  He,
                                  { key: b },
                                  [
                                    b + 1 !== s.value.answers.dependent.length
                                      ? (_e(), Ne(He, { key: 0 }, [Ke(' • ' + Je(p.split('::')[0]) + ' ', 1), r3, i3], 64))
                                      : (_e(), Ne(He, { key: 1 }, [Ke(' • ' + Je(p.split('::')[0]) + ' ', 1), o3], 64))
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        te('td', s3, [
                          (_e(!0),
                          Ne(
                            He,
                            null,
                            Bt(
                              s.value.answers.independent,
                              (p, b) => (
                                _e(),
                                Ne(
                                  He,
                                  { key: b },
                                  [
                                    b + 1 !== s.value.answers.independent.length
                                      ? (_e(), Ne(He, { key: 0 }, [Ke(' • ' + Je(p.split('::')[1]) + ' ', 1), a3, l3], 64))
                                      : (_e(), Ne(He, { key: 1 }, [Ke(' • ' + Je(p.split('::')[1]) + ' ', 1), c3], 64))
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                          u3,
                          (_e(!0),
                          Ne(
                            He,
                            null,
                            Bt(
                              s.value.answers.dependent,
                              (p, b) => (
                                _e(),
                                Ne(
                                  He,
                                  { key: b },
                                  [
                                    b + 1 !== s.value.answers.dependent.length
                                      ? (_e(), Ne(He, { key: 0 }, [Ke(' • ' + Je(p.split('::')[1]) + ' ', 1), f3, h3], 64))
                                      : (_e(), Ne(He, { key: 1 }, [Ke(' • ' + Je(p.split('::')[1]) + ' ', 1), d3], 64))
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        te('td', p3, [
                          Ke(' Short Term Goal:'),
                          g3,
                          Ke(' - ' + Je(s.value.answers.shortTermGoalsDesc), 1),
                          m3,
                          v3,
                          (_e(!0),
                          Ne(
                            He,
                            null,
                            Bt(
                              s.value.answers.shortTermGoal,
                              (p, b) => (
                                _e(),
                                Ne(
                                  He,
                                  { key: b },
                                  [
                                    Ke(' • ' + Je(p) + ' ', 1),
                                    b3,
                                    b + 1 !== s.value.answers.shortTermGoal.length
                                      ? (_e(), Ne(He, { key: 0 }, [Ke(' ___Met '), y3, Ke(' ___Partially Met '), w3, Ke(' ___Unmet '), _3, x3], 64))
                                      : (_e(), Ne(He, { key: 1 }, [Ke(' ___Met '), S3, Ke(' ___Partially Met '), k3, Ke(' ___Unmet '), A3], 64))
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                          L3,
                          Ke('Long Term Goal:'),
                          N3,
                          Ke(' - ' + Je(s.value.answers.longTermGoalsDesc), 1),
                          P3,
                          C3,
                          (_e(!0),
                          Ne(
                            He,
                            null,
                            Bt(
                              s.value.answers.longTermGoal,
                              (p, b) => (
                                _e(),
                                Ne(
                                  He,
                                  { key: b },
                                  [
                                    Ke(' • ' + Je(p) + ' ', 1),
                                    j3,
                                    b + 1 !== s.value.answers.longTermGoal.length
                                      ? (_e(), Ne(He, { key: 0 }, [Ke(' ___Met '), I3, Ke(' ___Partially Met '), E3, Ke(' ___Unmet '), T3, F3], 64))
                                      : (_e(), Ne(He, { key: 1 }, [Ke(' ___Met '), O3, Ke(' ___Partially Met '), R3, Ke(' ___Unmet '), M3], 64))
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          ))
                        ])
                      ])
                    ]))
                  : Vn('', !0)
              ],
              64
            )
          )
        }
      )
    }
  },
  Gn = (e) => (f1('data-v-98e34f59'), (e = e()), h1(), e),
  B3 = { class: 'flex h-[100svh] flex-col' },
  q3 = { class: 'sticky top-0 z-10 bg-blue-50/70 px-4 pb-4 pt-6 backdrop-blur-xl' },
  z3 = { key: 0, class: 'flex items-center justify-center p-4' },
  U3 = { key: 1, class: 'flex flex-col px-4' },
  H3 = { class: 'flex flex-col items-center lg:flex-row lg:gap-4' },
  $3 = { key: 0, class: 'relative block w-full max-w-[512px] overflow-hidden rounded-2xl pt-[56.25%] sm:h-[288px] sm:pt-0 lg:shrink-0' },
  V3 = ['src', 'alt'],
  W3 = { key: 0 },
  G3 = Gn(() => te('span', { class: 'text-sm text-neutral-600' }, 'Audio sample:', -1)),
  K3 = ['src'],
  J3 = Gn(() => te('hr', { class: 'mx-2 my-2 border-neutral-300' }, null, -1)),
  Y3 = { key: 0, class: 'flex items-center justify-center p-4' },
  X3 = Gn(() => te('h3', { class: 'pb-2 font-medium' }, 'Subjective', -1)),
  Q3 = { class: 'flex flex-col gap-1' },
  Z3 = ['onUpdate:modelValue', 'value'],
  e_ = Gn(() => te('h3', { class: 'pb-2 font-medium' }, 'Objective', -1)),
  t_ = { class: 'flex flex-col gap-1' },
  n_ = ['onUpdate:modelValue', 'value'],
  r_ = Gn(() => te('h3', { class: 'pb-2 font-medium' }, 'Choices', -1)),
  i_ = { class: 'flex flex-col gap-1' },
  o_ = ['value'],
  s_ = Gn(() => te('h3', { class: 'pb-2 font-medium' }, 'Short Term Goal', -1)),
  a_ = { class: 'font-medium' },
  l_ = { class: 'flex flex-col gap-1' },
  c_ = ['onUpdate:modelValue', 'value'],
  u_ = Gn(() => te('h3', { class: 'pb-2 font-medium' }, 'Long Term Goal', -1)),
  f_ = { class: 'font-medium' },
  h_ = { class: 'flex flex-col gap-1' },
  d_ = ['onUpdate:modelValue', 'value'],
  p_ = Gn(() => te('h3', { class: 'pb-2 font-medium' }, 'Independent', -1)),
  g_ = { class: 'flex flex-col gap-1' },
  m_ = ['onUpdate:modelValue', 'value'],
  v_ = Gn(() => te('br', null, null, -1)),
  b_ = Gn(() => te('h3', { class: 'pb-2 font-medium' }, 'Dependent', -1)),
  y_ = { class: 'flex flex-col gap-1' },
  w_ = ['onUpdate:modelValue', 'value'],
  __ = Gn(() => te('br', null, null, -1)),
  x_ = { class: 'w-full border-t border-t-neutral-300 bg-blue-50/70 backdrop-blur-xl' },
  S_ = Gn(() => te('div', { class: 'step-count h-1 bg-blue-400 ease-in' }, null, -1)),
  k_ = { class: 'grid auto-cols-[max-content_auto_max-content] grid-flow-col items-center gap-4 px-4 py-2 text-start' },
  A_ = { class: 'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-400 text-xl font-medium' },
  L_ = { class: 'flex flex-col' },
  N_ = Gn(() => te('span', { class: 'text-sm leading-none' }, 'You are now on', -1)),
  P_ = { class: 'text-lg font-bold leading-none' },
  C_ = Gn(() =>
    te('div', { class: 'flex flex-row items-center' }, [te('span', null, 'Next'), te('span', { class: 'material-icons' }, ' chevron_right ')], -1)
  ),
  j_ = { class: 'flex flex-row items-center' },
  I_ = { key: 1 },
  E_ = {
    __name: 'CaseScenarioPage',
    setup(e) {
      sh((k) => ({ '21c3ec88': s.percent }))
      const t = Pc(),
        n = ao(),
        r = _t(null),
        i = _t(null),
        o = ['Assessment', 'Nursing Diagnosis', 'Planning', 'Intervention'],
        s = er({ count: 1, percent: ur(() => (s.count / 5) * 100 + '%') }),
        l = er({
          introduction: { scenario: null, imageLink: null, audioLink: null },
          assessment: { subjectives: { texts: null, correctValue: null }, objectives: null },
          nursingDiagnosis: { texts: null, correctValue: null },
          planning: { shortTermGoalsDesc: null, shortTermGoals: null, longTermGoalsDesc: null, longTermGoals: null },
          intervention: { independents: null, dependents: null }
        }),
        c = _t({ subjective: null, objective: [], nursingDiagnosis: null, shortTermGoal: [], longTermGoal: [], independent: [], dependent: [] }),
        f = _t(!0)
      so(() => {
        ;(s.count = parseInt(localStorage.getItem('ncp_case_scenario_step'))),
          (c.value = JSON.parse(localStorage.getItem('ncp_case_scenario_answers'))),
          Hn.get(`https://ncp-api-uzr5.onrender.com/case-scenarios/get/${t.params.category}/${t.params.id}`).then((k) => {
            ;(l.introduction.scenario = k.data.scenario),
              (l.introduction.imageLink = k.data.image_link.replace(/dl=0/g, 'raw=1')),
              (l.introduction.audioLink = k.data.audio_link.replace(/dl=0/g, 'raw=1')),
              (l.assessment.subjectives = k.data.assessment.subjectives),
              (l.assessment.objectives = k.data.assessment.objectives),
              (l.nursingDiagnosis = k.data.nursing_diagnosis),
              (l.planning.shortTermGoalsDesc = k.data.planning.shortTermGoalsDesc),
              (l.planning.shortTermGoals = k.data.planning.shortTermGoals),
              (l.planning.longTermGoalsDesc = k.data.planning.longTermGoalsDesc),
              (l.planning.longTermGoals = k.data.planning.longTermGoals),
              (l.intervention.independents = k.data.intervention.independents),
              (l.intervention.dependents = k.data.intervention.dependents),
              (f.value = !1)
          })
      })
      function h(k, C) {
        let D = 1,
          U = 0,
          E = l.assessment.subjectives,
          N = l.assessment.objectives
        return (
          N.forEach((V) => {
            V.isCorrect && D++
          }),
          k === E.correctValue ? U++ : U > 0 && U--,
          C.forEach((V) => {
            N[N.map((Q) => Q.text).indexOf(V)].isCorrect ? U++ : U > 0 && U--
          }),
          U === 0 ? 0 : (U / D) * 100 * 0.2
        )
      }
      function g(k) {
        let C = l.nursingDiagnosis.correctValue
        return k === C ? 20 : 0
      }
      function v(k, C) {
        let D = 0,
          U = 0,
          E = l.planning.shortTermGoals,
          N = l.planning.longTermGoals
        return (
          E.forEach((V) => {
            V.isCorrect && D++
          }),
          N.forEach((V) => {
            V.isCorrect && D++
          }),
          k.forEach((V) => {
            E[E.map((Q) => Q.text).indexOf(V)].isCorrect ? U++ : U > 0 && U--
          }),
          C.forEach((V) => {
            N[N.map((Q) => Q.text).indexOf(V)].isCorrect ? U++ : U > 0 && U--
          }),
          U === 0 ? 0 : (U / D) * 100 * 0.2
        )
      }
      function p(k, C) {
        let D = 0,
          U = 0,
          E = l.intervention.independents,
          N = l.intervention.dependents
        return (
          E.forEach((V) => {
            V.isCorrect && D++
          }),
          N.forEach((V) => {
            V.isCorrect && D++
          }),
          k.forEach((V) => {
            E[E.map((Q) => Q.text).indexOf(V.split('::')[0])].isCorrect ? U++ : U > 0 && U--
          }),
          C.forEach((V) => {
            N[N.map((Q) => Q.text).indexOf(V.split('::')[0])].isCorrect ? U++ : U > 0 && U--
          }),
          U === 0 ? 0 : (U / D) * 100 * 0.2
        )
      }
      function b(k, C, D, U) {
        let E = k + C + D + U
        return E === 0 ? 0 : (E / 80) * 100 * 0.2
      }
      function w() {
        let k = 76,
          C = i.value.getBoundingClientRect().bottom + r.value.scrollTop - k
        r.value.scrollTo(0, C),
          s.count++,
          localStorage.setItem('ncp_case_scenario_step', s.count),
          localStorage.setItem('ncp_case_scenario_answers', JSON.stringify(c.value))
      }
      function L() {
        switch (s.count) {
          case 1:
            return c.value.subjective === null || c.value.objective.length === 0
          case 2:
            return c.value.nursingDiagnosis === null
          case 3:
            return c.value.shortTermGoal.length === 0 || c.value.longTermGoal.length === 0
          case 4:
            return c.value.independent.length === 0 || c.value.dependent.length === 0
        }
      }
      const _ = _t(!1)
      function x() {
        let k = h(c.value.subjective, c.value.objective),
          C = g(c.value.nursingDiagnosis),
          D = v(c.value.shortTermGoal, c.value.longTermGoal),
          U = p(c.value.independent, c.value.dependent),
          E = b(k, C, D, U),
          N = k + C + D + U + E
        ;(_.value = !0),
          Hn.post('https://ncp-api-uzr5.onrender.com/case-scenario-history/create', {
            userId: localStorage.getItem('ncp_user_id'),
            caseId: t.params.id,
            answers: c.value,
            assessmentScore: k,
            nursingDiagScore: C,
            planningScore: D,
            interventionScore: U,
            evaluationScore: E,
            overallScore: N
          }).then((V) => {
            localStorage.setItem('ncp_case_scenario_category', void 0),
              localStorage.setItem('ncp_case_scenario_number', void 0),
              localStorage.setItem('ncp_case_scenario_id', void 0),
              localStorage.setItem('ncp_case_scenario_session', !1),
              localStorage.setItem('ncp_case_scenario_step', 1),
              localStorage.setItem(
                'ncp_case_scenario_answers',
                JSON.stringify({
                  subjective: null,
                  objective: [],
                  nursingDiagnosis: null,
                  shortTermGoal: [],
                  longTermGoal: [],
                  independent: [],
                  dependent: []
                })
              ),
              n.push({ name: 'evaluation', params: { id: V.data.historyId } })
          })
      }
      return (k, C) => {
        const D = bt('VLoader'),
          U = bt('VButton')
        return (
          _e(),
          Ne('div', B3, [
            te(
              'div',
              { class: 'grow overflow-y-auto scroll-smooth pb-[78px]', ref_key: 'scrollableDiv', ref: r },
              [
                te('div', q3, [te('h1', null, 'Case Scenario ' + Je(k.$route.params.number), 1)]),
                f.value
                  ? (_e(), Ne('div', z3, [Xe(D, { size: '32px', thickness: '2px' })]))
                  : (_e(),
                    Ne('div', U3, [
                      te('div', H3, [
                        l.introduction.imageLink
                          ? (_e(),
                            Ne('picture', $3, [
                              te(
                                'img',
                                {
                                  src: l.introduction.imageLink,
                                  alt: l.introduction.imageLink,
                                  class: 'absolute left-0 top-0 h-full w-full object-cover object-center'
                                },
                                null,
                                8,
                                V3
                              )
                            ]))
                          : Vn('', !0),
                        te(
                          'div',
                          { class: 'flex flex-col items-center gap-1 pt-4', ref_key: 'scenarioRef', ref: i },
                          [
                            te('p', null, Je(l.introduction.scenario), 1),
                            l.introduction.audioLink
                              ? (_e(),
                                Ne('div', W3, [
                                  G3,
                                  te(
                                    'audio',
                                    { controls: '', class: 'block w-screen max-w-[320px]', src: l.introduction.audioLink, type: 'audio/mp3' },
                                    null,
                                    8,
                                    K3
                                  )
                                ]))
                              : Vn('', !0)
                          ],
                          512
                        )
                      ]),
                      J3,
                      f.value
                        ? (_e(), Ne('div', Y3, [Xe(D, { size: '32px', thickness: '2px' })]))
                        : (_e(),
                          Ne(
                            He,
                            { key: 1 },
                            [
                              lr(
                                te(
                                  'div',
                                  null,
                                  [
                                    X3,
                                    te('div', Q3, [
                                      (_e(!0),
                                      Ne(
                                        He,
                                        null,
                                        Bt(
                                          l.assessment.subjectives.texts,
                                          (E, N) => (
                                            _e(),
                                            Ne(
                                              'label',
                                              {
                                                key: N,
                                                class:
                                                  'flex cursor-pointer flex-row items-center gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-blue-100'
                                              },
                                              [
                                                lr(
                                                  te(
                                                    'input',
                                                    { 'onUpdate:modelValue': (V) => (c.value.subjective = V), type: 'radio', value: E.text },
                                                    null,
                                                    8,
                                                    Z3
                                                  ),
                                                  [[Md, c.value.subjective]]
                                                ),
                                                Ke(' ' + Je(E.text), 1)
                                              ]
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ]),
                                    e_,
                                    te('div', t_, [
                                      (_e(!0),
                                      Ne(
                                        He,
                                        null,
                                        Bt(
                                          l.assessment.objectives,
                                          (E, N) => (
                                            _e(),
                                            Ne(
                                              'label',
                                              {
                                                key: N,
                                                class:
                                                  'flex cursor-pointer flex-row items-center gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-blue-100'
                                              },
                                              [
                                                lr(
                                                  te(
                                                    'input',
                                                    { 'onUpdate:modelValue': (V) => (c.value.objective = V), type: 'checkbox', value: E.text },
                                                    null,
                                                    8,
                                                    n_
                                                  ),
                                                  [[hs, c.value.objective]]
                                                ),
                                                Ke(' ' + Je(E.text), 1)
                                              ]
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ])
                                  ],
                                  512
                                ),
                                [[Ul, s.count === 1]]
                              ),
                              lr(
                                te(
                                  'div',
                                  null,
                                  [
                                    r_,
                                    te('div', i_, [
                                      (_e(!0),
                                      Ne(
                                        He,
                                        null,
                                        Bt(
                                          l.nursingDiagnosis.texts,
                                          (E, N) => (
                                            _e(),
                                            Ne(
                                              'label',
                                              {
                                                key: N,
                                                class:
                                                  'flex cursor-pointer flex-row items-center gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-blue-100'
                                              },
                                              [
                                                lr(
                                                  te(
                                                    'input',
                                                    {
                                                      'onUpdate:modelValue': C[0] || (C[0] = (V) => (c.value.nursingDiagnosis = V)),
                                                      type: 'radio',
                                                      value: E.text
                                                    },
                                                    null,
                                                    8,
                                                    o_
                                                  ),
                                                  [[Md, c.value.nursingDiagnosis]]
                                                ),
                                                Ke(' ' + Je(E.text), 1)
                                              ]
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ])
                                  ],
                                  512
                                ),
                                [[Ul, s.count === 2]]
                              ),
                              lr(
                                te(
                                  'div',
                                  null,
                                  [
                                    s_,
                                    te('p', a_, Je(l.planning.shortTermGoalsDesc) + ':', 1),
                                    te('div', l_, [
                                      (_e(!0),
                                      Ne(
                                        He,
                                        null,
                                        Bt(
                                          l.planning.shortTermGoals,
                                          (E, N) => (
                                            _e(),
                                            Ne(
                                              'label',
                                              {
                                                key: N,
                                                class:
                                                  'flex cursor-pointer flex-row items-center gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-blue-100'
                                              },
                                              [
                                                lr(
                                                  te(
                                                    'input',
                                                    { 'onUpdate:modelValue': (V) => (c.value.shortTermGoal = V), type: 'checkbox', value: E.text },
                                                    null,
                                                    8,
                                                    c_
                                                  ),
                                                  [[hs, c.value.shortTermGoal]]
                                                ),
                                                Ke(' ' + Je(E.text), 1)
                                              ]
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ]),
                                    u_,
                                    te('p', f_, Je(l.planning.longTermGoalsDesc) + ':', 1),
                                    te('div', h_, [
                                      (_e(!0),
                                      Ne(
                                        He,
                                        null,
                                        Bt(
                                          l.planning.longTermGoals,
                                          (E, N) => (
                                            _e(),
                                            Ne(
                                              'label',
                                              {
                                                key: N,
                                                class:
                                                  'flex cursor-pointer flex-row items-center gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-blue-100'
                                              },
                                              [
                                                lr(
                                                  te(
                                                    'input',
                                                    { 'onUpdate:modelValue': (V) => (c.value.longTermGoal = V), type: 'checkbox', value: E.text },
                                                    null,
                                                    8,
                                                    d_
                                                  ),
                                                  [[hs, c.value.longTermGoal]]
                                                ),
                                                Ke(' ' + Je(E.text), 1)
                                              ]
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ])
                                  ],
                                  512
                                ),
                                [[Ul, s.count === 3]]
                              ),
                              lr(
                                te(
                                  'div',
                                  null,
                                  [
                                    p_,
                                    te('div', g_, [
                                      (_e(!0),
                                      Ne(
                                        He,
                                        null,
                                        Bt(
                                          l.intervention.independents,
                                          (E, N) => (
                                            _e(),
                                            Ne(
                                              'label',
                                              {
                                                key: N,
                                                class:
                                                  'flex cursor-pointer flex-row items-center gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-blue-100'
                                              },
                                              [
                                                lr(
                                                  te(
                                                    'input',
                                                    {
                                                      'onUpdate:modelValue': (V) => (c.value.independent = V),
                                                      type: 'checkbox',
                                                      value: `${E.text}::${E.rationale}`
                                                    },
                                                    null,
                                                    8,
                                                    m_
                                                  ),
                                                  [[hs, c.value.independent]]
                                                ),
                                                te('div', null, [Ke(Je(E.text), 1), v_, te('i', null, '(' + Je(E.rationale) + ')', 1)])
                                              ]
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ]),
                                    b_,
                                    te('div', y_, [
                                      (_e(!0),
                                      Ne(
                                        He,
                                        null,
                                        Bt(
                                          l.intervention.dependents,
                                          (E, N) => (
                                            _e(),
                                            Ne(
                                              'label',
                                              {
                                                key: N,
                                                class:
                                                  'flex cursor-pointer flex-row items-center gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-blue-100'
                                              },
                                              [
                                                lr(
                                                  te(
                                                    'input',
                                                    {
                                                      'onUpdate:modelValue': (V) => (c.value.dependent = V),
                                                      type: 'checkbox',
                                                      name: 'dependent',
                                                      value: `${E.text}::${E.rationale}`
                                                    },
                                                    null,
                                                    8,
                                                    w_
                                                  ),
                                                  [[hs, c.value.dependent]]
                                                ),
                                                te('div', null, [Ke(Je(E.text), 1), __, te('i', null, '(' + Je(E.rationale) + ')', 1)])
                                              ]
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ])
                                  ],
                                  512
                                ),
                                [[Ul, s.count === 4]]
                              )
                            ],
                            64
                          ))
                    ]))
              ],
              512
            ),
            te('div', x_, [
              S_,
              te('div', k_, [
                te('div', A_, Je(s.count), 1),
                te('div', L_, [N_, te('span', P_, Je(o[s.count - 1]), 1)]),
                s.count < 4
                  ? (_e(),
                    Ht(
                      U,
                      { key: 0, onClick: C[1] || (C[1] = (E) => w()), disabled: L(), color: 'warning', class: 'w-[88px] justify-center' },
                      { default: Lt(() => [C_]), _: 1 },
                      8,
                      ['disabled']
                    ))
                  : (_e(),
                    Ht(
                      U,
                      { key: 1, onClick: C[2] || (C[2] = (E) => x()), disabled: L() || _.value, color: 'warning', class: 'w-[88px] justify-center' },
                      {
                        default: Lt(() => [
                          te('div', j_, [_.value ? (_e(), Ht(D, { key: 0, size: '16px', thickness: '2px' })) : (_e(), Ne('span', I_, 'Finish'))])
                        ]),
                        _: 1
                      },
                      8,
                      ['disabled']
                    ))
              ])
            ])
          ])
        )
      }
    }
  },
  T_ = Bs(E_, [['__scopeId', 'data-v-98e34f59']]),
  F_ = { class: 'sticky top-0 z-10 bg-blue-50 px-4 pb-4 pt-6' },
  O_ = { key: 0 },
  R_ = { key: 1 },
  M_ = { class: 'flex grow flex-col overflow-y-auto px-4 pb-4' },
  D_ = { clas: 'flex flex-col gap-1' },
  B_ = ['name', 'value'],
  q_ = ['name', 'value'],
  z_ = te('hr', { class: 'mx-2 my-6 border-neutral-300' }, null, -1),
  U_ = { class: 'p-2' },
  H_ = { key: 1 },
  Tp = {
    __name: 'TestsPage',
    setup(e) {
      const t = Pc(),
        n = ao(),
        r = JSON.parse(
          '[{"question":"The systematic problem-solving approach towards providing individualized nursing care is known as ___________________.","type":"single","possibleAnswers":[{"text":"Nursing care plan","isCorrect":false},{"text":"Nursing process","isCorrect":true},{"text":"Nurses practice act","isCorrect":false},{"text":"Nursing method","isCorrect":false}]},{"question":"Name the association established to develop, refine, and promote the taxonomy of nursing diagnostic terminology used by nurses.","type":"single","possibleAnswers":[{"text":"North American Nursing Diagnosis Association International","isCorrect":true},{"text":"American nurses association","isCorrect":false},{"text":"Ethical Nursing Association","isCorrect":false},{"text":"Humane Nursing Association","isCorrect":false}]},{"question":"This step of the nursing process includes the systematic collection of all subjective and objective data about the client in which the nurse focuses holistically on the client physical, psychological, emotional, sociocultural, and spiritual. Name this step","type":"single","possibleAnswers":[{"text":"Assessment","isCorrect":true},{"text":"Planning","isCorrect":false},{"text":"Implementation","isCorrect":false},{"text":"Diagnosis","isCorrect":false}]},{"question":"What are the 3 parts of the nursing diagnosis (PES)? SATA","type":"multiple","possibleAnswers":[{"text":"Patient","isCorrect":false},{"text":"Problem","isCorrect":true},{"text":"Signs and symptoms","isCorrect":true},{"text":"Physical assessment","isCorrect":false},{"text":"Etiology","isCorrect":true}]}]'
        )
      function i(f) {
        let h = 0,
          g = 0
        return (
          r.forEach((v) => {
            v.possibleAnswers.forEach((p) => {
              p.isCorrect ? h++ : g > 0 && g--
            })
          }),
          Object.values(f).forEach((v, p) => {
            Array.isArray(v)
              ? v.forEach((b) => {
                  r[p].possibleAnswers[r[p].possibleAnswers.map((L) => L.text).indexOf(b)].isCorrect ? g++ : g > 0 && g--
                })
              : r[p].possibleAnswers[r[p].possibleAnswers.map((w) => w.text).indexOf(v)].isCorrect
                ? g++
                : g > 0 && g--
          }),
          `${g}/${h}`
        )
      }
      function o(f) {
        let h = []
        return (
          Object.values(f).forEach((g, v) => {
            h.push({ question: r[v].question, answer: g })
          }),
          h
        )
      }
      const s = _t(null),
        l = _t(!1)
      function c() {
        l.value = !0
        const f = new FormData(s.value),
          h = {}
        let g = []
        r.forEach((v, p) => {
          v.type === 'multiple' && g.push(p)
        }),
          f.forEach((v, p) => {
            g.forEach((b) => {
              p === `question_${b + 1}` ? (h[p] = f.getAll(p)) : (h[p] = v)
            })
          }),
          Hn.post('https://ncp-api-uzr5.onrender.com/test-history/create', {
            userId: localStorage.getItem('ncp_user_id'),
            testType: t.name === 'pre-test' ? 'PRETEST' : t.name === 'post-test' ? 'POSTTEST' : '',
            answers: o(h),
            score: i(h)
          }).then(() => {
            Wr.set(0),
              t.name === 'pre-test'
                ? (localStorage.setItem('ncp_finished_pre_test', !0),
                  localStorage.setItem('ncp_pre_test_session', !1),
                  dn.add({ msg: 'Pre test successfully submitted', duration: 4e3 }))
                : t.name === 'post-test' &&
                  (localStorage.setItem('ncp_finished_post_test', !0),
                  localStorage.setItem('ncp_post_test_session', !1),
                  dn.add({ msg: 'Post test successfully submitted', duration: 4e3 })),
              n.push({ name: 'home', params: { userId: localStorage.getItem('ncp_user_id') } })
          })
      }
      return (f, h) => {
        const g = bt('VLoader'),
          v = bt('VButton')
        return (
          _e(),
          Ne(
            'form',
            { onSubmit: h[0] || (h[0] = ah((p) => c(), ['prevent'])), ref_key: 'formRef', ref: s, class: 'flex h-[100svh] flex-col' },
            [
              te('div', F_, [
                f.$route.name === 'pre-test'
                  ? (_e(), Ne('h1', O_, 'Pre Test'))
                  : f.$route.name === 'post-test'
                    ? (_e(), Ne('h1', R_, 'Post Test'))
                    : Vn('', !0)
              ]),
              te('div', M_, [
                (_e(!0),
                Ne(
                  He,
                  null,
                  Bt(
                    Pn(r),
                    (p, b) => (
                      _e(),
                      Ne('div', { key: b, class: 'flex flex-col' }, [
                        te('span', null, Je(`${b + 1}. ${p.question}`), 1),
                        te('div', D_, [
                          (_e(!0),
                          Ne(
                            He,
                            null,
                            Bt(
                              p.possibleAnswers,
                              (w, L) => (
                                _e(),
                                Ne(
                                  'label',
                                  {
                                    key: L,
                                    class: 'flex cursor-pointer flex-row items-center gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-blue-100'
                                  },
                                  [
                                    p.type === 'single'
                                      ? (_e(),
                                        Ne('input', { key: 0, type: 'radio', name: `question_${b + 1}`, required: '', value: w.text }, null, 8, B_))
                                      : p.type === 'multiple'
                                        ? (_e(), Ne('input', { key: 1, type: 'checkbox', name: `question_${b + 1}`, value: w.text }, null, 8, q_))
                                        : Vn('', !0),
                                    Ke(' ' + Je(w.text) + '. ', 1)
                                  ]
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        z_
                      ])
                    )
                  ),
                  128
                ))
              ]),
              te('div', U_, [
                Xe(
                  v,
                  { disabled: l.value, type: 'submit', class: 'w-full justify-center' },
                  { default: Lt(() => [l.value ? (_e(), Ht(g, { key: 0, size: '16px', thickness: '2px' })) : (_e(), Ne('span', H_, 'Submit'))]), _: 1 },
                  8,
                  ['disabled']
                )
              ])
            ],
            544
          )
        )
      }
    }
  },
  z0 = tv({
    history: vm('/ncp/'),
    routes: [
      { path: '/', redirect: { name: 'login' } },
      { path: '/home', redirect: { name: 'home', params: { userId: localStorage.getItem('ncp_user_id') } } },
      { path: '/admin/home', redirect: { name: 'admin dashboard' } },
      { path: '/login', name: 'login', meta: { auth: { isRequired: !1, role: 'student' } }, component: Ab },
      { path: '/signup', name: 'signup', meta: { auth: { isRequired: !1, role: 'student' } }, component: Db },
      {
        path: '/introduction',
        name: 'introduction',
        meta: { auth: { isRequired: !0, role: 'student' } },
        component: $b,
        beforeEnter: () => {
          if (JSON.parse(localStorage.getItem('ncp_finished_pre_test')))
            return { name: 'home', params: { userId: localStorage.getItem('ncp_user_id') }, replace: !0 }
        }
      },
      {
        path: '/home/:userId?',
        name: 'home',
        meta: { auth: { isRequired: !0, role: 'student' } },
        component: a4,
        beforeEnter: (e) => {
          const t = JSON.parse(localStorage.getItem('ncp_finished_pre_test'))
          if (e.params.userId !== localStorage.getItem('ncp_user_id'))
            return { name: 'home', params: { userId: localStorage.getItem('ncp_user_id') }, replace: !0 }
          if (!t) return { name: 'introduction' }
        }
      },
      {
        path: '/pre-test',
        name: 'pre-test',
        meta: { auth: { isRequired: !0, role: 'student' } },
        component: Tp,
        beforeEnter: () => {
          if (JSON.parse(localStorage.getItem('ncp_finished_pre_test')))
            return { name: 'home', params: { userId: localStorage.getItem('ncp_user_id') }, replace: !0 }
          localStorage.setItem('ncp_pre_test_session', !0)
        }
      },
      {
        path: '/post-test',
        name: 'post-test',
        meta: { auth: { isRequired: !0, role: 'student' } },
        component: Tp,
        beforeEnter: () => {
          const e = JSON.parse(localStorage.getItem('ncp_finished_post_test')),
            t = JSON.parse(localStorage.getItem('ncp_post_test_session'))
          if ((e || !W1.value) && !t) return { name: 'home', params: { userId: localStorage.getItem('ncp_user_id') }, replace: !0 }
          localStorage.setItem('ncp_post_test_session', !0)
        }
      },
      {
        path: '/case-scenario',
        meta: { auth: { isRequired: !0, role: 'student' } },
        children: [
          {
            path: ':category/:number/:id',
            name: 'case scenario',
            component: T_,
            beforeEnter: () => {
              localStorage.setItem('ncp_case_scenario_session', !0)
            }
          },
          { path: 'evaluation/:id', name: 'evaluation', component: D3 }
        ]
      },
      {
        path: '/admin',
        children: [
          { path: '', redirect: { name: 'admin login' } },
          {
            path: 'login',
            name: 'admin login',
            meta: { auth: { isRequired: !1, role: 'admin' } },
            component: () => yi(() => import('./LoginPage-N-eFCcqz.js'), __vite__mapDeps([]))
          },
          {
            path: 'home',
            name: 'admin home',
            meta: { auth: { isRequired: !1, role: 'admin' } },
            component: () => yi(() => import('./HomePage-v8chDj1E.js'), __vite__mapDeps([0, 1])),
            children: [
              {
                path: 'dashboard',
                name: 'admin dashboard',
                meta: { auth: { isRequired: !0, role: 'admin' } },
                component: () => yi(() => import('./DashboardPage-yYMRWKeT.js'), __vite__mapDeps([]))
              },
              {
                path: 'case-scenarios/:category',
                name: 'admin case scenarios',
                meta: { auth: { isRequired: !0, role: 'admin' } },
                component: () => yi(() => import('./CasesPage-yRUr9Fqb.js'), __vite__mapDeps([]))
              },
              {
                path: 'case-scenarios/:category/create-case',
                name: 'admin create case',
                meta: { auth: { isRequired: !0, role: 'admin' } },
                component: () => yi(() => import('./EditCasePage-SrRzjJ6d.js'), __vite__mapDeps([]))
              },
              {
                path: 'case-scenarios/:category/edit-case/:number/:id',
                name: 'admin edit case',
                meta: { auth: { isRequired: !0, role: 'admin' } },
                component: () => yi(() => import('./EditCasePage-SrRzjJ6d.js'), __vite__mapDeps([]))
              }
            ]
          }
        ]
      }
    ]
  })
z0.beforeEach(async (e) => {
  if (e.meta.auth.role === 'student') {
    const t = await Fp('student'),
      n = JSON.parse(localStorage.getItem('ncp_pre_test_session')),
      r = JSON.parse(localStorage.getItem('ncp_post_test_session')),
      i = JSON.parse(localStorage.getItem('ncp_case_scenario_session')),
      o = localStorage.getItem('ncp_case_scenario_category'),
      s = parseInt(localStorage.getItem('ncp_case_scenario_number')),
      l = localStorage.getItem('ncp_case_scenario_id')
    if (e.meta.auth.isRequired) {
      if (!t && e.name !== 'login') return { name: 'login', replace: !0 }
      if (n && e.name !== 'pre-test') return { name: 'pre-test', replace: !0 }
      if (r && e.name !== 'post-test') return { name: 'post-test', replace: !0 }
      if (i && e.name !== 'case scenario') return { name: 'case scenario', params: { number: s, id: l, category: o }, replace: !0 }
    } else if (t) return { name: 'home', params: { userId: localStorage.getItem('ncp_user_id') }, replace: !0 }
  } else if (e.meta.auth.role === 'admin') {
    const t = await Fp('admin')
    if (e.meta.auth.isRequired) {
      if (!t && e.name !== 'admin login') return { name: 'admin login', replace: !0 }
    } else if (t) return { name: 'admin dashboard', replace: !0 }
  }
})
async function Fp(e) {
  let t = null
  const n = localStorage.getItem(`${e === 'student' ? 'ncp_token' : e === 'admin' ? 'ncp_admin_token' : ''}`)
  return (
    (t = await Hn.post(
      `https://ncp-api-uzr5.onrender.com/auth/${e === 'student' ? 'student' : e === 'admin' ? 'admin' : ''}`,
      { ...(e === 'student' ? { userId: localStorage.getItem('ncp_user_id') } : e === 'admin' ? {} : {}) },
      { headers: { Authorization: `Bearer ${n}` } }
    )
      .then((r) => {
        if (r.status === 200) return !0
        if (r.status === 401) return !1
      })
      .catch((r) => console.log(r))),
    t
  )
}
const $_ = ['value'],
  V_ = ['value'],
  W_ = {
    __name: 'VTextbox',
    props: {
      size: { type: String, default: 'base' },
      color: { type: String, default: 'neutral' },
      textarea: { type: Boolean, default: !1 },
      modelValue: String
    },
    emits: ['update:modelValue'],
    setup(e) {
      const t = e
      function n() {
        let r, i
        return (
          t.color === 'neutral' || t.color === null
            ? (r = 'border-transparent bg-neutral-950/5 transition-colors hover:border-neutral-500 focus:border-neutral-950')
            : t.color === 'primary'
              ? (r = 'border-transparent bg-blue-400/10 transition-colors hover:border-blue-400/50 focus:border-blue-400')
              : t.color === 'secondary'
                ? (r = 'border-transparent bg-blue-200/10 transition-colors hover:border-blue-300 focus:border-blue-700')
                : t.color === 'info'
                  ? (r = 'border-transparent bg-teal-400/10 transition-colors hover:border-teal-400/50 focus:border-teal-400')
                  : t.color === 'warning'
                    ? (r = 'border-transparent bg-yellow-400/10 transition-colors hover:border-yellow-400/50 focus:border-yellow-400')
                    : t.color === 'success'
                      ? (r = 'border-transparent bg-emerald-400/10 transition-colors hover:border-emerald-400/50 focus:border-emerald-400')
                      : t.color === 'error' && (r = 'border-transparent bg-red-400/10 transition-colors hover:border-red-400/50 focus:border-red-400'),
          t.textarea
            ? t.size === 'sm'
              ? (i = 'h-[120px] px-2 py-1 text-sm')
              : t.size === 'base'
                ? (i = 'h-[168px] px-4 py-2 text-base')
                : t.size === 'lg' && (i = 'h-[216px] px-6 py-3 text-xl')
            : t.size === 'sm'
              ? (i = 'h-[30px] max-h-[30px] px-2 py-1 text-sm')
              : t.size === 'base'
                ? (i = 'h-[42px] max-h-[42px] px-4 py-2 text-base')
                : t.size === 'lg' && (i = 'h-[54px] max-h-[54px] px-6 py-3 text-xl'),
          r + ' ' + i
        )
      }
      return (r, i) =>
        t.textarea
          ? (_e(),
            Ne(
              'textarea',
              Ps({ key: 0 }, r.$attrs, {
                value: t.modelValue,
                onInput: i[0] || (i[0] = (o) => r.$emit('update:modelValue', o.target.value)),
                class: [n(), 'resize-none rounded-2xl border font-medium outline-none']
              }),
              null,
              16,
              $_
            ))
          : (_e(),
            Ne(
              'input',
              Ps({ key: 1 }, r.$attrs, {
                value: t.modelValue,
                onInput: i[1] || (i[1] = (o) => r.$emit('update:modelValue', o.target.value)),
                class: [n(), 'truncate rounded-full border font-medium outline-none']
              }),
              null,
              16,
              V_
            ))
    }
  },
  G_ = { class: 'flex flex-col gap-1' },
  K_ = {
    __name: 'VFormTextbox',
    props: { label: { type: String, default: null }, subLabel: { type: String, default: null }, modelValue: String },
    emits: ['update:modelValue'],
    setup(e) {
      const t = e,
        n = z5()
      function r() {
        let i
        return (
          n.color === 'neutral' || t.color === null
            ? (i = 'text-neutral-600')
            : n.color === 'primary'
              ? (i = 'text-blue-400')
              : n.color === 'secondary'
                ? (i = 'text-blue-200')
                : n.color === 'info'
                  ? (i = 'text-teal-400')
                  : n.color === 'warning'
                    ? (i = 'text-yellow-400')
                    : n.color === 'success'
                      ? (i = 'text-emerald-400')
                      : n.color === 'error' && (i = 'text-red-500'),
          i
        )
      }
      return (i, o) => {
        const s = bt('VTextbox')
        return (
          _e(),
          Ne('label', G_, [
            t.label ? (_e(), Ne('span', { key: 0, class: Jt([r(), 'text-sm lg:text-base']) }, Je(t.label), 3)) : Vn('', !0),
            Xe(s, Ps(i.$attrs, { value: t.modelValue, onInput: o[0] || (o[0] = (l) => i.$emit('update:modelValue', l.target.value)) }), null, 16, [
              'value'
            ]),
            t.subLabel ? (_e(), Ne('span', { key: 1, class: Jt([r(), 'place-self-end text-sm lg:text-base']) }, Je(t.subLabel), 3)) : Vn('', !0)
          ])
        )
      }
    }
  },
  J_ = { class: 'relative flex cursor-pointer select-none flex-col justify-center gap-1' },
  Y_ = { key: 0, class: 'text-sm text-neutral-600' },
  X_ = ['value'],
  Q_ = {
    __name: 'VSelect',
    props: { options: { type: Array, default: null }, label: { type: String, default: null }, modelValue: String },
    emits: ['update:modelValue'],
    setup(e) {
      const t = e
      return (n, r) => (
        _e(),
        Ne('label', J_, [
          t.label ? (_e(), Ne('span', Y_, Je(t.label), 1)) : Vn('', !0),
          te(
            'select',
            Ps(n.$attrs, {
              onInput: r[0] || (r[0] = (i) => n.$emit('update:modelValue', i.target.value)),
              class:
                'select-tag cursor-pointer rounded-full border border-neutral-400 bg-transparent px-4 py-2 outline-none transition-colors hover:border-neutral-500 focus:border-neutral-950'
            }),
            [
              (_e(!0),
              Ne(
                He,
                null,
                Bt(t.options, (i, o) => (_e(), Ne('option', { key: o, value: i }, Je(i), 9, X_))),
                128
              ))
            ],
            16
          ),
          te('span', { class: Jt([{ 'translate-y-1/2': t.label }, 'material-icons pointer-events-none absolute right-4']) }, ' expand_more ', 2)
        ])
      )
    }
  },
  Z_ = Bs(Q_, [['__scopeId', 'data-v-791c110f']]),
  ex = { key: 1, class: 'material-icons' },
  tx = {
    __name: 'VButton',
    props: {
      size: { type: String, default: 'base' },
      variant: { type: String, default: 'filled' },
      color: { type: String, default: 'primary' },
      startIcon: { type: String, default: null },
      endIcon: { type: String, default: null }
    },
    setup(e) {
      const t = e
      function n() {
        let r, i
        return (
          t.variant === 'ghost'
            ? t.color === 'primary'
              ? (r = 'border-transparent bg-transparent hover:enabled:bg-neutral-400/20 active:enabled:bg-neutral-500/20 text-blue-400')
              : t.color === 'secondary'
                ? (r = 'border-transparent bg-transparent hover:enabled:bg-neutral-400/20 active:enabled:bg-neutral-500/20 text-blue-200')
                : t.color === 'info'
                  ? (r = 'border-transparent bg-transparent hover:enabled:bg-neutral-400/20 active:enabled:bg-neutral-500/20 text-teal-400')
                  : t.color === 'warning'
                    ? (r = 'border-transparent bg-transparent hover:enabled:bg-neutral-400/20 active:enabled:bg-neutral-500/20 text-yellow-400')
                    : t.color === 'success'
                      ? (r = 'border-transparent bg-transparent hover:enabled:bg-neutral-400/20 active:enabled:bg-neutral-500/20 text-emerald-400')
                      : t.color === 'error'
                        ? (r = 'border-transparent bg-transparent hover:enabled:bg-neutral-400/20 active:enabled:bg-neutral-500/20 text-red-400')
                        : t.color === 'neutral' &&
                          (r = 'border-transparent bg-transparent hover:enabled:bg-neutral-400/20 active:enabled:bg-neutral-500/20 text-blue-950')
            : t.variant === 'filled' &&
              (t.color === 'primary'
                ? (r = 'border-transparent bg-blue-400 text-blue-950 hover:enabled:bg-blue-500 active:enabled:bg-blue-600')
                : t.color === 'secondary'
                  ? (r = 'border-transparent bg-blue-200 text-blue-950 hover:enabled:bg-blue-300 active:enabled:bg-blue-400')
                  : t.color === 'info'
                    ? (r = 'border-transparent bg-teal-400 text-teal-950 hover:enabled:bg-teal-500 active:enabled:bg-teal-600')
                    : t.color === 'warning'
                      ? (r = 'border-transparent bg-yellow-400 text-yellow-950 hover:enabled:bg-yellow-500 active:enabled:bg-yellow-600')
                      : t.color === 'success'
                        ? (r = 'border-transparent bg-emerald-400 text-emerald-950 hover:enabled:bg-emerald-500 active:enabled:bg-emerald-600')
                        : t.color === 'error' && (r = 'border-transparent bg-red-400 text-red-950 hover:enabled:bg-red-500 active:enabled:bg-red-600')),
          t.variant === 'outlined' &&
            (t.color === 'primary'
              ? (r =
                  'border-neutral-400 hover:enabled:border-blue-400 active:enabled:border-blue-500/20 active:enabled:bg-blue-500 hover:enabled:bg-blue-400/20 text-blue-400')
              : t.color === 'secondary'
                ? (r =
                    'border-neutral-400 hover:enabled:border-blue-200 active:enabled:border-blue-300 active:enabled:bg-blue-300/20 hover:enabled:bg-blue-200/20 text-blue-200')
                : t.color === 'info'
                  ? (r =
                      'border-neutral-400 hover:enabled:border-teal-400 active:enabled:border-teal-500 active:enabled:bg-teal-500/20 hover:enabled:bg-teal-400/20 text-teal-400')
                  : t.color === 'warning'
                    ? (r =
                        'border-neutral-400 hover:enabled:border-yellow-400 active:enabled:border-yellow-500 active:enabled:bg-yellow-500/10 hover:enabled:bg-yellow-400/10 text-yellow-400')
                    : t.color === 'success'
                      ? (r =
                          'border-neutral-400 hover:enabled:border-emerald-400 active:enabled:border-emerald-500 active:enabled:bg-emerald-500/20 hover:enabled:bg-emerald-400/20 text-emerald-400')
                      : t.color === 'error' &&
                        (r =
                          'border-neutral-400 hover:enabled:border-red-400 active:enabled:border-red-500 active:enabled:bg-red-500/20 hover:enabled:bg-red-400/20 text-red-400')),
          t.size === 'sm'
            ? (i = 'h-[30px] max-h-[30px] gap-1 px-2 py-1 text-sm')
            : t.size === 'base'
              ? (i = 'h-[42px] max-h-[42px] gap-2 px-4 py-2 text-base')
              : t.size === 'lg' && (i = 'h-[54px] max-h-[54px] gap-3 px-6 py-3 text-xl'),
          r + ' ' + i
        )
      }
      return (r, i) => (
        _e(),
        Ne(
          'button',
          {
            class: Jt([
              n(),
              'inline-grid select-none auto-cols-[max-content_auto_max-content] grid-flow-col items-center rounded-full border text-start font-medium outline-none disabled:opacity-50'
            ])
          },
          [
            t.startIcon
              ? (_e(),
                Ne(
                  'span',
                  {
                    key: 0,
                    class: Jt([
                      {
                        'text-base leading-none': t.size === 'sm',
                        'text-lg leading-none': t.size === 'base',
                        'text-2xl leading-none': t.size === 'lg'
                      },
                      'material-icons'
                    ])
                  },
                  Je(t.startIcon),
                  3
                ))
              : Vn('', !0),
            Ns(r.$slots, 'default'),
            t.endIcon ? (_e(), Ne('span', ex, Je(t.endIcon), 1)) : Vn('', !0)
          ],
          2
        )
      )
    }
  },
  nx = {
    __name: 'VIconButton',
    props: {
      size: { type: String, default: 'base' },
      variant: { type: String, default: 'filled' },
      color: { type: String, default: 'neutral' },
      icon: { type: String, default: null }
    },
    setup(e) {
      const t = e
      function n() {
        let r, i
        return (
          t.variant === 'ghost'
            ? (t.color === 'neutral'
                ? (r =
                    "relative border-transparent bg-transparent active:enabled:before:bg-neutral-500/20 before:absolute before:rounded-full before:content-[''] hover:enabled:before:bg-neutral-400/20 text-blue-950")
                : t.color === 'primary'
                  ? (r =
                      "relative border-transparent bg-transparent active:enabled:before:bg-neutral-500/20 before:absolute before:rounded-full before:content-[''] hover:enabled:before:bg-neutral-400/20 text-blue-400")
                  : t.color === 'secondary'
                    ? (r =
                        "relative border-transparent bg-transparent active:enabled:before:bg-neutral-500/20 before:absolute before:rounded-full before:content-[''] hover:enabled:before:bg-neutral-400/20 text-blue-200")
                    : t.color === 'info'
                      ? (r =
                          "relative border-transparent bg-transparent active:enabled:before:bg-neutral-500/20 before:absolute before:rounded-full before:content-[''] hover:enabled:before:bg-neutral-400/20 text-teal-400")
                      : t.color === 'warning'
                        ? (r =
                            "relative border-transparent bg-transparent active:enabled:before:bg-neutral-500/20 before:absolute before:rounded-full before:content-[''] hover:enabled:before:bg-neutral-400/20 text-yellow-400")
                        : t.color === 'success'
                          ? (r =
                              "relative border-transparent bg-transparent active:enabled:before:bg-neutral-500/20 before:absolute before:rounded-full before:content-[''] hover:enabled:before:bg-neutral-400/20 text-emerald-400")
                          : t.color === 'error' &&
                            (r =
                              "relative border-transparent bg-transparent active:enabled:before:bg-neutral-500/20 before:absolute before:rounded-full before:content-[''] hover:enabled:before:bg-neutral-400/20 text-red-400"),
              t.size === 'sm'
                ? (i = 'before:-bottom-1 before:-left-1 before:-right-1 before:-top-1')
                : t.size === 'base'
                  ? (i = 'before:-bottom-2 before:-left-2 before:-right-2 before:-top-2')
                  : t.size === 'lg' && (i = 'before:-bottom-3 before:-left-3 before:-right-3 before:-top-3'))
            : (t.variant === 'filled' &&
                (t.color === 'primary'
                  ? (r = 'border-transparent bg-blue-400 text-blue-950 hover:bg-blue-500 active:bg-blue-600')
                  : t.color === 'secondary'
                    ? (r = 'border-transparent bg-blue-200 text-blue-950 hover:bg-blue-300 active:bg-blue-400')
                    : t.color === 'info'
                      ? (r = 'border-transparent bg-teal-400 text-teal-950 hover:bg-teal-500 active:bg-bluteale-600')
                      : t.color === 'warning'
                        ? (r = 'border-transparent bg-yellow-400 text-yellow-950 hover:bg-yellow-500 active:bg-yellow-600')
                        : t.color === 'success'
                          ? (r = 'border-transparent bg-emerald-400 text-emerald-950 hover:bg-emerald-500 active:bg-emerald-600')
                          : t.color === 'error' && (r = 'border-transparent bg-red-400 text-red-950 hover:bg-red-500 active:bg-red-600')),
              t.variant === 'outlined' &&
                (t.color === 'primary'
                  ? (r = 'border-neutral-400 hover:border-blue-400 hover:bg-blue-400/20 active:bg-blue-500/20 text-blue-400')
                  : t.color === 'secondary'
                    ? (r = 'border-neutral-400 hover:border-blue-200 hover:bg-blue-200/20 active:bg-blue-300/20 text-blue-200')
                    : t.color === 'info'
                      ? (r = 'border-neutral-400 hover:border-teal-400 hover:bg-teal-400/20 active:bg-teal-500/20 text-teal-400')
                      : t.color === 'warning'
                        ? (r = 'border-neutral-400 hover:border-yellow-400 hover:bg-yellow-400/10 active:bg-yellow-500/10 text-yellow-400')
                        : t.color === 'success'
                          ? (r = 'border-neutral-400 hover:border-emerald-400 hover:bg-emerald-400/20 active:bg-emerald-500/20 text-emerald-400')
                          : t.color === 'error' &&
                            (r = 'border-neutral-400 hover:border-red-400 hover:bg-red-400/20 active:bg-red-500/20 text-red-400')),
              t.size === 'sm'
                ? (i = 'h-[30px] max-h-[30px] w-[30px] max-w-[30px]')
                : t.size === 'base'
                  ? (i = 'h-[42px] max-h-[42px] w-[42px] max-w-[42px]')
                  : t.size === 'lg' && (i = 'h-[54px] max-h-[54px] w-[54px] max-w-[54px]')),
          r + ' ' + i
        )
      }
      return (r, i) => (
        _e(),
        Ne(
          'button',
          {
            class: Jt([
              n(),
              'flex select-none items-center justify-center rounded-full border outline-none disabled:cursor-not-allowed disabled:opacity-50'
            ])
          },
          [
            te(
              'span',
              {
                class: Jt([
                  { 'text-base leading-none': t.size === 'sm', 'text-lg leading-none': t.size === 'base', 'text-2xl leading-none': t.size === 'lg' },
                  'material-icons'
                ])
              },
              Je(t.icon),
              3
            )
          ],
          2
        )
      )
    }
  },
  rx = {
    __name: 'VLinkButton',
    props: {
      size: { type: String, default: 'base' },
      variant: { type: String, default: 'link' },
      color: { type: String, default: 'primary' },
      icon: { type: String, default: null }
    },
    setup(e) {
      const t = e
      function n() {
        let r, i
        return (
          t.color === 'primary'
            ? (r = 'text-blue-400 transition-colors duration-100 ease-in-out hover:text-blue-500')
            : t.color === 'secondary'
              ? (r = 'text-blue-200 transition-colors duration-100 ease-in-out hover:text-blue-300')
              : t.color === 'info'
                ? (r = 'text-teal-400 transition-colors duration-100 ease-in-out hover:text-teal-500')
                : t.color === 'warning'
                  ? (r = 'text-yello-400 transition-colors duration-100 ease-in-out hover:text-yello-500')
                  : t.color === 'success'
                    ? (r = 'text-emerald-400 transition-colors duration-100 ease-in-out hover:text-emerald-500')
                    : t.color === 'error' && (r = 'text-red-400 transition-colors duration-100 ease-in-out hover:text-red-500'),
          r + ' ' + i
        )
      }
      return (r, i) => {
        const o = bt('router-link')
        return t.variant === 'link'
          ? (_e(), Ht(o, { key: 0, class: Jt(n()) }, { default: Lt(() => [Ns(r.$slots, 'default')]), _: 3 }, 8, ['class']))
          : t.variant === 'button'
            ? (_e(), Ne('button', { key: 1, class: Jt(n()) }, [Ns(r.$slots, 'default')], 2))
            : Vn('', !0)
      }
    }
  },
  ix = {
    class:
      'group inline-grid w-full min-w-0 select-none auto-cols-[max-content_auto_max-content] grid-flow-col flex-row items-center rounded-2xl bg-blue-200 outline-none hover:enabled:bg-blue-300 active:enabled:bg-blue-400 disabled:opacity-50'
  },
  ox = {
    class:
      'flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-400 text-4xl font-bold group-hover:enabled:bg-blue-500 group-active:enabled:bg-blue-600 sm:h-[88px] sm:w-[88px] sm:text-5xl'
  },
  sx = { class: 'flex h-full w-full min-w-0 flex-col justify-center px-4' },
  ax = { class: 'truncate text-start leading-none sm:text-[24px]' },
  lx = { class: 'text-start text-sm leading-none sm:text-base' },
  cx = te(
    'div',
    {
      class:
        'mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 group-hover:enabled:bg-blue-500/50 group-active:enabled:bg-blue-600/20'
    },
    [te('span', { class: 'material-icons' }, ' chevron_right ')],
    -1
  ),
  ux = {
    __name: 'VIntroButton',
    props: { title: { type: String, default: null }, desc: { type: String, default: null }, step: { type: Number, default: 1 } },
    setup(e) {
      const t = e
      return (n, r) => (
        _e(), Ne('button', ix, [te('div', ox, Je(t.step), 1), te('div', sx, [te('h3', ax, Je(t.title), 1), te('span', lx, Je(t.desc), 1)]), cx])
      )
    }
  },
  fx = {
    __name: 'VBottomSheet',
    props: { goUp: Boolean },
    emits: ['update:goUp'],
    setup(e) {
      const t = e
      return (n, r) => (
        _e(),
        Ne(
          'div',
          {
            class: Jt([
              [t.goUp ? 'visible opacity-100' : 'invisible opacity-0'],
              'fixed left-0 top-0 h-[100svh] w-screen overflow-hidden transition-all duration-300 md:flex md:justify-center'
            ])
          },
          [
            te('div', {
              onClick: r[0] || (r[0] = (i) => n.$emit('update:goUp', !t.goUp)),
              class: 'absolute left-0 top-0 h-full w-full cursor-pointer bg-neutral-950/25'
            }),
            te(
              'div',
              {
                class: Jt([
                  [t.goUp ? 'opacity-full translate-y-0' : 'translate-y-full opacity-0'],
                  'absolute bottom-0 max-h-[calc(100svh-(100svh/3))] min-h-[80px] w-full overflow-hidden rounded-t-2xl bg-blue-50 transition-all duration-300 md:max-w-[864px]'
                ])
              },
              [Ns(n.$slots, 'default')],
              2
            )
          ],
          2
        )
      )
    }
  },
  hx = { key: 1, class: 'absolute top-0 h-full w-full bg-neutral-950/25' },
  dx = {
    __name: 'VModal',
    props: { goOpen: Boolean, clickOutside: { type: Boolean, default: !0 } },
    emits: ['update:goOpen'],
    setup(e) {
      const t = e
      return (n, r) => (
        _e(),
        Ne(
          'div',
          {
            class: Jt([
              'absolute left-0 top-0 z-40 flex h-[100svh] w-full items-center justify-center p-4 transition-all',
              [t.goOpen ? 'visible opacity-100' : 'invisible opacity-0']
            ])
          },
          [
            e.clickOutside
              ? (_e(),
                Ne('div', {
                  key: 0,
                  onClick: r[0] || (r[0] = (i) => n.$emit('update:goOpen', !t.goOpen)),
                  class: 'absolute top-0 h-full w-full bg-neutral-950/25'
                }))
              : (_e(), Ne('div', hx)),
            te(
              'div',
              {
                class: Jt([
                  'z-10 max-h-[calc(100svh-32px)] w-full overflow-hidden rounded-2xl bg-blue-50 transition-transform duration-150 ease-in-out md:w-auto md:min-w-[560px] md:max-w-[720px]',
                  [t.goOpen ? 'scale-100' : 'scale-95']
                ])
              },
              [Ns(n.$slots, 'default')],
              2
            )
          ],
          2
        )
      )
    }
  },
  px = te('div', { class: 'absolute top-0 h-full w-full bg-neutral-950/25' }, null, -1),
  gx = { class: 'px-2 pb-4 pt-2' },
  mx = { class: 'flex flex-col-reverse gap-2 md:flex-row md:items-center md:justify-end' },
  vx = {
    __name: 'VDialog',
    props: { goOpen: Boolean, header: String, body: String, confirmLabel: String, cancelLabel: String },
    emits: ['update:goOpen'],
    setup(e) {
      const t = e
      return (n, r) => {
        const i = bt('VButton')
        return (
          _e(),
          Ne(
            'div',
            {
              class: Jt([
                'fixed left-0 top-0 z-40 flex h-[100svh] w-full items-center justify-center p-4 transition-all',
                [t.goOpen ? 'visible opacity-100' : 'invisible opacity-0']
              ])
            },
            [
              px,
              te(
                'div',
                {
                  class: Jt([
                    'z-10 w-full min-w-0 max-w-[640px] rounded-2xl bg-blue-50 px-4 pb-2 pt-4 transition-all lg:min-w-[400px]',
                    [t.goOpen ? 'scale-100' : 'scale-95']
                  ])
                },
                [
                  te('h2', null, Je(t.header), 1),
                  te('p', gx, Je(t.body), 1),
                  te('div', mx, [
                    Xe(
                      i,
                      {
                        onClick: r[0] || (r[0] = (o) => n.$emit('update:goOpen', !t.goOpen)),
                        color: 'neutral',
                        variant: 'ghost',
                        class: 'w-full justify-center md:w-fit'
                      },
                      { default: Lt(() => [Ke(Je(t.cancelLabel), 1)]), _: 1 }
                    ),
                    Xe(
                      i,
                      {
                        onClick: r[1] || (r[1] = (o) => n.$emit('confirm')),
                        color: 'error',
                        variant: 'ghost',
                        class: 'w-full justify-center md:w-fit'
                      },
                      { default: Lt(() => [Ke(Je(t.confirmLabel), 1)]), _: 1 }
                    )
                  ])
                ],
                2
              )
            ],
            2
          )
        )
      }
    }
  },
  bx = { class: 'radial-progress flex shrink-0 items-center justify-center' },
  yx = {
    __name: 'VRadialProgress',
    props: {
      progress: { type: Number, default: 0 },
      maxValue: { type: Number, default: 20 },
      size: { type: String, default: '128px' },
      thickness: { type: String, default: '16px' },
      color: { type: String, default: 'primary' }
    },
    setup(e) {
      sh((n) => ({
        '160ca94e': t.thickness,
        '4195ede7': t.size,
        '63741fe2':
          t.color === 'primary'
            ? '#60a5fa'
            : t.color === 'warning'
              ? '#facc15'
              : t.color === 'success'
                ? '#34d399'
                : t.color === 'error'
                  ? '#f87171'
                  : '',
        '1cc46b75': (t.progress / t.maxValue) * 100 + '%',
        '28f58800':
          t.color === 'primary'
            ? '#bfdbfe'
            : t.color === 'warning'
              ? '#fef08a'
              : t.color === 'success'
                ? '#a7f3d0'
                : t.color === 'error'
                  ? '#fecaca'
                  : ''
      }))
      const t = e
      return (n, r) => (
        _e(),
        Ne('div', bx, [
          te(
            'div',
            Ps(n.$attrs, {
              class: [
                {
                  'text-blue-950': t.color === 'primary',
                  'text-yellow-950': t.color === 'warning',
                  'text-emerald-950': t.color === 'success',
                  'text-red-950': t.color === 'error'
                },
                'radial-center flex items-center justify-center rounded-full bg-blue-50'
              ]
            }),
            Je(t.progress) + '% ',
            17
          )
        ])
      )
    }
  },
  wx = Bs(yx, [['__scopeId', 'data-v-6a8cf69e']]),
  _x = { class: 'flex select-none flex-row items-center overflow-x-auto py-2' },
  xx = { class: 'z-10 flex h-10 w-10 items-center justify-center rounded-full text-blue-950' },
  Sx = { class: 'material-icons' },
  kx = {
    __name: 'VSteps',
    props: { step: { type: Number, default: 0 } },
    setup(e) {
      const t = e,
        n = [
          { icon: 'assessment', label: 'Assessment' },
          { icon: 'monitor_heart', label: 'Nursing Diagnosis' },
          { icon: 'assignment', label: 'Planning' },
          { icon: 'settings', label: 'Implementation' },
          { icon: 'checklist_rtl', label: 'Evaluation' }
        ]
      return (r, i) => (
        _e(),
        Ne('ul', _x, [
          (_e(),
          Ne(
            He,
            null,
            Bt(n, (o, s) =>
              te(
                'li',
                {
                  key: o.label,
                  class: Jt([[t.step >= s + 1 ? 'active' : ''], 'relative flex shrink-0 basis-32 flex-col items-center gap-1 text-center'])
                },
                [te('div', xx, [te('span', Sx, Je(o.icon), 1)]), te('span', null, Je(o.label), 1)],
                2
              )
            ),
            64
          ))
        ])
      )
    }
  },
  Ax = Bs(kx, [['__scopeId', 'data-v-37dd0624']]),
  Lx = { class: 'loader animate-spin rounded-full' },
  Nx = {
    __name: 'VLoader',
    props: { thickness: { type: String, default: '16px' }, size: { type: String, default: '80px' }, color: { type: String, default: 'neutral' } },
    setup(e) {
      sh((r) => ({ '780ff08f': t.thickness, '4e661d29': n(), 41816206: t.size }))
      const t = e
      function n() {
        if (t.color === 'neutral') return 'black'
        if (t.color === 'primary') return '#60a5fa'
        if (t.color === 'secondary') return '#bfdbfe'
        if (t.color === 'info') return '#2dd4bf'
        if (t.color === 'warning') return '#facc15'
        if (t.color === 'success') return '#34d399'
        if (t.color === 'error') return '#f87171'
      }
      return (r, i) => (_e(), Ne('div', Lx))
    }
  },
  Px = Bs(Nx, [['__scopeId', 'data-v-3eec5963']]),
  On = Kg(Xg)
On.use(z0)
On.mount('#app')
On.component('VTextbox', W_)
On.component('VFormTextbox', K_)
On.component('VSelect', Z_)
On.component('VButton', tx)
On.component('VIconButton', nx)
On.component('VLinkButton', rx)
On.component('VIntroButton', ux)
On.component('VBottomSheet', fx)
On.component('VModal', dx)
On.component('VDialog', vx)
On.component('VRadialProgress', wx)
On.component('VSteps', Ax)
On.component('VLoader', Px)
export {
  Je as A,
  Ul as B,
  hw as C,
  p1 as D,
  Pc as E,
  He as F,
  Md as G,
  Zu as H,
  Et as I,
  Ex as J,
  j5 as K,
  Ac as T,
  Bs as _,
  bt as a,
  te as b,
  Ne as c,
  Xe as d,
  Lt as e,
  Ht as f,
  Hn as g,
  so as h,
  Pn as i,
  Vn as j,
  Ns as k,
  lr as l,
  Ke as m,
  Jt as n,
  _e as o,
  jx as p,
  f1 as q,
  _t as r,
  Ix as s,
  dn as t,
  ao as u,
  hs as v,
  ah as w,
  h1 as x,
  Cx as y,
  Bt as z
}
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ['assets/HomePage-v8chDj1E.js', 'assets/HomePage-61xFePks.css']
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}