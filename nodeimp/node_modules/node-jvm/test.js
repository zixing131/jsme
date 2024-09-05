var JVM = require("node-jvm");
var jvm = new JVM();
jvm.setLogLevel(8);
var entryPointClassName = jvm.loadJarFile("./freej2me.jar");
jvm.setEntryPointClassName(entryPointClassName);
jvm.on("exit", function(code) {
    process.exit(code);
});
jvm.run([15]);
