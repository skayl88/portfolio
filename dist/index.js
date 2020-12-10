"use strict";
!(function t(e, i, n) {
  function o(s, c) {
    if (!i[s]) {
      if (!e[s]) {
        var a = "function" == typeof require && require;
        if (!c && a) return a(s, !0);
        if (r) return r(s, !0);
        var l = new Error("Cannot find module '" + s + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      var d = (i[s] = { exports: {} });
      e[s][0].call(
        d.exports,
        function (t) {
          return o(e[s][1][t] || t);
        },
        d,
        d.exports,
        t,
        e,
        i,
        n
      );
    }
    return i[s].exports;
  }
  for (
    var r = "function" == typeof require && require, s = 0;
    s < n.length;
    s++
  )
    o(n[s]);
  return o;
})(
  {
    1: [
      function (t, e, i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.default = void 0);
        var n = function (t, e, i, n) {
          var o = !1,
            r = !1,
            s = !1,
            c = null,
            a = isNaN(e) && e.includes("px") ? "pixel" : "",
            l = function () {
              s = !0;
            },
            d = function (t) {
              var n = t.sideA,
                o = t.sideB,
                r = t.measurementDirection,
                s = t.visible,
                c = t.bounds;
              return (
                !!(
                  (s[n] && s[o]) ||
                  (c.top < 0 && c.bottom > window.innerHeight) ||
                  (c.left < 0 && c.right > window.innerWidth)
                ) ||
                ("height" === r
                  ? (function (t) {
                      var e = t.visible,
                        n = t.bounds,
                        o = 0;
                      return (
                        e.top && !e.bottom
                          ? (o =
                              "pixel" === a
                                ? Math.abs(n.top - window.innerHeight)
                                : Math.abs(
                                    (n.top - window.innerHeight) / n.height
                                  ))
                          : !e.top &&
                            e.bottom &&
                            (o =
                              "pixel" === a
                                ? n.bottom
                                : Math.abs(n.bottom / n.height)),
                        o >= i
                      );
                    })(t)
                  : (function (t) {
                      var i = t.visible,
                        n = t.bounds,
                        o = 0;
                      return (
                        i.left && !i.right
                          ? (o =
                              "pixel" === a
                                ? Math.abs(n.left - window.innerWidth)
                                : Math.abs(
                                    (n.left - window.innerWidth) / n.width
                                  ))
                          : !i.left &&
                            i.right &&
                            (o =
                              "pixel" === a
                                ? n.right
                                : Math.abs(n.right / n.width)),
                        o >= e
                      );
                    })(t))
              );
            },
            u = function () {
              if (!(t instanceof Element || t instanceof HTMLDocument))
                return !1;
              var e = t.getBoundingClientRect(),
                i = {
                  top: window.pageYOffset,
                  left: window.pageXOffset,
                  bottom: window.pageYOffset + window.innerHeight,
                  right: window.pageXOffset + window.innerWidth,
                },
                s = {
                  top: e.top >= 0 && e.top < window.innerHeight,
                  bottom: e.bottom > 0 && e.bottom <= window.innerHeight,
                  left: e.left >= 0 && e.left < window.innerWidth,
                  right: e.right >= 0 && e.right <= window.innerWidth,
                },
                a = {
                  sideA: "right",
                  sideB: "left",
                  measurementDirection: "width",
                  visible: s,
                  viewport: i,
                  bounds: e,
                };
              return (
                (r =
                  d({
                    sideA: "top",
                    sideB: "bottom",
                    measurementDirection: "height",
                    visible: s,
                    viewport: i,
                    bounds: e,
                  }) && d(a)) && !o
                  ? Array.isArray(n)
                    ? (n[0](),
                      1 === n.length &&
                        (window.removeEventListener("scroll", l, !1),
                        clearInterval(c)))
                    : (n(),
                      window.removeEventListener("scroll", l, !1),
                      clearInterval(c))
                  : !r &&
                    o &&
                    Array.isArray(n) &&
                    "function" == typeof n[1] &&
                    n[1](),
                r
              );
            };
          u(),
            window.addEventListener("scroll", l, !1),
            (c = setInterval(function () {
              s && ((o = u()), (s = !1));
            }, 20));
        };
        i.default = n;
      },
      {},
    ],
    2: [
      function (t, e, i) {
        function n(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }

        var r, s;
        (r = this),
          (s = (function () {
            function t() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              n(this, t),
                (this.selector = e),
                (this.elements = []),
                (this.version = "1.3.0"),
                (this.vp = this.getViewportSize()),
                (this.body = document.querySelector("body")),
                (this.options = {
                  wrap: i.wrap || !1,
                  wrapWith: i.wrapWith || "<span></span>",
                  marginTop: i.marginTop || 0,
                  marginBottom: i.marginBottom || 0,
                  stickyFor: i.stickyFor || 0,
                  stickyClass: i.stickyClass || null,
                  stickyContainer: i.stickyContainer || "body",
                }),
                (this.updateScrollTopPosition = this.updateScrollTopPosition.bind(
                  this
                )),
                this.updateScrollTopPosition(),
                window.addEventListener("load", this.updateScrollTopPosition),
                window.addEventListener("scroll", this.updateScrollTopPosition),
                this.run();
            }
            var e, i, r;
            return (
              (e = t),
              (i = [
                {
                  key: "run",
                  value: function () {
                    var t = this,
                      e = setInterval(function () {
                        if ("complete" === document.readyState) {
                          clearInterval(e);
                          var i = document.querySelectorAll(t.selector);
                          t.forEach(i, function (e) {
                            return t.renderElement(e);
                          });
                        }
                      }, 10);
                  },
                },
                {
                  key: "renderElement",
                  value: function (t) {
                    var e = this;
                    (t.sticky = {}),
                      (t.sticky.active = !1),
                      (t.sticky.marginTop =
                        parseInt(t.getAttribute("data-margin-top")) ||
                        this.options.marginTop),
                      (t.sticky.marginBottom =
                        parseInt(t.getAttribute("data-margin-bottom")) ||
                        this.options.marginBottom),
                      (t.sticky.stickyFor =
                        parseInt(t.getAttribute("data-sticky-for")) ||
                        this.options.stickyFor),
                      (t.sticky.stickyClass =
                        t.getAttribute("data-sticky-class") ||
                        this.options.stickyClass),
                      (t.sticky.wrap =
                        !!t.hasAttribute("data-sticky-wrap") ||
                        this.options.wrap),
                      (t.sticky.stickyContainer = this.options.stickyContainer),
                      (t.sticky.container = this.getStickyContainer(t)),
                      (t.sticky.container.rect = this.getRectangle(
                        t.sticky.container
                      )),
                      (t.sticky.rect = this.getRectangle(t)),
                      "img" === t.tagName.toLowerCase() &&
                        (t.onload = function () {
                          return (t.sticky.rect = e.getRectangle(t));
                        }),
                      t.sticky.wrap && this.wrapElement(t),
                      this.activate(t);
                  },
                },
                {
                  key: "wrapElement",
                  value: function (t) {
                    t.insertAdjacentHTML(
                      "beforebegin",
                      t.getAttribute("data-sticky-wrapWith") ||
                        this.options.wrapWith
                    ),
                      t.previousSibling.appendChild(t);
                  },
                },
                {
                  key: "activate",
                  value: function (t) {
                    t.sticky.rect.top + t.sticky.rect.height <
                      t.sticky.container.rect.top +
                        t.sticky.container.rect.height &&
                      t.sticky.stickyFor < this.vp.width &&
                      !t.sticky.active &&
                      (t.sticky.active = !0),
                      this.elements.indexOf(t) < 0 && this.elements.push(t),
                      t.sticky.resizeEvent ||
                        (this.initResizeEvents(t), (t.sticky.resizeEvent = !0)),
                      t.sticky.scrollEvent ||
                        (this.initScrollEvents(t), (t.sticky.scrollEvent = !0)),
                      this.setPosition(t);
                  },
                },
                {
                  key: "initResizeEvents",
                  value: function (t) {
                    var e = this;
                    (t.sticky.resizeListener = function () {
                      return e.onResizeEvents(t);
                    }),
                      window.addEventListener(
                        "resize",
                        t.sticky.resizeListener
                      );
                  },
                },
                {
                  key: "destroyResizeEvents",
                  value: function (t) {
                    window.removeEventListener(
                      "resize",
                      t.sticky.resizeListener
                    );
                  },
                },
                {
                  key: "onResizeEvents",
                  value: function (t) {
                    (this.vp = this.getViewportSize()),
                      (t.sticky.rect = this.getRectangle(t)),
                      (t.sticky.container.rect = this.getRectangle(
                        t.sticky.container
                      )),
                      t.sticky.rect.top + t.sticky.rect.height <
                        t.sticky.container.rect.top +
                          t.sticky.container.rect.height &&
                      t.sticky.stickyFor < this.vp.width &&
                      !t.sticky.active
                        ? (t.sticky.active = !0)
                        : (t.sticky.rect.top + t.sticky.rect.height >=
                            t.sticky.container.rect.top +
                              t.sticky.container.rect.height ||
                            (t.sticky.stickyFor >= this.vp.width &&
                              t.sticky.active)) &&
                          (t.sticky.active = !1),
                      this.setPosition(t);
                  },
                },
                {
                  key: "initScrollEvents",
                  value: function (t) {
                    var e = this;
                    (t.sticky.scrollListener = function () {
                      return e.onScrollEvents(t);
                    }),
                      window.addEventListener(
                        "scroll",
                        t.sticky.scrollListener
                      );
                  },
                },
                {
                  key: "destroyScrollEvents",
                  value: function (t) {
                    window.removeEventListener(
                      "scroll",
                      t.sticky.scrollListener
                    );
                  },
                },
                {
                  key: "onScrollEvents",
                  value: function (t) {
                    t.sticky && t.sticky.active && this.setPosition(t);
                  },
                },
                {
                  key: "setPosition",
                  value: function (t) {
                    this.css(t, { position: "", width: "", top: "", left: "" }),
                      this.vp.height < t.sticky.rect.height ||
                        !t.sticky.active ||
                        (t.sticky.rect.width ||
                          (t.sticky.rect = this.getRectangle(t)),
                        t.sticky.wrap &&
                          this.css(t.parentNode, {
                            display: "block",
                            width: t.sticky.rect.width + "px",
                            height: t.sticky.rect.height + "px",
                          }),
                        0 === t.sticky.rect.top &&
                        t.sticky.container === this.body
                          ? (this.css(t, {
                              position: "fixed",
                              top: t.sticky.rect.top + "px",
                              left: t.sticky.rect.left + "px",
                              width: t.sticky.rect.width + "px",
                            }),
                            t.sticky.stickyClass &&
                              t.classList.add(t.sticky.stickyClass))
                          : this.scrollTop >
                            t.sticky.rect.top - t.sticky.marginTop
                          ? (this.css(t, {
                              position: "fixed",
                              width: t.sticky.rect.width + "px",
                              left: t.sticky.rect.left + "px",
                            }),
                            this.scrollTop +
                              t.sticky.rect.height +
                              t.sticky.marginTop >
                            t.sticky.container.rect.top +
                              t.sticky.container.offsetHeight -
                              t.sticky.marginBottom
                              ? (t.sticky.stickyClass &&
                                  t.classList.remove(t.sticky.stickyClass),
                                this.css(t, {
                                  top:
                                    t.sticky.container.rect.top +
                                    t.sticky.container.offsetHeight -
                                    (this.scrollTop +
                                      t.sticky.rect.height +
                                      t.sticky.marginBottom) +
                                    "px",
                                }))
                              : (t.sticky.stickyClass &&
                                  t.classList.add(t.sticky.stickyClass),
                                this.css(t, {
                                  top: t.sticky.marginTop + "px",
                                })))
                          : (t.sticky.stickyClass &&
                              t.classList.remove(t.sticky.stickyClass),
                            this.css(t, {
                              position: "",
                              width: "",
                              top: "",
                              left: "",
                            }),
                            t.sticky.wrap &&
                              this.css(t.parentNode, {
                                display: "",
                                width: "",
                                height: "",
                              })));
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var t = this;
                    this.forEach(this.elements, function (e) {
                      (e.sticky.rect = t.getRectangle(e)),
                        (e.sticky.container.rect = t.getRectangle(
                          e.sticky.container
                        )),
                        t.activate(e),
                        t.setPosition(e);
                    });
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var t = this;
                    window.removeEventListener(
                      "load",
                      this.updateScrollTopPosition
                    ),
                      window.removeEventListener(
                        "scroll",
                        this.updateScrollTopPosition
                      ),
                      this.forEach(this.elements, function (e) {
                        t.destroyResizeEvents(e),
                          t.destroyScrollEvents(e),
                          delete e.sticky;
                      });
                  },
                },
                {
                  key: "getStickyContainer",
                  value: function (t) {
                    for (
                      var e = t.parentNode;
                      !e.hasAttribute("data-sticky-container") &&
                      !e.parentNode.querySelector(t.sticky.stickyContainer) &&
                      e !== this.body;

                    )
                      e = e.parentNode;
                    return e;
                  },
                },
                {
                  key: "getRectangle",
                  value: function (t) {
                    this.css(t, { position: "", width: "", top: "", left: "" });
                    var e = Math.max(
                        t.offsetWidth,
                        t.clientWidth,
                        t.scrollWidth
                      ),
                      i = Math.max(
                        t.offsetHeight,
                        t.clientHeight,
                        t.scrollHeight
                      ),
                      n = 0,
                      o = 0;
                    do {
                      (n += t.offsetTop || 0),
                        (o += t.offsetLeft || 0),
                        (t = t.offsetParent);
                    } while (t);
                    return { top: n, left: o, width: e, height: i };
                  },
                },
                {
                  key: "getViewportSize",
                  value: function () {
                    return {
                      width: Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      ),
                      height: Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      ),
                    };
                  },
                },
                {
                  key: "updateScrollTopPosition",
                  value: function () {
                    this.scrollTop =
                      (window.pageYOffset || document.scrollTop) -
                        (document.clientTop || 0) || 0;
                  },
                },
                {
                  key: "forEach",
                  value: function (t, e) {
                    for (var i = 0, n = t.length; i < n; i++) e(t[i]);
                  },
                },
                {
                  key: "css",
                  value: function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t.style[i] = e[i]);
                  },
                },
              ]) && o(e.prototype, i),
              r && o(e, r),
              t
            );
          })()),
          void 0 !== i
            ? (e.exports = s)
            : "function" == typeof define && define.amd
            ? define([], function () {
                return s;
              })
            : (r.Sticky = s);
      },
      {},
    ],
    3: [
      function (t, e, i) {
        var n = t("./dist/sticky.compile.js");
        e.exports = n;
      },
      { "./dist/sticky.compile.js": 2 },
    ],
    4: [
      function (t, e, i) {
        t("javascript-inviewport");
        const n = t("sticky-js");
        (() => {
          new n(".nav__tab"), new n(".sticky");
          const t = document.querySelector(".menu__button"),
            e = document.querySelector(".menu__list"),
            i = document.querySelector(".page__body");
          t.addEventListener("click", () => {
            let n = "true" === t.getAttribute("aria-expanded");
            t.setAttribute("aria-expanded", !n),
              t.classList.toggle("menu__button--open"),
              e.classList.toggle("menu__list--open"),
              i.classList.toggle("overflow-hidden");
          });
          const o = document.getElementById("scene");
          new Parallax(o);
          if (void 0 !== document.querySelectorAll('[role="tablist"]')[0]) {
            var r,
              s,
              c = document.querySelectorAll('[role="tablist"]')[0],
              a = (function () {
                var t = c.hasAttribute("data-delay"),
                  e = 0;
                if (t) {
                  var i = c.getAttribute("data-delay");
                  e = i || 300;
                }
                return e;
              })();
            function l() {
              (r = document.querySelectorAll('[role="tab"]')),
                (s = document.querySelectorAll('[role="tabpanel"]'));
            }
            l();
            var d,
              u = {
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                delete: 46,
              },
              h = { 37: -1, 38: -1, 39: 1, 40: 1 };
            for (d = 0; d < r.length; ++d) f(d);
            function f(t) {
              r[t].addEventListener("click", p),
                r[t].addEventListener("keydown", y),
                r[t].addEventListener("keyup", v),
                (r[t].index = t);
            }
            function p(t) {
              w(t.target, !1);
            }
            function y(t) {
              switch (t.keyCode) {
                case u.end:
                  t.preventDefault(), w(r[r.length - 1]);
                  break;
                case u.home:
                  t.preventDefault(), w(r[0]);
                  break;
                case u.up:
                case u.down:
                  g(t);
              }
            }
            function v(t) {
              switch (t.keyCode) {
                case u.left:
                case u.right:
                  g(t);
                  break;
                case u.delete:
                  !(function (t) {
                    (target = t.target),
                      null !== target.getAttribute("data-deletable") &&
                        (!(function (t) {
                          var e = t.target,
                            i = document.getElementById(
                              e.getAttribute("aria-controls")
                            );
                          e.parentElement.removeChild(e),
                            i.parentElement.removeChild(i);
                        })(t, target),
                        l(),
                        target.index - 1 < 0
                          ? w(r[0])
                          : w(r[target.index - 1]));
                  })(t);
              }
            }
            function g(t) {
              var e = t.keyCode,
                i = !1;
              "vertical" == c.getAttribute("aria-orientation")
                ? (e !== u.up && e !== u.down) || (t.preventDefault(), (i = !0))
                : (e !== u.left && e !== u.right) || (i = !0),
                i &&
                  (function (t) {
                    var e,
                      i = t.keyCode;
                    for (e = 0; e < r.length; e++)
                      r[e].addEventListener("focus", k);
                    if (h[i]) {
                      var n = t.target;
                      void 0 !== n.index &&
                        (r[n.index + h[i]]
                          ? r[n.index + h[i]].focus()
                          : i === u.left || i === u.up
                          ? r[r.length - 1].focus()
                          : (i !== u.right && i != u.down) || r[0].focus());
                    }
                  })(t);
            }
            function w(t, e) {
              (e = e || !0),
                (function () {
                  var t, e;
                  for (t = 0; t < r.length; t++)
                    r[t].setAttribute("tabindex", "-1"),
                      r[t].setAttribute("aria-selected", "false"),
                      r[t].removeEventListener("focus", k);
                  for (e = 0; e < s.length; e++)
                    s[e].setAttribute("hidden", "hidden");
                })(),
                t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", "true");
              var i = t.getAttribute("aria-controls");
              document.getElementById(i).removeAttribute("hidden"),
                e && t.focus();
            }
            function k(t) {
              var e = t.target;
              setTimeout(m, a, e);
            }
            function m(t) {
              (focused = document.activeElement), t === focused && w(t, !1);
            }
          }
          !(function (t, e) {
            for (var i in e) t[i] = e[i];
          })(
            window,
            (function (t) {
              var e = {};
              function i(n) {
                if (e[n]) return e[n].exports;
                var o = (e[n] = { i: n, l: !1, exports: {} });
                return (
                  t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports
                );
              }
              return (
                (i.m = t),
                (i.c = e),
                (i.d = function (t, e, n) {
                  i.o(t, e) ||
                    Object.defineProperty(t, e, { enumerable: !0, get: n });
                }),
                (i.r = function (t) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
                }),
                (i.t = function (t, e) {
                  if ((1 & e && (t = i(t)), 8 & e)) return t;
                  if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                  var n = Object.create(null);
                  if (
                    (i.r(n),
                    Object.defineProperty(n, "default", {
                      enumerable: !0,
                      value: t,
                    }),
                    2 & e && "string" != typeof t)
                  )
                    for (var o in t)
                      i.d(
                        n,
                        o,
                        function (e) {
                          return t[e];
                        }.bind(null, o)
                      );
                  return n;
                }),
                (i.n = function (t) {
                  var e =
                    t && t.__esModule
                      ? function () {
                          return t.default;
                        }
                      : function () {
                          return t;
                        };
                  return i.d(e, "a", e), e;
                }),
                (i.o = function (t, e) {
                  return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (i.p = ""),
                i((i.s = "./source/viewport-example.js"))
              );
            })({
              "./inviewport.js":
                /*!***********************!*\
          !*** ./inviewport.js ***!
          \***********************/
                /*! no static exports found */
                function (t, e, i) {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.default = void 0);
                  var n = function (t, e, i, n) {
                    var o = !1,
                      r = !1,
                      s = !0,
                      c = null,
                      a = isNaN(e) && e.includes("px") ? "pixel" : "",
                      l = function () {
                        s = !0;
                      },
                      d = function (t) {
                        var n = t.sideA,
                          o = t.sideB,
                          r = t.measurementDirection,
                          s = t.visible,
                          c = t.bounds;
                        return (
                          !!(
                            (s[n] && s[o]) ||
                            (c.top < 0 && c.bottom > window.innerHeight) ||
                            (c.left < 0 && c.right > window.innerWidth)
                          ) ||
                          ("height" === r
                            ? (function (t) {
                                var e = t.visible,
                                  n = t.bounds,
                                  o = 0;
                                return (
                                  e.top && !e.bottom
                                    ? (o =
                                        "pixel" === a
                                          ? Math.abs(n.top - window.innerHeight)
                                          : Math.abs(
                                              (n.top - window.innerHeight) /
                                                n.height
                                            ))
                                    : !e.top &&
                                      e.bottom &&
                                      (o =
                                        "pixel" === a
                                          ? n.bottom
                                          : Math.abs(n.bottom / n.height)),
                                  o >= i
                                );
                              })(t)
                            : (function (t) {
                                var i = t.visible,
                                  n = t.bounds,
                                  o = 0;
                                return (
                                  i.left && !i.right
                                    ? (o =
                                        "pixel" === a
                                          ? Math.abs(n.left - window.innerWidth)
                                          : Math.abs(
                                              (n.left - window.innerWidth) /
                                                n.width
                                            ))
                                    : !i.left &&
                                      i.right &&
                                      (o =
                                        "pixel" === a
                                          ? n.right
                                          : Math.abs(n.right / n.width)),
                                  o >= e
                                );
                              })(t))
                        );
                      },
                      u = function () {
                        if (
                          !(t instanceof Element || t instanceof HTMLDocument)
                        )
                          return !1;
                        var e = t.getBoundingClientRect(),
                          i = {
                            top: window.pageYOffset,
                            left: window.pageXOffset,
                            bottom: window.pageYOffset + window.innerHeight,
                            right: window.pageXOffset + window.innerWidth,
                          },
                          s = {
                            top: e.top >= 0 && e.top < window.innerHeight,
                            bottom:
                              e.bottom > 0 && e.bottom <= window.innerHeight,
                            left: e.left >= 0 && e.left < window.innerWidth,
                            right: e.right >= 0 && e.right <= window.innerWidth,
                          },
                          a = {
                            sideA: "right",
                            sideB: "left",
                            measurementDirection: "width",
                            visible: s,
                            viewport: i,
                            bounds: e,
                          };
                        return (
                          (r =
                            d({
                              sideA: "top",
                              sideB: "bottom",
                              measurementDirection: "height",
                              visible: s,
                              viewport: i,
                              bounds: e,
                            }) && d(a)) && !o
                            ? Array.isArray(n)
                              ? (n[0](),
                                1 === n.length &&
                                  (window.removeEventListener("scroll", l, !1),
                                  clearInterval(c)))
                              : (n(),
                                window.removeEventListener("scroll", l, !1),
                                clearInterval(c))
                            : !r &&
                              o &&
                              Array.isArray(n) &&
                              "function" == typeof n[1] &&
                              n[1](),
                          r
                        );
                      };
                    u();
                    window.addEventListener("scroll", l, !1),
                      (c = setInterval(function () {
                        s && ((o = u()), (s = !1));
                      }, 20));
                  };
                  e.default = n;
                },
              "./source/viewport-example.js":
                /*!************************************!*\
          !*** ./source/viewport-example.js ***!
          \************************************/
                /*! no exports provided */
                function (t, e, i) {
                  i.r(e);
                  var n = i(
                      /*! ../inviewport */
                      "./inviewport.js"
                    ),
                    o = i.n(n);
                  document.addEventListener("DOMContentLoaded", function () {
                    var t = document.querySelector(".viewport-visible"),
                      e = document.querySelector(".horizontal-scroll-example"),
                      i = document.querySelector(".shrug"),
                      n = function (t, e) {
                        for (
                          var i = function (i) {
                              var n = document.querySelector(".catalog__item");
                              n.classList.add(t),
                                e.appendChild(n),
                                "vertical" === t
                                  ? o()(n, "175px", "175px", [
                                      function () {
                                        n.classList.add("visible");
                                      },
                                      function () {
                                        n.classList.remove("visible");
                                      },
                                    ])
                                  : o()(n, 0.5, 0.5, function () {
                                      n.classList.add("visible");
                                    });
                            },
                            n = 0;
                          n < 9;
                          n++
                        )
                          i();
                      };
                    t && n("vertical", t),
                      e &&
                        (n("horizontal-tile", e),
                        o()(e, 0.01, 0.8, function () {
                          e.classList.add("visible");
                        })),
                      i &&
                        o()(i, 0.5, 0.5, [
                          function () {
                            i.classList.add("visible");
                          },
                          function () {
                            i.classList.remove("visible");
                          },
                        ]);
                  });
                },
            })
          );
        })();
      },
      { "javascript-inviewport": 1, "sticky-js": 3 },
    ],
  },
  {},
  [4]
);
