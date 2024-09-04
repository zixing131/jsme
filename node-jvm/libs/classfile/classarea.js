/*
 node-jvm
 Copyright (c) 2013 Yaroslav Gaponov <yaroslav.gaponov@gmail.com>
*/

var util = require("util"),
    Reader = require("../util/reader.js"),
    TAGS = require("./tags.js"),
    ACCESS_FLAGS = require("./accessflags.js"),
    ATTRIBUTE_TYPES = require("./attributetypes.js");


var ClassArea = module.exports = function(classBytes) {
    if (this instanceof ClassArea) {
        this.classImage = getClassImage(classBytes);
    } else {
        return new ClassArea(classBytes);
    }
}

ClassArea.prototype.getClassName = function() {    
    return this.classImage.constant_pool[this.classImage.constant_pool[this.classImage.this_class].name_index].bytes;    
}

ClassArea.prototype.getSuperClassName = function() {    
    try{
        var spclass=this.classImage.constant_pool[this.classImage.constant_pool[this.classImage.super_class].name_index].bytes;
        console.log("getSuperClassName:"+spclass);  
        return spclass;
    }catch(err)
    {
        //zixing added
        //LOG.error("getSuperClassName"+err);
        return "java/lang/Object";
    }
}

ClassArea.prototype.getAccessFlags = function() {
    return this.classImage.access_flags;    
}

ClassArea.prototype.getConstantPool = function() {
    return this.classImage.constant_pool;
}

ClassArea.prototype.getFields = function() {
    return this.classImage.fields;
}

ClassArea.prototype.getMethods = function() {
    return this.classImage.methods;
}

ClassArea.prototype.getClasses = function() {
    var self = this;
    var classes = [];
    this.classImage.attributes.forEach(function(a) {
        if(!a.info){
            return;
        }
        if (a.info.type === ATTRIBUTE_TYPES.InnerClasses) {
            a.info.classes.forEach(function(c) { 
              //  try{
                classes.push(self.classImage.constant_pool[self.classImage.constant_pool[c.inner_class_info_index].name_index].bytes);
                if(self.classImage.constant_pool[c.outer_class_info_index])
               { 
                    classes.push(self.classImage.constant_pool[self.classImage.constant_pool[c.outer_class_info_index].name_index].bytes);
                }else{ 
                    classes.push(null);
                    //classes.push(self.classImage.constant_pool[self.classImage.constant_pool[c.inner_class_info_index].name_index].bytes);
                }
                // }catch(err){
                //     LOG.error("getClasses error :"+err);
                // }
            });
        }
    });
    return classes;
}

// write by ai(chatgpt-4o)
var readElementValue = function (reader) {
    var element_value = {};
    element_value.tag = reader.read8(); // Read the tag item

    switch (element_value.tag) {
        case 'B': // byte
        case 'C': // char
        case 'D': // double
        case 'F': // float
        case 'I': // int
        case 'J': // long
        case 'S': // short
        case 'Z': // boolean
        case 's': // String
            element_value.const_value_index = reader.read16();
            break;

        case 'e': // Enum type
            element_value.enum_const_value = {
                type_name_index: reader.read16(),
                const_name_index: reader.read16()
            };
            break;

        case 'c': // Class
            element_value.class_info_index = reader.read16();
            break;

        case '@': // Annotation type
            element_value.annotation_value = readAnnotation(reader);
            break;

        case '[': // Array type
            element_value.array_value = {};
            element_value.array_value.num_values = reader.read16();
            element_value.array_value.values = [];
            for (var i = 0; i < element_value.array_value.num_values; i++) {
                element_value.array_value.values.push(readElementValue(reader));
            }
            break;

        default:
            throw new Error("Unknown tag: " + element_value.tag);
    }

    return element_value;
}

