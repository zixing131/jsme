js2me.createClass({
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