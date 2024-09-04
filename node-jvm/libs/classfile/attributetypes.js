/*
 node-jvm
 Copyright (c) 2013 Yaroslav Gaponov <yaroslav.gaponov@gmail.com>
*/

var ATTRIBUTE_TYPES = module.exports = {
    ConstantValue:  "ConstantValue",
    Code: "Code",
    Exceptions: "Exceptions",
    EnclosingMethod: "EnclosingMethod",  //https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.7.7
    InnerClasses: "InnerClasses",
    Synthetic: "Synthetic",
    SourceFile: "SourceFile",
    LineNumberTable: "LineNumberTable", //https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.7.12
    LocalVariableTable: "LocalVariableTable",
    Deprecated: "Deprecated",
    Signature:"Signature",
    RuntimeVisibleAnnotations: "RuntimeVisibleAnnotations"//https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.7.16
};