var getClassImage = function(classBytes) {

    var classImage = {};
        
    var getAttributes = function(attribute_name_index, bytes) {
            
        var reader = new Reader.create(bytes);
        var attribute = { attribute_name_index: attribute_name_index };
    
    
        var item = classImage.constant_pool[attribute_name_index];

        if(!item){
            return;
        }
        
        switch(item.tag) {
        
            case TAGS.CONSTANT_Long:
            case TAGS.CONSTANT_Float:
            case TAGS.CONSTANT_Double:
            case TAGS.CONSTANT_Integer:
            case TAGS.CONSTANT_String:
                attribute.type = ATTRIBUTE_TYPES.ConstantValue;
                attribute.constantvalue_index = reader.read16();
                return attribute;      

                
            case TAGS.CONSTANT_Utf8:
                
                switch(item.bytes) {
                    
                    case ATTRIBUTE_TYPES.Code:
                        attribute.type = ATTRIBUTE_TYPES.Code;
                        attribute.max_stack = reader.read16();
                        attribute.max_locals = reader.read16();
                        var code_length = reader.read32();
                        attribute.code = reader.readBytes(code_length);
                        
                        var exception_table_length = reader.read16();        
                        attribute.exception_table = [];
                        for(var i=0; i<exception_table_length; i++) {
                            var start_pc = reader.read16();
                            var end_pc = reader.read16();
                            var handler_pc= reader.read16();
                            var catch_type = reader.read16();
                            attribute.exception_table.push({start_pc:start_pc,end_pc:end_pc,handler_pc:handler_pc,catch_type:catch_type });
                        }

                        var attributes_count = reader.read16();        
                        attribute.attributes = [];
                        for(var i=0; i<attributes_count; i++) {
                            var attribute_name_index = reader.read16();
                            var attribute_length = reader.read32();
                            var info = reader.readBytes(attribute_length);
                            attribute.attributes.push({ attribute_name_index: attribute_name_index, attribute_length: attribute_length, info: info });
                        }
                        return attribute;
                        
                    case ATTRIBUTE_TYPES.SourceFile:
                        attribute.type = ATTRIBUTE_TYPES.SourceFile;
                        attribute.sourcefile_index = reader.read16();
                        return attribute;
                    
                    case ATTRIBUTE_TYPES.Exceptions:
                        attribute.type = ATTRIBUTE_TYPES.Exceptions;
                        var number_of_exceptions = reader.read16();
                        attribute.exception_index_table = [];
                        for(var i=0; i<number_of_exceptions; i++) {
                            attribute.exception_index_table.push(reader.read16());
                        }
                        return attribute;
                    
                    case ATTRIBUTE_TYPES.InnerClasses:
                        attribute.type = ATTRIBUTE_TYPES.InnerClasses;

                        var number_of_classes = reader.read16();
                        attribute.classes = [];
                        for(var i=0; i<number_of_classes; i++) {
                            var inner = {};
                            inner.inner_class_info_index = reader.read16();
                            inner.outer_class_info_index = reader.read16();
                            inner.inner_name_index = reader.read16();
                            inner.inner_class_access_flags = reader.read16();
                            attribute.classes.push(inner);
                        }
                        return attribute;

                        // try {
                        //     attribute.classes = [];
                        //     // 读取 number_of_classes
                        //     const number_of_classes = reader.read16();
                        //     attribute.number_of_classes = number_of_classes;
                    
                        //     // 读取每一个 class 的信息
                        //     for (let i = 0; i < number_of_classes; i++) {
                        //         const inner = {
                        //             inner_class_info_index: reader.read16(),
                        //             outer_class_info_index: reader.read16(),
                        //             inner_name_index: reader.read16(),
                        //             inner_class_access_flags: reader.read16()
                        //         };
                        //         attribute.classes.push(inner);
                        //     }
                        // } catch (e) {
                        //     console.error("Error while reading InnerClasses attribute:", e);
                        //     // 处理错误，例如设置 attribute 为 null 或一些默认值
                        //     //return null;
                        // } 
                        // return attribute;

                    //added by zixing
                    case ATTRIBUTE_TYPES.EnclosingMethod:
                        // EnclosingMethod_attribute {
                        //     u2 attribute_name_index;
                        //     u4 attribute_length;
                        //     u2 class_index;
                        //     u2 method_index;
                        // }
                        attribute.type = ATTRIBUTE_TYPES.EnclosingMethod;
                        // var attribute_name_index = reader.read16();
                        // var attribute_length = reader.read32();
                        var class_index = reader.read16();
                        var method_index = reader.read16();
                        // attribute.attribute_name_index=attribute_name_index;
                        // attribute.attribute_length=attribute_length;
                        attribute.class_index=class_index;
                        attribute.method_index=method_index; 
                        return attribute;
                    case ATTRIBUTE_TYPES.Signature:
                        // Signature_attribute {
                        //     u2 attribute_name_index;
                        //     u4 attribute_length;
                        //     u2 signature_index;
                        // }
                        attribute.type = ATTRIBUTE_TYPES.Signature;
                        attribute.signature_index= reader.read16();
                        return attribute;

                    case  ATTRIBUTE_TYPES.Synthetic:
                        attribute.type = ATTRIBUTE_TYPES.Synthetic;
                        return attribute;
                    case  ATTRIBUTE_TYPES.Deprecated:
                        attribute.type = ATTRIBUTE_TYPES.Deprecated;
                        return attribute; 
                    case ATTRIBUTE_TYPES.LineNumberTable:

                        attribute.type = ATTRIBUTE_TYPES.LineNumberTable;
                        // LineNumberTable_attribute {
                        //     u2 attribute_name_index;
                        //     u4 attribute_length;
                        //     u2 line_number_table_length;
                        //     {   u2 start_pc;
                        //         u2 line_number;	
                        //     } line_number_table[line_number_table_length];
                        // }
                        var line_number_table_length = reader.read16();
                        attribute.line_number_table = [];
                        for(var i=0; i<line_number_table_length; i++) {
                            var start_pc = reader.read16();
                            var line_number = reader.read16();
                            attribute.line_number_table.push({start_pc, line_number});
                        }

                        return attribute; 
 
                    case ATTRIBUTE_TYPES.RuntimeVisibleAnnotations:
                        var num_annotations = reader.read16();
                        attribute.type = ATTRIBUTE_TYPES.RuntimeVisibleAnnotations;
                        attribute.annotations = [];
                        for(var i=0; i<num_annotations; i++) {
                            var annotation = {};
                            annotation.type_index = reader.read16();
                            annotation.num_element_value_pairs = reader.read16();
                            annotation.element_value_pairs = [];
                            for(var j=0; j<annotation.num_element_value_pairs; j++) {
                                var element_name_index = reader.read16();
                                var value = readElementValue(reader);
                                annotation.element_value_pairs.push({element_name_index,value});
                            }
                         }  
                        return attribute; 
                    default: 
                        console.warn(`Warning: Attribute type ${JSON.stringify(item)} is not supported yet.`);
                        reader.readBytes(reader.bytes.length);  // 跳过尚未实现的属性
                        return attribute;
                        throw new Error("This attribute type is not supported yet. [" + JSON.stringify(item) + "]");            
                }
                
            default:
                throw new Error("This attribute type is not supported yet. [" + JSON.stringify(item) + "]");            
        }
    };
    
    
    var reader = Reader.create(classBytes);
    classImage.magic = reader.read32().toString(16);

    classImage.version = {
        minor_version: reader.read16(),
        major_version: reader.read16()
    };
        
    classImage.constant_pool = [ null ];
    var constant_pool_count = reader.read16();
    for(var i=1; i<constant_pool_count; i++) {        
        var tag =  reader.read8();
        switch(tag) {
            case TAGS.CONSTANT_Class:
                var name_index = reader.read16();
                classImage.constant_pool.push( { tag: tag, name_index: name_index } );
                break;
            case TAGS.CONSTANT_Utf8:
                var length = reader.read16();
                var bytes = reader.readString(length);
                classImage.constant_pool.push( { tag: tag, bytes: bytes } );
                break;
            case TAGS.CONSTANT_NameAndType:
                var name_index = reader.read16();
                var signature_index = reader.read16();
                classImage.constant_pool.push( { tag: tag, name_index: name_index,  signature_index: signature_index } );                
                break;
            case TAGS.CONSTANT_String:
                var string_index = reader.read16();
                classImage.constant_pool.push( { tag: tag, string_index: string_index } );                                                
                break;
                
            case TAGS.CONSTANT_Float:  // float ??? 
            case TAGS.CONSTANT_Integer:
                var bytes = reader.read32();
                classImage.constant_pool.push( {  tag: tag, bytes: bytes } );                                                
                break; 
            case TAGS.CONSTANT_Double:
            case TAGS.CONSTANT_Long:
                var bytes = Buffer.alloc(8);
                for (var b=0; b<8; b++) {
                    bytes[b] = reader.read8();
                }
                classImage.constant_pool.push( {  tag: tag, bytes: bytes } );
                classImage.constant_pool.push( null ); i++;
                break;
            case TAGS.CONSTANT_Fieldref:
            case TAGS.CONSTANT_Methodref:
            case TAGS.CONSTANT_InterfaceMethodref:
                var class_index = reader.read16();
                var name_and_type_index = reader.read16();
                classImage.constant_pool.push( {  tag: tag, class_index: class_index, name_and_type_index:name_and_type_index } );                                                
                break;
            default:                
                //throw new Error(util.format("tag %s is not supported.", tag));
                LOG.error(util.format("tag %s is not supported.", tag));
                break;
        }
    }
        
    classImage.access_flags = reader.read16();
    
    classImage.this_class = reader.read16();
    
    classImage.super_class = reader.read16();

    
    classImage.interfaces = [];
    var interfaces_count = reader.read16();
    for(var i=0; i<interfaces_count; i++) {
        var index = reader.read16();
        if (index != 0){
            classImage.interfaces.push(index);
        }
    }
        
    classImage.fields = [];
    var fields_count = reader.read16();
    for(var i=0; i<fields_count; i++) {
        var access_flags = reader.read16();
        var name_index = reader.read16();
        var descriptor_index = reader.read16();
        var attributes_count = reader.read16();
        var field_info = {
            access_flags: access_flags,
            name_index: name_index,
            descriptor_index: descriptor_index,
            attributes_count: attributes_count,
            attributes: []
        }
        for(var j=0; j <attributes_count; j++) {
            var attribute_name_index = reader.read16();
            var attribute_length = reader.read32();
            var constantvalue_index = reader.read16();            
            var attribute = {
                attribute_name_index: attribute_name_index,
                attribute_length: attribute_length,
                constantvalue_index: constantvalue_index
            }            
            field_info.attributes.push(attribute);
        }
        classImage.fields.push(field_info);
    }    
    
    
    classImage.methods = [];
    var methods_count = reader.read16();
    for(var i=0; i<methods_count; i++) {
        var access_flags = reader.read16();
        var name_index = reader.read16();
        var signature_index = reader.read16();
        var attributes_count = reader.read16();
        var method_info  = {
            access_flags: access_flags,
            name_index: name_index,
            signature_index: signature_index,
            attributes_count: attributes_count,
            attributes: []
        }        
        for(var j=0; j <attributes_count; j++) {
            var attribute_name_index = reader.read16();
            var attribute_length = reader.read32();
            var info = getAttributes(attribute_name_index, reader.readBytes(attribute_length));
            var attribute = {
                attribute_name_index: attribute_name_index,
                attribute_length: attribute_length,
                info: info
            }
            method_info.attributes.push(attribute);
        }
                
        classImage.methods.push(method_info);
    }
    
    
    classImage.attributes = [];
    var attributes_count = reader.read16();
    for(var i=0; i<attributes_count; i++) {
            var attribute_name_index = reader.read16();
            var attribute_length = reader.read32();
            var info = getAttributes(attribute_name_index, reader.readBytes(attribute_length));
            var attribute = {
                attribute_name_index: attribute_name_index,
                attribute_length: attribute_length,
                info: info
            }
            classImage.attributes.push(attribute);        
    }
    
    return classImage;
 
};

