(function () {
	/**
	 * Load multiple classes.
	 * @param {Array} classes List of class names.
	 * @param {function} callback Call after loading all of the classes.
	 */
	function loadClasses(classes, callback) {
		var threadId = js2me.currentThread;
		if (classes.length === 0) {
			callback();
			return;
		}
		var className = classes.pop();
		js2me.loadClass(className, function () {
			js2me.currentThread = threadId;
			loadClasses(classes, callback);
		}, function () {
			js2me.currentThread = threadId;
			loadClasses(classes, callback);
		})
		/*var remain = classes.length;
		function done() {
			remain--;
			if (remain === 0) {
				js2me.currentThread = threadId;
				callback()
			}
		}
		for (var i = 0; i < classes.length; i++) {
			js2me.loadClass(classes[i], done, done);
		}*/
	}
	var classLock = {};
	var blacklist = {};
	/**
	 * Loads a class (native or Javaish).
	 * @param {string} className Name of the class.
	 * @param {function(class)} callback Call after loading the class.
	 */
	js2me.loadClass = function (className, callback, errorCallback) {
		if (blacklist[className]) {
			errorCallback();
			return;
		}
		var error = null;
		var threadId = js2me.currentThread;
		
		if (classLock[className] && threadId !== classLock[className].threadId) {
			js2me.isThreadSuspended = true;
			classLock[className].waiting.push({
				threadId: threadId,
				successCallback: callback,
				errorCallback: errorCallback
			});
			return;
		}
		
		var classObj = js2me.findClass(className);
		if (classObj && (!js2me.statics || js2me.statics[className])) {
			callback(classObj);
		} else {
			console.log('Loading ' + className);
			classLock[className] = {
				threadId: threadId,
				waiting: []
			};
			
			function done(classObj, isError) {
				if (classLock[className]) {
					for (var i in classLock[className].waiting) {
						var lock = classLock[className].waiting[i];
						(function (lock) {
							js2me.restoreStack[lock.threadId].unshift(function () {
								js2me.loadClass(className, lock.successCallback, lock.errorCallback);
							});
							setTimeout(function () {
								js2me.restoreThread(lock.threadId);
							}, 0);
						})(lock);
					}
					delete classLock[className];
				}
				js2me.switchVM(threadId);
				if (classObj) {
					callback(classObj);
				} else {
					errorCallback();
				}
			}
			
			function loadDependecies() {
				js2me.currentThread = threadId;
				var calssName = className.substr(className.lastIndexOf('.') + 1);
				var samePackage = package[calssName];
				package[calssName] = classObj;
				package[calssName.replace('$','')] = package[calssName];
				// Merge package with the same name.
				if (samePackage && typeof samePackage !== 'function') {
					for (var key in samePackage) {
						if (Object.hasOwnProperty.call(samePackage, key) && !(key in classObj) && !(key in classObj.prototype)) {
							classObj[key] = samePackage[key];
						}
					}
				}
				if (classObj.prototype.interfaces instanceof Array) {
					require = require.concat(classObj.prototype.interfaces);
				}
				if (classObj.prototype.require instanceof Array) {
					require = require.concat(classObj.prototype.require);
					//delete classObj.prototype.require;
				}
				if (classObj.prototype.superClass) {
					require.push(classObj.prototype.superClass);
				}
				loadClasses(require, function () {
					js2me.restoreStack[threadId].unshift(function () {
						initializeClass(classObj, done);
					});
					js2me.restoreThread(threadId);
				});
			}
			
			var resourceName = className.replace('javaRoot.$', '').replace(/\.\$/g, '/') + '.class';
			var package = js2me.findPackage(className.substr(0, className.lastIndexOf('.')));
			js2me.isThreadSuspended = true;
			var require = [];
			if (!classObj) {
				if (js2me.resources[resourceName]) {
					js2me.loadResource(resourceName, function (data) {
						classObj = js2me.convertClass(new js2me.BufferStream(data));
						// lesser memory usage
						delete js2me.resources[resourceName];
						loadDependecies();
					});
				} else {
					var classPath = className.replace('javaRoot', js2me.libraryPath).replace(/\$/g, '').replace(/\./g, '/') + '.js';
					js2me.loadScript(classPath, function () {
						if (js2me.classBucket == null) {
							throw new javaRoot.$java.$lang.$ClassNotFoundException(className + ' not found');
						}
						var proto = js2me.classBucket.prototype;
						proto.className = className;
						classObj = js2me.classBucket;
						
						js2me.classBucket = null;
						loadDependecies();
					}, function () {
						console.error('Error loading ' + className + ' class.');
						blacklist[className] = true;
						done();
					});
				}
			} else {
				if (!js2me.statics[classObj.prototype.className]) {
					js2me.statics[classObj.prototype.className] = 1;
					loadDependecies();
				} else {
					done();
				}
			}
			
			
		}
		if (error) {
			throw error;
		}
	}
	/**
	 * Finds a package by its name.
	 * @param {string} path Package name.
	 * @param {object} [current=window] Entry point to search
	 * @return {object} Package object.
	 */
	js2me.findPackage = function (path, current) {
		if (!current) {
			current = window;
		}
		if (!path) {
			return current;
		}
		var name = path.substr(0, path.indexOf('.')) || path;
		if (!current[name]) {
			current[name] = {};
			current[name.replace('$','')] = current[name];
		}
		if (path.indexOf('.') > 0) {
			return js2me.findPackage(path.substr(path.indexOf('.') + 1), current[name]);
		} else {
			return current[name];
		}
	};
	var classCache = {};
	/**
	 * Finds a class by its full name.
	 * @param {string} path Class name.
	 * @return {constructor} Class constructor.
	 */
	js2me.findClass = function (path) {
		if (classCache[path] != null) {
			return classCache[path];
		}
		var package = this.findPackage(path.substr(0, path.lastIndexOf('.')));
		var classObj = package[path.substr(path.lastIndexOf('.') + 1)];
		/*if (!classObj) {
			throw new javaRoot.$java.$lang.$ClassNotFoundException(path);
		}
		if (!classObj) {
			console.log("ClassNotFoundException "+path)
		}
		*/ 
		// Ignoring package with the same name.
		if (classObj && typeof classObj === 'function') {
			classCache[path] = classObj;
			classCache[path.replaceAll('$','')] = classCache[path];
			return classObj;
		}
	};
	/**
	 * Finds classes which implement given class (including that class).
	 * @param {string} path Class name.
	 * @return {[constructor]} Class constructors.
	 */
	js2me.findSubclasses = function (path) {
		var result = [];		
		iterateClasses(javaRoot, 'javaRoot', function (classObj) {
			if (classObj instanceof Function && classObj.prototype.isImplement(path)) {
				result.push(classObj);
			}
		});
		return result;
	};

	function escapeName1(name) {
		if (name === '<init>') return '_init';
		if (name === '<clinit>') return '_clinit';
		return '$' + name;
	}
	
	function escapeType1(typeName) {
		return typeName.replace(/\./g, '_').replace(/\$/g, '$').replace(';)','$');
	}
	function enName(name) { 
		if(name.startsWith('javaRoot.')){
			return name;
		}
		var name = 'javaRoot.$'+name.replaceAll('.','.$');

		console.log("enName " + name);
		return name;
	}

	function enFuncName(name) {  
		if(name.startsWith('$'))
		{
			return name;
		}
		// 提取方法名和参数、返回类型部分
		const methodNameEnd = name.indexOf('(');
		const methodName = name.substring(0, methodNameEnd);
		const argsAndReturnTypeIndex = name.indexOf(')');
		const returnType = name.substring(argsAndReturnTypeIndex);
		const argumentsTypes = name.substring(methodNameEnd, argsAndReturnTypeIndex);
	
		// 使用 escapeName 和 escapeType 进行编码
		let escapedName = escapeName1(methodName);
		
		//console.log("enFuncName " + escapedName,argumentsTypes,returnType);
		// 组合参数类型和返回类型 
		escapedName += escapeType1(argumentsTypes);

		escapedName += escapeType1(returnType);
		escapedName = escapedName.replace('(','$');
		escapedName = escapedName.replace(')','$');
		escapedName = escapedName.replaceAll('/','_');
		escapedName = escapedName.replaceAll(';','_');
		
		
	
		console.log("enFuncName " + escapedName);
		return escapedName;
	}
	function unescapeName(escapedName) {
		// Check if the name starts with '$' and remove it
		if (escapedName.startsWith('$')) {
			escapedName = escapedName.slice(1);
		}
		
		// Reverse the specific transformations
		if (escapedName.startsWith('_init')) {
			escapedName = escapedName.replace('_init','<init>');
		} else if (escapedName.startsWith('_clinit')) {
			escapedName = escapedName.replace('_clinit','<clinit>');
		} 
		return escapedName;
	}

	function unescapeType(escapedTypeName) {
		escapedTypeName = escapedTypeName.replace(/_/g, '.')//.replace(/\$/g, ''); 
		return escapedTypeName;
	}

	function deName(name,methodType)
	{
		console.log("deName enter "+name);   
		name = unescapeName(name); 
		var argumentsTypes=''
		var returnType = ''
		if(!methodType)
		{
			var index1=name.indexOf('$');
			var index2= name.lastIndexOf('$')
			if(index1==index2){
				argumentsTypes=''
				returnType='' 
				name = name.replaceAll('$','');
				console.log("deName leave "+name);  
				return  name ;
			}else{
				argumentsTypes=name.substring(index1+1,index2).split('$');
				returnType = name.substring(name.lastIndexOf('$')+1);
			}  
		}else
		{ 
			argumentsTypes=methodType.argumentsTypes;
			returnType = methodType.returnType;
		}
		
		//<init>$Ljava.lang.String.$V
		//<init>(Ljava/lang/String;)V
		name = name.split('$')[0];

		name+='('
		for(var i=0;i<argumentsTypes.length;i++){
			name+=argumentsTypes[i].replaceAll('_','.').replaceAll('java.lang.String.','java.lang.String;');
		}
		name+=')';
		name+=returnType;
		console.log("deName  leave "+name);  
		return name;
	}

	// 创建一个代理对象
	const handler = {
		// 拦截属性获取
		get: function(target, property, receiver) {
			//console.log(`Getting property "${property}"`);
			var ret  = Reflect.get(target, property, receiver);
			if(ret!=null){
				return ret;
			} 
				property=enFuncName(property); 
				var ret  =  Reflect.get(target, property, receiver);
				if(ret!=null){
					return ret;
				} 
				property=deName(property); 
				var ret  =  Reflect.get(target, property, receiver); 
				if(ret!=null){
					return ret;
				} 
		},
		// 拦截属性设置
		set: function(target, property, value, receiver) {
			//console.log(`Setting property "${property}" to "${value}"`);
			// 可以在这里进行自定义逻辑，例如修改值
			target[property] = value;
			return true; // 表示设置成功
		}
	}; 

	/**
	 * Creates a constructor from given prototype and put into class bucket (i. e. result of executing current js file).
	 * @param {object} proto Object which is used as prototype.
	 */
	js2me.createClass = function (protoold) {
 
		// 创建代理
		const proto = new Proxy(protoold, handler); 
		var classObj = function () {
			if (proto.construct) {
				proto.construct.apply(this, arguments);
			}
		};
		if(proto.superClass){
			proto.superClass = enName(proto.superClass);
		}
		if(proto.require && proto.require.length>0){
			for (let index = 0; index < proto.require.length; index++) {
				const element = proto.require[index];
				if(element){
					proto.require[index]= enName(element);
				}
			}
		}
		classObj.prototype = proto;
		proto.type = 'class';
		proto.initialized = false;
		js2me.classBucket = classObj;
	};
	/**
	 * Same as createClass but also change type into "interface".
	 * @param {object} proto Object which is used as prototype.
	 */
	js2me.createInterface = function (proto) {
		js2me.createClass(proto);
		proto.type = 'interface';
	};
	/**
	 * Iterates over some classes and packages and call a given function for each.
	 * @param {object} obj Entry point for iteration (use javaRoot if you want to iterate over whole space).
	 * @param {string} name Global name of entry point.
	 * @param {function(obj, name)} action Function to be executed for each found class and package.
	 */
	function iterateClasses(obj, name, action) {
		action(obj, name);
		for (var i in obj) {
			if (i[0] == '$') {
				iterateClasses(obj[i], name + '.' + i, action);
			}
		}
	};
	/**
	 * Initializes given class.
	 * @param {constructor} classObj Class constructor.
	 * @param {function(class)} callback Function to execute when class is ready to use.
	 */
	function initializeClass(classObj, callback) {
		console.log('Initializing ' + classObj.prototype.className);
		
		function markAsInitialized() {
			classObj.prototype.initialized = true;
			if (js2me.statics) {
				js2me.statics[classObj.prototype.className] = 2;
			}
		}
		
		if (classObj.prototype._clinit$$V && classObj.prototype.initialized && js2me.statics[classObj.prototype.className] !== 2) {
			classObj.prototype._clinit$$V(function () {
				markAsInitialized()
				callback(classObj);
			});
			return;
		}
		
		if (classObj === javaRoot.$java.$lang.$Object || classObj.prototype.initialized) {
			markAsInitialized()
			callback(classObj);
			return;
		}
		
		if (!classObj.prototype.superClass) {
			classObj.prototype.superClass = 'javaRoot.$java.$lang.$Object';
		}
		var superClass = js2me.findClass(classObj.prototype.superClass);
		//classObj.prototype.__proto__ = superClass.prototype;
		for (var i in superClass.prototype) {
			if (!classObj.prototype.hasOwnProperty(i)) {
				classObj.prototype[i] = superClass.prototype[i];
			}
		}
		
		if (classObj.prototype._clinit$$V) {
			markAsInitialized()
			classObj.prototype._clinit$$V(function () {
				callback(classObj);
			});
		} else {
			markAsInitialized()
			callback(classObj);
		}
	};
	
	/**
	 * Check if all used methods are implemented. Quite useless with lazy loading...
	 */
	js2me.checkMethods = function () {
		for (var methodPath in js2me.usedMethods) {
			// yeah, yeah, I know...
			var ref = eval(methodPath.replace('->', '.prototype.'));
			if (ref == null) {
				console.log('Method not found: ' + methodPath);
			}
		}
	};
	
	/**
	 * Prepares a JVM to usage. Basicaly loads some basic classes and sets initial state.
	 * @param {function} callback Function to execute when machine is ready.
	 */
	js2me.setupJVM = function (callback) {
		js2me.resources = {};
		js2me.threads = [];
		js2me.currentThread = 0;
		js2me.restoreStack = [[]];
		js2me.kill = false;
		js2me.usedMethods = {};
		js2me.usedByteCodes = {};
		javaRoot = {};
		var standardClasses = [
			'javaRoot.$java.$lang.$String',
			'javaRoot.$java.$lang.$Class',
			'javaRoot.$java.$lang.$Thread',
			'javaRoot.$java.$lang.$ClassNotFoundException',
			'javaRoot.$java.$lang.$ClassCastException',
			'javaRoot.$java.$lang.$ArrayIndexOutOfBoundsException',
			'javaRoot.$java.$lang.$NegativeArraySizeException',
			'javaRoot.$java.$lang.$ArrayObject',
			'javaRoot.$java.$lang.$ArithmeticException',
			'javaRoot.$java.$lang.$ArrayStoreException',
			'javaRoot.$java.$lang.$NullPointerException'
		];
		js2me.loadClass('javaRoot.$java.$lang.$Object', function () {
			loadClasses(standardClasses, callback);
		});
	};
})();
