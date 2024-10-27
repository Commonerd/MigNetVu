function y_(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const a = Object.getOwnPropertyDescriptor(r, s);
          a &&
            Object.defineProperty(
              e,
              s,
              a.get ? a : { enumerable: !0, get: () => r[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const a of s)
      if (a.type === "childList")
        for (const u of a.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const a = {};
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const a = n(s);
    fetch(s.href, a);
  }
})();
var w_ =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function jh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var $h = { exports: {} },
  Bs = {},
  Uh = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = Symbol.for("react.element"),
  x_ = Symbol.for("react.portal"),
  S_ = Symbol.for("react.fragment"),
  P_ = Symbol.for("react.strict_mode"),
  L_ = Symbol.for("react.profiler"),
  k_ = Symbol.for("react.provider"),
  E_ = Symbol.for("react.context"),
  C_ = Symbol.for("react.forward_ref"),
  T_ = Symbol.for("react.suspense"),
  O_ = Symbol.for("react.memo"),
  N_ = Symbol.for("react.lazy"),
  Hd = Symbol.iterator;
function z_(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hd && e[Hd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Zh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hh = Object.assign,
  Vh = {};
function Di(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Vh),
    (this.updater = n || Zh);
}
Di.prototype.isReactComponent = {};
Di.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Di.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wh() {}
Wh.prototype = Di.prototype;
function zu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Vh),
    (this.updater = n || Zh);
}
var Ru = (zu.prototype = new Wh());
Ru.constructor = zu;
Hh(Ru, Di.prototype);
Ru.isPureReactComponent = !0;
var Vd = Array.isArray,
  Kh = Object.prototype.hasOwnProperty,
  Mu = { current: null },
  Gh = { key: !0, ref: !0, __self: !0, __source: !0 };
function qh(e, t, n) {
  var r,
    s = {},
    a = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Kh.call(t, r) && !Gh.hasOwnProperty(r) && (s[r] = t[r]);
  var d = arguments.length - 2;
  if (d === 1) s.children = n;
  else if (1 < d) {
    for (var f = Array(d), p = 0; p < d; p++) f[p] = arguments[p + 2];
    s.children = f;
  }
  if (e && e.defaultProps)
    for (r in ((d = e.defaultProps), d)) s[r] === void 0 && (s[r] = d[r]);
  return {
    $$typeof: Qr,
    type: e,
    key: a,
    ref: u,
    props: s,
    _owner: Mu.current,
  };
}
function R_(e, t) {
  return {
    $$typeof: Qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Au(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function M_(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wd = /\/+/g;
function Ha(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? M_("" + e.key)
    : t.toString(36);
}
function Zo(e, t, n, r, s) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (a) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qr:
          case x_:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (s = s(u)),
      (e = r === "" ? "." + Ha(u, 0) : r),
      Vd(s)
        ? ((n = ""),
          e != null && (n = e.replace(Wd, "$&/") + "/"),
          Zo(s, t, n, "", function (p) {
            return p;
          }))
        : s != null &&
          (Au(s) &&
            (s = R_(
              s,
              n +
                (!s.key || (u && u.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Wd, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), Vd(e)))
    for (var d = 0; d < e.length; d++) {
      a = e[d];
      var f = r + Ha(a, d);
      u += Zo(a, t, n, f, s);
    }
  else if (((f = z_(e)), typeof f == "function"))
    for (e = f.call(e), d = 0; !(a = e.next()).done; )
      (a = a.value), (f = r + Ha(a, d++)), (u += Zo(a, t, n, f, s));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return u;
}
function ko(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Zo(e, r, "", "", function (a) {
      return t.call(n, a, s++);
    }),
    r
  );
}
function A_(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ge = { current: null },
  Ho = { transition: null },
  I_ = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: Ho,
    ReactCurrentOwner: Mu,
  };
function Jh() {
  throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = {
  map: ko,
  forEach: function (e, t, n) {
    ko(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ko(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ko(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Au(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ee.Component = Di;
ee.Fragment = S_;
ee.Profiler = L_;
ee.PureComponent = zu;
ee.StrictMode = P_;
ee.Suspense = T_;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I_;
ee.act = Jh;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Hh({}, e.props),
    s = e.key,
    a = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (u = Mu.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var d = e.type.defaultProps;
    for (f in t)
      Kh.call(t, f) &&
        !Gh.hasOwnProperty(f) &&
        (r[f] = t[f] === void 0 && d !== void 0 ? d[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) r.children = n;
  else if (1 < f) {
    d = Array(f);
    for (var p = 0; p < f; p++) d[p] = arguments[p + 2];
    r.children = d;
  }
  return { $$typeof: Qr, type: e.type, key: s, ref: a, props: r, _owner: u };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: E_,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: k_, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = qh;
ee.createFactory = function (e) {
  var t = qh.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: C_, render: e };
};
ee.isValidElement = Au;
ee.lazy = function (e) {
  return { $$typeof: N_, _payload: { _status: -1, _result: e }, _init: A_ };
};
ee.memo = function (e, t) {
  return { $$typeof: O_, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = Ho.transition;
  Ho.transition = {};
  try {
    e();
  } finally {
    Ho.transition = t;
  }
};
ee.unstable_act = Jh;
ee.useCallback = function (e, t) {
  return Ge.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return Ge.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return Ge.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return Ge.current.useEffect(e, t);
};
ee.useId = function () {
  return Ge.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return Ge.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return Ge.current.useRef(e);
};
ee.useState = function (e) {
  return Ge.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return Ge.current.useTransition();
};
ee.version = "18.3.1";
Uh.exports = ee;
var A = Uh.exports;
const rs = jh(A),
  b_ = y_({ __proto__: null, default: rs }, [A]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B_ = A,
  D_ = Symbol.for("react.element"),
  F_ = Symbol.for("react.fragment"),
  j_ = Object.prototype.hasOwnProperty,
  $_ = B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  U_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qh(e, t, n) {
  var r,
    s = {},
    a = null,
    u = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (u = t.ref);
  for (r in t) j_.call(t, r) && !U_.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: D_,
    type: e,
    key: a,
    ref: u,
    props: s,
    _owner: $_.current,
  };
}
Bs.Fragment = F_;
Bs.jsx = Qh;
Bs.jsxs = Qh;
$h.exports = Bs;
var b = $h.exports,
  Yh = { exports: {} },
  ct = {},
  Xh = { exports: {} },
  ep = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, V) {
    var F = R.length;
    R.push(V);
    e: for (; 0 < F; ) {
      var K = (F - 1) >>> 1,
        ne = R[K];
      if (0 < s(ne, V)) (R[K] = V), (R[F] = ne), (F = K);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var V = R[0],
      F = R.pop();
    if (F !== V) {
      R[0] = F;
      e: for (var K = 0, ne = R.length, Oe = ne >>> 1; K < Oe; ) {
        var ue = 2 * (K + 1) - 1,
          oe = R[ue],
          G = ue + 1,
          Je = R[G];
        if (0 > s(oe, F))
          G < ne && 0 > s(Je, oe)
            ? ((R[K] = Je), (R[G] = F), (K = G))
            : ((R[K] = oe), (R[ue] = F), (K = ue));
        else if (G < ne && 0 > s(Je, F)) (R[K] = Je), (R[G] = F), (K = G);
        else break e;
      }
    }
    return V;
  }
  function s(R, V) {
    var F = R.sortIndex - V.sortIndex;
    return F !== 0 ? F : R.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var u = Date,
      d = u.now();
    e.unstable_now = function () {
      return u.now() - d;
    };
  }
  var f = [],
    p = [],
    g = 1,
    v = null,
    _ = 3,
    k = !1,
    P = !1,
    E = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    w = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(R) {
    for (var V = n(p); V !== null; ) {
      if (V.callback === null) r(p);
      else if (V.startTime <= R)
        r(p), (V.sortIndex = V.expirationTime), t(f, V);
      else break;
      V = n(p);
    }
  }
  function O(R) {
    if (((E = !1), x(R), !P))
      if (n(f) !== null) (P = !0), ye(M);
      else {
        var V = n(p);
        V !== null && ft(O, V.startTime - R);
      }
  }
  function M(R, V) {
    (P = !1), E && ((E = !1), w(U), (U = -1)), (k = !0);
    var F = _;
    try {
      for (
        x(V), v = n(f);
        v !== null && (!(v.expirationTime > V) || (R && !re()));

      ) {
        var K = v.callback;
        if (typeof K == "function") {
          (v.callback = null), (_ = v.priorityLevel);
          var ne = K(v.expirationTime <= V);
          (V = e.unstable_now()),
            typeof ne == "function" ? (v.callback = ne) : v === n(f) && r(f),
            x(V);
        } else r(f);
        v = n(f);
      }
      if (v !== null) var Oe = !0;
      else {
        var ue = n(p);
        ue !== null && ft(O, ue.startTime - V), (Oe = !1);
      }
      return Oe;
    } finally {
      (v = null), (_ = F), (k = !1);
    }
  }
  var B = !1,
    j = null,
    U = -1,
    ae = 5,
    Q = -1;
  function re() {
    return !(e.unstable_now() - Q < ae);
  }
  function Te() {
    if (j !== null) {
      var R = e.unstable_now();
      Q = R;
      var V = !0;
      try {
        V = j(!0, R);
      } finally {
        V ? Ut() : ((B = !1), (j = null));
      }
    } else B = !1;
  }
  var Ut;
  if (typeof y == "function")
    Ut = function () {
      y(Te);
    };
  else if (typeof MessageChannel < "u") {
    var Re = new MessageChannel(),
      Zt = Re.port2;
    (Re.port1.onmessage = Te),
      (Ut = function () {
        Zt.postMessage(null);
      });
  } else
    Ut = function () {
      T(Te, 0);
    };
  function ye(R) {
    (j = R), B || ((B = !0), Ut());
  }
  function ft(R, V) {
    U = T(function () {
      R(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      P || k || ((P = !0), ye(M));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (ae = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return _;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(f);
    }),
    (e.unstable_next = function (R) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = _;
      }
      var F = _;
      _ = V;
      try {
        return R();
      } finally {
        _ = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, V) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var F = _;
      _ = R;
      try {
        return V();
      } finally {
        _ = F;
      }
    }),
    (e.unstable_scheduleCallback = function (R, V, F) {
      var K = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? K + F : K))
          : (F = K),
        R)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = F + ne),
        (R = {
          id: g++,
          callback: V,
          priorityLevel: R,
          startTime: F,
          expirationTime: ne,
          sortIndex: -1,
        }),
        F > K
          ? ((R.sortIndex = F),
            t(p, R),
            n(f) === null &&
              R === n(p) &&
              (E ? (w(U), (U = -1)) : (E = !0), ft(O, F - K)))
          : ((R.sortIndex = ne), t(f, R), P || k || ((P = !0), ye(M))),
        R
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (R) {
      var V = _;
      return function () {
        var F = _;
        _ = V;
        try {
          return R.apply(this, arguments);
        } finally {
          _ = F;
        }
      };
    });
})(ep);
Xh.exports = ep;
var Z_ = Xh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H_ = A,
  ut = Z_;
function D(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var tp = new Set(),
  Nr = {};
function Qn(e, t) {
  zi(e, t), zi(e + "Capture", t);
}
function zi(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) tp.add(t[e]);
}
var Xt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ll = Object.prototype.hasOwnProperty,
  V_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Kd = {},
  Gd = {};
function W_(e) {
  return Ll.call(Gd, e)
    ? !0
    : Ll.call(Kd, e)
    ? !1
    : V_.test(e)
    ? (Gd[e] = !0)
    : ((Kd[e] = !0), !1);
}
function K_(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function G_(e, t, n, r) {
  if (t === null || typeof t > "u" || K_(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function qe(e, t, n, r, s, a, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = u);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new qe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Iu = /[\-:]([a-z])/g;
function bu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Iu, bu);
    Fe[t] = new qe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Iu, bu);
    Fe[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Iu, bu);
  Fe[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new qe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bu(e, t, n, r) {
  var s = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (G_(t, n, s, r) && (n = null),
    r || s === null
      ? W_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
      : ((t = s.attributeName),
        (r = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rn = H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Eo = Symbol.for("react.element"),
  hi = Symbol.for("react.portal"),
  pi = Symbol.for("react.fragment"),
  Du = Symbol.for("react.strict_mode"),
  kl = Symbol.for("react.profiler"),
  np = Symbol.for("react.provider"),
  ip = Symbol.for("react.context"),
  Fu = Symbol.for("react.forward_ref"),
  El = Symbol.for("react.suspense"),
  Cl = Symbol.for("react.suspense_list"),
  ju = Symbol.for("react.memo"),
  cn = Symbol.for("react.lazy"),
  rp = Symbol.for("react.offscreen"),
  qd = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qd && e[qd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _e = Object.assign,
  Va;
function gr(e) {
  if (Va === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Va = (t && t[1]) || "";
    }
  return (
    `
` +
    Va +
    e
  );
}
var Wa = !1;
function Ka(e, t) {
  if (!e || Wa) return "";
  Wa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (p) {
        r = p;
      }
      e();
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (
        var s = p.stack.split(`
`),
          a = r.stack.split(`
`),
          u = s.length - 1,
          d = a.length - 1;
        1 <= u && 0 <= d && s[u] !== a[d];

      )
        d--;
      for (; 1 <= u && 0 <= d; u--, d--)
        if (s[u] !== a[d]) {
          if (u !== 1 || d !== 1)
            do
              if ((u--, d--, 0 > d || s[u] !== a[d])) {
                var f =
                  `
` + s[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    f.includes("<anonymous>") &&
                    (f = f.replace("<anonymous>", e.displayName)),
                  f
                );
              }
            while (1 <= u && 0 <= d);
          break;
        }
    }
  } finally {
    (Wa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? gr(e) : "";
}
function q_(e) {
  switch (e.tag) {
    case 5:
      return gr(e.type);
    case 16:
      return gr("Lazy");
    case 13:
      return gr("Suspense");
    case 19:
      return gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ka(e.type, !1)), e;
    case 11:
      return (e = Ka(e.type.render, !1)), e;
    case 1:
      return (e = Ka(e.type, !0)), e;
    default:
      return "";
  }
}
function Tl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pi:
      return "Fragment";
    case hi:
      return "Portal";
    case kl:
      return "Profiler";
    case Du:
      return "StrictMode";
    case El:
      return "Suspense";
    case Cl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ip:
        return (e.displayName || "Context") + ".Consumer";
      case np:
        return (e._context.displayName || "Context") + ".Provider";
      case Fu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ju:
        return (
          (t = e.displayName || null), t !== null ? t : Tl(e.type) || "Memo"
        );
      case cn:
        (t = e._payload), (e = e._init);
        try {
          return Tl(e(t));
        } catch {}
    }
  return null;
}
function J_(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Tl(t);
    case 8:
      return t === Du ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function En(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function op(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Q_(e) {
  var t = op(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (u) {
          (r = "" + u), a.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Co(e) {
  e._valueTracker || (e._valueTracker = Q_(e));
}
function sp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = op(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function os(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ol(e, t) {
  var n = t.checked;
  return _e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Jd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = En(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ap(e, t) {
  (t = t.checked), t != null && Bu(e, "checked", t, !1);
}
function Nl(e, t) {
  ap(e, t);
  var n = En(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? zl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && zl(e, t.type, En(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Qd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function zl(e, t, n) {
  (t !== "number" || os(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function ki(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + En(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return _e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Yd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: En(n) };
}
function lp(e, t) {
  var n = En(t.value),
    r = En(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Xd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function up(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ml(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? up(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var To,
  cp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        To = To || document.createElement("div"),
          To.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = To.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Y_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function (e) {
  Y_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wr[t] = wr[e]);
  });
});
function dp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wr.hasOwnProperty(e) && wr[e])
    ? ("" + t).trim()
    : t + "px";
}
function fp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = dp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var X_ = _e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Al(e, t) {
  if (t) {
    if (X_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Il(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var bl = null;
function $u(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Bl = null,
  Ei = null,
  Ci = null;
function ef(e) {
  if ((e = eo(e))) {
    if (typeof Bl != "function") throw Error(D(280));
    var t = e.stateNode;
    t && ((t = Us(t)), Bl(e.stateNode, e.type, t));
  }
}
function hp(e) {
  Ei ? (Ci ? Ci.push(e) : (Ci = [e])) : (Ei = e);
}
function pp() {
  if (Ei) {
    var e = Ei,
      t = Ci;
    if (((Ci = Ei = null), ef(e), t)) for (e = 0; e < t.length; e++) ef(t[e]);
  }
}
function mp(e, t) {
  return e(t);
}
function gp() {}
var Ga = !1;
function vp(e, t, n) {
  if (Ga) return e(t, n);
  Ga = !0;
  try {
    return mp(e, t, n);
  } finally {
    (Ga = !1), (Ei !== null || Ci !== null) && (gp(), pp());
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Us(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Dl = !1;
if (Xt)
  try {
    var ar = {};
    Object.defineProperty(ar, "passive", {
      get: function () {
        Dl = !0;
      },
    }),
      window.addEventListener("test", ar, ar),
      window.removeEventListener("test", ar, ar);
  } catch {
    Dl = !1;
  }
function ey(e, t, n, r, s, a, u, d, f) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (g) {
    this.onError(g);
  }
}
var xr = !1,
  ss = null,
  as = !1,
  Fl = null,
  ty = {
    onError: function (e) {
      (xr = !0), (ss = e);
    },
  };
function ny(e, t, n, r, s, a, u, d, f) {
  (xr = !1), (ss = null), ey.apply(ty, arguments);
}
function iy(e, t, n, r, s, a, u, d, f) {
  if ((ny.apply(this, arguments), xr)) {
    if (xr) {
      var p = ss;
      (xr = !1), (ss = null);
    } else throw Error(D(198));
    as || ((as = !0), (Fl = p));
  }
}
function Yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _p(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function tf(e) {
  if (Yn(e) !== e) throw Error(D(188));
}
function ry(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yn(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var a = s.alternate;
    if (a === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === a.child) {
      for (a = s.child; a; ) {
        if (a === n) return tf(s), e;
        if (a === r) return tf(s), t;
        a = a.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) (n = s), (r = a);
    else {
      for (var u = !1, d = s.child; d; ) {
        if (d === n) {
          (u = !0), (n = s), (r = a);
          break;
        }
        if (d === r) {
          (u = !0), (r = s), (n = a);
          break;
        }
        d = d.sibling;
      }
      if (!u) {
        for (d = a.child; d; ) {
          if (d === n) {
            (u = !0), (n = a), (r = s);
            break;
          }
          if (d === r) {
            (u = !0), (r = a), (n = s);
            break;
          }
          d = d.sibling;
        }
        if (!u) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function yp(e) {
  return (e = ry(e)), e !== null ? wp(e) : null;
}
function wp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var xp = ut.unstable_scheduleCallback,
  nf = ut.unstable_cancelCallback,
  oy = ut.unstable_shouldYield,
  sy = ut.unstable_requestPaint,
  Se = ut.unstable_now,
  ay = ut.unstable_getCurrentPriorityLevel,
  Uu = ut.unstable_ImmediatePriority,
  Sp = ut.unstable_UserBlockingPriority,
  ls = ut.unstable_NormalPriority,
  ly = ut.unstable_LowPriority,
  Pp = ut.unstable_IdlePriority,
  Ds = null,
  jt = null;
function uy(e) {
  if (jt && typeof jt.onCommitFiberRoot == "function")
    try {
      jt.onCommitFiberRoot(Ds, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Tt = Math.clz32 ? Math.clz32 : fy,
  cy = Math.log,
  dy = Math.LN2;
function fy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cy(e) / dy) | 0)) | 0;
}
var Oo = 64,
  No = 4194304;
function _r(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function us(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    a = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var d = u & ~s;
    d !== 0 ? (r = _r(d)) : ((a &= u), a !== 0 && (r = _r(a)));
  } else (u = n & ~s), u !== 0 ? (r = _r(u)) : a !== 0 && (r = _r(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (a = t & -t), s >= a || (s === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Tt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function hy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function py(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var u = 31 - Tt(a),
      d = 1 << u,
      f = s[u];
    f === -1
      ? (!(d & n) || d & r) && (s[u] = hy(d, t))
      : f <= t && (e.expiredLanes |= d),
      (a &= ~d);
  }
}
function jl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Lp() {
  var e = Oo;
  return (Oo <<= 1), !(Oo & 4194240) && (Oo = 64), e;
}
function qa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Tt(t)),
    (e[t] = n);
}
function my(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Tt(n),
      a = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~a);
  }
}
function Zu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Tt(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var le = 0;
function kp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ep,
  Hu,
  Cp,
  Tp,
  Op,
  $l = !1,
  zo = [],
  vn = null,
  _n = null,
  yn = null,
  Mr = new Map(),
  Ar = new Map(),
  fn = [],
  gy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function rf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      _n = null;
      break;
    case "mouseover":
    case "mouseout":
      yn = null;
      break;
    case "pointerover":
    case "pointerout":
      Mr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ar.delete(t.pointerId);
  }
}
function lr(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [s],
      }),
      t !== null && ((t = eo(t)), t !== null && Hu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function vy(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (vn = lr(vn, e, t, n, r, s)), !0;
    case "dragenter":
      return (_n = lr(_n, e, t, n, r, s)), !0;
    case "mouseover":
      return (yn = lr(yn, e, t, n, r, s)), !0;
    case "pointerover":
      var a = s.pointerId;
      return Mr.set(a, lr(Mr.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (a = s.pointerId), Ar.set(a, lr(Ar.get(a) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function Np(e) {
  var t = Dn(e.target);
  if (t !== null) {
    var n = Yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _p(n)), t !== null)) {
          (e.blockedOn = t),
            Op(e.priority, function () {
              Cp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Vo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (bl = r), n.target.dispatchEvent(r), (bl = null);
    } else return (t = eo(n)), t !== null && Hu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function of(e, t, n) {
  Vo(e) && n.delete(t);
}
function _y() {
  ($l = !1),
    vn !== null && Vo(vn) && (vn = null),
    _n !== null && Vo(_n) && (_n = null),
    yn !== null && Vo(yn) && (yn = null),
    Mr.forEach(of),
    Ar.forEach(of);
}
function ur(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $l ||
      (($l = !0),
      ut.unstable_scheduleCallback(ut.unstable_NormalPriority, _y)));
}
function Ir(e) {
  function t(s) {
    return ur(s, e);
  }
  if (0 < zo.length) {
    ur(zo[0], e);
    for (var n = 1; n < zo.length; n++) {
      var r = zo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vn !== null && ur(vn, e),
      _n !== null && ur(_n, e),
      yn !== null && ur(yn, e),
      Mr.forEach(t),
      Ar.forEach(t),
      n = 0;
    n < fn.length;
    n++
  )
    (r = fn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < fn.length && ((n = fn[0]), n.blockedOn === null); )
    Np(n), n.blockedOn === null && fn.shift();
}
var Ti = rn.ReactCurrentBatchConfig,
  cs = !0;
function yy(e, t, n, r) {
  var s = le,
    a = Ti.transition;
  Ti.transition = null;
  try {
    (le = 1), Vu(e, t, n, r);
  } finally {
    (le = s), (Ti.transition = a);
  }
}
function wy(e, t, n, r) {
  var s = le,
    a = Ti.transition;
  Ti.transition = null;
  try {
    (le = 4), Vu(e, t, n, r);
  } finally {
    (le = s), (Ti.transition = a);
  }
}
function Vu(e, t, n, r) {
  if (cs) {
    var s = Ul(e, t, n, r);
    if (s === null) ol(e, t, r, ds, n), rf(e, r);
    else if (vy(s, e, t, n, r)) r.stopPropagation();
    else if ((rf(e, r), t & 4 && -1 < gy.indexOf(e))) {
      for (; s !== null; ) {
        var a = eo(s);
        if (
          (a !== null && Ep(a),
          (a = Ul(e, t, n, r)),
          a === null && ol(e, t, r, ds, n),
          a === s)
        )
          break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else ol(e, t, r, null, n);
  }
}
var ds = null;
function Ul(e, t, n, r) {
  if (((ds = null), (e = $u(r)), (e = Dn(e)), e !== null))
    if (((t = Yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _p(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ds = e), null;
}
function zp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ay()) {
        case Uu:
          return 1;
        case Sp:
          return 4;
        case ls:
        case ly:
          return 16;
        case Pp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pn = null,
  Wu = null,
  Wo = null;
function Rp() {
  if (Wo) return Wo;
  var e,
    t = Wu,
    n = t.length,
    r,
    s = "value" in pn ? pn.value : pn.textContent,
    a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === s[a - r]; r++);
  return (Wo = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Ko(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ro() {
  return !0;
}
function sf() {
  return !1;
}
function dt(e) {
  function t(n, r, s, a, u) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = u),
      (this.currentTarget = null);
    for (var d in e)
      e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(a) : a[d]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Ro
        : sf),
      (this.isPropagationStopped = sf),
      this
    );
  }
  return (
    _e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ro));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ro));
      },
      persist: function () {},
      isPersistent: Ro,
    }),
    t
  );
}
var Fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ku = dt(Fi),
  Xr = _e({}, Fi, { view: 0, detail: 0 }),
  xy = dt(Xr),
  Ja,
  Qa,
  cr,
  Fs = _e({}, Xr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Gu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== cr &&
            (cr && e.type === "mousemove"
              ? ((Ja = e.screenX - cr.screenX), (Qa = e.screenY - cr.screenY))
              : (Qa = Ja = 0),
            (cr = e)),
          Ja);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qa;
    },
  }),
  af = dt(Fs),
  Sy = _e({}, Fs, { dataTransfer: 0 }),
  Py = dt(Sy),
  Ly = _e({}, Xr, { relatedTarget: 0 }),
  Ya = dt(Ly),
  ky = _e({}, Fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ey = dt(ky),
  Cy = _e({}, Fi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ty = dt(Cy),
  Oy = _e({}, Fi, { data: 0 }),
  lf = dt(Oy),
  Ny = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ry = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function My(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ry[e]) ? !!t[e] : !1;
}
function Gu() {
  return My;
}
var Ay = _e({}, Xr, {
    key: function (e) {
      if (e.key) {
        var t = Ny[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ko(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gu,
    charCode: function (e) {
      return e.type === "keypress" ? Ko(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ko(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Iy = dt(Ay),
  by = _e({}, Fs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  uf = dt(by),
  By = _e({}, Xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gu,
  }),
  Dy = dt(By),
  Fy = _e({}, Fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jy = dt(Fy),
  $y = _e({}, Fs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Uy = dt($y),
  Zy = [9, 13, 27, 32],
  qu = Xt && "CompositionEvent" in window,
  Sr = null;
Xt && "documentMode" in document && (Sr = document.documentMode);
var Hy = Xt && "TextEvent" in window && !Sr,
  Mp = Xt && (!qu || (Sr && 8 < Sr && 11 >= Sr)),
  cf = " ",
  df = !1;
function Ap(e, t) {
  switch (e) {
    case "keyup":
      return Zy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ip(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var mi = !1;
function Vy(e, t) {
  switch (e) {
    case "compositionend":
      return Ip(t);
    case "keypress":
      return t.which !== 32 ? null : ((df = !0), cf);
    case "textInput":
      return (e = t.data), e === cf && df ? null : e;
    default:
      return null;
  }
}
function Wy(e, t) {
  if (mi)
    return e === "compositionend" || (!qu && Ap(e, t))
      ? ((e = Rp()), (Wo = Wu = pn = null), (mi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Mp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ky = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ff(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ky[e.type] : t === "textarea";
}
function bp(e, t, n, r) {
  hp(r),
    (t = fs(t, "onChange")),
    0 < t.length &&
      ((n = new Ku("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pr = null,
  br = null;
function Gy(e) {
  Kp(e, 0);
}
function js(e) {
  var t = _i(e);
  if (sp(t)) return e;
}
function qy(e, t) {
  if (e === "change") return t;
}
var Bp = !1;
if (Xt) {
  var Xa;
  if (Xt) {
    var el = "oninput" in document;
    if (!el) {
      var hf = document.createElement("div");
      hf.setAttribute("oninput", "return;"),
        (el = typeof hf.oninput == "function");
    }
    Xa = el;
  } else Xa = !1;
  Bp = Xa && (!document.documentMode || 9 < document.documentMode);
}
function pf() {
  Pr && (Pr.detachEvent("onpropertychange", Dp), (br = Pr = null));
}
function Dp(e) {
  if (e.propertyName === "value" && js(br)) {
    var t = [];
    bp(t, br, e, $u(e)), vp(Gy, t);
  }
}
function Jy(e, t, n) {
  e === "focusin"
    ? (pf(), (Pr = t), (br = n), Pr.attachEvent("onpropertychange", Dp))
    : e === "focusout" && pf();
}
function Qy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return js(br);
}
function Yy(e, t) {
  if (e === "click") return js(t);
}
function Xy(e, t) {
  if (e === "input" || e === "change") return js(t);
}
function e0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Nt = typeof Object.is == "function" ? Object.is : e0;
function Br(e, t) {
  if (Nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Ll.call(t, s) || !Nt(e[s], t[s])) return !1;
  }
  return !0;
}
function mf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gf(e, t) {
  var n = mf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = mf(n);
  }
}
function Fp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Fp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jp() {
  for (var e = window, t = os(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = os(e.document);
  }
  return t;
}
function Ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function t0(e) {
  var t = jp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Fp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ju(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          a = Math.min(r.start, s);
        (r = r.end === void 0 ? a : Math.min(r.end, s)),
          !e.extend && a > r && ((s = r), (r = a), (a = s)),
          (s = gf(n, a));
        var u = gf(n, r);
        s &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var n0 = Xt && "documentMode" in document && 11 >= document.documentMode,
  gi = null,
  Zl = null,
  Lr = null,
  Hl = !1;
function vf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hl ||
    gi == null ||
    gi !== os(r) ||
    ((r = gi),
    "selectionStart" in r && Ju(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Lr && Br(Lr, r)) ||
      ((Lr = r),
      (r = fs(Zl, "onSelect")),
      0 < r.length &&
        ((t = new Ku("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = gi))));
}
function Mo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vi = {
    animationend: Mo("Animation", "AnimationEnd"),
    animationiteration: Mo("Animation", "AnimationIteration"),
    animationstart: Mo("Animation", "AnimationStart"),
    transitionend: Mo("Transition", "TransitionEnd"),
  },
  tl = {},
  $p = {};
Xt &&
  (($p = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vi.animationend.animation,
    delete vi.animationiteration.animation,
    delete vi.animationstart.animation),
  "TransitionEvent" in window || delete vi.transitionend.transition);
function $s(e) {
  if (tl[e]) return tl[e];
  if (!vi[e]) return e;
  var t = vi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $p) return (tl[e] = t[n]);
  return e;
}
var Up = $s("animationend"),
  Zp = $s("animationiteration"),
  Hp = $s("animationstart"),
  Vp = $s("transitionend"),
  Wp = new Map(),
  _f =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Tn(e, t) {
  Wp.set(e, t), Qn(t, [e]);
}
for (var nl = 0; nl < _f.length; nl++) {
  var il = _f[nl],
    i0 = il.toLowerCase(),
    r0 = il[0].toUpperCase() + il.slice(1);
  Tn(i0, "on" + r0);
}
Tn(Up, "onAnimationEnd");
Tn(Zp, "onAnimationIteration");
Tn(Hp, "onAnimationStart");
Tn("dblclick", "onDoubleClick");
Tn("focusin", "onFocus");
Tn("focusout", "onBlur");
Tn(Vp, "onTransitionEnd");
zi("onMouseEnter", ["mouseout", "mouseover"]);
zi("onMouseLeave", ["mouseout", "mouseover"]);
zi("onPointerEnter", ["pointerout", "pointerover"]);
zi("onPointerLeave", ["pointerout", "pointerover"]);
Qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  o0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));
function yf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), iy(r, t, void 0, e), (e.currentTarget = null);
}
function Kp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var d = r[u],
            f = d.instance,
            p = d.currentTarget;
          if (((d = d.listener), f !== a && s.isPropagationStopped())) break e;
          yf(s, d, p), (a = f);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((d = r[u]),
            (f = d.instance),
            (p = d.currentTarget),
            (d = d.listener),
            f !== a && s.isPropagationStopped())
          )
            break e;
          yf(s, d, p), (a = f);
        }
    }
  }
  if (as) throw ((e = Fl), (as = !1), (Fl = null), e);
}
function fe(e, t) {
  var n = t[ql];
  n === void 0 && (n = t[ql] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Gp(t, e, 2, !1), n.add(r));
}
function rl(e, t, n) {
  var r = 0;
  t && (r |= 4), Gp(n, e, r, t);
}
var Ao = "_reactListening" + Math.random().toString(36).slice(2);
function Dr(e) {
  if (!e[Ao]) {
    (e[Ao] = !0),
      tp.forEach(function (n) {
        n !== "selectionchange" && (o0.has(n) || rl(n, !1, e), rl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ao] || ((t[Ao] = !0), rl("selectionchange", !1, t));
  }
}
function Gp(e, t, n, r) {
  switch (zp(t)) {
    case 1:
      var s = yy;
      break;
    case 4:
      s = wy;
      break;
    default:
      s = Vu;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !Dl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function ol(e, t, n, r, s) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var d = r.stateNode.containerInfo;
        if (d === s || (d.nodeType === 8 && d.parentNode === s)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var f = u.tag;
            if (
              (f === 3 || f === 4) &&
              ((f = u.stateNode.containerInfo),
              f === s || (f.nodeType === 8 && f.parentNode === s))
            )
              return;
            u = u.return;
          }
        for (; d !== null; ) {
          if (((u = Dn(d)), u === null)) return;
          if (((f = u.tag), f === 5 || f === 6)) {
            r = a = u;
            continue e;
          }
          d = d.parentNode;
        }
      }
      r = r.return;
    }
  vp(function () {
    var p = a,
      g = $u(n),
      v = [];
    e: {
      var _ = Wp.get(e);
      if (_ !== void 0) {
        var k = Ku,
          P = e;
        switch (e) {
          case "keypress":
            if (Ko(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Iy;
            break;
          case "focusin":
            (P = "focus"), (k = Ya);
            break;
          case "focusout":
            (P = "blur"), (k = Ya);
            break;
          case "beforeblur":
          case "afterblur":
            k = Ya;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = af;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Py;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Dy;
            break;
          case Up:
          case Zp:
          case Hp:
            k = Ey;
            break;
          case Vp:
            k = jy;
            break;
          case "scroll":
            k = xy;
            break;
          case "wheel":
            k = Uy;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Ty;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = uf;
        }
        var E = (t & 4) !== 0,
          T = !E && e === "scroll",
          w = E ? (_ !== null ? _ + "Capture" : null) : _;
        E = [];
        for (var y = p, x; y !== null; ) {
          x = y;
          var O = x.stateNode;
          if (
            (x.tag === 5 &&
              O !== null &&
              ((x = O),
              w !== null && ((O = Rr(y, w)), O != null && E.push(Fr(y, O, x)))),
            T)
          )
            break;
          y = y.return;
        }
        0 < E.length &&
          ((_ = new k(_, P, null, n, g)), v.push({ event: _, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((_ = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          _ &&
            n !== bl &&
            (P = n.relatedTarget || n.fromElement) &&
            (Dn(P) || P[en]))
        )
          break e;
        if (
          (k || _) &&
          ((_ =
            g.window === g
              ? g
              : (_ = g.ownerDocument)
              ? _.defaultView || _.parentWindow
              : window),
          k
            ? ((P = n.relatedTarget || n.toElement),
              (k = p),
              (P = P ? Dn(P) : null),
              P !== null &&
                ((T = Yn(P)), P !== T || (P.tag !== 5 && P.tag !== 6)) &&
                (P = null))
            : ((k = null), (P = p)),
          k !== P)
        ) {
          if (
            ((E = af),
            (O = "onMouseLeave"),
            (w = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = uf),
              (O = "onPointerLeave"),
              (w = "onPointerEnter"),
              (y = "pointer")),
            (T = k == null ? _ : _i(k)),
            (x = P == null ? _ : _i(P)),
            (_ = new E(O, y + "leave", k, n, g)),
            (_.target = T),
            (_.relatedTarget = x),
            (O = null),
            Dn(g) === p &&
              ((E = new E(w, y + "enter", P, n, g)),
              (E.target = x),
              (E.relatedTarget = T),
              (O = E)),
            (T = O),
            k && P)
          )
            t: {
              for (E = k, w = P, y = 0, x = E; x; x = ci(x)) y++;
              for (x = 0, O = w; O; O = ci(O)) x++;
              for (; 0 < y - x; ) (E = ci(E)), y--;
              for (; 0 < x - y; ) (w = ci(w)), x--;
              for (; y--; ) {
                if (E === w || (w !== null && E === w.alternate)) break t;
                (E = ci(E)), (w = ci(w));
              }
              E = null;
            }
          else E = null;
          k !== null && wf(v, _, k, E, !1),
            P !== null && T !== null && wf(v, T, P, E, !0);
        }
      }
      e: {
        if (
          ((_ = p ? _i(p) : window),
          (k = _.nodeName && _.nodeName.toLowerCase()),
          k === "select" || (k === "input" && _.type === "file"))
        )
          var M = qy;
        else if (ff(_))
          if (Bp) M = Xy;
          else {
            M = Qy;
            var B = Jy;
          }
        else
          (k = _.nodeName) &&
            k.toLowerCase() === "input" &&
            (_.type === "checkbox" || _.type === "radio") &&
            (M = Yy);
        if (M && (M = M(e, p))) {
          bp(v, M, n, g);
          break e;
        }
        B && B(e, _, p),
          e === "focusout" &&
            (B = _._wrapperState) &&
            B.controlled &&
            _.type === "number" &&
            zl(_, "number", _.value);
      }
      switch (((B = p ? _i(p) : window), e)) {
        case "focusin":
          (ff(B) || B.contentEditable === "true") &&
            ((gi = B), (Zl = p), (Lr = null));
          break;
        case "focusout":
          Lr = Zl = gi = null;
          break;
        case "mousedown":
          Hl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hl = !1), vf(v, n, g);
          break;
        case "selectionchange":
          if (n0) break;
        case "keydown":
        case "keyup":
          vf(v, n, g);
      }
      var j;
      if (qu)
        e: {
          switch (e) {
            case "compositionstart":
              var U = "onCompositionStart";
              break e;
            case "compositionend":
              U = "onCompositionEnd";
              break e;
            case "compositionupdate":
              U = "onCompositionUpdate";
              break e;
          }
          U = void 0;
        }
      else
        mi
          ? Ap(e, n) && (U = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");
      U &&
        (Mp &&
          n.locale !== "ko" &&
          (mi || U !== "onCompositionStart"
            ? U === "onCompositionEnd" && mi && (j = Rp())
            : ((pn = g),
              (Wu = "value" in pn ? pn.value : pn.textContent),
              (mi = !0))),
        (B = fs(p, U)),
        0 < B.length &&
          ((U = new lf(U, e, null, n, g)),
          v.push({ event: U, listeners: B }),
          j ? (U.data = j) : ((j = Ip(n)), j !== null && (U.data = j)))),
        (j = Hy ? Vy(e, n) : Wy(e, n)) &&
          ((p = fs(p, "onBeforeInput")),
          0 < p.length &&
            ((g = new lf("onBeforeInput", "beforeinput", null, n, g)),
            v.push({ event: g, listeners: p }),
            (g.data = j)));
    }
    Kp(v, t);
  });
}
function Fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      a = s.stateNode;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      (a = Rr(e, n)),
      a != null && r.unshift(Fr(e, a, s)),
      (a = Rr(e, t)),
      a != null && r.push(Fr(e, a, s))),
      (e = e.return);
  }
  return r;
}
function ci(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wf(e, t, n, r, s) {
  for (var a = t._reactName, u = []; n !== null && n !== r; ) {
    var d = n,
      f = d.alternate,
      p = d.stateNode;
    if (f !== null && f === r) break;
    d.tag === 5 &&
      p !== null &&
      ((d = p),
      s
        ? ((f = Rr(n, a)), f != null && u.unshift(Fr(n, f, d)))
        : s || ((f = Rr(n, a)), f != null && u.push(Fr(n, f, d)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var s0 = /\r\n?/g,
  a0 = /\u0000|\uFFFD/g;
function xf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      s0,
      `
`
    )
    .replace(a0, "");
}
function Io(e, t, n) {
  if (((t = xf(t)), xf(e) !== t && n)) throw Error(D(425));
}
function hs() {}
var Vl = null,
  Wl = null;
function Kl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Gl = typeof setTimeout == "function" ? setTimeout : void 0,
  l0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sf = typeof Promise == "function" ? Promise : void 0,
  u0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sf < "u"
      ? function (e) {
          return Sf.resolve(null).then(e).catch(c0);
        }
      : Gl;
function c0(e) {
  setTimeout(function () {
    throw e;
  });
}
function sl(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), Ir(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Ir(t);
}
function wn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ji = Math.random().toString(36).slice(2),
  Dt = "__reactFiber$" + ji,
  jr = "__reactProps$" + ji,
  en = "__reactContainer$" + ji,
  ql = "__reactEvents$" + ji,
  d0 = "__reactListeners$" + ji,
  f0 = "__reactHandles$" + ji;
function Dn(e) {
  var t = e[Dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[en] || n[Dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pf(e); e !== null; ) {
          if ((n = e[Dt])) return n;
          e = Pf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function eo(e) {
  return (
    (e = e[Dt] || e[en]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _i(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Us(e) {
  return e[jr] || null;
}
var Jl = [],
  yi = -1;
function On(e) {
  return { current: e };
}
function he(e) {
  0 > yi || ((e.current = Jl[yi]), (Jl[yi] = null), yi--);
}
function de(e, t) {
  yi++, (Jl[yi] = e.current), (e.current = t);
}
var Cn = {},
  Ze = On(Cn),
  et = On(!1),
  Vn = Cn;
function Ri(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    a;
  for (a in n) s[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function tt(e) {
  return (e = e.childContextTypes), e != null;
}
function ps() {
  he(et), he(Ze);
}
function Lf(e, t, n) {
  if (Ze.current !== Cn) throw Error(D(168));
  de(Ze, t), de(et, n);
}
function qp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(D(108, J_(e) || "Unknown", s));
  return _e({}, n, r);
}
function ms(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cn),
    (Vn = Ze.current),
    de(Ze, e),
    de(et, et.current),
    !0
  );
}
function kf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n
    ? ((e = qp(e, t, Vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      he(et),
      he(Ze),
      de(Ze, e))
    : he(et),
    de(et, n);
}
var qt = null,
  Zs = !1,
  al = !1;
function Jp(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function h0(e) {
  (Zs = !0), Jp(e);
}
function Nn() {
  if (!al && qt !== null) {
    al = !0;
    var e = 0,
      t = le;
    try {
      var n = qt;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qt = null), (Zs = !1);
    } catch (s) {
      throw (qt !== null && (qt = qt.slice(e + 1)), xp(Uu, Nn), s);
    } finally {
      (le = t), (al = !1);
    }
  }
  return null;
}
var wi = [],
  xi = 0,
  gs = null,
  vs = 0,
  gt = [],
  vt = 0,
  Wn = null,
  Jt = 1,
  Qt = "";
function bn(e, t) {
  (wi[xi++] = vs), (wi[xi++] = gs), (gs = e), (vs = t);
}
function Qp(e, t, n) {
  (gt[vt++] = Jt), (gt[vt++] = Qt), (gt[vt++] = Wn), (Wn = e);
  var r = Jt;
  e = Qt;
  var s = 32 - Tt(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var a = 32 - Tt(t) + s;
  if (30 < a) {
    var u = s - (s % 5);
    (a = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (s -= u),
      (Jt = (1 << (32 - Tt(t) + s)) | (n << s) | r),
      (Qt = a + e);
  } else (Jt = (1 << a) | (n << s) | r), (Qt = e);
}
function Qu(e) {
  e.return !== null && (bn(e, 1), Qp(e, 1, 0));
}
function Yu(e) {
  for (; e === gs; )
    (gs = wi[--xi]), (wi[xi] = null), (vs = wi[--xi]), (wi[xi] = null);
  for (; e === Wn; )
    (Wn = gt[--vt]),
      (gt[vt] = null),
      (Qt = gt[--vt]),
      (gt[vt] = null),
      (Jt = gt[--vt]),
      (gt[vt] = null);
}
var at = null,
  st = null,
  pe = !1,
  Ct = null;
function Yp(e, t) {
  var n = _t(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ef(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (at = e), (st = wn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (at = e), (st = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wn !== null ? { id: Jt, overflow: Qt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _t(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (at = e),
            (st = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ql(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yl(e) {
  if (pe) {
    var t = st;
    if (t) {
      var n = t;
      if (!Ef(e, t)) {
        if (Ql(e)) throw Error(D(418));
        t = wn(n.nextSibling);
        var r = at;
        t && Ef(e, t)
          ? Yp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (at = e));
      }
    } else {
      if (Ql(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (at = e);
    }
  }
}
function Cf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  at = e;
}
function bo(e) {
  if (e !== at) return !1;
  if (!pe) return Cf(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Kl(e.type, e.memoizedProps))),
    t && (t = st))
  ) {
    if (Ql(e)) throw (Xp(), Error(D(418)));
    for (; t; ) Yp(e, t), (t = wn(t.nextSibling));
  }
  if ((Cf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              st = wn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      st = null;
    }
  } else st = at ? wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Xp() {
  for (var e = st; e; ) e = wn(e.nextSibling);
}
function Mi() {
  (st = at = null), (pe = !1);
}
function Xu(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
var p0 = rn.ReactCurrentBatchConfig;
function dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var s = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (u) {
            var d = s.refs;
            u === null ? delete d[a] : (d[a] = u);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function Bo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Tf(e) {
  var t = e._init;
  return t(e._payload);
}
function em(e) {
  function t(w, y) {
    if (e) {
      var x = w.deletions;
      x === null ? ((w.deletions = [y]), (w.flags |= 16)) : x.push(y);
    }
  }
  function n(w, y) {
    if (!e) return null;
    for (; y !== null; ) t(w, y), (y = y.sibling);
    return null;
  }
  function r(w, y) {
    for (w = new Map(); y !== null; )
      y.key !== null ? w.set(y.key, y) : w.set(y.index, y), (y = y.sibling);
    return w;
  }
  function s(w, y) {
    return (w = Ln(w, y)), (w.index = 0), (w.sibling = null), w;
  }
  function a(w, y, x) {
    return (
      (w.index = x),
      e
        ? ((x = w.alternate),
          x !== null
            ? ((x = x.index), x < y ? ((w.flags |= 2), y) : x)
            : ((w.flags |= 2), y))
        : ((w.flags |= 1048576), y)
    );
  }
  function u(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function d(w, y, x, O) {
    return y === null || y.tag !== 6
      ? ((y = pl(x, w.mode, O)), (y.return = w), y)
      : ((y = s(y, x)), (y.return = w), y);
  }
  function f(w, y, x, O) {
    var M = x.type;
    return M === pi
      ? g(w, y, x.props.children, O, x.key)
      : y !== null &&
        (y.elementType === M ||
          (typeof M == "object" &&
            M !== null &&
            M.$$typeof === cn &&
            Tf(M) === y.type))
      ? ((O = s(y, x.props)), (O.ref = dr(w, y, x)), (O.return = w), O)
      : ((O = es(x.type, x.key, x.props, null, w.mode, O)),
        (O.ref = dr(w, y, x)),
        (O.return = w),
        O);
  }
  function p(w, y, x, O) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== x.containerInfo ||
      y.stateNode.implementation !== x.implementation
      ? ((y = ml(x, w.mode, O)), (y.return = w), y)
      : ((y = s(y, x.children || [])), (y.return = w), y);
  }
  function g(w, y, x, O, M) {
    return y === null || y.tag !== 7
      ? ((y = Zn(x, w.mode, O, M)), (y.return = w), y)
      : ((y = s(y, x)), (y.return = w), y);
  }
  function v(w, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = pl("" + y, w.mode, x)), (y.return = w), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Eo:
          return (
            (x = es(y.type, y.key, y.props, null, w.mode, x)),
            (x.ref = dr(w, null, y)),
            (x.return = w),
            x
          );
        case hi:
          return (y = ml(y, w.mode, x)), (y.return = w), y;
        case cn:
          var O = y._init;
          return v(w, O(y._payload), x);
      }
      if (vr(y) || sr(y))
        return (y = Zn(y, w.mode, x, null)), (y.return = w), y;
      Bo(w, y);
    }
    return null;
  }
  function _(w, y, x, O) {
    var M = y !== null ? y.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return M !== null ? null : d(w, y, "" + x, O);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Eo:
          return x.key === M ? f(w, y, x, O) : null;
        case hi:
          return x.key === M ? p(w, y, x, O) : null;
        case cn:
          return (M = x._init), _(w, y, M(x._payload), O);
      }
      if (vr(x) || sr(x)) return M !== null ? null : g(w, y, x, O, null);
      Bo(w, x);
    }
    return null;
  }
  function k(w, y, x, O, M) {
    if ((typeof O == "string" && O !== "") || typeof O == "number")
      return (w = w.get(x) || null), d(y, w, "" + O, M);
    if (typeof O == "object" && O !== null) {
      switch (O.$$typeof) {
        case Eo:
          return (w = w.get(O.key === null ? x : O.key) || null), f(y, w, O, M);
        case hi:
          return (w = w.get(O.key === null ? x : O.key) || null), p(y, w, O, M);
        case cn:
          var B = O._init;
          return k(w, y, x, B(O._payload), M);
      }
      if (vr(O) || sr(O)) return (w = w.get(x) || null), g(y, w, O, M, null);
      Bo(y, O);
    }
    return null;
  }
  function P(w, y, x, O) {
    for (
      var M = null, B = null, j = y, U = (y = 0), ae = null;
      j !== null && U < x.length;
      U++
    ) {
      j.index > U ? ((ae = j), (j = null)) : (ae = j.sibling);
      var Q = _(w, j, x[U], O);
      if (Q === null) {
        j === null && (j = ae);
        break;
      }
      e && j && Q.alternate === null && t(w, j),
        (y = a(Q, y, U)),
        B === null ? (M = Q) : (B.sibling = Q),
        (B = Q),
        (j = ae);
    }
    if (U === x.length) return n(w, j), pe && bn(w, U), M;
    if (j === null) {
      for (; U < x.length; U++)
        (j = v(w, x[U], O)),
          j !== null &&
            ((y = a(j, y, U)), B === null ? (M = j) : (B.sibling = j), (B = j));
      return pe && bn(w, U), M;
    }
    for (j = r(w, j); U < x.length; U++)
      (ae = k(j, w, U, x[U], O)),
        ae !== null &&
          (e && ae.alternate !== null && j.delete(ae.key === null ? U : ae.key),
          (y = a(ae, y, U)),
          B === null ? (M = ae) : (B.sibling = ae),
          (B = ae));
    return (
      e &&
        j.forEach(function (re) {
          return t(w, re);
        }),
      pe && bn(w, U),
      M
    );
  }
  function E(w, y, x, O) {
    var M = sr(x);
    if (typeof M != "function") throw Error(D(150));
    if (((x = M.call(x)), x == null)) throw Error(D(151));
    for (
      var B = (M = null), j = y, U = (y = 0), ae = null, Q = x.next();
      j !== null && !Q.done;
      U++, Q = x.next()
    ) {
      j.index > U ? ((ae = j), (j = null)) : (ae = j.sibling);
      var re = _(w, j, Q.value, O);
      if (re === null) {
        j === null && (j = ae);
        break;
      }
      e && j && re.alternate === null && t(w, j),
        (y = a(re, y, U)),
        B === null ? (M = re) : (B.sibling = re),
        (B = re),
        (j = ae);
    }
    if (Q.done) return n(w, j), pe && bn(w, U), M;
    if (j === null) {
      for (; !Q.done; U++, Q = x.next())
        (Q = v(w, Q.value, O)),
          Q !== null &&
            ((y = a(Q, y, U)), B === null ? (M = Q) : (B.sibling = Q), (B = Q));
      return pe && bn(w, U), M;
    }
    for (j = r(w, j); !Q.done; U++, Q = x.next())
      (Q = k(j, w, U, Q.value, O)),
        Q !== null &&
          (e && Q.alternate !== null && j.delete(Q.key === null ? U : Q.key),
          (y = a(Q, y, U)),
          B === null ? (M = Q) : (B.sibling = Q),
          (B = Q));
    return (
      e &&
        j.forEach(function (Te) {
          return t(w, Te);
        }),
      pe && bn(w, U),
      M
    );
  }
  function T(w, y, x, O) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === pi &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Eo:
          e: {
            for (var M = x.key, B = y; B !== null; ) {
              if (B.key === M) {
                if (((M = x.type), M === pi)) {
                  if (B.tag === 7) {
                    n(w, B.sibling),
                      (y = s(B, x.props.children)),
                      (y.return = w),
                      (w = y);
                    break e;
                  }
                } else if (
                  B.elementType === M ||
                  (typeof M == "object" &&
                    M !== null &&
                    M.$$typeof === cn &&
                    Tf(M) === B.type)
                ) {
                  n(w, B.sibling),
                    (y = s(B, x.props)),
                    (y.ref = dr(w, B, x)),
                    (y.return = w),
                    (w = y);
                  break e;
                }
                n(w, B);
                break;
              } else t(w, B);
              B = B.sibling;
            }
            x.type === pi
              ? ((y = Zn(x.props.children, w.mode, O, x.key)),
                (y.return = w),
                (w = y))
              : ((O = es(x.type, x.key, x.props, null, w.mode, O)),
                (O.ref = dr(w, y, x)),
                (O.return = w),
                (w = O));
          }
          return u(w);
        case hi:
          e: {
            for (B = x.key; y !== null; ) {
              if (y.key === B)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === x.containerInfo &&
                  y.stateNode.implementation === x.implementation
                ) {
                  n(w, y.sibling),
                    (y = s(y, x.children || [])),
                    (y.return = w),
                    (w = y);
                  break e;
                } else {
                  n(w, y);
                  break;
                }
              else t(w, y);
              y = y.sibling;
            }
            (y = ml(x, w.mode, O)), (y.return = w), (w = y);
          }
          return u(w);
        case cn:
          return (B = x._init), T(w, y, B(x._payload), O);
      }
      if (vr(x)) return P(w, y, x, O);
      if (sr(x)) return E(w, y, x, O);
      Bo(w, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        y !== null && y.tag === 6
          ? (n(w, y.sibling), (y = s(y, x)), (y.return = w), (w = y))
          : (n(w, y), (y = pl(x, w.mode, O)), (y.return = w), (w = y)),
        u(w))
      : n(w, y);
  }
  return T;
}
var Ai = em(!0),
  tm = em(!1),
  _s = On(null),
  ys = null,
  Si = null,
  ec = null;
function tc() {
  ec = Si = ys = null;
}
function nc(e) {
  var t = _s.current;
  he(_s), (e._currentValue = t);
}
function Xl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Oi(e, t) {
  (ys = e),
    (ec = Si = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function wt(e) {
  var t = e._currentValue;
  if (ec !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Si === null)) {
      if (ys === null) throw Error(D(308));
      (Si = e), (ys.dependencies = { lanes: 0, firstContext: e });
    } else Si = Si.next = e;
  return t;
}
var Fn = null;
function ic(e) {
  Fn === null ? (Fn = [e]) : Fn.push(e);
}
function nm(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), ic(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    tn(e, r)
  );
}
function tn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var dn = !1;
function rc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function im(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      tn(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), ic(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    tn(e, n)
  );
}
function Go(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zu(e, n);
  }
}
function Of(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (s = a = u) : (a = a.next = u), (n = n.next);
      } while (n !== null);
      a === null ? (s = a = t) : (a = a.next = t);
    } else s = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ws(e, t, n, r) {
  var s = e.updateQueue;
  dn = !1;
  var a = s.firstBaseUpdate,
    u = s.lastBaseUpdate,
    d = s.shared.pending;
  if (d !== null) {
    s.shared.pending = null;
    var f = d,
      p = f.next;
    (f.next = null), u === null ? (a = p) : (u.next = p), (u = f);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (d = g.lastBaseUpdate),
      d !== u &&
        (d === null ? (g.firstBaseUpdate = p) : (d.next = p),
        (g.lastBaseUpdate = f)));
  }
  if (a !== null) {
    var v = s.baseState;
    (u = 0), (g = p = f = null), (d = a);
    do {
      var _ = d.lane,
        k = d.eventTime;
      if ((r & _) === _) {
        g !== null &&
          (g = g.next =
            {
              eventTime: k,
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            });
        e: {
          var P = e,
            E = d;
          switch (((_ = t), (k = n), E.tag)) {
            case 1:
              if (((P = E.payload), typeof P == "function")) {
                v = P.call(k, v, _);
                break e;
              }
              v = P;
              break e;
            case 3:
              P.flags = (P.flags & -65537) | 128;
            case 0:
              if (
                ((P = E.payload),
                (_ = typeof P == "function" ? P.call(k, v, _) : P),
                _ == null)
              )
                break e;
              v = _e({}, v, _);
              break e;
            case 2:
              dn = !0;
          }
        }
        d.callback !== null &&
          d.lane !== 0 &&
          ((e.flags |= 64),
          (_ = s.effects),
          _ === null ? (s.effects = [d]) : _.push(d));
      } else
        (k = {
          eventTime: k,
          lane: _,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null,
        }),
          g === null ? ((p = g = k), (f = v)) : (g = g.next = k),
          (u |= _);
      if (((d = d.next), d === null)) {
        if (((d = s.shared.pending), d === null)) break;
        (_ = d),
          (d = _.next),
          (_.next = null),
          (s.lastBaseUpdate = _),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (f = v),
      (s.baseState = f),
      (s.firstBaseUpdate = p),
      (s.lastBaseUpdate = g),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (u |= s.lane), (s = s.next);
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    (Gn |= u), (e.lanes = u), (e.memoizedState = v);
  }
}
function Nf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(D(191, s));
        s.call(r);
      }
    }
}
var to = {},
  $t = On(to),
  $r = On(to),
  Ur = On(to);
function jn(e) {
  if (e === to) throw Error(D(174));
  return e;
}
function oc(e, t) {
  switch ((de(Ur, t), de($r, e), de($t, to), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ml(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ml(t, e));
  }
  he($t), de($t, t);
}
function Ii() {
  he($t), he($r), he(Ur);
}
function rm(e) {
  jn(Ur.current);
  var t = jn($t.current),
    n = Ml(t, e.type);
  t !== n && (de($r, e), de($t, n));
}
function sc(e) {
  $r.current === e && (he($t), he($r));
}
var ge = On(0);
function xs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ll = [];
function ac() {
  for (var e = 0; e < ll.length; e++)
    ll[e]._workInProgressVersionPrimary = null;
  ll.length = 0;
}
var qo = rn.ReactCurrentDispatcher,
  ul = rn.ReactCurrentBatchConfig,
  Kn = 0,
  ve = null,
  Ne = null,
  Ae = null,
  Ss = !1,
  kr = !1,
  Zr = 0,
  m0 = 0;
function je() {
  throw Error(D(321));
}
function lc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Nt(e[n], t[n])) return !1;
  return !0;
}
function uc(e, t, n, r, s, a) {
  if (
    ((Kn = a),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qo.current = e === null || e.memoizedState === null ? y0 : w0),
    (e = n(r, s)),
    kr)
  ) {
    a = 0;
    do {
      if (((kr = !1), (Zr = 0), 25 <= a)) throw Error(D(301));
      (a += 1),
        (Ae = Ne = null),
        (t.updateQueue = null),
        (qo.current = x0),
        (e = n(r, s));
    } while (kr);
  }
  if (
    ((qo.current = Ps),
    (t = Ne !== null && Ne.next !== null),
    (Kn = 0),
    (Ae = Ne = ve = null),
    (Ss = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function cc() {
  var e = Zr !== 0;
  return (Zr = 0), e;
}
function Bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ae === null ? (ve.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae;
}
function xt() {
  if (Ne === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Ae === null ? ve.memoizedState : Ae.next;
  if (t !== null) (Ae = t), (Ne = e);
  else {
    if (e === null) throw Error(D(310));
    (Ne = e),
      (e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null,
      }),
      Ae === null ? (ve.memoizedState = Ae = e) : (Ae = Ae.next = e);
  }
  return Ae;
}
function Hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cl(e) {
  var t = xt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = Ne,
    s = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (s !== null) {
      var u = s.next;
      (s.next = a.next), (a.next = u);
    }
    (r.baseQueue = s = a), (n.pending = null);
  }
  if (s !== null) {
    (a = s.next), (r = r.baseState);
    var d = (u = null),
      f = null,
      p = a;
    do {
      var g = p.lane;
      if ((Kn & g) === g)
        f !== null &&
          (f = f.next =
            {
              lane: 0,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
          (r = p.hasEagerState ? p.eagerState : e(r, p.action));
      else {
        var v = {
          lane: g,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null,
        };
        f === null ? ((d = f = v), (u = r)) : (f = f.next = v),
          (ve.lanes |= g),
          (Gn |= g);
      }
      p = p.next;
    } while (p !== null && p !== a);
    f === null ? (u = r) : (f.next = d),
      Nt(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = f),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (a = s.lane), (ve.lanes |= a), (Gn |= a), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function dl(e) {
  var t = xt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var u = (s = s.next);
    do (a = e(a, u.action)), (u = u.next);
    while (u !== s);
    Nt(a, t.memoizedState) || (Xe = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function om() {}
function sm(e, t) {
  var n = ve,
    r = xt(),
    s = t(),
    a = !Nt(r.memoizedState, s);
  if (
    (a && ((r.memoizedState = s), (Xe = !0)),
    (r = r.queue),
    dc(um.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Ae !== null && Ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vr(9, lm.bind(null, n, r, s, t), void 0, null),
      Ie === null)
    )
      throw Error(D(349));
    Kn & 30 || am(n, t, s);
  }
  return s;
}
function am(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function lm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), cm(t) && dm(e);
}
function um(e, t, n) {
  return n(function () {
    cm(t) && dm(e);
  });
}
function cm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Nt(e, n);
  } catch {
    return !0;
  }
}
function dm(e) {
  var t = tn(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function zf(e) {
  var t = Bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _0.bind(null, ve, e)),
    [t.memoizedState, e]
  );
}
function Vr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function fm() {
  return xt().memoizedState;
}
function Jo(e, t, n, r) {
  var s = Bt();
  (ve.flags |= e),
    (s.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hs(e, t, n, r) {
  var s = xt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ne !== null) {
    var u = Ne.memoizedState;
    if (((a = u.destroy), r !== null && lc(r, u.deps))) {
      s.memoizedState = Vr(t, n, a, r);
      return;
    }
  }
  (ve.flags |= e), (s.memoizedState = Vr(1 | t, n, a, r));
}
function Rf(e, t) {
  return Jo(8390656, 8, e, t);
}
function dc(e, t) {
  return Hs(2048, 8, e, t);
}
function hm(e, t) {
  return Hs(4, 2, e, t);
}
function pm(e, t) {
  return Hs(4, 4, e, t);
}
function mm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Hs(4, 4, mm.bind(null, t, e), n)
  );
}
function fc() {}
function vm(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _m(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ym(e, t, n) {
  return Kn & 21
    ? (Nt(n, t) || ((n = Lp()), (ve.lanes |= n), (Gn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function g0(e, t) {
  var n = le;
  (le = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ul.transition;
  ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = n), (ul.transition = r);
  }
}
function wm() {
  return xt().memoizedState;
}
function v0(e, t, n) {
  var r = Pn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    xm(e))
  )
    Sm(t, n);
  else if (((n = nm(e, t, n, r)), n !== null)) {
    var s = Ke();
    Ot(n, e, r, s), Pm(n, t, r);
  }
}
function _0(e, t, n) {
  var r = Pn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xm(e)) Sm(t, s);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var u = t.lastRenderedState,
          d = a(u, n);
        if (((s.hasEagerState = !0), (s.eagerState = d), Nt(d, u))) {
          var f = t.interleaved;
          f === null
            ? ((s.next = s), ic(t))
            : ((s.next = f.next), (f.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = nm(e, t, s, r)),
      n !== null && ((s = Ke()), Ot(n, e, r, s), Pm(n, t, r));
  }
}
function xm(e) {
  var t = e.alternate;
  return e === ve || (t !== null && t === ve);
}
function Sm(e, t) {
  kr = Ss = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Pm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zu(e, n);
  }
}
var Ps = {
    readContext: wt,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  y0 = {
    readContext: wt,
    useCallback: function (e, t) {
      return (Bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: wt,
    useEffect: Rf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Jo(4194308, 4, mm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Jo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Jo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Bt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = v0.bind(null, ve, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zf,
    useDebugValue: fc,
    useDeferredValue: function (e) {
      return (Bt().memoizedState = e);
    },
    useTransition: function () {
      var e = zf(!1),
        t = e[0];
      return (e = g0.bind(null, e[1])), (Bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ve,
        s = Bt();
      if (pe) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), Ie === null)) throw Error(D(349));
        Kn & 30 || am(r, t, n);
      }
      s.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (s.queue = a),
        Rf(um.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Vr(9, lm.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Bt(),
        t = Ie.identifierPrefix;
      if (pe) {
        var n = Qt,
          r = Jt;
        (n = (r & ~(1 << (32 - Tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Zr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = m0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  w0 = {
    readContext: wt,
    useCallback: vm,
    useContext: wt,
    useEffect: dc,
    useImperativeHandle: gm,
    useInsertionEffect: hm,
    useLayoutEffect: pm,
    useMemo: _m,
    useReducer: cl,
    useRef: fm,
    useState: function () {
      return cl(Hr);
    },
    useDebugValue: fc,
    useDeferredValue: function (e) {
      var t = xt();
      return ym(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = cl(Hr)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: om,
    useSyncExternalStore: sm,
    useId: wm,
    unstable_isNewReconciler: !1,
  },
  x0 = {
    readContext: wt,
    useCallback: vm,
    useContext: wt,
    useEffect: dc,
    useImperativeHandle: gm,
    useInsertionEffect: hm,
    useLayoutEffect: pm,
    useMemo: _m,
    useReducer: dl,
    useRef: fm,
    useState: function () {
      return dl(Hr);
    },
    useDebugValue: fc,
    useDeferredValue: function (e) {
      var t = xt();
      return Ne === null ? (t.memoizedState = e) : ym(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = dl(Hr)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: om,
    useSyncExternalStore: sm,
    useId: wm,
    unstable_isNewReconciler: !1,
  };
function kt(e, t) {
  if (e && e.defaultProps) {
    (t = _e({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : _e({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      s = Pn(e),
      a = Yt(r, s);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = xn(e, a, s)),
      t !== null && (Ot(t, e, s, r), Go(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      s = Pn(e),
      a = Yt(r, s);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = xn(e, a, s)),
      t !== null && (Ot(t, e, s, r), Go(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ke(),
      r = Pn(e),
      s = Yt(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = xn(e, s, r)),
      t !== null && (Ot(t, e, r, n), Go(t, e, r));
  },
};
function Mf(e, t, n, r, s, a, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Br(n, r) || !Br(s, a)
      : !0
  );
}
function Lm(e, t, n) {
  var r = !1,
    s = Cn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = wt(a))
      : ((s = tt(t) ? Vn : Ze.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? Ri(e, s) : Cn)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Af(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vs.enqueueReplaceState(t, t.state, null);
}
function tu(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), rc(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (s.context = wt(a))
    : ((a = tt(t) ? Vn : Ze.current), (s.context = Ri(e, a))),
    (s.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (eu(e, t, a, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Vs.enqueueReplaceState(s, s.state, null),
      ws(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function bi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += q_(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (a) {
    s =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function fl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function nu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var S0 = typeof WeakMap == "function" ? WeakMap : Map;
function km(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ks || ((ks = !0), (fu = r)), nu(e, t);
    }),
    n
  );
}
function Em(e, t, n) {
  (n = Yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        nu(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        nu(e, t),
          typeof r != "function" &&
            (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    n
  );
}
function If(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new S0();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = b0.bind(null, e, t, n)), t.then(e, e));
}
function bf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bf(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yt(-1, 1)), (t.tag = 2), xn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var P0 = rn.ReactCurrentOwner,
  Xe = !1;
function We(e, t, n, r) {
  t.child = e === null ? tm(t, null, n, r) : Ai(t, e.child, n, r);
}
function Df(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return (
    Oi(t, s),
    (r = uc(e, t, n, r, a, s)),
    (n = cc()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        nn(e, t, s))
      : (pe && n && Qu(t), (t.flags |= 1), We(e, t, r, s), t.child)
  );
}
function Ff(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !wc(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Cm(e, t, a, r, s))
      : ((e = es(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & s))) {
    var u = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Br), n(u, r) && e.ref === t.ref)
    )
      return nn(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Ln(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cm(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Br(a, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = a), (e.lanes & s) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), nn(e, t, s);
  }
  return iu(e, t, n, r, s);
}
function Tm(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        de(Li, ot),
        (ot |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          de(Li, ot),
          (ot |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        de(Li, ot),
        (ot |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      de(Li, ot),
      (ot |= r);
  return We(e, t, s, n), t.child;
}
function Om(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function iu(e, t, n, r, s) {
  var a = tt(n) ? Vn : Ze.current;
  return (
    (a = Ri(t, a)),
    Oi(t, s),
    (n = uc(e, t, n, r, a, s)),
    (r = cc()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        nn(e, t, s))
      : (pe && r && Qu(t), (t.flags |= 1), We(e, t, n, s), t.child)
  );
}
function jf(e, t, n, r, s) {
  if (tt(n)) {
    var a = !0;
    ms(t);
  } else a = !1;
  if ((Oi(t, s), t.stateNode === null))
    Qo(e, t), Lm(t, n, r), tu(t, n, r, s), (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      d = t.memoizedProps;
    u.props = d;
    var f = u.context,
      p = n.contextType;
    typeof p == "object" && p !== null
      ? (p = wt(p))
      : ((p = tt(n) ? Vn : Ze.current), (p = Ri(t, p)));
    var g = n.getDerivedStateFromProps,
      v =
        typeof g == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((d !== r || f !== p) && Af(t, u, r, p)),
      (dn = !1);
    var _ = t.memoizedState;
    (u.state = _),
      ws(t, r, u, s),
      (f = t.memoizedState),
      d !== r || _ !== f || et.current || dn
        ? (typeof g == "function" && (eu(t, n, g, r), (f = t.memoizedState)),
          (d = dn || Mf(t, n, d, r, _, f, p))
            ? (v ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = f)),
          (u.props = r),
          (u.state = f),
          (u.context = p),
          (r = d))
        : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (u = t.stateNode),
      im(e, t),
      (d = t.memoizedProps),
      (p = t.type === t.elementType ? d : kt(t.type, d)),
      (u.props = p),
      (v = t.pendingProps),
      (_ = u.context),
      (f = n.contextType),
      typeof f == "object" && f !== null
        ? (f = wt(f))
        : ((f = tt(n) ? Vn : Ze.current), (f = Ri(t, f)));
    var k = n.getDerivedStateFromProps;
    (g =
      typeof k == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((d !== v || _ !== f) && Af(t, u, r, f)),
      (dn = !1),
      (_ = t.memoizedState),
      (u.state = _),
      ws(t, r, u, s);
    var P = t.memoizedState;
    d !== v || _ !== P || et.current || dn
      ? (typeof k == "function" && (eu(t, n, k, r), (P = t.memoizedState)),
        (p = dn || Mf(t, n, p, r, _, P, f) || !1)
          ? (g ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, P, f),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, P, f)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (d === e.memoizedProps && _ === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (d === e.memoizedProps && _ === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = P)),
        (u.props = r),
        (u.state = P),
        (u.context = f),
        (r = p))
      : (typeof u.componentDidUpdate != "function" ||
          (d === e.memoizedProps && _ === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (d === e.memoizedProps && _ === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ru(e, t, n, r, a, s);
}
function ru(e, t, n, r, s, a) {
  Om(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return s && kf(t, n, !1), nn(e, t, a);
  (r = t.stateNode), (P0.current = t);
  var d =
    u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = Ai(t, e.child, null, a)), (t.child = Ai(t, null, d, a)))
      : We(e, t, d, a),
    (t.memoizedState = r.state),
    s && kf(t, n, !0),
    t.child
  );
}
function Nm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Lf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lf(e, t.context, !1),
    oc(e, t.containerInfo);
}
function $f(e, t, n, r, s) {
  return Mi(), Xu(s), (t.flags |= 256), We(e, t, n, r), t.child;
}
var ou = { dehydrated: null, treeContext: null, retryLane: 0 };
function su(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zm(e, t, n) {
  var r = t.pendingProps,
    s = ge.current,
    a = !1,
    u = (t.flags & 128) !== 0,
    d;
  if (
    ((d = u) ||
      (d = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    d
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    de(ge, s & 1),
    e === null)
  )
    return (
      Yl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = u))
                : (a = Gs(u, r, 0, null)),
              (e = Zn(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = su(n)),
              (t.memoizedState = ou),
              e)
            : hc(t, u))
    );
  if (((s = e.memoizedState), s !== null && ((d = s.dehydrated), d !== null)))
    return L0(e, t, u, r, d, s, n);
  if (a) {
    (a = r.fallback), (u = t.mode), (s = e.child), (d = s.sibling);
    var f = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = f),
          (t.deletions = null))
        : ((r = Ln(s, f)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      d !== null ? (a = Ln(d, a)) : ((a = Zn(a, u, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? su(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (a.memoizedState = u),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = ou),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Ln(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function hc(e, t) {
  return (
    (t = Gs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Do(e, t, n, r) {
  return (
    r !== null && Xu(r),
    Ai(t, e.child, null, n),
    (e = hc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function L0(e, t, n, r, s, a, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = fl(Error(D(422)))), Do(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (s = t.mode),
        (r = Gs({ mode: "visible", children: r.children }, s, 0, null)),
        (a = Zn(a, s, u, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && Ai(t, e.child, null, u),
        (t.child.memoizedState = su(u)),
        (t.memoizedState = ou),
        a);
  if (!(t.mode & 1)) return Do(e, t, u, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var d = r.dgst;
    return (r = d), (a = Error(D(419))), (r = fl(a, r, void 0)), Do(e, t, u, r);
  }
  if (((d = (u & e.childLanes) !== 0), Xe || d)) {
    if (((r = Ie), r !== null)) {
      switch (u & -u) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | u) ? 0 : s),
        s !== 0 &&
          s !== a.retryLane &&
          ((a.retryLane = s), tn(e, s), Ot(r, e, s, -1));
    }
    return yc(), (r = fl(Error(D(421)))), Do(e, t, u, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = B0.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (st = wn(s.nextSibling)),
      (at = t),
      (pe = !0),
      (Ct = null),
      e !== null &&
        ((gt[vt++] = Jt),
        (gt[vt++] = Qt),
        (gt[vt++] = Wn),
        (Jt = e.id),
        (Qt = e.overflow),
        (Wn = t)),
      (t = hc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xl(e.return, t, n);
}
function hl(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = s));
}
function Rm(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    a = r.tail;
  if ((We(e, t, r.children, n), (r = ge.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uf(e, n, t);
        else if (e.tag === 19) Uf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((de(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && xs(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          hl(t, !1, s, n, a);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && xs(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        hl(t, !0, n, null, a);
        break;
      case "together":
        hl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function k0(e, t, n) {
  switch (t.tag) {
    case 3:
      Nm(t), Mi();
      break;
    case 5:
      rm(t);
      break;
    case 1:
      tt(t.type) && ms(t);
      break;
    case 4:
      oc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      de(_s, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (de(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? zm(e, t, n)
          : (de(ge, ge.current & 1),
            (e = nn(e, t, n)),
            e !== null ? e.sibling : null);
      de(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        de(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Tm(e, t, n);
  }
  return nn(e, t, n);
}
var Mm, au, Am, Im;
Mm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
au = function () {};
Am = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), jn($t.current);
    var a = null;
    switch (n) {
      case "input":
        (s = Ol(e, s)), (r = Ol(e, r)), (a = []);
        break;
      case "select":
        (s = _e({}, s, { value: void 0 })),
          (r = _e({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (s = Rl(e, s)), (r = Rl(e, r)), (a = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = hs);
    }
    Al(n, r);
    var u;
    n = null;
    for (p in s)
      if (!r.hasOwnProperty(p) && s.hasOwnProperty(p) && s[p] != null)
        if (p === "style") {
          var d = s[p];
          for (u in d) d.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
        } else
          p !== "dangerouslySetInnerHTML" &&
            p !== "children" &&
            p !== "suppressContentEditableWarning" &&
            p !== "suppressHydrationWarning" &&
            p !== "autoFocus" &&
            (Nr.hasOwnProperty(p)
              ? a || (a = [])
              : (a = a || []).push(p, null));
    for (p in r) {
      var f = r[p];
      if (
        ((d = s != null ? s[p] : void 0),
        r.hasOwnProperty(p) && f !== d && (f != null || d != null))
      )
        if (p === "style")
          if (d) {
            for (u in d)
              !d.hasOwnProperty(u) ||
                (f && f.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ""));
            for (u in f)
              f.hasOwnProperty(u) &&
                d[u] !== f[u] &&
                (n || (n = {}), (n[u] = f[u]));
          } else n || (a || (a = []), a.push(p, n)), (n = f);
        else
          p === "dangerouslySetInnerHTML"
            ? ((f = f ? f.__html : void 0),
              (d = d ? d.__html : void 0),
              f != null && d !== f && (a = a || []).push(p, f))
            : p === "children"
            ? (typeof f != "string" && typeof f != "number") ||
              (a = a || []).push(p, "" + f)
            : p !== "suppressContentEditableWarning" &&
              p !== "suppressHydrationWarning" &&
              (Nr.hasOwnProperty(p)
                ? (f != null && p === "onScroll" && fe("scroll", e),
                  a || d === f || (a = []))
                : (a = a || []).push(p, f));
    }
    n && (a = a || []).push("style", n);
    var p = a;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
Im = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fr(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function E0(e, t, n) {
  var r = t.pendingProps;
  switch ((Yu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $e(t), null;
    case 1:
      return tt(t.type) && ps(), $e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ii(),
        he(et),
        he(Ze),
        ac(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (bo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ct !== null && (mu(Ct), (Ct = null)))),
        au(e, t),
        $e(t),
        null
      );
    case 5:
      sc(t);
      var s = jn(Ur.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Am(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return $e(t), null;
        }
        if (((e = jn($t.current)), bo(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[Dt] = t), (r[jr] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < yr.length; s++) fe(yr[s], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", r), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              Jd(r, a), fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                fe("invalid", r);
              break;
            case "textarea":
              Yd(r, a), fe("invalid", r);
          }
          Al(n, a), (s = null);
          for (var u in a)
            if (a.hasOwnProperty(u)) {
              var d = a[u];
              u === "children"
                ? typeof d == "string"
                  ? r.textContent !== d &&
                    (a.suppressHydrationWarning !== !0 &&
                      Io(r.textContent, d, e),
                    (s = ["children", d]))
                  : typeof d == "number" &&
                    r.textContent !== "" + d &&
                    (a.suppressHydrationWarning !== !0 &&
                      Io(r.textContent, d, e),
                    (s = ["children", "" + d]))
                : Nr.hasOwnProperty(u) &&
                  d != null &&
                  u === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              Co(r), Qd(r, a, !0);
              break;
            case "textarea":
              Co(r), Xd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = hs);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (u = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = up(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[Dt] = t),
            (e[jr] = r),
            Mm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((u = Il(n, r)), n)) {
              case "dialog":
                fe("cancel", e), fe("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < yr.length; s++) fe(yr[s], e);
                s = r;
                break;
              case "source":
                fe("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", e), fe("load", e), (s = r);
                break;
              case "details":
                fe("toggle", e), (s = r);
                break;
              case "input":
                Jd(e, r), (s = Ol(e, r)), fe("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = _e({}, r, { value: void 0 })),
                  fe("invalid", e);
                break;
              case "textarea":
                Yd(e, r), (s = Rl(e, r)), fe("invalid", e);
                break;
              default:
                s = r;
            }
            Al(n, s), (d = s);
            for (a in d)
              if (d.hasOwnProperty(a)) {
                var f = d[a];
                a === "style"
                  ? fp(e, f)
                  : a === "dangerouslySetInnerHTML"
                  ? ((f = f ? f.__html : void 0), f != null && cp(e, f))
                  : a === "children"
                  ? typeof f == "string"
                    ? (n !== "textarea" || f !== "") && zr(e, f)
                    : typeof f == "number" && zr(e, "" + f)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (Nr.hasOwnProperty(a)
                      ? f != null && a === "onScroll" && fe("scroll", e)
                      : f != null && Bu(e, a, f, u));
              }
            switch (n) {
              case "input":
                Co(e), Qd(e, r, !1);
                break;
              case "textarea":
                Co(e), Xd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + En(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? ki(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      ki(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = hs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) Im(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (((n = jn(Ur.current)), jn($t.current), bo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Dt] = t),
            (a = r.nodeValue !== n) && ((e = at), e !== null))
          )
            switch (e.tag) {
              case 3:
                Io(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Io(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Dt] = t),
            (t.stateNode = r);
      }
      return $e(t), null;
    case 13:
      if (
        (he(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && st !== null && t.mode & 1 && !(t.flags & 128))
          Xp(), Mi(), (t.flags |= 98560), (a = !1);
        else if (((a = bo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(D(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(D(317));
            a[Dt] = t;
          } else
            Mi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $e(t), (a = !1);
        } else Ct !== null && (mu(Ct), (Ct = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? ze === 0 && (ze = 3) : yc())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null);
    case 4:
      return (
        Ii(), au(e, t), e === null && Dr(t.stateNode.containerInfo), $e(t), null
      );
    case 10:
      return nc(t.type._context), $e(t), null;
    case 17:
      return tt(t.type) && ps(), $e(t), null;
    case 19:
      if ((he(ge), (a = t.memoizedState), a === null)) return $e(t), null;
      if (((r = (t.flags & 128) !== 0), (u = a.rendering), u === null))
        if (r) fr(a, !1);
        else {
          if (ze !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((u = xs(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    fr(a, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (u = a.alternate),
                    u === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = u.childLanes),
                        (a.lanes = u.lanes),
                        (a.child = u.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = u.memoizedProps),
                        (a.memoizedState = u.memoizedState),
                        (a.updateQueue = u.updateQueue),
                        (a.type = u.type),
                        (e = u.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return de(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Se() > Bi &&
            ((t.flags |= 128), (r = !0), fr(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xs(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fr(a, !0),
              a.tail === null && a.tailMode === "hidden" && !u.alternate && !pe)
            )
              return $e(t), null;
          } else
            2 * Se() - a.renderingStartTime > Bi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fr(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = a.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (a.last = u));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Se()),
          (t.sibling = null),
          (n = ge.current),
          de(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : ($e(t), null);
    case 22:
    case 23:
      return (
        _c(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ot & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function C0(e, t) {
  switch ((Yu(t), t.tag)) {
    case 1:
      return (
        tt(t.type) && ps(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ii(),
        he(et),
        he(Ze),
        ac(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return sc(t), null;
    case 13:
      if (
        (he(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        Mi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return he(ge), null;
    case 4:
      return Ii(), null;
    case 10:
      return nc(t.type._context), null;
    case 22:
    case 23:
      return _c(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fo = !1,
  Ue = !1,
  T0 = typeof WeakSet == "function" ? WeakSet : Set,
  Z = null;
function Pi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function lu(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var Zf = !1;
function O0(e, t) {
  if (((Vl = cs), (e = jp()), Ju(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            d = -1,
            f = -1,
            p = 0,
            g = 0,
            v = e,
            _ = null;
          t: for (;;) {
            for (
              var k;
              v !== n || (s !== 0 && v.nodeType !== 3) || (d = u + s),
                v !== a || (r !== 0 && v.nodeType !== 3) || (f = u + r),
                v.nodeType === 3 && (u += v.nodeValue.length),
                (k = v.firstChild) !== null;

            )
              (_ = v), (v = k);
            for (;;) {
              if (v === e) break t;
              if (
                (_ === n && ++p === s && (d = u),
                _ === a && ++g === r && (f = u),
                (k = v.nextSibling) !== null)
              )
                break;
              (v = _), (_ = v.parentNode);
            }
            v = k;
          }
          n = d === -1 || f === -1 ? null : { start: d, end: f };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wl = { focusedElem: e, selectionRange: n }, cs = !1, Z = t; Z !== null; )
    if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Z = e);
    else
      for (; Z !== null; ) {
        t = Z;
        try {
          var P = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (P !== null) {
                  var E = P.memoizedProps,
                    T = P.memoizedState,
                    w = t.stateNode,
                    y = w.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : kt(t.type, E),
                      T
                    );
                  w.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (O) {
          we(t, t.return, O);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Z = e);
          break;
        }
        Z = t.return;
      }
  return (P = Zf), (Zf = !1), P;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var a = s.destroy;
        (s.destroy = void 0), a !== void 0 && lu(t, n, a);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Ws(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Dt], delete t[jr], delete t[ql], delete t[d0], delete t[f0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Bm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), (e = e.sibling);
}
function du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (du(e, t, n), e = e.sibling; e !== null; ) du(e, t, n), (e = e.sibling);
}
var Be = null,
  Et = !1;
function ln(e, t, n) {
  for (n = n.child; n !== null; ) Dm(e, t, n), (n = n.sibling);
}
function Dm(e, t, n) {
  if (jt && typeof jt.onCommitFiberUnmount == "function")
    try {
      jt.onCommitFiberUnmount(Ds, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || Pi(n, t);
    case 6:
      var r = Be,
        s = Et;
      (Be = null),
        ln(e, t, n),
        (Be = r),
        (Et = s),
        Be !== null &&
          (Et
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Be.removeChild(n.stateNode));
      break;
    case 18:
      Be !== null &&
        (Et
          ? ((e = Be),
            (n = n.stateNode),
            e.nodeType === 8
              ? sl(e.parentNode, n)
              : e.nodeType === 1 && sl(e, n),
            Ir(e))
          : sl(Be, n.stateNode));
      break;
    case 4:
      (r = Be),
        (s = Et),
        (Be = n.stateNode.containerInfo),
        (Et = !0),
        ln(e, t, n),
        (Be = r),
        (Et = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var a = s,
            u = a.destroy;
          (a = a.tag),
            u !== void 0 && (a & 2 || a & 4) && lu(n, t, u),
            (s = s.next);
        } while (s !== r);
      }
      ln(e, t, n);
      break;
    case 1:
      if (
        !Ue &&
        (Pi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (d) {
          we(n, t, d);
        }
      ln(e, t, n);
      break;
    case 21:
      ln(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ue = (r = Ue) || n.memoizedState !== null), ln(e, t, n), (Ue = r))
        : ln(e, t, n);
      break;
    default:
      ln(e, t, n);
  }
}
function Vf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new T0()),
      t.forEach(function (r) {
        var s = D0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function Lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var a = e,
          u = t,
          d = u;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              (Be = d.stateNode), (Et = !1);
              break e;
            case 3:
              (Be = d.stateNode.containerInfo), (Et = !0);
              break e;
            case 4:
              (Be = d.stateNode.containerInfo), (Et = !0);
              break e;
          }
          d = d.return;
        }
        if (Be === null) throw Error(D(160));
        Dm(a, u, s), (Be = null), (Et = !1);
        var f = s.alternate;
        f !== null && (f.return = null), (s.return = null);
      } catch (p) {
        we(s, t, p);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Fm(t, e), (t = t.sibling);
}
function Fm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Lt(t, e), bt(e), r & 4)) {
        try {
          Er(3, e, e.return), Ws(3, e);
        } catch (E) {
          we(e, e.return, E);
        }
        try {
          Er(5, e, e.return);
        } catch (E) {
          we(e, e.return, E);
        }
      }
      break;
    case 1:
      Lt(t, e), bt(e), r & 512 && n !== null && Pi(n, n.return);
      break;
    case 5:
      if (
        (Lt(t, e),
        bt(e),
        r & 512 && n !== null && Pi(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          zr(s, "");
        } catch (E) {
          we(e, e.return, E);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var a = e.memoizedProps,
          u = n !== null ? n.memoizedProps : a,
          d = e.type,
          f = e.updateQueue;
        if (((e.updateQueue = null), f !== null))
          try {
            d === "input" && a.type === "radio" && a.name != null && ap(s, a),
              Il(d, u);
            var p = Il(d, a);
            for (u = 0; u < f.length; u += 2) {
              var g = f[u],
                v = f[u + 1];
              g === "style"
                ? fp(s, v)
                : g === "dangerouslySetInnerHTML"
                ? cp(s, v)
                : g === "children"
                ? zr(s, v)
                : Bu(s, g, v, p);
            }
            switch (d) {
              case "input":
                Nl(s, a);
                break;
              case "textarea":
                lp(s, a);
                break;
              case "select":
                var _ = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!a.multiple;
                var k = a.value;
                k != null
                  ? ki(s, !!a.multiple, k, !1)
                  : _ !== !!a.multiple &&
                    (a.defaultValue != null
                      ? ki(s, !!a.multiple, a.defaultValue, !0)
                      : ki(s, !!a.multiple, a.multiple ? [] : "", !1));
            }
            s[jr] = a;
          } catch (E) {
            we(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((Lt(t, e), bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (s = e.stateNode), (a = e.memoizedProps);
        try {
          s.nodeValue = a;
        } catch (E) {
          we(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (Lt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ir(t.containerInfo);
        } catch (E) {
          we(e, e.return, E);
        }
      break;
    case 4:
      Lt(t, e), bt(e);
      break;
    case 13:
      Lt(t, e),
        bt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((a = s.memoizedState !== null),
          (s.stateNode.isHidden = a),
          !a ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (gc = Se())),
        r & 4 && Vf(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ue = (p = Ue) || g), Lt(t, e), (Ue = p)) : Lt(t, e),
        bt(e),
        r & 8192)
      ) {
        if (
          ((p = e.memoizedState !== null),
          (e.stateNode.isHidden = p) && !g && e.mode & 1)
        )
          for (Z = e, g = e.child; g !== null; ) {
            for (v = Z = g; Z !== null; ) {
              switch (((_ = Z), (k = _.child), _.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, _, _.return);
                  break;
                case 1:
                  Pi(_, _.return);
                  var P = _.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    (r = _), (n = _.return);
                    try {
                      (t = r),
                        (P.props = t.memoizedProps),
                        (P.state = t.memoizedState),
                        P.componentWillUnmount();
                    } catch (E) {
                      we(r, n, E);
                    }
                  }
                  break;
                case 5:
                  Pi(_, _.return);
                  break;
                case 22:
                  if (_.memoizedState !== null) {
                    Kf(v);
                    continue;
                  }
              }
              k !== null ? ((k.return = _), (Z = k)) : Kf(v);
            }
            g = g.sibling;
          }
        e: for (g = null, v = e; ; ) {
          if (v.tag === 5) {
            if (g === null) {
              g = v;
              try {
                (s = v.stateNode),
                  p
                    ? ((a = s.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((d = v.stateNode),
                      (f = v.memoizedProps.style),
                      (u =
                        f != null && f.hasOwnProperty("display")
                          ? f.display
                          : null),
                      (d.style.display = dp("display", u)));
              } catch (E) {
                we(e, e.return, E);
              }
            }
          } else if (v.tag === 6) {
            if (g === null)
              try {
                v.stateNode.nodeValue = p ? "" : v.memoizedProps;
              } catch (E) {
                we(e, e.return, E);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            g === v && (g = null), (v = v.return);
          }
          g === v && (g = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Lt(t, e), bt(e), r & 4 && Vf(e);
      break;
    case 21:
      break;
    default:
      Lt(t, e), bt(e);
  }
}
function bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (zr(s, ""), (r.flags &= -33));
          var a = Hf(e);
          du(e, a, s);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            d = Hf(e);
          cu(e, d, u);
          break;
        default:
          throw Error(D(161));
      }
    } catch (f) {
      we(e, e.return, f);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function N0(e, t, n) {
  (Z = e), jm(e);
}
function jm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var s = Z,
      a = s.child;
    if (s.tag === 22 && r) {
      var u = s.memoizedState !== null || Fo;
      if (!u) {
        var d = s.alternate,
          f = (d !== null && d.memoizedState !== null) || Ue;
        d = Fo;
        var p = Ue;
        if (((Fo = u), (Ue = f) && !p))
          for (Z = s; Z !== null; )
            (u = Z),
              (f = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? Gf(s)
                : f !== null
                ? ((f.return = u), (Z = f))
                : Gf(s);
        for (; a !== null; ) (Z = a), jm(a), (a = a.sibling);
        (Z = s), (Fo = d), (Ue = p);
      }
      Wf(e);
    } else
      s.subtreeFlags & 8772 && a !== null ? ((a.return = s), (Z = a)) : Wf(e);
  }
}
function Wf(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || Ws(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : kt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Nf(t, a, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Nf(t, u, n);
              }
              break;
            case 5:
              var d = t.stateNode;
              if (n === null && t.flags & 4) {
                n = d;
                var f = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    f.autoFocus && n.focus();
                    break;
                  case "img":
                    f.src && (n.src = f.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var p = t.alternate;
                if (p !== null) {
                  var g = p.memoizedState;
                  if (g !== null) {
                    var v = g.dehydrated;
                    v !== null && Ir(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        Ue || (t.flags & 512 && uu(t));
      } catch (_) {
        we(t, t.return, _);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Z = n);
      break;
    }
    Z = t.return;
  }
}
function Kf(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Z = n);
      break;
    }
    Z = t.return;
  }
}
function Gf(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ws(4, t);
          } catch (f) {
            we(t, n, f);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (f) {
              we(t, s, f);
            }
          }
          var a = t.return;
          try {
            uu(t);
          } catch (f) {
            we(t, a, f);
          }
          break;
        case 5:
          var u = t.return;
          try {
            uu(t);
          } catch (f) {
            we(t, u, f);
          }
      }
    } catch (f) {
      we(t, t.return, f);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var d = t.sibling;
    if (d !== null) {
      (d.return = t.return), (Z = d);
      break;
    }
    Z = t.return;
  }
}
var z0 = Math.ceil,
  Ls = rn.ReactCurrentDispatcher,
  pc = rn.ReactCurrentOwner,
  yt = rn.ReactCurrentBatchConfig,
  ie = 0,
  Ie = null,
  Ee = null,
  De = 0,
  ot = 0,
  Li = On(0),
  ze = 0,
  Wr = null,
  Gn = 0,
  Ks = 0,
  mc = 0,
  Cr = null,
  Ye = null,
  gc = 0,
  Bi = 1 / 0,
  Gt = null,
  ks = !1,
  fu = null,
  Sn = null,
  jo = !1,
  mn = null,
  Es = 0,
  Tr = 0,
  hu = null,
  Yo = -1,
  Xo = 0;
function Ke() {
  return ie & 6 ? Se() : Yo !== -1 ? Yo : (Yo = Se());
}
function Pn(e) {
  return e.mode & 1
    ? ie & 2 && De !== 0
      ? De & -De
      : p0.transition !== null
      ? (Xo === 0 && (Xo = Lp()), Xo)
      : ((e = le),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zp(e.type))),
        e)
    : 1;
}
function Ot(e, t, n, r) {
  if (50 < Tr) throw ((Tr = 0), (hu = null), Error(D(185)));
  Yr(e, n, r),
    (!(ie & 2) || e !== Ie) &&
      (e === Ie && (!(ie & 2) && (Ks |= n), ze === 4 && hn(e, De)),
      nt(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && ((Bi = Se() + 500), Zs && Nn()));
}
function nt(e, t) {
  var n = e.callbackNode;
  py(e, t);
  var r = us(e, e === Ie ? De : 0);
  if (r === 0)
    n !== null && nf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nf(n), t === 1))
      e.tag === 0 ? h0(qf.bind(null, e)) : Jp(qf.bind(null, e)),
        u0(function () {
          !(ie & 6) && Nn();
        }),
        (n = null);
    else {
      switch (kp(r)) {
        case 1:
          n = Uu;
          break;
        case 4:
          n = Sp;
          break;
        case 16:
          n = ls;
          break;
        case 536870912:
          n = Pp;
          break;
        default:
          n = ls;
      }
      n = Gm(n, $m.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function $m(e, t) {
  if (((Yo = -1), (Xo = 0), ie & 6)) throw Error(D(327));
  var n = e.callbackNode;
  if (Ni() && e.callbackNode !== n) return null;
  var r = us(e, e === Ie ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var s = ie;
    ie |= 2;
    var a = Zm();
    (Ie !== e || De !== t) && ((Gt = null), (Bi = Se() + 500), Un(e, t));
    do
      try {
        A0();
        break;
      } catch (d) {
        Um(e, d);
      }
    while (!0);
    tc(),
      (Ls.current = a),
      (ie = s),
      Ee !== null ? (t = 0) : ((Ie = null), (De = 0), (t = ze));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = jl(e)), s !== 0 && ((r = s), (t = pu(e, s)))), t === 1)
    )
      throw ((n = Wr), Un(e, 0), hn(e, r), nt(e, Se()), n);
    if (t === 6) hn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !R0(s) &&
          ((t = Cs(e, r)),
          t === 2 && ((a = jl(e)), a !== 0 && ((r = a), (t = pu(e, a)))),
          t === 1))
      )
        throw ((n = Wr), Un(e, 0), hn(e, r), nt(e, Se()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          Bn(e, Ye, Gt);
          break;
        case 3:
          if (
            (hn(e, r), (r & 130023424) === r && ((t = gc + 500 - Se()), 10 < t))
          ) {
            if (us(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              Ke(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Gl(Bn.bind(null, e, Ye, Gt), t);
            break;
          }
          Bn(e, Ye, Gt);
          break;
        case 4:
          if ((hn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var u = 31 - Tt(r);
            (a = 1 << u), (u = t[u]), u > s && (s = u), (r &= ~a);
          }
          if (
            ((r = s),
            (r = Se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * z0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Gl(Bn.bind(null, e, Ye, Gt), r);
            break;
          }
          Bn(e, Ye, Gt);
          break;
        case 5:
          Bn(e, Ye, Gt);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return nt(e, Se()), e.callbackNode === n ? $m.bind(null, e) : null;
}
function pu(e, t) {
  var n = Cr;
  return (
    e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256),
    (e = Cs(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && mu(t)),
    e
  );
}
function mu(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function R0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            a = s.getSnapshot;
          s = s.value;
          try {
            if (!Nt(a(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function hn(e, t) {
  for (
    t &= ~mc,
      t &= ~Ks,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function qf(e) {
  if (ie & 6) throw Error(D(327));
  Ni();
  var t = us(e, 0);
  if (!(t & 1)) return nt(e, Se()), null;
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = jl(e);
    r !== 0 && ((t = r), (n = pu(e, r)));
  }
  if (n === 1) throw ((n = Wr), Un(e, 0), hn(e, t), nt(e, Se()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bn(e, Ye, Gt),
    nt(e, Se()),
    null
  );
}
function vc(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = n), ie === 0 && ((Bi = Se() + 500), Zs && Nn());
  }
}
function qn(e) {
  mn !== null && mn.tag === 0 && !(ie & 6) && Ni();
  var t = ie;
  ie |= 1;
  var n = yt.transition,
    r = le;
  try {
    if (((yt.transition = null), (le = 1), e)) return e();
  } finally {
    (le = r), (yt.transition = n), (ie = t), !(ie & 6) && Nn();
  }
}
function _c() {
  (ot = Li.current), he(Li);
}
function Un(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), l0(n)), Ee !== null))
    for (n = Ee.return; n !== null; ) {
      var r = n;
      switch ((Yu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ps();
          break;
        case 3:
          Ii(), he(et), he(Ze), ac();
          break;
        case 5:
          sc(r);
          break;
        case 4:
          Ii();
          break;
        case 13:
          he(ge);
          break;
        case 19:
          he(ge);
          break;
        case 10:
          nc(r.type._context);
          break;
        case 22:
        case 23:
          _c();
      }
      n = n.return;
    }
  if (
    ((Ie = e),
    (Ee = e = Ln(e.current, null)),
    (De = ot = t),
    (ze = 0),
    (Wr = null),
    (mc = Ks = Gn = 0),
    (Ye = Cr = null),
    Fn !== null)
  ) {
    for (t = 0; t < Fn.length; t++)
      if (((n = Fn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          a = n.pending;
        if (a !== null) {
          var u = a.next;
          (a.next = s), (r.next = u);
        }
        n.pending = r;
      }
    Fn = null;
  }
  return e;
}
function Um(e, t) {
  do {
    var n = Ee;
    try {
      if ((tc(), (qo.current = Ps), Ss)) {
        for (var r = ve.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        Ss = !1;
      }
      if (
        ((Kn = 0),
        (Ae = Ne = ve = null),
        (kr = !1),
        (Zr = 0),
        (pc.current = null),
        n === null || n.return === null)
      ) {
        (ze = 1), (Wr = t), (Ee = null);
        break;
      }
      e: {
        var a = e,
          u = n.return,
          d = n,
          f = t;
        if (
          ((t = De),
          (d.flags |= 32768),
          f !== null && typeof f == "object" && typeof f.then == "function")
        ) {
          var p = f,
            g = d,
            v = g.tag;
          if (!(g.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var _ = g.alternate;
            _
              ? ((g.updateQueue = _.updateQueue),
                (g.memoizedState = _.memoizedState),
                (g.lanes = _.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var k = bf(u);
          if (k !== null) {
            (k.flags &= -257),
              Bf(k, u, d, a, t),
              k.mode & 1 && If(a, p, t),
              (t = k),
              (f = p);
            var P = t.updateQueue;
            if (P === null) {
              var E = new Set();
              E.add(f), (t.updateQueue = E);
            } else P.add(f);
            break e;
          } else {
            if (!(t & 1)) {
              If(a, p, t), yc();
              break e;
            }
            f = Error(D(426));
          }
        } else if (pe && d.mode & 1) {
          var T = bf(u);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              Bf(T, u, d, a, t),
              Xu(bi(f, d));
            break e;
          }
        }
        (a = f = bi(f, d)),
          ze !== 4 && (ze = 2),
          Cr === null ? (Cr = [a]) : Cr.push(a),
          (a = u);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var w = km(a, f, t);
              Of(a, w);
              break e;
            case 1:
              d = f;
              var y = a.type,
                x = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Sn === null || !Sn.has(x))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var O = Em(a, d, t);
                Of(a, O);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Vm(n);
    } catch (M) {
      (t = M), Ee === n && n !== null && (Ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zm() {
  var e = Ls.current;
  return (Ls.current = Ps), e === null ? Ps : e;
}
function yc() {
  (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
    Ie === null || (!(Gn & 268435455) && !(Ks & 268435455)) || hn(Ie, De);
}
function Cs(e, t) {
  var n = ie;
  ie |= 2;
  var r = Zm();
  (Ie !== e || De !== t) && ((Gt = null), Un(e, t));
  do
    try {
      M0();
      break;
    } catch (s) {
      Um(e, s);
    }
  while (!0);
  if ((tc(), (ie = n), (Ls.current = r), Ee !== null)) throw Error(D(261));
  return (Ie = null), (De = 0), ze;
}
function M0() {
  for (; Ee !== null; ) Hm(Ee);
}
function A0() {
  for (; Ee !== null && !oy(); ) Hm(Ee);
}
function Hm(e) {
  var t = Km(e.alternate, e, ot);
  (e.memoizedProps = e.pendingProps),
    t === null ? Vm(e) : (Ee = t),
    (pc.current = null);
}
function Vm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = C0(n, t)), n !== null)) {
        (n.flags &= 32767), (Ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ze = 6), (Ee = null);
        return;
      }
    } else if (((n = E0(n, t, ot)), n !== null)) {
      Ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  ze === 0 && (ze = 5);
}
function Bn(e, t, n) {
  var r = le,
    s = yt.transition;
  try {
    (yt.transition = null), (le = 1), I0(e, t, n, r);
  } finally {
    (yt.transition = s), (le = r);
  }
  return null;
}
function I0(e, t, n, r) {
  do Ni();
  while (mn !== null);
  if (ie & 6) throw Error(D(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (my(e, a),
    e === Ie && ((Ee = Ie = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jo ||
      ((jo = !0),
      Gm(ls, function () {
        return Ni(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = yt.transition), (yt.transition = null);
    var u = le;
    le = 1;
    var d = ie;
    (ie |= 4),
      (pc.current = null),
      O0(e, n),
      Fm(n, e),
      t0(Wl),
      (cs = !!Vl),
      (Wl = Vl = null),
      (e.current = n),
      N0(n),
      sy(),
      (ie = d),
      (le = u),
      (yt.transition = a);
  } else e.current = n;
  if (
    (jo && ((jo = !1), (mn = e), (Es = s)),
    (a = e.pendingLanes),
    a === 0 && (Sn = null),
    uy(n.stateNode),
    nt(e, Se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (ks) throw ((ks = !1), (e = fu), (fu = null), e);
  return (
    Es & 1 && e.tag !== 0 && Ni(),
    (a = e.pendingLanes),
    a & 1 ? (e === hu ? Tr++ : ((Tr = 0), (hu = e))) : (Tr = 0),
    Nn(),
    null
  );
}
function Ni() {
  if (mn !== null) {
    var e = kp(Es),
      t = yt.transition,
      n = le;
    try {
      if (((yt.transition = null), (le = 16 > e ? 16 : e), mn === null))
        var r = !1;
      else {
        if (((e = mn), (mn = null), (Es = 0), ie & 6)) throw Error(D(331));
        var s = ie;
        for (ie |= 4, Z = e.current; Z !== null; ) {
          var a = Z,
            u = a.child;
          if (Z.flags & 16) {
            var d = a.deletions;
            if (d !== null) {
              for (var f = 0; f < d.length; f++) {
                var p = d[f];
                for (Z = p; Z !== null; ) {
                  var g = Z;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, g, a);
                  }
                  var v = g.child;
                  if (v !== null) (v.return = g), (Z = v);
                  else
                    for (; Z !== null; ) {
                      g = Z;
                      var _ = g.sibling,
                        k = g.return;
                      if ((bm(g), g === p)) {
                        Z = null;
                        break;
                      }
                      if (_ !== null) {
                        (_.return = k), (Z = _);
                        break;
                      }
                      Z = k;
                    }
                }
              }
              var P = a.alternate;
              if (P !== null) {
                var E = P.child;
                if (E !== null) {
                  P.child = null;
                  do {
                    var T = E.sibling;
                    (E.sibling = null), (E = T);
                  } while (E !== null);
                }
              }
              Z = a;
            }
          }
          if (a.subtreeFlags & 2064 && u !== null) (u.return = a), (Z = u);
          else
            e: for (; Z !== null; ) {
              if (((a = Z), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, a, a.return);
                }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (Z = w);
                break e;
              }
              Z = a.return;
            }
        }
        var y = e.current;
        for (Z = y; Z !== null; ) {
          u = Z;
          var x = u.child;
          if (u.subtreeFlags & 2064 && x !== null) (x.return = u), (Z = x);
          else
            e: for (u = y; Z !== null; ) {
              if (((d = Z), d.flags & 2048))
                try {
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ws(9, d);
                  }
                } catch (M) {
                  we(d, d.return, M);
                }
              if (d === u) {
                Z = null;
                break e;
              }
              var O = d.sibling;
              if (O !== null) {
                (O.return = d.return), (Z = O);
                break e;
              }
              Z = d.return;
            }
        }
        if (
          ((ie = s), Nn(), jt && typeof jt.onPostCommitFiberRoot == "function")
        )
          try {
            jt.onPostCommitFiberRoot(Ds, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (le = n), (yt.transition = t);
    }
  }
  return !1;
}
function Jf(e, t, n) {
  (t = bi(n, t)),
    (t = km(e, t, 1)),
    (e = xn(e, t, 1)),
    (t = Ke()),
    e !== null && (Yr(e, 1, t), nt(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) Jf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Sn === null || !Sn.has(r)))
        ) {
          (e = bi(n, e)),
            (e = Em(t, e, 1)),
            (t = xn(t, e, 1)),
            (e = Ke()),
            t !== null && (Yr(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function b0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ie === e &&
      (De & n) === n &&
      (ze === 4 || (ze === 3 && (De & 130023424) === De && 500 > Se() - gc)
        ? Un(e, 0)
        : (mc |= n)),
    nt(e, t);
}
function Wm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = No), (No <<= 1), !(No & 130023424) && (No = 4194304))
      : (t = 1));
  var n = Ke();
  (e = tn(e, t)), e !== null && (Yr(e, t, n), nt(e, n));
}
function B0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wm(e, n);
}
function D0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  r !== null && r.delete(t), Wm(e, n);
}
var Km;
Km = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || et.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), k0(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), pe && t.flags & 1048576 && Qp(t, vs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qo(e, t), (e = t.pendingProps);
      var s = Ri(t, Ze.current);
      Oi(t, n), (s = uc(null, t, r, e, s, n));
      var a = cc();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            tt(r) ? ((a = !0), ms(t)) : (a = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            rc(t),
            (s.updater = Vs),
            (t.stateNode = s),
            (s._reactInternals = t),
            tu(t, r, e, n),
            (t = ru(null, t, r, !0, a, n)))
          : ((t.tag = 0), pe && a && Qu(t), We(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qo(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = j0(r)),
          (e = kt(r, e)),
          s)
        ) {
          case 0:
            t = iu(null, t, r, e, n);
            break e;
          case 1:
            t = jf(null, t, r, e, n);
            break e;
          case 11:
            t = Df(null, t, r, e, n);
            break e;
          case 14:
            t = Ff(null, t, r, kt(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : kt(r, s)),
        iu(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : kt(r, s)),
        jf(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Nm(t), e === null)) throw Error(D(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (s = a.element),
          im(e, t),
          ws(t, r, null, n);
        var u = t.memoizedState;
        if (((r = u.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (s = bi(Error(D(423)), t)), (t = $f(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = bi(Error(D(424)), t)), (t = $f(e, t, r, n, s));
            break e;
          } else
            for (
              st = wn(t.stateNode.containerInfo.firstChild),
                at = t,
                pe = !0,
                Ct = null,
                n = tm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Mi(), r === s)) {
            t = nn(e, t, n);
            break e;
          }
          We(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        rm(t),
        e === null && Yl(t),
        (r = t.type),
        (s = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (u = s.children),
        Kl(r, s) ? (u = null) : a !== null && Kl(r, a) && (t.flags |= 32),
        Om(e, t),
        We(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && Yl(t), null;
    case 13:
      return zm(e, t, n);
    case 4:
      return (
        oc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ai(t, null, r, n)) : We(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : kt(r, s)),
        Df(e, t, r, s, n)
      );
    case 7:
      return We(e, t, t.pendingProps, n), t.child;
    case 8:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (a = t.memoizedProps),
          (u = s.value),
          de(_s, r._currentValue),
          (r._currentValue = u),
          a !== null)
        )
          if (Nt(a.value, u)) {
            if (a.children === s.children && !et.current) {
              t = nn(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var d = a.dependencies;
              if (d !== null) {
                u = a.child;
                for (var f = d.firstContext; f !== null; ) {
                  if (f.context === r) {
                    if (a.tag === 1) {
                      (f = Yt(-1, n & -n)), (f.tag = 2);
                      var p = a.updateQueue;
                      if (p !== null) {
                        p = p.shared;
                        var g = p.pending;
                        g === null
                          ? (f.next = f)
                          : ((f.next = g.next), (g.next = f)),
                          (p.pending = f);
                      }
                    }
                    (a.lanes |= n),
                      (f = a.alternate),
                      f !== null && (f.lanes |= n),
                      Xl(a.return, n, t),
                      (d.lanes |= n);
                    break;
                  }
                  f = f.next;
                }
              } else if (a.tag === 10) u = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((u = a.return), u === null)) throw Error(D(341));
                (u.lanes |= n),
                  (d = u.alternate),
                  d !== null && (d.lanes |= n),
                  Xl(u, n, t),
                  (u = a.sibling);
              } else u = a.child;
              if (u !== null) u.return = a;
              else
                for (u = a; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((a = u.sibling), a !== null)) {
                    (a.return = u.return), (u = a);
                    break;
                  }
                  u = u.return;
                }
              a = u;
            }
        We(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Oi(t, n),
        (s = wt(s)),
        (r = r(s)),
        (t.flags |= 1),
        We(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = kt(r, t.pendingProps)),
        (s = kt(r.type, s)),
        Ff(e, t, r, s, n)
      );
    case 15:
      return Cm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : kt(r, s)),
        Qo(e, t),
        (t.tag = 1),
        tt(r) ? ((e = !0), ms(t)) : (e = !1),
        Oi(t, n),
        Lm(t, r, s),
        tu(t, r, s, n),
        ru(null, t, r, !0, e, n)
      );
    case 19:
      return Rm(e, t, n);
    case 22:
      return Tm(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function Gm(e, t) {
  return xp(e, t);
}
function F0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _t(e, t, n, r) {
  return new F0(e, t, n, r);
}
function wc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function j0(e) {
  if (typeof e == "function") return wc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Fu)) return 11;
    if (e === ju) return 14;
  }
  return 2;
}
function Ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _t(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function es(e, t, n, r, s, a) {
  var u = 2;
  if (((r = e), typeof e == "function")) wc(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case pi:
        return Zn(n.children, s, a, t);
      case Du:
        (u = 8), (s |= 8);
        break;
      case kl:
        return (
          (e = _t(12, n, t, s | 2)), (e.elementType = kl), (e.lanes = a), e
        );
      case El:
        return (e = _t(13, n, t, s)), (e.elementType = El), (e.lanes = a), e;
      case Cl:
        return (e = _t(19, n, t, s)), (e.elementType = Cl), (e.lanes = a), e;
      case rp:
        return Gs(n, s, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case np:
              u = 10;
              break e;
            case ip:
              u = 9;
              break e;
            case Fu:
              u = 11;
              break e;
            case ju:
              u = 14;
              break e;
            case cn:
              (u = 16), (r = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _t(u, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function Zn(e, t, n, r) {
  return (e = _t(7, e, r, t)), (e.lanes = n), e;
}
function Gs(e, t, n, r) {
  return (
    (e = _t(22, e, r, t)),
    (e.elementType = rp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function pl(e, t, n) {
  return (e = _t(6, e, null, t)), (e.lanes = n), e;
}
function ml(e, t, n) {
  return (
    (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $0(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = qa(0)),
    (this.expirationTimes = qa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = qa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function xc(e, t, n, r, s, a, u, d, f) {
  return (
    (e = new $0(e, t, n, d, f)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = _t(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    rc(a),
    e
  );
}
function U0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: hi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qm(e) {
  if (!e) return Cn;
  e = e._reactInternals;
  e: {
    if (Yn(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (tt(n)) return qp(e, n, t);
  }
  return t;
}
function Jm(e, t, n, r, s, a, u, d, f) {
  return (
    (e = xc(n, r, !0, e, s, a, u, d, f)),
    (e.context = qm(null)),
    (n = e.current),
    (r = Ke()),
    (s = Pn(n)),
    (a = Yt(r, s)),
    (a.callback = t ?? null),
    xn(n, a, s),
    (e.current.lanes = s),
    Yr(e, s, r),
    nt(e, r),
    e
  );
}
function qs(e, t, n, r) {
  var s = t.current,
    a = Ke(),
    u = Pn(s);
  return (
    (n = qm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yt(a, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xn(s, t, u)),
    e !== null && (Ot(e, s, u, a), Go(e, s, u)),
    u
  );
}
function Ts(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sc(e, t) {
  Qf(e, t), (e = e.alternate) && Qf(e, t);
}
function Z0() {
  return null;
}
var Qm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Pc(e) {
  this._internalRoot = e;
}
Js.prototype.render = Pc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  qs(e, t, null, null);
};
Js.prototype.unmount = Pc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qn(function () {
      qs(null, e, null, null);
    }),
      (t[en] = null);
  }
};
function Js(e) {
  this._internalRoot = e;
}
Js.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++);
    fn.splice(n, 0, e), n === 0 && Np(e);
  }
};
function Lc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Yf() {}
function H0(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var p = Ts(u);
        a.call(p);
      };
    }
    var u = Jm(t, r, e, 0, null, !1, !1, "", Yf);
    return (
      (e._reactRootContainer = u),
      (e[en] = u.current),
      Dr(e.nodeType === 8 ? e.parentNode : e),
      qn(),
      u
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var d = r;
    r = function () {
      var p = Ts(f);
      d.call(p);
    };
  }
  var f = xc(e, 0, !1, null, null, !1, !1, "", Yf);
  return (
    (e._reactRootContainer = f),
    (e[en] = f.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    qn(function () {
      qs(t, f, n, r);
    }),
    f
  );
}
function Ys(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var u = a;
    if (typeof s == "function") {
      var d = s;
      s = function () {
        var f = Ts(u);
        d.call(f);
      };
    }
    qs(t, u, e, s);
  } else u = H0(n, t, e, s, r);
  return Ts(u);
}
Ep = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 &&
          (Zu(t, n | 1), nt(t, Se()), !(ie & 6) && ((Bi = Se() + 500), Nn()));
      }
      break;
    case 13:
      qn(function () {
        var r = tn(e, 1);
        if (r !== null) {
          var s = Ke();
          Ot(r, e, 1, s);
        }
      }),
        Sc(e, 1);
  }
};
Hu = function (e) {
  if (e.tag === 13) {
    var t = tn(e, 134217728);
    if (t !== null) {
      var n = Ke();
      Ot(t, e, 134217728, n);
    }
    Sc(e, 134217728);
  }
};
Cp = function (e) {
  if (e.tag === 13) {
    var t = Pn(e),
      n = tn(e, t);
    if (n !== null) {
      var r = Ke();
      Ot(n, e, t, r);
    }
    Sc(e, t);
  }
};
Tp = function () {
  return le;
};
Op = function (e, t) {
  var n = le;
  try {
    return (le = e), t();
  } finally {
    le = n;
  }
};
Bl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Nl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Us(r);
            if (!s) throw Error(D(90));
            sp(r), Nl(r, s);
          }
        }
      }
      break;
    case "textarea":
      lp(e, n);
      break;
    case "select":
      (t = n.value), t != null && ki(e, !!n.multiple, t, !1);
  }
};
mp = vc;
gp = qn;
var V0 = { usingClientEntryPoint: !1, Events: [eo, _i, Us, hp, pp, vc] },
  hr = {
    findFiberByHostInstance: Dn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  W0 = {
    bundleType: hr.bundleType,
    version: hr.version,
    rendererPackageName: hr.rendererPackageName,
    rendererConfig: hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = yp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: hr.findFiberByHostInstance || Z0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$o.isDisabled && $o.supportsFiber)
    try {
      (Ds = $o.inject(W0)), (jt = $o);
    } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V0;
ct.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lc(t)) throw Error(D(200));
  return U0(e, t, null, n);
};
ct.createRoot = function (e, t) {
  if (!Lc(e)) throw Error(D(299));
  var n = !1,
    r = "",
    s = Qm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = xc(e, 1, !1, null, null, n, !1, r, s)),
    (e[en] = t.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    new Pc(t)
  );
};
ct.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return (e = yp(t)), (e = e === null ? null : e.stateNode), e;
};
ct.flushSync = function (e) {
  return qn(e);
};
ct.hydrate = function (e, t, n) {
  if (!Qs(t)) throw Error(D(200));
  return Ys(null, e, t, !0, n);
};
ct.hydrateRoot = function (e, t, n) {
  if (!Lc(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    a = "",
    u = Qm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = Jm(t, null, e, 1, n ?? null, s, !1, a, u)),
    (e[en] = t.current),
    Dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new Js(t);
};
ct.render = function (e, t, n) {
  if (!Qs(t)) throw Error(D(200));
  return Ys(null, e, t, !1, n);
};
ct.unmountComponentAtNode = function (e) {
  if (!Qs(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (qn(function () {
        Ys(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[en] = null);
        });
      }),
      !0)
    : !1;
};
ct.unstable_batchedUpdates = vc;
ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qs(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Ys(e, t, n, !1, r);
};
ct.version = "18.3.1-next-f1338f8080-20240426";
function Ym() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ym);
    } catch (e) {
      console.error(e);
    }
}
Ym(), (Yh.exports = ct);
var Xm = Yh.exports,
  eg,
  Xf = Xm;
(eg = Xf.createRoot), Xf.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Kr() {
  return (
    (Kr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Kr.apply(this, arguments)
  );
}
var gn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(gn || (gn = {}));
const eh = "popstate";
function K0(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: a, search: u, hash: d } = r.location;
    return gu(
      "",
      { pathname: a, search: u, hash: d },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : Os(s);
  }
  return q0(t, n, null, e);
}
function Ce(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function tg(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function G0() {
  return Math.random().toString(36).substr(2, 8);
}
function th(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function gu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Kr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? $i(t) : t,
      { state: n, key: (t && t.key) || r || G0() }
    )
  );
}
function Os(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function $i(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function q0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: a = !1 } = r,
    u = s.history,
    d = gn.Pop,
    f = null,
    p = g();
  p == null && ((p = 0), u.replaceState(Kr({}, u.state, { idx: p }), ""));
  function g() {
    return (u.state || { idx: null }).idx;
  }
  function v() {
    d = gn.Pop;
    let T = g(),
      w = T == null ? null : T - p;
    (p = T), f && f({ action: d, location: E.location, delta: w });
  }
  function _(T, w) {
    d = gn.Push;
    let y = gu(E.location, T, w);
    p = g() + 1;
    let x = th(y, p),
      O = E.createHref(y);
    try {
      u.pushState(x, "", O);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError") throw M;
      s.location.assign(O);
    }
    a && f && f({ action: d, location: E.location, delta: 1 });
  }
  function k(T, w) {
    d = gn.Replace;
    let y = gu(E.location, T, w);
    p = g();
    let x = th(y, p),
      O = E.createHref(y);
    u.replaceState(x, "", O),
      a && f && f({ action: d, location: E.location, delta: 0 });
  }
  function P(T) {
    let w = s.location.origin !== "null" ? s.location.origin : s.location.href,
      y = typeof T == "string" ? T : Os(T);
    return (
      (y = y.replace(/ $/, "%20")),
      Ce(
        w,
        "No window.location.(origin|href) available to create URL for href: " +
          y
      ),
      new URL(y, w)
    );
  }
  let E = {
    get action() {
      return d;
    },
    get location() {
      return e(s, u);
    },
    listen(T) {
      if (f) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(eh, v),
        (f = T),
        () => {
          s.removeEventListener(eh, v), (f = null);
        }
      );
    },
    createHref(T) {
      return t(s, T);
    },
    createURL: P,
    encodeLocation(T) {
      let w = P(T);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: _,
    replace: k,
    go(T) {
      return u.go(T);
    },
  };
  return E;
}
var nh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(nh || (nh = {}));
function J0(e, t, n) {
  return n === void 0 && (n = "/"), Q0(e, t, n, !1);
}
function Q0(e, t, n, r) {
  let s = typeof t == "string" ? $i(t) : t,
    a = kc(s.pathname || "/", n);
  if (a == null) return null;
  let u = ng(e);
  Y0(u);
  let d = null;
  for (let f = 0; d == null && f < u.length; ++f) {
    let p = u1(a);
    d = a1(u[f], p, r);
  }
  return d;
}
function ng(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (a, u, d) => {
    let f = {
      relativePath: d === void 0 ? a.path || "" : d,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: u,
      route: a,
    };
    f.relativePath.startsWith("/") &&
      (Ce(
        f.relativePath.startsWith(r),
        'Absolute route path "' +
          f.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (f.relativePath = f.relativePath.slice(r.length)));
    let p = kn([r, f.relativePath]),
      g = n.concat(f);
    a.children &&
      a.children.length > 0 &&
      (Ce(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + p + '".')
      ),
      ng(a.children, t, g, p)),
      !(a.path == null && !a.index) &&
        t.push({ path: p, score: o1(p, a.index), routesMeta: g });
  };
  return (
    e.forEach((a, u) => {
      var d;
      if (a.path === "" || !((d = a.path) != null && d.includes("?"))) s(a, u);
      else for (let f of ig(a.path)) s(a, u, f);
    }),
    t
  );
}
function ig(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [a, ""] : [a];
  let u = ig(r.join("/")),
    d = [];
  return (
    d.push(...u.map((f) => (f === "" ? a : [a, f].join("/")))),
    s && d.push(...u),
    d.map((f) => (e.startsWith("/") && f === "" ? "/" : f))
  );
}
function Y0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : s1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const X0 = /^:[\w-]+$/,
  e1 = 3,
  t1 = 2,
  n1 = 1,
  i1 = 10,
  r1 = -2,
  ih = (e) => e === "*";
function o1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ih) && (r += r1),
    t && (r += t1),
    n
      .filter((s) => !ih(s))
      .reduce((s, a) => s + (X0.test(a) ? e1 : a === "" ? n1 : i1), r)
  );
}
function s1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function a1(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    a = "/",
    u = [];
  for (let d = 0; d < r.length; ++d) {
    let f = r[d],
      p = d === r.length - 1,
      g = a === "/" ? t : t.slice(a.length) || "/",
      v = rh(
        { path: f.relativePath, caseSensitive: f.caseSensitive, end: p },
        g
      ),
      _ = f.route;
    if (
      (!v &&
        p &&
        n &&
        !r[r.length - 1].route.index &&
        (v = rh(
          { path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 },
          g
        )),
      !v)
    )
      return null;
    Object.assign(s, v.params),
      u.push({
        params: s,
        pathname: kn([a, v.pathname]),
        pathnameBase: h1(kn([a, v.pathnameBase])),
        route: _,
      }),
      v.pathnameBase !== "/" && (a = kn([a, v.pathnameBase]));
  }
  return u;
}
function rh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = l1(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let a = s[0],
    u = a.replace(/(.)\/+$/, "$1"),
    d = s.slice(1);
  return {
    params: r.reduce((p, g, v) => {
      let { paramName: _, isOptional: k } = g;
      if (_ === "*") {
        let E = d[v] || "";
        u = a.slice(0, a.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const P = d[v];
      return (
        k && !P ? (p[_] = void 0) : (p[_] = (P || "").replace(/%2F/g, "/")), p
      );
    }, {}),
    pathname: a,
    pathnameBase: u,
    pattern: e,
  };
}
function l1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    tg(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (u, d, f) => (
            r.push({ paramName: d, isOptional: f != null }),
            f ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function u1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      tg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function kc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function c1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? $i(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : d1(n, t)) : t,
    search: p1(r),
    hash: m1(s),
  };
}
function d1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function gl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function f1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function rg(e, t) {
  let n = f1(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function og(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = $i(e))
    : ((s = Kr({}, e)),
      Ce(
        !s.pathname || !s.pathname.includes("?"),
        gl("?", "pathname", "search", s)
      ),
      Ce(
        !s.pathname || !s.pathname.includes("#"),
        gl("#", "pathname", "hash", s)
      ),
      Ce(!s.search || !s.search.includes("#"), gl("#", "search", "hash", s)));
  let a = e === "" || s.pathname === "",
    u = a ? "/" : s.pathname,
    d;
  if (u == null) d = n;
  else {
    let v = t.length - 1;
    if (!r && u.startsWith("..")) {
      let _ = u.split("/");
      for (; _[0] === ".."; ) _.shift(), (v -= 1);
      s.pathname = _.join("/");
    }
    d = v >= 0 ? t[v] : "/";
  }
  let f = c1(s, d),
    p = u && u !== "/" && u.endsWith("/"),
    g = (a || u === ".") && n.endsWith("/");
  return !f.pathname.endsWith("/") && (p || g) && (f.pathname += "/"), f;
}
const kn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  h1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  p1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  m1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function g1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const sg = ["post", "put", "patch", "delete"];
new Set(sg);
const v1 = ["get", ...sg];
new Set(v1);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gr() {
  return (
    (Gr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gr.apply(this, arguments)
  );
}
const Ec = A.createContext(null),
  _1 = A.createContext(null),
  Xn = A.createContext(null),
  Xs = A.createContext(null),
  ei = A.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ag = A.createContext(null);
function y1(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  no() || Ce(!1);
  let { basename: r, navigator: s } = A.useContext(Xn),
    { hash: a, pathname: u, search: d } = ug(e, { relative: n }),
    f = u;
  return (
    r !== "/" && (f = u === "/" ? r : kn([r, u])),
    s.createHref({ pathname: f, search: d, hash: a })
  );
}
function no() {
  return A.useContext(Xs) != null;
}
function ea() {
  return no() || Ce(!1), A.useContext(Xs).location;
}
function lg(e) {
  A.useContext(Xn).static || A.useLayoutEffect(e);
}
function w1() {
  let { isDataRoute: e } = A.useContext(ei);
  return e ? M1() : x1();
}
function x1() {
  no() || Ce(!1);
  let e = A.useContext(Ec),
    { basename: t, future: n, navigator: r } = A.useContext(Xn),
    { matches: s } = A.useContext(ei),
    { pathname: a } = ea(),
    u = JSON.stringify(rg(s, n.v7_relativeSplatPath)),
    d = A.useRef(!1);
  return (
    lg(() => {
      d.current = !0;
    }),
    A.useCallback(
      function (p, g) {
        if ((g === void 0 && (g = {}), !d.current)) return;
        if (typeof p == "number") {
          r.go(p);
          return;
        }
        let v = og(p, JSON.parse(u), a, g.relative === "path");
        e == null &&
          t !== "/" &&
          (v.pathname = v.pathname === "/" ? t : kn([t, v.pathname])),
          (g.replace ? r.replace : r.push)(v, g.state, g);
      },
      [t, r, u, a, e]
    )
  );
}
function ug(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = A.useContext(Xn),
    { matches: s } = A.useContext(ei),
    { pathname: a } = ea(),
    u = JSON.stringify(rg(s, r.v7_relativeSplatPath));
  return A.useMemo(() => og(e, JSON.parse(u), a, n === "path"), [e, u, a, n]);
}
function S1(e, t) {
  return P1(e, t);
}
function P1(e, t, n, r) {
  no() || Ce(!1);
  let { navigator: s } = A.useContext(Xn),
    { matches: a } = A.useContext(ei),
    u = a[a.length - 1],
    d = u ? u.params : {};
  u && u.pathname;
  let f = u ? u.pathnameBase : "/";
  u && u.route;
  let p = ea(),
    g;
  if (t) {
    var v;
    let T = typeof t == "string" ? $i(t) : t;
    f === "/" || ((v = T.pathname) != null && v.startsWith(f)) || Ce(!1),
      (g = T);
  } else g = p;
  let _ = g.pathname || "/",
    k = _;
  if (f !== "/") {
    let T = f.replace(/^\//, "").split("/");
    k = "/" + _.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let P = J0(e, { pathname: k }),
    E = T1(
      P &&
        P.map((T) =>
          Object.assign({}, T, {
            params: Object.assign({}, d, T.params),
            pathname: kn([
              f,
              s.encodeLocation
                ? s.encodeLocation(T.pathname).pathname
                : T.pathname,
            ]),
            pathnameBase:
              T.pathnameBase === "/"
                ? f
                : kn([
                    f,
                    s.encodeLocation
                      ? s.encodeLocation(T.pathnameBase).pathname
                      : T.pathnameBase,
                  ]),
          })
        ),
      a,
      n,
      r
    );
  return t && E
    ? A.createElement(
        Xs.Provider,
        {
          value: {
            location: Gr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              g
            ),
            navigationType: gn.Pop,
          },
        },
        E
      )
    : E;
}
function L1() {
  let e = R1(),
    t = g1(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return A.createElement(
    A.Fragment,
    null,
    A.createElement("h2", null, "Unexpected Application Error!"),
    A.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? A.createElement("pre", { style: s }, n) : null,
    null
  );
}
const k1 = A.createElement(L1, null);
class E1 extends A.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? A.createElement(
          ei.Provider,
          { value: this.props.routeContext },
          A.createElement(ag.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function C1(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = A.useContext(Ec);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    A.createElement(ei.Provider, { value: t }, r)
  );
}
function T1(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var a;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (a = r) != null &&
      a.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let u = e,
    d = (s = n) == null ? void 0 : s.errors;
  if (d != null) {
    let g = u.findIndex(
      (v) => v.route.id && (d == null ? void 0 : d[v.route.id]) !== void 0
    );
    g >= 0 || Ce(!1), (u = u.slice(0, Math.min(u.length, g + 1)));
  }
  let f = !1,
    p = -1;
  if (n && r && r.v7_partialHydration)
    for (let g = 0; g < u.length; g++) {
      let v = u[g];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (p = g),
        v.route.id)
      ) {
        let { loaderData: _, errors: k } = n,
          P =
            v.route.loader &&
            _[v.route.id] === void 0 &&
            (!k || k[v.route.id] === void 0);
        if (v.route.lazy || P) {
          (f = !0), p >= 0 ? (u = u.slice(0, p + 1)) : (u = [u[0]]);
          break;
        }
      }
    }
  return u.reduceRight((g, v, _) => {
    let k,
      P = !1,
      E = null,
      T = null;
    n &&
      ((k = d && v.route.id ? d[v.route.id] : void 0),
      (E = v.route.errorElement || k1),
      f &&
        (p < 0 && _ === 0
          ? ((P = !0), (T = null))
          : p === _ &&
            ((P = !0), (T = v.route.hydrateFallbackElement || null))));
    let w = t.concat(u.slice(0, _ + 1)),
      y = () => {
        let x;
        return (
          k
            ? (x = E)
            : P
            ? (x = T)
            : v.route.Component
            ? (x = A.createElement(v.route.Component, null))
            : v.route.element
            ? (x = v.route.element)
            : (x = g),
          A.createElement(C1, {
            match: v,
            routeContext: { outlet: g, matches: w, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (v.route.ErrorBoundary || v.route.errorElement || _ === 0)
      ? A.createElement(E1, {
          location: n.location,
          revalidation: n.revalidation,
          component: E,
          error: k,
          children: y(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var cg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(cg || {}),
  Ns = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ns || {});
function O1(e) {
  let t = A.useContext(Ec);
  return t || Ce(!1), t;
}
function N1(e) {
  let t = A.useContext(_1);
  return t || Ce(!1), t;
}
function z1(e) {
  let t = A.useContext(ei);
  return t || Ce(!1), t;
}
function dg(e) {
  let t = z1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ce(!1), n.route.id;
}
function R1() {
  var e;
  let t = A.useContext(ag),
    n = N1(Ns.UseRouteError),
    r = dg(Ns.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function M1() {
  let { router: e } = O1(cg.UseNavigateStable),
    t = dg(Ns.UseNavigateStable),
    n = A.useRef(!1);
  return (
    lg(() => {
      n.current = !0;
    }),
    A.useCallback(
      function (s, a) {
        a === void 0 && (a = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Gr({ fromRouteId: t }, a)));
      },
      [e, t]
    )
  );
}
function ts(e) {
  Ce(!1);
}
function A1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = gn.Pop,
    navigator: a,
    static: u = !1,
    future: d,
  } = e;
  no() && Ce(!1);
  let f = t.replace(/^\/*/, "/"),
    p = A.useMemo(
      () => ({
        basename: f,
        navigator: a,
        static: u,
        future: Gr({ v7_relativeSplatPath: !1 }, d),
      }),
      [f, d, a, u]
    );
  typeof r == "string" && (r = $i(r));
  let {
      pathname: g = "/",
      search: v = "",
      hash: _ = "",
      state: k = null,
      key: P = "default",
    } = r,
    E = A.useMemo(() => {
      let T = kc(g, f);
      return T == null
        ? null
        : {
            location: { pathname: T, search: v, hash: _, state: k, key: P },
            navigationType: s,
          };
    }, [f, g, v, _, k, P, s]);
  return E == null
    ? null
    : A.createElement(
        Xn.Provider,
        { value: p },
        A.createElement(Xs.Provider, { children: n, value: E })
      );
}
function I1(e) {
  let { children: t, location: n } = e;
  return S1(vu(t), n);
}
new Promise(() => {});
function vu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    A.Children.forEach(e, (r, s) => {
      if (!A.isValidElement(r)) return;
      let a = [...t, s];
      if (r.type === A.Fragment) {
        n.push.apply(n, vu(r.props.children, a));
        return;
      }
      r.type !== ts && Ce(!1), !r.props.index || !r.props.children || Ce(!1);
      let u = {
        id: r.props.id || a.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (u.children = vu(r.props.children, a)), n.push(u);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _u() {
  return (
    (_u = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _u.apply(this, arguments)
  );
}
function b1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    a;
  for (a = 0; a < r.length; a++)
    (s = r[a]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function B1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function D1(e, t) {
  return e.button === 0 && (!t || t === "_self") && !B1(e);
}
const F1 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  j1 = "6";
try {
  window.__reactRouterVersion = j1;
} catch {}
const $1 = "startTransition",
  oh = b_[$1];
function U1(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    a = A.useRef();
  a.current == null && (a.current = K0({ window: s, v5Compat: !0 }));
  let u = a.current,
    [d, f] = A.useState({ action: u.action, location: u.location }),
    { v7_startTransition: p } = r || {},
    g = A.useCallback(
      (v) => {
        p && oh ? oh(() => f(v)) : f(v);
      },
      [f, p]
    );
  return (
    A.useLayoutEffect(() => u.listen(g), [u, g]),
    A.createElement(A1, {
      basename: t,
      children: n,
      location: d.location,
      navigationType: d.action,
      navigator: u,
      future: r,
    })
  );
}
const Z1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  H1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  vl = A.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: a,
        replace: u,
        state: d,
        target: f,
        to: p,
        preventScrollReset: g,
        unstable_viewTransition: v,
      } = t,
      _ = b1(t, F1),
      { basename: k } = A.useContext(Xn),
      P,
      E = !1;
    if (typeof p == "string" && H1.test(p) && ((P = p), Z1))
      try {
        let x = new URL(window.location.href),
          O = p.startsWith("//") ? new URL(x.protocol + p) : new URL(p),
          M = kc(O.pathname, k);
        O.origin === x.origin && M != null
          ? (p = M + O.search + O.hash)
          : (E = !0);
      } catch {}
    let T = y1(p, { relative: s }),
      w = V1(p, {
        replace: u,
        state: d,
        target: f,
        preventScrollReset: g,
        relative: s,
        unstable_viewTransition: v,
      });
    function y(x) {
      r && r(x), x.defaultPrevented || w(x);
    }
    return A.createElement(
      "a",
      _u({}, _, { href: P || T, onClick: E || a ? r : y, ref: n, target: f })
    );
  });
var sh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(sh || (sh = {}));
var ah;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ah || (ah = {}));
function V1(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: a,
      relative: u,
      unstable_viewTransition: d,
    } = t === void 0 ? {} : t,
    f = w1(),
    p = ea(),
    g = ug(e, { relative: u });
  return A.useCallback(
    (v) => {
      if (D1(v, n)) {
        v.preventDefault();
        let _ = r !== void 0 ? r : Os(p) === Os(g);
        f(e, {
          replace: _,
          state: s,
          preventScrollReset: a,
          relative: u,
          unstable_viewTransition: d,
        });
      }
    },
    [p, f, g, r, s, n, e, a, u, d]
  );
}
function W1() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`),
      console.warn(...t);
  }
}
const lh = {};
function yu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  (typeof t[0] == "string" && lh[t[0]]) ||
    (typeof t[0] == "string" && (lh[t[0]] = new Date()), W1(...t));
}
const fg = (e, t) => () => {
  if (e.isInitialized) t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0),
        t();
    };
    e.on("initialized", n);
  }
};
function uh(e, t, n) {
  e.loadNamespaces(t, fg(e, n));
}
function ch(e, t, n, r) {
  typeof n == "string" && (n = [n]),
    n.forEach((s) => {
      e.options.ns.indexOf(s) < 0 && e.options.ns.push(s);
    }),
    e.loadLanguages(t, fg(e, r));
}
function K1(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0],
    s = t.options ? t.options.fallbackLng : !1,
    a = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const u = (d, f) => {
    const p = t.services.backendConnector.state[`${d}|${f}`];
    return p === -1 || p === 2;
  };
  return n.bindI18n &&
    n.bindI18n.indexOf("languageChanging") > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !u(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(r, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (u(r, e) && (!s || u(a, e)))
      );
}
function G1(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length
    ? (yu("i18n.languages were undefined or empty", t.languages), !0)
    : t.options.ignoreJSONStructure !== void 0
    ? t.hasLoadedNamespace(e, {
        lng: n.lng,
        precheck: (s, a) => {
          if (
            n.bindI18n &&
            n.bindI18n.indexOf("languageChanging") > -1 &&
            s.services.backendConnector.backend &&
            s.isLanguageChangingTo &&
            !a(s.isLanguageChangingTo, e)
          )
            return !1;
        },
      })
    : K1(e, t, n);
}
const q1 =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  J1 = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Q1 = (e) => J1[e],
  Y1 = (e) => e.replace(q1, Q1);
let wu = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Y1,
};
function X1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  wu = { ...wu, ...e };
}
function ew() {
  return wu;
}
let hg;
function tw(e) {
  hg = e;
}
function nw() {
  return hg;
}
const iw = {
    type: "3rdParty",
    init(e) {
      X1(e.options.react), tw(e);
    },
  },
  rw = A.createContext();
class ow {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const sw = (e, t) => {
  const n = A.useRef();
  return (
    A.useEffect(() => {
      n.current = e;
    }, [e, t]),
    n.current
  );
};
function Ui(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: n } = t,
    { i18n: r, defaultNS: s } = A.useContext(rw) || {},
    a = n || r || nw();
  if ((a && !a.reportNamespaces && (a.reportNamespaces = new ow()), !a)) {
    yu(
      "You will need to pass in an i18next instance by using initReactI18next"
    );
    const x = (M, B) =>
        typeof B == "string"
          ? B
          : B && typeof B == "object" && typeof B.defaultValue == "string"
          ? B.defaultValue
          : Array.isArray(M)
          ? M[M.length - 1]
          : M,
      O = [x, {}, !1];
    return (O.t = x), (O.i18n = {}), (O.ready = !1), O;
  }
  a.options.react &&
    a.options.react.wait !== void 0 &&
    yu(
      "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
    );
  const u = { ...ew(), ...a.options.react, ...t },
    { useSuspense: d, keyPrefix: f } = u;
  let p = s || (a.options && a.options.defaultNS);
  (p = typeof p == "string" ? [p] : p || ["translation"]),
    a.reportNamespaces.addUsedNamespaces &&
      a.reportNamespaces.addUsedNamespaces(p);
  const g =
    (a.isInitialized || a.initializedStoreOnce) && p.every((x) => G1(x, a, u));
  function v() {
    return a.getFixedT(t.lng || null, u.nsMode === "fallback" ? p : p[0], f);
  }
  const [_, k] = A.useState(v);
  let P = p.join();
  t.lng && (P = `${t.lng}${P}`);
  const E = sw(P),
    T = A.useRef(!0);
  A.useEffect(() => {
    const { bindI18n: x, bindI18nStore: O } = u;
    (T.current = !0),
      !g &&
        !d &&
        (t.lng
          ? ch(a, t.lng, p, () => {
              T.current && k(v);
            })
          : uh(a, p, () => {
              T.current && k(v);
            })),
      g && E && E !== P && T.current && k(v);
    function M() {
      T.current && k(v);
    }
    return (
      x && a && a.on(x, M),
      O && a && a.store.on(O, M),
      () => {
        (T.current = !1),
          x && a && x.split(" ").forEach((B) => a.off(B, M)),
          O && a && O.split(" ").forEach((B) => a.store.off(B, M));
      }
    );
  }, [a, P]);
  const w = A.useRef(!0);
  A.useEffect(() => {
    T.current && !w.current && k(v), (w.current = !1);
  }, [a, f]);
  const y = [_, a, g];
  if (((y.t = _), (y.i18n = a), (y.ready = g), g || (!g && !d))) return y;
  throw new Promise((x) => {
    t.lng ? ch(a, t.lng, p, () => x()) : uh(a, p, () => x());
  });
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var aw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  pg = (e, t) => {
    const n = A.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: u,
          className: d = "",
          children: f,
          ...p
        },
        g
      ) =>
        A.createElement(
          "svg",
          {
            ref: g,
            ...aw,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: u ? (Number(a) * 24) / Number(s) : a,
            className: ["lucide", `lucide-${lw(e)}`, d].join(" "),
            ...p,
          },
          [
            ...t.map(([v, _]) => A.createElement(v, _)),
            ...(Array.isArray(f) ? f : [f]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uw = pg("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cw = pg("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ]),
  dw = () => {
    const { t: e, i18n: t } = Ui(),
      n = (r) => {
        t.changeLanguage(r);
      };
    return b.jsx("header", {
      className: "bg-blue-600 text-white p-4",
      children: b.jsxs("div", {
        className: "container mx-auto flex justify-between items-center",
        children: [
          b.jsxs(vl, {
            to: "/",
            className: "flex items-center",
            children: [
              b.jsx(uw, { className: "mr-2" }),
              b.jsx("span", {
                className: "text-xl font-bold",
                children: e("appName"),
              }),
            ],
          }),
          b.jsx("nav", {
            children: b.jsxs("ul", {
              className: "flex space-x-4",
              children: [
                b.jsx("li", {
                  children: b.jsx(vl, {
                    to: "/add-network",
                    children: e("addNetwork"),
                  }),
                }),
                b.jsx("li", {
                  children: b.jsxs(vl, {
                    to: "/login",
                    className: "flex items-center",
                    children: [
                      b.jsx(cw, { className: "mr-1" }),
                      " ",
                      e("login"),
                    ],
                  }),
                }),
                b.jsx("li", {
                  children: b.jsxs("select", {
                    onChange: (r) => n(r.target.value),
                    className: "bg-blue-500 text-white",
                    children: [
                      b.jsx("option", { value: "ko", children: "한국어" }),
                      b.jsx("option", { value: "en", children: "English" }),
                      b.jsx("option", { value: "ja", children: "日本語" }),
                      b.jsx("option", { value: "ru", children: "Русский" }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  fw = () => {
    const { t: e } = Ui();
    return b.jsx("footer", {
      className: "bg-gray-800 text-white p-4",
      children: b.jsx("div", {
        className: "container mx-auto text-center",
        children: b.jsxs("p", {
          children: ["© 2024 ", e("appName"), ". ", e("allRightsReserved")],
        }),
      }),
    });
  };
function mg(e, t) {
  const n = A.useRef(t);
  A.useEffect(
    function () {
      t !== n.current &&
        e.attributionControl != null &&
        (n.current != null && e.attributionControl.removeAttribution(n.current),
        t != null && e.attributionControl.addAttribution(t)),
        (n.current = t);
    },
    [e, t]
  );
}
const hw = 1;
function pw(e) {
  return Object.freeze({ __version: hw, map: e });
}
function gg(e, t) {
  return Object.freeze({ ...e, ...t });
}
const vg = A.createContext(null),
  _g = vg.Provider;
function Cc() {
  const e = A.useContext(vg);
  if (e == null)
    throw new Error(
      "No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>"
    );
  return e;
}
function yg(e) {
  function t(n, r) {
    const { instance: s, context: a } = e(n).current;
    return (
      A.useImperativeHandle(r, () => s),
      n.children == null ? null : rs.createElement(_g, { value: a }, n.children)
    );
  }
  return A.forwardRef(t);
}
function mw(e) {
  function t(n, r) {
    const [s, a] = A.useState(!1),
      { instance: u } = e(n, a).current;
    A.useImperativeHandle(r, () => u),
      A.useEffect(
        function () {
          s && u.update();
        },
        [u, s, n.children]
      );
    const d = u._contentNode;
    return d ? Xm.createPortal(n.children, d) : null;
  }
  return A.forwardRef(t);
}
function gw(e) {
  function t(n, r) {
    const { instance: s } = e(n).current;
    return A.useImperativeHandle(r, () => s), null;
  }
  return A.forwardRef(t);
}
function Tc(e, t) {
  const n = A.useRef();
  A.useEffect(
    function () {
      return (
        t != null && e.instance.on(t),
        (n.current = t),
        function () {
          n.current != null && e.instance.off(n.current), (n.current = null);
        }
      );
    },
    [e, t]
  );
}
function ta(e, t) {
  const n = e.pane ?? t.pane;
  return n ? { ...e, pane: n } : e;
}
function vw(e, t) {
  return function (r, s) {
    const a = Cc(),
      u = e(ta(r, a), a);
    return (
      mg(a.map, r.attribution),
      Tc(u.current, r.eventHandlers),
      t(u.current, a, r, s),
      u
    );
  };
}
var xu = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (e, t) {
  (function (n, r) {
    r(t);
  })(w_, function (n) {
    var r = "1.9.4";
    function s(i) {
      var o, l, c, h;
      for (l = 1, c = arguments.length; l < c; l++) {
        h = arguments[l];
        for (o in h) i[o] = h[o];
      }
      return i;
    }
    var a =
      Object.create ||
      (function () {
        function i() {}
        return function (o) {
          return (i.prototype = o), new i();
        };
      })();
    function u(i, o) {
      var l = Array.prototype.slice;
      if (i.bind) return i.bind.apply(i, l.call(arguments, 1));
      var c = l.call(arguments, 2);
      return function () {
        return i.apply(o, c.length ? c.concat(l.call(arguments)) : arguments);
      };
    }
    var d = 0;
    function f(i) {
      return "_leaflet_id" in i || (i._leaflet_id = ++d), i._leaflet_id;
    }
    function p(i, o, l) {
      var c, h, m, S;
      return (
        (S = function () {
          (c = !1), h && (m.apply(l, h), (h = !1));
        }),
        (m = function () {
          c
            ? (h = arguments)
            : (i.apply(l, arguments), setTimeout(S, o), (c = !0));
        }),
        m
      );
    }
    function g(i, o, l) {
      var c = o[1],
        h = o[0],
        m = c - h;
      return i === c && l ? i : ((((i - h) % m) + m) % m) + h;
    }
    function v() {
      return !1;
    }
    function _(i, o) {
      if (o === !1) return i;
      var l = Math.pow(10, o === void 0 ? 6 : o);
      return Math.round(i * l) / l;
    }
    function k(i) {
      return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
    }
    function P(i) {
      return k(i).split(/\s+/);
    }
    function E(i, o) {
      Object.prototype.hasOwnProperty.call(i, "options") ||
        (i.options = i.options ? a(i.options) : {});
      for (var l in o) i.options[l] = o[l];
      return i.options;
    }
    function T(i, o, l) {
      var c = [];
      for (var h in i)
        c.push(
          encodeURIComponent(l ? h.toUpperCase() : h) +
            "=" +
            encodeURIComponent(i[h])
        );
      return (!o || o.indexOf("?") === -1 ? "?" : "&") + c.join("&");
    }
    var w = /\{ *([\w_ -]+) *\}/g;
    function y(i, o) {
      return i.replace(w, function (l, c) {
        var h = o[c];
        if (h === void 0)
          throw new Error("No value provided for variable " + l);
        return typeof h == "function" && (h = h(o)), h;
      });
    }
    var x =
      Array.isArray ||
      function (i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      };
    function O(i, o) {
      for (var l = 0; l < i.length; l++) if (i[l] === o) return l;
      return -1;
    }
    var M = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function B(i) {
      return window["webkit" + i] || window["moz" + i] || window["ms" + i];
    }
    var j = 0;
    function U(i) {
      var o = +new Date(),
        l = Math.max(0, 16 - (o - j));
      return (j = o + l), window.setTimeout(i, l);
    }
    var ae = window.requestAnimationFrame || B("RequestAnimationFrame") || U,
      Q =
        window.cancelAnimationFrame ||
        B("CancelAnimationFrame") ||
        B("CancelRequestAnimationFrame") ||
        function (i) {
          window.clearTimeout(i);
        };
    function re(i, o, l) {
      if (l && ae === U) i.call(o);
      else return ae.call(window, u(i, o));
    }
    function Te(i) {
      i && Q.call(window, i);
    }
    var Ut = {
      __proto__: null,
      extend: s,
      create: a,
      bind: u,
      get lastId() {
        return d;
      },
      stamp: f,
      throttle: p,
      wrapNum: g,
      falseFn: v,
      formatNum: _,
      trim: k,
      splitWords: P,
      setOptions: E,
      getParamString: T,
      template: y,
      isArray: x,
      indexOf: O,
      emptyImageUrl: M,
      requestFn: ae,
      cancelFn: Q,
      requestAnimFrame: re,
      cancelAnimFrame: Te,
    };
    function Re() {}
    (Re.extend = function (i) {
      var o = function () {
          E(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks();
        },
        l = (o.__super__ = this.prototype),
        c = a(l);
      (c.constructor = o), (o.prototype = c);
      for (var h in this)
        Object.prototype.hasOwnProperty.call(this, h) &&
          h !== "prototype" &&
          h !== "__super__" &&
          (o[h] = this[h]);
      return (
        i.statics && s(o, i.statics),
        i.includes && (Zt(i.includes), s.apply(null, [c].concat(i.includes))),
        s(c, i),
        delete c.statics,
        delete c.includes,
        c.options &&
          ((c.options = l.options ? a(l.options) : {}),
          s(c.options, i.options)),
        (c._initHooks = []),
        (c.callInitHooks = function () {
          if (!this._initHooksCalled) {
            l.callInitHooks && l.callInitHooks.call(this),
              (this._initHooksCalled = !0);
            for (var m = 0, S = c._initHooks.length; m < S; m++)
              c._initHooks[m].call(this);
          }
        }),
        o
      );
    }),
      (Re.include = function (i) {
        var o = this.prototype.options;
        return (
          s(this.prototype, i),
          i.options &&
            ((this.prototype.options = o), this.mergeOptions(i.options)),
          this
        );
      }),
      (Re.mergeOptions = function (i) {
        return s(this.prototype.options, i), this;
      }),
      (Re.addInitHook = function (i) {
        var o = Array.prototype.slice.call(arguments, 1),
          l =
            typeof i == "function"
              ? i
              : function () {
                  this[i].apply(this, o);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(l),
          this
        );
      });
    function Zt(i) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        i = x(i) ? i : [i];
        for (var o = 0; o < i.length; o++)
          i[o] === L.Mixin.Events &&
            console.warn(
              "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
              new Error().stack
            );
      }
    }
    var ye = {
      on: function (i, o, l) {
        if (typeof i == "object") for (var c in i) this._on(c, i[c], o);
        else {
          i = P(i);
          for (var h = 0, m = i.length; h < m; h++) this._on(i[h], o, l);
        }
        return this;
      },
      off: function (i, o, l) {
        if (!arguments.length) delete this._events;
        else if (typeof i == "object") for (var c in i) this._off(c, i[c], o);
        else {
          i = P(i);
          for (var h = arguments.length === 1, m = 0, S = i.length; m < S; m++)
            h ? this._off(i[m]) : this._off(i[m], o, l);
        }
        return this;
      },
      _on: function (i, o, l, c) {
        if (typeof o != "function") {
          console.warn("wrong listener type: " + typeof o);
          return;
        }
        if (this._listens(i, o, l) === !1) {
          l === this && (l = void 0);
          var h = { fn: o, ctx: l };
          c && (h.once = !0),
            (this._events = this._events || {}),
            (this._events[i] = this._events[i] || []),
            this._events[i].push(h);
        }
      },
      _off: function (i, o, l) {
        var c, h, m;
        if (this._events && ((c = this._events[i]), !!c)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (h = 0, m = c.length; h < m; h++) c[h].fn = v;
            delete this._events[i];
            return;
          }
          if (typeof o != "function") {
            console.warn("wrong listener type: " + typeof o);
            return;
          }
          var S = this._listens(i, o, l);
          if (S !== !1) {
            var C = c[S];
            this._firingCount &&
              ((C.fn = v), (this._events[i] = c = c.slice())),
              c.splice(S, 1);
          }
        }
      },
      fire: function (i, o, l) {
        if (!this.listens(i, l)) return this;
        var c = s({}, o, {
          type: i,
          target: this,
          sourceTarget: (o && o.sourceTarget) || this,
        });
        if (this._events) {
          var h = this._events[i];
          if (h) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var m = 0, S = h.length; m < S; m++) {
              var C = h[m],
                N = C.fn;
              C.once && this.off(i, N, C.ctx), N.call(C.ctx || this, c);
            }
            this._firingCount--;
          }
        }
        return l && this._propagateEvent(c), this;
      },
      listens: function (i, o, l, c) {
        typeof i != "string" && console.warn('"string" type argument expected');
        var h = o;
        typeof o != "function" && ((c = !!o), (h = void 0), (l = void 0));
        var m = this._events && this._events[i];
        if (m && m.length && this._listens(i, h, l) !== !1) return !0;
        if (c) {
          for (var S in this._eventParents)
            if (this._eventParents[S].listens(i, o, l, c)) return !0;
        }
        return !1;
      },
      _listens: function (i, o, l) {
        if (!this._events) return !1;
        var c = this._events[i] || [];
        if (!o) return !!c.length;
        l === this && (l = void 0);
        for (var h = 0, m = c.length; h < m; h++)
          if (c[h].fn === o && c[h].ctx === l) return h;
        return !1;
      },
      once: function (i, o, l) {
        if (typeof i == "object") for (var c in i) this._on(c, i[c], o, !0);
        else {
          i = P(i);
          for (var h = 0, m = i.length; h < m; h++) this._on(i[h], o, l, !0);
        }
        return this;
      },
      addEventParent: function (i) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[f(i)] = i),
          this
        );
      },
      removeEventParent: function (i) {
        return this._eventParents && delete this._eventParents[f(i)], this;
      },
      _propagateEvent: function (i) {
        for (var o in this._eventParents)
          this._eventParents[o].fire(
            i.type,
            s({ layer: i.target, propagatedFrom: i.target }, i),
            !0
          );
      },
    };
    (ye.addEventListener = ye.on),
      (ye.removeEventListener = ye.clearAllEventListeners = ye.off),
      (ye.addOneTimeEventListener = ye.once),
      (ye.fireEvent = ye.fire),
      (ye.hasEventListeners = ye.listens);
    var ft = Re.extend(ye);
    function R(i, o, l) {
      (this.x = l ? Math.round(i) : i), (this.y = l ? Math.round(o) : o);
    }
    var V =
      Math.trunc ||
      function (i) {
        return i > 0 ? Math.floor(i) : Math.ceil(i);
      };
    R.prototype = {
      clone: function () {
        return new R(this.x, this.y);
      },
      add: function (i) {
        return this.clone()._add(F(i));
      },
      _add: function (i) {
        return (this.x += i.x), (this.y += i.y), this;
      },
      subtract: function (i) {
        return this.clone()._subtract(F(i));
      },
      _subtract: function (i) {
        return (this.x -= i.x), (this.y -= i.y), this;
      },
      divideBy: function (i) {
        return this.clone()._divideBy(i);
      },
      _divideBy: function (i) {
        return (this.x /= i), (this.y /= i), this;
      },
      multiplyBy: function (i) {
        return this.clone()._multiplyBy(i);
      },
      _multiplyBy: function (i) {
        return (this.x *= i), (this.y *= i), this;
      },
      scaleBy: function (i) {
        return new R(this.x * i.x, this.y * i.y);
      },
      unscaleBy: function (i) {
        return new R(this.x / i.x, this.y / i.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = V(this.x)), (this.y = V(this.y)), this;
      },
      distanceTo: function (i) {
        i = F(i);
        var o = i.x - this.x,
          l = i.y - this.y;
        return Math.sqrt(o * o + l * l);
      },
      equals: function (i) {
        return (i = F(i)), i.x === this.x && i.y === this.y;
      },
      contains: function (i) {
        return (
          (i = F(i)),
          Math.abs(i.x) <= Math.abs(this.x) && Math.abs(i.y) <= Math.abs(this.y)
        );
      },
      toString: function () {
        return "Point(" + _(this.x) + ", " + _(this.y) + ")";
      },
    };
    function F(i, o, l) {
      return i instanceof R
        ? i
        : x(i)
        ? new R(i[0], i[1])
        : i == null
        ? i
        : typeof i == "object" && "x" in i && "y" in i
        ? new R(i.x, i.y)
        : new R(i, o, l);
    }
    function K(i, o) {
      if (i)
        for (var l = o ? [i, o] : i, c = 0, h = l.length; c < h; c++)
          this.extend(l[c]);
    }
    K.prototype = {
      extend: function (i) {
        var o, l;
        if (!i) return this;
        if (i instanceof R || typeof i[0] == "number" || "x" in i) o = l = F(i);
        else if (((i = ne(i)), (o = i.min), (l = i.max), !o || !l)) return this;
        return (
          !this.min && !this.max
            ? ((this.min = o.clone()), (this.max = l.clone()))
            : ((this.min.x = Math.min(o.x, this.min.x)),
              (this.max.x = Math.max(l.x, this.max.x)),
              (this.min.y = Math.min(o.y, this.min.y)),
              (this.max.y = Math.max(l.y, this.max.y))),
          this
        );
      },
      getCenter: function (i) {
        return F(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          i
        );
      },
      getBottomLeft: function () {
        return F(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return F(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (i) {
        var o, l;
        return (
          typeof i[0] == "number" || i instanceof R ? (i = F(i)) : (i = ne(i)),
          i instanceof K ? ((o = i.min), (l = i.max)) : (o = l = i),
          o.x >= this.min.x &&
            l.x <= this.max.x &&
            o.y >= this.min.y &&
            l.y <= this.max.y
        );
      },
      intersects: function (i) {
        i = ne(i);
        var o = this.min,
          l = this.max,
          c = i.min,
          h = i.max,
          m = h.x >= o.x && c.x <= l.x,
          S = h.y >= o.y && c.y <= l.y;
        return m && S;
      },
      overlaps: function (i) {
        i = ne(i);
        var o = this.min,
          l = this.max,
          c = i.min,
          h = i.max,
          m = h.x > o.x && c.x < l.x,
          S = h.y > o.y && c.y < l.y;
        return m && S;
      },
      isValid: function () {
        return !!(this.min && this.max);
      },
      pad: function (i) {
        var o = this.min,
          l = this.max,
          c = Math.abs(o.x - l.x) * i,
          h = Math.abs(o.y - l.y) * i;
        return ne(F(o.x - c, o.y - h), F(l.x + c, l.y + h));
      },
      equals: function (i) {
        return i
          ? ((i = ne(i)),
            this.min.equals(i.getTopLeft()) &&
              this.max.equals(i.getBottomRight()))
          : !1;
      },
    };
    function ne(i, o) {
      return !i || i instanceof K ? i : new K(i, o);
    }
    function Oe(i, o) {
      if (i)
        for (var l = o ? [i, o] : i, c = 0, h = l.length; c < h; c++)
          this.extend(l[c]);
    }
    Oe.prototype = {
      extend: function (i) {
        var o = this._southWest,
          l = this._northEast,
          c,
          h;
        if (i instanceof oe) (c = i), (h = i);
        else if (i instanceof Oe) {
          if (((c = i._southWest), (h = i._northEast), !c || !h)) return this;
        } else return i ? this.extend(G(i) || ue(i)) : this;
        return (
          !o && !l
            ? ((this._southWest = new oe(c.lat, c.lng)),
              (this._northEast = new oe(h.lat, h.lng)))
            : ((o.lat = Math.min(c.lat, o.lat)),
              (o.lng = Math.min(c.lng, o.lng)),
              (l.lat = Math.max(h.lat, l.lat)),
              (l.lng = Math.max(h.lng, l.lng))),
          this
        );
      },
      pad: function (i) {
        var o = this._southWest,
          l = this._northEast,
          c = Math.abs(o.lat - l.lat) * i,
          h = Math.abs(o.lng - l.lng) * i;
        return new Oe(
          new oe(o.lat - c, o.lng - h),
          new oe(l.lat + c, l.lng + h)
        );
      },
      getCenter: function () {
        return new oe(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new oe(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new oe(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (i) {
        typeof i[0] == "number" || i instanceof oe || "lat" in i
          ? (i = G(i))
          : (i = ue(i));
        var o = this._southWest,
          l = this._northEast,
          c,
          h;
        return (
          i instanceof Oe
            ? ((c = i.getSouthWest()), (h = i.getNorthEast()))
            : (c = h = i),
          c.lat >= o.lat && h.lat <= l.lat && c.lng >= o.lng && h.lng <= l.lng
        );
      },
      intersects: function (i) {
        i = ue(i);
        var o = this._southWest,
          l = this._northEast,
          c = i.getSouthWest(),
          h = i.getNorthEast(),
          m = h.lat >= o.lat && c.lat <= l.lat,
          S = h.lng >= o.lng && c.lng <= l.lng;
        return m && S;
      },
      overlaps: function (i) {
        i = ue(i);
        var o = this._southWest,
          l = this._northEast,
          c = i.getSouthWest(),
          h = i.getNorthEast(),
          m = h.lat > o.lat && c.lat < l.lat,
          S = h.lng > o.lng && c.lng < l.lng;
        return m && S;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (i, o) {
        return i
          ? ((i = ue(i)),
            this._southWest.equals(i.getSouthWest(), o) &&
              this._northEast.equals(i.getNorthEast(), o))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      },
    };
    function ue(i, o) {
      return i instanceof Oe ? i : new Oe(i, o);
    }
    function oe(i, o, l) {
      if (isNaN(i) || isNaN(o))
        throw new Error("Invalid LatLng object: (" + i + ", " + o + ")");
      (this.lat = +i), (this.lng = +o), l !== void 0 && (this.alt = +l);
    }
    oe.prototype = {
      equals: function (i, o) {
        if (!i) return !1;
        i = G(i);
        var l = Math.max(
          Math.abs(this.lat - i.lat),
          Math.abs(this.lng - i.lng)
        );
        return l <= (o === void 0 ? 1e-9 : o);
      },
      toString: function (i) {
        return "LatLng(" + _(this.lat, i) + ", " + _(this.lng, i) + ")";
      },
      distanceTo: function (i) {
        return on.distance(this, G(i));
      },
      wrap: function () {
        return on.wrapLatLng(this);
      },
      toBounds: function (i) {
        var o = (180 * i) / 40075017,
          l = o / Math.cos((Math.PI / 180) * this.lat);
        return ue([this.lat - o, this.lng - l], [this.lat + o, this.lng + l]);
      },
      clone: function () {
        return new oe(this.lat, this.lng, this.alt);
      },
    };
    function G(i, o, l) {
      return i instanceof oe
        ? i
        : x(i) && typeof i[0] != "object"
        ? i.length === 3
          ? new oe(i[0], i[1], i[2])
          : i.length === 2
          ? new oe(i[0], i[1])
          : null
        : i == null
        ? i
        : typeof i == "object" && "lat" in i
        ? new oe(i.lat, "lng" in i ? i.lng : i.lon, i.alt)
        : o === void 0
        ? null
        : new oe(i, o, l);
    }
    var Je = {
        latLngToPoint: function (i, o) {
          var l = this.projection.project(i),
            c = this.scale(o);
          return this.transformation._transform(l, c);
        },
        pointToLatLng: function (i, o) {
          var l = this.scale(o),
            c = this.transformation.untransform(i, l);
          return this.projection.unproject(c);
        },
        project: function (i) {
          return this.projection.project(i);
        },
        unproject: function (i) {
          return this.projection.unproject(i);
        },
        scale: function (i) {
          return 256 * Math.pow(2, i);
        },
        zoom: function (i) {
          return Math.log(i / 256) / Math.LN2;
        },
        getProjectedBounds: function (i) {
          if (this.infinite) return null;
          var o = this.projection.bounds,
            l = this.scale(i),
            c = this.transformation.transform(o.min, l),
            h = this.transformation.transform(o.max, l);
          return new K(c, h);
        },
        infinite: !1,
        wrapLatLng: function (i) {
          var o = this.wrapLng ? g(i.lng, this.wrapLng, !0) : i.lng,
            l = this.wrapLat ? g(i.lat, this.wrapLat, !0) : i.lat,
            c = i.alt;
          return new oe(l, o, c);
        },
        wrapLatLngBounds: function (i) {
          var o = i.getCenter(),
            l = this.wrapLatLng(o),
            c = o.lat - l.lat,
            h = o.lng - l.lng;
          if (c === 0 && h === 0) return i;
          var m = i.getSouthWest(),
            S = i.getNorthEast(),
            C = new oe(m.lat - c, m.lng - h),
            N = new oe(S.lat - c, S.lng - h);
          return new Oe(C, N);
        },
      },
      on = s({}, Je, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (i, o) {
          var l = Math.PI / 180,
            c = i.lat * l,
            h = o.lat * l,
            m = Math.sin(((o.lat - i.lat) * l) / 2),
            S = Math.sin(((o.lng - i.lng) * l) / 2),
            C = m * m + Math.cos(c) * Math.cos(h) * S * S,
            N = 2 * Math.atan2(Math.sqrt(C), Math.sqrt(1 - C));
          return this.R * N;
        },
      }),
      Ac = 6378137,
      ca = {
        R: Ac,
        MAX_LATITUDE: 85.0511287798,
        project: function (i) {
          var o = Math.PI / 180,
            l = this.MAX_LATITUDE,
            c = Math.max(Math.min(l, i.lat), -l),
            h = Math.sin(c * o);
          return new R(
            this.R * i.lng * o,
            (this.R * Math.log((1 + h) / (1 - h))) / 2
          );
        },
        unproject: function (i) {
          var o = 180 / Math.PI;
          return new oe(
            (2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * o,
            (i.x * o) / this.R
          );
        },
        bounds: (function () {
          var i = Ac * Math.PI;
          return new K([-i, -i], [i, i]);
        })(),
      };
    function da(i, o, l, c) {
      if (x(i)) {
        (this._a = i[0]), (this._b = i[1]), (this._c = i[2]), (this._d = i[3]);
        return;
      }
      (this._a = i), (this._b = o), (this._c = l), (this._d = c);
    }
    da.prototype = {
      transform: function (i, o) {
        return this._transform(i.clone(), o);
      },
      _transform: function (i, o) {
        return (
          (o = o || 1),
          (i.x = o * (this._a * i.x + this._b)),
          (i.y = o * (this._c * i.y + this._d)),
          i
        );
      },
      untransform: function (i, o) {
        return (
          (o = o || 1),
          new R((i.x / o - this._b) / this._a, (i.y / o - this._d) / this._c)
        );
      },
    };
    function Wi(i, o, l, c) {
      return new da(i, o, l, c);
    }
    var fa = s({}, on, {
        code: "EPSG:3857",
        projection: ca,
        transformation: (function () {
          var i = 0.5 / (Math.PI * ca.R);
          return Wi(i, 0.5, -i, 0.5);
        })(),
      }),
      qg = s({}, fa, { code: "EPSG:900913" });
    function Ic(i) {
      return document.createElementNS("http://www.w3.org/2000/svg", i);
    }
    function bc(i, o) {
      var l = "",
        c,
        h,
        m,
        S,
        C,
        N;
      for (c = 0, m = i.length; c < m; c++) {
        for (C = i[c], h = 0, S = C.length; h < S; h++)
          (N = C[h]), (l += (h ? "L" : "M") + N.x + " " + N.y);
        l += o ? (H.svg ? "z" : "x") : "";
      }
      return l || "M0 0";
    }
    var ha = document.documentElement.style,
      oo = "ActiveXObject" in window,
      Jg = oo && !document.addEventListener,
      Bc = "msLaunchUri" in navigator && !("documentMode" in document),
      pa = Rt("webkit"),
      Dc = Rt("android"),
      Fc = Rt("android 2") || Rt("android 3"),
      Qg = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      Yg = Dc && Rt("Google") && Qg < 537 && !("AudioNode" in window),
      ma = !!window.opera,
      jc = !Bc && Rt("chrome"),
      $c = Rt("gecko") && !pa && !ma && !oo,
      Xg = !jc && Rt("safari"),
      Uc = Rt("phantom"),
      Zc = "OTransition" in ha,
      ev = navigator.platform.indexOf("Win") === 0,
      Hc = oo && "transition" in ha,
      ga =
        "WebKitCSSMatrix" in window &&
        "m11" in new window.WebKitCSSMatrix() &&
        !Fc,
      Vc = "MozPerspective" in ha,
      tv = !window.L_DISABLE_3D && (Hc || ga || Vc) && !Zc && !Uc,
      Ki = typeof orientation < "u" || Rt("mobile"),
      nv = Ki && pa,
      iv = Ki && ga,
      Wc = !window.PointerEvent && window.MSPointerEvent,
      Kc = !!(window.PointerEvent || Wc),
      Gc = "ontouchstart" in window || !!window.TouchEvent,
      rv = !window.L_NO_TOUCH && (Gc || Kc),
      ov = Ki && ma,
      sv = Ki && $c,
      av =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      lv = (function () {
        var i = !1;
        try {
          var o = Object.defineProperty({}, "passive", {
            get: function () {
              i = !0;
            },
          });
          window.addEventListener("testPassiveEventSupport", v, o),
            window.removeEventListener("testPassiveEventSupport", v, o);
        } catch {}
        return i;
      })(),
      uv = (function () {
        return !!document.createElement("canvas").getContext;
      })(),
      va = !!(document.createElementNS && Ic("svg").createSVGRect),
      cv =
        !!va &&
        (function () {
          var i = document.createElement("div");
          return (
            (i.innerHTML = "<svg/>"),
            (i.firstChild && i.firstChild.namespaceURI) ===
              "http://www.w3.org/2000/svg"
          );
        })(),
      dv =
        !va &&
        (function () {
          try {
            var i = document.createElement("div");
            i.innerHTML = '<v:shape adj="1"/>';
            var o = i.firstChild;
            return (
              (o.style.behavior = "url(#default#VML)"),
              o && typeof o.adj == "object"
            );
          } catch {
            return !1;
          }
        })(),
      fv = navigator.platform.indexOf("Mac") === 0,
      hv = navigator.platform.indexOf("Linux") === 0;
    function Rt(i) {
      return navigator.userAgent.toLowerCase().indexOf(i) >= 0;
    }
    var H = {
        ie: oo,
        ielt9: Jg,
        edge: Bc,
        webkit: pa,
        android: Dc,
        android23: Fc,
        androidStock: Yg,
        opera: ma,
        chrome: jc,
        gecko: $c,
        safari: Xg,
        phantom: Uc,
        opera12: Zc,
        win: ev,
        ie3d: Hc,
        webkit3d: ga,
        gecko3d: Vc,
        any3d: tv,
        mobile: Ki,
        mobileWebkit: nv,
        mobileWebkit3d: iv,
        msPointer: Wc,
        pointer: Kc,
        touch: rv,
        touchNative: Gc,
        mobileOpera: ov,
        mobileGecko: sv,
        retina: av,
        passiveEvents: lv,
        canvas: uv,
        svg: va,
        vml: dv,
        inlineSvg: cv,
        mac: fv,
        linux: hv,
      },
      qc = H.msPointer ? "MSPointerDown" : "pointerdown",
      Jc = H.msPointer ? "MSPointerMove" : "pointermove",
      Qc = H.msPointer ? "MSPointerUp" : "pointerup",
      Yc = H.msPointer ? "MSPointerCancel" : "pointercancel",
      _a = { touchstart: qc, touchmove: Jc, touchend: Qc, touchcancel: Yc },
      Xc = { touchstart: yv, touchmove: so, touchend: so, touchcancel: so },
      ti = {},
      ed = !1;
    function pv(i, o, l) {
      return (
        o === "touchstart" && _v(),
        Xc[o]
          ? ((l = Xc[o].bind(this, l)), i.addEventListener(_a[o], l, !1), l)
          : (console.warn("wrong event specified:", o), v)
      );
    }
    function mv(i, o, l) {
      if (!_a[o]) {
        console.warn("wrong event specified:", o);
        return;
      }
      i.removeEventListener(_a[o], l, !1);
    }
    function gv(i) {
      ti[i.pointerId] = i;
    }
    function vv(i) {
      ti[i.pointerId] && (ti[i.pointerId] = i);
    }
    function td(i) {
      delete ti[i.pointerId];
    }
    function _v() {
      ed ||
        (document.addEventListener(qc, gv, !0),
        document.addEventListener(Jc, vv, !0),
        document.addEventListener(Qc, td, !0),
        document.addEventListener(Yc, td, !0),
        (ed = !0));
    }
    function so(i, o) {
      if (o.pointerType !== (o.MSPOINTER_TYPE_MOUSE || "mouse")) {
        o.touches = [];
        for (var l in ti) o.touches.push(ti[l]);
        (o.changedTouches = [o]), i(o);
      }
    }
    function yv(i, o) {
      o.MSPOINTER_TYPE_TOUCH &&
        o.pointerType === o.MSPOINTER_TYPE_TOUCH &&
        be(o),
        so(i, o);
    }
    function wv(i) {
      var o = {},
        l,
        c;
      for (c in i) (l = i[c]), (o[c] = l && l.bind ? l.bind(i) : l);
      return (
        (i = o),
        (o.type = "dblclick"),
        (o.detail = 2),
        (o.isTrusted = !1),
        (o._simulated = !0),
        o
      );
    }
    var xv = 200;
    function Sv(i, o) {
      i.addEventListener("dblclick", o);
      var l = 0,
        c;
      function h(m) {
        if (m.detail !== 1) {
          c = m.detail;
          return;
        }
        if (
          !(
            m.pointerType === "mouse" ||
            (m.sourceCapabilities && !m.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var S = sd(m);
          if (
            !(
              S.some(function (N) {
                return N instanceof HTMLLabelElement && N.attributes.for;
              }) &&
              !S.some(function (N) {
                return (
                  N instanceof HTMLInputElement ||
                  N instanceof HTMLSelectElement
                );
              })
            )
          ) {
            var C = Date.now();
            C - l <= xv ? (c++, c === 2 && o(wv(m))) : (c = 1), (l = C);
          }
        }
      }
      return i.addEventListener("click", h), { dblclick: o, simDblclick: h };
    }
    function Pv(i, o) {
      i.removeEventListener("dblclick", o.dblclick),
        i.removeEventListener("click", o.simDblclick);
    }
    var ya = uo([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform",
      ]),
      Gi = uo([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition",
      ]),
      nd =
        Gi === "webkitTransition" || Gi === "OTransition"
          ? Gi + "End"
          : "transitionend";
    function id(i) {
      return typeof i == "string" ? document.getElementById(i) : i;
    }
    function qi(i, o) {
      var l = i.style[o] || (i.currentStyle && i.currentStyle[o]);
      if ((!l || l === "auto") && document.defaultView) {
        var c = document.defaultView.getComputedStyle(i, null);
        l = c ? c[o] : null;
      }
      return l === "auto" ? null : l;
    }
    function se(i, o, l) {
      var c = document.createElement(i);
      return (c.className = o || ""), l && l.appendChild(c), c;
    }
    function me(i) {
      var o = i.parentNode;
      o && o.removeChild(i);
    }
    function ao(i) {
      for (; i.firstChild; ) i.removeChild(i.firstChild);
    }
    function ni(i) {
      var o = i.parentNode;
      o && o.lastChild !== i && o.appendChild(i);
    }
    function ii(i) {
      var o = i.parentNode;
      o && o.firstChild !== i && o.insertBefore(i, o.firstChild);
    }
    function wa(i, o) {
      if (i.classList !== void 0) return i.classList.contains(o);
      var l = lo(i);
      return l.length > 0 && new RegExp("(^|\\s)" + o + "(\\s|$)").test(l);
    }
    function Y(i, o) {
      if (i.classList !== void 0)
        for (var l = P(o), c = 0, h = l.length; c < h; c++)
          i.classList.add(l[c]);
      else if (!wa(i, o)) {
        var m = lo(i);
        xa(i, (m ? m + " " : "") + o);
      }
    }
    function xe(i, o) {
      i.classList !== void 0
        ? i.classList.remove(o)
        : xa(i, k((" " + lo(i) + " ").replace(" " + o + " ", " ")));
    }
    function xa(i, o) {
      i.className.baseVal === void 0
        ? (i.className = o)
        : (i.className.baseVal = o);
    }
    function lo(i) {
      return (
        i.correspondingElement && (i = i.correspondingElement),
        i.className.baseVal === void 0 ? i.className : i.className.baseVal
      );
    }
    function ht(i, o) {
      "opacity" in i.style
        ? (i.style.opacity = o)
        : "filter" in i.style && Lv(i, o);
    }
    function Lv(i, o) {
      var l = !1,
        c = "DXImageTransform.Microsoft.Alpha";
      try {
        l = i.filters.item(c);
      } catch {
        if (o === 1) return;
      }
      (o = Math.round(o * 100)),
        l
          ? ((l.Enabled = o !== 100), (l.Opacity = o))
          : (i.style.filter += " progid:" + c + "(opacity=" + o + ")");
    }
    function uo(i) {
      for (var o = document.documentElement.style, l = 0; l < i.length; l++)
        if (i[l] in o) return i[l];
      return !1;
    }
    function zn(i, o, l) {
      var c = o || new R(0, 0);
      i.style[ya] =
        (H.ie3d
          ? "translate(" + c.x + "px," + c.y + "px)"
          : "translate3d(" + c.x + "px," + c.y + "px,0)") +
        (l ? " scale(" + l + ")" : "");
    }
    function Le(i, o) {
      (i._leaflet_pos = o),
        H.any3d
          ? zn(i, o)
          : ((i.style.left = o.x + "px"), (i.style.top = o.y + "px"));
    }
    function Rn(i) {
      return i._leaflet_pos || new R(0, 0);
    }
    var Ji, Qi, Sa;
    if ("onselectstart" in document)
      (Ji = function () {
        q(window, "selectstart", be);
      }),
        (Qi = function () {
          ce(window, "selectstart", be);
        });
    else {
      var Yi = uo([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect",
      ]);
      (Ji = function () {
        if (Yi) {
          var i = document.documentElement.style;
          (Sa = i[Yi]), (i[Yi] = "none");
        }
      }),
        (Qi = function () {
          Yi && ((document.documentElement.style[Yi] = Sa), (Sa = void 0));
        });
    }
    function Pa() {
      q(window, "dragstart", be);
    }
    function La() {
      ce(window, "dragstart", be);
    }
    var co, ka;
    function Ea(i) {
      for (; i.tabIndex === -1; ) i = i.parentNode;
      i.style &&
        (fo(),
        (co = i),
        (ka = i.style.outlineStyle),
        (i.style.outlineStyle = "none"),
        q(window, "keydown", fo));
    }
    function fo() {
      co &&
        ((co.style.outlineStyle = ka),
        (co = void 0),
        (ka = void 0),
        ce(window, "keydown", fo));
    }
    function rd(i) {
      do i = i.parentNode;
      while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body);
      return i;
    }
    function Ca(i) {
      var o = i.getBoundingClientRect();
      return {
        x: o.width / i.offsetWidth || 1,
        y: o.height / i.offsetHeight || 1,
        boundingClientRect: o,
      };
    }
    var kv = {
      __proto__: null,
      TRANSFORM: ya,
      TRANSITION: Gi,
      TRANSITION_END: nd,
      get: id,
      getStyle: qi,
      create: se,
      remove: me,
      empty: ao,
      toFront: ni,
      toBack: ii,
      hasClass: wa,
      addClass: Y,
      removeClass: xe,
      setClass: xa,
      getClass: lo,
      setOpacity: ht,
      testProp: uo,
      setTransform: zn,
      setPosition: Le,
      getPosition: Rn,
      get disableTextSelection() {
        return Ji;
      },
      get enableTextSelection() {
        return Qi;
      },
      disableImageDrag: Pa,
      enableImageDrag: La,
      preventOutline: Ea,
      restoreOutline: fo,
      getSizedParentNode: rd,
      getScale: Ca,
    };
    function q(i, o, l, c) {
      if (o && typeof o == "object") for (var h in o) Oa(i, h, o[h], l);
      else {
        o = P(o);
        for (var m = 0, S = o.length; m < S; m++) Oa(i, o[m], l, c);
      }
      return this;
    }
    var Mt = "_leaflet_events";
    function ce(i, o, l, c) {
      if (arguments.length === 1) od(i), delete i[Mt];
      else if (o && typeof o == "object") for (var h in o) Na(i, h, o[h], l);
      else if (((o = P(o)), arguments.length === 2))
        od(i, function (C) {
          return O(o, C) !== -1;
        });
      else for (var m = 0, S = o.length; m < S; m++) Na(i, o[m], l, c);
      return this;
    }
    function od(i, o) {
      for (var l in i[Mt]) {
        var c = l.split(/\d/)[0];
        (!o || o(c)) && Na(i, c, null, null, l);
      }
    }
    var Ta = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel",
    };
    function Oa(i, o, l, c) {
      var h = o + f(l) + (c ? "_" + f(c) : "");
      if (i[Mt] && i[Mt][h]) return this;
      var m = function (C) {
          return l.call(c || i, C || window.event);
        },
        S = m;
      !H.touchNative && H.pointer && o.indexOf("touch") === 0
        ? (m = pv(i, o, m))
        : H.touch && o === "dblclick"
        ? (m = Sv(i, m))
        : "addEventListener" in i
        ? o === "touchstart" ||
          o === "touchmove" ||
          o === "wheel" ||
          o === "mousewheel"
          ? i.addEventListener(
              Ta[o] || o,
              m,
              H.passiveEvents ? { passive: !1 } : !1
            )
          : o === "mouseenter" || o === "mouseleave"
          ? ((m = function (C) {
              (C = C || window.event), Ra(i, C) && S(C);
            }),
            i.addEventListener(Ta[o], m, !1))
          : i.addEventListener(o, S, !1)
        : i.attachEvent("on" + o, m),
        (i[Mt] = i[Mt] || {}),
        (i[Mt][h] = m);
    }
    function Na(i, o, l, c, h) {
      h = h || o + f(l) + (c ? "_" + f(c) : "");
      var m = i[Mt] && i[Mt][h];
      if (!m) return this;
      !H.touchNative && H.pointer && o.indexOf("touch") === 0
        ? mv(i, o, m)
        : H.touch && o === "dblclick"
        ? Pv(i, m)
        : "removeEventListener" in i
        ? i.removeEventListener(Ta[o] || o, m, !1)
        : i.detachEvent("on" + o, m),
        (i[Mt][h] = null);
    }
    function Mn(i) {
      return (
        i.stopPropagation
          ? i.stopPropagation()
          : i.originalEvent
          ? (i.originalEvent._stopped = !0)
          : (i.cancelBubble = !0),
        this
      );
    }
    function za(i) {
      return Oa(i, "wheel", Mn), this;
    }
    function Xi(i) {
      return (
        q(i, "mousedown touchstart dblclick contextmenu", Mn),
        (i._leaflet_disable_click = !0),
        this
      );
    }
    function be(i) {
      return i.preventDefault ? i.preventDefault() : (i.returnValue = !1), this;
    }
    function An(i) {
      return be(i), Mn(i), this;
    }
    function sd(i) {
      if (i.composedPath) return i.composedPath();
      for (var o = [], l = i.target; l; ) o.push(l), (l = l.parentNode);
      return o;
    }
    function ad(i, o) {
      if (!o) return new R(i.clientX, i.clientY);
      var l = Ca(o),
        c = l.boundingClientRect;
      return new R(
        (i.clientX - c.left) / l.x - o.clientLeft,
        (i.clientY - c.top) / l.y - o.clientTop
      );
    }
    var Ev =
      H.linux && H.chrome
        ? window.devicePixelRatio
        : H.mac
        ? window.devicePixelRatio * 3
        : window.devicePixelRatio > 0
        ? 2 * window.devicePixelRatio
        : 1;
    function ld(i) {
      return H.edge
        ? i.wheelDeltaY / 2
        : i.deltaY && i.deltaMode === 0
        ? -i.deltaY / Ev
        : i.deltaY && i.deltaMode === 1
        ? -i.deltaY * 20
        : i.deltaY && i.deltaMode === 2
        ? -i.deltaY * 60
        : i.deltaX || i.deltaZ
        ? 0
        : i.wheelDelta
        ? (i.wheelDeltaY || i.wheelDelta) / 2
        : i.detail && Math.abs(i.detail) < 32765
        ? -i.detail * 20
        : i.detail
        ? (i.detail / -32765) * 60
        : 0;
    }
    function Ra(i, o) {
      var l = o.relatedTarget;
      if (!l) return !0;
      try {
        for (; l && l !== i; ) l = l.parentNode;
      } catch {
        return !1;
      }
      return l !== i;
    }
    var Cv = {
        __proto__: null,
        on: q,
        off: ce,
        stopPropagation: Mn,
        disableScrollPropagation: za,
        disableClickPropagation: Xi,
        preventDefault: be,
        stop: An,
        getPropagationPath: sd,
        getMousePosition: ad,
        getWheelDelta: ld,
        isExternalTarget: Ra,
        addListener: q,
        removeListener: ce,
      },
      ud = ft.extend({
        run: function (i, o, l, c) {
          this.stop(),
            (this._el = i),
            (this._inProgress = !0),
            (this._duration = l || 0.25),
            (this._easeOutPower = 1 / Math.max(c || 0.5, 0.2)),
            (this._startPos = Rn(i)),
            (this._offset = o.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire("start"),
            this._animate();
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = re(this._animate, this)), this._step();
        },
        _step: function (i) {
          var o = +new Date() - this._startTime,
            l = this._duration * 1e3;
          o < l
            ? this._runFrame(this._easeOut(o / l), i)
            : (this._runFrame(1), this._complete());
        },
        _runFrame: function (i, o) {
          var l = this._startPos.add(this._offset.multiplyBy(i));
          o && l._round(), Le(this._el, l), this.fire("step");
        },
        _complete: function () {
          Te(this._animId), (this._inProgress = !1), this.fire("end");
        },
        _easeOut: function (i) {
          return 1 - Math.pow(1 - i, this._easeOutPower);
        },
      }),
      te = ft.extend({
        options: {
          crs: fa,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (i, o) {
          (o = E(this, o)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(i),
            this._initLayout(),
            (this._onResize = u(this._onResize, this)),
            this._initEvents(),
            o.maxBounds && this.setMaxBounds(o.maxBounds),
            o.zoom !== void 0 && (this._zoom = this._limitZoom(o.zoom)),
            o.center &&
              o.zoom !== void 0 &&
              this.setView(G(o.center), o.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated =
              Gi && H.any3d && !H.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              q(this._proxy, nd, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (i, o, l) {
          if (
            ((o = o === void 0 ? this._zoom : this._limitZoom(o)),
            (i = this._limitCenter(G(i), o, this.options.maxBounds)),
            (l = l || {}),
            this._stop(),
            this._loaded && !l.reset && l !== !0)
          ) {
            l.animate !== void 0 &&
              ((l.zoom = s({ animate: l.animate }, l.zoom)),
              (l.pan = s({ animate: l.animate, duration: l.duration }, l.pan)));
            var c =
              this._zoom !== o
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(i, o, l.zoom)
                : this._tryAnimatedPan(i, l.pan);
            if (c) return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(i, o, l.pan && l.pan.noMoveStart), this;
        },
        setZoom: function (i, o) {
          return this._loaded
            ? this.setView(this.getCenter(), i, { zoom: o })
            : ((this._zoom = i), this);
        },
        zoomIn: function (i, o) {
          return (
            (i = i || (H.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + i, o)
          );
        },
        zoomOut: function (i, o) {
          return (
            (i = i || (H.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - i, o)
          );
        },
        setZoomAround: function (i, o, l) {
          var c = this.getZoomScale(o),
            h = this.getSize().divideBy(2),
            m = i instanceof R ? i : this.latLngToContainerPoint(i),
            S = m.subtract(h).multiplyBy(1 - 1 / c),
            C = this.containerPointToLatLng(h.add(S));
          return this.setView(C, o, { zoom: l });
        },
        _getBoundsCenterZoom: function (i, o) {
          (o = o || {}), (i = i.getBounds ? i.getBounds() : ue(i));
          var l = F(o.paddingTopLeft || o.padding || [0, 0]),
            c = F(o.paddingBottomRight || o.padding || [0, 0]),
            h = this.getBoundsZoom(i, !1, l.add(c));
          if (
            ((h = typeof o.maxZoom == "number" ? Math.min(o.maxZoom, h) : h),
            h === 1 / 0)
          )
            return { center: i.getCenter(), zoom: h };
          var m = c.subtract(l).divideBy(2),
            S = this.project(i.getSouthWest(), h),
            C = this.project(i.getNorthEast(), h),
            N = this.unproject(S.add(C).divideBy(2).add(m), h);
          return { center: N, zoom: h };
        },
        fitBounds: function (i, o) {
          if (((i = ue(i)), !i.isValid()))
            throw new Error("Bounds are not valid.");
          var l = this._getBoundsCenterZoom(i, o);
          return this.setView(l.center, l.zoom, o);
        },
        fitWorld: function (i) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            i
          );
        },
        panTo: function (i, o) {
          return this.setView(i, this._zoom, { pan: o });
        },
        panBy: function (i, o) {
          if (((i = F(i).round()), (o = o || {}), !i.x && !i.y))
            return this.fire("moveend");
          if (o.animate !== !0 && !this.getSize().contains(i))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(i)),
                this.getZoom()
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new ud()),
              this._panAnim.on(
                {
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd,
                },
                this
              )),
            o.noMoveStart || this.fire("movestart"),
            o.animate !== !1)
          ) {
            Y(this._mapPane, "leaflet-pan-anim");
            var l = this._getMapPanePos().subtract(i).round();
            this._panAnim.run(
              this._mapPane,
              l,
              o.duration || 0.25,
              o.easeLinearity
            );
          } else this._rawPanBy(i), this.fire("move").fire("moveend");
          return this;
        },
        flyTo: function (i, o, l) {
          if (((l = l || {}), l.animate === !1 || !H.any3d))
            return this.setView(i, o, l);
          this._stop();
          var c = this.project(this.getCenter()),
            h = this.project(i),
            m = this.getSize(),
            S = this._zoom;
          (i = G(i)), (o = o === void 0 ? S : o);
          var C = Math.max(m.x, m.y),
            N = C * this.getZoomScale(S, o),
            I = h.distanceTo(c) || 1,
            $ = 1.42,
            W = $ * $;
          function X(ke) {
            var Lo = ke ? -1 : 1,
              m_ = ke ? N : C,
              g_ = N * N - C * C + Lo * W * W * I * I,
              v_ = 2 * m_ * W * I,
              Za = g_ / v_,
              Zd = Math.sqrt(Za * Za + 1) - Za,
              __ = Zd < 1e-9 ? -18 : Math.log(Zd);
            return __;
          }
          function Ve(ke) {
            return (Math.exp(ke) - Math.exp(-ke)) / 2;
          }
          function Me(ke) {
            return (Math.exp(ke) + Math.exp(-ke)) / 2;
          }
          function mt(ke) {
            return Ve(ke) / Me(ke);
          }
          var Qe = X(0);
          function ui(ke) {
            return C * (Me(Qe) / Me(Qe + $ * ke));
          }
          function d_(ke) {
            return (C * (Me(Qe) * mt(Qe + $ * ke) - Ve(Qe))) / W;
          }
          function f_(ke) {
            return 1 - Math.pow(1 - ke, 1.5);
          }
          var h_ = Date.now(),
            $d = (X(1) - Qe) / $,
            p_ = l.duration ? 1e3 * l.duration : 1e3 * $d * 0.8;
          function Ud() {
            var ke = (Date.now() - h_) / p_,
              Lo = f_(ke) * $d;
            ke <= 1
              ? ((this._flyToFrame = re(Ud, this)),
                this._move(
                  this.unproject(
                    c.add(h.subtract(c).multiplyBy(d_(Lo) / I)),
                    S
                  ),
                  this.getScaleZoom(C / ui(Lo), S),
                  { flyTo: !0 }
                ))
              : this._move(i, o)._moveEnd(!0);
          }
          return this._moveStart(!0, l.noMoveStart), Ud.call(this), this;
        },
        flyToBounds: function (i, o) {
          var l = this._getBoundsCenterZoom(i, o);
          return this.flyTo(l.center, l.zoom, o);
        },
        setMaxBounds: function (i) {
          return (
            (i = ue(i)),
            this.listens("moveend", this._panInsideMaxBounds) &&
              this.off("moveend", this._panInsideMaxBounds),
            i.isValid()
              ? ((this.options.maxBounds = i),
                this._loaded && this._panInsideMaxBounds(),
                this.on("moveend", this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (i) {
          var o = this.options.minZoom;
          return (
            (this.options.minZoom = i),
            this._loaded &&
            o !== i &&
            (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom)
              ? this.setZoom(i)
              : this
          );
        },
        setMaxZoom: function (i) {
          var o = this.options.maxZoom;
          return (
            (this.options.maxZoom = i),
            this._loaded &&
            o !== i &&
            (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom)
              ? this.setZoom(i)
              : this
          );
        },
        panInsideBounds: function (i, o) {
          this._enforcingBounds = !0;
          var l = this.getCenter(),
            c = this._limitCenter(l, this._zoom, ue(i));
          return (
            l.equals(c) || this.panTo(c, o), (this._enforcingBounds = !1), this
          );
        },
        panInside: function (i, o) {
          o = o || {};
          var l = F(o.paddingTopLeft || o.padding || [0, 0]),
            c = F(o.paddingBottomRight || o.padding || [0, 0]),
            h = this.project(this.getCenter()),
            m = this.project(i),
            S = this.getPixelBounds(),
            C = ne([S.min.add(l), S.max.subtract(c)]),
            N = C.getSize();
          if (!C.contains(m)) {
            this._enforcingBounds = !0;
            var I = m.subtract(C.getCenter()),
              $ = C.extend(m).getSize().subtract(N);
            (h.x += I.x < 0 ? -$.x : $.x),
              (h.y += I.y < 0 ? -$.y : $.y),
              this.panTo(this.unproject(h), o),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (i) {
          if (!this._loaded) return this;
          i = s({ animate: !1, pan: !0 }, i === !0 ? { animate: !0 } : i);
          var o = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var l = this.getSize(),
            c = o.divideBy(2).round(),
            h = l.divideBy(2).round(),
            m = c.subtract(h);
          return !m.x && !m.y
            ? this
            : (i.animate && i.pan
                ? this.panBy(m)
                : (i.pan && this._rawPanBy(m),
                  this.fire("move"),
                  i.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(
                        u(this.fire, this, "moveend"),
                        200
                      )))
                    : this.fire("moveend")),
              this.fire("resize", { oldSize: o, newSize: l }));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
          );
        },
        locate: function (i) {
          if (
            ((i = this._locateOptions = s({ timeout: 1e4, watch: !1 }, i)),
            !("geolocation" in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported.",
              }),
              this
            );
          var o = u(this._handleGeolocationResponse, this),
            l = u(this._handleGeolocationError, this);
          return (
            i.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(
                  o,
                  l,
                  i
                ))
              : navigator.geolocation.getCurrentPosition(o, l, i),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (i) {
          if (this._container._leaflet_id) {
            var o = i.code,
              l =
                i.message ||
                (o === 1
                  ? "permission denied"
                  : o === 2
                  ? "position unavailable"
                  : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire("locationerror", {
                code: o,
                message: "Geolocation error: " + l + ".",
              });
          }
        },
        _handleGeolocationResponse: function (i) {
          if (this._container._leaflet_id) {
            var o = i.coords.latitude,
              l = i.coords.longitude,
              c = new oe(o, l),
              h = c.toBounds(i.coords.accuracy * 2),
              m = this._locateOptions;
            if (m.setView) {
              var S = this.getBoundsZoom(h);
              this.setView(c, m.maxZoom ? Math.min(S, m.maxZoom) : S);
            }
            var C = { latlng: c, bounds: h, timestamp: i.timestamp };
            for (var N in i.coords)
              typeof i.coords[N] == "number" && (C[N] = i.coords[N]);
            this.fire("locationfound", C);
          }
        },
        addHandler: function (i, o) {
          if (!o) return this;
          var l = (this[i] = new o(this));
          return this._handlers.push(l), this.options[i] && l.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error(
              "Map container is being reused by another instance"
            );
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            (this._container._leaflet_id = void 0),
              (this._containerId = void 0);
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            me(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest &&
              (Te(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire("unload");
          var i;
          for (i in this._layers) this._layers[i].remove();
          for (i in this._panes) me(this._panes[i]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (i, o) {
          var l =
              "leaflet-pane" +
              (i ? " leaflet-" + i.replace("Pane", "") + "-pane" : ""),
            c = se("div", l, o || this._mapPane);
          return i && (this._panes[i] = c), c;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var i = this.getPixelBounds(),
            o = this.unproject(i.getBottomLeft()),
            l = this.unproject(i.getTopRight());
          return new Oe(o, l);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0
            ? this._layersMinZoom || 0
            : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (i, o, l) {
          (i = ue(i)), (l = F(l || [0, 0]));
          var c = this.getZoom() || 0,
            h = this.getMinZoom(),
            m = this.getMaxZoom(),
            S = i.getNorthWest(),
            C = i.getSouthEast(),
            N = this.getSize().subtract(l),
            I = ne(this.project(C, c), this.project(S, c)).getSize(),
            $ = H.any3d ? this.options.zoomSnap : 1,
            W = N.x / I.x,
            X = N.y / I.y,
            Ve = o ? Math.max(W, X) : Math.min(W, X);
          return (
            (c = this.getScaleZoom(Ve, c)),
            $ &&
              ((c = Math.round(c / ($ / 100)) * ($ / 100)),
              (c = o ? Math.ceil(c / $) * $ : Math.floor(c / $) * $)),
            Math.max(h, Math.min(m, c))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new R(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (i, o) {
          var l = this._getTopLeftPoint(i, o);
          return new K(l, l.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (i) {
          return this.options.crs.getProjectedBounds(
            i === void 0 ? this.getZoom() : i
          );
        },
        getPane: function (i) {
          return typeof i == "string" ? this._panes[i] : i;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (i, o) {
          var l = this.options.crs;
          return (o = o === void 0 ? this._zoom : o), l.scale(i) / l.scale(o);
        },
        getScaleZoom: function (i, o) {
          var l = this.options.crs;
          o = o === void 0 ? this._zoom : o;
          var c = l.zoom(i * l.scale(o));
          return isNaN(c) ? 1 / 0 : c;
        },
        project: function (i, o) {
          return (
            (o = o === void 0 ? this._zoom : o),
            this.options.crs.latLngToPoint(G(i), o)
          );
        },
        unproject: function (i, o) {
          return (
            (o = o === void 0 ? this._zoom : o),
            this.options.crs.pointToLatLng(F(i), o)
          );
        },
        layerPointToLatLng: function (i) {
          var o = F(i).add(this.getPixelOrigin());
          return this.unproject(o);
        },
        latLngToLayerPoint: function (i) {
          var o = this.project(G(i))._round();
          return o._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (i) {
          return this.options.crs.wrapLatLng(G(i));
        },
        wrapLatLngBounds: function (i) {
          return this.options.crs.wrapLatLngBounds(ue(i));
        },
        distance: function (i, o) {
          return this.options.crs.distance(G(i), G(o));
        },
        containerPointToLayerPoint: function (i) {
          return F(i).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (i) {
          return F(i).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (i) {
          var o = this.containerPointToLayerPoint(F(i));
          return this.layerPointToLatLng(o);
        },
        latLngToContainerPoint: function (i) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(G(i)));
        },
        mouseEventToContainerPoint: function (i) {
          return ad(i, this._container);
        },
        mouseEventToLayerPoint: function (i) {
          return this.containerPointToLayerPoint(
            this.mouseEventToContainerPoint(i)
          );
        },
        mouseEventToLatLng: function (i) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(i));
        },
        _initContainer: function (i) {
          var o = (this._container = id(i));
          if (o) {
            if (o._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          q(o, "scroll", this._onScroll, this), (this._containerId = f(o));
        },
        _initLayout: function () {
          var i = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && H.any3d),
            Y(
              i,
              "leaflet-container" +
                (H.touch ? " leaflet-touch" : "") +
                (H.retina ? " leaflet-retina" : "") +
                (H.ielt9 ? " leaflet-oldie" : "") +
                (H.safari ? " leaflet-safari" : "") +
                (this._fadeAnimated ? " leaflet-fade-anim" : "")
            );
          var o = qi(i, "position");
          o !== "absolute" &&
            o !== "relative" &&
            o !== "fixed" &&
            o !== "sticky" &&
            (i.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var i = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane("mapPane", this._container)),
            Le(this._mapPane, new R(0, 0)),
            this.createPane("tilePane"),
            this.createPane("overlayPane"),
            this.createPane("shadowPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation ||
              (Y(i.markerPane, "leaflet-zoom-hide"),
              Y(i.shadowPane, "leaflet-zoom-hide"));
        },
        _resetView: function (i, o, l) {
          Le(this._mapPane, new R(0, 0));
          var c = !this._loaded;
          (this._loaded = !0),
            (o = this._limitZoom(o)),
            this.fire("viewprereset");
          var h = this._zoom !== o;
          this._moveStart(h, l)._move(i, o)._moveEnd(h),
            this.fire("viewreset"),
            c && this.fire("load");
        },
        _moveStart: function (i, o) {
          return i && this.fire("zoomstart"), o || this.fire("movestart"), this;
        },
        _move: function (i, o, l, c) {
          o === void 0 && (o = this._zoom);
          var h = this._zoom !== o;
          return (
            (this._zoom = o),
            (this._lastCenter = i),
            (this._pixelOrigin = this._getNewPixelOrigin(i)),
            c
              ? l && l.pinch && this.fire("zoom", l)
              : ((h || (l && l.pinch)) && this.fire("zoom", l),
                this.fire("move", l)),
            this
          );
        },
        _moveEnd: function (i) {
          return i && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function () {
          return (
            Te(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
          );
        },
        _rawPanBy: function (i) {
          Le(this._mapPane, this._getMapPanePos().subtract(i));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        _initEvents: function (i) {
          (this._targets = {}), (this._targets[f(this._container)] = this);
          var o = i ? ce : q;
          o(
            this._container,
            "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
            this._handleDOMEvent,
            this
          ),
            this.options.trackResize &&
              o(window, "resize", this._onResize, this),
            H.any3d &&
              this.options.transform3DLimit &&
              (i ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function () {
          Te(this._resizeRequest),
            (this._resizeRequest = re(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var i = this._getMapPanePos();
          Math.max(Math.abs(i.x), Math.abs(i.y)) >=
            this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (i, o) {
          for (
            var l = [],
              c,
              h = o === "mouseout" || o === "mouseover",
              m = i.target || i.srcElement,
              S = !1;
            m;

          ) {
            if (
              ((c = this._targets[f(m)]),
              c &&
                (o === "click" || o === "preclick") &&
                this._draggableMoved(c))
            ) {
              S = !0;
              break;
            }
            if (
              (c && c.listens(o, !0) && ((h && !Ra(m, i)) || (l.push(c), h))) ||
              m === this._container
            )
              break;
            m = m.parentNode;
          }
          return (
            !l.length && !S && !h && this.listens(o, !0) && (l = [this]), l
          );
        },
        _isClickDisabled: function (i) {
          for (; i && i !== this._container; ) {
            if (i._leaflet_disable_click) return !0;
            i = i.parentNode;
          }
        },
        _handleDOMEvent: function (i) {
          var o = i.target || i.srcElement;
          if (
            !(
              !this._loaded ||
              o._leaflet_disable_events ||
              (i.type === "click" && this._isClickDisabled(o))
            )
          ) {
            var l = i.type;
            l === "mousedown" && Ea(o), this._fireDOMEvent(i, l);
          }
        },
        _mouseEvents: [
          "click",
          "dblclick",
          "mouseover",
          "mouseout",
          "contextmenu",
        ],
        _fireDOMEvent: function (i, o, l) {
          if (i.type === "click") {
            var c = s({}, i);
            (c.type = "preclick"), this._fireDOMEvent(c, c.type, l);
          }
          var h = this._findEventTargets(i, o);
          if (l) {
            for (var m = [], S = 0; S < l.length; S++)
              l[S].listens(o, !0) && m.push(l[S]);
            h = m.concat(h);
          }
          if (h.length) {
            o === "contextmenu" && be(i);
            var C = h[0],
              N = { originalEvent: i };
            if (
              i.type !== "keypress" &&
              i.type !== "keydown" &&
              i.type !== "keyup"
            ) {
              var I = C.getLatLng && (!C._radius || C._radius <= 10);
              (N.containerPoint = I
                ? this.latLngToContainerPoint(C.getLatLng())
                : this.mouseEventToContainerPoint(i)),
                (N.layerPoint = this.containerPointToLayerPoint(
                  N.containerPoint
                )),
                (N.latlng = I
                  ? C.getLatLng()
                  : this.layerPointToLatLng(N.layerPoint));
            }
            for (S = 0; S < h.length; S++)
              if (
                (h[S].fire(o, N, !0),
                N.originalEvent._stopped ||
                  (h[S].options.bubblingMouseEvents === !1 &&
                    O(this._mouseEvents, o) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (i) {
          return (
            (i = i.dragging && i.dragging.enabled() ? i : this),
            (i.dragging && i.dragging.moved()) ||
              (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var i = 0, o = this._handlers.length; i < o; i++)
            this._handlers[i].disable();
        },
        whenReady: function (i, o) {
          return (
            this._loaded
              ? i.call(o || this, { target: this })
              : this.on("load", i, o),
            this
          );
        },
        _getMapPanePos: function () {
          return Rn(this._mapPane) || new R(0, 0);
        },
        _moved: function () {
          var i = this._getMapPanePos();
          return i && !i.equals([0, 0]);
        },
        _getTopLeftPoint: function (i, o) {
          var l =
            i && o !== void 0
              ? this._getNewPixelOrigin(i, o)
              : this.getPixelOrigin();
          return l.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (i, o) {
          var l = this.getSize()._divideBy(2);
          return this.project(i, o)
            ._subtract(l)
            ._add(this._getMapPanePos())
            ._round();
        },
        _latLngToNewLayerPoint: function (i, o, l) {
          var c = this._getNewPixelOrigin(l, o);
          return this.project(i, o)._subtract(c);
        },
        _latLngBoundsToNewLayerBounds: function (i, o, l) {
          var c = this._getNewPixelOrigin(l, o);
          return ne([
            this.project(i.getSouthWest(), o)._subtract(c),
            this.project(i.getNorthWest(), o)._subtract(c),
            this.project(i.getSouthEast(), o)._subtract(c),
            this.project(i.getNorthEast(), o)._subtract(c),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (i) {
          return this.latLngToLayerPoint(i).subtract(
            this._getCenterLayerPoint()
          );
        },
        _limitCenter: function (i, o, l) {
          if (!l) return i;
          var c = this.project(i, o),
            h = this.getSize().divideBy(2),
            m = new K(c.subtract(h), c.add(h)),
            S = this._getBoundsOffset(m, l, o);
          return Math.abs(S.x) <= 1 && Math.abs(S.y) <= 1
            ? i
            : this.unproject(c.add(S), o);
        },
        _limitOffset: function (i, o) {
          if (!o) return i;
          var l = this.getPixelBounds(),
            c = new K(l.min.add(i), l.max.add(i));
          return i.add(this._getBoundsOffset(c, o));
        },
        _getBoundsOffset: function (i, o, l) {
          var c = ne(
              this.project(o.getNorthEast(), l),
              this.project(o.getSouthWest(), l)
            ),
            h = c.min.subtract(i.min),
            m = c.max.subtract(i.max),
            S = this._rebound(h.x, -m.x),
            C = this._rebound(h.y, -m.y);
          return new R(S, C);
        },
        _rebound: function (i, o) {
          return i + o > 0
            ? Math.round(i - o) / 2
            : Math.max(0, Math.ceil(i)) - Math.max(0, Math.floor(o));
        },
        _limitZoom: function (i) {
          var o = this.getMinZoom(),
            l = this.getMaxZoom(),
            c = H.any3d ? this.options.zoomSnap : 1;
          return c && (i = Math.round(i / c) * c), Math.max(o, Math.min(l, i));
        },
        _onPanTransitionStep: function () {
          this.fire("move");
        },
        _onPanTransitionEnd: function () {
          xe(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function (i, o) {
          var l = this._getCenterOffset(i)._trunc();
          return (o && o.animate) !== !0 && !this.getSize().contains(l)
            ? !1
            : (this.panBy(l, o), !0);
        },
        _createAnimProxy: function () {
          var i = (this._proxy = se(
            "div",
            "leaflet-proxy leaflet-zoom-animated"
          ));
          this._panes.mapPane.appendChild(i),
            this.on(
              "zoomanim",
              function (o) {
                var l = ya,
                  c = this._proxy.style[l];
                zn(
                  this._proxy,
                  this.project(o.center, o.zoom),
                  this.getZoomScale(o.zoom, 1)
                ),
                  c === this._proxy.style[l] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd();
              },
              this
            ),
            this.on("load moveend", this._animMoveEnd, this),
            this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          me(this._proxy),
            this.off("load moveend", this._animMoveEnd, this),
            delete this._proxy;
        },
        _animMoveEnd: function () {
          var i = this.getCenter(),
            o = this.getZoom();
          zn(this._proxy, this.project(i, o), this.getZoomScale(o, 1));
        },
        _catchTransitionEnd: function (i) {
          this._animatingZoom &&
            i.propertyName.indexOf("transform") >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName(
            "leaflet-zoom-animated"
          ).length;
        },
        _tryAnimatedZoom: function (i, o, l) {
          if (this._animatingZoom) return !0;
          if (
            ((l = l || {}),
            !this._zoomAnimated ||
              l.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(o - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var c = this.getZoomScale(o),
            h = this._getCenterOffset(i)._divideBy(1 - 1 / c);
          return l.animate !== !0 && !this.getSize().contains(h)
            ? !1
            : (re(function () {
                this._moveStart(!0, l.noMoveStart || !1)._animateZoom(i, o, !0);
              }, this),
              !0);
        },
        _animateZoom: function (i, o, l, c) {
          this._mapPane &&
            (l &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = i),
              (this._animateToZoom = o),
              Y(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", { center: i, zoom: o, noUpdate: c }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(u(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && xe(this._mapPane, "leaflet-zoom-anim"),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire("zoom"),
            delete this._tempFireZoomEvent,
            this.fire("move"),
            this._moveEnd(!0));
        },
      });
    function Tv(i, o) {
      return new te(i, o);
    }
    var St = Re.extend({
        options: { position: "topright" },
        initialize: function (i) {
          E(this, i);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (i) {
          var o = this._map;
          return (
            o && o.removeControl(this),
            (this.options.position = i),
            o && o.addControl(this),
            this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (i) {
          this.remove(), (this._map = i);
          var o = (this._container = this.onAdd(i)),
            l = this.getPosition(),
            c = i._controlCorners[l];
          return (
            Y(o, "leaflet-control"),
            l.indexOf("bottom") !== -1
              ? c.insertBefore(o, c.firstChild)
              : c.appendChild(o),
            this._map.on("unload", this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (me(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off("unload", this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (i) {
          this._map &&
            i &&
            i.screenX > 0 &&
            i.screenY > 0 &&
            this._map.getContainer().focus();
        },
      }),
      er = function (i) {
        return new St(i);
      };
    te.include({
      addControl: function (i) {
        return i.addTo(this), this;
      },
      removeControl: function (i) {
        return i.remove(), this;
      },
      _initControlPos: function () {
        var i = (this._controlCorners = {}),
          o = "leaflet-",
          l = (this._controlContainer = se(
            "div",
            o + "control-container",
            this._container
          ));
        function c(h, m) {
          var S = o + h + " " + o + m;
          i[h + m] = se("div", S, l);
        }
        c("top", "left"),
          c("top", "right"),
          c("bottom", "left"),
          c("bottom", "right");
      },
      _clearControlPos: function () {
        for (var i in this._controlCorners) me(this._controlCorners[i]);
        me(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer;
      },
    });
    var cd = St.extend({
        options: {
          collapsed: !0,
          position: "topright",
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (i, o, l, c) {
            return l < c ? -1 : c < l ? 1 : 0;
          },
        },
        initialize: function (i, o, l) {
          E(this, l),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1),
            (this._preventClick = !1);
          for (var c in i) this._addLayer(i[c], c);
          for (c in o) this._addLayer(o[c], c, !0);
        },
        onAdd: function (i) {
          this._initLayout(),
            this._update(),
            (this._map = i),
            i.on("zoomend", this._checkDisabledLayers, this);
          for (var o = 0; o < this._layers.length; o++)
            this._layers[o].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function (i) {
          return St.prototype.addTo.call(this, i), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var i = 0; i < this._layers.length; i++)
            this._layers[i].layer.off("add remove", this._onLayerChange, this);
        },
        addBaseLayer: function (i, o) {
          return this._addLayer(i, o), this._map ? this._update() : this;
        },
        addOverlay: function (i, o) {
          return this._addLayer(i, o, !0), this._map ? this._update() : this;
        },
        removeLayer: function (i) {
          i.off("add remove", this._onLayerChange, this);
          var o = this._getLayer(f(i));
          return (
            o && this._layers.splice(this._layers.indexOf(o), 1),
            this._map ? this._update() : this
          );
        },
        expand: function () {
          Y(this._container, "leaflet-control-layers-expanded"),
            (this._section.style.height = null);
          var i = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            i < this._section.clientHeight
              ? (Y(this._section, "leaflet-control-layers-scrollbar"),
                (this._section.style.height = i + "px"))
              : xe(this._section, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return xe(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function () {
          var i = "leaflet-control-layers",
            o = (this._container = se("div", i)),
            l = this.options.collapsed;
          o.setAttribute("aria-haspopup", !0), Xi(o), za(o);
          var c = (this._section = se("section", i + "-list"));
          l &&
            (this._map.on("click", this.collapse, this),
            q(
              o,
              { mouseenter: this._expandSafely, mouseleave: this.collapse },
              this
            ));
          var h = (this._layersLink = se("a", i + "-toggle", o));
          (h.href = "#"),
            (h.title = "Layers"),
            h.setAttribute("role", "button"),
            q(
              h,
              {
                keydown: function (m) {
                  m.keyCode === 13 && this._expandSafely();
                },
                click: function (m) {
                  be(m), this._expandSafely();
                },
              },
              this
            ),
            l || this.expand(),
            (this._baseLayersList = se("div", i + "-base", c)),
            (this._separator = se("div", i + "-separator", c)),
            (this._overlaysList = se("div", i + "-overlays", c)),
            o.appendChild(c);
        },
        _getLayer: function (i) {
          for (var o = 0; o < this._layers.length; o++)
            if (this._layers[o] && f(this._layers[o].layer) === i)
              return this._layers[o];
        },
        _addLayer: function (i, o, l) {
          this._map && i.on("add remove", this._onLayerChange, this),
            this._layers.push({ layer: i, name: o, overlay: l }),
            this.options.sortLayers &&
              this._layers.sort(
                u(function (c, h) {
                  return this.options.sortFunction(
                    c.layer,
                    h.layer,
                    c.name,
                    h.name
                  );
                }, this)
              ),
            this.options.autoZIndex &&
              i.setZIndex &&
              (this._lastZIndex++, i.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          ao(this._baseLayersList),
            ao(this._overlaysList),
            (this._layerControlInputs = []);
          var i,
            o,
            l,
            c,
            h = 0;
          for (l = 0; l < this._layers.length; l++)
            (c = this._layers[l]),
              this._addItem(c),
              (o = o || c.overlay),
              (i = i || !c.overlay),
              (h += c.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((i = i && h > 1),
              (this._baseLayersList.style.display = i ? "" : "none")),
            (this._separator.style.display = o && i ? "" : "none"),
            this
          );
        },
        _onLayerChange: function (i) {
          this._handlingClick || this._update();
          var o = this._getLayer(f(i.target)),
            l = o.overlay
              ? i.type === "add"
                ? "overlayadd"
                : "overlayremove"
              : i.type === "add"
              ? "baselayerchange"
              : null;
          l && this._map.fire(l, o);
        },
        _createRadioElement: function (i, o) {
          var l =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              i +
              '"' +
              (o ? ' checked="checked"' : "") +
              "/>",
            c = document.createElement("div");
          return (c.innerHTML = l), c.firstChild;
        },
        _addItem: function (i) {
          var o = document.createElement("label"),
            l = this._map.hasLayer(i.layer),
            c;
          i.overlay
            ? ((c = document.createElement("input")),
              (c.type = "checkbox"),
              (c.className = "leaflet-control-layers-selector"),
              (c.defaultChecked = l))
            : (c = this._createRadioElement(
                "leaflet-base-layers_" + f(this),
                l
              )),
            this._layerControlInputs.push(c),
            (c.layerId = f(i.layer)),
            q(c, "click", this._onInputClick, this);
          var h = document.createElement("span");
          h.innerHTML = " " + i.name;
          var m = document.createElement("span");
          o.appendChild(m), m.appendChild(c), m.appendChild(h);
          var S = i.overlay ? this._overlaysList : this._baseLayersList;
          return S.appendChild(o), this._checkDisabledLayers(), o;
        },
        _onInputClick: function () {
          if (!this._preventClick) {
            var i = this._layerControlInputs,
              o,
              l,
              c = [],
              h = [];
            this._handlingClick = !0;
            for (var m = i.length - 1; m >= 0; m--)
              (o = i[m]),
                (l = this._getLayer(o.layerId).layer),
                o.checked ? c.push(l) : o.checked || h.push(l);
            for (m = 0; m < h.length; m++)
              this._map.hasLayer(h[m]) && this._map.removeLayer(h[m]);
            for (m = 0; m < c.length; m++)
              this._map.hasLayer(c[m]) || this._map.addLayer(c[m]);
            (this._handlingClick = !1), this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function () {
          for (
            var i = this._layerControlInputs,
              o,
              l,
              c = this._map.getZoom(),
              h = i.length - 1;
            h >= 0;
            h--
          )
            (o = i[h]),
              (l = this._getLayer(o.layerId).layer),
              (o.disabled =
                (l.options.minZoom !== void 0 && c < l.options.minZoom) ||
                (l.options.maxZoom !== void 0 && c > l.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function () {
          var i = this._section;
          (this._preventClick = !0), q(i, "click", be), this.expand();
          var o = this;
          setTimeout(function () {
            ce(i, "click", be), (o._preventClick = !1);
          });
        },
      }),
      Ov = function (i, o, l) {
        return new cd(i, o, l);
      },
      Ma = St.extend({
        options: {
          position: "topleft",
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: "Zoom in",
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: "Zoom out",
        },
        onAdd: function (i) {
          var o = "leaflet-control-zoom",
            l = se("div", o + " leaflet-bar"),
            c = this.options;
          return (
            (this._zoomInButton = this._createButton(
              c.zoomInText,
              c.zoomInTitle,
              o + "-in",
              l,
              this._zoomIn
            )),
            (this._zoomOutButton = this._createButton(
              c.zoomOutText,
              c.zoomOutTitle,
              o + "-out",
              l,
              this._zoomOut
            )),
            this._updateDisabled(),
            i.on("zoomend zoomlevelschange", this._updateDisabled, this),
            l
          );
        },
        onRemove: function (i) {
          i.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (i) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(
              this._map.options.zoomDelta * (i.shiftKey ? 3 : 1)
            );
        },
        _zoomOut: function (i) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(
              this._map.options.zoomDelta * (i.shiftKey ? 3 : 1)
            );
        },
        _createButton: function (i, o, l, c, h) {
          var m = se("a", l, c);
          return (
            (m.innerHTML = i),
            (m.href = "#"),
            (m.title = o),
            m.setAttribute("role", "button"),
            m.setAttribute("aria-label", o),
            Xi(m),
            q(m, "click", An),
            q(m, "click", h, this),
            q(m, "click", this._refocusOnMap, this),
            m
          );
        },
        _updateDisabled: function () {
          var i = this._map,
            o = "leaflet-disabled";
          xe(this._zoomInButton, o),
            xe(this._zoomOutButton, o),
            this._zoomInButton.setAttribute("aria-disabled", "false"),
            this._zoomOutButton.setAttribute("aria-disabled", "false"),
            (this._disabled || i._zoom === i.getMinZoom()) &&
              (Y(this._zoomOutButton, o),
              this._zoomOutButton.setAttribute("aria-disabled", "true")),
            (this._disabled || i._zoom === i.getMaxZoom()) &&
              (Y(this._zoomInButton, o),
              this._zoomInButton.setAttribute("aria-disabled", "true"));
        },
      });
    te.mergeOptions({ zoomControl: !0 }),
      te.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new Ma()), this.addControl(this.zoomControl));
      });
    var Nv = function (i) {
        return new Ma(i);
      },
      dd = St.extend({
        options: {
          position: "bottomleft",
          maxWidth: 100,
          metric: !0,
          imperial: !0,
        },
        onAdd: function (i) {
          var o = "leaflet-control-scale",
            l = se("div", o),
            c = this.options;
          return (
            this._addScales(c, o + "-line", l),
            i.on(c.updateWhenIdle ? "moveend" : "move", this._update, this),
            i.whenReady(this._update, this),
            l
          );
        },
        onRemove: function (i) {
          i.off(
            this.options.updateWhenIdle ? "moveend" : "move",
            this._update,
            this
          );
        },
        _addScales: function (i, o, l) {
          i.metric && (this._mScale = se("div", o, l)),
            i.imperial && (this._iScale = se("div", o, l));
        },
        _update: function () {
          var i = this._map,
            o = i.getSize().y / 2,
            l = i.distance(
              i.containerPointToLatLng([0, o]),
              i.containerPointToLatLng([this.options.maxWidth, o])
            );
          this._updateScales(l);
        },
        _updateScales: function (i) {
          this.options.metric && i && this._updateMetric(i),
            this.options.imperial && i && this._updateImperial(i);
        },
        _updateMetric: function (i) {
          var o = this._getRoundNum(i),
            l = o < 1e3 ? o + " m" : o / 1e3 + " km";
          this._updateScale(this._mScale, l, o / i);
        },
        _updateImperial: function (i) {
          var o = i * 3.2808399,
            l,
            c,
            h;
          o > 5280
            ? ((l = o / 5280),
              (c = this._getRoundNum(l)),
              this._updateScale(this._iScale, c + " mi", c / l))
            : ((h = this._getRoundNum(o)),
              this._updateScale(this._iScale, h + " ft", h / o));
        },
        _updateScale: function (i, o, l) {
          (i.style.width = Math.round(this.options.maxWidth * l) + "px"),
            (i.innerHTML = o);
        },
        _getRoundNum: function (i) {
          var o = Math.pow(10, (Math.floor(i) + "").length - 1),
            l = i / o;
          return (
            (l = l >= 10 ? 10 : l >= 5 ? 5 : l >= 3 ? 3 : l >= 2 ? 2 : 1), o * l
          );
        },
      }),
      zv = function (i) {
        return new dd(i);
      },
      Rv =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      Aa = St.extend({
        options: {
          position: "bottomright",
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (H.inlineSvg ? Rv + " " : "") +
            "Leaflet</a>",
        },
        initialize: function (i) {
          E(this, i), (this._attributions = {});
        },
        onAdd: function (i) {
          (i.attributionControl = this),
            (this._container = se("div", "leaflet-control-attribution")),
            Xi(this._container);
          for (var o in i._layers)
            i._layers[o].getAttribution &&
              this.addAttribution(i._layers[o].getAttribution());
          return (
            this._update(),
            i.on("layeradd", this._addAttribution, this),
            this._container
          );
        },
        onRemove: function (i) {
          i.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function (i) {
          i.layer.getAttribution &&
            (this.addAttribution(i.layer.getAttribution()),
            i.layer.once(
              "remove",
              function () {
                this.removeAttribution(i.layer.getAttribution());
              },
              this
            ));
        },
        setPrefix: function (i) {
          return (this.options.prefix = i), this._update(), this;
        },
        addAttribution: function (i) {
          return i
            ? (this._attributions[i] || (this._attributions[i] = 0),
              this._attributions[i]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (i) {
          return i
            ? (this._attributions[i] &&
                (this._attributions[i]--, this._update()),
              this)
            : this;
        },
        _update: function () {
          if (this._map) {
            var i = [];
            for (var o in this._attributions)
              this._attributions[o] && i.push(o);
            var l = [];
            this.options.prefix && l.push(this.options.prefix),
              i.length && l.push(i.join(", ")),
              (this._container.innerHTML = l.join(
                ' <span aria-hidden="true">|</span> '
              ));
          }
        },
      });
    te.mergeOptions({ attributionControl: !0 }),
      te.addInitHook(function () {
        this.options.attributionControl && new Aa().addTo(this);
      });
    var Mv = function (i) {
      return new Aa(i);
    };
    (St.Layers = cd),
      (St.Zoom = Ma),
      (St.Scale = dd),
      (St.Attribution = Aa),
      (er.layers = Ov),
      (er.zoom = Nv),
      (er.scale = zv),
      (er.attribution = Mv);
    var At = Re.extend({
      initialize: function (i) {
        this._map = i;
      },
      enable: function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    At.addTo = function (i, o) {
      return i.addHandler(o, this), this;
    };
    var Av = { Events: ye },
      fd = H.touch ? "touchstart mousedown" : "mousedown",
      sn = ft.extend({
        options: { clickTolerance: 3 },
        initialize: function (i, o, l, c) {
          E(this, c),
            (this._element = i),
            (this._dragStartTarget = o || i),
            (this._preventOutline = l);
        },
        enable: function () {
          this._enabled ||
            (q(this._dragStartTarget, fd, this._onDown, this),
            (this._enabled = !0));
        },
        disable: function () {
          this._enabled &&
            (sn._dragging === this && this.finishDrag(!0),
            ce(this._dragStartTarget, fd, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (i) {
          if (
            this._enabled &&
            ((this._moved = !1), !wa(this._element, "leaflet-zoom-anim"))
          ) {
            if (i.touches && i.touches.length !== 1) {
              sn._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(
                sn._dragging ||
                i.shiftKey ||
                (i.which !== 1 && i.button !== 1 && !i.touches)
              ) &&
              ((sn._dragging = this),
              this._preventOutline && Ea(this._element),
              Pa(),
              Ji(),
              !this._moving)
            ) {
              this.fire("down");
              var o = i.touches ? i.touches[0] : i,
                l = rd(this._element);
              (this._startPoint = new R(o.clientX, o.clientY)),
                (this._startPos = Rn(this._element)),
                (this._parentScale = Ca(l));
              var c = i.type === "mousedown";
              q(document, c ? "mousemove" : "touchmove", this._onMove, this),
                q(
                  document,
                  c ? "mouseup" : "touchend touchcancel",
                  this._onUp,
                  this
                );
            }
          }
        },
        _onMove: function (i) {
          if (this._enabled) {
            if (i.touches && i.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var o = i.touches && i.touches.length === 1 ? i.touches[0] : i,
              l = new R(o.clientX, o.clientY)._subtract(this._startPoint);
            (!l.x && !l.y) ||
              Math.abs(l.x) + Math.abs(l.y) < this.options.clickTolerance ||
              ((l.x /= this._parentScale.x),
              (l.y /= this._parentScale.y),
              be(i),
              this._moved ||
                (this.fire("dragstart"),
                (this._moved = !0),
                Y(document.body, "leaflet-dragging"),
                (this._lastTarget = i.target || i.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                Y(this._lastTarget, "leaflet-drag-target")),
              (this._newPos = this._startPos.add(l)),
              (this._moving = !0),
              (this._lastEvent = i),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var i = { originalEvent: this._lastEvent };
          this.fire("predrag", i),
            Le(this._element, this._newPos),
            this.fire("drag", i);
        },
        _onUp: function () {
          this._enabled && this.finishDrag();
        },
        finishDrag: function (i) {
          xe(document.body, "leaflet-dragging"),
            this._lastTarget &&
              (xe(this._lastTarget, "leaflet-drag-target"),
              (this._lastTarget = null)),
            ce(document, "mousemove touchmove", this._onMove, this),
            ce(document, "mouseup touchend touchcancel", this._onUp, this),
            La(),
            Qi();
          var o = this._moved && this._moving;
          (this._moving = !1),
            (sn._dragging = !1),
            o &&
              this.fire("dragend", {
                noInertia: i,
                distance: this._newPos.distanceTo(this._startPos),
              });
        },
      });
    function hd(i, o, l) {
      var c,
        h = [1, 4, 2, 8],
        m,
        S,
        C,
        N,
        I,
        $,
        W,
        X;
      for (m = 0, $ = i.length; m < $; m++) i[m]._code = In(i[m], o);
      for (C = 0; C < 4; C++) {
        for (W = h[C], c = [], m = 0, $ = i.length, S = $ - 1; m < $; S = m++)
          (N = i[m]),
            (I = i[S]),
            N._code & W
              ? I._code & W ||
                ((X = ho(I, N, W, o, l)), (X._code = In(X, o)), c.push(X))
              : (I._code & W &&
                  ((X = ho(I, N, W, o, l)), (X._code = In(X, o)), c.push(X)),
                c.push(N));
        i = c;
      }
      return i;
    }
    function pd(i, o) {
      var l, c, h, m, S, C, N, I, $;
      if (!i || i.length === 0) throw new Error("latlngs not passed");
      pt(i) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (i = i[0]));
      var W = G([0, 0]),
        X = ue(i),
        Ve =
          X.getNorthWest().distanceTo(X.getSouthWest()) *
          X.getNorthEast().distanceTo(X.getNorthWest());
      Ve < 1700 && (W = Ia(i));
      var Me = i.length,
        mt = [];
      for (l = 0; l < Me; l++) {
        var Qe = G(i[l]);
        mt.push(o.project(G([Qe.lat - W.lat, Qe.lng - W.lng])));
      }
      for (C = N = I = 0, l = 0, c = Me - 1; l < Me; c = l++)
        (h = mt[l]),
          (m = mt[c]),
          (S = h.y * m.x - m.y * h.x),
          (N += (h.x + m.x) * S),
          (I += (h.y + m.y) * S),
          (C += S * 3);
      C === 0 ? ($ = mt[0]) : ($ = [N / C, I / C]);
      var ui = o.unproject(F($));
      return G([ui.lat + W.lat, ui.lng + W.lng]);
    }
    function Ia(i) {
      for (var o = 0, l = 0, c = 0, h = 0; h < i.length; h++) {
        var m = G(i[h]);
        (o += m.lat), (l += m.lng), c++;
      }
      return G([o / c, l / c]);
    }
    var Iv = {
      __proto__: null,
      clipPolygon: hd,
      polygonCenter: pd,
      centroid: Ia,
    };
    function md(i, o) {
      if (!o || !i.length) return i.slice();
      var l = o * o;
      return (i = Dv(i, l)), (i = Bv(i, l)), i;
    }
    function gd(i, o, l) {
      return Math.sqrt(tr(i, o, l, !0));
    }
    function bv(i, o, l) {
      return tr(i, o, l);
    }
    function Bv(i, o) {
      var l = i.length,
        c = typeof Uint8Array < "u" ? Uint8Array : Array,
        h = new c(l);
      (h[0] = h[l - 1] = 1), ba(i, h, o, 0, l - 1);
      var m,
        S = [];
      for (m = 0; m < l; m++) h[m] && S.push(i[m]);
      return S;
    }
    function ba(i, o, l, c, h) {
      var m = 0,
        S,
        C,
        N;
      for (C = c + 1; C <= h - 1; C++)
        (N = tr(i[C], i[c], i[h], !0)), N > m && ((S = C), (m = N));
      m > l && ((o[S] = 1), ba(i, o, l, c, S), ba(i, o, l, S, h));
    }
    function Dv(i, o) {
      for (var l = [i[0]], c = 1, h = 0, m = i.length; c < m; c++)
        Fv(i[c], i[h]) > o && (l.push(i[c]), (h = c));
      return h < m - 1 && l.push(i[m - 1]), l;
    }
    var vd;
    function _d(i, o, l, c, h) {
      var m = c ? vd : In(i, l),
        S = In(o, l),
        C,
        N,
        I;
      for (vd = S; ; ) {
        if (!(m | S)) return [i, o];
        if (m & S) return !1;
        (C = m || S),
          (N = ho(i, o, C, l, h)),
          (I = In(N, l)),
          C === m ? ((i = N), (m = I)) : ((o = N), (S = I));
      }
    }
    function ho(i, o, l, c, h) {
      var m = o.x - i.x,
        S = o.y - i.y,
        C = c.min,
        N = c.max,
        I,
        $;
      return (
        l & 8
          ? ((I = i.x + (m * (N.y - i.y)) / S), ($ = N.y))
          : l & 4
          ? ((I = i.x + (m * (C.y - i.y)) / S), ($ = C.y))
          : l & 2
          ? ((I = N.x), ($ = i.y + (S * (N.x - i.x)) / m))
          : l & 1 && ((I = C.x), ($ = i.y + (S * (C.x - i.x)) / m)),
        new R(I, $, h)
      );
    }
    function In(i, o) {
      var l = 0;
      return (
        i.x < o.min.x ? (l |= 1) : i.x > o.max.x && (l |= 2),
        i.y < o.min.y ? (l |= 4) : i.y > o.max.y && (l |= 8),
        l
      );
    }
    function Fv(i, o) {
      var l = o.x - i.x,
        c = o.y - i.y;
      return l * l + c * c;
    }
    function tr(i, o, l, c) {
      var h = o.x,
        m = o.y,
        S = l.x - h,
        C = l.y - m,
        N = S * S + C * C,
        I;
      return (
        N > 0 &&
          ((I = ((i.x - h) * S + (i.y - m) * C) / N),
          I > 1
            ? ((h = l.x), (m = l.y))
            : I > 0 && ((h += S * I), (m += C * I))),
        (S = i.x - h),
        (C = i.y - m),
        c ? S * S + C * C : new R(h, m)
      );
    }
    function pt(i) {
      return !x(i[0]) || (typeof i[0][0] != "object" && typeof i[0][0] < "u");
    }
    function yd(i) {
      return (
        console.warn(
          "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
        ),
        pt(i)
      );
    }
    function wd(i, o) {
      var l, c, h, m, S, C, N, I;
      if (!i || i.length === 0) throw new Error("latlngs not passed");
      pt(i) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (i = i[0]));
      var $ = G([0, 0]),
        W = ue(i),
        X =
          W.getNorthWest().distanceTo(W.getSouthWest()) *
          W.getNorthEast().distanceTo(W.getNorthWest());
      X < 1700 && ($ = Ia(i));
      var Ve = i.length,
        Me = [];
      for (l = 0; l < Ve; l++) {
        var mt = G(i[l]);
        Me.push(o.project(G([mt.lat - $.lat, mt.lng - $.lng])));
      }
      for (l = 0, c = 0; l < Ve - 1; l++) c += Me[l].distanceTo(Me[l + 1]) / 2;
      if (c === 0) I = Me[0];
      else
        for (l = 0, m = 0; l < Ve - 1; l++)
          if (
            ((S = Me[l]),
            (C = Me[l + 1]),
            (h = S.distanceTo(C)),
            (m += h),
            m > c)
          ) {
            (N = (m - c) / h),
              (I = [C.x - N * (C.x - S.x), C.y - N * (C.y - S.y)]);
            break;
          }
      var Qe = o.unproject(F(I));
      return G([Qe.lat + $.lat, Qe.lng + $.lng]);
    }
    var jv = {
        __proto__: null,
        simplify: md,
        pointToSegmentDistance: gd,
        closestPointOnSegment: bv,
        clipSegment: _d,
        _getEdgeIntersection: ho,
        _getBitCode: In,
        _sqClosestPointOnSegment: tr,
        isFlat: pt,
        _flat: yd,
        polylineCenter: wd,
      },
      Ba = {
        project: function (i) {
          return new R(i.lng, i.lat);
        },
        unproject: function (i) {
          return new oe(i.y, i.x);
        },
        bounds: new K([-180, -90], [180, 90]),
      },
      Da = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new K(
          [-2003750834279e-5, -1549657073972e-5],
          [2003750834279e-5, 1876465623138e-5]
        ),
        project: function (i) {
          var o = Math.PI / 180,
            l = this.R,
            c = i.lat * o,
            h = this.R_MINOR / l,
            m = Math.sqrt(1 - h * h),
            S = m * Math.sin(c),
            C =
              Math.tan(Math.PI / 4 - c / 2) /
              Math.pow((1 - S) / (1 + S), m / 2);
          return (
            (c = -l * Math.log(Math.max(C, 1e-10))), new R(i.lng * o * l, c)
          );
        },
        unproject: function (i) {
          for (
            var o = 180 / Math.PI,
              l = this.R,
              c = this.R_MINOR / l,
              h = Math.sqrt(1 - c * c),
              m = Math.exp(-i.y / l),
              S = Math.PI / 2 - 2 * Math.atan(m),
              C = 0,
              N = 0.1,
              I;
            C < 15 && Math.abs(N) > 1e-7;
            C++
          )
            (I = h * Math.sin(S)),
              (I = Math.pow((1 - I) / (1 + I), h / 2)),
              (N = Math.PI / 2 - 2 * Math.atan(m * I) - S),
              (S += N);
          return new oe(S * o, (i.x * o) / l);
        },
      },
      $v = { __proto__: null, LonLat: Ba, Mercator: Da, SphericalMercator: ca },
      Uv = s({}, on, {
        code: "EPSG:3395",
        projection: Da,
        transformation: (function () {
          var i = 0.5 / (Math.PI * Da.R);
          return Wi(i, 0.5, -i, 0.5);
        })(),
      }),
      xd = s({}, on, {
        code: "EPSG:4326",
        projection: Ba,
        transformation: Wi(1 / 180, 1, -1 / 180, 0.5),
      }),
      Zv = s({}, Je, {
        projection: Ba,
        transformation: Wi(1, 0, -1, 0),
        scale: function (i) {
          return Math.pow(2, i);
        },
        zoom: function (i) {
          return Math.log(i) / Math.LN2;
        },
        distance: function (i, o) {
          var l = o.lng - i.lng,
            c = o.lat - i.lat;
          return Math.sqrt(l * l + c * c);
        },
        infinite: !0,
      });
    (Je.Earth = on),
      (Je.EPSG3395 = Uv),
      (Je.EPSG3857 = fa),
      (Je.EPSG900913 = qg),
      (Je.EPSG4326 = xd),
      (Je.Simple = Zv);
    var Pt = ft.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0,
      },
      addTo: function (i) {
        return i.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (i) {
        return i && i.removeLayer(this), this;
      },
      getPane: function (i) {
        return this._map.getPane(i ? this.options[i] || i : this.options.pane);
      },
      addInteractiveTarget: function (i) {
        return (this._map._targets[f(i)] = this), this;
      },
      removeInteractiveTarget: function (i) {
        return delete this._map._targets[f(i)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (i) {
        var o = i.target;
        if (o.hasLayer(this)) {
          if (
            ((this._map = o),
            (this._zoomAnimated = o._zoomAnimated),
            this.getEvents)
          ) {
            var l = this.getEvents();
            o.on(l, this),
              this.once(
                "remove",
                function () {
                  o.off(l, this);
                },
                this
              );
          }
          this.onAdd(o), this.fire("add"), o.fire("layeradd", { layer: this });
        }
      },
    });
    te.include({
      addLayer: function (i) {
        if (!i._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var o = f(i);
        return this._layers[o]
          ? this
          : ((this._layers[o] = i),
            (i._mapToAdd = this),
            i.beforeAdd && i.beforeAdd(this),
            this.whenReady(i._layerAdd, i),
            this);
      },
      removeLayer: function (i) {
        var o = f(i);
        return this._layers[o]
          ? (this._loaded && i.onRemove(this),
            delete this._layers[o],
            this._loaded &&
              (this.fire("layerremove", { layer: i }), i.fire("remove")),
            (i._map = i._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (i) {
        return f(i) in this._layers;
      },
      eachLayer: function (i, o) {
        for (var l in this._layers) i.call(o, this._layers[l]);
        return this;
      },
      _addLayers: function (i) {
        i = i ? (x(i) ? i : [i]) : [];
        for (var o = 0, l = i.length; o < l; o++) this.addLayer(i[o]);
      },
      _addZoomLimit: function (i) {
        (!isNaN(i.options.maxZoom) || !isNaN(i.options.minZoom)) &&
          ((this._zoomBoundLayers[f(i)] = i), this._updateZoomLevels());
      },
      _removeZoomLimit: function (i) {
        var o = f(i);
        this._zoomBoundLayers[o] &&
          (delete this._zoomBoundLayers[o], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var i = 1 / 0,
          o = -1 / 0,
          l = this._getZoomSpan();
        for (var c in this._zoomBoundLayers) {
          var h = this._zoomBoundLayers[c].options;
          (i = h.minZoom === void 0 ? i : Math.min(i, h.minZoom)),
            (o = h.maxZoom === void 0 ? o : Math.max(o, h.maxZoom));
        }
        (this._layersMaxZoom = o === -1 / 0 ? void 0 : o),
          (this._layersMinZoom = i === 1 / 0 ? void 0 : i),
          l !== this._getZoomSpan() && this.fire("zoomlevelschange"),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      },
    });
    var ri = Pt.extend({
        initialize: function (i, o) {
          E(this, o), (this._layers = {});
          var l, c;
          if (i) for (l = 0, c = i.length; l < c; l++) this.addLayer(i[l]);
        },
        addLayer: function (i) {
          var o = this.getLayerId(i);
          return (
            (this._layers[o] = i), this._map && this._map.addLayer(i), this
          );
        },
        removeLayer: function (i) {
          var o = i in this._layers ? i : this.getLayerId(i);
          return (
            this._map &&
              this._layers[o] &&
              this._map.removeLayer(this._layers[o]),
            delete this._layers[o],
            this
          );
        },
        hasLayer: function (i) {
          var o = typeof i == "number" ? i : this.getLayerId(i);
          return o in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (i) {
          var o = Array.prototype.slice.call(arguments, 1),
            l,
            c;
          for (l in this._layers)
            (c = this._layers[l]), c[i] && c[i].apply(c, o);
          return this;
        },
        onAdd: function (i) {
          this.eachLayer(i.addLayer, i);
        },
        onRemove: function (i) {
          this.eachLayer(i.removeLayer, i);
        },
        eachLayer: function (i, o) {
          for (var l in this._layers) i.call(o, this._layers[l]);
          return this;
        },
        getLayer: function (i) {
          return this._layers[i];
        },
        getLayers: function () {
          var i = [];
          return this.eachLayer(i.push, i), i;
        },
        setZIndex: function (i) {
          return this.invoke("setZIndex", i);
        },
        getLayerId: function (i) {
          return f(i);
        },
      }),
      Hv = function (i, o) {
        return new ri(i, o);
      },
      Ht = ri.extend({
        addLayer: function (i) {
          return this.hasLayer(i)
            ? this
            : (i.addEventParent(this),
              ri.prototype.addLayer.call(this, i),
              this.fire("layeradd", { layer: i }));
        },
        removeLayer: function (i) {
          return this.hasLayer(i)
            ? (i in this._layers && (i = this._layers[i]),
              i.removeEventParent(this),
              ri.prototype.removeLayer.call(this, i),
              this.fire("layerremove", { layer: i }))
            : this;
        },
        setStyle: function (i) {
          return this.invoke("setStyle", i);
        },
        bringToFront: function () {
          return this.invoke("bringToFront");
        },
        bringToBack: function () {
          return this.invoke("bringToBack");
        },
        getBounds: function () {
          var i = new Oe();
          for (var o in this._layers) {
            var l = this._layers[o];
            i.extend(l.getBounds ? l.getBounds() : l.getLatLng());
          }
          return i;
        },
      }),
      Vv = function (i, o) {
        return new Ht(i, o);
      },
      oi = Re.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          crossOrigin: !1,
        },
        initialize: function (i) {
          E(this, i);
        },
        createIcon: function (i) {
          return this._createIcon("icon", i);
        },
        createShadow: function (i) {
          return this._createIcon("shadow", i);
        },
        _createIcon: function (i, o) {
          var l = this._getIconUrl(i);
          if (!l) {
            if (i === "icon")
              throw new Error(
                "iconUrl not set in Icon options (see the docs)."
              );
            return null;
          }
          var c = this._createImg(l, o && o.tagName === "IMG" ? o : null);
          return (
            this._setIconStyles(c, i),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (c.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            c
          );
        },
        _setIconStyles: function (i, o) {
          var l = this.options,
            c = l[o + "Size"];
          typeof c == "number" && (c = [c, c]);
          var h = F(c),
            m = F(
              (o === "shadow" && l.shadowAnchor) ||
                l.iconAnchor ||
                (h && h.divideBy(2, !0))
            );
          (i.className = "leaflet-marker-" + o + " " + (l.className || "")),
            m &&
              ((i.style.marginLeft = -m.x + "px"),
              (i.style.marginTop = -m.y + "px")),
            h && ((i.style.width = h.x + "px"), (i.style.height = h.y + "px"));
        },
        _createImg: function (i, o) {
          return (o = o || document.createElement("img")), (o.src = i), o;
        },
        _getIconUrl: function (i) {
          return (
            (H.retina && this.options[i + "RetinaUrl"]) ||
            this.options[i + "Url"]
          );
        },
      });
    function Wv(i) {
      return new oi(i);
    }
    var nr = oi.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (i) {
          return (
            typeof nr.imagePath != "string" &&
              (nr.imagePath = this._detectIconPath()),
            (this.options.imagePath || nr.imagePath) +
              oi.prototype._getIconUrl.call(this, i)
          );
        },
        _stripUrl: function (i) {
          var o = function (l, c, h) {
            var m = c.exec(l);
            return m && m[h];
          };
          return (
            (i = o(i, /^url\((['"])?(.+)\1\)$/, 2)),
            i && o(i, /^(.*)marker-icon\.png$/, 1)
          );
        },
        _detectIconPath: function () {
          var i = se("div", "leaflet-default-icon-path", document.body),
            o = qi(i, "background-image") || qi(i, "backgroundImage");
          if ((document.body.removeChild(i), (o = this._stripUrl(o)), o))
            return o;
          var l = document.querySelector('link[href$="leaflet.css"]');
          return l ? l.href.substring(0, l.href.length - 11 - 1) : "";
        },
      }),
      Sd = At.extend({
        initialize: function (i) {
          this._marker = i;
        },
        addHooks: function () {
          var i = this._marker._icon;
          this._draggable || (this._draggable = new sn(i, i, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this
              )
              .enable(),
            Y(i, "leaflet-marker-draggable");
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .disable(),
            this._marker._icon &&
              xe(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (i) {
          var o = this._marker,
            l = o._map,
            c = this._marker.options.autoPanSpeed,
            h = this._marker.options.autoPanPadding,
            m = Rn(o._icon),
            S = l.getPixelBounds(),
            C = l.getPixelOrigin(),
            N = ne(S.min._subtract(C).add(h), S.max._subtract(C).subtract(h));
          if (!N.contains(m)) {
            var I = F(
              (Math.max(N.max.x, m.x) - N.max.x) / (S.max.x - N.max.x) -
                (Math.min(N.min.x, m.x) - N.min.x) / (S.min.x - N.min.x),
              (Math.max(N.max.y, m.y) - N.max.y) / (S.max.y - N.max.y) -
                (Math.min(N.min.y, m.y) - N.min.y) / (S.min.y - N.min.y)
            ).multiplyBy(c);
            l.panBy(I, { animate: !1 }),
              this._draggable._newPos._add(I),
              this._draggable._startPos._add(I),
              Le(o._icon, this._draggable._newPos),
              this._onDrag(i),
              (this._panRequest = re(this._adjustPan.bind(this, i)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function (i) {
          this._marker.options.autoPan &&
            (Te(this._panRequest),
            (this._panRequest = re(this._adjustPan.bind(this, i))));
        },
        _onDrag: function (i) {
          var o = this._marker,
            l = o._shadow,
            c = Rn(o._icon),
            h = o._map.layerPointToLatLng(c);
          l && Le(l, c),
            (o._latlng = h),
            (i.latlng = h),
            (i.oldLatLng = this._oldLatLng),
            o.fire("move", i).fire("drag", i);
        },
        _onDragEnd: function (i) {
          Te(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", i);
        },
      }),
      po = Pt.extend({
        options: {
          icon: new nr(),
          interactive: !0,
          keyboard: !0,
          title: "",
          alt: "Marker",
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: "markerPane",
          shadowPane: "shadowPane",
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (i, o) {
          E(this, o), (this._latlng = G(i));
        },
        onAdd: function (i) {
          (this._zoomAnimated =
            this._zoomAnimated && i.options.markerZoomAnimation),
            this._zoomAnimated && i.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (i) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && i.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (i) {
          var o = this._latlng;
          return (
            (this._latlng = G(i)),
            this.update(),
            this.fire("move", { oldLatLng: o, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (i) {
          return (this.options.zIndexOffset = i), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (i) {
          return (
            (this.options.icon = i),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var i = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(i);
          }
          return this;
        },
        _initIcon: function () {
          var i = this.options,
            o = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
            l = i.icon.createIcon(this._icon),
            c = !1;
          l !== this._icon &&
            (this._icon && this._removeIcon(),
            (c = !0),
            i.title && (l.title = i.title),
            l.tagName === "IMG" && (l.alt = i.alt || "")),
            Y(l, o),
            i.keyboard &&
              ((l.tabIndex = "0"), l.setAttribute("role", "button")),
            (this._icon = l),
            i.riseOnHover &&
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex,
              }),
            this.options.autoPanOnFocus &&
              q(l, "focus", this._panOnFocus, this);
          var h = i.icon.createShadow(this._shadow),
            m = !1;
          h !== this._shadow && (this._removeShadow(), (m = !0)),
            h && (Y(h, o), (h.alt = "")),
            (this._shadow = h),
            i.opacity < 1 && this._updateOpacity(),
            c && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            h && m && this.getPane(i.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
            this.options.autoPanOnFocus &&
              ce(this._icon, "focus", this._panOnFocus, this),
            me(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && me(this._shadow), (this._shadow = null);
        },
        _setPos: function (i) {
          this._icon && Le(this._icon, i),
            this._shadow && Le(this._shadow, i),
            (this._zIndex = i.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (i) {
          this._icon && (this._icon.style.zIndex = this._zIndex + i);
        },
        _animateZoom: function (i) {
          var o = this._map
            ._latLngToNewLayerPoint(this._latlng, i.zoom, i.center)
            .round();
          this._setPos(o);
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (Y(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            Sd)
          ) {
            var i = this.options.draggable;
            this.dragging &&
              ((i = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new Sd(this)),
              i && this.dragging.enable();
          }
        },
        setOpacity: function (i) {
          return (
            (this.options.opacity = i), this._map && this._updateOpacity(), this
          );
        },
        _updateOpacity: function () {
          var i = this.options.opacity;
          this._icon && ht(this._icon, i), this._shadow && ht(this._shadow, i);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var i = this._map;
          if (i) {
            var o = this.options.icon.options,
              l = o.iconSize ? F(o.iconSize) : F(0, 0),
              c = o.iconAnchor ? F(o.iconAnchor) : F(0, 0);
            i.panInside(this._latlng, {
              paddingTopLeft: c,
              paddingBottomRight: l.subtract(c),
            });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function Kv(i, o) {
      return new po(i, o);
    }
    var an = Pt.extend({
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round",
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: "evenodd",
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (i) {
          this._renderer = i.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (i) {
          return (
            E(this, i),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                i &&
                Object.prototype.hasOwnProperty.call(i, "weight") &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      mo = an.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (i, o) {
          E(this, o),
            (this._latlng = G(i)),
            (this._radius = this.options.radius);
        },
        setLatLng: function (i) {
          var o = this._latlng;
          return (
            (this._latlng = G(i)),
            this.redraw(),
            this.fire("move", { oldLatLng: o, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (i) {
          return (this.options.radius = this._radius = i), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (i) {
          var o = (i && i.radius) || this._radius;
          return an.prototype.setStyle.call(this, i), this.setRadius(o), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds();
        },
        _updateBounds: function () {
          var i = this._radius,
            o = this._radiusY || i,
            l = this._clickTolerance(),
            c = [i + l, o + l];
          this._pxBounds = new K(this._point.subtract(c), this._point.add(c));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return (
            this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          );
        },
        _containsPoint: function (i) {
          return (
            i.distanceTo(this._point) <= this._radius + this._clickTolerance()
          );
        },
      });
    function Gv(i, o) {
      return new mo(i, o);
    }
    var Fa = mo.extend({
      initialize: function (i, o, l) {
        if (
          (typeof o == "number" && (o = s({}, l, { radius: o })),
          E(this, o),
          (this._latlng = G(i)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (i) {
        return (this._mRadius = i), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var i = [this._radius, this._radiusY || this._radius];
        return new Oe(
          this._map.layerPointToLatLng(this._point.subtract(i)),
          this._map.layerPointToLatLng(this._point.add(i))
        );
      },
      setStyle: an.prototype.setStyle,
      _project: function () {
        var i = this._latlng.lng,
          o = this._latlng.lat,
          l = this._map,
          c = l.options.crs;
        if (c.distance === on.distance) {
          var h = Math.PI / 180,
            m = this._mRadius / on.R / h,
            S = l.project([o + m, i]),
            C = l.project([o - m, i]),
            N = S.add(C).divideBy(2),
            I = l.unproject(N).lat,
            $ =
              Math.acos(
                (Math.cos(m * h) - Math.sin(o * h) * Math.sin(I * h)) /
                  (Math.cos(o * h) * Math.cos(I * h))
              ) / h;
          (isNaN($) || $ === 0) && ($ = m / Math.cos((Math.PI / 180) * o)),
            (this._point = N.subtract(l.getPixelOrigin())),
            (this._radius = isNaN($) ? 0 : N.x - l.project([I, i - $]).x),
            (this._radiusY = N.y - S.y);
        } else {
          var W = c.unproject(
            c.project(this._latlng).subtract([this._mRadius, 0])
          );
          (this._point = l.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - l.latLngToLayerPoint(W).x);
        }
        this._updateBounds();
      },
    });
    function qv(i, o, l) {
      return new Fa(i, o, l);
    }
    var Vt = an.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (i, o) {
        E(this, o), this._setLatLngs(i);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (i) {
        return this._setLatLngs(i), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (i) {
        for (
          var o = 1 / 0, l = null, c = tr, h, m, S = 0, C = this._parts.length;
          S < C;
          S++
        )
          for (var N = this._parts[S], I = 1, $ = N.length; I < $; I++) {
            (h = N[I - 1]), (m = N[I]);
            var W = c(i, h, m, !0);
            W < o && ((o = W), (l = c(i, h, m)));
          }
        return l && (l.distance = Math.sqrt(o)), l;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return wd(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (i, o) {
        return (
          (o = o || this._defaultShape()),
          (i = G(i)),
          o.push(i),
          this._bounds.extend(i),
          this.redraw()
        );
      },
      _setLatLngs: function (i) {
        (this._bounds = new Oe()), (this._latlngs = this._convertLatLngs(i));
      },
      _defaultShape: function () {
        return pt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (i) {
        for (var o = [], l = pt(i), c = 0, h = i.length; c < h; c++)
          l
            ? ((o[c] = G(i[c])), this._bounds.extend(o[c]))
            : (o[c] = this._convertLatLngs(i[c]));
        return o;
      },
      _project: function () {
        var i = new K();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, i),
          this._bounds.isValid() &&
            i.isValid() &&
            ((this._rawPxBounds = i), this._updateBounds());
      },
      _updateBounds: function () {
        var i = this._clickTolerance(),
          o = new R(i, i);
        this._rawPxBounds &&
          (this._pxBounds = new K([
            this._rawPxBounds.min.subtract(o),
            this._rawPxBounds.max.add(o),
          ]));
      },
      _projectLatlngs: function (i, o, l) {
        var c = i[0] instanceof oe,
          h = i.length,
          m,
          S;
        if (c) {
          for (S = [], m = 0; m < h; m++)
            (S[m] = this._map.latLngToLayerPoint(i[m])), l.extend(S[m]);
          o.push(S);
        } else for (m = 0; m < h; m++) this._projectLatlngs(i[m], o, l);
      },
      _clipPoints: function () {
        var i = this._renderer._bounds;
        if (
          ((this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(i)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var o = this._parts,
            l,
            c,
            h,
            m,
            S,
            C,
            N;
          for (l = 0, h = 0, m = this._rings.length; l < m; l++)
            for (N = this._rings[l], c = 0, S = N.length; c < S - 1; c++)
              (C = _d(N[c], N[c + 1], i, c, !0)),
                C &&
                  ((o[h] = o[h] || []),
                  o[h].push(C[0]),
                  (C[1] !== N[c + 1] || c === S - 2) && (o[h].push(C[1]), h++));
        }
      },
      _simplifyPoints: function () {
        for (
          var i = this._parts,
            o = this.options.smoothFactor,
            l = 0,
            c = i.length;
          l < c;
          l++
        )
          i[l] = md(i[l], o);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (i, o) {
        var l,
          c,
          h,
          m,
          S,
          C,
          N = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(i)) return !1;
        for (l = 0, m = this._parts.length; l < m; l++)
          for (
            C = this._parts[l], c = 0, S = C.length, h = S - 1;
            c < S;
            h = c++
          )
            if (!(!o && c === 0) && gd(i, C[h], C[c]) <= N) return !0;
        return !1;
      },
    });
    function Jv(i, o) {
      return new Vt(i, o);
    }
    Vt._flat = yd;
    var si = Vt.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return pd(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (i) {
        var o = Vt.prototype._convertLatLngs.call(this, i),
          l = o.length;
        return (
          l >= 2 && o[0] instanceof oe && o[0].equals(o[l - 1]) && o.pop(), o
        );
      },
      _setLatLngs: function (i) {
        Vt.prototype._setLatLngs.call(this, i),
          pt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return pt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var i = this._renderer._bounds,
          o = this.options.weight,
          l = new R(o, o);
        if (
          ((i = new K(i.min.subtract(l), i.max.add(l))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(i)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var c = 0, h = this._rings.length, m; c < h; c++)
            (m = hd(this._rings[c], i, !0)), m.length && this._parts.push(m);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (i) {
        var o = !1,
          l,
          c,
          h,
          m,
          S,
          C,
          N,
          I;
        if (!this._pxBounds || !this._pxBounds.contains(i)) return !1;
        for (m = 0, N = this._parts.length; m < N; m++)
          for (
            l = this._parts[m], S = 0, I = l.length, C = I - 1;
            S < I;
            C = S++
          )
            (c = l[S]),
              (h = l[C]),
              c.y > i.y != h.y > i.y &&
                i.x < ((h.x - c.x) * (i.y - c.y)) / (h.y - c.y) + c.x &&
                (o = !o);
        return o || Vt.prototype._containsPoint.call(this, i, !0);
      },
    });
    function Qv(i, o) {
      return new si(i, o);
    }
    var Wt = Ht.extend({
      initialize: function (i, o) {
        E(this, o), (this._layers = {}), i && this.addData(i);
      },
      addData: function (i) {
        var o = x(i) ? i : i.features,
          l,
          c,
          h;
        if (o) {
          for (l = 0, c = o.length; l < c; l++)
            (h = o[l]),
              (h.geometries || h.geometry || h.features || h.coordinates) &&
                this.addData(h);
          return this;
        }
        var m = this.options;
        if (m.filter && !m.filter(i)) return this;
        var S = go(i, m);
        return S
          ? ((S.feature = yo(i)),
            (S.defaultOptions = S.options),
            this.resetStyle(S),
            m.onEachFeature && m.onEachFeature(i, S),
            this.addLayer(S))
          : this;
      },
      resetStyle: function (i) {
        return i === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((i.options = s({}, i.defaultOptions)),
            this._setLayerStyle(i, this.options.style),
            this);
      },
      setStyle: function (i) {
        return this.eachLayer(function (o) {
          this._setLayerStyle(o, i);
        }, this);
      },
      _setLayerStyle: function (i, o) {
        i.setStyle &&
          (typeof o == "function" && (o = o(i.feature)), i.setStyle(o));
      },
    });
    function go(i, o) {
      var l = i.type === "Feature" ? i.geometry : i,
        c = l ? l.coordinates : null,
        h = [],
        m = o && o.pointToLayer,
        S = (o && o.coordsToLatLng) || ja,
        C,
        N,
        I,
        $;
      if (!c && !l) return null;
      switch (l.type) {
        case "Point":
          return (C = S(c)), Pd(m, i, C, o);
        case "MultiPoint":
          for (I = 0, $ = c.length; I < $; I++)
            (C = S(c[I])), h.push(Pd(m, i, C, o));
          return new Ht(h);
        case "LineString":
        case "MultiLineString":
          return (N = vo(c, l.type === "LineString" ? 0 : 1, S)), new Vt(N, o);
        case "Polygon":
        case "MultiPolygon":
          return (N = vo(c, l.type === "Polygon" ? 1 : 2, S)), new si(N, o);
        case "GeometryCollection":
          for (I = 0, $ = l.geometries.length; I < $; I++) {
            var W = go(
              {
                geometry: l.geometries[I],
                type: "Feature",
                properties: i.properties,
              },
              o
            );
            W && h.push(W);
          }
          return new Ht(h);
        case "FeatureCollection":
          for (I = 0, $ = l.features.length; I < $; I++) {
            var X = go(l.features[I], o);
            X && h.push(X);
          }
          return new Ht(h);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function Pd(i, o, l, c) {
      return i ? i(o, l) : new po(l, c && c.markersInheritOptions && c);
    }
    function ja(i) {
      return new oe(i[1], i[0], i[2]);
    }
    function vo(i, o, l) {
      for (var c = [], h = 0, m = i.length, S; h < m; h++)
        (S = o ? vo(i[h], o - 1, l) : (l || ja)(i[h])), c.push(S);
      return c;
    }
    function $a(i, o) {
      return (
        (i = G(i)),
        i.alt !== void 0
          ? [_(i.lng, o), _(i.lat, o), _(i.alt, o)]
          : [_(i.lng, o), _(i.lat, o)]
      );
    }
    function _o(i, o, l, c) {
      for (var h = [], m = 0, S = i.length; m < S; m++)
        h.push(o ? _o(i[m], pt(i[m]) ? 0 : o - 1, l, c) : $a(i[m], c));
      return !o && l && h.length > 0 && h.push(h[0].slice()), h;
    }
    function ai(i, o) {
      return i.feature ? s({}, i.feature, { geometry: o }) : yo(o);
    }
    function yo(i) {
      return i.type === "Feature" || i.type === "FeatureCollection"
        ? i
        : { type: "Feature", properties: {}, geometry: i };
    }
    var Ua = {
      toGeoJSON: function (i) {
        return ai(this, {
          type: "Point",
          coordinates: $a(this.getLatLng(), i),
        });
      },
    };
    po.include(Ua),
      Fa.include(Ua),
      mo.include(Ua),
      Vt.include({
        toGeoJSON: function (i) {
          var o = !pt(this._latlngs),
            l = _o(this._latlngs, o ? 1 : 0, !1, i);
          return ai(this, {
            type: (o ? "Multi" : "") + "LineString",
            coordinates: l,
          });
        },
      }),
      si.include({
        toGeoJSON: function (i) {
          var o = !pt(this._latlngs),
            l = o && !pt(this._latlngs[0]),
            c = _o(this._latlngs, l ? 2 : o ? 1 : 0, !0, i);
          return (
            o || (c = [c]),
            ai(this, { type: (l ? "Multi" : "") + "Polygon", coordinates: c })
          );
        },
      }),
      ri.include({
        toMultiPoint: function (i) {
          var o = [];
          return (
            this.eachLayer(function (l) {
              o.push(l.toGeoJSON(i).geometry.coordinates);
            }),
            ai(this, { type: "MultiPoint", coordinates: o })
          );
        },
        toGeoJSON: function (i) {
          var o =
            this.feature && this.feature.geometry && this.feature.geometry.type;
          if (o === "MultiPoint") return this.toMultiPoint(i);
          var l = o === "GeometryCollection",
            c = [];
          return (
            this.eachLayer(function (h) {
              if (h.toGeoJSON) {
                var m = h.toGeoJSON(i);
                if (l) c.push(m.geometry);
                else {
                  var S = yo(m);
                  S.type === "FeatureCollection"
                    ? c.push.apply(c, S.features)
                    : c.push(S);
                }
              }
            }),
            l
              ? ai(this, { geometries: c, type: "GeometryCollection" })
              : { type: "FeatureCollection", features: c }
          );
        },
      });
    function Ld(i, o) {
      return new Wt(i, o);
    }
    var Yv = Ld,
      wo = Pt.extend({
        options: {
          opacity: 1,
          alt: "",
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: "",
          zIndex: 1,
          className: "",
        },
        initialize: function (i, o, l) {
          (this._url = i), (this._bounds = ue(o)), E(this, l);
        },
        onAdd: function () {
          this._image ||
            (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (Y(this._image, "leaflet-interactive"),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          me(this._image),
            this.options.interactive &&
              this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (i) {
          return (
            (this.options.opacity = i),
            this._image && this._updateOpacity(),
            this
          );
        },
        setStyle: function (i) {
          return i.opacity && this.setOpacity(i.opacity), this;
        },
        bringToFront: function () {
          return this._map && ni(this._image), this;
        },
        bringToBack: function () {
          return this._map && ii(this._image), this;
        },
        setUrl: function (i) {
          return (this._url = i), this._image && (this._image.src = i), this;
        },
        setBounds: function (i) {
          return (this._bounds = ue(i)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var i = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
        },
        setZIndex: function (i) {
          return (this.options.zIndex = i), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var i = this._url.tagName === "IMG",
            o = (this._image = i ? this._url : se("img"));
          if (
            (Y(o, "leaflet-image-layer"),
            this._zoomAnimated && Y(o, "leaflet-zoom-animated"),
            this.options.className && Y(o, this.options.className),
            (o.onselectstart = v),
            (o.onmousemove = v),
            (o.onload = u(this.fire, this, "load")),
            (o.onerror = u(this._overlayOnError, this, "error")),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (o.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            i)
          ) {
            this._url = o.src;
            return;
          }
          (o.src = this._url), (o.alt = this.options.alt);
        },
        _animateZoom: function (i) {
          var o = this._map.getZoomScale(i.zoom),
            l = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              i.zoom,
              i.center
            ).min;
          zn(this._image, l, o);
        },
        _reset: function () {
          var i = this._image,
            o = new K(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ),
            l = o.getSize();
          Le(i, o.min),
            (i.style.width = l.x + "px"),
            (i.style.height = l.y + "px");
        },
        _updateOpacity: function () {
          ht(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire("error");
          var i = this.options.errorOverlayUrl;
          i && this._url !== i && ((this._url = i), (this._image.src = i));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      Xv = function (i, o, l) {
        return new wo(i, o, l);
      },
      kd = wo.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0,
        },
        _initImage: function () {
          var i = this._url.tagName === "VIDEO",
            o = (this._image = i ? this._url : se("video"));
          if (
            (Y(o, "leaflet-image-layer"),
            this._zoomAnimated && Y(o, "leaflet-zoom-animated"),
            this.options.className && Y(o, this.options.className),
            (o.onselectstart = v),
            (o.onmousemove = v),
            (o.onloadeddata = u(this.fire, this, "load")),
            i)
          ) {
            for (
              var l = o.getElementsByTagName("source"), c = [], h = 0;
              h < l.length;
              h++
            )
              c.push(l[h].src);
            this._url = l.length > 0 ? c : [o.src];
            return;
          }
          x(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(o.style, "objectFit") &&
              (o.style.objectFit = "fill"),
            (o.autoplay = !!this.options.autoplay),
            (o.loop = !!this.options.loop),
            (o.muted = !!this.options.muted),
            (o.playsInline = !!this.options.playsInline);
          for (var m = 0; m < this._url.length; m++) {
            var S = se("source");
            (S.src = this._url[m]), o.appendChild(S);
          }
        },
      });
    function e_(i, o, l) {
      return new kd(i, o, l);
    }
    var Ed = wo.extend({
      _initImage: function () {
        var i = (this._image = this._url);
        Y(i, "leaflet-image-layer"),
          this._zoomAnimated && Y(i, "leaflet-zoom-animated"),
          this.options.className && Y(i, this.options.className),
          (i.onselectstart = v),
          (i.onmousemove = v);
      },
    });
    function t_(i, o, l) {
      return new Ed(i, o, l);
    }
    var It = Pt.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: "",
      },
      initialize: function (i, o) {
        i && (i instanceof oe || x(i))
          ? ((this._latlng = G(i)), E(this, o))
          : (E(this, i), (this._source = o)),
          this.options.content && (this._content = this.options.content);
      },
      openOn: function (i) {
        return (
          (i = arguments.length ? i : this._source._map),
          i.hasLayer(this) || i.addLayer(this),
          this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (i) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = i) : (i = this._source),
              this._prepareOpen(),
              this.openOn(i._map)),
          this
        );
      },
      onAdd: function (i) {
        (this._zoomAnimated = i._zoomAnimated),
          this._container || this._initLayout(),
          i._fadeAnimated && ht(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          i._fadeAnimated && ht(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (Y(this._container, "leaflet-interactive"),
            this.addInteractiveTarget(this._container));
      },
      onRemove: function (i) {
        i._fadeAnimated
          ? (ht(this._container, 0),
            (this._removeTimeout = setTimeout(
              u(me, void 0, this._container),
              200
            )))
          : me(this._container),
          this.options.interactive &&
            (xe(this._container, "leaflet-interactive"),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (i) {
        return (
          (this._latlng = G(i)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (i) {
        return (this._content = i), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var i = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && ni(this._container), this;
      },
      bringToBack: function () {
        return this._map && ii(this._container), this;
      },
      _prepareOpen: function (i) {
        var o = this._source;
        if (!o._map) return !1;
        if (o instanceof Ht) {
          o = null;
          var l = this._source._layers;
          for (var c in l)
            if (l[c]._map) {
              o = l[c];
              break;
            }
          if (!o) return !1;
          this._source = o;
        }
        if (!i)
          if (o.getCenter) i = o.getCenter();
          else if (o.getLatLng) i = o.getLatLng();
          else if (o.getBounds) i = o.getBounds().getCenter();
          else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(i), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (this._content) {
          var i = this._contentNode,
            o =
              typeof this._content == "function"
                ? this._content(this._source || this)
                : this._content;
          if (typeof o == "string") i.innerHTML = o;
          else {
            for (; i.hasChildNodes(); ) i.removeChild(i.firstChild);
            i.appendChild(o);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var i = this._map.latLngToLayerPoint(this._latlng),
            o = F(this.options.offset),
            l = this._getAnchor();
          this._zoomAnimated
            ? Le(this._container, i.add(l))
            : (o = o.add(i).add(l));
          var c = (this._containerBottom = -o.y),
            h = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + o.x);
          (this._container.style.bottom = c + "px"),
            (this._container.style.left = h + "px");
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    te.include({
      _initOverlay: function (i, o, l, c) {
        var h = o;
        return (
          h instanceof i || (h = new i(c).setContent(o)), l && h.setLatLng(l), h
        );
      },
    }),
      Pt.include({
        _initOverlay: function (i, o, l, c) {
          var h = l;
          return (
            h instanceof i
              ? (E(h, c), (h._source = this))
              : ((h = o && !c ? o : new i(c, this)), h.setContent(l)),
            h
          );
        },
      });
    var xo = It.extend({
        options: {
          pane: "popupPane",
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: "",
        },
        openOn: function (i) {
          return (
            (i = arguments.length ? i : this._source._map),
            !i.hasLayer(this) &&
              i._popup &&
              i._popup.options.autoClose &&
              i.removeLayer(i._popup),
            (i._popup = this),
            It.prototype.openOn.call(this, i)
          );
        },
        onAdd: function (i) {
          It.prototype.onAdd.call(this, i),
            i.fire("popupopen", { popup: this }),
            this._source &&
              (this._source.fire("popupopen", { popup: this }, !0),
              this._source instanceof an || this._source.on("preclick", Mn));
        },
        onRemove: function (i) {
          It.prototype.onRemove.call(this, i),
            i.fire("popupclose", { popup: this }),
            this._source &&
              (this._source.fire("popupclose", { popup: this }, !0),
              this._source instanceof an || this._source.off("preclick", Mn));
        },
        getEvents: function () {
          var i = It.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) &&
              (i.preclick = this.close),
            this.options.keepInView && (i.moveend = this._adjustPan),
            i
          );
        },
        _initLayout: function () {
          var i = "leaflet-popup",
            o = (this._container = se(
              "div",
              i +
                " " +
                (this.options.className || "") +
                " leaflet-zoom-animated"
            )),
            l = (this._wrapper = se("div", i + "-content-wrapper", o));
          if (
            ((this._contentNode = se("div", i + "-content", l)),
            Xi(o),
            za(this._contentNode),
            q(o, "contextmenu", Mn),
            (this._tipContainer = se("div", i + "-tip-container", o)),
            (this._tip = se("div", i + "-tip", this._tipContainer)),
            this.options.closeButton)
          ) {
            var c = (this._closeButton = se("a", i + "-close-button", o));
            c.setAttribute("role", "button"),
              c.setAttribute("aria-label", "Close popup"),
              (c.href = "#close"),
              (c.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              q(
                c,
                "click",
                function (h) {
                  be(h), this.close();
                },
                this
              );
          }
        },
        _updateLayout: function () {
          var i = this._contentNode,
            o = i.style;
          (o.width = ""), (o.whiteSpace = "nowrap");
          var l = i.offsetWidth;
          (l = Math.min(l, this.options.maxWidth)),
            (l = Math.max(l, this.options.minWidth)),
            (o.width = l + 1 + "px"),
            (o.whiteSpace = ""),
            (o.height = "");
          var c = i.offsetHeight,
            h = this.options.maxHeight,
            m = "leaflet-popup-scrolled";
          h && c > h ? ((o.height = h + "px"), Y(i, m)) : xe(i, m),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (i) {
          var o = this._map._latLngToNewLayerPoint(
              this._latlng,
              i.zoom,
              i.center
            ),
            l = this._getAnchor();
          Le(this._container, o.add(l));
        },
        _adjustPan: function () {
          if (this.options.autoPan) {
            if (
              (this._map._panAnim && this._map._panAnim.stop(),
              this._autopanning)
            ) {
              this._autopanning = !1;
              return;
            }
            var i = this._map,
              o = parseInt(qi(this._container, "marginBottom"), 10) || 0,
              l = this._container.offsetHeight + o,
              c = this._containerWidth,
              h = new R(this._containerLeft, -l - this._containerBottom);
            h._add(Rn(this._container));
            var m = i.layerPointToContainerPoint(h),
              S = F(this.options.autoPanPadding),
              C = F(this.options.autoPanPaddingTopLeft || S),
              N = F(this.options.autoPanPaddingBottomRight || S),
              I = i.getSize(),
              $ = 0,
              W = 0;
            m.x + c + N.x > I.x && ($ = m.x + c - I.x + N.x),
              m.x - $ - C.x < 0 && ($ = m.x - C.x),
              m.y + l + N.y > I.y && (W = m.y + l - I.y + N.y),
              m.y - W - C.y < 0 && (W = m.y - C.y),
              ($ || W) &&
                (this.options.keepInView && (this._autopanning = !0),
                i.fire("autopanstart").panBy([$, W]));
          }
        },
        _getAnchor: function () {
          return F(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0]
          );
        },
      }),
      n_ = function (i, o) {
        return new xo(i, o);
      };
    te.mergeOptions({ closePopupOnClick: !0 }),
      te.include({
        openPopup: function (i, o, l) {
          return this._initOverlay(xo, i, o, l).openOn(this), this;
        },
        closePopup: function (i) {
          return (i = arguments.length ? i : this._popup), i && i.close(), this;
        },
      }),
      Pt.include({
        bindPopup: function (i, o) {
          return (
            (this._popup = this._initOverlay(xo, this._popup, i, o)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (i) {
          return (
            this._popup &&
              (this instanceof Ht || (this._popup._source = this),
              this._popup._prepareOpen(i || this._latlng) &&
                this._popup.openOn(this._map)),
            this
          );
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (i) {
          return this._popup && this._popup.setContent(i), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (i) {
          if (!(!this._popup || !this._map)) {
            An(i);
            var o = i.layer || i.target;
            if (this._popup._source === o && !(o instanceof an)) {
              this._map.hasLayer(this._popup)
                ? this.closePopup()
                : this.openPopup(i.latlng);
              return;
            }
            (this._popup._source = o), this.openPopup(i.latlng);
          }
        },
        _movePopup: function (i) {
          this._popup.setLatLng(i.latlng);
        },
        _onKeyPress: function (i) {
          i.originalEvent.keyCode === 13 && this._openPopup(i);
        },
      });
    var So = It.extend({
        options: {
          pane: "tooltipPane",
          offset: [0, 0],
          direction: "auto",
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (i) {
          It.prototype.onAdd.call(this, i),
            this.setOpacity(this.options.opacity),
            i.fire("tooltipopen", { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function (i) {
          It.prototype.onRemove.call(this, i),
            i.fire("tooltipclose", { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function () {
          var i = It.prototype.getEvents.call(this);
          return this.options.permanent || (i.preclick = this.close), i;
        },
        _initLayout: function () {
          var i = "leaflet-tooltip",
            o =
              i +
              " " +
              (this.options.className || "") +
              " leaflet-zoom-" +
              (this._zoomAnimated ? "animated" : "hide");
          (this._contentNode = this._container = se("div", o)),
            this._container.setAttribute("role", "tooltip"),
            this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (i) {
          var o,
            l,
            c = this._map,
            h = this._container,
            m = c.latLngToContainerPoint(c.getCenter()),
            S = c.layerPointToContainerPoint(i),
            C = this.options.direction,
            N = h.offsetWidth,
            I = h.offsetHeight,
            $ = F(this.options.offset),
            W = this._getAnchor();
          C === "top"
            ? ((o = N / 2), (l = I))
            : C === "bottom"
            ? ((o = N / 2), (l = 0))
            : C === "center"
            ? ((o = N / 2), (l = I / 2))
            : C === "right"
            ? ((o = 0), (l = I / 2))
            : C === "left"
            ? ((o = N), (l = I / 2))
            : S.x < m.x
            ? ((C = "right"), (o = 0), (l = I / 2))
            : ((C = "left"), (o = N + ($.x + W.x) * 2), (l = I / 2)),
            (i = i.subtract(F(o, l, !0)).add($).add(W)),
            xe(h, "leaflet-tooltip-right"),
            xe(h, "leaflet-tooltip-left"),
            xe(h, "leaflet-tooltip-top"),
            xe(h, "leaflet-tooltip-bottom"),
            Y(h, "leaflet-tooltip-" + C),
            Le(h, i);
        },
        _updatePosition: function () {
          var i = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(i);
        },
        setOpacity: function (i) {
          (this.options.opacity = i), this._container && ht(this._container, i);
        },
        _animateZoom: function (i) {
          var o = this._map._latLngToNewLayerPoint(
            this._latlng,
            i.zoom,
            i.center
          );
          this._setPosition(o);
        },
        _getAnchor: function () {
          return F(
            this._source &&
              this._source._getTooltipAnchor &&
              !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          );
        },
      }),
      i_ = function (i, o) {
        return new So(i, o);
      };
    te.include({
      openTooltip: function (i, o, l) {
        return this._initOverlay(So, i, o, l).openOn(this), this;
      },
      closeTooltip: function (i) {
        return i.close(), this;
      },
    }),
      Pt.include({
        bindTooltip: function (i, o) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(So, this._tooltip, i, o)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (i) {
          if (!(!i && this._tooltipHandlersAdded)) {
            var o = i ? "off" : "on",
              l = { remove: this.closeTooltip, move: this._moveTooltip };
            this._tooltip.options.permanent
              ? (l.add = this._openTooltip)
              : ((l.mouseover = this._openTooltip),
                (l.mouseout = this.closeTooltip),
                (l.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (l.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (l.mousemove = this._moveTooltip),
              this[o](l),
              (this._tooltipHandlersAdded = !i);
          }
        },
        openTooltip: function (i) {
          return (
            this._tooltip &&
              (this instanceof Ht || (this._tooltip._source = this),
              this._tooltip._prepareOpen(i) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (i) {
          return this._tooltip && this._tooltip.setContent(i), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer &&
              this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (i) {
          var o = typeof i.getElement == "function" && i.getElement();
          o &&
            (q(
              o,
              "focus",
              function () {
                (this._tooltip._source = i), this.openTooltip();
              },
              this
            ),
            q(o, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (i) {
          var o = typeof i.getElement == "function" && i.getElement();
          o && o.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function (i) {
          if (!(!this._tooltip || !this._map)) {
            if (
              this._map.dragging &&
              this._map.dragging.moving() &&
              !this._openOnceFlag
            ) {
              this._openOnceFlag = !0;
              var o = this;
              this._map.once("moveend", function () {
                (o._openOnceFlag = !1), o._openTooltip(i);
              });
              return;
            }
            (this._tooltip._source = i.layer || i.target),
              this.openTooltip(
                this._tooltip.options.sticky ? i.latlng : void 0
              );
          }
        },
        _moveTooltip: function (i) {
          var o = i.latlng,
            l,
            c;
          this._tooltip.options.sticky &&
            i.originalEvent &&
            ((l = this._map.mouseEventToContainerPoint(i.originalEvent)),
            (c = this._map.containerPointToLayerPoint(l)),
            (o = this._map.layerPointToLatLng(c))),
            this._tooltip.setLatLng(o);
        },
      });
    var Cd = oi.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon",
      },
      createIcon: function (i) {
        var o = i && i.tagName === "DIV" ? i : document.createElement("div"),
          l = this.options;
        if (
          (l.html instanceof Element
            ? (ao(o), o.appendChild(l.html))
            : (o.innerHTML = l.html !== !1 ? l.html : ""),
          l.bgPos)
        ) {
          var c = F(l.bgPos);
          o.style.backgroundPosition = -c.x + "px " + -c.y + "px";
        }
        return this._setIconStyles(o, "icon"), o;
      },
      createShadow: function () {
        return null;
      },
    });
    function r_(i) {
      return new Cd(i);
    }
    oi.Default = nr;
    var ir = Pt.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: H.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (i) {
        E(this, i);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView();
      },
      beforeAdd: function (i) {
        i._addZoomLimit(this);
      },
      onRemove: function (i) {
        this._removeAllTiles(),
          me(this._container),
          i._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return (
          this._map && (ni(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (ii(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (i) {
        return (this.options.opacity = i), this._updateOpacity(), this;
      },
      setZIndex: function (i) {
        return (this.options.zIndex = i), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var i = this._clampZoom(this._map.getZoom());
          i !== this._tileZoom && ((this._tileZoom = i), this._updateLevels()),
            this._update();
        }
        return this;
      },
      getEvents: function () {
        var i = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = p(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (i.move = this._onMove)),
          this._zoomAnimated && (i.zoomanim = this._animateZoom),
          i
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var i = this.options.tileSize;
        return i instanceof R ? i : new R(i, i);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (i) {
        for (
          var o = this.getPane().children,
            l = -i(-1 / 0, 1 / 0),
            c = 0,
            h = o.length,
            m;
          c < h;
          c++
        )
          (m = o[c].style.zIndex),
            o[c] !== this._container && m && (l = i(l, +m));
        isFinite(l) &&
          ((this.options.zIndex = l + i(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !H.ielt9) {
          ht(this._container, this.options.opacity);
          var i = +new Date(),
            o = !1,
            l = !1;
          for (var c in this._tiles) {
            var h = this._tiles[c];
            if (!(!h.current || !h.loaded)) {
              var m = Math.min(1, (i - h.loaded) / 200);
              ht(h.el, m),
                m < 1
                  ? (o = !0)
                  : (h.active ? (l = !0) : this._onOpaqueTile(h),
                    (h.active = !0));
            }
          }
          l && !this._noPrune && this._pruneTiles(),
            o &&
              (Te(this._fadeFrame),
              (this._fadeFrame = re(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: v,
      _initContainer: function () {
        this._container ||
          ((this._container = se(
            "div",
            "leaflet-layer " + (this.options.className || "")
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var i = this._tileZoom,
          o = this.options.maxZoom;
        if (i !== void 0) {
          for (var l in this._levels)
            (l = Number(l)),
              this._levels[l].el.children.length || l === i
                ? ((this._levels[l].el.style.zIndex = o - Math.abs(i - l)),
                  this._onUpdateLevel(l))
                : (me(this._levels[l].el),
                  this._removeTilesAtZoom(l),
                  this._onRemoveLevel(l),
                  delete this._levels[l]);
          var c = this._levels[i],
            h = this._map;
          return (
            c ||
              ((c = this._levels[i] = {}),
              (c.el = se(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container
              )),
              (c.el.style.zIndex = o),
              (c.origin = h
                .project(h.unproject(h.getPixelOrigin()), i)
                .round()),
              (c.zoom = i),
              this._setZoomTransform(c, h.getCenter(), h.getZoom()),
              v(c.el.offsetWidth),
              this._onCreateLevel(c)),
            (this._level = c),
            c
          );
        }
      },
      _onUpdateLevel: v,
      _onRemoveLevel: v,
      _onCreateLevel: v,
      _pruneTiles: function () {
        if (this._map) {
          var i,
            o,
            l = this._map.getZoom();
          if (l > this.options.maxZoom || l < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (i in this._tiles) (o = this._tiles[i]), (o.retain = o.current);
          for (i in this._tiles)
            if (((o = this._tiles[i]), o.current && !o.active)) {
              var c = o.coords;
              this._retainParent(c.x, c.y, c.z, c.z - 5) ||
                this._retainChildren(c.x, c.y, c.z, c.z + 2);
            }
          for (i in this._tiles) this._tiles[i].retain || this._removeTile(i);
        }
      },
      _removeTilesAtZoom: function (i) {
        for (var o in this._tiles)
          this._tiles[o].coords.z === i && this._removeTile(o);
      },
      _removeAllTiles: function () {
        for (var i in this._tiles) this._removeTile(i);
      },
      _invalidateAll: function () {
        for (var i in this._levels)
          me(this._levels[i].el),
            this._onRemoveLevel(Number(i)),
            delete this._levels[i];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (i, o, l, c) {
        var h = Math.floor(i / 2),
          m = Math.floor(o / 2),
          S = l - 1,
          C = new R(+h, +m);
        C.z = +S;
        var N = this._tileCoordsToKey(C),
          I = this._tiles[N];
        return I && I.active
          ? ((I.retain = !0), !0)
          : (I && I.loaded && (I.retain = !0),
            S > c ? this._retainParent(h, m, S, c) : !1);
      },
      _retainChildren: function (i, o, l, c) {
        for (var h = 2 * i; h < 2 * i + 2; h++)
          for (var m = 2 * o; m < 2 * o + 2; m++) {
            var S = new R(h, m);
            S.z = l + 1;
            var C = this._tileCoordsToKey(S),
              N = this._tiles[C];
            if (N && N.active) {
              N.retain = !0;
              continue;
            } else N && N.loaded && (N.retain = !0);
            l + 1 < c && this._retainChildren(h, m, l + 1, c);
          }
      },
      _resetView: function (i) {
        var o = i && (i.pinch || i.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), o, o);
      },
      _animateZoom: function (i) {
        this._setView(i.center, i.zoom, !0, i.noUpdate);
      },
      _clampZoom: function (i) {
        var o = this.options;
        return o.minNativeZoom !== void 0 && i < o.minNativeZoom
          ? o.minNativeZoom
          : o.maxNativeZoom !== void 0 && o.maxNativeZoom < i
          ? o.maxNativeZoom
          : i;
      },
      _setView: function (i, o, l, c) {
        var h = Math.round(o);
        (this.options.maxZoom !== void 0 && h > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && h < this.options.minZoom)
          ? (h = void 0)
          : (h = this._clampZoom(h));
        var m = this.options.updateWhenZooming && h !== this._tileZoom;
        (!c || m) &&
          ((this._tileZoom = h),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          h !== void 0 && this._update(i),
          l || this._pruneTiles(),
          (this._noPrune = !!l)),
          this._setZoomTransforms(i, o);
      },
      _setZoomTransforms: function (i, o) {
        for (var l in this._levels)
          this._setZoomTransform(this._levels[l], i, o);
      },
      _setZoomTransform: function (i, o, l) {
        var c = this._map.getZoomScale(l, i.zoom),
          h = i.origin
            .multiplyBy(c)
            .subtract(this._map._getNewPixelOrigin(o, l))
            .round();
        H.any3d ? zn(i.el, h, c) : Le(i.el, h);
      },
      _resetGrid: function () {
        var i = this._map,
          o = i.options.crs,
          l = (this._tileSize = this.getTileSize()),
          c = this._tileZoom,
          h = this._map.getPixelWorldBounds(this._tileZoom);
        h && (this._globalTileRange = this._pxBoundsToTileRange(h)),
          (this._wrapX = o.wrapLng &&
            !this.options.noWrap && [
              Math.floor(i.project([0, o.wrapLng[0]], c).x / l.x),
              Math.ceil(i.project([0, o.wrapLng[1]], c).x / l.y),
            ]),
          (this._wrapY = o.wrapLat &&
            !this.options.noWrap && [
              Math.floor(i.project([o.wrapLat[0], 0], c).y / l.x),
              Math.ceil(i.project([o.wrapLat[1], 0], c).y / l.y),
            ]);
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (i) {
        var o = this._map,
          l = o._animatingZoom
            ? Math.max(o._animateToZoom, o.getZoom())
            : o.getZoom(),
          c = o.getZoomScale(l, this._tileZoom),
          h = o.project(i, this._tileZoom).floor(),
          m = o.getSize().divideBy(c * 2);
        return new K(h.subtract(m), h.add(m));
      },
      _update: function (i) {
        var o = this._map;
        if (o) {
          var l = this._clampZoom(o.getZoom());
          if (
            (i === void 0 && (i = o.getCenter()), this._tileZoom !== void 0)
          ) {
            var c = this._getTiledPixelBounds(i),
              h = this._pxBoundsToTileRange(c),
              m = h.getCenter(),
              S = [],
              C = this.options.keepBuffer,
              N = new K(
                h.getBottomLeft().subtract([C, -C]),
                h.getTopRight().add([C, -C])
              );
            if (
              !(
                isFinite(h.min.x) &&
                isFinite(h.min.y) &&
                isFinite(h.max.x) &&
                isFinite(h.max.y)
              )
            )
              throw new Error("Attempted to load an infinite number of tiles");
            for (var I in this._tiles) {
              var $ = this._tiles[I].coords;
              ($.z !== this._tileZoom || !N.contains(new R($.x, $.y))) &&
                (this._tiles[I].current = !1);
            }
            if (Math.abs(l - this._tileZoom) > 1) {
              this._setView(i, l);
              return;
            }
            for (var W = h.min.y; W <= h.max.y; W++)
              for (var X = h.min.x; X <= h.max.x; X++) {
                var Ve = new R(X, W);
                if (((Ve.z = this._tileZoom), !!this._isValidTile(Ve))) {
                  var Me = this._tiles[this._tileCoordsToKey(Ve)];
                  Me ? (Me.current = !0) : S.push(Ve);
                }
              }
            if (
              (S.sort(function (Qe, ui) {
                return Qe.distanceTo(m) - ui.distanceTo(m);
              }),
              S.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              var mt = document.createDocumentFragment();
              for (X = 0; X < S.length; X++) this._addTile(S[X], mt);
              this._level.el.appendChild(mt);
            }
          }
        }
      },
      _isValidTile: function (i) {
        var o = this._map.options.crs;
        if (!o.infinite) {
          var l = this._globalTileRange;
          if (
            (!o.wrapLng && (i.x < l.min.x || i.x > l.max.x)) ||
            (!o.wrapLat && (i.y < l.min.y || i.y > l.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var c = this._tileCoordsToBounds(i);
        return ue(this.options.bounds).overlaps(c);
      },
      _keyToBounds: function (i) {
        return this._tileCoordsToBounds(this._keyToTileCoords(i));
      },
      _tileCoordsToNwSe: function (i) {
        var o = this._map,
          l = this.getTileSize(),
          c = i.scaleBy(l),
          h = c.add(l),
          m = o.unproject(c, i.z),
          S = o.unproject(h, i.z);
        return [m, S];
      },
      _tileCoordsToBounds: function (i) {
        var o = this._tileCoordsToNwSe(i),
          l = new Oe(o[0], o[1]);
        return this.options.noWrap || (l = this._map.wrapLatLngBounds(l)), l;
      },
      _tileCoordsToKey: function (i) {
        return i.x + ":" + i.y + ":" + i.z;
      },
      _keyToTileCoords: function (i) {
        var o = i.split(":"),
          l = new R(+o[0], +o[1]);
        return (l.z = +o[2]), l;
      },
      _removeTile: function (i) {
        var o = this._tiles[i];
        o &&
          (me(o.el),
          delete this._tiles[i],
          this.fire("tileunload", {
            tile: o.el,
            coords: this._keyToTileCoords(i),
          }));
      },
      _initTile: function (i) {
        Y(i, "leaflet-tile");
        var o = this.getTileSize();
        (i.style.width = o.x + "px"),
          (i.style.height = o.y + "px"),
          (i.onselectstart = v),
          (i.onmousemove = v),
          H.ielt9 && this.options.opacity < 1 && ht(i, this.options.opacity);
      },
      _addTile: function (i, o) {
        var l = this._getTilePos(i),
          c = this._tileCoordsToKey(i),
          h = this.createTile(this._wrapCoords(i), u(this._tileReady, this, i));
        this._initTile(h),
          this.createTile.length < 2 &&
            re(u(this._tileReady, this, i, null, h)),
          Le(h, l),
          (this._tiles[c] = { el: h, coords: i, current: !0 }),
          o.appendChild(h),
          this.fire("tileloadstart", { tile: h, coords: i });
      },
      _tileReady: function (i, o, l) {
        o && this.fire("tileerror", { error: o, tile: l, coords: i });
        var c = this._tileCoordsToKey(i);
        (l = this._tiles[c]),
          l &&
            ((l.loaded = +new Date()),
            this._map._fadeAnimated
              ? (ht(l.el, 0),
                Te(this._fadeFrame),
                (this._fadeFrame = re(this._updateOpacity, this)))
              : ((l.active = !0), this._pruneTiles()),
            o ||
              (Y(l.el, "leaflet-tile-loaded"),
              this.fire("tileload", { tile: l.el, coords: i })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire("load"),
              H.ielt9 || !this._map._fadeAnimated
                ? re(this._pruneTiles, this)
                : setTimeout(u(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (i) {
        return i.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (i) {
        var o = new R(
          this._wrapX ? g(i.x, this._wrapX) : i.x,
          this._wrapY ? g(i.y, this._wrapY) : i.y
        );
        return (o.z = i.z), o;
      },
      _pxBoundsToTileRange: function (i) {
        var o = this.getTileSize();
        return new K(
          i.min.unscaleBy(o).floor(),
          i.max.unscaleBy(o).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var i in this._tiles) if (!this._tiles[i].loaded) return !1;
        return !0;
      },
    });
    function o_(i) {
      return new ir(i);
    }
    var li = ir.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (i, o) {
        (this._url = i),
          (o = E(this, o)),
          o.detectRetina && H.retina && o.maxZoom > 0
            ? ((o.tileSize = Math.floor(o.tileSize / 2)),
              o.zoomReverse
                ? (o.zoomOffset--,
                  (o.minZoom = Math.min(o.maxZoom, o.minZoom + 1)))
                : (o.zoomOffset++,
                  (o.maxZoom = Math.max(o.minZoom, o.maxZoom - 1))),
              (o.minZoom = Math.max(0, o.minZoom)))
            : o.zoomReverse
            ? (o.minZoom = Math.min(o.maxZoom, o.minZoom))
            : (o.maxZoom = Math.max(o.minZoom, o.maxZoom)),
          typeof o.subdomains == "string" &&
            (o.subdomains = o.subdomains.split("")),
          this.on("tileunload", this._onTileRemove);
      },
      setUrl: function (i, o) {
        return (
          this._url === i && o === void 0 && (o = !0),
          (this._url = i),
          o || this.redraw(),
          this
        );
      },
      createTile: function (i, o) {
        var l = document.createElement("img");
        return (
          q(l, "load", u(this._tileOnLoad, this, o, l)),
          q(l, "error", u(this._tileOnError, this, o, l)),
          (this.options.crossOrigin || this.options.crossOrigin === "") &&
            (l.crossOrigin =
              this.options.crossOrigin === !0 ? "" : this.options.crossOrigin),
          typeof this.options.referrerPolicy == "string" &&
            (l.referrerPolicy = this.options.referrerPolicy),
          (l.alt = ""),
          (l.src = this.getTileUrl(i)),
          l
        );
      },
      getTileUrl: function (i) {
        var o = {
          r: H.retina ? "@2x" : "",
          s: this._getSubdomain(i),
          x: i.x,
          y: i.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var l = this._globalTileRange.max.y - i.y;
          this.options.tms && (o.y = l), (o["-y"] = l);
        }
        return y(this._url, s(o, this.options));
      },
      _tileOnLoad: function (i, o) {
        H.ielt9 ? setTimeout(u(i, this, null, o), 0) : i(null, o);
      },
      _tileOnError: function (i, o, l) {
        var c = this.options.errorTileUrl;
        c && o.getAttribute("src") !== c && (o.src = c), i(l, o);
      },
      _onTileRemove: function (i) {
        i.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var i = this._tileZoom,
          o = this.options.maxZoom,
          l = this.options.zoomReverse,
          c = this.options.zoomOffset;
        return l && (i = o - i), i + c;
      },
      _getSubdomain: function (i) {
        var o = Math.abs(i.x + i.y) % this.options.subdomains.length;
        return this.options.subdomains[o];
      },
      _abortLoading: function () {
        var i, o;
        for (i in this._tiles)
          if (
            this._tiles[i].coords.z !== this._tileZoom &&
            ((o = this._tiles[i].el),
            (o.onload = v),
            (o.onerror = v),
            !o.complete)
          ) {
            o.src = M;
            var l = this._tiles[i].coords;
            me(o),
              delete this._tiles[i],
              this.fire("tileabort", { tile: o, coords: l });
          }
      },
      _removeTile: function (i) {
        var o = this._tiles[i];
        if (o)
          return (
            o.el.setAttribute("src", M), ir.prototype._removeTile.call(this, i)
          );
      },
      _tileReady: function (i, o, l) {
        if (!(!this._map || (l && l.getAttribute("src") === M)))
          return ir.prototype._tileReady.call(this, i, o, l);
      },
    });
    function Td(i, o) {
      return new li(i, o);
    }
    var Od = li.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (i, o) {
        this._url = i;
        var l = s({}, this.defaultWmsParams);
        for (var c in o) c in this.options || (l[c] = o[c]);
        o = E(this, o);
        var h = o.detectRetina && H.retina ? 2 : 1,
          m = this.getTileSize();
        (l.width = m.x * h), (l.height = m.y * h), (this.wmsParams = l);
      },
      onAdd: function (i) {
        (this._crs = this.options.crs || i.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var o = this._wmsVersion >= 1.3 ? "crs" : "srs";
        (this.wmsParams[o] = this._crs.code), li.prototype.onAdd.call(this, i);
      },
      getTileUrl: function (i) {
        var o = this._tileCoordsToNwSe(i),
          l = this._crs,
          c = ne(l.project(o[0]), l.project(o[1])),
          h = c.min,
          m = c.max,
          S = (
            this._wmsVersion >= 1.3 && this._crs === xd
              ? [h.y, h.x, m.y, m.x]
              : [h.x, h.y, m.x, m.y]
          ).join(","),
          C = li.prototype.getTileUrl.call(this, i);
        return (
          C +
          T(this.wmsParams, C, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          S
        );
      },
      setParams: function (i, o) {
        return s(this.wmsParams, i), o || this.redraw(), this;
      },
    });
    function s_(i, o) {
      return new Od(i, o);
    }
    (li.WMS = Od), (Td.wms = s_);
    var Kt = Pt.extend({
        options: { padding: 0.1 },
        initialize: function (i) {
          E(this, i), f(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            Y(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this);
        },
        onRemove: function () {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var i = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return this._zoomAnimated && (i.zoomanim = this._onAnimZoom), i;
        },
        _onAnimZoom: function (i) {
          this._updateTransform(i.center, i.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (i, o) {
          var l = this._map.getZoomScale(o, this._zoom),
            c = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            h = this._map.project(this._center, o),
            m = c
              .multiplyBy(-l)
              .add(h)
              .subtract(this._map._getNewPixelOrigin(i, o));
          H.any3d ? zn(this._container, m, l) : Le(this._container, m);
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var i in this._layers) this._layers[i]._reset();
        },
        _onZoomEnd: function () {
          for (var i in this._layers) this._layers[i]._project();
        },
        _updatePaths: function () {
          for (var i in this._layers) this._layers[i]._update();
        },
        _update: function () {
          var i = this.options.padding,
            o = this._map.getSize(),
            l = this._map.containerPointToLayerPoint(o.multiplyBy(-i)).round();
          (this._bounds = new K(l, l.add(o.multiplyBy(1 + i * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        },
      }),
      Nd = Kt.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var i = Kt.prototype.getEvents.call(this);
          return (i.viewprereset = this._onViewPreReset), i;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          Kt.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var i = (this._container = document.createElement("canvas"));
          q(i, "mousemove", this._onMouseMove, this),
            q(
              i,
              "click dblclick mousedown mouseup contextmenu",
              this._onClick,
              this
            ),
            q(i, "mouseout", this._handleMouseOut, this),
            (i._leaflet_disable_events = !0),
            (this._ctx = i.getContext("2d"));
        },
        _destroyContainer: function () {
          Te(this._redrawRequest),
            delete this._ctx,
            me(this._container),
            ce(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var i;
            this._redrawBounds = null;
            for (var o in this._layers) (i = this._layers[o]), i._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            Kt.prototype._update.call(this);
            var i = this._bounds,
              o = this._container,
              l = i.getSize(),
              c = H.retina ? 2 : 1;
            Le(o, i.min),
              (o.width = c * l.x),
              (o.height = c * l.y),
              (o.style.width = l.x + "px"),
              (o.style.height = l.y + "px"),
              H.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-i.min.x, -i.min.y),
              this.fire("update");
          }
        },
        _reset: function () {
          Kt.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (i) {
          this._updateDashArray(i), (this._layers[f(i)] = i);
          var o = (i._order = { layer: i, prev: this._drawLast, next: null });
          this._drawLast && (this._drawLast.next = o),
            (this._drawLast = o),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (i) {
          this._requestRedraw(i);
        },
        _removePath: function (i) {
          var o = i._order,
            l = o.next,
            c = o.prev;
          l ? (l.prev = c) : (this._drawLast = c),
            c ? (c.next = l) : (this._drawFirst = l),
            delete i._order,
            delete this._layers[f(i)],
            this._requestRedraw(i);
        },
        _updatePath: function (i) {
          this._extendRedrawBounds(i),
            i._project(),
            i._update(),
            this._requestRedraw(i);
        },
        _updateStyle: function (i) {
          this._updateDashArray(i), this._requestRedraw(i);
        },
        _updateDashArray: function (i) {
          if (typeof i.options.dashArray == "string") {
            var o = i.options.dashArray.split(/[, ]+/),
              l = [],
              c,
              h;
            for (h = 0; h < o.length; h++) {
              if (((c = Number(o[h])), isNaN(c))) return;
              l.push(c);
            }
            i.options._dashArray = l;
          } else i.options._dashArray = i.options.dashArray;
        },
        _requestRedraw: function (i) {
          this._map &&
            (this._extendRedrawBounds(i),
            (this._redrawRequest =
              this._redrawRequest || re(this._redraw, this)));
        },
        _extendRedrawBounds: function (i) {
          if (i._pxBounds) {
            var o = (i.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new K()),
              this._redrawBounds.extend(i._pxBounds.min.subtract([o, o])),
              this._redrawBounds.extend(i._pxBounds.max.add([o, o]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var i = this._redrawBounds;
          if (i) {
            var o = i.getSize();
            this._ctx.clearRect(i.min.x, i.min.y, o.x, o.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(
                0,
                0,
                this._container.width,
                this._container.height
              ),
              this._ctx.restore();
        },
        _draw: function () {
          var i,
            o = this._redrawBounds;
          if ((this._ctx.save(), o)) {
            var l = o.getSize();
            this._ctx.beginPath(),
              this._ctx.rect(o.min.x, o.min.y, l.x, l.y),
              this._ctx.clip();
          }
          this._drawing = !0;
          for (var c = this._drawFirst; c; c = c.next)
            (i = c.layer),
              (!o || (i._pxBounds && i._pxBounds.intersects(o))) &&
                i._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (i, o) {
          if (this._drawing) {
            var l,
              c,
              h,
              m,
              S = i._parts,
              C = S.length,
              N = this._ctx;
            if (C) {
              for (N.beginPath(), l = 0; l < C; l++) {
                for (c = 0, h = S[l].length; c < h; c++)
                  (m = S[l][c]), N[c ? "lineTo" : "moveTo"](m.x, m.y);
                o && N.closePath();
              }
              this._fillStroke(N, i);
            }
          }
        },
        _updateCircle: function (i) {
          if (!(!this._drawing || i._empty())) {
            var o = i._point,
              l = this._ctx,
              c = Math.max(Math.round(i._radius), 1),
              h = (Math.max(Math.round(i._radiusY), 1) || c) / c;
            h !== 1 && (l.save(), l.scale(1, h)),
              l.beginPath(),
              l.arc(o.x, o.y / h, c, 0, Math.PI * 2, !1),
              h !== 1 && l.restore(),
              this._fillStroke(l, i);
          }
        },
        _fillStroke: function (i, o) {
          var l = o.options;
          l.fill &&
            ((i.globalAlpha = l.fillOpacity),
            (i.fillStyle = l.fillColor || l.color),
            i.fill(l.fillRule || "evenodd")),
            l.stroke &&
              l.weight !== 0 &&
              (i.setLineDash &&
                i.setLineDash((o.options && o.options._dashArray) || []),
              (i.globalAlpha = l.opacity),
              (i.lineWidth = l.weight),
              (i.strokeStyle = l.color),
              (i.lineCap = l.lineCap),
              (i.lineJoin = l.lineJoin),
              i.stroke());
        },
        _onClick: function (i) {
          for (
            var o = this._map.mouseEventToLayerPoint(i),
              l,
              c,
              h = this._drawFirst;
            h;
            h = h.next
          )
            (l = h.layer),
              l.options.interactive &&
                l._containsPoint(o) &&
                (!(i.type === "click" || i.type === "preclick") ||
                  !this._map._draggableMoved(l)) &&
                (c = l);
          this._fireEvent(c ? [c] : !1, i);
        },
        _onMouseMove: function (i) {
          if (
            !(
              !this._map ||
              this._map.dragging.moving() ||
              this._map._animatingZoom
            )
          ) {
            var o = this._map.mouseEventToLayerPoint(i);
            this._handleMouseHover(i, o);
          }
        },
        _handleMouseOut: function (i) {
          var o = this._hoveredLayer;
          o &&
            (xe(this._container, "leaflet-interactive"),
            this._fireEvent([o], i, "mouseout"),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (i, o) {
          if (!this._mouseHoverThrottled) {
            for (var l, c, h = this._drawFirst; h; h = h.next)
              (l = h.layer),
                l.options.interactive && l._containsPoint(o) && (c = l);
            c !== this._hoveredLayer &&
              (this._handleMouseOut(i),
              c &&
                (Y(this._container, "leaflet-interactive"),
                this._fireEvent([c], i, "mouseover"),
                (this._hoveredLayer = c))),
              this._fireEvent(
                this._hoveredLayer ? [this._hoveredLayer] : !1,
                i
              ),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                u(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32
              );
          }
        },
        _fireEvent: function (i, o, l) {
          this._map._fireDOMEvent(o, l || o.type, i);
        },
        _bringToFront: function (i) {
          var o = i._order;
          if (o) {
            var l = o.next,
              c = o.prev;
            if (l) l.prev = c;
            else return;
            c ? (c.next = l) : l && (this._drawFirst = l),
              (o.prev = this._drawLast),
              (this._drawLast.next = o),
              (o.next = null),
              (this._drawLast = o),
              this._requestRedraw(i);
          }
        },
        _bringToBack: function (i) {
          var o = i._order;
          if (o) {
            var l = o.next,
              c = o.prev;
            if (c) c.next = l;
            else return;
            l ? (l.prev = c) : c && (this._drawLast = c),
              (o.prev = null),
              (o.next = this._drawFirst),
              (this._drawFirst.prev = o),
              (this._drawFirst = o),
              this._requestRedraw(i);
          }
        },
      });
    function zd(i) {
      return H.canvas ? new Nd(i) : null;
    }
    var rr = (function () {
        try {
          return (
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function (i) {
              return document.createElement("<lvml:" + i + ' class="lvml">');
            }
          );
        } catch {}
        return function (i) {
          return document.createElement(
            "<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      })(),
      a_ = {
        _initContainer: function () {
          this._container = se("div", "leaflet-vml-container");
        },
        _update: function () {
          this._map._animatingZoom ||
            (Kt.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function (i) {
          var o = (i._container = rr("shape"));
          Y(o, "leaflet-vml-shape " + (this.options.className || "")),
            (o.coordsize = "1 1"),
            (i._path = rr("path")),
            o.appendChild(i._path),
            this._updateStyle(i),
            (this._layers[f(i)] = i);
        },
        _addPath: function (i) {
          var o = i._container;
          this._container.appendChild(o),
            i.options.interactive && i.addInteractiveTarget(o);
        },
        _removePath: function (i) {
          var o = i._container;
          me(o), i.removeInteractiveTarget(o), delete this._layers[f(i)];
        },
        _updateStyle: function (i) {
          var o = i._stroke,
            l = i._fill,
            c = i.options,
            h = i._container;
          (h.stroked = !!c.stroke),
            (h.filled = !!c.fill),
            c.stroke
              ? (o || (o = i._stroke = rr("stroke")),
                h.appendChild(o),
                (o.weight = c.weight + "px"),
                (o.color = c.color),
                (o.opacity = c.opacity),
                c.dashArray
                  ? (o.dashStyle = x(c.dashArray)
                      ? c.dashArray.join(" ")
                      : c.dashArray.replace(/( *, *)/g, " "))
                  : (o.dashStyle = ""),
                (o.endcap = c.lineCap.replace("butt", "flat")),
                (o.joinstyle = c.lineJoin))
              : o && (h.removeChild(o), (i._stroke = null)),
            c.fill
              ? (l || (l = i._fill = rr("fill")),
                h.appendChild(l),
                (l.color = c.fillColor || c.color),
                (l.opacity = c.fillOpacity))
              : l && (h.removeChild(l), (i._fill = null));
        },
        _updateCircle: function (i) {
          var o = i._point.round(),
            l = Math.round(i._radius),
            c = Math.round(i._radiusY || l);
          this._setPath(
            i,
            i._empty()
              ? "M0 0"
              : "AL " +
                  o.x +
                  "," +
                  o.y +
                  " " +
                  l +
                  "," +
                  c +
                  " 0," +
                  65535 * 360
          );
        },
        _setPath: function (i, o) {
          i._path.v = o;
        },
        _bringToFront: function (i) {
          ni(i._container);
        },
        _bringToBack: function (i) {
          ii(i._container);
        },
      },
      Po = H.vml ? rr : Ic,
      or = Kt.extend({
        _initContainer: function () {
          (this._container = Po("svg")),
            this._container.setAttribute("pointer-events", "none"),
            (this._rootGroup = Po("g")),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          me(this._container),
            ce(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            Kt.prototype._update.call(this);
            var i = this._bounds,
              o = i.getSize(),
              l = this._container;
            (!this._svgSize || !this._svgSize.equals(o)) &&
              ((this._svgSize = o),
              l.setAttribute("width", o.x),
              l.setAttribute("height", o.y)),
              Le(l, i.min),
              l.setAttribute("viewBox", [i.min.x, i.min.y, o.x, o.y].join(" ")),
              this.fire("update");
          }
        },
        _initPath: function (i) {
          var o = (i._path = Po("path"));
          i.options.className && Y(o, i.options.className),
            i.options.interactive && Y(o, "leaflet-interactive"),
            this._updateStyle(i),
            (this._layers[f(i)] = i);
        },
        _addPath: function (i) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(i._path),
            i.addInteractiveTarget(i._path);
        },
        _removePath: function (i) {
          me(i._path),
            i.removeInteractiveTarget(i._path),
            delete this._layers[f(i)];
        },
        _updatePath: function (i) {
          i._project(), i._update();
        },
        _updateStyle: function (i) {
          var o = i._path,
            l = i.options;
          o &&
            (l.stroke
              ? (o.setAttribute("stroke", l.color),
                o.setAttribute("stroke-opacity", l.opacity),
                o.setAttribute("stroke-width", l.weight),
                o.setAttribute("stroke-linecap", l.lineCap),
                o.setAttribute("stroke-linejoin", l.lineJoin),
                l.dashArray
                  ? o.setAttribute("stroke-dasharray", l.dashArray)
                  : o.removeAttribute("stroke-dasharray"),
                l.dashOffset
                  ? o.setAttribute("stroke-dashoffset", l.dashOffset)
                  : o.removeAttribute("stroke-dashoffset"))
              : o.setAttribute("stroke", "none"),
            l.fill
              ? (o.setAttribute("fill", l.fillColor || l.color),
                o.setAttribute("fill-opacity", l.fillOpacity),
                o.setAttribute("fill-rule", l.fillRule || "evenodd"))
              : o.setAttribute("fill", "none"));
        },
        _updatePoly: function (i, o) {
          this._setPath(i, bc(i._parts, o));
        },
        _updateCircle: function (i) {
          var o = i._point,
            l = Math.max(Math.round(i._radius), 1),
            c = Math.max(Math.round(i._radiusY), 1) || l,
            h = "a" + l + "," + c + " 0 1,0 ",
            m = i._empty()
              ? "M0 0"
              : "M" +
                (o.x - l) +
                "," +
                o.y +
                h +
                l * 2 +
                ",0 " +
                h +
                -l * 2 +
                ",0 ";
          this._setPath(i, m);
        },
        _setPath: function (i, o) {
          i._path.setAttribute("d", o);
        },
        _bringToFront: function (i) {
          ni(i._path);
        },
        _bringToBack: function (i) {
          ii(i._path);
        },
      });
    H.vml && or.include(a_);
    function Rd(i) {
      return H.svg || H.vml ? new or(i) : null;
    }
    te.include({
      getRenderer: function (i) {
        var o =
          i.options.renderer ||
          this._getPaneRenderer(i.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          o || (o = this._renderer = this._createRenderer()),
          this.hasLayer(o) || this.addLayer(o),
          o
        );
      },
      _getPaneRenderer: function (i) {
        if (i === "overlayPane" || i === void 0) return !1;
        var o = this._paneRenderers[i];
        return (
          o === void 0 &&
            ((o = this._createRenderer({ pane: i })),
            (this._paneRenderers[i] = o)),
          o
        );
      },
      _createRenderer: function (i) {
        return (this.options.preferCanvas && zd(i)) || Rd(i);
      },
    });
    var Md = si.extend({
      initialize: function (i, o) {
        si.prototype.initialize.call(this, this._boundsToLatLngs(i), o);
      },
      setBounds: function (i) {
        return this.setLatLngs(this._boundsToLatLngs(i));
      },
      _boundsToLatLngs: function (i) {
        return (
          (i = ue(i)),
          [
            i.getSouthWest(),
            i.getNorthWest(),
            i.getNorthEast(),
            i.getSouthEast(),
          ]
        );
      },
    });
    function l_(i, o) {
      return new Md(i, o);
    }
    (or.create = Po),
      (or.pointsToPath = bc),
      (Wt.geometryToLayer = go),
      (Wt.coordsToLatLng = ja),
      (Wt.coordsToLatLngs = vo),
      (Wt.latLngToCoords = $a),
      (Wt.latLngsToCoords = _o),
      (Wt.getFeature = ai),
      (Wt.asFeature = yo),
      te.mergeOptions({ boxZoom: !0 });
    var Ad = At.extend({
      initialize: function (i) {
        (this._map = i),
          (this._container = i._container),
          (this._pane = i._panes.overlayPane),
          (this._resetStateTimeout = 0),
          i.on("unload", this._destroy, this);
      },
      addHooks: function () {
        q(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function () {
        ce(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        me(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout),
          (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (i) {
        if (!i.shiftKey || (i.which !== 1 && i.button !== 1)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          Ji(),
          Pa(),
          (this._startPoint = this._map.mouseEventToContainerPoint(i)),
          q(
            document,
            {
              contextmenu: An,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseMove: function (i) {
        this._moved ||
          ((this._moved = !0),
          (this._box = se("div", "leaflet-zoom-box", this._container)),
          Y(this._container, "leaflet-crosshair"),
          this._map.fire("boxzoomstart")),
          (this._point = this._map.mouseEventToContainerPoint(i));
        var o = new K(this._point, this._startPoint),
          l = o.getSize();
        Le(this._box, o.min),
          (this._box.style.width = l.x + "px"),
          (this._box.style.height = l.y + "px");
      },
      _finish: function () {
        this._moved &&
          (me(this._box), xe(this._container, "leaflet-crosshair")),
          Qi(),
          La(),
          ce(
            document,
            {
              contextmenu: An,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseUp: function (i) {
        if (
          !(i.which !== 1 && i.button !== 1) &&
          (this._finish(), !!this._moved)
        ) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(
              u(this._resetState, this),
              0
            ));
          var o = new Oe(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(o).fire("boxzoomend", { boxZoomBounds: o });
        }
      },
      _onKeyDown: function (i) {
        i.keyCode === 27 &&
          (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    te.addInitHook("addHandler", "boxZoom", Ad),
      te.mergeOptions({ doubleClickZoom: !0 });
    var Id = At.extend({
      addHooks: function () {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function (i) {
        var o = this._map,
          l = o.getZoom(),
          c = o.options.zoomDelta,
          h = i.originalEvent.shiftKey ? l - c : l + c;
        o.options.doubleClickZoom === "center"
          ? o.setZoom(h)
          : o.setZoomAround(i.containerPoint, h);
      },
    });
    te.addInitHook("addHandler", "doubleClickZoom", Id),
      te.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      });
    var bd = At.extend({
      addHooks: function () {
        if (!this._draggable) {
          var i = this._map;
          (this._draggable = new sn(i._mapPane, i._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            ),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            i.options.worldCopyJump &&
              (this._draggable.on("predrag", this._onPreDragWrap, this),
              i.on("zoomend", this._onZoomEnd, this),
              i.whenReady(this._onZoomEnd, this));
        }
        Y(this._map._container, "leaflet-grab leaflet-touch-drag"),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        xe(this._map._container, "leaflet-grab"),
          xe(this._map._container, "leaflet-touch-drag"),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var i = this._map;
        if (
          (i._stop(),
          this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var o = ue(this._map.options.maxBounds);
          (this._offsetLimit = ne(
            this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(o.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize())
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            ));
        } else this._offsetLimit = null;
        i.fire("movestart").fire("dragstart"),
          i.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (i) {
        if (this._map.options.inertia) {
          var o = (this._lastTime = +new Date()),
            l = (this._lastPos =
              this._draggable._absPos || this._draggable._newPos);
          this._positions.push(l), this._times.push(o), this._prunePositions(o);
        }
        this._map.fire("move", i).fire("drag", i);
      },
      _prunePositions: function (i) {
        for (; this._positions.length > 1 && i - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var i = this._map.getSize().divideBy(2),
          o = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = o.subtract(i).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (i, o) {
        return i - (i - o) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var i = this._draggable._newPos.subtract(this._draggable._startPos),
            o = this._offsetLimit;
          i.x < o.min.x && (i.x = this._viscousLimit(i.x, o.min.x)),
            i.y < o.min.y && (i.y = this._viscousLimit(i.y, o.min.y)),
            i.x > o.max.x && (i.x = this._viscousLimit(i.x, o.max.x)),
            i.y > o.max.y && (i.y = this._viscousLimit(i.y, o.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(i));
        }
      },
      _onPreDragWrap: function () {
        var i = this._worldWidth,
          o = Math.round(i / 2),
          l = this._initialWorldOffset,
          c = this._draggable._newPos.x,
          h = ((c - o + l) % i) + o - l,
          m = ((c + o + l) % i) - o - l,
          S = Math.abs(h + l) < Math.abs(m + l) ? h : m;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = S);
      },
      _onDragEnd: function (i) {
        var o = this._map,
          l = o.options,
          c = !l.inertia || i.noInertia || this._times.length < 2;
        if ((o.fire("dragend", i), c)) o.fire("moveend");
        else {
          this._prunePositions(+new Date());
          var h = this._lastPos.subtract(this._positions[0]),
            m = (this._lastTime - this._times[0]) / 1e3,
            S = l.easeLinearity,
            C = h.multiplyBy(S / m),
            N = C.distanceTo([0, 0]),
            I = Math.min(l.inertiaMaxSpeed, N),
            $ = C.multiplyBy(I / N),
            W = I / (l.inertiaDeceleration * S),
            X = $.multiplyBy(-W / 2).round();
          !X.x && !X.y
            ? o.fire("moveend")
            : ((X = o._limitOffset(X, o.options.maxBounds)),
              re(function () {
                o.panBy(X, {
                  duration: W,
                  easeLinearity: S,
                  noMoveStart: !0,
                  animate: !0,
                });
              }));
        }
      },
    });
    te.addInitHook("addHandler", "dragging", bd),
      te.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
    var Bd = At.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (i) {
        (this._map = i),
          this._setPanDelta(i.options.keyboardPanDelta),
          this._setZoomDelta(i.options.zoomDelta);
      },
      addHooks: function () {
        var i = this._map._container;
        i.tabIndex <= 0 && (i.tabIndex = "0"),
          q(
            i,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.on(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      removeHooks: function () {
        this._removeHooks(),
          ce(
            this._map._container,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.off(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var i = document.body,
            o = document.documentElement,
            l = i.scrollTop || o.scrollTop,
            c = i.scrollLeft || o.scrollLeft;
          this._map._container.focus(), window.scrollTo(c, l);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire("focus");
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire("blur");
      },
      _setPanDelta: function (i) {
        var o = (this._panKeys = {}),
          l = this.keyCodes,
          c,
          h;
        for (c = 0, h = l.left.length; c < h; c++) o[l.left[c]] = [-1 * i, 0];
        for (c = 0, h = l.right.length; c < h; c++) o[l.right[c]] = [i, 0];
        for (c = 0, h = l.down.length; c < h; c++) o[l.down[c]] = [0, i];
        for (c = 0, h = l.up.length; c < h; c++) o[l.up[c]] = [0, -1 * i];
      },
      _setZoomDelta: function (i) {
        var o = (this._zoomKeys = {}),
          l = this.keyCodes,
          c,
          h;
        for (c = 0, h = l.zoomIn.length; c < h; c++) o[l.zoomIn[c]] = i;
        for (c = 0, h = l.zoomOut.length; c < h; c++) o[l.zoomOut[c]] = -i;
      },
      _addHooks: function () {
        q(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function () {
        ce(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function (i) {
        if (!(i.altKey || i.ctrlKey || i.metaKey)) {
          var o = i.keyCode,
            l = this._map,
            c;
          if (o in this._panKeys) {
            if (!l._panAnim || !l._panAnim._inProgress)
              if (
                ((c = this._panKeys[o]),
                i.shiftKey && (c = F(c).multiplyBy(3)),
                l.options.maxBounds &&
                  (c = l._limitOffset(F(c), l.options.maxBounds)),
                l.options.worldCopyJump)
              ) {
                var h = l.wrapLatLng(
                  l.unproject(l.project(l.getCenter()).add(c))
                );
                l.panTo(h);
              } else l.panBy(c);
          } else if (o in this._zoomKeys)
            l.setZoom(l.getZoom() + (i.shiftKey ? 3 : 1) * this._zoomKeys[o]);
          else if (o === 27 && l._popup && l._popup.options.closeOnEscapeKey)
            l.closePopup();
          else return;
          An(i);
        }
      },
    });
    te.addInitHook("addHandler", "keyboard", Bd),
      te.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60,
      });
    var Dd = At.extend({
      addHooks: function () {
        q(this._map._container, "wheel", this._onWheelScroll, this),
          (this._delta = 0);
      },
      removeHooks: function () {
        ce(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function (i) {
        var o = ld(i),
          l = this._map.options.wheelDebounceTime;
        (this._delta += o),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(i)),
          this._startTime || (this._startTime = +new Date());
        var c = Math.max(l - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer),
          (this._timer = setTimeout(u(this._performZoom, this), c)),
          An(i);
      },
      _performZoom: function () {
        var i = this._map,
          o = i.getZoom(),
          l = this._map.options.zoomSnap || 0;
        i._stop();
        var c = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          h = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(c))))) / Math.LN2,
          m = l ? Math.ceil(h / l) * l : h,
          S = i._limitZoom(o + (this._delta > 0 ? m : -m)) - o;
        (this._delta = 0),
          (this._startTime = null),
          S &&
            (i.options.scrollWheelZoom === "center"
              ? i.setZoom(o + S)
              : i.setZoomAround(this._lastMousePos, o + S));
      },
    });
    te.addInitHook("addHandler", "scrollWheelZoom", Dd);
    var u_ = 600;
    te.mergeOptions({
      tapHold: H.touchNative && H.safari && H.mobile,
      tapTolerance: 15,
    });
    var Fd = At.extend({
      addHooks: function () {
        q(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function () {
        ce(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function (i) {
        if ((clearTimeout(this._holdTimeout), i.touches.length === 1)) {
          var o = i.touches[0];
          (this._startPos = this._newPos = new R(o.clientX, o.clientY)),
            (this._holdTimeout = setTimeout(
              u(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (q(document, "touchend", be),
                    q(
                      document,
                      "touchend touchcancel",
                      this._cancelClickPrevent
                    ),
                    this._simulateEvent("contextmenu", o));
              }, this),
              u_
            )),
            q(document, "touchend touchcancel contextmenu", this._cancel, this),
            q(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function i() {
        ce(document, "touchend", be), ce(document, "touchend touchcancel", i);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          ce(document, "touchend touchcancel contextmenu", this._cancel, this),
          ce(document, "touchmove", this._onMove, this);
      },
      _onMove: function (i) {
        var o = i.touches[0];
        this._newPos = new R(o.clientX, o.clientY);
      },
      _isTapValid: function () {
        return (
          this._newPos.distanceTo(this._startPos) <=
          this._map.options.tapTolerance
        );
      },
      _simulateEvent: function (i, o) {
        var l = new MouseEvent(i, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: o.screenX,
          screenY: o.screenY,
          clientX: o.clientX,
          clientY: o.clientY,
        });
        (l._simulated = !0), o.target.dispatchEvent(l);
      },
    });
    te.addInitHook("addHandler", "tapHold", Fd),
      te.mergeOptions({ touchZoom: H.touch, bounceAtZoomLimits: !0 });
    var jd = At.extend({
      addHooks: function () {
        Y(this._map._container, "leaflet-touch-zoom"),
          q(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function () {
        xe(this._map._container, "leaflet-touch-zoom"),
          ce(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function (i) {
        var o = this._map;
        if (
          !(
            !i.touches ||
            i.touches.length !== 2 ||
            o._animatingZoom ||
            this._zooming
          )
        ) {
          var l = o.mouseEventToContainerPoint(i.touches[0]),
            c = o.mouseEventToContainerPoint(i.touches[1]);
          (this._centerPoint = o.getSize()._divideBy(2)),
            (this._startLatLng = o.containerPointToLatLng(this._centerPoint)),
            o.options.touchZoom !== "center" &&
              (this._pinchStartLatLng = o.containerPointToLatLng(
                l.add(c)._divideBy(2)
              )),
            (this._startDist = l.distanceTo(c)),
            (this._startZoom = o.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            o._stop(),
            q(document, "touchmove", this._onTouchMove, this),
            q(document, "touchend touchcancel", this._onTouchEnd, this),
            be(i);
        }
      },
      _onTouchMove: function (i) {
        if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
          var o = this._map,
            l = o.mouseEventToContainerPoint(i.touches[0]),
            c = o.mouseEventToContainerPoint(i.touches[1]),
            h = l.distanceTo(c) / this._startDist;
          if (
            ((this._zoom = o.getScaleZoom(h, this._startZoom)),
            !o.options.bounceAtZoomLimits &&
              ((this._zoom < o.getMinZoom() && h < 1) ||
                (this._zoom > o.getMaxZoom() && h > 1)) &&
              (this._zoom = o._limitZoom(this._zoom)),
            o.options.touchZoom === "center")
          ) {
            if (((this._center = this._startLatLng), h === 1)) return;
          } else {
            var m = l._add(c)._divideBy(2)._subtract(this._centerPoint);
            if (h === 1 && m.x === 0 && m.y === 0) return;
            this._center = o.unproject(
              o.project(this._pinchStartLatLng, this._zoom).subtract(m),
              this._zoom
            );
          }
          this._moved || (o._moveStart(!0, !1), (this._moved = !0)),
            Te(this._animRequest);
          var S = u(
            o._move,
            o,
            this._center,
            this._zoom,
            { pinch: !0, round: !1 },
            void 0
          );
          (this._animRequest = re(S, this, !0)), be(i);
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        (this._zooming = !1),
          Te(this._animRequest),
          ce(document, "touchmove", this._onTouchMove, this),
          ce(document, "touchend touchcancel", this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              );
      },
    });
    te.addInitHook("addHandler", "touchZoom", jd),
      (te.BoxZoom = Ad),
      (te.DoubleClickZoom = Id),
      (te.Drag = bd),
      (te.Keyboard = Bd),
      (te.ScrollWheelZoom = Dd),
      (te.TapHold = Fd),
      (te.TouchZoom = jd),
      (n.Bounds = K),
      (n.Browser = H),
      (n.CRS = Je),
      (n.Canvas = Nd),
      (n.Circle = Fa),
      (n.CircleMarker = mo),
      (n.Class = Re),
      (n.Control = St),
      (n.DivIcon = Cd),
      (n.DivOverlay = It),
      (n.DomEvent = Cv),
      (n.DomUtil = kv),
      (n.Draggable = sn),
      (n.Evented = ft),
      (n.FeatureGroup = Ht),
      (n.GeoJSON = Wt),
      (n.GridLayer = ir),
      (n.Handler = At),
      (n.Icon = oi),
      (n.ImageOverlay = wo),
      (n.LatLng = oe),
      (n.LatLngBounds = Oe),
      (n.Layer = Pt),
      (n.LayerGroup = ri),
      (n.LineUtil = jv),
      (n.Map = te),
      (n.Marker = po),
      (n.Mixin = Av),
      (n.Path = an),
      (n.Point = R),
      (n.PolyUtil = Iv),
      (n.Polygon = si),
      (n.Polyline = Vt),
      (n.Popup = xo),
      (n.PosAnimation = ud),
      (n.Projection = $v),
      (n.Rectangle = Md),
      (n.Renderer = Kt),
      (n.SVG = or),
      (n.SVGOverlay = Ed),
      (n.TileLayer = li),
      (n.Tooltip = So),
      (n.Transformation = da),
      (n.Util = Ut),
      (n.VideoOverlay = kd),
      (n.bind = u),
      (n.bounds = ne),
      (n.canvas = zd),
      (n.circle = qv),
      (n.circleMarker = Gv),
      (n.control = er),
      (n.divIcon = r_),
      (n.extend = s),
      (n.featureGroup = Vv),
      (n.geoJSON = Ld),
      (n.geoJson = Yv),
      (n.gridLayer = o_),
      (n.icon = Wv),
      (n.imageOverlay = Xv),
      (n.latLng = G),
      (n.latLngBounds = ue),
      (n.layerGroup = Hv),
      (n.map = Tv),
      (n.marker = Kv),
      (n.point = F),
      (n.polygon = Qv),
      (n.polyline = Jv),
      (n.popup = n_),
      (n.rectangle = l_),
      (n.setOptions = E),
      (n.stamp = f),
      (n.svg = Rd),
      (n.svgOverlay = t_),
      (n.tileLayer = Td),
      (n.tooltip = i_),
      (n.transformation = Wi),
      (n.version = r),
      (n.videoOverlay = e_);
    var c_ = window.L;
    (n.noConflict = function () {
      return (window.L = c_), this;
    }),
      (window.L = n);
  });
})(xu, xu.exports);
var Zi = xu.exports;
const wg = jh(Zi);
function na(e, t, n) {
  return Object.freeze({ instance: e, context: t, container: n });
}
function ia(e, t) {
  return t == null
    ? function (r, s) {
        const a = A.useRef();
        return a.current || (a.current = e(r, s)), a;
      }
    : function (r, s) {
        const a = A.useRef();
        a.current || (a.current = e(r, s));
        const u = A.useRef(r),
          { instance: d } = a.current;
        return (
          A.useEffect(
            function () {
              u.current !== r && (t(d, r, u.current), (u.current = r));
            },
            [d, r, s]
          ),
          a
        );
      };
}
function xg(e, t) {
  A.useEffect(
    function () {
      return (
        (t.layerContainer ?? t.map).addLayer(e.instance),
        function () {
          var a;
          (a = t.layerContainer) == null || a.removeLayer(e.instance),
            t.map.removeLayer(e.instance);
        }
      );
    },
    [t, e]
  );
}
function Sg(e) {
  return function (n) {
    const r = Cc(),
      s = e(ta(n, r), r);
    return (
      mg(r.map, n.attribution),
      Tc(s.current, n.eventHandlers),
      xg(s.current, r),
      s
    );
  };
}
function _w(e, t) {
  const n = A.useRef();
  A.useEffect(
    function () {
      if (t.pathOptions !== n.current) {
        const s = t.pathOptions ?? {};
        e.instance.setStyle(s), (n.current = s);
      }
    },
    [e, t]
  );
}
function yw(e) {
  return function (n) {
    const r = Cc(),
      s = e(ta(n, r), r);
    return (
      Tc(s.current, n.eventHandlers), xg(s.current, r), _w(s.current, n), s
    );
  };
}
function ww(e, t) {
  const n = ia(e, t),
    r = Sg(n);
  return yg(r);
}
function xw(e, t) {
  const n = ia(e),
    r = vw(n, t);
  return mw(r);
}
function Sw(e, t) {
  const n = ia(e, t),
    r = yw(n);
  return yg(r);
}
function Pw(e, t) {
  const n = ia(e, t),
    r = Sg(n);
  return gw(r);
}
function Lw(e, t, n) {
  const { opacity: r, zIndex: s } = t;
  r != null && r !== n.opacity && e.setOpacity(r),
    s != null && s !== n.zIndex && e.setZIndex(s);
}
function Su() {
  return (
    (Su =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Su.apply(this, arguments)
  );
}
function kw(
  {
    bounds: e,
    boundsOptions: t,
    center: n,
    children: r,
    className: s,
    id: a,
    placeholder: u,
    style: d,
    whenReady: f,
    zoom: p,
    ...g
  },
  v
) {
  const [_] = A.useState({ className: s, id: a, style: d }),
    [k, P] = A.useState(null);
  A.useImperativeHandle(v, () => (k == null ? void 0 : k.map) ?? null, [k]);
  const E = A.useCallback((w) => {
    if (w !== null && k === null) {
      const y = new Zi.Map(w, g);
      n != null && p != null ? y.setView(n, p) : e != null && y.fitBounds(e, t),
        f != null && y.whenReady(f),
        P(pw(y));
    }
  }, []);
  A.useEffect(
    () => () => {
      k == null || k.map.remove();
    },
    [k]
  );
  const T = k ? rs.createElement(_g, { value: k }, r) : u ?? null;
  return rs.createElement("div", Su({}, _, { ref: E }), T);
}
const Ew = A.forwardRef(kw),
  Cw = ww(
    function ({ position: t, ...n }, r) {
      const s = new Zi.Marker(t, n);
      return na(s, gg(r, { overlayContainer: s }));
    },
    function (t, n, r) {
      n.position !== r.position && t.setLatLng(n.position),
        n.icon != null && n.icon !== r.icon && t.setIcon(n.icon),
        n.zIndexOffset != null &&
          n.zIndexOffset !== r.zIndexOffset &&
          t.setZIndexOffset(n.zIndexOffset),
        n.opacity != null && n.opacity !== r.opacity && t.setOpacity(n.opacity),
        t.dragging != null &&
          n.draggable !== r.draggable &&
          (n.draggable === !0 ? t.dragging.enable() : t.dragging.disable());
    }
  ),
  Tw = Sw(
    function ({ positions: t, ...n }, r) {
      const s = new Zi.Polyline(t, n);
      return na(s, gg(r, { overlayContainer: s }));
    },
    function (t, n, r) {
      n.positions !== r.positions && t.setLatLngs(n.positions);
    }
  ),
  Ow = xw(
    function (t, n) {
      const r = new Zi.Popup(t, n.overlayContainer);
      return na(r, n);
    },
    function (t, n, { position: r }, s) {
      A.useEffect(
        function () {
          const { instance: u } = t;
          function d(p) {
            p.popup === u && (u.update(), s(!0));
          }
          function f(p) {
            p.popup === u && s(!1);
          }
          return (
            n.map.on({ popupopen: d, popupclose: f }),
            n.overlayContainer == null
              ? (r != null && u.setLatLng(r), u.openOn(n.map))
              : n.overlayContainer.bindPopup(u),
            function () {
              var g;
              n.map.off({ popupopen: d, popupclose: f }),
                (g = n.overlayContainer) == null || g.unbindPopup(),
                n.map.removeLayer(u);
            }
          );
        },
        [t, n, s, r]
      );
    }
  ),
  Nw = Pw(
    function ({ url: t, ...n }, r) {
      const s = new Zi.TileLayer(t, ta(n, r));
      return na(s, r);
    },
    function (t, n, r) {
      Lw(t, n, r);
      const { url: s } = n;
      s != null && s !== r.url && t.setUrl(s);
    }
  ),
  dh = [
    {
      id: 1,
      type: "individual",
      name: "김철수",
      latitude: 37.5665,
      longitude: 126.978,
      nationality: "Korean",
    },
    {
      id: 2,
      type: "individual",
      name: "John Smith",
      latitude: 40.7128,
      longitude: -74.006,
      nationality: "American",
    },
    {
      id: 3,
      type: "individual",
      name: "田中太郎",
      latitude: 35.6762,
      longitude: 139.6503,
      nationality: "Japanese",
    },
    {
      id: 4,
      type: "individual",
      name: "Alice Johnson",
      latitude: 51.5074,
      longitude: -0.1278,
      nationality: "British",
    },
    {
      id: 5,
      type: "individual",
      name: "Jean Dupont",
      latitude: 48.8566,
      longitude: 2.3522,
      nationality: "French",
    },
    {
      id: 6,
      type: "individual",
      name: "Wang Wei",
      latitude: 39.9042,
      longitude: 116.4074,
      nationality: "Chinese",
    },
    {
      id: 7,
      type: "individual",
      name: "Olga Ivanova",
      latitude: 55.7558,
      longitude: 37.6173,
      nationality: "Russian",
    },
    {
      id: 8,
      type: "individual",
      name: "Carlos Garcia",
      latitude: -23.5505,
      longitude: -46.6333,
      nationality: "Brazilian",
    },
    {
      id: 9,
      type: "individual",
      name: "Ahmed Hassan",
      latitude: 30.0444,
      longitude: 31.2357,
      nationality: "Egyptian",
    },
    {
      id: 10,
      type: "individual",
      name: "Liam O'Connor",
      latitude: 53.3498,
      longitude: -6.2603,
      nationality: "Irish",
    },
    {
      id: 11,
      type: "individual",
      name: "박영희",
      latitude: 37.5665,
      longitude: 126.978,
      nationality: "Korean",
    },
    {
      id: 12,
      type: "individual",
      name: "Emily Davis",
      latitude: 34.0522,
      longitude: -118.2437,
      nationality: "American",
    },
    {
      id: 13,
      type: "individual",
      name: "Sophie Müller",
      latitude: 52.52,
      longitude: 13.405,
      nationality: "German",
    },
    {
      id: 14,
      type: "individual",
      name: "Mario Rossi",
      latitude: 41.9028,
      longitude: 12.4964,
      nationality: "Italian",
    },
    {
      id: 15,
      type: "individual",
      name: "Rajesh Kumar",
      latitude: 28.7041,
      longitude: 77.1025,
      nationality: "Indian",
    },
    {
      id: 16,
      type: "individual",
      name: "Fatima Al-Zahra",
      latitude: 24.7136,
      longitude: 46.6753,
      nationality: "Saudi Arabian",
    },
    {
      id: 17,
      type: "individual",
      name: "Sarah Wilson",
      latitude: 34.0522,
      longitude: -118.2437,
      nationality: "American",
    },
    {
      id: 18,
      type: "individual",
      name: "Paulo Oliveira",
      latitude: -23.5505,
      longitude: -46.6333,
      nationality: "Brazilian",
    },
    {
      id: 19,
      type: "individual",
      name: "Julia Kowalski",
      latitude: 52.2297,
      longitude: 21.0122,
      nationality: "Polish",
    },
    {
      id: 20,
      type: "individual",
      name: "Ali Mohammed",
      latitude: 30.0444,
      longitude: 31.2357,
      nationality: "Egyptian",
    },
    {
      id: 21,
      type: "individual",
      name: "Yuki Yamamoto",
      latitude: 35.6762,
      longitude: 139.6503,
      nationality: "Japanese",
    },
    {
      id: 22,
      type: "individual",
      name: "Hans Gruber",
      latitude: 48.1351,
      longitude: 11.582,
      nationality: "German",
    },
    {
      id: 23,
      type: "individual",
      name: "Isabella Martinez",
      latitude: 40.4168,
      longitude: -3.7038,
      nationality: "Spanish",
    },
    {
      id: 24,
      type: "individual",
      name: "Saeed Al-Maktoum",
      latitude: 25.276987,
      longitude: 55.296249,
      nationality: "Emirati",
    },
    {
      id: 25,
      type: "individual",
      name: "Victoria Clark",
      latitude: 51.5074,
      longitude: -0.1278,
      nationality: "British",
    },
    {
      id: 26,
      type: "individual",
      name: "Liang Chen",
      latitude: 39.9042,
      longitude: 116.4074,
      nationality: "Chinese",
    },
    {
      id: 27,
      type: "individual",
      name: "Hiroshi Saito",
      latitude: 35.6762,
      longitude: 139.6503,
      nationality: "Japanese",
    },
    {
      id: 28,
      type: "individual",
      name: "Gabriel Silva",
      latitude: -23.5505,
      longitude: -46.6333,
      nationality: "Brazilian",
    },
    {
      id: 29,
      type: "individual",
      name: "Anastasia Petrov",
      latitude: 55.7558,
      longitude: 37.6173,
      nationality: "Russian",
    },
    {
      id: 30,
      type: "individual",
      name: "Zhang Wei",
      latitude: 39.9042,
      longitude: 116.4074,
      nationality: "Chinese",
    },
    {
      id: 31,
      type: "individual",
      name: "김철수",
      latitude: 35.6762,
      longitude: 139.6503,
      nationality: "Korean",
    },
    {
      id: 32,
      type: "individual",
      name: "이영희",
      latitude: 34.6937,
      longitude: 135.5023,
      nationality: "Korean",
    },
    {
      id: 33,
      type: "individual",
      name: "박민수",
      latitude: 35.1815,
      longitude: 136.9066,
      nationality: "Korean",
    },
    {
      id: 34,
      type: "individual",
      name: "최지훈",
      latitude: 35.6762,
      longitude: 139.6503,
      nationality: "Korean",
    },
    {
      id: 35,
      type: "individual",
      name: "윤하진",
      latitude: 35.0116,
      longitude: 135.7681,
      nationality: "Korean",
    },
    {
      id: 36,
      type: "individual",
      name: "김수진",
      latitude: 43.0618,
      longitude: 141.3545,
      nationality: "Korean",
    },
    {
      id: 37,
      type: "individual",
      name: "장서연",
      latitude: 35.1815,
      longitude: 136.9066,
      nationality: "Korean",
    },
    {
      id: 38,
      type: "individual",
      name: "이준호",
      latitude: 35.1815,
      longitude: 136.9066,
      nationality: "Korean",
    },
    {
      id: 39,
      type: "individual",
      name: "박지민",
      latitude: 33.5902,
      longitude: 130.4017,
      nationality: "Korean",
    },
    {
      id: 40,
      type: "individual",
      name: "정민우",
      latitude: 35.6762,
      longitude: 139.6503,
      nationality: "Korean",
    },
    {
      id: 41,
      type: "individual",
      name: "한지우",
      latitude: 34.6937,
      longitude: 135.5023,
      nationality: "Korean",
    },
    {
      id: 42,
      type: "individual",
      name: "오세훈",
      latitude: 43.0618,
      longitude: 141.3545,
      nationality: "Korean",
    },
    {
      id: 43,
      type: "individual",
      name: "임서윤",
      latitude: 35.0116,
      longitude: 135.7681,
      nationality: "Korean",
    },
    {
      id: 44,
      type: "individual",
      name: "양수빈",
      latitude: 43.0618,
      longitude: 141.3545,
      nationality: "Korean",
    },
    {
      id: 45,
      type: "individual",
      name: "김하늘",
      latitude: 35.1815,
      longitude: 136.9066,
      nationality: "Korean",
    },
    {
      id: 46,
      type: "individual",
      name: "최정우",
      latitude: 33.5902,
      longitude: 130.4017,
      nationality: "Korean",
    },
    {
      id: 47,
      type: "individual",
      name: "신재하",
      latitude: 35.6762,
      longitude: 139.6503,
      nationality: "Korean",
    },
    {
      id: 48,
      type: "individual",
      name: "이은채",
      latitude: 34.6937,
      longitude: 135.5023,
      nationality: "Korean",
    },
    {
      id: 49,
      type: "individual",
      name: "윤서영",
      latitude: 35.1815,
      longitude: 136.9066,
      nationality: "Korean",
    },
    {
      id: 50,
      type: "individual",
      name: "김민재",
      latitude: 35.0116,
      longitude: 135.7681,
      nationality: "Korean",
    },
    {
      id: 51,
      type: "individual",
      name: "장민기",
      latitude: 43.0618,
      longitude: 141.3545,
      nationality: "Korean",
    },
    {
      id: 52,
      type: "individual",
      name: "정하은",
      latitude: 35.1815,
      longitude: 136.9066,
      nationality: "Korean",
    },
    {
      id: 53,
      type: "individual",
      name: "박지우",
      latitude: 33.5902,
      longitude: 130.4017,
      nationality: "Korean",
    },
    {
      id: 54,
      type: "individual",
      name: "이서연",
      latitude: 35.6762,
      longitude: 139.6503,
      nationality: "Korean",
    },
    {
      id: 55,
      type: "individual",
      name: "김다은",
      latitude: 34.6937,
      longitude: 135.5023,
      nationality: "Korean",
    },
    {
      id: 56,
      type: "individual",
      name: "오민호",
      latitude: 35.1815,
      longitude: 136.9066,
      nationality: "Korean",
    },
    {
      id: 57,
      type: "individual",
      name: "양재원",
      latitude: 35.0116,
      longitude: 135.7681,
      nationality: "Korean",
    },
    {
      id: 58,
      type: "individual",
      name: "신유리",
      latitude: 43.0618,
      longitude: 141.3545,
      nationality: "Korean",
    },
    {
      id: 59,
      type: "individual",
      name: "최현우",
      latitude: 35.1815,
      longitude: 136.9066,
      nationality: "Korean",
    },
    {
      id: 60,
      type: "individual",
      name: "김수호",
      latitude: 33.5902,
      longitude: 130.4017,
      nationality: "Korean",
    },
  ],
  fh = [
    {
      id: 101,
      type: "organization",
      name: "서울 한인회",
      latitude: 37.5665,
      longitude: 126.978,
    },
    {
      id: 102,
      type: "organization",
      name: "New York Korean Society",
      latitude: 40.7128,
      longitude: -74.006,
    },
    {
      id: 103,
      type: "organization",
      name: "Tokyo International Club",
      latitude: 35.6762,
      longitude: 139.6503,
    },
    {
      id: 104,
      type: "organization",
      name: "London Business Forum",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    {
      id: 105,
      type: "organization",
      name: "Paris Korean Association",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    {
      id: 106,
      type: "organization",
      name: "Beijing Cultural Center",
      latitude: 39.9042,
      longitude: 116.4074,
    },
    {
      id: 107,
      type: "organization",
      name: "Moscow Asian Community",
      latitude: 55.7558,
      longitude: 37.6173,
    },
    {
      id: 108,
      type: "organization",
      name: "Sao Paulo Business Network",
      latitude: -23.5505,
      longitude: -46.6333,
    },
    {
      id: 109,
      type: "organization",
      name: "Cairo International Alliance",
      latitude: 30.0444,
      longitude: 31.2357,
    },
    {
      id: 110,
      type: "organization",
      name: "Dublin Tech Hub",
      latitude: 53.3498,
      longitude: -6.2603,
    },
    {
      id: 111,
      type: "organization",
      name: "Berlin Startups Network",
      latitude: 52.52,
      longitude: 13.405,
    },
    {
      id: 112,
      type: "organization",
      name: "Rome Entrepreneurs Association",
      latitude: 41.9028,
      longitude: 12.4964,
    },
    {
      id: 113,
      type: "organization",
      name: "New Delhi Professional Group",
      latitude: 28.7041,
      longitude: 77.1025,
    },
    {
      id: 114,
      type: "organization",
      name: "Riyadh Business Council",
      latitude: 24.7136,
      longitude: 46.6753,
    },
    {
      id: 115,
      type: "organization",
      name: "Tokyo Business Alliance",
      latitude: 35.6762,
      longitude: 139.6503,
    },
    {
      id: 116,
      type: "organization",
      name: "Los Angeles Cultural Exchange",
      latitude: 34.0522,
      longitude: -118.2437,
    },
    {
      id: 117,
      type: "organization",
      name: "Brazilian-Korean Friendship Society",
      latitude: -23.5505,
      longitude: -46.6333,
    },
    {
      id: 118,
      type: "organization",
      name: "Poland-Korea Association",
      latitude: 52.2297,
      longitude: 21.0122,
    },
    {
      id: 119,
      type: "organization",
      name: "Seoul Tech Forum",
      latitude: 37.5665,
      longitude: 126.978,
    },
    {
      id: 120,
      type: "organization",
      name: "Shanghai International Exchange",
      latitude: 31.2304,
      longitude: 121.4737,
    },
    {
      id: 121,
      type: "organization",
      name: "재일한국인연합회",
      latitude: 35.6762,
      longitude: 139.6503,
    },
    {
      id: 122,
      type: "organization",
      name: "오사카 한인회",
      latitude: 34.6937,
      longitude: 135.5023,
    },
    {
      id: 123,
      type: "organization",
      name: "나고야 한국인회",
      latitude: 35.1815,
      longitude: 136.9066,
    },
    {
      id: 124,
      type: "organization",
      name: "동경한인연합회",
      latitude: 35.6762,
      longitude: 139.6503,
    },
    {
      id: 125,
      type: "organization",
      name: "교토 한인회",
      latitude: 35.0116,
      longitude: 135.7681,
    },
    {
      id: 126,
      type: "organization",
      name: "재일본 한국상공회의소",
      latitude: 35.6762,
      longitude: 139.6503,
    },
    {
      id: 127,
      type: "organization",
      name: "삿포로 한인회",
      latitude: 43.0618,
      longitude: 141.3545,
    },
    {
      id: 128,
      type: "organization",
      name: "후쿠오카 한국문화원",
      latitude: 33.5902,
      longitude: 130.4017,
    },
  ],
  hh = [
    {
      id: 201,
      type: "region",
      name: "서울",
      latitude: 37.5665,
      longitude: 126.978,
    },
    {
      id: 202,
      type: "region",
      name: "New York",
      latitude: 40.7128,
      longitude: -74.006,
    },
    {
      id: 203,
      type: "region",
      name: "Tokyo",
      latitude: 35.6762,
      longitude: 139.6503,
    },
    {
      id: 204,
      type: "region",
      name: "London",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    {
      id: 205,
      type: "region",
      name: "Paris",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    {
      id: 206,
      type: "region",
      name: "Beijing",
      latitude: 39.9042,
      longitude: 116.4074,
    },
    {
      id: 207,
      type: "region",
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
    {
      id: 208,
      type: "region",
      name: "Sao Paulo",
      latitude: -23.5505,
      longitude: -46.6333,
    },
    {
      id: 209,
      type: "region",
      name: "Cairo",
      latitude: 30.0444,
      longitude: 31.2357,
    },
    {
      id: 210,
      type: "region",
      name: "Dublin",
      latitude: 53.3498,
      longitude: -6.2603,
    },
    {
      id: 211,
      type: "region",
      name: "Berlin",
      latitude: 52.52,
      longitude: 13.405,
    },
    {
      id: 212,
      type: "region",
      name: "Rome",
      latitude: 41.9028,
      longitude: 12.4964,
    },
    {
      id: 213,
      type: "region",
      name: "New Delhi",
      latitude: 28.7041,
      longitude: 77.1025,
    },
    {
      id: 214,
      type: "region",
      name: "Riyadh",
      latitude: 24.7136,
      longitude: 46.6753,
    },
    {
      id: 215,
      type: "region",
      name: "Shanghai",
      latitude: 31.2304,
      longitude: 121.4737,
    },
    {
      id: 216,
      type: "region",
      name: "Los Angeles",
      latitude: 34.0522,
      longitude: -118.2437,
    },
    {
      id: 217,
      type: "region",
      name: "Warsaw",
      latitude: 52.2297,
      longitude: 21.0122,
    },
    {
      id: 218,
      type: "region",
      name: "Mexico City",
      latitude: 19.4326,
      longitude: -99.1332,
    },
    {
      id: 219,
      type: "region",
      name: "Dubai",
      latitude: 25.276987,
      longitude: 55.296249,
    },
    {
      id: 220,
      type: "region",
      name: "Seoul",
      latitude: 37.5665,
      longitude: 126.978,
    },
  ],
  ph = [
    { source: 1, target: 2, type: "individual-individual", strength: 3 },
    { source: 1, target: 2, type: "individual-individual", strength: 3 },
    { source: 3, target: 4, type: "individual-individual", strength: 5 },
    { source: 5, target: 6, type: "individual-individual", strength: 4 },
    { source: 7, target: 8, type: "individual-individual", strength: 2 },
    { source: 9, target: 10, type: "individual-individual", strength: 3 },
    { source: 11, target: 12, type: "individual-individual", strength: 5 },
    { source: 13, target: 14, type: "individual-individual", strength: 4 },
    { source: 15, target: 16, type: "individual-individual", strength: 3 },
    { source: 17, target: 18, type: "individual-individual", strength: 4 },
    { source: 19, target: 20, type: "individual-individual", strength: 5 },
    { source: 21, target: 22, type: "individual-individual", strength: 2 },
    { source: 23, target: 24, type: "individual-individual", strength: 4 },
    { source: 25, target: 26, type: "individual-individual", strength: 3 },
    { source: 27, target: 28, type: "individual-individual", strength: 5 },
    { source: 29, target: 30, type: "individual-individual", strength: 4 },
    { source: 2, target: 3, type: "individual-individual", strength: 2 },
    { source: 4, target: 5, type: "individual-individual", strength: 3 },
    { source: 6, target: 7, type: "individual-individual", strength: 4 },
    { source: 8, target: 9, type: "individual-individual", strength: 2 },
    { source: 10, target: 11, type: "individual-individual", strength: 5 },
    { source: 12, target: 13, type: "individual-individual", strength: 3 },
    { source: 14, target: 15, type: "individual-individual", strength: 4 },
    { source: 16, target: 17, type: "individual-individual", strength: 5 },
    { source: 18, target: 19, type: "individual-individual", strength: 2 },
    { source: 20, target: 21, type: "individual-individual", strength: 3 },
    { source: 22, target: 23, type: "individual-individual", strength: 5 },
    { source: 24, target: 25, type: "individual-individual", strength: 4 },
    { source: 26, target: 27, type: "individual-individual", strength: 2 },
    { source: 28, target: 29, type: "individual-individual", strength: 3 },
    { source: 30, target: 1, type: "individual-individual", strength: 5 },
    { source: 1, target: 101, type: "individual-organization", strength: 4 },
    { source: 2, target: 102, type: "individual-organization", strength: 3 },
    { source: 3, target: 103, type: "individual-organization", strength: 2 },
    { source: 4, target: 104, type: "individual-organization", strength: 5 },
    { source: 5, target: 105, type: "individual-organization", strength: 4 },
    { source: 6, target: 106, type: "individual-organization", strength: 3 },
    { source: 7, target: 107, type: "individual-organization", strength: 5 },
    { source: 8, target: 108, type: "individual-organization", strength: 2 },
    { source: 9, target: 109, type: "individual-organization", strength: 4 },
    { source: 10, target: 110, type: "individual-organization", strength: 5 },
    { source: 11, target: 111, type: "individual-organization", strength: 3 },
    { source: 12, target: 112, type: "individual-organization", strength: 4 },
    { source: 13, target: 113, type: "individual-organization", strength: 5 },
    { source: 14, target: 114, type: "individual-organization", strength: 2 },
    { source: 15, target: 115, type: "individual-organization", strength: 3 },
    { source: 16, target: 116, type: "individual-organization", strength: 4 },
    { source: 17, target: 117, type: "individual-organization", strength: 5 },
    { source: 18, target: 118, type: "individual-organization", strength: 3 },
    { source: 19, target: 119, type: "individual-organization", strength: 4 },
    { source: 20, target: 120, type: "individual-organization", strength: 5 },
    { source: 21, target: 101, type: "individual-organization", strength: 3 },
    { source: 22, target: 102, type: "individual-organization", strength: 4 },
    { source: 23, target: 103, type: "individual-organization", strength: 5 },
    { source: 24, target: 104, type: "individual-organization", strength: 3 },
    { source: 25, target: 105, type: "individual-organization", strength: 4 },
    { source: 26, target: 106, type: "individual-organization", strength: 5 },
    { source: 27, target: 107, type: "individual-organization", strength: 2 },
    { source: 28, target: 108, type: "individual-organization", strength: 3 },
    { source: 29, target: 109, type: "individual-organization", strength: 4 },
    { source: 30, target: 110, type: "individual-organization", strength: 5 },
    { source: 1, target: 101, type: "individual-organization", strength: 4 },
    { source: 1, target: 201, type: "individual-region", strength: 5 },
    { source: 3, target: 103, type: "individual-organization", strength: 2 },
    { source: 4, target: 104, type: "individual-organization", strength: 3 },
    { source: 5, target: 105, type: "individual-organization", strength: 4 },
    { source: 6, target: 106, type: "individual-organization", strength: 5 },
    { source: 7, target: 107, type: "individual-organization", strength: 3 },
    { source: 8, target: 108, type: "individual-organization", strength: 2 },
    { source: 9, target: 109, type: "individual-organization", strength: 4 },
    { source: 10, target: 110, type: "individual-organization", strength: 5 },
    { source: 11, target: 111, type: "individual-organization", strength: 3 },
    { source: 12, target: 112, type: "individual-organization", strength: 4 },
    { source: 13, target: 113, type: "individual-organization", strength: 5 },
    { source: 14, target: 114, type: "individual-organization", strength: 2 },
    { source: 15, target: 115, type: "individual-organization", strength: 3 },
    { source: 16, target: 116, type: "individual-organization", strength: 4 },
    { source: 17, target: 117, type: "individual-organization", strength: 5 },
    { source: 18, target: 118, type: "individual-organization", strength: 3 },
    { source: 19, target: 119, type: "individual-organization", strength: 4 },
    { source: 20, target: 120, type: "individual-organization", strength: 5 },
    { source: 21, target: 101, type: "individual-organization", strength: 3 },
    { source: 22, target: 102, type: "individual-organization", strength: 4 },
    { source: 23, target: 103, type: "individual-organization", strength: 5 },
    { source: 24, target: 104, type: "individual-organization", strength: 3 },
    { source: 25, target: 105, type: "individual-organization", strength: 4 },
    { source: 26, target: 106, type: "individual-organization", strength: 5 },
    { source: 27, target: 107, type: "individual-organization", strength: 2 },
    { source: 28, target: 108, type: "individual-organization", strength: 3 },
    { source: 29, target: 109, type: "individual-organization", strength: 4 },
    { source: 30, target: 110, type: "individual-organization", strength: 5 },
    { source: 31, target: 32, type: "individual-individual", strength: 5 },
    { source: 31, target: 33, type: "individual-individual", strength: 3 },
    { source: 32, target: 34, type: "individual-individual", strength: 4 },
    { source: 33, target: 35, type: "individual-individual", strength: 5 },
    { source: 34, target: 36, type: "individual-individual", strength: 2 },
    { source: 37, target: 38, type: "individual-individual", strength: 3 },
    { source: 39, target: 40, type: "individual-individual", strength: 4 },
    { source: 41, target: 42, type: "individual-individual", strength: 5 },
    { source: 43, target: 44, type: "individual-individual", strength: 3 },
    { source: 45, target: 46, type: "individual-individual", strength: 5 },
    { source: 47, target: 48, type: "individual-individual", strength: 4 },
    { source: 49, target: 50, type: "individual-individual", strength: 5 },
    { source: 51, target: 52, type: "individual-individual", strength: 3 },
    { source: 53, target: 54, type: "individual-individual", strength: 5 },
    { source: 55, target: 56, type: "individual-individual", strength: 4 },
    { source: 57, target: 58, type: "individual-individual", strength: 5 },
    { source: 59, target: 60, type: "individual-individual", strength: 3 },
    { source: 31, target: 121, type: "individual-organization", strength: 5 },
    { source: 32, target: 122, type: "individual-organization", strength: 4 },
    { source: 33, target: 123, type: "individual-organization", strength: 3 },
    { source: 34, target: 124, type: "individual-organization", strength: 5 },
    { source: 35, target: 125, type: "individual-organization", strength: 4 },
    { source: 36, target: 126, type: "individual-organization", strength: 3 },
    { source: 37, target: 127, type: "individual-organization", strength: 5 },
    { source: 38, target: 128, type: "individual-organization", strength: 4 },
  ];
delete wg.Icon.Default.prototype._getIconUrl;
wg.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});
const zw = () => {
  const { t: e } = Ui(),
    [t, n] = A.useState([]),
    [r, s] = A.useState([]),
    [a, u] = A.useState({ type: "all", nationality: "all" });
  A.useEffect(() => {
    n([...dh, ...fh, ...hh]), s(ph);
  }, []),
    A.useEffect(() => {
      let f = [...dh, ...fh, ...hh];
      a.type !== "all" && (f = f.filter((g) => g.type === a.type)),
        a.nationality !== "all" &&
          a.type === "individual" &&
          (f = f.filter((g) => g.nationality === a.nationality)),
        n(f);
      const p = ph.filter((g) => {
        const v = f.some((k) => k.id === g.source),
          _ = f.some((k) => k.id === g.target);
        return (
          v &&
          _ &&
          (a.type === "all" ||
            (a.type === "individual" &&
              (g.type === "individual-individual" ||
                g.type === "individual-organization")) ||
            (a.type === "organization" && g.type === "individual-organization"))
        );
      });
      s(p);
    }, [a]);
  const d = (f) => {
    switch (f) {
      case "individual-individual":
        return "red";
      case "individual-organization":
        return "green";
      default:
        return "gray";
    }
  };
  return b.jsxs("div", {
    className: "h-[calc(100vh-64px)]",
    children: [
      b.jsxs("div", {
        className: "p-4 bg-white",
        children: [
          b.jsxs("select", {
            onChange: (f) => u((p) => ({ ...p, type: f.target.value })),
            children: [
              b.jsx("option", { value: "all", children: e("all") }),
              b.jsx("option", {
                value: "individual",
                children: e("individual"),
              }),
              b.jsx("option", {
                value: "organization",
                children: e("organization"),
              }),
              b.jsx("option", { value: "region", children: e("region") }),
            ],
          }),
          a.type === "individual" &&
            b.jsxs("select", {
              onChange: (f) =>
                u((p) => ({ ...p, nationality: f.target.value })),
              children: [
                b.jsx("option", {
                  value: "all",
                  children: e("allNationalities"),
                }),
                b.jsx("option", { value: "Korean", children: e("korean") }),
                b.jsx("option", { value: "American", children: e("american") }),
                b.jsx("option", { value: "Japanese", children: e("japanese") }),
                b.jsx("option", { value: "Chinese", children: e("chinese") }),
                b.jsx("option", {
                  value: "Vietnamese",
                  children: e("vietnamese"),
                }),
                b.jsx("option", { value: "Indian", children: e("indian") }),
                b.jsx("option", { value: "British", children: e("british") }),
                b.jsx("option", { value: "French", children: e("french") }),
                b.jsx("option", { value: "German", children: e("german") }),
                b.jsx("option", { value: "Spanish", children: e("spanish") }),
                b.jsx("option", { value: "Italian", children: e("italian") }),
                b.jsx("option", {
                  value: "Brazilian",
                  children: e("brazilian"),
                }),
                b.jsx("option", { value: "Mexican", children: e("mexican") }),
                b.jsx("option", { value: "Russian", children: e("russian") }),
                b.jsx("option", { value: "Canadian", children: e("canadian") }),
                b.jsx("option", {
                  value: "Australian",
                  children: e("australian"),
                }),
                b.jsx("option", {
                  value: "New Zealander",
                  children: e("new_zealander"),
                }),
                b.jsx("option", {
                  value: "South African",
                  children: e("south_african"),
                }),
              ],
            }),
        ],
      }),
      b.jsxs(Ew, {
        center: [37.5665, 126.978],
        zoom: 2,
        style: { height: "calc(100% - 60px)", width: "100%" },
        children: [
          b.jsx(Nw, {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution:
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }),
          t.map((f) =>
            b.jsx(
              Cw,
              {
                position: [f.latitude, f.longitude],
                children: b.jsx(Ow, {
                  children: b.jsxs("div", {
                    children: [
                      b.jsx("h2", {
                        className: "text-lg font-bold",
                        children: f.name,
                      }),
                      b.jsxs("p", { children: [e("type"), ": ", e(f.type)] }),
                      "nationality" in f &&
                        b.jsxs("p", {
                          children: [e("nationality"), ": ", e(f.nationality)],
                        }),
                    ],
                  }),
                }),
              },
              f.id
            )
          ),
          r.map((f, p) => {
            const g = t.find((_) => _.id === f.source),
              v = t.find((_) => _.id === f.target);
            return g && v
              ? b.jsx(
                  Tw,
                  {
                    positions: [
                      [g.latitude, g.longitude],
                      [v.latitude, v.longitude],
                    ],
                    color: d(f.type),
                    weight: f.strength,
                    opacity: 0.5,
                  },
                  p
                )
              : null;
          }),
        ],
      }),
    ],
  });
};
function Pg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Rw } = Object.prototype,
  { getPrototypeOf: Oc } = Object,
  ra = ((e) => (t) => {
    const n = Rw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  zt = (e) => ((e = e.toLowerCase()), (t) => ra(t) === e),
  oa = (e) => (t) => typeof t === e,
  { isArray: Hi } = Array,
  qr = oa("undefined");
function Mw(e) {
  return (
    e !== null &&
    !qr(e) &&
    e.constructor !== null &&
    !qr(e.constructor) &&
    lt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Lg = zt("ArrayBuffer");
function Aw(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Lg(e.buffer)),
    t
  );
}
const Iw = oa("string"),
  lt = oa("function"),
  kg = oa("number"),
  sa = (e) => e !== null && typeof e == "object",
  bw = (e) => e === !0 || e === !1,
  ns = (e) => {
    if (ra(e) !== "object") return !1;
    const t = Oc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Bw = zt("Date"),
  Dw = zt("File"),
  Fw = zt("Blob"),
  jw = zt("FileList"),
  $w = (e) => sa(e) && lt(e.pipe),
  Uw = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (lt(e.append) &&
          ((t = ra(e)) === "formdata" ||
            (t === "object" &&
              lt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Zw = zt("URLSearchParams"),
  [Hw, Vw, Ww, Kw] = ["ReadableStream", "Request", "Response", "Headers"].map(
    zt
  ),
  Gw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function io(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Hi(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      u = a.length;
    let d;
    for (r = 0; r < u; r++) (d = a[r]), t.call(null, e[d], d, e);
  }
}
function Eg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const $n =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Cg = (e) => !qr(e) && e !== $n;
function Pu() {
  const { caseless: e } = (Cg(this) && this) || {},
    t = {},
    n = (r, s) => {
      const a = (e && Eg(t, s)) || s;
      ns(t[a]) && ns(r)
        ? (t[a] = Pu(t[a], r))
        : ns(r)
        ? (t[a] = Pu({}, r))
        : Hi(r)
        ? (t[a] = r.slice())
        : (t[a] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && io(arguments[r], n);
  return t;
}
const qw = (e, t, n, { allOwnKeys: r } = {}) => (
    io(
      t,
      (s, a) => {
        n && lt(s) ? (e[a] = Pg(s, n)) : (e[a] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Jw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Qw = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Yw = (e, t, n, r) => {
    let s, a, u;
    const d = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
        (u = s[a]), (!r || r(u, e, t)) && !d[u] && ((t[u] = e[u]), (d[u] = !0));
      e = n !== !1 && Oc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Xw = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  ex = (e) => {
    if (!e) return null;
    if (Hi(e)) return e;
    let t = e.length;
    if (!kg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  tx = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Oc(Uint8Array)),
  nx = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const a = s.value;
      t.call(e, a[0], a[1]);
    }
  },
  ix = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  rx = zt("HTMLFormElement"),
  ox = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  mh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  sx = zt("RegExp"),
  Tg = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    io(n, (s, a) => {
      let u;
      (u = t(s, a, e)) !== !1 && (r[a] = u || s);
    }),
      Object.defineProperties(e, r);
  },
  ax = (e) => {
    Tg(e, (t, n) => {
      if (lt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (lt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  lx = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((a) => {
          n[a] = !0;
        });
      };
    return Hi(e) ? r(e) : r(String(e).split(t)), n;
  },
  ux = () => {},
  cx = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  _l = "abcdefghijklmnopqrstuvwxyz",
  gh = "0123456789",
  Og = { DIGIT: gh, ALPHA: _l, ALPHA_DIGIT: _l + _l.toUpperCase() + gh },
  dx = (e = 16, t = Og.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function fx(e) {
  return !!(
    e &&
    lt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const hx = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (sa(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const a = Hi(r) ? [] : {};
            return (
              io(r, (u, d) => {
                const f = n(u, s + 1);
                !qr(f) && (a[d] = f);
              }),
              (t[s] = void 0),
              a
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  px = zt("AsyncFunction"),
  mx = (e) => e && (sa(e) || lt(e)) && lt(e.then) && lt(e.catch),
  Ng = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          $n.addEventListener(
            "message",
            ({ source: s, data: a }) => {
              s === $n && a === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), $n.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    lt($n.postMessage)
  ),
  gx =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind($n)
      : (typeof process < "u" && process.nextTick) || Ng,
  z = {
    isArray: Hi,
    isArrayBuffer: Lg,
    isBuffer: Mw,
    isFormData: Uw,
    isArrayBufferView: Aw,
    isString: Iw,
    isNumber: kg,
    isBoolean: bw,
    isObject: sa,
    isPlainObject: ns,
    isReadableStream: Hw,
    isRequest: Vw,
    isResponse: Ww,
    isHeaders: Kw,
    isUndefined: qr,
    isDate: Bw,
    isFile: Dw,
    isBlob: Fw,
    isRegExp: sx,
    isFunction: lt,
    isStream: $w,
    isURLSearchParams: Zw,
    isTypedArray: tx,
    isFileList: jw,
    forEach: io,
    merge: Pu,
    extend: qw,
    trim: Gw,
    stripBOM: Jw,
    inherits: Qw,
    toFlatObject: Yw,
    kindOf: ra,
    kindOfTest: zt,
    endsWith: Xw,
    toArray: ex,
    forEachEntry: nx,
    matchAll: ix,
    isHTMLForm: rx,
    hasOwnProperty: mh,
    hasOwnProp: mh,
    reduceDescriptors: Tg,
    freezeMethods: ax,
    toObjectSet: lx,
    toCamelCase: ox,
    noop: ux,
    toFiniteNumber: cx,
    findKey: Eg,
    global: $n,
    isContextDefined: Cg,
    ALPHABET: Og,
    generateString: dx,
    isSpecCompliantForm: fx,
    toJSONObject: hx,
    isAsyncFn: px,
    isThenable: mx,
    setImmediate: Ng,
    asap: gx,
  };
function J(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
z.inherits(J, Error, {
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
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const zg = J.prototype,
  Rg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Rg[e] = { value: e };
});
Object.defineProperties(J, Rg);
Object.defineProperty(zg, "isAxiosError", { value: !0 });
J.from = (e, t, n, r, s, a) => {
  const u = Object.create(zg);
  return (
    z.toFlatObject(
      e,
      u,
      function (f) {
        return f !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    J.call(u, e.message, t, n, r, s),
    (u.cause = e),
    (u.name = e.name),
    a && Object.assign(u, a),
    u
  );
};
const vx = null;
function Lu(e) {
  return z.isPlainObject(e) || z.isArray(e);
}
function Mg(e) {
  return z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function vh(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, a) {
          return (s = Mg(s)), !n && a ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function _x(e) {
  return z.isArray(e) && !e.some(Lu);
}
const yx = z.toFlatObject(z, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function aa(e, t, n) {
  if (!z.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = z.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (E, T) {
        return !z.isUndefined(T[E]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || g,
    a = n.dots,
    u = n.indexes,
    f = (n.Blob || (typeof Blob < "u" && Blob)) && z.isSpecCompliantForm(t);
  if (!z.isFunction(s)) throw new TypeError("visitor must be a function");
  function p(P) {
    if (P === null) return "";
    if (z.isDate(P)) return P.toISOString();
    if (!f && z.isBlob(P))
      throw new J("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(P) || z.isTypedArray(P)
      ? f && typeof Blob == "function"
        ? new Blob([P])
        : Buffer.from(P)
      : P;
  }
  function g(P, E, T) {
    let w = P;
    if (P && !T && typeof P == "object") {
      if (z.endsWith(E, "{}"))
        (E = r ? E : E.slice(0, -2)), (P = JSON.stringify(P));
      else if (
        (z.isArray(P) && _x(P)) ||
        ((z.isFileList(P) || z.endsWith(E, "[]")) && (w = z.toArray(P)))
      )
        return (
          (E = Mg(E)),
          w.forEach(function (x, O) {
            !(z.isUndefined(x) || x === null) &&
              t.append(
                u === !0 ? vh([E], O, a) : u === null ? E : E + "[]",
                p(x)
              );
          }),
          !1
        );
    }
    return Lu(P) ? !0 : (t.append(vh(T, E, a), p(P)), !1);
  }
  const v = [],
    _ = Object.assign(yx, {
      defaultVisitor: g,
      convertValue: p,
      isVisitable: Lu,
    });
  function k(P, E) {
    if (!z.isUndefined(P)) {
      if (v.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      v.push(P),
        z.forEach(P, function (w, y) {
          (!(z.isUndefined(w) || w === null) &&
            s.call(t, w, z.isString(y) ? y.trim() : y, E, _)) === !0 &&
            k(w, E ? E.concat(y) : [y]);
        }),
        v.pop();
    }
  }
  if (!z.isObject(e)) throw new TypeError("data must be an object");
  return k(e), t;
}
function _h(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Nc(e, t) {
  (this._pairs = []), e && aa(e, this, t);
}
const Ag = Nc.prototype;
Ag.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ag.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, _h);
      }
    : _h;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function wx(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ig(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || wx,
    s = n && n.serialize;
  let a;
  if (
    (s
      ? (a = s(t, n))
      : (a = z.isURLSearchParams(t) ? t.toString() : new Nc(t, n).toString(r)),
    a)
  ) {
    const u = e.indexOf("#");
    u !== -1 && (e = e.slice(0, u)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + a);
  }
  return e;
}
class yh {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    z.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const bg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  xx = typeof URLSearchParams < "u" ? URLSearchParams : Nc,
  Sx = typeof FormData < "u" ? FormData : null,
  Px = typeof Blob < "u" ? Blob : null,
  Lx = {
    isBrowser: !0,
    classes: { URLSearchParams: xx, FormData: Sx, Blob: Px },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  zc = typeof window < "u" && typeof document < "u",
  ku = (typeof navigator == "object" && navigator) || void 0,
  kx =
    zc &&
    (!ku || ["ReactNative", "NativeScript", "NS"].indexOf(ku.product) < 0),
  Ex =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Cx = (zc && window.location.href) || "http://localhost",
  Tx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: zc,
        hasStandardBrowserEnv: kx,
        hasStandardBrowserWebWorkerEnv: Ex,
        navigator: ku,
        origin: Cx,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  it = { ...Tx, ...Lx };
function Ox(e, t) {
  return aa(
    e,
    new it.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, a) {
          return it.isNode && z.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Nx(e) {
  return z
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function zx(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++) (a = n[r]), (t[a] = e[a]);
  return t;
}
function Bg(e) {
  function t(n, r, s, a) {
    let u = n[a++];
    if (u === "__proto__") return !0;
    const d = Number.isFinite(+u),
      f = a >= n.length;
    return (
      (u = !u && z.isArray(s) ? s.length : u),
      f
        ? (z.hasOwnProp(s, u) ? (s[u] = [s[u], r]) : (s[u] = r), !d)
        : ((!s[u] || !z.isObject(s[u])) && (s[u] = []),
          t(n, r, s[u], a) && z.isArray(s[u]) && (s[u] = zx(s[u])),
          !d)
    );
  }
  if (z.isFormData(e) && z.isFunction(e.entries)) {
    const n = {};
    return (
      z.forEachEntry(e, (r, s) => {
        t(Nx(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Rx(e, t, n) {
  if (z.isString(e))
    try {
      return (t || JSON.parse)(e), z.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const ro = {
  transitional: bg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        a = z.isObject(t);
      if ((a && z.isHTMLForm(t) && (t = new FormData(t)), z.isFormData(t)))
        return s ? JSON.stringify(Bg(t)) : t;
      if (
        z.isArrayBuffer(t) ||
        z.isBuffer(t) ||
        z.isStream(t) ||
        z.isFile(t) ||
        z.isBlob(t) ||
        z.isReadableStream(t)
      )
        return t;
      if (z.isArrayBufferView(t)) return t.buffer;
      if (z.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let d;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Ox(t, this.formSerializer).toString();
        if ((d = z.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return aa(
            d ? { "files[]": t } : t,
            f && new f(),
            this.formSerializer
          );
        }
      }
      return a || s ? (n.setContentType("application/json", !1), Rx(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ro.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (z.isResponse(t) || z.isReadableStream(t)) return t;
      if (t && z.isString(t) && ((r && !this.responseType) || s)) {
        const u = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (d) {
          if (u)
            throw d.name === "SyntaxError"
              ? J.from(d, J.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: it.classes.FormData, Blob: it.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ro.headers[e] = {};
});
const Mx = z.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ax = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (u) {
            (s = u.indexOf(":")),
              (n = u.substring(0, s).trim().toLowerCase()),
              (r = u.substring(s + 1).trim()),
              !(!n || (t[n] && Mx[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  wh = Symbol("internals");
function pr(e) {
  return e && String(e).trim().toLowerCase();
}
function is(e) {
  return e === !1 || e == null ? e : z.isArray(e) ? e.map(is) : String(e);
}
function Ix(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const bx = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function yl(e, t, n, r, s) {
  if (z.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!z.isString(t))) {
    if (z.isString(r)) return t.indexOf(r) !== -1;
    if (z.isRegExp(r)) return r.test(t);
  }
}
function Bx(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Dx(e, t) {
  const n = z.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, a, u) {
        return this[r].call(this, t, s, a, u);
      },
      configurable: !0,
    });
  });
}
class rt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function a(d, f, p) {
      const g = pr(f);
      if (!g) throw new Error("header name must be a non-empty string");
      const v = z.findKey(s, g);
      (!v || s[v] === void 0 || p === !0 || (p === void 0 && s[v] !== !1)) &&
        (s[v || f] = is(d));
    }
    const u = (d, f) => z.forEach(d, (p, g) => a(p, g, f));
    if (z.isPlainObject(t) || t instanceof this.constructor) u(t, n);
    else if (z.isString(t) && (t = t.trim()) && !bx(t)) u(Ax(t), n);
    else if (z.isHeaders(t)) for (const [d, f] of t.entries()) a(f, d, r);
    else t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = pr(t)), t)) {
      const r = z.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Ix(s);
        if (z.isFunction(n)) return n.call(this, s, r);
        if (z.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = pr(t)), t)) {
      const r = z.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || yl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function a(u) {
      if (((u = pr(u)), u)) {
        const d = z.findKey(r, u);
        d && (!n || yl(r, r[d], d, n)) && (delete r[d], (s = !0));
      }
    }
    return z.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || yl(this, this[a], a, t, !0)) && (delete this[a], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      z.forEach(this, (s, a) => {
        const u = z.findKey(r, a);
        if (u) {
          (n[u] = is(s)), delete n[a];
          return;
        }
        const d = t ? Bx(a) : String(a).trim();
        d !== a && delete n[a], (n[d] = is(s)), (r[d] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      z.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && z.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[wh] = this[wh] = { accessors: {} }).accessors,
      s = this.prototype;
    function a(u) {
      const d = pr(u);
      r[d] || (Dx(s, u), (r[d] = !0));
    }
    return z.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
rt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
z.reduceDescriptors(rt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
z.freezeMethods(rt);
function wl(e, t) {
  const n = this || ro,
    r = t || n,
    s = rt.from(r.headers);
  let a = r.data;
  return (
    z.forEach(e, function (d) {
      a = d.call(n, a, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    a
  );
}
function Dg(e) {
  return !!(e && e.__CANCEL__);
}
function Vi(e, t, n) {
  J.call(this, e ?? "canceled", J.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
z.inherits(Vi, J, { __CANCEL__: !0 });
function Fg(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new J(
          "Request failed with status code " + n.status,
          [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Fx(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function jx(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    a = 0,
    u;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const p = Date.now(),
        g = r[a];
      u || (u = p), (n[s] = f), (r[s] = p);
      let v = a,
        _ = 0;
      for (; v !== s; ) (_ += n[v++]), (v = v % e);
      if (((s = (s + 1) % e), s === a && (a = (a + 1) % e), p - u < t)) return;
      const k = g && p - g;
      return k ? Math.round((_ * 1e3) / k) : void 0;
    }
  );
}
function $x(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    a;
  const u = (p, g = Date.now()) => {
    (n = g), (s = null), a && (clearTimeout(a), (a = null)), e.apply(null, p);
  };
  return [
    (...p) => {
      const g = Date.now(),
        v = g - n;
      v >= r
        ? u(p, g)
        : ((s = p),
          a ||
            (a = setTimeout(() => {
              (a = null), u(s);
            }, r - v)));
    },
    () => s && u(s),
  ];
}
const zs = (e, t, n = 3) => {
    let r = 0;
    const s = jx(50, 250);
    return $x((a) => {
      const u = a.loaded,
        d = a.lengthComputable ? a.total : void 0,
        f = u - r,
        p = s(f),
        g = u <= d;
      r = u;
      const v = {
        loaded: u,
        total: d,
        progress: d ? u / d : void 0,
        bytes: f,
        rate: p || void 0,
        estimated: p && d && g ? (d - u) / p : void 0,
        event: a,
        lengthComputable: d != null,
        [t ? "download" : "upload"]: !0,
      };
      e(v);
    }, n);
  },
  xh = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Sh =
    (e) =>
    (...t) =>
      z.asap(() => e(...t)),
  Ux = it.hasStandardBrowserEnv
    ? (function () {
        const t =
            it.navigator && /(msie|trident)/i.test(it.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function s(a) {
          let u = a;
          return (
            t && (n.setAttribute("href", u), (u = n.href)),
            n.setAttribute("href", u),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = s(window.location.href)),
          function (u) {
            const d = z.isString(u) ? s(u) : u;
            return d.protocol === r.protocol && d.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Zx = it.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, a) {
          const u = [e + "=" + encodeURIComponent(t)];
          z.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()),
            z.isString(r) && u.push("path=" + r),
            z.isString(s) && u.push("domain=" + s),
            a === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Hx(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Vx(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function jg(e, t) {
  return e && !Hx(t) ? Vx(e, t) : t;
}
const Ph = (e) => (e instanceof rt ? { ...e } : e);
function Jn(e, t) {
  t = t || {};
  const n = {};
  function r(p, g, v) {
    return z.isPlainObject(p) && z.isPlainObject(g)
      ? z.merge.call({ caseless: v }, p, g)
      : z.isPlainObject(g)
      ? z.merge({}, g)
      : z.isArray(g)
      ? g.slice()
      : g;
  }
  function s(p, g, v) {
    if (z.isUndefined(g)) {
      if (!z.isUndefined(p)) return r(void 0, p, v);
    } else return r(p, g, v);
  }
  function a(p, g) {
    if (!z.isUndefined(g)) return r(void 0, g);
  }
  function u(p, g) {
    if (z.isUndefined(g)) {
      if (!z.isUndefined(p)) return r(void 0, p);
    } else return r(void 0, g);
  }
  function d(p, g, v) {
    if (v in t) return r(p, g);
    if (v in e) return r(void 0, p);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: d,
    headers: (p, g) => s(Ph(p), Ph(g), !0),
  };
  return (
    z.forEach(Object.keys(Object.assign({}, e, t)), function (g) {
      const v = f[g] || s,
        _ = v(e[g], t[g], g);
      (z.isUndefined(_) && v !== d) || (n[g] = _);
    }),
    n
  );
}
const $g = (e) => {
    const t = Jn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: a,
      headers: u,
      auth: d,
    } = t;
    (t.headers = u = rt.from(u)),
      (t.url = Ig(jg(t.baseURL, t.url), e.params, e.paramsSerializer)),
      d &&
        u.set(
          "Authorization",
          "Basic " +
            btoa(
              (d.username || "") +
                ":" +
                (d.password ? unescape(encodeURIComponent(d.password)) : "")
            )
        );
    let f;
    if (z.isFormData(n)) {
      if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv)
        u.setContentType(void 0);
      else if ((f = u.getContentType()) !== !1) {
        const [p, ...g] = f
          ? f
              .split(";")
              .map((v) => v.trim())
              .filter(Boolean)
          : [];
        u.setContentType([p || "multipart/form-data", ...g].join("; "));
      }
    }
    if (
      it.hasStandardBrowserEnv &&
      (r && z.isFunction(r) && (r = r(t)), r || (r !== !1 && Ux(t.url)))
    ) {
      const p = s && a && Zx.read(a);
      p && u.set(s, p);
    }
    return t;
  },
  Wx = typeof XMLHttpRequest < "u",
  Kx =
    Wx &&
    function (e) {
      return new Promise(function (n, r) {
        const s = $g(e);
        let a = s.data;
        const u = rt.from(s.headers).normalize();
        let { responseType: d, onUploadProgress: f, onDownloadProgress: p } = s,
          g,
          v,
          _,
          k,
          P;
        function E() {
          k && k(),
            P && P(),
            s.cancelToken && s.cancelToken.unsubscribe(g),
            s.signal && s.signal.removeEventListener("abort", g);
        }
        let T = new XMLHttpRequest();
        T.open(s.method.toUpperCase(), s.url, !0), (T.timeout = s.timeout);
        function w() {
          if (!T) return;
          const x = rt.from(
              "getAllResponseHeaders" in T && T.getAllResponseHeaders()
            ),
            M = {
              data:
                !d || d === "text" || d === "json"
                  ? T.responseText
                  : T.response,
              status: T.status,
              statusText: T.statusText,
              headers: x,
              config: e,
              request: T,
            };
          Fg(
            function (j) {
              n(j), E();
            },
            function (j) {
              r(j), E();
            },
            M
          ),
            (T = null);
        }
        "onloadend" in T
          ? (T.onloadend = w)
          : (T.onreadystatechange = function () {
              !T ||
                T.readyState !== 4 ||
                (T.status === 0 &&
                  !(T.responseURL && T.responseURL.indexOf("file:") === 0)) ||
                setTimeout(w);
            }),
          (T.onabort = function () {
            T &&
              (r(new J("Request aborted", J.ECONNABORTED, e, T)), (T = null));
          }),
          (T.onerror = function () {
            r(new J("Network Error", J.ERR_NETWORK, e, T)), (T = null);
          }),
          (T.ontimeout = function () {
            let O = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const M = s.transitional || bg;
            s.timeoutErrorMessage && (O = s.timeoutErrorMessage),
              r(
                new J(
                  O,
                  M.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                  e,
                  T
                )
              ),
              (T = null);
          }),
          a === void 0 && u.setContentType(null),
          "setRequestHeader" in T &&
            z.forEach(u.toJSON(), function (O, M) {
              T.setRequestHeader(M, O);
            }),
          z.isUndefined(s.withCredentials) ||
            (T.withCredentials = !!s.withCredentials),
          d && d !== "json" && (T.responseType = s.responseType),
          p && (([_, P] = zs(p, !0)), T.addEventListener("progress", _)),
          f &&
            T.upload &&
            (([v, k] = zs(f)),
            T.upload.addEventListener("progress", v),
            T.upload.addEventListener("loadend", k)),
          (s.cancelToken || s.signal) &&
            ((g = (x) => {
              T &&
                (r(!x || x.type ? new Vi(null, e, T) : x),
                T.abort(),
                (T = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(g),
            s.signal &&
              (s.signal.aborted ? g() : s.signal.addEventListener("abort", g)));
        const y = Fx(s.url);
        if (y && it.protocols.indexOf(y) === -1) {
          r(new J("Unsupported protocol " + y + ":", J.ERR_BAD_REQUEST, e));
          return;
        }
        T.send(a || null);
      });
    },
  Gx = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const a = function (p) {
        if (!s) {
          (s = !0), d();
          const g = p instanceof Error ? p : this.reason;
          r.abort(
            g instanceof J ? g : new Vi(g instanceof Error ? g.message : g)
          );
        }
      };
      let u =
        t &&
        setTimeout(() => {
          (u = null), a(new J(`timeout ${t} of ms exceeded`, J.ETIMEDOUT));
        }, t);
      const d = () => {
        e &&
          (u && clearTimeout(u),
          (u = null),
          e.forEach((p) => {
            p.unsubscribe
              ? p.unsubscribe(a)
              : p.removeEventListener("abort", a);
          }),
          (e = null));
      };
      e.forEach((p) => p.addEventListener("abort", a));
      const { signal: f } = r;
      return (f.unsubscribe = () => z.asap(d)), f;
    }
  },
  qx = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  Jx = async function* (e, t) {
    for await (const n of Qx(e)) yield* qx(n, t);
  },
  Qx = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Lh = (e, t, n, r) => {
    const s = Jx(e, t);
    let a = 0,
      u,
      d = (f) => {
        u || ((u = !0), r && r(f));
      };
    return new ReadableStream(
      {
        async pull(f) {
          try {
            const { done: p, value: g } = await s.next();
            if (p) {
              d(), f.close();
              return;
            }
            let v = g.byteLength;
            if (n) {
              let _ = (a += v);
              n(_);
            }
            f.enqueue(new Uint8Array(g));
          } catch (p) {
            throw (d(p), p);
          }
        },
        cancel(f) {
          return d(f), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  la =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Ug = la && typeof ReadableStream == "function",
  Yx =
    la &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Zg = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Xx =
    Ug &&
    Zg(() => {
      let e = !1;
      const t = new Request(it.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  kh = 64 * 1024,
  Eu = Ug && Zg(() => z.isReadableStream(new Response("").body)),
  Rs = { stream: Eu && ((e) => e.body) };
la &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Rs[t] &&
        (Rs[t] = z.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new J(
                `Response type '${t}' is not supported`,
                J.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const eS = async (e) => {
    if (e == null) return 0;
    if (z.isBlob(e)) return e.size;
    if (z.isSpecCompliantForm(e))
      return (
        await new Request(it.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (z.isArrayBufferView(e) || z.isArrayBuffer(e)) return e.byteLength;
    if ((z.isURLSearchParams(e) && (e = e + ""), z.isString(e)))
      return (await Yx(e)).byteLength;
  },
  tS = async (e, t) => {
    const n = z.toFiniteNumber(e.getContentLength());
    return n ?? eS(t);
  },
  nS =
    la &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: a,
        timeout: u,
        onDownloadProgress: d,
        onUploadProgress: f,
        responseType: p,
        headers: g,
        withCredentials: v = "same-origin",
        fetchOptions: _,
      } = $g(e);
      p = p ? (p + "").toLowerCase() : "text";
      let k = Gx([s, a && a.toAbortSignal()], u),
        P;
      const E =
        k &&
        k.unsubscribe &&
        (() => {
          k.unsubscribe();
        });
      let T;
      try {
        if (
          f &&
          Xx &&
          n !== "get" &&
          n !== "head" &&
          (T = await tS(g, r)) !== 0
        ) {
          let M = new Request(t, { method: "POST", body: r, duplex: "half" }),
            B;
          if (
            (z.isFormData(r) &&
              (B = M.headers.get("content-type")) &&
              g.setContentType(B),
            M.body)
          ) {
            const [j, U] = xh(T, zs(Sh(f)));
            r = Lh(M.body, kh, j, U);
          }
        }
        z.isString(v) || (v = v ? "include" : "omit");
        const w = "credentials" in Request.prototype;
        P = new Request(t, {
          ..._,
          signal: k,
          method: n.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: w ? v : void 0,
        });
        let y = await fetch(P);
        const x = Eu && (p === "stream" || p === "response");
        if (Eu && (d || (x && E))) {
          const M = {};
          ["status", "statusText", "headers"].forEach((ae) => {
            M[ae] = y[ae];
          });
          const B = z.toFiniteNumber(y.headers.get("content-length")),
            [j, U] = (d && xh(B, zs(Sh(d), !0))) || [];
          y = new Response(
            Lh(y.body, kh, j, () => {
              U && U(), E && E();
            }),
            M
          );
        }
        p = p || "text";
        let O = await Rs[z.findKey(Rs, p) || "text"](y, e);
        return (
          !x && E && E(),
          await new Promise((M, B) => {
            Fg(M, B, {
              data: O,
              headers: rt.from(y.headers),
              status: y.status,
              statusText: y.statusText,
              config: e,
              request: P,
            });
          })
        );
      } catch (w) {
        throw (
          (E && E(),
          w && w.name === "TypeError" && /fetch/i.test(w.message)
            ? Object.assign(new J("Network Error", J.ERR_NETWORK, e, P), {
                cause: w.cause || w,
              })
            : J.from(w, w && w.code, e, P))
        );
      }
    }),
  Cu = { http: vx, xhr: Kx, fetch: nS };
z.forEach(Cu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Eh = (e) => `- ${e}`,
  iS = (e) => z.isFunction(e) || e === null || e === !1,
  Hg = {
    getAdapter: (e) => {
      e = z.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let a = 0; a < t; a++) {
        n = e[a];
        let u;
        if (
          ((r = n),
          !iS(n) && ((r = Cu[(u = String(n)).toLowerCase()]), r === void 0))
        )
          throw new J(`Unknown adapter '${u}'`);
        if (r) break;
        s[u || "#" + a] = r;
      }
      if (!r) {
        const a = Object.entries(s).map(
          ([d, f]) =>
            `adapter ${d} ` +
            (f === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let u = t
          ? a.length > 1
            ? `since :
` +
              a.map(Eh).join(`
`)
            : " " + Eh(a[0])
          : "as no adapter specified";
        throw new J(
          "There is no suitable adapter to dispatch the request " + u,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Cu,
  };
function xl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Vi(null, e);
}
function Ch(e) {
  return (
    xl(e),
    (e.headers = rt.from(e.headers)),
    (e.data = wl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Hg.getAdapter(e.adapter || ro.adapter)(e).then(
      function (r) {
        return (
          xl(e),
          (r.data = wl.call(e, e.transformResponse, r)),
          (r.headers = rt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Dg(r) ||
            (xl(e),
            r &&
              r.response &&
              ((r.response.data = wl.call(e, e.transformResponse, r.response)),
              (r.response.headers = rt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Vg = "1.7.7",
  Rc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Rc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Th = {};
Rc.transitional = function (t, n, r) {
  function s(a, u) {
    return (
      "[Axios v" +
      Vg +
      "] Transitional option '" +
      a +
      "'" +
      u +
      (r ? ". " + r : "")
    );
  }
  return (a, u, d) => {
    if (t === !1)
      throw new J(
        s(u, " has been removed" + (n ? " in " + n : "")),
        J.ERR_DEPRECATED
      );
    return (
      n &&
        !Th[u] &&
        ((Th[u] = !0),
        console.warn(
          s(
            u,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(a, u, d) : !0
    );
  };
};
function rS(e, t, n) {
  if (typeof e != "object")
    throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s],
      u = t[a];
    if (u) {
      const d = e[a],
        f = d === void 0 || u(d, a, e);
      if (f !== !0)
        throw new J("option " + a + " must be " + f, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new J("Unknown option " + a, J.ERR_BAD_OPTION);
  }
}
const Tu = { assertOptions: rS, validators: Rc },
  un = Tu.validators;
class Hn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new yh(), response: new yh() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? a &&
              !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + a)
            : (r.stack = a);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Jn(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: a } = n;
    r !== void 0 &&
      Tu.assertOptions(
        r,
        {
          silentJSONParsing: un.transitional(un.boolean),
          forcedJSONParsing: un.transitional(un.boolean),
          clarifyTimeoutError: un.transitional(un.boolean),
        },
        !1
      ),
      s != null &&
        (z.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Tu.assertOptions(
              s,
              { encode: un.function, serialize: un.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let u = a && z.merge(a.common, a[n.method]);
    a &&
      z.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (P) => {
          delete a[P];
        }
      ),
      (n.headers = rt.concat(u, a));
    const d = [];
    let f = !0;
    this.interceptors.request.forEach(function (E) {
      (typeof E.runWhen == "function" && E.runWhen(n) === !1) ||
        ((f = f && E.synchronous), d.unshift(E.fulfilled, E.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function (E) {
      p.push(E.fulfilled, E.rejected);
    });
    let g,
      v = 0,
      _;
    if (!f) {
      const P = [Ch.bind(this), void 0];
      for (
        P.unshift.apply(P, d),
          P.push.apply(P, p),
          _ = P.length,
          g = Promise.resolve(n);
        v < _;

      )
        g = g.then(P[v++], P[v++]);
      return g;
    }
    _ = d.length;
    let k = n;
    for (v = 0; v < _; ) {
      const P = d[v++],
        E = d[v++];
      try {
        k = P(k);
      } catch (T) {
        E.call(this, T);
        break;
      }
    }
    try {
      g = Ch.call(this, k);
    } catch (P) {
      return Promise.reject(P);
    }
    for (v = 0, _ = p.length; v < _; ) g = g.then(p[v++], p[v++]);
    return g;
  }
  getUri(t) {
    t = Jn(this.defaults, t);
    const n = jg(t.baseURL, t.url);
    return Ig(n, t.params, t.paramsSerializer);
  }
}
z.forEach(["delete", "get", "head", "options"], function (t) {
  Hn.prototype[t] = function (n, r) {
    return this.request(
      Jn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
z.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (a, u, d) {
      return this.request(
        Jn(d || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: a,
          data: u,
        })
      );
    };
  }
  (Hn.prototype[t] = n()), (Hn.prototype[t + "Form"] = n(!0));
});
class Mc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (a) {
      n = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; ) r._listeners[a](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let a;
        const u = new Promise((d) => {
          r.subscribe(d), (a = d);
        }).then(s);
        return (
          (u.cancel = function () {
            r.unsubscribe(a);
          }),
          u
        );
      }),
      t(function (a, u, d) {
        r.reason || ((r.reason = new Vi(a, u, d)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Mc(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function oS(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function sS(e) {
  return z.isObject(e) && e.isAxiosError === !0;
}
const Ou = {
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
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ou).forEach(([e, t]) => {
  Ou[t] = e;
});
function Wg(e) {
  const t = new Hn(e),
    n = Pg(Hn.prototype.request, t);
  return (
    z.extend(n, Hn.prototype, t, { allOwnKeys: !0 }),
    z.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Wg(Jn(e, s));
    }),
    n
  );
}
const Pe = Wg(ro);
Pe.Axios = Hn;
Pe.CanceledError = Vi;
Pe.CancelToken = Mc;
Pe.isCancel = Dg;
Pe.VERSION = Vg;
Pe.toFormData = aa;
Pe.AxiosError = J;
Pe.Cancel = Pe.CanceledError;
Pe.all = function (t) {
  return Promise.all(t);
};
Pe.spread = oS;
Pe.isAxiosError = sS;
Pe.mergeConfig = Jn;
Pe.AxiosHeaders = rt;
Pe.formToJSON = (e) => Bg(z.isHTMLForm(e) ? new FormData(e) : e);
Pe.getAdapter = Hg.getAdapter;
Pe.HttpStatusCode = Ou;
Pe.default = Pe;
const aS = () => {
    const { t: e } = Ui(),
      [t, n] = A.useState({
        name: "",
        latitude: "",
        longitude: "",
        population: "",
        activities: "",
      }),
      r = (a) => {
        n({ ...t, [a.target.name]: a.target.value });
      },
      s = async (a) => {
        a.preventDefault();
        try {
          await Pe.post("/api/networks", t),
            alert(e("networkAddedSuccess")),
            n({
              name: "",
              latitude: "",
              longitude: "",
              population: "",
              activities: "",
            });
        } catch {
          alert(e("networkAddError"));
        }
      };
    return b.jsxs("div", {
      className: "container mx-auto mt-8 p-4",
      children: [
        b.jsx("h2", {
          className: "text-2xl font-bold mb-4",
          children: e("addNewNetwork"),
        }),
        b.jsxs("form", {
          onSubmit: s,
          className: "space-y-4",
          children: [
            b.jsxs("div", {
              children: [
                b.jsx("label", {
                  htmlFor: "name",
                  className: "block",
                  children: e("networkName"),
                }),
                b.jsx("input", {
                  type: "text",
                  id: "name",
                  name: "name",
                  value: t.name,
                  onChange: r,
                  required: !0,
                  className: "w-full p-2 border rounded",
                }),
              ],
            }),
            b.jsxs("div", {
              children: [
                b.jsx("label", {
                  htmlFor: "latitude",
                  className: "block",
                  children: e("latitude"),
                }),
                b.jsx("input", {
                  type: "number",
                  id: "latitude",
                  name: "latitude",
                  value: t.latitude,
                  onChange: r,
                  required: !0,
                  step: "any",
                  className: "w-full p-2 border rounded",
                }),
              ],
            }),
            b.jsxs("div", {
              children: [
                b.jsx("label", {
                  htmlFor: "longitude",
                  className: "block",
                  children: e("longitude"),
                }),
                b.jsx("input", {
                  type: "number",
                  id: "longitude",
                  name: "longitude",
                  value: t.longitude,
                  onChange: r,
                  required: !0,
                  step: "any",
                  className: "w-full p-2 border rounded",
                }),
              ],
            }),
            b.jsxs("div", {
              children: [
                b.jsx("label", {
                  htmlFor: "population",
                  className: "block",
                  children: e("population"),
                }),
                b.jsx("input", {
                  type: "number",
                  id: "population",
                  name: "population",
                  value: t.population,
                  onChange: r,
                  required: !0,
                  className: "w-full p-2 border rounded",
                }),
              ],
            }),
            b.jsxs("div", {
              children: [
                b.jsx("label", {
                  htmlFor: "activities",
                  className: "block",
                  children: e("activities"),
                }),
                b.jsx("textarea", {
                  id: "activities",
                  name: "activities",
                  value: t.activities,
                  onChange: r,
                  required: !0,
                  className: "w-full p-2 border rounded",
                }),
              ],
            }),
            b.jsx("button", {
              type: "submit",
              className: "bg-blue-500 text-white p-2 rounded hover:bg-blue-600",
              children: e("submitNetwork"),
            }),
          ],
        }),
      ],
    });
  },
  lS = () => {
    const { t: e } = Ui(),
      [t, n] = A.useState({ email: "", password: "" }),
      r = (a) => {
        n({ ...t, [a.target.name]: a.target.value });
      },
      s = async (a) => {
        a.preventDefault();
        try {
          const u = await Pe.post("/api/login", t);
          localStorage.setItem("token", u.data.token), alert(e("loginSuccess"));
        } catch {
          alert(e("loginError"));
        }
      };
    return b.jsxs("div", {
      className: "container mx-auto mt-8 p-4",
      children: [
        b.jsx("h2", {
          className: "text-2xl font-bold mb-4",
          children: e("login"),
        }),
        b.jsxs("form", {
          onSubmit: s,
          className: "space-y-4",
          children: [
            b.jsxs("div", {
              children: [
                b.jsx("label", {
                  htmlFor: "email",
                  className: "block",
                  children: e("email"),
                }),
                b.jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  value: t.email,
                  onChange: r,
                  required: !0,
                  className: "w-full p-2 border rounded",
                }),
              ],
            }),
            b.jsxs("div", {
              children: [
                b.jsx("label", {
                  htmlFor: "password",
                  className: "block",
                  children: e("password"),
                }),
                b.jsx("input", {
                  type: "password",
                  id: "password",
                  name: "password",
                  value: t.password,
                  onChange: r,
                  required: !0,
                  className: "w-full p-2 border rounded",
                }),
              ],
            }),
            b.jsx("button", {
              type: "submit",
              className: "bg-blue-500 text-white p-2 rounded hover:bg-blue-600",
              children: e("login"),
            }),
          ],
        }),
      ],
    });
  },
  uS = {
    type: "logger",
    log(e) {
      this.output("log", e);
    },
    warn(e) {
      this.output("warn", e);
    },
    error(e) {
      this.output("error", e);
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t);
    },
  };
class Ms {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = t || uS),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, s) {
    return s && !this.debug
      ? null
      : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t));
  }
  create(t) {
    return new Ms(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Ms(this.logger, t)
    );
  }
}
var Ft = new Ms();
class ua {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const s = this.observers[r].get(n) || 0;
        this.observers[r].set(n, s + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1;
      s < n;
      s++
    )
      r[s - 1] = arguments[s];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((u) => {
        let [d, f] = u;
        for (let p = 0; p < f; p++) d(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((u) => {
          let [d, f] = u;
          for (let p = 0; p < f; p++) d.apply(d, [t, ...r]);
        });
  }
}
const mr = () => {
    let e, t;
    const n = new Promise((r, s) => {
      (e = r), (t = s);
    });
    return (n.resolve = e), (n.reject = t), n;
  },
  Oh = (e) => (e == null ? "" : "" + e),
  cS = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  dS = /###/g,
  Nh = (e) => (e && e.indexOf("###") > -1 ? e.replace(dS, ".") : e),
  zh = (e) => !e || typeof e == "string",
  Or = (e, t, n) => {
    const r = typeof t != "string" ? t : t.split(".");
    let s = 0;
    for (; s < r.length - 1; ) {
      if (zh(e)) return {};
      const a = Nh(r[s]);
      !e[a] && n && (e[a] = new n()),
        Object.prototype.hasOwnProperty.call(e, a) ? (e = e[a]) : (e = {}),
        ++s;
    }
    return zh(e) ? {} : { obj: e, k: Nh(r[s]) };
  },
  Rh = (e, t, n) => {
    const { obj: r, k: s } = Or(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[s] = n;
      return;
    }
    let a = t[t.length - 1],
      u = t.slice(0, t.length - 1),
      d = Or(e, u, Object);
    for (; d.obj === void 0 && u.length; )
      (a = `${u[u.length - 1]}.${a}`),
        (u = u.slice(0, u.length - 1)),
        (d = Or(e, u, Object)),
        d && d.obj && typeof d.obj[`${d.k}.${a}`] < "u" && (d.obj = void 0);
    d.obj[`${d.k}.${a}`] = n;
  },
  fS = (e, t, n, r) => {
    const { obj: s, k: a } = Or(e, t, Object);
    (s[a] = s[a] || []), s[a].push(n);
  },
  As = (e, t) => {
    const { obj: n, k: r } = Or(e, t);
    if (n) return n[r];
  },
  hS = (e, t, n) => {
    const r = As(e, n);
    return r !== void 0 ? r : As(t, n);
  },
  Kg = (e, t, n) => {
    for (const r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in e
          ? typeof e[r] == "string" ||
            e[r] instanceof String ||
            typeof t[r] == "string" ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : Kg(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  di = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var pS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const mS = (e) =>
  typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => pS[t]) : e;
class gS {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const vS = [" ", ",", "?", "!", ";"],
  _S = new gS(20),
  yS = (e, t, n) => {
    (t = t || ""), (n = n || "");
    const r = vS.filter((u) => t.indexOf(u) < 0 && n.indexOf(u) < 0);
    if (r.length === 0) return !0;
    const s = _S.getRegExp(
      `(${r.map((u) => (u === "?" ? "\\?" : u)).join("|")})`
    );
    let a = !s.test(e);
    if (!a) {
      const u = e.indexOf(n);
      u > 0 && !s.test(e.substring(0, u)) && (a = !0);
    }
    return a;
  },
  Nu = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const r = t.split(n);
    let s = e;
    for (let a = 0; a < r.length; ) {
      if (!s || typeof s != "object") return;
      let u,
        d = "";
      for (let f = a; f < r.length; ++f)
        if ((f !== a && (d += n), (d += r[f]), (u = s[d]), u !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof u) > -1 &&
            f < r.length - 1
          )
            continue;
          a += f - a + 1;
          break;
        }
      s = u;
    }
    return s;
  },
  Is = (e) => (e && e.indexOf("_") > 0 ? e.replace("_", "-") : e);
class Mh extends ua {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const a =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      u =
        s.ignoreJSONStructure !== void 0
          ? s.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let d;
    t.indexOf(".") > -1
      ? (d = t.split("."))
      : ((d = [t, n]),
        r &&
          (Array.isArray(r)
            ? d.push(...r)
            : typeof r == "string" && a
            ? d.push(...r.split(a))
            : d.push(r)));
    const f = As(this.data, d);
    return (
      !f &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = d[0]), (n = d[1]), (r = d.slice(2).join("."))),
      f || !u || typeof r != "string"
        ? f
        : Nu(this.data && this.data[t] && this.data[t][n], r, a)
    );
  }
  addResource(t, n, r, s) {
    let a =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const u =
      a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let d = [t, n];
    r && (d = d.concat(u ? r.split(u) : r)),
      t.indexOf(".") > -1 && ((d = t.split(".")), (s = n), (n = d[1])),
      this.addNamespaces(n),
      Rh(this.data, d, s),
      a.silent || this.emit("added", t, n, r, s);
  }
  addResources(t, n, r) {
    let s =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const a in r)
      (typeof r[a] == "string" || Array.isArray(r[a])) &&
        this.addResource(t, n, a, r[a], { silent: !0 });
    s.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, s, a) {
    let u =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      d = [t, n];
    t.indexOf(".") > -1 && ((d = t.split(".")), (s = r), (r = n), (n = d[1])),
      this.addNamespaces(n);
    let f = As(this.data, d) || {};
    u.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      s ? Kg(f, r, a) : (f = { ...f, ...r }),
      Rh(this.data, d, f),
      u.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (s) => n[s] && Object.keys(n[s]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var Gg = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, s) {
    return (
      e.forEach((a) => {
        this.processors[a] && (t = this.processors[a].process(t, n, r, s));
      }),
      t
    );
  },
};
const Ah = {};
class bs extends ua {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      cS(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = Ft.create("translator"));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const s =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let a = n.ns || this.options.defaultNS || [];
    const u = r && t.indexOf(r) > -1,
      d =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !yS(t, r, s);
    if (u && !d) {
      const f = t.match(this.interpolator.nestingRegexp);
      if (f && f.length > 0) return { key: t, namespaces: a };
      const p = t.split(r);
      (r !== s || (r === s && this.options.ns.indexOf(p[0]) > -1)) &&
        (a = p.shift()),
        (t = p.join(s));
    }
    return typeof a == "string" && (a = [a]), { key: t, namespaces: a };
  }
  translate(t, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const s =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      a =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: u, namespaces: d } = this.extractFromKey(t[t.length - 1], n),
      f = d[d.length - 1],
      p = n.lng || this.language,
      g = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (p && p.toLowerCase() === "cimode") {
      if (g) {
        const O = n.nsSeparator || this.options.nsSeparator;
        return s
          ? {
              res: `${f}${O}${u}`,
              usedKey: u,
              exactUsedKey: u,
              usedLng: p,
              usedNS: f,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${f}${O}${u}`;
      }
      return s
        ? {
            res: u,
            usedKey: u,
            exactUsedKey: u,
            usedLng: p,
            usedNS: f,
            usedParams: this.getUsedParamsDetails(n),
          }
        : u;
    }
    const v = this.resolve(t, n);
    let _ = v && v.res;
    const k = (v && v.usedKey) || u,
      P = (v && v.exactUsedKey) || u,
      E = Object.prototype.toString.apply(_),
      T = ["[object Number]", "[object Function]", "[object RegExp]"],
      w = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      y = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      y &&
      _ &&
      typeof _ != "string" &&
      typeof _ != "boolean" &&
      typeof _ != "number" &&
      T.indexOf(E) < 0 &&
      !(typeof w == "string" && Array.isArray(_))
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const O = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(k, _, { ...n, ns: d })
          : `key '${u} (${this.language})' returned an object instead of string.`;
        return s
          ? ((v.res = O), (v.usedParams = this.getUsedParamsDetails(n)), v)
          : O;
      }
      if (a) {
        const O = Array.isArray(_),
          M = O ? [] : {},
          B = O ? P : k;
        for (const j in _)
          if (Object.prototype.hasOwnProperty.call(_, j)) {
            const U = `${B}${a}${j}`;
            (M[j] = this.translate(U, { ...n, joinArrays: !1, ns: d })),
              M[j] === U && (M[j] = _[j]);
          }
        _ = M;
      }
    } else if (y && typeof w == "string" && Array.isArray(_))
      (_ = _.join(w)), _ && (_ = this.extendTranslation(_, t, n, r));
    else {
      let O = !1,
        M = !1;
      const B = n.count !== void 0 && typeof n.count != "string",
        j = bs.hasDefaultValue(n),
        U = B ? this.pluralResolver.getSuffix(p, n.count, n) : "",
        ae =
          n.ordinal && B
            ? this.pluralResolver.getSuffix(p, n.count, { ordinal: !1 })
            : "",
        Q =
          B &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        re =
          (Q && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${U}`] ||
          n[`defaultValue${ae}`] ||
          n.defaultValue;
      !this.isValidLookup(_) && j && ((O = !0), (_ = re)),
        this.isValidLookup(_) || ((M = !0), (_ = u));
      const Ut =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          M
            ? void 0
            : _,
        Re = j && re !== _ && this.options.updateMissing;
      if (M || O || Re) {
        if (
          (this.logger.log(
            Re ? "updateKey" : "missingKey",
            p,
            f,
            u,
            Re ? re : _
          ),
          a)
        ) {
          const R = this.resolve(u, { ...n, keySeparator: !1 });
          R &&
            R.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let Zt = [];
        const ye = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && ye && ye[0])
          for (let R = 0; R < ye.length; R++) Zt.push(ye[R]);
        else
          this.options.saveMissingTo === "all"
            ? (Zt = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Zt.push(n.lng || this.language);
        const ft = (R, V, F) => {
          const K = j && F !== _ ? F : Ut;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(R, f, V, K, Re, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(R, f, V, K, Re, n),
            this.emit("missingKey", R, f, V, _);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && B
            ? Zt.forEach((R) => {
                const V = this.pluralResolver.getSuffixes(R, n);
                Q &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  V.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  V.push(`${this.options.pluralSeparator}zero`),
                  V.forEach((F) => {
                    ft([R], u + F, n[`defaultValue${F}`] || re);
                  });
              })
            : ft(Zt, u, re));
      }
      (_ = this.extendTranslation(_, t, n, v, r)),
        M &&
          _ === u &&
          this.options.appendNamespaceToMissingKey &&
          (_ = `${f}:${u}`),
        (M || O) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (_ = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${f}:${u}` : u,
                O ? _ : void 0
              ))
            : (_ = this.options.parseMissingKeyHandler(_)));
    }
    return s
      ? ((v.res = _), (v.usedParams = this.getUsedParamsDetails(n)), v)
      : _;
  }
  extendTranslation(t, n, r, s, a) {
    var u = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || s.usedLng,
        s.usedNS,
        s.usedKey,
        { resolved: s }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const p =
        typeof t == "string" &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let g;
      if (p) {
        const _ = t.match(this.interpolator.nestingRegexp);
        g = _ && _.length;
      }
      let v = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (v = { ...this.options.interpolation.defaultVariables, ...v }),
        (t = this.interpolator.interpolate(
          t,
          v,
          r.lng || this.language || s.usedLng,
          r
        )),
        p)
      ) {
        const _ = t.match(this.interpolator.nestingRegexp),
          k = _ && _.length;
        g < k && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        s &&
        s.res &&
        (r.lng = this.language || s.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var _ = arguments.length, k = new Array(_), P = 0;
                P < _;
                P++
              )
                k[P] = arguments[P];
              return a && a[0] === k[0] && !r.context
                ? (u.logger.warn(
                    `It seems you are nesting recursively key: ${k[0]} in key: ${n[0]}`
                  ),
                  null)
                : u.translate(...k, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const d = r.postProcess || this.options.postProcess,
      f = typeof d == "string" ? [d] : d;
    return (
      t != null &&
        f &&
        f.length &&
        r.applyPostProcessor !== !1 &&
        (t = Gg.handle(
          f,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...s,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      s,
      a,
      u,
      d;
    return (
      typeof t == "string" && (t = [t]),
      t.forEach((f) => {
        if (this.isValidLookup(r)) return;
        const p = this.extractFromKey(f, n),
          g = p.key;
        s = g;
        let v = p.namespaces;
        this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
        const _ = n.count !== void 0 && typeof n.count != "string",
          k =
            _ &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          P =
            n.context !== void 0 &&
            (typeof n.context == "string" || typeof n.context == "number") &&
            n.context !== "",
          E = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        v.forEach((T) => {
          this.isValidLookup(r) ||
            ((d = T),
            !Ah[`${E[0]}-${T}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(d) &&
              ((Ah[`${E[0]}-${T}`] = !0),
              this.logger.warn(
                `key "${s}" for languages "${E.join(
                  ", "
                )}" won't get resolved as namespace "${d}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            E.forEach((w) => {
              if (this.isValidLookup(r)) return;
              u = w;
              const y = [g];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(y, g, w, T, n);
              else {
                let O;
                _ && (O = this.pluralResolver.getSuffix(w, n.count, n));
                const M = `${this.options.pluralSeparator}zero`,
                  B = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (_ &&
                    (y.push(g + O),
                    n.ordinal &&
                      O.indexOf(B) === 0 &&
                      y.push(g + O.replace(B, this.options.pluralSeparator)),
                    k && y.push(g + M)),
                  P)
                ) {
                  const j = `${g}${this.options.contextSeparator}${n.context}`;
                  y.push(j),
                    _ &&
                      (y.push(j + O),
                      n.ordinal &&
                        O.indexOf(B) === 0 &&
                        y.push(j + O.replace(B, this.options.pluralSeparator)),
                      k && y.push(j + M));
                }
              }
              let x;
              for (; (x = y.pop()); )
                this.isValidLookup(r) ||
                  ((a = x), (r = this.getResource(w, T, x, n)));
            }));
        });
      }),
      { res: r, usedKey: s, exactUsedKey: a, usedLng: u, usedNS: d }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, s)
      : this.resourceStore.getResource(t, n, r, s);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = t.replace && typeof t.replace != "string";
    let s = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (s.count = t.count),
      this.options.interpolation.defaultVariables &&
        (s = { ...this.options.interpolation.defaultVariables, ...s }),
      !r)
    ) {
      s = { ...s };
      for (const a of n) delete s[a];
    }
    return s;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
const Sl = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class Ih {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Ft.create("languageUtils"));
  }
  getScriptPartFromCode(t) {
    if (((t = Is(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = Is(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((s) => s.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Sl(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Sl(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = Sl(r[2].toLowerCase()))),
        r.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const s = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const s = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(s)) return (n = s);
          n = this.options.supportedLngs.find((a) => {
            if (a === s) return a;
            if (
              !(a.indexOf("-") < 0 && s.indexOf("-") < 0) &&
              ((a.indexOf("-") > 0 &&
                s.indexOf("-") < 0 &&
                a.substring(0, a.indexOf("-")) === s) ||
                (a.indexOf(s) === 0 && s.length > 1))
            )
              return a;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == "function" && (t = t(n)),
      typeof t == "string" && (t = [t]),
      Array.isArray(t))
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      s = [],
      a = (u) => {
        u &&
          (this.isSupportedCode(u)
            ? s.push(u)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${u}`
              ));
      };
    return (
      typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            a(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            a(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            a(this.getLanguagePartFromCode(t)))
        : typeof t == "string" && a(this.formatLanguageCode(t)),
      r.forEach((u) => {
        s.indexOf(u) < 0 && a(this.formatLanguageCode(u));
      }),
      s
    );
  }
}
let wS = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  xS = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
        ? 1
        : e == 2
        ? 2
        : e % 100 >= 3 && e % 100 <= 10
        ? 3
        : e % 100 >= 11
        ? 4
        : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) =>
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) =>
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
        ? 1
        : e % 100 > 10 && e % 100 < 20
        ? 2
        : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) =>
      e % 100 == 1
        ? 1
        : e % 100 == 2
        ? 2
        : e % 100 == 3 || e % 100 == 4
        ? 3
        : 0,
    22: (e) =>
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
  };
const SS = ["v1", "v2", "v3"],
  PS = ["v4"],
  bh = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  LS = () => {
    const e = {};
    return (
      wS.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: xS[t.fc] };
        });
      }),
      e
    );
  };
class kS {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = Ft.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        PS.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = LS()),
      (this.pluralRulesCache = {});
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const r = Is(t === "dev" ? "en" : t),
          s = n.ordinal ? "ordinal" : "cardinal",
          a = JSON.stringify({ cleanedCode: r, type: s });
        if (a in this.pluralRulesCache) return this.pluralRulesCache[a];
        const u = new Intl.PluralRules(r, { type: s });
        return (this.pluralRulesCache[a] = u), u;
      } catch {
        return;
      }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((s) => `${n}${s}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((s, a) => bh[s] - bh[a])
            .map(
              (s) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${s}`
            )
        : r.numbers.map((s) => this.getSuffix(t, s, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(t, r);
    return s
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ""
          }${s.select(n)}`
        : this.getSuffixRetroCompatible(s, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let s = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (s === 2 ? (s = "plural") : s === 1 && (s = ""));
    const a = () =>
      this.options.prepend && s.toString()
        ? this.options.prepend + s.toString()
        : s.toString();
    return this.options.compatibilityJSON === "v1"
      ? s === 1
        ? ""
        : typeof s == "number"
        ? `_plural_${s.toString()}`
        : a()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? a()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !SS.includes(this.options.compatibilityJSON);
  }
}
const Bh = function (e, t, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      a = hS(e, t, n);
    return (
      !a &&
        s &&
        typeof n == "string" &&
        ((a = Nu(e, n, r)), a === void 0 && (a = Nu(t, n, r))),
      a
    );
  },
  Pl = (e) => e.replace(/\$/g, "$$$$");
class ES {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Ft.create("interpolator")),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: s,
      prefix: a,
      prefixEscaped: u,
      suffix: d,
      suffixEscaped: f,
      formatSeparator: p,
      unescapeSuffix: g,
      unescapePrefix: v,
      nestingPrefix: _,
      nestingPrefixEscaped: k,
      nestingSuffix: P,
      nestingSuffixEscaped: E,
      nestingOptionsSeparator: T,
      maxReplaces: w,
      alwaysFormat: y,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : mS),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = s !== void 0 ? s : !1),
      (this.prefix = a ? di(a) : u || "{{"),
      (this.suffix = d ? di(d) : f || "}}"),
      (this.formatSeparator = p || ","),
      (this.unescapePrefix = g ? "" : v || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : g || ""),
      (this.nestingPrefix = _ ? di(_) : k || di("$t(")),
      (this.nestingSuffix = P ? di(P) : E || di(")")),
      (this.nestingOptionsSeparator = T || ","),
      (this.maxReplaces = w || 1e3),
      (this.alwaysFormat = y !== void 0 ? y : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, "g");
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, n, r, s) {
    let a, u, d;
    const f =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      p = (k) => {
        if (k.indexOf(this.formatSeparator) < 0) {
          const w = Bh(
            n,
            f,
            k,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(w, void 0, r, { ...s, ...n, interpolationkey: k })
            : w;
        }
        const P = k.split(this.formatSeparator),
          E = P.shift().trim(),
          T = P.join(this.formatSeparator).trim();
        return this.format(
          Bh(
            n,
            f,
            E,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          T,
          r,
          { ...s, ...n, interpolationkey: E }
        );
      };
    this.resetRegExp();
    const g =
        (s && s.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      v =
        s && s.interpolation && s.interpolation.skipOnVariables !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (k) => Pl(k) },
        {
          regex: this.regexp,
          safeValue: (k) => (this.escapeValue ? Pl(this.escape(k)) : Pl(k)),
        },
      ].forEach((k) => {
        for (d = 0; (a = k.regex.exec(t)); ) {
          const P = a[1].trim();
          if (((u = p(P)), u === void 0))
            if (typeof g == "function") {
              const T = g(t, a, s);
              u = typeof T == "string" ? T : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, P)) u = "";
            else if (v) {
              u = a[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${P} for interpolating ${t}`
              ),
                (u = "");
          else typeof u != "string" && !this.useRawValueToEscape && (u = Oh(u));
          const E = k.safeValue(u);
          if (
            ((t = t.replace(a[0], E)),
            v
              ? ((k.regex.lastIndex += u.length),
                (k.regex.lastIndex -= a[0].length))
              : (k.regex.lastIndex = 0),
            d++,
            d >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s,
      a,
      u;
    const d = (f, p) => {
      const g = this.nestingOptionsSeparator;
      if (f.indexOf(g) < 0) return f;
      const v = f.split(new RegExp(`${g}[ ]*{`));
      let _ = `{${v[1]}`;
      (f = v[0]), (_ = this.interpolate(_, u));
      const k = _.match(/'/g),
        P = _.match(/"/g);
      ((k && k.length % 2 === 0 && !P) || P.length % 2 !== 0) &&
        (_ = _.replace(/'/g, '"'));
      try {
        (u = JSON.parse(_)), p && (u = { ...p, ...u });
      } catch (E) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${f}`,
            E
          ),
          `${f}${g}${_}`
        );
      }
      return (
        u.defaultValue &&
          u.defaultValue.indexOf(this.prefix) > -1 &&
          delete u.defaultValue,
        f
      );
    };
    for (; (s = this.nestingRegexp.exec(t)); ) {
      let f = [];
      (u = { ...r }),
        (u = u.replace && typeof u.replace != "string" ? u.replace : u),
        (u.applyPostProcessor = !1),
        delete u.defaultValue;
      let p = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const g = s[1].split(this.formatSeparator).map((v) => v.trim());
        (s[1] = g.shift()), (f = g), (p = !0);
      }
      if (
        ((a = n(d.call(this, s[1].trim(), u), u)),
        a && s[0] === t && typeof a != "string")
      )
        return a;
      typeof a != "string" && (a = Oh(a)),
        a ||
          (this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`),
          (a = "")),
        p &&
          (a = f.reduce(
            (g, v) =>
              this.format(g, v, r.lng, { ...r, interpolationkey: s[1].trim() }),
            a.trim()
          )),
        (t = t.replace(s[0], a)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
const CS = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
      const r = e.split("(");
      t = r[0].toLowerCase().trim();
      const s = r[1].substring(0, r[1].length - 1);
      t === "currency" && s.indexOf(":") < 0
        ? n.currency || (n.currency = s.trim())
        : t === "relativetime" && s.indexOf(":") < 0
        ? n.range || (n.range = s.trim())
        : s.split(";").forEach((u) => {
            if (u) {
              const [d, ...f] = u.split(":"),
                p = f
                  .join(":")
                  .trim()
                  .replace(/^'+|'+$/g, ""),
                g = d.trim();
              n[g] || (n[g] = p),
                p === "false" && (n[g] = !1),
                p === "true" && (n[g] = !0),
                isNaN(p) || (n[g] = parseInt(p, 10));
            }
          });
    }
    return { formatName: t, formatOptions: n };
  },
  fi = (e) => {
    const t = {};
    return (n, r, s) => {
      let a = s;
      s &&
        s.interpolationkey &&
        s.formatParams &&
        s.formatParams[s.interpolationkey] &&
        s[s.interpolationkey] &&
        (a = { ...a, [s.interpolationkey]: void 0 });
      const u = r + JSON.stringify(a);
      let d = t[u];
      return d || ((d = e(Is(r), s)), (t[u] = d)), d(n);
    };
  };
class TS {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Ft.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: fi((n, r) => {
          const s = new Intl.NumberFormat(n, { ...r });
          return (a) => s.format(a);
        }),
        currency: fi((n, r) => {
          const s = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (a) => s.format(a);
        }),
        datetime: fi((n, r) => {
          const s = new Intl.DateTimeFormat(n, { ...r });
          return (a) => s.format(a);
        }),
        relativetime: fi((n, r) => {
          const s = new Intl.RelativeTimeFormat(n, { ...r });
          return (a) => s.format(a, r.range || "day");
        }),
        list: fi((n, r) => {
          const s = new Intl.ListFormat(n, { ...r });
          return (a) => s.format(a);
        }),
      }),
      this.init(t);
  }
  init(t) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = r.formatSeparator
      ? r.formatSeparator
      : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = fi(n);
  }
  format(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const a = n.split(this.formatSeparator);
    if (
      a.length > 1 &&
      a[0].indexOf("(") > 1 &&
      a[0].indexOf(")") < 0 &&
      a.find((d) => d.indexOf(")") > -1)
    ) {
      const d = a.findIndex((f) => f.indexOf(")") > -1);
      a[0] = [a[0], ...a.splice(1, d)].join(this.formatSeparator);
    }
    return a.reduce((d, f) => {
      const { formatName: p, formatOptions: g } = CS(f);
      if (this.formats[p]) {
        let v = d;
        try {
          const _ =
              (s && s.formatParams && s.formatParams[s.interpolationkey]) || {},
            k = _.locale || _.lng || s.locale || s.lng || r;
          v = this.formats[p](d, k, { ...g, ...s, ..._ });
        } catch (_) {
          this.logger.warn(_);
        }
        return v;
      } else this.logger.warn(`there was no format function for ${p}`);
      return d;
    }, t);
  }
}
const OS = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class NS extends ua {
  constructor(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = s),
      (this.logger = Ft.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = s.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
      (this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, s.backend, s);
  }
  queueLoad(t, n, r, s) {
    const a = {},
      u = {},
      d = {},
      f = {};
    return (
      t.forEach((p) => {
        let g = !0;
        n.forEach((v) => {
          const _ = `${p}|${v}`;
          !r.reload && this.store.hasResourceBundle(p, v)
            ? (this.state[_] = 2)
            : this.state[_] < 0 ||
              (this.state[_] === 1
                ? u[_] === void 0 && (u[_] = !0)
                : ((this.state[_] = 1),
                  (g = !1),
                  u[_] === void 0 && (u[_] = !0),
                  a[_] === void 0 && (a[_] = !0),
                  f[v] === void 0 && (f[v] = !0)));
        }),
          g || (d[p] = !0);
      }),
      (Object.keys(a).length || Object.keys(u).length) &&
        this.queue.push({
          pending: u,
          pendingCount: Object.keys(u).length,
          loaded: {},
          errors: [],
          callback: s,
        }),
      {
        toLoad: Object.keys(a),
        pending: Object.keys(u),
        toLoadLanguages: Object.keys(d),
        toLoadNamespaces: Object.keys(f),
      }
    );
  }
  loaded(t, n, r) {
    const s = t.split("|"),
      a = s[0],
      u = s[1];
    n && this.emit("failedLoading", a, u, n),
      !n &&
        r &&
        this.store.addResourceBundle(a, u, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0);
    const d = {};
    this.queue.forEach((f) => {
      fS(f.loaded, [a], u),
        OS(f, t),
        n && f.errors.push(n),
        f.pendingCount === 0 &&
          !f.done &&
          (Object.keys(f.loaded).forEach((p) => {
            d[p] || (d[p] = {});
            const g = f.loaded[p];
            g.length &&
              g.forEach((v) => {
                d[p][v] === void 0 && (d[p][v] = !0);
              });
          }),
          (f.done = !0),
          f.errors.length ? f.callback(f.errors) : f.callback());
    }),
      this.emit("loaded", d),
      (this.queue = this.queue.filter((f) => !f.done));
  }
  read(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      a =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      u = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return u(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: s,
        wait: a,
        callback: u,
      });
      return;
    }
    this.readingCalls++;
    const d = (p, g) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const v = this.waitingReads.shift();
          this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback);
        }
        if (p && g && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, s + 1, a * 2, u);
          }, a);
          return;
        }
        u(p, g);
      },
      f = this.backend[r].bind(this.backend);
    if (f.length === 2) {
      try {
        const p = f(t, n);
        p && typeof p.then == "function"
          ? p.then((g) => d(null, g)).catch(d)
          : d(null, p);
      } catch (p) {
        d(p);
      }
      return;
    }
    return f(t, n, d);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        s && s()
      );
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)),
      typeof n == "string" && (n = [n]);
    const a = this.queueLoad(t, n, r, s);
    if (!a.toLoad.length) return a.pending.length || s(), null;
    a.toLoad.forEach((u) => {
      this.loadOne(u);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"),
      s = r[0],
      a = r[1];
    this.read(s, a, "read", void 0, void 0, (u, d) => {
      u &&
        this.logger.warn(
          `${n}loading namespace ${a} for language ${s} failed`,
          u
        ),
        !u &&
          d &&
          this.logger.log(`${n}loaded namespace ${a} for language ${s}`, d),
        this.loaded(t, u, d);
    });
  }
  saveMissing(t, n, r, s, a) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      d =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const f = { ...u, isUpdate: a },
          p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let g;
            p.length === 5 ? (g = p(t, n, r, s, f)) : (g = p(t, n, r, s)),
              g && typeof g.then == "function"
                ? g.then((v) => d(null, v)).catch(d)
                : d(null, g);
          } catch (g) {
            d(g);
          }
        else p(t, n, r, s, d, f);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, s);
    }
  }
}
const Dh = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {};
      if (
        (typeof e[1] == "object" && (t = e[1]),
        typeof e[1] == "string" && (t.defaultValue = e[1]),
        typeof e[2] == "string" && (t.tDescription = e[2]),
        typeof e[2] == "object" || typeof e[3] == "object")
      ) {
        const n = e[3] || e[2];
        Object.keys(n).forEach((r) => {
          t[r] = n[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  Fh = (e) => (
    typeof e.ns == "string" && (e.ns = [e.ns]),
    typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  ),
  Uo = () => {},
  zS = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class Jr extends ua {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Fh(t)),
      (this.services = {}),
      (this.logger = Ft),
      (this.modules = { external: [] }),
      zS(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == "string"
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const s = Dh();
    (this.options = { ...s, ...this.options, ...Fh(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...s.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    const a = (g) => (g ? (typeof g == "function" ? new g() : g) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Ft.init(a(this.modules.logger), this.options)
        : Ft.init(null, this.options);
      let g;
      this.modules.formatter
        ? (g = this.modules.formatter)
        : typeof Intl < "u" && (g = TS);
      const v = new Ih(this.options);
      this.store = new Mh(this.options.resources, this.options);
      const _ = this.services;
      (_.logger = Ft),
        (_.resourceStore = this.store),
        (_.languageUtils = v),
        (_.pluralResolver = new kS(v, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        g &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === s.interpolation.format) &&
          ((_.formatter = a(g)),
          _.formatter.init(_, this.options),
          (this.options.interpolation.format = _.formatter.format.bind(
            _.formatter
          ))),
        (_.interpolator = new ES(this.options)),
        (_.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (_.backendConnector = new NS(
          a(this.modules.backend),
          _.resourceStore,
          _,
          this.options
        )),
        _.backendConnector.on("*", function (k) {
          for (
            var P = arguments.length, E = new Array(P > 1 ? P - 1 : 0), T = 1;
            T < P;
            T++
          )
            E[T - 1] = arguments[T];
          t.emit(k, ...E);
        }),
        this.modules.languageDetector &&
          ((_.languageDetector = a(this.modules.languageDetector)),
          _.languageDetector.init &&
            _.languageDetector.init(_, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((_.i18nFormat = a(this.modules.i18nFormat)),
          _.i18nFormat.init && _.i18nFormat.init(this)),
        (this.translator = new bs(this.services, this.options)),
        this.translator.on("*", function (k) {
          for (
            var P = arguments.length, E = new Array(P > 1 ? P - 1 : 0), T = 1;
            T < P;
            T++
          )
            E[T - 1] = arguments[T];
          t.emit(k, ...E);
        }),
        this.modules.external.forEach((k) => {
          k.init && k.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Uo),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const g = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((g) => {
        this[g] = function () {
          return t.store[g](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((g) => {
        this[g] = function () {
          return t.store[g](...arguments), t;
        };
      });
    const f = mr(),
      p = () => {
        const g = (v, _) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            f.resolve(_),
            r(v, _);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return g(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, g);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? p()
        : setTimeout(p, 0),
      f
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Uo;
    const s = typeof t == "string" ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        s &&
        s.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const a = [],
        u = (d) => {
          if (!d || d === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(d).forEach((p) => {
            p !== "cimode" && a.indexOf(p) < 0 && a.push(p);
          });
        };
      s
        ? u(s)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((f) => u(f)),
        this.options.preload && this.options.preload.forEach((d) => u(d)),
        this.services.backendConnector.load(a, this.options.ns, (d) => {
          !d &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(d);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const s = mr();
    return (
      typeof t == "function" && ((r = t), (t = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Uo),
      this.services.backendConnector.reload(t, n, (a) => {
        s.resolve(), r(a);
      }),
      s
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && Gg.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const s = mr();
    this.emit("languageChanging", t);
    const a = (f) => {
        (this.language = f),
          (this.languages = this.services.languageUtils.toResolveHierarchy(f)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(f);
      },
      u = (f, p) => {
        p
          ? (a(p),
            this.translator.changeLanguage(p),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", p),
            this.logger.log("languageChanged", p))
          : (this.isLanguageChangingTo = void 0),
          s.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(f, function () {
              return r.t(...arguments);
            });
      },
      d = (f) => {
        !t && !f && this.services.languageDetector && (f = []);
        const p =
          typeof f == "string"
            ? f
            : this.services.languageUtils.getBestMatchFromCodes(f);
        p &&
          (this.language || a(p),
          this.translator.language || this.translator.changeLanguage(p),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(p)),
          this.loadResources(p, (g) => {
            u(g, p);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? d(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(d)
          : this.services.languageDetector.detect(d)
        : d(t),
      s
    );
  }
  getFixedT(t, n, r) {
    var s = this;
    const a = function (u, d) {
      let f;
      if (typeof d != "object") {
        for (
          var p = arguments.length, g = new Array(p > 2 ? p - 2 : 0), v = 2;
          v < p;
          v++
        )
          g[v - 2] = arguments[v];
        f = s.options.overloadTranslationOptionHandler([u, d].concat(g));
      } else f = { ...d };
      (f.lng = f.lng || a.lng),
        (f.lngs = f.lngs || a.lngs),
        (f.ns = f.ns || a.ns),
        f.keyPrefix !== "" && (f.keyPrefix = f.keyPrefix || r || a.keyPrefix);
      const _ = s.options.keySeparator || ".";
      let k;
      return (
        f.keyPrefix && Array.isArray(u)
          ? (k = u.map((P) => `${f.keyPrefix}${_}${P}`))
          : (k = f.keyPrefix ? `${f.keyPrefix}${_}${u}` : u),
        s.t(k, f)
      );
    };
    return (
      typeof t == "string" ? (a.lng = t) : (a.lngs = t),
      (a.ns = n),
      (a.keyPrefix = r),
      a
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      s = this.options ? this.options.fallbackLng : !1,
      a = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const u = (d, f) => {
      const p = this.services.backendConnector.state[`${d}|${f}`];
      return p === -1 || p === 0 || p === 2;
    };
    if (n.precheck) {
      const d = n.precheck(this, u);
      if (d !== void 0) return d;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (u(r, t) && (!s || u(a, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = mr();
    return this.options.ns
      ? (typeof t == "string" && (t = [t]),
        t.forEach((s) => {
          this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
        }),
        this.loadResources((s) => {
          r.resolve(), n && n(s);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = mr();
    typeof t == "string" && (t = [t]);
    const s = this.options.preload || [],
      a = t.filter(
        (u) =>
          s.indexOf(u) < 0 && this.services.languageUtils.isSupportedCode(u)
      );
    return a.length
      ? ((this.options.preload = s.concat(a)),
        this.loadResources((u) => {
          r.resolve(), n && n(u);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r = (this.services && this.services.languageUtils) || new Ih(Dh());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new Jr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Uo;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const s = { ...this.options, ...t, isClone: !0 },
      a = new Jr(s);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (a.logger = a.logger.clone(t)),
      ["store", "services", "language"].forEach((d) => {
        a[d] = this[d];
      }),
      (a.services = { ...this.services }),
      (a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }),
      r &&
        ((a.store = new Mh(this.store.data, s)),
        (a.services.resourceStore = a.store)),
      (a.translator = new bs(a.services, s)),
      a.translator.on("*", function (d) {
        for (
          var f = arguments.length, p = new Array(f > 1 ? f - 1 : 0), g = 1;
          g < f;
          g++
        )
          p[g - 1] = arguments[g];
        a.emit(d, ...p);
      }),
      a.init(s, n),
      (a.translator.options = s),
      (a.translator.backendConnector.services.utils = {
        hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
      }),
      a
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const He = Jr.createInstance();
He.createInstance = Jr.createInstance;
He.createInstance;
He.dir;
He.init;
He.loadResources;
He.reloadResources;
He.use;
He.changeLanguage;
He.getFixedT;
He.t;
He.exists;
He.setDefaultNamespace;
He.hasLoadedNamespace;
He.loadNamespaces;
He.loadLanguages;
const RS = "MigNetVu: A global network of migrants",
  MS = "Add Network",
  AS = "Login",
  IS = "Population",
  bS = "Activities",
  BS = "All rights reserved",
  DS = "Add New Network",
  FS = "Network Name",
  jS = "Latitude",
  $S = "Longitude",
  US = "Submit Network",
  ZS = "Network added successfully",
  HS = "Error adding network",
  VS = "Email",
  WS = "Password",
  KS = "Logged in successfully",
  GS = "Login failed",
  qS = "Related Networks",
  JS = "All",
  QS = "Individual",
  YS = "Organization",
  XS = "Region",
  eP = "All Nationalities",
  tP = "Korea",
  nP = "United States",
  iP = "Japan",
  rP = "China",
  oP = "Vietnam",
  sP = "India",
  aP = "United Kingdom",
  lP = "France",
  uP = "Germany",
  cP = "Spain",
  dP = "Italy",
  fP = "Brazil",
  hP = "Mexico",
  pP = "Russia",
  mP = "Canada",
  gP = "Australia",
  vP = "New Zealand",
  _P = "South Africa",
  yP = "Type",
  wP = "Nationality",
  xP = {
    appName: RS,
    addNetwork: MS,
    login: AS,
    population: IS,
    activities: bS,
    allRightsReserved: BS,
    addNewNetwork: DS,
    networkName: FS,
    latitude: jS,
    longitude: $S,
    submitNetwork: US,
    networkAddedSuccess: ZS,
    networkAddError: HS,
    email: VS,
    password: WS,
    loginSuccess: KS,
    loginError: GS,
    relatedNetworks: qS,
    all: JS,
    individual: QS,
    organization: YS,
    region: XS,
    allNationalities: eP,
    korean: tP,
    american: nP,
    japanese: iP,
    chinese: rP,
    vietnamese: oP,
    indian: sP,
    british: aP,
    french: lP,
    german: uP,
    spanish: cP,
    italian: dP,
    brazilian: fP,
    mexican: hP,
    russian: pP,
    canadian: mP,
    australian: gP,
    new_zealander: vP,
    south_african: _P,
    type: yP,
    nationality: wP,
  },
  SP = "MigNetVu: 전세계 이주민의 네트워크",
  PP = "네트워크 추가",
  LP = "로그인",
  kP = "인구",
  EP = "활동",
  CP = "모든 권리 보유",
  TP = "새 네트워크 추가",
  OP = "네트워크 이름",
  NP = "위도",
  zP = "경도",
  RP = "네트워크 제출",
  MP = "네트워크가 성공적으로 추가되었습니다",
  AP = "네트워크 추가 중 오류 발생",
  IP = "이메일",
  bP = "비밀번호",
  BP = "로그인 성공",
  DP = "로그인 실패",
  FP = "관련 네트워크",
  jP = "전체",
  $P = "개인",
  UP = "단체",
  ZP = "지역",
  HP = "모든 국적",
  VP = "한국인",
  WP = "미국인",
  KP = "일본",
  GP = "중국",
  qP = "베트남",
  JP = "인도",
  QP = "영국",
  YP = "프랑스",
  XP = "독일",
  eL = "스페인",
  tL = "이탈리아",
  nL = "브라질",
  iL = "멕시코",
  rL = "러시아",
  oL = "캐나다",
  sL = "호주",
  aL = "뉴질랜드",
  lL = "남아프리카",
  uL = "유형",
  cL = "국적",
  dL = {
    appName: SP,
    addNetwork: PP,
    login: LP,
    population: kP,
    activities: EP,
    allRightsReserved: CP,
    addNewNetwork: TP,
    networkName: OP,
    latitude: NP,
    longitude: zP,
    submitNetwork: RP,
    networkAddedSuccess: MP,
    networkAddError: AP,
    email: IP,
    password: bP,
    loginSuccess: BP,
    loginError: DP,
    relatedNetworks: FP,
    all: jP,
    individual: $P,
    organization: UP,
    region: ZP,
    allNationalities: HP,
    korean: VP,
    american: WP,
    japanese: KP,
    chinese: GP,
    vietnamese: qP,
    indian: JP,
    british: QP,
    french: YP,
    german: XP,
    spanish: eL,
    italian: tL,
    brazilian: nL,
    mexican: iL,
    russian: rL,
    canadian: oL,
    australian: sL,
    new_zealander: aL,
    south_african: lL,
    type: uL,
    nationality: cL,
  },
  fL = "MigNetVu: 世界中の移民のネットワーク",
  hL = "ネットワーク追加",
  pL = "ログイン",
  mL = "人口",
  gL = "活動",
  vL = "全ての権利を保有",
  _L = "新規ネットワーク追加",
  yL = "ネットワーク名",
  wL = "緯度",
  xL = "経度",
  SL = "ネットワーク提出",
  PL = "ネットワークが正常に追加されました",
  LL = "ネットワーク追加中にエラーが発生しました",
  kL = "メールアドレス",
  EL = "パスワード",
  CL = "ログイン成功",
  TL = "ログイン失敗",
  OL = "関連ネットワーク",
  NL = "全て",
  zL = "個人",
  RL = "団体",
  ML = "地域",
  AL = "全ての国籍",
  IL = "韓国人",
  bL = "アメリカ人",
  BL = "日本",
  DL = "中国",
  FL = "ベトナム",
  jL = "インド",
  $L = "イギリス",
  UL = "フランス",
  ZL = "ドイツ",
  HL = "スペイン",
  VL = "イタリア",
  WL = "ブラジル",
  KL = "メキシコ",
  GL = "ロシア",
  qL = "カナダ",
  JL = "オーストラリア",
  QL = "ニュージーランド",
  YL = "南アフリカ",
  XL = "タイプ",
  e2 = "国籍",
  t2 = {
    appName: fL,
    addNetwork: hL,
    login: pL,
    population: mL,
    activities: gL,
    allRightsReserved: vL,
    addNewNetwork: _L,
    networkName: yL,
    latitude: wL,
    longitude: xL,
    submitNetwork: SL,
    networkAddedSuccess: PL,
    networkAddError: LL,
    email: kL,
    password: EL,
    loginSuccess: CL,
    loginError: TL,
    relatedNetworks: OL,
    all: NL,
    individual: zL,
    organization: RL,
    region: ML,
    allNationalities: AL,
    korean: IL,
    american: bL,
    japanese: BL,
    chinese: DL,
    vietnamese: FL,
    indian: jL,
    british: $L,
    french: UL,
    german: ZL,
    spanish: HL,
    italian: VL,
    brazilian: WL,
    mexican: KL,
    russian: GL,
    canadian: qL,
    australian: JL,
    new_zealander: QL,
    south_african: YL,
    type: XL,
    nationality: e2,
  },
  n2 = "MigNetVu: глобальная сеть мигрантов",
  i2 = "Добавить сеть",
  r2 = "Вход",
  o2 = "Население",
  s2 = "Деятельность",
  a2 = "Все права защищены",
  l2 = "Добавить новую сеть",
  u2 = "Название сети",
  c2 = "Широта",
  d2 = "Долгота",
  f2 = "Отправить сеть",
  h2 = "Сеть успешно добавлена",
  p2 = "Ошибка при добавлении сети",
  m2 = "Электронная почта",
  g2 = "Пароль",
  v2 = "Вход выполнен успешно",
  _2 = "Ошибка входа",
  y2 = "Связанные сети",
  w2 = "Все",
  x2 = "Частное лицо",
  S2 = "Организация",
  P2 = "Регион",
  L2 = "Все национальности",
  k2 = "Кореец",
  E2 = "Американец",
  C2 = "Япония",
  T2 = "Китай",
  O2 = "Вьетнам",
  N2 = "Индия",
  z2 = "Великобритания",
  R2 = "Франция",
  M2 = "Германия",
  A2 = "Испания",
  I2 = "Италия",
  b2 = "Бразилия",
  B2 = "Мексика",
  D2 = "Россия",
  F2 = "Канада",
  j2 = "Австралия",
  $2 = "Новая Зеландия",
  U2 = "Южноафриканец",
  Z2 = "Тип",
  H2 = "Национальность",
  V2 = {
    appName: n2,
    addNetwork: i2,
    login: r2,
    population: o2,
    activities: s2,
    allRightsReserved: a2,
    addNewNetwork: l2,
    networkName: u2,
    latitude: c2,
    longitude: d2,
    submitNetwork: f2,
    networkAddedSuccess: h2,
    networkAddError: p2,
    email: m2,
    password: g2,
    loginSuccess: v2,
    loginError: _2,
    relatedNetworks: y2,
    all: w2,
    individual: x2,
    organization: S2,
    region: P2,
    allNationalities: L2,
    korean: k2,
    american: E2,
    japanese: C2,
    chinese: T2,
    vietnamese: O2,
    indian: N2,
    british: z2,
    french: R2,
    german: M2,
    spanish: A2,
    italian: I2,
    brazilian: b2,
    mexican: B2,
    russian: D2,
    canadian: F2,
    australian: j2,
    new_zealander: $2,
    south_african: U2,
    type: Z2,
    nationality: H2,
  };
He.use(iw).init({
  resources: {
    en: { translation: xP },
    ko: { translation: dL },
    ja: { translation: t2 },
    ru: { translation: V2 },
  },
  lng: "ko",
  fallbackLng: "en",
  interpolation: { escapeValue: !1 },
});
function W2() {
  return (
    Ui(),
    b.jsx(U1, {
      children: b.jsxs("div", {
        className: "flex flex-col min-h-screen bg-gray-100",
        children: [
          b.jsx(dw, {}),
          b.jsx("main", {
            className: "flex-grow",
            children: b.jsxs(I1, {
              children: [
                b.jsx(ts, { path: "/", element: b.jsx(zw, {}) }),
                b.jsx(ts, { path: "/add-network", element: b.jsx(aS, {}) }),
                b.jsx(ts, { path: "/login", element: b.jsx(lS, {}) }),
              ],
            }),
          }),
          b.jsx(fw, {}),
        ],
      }),
    })
  );
}
eg(document.getElementById("root")).render(
  b.jsx(A.StrictMode, { children: b.jsx(W2, {}) })
);
