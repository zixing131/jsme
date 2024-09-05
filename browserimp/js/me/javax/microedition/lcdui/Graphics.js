js2me.createClass({
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
