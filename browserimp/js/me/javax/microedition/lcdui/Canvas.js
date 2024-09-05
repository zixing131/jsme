js2me.createClass({
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