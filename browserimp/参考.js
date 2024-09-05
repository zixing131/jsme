"use strict";
(()=>{
    var yd = Object.create;
    var Jr = Object.defineProperty;
    var Id = Object.getOwnPropertyDescriptor;
    var bd = Object.getOwnPropertyNames;
    var Ed = Object.getPrototypeOf
      , jd = Object.prototype.hasOwnProperty;
    var dt = (t,e)=>()=>(e || t((e = {
        exports: {}
    }).exports, e),
    e.exports);
    var Sd = (t,e,n,i)=>{
        if (e && typeof e == "object" || typeof e == "function")
            for (let r of bd(e))
                !jd.call(t, r) && r !== n && Jr(t, r, {
                    get: ()=>e[r],
                    enumerable: !(i = Id(e, r)) || i.enumerable
                });
        return t
    }
    ;
    var Ti = (t,e,n)=>(n = t != null ? yd(Ed(t)) : {},
    Sd(e || !t || !t.__esModule ? Jr(n, "default", {
        value: t,
        enumerable: !0
    }) : n, t));
    var ra = dt(Fn=>{
        "use strict";
        Fn.byteLength = Td;
        Fn.toByteArray = Ld;
        Fn.fromByteArray = Dd;
        var Yt = []
          , Nt = []
          , Cd = typeof Uint8Array < "u" ? Uint8Array : Array
          , Ai = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (be = 0,
        na = Ai.length; be < na; ++be)
            Yt[be] = Ai[be],
            Nt[Ai.charCodeAt(be)] = be;
        var be, na;
        Nt[45] = 62;
        Nt[95] = 63;
        function ia(t) {
            var e = t.length;
            if (e % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = t.indexOf("=");
            n === -1 && (n = e);
            var i = n === e ? 0 : 4 - n % 4;
            return [n, i]
        }
        function Td(t) {
            var e = ia(t)
              , n = e[0]
              , i = e[1];
            return (n + i) * 3 / 4 - i
        }
        function Ad(t, e, n) {
            return (e + n) * 3 / 4 - n
        }
        function Ld(t) {
            var e, n = ia(t), i = n[0], r = n[1], a = new Cd(Ad(t, i, r)), o = 0, l = r > 0 ? i - 4 : i, u;
            for (u = 0; u < l; u += 4)
                e = Nt[t.charCodeAt(u)] << 18 | Nt[t.charCodeAt(u + 1)] << 12 | Nt[t.charCodeAt(u + 2)] << 6 | Nt[t.charCodeAt(u + 3)],
                a[o++] = e >> 16 & 255,
                a[o++] = e >> 8 & 255,
                a[o++] = e & 255;
            return r === 2 && (e = Nt[t.charCodeAt(u)] << 2 | Nt[t.charCodeAt(u + 1)] >> 4,
            a[o++] = e & 255),
            r === 1 && (e = Nt[t.charCodeAt(u)] << 10 | Nt[t.charCodeAt(u + 1)] << 4 | Nt[t.charCodeAt(u + 2)] >> 2,
            a[o++] = e >> 8 & 255,
            a[o++] = e & 255),
            a
        }
        function Od(t) {
            return Yt[t >> 18 & 63] + Yt[t >> 12 & 63] + Yt[t >> 6 & 63] + Yt[t & 63]
        }
        function Fd(t, e, n) {
            for (var i, r = [], a = e; a < n; a += 3)
                i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (t[a + 2] & 255),
                r.push(Od(i));
            return r.join("")
        }
        function Dd(t) {
            for (var e, n = t.length, i = n % 3, r = [], a = 16383, o = 0, l = n - i; o < l; o += a)
                r.push(Fd(t, o, o + a > l ? l : o + a));
            return i === 1 ? (e = t[n - 1],
            r.push(Yt[e >> 2] + Yt[e << 4 & 63] + "==")) : i === 2 && (e = (t[n - 2] << 8) + t[n - 1],
            r.push(Yt[e >> 10] + Yt[e >> 4 & 63] + Yt[e << 2 & 63] + "=")),
            r.join("")
        }
    }
    );
    var aa = dt(Li=>{
        Li.read = function(t, e, n, i, r) {
            var a, o, l = r * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, h = -7, g = n ? r - 1 : 0, _ = n ? -1 : 1, E = t[e + g];
            for (g += _,
            a = E & (1 << -h) - 1,
            E >>= -h,
            h += l; h > 0; a = a * 256 + t[e + g],
            g += _,
            h -= 8)
                ;
            for (o = a & (1 << -h) - 1,
            a >>= -h,
            h += i; h > 0; o = o * 256 + t[e + g],
            g += _,
            h -= 8)
                ;
            if (a === 0)
                a = 1 - d;
            else {
                if (a === u)
                    return o ? NaN : (E ? -1 : 1) * (1 / 0);
                o = o + Math.pow(2, i),
                a = a - d
            }
            return (E ? -1 : 1) * o * Math.pow(2, a - i)
        }
        ;
        Li.write = function(t, e, n, i, r, a) {
            var o, l, u, d = a * 8 - r - 1, h = (1 << d) - 1, g = h >> 1, _ = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, E = i ? 0 : a - 1, T = i ? 1 : -1, w = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (l = isNaN(e) ? 1 : 0,
            o = h) : (o = Math.floor(Math.log(e) / Math.LN2),
            e * (u = Math.pow(2, -o)) < 1 && (o--,
            u *= 2),
            o + g >= 1 ? e += _ / u : e += _ * Math.pow(2, 1 - g),
            e * u >= 2 && (o++,
            u /= 2),
            o + g >= h ? (l = 0,
            o = h) : o + g >= 1 ? (l = (e * u - 1) * Math.pow(2, r),
            o = o + g) : (l = e * Math.pow(2, g - 1) * Math.pow(2, r),
            o = 0)); r >= 8; t[n + E] = l & 255,
            E += T,
            l /= 256,
            r -= 8)
                ;
            for (o = o << r | l,
            d += r; d > 0; t[n + E] = o & 255,
            E += T,
            o /= 256,
            d -= 8)
                ;
            t[n + E - T] |= w * 128
        }
    }
    );
    var Ia = dt(Pe=>{
        "use strict";
        var Oi = ra()
          , Ve = aa()
          , oa = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
        Pe.Buffer = O;
        Pe.SlowBuffer = Pd;
        Pe.INSPECT_MAX_BYTES = 50;
        var Dn = 2147483647;
        Pe.kMaxLength = Dn;
        O.TYPED_ARRAY_SUPPORT = Nd();
        !O.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
        function Nd() {
            try {
                let t = new Uint8Array(1)
                  , e = {
                    foo: function() {
                        return 42
                    }
                };
                return Object.setPrototypeOf(e, Uint8Array.prototype),
                Object.setPrototypeOf(t, e),
                t.foo() === 42
            } catch {
                return !1
            }
        }
        Object.defineProperty(O.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (O.isBuffer(this))
                    return this.buffer
            }
        });
        Object.defineProperty(O.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (O.isBuffer(this))
                    return this.byteOffset
            }
        });
        function ne(t) {
            if (t > Dn)
                throw new RangeError('The value "' + t + '" is invalid for option "size"');
            let e = new Uint8Array(t);
            return Object.setPrototypeOf(e, O.prototype),
            e
        }
        function O(t, e, n) {
            if (typeof t == "number") {
                if (typeof e == "string")
                    throw new TypeError('The "string" argument must be of type string. Received type number');
                return Mi(t)
            }
            return ua(t, e, n)
        }
        O.poolSize = 8192;
        function ua(t, e, n) {
            if (typeof t == "string")
                return Bd(t, e);
            if (ArrayBuffer.isView(t))
                return Vd(t);
            if (t == null)
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
            if (Kt(t, ArrayBuffer) || t && Kt(t.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Kt(t, SharedArrayBuffer) || t && Kt(t.buffer, SharedArrayBuffer)))
                return Di(t, e, n);
            if (typeof t == "number")
                throw new TypeError('The "value" argument must not be of type number. Received type number');
            let i = t.valueOf && t.valueOf();
            if (i != null && i !== t)
                return O.from(i, e, n);
            let r = Ud(t);
            if (r)
                return r;
            if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof t[Symbol.toPrimitive] == "function")
                return O.from(t[Symbol.toPrimitive]("string"), e, n);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
        }
        O.from = function(t, e, n) {
            return ua(t, e, n)
        }
        ;
        Object.setPrototypeOf(O.prototype, Uint8Array.prototype);
        Object.setPrototypeOf(O, Uint8Array);
        function fa(t) {
            if (typeof t != "number")
                throw new TypeError('"size" argument must be of type number');
            if (t < 0)
                throw new RangeError('The value "' + t + '" is invalid for option "size"')
        }
        function Md(t, e, n) {
            return fa(t),
            t <= 0 ? ne(t) : e !== void 0 ? typeof n == "string" ? ne(t).fill(e, n) : ne(t).fill(e) : ne(t)
        }
        O.alloc = function(t, e, n) {
            return Md(t, e, n)
        }
        ;
        function Mi(t) {
            return fa(t),
            ne(t < 0 ? 0 : Bi(t) | 0)
        }
        O.allocUnsafe = function(t) {
            return Mi(t)
        }
        ;
        O.allocUnsafeSlow = function(t) {
            return Mi(t)
        }
        ;
        function Bd(t, e) {
            if ((typeof e != "string" || e === "") && (e = "utf8"),
            !O.isEncoding(e))
                throw new TypeError("Unknown encoding: " + e);
            let n = da(t, e) | 0
              , i = ne(n)
              , r = i.write(t, e);
            return r !== n && (i = i.slice(0, r)),
            i
        }
        function Fi(t) {
            let e = t.length < 0 ? 0 : Bi(t.length) | 0
              , n = ne(e);
            for (let i = 0; i < e; i += 1)
                n[i] = t[i] & 255;
            return n
        }
        function Vd(t) {
            if (Kt(t, Uint8Array)) {
                let e = new Uint8Array(t);
                return Di(e.buffer, e.byteOffset, e.byteLength)
            }
            return Fi(t)
        }
        function Di(t, e, n) {
            if (e < 0 || t.byteLength < e)
                throw new RangeError('"offset" is outside of buffer bounds');
            if (t.byteLength < e + (n || 0))
                throw new RangeError('"length" is outside of buffer bounds');
            let i;
            return e === void 0 && n === void 0 ? i = new Uint8Array(t) : n === void 0 ? i = new Uint8Array(t,e) : i = new Uint8Array(t,e,n),
            Object.setPrototypeOf(i, O.prototype),
            i
        }
        function Ud(t) {
            if (O.isBuffer(t)) {
                let e = Bi(t.length) | 0
                  , n = ne(e);
                return n.length === 0 || t.copy(n, 0, 0, e),
                n
            }
            if (t.length !== void 0)
                return typeof t.length != "number" || Ui(t.length) ? ne(0) : Fi(t);
            if (t.type === "Buffer" && Array.isArray(t.data))
                return Fi(t.data)
        }
        function Bi(t) {
            if (t >= Dn)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Dn.toString(16) + " bytes");
            return t | 0
        }
        function Pd(t) {
            return +t != t && (t = 0),
            O.alloc(+t)
        }
        O.isBuffer = function(e) {
            return e != null && e._isBuffer === !0 && e !== O.prototype
        }
        ;
        O.compare = function(e, n) {
            if (Kt(e, Uint8Array) && (e = O.from(e, e.offset, e.byteLength)),
            Kt(n, Uint8Array) && (n = O.from(n, n.offset, n.byteLength)),
            !O.isBuffer(e) || !O.isBuffer(n))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === n)
                return 0;
            let i = e.length
              , r = n.length;
            for (let a = 0, o = Math.min(i, r); a < o; ++a)
                if (e[a] !== n[a]) {
                    i = e[a],
                    r = n[a];
                    break
                }
            return i < r ? -1 : r < i ? 1 : 0
        }
        ;
        O.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ;
        O.concat = function(e, n) {
            if (!Array.isArray(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (e.length === 0)
                return O.alloc(0);
            let i;
            if (n === void 0)
                for (n = 0,
                i = 0; i < e.length; ++i)
                    n += e[i].length;
            let r = O.allocUnsafe(n)
              , a = 0;
            for (i = 0; i < e.length; ++i) {
                let o = e[i];
                if (Kt(o, Uint8Array))
                    a + o.length > r.length ? (O.isBuffer(o) || (o = O.from(o)),
                    o.copy(r, a)) : Uint8Array.prototype.set.call(r, o, a);
                else if (O.isBuffer(o))
                    o.copy(r, a);
                else
                    throw new TypeError('"list" argument must be an Array of Buffers');
                a += o.length
            }
            return r
        }
        ;
        function da(t, e) {
            if (O.isBuffer(t))
                return t.length;
            if (ArrayBuffer.isView(t) || Kt(t, ArrayBuffer))
                return t.byteLength;
            if (typeof t != "string")
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
            let n = t.length
              , i = arguments.length > 2 && arguments[2] === !0;
            if (!i && n === 0)
                return 0;
            let r = !1;
            for (; ; )
                switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                    return Ni(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return n * 2;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return ya(t).length;
                default:
                    if (r)
                        return i ? -1 : Ni(t).length;
                    e = ("" + e).toLowerCase(),
                    r = !0
                }
        }
        O.byteLength = da;
        function Zd(t, e, n) {
            let i = !1;
            if ((e === void 0 || e < 0) && (e = 0),
            e > this.length || ((n === void 0 || n > this.length) && (n = this.length),
            n <= 0) || (n >>>= 0,
            e >>>= 0,
            n <= e))
                return "";
            for (t || (t = "utf8"); ; )
                switch (t) {
                case "hex":
                    return Jd(this, e, n);
                case "utf8":
                case "utf-8":
                    return ha(this, e, n);
                case "ascii":
                    return zd(this, e, n);
                case "latin1":
                case "binary":
                    return Wd(this, e, n);
                case "base64":
                    return Kd(this, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return Qd(this, e, n);
                default:
                    if (i)
                        throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(),
                    i = !0
                }
        }
        O.prototype._isBuffer = !0;
        function Ee(t, e, n) {
            let i = t[e];
            t[e] = t[n],
            t[n] = i
        }
        O.prototype.swap16 = function() {
            let e = this.length;
            if (e % 2 !== 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let n = 0; n < e; n += 2)
                Ee(this, n, n + 1);
            return this
        }
        ;
        O.prototype.swap32 = function() {
            let e = this.length;
            if (e % 4 !== 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let n = 0; n < e; n += 4)
                Ee(this, n, n + 3),
                Ee(this, n + 1, n + 2);
            return this
        }
        ;
        O.prototype.swap64 = function() {
            let e = this.length;
            if (e % 8 !== 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let n = 0; n < e; n += 8)
                Ee(this, n, n + 7),
                Ee(this, n + 1, n + 6),
                Ee(this, n + 2, n + 5),
                Ee(this, n + 3, n + 4);
            return this
        }
        ;
        O.prototype.toString = function() {
            let e = this.length;
            return e === 0 ? "" : arguments.length === 0 ? ha(this, 0, e) : Zd.apply(this, arguments)
        }
        ;
        O.prototype.toLocaleString = O.prototype.toString;
        O.prototype.equals = function(e) {
            if (!O.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e ? !0 : O.compare(this, e) === 0
        }
        ;
        O.prototype.inspect = function() {
            let e = ""
              , n = Pe.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(),
            this.length > n && (e += " ... "),
            "<Buffer " + e + ">"
        }
        ;
        oa && (O.prototype[oa] = O.prototype.inspect);
        O.prototype.compare = function(e, n, i, r, a) {
            if (Kt(e, Uint8Array) && (e = O.from(e, e.offset, e.byteLength)),
            !O.isBuffer(e))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (n === void 0 && (n = 0),
            i === void 0 && (i = e ? e.length : 0),
            r === void 0 && (r = 0),
            a === void 0 && (a = this.length),
            n < 0 || i > e.length || r < 0 || a > this.length)
                throw new RangeError("out of range index");
            if (r >= a && n >= i)
                return 0;
            if (r >= a)
                return -1;
            if (n >= i)
                return 1;
            if (n >>>= 0,
            i >>>= 0,
            r >>>= 0,
            a >>>= 0,
            this === e)
                return 0;
            let o = a - r
              , l = i - n
              , u = Math.min(o, l)
              , d = this.slice(r, a)
              , h = e.slice(n, i);
            for (let g = 0; g < u; ++g)
                if (d[g] !== h[g]) {
                    o = d[g],
                    l = h[g];
                    break
                }
            return o < l ? -1 : l < o ? 1 : 0
        }
        ;
        function ma(t, e, n, i, r) {
            if (t.length === 0)
                return -1;
            if (typeof n == "string" ? (i = n,
            n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
            n = +n,
            Ui(n) && (n = r ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length) {
                if (r)
                    return -1;
                n = t.length - 1
            } else if (n < 0)
                if (r)
                    n = 0;
                else
                    return -1;
            if (typeof e == "string" && (e = O.from(e, i)),
            O.isBuffer(e))
                return e.length === 0 ? -1 : sa(t, e, n, i, r);
            if (typeof e == "number")
                return e = e & 255,
                typeof Uint8Array.prototype.indexOf == "function" ? r ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : sa(t, [e], n, i, r);
            throw new TypeError("val must be string, number or Buffer")
        }
        function sa(t, e, n, i, r) {
            let a = 1
              , o = t.length
              , l = e.length;
            if (i !== void 0 && (i = String(i).toLowerCase(),
            i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
                if (t.length < 2 || e.length < 2)
                    return -1;
                a = 2,
                o /= 2,
                l /= 2,
                n /= 2
            }
            function u(h, g) {
                return a === 1 ? h[g] : h.readUInt16BE(g * a)
            }
            let d;
            if (r) {
                let h = -1;
                for (d = n; d < o; d++)
                    if (u(t, d) === u(e, h === -1 ? 0 : d - h)) {
                        if (h === -1 && (h = d),
                        d - h + 1 === l)
                            return h * a
                    } else
                        h !== -1 && (d -= d - h),
                        h = -1
            } else
                for (n + l > o && (n = o - l),
                d = n; d >= 0; d--) {
                    let h = !0;
                    for (let g = 0; g < l; g++)
                        if (u(t, d + g) !== u(e, g)) {
                            h = !1;
                            break
                        }
                    if (h)
                        return d
                }
            return -1
        }
        O.prototype.includes = function(e, n, i) {
            return this.indexOf(e, n, i) !== -1
        }
        ;
        O.prototype.indexOf = function(e, n, i) {
            return ma(this, e, n, i, !0)
        }
        ;
        O.prototype.lastIndexOf = function(e, n, i) {
            return ma(this, e, n, i, !1)
        }
        ;
        function Hd(t, e, n, i) {
            n = Number(n) || 0;
            let r = t.length - n;
            i ? (i = Number(i),
            i > r && (i = r)) : i = r;
            let a = e.length;
            i > a / 2 && (i = a / 2);
            let o;
            for (o = 0; o < i; ++o) {
                let l = parseInt(e.substr(o * 2, 2), 16);
                if (Ui(l))
                    return o;
                t[n + o] = l
            }
            return o
        }
        function $d(t, e, n, i) {
            return Nn(Ni(e, t.length - n), t, n, i)
        }
        function Gd(t, e, n, i) {
            return Nn(im(e), t, n, i)
        }
        function qd(t, e, n, i) {
            return Nn(ya(e), t, n, i)
        }
        function Yd(t, e, n, i) {
            return Nn(rm(e, t.length - n), t, n, i)
        }
        O.prototype.write = function(e, n, i, r) {
            if (n === void 0)
                r = "utf8",
                i = this.length,
                n = 0;
            else if (i === void 0 && typeof n == "string")
                r = n,
                i = this.length,
                n = 0;
            else if (isFinite(n))
                n = n >>> 0,
                isFinite(i) ? (i = i >>> 0,
                r === void 0 && (r = "utf8")) : (r = i,
                i = void 0);
            else
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            let a = this.length - n;
            if ((i === void 0 || i > a) && (i = a),
            e.length > 0 && (i < 0 || n < 0) || n > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            let o = !1;
            for (; ; )
                switch (r) {
                case "hex":
                    return Hd(this, e, n, i);
                case "utf8":
                case "utf-8":
                    return $d(this, e, n, i);
                case "ascii":
                case "latin1":
                case "binary":
                    return Gd(this, e, n, i);
                case "base64":
                    return qd(this, e, n, i);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return Yd(this, e, n, i);
                default:
                    if (o)
                        throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(),
                    o = !0
                }
        }
        ;
        O.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        function Kd(t, e, n) {
            return e === 0 && n === t.length ? Oi.fromByteArray(t) : Oi.fromByteArray(t.slice(e, n))
        }
        function ha(t, e, n) {
            n = Math.min(t.length, n);
            let i = []
              , r = e;
            for (; r < n; ) {
                let a = t[r]
                  , o = null
                  , l = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                if (r + l <= n) {
                    let u, d, h, g;
                    switch (l) {
                    case 1:
                        a < 128 && (o = a);
                        break;
                    case 2:
                        u = t[r + 1],
                        (u & 192) === 128 && (g = (a & 31) << 6 | u & 63,
                        g > 127 && (o = g));
                        break;
                    case 3:
                        u = t[r + 1],
                        d = t[r + 2],
                        (u & 192) === 128 && (d & 192) === 128 && (g = (a & 15) << 12 | (u & 63) << 6 | d & 63,
                        g > 2047 && (g < 55296 || g > 57343) && (o = g));
                        break;
                    case 4:
                        u = t[r + 1],
                        d = t[r + 2],
                        h = t[r + 3],
                        (u & 192) === 128 && (d & 192) === 128 && (h & 192) === 128 && (g = (a & 15) << 18 | (u & 63) << 12 | (d & 63) << 6 | h & 63,
                        g > 65535 && g < 1114112 && (o = g))
                    }
                }
                o === null ? (o = 65533,
                l = 1) : o > 65535 && (o -= 65536,
                i.push(o >>> 10 & 1023 | 55296),
                o = 56320 | o & 1023),
                i.push(o),
                r += l
            }
            return Xd(i)
        }
        var ca = 4096;
        function Xd(t) {
            let e = t.length;
            if (e <= ca)
                return String.fromCharCode.apply(String, t);
            let n = ""
              , i = 0;
            for (; i < e; )
                n += String.fromCharCode.apply(String, t.slice(i, i += ca));
            return n
        }
        function zd(t, e, n) {
            let i = "";
            n = Math.min(t.length, n);
            for (let r = e; r < n; ++r)
                i += String.fromCharCode(t[r] & 127);
            return i
        }
        function Wd(t, e, n) {
            let i = "";
            n = Math.min(t.length, n);
            for (let r = e; r < n; ++r)
                i += String.fromCharCode(t[r]);
            return i
        }
        function Jd(t, e, n) {
            let i = t.length;
            (!e || e < 0) && (e = 0),
            (!n || n < 0 || n > i) && (n = i);
            let r = "";
            for (let a = e; a < n; ++a)
                r += am[t[a]];
            return r
        }
        function Qd(t, e, n) {
            let i = t.slice(e, n)
              , r = "";
            for (let a = 0; a < i.length - 1; a += 2)
                r += String.fromCharCode(i[a] + i[a + 1] * 256);
            return r
        }
        O.prototype.slice = function(e, n) {
            let i = this.length;
            e = ~~e,
            n = n === void 0 ? i : ~~n,
            e < 0 ? (e += i,
            e < 0 && (e = 0)) : e > i && (e = i),
            n < 0 ? (n += i,
            n < 0 && (n = 0)) : n > i && (n = i),
            n < e && (n = e);
            let r = this.subarray(e, n);
            return Object.setPrototypeOf(r, O.prototype),
            r
        }
        ;
        function mt(t, e, n) {
            if (t % 1 !== 0 || t < 0)
                throw new RangeError("offset is not uint");
            if (t + e > n)
                throw new RangeError("Trying to access beyond buffer length")
        }
        O.prototype.readUintLE = O.prototype.readUIntLE = function(e, n, i) {
            e = e >>> 0,
            n = n >>> 0,
            i || mt(e, n, this.length);
            let r = this[e]
              , a = 1
              , o = 0;
            for (; ++o < n && (a *= 256); )
                r += this[e + o] * a;
            return r
        }
        ;
        O.prototype.readUintBE = O.prototype.readUIntBE = function(e, n, i) {
            e = e >>> 0,
            n = n >>> 0,
            i || mt(e, n, this.length);
            let r = this[e + --n]
              , a = 1;
            for (; n > 0 && (a *= 256); )
                r += this[e + --n] * a;
            return r
        }
        ;
        O.prototype.readUint8 = O.prototype.readUInt8 = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 1, this.length),
            this[e]
        }
        ;
        O.prototype.readUint16LE = O.prototype.readUInt16LE = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ;
        O.prototype.readUint16BE = O.prototype.readUInt16BE = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ;
        O.prototype.readUint32LE = O.prototype.readUInt32LE = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216
        }
        ;
        O.prototype.readUint32BE = O.prototype.readUInt32BE = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 4, this.length),
            this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ;
        O.prototype.readBigUInt64LE = ue(function(e) {
            e = e >>> 0,
            Ue(e, "offset");
            let n = this[e]
              , i = this[e + 7];
            (n === void 0 || i === void 0) && ln(e, this.length - 8);
            let r = n + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24
              , a = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + i * 2 ** 24;
            return BigInt(r) + (BigInt(a) << BigInt(32))
        });
        O.prototype.readBigUInt64BE = ue(function(e) {
            e = e >>> 0,
            Ue(e, "offset");
            let n = this[e]
              , i = this[e + 7];
            (n === void 0 || i === void 0) && ln(e, this.length - 8);
            let r = n * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e]
              , a = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + i;
            return (BigInt(r) << BigInt(32)) + BigInt(a)
        });
        O.prototype.readIntLE = function(e, n, i) {
            e = e >>> 0,
            n = n >>> 0,
            i || mt(e, n, this.length);
            let r = this[e]
              , a = 1
              , o = 0;
            for (; ++o < n && (a *= 256); )
                r += this[e + o] * a;
            return a *= 128,
            r >= a && (r -= Math.pow(2, 8 * n)),
            r
        }
        ;
        O.prototype.readIntBE = function(e, n, i) {
            e = e >>> 0,
            n = n >>> 0,
            i || mt(e, n, this.length);
            let r = n
              , a = 1
              , o = this[e + --r];
            for (; r > 0 && (a *= 256); )
                o += this[e + --r] * a;
            return a *= 128,
            o >= a && (o -= Math.pow(2, 8 * n)),
            o
        }
        ;
        O.prototype.readInt8 = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 1, this.length),
            this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
        }
        ;
        O.prototype.readInt16LE = function(e, n) {
            e = e >>> 0,
            n || mt(e, 2, this.length);
            let i = this[e] | this[e + 1] << 8;
            return i & 32768 ? i | 4294901760 : i
        }
        ;
        O.prototype.readInt16BE = function(e, n) {
            e = e >>> 0,
            n || mt(e, 2, this.length);
            let i = this[e + 1] | this[e] << 8;
            return i & 32768 ? i | 4294901760 : i
        }
        ;
        O.prototype.readInt32LE = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ;
        O.prototype.readInt32BE = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ;
        O.prototype.readBigInt64LE = ue(function(e) {
            e = e >>> 0,
            Ue(e, "offset");
            let n = this[e]
              , i = this[e + 7];
            (n === void 0 || i === void 0) && ln(e, this.length - 8);
            let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (i << 24);
            return (BigInt(r) << BigInt(32)) + BigInt(n + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
        });
        O.prototype.readBigInt64BE = ue(function(e) {
            e = e >>> 0,
            Ue(e, "offset");
            let n = this[e]
              , i = this[e + 7];
            (n === void 0 || i === void 0) && ln(e, this.length - 8);
            let r = (n << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
            return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + i)
        });
        O.prototype.readFloatLE = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 4, this.length),
            Ve.read(this, e, !0, 23, 4)
        }
        ;
        O.prototype.readFloatBE = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 4, this.length),
            Ve.read(this, e, !1, 23, 4)
        }
        ;
        O.prototype.readDoubleLE = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 8, this.length),
            Ve.read(this, e, !0, 52, 8)
        }
        ;
        O.prototype.readDoubleBE = function(e, n) {
            return e = e >>> 0,
            n || mt(e, 8, this.length),
            Ve.read(this, e, !1, 52, 8)
        }
        ;
        function St(t, e, n, i, r, a) {
            if (!O.isBuffer(t))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > r || e < a)
                throw new RangeError('"value" argument is out of bounds');
            if (n + i > t.length)
                throw new RangeError("Index out of range")
        }
        O.prototype.writeUintLE = O.prototype.writeUIntLE = function(e, n, i, r) {
            if (e = +e,
            n = n >>> 0,
            i = i >>> 0,
            !r) {
                let l = Math.pow(2, 8 * i) - 1;
                St(this, e, n, i, l, 0)
            }
            let a = 1
              , o = 0;
            for (this[n] = e & 255; ++o < i && (a *= 256); )
                this[n + o] = e / a & 255;
            return n + i
        }
        ;
        O.prototype.writeUintBE = O.prototype.writeUIntBE = function(e, n, i, r) {
            if (e = +e,
            n = n >>> 0,
            i = i >>> 0,
            !r) {
                let l = Math.pow(2, 8 * i) - 1;
                St(this, e, n, i, l, 0)
            }
            let a = i - 1
              , o = 1;
            for (this[n + a] = e & 255; --a >= 0 && (o *= 256); )
                this[n + a] = e / o & 255;
            return n + i
        }
        ;
        O.prototype.writeUint8 = O.prototype.writeUInt8 = function(e, n, i) {
            return e = +e,
            n = n >>> 0,
            i || St(this, e, n, 1, 255, 0),
            this[n] = e & 255,
            n + 1
        }
        ;
        O.prototype.writeUint16LE = O.prototype.writeUInt16LE = function(e, n, i) {
            return e = +e,
            n = n >>> 0,
            i || St(this, e, n, 2, 65535, 0),
            this[n] = e & 255,
            this[n + 1] = e >>> 8,
            n + 2
        }
        ;
        O.prototype.writeUint16BE = O.prototype.writeUInt16BE = function(e, n, i) {
            return e = +e,
            n = n >>> 0,
            i || St(this, e, n, 2, 65535, 0),
            this[n] = e >>> 8,
            this[n + 1] = e & 255,
            n + 2
        }
        ;
        O.prototype.writeUint32LE = O.prototype.writeUInt32LE = function(e, n, i) {
            return e = +e,
            n = n >>> 0,
            i || St(this, e, n, 4, 4294967295, 0),
            this[n + 3] = e >>> 24,
            this[n + 2] = e >>> 16,
            this[n + 1] = e >>> 8,
            this[n] = e & 255,
            n + 4
        }
        ;
        O.prototype.writeUint32BE = O.prototype.writeUInt32BE = function(e, n, i) {
            return e = +e,
            n = n >>> 0,
            i || St(this, e, n, 4, 4294967295, 0),
            this[n] = e >>> 24,
            this[n + 1] = e >>> 16,
            this[n + 2] = e >>> 8,
            this[n + 3] = e & 255,
            n + 4
        }
        ;
        function pa(t, e, n, i, r) {
            wa(e, i, r, t, n, 7);
            let a = Number(e & BigInt(4294967295));
            t[n++] = a,
            a = a >> 8,
            t[n++] = a,
            a = a >> 8,
            t[n++] = a,
            a = a >> 8,
            t[n++] = a;
            let o = Number(e >> BigInt(32) & BigInt(4294967295));
            return t[n++] = o,
            o = o >> 8,
            t[n++] = o,
            o = o >> 8,
            t[n++] = o,
            o = o >> 8,
            t[n++] = o,
            n
        }
        function ga(t, e, n, i, r) {
            wa(e, i, r, t, n, 7);
            let a = Number(e & BigInt(4294967295));
            t[n + 7] = a,
            a = a >> 8,
            t[n + 6] = a,
            a = a >> 8,
            t[n + 5] = a,
            a = a >> 8,
            t[n + 4] = a;
            let o = Number(e >> BigInt(32) & BigInt(4294967295));
            return t[n + 3] = o,
            o = o >> 8,
            t[n + 2] = o,
            o = o >> 8,
            t[n + 1] = o,
            o = o >> 8,
            t[n] = o,
            n + 8
        }
        O.prototype.writeBigUInt64LE = ue(function(e, n=0) {
            return pa(this, e, n, BigInt(0), BigInt("0xffffffffffffffff"))
        });
        O.prototype.writeBigUInt64BE = ue(function(e, n=0) {
            return ga(this, e, n, BigInt(0), BigInt("0xffffffffffffffff"))
        });
        O.prototype.writeIntLE = function(e, n, i, r) {
            if (e = +e,
            n = n >>> 0,
            !r) {
                let u = Math.pow(2, 8 * i - 1);
                St(this, e, n, i, u - 1, -u)
            }
            let a = 0
              , o = 1
              , l = 0;
            for (this[n] = e & 255; ++a < i && (o *= 256); )
                e < 0 && l === 0 && this[n + a - 1] !== 0 && (l = 1),
                this[n + a] = (e / o >> 0) - l & 255;
            return n + i
        }
        ;
        O.prototype.writeIntBE = function(e, n, i, r) {
            if (e = +e,
            n = n >>> 0,
            !r) {
                let u = Math.pow(2, 8 * i - 1);
                St(this, e, n, i, u - 1, -u)
            }
            let a = i - 1
              , o = 1
              , l = 0;
            for (this[n + a] = e & 255; --a >= 0 && (o *= 256); )
                e < 0 && l === 0 && this[n + a + 1] !== 0 && (l = 1),
                this[n + a] = (e / o >> 0) - l & 255;
            return n + i
        }
        ;
        O.prototype.writeInt8 = function(e, n, i) {
            return e = +e,
            n = n >>> 0,
            i || St(this, e, n, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            this[n] = e & 255,
            n + 1
        }
        ;
        O.prototype.writeInt16LE = function(e, n, i) {
            return e = +e,
            n = n >>> 0,
            i || St(this, e, n, 2, 32767, -32768),
            this[n] = e & 255,
            this[n + 1] = e >>> 8,
            n + 2
        }
        ;
        O.prototype.writeInt16BE = function(e, n, i) {
            return e = +e,
            n = n >>> 0,
            i || St(this, e, n, 2, 32767, -32768),
            this[n] = e >>> 8,
            this[n + 1] = e & 255,
            n + 2
        }
        ;
        O.prototype.writeInt32LE = function(e, n, i) {
            return e = +e,
            n = n >>> 0,
            i || St(this, e, n, 4, 2147483647, -2147483648),
            this[n] = e & 255,
            this[n + 1] = e >>> 8,
            this[n + 2] = e >>> 16,
            this[n + 3] = e >>> 24,
            n + 4
        }
        ;
        O.prototype.writeInt32BE = function(e, n, i) {
            return e = +e,
            n = n >>> 0,
            i || St(this, e, n, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            this[n] = e >>> 24,
            this[n + 1] = e >>> 16,
            this[n + 2] = e >>> 8,
            this[n + 3] = e & 255,
            n + 4
        }
        ;
        O.prototype.writeBigInt64LE = ue(function(e, n=0) {
            return pa(this, e, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        });
        O.prototype.writeBigInt64BE = ue(function(e, n=0) {
            return ga(this, e, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        });
        function va(t, e, n, i, r, a) {
            if (n + i > t.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("Index out of range")
        }
        function xa(t, e, n, i, r) {
            return e = +e,
            n = n >>> 0,
            r || va(t, e, n, 4, 34028234663852886e22, -34028234663852886e22),
            Ve.write(t, e, n, i, 23, 4),
            n + 4
        }
        O.prototype.writeFloatLE = function(e, n, i) {
            return xa(this, e, n, !0, i)
        }
        ;
        O.prototype.writeFloatBE = function(e, n, i) {
            return xa(this, e, n, !1, i)
        }
        ;
        function _a(t, e, n, i, r) {
            return e = +e,
            n = n >>> 0,
            r || va(t, e, n, 8, 17976931348623157e292, -17976931348623157e292),
            Ve.write(t, e, n, i, 52, 8),
            n + 8
        }
        O.prototype.writeDoubleLE = function(e, n, i) {
            return _a(this, e, n, !0, i)
        }
        ;
        O.prototype.writeDoubleBE = function(e, n, i) {
            return _a(this, e, n, !1, i)
        }
        ;
        O.prototype.copy = function(e, n, i, r) {
            if (!O.isBuffer(e))
                throw new TypeError("argument should be a Buffer");
            if (i || (i = 0),
            !r && r !== 0 && (r = this.length),
            n >= e.length && (n = e.length),
            n || (n = 0),
            r > 0 && r < i && (r = i),
            r === i || e.length === 0 || this.length === 0)
                return 0;
            if (n < 0)
                throw new RangeError("targetStart out of bounds");
            if (i < 0 || i >= this.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
            e.length - n < r - i && (r = e.length - n + i);
            let a = r - i;
            return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(n, i, r) : Uint8Array.prototype.set.call(e, this.subarray(i, r), n),
            a
        }
        ;
        O.prototype.fill = function(e, n, i, r) {
            if (typeof e == "string") {
                if (typeof n == "string" ? (r = n,
                n = 0,
                i = this.length) : typeof i == "string" && (r = i,
                i = this.length),
                r !== void 0 && typeof r != "string")
                    throw new TypeError("encoding must be a string");
                if (typeof r == "string" && !O.isEncoding(r))
                    throw new TypeError("Unknown encoding: " + r);
                if (e.length === 1) {
                    let o = e.charCodeAt(0);
                    (r === "utf8" && o < 128 || r === "latin1") && (e = o)
                }
            } else
                typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
            if (n < 0 || this.length < n || this.length < i)
                throw new RangeError("Out of range index");
            if (i <= n)
                return this;
            n = n >>> 0,
            i = i === void 0 ? this.length : i >>> 0,
            e || (e = 0);
            let a;
            if (typeof e == "number")
                for (a = n; a < i; ++a)
                    this[a] = e;
            else {
                let o = O.isBuffer(e) ? e : O.from(e, r)
                  , l = o.length;
                if (l === 0)
                    throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                for (a = 0; a < i - n; ++a)
                    this[a + n] = o[a % l]
            }
            return this
        }
        ;
        var Be = {};
        function Vi(t, e, n) {
            Be[t] = class extends n {
                constructor() {
                    super(),
                    Object.defineProperty(this, "message", {
                        value: e.apply(this, arguments),
                        writable: !0,
                        configurable: !0
                    }),
                    this.name = `${this.name} [${t}]`,
                    this.stack,
                    delete this.name
                }
                get code() {
                    return t
                }
                set code(r) {
                    Object.defineProperty(this, "code", {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    })
                }
                toString() {
                    return `${this.name} [${t}]: ${this.message}`
                }
            }
        }
        Vi("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
            return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
        }, RangeError);
        Vi("ERR_INVALID_ARG_TYPE", function(t, e) {
            return `The "${t}" argument must be of type number. Received type ${typeof e}`
        }, TypeError);
        Vi("ERR_OUT_OF_RANGE", function(t, e, n) {
            let i = `The value of "${t}" is out of range.`
              , r = n;
            return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? r = la(String(n)) : typeof n == "bigint" && (r = String(n),
            (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (r = la(r)),
            r += "n"),
            i += ` It must be ${e}. Received ${r}`,
            i
        }, RangeError);
        function la(t) {
            let e = ""
              , n = t.length
              , i = t[0] === "-" ? 1 : 0;
            for (; n >= i + 4; n -= 3)
                e = `_${t.slice(n - 3, n)}${e}`;
            return `${t.slice(0, n)}${e}`
        }
        function tm(t, e, n) {
            Ue(e, "offset"),
            (t[e] === void 0 || t[e + n] === void 0) && ln(e, t.length - (n + 1))
        }
        function wa(t, e, n, i, r, a) {
            if (t > n || t < e) {
                let o = typeof e == "bigint" ? "n" : "", l;
                throw a > 3 ? e === 0 || e === BigInt(0) ? l = `>= 0${o} and < 2${o} ** ${(a + 1) * 8}${o}` : l = `>= -(2${o} ** ${(a + 1) * 8 - 1}${o}) and < 2 ** ${(a + 1) * 8 - 1}${o}` : l = `>= ${e}${o} and <= ${n}${o}`,
                new Be.ERR_OUT_OF_RANGE("value",l,t)
            }
            tm(i, r, a)
        }
        function Ue(t, e) {
            if (typeof t != "number")
                throw new Be.ERR_INVALID_ARG_TYPE(e,"number",t)
        }
        function ln(t, e, n) {
            throw Math.floor(t) !== t ? (Ue(t, n),
            new Be.ERR_OUT_OF_RANGE(n || "offset","an integer",t)) : e < 0 ? new Be.ERR_BUFFER_OUT_OF_BOUNDS : new Be.ERR_OUT_OF_RANGE(n || "offset",`>= ${n ? 1 : 0} and <= ${e}`,t)
        }
        var em = /[^+/0-9A-Za-z-_]/g;
        function nm(t) {
            if (t = t.split("=")[0],
            t = t.trim().replace(em, ""),
            t.length < 2)
                return "";
            for (; t.length % 4 !== 0; )
                t = t + "=";
            return t
        }
        function Ni(t, e) {
            e = e || 1 / 0;
            let n, i = t.length, r = null, a = [];
            for (let o = 0; o < i; ++o) {
                if (n = t.charCodeAt(o),
                n > 55295 && n < 57344) {
                    if (!r) {
                        if (n > 56319) {
                            (e -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        } else if (o + 1 === i) {
                            (e -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        r = n;
                        continue
                    }
                    if (n < 56320) {
                        (e -= 3) > -1 && a.push(239, 191, 189),
                        r = n;
                        continue
                    }
                    n = (r - 55296 << 10 | n - 56320) + 65536
                } else
                    r && (e -= 3) > -1 && a.push(239, 191, 189);
                if (r = null,
                n < 128) {
                    if ((e -= 1) < 0)
                        break;
                    a.push(n)
                } else if (n < 2048) {
                    if ((e -= 2) < 0)
                        break;
                    a.push(n >> 6 | 192, n & 63 | 128)
                } else if (n < 65536) {
                    if ((e -= 3) < 0)
                        break;
                    a.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128)
                } else if (n < 1114112) {
                    if ((e -= 4) < 0)
                        break;
                    a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128)
                } else
                    throw new Error("Invalid code point")
            }
            return a
        }
        function im(t) {
            let e = [];
            for (let n = 0; n < t.length; ++n)
                e.push(t.charCodeAt(n) & 255);
            return e
        }
        function rm(t, e) {
            let n, i, r, a = [];
            for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
                n = t.charCodeAt(o),
                i = n >> 8,
                r = n % 256,
                a.push(r),
                a.push(i);
            return a
        }
        function ya(t) {
            return Oi.toByteArray(nm(t))
        }
        function Nn(t, e, n, i) {
            let r;
            for (r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r)
                e[r + n] = t[r];
            return r
        }
        function Kt(t, e) {
            return t instanceof e || t != null && t.constructor != null && t.constructor.name != null && t.constructor.name === e.name
        }
        function Ui(t) {
            return t !== t
        }
        var am = function() {
            let t = "0123456789abcdef"
              , e = new Array(256);
            for (let n = 0; n < 16; ++n) {
                let i = n * 16;
                for (let r = 0; r < 16; ++r)
                    e[i + r] = t[n] + t[r]
            }
            return e
        }();
        function ue(t) {
            return typeof BigInt > "u" ? om : t
        }
        function om() {
            throw new Error("BigInt not supported")
        }
    }
    );
    var Tl = dt((Ly,Cl)=>{
        Cl.exports = Lh;
        function Lh(t) {
            var e, n;
            if (typeof t != "function")
                throw new Error("expected a function but got " + t);
            return function() {
                return e || (e = !0,
                n = t.apply(this, arguments)),
                n
            }
        }
    }
    );
    var Ll = dt(Al=>{
        (function(t) {
            "use strict";
            function e(v, I) {
                var R;
                return v instanceof Buffer ? R = v : R = Buffer.from(v.buffer, v.byteOffset, v.byteLength),
                R.toString(I)
            }
            var n = function(v) {
                return Buffer.from(v)
            };
            function i(v) {
                for (var I = 0, R = Math.min(256 * 256, v.length + 1), F = new Uint16Array(R), C = [], j = 0; ; ) {
                    var y = I < v.length;
                    if (!y || j >= R - 1) {
                        var A = F.subarray(0, j)
                          , S = A;
                        if (C.push(String.fromCharCode.apply(null, S)),
                        !y)
                            return C.join("");
                        v = v.subarray(I),
                        I = 0,
                        j = 0
                    }
                    var L = v[I++];
                    if (!(L & 128))
                        F[j++] = L;
                    else if ((L & 224) === 192) {
                        var s = v[I++] & 63;
                        F[j++] = (L & 31) << 6 | s
                    } else if ((L & 240) === 224) {
                        var s = v[I++] & 63
                          , f = v[I++] & 63;
                        F[j++] = (L & 31) << 12 | s << 6 | f
                    } else if ((L & 248) === 240) {
                        var s = v[I++] & 63
                          , f = v[I++] & 63
                          , p = v[I++] & 63
                          , b = (L & 7) << 18 | s << 12 | f << 6 | p;
                        b > 65535 && (b -= 65536,
                        F[j++] = b >>> 10 & 1023 | 55296,
                        b = 56320 | b & 1023),
                        F[j++] = b
                    }
                }
            }
            function r(v) {
                for (var I = 0, R = v.length, F = 0, C = Math.max(32, R + (R >>> 1) + 7), j = new Uint8Array(C >>> 3 << 3); I < R; ) {
                    var y = v.charCodeAt(I++);
                    if (y >= 55296 && y <= 56319) {
                        if (I < R) {
                            var A = v.charCodeAt(I);
                            (A & 64512) === 56320 && (++I,
                            y = ((y & 1023) << 10) + (A & 1023) + 65536)
                        }
                        if (y >= 55296 && y <= 56319)
                            continue
                    }
                    if (F + 4 > j.length) {
                        C += 8,
                        C *= 1 + I / v.length * 2,
                        C = C >>> 3 << 3;
                        var S = new Uint8Array(C);
                        S.set(j),
                        j = S
                    }
                    if (y & 4294967168)
                        if (!(y & 4294965248))
                            j[F++] = y >>> 6 & 31 | 192;
                        else if (!(y & 4294901760))
                            j[F++] = y >>> 12 & 15 | 224,
                            j[F++] = y >>> 6 & 63 | 128;
                        else if (!(y & 4292870144))
                            j[F++] = y >>> 18 & 7 | 240,
                            j[F++] = y >>> 12 & 63 | 128,
                            j[F++] = y >>> 6 & 63 | 128;
                        else
                            continue;
                    else {
                        j[F++] = y;
                        continue
                    }
                    j[F++] = y & 63 | 128
                }
                return j.slice ? j.slice(0, F) : j.subarray(0, F)
            }
            var a = "Failed to "
              , o = function(v, I, R) {
                if (v)
                    throw new Error("".concat(a).concat(I, ": the '").concat(R, "' option is unsupported."))
            }
              , l = typeof Buffer == "function" && Buffer.from
              , u = l ? n : r;
            function d() {
                this.encoding = "utf-8"
            }
            d.prototype.encode = function(v, I) {
                return o(I && I.stream, "encode", "stream"),
                u(v)
            }
            ;
            function h(v) {
                var I;
                try {
                    var R = new Blob([v],{
                        type: "text/plain;charset=UTF-8"
                    });
                    I = URL.createObjectURL(R);
                    var F = new XMLHttpRequest;
                    return F.open("GET", I, !1),
                    F.send(),
                    F.responseText
                } finally {
                    I && URL.revokeObjectURL(I)
                }
            }
            var g = !l && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function"
              , _ = ["utf-8", "utf8", "unicode-1-1-utf-8"]
              , E = i;
            l ? E = e : g && (E = function(v) {
                try {
                    return h(v)
                } catch {
                    return i(v)
                }
            }
            );
            var T = "construct 'TextDecoder'"
              , w = "".concat(a, " ").concat(T, ": the ");
            function x(v, I) {
                o(I && I.fatal, T, "fatal"),
                v = v || "utf-8";
                var R;
                if (l ? R = Buffer.isEncoding(v) : R = _.indexOf(v.toLowerCase()) !== -1,
                !R)
                    throw new RangeError("".concat(w, " encoding label provided ('").concat(v, "') is invalid."));
                this.encoding = v,
                this.fatal = !1,
                this.ignoreBOM = !1
            }
            x.prototype.decode = function(v, I) {
                o(I && I.stream, "decode", "stream");
                var R;
                return v instanceof Uint8Array ? R = v : v.buffer instanceof ArrayBuffer ? R = new Uint8Array(v.buffer) : R = new Uint8Array(v),
                E(R, this.encoding)
            }
            ,
            t.TextEncoder = t.TextEncoder || d,
            t.TextDecoder = t.TextDecoder || x
        }
        )(typeof window < "u" ? window : typeof global < "u" ? global : Al)
    }
    );
    var Fl = dt((Fy,Ol)=>{
        Ll();
        Ol.exports = {
            encode: t=>new TextEncoder().encode(t),
            decode: t=>new TextDecoder().decode(t)
        }
    }
    );
    var Nl = dt((Dy,Dl)=>{
        Dl.exports = Oh;
        function Oh(t, e, n) {
            var i;
            return function() {
                if (!e)
                    return t.apply(this, arguments);
                var r = this
                  , a = arguments
                  , o = n && !i;
                if (clearTimeout(i),
                i = setTimeout(function() {
                    if (i = null,
                    !o)
                        return t.apply(r, a)
                }, e),
                o)
                    return t.apply(this, arguments)
            }
        }
    }
    );
    var gi = dt((Ny,Vl)=>{
        function Ml(t) {
            if (t.length === 0)
                return ".";
            let e = Bl(t);
            return e = e.reduce(Mh, []),
            Lr(...e)
        }
        function Fh(...t) {
            let e = "";
            for (let n of t)
                n.startsWith("/") ? e = n : e = Ml(Lr(e, n));
            return e
        }
        function Lr(...t) {
            if (t.length === 0)
                return "";
            let e = t.join("/");
            return e = e.replace(/\/{2,}/g, "/"),
            e
        }
        function Bl(t) {
            if (t.length === 0)
                return [];
            if (t === "/")
                return ["/"];
            let e = t.split("/");
            return e[e.length - 1] === "" && e.pop(),
            t[0] === "/" ? e[0] = "/" : e[0] !== "." && e.unshift("."),
            e
        }
        function Dh(t) {
            let e = t.lastIndexOf("/");
            if (e === -1)
                throw new Error(`Cannot get dirname of "${t}"`);
            return e === 0 ? "/" : t.slice(0, e)
        }
        function Nh(t) {
            if (t === "/")
                throw new Error(`Cannot get basename of "${t}"`);
            let e = t.lastIndexOf("/");
            return e === -1 ? t : t.slice(e + 1)
        }
        function Mh(t, e) {
            if (t.length === 0)
                return t.push(e),
                t;
            if (e === ".")
                return t;
            if (e === "..") {
                if (t.length === 1) {
                    if (t[0] === "/")
                        throw new Error("Unable to normalize path - traverses above root directory");
                    if (t[0] === ".")
                        return t.push(e),
                        t
                }
                return t[t.length - 1] === ".." ? (t.push(".."),
                t) : (t.pop(),
                t)
            }
            return t.push(e),
            t
        }
        Vl.exports = {
            join: Lr,
            normalize: Ml,
            split: Bl,
            basename: Nh,
            dirname: Dh,
            resolve: Fh
        }
    }
    );
    var Or = dt((My,Ul)=>{
        function kn(t) {
            return class extends Error {
                constructor(...e) {
                    super(...e),
                    this.code = t,
                    this.message ? this.message = t + ": " + this.message : this.message = t
                }
            }
        }
        var Bh = kn("EEXIST")
          , Vh = kn("ENOENT")
          , Uh = kn("ENOTDIR")
          , Ph = kn("ENOTEMPTY")
          , Zh = kn("ETIMEDOUT");
        Ul.exports = {
            EEXIST: Bh,
            ENOENT: Vh,
            ENOTDIR: Uh,
            ENOTEMPTY: Ph,
            ETIMEDOUT: Zh
        }
    }
    );
    var $l = dt((Uy,Hl)=>{
        var jt = gi()
          , {EEXIST: Pl, ENOENT: Hh, ENOTDIR: Zl, ENOTEMPTY: $h} = Or()
          , _t = 0;
        Hl.exports = class {
            constructor() {}
            _makeRoot(e=new Map) {
                return e.set(_t, {
                    mode: 511,
                    type: "dir",
                    size: 0,
                    ino: 0,
                    mtimeMs: Date.now()
                }),
                e
            }
            activate(e=null) {
                e === null ? this._root = new Map([["/", this._makeRoot()]]) : typeof e == "string" ? this._root = new Map([["/", this._makeRoot(this.parse(e))]]) : this._root = e
            }
            get activated() {
                return !!this._root
            }
            deactivate() {
                this._root = void 0
            }
            size() {
                return this._countInodes(this._root.get("/")) - 1
            }
            _countInodes(e) {
                let n = 1;
                for (let[i,r] of e)
                    i !== _t && (n += this._countInodes(r));
                return n
            }
            autoinc() {
                return this._maxInode(this._root.get("/")) + 1
            }
            _maxInode(e) {
                let n = e.get(_t).ino;
                for (let[i,r] of e)
                    i !== _t && (n = Math.max(n, this._maxInode(r)));
                return n
            }
            print(e=this._root.get("/")) {
                let n = ""
                  , i = (r,a)=>{
                    for (let[o,l] of r) {
                        if (o === 0)
                            continue;
                        let u = l.get(_t)
                          , d = u.mode.toString(8);
                        n += `${"	".repeat(a)}${o}	${d}`,
                        u.type === "file" ? n += `	${u.size}	${u.mtimeMs}
` : (n += `
`,
                        i(l, a + 1))
                    }
                }
                ;
                return i(e, 0),
                n
            }
            parse(e) {
                let n = 0;
                function i(l) {
                    let u = ++n
                      , d = l.length === 1 ? "dir" : "file"
                      , [h,g,_] = l;
                    return h = parseInt(h, 8),
                    g = g ? parseInt(g) : 0,
                    _ = _ ? parseInt(_) : Date.now(),
                    new Map([[_t, {
                        mode: h,
                        type: d,
                        size: g,
                        mtimeMs: _,
                        ino: u
                    }]])
                }
                let r = e.trim().split(`
`)
                  , a = this._makeRoot()
                  , o = [{
                    indent: -1,
                    node: a
                }, {
                    indent: 0,
                    node: null
                }];
                for (let l of r) {
                    let d = l.match(/^\t*/)[0].length;
                    l = l.slice(d);
                    let[h,...g] = l.split("	")
                      , _ = i(g);
                    if (d <= o[o.length - 1].indent)
                        for (; d <= o[o.length - 1].indent; )
                            o.pop();
                    o.push({
                        indent: d,
                        node: _
                    }),
                    o[o.length - 2].node.set(h, _)
                }
                return a
            }
            _lookup(e, n=!0) {
                let i = this._root
                  , r = "/"
                  , a = jt.split(e);
                for (let o = 0; o < a.length; ++o) {
                    let l = a[o];
                    if (i = i.get(l),
                    !i)
                        throw new Hh(e);
                    if (n || o < a.length - 1) {
                        let u = i.get(_t);
                        if (u.type === "symlink") {
                            let d = jt.resolve(r, u.target);
                            i = this._lookup(d)
                        }
                        r ? r = jt.join(r, l) : r = l
                    }
                }
                return i
            }
            mkdir(e, {mode: n}) {
                if (e === "/")
                    throw new Pl;
                let i = this._lookup(jt.dirname(e))
                  , r = jt.basename(e);
                if (i.has(r))
                    throw new Pl;
                let a = new Map
                  , o = {
                    mode: n,
                    type: "dir",
                    size: 0,
                    mtimeMs: Date.now(),
                    ino: this.autoinc()
                };
                a.set(_t, o),
                i.set(r, a)
            }
            rmdir(e) {
                let n = this._lookup(e);
                if (n.get(_t).type !== "dir")
                    throw new Zl;
                if (n.size > 1)
                    throw new $h;
                let i = this._lookup(jt.dirname(e))
                  , r = jt.basename(e);
                i.delete(r)
            }
            readdir(e) {
                let n = this._lookup(e);
                if (n.get(_t).type !== "dir")
                    throw new Zl;
                return [...n.keys()].filter(i=>typeof i == "string")
            }
            writeStat(e, n, {mode: i}) {
                let r;
                try {
                    let d = this.stat(e);
                    i == null && (i = d.mode),
                    r = d.ino
                } catch {}
                i == null && (i = 438),
                r == null && (r = this.autoinc());
                let a = this._lookup(jt.dirname(e))
                  , o = jt.basename(e)
                  , l = {
                    mode: i,
                    type: "file",
                    size: n,
                    mtimeMs: Date.now(),
                    ino: r
                }
                  , u = new Map;
                return u.set(_t, l),
                a.set(o, u),
                l
            }
            unlink(e) {
                let n = this._lookup(jt.dirname(e))
                  , i = jt.basename(e);
                n.delete(i)
            }
            rename(e, n) {
                let i = jt.basename(n)
                  , r = this._lookup(e);
                this._lookup(jt.dirname(n)).set(i, r),
                this.unlink(e)
            }
            stat(e) {
                return this._lookup(e).get(_t)
            }
            lstat(e) {
                return this._lookup(e, !1).get(_t)
            }
            readlink(e) {
                return this._lookup(e, !1).get(_t).target
            }
            symlink(e, n) {
                let i, r;
                try {
                    let d = this.stat(n);
                    r === null && (r = d.mode),
                    i = d.ino
                } catch {}
                r == null && (r = 40960),
                i == null && (i = this.autoinc());
                let a = this._lookup(jt.dirname(n))
                  , o = jt.basename(n)
                  , l = {
                    mode: r,
                    type: "symlink",
                    target: e,
                    size: 0,
                    mtimeMs: Date.now(),
                    ino: i
                }
                  , u = new Map;
                return u.set(_t, l),
                a.set(o, u),
                l
            }
            _du(e) {
                let n = 0;
                for (let[i,r] of e.entries())
                    i === _t ? n += r.size : n += this._du(r);
                return n
            }
            du(e) {
                let n = this._lookup(e);
                return this._du(n)
            }
        }
    }
    );
    var Dr = dt(Jt=>{
        "use strict";
        Object.defineProperty(Jt, "__esModule", {
            value: !0
        });
        var vi = class {
            constructor(e="keyval-store", n="keyval") {
                this.storeName = n,
                this._dbName = e,
                this._storeName = n,
                this._init()
            }
            _init() {
                this._dbp || (this._dbp = new Promise((e,n)=>{
                    let i = indexedDB.open(this._dbName);
                    i.onerror = ()=>n(i.error),
                    i.onsuccess = ()=>e(i.result),
                    i.onupgradeneeded = ()=>{
                        i.result.createObjectStore(this._storeName)
                    }
                }
                ))
            }
            _withIDBStore(e, n) {
                return this._init(),
                this._dbp.then(i=>new Promise((r,a)=>{
                    let o = i.transaction(this.storeName, e);
                    o.oncomplete = ()=>r(),
                    o.onabort = o.onerror = ()=>a(o.error),
                    n(o.objectStore(this.storeName))
                }
                ))
            }
            _close() {
                return this._init(),
                this._dbp.then(e=>{
                    e.close(),
                    this._dbp = void 0
                }
                )
            }
        }
        , Fr;
        function De() {
            return Fr || (Fr = new vi),
            Fr
        }
        function Gh(t, e=De()) {
            let n;
            return e._withIDBStore("readwrite", i=>{
                n = i.get(t)
            }
            ).then(()=>n.result)
        }
        function qh(t, e, n=De()) {
            return n._withIDBStore("readwrite", i=>{
                i.put(e, t)
            }
            )
        }
        function Yh(t, e, n=De()) {
            return n._withIDBStore("readwrite", i=>{
                let r = i.get(t);
                r.onsuccess = ()=>{
                    i.put(e(r.result), t)
                }
            }
            )
        }
        function Kh(t, e=De()) {
            return e._withIDBStore("readwrite", n=>{
                n.delete(t)
            }
            )
        }
        function Xh(t=De()) {
            return t._withIDBStore("readwrite", e=>{
                e.clear()
            }
            )
        }
        function zh(t=De()) {
            let e = [];
            return t._withIDBStore("readwrite", n=>{
                (n.openKeyCursor || n.openCursor).call(n).onsuccess = function() {
                    this.result && (e.push(this.result.key),
                    this.result.continue())
                }
            }
            ).then(()=>e)
        }
        function Wh(t=De()) {
            return t._close()
        }
        Jt.Store = vi;
        Jt.get = Gh;
        Jt.set = qh;
        Jt.update = Yh;
        Jt.del = Kh;
        Jt.clear = Xh;
        Jt.keys = zh;
        Jt.close = Wh
    }
    );
    var ql = dt((Hy,Gl)=>{
        var ye = Dr();
        Gl.exports = class {
            constructor(e, n) {
                this._database = e,
                this._storename = n,
                this._store = new ye.Store(this._database,this._storename)
            }
            saveSuperblock(e) {
                return ye.set("!root", e, this._store)
            }
            loadSuperblock() {
                return ye.get("!root", this._store)
            }
            readFile(e) {
                return ye.get(e, this._store)
            }
            writeFile(e, n) {
                return ye.set(e, n, this._store)
            }
            unlink(e) {
                return ye.del(e, this._store)
            }
            wipe() {
                return ye.clear(this._store)
            }
            close() {
                return ye.close(this._store)
            }
        }
    }
    );
    var Kl = dt((Gy,Yl)=>{
        Yl.exports = class {
            constructor(e) {
                this._url = e
            }
            loadSuperblock() {
                return fetch(this._url + "/.superblock.txt").then(e=>e.ok ? e.text() : null)
            }
            async readFile(e) {
                let n = await fetch(this._url + e);
                if (n.status === 200)
                    return n.arrayBuffer();
                throw new Error("ENOENT")
            }
            async sizeFile(e) {
                let n = await fetch(this._url + e, {
                    method: "HEAD"
                });
                if (n.status === 200)
                    return n.headers.get("content-length");
                throw new Error("ENOENT")
            }
        }
    }
    );
    var zl = dt((Yy,Xl)=>{
        var Cn = Dr()
          , Jh = t=>new Promise(e=>setTimeout(e, t));
        Xl.exports = class {
            constructor(e, n) {
                this._id = Math.random(),
                this._database = e,
                this._storename = n,
                this._store = new Cn.Store(this._database,this._storename),
                this._lock = null
            }
            async has({margin: e=2e3}={}) {
                if (this._lock && this._lock.holder === this._id) {
                    let n = Date.now();
                    return this._lock.expires > n + e ? !0 : await this.renew()
                } else
                    return !1
            }
            async renew({ttl: e=5e3}={}) {
                let n;
                return await Cn.update("lock", i=>{
                    let a = Date.now() + e;
                    return n = i && i.holder === this._id,
                    this._lock = n ? {
                        holder: this._id,
                        expires: a
                    } : i,
                    this._lock
                }
                , this._store),
                n
            }
            async acquire({ttl: e=5e3}={}) {
                let n, i, r;
                if (await Cn.update("lock", a=>{
                    let o = Date.now()
                      , l = o + e;
                    return i = a && a.expires < o,
                    n = a === void 0 || i,
                    r = a && a.holder === this._id,
                    this._lock = n ? {
                        holder: this._id,
                        expires: l
                    } : a,
                    this._lock
                }
                , this._store),
                r)
                    throw new Error("Mutex double-locked");
                return n
            }
            async wait({interval: e=100, limit: n=6e3, ttl: i}={}) {
                for (; n--; ) {
                    if (await this.acquire({
                        ttl: i
                    }))
                        return !0;
                    await Jh(e)
                }
                throw new Error("Mutex timeout")
            }
            async release({force: e=!1}={}) {
                let n, i, r;
                if (await Cn.update("lock", a=>(n = e || a && a.holder === this._id,
                i = a === void 0,
                r = a && a.holder !== this._id,
                this._lock = n ? void 0 : a,
                this._lock), this._store),
                await Cn.close(this._store),
                !n && !e) {
                    if (i)
                        throw new Error("Mutex double-freed");
                    if (r)
                        throw new Error("Mutex lost ownership")
                }
                return n
            }
        }
    }
    );
    var Jl = dt((Xy,Wl)=>{
        Wl.exports = class {
            constructor(e) {
                this._id = Math.random(),
                this._database = e,
                this._has = !1,
                this._release = null
            }
            async has() {
                return this._has
            }
            async acquire() {
                return new Promise(e=>{
                    navigator.locks.request(this._database + "_lock", {
                        ifAvailable: !0
                    }, n=>(this._has = !!n,
                    e(!!n),
                    new Promise(i=>{
                        this._release = i
                    }
                    )))
                }
                )
            }
            async wait({timeout: e=6e5}={}) {
                return new Promise((n,i)=>{
                    let r = new AbortController;
                    setTimeout(()=>{
                        r.abort(),
                        i(new Error("Mutex timeout"))
                    }
                    , e),
                    navigator.locks.request(this._database + "_lock", {
                        signal: r.signal
                    }, a=>(this._has = !!a,
                    n(!!a),
                    new Promise(o=>{
                        this._release = o
                    }
                    )))
                }
                )
            }
            async release({force: e=!1}={}) {
                this._has = !1,
                this._release ? this._release() : e && navigator.locks.request(this._database + "_lock", {
                    steal: !0
                }, n=>!0)
            }
        }
    }
    );
    var eu = dt((Wy,tu)=>{
        var {encode: Qh, decode: Ql} = Fl()
          , tp = Nl()
          , ep = $l()
          , {ENOENT: np, ENOTEMPTY: ip, ETIMEDOUT: rp} = Or()
          , ap = ql()
          , op = Kl()
          , sp = zl()
          , cp = Jl()
          , Tn = gi();
        tu.exports = class {
            constructor() {
                this.saveSuperblock = tp(()=>{
                    this.flush()
                }
                , 500)
            }
            async init(e, {wipe: n, url: i, urlauto: r, fileDbName: a=e, db: o=null, fileStoreName: l=e + "_files", lockDbName: u=e + "_lock", lockStoreName: d=e + "_lock"}={}) {
                this._name = e,
                this._idb = o || new ap(a,l),
                this._mutex = navigator.locks ? new cp(e) : new sp(u,d),
                this._cache = new ep(e),
                this._opts = {
                    wipe: n,
                    url: i
                },
                this._needsWipe = !!n,
                i && (this._http = new op(i),
                this._urlauto = !!r)
            }
            async activate() {
                if (this._cache.activated)
                    return;
                this._needsWipe && (this._needsWipe = !1,
                await this._idb.wipe(),
                await this._mutex.release({
                    force: !0
                })),
                await this._mutex.has() || await this._mutex.wait();
                let e = await this._idb.loadSuperblock();
                if (e)
                    this._cache.activate(e);
                else if (this._http) {
                    let n = await this._http.loadSuperblock();
                    this._cache.activate(n),
                    await this._saveSuperblock()
                } else
                    this._cache.activate();
                if (!await this._mutex.has())
                    throw new rp
            }
            async deactivate() {
                await this._mutex.has() && await this._saveSuperblock(),
                this._cache.deactivate();
                try {
                    await this._mutex.release()
                } catch (e) {
                    console.log(e)
                }
                await this._idb.close()
            }
            async _saveSuperblock() {
                this._cache.activated && (this._lastSavedAt = Date.now(),
                await this._idb.saveSuperblock(this._cache._root))
            }
            _writeStat(e, n, i) {
                let r = Tn.split(Tn.dirname(e))
                  , a = r.shift();
                for (let o of r) {
                    a = Tn.join(a, o);
                    try {
                        this._cache.mkdir(a, {
                            mode: 511
                        })
                    } catch {}
                }
                return this._cache.writeStat(e, n, i)
            }
            async readFile(e, n) {
                let {encoding: i} = n;
                if (i && i !== "utf8")
                    throw new Error('Only "utf8" encoding is supported in readFile');
                let r = null
                  , a = null;
                try {
                    a = this._cache.stat(e),
                    r = await this._idb.readFile(a.ino)
                } catch (o) {
                    if (!this._urlauto)
                        throw o
                }
                if (!r && this._http) {
                    let o = this._cache.lstat(e);
                    for (; o.type === "symlink"; )
                        e = Tn.resolve(Tn.dirname(e), o.target),
                        o = this._cache.lstat(e);
                    r = await this._http.readFile(e)
                }
                if (r && ((!a || a.size != r.byteLength) && (a = await this._writeStat(e, r.byteLength, {
                    mode: a ? a.mode : 438
                }),
                this.saveSuperblock()),
                i === "utf8" ? r = Ql(r) : r.toString = ()=>Ql(r)),
                !a)
                    throw new np(e);
                return r
            }
            async writeFile(e, n, i) {
                let {mode: r, encoding: a="utf8"} = i;
                if (typeof n == "string") {
                    if (a !== "utf8")
                        throw new Error('Only "utf8" encoding is supported in writeFile');
                    n = Qh(n)
                }
                let o = await this._cache.writeStat(e, n.byteLength, {
                    mode: r
                });
                await this._idb.writeFile(o.ino, n)
            }
            async unlink(e, n) {
                let i = this._cache.lstat(e);
                this._cache.unlink(e),
                i.type !== "symlink" && await this._idb.unlink(i.ino)
            }
            readdir(e, n) {
                return this._cache.readdir(e)
            }
            mkdir(e, n) {
                let {mode: i=511} = n;
                this._cache.mkdir(e, {
                    mode: i
                })
            }
            rmdir(e, n) {
                if (e === "/")
                    throw new ip;
                this._cache.rmdir(e)
            }
            rename(e, n) {
                this._cache.rename(e, n)
            }
            stat(e, n) {
                return this._cache.stat(e)
            }
            lstat(e, n) {
                return this._cache.lstat(e)
            }
            readlink(e, n) {
                return this._cache.readlink(e)
            }
            symlink(e, n) {
                this._cache.symlink(e, n)
            }
            async backFile(e, n) {
                let i = await this._http.sizeFile(e);
                await this._writeStat(e, i, n)
            }
            du(e) {
                return this._cache.du(e)
            }
            flush() {
                return this._saveSuperblock()
            }
        }
    }
    );
    var iu = dt((Qy,nu)=>{
        nu.exports = class {
            constructor(e) {
                this.type = e.type,
                this.mode = e.mode,
                this.size = e.size,
                this.ino = e.ino,
                this.mtimeMs = e.mtimeMs,
                this.ctimeMs = e.ctimeMs || e.mtimeMs,
                this.uid = 1,
                this.gid = 1,
                this.dev = 1
            }
            isFile() {
                return this.type === "file"
            }
            isDirectory() {
                return this.type === "dir"
            }
            isSymbolicLink() {
                return this.type === "symlink"
            }
        }
    }
    );
    var su = dt((eI,ou)=>{
        var lp = eu()
          , ru = iu()
          , xi = gi();
        function Qt(t, e, ...n) {
            return t = xi.normalize(t),
            (typeof e > "u" || typeof e == "function") && (e = {}),
            typeof e == "string" && (e = {
                encoding: e
            }),
            [t, e, ...n]
        }
        function up(t, e, n, ...i) {
            return t = xi.normalize(t),
            (typeof n > "u" || typeof n == "function") && (n = {}),
            typeof n == "string" && (n = {
                encoding: n
            }),
            [t, e, n, ...i]
        }
        function au(t, e, ...n) {
            return [xi.normalize(t), xi.normalize(e), ...n]
        }
        ou.exports = class {
            constructor(e, n={}) {
                this.init = this.init.bind(this),
                this.readFile = this._wrap(this.readFile, Qt, !1),
                this.writeFile = this._wrap(this.writeFile, up, !0),
                this.unlink = this._wrap(this.unlink, Qt, !0),
                this.readdir = this._wrap(this.readdir, Qt, !1),
                this.mkdir = this._wrap(this.mkdir, Qt, !0),
                this.rmdir = this._wrap(this.rmdir, Qt, !0),
                this.rename = this._wrap(this.rename, au, !0),
                this.stat = this._wrap(this.stat, Qt, !1),
                this.lstat = this._wrap(this.lstat, Qt, !1),
                this.readlink = this._wrap(this.readlink, Qt, !1),
                this.symlink = this._wrap(this.symlink, au, !0),
                this.backFile = this._wrap(this.backFile, Qt, !0),
                this.du = this._wrap(this.du, Qt, !1),
                this._deactivationPromise = null,
                this._deactivationTimeout = null,
                this._activationPromise = null,
                this._operations = new Set,
                e && this.init(e, n)
            }
            async init(...e) {
                return this._initPromiseResolve && await this._initPromise,
                this._initPromise = this._init(...e),
                this._initPromise
            }
            async _init(e, n={}) {
                await this._gracefulShutdown(),
                this._activationPromise && await this._deactivate(),
                this._backend && this._backend.destroy && await this._backend.destroy(),
                this._backend = n.backend || new lp,
                this._backend.init && await this._backend.init(e, n),
                this._initPromiseResolve && (this._initPromiseResolve(),
                this._initPromiseResolve = null),
                n.defer || this.stat("/")
            }
            async _gracefulShutdown() {
                this._operations.size > 0 && (this._isShuttingDown = !0,
                await new Promise(e=>this._gracefulShutdownResolve = e),
                this._isShuttingDown = !1,
                this._gracefulShutdownResolve = null)
            }
            _wrap(e, n, i) {
                return async(...r)=>{
                    r = n(...r);
                    let a = {
                        name: e.name,
                        args: r
                    };
                    this._operations.add(a);
                    try {
                        return await this._activate(),
                        await e.apply(this, r)
                    } finally {
                        this._operations.delete(a),
                        i && this._backend.saveSuperblock(),
                        this._operations.size === 0 && (this._deactivationTimeout || clearTimeout(this._deactivationTimeout),
                        this._deactivationTimeout = setTimeout(this._deactivate.bind(this), 500))
                    }
                }
            }
            async _activate() {
                this._initPromise || console.warn(new Error(`Attempted to use LightningFS ${this._name} before it was initialized.`)),
                await this._initPromise,
                this._deactivationTimeout && (clearTimeout(this._deactivationTimeout),
                this._deactivationTimeout = null),
                this._deactivationPromise && await this._deactivationPromise,
                this._deactivationPromise = null,
                this._activationPromise || (this._activationPromise = this._backend.activate ? this._backend.activate() : Promise.resolve()),
                await this._activationPromise
            }
            async _deactivate() {
                return this._activationPromise && await this._activationPromise,
                this._deactivationPromise || (this._deactivationPromise = this._backend.deactivate ? this._backend.deactivate() : Promise.resolve()),
                this._activationPromise = null,
                this._gracefulShutdownResolve && this._gracefulShutdownResolve(),
                this._deactivationPromise
            }
            async readFile(e, n) {
                return this._backend.readFile(e, n)
            }
            async writeFile(e, n, i) {
                return await this._backend.writeFile(e, n, i),
                null
            }
            async unlink(e, n) {
                return await this._backend.unlink(e, n),
                null
            }
            async readdir(e, n) {
                return this._backend.readdir(e, n)
            }
            async mkdir(e, n) {
                return await this._backend.mkdir(e, n),
                null
            }
            async rmdir(e, n) {
                return await this._backend.rmdir(e, n),
                null
            }
            async rename(e, n) {
                return await this._backend.rename(e, n),
                null
            }
            async stat(e, n) {
                let i = await this._backend.stat(e, n);
                return new ru(i)
            }
            async lstat(e, n) {
                let i = await this._backend.lstat(e, n);
                return new ru(i)
            }
            async readlink(e, n) {
                return this._backend.readlink(e, n)
            }
            async symlink(e, n) {
                return await this._backend.symlink(e, n),
                null
            }
            async backFile(e, n) {
                return await this._backend.backFile(e, n),
                null
            }
            async du(e) {
                return this._backend.du(e)
            }
            async flush() {
                return this._backend.flush()
            }
        }
    }
    );
    var lu = dt((iI,cu)=>{
        var fp = Tl()
          , dp = su();
        function Ct(t, e) {
            return typeof t == "function" && (e = t),
            e = fp(e),
            [(...i)=>e(null, ...i), e]
        }
        cu.exports = class {
            constructor(...e) {
                this.promises = new dp(...e),
                this.init = this.init.bind(this),
                this.readFile = this.readFile.bind(this),
                this.writeFile = this.writeFile.bind(this),
                this.unlink = this.unlink.bind(this),
                this.readdir = this.readdir.bind(this),
                this.mkdir = this.mkdir.bind(this),
                this.rmdir = this.rmdir.bind(this),
                this.rename = this.rename.bind(this),
                this.stat = this.stat.bind(this),
                this.lstat = this.lstat.bind(this),
                this.readlink = this.readlink.bind(this),
                this.symlink = this.symlink.bind(this),
                this.backFile = this.backFile.bind(this),
                this.du = this.du.bind(this),
                this.flush = this.flush.bind(this)
            }
            init(e, n) {
                return this.promises.init(e, n)
            }
            readFile(e, n, i) {
                let[r,a] = Ct(n, i);
                this.promises.readFile(e, n).then(r).catch(a)
            }
            writeFile(e, n, i, r) {
                let[a,o] = Ct(i, r);
                this.promises.writeFile(e, n, i).then(a).catch(o)
            }
            unlink(e, n, i) {
                let[r,a] = Ct(n, i);
                this.promises.unlink(e, n).then(r).catch(a)
            }
            readdir(e, n, i) {
                let[r,a] = Ct(n, i);
                this.promises.readdir(e, n).then(r).catch(a)
            }
            mkdir(e, n, i) {
                let[r,a] = Ct(n, i);
                this.promises.mkdir(e, n).then(r).catch(a)
            }
            rmdir(e, n, i) {
                let[r,a] = Ct(n, i);
                this.promises.rmdir(e, n).then(r).catch(a)
            }
            rename(e, n, i) {
                let[r,a] = Ct(i);
                this.promises.rename(e, n).then(r).catch(a)
            }
            stat(e, n, i) {
                let[r,a] = Ct(n, i);
                this.promises.stat(e).then(r).catch(a)
            }
            lstat(e, n, i) {
                let[r,a] = Ct(n, i);
                this.promises.lstat(e).then(r).catch(a)
            }
            readlink(e, n, i) {
                let[r,a] = Ct(n, i);
                this.promises.readlink(e).then(r).catch(a)
            }
            symlink(e, n, i) {
                let[r,a] = Ct(i);
                this.promises.symlink(e, n).then(r).catch(a)
            }
            backFile(e, n, i) {
                let[r,a] = Ct(n, i);
                this.promises.backFile(e, n).then(r).catch(a)
            }
            du(e, n) {
                let[i,r] = Ct(n);
                this.promises.du(e).then(i).catch(r)
            }
            flush(e) {
                let[n,i] = Ct(e);
                this.promises.flush().then(n).catch(i)
            }
        }
    }
    );
    var zu = dt(Vr=>{
        var Xu;
        (function(t) {
            typeof DO_NOT_EXPORT_CRC > "u" ? typeof Vr == "object" ? t(Vr) : typeof define == "function" && define.amd ? define(function() {
                var e = {};
                return t(e),
                e
            }) : t(Xu = {}) : t(Xu = {})
        }
        )(function(t) {
            t.version = "1.2.2";
            function e() {
                for (var y = 0, A = new Array(256), S = 0; S != 256; ++S)
                    y = S,
                    y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1,
                    y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1,
                    y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1,
                    y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1,
                    y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1,
                    y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1,
                    y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1,
                    y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1,
                    A[S] = y;
                return typeof Int32Array < "u" ? new Int32Array(A) : A
            }
            var n = e();
            function i(y) {
                var A = 0
                  , S = 0
                  , L = 0
                  , s = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
                for (L = 0; L != 256; ++L)
                    s[L] = y[L];
                for (L = 0; L != 256; ++L)
                    for (S = y[L],
                    A = 256 + L; A < 4096; A += 256)
                        S = s[A] = S >>> 8 ^ y[S & 255];
                var f = [];
                for (L = 1; L != 16; ++L)
                    f[L - 1] = typeof Int32Array < "u" ? s.subarray(L * 256, L * 256 + 256) : s.slice(L * 256, L * 256 + 256);
                return f
            }
            var r = i(n)
              , a = r[0]
              , o = r[1]
              , l = r[2]
              , u = r[3]
              , d = r[4]
              , h = r[5]
              , g = r[6]
              , _ = r[7]
              , E = r[8]
              , T = r[9]
              , w = r[10]
              , x = r[11]
              , v = r[12]
              , I = r[13]
              , R = r[14];
            function F(y, A) {
                for (var S = A ^ -1, L = 0, s = y.length; L < s; )
                    S = S >>> 8 ^ n[(S ^ y.charCodeAt(L++)) & 255];
                return ~S
            }
            function C(y, A) {
                for (var S = A ^ -1, L = y.length - 15, s = 0; s < L; )
                    S = R[y[s++] ^ S & 255] ^ I[y[s++] ^ S >> 8 & 255] ^ v[y[s++] ^ S >> 16 & 255] ^ x[y[s++] ^ S >>> 24] ^ w[y[s++]] ^ T[y[s++]] ^ E[y[s++]] ^ _[y[s++]] ^ g[y[s++]] ^ h[y[s++]] ^ d[y[s++]] ^ u[y[s++]] ^ l[y[s++]] ^ o[y[s++]] ^ a[y[s++]] ^ n[y[s++]];
                for (L += 15; s < L; )
                    S = S >>> 8 ^ n[(S ^ y[s++]) & 255];
                return ~S
            }
            function j(y, A) {
                for (var S = A ^ -1, L = 0, s = y.length, f = 0, p = 0; L < s; )
                    f = y.charCodeAt(L++),
                    f < 128 ? S = S >>> 8 ^ n[(S ^ f) & 255] : f < 2048 ? (S = S >>> 8 ^ n[(S ^ (192 | f >> 6 & 31)) & 255],
                    S = S >>> 8 ^ n[(S ^ (128 | f & 63)) & 255]) : f >= 55296 && f < 57344 ? (f = (f & 1023) + 64,
                    p = y.charCodeAt(L++) & 1023,
                    S = S >>> 8 ^ n[(S ^ (240 | f >> 8 & 7)) & 255],
                    S = S >>> 8 ^ n[(S ^ (128 | f >> 2 & 63)) & 255],
                    S = S >>> 8 ^ n[(S ^ (128 | p >> 6 & 15 | (f & 3) << 4)) & 255],
                    S = S >>> 8 ^ n[(S ^ (128 | p & 63)) & 255]) : (S = S >>> 8 ^ n[(S ^ (224 | f >> 12 & 15)) & 255],
                    S = S >>> 8 ^ n[(S ^ (128 | f >> 6 & 63)) & 255],
                    S = S >>> 8 ^ n[(S ^ (128 | f & 63)) & 255]);
                return ~S
            }
            t.table = n,
            t.bstr = F,
            t.buf = C,
            t.str = j
        })
    }
    );
    var Ln = {
        keypress: [],
        keyreleased: []
    };
    function Qr(t, e) {
        Ln[t].forEach(n=>{
            n(e)
        }
        )
    }
    function sn(t, e) {
        Ln[t].push(e)
    }
    function cn(t, e) {
        var n = Ln[t].indexOf(e);
        n != -1 && Ln[t].splice(n, 1)
    }
    function On(t) {
        Qr("keypress", t)
    }
    function Me(t) {
        Qr("keyreleased", t)
    }
    function ta(t) {
        var e = document.createElement("input");
        e.type = "file",
        e.setAttribute("style", "position:absolute;visibility:hidden;z-index:-999;width:0;height:0;top:0;left:0;"),
        e.addEventListener("change", function(n) {
            t(n.target.files)
        }),
        e.click()
    }
    var et = {
        src: "",
        app: !1,
        engine: "pumba",
        selector: !0,
        midlet: 1,
        width: 240,
        height: 320,
        hidpi: !1,
        keypad: "row-reverse",
        keepalive: "none"
    };
    function ea() {
        let t = location.search.substring(1).split("&");
        for (let e = 0; e < t.length; e++) {
            let n = t[e].split("=")
              , i = n[0]
              , r = decodeURIComponent(n[1])
              , a = typeof et[i];
            if (a === "boolean")
                et[i] = r !== "false";
            else if (a === "number") {
                let o = parseInt(r);
                isNaN(o) || (et[i] = o)
            } else
                a === "string" && (et[i] = r)
        }
    }
    var Rd = []
      , kd = {}
      , c = {
        restoreStack: Rd,
        currentThread: 0,
        threads: [],
        usedMethods: {},
        usedByteCodes: {},
        allStatics: {},
        manifest: kd,
        VMMapping: {},
        javaRoot: {}
    };
    var le = class t {
        index;
        array;
        constructor(e) {
            "array"in e ? this.array = e.array : this.array = new Uint8Array(e),
            this.index = 0
        }
        readUint8() {
            var e = this.array[this.index];
            return this.index++,
            e
        }
        readUint16() {
            return this.readUint8() * 256 + this.readUint8()
        }
        readUint32() {
            return this.readUint16() * 65536 + this.readUint16()
        }
        readUint64() {
            return this.readUint32() * 65536 * 65536 + this.readUint32()
        }
        getSubstream(e) {
            return new t(this.array.subarray(this.index, this.index + e))
        }
        skip(e) {
            var n = this.index;
            return this.index += e,
            this.index > this.array.length && (this.index = this.array.length),
            this.index - n
        }
        getRemaining() {
            return this.array.length - this.index
        }
        isEnd() {
            return this.index >= this.array.length
        }
        seek(e) {
            this.index = e
        }
        readInt16() {
            var e = this.readUint16();
            return e > 32767 && (e = e - 65536),
            e
        }
        readInt8() {
            var e = this.readUint8();
            return e > 127 && (e = e - 256),
            e
        }
        readInt32() {
            var e = this.readUint32();
            return e > 2147483647 && (e = e - 4294967296),
            e
        }
        readInt64() {
            var e = this.readUint64();
            return e > 9223372036854776e3 && (e = e - 18446744073709552e3),
            e
        }
        reset() {
            this.index = 0
        }
    }
    ;
    var tt = Ti(Ia(), 1);
    function un(t, e, n, i, r, a) {
        var o = {
            stack: [],
            result: null,
            locals: e,
            position: 0,
            finish: !1,
            saveResult: !1,
            constantPool: n,
            parameters: t.parameters
        };
        if (c.isThreadSuspended = !1,
        r) {
            o = r.context,
            o.finish = !1,
            a = r.callback;
            try {
                var l = st(c.currentThread);
                c.isThreadSuspended ? u() : o.saveResult && (o.stack.push(l),
                o.saveResult = !1)
            } catch (E) {
                h(E)
            }
        }
        function u() {
            c.restoreStack[c.currentThread] || (c.restoreStack[c.currentThread] = []);
            var E = c.restoreStack[c.currentThread];
            let T = [t, e, n, i, {
                context: o,
                callback: a
            }, void 0];
            E.push(T),
            o.finish = !0
        }
        function d(E) {
            var T = E.message;
            return /\bnull\b/.test(T) ? new c.javaRoot.java.lang.NullPointerException : (console.error("Unexpected error:", E),
            E)
        }
        function h(E) {
            E instanceof Error && (E = d(E));
            for (var T = -1, w = 0; w < i.length && T == -1; w++)
                if (i[w].startPc <= o.position - 1 && i[w].endPc >= o.position - 1)
                    for (var x = E, v = !0; v; )
                        (i[w].catchType == null || i[w].catchType.className == x.className) && (T = i[w].handler,
                        v = !1),
                        x.superClass ? x = It(x.superClass).prototype : v = !1;
            if (T >= 0)
                o.stack.push(E),
                o.position = T;
            else
                throw a && a(E),
                E
        }
        for (var g = t.content.length; o.position < g && !o.finish; ) {
            try {
                var _ = t.content[o.position];
                o.position++,
                _(o)
            } catch (E) {
                h(E)
            }
            c.isThreadSuspended && u()
        }
        return o.regenerate && (t.regenerate = !0),
        a != null && !c.isThreadSuspended && a(o.result),
        o.result
    }
    function st(t) {
        if (!c.kill && c.restoreStack[t] !== void 0) {
            c.isThreadSuspended = !1;
            var e = c.restoreStack[t].pop();
            if (e)
                return Bn(t),
                typeof e == "function" ? e() : un.apply(void 0, e)
        }
    }
    function bt(t) {
        var e = -ba;
        c.VMMapping[e] = c.currentVM,
        ba++,
        c.restoreStack[e] || (c.restoreStack[e] = []),
        ja(function() {
            Bn(e);
            try {
                c.isThreadSuspended = !1,
                c.currentThread = e,
                t(),
                c.isThreadSuspended = !1
            } catch (n) {
                console.error(n.stack),
                fn(n.message)
            }
        }, 1)
    }
    var ba = 1;
    function Ze(t) {
        t.monitorQueue || (t.monitorQueue = []),
        t.monitorQueue.length === 0 || t.monitorQueue[0] === c.currentThread ? t.monitorQueue.unshift(c.currentThread) : (t.monitorQueue.push(c.currentThread),
        c.isThreadSuspended = !0)
    }
    function Mn(t) {
        if (t.monitorQueue || (t.monitorQueue = []),
        t.monitorQueue.shift(),
        t.monitorQueue.length !== 0 && t.monitorQueue[0] !== c.currentThread) {
            var e = t.monitorQueue[0];
            e != null && setTimeout(function() {
                st(e)
            }, 1)
        }
    }
    function Ea(t) {
        return c.isThreadSuspended = !0,
        t && (c.restoreStack[c.currentThread].length > 0 && console.error("Trying to overwrite a thread!"),
        c.restoreStack[c.currentThread] = [t]),
        c.currentThread
    }
    function Bn(t) {
        c.currentThread = t,
        c.currentVM = c.VMMapping[t],
        c.statics = c.allStatics[c.currentVM]
    }
    c.currentVM;
    c.VMMapping = {};
    var dn;
    function sm() {
        let t = [[161, 169, 161, 254], [176, 247, 161, 254], [129, 160, 64, 254], [170, 254, 64, 160], [168, 169, 64, 160], [170, 175, 161, 254], [248, 254, 161, 254], [161, 167, 64, 160]]
          , e = new Uint16Array(23940)
          , n = 0;
        for (let[r,a,o,l] of t)
            for (let u = o; u <= l; u++)
                if (u !== 127)
                    for (let d = r; d <= a; d++)
                        e[n++] = u << 8 | d;
        dn = new Uint16Array(65536),
        dn.fill(65535);
        let i = new TextDecoder("gbk").decode(e);
        for (let r = 0; r < i.length; r++)
            dn[i.charCodeAt(r)] = e[r]
    }
    var Sa = typeof Buffer == "function" && Buffer.allocUnsafe
      , cm = Sa ? t=>Sa(t) : t=>new Uint8Array(t)
      , lm = ()=>63;
    function Ra(t, e={}) {
        dn || sm();
        let n = e.onAlloc || cm
          , i = e.onError || lm
          , r = n(t.length * 2)
          , a = 0;
        for (let o = 0; o < t.length; o++) {
            let l = t.charCodeAt(o);
            if (l < 128) {
                r[a++] = l;
                continue
            }
            let u = dn[l];
            if (u !== 65535)
                r[a++] = u,
                r[a++] = u >> 8;
            else if (l === 8364)
                r[a++] = 128;
            else {
                let d = i(o, t);
                if (d === -1)
                    break;
                d > 255 ? (r[a++] = d,
                r[a++] = d >> 8) : r[a++] = d
            }
        }
        return r.subarray(0, a)
    }
    function X(t, e, n=[]) {
        let i = t[e].apply(t, n);
        return i === null && c.isThreadSuspended ? (console.log("callMethod", e),
        new Promise((r,a)=>{
            function o() {
                let l = c.currentThread;
                c.restoreStack[l].push(function() {
                    try {
                        let u = st(c.currentThread);
                        c.isThreadSuspended ? o() : r(u)
                    } catch (u) {
                        a(u)
                    }
                })
            }
            o()
        }
        )) : i
    }
    function Vn(t, e) {
        let n = 0;
        function i(a) {
            if (t instanceof HTMLCanvasElement) {
                let o = t.clientWidth / t.width;
                return Math.floor(a / o)
            }
            return a
        }
        function r(a) {
            var o, l;
            if ("offsetX"in a && "offsetY"in a)
                o = a.offsetX,
                l = a.offsetY;
            else {
                let g = a;
                var u = g.target.getBoundingClientRect();
                o = g.pageX - u.x,
                l = g.pageY - u.y
            }
            var d = i(o)
              , h = i(l);
            a.type === "pointermove" && (a.pressure > 0 || n > 0) && e("dragged", d, h),
            (a.type === "pointerup" || a.type === "pointercancel") && (n = 0,
            e("released", d, h)),
            a.type === "pointerdown" && (a.pressure === 0 && (n = 1),
            e("pressed", d, h))
        }
        t.addEventListener("pointerdown", r),
        t.addEventListener("pointerup", r),
        t.addEventListener("pointermove", r),
        t.addEventListener("pointercancel", r),
        t.addEventListener("touchstart", a=>a.preventDefault())
    }
    function mn(t, e) {
        t.addEventListener("pointerdown", function() {
            On(e)
        }),
        t.addEventListener("pointerup", function() {
            Me(e)
        }),
        t.addEventListener("pointercancel", function() {
            Me(e)
        })
    }
    function ka(t) {
        c.isThreadSuspended = !0;
        var e = c.currentThread;
        let n;
        if (c.restoreStack[e].length)
            debugger ;c.restoreStack[e] = [function() {
            return n()
        }
        ];
        async function i() {
            try {
                let a = await (typeof t == "function" ? t() : t);
                n = ()=>a
            } catch (r) {
                n = ()=>{
                    throw r
                }
            }
            st(e)
        }
        i()
    }
    function Tt(t, e, n) {
        let i = tt.Buffer.from(t);
        return (typeof e == "number" || typeof n == "number") && (i = tt.Buffer.from(i.buffer, e, n)),
        i.toString("utf8")
    }
    function Ca(t, e=0, n=t.length) {
        for (var i = 0, r = [], a = 0; a < n; a++) {
            var o = t[e + a];
            o < 0 && (o += 256),
            r[a] = o
        }
        for (var l = []; i < n; ) {
            if (r[i] < 128) {
                var o = r[i];
                i++
            } else if ((r[i] & 224) == 192) {
                var o = (r[i] & 31) << 6 | r[i + 1] & 63;
                i += 2
            } else if ((r[i] & 240) == 224) {
                var o = (r[i] & 15) << 12 | (r[i + 1] & 63) << 6 | r[i + 2] & 63;
                i += 3
            } else
                return null;
            var u = String.fromCharCode(o);
            if (u != "")
                l.push(u);
            else
                return null
        }
        return l.join("")
    }
    function hn(t) {
        return Array.prototype.slice.call(tt.Buffer.from(t, "utf8"))
    }
    function Un(t, e, n, i) {
        let r = tt.Buffer.from(t);
        (e !== 0 || n !== r.length) && (r = tt.Buffer.from(r.buffer, e, n));
        var a = r.toString("base64");
        return "data:" + i + ";base64," + a
    }
    function Pn(t, e) {
        return tt.Buffer.isEncoding(e) ? t.toString(e) : new TextDecoder(e).decode(t)
    }
    function Zn(t, e) {
        return tt.Buffer.isEncoding(e) ? tt.Buffer.from(t, e) : Ra(t)
    }
    function Ta(t) {
        if (!tt.Buffer.isEncoding(t))
            try {
                new TextDecoder(t)
            } catch {
                return !1
            }
        return !0
    }
    function fe(t) {
        return t.isUnsafe = !0,
        t
    }
    var ja = function() {
        var t = []
          , e = "zero-timeout-message";
        function n(r, a) {
            t.push(r),
            window.postMessage(e, "*")
        }
        function i(r) {
            if (r.source == window && r.data == e && (r.stopPropagation(),
            t.length > 0)) {
                var a = t.shift();
                a()
            }
        }
        return window.addEventListener("message", i, !0),
        n.removeListener = function() {
            window.removeEventListener("message", i, !0)
        }
        ,
        n
    }();
    var Xt = class {
        hi;
        lo;
        constructor(e, n) {
            this.hi = e,
            this.lo = n
        }
    }
    ;
    function ie(t) {
        return t && typeof t == "object" && "hi"in t && "lo"in t
    }
    function re(t) {
        return t && typeof t == "object" && "double"in t
    }
    function He(t) {
        let e = (t & 2147483648) != 0
          , n = ((t & 2139095040) >> 23) - 127
          , i = t & 8388607;
        for (let r = 0; r < 23; r++)
            i /= 2;
        for (i += 1; n != 0; )
            n > 0 ? (i *= 2,
            n--) : (i /= 2,
            n++);
        return e && (i *= -1),
        i
    }
    function $e(t, e) {
        let n = (t & 2147483648) != 0
          , i = ((t & 2146435072) >> 20) - 1023;
        t = (t & 1048575) * 4294967296;
        let r = 1;
        for (let a = 0; a < 52; a++)
            t /= 2,
            e /= 2;
        for (r += t,
        r += e; i != 0; )
            i > 0 ? (r *= 2,
            i--) : (r /= 2,
            i++);
        return n && (r *= -1),
        {
            double: r
        }
    }
    function Pi(t, e, n) {
        let i = [];
        i[0] = 0,
        t < 0 && (i[0] += 128,
        t = -t);
        let r = 0;
        for (; t < 1; )
            t *= 2,
            r--;
        for (; t >= 2; )
            t /= 2,
            r++;
        r += Math.pow(2, e - 1) - 1,
        i[1] = r % Math.pow(2, e - 7),
        i[0] += Math.floor(r / Math.pow(2, e - 7)),
        t -= 1,
        t *= Math.pow(2, 8 - (1 + e) % 8),
        i[1] += Math.floor(t),
        t = t % 1;
        let a = Math.floor((e + n + 1) / 8);
        for (let o = 2; o < a; o++)
            t *= 256,
            i[o] = Math.floor(t),
            t = t % 1;
        return i
    }
    var Ge = {
        double: 0
    }
      , Aa = {
        double: 1
    };
    var Mt = null;
    try {
        Mt = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])),{}).exports
    } catch {}
    function nt(t, e, n) {
        this.low = t | 0,
        this.high = e | 0,
        this.unsigned = !!n
    }
    nt.prototype.__isLong__;
    Object.defineProperty(nt.prototype, "__isLong__", {
        value: !0
    });
    function vt(t) {
        return (t && t.__isLong__) === !0
    }
    function La(t) {
        var e = Math.clz32(t & -t);
        return t ? 31 - e : e
    }
    nt.isLong = vt;
    var Oa = {}
      , Fa = {};
    function je(t, e) {
        var n, i, r;
        return e ? (t >>>= 0,
        (r = 0 <= t && t < 256) && (i = Fa[t],
        i) ? i : (n = Q(t, 0, !0),
        r && (Fa[t] = n),
        n)) : (t |= 0,
        (r = -128 <= t && t < 128) && (i = Oa[t],
        i) ? i : (n = Q(t, t < 0 ? -1 : 0, !1),
        r && (Oa[t] = n),
        n))
    }
    nt.fromInt = je;
    function Bt(t, e) {
        if (isNaN(t))
            return e ? ae : Ht;
        if (e) {
            if (t < 0)
                return ae;
            if (t >= Ba)
                return Pa
        } else {
            if (t <= -Na)
                return Rt;
            if (t + 1 >= Na)
                return Ua
        }
        return t < 0 ? Bt(-t, e).neg() : Q(t % Ye | 0, t / Ye | 0, e)
    }
    nt.fromNumber = Bt;
    function Q(t, e, n) {
        return new nt(t,e,n)
    }
    nt.fromBits = Q;
    var Hn = Math.pow;
    function Hi(t, e, n) {
        if (t.length === 0)
            throw Error("empty string");
        if (typeof e == "number" ? (n = e,
        e = !1) : e = !!e,
        t === "NaN" || t === "Infinity" || t === "+Infinity" || t === "-Infinity")
            return e ? ae : Ht;
        if (n = n || 10,
        n < 2 || 36 < n)
            throw RangeError("radix");
        var i;
        if ((i = t.indexOf("-")) > 0)
            throw Error("interior hyphen");
        if (i === 0)
            return Hi(t.substring(1), e, n).neg();
        for (var r = Bt(Hn(n, 8)), a = Ht, o = 0; o < t.length; o += 8) {
            var l = Math.min(8, t.length - o)
              , u = parseInt(t.substring(o, o + l), n);
            if (l < 8) {
                var d = Bt(Hn(n, l));
                a = a.mul(d).add(Bt(u))
            } else
                a = a.mul(r),
                a = a.add(Bt(u))
        }
        return a.unsigned = e,
        a
    }
    nt.fromString = Hi;
    function $t(t, e) {
        return typeof t == "number" ? Bt(t, e) : typeof t == "string" ? Hi(t, e) : Q(t.low, t.high, typeof e == "boolean" ? e : t.unsigned)
    }
    nt.fromValue = $t;
    var Da = 65536
      , um = 1 << 24
      , Ye = Da * Da
      , Ba = Ye * Ye
      , Na = Ba / 2
      , Ma = je(um)
      , Ht = je(0);
    nt.ZERO = Ht;
    var ae = je(0, !0);
    nt.UZERO = ae;
    var qe = je(1);
    nt.ONE = qe;
    var Va = je(1, !0);
    nt.UONE = Va;
    var Zi = je(-1);
    nt.NEG_ONE = Zi;
    var Ua = Q(-1, 2147483647, !1);
    nt.MAX_VALUE = Ua;
    var Pa = Q(-1, -1, !0);
    nt.MAX_UNSIGNED_VALUE = Pa;
    var Rt = Q(0, -2147483648, !1);
    nt.MIN_VALUE = Rt;
    var V = nt.prototype;
    V.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low
    }
    ;
    V.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * Ye + (this.low >>> 0) : this.high * Ye + (this.low >>> 0)
    }
    ;
    V.toString = function(e) {
        if (e = e || 10,
        e < 2 || 36 < e)
            throw RangeError("radix");
        if (this.isZero())
            return "0";
        if (this.isNegative())
            if (this.eq(Rt)) {
                var n = Bt(e)
                  , i = this.div(n)
                  , r = i.mul(n).sub(this);
                return i.toString(e) + r.toInt().toString(e)
            } else
                return "-" + this.neg().toString(e);
        for (var a = Bt(Hn(e, 6), this.unsigned), o = this, l = ""; ; ) {
            var u = o.div(a)
              , d = o.sub(u.mul(a)).toInt() >>> 0
              , h = d.toString(e);
            if (o = u,
            o.isZero())
                return h + l;
            for (; h.length < 6; )
                h = "0" + h;
            l = "" + h + l
        }
    }
    ;
    V.getHighBits = function() {
        return this.high
    }
    ;
    V.getHighBitsUnsigned = function() {
        return this.high >>> 0
    }
    ;
    V.getLowBits = function() {
        return this.low
    }
    ;
    V.getLowBitsUnsigned = function() {
        return this.low >>> 0
    }
    ;
    V.getNumBitsAbs = function() {
        if (this.isNegative())
            return this.eq(Rt) ? 64 : this.neg().getNumBitsAbs();
        for (var e = this.high != 0 ? this.high : this.low, n = 31; n > 0 && !(e & 1 << n); n--)
            ;
        return this.high != 0 ? n + 33 : n + 1
    }
    ;
    V.isZero = function() {
        return this.high === 0 && this.low === 0
    }
    ;
    V.eqz = V.isZero;
    V.isNegative = function() {
        return !this.unsigned && this.high < 0
    }
    ;
    V.isPositive = function() {
        return this.unsigned || this.high >= 0
    }
    ;
    V.isOdd = function() {
        return (this.low & 1) === 1
    }
    ;
    V.isEven = function() {
        return (this.low & 1) === 0
    }
    ;
    V.equals = function(e) {
        return vt(e) || (e = $t(e)),
        this.unsigned !== e.unsigned && this.high >>> 31 === 1 && e.high >>> 31 === 1 ? !1 : this.high === e.high && this.low === e.low
    }
    ;
    V.eq = V.equals;
    V.notEquals = function(e) {
        return !this.eq(e)
    }
    ;
    V.neq = V.notEquals;
    V.ne = V.notEquals;
    V.lessThan = function(e) {
        return this.comp(e) < 0
    }
    ;
    V.lt = V.lessThan;
    V.lessThanOrEqual = function(e) {
        return this.comp(e) <= 0
    }
    ;
    V.lte = V.lessThanOrEqual;
    V.le = V.lessThanOrEqual;
    V.greaterThan = function(e) {
        return this.comp(e) > 0
    }
    ;
    V.gt = V.greaterThan;
    V.greaterThanOrEqual = function(e) {
        return this.comp(e) >= 0
    }
    ;
    V.gte = V.greaterThanOrEqual;
    V.ge = V.greaterThanOrEqual;
    V.compare = function(e) {
        if (vt(e) || (e = $t(e)),
        this.eq(e))
            return 0;
        var n = this.isNegative()
          , i = e.isNegative();
        return n && !i ? -1 : !n && i ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
    }
    ;
    V.comp = V.compare;
    V.negate = function() {
        return !this.unsigned && this.eq(Rt) ? Rt : this.not().add(qe)
    }
    ;
    V.neg = V.negate;
    V.add = function(e) {
        vt(e) || (e = $t(e));
        var n = this.high >>> 16
          , i = this.high & 65535
          , r = this.low >>> 16
          , a = this.low & 65535
          , o = e.high >>> 16
          , l = e.high & 65535
          , u = e.low >>> 16
          , d = e.low & 65535
          , h = 0
          , g = 0
          , _ = 0
          , E = 0;
        return E += a + d,
        _ += E >>> 16,
        E &= 65535,
        _ += r + u,
        g += _ >>> 16,
        _ &= 65535,
        g += i + l,
        h += g >>> 16,
        g &= 65535,
        h += n + o,
        h &= 65535,
        Q(_ << 16 | E, h << 16 | g, this.unsigned)
    }
    ;
    V.subtract = function(e) {
        return vt(e) || (e = $t(e)),
        this.add(e.neg())
    }
    ;
    V.sub = V.subtract;
    V.multiply = function(e) {
        if (this.isZero())
            return this;
        if (vt(e) || (e = $t(e)),
        Mt) {
            var n = Mt.mul(this.low, this.high, e.low, e.high);
            return Q(n, Mt.get_high(), this.unsigned)
        }
        if (e.isZero())
            return this.unsigned ? ae : Ht;
        if (this.eq(Rt))
            return e.isOdd() ? Rt : Ht;
        if (e.eq(Rt))
            return this.isOdd() ? Rt : Ht;
        if (this.isNegative())
            return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative())
            return this.mul(e.neg()).neg();
        if (this.lt(Ma) && e.lt(Ma))
            return Bt(this.toNumber() * e.toNumber(), this.unsigned);
        var i = this.high >>> 16
          , r = this.high & 65535
          , a = this.low >>> 16
          , o = this.low & 65535
          , l = e.high >>> 16
          , u = e.high & 65535
          , d = e.low >>> 16
          , h = e.low & 65535
          , g = 0
          , _ = 0
          , E = 0
          , T = 0;
        return T += o * h,
        E += T >>> 16,
        T &= 65535,
        E += a * h,
        _ += E >>> 16,
        E &= 65535,
        E += o * d,
        _ += E >>> 16,
        E &= 65535,
        _ += r * h,
        g += _ >>> 16,
        _ &= 65535,
        _ += a * d,
        g += _ >>> 16,
        _ &= 65535,
        _ += o * u,
        g += _ >>> 16,
        _ &= 65535,
        g += i * h + r * d + a * u + o * l,
        g &= 65535,
        Q(E << 16 | T, g << 16 | _, this.unsigned)
    }
    ;
    V.mul = V.multiply;
    V.divide = function(e) {
        if (vt(e) || (e = $t(e)),
        e.isZero())
            throw Error("division by zero");
        if (Mt) {
            if (!this.unsigned && this.high === -2147483648 && e.low === -1 && e.high === -1)
                return this;
            var n = (this.unsigned ? Mt.div_u : Mt.div_s)(this.low, this.high, e.low, e.high);
            return Q(n, Mt.get_high(), this.unsigned)
        }
        if (this.isZero())
            return this.unsigned ? ae : Ht;
        var i, r, a;
        if (this.unsigned) {
            if (e.unsigned || (e = e.toUnsigned()),
            e.gt(this))
                return ae;
            if (e.gt(this.shru(1)))
                return Va;
            a = ae
        } else {
            if (this.eq(Rt)) {
                if (e.eq(qe) || e.eq(Zi))
                    return Rt;
                if (e.eq(Rt))
                    return qe;
                var o = this.shr(1);
                return i = o.div(e).shl(1),
                i.eq(Ht) ? e.isNegative() ? qe : Zi : (r = this.sub(e.mul(i)),
                a = i.add(r.div(e)),
                a)
            } else if (e.eq(Rt))
                return this.unsigned ? ae : Ht;
            if (this.isNegative())
                return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            if (e.isNegative())
                return this.div(e.neg()).neg();
            a = Ht
        }
        for (r = this; r.gte(e); ) {
            i = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
            for (var l = Math.ceil(Math.log(i) / Math.LN2), u = l <= 48 ? 1 : Hn(2, l - 48), d = Bt(i), h = d.mul(e); h.isNegative() || h.gt(r); )
                i -= u,
                d = Bt(i, this.unsigned),
                h = d.mul(e);
            d.isZero() && (d = qe),
            a = a.add(d),
            r = r.sub(h)
        }
        return a
    }
    ;
    V.div = V.divide;
    V.modulo = function(e) {
        if (vt(e) || (e = $t(e)),
        Mt) {
            var n = (this.unsigned ? Mt.rem_u : Mt.rem_s)(this.low, this.high, e.low, e.high);
            return Q(n, Mt.get_high(), this.unsigned)
        }
        return this.sub(this.div(e).mul(e))
    }
    ;
    V.mod = V.modulo;
    V.rem = V.modulo;
    V.not = function() {
        return Q(~this.low, ~this.high, this.unsigned)
    }
    ;
    V.countLeadingZeros = function() {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32
    }
    ;
    V.clz = V.countLeadingZeros;
    V.countTrailingZeros = function() {
        return this.low ? La(this.low) : La(this.high) + 32
    }
    ;
    V.ctz = V.countTrailingZeros;
    V.and = function(e) {
        return vt(e) || (e = $t(e)),
        Q(this.low & e.low, this.high & e.high, this.unsigned)
    }
    ;
    V.or = function(e) {
        return vt(e) || (e = $t(e)),
        Q(this.low | e.low, this.high | e.high, this.unsigned)
    }
    ;
    V.xor = function(e) {
        return vt(e) || (e = $t(e)),
        Q(this.low ^ e.low, this.high ^ e.high, this.unsigned)
    }
    ;
    V.shiftLeft = function(e) {
        return vt(e) && (e = e.toInt()),
        (e &= 63) === 0 ? this : e < 32 ? Q(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : Q(0, this.low << e - 32, this.unsigned)
    }
    ;
    V.shl = V.shiftLeft;
    V.shiftRight = function(e) {
        return vt(e) && (e = e.toInt()),
        (e &= 63) === 0 ? this : e < 32 ? Q(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : Q(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
    }
    ;
    V.shr = V.shiftRight;
    V.shiftRightUnsigned = function(e) {
        return vt(e) && (e = e.toInt()),
        (e &= 63) === 0 ? this : e < 32 ? Q(this.low >>> e | this.high << 32 - e, this.high >>> e, this.unsigned) : e === 32 ? Q(this.high, 0, this.unsigned) : Q(this.high >>> e - 32, 0, this.unsigned)
    }
    ;
    V.shru = V.shiftRightUnsigned;
    V.shr_u = V.shiftRightUnsigned;
    V.rotateLeft = function(e) {
        var n;
        return vt(e) && (e = e.toInt()),
        (e &= 63) === 0 ? this : e === 32 ? Q(this.high, this.low, this.unsigned) : e < 32 ? (n = 32 - e,
        Q(this.low << e | this.high >>> n, this.high << e | this.low >>> n, this.unsigned)) : (e -= 32,
        n = 32 - e,
        Q(this.high << e | this.low >>> n, this.low << e | this.high >>> n, this.unsigned))
    }
    ;
    V.rotl = V.rotateLeft;
    V.rotateRight = function(e) {
        var n;
        return vt(e) && (e = e.toInt()),
        (e &= 63) === 0 ? this : e === 32 ? Q(this.high, this.low, this.unsigned) : e < 32 ? (n = 32 - e,
        Q(this.high << n | this.low >>> e, this.low << n | this.high >>> e, this.unsigned)) : (e -= 32,
        n = 32 - e,
        Q(this.low << n | this.high >>> e, this.high << n | this.low >>> e, this.unsigned))
    }
    ;
    V.rotr = V.rotateRight;
    V.toSigned = function() {
        return this.unsigned ? Q(this.low, this.high, !1) : this
    }
    ;
    V.toUnsigned = function() {
        return this.unsigned ? this : Q(this.low, this.high, !0)
    }
    ;
    V.toBytes = function(e) {
        return e ? this.toBytesLE() : this.toBytesBE()
    }
    ;
    V.toBytesLE = function() {
        var e = this.high
          , n = this.low;
        return [n & 255, n >>> 8 & 255, n >>> 16 & 255, n >>> 24, e & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
    }
    ;
    V.toBytesBE = function() {
        var e = this.high
          , n = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, e & 255, n >>> 24, n >>> 16 & 255, n >>> 8 & 255, n & 255]
    }
    ;
    nt.fromBytes = function(e, n, i) {
        return i ? nt.fromBytesLE(e, n) : nt.fromBytesBE(e, n)
    }
    ;
    nt.fromBytesLE = function(e, n) {
        return new nt(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24,e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24,n)
    }
    ;
    nt.fromBytesBE = function(e, n) {
        return new nt(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7],e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3],n)
    }
    ;
    var $n = nt;
    function lt(t) {
        return $n.fromBits(t.lo, t.hi, !1)
    }
    function At(t) {
        return {
            hi: t.getHighBitsUnsigned(),
            lo: t.getLowBitsUnsigned()
        }
    }
    function de(t) {
        return At($n.fromNumber(t))
    }
    function Za(t, e) {
        let n = $n.fromString(t, e);
        return At(n)
    }
    function Ke(t, e) {
        return lt(t).toString(e)
    }
    function Se(t) {
        return lt(t).toNumber()
    }
    function Ha(t, e) {
        return At(lt(t).add(lt(e)))
    }
    function Re(t, e) {
        return lt(t).comp(lt(e))
    }
    function $i(t, e) {
        let n = lt(t)
          , i = lt(e)
          , r = n.div(i)
          , a = n.rem(i);
        return {
            div: At(r),
            rem: At(a)
        }
    }
    function $a(t, e) {
        return At(lt(t).multiply(lt(e)))
    }
    function pn(t) {
        return At(lt(t).negate())
    }
    function Ga(t, e) {
        return At(lt(t).shiftLeft(e))
    }
    function Gi(t, e, n) {
        return At(lt(t).shiftRight(e))
    }
    function qa(t, e) {
        return At(lt(t).subtract(lt(e)))
    }
    function Ya(t, e) {
        return At(lt(t).xor(lt(e)))
    }
    function Ka(t) {
        let e = []
          , n = t.stream
          , i = t.methodPath
          , r = t.constantPool
          , a = t.exceptions;
        t.regenerate = !1,
        t.content ? console.log("Regenerating method " + i) : console.log("Generating method " + i);
        function o(s, f) {
            let p = 1;
            for (let b = 0; b < f - 1; b++)
                p *= 2;
            for (; s >= p; )
                s -= p * 2;
            for (; s < -p; )
                s += p * 2;
            return s
        }
        function l() {
            return function(s) {
                let f = s.stack.pop()
                  , p = s.stack.pop();
                if (!p)
                    throw new c.javaRoot.java.lang.NullPointerException;
                if (f < 0 || f >= p.length)
                    throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException(f + "/" + p.length);
                s.stack.push(p[f])
            }
        }
        function u(s) {
            return function(f) {
                let p = f.stack.pop()
                  , b = f.stack.pop()
                  , k = f.stack.pop();
                if (k == null)
                    throw new c.javaRoot.java.lang.NullPointerException;
                if (b < 0 || b >= k.length)
                    throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException(b + "/" + k.length);
                if (s && p && p.constructor !== Array && !p.isImplement(k.className))
                    throw new c.javaRoot.java.lang.ArrayStoreException;
                k[b] = p
            }
        }
        function d() {
            return function(s) {
                let f = s.stack.pop();
                return s.result = f,
                s.finish = !0,
                f
            }
        }
        e[50] = function(s) {
            return l()
        }
        ,
        e[83] = function() {
            return u(!0)
        }
        ,
        e[1] = function(s) {
            s.stack.push(null)
        }
        ;
        function h(s) {
            return function(f) {
                f.stack.push(f.locals[s])
            }
        }
        e[25] = function() {
            let s = n.readUint8();
            return h(s)
        }
        ,
        e[42] = function() {
            return h(0)
        }
        ,
        e[43] = function() {
            return h(1)
        }
        ,
        e[44] = function() {
            return h(2)
        }
        ,
        e[45] = function() {
            return h(3)
        }
        ,
        e[189] = function() {
            let s = r[n.readUint16()];
            return function(f) {
                let p = f.stack.pop();
                if (p < 0)
                    throw new c.javaRoot.java.lang.NegativeArraySizeException;
                let b = new Array(p);
                b.className = s.className;
                for (let k = 0; k < b.length; k++)
                    b[k] = null;
                f.stack.push(b)
            }
        }
        ,
        e[176] = d,
        e[190] = function() {
            return function(s) {
                let f = s.stack.pop();
                if (f == null)
                    throw new c.javaRoot.java.lang.NullPointerException;
                s.stack.push(f.length)
            }
        }
        ,
        e[58] = function() {
            let s = n.readUint8();
            return w(s)
        }
        ,
        e[75] = function() {
            return w(0)
        }
        ,
        e[76] = function() {
            return w(1)
        }
        ,
        e[77] = function() {
            return w(2)
        }
        ,
        e[78] = function() {
            return w(3)
        }
        ,
        e[191] = function(s) {
            throw s.stack.pop()
        }
        ,
        e[51] = function(s) {
            return l()
        }
        ,
        e[84] = function(s) {
            return u()
        }
        ,
        e[16] = function() {
            let s = n.readInt8();
            return function(f) {
                f.stack.push(s)
            }
        }
        ,
        e[52] = function(s) {
            return l()
        }
        ,
        e[85] = function(s) {
            return u()
        }
        ,
        e[192] = function() {
            let s = r[n.readUint16()];
            return function(f) {
                let p = f.stack.pop();
                if (p != null) {
                    if (p.constructor == Array) {
                        f.stack.push(p);
                        return
                    }
                    try {
                        let b = It(p.className).prototype
                          , k = It(s.className).prototype;
                        if (b.isImplement(k.className))
                            f.stack.push(p);
                        else
                            throw new c.javaRoot.java.lang.ClassCastException
                    } catch (b) {
                        console.error(b)
                    }
                } else
                    f.stack.push(p)
            }
        }
        ,
        e[142] = function(s) {
            let f = s.stack.pop()
              , p = Math.floor(f.double);
            if (isNaN(p)) {
                s.stack.push(0);
                return
            }
            if (p < -2147483648) {
                s.stack.push(-2147483648);
                return
            }
            if (p > 2147483647) {
                s.stack.push(2147483647);
                return
            }
            s.stack.push(p)
        }
        ,
        e[143] = function(s) {
            let f = s.stack.pop()
              , p = Math.floor(f.double);
            if (isNaN(p)) {
                s.stack.push(new Xt(0,0));
                return
            }
            if (p < -9223372036854776e3) {
                s.stack.push(new Xt(2147483648,0));
                return
            }
            if (p >= 9223372036854776e3) {
                s.stack.push(new Xt(2147483647,4294967295));
                return
            }
            if (p < 0) {
                p = Math.abs(p);
                let b = new Xt(Math.floor(p / 4294967296),Math.floor(p % 4294967296));
                s.stack.push(pn(b))
            } else {
                p = Math.abs(p);
                let b = new Xt(Math.floor(p / 4294967296),Math.floor(p % 4294967296));
                s.stack.push(b)
            }
        }
        ,
        e[99] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push({
                double: p.double + f.double
            })
        }
        ,
        e[49] = function() {
            return l()
        }
        ,
        e[82] = function() {
            return u()
        }
        ;
        function g(s, f) {
            return function(p) {
                let b = p.stack.pop();
                s && (b = b.double);
                let k = p.stack.pop();
                s && (k = k.double);
                let N;
                (isNaN(k) || isNaN(b)) && (N = f),
                k > b && (N = 1),
                k === b && (N = 0),
                k < b && (N = -1),
                p.stack.push(N)
            }
        }
        e[152] = function(s) {
            return g(!0, 1)
        }
        ,
        e[151] = function(s) {
            return g(!0, -1)
        }
        ,
        e[14] = function(s) {
            s.stack.push(Ge)
        }
        ,
        e[15] = function(s) {
            s.stack.push(Aa)
        }
        ,
        e[111] = function() {
            return function(s) {
                let f = s.stack.pop()
                  , p = s.stack.pop();
                s.stack.push({
                    double: p.double / f.double
                })
            }
        }
        ,
        e[24] = function() {
            let s = n.readUint8();
            return h(s)
        }
        ,
        e[38] = function() {
            return h(0)
        }
        ,
        e[39] = function() {
            return h(1)
        }
        ,
        e[40] = function() {
            return h(2)
        }
        ,
        e[41] = function() {
            return h(3)
        }
        ,
        e[107] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push({
                double: p.double * f.double
            })
        }
        ,
        e[119] = function(s) {
            let f = s.stack.pop();
            s.stack.push({
                double: -f.double
            })
        }
        ,
        e[115] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push({
                double: p.double % f.double
            })
        }
        ,
        e[175] = d,
        e[57] = function() {
            let s = n.readUint8();
            return w(s)
        }
        ,
        e[71] = function() {
            return w(0)
        }
        ,
        e[72] = function() {
            return w(1)
        }
        ,
        e[73] = function() {
            return w(2)
        }
        ,
        e[74] = function() {
            return w(3)
        }
        ,
        e[103] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push({
                double: p.double - f.double
            })
        }
        ,
        e[89] = function(s) {
            let f = s.stack.pop();
            s.stack.push(f),
            s.stack.push(f)
        }
        ,
        e[90] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(f),
            s.stack.push(p),
            s.stack.push(f)
        }
        ,
        e[91] = function(s) {
            let f = s.stack.pop(), p = s.stack.pop(), b = s.stack.pop(), k, N, P, Z;
            !ie(f) && !re(f) ? (k = f,
            N = b,
            P = p,
            Z = f) : (k = b,
            N = f,
            P = p,
            Z = f),
            s.stack.push(k),
            s.stack.push(N),
            s.stack.push(P),
            s.stack.push(Z)
        }
        ,
        e[92] = function(s) {
            let f = s.stack.pop();
            if (!ie(f) && !re(f)) {
                let p = s.stack.pop();
                s.stack.push(p),
                s.stack.push(f),
                s.stack.push(p),
                s.stack.push(f)
            } else
                s.stack.push(f),
                s.stack.push(f)
        }
        ,
        e[93] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            if (!ie(f) && !re(f)) {
                let b = s.stack.pop();
                s.stack.push(p),
                s.stack.push(f),
                s.stack.push(b),
                s.stack.push(p),
                s.stack.push(f)
            } else
                s.stack.push(f),
                s.stack.push(p),
                s.stack.push(f)
        }
        ,
        e[94] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            if (!ie(f) && !re(f))
                if (!ie(p) && !re(p))
                    s.stack.push(f),
                    s.stack.push(p),
                    s.stack.push(f);
                else {
                    let b = s.stack.pop();
                    s.stack.push(f),
                    s.stack.push(b),
                    s.stack.push(p),
                    s.stack.push(f)
                }
            else {
                let b = s.stack.pop();
                if (!ie(b) && !re(b))
                    s.stack.push(p),
                    s.stack.push(f),
                    s.stack.push(b),
                    s.stack.push(p),
                    s.stack.push(f);
                else {
                    let k = s.stack.pop();
                    s.stack.push(p),
                    s.stack.push(f),
                    s.stack.push(k),
                    s.stack.push(b),
                    s.stack.push(p),
                    s.stack.push(f)
                }
            }
        }
        ,
        e[98] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p + f)
        }
        ,
        e[48] = function(s) {
            return l()
        }
        ,
        e[81] = function(s) {
            return u()
        }
        ,
        e[150] = function(s) {
            return g(!1, 1)
        }
        ,
        e[149] = function(s) {
            return g(!1, -1)
        }
        ,
        e[11] = function(s) {
            s.stack.push(0)
        }
        ,
        e[12] = function(s) {
            s.stack.push(1)
        }
        ,
        e[13] = function(s) {
            s.stack.push(2)
        }
        ,
        e[110] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p / f)
        }
        ,
        e[23] = function() {
            let s = n.readUint8();
            return h(s)
        }
        ,
        e[34] = function() {
            return h(0)
        }
        ,
        e[35] = function() {
            return h(1)
        }
        ,
        e[36] = function() {
            return h(2)
        }
        ,
        e[37] = function() {
            return h(3)
        }
        ,
        e[106] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p * f)
        }
        ,
        e[118] = function(s) {
            let f = s.stack.pop();
            s.stack.push(-f)
        }
        ,
        e[114] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p % f)
        }
        ,
        e[174] = d,
        e[56] = function() {
            let s = n.readUint8();
            return w(s)
        }
        ,
        e[67] = function() {
            return w(0)
        }
        ,
        e[68] = function() {
            return w(1)
        }
        ,
        e[69] = function() {
            return w(2)
        }
        ,
        e[70] = function() {
            return w(3)
        }
        ,
        e[102] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p - f)
        }
        ,
        e[180] = function() {
            let s = r[n.readUint16()];
            return function(f) {
                let b = It(s.className).prototype[s.name]
                  , k = f.stack.pop();
                if (k == null)
                    throw new c.javaRoot.java.lang.NullPointerException;
                let N = k["$" + b];
                N === void 0 && console.error("Field not found", s),
                f.stack.push(N)
            }
        }
        ,
        e[178] = function() {
            let s = r[n.readUint16()];
            return x(s.className, function(f, p) {
                let b = p.prototype[s.name]
                  , k = c.statics["$" + b];
                k === void 0 && console.error("Field not found", s),
                f.stack.push(k)
            })
        }
        ;
        function _(s) {
            return function() {
                let f = n.index + n.readInt16() - 1;
                return function(p) {
                    s(p) && (p.position = R[f])
                }
            }
        }
        e[167] = _(function() {
            return !0
        }),
        e[133] = function(s) {
            let f = s.stack.pop(), p;
            f >= 0 ? p = {
                hi: 0,
                lo: f
            } : p = {
                hi: 4294967295,
                lo: f + 4294967296
            },
            s.stack.push(p)
        }
        ,
        e[134] = function() {}
        ,
        e[135] = function(s) {
            let f = s.stack.pop();
            s.stack.push({
                double: f
            })
        }
        ,
        e[137] = function(s) {
            let f = s.stack.pop();
            s.stack.push(He(Se(f)))
        }
        ,
        e[137] = function(s) {
            let f = s.stack.pop();
            s.stack.push($e(f.hi, f.lo))
        }
        ,
        e[139] = function(s) {
            let f = s.stack.pop();
            s.stack.push(~~f)
        }
        ,
        e[141] = function(s) {
            let f = s.stack.pop();
            s.stack.push({
                double: f
            })
        }
        ,
        e[145] = function(s) {
            let f = s.stack.pop();
            f = (f + 2147483648) % 256;
            let p;
            f > 127 ? p = f - 256 : p = f,
            s.stack.push(p)
        }
        ,
        e[146] = function(s) {
            let f = s.stack.pop();
            s.stack.push(f)
        }
        ,
        e[147] = function(s) {
            let f = s.stack.pop();
            f = (f + 2147483648) % 65536;
            let p;
            f > 32767 ? p = f - 65536 : p = f,
            s.stack.push(p)
        }
        ,
        e[96] = function(s) {
            let f = s.stack.pop()
              , b = s.stack.pop() + f;
            b = o(b, 32),
            s.stack.push(b)
        }
        ,
        e[126] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p & f)
        }
        ,
        e[46] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p[f])
        }
        ,
        e[79] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop()
              , b = s.stack.pop();
            b[p] = f
        }
        ;
        function E(s) {
            return function(f) {
                f.stack.push(s)
            }
        }
        e[2] = E(-1),
        e[3] = E(0),
        e[4] = E(1),
        e[5] = E(2),
        e[6] = E(3),
        e[7] = E(4),
        e[8] = E(5),
        e[108] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            if (f === 0)
                throw new c.javaRoot.java.lang.ArithmeticException("/ by zero");
            let b = ~~(p / f);
            b = o(b, 32),
            s.stack.push(b)
        }
        ,
        e[165] = _(function(s) {
            return s.stack.pop() === s.stack.pop()
        }),
        e[166] = _(function(s) {
            return s.stack.pop() !== s.stack.pop()
        }),
        e[159] = _(function(s) {
            return s.stack.pop() === s.stack.pop()
        }),
        e[160] = e[199] = _(function(s) {
            return s.stack.pop() !== s.stack.pop()
        }),
        e[161] = _(function(s) {
            return s.stack.pop() > s.stack.pop()
        }),
        e[162] = _(function(s) {
            return s.stack.pop() <= s.stack.pop()
        }),
        e[163] = _(function(s) {
            return s.stack.pop() < s.stack.pop()
        }),
        e[164] = _(function(s) {
            return s.stack.pop() >= s.stack.pop()
        }),
        e[153] = _(function(s) {
            return s.stack.pop() === 0
        }),
        e[154] = e[199] = _(function(s) {
            return s.stack.pop() !== 0
        }),
        e[155] = _(function(s) {
            return s.stack.pop() < 0
        }),
        e[156] = _(function(s) {
            return s.stack.pop() >= 0
        }),
        e[157] = _(function(s) {
            return s.stack.pop() > 0
        }),
        e[158] = _(function(s) {
            return s.stack.pop() <= 0
        }),
        e[199] = _(function(s) {
            return s.stack.pop() != null
        }),
        e[198] = _(function(s) {
            return s.stack.pop() == null
        }),
        e[132] = function() {
            let s = n.readUint8()
              , f = n.readInt8();
            return function(p) {
                let b = p.locals[s] + f;
                b = o(b, 32),
                p.locals[s] = b
            }
        }
        ,
        e[21] = function() {
            let s = n.readUint8();
            return h(s)
        }
        ,
        e[26] = function() {
            return h(0)
        }
        ,
        e[27] = function() {
            return h(1)
        }
        ,
        e[28] = function() {
            return h(2)
        }
        ,
        e[29] = function() {
            return h(3)
        }
        ,
        e[104] = function(s) {
            let f = s.stack.pop()
              , b = s.stack.pop() * f;
            b = o(b, 32),
            s.stack.push(b)
        }
        ,
        e[116] = function(s) {
            let f = -s.stack.pop();
            f = o(f, 32),
            s.stack.push(f)
        }
        ,
        e[193] = function() {
            let s = r[n.readUint16()];
            return function(f) {
                try {
                    let p = f.stack.pop();
                    if (p != null) {
                        if (p.constructor == Array) {
                            f.stack.push(p);
                            return
                        }
                        It(p.className).prototype.isImplement(s.className) ? f.stack.push(1) : f.stack.push(0)
                    } else
                        f.stack.push(0)
                } catch (p) {
                    console.error(p)
                }
            }
        }
        ;
        function T(s, f, p) {
            try {
                let b = r[n.readUint16()];
                p && n.readUint16();
                let k = b.type.argumentsTypes.length;
                return x(b.className, function(N, P) {
                    let Z = [];
                    for (let ft = k - 1; ft >= 0; ft--)
                        Z[ft] = N.stack.pop();
                    let Y;
                    if (!s) {
                        if (Y = N.stack.pop(),
                        Y == null)
                            throw new c.javaRoot.java.lang.NullPointerException;
                        Y.constructor == Array && (Y = new c.javaRoot.java.lang.ArrayObject(Y))
                    }
                    N.saveResult = b.type.returnType != "V";
                    let H, z = b.name, K = b.className, W = P.prototype;
                    if (f) {
                        Y = !Y[z] && Y.as ? Y.as(K) : Y;
                        let ft = Y[z];
                        try {
                            H = ft.apply(Y, Z)
                        } catch (rt) {
                            throw rt instanceof Error && console.warn(rt),
                            rt
                        }
                    } else
                        try {
                            H = W[z].apply(s ? W : Y, Z)
                        } catch (ft) {
                            throw ft instanceof Error && console.warn(ft),
                            ft
                        }
                    !c.isThreadSuspended && H instanceof Promise && ka(H),
                    N.saveResult && !c.isThreadSuspended && (N.stack.push(H),
                    N.saveResult = !1)
                })
            } catch (b) {
                console.error(b.message)
            }
        }
        e[185] = function() {
            return T(!1, !0, !0)
        }
        ,
        e[183] = function() {
            return T(!1, !1)
        }
        ,
        e[184] = function() {
            return T(!0, !1)
        }
        ,
        e[182] = function() {
            return T(!1, !0)
        }
        ,
        e[128] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p | f)
        }
        ,
        e[112] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            if (f === 0)
                throw new c.javaRoot.java.lang.ArithmeticException("/ by zero");
            s.stack.push(p % f)
        }
        ,
        e[172] = d,
        e[120] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p << f % 32)
        }
        ,
        e[122] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p >> f % 32)
        }
        ;
        function w(s) {
            return function(f) {
                f.locals[s] = f.stack.pop()
            }
        }
        e[54] = function() {
            let s = n.readUint8();
            return w(s)
        }
        ,
        e[59] = function() {
            return w(0)
        }
        ,
        e[60] = function() {
            return w(1)
        }
        ,
        e[61] = function() {
            return w(2)
        }
        ,
        e[62] = function() {
            return w(3)
        }
        ,
        e[100] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p - f)
        }
        ,
        e[124] = function(s) {
            let f = s.stack.pop() % 32
              , b = s.stack.pop() >>> f;
            s.stack.push(b)
        }
        ,
        e[130] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p ^ f)
        }
        ,
        e[138] = function(s) {
            let f = s.stack.pop()
              , p = f.hi;
            p >= 2147483648 && (p -= 4294967296),
            p *= 4294967296,
            p += f.lo,
            s.stack.push({
                double: p
            })
        }
        ,
        e[136] = function(s) {
            let p = s.stack.pop().lo;
            p >= 2147483648 && (p -= 4294967296),
            s.stack.push(p)
        }
        ,
        e[97] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(Ha(p, f))
        }
        ,
        e[47] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            if (p == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            if (f < 0 || f > p.length)
                throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException;
            s.stack.push(p[f])
        }
        ,
        e[127] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push({
                hi: p.hi & f.hi,
                lo: p.lo & f.lo
            })
        }
        ,
        e[80] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop()
              , b = s.stack.pop();
            b[p] = f
        }
        ,
        e[148] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(Re(p, f))
        }
        ,
        e[9] = function(s) {
            s.stack.push({
                hi: 0,
                lo: 0
            })
        }
        ,
        e[10] = function(s) {
            s.stack.push({
                hi: 0,
                lo: 1
            })
        }
        ,
        e[18] = function() {
            let s = n.readUint8();
            return function(f) {
                f.stack.push(f.constantPool[s])
            }
        }
        ,
        e[20] = e[19] = function() {
            let s = n.readUint16();
            return function(f) {
                f.stack.push(f.constantPool[s])
            }
        }
        ,
        e[109] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            if (f.hi === 0 && f.lo === 0)
                throw new c.javaRoot.java.lang.ArithmeticException("/ by zero");
            s.stack.push($i(p, f).div)
        }
        ,
        e[22] = function() {
            let s = n.readUint8();
            return h(s)
        }
        ,
        e[30] = function() {
            return h(0)
        }
        ,
        e[31] = function() {
            return h(1)
        }
        ,
        e[32] = function() {
            return h(2)
        }
        ,
        e[33] = function() {
            return h(3)
        }
        ,
        e[105] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push($a(p, f))
        }
        ,
        e[117] = function(s) {
            let f = s.stack.pop();
            s.stack.push(pn(f))
        }
        ,
        e[171] = function() {
            let s = n.index - 1;
            for (; n.index % 4 != 0; )
                n.readUint8();
            let f = s + n.readInt32()
              , p = n.readInt32()
              , b = [];
            for (let k = 0; k < p; k++) {
                let N = n.readInt32()
                  , P = s + n.readInt32();
                b[N] = P
            }
            return function(k) {
                let N = k.stack.pop()
                  , P = b[N];
                P === void 0 && (P = f),
                k.position = R[P]
            }
        }
        ,
        e[129] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push({
                hi: p.hi | f.hi,
                lo: p.lo | f.lo
            })
        }
        ,
        e[113] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            if (f.hi === 0 && f.lo === 0)
                throw new c.javaRoot.java.lang.ArithmeticException("/ by zero");
            s.stack.push($i(p, f).rem)
        }
        ,
        e[173] = d,
        e[121] = function(s) {
            let f = s.stack.pop() % 64
              , p = s.stack.pop();
            s.stack.push(Ga(p, f))
        }
        ,
        e[123] = function(s) {
            let f = s.stack.pop() % 64
              , p = s.stack.pop()
              , b = Gi(p, f, !0);
            s.stack.push(b)
        }
        ,
        e[55] = function() {
            let s = n.readUint8();
            return w(s)
        }
        ,
        e[63] = w(0),
        e[64] = w(1),
        e[65] = w(2),
        e[66] = w(3),
        e[101] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(qa(p, f))
        }
        ,
        e[131] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(Ya(p, f))
        }
        ,
        e[125] = function(s) {
            let f = s.stack.pop() % 64
              , p = s.stack.pop()
              , b = Gi(p, f, !1);
            s.stack.push(b)
        }
        ,
        e[194] = function() {
            return A = !1,
            function(s) {
                let f = s.stack.pop();
                Ze(f)
            }
        }
        ,
        e[195] = function(s) {
            let f = s.stack.pop();
            Mn(f)
        }
        ,
        e[197] = function() {
            let s = r[n.readUint16()].className
              , f = n.readUint8();
            return function(p) {
                let b = []
                  , k = s;
                for (let Z = 0; Z < f; Z++)
                    b[Z] = p.stack.pop();
                k = k.substr(1),
                b.reverse();
                function N(Z, Y, H) {
                    if (H = H.substr(1),
                    Y + 1 == f) {
                        for (let z = 0; z < b[Y]; z++)
                            s.indexOf("L") == -1 ? s.indexOf("J") != -1 ? Z[z] = {
                                hi: 0,
                                lo: 0
                            } : s.indexOf("D") != -1 ? Z[z] = Ge : Z[z] = 0 : Z[z] = null;
                        return
                    }
                    for (let z = 0; z < b[Y]; z++)
                        Z[z] = [],
                        Z[z].className = H,
                        N(Z[z], Y + 1, H)
                }
                let P = [];
                P.className = k,
                N(P, 0, k),
                p.stack.push(P)
            }
        }
        ;
        function x(s, f) {
            let p = null;
            return s === t.parent.prototype.className ? function(b) {
                f(b, t.parent)
            }
            : function(b) {
                if (p) {
                    f(b, p);
                    return
                }
                b.saveResult = !1,
                me(s, function(k) {
                    if (c.isThreadSuspended = !1,
                    !k)
                        throw new c.javaRoot.java.lang.ClassNotFoundException;
                    return p = k,
                    f(b, k)
                })
            }
        }
        e[187] = function() {
            let s = r[n.readUint16()];
            return x(s.className, function(f, p) {
                let b = new p;
                f.stack.push(b)
            })
        }
        ,
        e[188] = function() {
            let s = n.readUint8(), f;
            return s == 7 ? f = Ge : s == 11 ? f = {
                hi: 0,
                lo: 0
            } : f = 0,
            function(p) {
                let b = p.stack.pop()
                  , k = [];
                for (; b--; )
                    k.push(f);
                p.stack.push(k)
            }
        }
        ,
        e[0] = function() {}
        ,
        e[87] = function(s) {
            s.stack.pop()
        }
        ,
        e[88] = function(s) {
            s.stack.pop(),
            s.stack.pop()
        }
        ,
        e[181] = function() {
            let s = r[n.readUint16()];
            return function(f) {
                let b = It(s.className).prototype[s.name]
                  , k = f.stack.pop()
                  , N = f.stack.pop();
                N["$" + b] = k
            }
        }
        ,
        e[179] = function() {
            let s = r[n.readUint16()];
            return x(s.className, function(f, p) {
                let b = f.stack.pop()
                  , k = p.prototype[s.name];
                c.statics["$" + k] = b
            })
        }
        ,
        e[177] = function(s) {
            s.finish = !0
        }
        ,
        e[53] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            if (p == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            if (f < 0 || f > p.length)
                throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException;
            s.stack.push(p[f])
        }
        ,
        e[86] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop()
              , b = s.stack.pop();
            b[p] = f
        }
        ,
        e[17] = function() {
            let s = n.readInt16();
            return function(f) {
                f.stack.push(s)
            }
        }
        ,
        e[95] = function(s) {
            let f = s.stack.pop()
              , p = s.stack.pop();
            s.stack.push(p),
            s.stack.push(f)
        }
        ,
        e[170] = function() {
            let s = n.index - 1;
            for (; n.index % 4 != 0; )
                n.readUint8();
            let f = s + n.readInt32()
              , p = n.readInt32()
              , k = n.readInt32() - p + 1
              , N = [];
            for (let P = 0; P < k; P++)
                N[p + P] = s + n.readInt32();
            return function(P) {
                let Z = P.stack.pop()
                  , Y = N[Z];
                Y === void 0 && (Y = f),
                P.position = R[Y]
            }
        }
        ,
        e[196] = function(s) {
            let f = n.readUint8()
              , p = n.readUint16();
            if (f >= 21 && f <= 25)
                return function(b) {
                    b.push(b.locals[p])
                }
                ;
            if (f >= 54 && f <= 58)
                return function(b) {
                    b.locals[p] = b.pop()
                }
                ;
            if (f == 132) {
                let b = n.readInt16();
                return function(k) {
                    k.locals[p] += b
                }
            }
            throw new Error("wide: unkown op " + p)
        }
        ;
        let v = []
          , I = [];
        var R = new Array(n.getRemaining());
        let F = [], C = [], j = !0, y = 0, A, S = !0;
        for (; !n.isEnd(); ) {
            F[v.length] = n.index,
            y = n.index;
            let s = n.readUint8();
            if (c.usedByteCodes[s] || (c.usedByteCodes[s] = 0),
            c.usedByteCodes[s]++,
            e[s]) {
                A = !0;
                let f = null;
                try {
                    f = e[s](),
                    f || (f = e[s])
                } catch {
                    f = e[s]
                }
                v.push(f),
                j = j && A
            } else
                throw new Error("Op 0x" + s.toString(16) + " not supported")
        }
        for (let s = 0; s < F.length; s++)
            R[F[s]] = s;
        for (let s = 0; s < a.length; s++)
            a[s].startPc = R[a[s].startPc],
            a[s].endPc = R[a[s].endPc],
            a[s].handler = R[a[s].handler];
        delete t.stream,
        t.content = v,
        t.isSafe = j;
        let L = t.name;
        t.parent.prototype[L].data = t
    }
    function Xa(t, e, n, i, r, a, o, l, u) {
        var d = {
            stream: new le(e),
            methodPath: n,
            constantPool: i,
            exceptions: r,
            parent: t,
            name: o,
            maxLocals: a,
            argumentsTypes: l,
            isStatic: (u & 8) !== 0,
            isSynchronized: (u & 32) !== 0
        }
          , h = function(...g) {
            var _ = [];
            d.isStatic || _.push(this);
            for (let R = 0; R < l.length; R++) {
                let F = g[R];
                _.push(F),
                (re(F) || ie(F)) && _.push(F)
            }
            var E = null;
            g[l.length] && g[l.length].constructor === Function && (E = g[l.length]);
            var T;
            if ((!d.content || d.regenerate) && Ka(d),
            d.isSynchronized) {
                var w = this.monitorQueue ? this.monitorQueue.length : 0
                  , x = this;
                Ze(x);
                var v = E || function() {}
                ;
                if (E = function() {
                    Mn(x),
                    v()
                }
                ,
                c.isThreadSuspended) {
                    console.warn("state.isThreadSuspended");
                    var I = Ea(function() {
                        return un(d, _, d.constantPool, r, null, E)
                    });
                    setTimeout(function() {
                        st(I)
                    }, 0);
                    return
                }
            }
            return d.nativeMethod ? d.nativeMethod.apply(this, g) : un(d, _, d.constantPool, r, null, E)
        };
        return h.isUnsafe = !localStorage.getItem(c.storageName + n),
        h.data = d,
        h
    }
    var Gt = 1;
    function fm() {
        return function() {
            this.construct && this.construct()
        }
    }
    function za(t) {
        var e = fm()
          , n = [];
        e.prototype.initialized = !1;
        var i = 1
          , r = 3
          , a = 4
          , o = 5
          , l = 6
          , u = 7
          , d = 8
          , h = 9
          , g = 10
          , _ = 11
          , E = 12;
        function T() {
            if (t.readUint32() != 3405691582)
                throw new Error("Incorrect header")
        }
        function w() {
            t.readUint32()
        }
        function x() {
            for (var f = t.readUint16() - 1, p = 1; p <= f; p++) {
                var b = t.readUint8()
                  , k = {
                    tag: b,
                    implemented: !1
                };
                if (b == i) {
                    k.implemented = !0;
                    for (var N = t.readUint16(), P = [], Z = 0; Z < N; Z++)
                        P.push(t.readUint8());
                    k.value = Ca(P)
                }
                if (b == r && (k.implemented = !0,
                k.value = t.readInt32()),
                b == a) {
                    k.implemented = !0;
                    var Y = t.readUint32();
                    k.value = He(Y)
                }
                if (b == o && (k.implemented = !0,
                k.value = {
                    hi: t.readUint32(),
                    lo: t.readUint32()
                }),
                b == l) {
                    k.implemented = !0;
                    var H = t.readUint32()
                      , z = t.readUint32();
                    k.value = $e(H, z)
                }
                if (b == u && (k.implemented = !0,
                k.nameIndex = t.readUint16()),
                b == d && (k.implemented = !0,
                k.stringIndex = t.readUint16()),
                (b == h || b == g || b == _) && (k.implemented = !0,
                k.classIndex = t.readUint16(),
                k.nameAndTypeIndex = t.readUint16()),
                b == E && (k.implemented = !0,
                k.nameIndex = t.readUint16(),
                k.descriptorIndex = t.readUint16()),
                !k.implemented)
                    throw new Error("Unimplemented tag " + b + " at position " + p);
                n[p] = k,
                (b == o || b == l) && p++
            }
        }
        function v(f, p, b) {
            return b ? `${f}${p}` : `${f}:${p}`
        }
        function I(f) {
            for (var p = f.slice(f.indexOf("(") + 1, f.indexOf(")")), b = 0, k = 1, N = 2, P = b, Z = [], Y = [], H = 0; H < p.length; H++)
                Y.push(p[H]),
                P == b || P == N ? p[H] == "L" ? P = k : p[H] == "[" ? P = N : (Z.push(Y.join("")),
                Y = []) : P == k && p[H] == ";" && (P = b,
                Z.push(Y.join("")),
                Y = []);
            return Z
        }
        function R() {
            function f(b) {
                let k = n[b];
                var N = k.tag;
                if ((N == i || N == r || N == o || N == a || N == l) && (n[b] = k.value),
                N == u) {
                    var P = f(k.nameIndex)
                      , Z = !0
                      , Y = P.substr(0, P.lastIndexOf("[") + 1);
                    P = P.substr(P.lastIndexOf("[") + 1),
                    Y.length > 0 && (Z = !1),
                    P[0] === "L" && P[P.length - 1] === ";" && (Z = !0,
                    P = P.substring(1, P.length - 1));
                    var H = P.split("/")
                      , z = [];
                    for (var K in H)
                        K > 0 && z.push("."),
                        z.push(H[K]);
                    z.unshift(Y),
                    n[b] = {
                        className: z.join("")
                    }
                }
                if (N == d) {
                    var W = f(k.stringIndex);
                    n[b] = new c.javaRoot.java.lang.String(W)
                }
                if (N == h || N == g || N == _) {
                    let ct = f(k.nameAndTypeIndex)
                      , gt = {
                        className: f(k.classIndex).className,
                        name: ct.name,
                        type: ct.type
                    };
                    if (n[b] = gt,
                    N == _,
                    N == g || N == _) {
                        let ee = gt;
                        var ft = [ee.className, ".prototype.", ee.name].join("");
                        et.app || (c.usedMethods[ft] = !0)
                    }
                }
                if (N == E) {
                    let ct = f(k.nameIndex);
                    var rt = f(k.descriptorIndex);
                    let gt = rt.includes("(")
                      , ee = v(ct, rt, gt);
                    n[b] = {
                        name: ee,
                        type: {
                            argumentsTypes: I(rt),
                            returnType: rt.slice(rt.indexOf(")") + 1)
                        }
                    }
                }
                return n[b]
            }
            for (var p in n)
                f(Number(p))
        }
        function F() {
            return t.readUint16()
        }
        function C() {
            e.prototype.superClass = n[t.readUint16()].className
        }
        function j() {
            e.prototype.interfaces = [];
            for (var f = t.readUint16(), p = 0; p < f; p++)
                e.prototype.interfaces.push(n[t.readUint16()].className)
        }
        function y() {
            let f = t.readUint16();
            for (let p = 0; p < f; p++) {
                let b = t.readUint16()
                  , k = n[t.readUint16()]
                  , N = n[t.readUint16()]
                  , P = A()
                  , Z = v(k, N);
                e.prototype[Z] = Gt,
                e.prototype["$" + Gt] = null,
                (N == "B" || N == "S" || N == "F" || N == "I") && (e.prototype["$" + Gt] = 0),
                N == "D" && (e.prototype["$" + Gt] = Ge),
                N == "J" && (e.prototype["$" + Gt] = {
                    hi: 0,
                    lo: 0
                }),
                N == "C" && (e.prototype["$" + Gt] = 0),
                N == "Z" && (e.prototype["$" + Gt] = 0),
                P.ConstantValue && (e.prototype["$" + Gt] = P.ConstantValue),
                c.statics["$" + Gt] = e.prototype["$" + Gt],
                Gt++
            }
        }
        function A(f, p, b) {
            for (var k = t.readUint16(), N = {}, P = 0; P < k; P++) {
                var Z = n[t.readUint16()]
                  , Y = t.readUint32()
                  , H = null;
                if (Z == "Code") {
                    var z = t.readUint16()
                      , K = t.readUint16()
                      , W = t.readUint32()
                      , ft = t.getSubstream(W);
                    t.skip(W);
                    for (var rt = [], ct = t.readUint16(), gt = 0; gt < ct; gt++)
                        rt[gt] = {
                            startPc: t.readUint16(),
                            endPc: t.readUint16(),
                            handler: t.readUint16(),
                            catchType: n[t.readUint16()]
                        };
                    A(ft);
                    let se = v(f, p, !0);
                    var ee = I(p)
                      , Si = s.className + ".prototype." + se;
                    H = Xa(e, ft, Si, n, rt, K, se, ee, b)
                }
                if (Z == "Synthetic" && (H = !0),
                Z == "ConstantValue" && (H = n[t.readUint16()]),
                Z == "InnerClasses") {
                    var An = t.readUint16();
                    H = [];
                    for (var gt = 0; gt < An; gt++) {
                        var Ri = {
                            innerClass: n[t.readUint16()],
                            outerClass: n[t.readUint16()],
                            innerName: n[t.readUint16()],
                            accessFlags: t.readUint16()
                        };
                        H.push(Ri)
                    }
                }
                if (Z == "Exceptions") {
                    var oe = t.readUint16();
                    H = [];
                    for (var gt = 0; gt < oe; gt++)
                        H.push(n[t.readUint16()])
                }
                if ((Z == "StackMap" || Z == "LineNumberTable" || Z == "SourceFile" || Z == "LocalVariableTable") && (t.skip(Y),
                H = !0),
                H === null)
                    throw new Error("Unimplemented attribute " + Z);
                N[Z] = H
            }
            return N
        }
        function S() {
            let f = t.readUint16();
            for (let p = 0; p < f; p++) {
                let b = t.readUint16()
                  , k = n[t.readUint16()]
                  , N = n[t.readUint16()]
                  , P = A(k, N, b)
                  , Z = v(k, N, !0);
                e.prototype[Z] = P.Code
            }
        }
        T(),
        w(),
        x(),
        R();
        var L = F();
        L & 512 ? e.prototype.type = "interface" : e.prototype.type = "class";
        var s = n[t.readUint16()];
        return e.prototype.className = s.className,
        console.log("Converting class " + s.className),
        C(),
        j(),
        y(),
        S(),
        A(),
        e
    }
    function Wn(t) {
        return Jn(t.map(([e,n])=>new Array(e).fill(n, 0, e)))
    }
    function Jn(t) {
        return t.reduce((e,n)=>e.concat(Array.isArray(n) ? Jn(n) : n), [])
    }
    var Wa = [0, 1, 2, 3].concat(...Wn([[2, 4], [2, 5], [4, 6], [4, 7], [8, 8], [8, 9], [16, 10], [16, 11], [32, 12], [32, 13], [64, 14], [64, 15], [2, 0], [1, 16], [1, 17], [2, 18], [2, 19], [4, 20], [4, 21], [8, 22], [8, 23], [16, 24], [16, 25], [32, 26], [32, 27], [64, 28], [64, 29]]));
    function at() {
        let t = this;
        function e(r) {
            let a = t.dyn_tree, o = t.stat_desc.static_tree, l = t.stat_desc.extra_bits, u = t.stat_desc.extra_base, d = t.stat_desc.max_length, h, g, _, E, T, w, x = 0;
            for (E = 0; E <= 15; E++)
                r.bl_count[E] = 0;
            for (a[r.heap[r.heap_max] * 2 + 1] = 0,
            h = r.heap_max + 1; h < 573; h++)
                g = r.heap[h],
                E = a[a[g * 2 + 1] * 2 + 1] + 1,
                E > d && (E = d,
                x++),
                a[g * 2 + 1] = E,
                !(g > t.max_code) && (r.bl_count[E]++,
                T = 0,
                g >= u && (T = l[g - u]),
                w = a[g * 2],
                r.opt_len += w * (E + T),
                o && (r.static_len += w * (o[g * 2 + 1] + T)));
            if (x !== 0) {
                do {
                    for (E = d - 1; r.bl_count[E] === 0; )
                        E--;
                    r.bl_count[E]--,
                    r.bl_count[E + 1] += 2,
                    r.bl_count[d]--,
                    x -= 2
                } while (x > 0);
                for (E = d; E !== 0; E--)
                    for (g = r.bl_count[E]; g !== 0; )
                        _ = r.heap[--h],
                        !(_ > t.max_code) && (a[_ * 2 + 1] != E && (r.opt_len += (E - a[_ * 2 + 1]) * a[_ * 2],
                        a[_ * 2 + 1] = E),
                        g--)
            }
        }
        function n(r, a) {
            let o = 0;
            do
                o |= r & 1,
                r >>>= 1,
                o <<= 1;
            while (--a > 0);
            return o >>> 1
        }
        function i(r, a, o) {
            let l = [], u = 0, d, h, g;
            for (d = 1; d <= 15; d++)
                l[d] = u = u + o[d - 1] << 1;
            for (h = 0; h <= a; h++)
                g = r[h * 2 + 1],
                g !== 0 && (r[h * 2] = n(l[g]++, g))
        }
        t.build_tree = function(r) {
            let a = t.dyn_tree, o = t.stat_desc.static_tree, l = t.stat_desc.elems, u, d, h = -1, g;
            for (r.heap_len = 0,
            r.heap_max = 573,
            u = 0; u < l; u++)
                a[u * 2] !== 0 ? (r.heap[++r.heap_len] = h = u,
                r.depth[u] = 0) : a[u * 2 + 1] = 0;
            for (; r.heap_len < 2; )
                g = r.heap[++r.heap_len] = h < 2 ? ++h : 0,
                a[g * 2] = 1,
                r.depth[g] = 0,
                r.opt_len--,
                o && (r.static_len -= o[g * 2 + 1]);
            for (t.max_code = h,
            u = Math.floor(r.heap_len / 2); u >= 1; u--)
                r.pqdownheap(a, u);
            g = l;
            do
                u = r.heap[1],
                r.heap[1] = r.heap[r.heap_len--],
                r.pqdownheap(a, 1),
                d = r.heap[1],
                r.heap[--r.heap_max] = u,
                r.heap[--r.heap_max] = d,
                a[g * 2] = a[u * 2] + a[d * 2],
                r.depth[g] = Math.max(r.depth[u], r.depth[d]) + 1,
                a[u * 2 + 1] = a[d * 2 + 1] = g,
                r.heap[1] = g++,
                r.pqdownheap(a, 1);
            while (r.heap_len >= 2);
            r.heap[--r.heap_max] = r.heap[1],
            e(r),
            i(a, t.max_code, r.bl_count)
        }
    }
    at._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(...Wn([[2, 8], [2, 9], [2, 10], [2, 11], [4, 12], [4, 13], [4, 14], [4, 15], [8, 16], [8, 17], [8, 18], [8, 19], [16, 20], [16, 21], [16, 22], [16, 23], [32, 24], [32, 25], [32, 26], [31, 27], [1, 28]]));
    at.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0];
    at.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576];
    at.d_code = function(t) {
        return t < 256 ? Wa[t] : Wa[256 + (t >>> 7)]
    }
    ;
    at.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
    at.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    at.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
    at.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    function pt(t, e, n, i, r) {
        let a = this;
        a.static_tree = t,
        a.extra_bits = e,
        a.extra_base = n,
        a.elems = i,
        a.max_length = r
    }
    var dm = [12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 19, 275, 147, 403, 83, 339, 211, 467, 51, 307, 179, 435, 115, 371, 243, 499, 11, 267, 139, 395, 75, 331, 203, 459, 43, 299, 171, 427, 107, 363, 235, 491, 27, 283, 155, 411, 91, 347, 219, 475, 59, 315, 187, 443, 123, 379, 251, 507, 7, 263, 135, 391, 71, 327, 199, 455, 39, 295, 167, 423, 103, 359, 231, 487, 23, 279, 151, 407, 87, 343, 215, 471, 55, 311, 183, 439, 119, 375, 247, 503, 15, 271, 143, 399, 79, 335, 207, 463, 47, 303, 175, 431, 111, 367, 239, 495, 31, 287, 159, 415, 95, 351, 223, 479, 63, 319, 191, 447, 127, 383, 255, 511, 0, 64, 32, 96, 16, 80, 48, 112, 8, 72, 40, 104, 24, 88, 56, 120, 4, 68, 36, 100, 20, 84, 52, 116, 3, 131, 67, 195, 35, 163, 99, 227]
      , mm = Wn([[144, 8], [112, 9], [24, 7], [8, 8]]);
    pt.static_ltree = Jn(dm.map((t,e)=>[t, mm[e]]));
    var hm = [0, 16, 8, 24, 4, 20, 12, 28, 2, 18, 10, 26, 6, 22, 14, 30, 1, 17, 9, 25, 5, 21, 13, 29, 3, 19, 11, 27, 7, 23]
      , pm = Wn([[30, 5]]);
    pt.static_dtree = Jn(hm.map((t,e)=>[t, pm[e]]));
    pt.static_l_desc = new pt(pt.static_ltree,at.extra_lbits,257,286,15);
    pt.static_d_desc = new pt(pt.static_dtree,at.extra_dbits,0,30,15);
    pt.static_bl_desc = new pt(null,at.extra_blbits,0,19,7);
    var gm = 9
      , vm = 8;
    function zt(t, e, n, i, r) {
        let a = this;
        a.good_length = t,
        a.max_lazy = e,
        a.nice_length = n,
        a.max_chain = i,
        a.func = r
    }
    var Qa = 0
      , Xn = 1
      , Ce = 2
      , qt = [new zt(0,0,0,0,Qa), new zt(4,4,8,4,Xn), new zt(4,5,16,8,Xn), new zt(4,6,32,32,Xn), new zt(4,4,16,16,Ce), new zt(8,16,32,32,Ce), new zt(8,16,128,128,Ce), new zt(8,32,128,256,Ce), new zt(32,128,258,1024,Ce), new zt(32,258,258,4096,Ce)]
      , Gn = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""]
      , Vt = 0
      , qn = 1
      , gn = 2
      , Yn = 3
      , xm = 32
      , qi = 42
      , Kn = 113
      , vn = 666
      , Yi = 8
      , _m = 0
      , Ki = 1
      , wm = 2
      , ot = 3
      , zn = 258
      , Lt = zn + ot + 1;
    function Ja(t, e, n, i) {
        let r = t[e * 2]
          , a = t[n * 2];
        return r < a || r == a && i[e] <= i[n]
    }
    function ym() {
        let t = this, e, n, i, r, a, o, l, u, d, h, g, _, E, T, w, x, v, I, R, F, C, j, y, A, S, L, s, f, p, b, k, N, P, Z = new at, Y = new at, H = new at;
        t.depth = [];
        let z, K, W, ft, rt, ct;
        t.bl_count = [],
        t.heap = [],
        k = [],
        N = [],
        P = [];
        function gt() {
            d = 2 * a,
            g[E - 1] = 0;
            for (let D = 0; D < E - 1; D++)
                g[D] = 0;
            L = qt[s].max_lazy,
            p = qt[s].good_length,
            b = qt[s].nice_length,
            S = qt[s].max_chain,
            C = 0,
            v = 0,
            y = 0,
            I = A = ot - 1,
            F = 0,
            _ = 0
        }
        function ee() {
            let D;
            for (D = 0; D < 286; D++)
                k[D * 2] = 0;
            for (D = 0; D < 30; D++)
                N[D * 2] = 0;
            for (D = 0; D < 19; D++)
                P[D * 2] = 0;
            k[256 * 2] = 1,
            t.opt_len = t.static_len = 0,
            K = W = 0
        }
        function Si() {
            Z.dyn_tree = k,
            Z.stat_desc = pt.static_l_desc,
            Y.dyn_tree = N,
            Y.stat_desc = pt.static_d_desc,
            H.dyn_tree = P,
            H.stat_desc = pt.static_bl_desc,
            rt = 0,
            ct = 0,
            ft = 8,
            ee()
        }
        t.pqdownheap = function(D, B) {
            let M = t.heap
              , U = M[B]
              , $ = B << 1;
            for (; $ <= t.heap_len && ($ < t.heap_len && Ja(D, M[$ + 1], M[$], t.depth) && $++,
            !Ja(D, U, M[$], t.depth)); )
                M[B] = M[$],
                B = $,
                $ <<= 1;
            M[B] = U
        }
        ;
        function An(D, B) {
            let M = -1, U, $ = D[0 * 2 + 1], q = 0, J = 7, yt = 4;
            $ === 0 && (J = 138,
            yt = 3),
            D[(B + 1) * 2 + 1] = 65535;
            for (let Zt = 0; Zt <= B; Zt++)
                U = $,
                $ = D[(Zt + 1) * 2 + 1],
                !(++q < J && U == $) && (q < yt ? P[U * 2] += q : U !== 0 ? (U != M && P[U * 2]++,
                P[16 * 2]++) : q <= 10 ? P[17 * 2]++ : P[18 * 2]++,
                q = 0,
                M = U,
                $ === 0 ? (J = 138,
                yt = 3) : U == $ ? (J = 6,
                yt = 3) : (J = 7,
                yt = 4))
        }
        function Ri() {
            let D;
            for (An(k, Z.max_code),
            An(N, Y.max_code),
            H.build_tree(t),
            D = 18; D >= 3 && P[at.bl_order[D] * 2 + 1] === 0; D--)
                ;
            return t.opt_len += 3 * (D + 1) + 5 + 5 + 4,
            D
        }
        function oe(D) {
            t.pending_buf[t.pending++] = D
        }
        function se(D) {
            oe(D & 255),
            oe(D >>> 8 & 255)
        }
        function dd(D) {
            oe(D >> 8 & 255),
            oe(D & 255 & 255)
        }
        function wt(D, B) {
            let M, U = B;
            ct > 16 - U ? (M = D,
            rt |= M << ct & 65535,
            se(rt),
            rt = M >>> 16 - ct,
            ct += U - 16) : (rt |= D << ct & 65535,
            ct += U)
        }
        function Pt(D, B) {
            let M = D * 2;
            wt(B[M] & 65535, B[M + 1] & 65535)
        }
        function $r(D, B) {
            let M, U = -1, $, q = D[0 * 2 + 1], J = 0, yt = 7, Zt = 4;
            for (q === 0 && (yt = 138,
            Zt = 3),
            M = 0; M <= B; M++)
                if ($ = q,
                q = D[(M + 1) * 2 + 1],
                !(++J < yt && $ == q)) {
                    if (J < Zt)
                        do
                            Pt($, P);
                        while (--J !== 0);
                    else
                        $ !== 0 ? ($ != U && (Pt($, P),
                        J--),
                        Pt(16, P),
                        wt(J - 3, 2)) : J <= 10 ? (Pt(17, P),
                        wt(J - 3, 3)) : (Pt(18, P),
                        wt(J - 11, 7));
                    J = 0,
                    U = $,
                    q === 0 ? (yt = 138,
                    Zt = 3) : $ == q ? (yt = 6,
                    Zt = 3) : (yt = 7,
                    Zt = 4)
                }
        }
        function md(D, B, M) {
            let U;
            for (wt(D - 257, 5),
            wt(B - 1, 5),
            wt(M - 4, 4),
            U = 0; U < M; U++)
                wt(P[at.bl_order[U] * 2 + 1], 3);
            $r(k, D - 1),
            $r(N, B - 1)
        }
        function Gr() {
            ct == 16 ? (se(rt),
            rt = 0,
            ct = 0) : ct >= 8 && (oe(rt & 255),
            rt >>>= 8,
            ct -= 8)
        }
        function hd() {
            wt(Ki << 1, 3),
            Pt(256, pt.static_ltree),
            Gr(),
            1 + ft + 10 - ct < 9 && (wt(Ki << 1, 3),
            Pt(256, pt.static_ltree),
            Gr()),
            ft = 7
        }
        function on(D, B) {
            let M, U, $;
            if (t.dist_buf[K] = D,
            t.lc_buf[K] = B & 255,
            K++,
            D === 0 ? k[B * 2]++ : (W++,
            D--,
            k[(at._length_code[B] + 256 + 1) * 2]++,
            N[at.d_code(D) * 2]++),
            !(K & 8191) && s > 2) {
                for (M = K * 8,
                U = C - v,
                $ = 0; $ < 30; $++)
                    M += N[$ * 2] * (5 + at.extra_dbits[$]);
                if (M >>>= 3,
                W < Math.floor(K / 2) && M < Math.floor(U / 2))
                    return !0
            }
            return K == z - 1
        }
        function qr(D, B) {
            let M, U, $ = 0, q, J;
            if (K !== 0)
                do
                    M = t.dist_buf[$],
                    U = t.lc_buf[$],
                    $++,
                    M === 0 ? Pt(U, D) : (q = at._length_code[U],
                    Pt(q + 256 + 1, D),
                    J = at.extra_lbits[q],
                    J !== 0 && (U -= at.base_length[q],
                    wt(U, J)),
                    M--,
                    q = at.d_code(M),
                    Pt(q, B),
                    J = at.extra_dbits[q],
                    J !== 0 && (M -= at.base_dist[q],
                    wt(M, J)));
                while ($ < K);
            Pt(256, D),
            ft = D[256 * 2 + 1]
        }
        function Yr() {
            ct > 8 ? se(rt) : ct > 0 && oe(rt & 255),
            rt = 0,
            ct = 0
        }
        function pd(D, B, M) {
            Yr(),
            ft = 8,
            M && (se(B),
            se(~B)),
            t.pending_buf.set(u.subarray(D, D + B), t.pending),
            t.pending += B
        }
        function Kr(D, B, M) {
            wt((_m << 1) + (M ? 1 : 0), 3),
            pd(D, B, !0)
        }
        function gd(D, B, M) {
            let U, $, q = 0;
            s > 0 ? (Z.build_tree(t),
            Y.build_tree(t),
            q = Ri(),
            U = t.opt_len + 3 + 7 >>> 3,
            $ = t.static_len + 3 + 7 >>> 3,
            $ <= U && (U = $)) : U = $ = B + 5,
            B + 4 <= U && D != -1 ? Kr(D, B, M) : $ == U ? (wt((Ki << 1) + (M ? 1 : 0), 3),
            qr(pt.static_ltree, pt.static_dtree)) : (wt((wm << 1) + (M ? 1 : 0), 3),
            md(Z.max_code + 1, Y.max_code + 1, q + 1),
            qr(k, N)),
            ee(),
            M && Yr()
        }
        function ce(D) {
            gd(v >= 0 ? v : -1, C - v, D),
            v = C,
            e.flush_pending()
        }
        function ki() {
            let D, B, M, U;
            do {
                if (U = d - y - C,
                U === 0 && C === 0 && y === 0)
                    U = a;
                else if (U == -1)
                    U--;
                else if (C >= a + a - Lt) {
                    u.set(u.subarray(a, a + a), 0),
                    j -= a,
                    C -= a,
                    v -= a,
                    D = E,
                    M = D;
                    do
                        B = g[--M] & 65535,
                        g[M] = B >= a ? B - a : 0;
                    while (--D !== 0);
                    D = a,
                    M = D;
                    do
                        B = h[--M] & 65535,
                        h[M] = B >= a ? B - a : 0;
                    while (--D !== 0);
                    U += a
                }
                if (e.avail_in === 0)
                    return;
                D = e.read_buf(u, C + y, U),
                y += D,
                y >= ot && (_ = u[C] & 255,
                _ = (_ << x ^ u[C + 1] & 255) & w)
            } while (y < Lt && e.avail_in !== 0)
        }
        function vd(D) {
            let B = 65535, M;
            for (B > i - 5 && (B = i - 5); ; ) {
                if (y <= 1) {
                    if (ki(),
                    y === 0 && D == 0)
                        return Vt;
                    if (y === 0)
                        break
                }
                if (C += y,
                y = 0,
                M = v + B,
                (C === 0 || C >= M) && (y = C - M,
                C = M,
                ce(!1),
                e.avail_out === 0) || C - v >= a - Lt && (ce(!1),
                e.avail_out === 0))
                    return Vt
            }
            return ce(D == 4),
            e.avail_out === 0 ? D == 4 ? gn : Vt : D == 4 ? Yn : qn
        }
        function Xr(D) {
            let B = S, M = C, U, $, q = A, J = C > a - Lt ? C - (a - Lt) : 0, yt = b, Zt = l, Ci = C + zn, zr = u[M + q - 1], Wr = u[M + q];
            A >= p && (B >>= 2),
            yt > y && (yt = y);
            do
                if (U = D,
                !(u[U + q] != Wr || u[U + q - 1] != zr || u[U] != u[M] || u[++U] != u[M + 1])) {
                    M += 2,
                    U++;
                    do
                        ;
                    while (u[++M] == u[++U] && u[++M] == u[++U] && u[++M] == u[++U] && u[++M] == u[++U] && u[++M] == u[++U] && u[++M] == u[++U] && u[++M] == u[++U] && u[++M] == u[++U] && M < Ci);
                    if ($ = zn - (Ci - M),
                    M = Ci - zn,
                    $ > q) {
                        if (j = D,
                        q = $,
                        $ >= yt)
                            break;
                        zr = u[M + q - 1],
                        Wr = u[M + q]
                    }
                }
            while ((D = h[D & Zt] & 65535) > J && --B !== 0);
            return q <= y ? q : y
        }
        function xd(D) {
            let B = 0, M;
            for (; ; ) {
                if (y < Lt) {
                    if (ki(),
                    y < Lt && D == 0)
                        return Vt;
                    if (y === 0)
                        break
                }
                if (y >= ot && (_ = (_ << x ^ u[C + (ot - 1)] & 255) & w,
                B = g[_] & 65535,
                h[C & l] = g[_],
                g[_] = C),
                B !== 0 && (C - B & 65535) <= a - Lt && f != 2 && (I = Xr(B)),
                I >= ot)
                    if (M = on(C - j, I - ot),
                    y -= I,
                    I <= L && y >= ot) {
                        I--;
                        do
                            C++,
                            _ = (_ << x ^ u[C + (ot - 1)] & 255) & w,
                            B = g[_] & 65535,
                            h[C & l] = g[_],
                            g[_] = C;
                        while (--I !== 0);
                        C++
                    } else
                        C += I,
                        I = 0,
                        _ = u[C] & 255,
                        _ = (_ << x ^ u[C + 1] & 255) & w;
                else
                    M = on(0, u[C] & 255),
                    y--,
                    C++;
                if (M && (ce(!1),
                e.avail_out === 0))
                    return Vt
            }
            return ce(D == 4),
            e.avail_out === 0 ? D == 4 ? gn : Vt : D == 4 ? Yn : qn
        }
        function _d(D) {
            let B = 0, M, U;
            for (; ; ) {
                if (y < Lt) {
                    if (ki(),
                    y < Lt && D == 0)
                        return Vt;
                    if (y === 0)
                        break
                }
                if (y >= ot && (_ = (_ << x ^ u[C + (ot - 1)] & 255) & w,
                B = g[_] & 65535,
                h[C & l] = g[_],
                g[_] = C),
                A = I,
                R = j,
                I = ot - 1,
                B !== 0 && A < L && (C - B & 65535) <= a - Lt && (f != 2 && (I = Xr(B)),
                I <= 5 && (f == 1 || I == ot && C - j > 4096) && (I = ot - 1)),
                A >= ot && I <= A) {
                    U = C + y - ot,
                    M = on(C - 1 - R, A - ot),
                    y -= A - 1,
                    A -= 2;
                    do
                        ++C <= U && (_ = (_ << x ^ u[C + (ot - 1)] & 255) & w,
                        B = g[_] & 65535,
                        h[C & l] = g[_],
                        g[_] = C);
                    while (--A !== 0);
                    if (F = 0,
                    I = ot - 1,
                    C++,
                    M && (ce(!1),
                    e.avail_out === 0))
                        return Vt
                } else if (F !== 0) {
                    if (M = on(0, u[C - 1] & 255),
                    M && ce(!1),
                    C++,
                    y--,
                    e.avail_out === 0)
                        return Vt
                } else
                    F = 1,
                    C++,
                    y--
            }
            return F !== 0 && (M = on(0, u[C - 1] & 255),
            F = 0),
            ce(D == 4),
            e.avail_out === 0 ? D == 4 ? gn : Vt : D == 4 ? Yn : qn
        }
        function wd(D) {
            return D.total_in = D.total_out = 0,
            D.msg = null,
            t.pending = 0,
            t.pending_out = 0,
            n = Kn,
            r = 0,
            Si(),
            gt(),
            0
        }
        t.deflateInit = function(D, B, M, U, $, q) {
            return U || (U = Yi),
            $ || ($ = vm),
            q || (q = 0),
            D.msg = null,
            B == -1 && (B = 6),
            $ < 1 || $ > gm || U != Yi || M < 9 || M > 15 || B < 0 || B > 9 || q < 0 || q > 2 ? -2 : (D.dstate = t,
            o = M,
            a = 1 << o,
            l = a - 1,
            T = $ + 7,
            E = 1 << T,
            w = E - 1,
            x = Math.floor((T + ot - 1) / ot),
            u = new Uint8Array(a * 2),
            h = [],
            g = [],
            z = 1 << $ + 6,
            t.pending_buf = new Uint8Array(z * 4),
            i = z * 4,
            t.dist_buf = new Uint16Array(z),
            t.lc_buf = new Uint8Array(z),
            s = B,
            f = q,
            wd(D))
        }
        ,
        t.deflateEnd = function() {
            return n != qi && n != Kn && n != vn ? -2 : (t.lc_buf = null,
            t.dist_buf = null,
            t.pending_buf = null,
            g = null,
            h = null,
            u = null,
            t.dstate = null,
            n == Kn ? -3 : 0)
        }
        ,
        t.deflateParams = function(D, B, M) {
            let U = 0;
            return B == -1 && (B = 6),
            B < 0 || B > 9 || M < 0 || M > 2 ? -2 : (qt[s].func != qt[B].func && D.total_in !== 0 && (U = D.deflate(1)),
            s != B && (s = B,
            L = qt[s].max_lazy,
            p = qt[s].good_length,
            b = qt[s].nice_length,
            S = qt[s].max_chain),
            f = M,
            U)
        }
        ,
        t.deflateSetDictionary = function(D, B, M) {
            let U = M, $, q = 0;
            if (!B || n != qi)
                return -2;
            if (U < ot)
                return 0;
            for (U > a - Lt && (U = a - Lt,
            q = M - U),
            u.set(B.subarray(q, q + U), 0),
            C = U,
            v = U,
            _ = u[0] & 255,
            _ = (_ << x ^ u[1] & 255) & w,
            $ = 0; $ <= U - ot; $++)
                _ = (_ << x ^ u[$ + (ot - 1)] & 255) & w,
                h[$ & l] = g[_],
                g[_] = $;
            return 0
        }
        ,
        t.deflate = function(D, B) {
            let M, U, $, q, J;
            if (B > 4 || B < 0)
                return -2;
            if (!D.next_out || !D.next_in && D.avail_in !== 0 || n == vn && B != 4)
                return D.msg = Gn[4],
                -2;
            if (D.avail_out === 0)
                return D.msg = Gn[7],
                -5;
            if (e = D,
            q = r,
            r = B,
            n == qi && (U = Yi + (o - 8 << 4) << 8,
            $ = (s - 1 & 255) >> 1,
            $ > 3 && ($ = 3),
            U |= $ << 6,
            C !== 0 && (U |= xm),
            U += 31 - U % 31,
            n = Kn,
            dd(U)),
            t.pending !== 0) {
                if (e.flush_pending(),
                e.avail_out === 0)
                    return r = -1,
                    0
            } else if (e.avail_in === 0 && B <= q && B != 4)
                return e.msg = Gn[7],
                -5;
            if (n == vn && e.avail_in !== 0)
                return D.msg = Gn[7],
                -5;
            if (e.avail_in !== 0 || y !== 0 || B != 0 && n != vn) {
                switch (J = -1,
                qt[s].func) {
                case Qa:
                    J = vd(B);
                    break;
                case Xn:
                    J = xd(B);
                    break;
                case Ce:
                    J = _d(B);
                    break;
                default:
                }
                if ((J == gn || J == Yn) && (n = vn),
                J == Vt || J == gn)
                    return e.avail_out === 0 && (r = -1),
                    0;
                if (J == qn) {
                    if (B == 1)
                        hd();
                    else if (Kr(0, 0, !1),
                    B == 3)
                        for (M = 0; M < E; M++)
                            g[M] = 0;
                    if (e.flush_pending(),
                    e.avail_out === 0)
                        return r = -1,
                        0
                }
            }
            return B != 4 ? 0 : 1
        }
    }
    function to() {
        let t = this;
        t.next_in_index = 0,
        t.next_out_index = 0,
        t.avail_in = 0,
        t.total_in = 0,
        t.avail_out = 0,
        t.total_out = 0
    }
    to.prototype = {
        deflateInit: function(t, e) {
            let n = this;
            return n.dstate = new ym,
            e || (e = 15),
            n.dstate.deflateInit(n, t, e)
        },
        deflate: function(t) {
            let e = this;
            return e.dstate ? e.dstate.deflate(e, t) : -2
        },
        deflateEnd: function() {
            let t = this;
            if (!t.dstate)
                return -2;
            let e = t.dstate.deflateEnd();
            return t.dstate = null,
            e
        },
        deflateParams: function(t, e) {
            let n = this;
            return n.dstate ? n.dstate.deflateParams(n, t, e) : -2
        },
        deflateSetDictionary: function(t, e) {
            let n = this;
            return n.dstate ? n.dstate.deflateSetDictionary(n, t, e) : -2
        },
        read_buf: function(t, e, n) {
            let i = this
              , r = i.avail_in;
            return r > n && (r = n),
            r === 0 ? 0 : (i.avail_in -= r,
            t.set(i.next_in.subarray(i.next_in_index, i.next_in_index + r), e),
            i.next_in_index += r,
            i.total_in += r,
            r)
        },
        flush_pending: function() {
            let t = this
              , e = t.dstate.pending;
            e > t.avail_out && (e = t.avail_out),
            e !== 0 && (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + e), t.next_out_index),
            t.next_out_index += e,
            t.dstate.pending_out += e,
            t.total_out += e,
            t.avail_out -= e,
            t.dstate.pending -= e,
            t.dstate.pending === 0 && (t.dstate.pending_out = 0))
        }
    };
    function Im(t) {
        let e = this
          , n = new to
          , i = bm(t && t.chunkSize ? t.chunkSize : 64 * 1024)
          , r = 0
          , a = new Uint8Array(i)
          , o = t ? t.level : -1;
        typeof o > "u" && (o = -1),
        n.deflateInit(o),
        n.next_out = a,
        e.append = function(l, u) {
            let d, h, g = 0, _ = 0, E = 0, T = [];
            if (l.length) {
                n.next_in_index = 0,
                n.next_in = l,
                n.avail_in = l.length;
                do {
                    if (n.next_out_index = 0,
                    n.avail_out = i,
                    d = n.deflate(r),
                    d != 0)
                        throw new Error("deflating: " + n.msg);
                    n.next_out_index && (n.next_out_index == i ? T.push(new Uint8Array(a)) : T.push(a.slice(0, n.next_out_index))),
                    E += n.next_out_index,
                    u && n.next_in_index > 0 && n.next_in_index != g && (u(n.next_in_index),
                    g = n.next_in_index)
                } while (n.avail_in > 0 || n.avail_out === 0);
                return T.length > 1 ? (h = new Uint8Array(E),
                T.forEach(function(w) {
                    h.set(w, _),
                    _ += w.length
                })) : h = T[0] || new Uint8Array(0),
                h
            }
        }
        ,
        e.flush = function() {
            let l, u, d = 0, h = 0, g = [];
            do {
                if (n.next_out_index = 0,
                n.avail_out = i,
                l = n.deflate(4),
                l != 1 && l != 0)
                    throw new Error("deflating: " + n.msg);
                i - n.avail_out > 0 && g.push(a.slice(0, n.next_out_index)),
                h += n.next_out_index
            } while (n.avail_in > 0 || n.avail_out === 0);
            return n.deflateEnd(),
            u = new Uint8Array(h),
            g.forEach(function(_) {
                u.set(_, d),
                d += _.length
            }),
            u
        }
    }
    function bm(t) {
        return t + 5 * (Math.floor(t / 16383) + 1)
    }
    var eo = Im;
    var Ot = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]
      , Io = 1440
      , Em = 0
      , jm = 4
      , Sm = 9
      , Rm = 5
      , km = [96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255]
      , Cm = [80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577]
      , Tm = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]
      , Am = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112]
      , Lm = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]
      , Om = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
      , he = 15;
    function Ji() {
        let t = this, e, n, i, r, a, o;
        function l(d, h, g, _, E, T, w, x, v, I, R) {
            let F, C, j, y, A, S, L, s, f, p, b, k, N, P, Z;
            p = 0,
            A = g;
            do
                i[d[h + p]]++,
                p++,
                A--;
            while (A !== 0);
            if (i[0] == g)
                return w[0] = -1,
                x[0] = 0,
                0;
            for (s = x[0],
            S = 1; S <= he && i[S] === 0; S++)
                ;
            for (L = S,
            s < S && (s = S),
            A = he; A !== 0 && i[A] === 0; A--)
                ;
            for (j = A,
            s > A && (s = A),
            x[0] = s,
            P = 1 << S; S < A; S++,
            P <<= 1)
                if ((P -= i[S]) < 0)
                    return -3;
            if ((P -= i[A]) < 0)
                return -3;
            for (i[A] += P,
            o[1] = S = 0,
            p = 1,
            N = 2; --A !== 0; )
                o[N] = S += i[p],
                N++,
                p++;
            A = 0,
            p = 0;
            do
                (S = d[h + p]) !== 0 && (R[o[S]++] = A),
                p++;
            while (++A < g);
            for (g = o[j],
            o[0] = A = 0,
            p = 0,
            y = -1,
            k = -s,
            a[0] = 0,
            b = 0,
            Z = 0; L <= j; L++)
                for (F = i[L]; F-- !== 0; ) {
                    for (; L > k + s; ) {
                        if (y++,
                        k += s,
                        Z = j - k,
                        Z = Z > s ? s : Z,
                        (C = 1 << (S = L - k)) > F + 1 && (C -= F + 1,
                        N = L,
                        S < Z))
                            for (; ++S < Z && !((C <<= 1) <= i[++N]); )
                                C -= i[N];
                        if (Z = 1 << S,
                        I[0] + Z > Io)
                            return -3;
                        a[y] = b = I[0],
                        I[0] += Z,
                        y !== 0 ? (o[y] = A,
                        r[0] = S,
                        r[1] = s,
                        S = A >>> k - s,
                        r[2] = b - a[y - 1] - S,
                        v.set(r, (a[y - 1] + S) * 3)) : w[0] = b
                    }
                    for (r[1] = L - k,
                    p >= g ? r[0] = 192 : R[p] < _ ? (r[0] = R[p] < 256 ? 0 : 96,
                    r[2] = R[p++]) : (r[0] = T[R[p] - _] + 16 + 64,
                    r[2] = E[R[p++] - _]),
                    C = 1 << L - k,
                    S = A >>> k; S < Z; S += C)
                        v.set(r, (b + S) * 3);
                    for (S = 1 << L - 1; A & S; S >>>= 1)
                        A ^= S;
                    for (A ^= S,
                    f = (1 << k) - 1; (A & f) != o[y]; )
                        y--,
                        k -= s,
                        f = (1 << k) - 1
                }
            return P !== 0 && j != 1 ? -5 : 0
        }
        function u(d) {
            let h;
            for (e || (e = [],
            n = [],
            i = new Int32Array(he + 1),
            r = [],
            a = new Int32Array(he),
            o = new Int32Array(he + 1)),
            n.length < d && (n = []),
            h = 0; h < d; h++)
                n[h] = 0;
            for (h = 0; h < he + 1; h++)
                i[h] = 0;
            for (h = 0; h < 3; h++)
                r[h] = 0;
            a.set(i.subarray(0, he), 0),
            o.set(i.subarray(0, he + 1), 0)
        }
        t.inflate_trees_bits = function(d, h, g, _, E) {
            let T;
            return u(19),
            e[0] = 0,
            T = l(d, 0, 19, 19, null, null, g, h, _, e, n),
            T == -3 ? E.msg = "oversubscribed dynamic bit lengths tree" : (T == -5 || h[0] === 0) && (E.msg = "incomplete dynamic bit lengths tree",
            T = -3),
            T
        }
        ,
        t.inflate_trees_dynamic = function(d, h, g, _, E, T, w, x, v) {
            let I;
            return u(288),
            e[0] = 0,
            I = l(g, 0, d, 257, Tm, Am, T, _, x, e, n),
            I != 0 || _[0] === 0 ? (I == -3 ? v.msg = "oversubscribed literal/length tree" : I != -4 && (v.msg = "incomplete literal/length tree",
            I = -3),
            I) : (u(288),
            I = l(g, d, h, 0, Lm, Om, w, E, x, e, n),
            I != 0 || E[0] === 0 && d > 257 ? (I == -3 ? v.msg = "oversubscribed distance tree" : I == -5 ? (v.msg = "incomplete distance tree",
            I = -3) : I != -4 && (v.msg = "empty distance tree with lengths",
            I = -3),
            I) : 0)
        }
    }
    Ji.inflate_trees_fixed = function(t, e, n, i) {
        return t[0] = Sm,
        e[0] = Rm,
        n[0] = km,
        i[0] = Cm,
        0
    }
    ;
    var Qn = 0
      , no = 1
      , io = 2
      , ro = 3
      , ao = 4
      , oo = 5
      , so = 6
      , Xi = 7
      , co = 8
      , ti = 9;
    function Fm() {
        let t = this, e, n = 0, i, r = 0, a = 0, o = 0, l = 0, u = 0, d = 0, h = 0, g, _ = 0, E, T = 0;
        function w(x, v, I, R, F, C, j, y) {
            let A, S, L, s, f, p, b, k, N, P, Z, Y, H, z, K, W;
            b = y.next_in_index,
            k = y.avail_in,
            f = j.bitb,
            p = j.bitk,
            N = j.write,
            P = N < j.read ? j.read - N - 1 : j.end - N,
            Z = Ot[x],
            Y = Ot[v];
            do {
                for (; p < 20; )
                    k--,
                    f |= (y.read_byte(b++) & 255) << p,
                    p += 8;
                if (A = f & Z,
                S = I,
                L = R,
                W = (L + A) * 3,
                (s = S[W]) === 0) {
                    f >>= S[W + 1],
                    p -= S[W + 1],
                    j.win[N++] = S[W + 2],
                    P--;
                    continue
                }
                do {
                    if (f >>= S[W + 1],
                    p -= S[W + 1],
                    s & 16) {
                        for (s &= 15,
                        H = S[W + 2] + (f & Ot[s]),
                        f >>= s,
                        p -= s; p < 15; )
                            k--,
                            f |= (y.read_byte(b++) & 255) << p,
                            p += 8;
                        A = f & Y,
                        S = F,
                        L = C,
                        W = (L + A) * 3,
                        s = S[W];
                        do
                            if (f >>= S[W + 1],
                            p -= S[W + 1],
                            s & 16) {
                                for (s &= 15; p < s; )
                                    k--,
                                    f |= (y.read_byte(b++) & 255) << p,
                                    p += 8;
                                if (z = S[W + 2] + (f & Ot[s]),
                                f >>= s,
                                p -= s,
                                P -= H,
                                N >= z)
                                    K = N - z,
                                    N - K > 0 && 2 > N - K ? (j.win[N++] = j.win[K++],
                                    j.win[N++] = j.win[K++],
                                    H -= 2) : (j.win.set(j.win.subarray(K, K + 2), N),
                                    N += 2,
                                    K += 2,
                                    H -= 2);
                                else {
                                    K = N - z;
                                    do
                                        K += j.end;
                                    while (K < 0);
                                    if (s = j.end - K,
                                    H > s) {
                                        if (H -= s,
                                        N - K > 0 && s > N - K)
                                            do
                                                j.win[N++] = j.win[K++];
                                            while (--s !== 0);
                                        else
                                            j.win.set(j.win.subarray(K, K + s), N),
                                            N += s,
                                            K += s,
                                            s = 0;
                                        K = 0
                                    }
                                }
                                if (N - K > 0 && H > N - K)
                                    do
                                        j.win[N++] = j.win[K++];
                                    while (--H !== 0);
                                else
                                    j.win.set(j.win.subarray(K, K + H), N),
                                    N += H,
                                    K += H,
                                    H = 0;
                                break
                            } else if (!(s & 64))
                                A += S[W + 2],
                                A += f & Ot[s],
                                W = (L + A) * 3,
                                s = S[W];
                            else
                                return y.msg = "invalid distance code",
                                H = y.avail_in - k,
                                H = p >> 3 < H ? p >> 3 : H,
                                k += H,
                                b -= H,
                                p -= H << 3,
                                j.bitb = f,
                                j.bitk = p,
                                y.avail_in = k,
                                y.total_in += b - y.next_in_index,
                                y.next_in_index = b,
                                j.write = N,
                                -3;
                        while (!0);
                        break
                    }
                    if (s & 64)
                        return s & 32 ? (H = y.avail_in - k,
                        H = p >> 3 < H ? p >> 3 : H,
                        k += H,
                        b -= H,
                        p -= H << 3,
                        j.bitb = f,
                        j.bitk = p,
                        y.avail_in = k,
                        y.total_in += b - y.next_in_index,
                        y.next_in_index = b,
                        j.write = N,
                        1) : (y.msg = "invalid literal/length code",
                        H = y.avail_in - k,
                        H = p >> 3 < H ? p >> 3 : H,
                        k += H,
                        b -= H,
                        p -= H << 3,
                        j.bitb = f,
                        j.bitk = p,
                        y.avail_in = k,
                        y.total_in += b - y.next_in_index,
                        y.next_in_index = b,
                        j.write = N,
                        -3);
                    if (A += S[W + 2],
                    A += f & Ot[s],
                    W = (L + A) * 3,
                    (s = S[W]) === 0) {
                        f >>= S[W + 1],
                        p -= S[W + 1],
                        j.win[N++] = S[W + 2],
                        P--;
                        break
                    }
                } while (!0)
            } while (P >= 258 && k >= 10);
            return H = y.avail_in - k,
            H = p >> 3 < H ? p >> 3 : H,
            k += H,
            b -= H,
            p -= H << 3,
            j.bitb = f,
            j.bitk = p,
            y.avail_in = k,
            y.total_in += b - y.next_in_index,
            y.next_in_index = b,
            j.write = N,
            0
        }
        t.init = function(x, v, I, R, F, C) {
            e = Qn,
            d = x,
            h = v,
            g = I,
            _ = R,
            E = F,
            T = C,
            i = null
        }
        ,
        t.proc = function(x, v, I) {
            let R, F, C, j = 0, y = 0, A = 0, S, L, s, f;
            for (A = v.next_in_index,
            S = v.avail_in,
            j = x.bitb,
            y = x.bitk,
            L = x.write,
            s = L < x.read ? x.read - L - 1 : x.end - L; ; )
                switch (e) {
                case Qn:
                    if (s >= 258 && S >= 10 && (x.bitb = j,
                    x.bitk = y,
                    v.avail_in = S,
                    v.total_in += A - v.next_in_index,
                    v.next_in_index = A,
                    x.write = L,
                    I = w(d, h, g, _, E, T, x, v),
                    A = v.next_in_index,
                    S = v.avail_in,
                    j = x.bitb,
                    y = x.bitk,
                    L = x.write,
                    s = L < x.read ? x.read - L - 1 : x.end - L,
                    I != 0)) {
                        e = I == 1 ? Xi : ti;
                        break
                    }
                    a = d,
                    i = g,
                    r = _,
                    e = no;
                case no:
                    for (R = a; y < R; ) {
                        if (S !== 0)
                            I = 0;
                        else
                            return x.bitb = j,
                            x.bitk = y,
                            v.avail_in = S,
                            v.total_in += A - v.next_in_index,
                            v.next_in_index = A,
                            x.write = L,
                            x.inflate_flush(v, I);
                        S--,
                        j |= (v.read_byte(A++) & 255) << y,
                        y += 8
                    }
                    if (F = (r + (j & Ot[R])) * 3,
                    j >>>= i[F + 1],
                    y -= i[F + 1],
                    C = i[F],
                    C === 0) {
                        o = i[F + 2],
                        e = so;
                        break
                    }
                    if (C & 16) {
                        l = C & 15,
                        n = i[F + 2],
                        e = io;
                        break
                    }
                    if (!(C & 64)) {
                        a = C,
                        r = F / 3 + i[F + 2];
                        break
                    }
                    if (C & 32) {
                        e = Xi;
                        break
                    }
                    return e = ti,
                    v.msg = "invalid literal/length code",
                    I = -3,
                    x.bitb = j,
                    x.bitk = y,
                    v.avail_in = S,
                    v.total_in += A - v.next_in_index,
                    v.next_in_index = A,
                    x.write = L,
                    x.inflate_flush(v, I);
                case io:
                    for (R = l; y < R; ) {
                        if (S !== 0)
                            I = 0;
                        else
                            return x.bitb = j,
                            x.bitk = y,
                            v.avail_in = S,
                            v.total_in += A - v.next_in_index,
                            v.next_in_index = A,
                            x.write = L,
                            x.inflate_flush(v, I);
                        S--,
                        j |= (v.read_byte(A++) & 255) << y,
                        y += 8
                    }
                    n += j & Ot[R],
                    j >>= R,
                    y -= R,
                    a = h,
                    i = E,
                    r = T,
                    e = ro;
                case ro:
                    for (R = a; y < R; ) {
                        if (S !== 0)
                            I = 0;
                        else
                            return x.bitb = j,
                            x.bitk = y,
                            v.avail_in = S,
                            v.total_in += A - v.next_in_index,
                            v.next_in_index = A,
                            x.write = L,
                            x.inflate_flush(v, I);
                        S--,
                        j |= (v.read_byte(A++) & 255) << y,
                        y += 8
                    }
                    if (F = (r + (j & Ot[R])) * 3,
                    j >>= i[F + 1],
                    y -= i[F + 1],
                    C = i[F],
                    C & 16) {
                        l = C & 15,
                        u = i[F + 2],
                        e = ao;
                        break
                    }
                    if (!(C & 64)) {
                        a = C,
                        r = F / 3 + i[F + 2];
                        break
                    }
                    return e = ti,
                    v.msg = "invalid distance code",
                    I = -3,
                    x.bitb = j,
                    x.bitk = y,
                    v.avail_in = S,
                    v.total_in += A - v.next_in_index,
                    v.next_in_index = A,
                    x.write = L,
                    x.inflate_flush(v, I);
                case ao:
                    for (R = l; y < R; ) {
                        if (S !== 0)
                            I = 0;
                        else
                            return x.bitb = j,
                            x.bitk = y,
                            v.avail_in = S,
                            v.total_in += A - v.next_in_index,
                            v.next_in_index = A,
                            x.write = L,
                            x.inflate_flush(v, I);
                        S--,
                        j |= (v.read_byte(A++) & 255) << y,
                        y += 8
                    }
                    u += j & Ot[R],
                    j >>= R,
                    y -= R,
                    e = oo;
                case oo:
                    for (f = L - u; f < 0; )
                        f += x.end;
                    for (; n !== 0; ) {
                        if (s === 0 && (L == x.end && x.read !== 0 && (L = 0,
                        s = L < x.read ? x.read - L - 1 : x.end - L),
                        s === 0 && (x.write = L,
                        I = x.inflate_flush(v, I),
                        L = x.write,
                        s = L < x.read ? x.read - L - 1 : x.end - L,
                        L == x.end && x.read !== 0 && (L = 0,
                        s = L < x.read ? x.read - L - 1 : x.end - L),
                        s === 0)))
                            return x.bitb = j,
                            x.bitk = y,
                            v.avail_in = S,
                            v.total_in += A - v.next_in_index,
                            v.next_in_index = A,
                            x.write = L,
                            x.inflate_flush(v, I);
                        x.win[L++] = x.win[f++],
                        s--,
                        f == x.end && (f = 0),
                        n--
                    }
                    e = Qn;
                    break;
                case so:
                    if (s === 0 && (L == x.end && x.read !== 0 && (L = 0,
                    s = L < x.read ? x.read - L - 1 : x.end - L),
                    s === 0 && (x.write = L,
                    I = x.inflate_flush(v, I),
                    L = x.write,
                    s = L < x.read ? x.read - L - 1 : x.end - L,
                    L == x.end && x.read !== 0 && (L = 0,
                    s = L < x.read ? x.read - L - 1 : x.end - L),
                    s === 0)))
                        return x.bitb = j,
                        x.bitk = y,
                        v.avail_in = S,
                        v.total_in += A - v.next_in_index,
                        v.next_in_index = A,
                        x.write = L,
                        x.inflate_flush(v, I);
                    I = 0,
                    x.win[L++] = o,
                    s--,
                    e = Qn;
                    break;
                case Xi:
                    if (y > 7 && (y -= 8,
                    S++,
                    A--),
                    x.write = L,
                    I = x.inflate_flush(v, I),
                    L = x.write,
                    s = L < x.read ? x.read - L - 1 : x.end - L,
                    x.read != x.write)
                        return x.bitb = j,
                        x.bitk = y,
                        v.avail_in = S,
                        v.total_in += A - v.next_in_index,
                        v.next_in_index = A,
                        x.write = L,
                        x.inflate_flush(v, I);
                    e = co;
                case co:
                    return I = 1,
                    x.bitb = j,
                    x.bitk = y,
                    v.avail_in = S,
                    v.total_in += A - v.next_in_index,
                    v.next_in_index = A,
                    x.write = L,
                    x.inflate_flush(v, I);
                case ti:
                    return I = -3,
                    x.bitb = j,
                    x.bitk = y,
                    v.avail_in = S,
                    v.total_in += A - v.next_in_index,
                    v.next_in_index = A,
                    x.write = L,
                    x.inflate_flush(v, I);
                default:
                    return I = -2,
                    x.bitb = j,
                    x.bitk = y,
                    v.avail_in = S,
                    v.total_in += A - v.next_in_index,
                    v.next_in_index = A,
                    x.write = L,
                    x.inflate_flush(v, I)
                }
        }
        ,
        t.free = function() {}
    }
    var lo = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
      , Xe = 0
      , zi = 1
      , uo = 2
      , fo = 3
      , mo = 4
      , ho = 5
      , ei = 6
      , ni = 7
      , po = 8
      , Te = 9;
    function Dm(t, e) {
        let n = this, i = Xe, r = 0, a = 0, o = 0, l, u = [0], d = [0], h = new Fm, g = 0, _ = new Int32Array(Io * 3), E = 0, T = new Ji;
        n.bitk = 0,
        n.bitb = 0,
        n.win = new Uint8Array(e),
        n.end = e,
        n.read = 0,
        n.write = 0,
        n.reset = function(w, x) {
            x && (x[0] = E),
            i == ei && h.free(w),
            i = Xe,
            n.bitk = 0,
            n.bitb = 0,
            n.read = n.write = 0
        }
        ,
        n.reset(t, null),
        n.inflate_flush = function(w, x) {
            let v, I, R;
            return I = w.next_out_index,
            R = n.read,
            v = (R <= n.write ? n.write : n.end) - R,
            v > w.avail_out && (v = w.avail_out),
            v !== 0 && x == -5 && (x = 0),
            w.avail_out -= v,
            w.total_out += v,
            w.next_out.set(n.win.subarray(R, R + v), I),
            I += v,
            R += v,
            R == n.end && (R = 0,
            n.write == n.end && (n.write = 0),
            v = n.write - R,
            v > w.avail_out && (v = w.avail_out),
            v !== 0 && x == -5 && (x = 0),
            w.avail_out -= v,
            w.total_out += v,
            w.next_out.set(n.win.subarray(R, R + v), I),
            I += v,
            R += v),
            w.next_out_index = I,
            n.read = R,
            x
        }
        ,
        n.proc = function(w, x) {
            let v, I, R, F, C, j, y, A;
            for (F = w.next_in_index,
            C = w.avail_in,
            I = n.bitb,
            R = n.bitk,
            j = n.write,
            y = j < n.read ? n.read - j - 1 : n.end - j; ; ) {
                let S, L, s, f, p, b, k, N;
                switch (i) {
                case Xe:
                    for (; R < 3; ) {
                        if (C !== 0)
                            x = 0;
                        else
                            return n.bitb = I,
                            n.bitk = R,
                            w.avail_in = C,
                            w.total_in += F - w.next_in_index,
                            w.next_in_index = F,
                            n.write = j,
                            n.inflate_flush(w, x);
                        C--,
                        I |= (w.read_byte(F++) & 255) << R,
                        R += 8
                    }
                    switch (v = I & 7,
                    g = v & 1,
                    v >>> 1) {
                    case 0:
                        I >>>= 3,
                        R -= 3,
                        v = R & 7,
                        I >>>= v,
                        R -= v,
                        i = zi;
                        break;
                    case 1:
                        S = [],
                        L = [],
                        s = [[]],
                        f = [[]],
                        Ji.inflate_trees_fixed(S, L, s, f),
                        h.init(S[0], L[0], s[0], 0, f[0], 0),
                        I >>>= 3,
                        R -= 3,
                        i = ei;
                        break;
                    case 2:
                        I >>>= 3,
                        R -= 3,
                        i = fo;
                        break;
                    case 3:
                        return I >>>= 3,
                        R -= 3,
                        i = Te,
                        w.msg = "invalid block type",
                        x = -3,
                        n.bitb = I,
                        n.bitk = R,
                        w.avail_in = C,
                        w.total_in += F - w.next_in_index,
                        w.next_in_index = F,
                        n.write = j,
                        n.inflate_flush(w, x)
                    }
                    break;
                case zi:
                    for (; R < 32; ) {
                        if (C !== 0)
                            x = 0;
                        else
                            return n.bitb = I,
                            n.bitk = R,
                            w.avail_in = C,
                            w.total_in += F - w.next_in_index,
                            w.next_in_index = F,
                            n.write = j,
                            n.inflate_flush(w, x);
                        C--,
                        I |= (w.read_byte(F++) & 255) << R,
                        R += 8
                    }
                    if ((~I >>> 16 & 65535) != (I & 65535))
                        return i = Te,
                        w.msg = "invalid stored block lengths",
                        x = -3,
                        n.bitb = I,
                        n.bitk = R,
                        w.avail_in = C,
                        w.total_in += F - w.next_in_index,
                        w.next_in_index = F,
                        n.write = j,
                        n.inflate_flush(w, x);
                    r = I & 65535,
                    I = R = 0,
                    i = r !== 0 ? uo : g !== 0 ? ni : Xe;
                    break;
                case uo:
                    if (C === 0 || y === 0 && (j == n.end && n.read !== 0 && (j = 0,
                    y = j < n.read ? n.read - j - 1 : n.end - j),
                    y === 0 && (n.write = j,
                    x = n.inflate_flush(w, x),
                    j = n.write,
                    y = j < n.read ? n.read - j - 1 : n.end - j,
                    j == n.end && n.read !== 0 && (j = 0,
                    y = j < n.read ? n.read - j - 1 : n.end - j),
                    y === 0)))
                        return n.bitb = I,
                        n.bitk = R,
                        w.avail_in = C,
                        w.total_in += F - w.next_in_index,
                        w.next_in_index = F,
                        n.write = j,
                        n.inflate_flush(w, x);
                    if (x = 0,
                    v = r,
                    v > C && (v = C),
                    v > y && (v = y),
                    n.win.set(w.read_buf(F, v), j),
                    F += v,
                    C -= v,
                    j += v,
                    y -= v,
                    (r -= v) !== 0)
                        break;
                    i = g !== 0 ? ni : Xe;
                    break;
                case fo:
                    for (; R < 14; ) {
                        if (C !== 0)
                            x = 0;
                        else
                            return n.bitb = I,
                            n.bitk = R,
                            w.avail_in = C,
                            w.total_in += F - w.next_in_index,
                            w.next_in_index = F,
                            n.write = j,
                            n.inflate_flush(w, x);
                        C--,
                        I |= (w.read_byte(F++) & 255) << R,
                        R += 8
                    }
                    if (a = v = I & 16383,
                    (v & 31) > 29 || (v >> 5 & 31) > 29)
                        return i = Te,
                        w.msg = "too many length or distance symbols",
                        x = -3,
                        n.bitb = I,
                        n.bitk = R,
                        w.avail_in = C,
                        w.total_in += F - w.next_in_index,
                        w.next_in_index = F,
                        n.write = j,
                        n.inflate_flush(w, x);
                    if (v = 258 + (v & 31) + (v >> 5 & 31),
                    !l || l.length < v)
                        l = [];
                    else
                        for (A = 0; A < v; A++)
                            l[A] = 0;
                    I >>>= 14,
                    R -= 14,
                    o = 0,
                    i = mo;
                case mo:
                    for (; o < 4 + (a >>> 10); ) {
                        for (; R < 3; ) {
                            if (C !== 0)
                                x = 0;
                            else
                                return n.bitb = I,
                                n.bitk = R,
                                w.avail_in = C,
                                w.total_in += F - w.next_in_index,
                                w.next_in_index = F,
                                n.write = j,
                                n.inflate_flush(w, x);
                            C--,
                            I |= (w.read_byte(F++) & 255) << R,
                            R += 8
                        }
                        l[lo[o++]] = I & 7,
                        I >>>= 3,
                        R -= 3
                    }
                    for (; o < 19; )
                        l[lo[o++]] = 0;
                    if (u[0] = 7,
                    v = T.inflate_trees_bits(l, u, d, _, w),
                    v != 0)
                        return x = v,
                        x == -3 && (l = null,
                        i = Te),
                        n.bitb = I,
                        n.bitk = R,
                        w.avail_in = C,
                        w.total_in += F - w.next_in_index,
                        w.next_in_index = F,
                        n.write = j,
                        n.inflate_flush(w, x);
                    o = 0,
                    i = ho;
                case ho:
                    for (; v = a,
                    !(o >= 258 + (v & 31) + (v >> 5 & 31)); ) {
                        let P, Z;
                        for (v = u[0]; R < v; ) {
                            if (C !== 0)
                                x = 0;
                            else
                                return n.bitb = I,
                                n.bitk = R,
                                w.avail_in = C,
                                w.total_in += F - w.next_in_index,
                                w.next_in_index = F,
                                n.write = j,
                                n.inflate_flush(w, x);
                            C--,
                            I |= (w.read_byte(F++) & 255) << R,
                            R += 8
                        }
                        if (v = _[(d[0] + (I & Ot[v])) * 3 + 1],
                        Z = _[(d[0] + (I & Ot[v])) * 3 + 2],
                        Z < 16)
                            I >>>= v,
                            R -= v,
                            l[o++] = Z;
                        else {
                            for (A = Z == 18 ? 7 : Z - 14,
                            P = Z == 18 ? 11 : 3; R < v + A; ) {
                                if (C !== 0)
                                    x = 0;
                                else
                                    return n.bitb = I,
                                    n.bitk = R,
                                    w.avail_in = C,
                                    w.total_in += F - w.next_in_index,
                                    w.next_in_index = F,
                                    n.write = j,
                                    n.inflate_flush(w, x);
                                C--,
                                I |= (w.read_byte(F++) & 255) << R,
                                R += 8
                            }
                            if (I >>>= v,
                            R -= v,
                            P += I & Ot[A],
                            I >>>= A,
                            R -= A,
                            A = o,
                            v = a,
                            A + P > 258 + (v & 31) + (v >> 5 & 31) || Z == 16 && A < 1)
                                return l = null,
                                i = Te,
                                w.msg = "invalid bit length repeat",
                                x = -3,
                                n.bitb = I,
                                n.bitk = R,
                                w.avail_in = C,
                                w.total_in += F - w.next_in_index,
                                w.next_in_index = F,
                                n.write = j,
                                n.inflate_flush(w, x);
                            Z = Z == 16 ? l[A - 1] : 0;
                            do
                                l[A++] = Z;
                            while (--P !== 0);
                            o = A
                        }
                    }
                    if (d[0] = -1,
                    p = [],
                    b = [],
                    k = [],
                    N = [],
                    p[0] = 9,
                    b[0] = 6,
                    v = a,
                    v = T.inflate_trees_dynamic(257 + (v & 31), 1 + (v >> 5 & 31), l, p, b, k, N, _, w),
                    v != 0)
                        return v == -3 && (l = null,
                        i = Te),
                        x = v,
                        n.bitb = I,
                        n.bitk = R,
                        w.avail_in = C,
                        w.total_in += F - w.next_in_index,
                        w.next_in_index = F,
                        n.write = j,
                        n.inflate_flush(w, x);
                    h.init(p[0], b[0], _, k[0], _, N[0]),
                    i = ei;
                case ei:
                    if (n.bitb = I,
                    n.bitk = R,
                    w.avail_in = C,
                    w.total_in += F - w.next_in_index,
                    w.next_in_index = F,
                    n.write = j,
                    (x = h.proc(n, w, x)) != 1)
                        return n.inflate_flush(w, x);
                    if (x = 0,
                    h.free(w),
                    F = w.next_in_index,
                    C = w.avail_in,
                    I = n.bitb,
                    R = n.bitk,
                    j = n.write,
                    y = j < n.read ? n.read - j - 1 : n.end - j,
                    g === 0) {
                        i = Xe;
                        break
                    }
                    i = ni;
                case ni:
                    if (n.write = j,
                    x = n.inflate_flush(w, x),
                    j = n.write,
                    y = j < n.read ? n.read - j - 1 : n.end - j,
                    n.read != n.write)
                        return n.bitb = I,
                        n.bitk = R,
                        w.avail_in = C,
                        w.total_in += F - w.next_in_index,
                        w.next_in_index = F,
                        n.write = j,
                        n.inflate_flush(w, x);
                    i = po;
                case po:
                    return x = 1,
                    n.bitb = I,
                    n.bitk = R,
                    w.avail_in = C,
                    w.total_in += F - w.next_in_index,
                    w.next_in_index = F,
                    n.write = j,
                    n.inflate_flush(w, x);
                case Te:
                    return x = -3,
                    n.bitb = I,
                    n.bitk = R,
                    w.avail_in = C,
                    w.total_in += F - w.next_in_index,
                    w.next_in_index = F,
                    n.write = j,
                    n.inflate_flush(w, x);
                default:
                    return x = -2,
                    n.bitb = I,
                    n.bitk = R,
                    w.avail_in = C,
                    w.total_in += F - w.next_in_index,
                    w.next_in_index = F,
                    n.write = j,
                    n.inflate_flush(w, x)
                }
            }
        }
        ,
        n.free = function(w) {
            n.reset(w, null),
            n.win = null,
            _ = null
        }
        ,
        n.set_dictionary = function(w, x, v) {
            n.win.set(w.subarray(x, x + v), 0),
            n.read = n.write = v
        }
        ,
        n.sync_point = function() {
            return i == zi ? 1 : 0
        }
    }
    var Nm = 32
      , Mm = 8
      , Bm = 0
      , go = 1
      , vo = 2
      , xo = 3
      , _o = 4
      , wo = 5
      , Wi = 6
      , xn = 7
      , yo = 12
      , pe = 13
      , Vm = [0, 0, 255, 255];
    function Um() {
        let t = this;
        t.mode = 0,
        t.method = 0,
        t.was = [0],
        t.need = 0,
        t.marker = 0,
        t.wbits = 0;
        function e(n) {
            return !n || !n.istate ? -2 : (n.total_in = n.total_out = 0,
            n.msg = null,
            n.istate.mode = xn,
            n.istate.blocks.reset(n, null),
            0)
        }
        t.inflateEnd = function(n) {
            return t.blocks && t.blocks.free(n),
            t.blocks = null,
            0
        }
        ,
        t.inflateInit = function(n, i) {
            return n.msg = null,
            t.blocks = null,
            i < 8 || i > 15 ? (t.inflateEnd(n),
            -2) : (t.wbits = i,
            n.istate.blocks = new Dm(n,1 << i),
            e(n),
            0)
        }
        ,
        t.inflate = function(n, i) {
            let r, a;
            if (!n || !n.istate || !n.next_in)
                return -2;
            let o = n.istate;
            for (i = i == jm ? -5 : 0,
            r = -5; ; )
                switch (o.mode) {
                case Bm:
                    if (n.avail_in === 0)
                        return r;
                    if (r = i,
                    n.avail_in--,
                    n.total_in++,
                    ((o.method = n.read_byte(n.next_in_index++)) & 15) != Mm) {
                        o.mode = pe,
                        n.msg = "unknown compression method",
                        o.marker = 5;
                        break
                    }
                    if ((o.method >> 4) + 8 > o.wbits) {
                        o.mode = pe,
                        n.msg = "invalid win size",
                        o.marker = 5;
                        break
                    }
                    o.mode = go;
                case go:
                    if (n.avail_in === 0)
                        return r;
                    if (r = i,
                    n.avail_in--,
                    n.total_in++,
                    a = n.read_byte(n.next_in_index++) & 255,
                    ((o.method << 8) + a) % 31 !== 0) {
                        o.mode = pe,
                        n.msg = "incorrect header check",
                        o.marker = 5;
                        break
                    }
                    if (!(a & Nm)) {
                        o.mode = xn;
                        break
                    }
                    o.mode = vo;
                case vo:
                    if (n.avail_in === 0)
                        return r;
                    r = i,
                    n.avail_in--,
                    n.total_in++,
                    o.need = (n.read_byte(n.next_in_index++) & 255) << 24 & 4278190080,
                    o.mode = xo;
                case xo:
                    if (n.avail_in === 0)
                        return r;
                    r = i,
                    n.avail_in--,
                    n.total_in++,
                    o.need += (n.read_byte(n.next_in_index++) & 255) << 16 & 16711680,
                    o.mode = _o;
                case _o:
                    if (n.avail_in === 0)
                        return r;
                    r = i,
                    n.avail_in--,
                    n.total_in++,
                    o.need += (n.read_byte(n.next_in_index++) & 255) << 8 & 65280,
                    o.mode = wo;
                case wo:
                    return n.avail_in === 0 ? r : (r = i,
                    n.avail_in--,
                    n.total_in++,
                    o.need += n.read_byte(n.next_in_index++) & 255,
                    o.mode = Wi,
                    2);
                case Wi:
                    return o.mode = pe,
                    n.msg = "need dictionary",
                    o.marker = 0,
                    -2;
                case xn:
                    if (r = o.blocks.proc(n, r),
                    r == -3) {
                        o.mode = pe,
                        o.marker = 0;
                        break
                    }
                    if (r == 0 && (r = i),
                    r != 1)
                        return r;
                    r = i,
                    o.blocks.reset(n, o.was),
                    o.mode = yo;
                case yo:
                    return n.avail_in = 0,
                    1;
                case pe:
                    return -3;
                default:
                    return -2
                }
        }
        ,
        t.inflateSetDictionary = function(n, i, r) {
            let a = 0
              , o = r;
            if (!n || !n.istate || n.istate.mode != Wi)
                return -2;
            let l = n.istate;
            return o >= 1 << l.wbits && (o = (1 << l.wbits) - 1,
            a = r - o),
            l.blocks.set_dictionary(i, a, o),
            l.mode = xn,
            0
        }
        ,
        t.inflateSync = function(n) {
            let i, r, a, o, l;
            if (!n || !n.istate)
                return -2;
            let u = n.istate;
            if (u.mode != pe && (u.mode = pe,
            u.marker = 0),
            (i = n.avail_in) === 0)
                return -5;
            for (r = n.next_in_index,
            a = u.marker; i !== 0 && a < 4; )
                n.read_byte(r) == Vm[a] ? a++ : n.read_byte(r) !== 0 ? a = 0 : a = 4 - a,
                r++,
                i--;
            return n.total_in += r - n.next_in_index,
            n.next_in_index = r,
            n.avail_in = i,
            u.marker = a,
            a != 4 ? -3 : (o = n.total_in,
            l = n.total_out,
            e(n),
            n.total_in = o,
            n.total_out = l,
            u.mode = xn,
            0)
        }
        ,
        t.inflateSyncPoint = function(n) {
            return !n || !n.istate || !n.istate.blocks ? -2 : n.istate.blocks.sync_point()
        }
    }
    function bo() {}
    bo.prototype = {
        inflateInit: function(t) {
            let e = this;
            return e.istate = new Um,
            t || (t = 15),
            e.istate.inflateInit(e, t)
        },
        inflate: function(t) {
            let e = this;
            return e.istate ? e.istate.inflate(e, t) : -2
        },
        inflateEnd: function() {
            let t = this;
            if (!t.istate)
                return -2;
            let e = t.istate.inflateEnd(t);
            return t.istate = null,
            e
        },
        inflateSync: function() {
            let t = this;
            return t.istate ? t.istate.inflateSync(t) : -2
        },
        inflateSetDictionary: function(t, e) {
            let n = this;
            return n.istate ? n.istate.inflateSetDictionary(n, t, e) : -2
        },
        read_byte: function(t) {
            return this.next_in[t]
        },
        read_buf: function(t, e) {
            return this.next_in.subarray(t, t + e)
        }
    };
    function Pm(t) {
        let e = this
          , n = new bo
          , i = t && t.chunkSize ? Math.floor(t.chunkSize * 2) : 128 * 1024
          , r = Em
          , a = new Uint8Array(i)
          , o = !1;
        n.inflateInit(),
        n.next_out = a,
        e.append = function(l, u) {
            let d = [], h, g, _ = 0, E = 0, T = 0;
            if (l.length !== 0) {
                n.next_in_index = 0,
                n.next_in = l,
                n.avail_in = l.length;
                do {
                    if (n.next_out_index = 0,
                    n.avail_out = i,
                    n.avail_in === 0 && !o && (n.next_in_index = 0,
                    o = !0),
                    h = n.inflate(r),
                    o && h === -5) {
                        if (n.avail_in !== 0)
                            throw new Error("inflating: bad input")
                    } else if (h !== 0 && h !== 1)
                        throw new Error("inflating: " + n.msg);
                    if ((o || h === 1) && n.avail_in === l.length)
                        throw new Error("inflating: bad input");
                    n.next_out_index && (n.next_out_index === i ? d.push(new Uint8Array(a)) : d.push(a.slice(0, n.next_out_index))),
                    T += n.next_out_index,
                    u && n.next_in_index > 0 && n.next_in_index != _ && (u(n.next_in_index),
                    _ = n.next_in_index)
                } while (n.avail_in > 0 || n.avail_out === 0);
                return d.length > 1 ? (g = new Uint8Array(T),
                d.forEach(function(w) {
                    g.set(w, E),
                    E += w.length
                })) : g = d[0] || new Uint8Array(0),
                g
            }
        }
        ,
        e.flush = function() {
            n.inflateEnd()
        }
    }
    var Eo = Pm;
    var Zm = {
        chunkSize: 524288,
        maxWorkers: typeof navigator < "u" && navigator.hardwareConcurrency || 2,
        terminateWorkerTimeout: 5e3,
        useWebWorkers: !0,
        workerScripts: void 0
    }
      , kt = Object.assign({}, Zm);
    function Qi() {
        return kt
    }
    function ze(t) {
        if (t.baseURL !== void 0 && (kt.baseURL = t.baseURL),
        t.chunkSize !== void 0 && (kt.chunkSize = t.chunkSize),
        t.maxWorkers !== void 0 && (kt.maxWorkers = t.maxWorkers),
        t.terminateWorkerTimeout !== void 0 && (kt.terminateWorkerTimeout = t.terminateWorkerTimeout),
        t.useWebWorkers !== void 0 && (kt.useWebWorkers = t.useWebWorkers),
        t.Deflate !== void 0 && (kt.Deflate = t.Deflate),
        t.Inflate !== void 0 && (kt.Inflate = t.Inflate),
        t.workerScripts !== void 0) {
            if (t.workerScripts.deflate) {
                if (!Array.isArray(t.workerScripts.deflate))
                    throw new Error("workerScripts.deflate must be an array");
                kt.workerScripts || (kt.workerScripts = {}),
                kt.workerScripts.deflate = t.workerScripts.deflate
            }
            if (t.workerScripts.inflate) {
                if (!Array.isArray(t.workerScripts.inflate))
                    throw new Error("workerScripts.inflate must be an array");
                kt.workerScripts || (kt.workerScripts = {}),
                kt.workerScripts.inflate = t.workerScripts.inflate
            }
        }
    }
    var _n = {
        application: {
            "andrew-inset": "ez",
            annodex: "anx",
            "atom+xml": "atom",
            "atomcat+xml": "atomcat",
            "atomserv+xml": "atomsrv",
            bbolin: "lin",
            cap: ["cap", "pcap"],
            "cu-seeme": "cu",
            "davmount+xml": "davmount",
            dsptype: "tsp",
            ecmascript: ["es", "ecma"],
            futuresplash: "spl",
            hta: "hta",
            "java-archive": "jar",
            "java-serialized-object": "ser",
            "java-vm": "class",
            javascript: "js",
            m3g: "m3g",
            "mac-binhex40": "hqx",
            mathematica: ["nb", "ma", "mb"],
            msaccess: "mdb",
            msword: ["doc", "dot"],
            mxf: "mxf",
            oda: "oda",
            ogg: "ogx",
            pdf: "pdf",
            "pgp-keys": "key",
            "pgp-signature": ["asc", "sig"],
            "pics-rules": "prf",
            postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
            rar: "rar",
            "rdf+xml": "rdf",
            "rss+xml": "rss",
            rtf: "rtf",
            smil: ["smi", "smil"],
            "xhtml+xml": ["xhtml", "xht"],
            xml: ["xml", "xsl", "xsd"],
            "xspf+xml": "xspf",
            zip: "zip",
            "vnd.android.package-archive": "apk",
            "vnd.cinderella": "cdy",
            "vnd.google-earth.kml+xml": "kml",
            "vnd.google-earth.kmz": "kmz",
            "vnd.mozilla.xul+xml": "xul",
            "vnd.ms-excel": ["xls", "xlb", "xlt", "xlm", "xla", "xlc", "xlw"],
            "vnd.ms-pki.seccat": "cat",
            "vnd.ms-pki.stl": "stl",
            "vnd.ms-powerpoint": ["ppt", "pps", "pot"],
            "vnd.oasis.opendocument.chart": "odc",
            "vnd.oasis.opendocument.database": "odb",
            "vnd.oasis.opendocument.formula": "odf",
            "vnd.oasis.opendocument.graphics": "odg",
            "vnd.oasis.opendocument.graphics-template": "otg",
            "vnd.oasis.opendocument.image": "odi",
            "vnd.oasis.opendocument.presentation": "odp",
            "vnd.oasis.opendocument.presentation-template": "otp",
            "vnd.oasis.opendocument.spreadsheet": "ods",
            "vnd.oasis.opendocument.spreadsheet-template": "ots",
            "vnd.oasis.opendocument.text": "odt",
            "vnd.oasis.opendocument.text-master": "odm",
            "vnd.oasis.opendocument.text-template": "ott",
            "vnd.oasis.opendocument.text-web": "oth",
            "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
            "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
            "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
            "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
            "vnd.openxmlformats-officedocument.presentationml.template": "potx",
            "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
            "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
            "vnd.smaf": "mmf",
            "vnd.stardivision.calc": "sdc",
            "vnd.stardivision.chart": "sds",
            "vnd.stardivision.draw": "sda",
            "vnd.stardivision.impress": "sdd",
            "vnd.stardivision.math": ["sdf", "smf"],
            "vnd.stardivision.writer": ["sdw", "vor"],
            "vnd.stardivision.writer-global": "sgl",
            "vnd.sun.xml.calc": "sxc",
            "vnd.sun.xml.calc.template": "stc",
            "vnd.sun.xml.draw": "sxd",
            "vnd.sun.xml.draw.template": "std",
            "vnd.sun.xml.impress": "sxi",
            "vnd.sun.xml.impress.template": "sti",
            "vnd.sun.xml.math": "sxm",
            "vnd.sun.xml.writer": "sxw",
            "vnd.sun.xml.writer.global": "sxg",
            "vnd.sun.xml.writer.template": "stw",
            "vnd.symbian.install": ["sis", "sisx"],
            "vnd.visio": ["vsd", "vst", "vss", "vsw"],
            "vnd.wap.wbxml": "wbxml",
            "vnd.wap.wmlc": "wmlc",
            "vnd.wap.wmlscriptc": "wmlsc",
            "vnd.wordperfect": "wpd",
            "vnd.wordperfect5.1": "wp5",
            "x-123": "wk",
            "x-7z-compressed": "7z",
            "x-abiword": "abw",
            "x-apple-diskimage": "dmg",
            "x-bcpio": "bcpio",
            "x-bittorrent": "torrent",
            "x-cbr": ["cbr", "cba", "cbt", "cb7"],
            "x-cbz": "cbz",
            "x-cdf": ["cdf", "cda"],
            "x-cdlink": "vcd",
            "x-chess-pgn": "pgn",
            "x-cpio": "cpio",
            "x-csh": "csh",
            "x-debian-package": ["deb", "udeb"],
            "x-director": ["dcr", "dir", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
            "x-dms": "dms",
            "x-doom": "wad",
            "x-dvi": "dvi",
            "x-httpd-eruby": "rhtml",
            "x-font": "pcf.Z",
            "x-freemind": "mm",
            "x-gnumeric": "gnumeric",
            "x-go-sgf": "sgf",
            "x-graphing-calculator": "gcf",
            "x-gtar": ["gtar", "taz"],
            "x-hdf": "hdf",
            "x-httpd-php": ["phtml", "pht", "php"],
            "x-httpd-php-source": "phps",
            "x-httpd-php3": "php3",
            "x-httpd-php3-preprocessed": "php3p",
            "x-httpd-php4": "php4",
            "x-httpd-php5": "php5",
            "x-ica": "ica",
            "x-info": "info",
            "x-internet-signup": ["ins", "isp"],
            "x-iphone": "iii",
            "x-iso9660-image": "iso",
            "x-java-jnlp-file": "jnlp",
            "x-jmol": "jmz",
            "x-killustrator": "kil",
            "x-koan": ["skp", "skd", "skt", "skm"],
            "x-kpresenter": ["kpr", "kpt"],
            "x-kword": ["kwd", "kwt"],
            "x-latex": "latex",
            "x-lha": "lha",
            "x-lyx": "lyx",
            "x-lzh": "lzh",
            "x-lzx": "lzx",
            "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
            "x-ms-wmd": "wmd",
            "x-ms-wmz": "wmz",
            "x-msdos-program": ["com", "exe", "bat", "dll"],
            "x-msi": "msi",
            "x-netcdf": ["nc", "cdf"],
            "x-ns-proxy-autoconfig": ["pac", "dat"],
            "x-nwc": "nwc",
            "x-object": "o",
            "x-oz-application": "oza",
            "x-pkcs7-certreqresp": "p7r",
            "x-python-code": ["pyc", "pyo"],
            "x-qgis": ["qgs", "shp", "shx"],
            "x-quicktimeplayer": "qtl",
            "x-redhat-package-manager": "rpm",
            "x-ruby": "rb",
            "x-sh": "sh",
            "x-shar": "shar",
            "x-shockwave-flash": ["swf", "swfl"],
            "x-silverlight": "scr",
            "x-stuffit": "sit",
            "x-sv4cpio": "sv4cpio",
            "x-sv4crc": "sv4crc",
            "x-tar": "tar",
            "x-tcl": "tcl",
            "x-tex-gf": "gf",
            "x-tex-pk": "pk",
            "x-texinfo": ["texinfo", "texi"],
            "x-trash": ["~", "%", "bak", "old", "sik"],
            "x-troff": ["t", "tr", "roff"],
            "x-troff-man": "man",
            "x-troff-me": "me",
            "x-troff-ms": "ms",
            "x-ustar": "ustar",
            "x-wais-source": "src",
            "x-wingz": "wz",
            "x-x509-ca-cert": ["crt", "der", "cer"],
            "x-xcf": "xcf",
            "x-xfig": "fig",
            "x-xpinstall": "xpi",
            applixware: "aw",
            "atomsvc+xml": "atomsvc",
            "ccxml+xml": "ccxml",
            "cdmi-capability": "cdmia",
            "cdmi-container": "cdmic",
            "cdmi-domain": "cdmid",
            "cdmi-object": "cdmio",
            "cdmi-queue": "cdmiq",
            "docbook+xml": "dbk",
            "dssc+der": "dssc",
            "dssc+xml": "xdssc",
            "emma+xml": "emma",
            "epub+zip": "epub",
            exi: "exi",
            "font-tdpfr": "pfr",
            "gml+xml": "gml",
            "gpx+xml": "gpx",
            gxf: "gxf",
            hyperstudio: "stk",
            "inkml+xml": ["ink", "inkml"],
            ipfix: "ipfix",
            json: "json",
            "jsonml+json": "jsonml",
            "lost+xml": "lostxml",
            "mads+xml": "mads",
            marc: "mrc",
            "marcxml+xml": "mrcx",
            "mathml+xml": "mathml",
            mbox: "mbox",
            "mediaservercontrol+xml": "mscml",
            "metalink+xml": "metalink",
            "metalink4+xml": "meta4",
            "mets+xml": "mets",
            "mods+xml": "mods",
            mp21: ["m21", "mp21"],
            mp4: "mp4s",
            "oebps-package+xml": "opf",
            "omdoc+xml": "omdoc",
            onenote: ["onetoc", "onetoc2", "onetmp", "onepkg"],
            oxps: "oxps",
            "patch-ops-error+xml": "xer",
            "pgp-encrypted": "pgp",
            pkcs10: "p10",
            "pkcs7-mime": ["p7m", "p7c"],
            "pkcs7-signature": "p7s",
            pkcs8: "p8",
            "pkix-attr-cert": "ac",
            "pkix-crl": "crl",
            "pkix-pkipath": "pkipath",
            pkixcmp: "pki",
            "pls+xml": "pls",
            "prs.cww": "cww",
            "pskc+xml": "pskcxml",
            "reginfo+xml": "rif",
            "relax-ng-compact-syntax": "rnc",
            "resource-lists+xml": "rl",
            "resource-lists-diff+xml": "rld",
            "rls-services+xml": "rs",
            "rpki-ghostbusters": "gbr",
            "rpki-manifest": "mft",
            "rpki-roa": "roa",
            "rsd+xml": "rsd",
            "sbml+xml": "sbml",
            "scvp-cv-request": "scq",
            "scvp-cv-response": "scs",
            "scvp-vp-request": "spq",
            "scvp-vp-response": "spp",
            sdp: "sdp",
            "set-payment-initiation": "setpay",
            "set-registration-initiation": "setreg",
            "shf+xml": "shf",
            "sparql-query": "rq",
            "sparql-results+xml": "srx",
            srgs: "gram",
            "srgs+xml": "grxml",
            "sru+xml": "sru",
            "ssdl+xml": "ssdl",
            "ssml+xml": "ssml",
            "tei+xml": ["tei", "teicorpus"],
            "thraud+xml": "tfi",
            "timestamped-data": "tsd",
            "vnd.3gpp.pic-bw-large": "plb",
            "vnd.3gpp.pic-bw-small": "psb",
            "vnd.3gpp.pic-bw-var": "pvb",
            "vnd.3gpp2.tcap": "tcap",
            "vnd.3m.post-it-notes": "pwn",
            "vnd.accpac.simply.aso": "aso",
            "vnd.accpac.simply.imp": "imp",
            "vnd.acucobol": "acu",
            "vnd.acucorp": ["atc", "acutc"],
            "vnd.adobe.air-application-installer-package+zip": "air",
            "vnd.adobe.formscentral.fcdt": "fcdt",
            "vnd.adobe.fxp": ["fxp", "fxpl"],
            "vnd.adobe.xdp+xml": "xdp",
            "vnd.adobe.xfdf": "xfdf",
            "vnd.ahead.space": "ahead",
            "vnd.airzip.filesecure.azf": "azf",
            "vnd.airzip.filesecure.azs": "azs",
            "vnd.amazon.ebook": "azw",
            "vnd.americandynamics.acc": "acc",
            "vnd.amiga.ami": "ami",
            "vnd.anser-web-certificate-issue-initiation": "cii",
            "vnd.anser-web-funds-transfer-initiation": "fti",
            "vnd.antix.game-component": "atx",
            "vnd.apple.installer+xml": "mpkg",
            "vnd.apple.mpegurl": "m3u8",
            "vnd.aristanetworks.swi": "swi",
            "vnd.astraea-software.iota": "iota",
            "vnd.audiograph": "aep",
            "vnd.blueice.multipass": "mpm",
            "vnd.bmi": "bmi",
            "vnd.businessobjects": "rep",
            "vnd.chemdraw+xml": "cdxml",
            "vnd.chipnuts.karaoke-mmd": "mmd",
            "vnd.claymore": "cla",
            "vnd.cloanto.rp9": "rp9",
            "vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
            "vnd.cluetrust.cartomobile-config": "c11amc",
            "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
            "vnd.commonspace": "csp",
            "vnd.contact.cmsg": "cdbcmsg",
            "vnd.cosmocaller": "cmc",
            "vnd.crick.clicker": "clkx",
            "vnd.crick.clicker.keyboard": "clkk",
            "vnd.crick.clicker.palette": "clkp",
            "vnd.crick.clicker.template": "clkt",
            "vnd.crick.clicker.wordbank": "clkw",
            "vnd.criticaltools.wbs+xml": "wbs",
            "vnd.ctc-posml": "pml",
            "vnd.cups-ppd": "ppd",
            "vnd.curl.car": "car",
            "vnd.curl.pcurl": "pcurl",
            "vnd.dart": "dart",
            "vnd.data-vision.rdz": "rdz",
            "vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
            "vnd.dece.ttml+xml": ["uvt", "uvvt"],
            "vnd.dece.unspecified": ["uvx", "uvvx"],
            "vnd.dece.zip": ["uvz", "uvvz"],
            "vnd.denovo.fcselayout-link": "fe_launch",
            "vnd.dna": "dna",
            "vnd.dolby.mlp": "mlp",
            "vnd.dpgraph": "dpg",
            "vnd.dreamfactory": "dfac",
            "vnd.ds-keypoint": "kpxx",
            "vnd.dvb.ait": "ait",
            "vnd.dvb.service": "svc",
            "vnd.dynageo": "geo",
            "vnd.ecowin.chart": "mag",
            "vnd.enliven": "nml",
            "vnd.epson.esf": "esf",
            "vnd.epson.msf": "msf",
            "vnd.epson.quickanime": "qam",
            "vnd.epson.salt": "slt",
            "vnd.epson.ssf": "ssf",
            "vnd.eszigno3+xml": ["es3", "et3"],
            "vnd.ezpix-album": "ez2",
            "vnd.ezpix-package": "ez3",
            "vnd.fdf": "fdf",
            "vnd.fdsn.mseed": "mseed",
            "vnd.fdsn.seed": ["seed", "dataless"],
            "vnd.flographit": "gph",
            "vnd.fluxtime.clip": "ftc",
            "vnd.framemaker": ["fm", "frame", "maker", "book"],
            "vnd.frogans.fnc": "fnc",
            "vnd.frogans.ltf": "ltf",
            "vnd.fsc.weblaunch": "fsc",
            "vnd.fujitsu.oasys": "oas",
            "vnd.fujitsu.oasys2": "oa2",
            "vnd.fujitsu.oasys3": "oa3",
            "vnd.fujitsu.oasysgp": "fg5",
            "vnd.fujitsu.oasysprs": "bh2",
            "vnd.fujixerox.ddd": "ddd",
            "vnd.fujixerox.docuworks": "xdw",
            "vnd.fujixerox.docuworks.binder": "xbd",
            "vnd.fuzzysheet": "fzs",
            "vnd.genomatix.tuxedo": "txd",
            "vnd.geogebra.file": "ggb",
            "vnd.geogebra.tool": "ggt",
            "vnd.geometry-explorer": ["gex", "gre"],
            "vnd.geonext": "gxt",
            "vnd.geoplan": "g2w",
            "vnd.geospace": "g3w",
            "vnd.gmx": "gmx",
            "vnd.grafeq": ["gqf", "gqs"],
            "vnd.groove-account": "gac",
            "vnd.groove-help": "ghf",
            "vnd.groove-identity-message": "gim",
            "vnd.groove-injector": "grv",
            "vnd.groove-tool-message": "gtm",
            "vnd.groove-tool-template": "tpl",
            "vnd.groove-vcard": "vcg",
            "vnd.hal+xml": "hal",
            "vnd.handheld-entertainment+xml": "zmm",
            "vnd.hbci": "hbci",
            "vnd.hhe.lesson-player": "les",
            "vnd.hp-hpgl": "hpgl",
            "vnd.hp-hpid": "hpid",
            "vnd.hp-hps": "hps",
            "vnd.hp-jlyt": "jlt",
            "vnd.hp-pcl": "pcl",
            "vnd.hp-pclxl": "pclxl",
            "vnd.hydrostatix.sof-data": "sfd-hdstx",
            "vnd.ibm.minipay": "mpy",
            "vnd.ibm.modcap": ["afp", "listafp", "list3820"],
            "vnd.ibm.rights-management": "irm",
            "vnd.ibm.secure-container": "sc",
            "vnd.iccprofile": ["icc", "icm"],
            "vnd.igloader": "igl",
            "vnd.immervision-ivp": "ivp",
            "vnd.immervision-ivu": "ivu",
            "vnd.insors.igm": "igm",
            "vnd.intercon.formnet": ["xpw", "xpx"],
            "vnd.intergeo": "i2g",
            "vnd.intu.qbo": "qbo",
            "vnd.intu.qfx": "qfx",
            "vnd.ipunplugged.rcprofile": "rcprofile",
            "vnd.irepository.package+xml": "irp",
            "vnd.is-xpr": "xpr",
            "vnd.isac.fcs": "fcs",
            "vnd.jam": "jam",
            "vnd.jcp.javame.midlet-rms": "rms",
            "vnd.jisp": "jisp",
            "vnd.joost.joda-archive": "joda",
            "vnd.kahootz": ["ktz", "ktr"],
            "vnd.kde.karbon": "karbon",
            "vnd.kde.kchart": "chrt",
            "vnd.kde.kformula": "kfo",
            "vnd.kde.kivio": "flw",
            "vnd.kde.kontour": "kon",
            "vnd.kde.kpresenter": ["kpr", "kpt"],
            "vnd.kde.kspread": "ksp",
            "vnd.kde.kword": ["kwd", "kwt"],
            "vnd.kenameaapp": "htke",
            "vnd.kidspiration": "kia",
            "vnd.kinar": ["kne", "knp"],
            "vnd.koan": ["skp", "skd", "skt", "skm"],
            "vnd.kodak-descriptor": "sse",
            "vnd.las.las+xml": "lasxml",
            "vnd.llamagraphics.life-balance.desktop": "lbd",
            "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
            "vnd.lotus-1-2-3": "123",
            "vnd.lotus-approach": "apr",
            "vnd.lotus-freelance": "pre",
            "vnd.lotus-notes": "nsf",
            "vnd.lotus-organizer": "org",
            "vnd.lotus-screencam": "scm",
            "vnd.lotus-wordpro": "lwp",
            "vnd.macports.portpkg": "portpkg",
            "vnd.mcd": "mcd",
            "vnd.medcalcdata": "mc1",
            "vnd.mediastation.cdkey": "cdkey",
            "vnd.mfer": "mwf",
            "vnd.mfmp": "mfm",
            "vnd.micrografx.flo": "flo",
            "vnd.micrografx.igx": "igx",
            "vnd.mif": "mif",
            "vnd.mobius.daf": "daf",
            "vnd.mobius.dis": "dis",
            "vnd.mobius.mbk": "mbk",
            "vnd.mobius.mqy": "mqy",
            "vnd.mobius.msl": "msl",
            "vnd.mobius.plc": "plc",
            "vnd.mobius.txf": "txf",
            "vnd.mophun.application": "mpn",
            "vnd.mophun.certificate": "mpc",
            "vnd.ms-artgalry": "cil",
            "vnd.ms-cab-compressed": "cab",
            "vnd.ms-excel.addin.macroenabled.12": "xlam",
            "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
            "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
            "vnd.ms-excel.template.macroenabled.12": "xltm",
            "vnd.ms-fontobject": "eot",
            "vnd.ms-htmlhelp": "chm",
            "vnd.ms-ims": "ims",
            "vnd.ms-lrm": "lrm",
            "vnd.ms-officetheme": "thmx",
            "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
            "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
            "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
            "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
            "vnd.ms-powerpoint.template.macroenabled.12": "potm",
            "vnd.ms-project": ["mpp", "mpt"],
            "vnd.ms-word.document.macroenabled.12": "docm",
            "vnd.ms-word.template.macroenabled.12": "dotm",
            "vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
            "vnd.ms-wpl": "wpl",
            "vnd.ms-xpsdocument": "xps",
            "vnd.mseq": "mseq",
            "vnd.musician": "mus",
            "vnd.muvee.style": "msty",
            "vnd.mynfc": "taglet",
            "vnd.neurolanguage.nlu": "nlu",
            "vnd.nitf": ["ntf", "nitf"],
            "vnd.noblenet-directory": "nnd",
            "vnd.noblenet-sealer": "nns",
            "vnd.noblenet-web": "nnw",
            "vnd.nokia.n-gage.data": "ngdat",
            "vnd.nokia.n-gage.symbian.install": "n-gage",
            "vnd.nokia.radio-preset": "rpst",
            "vnd.nokia.radio-presets": "rpss",
            "vnd.novadigm.edm": "edm",
            "vnd.novadigm.edx": "edx",
            "vnd.novadigm.ext": "ext",
            "vnd.oasis.opendocument.chart-template": "otc",
            "vnd.oasis.opendocument.formula-template": "odft",
            "vnd.oasis.opendocument.image-template": "oti",
            "vnd.olpc-sugar": "xo",
            "vnd.oma.dd2+xml": "dd2",
            "vnd.openofficeorg.extension": "oxt",
            "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
            "vnd.osgeo.mapguide.package": "mgp",
            "vnd.osgi.dp": "dp",
            "vnd.osgi.subsystem": "esa",
            "vnd.palm": ["pdb", "pqa", "oprc"],
            "vnd.pawaafile": "paw",
            "vnd.pg.format": "str",
            "vnd.pg.osasli": "ei6",
            "vnd.picsel": "efif",
            "vnd.pmi.widget": "wg",
            "vnd.pocketlearn": "plf",
            "vnd.powerbuilder6": "pbd",
            "vnd.previewsystems.box": "box",
            "vnd.proteus.magazine": "mgz",
            "vnd.publishare-delta-tree": "qps",
            "vnd.pvi.ptid1": "ptid",
            "vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
            "vnd.realvnc.bed": "bed",
            "vnd.recordare.musicxml": "mxl",
            "vnd.recordare.musicxml+xml": "musicxml",
            "vnd.rig.cryptonote": "cryptonote",
            "vnd.rn-realmedia": "rm",
            "vnd.rn-realmedia-vbr": "rmvb",
            "vnd.route66.link66+xml": "link66",
            "vnd.sailingtracker.track": "st",
            "vnd.seemail": "see",
            "vnd.sema": "sema",
            "vnd.semd": "semd",
            "vnd.semf": "semf",
            "vnd.shana.informed.formdata": "ifm",
            "vnd.shana.informed.formtemplate": "itp",
            "vnd.shana.informed.interchange": "iif",
            "vnd.shana.informed.package": "ipk",
            "vnd.simtech-mindmapper": ["twd", "twds"],
            "vnd.smart.teacher": "teacher",
            "vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
            "vnd.spotfire.dxp": "dxp",
            "vnd.spotfire.sfs": "sfs",
            "vnd.stepmania.package": "smzip",
            "vnd.stepmania.stepchart": "sm",
            "vnd.sus-calendar": ["sus", "susp"],
            "vnd.svd": "svd",
            "vnd.syncml+xml": "xsm",
            "vnd.syncml.dm+wbxml": "bdm",
            "vnd.syncml.dm+xml": "xdm",
            "vnd.tao.intent-module-archive": "tao",
            "vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
            "vnd.tmobile-livetv": "tmo",
            "vnd.trid.tpt": "tpt",
            "vnd.triscape.mxs": "mxs",
            "vnd.trueapp": "tra",
            "vnd.ufdl": ["ufd", "ufdl"],
            "vnd.uiq.theme": "utz",
            "vnd.umajin": "umj",
            "vnd.unity": "unityweb",
            "vnd.uoml+xml": "uoml",
            "vnd.vcx": "vcx",
            "vnd.visionary": "vis",
            "vnd.vsf": "vsf",
            "vnd.webturbo": "wtb",
            "vnd.wolfram.player": "nbp",
            "vnd.wqd": "wqd",
            "vnd.wt.stf": "stf",
            "vnd.xara": "xar",
            "vnd.xfdl": "xfdl",
            "vnd.yamaha.hv-dic": "hvd",
            "vnd.yamaha.hv-script": "hvs",
            "vnd.yamaha.hv-voice": "hvp",
            "vnd.yamaha.openscoreformat": "osf",
            "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
            "vnd.yamaha.smaf-audio": "saf",
            "vnd.yamaha.smaf-phrase": "spf",
            "vnd.yellowriver-custom-menu": "cmp",
            "vnd.zul": ["zir", "zirz"],
            "vnd.zzazz.deck+xml": "zaz",
            "voicexml+xml": "vxml",
            widget: "wgt",
            winhlp: "hlp",
            "wsdl+xml": "wsdl",
            "wspolicy+xml": "wspolicy",
            "x-ace-compressed": "ace",
            "x-authorware-bin": ["aab", "x32", "u32", "vox"],
            "x-authorware-map": "aam",
            "x-authorware-seg": "aas",
            "x-blorb": ["blb", "blorb"],
            "x-bzip": "bz",
            "x-bzip2": ["bz2", "boz"],
            "x-cfs-compressed": "cfs",
            "x-chat": "chat",
            "x-conference": "nsc",
            "x-dgc-compressed": "dgc",
            "x-dtbncx+xml": "ncx",
            "x-dtbook+xml": "dtb",
            "x-dtbresource+xml": "res",
            "x-eva": "eva",
            "x-font-bdf": "bdf",
            "x-font-ghostscript": "gsf",
            "x-font-linux-psf": "psf",
            "x-font-otf": "otf",
            "x-font-pcf": "pcf",
            "x-font-snf": "snf",
            "x-font-ttf": ["ttf", "ttc"],
            "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
            "x-font-woff": "woff",
            "x-freearc": "arc",
            "x-gca-compressed": "gca",
            "x-glulx": "ulx",
            "x-gramps-xml": "gramps",
            "x-install-instructions": "install",
            "x-lzh-compressed": ["lzh", "lha"],
            "x-mie": "mie",
            "x-mobipocket-ebook": ["prc", "mobi"],
            "x-ms-application": "application",
            "x-ms-shortcut": "lnk",
            "x-ms-xbap": "xbap",
            "x-msbinder": "obd",
            "x-mscardfile": "crd",
            "x-msclip": "clp",
            "x-msdownload": ["exe", "dll", "com", "bat", "msi"],
            "x-msmediaview": ["mvb", "m13", "m14"],
            "x-msmetafile": ["wmf", "wmz", "emf", "emz"],
            "x-msmoney": "mny",
            "x-mspublisher": "pub",
            "x-msschedule": "scd",
            "x-msterminal": "trm",
            "x-mswrite": "wri",
            "x-nzb": "nzb",
            "x-pkcs12": ["p12", "pfx"],
            "x-pkcs7-certificates": ["p7b", "spc"],
            "x-research-info-systems": "ris",
            "x-silverlight-app": "xap",
            "x-sql": "sql",
            "x-stuffitx": "sitx",
            "x-subrip": "srt",
            "x-t3vm-image": "t3",
            "x-tads": "gam",
            "x-tex": "tex",
            "x-tex-tfm": "tfm",
            "x-tgif": "obj",
            "x-xliff+xml": "xlf",
            "x-xz": "xz",
            "x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
            "xaml+xml": "xaml",
            "xcap-diff+xml": "xdf",
            "xenc+xml": "xenc",
            "xml-dtd": "dtd",
            "xop+xml": "xop",
            "xproc+xml": "xpl",
            "xslt+xml": "xslt",
            "xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
            yang: "yang",
            "yin+xml": "yin",
            envoy: "evy",
            fractals: "fif",
            "internet-property-stream": "acx",
            olescript: "axs",
            "vnd.ms-outlook": "msg",
            "vnd.ms-pkicertstore": "sst",
            "x-compress": "z",
            "x-compressed": "tgz",
            "x-gzip": "gz",
            "x-perfmon": ["pma", "pmc", "pml", "pmr", "pmw"],
            "x-pkcs7-mime": ["p7c", "p7m"],
            "ynd.ms-pkipko": "pko"
        },
        audio: {
            amr: "amr",
            "amr-wb": "awb",
            annodex: "axa",
            basic: ["au", "snd"],
            flac: "flac",
            midi: ["mid", "midi", "kar", "rmi"],
            mpeg: ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
            mpegurl: "m3u",
            ogg: ["oga", "ogg", "spx"],
            "prs.sid": "sid",
            "x-aiff": ["aif", "aiff", "aifc"],
            "x-gsm": "gsm",
            "x-ms-wma": "wma",
            "x-ms-wax": "wax",
            "x-pn-realaudio": "ram",
            "x-realaudio": "ra",
            "x-sd2": "sd2",
            "x-wav": "wav",
            adpcm: "adp",
            mp4: "mp4a",
            s3m: "s3m",
            silk: "sil",
            "vnd.dece.audio": ["uva", "uvva"],
            "vnd.digital-winds": "eol",
            "vnd.dra": "dra",
            "vnd.dts": "dts",
            "vnd.dts.hd": "dtshd",
            "vnd.lucent.voice": "lvp",
            "vnd.ms-playready.media.pya": "pya",
            "vnd.nuera.ecelp4800": "ecelp4800",
            "vnd.nuera.ecelp7470": "ecelp7470",
            "vnd.nuera.ecelp9600": "ecelp9600",
            "vnd.rip": "rip",
            webm: "weba",
            "x-aac": "aac",
            "x-caf": "caf",
            "x-matroska": "mka",
            "x-pn-realaudio-plugin": "rmp",
            xm: "xm",
            mid: ["mid", "rmi"]
        },
        chemical: {
            "x-alchemy": "alc",
            "x-cache": ["cac", "cache"],
            "x-cache-csf": "csf",
            "x-cactvs-binary": ["cbin", "cascii", "ctab"],
            "x-cdx": "cdx",
            "x-chem3d": "c3d",
            "x-cif": "cif",
            "x-cmdf": "cmdf",
            "x-cml": "cml",
            "x-compass": "cpa",
            "x-crossfire": "bsd",
            "x-csml": ["csml", "csm"],
            "x-ctx": "ctx",
            "x-cxf": ["cxf", "cef"],
            "x-embl-dl-nucleotide": ["emb", "embl"],
            "x-gamess-input": ["inp", "gam", "gamin"],
            "x-gaussian-checkpoint": ["fch", "fchk"],
            "x-gaussian-cube": "cub",
            "x-gaussian-input": ["gau", "gjc", "gjf"],
            "x-gaussian-log": "gal",
            "x-gcg8-sequence": "gcg",
            "x-genbank": "gen",
            "x-hin": "hin",
            "x-isostar": ["istr", "ist"],
            "x-jcamp-dx": ["jdx", "dx"],
            "x-kinemage": "kin",
            "x-macmolecule": "mcm",
            "x-macromodel-input": ["mmd", "mmod"],
            "x-mdl-molfile": "mol",
            "x-mdl-rdfile": "rd",
            "x-mdl-rxnfile": "rxn",
            "x-mdl-sdfile": ["sd", "sdf"],
            "x-mdl-tgf": "tgf",
            "x-mmcif": "mcif",
            "x-mol2": "mol2",
            "x-molconn-Z": "b",
            "x-mopac-graph": "gpt",
            "x-mopac-input": ["mop", "mopcrt", "mpc", "zmt"],
            "x-mopac-out": "moo",
            "x-ncbi-asn1": "asn",
            "x-ncbi-asn1-ascii": ["prt", "ent"],
            "x-ncbi-asn1-binary": ["val", "aso"],
            "x-pdb": ["pdb", "ent"],
            "x-rosdal": "ros",
            "x-swissprot": "sw",
            "x-vamas-iso14976": "vms",
            "x-vmd": "vmd",
            "x-xtel": "xtel",
            "x-xyz": "xyz"
        },
        image: {
            gif: "gif",
            ief: "ief",
            jpeg: ["jpeg", "jpg", "jpe"],
            pcx: "pcx",
            png: "png",
            "svg+xml": ["svg", "svgz"],
            tiff: ["tiff", "tif"],
            "vnd.djvu": ["djvu", "djv"],
            "vnd.wap.wbmp": "wbmp",
            "x-canon-cr2": "cr2",
            "x-canon-crw": "crw",
            "x-cmu-raster": "ras",
            "x-coreldraw": "cdr",
            "x-coreldrawpattern": "pat",
            "x-coreldrawtemplate": "cdt",
            "x-corelphotopaint": "cpt",
            "x-epson-erf": "erf",
            "x-icon": "ico",
            "x-jg": "art",
            "x-jng": "jng",
            "x-nikon-nef": "nef",
            "x-olympus-orf": "orf",
            "x-photoshop": "psd",
            "x-portable-anymap": "pnm",
            "x-portable-bitmap": "pbm",
            "x-portable-graymap": "pgm",
            "x-portable-pixmap": "ppm",
            "x-rgb": "rgb",
            "x-xbitmap": "xbm",
            "x-xpixmap": "xpm",
            "x-xwindowdump": "xwd",
            bmp: "bmp",
            cgm: "cgm",
            g3fax: "g3",
            ktx: "ktx",
            "prs.btif": "btif",
            sgi: "sgi",
            "vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
            "vnd.dwg": "dwg",
            "vnd.dxf": "dxf",
            "vnd.fastbidsheet": "fbs",
            "vnd.fpx": "fpx",
            "vnd.fst": "fst",
            "vnd.fujixerox.edmics-mmr": "mmr",
            "vnd.fujixerox.edmics-rlc": "rlc",
            "vnd.ms-modi": "mdi",
            "vnd.ms-photo": "wdp",
            "vnd.net-fpx": "npx",
            "vnd.xiff": "xif",
            webp: "webp",
            "x-3ds": "3ds",
            "x-cmx": "cmx",
            "x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
            "x-pict": ["pic", "pct"],
            "x-tga": "tga",
            "cis-cod": "cod",
            pipeg: "jfif"
        },
        message: {
            rfc822: ["eml", "mime", "mht", "mhtml", "nws"]
        },
        model: {
            iges: ["igs", "iges"],
            mesh: ["msh", "mesh", "silo"],
            vrml: ["wrl", "vrml"],
            "x3d+vrml": ["x3dv", "x3dvz"],
            "x3d+xml": ["x3d", "x3dz"],
            "x3d+binary": ["x3db", "x3dbz"],
            "vnd.collada+xml": "dae",
            "vnd.dwf": "dwf",
            "vnd.gdl": "gdl",
            "vnd.gtw": "gtw",
            "vnd.mts": "mts",
            "vnd.vtu": "vtu"
        },
        text: {
            "cache-manifest": ["manifest", "appcache"],
            calendar: ["ics", "icz", "ifb"],
            css: "css",
            csv: "csv",
            h323: "323",
            html: ["html", "htm", "shtml", "stm"],
            iuls: "uls",
            mathml: "mml",
            plain: ["txt", "text", "brf", "conf", "def", "list", "log", "in", "bas"],
            richtext: "rtx",
            scriptlet: ["sct", "wsc"],
            texmacs: ["tm", "ts"],
            "tab-separated-values": "tsv",
            "vnd.sun.j2me.app-descriptor": "jad",
            "vnd.wap.wml": "wml",
            "vnd.wap.wmlscript": "wmls",
            "x-bibtex": "bib",
            "x-boo": "boo",
            "x-c++hdr": ["h++", "hpp", "hxx", "hh"],
            "x-c++src": ["c++", "cpp", "cxx", "cc"],
            "x-component": "htc",
            "x-dsrc": "d",
            "x-diff": ["diff", "patch"],
            "x-haskell": "hs",
            "x-java": "java",
            "x-literate-haskell": "lhs",
            "x-moc": "moc",
            "x-pascal": ["p", "pas"],
            "x-pcs-gcd": "gcd",
            "x-perl": ["pl", "pm"],
            "x-python": "py",
            "x-scala": "scala",
            "x-setext": "etx",
            "x-tcl": ["tcl", "tk"],
            "x-tex": ["tex", "ltx", "sty", "cls"],
            "x-vcalendar": "vcs",
            "x-vcard": "vcf",
            n3: "n3",
            "prs.lines.tag": "dsc",
            sgml: ["sgml", "sgm"],
            troff: ["t", "tr", "roff", "man", "me", "ms"],
            turtle: "ttl",
            "uri-list": ["uri", "uris", "urls"],
            vcard: "vcard",
            "vnd.curl": "curl",
            "vnd.curl.dcurl": "dcurl",
            "vnd.curl.scurl": "scurl",
            "vnd.curl.mcurl": "mcurl",
            "vnd.dvb.subtitle": "sub",
            "vnd.fly": "fly",
            "vnd.fmi.flexstor": "flx",
            "vnd.graphviz": "gv",
            "vnd.in3d.3dml": "3dml",
            "vnd.in3d.spot": "spot",
            "x-asm": ["s", "asm"],
            "x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
            "x-fortran": ["f", "for", "f77", "f90"],
            "x-opml": "opml",
            "x-nfo": "nfo",
            "x-sfv": "sfv",
            "x-uuencode": "uu",
            webviewhtml: "htt"
        },
        video: {
            avif: ".avif",
            "3gpp": "3gp",
            annodex: "axv",
            dl: "dl",
            dv: ["dif", "dv"],
            fli: "fli",
            gl: "gl",
            mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
            mp4: ["mp4", "mp4v", "mpg4"],
            quicktime: ["qt", "mov"],
            ogg: "ogv",
            "vnd.mpegurl": ["mxu", "m4u"],
            "x-flv": "flv",
            "x-la-asf": ["lsf", "lsx"],
            "x-mng": "mng",
            "x-ms-asf": ["asf", "asx", "asr"],
            "x-ms-wm": "wm",
            "x-ms-wmv": "wmv",
            "x-ms-wmx": "wmx",
            "x-ms-wvx": "wvx",
            "x-msvideo": "avi",
            "x-sgi-movie": "movie",
            "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
            "3gpp2": "3g2",
            h261: "h261",
            h263: "h263",
            h264: "h264",
            jpeg: "jpgv",
            jpm: ["jpm", "jpgm"],
            mj2: ["mj2", "mjp2"],
            "vnd.dece.hd": ["uvh", "uvvh"],
            "vnd.dece.mobile": ["uvm", "uvvm"],
            "vnd.dece.pd": ["uvp", "uvvp"],
            "vnd.dece.sd": ["uvs", "uvvs"],
            "vnd.dece.video": ["uvv", "uvvv"],
            "vnd.dvb.file": "dvb",
            "vnd.fvt": "fvt",
            "vnd.ms-playready.media.pyv": "pyv",
            "vnd.uvvu.mp4": ["uvu", "uvvu"],
            "vnd.vivo": "viv",
            webm: "webm",
            "x-f4v": "f4v",
            "x-m4v": "m4v",
            "x-ms-vob": "vob",
            "x-smv": "smv"
        },
        "x-conference": {
            "x-cooltalk": "ice"
        },
        "x-world": {
            "x-vrml": ["vrm", "vrml", "wrl", "flr", "wrz", "xaf", "xof"]
        }
    }
      , C0 = (()=>{
        let t = {};
        for (let e in _n)
            if (_n.hasOwnProperty(e)) {
                for (let n in _n[e])
                    if (_n[e].hasOwnProperty(n)) {
                        let i = _n[e][n];
                        if (typeof i == "string")
                            t[i] = e + "/" + n;
                        else
                            for (let r = 0; r < i.length; r++)
                                t[i[r]] = e + "/" + n
                    }
            }
        return t
    }
    )();
    var jo = [];
    for (let t = 0; t < 256; t++) {
        let e = t;
        for (let n = 0; n < 8; n++)
            e & 1 ? e = e >>> 1 ^ 3988292384 : e = e >>> 1;
        jo[t] = e
    }
    var tr = class {
        constructor(e) {
            this.crc = e || -1
        }
        append(e) {
            let n = this.crc | 0;
            for (let i = 0, r = e.length | 0; i < r; i++)
                n = n >>> 8 ^ jo[(n ^ e[i]) & 255];
            this.crc = n
        }
        get() {
            return ~this.crc
        }
    }
      , ge = tr;
    var er = $m;
    function $m(t) {
        if (typeof TextEncoder > "u") {
            t = unescape(encodeURIComponent(t));
            let e = new Uint8Array(t.length);
            for (let n = 0; n < e.length; n++)
                e[n] = t.charCodeAt(n);
            return e
        } else
            return new TextEncoder().encode(t)
    }
    var Et = {
        concat(t, e) {
            if (t.length === 0 || e.length === 0)
                return t.concat(e);
            let n = t[t.length - 1]
              , i = Et.getPartial(n);
            return i === 32 ? t.concat(e) : Et._shiftRight(e, i, n | 0, t.slice(0, t.length - 1))
        },
        bitLength(t) {
            let e = t.length;
            if (e === 0)
                return 0;
            let n = t[e - 1];
            return (e - 1) * 32 + Et.getPartial(n)
        },
        clamp(t, e) {
            if (t.length * 32 < e)
                return t;
            t = t.slice(0, Math.ceil(e / 32));
            let n = t.length;
            return e = e & 31,
            n > 0 && e && (t[n - 1] = Et.partial(e, t[n - 1] & 2147483648 >> e - 1, 1)),
            t
        },
        partial(t, e, n) {
            return t === 32 ? e : (n ? e | 0 : e << 32 - t) + t * 1099511627776
        },
        getPartial(t) {
            return Math.round(t / 1099511627776) || 32
        },
        _shiftRight(t, e, n, i) {
            for (i === void 0 && (i = []); e >= 32; e -= 32)
                i.push(n),
                n = 0;
            if (e === 0)
                return i.concat(t);
            for (let o = 0; o < t.length; o++)
                i.push(n | t[o] >>> e),
                n = t[o] << 32 - e;
            let r = t.length ? t[t.length - 1] : 0
              , a = Et.getPartial(r);
            return i.push(Et.partial(e + a & 31, e + a > 32 ? n : i.pop(), 1)),
            i
        }
    }
      , wn = {
        bytes: {
            fromBits(t) {
                let n = Et.bitLength(t) / 8, i = new Uint8Array(n), r;
                for (let a = 0; a < n; a++)
                    a & 3 || (r = t[a / 4]),
                    i[a] = r >>> 24,
                    r <<= 8;
                return i
            },
            toBits(t) {
                let e = [], n, i = 0;
                for (n = 0; n < t.length; n++)
                    i = i << 8 | t[n],
                    (n & 3) === 3 && (e.push(i),
                    i = 0);
                return n & 3 && e.push(Et.partial(8 * (n & 3), i)),
                e
            }
        }
    }
      , nr = {};
    nr.sha1 = function(t) {
        t ? (this._h = t._h.slice(0),
        this._buffer = t._buffer.slice(0),
        this._length = t._length) : this.reset()
    }
    ;
    nr.sha1.prototype = {
        blockSize: 512,
        reset: function() {
            let t = this;
            return t._h = this._init.slice(0),
            t._buffer = [],
            t._length = 0,
            t
        },
        update: function(t) {
            let e = this;
            typeof t == "string" && (t = wn.utf8String.toBits(t));
            let n = e._buffer = Et.concat(e._buffer, t)
              , i = e._length
              , r = e._length = i + Et.bitLength(t);
            if (r > 9007199254740991)
                throw new Error("Cannot hash more than 2^53 - 1 bits");
            let a = new Uint32Array(n)
              , o = 0;
            for (let l = e.blockSize + i - (e.blockSize + i & e.blockSize - 1); l <= r; l += e.blockSize)
                e._block(a.subarray(16 * o, 16 * (o + 1))),
                o += 1;
            return n.splice(0, 16 * o),
            e
        },
        finalize: function() {
            let t = this
              , e = t._buffer
              , n = t._h;
            e = Et.concat(e, [Et.partial(1, 1)]);
            for (let i = e.length + 2; i & 15; i++)
                e.push(0);
            for (e.push(Math.floor(t._length / 4294967296)),
            e.push(t._length | 0); e.length; )
                t._block(e.splice(0, 16));
            return t.reset(),
            n
        },
        _init: [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        _key: [1518500249, 1859775393, 2400959708, 3395469782],
        _f: function(t, e, n, i) {
            if (t <= 19)
                return e & n | ~e & i;
            if (t <= 39)
                return e ^ n ^ i;
            if (t <= 59)
                return e & n | e & i | n & i;
            if (t <= 79)
                return e ^ n ^ i
        },
        _S: function(t, e) {
            return e << t | e >>> 32 - t
        },
        _block: function(t) {
            let e = this
              , n = e._h
              , i = Array(80);
            for (let d = 0; d < 16; d++)
                i[d] = t[d];
            let r = n[0]
              , a = n[1]
              , o = n[2]
              , l = n[3]
              , u = n[4];
            for (let d = 0; d <= 79; d++) {
                d >= 16 && (i[d] = e._S(1, i[d - 3] ^ i[d - 8] ^ i[d - 14] ^ i[d - 16]));
                let h = e._S(5, r) + e._f(d, a, o, l) + u + i[d] + e._key[Math.floor(d / 20)] | 0;
                u = l,
                l = o,
                o = e._S(30, a),
                a = r,
                r = h
            }
            n[0] = n[0] + r | 0,
            n[1] = n[1] + a | 0,
            n[2] = n[2] + o | 0,
            n[3] = n[3] + l | 0,
            n[4] = n[4] + u | 0
        }
    };
    var ir = {};
    ir.aes = class {
        constructor(t) {
            let e = this;
            e._tables = [[[], [], [], [], []], [[], [], [], [], []]],
            e._tables[0][0][0] || e._precompute();
            let n = e._tables[0][4], i = e._tables[1], r = t.length, a, o, l, u = 1;
            if (r !== 4 && r !== 6 && r !== 8)
                throw new Error("invalid aes key size");
            for (e._key = [o = t.slice(0), l = []],
            a = r; a < 4 * r + 28; a++) {
                let d = o[a - 1];
                (a % r === 0 || r === 8 && a % r === 4) && (d = n[d >>> 24] << 24 ^ n[d >> 16 & 255] << 16 ^ n[d >> 8 & 255] << 8 ^ n[d & 255],
                a % r === 0 && (d = d << 8 ^ d >>> 24 ^ u << 24,
                u = u << 1 ^ (u >> 7) * 283)),
                o[a] = o[a - r] ^ d
            }
            for (let d = 0; a; d++,
            a--) {
                let h = o[d & 3 ? a : a - 4];
                a <= 4 || d < 4 ? l[d] = h : l[d] = i[0][n[h >>> 24]] ^ i[1][n[h >> 16 & 255]] ^ i[2][n[h >> 8 & 255]] ^ i[3][n[h & 255]]
            }
        }
        encrypt(t) {
            return this._crypt(t, 0)
        }
        decrypt(t) {
            return this._crypt(t, 1)
        }
        _precompute() {
            let t = this._tables[0], e = this._tables[1], n = t[4], i = e[4], r = [], a = [], o, l, u, d;
            for (let h = 0; h < 256; h++)
                a[(r[h] = h << 1 ^ (h >> 7) * 283) ^ h] = h;
            for (let h = o = 0; !n[h]; h ^= l || 1,
            o = a[o] || 1) {
                let g = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
                g = g >> 8 ^ g & 255 ^ 99,
                n[h] = g,
                i[g] = h,
                d = r[u = r[l = r[h]]];
                let _ = d * 16843009 ^ u * 65537 ^ l * 257 ^ h * 16843008
                  , E = r[g] * 257 ^ g * 16843008;
                for (let T = 0; T < 4; T++)
                    t[T][h] = E = E << 24 ^ E >>> 8,
                    e[T][g] = _ = _ << 24 ^ _ >>> 8
            }
            for (let h = 0; h < 5; h++)
                t[h] = t[h].slice(0),
                e[h] = e[h].slice(0)
        }
        _crypt(t, e) {
            if (t.length !== 4)
                throw new Error("invalid aes block size");
            let n = this._key[e], i = n.length / 4 - 2, r = [0, 0, 0, 0], a = this._tables[e], o = a[0], l = a[1], u = a[2], d = a[3], h = a[4], g = t[0] ^ n[0], _ = t[e ? 3 : 1] ^ n[1], E = t[2] ^ n[2], T = t[e ? 1 : 3] ^ n[3], w = 4, x, v, I;
            for (let R = 0; R < i; R++)
                x = o[g >>> 24] ^ l[_ >> 16 & 255] ^ u[E >> 8 & 255] ^ d[T & 255] ^ n[w],
                v = o[_ >>> 24] ^ l[E >> 16 & 255] ^ u[T >> 8 & 255] ^ d[g & 255] ^ n[w + 1],
                I = o[E >>> 24] ^ l[T >> 16 & 255] ^ u[g >> 8 & 255] ^ d[_ & 255] ^ n[w + 2],
                T = o[T >>> 24] ^ l[g >> 16 & 255] ^ u[_ >> 8 & 255] ^ d[E & 255] ^ n[w + 3],
                w += 4,
                g = x,
                _ = v,
                E = I;
            for (let R = 0; R < 4; R++)
                r[e ? 3 & -R : R] = h[g >>> 24] << 24 ^ h[_ >> 16 & 255] << 16 ^ h[E >> 8 & 255] << 8 ^ h[T & 255] ^ n[w++],
                x = g,
                g = _,
                _ = E,
                E = T,
                T = x;
            return r
        }
    }
    ;
    var So = {
        getRandomValues(t) {
            let e = new Uint32Array(t.buffer)
              , n = i=>{
                let r = 987654321
                  , a = 4294967295;
                return function() {
                    return r = 36969 * (r & 65535) + (r >> 16) & a,
                    i = 18e3 * (i & 65535) + (i >> 16) & a,
                    (((r << 16) + i & a) / 4294967296 + .5) * (Math.random() > .5 ? 1 : -1)
                }
            }
            ;
            for (let i = 0, r; i < t.length; i += 4) {
                let a = n((r || Math.random()) * 4294967296);
                r = a() * 987654071,
                e[i / 4] = a() * 4294967296 | 0
            }
            return t
        }
    }
      , rr = {};
    rr.ctrGladman = class {
        constructor(t, e) {
            this._prf = t,
            this._initIv = e,
            this._iv = e
        }
        reset() {
            this._iv = this._initIv
        }
        update(t) {
            return this.calculate(this._prf, t, this._iv)
        }
        incWord(t) {
            if ((t >> 24 & 255) === 255) {
                let e = t >> 16 & 255
                  , n = t >> 8 & 255
                  , i = t & 255;
                e === 255 ? (e = 0,
                n === 255 ? (n = 0,
                i === 255 ? i = 0 : ++i) : ++n) : ++e,
                t = 0,
                t += e << 16,
                t += n << 8,
                t += i
            } else
                t += 1 << 24;
            return t
        }
        incCounter(t) {
            (t[0] = this.incWord(t[0])) === 0 && (t[1] = this.incWord(t[1]))
        }
        calculate(t, e, n) {
            let i;
            if (!(i = e.length))
                return [];
            let r = Et.bitLength(e);
            for (let a = 0; a < i; a += 4) {
                this.incCounter(n);
                let o = t.encrypt(n);
                e[a] ^= o[0],
                e[a + 1] ^= o[1],
                e[a + 2] ^= o[2],
                e[a + 3] ^= o[3]
            }
            return Et.clamp(e, r)
        }
    }
    ;
    var We = {
        importKey(t) {
            return new We.hmacSha1(wn.bytes.toBits(t))
        },
        pbkdf2(t, e, n, i) {
            if (n = n || 1e4,
            i < 0 || n < 0)
                throw new Error("invalid params to pbkdf2");
            let r = (i >> 5) + 1 << 2, a, o, l, u, d, h = new ArrayBuffer(r), g = new DataView(h), _ = 0, E = Et;
            for (e = wn.bytes.toBits(e),
            d = 1; _ < (r || 1); d++) {
                for (a = o = t.encrypt(E.concat(e, [d])),
                l = 1; l < n; l++)
                    for (o = t.encrypt(o),
                    u = 0; u < o.length; u++)
                        a[u] ^= o[u];
                for (l = 0; _ < (r || 1) && l < a.length; l++)
                    g.setInt32(_, a[l]),
                    _ += 4
            }
            return h.slice(0, i / 8)
        }
    };
    We.hmacSha1 = class {
        constructor(t) {
            let e = this
              , n = e._hash = nr.sha1
              , i = [[], []]
              , r = n.prototype.blockSize / 32;
            e._baseHash = [new n, new n],
            t.length > r && (t = n.hash(t));
            for (let a = 0; a < r; a++)
                i[0][a] = t[a] ^ 909522486,
                i[1][a] = t[a] ^ 1549556828;
            e._baseHash[0].update(i[0]),
            e._baseHash[1].update(i[1]),
            e._resultHash = new n(e._baseHash[0])
        }
        reset() {
            let t = this;
            t._resultHash = new t._hash(t._baseHash[0]),
            t._updated = !1
        }
        update(t) {
            let e = this;
            e._updated = !0,
            e._resultHash.update(t)
        }
        digest() {
            let t = this
              , e = t._resultHash.finalize()
              , n = new t._hash(t._baseHash[1]).update(e).finalize();
            return t.reset(),
            n
        }
        encrypt(t) {
            if (this._updated)
                throw new Error("encrypt on already updated hmac called!");
            return this.update(t),
            this.digest(t)
        }
    }
    ;
    var Ae = "Invalid pasword"
      , Je = 16
      , Gm = "raw"
      , Ro = {
        name: "PBKDF2"
    }
      , qm = {
        name: "HMAC"
    }
      , Ym = "SHA-1"
      , Km = Object.assign({
        hash: qm
    }, Ro)
      , ko = Object.assign({
        iterations: 1e3,
        hash: {
            name: Ym
        }
    }, Ro)
      , Xm = ["deriveBits"]
      , In = [8, 12, 16]
      , yn = [16, 24, 32]
      , ve = 10
      , Co = [0, 0, 0, 0]
      , ai = typeof crypto < "u"
      , To = ai && typeof crypto.subtle < "u"
      , Wt = wn.bytes
      , Ao = ir.aes
      , Lo = rr.ctrGladman
      , Oo = We.hmacSha1
      , ii = class {
        constructor(e, n, i) {
            Object.assign(this, {
                password: e,
                signed: n,
                strength: i - 1,
                pendingInput: new Uint8Array(0)
            })
        }
        async append(e) {
            let n = this;
            if (n.password) {
                let r = Ft(e, 0, In[n.strength] + 2);
                await zm(n, r, n.password),
                n.password = null,
                n.aesCtrGladman = new Lo(new Ao(n.keys.key),Array.from(Co)),
                n.hmac = new Oo(n.keys.authentication),
                e = Ft(e, In[n.strength] + 2)
            }
            let i = new Uint8Array(e.length - ve - (e.length - ve) % Je);
            return Fo(n, e, i, 0, ve, !0)
        }
        flush() {
            let e = this
              , n = e.pendingInput
              , i = Ft(n, 0, n.length - ve)
              , r = Ft(n, n.length - ve)
              , a = new Uint8Array(0);
            if (i.length) {
                let l = Wt.toBits(i);
                e.hmac.update(l);
                let u = e.aesCtrGladman.update(l);
                a = Wt.fromBits(u)
            }
            let o = !0;
            if (e.signed) {
                let l = Ft(Wt.fromBits(e.hmac.digest()), 0, ve);
                for (let u = 0; u < ve; u++)
                    l[u] != r[u] && (o = !1)
            }
            return {
                valid: o,
                data: a
            }
        }
    }
      , ri = class {
        constructor(e, n) {
            Object.assign(this, {
                password: e,
                strength: n - 1,
                pendingInput: new Uint8Array(0)
            })
        }
        async append(e) {
            let n = this
              , i = new Uint8Array(0);
            n.password && (i = await Wm(n, n.password),
            n.password = null,
            n.aesCtrGladman = new Lo(new Ao(n.keys.key),Array.from(Co)),
            n.hmac = new Oo(n.keys.authentication));
            let r = new Uint8Array(i.length + e.length - e.length % Je);
            return r.set(i, 0),
            Fo(n, e, r, i.length, 0)
        }
        flush() {
            let e = this
              , n = new Uint8Array(0);
            if (e.pendingInput.length) {
                let r = e.aesCtrGladman.update(Wt.toBits(e.pendingInput));
                e.hmac.update(r),
                n = Wt.fromBits(r)
            }
            let i = Ft(Wt.fromBits(e.hmac.digest()), 0, ve);
            return {
                data: ar(n, i),
                signature: i
            }
        }
    }
    ;
    function Fo(t, e, n, i, r, a) {
        let o = e.length - r;
        t.pendingInput.length && (e = ar(t.pendingInput, e),
        n = eh(n, o - o % Je));
        let l;
        for (l = 0; l <= o - Je; l += Je) {
            let u = Wt.toBits(Ft(e, l, l + Je));
            a && t.hmac.update(u);
            let d = t.aesCtrGladman.update(u);
            a || t.hmac.update(d),
            n.set(Wt.fromBits(d), l + i)
        }
        return t.pendingInput = Ft(e, l),
        n
    }
    async function zm(t, e, n) {
        await Do(t, n, Ft(e, 0, In[t.strength]));
        let i = Ft(e, In[t.strength])
          , r = t.keys.passwordVerification;
        if (r[0] != i[0] || r[1] != i[1])
            throw new Error(Ae)
    }
    async function Wm(t, e) {
        let n = Jm(new Uint8Array(In[t.strength]));
        return await Do(t, e, n),
        ar(n, t.keys.passwordVerification)
    }
    async function Do(t, e, n) {
        let i = er(e)
          , r = await Qm(Gm, i, Km, !1, Xm)
          , a = await th(Object.assign({
            salt: n
        }, ko), r, 8 * (yn[t.strength] * 2 + 2))
          , o = new Uint8Array(a);
        t.keys = {
            key: Wt.toBits(Ft(o, 0, yn[t.strength])),
            authentication: Wt.toBits(Ft(o, yn[t.strength], yn[t.strength] * 2)),
            passwordVerification: Ft(o, yn[t.strength] * 2)
        }
    }
    function Jm(t) {
        return ai && typeof crypto.getRandomValues == "function" ? crypto.getRandomValues(t) : So.getRandomValues(t)
    }
    function Qm(t, e, n, i, r) {
        return ai && To && typeof crypto.subtle.importKey == "function" ? crypto.subtle.importKey(t, e, n, i, r) : We.importKey(e)
    }
    async function th(t, e, n) {
        return ai && To && typeof crypto.subtle.deriveBits == "function" ? await crypto.subtle.deriveBits(t, e, n) : We.pbkdf2(e, t.salt, ko.iterations, n)
    }
    function ar(t, e) {
        let n = t;
        return t.length + e.length && (n = new Uint8Array(t.length + e.length),
        n.set(t, 0),
        n.set(e, t.length)),
        n
    }
    function eh(t, e) {
        if (e && e > t.length) {
            let n = t;
            t = new Uint8Array(e),
            t.set(n, 0)
        }
        return t
    }
    function Ft(t, e, n) {
        return t.subarray(e, n)
    }
    var Qe = 12
      , oi = class {
        constructor(e, n) {
            let i = this;
            Object.assign(i, {
                password: e,
                passwordVerification: n
            }),
            Vo(i, e)
        }
        append(e) {
            let n = this;
            if (n.password) {
                let i = No(n, e.subarray(0, Qe));
                if (n.password = null,
                i[Qe - 1] != n.passwordVerification)
                    throw new Error(Ae);
                e = e.subarray(Qe)
            }
            return No(n, e)
        }
        flush() {
            return {
                valid: !0,
                data: new Uint8Array(0)
            }
        }
    }
      , si = class {
        constructor(e, n) {
            let i = this;
            Object.assign(i, {
                password: e,
                passwordVerification: n
            }),
            Vo(i, e)
        }
        append(e) {
            let n = this, i, r;
            if (n.password) {
                n.password = null;
                let a = crypto.getRandomValues(new Uint8Array(Qe));
                a[Qe - 1] = n.passwordVerification,
                i = new Uint8Array(e.length + a.length),
                i.set(Mo(n, a), 0),
                r = Qe
            } else
                i = new Uint8Array(e.length),
                r = 0;
            return i.set(Mo(n, e), r),
            i
        }
        flush() {
            return {
                data: new Uint8Array(0)
            }
        }
    }
    ;
    function No(t, e) {
        let n = new Uint8Array(e.length);
        for (let i = 0; i < e.length; i++)
            n[i] = Uo(t) ^ e[i],
            or(t, n[i]);
        return n
    }
    function Mo(t, e) {
        let n = new Uint8Array(e.length);
        for (let i = 0; i < e.length; i++)
            n[i] = Uo(t) ^ e[i],
            or(t, e[i]);
        return n
    }
    function Vo(t, e) {
        t.keys = [305419896, 591751049, 878082192],
        t.crcKey0 = new ge(t.keys[0]),
        t.crcKey2 = new ge(t.keys[2]);
        for (let n = 0; n < e.length; n++)
            or(t, e.charCodeAt(n))
    }
    function or(t, e) {
        t.crcKey0.append([e]),
        t.keys[0] = ~t.crcKey0.get(),
        t.keys[1] = Bo(t.keys[1] + Po(t.keys[0])),
        t.keys[1] = Bo(Math.imul(t.keys[1], 134775813) + 1),
        t.crcKey2.append([t.keys[1] >>> 24]),
        t.keys[2] = ~t.crcKey2.get()
    }
    function Uo(t) {
        let e = t.keys[2] | 2;
        return Po(Math.imul(e, e ^ 1) >>> 8)
    }
    function Po(t) {
        return t & 255
    }
    function Bo(t) {
        return t & 4294967295
    }
    var lr = "deflate"
      , ci = "inflate"
      , bn = "Invalid signature"
      , sr = class {
        constructor(e, {signature: n, password: i, signed: r, compressed: a, zipCrypto: o, passwordVerification: l, encryptionStrength: u}, {chunkSize: d}) {
            let h = !!i;
            Object.assign(this, {
                signature: n,
                encrypted: h,
                signed: r,
                compressed: a,
                inflate: a && new e({
                    chunkSize: d
                }),
                crc32: r && new ge,
                zipCrypto: o,
                decrypt: h && o ? new oi(i,l) : new ii(i,r,u)
            })
        }
        async append(e) {
            let n = this;
            return n.encrypted && e.length && (e = await n.decrypt.append(e)),
            n.compressed && e.length && (e = await n.inflate.append(e)),
            (!n.encrypted || n.zipCrypto) && n.signed && e.length && n.crc32.append(e),
            e
        }
        async flush() {
            let e = this, n, i = new Uint8Array(0);
            if (e.encrypted) {
                let r = e.decrypt.flush();
                if (!r.valid)
                    throw new Error(bn);
                i = r.data
            }
            if ((!e.encrypted || e.zipCrypto) && e.signed) {
                let r = new DataView(new Uint8Array(4).buffer);
                if (n = e.crc32.get(),
                r.setUint32(0, n),
                e.signature != r.getUint32(0, !1))
                    throw new Error(bn)
            }
            return e.compressed && (i = await e.inflate.append(i) || new Uint8Array(0),
            await e.inflate.flush()),
            {
                data: i,
                signature: n
            }
        }
    }
      , cr = class {
        constructor(e, {encrypted: n, signed: i, compressed: r, level: a, zipCrypto: o, password: l, passwordVerification: u, encryptionStrength: d}, {chunkSize: h}) {
            Object.assign(this, {
                encrypted: n,
                signed: i,
                compressed: r,
                deflate: r && new e({
                    level: a || 5,
                    chunkSize: h
                }),
                crc32: i && new ge,
                zipCrypto: o,
                encrypt: n && o ? new si(l,u) : new ri(l,d)
            })
        }
        async append(e) {
            let n = this
              , i = e;
            return n.compressed && e.length && (i = await n.deflate.append(e)),
            n.encrypted && i.length && (i = await n.encrypt.append(i)),
            (!n.encrypted || n.zipCrypto) && n.signed && e.length && n.crc32.append(e),
            i
        }
        async flush() {
            let e = this, n, i = new Uint8Array(0);
            if (e.compressed && (i = await e.deflate.flush() || new Uint8Array(0)),
            e.encrypted) {
                i = await e.encrypt.append(i);
                let r = e.encrypt.flush();
                n = r.signature;
                let a = new Uint8Array(i.length + r.data.length);
                a.set(i, 0),
                a.set(r.data, i.length),
                i = a
            }
            return (!e.encrypted || e.zipCrypto) && e.signed && (n = e.crc32.get()),
            {
                data: i,
                signature: n
            }
        }
    }
    ;
    function Zo(t, e, n) {
        if (e.codecType.startsWith(lr))
            return new cr(t,e,n);
        if (e.codecType.startsWith(ci))
            return new sr(t,e,n)
    }
    var Ho = "init"
      , $o = "append"
      , ur = "flush"
      , nh = "message"
      , Go = !0
      , li = (t,e,n,i,r,a,o)=>(Object.assign(t, {
        busy: !0,
        codecConstructor: e,
        options: Object.assign({}, n),
        scripts: o,
        terminate() {
            t.worker && !t.busy && (t.worker.terminate(),
            t.interface = null)
        },
        onTaskFinished() {
            t.busy = !1,
            r(t)
        }
    }),
    a ? rh(t, i) : ih(t, i));
    function ih(t, e) {
        let n = Zo(t.codecConstructor, t.options, e);
        return {
            async append(i) {
                try {
                    return await n.append(i)
                } catch (r) {
                    throw t.onTaskFinished(),
                    r
                }
            },
            async flush() {
                try {
                    return await n.flush()
                } finally {
                    t.onTaskFinished()
                }
            },
            abort() {
                t.onTaskFinished()
            }
        }
    }
    function rh(t, e) {
        let n, i = {
            type: "module"
        };
        if (!t.interface) {
            if (!Go)
                t.worker = r(i, e.baseURL);
            else
                try {
                    t.worker = r({}, e.baseURL)
                } catch {
                    Go = !1,
                    t.worker = r(i, e.baseURL)
                }
            t.worker.addEventListener(nh, l, !1),
            t.interface = {
                append(u) {
                    return a({
                        type: $o,
                        data: u
                    })
                },
                flush() {
                    return a({
                        type: ur
                    })
                },
                abort() {
                    t.onTaskFinished()
                }
            }
        }
        return t.interface;
        function r(u, d) {
            let h, g;
            h = t.scripts[0],
            typeof h == "function" && (h = h());
            try {
                g = new URL(h,d)
            } catch {
                g = h
            }
            return new Worker(g,u)
        }
        async function a(u) {
            if (!n) {
                let d = t.options
                  , h = t.scripts.slice(1);
                await o({
                    scripts: h,
                    type: Ho,
                    options: d,
                    config: {
                        chunkSize: e.chunkSize
                    }
                })
            }
            return o(u)
        }
        function o(u) {
            let d = t.worker
              , h = new Promise((g,_)=>n = {
                resolve: g,
                reject: _
            });
            try {
                if (u.data)
                    try {
                        u.data = u.data.buffer,
                        d.postMessage(u, [u.data])
                    } catch {
                        d.postMessage(u)
                    }
                else
                    d.postMessage(u)
            } catch (g) {
                n.reject(g),
                n = null,
                t.onTaskFinished()
            }
            return h
        }
        function l(u) {
            let d = u.data;
            if (n) {
                let h = d.error
                  , g = d.type;
                if (h) {
                    let _ = new Error(h.message);
                    _.stack = h.stack,
                    n.reject(_),
                    n = null,
                    t.onTaskFinished()
                } else if (g == Ho || g == ur || g == $o) {
                    let _ = d.data;
                    g == ur ? (n.resolve({
                        data: new Uint8Array(_),
                        signature: d.signature
                    }),
                    n = null,
                    t.onTaskFinished()) : n.resolve(_ && new Uint8Array(_))
                }
            }
        }
    }
    var Le = []
      , fr = [];
    function dr(t, e, n) {
        let r = !(!e.compressed && !e.signed && !e.encrypted) && (e.useWebWorkers || e.useWebWorkers === void 0 && n.useWebWorkers)
          , a = r && n.workerScripts ? n.workerScripts[e.codecType] : [];
        if (Le.length < n.maxWorkers) {
            let l = {};
            return Le.push(l),
            li(l, t, e, n, o, r, a)
        } else {
            let l = Le.find(u=>!u.busy);
            return l ? (qo(l),
            li(l, t, e, n, o, r, a)) : new Promise(u=>fr.push({
                resolve: u,
                codecConstructor: t,
                options: e,
                webWorker: r,
                scripts: a
            }))
        }
        function o(l) {
            if (fr.length) {
                let[{resolve: u, codecConstructor: d, options: h, webWorker: g, scripts: _}] = fr.splice(0, 1);
                u(li(l, d, h, n, o, g, _))
            } else
                l.worker ? (qo(l),
                Number.isFinite(n.terminateWorkerTimeout) && n.terminateWorkerTimeout >= 0 && (l.terminateTimeout = setTimeout(()=>{
                    Le = Le.filter(u=>u != l),
                    l.terminate()
                }
                , n.terminateWorkerTimeout))) : Le = Le.filter(u=>u != l)
        }
    }
    function qo(t) {
        t.terminateTimeout && (clearTimeout(t.terminateTimeout),
        t.terminateTimeout = null)
    }
    var Yo = t=>{
        if (typeof URL.createObjectURL == "function") {
            let e = ()=>URL.createObjectURL(new Blob([`const{Array:t,Object:e,Math:n,Error:r,Uint8Array:i,Uint16Array:o,Uint32Array:s,Int32Array:f,DataView:c,TextEncoder:l,crypto:u,postMessage:a}=globalThis,w=[];for(let t=0;256>t;t++){let e=t;for(let t=0;8>t;t++)1&e?e=e>>>1^3988292384:e>>>=1;w[t]=e}class h{constructor(t){this.t=t||-1}append(t){let e=0|this.t;for(let n=0,r=0|t.length;r>n;n++)e=e>>>8^w[255&(e^t[n])];this.t=e}get(){return~this.t}}const d={concat(t,e){if(0===t.length||0===e.length)return t.concat(e);const n=t[t.length-1],r=d.i(n);return 32===r?t.concat(e):d.o(e,r,0|n,t.slice(0,t.length-1))},l(t){const e=t.length;if(0===e)return 0;const n=t[e-1];return 32*(e-1)+d.i(n)},u(t,e){if(32*t.length<e)return t;const r=(t=t.slice(0,n.ceil(e/32))).length;return e&=31,r>0&&e&&(t[r-1]=d.h(e,t[r-1]&2147483648>>e-1,1)),t},h:(t,e,n)=>32===t?e:(n?0|e:e<<32-t)+1099511627776*t,i:t=>n.round(t/1099511627776)||32,o(t,e,n,r){for(void 0===r&&(r=[]);e>=32;e-=32)r.push(n),n=0;if(0===e)return r.concat(t);for(let i=0;i<t.length;i++)r.push(n|t[i]>>>e),n=t[i]<<32-e;const i=t.length?t[t.length-1]:0,o=d.i(i);return r.push(d.h(e+o&31,e+o>32?n:r.pop(),1)),r}},p={p:{k(t){const e=d.l(t)/8,n=new i(e);let r;for(let i=0;e>i;i++)0==(3&i)&&(r=t[i/4]),n[i]=r>>>24,r<<=8;return n},g(t){const e=[];let n,r=0;for(n=0;n<t.length;n++)r=r<<8|t[n],3==(3&n)&&(e.push(r),r=0);return 3&n&&e.push(d.h(8*(3&n),r)),e}}},y={v:function(t){t?(this.m=t.m.slice(0),this.S=t.S.slice(0),this._=t._):this.reset()}};y.v.prototype={blockSize:512,reset:function(){const t=this;return t.m=this.I.slice(0),t.S=[],t._=0,t},update:function(t){const e=this;"string"==typeof t&&(t=p.A.g(t));const n=e.S=d.concat(e.S,t),i=e._,o=e._=i+d.l(t);if(o>9007199254740991)throw new r("Cannot hash more than 2^53 - 1 bits");const f=new s(n);let c=0;for(let t=e.blockSize+i-(e.blockSize+i&e.blockSize-1);o>=t;t+=e.blockSize)e.C(f.subarray(16*c,16*(c+1))),c+=1;return n.splice(0,16*c),e},V:function(){const t=this;let e=t.S;const r=t.m;e=d.concat(e,[d.h(1,1)]);for(let t=e.length+2;15&t;t++)e.push(0);for(e.push(n.floor(t._/4294967296)),e.push(0|t._);e.length;)t.C(e.splice(0,16));return t.reset(),r},I:[1732584193,4023233417,2562383102,271733878,3285377520],B:[1518500249,1859775393,2400959708,3395469782],D:(t,e,n,r)=>t>19?t>39?t>59?t>79?void 0:e^n^r:e&n|e&r|n&r:e^n^r:e&n|~e&r,U:(t,e)=>e<<t|e>>>32-t,C:function(e){const r=this,i=r.m,o=t(80);for(let t=0;16>t;t++)o[t]=e[t];let s=i[0],f=i[1],c=i[2],l=i[3],u=i[4];for(let t=0;79>=t;t++){16>t||(o[t]=r.U(1,o[t-3]^o[t-8]^o[t-14]^o[t-16]));const e=r.U(5,s)+r.D(t,f,c,l)+u+o[t]+r.B[n.floor(t/20)]|0;u=l,l=c,c=r.U(30,f),f=s,s=e}i[0]=i[0]+s|0,i[1]=i[1]+f|0,i[2]=i[2]+c|0,i[3]=i[3]+l|0,i[4]=i[4]+u|0}};const b={getRandomValues(t){const e=new s(t.buffer),r=t=>{let e=987654321;const r=4294967295;return()=>(e=36969*(65535&e)+(e>>16)&r,(((e<<16)+(t=18e3*(65535&t)+(t>>16)&r)&r)/4294967296+.5)*(n.random()>.5?1:-1))};for(let i,o=0;o<t.length;o+=4){const t=r(4294967296*(i||n.random()));i=987654071*t(),e[o/4]=4294967296*t()|0}return t}},k={importKey:t=>new k.M(p.p.g(t)),P(t,e,n,i){if(n=n||1e4,0>i||0>n)throw new r("invalid params to pbkdf2");const o=1+(i>>5)<<2;let s,f,l,u,a;const w=new ArrayBuffer(o),h=new c(w);let y=0;const b=d;for(e=p.p.g(e),a=1;(o||1)>y;a++){for(s=f=t.encrypt(b.concat(e,[a])),l=1;n>l;l++)for(f=t.encrypt(f),u=0;u<f.length;u++)s[u]^=f[u];for(l=0;(o||1)>y&&l<s.length;l++)h.setInt32(y,s[l]),y+=4}return w.slice(0,i/8)},M:class{constructor(t){const e=this,n=e.R=y.v,r=[[],[]],i=n.prototype.blockSize/32;e.H=[new n,new n],t.length>i&&(t=n.hash(t));for(let e=0;i>e;e++)r[0][e]=909522486^t[e],r[1][e]=1549556828^t[e];e.H[0].update(r[0]),e.H[1].update(r[1]),e.K=new n(e.H[0])}reset(){const t=this;t.K=new t.R(t.H[0]),t.L=!1}update(t){this.L=!0,this.K.update(t)}digest(){const t=this,e=t.K.V(),n=new t.R(t.H[1]).update(e).V();return t.reset(),n}encrypt(t){if(this.L)throw new r("encrypt on already updated hmac called!");return this.update(t),this.digest(t)}}},g={name:"PBKDF2"},v=e.assign({hash:{name:"HMAC"}},g),m=e.assign({iterations:1e3,hash:{name:"SHA-1"}},g),S=["deriveBits"],z=[8,12,16],_=[16,24,32],I=[0,0,0,0],A=void 0!==u,C=A&&void 0!==u.subtle,V=p.p,B=class{constructor(t){const e=this;e.T=[[[],[],[],[],[]],[[],[],[],[],[]]],e.T[0][0][0]||e.j();const n=e.T[0][4],i=e.T[1],o=t.length;let s,f,c,l=1;if(4!==o&&6!==o&&8!==o)throw new r("invalid aes key size");for(e.B=[f=t.slice(0),c=[]],s=o;4*o+28>s;s++){let t=f[s-1];(s%o==0||8===o&&s%o==4)&&(t=n[t>>>24]<<24^n[t>>16&255]<<16^n[t>>8&255]<<8^n[255&t],s%o==0&&(t=t<<8^t>>>24^l<<24,l=l<<1^283*(l>>7))),f[s]=f[s-o]^t}for(let t=0;s;t++,s--){const e=f[3&t?s:s-4];c[t]=4>=s||4>t?e:i[0][n[e>>>24]]^i[1][n[e>>16&255]]^i[2][n[e>>8&255]]^i[3][n[255&e]]}}encrypt(t){return this.F(t,0)}decrypt(t){return this.F(t,1)}j(){const t=this.T[0],e=this.T[1],n=t[4],r=e[4],i=[],o=[];let s,f,c,l;for(let t=0;256>t;t++)o[(i[t]=t<<1^283*(t>>7))^t]=t;for(let u=s=0;!n[u];u^=f||1,s=o[s]||1){let o=s^s<<1^s<<2^s<<3^s<<4;o=o>>8^255&o^99,n[u]=o,r[o]=u,l=i[c=i[f=i[u]]];let a=16843009*l^65537*c^257*f^16843008*u,w=257*i[o]^16843008*o;for(let n=0;4>n;n++)t[n][u]=w=w<<24^w>>>8,e[n][o]=a=a<<24^a>>>8}for(let n=0;5>n;n++)t[n]=t[n].slice(0),e[n]=e[n].slice(0)}F(t,e){if(4!==t.length)throw new r("invalid aes block size");const n=this.B[e],i=n.length/4-2,o=[0,0,0,0],s=this.T[e],f=s[0],c=s[1],l=s[2],u=s[3],a=s[4];let w,h,d,p=t[0]^n[0],y=t[e?3:1]^n[1],b=t[2]^n[2],k=t[e?1:3]^n[3],g=4;for(let t=0;i>t;t++)w=f[p>>>24]^c[y>>16&255]^l[b>>8&255]^u[255&k]^n[g],h=f[y>>>24]^c[b>>16&255]^l[k>>8&255]^u[255&p]^n[g+1],d=f[b>>>24]^c[k>>16&255]^l[p>>8&255]^u[255&y]^n[g+2],k=f[k>>>24]^c[p>>16&255]^l[y>>8&255]^u[255&b]^n[g+3],g+=4,p=w,y=h,b=d;for(let t=0;4>t;t++)o[e?3&-t:t]=a[p>>>24]<<24^a[y>>16&255]<<16^a[b>>8&255]<<8^a[255&k]^n[g++],w=p,p=y,y=b,b=k,k=w;return o}},E=class{constructor(t,e){this.O=t,this.W=e,this.q=e}reset(){this.q=this.W}update(t){return this.G(this.O,t,this.q)}J(t){if(255==(t>>24&255)){let e=t>>16&255,n=t>>8&255,r=255&t;255===e?(e=0,255===n?(n=0,255===r?r=0:++r):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=r}else t+=1<<24;return t}N(t){0===(t[0]=this.J(t[0]))&&(t[1]=this.J(t[1]))}G(t,e,n){let r;if(!(r=e.length))return[];const i=d.l(e);for(let i=0;r>i;i+=4){this.N(n);const r=t.encrypt(n);e[i]^=r[0],e[i+1]^=r[1],e[i+2]^=r[2],e[i+3]^=r[3]}return d.u(e,i)}},D=k.M;class U{constructor(t,n,r){e.assign(this,{password:t,signed:n,X:r-1,Y:new i(0)})}async append(e){const n=this;if(n.password){const i=K(e,0,z[n.X]+2);await(async(t,e,n)=>{await R(t,n,K(e,0,z[t.X]));const i=K(e,z[t.X]),o=t.keys.passwordVerification;if(o[0]!=i[0]||o[1]!=i[1])throw new r("Invalid pasword")})(n,i,n.password),n.password=null,n.Z=new E(new B(n.keys.key),t.from(I)),n.$=new D(n.keys.tt),e=K(e,z[n.X]+2)}return P(n,e,new i(e.length-10-(e.length-10)%16),0,10,!0)}flush(){const t=this,e=t.Y,n=K(e,0,e.length-10),r=K(e,e.length-10);let o=new i(0);if(n.length){const e=V.g(n);t.$.update(e);const r=t.Z.update(e);o=V.k(r)}let s=!0;if(t.signed){const e=K(V.k(t.$.digest()),0,10);for(let t=0;10>t;t++)e[t]!=r[t]&&(s=!1)}return{valid:s,data:o}}}class M{constructor(t,n){e.assign(this,{password:t,X:n-1,Y:new i(0)})}async append(e){const n=this;let r=new i(0);n.password&&(r=await(async(t,e)=>{const n=(r=new i(z[t.X]),A&&"function"==typeof u.getRandomValues?u.getRandomValues(r):b.getRandomValues(r));var r;return await R(t,e,n),H(n,t.keys.passwordVerification)})(n,n.password),n.password=null,n.Z=new E(new B(n.keys.key),t.from(I)),n.$=new D(n.keys.tt));const o=new i(r.length+e.length-e.length%16);return o.set(r,0),P(n,e,o,r.length,0)}flush(){const t=this;let e=new i(0);if(t.Y.length){const n=t.Z.update(V.g(t.Y));t.$.update(n),e=V.k(n)}const n=K(V.k(t.$.digest()),0,10);return{data:H(e,n),signature:n}}}function P(t,e,n,r,o,s){const f=e.length-o;let c;for(t.Y.length&&(e=H(t.Y,e),n=((t,e)=>{if(e&&e>t.length){const n=t;(t=new i(e)).set(n,0)}return t})(n,f-f%16)),c=0;f-16>=c;c+=16){const i=V.g(K(e,c,c+16));s&&t.$.update(i);const o=t.Z.update(i);s||t.$.update(o),n.set(V.k(o),c+r)}return t.Y=K(e,c),n}async function R(t,n,r){const o=(t=>{if(void 0===l){const e=new i((t=unescape(encodeURIComponent(t))).length);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n);return e}return(new l).encode(t)})(n),s=await((t,e,n,r,i)=>A&&C&&"function"==typeof u.subtle.importKey?u.subtle.importKey("raw",e,n,!1,i):k.importKey(e))(0,o,v,0,S),f=await(async(t,e,n)=>A&&C&&"function"==typeof u.subtle.deriveBits?await u.subtle.deriveBits(t,e,n):k.P(e,t.salt,m.iterations,n))(e.assign({salt:r},m),s,8*(2*_[t.X]+2)),c=new i(f);t.keys={key:V.g(K(c,0,_[t.X])),tt:V.g(K(c,_[t.X],2*_[t.X])),passwordVerification:K(c,2*_[t.X])}}function H(t,e){let n=t;return t.length+e.length&&(n=new i(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function K(t,e,n){return t.subarray(e,n)}class L{constructor(t,n){e.assign(this,{password:t,passwordVerification:n}),F(this,t)}append(t){const e=this;if(e.password){const n=j(e,t.subarray(0,12));if(e.password=null,n[11]!=e.passwordVerification)throw new r("Invalid pasword");t=t.subarray(12)}return j(e,t)}flush(){return{valid:!0,data:new i(0)}}}class T{constructor(t,n){e.assign(this,{password:t,passwordVerification:n}),F(this,t)}append(t){const e=this;let n,r;if(e.password){e.password=null;const o=u.getRandomValues(new i(12));o[11]=e.passwordVerification,n=new i(t.length+o.length),n.set(x(e,o),0),r=12}else n=new i(t.length),r=0;return n.set(x(e,t),r),n}flush(){return{data:new i(0)}}}function j(t,e){const n=new i(e.length);for(let r=0;r<e.length;r++)n[r]=W(t)^e[r],O(t,n[r]);return n}function x(t,e){const n=new i(e.length);for(let r=0;r<e.length;r++)n[r]=W(t)^e[r],O(t,e[r]);return n}function F(t,e){t.keys=[305419896,591751049,878082192],t.et=new h(t.keys[0]),t.nt=new h(t.keys[2]);for(let n=0;n<e.length;n++)O(t,e.charCodeAt(n))}function O(t,e){t.et.append([e]),t.keys[0]=~t.et.get(),t.keys[1]=G(t.keys[1]+q(t.keys[0])),t.keys[1]=G(n.imul(t.keys[1],134775813)+1),t.nt.append([t.keys[1]>>>24]),t.keys[2]=~t.nt.get()}function W(t){const e=2|t.keys[2];return q(n.imul(e,1^e)>>>8)}function q(t){return 255&t}function G(t){return 4294967295&t}class J{constructor(t,{signature:n,password:r,signed:i,compressed:o,zipCrypto:s,passwordVerification:f,encryptionStrength:c},{rt:l}){const u=!!r;e.assign(this,{signature:n,encrypted:u,signed:i,compressed:o,it:o&&new t({rt:l}),ot:i&&new h,zipCrypto:s,decrypt:u&&s?new L(r,f):new U(r,i,c)})}async append(t){const e=this;return e.encrypted&&t.length&&(t=await e.decrypt.append(t)),e.compressed&&t.length&&(t=await e.it.append(t)),(!e.encrypted||e.zipCrypto)&&e.signed&&t.length&&e.ot.append(t),t}async flush(){const t=this;let e,n=new i(0);if(t.encrypted){const e=t.decrypt.flush();if(!e.valid)throw new r("Invalid signature");n=e.data}if((!t.encrypted||t.zipCrypto)&&t.signed){const n=new c(new i(4).buffer);if(e=t.ot.get(),n.setUint32(0,e),t.signature!=n.getUint32(0,!1))throw new r("Invalid signature")}return t.compressed&&(n=await t.it.append(n)||new i(0),await t.it.flush()),{data:n,signature:e}}}class N{constructor(t,{encrypted:n,signed:r,compressed:i,level:o,zipCrypto:s,password:f,passwordVerification:c,encryptionStrength:l},{rt:u}){e.assign(this,{encrypted:n,signed:r,compressed:i,st:i&&new t({level:o||5,rt:u}),ot:r&&new h,zipCrypto:s,encrypt:n&&s?new T(f,c):new M(f,l)})}async append(t){const e=this;let n=t;return e.compressed&&t.length&&(n=await e.st.append(t)),e.encrypted&&n.length&&(n=await e.encrypt.append(n)),(!e.encrypted||e.zipCrypto)&&e.signed&&t.length&&e.ot.append(t),n}async flush(){const t=this;let e,n=new i(0);if(t.compressed&&(n=await t.st.flush()||new i(0)),t.encrypted){n=await t.encrypt.append(n);const r=t.encrypt.flush();e=r.signature;const o=new i(n.length+r.data.length);o.set(n,0),o.set(r.data,n.length),n=o}return t.encrypted&&!t.zipCrypto||!t.signed||(e=t.ot.get()),{data:n,signature:e}}}const Q={init(t){t.scripts&&t.scripts.length&&importScripts.apply(void 0,t.scripts);const e=t.options;let n;self.initCodec&&self.initCodec(),e.codecType.startsWith("deflate")?n=self.Deflate:e.codecType.startsWith("inflate")&&(n=self.Inflate),X=((t,e,n)=>e.codecType.startsWith("deflate")?new N(t,e,n):e.codecType.startsWith("inflate")?new J(t,e,n):void 0)(n,e,t.config)},append:async t=>({data:await X.append(t.data)}),flush:()=>X.flush()};let X;function Y(e){return Z(e.map((([e,n])=>new t(e).fill(n,0,e))))}function Z(e){return e.reduce(((e,n)=>e.concat(t.isArray(n)?Z(n):n)),[])}addEventListener("message",(async t=>{const e=t.data,n=e.type,r=Q[n];if(r)try{e.data&&(e.data=new i(e.data));const t=await r(e)||{};if(t.type=n,t.data)try{t.data=t.data.buffer,a(t,[t.data])}catch(e){a(t)}else a(t)}catch(t){a({type:n,error:{message:t.message,stack:t.stack}})}}));const $=[0,1,2,3].concat(...Y([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function tt(){const t=this;function e(t,e){let n=0;do{n|=1&t,t>>>=1,n<<=1}while(--e>0);return n>>>1}t.ft=r=>{const i=t.ct,o=t.ut.lt,s=t.ut.wt;let f,c,l,u=-1;for(r.ht=0,r.dt=573,f=0;s>f;f++)0!==i[2*f]?(r.yt[++r.ht]=u=f,r.bt[f]=0):i[2*f+1]=0;for(;2>r.ht;)l=r.yt[++r.ht]=2>u?++u:0,i[2*l]=1,r.bt[l]=0,r.kt--,o&&(r.gt-=o[2*l+1]);for(t.vt=u,f=n.floor(r.ht/2);f>=1;f--)r.St(i,f);l=s;do{f=r.yt[1],r.yt[1]=r.yt[r.ht--],r.St(i,1),c=r.yt[1],r.yt[--r.dt]=f,r.yt[--r.dt]=c,i[2*l]=i[2*f]+i[2*c],r.bt[l]=n.max(r.bt[f],r.bt[c])+1,i[2*f+1]=i[2*c+1]=l,r.yt[1]=l++,r.St(i,1)}while(r.ht>=2);r.yt[--r.dt]=r.yt[1],(e=>{const n=t.ct,r=t.ut.lt,i=t.ut.zt,o=t.ut._t,s=t.ut.It;let f,c,l,u,a,w,h=0;for(u=0;15>=u;u++)e.At[u]=0;for(n[2*e.yt[e.dt]+1]=0,f=e.dt+1;573>f;f++)c=e.yt[f],u=n[2*n[2*c+1]+1]+1,u>s&&(u=s,h++),n[2*c+1]=u,c>t.vt||(e.At[u]++,a=0,o>c||(a=i[c-o]),w=n[2*c],e.kt+=w*(u+a),r&&(e.gt+=w*(r[2*c+1]+a)));if(0!==h){do{for(u=s-1;0===e.At[u];)u--;e.At[u]--,e.At[u+1]+=2,e.At[s]--,h-=2}while(h>0);for(u=s;0!==u;u--)for(c=e.At[u];0!==c;)l=e.yt[--f],l>t.vt||(n[2*l+1]!=u&&(e.kt+=(u-n[2*l+1])*n[2*l],n[2*l+1]=u),c--)}})(r),((t,n,r)=>{const i=[];let o,s,f,c=0;for(o=1;15>=o;o++)i[o]=c=c+r[o-1]<<1;for(s=0;n>=s;s++)f=t[2*s+1],0!==f&&(t[2*s]=e(i[f]++,f))})(i,t.vt,r.At)}}function et(t,e,n,r,i){const o=this;o.lt=t,o.zt=e,o._t=n,o.wt=r,o.It=i}tt.Ct=[0,1,2,3,4,5,6,7].concat(...Y([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),tt.Vt=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],tt.Bt=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],tt.Et=t=>256>t?$[t]:$[256+(t>>>7)],tt.Dt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],tt.Ut=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt.Mt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],tt.Pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const nt=Y([[144,8],[112,9],[24,7],[8,8]]);et.Rt=Z([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((t,e)=>[t,nt[e]])));const rt=Y([[30,5]]);function it(t,e,n,r,i){const o=this;o.Ht=t,o.Kt=e,o.Lt=n,o.Tt=r,o.jt=i}et.xt=Z([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((t,e)=>[t,rt[e]]))),et.Ft=new et(et.Rt,tt.Dt,257,286,15),et.Ot=new et(et.xt,tt.Ut,0,30,15),et.Wt=new et(null,tt.Mt,0,19,7);const ot=[new it(0,0,0,0,0),new it(4,4,8,4,1),new it(4,5,16,8,1),new it(4,6,32,32,1),new it(4,4,16,16,2),new it(8,16,32,32,2),new it(8,16,128,128,2),new it(8,32,128,256,2),new it(32,128,258,1024,2),new it(32,258,258,4096,2)],st=["need dictionary","stream end","","","stream error","data error","","buffer error","",""];function ft(t,e,n,r){const i=t[2*e],o=t[2*n];return o>i||i==o&&r[e]<=r[n]}function ct(){const t=this;let e,r,s,f,c,l,u,a,w,h,d,p,y,b,k,g,v,m,S,z,_,I,A,C,V,B,E,D,U,M,P,R,H;const K=new tt,L=new tt,T=new tt;let j,x,F,O,W,q;function G(){let e;for(e=0;286>e;e++)P[2*e]=0;for(e=0;30>e;e++)R[2*e]=0;for(e=0;19>e;e++)H[2*e]=0;P[512]=1,t.kt=t.gt=0,x=F=0}function J(t,e){let n,r=-1,i=t[1],o=0,s=7,f=4;0===i&&(s=138,f=3),t[2*(e+1)+1]=65535;for(let c=0;e>=c;c++)n=i,i=t[2*(c+1)+1],++o<s&&n==i||(f>o?H[2*n]+=o:0!==n?(n!=r&&H[2*n]++,H[32]++):o>10?H[36]++:H[34]++,o=0,r=n,0===i?(s=138,f=3):n==i?(s=6,f=3):(s=7,f=4))}function N(e){t.qt[t.pending++]=e}function Q(t){N(255&t),N(t>>>8&255)}function X(t,e){let n;const r=e;q>16-r?(n=t,W|=n<<q&65535,Q(W),W=n>>>16-q,q+=r-16):(W|=t<<q&65535,q+=r)}function Y(t,e){const n=2*t;X(65535&e[n],65535&e[n+1])}function Z(t,e){let n,r,i=-1,o=t[1],s=0,f=7,c=4;for(0===o&&(f=138,c=3),n=0;e>=n;n++)if(r=o,o=t[2*(n+1)+1],++s>=f||r!=o){if(c>s)do{Y(r,H)}while(0!=--s);else 0!==r?(r!=i&&(Y(r,H),s--),Y(16,H),X(s-3,2)):s>10?(Y(18,H),X(s-11,7)):(Y(17,H),X(s-3,3));s=0,i=r,0===o?(f=138,c=3):r==o?(f=6,c=3):(f=7,c=4)}}function $(){16==q?(Q(W),W=0,q=0):8>q||(N(255&W),W>>>=8,q-=8)}function nt(e,r){let i,o,s;if(t.Gt[x]=e,t.Jt[x]=255&r,x++,0===e?P[2*r]++:(F++,e--,P[2*(tt.Ct[r]+256+1)]++,R[2*tt.Et(e)]++),0==(8191&x)&&E>2){for(i=8*x,o=_-v,s=0;30>s;s++)i+=R[2*s]*(5+tt.Ut[s]);if(i>>>=3,F<n.floor(x/2)&&i<n.floor(o/2))return!0}return x==j-1}function rt(e,n){let r,i,o,s,f=0;if(0!==x)do{r=t.Gt[f],i=t.Jt[f],f++,0===r?Y(i,e):(o=tt.Ct[i],Y(o+256+1,e),s=tt.Dt[o],0!==s&&(i-=tt.Vt[o],X(i,s)),r--,o=tt.Et(r),Y(o,n),s=tt.Ut[o],0!==s&&(r-=tt.Bt[o],X(r,s)))}while(x>f);Y(256,e),O=e[513]}function it(){q>8?Q(W):q>0&&N(255&W),W=0,q=0}function ct(e,n,r){X(0+(r?1:0),3),((e,n)=>{it(),O=8,Q(n),Q(~n),t.qt.set(a.subarray(e,e+n),t.pending),t.pending+=n})(e,n)}function lt(n){((e,n,r)=>{let i,o,s=0;E>0?(K.ft(t),L.ft(t),s=(()=>{let e;for(J(P,K.vt),J(R,L.vt),T.ft(t),e=18;e>=3&&0===H[2*tt.Pt[e]+1];e--);return t.kt+=14+3*(e+1),e})(),i=t.kt+3+7>>>3,o=t.gt+3+7>>>3,o>i||(i=o)):i=o=n+5,n+4>i||-1==e?o==i?(X(2+(r?1:0),3),rt(et.Rt,et.xt)):(X(4+(r?1:0),3),((t,e,n)=>{let r;for(X(t-257,5),X(e-1,5),X(n-4,4),r=0;n>r;r++)X(H[2*tt.Pt[r]+1],3);Z(P,t-1),Z(R,e-1)})(K.vt+1,L.vt+1,s+1),rt(P,R)):ct(e,n,r),G(),r&&it()})(0>v?-1:v,_-v,n),v=_,e.Nt()}function ut(){let t,n,r,i;do{if(i=w-A-_,0===i&&0===_&&0===A)i=c;else if(-1==i)i--;else if(_>=c+c-262){a.set(a.subarray(c,c+c),0),I-=c,_-=c,v-=c,t=y,r=t;do{n=65535&d[--r],d[r]=c>n?0:n-c}while(0!=--t);t=c,r=t;do{n=65535&h[--r],h[r]=c>n?0:n-c}while(0!=--t);i+=c}if(0===e.Qt)return;t=e.Xt(a,_+A,i),A+=t,3>A||(p=255&a[_],p=(p<<g^255&a[_+1])&k)}while(262>A&&0!==e.Qt)}function at(t){let e,n,r=V,i=_,o=C;const s=_>c-262?_-(c-262):0;let f=M;const l=u,w=_+258;let d=a[i+o-1],p=a[i+o];U>C||(r>>=2),f>A&&(f=A);do{if(e=t,a[e+o]==p&&a[e+o-1]==d&&a[e]==a[i]&&a[++e]==a[i+1]){i+=2,e++;do{}while(a[++i]==a[++e]&&a[++i]==a[++e]&&a[++i]==a[++e]&&a[++i]==a[++e]&&a[++i]==a[++e]&&a[++i]==a[++e]&&a[++i]==a[++e]&&a[++i]==a[++e]&&w>i);if(n=258-(w-i),i=w-258,n>o){if(I=t,o=n,n>=f)break;d=a[i+o-1],p=a[i+o]}}}while((t=65535&h[t&l])>s&&0!=--r);return o>A?A:o}t.bt=[],t.At=[],t.yt=[],P=[],R=[],H=[],t.St=(e,n)=>{const r=t.yt,i=r[n];let o=n<<1;for(;o<=t.ht&&(o<t.ht&&ft(e,r[o+1],r[o],t.bt)&&o++,!ft(e,i,r[o],t.bt));)r[n]=r[o],n=o,o<<=1;r[n]=i},t.Yt=(e,S,I,x,F,J)=>(x||(x=8),F||(F=8),J||(J=0),e.Zt=null,-1==S&&(S=6),1>F||F>9||8!=x||9>I||I>15||0>S||S>9||0>J||J>2?-2:(e.$t=t,l=I,c=1<<l,u=c-1,b=F+7,y=1<<b,k=y-1,g=n.floor((b+3-1)/3),a=new i(2*c),h=[],d=[],j=1<<F+6,t.qt=new i(4*j),s=4*j,t.Gt=new o(j),t.Jt=new i(j),E=S,D=J,(e=>(e.te=e.ee=0,e.Zt=null,t.pending=0,t.ne=0,r=113,f=0,K.ct=P,K.ut=et.Ft,L.ct=R,L.ut=et.Ot,T.ct=H,T.ut=et.Wt,W=0,q=0,O=8,G(),(()=>{w=2*c,d[y-1]=0;for(let t=0;y-1>t;t++)d[t]=0;B=ot[E].Kt,U=ot[E].Ht,M=ot[E].Lt,V=ot[E].Tt,_=0,v=0,A=0,m=C=2,z=0,p=0})(),0))(e))),t.re=()=>42!=r&&113!=r&&666!=r?-2:(t.Jt=null,t.Gt=null,t.qt=null,d=null,h=null,a=null,t.$t=null,113==r?-3:0),t.ie=(t,e,n)=>{let r=0;return-1==e&&(e=6),0>e||e>9||0>n||n>2?-2:(ot[E].jt!=ot[e].jt&&0!==t.te&&(r=t.st(1)),E!=e&&(E=e,B=ot[E].Kt,U=ot[E].Ht,M=ot[E].Lt,V=ot[E].Tt),D=n,r)},t.oe=(t,e,n)=>{let i,o=n,s=0;if(!e||42!=r)return-2;if(3>o)return 0;for(o>c-262&&(o=c-262,s=n-o),a.set(e.subarray(s,s+o),0),_=o,v=o,p=255&a[0],p=(p<<g^255&a[1])&k,i=0;o-3>=i;i++)p=(p<<g^255&a[i+2])&k,h[i&u]=d[p],d[p]=i;return 0},t.st=(n,i)=>{let o,w,b,V,U;if(i>4||0>i)return-2;if(!n.se||!n.fe&&0!==n.Qt||666==r&&4!=i)return n.Zt=st[4],-2;if(0===n.ce)return n.Zt=st[7],-5;var M;if(e=n,V=f,f=i,42==r&&(w=8+(l-8<<4)<<8,b=(E-1&255)>>1,b>3&&(b=3),w|=b<<6,0!==_&&(w|=32),w+=31-w%31,r=113,N((M=w)>>8&255),N(255&M)),0!==t.pending){if(e.Nt(),0===e.ce)return f=-1,0}else if(0===e.Qt&&V>=i&&4!=i)return e.Zt=st[7],-5;if(666==r&&0!==e.Qt)return n.Zt=st[7],-5;if(0!==e.Qt||0!==A||0!=i&&666!=r){switch(U=-1,ot[E].jt){case 0:U=(t=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=A){if(ut(),0===A&&0==t)return 0;if(0===A)break}if(_+=A,A=0,n=v+r,(0===_||_>=n)&&(A=_-n,_=n,lt(!1),0===e.ce))return 0;if(_-v>=c-262&&(lt(!1),0===e.ce))return 0}return lt(4==t),0===e.ce?4==t?2:0:4==t?3:1})(i);break;case 1:U=(t=>{let n,r=0;for(;;){if(262>A){if(ut(),262>A&&0==t)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&a[_+2])&k,r=65535&d[p],h[_&u]=d[p],d[p]=_),0===r||(_-r&65535)>c-262||2!=D&&(m=at(r)),3>m)n=nt(0,255&a[_]),A--,_++;else if(n=nt(_-I,m-3),A-=m,m>B||3>A)_+=m,m=0,p=255&a[_],p=(p<<g^255&a[_+1])&k;else{m--;do{_++,p=(p<<g^255&a[_+2])&k,r=65535&d[p],h[_&u]=d[p],d[p]=_}while(0!=--m);_++}if(n&&(lt(!1),0===e.ce))return 0}return lt(4==t),0===e.ce?4==t?2:0:4==t?3:1})(i);break;case 2:U=(t=>{let n,r,i=0;for(;;){if(262>A){if(ut(),262>A&&0==t)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&a[_+2])&k,i=65535&d[p],h[_&u]=d[p],d[p]=_),C=m,S=I,m=2,0!==i&&B>C&&c-262>=(_-i&65535)&&(2!=D&&(m=at(i)),5>=m&&(1==D||3==m&&_-I>4096)&&(m=2)),3>C||m>C)if(0!==z){if(n=nt(0,255&a[_-1]),n&&lt(!1),_++,A--,0===e.ce)return 0}else z=1,_++,A--;else{r=_+A-3,n=nt(_-1-S,C-3),A-=C-1,C-=2;do{++_>r||(p=(p<<g^255&a[_+2])&k,i=65535&d[p],h[_&u]=d[p],d[p]=_)}while(0!=--C);if(z=0,m=2,_++,n&&(lt(!1),0===e.ce))return 0}}return 0!==z&&(n=nt(0,255&a[_-1]),z=0),lt(4==t),0===e.ce?4==t?2:0:4==t?3:1})(i)}if(2!=U&&3!=U||(r=666),0==U||2==U)return 0===e.ce&&(f=-1),0;if(1==U){if(1==i)X(2,3),Y(256,et.Rt),$(),9>1+O+10-q&&(X(2,3),Y(256,et.Rt),$()),O=7;else if(ct(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(e.Nt(),0===e.ce)return f=-1,0}}return 4!=i?0:1}}function lt(){const t=this;t.le=0,t.ue=0,t.Qt=0,t.te=0,t.ce=0,t.ee=0}function ut(t){const e=new lt,o=(s=t&&t.rt?t.rt:65536)+5*(n.floor(s/16383)+1);var s;const f=new i(o);let c=t?t.level:-1;void 0===c&&(c=-1),e.Yt(c),e.se=f,this.append=(t,n)=>{let s,c,l=0,u=0,a=0;const w=[];if(t.length){e.le=0,e.fe=t,e.Qt=t.length;do{if(e.ue=0,e.ce=o,s=e.st(0),0!=s)throw new r("deflating: "+e.Zt);e.ue&&(e.ue==o?w.push(new i(f)):w.push(f.slice(0,e.ue))),a+=e.ue,n&&e.le>0&&e.le!=l&&(n(e.le),l=e.le)}while(e.Qt>0||0===e.ce);return w.length>1?(c=new i(a),w.forEach((t=>{c.set(t,u),u+=t.length}))):c=w[0]||new i(0),c}},this.flush=()=>{let t,n,s=0,c=0;const l=[];do{if(e.ue=0,e.ce=o,t=e.st(4),1!=t&&0!=t)throw new r("deflating: "+e.Zt);o-e.ce>0&&l.push(f.slice(0,e.ue)),c+=e.ue}while(e.Qt>0||0===e.ce);return e.re(),n=new i(c),l.forEach((t=>{n.set(t,s),s+=t.length})),n}}lt.prototype={Yt:function(t,e){const n=this;return n.$t=new ct,e||(e=15),n.$t.Yt(n,t,e)},st:function(t){const e=this;return e.$t?e.$t.st(e,t):-2},re:function(){const t=this;if(!t.$t)return-2;const e=t.$t.re();return t.$t=null,e},ie:function(t,e){const n=this;return n.$t?n.$t.ie(n,t,e):-2},oe:function(t,e){const n=this;return n.$t?n.$t.oe(n,t,e):-2},Xt:function(t,e,n){const r=this;let i=r.Qt;return i>n&&(i=n),0===i?0:(r.Qt-=i,t.set(r.fe.subarray(r.le,r.le+i),e),r.le+=i,r.te+=i,i)},Nt:function(){const t=this;let e=t.$t.pending;e>t.ce&&(e=t.ce),0!==e&&(t.se.set(t.$t.qt.subarray(t.$t.ne,t.$t.ne+e),t.ue),t.ue+=e,t.$t.ne+=e,t.ee+=e,t.ce-=e,t.$t.pending-=e,0===t.$t.pending&&(t.$t.ne=0))}};const at=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],wt=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],ht=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],dt=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],pt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],yt=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],bt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function kt(){let t,e,n,r,i,o;function s(t,e,s,f,c,l,u,a,w,h,d){let p,y,b,k,g,v,m,S,z,_,I,A,C,V,B;_=0,g=s;do{n[t[e+_]]++,_++,g--}while(0!==g);if(n[0]==s)return u[0]=-1,a[0]=0,0;for(S=a[0],v=1;15>=v&&0===n[v];v++);for(m=v,v>S&&(S=v),g=15;0!==g&&0===n[g];g--);for(b=g,S>g&&(S=g),a[0]=S,V=1<<v;g>v;v++,V<<=1)if(0>(V-=n[v]))return-3;if(0>(V-=n[g]))return-3;for(n[g]+=V,o[1]=v=0,_=1,C=2;0!=--g;)o[C]=v+=n[_],C++,_++;g=0,_=0;do{0!==(v=t[e+_])&&(d[o[v]++]=g),_++}while(++g<s);for(s=o[b],o[0]=g=0,_=0,k=-1,A=-S,i[0]=0,I=0,B=0;b>=m;m++)for(p=n[m];0!=p--;){for(;m>A+S;){if(k++,A+=S,B=b-A,B=B>S?S:B,(y=1<<(v=m-A))>p+1&&(y-=p+1,C=m,B>v))for(;++v<B&&(y<<=1)>n[++C];)y-=n[C];if(B=1<<v,h[0]+B>1440)return-3;i[k]=I=h[0],h[0]+=B,0!==k?(o[k]=g,r[0]=v,r[1]=S,v=g>>>A-S,r[2]=I-i[k-1]-v,w.set(r,3*(i[k-1]+v))):u[0]=I}for(r[1]=m-A,s>_?d[_]<f?(r[0]=256>d[_]?0:96,r[2]=d[_++]):(r[0]=l[d[_]-f]+16+64,r[2]=c[d[_++]-f]):r[0]=192,y=1<<m-A,v=g>>>A;B>v;v+=y)w.set(r,3*(I+v));for(v=1<<m-1;0!=(g&v);v>>>=1)g^=v;for(g^=v,z=(1<<A)-1;(g&z)!=o[k];)k--,A-=S,z=(1<<A)-1}return 0!==V&&1!=b?-5:0}function c(s){let c;for(t||(t=[],e=[],n=new f(16),r=[],i=new f(15),o=new f(16)),e.length<s&&(e=[]),c=0;s>c;c++)e[c]=0;for(c=0;16>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;i.set(n.subarray(0,15),0),o.set(n.subarray(0,16),0)}this.ae=(n,r,i,o,f)=>{let l;return c(19),t[0]=0,l=s(n,0,19,19,null,null,i,r,o,t,e),-3==l?f.Zt="oversubscribed dynamic bit lengths tree":-5!=l&&0!==r[0]||(f.Zt="incomplete dynamic bit lengths tree",l=-3),l},this.we=(n,r,i,o,f,l,u,a,w)=>{let h;return c(288),t[0]=0,h=s(i,0,n,257,dt,pt,l,o,a,t,e),0!=h||0===o[0]?(-3==h?w.Zt="oversubscribed literal/length tree":-4!=h&&(w.Zt="incomplete literal/length tree",h=-3),h):(c(288),h=s(i,n,r,0,yt,bt,u,f,a,t,e),0!=h||0===f[0]&&n>257?(-3==h?w.Zt="oversubscribed distance tree":-5==h?(w.Zt="incomplete distance tree",h=-3):-4!=h&&(w.Zt="empty distance tree with lengths",h=-3),h):0)}}function gt(){const t=this;let e,n,r,i,o=0,s=0,f=0,c=0,l=0,u=0,a=0,w=0,h=0,d=0;function p(t,e,n,r,i,o,s,f){let c,l,u,a,w,h,d,p,y,b,k,g,v,m,S,z;d=f.le,p=f.Qt,w=s.he,h=s.de,y=s.write,b=y<s.read?s.read-y-1:s.end-y,k=at[t],g=at[e];do{for(;20>h;)p--,w|=(255&f.pe(d++))<<h,h+=8;if(c=w&k,l=n,u=r,z=3*(u+c),0!==(a=l[z]))for(;;){if(w>>=l[z+1],h-=l[z+1],0!=(16&a)){for(a&=15,v=l[z+2]+(w&at[a]),w>>=a,h-=a;15>h;)p--,w|=(255&f.pe(d++))<<h,h+=8;for(c=w&g,l=i,u=o,z=3*(u+c),a=l[z];;){if(w>>=l[z+1],h-=l[z+1],0!=(16&a)){for(a&=15;a>h;)p--,w|=(255&f.pe(d++))<<h,h+=8;if(m=l[z+2]+(w&at[a]),w>>=a,h-=a,b-=v,m>y){S=y-m;do{S+=s.end}while(0>S);if(a=s.end-S,v>a){if(v-=a,y-S>0&&a>y-S)do{s.ye[y++]=s.ye[S++]}while(0!=--a);else s.ye.set(s.ye.subarray(S,S+a),y),y+=a,S+=a,a=0;S=0}}else S=y-m,y-S>0&&2>y-S?(s.ye[y++]=s.ye[S++],s.ye[y++]=s.ye[S++],v-=2):(s.ye.set(s.ye.subarray(S,S+2),y),y+=2,S+=2,v-=2);if(y-S>0&&v>y-S)do{s.ye[y++]=s.ye[S++]}while(0!=--v);else s.ye.set(s.ye.subarray(S,S+v),y),y+=v,S+=v,v=0;break}if(0!=(64&a))return f.Zt="invalid distance code",v=f.Qt-p,v=v>h>>3?h>>3:v,p+=v,d-=v,h-=v<<3,s.he=w,s.de=h,f.Qt=p,f.te+=d-f.le,f.le=d,s.write=y,-3;c+=l[z+2],c+=w&at[a],z=3*(u+c),a=l[z]}break}if(0!=(64&a))return 0!=(32&a)?(v=f.Qt-p,v=v>h>>3?h>>3:v,p+=v,d-=v,h-=v<<3,s.he=w,s.de=h,f.Qt=p,f.te+=d-f.le,f.le=d,s.write=y,1):(f.Zt="invalid literal/length code",v=f.Qt-p,v=v>h>>3?h>>3:v,p+=v,d-=v,h-=v<<3,s.he=w,s.de=h,f.Qt=p,f.te+=d-f.le,f.le=d,s.write=y,-3);if(c+=l[z+2],c+=w&at[a],z=3*(u+c),0===(a=l[z])){w>>=l[z+1],h-=l[z+1],s.ye[y++]=l[z+2],b--;break}}else w>>=l[z+1],h-=l[z+1],s.ye[y++]=l[z+2],b--}while(b>=258&&p>=10);return v=f.Qt-p,v=v>h>>3?h>>3:v,p+=v,d-=v,h-=v<<3,s.he=w,s.de=h,f.Qt=p,f.te+=d-f.le,f.le=d,s.write=y,0}t.init=(t,o,s,f,c,l)=>{e=0,a=t,w=o,r=s,h=f,i=c,d=l,n=null},t.be=(t,y,b)=>{let k,g,v,m,S,z,_,I=0,A=0,C=0;for(C=y.le,m=y.Qt,I=t.he,A=t.de,S=t.write,z=S<t.read?t.read-S-1:t.end-S;;)switch(e){case 0:if(z>=258&&m>=10&&(t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,b=p(a,w,r,h,i,d,t,y),C=y.le,m=y.Qt,I=t.he,A=t.de,S=t.write,z=S<t.read?t.read-S-1:t.end-S,0!=b)){e=1==b?7:9;break}f=a,n=r,s=h,e=1;case 1:for(k=f;k>A;){if(0===m)return t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);b=0,m--,I|=(255&y.pe(C++))<<A,A+=8}if(g=3*(s+(I&at[k])),I>>>=n[g+1],A-=n[g+1],v=n[g],0===v){c=n[g+2],e=6;break}if(0!=(16&v)){l=15&v,o=n[g+2],e=2;break}if(0==(64&v)){f=v,s=g/3+n[g+2];break}if(0!=(32&v)){e=7;break}return e=9,y.Zt="invalid literal/length code",b=-3,t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);case 2:for(k=l;k>A;){if(0===m)return t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);b=0,m--,I|=(255&y.pe(C++))<<A,A+=8}o+=I&at[k],I>>=k,A-=k,f=w,n=i,s=d,e=3;case 3:for(k=f;k>A;){if(0===m)return t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);b=0,m--,I|=(255&y.pe(C++))<<A,A+=8}if(g=3*(s+(I&at[k])),I>>=n[g+1],A-=n[g+1],v=n[g],0!=(16&v)){l=15&v,u=n[g+2],e=4;break}if(0==(64&v)){f=v,s=g/3+n[g+2];break}return e=9,y.Zt="invalid distance code",b=-3,t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);case 4:for(k=l;k>A;){if(0===m)return t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);b=0,m--,I|=(255&y.pe(C++))<<A,A+=8}u+=I&at[k],I>>=k,A-=k,e=5;case 5:for(_=S-u;0>_;)_+=t.end;for(;0!==o;){if(0===z&&(S==t.end&&0!==t.read&&(S=0,z=S<t.read?t.read-S-1:t.end-S),0===z&&(t.write=S,b=t.ke(y,b),S=t.write,z=S<t.read?t.read-S-1:t.end-S,S==t.end&&0!==t.read&&(S=0,z=S<t.read?t.read-S-1:t.end-S),0===z)))return t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);t.ye[S++]=t.ye[_++],z--,_==t.end&&(_=0),o--}e=0;break;case 6:if(0===z&&(S==t.end&&0!==t.read&&(S=0,z=S<t.read?t.read-S-1:t.end-S),0===z&&(t.write=S,b=t.ke(y,b),S=t.write,z=S<t.read?t.read-S-1:t.end-S,S==t.end&&0!==t.read&&(S=0,z=S<t.read?t.read-S-1:t.end-S),0===z)))return t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);b=0,t.ye[S++]=c,z--,e=0;break;case 7:if(A>7&&(A-=8,m++,C--),t.write=S,b=t.ke(y,b),S=t.write,z=S<t.read?t.read-S-1:t.end-S,t.read!=t.write)return t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);e=8;case 8:return b=1,t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);case 9:return b=-3,t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b);default:return b=-2,t.he=I,t.de=A,y.Qt=m,y.te+=C-y.le,y.le=C,t.write=S,t.ke(y,b)}},t.ge=()=>{}}kt.ve=(t,e,n,r)=>(t[0]=9,e[0]=5,n[0]=wt,r[0]=ht,0);const vt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function mt(t,e){const n=this;let r,o=0,s=0,c=0,l=0;const u=[0],a=[0],w=new gt;let h=0,d=new f(4320);const p=new kt;n.de=0,n.he=0,n.ye=new i(e),n.end=e,n.read=0,n.write=0,n.reset=(t,e)=>{e&&(e[0]=0),6==o&&w.ge(t),o=0,n.de=0,n.he=0,n.read=n.write=0},n.reset(t,null),n.ke=(t,e)=>{let r,i,o;return i=t.ue,o=n.read,r=(o>n.write?n.end:n.write)-o,r>t.ce&&(r=t.ce),0!==r&&-5==e&&(e=0),t.ce-=r,t.ee+=r,t.se.set(n.ye.subarray(o,o+r),i),i+=r,o+=r,o==n.end&&(o=0,n.write==n.end&&(n.write=0),r=n.write-o,r>t.ce&&(r=t.ce),0!==r&&-5==e&&(e=0),t.ce-=r,t.ee+=r,t.se.set(n.ye.subarray(o,o+r),i),i+=r,o+=r),t.ue=i,n.read=o,e},n.be=(t,e)=>{let i,f,y,b,k,g,v,m;for(b=t.le,k=t.Qt,f=n.he,y=n.de,g=n.write,v=g<n.read?n.read-g-1:n.end-g;;){let S,z,_,I,A,C,V,B;switch(o){case 0:for(;3>y;){if(0===k)return n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);e=0,k--,f|=(255&t.pe(b++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,o=1;break;case 1:S=[],z=[],_=[[]],I=[[]],kt.ve(S,z,_,I),w.init(S[0],z[0],_[0],0,I[0],0),f>>>=3,y-=3,o=6;break;case 2:f>>>=3,y-=3,o=3;break;case 3:return f>>>=3,y-=3,o=9,t.Zt="invalid block type",e=-3,n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e)}break;case 1:for(;32>y;){if(0===k)return n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);e=0,k--,f|=(255&t.pe(b++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return o=9,t.Zt="invalid stored block lengths",e=-3,n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);s=65535&f,f=y=0,o=0!==s?2:0!==h?7:0;break;case 2:if(0===k)return n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);if(0===v&&(g==n.end&&0!==n.read&&(g=0,v=g<n.read?n.read-g-1:n.end-g),0===v&&(n.write=g,e=n.ke(t,e),g=n.write,v=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,v=g<n.read?n.read-g-1:n.end-g),0===v)))return n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);if(e=0,i=s,i>k&&(i=k),i>v&&(i=v),n.ye.set(t.Xt(b,i),g),b+=i,k-=i,g+=i,v-=i,0!=(s-=i))break;o=0!==h?7:0;break;case 3:for(;14>y;){if(0===k)return n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);e=0,k--,f|=(255&t.pe(b++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return o=9,t.Zt="too many length or distance symbols",e=-3,n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(m=0;i>m;m++)r[m]=0;f>>>=14,y-=14,l=0,o=4;case 4:for(;4+(c>>>10)>l;){for(;3>y;){if(0===k)return n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);e=0,k--,f|=(255&t.pe(b++))<<y,y+=8}r[vt[l++]]=7&f,f>>>=3,y-=3}for(;19>l;)r[vt[l++]]=0;if(u[0]=7,i=p.ae(r,u,a,d,t),0!=i)return-3==(e=i)&&(r=null,o=9),n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);l=0,o=5;case 5:for(;i=c,258+(31&i)+(i>>5&31)>l;){let s,w;for(i=u[0];i>y;){if(0===k)return n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);e=0,k--,f|=(255&t.pe(b++))<<y,y+=8}if(i=d[3*(a[0]+(f&at[i]))+1],w=d[3*(a[0]+(f&at[i]))+2],16>w)f>>>=i,y-=i,r[l++]=w;else{for(m=18==w?7:w-14,s=18==w?11:3;i+m>y;){if(0===k)return n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);e=0,k--,f|=(255&t.pe(b++))<<y,y+=8}if(f>>>=i,y-=i,s+=f&at[m],f>>>=m,y-=m,m=l,i=c,m+s>258+(31&i)+(i>>5&31)||16==w&&1>m)return r=null,o=9,t.Zt="invalid bit length repeat",e=-3,n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);w=16==w?r[m-1]:0;do{r[m++]=w}while(0!=--s);l=m}}if(a[0]=-1,A=[],C=[],V=[],B=[],A[0]=9,C[0]=6,i=c,i=p.we(257+(31&i),1+(i>>5&31),r,A,C,V,B,d,t),0!=i)return-3==i&&(r=null,o=9),e=i,n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);w.init(A[0],C[0],d,V[0],d,B[0]),o=6;case 6:if(n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,1!=(e=w.be(n,t,e)))return n.ke(t,e);if(e=0,w.ge(t),b=t.le,k=t.Qt,f=n.he,y=n.de,g=n.write,v=g<n.read?n.read-g-1:n.end-g,0===h){o=0;break}o=7;case 7:if(n.write=g,e=n.ke(t,e),g=n.write,v=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);o=8;case 8:return e=1,n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);case 9:return e=-3,n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e);default:return e=-2,n.he=f,n.de=y,t.Qt=k,t.te+=b-t.le,t.le=b,n.write=g,n.ke(t,e)}}},n.ge=t=>{n.reset(t,null),n.ye=null,d=null},n.me=(t,e,r)=>{n.ye.set(t.subarray(e,e+r),0),n.read=n.write=r},n.Se=()=>1==o?1:0}const St=[0,0,255,255];function zt(){const t=this;function e(t){return t&&t.ze?(t.te=t.ee=0,t.Zt=null,t.ze.mode=7,t.ze._e.reset(t,null),0):-2}t.mode=0,t.method=0,t.Ie=[0],t.Ae=0,t.marker=0,t.Ce=0,t.Ve=e=>(t._e&&t._e.ge(e),t._e=null,0),t.Be=(n,r)=>(n.Zt=null,t._e=null,8>r||r>15?(t.Ve(n),-2):(t.Ce=r,n.ze._e=new mt(n,1<<r),e(n),0)),t.it=(t,e)=>{let n,r;if(!t||!t.ze||!t.fe)return-2;const i=t.ze;for(e=4==e?-5:0,n=-5;;)switch(i.mode){case 0:if(0===t.Qt)return n;if(n=e,t.Qt--,t.te++,8!=(15&(i.method=t.pe(t.le++)))){i.mode=13,t.Zt="unknown compression method",i.marker=5;break}if(8+(i.method>>4)>i.Ce){i.mode=13,t.Zt="invalid win size",i.marker=5;break}i.mode=1;case 1:if(0===t.Qt)return n;if(n=e,t.Qt--,t.te++,r=255&t.pe(t.le++),((i.method<<8)+r)%31!=0){i.mode=13,t.Zt="incorrect header check",i.marker=5;break}if(0==(32&r)){i.mode=7;break}i.mode=2;case 2:if(0===t.Qt)return n;n=e,t.Qt--,t.te++,i.Ae=(255&t.pe(t.le++))<<24&4278190080,i.mode=3;case 3:if(0===t.Qt)return n;n=e,t.Qt--,t.te++,i.Ae+=(255&t.pe(t.le++))<<16&16711680,i.mode=4;case 4:if(0===t.Qt)return n;n=e,t.Qt--,t.te++,i.Ae+=(255&t.pe(t.le++))<<8&65280,i.mode=5;case 5:return 0===t.Qt?n:(n=e,t.Qt--,t.te++,i.Ae+=255&t.pe(t.le++),i.mode=6,2);case 6:return i.mode=13,t.Zt="need dictionary",i.marker=0,-2;case 7:if(n=i._e.be(t,n),-3==n){i.mode=13,i.marker=0;break}if(0==n&&(n=e),1!=n)return n;n=e,i._e.reset(t,i.Ie),i.mode=12;case 12:return t.Qt=0,1;case 13:return-3;default:return-2}},t.Ee=(t,e,n)=>{let r=0,i=n;if(!t||!t.ze||6!=t.ze.mode)return-2;const o=t.ze;return i<1<<o.Ce||(i=(1<<o.Ce)-1,r=n-i),o._e.me(e,r,i),o.mode=7,0},t.De=t=>{let n,r,i,o,s;if(!t||!t.ze)return-2;const f=t.ze;if(13!=f.mode&&(f.mode=13,f.marker=0),0===(n=t.Qt))return-5;for(r=t.le,i=f.marker;0!==n&&4>i;)t.pe(r)==St[i]?i++:i=0!==t.pe(r)?0:4-i,r++,n--;return t.te+=r-t.le,t.le=r,t.Qt=n,f.marker=i,4!=i?-3:(o=t.te,s=t.ee,e(t),t.te=o,t.ee=s,f.mode=7,0)},t.Ue=t=>t&&t.ze&&t.ze._e?t.ze._e.Se():-2}function _t(){}function It(t){const e=new _t,o=t&&t.rt?n.floor(2*t.rt):131072,s=new i(o);let f=!1;e.Be(),e.se=s,this.append=(t,n)=>{const c=[];let l,u,a=0,w=0,h=0;if(0!==t.length){e.le=0,e.fe=t,e.Qt=t.length;do{if(e.ue=0,e.ce=o,0!==e.Qt||f||(e.le=0,f=!0),l=e.it(0),f&&-5===l){if(0!==e.Qt)throw new r("inflating: bad input")}else if(0!==l&&1!==l)throw new r("inflating: "+e.Zt);if((f||1===l)&&e.Qt===t.length)throw new r("inflating: bad input");e.ue&&(e.ue===o?c.push(new i(s)):c.push(s.slice(0,e.ue))),h+=e.ue,n&&e.le>0&&e.le!=a&&(n(e.le),a=e.le)}while(e.Qt>0||0===e.ce);return c.length>1?(u=new i(h),c.forEach((t=>{u.set(t,w),w+=t.length}))):u=c[0]||new i(0),u}},this.flush=()=>{e.Ve()}}_t.prototype={Be:function(t){const e=this;return e.ze=new zt,t||(t=15),e.ze.Be(e,t)},it:function(t){const e=this;return e.ze?e.ze.it(e,t):-2},Ve:function(){const t=this;if(!t.ze)return-2;const e=t.ze.Ve(t);return t.ze=null,e},De:function(){const t=this;return t.ze?t.ze.De(t):-2},Ee:function(t,e){const n=this;return n.ze?n.ze.Ee(n,t,e):-2},pe:function(t){return this.fe[t]},Xt:function(t,e){return this.fe.subarray(t,t+e)}},self.initCodec=()=>{self.Deflate=ut,self.Inflate=It};
`],{
                type: "text/javascript"
            }));
            t({
                workerScripts: {
                    inflate: [e],
                    deflate: [e]
                }
            })
        }
    }
    ;
    var ui = class {
        constructor() {
            this.size = 0
        }
        init() {
            this.initialized = !0
        }
    }
      , En = class extends ui {
    }
      , fi = class extends ui {
        writeUint8Array(e) {
            this.size += e.length
        }
    }
    ;
    var tn = class extends En {
        constructor(e) {
            super(),
            this.blob = e,
            this.size = e.size
        }
        async readUint8Array(e, n) {
            if (this.blob.arrayBuffer)
                return new Uint8Array(await this.blob.slice(e, e + n).arrayBuffer());
            {
                let i = new FileReader;
                return new Promise((r,a)=>{
                    i.onload = o=>r(new Uint8Array(o.target.result)),
                    i.onerror = ()=>a(i.error),
                    i.readAsArrayBuffer(this.blob.slice(e, e + n))
                }
                )
            }
        }
    }
    ;
    var en = class extends fi {
        constructor() {
            super(),
            this.array = new Uint8Array(0)
        }
        writeUint8Array(e) {
            super.writeUint8Array(e);
            let n = this.array;
            this.array = new Uint8Array(n.length + e.length),
            this.array.set(n),
            this.array.set(e, n.length)
        }
        getData() {
            return this.array
        }
    }
    ;
    var mr = "/"
      , ah = new Date(2107,11,31)
      , oh = new Date(1980,0,1);
    var sh = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split("")
      , Ko = t=>{
        let e = "";
        for (let n = 0; n < t.length; n++)
            e += sh[t[n]];
        return e
    }
    ;
    var di = ch;
    function ch(t, e) {
        if (e && e.trim().toLowerCase() == "cp437")
            return Ko(t);
        if (typeof TextDecoder > "u") {
            let n = new FileReader;
            return new Promise((i,r)=>{
                n.onload = a=>i(a.target.result),
                n.onerror = ()=>r(n.error),
                n.readAsText(new Blob([t]))
            }
            )
        } else
            return new TextDecoder(e).decode(t)
    }
    var pr = "Abort error";
    async function gr(t, e, n, i, r, a, o) {
        let l = Math.max(a.chunkSize, 64);
        return u();
        async function u(d=0, h=0) {
            let g = o.signal
              , _ = r();
            if (d < _) {
                hr(g, t);
                let E = await e.readUint8Array(d + i, Math.min(l, _ - d))
                  , T = E.length;
                hr(g, t);
                let w = await t.append(E);
                if (hr(g, t),
                h += await Xo(n, w),
                o.onprogress)
                    try {
                        o.onprogress(d + T, _)
                    } catch {}
                return u(d + l, h)
            } else {
                let E = await t.flush();
                return h += await Xo(n, E.data),
                {
                    signature: E.signature,
                    length: h
                }
            }
        }
    }
    function hr(t, e) {
        if (t && t.aborted)
            throw e.abort(),
            new Error(pr)
    }
    async function Xo(t, e) {
        return e.length && await t.writeUint8Array(e),
        e.length
    }
    var lh = ["filename", "rawFilename", "directory", "encrypted", "compressedSize", "uncompressedSize", "lastModDate", "rawLastModDate", "comment", "rawComment", "signature", "extraField", "rawExtraField", "bitFlag", "extraFieldZip64", "extraFieldUnicodePath", "extraFieldUnicodeComment", "extraFieldAES", "filenameUTF8", "commentUTF8", "offset", "zip64", "compressionMethod", "extraFieldNTFS", "lastAccessDate", "creationDate", "extraFieldExtendedTimestamp", "version", "versionMadeBy", "msDosCompatible", "internalFileAttribute", "externalFileAttribute"]
      , Oe = class {
        constructor(e) {
            lh.forEach(n=>this[n] = e[n])
        }
    }
    ;
    var mi = "File format is not recognized"
      , fs = "End of central directory not found"
      , ds = "End of Zip64 central directory not found"
      , ms = "End of Zip64 central directory locator not found"
      , hs = "Central directory header not found"
      , ps = "Local file header not found"
      , gs = "Zip64 extra field not found"
      , vs = "File contains encrypted entry"
      , xs = "Encryption method not supported"
      , kr = "Compression method not supported"
      , zo = "utf-8"
      , Wo = "cp437"
      , Jo = ["uncompressedSize", "compressedSize", "offset"]
      , an = class {
        constructor(e, n={}) {
            Object.assign(this, {
                reader: e,
                options: n,
                config: Qi()
            })
        }
        async*getEntriesGenerator(e={}) {
            let n = this
              , i = n.reader;
            if (i.initialized || await i.init(),
            i.size < 22)
                throw new Error(mi);
            let r = await vh(i, 101010256, i.size, 22, 65535 * 16);
            if (!r)
                throw new Error(fs);
            let a = xt(r)
              , o = ht(a, 12)
              , l = ht(a, 16)
              , u = Dt(a, 8)
              , d = 0;
            if (l == 4294967295 || o == 4294967295 || u == 65535) {
                let E = await xe(i, r.offset - 20, 20)
                  , T = xt(E);
                if (ht(T, 0) != 117853008)
                    throw new Error(ds);
                l = hi(T, 8);
                let w = await xe(i, l, 56)
                  , x = xt(w)
                  , v = r.offset - 20 - 56;
                if (ht(x, 0) != 101075792 && l != v) {
                    let I = l;
                    l = v,
                    d = l - I,
                    w = await xe(i, l, 56),
                    x = xt(w)
                }
                if (ht(x, 0) != 101075792)
                    throw new Error(ms);
                u = hi(x, 32),
                o = hi(x, 40),
                l -= o
            }
            if (l < 0 || l >= i.size)
                throw new Error(mi);
            let h = 0
              , g = await xe(i, l, o)
              , _ = xt(g);
            if (o) {
                let E = r.offset - o;
                if (ht(_, h) != 33639248 && l != E) {
                    let T = l;
                    l = E,
                    d = l - T,
                    g = await xe(i, l, o),
                    _ = xt(g)
                }
            }
            if (l < 0 || l >= i.size)
                throw new Error(mi);
            for (let E = 0; E < u; E++) {
                let T = new Cr(i,n.config,n.options);
                if (ht(_, h) != 33639248)
                    throw new Error(hs);
                _s(T, _, h + 6);
                let w = !!T.bitFlag.languageEncodingFlag
                  , x = h + 46
                  , v = x + T.filenameLength
                  , I = v + T.extraFieldLength
                  , R = Dt(_, h + 4)
                  , F = (R & 0) == 0;
                Object.assign(T, {
                    versionMadeBy: R,
                    msDosCompatible: F,
                    compressedSize: 0,
                    uncompressedSize: 0,
                    commentLength: Dt(_, h + 32),
                    directory: F && (rn(_, h + 38) & 16) == 16,
                    offset: ht(_, h + 42) + d,
                    internalFileAttribute: ht(_, h + 34),
                    externalFileAttribute: ht(_, h + 38),
                    rawFilename: g.subarray(x, v),
                    filenameUTF8: w,
                    commentUTF8: w,
                    rawExtraField: g.subarray(v, I)
                });
                let C = I + T.commentLength;
                T.rawComment = g.subarray(I, C);
                let j = nn(n, e, "filenameEncoding")
                  , y = nn(n, e, "commentEncoding")
                  , [A,S] = await Promise.all([di(T.rawFilename, T.filenameUTF8 ? zo : j || Wo), di(T.rawComment, T.commentUTF8 ? zo : y || Wo)]);
                T.filename = A,
                T.comment = S,
                !T.directory && T.filename.endsWith(mr) && (T.directory = !0),
                await ws(T, T, _, h + 6);
                let L = new Oe(T);
                if (L.getData = (s,f)=>T.getData(s, L, f),
                h = C,
                e.onprogress)
                    try {
                        e.onprogress(E + 1, u, new Oe(T))
                    } catch {}
                yield L
            }
            return !0
        }
        async getEntries(e={}) {
            let n = []
              , i = this.getEntriesGenerator(e)
              , r = i.next();
            for (; !(await r).done; )
                n.push((await r).value),
                r = i.next();
            return n
        }
        async close() {}
    }
    ;
    var Cr = class {
        constructor(e, n, i) {
            Object.assign(this, {
                reader: e,
                config: n,
                options: i
            })
        }
        async getData(e, n, i={}) {
            let r = this
              , {reader: a, offset: o, extraFieldAES: l, compressionMethod: u, config: d, bitFlag: h, signature: g, rawLastModDate: _, compressedSize: E} = r
              , T = r.localDirectory = {};
            a.initialized || await a.init();
            let w = await xe(a, o, 30)
              , x = xt(w)
              , v = nn(r, i, "password");
            if (v = v && v.length && v,
            l && l.originalCompressionMethod != 99)
                throw new Error(kr);
            if (u != 0 && u != 8)
                throw new Error(kr);
            if (ht(x, 0) != 67324752)
                throw new Error(ps);
            _s(T, x, 4),
            w = await xe(a, o, 30 + T.filenameLength + T.extraFieldLength),
            T.rawExtraField = w.subarray(30 + T.filenameLength),
            await ws(r, T, x, 4),
            n.lastAccessDate = T.lastAccessDate,
            n.creationDate = T.creationDate;
            let I = r.encrypted && T.encrypted
              , R = I && !l;
            if (I) {
                if (!R && l.strength === void 0)
                    throw new Error(xs);
                if (!v)
                    throw new Error(vs)
            }
            let F = await dr(d.Inflate, {
                codecType: ci,
                password: v,
                zipCrypto: R,
                encryptionStrength: l && l.strength,
                signed: nn(r, i, "checkSignature"),
                passwordVerification: R && (h.dataDescriptor ? _ >>> 8 & 255 : g >>> 24 & 255),
                signature: g,
                compressed: u != 0,
                encrypted: I,
                useWebWorkers: nn(r, i, "useWebWorkers")
            }, d);
            e.initialized || await e.init();
            let C = nn(r, i, "signal")
              , j = o + 30 + T.filenameLength + T.extraFieldLength;
            return await gr(F, a, e, j, ()=>E, d, {
                onprogress: i.onprogress,
                signal: C
            }),
            e.getData()
        }
    }
    ;
    function _s(t, e, n) {
        let i = t.rawBitFlag = Dt(e, n + 2)
          , r = (i & 1) == 1
          , a = ht(e, n + 6);
        Object.assign(t, {
            encrypted: r,
            version: Dt(e, n),
            bitFlag: {
                level: (i & 6) >> 1,
                dataDescriptor: (i & 8) == 8,
                languageEncodingFlag: (i & 2048) == 2048
            },
            rawLastModDate: a,
            lastModDate: xh(a),
            filenameLength: Dt(e, n + 22),
            extraFieldLength: Dt(e, n + 24)
        })
    }
    async function ws(t, e, n, i) {
        let r = e.rawExtraField
          , a = e.extraField = new Map
          , o = xt(new Uint8Array(r))
          , l = 0;
        try {
            for (; l < r.length; ) {
                let w = Dt(o, l)
                  , x = Dt(o, l + 2);
                a.set(w, {
                    type: w,
                    data: r.slice(l + 4, l + 4 + x)
                }),
                l += 4 + x
            }
        } catch {}
        let u = Dt(n, i + 4);
        e.signature = ht(n, i + 10),
        e.uncompressedSize = ht(n, i + 18),
        e.compressedSize = ht(n, i + 14);
        let d = a.get(1);
        d && (mh(d, e),
        e.extraFieldZip64 = d);
        let h = a.get(28789);
        h && (await Qo(h, "filename", "rawFilename", e, t),
        e.extraFieldUnicodePath = h);
        let g = a.get(25461);
        g && (await Qo(g, "comment", "rawComment", e, t),
        e.extraFieldUnicodeComment = g);
        let _ = a.get(39169);
        _ ? (hh(_, e, u),
        e.extraFieldAES = _) : e.compressionMethod = u;
        let E = a.get(10);
        E && (ph(E, e),
        e.extraFieldNTFS = E);
        let T = a.get(21589);
        T && (gh(T, e),
        e.extraFieldExtendedTimestamp = T)
    }
    function mh(t, e) {
        e.zip64 = !0;
        let n = xt(t.data);
        t.values = [];
        for (let r = 0; r < Math.floor(t.data.length / 8); r++)
            t.values.push(hi(n, 0 + r * 8));
        let i = Jo.filter(r=>e[r] == 4294967295);
        for (let r = 0; r < i.length; r++)
            t[i[r]] = t.values[r];
        Jo.forEach(r=>{
            if (e[r] == 4294967295)
                if (t[r] !== void 0)
                    e[r] = t[r];
                else
                    throw new Error(gs)
        }
        )
    }
    async function Qo(t, e, n, i, r) {
        let a = xt(t.data);
        t.version = rn(a, 0),
        t.signature = ht(a, 1);
        let o = new ge;
        o.append(r[n]);
        let l = xt(new Uint8Array(4));
        l.setUint32(0, o.get(), !0),
        t[e] = await di(t.data.subarray(5)),
        t.valid = !r.bitFlag.languageEncodingFlag && t.signature == ht(l, 0),
        t.valid && (i[e] = t[e],
        i[e + "UTF8"] = !0)
    }
    function hh(t, e, n) {
        let i = xt(t.data);
        t.vendorVersion = rn(i, 0),
        t.vendorId = rn(i, 2);
        let r = rn(i, 4);
        t.strength = r,
        t.originalCompressionMethod = n,
        e.compressionMethod = t.compressionMethod = Dt(i, 5)
    }
    function ph(t, e) {
        let n = xt(t.data), i = 4, r;
        try {
            for (; i < t.data.length && !r; ) {
                let a = Dt(n, i)
                  , o = Dt(n, i + 2);
                a == 1 && (r = t.data.slice(i + 4, i + 4 + o)),
                i += 4 + o
            }
        } catch {}
        try {
            if (r && r.length == 24) {
                let a = xt(r)
                  , o = a.getBigUint64(0, !0)
                  , l = a.getBigUint64(8, !0)
                  , u = a.getBigUint64(16, !0);
                Object.assign(t, {
                    rawLastModDate: o,
                    rawLastAccessDate: l,
                    rawCreationDate: u
                });
                let d = _r(o)
                  , h = _r(l)
                  , g = _r(u)
                  , _ = {
                    lastModDate: d,
                    lastAccessDate: h,
                    creationDate: g
                };
                Object.assign(t, _),
                Object.assign(e, _)
            }
        } catch {}
    }
    function gh(t, e) {
        let n = xt(t.data)
          , i = rn(n, 0)
          , r = []
          , a = [];
        (i & 1) == 1 && (r.push("lastModDate"),
        a.push("rawLastModDate")),
        (i & 2) == 2 && (r.push("lastAccessDate"),
        a.push("rawLastAccessDate")),
        (i & 4) == 4 && (r.push("creationDate"),
        a.push("rawCreationDate"));
        let o = 1;
        r.forEach((l,u)=>{
            if (t.data.length >= o + 4) {
                let d = ht(n, o);
                e[l] = t[l] = new Date(d * 1e3);
                let h = a[u];
                t[h] = d
            }
            o += 4
        }
        )
    }
    async function vh(t, e, n, i, r) {
        let a = new Uint8Array(4)
          , o = xt(a);
        _h(o, 0, e);
        let l = i + r;
        return await u(i) || await u(Math.min(l, n));
        async function u(d) {
            let h = n - d
              , g = await xe(t, h, d);
            for (let _ = g.length - i; _ >= 0; _--)
                if (g[_] == a[0] && g[_ + 1] == a[1] && g[_ + 2] == a[2] && g[_ + 3] == a[3])
                    return {
                        offset: h + _,
                        buffer: g.slice(_, _ + i).buffer
                    }
        }
    }
    function nn(t, e, n) {
        return e[n] === void 0 ? t.options[n] : e[n]
    }
    function xh(t) {
        let e = (t & 4294901760) >> 16
          , n = t & 65535;
        try {
            return new Date(1980 + ((e & 65024) >> 9),((e & 480) >> 5) - 1,e & 31,(n & 63488) >> 11,(n & 2016) >> 5,(n & 31) * 2,0)
        } catch {}
    }
    function _r(t) {
        return new Date(Number(t / BigInt(1e4) - BigInt(116444736e5)))
    }
    function rn(t, e) {
        return t.getUint8(e)
    }
    function Dt(t, e) {
        return t.getUint16(e, !0)
    }
    function ht(t, e) {
        return t.getUint32(e, !0)
    }
    function hi(t, e) {
        return Number(t.getBigUint64(e, !0))
    }
    function _h(t, e, n) {
        t.setUint32(e, n, !0)
    }
    function xt(t) {
        return new DataView(t.buffer)
    }
    function xe(t, e, n) {
        return t.readUint8Array(e, n)
    }
    var kg = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]);
    var Og = 512 * 1024;
    var Ch = {}, Is;
    try {
        Is = Ch.url
    } catch {}
    ze({
        baseURL: Is
    });
    Yo(ze);
    ze({
        Deflate: eo,
        Inflate: Eo
    });
    var bs = createClass({});
    var Es = createClass({
        $SOUND_PLAYINGI: 0,
        $SOUND_STOPPEDI: 1,
        $SOUND_UNINITIALIZEDI: 3,
        "<init>([BI)V": function(t, e) {
            console.log(e),
            this.state = this.$SOUND_STOPPEDI
        },
        "getState()I": function() {
            return this.state
        },
        "init([BI)V": function() {},
        "play(I)V": function() {
            this.state = this.$SOUND_PLAYINGI
        },
        "setGain(I)V": function() {},
        "stop()V": function() {
            this.state = this.$SOUND_STOPPEDI
        }
    });
    var js = createClass({
        "isRegistered()Z": function() {
            return this.listener ? 1 : 0
        },
        "register(IISSLcom/nokia/mid/ui/frameanimator/FrameAnimatorListener;)Z": function(t, e, n, i, r) {
            if (this.listener)
                throw new c.javaRoot.java.lang.IllegalStateException;
            return this.listener = r,
            1
        },
        "stop()V": function() {},
        "unregister()V": function() {},
        require: ["java.lang.IllegalStateException"]
    });
    var Ss = G({});
    var Rs = createClass({
        "getStartX()I": function() {
            return this.x
        },
        "getStartY()I": function() {
            return this.y
        },
        "getType()I": function() {
            return this.type
        }
    });
    var ks = createClass({
        $GESTURE_TAPI: 1,
        "<init>(I)V": function(t) {
            this.gestures = t
        },
        "isSupported(I)Z": function() {
            return 1
        }
    });
    var Cs = G({});
    var Ts = createClass({
        "register(Ljava/lang/Object;Lcom/nokia/mid/ui/gestures/GestureInteractiveZone;)Z": function(t, e) {
            return t.gestureZone ? (console.debug("No more zones"),
            0) : (t.gestureZone = e,
            1)
        },
        "setListener(Ljava/lang/Object;Lcom/nokia/mid/ui/gestures/GestureListener;)V": function(t, e) {
            var n = c.javaRoot.com.nokia.mid.ui.gestures.GestureInteractiveZone.prototype;
            t.gestureListener || (t.gestureListener = e,
            t.element.addEventListener("click", function(i) {
                if (t.gestureZone.gestures & n.$GESTURE_TAPI) {
                    var r = new c.javaRoot.com.nokia.mid.ui.gestures.GestureEvent;
                    r.x = Math.floor(i.layerX / t.element.clientWidth * t.element.width),
                    r.y = Math.floor(i.layerY / t.element.clientHeight * t.element.height),
                    r.type = n.$GESTURE_TAPI,
                    e["gestureAction(Ljava/lang/Object;Lcom/nokia/mid/ui/gestures/GestureInteractiveZone;Lcom/nokia/mid/ui/gestures/GestureEvent;)V"](t, t.gestureZone, r)
                }
            }))
        },
        "unregister(Ljava/lang/Object;Lcom/nokia/mid/ui/gestures/GestureInteractiveZone;)V": function(t, e) {
            t.gestureZone === e && delete t.gestureZone
        },
        require: ["com.nokia.mid.ui.gestures.GestureInteractiveZone", "com.nokia.mid.ui.gestures.GestureEvent"]
    });
    var As = G({});
    var Ls = createClass({
        "<init>(ILjavax/microedition/lcdui/Image;)V": function() {},
        "setActive(Z)V": function() {}
    });
    var Os = createClass({
        "appendIndicator(Lcom/nokia/mid/ui/lcdui/Indicator;Z)I": function() {},
        "getIndicatorManager()Lcom/nokia/mid/ui/lcdui/IndicatorManager;": function() {
            return new c.javaRoot.com.nokia.mid.ui.lcdui.IndicatorManager
        }
    });
    var Fs = createClass({});
    var Ds = createClass({
        "setLights(II)V": function(t, e) {}
    });
    var Ns = createClass({
        package: "com.nokia.mid.ui",
        name: "DirectGraphics",
        $FLIP_HORIZONTALI: 8192,
        $FLIP_VERTICALI: 16384,
        $ROTATE_180I: 180,
        $ROTATE_270I: 270,
        $ROTATE_90I: 90,
        $TYPE_BYTE_1_GRAYI: 1,
        $TYPE_BYTE_1_GRAY_VERTICALI: -1,
        $TYPE_BYTE_2_GRAYI: 2,
        $TYPE_BYTE_332_RGBI: 332,
        $TYPE_BYTE_4_GRAYI: 4,
        $TYPE_BYTE_8_GRAYI: 8,
        $TYPE_INT_888_RGBI: 888,
        $TYPE_INT_8888_ARGBI: 8888,
        $TYPE_USHORT_1555_ARGBI: 1555,
        $TYPE_USHORT_444_RGBI: 444,
        $TYPE_USHORT_4444_ARGBI: 4444,
        $TYPE_USHORT_555_RGBI: 555,
        $TYPE_USHORT_565_RGBI: 565,
        construct: function(t) {
            this.graphics = t
        },
        "drawImage(Ljavax/microedition/lcdui/Image;IIII)V": function(t, e, n, i, r) {
            let a = this.getTransform(r);
            if (i >= 64 || a === -1)
                throw new c.javaRoot.java.lang.IllegalArgumentException;
            return this.graphics["drawRegion(Ljavax/microedition/lcdui/Image;IIIIIIII)V"](t, 0, 0, t["getWidth()I"](), t["getHeight()I"](), a, e, n, i)
        },
        "drawPixels([B[BIIIIIIII)V": function(t, e, n, i, r, a, o, l, u, d) {
            throw new Error("TODO")
        },
        "drawPixels([IZIIIIIIII)V": function(t, e, n, i, r, a, o, l, u, d) {
            throw new Error("TODO")
        },
        "drawPixels([SZIIIIIIII)V": function(t, e, n, i, r, a, o, l, u, d) {
            throw new Error("TODO")
        },
        "drawPolygon([II[IIII)V": function(t, e, n, i, r, a) {
            throw new Error("TODO")
        },
        "drawTriangle(IIIIIII)V": function(t, e, n, i, r, a, o) {
            throw new Error("TODO")
        },
        "fillPolygon([II[IIII)V": function(t, e, n, i, r, a) {},
        "fillTriangle(IIIIIII)V": function(t, e, n, i, r, a, o) {
            throw new Error("TODO")
        },
        "getAlphaComponent()I": function() {
            return this.graphics.alpha
        },
        "getNativePixelFormat()I": function() {
            throw new Error("TODO")
        },
        "getPixels([B[BIIIIIII)V": function(t, e, n, i, r, a, o, l, u) {
            throw new Error("TODO")
        },
        "getPixels([IIIIIIII)V": function(t, e, n, i, r, a, o, l) {
            throw new Error("TODO")
        },
        "getPixels([SIIIIIII)V": function(t, e, n, i, r, a, o, l) {
            throw new Error("TODO")
        },
        "setARGBColor(I)V": function(t) {
            t < 0 && (t += 4294967296),
            this.graphics.alpha = Math.floor(t / Math.pow(2, 24));
            var e = Math.floor(this.graphics.alpha / 255 * 255) / 100
              , n = (t & 16711680) >> 16
              , i = (t & 65280) >> 8
              , r = t & 255;
            this.graphics.color = "rgba(" + n + ", " + i + ", " + r + ", " + e + ")",
            this.graphics.colorValue = t
        },
        getTransform: function(t) {
            var e = -1
              , n = t & 4095
              , i = c.javaRoot.javax.microedition.lcdui.game.Sprite.prototype;
            if (t & this.$FLIP_HORIZONTALI)
                if (t & this.$FLIP_VERTICALI)
                    switch (n) {
                    case 0:
                        e = i.$TRANS_ROT180I;
                        break;
                    case this.$ROTATE_90I:
                        e = i.$TRANS_ROT90I;
                        break;
                    case this.$ROTATE_180I:
                        e = i.$TRANS_NONEI;
                        break;
                    case this.$ROTATE_270I:
                        e = i.$TRANS_ROT270I;
                        break;
                    default:
                    }
                else
                    switch (n) {
                    case 0:
                        e = i.$TRANS_MIRRORI;
                        break;
                    case this.$ROTATE_90I:
                        e = i.$TRANS_MIRROR_ROT90I;
                        break;
                    case this.$ROTATE_180I:
                        e = i.$TRANS_MIRROR_ROT180I;
                        break;
                    case this.$ROTATE_270I:
                        e = i.$TRANS_MIRROR_ROT270I;
                        break;
                    default:
                    }
            else if (t & this.$FLIP_VERTICALI)
                switch (n) {
                case 0:
                    e = i.$TRANS_MIRROR_ROT180I;
                    break;
                case this.$ROTATE_90I:
                    e = i.$TRANS_MIRROR_ROT270I;
                    break;
                case this.$ROTATE_180I:
                    e = i.$TRANS_MIRRORI;
                    break;
                case this.$ROTATE_270I:
                    e = i.$TRANS_MIRROR_ROT90I;
                    break;
                default:
                }
            else
                switch (n) {
                case 0:
                    e = i.$TRANS_NONEI;
                    break;
                case this.$ROTATE_90I:
                    e = i.$TRANS_ROT270I;
                    break;
                case this.$ROTATE_180I:
                    e = i.$TRANS_ROT180I;
                    break;
                case this.$ROTATE_270I:
                    e = i.$TRANS_ROT90I;
                    break;
                default:
                }
            return e
        },
        require: ["java.lang.IllegalArgumentException", "javax.microedition.lcdui.game.Sprite"]
    });
    var Ms = createClass({
        "createImage(III)Ljavax/microedition/lcdui/Image;": function(t, e, n) {
            var i = c.javaRoot.javax.microedition.lcdui.Image.prototype["createImage(II)Ljavax/microedition/lcdui/Image;"](t, e)
              , r = new c.javaRoot.javax.microedition.lcdui.Graphics(i.element)
              , a = this["getDirectGraphics(Ljavax/microedition/lcdui/Graphics;)Lcom/nokia/mid/ui/DirectGraphics;"](r);
            return a["setARGBColor(I)V"](n),
            r["fillRect(IIII)V"](0, 0, t, e),
            i
        },
        "getDirectGraphics(Ljavax/microedition/lcdui/Graphics;)Lcom/nokia/mid/ui/DirectGraphics;": function(t) {
            return new c.javaRoot.com.nokia.mid.ui.DirectGraphics(t)
        },
        require: ["com.nokia.mid.ui.DirectGraphics", "javax.microedition.lcdui.Image"]
    });
    var Bs = createClass({
        superClass: "javax.microedition.lcdui.Canvas"
    });
    var Vs = createClass({
        "createTextEditor(IIII)Lcom/nokia/mid/ui/TextEditor;": function(t, e, n, i) {
            var r = new c.javaRoot.com.nokia.mid.ui.TextEditor;
            r.maxSize = t,
            r.constraints = e,
            r.width = n,
            r.rows = i;
            var a = document.createElement("input")
              , o = new MutationObserver(function(l) {
                this.parent && (l[1].addedNodes.indexOf(this.parent.element) !== -1 || l[1].removedNodes.indexOf(this.parent.element) !== -1) && r.refreshState()
            }
            );
            return o.observe(document.getElementById("screen"), {
                childList: !0
            }),
            a.className = "TextEditor",
            a.maxLength = t,
            a.style.width = n + "px",
            document.body.appendChild(a),
            r.element = a,
            r.margin = document.getElementById("screen").offsetLeft,
            r["setPosition(II)V"](0, 0),
            r
        },
        "getContent()Ljava/lang/String;": function() {
            return new c.javaRoot.java.lang.String(this.element.value)
        },
        "getContentHeight()I": function() {
            return 50
        },
        "hasFocus()Z": function() {
            return this.element === document.activeElement ? 1 : 0
        },
        "getFont()Ljavax/microedition/lcdui/Font;": function() {
            return c.javaRoot.javax.microedition.lcdui.Font.prototype["getDefaultFont()Ljavax/microedition/lcdui/Font;"]()
        },
        "getForegroundColor()I": function() {
            return this.fgColor
        },
        "getHeight()I": function() {
            return this.height
        },
        "getLineMarginHeight()I": function() {
            return this.height ? this.height : 0
        },
        "getVisibleContentPosition()I": function() {
            return 0
        },
        "getMaxSize()I": function() {
            return this.maxSize
        },
        "getWidth()I": function() {
            return this.width
        },
        "insert(Ljava/lang/String;I)V": function(t, e) {
            this.element.value = this.element.value.substring(0, e) + t.text + this.element.value.substring(e)
        },
        "isMultiline()Z": function() {
            return this.isMultiline
        },
        "isVisible()Z": function() {
            return this.isVisible
        },
        "setBackgroundColor(I)V": function(t) {
            this.bgColor = t
        },
        "setCaret(I)V": function(t) {
            this.element.selectionStart = t,
            this.element.selectionEnd = t
        },
        "setContent(Ljava/lang/String;)V": function(t) {
            this.element.value = t.text
        },
        "setFocus(Z)V": function(t) {
            this.element.focus()
        },
        "setFont(Ljavax/microedition/lcdui/Font;)V": function() {},
        "setForegroundColor(I)V": function(t) {
            this.fgColor = t,
            this.element.style.color = "#" + t.toString(16)
        },
        "setMaxSize(I)I": function(t) {
            this.maxSize = t,
            this.element.maxLength = t
        },
        "setMultiline(Z)V": function(t) {
            this.isMultiline = t,
            t && console.error("TextEditor: multiple lines?")
        },
        "setParent(Ljava/lang/Object;)V": function(t) {
            this.parent = t,
            this.refreshState()
        },
        "setPosition(II)V": function(t, e) {
            this.x = t,
            this.y = e,
            this.refreshState()
        },
        "setSize(II)V": function(t, e) {
            this.width = t,
            this.height = e,
            this.refreshState()
        },
        "setTextEditorListener(Lcom/nokia/mid/ui/TextEditorListener;)V": function(t) {
            this.listener = t
        },
        "setVisible(Z)V": function(t) {
            this.isVisible = t,
            this.refreshState()
        },
        "size()I": function() {
            return this.element.value.length
        },
        refreshState: function() {
            this.parent && (this.element.style.left = this.parent.element.offsetLeft + this.margin + this.x * this.parent.getScale() + "px",
            this.element.style.top = this.y * this.parent.getScale() + "px",
            this.element.style.width = this.width * this.parent.getScale() + "px",
            this.element.style.height = this.height * this.parent.getScale() + "px",
            this.isVisible && this.parent.active ? this.element.style.display = "inline" : this.element.style.display = "")
        },
        superClass: "com.nokia.mid.ui.CanvasItem"
    });
    var Us = G({});
    var Ps = createClass({
        "<init>(ILjava/lang/String;)V": function(t, e) {
            console.log("Samsung: you want to play a " + e.text + "?")
        },
        "play(II)V": function(t, e) {
            console.log("Samsung: sure, play :>")
        },
        "stop()V": function() {
            console.log("Samsung: stahp")
        },
        package: "com.samsung.util",
        name: "AudioClip"
    });
    var Zs = createClass({
        package: "com.samsung.util",
        name: "SM"
    });
    var Hs = createClass({
        package: "com.samsung.util",
        name: "SMS"
    });
    var $s = createClass({
        construct: function(t) {
            this.mark = -1,
            this.stream = t
        },
        "read()I": function() {
            return this.stream.isEnd() ? -1 : this.stream.readUint8()
        },
        "skip(J)J": function(t) {
            return t.hi > 0 && console.log("Too large skip value"),
            {
                hi: 0,
                lo: this.stream.skip(t.lo)
            }
        },
        "available()I": function() {
            return this.stream.getRemaining()
        },
        "mark(I)V": function() {
            this.mark = this.stream.index
        },
        "reset()V": function() {
            this.stream.seek = this.mark
        },
        superClass: "java.io.InputStream"
    });
    var _e = "buf"
      , Ut = "pos"
      , Tr = "count"
      , pi = "mark"
      , Gs = createClass({
        "buf:[B": _e,
        "pos:I": Ut,
        "count:I": Tr,
        "mark:I": pi,
        "<init>([B)V": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            this["<init>([BII)V"](t, 0, t.length)
        },
        "<init>([BII)V": function(t, e, n) {
            this["$" + _e] = t,
            this["$" + Ut] = e,
            this["$" + Tr] = e + n,
            this["$" + pi] = 0
        },
        "available()I": function() {
            return this["$" + _e].length - this["$" + Ut]
        },
        "close()V": function() {
            delete this["$" + _e],
            this.closed = !0
        },
        "mark(I)V": function() {
            this["$" + pi] = this["$" + Ut]
        },
        "markSupported()Z": function() {
            return 1
        },
        "read()I": function() {
            if (this["$" + Ut] >= this["$" + Tr])
                return -1;
            var t = this["$" + _e][this["$" + Ut]];
            return t < 0 && (t += 256),
            this["$" + Ut]++,
            t
        },
        "reset()V": function() {
            this["$" + Ut] = this["$" + pi]
        },
        "skip(J)J": function(t) {
            if (this["$" + Ut] + t.lo < this["$" + _e].length) {
                var e = t.lo;
                this["$" + Ut] += t.lo
            } else {
                var e = this["$" + _e].length - this["$" + Ut];
                this["$" + Ut] = this["$" + _e].length
            }
            return {
                hi: 0,
                lo: e
            }
        },
        superClass: "java.io.InputStream"
    });
    var Fe = "buf"
      , Sn = "count"
      , qs = createClass({
        "buf:[B": Fe,
        "count:I": Sn,
        construct: function() {
            this["$" + Fe] = [],
            this["$" + Sn] = 0
        },
        "<init>()V": function() {},
        "<init>(I)V": function(t) {
            if (t < 0)
                throw new c.javaRoot.java.lang.IllegalArgumentException
        },
        "reset()V": function() {
            this["$" + Fe] = [],
            this["$" + Sn] = 0
        },
        "size()I": function() {
            return this["$" + Sn]
        },
        "toByteArray()[B": function() {
            return this["$" + Fe].slice(0)
        },
        "toString()Ljava/lang/String;": function() {
            var t = Tt(this["$" + Fe]);
            return new c.javaRoot.java.lang.String(t)
        },
        "write(I)V": function(t) {
            for (; t > 127; )
                t -= 256;
            for (; t < -128; )
                t += 256;
            this["$" + Fe].push(t),
            this["$" + Sn] = this["$" + Fe].length
        },
        superClass: "java.io.OutputStream"
    });
    var Ys = G({});
    var Ks = createClass({
        "<init>(Ljava/io/InputStream;)V": function(t) {
            this.stream = t
        },
        "available()I": function() {
            return this.stream["available()I"]()
        },
        "mark(I)V": function(t) {
            return this.stream["mark(I)V"](t)
        },
        "markSupported()Z": function() {
            return this.stream["markSupported()Z"]()
        },
        "read()I": function() {
            return this.stream["read()I"]()
        },
        "read([B)I": function(t) {
            return this["read([BII)I"](t, 0, t.length)
        },
        "read([BII)I": function(t, e, n) {
            return this.stream["read([BII)I"](t, e, n)
        },
        "readBoolean()Z": async function() {
            let t = await X(this.stream, "read()I");
            if (t == 0)
                return 0;
            if (t > 0)
                return 1;
            if (t < 0)
                throw new c.javaRoot.java.io.EOFException
        },
        "readByte()B": async function() {
            let t = await X(this.stream, "read()I");
            if (t == -1)
                throw new c.javaRoot.java.io.EOFException;
            return t >= 128 && (t -= 256),
            t
        },
        "readChar()C": function() {
            return this["readUnsignedShort()I"]()
        },
        "readDouble()D": async function() {
            let t = await this.readUnsignedInt()
              , e = await this.readUnsignedInt();
            return $e(t, e)
        },
        "readFloat()F": async function() {
            var t = await this.readUnsignedInt();
            return He(t)
        },
        "readFully([B)V": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            return this["readFully([BII)V"](t, 0, t.length)
        },
        "readFully([BII)V": async function(t, e, n) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            if (e + n > t.length && (n = t.length - e),
            await X(this.stream, "read([BII)I", [t, e, n]) < n)
                throw new c.javaRoot.java.io.EOFException
        },
        "readInt()I": async function() {
            let t = 0;
            for (let e = 0; e < 4; e++) {
                t = t << 8;
                let n = await X(this.stream, "read()I");
                if (n == -1)
                    throw new c.javaRoot.java.io.EOFException;
                t += n
            }
            return t >= 2147483648 && (t -= 4294967296),
            t
        },
        "readLong()J": async function() {
            let t = await this.readUnsignedInt()
              , e = await this.readUnsignedInt();
            return {
                hi: t,
                lo: e
            }
        },
        "readShort()S": async function() {
            let t = await X(this.stream, "read()I")
              , e = await X(this.stream, "read()I");
            if (t == -1 || e == -1)
                throw new c.javaRoot.java.io.EOFException;
            var n = (t << 8) + e;
            return n >= 32768 && (n -= 65536),
            n
        },
        readUnsignedInt: async function() {
            let t = await X(this, "readInt()I");
            return t < 0 && (t += 4294967296),
            t
        },
        "readUnsignedByte()I": async function() {
            let t = await X(this.stream, "read()I");
            if (t == -1)
                throw new c.javaRoot.java.io.EOFException;
            return t
        },
        "readUnsignedShort()I": async function() {
            let t = await X(this.stream, "read()I")
              , e = await X(this.stream, "read()I");
            if ((t | e) < 0)
                throw new c.javaRoot.java.io.EOFException;
            return (t << 8) + (e << 0)
        },
        "readUTF()Ljava/lang/String;": async function() {
            let t = await X(this, "readUnsignedShort()I")
              , e = [];
            if (await X(this.stream, "read([BII)I", [e, 0, t]) < t)
                throw new c.javaRoot.java.io.EOFException;
            var i = Tt(e);
            if (i == null)
                throw new c.javaRoot.java.io.UTFDataFormatException;
            return new c.javaRoot.java.lang.String(i)
        },
        "reset()V": function() {
            return this.stream["reset()V"]()
        },
        "skip(J)J": function(t) {
            return this.stream["skip(J)J"](t)
        },
        "skipBytes(I)I": async function(t) {
            return (await X(this, "skip(J)J", [{
                hi: 0,
                lo: t
            }])).lo
        },
        "close()V": function() {
            return this.stream["close()V"]()
        },
        superClass: "java.io.InputStream",
        interfaces: ["java.io.DataInput"],
        require: ["java.io.EOFException", "java.io.UTFDataFormatException"]
    });
    var Xs = createClass({
        "<init>(Ljava/io/OutputStream;)V": function(t) {
            this.out = t
        },
        "close()V": function() {
            return this.out["close()V"]()
        },
        "flush()V": function() {
            return this.out["flush()V"]()
        },
        "write(I)V": function(t) {
            return this.out["write(I)V"](t)
        },
        "write([B)V": function(t) {
            return this.out["write([B)V"](t)
        },
        "write([BII)V": function(t, e, n) {
            return this.out["write([BII)V"](t, e, n)
        },
        "writeBoolean(Z)V": function(t) {
            return t ? this.out["write(I)V"](1) : this.out["write(I)V"](0)
        },
        "writeByte(I)V": function(t) {
            return t < 0 && (t += 256),
            this.out["write(I)V"](t)
        },
        "writeChar(I)V": async function(t) {
            t < 0 && (t += 4294967296),
            await X(this, "write(I)V", [Math.floor(t / 256)]),
            await X(this, "write(I)V", [t % 256])
        },
        "writeChars(Ljava/lang/String;)V": async function(t) {
            for (var e = 0; e < t.text.length; e++)
                await X(this, "writeChar(I)V", [t.text.charCodeAt(e)])
        },
        "writeDouble(D)V": function(t) {
            return this["write([B)V"](Pi(t.double, 11, 52))
        },
        "writeFloat(F)V": function(t) {
            return this["write([B)V"](Pi(t, 8, 23))
        },
        "writeInt(I)V": function(t) {
            t < 0 && (t += 4294967296);
            for (var e = [], n = 0; n < 4; n++)
                e[n] = t & 255,
                t = t >> 8;
            return e.reverse(),
            this.out["write([B)V"](e)
        },
        "writeLong(J)V": async function(t) {
            await X(this, "writeInt(I)V", [t.hi]),
            await X(this, "writeInt(I)V", [t.lo])
        },
        "writeShort(I)V": async function(t) {
            t < 0 && (t += 65536),
            await X(this.out, "write(I)V", [Math.floor(t / 256)]),
            await X(this.out, "write(I)V", [t % 256])
        },
        "writeUTF(Ljava/lang/String;)V": async function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            var e = t["getBytes()[B"]();
            await X(this.out, "write(I)V", [(e.length & 65280) >> 8]),
            await X(this.out, "write(I)V", [e.length & 255]),
            await X(this.out, "write([B)V", [e])
        },
        superClass: "java.io.OutputStream"
    });
    var zs = createClass({
        construct: function(t, e) {
            this.array = t || [],
            this.ended = !1
        },
        "available()I": function() {
            this.ensureOpen();
            var t = this.array.length;
            return this.ended ? t : t || 1
        },
        "read()I": function() {
            return this.ensureOpen(),
            this.await(1, function(t) {
                return t.length ? t.shift() : -1
            })
        },
        "read([BII)I": function(t, e, n) {
            return this.ensureOpen(),
            this.await(n, function(i) {
                for (var r = Math.min(n, i.length) || -1, a = 0; a < r; a++) {
                    var o = i.shift();
                    o >= 128 && (o -= 256),
                    t[e + a] = o
                }
                return r
            })
        },
        await: function(t, e) {
            var n = this.array;
            return n.length >= t || this.ended ? e(n) : (this.awaitLength = t,
            new Promise(i=>{
                this.awaitCallback = ()=>{
                    delete this.awaitLength,
                    delete this.awaitCallback,
                    i(e(n))
                }
            }
            ))
        },
        push: function(t, e) {
            if (!this.closed) {
                for (var n = 0; t && n < t.length; n++)
                    this.array.push(t[n]);
                this.ended = e,
                (this.array.length >= this.awaitLength || this.ended || e) && this.awaitCallback && this.awaitCallback()
            }
        },
        superClass: "java.io.InputStream"
    });
    var Th = 1024
      , Ws = createClass({
        construct: function() {
            this.buffer = [],
            this.flushTimer = null
        },
        "write(I)V": function(t) {
            this.ensureOpen();
            let e = this.buffer;
            e.push(t),
            e.length >= Th ? this["flush()V"]() : (clearTimeout(this.flushTimer),
            this.flushTimer = setTimeout(()=>{
                this["flush()V"]()
            }
            , 0))
        },
        "flush()V": function() {
            clearTimeout(this.flushTimer),
            this.buffer.length = 0
        },
        superClass: "java.io.OutputStream"
    });
    var Js = createClass({
        superClass: "java.io.IOException",
        name: "EOFException",
        package: "java.io"
    });
    var Ah = 2048
      , Qs = createClass({
        closed: !1,
        "close()V": function() {
            this.closed = !0
        },
        "markSupported()Z": function() {},
        "read([BII)I": async function(t, e, n) {
            if (await X(this, "available()I") === 0)
                return -1;
            for (let r = 0; r < n; r++) {
                let a = await X(this, "read()I");
                if (a != -1)
                    a >= 128 && (a -= 256),
                    t[e + r] = a;
                else
                    return r === 0 ? -1 : r
            }
            return n
        },
        "read([B)I": function(t) {
            return this["read([BII)I"](t, 0, t.length)
        },
        "skip(J)J": async function(t) {
            let e = lt(t), n;
            if (lt(t).lessThan(0))
                return new Xt(0,0);
            let i = Math.min(Ah, e.toNumber())
              , r = new Array(i);
            for (; e.greaterThan(0) && (n = await X(this, "read([BII)I", [r, 0, Math.min(i, e.toNumber())]),
            !(n < 0)); )
                e = e.subtract(n);
            return At(lt(t).subtract(e))
        },
        getBytes: function() {
            let t = []
              , e = -1;
            for (; (e = this["read()I"]()) != -1; )
                e >= 128 && (e -= 256),
                t.push(e);
            return t
        },
        "available()I": function() {
            return 0
        },
        ensureOpen: function() {
            if (this.closed)
                throw new c.javaRoot.java.io.IOException("Stream closed")
        }
    });
    var tc = createClass({
        superClass: "java.io.Reader",
        require: ["java.io.IOException", "java.lang.IndexOutOfBoundsException", "java.lang.String"],
        "<init>(Ljava/io/InputStream;)V": function(t) {
            return this["<init>(Ljava/io/InputStream;Ljava/lang/String;)V"](t, null)
        },
        "<init>(Ljava/io/InputStream;Ljava/lang/String;)V": function(t, e) {
            let n = e ? e.text : "utf-8";
            if (!Ta(n))
                throw new c.javaRoot.java.io.UnsupportedEncodingException;
            this.leftBytes = [],
            this.isOpen = !0,
            this.stream = t,
            this.encoding = n
        },
        "close()V": function() {
            return this.isOpen = !1,
            this.stream["close()V"]()
        },
        async "read([CII)I"(t, e, n) {
            let i = e
              , r = n;
            if (this.ensureOpen(),
            i < 0 || i > t.length || r < 0 || i + r > t.length || i + r < 0)
                throw new c.javaRoot.java.lang.IndexOutOfBoundsException;
            if (r == 0)
                return 0;
            let a = 4 * r - this.leftBytes.length;
            if (a > 0) {
                let d = new Array(a)
                  , h = await X(this.stream, "read([BII)I", [d, 0, a]);
                h !== -1 && (this.leftBytes = this.leftBytes.concat(d.slice(0, h)))
            }
            if (this.leftBytes.length === 0)
                return -1;
            let o = this.encoding
              , l = Pn(tt.Buffer.from(this.leftBytes), o)
              , u = Math.min(l.length, r);
            l.length > r ? this.leftBytes = this.leftBytes.slice(Zn(l.substring(0, u), o).length) : this.leftBytes = [];
            for (let d = 0; d < u; d++)
                t[i + d] = l.charCodeAt(d);
            return u
        },
        ensureOpen: function() {
            if (!this.isOpen)
                throw new c.javaRoot.java.io.IOException("Stream closed")
        }
    });
    var ec = createClass({
        superClass: "java.io.IOException"
    });
    var nc = createClass({
        superClass: "java.lang.Exception"
    });
    var ic = createClass({
        closed: !1,
        "write([BII)V": function(t, e, n) {
            e + n > t.length && (n = t.length - e);
            for (var i = e; i < e + n; i++)
                this["write(I)V"](t[i])
        },
        "write([B)V": function(t) {
            this["write([BII)V"](t, 0, t.length)
        },
        "flush()V": function() {},
        "close()V": function() {
            this["flush()V"](),
            this.closed = !0
        },
        ensureOpen: function() {
            if (this.closed)
                throw new c.javaRoot.java.io.IOException("Stream closed")
        },
        package: "java.io",
        name: "OutputStream"
    });
    var rc = createClass({
        construct: function(t) {
            this.output = t
        },
        "<init>(Ljava/io/OutputStream;)V": function(t) {
            this.output = t
        },
        "checkError()Z": function() {
            return 0
        },
        "print([C)V": function(t) {
            for (var e = 0; e < t.length; e++)
                this["print(C)V"](t[e])
        },
        "print(C)V": function(t) {
            this.print(String.fromCharCode(t))
        },
        "print(D)V": function(t) {
            this.print(t.double.toString())
        },
        "print(F)V": function(t) {
            this.print(t.toString())
        },
        "print(I)V": function(t) {
            this.print(t.toString())
        },
        "print(J)V": function(t) {
            this.output["write([B)V"](hn(Ke(t)))
        },
        "print(Ljava/lang/Object;)V": function(t) {
            this["print(Ljava/lang/String;)V"](t["toString()Ljava/lang/String;"]())
        },
        "print(Ljava/lang/String;)V": function(t) {
            this.print(t.text)
        },
        "print(Z)V": function(t) {
            t ? this.print("true") : this.print("false")
        },
        "println()V": function() {
            this.output["write(I)V"](10)
        },
        "println([C)V": function(t) {
            this["print([C)V"](t),
            this["println()V"]()
        },
        "println(C)V": function(t) {
            this["print(C)V"](t),
            this["println()V"]()
        },
        "println(D)V": function(t) {
            this["print(D)V"](t),
            this["println()V"]()
        },
        "println(F)V": function(t) {
            this["print(F)V"](t),
            this["println()V"]()
        },
        "println(I)V": function(t) {
            this["print(I)V"](t),
            this.output["write(I)V"](10)
        },
        "println(J)V": function(t) {
            this["print(J)V"](t),
            this.output["write(I)V"](10)
        },
        "println(Ljava/lang/String;)V": function(t) {
            this["print(Ljava/lang/String;)V"](t),
            this.output["write(I)V"](10)
        },
        "println(Ljava/lang/Object;)V": function(t) {
            this["println(Ljava/lang/String;)V"](t["toString()Ljava/lang/String;"]())
        },
        "println(Z)V": function(t) {
            this["print(Z)V"](t),
            this["println()V"]()
        },
        "write(I)V": function(t) {
            this.output["write(I)V"](t)
        },
        print: function(t) {
            var e = hn(t);
            this.output["write([B)V"](e)
        },
        superClass: "java.io.OutputStream"
    });
    var ac = createClass({
        package: "java.io",
        name: "Reader",
        interfaces: ["java.lang.Readable", "java.lang.Closeable"],
        async "read()I"() {
            let t = new Array(1);
            return await X(this, "read([CII)I", [t, 0, 1]) == -1 ? -1 : t[0]
        },
        "read([C)I"(t) {
            return this["read([CII)I"](t, 0, t.length)
        }
    });
    var oc = createClass({
        superClass: "java.io.IOException"
    });
    var sc = createClass({
        superClass: "java.io.IOException"
    });
    var cc = createClass({});
    var lc = createClass({
        "<init>(Ljava/lang/Object;)V": function(t) {
            this.referent = t
        },
        "get()Ljava/lang/Object;": function() {
            return this.referent
        }
    });
    var uc = createClass({
        superClass: "java.lang.RuntimeException"
    });
    var fc = createClass({
        superClass: "java.lang.IndexOutOfBoundsException"
    });
    var dc = createClass({
        construct: function(t) {
            if (this.className = "[" + t.className,
            this.monitorQueue = t.monitorQueue,
            t.waitingThreads || (t.waitingThreads = []),
            this.waitingThreads = t.waitingThreads,
            this.array = t,
            this.className == null)
                throw new Error("unknown array")
        },
        "length()I": function() {
            return this.array.length
        },
        "toString()Ljava/lang/String;": function() {
            var t = Tt(this.array);
            return new c.javaRoot.java.lang.String(t)
        },
        toVector: function() {
            var t = new c.javaRoot.java.util.Vector;
            return t.array = this.array,
            t
        },
        as: function(t) {
            switch (t) {
            case "java.lang.String":
                return this["toString()Ljava/lang/String;"]();
            case "java.util.Vector":
                return this.toVector();
            default:
                return this
            }
        }
    });
    var mc = createClass({
        superClass: "java.lang.RuntimeException"
    });
    var hc = G({
        "close()V"() {}
    });
    var pc = "true"
      , gc = "false"
      , vc = createClass({
        "TRUE:Ljava/lang/Boolean;": pc,
        "FALSE:Ljava/lang/Boolean;": gc,
        "<clinit>()V": function(t) {
            let e = c.statics["$" + pc] = new c.javaRoot.java.lang.Boolean;
            e.value = 1;
            let n = c.statics["$" + gc] = new c.javaRoot.java.lang.Boolean;
            n.value = 0,
            t()
        },
        "<init>(Z)V": function(t) {
            this.value = t
        },
        "booleanValue()Z": function() {
            return this.value
        },
        "equals(Ljava/lang/Object;)Z": function(t) {
            return t && t.className === "java.lang.Boolean" && t.value === this.value ? 1 : 0
        },
        "hashCode()I": function() {
            return this.value === 1 ? 1231 : 1237
        },
        "toString()Ljava/lang/String;": function() {
            return this.value === 1 ? new c.javaRoot.java.lang.String("true") : new c.javaRoot.java.lang.String("false")
        }
    });
    var xc = createClass({
        $MIN_VALUE: -128,
        $MAX_VALUE: 127,
        "<init>(B)V": function(t) {
            this.value = t
        },
        "byteValue()B": function() {
            return this.value
        },
        "compare(BB)I": function(t, e) {
            return t - e
        },
        "compareTo(Ljava/lang/Byte;)I": function(t) {
            return this["compare(BB)I"](this.value, t.value)
        },
        "decode(Ljava/lang/String;)Ljava/lang/Byte;": function(t) {
            var e = c.javaRoot.java.lang.Integer.prototype["decode(Ljava/lang/String;)Ljava/lang/Integer;"](t).value;
            if (e < this.$MIN_VALUEI || e >= this.$MAX_VALUEI)
                throw new c.javaRoot.java.lang.NumberFormatException;
            return this["valueOf(B)Ljava/lang/Byte;"](e)
        },
        "doubleValue()D": function() {
            return {
                double: this.value
            }
        },
        "equals(Ljava/lang/Object;)Z": function(t) {
            return t != null && t.value == this.value ? 1 : 0
        },
        "floatValue()F": function() {
            return this.value
        },
        "hashCode()I": function() {
            return this.value
        },
        "hashCode(B)I": function(t) {
            return t
        },
        "intValue()I": function() {
            return this.value
        },
        "longValue()J": function() {
            return this.value >= 0 ? {
                hi: 0,
                lo: this.value
            } : {
                hi: 4294967295,
                lo: 4294967296 + this.value
            }
        },
        "parseByte(Ljava/lang/String;)B": function(t) {
            return this["parseByte(Ljava/lang/String;I)B"](t, 10)
        },
        "parseByte(Ljava/lang/String;I)B": function(t, e) {
            var n = c.javaRoot.java.lang.Integer.prototype["parseInt(Ljava/lang/String;I)I"](t, e);
            if (n < this.$MIN_VALUEI || n >= this.$MAX_VALUEI)
                throw new c.javaRoot.java.lang.NumberFormatException;
            return n
        },
        "shortValue()S": function() {
            for (var t = this.value; t > 32767; )
                t -= 65536;
            for (; t < -32768; )
                t += 65536;
            return t
        },
        "toString()Ljava/lang/String;": function() {
            return this["toString(I)Ljava/lang/String;"](this.value)
        },
        "toString(B)Ljava/lang/String;": function(t) {
            return c.javaRoot.java.lang.Integer.prototype["toString(I)Ljava/lang/String;"](t)
        },
        "toUnsignedInt(B)I": function(t) {
            return t & 255
        },
        "toUnsignedLong(B)J": function(t) {
            var e = this["toUnsignedInt(B)I"](t);
            return e >= 0 ? {
                hi: 0,
                lo: e
            } : {
                hi: 4294967295,
                lo: 4294967296 + e
            }
        },
        "valueOf(B)Ljava/lang/Byte;": function(t) {
            return new c.javaRoot.java.lang.Byte(t)
        },
        "valueOf(Ljava/lang/String;)Ljava/lang/Byte;": function(t) {
            return this["valueOf(Ljava/lang/String;)Ljava/lang/Byte;"](t, 10)
        },
        "valueOf(Ljava/lang/String;I)Ljava/lang/Byte;": function(t, e) {
            return this["valueOf(B)Ljava/lang/Byte;"](this["parseByte(Ljava/lang/String;I)B"](t, e))
        },
        require: ["java.lang.Integer", "java.lang.NumberFormatException"]
    });
    var _c = createClass({
        $MIN_RADIX: 2,
        $MAX_RADIX: 36,
        "<init>(C)V": function(t) {
            this.value = t
        },
        "charValue()C": function() {
            return this.value
        },
        "digit(CI)I": function(t, e) {
            if (e < 2 || e > 36)
                return -1;
            var n = -1;
            return t >= 48 && t <= 57 && (n = t - 48),
            t >= 97 && t <= 122 && (n = t - 87),
            t >= 65 && t <= 90 && (n = t - 55),
            n >= 0 && n < e ? n : -1
        },
        "isDigit(C)Z": function(t) {
            return t >= 48 && t <= 57 ? 1 : 0
        },
        "toString()Ljava/lang/String;": function() {
            var t = String.fromCharCode(this.value);
            return new c.javaRoot.java.lang.String(t)
        },
        "toUpperCase(C)C": function(t) {
            return String.fromCharCode(t).toUpperCase().charCodeAt(0)
        }
    });
    var Ar = {};
    async function wc(t) {
        for (let e in t) {
            let n = t[e]
              , i = new en;
            Ar[n.filename] = await n.getData(i)
        }
    }
    function we(t) {
        return t.indexOf("/") === 0 && (t = t.substring(1)),
        Ar[t] || null
    }
    function yc(t) {
        delete Ar[t]
    }
    var Ic = createClass({
        construct: function(t) {
            this.classObj = t
        },
        "forName(Ljava/lang/String;)Ljava/lang/Class;": function(t) {
            let e = t.text, n, i = !0, r = c.currentThread;
            function a() {
                if (n)
                    return new c.javaRoot.java.lang.Class(n);
                throw new c.javaRoot.java.lang.ClassNotFoundException
            }
            if (me(e, function(o) {
                i = !1,
                n = o,
                st(r)
            }),
            i)
                c.isThreadSuspended = !0,
                c.restoreStack[r] = [a];
            else
                return a()
        },
        "getResourceAsStream(Ljava/lang/String;)Ljava/io/InputStream;": function(t) {
            let e = t.text;
            e.charAt(0) == "/" && (e = e.substr(1));
            let n = we(e);
            return n ? new c.javaRoot.java.io.BufferStream(new le(n)) : null
        },
        "getName()Ljava/lang/String;": function() {
            let t = this.classObj.prototype.className;
            return new c.javaRoot.java.lang.String(t)
        },
        "isArray()Z": function() {
            return this.className.indexOf("[") != -1 || this.classObj.prototype.className === "java.lang.ArrayObject" ? 1 : 0
        },
        "isAssignableFrom(Ljava/lang/Class;)Z": function(t) {
            return t.classObj.prototype.isImplement(this.classObj.prototype.className) ? 1 : 0
        },
        "isInstance(Ljava/lang/Object;)Z": function(t) {
            return t.isImplement(this.classObj.prototype.className) ? 1 : 0
        },
        "isInterface()Z": function(t) {
            return this.classObj.prototype.type == "interface" ? 1 : 0
        },
        "newInstance()Ljava/lang/Object;": function() {
            let t = new this.classObj;
            return t["<init>()V"](),
            t
        },
        "toString()Ljava/lang/String;": function() {
            let t = "class " + this["getName()Ljava/lang/String;"]().text;
            return new c.javaRoot.java.lang.String(t)
        },
        require: ["java.io.BufferStream"]
    });
    var bc = createClass({
        superClass: "java.lang.RuntimeException",
        name: "ClassCastException",
        package: "java.lang"
    });
    var Ec = createClass({
        superClass: "java.lang.Exception"
    });
    var jc = G({
        superClass: "java.lang.AutoCloseable",
        "close()V"() {}
    });
    var Sc = createClass({
        construct: function(t) {
            this.double = t
        },
        "<init>(D)V": function(t) {
            this.double = t
        },
        "doubleValue()D": function() {
            return this.double
        },
        "parseDouble(Ljava/lang/String;)D": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            if (t.text.indexOf("0x") != -1)
                throw new Error("Hex double!");
            var e = parseFloat(t.text);
            if (isNaN(e))
                throw new c.javaRoot.java.lang.NumberFormatException;
            return {
                double: e
            }
        },
        "valueOf(Ljava/lang/String;)Ljava/lang/Double;": function(t) {
            var e = this["parseDouble(Ljava/lang/String;)D"](t);
            return new c.javaRoot.java.lang.Double(e)
        }
    });
    var Rc = createClass({
        superClass: "java.lang.Throwable",
        package: "java.lang",
        name: "Error"
    });
    var kc = createClass({
        superClass: "java.lang.Throwable"
    });
    var Cc = createClass({
        "<init>(F)V": function(t) {
            this.value = t
        }
    });
    var Tc = createClass({
        superClass: "java.lang.Exception"
    });
    var Ac = createClass({
        superClass: "java.lang.RuntimeException",
        name: "IllegalArgumentException",
        package: "java.lang"
    });
    var Lc = createClass({
        superClass: "java.lang.RuntimeException"
    });
    var Oc = createClass({
        superClass: "java.lang.RuntimeException"
    });
    var Fc = createClass({
        superClass: "java.lang.Exception",
        name: "IndexOutOfBoundsException",
        package: "java.lang"
    });
    var Dc = createClass({
        superClass: "java.lang.Exception"
    });
    var Nc = createClass({
        $MIN_VALUEI: -2147483648,
        $MAX_VALUEI: 2147483647,
        construct: function(t) {
            this.value = t
        },
        "<init>(I)V": function(t) {
            this.value = t
        },
        "byteValue()B": function() {
            for (var t = this.value; t > 127; )
                t -= 256;
            for (; t < -128; )
                t += 256;
            return t
        },
        "decode(Ljava/lang/String;)Ljava/lang/Integer;": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NumberFormatException;
            var e;
            if (t = t.text.replace("#", "0x"),
            /^[+-]0/.test(t) ? e = parseInt(t, 8) : e = parseInt(t),
            isNaN(e))
                throw new c.javaRoot.java.lang.NumberFormatException;
            if (e < this.$MIN_VALUEI || e >= this.$MAX_VALUEI)
                throw new c.javaRoot.java.lang.NumberFormatException;
            return new c.javaRoot.java.lang.Integer(e)
        },
        "doubleValue()D": function() {
            return {
                double: this.value
            }
        },
        "equals(Ljava/lang/Object;)Z": function(t) {
            return t != null && t.value == this.value ? 1 : 0
        },
        "floatValue()F": function() {
            return this.value
        },
        "hashCode()I": function() {
            return this.value
        },
        "intValue()I": function() {
            return this.value
        },
        "longValue()J": function() {
            return this.value >= 0 ? {
                hi: 0,
                lo: this.value
            } : {
                hi: 4294967295,
                lo: 4294967296 + this.value
            }
        },
        "parseInt(Ljava/lang/String;)I": function(t) {
            return c.javaRoot.java.lang.Integer.prototype["parseInt(Ljava/lang/String;I)I"](t, 10)
        },
        "parseInt(Ljava/lang/String;I)I": function(t, e) {
            if (t == null || e < 2 || e > 36 || t != null && t.text == "")
                throw new c.javaRoot.java.lang.NumberFormatException;
            var n = parseInt(t.text, e);
            if (isNaN(n))
                throw new c.javaRoot.java.lang.NumberFormatException;
            if (n < this.$MIN_VALUEI || n >= this.$MAX_VALUEI)
                throw new c.javaRoot.java.lang.NumberFormatException;
            return n
        },
        "shortValue()S": function() {
            for (var t = this.value; t > 32767; )
                t -= 65536;
            for (; t < -32768; )
                t += 65536;
            return t
        },
        "toBinaryString(I)Ljava/lang/String;": function(t) {
            return t < 0 && (t += 4294967296),
            new c.javaRoot.java.lang.String(t.toString(2))
        },
        "toHexString(I)Ljava/lang/String;": function(t) {
            return t < 0 && (t += 4294967296),
            new c.javaRoot.java.lang.String(t.toString(16))
        },
        "toOctalString(I)Ljava/lang/String;": function(t) {
            return t < 0 && (t += 4294967296),
            new c.javaRoot.java.lang.String(t.toString(8))
        },
        "toString()Ljava/lang/String;": function() {
            return this["toString(I)Ljava/lang/String;"](this.value)
        },
        "toString(I)Ljava/lang/String;": function(t) {
            return new c.javaRoot.java.lang.String(t.toString())
        },
        "toString(II)Ljava/lang/String;": function(t, e) {
            return (e < 2 || e > 36) && (e = 10),
            new c.javaRoot.java.lang.String(t.toString(e))
        },
        "valueOf(Ljava/lang/String;)Ljava/lang/Integer;": function(t) {
            return this["valueOf(Ljava/lang/String;I)Ljava/lang/Integer;"](t, 10)
        },
        "valueOf(Ljava/lang/String;I)Ljava/lang/Integer;": function(t, e) {
            var n = c.javaRoot.java.lang.Integer.prototype["parseInt(Ljava/lang/String;I)I"](t, e);
            return new c.javaRoot.java.lang.Integer(n)
        },
        require: ["java.lang.NumberFormatException"]
    });
    var Mc = createClass({
        superClass: "java.lang.Exception",
        name: "InterruptedException",
        package: "java.lang"
    });
    var Bc = createClass({
        superClass: "java.lang.RuntimeException"
    });
    var Vc = createClass({
        "<init>(J)V": function(t) {
            this.value = t
        },
        "longValue()J": function() {
            return this.value
        },
        "parseLong(Ljava/lang/String;)J": function(t) {
            return this["parseLong(Ljava/lang/String;I)J"](t, 10)
        },
        "parseLong(Ljava/lang/String;I)J": function(t, e) {
            if (t == null || !t.text)
                throw new c.javaRoot.java.lang.NumberFormatException("null");
            let n = c.javaRoot.java.lang.Character.prototype;
            if (e < n.MIN_RADIX)
                throw new c.javaRoot.java.lang.NumberFormatException("radix " + e + " less than Character.MIN_RADIX");
            if (e > n.MAX_RADIX)
                throw new c.javaRoot.java.lang.NumberFormatException("radix " + e + " greater than Character.MAX_RADIX");
            return Za(t.text, e)
        },
        require: ["java.lang.NumberFormatException", "java.lang.Character"]
    });
    var Uc = createClass({
        "abs(D)D": function(t) {
            return {
                double: Math.abs(t.double)
            }
        },
        "abs(F)F": function(t) {
            return Math.abs(t)
        },
        "abs(I)I": function(t) {
            return t >= 0 || t === -2147483648 ? t : -t
        },
        "abs(J)J": function(t) {
            return Re(t, {
                hi: 0,
                lo: 0
            }) === 1 || Re(t, {
                hi: 2147483648,
                lo: 0
            }) === 0 ? t : pn(t)
        },
        "cos(D)D": function(t) {
            return {
                double: Math.cos(t.double)
            }
        },
        "min(II)I": Math.min,
        "max(II)I": Math.max,
        "max(JJ)J": function(t, e) {
            return Re(t, e) == 1 ? t : e
        },
        "min(JJ)J": function(t, e) {
            return Re(t, e) == 1 ? e : t
        },
        "min(FF)F": Math.min,
        "max(FF)F": Math.min,
        "sin(D)D": function(t) {
            return {
                double: Math.sin(t.double)
            }
        },
        "sqrt(D)D": function(t) {
            return {
                double: Math.sqrt(t.double)
            }
        },
        "toRadians(D)D": function(t) {
            return {
                double: t.double / 180 * Math.PI
            }
        }
    });
    var Pc = createClass({
        superClass: "java.lang.RuntimeException"
    });
    var Zc = createClass({
        superClass: "java.lang.Error"
    });
    var Hc = createClass({
        superClass: "java.lang.RuntimeException",
        name: "NullPointerException",
        package: "java.lang"
    });
    var $c = createClass({
        "forInputString(Ljava/lang/String;)Ljava/lang/NumberFormatException;": function(t) {
            let e = c.javaRoot.java.lang.NumberFormatException;
            return new e('For input string: "' + t + '"')
        },
        superClass: "java.lang.Exception"
    });
    var Gc = createClass({
        "<init>()V": function() {},
        classCache: [],
        "getClass()Ljava/lang/Class;": function() {
            var t = this.className;
            t[0] === "[" && (t = "java.lang.ArrayObject");
            var e = this.classCache[t];
            return e == null && (e = new c.javaRoot.java.lang.Class(It(t)),
            this.classCache[t] = e),
            e
        },
        "toString()Ljava/lang/String;": function() {
            var t = this.className + ":" + this["hashCode()I"]();
            return new c.javaRoot.java.lang.String(t)
        },
        "wait(J)V": fe(function(t) {
            var e = c.currentThread;
            this.checkOwnership(),
            this.waitingThreads || (this.waitingThreads = []),
            this.releaseOwnership();
            var n = {
                threadId: e,
                timeoutId: 0
            };
            this.waitingThreads.push(n);
            var i = this.waitingThreads
              , r = this;
            c.restoreStack[e] = [function() {
                Ze(r)
            }
            ],
            c.isThreadSuspended = !0,
            t.lo > 0 && (n.timeoutId = setTimeout(function() {
                var a = i.indexOf(n);
                a !== -1 ? (i[a] = i[i.length - 1],
                i.pop(),
                st(e)) : console.error("This should not happen!")
            }, t.lo))
        }),
        "wait()V": fe(function() {
            this["wait(J)V"]({
                hi: 0,
                lo: 0
            })
        }),
        "hashCode()I": function() {
            return c.lastHash == null && (c.lastHash = 1),
            this.hashCode == null && (this.hashCode = c.lastHash,
            c.lastHash++),
            this.hashCode
        },
        "notify()V": function() {
            if (this.checkOwnership(),
            this.waitingThreads) {
                var t = this.waitingThreads.pop();
                t && (clearTimeout(t.timeoutId),
                setTimeout(function() {
                    st(t.threadId)
                }, 1))
            }
        },
        "notifyAll()V": function() {
            if (this.checkOwnership(),
            this.waitingThreads)
                for (var t, e; e = this.waitingThreads.pop(); )
                    clearTimeout(e.timeoutId),
                    function(n) {
                        setTimeout(function() {
                            st(n.threadId)
                        }, 1)
                    }(e)
        },
        "equals(Ljava/lang/Object;)Z": function(t) {
            return this == t ? 1 : 0
        },
        isImplement: function(t) {
            if (this.className == t)
                return !0;
            try {
                for (var e = 0; this.interfaces && e < this.interfaces.length; e++) {
                    var n = It(this.interfaces[e]).prototype;
                    if (n.isImplement(t))
                        return !0
                }
                if (this.superClass) {
                    var i = It(this.superClass).prototype;
                    if (i.isImplement(t))
                        return !0
                }
            } catch (r) {
                console.error(r)
            }
            return !1
        },
        checkOwnership: function() {
            if (!this.monitorQueue || this.monitorQueue[0] !== c.currentThread)
                throw new c.javaRoot.java.lang.IllegalMonitorStateException
        },
        releaseOwnership: function() {
            if (this.monitorQueue) {
                for (; this.monitorQueue[0] === c.currentThread; )
                    this.monitorQueue.shift();
                if (this.monitorQueue.length !== 0) {
                    var t = this.monitorQueue[0];
                    t != null && setTimeout(function() {
                        st(t)
                    }, 1)
                }
            }
        },
        require: ["java.lang.IllegalMonitorStateException"]
    });
    var qc = createClass({
        superClass: "java.lang.VirtualMachineError",
        package: "java.lang",
        name: "OutOfMemoryError"
    });
    var Yc = G({
        "read(Ljava/nio/CharBuffer)I"() {}
    });
    var Kc = G({
        name: "Runnable",
        package: "java.lang"
    });
    var Xc = createClass({
        "exit(I)V": function(t) {
            console.log("EXIT " + t),
            c.kill = !0
        },
        "freeMemory()J": function() {
            return {
                hi: 0,
                lo: 5e5
            }
        },
        "gc()V": function() {},
        "getRuntime()Ljava/lang/Runtime;": function() {
            return new c.javaRoot.java.lang.Runtime
        },
        "totalMemory()J": function() {
            return {
                hi: 0,
                lo: 1e6
            }
        }
    });
    var zc = createClass({
        superClass: "java.lang.Exception"
    });
    var Wc = createClass({
        superClass: "java.lang.RuntimeException"
    });
    var Jc = createClass({
        "<init>(S)V": function(t) {
            this.value = t
        },
        "hashCode()I": function() {
            return this.value
        },
        "shortValue()S": function() {
            return this.value
        }
    });
    var Qc = createClass({
        pool: {},
        construct: function(t) {
            this.text = t || "",
            this.pool[this.text] || (this.pool[this.text] = this)
        },
        "<init>(Ljava/lang/String;)V": function(t) {
            this.text = t.text
        },
        "<init>([BLjava/lang/String;)V": function(t, e) {
            let n = e ? e.text : "utf-8"
              , i = tt.Buffer.from(t);
            try {
                this.text = Pn(i, n)
            } catch {
                throw new c.javaRoot.java.io.UnsupportedEncodingException(e.text)
            }
        },
        "<init>([B)V": function(t) {
            this["<init>([BLjava/lang/String;)V"](t)
        },
        "<init>([BII)V": function(t, e, n) {
            this.text = Tt(t, e, n)
        },
        "<init>([BIILjava/lang/String;)V": function(t, e, n) {
            this["<init>([BII)V"](t, e, n)
        },
        "<init>([C)V": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            this.text = "";
            for (var e = 0; e < t.length; e++)
                this.text += String.fromCharCode(t[e])
        },
        "<init>([CII)V": function(t, e, n) {
            this["<init>([C)V"](t.slice(e, e + n))
        },
        "<init>(Ljava/lang/StringBuffer;)V": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            return t["toString()Ljava/lang/String;"]()
        },
        "charAt(I)C": function(t) {
            if (t < 0 || t >= this.text.length)
                throw new c.javaRoot.java.lang.IndexOutOfBoundsException;
            return this.text.charCodeAt(t)
        },
        "compareTo(Ljava/lang/String;)I": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            if (this.text == t.text)
                return 0;
            if (this.text.length != t.text.length)
                return this.text.length - t.text.length;
            for (var e = 0; e < this.text.length; e++)
                if (this.text.charAt(e) != t.text.charAt(e))
                    return this.text.charCodeAt(e) - t.text.charCodeAt(e)
        },
        "concat(Ljava/lang/String;)Ljava/lang/String;": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            return new c.javaRoot.java.lang.String(this.text + t.text)
        },
        "endsWith(Ljava/lang/String;)Z": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            return this.text.lastIndexOf(t.text) == this.text.length - t.text.length ? 1 : 0
        },
        "equals(Ljava/lang/Object;)Z": function(t) {
            return t == null ? 0 : this.className == t.className && this.text == t.text ? 1 : 0
        },
        "equalsIgnoreCase(Ljava/lang/String;)Z": function(t) {
            return t == null ? 0 : this.text.toLowerCase() == t.text.toLowerCase() ? 1 : 0
        },
        "getBytes()[B": function() {
            for (var t = hn(this.text), e = 0; e < t.length; e++)
                t[e] >= 128 && (t[e] -= 256);
            return t
        },
        "getBytes(Ljava/lang/String;)[B": function(t) {
            let e = t ? t.text : "utf-8";
            try {
                return Array.from(Zn(this.text, e))
            } catch {
                throw new c.javaRoot.java.io.UnsupportedEncodingException(t.text)
            }
        },
        "getChars(II[CI)V": function(t, e, n, i) {
            var r = e - t;
            if (n == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            if (t < 0 || t > e || e > this.text.length || i < 0 || i + r > n.length)
                throw new c.javaRoot.java.lang.IndexOutOfBoundsException;
            for (var a = 0; a < r; a++)
                n[i + a] = this.text.charCodeAt(t + a)
        },
        "hashCode()I": function() {
            for (var t = 0, e = 0; e < this.text.length; e++) {
                for (var n = this.text.charCodeAt(e), i = this.text.length - e - 1, r = 0; r < i; r++)
                    n = n * 31 % 4294967296;
                t = (t + n) % 4294967296
            }
            return t >= 2147483648 && (t -= 2147483648),
            t
        },
        "indexOf(I)I": function(t) {
            return this["indexOf(II)I"](t, 0)
        },
        "indexOf(II)I": function(t, e) {
            e < 0 && (e = 0);
            for (var n = e; n < this.text.length; n++)
                if (this.text.charCodeAt(n) == t)
                    return n;
            return -1
        },
        "indexOf(Ljava/lang/String;)I": function(t) {
            return this["indexOf(Ljava/lang/String;I)I"](t, 0)
        },
        "indexOf(Ljava/lang/String;I)I": function(t, e) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            return this.text.indexOf(t.text, e)
        },
        "intern()Ljava/lang/String;": function() {
            return this.pool[this.text]
        },
        "lastIndexOf(I)I": function(t) {
            return this["lastIndexOf(II)I"](t, this.text.length - 1)
        },
        "lastIndexOf(II)I": function(t, e) {
            e > this.text.length - 1 && (e = this.text.length - 1);
            for (var n = e; n >= 0; n--)
                if (this.text.charCodeAt(n) == t)
                    return n;
            return -1
        },
        "length()I": function() {
            return this.text.length
        },
        "regionMatches(ZILjava/lang/String;II)Z": function(t, e, n, i, r) {
            return e < 0 || i < 0 || e + r > this.text.length || i + r > n.text.length ? 0 : t && this.text.toLowerCase().substr(e, r) === n.text.toLowerCase().substr(i, r) || this.text.substr(e, r) === n.text.substr(i, r) ? 1 : 0
        },
        "replace(CC)Ljava/lang/String;": function(t, e) {
            var n = String.fromCharCode(t);
            n === "[" && (n = "\\" + n);
            var i = new RegExp(n,"g");
            return new c.javaRoot.java.lang.String(this.text.replace(i, String.fromCharCode(e)))
        },
        "startsWith(Ljava/lang/String;)Z": function(t) {
            return this["startsWith(Ljava/lang/String;I)Z"](t, 0)
        },
        "startsWith(Ljava/lang/String;I)Z": function(t, e) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            return this.text.indexOf(t.text, e) == e ? 1 : 0
        },
        "substring(II)Ljava/lang/String;": function(t, e) {
            if (t < 0 || e > this.text.length || t > e)
                throw new c.javaRoot.java.lang.IndexOutOfBoundsException;
            return new c.javaRoot.java.lang.String(this.text.substring(t, e))
        },
        "substring(I)Ljava/lang/String;": function(t) {
            return this["substring(II)Ljava/lang/String;"](t, this.text.length)
        },
        "toCharArray()[C": function() {
            for (var t = [], e = 0; e < this.text.length; e++)
                t.push(this.text.charCodeAt(e));
            return t
        },
        "toLowerCase()Ljava/lang/String;": function() {
            return new c.javaRoot.java.lang.String(this.text.toLowerCase())
        },
        "toString()Ljava/lang/String;": function() {
            return this
        },
        "toUpperCase()Ljava/lang/String;": function() {
            return new c.javaRoot.java.lang.String(this.text.toUpperCase())
        },
        "trim()Ljava/lang/String;": function() {
            for (var t = 0; t < this.text.length && this.text.charCodeAt(t) <= 32; t++)
                ;
            for (var e = t, t = this.text.length - 1; t >= 0 && this.text.charCodeAt(t) <= 32; t--)
                ;
            var n = t + 1, i;
            return n <= e ? i = "" : i = this.text.substring(e, n),
            new c.javaRoot.java.lang.String(i)
        },
        "valueOf([C)Ljava/lang/String;": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            return this["valueOf([CII)Ljava/lang/String;"](t, 0, t.length)
        },
        "valueOf([CII)Ljava/lang/String;": function(t, e, n) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            for (var i = "", r = 0; r < n; r++)
                i += String.fromCharCode(t[e + r]);
            return new c.javaRoot.java.lang.String(i)
        },
        "valueOf(I)Ljava/lang/String;": function(t) {
            return new c.javaRoot.java.lang.String(t.toString())
        },
        "valueOf(C)Ljava/lang/String;": function(t) {
            return new c.javaRoot.java.lang.String(String.fromCharCode(t))
        },
        "valueOf(D)Ljava/lang/String;": function(t) {
            return new c.javaRoot.java.lang.String(t.double.toString())
        },
        "valueOf(F)Ljava/lang/String;": function(t) {
            return new c.javaRoot.java.lang.String(t.toString())
        },
        "valueOf(J)Ljava/lang/String;": function(t) {
            return new c.javaRoot.java.lang.String(Ke(t))
        },
        "valueOf(Ljava/lang/Object;)Ljava/lang/String;": function(t) {
            return t == null ? new c.javaRoot.java.lang.String("null") : t.constructor === Array ? new c.javaRoot.java.lang.String("[") : t["toString()Ljava/lang/String;"]()
        },
        "valueOf(Z)Ljava/lang/String;": function(t) {
            return t ? new c.javaRoot.java.lang.String("true") : new c.javaRoot.java.lang.String("false")
        },
        require: ["java.io.UnsupportedEncodingException", "java.lang.IndexOutOfBoundsException", "java.lang.NullPointerException"]
    });
    var tl = createClass({
        "<init>()V": function() {
            this.capacity = 256,
            this.string = ""
        },
        "<init>(I)V": function(t) {
            this["<init>()V"](),
            this.capacity = t
        },
        "<init>(Ljava/lang/String;)V": function(t) {
            this.string = t.text
        },
        insert: function(t, e) {
            if (t < 0 || t > this.string.length)
                throw new c.javaRoot.java.lang.StringIndexOutOfBoundsException("String index out of range: " + t);
            return this.string = this.string.substr(0, t) + e + this.string.substr(t),
            this
        },
        appendNull: function() {
            return this.string += "null",
            this
        },
        "append(Ljava/lang/String;)Ljava/lang/StringBuffer;": function(t) {
            return t != null ? this.string += t.text : this.string += "null",
            this
        },
        "append(J)Ljava/lang/StringBuffer;": function(t) {
            return this.string += Ke(t),
            this
        },
        "append(I)Ljava/lang/StringBuffer;": function(t) {
            return this.string += t.toString(),
            this
        },
        "toString()Ljava/lang/String;": function() {
            return new c.javaRoot.java.lang.String(this.string)
        },
        "append(C)Ljava/lang/StringBuffer;": function(t) {
            return this.string += String.fromCharCode(t),
            this
        },
        "append(Ljava/lang/Object;)Ljava/lang/StringBuffer;": function(t) {
            return t == null ? this.appendNull() : this["append(Ljava/lang/String;)Ljava/lang/StringBuffer;"](t["toString()Ljava/lang/String;"]())
        },
        "append(D)Ljava/lang/StringBuffer;": function(t) {
            return this.string += t.double.toString(),
            this
        },
        "append(Z)Ljava/lang/StringBuffer;": function(t) {
            return t ? this.strings += "true" : this.strings += "false",
            this
        },
        "length()I": function() {
            return this.string.length
        },
        "delete(II)Ljava/lang/StringBuffer;": function(t, e) {
            if (t < 0 || t > this.string.length || t > e)
                throw new c.javaRoot.java.lang.StringIndexOutOfBoundsException;
            return this.string = this.string.substring(0, t) + this.string.substring(e),
            this
        },
        "deleteCharAt(I)Ljava/lang/StringBuffer;": function(t) {
            return this["delete(II)Ljava/lang/StringBuffer;"](t, t + 1)
        },
        "charAt(I)C": function(t) {
            if (t < 0 || t >= this.string.length)
                throw new c.javaRoot.java.lang.StringIndexOutOfBoundsException("String index out of range: " + t);
            return this.string.charCodeAt(t)
        },
        "ensureCapacity(I)V": function(t) {
            this.capacity = t
        },
        "getChars(II[CI)V": function(t, e, n, i) {
            if (n == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            if (t < 0 || i < 0 || t > e || e > this.string.length || i + e - t > n.length)
                throw new c.javaRoot.java.lang.IndexOutOfBoundsException;
            for (var r = 0; r < e - t; r++)
                n[i + r] = this.string.charCodeAt(t + r)
        },
        "insert(IC)Ljava/lang/StringBuffer;": function(t, e) {
            return this.insert(t, String.fromCharCode(e))
        },
        "insert(II)Ljava/lang/StringBuffer;": function(t, e) {
            return this.insert(t, e)
        },
        "insert(ILjava/lang/String;)Ljava/lang/StringBuffer;": function(t, e) {
            return this.insert(t, e.text)
        },
        "setCharAt(IC)V": function(t, e) {
            if (t < 0 || t >= this.string.length)
                throw new c.javaRoot.java.lang.StringIndexOutOfBoundsException("String index out of range: " + t);
            this.string = this.string.substr(0, t) + String.fromCharCode(e) + this.string.substr(t + 1)
        },
        "setLength(I)V": function(t) {
            if (t < 0)
                throw new c.javaRoot.java.lang.StringIndexOutOfBoundsException("String index out of range: " + t);
            if (t > this.string.length)
                throw new Error("setLength: not supported yet");
            this.string = this.string.substr(0, t)
        }
    });
    var el = createClass({
        superClass: "java.lang.IndexOutOfBoundsException"
    });
    var nl = "out"
      , il = createClass({
        properties: {
            "microedition.configuration": "cdc",
            "microedition.encoding": "UTF-8",
            "microedition.locale": "en-US",
            "microedition.platform": "j2me.online/1.1",
            "file.separator": "/",
            "fileconn.dir.memorycard": "file:///sdcard/",
            "microedition.io.file.FileConnection.version": "1.0"
        },
        "out:Ljava/io/PrintStream;": nl,
        "currentTimeMillis()J": function() {
            var t = Date.now();
            return {
                hi: ~~(t / 4294967296),
                lo: t % 4294967296
            }
        },
        "<clinit>()V": function(t) {
            c.statics["$" + nl] = new c.javaRoot.java.io.PrintStream({
                buffer: "",
                "write([B)V": function(e) {
                    if (!et.app)
                        for (var n in e)
                            this["write(I)V"](e[n])
                },
                "write(I)V": function(e) {
                    et.app || (e == 10 ? (console.log(this.buffer),
                    this.buffer = "") : typeof e == "number" ? this.buffer += String.fromCharCode(e) : this.buffer += e)
                }
            }),
            t()
        },
        "gc()V": function() {
            c.javaRoot.java.lang.Runtime.prototype["getRuntime()Ljava/lang/Runtime;"]()["gc()V"]()
        },
        "arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V": function(t, e, n, i, r) {
            if (t == null || n == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            for (var a = [], o = 0; o < r; o++)
                a[o] = t[e + o];
            for (var o = 0; o < r; o++)
                n[i + o] = a[o]
        },
        "getProperty(Ljava/lang/String;)Ljava/lang/String;": function(t) {
            let e = t.text;
            return e === "fileconn.dir.private" ? new c.javaRoot.java.lang.String("file:///dirs/" + c.manifest["midlet-name"] + "/") : this.properties[e] ? new c.javaRoot.java.lang.String(this.properties[e]) : null
        },
        require: ["java.io.PrintStream", "java.lang.Runtime"]
    });
    var rl = createClass({
        construct: function(t) {
            t instanceof Function && (this["run()V"] = t)
        },
        "<init>(Ljava/lang/Runnable;Ljava/lang/String;)V": function(t, e) {
            this.runnable = t,
            this.name = e
        },
        "<init>(Ljava/lang/Runnable;)V": function(t) {
            this["<init>(Ljava/lang/Runnable;Ljava/lang/String;)V"](t)
        },
        "start()V": function() {
            var t = this
              , e = this.runnable || t;
            t.id = c.threads.length,
            c.threads.push(t),
            c.restoreStack[t.id] = [],
            c.VMMapping[t.id] = c.currentVM,
            setTimeout(function() {
                Bn(t.id),
                e["run()V"]()
            }, 1)
        },
        "sleep(J)V": fe(function(t) {
            c.isThreadSuspended = !0;
            var e = c.currentThread;
            setTimeout(function() {
                st(e)
            }, t.lo)
        }),
        "yield()V": fe(function() {
            c.isThreadSuspended = !0;
            var t = c.currentThread;
            setTimeout(function() {
                st(t)
            }, 10)
        }),
        "currentThread()Ljava/lang/Thread;": function() {
            return c.threads[c.currentThread]
        },
        "interrupt()V": function() {},
        "isAlive()Z": function() {
            return this.id === c.currentThread || c.restoreStack[this.id] ? 1 : 0
        },
        "setPriority(I)V": function(t) {
            this.priority = t
        },
        "activeCount()I": function() {
            return c.threads.length
        },
        "getPriority()I": function() {
            return this.priority || 5
        }
    });
    var al = createClass({
        construct: function(t) {
            if (!et.app)
                try {
                    throw new Error
                } catch (e) {
                    this.stack = e.stack
                }
            t && (this.message = new c.javaRoot.java.lang.String(t))
        },
        "<init>(Ljava/lang/String;)V": function(t) {
            this.message = t
        },
        "getMessage()Ljava/lang/String;": function() {
            return this.message
        },
        "printStackTrace()V": function() {
            console.log(this.stack)
        },
        "toString()Ljava/lang/String;": function() {
            var t = this["getClass()Ljava/lang/Class;"]()["getName()Ljava/lang/String;"]();
            return this.message && (t.text += ": " + this.message.text),
            t
        },
        toString: function() {
            return this["toString()Ljava/lang/String;"]().text + `
` + this.stack
        }
    });
    var ol = createClass({
        superClass: "java.lang.IndexOutOfBoundsException"
    });
    var sl = createClass({
        superClass: "java.lang.Error",
        package: "java.lang",
        name: "VirtualMachineError"
    });
    var cl = createClass({});
    var ll = createClass({});
    var ul = createClass({});
    var fl = createClass({
        construct: function(t) {
            this.keys = [];
            for (var e in t)
                this.keys.push(e);
            this.array = t,
            this.index = 0
        },
        "hasMoreElements()Z": function() {
            return this.index < this.keys.length ? 1 : 0
        },
        "nextElement()Ljava/lang/Object;": function() {
            var t = this.keys[this.index++];
            return this.array[t]
        },
        interfaces: ["java.util.Enumeration"]
    });
    var dl = createClass({
        $YEARI: 1,
        $MONTHI: 2,
        $DATEI: 5,
        $DAY_OF_MONTHI: 5,
        $DAY_OF_WEEKI: 7,
        $HOURI: 10,
        $HOUR_OF_DAYI: 11,
        $AM_PMI: 9,
        $MINUTEI: 12,
        $SECONDI: 13,
        $MILLISECONDI: 14,
        construct: function() {
            this.date = new Date
        },
        "getInstance()Ljava/util/Calendar;": function() {
            return new c.javaRoot.java.util.Calendar
        },
        "getInstance(Ljava/util/TimeZone;)Ljava/util/Calendar;": function() {
            return new c.javaRoot.java.util.Calendar
        },
        "get(I)I": function(t) {
            switch (t) {
            case this.$YEARI:
                return this.date.getFullYear();
            case this.$HOURI:
                return this.date.getHours() % 12;
            case this.$HOUR_OF_DAYI:
                return this.date.getHours();
            case this.$MINUTEI:
                return this.date.getMinutes();
            case this.$SECONDI:
                return this.date.getSeconds();
            case this.$DAY_OF_WEEKI:
                return this.date.getDay() + 1;
            case this.$DAY_OF_MONTHI:
                return this.date.getDate();
            case this.$MONTHI:
                return this.date.getMonth();
            case this.$MILLISECONDI:
                return this.date.getMilliseconds();
            case this.$AM_PMI:
                return this.date.getHours() < 12 ? 0 : 1;
            default:
                break
            }
            throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException("Calendar: field not supported " + t)
        },
        "getTime()Ljava/util/Date;": function() {
            return new c.javaRoot.java.util.Date(new Date(this.date.getTime()))
        },
        "set(II)V": function(t, e) {
            switch (t) {
            case this.$YEARI:
                return this.date.setFullYear(e);
            case this.$HOURI:
            case this.$HOUR_OF_DAYI:
                return this.date.setHours(e);
            case this.$MINUTEI:
                return this.date.setMinutes(e);
            case this.$SECONDI:
                return this.date.setSeconds(e);
            case this.$DAY_OF_MONTHI:
                return this.date.setDate(e);
            case this.$MONTHI:
                return this.date.setMonth(e);
            case this.$MILLISECONDI:
                return this.date.setMilliseconds(e);
            case this.$AM_PMI:
                return this.date.setHours(this.date.getHours() + (e === 0 ? -12 : 12));
            default:
                break
            }
            throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException("Calendar: field not supported " + t)
        },
        "setTime(Ljava/util/Date;)V": function(t) {
            this.date = t.date
        },
        "setTimeZone(Ljava/util/TimeZone;)V": function() {
            console.log("TODO Calendar.setTimeZone")
        },
        require: ["java.util.Date"]
    });
    var ml = createClass({
        construct: function(t) {
            this.date = t || new Date
        },
        "<init>()V": function() {
            this.date = new Date
        },
        "<init>(J)V": function(t) {
            this.date = new Date(Se(t))
        },
        "equals(Ljava/lang/Object;)Z": function(t) {
            return !t || t.className != this.className || t.date.getTime() != this.date.getTime() ? 0 : 1
        },
        "getTime()J": function() {
            var t = Math.floor(this.date.getTime() / 4294967296)
              , e = this.date.getTime() % 4294967296;
            return {
                hi: t,
                lo: e
            }
        },
        "hashCode()I": function() {
            var t = this["getTime()J"]();
            return t.hi ^ t.lo
        },
        "setTime(J)V": function(t) {
            this["<init>(J)V"](t)
        },
        "toString()Ljava/lang/String;": function() {
            return new c.javaRoot.java.lang.String(this.date.toString())
        }
    });
    var hl = G({
        "hasMoreElements()Z": function() {},
        "nextElement()Ljava/lang/Object;"() {}
    });
    function Rn(t) {
        let e = "hashCode()I";
        return (t[e] || c.javaRoot.java.lang.Object.prototype[e]).apply(t)
    }
    var pl = createClass({
        "<init>()V": function() {
            this.array = [],
            this.keys = []
        },
        "<init>(I)V": function() {
            this.array = [],
            this.keys = []
        },
        "get(Ljava/lang/Object;)Ljava/lang/Object;": function(t) {
            return this.array[Rn(t)]
        },
        "put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;": function(t, e) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            var n = this.array[Rn(t)];
            return this.array[Rn(t)] = e,
            this.keys.push(t),
            n
        },
        "clear()V": function() {
            this.array = [],
            this.keys = []
        },
        "contains(Ljava/lang/Object;)Z": function(t) {
            for (var e in this.array)
                if (this.array[e] == t)
                    return 1;
            return 0
        },
        "containsKey(Ljava/lang/Object;)Z": function(t) {
            for (var e in this.array)
                if (e == Rn(t))
                    return 1;
            return 0
        },
        "elements()Ljava/util/Enumeration;": function() {
            var t = new c.javaRoot.java.util.ArrayEnumeration(this.array);
            return t
        },
        "isEmpty()Z": function() {
            return this.keys === 0 ? 0 : 1
        },
        "size()I": function() {
            return this.keys.length
        },
        "keys()Ljava/util/Enumeration;": function() {
            var t = new c.javaRoot.java.util.ArrayEnumeration(this.keys);
            return t
        },
        "remove(Ljava/lang/Object;)Ljava/lang/Object;": function(t) {
            delete this.array[Rn(t)],
            this.keys.splice(this.keys.indexOf(t), 1)
        },
        require: ["java.util.ArrayEnumeration"]
    });
    var gl = createClass({
        superClass: "java.lang.RuntimeException",
        name: "NoSuchElementException",
        package: "java.util"
    });
    var vl = createClass({});
    var xl = createClass({
        "<init>()V": function() {},
        "<init>(J)V": function(t) {},
        "nextInt(I)I": function(t) {
            return Math.floor(Math.random() * t)
        },
        "nextInt()I": function() {
            return this["nextInt(I)I"](4294967296) - 2147483648
        },
        "nextLong()J": function() {
            return {
                hi: Math.floor(Math.random() * 4294967296),
                lo: Math.floor(Math.random() * 4294967296)
            }
        },
        "setSeed(J)V": function() {}
    });
    var _l = createClass({
        "empty()Z": function() {
            return this["isEmpty()Z"]()
        },
        "peek()Ljava/lang/Object;": function() {
            return this["lastElement()Ljava/lang/Object;"]()
        },
        "pop()Ljava/lang/Object;": function() {
            var t = this["lastElement()Ljava/lang/Object;"]();
            return this["removeElement(Ljava/lang/Object;)Z"](t),
            t
        },
        "push(Ljava/lang/Object;)Ljava/lang/Object;": function(t) {
            return this["addElement(Ljava/lang/Object;)V"](t),
            t
        },
        superClass: "java.util.Vector"
    });
    var wl = createClass({
        "<init>()V": function() {
            this.threadId = c.threads.length;
            let t = this;
            c.threads.push(t),
            c.restoreStack[t.threadId] = [],
            c.VMMapping[t.threadId] = c.currentVM,
            this.timers = []
        },
        "schedule(Ljava/util/TimerTask;J)V": function(t, e) {
            t.executing = !0;
            var n = this;
            t.timer = setTimeout(function() {
                t.executing = !1,
                t["run()V"]()
            }, e.lo),
            this.timers.push(t.timer)
        },
        "schedule(Ljava/util/TimerTask;JJ)V": function(t, e, n) {
            t.executing = !0;
            var i = this;
            t.timer = setInterval(function() {
                c.currentThread = i.threadId,
                !(c.restoreStack[i.threadId] && c.restoreStack[i.threadId].length > 0) && (clearTimeout(t.timer),
                n && (t.timer = setInterval(function() {
                    c.currentThread = i.threadId,
                    !(c.restoreStack[i.threadId] && c.restoreStack[i.threadId].length > 0) && t["run()V"]()
                }, n.lo),
                i.timers.push(t.timer)),
                t["run()V"]())
            }, e.lo),
            this.timers.push(t.timer)
        },
        "scheduleAtFixedRate(Ljava/util/TimerTask;JJ)V": function(t, e, n) {
            t.executing = !0;
            var i = this;
            t.timer = setTimeout(function() {
                n && (t.timer = setInterval(function() {
                    t["run()V"]()
                }, n.lo),
                i.timers.push(t.timer)),
                t["run()V"]()
            }, e.lo),
            this.timers.push(t.timer)
        },
        "cancel()V": function() {
            for (var t = 0; t < this.timers.length; t++)
                clearTimeout(this.timers[t])
        }
    });
    var yl = createClass({
        "cancel()Z": function() {
            return clearTimeout(this.timer),
            this.executing ? 1 : 0
        },
        name: "TimerTask",
        package: "java.util"
    });
    var Il = createClass({
        construct: function() {
            this.date = new Date
        },
        "getDefault()Ljava/util/TimeZone;": function() {
            return new c.javaRoot.java.util.TimeZone
        },
        "getTimeZone(Ljava/lang/String;)Ljava/util/TimeZone;": function(t) {
            return new c.javaRoot.java.util.TimeZone
        }
    });
    var bl = createClass({
        package: "java.util",
        name: "Vector",
        "<init>()V": function() {
            this["<init>(I)V"](10)
        },
        "<init>(I)V": function(t) {
            this["<init>(II)V"](t, 0)
        },
        "<init>(II)V": function(t, e) {
            this.array = new Array
        },
        "addElement(Ljava/lang/Object;)V": function(t) {
            this.array.push(t)
        },
        "contains(Ljava/lang/Object;)Z": function(t) {
            for (var e in this.array)
                if (this.array[e] == t)
                    return 1;
            return 0
        },
        "copyInto([Ljava/lang/Object;)V": function(t) {
            var e = 0;
            for (var n in this.array)
                t[e] = this.array[n],
                e++
        },
        "elementAt(I)Ljava/lang/Object;": function(t) {
            if (t >= this.array.length)
                throw new c.javaRoot.java.util.NoSuchElementException;
            return this.array[t]
        },
        "elements()Ljava/util/Enumeration;": function() {
            var t = new c.javaRoot.java.util.ArrayEnumeration(this.array);
            return t
        },
        "firstElement()Ljava/lang/Object;": function() {
            return this["elementAt(I)Ljava/lang/Object;"](0)
        },
        "insertElementAt(Ljava/lang/Object;I)V": function(t, e) {
            if (e < 0 || e > this.array.length)
                throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException;
            for (var n = this.array.length - 1; n >= e; n--)
                this.array[n + 1] = this.array[n];
            this.array[e] = t
        },
        "indexOf(Ljava/lang/Object;)I": function(t) {
            for (var e = 0; e < this.array.length; e++)
                if (this.array[e] === t)
                    return e;
            return -1
        },
        "isEmpty()Z": function() {
            return this.array.length > 0 ? 0 : 1
        },
        "lastElement()Ljava/lang/Object;": function() {
            if (this.array.length == 0)
                throw new c.javaRoot.java.util.NoSuchElementException;
            return this.array[this.array.length - 1]
        },
        "removeAllElements()V": function() {
            this.array = []
        },
        "removeElement(Ljava/lang/Object;)Z": function(t) {
            for (var e = 0; e < this.array.length; e++)
                if (this.array[e] === t)
                    return this["removeElementAt(I)V"](e),
                    1;
            return 0
        },
        "removeElementAt(I)V": function(t) {
            if (t < 0 || t >= this.array.length)
                throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException;
            for (var e = t; e < this.array.length; e++)
                this.array[e] = this.array[e + 1];
            this.array.pop()
        },
        "setElementAt(Ljava/lang/Object;I)V": function(t, e) {
            if (e < 0 || e >= this.array.length)
                throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException;
            this.array[e] = t
        },
        "setSize(I)V": function() {},
        "size()I": function() {
            return this.array.length
        },
        "trimToSize()V": function() {},
        require: ["java.util.NoSuchElementException", "java.lang.ArrayIndexOutOfBoundsException", "java.util.ArrayEnumeration"]
    });
    var El = createClass({});
    var jl = createClass({});
    var Sl = createClass({});
    var Rl = createClass({});
    var kl = G({});
    var uu = Ti(lu(), 1);
    var te;
    function Ne() {
        te || (te = new uu.default("j2me.online").promises)
    }
    async function _i(t) {
        Ne();
        try {
            return !!await te.stat(t)
        } catch {
            return !1
        }
    }
    async function wi(t, e) {
        return Ne(),
        await te.writeFile(t, e)
    }
    async function Nr(t) {
        return Ne(),
        await te.stat(t)
    }
    async function fu(t) {
        return Ne(),
        await te.readdir(t)
    }
    async function yi(t) {
        Ne();
        let e = await te.readFile(t);
        return tt.Buffer.from(e)
    }
    async function Mr(t, e) {
        if (Ne(),
        e && e.recursive) {
            let n = t.split("/");
            for (let i = 0; i < n.length; i++) {
                let r = n.slice(0, i + 1).join("/");
                r && !await _i(r) && await te.mkdir(r)
            }
        } else
            await te.mkdir(t)
    }
    async function du(t) {
        Ne(),
        await te.unlink(t)
    }
    var mu = ["sdcard"]
      , hu = createClass({
        construct: function(t) {
            this.closed = !1,
            this.inputStream = null,
            this.outputStream = null;
            let e = document.createElement("a");
            e.href = t;
            let n = new c.javaRoot.java.lang.String("fileconn.dir.private")
              , r = c.javaRoot.java.lang.System.prototype["getProperty(Ljava/lang/String;)Ljava/lang/String;"](n).text
              , a = e.pathname
              , o = mu.find(l=>a.startsWith(`/${l}/`));
            if (t.startsWith(r))
                e.href = r,
                this.root = e.pathname;
            else if (o)
                this.root = "/" + o,
                e.href = r;
            else
                throw new c.javaRoot.java.lang.IllegalArgumentException;
            this.filename = a
        },
        "close()V": function() {
            this.closed || (this.outputStream && this.outputStream["close()V"](),
            this.closed = !0)
        },
        "create()V": async function() {
            if (this.filename.endsWith("/"))
                throw new c.javaRoot.java.lang.IOException;
            if (await _i(this.filename))
                throw new c.javaRoot.java.lang.IOException;
            await this.checkRoots();
            try {
                await wi(this.filename, tt.Buffer.alloc(0))
            } catch {
                throw new c.javaRoot.java.lang.IOException
            }
        },
        "exists()Z": async function() {
            return await _i(this.filename) ? 1 : 0
        },
        "fileSize()J": async function() {
            try {
                let t = (await Nr(this.filename)).size;
                return de(t)
            } catch {
                throw new c.javaRoot.java.lang.IOException
            }
        },
        "list()Ljava/util/Enumeration;": async function() {
            return await this["list(Ljava/lang/String;Z)Ljava/util/Enumeration;"]("*", !1)
        },
        "list(Ljava/lang/String;Z)Ljava/util/Enumeration;": async function(t, e) {
            let n = t.text
              , i = new RegExp("^" + n.replace(/\\/g, "\\\\").replace("*", ".*") + "$");
            var r = [];
            await this.checkRoots();
            try {
                let a = await fu(this.filename);
                for (let o = 0; o < a.length; o++) {
                    let l = a[o];
                    if (i.test(l)) {
                        let u = (await Nr(this.filename + "/" + l)).isDirectory();
                        r.push(new c.javaRoot.java.lang.String(l + (u ? "/" : "")))
                    }
                }
            } catch {
                throw new c.javaRoot.java.lang.IOException
            }
            return new c.javaRoot.javax.microedition.io.file.FileEnumeration(r)
        },
        "mkdir()V": async function() {
            await this.checkRoots();
            try {
                await Mr(this.filename)
            } catch {
                throw new c.javaRoot.java.lang.IOException
            }
        },
        "openDataOutputStream()Ljava/io/DataOutputStream;": async function() {
            var t = new c.javaRoot.java.io.DataOutputStream;
            return t["<init>(Ljava/io/OutputStream;)V"](await this["openOutputStream()Ljava/io/OutputStream;"]()),
            t
        },
        "openOutputStream()Ljava/io/OutputStream;": async function() {
            return await this["openOutputStream(J)Ljava/io/OutputStream;"]({
                hi: 0,
                lo: 0
            })
        },
        "openOutputStream(J)Ljava/io/OutputStream;": async function(t) {
            if (this.outputStream)
                throw new c.javaRoot.java.lang.IOException;
            let e = Se(t);
            if (e < 0)
                throw new c.javaRoot.java.lang.IllegalArgumentException;
            await this.checkRoots();
            try {
                let n = await yi(this.filename);
                if (e > n.length)
                    throw new c.javaRoot.java.lang.IllegalArgumentException;
                let i = new c.javaRoot.java.io.DynamicOutputStream;
                i.file = n.slice(0, e);
                let r = i["flush()V"];
                i["flush()V"] = ()=>{
                    if (!this.closed) {
                        let o = i.buffer;
                        i.file = tt.Buffer.concat([i.file, new Uint8Array(o)]),
                        wi(this.filename, i.file)
                    }
                    r.call(i)
                }
                ;
                let a = i["close()V"];
                return i["close()V"] = ()=>{
                    this.closed || (this.outputStream = null),
                    a.call(i)
                }
                ,
                this.outputStream = i,
                i
            } catch {
                throw new c.javaRoot.java.lang.IOException
            }
        },
        "openDataInputStream()Ljava/io/DataInputStream;": async function() {
            var t = new c.javaRoot.java.io.DataInputStream;
            return t["<init>(Ljava/io/InputStream;)V"](await this["openInputStream()Ljava/io/InputStream;"]()),
            t
        },
        "openInputStream()Ljava/io/InputStream;": async function() {
            if (this.inputStream)
                throw new c.javaRoot.java.lang.IOException;
            await this.checkRoots();
            try {
                let t = await yi(this.filename)
                  , e = Array.prototype.slice.call(t)
                  , n = new c.javaRoot.java.io.DynamicInputStream(e)
                  , i = n["close()V"];
                return n["close()V"] = ()=>{
                    this.closed || (this.inputStream = null),
                    i.call(this)
                }
                ,
                this.inputStream = n,
                n
            } catch {
                throw new c.javaRoot.java.lang.IOException
            }
        },
        "truncate(J)V": async function(t) {
            let e = Se(t);
            if (e < 0)
                throw new c.javaRoot.java.lang.IllegalArgumentException;
            await this.checkRoots();
            try {
                let n = await yi(this.filename);
                if (e > n.length)
                    throw new c.javaRoot.java.lang.IllegalArgumentException;
                await wi(this.filename, n.subarray(0, e))
            } catch {
                throw new c.javaRoot.java.lang.IOException
            }
        },
        "delete()V": async function() {
            try {
                await du(this.filename)
            } catch {
                throw new c.javaRoot.java.lang.IOException
            }
        },
        async checkRoots() {
            let t = this.root;
            await Mr(t, {
                recursive: !0
            })
        },
        listRoots() {
            return new c.javaRoot.javax.microedition.io.file.FileEnumeration(mu.map(t=>new c.javaRoot.java.lang.String(t + "/")))
        },
        interfaces: ["javax.microedition.io.file.FileConnection"],
        require: ["java.io.DynamicOutputStream", "javax.microedition.io.file.FileEnumeration", "java.io.DataOutputStream", "java.io.DataInputStream", "java.io.DynamicInputStream", "java.lang.IllegalArgumentException", "java.lang.String", "java.lang.System", "java.lang.IOException"]
    });
    var pu = createClass({
        construct: function(t) {
            this.list = t,
            this.index = 0
        },
        "hasMoreElements()Z": function() {
            return this.list.length > this.index ? 1 : 0
        },
        "nextElement()Ljava/lang/Object;"() {
            if (this["hasMoreElements()Z"]())
                return this.list[this.index++];
            throw new c.javaRoot.java.util.NoSuchElementException
        },
        interfaces: ["java.util.Enumeration"],
        require: ["java.util.NoSuchElementException"]
    });
    var gu = G({});
    var vu = createClass({
        require: ["javax.microedition.io.file.FileConnectionImpl"],
        "listRoots()Ljava/util/Enumeration;": function() {
            return c.javaRoot.javax.microedition.io.file.FileConnectionImpl.prototype.listRoots()
        }
    });
    var xu = createClass({});
    var _u = G({
        package: "javax.microedition.io",
        name: "Connection"
    });
    var wu = createClass({
        superClass: "java.io.IOException",
        name: "ConnectionNotFoundException",
        package: "javax.microedition.io"
    });
    var yu = createClass({
        "open(Ljava/lang/String;)Ljavax/microedition/io/Connection;": function(t) {
            var e = t.text.split(":");
            if (e[0] === "http")
                return new c.javaRoot.javax.microedition.io.HttpConnectionImpl(t.text);
            if (e[0] === "socket")
                return new c.javaRoot.javax.microedition.io.SocketConnectionImpl(e[1],parseInt(e[2]));
            if (e[0] === "file")
                return new c.javaRoot.javax.microedition.io.file.FileConnectionImpl(t.text);
            throw new Error("Unsupported protocol: " + t.text)
        },
        "open(Ljava/lang/String;I)Ljavax/microedition/io/Connection;": function(t) {
            return this["open(Ljava/lang/String;)Ljavax/microedition/io/Connection;"](t)
        },
        "open(Ljava/lang/String;IZ)Ljavax/microedition/io/Connection;": function(t) {
            return this["open(Ljava/lang/String;)Ljavax/microedition/io/Connection;"](t)
        },
        require: ["javax.microedition.io.HttpConnectionImpl", "javax.microedition.io.SocketConnectionImpl", "javax.microedition.io.file.FileConnectionImpl"]
    });
    var Iu = G({
        package: "javax.microedition.io",
        name: "ContentConnection",
        interfaces: ["javax.microedition.io.StreamConnection"]
    });
    var bu = createClass({
        name: "HttpConnection",
        package: "javax.microedition.io",
        interfaces: ["javax.microedition.io.ContentConnection"]
    });
    function Eu(t, e, n) {
        class i {
            array;
            listeners;
            constructor() {
                this.array = [],
                this.listeners = {}
            }
            on(a, o) {
                var l = this.listeners[a] = this.listeners[a] || [];
                typeof o == "function" && l.push(o)
            }
            write(a) {
                for (var o = 0; o < a.length; o++)
                    this.array.push(a[o])
            }
            end() {
                var a = this
                  , o = e.method || "GET"
                  , l = o !== "GET" ? "base64" : "utf8"
                  , u = o !== "GET" ? tt.Buffer.from(this.array).toString(l) : void 0;
                evalNative("request", {
                    url: t,
                    headers: e.headers,
                    method: o,
                    data: u,
                    encoding: l,
                    responseType: "base64"
                }, function(d) {
                    if (d.error) {
                        var h = a.listeners.error || [];
                        h.forEach(function(g) {
                            g(new Error(d.error))
                        })
                    } else
                        n({
                            statusCode: d.statusCode || 200,
                            headers: d.headers || {},
                            on: function(g, _) {
                                g === "data" && _(tt.Buffer.from(d.data, d.encoding || "utf8")),
                                g === "end" && _()
                            }
                        })
                })
            }
        }
        return new i
    }
    var ju = createClass({
        construct: function(t, e, n) {
            var i = this.a = document.createElement("a");
            i.href = t,
            this.headers = {},
            this.awaitCallbacks = [],
            this.inputStream = new c.javaRoot.java.io.DynamicInputStream;
            var r = this.outputStream = new c.javaRoot.java.io.OutputStream;
            r.buffer = [],
            r["write(I)V"] = function(a) {
                this.ensureOpen(),
                this.buffer.push(a)
            }
        },
        "getURL()Ljava/lang/String;": function() {
            return new c.javaRoot.java.lang.String(this.a.href)
        },
        "getProtocol()Ljava/lang/String;": function() {
            var t = this.a.protocol.replace(":", "");
            return new c.javaRoot.java.lang.String(t)
        },
        "getHost()Ljava/lang/String;": function() {
            var t = this.a.hostname;
            return new c.javaRoot.java.lang.String(t)
        },
        "getFile()Ljava/lang/String;": function() {
            var t = this.a.pathname;
            return new c.javaRoot.java.lang.String(t)
        },
        "getRef()Ljava/lang/String;": function() {
            var t = this.a.hash.replace("#", "");
            return t ? new c.javaRoot.java.lang.String(t) : null
        },
        "getQuery()Ljava/lang/String;": function() {
            var t = this.a.search;
            return new c.javaRoot.java.lang.String(t)
        },
        "getPort()I": function() {
            var t = this.a.port;
            return Number(t) || 80
        },
        "getResponseCode()I": function() {
            return this.await(function(t) {
                return t.statusCode
            })
        },
        "getExpiration()J": function() {
            let t = new c.javaRoot.java.lang.String("expires");
            return this["getHeaderFieldDate(Ljava/lang/String;J)J"](t, de(0))
        },
        "getDate()J": function() {
            let t = new c.javaRoot.java.lang.String("date");
            return this["getHeaderFieldDate(Ljava/lang/String;J)J"](t, de(0))
        },
        "getLastModified()J": function() {
            let t = new c.javaRoot.java.lang.String("last-modified");
            return this["getHeaderFieldDate(Ljava/lang/String;J)J"](t, de(0))
        },
        "getHeaderField(Ljava/lang/String;)Ljava/lang/String;": function(t) {
            return this.await(e=>{
                let n = this.findHeaderField(e.headers, t.text);
                return n ? new c.javaRoot.java.lang.String(n) : null
            }
            )
        },
        "getHeaderFieldInt(Ljava/lang/String;I)I": function(t, e) {
            return this.await(n=>{
                let i = this.findHeaderField(n.headers, t.text);
                var r = parseInt(i);
                return isNaN(r) ? e : r
            }
            )
        },
        "getResponseMessage()Ljava/lang/String;": function() {
            return this.await(function(t) {
                var e = t.statusCode, n;
                switch (e) {
                case 200:
                    n = "OK";
                    break;
                case 404:
                    n = "Not Found";
                    break;
                default:
                    n = null;
                    break
                }
                return n ? new c.javaRoot.java.lang.String(n) : null
            })
        },
        "getHeaderFieldDate(Ljava/lang/String;J)J": function(t, e) {
            return this.await(n=>{
                var i = this.findHeaderField(n.headers, t.text)
                  , r = i ? new Date(i).getTime() : null;
                return typeof r == "number" ? de(r) : e
            }
            )
        },
        "getHeaderFieldKey(I)Ljava/lang/String;": function(t) {
            return this.await(function(e) {
                var n = Object.keys(e.headers)[t];
                return n ? new c.javaRoot.java.lang.String(n) : null
            })
        },
        "getRequestMethod()Ljava/lang/String;": function() {
            return new c.javaRoot.java.lang.String(this.method)
        },
        "setRequestMethod(Ljava/lang/String;)V": function(t) {
            if (this.connectStatus)
                throw new c.javaRoot.java.io.IOException;
            var e = ["GET", "POST"]
              , n = t.text.toUpperCase();
            this.method = e.indexOf(n) < 0 ? e[0] : n
        },
        "getRequestProperty(Ljava/lang/String;)Ljava/lang/String;": function(t) {
            let e = t.text;
            for (var n in this.headers)
                if (n.toLowerCase() === e.toLowerCase())
                    return new c.javaRoot.java.lang.String(this.headers[n]);
            return null
        },
        "setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V": function(t, e) {
            if (this.connectStatus)
                throw new c.javaRoot.java.io.IOException;
            this.headers[t.text] = e.text
        },
        "openInputStream()Ljava/io/InputStream;": function() {
            return this.inputStream
        },
        "openOutputStream()Ljava/io/OutputStream;": function() {
            return this.outputStream
        },
        "openDataOutputStream()Ljava/io/DataOutputStream;": function() {
            var t = new c.javaRoot.java.io.DataOutputStream;
            return t["<init>(Ljava/io/OutputStream;)V"](this["openOutputStream()Ljava/io/OutputStream;"]()),
            t
        },
        "openDataInputStream()Ljava/io/DataInputStream;": function() {
            var t = new c.javaRoot.java.io.DataInputStream;
            return t["<init>(Ljava/io/InputStream;)V"](this["openInputStream()Ljava/io/InputStream;"]()),
            t
        },
        "getType()Ljava/lang/String;": function() {
            let t = new c.javaRoot.java.lang.String("content-type");
            return this["getHeaderField(Ljava/lang/String;)Ljava/lang/String;"](t)
        },
        "getEncoding()Ljava/lang/String;": function() {
            let t = new c.javaRoot.java.lang.String("content-encoding");
            return this["getHeaderField(Ljava/lang/String;)Ljava/lang/String;"](t)
        },
        "getLength()J": function() {
            return this.await(t=>{
                let e = this.findHeaderField(t.headers, "content-length");
                var n = parseInt(e);
                return de(isNaN(n) ? 0 : n)
            }
            )
        },
        "close()V": function() {
            this.finish()
        },
        findHeaderField: function(t, e) {
            var n = null;
            for (var i in t)
                if (i.toLowerCase() === e.toLowerCase()) {
                    n = t[i];
                    break
                }
            return n
        },
        finish: function() {
            this.connectStatus = "connected",
            this.awaitCallbacks.forEach(function(t) {
                t()
            }),
            this.awaitCallbacks.length = 0
        },
        await: function(t) {
            var e = this;
            if (!this.connectStatus) {
                this.connectStatus = "connecting";
                var n = this.a
                  , i = this.headers
                  , r = "X-Online-Host"
                  , a = r.toLowerCase();
                a in i && (r = a),
                r in i && n.host === "10.0.0.172" && (n = n.cloneNode(),
                n.host = i[r],
                delete i[r]);
                var o = Eu(n.href, {
                    method: this.method,
                    headers: i
                }, function(u) {
                    e.response = u,
                    e.finish(),
                    u.on("data", function(d) {
                        e.inputStream.push(d)
                    }),
                    u.on("end", function() {
                        e.inputStream.push(null, !0)
                    })
                });
                o.on("error", function() {
                    e.finish(),
                    e.inputStream.push(null, !0)
                }),
                this.outputStream.buffer.length && o.write(tt.Buffer.from(this.outputStream.buffer)),
                o.end()
            }
            if (this.connectStatus === "connected" && !this.response)
                throw new c.javaRoot.java.io.IOException;
            if (this.connectStatus === "connected")
                return t(this.response);
            if (this.connectStatus === "connecting") {
                c.isThreadSuspended = !0;
                var l = c.currentThread;
                c.restoreStack[l] = [function() {
                    if (!e.response)
                        throw new c.javaRoot.java.io.IOException;
                    return t(e.response)
                }
                ],
                this.awaitCallbacks.push(function() {
                    st(l)
                })
            }
        },
        interfaces: ["javax.microedition.io.HttpConnection"],
        require: ["java.lang.String", "java.io.DynamicInputStream", "java.io.OutputStream", "java.io.DataOutputStream", "java.io.DataInputStream"]
    });
    var Su = G({
        superClass: "javax.microedition.io.Connection",
        package: "javax.microedition.io",
        name: "InputConnection"
    });
    var Ru = G({
        package: "javax.microedition.io",
        name: "OutputConnection"
    });
    var ku = createClass({});
    var Cu = createClass({});
    var Tu = createClass({
        interfaces: ["javax.microedition.io.StreamConnection"]
    });
    var Ii = class {
        id;
        listeners = {};
        constructor() {}
        connect(e, n) {
            this.id = evalNative("connectSocket", {
                port: e,
                host: n,
                timeout: 1e3 * 3
            }),
            evalNative("onSocket", {
                id: this.id
            }, i=>{
                let r = i.event
                  , a = i.data ? tt.Buffer.from(i.data, "base64") : void 0;
                (this.listeners[r] || []).forEach(l=>{
                    typeof l == "function" && l(a)
                }
                )
            }
            , !0)
        }
        on(e, n) {
            (this.listeners[e] = this.listeners[e] || []).push(n)
        }
        write(e) {
            evalNative("invokeSocket", {
                id: this.id,
                method: "write",
                data: e.toString("base64")
            })
        }
        destroy() {
            evalNative("invokeSocket", {
                id: this.id,
                method: "destroy"
            })
        }
    }
    ;
    var mp = 0
      , hp = 2
      , pp = 1
      , gp = 3
      , vp = 4
      , Au = createClass({
        construct: function(t, e) {
            t = t.replace("//", "");
            var n = this.socket = new Ii
              , i = this;
            n.connect(e, t),
            c.isThreadSuspended = !0;
            var r = c.currentThread, a, o;
            c.restoreStack[r] = [function() {
                if (a)
                    throw a;
                return i
            }
            ],
            n.on("data", function(u) {
                i.inputStream.push(u)
            }),
            n.on("connect", function() {
                o = !0,
                st(r)
            }),
            n.on("error", function() {
                a = new c.javaRoot.java.io.IOException,
                o || st(r)
            }),
            n.on("close", function() {
                i.inputStream.push(null, !0)
            }),
            this.inputStream = new c.javaRoot.java.io.DynamicInputStream;
            var l = this.outputStream = new c.javaRoot.java.io.OutputStream;
            l.buffer = [],
            l["write(I)V"] = function(u) {
                this.ensureOpen(),
                this.buffer.push(u)
            }
            ,
            l["flush()V"] = function() {
                if (this.buffer.length) {
                    var u = tt.Buffer.from(this.buffer);
                    this.buffer = [],
                    n.write(u)
                }
            }
        },
        "openInputStream()Ljava/io/InputStream;": function() {
            return this.inputStream
        },
        "openOutputStream()Ljava/io/OutputStream;": function() {
            return this.outputStream
        },
        "close()V": function() {
            this.socket.destroy()
        },
        "setSocketOption(BI)V": function(t, e) {
            switch (t) {
            case mp:
                break;
            case hp:
                break;
            case pp:
                break;
            case gp:
                break;
            case vp:
                break
            }
        },
        "openDataInputStream()Ljava/io/DataInputStream;": function() {
            var t = new c.javaRoot.java.io.DataInputStream;
            return t["<init>(Ljava/io/InputStream;)V"](this["openInputStream()Ljava/io/InputStream;"]()),
            t
        },
        "openDataOutputStream()Ljava/io/DataOutputStream;": function() {
            var t = new c.javaRoot.java.io.DataOutputStream;
            return t["<init>(Ljava/io/OutputStream;)V"](this["openOutputStream()Ljava/io/OutputStream;"]()),
            t
        },
        interfaces: ["javax.microedition.io.SocketConnection"],
        require: ["java.io.DynamicInputStream", "java.io.OutputStream", "java.io.DataInputStream", "java.io.DataInputStream"]
    });
    var Lu = G({
        package: "javax.microedition.io",
        name: "StreamConnection",
        interfaces: ["javax.microedition.io.InputConnection", "javax.microedition.io.OutputConnection"]
    });
    var Ou = createClass({
        "<init>(Z)V": function(t) {
            c.javaRoot.javax.microedition.lcdui.Canvas.prototype["<init>()V"].apply(this)
        },
        "getGraphics()Ljavax/microedition/lcdui/Graphics;": function() {
            var t = new c.javaRoot.javax.microedition.lcdui.Graphics(this.element);
            return t
        },
        "flushGraphics()V": function() {},
        "getKeyStates()I": function() {
            var t = this.gameState;
            return this.gameState = 0,
            t
        },
        superClass: "javax.microedition.lcdui.Canvas"
    });
    var Fu = createClass({
        x: 0,
        y: 0,
        "setPosition(II)V": function(t, e) {
            this.x = t,
            this.y = e
        }
    });
    var Du = createClass({
        $TRANS_NONEI: 0,
        $TRANS_ROT90I: 5,
        $TRANS_ROT180I: 3,
        $TRANS_ROT270I: 6,
        $TRANS_MIRRORI: 2,
        $TRANS_MIRROR_ROT90I: 7,
        $TRANS_MIRROR_ROT180I: 1,
        $TRANS_MIRROR_ROT270I: 4,
        "<init>(Ljavax/microedition/lcdui/Image;)V": function(t) {
            this.image = t,
            this.width = t.element.width,
            this.height = t.element.height,
            this.transform = 0
        },
        "setTransform(I)V": function(t) {
            this.transform = t
        },
        "getWidth()I": function() {
            return this.transform != this.$TRANS_ROT90I && this.transform != this.$TRANS_ROT270I && this.transform != this.$TRANS_MIRROR_ROT90I && this.transform != this.$TRANS_MIRROR_ROT270I ? this.width : this.height
        },
        "paint(Ljavax/microedition/lcdui/Graphics;)V": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            t["drawRegion(Ljavax/microedition/lcdui/Image;IIIIIIII)V"](this.image, 0, 0, this.width, this.height, this.transform, this.x, this.y, 0)
        },
        superClass: "javax.microedition.lcdui.game.Layer"
    });
    var Nu = createClass({
        construct: function() {
            var t = this;
            this.commandListener = {
                "commandAction(Ljavax/microedition/lcdui/Command;Ljavax/microedition/lcdui/Displayable;)V": function() {
                    t.display["setCurrent(Ljavax/microedition/lcdui/Displayable;)V"](t.display.lastDisplayable)
                }
            }
        },
        "<init>(Ljava/lang/String;)V": function(t) {
            this.init(),
            this["setTitle(Ljava/lang/String;)V"](t)
        },
        "<init>(Ljava/lang/String;Ljava/lang/String;Ljavax/microedition/lcdui/Image;Ljavax/microedition/lcdui/AlertType;)V": function(t, e, n, i) {
            this.init(),
            this["setTitle(Ljava/lang/String;)V"](t),
            this.text = e,
            this.image = n,
            this.type = i,
            this.alertElement = document.createElement("div"),
            this.alertElement.className = "alert",
            this.alertElement.innerHTML = e.text
        },
        "getString()Ljava/lang/String;": function() {
            return this.text
        },
        "setString(Ljava/lang/String;)V": function(t) {
            this.text = t,
            this.alertElement.innerHTML = t.text
        },
        "setTimeout(I)V": function(t) {
            setTimeout(function() {
                console.log("show?")
            }, t)
        },
        refreshCommands: function() {
            if (this.commands.length === 0) {
                var t = new c.javaRoot.javax.microedition.lcdui.Command;
                t["<init>(Ljava/lang/String;II)V"](new c.javaRoot.java.lang.String("OK"), c.javaRoot.javax.microedition.lcdui.Command.prototype.OKI, 0),
                this.commands = [t],
                c.javaRoot.javax.microedition.lcdui.Screen.prototype.refreshCommands.apply(this, arguments),
                this.commands = []
            } else
                c.javaRoot.javax.microedition.lcdui.Screen.prototype.refreshCommands.apply(this, arguments)
        },
        superClass: "javax.microedition.lcdui.Screen",
        require: ["javax.microedition.lcdui.Command"]
    });
    var Mu = createClass({
        name: "AlertType",
        package: "javax.microedition.lcdui"
    });
    var it = function() {
        var t = document.createElement("canvas");
        t.height = t.width = 0;
        var e = t.getContext("2d")
          , n = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / n
    }();
    function xp(t) {
        if (it === 1)
            return;
        function e(i, r) {
            for (var a in i)
                i.hasOwnProperty(a) && r(i[a], a)
        }
        var n = {
            fillRect: "all",
            clearRect: "all",
            strokeRect: "all",
            moveTo: "all",
            lineTo: "all",
            arc: [0, 1, 2],
            arcTo: "all",
            bezierCurveTo: "all",
            isPointInPath: "all",
            isPointInStroke: "all",
            quadraticCurveTo: "all",
            rect: "all",
            translate: "all",
            createRadialGradient: "all",
            createLinearGradient: "all",
            setTransform: [4, 5]
        };
        e(n, function(i, r) {
            t[r] = function(a) {
                return function() {
                    var o = Array.prototype.slice.call(arguments);
                    if (i === "all")
                        o = o.map(function(u) {
                            return u * it
                        });
                    else if (Array.isArray(i))
                        for (var l = 0; l < i.length; l++)
                            o[i[l]] *= it;
                    return a.apply(this, o)
                }
            }(t[r])
        }),
        t.stroke = function(i) {
            return function() {
                this.lineWidth *= it,
                i.apply(this, arguments),
                this.lineWidth /= it
            }
        }(t.stroke),
        t.fillText = function(i) {
            return function() {
                var r = Array.prototype.slice.call(arguments);
                r[1] *= it,
                r[2] *= it,
                r[3] && (r[3] *= it);
                var a = this.__font__ || this.font;
                this.font = a.replace(/(\d+\.?\d*)(px|em|rem|pt)/g, function(o, l, u) {
                    return l * it + u
                }),
                i.apply(this, r),
                this.font = a
            }
        }(t.fillText),
        t.strokeText = function(i) {
            return function() {
                var r = Array.prototype.slice.call(arguments);
                r[1] *= it,
                r[2] *= it,
                r[3] && (r[3] *= it);
                var a = this.__font__ || this.font;
                this.font = a.replace(/(\d+\.?\d*)(px|em|rem|pt)/g, function(o, l, u) {
                    return l * it + u
                }),
                i.apply(this, r),
                this.font = a
            }
        }(t.strokeText),
        t.drawImage = function(i) {
            return function() {
                var r = arguments[0];
                if (r && r.__hidpi__) {
                    var a = Array.prototype.slice.call(arguments);
                    i.apply(this, a.map(function(o) {
                        return typeof o == "number" ? o * it : o
                    }));
                    return
                }
                this.scale(it, it),
                i.apply(this, arguments),
                this.scale(1 / it, 1 / it)
            }
        }(t.drawImage),
        t.getImageData = function(i) {
            return function(r, a, o, l) {
                let u = document.createElement("canvas");
                u.width = o,
                u.height = l,
                u.style.imageRendering = "pixelated";
                let d = u.getContext("2d");
                d.imageSmoothingEnabled = !1,
                d.drawImage(this.canvas, r * it, a * it, o * it, l * it, 0, 0, o, l);
                let h = d.getImageData(0, 0, o, l);
                return u.width = 0,
                u.height = 0,
                h
            }
        }(t.getImageData),
        t.putImageData = function(i) {
            return function(r, a, o) {
                let l = r.width
                  , u = r.height
                  , d = document.createElement("canvas");
                d.width = l,
                d.height = u,
                d.style.imageRendering = "pixelated";
                let h = d.getContext("2d");
                h.imageSmoothingEnabled = !1,
                h.putImageData(r, 0, 0),
                this.drawImage(d, 0, 0),
                d.width = 0,
                d.height = 0
            }
        }(t.putImageData)
    }
    function bi(t) {
        t.getContext = function() {
            if (!this.__context2d__) {
                this.__context2d__ = HTMLCanvasElement.prototype.getContext.call(this, "2d"),
                xp(this.__context2d__);
                var e = this.width;
                this.width *= it,
                Object.defineProperty(this, "width", {
                    get: function() {
                        return e
                    },
                    set: function(i) {
                        e = i,
                        this.setAttribute("width", String(e * it))
                    }
                });
                var n = this.height;
                this.height *= it,
                Object.defineProperty(this, "height", {
                    get: function() {
                        return n
                    },
                    set: function(i) {
                        n = i,
                        this.setAttribute("height", String(n * it))
                    }
                })
            }
            return this.__context2d__
        }
        ,
        t.__hidpi__ = !0
    }
    var Bu = createClass({
        gameActionMapping: {
            "-1": 1,
            "-2": 6,
            "-3": 2,
            "-4": 5,
            "-5": 8,
            49: 9,
            50: 1,
            51: 10,
            52: 2,
            53: 8,
            54: 5,
            55: 11,
            56: 6,
            57: 12
        },
        gameCodeMapping: {
            1: -1,
            6: -2,
            2: -3,
            5: -4,
            8: -5,
            9: 49,
            10: 51,
            11: 55,
            12: 57
        },
        $UPI: 1,
        $DOWNI: 6,
        $LEFTI: 2,
        $RIGHTI: 5,
        $FIREI: 8,
        $GAME_AI: 9,
        $GAME_BI: 10,
        $GAME_CI: 11,
        $GAME_DI: 12,
        $KEY_NUM0I: 48,
        $KEY_NUM1I: 49,
        $KEY_NUM2I: 50,
        $KEY_NUM3I: 51,
        $KEY_NUM4I: 52,
        $KEY_NUM5I: 53,
        $KEY_NUM6I: 54,
        $KEY_NUM7I: 55,
        $KEY_NUM8I: 56,
        $KEY_NUM9I: 57,
        $KEY_STARI: 42,
        $KEY_POUNDI: 35,
        "<init>()V": function() {
            this.init();
            var t = document.getElementById("screen")
              , e = this.element = document.createElement("canvas");
            e.setAttribute("touch-action", "none");
            var n = this.element.width = et.width
              , i = this.element.height = et.height;
            e.style[t.offsetWidth / n > t.offsetHeight / i ? "width" : "height"] = "auto",
            et.hidpi && bi(e),
            e.style.imageRendering = "pixelated",
            e.getContext("2d").imageSmoothingEnabled = !1;
            var r = this;
            let a = function(l) {
                var u = r.gameActionMapping[l];
                u != null && (r.gameState = r.gameState | 1 << u),
                r.keysState[l] = !0,
                bt(function() {
                    r["keyPressed(I)V"](l)
                })
            }
              , o = function(l) {
                if (l != null)
                    r.keysState[l] = !1,
                    bt(function() {
                        r["keyReleased(I)V"](l)
                    });
                else
                    for (var u in r.keysState)
                        r.keysState[u] && (r.keysState[u] = !1,
                        function(d) {
                            bt(function() {
                                r["keyReleased(I)V"](d)
                            })
                        }(u))
            };
            this.onshow = function() {
                sn("keypress", a),
                sn("keyreleased", o),
                bt(function() {
                    r["repaint()V"](),
                    r["showNotify()V"]()
                })
            }
            ,
            this.onhide = function() {
                cn("keypress", a),
                cn("keyreleased", o),
                bt(function() {
                    r["hideNotify()V"]()
                })
            }
            ,
            Vn(e, function(l, u, d) {
                bt(function() {
                    switch (l) {
                    case "dragged":
                        r["pointerDragged(II)V"](u, d);
                        break;
                    case "pressed":
                        r["pointerPressed(II)V"](u, d);
                        break;
                    case "released":
                        r["pointerReleased(II)V"](u, d);
                        break
                    }
                })
            }),
            this.keysState = [],
            this.gameState = 0
        },
        "keyPressed(I)V": function() {},
        "keyReleased(I)V": function() {},
        "paint(Ljavax/microedition/lcdui/Graphics;)V": function() {},
        time: 0,
        "repaint()V": function() {
            var t = new c.javaRoot.javax.microedition.lcdui.Graphics(this.element)
              , e = this;
            bt(function() {
                e["paint(Ljavax/microedition/lcdui/Graphics;)V"](t)
            })
        },
        "repaint(IIII)V": function() {
            this["repaint()V"]()
        },
        "getKeyCode(I)I": function(t) {
            var e = this.gameCodeMapping[t];
            return typeof e == "number" ? e : t
        },
        "getGameAction(I)I": function(t) {
            var e = this.gameActionMapping[t];
            return typeof e == "number" ? e : t
        },
        "serviceRepaints()V": function() {},
        "sizeChanged(II)V": function() {},
        "showNotify()V": function() {},
        "hideNotify()V": function() {},
        "pointerDragged(II)V": function() {},
        "pointerPressed(II)V": function() {},
        "pointerReleased(II)V": function() {},
        "setFullScreenMode(Z)V": function(t) {
            this.fullscreen = !!t,
            this["isShown()Z"]() && Ei(this.fullscreen);
            var e = this;
            bt(function() {
                e["sizeChanged(II)V"](e.element.width, e.element.height),
                e["repaint()V"]()
            })
        },
        "getWidth()I": function() {
            return this.element.width
        },
        "getHeight()I": function() {
            return this.element.height
        },
        "isDoubleBuffered()Z": function() {
            return 0
        },
        "hasPointerEvents()Z": function() {
            return 1
        },
        "hasPointerMotionEvents()Z": function() {
            return 1
        },
        "getKeyName(I)Ljava/lang/String;": function() {
            return new c.javaRoot.java.lang.String("pomidor")
        },
        getScale: function() {
            return this.element.clientWidth / this.element.width
        },
        translateX: function(t) {
            return Math.floor(t / this.getScale())
        },
        translateY: function(t) {
            return Math.floor(t / this.getScale())
        },
        show: function() {},
        hide: function() {},
        superClass: "javax.microedition.lcdui.Displayable",
        require: ["javax.microedition.lcdui.Graphics"]
    });
    var Br = 2
      , ji = 0;
    var A2 = G({});
    var _p = 0
      , Vu = createClass({
        "<init>(Ljava/lang/String;I[Ljava/lang/String;[Ljavax/microedition/lcdui/Image;)V": function(t, e, n, i) {
            this["setLabel(Ljava/lang/String;)V"](t),
            this.id = _p++,
            this.choiceType = e,
            n = n || [],
            i = i || [];
            let r = Math.max(n.length, i.length);
            for (let a = 0; a < r; a++)
                this["insert(ILjava/lang/String;Ljavax/microedition/lcdui/Image;)V"](a, n[a], i[a])
        },
        "<init>(Ljava/lang/String;I)V": function(t, e) {
            this["<init>(Ljava/lang/String;I[Ljava/lang/String;[Ljavax/microedition/lcdui/Image;)V"](t, e, [], [])
        },
        "append(Ljava/lang/String;Ljavax/microedition/lcdui/Image;)I": function(t, e) {
            let n = this["size()I"]();
            return this["insert(ILjava/lang/String;Ljavax/microedition/lcdui/Image;)V"](n, t, e),
            n
        },
        "insert(ILjava/lang/String;Ljavax/microedition/lcdui/Image;)V": function(t, e, n) {
            let i = document.createElement("div")
              , r = e && e.text || ""
              , a = this.choiceType
              , o = document.createElement("input");
            o.type = a === Br ? "checkbox" : "radio",
            o.name = `input-${this.id}`,
            i.appendChild(o);
            let l = document.createElement("span");
            if (l.textContent = r,
            i.appendChild(l),
            n) {
                var u = c.javaRoot.javax.microedition.lcdui.Image.prototype["createImage(Ljavax/microedition/lcdui/Image;)Ljavax/microedition/lcdui/Image;"](n);
                i.appendChild(u.element)
            }
            this.content.appendChild(i)
        },
        "set(ILjava/lang/String;Ljavax/microedition/lcdui/Image;)V": function(t, e, n) {
            this["delete(I)V"](t),
            this["insert(ILjava/lang/String;Ljavax/microedition/lcdui/Image;)V"](t, e, n)
        },
        "setSelectedIndex(IZ)V": function(t, e) {
            let i = this.content.children[t].querySelector("input");
            i.checked = !!e
        },
        "getSelectedIndex()I": function() {
            if (this.choiceType !== Br) {
                let e = this.content.children;
                for (let n = 0; n < e.length; n++)
                    if (e[n].querySelector("input").checked)
                        return n
            }
            return -1
        },
        "setSelectedFlags([Z)V": function(t) {
            t.forEach((e,n)=>{
                this["setSelectedIndex(IZ)V"](n, e)
            }
            )
        },
        "isSelected(I)Z": function(t) {
            return this.content.children[t].querySelector("input").checked ? 1 : 0
        },
        "size()I": function() {
            return this.content.children.length
        },
        "delete(I)V": function(t) {
            let e = this.content;
            e.removeChild(e.children[t])
        },
        "deleteAll()V": function() {
            let t = this.content;
            t.innerHTML = ""
        },
        "setFont(ILjavax/microedition/lcdui/Font;)V": function(t, e) {
            let i = this.content.children[t];
            i.font = e
        },
        "getFont(I)Ljavax/microedition/lcdui/Font;": function(t) {
            return this.content.children[t].font || c.javaRoot.javax.microedition.lcdui.Font.prototype["getDefaultFont()Ljavax/microedition/lcdui/Font;"]()
        },
        "setFitPolicy(I)V": function(t) {
            this.fitPolicy = t
        },
        "getFitPolicy()I": function() {
            return this.fitPolicy || ji
        },
        "getImage(I)Ljavax/microedition/lcdui/Image;": function(t) {
            let i = this.content.children[t].querySelector("canvas");
            var r = c.javaRoot.javax.microedition.lcdui.Image.prototype["createImage(Ljavax/microedition/lcdui/Image;)Ljavax/microedition/lcdui/Image;"](i);
            return r
        },
        "getString(I)Ljava/lang/String;": function(t) {
            let r = this.content.children[t].querySelector("span").textContent;
            return new c.javaRoot.java.lang.String(r)
        },
        superClass: "javax.microedition.lcdui.Item",
        require: ["javax.microedition.lcdui.Image", "javax.microedition.lcdui.Font", "java.lang.String"]
    });
    var Uu = createClass({
        $SCREENI: 1,
        $BACKI: 2,
        $CANCELI: 3,
        $OKI: 4,
        $HELPI: 5,
        $STOPI: 6,
        $EXITI: 7,
        $ITEMI: 8,
        "<init>(Ljava/lang/String;II)V": function(t, e, n) {
            this.label = t,
            this.commandType = e,
            this.priority = n
        },
        "getLabel()Ljava/lang/String;": function() {
            return this.label
        },
        "getPriority()I": function() {
            return this.priority
        },
        "getCommandType()I": function() {
            return this.commandType
        }
    });
    var Pu = G({});
    var Zu = createClass({
        superClass: "javax.microedition.lcdui.Item",
        "<init>(Ljava/lang/String;)V": function(t) {
            this["setLabel(Ljava/lang/String;)V"](t)
        },
        "getGameAction(I)I": function(t) {
            throw new Error("TODO")
        },
        "getInteractionModes()I": function() {
            throw new Error("TODO")
        },
        "hideNotify()V": function() {
            throw new Error("TODO")
        },
        "invalidate()V": function() {
            throw new Error("TODO")
        },
        "keyPressed(I)V": function(t) {
            throw new Error("TODO")
        },
        "keyReleased(I)V": function(t) {
            throw new Error("TODO")
        },
        "keyRepeated(I)V": function(t) {
            throw new Error("TODO")
        },
        "pointerDragged(II)V": function(t, e) {},
        "pointerPressed(II)V": function(t, e) {},
        "pointerReleased(II)V": function(t, e) {},
        "repaint()V": function() {
            let t = this["getMinContentWidth()I"]()
              , e = this["getMinContentHeight()I"]();
            this["repaint(IIII)V"](0, 0, t, e)
        },
        "repaint(IIII)V": async function(t, e, n, i) {
            let r = this.content
              , o = c.javaRoot.javax.microedition.lcdui.Image.prototype["createImage(II)Ljavax/microedition/lcdui/Image;"](n, i).element
              , l = this;
            Vn(o, function(h, g, _) {
                bt(function() {
                    switch (h) {
                    case "dragged":
                        l["pointerDragged(II)V"](g, _);
                        break;
                    case "pressed":
                        l["pointerPressed(II)V"](g, _);
                        break;
                    case "released":
                        l["pointerReleased(II)V"](g, _);
                        break
                    }
                })
            });
            let u = new c.javaRoot.javax.microedition.lcdui.Graphics(o);
            await X(this, "paint(Ljavax/microedition/lcdui/Graphics;II)V", [u, n, i]),
            r.children[0]?.remove();
            let d = o.style;
            d.width = o.width + "px",
            d.maxWidth = "100%",
            r.appendChild(o)
        },
        "showNotify()V": function() {
            throw new Error("TODO")
        },
        "sizeChanged(II)V": function(t, e) {
            throw new Error("TODO")
        },
        "traverse(IIII)[Z": function(t, e, n, i) {
            throw new Error("TODO")
        },
        "traverseOut()V": function() {
            throw new Error("TODO")
        }
    });
    var Hu = createClass({
        "getDisplay(Ljavax/microedition/midlet/MIDlet;)Ljavax/microedition/lcdui/Display;": function(t) {
            if (!t.display) {
                t.display = new c.javaRoot.javax.microedition.lcdui.Display;
                var e = document.getElementById("screen");
                t.display.element = e
            }
            return t.display
        },
        "numAlphaLevels()I": function() {
            return 256
        },
        "numColors()I": function() {
            return 65536
        },
        "setCurrent(Ljavax/microedition/lcdui/Displayable;)V": function(t) {
            clearTimeout(this.timeout);
            let e = this.element;
            this.lastDisplayable = this.current,
            this.lastDisplayable && this.lastDisplayable.onhide(),
            e.innerHTML = "",
            this.current = t,
            t != null && (this.timeout = setTimeout(()=>{
                t.display = this,
                t.title,
                e.appendChild(t.element),
                t.onshow(),
                t.refreshCommands(),
                Ei(t.fullscreen)
            }
            , 1))
        },
        "callSerially(Ljava/lang/Runnable;)V": function(t) {
            bt(function() {
                t["run()V"]()
            })
        },
        "getCurrent()Ljavax/microedition/lcdui/Displayable;": function() {
            return this.current
        },
        "isColor()Z": function() {
            return 1
        },
        "vibrate(I)Z": function() {
            return console.log("*vibration*"),
            0
        }
    });
    var $u = createClass({
        require: ["javax.microedition.lcdui.List", "java.lang.String", "javax.microedition.lcdui.Command"],
        init: function(t) {
            this.commands = [],
            this.choiceCommands = [],
            this.backCommands = [];
            let e = document.createElement("div");
            e.className = "displayable";
            let n = e.style;
            n.display = "flex",
            n.height = "100%",
            n.width = "100%",
            n.flexDirection = "column";
            let i = document.createElement("div");
            i.className = "title";
            let r = i.style;
            r.width = "100%",
            r.textAlign = "center",
            r.fontSize = "17px",
            r.lineHeight = "30px",
            r.color = "#323232",
            r.backgroundColor = "#CCCCCC",
            e.appendChild(i);
            let a = document.createElement("div");
            a.className = "content";
            let o = a.style;
            o.position = "relative",
            o.width = "100%",
            o.overflowX = "hidden",
            o.overflowY = "auto",
            o.flex = "1",
            o.minHeight = "0px",
            o.fontSize = "16px",
            o.lineHeight = "26px",
            o.color = "#323232",
            e.appendChild(a);
            let l = document.createElement("div");
            l.className = "softkey";
            let u = l.style;
            u.width = "100%",
            u.display = "flex",
            u.flexDirection = "row",
            u.justifyContent = "space-between",
            u.fontSize = "17px",
            u.lineHeight = "30px",
            u.height = "30px",
            u.color = "#323232",
            u.backgroundColor = "#CCCCCC",
            e.appendChild(l);
            let d = document.createElement("div");
            d.className = "choice";
            let h = d.style;
            h.padding = "0 5px",
            mn(d, Ie.choice),
            l.appendChild(d);
            let g = document.createElement("div");
            g.className = "back";
            let _ = g.style;
            _.padding = "0 5px",
            mn(g, Ie.back),
            l.appendChild(g);
            let E = T=>{
                if (this.commandListener && (T === Ie.choice || T === Ie.back)) {
                    let w = T === Ie.choice ? this.choiceCommands : this.backCommands;
                    if (w.length == 1 && this.callCommandAction(w[0]),
                    w.length > 1) {
                        let x = new c.javaRoot.javax.microedition.lcdui.List
                          , v = c.javaRoot.java.lang.String
                          , I = new v("Options")
                          , R = w.map(y=>{
                            let A = y.label.text;
                            return new v(A)
                        }
                        );
                        x["<init>(Ljava/lang/String;I[Ljava/lang/String;[Ljavax/microedition/lcdui/Image;)V"](I, x.IMPLICIT, R);
                        let F = c.javaRoot.javax.microedition.lcdui.Command
                          , C = new F;
                        C["<init>(Ljava/lang/String;II)V"](new v("Back"), F.prototype.$BACKI, 0),
                        x["addCommand(Ljavax/microedition/lcdui/Command;)V"](C);
                        let j = new F;
                        j["<init>(Ljava/lang/String;II)V"](new v("Select"), F.prototype.$OKI, 0),
                        x["setSelectCommand(Ljavax/microedition/lcdui/Command;)V"](j),
                        x["setCommandListener(Ljavax/microedition/lcdui/CommandListener;)V"]({
                            "commandAction(Ljavax/microedition/lcdui/Command;Ljavax/microedition/lcdui/Displayable;)V": y=>{
                                if (y === j) {
                                    let A = x["getSelectedIndex()I"]()
                                      , S = w[A];
                                    this.callCommandAction(S)
                                } else
                                    this.display["setCurrent(Ljavax/microedition/lcdui/Displayable;)V"](this)
                            }
                        }),
                        this.display["setCurrent(Ljavax/microedition/lcdui/Displayable;)V"](x)
                    }
                }
            }
            ;
            this.onshow = function() {
                sn("keypress", E)
            }
            ,
            this.onhide = function() {
                cn("keypress", E)
            }
            ,
            this.element = e,
            this.titleElement = i,
            this.contentElement = a,
            this.choiceButton = d,
            this.backButton = g
        },
        "setTicker(Ljavax/microedition/lcdui/Ticker;)V": function(t) {
            console.log("TODO setTicker:", t)
        },
        "setTitle(Ljava/lang/String;)V": function(t) {
            this.title = t;
            let e = t ? t.text : "";
            this.titleElement.innerHTML = e
        },
        "getTitle()Ljava/lang/String;": function() {
            return this.title
        },
        "getWidth()I": function() {
            return et.width
        },
        "getHeight()I": function() {
            return et.height
        },
        "addCommand(Ljavax/microedition/lcdui/Command;)V": function(t) {
            this.commands.indexOf(t) == -1 && (this.commands.push(t),
            this.refreshCommands())
        },
        "removeCommand(Ljavax/microedition/lcdui/Command;)V": function(t) {
            var e = this.commands.indexOf(t);
            if (e != -1) {
                var n = this.commands.pop();
                t != n && (this.commands[e] = n),
                this.refreshCommands()
            }
        },
        "setCommandListener(Ljavax/microedition/lcdui/CommandListener;)V": function(t) {
            this.commandListener = t
        },
        "isShown()Z": function() {
            return this.element.parentNode != null ? 1 : 0
        },
        refreshCommands: function() {
            let t = this.choiceCommands
              , e = this.backCommands;
            t.length = 0,
            e.length = 0;
            let n = this.choiceButton
              , i = this.backButton;
            n.innerHTML = "",
            i.innerHTML = "";
            let r = this.commands;
            for (var a in r) {
                var o = r[a];
                o.commandType == o.$BACKI || o.commandType == o.$EXITI || o.commandType == o.$CANCELI || o.commandType == o.$STOPI ? e.push(o) : t.push(o)
            }
            t.length && (t.length == 1 ? n.innerHTML = t[0].label.text : n.innerHTML = "Options"),
            e.length && (e.length == 1 ? i.innerHTML = e[0].label.text : i.innerHTML = "Back")
        },
        callCommandAction(t) {
            bt(()=>{
                this.commandListener["commandAction(Ljavax/microedition/lcdui/Command;Ljavax/microedition/lcdui/Displayable;)V"](t, this)
            }
            )
        }
    });
    var Gu = createClass({
        $STYLE_PLAINI: 0,
        $STYLE_BOLDI: 1,
        $STYLE_ITALICI: 2,
        $STYLE_UNDERLINED: 4,
        $FACE_SYSTEMI: 0,
        $FACE_MONOSPACEI: 32,
        $FACE_PROPORTIONALI: 64,
        $SIZE_SMALLI: 8,
        $SIZE_MEDIUMI: 0,
        $SIZE_LARGEI: 16,
        "getDefaultFont()Ljavax/microedition/lcdui/Font;": function() {
            return this["getFont(III)Ljavax/microedition/lcdui/Font;"].apply(this, [0, 0, 0])
        },
        "getFace()I": function() {
            return this.javaFace
        },
        "getFont(III)Ljavax/microedition/lcdui/Font;": function(t, e, n) {
            if (this.context == null) {
                var i = document.createElement("canvas");
                i.width = i.height = 0,
                c.javaRoot.javax.microedition.lcdui.Font.prototype.context = i.getContext("2d")
            }
            var r = new c.javaRoot.javax.microedition.lcdui.Font;
            return r.face = "arial",
            r.height = 18,
            r.style = "",
            r.javaFace = t,
            r.javaStyle = e,
            r.javaSize = n,
            n & this.$SIZE_SMALLI && (r.height = 16),
            n & this.$SIZE_LARGEI && (r.height = 24),
            n & this.$FACE_MONOSPACEI && (r.face = "monospace"),
            n & this.$FACE_MONOSPACEI && (r.face = "monospace"),
            e & this.$SIZE_BOLDI && (r.style += "bold "),
            e & this.$SIZE_ITALICI && (r.style += "italic "),
            e & this.$SIZE_UNDERLINEDI && console.log("underline unsupported"),
            r
        },
        "getFont(I)Ljavax/microedition/lcdui/Font;": function() {
            return this.prototype["getDefaultFont()Ljavax/microedition/lcdui/Font;"].apply(this)
        },
        "getBaselinePosition()I": function() {
            return Math.floor(this.height * .8)
        },
        "getHeight()I": function() {
            return this.height
        },
        "getSize()I": function() {
            return this.javaSize
        },
        "getStyle()I": function() {
            return this.javaStyle
        },
        "stringWidth(Ljava/lang/String;)I": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            let e = this.context;
            return e.font = this.getCSS(),
            Math.ceil(e.measureText(t.text).width)
        },
        "substringWidth(Ljava/lang/String;II)I": function(t, e, n) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            let i = this.context;
            return i.font = this.getCSS(),
            Math.ceil(i.measureText(t.text.substr(e, n)).width)
        },
        "charWidth(C)I": function(t) {
            return this.context.font = this.getCSS(),
            Math.ceil(this.context.measureText(String.fromCharCode(t)).width)
        },
        "charsWidth([CII)I": function(t, e, n) {
            var i = c.javaRoot.java.lang.String.prototype["valueOf([CII)Ljava/lang/String;"](t, e, n);
            return this["stringWidth(Ljava/lang/String;)I"](i)
        },
        getCSS: function() {
            return this.style + " " + Math.floor(this.height * .8) + "px " + this.face
        }
    });
    var qu = createClass({
        "<init>(Ljava/lang/String;)V": function(t) {
            this.init();
            let e = document.createElement("div");
            e.className = "form",
            this.contentElement.appendChild(e),
            this["setTitle(Ljava/lang/String;)V"](t),
            this.items = [],
            this.formElement = e
        },
        "<init>(Ljava/lang/String;[Ljavax/microedition/lcdui/Item;)V": function(t, e) {
            if (this["<init>(Ljava/lang/String;)V"](t),
            e != null)
                try {
                    for (var n = 0; n < e.length; n++) {
                        if (e[n] == null)
                            throw new c.javaRoot.java.lang.NullPointerException;
                        this["append(Ljavax/microedition/lcdui/Item;)I"](e[n])
                    }
                } catch {
                    throw new c.javaRoot.java.lang.IllegalStateException
                }
        },
        "append(Ljava/lang/String;)I": function(t) {
            var e = new c.javaRoot.javax.microedition.lcdui.StringItem;
            return e["<init>(Ljava/lang/String;Ljava/lang/String;)V"](null, t),
            this["append(Ljavax/microedition/lcdui/Item;)I"](e)
        },
        "append(Ljavax/microedition/lcdui/Item;)I": function(t) {
            let e = this.items.length;
            return this["insert(ILjavax/microedition/lcdui/Item;)V"](e, t),
            e
        },
        "append(Ljavax/microedition/lcdui/Image;)I": function(t) {
            var e = new c.javaRoot.javax.microedition.lcdui.ImageItem;
            return e["<init>(Ljava/lang/String;Ljavax/microedition/lcdui/Image;ILjava/lang/String;)V"](null, t, 0, null),
            this["append(Ljavax/microedition/lcdui/Item;)I"](e)
        },
        "insert(ILjavax/microedition/lcdui/Item;)V": async function(t, e) {
            let n = this.formElement
              , i = this.items;
            if (t < 0 || t > i.length)
                throw new c.javaRoot.java.lang.IndexOutOfBoundsException;
            await e["repaint()V"]?.(),
            n.insertBefore(e.element, i[t]?.element),
            i.splice(t, 0, e)
        },
        "size()I": function() {
            return this.items.length
        },
        "delete(I)V": function(t) {
            if (t < 0 || t >= this.items.length)
                throw new c.javaRoot.java.lang.IndexOutOfBoundsException;
            this.formElement.removeChild(this.items[t].element);
            for (var e = t; e < this.items.length - 1; e++)
                this.items[e] = this.items[e + 1];
            this.items.pop()
        },
        "deleteAll()V": function() {
            let t = this["size()I"]();
            for (var e = 0; e < t; e++)
                this["delete(I)V"](0)
        },
        "setItemStateListener(Ljavax/microedition/lcdui/ItemStateListener;)V": function(t) {},
        superClass: "javax.microedition.lcdui.Screen",
        require: ["javax.microedition.lcdui.StringItem"]
    });
    var Yu = createClass({
        "<init>(Ljava/lang/String;ZII)V": function(t, e, n, i) {
            if (n < 0 && n != -1)
                throw new c.javaRoot.java.lang.IllegalArgumentException;
            this.gauge = document.createElement("input"),
            this.gauge.type = "range",
            this.gauge.min = 0,
            this.gauge.max = n,
            e || (this.gauge.disabled = !0),
            this["setValue(I)V"](i),
            this.content.appendChild(this.gauge)
        },
        "setValue(I)V": function(t) {
            this.gauge.value = t
        },
        superClass: "javax.microedition.lcdui.Item",
        require: ["java.lang.IllegalArgumentException"]
    });
    var Ku = createClass({
        construct: function(t) {
            this.element = t,
            this.context = t.getContext("2d"),
            this.context.textBaseline = "top",
            this["setColor(III)V"](0, 0, 0),
            this["setClip(IIII)V"](0, 0, this.element.width, this.element.height),
            this.translateX = 0,
            this.translateY = 0,
            this.alpha = 255,
            this.style = this.$SOLIDI
        },
        $HCENTERI: 1,
        $VCENTERI: 2,
        $LEFTI: 4,
        $RIGHTI: 8,
        $TOPI: 16,
        $BOTTOMI: 32,
        $BASELINEI: 64,
        $SOLIDI: 0,
        $DOTTEDI: 1,
        "getColor()I": function() {
            return this.colorValue
        },
        "setColor(III)V": function(t, e, n) {
            this.color = "rgb(" + t + ", " + e + ", " + n + ")",
            this.colorValue = t * 65536 + e * 256 + n
        },
        "setColor(I)V": function(t) {
            var e = (t & 16711680) >> 16
              , n = (t & 65280) >> 8
              , i = t & 255;
            this["setColor(III)V"](e, n, i)
        },
        "setGrayScale(I)V": function(t) {
            this["setColor(III)V"](t, t, t)
        },
        "fillRect(IIII)V": function(t, e, n, i) {
            this.loadContext(),
            n == 0 && (n = 1),
            i == 0 && (i = 1),
            this.context.fillRect(t, e, n, i),
            this.context.restore()
        },
        "fillTriangle(IIIIII)V": function(t, e, n, i, r, a) {
            this.loadContext(),
            this.context.beginPath(),
            this.context.moveTo(t, e),
            this.context.lineTo(n, i),
            this.context.lineTo(r, a),
            this.context.lineTo(t, e),
            this.context.fill(),
            this.context.closePath(),
            this.context.restore()
        },
        "drawRect(IIII)V": function(t, e, n, i) {
            this.loadContext(),
            n == 0 && (n = 1),
            i == 0 && (i = 1),
            this.context.strokeRect(t, e, n, i),
            this.context.restore()
        },
        "drawRGB([IIIIIIIZ)V": function(t, e, n, i, r, a, o, l) {
            for (var u = this["getColor()I"](), d = 0; d < o; d++)
                for (var h = 0; h < a; h++) {
                    var g = t[e + d * n + h]
                      , _ = (g & 16711680) >> 16
                      , E = (g & 65280) >> 8
                      , T = g & 255
                      , w = 1;
                    l && (w = g / 4294967296);
                    var x = "rgba(" + _ + ", " + E + ", " + T + ", " + w + ")";
                    this.context.fillStyle = x,
                    this.context.fillRect(i + h, r + d, 1, 1)
                }
            this["setColor(I)V"](u)
        },
        "drawRoundRect(IIIIII)V": function(t, e, n, i, r, a) {
            this.loadContext(),
            this.drawRoundRectPath(t, e, n, i, r, a),
            this.context.stroke(),
            this.context.closePath(),
            this.context.restore()
        },
        "fillRoundRect(IIIIII)V": function(t, e, n, i, r, a) {
            this.loadContext(),
            this.drawRoundRectPath(t, e, n, i, r, a),
            this.context.fill(),
            this.context.closePath(),
            this.context.restore()
        },
        "drawLine(IIII)V": function(t, e, n, i) {
            this.loadContext(),
            this.context.beginPath(),
            t > n && t++,
            n > t && n++,
            e > i && e++,
            i > e && e++,
            i == e && t == n && (n++,
            i++),
            this.context.moveTo(t, e),
            this.context.lineTo(n, i),
            this.context.stroke(),
            this.context.closePath(),
            this.context.restore()
        },
        "drawChar(CIII)V": function(t, e, n, i) {
            var r = new c.javaRoot.java.lang.String(String.fromCharCode(t));
            this["drawString(Ljava/lang/String;III)V"](r, e, n, i)
        },
        "drawChars([CIIIII)V": function(t, e, n, i, r, a) {
            var o = c.javaRoot.java.lang.String.prototype["valueOf([CII)Ljava/lang/String;"](t, e, n);
            this["drawString(Ljava/lang/String;III)V"](o, i, r, a)
        },
        "drawArc(IIIIII)V": function(t, e, n, i, r, a) {
            this.loadContext(),
            this.drawArcPath(t, e, n, i, r, a),
            this.context.stroke(),
            this.context.closePath(),
            this.context.restore()
        },
        "fillArc(IIIIII)V": function(t, e, n, i, r, a) {
            this.loadContext(),
            this.drawArcPath(t, e, n, i, r, a),
            this.context.fill(),
            this.context.closePath(),
            this.context.restore()
        },
        "setFont(Ljavax/microedition/lcdui/Font;)V": function(t) {
            this.font = t
        },
        "drawString(Ljava/lang/String;III)V": function(t, e, n, i) {
            this.font && (this.context.font = this.font.getCSS()),
            this.context.fillStyle = this.color,
            i == 0 && (i = this.$TOPI | this.$LEFTI),
            i & this.$TOPI && (this.context.textBaseline = "top"),
            i & this.$VCENTERI && (this.context.textBaseline = "middle"),
            i & this.$BASELINEI && (this.context.textBaseline = "alphabetic"),
            i & this.$BOTTOMI && (this.context.textBaseline = "bottom"),
            i & this.$HCENTERI && (e -= this.context.measureText(t.text).width / 2),
            i & this.$RIGHTI && (e -= this.context.measureText(t.text).width),
            this.context.fillText(t.text, e, n)
        },
        "drawImage(Ljavax/microedition/lcdui/Image;III)V": function(t, e, n, i) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            try {
                i == 0 && (i = this.$TOPI | this.$LEFTI),
                i & this.$VCENTERI && (n -= t.element.height / 2),
                i & this.$BASELINEI && console.log("baseline,  what to do?"),
                i & this.$RIGHTI && (e -= t.element.width),
                i & this.$HCENTERI && (e -= t.element.width / 2),
                i & this.$BOTTOMI && (n -= t.element.height),
                this.context.drawImage(t.element, e, n)
            } catch (r) {
                console.error(r)
            }
        },
        "clipRect(IIII)V": function(t, e, n, i) {
            var r = Math.max(t, this.clipX)
              , a = Math.max(e, this.clipY)
              , o = Math.min(t + n, this.clipX + this.clipWidth) - r
              , l = Math.min(e + i, this.clipY + this.clipHeight) - a;
            this["setClip(IIII)V"](r, a, o, l)
        },
        "setClip(IIII)V": function(t, e, n, i) {
            n < 0 && (n = 0),
            i < 0 && (i = 0),
            this.clipX = t,
            this.clipY = e,
            this.clipWidth = n,
            this.clipHeight = i,
            this.context.restore(),
            this.context.save(),
            this.context.translate(this.translateX, this.translateY),
            this.context.beginPath(),
            this.context.rect(t, e, n, i),
            this.context.clip(),
            this.context.closePath()
        },
        "getClipX()I": function() {
            return this.clipX + this.translateX
        },
        "getClipY()I": function() {
            return this.clipY + this.translateY
        },
        "getClipWidth()I": function() {
            return this.clipWidth
        },
        "getClipHeight()I": function() {
            return this.clipHeight
        },
        "getFont()Ljavax/microedition/lcdui/Font;": function() {
            return this.font || c.javaRoot.javax.microedition.lcdui.Font.prototype["getDefaultFont()Ljavax/microedition/lcdui/Font;"]()
        },
        "drawSubstring(Ljava/lang/String;IIIII)V": function(t, e, n, i, r, a) {
            var o = t["substring(II)Ljava/lang/String;"](e, e + n);
            this["drawString(Ljava/lang/String;III)V"](o, i, r, a)
        },
        "drawRegion(Ljavax/microedition/lcdui/Image;IIIIIIII)V": function(t, e, n, i, r, a, o, l, u) {
            this.context.save();
            var d = i
              , h = r;
            if (a >= 4)
                var h = i
                  , d = r;
            u & this.$VCENTERI && (l -= h / 2),
            u & this.$BASELINEI && console.log("baseline,  what to do?"),
            u & this.$RIGHTI && (o -= d),
            u & this.$HCENTERI && (o -= d / 2),
            u & this.$BOTTOMI && (l -= h),
            this.context.translate(o + i / 2, l + r / 2);
            var g = c.javaRoot.javax.microedition.lcdui.game.Sprite.prototype;
            (a == g.$TRANS_MIRRORI || a == g.$TRANS_MIRROR_ROT180I) && this.context.scale(-1, 1),
            (a == g.$TRANS_MIRROR_ROT90I || a == g.$TRANS_MIRROR_ROT270I) && this.context.scale(1, -1),
            (a == g.$TRANS_ROT90I || a == g.$TRANS_MIRROR_ROT90I) && this.context.rotate(Math.PI / 2),
            (a == g.$TRANS_ROT180I || a == g.$TRANS_MIRROR_ROT180I) && this.context.rotate(Math.PI),
            (a == g.$TRANS_ROT270I || a == g.$TRANS_MIRROR_ROT270I) && this.context.rotate(3 * Math.PI / 2),
            this.context.drawImage(t.element, e, n, i, r, -d / 2, -h / 2, i, r),
            this.context.restore()
        },
        "getTranslateX()I": function() {
            return this.translateX
        },
        "getTranslateY()I": function() {
            return this.translateY
        },
        "translate(II)V": function(t, e) {
            this.translateX += t,
            this.translateY += e,
            this.context.translate(t, e)
        },
        "setStrokeStyle(I)V": function(t) {
            this.style = t
        },
        "getStrokeStyle()I": function() {
            return this.style
        },
        loadContext: function() {
            this.context.save(),
            this.style == this.$DOTTEDI ? this.context.mozDash = [2] : this.context.mozDash = null,
            this.context.fillStyle = this.color,
            this.context.strokeStyle = this.color
        },
        drawArcPath: function(t, e, n, i, r, a) {
            this.context.beginPath(),
            this.context.translate(t - n / 2, e - i / 2),
            n != 0 && i != 0 && this.context.scale(n, i),
            this.context.arc(1, 1, 1, r / 180 * Math.PI, (r + a) / 180 * Math.PI, !0)
        },
        drawRoundRectPath: function(t, e, n, i, r, a) {
            this.context.beginPath(),
            this.context.moveTo(t + r, e),
            this.context.lineTo(t + n - r, e),
            this.context.quadraticCurveTo(t + n, e, t + n, e + a),
            this.context.lineTo(t + n, e + i - a),
            this.context.quadraticCurveTo(t + n, e + i, t + n - r, e + i),
            this.context.lineTo(t + r, e + i),
            this.context.quadraticCurveTo(t, e + i, t, e + i - a),
            this.context.lineTo(t, e + a),
            this.context.quadraticCurveTo(t, e, t + r, e)
        },
        require: ["javax.microedition.lcdui.game.Sprite", "javax.microedition.lcdui.Font", "java.lang.String", "java.lang.NullPointerException"]
    });
    var Ur = Ti(zu(), 1);
    function wp(t, e) {
        var n, i = function() {
            return t[e++]
        }, r = function() {
            var g = new Uint8Array(4);
            g = g.map(i).reverse();
            var _ = new Int32Array(g.buffer);
            return _[0]
        }, a = r();
        if (a < 0)
            throw new Error("Invalid chunk length");
        for (var o = "", l = 0; l < 4; l++)
            o += String.fromCharCode(t[e++]);
        var u = t.slice(e, e + a)
          , d = Ur.default.buf(t.slice(e - 4, e + a));
        e += a;
        var h = r();
        return d !== h && (n = new Error("CRC values for " + o + " header do not match, PNG file is likely corrupted")),
        {
            length: a,
            chunkType: o,
            data: u,
            crc: h,
            error: n
        }
    }
    function Wu(t) {
        if (t[0] !== 137 && t[1] !== 80 && t[2] !== 78 && t[3] !== 71 && t[4] !== 13 && t[5] !== 10 && t[6] !== 26 && t[7] !== 10)
            throw new Error("Invalid PNG header");
        for (var e = 8, n = []; e < t.length; ) {
            var i = wp(t, e);
            n.push(i),
            e += i.length + 4 * 3
        }
        if (n.length < 1 || n[n.length - 1].chunkType !== "IEND")
            throw new Error(".png file ended prematurely: no IEND header was found");
        return n
    }
    function Ju(t) {
        var e = function(g) {
            return g.charCodeAt(0)
        }
          , n = function(g) {
            g.length = g.data.length;
            var _ = new Uint8Array(4 + g.length);
            _.set(Uint8Array.from(g.chunkType.split("").map(e))),
            _.set(g.data, 4),
            g.crc = Ur.default.buf(_)
        }
          , i = function(g) {
            var _ = new Int32Array(1);
            _[0] = g;
            var E = new Int8Array(_.buffer);
            return E.reverse()
        };
        t.map(n);
        var r = 8
          , a = 0
          , o = [137, 80, 78, 71, 13, 10, 26, 10]
          , l = function(g, _) {
            return g = g.length + 12 || g,
            g + _.length + 12
        };
        r += t.reduce(l);
        var u = new Uint8Array(r);
        u.set(o, a),
        a += 8;
        for (var d = 0; d < t.length; d++) {
            var h = t[d];
            let g = function(_) {
                var E = new Uint8Array(12 + _.data.length);
                return E.set(i(_.length)),
                E.set(Uint8Array.from(_.chunkType.split("").map(e)), 4),
                E.set(_.data, 8),
                E.set(i(_.crc), 8 + _.data.length),
                E
            };
            u.set(g(h), a),
            a += l(0, h)
        }
        return u
    }
    var Qu = createClass({
        "createImage(Ljava/io/InputStream;)Ljavax/microedition/lcdui/Image;": async function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            for (var e = [], n; (n = await X(t, "read()I")) != -1; )
                n >= 128 && (n -= 256),
                e.push(n);
            return this["createImage([BII)Ljavax/microedition/lcdui/Image;"](e, 0, e.length)
        },
        "createImage(II)Ljavax/microedition/lcdui/Image;": function(t, e) {
            var n = new c.javaRoot.javax.microedition.lcdui.Image
              , i = n.element = document.createElement("canvas");
            return n.element.width = t,
            n.element.height = e,
            et.hidpi && bi(i),
            i.style.imageRendering = "pixelated",
            i.getContext("2d").imageSmoothingEnabled = !1,
            n.mutable = !0,
            n
        },
        "createImage(Ljava/lang/String;)Ljavax/microedition/lcdui/Image;": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            var e = t.text;
            e.charAt(0) == "/" && (e = e.substr(1));
            var n = we(t.text);
            if (n == null)
                throw new c.javaRoot.java.io.IOException;
            return this["createImage([BII)Ljavax/microedition/lcdui/Image;"](n, 0, n.length)
        },
        "createImage(Ljavax/microedition/lcdui/Image;)Ljavax/microedition/lcdui/Image;": function(t) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            var e = this["createImage(II)Ljavax/microedition/lcdui/Image;"](t["getWidth()I"](), t["getHeight()I"]())
              , n = e["getGraphics()Ljavax/microedition/lcdui/Graphics;"]();
            return n["drawImage(Ljavax/microedition/lcdui/Image;III)V"](t, 0, 0, 0),
            e.mutable = !1,
            e
        },
        "createImage(Ljavax/microedition/lcdui/Image;IIIII)Ljavax/microedition/lcdui/Image;": function(t, e, n, i, r, a) {
            var o = this["createImage(II)Ljavax/microedition/lcdui/Image;"](i, r)
              , l = o["getGraphics()Ljavax/microedition/lcdui/Graphics;"]();
            return l["drawRegion(Ljavax/microedition/lcdui/Image;IIIIIIII)V"](t, e, n, i, r, a, 0, 0, 0),
            o.mutable = !1,
            o
        },
        "createImage([BII)Ljavax/microedition/lcdui/Image;": function(t, e, n) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            if (n < 0 || e >= t.length || e + n > t.length)
                throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException;
            t = tt.Buffer.from(t),
            (e !== 0 || n !== t.length) && (t = t.slice(e, e + n));
            var i = {
                "image/png": [137, 80, 78, 71, 13, 10, 26, 10],
                "image/jpeg": [255, 216],
                "image/bmp": [66, 77]
            }
              , r = null;
            for (var a in i) {
                for (var o = !0, l = 0; l < i[a].length; l++)
                    t[l] != i[a][l] && (o = !1);
                if (o) {
                    r = a;
                    break
                }
            }
            if (r == null)
                throw new Error("Unsupported image format");
            if (r === "image/png")
                try {
                    for (var u = Wu(t), d = 0; d < u.length; d++)
                        if (u[d].error) {
                            t = Ju(u);
                            break
                        }
                } catch (g) {
                    console.warn(g)
                }
            var h = Un(t, 0, n, r);
            return new Promise((g,_)=>{
                let E = new Image;
                E.onload = ()=>{
                    var T = this["createImage(II)Ljavax/microedition/lcdui/Image;"](E.width, E.height);
                    T.element.getContext("2d").drawImage(E, 0, 0),
                    T.mutable = !1,
                    g(T)
                }
                ,
                E.onerror = function() {
                    _(new c.javaRoot.java.io.IOException("Cannot load image"))
                }
                ,
                E.src = h
            }
            )
        },
        "createRGBImage([IIIZ)Ljavax/microedition/lcdui/Image;": function(t, e, n, i) {
            for (var r = this["createImage(II)Ljavax/microedition/lcdui/Image;"](e, n), a = r.element.getContext("2d"), o = a.getImageData(0, 0, e, n), l = 0; l < e * n; l++) {
                var u = t[l];
                u < 0 && (u += 4294967296);
                var d = u % 256;
                u = Math.floor(u / 256);
                var h = u % 256;
                u = Math.floor(u / 256);
                var g = u % 256;
                u = Math.floor(u / 256);
                var _ = u % 256;
                o.data[l * 4] = g,
                o.data[l * 4 + 1] = h,
                o.data[l * 4 + 2] = d,
                i ? o.data[l * 4 + 3] = _ : o.data[l * 4 + 3] = 255
            }
            return a.putImageData(o, 0, 0),
            r.mutable = !1,
            r
        },
        "getGraphics()Ljavax/microedition/lcdui/Graphics;": function() {
            return new c.javaRoot.javax.microedition.lcdui.Graphics(this.element)
        },
        "getRGB([IIIIIII)V": function(t, e, n, i, r, a, o) {
            for (var l = this.element.getContext("2d"), u = l.getImageData(i, r, a, o), d = 0; d < a * o; d++) {
                var h = u.data[d * 4] << 24;
                h += u.data[d * 4 + 1] << 16,
                h += u.data[d * 4 + 2] << 8,
                h += u.data[d * 4 + 3],
                h >= 4294967296 && (h -= 4294967296),
                t[e + (d % a - i) + (Math.floor(d / a) - r) * n] = h
            }
        },
        "getWidth()I": function() {
            return this.element.width
        },
        "getHeight()I": function() {
            return this.element.height
        },
        "isMutable()Z": function() {
            return this.mutable ? 1 : 0
        },
        require: ["java.io.IOException", "javax.microedition.lcdui.Graphics"]
    });
    var tf = createClass({
        "<init>(Ljava/lang/String;Ljavax/microedition/lcdui/Image;ILjava/lang/String;)V": function(t, e, n, i) {
            this["setLabel(Ljava/lang/String;)V"](t),
            this["setImage(Ljavax/microedition/lcdui/Image;)V"](e),
            this["setLayout(I)V"](n)
        },
        "setImage(Ljavax/microedition/lcdui/Image;)V": function(t) {
            this.image = t;
            var e = c.javaRoot.javax.microedition.lcdui.Image.prototype["createImage(Ljavax/microedition/lcdui/Image;)Ljavax/microedition/lcdui/Image;"](t);
            this.content.appendChild(e.element)
        },
        superClass: "javax.microedition.lcdui.Item"
    });
    var ef = createClass({
        $LAYOUT_DEFAULTI: 0,
        $LAYOUT_LEFTI: 1,
        $LAYOUT_RIGHTI: 2,
        $LAYOUT_CENTERI: 3,
        $LAYOUT_NEWLINE_BEFOREI: 256,
        $LAYOUT_NEWLINE_AFTERI: 512,
        construct: function() {
            let t = document.createElement("div");
            t.className = "item";
            let e = t.style;
            e.padding = "2px 5px";
            let n = document.createElement("div");
            n.className = "label",
            t.appendChild(n);
            let i = document.createElement("div");
            i.className = "content",
            t.appendChild(i),
            this.element = t,
            this.label = n,
            this.content = i
        },
        "addCommand(Ljavax/microedition/lcdui/Command;)V": function(t) {
            this.command = t
        },
        "getLabel()Ljava/lang/String;": function(t) {
            return new c.javaRoot.java.lang.String(this.label.innerHTML)
        },
        "setDefaultCommand(Ljavax/microedition/lcdui/Command;)V": function(t) {
            this.command = t
        },
        "setItemCommandListener(Ljavax/microedition/lcdui/ItemCommandListener;)V": function(t) {
            this.itemListener = t
        },
        "setLayout(I)V": function(t) {
            t == this.$LAYOUT_RIGHTI && (this.content.style.textAlign = "right"),
            t == this.$LAYOUT_CENTERI && (this.content.style.textAlign = "center")
        },
        "setLabel(Ljava/lang/String;)V": function(t) {
            t != null ? this.label.innerHTML = t.text : this.label.innerHTML = ""
        },
        "notifyStateChanged()V": function() {}
    });
    var nf = G({});
    var rf = G({
        itemStateChanged(t) {}
    });
    var af = 3
      , of = createClass({
        IMPLICIT: af,
        construct: function() {
            this.init(),
            this.items = []
        },
        "<init>(Ljava/lang/String;I)V": function(t, e) {
            if (this["setTitle(Ljava/lang/String;)V"](t),
            e != af)
                throw new Error("List: only IMPLICIT type")
        },
        "<init>(Ljava/lang/String;I[Ljava/lang/String;[Ljavax/microedition/lcdui/Image;)V": function(t, e, n, i) {
            if (this["<init>(Ljava/lang/String;I)V"](t, e),
            n == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            if (i != null && i.length != n.length)
                throw new c.javaRoot.java.lang.IllegalArgumentException;
            for (var r = 0; r < n.length; r++) {
                var a = null;
                i != null && (a = i[r]),
                this["append(Ljava/lang/String;Ljavax/microedition/lcdui/Image;)I"](n[r], a)
            }
        },
        "append(Ljava/lang/String;Ljavax/microedition/lcdui/Image;)I": function(t, e) {
            if (t == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            let n = document.createElement("div");
            n.className = "item";
            let i = n.style;
            i.lineHeight = "50px",
            i.fontSize = "17px",
            i.color = "#323232",
            i.padding = "0 5px";
            let r = {
                element: n,
                stringPart: t,
                imagePart: e
            }
              , a = this.contentElement;
            a.appendChild(n),
            n.addEventListener("click", ()=>{
                let o = a.childNodes;
                for (let u = 0; u < o.length; u++)
                    o[u] == n && (this.selectedItem = u);
                let l = this.command || this.choiceCommands[0];
                this.callCommandAction(l)
            }
            ),
            this.refreshItem(r),
            this.items.push(r)
        },
        "deleteAll()V": function() {
            this.items.length = 0,
            this.contentElement.innerHTML = ""
        },
        "getSelectedIndex()I": function() {
            return this.selectedItem
        },
        "getString(I)Ljava/lang/String;": function(t) {
            if (t < 0 || t >= this.items.length)
                throw new c.javaRoot.java.lang.IndexOutOfBoundsException;
            return this.items[t].stringPart
        },
        "set(ILjava/lang/String;Ljavax/microedition/lcdui/Image;)V": function(t, e, n) {
            if (e == null)
                throw new c.javaRoot.java.lang.NullPointerException;
            if (t < 0 || t >= this.items.length)
                throw new c.javaRoot.java.lang.IndexOutOfBoundsException;
            var i = this.items[t];
            i.stringPart = e,
            i.imagePart = n,
            this.refreshItem(i)
        },
        "setSelectCommand(Ljavax/microedition/lcdui/Command;)V": function(t) {
            this.command = t
        },
        "setSelectedIndex(IZ)V": function(t, e) {
            if (t < 0 || t >= this.items.length)
                throw new c.javaRoot.java.lang.IndexOutOfBoundsException;
            this.selectedItem = t
        },
        "setFitPolicy(I)V": function(t) {
            this.fitPolicy = t
        },
        "getFitPolicy()I": function() {
            return this.fitPolicy || ji
        },
        "size()I": function() {
            return this.items.length
        },
        refreshItem: function(t) {
            t.element.innerHTML = "",
            t.imagePart && t.element.appendChild(t.imagePart.element),
            t.element.innerHTML += t.stringPart.text
        },
        superClass: "javax.microedition.lcdui.Displayable"
    });
    var sf = createClass({
        superClass: "javax.microedition.lcdui.Displayable"
    });
    var cf = createClass({});
    var lf = createClass({
        "<init>(Ljava/lang/String;Ljava/lang/String;)V": function(t, e) {
            this["<init>(Ljava/lang/String;Ljava/lang/String;I)V"](t, e)
        },
        "<init>(Ljava/lang/String;Ljava/lang/String;I)V": function(t, e, n) {
            this["setLabel(Ljava/lang/String;)V"](t),
            this.content.innerHTML = e.text
        },
        "setFont(Ljavax/microedition/lcdui/Font;)V": function(t) {
            this.font = t,
            this.element.style.font = t.getCSS()
        },
        "getFont()Ljavax/microedition/lcdui/Font;": function() {
            return this.font || c.javaRoot.javax.microedition.lcdui.Font.prototype["getDefaultFont()Ljavax/microedition/lcdui/Font;"]()
        },
        "setText(Ljava/lang/String;)V": function(t) {
            this.content.innerHTML = t.text
        },
        superClass: "javax.microedition.lcdui.Item",
        require: ["javax.microedition.lcdui.Font"]
    });
    var uf = createClass({
        "<init>(Ljava/lang/String;Ljava/lang/String;II)V": function(t, e, n, i) {
            this.init();
            let r = new c.javaRoot.javax.microedition.lcdui.TextField;
            r["<init>(Ljava/lang/String;Ljava/lang/String;II)V"](null, e, n, i),
            this.textField = r,
            this["setTitle(Ljava/lang/String;)V"](t);
            let a = document.createElement("div");
            a.className = "textbox",
            a.appendChild(r.element),
            this.contentElement.appendChild(a)
        },
        "getString()Ljava/lang/String;": function() {
            return this.textField["getString()Ljava/lang/String;"]()
        },
        "setMaxSize(I)I": function(t) {
            return this.textField["setMaxSize(I)I"](t),
            t
        },
        "getMaxSize()I": function() {
            return this.textField["getMaxSize()I"]()
        },
        "setString(Ljava/lang/String;)V": function(t) {
            this.textField["setString(Ljava/lang/String;)V"](t)
        },
        "getConstraints()I": function() {
            return this.textField["getConstraints()I"]()
        },
        "setConstraints(I)V": function(t) {
            this.textField["setConstraints(I)V"](t)
        },
        "insert([CIII)V": function(t, e, n, i) {
            this.textField["insert([CIII)V"](t, e, n, i)
        },
        "insert(Ljava/lang/String;I)V": function(t, e) {
            this.textField["insert(Ljava/lang/String;I)V"](t, e)
        },
        "setChars([CII)V": function(t, e, n) {
            this.textField["setChars([CII)V"](t, e, n)
        },
        "setInitialInputMode(Ljava/lang/String;)V": function(t) {
            this.textField["setInitialInputMode(Ljava/lang/String;)V"](t)
        },
        "delete(II)V": function(t, e) {
            this.textField["delete(II)V"](t, e)
        },
        "getCaretPosition()I": function() {
            return this.textField["getCaretPosition()I"]()
        },
        superClass: "javax.microedition.lcdui.Screen",
        require: ["javax.microedition.lcdui.TextField"]
    });
    var ff = createClass({
        "<init>(Ljava/lang/String;Ljava/lang/String;II)V": function(t, e, n, i) {
            if (n <= 0)
                throw new c.javaRoot.java.lang.IllegalArgumentException("maxSize <= 0");
            if (e && e.text.length > n)
                throw new c.javaRoot.java.lang.IllegalArgumentException("text longer than maxSize");
            this["setLabel(Ljava/lang/String;)V"](t);
            let r = document.createElement("input");
            this.input = r,
            r.maxLength = n,
            r.value = e.text;
            let a = r.style;
            a.width = "100%",
            a.boxSizing = "border-box",
            a.fontSize = "16px",
            a.lineHeight = "26px",
            a.color = "#323232",
            a.border = "none",
            a.borderBottom = "1px solid #323232",
            a.outline = "none",
            a.borderRadius = "0",
            this.content.appendChild(r),
            this.constraints = i
        },
        "getString()Ljava/lang/String;": function() {
            return new c.javaRoot.java.lang.String(this.input.value)
        },
        "setString(Ljava/lang/String;)V": function(t) {
            this.input.value = t.text
        },
        "setMaxSize(I)I": function(t) {
            return this.input.maxLength = t,
            t
        },
        "getMaxSize()I": function() {
            return this.input.maxSize
        },
        "getConstraints()I": function() {
            return this.constraints
        },
        "setConstraints(I)V": function(t) {
            this.constraints = t
        },
        "insert([CIII)V": function(t, e, n, i) {
            let r = Tt(t, e, n);
            this["insert(Ljava/lang/String;I)V"](new c.javaRoot.java.lang.String(r), i)
        },
        "insert(Ljava/lang/String;I)V": function(t, e) {
            let n = this.input
              , i = t.text
              , r = n.value;
            n.value = r.substring(0, e) + i + r.substring(e)
        },
        "setChars([CII)V": function(t, e, n) {
            let i = Tt(t, e, n);
            this.input.value = i
        },
        "setInitialInputMode(Ljava/lang/String;)V": function(t) {
            console.log("TODO setInitialInputMode:", t)
        },
        "delete(II)V": function(t, e) {
            let n = this.input.value;
            this.input.value = n.substring(0, t) + n.substring(t + e)
        },
        "getCaretPosition()I": function() {
            return this.input.selectionStart || 0
        },
        superClass: "javax.microedition.lcdui.Item",
        require: ["java.lang.IllegalArgumentException"]
    });
    var df = createClass({
        "<init>(Ljava/lang/String;)V": function() {}
    });
    var mf = createClass({});
    var hf = createClass({});
    var pf = createClass({});
    var gf = createClass({
        "getProperties()Ljava/util/Hashtable;": function() {
            return new c.javaRoot.java.util.Hashtable
        },
        require: ["java.util.Hashtable"]
    });
    var vf = createClass({});
    var xf = createClass({});
    var _f = createClass({});
    var wf = createClass({});
    var yf = createClass({});
    var If = createClass({});
    var bf = createClass({});
    var Ef = createClass({});
    var jf = createClass({});
    var Sf = createClass({});
    var Rf = createClass({});
    var kf = G({
        superClass: "javax.microedition.media.Control"
    });
    var Cf = createClass({
        construct: function(t) {
            this.player = t
        },
        interfaces: ["javax.microedition.media.control.MIDIControl"]
    });
    var Tf = G({
        superClass: "javax.microedition.media.Control",
        package: "javax.microedition.media.control",
        name: "VolumeControl"
    });
    var Af = createClass({
        construct: function(t) {
            this.player = t
        },
        "setLevel(I)I": function(t) {
            return t < 0 && (t = 0),
            t > 100 && (t = 100),
            this.player.element.volume = t / 100,
            this.player.sendEvent("VOLUME_CHANGED", t),
            t
        },
        interfaces: ["javax.microedition.media.control.VolumeControl"]
    });
    var Lf = G({
        package: "javax.microedition.media",
        name: "Control"
    });
    var Of = G({
        package: "javax.microedition.media",
        name: "Controllable"
    });
    var Ff = createClass({
        "createPlayer(Ljava/io/InputStream;Ljava/lang/String;)Ljavax/microedition/media/Player;": fe(function(t, e) {
            if (t == null)
                throw new c.javaRoot.java.lang.IllegalArgumentException;
            return new c.javaRoot.javax.microedition.media.PlayerImpl(t,e.text)
        }),
        require: ["javax.microedition.media.PlayerImpl"]
    });
    var Df = createClass({
        superClass: "java.lang.Exception"
    });
    var Nf = createClass({});
    var Mf = createClass({
        construct: function(t, e) {
            this.listeners = [],
            this.state = this.$UNREALIZEDI,
            this.countLoop = 1,
            this.repeated = 0;
            var n = t.getBytes()
              , i = this.element = new Audio;
            this.control = new c.javaRoot.javax.microedition.media.control.VolumeControlImpl(this);
            var r = this;
            e == "audio/x-wav" ? (i.addEventListener("ended", function() {
                r.repeated++,
                r.repeated < r.countLoop && r.element.play()
            }),
            i.src = Un(n, 0, n.length, e)) : e == "audio/midi" || e == "sp-midi" || e == "audio/spmidi" ? (i = this.element = {
                play() {
                    return Promise.resolve()
                },
                pause() {}
            },
            this.control = new c.javaRoot.javax.microedition.media.control.MIDIControlImpl(this)) : console.error("Unsupported sound format: " + e)
        },
        $CLOSEDI: 0,
        $UNREALIZEDI: 100,
        $REALIZEDI: 100,
        $PREFETCHEDI: 300,
        $STARTEDI: 400,
        "addPlayerListener(Ljavax/microedition/media/PlayerListener;)V": function(t) {
            this.listeners.push(t),
            console.log("Player listener: " + t.className)
        },
        "prefetch()V": function() {
            if (this.state == this.$CLOSEDI)
                throw new c.javaRoot.java.lang.IllegalStateException;
            this.state = this.$PREFETCHEDI
        },
        "realize()V": function() {
            if (this.state == this.$CLOSEDI)
                throw new c.javaRoot.java.lang.IllegalStateException;
            this.state == this.$UNREALIZEDI && (this.state = this.$PREFETCHEDI)
        },
        "setLoopCount(I)V": function(t) {
            if (this.state == this.$CLOSEDI || this.state == this.$STAREDI)
                throw new c.javaRoot.java.lang.IllegalStateException;
            if (t == 0)
                throw new c.javaRoot.java.lang.IllegalArgumentException;
            this.countLoop = t,
            this.element.loop = t == -1
        },
        "getControl(Ljava/lang/String;)Ljavax/microedition/media/Control;": function() {
            return this.control
        },
        "start()V": function() {
            if (this.state == this.$CLOSEDI)
                throw new c.javaRoot.java.lang.IllegalStateException;
            this.state = this.$STARTEDI,
            this.repeated = 0,
            this.element.play()
        },
        "getState()I": function() {
            return this.state
        },
        "stop()V": function() {
            if (this.state == this.$CLOSEDI)
                throw new c.javaRoot.java.lang.IllegalStateException;
            this.state = this.$PREFETCHEDI,
            this.element.pause()
        },
        sendEvent: function() {},
        "setMediaTime(J)J": function(t) {
            return t
        },
        "close()V": function() {
            this.state = this.$CLOSEDI
        },
        "deallocate()V": function() {
            if (this.state == this.$CLOSEDI)
                throw new c.javaRoot.java.lang.IllegalStateException;
            this.element.pause()
        },
        interfaces: ["javax.microedition.media.Player"],
        require: ["javax.microedition.media.control.VolumeControlImpl", "javax.microedition.media.control.MIDIControlImpl"]
    });
    var Bf = G({
        package: "javax.microedition.media",
        name: "PlayerListener"
    });
    var Vf = createClass({
        require: ["javax.microedition.io.ConnectionNotFoundException"],
        "notifyDestroyed()V": function() {
            console.log("TODO exit")
        },
        "<init>()V": function() {},
        "getAppProperty(Ljava/lang/String;)Ljava/lang/String;": function(t) {
            var e = c.manifest[t.text.toLowerCase()];
            return e != null ? new c.javaRoot.java.lang.String(e) : null
        },
        "checkPermission(Ljava/lang/String;)I": function(t) {
            return 1
        },
        "platformRequest(Ljava/lang/String;)Z": function(t) {
            let e = t.text;
            if (e.startsWith("http://") || e.startsWith("https://"))
                return window.open(e, "_blank"),
                0;
            throw new c.javaRoot.javax.microedition.io.ConnectionNotFoundException
        }
    });
    var Uf = createClass({
        superClass: "java.lang.Exception",
        name: "MIDletStateChangeException",
        package: "javax.microedition.midlet"
    });
    var Pf = createClass({});
    var Zf = createClass({
        superClass: "java.lang.Exception"
    });
    var Hf = createClass({
        superClass: "javax.microedition.rms.RecordStoreException",
        package: "javax.microedition.rms",
        name: "InvalidRecordIDException"
    });
    var $f = G({
        package: "javax.microedition.rms",
        name: "RecordComparator"
    });
    var Gf = G({
        package: "javax.microedition.rms",
        name: "RecordEnumeration"
    });
    var qf = createClass({
        construct: function(t, e, n, i) {
            this.store = t,
            this.filter = e,
            this.comparator = n,
            this.keepupdated = i,
            this.result = [];
            for (var r = 1; r <= this.store["getNumRecords()I"](); r++)
                try {
                    var a = this.store["getRecord(I)[B"](r);
                    (!e || e["matches([B)Z"](a)) && this.result.push({
                        id: r,
                        data: a
                    })
                } catch {}
            this.position = 0
        },
        "destroy()V": function() {
            this.destroyed = !0
        },
        "hasNextElement()Z": function() {
            if (this.destroyed)
                throw new c.javaRoot.java.lang.IllegalStateException;
            return this.position < this.result.length ? 1 : 0
        },
        "nextRecord()[B": function() {
            if (this.destroyed)
                throw new c.javaRoot.java.lang.IllegalStateException;
            if (this.position >= this.result.length)
                throw new c.javaRoot.javax.microedition.rms.InvalidRecordIDException;
            return this.result[this.position++].data
        },
        "nextRecordId()I": function() {
            if (this.destroyed)
                throw new c.javaRoot.java.lang.IllegalStateException;
            if (this.position >= this.result.length)
                throw new c.javaRoot.javax.microedition.rms.InvalidRecordIDException;
            return this.result[this.position++].id
        },
        "numRecords()I": function() {
            if (this.destroyed)
                throw new c.javaRoot.java.lang.IllegalStateException;
            return this.result.length
        },
        "reset()V": function() {
            if (this.destroyed)
                throw new c.javaRoot.java.lang.IllegalStateException;
            this.position = 0
        },
        interfaces: ["javax.microedition.rms.RecordEnumeration", "javax.microedition.rms.InvalidRecordIDException"]
    });
    var Yf = G({
        package: "javax.microedition.rms",
        name: "RecordFilter",
        "matches([B)Z": function(t) {}
    });
    var Kf = createClass({
        construct: function(t) {
            this.storageName = t
        },
        "openRecordStore(Ljava/lang/String;Z)Ljavax/microedition/rms/RecordStore;": function(t, e) {
            var n = this.getStorageName(t);
            if (localStorage.getItem(n))
                return new c.javaRoot.javax.microedition.rms.RecordStore(n);
            if (e)
                return localStorage.setItem(n, "0"),
                localStorage.setItem(n + "size", "0"),
                localStorage.setItem(n + "version", "0"),
                localStorage.setItem(n + "lastModified", "0"),
                new c.javaRoot.javax.microedition.rms.RecordStore(n);
            throw new c.javaRoot.javax.microedition.rms.RecordStoreNotFoundException
        },
        "openRecordStore(Ljava/lang/String;ZIZ)Ljavax/microedition/rms/RecordStore;": function(t, e, n, i) {
            return this["openRecordStore(Ljava/lang/String;Z)Ljavax/microedition/rms/RecordStore;"](t, e)
        },
        "openRecordStore(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljavax/microedition/rms/RecordStore;": function(t, e, n) {
            return this["openRecordStore(Ljava/lang/String;Z)Ljavax/microedition/rms/RecordStore;"](t, !1)
        },
        "deleteRecord(I)V": function() {
            console.warn("delete record"),
            this.increaseVersion()
        },
        "getNumRecords()I": function() {
            return parseInt(localStorage.getItem(this.storageName + "size"))
        },
        "getLastModified()J": function() {
            var t = parseInt(localStorage.getItem(this.storageName + "lastModified"));
            return {
                hi: Math.floor(t / 4294967296),
                lo: t % 4294967296
            }
        },
        "getVersion()I": function() {
            return parseInt(localStorage.getItem(this.storageName + "version"))
        },
        "addRecord([BII)I": function(t, e, n) {
            var i = parseInt(localStorage.getItem(this.storageName + "size")) + 1;
            return localStorage.setItem(this.storageName + "size", i.toString()),
            this["setRecord(I[BII)V"](i, t, e, n),
            i
        },
        "getNextRecordID()I": function() {
            return parseInt(localStorage.getItem(this.storageName + "size")) + 1
        },
        "getRecord(I)[B": function(t) {
            try {
                var e = localStorage.getItem(this.storageName + t).split(",")
            } catch {
                throw new c.javaRoot.javax.microedition.rms.InvalidRecordIDException
            }
            var n = [];
            if (e[0] === "")
                return n;
            for (var i = 0; i < e.length; i++)
                n[i] = parseInt(e[i]);
            return n
        },
        "getRecord(I[BI)I": function(t, e, n) {
            var i = this["getRecord(I)[B"](t);
            if (i.length > e.length - n)
                throw new c.javaRoot.java.lang.ArrayIndexOutOfBoundsException;
            for (var r = 0; r < i.length; r++)
                e[n + r] = i[r];
            return i.length
        },
        "getRecordSize(I)I": function(t) {
            return this["getRecord(I)[B"](t).length
        },
        "enumerateRecords(Ljavax/microedition/rms/RecordFilter;Ljavax/microedition/rms/RecordComparator;Z)Ljavax/microedition/rms/RecordEnumeration;": function(t, e, n) {
            if (e || n)
                throw new Error("RecordStore: filter and comparator not supported");
            var i = new c.javaRoot.javax.microedition.rms.RecordEnumerationImpl(this,t,e,n);
            return i
        },
        "getSizeAvailable()I": function() {
            if (this.isClosed)
                throw new c.javaRoot.javax.microedition.rms.RecordStoreNotOpenException;
            return this.updateSize(0)
        },
        "closeRecordStore()V": function() {
            this.isClosed = !0
        },
        "listRecordStores()[Ljava/lang/String;": function() {
            var t = c.manifest["midlet-vendor"]
              , e = c.manifest["midlet-name"]
              , n = t + "/" + e + "/"
              , i = [];
            for (var r in localStorage)
                if (r.indexOf(n) != -1 && r.indexOf("/size") != -1) {
                    var a = r.replace(n, "").replace("/size", "");
                    i.push(new c.javaRoot.java.lang.String(a))
                }
        },
        "deleteRecordStore(Ljava/lang/String;)V": function(t) {
            var e = this.getStorageName(t)
              , n = Number(localStorage.getItem(e + "size"));
            localStorage.removeItem(e),
            localStorage.removeItem(e + "size"),
            localStorage.removeItem(e + "lastModified"),
            localStorage.removeItem(e + "version");
            for (var i = 1; i <= n; i++)
                localStorage.removeItem(e + i)
        },
        "setRecord(I[BII)V": function(t, e, n, i) {
            if (this.isClosed)
                throw new c.javaRoot.javax.microedition.rms.RecordStoreNotOpenException;
            if (t > parseInt(localStorage.getItem(this.storageName + "size")))
                throw new c.javaRoot.javax.microedition.rms.InvalidRecordIDException;
            var r = "";
            e && (r = e.slice(n, n + i).toString());
            var a = r.length;
            if (localStorage[this.storageName + t] && (a -= localStorage[this.storageName + t].length),
            this.updateSize(a) < 0)
                throw new c.javaRoot.javax.microedition.rms.RecordStoreFullException;
            localStorage.setItem(this.storageName + t, r),
            localStorage.setItem(this.storageName + "lastModified", Date.now().toString()),
            this.increaseVersion()
        },
        getStorageName: function(t) {
            var e = c.manifest["midlet-vendor"]
              , n = c.manifest["midlet-name"];
            return e + "/" + n + "/" + t.text + "/"
        },
        increaseVersion: function() {
            var t = parseInt(localStorage.getItem(this.storageName + "version")) + 1;
            localStorage.setItem(this.storageName + "version", t.toString())
        },
        updateSize: function(t) {
            return localStorage.freeSpace === void 0 && (localStorage.freeSpace = 1024 * 1024 * 1024),
            localStorage.freeSpace = parseInt(localStorage.freeSpace) + t
        },
        require: ["javax.microedition.rms.InvalidRecordIDException", "javax.microedition.rms.RecordStoreNotFoundException", "javax.microedition.rms.RecordEnumerationImpl"]
    });
    var Xf = createClass({
        superClass: "java.lang.Exception"
    });
    var zf = createClass({
        superClass: "java.lang.Exception"
    });
    var Wf = createClass({
        superClass: "javax.microedition.rms.RecordStoreException"
    });
    var Jf = createClass({
        superClass: "javax.microedition.rms.RecordStoreException"
    });
    var Qf = G({
        package: "javax.wireless.messaging",
        name: "Message"
    });
    var td = G({
        superClass: "javax.microedition.io.Connection",
        package: "javax.wireless.messaging",
        name: "MessageConnection"
    });
    var ed = G({
        superClass: "javax.wireless.messaging.Message",
        package: "javax.wireless.messaging",
        name: "TextMessage"
    });
    var nd = {
        "com.nokia.mid.impl.jms.core.Launcher": bs,
        "com.nokia.mid.sound.Sound": Es,
        "com.nokia.mid.ui.frameanimator.FrameAnimator": js,
        "com.nokia.mid.ui.frameanimator.FrameAnimatorListener": Ss,
        "com.nokia.mid.ui.gestures.GestureEvent": Rs,
        "com.nokia.mid.ui.gestures.GestureInteractiveZone": ks,
        "com.nokia.mid.ui.gestures.GestureListener": Cs,
        "com.nokia.mid.ui.gestures.GestureRegistrationManager": Ts,
        "com.nokia.mid.ui.lcdui.DisplayStateListener": As,
        "com.nokia.mid.ui.lcdui.Indicator": Ls,
        "com.nokia.mid.ui.lcdui.IndicatorManager": Os,
        "com.nokia.mid.ui.CanvasItem": Fs,
        "com.nokia.mid.ui.DeviceControl": Ds,
        "com.nokia.mid.ui.DirectGraphics": Ns,
        "com.nokia.mid.ui.DirectUtils": Ms,
        "com.nokia.mid.ui.FullCanvas": Bs,
        "com.nokia.mid.ui.TextEditor": Vs,
        "com.nokia.mid.ui.TextEditorListener": Us,
        "com.samsung.util.AudioClip": Ps,
        "com.samsung.util.SM": Zs,
        "com.samsung.util.SMS": Hs,
        "java.io.BufferStream": $s,
        "java.io.ByteArrayInputStream": Gs,
        "java.io.ByteArrayOutputStream": qs,
        "java.io.DataInput": Ys,
        "java.io.DataInputStream": Ks,
        "java.io.DataOutputStream": Xs,
        "java.io.DynamicInputStream": zs,
        "java.io.DynamicOutputStream": Ws,
        "java.io.EOFException": Js,
        "java.io.InputStream": Qs,
        "java.io.InputStreamReader": tc,
        "java.io.InterruptedIOException": ec,
        "java.io.IOException": nc,
        "java.io.OutputStream": ic,
        "java.io.PrintStream": rc,
        "java.io.Reader": ac,
        "java.io.UnsupportedEncodingException": oc,
        "java.io.UTFDataFormatException": sc,
        "java.io.Writer": cc,
        "java.lang.ref.WeakReference": lc,
        "java.lang.ArithmeticException": uc,
        "java.lang.ArrayIndexOutOfBoundsException": fc,
        "java.lang.ArrayObject": dc,
        "java.lang.ArrayStoreException": mc,
        "java.lang.AutoCloseable": hc,
        "java.lang.Boolean": vc,
        "java.lang.Byte": xc,
        "java.lang.Character": _c,
        "java.lang.Class": Ic,
        "java.lang.ClassCastException": bc,
        "java.lang.ClassNotFoundException": Ec,
        "java.lang.Closeable": jc,
        "java.lang.Double": Sc,
        "java.lang.Error": Rc,
        "java.lang.Exception": kc,
        "java.lang.Float": Cc,
        "java.lang.IllegalAccessException": Tc,
        "java.lang.IllegalArgumentException": Ac,
        "java.lang.IllegalMonitorStateException": Lc,
        "java.lang.IllegalStateException": Oc,
        "java.lang.IndexOutOfBoundsException": Fc,
        "java.lang.InstantiationException": Dc,
        "java.lang.Integer": Nc,
        "java.lang.InterruptedException": Mc,
        "java.lang.IOException": Bc,
        "java.lang.Long": Vc,
        "java.lang.Math": Uc,
        "java.lang.NegativeArraySizeException": Pc,
        "java.lang.NoClassDefFoundError": Zc,
        "java.lang.NullPointerException": Hc,
        "java.lang.NumberFormatException": $c,
        "java.lang.Object": Gc,
        "java.lang.OutOfMemoryError": qc,
        "java.lang.Readable": Yc,
        "java.lang.Runnable": Kc,
        "java.lang.Runtime": Xc,
        "java.lang.RuntimeException": zc,
        "java.lang.SecurityException": Wc,
        "java.lang.Short": Jc,
        "java.lang.String": Qc,
        "java.lang.StringBuffer": tl,
        "java.lang.StringIndexOutOfBoundsException": el,
        "java.lang.System": il,
        "java.lang.Thread": rl,
        "java.lang.Throwable": al,
        "java.lang.UnsupportedOperationException": ol,
        "java.lang.VirtualMachineError": sl,
        "java.security.DigestException": cl,
        "java.security.MessageDigest": ll,
        "java.security.NoSuchAlgorithmException": ul,
        "java.util.ArrayEnumeration": fl,
        "java.util.Calendar": dl,
        "java.util.Date": ml,
        "java.util.Enumeration": hl,
        "java.util.Hashtable": pl,
        "java.util.NoSuchElementException": gl,
        "java.util.Properties": vl,
        "java.util.Random": xl,
        "java.util.Stack": _l,
        "java.util.Timer": wl,
        "java.util.TimerTask": yl,
        "java.util.TimeZone": Il,
        "java.util.Vector": bl,
        "javax.crypto.spec.IvParameterSpec": El,
        "javax.crypto.spec.SecretKeySpec": jl,
        "javax.crypto.Cipher": Sl,
        "javax.microedition.io.file.ConnectionClosedException": Rl,
        "javax.microedition.io.file.FileConnection": kl,
        "javax.microedition.io.file.FileConnectionImpl": hu,
        "javax.microedition.io.file.FileEnumeration": pu,
        "javax.microedition.io.file.FileSystemListener": gu,
        "javax.microedition.io.file.FileSystemRegistry": vu,
        "javax.microedition.io.file.IllegalModeException": xu,
        "javax.microedition.io.Connection": _u,
        "javax.microedition.io.ConnectionNotFoundException": wu,
        "javax.microedition.io.Connector": yu,
        "javax.microedition.io.ContentConnection": Iu,
        "javax.microedition.io.HttpConnection": bu,
        "javax.microedition.io.HttpConnectionImpl": ju,
        "javax.microedition.io.InputConnection": Su,
        "javax.microedition.io.OutputConnection": Ru,
        "javax.microedition.io.SecureConnection": ku,
        "javax.microedition.io.SecurityInfo": Cu,
        "javax.microedition.io.SocketConnection": Tu,
        "javax.microedition.io.SocketConnectionImpl": Au,
        "javax.microedition.io.StreamConnection": Lu,
        "javax.microedition.lcdui.game.GameCanvas": Ou,
        "javax.microedition.lcdui.game.Layer": Fu,
        "javax.microedition.lcdui.game.Sprite": Du,
        "javax.microedition.lcdui.Alert": Nu,
        "javax.microedition.lcdui.AlertType": Mu,
        "javax.microedition.lcdui.Canvas": Bu,
        "javax.microedition.lcdui.ChoiceGroup": Vu,
        "javax.microedition.lcdui.Command": Uu,
        "javax.microedition.lcdui.CommandListener": Pu,
        "javax.microedition.lcdui.CustomItem": Zu,
        "javax.microedition.lcdui.Display": Hu,
        "javax.microedition.lcdui.Displayable": $u,
        "javax.microedition.lcdui.Font": Gu,
        "javax.microedition.lcdui.Form": qu,
        "javax.microedition.lcdui.Gauge": Yu,
        "javax.microedition.lcdui.Graphics": Ku,
        "javax.microedition.lcdui.Image": Qu,
        "javax.microedition.lcdui.ImageItem": tf,
        "javax.microedition.lcdui.Item": ef,
        "javax.microedition.lcdui.ItemCommandListener": nf,
        "javax.microedition.lcdui.ItemStateListener": rf,
        "javax.microedition.lcdui.List": of,
        "javax.microedition.lcdui.Screen": sf,
        "javax.microedition.lcdui.Spacer": cf,
        "javax.microedition.lcdui.StringItem": lf,
        "javax.microedition.lcdui.TextBox": uf,
        "javax.microedition.lcdui.TextField": ff,
        "javax.microedition.lcdui.Ticker": df,
        "javax.microedition.m3g.Appearance": mf,
        "javax.microedition.m3g.Background": hf,
        "javax.microedition.m3g.Camera": pf,
        "javax.microedition.m3g.Graphics3D": gf,
        "javax.microedition.m3g.Image2D": vf,
        "javax.microedition.m3g.Light": xf,
        "javax.microedition.m3g.Loader": _f,
        "javax.microedition.m3g.Material": wf,
        "javax.microedition.m3g.Mesh": yf,
        "javax.microedition.m3g.Texture2D": If,
        "javax.microedition.m3g.Transform": bf,
        "javax.microedition.m3g.TriangleStripArray": Ef,
        "javax.microedition.m3g.VertexArray": jf,
        "javax.microedition.m3g.VertexBuffer": Sf,
        "javax.microedition.m3g.World": Rf,
        "javax.microedition.media.control.MIDIControl": kf,
        "javax.microedition.media.control.MIDIControlImpl": Cf,
        "javax.microedition.media.control.VolumeControl": Tf,
        "javax.microedition.media.control.VolumeControlImpl": Af,
        "javax.microedition.media.Control": Lf,
        "javax.microedition.media.Controllable": Of,
        "javax.microedition.media.Manager": Ff,
        "javax.microedition.media.MediaException": Df,
        "javax.microedition.media.Player": Nf,
        "javax.microedition.media.PlayerImpl": Mf,
        "javax.microedition.media.PlayerListener": Bf,
        "javax.microedition.midlet.MIDlet": Vf,
        "javax.microedition.midlet.MIDletStateChangeException": Uf,
        "javax.microedition.pki.Certificate": Pf,
        "javax.microedition.pki.CertificateException": Zf,
        "javax.microedition.rms.InvalidRecordIDException": Hf,
        "javax.microedition.rms.RecordComparator": $f,
        "javax.microedition.rms.RecordEnumeration": Gf,
        "javax.microedition.rms.RecordEnumerationImpl": qf,
        "javax.microedition.rms.RecordFilter": Yf,
        "javax.microedition.rms.RecordStore": Kf,
        "javax.microedition.rms.RecordStoreException": Xf,
        "javax.microedition.rms.RecordStoreFullException": zf,
        "javax.microedition.rms.RecordStoreNotFoundException": Wf,
        "javax.microedition.rms.RecordStoreNotOpenException": Jf,
        "javax.wireless.messaging.Message": Qf,
        "javax.wireless.messaging.MessageConnection": td,
        "javax.wireless.messaging.TextMessage": ed
    };
    function id(t) {
        var e = {}, n = t.split(`
`), i;
        for (var r in n) {
            var a = n[r].split(":");
            a.length > 1 ? (i = a[0].toLowerCase(),
            e[i] = a[1].trim()) : e[i] += a[0].trim()
        }
        return e
    }
    function rd(t, e) {
        od(async()=>{
            let n = new tn(t)
              , i = new an(n,{
                useWebWorkers: !1
            });
            try {
                let r = await i.getEntries();
                await wc(r);
                let a = we("META-INF/MANIFEST.MF");
                if (!a) {
                    fn("Manifest not found");
                    return
                }
                let o = Tt(a);
                c.manifest = id(o),
                c.storageName = c.manifest["midlet-vendor"] + "/" + c.manifest["midlet-name"] + "//" + t.size + "/",
                e()
            } catch (r) {
                console.error(r);
                let a = String(r instanceof Error ? r.message : r);
                fn(a)
            }
        }
        )
    }
    function ad(t) {
        return nd[t]
    }
    function sd(t, e) {
        if (t.length === 0) {
            e();
            return
        }
        let n = 0;
        for (let i = 0; i < t.length; i++)
            me(t[i], function() {
                n++,
                n === t.length && e()
            })
    }
    var Pr = new Set;
    function me(t, e) {
        if (Pr.has(t)) {
            e(null);
            return
        }
        let n = It(t);
        if (n && (!c.statics || c.statics[t]))
            e(n);
        else {
            Pr.add(t),
            console.log("Loading " + t);
            let i = function(o) {
                yp(t, n, o),
                n.prototype.interfaces instanceof Array && (a = a.concat(n.prototype.interfaces)),
                n.prototype.require instanceof Array && (a = a.concat(n.prototype.require)),
                n.prototype.superClass && a.push(n.prototype.superClass),
                sd(a, function() {
                    Ip(n, l=>{
                        Pr.delete(t),
                        e(l)
                    }
                    )
                })
            }
              , r = t.replace(/\./g, "/") + ".class"
              , a = [];
            if (n)
                c.statics[n.prototype.className] || (c.statics[n.prototype.className] = 1,
                i());
            else {
                let o = we(r);
                if (o)
                    yc(r),
                    n = za(new le(o)),
                    i();
                else {
                    let l = ad(t);
                    if (l) {
                        let u = l.prototype;
                        u.className = t,
                        n = l,
                        i(!0)
                    } else
                        console.warn("Error loading " + t + " class."),
                        e(null)
                }
            }
        }
    }
    function cd(t, e) {
        if (e || (e = c.javaRoot),
        !t)
            return e;
        let n = t.substr(0, t.indexOf(".")) || t;
        return e[n] || (e[n] = {}),
        t.indexOf(".") > 0 ? cd(t.substr(t.indexOf(".") + 1), e[n]) : e[n]
    }
    var Zr = {};
    function It(t) {
        if (Zr[t] != null)
            return Zr[t]
    }
    function yp(t, e, n) {
        if (n) {
            let i = cd(t.substr(0, t.lastIndexOf(".")));
            i[t.substr(t.lastIndexOf(".") + 1)] = e
        }
        Zr[t] = e
    }
    function createClass(t) {
        let e = function() {
            t.construct && t.construct.apply(this, arguments)
        };
        return e.prototype = t,
        t.type = "class",
        t.initialized = !1,
        e
    }
    function G(t) {
        let e = createClass(t);
        return t.type = "interface",
        e
    }
    function Ip(t, e) {
        console.log("Initializing " + t.prototype.className);
        let n = t.prototype
          , i = n["<clinit>()V"];
        function r() {
            n.initialized = !0,
            c.statics && (c.statics[n.className] = 2)
        }
        if (i && n.initialized && c.statics[n.className] !== 2) {
            i.call(n, function() {
                e(t)
            }),
            r();
            return
        }
        if (t === c.javaRoot.java.lang.Object || n.initialized) {
            r(),
            e(t);
            return
        }
        n.superClass || (n.superClass = "java.lang.Object");
        let a = It(n.superClass);
        for (let o in a.prototype)
            n.hasOwnProperty(o) || (n[o] = a.prototype[o]);
        i ? (r(),
        i.call(n, function() {
            e(t)
        })) : (r(),
        e(t))
    }
    function od(t) {
        c.threads = [],
        c.currentThread = 0,
        c.restoreStack = [[]],
        c.kill = !1,
        c.usedMethods = {},
        c.usedByteCodes = {},
        c.javaRoot = {};
        let e = ["java.lang.String", "java.lang.Class", "java.lang.Thread", "java.lang.ClassNotFoundException", "java.lang.ClassCastException", "java.lang.ArrayIndexOutOfBoundsException", "java.lang.NegativeArraySizeException", "java.lang.ArrayObject", "java.lang.ArithmeticException", "java.lang.ArrayStoreException", "java.lang.NullPointerException"];
        me("java.lang.Object", function() {
            sd(e, t)
        })
    }
    var ld = "nokia-midlet-bg-server";
    function ud(t) {
        var e = c.manifest["midlet-" + t];
        c.allStatics[t] = {};
        var n = e.split(",")[2].trim();
        c.currentVM = t;
        var i = new c.javaRoot.java.lang.Thread(function() {
            me(n, function(r) {
                var a = new r;
                a["<init>()V"](function() {
                    a["startApp()V"]()
                })
            })
        }
        );
        setTimeout(function() {
            c.currentVM = t,
            i["start()V"]()
        }, 100)
    }
    function Hr(t) {
        rd(t, function() {
            ud(et.midlet),
            c.manifest[ld] && setTimeout(function() {
                ud(Number(c.manifest[ld]))
            }, 0)
        })
    }
    function fd() {
        let e = new Audio, n = navigator.vendor.toLowerCase(), i;
        n.indexOf("google") >= 0 || e.canPlayType && e.canPlayType("audio/ogg") ? i = "ogg" : n.indexOf("apple") >= 0 && e.canPlayType("audio/flac") ? i = "flac" : i = "mp3",
        e.src = "static/keepalive." + i,
        e.loop = !0,
        e.volume = 0;
        function r() {
            setTimeout(function() {
                e.play()
            }, 5e3)
        }
        e.onpaste = r,
        e.onended = r,
        e.onerror = r,
        document.body.addEventListener("click", function() {
            e.play()
        })
    }
    var Ie = {
        up: -1,
        down: -2,
        left: -3,
        right: -4,
        ok: -5,
        choice: -6,
        back: -7,
        num1: 49,
        num2: 50,
        num3: 51,
        num4: 52,
        num5: 53,
        num6: 54,
        num7: 55,
        num8: 56,
        num9: 57,
        num0: 48,
        star: 42,
        pound: 35
    }
      , ut = [];
    ut[38] = -1;
    ut[37] = -3;
    ut[39] = -4;
    ut[40] = -2;
    ut[32] = -5;
    ut[48] = 48;
    ut[49] = 49;
    ut[50] = 50;
    ut[51] = 51;
    ut[52] = 52;
    ut[53] = 53;
    ut[54] = 54;
    ut[55] = 55;
    ut[56] = 56;
    ut[57] = 57;
    ut[88] = -7;
    ut[90] = -6;
    document.onkeydown = function(t) {
        ut[t.which] && On(ut[t.which])
    }
    ;
    document.onkeyup = function(t) {
        ut[t.which] && Me(ut[t.which])
    }
    ;
    window.addEventListener("load", function() {
        ea(),
        et.keepalive !== "none" && fd(),
        document.getElementById("alert").style.display = "none",
        document.getElementById("alert").addEventListener("click", function() {
            document.getElementById("alert").style.display = "none"
        }),
        window.addEventListener("keyup", function() {
            Me()
        });
        let t = document.getElementById("keypad");
        for (let n in Ie) {
            let i = Ie[n]
              , r = t.querySelector("#" + n);
            mn(r, i)
        }
        t.classList.add(et.keypad);
        let e = document.getElementById("screen");
        if (et.src) {
            let n = document.createElement("div");
            n.innerText = "JAR Loading...";
            let i = n.style;
            i.textAlign = "center",
            e.appendChild(n);
            let r = new XMLHttpRequest;
            r.onreadystatechange = function() {
                if (r.readyState === 4) {
                    var a, o = window.BlobBuilder || window.WebKitBlobBuilder || null;
                    o ? (o = new o,
                    o.append(r.response),
                    a = o.getBlob()) : a = new Blob([r.response]),
                    Hr(a)
                }
            }
            ,
            r.open("GET", et.src),
            r.responseType = "arraybuffer",
            r.send()
        } else if (et.selector) {
            let n = document.createElement("div");
            n.innerText = "Select JAR file:",
            n.style.textAlign = "center";
            let i = document.createElement("img");
            i.src = "static/arrow_up.png",
            i.width = 128,
            i.height = 128;
            let r = i.style;
            r.display = "block",
            r.margin = "0 auto",
            i.addEventListener("click", function() {
                ta(function(a) {
                    a.length && Hr(a[0])
                })
            }),
            e.appendChild(n),
            e.appendChild(i)
        }
    });
    function Ei(t) {
        var e = document.getElementById("screen")
    }
    function fn(t) {
        document.getElementById("alert").style.display = "",
        document.querySelector("#alert .message").innerHTML = t
    }
}
)();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

crc-32/crc32.js:
  (*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com *)

long/index.js:
  (**
   * @license
   * Copyright 2009 The Closure Library Authors
   * Copyright 2020 Daniel Wirtz / The long.js Authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
