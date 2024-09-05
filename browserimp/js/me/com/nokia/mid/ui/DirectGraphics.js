js2me.createClass({
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

