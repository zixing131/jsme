js2me.createClass({
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

