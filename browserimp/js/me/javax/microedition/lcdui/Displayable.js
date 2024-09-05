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

function On(t) {
	Qr("keypress", t)
}
function Me(t) {
	Qr("keyreleased", t)
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

js2me.createClass({	
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
