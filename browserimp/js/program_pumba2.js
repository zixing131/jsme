"use strict";
js2me.generateProgram = function (t) {
	let c=js2me;
	let It=js2me.findClass;
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
			js2me.loadClass(s, function(k) {
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
}; 
// what I have done...
