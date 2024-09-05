let c=window;
js2me.createClass({
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
