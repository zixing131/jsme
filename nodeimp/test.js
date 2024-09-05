var JVM = require("node-jvm");
var jvm = new JVM();
jvm.setLogLevel(0);
//jvm.loadJarFile("./resources.jar");
//jvm.loadJarFile("./rt.jar");
jvm.loadJarFile("./classes-raw.jar"); 
//jvm.loadJarFile("freej2me.jar"); 
var entryPointClassName = jvm.loadJarFile("./jars/test.jar");
//jvm.loadJarFile("./rt.jar");

//var entryPointClassName = jvm.loadJarFile("./freej2me.jar");
console.log("entryPointClassName "+entryPointClassName); 
entryPointClassName=entryPointClassName.replaceAll('.','/')
jvm.setEntryPointClassName(entryPointClassName);
jvm.setEntryPointMethodName("startApp");
 
jvm.on("exit", function(code) {
    process.exit(code);
});
jvm.run();
