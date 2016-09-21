webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// The browser platform with a compiler
	var platform_browser_dynamic_1 = __webpack_require__(1);
	// The app module
	var app_module_1 = __webpack_require__(338);
	// Compile and launch the module
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(203);
	//import { CommonModule }           from "@angular/common";
	var http_1 = __webpack_require__(339);
	//import { FormsModule }            from "@angular/forms";
	/* App Providers */
	var app_providers_1 = __webpack_require__(361);
	/* App Root */
	var app_component_1 = __webpack_require__(374);
	/* Feature Modules */
	var home_module_1 = __webpack_require__(437);
	var notes_module_1 = __webpack_require__(444);
	var contacts_module_1 = __webpack_require__(499);
	/* Header features */
	var user_info_component_1 = __webpack_require__(514);
	var head_container_component_1 = __webpack_require__(515);
	var app_routing_1 = __webpack_require__(516);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                //CommonModule,
	                http_1.HttpModule,
	                //FormsModule,
	                home_module_1.HomeModule,
	                notes_module_1.NotesModule,
	                contacts_module_1.ContactsModule,
	                app_routing_1.routing
	            ],
	            providers: [
	                app_providers_1.APP_PROVIDERS
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                user_info_component_1.UserInfoComponent,
	                head_container_component_1.HeadContainerComponent
	            ],
	            bootstrap: [
	                app_component_1.AppComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(11);
	var oidc_token_manager_service_1 = __webpack_require__(362);
	var http_extended_service_1 = __webpack_require__(370);
	var auto_linker_service_1 = __webpack_require__(371);
	var $ = __webpack_require__(373);
	exports.APP_PROVIDERS = [
	    core_1.provide("BASE_URL", { useValue: "http://localhost:7338/" }),
	    core_1.provide("$", { useValue: $ }),
	    oidc_token_manager_service_1.OidcTokenManagerService,
	    auto_linker_service_1.AutoLinkerService,
	    http_extended_service_1.HttpExtendedService // Used until a proper interceptor has been implemented 
	];


/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	__webpack_require__(363);
	var core_1 = __webpack_require__(11);
	var OidcTokenManagerService = (function () {
	    function OidcTokenManagerService() {
	        this._config = {
	            client_id: "remembermeimplicit",
	            //redirect_uri: "http://localhost:8888/callback",
	            redirect_uri: "http://dbsp-rememberme-angular2.azurewebsites.net/callback",
	            //post_logout_redirect_uri: "http://localhost:8888/home",
	            post_logout_redirect_uri: "http://dbsp-rememberme-angular2.azurewebsites.net/home",
	            response_type: "id_token token",
	            scope: "openid profile addresses notesmanagement roles",
	            //authority: "http://localhost:1693/identity",
	            authority: "http://dbsp-rememberme-identity.azurewebsites.net/identity",
	            //silent_redirect_uri: "http://localhost:8888/silent-refresh",
	            silent_redirect_uri: "http://dbsp-rememberme-angular2.azurewebsites.net/silent-refresh",
	            silent_renew: true
	        };
	        this._mgr = new OidcTokenManager(this._config);
	    }
	    Object.defineProperty(OidcTokenManagerService.prototype, "mgr", {
	        get: function () {
	            return this._mgr;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OidcTokenManagerService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], OidcTokenManagerService);
	    return OidcTokenManagerService;
	}());
	exports.OidcTokenManagerService = OidcTokenManagerService;


/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(Buffer, process, global, module) {(function () {
	
	    // globals
	    var _promiseFactory;
	    var _httpRequest;
	/**
	 * @constructor
	 */
	function DefaultHttpRequest() {
	
	    /**
	     * @name _promiseFactory
	     * @type DefaultPromiseFactory
	     */
	
	    /**
	     * @param {XMLHttpRequest} xhr
	     * @param {object.<string, string>} headers
	     */
	    function setHeaders(xhr, headers) {
	        var keys = Object.keys(headers);
	
	        for (var i = 0; i < keys.length; i++) {
	            var key = keys[i];
	            var value = headers[key];
	
	            xhr.setRequestHeader(key, value);
	        }
	    }
	
	    /**
	     * @param {string} url
	     * @param {{ headers: object.<string, string> }} [config]
	     * @returns {Promise}
	     */
	    this.getJSON = function (url, config) {
	        return _promiseFactory.create(function (resolve, reject) {
	
	            try {
	                var xhr = new XMLHttpRequest();
	                xhr.open("GET", url);
	                xhr.responseType = "json";
	
	                if (config) {
	                    if (config.headers) {
	                        setHeaders(xhr, config.headers);
	                    }
	                }
	
	                xhr.onload = function () {
	                    try {
	                        if (xhr.status === 200) {
	                            var response = xhr.response;
	                            if (typeof response === "string") {
	                                response = JSON.parse(response);
	                            }
	                            resolve(response);
	                        }
	                        else {
	                            reject(Error(xhr.statusText + "(" + xhr.status + ")"));
	                        }
	                    }
	                    catch (err) {
	                        reject(err);
	                    }
	                };
	
	                xhr.onerror = function () {
	                    reject(Error("Network error"));
	                };
	
	                xhr.send();
	            }
	            catch (err) {
	                return reject(err);
	            }
	        });
	    };
	}
	
	_httpRequest = new DefaultHttpRequest();
	
	/**
	 * @constructor
	 * @param {Promise} promise
	 */
	function DefaultPromise(promise) {
	
	    /**
	     * @param {function(*):*} successCallback
	     * @param {function(*):*} errorCallback
	     * @returns {DefaultPromise}
	     */
	    this.then = function (successCallback, errorCallback) {
	        var childPromise = promise.then(successCallback, errorCallback);
	
	        return new DefaultPromise(childPromise);
	    };
	
	    /**
	     *
	     * @param {function(*):*} errorCallback
	     * @returns {DefaultPromise}
	     */
	    this.catch = function (errorCallback) {
	        var childPromise = promise.catch(errorCallback);
	
	        return new DefaultPromise(childPromise);
	    };
	}
	
	/**
	 * @constructor
	 */
	function DefaultPromiseFactory() {
	
	    this.resolve = function (value) {
	        return new DefaultPromise(Promise.resolve(value));
	    };
	
	    this.reject = function (reason) {
	        return new DefaultPromise(Promise.reject(reason));
	    };
	
	    /**
	     * @param {function(resolve:function, reject:function)} callback
	     * @returns {DefaultPromise}
	     */
	    this.create = function (callback) {
	        return new DefaultPromise(new Promise(callback));
	    };
	}
	
	_promiseFactory = new DefaultPromiseFactory();
	(function () {
	
	    // globals
	    var _promiseFactory;
	    var _httpRequest;
	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};
	
	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};
	
	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {
	        function F() {}
	
	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                F.prototype = this;
	                var subtype = new F();
	
	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }
	
	                // Create default initializer
	                if (!subtype.hasOwnProperty('init')) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }
	
	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;
	
	                // Reference supertype
	                subtype.$super = this;
	
	                return subtype;
	            },
	
	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);
	
	                return instance;
	            },
	
	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },
	
	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }
	
	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },
	
	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());
	
	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];
	
	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },
	
	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },
	
	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;
	
	            // Clamp excess bits
	            this.clamp();
	
	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else if (thatWords.length > 0xffff) {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            } else {
	                // Copy all words at once
	                thisWords.push.apply(thisWords, thatWords);
	            }
	            this.sigBytes += thatSigBytes;
	
	            // Chainable
	            return this;
	        },
	
	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;
	
	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },
	
	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);
	
	            return clone;
	        },
	
	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];
	            for (var i = 0; i < nBytes; i += 4) {
	                words.push((Math.random() * 0x100000000) | 0);
	            }
	
	            return new WordArray.init(words, nBytes);
	        }
	    });
	
	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};
	
	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	
	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }
	
	            return hexChars.join('');
	        },
	
	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;
	
	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }
	
	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };
	
	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	
	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }
	
	            return latin1Chars.join('');
	        },
	
	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;
	
	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }
	
	            return new WordArray.init(words, latin1StrLength);
	        }
	    };
	
	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },
	
	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };
	
	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },
	
	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }
	
	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },
	
	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;
	
	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }
	
	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;
	
	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
	
	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }
	
	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }
	
	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },
	
	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();
	
	            return clone;
	        },
	
	        _minBufferSize: 0
	    });
	
	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),
	
	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);
	
	            // Set initial values
	            this.reset();
	        },
	
	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);
	
	            // Perform concrete-hasher logic
	            this._doReset();
	        },
	
	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);
	
	            // Update the hash
	            this._process();
	
	            // Chainable
	            return this;
	        },
	
	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }
	
	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();
	
	            return hash;
	        },
	
	        blockSize: 512/32,
	
	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },
	
	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });
	
	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};
	
	    return C;
	}(Math));
	
	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;
	
	    // Reusable object
	    var W = [];
	
	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },
	
	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;
	
	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	
	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }
	
	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }
	
	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }
	
	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },
	
	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	
	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;
	
	            // Hash final blocks
	            this._process();
	
	            // Return final computed hash
	            return this._hash;
	        },
	
	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();
	
	            return clone;
	        }
	    });
	
	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);
	
	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());
	
	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;
	
	    // Initialization and round constants tables
	    var H = [];
	    var K = [];
	
	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }
	
	            return true;
	        }
	
	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }
	
	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
	
	                nPrime++;
	            }
	
	            n++;
	        }
	    }());
	
	    // Reusable object
	    var W = [];
	
	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },
	
	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;
	
	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];
	
	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);
	
	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);
	
	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }
	
	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);
	
	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));
	
	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;
	
	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }
	
	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },
	
	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	
	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;
	
	            // Hash final blocks
	            this._process();
	
	            // Return final computed hash
	            return this._hash;
	        },
	
	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();
	
	            return clone;
	        }
	    });
	
	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);
	
	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));
	
	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;
	
	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};
	
	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }
	
	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;
	
	            // return X64Word.create(high, low);
	        // },
	
	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;
	
	            // return X64Word.create(high, low);
	        // },
	
	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;
	
	            // return X64Word.create(high, low);
	        // },
	
	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;
	
	            // return X64Word.create(high, low);
	        // },
	
	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }
	
	            // return X64Word.create(high, low);
	        // },
	
	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }
	
	            // return X64Word.create(high, low);
	        // },
	
	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },
	
	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },
	
	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;
	
	            // return X64Word.create(high, low);
	        // }
	    });
	
	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];
	
	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },
	
	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;
	
	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }
	
	            return X32WordArray.create(x32Words, this.sigBytes);
	        },
	
	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	
	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);
	
	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }
	
	            return clone;
	        }
	    });
	}());
	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	
	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }
	
	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];
	
	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());
	
	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },
	
	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;
	
	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];
	
	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;
	
	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;
	
	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                // Shortcut
	                var Wi = W[i];
	
	                // Extend message
	                if (i < 16) {
	                    var Wih = Wi.high = M[offset + i * 2]     | 0;
	                    var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));
	
	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));
	
	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;
	
	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;
	
	                    var Wil = gamma0l + Wi7l;
	                    var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    var Wil = Wil + gamma1l;
	                    var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    var Wil = Wil + Wi16l;
	                    var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);
	
	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }
	
	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);
	
	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));
	
	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;
	
	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);
	
	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);
	
	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }
	
	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },
	
	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	
	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;
	
	            // Hash final blocks
	            this._process();
	
	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();
	
	            // Return final computed hash
	            return hash;
	        },
	
	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();
	
	            return clone;
	        },
	
	        blockSize: 1024/32
	    });
	
	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);
	
	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());
	
	
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var b64pad="=";
	
	function hex2b64(h) {
	  var i;
	  var c;
	  var ret = "";
	  for(i = 0; i+3 <= h.length; i+=3) {
	    c = parseInt(h.substring(i,i+3),16);
	    ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
	  }
	  if(i+1 == h.length) {
	    c = parseInt(h.substring(i,i+1),16);
	    ret += b64map.charAt(c << 2);
	  }
	  else if(i+2 == h.length) {
	    c = parseInt(h.substring(i,i+2),16);
	    ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
	  }
	  if (b64pad) while((ret.length & 3) > 0) ret += b64pad;
	  return ret;
	}
	
	// convert a base64 string to hex
	function b64tohex(s) {
	  var ret = ""
	  var i;
	  var k = 0; // b64 state, 0-3
	  var slop;
	  var v;
	  for(i = 0; i < s.length; ++i) {
	    if(s.charAt(i) == b64pad) break;
	    v = b64map.indexOf(s.charAt(i));
	    if(v < 0) continue;
	    if(k == 0) {
	      ret += int2char(v >> 2);
	      slop = v & 3;
	      k = 1;
	    }
	    else if(k == 1) {
	      ret += int2char((slop << 2) | (v >> 4));
	      slop = v & 0xf;
	      k = 2;
	    }
	    else if(k == 2) {
	      ret += int2char(slop);
	      ret += int2char(v >> 2);
	      slop = v & 3;
	      k = 3;
	    }
	    else {
	      ret += int2char((slop << 2) | (v >> 4));
	      ret += int2char(v & 0xf);
	      k = 0;
	    }
	  }
	  if(k == 1)
	    ret += int2char(slop << 2);
	  return ret;
	}
	
	// convert a base64 string to a byte/number array
	function b64toBA(s) {
	  //piggyback on b64tohex for now, optimize later
	  var h = b64tohex(s);
	  var i;
	  var a = new Array();
	  for(i = 0; 2*i < h.length; ++i) {
	    a[i] = parseInt(h.substring(2*i,2*i+2),16);
	  }
	  return a;
	}
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	// Copyright (c) 2005  Tom Wu
	// All Rights Reserved.
	// See "LICENSE" for details.
	
	// Basic JavaScript BN library - subset useful for RSA encryption.
	
	// Bits per digit
	var dbits;
	
	// JavaScript engine analysis
	var canary = 0xdeadbeefcafe;
	var j_lm = ((canary&0xffffff)==0xefcafe);
	
	// (public) Constructor
	function BigInteger(a,b,c) {
	  if(a != null)
	    if("number" == typeof a) this.fromNumber(a,b,c);
	    else if(b == null && "string" != typeof a) this.fromString(a,256);
	    else this.fromString(a,b);
	}
	
	// return new, unset BigInteger
	function nbi() { return new BigInteger(null); }
	
	// am: Compute w_j += (x*this_i), propagate carries,
	// c is initial carry, returns final carry.
	// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
	// We need to select the fastest one that works in this environment.
	
	// am1: use a single mult and divide to get the high bits,
	// max digit bits should be 26 because
	// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
	function am1(i,x,w,j,c,n) {
	  while(--n >= 0) {
	    var v = x*this[i++]+w[j]+c;
	    c = Math.floor(v/0x4000000);
	    w[j++] = v&0x3ffffff;
	  }
	  return c;
	}
	// am2 avoids a big mult-and-extract completely.
	// Max digit bits should be <= 30 because we do bitwise ops
	// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
	function am2(i,x,w,j,c,n) {
	  var xl = x&0x7fff, xh = x>>15;
	  while(--n >= 0) {
	    var l = this[i]&0x7fff;
	    var h = this[i++]>>15;
	    var m = xh*l+h*xl;
	    l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
	    c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
	    w[j++] = l&0x3fffffff;
	  }
	  return c;
	}
	// Alternately, set max digit bits to 28 since some
	// browsers slow down when dealing with 32-bit numbers.
	function am3(i,x,w,j,c,n) {
	  var xl = x&0x3fff, xh = x>>14;
	  while(--n >= 0) {
	    var l = this[i]&0x3fff;
	    var h = this[i++]>>14;
	    var m = xh*l+h*xl;
	    l = xl*l+((m&0x3fff)<<14)+w[j]+c;
	    c = (l>>28)+(m>>14)+xh*h;
	    w[j++] = l&0xfffffff;
	  }
	  return c;
	}
	if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
	  BigInteger.prototype.am = am2;
	  dbits = 30;
	}
	else if(j_lm && (navigator.appName != "Netscape")) {
	  BigInteger.prototype.am = am1;
	  dbits = 26;
	}
	else { // Mozilla/Netscape seems to prefer am3
	  BigInteger.prototype.am = am3;
	  dbits = 28;
	}
	
	BigInteger.prototype.DB = dbits;
	BigInteger.prototype.DM = ((1<<dbits)-1);
	BigInteger.prototype.DV = (1<<dbits);
	
	var BI_FP = 52;
	BigInteger.prototype.FV = Math.pow(2,BI_FP);
	BigInteger.prototype.F1 = BI_FP-dbits;
	BigInteger.prototype.F2 = 2*dbits-BI_FP;
	
	// Digit conversions
	var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
	var BI_RC = new Array();
	var rr,vv;
	rr = "0".charCodeAt(0);
	for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
	rr = "a".charCodeAt(0);
	for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
	rr = "A".charCodeAt(0);
	for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
	
	function int2char(n) { return BI_RM.charAt(n); }
	function intAt(s,i) {
	  var c = BI_RC[s.charCodeAt(i)];
	  return (c==null)?-1:c;
	}
	
	// (protected) copy this to r
	function bnpCopyTo(r) {
	  for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
	  r.t = this.t;
	  r.s = this.s;
	}
	
	// (protected) set from integer value x, -DV <= x < DV
	function bnpFromInt(x) {
	  this.t = 1;
	  this.s = (x<0)?-1:0;
	  if(x > 0) this[0] = x;
	  else if(x < -1) this[0] = x+this.DV;
	  else this.t = 0;
	}
	
	// return bigint initialized to value
	function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
	
	// (protected) set from string and radix
	function bnpFromString(s,b) {
	  var k;
	  if(b == 16) k = 4;
	  else if(b == 8) k = 3;
	  else if(b == 256) k = 8; // byte array
	  else if(b == 2) k = 1;
	  else if(b == 32) k = 5;
	  else if(b == 4) k = 2;
	  else { this.fromRadix(s,b); return; }
	  this.t = 0;
	  this.s = 0;
	  var i = s.length, mi = false, sh = 0;
	  while(--i >= 0) {
	    var x = (k==8)?s[i]&0xff:intAt(s,i);
	    if(x < 0) {
	      if(s.charAt(i) == "-") mi = true;
	      continue;
	    }
	    mi = false;
	    if(sh == 0)
	      this[this.t++] = x;
	    else if(sh+k > this.DB) {
	      this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
	      this[this.t++] = (x>>(this.DB-sh));
	    }
	    else
	      this[this.t-1] |= x<<sh;
	    sh += k;
	    if(sh >= this.DB) sh -= this.DB;
	  }
	  if(k == 8 && (s[0]&0x80) != 0) {
	    this.s = -1;
	    if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
	  }
	  this.clamp();
	  if(mi) BigInteger.ZERO.subTo(this,this);
	}
	
	// (protected) clamp off excess high words
	function bnpClamp() {
	  var c = this.s&this.DM;
	  while(this.t > 0 && this[this.t-1] == c) --this.t;
	}
	
	// (public) return string representation in given radix
	function bnToString(b) {
	  if(this.s < 0) return "-"+this.negate().toString(b);
	  var k;
	  if(b == 16) k = 4;
	  else if(b == 8) k = 3;
	  else if(b == 2) k = 1;
	  else if(b == 32) k = 5;
	  else if(b == 4) k = 2;
	  else return this.toRadix(b);
	  var km = (1<<k)-1, d, m = false, r = "", i = this.t;
	  var p = this.DB-(i*this.DB)%k;
	  if(i-- > 0) {
	    if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
	    while(i >= 0) {
	      if(p < k) {
	        d = (this[i]&((1<<p)-1))<<(k-p);
	        d |= this[--i]>>(p+=this.DB-k);
	      }
	      else {
	        d = (this[i]>>(p-=k))&km;
	        if(p <= 0) { p += this.DB; --i; }
	      }
	      if(d > 0) m = true;
	      if(m) r += int2char(d);
	    }
	  }
	  return m?r:"0";
	}
	
	// (public) -this
	function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
	
	// (public) |this|
	function bnAbs() { return (this.s<0)?this.negate():this; }
	
	// (public) return + if this > a, - if this < a, 0 if equal
	function bnCompareTo(a) {
	  var r = this.s-a.s;
	  if(r != 0) return r;
	  var i = this.t;
	  r = i-a.t;
	  if(r != 0) return (this.s<0)?-r:r;
	  while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
	  return 0;
	}
	
	// returns bit length of the integer x
	function nbits(x) {
	  var r = 1, t;
	  if((t=x>>>16) != 0) { x = t; r += 16; }
	  if((t=x>>8) != 0) { x = t; r += 8; }
	  if((t=x>>4) != 0) { x = t; r += 4; }
	  if((t=x>>2) != 0) { x = t; r += 2; }
	  if((t=x>>1) != 0) { x = t; r += 1; }
	  return r;
	}
	
	// (public) return the number of bits in "this"
	function bnBitLength() {
	  if(this.t <= 0) return 0;
	  return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
	}
	
	// (protected) r = this << n*DB
	function bnpDLShiftTo(n,r) {
	  var i;
	  for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
	  for(i = n-1; i >= 0; --i) r[i] = 0;
	  r.t = this.t+n;
	  r.s = this.s;
	}
	
	// (protected) r = this >> n*DB
	function bnpDRShiftTo(n,r) {
	  for(var i = n; i < this.t; ++i) r[i-n] = this[i];
	  r.t = Math.max(this.t-n,0);
	  r.s = this.s;
	}
	
	// (protected) r = this << n
	function bnpLShiftTo(n,r) {
	  var bs = n%this.DB;
	  var cbs = this.DB-bs;
	  var bm = (1<<cbs)-1;
	  var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
	  for(i = this.t-1; i >= 0; --i) {
	    r[i+ds+1] = (this[i]>>cbs)|c;
	    c = (this[i]&bm)<<bs;
	  }
	  for(i = ds-1; i >= 0; --i) r[i] = 0;
	  r[ds] = c;
	  r.t = this.t+ds+1;
	  r.s = this.s;
	  r.clamp();
	}
	
	// (protected) r = this >> n
	function bnpRShiftTo(n,r) {
	  r.s = this.s;
	  var ds = Math.floor(n/this.DB);
	  if(ds >= this.t) { r.t = 0; return; }
	  var bs = n%this.DB;
	  var cbs = this.DB-bs;
	  var bm = (1<<bs)-1;
	  r[0] = this[ds]>>bs;
	  for(var i = ds+1; i < this.t; ++i) {
	    r[i-ds-1] |= (this[i]&bm)<<cbs;
	    r[i-ds] = this[i]>>bs;
	  }
	  if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
	  r.t = this.t-ds;
	  r.clamp();
	}
	
	// (protected) r = this - a
	function bnpSubTo(a,r) {
	  var i = 0, c = 0, m = Math.min(a.t,this.t);
	  while(i < m) {
	    c += this[i]-a[i];
	    r[i++] = c&this.DM;
	    c >>= this.DB;
	  }
	  if(a.t < this.t) {
	    c -= a.s;
	    while(i < this.t) {
	      c += this[i];
	      r[i++] = c&this.DM;
	      c >>= this.DB;
	    }
	    c += this.s;
	  }
	  else {
	    c += this.s;
	    while(i < a.t) {
	      c -= a[i];
	      r[i++] = c&this.DM;
	      c >>= this.DB;
	    }
	    c -= a.s;
	  }
	  r.s = (c<0)?-1:0;
	  if(c < -1) r[i++] = this.DV+c;
	  else if(c > 0) r[i++] = c;
	  r.t = i;
	  r.clamp();
	}
	
	// (protected) r = this * a, r != this,a (HAC 14.12)
	// "this" should be the larger one if appropriate.
	function bnpMultiplyTo(a,r) {
	  var x = this.abs(), y = a.abs();
	  var i = x.t;
	  r.t = i+y.t;
	  while(--i >= 0) r[i] = 0;
	  for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
	  r.s = 0;
	  r.clamp();
	  if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
	}
	
	// (protected) r = this^2, r != this (HAC 14.16)
	function bnpSquareTo(r) {
	  var x = this.abs();
	  var i = r.t = 2*x.t;
	  while(--i >= 0) r[i] = 0;
	  for(i = 0; i < x.t-1; ++i) {
	    var c = x.am(i,x[i],r,2*i,0,1);
	    if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
	      r[i+x.t] -= x.DV;
	      r[i+x.t+1] = 1;
	    }
	  }
	  if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
	  r.s = 0;
	  r.clamp();
	}
	
	// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
	// r != q, this != m.  q or r may be null.
	function bnpDivRemTo(m,q,r) {
	  var pm = m.abs();
	  if(pm.t <= 0) return;
	  var pt = this.abs();
	  if(pt.t < pm.t) {
	    if(q != null) q.fromInt(0);
	    if(r != null) this.copyTo(r);
	    return;
	  }
	  if(r == null) r = nbi();
	  var y = nbi(), ts = this.s, ms = m.s;
	  var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
	  if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
	  else { pm.copyTo(y); pt.copyTo(r); }
	  var ys = y.t;
	  var y0 = y[ys-1];
	  if(y0 == 0) return;
	  var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
	  var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
	  var i = r.t, j = i-ys, t = (q==null)?nbi():q;
	  y.dlShiftTo(j,t);
	  if(r.compareTo(t) >= 0) {
	    r[r.t++] = 1;
	    r.subTo(t,r);
	  }
	  BigInteger.ONE.dlShiftTo(ys,t);
	  t.subTo(y,y);	// "negative" y so we can replace sub with am later
	  while(y.t < ys) y[y.t++] = 0;
	  while(--j >= 0) {
	    // Estimate quotient digit
	    var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
	    if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
	      y.dlShiftTo(j,t);
	      r.subTo(t,r);
	      while(r[i] < --qd) r.subTo(t,r);
	    }
	  }
	  if(q != null) {
	    r.drShiftTo(ys,q);
	    if(ts != ms) BigInteger.ZERO.subTo(q,q);
	  }
	  r.t = ys;
	  r.clamp();
	  if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
	  if(ts < 0) BigInteger.ZERO.subTo(r,r);
	}
	
	// (public) this mod a
	function bnMod(a) {
	  var r = nbi();
	  this.abs().divRemTo(a,null,r);
	  if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
	  return r;
	}
	
	// Modular reduction using "classic" algorithm
	function Classic(m) { this.m = m; }
	function cConvert(x) {
	  if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
	  else return x;
	}
	function cRevert(x) { return x; }
	function cReduce(x) { x.divRemTo(this.m,null,x); }
	function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
	function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
	
	Classic.prototype.convert = cConvert;
	Classic.prototype.revert = cRevert;
	Classic.prototype.reduce = cReduce;
	Classic.prototype.mulTo = cMulTo;
	Classic.prototype.sqrTo = cSqrTo;
	
	// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
	// justification:
	//         xy == 1 (mod m)
	//         xy =  1+km
	//   xy(2-xy) = (1+km)(1-km)
	// x[y(2-xy)] = 1-k^2m^2
	// x[y(2-xy)] == 1 (mod m^2)
	// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
	// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
	// JS multiply "overflows" differently from C/C++, so care is needed here.
	function bnpInvDigit() {
	  if(this.t < 1) return 0;
	  var x = this[0];
	  if((x&1) == 0) return 0;
	  var y = x&3;		// y == 1/x mod 2^2
	  y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
	  y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
	  y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
	  // last step - calculate inverse mod DV directly;
	  // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
	  y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
	  // we really want the negative inverse, and -DV < y < DV
	  return (y>0)?this.DV-y:-y;
	}
	
	// Montgomery reduction
	function Montgomery(m) {
	  this.m = m;
	  this.mp = m.invDigit();
	  this.mpl = this.mp&0x7fff;
	  this.mph = this.mp>>15;
	  this.um = (1<<(m.DB-15))-1;
	  this.mt2 = 2*m.t;
	}
	
	// xR mod m
	function montConvert(x) {
	  var r = nbi();
	  x.abs().dlShiftTo(this.m.t,r);
	  r.divRemTo(this.m,null,r);
	  if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
	  return r;
	}
	
	// x/R mod m
	function montRevert(x) {
	  var r = nbi();
	  x.copyTo(r);
	  this.reduce(r);
	  return r;
	}
	
	// x = x/R mod m (HAC 14.32)
	function montReduce(x) {
	  while(x.t <= this.mt2)	// pad x so am has enough room later
	    x[x.t++] = 0;
	  for(var i = 0; i < this.m.t; ++i) {
	    // faster way of calculating u0 = x[i]*mp mod DV
	    var j = x[i]&0x7fff;
	    var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
	    // use am to combine the multiply-shift-add into one call
	    j = i+this.m.t;
	    x[j] += this.m.am(0,u0,x,i,0,this.m.t);
	    // propagate carry
	    while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
	  }
	  x.clamp();
	  x.drShiftTo(this.m.t,x);
	  if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
	}
	
	// r = "x^2/R mod m"; x != r
	function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
	
	// r = "xy/R mod m"; x,y != r
	function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
	
	Montgomery.prototype.convert = montConvert;
	Montgomery.prototype.revert = montRevert;
	Montgomery.prototype.reduce = montReduce;
	Montgomery.prototype.mulTo = montMulTo;
	Montgomery.prototype.sqrTo = montSqrTo;
	
	// (protected) true iff this is even
	function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
	
	// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
	function bnpExp(e,z) {
	  if(e > 0xffffffff || e < 1) return BigInteger.ONE;
	  var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
	  g.copyTo(r);
	  while(--i >= 0) {
	    z.sqrTo(r,r2);
	    if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
	    else { var t = r; r = r2; r2 = t; }
	  }
	  return z.revert(r);
	}
	
	// (public) this^e % m, 0 <= e < 2^32
	function bnModPowInt(e,m) {
	  var z;
	  if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
	  return this.exp(e,z);
	}
	
	// protected
	BigInteger.prototype.copyTo = bnpCopyTo;
	BigInteger.prototype.fromInt = bnpFromInt;
	BigInteger.prototype.fromString = bnpFromString;
	BigInteger.prototype.clamp = bnpClamp;
	BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
	BigInteger.prototype.drShiftTo = bnpDRShiftTo;
	BigInteger.prototype.lShiftTo = bnpLShiftTo;
	BigInteger.prototype.rShiftTo = bnpRShiftTo;
	BigInteger.prototype.subTo = bnpSubTo;
	BigInteger.prototype.multiplyTo = bnpMultiplyTo;
	BigInteger.prototype.squareTo = bnpSquareTo;
	BigInteger.prototype.divRemTo = bnpDivRemTo;
	BigInteger.prototype.invDigit = bnpInvDigit;
	BigInteger.prototype.isEven = bnpIsEven;
	BigInteger.prototype.exp = bnpExp;
	
	// public
	BigInteger.prototype.toString = bnToString;
	BigInteger.prototype.negate = bnNegate;
	BigInteger.prototype.abs = bnAbs;
	BigInteger.prototype.compareTo = bnCompareTo;
	BigInteger.prototype.bitLength = bnBitLength;
	BigInteger.prototype.mod = bnMod;
	BigInteger.prototype.modPowInt = bnModPowInt;
	
	// "constants"
	BigInteger.ZERO = nbv(0);
	BigInteger.ONE = nbv(1);
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	// Copyright (c) 2005-2009  Tom Wu
	// All Rights Reserved.
	// See "LICENSE" for details.
	
	// Extended JavaScript BN functions, required for RSA private ops.
	
	// Version 1.1: new BigInteger("0", 10) returns "proper" zero
	// Version 1.2: square() API, isProbablePrime fix
	
	// (public)
	function bnClone() { var r = nbi(); this.copyTo(r); return r; }
	
	// (public) return value as integer
	function bnIntValue() {
	  if(this.s < 0) {
	    if(this.t == 1) return this[0]-this.DV;
	    else if(this.t == 0) return -1;
	  }
	  else if(this.t == 1) return this[0];
	  else if(this.t == 0) return 0;
	  // assumes 16 < DB < 32
	  return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
	}
	
	// (public) return value as byte
	function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }
	
	// (public) return value as short (assumes DB>=16)
	function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }
	
	// (protected) return x s.t. r^x < DV
	function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
	
	// (public) 0 if this == 0, 1 if this > 0
	function bnSigNum() {
	  if(this.s < 0) return -1;
	  else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
	  else return 1;
	}
	
	// (protected) convert to radix string
	function bnpToRadix(b) {
	  if(b == null) b = 10;
	  if(this.signum() == 0 || b < 2 || b > 36) return "0";
	  var cs = this.chunkSize(b);
	  var a = Math.pow(b,cs);
	  var d = nbv(a), y = nbi(), z = nbi(), r = "";
	  this.divRemTo(d,y,z);
	  while(y.signum() > 0) {
	    r = (a+z.intValue()).toString(b).substr(1) + r;
	    y.divRemTo(d,y,z);
	  }
	  return z.intValue().toString(b) + r;
	}
	
	// (protected) convert from radix string
	function bnpFromRadix(s,b) {
	  this.fromInt(0);
	  if(b == null) b = 10;
	  var cs = this.chunkSize(b);
	  var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
	  for(var i = 0; i < s.length; ++i) {
	    var x = intAt(s,i);
	    if(x < 0) {
	      if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
	      continue;
	    }
	    w = b*w+x;
	    if(++j >= cs) {
	      this.dMultiply(d);
	      this.dAddOffset(w,0);
	      j = 0;
	      w = 0;
	    }
	  }
	  if(j > 0) {
	    this.dMultiply(Math.pow(b,j));
	    this.dAddOffset(w,0);
	  }
	  if(mi) BigInteger.ZERO.subTo(this,this);
	}
	
	// (protected) alternate constructor
	function bnpFromNumber(a,b,c) {
	  if("number" == typeof b) {
	    // new BigInteger(int,int,RNG)
	    if(a < 2) this.fromInt(1);
	    else {
	      this.fromNumber(a,c);
	      if(!this.testBit(a-1))	// force MSB set
	        this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
	      if(this.isEven()) this.dAddOffset(1,0); // force odd
	      while(!this.isProbablePrime(b)) {
	        this.dAddOffset(2,0);
	        if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
	      }
	    }
	  }
	  else {
	    // new BigInteger(int,RNG)
	    var x = new Array(), t = a&7;
	    x.length = (a>>3)+1;
	    b.nextBytes(x);
	    if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
	    this.fromString(x,256);
	  }
	}
	
	// (public) convert to bigendian byte array
	function bnToByteArray() {
	  var i = this.t, r = new Array();
	  r[0] = this.s;
	  var p = this.DB-(i*this.DB)%8, d, k = 0;
	  if(i-- > 0) {
	    if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
	      r[k++] = d|(this.s<<(this.DB-p));
	    while(i >= 0) {
	      if(p < 8) {
	        d = (this[i]&((1<<p)-1))<<(8-p);
	        d |= this[--i]>>(p+=this.DB-8);
	      }
	      else {
	        d = (this[i]>>(p-=8))&0xff;
	        if(p <= 0) { p += this.DB; --i; }
	      }
	      if((d&0x80) != 0) d |= -256;
	      if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
	      if(k > 0 || d != this.s) r[k++] = d;
	    }
	  }
	  return r;
	}
	
	function bnEquals(a) { return(this.compareTo(a)==0); }
	function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
	function bnMax(a) { return(this.compareTo(a)>0)?this:a; }
	
	// (protected) r = this op a (bitwise)
	function bnpBitwiseTo(a,op,r) {
	  var i, f, m = Math.min(a.t,this.t);
	  for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
	  if(a.t < this.t) {
	    f = a.s&this.DM;
	    for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
	    r.t = this.t;
	  }
	  else {
	    f = this.s&this.DM;
	    for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
	    r.t = a.t;
	  }
	  r.s = op(this.s,a.s);
	  r.clamp();
	}
	
	// (public) this & a
	function op_and(x,y) { return x&y; }
	function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }
	
	// (public) this | a
	function op_or(x,y) { return x|y; }
	function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }
	
	// (public) this ^ a
	function op_xor(x,y) { return x^y; }
	function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }
	
	// (public) this & ~a
	function op_andnot(x,y) { return x&~y; }
	function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }
	
	// (public) ~this
	function bnNot() {
	  var r = nbi();
	  for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
	  r.t = this.t;
	  r.s = ~this.s;
	  return r;
	}
	
	// (public) this << n
	function bnShiftLeft(n) {
	  var r = nbi();
	  if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
	  return r;
	}
	
	// (public) this >> n
	function bnShiftRight(n) {
	  var r = nbi();
	  if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
	  return r;
	}
	
	// return index of lowest 1-bit in x, x < 2^31
	function lbit(x) {
	  if(x == 0) return -1;
	  var r = 0;
	  if((x&0xffff) == 0) { x >>= 16; r += 16; }
	  if((x&0xff) == 0) { x >>= 8; r += 8; }
	  if((x&0xf) == 0) { x >>= 4; r += 4; }
	  if((x&3) == 0) { x >>= 2; r += 2; }
	  if((x&1) == 0) ++r;
	  return r;
	}
	
	// (public) returns index of lowest 1-bit (or -1 if none)
	function bnGetLowestSetBit() {
	  for(var i = 0; i < this.t; ++i)
	    if(this[i] != 0) return i*this.DB+lbit(this[i]);
	  if(this.s < 0) return this.t*this.DB;
	  return -1;
	}
	
	// return number of 1 bits in x
	function cbit(x) {
	  var r = 0;
	  while(x != 0) { x &= x-1; ++r; }
	  return r;
	}
	
	// (public) return number of set bits
	function bnBitCount() {
	  var r = 0, x = this.s&this.DM;
	  for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
	  return r;
	}
	
	// (public) true iff nth bit is set
	function bnTestBit(n) {
	  var j = Math.floor(n/this.DB);
	  if(j >= this.t) return(this.s!=0);
	  return((this[j]&(1<<(n%this.DB)))!=0);
	}
	
	// (protected) this op (1<<n)
	function bnpChangeBit(n,op) {
	  var r = BigInteger.ONE.shiftLeft(n);
	  this.bitwiseTo(r,op,r);
	  return r;
	}
	
	// (public) this | (1<<n)
	function bnSetBit(n) { return this.changeBit(n,op_or); }
	
	// (public) this & ~(1<<n)
	function bnClearBit(n) { return this.changeBit(n,op_andnot); }
	
	// (public) this ^ (1<<n)
	function bnFlipBit(n) { return this.changeBit(n,op_xor); }
	
	// (protected) r = this + a
	function bnpAddTo(a,r) {
	  var i = 0, c = 0, m = Math.min(a.t,this.t);
	  while(i < m) {
	    c += this[i]+a[i];
	    r[i++] = c&this.DM;
	    c >>= this.DB;
	  }
	  if(a.t < this.t) {
	    c += a.s;
	    while(i < this.t) {
	      c += this[i];
	      r[i++] = c&this.DM;
	      c >>= this.DB;
	    }
	    c += this.s;
	  }
	  else {
	    c += this.s;
	    while(i < a.t) {
	      c += a[i];
	      r[i++] = c&this.DM;
	      c >>= this.DB;
	    }
	    c += a.s;
	  }
	  r.s = (c<0)?-1:0;
	  if(c > 0) r[i++] = c;
	  else if(c < -1) r[i++] = this.DV+c;
	  r.t = i;
	  r.clamp();
	}
	
	// (public) this + a
	function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }
	
	// (public) this - a
	function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }
	
	// (public) this * a
	function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }
	
	// (public) this^2
	function bnSquare() { var r = nbi(); this.squareTo(r); return r; }
	
	// (public) this / a
	function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }
	
	// (public) this % a
	function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }
	
	// (public) [this/a,this%a]
	function bnDivideAndRemainder(a) {
	  var q = nbi(), r = nbi();
	  this.divRemTo(a,q,r);
	  return new Array(q,r);
	}
	
	// (protected) this *= n, this >= 0, 1 < n < DV
	function bnpDMultiply(n) {
	  this[this.t] = this.am(0,n-1,this,0,0,this.t);
	  ++this.t;
	  this.clamp();
	}
	
	// (protected) this += n << w words, this >= 0
	function bnpDAddOffset(n,w) {
	  if(n == 0) return;
	  while(this.t <= w) this[this.t++] = 0;
	  this[w] += n;
	  while(this[w] >= this.DV) {
	    this[w] -= this.DV;
	    if(++w >= this.t) this[this.t++] = 0;
	    ++this[w];
	  }
	}
	
	// A "null" reducer
	function NullExp() {}
	function nNop(x) { return x; }
	function nMulTo(x,y,r) { x.multiplyTo(y,r); }
	function nSqrTo(x,r) { x.squareTo(r); }
	
	NullExp.prototype.convert = nNop;
	NullExp.prototype.revert = nNop;
	NullExp.prototype.mulTo = nMulTo;
	NullExp.prototype.sqrTo = nSqrTo;
	
	// (public) this^e
	function bnPow(e) { return this.exp(e,new NullExp()); }
	
	// (protected) r = lower n words of "this * a", a.t <= n
	// "this" should be the larger one if appropriate.
	function bnpMultiplyLowerTo(a,n,r) {
	  var i = Math.min(this.t+a.t,n);
	  r.s = 0; // assumes a,this >= 0
	  r.t = i;
	  while(i > 0) r[--i] = 0;
	  var j;
	  for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
	  for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
	  r.clamp();
	}
	
	// (protected) r = "this * a" without lower n words, n > 0
	// "this" should be the larger one if appropriate.
	function bnpMultiplyUpperTo(a,n,r) {
	  --n;
	  var i = r.t = this.t+a.t-n;
	  r.s = 0; // assumes a,this >= 0
	  while(--i >= 0) r[i] = 0;
	  for(i = Math.max(n-this.t,0); i < a.t; ++i)
	    r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
	  r.clamp();
	  r.drShiftTo(1,r);
	}
	
	// Barrett modular reduction
	function Barrett(m) {
	  // setup Barrett
	  this.r2 = nbi();
	  this.q3 = nbi();
	  BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
	  this.mu = this.r2.divide(m);
	  this.m = m;
	}
	
	function barrettConvert(x) {
	  if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
	  else if(x.compareTo(this.m) < 0) return x;
	  else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
	}
	
	function barrettRevert(x) { return x; }
	
	// x = x mod m (HAC 14.42)
	function barrettReduce(x) {
	  x.drShiftTo(this.m.t-1,this.r2);
	  if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
	  this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
	  this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
	  while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
	  x.subTo(this.r2,x);
	  while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
	}
	
	// r = x^2 mod m; x != r
	function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
	
	// r = x*y mod m; x,y != r
	function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
	
	Barrett.prototype.convert = barrettConvert;
	Barrett.prototype.revert = barrettRevert;
	Barrett.prototype.reduce = barrettReduce;
	Barrett.prototype.mulTo = barrettMulTo;
	Barrett.prototype.sqrTo = barrettSqrTo;
	
	// (public) this^e % m (HAC 14.85)
	function bnModPow(e,m) {
	  var i = e.bitLength(), k, r = nbv(1), z;
	  if(i <= 0) return r;
	  else if(i < 18) k = 1;
	  else if(i < 48) k = 3;
	  else if(i < 144) k = 4;
	  else if(i < 768) k = 5;
	  else k = 6;
	  if(i < 8)
	    z = new Classic(m);
	  else if(m.isEven())
	    z = new Barrett(m);
	  else
	    z = new Montgomery(m);
	
	  // precomputation
	  var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
	  g[1] = z.convert(this);
	  if(k > 1) {
	    var g2 = nbi();
	    z.sqrTo(g[1],g2);
	    while(n <= km) {
	      g[n] = nbi();
	      z.mulTo(g2,g[n-2],g[n]);
	      n += 2;
	    }
	  }
	
	  var j = e.t-1, w, is1 = true, r2 = nbi(), t;
	  i = nbits(e[j])-1;
	  while(j >= 0) {
	    if(i >= k1) w = (e[j]>>(i-k1))&km;
	    else {
	      w = (e[j]&((1<<(i+1))-1))<<(k1-i);
	      if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
	    }
	
	    n = k;
	    while((w&1) == 0) { w >>= 1; --n; }
	    if((i -= n) < 0) { i += this.DB; --j; }
	    if(is1) {	// ret == 1, don't bother squaring or multiplying it
	      g[w].copyTo(r);
	      is1 = false;
	    }
	    else {
	      while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
	      if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
	      z.mulTo(r2,g[w],r);
	    }
	
	    while(j >= 0 && (e[j]&(1<<i)) == 0) {
	      z.sqrTo(r,r2); t = r; r = r2; r2 = t;
	      if(--i < 0) { i = this.DB-1; --j; }
	    }
	  }
	  return z.revert(r);
	}
	
	// (public) gcd(this,a) (HAC 14.54)
	function bnGCD(a) {
	  var x = (this.s<0)?this.negate():this.clone();
	  var y = (a.s<0)?a.negate():a.clone();
	  if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
	  var i = x.getLowestSetBit(), g = y.getLowestSetBit();
	  if(g < 0) return x;
	  if(i < g) g = i;
	  if(g > 0) {
	    x.rShiftTo(g,x);
	    y.rShiftTo(g,y);
	  }
	  while(x.signum() > 0) {
	    if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
	    if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
	    if(x.compareTo(y) >= 0) {
	      x.subTo(y,x);
	      x.rShiftTo(1,x);
	    }
	    else {
	      y.subTo(x,y);
	      y.rShiftTo(1,y);
	    }
	  }
	  if(g > 0) y.lShiftTo(g,y);
	  return y;
	}
	
	// (protected) this % n, n < 2^26
	function bnpModInt(n) {
	  if(n <= 0) return 0;
	  var d = this.DV%n, r = (this.s<0)?n-1:0;
	  if(this.t > 0)
	    if(d == 0) r = this[0]%n;
	    else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
	  return r;
	}
	
	// (public) 1/this % m (HAC 14.61)
	function bnModInverse(m) {
	  var ac = m.isEven();
	  if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
	  var u = m.clone(), v = this.clone();
	  var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
	  while(u.signum() != 0) {
	    while(u.isEven()) {
	      u.rShiftTo(1,u);
	      if(ac) {
	        if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
	        a.rShiftTo(1,a);
	      }
	      else if(!b.isEven()) b.subTo(m,b);
	      b.rShiftTo(1,b);
	    }
	    while(v.isEven()) {
	      v.rShiftTo(1,v);
	      if(ac) {
	        if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
	        c.rShiftTo(1,c);
	      }
	      else if(!d.isEven()) d.subTo(m,d);
	      d.rShiftTo(1,d);
	    }
	    if(u.compareTo(v) >= 0) {
	      u.subTo(v,u);
	      if(ac) a.subTo(c,a);
	      b.subTo(d,b);
	    }
	    else {
	      v.subTo(u,v);
	      if(ac) c.subTo(a,c);
	      d.subTo(b,d);
	    }
	  }
	  if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
	  if(d.compareTo(m) >= 0) return d.subtract(m);
	  if(d.signum() < 0) d.addTo(m,d); else return d;
	  if(d.signum() < 0) return d.add(m); else return d;
	}
	
	var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
	var lplim = (1<<26)/lowprimes[lowprimes.length-1];
	
	// (public) test primality with certainty >= 1-.5^t
	function bnIsProbablePrime(t) {
	  var i, x = this.abs();
	  if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
	    for(i = 0; i < lowprimes.length; ++i)
	      if(x[0] == lowprimes[i]) return true;
	    return false;
	  }
	  if(x.isEven()) return false;
	  i = 1;
	  while(i < lowprimes.length) {
	    var m = lowprimes[i], j = i+1;
	    while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
	    m = x.modInt(m);
	    while(i < j) if(m%lowprimes[i++] == 0) return false;
	  }
	  return x.millerRabin(t);
	}
	
	// (protected) true if probably prime (HAC 4.24, Miller-Rabin)
	function bnpMillerRabin(t) {
	  var n1 = this.subtract(BigInteger.ONE);
	  var k = n1.getLowestSetBit();
	  if(k <= 0) return false;
	  var r = n1.shiftRight(k);
	  t = (t+1)>>1;
	  if(t > lowprimes.length) t = lowprimes.length;
	  var a = nbi();
	  for(var i = 0; i < t; ++i) {
	    //Pick bases at random, instead of starting at 2
	    a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
	    var y = a.modPow(r,this);
	    if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
	      var j = 1;
	      while(j++ < k && y.compareTo(n1) != 0) {
	        y = y.modPowInt(2,this);
	        if(y.compareTo(BigInteger.ONE) == 0) return false;
	      }
	      if(y.compareTo(n1) != 0) return false;
	    }
	  }
	  return true;
	}
	
	// protected
	BigInteger.prototype.chunkSize = bnpChunkSize;
	BigInteger.prototype.toRadix = bnpToRadix;
	BigInteger.prototype.fromRadix = bnpFromRadix;
	BigInteger.prototype.fromNumber = bnpFromNumber;
	BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
	BigInteger.prototype.changeBit = bnpChangeBit;
	BigInteger.prototype.addTo = bnpAddTo;
	BigInteger.prototype.dMultiply = bnpDMultiply;
	BigInteger.prototype.dAddOffset = bnpDAddOffset;
	BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
	BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
	BigInteger.prototype.modInt = bnpModInt;
	BigInteger.prototype.millerRabin = bnpMillerRabin;
	
	// public
	BigInteger.prototype.clone = bnClone;
	BigInteger.prototype.intValue = bnIntValue;
	BigInteger.prototype.byteValue = bnByteValue;
	BigInteger.prototype.shortValue = bnShortValue;
	BigInteger.prototype.signum = bnSigNum;
	BigInteger.prototype.toByteArray = bnToByteArray;
	BigInteger.prototype.equals = bnEquals;
	BigInteger.prototype.min = bnMin;
	BigInteger.prototype.max = bnMax;
	BigInteger.prototype.and = bnAnd;
	BigInteger.prototype.or = bnOr;
	BigInteger.prototype.xor = bnXor;
	BigInteger.prototype.andNot = bnAndNot;
	BigInteger.prototype.not = bnNot;
	BigInteger.prototype.shiftLeft = bnShiftLeft;
	BigInteger.prototype.shiftRight = bnShiftRight;
	BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
	BigInteger.prototype.bitCount = bnBitCount;
	BigInteger.prototype.testBit = bnTestBit;
	BigInteger.prototype.setBit = bnSetBit;
	BigInteger.prototype.clearBit = bnClearBit;
	BigInteger.prototype.flipBit = bnFlipBit;
	BigInteger.prototype.add = bnAdd;
	BigInteger.prototype.subtract = bnSubtract;
	BigInteger.prototype.multiply = bnMultiply;
	BigInteger.prototype.divide = bnDivide;
	BigInteger.prototype.remainder = bnRemainder;
	BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
	BigInteger.prototype.modPow = bnModPow;
	BigInteger.prototype.modInverse = bnModInverse;
	BigInteger.prototype.pow = bnPow;
	BigInteger.prototype.gcd = bnGCD;
	BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
	
	// JSBN-specific extension
	BigInteger.prototype.square = bnSquare;
	
	// BigInteger interfaces not implemented in jsbn:
	
	// BigInteger(int signum, byte[] magnitude)
	// double doubleValue()
	// float floatValue()
	// int hashCode()
	// long longValue()
	// static BigInteger valueOf(long val)
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	// Depends on jsbn.js and rng.js
	
	// Version 1.1: support utf-8 encoding in pkcs1pad2
	
	// convert a (hex) string to a bignum object
	function parseBigInt(str,r) {
	  return new BigInteger(str,r);
	}
	
	function linebrk(s,n) {
	  var ret = "";
	  var i = 0;
	  while(i + n < s.length) {
	    ret += s.substring(i,i+n) + "\n";
	    i += n;
	  }
	  return ret + s.substring(i,s.length);
	}
	
	function byte2Hex(b) {
	  if(b < 0x10)
	    return "0" + b.toString(16);
	  else
	    return b.toString(16);
	}
	
	// PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint
	function pkcs1pad2(s,n) {
	  if(n < s.length + 11) { // TODO: fix for utf-8
	    alert("Message too long for RSA");
	    return null;
	  }
	  var ba = new Array();
	  var i = s.length - 1;
	  while(i >= 0 && n > 0) {
	    var c = s.charCodeAt(i--);
	    if(c < 128) { // encode using utf-8
	      ba[--n] = c;
	    }
	    else if((c > 127) && (c < 2048)) {
	      ba[--n] = (c & 63) | 128;
	      ba[--n] = (c >> 6) | 192;
	    }
	    else {
	      ba[--n] = (c & 63) | 128;
	      ba[--n] = ((c >> 6) & 63) | 128;
	      ba[--n] = (c >> 12) | 224;
	    }
	  }
	  ba[--n] = 0;
	  var rng = new SecureRandom();
	  var x = new Array();
	  while(n > 2) { // random non-zero pad
	    x[0] = 0;
	    while(x[0] == 0) rng.nextBytes(x);
	    ba[--n] = x[0];
	  }
	  ba[--n] = 2;
	  ba[--n] = 0;
	  return new BigInteger(ba);
	}
	
	// PKCS#1 (OAEP) mask generation function
	function oaep_mgf1_arr(seed, len, hash)
	{
	    var mask = '', i = 0;
	
	    while (mask.length < len)
	    {
	        mask += hash(String.fromCharCode.apply(String, seed.concat([
	                (i & 0xff000000) >> 24,
	                (i & 0x00ff0000) >> 16,
	                (i & 0x0000ff00) >> 8,
	                i & 0x000000ff])));
	        i += 1;
	    }
	
	    return mask;
	}
	
	var SHA1_SIZE = 20;
	
	// PKCS#1 (OAEP) pad input string s to n bytes, and return a bigint
	function oaep_pad(s, n, hash)
	{
	    if (s.length + 2 * SHA1_SIZE + 2 > n)
	    {
	        throw "Message too long for RSA";
	    }
	
	    var PS = '', i;
	
	    for (i = 0; i < n - s.length - 2 * SHA1_SIZE - 2; i += 1)
	    {
	        PS += '\x00';
	    }
	
	    var DB = rstr_sha1('') + PS + '\x01' + s;
	    var seed = new Array(SHA1_SIZE);
	    new SecureRandom().nextBytes(seed);
	    
	    var dbMask = oaep_mgf1_arr(seed, DB.length, hash || rstr_sha1);
	    var maskedDB = [];
	
	    for (i = 0; i < DB.length; i += 1)
	    {
	        maskedDB[i] = DB.charCodeAt(i) ^ dbMask.charCodeAt(i);
	    }
	
	    var seedMask = oaep_mgf1_arr(maskedDB, seed.length, rstr_sha1);
	    var maskedSeed = [0];
	
	    for (i = 0; i < seed.length; i += 1)
	    {
	        maskedSeed[i + 1] = seed[i] ^ seedMask.charCodeAt(i);
	    }
	
	    return new BigInteger(maskedSeed.concat(maskedDB));
	}
	
	// "empty" RSA key constructor
	function RSAKey() {
	  this.n = null;
	  this.e = 0;
	  this.d = null;
	  this.p = null;
	  this.q = null;
	  this.dmp1 = null;
	  this.dmq1 = null;
	  this.coeff = null;
	}
	
	// Set the public key fields N and e from hex strings
	function RSASetPublic(N,E) {
	  this.isPublic = true;
	  if (typeof N !== "string") 
	  {
	    this.n = N;
	    this.e = E;
	  }
	  else if(N != null && E != null && N.length > 0 && E.length > 0) {
	    this.n = parseBigInt(N,16);
	    this.e = parseInt(E,16);
	  }
	  else
	    alert("Invalid RSA public key");
	}
	
	// Perform raw public operation on "x": return x^e (mod n)
	function RSADoPublic(x) {
	  return x.modPowInt(this.e, this.n);
	}
	
	// Return the PKCS#1 RSA encryption of "text" as an even-length hex string
	function RSAEncrypt(text) {
	  var m = pkcs1pad2(text,(this.n.bitLength()+7)>>3);
	  if(m == null) return null;
	  var c = this.doPublic(m);
	  if(c == null) return null;
	  var h = c.toString(16);
	  if((h.length & 1) == 0) return h; else return "0" + h;
	}
	
	// Return the PKCS#1 OAEP RSA encryption of "text" as an even-length hex string
	function RSAEncryptOAEP(text, hash) {
	  var m = oaep_pad(text, (this.n.bitLength()+7)>>3, hash);
	  if(m == null) return null;
	  var c = this.doPublic(m);
	  if(c == null) return null;
	  var h = c.toString(16);
	  if((h.length & 1) == 0) return h; else return "0" + h;
	}
	
	// Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
	//function RSAEncryptB64(text) {
	//  var h = this.encrypt(text);
	//  if(h) return hex2b64(h); else return null;
	//}
	
	// protected
	RSAKey.prototype.doPublic = RSADoPublic;
	
	// public
	RSAKey.prototype.setPublic = RSASetPublic;
	RSAKey.prototype.encrypt = RSAEncrypt;
	RSAKey.prototype.encryptOAEP = RSAEncryptOAEP;
	//RSAKey.prototype.encrypt_b64 = RSAEncryptB64;
	
	RSAKey.prototype.type = "RSA";
	/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	 */
	// Depends on rsa.js and jsbn2.js
	
	// Version 1.1: support utf-8 decoding in pkcs1unpad2
	
	// Undo PKCS#1 (type 2, random) padding and, if valid, return the plaintext
	function pkcs1unpad2(d,n) {
	  var b = d.toByteArray();
	  var i = 0;
	  while(i < b.length && b[i] == 0) ++i;
	  if(b.length-i != n-1 || b[i] != 2)
	    return null;
	  ++i;
	  while(b[i] != 0)
	    if(++i >= b.length) return null;
	  var ret = "";
	  while(++i < b.length) {
	    var c = b[i] & 255;
	    if(c < 128) { // utf-8 decode
	      ret += String.fromCharCode(c);
	    }
	    else if((c > 191) && (c < 224)) {
	      ret += String.fromCharCode(((c & 31) << 6) | (b[i+1] & 63));
	      ++i;
	    }
	    else {
	      ret += String.fromCharCode(((c & 15) << 12) | ((b[i+1] & 63) << 6) | (b[i+2] & 63));
	      i += 2;
	    }
	  }
	  return ret;
	}
	
	// PKCS#1 (OAEP) mask generation function
	function oaep_mgf1_str(seed, len, hash)
	{
	    var mask = '', i = 0;
	
	    while (mask.length < len)
	    {
	        mask += hash(seed + String.fromCharCode.apply(String, [
	                (i & 0xff000000) >> 24,
	                (i & 0x00ff0000) >> 16,
	                (i & 0x0000ff00) >> 8,
	                i & 0x000000ff]));
	        i += 1;
	    }
	
	    return mask;
	}
	
	var SHA1_SIZE = 20;
	
	// Undo PKCS#1 (OAEP) padding and, if valid, return the plaintext
	function oaep_unpad(d, n, hash)
	{
	    d = d.toByteArray();
	
	    var i;
	
	    for (i = 0; i < d.length; i += 1)
	    {
	        d[i] &= 0xff;
	    }
	
	    while (d.length < n)
	    {
	        d.unshift(0);
	    }
	
	    d = String.fromCharCode.apply(String, d);
	
	    if (d.length < 2 * SHA1_SIZE + 2)
	    {
	        throw "Cipher too short";
	    }
	
	    var maskedSeed = d.substr(1, SHA1_SIZE)
	    var maskedDB = d.substr(SHA1_SIZE + 1);
	
	    var seedMask = oaep_mgf1_str(maskedDB, SHA1_SIZE, hash || rstr_sha1);
	    var seed = [], i;
	
	    for (i = 0; i < maskedSeed.length; i += 1)
	    {
	        seed[i] = maskedSeed.charCodeAt(i) ^ seedMask.charCodeAt(i);
	    }
	
	    var dbMask = oaep_mgf1_str(String.fromCharCode.apply(String, seed),
	                           d.length - SHA1_SIZE, rstr_sha1);
	
	    var DB = [];
	
	    for (i = 0; i < maskedDB.length; i += 1)
	    {
	        DB[i] = maskedDB.charCodeAt(i) ^ dbMask.charCodeAt(i);
	    }
	
	    DB = String.fromCharCode.apply(String, DB);
	
	    if (DB.substr(0, SHA1_SIZE) !== rstr_sha1(''))
	    {
	        throw "Hash mismatch";
	    }
	
	    DB = DB.substr(SHA1_SIZE);
	
	    var first_one = DB.indexOf('\x01');
	    var last_zero = (first_one != -1) ? DB.substr(0, first_one).lastIndexOf('\x00') : -1;
	
	    if (last_zero + 1 != first_one)
	    {
	        throw "Malformed data";
	    }
	
	    return DB.substr(first_one + 1);
	}
	
	// Set the private key fields N, e, and d from hex strings
	function RSASetPrivate(N,E,D) {
	  this.isPrivate = true;
	  if (typeof N !== "string")
	  {
	    this.n = N;
	    this.e = E;
	    this.d = D;
	  }
	  else if(N != null && E != null && N.length > 0 && E.length > 0) {
	    this.n = parseBigInt(N,16);
	    this.e = parseInt(E,16);
	    this.d = parseBigInt(D,16);
	  }
	  else
	    alert("Invalid RSA private key");
	}
	
	// Set the private key fields N, e, d and CRT params from hex strings
	function RSASetPrivateEx(N,E,D,P,Q,DP,DQ,C) {
	  this.isPrivate = true;
	  if (N == null) throw "RSASetPrivateEx N == null";
	  if (E == null) throw "RSASetPrivateEx E == null";
	  if (N.length == 0) throw "RSASetPrivateEx N.length == 0";
	  if (E.length == 0) throw "RSASetPrivateEx E.length == 0";
	
	  if (N != null && E != null && N.length > 0 && E.length > 0) {
	    this.n = parseBigInt(N,16);
	    this.e = parseInt(E,16);
	    this.d = parseBigInt(D,16);
	    this.p = parseBigInt(P,16);
	    this.q = parseBigInt(Q,16);
	    this.dmp1 = parseBigInt(DP,16);
	    this.dmq1 = parseBigInt(DQ,16);
	    this.coeff = parseBigInt(C,16);
	  } else {
	    alert("Invalid RSA private key in RSASetPrivateEx");
	  }
	}
	
	// Generate a new random private key B bits long, using public expt E
	function RSAGenerate(B,E) {
	  var rng = new SecureRandom();
	  var qs = B>>1;
	  this.e = parseInt(E,16);
	  var ee = new BigInteger(E,16);
	  for(;;) {
	    for(;;) {
	      this.p = new BigInteger(B-qs,1,rng);
	      if(this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) break;
	    }
	    for(;;) {
	      this.q = new BigInteger(qs,1,rng);
	      if(this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) break;
	    }
	    if(this.p.compareTo(this.q) <= 0) {
	      var t = this.p;
	      this.p = this.q;
	      this.q = t;
	    }
	    var p1 = this.p.subtract(BigInteger.ONE);	// p1 = p - 1
	    var q1 = this.q.subtract(BigInteger.ONE);	// q1 = q - 1
	    var phi = p1.multiply(q1);
	    if(phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
	      this.n = this.p.multiply(this.q);	// this.n = p * q
	      this.d = ee.modInverse(phi);	// this.d = 
	      this.dmp1 = this.d.mod(p1);	// this.dmp1 = d mod (p - 1)
	      this.dmq1 = this.d.mod(q1);	// this.dmq1 = d mod (q - 1)
	      this.coeff = this.q.modInverse(this.p);	// this.coeff = (q ^ -1) mod p
	      break;
	    }
	  }
	  this.isPrivate = true;
	}
	
	// Perform raw private operation on "x": return x^d (mod n)
	function RSADoPrivate(x) {
	  if(this.p == null || this.q == null)
	    return x.modPow(this.d, this.n);
	
	  // TODO: re-calculate any missing CRT params
	  var xp = x.mod(this.p).modPow(this.dmp1, this.p); // xp=cp?
	  var xq = x.mod(this.q).modPow(this.dmq1, this.q); // xq=cq?
	
	  while(xp.compareTo(xq) < 0)
	    xp = xp.add(this.p);
	  // NOTE:
	  // xp.subtract(xq) => cp -cq
	  // xp.subtract(xq).multiply(this.coeff).mod(this.p) => (cp - cq) * u mod p = h
	  // xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq) => cq + (h * q) = M
	  return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
	}
	
	// Return the PKCS#1 RSA decryption of "ctext".
	// "ctext" is an even-length hex string and the output is a plain string.
	function RSADecrypt(ctext) {
	  var c = parseBigInt(ctext, 16);
	  var m = this.doPrivate(c);
	  if(m == null) return null;
	  return pkcs1unpad2(m, (this.n.bitLength()+7)>>3);
	}
	
	// Return the PKCS#1 OAEP RSA decryption of "ctext".
	// "ctext" is an even-length hex string and the output is a plain string.
	function RSADecryptOAEP(ctext, hash) {
	  var c = parseBigInt(ctext, 16);
	  var m = this.doPrivate(c);
	  if(m == null) return null;
	  return oaep_unpad(m, (this.n.bitLength()+7)>>3, hash);
	}
	
	// Return the PKCS#1 RSA decryption of "ctext".
	// "ctext" is a Base64-encoded string and the output is a plain string.
	//function RSAB64Decrypt(ctext) {
	//  var h = b64tohex(ctext);
	//  if(h) return this.decrypt(h); else return null;
	//}
	
	// protected
	RSAKey.prototype.doPrivate = RSADoPrivate;
	
	// public
	RSAKey.prototype.setPrivate = RSASetPrivate;
	RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
	RSAKey.prototype.generate = RSAGenerate;
	RSAKey.prototype.decrypt = RSADecrypt;
	RSAKey.prototype.decryptOAEP = RSADecryptOAEP;
	//RSAKey.prototype.b64_decrypt = RSAB64Decrypt;
	/*! rsapem-1.1.js (c) 2012 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	//
	// rsa-pem.js - adding function for reading/writing PKCS#1 PEM private key
	//              to RSAKey class.
	//
	// version: 1.1.1 (2013-Apr-12)
	//
	// Copyright (c) 2010-2013 Kenji Urushima (kenji.urushima@gmail.com)
	//
	// This software is licensed under the terms of the MIT License.
	// http://kjur.github.com/jsrsasign/license/
	//
	// The above copyright and license notice shall be 
	// included in all copies or substantial portions of the Software.
	// 
	//
	// Depends on:
	//
	//
	//
	// _RSApem_pemToBase64(sPEM)
	//
	//   removing PEM header, PEM footer and space characters including
	//   new lines from PEM formatted RSA private key string.
	//
	
	/**
	 * @fileOverview
	 * @name rsapem-1.1.js
	 * @author Kenji Urushima kenji.urushima@gmail.com
	 * @version 1.1
	 * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
	 */
	function _rsapem_pemToBase64(sPEMPrivateKey) {
	  var s = sPEMPrivateKey;
	  s = s.replace("-----BEGIN RSA PRIVATE KEY-----", "");
	  s = s.replace("-----END RSA PRIVATE KEY-----", "");
	  s = s.replace(/[ \n]+/g, "");
	  return s;
	}
	
	function _rsapem_getPosArrayOfChildrenFromHex(hPrivateKey) {
	  var a = new Array();
	  var v1 = ASN1HEX.getStartPosOfV_AtObj(hPrivateKey, 0);
	  var n1 = ASN1HEX.getPosOfNextSibling_AtObj(hPrivateKey, v1);
	  var e1 = ASN1HEX.getPosOfNextSibling_AtObj(hPrivateKey, n1);
	  var d1 = ASN1HEX.getPosOfNextSibling_AtObj(hPrivateKey, e1);
	  var p1 = ASN1HEX.getPosOfNextSibling_AtObj(hPrivateKey, d1);
	  var q1 = ASN1HEX.getPosOfNextSibling_AtObj(hPrivateKey, p1);
	  var dp1 = ASN1HEX.getPosOfNextSibling_AtObj(hPrivateKey, q1);
	  var dq1 = ASN1HEX.getPosOfNextSibling_AtObj(hPrivateKey, dp1);
	  var co1 = ASN1HEX.getPosOfNextSibling_AtObj(hPrivateKey, dq1);
	  a.push(v1, n1, e1, d1, p1, q1, dp1, dq1, co1);
	  return a;
	}
	
	function _rsapem_getHexValueArrayOfChildrenFromHex(hPrivateKey) {
	  var posArray = _rsapem_getPosArrayOfChildrenFromHex(hPrivateKey);
	  var v =  ASN1HEX.getHexOfV_AtObj(hPrivateKey, posArray[0]);
	  var n =  ASN1HEX.getHexOfV_AtObj(hPrivateKey, posArray[1]);
	  var e =  ASN1HEX.getHexOfV_AtObj(hPrivateKey, posArray[2]);
	  var d =  ASN1HEX.getHexOfV_AtObj(hPrivateKey, posArray[3]);
	  var p =  ASN1HEX.getHexOfV_AtObj(hPrivateKey, posArray[4]);
	  var q =  ASN1HEX.getHexOfV_AtObj(hPrivateKey, posArray[5]);
	  var dp = ASN1HEX.getHexOfV_AtObj(hPrivateKey, posArray[6]);
	  var dq = ASN1HEX.getHexOfV_AtObj(hPrivateKey, posArray[7]);
	  var co = ASN1HEX.getHexOfV_AtObj(hPrivateKey, posArray[8]);
	  var a = new Array();
	  a.push(v, n, e, d, p, q, dp, dq, co);
	  return a;
	}
	
	/**
	 * read RSA private key from a ASN.1 hexadecimal string
	 * @name readPrivateKeyFromASN1HexString
	 * @memberOf RSAKey#
	 * @function
	 * @param {String} keyHex ASN.1 hexadecimal string of PKCS#1 private key.
	 * @since 1.1.1
	 */
	function _rsapem_readPrivateKeyFromASN1HexString(keyHex) {
	  var a = _rsapem_getHexValueArrayOfChildrenFromHex(keyHex);
	  this.setPrivateEx(a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);
	}
	
	/**
	 * read PKCS#1 private key from a string
	 * @name readPrivateKeyFromPEMString
	 * @memberOf RSAKey#
	 * @function
	 * @param {String} keyPEM string of PKCS#1 private key.
	 */
	function _rsapem_readPrivateKeyFromPEMString(keyPEM) {
	  var keyB64 = _rsapem_pemToBase64(keyPEM);
	  var keyHex = b64tohex(keyB64) // depends base64.js
	  var a = _rsapem_getHexValueArrayOfChildrenFromHex(keyHex);
	  this.setPrivateEx(a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);
	}
	
	RSAKey.prototype.readPrivateKeyFromPEMString = _rsapem_readPrivateKeyFromPEMString;
	RSAKey.prototype.readPrivateKeyFromASN1HexString = _rsapem_readPrivateKeyFromASN1HexString;
	/*! rsasign-1.2.7.js (c) 2012 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	var _RE_HEXDECONLY=new RegExp("");_RE_HEXDECONLY.compile("[^0-9a-f]","gi");function _rsasign_getHexPaddedDigestInfoForString(d,e,a){var b=function(f){return KJUR.crypto.Util.hashString(f,a)};var c=b(d);return KJUR.crypto.Util.getPaddedDigestInfoHex(c,a,e)}function _zeroPaddingOfSignature(e,d){var c="";var a=d/4-e.length;for(var b=0;b<a;b++){c=c+"0"}return c+e}function _rsasign_signString(d,a){var b=function(e){return KJUR.crypto.Util.hashString(e,a)};var c=b(d);return this.signWithMessageHash(c,a)}function _rsasign_signWithMessageHash(e,c){var f=KJUR.crypto.Util.getPaddedDigestInfoHex(e,c,this.n.bitLength());var b=parseBigInt(f,16);var d=this.doPrivate(b);var a=d.toString(16);return _zeroPaddingOfSignature(a,this.n.bitLength())}function _rsasign_signStringWithSHA1(a){return _rsasign_signString.call(this,a,"sha1")}function _rsasign_signStringWithSHA256(a){return _rsasign_signString.call(this,a,"sha256")}function pss_mgf1_str(c,a,e){var b="",d=0;while(b.length<a){b+=hextorstr(e(rstrtohex(c+String.fromCharCode.apply(String,[(d&4278190080)>>24,(d&16711680)>>16,(d&65280)>>8,d&255]))));d+=1}return b}function _rsasign_signStringPSS(e,a,d){var c=function(f){return KJUR.crypto.Util.hashHex(f,a)};var b=c(rstrtohex(e));if(d===undefined){d=-1}return this.signWithMessageHashPSS(b,a,d)}function _rsasign_signWithMessageHashPSS(l,a,k){var b=hextorstr(l);var g=b.length;var m=this.n.bitLength()-1;var c=Math.ceil(m/8);var d;var o=function(i){return KJUR.crypto.Util.hashHex(i,a)};if(k===-1||k===undefined){k=g}else{if(k===-2){k=c-g-2}else{if(k<-2){throw"invalid salt length"}}}if(c<(g+k+2)){throw"data too long"}var f="";if(k>0){f=new Array(k);new SecureRandom().nextBytes(f);f=String.fromCharCode.apply(String,f)}var n=hextorstr(o(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00"+b+f)));var j=[];for(d=0;d<c-k-g-2;d+=1){j[d]=0}var e=String.fromCharCode.apply(String,j)+"\x01"+f;var h=pss_mgf1_str(n,e.length,o);var q=[];for(d=0;d<e.length;d+=1){q[d]=e.charCodeAt(d)^h.charCodeAt(d)}var p=(65280>>(8*c-m))&255;q[0]&=~p;for(d=0;d<g;d++){q.push(n.charCodeAt(d))}q.push(188);return _zeroPaddingOfSignature(this.doPrivate(new BigInteger(q)).toString(16),this.n.bitLength())}function _rsasign_getDecryptSignatureBI(a,d,c){var b=new RSAKey();b.setPublic(d,c);var e=b.doPublic(a);return e}function _rsasign_getHexDigestInfoFromSig(a,c,b){var e=_rsasign_getDecryptSignatureBI(a,c,b);var d=e.toString(16).replace(/^1f+00/,"");return d}function _rsasign_getAlgNameAndHashFromHexDisgestInfo(f){for(var e in KJUR.crypto.Util.DIGESTINFOHEAD){var d=KJUR.crypto.Util.DIGESTINFOHEAD[e];var b=d.length;if(f.substring(0,b)==d){var c=[e,f.substring(b)];return c}}return[]}function _rsasign_verifySignatureWithArgs(f,b,g,j){var e=_rsasign_getHexDigestInfoFromSig(b,g,j);var h=_rsasign_getAlgNameAndHashFromHexDisgestInfo(e);if(h.length==0){return false}var d=h[0];var i=h[1];var a=function(k){return KJUR.crypto.Util.hashString(k,d)};var c=a(f);return(i==c)}function _rsasign_verifyHexSignatureForMessage(c,b){var d=parseBigInt(c,16);var a=_rsasign_verifySignatureWithArgs(b,d,this.n.toString(16),this.e.toString(16));return a}function _rsasign_verifyString(f,j){j=j.replace(_RE_HEXDECONLY,"");j=j.replace(/[ \n]+/g,"");var b=parseBigInt(j,16);if(b.bitLength()>this.n.bitLength()){return 0}var i=this.doPublic(b);var e=i.toString(16).replace(/^1f+00/,"");var g=_rsasign_getAlgNameAndHashFromHexDisgestInfo(e);if(g.length==0){return false}var d=g[0];var h=g[1];var a=function(k){return KJUR.crypto.Util.hashString(k,d)};var c=a(f);return(h==c)}function _rsasign_verifyWithMessageHash(e,a){a=a.replace(_RE_HEXDECONLY,"");a=a.replace(/[ \n]+/g,"");var b=parseBigInt(a,16);if(b.bitLength()>this.n.bitLength()){return 0}var h=this.doPublic(b);var g=h.toString(16).replace(/^1f+00/,"");var c=_rsasign_getAlgNameAndHashFromHexDisgestInfo(g);if(c.length==0){return false}var d=c[0];var f=c[1];return(f==e)}function _rsasign_verifyStringPSS(c,b,a,f){var e=function(g){return KJUR.crypto.Util.hashHex(g,a)};var d=e(rstrtohex(c));if(f===undefined){f=-1}return this.verifyWithMessageHashPSS(d,b,a,f)}function _rsasign_verifyWithMessageHashPSS(f,s,l,c){var k=new BigInteger(s,16);if(k.bitLength()>this.n.bitLength()){return false}var r=function(i){return KJUR.crypto.Util.hashHex(i,l)};var j=hextorstr(f);var h=j.length;var g=this.n.bitLength()-1;var m=Math.ceil(g/8);var q;if(c===-1||c===undefined){c=h}else{if(c===-2){c=m-h-2}else{if(c<-2){throw"invalid salt length"}}}if(m<(h+c+2)){throw"data too long"}var a=this.doPublic(k).toByteArray();for(q=0;q<a.length;q+=1){a[q]&=255}while(a.length<m){a.unshift(0)}if(a[m-1]!==188){throw"encoded message does not end in 0xbc"}a=String.fromCharCode.apply(String,a);var d=a.substr(0,m-h-1);var e=a.substr(d.length,h);var p=(65280>>(8*m-g))&255;if((d.charCodeAt(0)&p)!==0){throw"bits beyond keysize not zero"}var n=pss_mgf1_str(e,d.length,r);var o=[];for(q=0;q<d.length;q+=1){o[q]=d.charCodeAt(q)^n.charCodeAt(q)}o[0]&=~p;var b=m-h-c-2;for(q=0;q<b;q+=1){if(o[q]!==0){throw"leftmost octets not zero"}}if(o[b]!==1){throw"0x01 marker not found"}return e===hextorstr(r(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00"+j+String.fromCharCode.apply(String,o.slice(-c)))))}RSAKey.prototype.signWithMessageHash=_rsasign_signWithMessageHash;RSAKey.prototype.signString=_rsasign_signString;RSAKey.prototype.signStringWithSHA1=_rsasign_signStringWithSHA1;RSAKey.prototype.signStringWithSHA256=_rsasign_signStringWithSHA256;RSAKey.prototype.sign=_rsasign_signString;RSAKey.prototype.signWithSHA1=_rsasign_signStringWithSHA1;RSAKey.prototype.signWithSHA256=_rsasign_signStringWithSHA256;RSAKey.prototype.signWithMessageHashPSS=_rsasign_signWithMessageHashPSS;RSAKey.prototype.signStringPSS=_rsasign_signStringPSS;RSAKey.prototype.signPSS=_rsasign_signStringPSS;RSAKey.SALT_LEN_HLEN=-1;RSAKey.SALT_LEN_MAX=-2;RSAKey.prototype.verifyWithMessageHash=_rsasign_verifyWithMessageHash;RSAKey.prototype.verifyString=_rsasign_verifyString;RSAKey.prototype.verifyHexSignatureForMessage=_rsasign_verifyHexSignatureForMessage;RSAKey.prototype.verify=_rsasign_verifyString;RSAKey.prototype.verifyHexSignatureForByteArrayMessage=_rsasign_verifyHexSignatureForMessage;RSAKey.prototype.verifyWithMessageHashPSS=_rsasign_verifyWithMessageHashPSS;RSAKey.prototype.verifyStringPSS=_rsasign_verifyStringPSS;RSAKey.prototype.verifyPSS=_rsasign_verifyStringPSS;RSAKey.SALT_LEN_RECOVER=-2;
	/*! asn1hex-1.1.5.js (c) 2012-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	/*
	 * asn1hex.js - Hexadecimal represented ASN.1 string library
	 *
	 * Copyright (c) 2010-2014 Kenji Urushima (kenji.urushima@gmail.com)
	 *
	 * This software is licensed under the terms of the MIT License.
	 * http://kjur.github.com/jsrsasign/license/
	 *
	 * The above copyright and license notice shall be 
	 * included in all copies or substantial portions of the Software.
	 */
	
	/**
	 * @fileOverview
	 * @name asn1hex-1.1.js
	 * @author Kenji Urushima kenji.urushima@gmail.com
	 * @version asn1hex 1.1.5 (2014-May-25)
	 * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
	 */
	
	/*
	 * MEMO:
	 *   f('3082025b02...', 2) ... 82025b ... 3bytes
	 *   f('020100', 2) ... 01 ... 1byte
	 *   f('0203001...', 2) ... 03 ... 1byte
	 *   f('02818003...', 2) ... 8180 ... 2bytes
	 *   f('3080....0000', 2) ... 80 ... -1
	 *
	 *   Requirements:
	 *   - ASN.1 type octet length MUST be 1. 
	 *     (i.e. ASN.1 primitives like SET, SEQUENCE, INTEGER, OCTETSTRING ...)
	 */
	
	/**
	 * ASN.1 DER encoded hexadecimal string utility class
	 * @name ASN1HEX
	 * @class ASN.1 DER encoded hexadecimal string utility class
	 * @since jsrsasign 1.1
	 */
	var ASN1HEX = new function() {
	    /**
	     * get byte length for ASN.1 L(length) bytes
	     * @name getByteLengthOfL_AtObj
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} s hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} pos string index
	     * @return byte length for ASN.1 L(length) bytes
	     */
	    this.getByteLengthOfL_AtObj = function(s, pos) {
	        if (s.substring(pos + 2, pos + 3) != '8') return 1;
	        var i = parseInt(s.substring(pos + 3, pos + 4));
	        if (i == 0) return -1;          // length octet '80' indefinite length
	        if (0 < i && i < 10) return i + 1;      // including '8?' octet;
	        return -2;                              // malformed format
	    };
	
	    /**
	     * get hexadecimal string for ASN.1 L(length) bytes
	     * @name getHexOfL_AtObj
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} s hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} pos string index
	     * @return {String} hexadecimal string for ASN.1 L(length) bytes
	     */
	    this.getHexOfL_AtObj = function(s, pos) {
	        var len = this.getByteLengthOfL_AtObj(s, pos);
	        if (len < 1) return '';
	        return s.substring(pos + 2, pos + 2 + len * 2);
	    };
	
	    //   getting ASN.1 length value at the position 'idx' of
	    //   hexa decimal string 's'.
	    //
	    //   f('3082025b02...', 0) ... 82025b ... ???
	    //   f('020100', 0) ... 01 ... 1
	    //   f('0203001...', 0) ... 03 ... 3
	    //   f('02818003...', 0) ... 8180 ... 128
	    /**
	     * get integer value of ASN.1 length for ASN.1 data
	     * @name getIntOfL_AtObj
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} s hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} pos string index
	     * @return ASN.1 L(length) integer value
	     */
	    this.getIntOfL_AtObj = function(s, pos) {
	        var hLength = this.getHexOfL_AtObj(s, pos);
	        if (hLength == '') return -1;
	        var bi;
	        if (parseInt(hLength.substring(0, 1)) < 8) {
	            bi = new BigInteger(hLength, 16);
	        } else {
	            bi = new BigInteger(hLength.substring(2), 16);
	        }
	        return bi.intValue();
	    };
	
	    /**
	     * get ASN.1 value starting string position for ASN.1 object refered by index 'idx'.
	     * @name getStartPosOfV_AtObj
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} s hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} pos string index
	     */
	    this.getStartPosOfV_AtObj = function(s, pos) {
	        var l_len = this.getByteLengthOfL_AtObj(s, pos);
	        if (l_len < 0) return l_len;
	        return pos + (l_len + 1) * 2;
	    };
	
	    /**
	     * get hexadecimal string of ASN.1 V(value)
	     * @name getHexOfV_AtObj
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} s hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} pos string index
	     * @return {String} hexadecimal string of ASN.1 value.
	     */
	    this.getHexOfV_AtObj = function(s, pos) {
	        var pos1 = this.getStartPosOfV_AtObj(s, pos);
	        var len = this.getIntOfL_AtObj(s, pos);
	        return s.substring(pos1, pos1 + len * 2);
	    };
	
	    /**
	     * get hexadecimal string of ASN.1 TLV at
	     * @name getHexOfTLV_AtObj
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} s hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} pos string index
	     * @return {String} hexadecimal string of ASN.1 TLV.
	     * @since 1.1
	     */
	    this.getHexOfTLV_AtObj = function(s, pos) {
	        var hT = s.substr(pos, 2);
	        var hL = this.getHexOfL_AtObj(s, pos);
	        var hV = this.getHexOfV_AtObj(s, pos);
	        return hT + hL + hV;
	    };
	
	    /**
	     * get next sibling starting index for ASN.1 object string
	     * @name getPosOfNextSibling_AtObj
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} s hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} pos string index
	     * @return next sibling starting index for ASN.1 object string
	     */
	    this.getPosOfNextSibling_AtObj = function(s, pos) {
	        var pos1 = this.getStartPosOfV_AtObj(s, pos);
	        var len = this.getIntOfL_AtObj(s, pos);
	        return pos1 + len * 2;
	    };
	
	    /**
	     * get array of indexes of child ASN.1 objects
	     * @name getPosArrayOfChildren_AtObj
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} s hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} start string index of ASN.1 object
	     * @return {Array of Number} array of indexes for childen of ASN.1 objects
	     */
	    this.getPosArrayOfChildren_AtObj = function(h, pos) {
	        var a = new Array();
	        var p0 = this.getStartPosOfV_AtObj(h, pos);
	        a.push(p0);
	
	        var len = this.getIntOfL_AtObj(h, pos);
	        var p = p0;
	        var k = 0;
	        while (1) {
	            var pNext = this.getPosOfNextSibling_AtObj(h, p);
	            if (pNext == null || (pNext - p0  >= (len * 2))) break;
	            if (k >= 200) break;
	            
	            a.push(pNext);
	            p = pNext;
	            
	            k++;
	        }
	        
	        return a;
	    };
	
	    /**
	     * get string index of nth child object of ASN.1 object refered by h, idx
	     * @name getNthChildIndex_AtObj
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} h hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} idx start string index of ASN.1 object
	     * @param {Number} nth for child
	     * @return {Number} string index of nth child.
	     * @since 1.1
	     */
	    this.getNthChildIndex_AtObj = function(h, idx, nth) {
	        var a = this.getPosArrayOfChildren_AtObj(h, idx);
	        return a[nth];
	    };
	
	    // ========== decendant methods ==============================
	    /**
	     * get string index of nth child object of ASN.1 object refered by h, idx
	     * @name getDecendantIndexByNthList
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} h hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} currentIndex start string index of ASN.1 object
	     * @param {Array of Number} nthList array list of nth
	     * @return {Number} string index refered by nthList
	     * @since 1.1
	     * @example
	     * The "nthList" is a index list of structured ASN.1 object
	     * reference. Here is a sample structure and "nthList"s which
	     * refers each objects.
	     *
	     * SQUENCE               - 
	     *   SEQUENCE            - [0]
	     *     IA5STRING 000     - [0, 0]
	     *     UTF8STRING 001    - [0, 1]
	     *   SET                 - [1]
	     *     IA5STRING 010     - [1, 0]
	     *     UTF8STRING 011    - [1, 1]
	     */
	    this.getDecendantIndexByNthList = function(h, currentIndex, nthList) {
	        if (nthList.length == 0) {
	            return currentIndex;
	        }
	        var firstNth = nthList.shift();
	        var a = this.getPosArrayOfChildren_AtObj(h, currentIndex);
	        return this.getDecendantIndexByNthList(h, a[firstNth], nthList);
	    };
	
	    /**
	     * get hexadecimal string of ASN.1 TLV refered by current index and nth index list.
	     * @name getDecendantHexTLVByNthList
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} h hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} currentIndex start string index of ASN.1 object
	     * @param {Array of Number} nthList array list of nth
	     * @return {Number} hexadecimal string of ASN.1 TLV refered by nthList
	     * @since 1.1
	     */
	    this.getDecendantHexTLVByNthList = function(h, currentIndex, nthList) {
	        var idx = this.getDecendantIndexByNthList(h, currentIndex, nthList);
	        return this.getHexOfTLV_AtObj(h, idx);
	    };
	
	    /**
	     * get hexadecimal string of ASN.1 V refered by current index and nth index list.
	     * @name getDecendantHexVByNthList
	     * @memberOf ASN1HEX
	     * @function
	     * @param {String} h hexadecimal string of ASN.1 DER encoded data
	     * @param {Number} currentIndex start string index of ASN.1 object
	     * @param {Array of Number} nthList array list of nth
	     * @return {Number} hexadecimal string of ASN.1 V refered by nthList
	     * @since 1.1
	     */
	    this.getDecendantHexVByNthList = function(h, currentIndex, nthList) {
	        var idx = this.getDecendantIndexByNthList(h, currentIndex, nthList);
	        return this.getHexOfV_AtObj(h, idx);
	    };
	};
	
	/*
	 * @since asn1hex 1.1.4
	 */
	ASN1HEX.getVbyList = function(h, currentIndex, nthList, checkingTag) {
	    var idx = this.getDecendantIndexByNthList(h, currentIndex, nthList);
	    if (idx === undefined) {
	        throw "can't find nthList object";
	    }
	    if (checkingTag !== undefined) {
	        if (h.substr(idx, 2) != checkingTag) {
	            throw "checking tag doesn't match: " + 
	                h.substr(idx,2) + "!=" + checkingTag;
	        }
	    }
	    return this.getHexOfV_AtObj(h, idx);
	};
	
	/**
	 * get OID string from hexadecimal encoded value
	 * @name hextooidstr
	 * @memberOf ASN1HEX
	 * @function
	 * @param {String} hex hexadecmal string of ASN.1 DER encoded OID value
	 * @return {String} OID string (ex. '1.2.3.4.567')
	 * @since asn1hex 1.1.5
	 */
	ASN1HEX.hextooidstr = function(hex) {
	    var zeroPadding = function(s, len) {
	        if (s.length >= len) return s;
	        return new Array(len - s.length + 1).join('0') + s;
	    };
	
	    var a = [];
	
	    // a[0], a[1]
	    var hex0 = hex.substr(0, 2);
	    var i0 = parseInt(hex0, 16);
	    a[0] = new String(Math.floor(i0 / 40));
	    a[1] = new String(i0 % 40);
	
	    // a[2]..a[n]
	   var hex1 = hex.substr(2);
	    var b = [];
	    for (var i = 0; i < hex1.length / 2; i++) {
	    b.push(parseInt(hex1.substr(i * 2, 2), 16));
	    }
	    var c = [];
	    var cbin = "";
	    for (var i = 0; i < b.length; i++) {
	        if (b[i] & 0x80) {
	            cbin = cbin + zeroPadding((b[i] & 0x7f).toString(2), 7);
	        } else {
	            cbin = cbin + zeroPadding((b[i] & 0x7f).toString(2), 7);
	            c.push(new String(parseInt(cbin, 2)));
	            cbin = "";
	        }
	    }
	
	    var s = a.join(".");
	    if (c.length > 0) s = s + "." + c.join(".");
	    return s;
	};
	
	/*! x509-1.1.3.js (c) 2012-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	/* 
	 * x509.js - X509 class to read subject public key from certificate.
	 *
	 * Copyright (c) 2010-2014 Kenji Urushima (kenji.urushima@gmail.com)
	 *
	 * This software is licensed under the terms of the MIT License.
	 * http://kjur.github.com/jsrsasign/license
	 *
	 * The above copyright and license notice shall be 
	 * included in all copies or substantial portions of the Software.
	 */
	
	/**
	 * @fileOverview
	 * @name x509-1.1.js
	 * @author Kenji Urushima kenji.urushima@gmail.com
	 * @version x509 1.1.3 (2014-May-17)
	 * @since jsrsasign 1.x.x
	 * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
	 */
	
	/*
	 * Depends:
	 *   base64.js
	 *   rsa.js
	 *   asn1hex.js
	 */
	
	/**
	 * X.509 certificate class.<br/>
	 * @class X.509 certificate class
	 * @property {RSAKey} subjectPublicKeyRSA Tom Wu's RSAKey object
	 * @property {String} subjectPublicKeyRSA_hN hexadecimal string for modulus of RSA public key
	 * @property {String} subjectPublicKeyRSA_hE hexadecimal string for public exponent of RSA public key
	 * @property {String} hex hexacedimal string for X.509 certificate.
	 * @author Kenji Urushima
	 * @version 1.0.1 (08 May 2012)
	 * @see <a href="http://kjur.github.com/jsrsasigns/">'jwrsasign'(RSA Sign JavaScript Library) home page http://kjur.github.com/jsrsasign/</a>
	 */
	function X509() {
	    this.subjectPublicKeyRSA = null;
	    this.subjectPublicKeyRSA_hN = null;
	    this.subjectPublicKeyRSA_hE = null;
	    this.hex = null;
	
	    // ===== get basic fields from hex =====================================
	
	    /**
	     * get hexadecimal string of serialNumber field of certificate.<br/>
	     * @name getSerialNumberHex
	     * @memberOf X509#
	     * @function
	     */
	    this.getSerialNumberHex = function() {
	        return ASN1HEX.getDecendantHexVByNthList(this.hex, 0, [0, 1]);
	    };
	
	    /**
	     * get hexadecimal string of issuer field TLV of certificate.<br/>
	     * @name getIssuerHex
	     * @memberOf X509#
	     * @function
	     */
	    this.getIssuerHex = function() {
	        return ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [0, 3]);
	    };
	
	    /**
	     * get string of issuer field of certificate.<br/>
	     * @name getIssuerString
	     * @memberOf X509#
	     * @function
	     */
	    this.getIssuerString = function() {
	        return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [0, 3]));
	    };
	
	    /**
	     * get hexadecimal string of subject field of certificate.<br/>
	     * @name getSubjectHex
	     * @memberOf X509#
	     * @function
	     */
	    this.getSubjectHex = function() {
	        return ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [0, 5]);
	    };
	
	    /**
	     * get string of subject field of certificate.<br/>
	     * @name getSubjectString
	     * @memberOf X509#
	     * @function
	     */
	    this.getSubjectString = function() {
	        return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex, 0, [0, 5]));
	    };
	
	    /**
	     * get notBefore field string of certificate.<br/>
	     * @name getNotBefore
	     * @memberOf X509#
	     * @function
	     */
	    this.getNotBefore = function() {
	        var s = ASN1HEX.getDecendantHexVByNthList(this.hex, 0, [0, 4, 0]);
	        s = s.replace(/(..)/g, "%$1");
	        s = decodeURIComponent(s);
	        return s;
	    };
	
	    /**
	     * get notAfter field string of certificate.<br/>
	     * @name getNotAfter
	     * @memberOf X509#
	     * @function
	     */
	    this.getNotAfter = function() {
	        var s = ASN1HEX.getDecendantHexVByNthList(this.hex, 0, [0, 4, 1]);
	        s = s.replace(/(..)/g, "%$1");
	        s = decodeURIComponent(s);
	        return s;
	    };
	
	    // ===== read certificate public key ==========================
	
	    // ===== read certificate =====================================
	    /**
	     * read PEM formatted X.509 certificate from string.<br/>
	     * @name readCertPEM
	     * @memberOf X509#
	     * @function
	     * @param {String} sCertPEM string for PEM formatted X.509 certificate
	     */
	    this.readCertPEM = function(sCertPEM) {
	        var hCert = X509.pemToHex(sCertPEM);
	        var a = X509.getPublicKeyHexArrayFromCertHex(hCert);
	        var rsa = new RSAKey();
	        rsa.setPublic(a[0], a[1]);
	        this.subjectPublicKeyRSA = rsa;
	        this.subjectPublicKeyRSA_hN = a[0];
	        this.subjectPublicKeyRSA_hE = a[1];
	        this.hex = hCert;
	    };
	
	    this.readCertPEMWithoutRSAInit = function(sCertPEM) {
	        var hCert = X509.pemToHex(sCertPEM);
	        var a = X509.getPublicKeyHexArrayFromCertHex(hCert);
	        this.subjectPublicKeyRSA.setPublic(a[0], a[1]);
	        this.subjectPublicKeyRSA_hN = a[0];
	        this.subjectPublicKeyRSA_hE = a[1];
	        this.hex = hCert;
	    };
	};
	
	X509.pemToBase64 = function(sCertPEM) {
	    var s = sCertPEM;
	    s = s.replace("-----BEGIN CERTIFICATE-----", "");
	    s = s.replace("-----END CERTIFICATE-----", "");
	    s = s.replace(/[ \n]+/g, "");
	    return s;
	};
	
	X509.pemToHex = function(sCertPEM) {
	    var b64Cert = X509.pemToBase64(sCertPEM);
	    var hCert = b64tohex(b64Cert);
	    return hCert;
	};
	
	// NOTE: Without BITSTRING encapsulation.
	X509.getSubjectPublicKeyPosFromCertHex = function(hCert) {
	    var pInfo = X509.getSubjectPublicKeyInfoPosFromCertHex(hCert);
	    if (pInfo == -1) return -1;    
	    var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, pInfo); 
	    if (a.length != 2) return -1;
	    var pBitString = a[1];
	    if (hCert.substring(pBitString, pBitString + 2) != '03') return -1;
	    var pBitStringV = ASN1HEX.getStartPosOfV_AtObj(hCert, pBitString);
	    
	    if (hCert.substring(pBitStringV, pBitStringV + 2) != '00') return -1;
	    return pBitStringV + 2;
	};
	
	// NOTE: privateKeyUsagePeriod field of X509v2 not supported.
	// NOTE: v1 and v3 supported
	X509.getSubjectPublicKeyInfoPosFromCertHex = function(hCert) {
	    var pTbsCert = ASN1HEX.getStartPosOfV_AtObj(hCert, 0);
	    var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, pTbsCert); 
	    if (a.length < 1) return -1;
	    if (hCert.substring(a[0], a[0] + 10) == "a003020102") { // v3
	        if (a.length < 6) return -1;
	        return a[6];
	    } else {
	        if (a.length < 5) return -1;
	        return a[5];
	    }
	};
	
	X509.getPublicKeyHexArrayFromCertHex = function(hCert) {
	    var p = X509.getSubjectPublicKeyPosFromCertHex(hCert);
	    var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, p); 
	    if (a.length != 2) return [];
	    var hN = ASN1HEX.getHexOfV_AtObj(hCert, a[0]);
	    var hE = ASN1HEX.getHexOfV_AtObj(hCert, a[1]);
	    if (hN != null && hE != null) {
	        return [hN, hE];
	    } else {
	        return [];
	    }
	};
	
	X509.getHexTbsCertificateFromCert = function(hCert) {
	    var pTbsCert = ASN1HEX.getStartPosOfV_AtObj(hCert, 0);
	    return pTbsCert;
	};
	
	X509.getPublicKeyHexArrayFromCertPEM = function(sCertPEM) {
	    var hCert = X509.pemToHex(sCertPEM);
	    var a = X509.getPublicKeyHexArrayFromCertHex(hCert);
	    return a;
	};
	
	X509.hex2dn = function(hDN) {
	    var s = "";
	    var a = ASN1HEX.getPosArrayOfChildren_AtObj(hDN, 0);
	    for (var i = 0; i < a.length; i++) {
	        var hRDN = ASN1HEX.getHexOfTLV_AtObj(hDN, a[i]);
	        s = s + "/" + X509.hex2rdn(hRDN);
	    }
	    return s;
	};
	
	X509.hex2rdn = function(hRDN) {
	    var hType = ASN1HEX.getDecendantHexTLVByNthList(hRDN, 0, [0, 0]);
	    var hValue = ASN1HEX.getDecendantHexVByNthList(hRDN, 0, [0, 1]);
	    var type = "";
	    try { type = X509.DN_ATTRHEX[hType]; } catch (ex) { type = hType; }
	    hValue = hValue.replace(/(..)/g, "%$1");
	    var value = decodeURIComponent(hValue);
	    return type + "=" + value;
	};
	
	X509.DN_ATTRHEX = {
	    "0603550406": "C",
	    "060355040a": "O",
	    "060355040b": "OU",
	    "0603550403": "CN",
	    "0603550405": "SN",
	    "0603550408": "ST",
	    "0603550407": "L",
	};
	
	/**
	 * get RSAKey/ECDSA public key object from PEM certificate string
	 * @name getPublicKeyFromCertPEM
	 * @memberOf X509
	 * @function
	 * @param {String} sCertPEM PEM formatted RSA/ECDSA/DSA X.509 certificate
	 * @return returns RSAKey/KJUR.crypto.{ECDSA,DSA} object of public key
	 * @since x509 1.1.1
	 * @description
	 * NOTE: DSA is also supported since x509 1.1.2.
	 */
	X509.getPublicKeyFromCertPEM = function(sCertPEM) {
	    var info = X509.getPublicKeyInfoPropOfCertPEM(sCertPEM);
	
	    if (info.algoid == "2a864886f70d010101") { // RSA
	        var aRSA = KEYUTIL.parsePublicRawRSAKeyHex(info.keyhex);
	        var key = new RSAKey();
	        key.setPublic(aRSA.n, aRSA.e);
	        return key;
	    } else if (info.algoid == "2a8648ce3d0201") { // ECC
	        var curveName = KJUR.crypto.OID.oidhex2name[info.algparam];
	        var key = new KJUR.crypto.ECDSA({'curve': curveName, 'info': info.keyhex});
	        key.setPublicKeyHex(info.keyhex);
	        return key;
	    } else if (info.algoid == "2a8648ce380401") { // DSA 1.2.840.10040.4.1
	        var p = ASN1HEX.getVbyList(info.algparam, 0, [0], "02");
	        var q = ASN1HEX.getVbyList(info.algparam, 0, [1], "02");
	        var g = ASN1HEX.getVbyList(info.algparam, 0, [2], "02");
	        var y = ASN1HEX.getHexOfV_AtObj(info.keyhex, 0);
	        y = y.substr(2);
	        var key = new KJUR.crypto.DSA();
	        key.setPublic(new BigInteger(p, 16),
	                      new BigInteger(q, 16),
	                      new BigInteger(g, 16),
	                      new BigInteger(y, 16));
	        return key;
	    } else {
	        throw "unsupported key";
	    }
	};
	
	/**
	 * get public key information from PEM certificate
	 * @name getPublicKeyInfoPropOfCertPEM
	 * @memberOf X509
	 * @function
	 * @param {String} sCertPEM string of PEM formatted certificate
	 * @return {Hash} hash of information for public key
	 * @since x509 1.1.1
	 * @description
	 * Resulted associative array has following properties:
	 * <ul>
	 * <li>algoid - hexadecimal string of OID of asymmetric key algorithm</li>
	 * <li>algparam - hexadecimal string of OID of ECC curve name or null</li>
	 * <li>keyhex - hexadecimal string of key in the certificate</li>
	 * </ul>
	 * @since x509 1.1.1
	 */
	X509.getPublicKeyInfoPropOfCertPEM = function(sCertPEM) {
	    var result = {};
	    result.algparam = null;
	    var hCert = X509.pemToHex(sCertPEM);
	
	    // 1. Certificate ASN.1
	    var a1 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, 0); 
	    if (a1.length != 3)
	        throw "malformed X.509 certificate PEM (code:001)"; // not 3 item of seq Cert
	
	    // 2. tbsCertificate
	    if (hCert.substr(a1[0], 2) != "30")
	        throw "malformed X.509 certificate PEM (code:002)"; // tbsCert not seq 
	
	    var a2 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a1[0]); 
	
	    // 3. subjectPublicKeyInfo
	    if (a2.length < 7)
	        throw "malformed X.509 certificate PEM (code:003)"; // no subjPubKeyInfo
	
	    var a3 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a2[6]); 
	
	    if (a3.length != 2)
	        throw "malformed X.509 certificate PEM (code:004)"; // not AlgId and PubKey
	
	    // 4. AlgId
	    var a4 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a3[0]); 
	
	    if (a4.length != 2)
	        throw "malformed X.509 certificate PEM (code:005)"; // not 2 item in AlgId
	
	    result.algoid = ASN1HEX.getHexOfV_AtObj(hCert, a4[0]);
	
	    if (hCert.substr(a4[1], 2) == "06") { // EC
	        result.algparam = ASN1HEX.getHexOfV_AtObj(hCert, a4[1]);
	    } else if (hCert.substr(a4[1], 2) == "30") { // DSA
	        result.algparam = ASN1HEX.getHexOfTLV_AtObj(hCert, a4[1]);
	    }
	
	    // 5. Public Key Hex
	    if (hCert.substr(a3[1], 2) != "03")
	        throw "malformed X.509 certificate PEM (code:006)"; // not bitstring
	
	    var unusedBitAndKeyHex = ASN1HEX.getHexOfV_AtObj(hCert, a3[1]);
	    result.keyhex = unusedBitAndKeyHex.substr(2);
	
	    return result;
	};
	
	/*
	  X509.prototype.readCertPEM = _x509_readCertPEM;
	  X509.prototype.readCertPEMWithoutRSAInit = _x509_readCertPEMWithoutRSAInit;
	  X509.prototype.getSerialNumberHex = _x509_getSerialNumberHex;
	  X509.prototype.getIssuerHex = _x509_getIssuerHex;
	  X509.prototype.getSubjectHex = _x509_getSubjectHex;
	  X509.prototype.getIssuerString = _x509_getIssuerString;
	  X509.prototype.getSubjectString = _x509_getSubjectString;
	  X509.prototype.getNotBefore = _x509_getNotBefore;
	  X509.prototype.getNotAfter = _x509_getNotAfter;
	*/
	/*! crypto-1.1.5.js (c) 2013 Kenji Urushima | kjur.github.com/jsrsasign/license
	 */
	/*
	 * crypto.js - Cryptographic Algorithm Provider class
	 *
	 * Copyright (c) 2013 Kenji Urushima (kenji.urushima@gmail.com)
	 *
	 * This software is licensed under the terms of the MIT License.
	 * http://kjur.github.com/jsrsasign/license
	 *
	 * The above copyright and license notice shall be 
	 * included in all copies or substantial portions of the Software.
	 */
	
	/**
	 * @fileOverview
	 * @name crypto-1.1.js
	 * @author Kenji Urushima kenji.urushima@gmail.com
	 * @version 1.1.5 (2013-Oct-06)
	 * @since jsrsasign 2.2
	 * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
	 */
	
	/** 
	 * kjur's class library name space
	 * @name KJUR
	 * @namespace kjur's class library name space
	 */
	if (typeof KJUR == "undefined" || !KJUR) KJUR = {};
	/**
	 * kjur's cryptographic algorithm provider library name space
	 * <p>
	 * This namespace privides following crytpgrahic classes.
	 * <ul>
	 * <li>{@link KJUR.crypto.MessageDigest} - Java JCE(cryptograhic extension) style MessageDigest class</li>
	 * <li>{@link KJUR.crypto.Signature} - Java JCE(cryptograhic extension) style Signature class</li>
	 * <li>{@link KJUR.crypto.Util} - cryptographic utility functions and properties</li>
	 * </ul>
	 * NOTE: Please ignore method summary and document of this namespace. This caused by a bug of jsdoc2.
	 * </p>
	 * @name KJUR.crypto
	 * @namespace
	 */
	if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) KJUR.crypto = {};
	
	/**
	 * static object for cryptographic function utilities
	 * @name KJUR.crypto.Util
	 * @class static object for cryptographic function utilities
	 * @property {Array} DIGESTINFOHEAD PKCS#1 DigestInfo heading hexadecimal bytes for each hash algorithms
	 * @property {Array} DEFAULTPROVIDER associative array of default provider name for each hash and signature algorithms
	 * @description
	 */
	KJUR.crypto.Util = new function() {
	    this.DIGESTINFOHEAD = {
		'sha1':      "3021300906052b0e03021a05000414",
	        'sha224':    "302d300d06096086480165030402040500041c",
		'sha256':    "3031300d060960864801650304020105000420",
		'sha384':    "3041300d060960864801650304020205000430",
		'sha512':    "3051300d060960864801650304020305000440",
		'md2':       "3020300c06082a864886f70d020205000410",
		'md5':       "3020300c06082a864886f70d020505000410",
		'ripemd160': "3021300906052b2403020105000414",
	    };
	
	    /*
	     * @since crypto 1.1.1
	     */
	    this.DEFAULTPROVIDER = {
		'md5':			'cryptojs',
		'sha1':			'cryptojs',
		'sha224':		'cryptojs',
		'sha256':		'cryptojs',
		'sha384':		'cryptojs',
		'sha512':		'cryptojs',
		'ripemd160':		'cryptojs',
		'hmacmd5':		'cryptojs',
		'hmacsha1':		'cryptojs',
		'hmacsha224':		'cryptojs',
		'hmacsha256':		'cryptojs',
		'hmacsha384':		'cryptojs',
		'hmacsha512':		'cryptojs',
		'hmacripemd160':	'cryptojs',
	
		'MD5withRSA':		'cryptojs/jsrsa',
		'SHA1withRSA':		'cryptojs/jsrsa',
		'SHA224withRSA':	'cryptojs/jsrsa',
		'SHA256withRSA':	'cryptojs/jsrsa',
		'SHA384withRSA':	'cryptojs/jsrsa',
		'SHA512withRSA':	'cryptojs/jsrsa',
		'RIPEMD160withRSA':	'cryptojs/jsrsa',
	
		'MD5withECDSA':		'cryptojs/jsrsa',
		'SHA1withECDSA':	'cryptojs/jsrsa',
		'SHA224withECDSA':	'cryptojs/jsrsa',
		'SHA256withECDSA':	'cryptojs/jsrsa',
		'SHA384withECDSA':	'cryptojs/jsrsa',
		'SHA512withECDSA':	'cryptojs/jsrsa',
		'RIPEMD160withECDSA':	'cryptojs/jsrsa',
	
		'SHA1withDSA':		'cryptojs/jsrsa',
		'SHA224withDSA':	'cryptojs/jsrsa',
		'SHA256withDSA':	'cryptojs/jsrsa',
	
		'MD5withRSAandMGF1':		'cryptojs/jsrsa',
		'SHA1withRSAandMGF1':		'cryptojs/jsrsa',
		'SHA224withRSAandMGF1':		'cryptojs/jsrsa',
		'SHA256withRSAandMGF1':		'cryptojs/jsrsa',
		'SHA384withRSAandMGF1':		'cryptojs/jsrsa',
		'SHA512withRSAandMGF1':		'cryptojs/jsrsa',
		'RIPEMD160withRSAandMGF1':	'cryptojs/jsrsa',
	    };
	
	    /*
	     * @since crypto 1.1.2
	     */
	    this.CRYPTOJSMESSAGEDIGESTNAME = {
		'md5':		'CryptoJS.algo.MD5',
		'sha1':		'CryptoJS.algo.SHA1',
		'sha224':	'CryptoJS.algo.SHA224',
		'sha256':	'CryptoJS.algo.SHA256',
		'sha384':	'CryptoJS.algo.SHA384',
		'sha512':	'CryptoJS.algo.SHA512',
		'ripemd160':	'CryptoJS.algo.RIPEMD160'
	    };
	
	    /**
	     * get hexadecimal DigestInfo
	     * @name getDigestInfoHex
	     * @memberOf KJUR.crypto.Util
	     * @function
	     * @param {String} hHash hexadecimal hash value
	     * @param {String} alg hash algorithm name (ex. 'sha1')
	     * @return {String} hexadecimal string DigestInfo ASN.1 structure
	     */
	    this.getDigestInfoHex = function(hHash, alg) {
		if (typeof this.DIGESTINFOHEAD[alg] == "undefined")
		    throw "alg not supported in Util.DIGESTINFOHEAD: " + alg;
		return this.DIGESTINFOHEAD[alg] + hHash;
	    };
	
	    /**
	     * get PKCS#1 padded hexadecimal DigestInfo
	     * @name getPaddedDigestInfoHex
	     * @memberOf KJUR.crypto.Util
	     * @function
	     * @param {String} hHash hexadecimal hash value of message to be signed
	     * @param {String} alg hash algorithm name (ex. 'sha1')
	     * @param {Integer} keySize key bit length (ex. 1024)
	     * @return {String} hexadecimal string of PKCS#1 padded DigestInfo
	     */
	    this.getPaddedDigestInfoHex = function(hHash, alg, keySize) {
		var hDigestInfo = this.getDigestInfoHex(hHash, alg);
		var pmStrLen = keySize / 4; // minimum PM length
	
		if (hDigestInfo.length + 22 > pmStrLen) // len(0001+ff(*8)+00+hDigestInfo)=22
		    throw "key is too short for SigAlg: keylen=" + keySize + "," + alg;
	
		var hHead = "0001";
		var hTail = "00" + hDigestInfo;
		var hMid = "";
		var fLen = pmStrLen - hHead.length - hTail.length;
		for (var i = 0; i < fLen; i += 2) {
		    hMid += "ff";
		}
		var hPaddedMessage = hHead + hMid + hTail;
		return hPaddedMessage;
	    };
	
	    /**
	     * get hexadecimal hash of string with specified algorithm
	     * @name hashString
	     * @memberOf KJUR.crypto.Util
	     * @function
	     * @param {String} s input string to be hashed
	     * @param {String} alg hash algorithm name
	     * @return {String} hexadecimal string of hash value
	     * @since 1.1.1
	     */
	    this.hashString = function(s, alg) {
	        var md = new KJUR.crypto.MessageDigest({'alg': alg});
	        return md.digestString(s);
	    };
	
	    /**
	     * get hexadecimal hash of hexadecimal string with specified algorithm
	     * @name hashHex
	     * @memberOf KJUR.crypto.Util
	     * @function
	     * @param {String} sHex input hexadecimal string to be hashed
	     * @param {String} alg hash algorithm name
	     * @return {String} hexadecimal string of hash value
	     * @since 1.1.1
	     */
	    this.hashHex = function(sHex, alg) {
	        var md = new KJUR.crypto.MessageDigest({'alg': alg});
	        return md.digestHex(sHex);
	    };
	
	    /**
	     * get hexadecimal SHA1 hash of string
	     * @name sha1
	     * @memberOf KJUR.crypto.Util
	     * @function
	     * @param {String} s input string to be hashed
	     * @return {String} hexadecimal string of hash value
	     * @since 1.0.3
	     */
	    this.sha1 = function(s) {
	        var md = new KJUR.crypto.MessageDigest({'alg':'sha1', 'prov':'cryptojs'});
	        return md.digestString(s);
	    };
	
	    /**
	     * get hexadecimal SHA256 hash of string
	     * @name sha256
	     * @memberOf KJUR.crypto.Util
	     * @function
	     * @param {String} s input string to be hashed
	     * @return {String} hexadecimal string of hash value
	     * @since 1.0.3
	     */
	    this.sha256 = function(s) {
	        var md = new KJUR.crypto.MessageDigest({'alg':'sha256', 'prov':'cryptojs'});
	        return md.digestString(s);
	    };
	
	    this.sha256Hex = function(s) {
	        var md = new KJUR.crypto.MessageDigest({'alg':'sha256', 'prov':'cryptojs'});
	        return md.digestHex(s);
	    };
	
	    /**
	     * get hexadecimal SHA512 hash of string
	     * @name sha512
	     * @memberOf KJUR.crypto.Util
	     * @function
	     * @param {String} s input string to be hashed
	     * @return {String} hexadecimal string of hash value
	     * @since 1.0.3
	     */
	    this.sha512 = function(s) {
	        var md = new KJUR.crypto.MessageDigest({'alg':'sha512', 'prov':'cryptojs'});
	        return md.digestString(s);
	    };
	
	    this.sha512Hex = function(s) {
	        var md = new KJUR.crypto.MessageDigest({'alg':'sha512', 'prov':'cryptojs'});
	        return md.digestHex(s);
	    };
	
	    /**
	     * get hexadecimal MD5 hash of string
	     * @name md5
	     * @memberOf KJUR.crypto.Util
	     * @function
	     * @param {String} s input string to be hashed
	     * @return {String} hexadecimal string of hash value
	     * @since 1.0.3
	     */
	    this.md5 = function(s) {
	        var md = new KJUR.crypto.MessageDigest({'alg':'md5', 'prov':'cryptojs'});
	        return md.digestString(s);
	    };
	
	    /**
	     * get hexadecimal RIPEMD160 hash of string
	     * @name ripemd160
	     * @memberOf KJUR.crypto.Util
	     * @function
	     * @param {String} s input string to be hashed
	     * @return {String} hexadecimal string of hash value
	     * @since 1.0.3
	     */
	    this.ripemd160 = function(s) {
	        var md = new KJUR.crypto.MessageDigest({'alg':'ripemd160', 'prov':'cryptojs'});
	        return md.digestString(s);
	    };
	
	    /*
	     * @since 1.1.2
	     */
	    this.getCryptoJSMDByName = function(s) {
		
	    };
	};
	
	/**
	 * MessageDigest class which is very similar to java.security.MessageDigest class
	 * @name KJUR.crypto.MessageDigest
	 * @class MessageDigest class which is very similar to java.security.MessageDigest class
	 * @param {Array} params parameters for constructor
	 * @description
	 * <br/>
	 * Currently this supports following algorithm and providers combination:
	 * <ul>
	 * <li>md5 - cryptojs</li>
	 * <li>sha1 - cryptojs</li>
	 * <li>sha224 - cryptojs</li>
	 * <li>sha256 - cryptojs</li>
	 * <li>sha384 - cryptojs</li>
	 * <li>sha512 - cryptojs</li>
	 * <li>ripemd160 - cryptojs</li>
	 * <li>sha256 - sjcl (NEW from crypto.js 1.0.4)</li>
	 * </ul>
	 * @example
	 * // CryptoJS provider sample
	 * &lt;script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/core.js"&gt;&lt;/script&gt;
	 * &lt;script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/sha1.js"&gt;&lt;/script&gt;
	 * &lt;script src="crypto-1.0.js"&gt;&lt;/script&gt;
	 * var md = new KJUR.crypto.MessageDigest({alg: "sha1", prov: "cryptojs"});
	 * md.updateString('aaa')
	 * var mdHex = md.digest()
	 *
	 * // SJCL(Stanford JavaScript Crypto Library) provider sample
	 * &lt;script src="http://bitwiseshiftleft.github.io/sjcl/sjcl.js"&gt;&lt;/script&gt;
	 * &lt;script src="crypto-1.0.js"&gt;&lt;/script&gt;
	 * var md = new KJUR.crypto.MessageDigest({alg: "sha256", prov: "sjcl"}); // sjcl supports sha256 only
	 * md.updateString('aaa')
	 * var mdHex = md.digest()
	 */
	KJUR.crypto.MessageDigest = function(params) {
	    var md = null;
	    var algName = null;
	    var provName = null;
	
	    /**
	     * set hash algorithm and provider
	     * @name setAlgAndProvider
	     * @memberOf KJUR.crypto.MessageDigest
	     * @function
	     * @param {String} alg hash algorithm name
	     * @param {String} prov provider name
	     * @description
	     * @example
	     * // for SHA1
	     * md.setAlgAndProvider('sha1', 'cryptojs');
	     * // for RIPEMD160
	     * md.setAlgAndProvider('ripemd160', 'cryptojs');
	     */
	    this.setAlgAndProvider = function(alg, prov) {
		if (alg != null && prov === undefined) prov = KJUR.crypto.Util.DEFAULTPROVIDER[alg];
	
		// for cryptojs
		if (':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(alg) != -1 &&
		    prov == 'cryptojs') {
		    try {
			this.md = eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[alg]).create();
		    } catch (ex) {
			throw "setAlgAndProvider hash alg set fail alg=" + alg + "/" + ex;
		    }
		    this.updateString = function(str) {
			this.md.update(str);
		    };
		    this.updateHex = function(hex) {
			var wHex = CryptoJS.enc.Hex.parse(hex);
			this.md.update(wHex);
		    };
		    this.digest = function() {
			var hash = this.md.finalize();
			return hash.toString(CryptoJS.enc.Hex);
		    };
		    this.digestString = function(str) {
			this.updateString(str);
			return this.digest();
		    };
		    this.digestHex = function(hex) {
			this.updateHex(hex);
			return this.digest();
		    };
		}
		if (':sha256:'.indexOf(alg) != -1 &&
		    prov == 'sjcl') {
		    try {
			this.md = new sjcl.hash.sha256();
		    } catch (ex) {
			throw "setAlgAndProvider hash alg set fail alg=" + alg + "/" + ex;
		    }
		    this.updateString = function(str) {
			this.md.update(str);
		    };
		    this.updateHex = function(hex) {
			var baHex = sjcl.codec.hex.toBits(hex);
			this.md.update(baHex);
		    };
		    this.digest = function() {
			var hash = this.md.finalize();
			return sjcl.codec.hex.fromBits(hash);
		    };
		    this.digestString = function(str) {
			this.updateString(str);
			return this.digest();
		    };
		    this.digestHex = function(hex) {
			this.updateHex(hex);
			return this.digest();
		    };
		}
	    };
	
	    /**
	     * update digest by specified string
	     * @name updateString
	     * @memberOf KJUR.crypto.MessageDigest
	     * @function
	     * @param {String} str string to update
	     * @description
	     * @example
	     * md.updateString('New York');
	     */
	    this.updateString = function(str) {
		throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
	    };
	
	    /**
	     * update digest by specified hexadecimal string
	     * @name updateHex
	     * @memberOf KJUR.crypto.MessageDigest
	     * @function
	     * @param {String} hex hexadecimal string to update
	     * @description
	     * @example
	     * md.updateHex('0afe36');
	     */
	    this.updateHex = function(hex) {
		throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
	    };
	
	    /**
	     * completes hash calculation and returns hash result
	     * @name digest
	     * @memberOf KJUR.crypto.MessageDigest
	     * @function
	     * @description
	     * @example
	     * md.digest()
	     */
	    this.digest = function() {
		throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
	    };
	
	    /**
	     * performs final update on the digest using string, then completes the digest computation
	     * @name digestString
	     * @memberOf KJUR.crypto.MessageDigest
	     * @function
	     * @param {String} str string to final update
	     * @description
	     * @example
	     * md.digestString('aaa')
	     */
	    this.digestString = function(str) {
		throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
	    };
	
	    /**
	     * performs final update on the digest using hexadecimal string, then completes the digest computation
	     * @name digestHex
	     * @memberOf KJUR.crypto.MessageDigest
	     * @function
	     * @param {String} hex hexadecimal string to final update
	     * @description
	     * @example
	     * md.digestHex('0f2abd')
	     */
	    this.digestHex = function(hex) {
		throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
	    };
	
	    if (params !== undefined) {
		if (params['alg'] !== undefined) {
		    this.algName = params['alg'];
		    if (params['prov'] === undefined)
			this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName];
		    this.setAlgAndProvider(this.algName, this.provName);
		}
	    }
	};
	
	/**
	 * Mac(Message Authentication Code) class which is very similar to java.security.Mac class 
	 * @name KJUR.crypto.Mac
	 * @class Mac class which is very similar to java.security.Mac class
	 * @param {Array} params parameters for constructor
	 * @description
	 * <br/>
	 * Currently this supports following algorithm and providers combination:
	 * <ul>
	 * <li>hmacmd5 - cryptojs</li>
	 * <li>hmacsha1 - cryptojs</li>
	 * <li>hmacsha224 - cryptojs</li>
	 * <li>hmacsha256 - cryptojs</li>
	 * <li>hmacsha384 - cryptojs</li>
	 * <li>hmacsha512 - cryptojs</li>
	 * </ul>
	 * NOTE: HmacSHA224 and HmacSHA384 issue was fixed since jsrsasign 4.1.4.
	 * Please use 'ext/cryptojs-312-core-fix*.js' instead of 'core.js' of original CryptoJS
	 * to avoid those issue.
	 * @example
	 * var mac = new KJUR.crypto.Mac({alg: "HmacSHA1", prov: "cryptojs", "pass": "pass"});
	 * mac.updateString('aaa')
	 * var macHex = md.doFinal()
	 */
	KJUR.crypto.Mac = function(params) {
	    var mac = null;
	    var pass = null;
	    var algName = null;
	    var provName = null;
	    var algProv = null;
	
	    this.setAlgAndProvider = function(alg, prov) {
		if (alg == null) alg = "hmacsha1";
	
		alg = alg.toLowerCase();
	        if (alg.substr(0, 4) != "hmac") {
		    throw "setAlgAndProvider unsupported HMAC alg: " + alg;
		}
	
		if (prov === undefined) prov = KJUR.crypto.Util.DEFAULTPROVIDER[alg];
		this.algProv = alg + "/" + prov;
	
		var hashAlg = alg.substr(4);
	
		// for cryptojs
		if (':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(hashAlg) != -1 &&
		    prov == 'cryptojs') {
		    try {
			var mdObj = eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[hashAlg]);
			this.mac = CryptoJS.algo.HMAC.create(mdObj, this.pass);
		    } catch (ex) {
			throw "setAlgAndProvider hash alg set fail hashAlg=" + hashAlg + "/" + ex;
		    }
		    this.updateString = function(str) {
			this.mac.update(str);
		    };
		    this.updateHex = function(hex) {
			var wHex = CryptoJS.enc.Hex.parse(hex);
			this.mac.update(wHex);
		    };
		    this.doFinal = function() {
			var hash = this.mac.finalize();
			return hash.toString(CryptoJS.enc.Hex);
		    };
		    this.doFinalString = function(str) {
			this.updateString(str);
			return this.doFinal();
		    };
		    this.doFinalHex = function(hex) {
			this.updateHex(hex);
			return this.doFinal();
		    };
		}
	    };
	
	    /**
	     * update digest by specified string
	     * @name updateString
	     * @memberOf KJUR.crypto.Mac
	     * @function
	     * @param {String} str string to update
	     * @description
	     * @example
	     * md.updateString('New York');
	     */
	    this.updateString = function(str) {
		throw "updateString(str) not supported for this alg/prov: " + this.algProv;
	    };
	
	    /**
	     * update digest by specified hexadecimal string
	     * @name updateHex
	     * @memberOf KJUR.crypto.Mac
	     * @function
	     * @param {String} hex hexadecimal string to update
	     * @description
	     * @example
	     * md.updateHex('0afe36');
	     */
	    this.updateHex = function(hex) {
		throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
	    };
	
	    /**
	     * completes hash calculation and returns hash result
	     * @name doFinal
	     * @memberOf KJUR.crypto.Mac
	     * @function
	     * @description
	     * @example
	     * md.digest()
	     */
	    this.doFinal = function() {
		throw "digest() not supported for this alg/prov: " + this.algProv;
	    };
	
	    /**
	     * performs final update on the digest using string, then completes the digest computation
	     * @name doFinalString
	     * @memberOf KJUR.crypto.Mac
	     * @function
	     * @param {String} str string to final update
	     * @description
	     * @example
	     * md.digestString('aaa')
	     */
	    this.doFinalString = function(str) {
		throw "digestString(str) not supported for this alg/prov: " + this.algProv;
	    };
	
	    /**
	     * performs final update on the digest using hexadecimal string, 
	     * then completes the digest computation
	     * @name doFinalHex
	     * @memberOf KJUR.crypto.Mac
	     * @function
	     * @param {String} hex hexadecimal string to final update
	     * @description
	     * @example
	     * md.digestHex('0f2abd')
	     */
	    this.doFinalHex = function(hex) {
		throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
	    };
	
	    if (params !== undefined) {
		if (params['pass'] !== undefined) {
		    this.pass = params['pass'];
		}
		if (params['alg'] !== undefined) {
		    this.algName = params['alg'];
		    if (params['prov'] === undefined)
			this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName];
		    this.setAlgAndProvider(this.algName, this.provName);
		}
	    }
	};
	
	/**
	 * Signature class which is very similar to java.security.Signature class
	 * @name KJUR.crypto.Signature
	 * @class Signature class which is very similar to java.security.Signature class
	 * @param {Array} params parameters for constructor
	 * @property {String} state Current state of this signature object whether 'SIGN', 'VERIFY' or null
	 * @description
	 * <br/>
	 * As for params of constructor's argument, it can be specify following attributes:
	 * <ul>
	 * <li>alg - signature algorithm name (ex. {MD5,SHA1,SHA224,SHA256,SHA384,SHA512,RIPEMD160}with{RSA,ECDSA,DSA})</li>
	 * <li>provider - currently 'cryptojs/jsrsa' only</li>
	 * </ul>
	 * <h4>SUPPORTED ALGORITHMS AND PROVIDERS</h4>
	 * This Signature class supports following signature algorithm and provider names:
	 * <ul>
	 * <li>MD5withRSA - cryptojs/jsrsa</li>
	 * <li>SHA1withRSA - cryptojs/jsrsa</li>
	 * <li>SHA224withRSA - cryptojs/jsrsa</li>
	 * <li>SHA256withRSA - cryptojs/jsrsa</li>
	 * <li>SHA384withRSA - cryptojs/jsrsa</li>
	 * <li>SHA512withRSA - cryptojs/jsrsa</li>
	 * <li>RIPEMD160withRSA - cryptojs/jsrsa</li>
	 * <li>MD5withECDSA - cryptojs/jsrsa</li>
	 * <li>SHA1withECDSA - cryptojs/jsrsa</li>
	 * <li>SHA224withECDSA - cryptojs/jsrsa</li>
	 * <li>SHA256withECDSA - cryptojs/jsrsa</li>
	 * <li>SHA384withECDSA - cryptojs/jsrsa</li>
	 * <li>SHA512withECDSA - cryptojs/jsrsa</li>
	 * <li>RIPEMD160withECDSA - cryptojs/jsrsa</li>
	 * <li>MD5withRSAandMGF1 - cryptojs/jsrsa</li>
	 * <li>SHA1withRSAandMGF1 - cryptojs/jsrsa</li>
	 * <li>SHA224withRSAandMGF1 - cryptojs/jsrsa</li>
	 * <li>SHA256withRSAandMGF1 - cryptojs/jsrsa</li>
	 * <li>SHA384withRSAandMGF1 - cryptojs/jsrsa</li>
	 * <li>SHA512withRSAandMGF1 - cryptojs/jsrsa</li>
	 * <li>RIPEMD160withRSAandMGF1 - cryptojs/jsrsa</li>
	 * <li>SHA1withDSA - cryptojs/jsrsa</li>
	 * <li>SHA224withDSA - cryptojs/jsrsa</li>
	 * <li>SHA256withDSA - cryptojs/jsrsa</li>
	 * </ul>
	 * Here are supported elliptic cryptographic curve names and their aliases for ECDSA:
	 * <ul>
	 * <li>secp256k1</li>
	 * <li>secp256r1, NIST P-256, P-256, prime256v1</li>
	 * <li>secp384r1, NIST P-384, P-384</li>
	 * </ul>
	 * NOTE1: DSA signing algorithm is also supported since crypto 1.1.5.
	 * <h4>EXAMPLES</h4>
	 * @example
	 * // RSA signature generation
	 * var sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA"});
	 * sig.init(prvKeyPEM);
	 * sig.updateString('aaa');
	 * var hSigVal = sig.sign();
	 *
	 * // DSA signature validation
	 * var sig2 = new KJUR.crypto.Signature({"alg": "SHA1withDSA"});
	 * sig2.init(certPEM);
	 * sig.updateString('aaa');
	 * var isValid = sig2.verify(hSigVal);
	 * 
	 * // ECDSA signing
	 * var sig = new KJUR.crypto.Signature({'alg':'SHA1withECDSA'});
	 * sig.init(prvKeyPEM);
	 * sig.updateString('aaa');
	 * var sigValueHex = sig.sign();
	 *
	 * // ECDSA verifying
	 * var sig2 = new KJUR.crypto.Signature({'alg':'SHA1withECDSA'});
	 * sig.init(certPEM);
	 * sig.updateString('aaa');
	 * var isValid = sig.verify(sigValueHex);
	 */
	KJUR.crypto.Signature = function(params) {
	    var prvKey = null; // RSAKey/KJUR.crypto.{ECDSA,DSA} object for signing
	    var pubKey = null; // RSAKey/KJUR.crypto.{ECDSA,DSA} object for verifying
	
	    var md = null; // KJUR.crypto.MessageDigest object
	    var sig = null;
	    var algName = null;
	    var provName = null;
	    var algProvName = null;
	    var mdAlgName = null;
	    var pubkeyAlgName = null;	// rsa,ecdsa,rsaandmgf1(=rsapss)
	    var state = null;
	    var pssSaltLen = -1;
	    var initParams = null;
	
	    var sHashHex = null; // hex hash value for hex
	    var hDigestInfo = null;
	    var hPaddedDigestInfo = null;
	    var hSign = null;
	
	    this._setAlgNames = function() {
		if (this.algName.match(/^(.+)with(.+)$/)) {
		    this.mdAlgName = RegExp.$1.toLowerCase();
		    this.pubkeyAlgName = RegExp.$2.toLowerCase();
		}
	    };
	
	    this._zeroPaddingOfSignature = function(hex, bitLength) {
		var s = "";
		var nZero = bitLength / 4 - hex.length;
		for (var i = 0; i < nZero; i++) {
		    s = s + "0";
		}
		return s + hex;
	    };
	
	    /**
	     * set signature algorithm and provider
	     * @name setAlgAndProvider
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @param {String} alg signature algorithm name
	     * @param {String} prov provider name
	     * @description
	     * @example
	     * md.setAlgAndProvider('SHA1withRSA', 'cryptojs/jsrsa');
	     */
	    this.setAlgAndProvider = function(alg, prov) {
		this._setAlgNames();
		if (prov != 'cryptojs/jsrsa')
		    throw "provider not supported: " + prov;
	
		if (':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(this.mdAlgName) != -1) {
		    try {
			this.md = new KJUR.crypto.MessageDigest({'alg':this.mdAlgName});
		    } catch (ex) {
			throw "setAlgAndProvider hash alg set fail alg=" +
	                      this.mdAlgName + "/" + ex;
		    }
	
		    this.init = function(keyparam, pass) {
			var keyObj = null;
			try {
			    if (pass === undefined) {
				keyObj = KEYUTIL.getKey(keyparam);
			    } else {
				keyObj = KEYUTIL.getKey(keyparam, pass);
			    }
			} catch (ex) {
			    throw "init failed:" + ex;
			}
	
			if (keyObj.isPrivate === true) {
			    this.prvKey = keyObj;
			    this.state = "SIGN";
			} else if (keyObj.isPublic === true) {
			    this.pubKey = keyObj;
			    this.state = "VERIFY";
			} else {
			    throw "init failed.:" + keyObj;
			}
		    };
	
		    this.initSign = function(params) {
			if (typeof params['ecprvhex'] == 'string' &&
	                    typeof params['eccurvename'] == 'string') {
			    this.ecprvhex = params['ecprvhex'];
			    this.eccurvename = params['eccurvename'];
			} else {
			    this.prvKey = params;
			}
			this.state = "SIGN";
		    };
	
		    this.initVerifyByPublicKey = function(params) {
			if (typeof params['ecpubhex'] == 'string' &&
			    typeof params['eccurvename'] == 'string') {
			    this.ecpubhex = params['ecpubhex'];
			    this.eccurvename = params['eccurvename'];
			} else if (params instanceof KJUR.crypto.ECDSA) {
			    this.pubKey = params;
			} else if (params instanceof RSAKey) {
			    this.pubKey = params;
			}
			this.state = "VERIFY";
		    };
	
		    this.initVerifyByCertificatePEM = function(certPEM) {
			var x509 = new X509();
			x509.readCertPEM(certPEM);
			this.pubKey = x509.subjectPublicKeyRSA;
			this.state = "VERIFY";
		    };
	
		    this.updateString = function(str) {
			this.md.updateString(str);
		    };
		    this.updateHex = function(hex) {
			this.md.updateHex(hex);
		    };
	
		    this.sign = function() {
			this.sHashHex = this.md.digest();
			if (typeof this.ecprvhex != "undefined" &&
			    typeof this.eccurvename != "undefined") {
			    var ec = new KJUR.crypto.ECDSA({'curve': this.eccurvename});
			    this.hSign = ec.signHex(this.sHashHex, this.ecprvhex);
			} else if (this.pubkeyAlgName == "rsaandmgf1") {
			    this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex,
									    this.mdAlgName,
									    this.pssSaltLen);
			} else if (this.pubkeyAlgName == "rsa") {
			    this.hSign = this.prvKey.signWithMessageHash(this.sHashHex,
									 this.mdAlgName);
			} else if (this.prvKey instanceof KJUR.crypto.ECDSA) {
			    this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
			} else if (this.prvKey instanceof KJUR.crypto.DSA) {
			    this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
			} else {
			    throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
			}
			return this.hSign;
		    };
		    this.signString = function(str) {
			this.updateString(str);
			return this.sign();
		    };
		    this.signHex = function(hex) {
			this.updateHex(hex);
			return this.sign();
		    };
		    this.verify = function(hSigVal) {
		        this.sHashHex = this.md.digest();
			if (typeof this.ecpubhex != "undefined" &&
			    typeof this.eccurvename != "undefined") {
			    var ec = new KJUR.crypto.ECDSA({curve: this.eccurvename});
			    return ec.verifyHex(this.sHashHex, hSigVal, this.ecpubhex);
			} else if (this.pubkeyAlgName == "rsaandmgf1") {
			    return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, hSigVal, 
									this.mdAlgName,
									this.pssSaltLen);
			} else if (this.pubkeyAlgName == "rsa") {
			    return this.pubKey.verifyWithMessageHash(this.sHashHex, hSigVal);
			} else if (this.pubKey instanceof KJUR.crypto.ECDSA) {
			    return this.pubKey.verifyWithMessageHash(this.sHashHex, hSigVal);
			} else if (this.pubKey instanceof KJUR.crypto.DSA) {
			    return this.pubKey.verifyWithMessageHash(this.sHashHex, hSigVal);
			} else {
			    throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
			}
		    };
		}
	    };
	
	    /**
	     * Initialize this object for signing or verifying depends on key
	     * @name init
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @param {Object} key specifying public or private key as plain/encrypted PKCS#5/8 PEM file, certificate PEM or {@link RSAKey}, {@link KJUR.crypto.DSA} or {@link KJUR.crypto.ECDSA} object
	     * @param {String} pass (OPTION) passcode for encrypted private key
	     * @since crypto 1.1.3
	     * @description
	     * This method is very useful initialize method for Signature class since
	     * you just specify key then this method will automatically initialize it
	     * using {@link KEYUTIL.getKey} method.
	     * As for 'key',  following argument type are supported:
	     * <h5>signing</h5>
	     * <ul>
	     * <li>PEM formatted PKCS#8 encrypted RSA/ECDSA private key concluding "BEGIN ENCRYPTED PRIVATE KEY"</li>
	     * <li>PEM formatted PKCS#5 encrypted RSA/DSA private key concluding "BEGIN RSA/DSA PRIVATE KEY" and ",ENCRYPTED"</li>
	     * <li>PEM formatted PKCS#8 plain RSA/ECDSA private key concluding "BEGIN PRIVATE KEY"</li>
	     * <li>PEM formatted PKCS#5 plain RSA/DSA private key concluding "BEGIN RSA/DSA PRIVATE KEY" without ",ENCRYPTED"</li>
	     * <li>RSAKey object of private key</li>
	     * <li>KJUR.crypto.ECDSA object of private key</li>
	     * <li>KJUR.crypto.DSA object of private key</li>
	     * </ul>
	     * <h5>verification</h5>
	     * <ul>
	     * <li>PEM formatted PKCS#8 RSA/EC/DSA public key concluding "BEGIN PUBLIC KEY"</li>
	     * <li>PEM formatted X.509 certificate with RSA/EC/DSA public key concluding
	     *     "BEGIN CERTIFICATE", "BEGIN X509 CERTIFICATE" or "BEGIN TRUSTED CERTIFICATE".</li>
	     * <li>RSAKey object of public key</li>
	     * <li>KJUR.crypto.ECDSA object of public key</li>
	     * <li>KJUR.crypto.DSA object of public key</li>
	     * </ul>
	     * @example
	     * sig.init(sCertPEM)
	     */
	    this.init = function(key, pass) {
		throw "init(key, pass) not supported for this alg:prov=" +
		      this.algProvName;
	    };
	
	    /**
	     * Initialize this object for verifying with a public key
	     * @name initVerifyByPublicKey
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @param {Object} param RSAKey object of public key or associative array for ECDSA
	     * @since 1.0.2
	     * @deprecated from crypto 1.1.5. please use init() method instead.
	     * @description
	     * Public key information will be provided as 'param' parameter and the value will be
	     * following:
	     * <ul>
	     * <li>{@link RSAKey} object for RSA verification</li>
	     * <li>associative array for ECDSA verification
	     *     (ex. <code>{'ecpubhex': '041f..', 'eccurvename': 'secp256r1'}</code>)
	     * </li>
	     * </ul>
	     * @example
	     * sig.initVerifyByPublicKey(rsaPrvKey)
	     */
	    this.initVerifyByPublicKey = function(rsaPubKey) {
		throw "initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov=" +
		      this.algProvName;
	    };
	
	    /**
	     * Initialize this object for verifying with a certficate
	     * @name initVerifyByCertificatePEM
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @param {String} certPEM PEM formatted string of certificate
	     * @since 1.0.2
	     * @deprecated from crypto 1.1.5. please use init() method instead.
	     * @description
	     * @example
	     * sig.initVerifyByCertificatePEM(certPEM)
	     */
	    this.initVerifyByCertificatePEM = function(certPEM) {
		throw "initVerifyByCertificatePEM(certPEM) not supported for this alg:prov=" +
		    this.algProvName;
	    };
	
	    /**
	     * Initialize this object for signing
	     * @name initSign
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @param {Object} param RSAKey object of public key or associative array for ECDSA
	     * @deprecated from crypto 1.1.5. please use init() method instead.
	     * @description
	     * Private key information will be provided as 'param' parameter and the value will be
	     * following:
	     * <ul>
	     * <li>{@link RSAKey} object for RSA signing</li>
	     * <li>associative array for ECDSA signing
	     *     (ex. <code>{'ecprvhex': '1d3f..', 'eccurvename': 'secp256r1'}</code>)</li>
	     * </ul>
	     * @example
	     * sig.initSign(prvKey)
	     */
	    this.initSign = function(prvKey) {
		throw "initSign(prvKey) not supported for this alg:prov=" + this.algProvName;
	    };
	
	    /**
	     * Updates the data to be signed or verified by a string
	     * @name updateString
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @param {String} str string to use for the update
	     * @description
	     * @example
	     * sig.updateString('aaa')
	     */
	    this.updateString = function(str) {
		throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
	    };
	
	    /**
	     * Updates the data to be signed or verified by a hexadecimal string
	     * @name updateHex
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @param {String} hex hexadecimal string to use for the update
	     * @description
	     * @example
	     * sig.updateHex('1f2f3f')
	     */
	    this.updateHex = function(hex) {
		throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
	    };
	
	    /**
	     * Returns the signature bytes of all data updates as a hexadecimal string
	     * @name sign
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @return the signature bytes as a hexadecimal string
	     * @description
	     * @example
	     * var hSigValue = sig.sign()
	     */
	    this.sign = function() {
		throw "sign() not supported for this alg:prov=" + this.algProvName;
	    };
	
	    /**
	     * performs final update on the sign using string, then returns the signature bytes of all data updates as a hexadecimal string
	     * @name signString
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @param {String} str string to final update
	     * @return the signature bytes of a hexadecimal string
	     * @description
	     * @example
	     * var hSigValue = sig.signString('aaa')
	     */
	    this.signString = function(str) {
		throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
	    };
	
	    /**
	     * performs final update on the sign using hexadecimal string, then returns the signature bytes of all data updates as a hexadecimal string
	     * @name signHex
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @param {String} hex hexadecimal string to final update
	     * @return the signature bytes of a hexadecimal string
	     * @description
	     * @example
	     * var hSigValue = sig.signHex('1fdc33')
	     */
	    this.signHex = function(hex) {
		throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
	    };
	
	    /**
	     * verifies the passed-in signature.
	     * @name verify
	     * @memberOf KJUR.crypto.Signature
	     * @function
	     * @param {String} str string to final update
	     * @return {Boolean} true if the signature was verified, otherwise false
	     * @description
	     * @example
	     * var isValid = sig.verify('1fbcefdca4823a7(snip)')
	     */
	    this.verify = function(hSigVal) {
		throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
	    };
	
	    this.initParams = params;
	
	    if (params !== undefined) {
		if (params['alg'] !== undefined) {
		    this.algName = params['alg'];
		    if (params['prov'] === undefined) {
			this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName];
		    } else {
			this.provName = params['prov'];
		    }
		    this.algProvName = this.algName + ":" + this.provName;
		    this.setAlgAndProvider(this.algName, this.provName);
		    this._setAlgNames();
		}
	
		if (params['psssaltlen'] !== undefined) this.pssSaltLen = params['psssaltlen'];
	
		if (params['prvkeypem'] !== undefined) {
		    if (params['prvkeypas'] !== undefined) {
			throw "both prvkeypem and prvkeypas parameters not supported";
		    } else {
			try {
			    var prvKey = new RSAKey();
			    prvKey.readPrivateKeyFromPEMString(params['prvkeypem']);
			    this.initSign(prvKey);
			} catch (ex) {
			    throw "fatal error to load pem private key: " + ex;
			}
		    }
		}
	    }
	};
	
	/**
	 * static object for cryptographic function utilities
	 * @name KJUR.crypto.OID
	 * @class static object for cryptography related OIDs
	 * @property {Array} oidhex2name key value of hexadecimal OID and its name
	 *           (ex. '2a8648ce3d030107' and 'secp256r1')
	 * @since crypto 1.1.3
	 * @description
	 */
	
	
	KJUR.crypto.OID = new function() {
	    this.oidhex2name = {
		'2a864886f70d010101': 'rsaEncryption',
		'2a8648ce3d0201': 'ecPublicKey',
		'2a8648ce380401': 'dsa',
		'2a8648ce3d030107': 'secp256r1',
		'2b8104001f': 'secp192k1',
		'2b81040021': 'secp224r1',
		'2b8104000a': 'secp256k1',
		'2b81040023': 'secp521r1',
		'2b81040022': 'secp384r1',
		'2a8648ce380403': 'SHA1withDSA', // 1.2.840.10040.4.3
		'608648016503040301': 'SHA224withDSA', // 2.16.840.1.101.3.4.3.1
		'608648016503040302': 'SHA256withDSA', // 2.16.840.1.101.3.4.3.2
	    };
	};
	
	/*! base64x-1.1.3 (c) 2012-2014 Kenji Urushima | kjur.github.com/jsjws/license
	 */
	/*
	 * base64x.js - Base64url and supplementary functions for Tom Wu's base64.js library
	 *
	 * version: 1.1.3 (2014 May 25)
	 *
	 * Copyright (c) 2012-2014 Kenji Urushima (kenji.urushima@gmail.com)
	 *
	 * This software is licensed under the terms of the MIT License.
	 * http://kjur.github.com/jsjws/license/
	 *
	 * The above copyright and license notice shall be 
	 * included in all copies or substantial portions of the Software.
	 *
	 * DEPENDS ON:
	 *   - base64.js - Tom Wu's Base64 library
	 */
	
	/**
	 * Base64URL and supplementary functions for Tom Wu's base64.js library.<br/>
	 * This class is just provide information about global functions
	 * defined in 'base64x.js'. The 'base64x.js' script file provides
	 * global functions for converting following data each other.
	 * <ul>
	 * <li>(ASCII) String</li>
	 * <li>UTF8 String including CJK, Latin and other characters</li>
	 * <li>byte array</li>
	 * <li>hexadecimal encoded String</li>
	 * <li>Full URIComponent encoded String (such like "%69%94")</li>
	 * <li>Base64 encoded String</li>
	 * <li>Base64URL encoded String</li>
	 * </ul>
	 * All functions in 'base64x.js' are defined in {@link _global_} and not
	 * in this class.
	 * 
	 * @class Base64URL and supplementary functions for Tom Wu's base64.js library
	 * @author Kenji Urushima
	 * @version 1.1 (07 May 2012)
	 * @requires base64.js
	 * @see <a href="http://kjur.github.com/jsjws/">'jwjws'(JWS JavaScript Library) home page http://kjur.github.com/jsjws/</a>
	 * @see <a href="http://kjur.github.com/jsrsasigns/">'jwrsasign'(RSA Sign JavaScript Library) home page http://kjur.github.com/jsrsasign/</a>
	 */
	function Base64x() {
	}
	
	// ==== string / byte array ================================
	/**
	 * convert a string to an array of character codes
	 * @param {String} s
	 * @return {Array of Numbers} 
	 */
	function stoBA(s) {
	    var a = new Array();
	    for (var i = 0; i < s.length; i++) {
		a[i] = s.charCodeAt(i);
	    }
	    return a;
	}
	
	/**
	 * convert an array of character codes to a string
	 * @param {Array of Numbers} a array of character codes
	 * @return {String} s
	 */
	function BAtos(a) {
	    var s = "";
	    for (var i = 0; i < a.length; i++) {
		s = s + String.fromCharCode(a[i]);
	    }
	    return s;
	}
	
	// ==== byte array / hex ================================
	/**
	 * convert an array of bytes(Number) to hexadecimal string.<br/>
	 * @param {Array of Numbers} a array of bytes
	 * @return {String} hexadecimal string
	 */
	function BAtohex(a) {
	    var s = "";
	    for (var i = 0; i < a.length; i++) {
		var hex1 = a[i].toString(16);
		if (hex1.length == 1) hex1 = "0" + hex1;
		s = s + hex1;
	    }
	    return s;
	}
	
	// ==== string / hex ================================
	/**
	 * convert a ASCII string to a hexadecimal string of ASCII codes.<br/>
	 * NOTE: This can't be used for non ASCII characters.
	 * @param {s} s ASCII string
	 * @return {String} hexadecimal string
	 */
	function stohex(s) {
	    return BAtohex(stoBA(s));
	}
	
	// ==== string / base64 ================================
	/**
	 * convert a ASCII string to a Base64 encoded string.<br/>
	 * NOTE: This can't be used for non ASCII characters.
	 * @param {s} s ASCII string
	 * @return {String} Base64 encoded string
	 */
	function stob64(s) {
	    return hex2b64(stohex(s));
	}
	
	// ==== string / base64url ================================
	/**
	 * convert a ASCII string to a Base64URL encoded string.<br/>
	 * NOTE: This can't be used for non ASCII characters.
	 * @param {s} s ASCII string
	 * @return {String} Base64URL encoded string
	 */
	function stob64u(s) {
	    return b64tob64u(hex2b64(stohex(s)));
	}
	
	/**
	 * convert a Base64URL encoded string to a ASCII string.<br/>
	 * NOTE: This can't be used for Base64URL encoded non ASCII characters.
	 * @param {s} s Base64URL encoded string
	 * @return {String} ASCII string
	 */
	function b64utos(s) {
	    return BAtos(b64toBA(b64utob64(s)));
	}
	
	// ==== base64 / base64url ================================
	/**
	 * convert a Base64 encoded string to a Base64URL encoded string.<br/>
	 * Example: "ab+c3f/==" &rarr; "ab-c3f_"
	 * @param {String} s Base64 encoded string
	 * @return {String} Base64URL encoded string
	 */
	function b64tob64u(s) {
	    s = s.replace(/\=/g, "");
	    s = s.replace(/\+/g, "-");
	    s = s.replace(/\//g, "_");
	    return s;
	}
	
	/**
	 * convert a Base64URL encoded string to a Base64 encoded string.<br/>
	 * Example: "ab-c3f_" &rarr; "ab+c3f/=="
	 * @param {String} s Base64URL encoded string
	 * @return {String} Base64 encoded string
	 */
	function b64utob64(s) {
	    if (s.length % 4 == 2) s = s + "==";
	    else if (s.length % 4 == 3) s = s + "=";
	    s = s.replace(/-/g, "+");
	    s = s.replace(/_/g, "/");
	    return s;
	}
	
	// ==== hex / base64url ================================
	/**
	 * convert a hexadecimal string to a Base64URL encoded string.<br/>
	 * @param {String} s hexadecimal string
	 * @return {String} Base64URL encoded string
	 */
	function hextob64u(s) {
	    return b64tob64u(hex2b64(s));
	}
	
	/**
	 * convert a Base64URL encoded string to a hexadecimal string.<br/>
	 * @param {String} s Base64URL encoded string
	 * @return {String} hexadecimal string
	 */
	function b64utohex(s) {
	    return b64tohex(b64utob64(s));
	}
	
	var utf8tob64u, b64utoutf8;
	
	if (typeof Buffer === 'function')
	{
	  utf8tob64u = function (s)
	  {
	    return b64tob64u(new Buffer(s, 'utf8').toString('base64'));
	  };
	
	  b64utoutf8 = function (s)
	  {
	    return new Buffer(b64utob64(s), 'base64').toString('utf8');
	  };
	}
	else
	{
	// ==== utf8 / base64url ================================
	/**
	 * convert a UTF-8 encoded string including CJK or Latin to a Base64URL encoded string.<br/>
	 * @param {String} s UTF-8 encoded string
	 * @return {String} Base64URL encoded string
	 * @since 1.1
	 */
	  utf8tob64u = function (s)
	  {
	    return hextob64u(uricmptohex(encodeURIComponentAll(s)));
	  };
	
	/**
	 * convert a Base64URL encoded string to a UTF-8 encoded string including CJK or Latin.<br/>
	 * @param {String} s Base64URL encoded string
	 * @return {String} UTF-8 encoded string
	 * @since 1.1
	 */
	  b64utoutf8 = function (s)
	  {
	    return decodeURIComponent(hextouricmp(b64utohex(s)));
	  };
	}
	
	// ==== utf8 / base64url ================================
	/**
	 * convert a UTF-8 encoded string including CJK or Latin to a Base64 encoded string.<br/>
	 * @param {String} s UTF-8 encoded string
	 * @return {String} Base64 encoded string
	 * @since 1.1.1
	 */
	function utf8tob64(s) {
	  return hex2b64(uricmptohex(encodeURIComponentAll(s)));
	}
	
	/**
	 * convert a Base64 encoded string to a UTF-8 encoded string including CJK or Latin.<br/>
	 * @param {String} s Base64 encoded string
	 * @return {String} UTF-8 encoded string
	 * @since 1.1.1
	 */
	function b64toutf8(s) {
	  return decodeURIComponent(hextouricmp(b64tohex(s)));
	}
	
	// ==== utf8 / hex ================================
	/**
	 * convert a UTF-8 encoded string including CJK or Latin to a hexadecimal encoded string.<br/>
	 * @param {String} s UTF-8 encoded string
	 * @return {String} hexadecimal encoded string
	 * @since 1.1.1
	 */
	function utf8tohex(s) {
	  return uricmptohex(encodeURIComponentAll(s));
	}
	
	/**
	 * convert a hexadecimal encoded string to a UTF-8 encoded string including CJK or Latin.<br/>
	 * Note that when input is improper hexadecimal string as UTF-8 string, this function returns
	 * 'null'.
	 * @param {String} s hexadecimal encoded string
	 * @return {String} UTF-8 encoded string or null
	 * @since 1.1.1
	 */
	function hextoutf8(s) {
	  return decodeURIComponent(hextouricmp(s));
	}
	
	/**
	 * convert a hexadecimal encoded string to raw string including non printable characters.<br/>
	 * @param {String} s hexadecimal encoded string
	 * @return {String} raw string
	 * @since 1.1.2
	 * @example
	 * hextorstr("610061") &rarr; "a\x00a"
	 */
	function hextorstr(sHex) {
	    var s = "";
	    for (var i = 0; i < sHex.length - 1; i += 2) {
	        s += String.fromCharCode(parseInt(sHex.substr(i, 2), 16));
	    }
	    return s;
	}
	
	/**
	 * convert a raw string including non printable characters to hexadecimal encoded string.<br/>
	 * @param {String} s raw string
	 * @return {String} hexadecimal encoded string
	 * @since 1.1.2
	 * @example
	 * rstrtohex("a\x00a") &rarr; "610061"
	 */
	function rstrtohex(s) {
	    var result = "";
	    for (var i = 0; i < s.length; i++) {
	        result += ("0" + s.charCodeAt(i).toString(16)).slice(-2);
	    }
	    return result;
	}
	
	// ==== hex / b64nl =======================================
	
	/*
	 * since base64x 1.1.3
	 */
	function hextob64(s) {
	    return hex2b64(s);
	}
	
	/*
	 * since base64x 1.1.3
	 */
	function hextob64nl(s) {
	    var b64 = hextob64(s);
	    var b64nl = b64.replace(/(.{64})/g, "$1\r\n");
	    b64nl = b64nl.replace(/\r\n$/, '');
	    return b64nl;
	}
	
	/*
	 * since base64x 1.1.3
	 */
	function b64nltohex(s) {
	    var b64 = s.replace(/[^0-9A-Za-z\/+=]*/g, '');
	    var hex = b64tohex(b64);
	    return hex;
	} 
	
	// ==== URIComponent / hex ================================
	/**
	 * convert a URLComponent string such like "%67%68" to a hexadecimal string.<br/>
	 * @param {String} s URIComponent string such like "%67%68"
	 * @return {String} hexadecimal string
	 * @since 1.1
	 */
	function uricmptohex(s) {
	  return s.replace(/%/g, "");
	}
	
	/**
	 * convert a hexadecimal string to a URLComponent string such like "%67%68".<br/>
	 * @param {String} s hexadecimal string
	 * @return {String} URIComponent string such like "%67%68"
	 * @since 1.1
	 */
	function hextouricmp(s) {
	  return s.replace(/(..)/g, "%$1");
	}
	
	// ==== URIComponent ================================
	/**
	 * convert UTFa hexadecimal string to a URLComponent string such like "%67%68".<br/>
	 * Note that these "<code>0-9A-Za-z!'()*-._~</code>" characters will not
	 * converted to "%xx" format by builtin 'encodeURIComponent()' function.
	 * However this 'encodeURIComponentAll()' function will convert 
	 * all of characters into "%xx" format.
	 * @param {String} s hexadecimal string
	 * @return {String} URIComponent string such like "%67%68"
	 * @since 1.1
	 */
	function encodeURIComponentAll(u8) {
	  var s = encodeURIComponent(u8);
	  var s2 = "";
	  for (var i = 0; i < s.length; i++) {
	    if (s[i] == "%") {
	      s2 = s2 + s.substr(i, 3);
	      i = i + 2;
	    } else {
	      s2 = s2 + "%" + stohex(s[i]);
	    }
	  }
	  return s2;
	}
	
	// ==== new lines ================================
	/**
	 * convert all DOS new line("\r\n") to UNIX new line("\n") in 
	 * a String "s".
	 * @param {String} s string 
	 * @return {String} converted string
	 */
	function newline_toUnix(s) {
	    s = s.replace(/\r\n/mg, "\n");
	    return s;
	}
	
	/**
	 * convert all UNIX new line("\r\n") to DOS new line("\n") in 
	 * a String "s".
	 * @param {String} s string 
	 * @return {String} converted string
	 */
	function newline_toDos(s) {
	    s = s.replace(/\r\n/mg, "\n");
	    s = s.replace(/\n/mg, "\r\n");
	    return s;
	}
	
	/*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
	 */
	// This source code is free for use in the public domain.
	// NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	
	// http://code.google.com/p/json-sans-eval/
	
	/**
	 * Parses a string of well-formed JSON text.
	 *
	 * If the input is not well-formed, then behavior is undefined, but it is
	 * deterministic and is guaranteed not to modify any object other than its
	 * return value.
	 *
	 * This does not use `eval` so is less likely to have obscure security bugs than
	 * json2.js.
	 * It is optimized for speed, so is much faster than json_parse.js.
	 *
	 * This library should be used whenever security is a concern (when JSON may
	 * come from an untrusted source), speed is a concern, and erroring on malformed
	 * JSON is *not* a concern.
	 *
	 *                      Pros                   Cons
	 *                    +-----------------------+-----------------------+
	 * json_sans_eval.js  | Fast, secure          | Not validating        |
	 *                    +-----------------------+-----------------------+
	 * json_parse.js      | Validating, secure    | Slow                  |
	 *                    +-----------------------+-----------------------+
	 * json2.js           | Fast, some validation | Potentially insecure  |
	 *                    +-----------------------+-----------------------+
	 *
	 * json2.js is very fast, but potentially insecure since it calls `eval` to
	 * parse JSON data, so an attacker might be able to supply strange JS that
	 * looks like JSON, but that executes arbitrary javascript.
	 * If you do have to use json2.js with untrusted data, make sure you keep
	 * your version of json2.js up to date so that you get patches as they're
	 * released.
	 *
	 * @param {string} json per RFC 4627
	 * @param {function (this:Object, string, *):*} opt_reviver optional function
	 *     that reworks JSON objects post-parse per Chapter 15.12 of EcmaScript3.1.
	 *     If supplied, the function is called with a string key, and a value.
	 *     The value is the property of 'this'.  The reviver should return
	 *     the value to use in its place.  So if dates were serialized as
	 *     {@code { "type": "Date", "time": 1234 }}, then a reviver might look like
	 *     {@code
	 *     function (key, value) {
	 *       if (value && typeof value === 'object' && 'Date' === value.type) {
	 *         return new Date(value.time);
	 *       } else {
	 *         return value;
	 *       }
	 *     }}.
	 *     If the reviver returns {@code undefined} then the property named by key
	 *     will be deleted from its container.
	 *     {@code this} is bound to the object containing the specified property.
	 * @return {Object|Array}
	 * @author Mike Samuel <mikesamuel@gmail.com>
	 */
	var jsonParse = (function () {
	  var number
	      = '(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)';
	  var oneChar = '(?:[^\\0-\\x08\\x0a-\\x1f\"\\\\]'
	      + '|\\\\(?:[\"/\\\\bfnrt]|u[0-9A-Fa-f]{4}))';
	  var string = '(?:\"' + oneChar + '*\")';
	
	  // Will match a value in a well-formed JSON file.
	  // If the input is not well-formed, may match strangely, but not in an unsafe
	  // way.
	  // Since this only matches value tokens, it does not match whitespace, colons,
	  // or commas.
	  var jsonToken = new RegExp(
	      '(?:false|true|null|[\\{\\}\\[\\]]'
	      + '|' + number
	      + '|' + string
	      + ')', 'g');
	
	  // Matches escape sequences in a string literal
	  var escapeSequence = new RegExp('\\\\(?:([^u])|u(.{4}))', 'g');
	
	  // Decodes escape sequences in object literals
	  var escapes = {
	    '"': '"',
	    '/': '/',
	    '\\': '\\',
	    'b': '\b',
	    'f': '\f',
	    'n': '\n',
	    'r': '\r',
	    't': '\t'
	  };
	  function unescapeOne(_, ch, hex) {
	    return ch ? escapes[ch] : String.fromCharCode(parseInt(hex, 16));
	  }
	
	  // A non-falsy value that coerces to the empty string when used as a key.
	  var EMPTY_STRING = new String('');
	  var SLASH = '\\';
	
	  // Constructor to use based on an open token.
	  var firstTokenCtors = { '{': Object, '[': Array };
	
	  var hop = Object.hasOwnProperty;
	
	  return function (json, opt_reviver) {
	    // Split into tokens
	    var toks = json.match(jsonToken);
	    // Construct the object to return
	    var result;
	    var tok = toks[0];
	    var topLevelPrimitive = false;
	    if ('{' === tok) {
	      result = {};
	    } else if ('[' === tok) {
	      result = [];
	    } else {
	      // The RFC only allows arrays or objects at the top level, but the JSON.parse
	      // defined by the EcmaScript 5 draft does allow strings, booleans, numbers, and null
	      // at the top level.
	      result = [];
	      topLevelPrimitive = true;
	    }
	
	    // If undefined, the key in an object key/value record to use for the next
	    // value parsed.
	    var key;
	    // Loop over remaining tokens maintaining a stack of uncompleted objects and
	    // arrays.
	    var stack = [result];
	    for (var i = 1 - topLevelPrimitive, n = toks.length; i < n; ++i) {
	      tok = toks[i];
	
	      var cont;
	      switch (tok.charCodeAt(0)) {
	        default:  // sign or digit
	          cont = stack[0];
	          cont[key || cont.length] = +(tok);
	          key = void 0;
	          break;
	        case 0x22:  // '"'
	          tok = tok.substring(1, tok.length - 1);
	          if (tok.indexOf(SLASH) !== -1) {
	            tok = tok.replace(escapeSequence, unescapeOne);
	          }
	          cont = stack[0];
	          if (!key) {
	            if (cont instanceof Array) {
	              key = cont.length;
	            } else {
	              key = tok || EMPTY_STRING;  // Use as key for next value seen.
	              break;
	            }
	          }
	          cont[key] = tok;
	          key = void 0;
	          break;
	        case 0x5b:  // '['
	          cont = stack[0];
	          stack.unshift(cont[key || cont.length] = []);
	          key = void 0;
	          break;
	        case 0x5d:  // ']'
	          stack.shift();
	          break;
	        case 0x66:  // 'f'
	          cont = stack[0];
	          cont[key || cont.length] = false;
	          key = void 0;
	          break;
	        case 0x6e:  // 'n'
	          cont = stack[0];
	          cont[key || cont.length] = null;
	          key = void 0;
	          break;
	        case 0x74:  // 't'
	          cont = stack[0];
	          cont[key || cont.length] = true;
	          key = void 0;
	          break;
	        case 0x7b:  // '{'
	          cont = stack[0];
	          stack.unshift(cont[key || cont.length] = {});
	          key = void 0;
	          break;
	        case 0x7d:  // '}'
	          stack.shift();
	          break;
	      }
	    }
	    // Fail if we've got an uncompleted object.
	    if (topLevelPrimitive) {
	      if (stack.length !== 1) { throw new Error(); }
	      result = result[0];
	    } else {
	      if (stack.length) { throw new Error(); }
	    }
	
	    if (opt_reviver) {
	      // Based on walk as implemented in http://www.json.org/json2.js
	      var walk = function (holder, key) {
	        var value = holder[key];
	        if (value && typeof value === 'object') {
	          var toDelete = null;
	          for (var k in value) {
	            if (hop.call(value, k) && value !== holder) {
	              // Recurse to properties first.  This has the effect of causing
	              // the reviver to be called on the object graph depth-first.
	
	              // Since 'this' is bound to the holder of the property, the
	              // reviver can access sibling properties of k including ones
	              // that have not yet been revived.
	
	              // The value returned by the reviver is used in place of the
	              // current value of property k.
	              // If it returns undefined then the property is deleted.
	              var v = walk(value, k);
	              if (v !== void 0) {
	                value[k] = v;
	              } else {
	                // Deleting properties inside the loop has vaguely defined
	                // semantics in ES3 and ES3.1.
	                if (!toDelete) { toDelete = []; }
	                toDelete.push(k);
	              }
	            }
	          }
	          if (toDelete) {
	            for (var i = toDelete.length; --i >= 0;) {
	              delete value[toDelete[i]];
	            }
	          }
	        }
	        return opt_reviver.call(holder, key, value);
	      };
	      result = walk({ '': result }, '');
	    }
	
	    return result;
	  };
	})();
	
	/*! jws-3.0.2 (c) 2013 Kenji Urushima | kjur.github.com/jsjws/license
	 */
	/*
	 * jws.js - JSON Web Signature Class
	 *
	 * version: 3.0.2 (2013 Sep 24)
	 *
	 * Copyright (c) 2010-2013 Kenji Urushima (kenji.urushima@gmail.com)
	 *
	 * This software is licensed under the terms of the MIT License.
	 * http://kjur.github.com/jsjws/license/
	 *
	 * The above copyright and license notice shall be 
	 * included in all copies or substantial portions of the Software.
	 */
	
	/**
	 * @fileOverview
	 * @name jws-3.0.js
	 * @author Kenji Urushima kenji.urushima@gmail.com
	 * @version 3.0.1 (2013-Sep-24)
	 * @since jsjws 1.0
	 * @license <a href="http://kjur.github.io/jsjws/license/">MIT License</a>
	 */
	
	if (typeof KJUR == "undefined" || !KJUR) KJUR = {};
	if (typeof KJUR.jws == "undefined" || !KJUR.jws) KJUR.jws = {};
	
	/**
	 * JSON Web Signature(JWS) class.<br/>
	 * @name KJUR.jws.JWS
	 * @class JSON Web Signature(JWS) class
	 * @property {Dictionary} parsedJWS This property is set after JWS signature verification. <br/>
	 *           Following "parsedJWS_*" properties can be accessed as "parsedJWS.*" because of
	 *           JsDoc restriction.
	 * @property {String} parsedJWS_headB64U string of Encrypted JWS Header
	 * @property {String} parsedJWS_payloadB64U string of Encrypted JWS Payload
	 * @property {String} parsedJWS_sigvalB64U string of Encrypted JWS signature value
	 * @property {String} parsedJWS_si string of Signature Input
	 * @property {String} parsedJWS_sigvalH hexadecimal string of JWS signature value
	 * @property {String} parsedJWS_sigvalBI BigInteger(defined in jsbn.js) object of JWS signature value
	 * @property {String} parsedJWS_headS string of decoded JWS Header
	 * @property {String} parsedJWS_headS string of decoded JWS Payload
	 * @requires base64x.js, json-sans-eval.js and jsrsasign library
	 * @see <a href="http://kjur.github.com/jsjws/">'jwjws'(JWS JavaScript Library) home page http://kjur.github.com/jsjws/</a>
	 * @see <a href="http://kjur.github.com/jsrsasigns/">'jwrsasign'(RSA Sign JavaScript Library) home page http://kjur.github.com/jsrsasign/</a>
	 * @see <a href="http://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-14">IETF I-D JSON Web Algorithms (JWA)</a>
	 * @since jsjws 1.0
	 * @description
	 * <h4>Supported Algorithms</h4>
	 * Here is supported algorithm names for {@link KJUR.jws.JWS.sign} and {@link KJUR.jws.JWS.verify}
	 * methods.
	 * <table>
	 * <tr><th>alg value</th><th>spec requirement</th><th>jsjws support</th></tr>
	 * <tr><td>HS256</td><td>REQUIRED</td><td>SUPPORTED</td></tr>
	 * <tr><td>HS384</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>HS512</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>RS256</td><td>RECOMMENDED</td><td>SUPPORTED</td></tr>
	 * <tr><td>RS384</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>RS512</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>ES256</td><td>RECOMMENDED+</td><td>SUPPORTED</td></tr>
	 * <tr><td>ES384</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>ES512</td><td>OPTIONAL</td><td>-</td></tr>
	 * <tr><td>PS256</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>PS384</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>PS512</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>none</td><td>REQUIRED</td><td>SUPPORTED</td></tr>
	 * </table>
	 * NOTE: HS384 is supported since jsjws 3.0.2 with jsrsasign 4.1.4.
	 */
	KJUR.jws.JWS = function() {
	
	    // === utility =============================================================
	
	    /**
	     * parse JWS string and set public property 'parsedJWS' dictionary.<br/>
	     * @name parseJWS
	     * @memberOf KJUR.jws.JWS
	     * @function
	     * @param {String} sJWS JWS signature string to be parsed.
	     * @throws if sJWS is not comma separated string such like "Header.Payload.Signature".
	     * @throws if JWS Header is a malformed JSON string.
	     * @since jws 1.1
	     */
	    this.parseJWS = function(sJWS, sigValNotNeeded) {
		if ((this.parsedJWS !== undefined) &&
		    (sigValNotNeeded || (this.parsedJWS.sigvalH !== undefined))) {
		    return;
		}
		if (sJWS.match(/^([^.]+)\.([^.]+)\.([^.]+)$/) == null) {
		    throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
		}
		var b6Head = RegExp.$1;
		var b6Payload = RegExp.$2;
		var b6SigVal = RegExp.$3;
		var sSI = b6Head + "." + b6Payload;
		this.parsedJWS = {};
		this.parsedJWS.headB64U = b6Head;
		this.parsedJWS.payloadB64U = b6Payload;
		this.parsedJWS.sigvalB64U = b6SigVal;
		this.parsedJWS.si = sSI;
	
		if (!sigValNotNeeded) {
		    var hSigVal = b64utohex(b6SigVal);
		    var biSigVal = parseBigInt(hSigVal, 16);
		    this.parsedJWS.sigvalH = hSigVal;
		    this.parsedJWS.sigvalBI = biSigVal;
		}
	
		var sHead = b64utoutf8(b6Head);
		var sPayload = b64utoutf8(b6Payload);
		this.parsedJWS.headS = sHead;
		this.parsedJWS.payloadS = sPayload;
	
		if (!KJUR.jws.JWS.isSafeJSONString(sHead, this.parsedJWS, 'headP'))
		    throw "malformed JSON string for JWS Head: " + sHead;
	    };
	
	    // ==== JWS Validation =========================================================
	    function _getSignatureInputByString(sHead, sPayload) {
		return utf8tob64u(sHead) + "." + utf8tob64u(sPayload);
	    };
	
	    function _getHashBySignatureInput(sSignatureInput, sHashAlg) {
		var hashfunc = function(s) { return KJUR.crypto.Util.hashString(s, sHashAlg); };
		if (hashfunc == null) throw "hash function not defined in jsrsasign: " + sHashAlg;
		return hashfunc(sSignatureInput);
	    };
	
	    function _jws_verifySignature(sHead, sPayload, hSig, hN, hE) {
		var sSignatureInput = _getSignatureInputByString(sHead, sPayload);
		var biSig = parseBigInt(hSig, 16);
		return _rsasign_verifySignatureWithArgs(sSignatureInput, biSig, hN, hE);
	    };
	
	    /**
	     * verify JWS signature with naked RSA public key.<br/>
	     * This only supports "RS256" and "RS512" algorithm.
	     * @name verifyJWSByNE
	     * @memberOf KJUR.jws.JWS
	     * @function
	     * @param {String} sJWS JWS signature string to be verified
	     * @param {String} hN hexadecimal string for modulus of RSA public key
	     * @param {String} hE hexadecimal string for public exponent of RSA public key
	     * @return {String} returns 1 when JWS signature is valid, otherwise returns 0
	     * @throws if sJWS is not comma separated string such like "Header.Payload.Signature".
	     * @throws if JWS Header is a malformed JSON string.
	     * @deprecated from 3.0.0 please move to {@link KJUR.jws.JWS.verify}
	     */
	    this.verifyJWSByNE = function(sJWS, hN, hE) {
		this.parseJWS(sJWS);
		return _rsasign_verifySignatureWithArgs(this.parsedJWS.si, this.parsedJWS.sigvalBI, hN, hE);    
	    };
	
	    /**
	     * verify JWS signature with RSA public key.<br/>
	     * This only supports "RS256", "RS512", "PS256" and "PS512" algorithms.
	     * @name verifyJWSByKey
	     * @memberOf KJUR.jws.JWS
	     * @function
	     * @param {String} sJWS JWS signature string to be verified
	     * @param {RSAKey} key RSA public key
	     * @return {Boolean} returns true when JWS signature is valid, otherwise returns false
	     * @throws if sJWS is not comma separated string such like "Header.Payload.Signature".
	     * @throws if JWS Header is a malformed JSON string.
	     * @deprecated from 3.0.0 please move to {@link KJUR.jws.JWS.verify}
	     */
	    this.verifyJWSByKey = function(sJWS, key) {
		this.parseJWS(sJWS);
		var hashAlg = _jws_getHashAlgFromParsedHead(this.parsedJWS.headP);
	        var isPSS = this.parsedJWS.headP['alg'].substr(0, 2) == "PS";
	
		if (key.hashAndVerify) {
		    return key.hashAndVerify(hashAlg,
					     new Buffer(this.parsedJWS.si, 'utf8').toString('base64'),
					     b64utob64(this.parsedJWS.sigvalB64U),
					     'base64',
					     isPSS);
		} else if (isPSS) {
		    return key.verifyStringPSS(this.parsedJWS.si,
					       this.parsedJWS.sigvalH, hashAlg);
		} else {
		    return key.verifyString(this.parsedJWS.si,
					    this.parsedJWS.sigvalH);
		}
	    };
	
	    /**
	     * verify JWS signature by PEM formatted X.509 certificate.<br/>
	     * This only supports "RS256" and "RS512" algorithm.
	     * @name verifyJWSByPemX509Cert
	     * @memberOf KJUR.jws.JWS
	     * @function
	     * @param {String} sJWS JWS signature string to be verified
	     * @param {String} sPemX509Cert string of PEM formatted X.509 certificate
	     * @return {String} returns 1 when JWS signature is valid, otherwise returns 0
	     * @throws if sJWS is not comma separated string such like "Header.Payload.Signature".
	     * @throws if JWS Header is a malformed JSON string.
	     * @since 1.1
	     * @deprecated from 3.0.0 please move to {@link KJUR.jws.JWS.verify}
	     */
	    this.verifyJWSByPemX509Cert = function(sJWS, sPemX509Cert) {
		this.parseJWS(sJWS);
		var x509 = new X509();
		x509.readCertPEM(sPemX509Cert);
		return x509.subjectPublicKeyRSA.verifyString(this.parsedJWS.si, this.parsedJWS.sigvalH);
	    };
	
	    // ==== JWS Generation =========================================================
	    function _jws_getHashAlgFromParsedHead(head) {
		var sigAlg = head["alg"];
		var hashAlg = "";
	
		if (sigAlg != "RS256" && sigAlg != "RS512" &&
		    sigAlg != "PS256" && sigAlg != "PS512")
		    throw "JWS signature algorithm not supported: " + sigAlg;
		if (sigAlg.substr(2) == "256") hashAlg = "sha256";
		if (sigAlg.substr(2) == "512") hashAlg = "sha512";
		return hashAlg;
	    };
	
	    function _jws_getHashAlgFromHead(sHead) {
		return _jws_getHashAlgFromParsedHead(jsonParse(sHead));
	    };
	
	    function _jws_generateSignatureValueBySI_NED(sHead, sPayload, sSI, hN, hE, hD) {
		var rsa = new RSAKey();
		rsa.setPrivate(hN, hE, hD);
	
		var hashAlg = _jws_getHashAlgFromHead(sHead);
		var sigValue = rsa.signString(sSI, hashAlg);
		return sigValue;
	    };
	
	    function _jws_generateSignatureValueBySI_Key(sHead, sPayload, sSI, key, head) {
		var hashAlg = null;
		if (typeof head == "undefined") {
		    hashAlg = _jws_getHashAlgFromHead(sHead);
		} else {
		    hashAlg = _jws_getHashAlgFromParsedHead(head);
		}
	
		var isPSS = head['alg'].substr(0, 2) == "PS";
	
		if (key.hashAndSign) {
		    return b64tob64u(key.hashAndSign(hashAlg, sSI, 'binary', 'base64', isPSS));
		} else if (isPSS) {
		    return hextob64u(key.signStringPSS(sSI, hashAlg));
		} else {
		    return hextob64u(key.signString(sSI, hashAlg));
		}
	    };
	
	    function _jws_generateSignatureValueByNED(sHead, sPayload, hN, hE, hD) {
		var sSI = _getSignatureInputByString(sHead, sPayload);
		return _jws_generateSignatureValueBySI_NED(sHead, sPayload, sSI, hN, hE, hD);
	    };
	
	    /**
	     * generate JWS signature by Header, Payload and a naked RSA private key.<br/>
	     * This only supports "RS256" and "RS512" algorithm.
	     * @name generateJWSByNED
	     * @memberOf KJUR.jws.JWS
	     * @function
	     * @param {String} sHead string of JWS Header
	     * @param {String} sPayload string of JWS Payload
	     * @param {String} hN hexadecimal string for modulus of RSA public key
	     * @param {String} hE hexadecimal string for public exponent of RSA public key
	     * @param {String} hD hexadecimal string for private exponent of RSA private key
	     * @return {String} JWS signature string
	     * @throws if sHead is a malformed JSON string.
	     * @throws if supported signature algorithm was not specified in JSON Header.
	     * @deprecated from 3.0.0 please move to {@link KJUR.jws.JWS.sign}
	     */
	    this.generateJWSByNED = function(sHead, sPayload, hN, hE, hD) {
	        if (!KJUR.jws.JWS.isSafeJSONString(sHead)) throw "JWS Head is not safe JSON string: " + sHead;
		var sSI = _getSignatureInputByString(sHead, sPayload);
		var hSigValue = _jws_generateSignatureValueBySI_NED(sHead, sPayload, sSI, hN, hE, hD);
		var b64SigValue = hextob64u(hSigValue);
		
		this.parsedJWS = {};
		this.parsedJWS.headB64U = sSI.split(".")[0];
		this.parsedJWS.payloadB64U = sSI.split(".")[1];
		this.parsedJWS.sigvalB64U = b64SigValue;
	
		return sSI + "." + b64SigValue;
	    };
	
	    /**
	     * generate JWS signature by Header, Payload and a RSA private key.<br/>
	     * This only supports "RS256", "RS512", "PS256" and "PS512" algorithms.
	     * @name generateJWSByKey
	     * @memberOf KJUR.jws.JWS
	     * @function
	     * @param {String} sHead string of JWS Header
	     * @param {String} sPayload string of JWS Payload
	     * @param {RSAKey} RSA private key
	     * @return {String} JWS signature string
	     * @throws if sHead is a malformed JSON string.
	     * @throws if supported signature algorithm was not specified in JSON Header.
	     * @deprecated from 3.0.0 please move to {@link KJUR.jws.JWS.sign}
	     */
	    this.generateJWSByKey = function(sHead, sPayload, key) {
		var obj = {};
		if (!KJUR.jws.JWS.isSafeJSONString(sHead, obj, 'headP'))
		    throw "JWS Head is not safe JSON string: " + sHead;
		var sSI = _getSignatureInputByString(sHead, sPayload);
		var b64SigValue = _jws_generateSignatureValueBySI_Key(sHead, sPayload, sSI, key, obj.headP);
	
		this.parsedJWS = {};
		this.parsedJWS.headB64U = sSI.split(".")[0];
		this.parsedJWS.payloadB64U = sSI.split(".")[1];
		this.parsedJWS.sigvalB64U = b64SigValue;
	
		return sSI + "." + b64SigValue;
	    };
	
	    // === sign with PKCS#1 RSA private key =====================================================
	    function _jws_generateSignatureValueBySI_PemPrvKey(sHead, sPayload, sSI, sPemPrvKey) {
		var rsa = new RSAKey();
		rsa.readPrivateKeyFromPEMString(sPemPrvKey);
		var hashAlg = _jws_getHashAlgFromHead(sHead);
		var sigValue = rsa.signString(sSI, hashAlg);
		return sigValue;
	    };
	
	    /**
	     * generate JWS signature by Header, Payload and a PEM formatted PKCS#1 RSA private key.<br/>
	     * This only supports "RS256" and "RS512" algorithm.
	     * @name generateJWSByP1PrvKey
	     * @memberOf KJUR.jws.JWS
	     * @function
	     * @param {String} sHead string of JWS Header
	     * @param {String} sPayload string of JWS Payload
	     * @param {String} string for sPemPrvKey PEM formatted PKCS#1 RSA private key<br/>
	     *                 Heading and trailing space characters in PEM key will be ignored.
	     * @return {String} JWS signature string
	     * @throws if sHead is a malformed JSON string.
	     * @throws if supported signature algorithm was not specified in JSON Header.
	     * @since 1.1
	     * @deprecated from 3.0.0 please move to {@link KJUR.jws.JWS.sign}
	     */
	    this.generateJWSByP1PrvKey = function(sHead, sPayload, sPemPrvKey) {
	        if (!KJUR.jws.JWS.isSafeJSONString(sHead)) throw "JWS Head is not safe JSON string: " + sHead;
		var sSI = _getSignatureInputByString(sHead, sPayload);
		var hSigValue = _jws_generateSignatureValueBySI_PemPrvKey(sHead, sPayload, sSI, sPemPrvKey);
		var b64SigValue = hextob64u(hSigValue);
	
		this.parsedJWS = {};
		this.parsedJWS.headB64U = sSI.split(".")[0];
		this.parsedJWS.payloadB64U = sSI.split(".")[1];
		this.parsedJWS.sigvalB64U = b64SigValue;
	
		return sSI + "." + b64SigValue;
	    };
	};
	
	// === major static method ========================================================
	
	/**
	 * generate JWS signature by specified key<br/>
	 * @name sign
	 * @memberOf KJUR.jws.JWS
	 * @function
	 * @static
	 * @param {String} alg JWS algorithm name to sign and force set to sHead or null 
	 * @param {String} sHead string of JWS Header
	 * @param {String} sPayload string of JWS Payload
	 * @param {String} key string of private key or key object to sign
	 * @param {String} pass (OPTION)passcode to use encrypted private key 
	 * @return {String} JWS signature string
	 * @since jws 3.0.0
	 * @see <a href="http://kjur.github.io/jsrsasign/api/symbols/KJUR.crypto.Signature.html">jsrsasign KJUR.crypto.Signature method</a>
	 * @see <a href="http://kjur.github.io/jsrsasign/api/symbols/KJUR.crypto.Mac.html">jsrsasign KJUR.crypto.Mac method</a>
	 * @description
	 * This method supports following algorithms.
	 * <table>
	 * <tr><th>alg value</th><th>spec requirement</th><th>jsjws support</th></tr>
	 * <tr><td>HS256</td><td>REQUIRED</td><td>SUPPORTED</td></tr>
	 * <tr><td>HS384</td><td>OPTIONAL</td><td>-</td></tr>
	 * <tr><td>HS512</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>RS256</td><td>RECOMMENDED</td><td>SUPPORTED</td></tr>
	 * <tr><td>RS384</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>RS512</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>ES256</td><td>RECOMMENDED+</td><td>SUPPORTED</td></tr>
	 * <tr><td>ES384</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>ES512</td><td>OPTIONAL</td><td>-</td></tr>
	 * <tr><td>PS256</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>PS384</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>PS512</td><td>OPTIONAL</td><td>SUPPORTED</td></tr>
	 * <tr><td>none</td><td>REQUIRED</td><td>SUPPORTED</td></tr>
	 * </table>
	 * <dl>
	 * <dt>NOTE1:
	 * <dd>salt length of RSAPSS signature is the same as the hash algorithm length
	 * because of <a href="http://www.ietf.org/mail-archive/web/jose/current/msg02901.html">IETF JOSE ML discussion</a>.
	 * <dt>NOTE2:
	 * <dd>The reason of HS384 unsupport is  
	 * <a href="https://code.google.com/p/crypto-js/issues/detail?id=84">CryptoJS HmacSHA384 bug</a>.
	 * </dl>
	 */
	KJUR.jws.JWS.sign = function(alg, sHeader, sPayload, key, pass) {
	    var ns1 = KJUR.jws.JWS;
	
	    if (! ns1.isSafeJSONString(sHeader))
		throw "JWS Head is not safe JSON string: " + sHead;
	
	    var pHeader = ns1.readSafeJSONString(sHeader);
	
	    // 1. use alg if defined in sHeader
	    if ((alg == '' || alg == null) &&
		pHeader['alg'] !== undefined) {
		alg = pHeader['alg'];
	    }
	
	    // 2. set alg in sHeader if undefined
	    if ((alg != '' && alg != null) &&
		pHeader['alg'] === undefined) {
		pHeader['alg'] = alg;
		sHeader = JSON.stringify(pHeader);
	    }
	
	    // 3. set signature algorithm like SHA1withRSA
	    var sigAlg = null;
	    if (ns1.jwsalg2sigalg[alg] === undefined) {
		throw "unsupported alg name: " + alg;
	    } else {
		sigAlg = ns1.jwsalg2sigalg[alg];
	    }
	    
	    var uHeader = utf8tob64u(sHeader);
	    var uPayload = utf8tob64u(sPayload);
	    var uSignatureInput = uHeader + "." + uPayload
	    
	    // 4. sign
	    var hSig = "";
	    if (sigAlg.substr(0, 4) == "Hmac") {
		if (key === undefined)
		    throw "hexadecimal key shall be specified for HMAC";
		var mac = new KJUR.crypto.Mac({'alg': sigAlg, 'pass': hextorstr(key)});
		mac.updateString(uSignatureInput);
		hSig = mac.doFinal();
	    } else if (sigAlg.indexOf("withECDSA") != -1) {
		var sig = new KJUR.crypto.Signature({'alg': sigAlg});
		sig.init(key, pass);
		sig.updateString(uSignatureInput);
		hASN1Sig = sig.sign();
		hSig = KJUR.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig);
	    } else if (sigAlg != "none") {
		var sig = new KJUR.crypto.Signature({'alg': sigAlg});
		sig.init(key, pass);
		sig.updateString(uSignatureInput);
		hSig = sig.sign();
	    }
	
	    var uSig = hextob64u(hSig);
	    return uSignatureInput + "." + uSig;
	};
	
	/**
	 * verify JWS signature by specified key or certificate<br/>
	 * @name verify
	 * @memberOf KJUR.jws.JWS
	 * @function
	 * @static
	 * @param {String} sJWS string of JWS signature to verify
	 * @param {String} key string of public key, certificate or key object to verify
	 * @return {Boolean} true if the signature is valid otherwise false
	 * @since jws 3.0.0
	 * @see <a href="http://kjur.github.io/jsrsasign/api/symbols/KJUR.crypto.Signature.html">jsrsasign KJUR.crypto.Signature method</a>
	 * @see <a href="http://kjur.github.io/jsrsasign/api/symbols/KJUR.crypto.Mac.html">jsrsasign KJUR.crypto.Mac method</a>
	 */
	KJUR.jws.JWS.verify = function(sJWS, key) {
	    var jws = KJUR.jws.JWS;
	    var a = sJWS.split(".");
	    var uHeader = a[0];
	    var uPayload = a[1];
	    var uSignatureInput = uHeader + "." + uPayload;
	    var hSig = b64utohex(a[2]);
	
	    var pHeader = jws.readSafeJSONString(b64utoutf8(a[0]));
	    var alg = null;
	    if (pHeader.alg === undefined) {
		throw "algorithm not specified in header";
	    } else {
		alg = pHeader.alg;
	    }
	
	    var sigAlg = null;
	    if (jws.jwsalg2sigalg[pHeader.alg] === undefined) {
		throw "unsupported alg name: " + alg;
	    } else {
		sigAlg = jws.jwsalg2sigalg[alg];
	    }
	
	    // x. verify
	    if (sigAlg == "none") {
		return true;
	    } else if (sigAlg.substr(0, 4) == "Hmac") {
		if (key === undefined)
		    throw "hexadecimal key shall be specified for HMAC";
		var mac = new KJUR.crypto.Mac({'alg': sigAlg, 'pass': hextorstr(key)});
		mac.updateString(uSignatureInput);
		hSig2 = mac.doFinal();
		return hSig == hSig2;
	    } else if (sigAlg.indexOf("withECDSA") != -1) {
		var hASN1Sig = null;
	        try {
		    hASN1Sig = KJUR.crypto.ECDSA.concatSigToASN1Sig(hSig);
		} catch (ex) {
		    return false;
		}
		var sig = new KJUR.crypto.Signature({'alg': sigAlg});
		sig.init(key)
		sig.updateString(uSignatureInput);
		return sig.verify(hASN1Sig);
	    } else {
		var sig = new KJUR.crypto.Signature({'alg': sigAlg});
		sig.init(key)
		sig.updateString(uSignatureInput);
		return sig.verify(hSig);
	    }
	};
	
	/*
	 * @since jws 3.0.0
	 */
	KJUR.jws.JWS.jwsalg2sigalg = {
	    "HS256":	"HmacSHA256",
	    //"HS384":	"HmacSHA384", // unsupported because of CryptoJS bug
	    "HS512":	"HmacSHA512",
	    "RS256":	"SHA256withRSA",
	    "RS384":	"SHA384withRSA",
	    "RS512":	"SHA512withRSA",
	    "ES256":	"SHA256withECDSA",
	    "ES384":	"SHA384withECDSA",
	    //"ES512":	"SHA512withECDSA", // unsupported because of jsrsasign's bug
	    "PS256":	"SHA256withRSAandMGF1",
	    "PS384":	"SHA384withRSAandMGF1",
	    "PS512":	"SHA512withRSAandMGF1",
	    "none":	"none",
	};
	
	// === utility static method ======================================================
	
	/**
	 * check whether a String "s" is a safe JSON string or not.<br/>
	 * If a String "s" is a malformed JSON string or an other object type
	 * this returns 0, otherwise this returns 1.
	 * @name isSafeJSONString
	 * @memberOf KJUR.jws.JWS
	 * @function
	 * @static
	 * @param {String} s JSON string
	 * @return {Number} 1 or 0
	 */
	KJUR.jws.JWS.isSafeJSONString = function(s, h, p) {
	    var o = null;
	    try {
		o = jsonParse(s);
		if (typeof o != "object") return 0;
		if (o.constructor === Array) return 0;
		if (h) h[p] = o;
		return 1;
	    } catch (ex) {
		return 0;
	    }
	};
	
	/**
	 * read a String "s" as JSON object if it is safe.<br/>
	 * If a String "s" is a malformed JSON string or not JSON string,
	 * this returns null, otherwise returns JSON object.
	 * @name readSafeJSONString
	 * @memberOf KJUR.jws.JWS
	 * @function
	 * @static
	 * @param {String} s JSON string
	 * @return {Object} JSON object or null
	 * @since 1.1.1
	 */
	KJUR.jws.JWS.readSafeJSONString = function(s) {
	    var o = null;
	    try {
		o = jsonParse(s);
		if (typeof o != "object") return null;
		if (o.constructor === Array) return null;
		return o;
	    } catch (ex) {
		return null;
	    }
	};
	
	/**
	 * get Encoed Signature Value from JWS string.<br/>
	 * @name getEncodedSignatureValueFromJWS
	 * @memberOf KJUR.jws.JWS
	 * @function
	 * @static
	 * @param {String} sJWS JWS signature string to be verified
	 * @return {String} string of Encoded Signature Value 
	 * @throws if sJWS is not comma separated string such like "Header.Payload.Signature".
	 */
	KJUR.jws.JWS.getEncodedSignatureValueFromJWS = function(sJWS) {
	    if (sJWS.match(/^[^.]+\.[^.]+\.([^.]+)$/) == null) {
		throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
	    }
	    return RegExp.$1;
	};
	
	/**
	 * IntDate class for time representation for JSON Web Token(JWT)
	 * @class KJUR.jws.IntDate class
	 * @name KJUR.jws.IntDate
	 * @since jws 3.0.1
	 * @description
	 * Utility class for IntDate which is integer representation of UNIX origin time
	 * used in JSON Web Token(JWT).
	 */
	KJUR.jws.IntDate = function() {
	};
	
	/**
	 * @name get
	 * @memberOf KJUR.jws.IntDate
	 * @function
	 * @static
	 * @param {String} s string of time representation
	 * @return {Integer} UNIX origin time in seconds for argument 's'
	 * @since jws 3.0.1
	 * @throws "unsupported format: s" when malformed format
	 * @description
	 * This method will accept following representation of time.
	 * <ul>
	 * <li>now - current time</li>
	 * <li>now + 1hour - after 1 hour from now</li>
	 * <li>now + 1day - after 1 day from now</li>
	 * <li>now + 1month - after 30 days from now</li>
	 * <li>now + 1year - after 365 days from now</li>
	 * <li>YYYYmmDDHHMMSSZ - UTC time (ex. 20130828235959Z)</li>
	 * <li>number - UNIX origin time (seconds from 1970-01-01 00:00:00) (ex. 1377714748)</li>
	 * </ul>
	 */
	KJUR.jws.IntDate.get = function(s) {
	    if (s == "now") {
		return KJUR.jws.IntDate.getNow();
	    } else if (s == "now + 1hour") {
		return KJUR.jws.IntDate.getNow() + 60 * 60;
	    } else if (s == "now + 1day") {
		return KJUR.jws.IntDate.getNow() + 60 * 60 * 24;
	    } else if (s == "now + 1month") {
		return KJUR.jws.IntDate.getNow() + 60 * 60 * 24 * 30;
	    } else if (s == "now + 1year") {
		return KJUR.jws.IntDate.getNow() + 60 * 60 * 24 * 365;
	    } else if (s.match(/Z$/)) {
		return KJUR.jws.IntDate.getZulu(s);
	    } else if (s.match(/^[0-9]+$/)) {
		return parseInt(s);
	    }
	    throw "unsupported format: " + s;
	};
	
	KJUR.jws.IntDate.getZulu = function(s) {
	    if (a = s.match(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/)) {
		var year = parseInt(RegExp.$1);
		var month = parseInt(RegExp.$2) - 1;
		var day = parseInt(RegExp.$3);
		var hour = parseInt(RegExp.$4);
		var min = parseInt(RegExp.$5);
		var sec = parseInt(RegExp.$6);
		var d = new Date(Date.UTC(year, month, day, hour, min, sec));
		return ~~(d / 1000);
	    }
	    throw "unsupported format: " + s;
	};
	
	/*
	 * @since jws 3.0.1
	 */
	KJUR.jws.IntDate.getNow = function() {
	    var d = ~~(new Date() / 1000);
	    return d;
	};
	
	/*
	 * @since jws 3.0.1
	 */
	KJUR.jws.IntDate.intDate2UTCString = function(intDate) {
	    var d = new Date(intDate * 1000);
	    return d.toUTCString();
	};
	
	/*
	 * @since jws 3.0.1
	 */
	KJUR.jws.IntDate.intDate2Zulu = function(intDate) {
	    var d = new Date(intDate * 1000);
	    var year = ("0000" + d.getUTCFullYear()).slice(-4);    
	    var mon =  ("00" + (d.getUTCMonth() + 1)).slice(-2);    
	    var day =  ("00" + d.getUTCDate()).slice(-2);    
	    var hour = ("00" + d.getUTCHours()).slice(-2);    
	    var min =  ("00" + d.getUTCMinutes()).slice(-2);    
	    var sec =  ("00" + d.getUTCSeconds()).slice(-2);    
	    return year + mon + day + hour + min + sec + "Z";
	};
	
	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   2.0.0
	 */
	
	(function() {
	    "use strict";
	
	    function $$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }
	
	    function $$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }
	
	    function $$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }
	
	    var $$utils$$_isArray;
	
	    if (!Array.isArray) {
	      $$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      $$utils$$_isArray = Array.isArray;
	    }
	
	    var $$utils$$isArray = $$utils$$_isArray;
	    var $$utils$$now = Date.now || function() { return new Date().getTime(); };
	    function $$utils$$F() { }
	
	    var $$utils$$o_create = (Object.create || function (o) {
	      if (arguments.length > 1) {
	        throw new Error('Second argument not supported');
	      }
	      if (typeof o !== 'object') {
	        throw new TypeError('Argument must be an object');
	      }
	      $$utils$$F.prototype = o;
	      return new $$utils$$F();
	    });
	
	    var $$asap$$len = 0;
	
	    var $$asap$$default = function asap(callback, arg) {
	      $$asap$$queue[$$asap$$len] = callback;
	      $$asap$$queue[$$asap$$len + 1] = arg;
	      $$asap$$len += 2;
	      if ($$asap$$len === 2) {
	        // If len is 1, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        $$asap$$scheduleFlush();
	      }
	    };
	
	    var $$asap$$browserGlobal = (typeof window !== 'undefined') ? window : {};
	    var $$asap$$BrowserMutationObserver = $$asap$$browserGlobal.MutationObserver || $$asap$$browserGlobal.WebKitMutationObserver;
	
	    // test for web worker but not in IE10
	    var $$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';
	
	    // node
	    function $$asap$$useNextTick() {
	      return function() {
	        process.nextTick($$asap$$flush);
	      };
	    }
	
	    function $$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new $$asap$$BrowserMutationObserver($$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });
	
	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }
	
	    // web worker
	    function $$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = $$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }
	
	    function $$asap$$useSetTimeout() {
	      return function() {
	        setTimeout($$asap$$flush, 1);
	      };
	    }
	
	    var $$asap$$queue = new Array(1000);
	
	    function $$asap$$flush() {
	      for (var i = 0; i < $$asap$$len; i+=2) {
	        var callback = $$asap$$queue[i];
	        var arg = $$asap$$queue[i+1];
	
	        callback(arg);
	
	        $$asap$$queue[i] = undefined;
	        $$asap$$queue[i+1] = undefined;
	      }
	
	      $$asap$$len = 0;
	    }
	
	    var $$asap$$scheduleFlush;
	
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
	      $$asap$$scheduleFlush = $$asap$$useNextTick();
	    } else if ($$asap$$BrowserMutationObserver) {
	      $$asap$$scheduleFlush = $$asap$$useMutationObserver();
	    } else if ($$asap$$isWorker) {
	      $$asap$$scheduleFlush = $$asap$$useMessageChannel();
	    } else {
	      $$asap$$scheduleFlush = $$asap$$useSetTimeout();
	    }
	
	    function $$$internal$$noop() {}
	    var $$$internal$$PENDING   = void 0;
	    var $$$internal$$FULFILLED = 1;
	    var $$$internal$$REJECTED  = 2;
	    var $$$internal$$GET_THEN_ERROR = new $$$internal$$ErrorObject();
	
	    function $$$internal$$selfFullfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }
	
	    function $$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.')
	    }
	
	    function $$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        $$$internal$$GET_THEN_ERROR.error = error;
	        return $$$internal$$GET_THEN_ERROR;
	      }
	    }
	
	    function $$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }
	
	    function $$$internal$$handleForeignThenable(promise, thenable, then) {
	       $$asap$$default(function(promise) {
	        var sealed = false;
	        var error = $$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            $$$internal$$resolve(promise, value);
	          } else {
	            $$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;
	
	          $$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	        if (!sealed && error) {
	          sealed = true;
	          $$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }
	
	    function $$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === $$$internal$$FULFILLED) {
	        $$$internal$$fulfill(promise, thenable._result);
	      } else if (promise._state === $$$internal$$REJECTED) {
	        $$$internal$$reject(promise, thenable._result);
	      } else {
	        $$$internal$$subscribe(thenable, undefined, function(value) {
	          $$$internal$$resolve(promise, value);
	        }, function(reason) {
	          $$$internal$$reject(promise, reason);
	        });
	      }
	    }
	
	    function $$$internal$$handleMaybeThenable(promise, maybeThenable) {
	      if (maybeThenable.constructor === promise.constructor) {
	        $$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        var then = $$$internal$$getThen(maybeThenable);
	
	        if (then === $$$internal$$GET_THEN_ERROR) {
	          $$$internal$$reject(promise, $$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          $$$internal$$fulfill(promise, maybeThenable);
	        } else if ($$utils$$isFunction(then)) {
	          $$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          $$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }
	
	    function $$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        $$$internal$$reject(promise, $$$internal$$selfFullfillment());
	      } else if ($$utils$$objectOrFunction(value)) {
	        $$$internal$$handleMaybeThenable(promise, value);
	      } else {
	        $$$internal$$fulfill(promise, value);
	      }
	    }
	
	    function $$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }
	
	      $$$internal$$publish(promise);
	    }
	
	    function $$$internal$$fulfill(promise, value) {
	      if (promise._state !== $$$internal$$PENDING) { return; }
	
	      promise._result = value;
	      promise._state = $$$internal$$FULFILLED;
	
	      if (promise._subscribers.length === 0) {
	      } else {
	        $$asap$$default($$$internal$$publish, promise);
	      }
	    }
	
	    function $$$internal$$reject(promise, reason) {
	      if (promise._state !== $$$internal$$PENDING) { return; }
	      promise._state = $$$internal$$REJECTED;
	      promise._result = reason;
	
	      $$asap$$default($$$internal$$publishRejection, promise);
	    }
	
	    function $$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;
	
	      parent._onerror = null;
	
	      subscribers[length] = child;
	      subscribers[length + $$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + $$$internal$$REJECTED]  = onRejection;
	
	      if (length === 0 && parent._state) {
	        $$asap$$default($$$internal$$publish, parent);
	      }
	    }
	
	    function $$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;
	
	      if (subscribers.length === 0) { return; }
	
	      var child, callback, detail = promise._result;
	
	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];
	
	        if (child) {
	          $$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }
	
	      promise._subscribers.length = 0;
	    }
	
	    function $$$internal$$ErrorObject() {
	      this.error = null;
	    }
	
	    var $$$internal$$TRY_CATCH_ERROR = new $$$internal$$ErrorObject();
	
	    function $$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        $$$internal$$TRY_CATCH_ERROR.error = e;
	        return $$$internal$$TRY_CATCH_ERROR;
	      }
	    }
	
	    function $$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = $$utils$$isFunction(callback),
	          value, error, succeeded, failed;
	
	      if (hasCallback) {
	        value = $$$internal$$tryCatch(callback, detail);
	
	        if (value === $$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }
	
	        if (promise === value) {
	          $$$internal$$reject(promise, $$$internal$$cannotReturnOwn());
	          return;
	        }
	
	      } else {
	        value = detail;
	        succeeded = true;
	      }
	
	      if (promise._state !== $$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        $$$internal$$resolve(promise, value);
	      } else if (failed) {
	        $$$internal$$reject(promise, error);
	      } else if (settled === $$$internal$$FULFILLED) {
	        $$$internal$$fulfill(promise, value);
	      } else if (settled === $$$internal$$REJECTED) {
	        $$$internal$$reject(promise, value);
	      }
	    }
	
	    function $$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          $$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          $$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        $$$internal$$reject(promise, e);
	      }
	    }
	
	    function $$$enumerator$$makeSettledResult(state, position, value) {
	      if (state === $$$internal$$FULFILLED) {
	        return {
	          state: 'fulfilled',
	          value: value
	        };
	      } else {
	        return {
	          state: 'rejected',
	          reason: value
	        };
	      }
	    }
	
	    function $$$enumerator$$Enumerator(Constructor, input, abortOnReject, label) {
	      this._instanceConstructor = Constructor;
	      this.promise = new Constructor($$$internal$$noop, label);
	      this._abortOnReject = abortOnReject;
	
	      if (this._validateInput(input)) {
	        this._input     = input;
	        this.length     = input.length;
	        this._remaining = input.length;
	
	        this._init();
	
	        if (this.length === 0) {
	          $$$internal$$fulfill(this.promise, this._result);
	        } else {
	          this.length = this.length || 0;
	          this._enumerate();
	          if (this._remaining === 0) {
	            $$$internal$$fulfill(this.promise, this._result);
	          }
	        }
	      } else {
	        $$$internal$$reject(this.promise, this._validationError());
	      }
	    }
	
	    $$$enumerator$$Enumerator.prototype._validateInput = function(input) {
	      return $$utils$$isArray(input);
	    };
	
	    $$$enumerator$$Enumerator.prototype._validationError = function() {
	      return new Error('Array Methods must be provided an Array');
	    };
	
	    $$$enumerator$$Enumerator.prototype._init = function() {
	      this._result = new Array(this.length);
	    };
	
	    var $$$enumerator$$default = $$$enumerator$$Enumerator;
	
	    $$$enumerator$$Enumerator.prototype._enumerate = function() {
	      var length  = this.length;
	      var promise = this.promise;
	      var input   = this._input;
	
	      for (var i = 0; promise._state === $$$internal$$PENDING && i < length; i++) {
	        this._eachEntry(input[i], i);
	      }
	    };
	
	    $$$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var c = this._instanceConstructor;
	      if ($$utils$$isMaybeThenable(entry)) {
	        if (entry.constructor === c && entry._state !== $$$internal$$PENDING) {
	          entry._onerror = null;
	          this._settledAt(entry._state, i, entry._result);
	        } else {
	          this._willSettleAt(c.resolve(entry), i);
	        }
	      } else {
	        this._remaining--;
	        this._result[i] = this._makeResult($$$internal$$FULFILLED, i, entry);
	      }
	    };
	
	    $$$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var promise = this.promise;
	
	      if (promise._state === $$$internal$$PENDING) {
	        this._remaining--;
	
	        if (this._abortOnReject && state === $$$internal$$REJECTED) {
	          $$$internal$$reject(promise, value);
	        } else {
	          this._result[i] = this._makeResult(state, i, value);
	        }
	      }
	
	      if (this._remaining === 0) {
	        $$$internal$$fulfill(promise, this._result);
	      }
	    };
	
	    $$$enumerator$$Enumerator.prototype._makeResult = function(state, i, value) {
	      return value;
	    };
	
	    $$$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;
	
	      $$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt($$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt($$$internal$$REJECTED, i, reason);
	      });
	    };
	
	    var $$promise$all$$default = function all(entries, label) {
	      return new $$$enumerator$$default(this, entries, true /* abort on reject */, label).promise;
	    };
	
	    var $$promise$race$$default = function race(entries, label) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      var promise = new Constructor($$$internal$$noop, label);
	
	      if (!$$utils$$isArray(entries)) {
	        $$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	        return promise;
	      }
	
	      var length = entries.length;
	
	      function onFulfillment(value) {
	        $$$internal$$resolve(promise, value);
	      }
	
	      function onRejection(reason) {
	        $$$internal$$reject(promise, reason);
	      }
	
	      for (var i = 0; promise._state === $$$internal$$PENDING && i < length; i++) {
	        $$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	      }
	
	      return promise;
	    };
	
	    var $$promise$resolve$$default = function resolve(object, label) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }
	
	      var promise = new Constructor($$$internal$$noop, label);
	      $$$internal$$resolve(promise, object);
	      return promise;
	    };
	
	    var $$promise$reject$$default = function reject(reason, label) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor($$$internal$$noop, label);
	      $$$internal$$reject(promise, reason);
	      return promise;
	    };
	
	    var $$es6$promise$promise$$counter = 0;
	
	    function $$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }
	
	    function $$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }
	
	    var $$es6$promise$promise$$default = $$es6$promise$promise$$Promise;
	
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise’s eventual value or the reason
	      why the promise cannot be fulfilled.
	
	      Terminology
	      -----------
	
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	
	
	      Basic Usage:
	      ------------
	
	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	
	        // on failure
	        reject(reason);
	      });
	
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Advanced Usage:
	      ---------------
	
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();
	
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Unlike callbacks, promises are great composable primitives.
	
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	
	        return values;
	      });
	      ```
	
	      @class Promise
	      @param {function} resolver
	      @param {String} label optional string for labeling the promise.
	      Useful for tooling.
	      @constructor
	    */
	    function $$es6$promise$promise$$Promise(resolver, label) {
	      this._id = $$es6$promise$promise$$counter++;
	      this._label = label;
	      this._state = undefined;
	      this._result = undefined;
	      this._subscribers = [];
	
	      if ($$$internal$$noop !== resolver) {
	        if (!$$utils$$isFunction(resolver)) {
	          $$es6$promise$promise$$needsResolver();
	        }
	
	        if (!(this instanceof $$es6$promise$promise$$Promise)) {
	          $$es6$promise$promise$$needsNew();
	        }
	
	        $$$internal$$initializePromise(this, resolver);
	      }
	    }
	
	    $$es6$promise$promise$$Promise.all = $$promise$all$$default;
	    $$es6$promise$promise$$Promise.race = $$promise$race$$default;
	    $$es6$promise$promise$$Promise.resolve = $$promise$resolve$$default;
	    $$es6$promise$promise$$Promise.reject = $$promise$reject$$default;
	
	    $$es6$promise$promise$$Promise.prototype = {
	      constructor: $$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	
	      Chaining
	      --------
	
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	
	      Assimilation
	      ------------
	
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	
	      If the assimliated promise rejects, then the downstream promise will also reject.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	
	      Simple Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var result;
	
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	
	      Advanced Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var author, books;
	
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	
	      function foundBooks(books) {
	
	      }
	
	      function failure(reason) {
	
	      }
	
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      @param {String} label optional string for labeling the promise.
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: function(onFulfillment, onRejection, label) {
	        var parent = this;
	        var state = parent._state;
	
	        if (state === $$$internal$$FULFILLED && !onFulfillment || state === $$$internal$$REJECTED && !onRejection) {
	          return this;
	        }
	
	        parent._onerror = null;
	
	        var child = new this.constructor($$$internal$$noop, label);
	        var result = parent._result;
	
	        if (state) {
	          var callback = arguments[state - 1];
	          $$asap$$default(function(){
	            $$$internal$$invokeCallback(state, child, callback, result);
	          });
	        } else {
	          $$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	        }
	
	        return child;
	      },
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method catch
	      @param {Function} onRejection
	      @param {String} label optional string for labeling the promise.
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection, label) {
	        return this.then(null, onRejection, label);
	      }
	    };
	
	    var $$es6$promise$polyfill$$default = function polyfill() {
	      var local;
	
	      if (typeof global !== 'undefined') {
	        local = global;
	      } else if (typeof window !== 'undefined' && window.document) {
	        local = window;
	      } else {
	        local = self;
	      }
	
	      var es6PromiseSupport =
	        "Promise" in local &&
	        // Some of these methods are missing from
	        // Firefox/Chrome experimental implementations
	        "resolve" in local.Promise &&
	        "reject" in local.Promise &&
	        "all" in local.Promise &&
	        "race" in local.Promise &&
	        // Older version of the spec had a resolver object
	        // as the arg rather than a function
	        (function() {
	          var resolve;
	          new local.Promise(function(r) { resolve = r; });
	          return $$utils$$isFunction(resolve);
	        }());
	
	      if (!es6PromiseSupport) {
	        local.Promise = $$es6$promise$promise$$default;
	      }
	    };
	
	    var es6$promise$umd$$ES6Promise = {
	      Promise: $$es6$promise$promise$$default,
	      polyfill: $$es6$promise$polyfill$$default
	    };
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(369)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = es6$promise$umd$$ES6Promise;
	    }
	
	    window.Promise = window.Promise || this['ES6Promise'].Promise; // do this to access Promise directly
	}).call(this);
	/**
	 * @constructor
	 */
	function DefaultHttpRequest() {
	
	    /**
	     * @name _promiseFactory
	     * @type DefaultPromiseFactory
	     */
	
	    /**
	     * @param {XMLHttpRequest} xhr
	     * @param {object.<string, string>} headers
	     */
	    function setHeaders(xhr, headers) {
	        var keys = Object.keys(headers);
	
	        for (var i = 0; i < keys.length; i++) {
	            var key = keys[i];
	            var value = headers[key];
	
	            xhr.setRequestHeader(key, value);
	        }
	    }
	
	    /**
	     * @param {string} url
	     * @param {{ headers: object.<string, string> }} [config]
	     * @returns {Promise}
	     */
	    this.getJSON = function (url, config) {
	        return _promiseFactory.create(function (resolve, reject) {
	
	            try {
	                var xhr = new XMLHttpRequest();
	                xhr.open("GET", url);
	                xhr.responseType = "json";
	
	                if (config) {
	                    if (config.headers) {
	                        setHeaders(xhr, config.headers);
	                    }
	                }
	
	                xhr.onload = function () {
	                    try {
	                        if (xhr.status === 200) {
	                            var response = xhr.response;
	                            if (typeof response === "string") {
	                                response = JSON.parse(response);
	                            }
	                            resolve(response);
	                        }
	                        else {
	                            reject(Error(xhr.statusText + "(" + xhr.status + ")"));
	                        }
	                    }
	                    catch (err) {
	                        reject(err);
	                    }
	                };
	
	                xhr.onerror = function () {
	                    reject(Error("Network error"));
	                };
	
	                xhr.send();
	            }
	            catch (err) {
	                return reject(err);
	            }
	        });
	    };
	}
	
	_httpRequest = new DefaultHttpRequest();
	
	/**
	 * @constructor
	 * @param {Promise} promise
	 */
	function DefaultPromise(promise) {
	
	    /**
	     * @param {function(*):*} successCallback
	     * @param {function(*):*} errorCallback
	     * @returns {DefaultPromise}
	     */
	    this.then = function (successCallback, errorCallback) {
	        var childPromise = promise.then(successCallback, errorCallback);
	
	        return new DefaultPromise(childPromise);
	    };
	
	    /**
	     *
	     * @param {function(*):*} errorCallback
	     * @returns {DefaultPromise}
	     */
	    this.catch = function (errorCallback) {
	        var childPromise = promise.catch(errorCallback);
	
	        return new DefaultPromise(childPromise);
	    };
	}
	
	/**
	 * @constructor
	 */
	function DefaultPromiseFactory() {
	
	    this.resolve = function (value) {
	        return new DefaultPromise(Promise.resolve(value));
	    };
	
	    this.reject = function (reason) {
	        return new DefaultPromise(Promise.reject(reason));
	    };
	
	    /**
	     * @param {function(resolve:function, reject:function)} callback
	     * @returns {DefaultPromise}
	     */
	    this.create = function (callback) {
	        return new DefaultPromise(new Promise(callback));
	    };
	}
	
	_promiseFactory = new DefaultPromiseFactory();
	/*
	 * Copyright 2015 Dominick Baier, Brock Allen
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	function log() {
	    //var param = [].join.call(arguments);
	    //console.log(param);
	}
	
	function copy(obj, target) {
	    target = target || {};
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            target[key] = obj[key];
	        }
	    }
	    return target;
	}
	
	function rand() {
	    return ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
	}
	
	function error(message) {
	    return _promiseFactory.reject(Error(message));
	}
	
	function parseOidcResult(queryString) {
	    log("parseOidcResult");
	
	    queryString = queryString || location.hash;
	
	    var idx = queryString.lastIndexOf("#");
	    if (idx >= 0) {
	        queryString = queryString.substr(idx + 1);
	    }
	
	    var params = {},
	        regex = /([^&=]+)=([^&]*)/g,
	        m;
	
	    var counter = 0;
	    while (m = regex.exec(queryString)) {
	        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
	        if (counter++ > 50) {
	            return {
	                error: "Response exceeded expected number of parameters"
	            };
	        }
	    }
	
	    for (var prop in params) {
	        return params;
	    }
	}
	
	function getJson(url, token) {
	    log("getJson", url);
	
	    var config = {};
	
	    if (token) {
	        config.headers = {"Authorization": "Bearer " + token};
	    }
	
	    return _httpRequest.getJSON(url, config);
	}
	
	function OidcClient(settings) {
	    this._settings = settings || {};
	
	    if (!this._settings.request_state_key) {
	        this._settings.request_state_key = "OidcClient.request_state";
	    }
	
	    if (!this._settings.request_state_store) {
	        this._settings.request_state_store = window.localStorage;
	    }
	
	    if (typeof this._settings.load_user_profile === 'undefined') {
	        this._settings.load_user_profile = true;
	    }
	
	    if (typeof this._settings.filter_protocol_claims === 'undefined') {
	        this._settings.filter_protocol_claims = true;
	    }
	
	    if (this._settings.authority && this._settings.authority.indexOf('.well-known/openid-configuration') < 0) {
	        if (this._settings.authority[this._settings.authority.length - 1] !== '/') {
	            this._settings.authority += '/';
	        }
	        this._settings.authority += '.well-known/openid-configuration';
	    }
	
	    if (!this._settings.response_type) {
	        this._settings.response_type = "id_token token";
	    }
	
	    Object.defineProperty(this, "isOidc", {
	        get: function () {
	            if (this._settings.response_type) {
	                var result = this._settings.response_type.split(/\s+/g).filter(function (item) {
	                    return item === "id_token";
	                });
	                return !!(result[0]);
	            }
	            return false;
	        }
	    });
	
	    Object.defineProperty(this, "isOAuth", {
	        get: function () {
	            if (this._settings.response_type) {
	                var result = this._settings.response_type.split(/\s+/g).filter(function (item) {
	                    return item === "token";
	                });
	                return !!(result[0]);
	            }
	            return false;
	        }
	    });
	}
	
	OidcClient.prototype.loadMetadataAsync = function () {
	    log("OidcClient.loadMetadataAsync");
	
	    var settings = this._settings;
	
	    if (settings.metadata) {
	        return _promiseFactory.resolve(settings.metadata);
	    }
	
	    if (!settings.authority) {
	        return error("No authority configured");
	    }
	
	    return getJson(settings.authority)
	        .then(function (metadata) {
	            settings.metadata = metadata;
	            return metadata;
	        }, function (err) {
	            return error("Failed to load metadata (" + err.message + ")");
	        });
	};
	
	OidcClient.prototype.loadX509SigningKeyAsync = function () {
	    log("OidcClient.loadX509SigningKeyAsync");
	
	    var settings = this._settings;
	
	    function getKeyAsync(jwks) {
	        if (!jwks.keys || !jwks.keys.length) {
	            return error("Signing keys empty");
	        }
	
	        var key = jwks.keys[0];
	        if (key.kty !== "RSA") {
	            return error("Signing key not RSA");
	        }
	
	        if (!key.x5c || !key.x5c.length) {
	            return error("RSA keys empty");
	        }
	
	        return _promiseFactory.resolve(key.x5c[0]);
	    }
	
	    if (settings.jwks) {
	        return getKeyAsync(settings.jwks);
	    }
	
	    return this.loadMetadataAsync().then(function (metadata) {
	        if (!metadata.jwks_uri) {
	            return error("Metadata does not contain jwks_uri");
	        }
	
	        return getJson(metadata.jwks_uri).then(function (jwks) {
	            settings.jwks = jwks;
	            return getKeyAsync(jwks);
	        }, function (err) {
	            return error("Failed to load signing keys (" + err.message + ")");
	        });
	    });
	};
	
	OidcClient.prototype.loadUserProfile = function (access_token) {
	    log("OidcClient.loadUserProfile");
	
	    return this.loadMetadataAsync().then(function (metadata) {
	
	        if (!metadata.userinfo_endpoint) {
	            return _promiseFactory.reject(Error("Metadata does not contain userinfo_endpoint"));
	        }
	
	        return getJson(metadata.userinfo_endpoint, access_token);
	    });
	}
	
	OidcClient.prototype.loadAuthorizationEndpoint = function () {
	    log("OidcClient.loadAuthorizationEndpoint");
	
	    if (this._settings.authorization_endpoint) {
	        return _promiseFactory.resolve(this._settings.authorization_endpoint);
	    }
	
	    if (!this._settings.authority) {
	        return error("No authorization_endpoint configured");
	    }
	
	    return this.loadMetadataAsync().then(function (metadata) {
	        if (!metadata.authorization_endpoint) {
	            return error("Metadata does not contain authorization_endpoint");
	        }
	
	        return metadata.authorization_endpoint;
	    });
	};
	
	OidcClient.prototype.createTokenRequestAsync = function () {
	    log("OidcClient.createTokenRequestAsync");
	
	    var client = this;
	    var settings = client._settings;
	
	    return client.loadAuthorizationEndpoint().then(function (authorization_endpoint) {
	
	        var state = rand();
	        var url = authorization_endpoint + "?state=" + encodeURIComponent(state);
	
	        if (client.isOidc) {
	            var nonce = rand();
	            url += "&nonce=" + encodeURIComponent(nonce);
	        }
	
	        var required = ["client_id", "redirect_uri", "response_type", "scope"];
	        required.forEach(function (key) {
	            var value = settings[key];
	            if (value) {
	                url += "&" + key + "=" + encodeURIComponent(value);
	            }
	        });
	
	        var optional = ["prompt", "display", "max_age", "ui_locales", "id_token_hint", "login_hint", "acr_values"];
	        optional.forEach(function (key) {
	            var value = settings[key];
	            if (value) {
	                url += "&" + key + "=" + encodeURIComponent(value);
	            }
	        });
	
	        var request_state = {
	            oidc: client.isOidc,
	            oauth: client.isOAuth,
	            state: state
	        };
	
	        if (nonce) {
	            request_state["nonce"] = nonce;
	        }
	
	        settings.request_state_store.setItem(settings.request_state_key, JSON.stringify(request_state));
	
	        return {
	            request_state: request_state,
	            url: url
	        };
	    });
	}
	
	OidcClient.prototype.createLogoutRequestAsync = function (id_token_hint) {
	    log("OidcClient.createLogoutRequestAsync");
	
	    var settings = this._settings;
	    return this.loadMetadataAsync().then(function (metadata) {
	        if (!metadata.end_session_endpoint) {
	            return error("No end_session_endpoint in metadata");
	        }
	
	        var url = metadata.end_session_endpoint;
	        if (id_token_hint && settings.post_logout_redirect_uri) {
	            url += "?post_logout_redirect_uri=" + encodeURIComponent(settings.post_logout_redirect_uri);
	            url += "&id_token_hint=" + encodeURIComponent(id_token_hint);
	        }
	        return url;
	    });
	}
	
	OidcClient.prototype.validateIdTokenAsync = function (id_token, nonce, access_token) {
	    log("OidcClient.validateIdTokenAsync");
	
	    var client = this;
	    var settings = client._settings;
	
	    return client.loadX509SigningKeyAsync().then(function (cert) {
	
	        var jws = new KJUR.jws.JWS();
	        if (jws.verifyJWSByPemX509Cert(id_token, cert)) {
	            var id_token_contents = JSON.parse(jws.parsedJWS.payloadS);
	
	            if (nonce !== id_token_contents.nonce) {
	                return error("Invalid nonce");
	            }
	
	            return client.loadMetadataAsync().then(function (metadata) {
	
	                if (id_token_contents.iss !== metadata.issuer) {
	                    return error("Invalid issuer");
	                }
	
	                if (id_token_contents.aud !== settings.client_id) {
	                    return error("Invalid audience");
	                }
	
	                var now = parseInt(Date.now() / 1000);
	
	                // accept tokens issues up to 5 mins ago
	                var diff = now - id_token_contents.iat;
	                if (diff > (5 * 60)) {
	                    return error("Token issued too long ago");
	                }
	
	                if (id_token_contents.exp < now) {
	                    return error("Token expired");
	                }
	
	                if (access_token && settings.load_user_profile) {
	                    // if we have an access token, then call user info endpoint
	                    return client.loadUserProfile(access_token, id_token_contents).then(function (profile) {
	                        return copy(profile, id_token_contents);
	                    });
	                }
	                else {
	                    // no access token, so we have all our claims
	                    return id_token_contents;
	                }
	
	            });
	        }
	        else {
	            return error("JWT failed to validate");
	        }
	
	    });
	
	};
	
	OidcClient.prototype.validateAccessTokenAsync = function (id_token_contents, access_token) {
	    log("OidcClient.validateAccessTokenAsync");
	
	    if (!id_token_contents.at_hash) {
	        return error("No at_hash in id_token");
	    }
	
	    var hash = KJUR.crypto.Util.sha256(access_token);
	    var left = hash.substr(0, hash.length / 2);
	    var left_b64u = hextob64u(left);
	
	    if (left_b64u !== id_token_contents.at_hash) {
	        return error("at_hash failed to validate");
	    }
	
	    return _promiseFactory.resolve();
	};
	
	OidcClient.prototype.validateIdTokenAndAccessTokenAsync = function (id_token, nonce, access_token) {
	    log("OidcClient.validateIdTokenAndAccessTokenAsync");
	
	    var client = this;
	
	    return client.validateIdTokenAsync(id_token, nonce, access_token).then(function (id_token_contents) {
	
	        return client.validateAccessTokenAsync(id_token_contents, access_token).then(function () {
	
	            return id_token_contents;
	
	        });
	
	    });
	}
	
	OidcClient.prototype.processResponseAsync = function (queryString) {
	    log("OidcClient.processResponseAsync");
	
	    var client = this;
	    var settings = client._settings;
	
	    var request_state = settings.request_state_store.getItem(settings.request_state_key);
	    settings.request_state_store.removeItem(settings.request_state_key);
	
	    if (!request_state) {
	        return error("No request state loaded");
	    }
	
	    request_state = JSON.parse(request_state);
	    if (!request_state) {
	        return error("No request state loaded");
	    }
	
	    if (!request_state.state) {
	        return error("No state loaded");
	    }
	
	    var result = parseOidcResult(queryString);
	    if (!result) {
	        return error("No OIDC response");
	    }
	
	    if (result.error) {
	        return error(result.error);
	    }
	
	    if (result.state !== request_state.state) {
	        return error("Invalid state");
	    }
	
	    if (request_state.oidc) {
	        if (!result.id_token) {
	            return error("No identity token");
	        }
	
	        if (!request_state.nonce) {
	            return error("No nonce loaded");
	        }
	    }
	
	    if (request_state.oauth) {
	        if (!result.access_token) {
	            return error("No access token");
	        }
	
	        if (!result.token_type || result.token_type.toLowerCase() !== "bearer") {
	            return error("Invalid token type");
	        }
	
	        if (!result.expires_in) {
	            return error("No token expiration");
	        }
	    }
	
	    var promise = _promiseFactory.resolve();
	    if (request_state.oidc && request_state.oauth) {
	        promise = client.validateIdTokenAndAccessTokenAsync(result.id_token, request_state.nonce, result.access_token);
	    }
	    else if (request_state.oidc) {
	        promise = client.validateIdTokenAsync(result.id_token, request_state.nonce);
	    }
	
	    return promise.then(function (profile) {
	        if (profile && settings.filter_protocol_claims) {
	            var remove = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "idp"];
	            remove.forEach(function (key) {
	                delete profile[key];
	            });
	        }
	
	        return {
	            profile: profile,
	            id_token: result.id_token,
	            access_token: result.access_token,
	            expires_in: result.expires_in,
	            scope: result.scope,
	            session_state : result.session_state
	        };
	    });
	}
	
	    // exports
	    window.OidcClient = OidcClient;
	})();
	/*
	* Copyright 2014 Dominick Baier, Brock Allen
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*   http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	var _httpRequest = new DefaultHttpRequest();
	var _promiseFactory = new DefaultPromiseFactory();
	
	function copy(obj, target) {
	    target = target || {};
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            target[key] = obj[key];
	        }
	    }
	    return target;
	}
	
	function Token(other) {
	    if (other) {
	        this.profile = other.profile;
	        this.id_token = other.id_token;
	        this.access_token = other.access_token;
	        if (other.access_token) {
	            this.expires_at = parseInt(other.expires_at);
	        }
	        else if (other.id_token) {
	            this.expires_at = other.profile.exp;
	        }
	        else {
	            throw Error("Either access_token or id_token required.");
	        }
	        this.scopes = (other.scope || "").split(" ");
	        this.session_state = other.session_state;
	    }
	    else {
	        this.expires_at = 0;
	    }
	
	    Object.defineProperty(this, "expired", {
	        get: function () {
	            var now = parseInt(Date.now() / 1000);
	            return this.expires_at < now;
	        }
	    });
	
	    Object.defineProperty(this, "expires_in", {
	        get: function () {
	            var now = parseInt(Date.now() / 1000);
	            return this.expires_at - now;
	        }
	    });
	}
	
	Token.fromResponse = function (response) {
	    if (response.access_token) {
	        var now = parseInt(Date.now() / 1000);
	        response.expires_at = now + parseInt(response.expires_in);
	    }
	    return new Token(response);
	}
	
	Token.fromJSON = function (json) {
	    if (json) {
	        try {
	            var obj = JSON.parse(json);
	            return new Token(obj);
	        }
	        catch (e) {
	        }
	    }
	    return new Token(null);
	}
	
	Token.prototype.toJSON = function () {
	    return JSON.stringify({
	        profile: this.profile,
	        id_token: this.id_token,
	        access_token: this.access_token,
	        expires_at: this.expires_at,
	        scope: this.scopes.join(" "),
	        session_state: this.session_state
	    });
	}
	
	function FrameLoader(url) {
	    this.url = url;
	}
	
	FrameLoader.prototype.loadAsync = function (url) {
	    url = url || this.url;
	
	    if (!url) {
	        return _promiseFactory.reject("No url provided");
	    }
	
	    return _promiseFactory.create(function (resolve, reject) {
	        var frame = window.document.createElement("iframe");
	        frame.style.display = "none";
	
	        function cleanup() {
	            window.removeEventListener("message", message, false);
	            if (handle) {
	                window.clearTimeout(handle);
	            }
	            handle = null;
	            window.document.body.removeChild(frame);
	        }
	
	        function cancel(e) {
	            cleanup();
	            reject();
	        }
	
	        function message(e) {
	            if (handle && e.origin === location.protocol + "//" + location.host && e.source == frame.contentWindow) {
	                cleanup();
	                resolve(e.data);
	            }
	        }
	
	        var handle = window.setTimeout(cancel, 5000);
	        window.addEventListener("message", message, false);
	        window.document.body.appendChild(frame);
	        frame.src = url;
	    });
	}
	
	function loadToken(mgr) {
	    mgr._token = null;
	    if (mgr._settings.persist) {
	        var tokenJson = mgr._settings.store.getItem(mgr._settings.persistKey);
	        if (tokenJson) {
	            var token = Token.fromJSON(tokenJson);
	            if (!token.expired) {
	                mgr._token = token;
	            }
	        }
	    }
	}
	
	function configureTokenExpiring(mgr) {
	
	    function callback() {
	        handle = null;
	        mgr._callTokenExpiring();
	    }
	
	    var handle = null;
	
	    function cancel() {
	        if (handle) {
	            window.clearTimeout(handle);
	            handle = null;
	        }
	    }
	
	    function setup(duration) {
	        handle = window.setTimeout(callback, duration * 1000);
	    }
	
	    function configure() {
	        cancel();
	
	        if (!mgr.expired) {
	            var duration = mgr.expires_in;
	            if (duration > 60) {
	                setup(duration - 60);
	            }
	            else {
	                callback();
	            }
	        }
	    }
	
	    configure();
	
	    mgr.addOnTokenObtained(configure);
	    mgr.addOnTokenRemoved(cancel);
	}
	
	function configureAutoRenewToken(mgr) {
	
	    if (mgr._settings.silent_redirect_uri && mgr._settings.silent_renew) {
	
	        mgr.addOnTokenExpiring(function () {
	            mgr.renewTokenSilentAsync().catch(function (e) {
	                mgr._callSilentTokenRenewFailed();
	                console.error(e.message || e);
	            });
	        });
	
	    }
	}
	
	function configureTokenExpired(mgr) {
	
	    function callback() {
	        handle = null;
	
	        if (mgr._token) {
	            mgr.saveToken(null);
	        }
	
	        mgr._callTokenExpired();
	    }
	
	    var handle = null;
	
	    function cancel() {
	        if (handle) {
	            window.clearTimeout(handle);
	            handle = null;
	        }
	    }
	
	    function setup(duration) {
	        handle = window.setTimeout(callback, duration * 1000);
	    }
	
	    function configure() {
	        cancel();
	        if (mgr.expires_in > 0) {
	            // register 1 second beyond expiration so we don't get into edge conditions for expiration
	            setup(mgr.expires_in + 1);
	        }
	    }
	
	    configure();
	
	    mgr.addOnTokenObtained(configure);
	    mgr.addOnTokenRemoved(cancel);
	}
	
	function TokenManager(settings) {
	    this._settings = settings || {};
	
	    this._settings.persist = this._settings.persist || true;
	    this._settings.store = this._settings.store || window.localStorage;
	    this._settings.persistKey = this._settings.persistKey || "TokenManager.token";
	
	    this.oidcClient = new OidcClient(this._settings);
	
	    this._callbacks = {
	        tokenRemovedCallbacks: [],
	        tokenExpiringCallbacks: [],
	        tokenExpiredCallbacks: [],
	        tokenObtainedCallbacks: [],
	        silentTokenRenewFailedCallbacks: []
	    };
	
	    Object.defineProperty(this, "profile", {
	        get: function () {
	            if (this._token) {
	                return this._token.profile;
	            }
	        }
	    });
	    Object.defineProperty(this, "id_token", {
	        get: function () {
	            if (this._token) {
	                return this._token.id_token;
	            }
	        }
	    });
	    Object.defineProperty(this, "access_token", {
	        get: function () {
	            if (this._token && !this._token.expired) {
	                return this._token.access_token;
	            }
	        }
	    });
	    Object.defineProperty(this, "expired", {
	        get: function () {
	            if (this._token) {
	                return this._token.expired;
	            }
	            return true;
	        }
	    });
	    Object.defineProperty(this, "expires_in", {
	        get: function () {
	            if (this._token) {
	                return this._token.expires_in;
	            }
	            return 0;
	        }
	    });
	    Object.defineProperty(this, "expires_at", {
	        get: function () {
	            if (this._token) {
	                return this._token.expires_at;
	            }
	            return 0;
	        }
	    });
	    Object.defineProperty(this, "scopes", {
	        get: function () {
	            if (this._token) {
	                return [].concat(this._token.scopes);
	            }
	            return [];
	        }
	    });
	    Object.defineProperty(this, "session_state", {
	        get: function () {
	            if (this._token) {
	                return this._token.session_state;
	            }
	        }
	    });
	
	    var mgr = this;
	    loadToken(mgr);
	    window.addEventListener("storage", function (e) {
	        if (e.key === mgr._settings.persistKey) {
	            loadToken(mgr);
	
	            if (mgr._token) {
	                mgr._callTokenObtained();
	            }
	            else {
	                mgr._callTokenRemoved();
	            }
	        }
	    });
	    configureTokenExpired(mgr);
	    configureAutoRenewToken(mgr);
	
	    // delay this so consuming apps can register for callbacks first
	    window.setTimeout(function () {
	        configureTokenExpiring(mgr);
	    }, 0);
	}
	
	/**
	 * @param {{ create:function(successCallback:function(), errorCallback:function()):Promise, resolve:function(value:*):Promise, reject:function():Promise}} promiseFactory
	 */
	TokenManager.setPromiseFactory = function (promiseFactory) {
	    _promiseFactory = promiseFactory;
	};
	
	/**
	 * @param {{getJSON:function(url:string, config:{ headers: object.<string, string> })}} httpRequest
	 */
	TokenManager.setHttpRequest = function (httpRequest) {
	    if ((typeof httpRequest !== 'object') || (typeof httpRequest.getJSON !== 'function')) {
	        throw Error('The provided value is not a valid http request.');
	    }
	
	    _httpRequest = httpRequest;
	};
	
	TokenManager.prototype._callTokenRemoved = function () {
	    this._callbacks.tokenRemovedCallbacks.forEach(function (cb) {
	        cb();
	    });
	}
	
	TokenManager.prototype._callTokenExpiring = function () {
	    this._callbacks.tokenExpiringCallbacks.forEach(function (cb) {
	        cb();
	    });
	}
	
	TokenManager.prototype._callTokenExpired = function () {
	    this._callbacks.tokenExpiredCallbacks.forEach(function (cb) {
	        cb();
	    });
	}
	
	TokenManager.prototype._callTokenObtained = function () {
	    this._callbacks.tokenObtainedCallbacks.forEach(function (cb) {
	        cb();
	    });
	}
	
	TokenManager.prototype._callSilentTokenRenewFailed = function () {
	    this._callbacks.silentTokenRenewFailedCallbacks.forEach(function (cb) {
	        cb();
	    });
	}
	
	TokenManager.prototype.saveToken = function (token) {
	    if (token && !(token instanceof Token)) {
	        token = Token.fromResponse(token);
	    }
	
	    this._token = token;
	
	    if (this._settings.persist && !this.expired) {
	        this._settings.store.setItem(this._settings.persistKey, token.toJSON());
	    }
	    else {
	        this._settings.store.removeItem(this._settings.persistKey);
	    }
	
	    if (token) {
	        this._callTokenObtained();
	    }
	    else {
	        this._callTokenRemoved();
	    }
	}
	
	TokenManager.prototype.addOnTokenRemoved = function (cb) {
	    this._callbacks.tokenRemovedCallbacks.push(cb);
	}
	
	TokenManager.prototype.addOnTokenObtained = function (cb) {
	    this._callbacks.tokenObtainedCallbacks.push(cb);
	}
	
	TokenManager.prototype.addOnTokenExpiring = function (cb) {
	    this._callbacks.tokenExpiringCallbacks.push(cb);
	}
	
	TokenManager.prototype.addOnTokenExpired = function (cb) {
	    this._callbacks.tokenExpiredCallbacks.push(cb);
	}
	
	TokenManager.prototype.addOnSilentTokenRenewFailed = function (cb) {
	    this._callbacks.silentTokenRenewFailedCallbacks.push(cb);
	}
	
	TokenManager.prototype.removeToken = function () {
	    this.saveToken(null);
	}
	
	TokenManager.prototype.redirectForToken = function () {
	    var oidc = this.oidcClient;
	    oidc.createTokenRequestAsync().then(function (request) {
	        window.location = request.url;
	    }, function (err) {
	        console.error("TokenManager.redirectForToken error: " + (err && err.message || err || ""));
	    });
	}
	
	TokenManager.prototype.redirectForLogout = function () {
	    var mgr = this;
	    mgr.oidcClient.createLogoutRequestAsync(mgr.id_token).then(function (url) {
	        mgr.removeToken();
	        window.location = url;
	    }, function (err) {
	        console.error("TokenManager.redirectForLogout error: " + (err && err.message || err || ""));
	    });
	}
	
	TokenManager.prototype.processTokenCallbackAsync = function (queryString) {
	    var mgr = this;
	    return mgr.oidcClient.processResponseAsync(queryString).then(function (token) {
	        mgr.saveToken(token);
	    });
	}
	
	TokenManager.prototype.renewTokenSilentAsync = function () {
	    var mgr = this;
	
	    if (!mgr._settings.silent_redirect_uri) {
	        return _promiseFactory.reject("silent_redirect_uri not configured");
	    }
	
	    var settings = copy(mgr._settings);
	    settings.redirect_uri = settings.silent_redirect_uri;
	    settings.prompt = "none";
	
	    var oidc = new OidcClient(settings);
	    return oidc.createTokenRequestAsync().then(function (request) {
	        var frame = new FrameLoader(request.url);
	        return frame.loadAsync().then(function (hash) {
	            return oidc.processResponseAsync(hash).then(function (token) {
	                mgr.saveToken(token);
	            });
	        });
	    });
	}
	
	TokenManager.prototype.processTokenCallbackSilent = function (hash) {
	    if (window.parent && window !== window.parent) {
	        var hash = hash || window.location.hash;
	        if (hash) {
	            window.parent.postMessage(hash, location.protocol + "//" + location.host);
	        }
	    }
	}
	
	    
	    // exports
	    window.OidcTokenManager = TokenManager;
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(364).Buffer, __webpack_require__(368), (function() { return this; }()), __webpack_require__(72)(module)))

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(365)
	var ieee754 = __webpack_require__(366)
	var isArray = __webpack_require__(367)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(364).Buffer, (function() { return this; }())))

/***/ },

/***/ 365:
/***/ function(module, exports) {

	'use strict'
	
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	function init () {
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i]
	    revLookup[code.charCodeAt(i)] = i
	  }
	
	  revLookup['-'.charCodeAt(0)] = 62
	  revLookup['_'.charCodeAt(0)] = 63
	}
	
	init()
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	
	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ },

/***/ 366:
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },

/***/ 367:
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },

/***/ 369:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var http_1 = __webpack_require__(339);
	var core_1 = __webpack_require__(11);
	var oidc_token_manager_service_1 = __webpack_require__(362);
	var HttpExtendedService = (function () {
	    function HttpExtendedService(_http, _oidcToken, _baseUrl) {
	        this._http = _http;
	        this._oidcToken = _oidcToken;
	        this._baseUrl = _baseUrl;
	        this._mgr = _oidcToken.mgr;
	    }
	    HttpExtendedService.prototype.checkApiCall = function (url, headers) {
	        var apiUrl = this._baseUrl + "odata";
	        headers.set("Accept", "application/json");
	        if (RegExp(apiUrl).test(url)) {
	            headers.set('Authorization', 'Bearer ' + this._mgr.access_token);
	        }
	        return headers;
	    };
	    HttpExtendedService.prototype.get = function (url) {
	        var headers = new http_1.Headers();
	        //headers.set("Accept", "text/json");
	        return this._http.get(url, {
	            headers: this.checkApiCall(url, headers)
	        });
	    };
	    HttpExtendedService.prototype.post = function (url, data) {
	        var headers = new http_1.Headers();
	        headers.set("Content-Type", "application/json");
	        return this._http.post(url, data, {
	            headers: this.checkApiCall(url, headers)
	        });
	    };
	    HttpExtendedService.prototype.patch = function (url, data) {
	        var headers = new http_1.Headers();
	        headers.set("Content-Type", "application/json");
	        return this._http.patch(url, data, {
	            headers: this.checkApiCall(url, headers)
	        });
	    };
	    HttpExtendedService.prototype.delete = function (url) {
	        var headers = new http_1.Headers();
	        return this._http.delete(url, {
	            headers: this.checkApiCall(url, headers)
	        });
	    };
	    HttpExtendedService = __decorate([
	        core_1.Injectable(),
	        __param(2, core_1.Inject("BASE_URL")), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof oidc_token_manager_service_1.OidcTokenManagerService !== 'undefined' && oidc_token_manager_service_1.OidcTokenManagerService) === 'function' && _b) || Object, String])
	    ], HttpExtendedService);
	    return HttpExtendedService;
	    var _a, _b;
	}());
	exports.HttpExtendedService = HttpExtendedService;


/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var Autolinker = __webpack_require__(372);
	var core_1 = __webpack_require__(11);
	var AutoLinkerService = (function () {
	    function AutoLinkerService() {
	        this._autolinker = new Autolinker();
	        // let text = `Simply a domain: www.google.com
	        //                   Domain with port: www.google.com:8000`;
	        // var linkedText = autolinker.link(text);                                 
	        // console.log(linkedText);
	    }
	    AutoLinkerService.prototype.setAnchors = function (content) {
	        return this._autolinker.link(content);
	    };
	    AutoLinkerService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AutoLinkerService);
	    return AutoLinkerService;
	}());
	exports.AutoLinkerService = AutoLinkerService;


/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Autolinker.js
	 * 1.1.0
	 *
	 * Copyright(c) 2016 Gregory Jacobs <greg@greg-jacobs.com>
	 * MIT License
	 *
	 * https://github.com/gregjacobs/Autolinker.js
	 */
	;(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    root.Autolinker = factory();
	  }
	}(this, function() {
	/**
	 * @class Autolinker
	 * @extends Object
	 *
	 * Utility class used to process a given string of text, and wrap the matches in
	 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
	 *
	 * Any of the configuration options may be provided in an Object (map) provided
	 * to the Autolinker constructor, which will configure how the {@link #link link()}
	 * method will process the links.
	 *
	 * For example:
	 *
	 *     var autolinker = new Autolinker( {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *
	 *     var html = autolinker.link( "Joe went to www.yahoo.com" );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 *
	 *
	 * The {@link #static-link static link()} method may also be used to inline
	 * options into a single call, which may be more convenient for one-off uses.
	 * For example:
	 *
	 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 *
	 *
	 * ## Custom Replacements of Links
	 *
	 * If the configuration options do not provide enough flexibility, a {@link #replaceFn}
	 * may be provided to fully customize the output of Autolinker. This function is
	 * called once for each URL/Email/Phone#/Hashtag/Mention (Twitter, Instagram)
	 * match that is encountered.
	 *
	 * For example:
	 *
	 *     var input = "...";  // string with URLs, Email Addresses, Phone #s, Hashtags, and Mentions (Twitter, Instagram)
	 *
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *
	 *             switch( match.getType() ) {
	 *                 case 'url' :
	 *                     console.log( "url: ", match.getUrl() );
	 *
	 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
	 *                         var tag = match.buildTag();  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
	 *                         tag.setAttr( 'rel', 'nofollow' );
	 *                         tag.addClass( 'external-link' );
	 *
	 *                         return tag;
	 *
	 *                     } else {
	 *                         return true;  // let Autolinker perform its normal anchor tag replacement
	 *                     }
	 *
	 *                 case 'email' :
	 *                     var email = match.getEmail();
	 *                     console.log( "email: ", email );
	 *
	 *                     if( email === "my@own.address" ) {
	 *                         return false;  // don't auto-link this particular email address; leave as-is
	 *                     } else {
	 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
	 *                     }
	 *
	 *                 case 'phone' :
	 *                     var phoneNumber = match.getPhoneNumber();
	 *                     console.log( phoneNumber );
	 *
	 *                     return '<a href="http://newplace.to.link.phone.numbers.to/">' + phoneNumber + '</a>';
	 *
	 *                 case 'hashtag' :
	 *                     var hashtag = match.getHashtag();
	 *                     console.log( hashtag );
	 *
	 *                     return '<a href="http://newplace.to.link.hashtag.handles.to/">' + hashtag + '</a>';
	 *
	 *                 case 'mention' :
	 *                     var mention = match.getMention();
	 *                     console.log( mention );
	 *
	 *                     return '<a href="http://newplace.to.link.mention.to/">' + mention + '</a>';
	 *             }
	 *         }
	 *     } );
	 *
	 *
	 * The function may return the following values:
	 *
	 * - `true` (Boolean): Allow Autolinker to replace the match as it normally
	 *   would.
	 * - `false` (Boolean): Do not replace the current match at all - leave as-is.
	 * - Any String: If a string is returned from the function, the string will be
	 *   used directly as the replacement HTML for the match.
	 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify
	 *   an HTML tag before writing out its HTML text.
	 *
	 * @constructor
	 * @param {Object} [cfg] The configuration options for the Autolinker instance,
	 *   specified in an Object (map).
	 */
	var Autolinker = function( cfg ) {
		cfg = cfg || {};
	
		this.version = Autolinker.version;
	
		this.urls = this.normalizeUrlsCfg( cfg.urls );
		this.email = typeof cfg.email === 'boolean' ? cfg.email : true;
		this.phone = typeof cfg.phone === 'boolean' ? cfg.phone : true;
		this.hashtag = cfg.hashtag || false;
		this.mention = cfg.mention || false;
		this.newWindow = typeof cfg.newWindow === 'boolean' ? cfg.newWindow : true;
		this.stripPrefix = this.normalizeStripPrefixCfg( cfg.stripPrefix );
		this.stripTrailingSlash = typeof cfg.stripTrailingSlash === 'boolean' ? cfg.stripTrailingSlash : true;
	
		// Validate the value of the `mention` cfg
		var mention = this.mention;
		if( mention !== false && mention !== 'twitter' && mention !== 'instagram' ) {
			throw new Error( "invalid `mention` cfg - see docs" );
		}
	
		// Validate the value of the `hashtag` cfg
		var hashtag = this.hashtag;
		if( hashtag !== false && hashtag !== 'twitter' && hashtag !== 'facebook' && hashtag !== 'instagram' ) {
			throw new Error( "invalid `hashtag` cfg - see docs" );
		}
	
		this.truncate = this.normalizeTruncateCfg( cfg.truncate );
		this.className = cfg.className || '';
		this.replaceFn = cfg.replaceFn || null;
		this.context = cfg.context || this;
	
		this.htmlParser = null;
		this.matchers = null;
		this.tagBuilder = null;
	};
	
	
	
	/**
	 * Automatically links URLs, Email addresses, Phone Numbers, Twitter handles,
	 * Hashtags, and Mentions found in the given chunk of HTML. Does not link URLs found
	 * within HTML tags.
	 *
	 * For instance, if given the text: `You should go to http://www.yahoo.com`,
	 * then the result will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
	 *
	 * Example:
	 *
	 *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
	 *     // Produces: "Go to <a href="http://google.com">google.com</a>"
	 *
	 * @static
	 * @param {String} textOrHtml The HTML or text to find matches within (depending
	 *   on if the {@link #urls}, {@link #email}, {@link #phone}, {@link #mention},
	 *   {@link #hashtag}, and {@link #mention} options are enabled).
	 * @param {Object} [options] Any of the configuration options for the Autolinker
	 *   class, specified in an Object (map). See the class description for an
	 *   example call.
	 * @return {String} The HTML text, with matches automatically linked.
	 */
	Autolinker.link = function( textOrHtml, options ) {
		var autolinker = new Autolinker( options );
		return autolinker.link( textOrHtml );
	};
	
	
	/**
	 * @static
	 * @property {String} version (readonly)
	 *
	 * The Autolinker version number in the form major.minor.patch
	 *
	 * Ex: 0.25.1
	 */
	Autolinker.version = '1.1.0';
	
	
	Autolinker.prototype = {
		constructor : Autolinker,  // fix constructor property
	
		/**
		 * @cfg {Boolean/Object} [urls]
		 *
		 * `true` if URLs should be automatically linked, `false` if they should not
		 * be. Defaults to `true`.
		 *
		 * Examples:
		 *
		 *     urls: true
		 *
		 *     // or
		 *
		 *     urls: {
		 *         schemeMatches : true,
		 *         wwwMatches    : true,
		 *         tldMatches    : true
		 *     }
		 *
		 * As shown above, this option also accepts an Object form with 3 properties
		 * to allow for more customization of what exactly gets linked. All default
		 * to `true`:
		 *
		 * @cfg {Boolean} [urls.schemeMatches] `true` to match URLs found prefixed
		 *   with a scheme, i.e. `http://google.com`, or `other+scheme://google.com`,
		 *   `false` to prevent these types of matches.
		 * @cfg {Boolean} [urls.wwwMatches] `true` to match urls found prefixed with
		 *   `'www.'`, i.e. `www.google.com`. `false` to prevent these types of
		 *   matches. Note that if the URL had a prefixed scheme, and
		 *   `schemeMatches` is true, it will still be linked.
		 * @cfg {Boolean} [urls.tldMatches] `true` to match URLs with known top
		 *   level domains (.com, .net, etc.) that are not prefixed with a scheme or
		 *   `'www.'`. This option attempts to match anything that looks like a URL
		 *   in the given text. Ex: `google.com`, `asdf.org/?page=1`, etc. `false`
		 *   to prevent these types of matches.
		 */
	
		/**
		 * @cfg {Boolean} [email=true]
		 *
		 * `true` if email addresses should be automatically linked, `false` if they
		 * should not be.
		 */
	
		/**
		 * @cfg {Boolean} [phone=true]
		 *
		 * `true` if Phone numbers ("(555)555-5555") should be automatically linked,
		 * `false` if they should not be.
		 */
	
		/**
		 * @cfg {Boolean/String} [hashtag=false]
		 *
		 * A string for the service name to have hashtags (ex: "#myHashtag")
		 * auto-linked to. The currently-supported values are:
		 *
		 * - 'twitter'
		 * - 'facebook'
		 * - 'instagram'
		 *
		 * Pass `false` to skip auto-linking of hashtags.
		 */
	
		/**
		 * @cfg {String/Boolean} [mention=false]
		 *
		 * A string for the service name to have mentions (ex: "@myuser")
		 * auto-linked to. The currently supported values are:
		 *
		 * - 'twitter'
		 * - 'instagram'
		 *
		 * Defaults to `false` to skip auto-linking of mentions.
		 */
	
		/**
		 * @cfg {Boolean} [newWindow=true]
		 *
		 * `true` if the links should open in a new window, `false` otherwise.
		 */
	
		/**
		 * @cfg {Boolean/Object} [stripPrefix]
		 *
		 * `true` if 'http://' (or 'https://') and/or the 'www.' should be stripped
		 * from the beginning of URL links' text, `false` otherwise. Defaults to
		 * `true`.
		 *
		 * Examples:
		 *
		 *     stripPrefix: true
		 *
		 *     // or
		 *
		 *     stripPrefix: {
		 *         scheme : true,
		 *         www    : true
		 *     }
		 *
		 * As shown above, this option also accepts an Object form with 2 properties
		 * to allow for more customization of what exactly is prevented from being
		 * displayed. Both default to `true`:
		 *
		 * @cfg {Boolean} [stripPrefix.scheme] `true` to prevent the scheme part of
		 *   a URL match from being displayed to the user. Example:
		 *   `'http://google.com'` will be displayed as `'google.com'`. `false` to
		 *   not strip the scheme. NOTE: Only an `'http://'` or `'https://'` scheme
		 *   will be removed, so as not to remove a potentially dangerous scheme
		 *   (such as `'file://'` or `'javascript:'`)
		 * @cfg {Boolean} [stripPrefix.www] www (Boolean): `true` to prevent the
		 *   `'www.'` part of a URL match from being displayed to the user. Ex:
		 *   `'www.google.com'` will be displayed as `'google.com'`. `false` to not
		 *   strip the `'www'`.
		 */
	
		/**
		 * @cfg {Boolean} [stripTrailingSlash=true]
		 *
		 * `true` to remove the trailing slash from URL matches, `false` to keep
		 *  the trailing slash.
		 *
		 *  Example when `true`: `http://google.com/` will be displayed as
		 *  `http://google.com`.
		 */
	
		/**
		 * @cfg {Number/Object} [truncate=0]
		 *
		 * ## Number Form
		 *
		 * A number for how many characters matched text should be truncated to
		 * inside the text of a link. If the matched text is over this number of
		 * characters, it will be truncated to this length by adding a two period
		 * ellipsis ('..') to the end of the string.
		 *
		 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file'
		 * truncated to 25 characters might look something like this:
		 * 'yahoo.com/some/long/pat..'
		 *
		 * Example Usage:
		 *
		 *     truncate: 25
		 *
		 *
		 *  Defaults to `0` for "no truncation."
		 *
		 *
		 * ## Object Form
		 *
		 * An Object may also be provided with two properties: `length` (Number) and
		 * `location` (String). `location` may be one of the following: 'end'
		 * (default), 'middle', or 'smart'.
		 *
		 * Example Usage:
		 *
		 *     truncate: { length: 25, location: 'middle' }
		 *
		 * @cfg {Number} [truncate.length=0] How many characters to allow before
		 *   truncation will occur. Defaults to `0` for "no truncation."
		 * @cfg {"end"/"middle"/"smart"} [truncate.location="end"]
		 *
		 * - 'end' (default): will truncate up to the number of characters, and then
		 *   add an ellipsis at the end. Ex: 'yahoo.com/some/long/pat..'
		 * - 'middle': will truncate and add the ellipsis in the middle. Ex:
		 *   'yahoo.com/s..th/to/a/file'
		 * - 'smart': for URLs where the algorithm attempts to strip out unnecessary
		 *   parts first (such as the 'www.', then URL scheme, hash, etc.),
		 *   attempting to make the URL human-readable before looking for a good
		 *   point to insert the ellipsis if it is still too long. Ex:
		 *   'yahoo.com/some..to/a/file'. For more details, see
		 *   {@link Autolinker.truncate.TruncateSmart}.
		 */
	
		/**
		 * @cfg {String} className
		 *
		 * A CSS class name to add to the generated links. This class will be added
		 * to all links, as well as this class plus match suffixes for styling
		 * url/email/phone/hashtag/mention links differently.
		 *
		 * For example, if this config is provided as "myLink", then:
		 *
		 * - URL links will have the CSS classes: "myLink myLink-url"
		 * - Email links will have the CSS classes: "myLink myLink-email", and
		 * - Phone links will have the CSS classes: "myLink myLink-phone"
		 * - Hashtag links will have the CSS classes: "myLink myLink-hashtag"
		 * - Mention links will have the CSS classes: "myLink myLink-mention myLink-[type]"
		 *   where [type] is either "instagram" or "twitter"
		 */
	
		/**
		 * @cfg {Function} replaceFn
		 *
		 * A function to individually process each match found in the input string.
		 *
		 * See the class's description for usage.
		 *
		 * The `replaceFn` can be called with a different context object (`this`
		 * reference) using the {@link #context} cfg.
		 *
		 * This function is called with the following parameter:
		 *
		 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which
		 *   can be used to retrieve information about the match that the `replaceFn`
		 *   is currently processing. See {@link Autolinker.match.Match} subclasses
		 *   for details.
		 */
	
		/**
		 * @cfg {Object} context
		 *
		 * The context object (`this` reference) to call the `replaceFn` with.
		 *
		 * Defaults to this Autolinker instance.
		 */
	
	
		/**
		 * @property {String} version (readonly)
		 *
		 * The Autolinker version number in the form major.minor.patch
		 *
		 * Ex: 0.25.1
		 */
	
		/**
		 * @private
		 * @property {Autolinker.htmlParser.HtmlParser} htmlParser
		 *
		 * The HtmlParser instance used to skip over HTML tags, while finding text
		 * nodes to process. This is lazily instantiated in the {@link #getHtmlParser}
		 * method.
		 */
	
		/**
		 * @private
		 * @property {Autolinker.matcher.Matcher[]} matchers
		 *
		 * The {@link Autolinker.matcher.Matcher} instances for this Autolinker
		 * instance.
		 *
		 * This is lazily created in {@link #getMatchers}.
		 */
	
		/**
		 * @private
		 * @property {Autolinker.AnchorTagBuilder} tagBuilder
		 *
		 * The AnchorTagBuilder instance used to build match replacement anchor tags.
		 * Note: this is lazily instantiated in the {@link #getTagBuilder} method.
		 */
	
	
		/**
		 * Normalizes the {@link #urls} config into an Object with 3 properties:
		 * `schemeMatches`, `wwwMatches`, and `tldMatches`, all Booleans.
		 *
		 * See {@link #urls} config for details.
		 *
		 * @private
		 * @param {Boolean/Object} urls
		 * @return {Object}
		 */
		normalizeUrlsCfg : function( urls ) {
			if( urls == null ) urls = true;  // default to `true`
	
			if( typeof urls === 'boolean' ) {
				return { schemeMatches: urls, wwwMatches: urls, tldMatches: urls };
	
			} else {  // object form
				return {
					schemeMatches : typeof urls.schemeMatches === 'boolean' ? urls.schemeMatches : true,
					wwwMatches    : typeof urls.wwwMatches === 'boolean'    ? urls.wwwMatches    : true,
					tldMatches    : typeof urls.tldMatches === 'boolean'    ? urls.tldMatches    : true
				};
			}
		},
	
	
		/**
		 * Normalizes the {@link #stripPrefix} config into an Object with 2
		 * properties: `scheme`, and `www` - both Booleans.
		 *
		 * See {@link #stripPrefix} config for details.
		 *
		 * @private
		 * @param {Boolean/Object} stripPrefix
		 * @return {Object}
		 */
		normalizeStripPrefixCfg : function( stripPrefix ) {
			if( stripPrefix == null ) stripPrefix = true;  // default to `true`
	
			if( typeof stripPrefix === 'boolean' ) {
				return { scheme: stripPrefix, www: stripPrefix };
	
			} else {  // object form
				return {
					scheme : typeof stripPrefix.scheme === 'boolean' ? stripPrefix.scheme : true,
					www    : typeof stripPrefix.www === 'boolean'    ? stripPrefix.www    : true
				};
			}
		},
	
	
		/**
		 * Normalizes the {@link #truncate} config into an Object with 2 properties:
		 * `length` (Number), and `location` (String).
		 *
		 * See {@link #truncate} config for details.
		 *
		 * @private
		 * @param {Number/Object} truncate
		 * @return {Object}
		 */
		normalizeTruncateCfg : function( truncate ) {
			if( typeof truncate === 'number' ) {
				return { length: truncate, location: 'end' };
	
			} else {  // object, or undefined/null
				return Autolinker.Util.defaults( truncate || {}, {
					length   : Number.POSITIVE_INFINITY,
					location : 'end'
				} );
			}
		},
	
	
		/**
		 * Parses the input `textOrHtml` looking for URLs, email addresses, phone
		 * numbers, username handles, and hashtags (depending on the configuration
		 * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}
		 * objects describing those matches.
		 *
		 * This method is used by the {@link #link} method, but can also be used to
		 * simply do parsing of the input in order to discover what kinds of links
		 * there are and how many.
		 *
		 * @param {String} textOrHtml The HTML or text to find matches within
		 *   (depending on if the {@link #urls}, {@link #email}, {@link #phone},
		 *   {@link #hashtag}, and {@link #mention} options are enabled).
		 * @return {Autolinker.match.Match[]} The array of Matches found in the
		 *   given input `textOrHtml`.
		 */
		parse : function( textOrHtml ) {
			var htmlParser = this.getHtmlParser(),
			    htmlNodes = htmlParser.parse( textOrHtml ),
			    anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have;
			    matches = [];
	
			// Find all matches within the `textOrHtml` (but not matches that are
			// already nested within <a> tags)
			for( var i = 0, len = htmlNodes.length; i < len; i++ ) {
				var node = htmlNodes[ i ],
				    nodeType = node.getType();
	
				if( nodeType === 'element' && node.getTagName() === 'a' ) {  // Process HTML anchor element nodes in the input `textOrHtml` to find out when we're within an <a> tag
					if( !node.isClosing() ) {  // it's the start <a> tag
						anchorTagStackCount++;
					} else {  // it's the end </a> tag
						anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
					}
	
				} else if( nodeType === 'text' && anchorTagStackCount === 0 ) {  // Process text nodes that are not within an <a> tag
					var textNodeMatches = this.parseText( node.getText(), node.getOffset() );
	
					matches.push.apply( matches, textNodeMatches );
				}
			}
	
	
			// After we have found all matches, remove subsequent matches that
			// overlap with a previous match. This can happen for instance with URLs,
			// where the url 'google.com/#link' would match '#link' as a hashtag.
			matches = this.compactMatches( matches );
	
			// And finally, remove matches for match types that have been turned
			// off. We needed to have all match types turned on initially so that
			// things like hashtags could be filtered out if they were really just
			// part of a URL match (for instance, as a named anchor).
			matches = this.removeUnwantedMatches( matches );
	
			return matches;
		},
	
	
		/**
		 * After we have found all matches, we need to remove subsequent matches
		 * that overlap with a previous match. This can happen for instance with
		 * URLs, where the url 'google.com/#link' would match '#link' as a hashtag.
		 *
		 * @private
		 * @param {Autolinker.match.Match[]} matches
		 * @return {Autolinker.match.Match[]}
		 */
		compactMatches : function( matches ) {
			// First, the matches need to be sorted in order of offset
			matches.sort( function( a, b ) { return a.getOffset() - b.getOffset(); } );
	
			for( var i = 0; i < matches.length - 1; i++ ) {
				var match = matches[ i ],
				    endIdx = match.getOffset() + match.getMatchedText().length;
	
				// Remove subsequent matches that overlap with the current match
				while( i + 1 < matches.length && matches[ i + 1 ].getOffset() <= endIdx ) {
					matches.splice( i + 1, 1 );
				}
			}
	
			return matches;
		},
	
	
		/**
		 * Removes matches for matchers that were turned off in the options. For
		 * example, if {@link #hashtag hashtags} were not to be matched, we'll
		 * remove them from the `matches` array here.
		 *
		 * @private
		 * @param {Autolinker.match.Match[]} matches The array of matches to remove
		 *   the unwanted matches from. Note: this array is mutated for the
		 *   removals.
		 * @return {Autolinker.match.Match[]} The mutated input `matches` array.
		 */
		removeUnwantedMatches : function( matches ) {
			var remove = Autolinker.Util.remove;
	
			if( !this.hashtag ) remove( matches, function( match ) { return match.getType() === 'hashtag'; } );
			if( !this.email )   remove( matches, function( match ) { return match.getType() === 'email'; } );
			if( !this.phone )   remove( matches, function( match ) { return match.getType() === 'phone'; } );
			if( !this.mention ) remove( matches, function( match ) { return match.getType() === 'mention'; } );
			if( !this.urls.schemeMatches ) {
				remove( matches, function( m ) { return m.getType() === 'url' && m.getUrlMatchType() === 'scheme'; } );
			}
			if( !this.urls.wwwMatches ) {
				remove( matches, function( m ) { return m.getType() === 'url' && m.getUrlMatchType() === 'www'; } );
			}
			if( !this.urls.tldMatches ) {
				remove( matches, function( m ) { return m.getType() === 'url' && m.getUrlMatchType() === 'tld'; } );
			}
	
			return matches;
		},
	
	
		/**
		 * Parses the input `text` looking for URLs, email addresses, phone
		 * numbers, username handles, and hashtags (depending on the configuration
		 * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}
		 * objects describing those matches.
		 *
		 * This method processes a **non-HTML string**, and is used to parse and
		 * match within the text nodes of an HTML string. This method is used
		 * internally by {@link #parse}.
		 *
		 * @private
		 * @param {String} text The text to find matches within (depending on if the
		 *   {@link #urls}, {@link #email}, {@link #phone},
		 *   {@link #hashtag}, and {@link #mention} options are enabled). This must be a non-HTML string.
		 * @param {Number} [offset=0] The offset of the text node within the
		 *   original string. This is used when parsing with the {@link #parse}
		 *   method to generate correct offsets within the {@link Autolinker.match.Match}
		 *   instances, but may be omitted if calling this method publicly.
		 * @return {Autolinker.match.Match[]} The array of Matches found in the
		 *   given input `text`.
		 */
		parseText : function( text, offset ) {
			offset = offset || 0;
			var matchers = this.getMatchers(),
			    matches = [];
	
			for( var i = 0, numMatchers = matchers.length; i < numMatchers; i++ ) {
				var textMatches = matchers[ i ].parseMatches( text );
	
				// Correct the offset of each of the matches. They are originally
				// the offset of the match within the provided text node, but we
				// need to correct them to be relative to the original HTML input
				// string (i.e. the one provided to #parse).
				for( var j = 0, numTextMatches = textMatches.length; j < numTextMatches; j++ ) {
					textMatches[ j ].setOffset( offset + textMatches[ j ].getOffset() );
				}
	
				matches.push.apply( matches, textMatches );
			}
			return matches;
		},
	
	
		/**
		 * Automatically links URLs, Email addresses, Phone numbers, Hashtags,
		 * and Mentions (Twitter, Instagram) found in the given chunk of HTML. Does not link
		 * URLs found within HTML tags.
		 *
		 * For instance, if given the text: `You should go to http://www.yahoo.com`,
		 * then the result will be `You should go to
		 * &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
		 *
		 * This method finds the text around any HTML elements in the input
		 * `textOrHtml`, which will be the text that is processed. Any original HTML
		 * elements will be left as-is, as well as the text that is already wrapped
		 * in anchor (&lt;a&gt;) tags.
		 *
		 * @param {String} textOrHtml The HTML or text to autolink matches within
		 *   (depending on if the {@link #urls}, {@link #email}, {@link #phone}, {@link #hashtag}, and {@link #mention} options are enabled).
		 * @return {String} The HTML, with matches automatically linked.
		 */
		link : function( textOrHtml ) {
			if( !textOrHtml ) { return ""; }  // handle `null` and `undefined`
	
			var matches = this.parse( textOrHtml ),
				newHtml = [],
				lastIndex = 0;
	
			for( var i = 0, len = matches.length; i < len; i++ ) {
				var match = matches[ i ];
	
				newHtml.push( textOrHtml.substring( lastIndex, match.getOffset() ) );
				newHtml.push( this.createMatchReturnVal( match ) );
	
				lastIndex = match.getOffset() + match.getMatchedText().length;
			}
			newHtml.push( textOrHtml.substring( lastIndex ) );  // handle the text after the last match
	
			return newHtml.join( '' );
		},
	
	
		/**
		 * Creates the return string value for a given match in the input string.
		 *
		 * This method handles the {@link #replaceFn}, if one was provided.
		 *
		 * @private
		 * @param {Autolinker.match.Match} match The Match object that represents
		 *   the match.
		 * @return {String} The string that the `match` should be replaced with.
		 *   This is usually the anchor tag string, but may be the `matchStr` itself
		 *   if the match is not to be replaced.
		 */
		createMatchReturnVal : function( match ) {
			// Handle a custom `replaceFn` being provided
			var replaceFnResult;
			if( this.replaceFn ) {
				replaceFnResult = this.replaceFn.call( this.context, match );  // Autolinker instance is the context
			}
	
			if( typeof replaceFnResult === 'string' ) {
				return replaceFnResult;  // `replaceFn` returned a string, use that
	
			} else if( replaceFnResult === false ) {
				return match.getMatchedText();  // no replacement for the match
	
			} else if( replaceFnResult instanceof Autolinker.HtmlTag ) {
				return replaceFnResult.toAnchorString();
	
			} else {  // replaceFnResult === true, or no/unknown return value from function
				// Perform Autolinker's default anchor tag generation
				var anchorTag = match.buildTag();  // returns an Autolinker.HtmlTag instance
	
				return anchorTag.toAnchorString();
			}
		},
	
	
		/**
		 * Lazily instantiates and returns the {@link #htmlParser} instance for this
		 * Autolinker instance.
		 *
		 * @protected
		 * @return {Autolinker.htmlParser.HtmlParser}
		 */
		getHtmlParser : function() {
			var htmlParser = this.htmlParser;
	
			if( !htmlParser ) {
				htmlParser = this.htmlParser = new Autolinker.htmlParser.HtmlParser();
			}
	
			return htmlParser;
		},
	
	
		/**
		 * Lazily instantiates and returns the {@link Autolinker.matcher.Matcher}
		 * instances for this Autolinker instance.
		 *
		 * @protected
		 * @return {Autolinker.matcher.Matcher[]}
		 */
		getMatchers : function() {
			if( !this.matchers ) {
				var matchersNs = Autolinker.matcher,
				    tagBuilder = this.getTagBuilder();
	
				var matchers = [
					new matchersNs.Hashtag( { tagBuilder: tagBuilder, serviceName: this.hashtag } ),
					new matchersNs.Email( { tagBuilder: tagBuilder } ),
					new matchersNs.Phone( { tagBuilder: tagBuilder } ),
					new matchersNs.Mention( { tagBuilder: tagBuilder, serviceName: this.mention } ),
					new matchersNs.Url( { tagBuilder: tagBuilder, stripPrefix: this.stripPrefix, stripTrailingSlash: this.stripTrailingSlash } )
				];
	
				return ( this.matchers = matchers );
	
			} else {
				return this.matchers;
			}
		},
	
	
		/**
		 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
		 * if it does not yet exist.
		 *
		 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that
		 * Autolinker would normally generate, and then allow for modifications before returning it. For example:
		 *
		 *     var html = Autolinker.link( "Test google.com", {
		 *         replaceFn : function( match ) {
		 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance
		 *             tag.setAttr( 'rel', 'nofollow' );
		 *
		 *             return tag;
		 *         }
		 *     } );
		 *
		 *     // generated html:
		 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
		 *
		 * @return {Autolinker.AnchorTagBuilder}
		 */
		getTagBuilder : function() {
			var tagBuilder = this.tagBuilder;
	
			if( !tagBuilder ) {
				tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {
					newWindow   : this.newWindow,
					truncate    : this.truncate,
					className   : this.className
				} );
			}
	
			return tagBuilder;
		}
	
	};
	
	
	// Autolinker Namespaces
	
	Autolinker.match = {};
	Autolinker.matcher = {};
	Autolinker.htmlParser = {};
	Autolinker.truncate = {};
	
	/*global Autolinker */
	/*jshint eqnull:true, boss:true */
	/**
	 * @class Autolinker.Util
	 * @singleton
	 *
	 * A few utility methods for Autolinker.
	 */
	Autolinker.Util = {
	
		/**
		 * @property {Function} abstractMethod
		 *
		 * A function object which represents an abstract method.
		 */
		abstractMethod : function() { throw "abstract"; },
	
	
		/**
		 * @private
		 * @property {RegExp} trimRegex
		 *
		 * The regular expression used to trim the leading and trailing whitespace
		 * from a string.
		 */
		trimRegex : /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
	
		/**
		 * Assigns (shallow copies) the properties of `src` onto `dest`.
		 *
		 * @param {Object} dest The destination object.
		 * @param {Object} src The source object.
		 * @return {Object} The destination object (`dest`)
		 */
		assign : function( dest, src ) {
			for( var prop in src ) {
				if( src.hasOwnProperty( prop ) ) {
					dest[ prop ] = src[ prop ];
				}
			}
	
			return dest;
		},
	
	
		/**
		 * Assigns (shallow copies) the properties of `src` onto `dest`, if the
		 * corresponding property on `dest` === `undefined`.
		 *
		 * @param {Object} dest The destination object.
		 * @param {Object} src The source object.
		 * @return {Object} The destination object (`dest`)
		 */
		defaults : function( dest, src ) {
			for( var prop in src ) {
				if( src.hasOwnProperty( prop ) && dest[ prop ] === undefined ) {
					dest[ prop ] = src[ prop ];
				}
			}
	
			return dest;
		},
	
	
		/**
		 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
		 *
		 * @param {Function} superclass The constructor function for the superclass.
		 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
		 *   special property `constructor`, which will be used as the new subclass's constructor function.
		 * @return {Function} The new subclass function.
		 */
		extend : function( superclass, protoProps ) {
			var superclassProto = superclass.prototype;
	
			var F = function() {};
			F.prototype = superclassProto;
	
			var subclass;
			if( protoProps.hasOwnProperty( 'constructor' ) ) {
				subclass = protoProps.constructor;
			} else {
				subclass = function() { superclassProto.constructor.apply( this, arguments ); };
			}
	
			var subclassProto = subclass.prototype = new F();  // set up prototype chain
			subclassProto.constructor = subclass;  // fix constructor property
			subclassProto.superclass = superclassProto;
	
			delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
			Autolinker.Util.assign( subclassProto, protoProps );
	
			return subclass;
		},
	
	
		/**
		 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
		 * end of the string (by default, two periods: '..'). If the `str` length does not exceed
		 * `len`, the string will be returned unchanged.
		 *
		 * @param {String} str The string to truncate and add an ellipsis to.
		 * @param {Number} truncateLen The length to truncate the string at.
		 * @param {String} [ellipsisChars=..] The ellipsis character(s) to add to the end of `str`
		 *   when truncated. Defaults to '..'
		 */
		ellipsis : function( str, truncateLen, ellipsisChars ) {
			if( str.length > truncateLen ) {
				ellipsisChars = ( ellipsisChars == null ) ? '..' : ellipsisChars;
				str = str.substring( 0, truncateLen - ellipsisChars.length ) + ellipsisChars;
			}
			return str;
		},
	
	
		/**
		 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
		 *
		 * @param {Array} arr The array to find an element of.
		 * @param {*} element The element to find in the array, and return the index of.
		 * @return {Number} The index of the `element`, or -1 if it was not found.
		 */
		indexOf : function( arr, element ) {
			if( Array.prototype.indexOf ) {
				return arr.indexOf( element );
	
			} else {
				for( var i = 0, len = arr.length; i < len; i++ ) {
					if( arr[ i ] === element ) return i;
				}
				return -1;
			}
		},
	
	
		/**
		 * Removes array elements based on a filtering function. Mutates the input
		 * array.
		 *
		 * Using this instead of the ES5 Array.prototype.filter() function, to allow
		 * Autolinker compatibility with IE8, and also to prevent creating many new
		 * arrays in memory for filtering.
		 *
		 * @param {Array} arr The array to remove elements from. This array is
		 *   mutated.
		 * @param {Function} fn A function which should return `true` to
		 *   remove an element.
		 * @return {Array} The mutated input `arr`.
		 */
		remove : function( arr, fn ) {
			for( var i = arr.length - 1; i >= 0; i-- ) {
				if( fn( arr[ i ] ) === true ) {
					arr.splice( i, 1 );
				}
			}
		},
	
	
		/**
		 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
		 * with a regular expression that contains capturing parenthesis.
		 *
		 * For example:
		 *
		 *     // Modern browsers:
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
		 *
		 *     // Old IE (including IE8):
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
		 *
		 * This method emulates the functionality of modern browsers for the old IE case.
		 *
		 * @param {String} str The string to split.
		 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
		 *   character(s) will be spliced into the array, as in the "modern browsers" example in the
		 *   description of this method.
		 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
		 *   Note #2: for simplicity's sake, the regular expression does not need
		 *   to contain capturing parenthesis - it will be assumed that any match has them.
		 * @return {String[]} The split array of strings, with the splitting character(s) included.
		 */
		splitAndCapture : function( str, splitRegex ) {
			if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );
	
			var result = [],
			    lastIdx = 0,
			    match;
	
			while( match = splitRegex.exec( str ) ) {
				result.push( str.substring( lastIdx, match.index ) );
				result.push( match[ 0 ] );  // push the splitting char(s)
	
				lastIdx = match.index + match[ 0 ].length;
			}
			result.push( str.substring( lastIdx ) );
	
			return result;
		},
	
	
		/**
		 * Trims the leading and trailing whitespace from a string.
		 *
		 * @param {String} str The string to trim.
		 * @return {String}
		 */
		trim : function( str ) {
			return str.replace( this.trimRegex, '' );
		}
	
	};
	/*global Autolinker */
	/*jshint boss:true */
	/**
	 * @class Autolinker.HtmlTag
	 * @extends Object
	 *
	 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
	 *
	 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
	 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
	 *
	 * ## Examples
	 *
	 * Example instantiation:
	 *
	 *     var tag = new Autolinker.HtmlTag( {
	 *         tagName : 'a',
	 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
	 *         innerHtml : 'Google'
	 *     } );
	 *
	 *     tag.toAnchorString();  // <a href="http://google.com" class="external-link">Google</a>
	 *
	 *     // Individual accessor methods
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 *
	 *
	 * Using mutator methods (which may be used in combination with instantiation config properties):
	 *
	 *     var tag = new Autolinker.HtmlTag();
	 *     tag.setTagName( 'a' );
	 *     tag.setAttr( 'href', 'http://google.com' );
	 *     tag.addClass( 'external-link' );
	 *     tag.setInnerHtml( 'Google' );
	 *
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 *
	 *     tag.toAnchorString();  // <a href="http://google.com" class="external-link">Google</a>
	 *
	 *
	 * ## Example use within a {@link Autolinker#replaceFn replaceFn}
	 *
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( match ) {
	 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *
	 *             return tag;
	 *         }
	 *     } );
	 *
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 *
	 *
	 * ## Example use with a new tag for the replacement
	 *
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( match ) {
	 *             var tag = new Autolinker.HtmlTag( {
	 *                 tagName : 'button',
	 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
	 *                 innerHtml : 'Load URL: ' + match.getAnchorText()
	 *             } );
	 *
	 *             return tag;
	 *         }
	 *     } );
	 *
	 *     // generated html:
	 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
	 */
	Autolinker.HtmlTag = Autolinker.Util.extend( Object, {
	
		/**
		 * @cfg {String} tagName
		 *
		 * The tag name. Ex: 'a', 'button', etc.
		 *
		 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toAnchorString}
		 * is executed.
		 */
	
		/**
		 * @cfg {Object.<String, String>} attrs
		 *
		 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
		 * values are the attribute values.
		 */
	
		/**
		 * @cfg {String} innerHtml
		 *
		 * The inner HTML for the tag.
		 *
		 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym
		 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
		 * if you prefer, but this one is recommended.
		 */
	
		/**
		 * @cfg {String} innerHTML
		 *
		 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
		 * for acronym names.
		 */
	
	
		/**
		 * @protected
		 * @property {RegExp} whitespaceRegex
		 *
		 * Regular expression used to match whitespace in a string of CSS classes.
		 */
		whitespaceRegex : /\s+/,
	
	
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
	
			this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
		},
	
	
		/**
		 * Sets the tag name that will be used to generate the tag with.
		 *
		 * @param {String} tagName
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setTagName : function( tagName ) {
			this.tagName = tagName;
			return this;
		},
	
	
		/**
		 * Retrieves the tag name.
		 *
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName || "";
		},
	
	
		/**
		 * Sets an attribute on the HtmlTag.
		 *
		 * @param {String} attrName The attribute name to set.
		 * @param {String} attrValue The attribute value to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttr : function( attrName, attrValue ) {
			var tagAttrs = this.getAttrs();
			tagAttrs[ attrName ] = attrValue;
	
			return this;
		},
	
	
		/**
		 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
		 *
		 * @param {String} attrName The attribute name to retrieve.
		 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
		 */
		getAttr : function( attrName ) {
			return this.getAttrs()[ attrName ];
		},
	
	
		/**
		 * Sets one or more attributes on the HtmlTag.
		 *
		 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttrs : function( attrs ) {
			var tagAttrs = this.getAttrs();
			Autolinker.Util.assign( tagAttrs, attrs );
	
			return this;
		},
	
	
		/**
		 * Retrieves the attributes Object (map) for the HtmlTag.
		 *
		 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
		 */
		getAttrs : function() {
			return this.attrs || ( this.attrs = {} );
		},
	
	
		/**
		 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
		 *
		 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setClass : function( cssClass ) {
			return this.setAttr( 'class', cssClass );
		},
	
	
		/**
		 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
		 *
		 * @param {String} cssClass One or more space-separated CSS classes to add.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		addClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    newClasses = cssClass.split( whitespaceRegex ),
			    newClass;
	
			while( newClass = newClasses.shift() ) {
				if( indexOf( classes, newClass ) === -1 ) {
					classes.push( newClass );
				}
			}
	
			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},
	
	
		/**
		 * Convenience method to remove one or more CSS classes from the HtmlTag.
		 *
		 * @param {String} cssClass One or more space-separated CSS classes to remove.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		removeClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    removeClasses = cssClass.split( whitespaceRegex ),
			    removeClass;
	
			while( classes.length && ( removeClass = removeClasses.shift() ) ) {
				var idx = indexOf( classes, removeClass );
				if( idx !== -1 ) {
					classes.splice( idx, 1 );
				}
			}
	
			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},
	
	
		/**
		 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
		 * there are multiple.
		 *
		 * @return {String}
		 */
		getClass : function() {
			return this.getAttrs()[ 'class' ] || "";
		},
	
	
		/**
		 * Convenience method to check if the tag has a CSS class or not.
		 *
		 * @param {String} cssClass The CSS class to check for.
		 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
		 */
		hasClass : function( cssClass ) {
			return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;
		},
	
	
		/**
		 * Sets the inner HTML for the tag.
		 *
		 * @param {String} html The inner HTML to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setInnerHtml : function( html ) {
			this.innerHtml = html;
	
			return this;
		},
	
	
		/**
		 * Retrieves the inner HTML for the tag.
		 *
		 * @return {String}
		 */
		getInnerHtml : function() {
			return this.innerHtml || "";
		},
	
	
		/**
		 * Override of superclass method used to generate the HTML string for the tag.
		 *
		 * @return {String}
		 */
		toAnchorString : function() {
			var tagName = this.getTagName(),
			    attrsStr = this.buildAttrsStr();
	
			attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes
	
			return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );
		},
	
	
		/**
		 * Support method for {@link #toAnchorString}, returns the string space-separated key="value" pairs, used to populate
		 * the stringified HtmlTag.
		 *
		 * @protected
		 * @return {String} Example return: `attr1="value1" attr2="value2"`
		 */
		buildAttrsStr : function() {
			if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string
	
			var attrs = this.getAttrs(),
			    attrsArr = [];
	
			for( var prop in attrs ) {
				if( attrs.hasOwnProperty( prop ) ) {
					attrsArr.push( prop + '="' + attrs[ prop ] + '"' );
				}
			}
			return attrsArr.join( " " );
		}
	
	} );
	
	/*global Autolinker */
	/**
	 * @class Autolinker.RegexLib
	 * @singleton
	 *
	 * Builds and stores a library of the common regular expressions used by the
	 * Autolinker utility.
	 *
	 * Other regular expressions may exist ad-hoc, but these are generally the
	 * regular expressions that are shared between source files.
	 */
	Autolinker.RegexLib = (function() {
	
		/**
		 * The string form of a regular expression that would match all of the
		 * alphabetic ("letter") chars in the unicode character set when placed in a
		 * RegExp character class (`[]`). This includes all international alphabetic
		 * characters.
		 *
		 * These would be the characters matched by unicode regex engines `\p{L}`
		 * escape ("all letters").
		 *
		 * Taken from the XRegExp library: http://xregexp.com/
		 * Specifically: http://xregexp.com/v/3.0.0/unicode-categories.js
		 *
		 * @private
		 * @type {String}
		 */
		var alphaCharsStr = 'A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC';
	
		/**
		 * The string form of a regular expression that would match all of the
		 * decimal number chars in the unicode character set when placed in a RegExp
		 * character class (`[]`).
		 *
		 * These would be the characters matched by unicode regex engines `\p{Nd}`
		 * escape ("all decimal numbers")
		 *
		 * Taken from the XRegExp library: http://xregexp.com/
		 * Specifically: http://xregexp.com/v/3.0.0/unicode-categories.js
		 *
		 * @private
		 * @type {String}
		 */
		var decimalNumbersStr = '0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19';
	
	
		// See documentation below
		var alphaNumericCharsStr = alphaCharsStr + decimalNumbersStr;
	
	
		// See documentation below
		var domainNameRegex = new RegExp( '[' + alphaNumericCharsStr + '.\\-]*[' + alphaNumericCharsStr + '\\-]' );
	
	
		// See documentation below
		var tldRegex = /(?:travelersinsurance|sandvikcoromant|kerryproperties|cancerresearch|weatherchannel|kerrylogistics|spreadbetting|international|wolterskluwer|lifeinsurance|construction|pamperedchef|scholarships|versicherung|bridgestone|creditunion|kerryhotels|investments|productions|blackfriday|enterprises|lamborghini|photography|motorcycles|williamhill|playstation|contractors|barclaycard|accountants|redumbrella|engineering|management|telefonica|protection|consulting|tatamotors|creditcard|vlaanderen|schaeffler|associates|properties|foundation|republican|bnpparibas|boehringer|eurovision|extraspace|industries|immobilien|university|technology|volkswagen|healthcare|restaurant|cuisinella|vistaprint|apartments|accountant|travelers|homedepot|institute|vacations|furniture|fresenius|insurance|christmas|bloomberg|solutions|barcelona|firestone|financial|kuokgroup|fairwinds|community|passagens|goldpoint|equipment|lifestyle|yodobashi|aquarelle|marketing|analytics|education|amsterdam|statefarm|melbourne|allfinanz|directory|microsoft|stockholm|montblanc|accenture|lancaster|landrover|everbank|istanbul|graphics|grainger|ipiranga|softbank|attorney|pharmacy|saarland|catering|airforce|yokohama|mortgage|frontier|mutuelle|stcgroup|memorial|pictures|football|symantec|cipriani|ventures|telecity|cityeats|verisign|flsmidth|boutique|cleaning|firmdale|clinique|clothing|redstone|infiniti|deloitte|feedback|services|broadway|plumbing|commbank|training|barclays|exchange|computer|brussels|software|delivery|barefoot|builders|business|bargains|engineer|holdings|download|security|helsinki|lighting|movistar|discount|hdfcbank|supplies|marriott|property|diamonds|capetown|partners|democrat|jpmorgan|bradesco|budapest|rexroth|zuerich|shriram|academy|science|support|youtube|singles|surgery|alibaba|statoil|dentist|schwarz|android|cruises|cricket|digital|markets|starhub|systems|courses|coupons|netbank|country|domains|corsica|network|neustar|realtor|lincoln|limited|schmidt|yamaxun|cooking|contact|auction|spiegel|liaison|leclerc|latrobe|lasalle|abogado|compare|lanxess|exposed|express|company|cologne|college|avianca|lacaixa|fashion|recipes|ferrero|komatsu|storage|wanggou|clubmed|sandvik|fishing|fitness|bauhaus|kitchen|flights|florist|flowers|watches|weather|temasek|samsung|bentley|forsale|channel|theater|frogans|theatre|okinawa|website|tickets|jewelry|gallery|tiffany|iselect|shiksha|brother|organic|wedding|genting|toshiba|origins|philips|hyundai|hotmail|hoteles|hosting|rentals|windows|cartier|bugatti|holiday|careers|whoswho|hitachi|panerai|caravan|reviews|guitars|capital|trading|hamburg|hangout|finance|stream|family|abbott|health|review|travel|report|hermes|hiphop|gratis|career|toyota|hockey|dating|repair|google|social|soccer|reisen|global|otsuka|giving|unicom|casino|photos|center|broker|rocher|orange|bostik|garden|insure|ryukyu|bharti|safety|physio|sakura|oracle|online|jaguar|gallup|piaget|tienda|futbol|pictet|joburg|webcam|berlin|office|juegos|kaufen|chanel|chrome|xihuan|church|tennis|circle|kinder|flickr|bayern|claims|clinic|viajes|nowruz|xperia|norton|yachts|studio|coffee|camera|sanofi|nissan|author|expert|events|comsec|lawyer|tattoo|viking|estate|villas|condos|realty|yandex|energy|emerck|virgin|vision|durban|living|school|coupon|london|taobao|natura|taipei|nagoya|luxury|walter|aramco|sydney|madrid|credit|maison|makeup|schule|market|anquan|direct|design|swatch|suzuki|alsace|vuelos|dental|alipay|voyage|shouji|voting|airtel|mutual|degree|supply|agency|museum|mobily|dealer|monash|select|mormon|active|moscow|racing|datsun|quebec|nissay|rodeo|email|gifts|works|photo|chloe|edeka|cheap|earth|vista|tushu|koeln|glass|shoes|globo|tunes|gmail|nokia|space|kyoto|black|ricoh|seven|lamer|sener|epson|cisco|praxi|trust|citic|crown|shell|lease|green|legal|lexus|ninja|tatar|gripe|nikon|group|video|wales|autos|gucci|party|nexus|guide|linde|adult|parts|amica|lixil|boats|azure|loans|locus|cymru|lotte|lotto|stada|click|poker|quest|dabur|lupin|nadex|paris|faith|dance|canon|place|gives|trade|skype|rocks|mango|cloud|boots|smile|final|swiss|homes|honda|media|horse|cards|deals|watch|bosch|house|pizza|miami|osaka|tours|total|xerox|coach|sucks|style|delta|toray|iinet|tools|money|codes|beats|tokyo|salon|archi|movie|baidu|study|actor|yahoo|store|apple|world|forex|today|bible|tmall|tirol|irish|tires|forum|reise|vegas|vodka|sharp|omega|weber|jetzt|audio|promo|build|bingo|chase|gallo|drive|dubai|rehab|press|solar|sale|beer|bbva|bank|band|auto|sapo|sarl|saxo|audi|asia|arte|arpa|army|yoga|ally|zara|scor|scot|sexy|seat|zero|seek|aero|adac|zone|aarp|maif|meet|meme|menu|surf|mini|mobi|mtpc|porn|desi|star|ltda|name|talk|navy|love|loan|live|link|news|limo|like|spot|life|nico|lidl|lgbt|land|taxi|team|tech|kred|kpmg|sony|song|kiwi|kddi|jprs|jobs|sohu|java|itau|tips|info|immo|icbc|hsbc|town|host|page|toys|here|help|pars|haus|guru|guge|tube|goog|golf|gold|sncf|gmbh|gift|ggee|gent|gbiz|game|vana|pics|fund|ford|ping|pink|fish|film|fast|farm|play|fans|fail|plus|skin|pohl|fage|moda|post|erni|dvag|prod|doha|prof|docs|viva|diet|luxe|site|dell|sina|dclk|show|qpon|date|vote|cyou|voto|read|coop|cool|wang|club|city|chat|cern|cash|reit|rent|casa|cars|care|camp|rest|call|cafe|weir|wien|rich|wiki|buzz|wine|book|bond|room|work|rsvp|shia|ruhr|blue|bing|shaw|bike|safe|xbox|best|pwc|mtn|lds|aig|boo|fyi|nra|nrw|ntt|car|gal|obi|zip|aeg|vin|how|one|ong|onl|dad|ooo|bet|esq|org|htc|bar|uol|ibm|ovh|gdn|ice|icu|uno|gea|ifm|bot|top|wtf|lol|day|pet|eus|wtc|ubs|tvs|aco|ing|ltd|ink|tab|abb|afl|cat|int|pid|pin|bid|cba|gle|com|cbn|ads|man|wed|ceb|gmo|sky|ist|gmx|tui|mba|fan|ski|iwc|app|pro|med|ceo|jcb|jcp|goo|dev|men|aaa|meo|pub|jlc|bom|jll|gop|jmp|mil|got|gov|win|jot|mma|joy|trv|red|cfa|cfd|bio|moe|moi|mom|ren|biz|aws|xin|bbc|dnp|buy|kfh|mov|thd|xyz|fit|kia|rio|rip|kim|dog|vet|nyc|bcg|mtr|bcn|bms|bmw|run|bzh|rwe|tel|stc|axa|kpn|fly|krd|cab|bnl|foo|crs|eat|tci|sap|srl|nec|sas|net|cal|sbs|sfr|sca|scb|csc|edu|new|xxx|hiv|fox|wme|ngo|nhk|vip|sex|frl|lat|yun|law|you|tax|soy|sew|om|ac|hu|se|sc|sg|sh|sb|sa|rw|ru|rs|ro|re|qa|py|si|pw|pt|ps|sj|sk|pr|pn|pm|pl|sl|sm|pk|sn|ph|so|pg|pf|pe|pa|zw|nz|nu|nr|np|no|nl|ni|ng|nf|sr|ne|st|nc|na|mz|my|mx|mw|mv|mu|mt|ms|mr|mq|mp|mo|su|mn|mm|ml|mk|mh|mg|me|sv|md|mc|sx|sy|ma|ly|lv|sz|lu|lt|ls|lr|lk|li|lc|lb|la|tc|kz|td|ky|kw|kr|kp|kn|km|ki|kh|tf|tg|th|kg|ke|jp|jo|jm|je|it|is|ir|tj|tk|tl|tm|iq|tn|to|io|in|im|il|ie|ad|sd|ht|hr|hn|hm|tr|hk|gy|gw|gu|gt|gs|gr|gq|tt|gp|gn|gm|gl|tv|gi|tw|tz|ua|gh|ug|uk|gg|gf|ge|gd|us|uy|uz|va|gb|ga|vc|ve|fr|fo|fm|fk|fj|vg|vi|fi|eu|et|es|er|eg|ee|ec|dz|do|dm|dk|vn|dj|de|cz|cy|cx|cw|vu|cv|cu|cr|co|cn|cm|cl|ck|ci|ch|cg|cf|cd|cc|ca|wf|bz|by|bw|bv|bt|bs|br|bo|bn|bm|bj|bi|ws|bh|bg|bf|be|bd|bb|ba|az|ax|aw|au|at|as|ye|ar|aq|ao|am|al|yt|ai|za|ag|af|ae|zm|id)\b/;
	
	
		return {
	
			/**
			 * The string form of a regular expression that would match all of the
			 * letters and decimal number chars in the unicode character set when placed
			 * in a RegExp character class (`[]`).
			 *
			 * These would be the characters matched by unicode regex engines `[\p{L}\p{Nd}]`
			 * escape ("all letters and decimal numbers")
			 *
			 * @property {String} alphaNumericCharsStr
			 */
			alphaNumericCharsStr : alphaNumericCharsStr,
	
			/**
			 * A regular expression to match domain names of a URL or email address.
			 * Ex: 'google', 'yahoo', 'some-other-company', etc.
			 *
			 * @property {RegExp} domainNameRegex
			 */
			domainNameRegex : domainNameRegex,
	
			/**
			 * A regular expression to match top level domains (TLDs) for a URL or
			 * email address. Ex: 'com', 'org', 'net', etc.
			 *
			 * @property {RegExp} tldRegex
			 */
			tldRegex : tldRegex
	
		};
	
	
	}() );
	/*global Autolinker */
	/*jshint sub:true */
	/**
	 * @protected
	 * @class Autolinker.AnchorTagBuilder
	 * @extends Object
	 *
	 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is
	 * found.
	 *
	 * Normally this class is instantiated, configured, and used internally by an
	 * {@link Autolinker} instance, but may actually be used indirectly in a
	 * {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag}
	 * instances which may be modified before returning from the
	 * {@link Autolinker#replaceFn replaceFn}. For example:
	 *
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( match ) {
	 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *
	 *             return tag;
	 *         }
	 *     } );
	 *
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 */
	Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {
	
		/**
		 * @cfg {Boolean} newWindow
		 * @inheritdoc Autolinker#newWindow
		 */
	
		/**
		 * @cfg {Object} truncate
		 * @inheritdoc Autolinker#truncate
		 */
	
		/**
		 * @cfg {String} className
		 * @inheritdoc Autolinker#className
		 */
	
	
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			cfg = cfg || {};
	
			this.newWindow = cfg.newWindow;
			this.truncate = cfg.truncate;
			this.className = cfg.className;
		},
	
	
		/**
		 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the
		 * matched text, via its `match` object.
		 *
		 * @param {Autolinker.match.Match} match The Match instance to generate an
		 *   anchor tag from.
		 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
		 */
		build : function( match ) {
			return new Autolinker.HtmlTag( {
				tagName   : 'a',
				attrs     : this.createAttrs( match ),
				innerHtml : this.processAnchorText( match.getAnchorText() )
			} );
		},
	
	
		/**
		 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;)
		 *   tag being generated.
		 *
		 * @protected
		 * @param {Autolinker.match.Match} match The Match instance to generate an
		 *   anchor tag from.
		 * @return {Object} A key/value Object (map) of the anchor tag's attributes.
		 */
		createAttrs : function( match ) {
			var attrs = {
				'href' : match.getAnchorHref()  // we'll always have the `href` attribute
			};
	
			var cssClass = this.createCssClass( match );
			if( cssClass ) {
				attrs[ 'class' ] = cssClass;
			}
			if( this.newWindow ) {
				attrs[ 'target' ] = "_blank";
				attrs[ 'rel' ] = "noopener noreferrer";
			}
	
			return attrs;
		},
	
	
		/**
		 * Creates the CSS class that will be used for a given anchor tag, based on
		 * the `matchType` and the {@link #className} config.
		 *
		 * Example returns:
		 *
		 * - ""                                      // no {@link #className}
		 * - "myLink myLink-url"                     // url match
		 * - "myLink myLink-email"                   // email match
		 * - "myLink myLink-phone"                   // phone match
		 * - "myLink myLink-hashtag"                 // hashtag match
		 * - "myLink myLink-mention myLink-twitter"  // mention match with Twitter service
		 *
		 * @private
		 * @param {Autolinker.match.Match} match The Match instance to generate an
		 *   anchor tag from.
		 * @return {String} The CSS class string for the link. Example return:
		 *   "myLink myLink-url". If no {@link #className} was configured, returns
		 *   an empty string.
		 */
		createCssClass : function( match ) {
			var className = this.className;
	
			if( !className ) {
				return "";
	
			} else {
				var returnClasses = [ className ],
					cssClassSuffixes = match.getCssClassSuffixes();
	
				for( var i = 0, len = cssClassSuffixes.length; i < len; i++ ) {
					returnClasses.push( className + '-' + cssClassSuffixes[ i ] );
				}
				return returnClasses.join( ' ' );
			}
		},
	
	
		/**
		 * Processes the `anchorText` by truncating the text according to the
		 * {@link #truncate} config.
		 *
		 * @private
		 * @param {String} anchorText The anchor tag's text (i.e. what will be
		 *   displayed).
		 * @return {String} The processed `anchorText`.
		 */
		processAnchorText : function( anchorText ) {
			anchorText = this.doTruncate( anchorText );
	
			return anchorText;
		},
	
	
		/**
		 * Performs the truncation of the `anchorText` based on the {@link #truncate}
		 * option. If the `anchorText` is longer than the length specified by the
		 * {@link #truncate} option, the truncation is performed based on the
		 * `location` property. See {@link #truncate} for details.
		 *
		 * @private
		 * @param {String} anchorText The anchor tag's text (i.e. what will be
		 *   displayed).
		 * @return {String} The truncated anchor text.
		 */
		doTruncate : function( anchorText ) {
			var truncate = this.truncate;
			if( !truncate || !truncate.length ) return anchorText;
	
			var truncateLength = truncate.length,
				truncateLocation = truncate.location;
	
			if( truncateLocation === 'smart' ) {
				return Autolinker.truncate.TruncateSmart( anchorText, truncateLength, '..' );
	
			} else if( truncateLocation === 'middle' ) {
				return Autolinker.truncate.TruncateMiddle( anchorText, truncateLength, '..' );
	
			} else {
				return Autolinker.truncate.TruncateEnd( anchorText, truncateLength, '..' );
			}
		}
	
	} );
	
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.HtmlParser
	 * @extends Object
	 *
	 * An HTML parser implementation which simply walks an HTML string and returns an array of
	 * {@link Autolinker.htmlParser.HtmlNode HtmlNodes} that represent the basic HTML structure of the input string.
	 *
	 * Autolinker uses this to only link URLs/emails/mentions within text nodes, effectively ignoring / "walking
	 * around" HTML tags.
	 */
	Autolinker.htmlParser.HtmlParser = Autolinker.Util.extend( Object, {
	
		/**
		 * @private
		 * @property {RegExp} htmlRegex
		 *
		 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
		 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
		 *
		 * Capturing groups:
		 *
		 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
		 * 2. If it is an end tag, this group will have the '/'.
		 * 3. If it is a comment tag, this group will hold the comment text (i.e.
		 *    the text inside the `&lt;!--` and `--&gt;`.
		 * 4. The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)
		 */
		htmlRegex : (function() {
			var commentTagRegex = /!--([\s\S]+?)--/,
			    tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
			    attrNameRegex = /[^\s"'>\/=\x00-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
			    attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
			    nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'
	
			return new RegExp( [
				// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">)
				'(?:',
					'<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag
	
						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',  // one or more whitespace chars before an attribute
	
							// Either:
							// A. attr="value", or
							// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">)
							'(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',
						')*',
					'>',
				')',
	
				'|',
	
				// All other HTML tags (i.e. tags that are not <!DOCTYPE>)
				'(?:',
					'<(/)?',  // Beginning of a tag or comment. Either '<' for a start tag, or '</' for an end tag.
					          // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.
	
						'(?:',
							commentTagRegex.source,  // *** Capturing Group 3 - A Comment Tag's Text
	
							'|',
	
							'(?:',
	
								// *** Capturing Group 4 - The tag name
								'(' + tagNameRegex.source + ')',
	
								// Zero or more attributes following the tag name
								'(?:',
									'(?:\\s+|\\b)',        // any number of whitespace chars before an attribute. NOTE: Using \s* here throws Chrome into an infinite loop for some reason, so using \s+|\b instead
									nameEqualsValueRegex,  // attr="value" (with optional ="value" part)
								')*',
	
								'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'
	
							')',
						')',
					'>',
				')'
			].join( "" ), 'gi' );
		} )(),
	
		/**
		 * @private
		 * @property {RegExp} htmlCharacterEntitiesRegex
		 *
		 * The regular expression that matches common HTML character entities.
		 *
		 * Ignoring &amp; as it could be part of a query string -- handling it separately.
		 */
		htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
	
	
		/**
		 * Parses an HTML string and returns a simple array of {@link Autolinker.htmlParser.HtmlNode HtmlNodes}
		 * to represent the HTML structure of the input string.
		 *
		 * @param {String} html The HTML to parse.
		 * @return {Autolinker.htmlParser.HtmlNode[]}
		 */
		parse : function( html ) {
			var htmlRegex = this.htmlRegex,
			    currentResult,
			    lastIndex = 0,
			    textAndEntityNodes,
			    nodes = [];  // will be the result of the method
	
			while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {
				var tagText = currentResult[ 0 ],
				    commentText = currentResult[ 3 ], // if we've matched a comment
				    tagName = currentResult[ 1 ] || currentResult[ 4 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a" or "img")
				    isClosingTag = !!currentResult[ 2 ],
				    offset = currentResult.index,
				    inBetweenTagsText = html.substring( lastIndex, offset );
	
				// Push TextNodes and EntityNodes for any text found between tags
				if( inBetweenTagsText ) {
					textAndEntityNodes = this.parseTextAndEntityNodes( lastIndex, inBetweenTagsText );
					nodes.push.apply( nodes, textAndEntityNodes );
				}
	
				// Push the CommentNode or ElementNode
				if( commentText ) {
					nodes.push( this.createCommentNode( offset, tagText, commentText ) );
				} else {
					nodes.push( this.createElementNode( offset, tagText, tagName, isClosingTag ) );
				}
	
				lastIndex = offset + tagText.length;
			}
	
			// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
			if( lastIndex < html.length ) {
				var text = html.substring( lastIndex );
	
				// Push TextNodes and EntityNodes for any text found between tags
				if( text ) {
					textAndEntityNodes = this.parseTextAndEntityNodes( lastIndex, text );
					nodes.push.apply( nodes, textAndEntityNodes );
				}
			}
	
			return nodes;
		},
	
	
		/**
		 * Parses text and HTML entity nodes from a given string. The input string
		 * should not have any HTML tags (elements) within it.
		 *
		 * @private
		 * @param {Number} offset The offset of the text node match within the
		 *   original HTML string.
		 * @param {String} text The string of text to parse. This is from an HTML
		 *   text node.
		 * @return {Autolinker.htmlParser.HtmlNode[]} An array of HtmlNodes to
		 *   represent the {@link Autolinker.htmlParser.TextNode TextNodes} and
		 *   {@link Autolinker.htmlParser.EntityNode EntityNodes} found.
		 */
		parseTextAndEntityNodes : function( offset, text ) {
			var nodes = [],
			    textAndEntityTokens = Autolinker.Util.splitAndCapture( text, this.htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array
	
			// Every even numbered token is a TextNode, and every odd numbered token is an EntityNode
			// For example: an input `text` of "Test &quot;this&quot; today" would turn into the
			//   `textAndEntityTokens`: [ 'Test ', '&quot;', 'this', '&quot;', ' today' ]
			for( var i = 0, len = textAndEntityTokens.length; i < len; i += 2 ) {
				var textToken = textAndEntityTokens[ i ],
				    entityToken = textAndEntityTokens[ i + 1 ];
	
				if( textToken ) {
					nodes.push( this.createTextNode( offset, textToken ) );
					offset += textToken.length;
				}
				if( entityToken ) {
					nodes.push( this.createEntityNode( offset, entityToken ) );
					offset += entityToken.length;
				}
			}
			return nodes;
		},
	
	
		/**
		 * Factory method to create an {@link Autolinker.htmlParser.CommentNode CommentNode}.
		 *
		 * @private
		 * @param {Number} offset The offset of the match within the original HTML
		 *   string.
		 * @param {String} tagText The full text of the tag (comment) that was
		 *   matched, including its &lt;!-- and --&gt;.
		 * @param {String} commentText The full text of the comment that was matched.
		 */
		createCommentNode : function( offset, tagText, commentText ) {
			return new Autolinker.htmlParser.CommentNode( {
				offset : offset,
				text   : tagText,
				comment: Autolinker.Util.trim( commentText )
			} );
		},
	
	
		/**
		 * Factory method to create an {@link Autolinker.htmlParser.ElementNode ElementNode}.
		 *
		 * @private
		 * @param {Number} offset The offset of the match within the original HTML
		 *   string.
		 * @param {String} tagText The full text of the tag (element) that was
		 *   matched, including its attributes.
		 * @param {String} tagName The name of the tag. Ex: An &lt;img&gt; tag would
		 *   be passed to this method as "img".
		 * @param {Boolean} isClosingTag `true` if it's a closing tag, false
		 *   otherwise.
		 * @return {Autolinker.htmlParser.ElementNode}
		 */
		createElementNode : function( offset, tagText, tagName, isClosingTag ) {
			return new Autolinker.htmlParser.ElementNode( {
				offset  : offset,
				text    : tagText,
				tagName : tagName.toLowerCase(),
				closing : isClosingTag
			} );
		},
	
	
		/**
		 * Factory method to create a {@link Autolinker.htmlParser.EntityNode EntityNode}.
		 *
		 * @private
		 * @param {Number} offset The offset of the match within the original HTML
		 *   string.
		 * @param {String} text The text that was matched for the HTML entity (such
		 *   as '&amp;nbsp;').
		 * @return {Autolinker.htmlParser.EntityNode}
		 */
		createEntityNode : function( offset, text ) {
			return new Autolinker.htmlParser.EntityNode( { offset: offset, text: text } );
		},
	
	
		/**
		 * Factory method to create a {@link Autolinker.htmlParser.TextNode TextNode}.
		 *
		 * @private
		 * @param {Number} offset The offset of the match within the original HTML
		 *   string.
		 * @param {String} text The text that was matched.
		 * @return {Autolinker.htmlParser.TextNode}
		 */
		createTextNode : function( offset, text ) {
			return new Autolinker.htmlParser.TextNode( { offset: offset, text: text } );
		}
	
	} );
	
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.htmlParser.HtmlNode
	 *
	 * Represents an HTML node found in an input string. An HTML node is one of the
	 * following:
	 *
	 * 1. An {@link Autolinker.htmlParser.ElementNode ElementNode}, which represents
	 *    HTML tags.
	 * 2. A {@link Autolinker.htmlParser.CommentNode CommentNode}, which represents
	 *    HTML comments.
	 * 3. A {@link Autolinker.htmlParser.TextNode TextNode}, which represents text
	 *    outside or within HTML tags.
	 * 4. A {@link Autolinker.htmlParser.EntityNode EntityNode}, which represents
	 *    one of the known HTML entities that Autolinker looks for. This includes
	 *    common ones such as &amp;quot; and &amp;nbsp;
	 */
	Autolinker.htmlParser.HtmlNode = Autolinker.Util.extend( Object, {
	
		/**
		 * @cfg {Number} offset (required)
		 *
		 * The offset of the HTML node in the original text that was parsed.
		 */
		offset : undefined,
	
		/**
		 * @cfg {String} text (required)
		 *
		 * The text that was matched for the HtmlNode.
		 *
		 * - In the case of an {@link Autolinker.htmlParser.ElementNode ElementNode},
		 *   this will be the tag's text.
		 * - In the case of an {@link Autolinker.htmlParser.CommentNode CommentNode},
		 *   this will be the comment's text.
		 * - In the case of a {@link Autolinker.htmlParser.TextNode TextNode}, this
		 *   will be the text itself.
		 * - In the case of a {@link Autolinker.htmlParser.EntityNode EntityNode},
		 *   this will be the text of the HTML entity.
		 */
		text : undefined,
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance,
		 * specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
	
			if( this.offset == null ) throw new Error( '`offset` cfg required' );
			if( this.text == null ) throw new Error( '`text` cfg required' );
		},
	
	
		/**
		 * Returns a string name for the type of node that this class represents.
		 *
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,
	
	
		/**
		 * Retrieves the {@link #offset} of the HtmlNode. This is the offset of the
		 * HTML node in the original string that was parsed.
		 *
		 * @return {Number}
		 */
		getOffset : function() {
			return this.offset;
		},
	
	
		/**
		 * Retrieves the {@link #text} for the HtmlNode.
		 *
		 * @return {String}
		 */
		getText : function() {
			return this.text;
		}
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.CommentNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 *
	 * Represents an HTML comment node that has been parsed by the
	 * {@link Autolinker.htmlParser.HtmlParser}.
	 *
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
	 * details.
	 */
	Autolinker.htmlParser.CommentNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
	
		/**
		 * @cfg {String} comment (required)
		 *
		 * The text inside the comment tag. This text is stripped of any leading or
		 * trailing whitespace.
		 */
		comment : '',
	
	
		/**
		 * Returns a string name for the type of node that this class represents.
		 *
		 * @return {String}
		 */
		getType : function() {
			return 'comment';
		},
	
	
		/**
		 * Returns the comment inside the comment tag.
		 *
		 * @return {String}
		 */
		getComment : function() {
			return this.comment;
		}
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.ElementNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 *
	 * Represents an HTML element node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 *
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
	 * details.
	 */
	Autolinker.htmlParser.ElementNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
	
		/**
		 * @cfg {String} tagName (required)
		 *
		 * The name of the tag that was matched.
		 */
		tagName : '',
	
		/**
		 * @cfg {Boolean} closing (required)
		 *
		 * `true` if the element (tag) is a closing tag, `false` if its an opening
		 * tag.
		 */
		closing : false,
	
	
		/**
		 * Returns a string name for the type of node that this class represents.
		 *
		 * @return {String}
		 */
		getType : function() {
			return 'element';
		},
	
	
		/**
		 * Returns the HTML element's (tag's) name. Ex: for an &lt;img&gt; tag,
		 * returns "img".
		 *
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName;
		},
	
	
		/**
		 * Determines if the HTML element (tag) is a closing tag. Ex: &lt;div&gt;
		 * returns `false`, while &lt;/div&gt; returns `true`.
		 *
		 * @return {Boolean}
		 */
		isClosing : function() {
			return this.closing;
		}
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.EntityNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 *
	 * Represents a known HTML entity node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * Ex: '&amp;nbsp;', or '&amp#160;' (which will be retrievable from the {@link #getText}
	 * method.
	 *
	 * Note that this class will only be returned from the HtmlParser for the set of
	 * checked HTML entity nodes  defined by the {@link Autolinker.htmlParser.HtmlParser#htmlCharacterEntitiesRegex}.
	 *
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
	 * details.
	 */
	Autolinker.htmlParser.EntityNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
	
		/**
		 * Returns a string name for the type of node that this class represents.
		 *
		 * @return {String}
		 */
		getType : function() {
			return 'entity';
		}
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.TextNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 *
	 * Represents a text node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 *
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
	 * details.
	 */
	Autolinker.htmlParser.TextNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
	
		/**
		 * Returns a string name for the type of node that this class represents.
		 *
		 * @return {String}
		 */
		getType : function() {
			return 'text';
		}
	
	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.match.Match
	 *
	 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a
	 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
	 *
	 * For example:
	 *
	 *     var input = "...";  // string with URLs, Email Addresses, and Mentions (Twitter, Instagram)
	 *
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *
	 *             switch( match.getType() ) {
	 *                 case 'url' :
	 *                     console.log( "url: ", match.getUrl() );
	 *
	 *                 case 'email' :
	 *                     console.log( "email: ", match.getEmail() );
	 *
	 *                 case 'mention' :
	 *                     console.log( "mention: ", match.getMention() );
	 *             }
	 *         }
	 *     } );
	 *
	 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
	 */
	Autolinker.match.Match = Autolinker.Util.extend( Object, {
	
		/**
		 * @cfg {Autolinker.AnchorTagBuilder} tagBuilder (required)
		 *
		 * Reference to the AnchorTagBuilder instance to use to generate an anchor
		 * tag for the Match.
		 */
	
		/**
		 * @cfg {String} matchedText (required)
		 *
		 * The original text that was matched by the {@link Autolinker.matcher.Matcher}.
		 */
	
		/**
		 * @cfg {Number} offset (required)
		 *
		 * The offset of where the match was made in the input string.
		 */
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			if( cfg.tagBuilder == null ) throw new Error( '`tagBuilder` cfg required' );
			if( cfg.matchedText == null ) throw new Error( '`matchedText` cfg required' );
			if( cfg.offset == null ) throw new Error( '`offset` cfg required' );
	
			this.tagBuilder = cfg.tagBuilder;
			this.matchedText = cfg.matchedText;
			this.offset = cfg.offset;
		},
	
	
		/**
		 * Returns a string name for the type of match that this class represents.
		 *
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,
	
	
		/**
		 * Returns the original text that was matched.
		 *
		 * @return {String}
		 */
		getMatchedText : function() {
			return this.matchedText;
		},
	
	
		/**
		 * Sets the {@link #offset} of where the match was made in the input string.
		 *
		 * A {@link Autolinker.matcher.Matcher} will be fed only HTML text nodes,
		 * and will therefore set an original offset that is relative to the HTML
		 * text node itself. However, we want this offset to be relative to the full
		 * HTML input string, and thus if using {@link Autolinker#parse} (rather
		 * than calling a {@link Autolinker.matcher.Matcher} directly), then this
		 * offset is corrected after the Matcher itself has done its job.
		 *
		 * @param {Number} offset
		 */
		setOffset : function( offset ) {
			this.offset = offset;
		},
	
	
		/**
		 * Returns the offset of where the match was made in the input string. This
		 * is the 0-based index of the match.
		 *
		 * @return {Number}
		 */
		getOffset : function() {
			return this.offset;
		},
	
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @abstract
		 * @return {String}
		 */
		getAnchorHref : Autolinker.Util.abstractMethod,
	
	
		/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @abstract
		 * @return {String}
		 */
		getAnchorText : Autolinker.Util.abstractMethod,
	
	
		/**
		 * Returns the CSS class suffix(es) for this match.
		 *
		 * A CSS class suffix is appended to the {@link Autolinker#className} in
		 * the {@link Autolinker.AnchorTagBuilder} when a match is translated into
		 * an anchor tag.
		 *
		 * For example, if {@link Autolinker#className} was configured as 'myLink',
		 * and this method returns `[ 'url' ]`, the final class name of the element
		 * will become: 'myLink myLink-url'.
		 *
		 * The match may provide multiple CSS class suffixes to be appended to the
		 * {@link Autolinker#className} in order to facilitate better styling
		 * options for different match criteria. See {@link Autolinker.match.Mention}
		 * for an example.
		 *
		 * By default, this method returns a single array with the match's
		 * {@link #getType type} name, but may be overridden by subclasses.
		 *
		 * @return {String[]}
		 */
		getCssClassSuffixes : function() {
			return [ this.getType() ];
		},
	
	
		/**
		 * Builds and returns an {@link Autolinker.HtmlTag} instance based on the
		 * Match.
		 *
		 * This can be used to easily generate anchor tags from matches, and either
		 * return their HTML string, or modify them before doing so.
		 *
		 * Example Usage:
		 *
		 *     var tag = match.buildTag();
		 *     tag.addClass( 'cordova-link' );
		 *     tag.setAttr( 'target', '_system' );
		 *
		 *     tag.toAnchorString();  // <a href="http://google.com" class="cordova-link" target="_system">Google</a>
		 */
		buildTag : function() {
			return this.tagBuilder.build( this );
		}
	
	} );
	
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Email
	 * @extends Autolinker.match.Match
	 *
	 * Represents a Email match found in an input string which should be Autolinked.
	 *
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {
	
		/**
		 * @cfg {String} email (required)
		 *
		 * The email address that was matched.
		 */
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.match.Match.prototype.constructor.call( this, cfg );
	
			if( !cfg.email ) throw new Error( '`email` cfg required' );
	
			this.email = cfg.email;
		},
	
	
		/**
		 * Returns a string name for the type of match that this class represents.
		 *
		 * @return {String}
		 */
		getType : function() {
			return 'email';
		},
	
	
		/**
		 * Returns the email address that was matched.
		 *
		 * @return {String}
		 */
		getEmail : function() {
			return this.email;
		},
	
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'mailto:' + this.email;
		},
	
	
		/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @return {String}
		 */
		getAnchorText : function() {
			return this.email;
		}
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Hashtag
	 * @extends Autolinker.match.Match
	 *
	 * Represents a Hashtag match found in an input string which should be
	 * Autolinked.
	 *
	 * See this class's superclass ({@link Autolinker.match.Match}) for more
	 * details.
	 */
	Autolinker.match.Hashtag = Autolinker.Util.extend( Autolinker.match.Match, {
	
		/**
		 * @cfg {String} serviceName
		 *
		 * The service to point hashtag matches to. See {@link Autolinker#hashtag}
		 * for available values.
		 */
	
		/**
		 * @cfg {String} hashtag (required)
		 *
		 * The Hashtag that was matched, without the '#'.
		 */
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.match.Match.prototype.constructor.call( this, cfg );
	
			// TODO: if( !serviceName ) throw new Error( '`serviceName` cfg required' );
			if( !cfg.hashtag ) throw new Error( '`hashtag` cfg required' );
	
			this.serviceName = cfg.serviceName;
			this.hashtag = cfg.hashtag;
		},
	
	
		/**
		 * Returns the type of match that this class represents.
		 *
		 * @return {String}
		 */
		getType : function() {
			return 'hashtag';
		},
	
	
		/**
		 * Returns the configured {@link #serviceName} to point the Hashtag to.
		 * Ex: 'facebook', 'twitter'.
		 *
		 * @return {String}
		 */
		getServiceName : function() {
			return this.serviceName;
		},
	
	
		/**
		 * Returns the matched hashtag, without the '#' character.
		 *
		 * @return {String}
		 */
		getHashtag : function() {
			return this.hashtag;
		},
	
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @return {String}
		 */
		getAnchorHref : function() {
			var serviceName = this.serviceName,
			    hashtag = this.hashtag;
	
			switch( serviceName ) {
				case 'twitter' :
					return 'https://twitter.com/hashtag/' + hashtag;
				case 'facebook' :
					return 'https://www.facebook.com/hashtag/' + hashtag;
				case 'instagram' :
					return 'https://instagram.com/explore/tags/' + hashtag;
	
				default :  // Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.
					throw new Error( 'Unknown service name to point hashtag to: ', serviceName );
			}
		},
	
	
		/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @return {String}
		 */
		getAnchorText : function() {
			return '#' + this.hashtag;
		}
	
	} );
	
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Phone
	 * @extends Autolinker.match.Match
	 *
	 * Represents a Phone number match found in an input string which should be
	 * Autolinked.
	 *
	 * See this class's superclass ({@link Autolinker.match.Match}) for more
	 * details.
	 */
	Autolinker.match.Phone = Autolinker.Util.extend( Autolinker.match.Match, {
	
		/**
		 * @protected
		 * @property {String} number (required)
		 *
		 * The phone number that was matched, without any delimiter characters.
		 *
		 * Note: This is a string to allow for prefixed 0's.
		 */
	
		/**
		 * @protected
		 * @property  {Boolean} plusSign (required)
		 *
		 * `true` if the matched phone number started with a '+' sign. We'll include
		 * it in the `tel:` URL if so, as this is needed for international numbers.
		 *
		 * Ex: '+1 (123) 456 7879'
		 */
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.match.Match.prototype.constructor.call( this, cfg );
	
			if( !cfg.number ) throw new Error( '`number` cfg required' );
			if( cfg.plusSign == null ) throw new Error( '`plusSign` cfg required' );
	
			this.number = cfg.number;
			this.plusSign = cfg.plusSign;
		},
	
	
		/**
		 * Returns a string name for the type of match that this class represents.
		 *
		 * @return {String}
		 */
		getType : function() {
			return 'phone';
		},
	
	
		/**
		 * Returns the phone number that was matched as a string, without any
		 * delimiter characters.
		 *
		 * Note: This is a string to allow for prefixed 0's.
		 *
		 * @return {String}
		 */
		getNumber: function() {
			return this.number;
		},
	
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'tel:' + ( this.plusSign ? '+' : '' ) + this.number;
		},
	
	
		/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @return {String}
		 */
		getAnchorText : function() {
			return this.matchedText;
		}
	
	} );
	
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Mention
	 * @extends Autolinker.match.Match
	 *
	 * Represents a Mention match found in an input string which should be Autolinked.
	 *
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Mention = Autolinker.Util.extend( Autolinker.match.Match, {
	
		/**
		 * @cfg {String} serviceName
		 *
		 * The service to point mention matches to. See {@link Autolinker#mention}
		 * for available values.
		 */
	
		/**
		 * @cfg {String} mention (required)
		 *
		 * The Mention that was matched, without the '@' character.
		 */
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.match.Match.prototype.constructor.call( this, cfg );
	
			if( !cfg.serviceName ) throw new Error( '`serviceName` cfg required' );
			if( !cfg.mention ) throw new Error( '`mention` cfg required' );
	
			this.mention = cfg.mention;
			this.serviceName = cfg.serviceName;
		},
	
	
		/**
		 * Returns the type of match that this class represents.
		 *
		 * @return {String}
		 */
		getType : function() {
			return 'mention';
		},
	
	
		/**
		 * Returns the mention, without the '@' character.
		 *
		 * @return {String}
		 */
		getMention : function() {
			return this.mention;
		},
	
	
		/**
		 * Returns the configured {@link #serviceName} to point the mention to.
		 * Ex: 'instagram', 'twitter'.
		 *
		 * @return {String}
		 */
		getServiceName : function() {
			return this.serviceName;
		},
	
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @return {String}
		 */
		getAnchorHref : function() {
			switch( this.serviceName ) {
				case 'twitter' :
					return 'https://twitter.com/' + this.mention;
				case 'instagram' :
					return 'https://instagram.com/' + this.mention;
	
				default :  // Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.
					throw new Error( 'Unknown service name to point mention to: ', this.serviceName );
			}
		},
	
	
		/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @return {String}
		 */
		getAnchorText : function() {
			return '@' + this.mention;
		},
	
	
		/**
		 * Returns the CSS class suffixes that should be used on a tag built with
		 * the match. See {@link Autolinker.match.Match#getCssClassSuffixes} for
		 * details.
		 *
		 * @return {String[]}
		 */
		getCssClassSuffixes : function() {
			var cssClassSuffixes = Autolinker.match.Match.prototype.getCssClassSuffixes.call( this ),
			    serviceName = this.getServiceName();
	
			if( serviceName ) {
				cssClassSuffixes.push( serviceName );
			}
			return cssClassSuffixes;
		}
	
	} );
	
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Url
	 * @extends Autolinker.match.Match
	 *
	 * Represents a Url match found in an input string which should be Autolinked.
	 *
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {
	
		/**
		 * @cfg {String} url (required)
		 *
		 * The url that was matched.
		 */
	
		/**
		 * @cfg {"scheme"/"www"/"tld"} urlMatchType (required)
		 *
		 * The type of URL match that this class represents. This helps to determine
		 * if the match was made in the original text with a prefixed scheme (ex:
		 * 'http://www.google.com'), a prefixed 'www' (ex: 'www.google.com'), or
		 * was matched by a known top-level domain (ex: 'google.com').
		 */
	
		/**
		 * @cfg {Boolean} protocolUrlMatch (required)
		 *
		 * `true` if the URL is a match which already has a protocol (i.e.
		 * 'http://'), `false` if the match was from a 'www' or known TLD match.
		 */
	
		/**
		 * @cfg {Boolean} protocolRelativeMatch (required)
		 *
		 * `true` if the URL is a protocol-relative match. A protocol-relative match
		 * is a URL that starts with '//', and will be either http:// or https://
		 * based on the protocol that the site is loaded under.
		 */
	
		/**
		 * @cfg {Object} stripPrefix (required)
		 *
		 * The Object form of {@link Autolinker#cfg-stripPrefix}.
		 */
	
		/**
		 * @cfg {Boolean} stripTrailingSlash (required)
		 * @inheritdoc Autolinker#cfg-stripTrailingSlash
		 */
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.match.Match.prototype.constructor.call( this, cfg );
	
			if( cfg.urlMatchType !== 'scheme' && cfg.urlMatchType !== 'www' && cfg.urlMatchType !== 'tld' ) throw new Error( '`urlMatchType` cfg must be one of: "scheme", "www", or "tld"' );
			if( !cfg.url ) throw new Error( '`url` cfg required' );
			if( cfg.protocolUrlMatch == null ) throw new Error( '`protocolUrlMatch` cfg required' );
			if( cfg.protocolRelativeMatch == null ) throw new Error( '`protocolRelativeMatch` cfg required' );
			if( cfg.stripPrefix == null ) throw new Error( '`stripPrefix` cfg required' );
			if( cfg.stripTrailingSlash == null ) throw new Error( '`stripTrailingSlash` cfg required' );
	
			this.urlMatchType = cfg.urlMatchType;
			this.url = cfg.url;
			this.protocolUrlMatch = cfg.protocolUrlMatch;
			this.protocolRelativeMatch = cfg.protocolRelativeMatch;
			this.stripPrefix = cfg.stripPrefix;
			this.stripTrailingSlash = cfg.stripTrailingSlash;
		},
	
	
		/**
		 * @private
		 * @property {RegExp} schemePrefixRegex
		 *
		 * A regular expression used to remove the 'http://' or 'https://' from
		 * URLs.
		 */
		schemePrefixRegex: /^(https?:\/\/)?/i,
	
		/**
		 * @private
		 * @property {RegExp} wwwPrefixRegex
		 *
		 * A regular expression used to remove the 'www.' from URLs.
		 */
		wwwPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
	
		/**
		 * @private
		 * @property {RegExp} protocolRelativeRegex
		 *
		 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
		 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
		 */
		protocolRelativeRegex : /^\/\//,
	
		/**
		 * @private
		 * @property {Boolean} protocolPrepended
		 *
		 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
		 * {@link #url} did not have a protocol)
		 */
		protocolPrepended : false,
	
	
		/**
		 * Returns a string name for the type of match that this class represents.
		 *
		 * @return {String}
		 */
		getType : function() {
			return 'url';
		},
	
	
		/**
		 * Returns a string name for the type of URL match that this class
		 * represents.
		 *
		 * This helps to determine if the match was made in the original text with a
		 * prefixed scheme (ex: 'http://www.google.com'), a prefixed 'www' (ex:
		 * 'www.google.com'), or was matched by a known top-level domain (ex:
		 * 'google.com').
		 *
		 * @return {"scheme"/"www"/"tld"}
		 */
		getUrlMatchType : function() {
			return this.urlMatchType;
		},
	
	
		/**
		 * Returns the url that was matched, assuming the protocol to be 'http://' if the original
		 * match was missing a protocol.
		 *
		 * @return {String}
		 */
		getUrl : function() {
			var url = this.url;
	
			// if the url string doesn't begin with a protocol, assume 'http://'
			if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {
				url = this.url = 'http://' + url;
	
				this.protocolPrepended = true;
			}
	
			return url;
		},
	
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @return {String}
		 */
		getAnchorHref : function() {
			var url = this.getUrl();
	
			return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html
		},
	
	
		/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @return {String}
		 */
		getAnchorText : function() {
			var anchorText = this.getMatchedText();
	
			if( this.protocolRelativeMatch ) {
				// Strip off any protocol-relative '//' from the anchor text
				anchorText = this.stripProtocolRelativePrefix( anchorText );
			}
			if( this.stripPrefix.scheme ) {
				anchorText = this.stripSchemePrefix( anchorText );
			}
			if( this.stripPrefix.www ) {
				anchorText = this.stripWwwPrefix( anchorText );
			}
			if( this.stripTrailingSlash ) {
				anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one
			}
	
			return anchorText;
		},
	
	
		// ---------------------------------------
	
		// Utility Functionality
	
		/**
		 * Strips the scheme prefix (such as "http://" or "https://") from the given
		 * `url`.
		 *
		 * @private
		 * @param {String} url The text of the anchor that is being generated, for
		 *   which to strip off the url scheme.
		 * @return {String} The `url`, with the scheme stripped.
		 */
		stripSchemePrefix : function( url ) {
			return url.replace( this.schemePrefixRegex, '' );
		},
	
	
		/**
		 * Strips the 'www' prefix from the given `url`.
		 *
		 * @private
		 * @param {String} url The text of the anchor that is being generated, for
		 *   which to strip off the 'www' if it exists.
		 * @return {String} The `url`, with the 'www' stripped.
		 */
		stripWwwPrefix : function( url ) {
			return url.replace( this.wwwPrefixRegex, '$1' );  // leave any scheme ($1), it one exists
		},
	
	
		/**
		 * Strips any protocol-relative '//' from the anchor text.
		 *
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   protocol-relative prefix (such as stripping off "//")
		 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
		 */
		stripProtocolRelativePrefix : function( text ) {
			return text.replace( this.protocolRelativeRegex, '' );
		},
	
	
		/**
		 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
		 *
		 * @private
		 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
		 *   slash ('/') that may exist.
		 * @return {String} The `anchorText`, with the trailing slash removed.
		 */
		removeTrailingSlash : function( anchorText ) {
			if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {
				anchorText = anchorText.slice( 0, -1 );
			}
			return anchorText;
		}
	
	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.matcher.Matcher
	 *
	 * An abstract class and interface for individual matchers to find matches in
	 * an input string with linkified versions of them.
	 *
	 * Note that Matchers do not take HTML into account - they must be fed the text
	 * nodes of any HTML string, which is handled by {@link Autolinker#parse}.
	 */
	Autolinker.matcher.Matcher = Autolinker.Util.extend( Object, {
	
		/**
		 * @cfg {Autolinker.AnchorTagBuilder} tagBuilder (required)
		 *
		 * Reference to the AnchorTagBuilder instance to use to generate HTML tags
		 * for {@link Autolinker.match.Match Matches}.
		 */
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Matcher
		 *   instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			if( !cfg.tagBuilder ) throw new Error( '`tagBuilder` cfg required' );
	
			this.tagBuilder = cfg.tagBuilder;
		},
	
	
		/**
		 * Parses the input `text` and returns the array of {@link Autolinker.match.Match Matches}
		 * for the matcher.
		 *
		 * @abstract
		 * @param {String} text The text to scan and replace matches in.
		 * @return {Autolinker.match.Match[]}
		 */
		parseMatches : Autolinker.Util.abstractMethod
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.matcher.Email
	 * @extends Autolinker.matcher.Matcher
	 *
	 * Matcher to find email matches in an input string.
	 *
	 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.
	 */
	Autolinker.matcher.Email = Autolinker.Util.extend( Autolinker.matcher.Matcher, {
	
		/**
		 * The regular expression to match email addresses. Example match:
		 *
		 *     person@place.com
		 *
		 * @private
		 * @property {RegExp} matcherRegex
		 */
		matcherRegex : (function() {
			var alphaNumericChars = Autolinker.RegexLib.alphaNumericCharsStr,
			    emailRegex = new RegExp( '[' + alphaNumericChars + '\\-_\';:&=+$.,]+@' ),  // something@ for email addresses (a.k.a. local-part)
				domainNameRegex = Autolinker.RegexLib.domainNameRegex,
				tldRegex = Autolinker.RegexLib.tldRegex;  // match our known top level domains (TLDs)
	
			return new RegExp( [
				emailRegex.source,
				domainNameRegex.source,
				'\\.', tldRegex.source   // '.com', '.net', etc
			].join( "" ), 'gi' );
		} )(),
	
	
		/**
		 * @inheritdoc
		 */
		parseMatches : function( text ) {
			var matcherRegex = this.matcherRegex,
			    tagBuilder = this.tagBuilder,
			    matches = [],
			    match;
	
			while( ( match = matcherRegex.exec( text ) ) !== null ) {
				var matchedText = match[ 0 ];
	
				matches.push( new Autolinker.match.Email( {
					tagBuilder  : tagBuilder,
					matchedText : matchedText,
					offset      : match.index,
					email       : matchedText
				} ) );
			}
	
			return matches;
		}
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.matcher.Hashtag
	 * @extends Autolinker.matcher.Matcher
	 *
	 * Matcher to find Hashtag matches in an input string.
	 */
	Autolinker.matcher.Hashtag = Autolinker.Util.extend( Autolinker.matcher.Matcher, {
	
		/**
		 * @cfg {String} serviceName
		 *
		 * The service to point hashtag matches to. See {@link Autolinker#hashtag}
		 * for available values.
		 */
	
	
		/**
		 * The regular expression to match Hashtags. Example match:
		 *
		 *     #asdf
		 *
		 * @private
		 * @property {RegExp} matcherRegex
		 */
		matcherRegex : new RegExp( '#[_' + Autolinker.RegexLib.alphaNumericCharsStr + ']{1,139}', 'g' ),
	
		/**
		 * The regular expression to use to check the character before a username match to
		 * make sure we didn't accidentally match an email address.
		 *
		 * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.
		 *
		 * @private
		 * @property {RegExp} nonWordCharRegex
		 */
		nonWordCharRegex : new RegExp( '[^' + Autolinker.RegexLib.alphaNumericCharsStr + ']' ),
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance,
		 *   specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.matcher.Matcher.prototype.constructor.call( this, cfg );
	
			this.serviceName = cfg.serviceName;
		},
	
	
		/**
		 * @inheritdoc
		 */
		parseMatches : function( text ) {
			var matcherRegex = this.matcherRegex,
			    nonWordCharRegex = this.nonWordCharRegex,
			    serviceName = this.serviceName,
			    tagBuilder = this.tagBuilder,
			    matches = [],
			    match;
	
			while( ( match = matcherRegex.exec( text ) ) !== null ) {
				var offset = match.index,
				    prevChar = text.charAt( offset - 1 );
	
				// If we found the match at the beginning of the string, or we found the match
				// and there is a whitespace char in front of it (meaning it is not a '#' char
				// in the middle of a word), then it is a hashtag match.
				if( offset === 0 || nonWordCharRegex.test( prevChar ) ) {
					var matchedText = match[ 0 ],
					    hashtag = match[ 0 ].slice( 1 );  // strip off the '#' character at the beginning
	
					matches.push( new Autolinker.match.Hashtag( {
						tagBuilder  : tagBuilder,
						matchedText : matchedText,
						offset      : offset,
						serviceName : serviceName,
						hashtag     : hashtag
					} ) );
				}
			}
	
			return matches;
		}
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.matcher.Phone
	 * @extends Autolinker.matcher.Matcher
	 *
	 * Matcher to find Phone number matches in an input string.
	 *
	 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more
	 * details.
	 */
	Autolinker.matcher.Phone = Autolinker.Util.extend( Autolinker.matcher.Matcher, {
	
		/**
		 * The regular expression to match Phone numbers. Example match:
		 *
		 *     (123) 456-7890
		 *
		 * This regular expression has the following capturing groups:
		 *
		 * 1. The prefixed '+' sign, if there is one.
		 *
		 * @private
		 * @property {RegExp} matcherRegex
		 */
		matcherRegex : /(?:(\+)?\d{1,3}[-\040.])?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]\d{4}/g,  // ex: (123) 456-7890, 123 456 7890, 123-456-7890, etc.
	
		/**
		 * @inheritdoc
		 */
		parseMatches : function( text ) {
			var matcherRegex = this.matcherRegex,
			    tagBuilder = this.tagBuilder,
			    matches = [],
			    match;
	
			while( ( match = matcherRegex.exec( text ) ) !== null ) {
				// Remove non-numeric values from phone number string
				var matchedText = match[ 0 ],
				    cleanNumber = matchedText.replace( /\D/g, '' ),  // strip out non-digit characters
				    plusSign = !!match[ 1 ];  // match[ 1 ] is the prefixed plus sign, if there is one
	
				matches.push( new Autolinker.match.Phone( {
					tagBuilder  : tagBuilder,
					matchedText : matchedText,
					offset      : match.index,
					number      : cleanNumber,
					plusSign    : plusSign
				} ) );
			}
	
			return matches;
		}
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.matcher.Mention
	 * @extends Autolinker.matcher.Matcher
	 *
	 * Matcher to find/replace username matches in an input string.
	 */
	Autolinker.matcher.Mention = Autolinker.Util.extend( Autolinker.matcher.Matcher, {
	
		/**
		 * Hash of regular expression to match username handles. Example match:
		 *
		 *     @asdf
		 *
		 * @private
		 * @property {Object} matcherRegexes
		 */
		matcherRegexes : {
			"twitter": new RegExp( '@[_' + Autolinker.RegexLib.alphaNumericCharsStr + ']{1,20}', 'g' ),
			"instagram": new RegExp( '@[_.' + Autolinker.RegexLib.alphaNumericCharsStr + ']{1,50}', 'g' )
		},
	
		/**
		 * The regular expression to use to check the character before a username match to
		 * make sure we didn't accidentally match an email address.
		 *
		 * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.
		 *
		 * @private
		 * @property {RegExp} nonWordCharRegex
		 */
		nonWordCharRegex : new RegExp( '[^' + Autolinker.RegexLib.alphaNumericCharsStr + ']' ),
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance,
		 *   specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.matcher.Matcher.prototype.constructor.call( this, cfg );
	
			this.serviceName = cfg.serviceName;
		},
	
	
		/**
		 * @inheritdoc
		 */
		parseMatches : function( text ) {
			var matcherRegex = this.matcherRegexes[this.serviceName],
			    nonWordCharRegex = this.nonWordCharRegex,
			    serviceName = this.serviceName,
			    tagBuilder = this.tagBuilder,
			    matches = [],
			    match;
	
			if (!matcherRegex) {
				return matches;
			}
	
			while( ( match = matcherRegex.exec( text ) ) !== null ) {
				var offset = match.index,
				    prevChar = text.charAt( offset - 1 );
	
				// If we found the match at the beginning of the string, or we found the match
				// and there is a whitespace char in front of it (meaning it is not an email
				// address), then it is a username match.
				if( offset === 0 || nonWordCharRegex.test( prevChar ) ) {
					var matchedText = match[ 0 ].replace(/\.+$/g, ''), // strip off trailing .
					    mention = matchedText.slice( 1 );  // strip off the '@' character at the beginning
	
					matches.push( new Autolinker.match.Mention( {
						tagBuilder    : tagBuilder,
						matchedText   : matchedText,
						offset        : offset,
						serviceName   : serviceName,
						mention       : mention
					} ) );
				}
			}
	
			return matches;
		}
	
	} );
	
	/*global Autolinker */
	/**
	 * @class Autolinker.matcher.Url
	 * @extends Autolinker.matcher.Matcher
	 *
	 * Matcher to find URL matches in an input string.
	 *
	 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.
	 */
	Autolinker.matcher.Url = Autolinker.Util.extend( Autolinker.matcher.Matcher, {
	
		/**
		 * @cfg {Object} stripPrefix (required)
		 *
		 * The Object form of {@link Autolinker#cfg-stripPrefix}.
		 */
	
		/**
		 * @cfg {Boolean} stripTrailingSlash (required)
		 * @inheritdoc Autolinker#stripTrailingSlash
		 */
	
	
		/**
		 * @private
		 * @property {RegExp} matcherRegex
		 *
		 * The regular expression to match URLs with an optional scheme, port
		 * number, path, query string, and hash anchor.
		 *
		 * Example matches:
		 *
		 *     http://google.com
		 *     www.google.com
		 *     google.com/path/to/file?q1=1&q2=2#myAnchor
		 *
		 *
		 * This regular expression will have the following capturing groups:
		 *
		 * 1.  Group that matches a scheme-prefixed URL (i.e. 'http://google.com').
		 *     This is used to match scheme URLs with just a single word, such as
		 *     'http://localhost', where we won't double check that the domain name
		 *     has at least one dot ('.') in it.
		 * 2.  Group that matches a 'www.' prefixed URL. This is only matched if the
		 *     'www.' text was not prefixed by a scheme (i.e.: not prefixed by
		 *     'http://', 'ftp:', etc.)
		 * 3.  A protocol-relative ('//') match for the case of a 'www.' prefixed
		 *     URL. Will be an empty string if it is not a protocol-relative match.
		 *     We need to know the character before the '//' in order to determine
		 *     if it is a valid match or the // was in a string we don't want to
		 *     auto-link.
		 * 4.  Group that matches a known TLD (top level domain), when a scheme
		 *     or 'www.'-prefixed domain is not matched.
		 * 5.  A protocol-relative ('//') match for the case of a known TLD prefixed
		 *     URL. Will be an empty string if it is not a protocol-relative match.
		 *     See #3 for more info.
		 */
		matcherRegex : (function() {
			var schemeRegex = /(?:[A-Za-z][-.+A-Za-z0-9]*:(?![A-Za-z][-.+A-Za-z0-9]*:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
			    wwwRegex = /(?:www\.)/,                  // starting with 'www.'
			    domainNameRegex = Autolinker.RegexLib.domainNameRegex,
			    tldRegex = Autolinker.RegexLib.tldRegex,  // match our known top level domains (TLDs)
			    alphaNumericCharsStr = Autolinker.RegexLib.alphaNumericCharsStr,
	
			    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
			    // http://blog.codinghorror.com/the-problem-with-urls/
			    urlSuffixRegex = new RegExp( '[' + alphaNumericCharsStr + '\\-+&@#/%=~_()|\'$*\\[\\]?!:,.;]*[' + alphaNumericCharsStr + '\\-+&@#/%=~_()|\'$*\\[\\]]' );
	
			return new RegExp( [
				'(?:', // parens to cover match for scheme (optional), and domain
					'(',  // *** Capturing group $1, for a scheme-prefixed url (ex: http://google.com)
						schemeRegex.source,
						domainNameRegex.source,
					')',
	
					'|',
	
					'(',  // *** Capturing group $2, for a 'www.' prefixed url (ex: www.google.com)
						'(//)?',  // *** Capturing group $3 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character (handled later)
						wwwRegex.source,
						domainNameRegex.source,
					')',
	
					'|',
	
					'(',  // *** Capturing group $4, for known a TLD url (ex: google.com)
						'(//)?',  // *** Capturing group $5 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character (handled later)
						domainNameRegex.source + '\\.',
						tldRegex.source,
					')',
				')',
	
				'(?:' + urlSuffixRegex.source + ')?'  // match for path, query string, and/or hash anchor - optional
			].join( "" ), 'gi' );
		} )(),
	
	
		/**
		 * A regular expression to use to check the character before a protocol-relative
		 * URL match. We don't want to match a protocol-relative URL if it is part
		 * of another word.
		 *
		 * For example, we want to match something like "Go to: //google.com",
		 * but we don't want to match something like "abc//google.com"
		 *
		 * This regular expression is used to test the character before the '//'.
		 *
		 * @private
		 * @type {RegExp} wordCharRegExp
		 */
		wordCharRegExp : /\w/,
	
	
		/**
		 * The regular expression to match opening parenthesis in a URL match.
		 *
		 * This is to determine if we have unbalanced parenthesis in the URL, and to
		 * drop the final parenthesis that was matched if so.
		 *
		 * Ex: The text "(check out: wikipedia.com/something_(disambiguation))"
		 * should only autolink the inner "wikipedia.com/something_(disambiguation)"
		 * part, so if we find that we have unbalanced parenthesis, we will drop the
		 * last one for the match.
		 *
		 * @private
		 * @property {RegExp}
		 */
		openParensRe : /\(/g,
	
		/**
		 * The regular expression to match closing parenthesis in a URL match. See
		 * {@link #openParensRe} for more information.
		 *
		 * @private
		 * @property {RegExp}
		 */
		closeParensRe : /\)/g,
	
	
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance,
		 *   specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.matcher.Matcher.prototype.constructor.call( this, cfg );
	
			if( cfg.stripPrefix == null ) throw new Error( '`stripPrefix` cfg required' );
			if( cfg.stripTrailingSlash == null ) throw new Error( '`stripTrailingSlash` cfg required' );
	
			this.stripPrefix = cfg.stripPrefix;
			this.stripTrailingSlash = cfg.stripTrailingSlash;
		},
	
	
		/**
		 * @inheritdoc
		 */
		parseMatches : function( text ) {
			var matcherRegex = this.matcherRegex,
			    stripPrefix = this.stripPrefix,
			    stripTrailingSlash = this.stripTrailingSlash,
			    tagBuilder = this.tagBuilder,
			    matches = [],
			    match;
	
			while( ( match = matcherRegex.exec( text ) ) !== null ) {
				var matchStr = match[ 0 ],
				    schemeUrlMatch = match[ 1 ],
				    wwwUrlMatch = match[ 2 ],
				    wwwProtocolRelativeMatch = match[ 3 ],
				    //tldUrlMatch = match[ 4 ],  -- not needed at the moment
				    tldProtocolRelativeMatch = match[ 5 ],
				    offset = match.index,
				    protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
					prevChar = text.charAt( offset - 1 );
	
				if( !Autolinker.matcher.UrlMatchValidator.isValid( matchStr, schemeUrlMatch ) ) {
					continue;
				}
	
				// If the match is preceded by an '@' character, then it is either
				// an email address or a username. Skip these types of matches.
				if( offset > 0 && prevChar === '@' ) {
					continue;
				}
	
				// If it's a protocol-relative '//' match, but the character before the '//'
				// was a word character (i.e. a letter/number), then we found the '//' in the
				// middle of another word (such as "asdf//asdf.com"). In this case, skip the
				// match.
				if( offset > 0 && protocolRelativeMatch && this.wordCharRegExp.test( prevChar ) ) {
					continue;
				}
	
				// Handle a closing parenthesis at the end of the match, and exclude
				// it if there is not a matching open parenthesis in the match
				// itself.
				if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
					matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
				} else {
					// Handle an invalid character after the TLD
					var pos = this.matchHasInvalidCharAfterTld( matchStr, schemeUrlMatch );
					if( pos > -1 ) {
						matchStr = matchStr.substr( 0, pos ); // remove the trailing invalid chars
					}
				}
	
				var urlMatchType = schemeUrlMatch ? 'scheme' : ( wwwUrlMatch ? 'www' : 'tld' ),
				    protocolUrlMatch = !!schemeUrlMatch;
	
				matches.push( new Autolinker.match.Url( {
					tagBuilder            : tagBuilder,
					matchedText           : matchStr,
					offset                : offset,
					urlMatchType          : urlMatchType,
					url                   : matchStr,
					protocolUrlMatch      : protocolUrlMatch,
					protocolRelativeMatch : !!protocolRelativeMatch,
					stripPrefix           : stripPrefix,
					stripTrailingSlash    : stripTrailingSlash
				} ) );
			}
	
			return matches;
		},
	
	
		/**
		 * Determines if a match found has an unmatched closing parenthesis. If so,
		 * this parenthesis will be removed from the match itself, and appended
		 * after the generated anchor tag.
		 *
		 * A match may have an extra closing parenthesis at the end of the match
		 * because the regular expression must include parenthesis for URLs such as
		 * "wikipedia.com/something_(disambiguation)", which should be auto-linked.
		 *
		 * However, an extra parenthesis *will* be included when the URL itself is
		 * wrapped in parenthesis, such as in the case of "(wikipedia.com/something_(disambiguation))".
		 * In this case, the last closing parenthesis should *not* be part of the
		 * URL itself, and this method will return `true`.
		 *
		 * @private
		 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
		 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at
		 *   the end of the `matchStr`, `false` otherwise.
		 */
		matchHasUnbalancedClosingParen : function( matchStr ) {
			var lastChar = matchStr.charAt( matchStr.length - 1 );
	
			if( lastChar === ')' ) {
				var openParensMatch = matchStr.match( this.openParensRe ),
				    closeParensMatch = matchStr.match( this.closeParensRe ),
				    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
				    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;
	
				if( numOpenParens < numCloseParens ) {
					return true;
				}
			}
	
			return false;
		},
	
	
		/**
		 * Determine if there's an invalid character after the TLD in a URL. Valid
		 * characters after TLD are ':/?#'. Exclude scheme matched URLs from this
		 * check.
		 *
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an
		 *   empty string if the match is not a URL match.
		 * @param {String} schemeUrlMatch The match URL string for a scheme
		 *   match. Ex: 'http://yahoo.com'. This is used to match something like
		 *   'http://localhost', where we won't double check that the domain name
		 *   has at least one '.' in it.
		 * @return {Number} the position where the invalid character was found. If
		 *   no such character was found, returns -1
		 */
		matchHasInvalidCharAfterTld : function( urlMatch, schemeUrlMatch ) {
			if( !urlMatch ) {
				return -1;
			}
	
			var offset = 0;
			if ( schemeUrlMatch ) {
				offset = urlMatch.indexOf(':');
				urlMatch = urlMatch.slice(offset);
			}
	
			var re = /^((.?\/\/)?[A-Za-z0-9\u00C0-\u017F\.\-]*[A-Za-z0-9\u00C0-\u017F\-]\.[A-Za-z]+)/;
			var res = re.exec( urlMatch );
			if ( res === null ) {
				return -1;
			}
	
			offset += res[1].length;
			urlMatch = urlMatch.slice(res[1].length);
			if (/^[^.A-Za-z:\/?#]/.test(urlMatch)) {
				return offset;
			}
	
			return -1;
		}
	
	} );
	/*global Autolinker */
	/*jshint scripturl:true */
	/**
	 * @private
	 * @class Autolinker.matcher.UrlMatchValidator
	 * @singleton
	 *
	 * Used by Autolinker to filter out false URL positives from the
	 * {@link Autolinker.matcher.Url UrlMatcher}.
	 *
	 * Due to the limitations of regular expressions (including the missing feature
	 * of look-behinds in JS regular expressions), we cannot always determine the
	 * validity of a given match. This class applies a bit of additional logic to
	 * filter out any false positives that have been matched by the
	 * {@link Autolinker.matcher.Url UrlMatcher}.
	 */
	Autolinker.matcher.UrlMatchValidator = {
	
		/**
		 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
		 *
		 * @private
		 * @property {RegExp} hasFullProtocolRegex
		 */
		hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]*:\/\//,
	
		/**
		 * Regex to find the URI scheme, such as 'mailto:'.
		 *
		 * This is used to filter out 'javascript:' and 'vbscript:' schemes.
		 *
		 * @private
		 * @property {RegExp} uriSchemeRegex
		 */
		uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]*:/,
	
		/**
		 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
		 *
		 * @private
		 * @property {RegExp} hasWordCharAfterProtocolRegex
		 */
		hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z\u00C0-\u017F]/,
	
		/**
		 * Regex to determine if the string is a valid IP address
		 *
		 * @private
		 * @property {RegExp} ipRegex
		 */
		ipRegex: /[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/,
	
		/**
		 * Determines if a given URL match found by the {@link Autolinker.matcher.Url UrlMatcher}
		 * is valid. Will return `false` for:
		 *
		 * 1) URL matches which do not have at least have one period ('.') in the
		 *    domain name (effectively skipping over matches like "abc:def").
		 *    However, URL matches with a protocol will be allowed (ex: 'http://localhost')
		 * 2) URL matches which do not have at least one word character in the
		 *    domain name (effectively skipping over matches like "git:1.0").
		 * 3) A protocol-relative url match (a URL beginning with '//') whose
		 *    previous character is a word character (effectively skipping over
		 *    strings like "abc//google.com")
		 *
		 * Otherwise, returns `true`.
		 *
		 * @param {String} urlMatch The matched URL, if there was one. Will be an
		 *   empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol
		 *   match. Ex: 'http://yahoo.com'. This is used to match something like
		 *   'http://localhost', where we won't double check that the domain name
		 *   has at least one '.' in it.
		 * @return {Boolean} `true` if the match given is valid and should be
		 *   processed, or `false` if the match is invalid and/or should just not be
		 *   processed.
		 */
		isValid : function( urlMatch, protocolUrlMatch ) {
			if(
				( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||
				this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||    // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
				(this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) && // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
				 !this.isValidIpAddress( urlMatch ) // Except if it's an IP address
				)
			) {
				return false;
			}
	
			return true;
		},
	
	
		isValidIpAddress : function ( uriSchemeMatch ) {
			var newRegex = new RegExp(this.hasFullProtocolRegex.source + this.ipRegex.source);
			var uriScheme = uriSchemeMatch.match( newRegex );
	
			return uriScheme !== null;
		},
	
		/**
		 * Determines if the URI scheme is a valid scheme to be autolinked. Returns
		 * `false` if the scheme is 'javascript:' or 'vbscript:'
		 *
		 * @private
		 * @param {String} uriSchemeMatch The match URL string for a full URI scheme
		 *   match. Ex: 'http://yahoo.com' or 'mailto:a@a.com'.
		 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
		 */
		isValidUriScheme : function( uriSchemeMatch ) {
			var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ].toLowerCase();
	
			return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );
		},
	
	
		/**
		 * Determines if a URL match does not have either:
		 *
		 * a) a full protocol (i.e. 'http://'), or
		 * b) at least one dot ('.') in the domain name (for a non-full-protocol
		 *    match).
		 *
		 * Either situation is considered an invalid URL (ex: 'git:d' does not have
		 * either the '://' part, or at least one dot in the domain name. If the
		 * match was 'git:abc.com', we would consider this valid.)
		 *
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an
		 *   empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol
		 *   match. Ex: 'http://yahoo.com'. This is used to match something like
		 *   'http://localhost', where we won't double check that the domain name
		 *   has at least one '.' in it.
		 * @return {Boolean} `true` if the URL match does not have a full protocol,
		 *   or at least one dot ('.') in a non-full-protocol match.
		 */
		urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {
			return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
		},
	
	
		/**
		 * Determines if a URL match does not have at least one word character after
		 * the protocol (i.e. in the domain name).
		 *
		 * At least one letter character must exist in the domain name after a
		 * protocol match. Ex: skip over something like "git:1.0"
		 *
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an
		 *   empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol
		 *   match. Ex: 'http://yahoo.com'. This is used to know whether or not we
		 *   have a protocol in the URL string, in order to check for a word
		 *   character after the protocol separator (':').
		 * @return {Boolean} `true` if the URL match does not have at least one word
		 *   character in it after the protocol, `false` otherwise.
		 */
		urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {
			if( urlMatch && protocolUrlMatch ) {
				return !this.hasWordCharAfterProtocolRegex.test( urlMatch );
			} else {
				return false;
			}
		}
	
	};
	/*global Autolinker */
	/**
	 * A truncation feature where the ellipsis will be placed at the end of the URL.
	 *
	 * @param {String} anchorText
	 * @param {Number} truncateLen The maximum length of the truncated output URL string.
	 * @param {String} ellipsisChars The characters to place within the url, e.g. "..".
	 * @return {String} The truncated URL.
	 */
	Autolinker.truncate.TruncateEnd = function(anchorText, truncateLen, ellipsisChars){
		return Autolinker.Util.ellipsis( anchorText, truncateLen, ellipsisChars );
	};
	
	/*global Autolinker */
	/**
	 * Date: 2015-10-05
	 * Author: Kasper Søfren <soefritz@gmail.com> (https://github.com/kafoso)
	 *
	 * A truncation feature, where the ellipsis will be placed in the dead-center of the URL.
	 *
	 * @param {String} url             A URL.
	 * @param {Number} truncateLen     The maximum length of the truncated output URL string.
	 * @param {String} ellipsisChars   The characters to place within the url, e.g. "..".
	 * @return {String} The truncated URL.
	 */
	Autolinker.truncate.TruncateMiddle = function(url, truncateLen, ellipsisChars){
	  if (url.length <= truncateLen) {
	    return url;
	  }
	  var availableLength = truncateLen - ellipsisChars.length;
	  var end = "";
	  if (availableLength > 0) {
	    end = url.substr((-1)*Math.floor(availableLength/2));
	  }
	  return (url.substr(0, Math.ceil(availableLength/2)) + ellipsisChars + end).substr(0, truncateLen);
	};
	
	/*global Autolinker */
	/**
	 * Date: 2015-10-05
	 * Author: Kasper Søfren <soefritz@gmail.com> (https://github.com/kafoso)
	 *
	 * A truncation feature, where the ellipsis will be placed at a section within
	 * the URL making it still somewhat human readable.
	 *
	 * @param {String} url						 A URL.
	 * @param {Number} truncateLen		 The maximum length of the truncated output URL string.
	 * @param {String} ellipsisChars	 The characters to place within the url, e.g. "..".
	 * @return {String} The truncated URL.
	 */
	Autolinker.truncate.TruncateSmart = function(url, truncateLen, ellipsisChars){
		var parse_url = function(url){ // Functionality inspired by PHP function of same name
			var urlObj = {};
			var urlSub = url;
			var match = urlSub.match(/^([a-z]+):\/\//i);
			if (match) {
				urlObj.scheme = match[1];
				urlSub = urlSub.substr(match[0].length);
			}
			match = urlSub.match(/^(.*?)(?=(\?|#|\/|$))/i);
			if (match) {
				urlObj.host = match[1];
				urlSub = urlSub.substr(match[0].length);
			}
			match = urlSub.match(/^\/(.*?)(?=(\?|#|$))/i);
			if (match) {
				urlObj.path = match[1];
				urlSub = urlSub.substr(match[0].length);
			}
			match = urlSub.match(/^\?(.*?)(?=(#|$))/i);
			if (match) {
				urlObj.query = match[1];
				urlSub = urlSub.substr(match[0].length);
			}
			match = urlSub.match(/^#(.*?)$/i);
			if (match) {
				urlObj.fragment = match[1];
				//urlSub = urlSub.substr(match[0].length);  -- not used. Uncomment if adding another block.
			}
			return urlObj;
		};
	
		var buildUrl = function(urlObj){
			var url = "";
			if (urlObj.scheme && urlObj.host) {
				url += urlObj.scheme + "://";
			}
			if (urlObj.host) {
				url += urlObj.host;
			}
			if (urlObj.path) {
				url += "/" + urlObj.path;
			}
			if (urlObj.query) {
				url += "?" + urlObj.query;
			}
			if (urlObj.fragment) {
				url += "#" + urlObj.fragment;
			}
			return url;
		};
	
		var buildSegment = function(segment, remainingAvailableLength){
			var remainingAvailableLengthHalf = remainingAvailableLength/ 2,
					startOffset = Math.ceil(remainingAvailableLengthHalf),
					endOffset = (-1)*Math.floor(remainingAvailableLengthHalf),
					end = "";
			if (endOffset < 0) {
				end = segment.substr(endOffset);
			}
			return segment.substr(0, startOffset) + ellipsisChars + end;
		};
		if (url.length <= truncateLen) {
			return url;
		}
		var availableLength = truncateLen - ellipsisChars.length;
		var urlObj = parse_url(url);
		// Clean up the URL
		if (urlObj.query) {
			var matchQuery = urlObj.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);
			if (matchQuery) {
				// Malformed URL; two or more "?". Removed any content behind the 2nd.
				urlObj.query = urlObj.query.substr(0, matchQuery[1].length);
				url = buildUrl(urlObj);
			}
		}
		if (url.length <= truncateLen) {
			return url;
		}
		if (urlObj.host) {
			urlObj.host = urlObj.host.replace(/^www\./, "");
			url = buildUrl(urlObj);
		}
		if (url.length <= truncateLen) {
			return url;
		}
		// Process and build the URL
		var str = "";
		if (urlObj.host) {
			str += urlObj.host;
		}
		if (str.length >= availableLength) {
			if (urlObj.host.length == truncateLen) {
				return (urlObj.host.substr(0, (truncateLen - ellipsisChars.length)) + ellipsisChars).substr(0, truncateLen);
			}
			return buildSegment(str, availableLength).substr(0, truncateLen);
		}
		var pathAndQuery = "";
		if (urlObj.path) {
			pathAndQuery += "/" + urlObj.path;
		}
		if (urlObj.query) {
			pathAndQuery += "?" + urlObj.query;
		}
		if (pathAndQuery) {
			if ((str+pathAndQuery).length >= availableLength) {
				if ((str+pathAndQuery).length == truncateLen) {
					return (str + pathAndQuery).substr(0, truncateLen);
				}
				var remainingAvailableLength = availableLength - str.length;
				return (str + buildSegment(pathAndQuery, remainingAvailableLength)).substr(0, truncateLen);
			} else {
				str += pathAndQuery;
			}
		}
		if (urlObj.fragment) {
			var fragment = "#"+urlObj.fragment;
			if ((str+fragment).length >= availableLength) {
				if ((str+fragment).length == truncateLen) {
					return (str + fragment).substr(0, truncateLen);
				}
				var remainingAvailableLength2 = availableLength - str.length;
				return (str + buildSegment(fragment, remainingAvailableLength2)).substr(0, truncateLen);
			} else {
				str += fragment;
			}
		}
		if (urlObj.scheme && urlObj.host) {
			var scheme = urlObj.scheme + "://";
			if ((str+scheme).length < availableLength) {
				return (scheme + str).substr(0, truncateLen);
			}
		}
		if (str.length <= truncateLen) {
			return str;
		}
		var end = "";
		if (availableLength > 0) {
			end = str.substr((-1)*Math.floor(availableLength/2));
		}
		return (str.substr(0, Math.ceil(availableLength/2)) + ellipsisChars + end).substr(0, truncateLen);
	};
	
	return Autolinker;
	}));


/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var router_1 = __webpack_require__(375);
	var oidc_token_manager_service_1 = __webpack_require__(362);
	//import { OAuthService }               from "angular2-oauth2/oauth-service";
	//let $ = require("jquery");
	/*
	 * Currently the main application component (i.e this) has the functionality to login or logout.
	 * Nevertheless, this behaviour might/should be in a different component, maybe a header.
	 */
	var AppComponent = (function () {
	    function AppComponent(_oidcmanager, _elRef, _router, $) {
	        this._oidcmanager = _oidcmanager;
	        this._elRef = _elRef;
	        this._router = _router;
	        this.$ = $;
	        this.mgr = this._oidcmanager.mgr;
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        this.$(this._elRef.nativeElement)
	            .find(".button-collapse")
	            .sideNav({
	            closeOnClick: true
	        });
	    };
	    AppComponent.prototype.logOutOfIdSrv = function () {
	        this.mgr.redirectForLogout();
	    };
	    // This might be removed since logOutOfIdSrv()
	    // is the current way of logging out.
	    AppComponent.prototype.logout = function () {
	        this.mgr.removeToken();
	        window.location.href = "index.html";
	    };
	    AppComponent.prototype.login = function () {
	        this.mgr.redirectForToken();
	    };
	    AppComponent.prototype.openNotesSecurityMessage = function () {
	        if (this.mgr.expired) {
	            this.$(this._elRef.nativeElement)
	                .find("#notesAccessModal").openModal();
	        }
	        else {
	            this.toNotes();
	        }
	    };
	    AppComponent.prototype.toNotes = function () {
	        this._router.navigate(["/notes"]);
	    };
	    AppComponent.prototype.cancelToNotes = function () {
	        this.$(this._elRef.nativeElement)
	            .find("#notesAccessModal").closeModal();
	    };
	    AppComponent.prototype.openContactsSecurityMessage = function () {
	        if (this.mgr.expired) {
	            this.$(this._elRef.nativeElement)
	                .find("#contactsAccessModal").openModal();
	        }
	        else {
	            this.toContacts();
	        }
	    };
	    AppComponent.prototype.toContacts = function () {
	        this._router.navigate(["/contacts"]);
	    };
	    AppComponent.prototype.cancelToContacts = function () {
	        this.$(this._elRef.nativeElement)
	            .find("#contactsAccessModal").closeModal();
	    };
	    AppComponent.prototype.openLogoutMessage = function () {
	        this.$(this._elRef.nativeElement)
	            .find("#logoutModal").openModal();
	    };
	    AppComponent.prototype.closeLogoutMessage = function () {
	        this.$(this._elRef.nativeElement)
	            .find("#logoutModal").closeModal();
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: "app",
	            styles: ["\n  .brand-logo{\n    display: block;\n  }\n\n  @media (max-width: 800px) \n  {\n      .brand-logo\n      {\n          display: none;\n      }\n  }\n  "],
	            template: __webpack_require__(436)
	        }),
	        __param(3, core_1.Inject("$")), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof oidc_token_manager_service_1.OidcTokenManagerService !== 'undefined' && oidc_token_manager_service_1.OidcTokenManagerService) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, Object])
	    ], AppComponent);
	    return AppComponent;
	    var _a, _b, _c;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 436:
/***/ function(module, exports) {

	module.exports = "<nav>\r\n  <div class=\"nav-wrapper blue-grey darken-1\">\r\n    <a href=\"#!\" class=\"brand-logo center\">DBSP Remember Me</a>\r\n    <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r\n    <ul class=\"left hide-on-med-and-down\">\r\n      <li><a [routerLink]=\"['/home']\">Home</a></li>\r\n      <li><a (click)=\"openNotesSecurityMessage()\">Notes</a></li>\r\n      <li><a (click)=\"openContactsSecurityMessage()\">Contacts</a></li>\r\n    </ul>\r\n    <ul class=\"side-nav\" id=\"mobile-demo\">\r\n      <li><a [routerLink]=\"['/home']\">Home</a></li>\r\n      <li><a (click)=\"openNotesSecurityMessage()\">Notes</a></li>\r\n      <li><a (click)=\"openContactsSecurityMessage()\">Contacts</a></li>\r\n    </ul>\r\n    <ul class=\"right\">\r\n      <li *ngIf=\"mgr.expired\"><a (click)=\"login()\">Log in</a></li>\r\n      <li *ngIf=\"!mgr.expired\"><a (click)=\"openLogoutMessage()\">You're logged as {{ mgr.profile.given_name }}</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<br />\r\n\r\n<div class=\"row\">\r\n  <div class=\"col s12 m4\">\r\n    <div class=\"col s12 offset-m1\">\r\n      <user-info></user-info>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s12 m8\">\r\n    <div class=\"col s12\">\r\n      <head-container></head-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n<!-- Used for asking to log in on Notes -->\r\n<div id=\"notesAccessModal\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <h4>Log in is required</h4>\r\n    <p>You must be logged in to view this section.</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a (click)=\"cancelToNotes()\"\r\n       class=\"modal-action modal-close waves-effect waves-teal btn btn-flat\">Discard</a>\r\n    <a (click)=\"toNotes()\"\r\n       class=\"modal-action modal-close waves-effect waves-teal btn btn-flat\">Agree</a>\r\n  </div>\r\n</div>\r\n\r\n<!-- Used for asking to log in on Contacts -->\r\n<div id=\"contactsAccessModal\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <h4>Log in is required</h4>\r\n    <p>You must be logged in to view this section.</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a (click)=\"cancelToContacts()\"\r\n       class=\"modal-action modal-close waves-effect waves-teal btn btn-flat\">Discard</a>\r\n    <a (click)=\"toNotes()\"\r\n       class=\"modal-action modal-close waves-effect waves-teal btn btn-flat\">Agree</a>\r\n  </div>\r\n</div>\r\n\r\n<!-- Used for asking to log out -->\r\n<div id=\"logoutModal\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <h4>Log out confirmation</h4>\r\n    <p>Are you sure to log out of the application?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a (click)=\"closeLogoutMessage()\"\r\n       class=\"modal-action modal-close waves-effect waves-teal btn btn-flat\">Cancel</a>\r\n    <a (click)=\"logOutOfIdSrv()\"\r\n       class=\"modal-action modal-close waves-effect waves-teal btn btn-flat\">Yes</a>\r\n  </div>\r\n</div>\r\n\r\n";

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var home_routing_1 = __webpack_require__(438);
	var home_component_1 = __webpack_require__(439);
	var callback_component_1 = __webpack_require__(440);
	var local_logout_component_1 = __webpack_require__(441);
	var not_found_component_1 = __webpack_require__(443); // Not yet implemented.
	var silent_refresh_component_1 = __webpack_require__(442);
	var HomeModule = (function () {
	    function HomeModule() {
	    }
	    HomeModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                home_routing_1.routing
	            ],
	            declarations: [
	                home_component_1.HomeComponent,
	                callback_component_1.CallbackComponent,
	                local_logout_component_1.LocalLogoutComponent,
	                not_found_component_1.NotFoundComponent,
	                silent_refresh_component_1.SilentRefreshComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeModule);
	    return HomeModule;
	}());
	exports.HomeModule = HomeModule;


/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(375);
	var home_component_1 = __webpack_require__(439);
	var callback_component_1 = __webpack_require__(440);
	var local_logout_component_1 = __webpack_require__(441);
	var silent_refresh_component_1 = __webpack_require__(442);
	exports.routes = [
	    { path: "home", component: home_component_1.HomeComponent },
	    { path: "callback", component: callback_component_1.CallbackComponent },
	    { path: "local-logout", component: local_logout_component_1.LocalLogoutComponent },
	    { path: "silent-refresh", component: silent_refresh_component_1.SilentRefreshComponent }
	];
	exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var $ = __webpack_require__(373);
	var HomeComponent = (function () {
	    function HomeComponent(_elRef) {
	        this._elRef = _elRef;
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: "home",
	            template: "\n  "
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
	    ], HomeComponent);
	    return HomeComponent;
	    var _a;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	__webpack_require__(363);
	var core_1 = __webpack_require__(11);
	var router_1 = __webpack_require__(375);
	var oidc_token_manager_service_1 = __webpack_require__(362);
	var CallbackComponent = (function () {
	    function CallbackComponent(_router, _oidcTokenManager) {
	        this._router = _router;
	        this._oidcTokenManager = _oidcTokenManager;
	        this._config = {
	            client_id: "remembermeimplicit",
	            //redirect_uri: "http://localhost:8888/callback",
	            redirect_uri: "http://dbsp-rememberme-angular2.azurewebsites.net/callback",
	            //post_logout_redirect_uri: "http://localhost:8888/home",
	            post_logout_redirect_uri: "http://dbsp-rememberme-angular2.azurewebsites.net/home",
	            load_user_profile: false,
	            //authority: "http://localhost:1693/identity",
	            authority: "http://dbsp-rememberme-identity.azurewebsites.net/identity",
	        };
	        this._mgr = _oidcTokenManager.mgr;
	        this._mgr.oidcClient = new OidcClient(this._config);
	    }
	    CallbackComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._mgr.processTokenCallbackAsync()
	            .then(function () { return _this._router.navigate(["home"]); })
	            .catch(function (err) {
	            // Try to use a modal instead of an alert.
	            alert("Problem Getting Token : " + (err.message || err));
	            _this._router.navigate(["home"]);
	        });
	    };
	    CallbackComponent = __decorate([
	        core_1.Component({
	            selector: 'callback',
	            template: "\n  "
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof oidc_token_manager_service_1.OidcTokenManagerService !== 'undefined' && oidc_token_manager_service_1.OidcTokenManagerService) === 'function' && _b) || Object])
	    ], CallbackComponent);
	    return CallbackComponent;
	    var _a, _b;
	}());
	exports.CallbackComponent = CallbackComponent;


/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var oidc_token_manager_service_1 = __webpack_require__(362);
	var LocalLogoutComponent = (function () {
	    function LocalLogoutComponent(_oidcTokenManager) {
	        this._oidcTokenManager = _oidcTokenManager;
	        this._mgr = _oidcTokenManager.mgr;
	    }
	    LocalLogoutComponent.prototype.ngOnInit = function () {
	        this._mgr.removeToken();
	    };
	    LocalLogoutComponent = __decorate([
	        core_1.Component({
	            selector: 'local-logout',
	            template: "\n  "
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof oidc_token_manager_service_1.OidcTokenManagerService !== 'undefined' && oidc_token_manager_service_1.OidcTokenManagerService) === 'function' && _a) || Object])
	    ], LocalLogoutComponent);
	    return LocalLogoutComponent;
	    var _a;
	}());
	exports.LocalLogoutComponent = LocalLogoutComponent;


/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var oidc_token_manager_service_1 = __webpack_require__(362);
	var SilentRefreshComponent = (function () {
	    // This component uses a service instead of instantiating one.
	    function SilentRefreshComponent(_oidcTokenManager) {
	        this._oidcTokenManager = _oidcTokenManager;
	        this._mgr = _oidcTokenManager.mgr;
	    }
	    SilentRefreshComponent.prototype.ngOnInit = function () {
	        this._mgr.processTokenCallbackSilent();
	    };
	    SilentRefreshComponent = __decorate([
	        core_1.Component({
	            selector: 'silent-refresh',
	            template: "\n  "
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof oidc_token_manager_service_1.OidcTokenManagerService !== 'undefined' && oidc_token_manager_service_1.OidcTokenManagerService) === 'function' && _a) || Object])
	    ], SilentRefreshComponent);
	    return SilentRefreshComponent;
	    var _a;
	}());
	exports.SilentRefreshComponent = SilentRefreshComponent;


/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var NotFoundComponent = (function () {
	    function NotFoundComponent() {
	    }
	    NotFoundComponent = __decorate([
	        core_1.Component({
	            selector: 'not-found',
	            template: "\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NotFoundComponent);
	    return NotFoundComponent;
	}());
	exports.NotFoundComponent = NotFoundComponent;


/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var common_1 = __webpack_require__(205);
	var notes_routing_1 = __webpack_require__(445);
	var notes_home_component_1 = __webpack_require__(446);
	var notes_home_guard_1 = __webpack_require__(447);
	var notes_container_component_1 = __webpack_require__(448);
	var notes_pagination_component_1 = __webpack_require__(451);
	var notes_pagination_item_component_1 = __webpack_require__(452);
	var notes_add_item_component_1 = __webpack_require__(453);
	var notes_list_component_1 = __webpack_require__(455);
	var notes_item_component_1 = __webpack_require__(456);
	var notes_help_component_1 = __webpack_require__(457);
	var notes_manager_component_1 = __webpack_require__(458);
	var notes_filter_container_component_1 = __webpack_require__(460);
	var notes_filter_item_component_1 = __webpack_require__(459);
	var notes_service_1 = __webpack_require__(449);
	var forms_1 = __webpack_require__(461);
	var NotesModule = (function () {
	    function NotesModule() {
	    }
	    NotesModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                forms_1.FormsModule,
	                common_1.CommonModule,
	                notes_routing_1.routing
	            ],
	            declarations: [
	                notes_home_component_1.NotesHomeComponent,
	                notes_container_component_1.NotesContainerComponent,
	                notes_pagination_component_1.NotesPaginationComponent,
	                notes_pagination_item_component_1.NotesPaginationItemComponent,
	                notes_add_item_component_1.NotesAddItemComponent,
	                notes_list_component_1.NotesListComponent,
	                notes_item_component_1.NotesItemComponent,
	                notes_help_component_1.NotesHelpComponent,
	                notes_manager_component_1.NotesManagerComponent,
	                notes_filter_container_component_1.NotesFilterContainerComponent,
	                notes_filter_item_component_1.NotesFilterItemComponent
	            ],
	            providers: [
	                notes_service_1.NotesService,
	                notes_home_guard_1.NotesHomegGuard
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NotesModule);
	    return NotesModule;
	}());
	exports.NotesModule = NotesModule;


/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(375);
	var notes_home_component_1 = __webpack_require__(446);
	var notes_home_guard_1 = __webpack_require__(447);
	exports.routes = [
	    { path: "notes", component: notes_home_component_1.NotesHomeComponent, canActivate: [notes_home_guard_1.NotesHomegGuard] }
	];
	exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var NotesHomeComponent = (function () {
	    // Sending search for all notes (default).
	    function NotesHomeComponent() {
	        this.searchString = "";
	        this.filterType = "Title";
	    }
	    NotesHomeComponent.prototype.setIsAddNoteSectionEnabled = function (isAddNoteSectionEnabled) {
	        this.isAddNoteSectionEnabled = isAddNoteSectionEnabled;
	    };
	    NotesHomeComponent.prototype.setIsFilterNoteSectionEnabled = function (isFilterNoteSectionEnabled) {
	        this.isFilterNoteSectionEnabled = isFilterNoteSectionEnabled;
	    };
	    NotesHomeComponent.prototype.toNotesContainer = function (searchStringEventArgs) {
	        this.searchString = searchStringEventArgs.searchString;
	        this.filterType = searchStringEventArgs.filterType;
	    };
	    NotesHomeComponent = __decorate([
	        core_1.Component({
	            selector: 'notes-home',
	            styles: ["\n\n  "],
	            template: "\n  <div class=\"col s12 m4\">\n    <div class=\"col s12 offset-m1\">\n      <notes-help></notes-help>\n\n      <!-- The Event onOpenAddNoteSection is generated when notes-manager component is clicked -->\n      <!-- $event is a boolean -->\n      <notes-manager (onOpenAddNoteSection)=\"setIsAddNoteSectionEnabled($event)\"\n                     (onOpenFilterNoteSection)=\"setIsFilterNoteSectionEnabled($event)\"\n                     (onSendSearchString)=\"toNotesContainer($event)\">               \n      </notes-manager>\n\n      <notes-filter-container *ngIf=\"isFilterNoteSectionEnabled\"\n                    (onCloseFilterNoteSection)=\"setIsFilterNoteSectionEnabled($event)\"\n                    (onSendSearchString)=\"toNotesContainer($event)\">                   \n      </notes-filter-container>\n    </div>\n  </div>\n\n  <div class=\"col s12 m8\">\n    <div class=\"col s12\">\n      <notes-container [isAddNoteSectionEnabled]=\"isAddNoteSectionEnabled\"\n                       [searchString]=\"searchString\"\n                       [filterType]=\"filterType\"\n                       (onCloseAddNoteSection)=\"setIsAddNoteSectionEnabled($event)\">                   \n      </notes-container>\n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NotesHomeComponent);
	    return NotesHomeComponent;
	}());
	exports.NotesHomeComponent = NotesHomeComponent;


/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var oidc_token_manager_service_1 = __webpack_require__(362);
	var core_1 = __webpack_require__(11);
	var NotesHomegGuard = (function () {
	    function NotesHomegGuard(_oidcTokenManager) {
	        this._oidcTokenManager = _oidcTokenManager;
	        this._isValid = false;
	        this._mgr = _oidcTokenManager.mgr;
	        if (this._mgr.expired) {
	            this._mgr.redirectForToken();
	        }
	        else {
	            this._isValid = true;
	        }
	    }
	    NotesHomegGuard.prototype.canActivate = function (route, state) {
	        return this._isValid;
	    };
	    NotesHomegGuard = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof oidc_token_manager_service_1.OidcTokenManagerService !== 'undefined' && oidc_token_manager_service_1.OidcTokenManagerService) === 'function' && _a) || Object])
	    ], NotesHomegGuard);
	    return NotesHomegGuard;
	    var _a;
	}());
	exports.NotesHomegGuard = NotesHomegGuard;


/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var notes_service_1 = __webpack_require__(449);
	var note_model_1 = __webpack_require__(450);
	var NotesContainerComponent = (function () {
	    function NotesContainerComponent(_notesService, _elRef, $) {
	        this._notesService = _notesService;
	        this._elRef = _elRef;
	        this.$ = $;
	        this.onCloseAddNoteSection = new core_1.EventEmitter();
	        this._noteToDelete = new note_model_1.Note("", "", "", "", "");
	        this._isAddNoteSectionDisabled = false;
	        this.noteCount = 0;
	    }
	    NotesContainerComponent.prototype.ngOnInit = function () {
	        this.getNotesCount();
	        //this.getNotes();
	    };
	    // ngOnChanges manage if a filtering has been made.
	    NotesContainerComponent.prototype.ngOnChanges = function () {
	        var _this = this;
	        // Controlling to not trigger on first ngOnChanges call.
	        if (this.searchString !== undefined) {
	            this._notesService
	                .getNotesCountForFilter(this.searchString, this.filterType)
	                .subscribe(function (res) {
	                _this.noteCount = res;
	                // TODO: Subscribe to error and display it.
	            });
	        }
	    };
	    NotesContainerComponent.prototype.getNotesCount = function () {
	        var _this = this;
	        this._notesService
	            .getNotesCount()
	            .subscribe(function (res) {
	            _this.noteCount = res;
	            // TODO: Subscribe to error and display it.
	        });
	    };
	    NotesContainerComponent.prototype.getNotesWithSkipAndFilter = function (pageClickedEventArgs) {
	        var _this = this;
	        this._notesService
	            .getNotesWithSkipAndFilter(pageClickedEventArgs)
	            .subscribe(function (res) {
	            _this._notes = res;
	            // TODO: Subscribe to error and display it.
	        });
	    };
	    // TODO: handle res.value and res["@odata.count"] on NotesService.
	    // private getNotes() {
	    //   this._notesService
	    //     .getNotes()
	    //     .subscribe(res => {
	    //       this._notes = res.value;
	    //       this.noteCount = res["@odata.count"];
	    //       // TODO: Subscribe to error and display it.
	    //     });
	    // }
	    NotesContainerComponent.prototype.handleAddNoteEvent = function (addNoteArgs) {
	        var _this = this;
	        // Send event to notes-home component 
	        if (addNoteArgs.submitted || addNoteArgs.canceled) {
	            this.onCloseAddNoteSection.emit(this._isAddNoteSectionDisabled);
	        }
	        // Adding to API.
	        if (addNoteArgs.note) {
	            this._notesService
	                .addNote(addNoteArgs.note)
	                .subscribe(function (note) {
	                _this._notes.unshift(note);
	                // TODO: Subscribe to error and display it.
	            });
	        }
	    };
	    NotesContainerComponent.prototype.openDeleteNoteConfirmation = function (note) {
	        this._noteToDelete = note;
	        this.$(this._elRef.nativeElement)
	            .find("#deleteConfirmationModal").openModal();
	    };
	    NotesContainerComponent.prototype.deleteNote = function () {
	        // Deleting from API.
	        this._notesService
	            .deleteNote(this._noteToDelete)
	            .subscribe(function (res) {
	            console.log("The result of deleteNote is:");
	            console.log(res);
	            // TODO: Subscribe to error and display it.
	        });
	        // Deleting from UI. 
	        console.log(this._noteToDelete);
	        var indexToDelete;
	        for (var index in this._notes) {
	            if (this._notes[index].Id === this._noteToDelete.Id) {
	                indexToDelete = index;
	                break;
	            }
	        }
	        this._notes.splice(indexToDelete, 1);
	        console.log(this._notes);
	    };
	    NotesContainerComponent.prototype.editNote = function (note) {
	        // Editing from API, UI has been already updated.
	        this._notesService
	            .editNote(note)
	            .subscribe(function (res) {
	            console.log("The result of editNote is:");
	            console.log(res);
	            // TODO: Subscribe to error and display it.
	        });
	    };
	    NotesContainerComponent.prototype.closeDeleteConfirmationMessage = function () {
	        this.$(this._elRef.nativeElement)
	            .find("#deleteConfirmationModal").closeModal();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NotesContainerComponent.prototype, "isAddNoteSectionEnabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NotesContainerComponent.prototype, "searchString", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NotesContainerComponent.prototype, "filterType", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], NotesContainerComponent.prototype, "onCloseAddNoteSection", void 0);
	    NotesContainerComponent = __decorate([
	        core_1.Component({
	            selector: "notes-container",
	            template: "\n  <notes-add-item *ngIf=\"isAddNoteSectionEnabled\"\n                  (onAddNote)=\"handleAddNoteEvent($event)\">\n  </notes-add-item>\n  \n  <notes-pagination [noteCount]=\"noteCount\"\n                    [searchString]=\"searchString\"\n                    [filterType]=\"filterType\"\n                    (onPageClicked)=\"getNotesWithSkipAndFilter($event)\">\n  </notes-pagination>\n\n  <notes-list [notes]=\"_notes\"\n              (onDeleteNote)=\"openDeleteNoteConfirmation($event)\"\n              (onEditNote)=\"editNote($event)\">\n  </notes-list>\n\n  <!-- Used for delete confirmation -->\n  <div id=\"deleteConfirmationModal\" class=\"modal\">\n    <div class=\"modal-content\">\n      <h4>Delete confirmation</h4>\n      <p>The note with title: {{ _noteToDelete.Title }} will be deleted</p>\n    </div>\n    <div class=\"modal-footer\">\n      <a (click)=\"closeDeleteConfirmationMessage()\"\n         class=\"modal-action modal-close waves-effect waves-green btn btn-flat\">Cancel</a>\n      <a (click)=\"deleteNote()\"\n         class=\"modal-action modal-close waves-effect waves-green btn btn-flat\">Yes</a>\n    </div>\n  </div>\n  "
	        }),
	        __param(2, core_1.Inject("$")), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof notes_service_1.NotesService !== 'undefined' && notes_service_1.NotesService) === 'function' && _b) || Object, (typeof (_c = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _c) || Object, Object])
	    ], NotesContainerComponent);
	    return NotesContainerComponent;
	    var _a, _b, _c;
	}());
	exports.NotesContainerComponent = NotesContainerComponent;


/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var Observable_1 = __webpack_require__(70);
	var http_extended_service_1 = __webpack_require__(370);
	var NotesService = (function () {
	    function NotesService(_http, _baseUrl) {
	        this._http = _http;
	        this._baseUrl = _baseUrl;
	    }
	    // TODO: return Observable<OdataResponse>
	    NotesService.prototype.getNotes = function () {
	        return this._http
	            .get(this._baseUrl + "odata/Notes")
	            .map(function (res) {
	            var body = res.json();
	            // The body has context, count and value
	            return body || {};
	        })
	            .catch(this.handleError);
	    };
	    NotesService.prototype.getNotesWithSkip = function (skip) {
	        return this._http
	            .get(this._baseUrl + ("odata/Notes?$skip=" + skip))
	            .map(function (res) {
	            var body = res.json();
	            // The body has context and value
	            return body.value || {};
	        })
	            .catch(this.handleError);
	    };
	    NotesService.prototype.getNotesWithSkipAndFilter = function (pageClickedEventArgs) {
	        var skip = pageClickedEventArgs.skip;
	        var searchString = pageClickedEventArgs.searchString;
	        var filterType = pageClickedEventArgs.filterType;
	        if (filterType === "Priority") {
	            var testedNumber = parseInt(searchString);
	            if (testedNumber !== NaN) {
	                return this._http
	                    .get(this._baseUrl + "odata/Notes?$skip=" + skip + "&$filter=" + filterType + " eq " + searchString)
	                    .map(function (res) {
	                    var body = res.json();
	                    // The body has context and value
	                    return body.value || {};
	                })
	                    .catch(this.handleError);
	            }
	        }
	        return this._http
	            .get(this._baseUrl + "odata/Notes?$skip=" + skip + "&$filter=contains(" + filterType + ",'" + searchString + "')")
	            .map(function (res) {
	            var body = res.json();
	            // The body has context and value
	            return body.value || {};
	        })
	            .catch(this.handleError);
	    };
	    NotesService.prototype.getNotesCountForFilter = function (searchString, filterType) {
	        if (filterType === "Priority") {
	            var testedNumber = parseInt(searchString);
	            if (testedNumber !== NaN) {
	                return this._http
	                    .get(this._baseUrl + "odata/Notes?$count=true&$filter=" + filterType + " eq " + searchString)
	                    .map(function (res) {
	                    var body = res.json();
	                    // The body has context, count and value
	                    return body["@odata.count"];
	                })
	                    .catch(this.handleError);
	            }
	        }
	        return this._http
	            .get(this._baseUrl + "odata/Notes?$count=true&$filter=contains(" + filterType + ",'" + searchString + "')")
	            .map(function (res) {
	            var body = res.json();
	            // The body has context, count and value
	            return body["@odata.count"];
	        })
	            .catch(this.handleError);
	    };
	    // TODO: return Observable<OdataResponse>
	    NotesService.prototype.getNotesCount = function () {
	        return this._http
	            .get(this._baseUrl + "odata/Notes/RememberMe.Functions.GetNotesCount()")
	            .map(function (res) {
	            var body = res.json();
	            // The body has context and value
	            return body.value;
	        })
	            .catch(this.handleError);
	    };
	    // TODO: return Observable<OdataResponse>
	    NotesService.prototype.addNote = function (note) {
	        return this._http
	            .post(this._baseUrl + "odata/Notes", note)
	            .map(function (res) {
	            var body = res.json();
	            return body || {};
	        })
	            .catch(this.handleError);
	    };
	    // TODO: return Observable<OdataResponse>
	    NotesService.prototype.editNote = function (note) {
	        return this._http
	            .patch(this._baseUrl + "odata/Notes(" + note.Id + ")", note)
	            .map(function (res) {
	            return res;
	        })
	            .catch(this.handleError);
	    };
	    // TODO: return Observable<OdataResponse>
	    NotesService.prototype.deleteNote = function (note) {
	        return this._http
	            .delete(this._baseUrl + "odata/Notes(" + note.Id + ")")
	            .map(function (res) {
	            return res;
	        })
	            .catch(this.handleError);
	    };
	    NotesService.prototype.handleError = function (error) {
	        // In a real world app, we might use a remote logging infrastructure
	        // We'd also dig deeper into the error to get a better message
	        var errMsg = (error.message) ? error.message :
	            error.status ? error.status + " - " + error.statusText : 'Server error';
	        console.error(errMsg); // log to console instead
	        return Observable_1.Observable.throw(errMsg);
	    };
	    NotesService = __decorate([
	        core_1.Injectable(),
	        __param(1, core_1.Inject("BASE_URL")), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_extended_service_1.HttpExtendedService !== 'undefined' && http_extended_service_1.HttpExtendedService) === 'function' && _a) || Object, String])
	    ], NotesService);
	    return NotesService;
	    var _a;
	}());
	exports.NotesService = NotesService;


/***/ },

/***/ 450:
/***/ function(module, exports) {

	"use strict";
	var Note = (function () {
	    function Note(Title, Category, Priority, Content, OwnerId, ScheduleTime, Id) {
	        this.Title = Title;
	        this.Category = Category;
	        this.Priority = Priority;
	        this.Content = Content;
	        this.OwnerId = OwnerId;
	        this.ScheduleTime = ScheduleTime;
	        this.Id = Id;
	    }
	    return Note;
	}());
	exports.Note = Note;
	// SAMPLE STRUCTURE
	//{
	//  "id": "1",
	//  "title": "C#",
	//  "category": "Development",
	//  "priority": "1",
	//  "content": "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel."
	//} 


/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var NotesPaginationComponent = (function () {
	    function NotesPaginationComponent() {
	        this.onPageClicked = new core_1.EventEmitter();
	        this._pageSize = 4;
	    }
	    NotesPaginationComponent.prototype.ngOnInit = function () {
	    };
	    // Each time there's a change a new PaginationOptions object is created.
	    NotesPaginationComponent.prototype.ngOnChanges = function () {
	        this.paginationOptions = this.paginationOptionsFactory();
	        if (this.paginationOptions !== null) {
	            if (this.paginationOptions.pagesData.length > 0) {
	                this.sendNotesToContainer(this.paginationOptions.pagesData[0].skip);
	            }
	        }
	    };
	    NotesPaginationComponent.prototype.storePageItems = function (pageItem) {
	        console.log(pageItem.pageData.index);
	    };
	    NotesPaginationComponent.prototype.selectPage = function (pageData) {
	        var _this = this;
	        // Reseting all PageData.selected to false.
	        this.paginationOptions.pagesData.forEach(function (pd) {
	            pd.selected = false;
	        });
	        // Setting up selected PageData.selected to true.
	        this.paginationOptions.pagesData.filter(function (pd) {
	            return pd.index == pageData.index;
	        })
	            .map(function (pd) {
	            pd.selected = true;
	            // Send the number of skiped notes.
	            _this.sendNotesToContainer(pd.skip);
	        });
	    };
	    NotesPaginationComponent.prototype.moveLeft = function () {
	        var selectedPageData;
	        this.paginationOptions.pagesData.filter(function (pd) {
	            return pd.selected == true;
	        })
	            .map(function (pd) { return selectedPageData = pd; });
	        if (selectedPageData.index > 1) {
	            var leftPageData = this.paginationOptions
	                .pagesData[selectedPageData.index - 2];
	            this.selectPage(leftPageData);
	        }
	    };
	    NotesPaginationComponent.prototype.moveRight = function () {
	        var selectedPageData;
	        this.paginationOptions.pagesData.filter(function (pd) {
	            return pd.selected == true;
	        })
	            .map(function (pd) { return selectedPageData = pd; });
	        if (selectedPageData.index < this.paginationOptions
	            .pagesData.length) {
	            var rightPageData = this.paginationOptions
	                .pagesData[selectedPageData.index];
	            this.selectPage(rightPageData);
	        }
	    };
	    // This method needs a better name since it not just is fired when
	    // a click's been made, it's also fired on the first ngOnChanges.
	    NotesPaginationComponent.prototype.sendNotesToContainer = function (skip) {
	        var pageClickedEventArgs = new PageClickedEventArgs();
	        pageClickedEventArgs.skip = skip;
	        pageClickedEventArgs.searchString = this.searchString;
	        pageClickedEventArgs.filterType = this.filterType;
	        this.onPageClicked.emit(pageClickedEventArgs);
	    };
	    // This should be in a service.
	    NotesPaginationComponent.prototype.paginationOptionsFactory = function () {
	        var paginationOptions = new PaginationOptions();
	        var pageNumber = 0;
	        if ((this.noteCount % this._pageSize) === 0) {
	            pageNumber = this.noteCount / this._pageSize;
	        }
	        else {
	            pageNumber = Math.floor(this.noteCount / this._pageSize) + 1;
	        }
	        var pagesData = [];
	        for (var x = 0; x < pageNumber; x++) {
	            var pageData = new PageData();
	            pageData.index = x + 1;
	            pageData.skip = x * this._pageSize;
	            pageData.selected = x == 0 ? true : false;
	            pagesData[x] = pageData;
	        }
	        paginationOptions.pageNumber = pageNumber;
	        paginationOptions.pagesData = pagesData;
	        return paginationOptions;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NotesPaginationComponent.prototype, "noteCount", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NotesPaginationComponent.prototype, "searchString", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NotesPaginationComponent.prototype, "filterType", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], NotesPaginationComponent.prototype, "onPageClicked", void 0);
	    NotesPaginationComponent = __decorate([
	        core_1.Component({
	            selector: "notes-pagination",
	            styles: ["\n  li {\n    cursor:pointer;\n  }\n  .blue-grey {\n    background-color: red;\n  }\n  "],
	            template: "\n  <ul class=\"pagination\">\n    <li class=\"waves-effect\" (click)=\"moveLeft()\">\n      <a><i class=\"material-icons\">chevron_left</i></a>\n    </li>\n    <notes-pagination-item *ngFor=\"let _pageData of paginationOptions.pagesData\"\n                           [clicked]=\"_pageData.selected\"\n                           [pageData]=\"_pageData\"\n                           (onSelect)=\"selectPage($event)\">\n    </notes-pagination-item>\n    <li class=\"waves-effect\" (click)=\"moveRight()\">\n      <a><i class=\"material-icons\">chevron_right</i></a>\n    </li>\n  </ul>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NotesPaginationComponent);
	    return NotesPaginationComponent;
	    var _a;
	}());
	exports.NotesPaginationComponent = NotesPaginationComponent;
	var PaginationOptions = (function () {
	    function PaginationOptions() {
	    }
	    return PaginationOptions;
	}());
	var PageData = (function () {
	    function PageData() {
	    }
	    return PageData;
	}());
	exports.PageData = PageData;
	var PageClickedEventArgs = (function () {
	    function PageClickedEventArgs() {
	    }
	    return PageClickedEventArgs;
	}());
	exports.PageClickedEventArgs = PageClickedEventArgs;


/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var notes_pagination_component_1 = __webpack_require__(451);
	var NotesPaginationItemComponent = (function () {
	    function NotesPaginationItemComponent(_elRef, $) {
	        this._elRef = _elRef;
	        this.$ = $;
	        this.onSelect = new core_1.EventEmitter();
	    }
	    NotesPaginationItemComponent.prototype.ngOnInit = function () {
	    };
	    NotesPaginationItemComponent.prototype.ngOnChanges = function () {
	        if (this.clicked) {
	            this.$(this._elRef.nativeElement)
	                .find("a").addClass("active blue-grey lighten-2");
	        }
	        else {
	            this.$(this._elRef.nativeElement)
	                .find("a").removeClass("active blue-grey lighten-2");
	        }
	    };
	    NotesPaginationItemComponent.prototype.selectPage = function () {
	        this.onSelect.emit(this.pageData);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NotesPaginationItemComponent.prototype, "clicked", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof notes_pagination_component_1.PageData !== 'undefined' && notes_pagination_component_1.PageData) === 'function' && _a) || Object)
	    ], NotesPaginationItemComponent.prototype, "pageData", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], NotesPaginationItemComponent.prototype, "onSelect", void 0);
	    NotesPaginationItemComponent = __decorate([
	        core_1.Component({
	            selector: "notes-pagination-item",
	            styles: ["\n  "],
	            template: "\n  <li class=\"waves-effect\" (click)=\"selectPage()\">\n    <a>{{ pageData.index }}</a>\n  </li>\n  "
	        }),
	        __param(1, core_1.Inject("$")), 
	        __metadata('design:paramtypes', [(typeof (_c = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _c) || Object, Object])
	    ], NotesPaginationItemComponent);
	    return NotesPaginationItemComponent;
	    var _a, _b, _c;
	}());
	exports.NotesPaginationItemComponent = NotesPaginationItemComponent;


/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var note_model_1 = __webpack_require__(450);
	var NotesAddItemComponent = (function () {
	    function NotesAddItemComponent(_elRef, $) {
	        this._elRef = _elRef;
	        this.$ = $;
	        this.onAddNote = new core_1.EventEmitter();
	    }
	    NotesAddItemComponent.prototype.ngOnInit = function () {
	        this.model = new note_model_1.Note("", "", "", "", "");
	        this.$(this._elRef.nativeElement)
	            .find("#schedule").pickadate({
	            selectMonths: true,
	            selectYears: 15 // Creates a dropdown of 15 years to control year
	        });
	    };
	    NotesAddItemComponent.prototype.submit = function () {
	        var scheduleText = this.$(this._elRef.nativeElement)
	            .find("#schedule").val();
	        // Creating a date based on the pickdate element selection or 
	        // the default current creation time.
	        var scheduleTime;
	        if (scheduleText) {
	            scheduleTime = new Date(scheduleText).getTime();
	        }
	        else {
	            scheduleTime = new Date().getTime();
	        }
	        this.model.ScheduleTime = scheduleTime;
	        var addNoteArgs = new AddNoteArgs();
	        addNoteArgs.submitted = true,
	            addNoteArgs.canceled = false,
	            addNoteArgs.note = this.model;
	        this.onAddNote.emit(addNoteArgs);
	    };
	    NotesAddItemComponent.prototype.cancel = function () {
	        var addNoteArgs = new AddNoteArgs();
	        addNoteArgs.submitted = false,
	            addNoteArgs.canceled = true,
	            addNoteArgs.note = null;
	        this.onAddNote.emit(addNoteArgs);
	    };
	    NotesAddItemComponent.prototype.restartNote = function () {
	        this.model = new note_model_1.Note("", "", "", "", "");
	        this.$(this._elRef.nativeElement)
	            .find("#schedule").pickadate("picker").clear();
	    };
	    Object.defineProperty(NotesAddItemComponent.prototype, "diagnostic", {
	        get: function () {
	            return JSON.stringify(this.model);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], NotesAddItemComponent.prototype, "onAddNote", void 0);
	    NotesAddItemComponent = __decorate([
	        core_1.Component({
	            selector: 'notes-add-item',
	            styles: ["\n  .ng-valid[required] {\n    border-bottom: 1px solid #42A948; /* green */\n  }\n  .ng-invalid {\n    border-bottom: 1px solid #a94442; /* red */\n  }\n  "],
	            template: __webpack_require__(454)
	        }),
	        __param(1, core_1.Inject("$")), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object, Object])
	    ], NotesAddItemComponent);
	    return NotesAddItemComponent;
	    var _a, _b;
	}());
	exports.NotesAddItemComponent = NotesAddItemComponent;
	var AddNoteArgs = (function () {
	    function AddNoteArgs() {
	    }
	    return AddNoteArgs;
	}());
	exports.AddNoteArgs = AddNoteArgs;


/***/ },

/***/ 454:
/***/ function(module, exports) {

	module.exports = "<div class=\"row z-depth-4\">\r\n  <form class=\"col s12\" (ngSubmit)=\"submit()\" #noteForm=\"ngForm\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <input id=\"title\" type=\"text\" class=\"validate\" required\r\n                [(ngModel)]=\"model.Title\" name=\"title\"\r\n                #title=\"ngModel\">  \r\n        <label for=\"title\" data-error=\"invalid\" data-success=\"valid\">Title</label>\r\n        <div [hidden]=\"title.valid || title.untouched\" \r\n              class=\"alert alert-danger\">\r\n          <sup style=\"color:red;\">Title is required</sup>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <textarea id=\"content\" class=\"materialize-textarea\"\r\n                  [(ngModel)]=\"model.Content\" name=\"content\"></textarea>\r\n        <label for=\"content\">Content</label>\r\n      </div>\r\n    </div>\r\n\r\n    <input type=\"button\" class=\"btn-flat\" value=\"Diagnostic\" (click)=\"contentDiagnostic()\" /><br />\r\n\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12 m6\">\r\n        <input id=\"category\" type=\"text\" class=\"validate\" required\r\n                [(ngModel)]=\"model.Category\" name=\"category\"\r\n                #category=\"ngModel\">\r\n        <label for=\"category\" data-error=\"invalid\" data-success=\"valid\">Category</label>\r\n        <div [hidden]=\"category.valid || category.untouched\" \r\n              class=\"alert alert-danger\">\r\n          <sup style=\"color:red;\">Category is required</sup>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-field col s12 m6\">\r\n        <input id=\"priority\" type=\"number\" class=\"validate\" required\r\n                [(ngModel)]=\"model.Priority\" name=\"priority\"\r\n                #priority=\"ngModel\">\r\n        <label for=\"priority\" data-error=\"invalid\" data-success=\"valid\">Priority</label>\r\n        <div [hidden]=\"priority.valid || priority.untouched\" \r\n              class=\"alert alert-danger\">\r\n          <sup style=\"color:red;\">Priority is required</sup>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12 m6\">\r\n        <input id=\"schedule\" type=\"date\" class=\"datepicker\">\r\n        <label for=\"schedule\">Schedule</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <input class=\"btn-flat\" type=\"submit\" [disabled]=\"!noteForm.form.valid\" value=\"Save\" />\r\n      <input class=\"btn-flat\" type=\"button\" value=\"Restart note\" (click)=\"restartNote()\" />\r\n      <input class=\"btn-flat\" type=\"button\" value=\"Cancel\" (click)=\"cancel()\" />\r\n    </div>\r\n  </form>\r\n</div>";

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var NotesListComponent = (function () {
	    function NotesListComponent() {
	        this.onDeleteNote = new core_1.EventEmitter();
	        this.onEditNote = new core_1.EventEmitter();
	    }
	    NotesListComponent.prototype.sendNoteToDelete = function (note) {
	        this.onDeleteNote.emit(note);
	    };
	    NotesListComponent.prototype.sendNoteToEdit = function (note) {
	        this.onEditNote.emit(note);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], NotesListComponent.prototype, "notes", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], NotesListComponent.prototype, "onDeleteNote", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], NotesListComponent.prototype, "onEditNote", void 0);
	    NotesListComponent = __decorate([
	        core_1.Component({
	            selector: 'notes-list',
	            template: "\n  <notes-item *ngFor=\"let note of notes\"\n              [note]=\"note\"\n              (onDeleteNote)=\"sendNoteToDelete($event)\"\n              (onEditNote)=\"sendNoteToEdit($event)\">\n  </notes-item>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NotesListComponent);
	    return NotesListComponent;
	    var _a, _b;
	}());
	exports.NotesListComponent = NotesListComponent;


/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var auto_linker_service_1 = __webpack_require__(371);
	var note_model_1 = __webpack_require__(450);
	var NotesItemComponent = (function () {
	    function NotesItemComponent(_elRef, _autoLinker, $) {
	        this._elRef = _elRef;
	        this._autoLinker = _autoLinker;
	        this.$ = $;
	        this.isEditable = false;
	        this.onDeleteNote = new core_1.EventEmitter();
	        this.onEditNote = new core_1.EventEmitter();
	        this._scheduleTimeSpanTime = 21600000; // 6 hours
	    }
	    NotesItemComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.cloneNote();
	        // Adding default values to this.scheduleColor.
	        // this.scheduleColor = "seagreen";
	        // Parsing epoch time to human readable value.
	        var scheduleTime = new Date(this.note.ScheduleTime);
	        this.scheduleTimeString = scheduleTime.toDateString();
	        // Evaluating if the schedule time is on time or near complition.
	        this.evaluateScheduleTime(scheduleTime);
	        // Firing up the scheduler
	        this._scheduleTimeEvaluator = setInterval(function () {
	            _this.evaluateScheduleTime(scheduleTime);
	        }, this._scheduleTimeSpanTime);
	    };
	    NotesItemComponent.prototype.evaluateScheduleTime = function (scheduleTime) {
	        this.scheduleColor = "seagreen";
	        var bufferTime = 2; // Default 2 days.
	        var actualTime = new Date();
	        if (actualTime.getDate() + bufferTime >= scheduleTime.getDate()) {
	            this.scheduleColor = "tomato";
	        }
	    };
	    // I'm not sure about this implementation (it's fired too many times).
	    // public ngAfterViewChecked () {
	    //   this.$(this._elRef.nativeElement)
	    //     .find("#schedule").pickadate({
	    //       selectMonths: true, // Creates a dropdown to control month
	    //       selectYears: 15     // Creates a dropdown of 15 years to control year
	    //     });
	    // }
	    NotesItemComponent.prototype.ngOnDestroy = function () {
	        clearInterval(this._scheduleTimeEvaluator);
	    };
	    NotesItemComponent.prototype.cloneNote = function () {
	        this._backupNote = new note_model_1.Note(this.note.Title, this.note.Category, this.note.Priority, this.note.Content, this.note.OwnerId, this.note.ScheduleTime, this.note.Id);
	    };
	    NotesItemComponent.prototype.delete = function () {
	        this.onDeleteNote.emit(this.note);
	    };
	    // A way better implementation than using the previous 
	    // implementation with ngAfterViewChecked.
	    NotesItemComponent.prototype.edit = function () {
	        var _this = this;
	        setTimeout(function () {
	            _this.$(_this._elRef.nativeElement)
	                .find("#schedule").pickadate({
	                selectMonths: true,
	                selectYears: 15 // Creates a dropdown of 15 years to control year
	            });
	            _this.$(_this._elRef.nativeElement)
	                .find("#schedule")
	                .pickadate("picker")
	                .set("select", _this.note.ScheduleTime);
	        }, 0);
	        this.isEditable = true;
	    };
	    NotesItemComponent.prototype.submit = function () {
	        var scheduleText = this.$(this._elRef.nativeElement)
	            .find("#schedule").val();
	        // Creating a date based on the pickdate element selection or 
	        // the default current creation time.
	        var scheduleTime;
	        if (scheduleText) {
	            scheduleTime = new Date(scheduleText).getTime();
	        }
	        else {
	            scheduleTime = new Date().getTime();
	        }
	        this.note.ScheduleTime = scheduleTime;
	        this.cloneNote();
	        this.onEditNote.emit(this.note);
	        // Parsing epoch time to human readable value.
	        var scheduleDate = new Date(this.note.ScheduleTime);
	        this.scheduleTimeString = scheduleDate.toDateString();
	        this.evaluateScheduleTime(scheduleDate);
	        // Save the changes on UI and close the editing form.
	        this.isEditable = false;
	    };
	    NotesItemComponent.prototype.resetChanges = function () {
	        this.note.Title = this._backupNote.Title;
	        this.note.Category = this._backupNote.Category;
	        this.note.Priority = this._backupNote.Priority;
	        this.note.Content = this._backupNote.Content;
	        this.note.OwnerId = this._backupNote.OwnerId;
	        this.note.ScheduleTime = this._backupNote.ScheduleTime;
	        this.note.Id = this._backupNote.Id;
	        // Parsing epoch time to human readable value.
	        var scheduleTime = new Date(this.note.ScheduleTime);
	        this.scheduleTimeString = scheduleTime.toDateString();
	        // Restarting datepicker value.
	        this.$(this._elRef.nativeElement)
	            .find("#schedule")
	            .pickadate("picker")
	            .set("select", this.note.ScheduleTime);
	    };
	    NotesItemComponent.prototype.cancelEditMode = function () {
	        this.resetChanges();
	        this.isEditable = false;
	    };
	    NotesItemComponent.prototype.addAnchors = function (content) {
	        return this._autoLinker.setAnchors(content);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof note_model_1.Note !== 'undefined' && note_model_1.Note) === 'function' && _a) || Object)
	    ], NotesItemComponent.prototype, "note", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], NotesItemComponent.prototype, "onDeleteNote", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
	    ], NotesItemComponent.prototype, "onEditNote", void 0);
	    NotesItemComponent = __decorate([
	        core_1.Component({
	            selector: "notes-item",
	            styles: ["\n  div span {\n    color: #263238;\n  }  \n  div p {\n    color: #546e7a;\n  }\n  .ng-valid[required] {\n    border-bottom: 1px solid #42A948; /* green */\n  }\n  .ng-invalid {\n    border-bottom: 1px solid #a94442; /* red */\n  }\n  .ontime {\n    color: green;\n  } \n  .nearschedule {\n    color: red;\n  }\n  .red {\n    color: red;\n  }\n  .small-text {\n    font-size: 10px;\n  }\n  #contentDisplayer {\n    white-space: pre-wrap;\n  }\n  "],
	            template: "\n  <div *ngIf=\"!isEditable\" class=\"card lime lighten-5\">\n    <div class=\"card-content\">\n      <span class=\"card-title\">{{ note.Title }}</span>\n      <p id=\"contentDisplayer\" [innerHTML]=\"addAnchors(note.Content)\">\n      </p>\n      <br />  \n      <p>Category: {{ note.Category }}</p>\n      <p>Priority: {{ note.Priority }}</p>\n      <p>Schedule Time: \n        <span [ngStyle]=\"{'color': scheduleColor}\">\n          <strong> {{ scheduleTimeString }}</strong>\n        </span>\n      </p>\n    </div> \n    <div class=\"card-action lime lighten-5\">\n      <input type=\"button\" class=\"btn-flat\" style=\"color:black;\" value=\"Edit\" (click)=\"edit()\" />\n      <input type=\"button\" class=\"btn-flat\" style=\"color:black;\" value=\"To reminder\" />\n      <input type=\"button\" class=\"btn-flat\" style=\"color:black;\" value=\"Delete\" (click)=\"delete()\" />\n    </div>\n  </div>\n\n  <div *ngIf=\"isEditable\" class=\"card lime lighten-5 z-depth-4\">\n    <div class=\"card-content row\" style=\"background-color:white;\">\n      <!-- This should work, but currently is not, it might be an angular2 issue -->\n      <!--<form class=\"col s12\" (ngSubmit)=\"submit()\" #noteForm=\"ngForm\">-->\n      <form class=\"col s12\" #noteForm=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"title\" type=\"text\" class=\"validate\" required\n                   [(ngModel)]=\"note.Title\" name=\"title\"\n                   #title=\"ngModel\">  \n            <label class=\"active\" for=\"title\" data-error=\"invalid\" data-success=\"valid\">Title</label>\n            <div [hidden]=\"title.valid\" \n                class=\"alert alert-danger\">\n              <sup style=\"color:red;\">Title is required</sup>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <textarea id=\"content\" class=\"materialize-textarea\"\n                      [(ngModel)]=\"note.Content\" name=\"content\"></textarea>\n            <label class=\"active\" for=\"content\">Content</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12 m6\">\n            <input id=\"category\" type=\"text\" class=\"validate\" required\n                  [(ngModel)]=\"note.Category\" name=\"category\"\n                  #category=\"ngModel\">\n            <label class=\"active\" for=\"category\" data-error=\"invalid\" data-success=\"valid\">Category</label>\n            <div [hidden]=\"category.valid\" \n                class=\"alert alert-danger\">\n              <sup style=\"color:red;\">Category is required</sup>\n            </div>\n          </div>\n\n          <div class=\"input-field col s12 m6\">\n            <input id=\"priority\" type=\"number\" class=\"validate\" required\n                  [(ngModel)]=\"note.Priority\" name=\"priority\"\n                  #priority=\"ngModel\">\n            <label class=\"active\" for=\"priority\" data-error=\"invalid\" data-success=\"valid\">Priority</label>\n            <div [hidden]=\"priority.valid\" \n                class=\"alert alert-danger\">\n              <sup style=\"color:red;\">Priority is required</sup>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12 m6\">\n            <input id=\"schedule\" type=\"date\" class=\"datepicker\">\n            <label for=\"schedule\">Schedule</label>\n          </div>\n        </div>\n      </form>\n    </div> \n    <div class=\"card-action blue-grey lighten-2\">\n      <!--<input class=\"btn-flat\" type=\"submit\" style=\"color:white;\" [disabled]=\"!noteForm.form.valid\" value=\"Save\" />-->\n      <input class=\"btn-flat\" type=\"button\" style=\"color:white;\" [disabled]=\"!noteForm.form.valid\" \n             value=\"Save\" (click)=\"submit()\" />\n      <input class=\"btn-flat\" type=\"button\" style=\"color:white;\" value=\"Reset\" (click)=\"resetChanges()\" />\n      <input class=\"btn-flat\" type=\"button\" style=\"color:white;\" value=\"Cancel\" (click)=\"cancelEditMode()\" />\n    </div>\n  </div>\n  "
	        }),
	        __param(2, core_1.Inject("$")), 
	        __metadata('design:paramtypes', [(typeof (_d = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _d) || Object, (typeof (_e = typeof auto_linker_service_1.AutoLinkerService !== 'undefined' && auto_linker_service_1.AutoLinkerService) === 'function' && _e) || Object, Object])
	    ], NotesItemComponent);
	    return NotesItemComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.NotesItemComponent = NotesItemComponent;


/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var NotesHelpComponent = (function () {
	    function NotesHelpComponent() {
	    }
	    NotesHelpComponent.prototype.ngOnInit = function () {
	    };
	    NotesHelpComponent = __decorate([
	        core_1.Component({
	            selector: "notes-help",
	            styles: ["\n  .content {\n    padding: 20px;\n  }\n  "],
	            template: "\n  <div class=\"blue-grey lighten-4 z-depth-1\">\n    <br />\n    <h3 class=\"center-align\">Notes Help Section</h3>\n    <div class=\"content\">\n      Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, \n      iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.\n    </div>\n    <br />\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NotesHelpComponent);
	    return NotesHelpComponent;
	}());
	exports.NotesHelpComponent = NotesHelpComponent;


/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var notes_filter_item_component_1 = __webpack_require__(459);
	var NotesManagerComponent = (function () {
	    function NotesManagerComponent(_elRef, $) {
	        this._elRef = _elRef;
	        this.$ = $;
	        this._isAddNoteSectionEnabled = true;
	        this._isFilterNoteSectionEnabled = true;
	        this.onOpenAddNoteSection = new core_1.EventEmitter();
	        this.onOpenFilterNoteSection = new core_1.EventEmitter();
	        this.onSendSearchString = new core_1.EventEmitter();
	    }
	    // Disabling native click event so that anchor element 
	    // is not able to navigate to "#" 
	    NotesManagerComponent.prototype.ngOnInit = function () {
	        this.$(this._elRef.nativeElement)
	            .find("a").click(function () { return false; });
	    };
	    NotesManagerComponent.prototype.openAddNoteSection = function () {
	        this.onOpenAddNoteSection.emit(this._isAddNoteSectionEnabled);
	    };
	    NotesManagerComponent.prototype.openFilterNoteSection = function () {
	        this.onOpenFilterNoteSection.emit(this._isFilterNoteSectionEnabled);
	    };
	    // Sending search for all notes (default).
	    NotesManagerComponent.prototype.sendSearchString = function () {
	        var searchStringEventArgs = new notes_filter_item_component_1.SearchStringEventArgs();
	        searchStringEventArgs.searchString = "";
	        searchStringEventArgs.filterType = "Title";
	        this.onSendSearchString.emit(searchStringEventArgs);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], NotesManagerComponent.prototype, "onOpenAddNoteSection", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], NotesManagerComponent.prototype, "onOpenFilterNoteSection", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
	    ], NotesManagerComponent.prototype, "onSendSearchString", void 0);
	    NotesManagerComponent = __decorate([
	        core_1.Component({
	            selector: 'notes-manager',
	            styles: ["  \n  div a {\n    color:#546e7a;\n  }  \n  "],
	            template: "\n  <div class=\"collection z-depth-1\">\n    <a href=\"#\" class=\"collection-item waves-effect waves-teal\" \n       (click)=\"openAddNoteSection()\">Add note</a>\n    <a href=\"#\" class=\"collection-item waves-effect waves-teal\"\n       (click)=\"sendSearchString()\">Show all</a>\n    <a href=\"#\" class=\"collection-item waves-effect waves-teal\"\n       (click)=\"openFilterNoteSection()\">Filter notes</a>\n  </div>\n  "
	        }),
	        __param(1, core_1.Inject("$")), 
	        __metadata('design:paramtypes', [(typeof (_d = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _d) || Object, Object])
	    ], NotesManagerComponent);
	    return NotesManagerComponent;
	    var _a, _b, _c, _d;
	}());
	exports.NotesManagerComponent = NotesManagerComponent;


/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var NotesFilterItemComponent = (function () {
	    function NotesFilterItemComponent() {
	        this.onSendSearchString = new core_1.EventEmitter();
	        this.searchString = "";
	    }
	    NotesFilterItemComponent.prototype.ngOnInit = function () {
	    };
	    NotesFilterItemComponent.prototype.sendSearchString = function (searchString) {
	        var searchStringEventArgs = new SearchStringEventArgs();
	        searchStringEventArgs.searchString = searchString;
	        searchStringEventArgs.filterType = this.filterType;
	        this.onSendSearchString.emit(searchStringEventArgs);
	        this.reset();
	    };
	    NotesFilterItemComponent.prototype.reset = function () {
	        this.searchString = "";
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NotesFilterItemComponent.prototype, "filterType", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], NotesFilterItemComponent.prototype, "onSendSearchString", void 0);
	    NotesFilterItemComponent = __decorate([
	        core_1.Component({
	            selector: "notes-filter-item",
	            styles: ["\n  .btn-flat {\n    width: 100px;\n  }\n  "],
	            template: "\n  <div class=\"row\">\n    <div class=\"input-field col s12 m12\">\n      <input id=\"item\" type=\"text\" class=\"\" required\n             [(ngModel)]=\"searchString\" name=\"item\"\n             #item=\"ngModel\">  \n      <label for=\"item\"> \n        Filter by {{ filterType }}\n      </label>\n    </div>\n    <div class=\"center-btn col s12 m12\">\n      <input type=\"button\" class=\"btn-flat\" value=\"Search\"\n             [disabled]=\"!item.valid\" \n             (click)=\"sendSearchString(item.value)\" />    \n      <input type=\"button\" class=\"btn-flat\" value=\"Reset\"\n             [disabled]=\"!item.valid\" \n             (click)=\"reset()\" />  \n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NotesFilterItemComponent);
	    return NotesFilterItemComponent;
	    var _a;
	}());
	exports.NotesFilterItemComponent = NotesFilterItemComponent;
	var SearchStringEventArgs = (function () {
	    function SearchStringEventArgs() {
	    }
	    return SearchStringEventArgs;
	}());
	exports.SearchStringEventArgs = SearchStringEventArgs;


/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var NotesFilterContainerComponent = (function () {
	    function NotesFilterContainerComponent() {
	        this.onCloseFilterNoteSection = new core_1.EventEmitter();
	        this.onSendSearchString = new core_1.EventEmitter();
	        this._isFilterNoteSectionEnabled = false;
	    }
	    NotesFilterContainerComponent.prototype.ngOnInit = function () {
	    };
	    NotesFilterContainerComponent.prototype.closeNotesFilterSection = function () {
	        this.onCloseFilterNoteSection.emit(this._isFilterNoteSectionEnabled);
	    };
	    NotesFilterContainerComponent.prototype.sendSearchString = function (searchStringEventArgs) {
	        this.onSendSearchString.emit(searchStringEventArgs);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], NotesFilterContainerComponent.prototype, "onCloseFilterNoteSection", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], NotesFilterContainerComponent.prototype, "onSendSearchString", void 0);
	    NotesFilterContainerComponent = __decorate([
	        core_1.Component({
	            selector: "notes-filter-container",
	            styles: ["\n  div.blue-grey {\n    padding: 20px;\n  }\n  "],
	            template: "\n  <div class=\"blue-grey lighten-4 z-depth-1\">\n    <notes-filter-item [filterType]=\"'Title'\"\n                       (onSendSearchString)=\"sendSearchString($event)\">\n    </notes-filter-item>\n\n    <br />\n\n    <notes-filter-item [filterType]=\"'Category'\"\n                       (onSendSearchString)=\"sendSearchString($event)\">\n    </notes-filter-item>\n\n    <br />\n\n    <notes-filter-item [filterType]=\"'Priority'\"\n                       (onSendSearchString)=\"sendSearchString($event)\">\n    </notes-filter-item>\n\n    <br />\n\n    <notes-filter-item [filterType]=\"'Content'\"\n                       (onSendSearchString)=\"sendSearchString($event)\">\n    </notes-filter-item>\n\n    <br />\n    \n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <input class=\"btn blue-grey lighten-2 right\" type=\"button\" value=\"Close\" \n               (click)=\"closeNotesFilterSection()\" />\n      </div>\n    </div>\n\n    <br />\n  </div> \n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NotesFilterContainerComponent);
	    return NotesFilterContainerComponent;
	    var _a, _b;
	}());
	exports.NotesFilterContainerComponent = NotesFilterContainerComponent;


/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(462));
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * @module
	 * @description
	 * This module is used for handling user input, by defining and building a {@link FormGroup} that
	 * consists of
	 * {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl} objects can then
	 * be used
	 * to read information
	 * from the form DOM elements.
	 *
	 * Forms providers are not included in default providers; you must import these providers
	 * explicitly.
	 */
	var directives_1 = __webpack_require__(463);
	exports.FORM_DIRECTIVES = directives_1.FORM_DIRECTIVES;
	exports.REACTIVE_FORM_DIRECTIVES = directives_1.REACTIVE_FORM_DIRECTIVES;
	var abstract_control_directive_1 = __webpack_require__(474);
	exports.AbstractControlDirective = abstract_control_directive_1.AbstractControlDirective;
	var abstract_form_group_directive_1 = __webpack_require__(487);
	exports.AbstractFormGroupDirective = abstract_form_group_directive_1.AbstractFormGroupDirective;
	var checkbox_value_accessor_1 = __webpack_require__(464);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_1.CheckboxControlValueAccessor;
	var control_container_1 = __webpack_require__(485);
	exports.ControlContainer = control_container_1.ControlContainer;
	var control_value_accessor_1 = __webpack_require__(465);
	exports.NG_VALUE_ACCESSOR = control_value_accessor_1.NG_VALUE_ACCESSOR;
	var default_value_accessor_1 = __webpack_require__(466);
	exports.DefaultValueAccessor = default_value_accessor_1.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(469);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_1 = __webpack_require__(468);
	exports.NgControlStatus = ng_control_status_1.NgControlStatus;
	var ng_form_1 = __webpack_require__(475);
	exports.NgForm = ng_form_1.NgForm;
	var ng_model_1 = __webpack_require__(486);
	exports.NgModel = ng_model_1.NgModel;
	var ng_model_group_1 = __webpack_require__(488);
	exports.NgModelGroup = ng_model_group_1.NgModelGroup;
	var form_control_directive_1 = __webpack_require__(491);
	exports.FormControlDirective = form_control_directive_1.FormControlDirective;
	var form_control_name_1 = __webpack_require__(492);
	exports.FormControlName = form_control_name_1.FormControlName;
	var form_group_directive_1 = __webpack_require__(494);
	exports.FormGroupDirective = form_group_directive_1.FormGroupDirective;
	var form_group_name_1 = __webpack_require__(495);
	exports.FormArrayName = form_group_name_1.FormArrayName;
	var form_group_name_2 = __webpack_require__(495);
	exports.FormGroupName = form_group_name_2.FormGroupName;
	var select_control_value_accessor_1 = __webpack_require__(483);
	exports.NgSelectOption = select_control_value_accessor_1.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_1.SelectControlValueAccessor;
	var select_multiple_control_value_accessor_1 = __webpack_require__(484);
	exports.SelectMultipleControlValueAccessor = select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor;
	var validators_1 = __webpack_require__(496);
	exports.MaxLengthValidator = validators_1.MaxLengthValidator;
	exports.MinLengthValidator = validators_1.MinLengthValidator;
	exports.PatternValidator = validators_1.PatternValidator;
	exports.RequiredValidator = validators_1.RequiredValidator;
	var form_builder_1 = __webpack_require__(497);
	exports.FormBuilder = form_builder_1.FormBuilder;
	var model_1 = __webpack_require__(477);
	exports.AbstractControl = model_1.AbstractControl;
	exports.FormArray = model_1.FormArray;
	exports.FormControl = model_1.FormControl;
	exports.FormGroup = model_1.FormGroup;
	var validators_2 = __webpack_require__(479);
	exports.NG_ASYNC_VALIDATORS = validators_2.NG_ASYNC_VALIDATORS;
	exports.NG_VALIDATORS = validators_2.NG_VALIDATORS;
	exports.Validators = validators_2.Validators;
	__export(__webpack_require__(498));
	//# sourceMappingURL=forms.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var checkbox_value_accessor_1 = __webpack_require__(464);
	var default_value_accessor_1 = __webpack_require__(466);
	var ng_control_status_1 = __webpack_require__(468);
	var ng_form_1 = __webpack_require__(475);
	var ng_model_1 = __webpack_require__(486);
	var ng_model_group_1 = __webpack_require__(488);
	var number_value_accessor_1 = __webpack_require__(481);
	var radio_control_value_accessor_1 = __webpack_require__(482);
	var form_control_directive_1 = __webpack_require__(491);
	var form_control_name_1 = __webpack_require__(492);
	var form_group_directive_1 = __webpack_require__(494);
	var form_group_name_1 = __webpack_require__(495);
	var select_control_value_accessor_1 = __webpack_require__(483);
	var select_multiple_control_value_accessor_1 = __webpack_require__(484);
	var validators_1 = __webpack_require__(496);
	var checkbox_value_accessor_2 = __webpack_require__(464);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_2.CheckboxControlValueAccessor;
	var default_value_accessor_2 = __webpack_require__(466);
	exports.DefaultValueAccessor = default_value_accessor_2.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(469);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_2 = __webpack_require__(468);
	exports.NgControlStatus = ng_control_status_2.NgControlStatus;
	var ng_form_2 = __webpack_require__(475);
	exports.NgForm = ng_form_2.NgForm;
	var ng_model_2 = __webpack_require__(486);
	exports.NgModel = ng_model_2.NgModel;
	var ng_model_group_2 = __webpack_require__(488);
	exports.NgModelGroup = ng_model_group_2.NgModelGroup;
	var number_value_accessor_2 = __webpack_require__(481);
	exports.NumberValueAccessor = number_value_accessor_2.NumberValueAccessor;
	var radio_control_value_accessor_2 = __webpack_require__(482);
	exports.RadioControlValueAccessor = radio_control_value_accessor_2.RadioControlValueAccessor;
	var form_control_directive_2 = __webpack_require__(491);
	exports.FormControlDirective = form_control_directive_2.FormControlDirective;
	var form_control_name_2 = __webpack_require__(492);
	exports.FormControlName = form_control_name_2.FormControlName;
	var form_group_directive_2 = __webpack_require__(494);
	exports.FormGroupDirective = form_group_directive_2.FormGroupDirective;
	var form_group_name_2 = __webpack_require__(495);
	exports.FormArrayName = form_group_name_2.FormArrayName;
	exports.FormGroupName = form_group_name_2.FormGroupName;
	var select_control_value_accessor_2 = __webpack_require__(483);
	exports.NgSelectOption = select_control_value_accessor_2.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_2.SelectControlValueAccessor;
	var select_multiple_control_value_accessor_2 = __webpack_require__(484);
	exports.NgSelectMultipleOption = select_multiple_control_value_accessor_2.NgSelectMultipleOption;
	exports.SelectMultipleControlValueAccessor = select_multiple_control_value_accessor_2.SelectMultipleControlValueAccessor;
	var validators_2 = __webpack_require__(496);
	exports.MaxLengthValidator = validators_2.MaxLengthValidator;
	exports.MinLengthValidator = validators_2.MinLengthValidator;
	exports.PatternValidator = validators_2.PatternValidator;
	exports.RequiredValidator = validators_2.RequiredValidator;
	exports.SHARED_FORM_DIRECTIVES = [
	    select_control_value_accessor_1.NgSelectOption, select_multiple_control_value_accessor_1.NgSelectMultipleOption, default_value_accessor_1.DefaultValueAccessor, number_value_accessor_1.NumberValueAccessor,
	    checkbox_value_accessor_1.CheckboxControlValueAccessor, select_control_value_accessor_1.SelectControlValueAccessor, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor,
	    radio_control_value_accessor_1.RadioControlValueAccessor, ng_control_status_1.NgControlStatus, validators_1.RequiredValidator, validators_1.MinLengthValidator,
	    validators_1.MaxLengthValidator, validators_1.PatternValidator
	];
	exports.TEMPLATE_DRIVEN_DIRECTIVES = [ng_model_1.NgModel, ng_model_group_1.NgModelGroup, ng_form_1.NgForm];
	exports.REACTIVE_DRIVEN_DIRECTIVES = [form_control_directive_1.FormControlDirective, form_group_directive_1.FormGroupDirective, form_control_name_1.FormControlName, form_group_name_1.FormGroupName, form_group_name_1.FormArrayName];
	/**
	 *
	 * A list of all the form directives used as part of a `@Component` annotation.
	 *
	 *  This is a shorthand for importing them each individually.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'my-app',
	 *   directives: [FORM_DIRECTIVES]
	 * })
	 * class MyApp {}
	 * ```
	 * @experimental
	 */
	exports.FORM_DIRECTIVES = [exports.TEMPLATE_DRIVEN_DIRECTIVES, exports.SHARED_FORM_DIRECTIVES];
	/**
	 * @experimental
	 */
	exports.REACTIVE_FORM_DIRECTIVES = [exports.REACTIVE_DRIVEN_DIRECTIVES, exports.SHARED_FORM_DIRECTIVES];
	var InternalFormsSharedModule = (function () {
	    function InternalFormsSharedModule() {
	    }
	    /** @nocollapse */
	    InternalFormsSharedModule.decorators = [
	        { type: core_1.NgModule, args: [{ declarations: exports.SHARED_FORM_DIRECTIVES, exports: exports.SHARED_FORM_DIRECTIVES },] },
	    ];
	    return InternalFormsSharedModule;
	}());
	exports.InternalFormsSharedModule = InternalFormsSharedModule;
	//# sourceMappingURL=directives.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var control_value_accessor_1 = __webpack_require__(465);
	exports.CHECKBOX_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return CheckboxControlValueAccessor; }),
	    multi: true
	};
	var CheckboxControlValueAccessor = (function () {
	    function CheckboxControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	    };
	    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    CheckboxControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                    providers: [exports.CHECKBOX_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    CheckboxControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return CheckboxControlValueAccessor;
	}());
	exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	//# sourceMappingURL=checkbox_value_accessor.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	/**
	 * Used to provide a {@link ControlValueAccessor} for form controls.
	 *
	 * See {@link DefaultValueAccessor} for how to implement one.
	 * @experimental
	 */
	exports.NG_VALUE_ACCESSOR = new core_1.OpaqueToken('NgValueAccessor');
	//# sourceMappingURL=control_value_accessor.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(467);
	var control_value_accessor_1 = __webpack_require__(465);
	exports.DEFAULT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return DefaultValueAccessor; }),
	    multi: true
	};
	var DefaultValueAccessor = (function () {
	    function DefaultValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    DefaultValueAccessor.prototype.writeValue = function (value) {
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    DefaultValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                    // TODO: vsavkin replace the above selector with the one below it once
	                    // https://github.com/angular/angular/issues/3011 is implemented
	                    // selector: '[ngControl],[ngModel],[ngFormControl]',
	                    host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.DEFAULT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    DefaultValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return DefaultValueAccessor;
	}());
	exports.DefaultValueAccessor = DefaultValueAccessor;
	//# sourceMappingURL=default_value_accessor.js.map

/***/ },

/***/ 467:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	/**
	 * Runtime representation a type that a Component or other object is instances of.
	 *
	 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
	 * the `MyCustomComponent` constructor function.
	 *
	 * @stable
	 */
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === 'boolean';
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === 'number';
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === 'string';
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    // allow any Promise/A+ compliant thenable.
	    // It's up to the caller to ensure that obj.then conforms to the spec
	    return isPresent(obj) && isFunction(obj.then);
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf('\n');
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(''); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError('Invalid integer literal when parsing ' + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    FunctionWrapper.bind = function (fn, scope) { return fn.bind(scope); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === 'function' || typeof o === 'object');
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	function escapeRegExp(s) {
	    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	}
	exports.escapeRegExp = escapeRegExp;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(467);
	var ng_control_1 = __webpack_require__(469);
	var NgControlStatus = (function () {
	    function NgControlStatus(cd) {
	        this._cd = cd;
	    }
	    Object.defineProperty(NgControlStatus.prototype, "ngClassUntouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.untouched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassTouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.touched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassPristine", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.pristine : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassDirty", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.dirty : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassValid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassInvalid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? !this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @nocollapse */
	    NgControlStatus.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formControlName],[ngModel],[formControl]',
	                    host: {
	                        '[class.ng-untouched]': 'ngClassUntouched',
	                        '[class.ng-touched]': 'ngClassTouched',
	                        '[class.ng-pristine]': 'ngClassPristine',
	                        '[class.ng-dirty]': 'ngClassDirty',
	                        '[class.ng-valid]': 'ngClassValid',
	                        '[class.ng-invalid]': 'ngClassInvalid'
	                    }
	                },] },
	    ];
	    /** @nocollapse */
	    NgControlStatus.ctorParameters = [
	        { type: ng_control_1.NgControl, decorators: [{ type: core_1.Self },] },
	    ];
	    return NgControlStatus;
	}());
	exports.NgControlStatus = NgControlStatus;
	//# sourceMappingURL=ng_control_status.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(470);
	var abstract_control_directive_1 = __webpack_require__(474);
	/**
	 * A base class that all control directive extend.
	 * It binds a {@link Control} object to a DOM element.
	 *
	 * Used internally by Angular forms.
	 *
	 * @experimental
	 */
	var NgControl = (function (_super) {
	    __extends(NgControl, _super);
	    function NgControl() {
	        _super.apply(this, arguments);
	        this.name = null;
	        this.valueAccessor = null;
	    }
	    Object.defineProperty(NgControl.prototype, "validator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControl.prototype, "asyncValidator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return NgControl;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.NgControl = NgControl;
	//# sourceMappingURL=ng_control.js.map

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(471);
	var exception_handler_1 = __webpack_require__(472);
	var exception_handler_2 = __webpack_require__(472);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	/**
	 * @stable
	 */
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = '--'; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 * @stable
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException /** TODO #9100 */, _originalStack /** TODO #9100 */, _context /** TODO #9100 */) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },

/***/ 471:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * A base class for the WrappedException that can be used to identify
	 * a WrappedException from ExceptionHandler without adding circular
	 * dependency.
	 */
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var base_wrapped_exception_1 = __webpack_require__(471);
	var collection_1 = __webpack_require__(473);
	var lang_1 = __webpack_require__(467);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [{provide: ExceptionHandler, useClass: MyExceptionHandler}])
	 *
	 * ```
	 * @stable
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join('\n');
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError('STACKTRACE:');
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError('ORIGINAL STACKTRACE:');
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError('ERROR CONTEXT:');
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join('\n\n-----async gap-----\n') :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var lang_1 = __webpack_require__(467);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).map(function (k) { return map[k]; });
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
	            var k = _a[_i];
	            callback(map[k], k);
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	            var k = _a[_i];
	            m[k] = m1[k];
	        }
	        for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	            var k = _c[_b];
	            m[k] = m2[k];
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(470);
	var lang_1 = __webpack_require__(467);
	/**
	 * Base class for control directives.
	 *
	 * Only used internally in the forms module.
	 *
	 * @experimental
	 */
	var AbstractControlDirective = (function () {
	    function AbstractControlDirective() {
	    }
	    Object.defineProperty(AbstractControlDirective.prototype, "control", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "value", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.value : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.valid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.invalid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pending : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.errors : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pristine : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.dirty : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.touched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.untouched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.statusChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.valueChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "path", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControlDirective.prototype.reset = function (value) {
	        if (value === void 0) { value = undefined; }
	        if (lang_1.isPresent(this.control))
	            this.control.reset(value);
	    };
	    return AbstractControlDirective;
	}());
	exports.AbstractControlDirective = AbstractControlDirective;
	//# sourceMappingURL=abstract_control_directive.js.map

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(476);
	var collection_1 = __webpack_require__(473);
	var lang_1 = __webpack_require__(467);
	var model_1 = __webpack_require__(477);
	var validators_1 = __webpack_require__(479);
	var control_container_1 = __webpack_require__(485);
	var shared_1 = __webpack_require__(478);
	exports.formDirectiveProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgForm; })
	};
	var resolvedPromise = Promise.resolve(null);
	var NgForm = (function (_super) {
	    __extends(NgForm, _super);
	    function NgForm(validators, asyncValidators) {
	        _super.call(this);
	        this._submitted = false;
	        this.ngSubmit = new async_1.EventEmitter();
	        this.form = new model_1.FormGroup({}, null, shared_1.composeValidators(validators), shared_1.composeAsyncValidators(asyncValidators));
	    }
	    Object.defineProperty(NgForm.prototype, "submitted", {
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "controls", {
	        get: function () { return this.form.controls; },
	        enumerable: true,
	        configurable: true
	    });
	    NgForm.prototype.addControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            dir._control = container.registerControl(dir.name, dir.control);
	            shared_1.setUpControl(dir.control, dir);
	            dir.control.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	    NgForm.prototype.removeControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.addFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            var group = new model_1.FormGroup({});
	            shared_1.setUpFormContainer(group, dir);
	            container.registerControl(dir.name, group);
	            group.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.removeFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	    NgForm.prototype.updateModel = function (dir, value) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var ctrl = _this.form.get(dir.path);
	            ctrl.setValue(value);
	        });
	    };
	    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	    NgForm.prototype.onSubmit = function () {
	        this._submitted = true;
	        this.ngSubmit.emit(null);
	        return false;
	    };
	    NgForm.prototype.onReset = function () { this.form.reset(); };
	    /** @internal */
	    NgForm.prototype._findContainer = function (path) {
	        path.pop();
	        return collection_1.ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
	    };
	    /** @nocollapse */
	    NgForm.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                    providers: [exports.formDirectiveProvider],
	                    host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                    outputs: ['ngSubmit'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    NgForm.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    return NgForm;
	}(control_container_1.ControlContainer));
	exports.NgForm = NgForm;
	//# sourceMappingURL=ng_form.js.map

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(69);
	var Observable_1 = __webpack_require__(70);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(69);
	exports.Subject = Subject_2.Subject;
	/**
	 * Use by directives and components to emit custom Events.
	 *
	 * ### Examples
	 *
	 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	 * title gets clicked:
	 *
	 * ```
	 * @Component({
	 *   selector: 'zippy',
	 *   template: `
	 *   <div class="zippy">
	 *     <div (click)="toggle()">Toggle</div>
	 *     <div [hidden]="!visible">
	 *       <ng-content></ng-content>
	 *     </div>
	 *  </div>`})
	 * export class Zippy {
	 *   visible: boolean = true;
	 *   @Output() open: EventEmitter<any> = new EventEmitter();
	 *   @Output() close: EventEmitter<any> = new EventEmitter();
	 *
	 *   toggle() {
	 *     this.visible = !this.visible;
	 *     if (this.visible) {
	 *       this.open.emit(null);
	 *     } else {
	 *       this.close.emit(null);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * The events payload can be accessed by the parameter `$event` on the components output event
	 * handler:
	 *
	 * ```
	 * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	 * ```
	 *
	 * Uses Rx.Observable but provides an adapter to make it work as specified here:
	 * https://github.com/jhusain/observable-spec
	 *
	 * Once a reference implementation of the spec is available, switch to it.
	 * @stable
	 */
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    /**
	     * Creates an instance of [EventEmitter], which depending on [isAsync],
	     * delivers events synchronously or asynchronously.
	     */
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = false; }
	        _super.call(this);
	        this.__isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                setTimeout(function () { return generatorOrNext.next(value); });
	            } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                setTimeout(function () { return generatorOrNext(value); });
	            } : function (value /** TODO #9100 */) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PromiseObservable_1 = __webpack_require__(258);
	var shared_1 = __webpack_require__(478);
	var async_1 = __webpack_require__(476);
	var collection_1 = __webpack_require__(473);
	var exceptions_1 = __webpack_require__(470);
	var lang_1 = __webpack_require__(467);
	/**
	 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	 */
	exports.VALID = 'VALID';
	/**
	 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	 */
	exports.INVALID = 'INVALID';
	/**
	 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	 * errors are not yet available for the input value.
	 */
	exports.PENDING = 'PENDING';
	function isControl(control) {
	    return control instanceof AbstractControl;
	}
	exports.isControl = isControl;
	function _find(control, path, delimiter) {
	    if (lang_1.isBlank(path))
	        return null;
	    if (!(path instanceof Array)) {
	        path = path.split(delimiter);
	    }
	    if (path instanceof Array && collection_1.ListWrapper.isEmpty(path))
	        return null;
	    return path.reduce(function (v, name) {
	        if (v instanceof FormGroup) {
	            return lang_1.isPresent(v.controls[name]) ? v.controls[name] : null;
	        }
	        else if (v instanceof FormArray) {
	            var index = name;
	            return lang_1.isPresent(v.at(index)) ? v.at(index) : null;
	        }
	        else {
	            return null;
	        }
	    }, control);
	}
	function toObservable(r) {
	    return lang_1.isPromise(r) ? PromiseObservable_1.PromiseObservable.create(r) : r;
	}
	function coerceToValidator(validator) {
	    return Array.isArray(validator) ? shared_1.composeValidators(validator) : validator;
	}
	function coerceToAsyncValidator(asyncValidator) {
	    return Array.isArray(asyncValidator) ? shared_1.composeAsyncValidators(asyncValidator) : asyncValidator;
	}
	/**
	 * @experimental
	 */
	var AbstractControl = (function () {
	    function AbstractControl(validator, asyncValidator) {
	        this.validator = validator;
	        this.asyncValidator = asyncValidator;
	        this._pristine = true;
	        this._touched = false;
	    }
	    Object.defineProperty(AbstractControl.prototype, "value", {
	        get: function () { return this._value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "status", {
	        get: function () { return this._status; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valid", {
	        get: function () { return this._status === exports.VALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "invalid", {
	        get: function () { return this._status === exports.INVALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "errors", {
	        /**
	         * Returns the errors of this control.
	         */
	        get: function () { return this._errors; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pristine", {
	        get: function () { return this._pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "dirty", {
	        get: function () { return !this.pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "touched", {
	        get: function () { return this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "untouched", {
	        get: function () { return !this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	        get: function () { return this._valueChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	        get: function () { return this._statusChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pending", {
	        get: function () { return this._status == exports.PENDING; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	        this.asyncValidator = coerceToAsyncValidator(newValidator);
	    };
	    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	    AbstractControl.prototype.setValidators = function (newValidator) {
	        this.validator = coerceToValidator(newValidator);
	    };
	    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	    AbstractControl.prototype.markAsTouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._touched = true;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsTouched({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsDirty = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._pristine = false;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsDirty({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPristine = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = true;
	        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updatePristine({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsUntouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = false;
	        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updateTouched({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPending = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._status = exports.PENDING;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsPending({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	    AbstractControl.prototype.updateValueAndValidity = function (_a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._updateValue();
	        this._errors = this._runValidator();
	        this._status = this._calculateStatus();
	        if (this._status == exports.VALID || this._status == exports.PENDING) {
	            this._runAsyncValidator(emitEvent);
	        }
	        if (emitEvent) {
	            this._valueChanges.emit(this._value);
	            this._statusChanges.emit(this._status);
	        }
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        }
	    };
	    AbstractControl.prototype._runValidator = function () {
	        return lang_1.isPresent(this.validator) ? this.validator(this) : null;
	    };
	    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	        var _this = this;
	        if (lang_1.isPresent(this.asyncValidator)) {
	            this._status = exports.PENDING;
	            this._cancelExistingSubscription();
	            var obs = toObservable(this.asyncValidator(this));
	            this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	        }
	    };
	    AbstractControl.prototype._cancelExistingSubscription = function () {
	        if (lang_1.isPresent(this._asyncValidationSubscription)) {
	            this._asyncValidationSubscription.unsubscribe();
	        }
	    };
	    /**
	     * Sets errors on a form control.
	     *
	     * This is used when validations are run not automatically, but manually by the user.
	     *
	     * Calling `setErrors` will also update the validity of the parent control.
	     *
	     * ## Usage
	     *
	     * ```
	     * var login = new FormControl("someLogin");
	     * login.setErrors({
	     *   "notUnique": true
	     * });
	     *
	     * expect(login.valid).toEqual(false);
	     * expect(login.errors).toEqual({"notUnique": true});
	     *
	     * login.updateValue("someOtherLogin");
	     *
	     * expect(login.valid).toEqual(true);
	     * ```
	     */
	    AbstractControl.prototype.setErrors = function (errors, _a) {
	        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._errors = errors;
	        this._updateControlsErrors(emitEvent);
	    };
	    /**
	     * @deprecated - use get() instead
	     */
	    AbstractControl.prototype.find = function (path) { return _find(this, path, '/'); };
	    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	    AbstractControl.prototype.getError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        var control = lang_1.isPresent(path) && !collection_1.ListWrapper.isEmpty(path) ? this.find(path) : this;
	        if (lang_1.isPresent(control) && lang_1.isPresent(control._errors)) {
	            return collection_1.StringMapWrapper.get(control._errors, errorCode);
	        }
	        else {
	            return null;
	        }
	    };
	    AbstractControl.prototype.hasError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        return lang_1.isPresent(this.getError(errorCode, path));
	    };
	    Object.defineProperty(AbstractControl.prototype, "root", {
	        get: function () {
	            var x = this;
	            while (lang_1.isPresent(x._parent)) {
	                x = x._parent;
	            }
	            return x;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	        this._status = this._calculateStatus();
	        if (emitEvent) {
	            this._statusChanges.emit(this._status);
	        }
	        if (lang_1.isPresent(this._parent)) {
	            this._parent._updateControlsErrors(emitEvent);
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._initObservables = function () {
	        this._valueChanges = new async_1.EventEmitter();
	        this._statusChanges = new async_1.EventEmitter();
	    };
	    AbstractControl.prototype._calculateStatus = function () {
	        if (lang_1.isPresent(this._errors))
	            return exports.INVALID;
	        if (this._anyControlsHaveStatus(exports.PENDING))
	            return exports.PENDING;
	        if (this._anyControlsHaveStatus(exports.INVALID))
	            return exports.INVALID;
	        return exports.VALID;
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	        return this._anyControls(function (control) { return control.status == status; });
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsDirty = function () {
	        return this._anyControls(function (control) { return control.dirty; });
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsTouched = function () {
	        return this._anyControls(function (control) { return control.touched; });
	    };
	    /** @internal */
	    AbstractControl.prototype._updatePristine = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = !this._anyControlsDirty();
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updatePristine({ onlySelf: onlySelf });
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._updateTouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = this._anyControlsTouched();
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updateTouched({ onlySelf: onlySelf });
	        }
	    };
	    return AbstractControl;
	}());
	exports.AbstractControl = AbstractControl;
	/**
	 * Defines a part of a form that cannot be divided into other controls. `FormControl`s have values
	 * and
	 * validation state, which is determined by an optional validation function.
	 *
	 * `FormControl` is one of the three fundamental building blocks used to define forms in Angular,
	 * along
	 * with {@link FormGroup} and {@link FormArray}.
	 *
	 * ## Usage
	 *
	 * By default, a `FormControl` is created for every `<input>` or other form component.
	 * With {@link FormControlDirective} or {@link FormGroupDirective} an existing {@link FormControl}
	 * can be bound to a DOM element instead. This `FormControl` can be configured with a custom
	 * validation function.
	 *
	 * @experimental
	 */
	var FormControl = (function (_super) {
	    __extends(FormControl, _super);
	    function FormControl(value, validator, asyncValidator) {
	        if (value === void 0) { value = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	        /** @internal */
	        this._onChange = [];
	        this._value = value;
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        this._initObservables();
	    }
	    /**
	     * Set the value of the form control to `value`.
	     *
	     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	     * and not its parent component. If `emitEvent` is `true`, this change will cause a
	     * `valueChanges` event on the `FormControl` to be emitted. Both of these options default to
	     * `false`.
	     *
	     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	     * specified.
	     *
	     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	     */
	    FormControl.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	        emitModelToViewChange = lang_1.isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	        emitViewToModelChange = lang_1.isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
	        this._value = value;
	        if (this._onChange.length && emitModelToViewChange) {
	            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
	        }
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * This function is functionally the same as updateValue() at this level.  It exists for
	     * symmetry with patchValue() on FormGroups and FormArrays, where it does behave differently.
	     */
	    FormControl.prototype.patchValue = function (value, options) {
	        if (options === void 0) { options = {}; }
	        this.setValue(value, options);
	    };
	    /**
	     * @deprecated Please use setValue() instead.
	     */
	    FormControl.prototype.updateValue = function (value, options) {
	        if (options === void 0) { options = {}; }
	        this.setValue(value, options);
	    };
	    FormControl.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = null; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this.markAsPristine({ onlySelf: onlySelf });
	        this.markAsUntouched({ onlySelf: onlySelf });
	        this.setValue(value, { onlySelf: onlySelf });
	    };
	    /**
	     * @internal
	     */
	    FormControl.prototype._updateValue = function () { };
	    /**
	     * @internal
	     */
	    FormControl.prototype._anyControls = function (condition) { return false; };
	    /**
	     * Register a listener for change events.
	     */
	    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	    /**
	     * @internal
	     */
	    FormControl.prototype._forEachChild = function (cb) { };
	    return FormControl;
	}(AbstractControl));
	exports.FormControl = FormControl;
	/**
	 * Defines a part of a form, of fixed length, that can contain other controls.
	 *
	 * A `FormGroup` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormGroup` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire group is invalid.
	 * Similarly, if a control changes its value, the entire group changes as well.
	 *
	 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormArray}. {@link FormArray} can also contain other
	 * controls, but is of variable length.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormGroup = (function (_super) {
	    __extends(FormGroup, _super);
	    function FormGroup(controls, optionals, validator, asyncValidator) {
	        if (optionals === void 0) { optionals = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._optionals = lang_1.isPresent(optionals) ? optionals : {};
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Register a control with the group's list of controls.
	     */
	    FormGroup.prototype.registerControl = function (name, control) {
	        if (this.controls[name])
	            return this.controls[name];
	        this.controls[name] = control;
	        control.setParent(this);
	        return control;
	    };
	    /**
	     * Add a control to this group.
	     */
	    FormGroup.prototype.addControl = function (name, control) {
	        this.registerControl(name, control);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove a control from this group.
	     */
	    FormGroup.prototype.removeControl = function (name) {
	        collection_1.StringMapWrapper.delete(this.controls, name);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as non-optional.
	     */
	    FormGroup.prototype.include = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, true);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as optional.
	     */
	    FormGroup.prototype.exclude = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, false);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Check whether there is a control with the given name in the group.
	     */
	    FormGroup.prototype.contains = function (controlName) {
	        var c = collection_1.StringMapWrapper.contains(this.controls, controlName);
	        return c && this._included(controlName);
	    };
	    FormGroup.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._checkAllValuesPresent(value);
	        collection_1.StringMapWrapper.forEach(value, function (newValue, name) {
	            _this._throwIfControlMissing(name);
	            _this.controls[name].setValue(newValue, { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormGroup.prototype.patchValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        collection_1.StringMapWrapper.forEach(value, function (newValue, name) {
	            if (_this.controls[name]) {
	                _this.controls[name].patchValue(newValue, { onlySelf: true });
	            }
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormGroup.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = {}; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._forEachChild(function (control, name) {
	            control.reset(value[name], { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	        this._updatePristine({ onlySelf: onlySelf });
	        this._updateTouched({ onlySelf: onlySelf });
	    };
	    /** @internal */
	    FormGroup.prototype._throwIfControlMissing = function (name) {
	        if (!Object.keys(this.controls).length) {
	            throw new exceptions_1.BaseException("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.controls[name]) {
	            throw new exceptions_1.BaseException("Cannot find form control with name: " + name + ".");
	        }
	    };
	    /** @internal */
	    FormGroup.prototype._forEachChild = function (cb) {
	        collection_1.StringMapWrapper.forEach(this.controls, cb);
	    };
	    /** @internal */
	    FormGroup.prototype._setParentForControls = function () {
	        var _this = this;
	        this._forEachChild(function (control, name) { control.setParent(_this); });
	    };
	    /** @internal */
	    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	    /** @internal */
	    FormGroup.prototype._anyControls = function (condition) {
	        var _this = this;
	        var res = false;
	        this._forEachChild(function (control, name) {
	            res = res || (_this.contains(name) && condition(control));
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._reduceValue = function () {
	        return this._reduceChildren({}, function (acc, control, name) {
	            acc[name] = control.value;
	            return acc;
	        });
	    };
	    /** @internal */
	    FormGroup.prototype._reduceChildren = function (initValue, fn) {
	        var _this = this;
	        var res = initValue;
	        this._forEachChild(function (control, name) {
	            if (_this._included(name)) {
	                res = fn(res, control, name);
	            }
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._included = function (controlName) {
	        var isOptional = collection_1.StringMapWrapper.contains(this._optionals, controlName);
	        return !isOptional || collection_1.StringMapWrapper.get(this._optionals, controlName);
	    };
	    /** @internal */
	    FormGroup.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, name) {
	            if (value[name] === undefined) {
	                throw new exceptions_1.BaseException("Must supply a value for form control with name: '" + name + "'.");
	            }
	        });
	    };
	    return FormGroup;
	}(AbstractControl));
	exports.FormGroup = FormGroup;
	/**
	 * Defines a part of a form, of variable length, that can contain other controls.
	 *
	 * A `FormArray` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormArray` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire array is invalid.
	 * Similarly, if a control changes its value, the entire array changes as well.
	 *
	 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormGroup}. {@link FormGroup} can also contain
	 * other controls, but is of fixed length.
	 *
	 * ## Adding or removing controls
	 *
	 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	 * the `FormArray` directly, as that will result in strange and unexpected behavior such
	 * as broken change detection.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormArray = (function (_super) {
	    __extends(FormArray, _super);
	    function FormArray(controls, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Get the {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.at = function (index) { return this.controls[index]; };
	    /**
	     * Insert a new {@link AbstractControl} at the end of the array.
	     */
	    FormArray.prototype.push = function (control) {
	        this.controls.push(control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Insert a new {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.insert = function (index, control) {
	        collection_1.ListWrapper.insert(this.controls, index, control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove the control at the given `index` in the array.
	     */
	    FormArray.prototype.removeAt = function (index) {
	        collection_1.ListWrapper.removeAt(this.controls, index);
	        this.updateValueAndValidity();
	    };
	    Object.defineProperty(FormArray.prototype, "length", {
	        /**
	         * Length of the control array.
	         */
	        get: function () { return this.controls.length; },
	        enumerable: true,
	        configurable: true
	    });
	    FormArray.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._checkAllValuesPresent(value);
	        value.forEach(function (newValue, index) {
	            _this._throwIfControlMissing(index);
	            _this.at(index).setValue(newValue, { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormArray.prototype.patchValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        value.forEach(function (newValue, index) {
	            if (_this.at(index)) {
	                _this.at(index).patchValue(newValue, { onlySelf: true });
	            }
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormArray.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = []; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._forEachChild(function (control, index) {
	            control.reset(value[index], { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	        this._updatePristine({ onlySelf: onlySelf });
	        this._updateTouched({ onlySelf: onlySelf });
	    };
	    /** @internal */
	    FormArray.prototype._throwIfControlMissing = function (index) {
	        if (!this.controls.length) {
	            throw new exceptions_1.BaseException("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.at(index)) {
	            throw new exceptions_1.BaseException("Cannot find form control at index " + index);
	        }
	    };
	    /** @internal */
	    FormArray.prototype._forEachChild = function (cb) {
	        this.controls.forEach(function (control, index) { cb(control, index); });
	    };
	    /** @internal */
	    FormArray.prototype._updateValue = function () { this._value = this.controls.map(function (control) { return control.value; }); };
	    /** @internal */
	    FormArray.prototype._anyControls = function (condition) {
	        return this.controls.some(function (control) { return condition(control); });
	    };
	    /** @internal */
	    FormArray.prototype._setParentForControls = function () {
	        var _this = this;
	        this._forEachChild(function (control) { control.setParent(_this); });
	    };
	    /** @internal */
	    FormArray.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, i) {
	            if (value[i] === undefined) {
	                throw new exceptions_1.BaseException("Must supply a value for form control at index: " + i + ".");
	            }
	        });
	    };
	    return FormArray;
	}(AbstractControl));
	exports.FormArray = FormArray;
	//# sourceMappingURL=model.js.map

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var collection_1 = __webpack_require__(473);
	var exceptions_1 = __webpack_require__(470);
	var lang_1 = __webpack_require__(467);
	var validators_1 = __webpack_require__(479);
	var checkbox_value_accessor_1 = __webpack_require__(464);
	var default_value_accessor_1 = __webpack_require__(466);
	var normalize_validator_1 = __webpack_require__(480);
	var number_value_accessor_1 = __webpack_require__(481);
	var radio_control_value_accessor_1 = __webpack_require__(482);
	var select_control_value_accessor_1 = __webpack_require__(483);
	var select_multiple_control_value_accessor_1 = __webpack_require__(484);
	function controlPath(name, parent) {
	    var p = collection_1.ListWrapper.clone(parent.path);
	    p.push(name);
	    return p;
	}
	exports.controlPath = controlPath;
	function setUpControl(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control with');
	    if (lang_1.isBlank(dir.valueAccessor))
	        _throwError(dir, 'No value accessor for form control with');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    dir.valueAccessor.writeValue(control.value);
	    // view -> model
	    dir.valueAccessor.registerOnChange(function (newValue) {
	        dir.viewToModelUpdate(newValue);
	        control.markAsDirty();
	        control.setValue(newValue, { emitModelToViewChange: false });
	    });
	    control.registerOnChange(function (newValue, emitModelEvent) {
	        // control -> view
	        dir.valueAccessor.writeValue(newValue);
	        // control -> ngModel
	        if (emitModelEvent)
	            dir.viewToModelUpdate(newValue);
	    });
	    // touched
	    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	}
	exports.setUpControl = setUpControl;
	function setUpFormContainer(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control with');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	}
	exports.setUpFormContainer = setUpFormContainer;
	function _throwError(dir, message) {
	    var messageEnd;
	    if (dir.path.length > 1) {
	        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	    }
	    else if (dir.path[0]) {
	        messageEnd = "name: '" + dir.path + "'";
	    }
	    else {
	        messageEnd = 'unspecified name attribute';
	    }
	    throw new exceptions_1.BaseException(message + " " + messageEnd);
	}
	function composeValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.compose(validators.map(normalize_validator_1.normalizeValidator)) : null;
	}
	exports.composeValidators = composeValidators;
	function composeAsyncValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.composeAsync(validators.map(normalize_validator_1.normalizeAsyncValidator)) :
	        null;
	}
	exports.composeAsyncValidators = composeAsyncValidators;
	function isPropertyUpdated(changes, viewModel) {
	    if (!collection_1.StringMapWrapper.contains(changes, 'model'))
	        return false;
	    var change = changes['model'];
	    if (change.isFirstChange())
	        return true;
	    return !lang_1.looseIdentical(viewModel, change.currentValue);
	}
	exports.isPropertyUpdated = isPropertyUpdated;
	// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	function selectValueAccessor(dir, valueAccessors) {
	    if (lang_1.isBlank(valueAccessors))
	        return null;
	    var defaultAccessor;
	    var builtinAccessor;
	    var customAccessor;
	    valueAccessors.forEach(function (v) {
	        if (lang_1.hasConstructor(v, default_value_accessor_1.DefaultValueAccessor)) {
	            defaultAccessor = v;
	        }
	        else if (lang_1.hasConstructor(v, checkbox_value_accessor_1.CheckboxControlValueAccessor) || lang_1.hasConstructor(v, number_value_accessor_1.NumberValueAccessor) ||
	            lang_1.hasConstructor(v, select_control_value_accessor_1.SelectControlValueAccessor) ||
	            lang_1.hasConstructor(v, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor) ||
	            lang_1.hasConstructor(v, radio_control_value_accessor_1.RadioControlValueAccessor)) {
	            if (lang_1.isPresent(builtinAccessor))
	                _throwError(dir, 'More than one built-in value accessor matches form control with');
	            builtinAccessor = v;
	        }
	        else {
	            if (lang_1.isPresent(customAccessor))
	                _throwError(dir, 'More than one custom value accessor matches form control with');
	            customAccessor = v;
	        }
	    });
	    if (lang_1.isPresent(customAccessor))
	        return customAccessor;
	    if (lang_1.isPresent(builtinAccessor))
	        return builtinAccessor;
	    if (lang_1.isPresent(defaultAccessor))
	        return defaultAccessor;
	    _throwError(dir, 'No valid value accessor for form control with');
	    return null;
	}
	exports.selectValueAccessor = selectValueAccessor;
	//# sourceMappingURL=shared.js.map

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var toPromise_1 = __webpack_require__(243);
	var collection_1 = __webpack_require__(473);
	var lang_1 = __webpack_require__(467);
	/**
	 * Providers for validators to be used for {@link FormControl}s in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * ### Example
	 *
	 * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	 * @experimental
	 */
	exports.NG_VALIDATORS = new core_1.OpaqueToken('NgValidators');
	/**
	 * Providers for asynchronous validators to be used for {@link FormControl}s
	 * in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * See {@link NG_VALIDATORS} for more details.
	 *
	 * @experimental
	 */
	exports.NG_ASYNC_VALIDATORS = new core_1.OpaqueToken('NgAsyncValidators');
	/**
	 * Provides a set of validators used by form controls.
	 *
	 * A validator is a function that processes a {@link FormControl} or collection of
	 * controls and returns a map of errors. A null map means that validation has passed.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * var loginControl = new FormControl("", Validators.required)
	 * ```
	 *
	 * @experimental
	 */
	var Validators = (function () {
	    function Validators() {
	    }
	    /**
	     * Validator that requires controls to have a non-empty value.
	     */
	    Validators.required = function (control) {
	        return lang_1.isBlank(control.value) || (lang_1.isString(control.value) && control.value == '') ?
	            { 'required': true } :
	            null;
	    };
	    /**
	     * Validator that requires controls to have a value of a minimum length.
	     */
	    Validators.minLength = function (minLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length < minLength ?
	                { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a value of a maximum length.
	     */
	    Validators.maxLength = function (maxLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length > maxLength ?
	                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires a control to match a regex to its value.
	     */
	    Validators.pattern = function (pattern) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var regex = new RegExp("^" + pattern + "$");
	            var v = control.value;
	            return regex.test(v) ? null :
	                { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
	        };
	    };
	    /**
	     * No-op validator.
	     */
	    Validators.nullValidator = function (c) { return null; };
	    /**
	     * Compose multiple validators into a single function that returns the union
	     * of the individual error maps.
	     */
	    Validators.compose = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            return _mergeErrors(_executeValidators(control, presentValidators));
	        };
	    };
	    Validators.composeAsync = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	            return Promise.all(promises).then(_mergeErrors);
	        };
	    };
	    return Validators;
	}());
	exports.Validators = Validators;
	function _convertToPromise(obj) {
	    return lang_1.isPromise(obj) ? obj : toPromise_1.toPromise.call(obj);
	}
	function _executeValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _executeAsyncValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _mergeErrors(arrayOfErrors) {
	    var res = arrayOfErrors.reduce(function (res, errors) {
	        return lang_1.isPresent(errors) ? collection_1.StringMapWrapper.merge(res, errors) : res;
	    }, {});
	    return collection_1.StringMapWrapper.isEmpty(res) ? null : res;
	}
	//# sourceMappingURL=validators.js.map

/***/ },

/***/ 480:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function normalizeValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeValidator = normalizeValidator;
	function normalizeAsyncValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeAsyncValidator = normalizeAsyncValidator;
	//# sourceMappingURL=normalize_validator.js.map

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(467);
	var control_value_accessor_1 = __webpack_require__(465);
	exports.NUMBER_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NumberValueAccessor; }),
	    multi: true
	};
	var NumberValueAccessor = (function () {
	    function NumberValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    NumberValueAccessor.prototype.writeValue = function (value) {
	        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    NumberValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : lang_1.NumberWrapper.parseFloat(value)); };
	    };
	    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    NumberValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                    host: {
	                        '(change)': 'onChange($event.target.value)',
	                        '(input)': 'onChange($event.target.value)',
	                        '(blur)': 'onTouched()'
	                    },
	                    providers: [exports.NUMBER_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    NumberValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return NumberValueAccessor;
	}());
	exports.NumberValueAccessor = NumberValueAccessor;
	//# sourceMappingURL=number_value_accessor.js.map

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(473);
	var exceptions_1 = __webpack_require__(470);
	var lang_1 = __webpack_require__(467);
	var control_value_accessor_1 = __webpack_require__(465);
	var ng_control_1 = __webpack_require__(469);
	exports.RADIO_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return RadioControlValueAccessor; }),
	    multi: true
	};
	var RadioControlRegistry = (function () {
	    function RadioControlRegistry() {
	        this._accessors = [];
	    }
	    RadioControlRegistry.prototype.add = function (control, accessor) {
	        this._accessors.push([control, accessor]);
	    };
	    RadioControlRegistry.prototype.remove = function (accessor) {
	        var indexToRemove = -1;
	        for (var i = 0; i < this._accessors.length; ++i) {
	            if (this._accessors[i][1] === accessor) {
	                indexToRemove = i;
	            }
	        }
	        collection_1.ListWrapper.removeAt(this._accessors, indexToRemove);
	    };
	    RadioControlRegistry.prototype.select = function (accessor) {
	        var _this = this;
	        this._accessors.forEach(function (c) {
	            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                c[1].fireUncheck(accessor.value);
	            }
	        });
	    };
	    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	        if (!controlPair[0].control)
	            return false;
	        return controlPair[0].control.root === accessor._control.control.root &&
	            controlPair[1].name === accessor.name;
	    };
	    /** @nocollapse */
	    RadioControlRegistry.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return RadioControlRegistry;
	}());
	exports.RadioControlRegistry = RadioControlRegistry;
	var RadioControlValueAccessor = (function () {
	    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this._registry = _registry;
	        this._injector = _injector;
	        this.onChange = function () { };
	        this.onTouched = function () { };
	    }
	    RadioControlValueAccessor.prototype.ngOnInit = function () {
	        this._control = this._injector.get(ng_control_1.NgControl);
	        this._checkName();
	        this._registry.add(this._control, this);
	    };
	    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	    RadioControlValueAccessor.prototype.writeValue = function (value) {
	        this._state = value === this.value;
	        if (lang_1.isPresent(value)) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        }
	    };
	    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this._fn = fn;
	        this.onChange = function () {
	            fn(_this.value);
	            _this._registry.select(_this);
	        };
	    };
	    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    RadioControlValueAccessor.prototype._checkName = function () {
	        if (this.name && this.formControlName && this.name !== this.formControlName) {
	            this._throwNameError();
	        }
	        if (!this.name && this.formControlName)
	            this.name = this.formControlName;
	    };
	    RadioControlValueAccessor.prototype._throwNameError = function () {
	        throw new exceptions_1.BaseException("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	    };
	    /** @nocollapse */
	    RadioControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                    providers: [exports.RADIO_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	        { type: RadioControlRegistry, },
	        { type: core_1.Injector, },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.propDecorators = {
	        'name': [{ type: core_1.Input },],
	        'formControlName': [{ type: core_1.Input },],
	        'value': [{ type: core_1.Input },],
	    };
	    return RadioControlValueAccessor;
	}());
	exports.RadioControlValueAccessor = RadioControlValueAccessor;
	//# sourceMappingURL=radio_control_value_accessor.js.map

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(473);
	var lang_1 = __webpack_require__(467);
	var control_value_accessor_1 = __webpack_require__(465);
	exports.SELECT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	var SelectControlValueAccessor = (function () {
	    function SelectControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectControlValueAccessor.prototype.writeValue = function (value) {
	        this.value = value;
	        var valueString = _buildValueString(this._getOptionId(value), value);
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	    };
	    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (valueString) {
	            _this.value = valueString;
	            fn(_this._getOptionValue(valueString));
	        };
	    };
	    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id), value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var value = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(value) ? value : valueString;
	    };
	    /** @nocollapse */
	    SelectControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return SelectControlValueAccessor;
	}());
	exports.SelectControlValueAccessor = SelectControlValueAccessor;
	var NgSelectOption = (function () {
	    function NgSelectOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select))
	            this.id = this._select._registerOption();
	    }
	    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._select._optionMap.set(this.id, value);
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectOption.prototype, "value", {
	        set: function (value) {
	            this._setElementValue(value);
	            if (lang_1.isPresent(this._select))
	                this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    NgSelectOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectOption;
	}());
	exports.NgSelectOption = NgSelectOption;
	//# sourceMappingURL=select_control_value_accessor.js.map

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(473);
	var lang_1 = __webpack_require__(467);
	var control_value_accessor_1 = __webpack_require__(465);
	exports.SELECT_MULTIPLE_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (lang_1.isString(value))
	        value = "'" + value + "'";
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	/** Mock interface for HTMLCollection */
	var HTMLCollection = (function () {
	    function HTMLCollection() {
	    }
	    return HTMLCollection;
	}());
	var SelectMultipleControlValueAccessor = (function () {
	    function SelectMultipleControlValueAccessor() {
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	        var _this = this;
	        this.value = value;
	        if (value == null)
	            return;
	        var values = value;
	        // convert values to ids
	        var ids = values.map(function (v) { return _this._getOptionId(v); });
	        this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	    };
	    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (_) {
	            var selected = [];
	            if (_.hasOwnProperty('selectedOptions')) {
	                var options = _.selectedOptions;
	                for (var i = 0; i < options.length; i++) {
	                    var opt = options.item(i);
	                    var val = _this._getOptionValue(opt.value);
	                    selected.push(val);
	                }
	            }
	            else {
	                var options = _.options;
	                for (var i = 0; i < options.length; i++) {
	                    var opt = options.item(i);
	                    if (opt.selected) {
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	            }
	            fn(selected);
	        };
	    };
	    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	        var id = (this._idCounter++).toString();
	        this._optionMap.set(id, value);
	        return id;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id)._value, value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var opt = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(opt) ? opt._value : valueString;
	    };
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                    host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_MULTIPLE_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.ctorParameters = [];
	    return SelectMultipleControlValueAccessor;
	}());
	exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	var NgSelectMultipleOption = (function () {
	    function NgSelectMultipleOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select)) {
	            this.id = this._select._registerOption(this);
	        }
	    }
	    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._value = value;
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	        set: function (value) {
	            if (lang_1.isPresent(this._select)) {
	                this._value = value;
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            }
	            else {
	                this._setElementValue(value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectMultipleOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    /** @internal */
	    NgSelectMultipleOption.prototype._setSelected = function (selected) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	    };
	    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectMultipleOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectMultipleControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectMultipleOption;
	}());
	exports.NgSelectMultipleOption = NgSelectMultipleOption;
	exports.SELECT_DIRECTIVES = [SelectMultipleControlValueAccessor, NgSelectMultipleOption];
	//# sourceMappingURL=select_multiple_control_value_accessor.js.map

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_control_directive_1 = __webpack_require__(474);
	/**
	 * A directive that contains multiple {@link NgControl}s.
	 *
	 * Only used by the forms module.
	 *
	 * @experimental
	 */
	var ControlContainer = (function (_super) {
	    __extends(ControlContainer, _super);
	    function ControlContainer() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(ControlContainer.prototype, "formDirective", {
	        /**
	         * Get the form to which this container belongs.
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ControlContainer.prototype, "path", {
	        /**
	         * Get the path to this container.
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return ControlContainer;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.ControlContainer = ControlContainer;
	//# sourceMappingURL=control_container.js.map

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(476);
	var model_1 = __webpack_require__(477);
	var validators_1 = __webpack_require__(479);
	var abstract_form_group_directive_1 = __webpack_require__(487);
	var control_container_1 = __webpack_require__(485);
	var control_value_accessor_1 = __webpack_require__(465);
	var ng_control_1 = __webpack_require__(469);
	var ng_form_1 = __webpack_require__(475);
	var ng_model_group_1 = __webpack_require__(488);
	var shared_1 = __webpack_require__(478);
	var template_driven_errors_1 = __webpack_require__(489);
	exports.formControlBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return NgModel; })
	};
	var resolvedPromise = Promise.resolve(null);
	var NgModel = (function (_super) {
	    __extends(NgModel, _super);
	    function NgModel(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        /** @internal */
	        this._control = new model_1.FormControl();
	        /** @internal */
	        this._registered = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    NgModel.prototype.ngOnChanges = function (changes) {
	        this._checkForErrors();
	        if (!this._registered)
	            this._setUpControl();
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this._updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	    Object.defineProperty(NgModel.prototype, "control", {
	        get: function () { return this._control; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "path", {
	        get: function () {
	            return this._parent ? shared_1.controlPath(this.name, this._parent) : [this.name];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "formDirective", {
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgModel.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    NgModel.prototype._setUpControl = function () {
	        this._isStandalone() ? this._setUpStandalone() :
	            this.formDirective.addControl(this);
	        this._registered = true;
	    };
	    NgModel.prototype._isStandalone = function () {
	        return !this._parent || (this.options && this.options.standalone);
	    };
	    NgModel.prototype._setUpStandalone = function () {
	        shared_1.setUpControl(this._control, this);
	        this._control.updateValueAndValidity({ emitEvent: false });
	    };
	    NgModel.prototype._checkForErrors = function () {
	        if (!this._isStandalone()) {
	            this._checkParentType();
	        }
	        this._checkName();
	    };
	    NgModel.prototype._checkParentType = function () {
	        if (!(this._parent instanceof ng_model_group_1.NgModelGroup) &&
	            this._parent instanceof abstract_form_group_directive_1.AbstractFormGroupDirective) {
	            template_driven_errors_1.TemplateDrivenErrors.formGroupNameException();
	        }
	        else if (!(this._parent instanceof ng_model_group_1.NgModelGroup) && !(this._parent instanceof ng_form_1.NgForm)) {
	            template_driven_errors_1.TemplateDrivenErrors.modelParentException();
	        }
	    };
	    NgModel.prototype._checkName = function () {
	        if (this.options && this.options.name)
	            this.name = this.options.name;
	        if (!this._isStandalone() && !this.name) {
	            template_driven_errors_1.TemplateDrivenErrors.missingNameException();
	        }
	    };
	    NgModel.prototype._updateValue = function (value) {
	        var _this = this;
	        resolvedPromise.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	    };
	    /** @nocollapse */
	    NgModel.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngModel]:not([formControlName]):not([formControl])',
	                    providers: [exports.formControlBinding],
	                    exportAs: 'ngModel'
	                },] },
	    ];
	    /** @nocollapse */
	    NgModel.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    NgModel.propDecorators = {
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'name': [{ type: core_1.Input },],
	        'options': [{ type: core_1.Input, args: ['ngModelOptions',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return NgModel;
	}(ng_control_1.NgControl));
	exports.NgModel = NgModel;
	//# sourceMappingURL=ng_model.js.map

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var control_container_1 = __webpack_require__(485);
	var shared_1 = __webpack_require__(478);
	/**
	 * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	 *
	 * @experimental
	 */
	var AbstractFormGroupDirective = (function (_super) {
	    __extends(AbstractFormGroupDirective, _super);
	    function AbstractFormGroupDirective() {
	        _super.apply(this, arguments);
	    }
	    AbstractFormGroupDirective.prototype.ngOnInit = function () {
	        this._checkParentType();
	        this.formDirective.addFormGroup(this);
	    };
	    AbstractFormGroupDirective.prototype.ngOnDestroy = function () { this.formDirective.removeFormGroup(this); };
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	        /**
	         * Get the {@link FormGroup} backing this binding.
	         */
	        get: function () { return this.formDirective.getFormGroup(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	        /**
	         * Get the path to this control group.
	         */
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	        /**
	         * Get the {@link Form} to which this group belongs.
	         */
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    AbstractFormGroupDirective.prototype._checkParentType = function () { };
	    return AbstractFormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	//# sourceMappingURL=abstract_form_group_directive.js.map

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var validators_1 = __webpack_require__(479);
	var abstract_form_group_directive_1 = __webpack_require__(487);
	var control_container_1 = __webpack_require__(485);
	var ng_form_1 = __webpack_require__(475);
	var template_driven_errors_1 = __webpack_require__(489);
	exports.modelGroupProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgModelGroup; })
	};
	var NgModelGroup = (function (_super) {
	    __extends(NgModelGroup, _super);
	    function NgModelGroup(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @internal */
	    NgModelGroup.prototype._checkParentType = function () {
	        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof ng_form_1.NgForm)) {
	            template_driven_errors_1.TemplateDrivenErrors.modelGroupParentException();
	        }
	    };
	    /** @nocollapse */
	    NgModelGroup.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngModelGroup]', providers: [exports.modelGroupProvider], exportAs: 'ngModelGroup' },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['ngModelGroup',] },],
	    };
	    return NgModelGroup;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.NgModelGroup = NgModelGroup;
	//# sourceMappingURL=ng_model_group.js.map

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(470);
	var error_examples_1 = __webpack_require__(490);
	var TemplateDrivenErrors = (function () {
	    function TemplateDrivenErrors() {
	    }
	    TemplateDrivenErrors.modelParentException = function () {
	        throw new exceptions_1.BaseException("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + error_examples_1.FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.ngModelWithFormGroup);
	    };
	    TemplateDrivenErrors.formGroupNameException = function () {
	        throw new exceptions_1.BaseException("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + error_examples_1.FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    TemplateDrivenErrors.missingNameException = function () {
	        throw new exceptions_1.BaseException("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	    };
	    TemplateDrivenErrors.modelGroupParentException = function () {
	        throw new exceptions_1.BaseException("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + error_examples_1.FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    return TemplateDrivenErrors;
	}());
	exports.TemplateDrivenErrors = TemplateDrivenErrors;
	//# sourceMappingURL=template_driven_errors.js.map

/***/ },

/***/ 490:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	exports.FormErrorExamples = {
	    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	};
	//# sourceMappingURL=error_examples.js.map

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(476);
	var collection_1 = __webpack_require__(473);
	var validators_1 = __webpack_require__(479);
	var control_value_accessor_1 = __webpack_require__(465);
	var ng_control_1 = __webpack_require__(469);
	var shared_1 = __webpack_require__(478);
	exports.formControlBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlDirective; })
	};
	var FormControlDirective = (function (_super) {
	    __extends(FormControlDirective, _super);
	    function FormControlDirective(_validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlDirective.prototype.ngOnChanges = function (changes) {
	        if (this._isControlChanged(changes)) {
	            shared_1.setUpControl(this.form, this);
	            this.form.updateValueAndValidity({ emitEvent: false });
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.form.setValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    Object.defineProperty(FormControlDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    FormControlDirective.prototype._isControlChanged = function (changes) {
	        return collection_1.StringMapWrapper.contains(changes, 'form');
	    };
	    /** @nocollapse */
	    FormControlDirective.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControl]', providers: [exports.formControlBinding], exportAs: 'ngForm' },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formControl',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlDirective;
	}(ng_control_1.NgControl));
	exports.FormControlDirective = FormControlDirective;
	//# sourceMappingURL=form_control_directive.js.map

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(476);
	var validators_1 = __webpack_require__(479);
	var abstract_form_group_directive_1 = __webpack_require__(487);
	var control_container_1 = __webpack_require__(485);
	var control_value_accessor_1 = __webpack_require__(465);
	var ng_control_1 = __webpack_require__(469);
	var reactive_errors_1 = __webpack_require__(493);
	var shared_1 = __webpack_require__(478);
	var form_group_directive_1 = __webpack_require__(494);
	var form_group_name_1 = __webpack_require__(495);
	exports.controlNameBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlName; })
	};
	var FormControlName = (function (_super) {
	    __extends(FormControlName, _super);
	    function FormControlName(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._added = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlName.prototype.ngOnChanges = function (changes) {
	        if (!this._added) {
	            this._checkParentType();
	            this.formDirective.addControl(this);
	            this._added = true;
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.viewModel = this.model;
	            this.formDirective.updateModel(this, this.model);
	        }
	    };
	    FormControlName.prototype.ngOnDestroy = function () { this.formDirective.removeControl(this); };
	    FormControlName.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    Object.defineProperty(FormControlName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "control", {
	        get: function () { return this.formDirective.getControl(this); },
	        enumerable: true,
	        configurable: true
	    });
	    FormControlName.prototype._checkParentType = function () {
	        if (!(this._parent instanceof form_group_name_1.FormGroupName) &&
	            this._parent instanceof abstract_form_group_directive_1.AbstractFormGroupDirective) {
	            reactive_errors_1.ReactiveErrors.ngModelGroupException();
	        }
	        else if (!(this._parent instanceof form_group_name_1.FormGroupName) &&
	            !(this._parent instanceof form_group_directive_1.FormGroupDirective) &&
	            !(this._parent instanceof form_group_name_1.FormArrayName)) {
	            reactive_errors_1.ReactiveErrors.controlParentException();
	        }
	    };
	    /** @nocollapse */
	    FormControlName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControlName]', providers: [exports.controlNameBinding] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formControlName',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlName;
	}(ng_control_1.NgControl));
	exports.FormControlName = FormControlName;
	//# sourceMappingURL=form_control_name.js.map

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(470);
	var error_examples_1 = __webpack_require__(490);
	var ReactiveErrors = (function () {
	    function ReactiveErrors() {
	    }
	    ReactiveErrors.controlParentException = function () {
	        throw new exceptions_1.BaseException("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.formControlName);
	    };
	    ReactiveErrors.ngModelGroupException = function () {
	        throw new exceptions_1.BaseException("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + error_examples_1.FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    ReactiveErrors.missingFormException = function () {
	        throw new exceptions_1.BaseException("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + error_examples_1.FormErrorExamples.formControlName);
	    };
	    ReactiveErrors.groupParentException = function () {
	        throw new exceptions_1.BaseException("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.formGroupName);
	    };
	    ReactiveErrors.arrayParentException = function () {
	        throw new exceptions_1.BaseException("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + error_examples_1.FormErrorExamples.formArrayName);
	    };
	    return ReactiveErrors;
	}());
	exports.ReactiveErrors = ReactiveErrors;
	//# sourceMappingURL=reactive_errors.js.map

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var async_1 = __webpack_require__(476);
	var collection_1 = __webpack_require__(473);
	var lang_1 = __webpack_require__(467);
	var validators_1 = __webpack_require__(479);
	var control_container_1 = __webpack_require__(485);
	var reactive_errors_1 = __webpack_require__(493);
	var shared_1 = __webpack_require__(478);
	exports.formDirectiveProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupDirective; })
	};
	var FormGroupDirective = (function (_super) {
	    __extends(FormGroupDirective, _super);
	    function FormGroupDirective(_validators, _asyncValidators) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._submitted = false;
	        this.directives = [];
	        this.form = null;
	        this.ngSubmit = new async_1.EventEmitter();
	    }
	    FormGroupDirective.prototype.ngOnChanges = function (changes) {
	        this._checkFormPresent();
	        if (collection_1.StringMapWrapper.contains(changes, 'form')) {
	            var sync = shared_1.composeValidators(this._validators);
	            this.form.validator = validators_1.Validators.compose([this.form.validator, sync]);
	            var async = shared_1.composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = validators_1.Validators.composeAsync([this.form.asyncValidator, async]);
	            this.form.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        this._updateDomValue();
	    };
	    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    FormGroupDirective.prototype.addControl = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpControl(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	        this.directives.push(dir);
	    };
	    FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.removeControl = function (dir) { collection_1.ListWrapper.remove(this.directives, dir); };
	    FormGroupDirective.prototype.addFormGroup = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	    FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.addFormArray = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormArray = function (dir) { };
	    FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.updateModel = function (dir, value) {
	        var ctrl = this.form.get(dir.path);
	        ctrl.setValue(value);
	    };
	    FormGroupDirective.prototype.onSubmit = function () {
	        this._submitted = true;
	        this.ngSubmit.emit(null);
	        return false;
	    };
	    FormGroupDirective.prototype.onReset = function () { this.form.reset(); };
	    /** @internal */
	    FormGroupDirective.prototype._updateDomValue = function () {
	        var _this = this;
	        this.directives.forEach(function (dir) {
	            var ctrl = _this.form.get(dir.path);
	            dir.valueAccessor.writeValue(ctrl.value);
	        });
	    };
	    FormGroupDirective.prototype._checkFormPresent = function () {
	        if (lang_1.isBlank(this.form)) {
	            reactive_errors_1.ReactiveErrors.missingFormException();
	        }
	    };
	    /** @nocollapse */
	    FormGroupDirective.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formGroup]',
	                    providers: [exports.formDirectiveProvider],
	                    host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formGroup',] },],
	        'ngSubmit': [{ type: core_1.Output },],
	    };
	    return FormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.FormGroupDirective = FormGroupDirective;
	//# sourceMappingURL=form_group_directive.js.map

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(11);
	var validators_1 = __webpack_require__(479);
	var abstract_form_group_directive_1 = __webpack_require__(487);
	var control_container_1 = __webpack_require__(485);
	var reactive_errors_1 = __webpack_require__(493);
	var shared_1 = __webpack_require__(478);
	var form_group_directive_1 = __webpack_require__(494);
	exports.formGroupNameProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupName; })
	};
	var FormGroupName = (function (_super) {
	    __extends(FormGroupName, _super);
	    function FormGroupName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @internal */
	    FormGroupName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            reactive_errors_1.ReactiveErrors.groupParentException();
	        }
	    };
	    /** @nocollapse */
	    FormGroupName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formGroupName]', providers: [exports.formGroupNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formGroupName',] },],
	    };
	    return FormGroupName;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.FormGroupName = FormGroupName;
	exports.formArrayNameProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormArrayName; })
	};
	var FormArrayName = (function (_super) {
	    __extends(FormArrayName, _super);
	    function FormArrayName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    FormArrayName.prototype.ngOnInit = function () {
	        this._checkParentType();
	        this.formDirective.addFormArray(this);
	    };
	    FormArrayName.prototype.ngOnDestroy = function () { this.formDirective.removeFormArray(this); };
	    Object.defineProperty(FormArrayName.prototype, "control", {
	        get: function () { return this.formDirective.getFormArray(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    FormArrayName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            reactive_errors_1.ReactiveErrors.arrayParentException();
	        }
	    };
	    /** @nocollapse */
	    FormArrayName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formArrayName]', providers: [exports.formArrayNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formArrayName',] },],
	    };
	    return FormArrayName;
	}(control_container_1.ControlContainer));
	exports.FormArrayName = FormArrayName;
	function _hasInvalidParent(parent) {
	    return !(parent instanceof FormGroupName) && !(parent instanceof form_group_directive_1.FormGroupDirective) &&
	        !(parent instanceof FormArrayName);
	}
	//# sourceMappingURL=form_group_name.js.map

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var lang_1 = __webpack_require__(467);
	var validators_1 = __webpack_require__(479);
	exports.REQUIRED = validators_1.Validators.required;
	exports.REQUIRED_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useValue: exports.REQUIRED,
	    multi: true
	};
	var RequiredValidator = (function () {
	    function RequiredValidator() {
	    }
	    /** @nocollapse */
	    RequiredValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                    providers: [exports.REQUIRED_VALIDATOR]
	                },] },
	    ];
	    return RequiredValidator;
	}());
	exports.RequiredValidator = RequiredValidator;
	/**
	 * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='min'}
	 */
	exports.MIN_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MinLengthValidator; }),
	    multi: true
	};
	var MinLengthValidator = (function () {
	    function MinLengthValidator(minLength) {
	        this._validator = validators_1.Validators.minLength(lang_1.NumberWrapper.parseInt(minLength, 10));
	    }
	    MinLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MinLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                    providers: [exports.MIN_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MinLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['minlength',] },] },
	    ];
	    return MinLengthValidator;
	}());
	exports.MinLengthValidator = MinLengthValidator;
	/**
	 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='max'}
	 */
	exports.MAX_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MaxLengthValidator; }),
	    multi: true
	};
	var MaxLengthValidator = (function () {
	    function MaxLengthValidator(maxLength) {
	        this._validator = validators_1.Validators.maxLength(lang_1.NumberWrapper.parseInt(maxLength, 10));
	    }
	    MaxLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MaxLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                    providers: [exports.MAX_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MaxLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['maxlength',] },] },
	    ];
	    return MaxLengthValidator;
	}());
	exports.MaxLengthValidator = MaxLengthValidator;
	exports.PATTERN_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return PatternValidator; }),
	    multi: true
	};
	var PatternValidator = (function () {
	    function PatternValidator(pattern) {
	        this._validator = validators_1.Validators.pattern(pattern);
	    }
	    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    PatternValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                    providers: [exports.PATTERN_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    PatternValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['pattern',] },] },
	    ];
	    return PatternValidator;
	}());
	exports.PatternValidator = PatternValidator;
	//# sourceMappingURL=validators.js.map

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var collection_1 = __webpack_require__(473);
	var lang_1 = __webpack_require__(467);
	var model_1 = __webpack_require__(477);
	var FormBuilder = (function () {
	    function FormBuilder() {
	    }
	    /**
	     * Construct a new {@link FormGroup} with the given map of configuration.
	     * Valid keys for the `extra` parameter map are `optionals` and `validator`.
	     *
	     * See the {@link FormGroup} constructor for more details.
	     */
	    FormBuilder.prototype.group = function (controlsConfig, extra) {
	        if (extra === void 0) { extra = null; }
	        var controls = this._reduceControls(controlsConfig);
	        var optionals = (lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'optionals') : null);
	        var validator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'validator') : null;
	        var asyncValidator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'asyncValidator') : null;
	        return new model_1.FormGroup(controls, optionals, validator, asyncValidator);
	    };
	    /**
	     * Construct a new {@link FormControl} with the given `value`,`validator`, and `asyncValidator`.
	     */
	    FormBuilder.prototype.control = function (value, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        return new model_1.FormControl(value, validator, asyncValidator);
	    };
	    /**
	     * Construct an array of {@link FormControl}s from the given `controlsConfig` array of
	     * configuration, with the given optional `validator` and `asyncValidator`.
	     */
	    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	        var _this = this;
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	        return new model_1.FormArray(controls, validator, asyncValidator);
	    };
	    /** @internal */
	    FormBuilder.prototype._reduceControls = function (controlsConfig) {
	        var _this = this;
	        var controls = {};
	        collection_1.StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	            controls[controlName] = _this._createControl(controlConfig);
	        });
	        return controls;
	    };
	    /** @internal */
	    FormBuilder.prototype._createControl = function (controlConfig) {
	        if (controlConfig instanceof model_1.FormControl || controlConfig instanceof model_1.FormGroup ||
	            controlConfig instanceof model_1.FormArray) {
	            return controlConfig;
	        }
	        else if (lang_1.isArray(controlConfig)) {
	            var value = controlConfig[0];
	            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	            return this.control(value, validator, asyncValidator);
	        }
	        else {
	            return this.control(controlConfig);
	        }
	    };
	    /** @nocollapse */
	    FormBuilder.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return FormBuilder;
	}());
	exports.FormBuilder = FormBuilder;
	//# sourceMappingURL=form_builder.js.map

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(11);
	var directives_1 = __webpack_require__(463);
	var radio_control_value_accessor_1 = __webpack_require__(482);
	var form_builder_1 = __webpack_require__(497);
	/**
	 * Shorthand set of providers used for building Angular forms.
	 * @experimental
	 */
	exports.FORM_PROVIDERS = [radio_control_value_accessor_1.RadioControlRegistry];
	/**
	 * Shorthand set of providers used for building reactive Angular forms.
	 * @experimental
	 */
	exports.REACTIVE_FORM_PROVIDERS = [form_builder_1.FormBuilder, radio_control_value_accessor_1.RadioControlRegistry];
	var FormsModule = (function () {
	    function FormsModule() {
	    }
	    /** @nocollapse */
	    FormsModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    declarations: directives_1.TEMPLATE_DRIVEN_DIRECTIVES,
	                    providers: [exports.FORM_PROVIDERS],
	                    exports: [directives_1.InternalFormsSharedModule, directives_1.TEMPLATE_DRIVEN_DIRECTIVES]
	                },] },
	    ];
	    return FormsModule;
	}());
	exports.FormsModule = FormsModule;
	var ReactiveFormsModule = (function () {
	    function ReactiveFormsModule() {
	    }
	    /** @nocollapse */
	    ReactiveFormsModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    declarations: [directives_1.REACTIVE_DRIVEN_DIRECTIVES],
	                    providers: [exports.REACTIVE_FORM_PROVIDERS],
	                    exports: [directives_1.InternalFormsSharedModule, directives_1.REACTIVE_DRIVEN_DIRECTIVES]
	                },] },
	    ];
	    return ReactiveFormsModule;
	}());
	exports.ReactiveFormsModule = ReactiveFormsModule;
	/**
	 * @deprecated
	 */
	function disableDeprecatedForms() {
	    return [];
	}
	exports.disableDeprecatedForms = disableDeprecatedForms;
	/**
	 * @deprecated
	 */
	function provideForms() {
	    return [
	        { provide: core_1.PLATFORM_DIRECTIVES, useValue: directives_1.FORM_DIRECTIVES, multi: true }, exports.REACTIVE_FORM_PROVIDERS
	    ];
	}
	exports.provideForms = provideForms;
	//# sourceMappingURL=form_providers.js.map

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var common_1 = __webpack_require__(205);
	var contacts_routing_1 = __webpack_require__(500);
	var contacts_home_component_1 = __webpack_require__(501);
	var contacts_container_component_1 = __webpack_require__(502);
	var contacts_pagination_component_1 = __webpack_require__(505);
	var contacts_pagination_item_component_1 = __webpack_require__(506);
	var contacts_add_item_component_1 = __webpack_require__(507);
	var contacts_list_component_1 = __webpack_require__(508);
	var contacts_item_component_1 = __webpack_require__(509);
	var contacts_help_component_1 = __webpack_require__(510);
	var contacts_manager_component_1 = __webpack_require__(511);
	var contacts_filter_container_component_1 = __webpack_require__(513);
	var contacts_filter_item_component_1 = __webpack_require__(512);
	var contacts_service_1 = __webpack_require__(503);
	var forms_1 = __webpack_require__(461);
	var ContactsModule = (function () {
	    function ContactsModule() {
	    }
	    ContactsModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                forms_1.FormsModule,
	                common_1.CommonModule,
	                contacts_routing_1.routing
	            ],
	            declarations: [
	                contacts_home_component_1.ContactsHomeComponent,
	                contacts_container_component_1.ContactsContainerComponent,
	                contacts_pagination_component_1.ContactsPaginationComponent,
	                contacts_pagination_item_component_1.ContactsPaginationItemComponent,
	                contacts_add_item_component_1.ContactsAddItemComponent,
	                contacts_list_component_1.ContactsListComponent,
	                contacts_item_component_1.ContactsItemComponent,
	                contacts_help_component_1.ContactsHelpComponent,
	                contacts_manager_component_1.ContactsManagerComponent,
	                contacts_filter_container_component_1.ContactsFilterContainerComponent,
	                contacts_filter_item_component_1.ContactsFilterItemComponent
	            ],
	            providers: [
	                contacts_service_1.ContactsService
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactsModule);
	    return ContactsModule;
	}());
	exports.ContactsModule = ContactsModule;


/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(375);
	var contacts_home_component_1 = __webpack_require__(501);
	exports.routes = [
	    { path: "contacts", component: contacts_home_component_1.ContactsHomeComponent }
	];
	exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var ContactsHomeComponent = (function () {
	    // Sending search for all contacts (default).
	    function ContactsHomeComponent() {
	        this.searchString = "";
	        this.filterType = "Name";
	    }
	    ContactsHomeComponent.prototype.setIsAddContactSectionEnabled = function (isAddContactSectionEnabled) {
	        this.isAddContactSectionEnabled = isAddContactSectionEnabled;
	    };
	    ContactsHomeComponent.prototype.setIsFilterContactSectionEnabled = function (isFilterContactSectionEnabled) {
	        this.isFilterContactSectionEnabled = isFilterContactSectionEnabled;
	    };
	    ContactsHomeComponent.prototype.toContactsContainer = function (searchStringEventArgs) {
	        this.searchString = searchStringEventArgs.searchString;
	        this.filterType = searchStringEventArgs.filterType;
	    };
	    ContactsHomeComponent = __decorate([
	        core_1.Component({
	            selector: 'contacts-home',
	            styles: ["\n\n  "],
	            template: "\n  <div class=\"col s12 m4\">\n    <div class=\"col s12 offset-m1\">\n      <contacts-help></contacts-help>\n\n      <!-- The Event onOpenAddContactSection is generated when contacts-manager component is clicked -->\n      <!-- $event is a boolean -->\n      <contacts-manager (onOpenAddContactSection)=\"setIsAddContactSectionEnabled($event)\"\n                        (onOpenFilterContactSection)=\"setIsFilterContactSectionEnabled($event)\"\n                        (onSendSearchString)=\"toContactsContainer($event)\">               \n      </contacts-manager>\n\n      <contacts-filter-container *ngIf=\"isFilterContactSectionEnabled\"\n                                 (onCloseFilterContactsSection)=\"setIsFilterContactSectionEnabled($event)\"\n                                 (onSendSearchString)=\"toContactsContainer($event)\">                   \n      </contacts-filter-container>\n    </div>\n  </div>\n\n  <div class=\"col s12 m8\">\n    <div class=\"col s12\">\n      <contacts-container [isAddContactSectionEnabled]=\"isAddContactSectionEnabled\"\n                          [searchString]=\"searchString\"\n                          [filterType]=\"filterType\"\n                          (onCloseAddContactSection)=\"setIsAddContactSectionEnabled($event)\">                   \n      </contacts-container>\n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactsHomeComponent);
	    return ContactsHomeComponent;
	}());
	exports.ContactsHomeComponent = ContactsHomeComponent;


/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var contacts_service_1 = __webpack_require__(503);
	var contact_model_1 = __webpack_require__(504);
	var ContactsContainerComponent = (function () {
	    function ContactsContainerComponent(_contactsService, _elRef, $) {
	        this._contactsService = _contactsService;
	        this._elRef = _elRef;
	        this.$ = $;
	        this.onCloseAddContactSection = new core_1.EventEmitter();
	        this.contactToDelete = new contact_model_1.Contact("", "", "", "", "", "");
	        this._isAddContactSectionDisabled = false;
	        this.contactCount = 0;
	    }
	    ContactsContainerComponent.prototype.ngOnInit = function () {
	        this.getContactsCount();
	    };
	    // ngOnChanges manage if a filtering has been made.
	    ContactsContainerComponent.prototype.ngOnChanges = function () {
	        var _this = this;
	        // Controlling to not trigger on first ngOnChanges call.
	        if (this.searchString !== undefined) {
	            this._contactsService
	                .getContactsCountForFilter(this.searchString, this.filterType)
	                .subscribe(function (res) {
	                _this.contactCount = res;
	                // TODO: Subscribe to error and display it.
	            });
	        }
	    };
	    ContactsContainerComponent.prototype.getContactsCount = function () {
	        var _this = this;
	        this._contactsService
	            .getContactsCount()
	            .subscribe(function (res) {
	            _this.contactCount = res;
	            // TODO: Subscribe to error and display it.
	        });
	    };
	    ContactsContainerComponent.prototype.getContactsWithSkipAndFilter = function (pageClickedEventArgs) {
	        var _this = this;
	        this._contactsService
	            .getContactsWithSkipAndFilter(pageClickedEventArgs)
	            .subscribe(function (res) {
	            _this.contacts = res;
	            // TODO: Subscribe to error and display it.
	        });
	    };
	    ContactsContainerComponent.prototype.handleAddContactEvent = function (addContactArgs) {
	        var _this = this;
	        // Send event to contacts-home component 
	        if (addContactArgs.submitted || addContactArgs.canceled) {
	            this.onCloseAddContactSection.emit(this._isAddContactSectionDisabled);
	        }
	        // Adding to API.
	        if (addContactArgs.contact) {
	            this._contactsService
	                .addContact(addContactArgs.contact)
	                .subscribe(function (contact) {
	                _this.contacts.unshift(contact);
	                // TODO: Subscribe to error and display it.
	            });
	        }
	    };
	    ContactsContainerComponent.prototype.openDeleteContactConfirmation = function (contact) {
	        this.contactToDelete = contact;
	        this.$(this._elRef.nativeElement)
	            .find("#deleteConfirmationModal").openModal();
	    };
	    ContactsContainerComponent.prototype.deleteContact = function () {
	        // Deleting from API.
	        this._contactsService
	            .deleteContact(this.contactToDelete)
	            .subscribe(function (res) {
	            console.log("The result of deleteContact is:");
	            console.log(res);
	            // TODO: Subscribe to error and display it.
	        });
	        // Deleting from UI. 
	        console.log(this.contactToDelete);
	        var indexToDelete;
	        for (var index in this.contacts) {
	            if (this.contacts[index].Id === this.contactToDelete.Id) {
	                indexToDelete = index;
	                break;
	            }
	        }
	        this.contacts.splice(indexToDelete, 1);
	        console.log(this.contacts);
	    };
	    ContactsContainerComponent.prototype.editContact = function (contact) {
	        // Editing from API, UI has been already updated.
	        this._contactsService
	            .editContact(contact)
	            .subscribe(function (res) {
	            console.log("The result of editContact is:");
	            console.log(res);
	            // TODO: Subscribe to error and display it.
	        });
	    };
	    ContactsContainerComponent.prototype.closeDeleteConfirmationMessage = function () {
	        this.$(this._elRef.nativeElement)
	            .find("#deleteConfirmationModal").closeModal();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ContactsContainerComponent.prototype, "isAddContactSectionEnabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ContactsContainerComponent.prototype, "searchString", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ContactsContainerComponent.prototype, "filterType", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], ContactsContainerComponent.prototype, "onCloseAddContactSection", void 0);
	    ContactsContainerComponent = __decorate([
	        core_1.Component({
	            selector: "contacts-container",
	            template: "\n  <contacts-add-item *ngIf=\"isAddContactSectionEnabled\"\n                     (onAddContact)=\"handleAddContactEvent($event)\">\n  </contacts-add-item>\n  \n  <contacts-pagination [contactCount]=\"contactCount\"\n                       [searchString]=\"searchString\"\n                       [filterType]=\"filterType\"\n                       (onPageClicked)=\"getContactsWithSkipAndFilter($event)\">\n  </contacts-pagination>\n\n  <contacts-list [contacts]=\"contacts\"\n                 (onDeleteContact)=\"openDeleteContactConfirmation($event)\"\n                 (onEditContact)=\"editContact($event)\">\n  </contacts-list>\n\n  <!-- Used for delete confirmation -->\n  <div id=\"deleteConfirmationModal\" class=\"modal\">\n    <div class=\"modal-content\">\n      <h4>Delete confirmation</h4>\n      <p>The contact with Name: {{ contactToDelete.Name }} will be deleted</p>\n    </div>\n    <div class=\"modal-footer\">\n      <a (click)=\"closeDeleteConfirmationMessage()\"\n         class=\"modal-action modal-close waves-effect waves-green btn btn-flat\">Cancel</a>\n      <a (click)=\"deleteContact()\"\n         class=\"modal-action modal-close waves-effect waves-green btn btn-flat\">Yes</a>\n    </div>\n  </div>\n  "
	        }),
	        __param(2, core_1.Inject("$")), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof contacts_service_1.ContactsService !== 'undefined' && contacts_service_1.ContactsService) === 'function' && _b) || Object, (typeof (_c = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _c) || Object, Object])
	    ], ContactsContainerComponent);
	    return ContactsContainerComponent;
	    var _a, _b, _c;
	}());
	exports.ContactsContainerComponent = ContactsContainerComponent;


/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var Observable_1 = __webpack_require__(70);
	var http_extended_service_1 = __webpack_require__(370);
	var ContactsService = (function () {
	    function ContactsService(_http, _baseUrl) {
	        this._http = _http;
	        this._baseUrl = _baseUrl;
	    }
	    // TODO: return Observable<OdataResponse>
	    ContactsService.prototype.getContacts = function () {
	        return this._http
	            .get(this._baseUrl + "odata/Contacts")
	            .map(function (res) {
	            var body = res.json();
	            // The body has context, count and value
	            return body || {};
	        })
	            .catch(this.handleError);
	    };
	    ContactsService.prototype.getContactsWithSkip = function (skip) {
	        return this._http
	            .get(this._baseUrl + ("odata/Contacts?$skip=" + skip))
	            .map(function (res) {
	            var body = res.json();
	            // The body has context and value
	            return body.value || {};
	        })
	            .catch(this.handleError);
	    };
	    ContactsService.prototype.getContactsWithSkipAndFilter = function (pageClickedEventArgs) {
	        var skip = pageClickedEventArgs.skip;
	        var searchString = pageClickedEventArgs.searchString;
	        var filterType = pageClickedEventArgs.filterType;
	        return this._http
	            .get(this._baseUrl + "odata/Contacts?$skip=" + skip + "&$filter=contains(" + filterType + ",'" + searchString + "')")
	            .map(function (res) {
	            var body = res.json();
	            // The body has context and value
	            return body.value || {};
	        })
	            .catch(this.handleError);
	    };
	    ContactsService.prototype.getContactsCountForFilter = function (searchString, filterType) {
	        return this._http
	            .get(this._baseUrl + "odata/Contacts?$count=true&$filter=contains(" + filterType + ",'" + searchString + "')")
	            .map(function (res) {
	            var body = res.json();
	            // The body has context, count and value
	            return body["@odata.count"];
	        })
	            .catch(this.handleError);
	    };
	    // TODO: return Observable<OdataResponse>
	    ContactsService.prototype.getContactsCount = function () {
	        return this._http
	            .get(this._baseUrl + "odata/Contacts/RememberMe.Functions.GetContactsCount()")
	            .map(function (res) {
	            var body = res.json();
	            // The body has context and value
	            return body.value;
	        })
	            .catch(this.handleError);
	    };
	    // TODO: return Observable<OdataResponse>
	    ContactsService.prototype.addContact = function (contact) {
	        return this._http
	            .post(this._baseUrl + "odata/Contacts", contact)
	            .map(function (res) {
	            var body = res.json();
	            return body || {};
	        })
	            .catch(this.handleError);
	    };
	    // TODO: return Observable<OdataResponse>
	    ContactsService.prototype.editContact = function (contact) {
	        return this._http
	            .patch(this._baseUrl + "odata/Contacts(" + contact.Id + ")", contact)
	            .map(function (res) {
	            return res;
	        })
	            .catch(this.handleError);
	    };
	    // TODO: return Observable<OdataResponse>
	    ContactsService.prototype.deleteContact = function (contact) {
	        return this._http
	            .delete(this._baseUrl + "odata/Contacts(" + contact.Id + ")")
	            .map(function (res) {
	            return res;
	        })
	            .catch(this.handleError);
	    };
	    ContactsService.prototype.handleError = function (error) {
	        // In a real world app, we might use a remote logging infrastructure
	        // We'd also dig deeper into the error to get a better message
	        var errMsg = (error.message) ? error.message :
	            error.status ? error.status + " - " + error.statusText : 'Server error';
	        console.error(errMsg); // log to console instead
	        return Observable_1.Observable.throw(errMsg);
	    };
	    ContactsService = __decorate([
	        core_1.Injectable(),
	        __param(1, core_1.Inject("BASE_URL")), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_extended_service_1.HttpExtendedService !== 'undefined' && http_extended_service_1.HttpExtendedService) === 'function' && _a) || Object, String])
	    ], ContactsService);
	    return ContactsService;
	    var _a;
	}());
	exports.ContactsService = ContactsService;


/***/ },

/***/ 504:
/***/ function(module, exports) {

	"use strict";
	var Contact = (function () {
	    function Contact(Name, Email, Phone, Organization, Misc, OwnerId, Id) {
	        this.Name = Name;
	        this.Email = Email;
	        this.Phone = Phone;
	        this.Organization = Organization;
	        this.Misc = Misc;
	        this.OwnerId = OwnerId;
	        this.Id = Id;
	    }
	    return Contact;
	}());
	exports.Contact = Contact;


/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var ContactsPaginationComponent = (function () {
	    function ContactsPaginationComponent() {
	        this.onPageClicked = new core_1.EventEmitter();
	        this._pageSize = 4;
	    }
	    ContactsPaginationComponent.prototype.ngOnInit = function () {
	    };
	    // Each time there's a change a new PaginationOptions object is created.
	    ContactsPaginationComponent.prototype.ngOnChanges = function () {
	        this.paginationOptions = this.paginationOptionsFactory();
	        if (this.paginationOptions !== null) {
	            if (this.paginationOptions.pagesData.length > 0) {
	                this.sendContactsToContainer(this.paginationOptions.pagesData[0].skip);
	            }
	        }
	    };
	    ContactsPaginationComponent.prototype.storePageItems = function (pageItem) {
	        console.log(pageItem.pageData.index);
	    };
	    ContactsPaginationComponent.prototype.selectPage = function (pageData) {
	        var _this = this;
	        // Reseting all PageData.selected to false.
	        this.paginationOptions.pagesData.forEach(function (pd) {
	            pd.selected = false;
	        });
	        // Setting up selected PageData.selected to true.
	        this.paginationOptions.pagesData.filter(function (pd) {
	            return pd.index == pageData.index;
	        })
	            .map(function (pd) {
	            pd.selected = true;
	            // Send the number of skiped contacts.
	            _this.sendContactsToContainer(pd.skip);
	        });
	    };
	    ContactsPaginationComponent.prototype.moveLeft = function () {
	        var selectedPageData;
	        this.paginationOptions.pagesData.filter(function (pd) {
	            return pd.selected == true;
	        })
	            .map(function (pd) { return selectedPageData = pd; });
	        if (selectedPageData.index > 1) {
	            var leftPageData = this.paginationOptions
	                .pagesData[selectedPageData.index - 2];
	            this.selectPage(leftPageData);
	        }
	    };
	    ContactsPaginationComponent.prototype.moveRight = function () {
	        var selectedPageData;
	        this.paginationOptions.pagesData.filter(function (pd) {
	            return pd.selected == true;
	        })
	            .map(function (pd) { return selectedPageData = pd; });
	        if (selectedPageData.index < this.paginationOptions
	            .pagesData.length) {
	            var rightPageData = this.paginationOptions
	                .pagesData[selectedPageData.index];
	            this.selectPage(rightPageData);
	        }
	    };
	    // This method needs a better name since it not just is fired when
	    // a click's been made, it's also fired on the first ngOnChanges.
	    ContactsPaginationComponent.prototype.sendContactsToContainer = function (skip) {
	        var pageClickedEventArgs = new PageClickedEventArgs();
	        pageClickedEventArgs.skip = skip;
	        pageClickedEventArgs.searchString = this.searchString;
	        pageClickedEventArgs.filterType = this.filterType;
	        this.onPageClicked.emit(pageClickedEventArgs);
	    };
	    // This should be in a service.
	    ContactsPaginationComponent.prototype.paginationOptionsFactory = function () {
	        var paginationOptions = new PaginationOptions();
	        var pageNumber = 0;
	        if ((this.contactCount % this._pageSize) === 0) {
	            pageNumber = this.contactCount / this._pageSize;
	        }
	        else {
	            pageNumber = Math.floor(this.contactCount / this._pageSize) + 1;
	        }
	        var pagesData = [];
	        for (var x = 0; x < pageNumber; x++) {
	            var pageData = new PageData();
	            pageData.index = x + 1;
	            pageData.skip = x * this._pageSize;
	            pageData.selected = x == 0 ? true : false;
	            pagesData[x] = pageData;
	        }
	        paginationOptions.pageNumber = pageNumber;
	        paginationOptions.pagesData = pagesData;
	        return paginationOptions;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], ContactsPaginationComponent.prototype, "contactCount", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ContactsPaginationComponent.prototype, "searchString", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ContactsPaginationComponent.prototype, "filterType", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], ContactsPaginationComponent.prototype, "onPageClicked", void 0);
	    ContactsPaginationComponent = __decorate([
	        core_1.Component({
	            selector: "contacts-pagination",
	            styles: ["\n  li {\n    cursor:pointer;\n  }\n  .blue-grey {\n    background-color: red;\n  }\n  "],
	            template: "\n  <ul class=\"pagination\">\n    <li class=\"waves-effect\" (click)=\"moveLeft()\">\n      <a><i class=\"material-icons\">chevron_left</i></a>\n    </li>\n    <contacts-pagination-item *ngFor=\"let _pageData of paginationOptions.pagesData\"\n                           [clicked]=\"_pageData.selected\"\n                           [pageData]=\"_pageData\"\n                           (onSelect)=\"selectPage($event)\">\n    </contacts-pagination-item>\n    <li class=\"waves-effect\" (click)=\"moveRight()\">\n      <a><i class=\"material-icons\">chevron_right</i></a>\n    </li>\n  </ul>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactsPaginationComponent);
	    return ContactsPaginationComponent;
	    var _a;
	}());
	exports.ContactsPaginationComponent = ContactsPaginationComponent;
	var PaginationOptions = (function () {
	    function PaginationOptions() {
	    }
	    return PaginationOptions;
	}());
	var PageData = (function () {
	    function PageData() {
	    }
	    return PageData;
	}());
	exports.PageData = PageData;
	var PageClickedEventArgs = (function () {
	    function PageClickedEventArgs() {
	    }
	    return PageClickedEventArgs;
	}());
	exports.PageClickedEventArgs = PageClickedEventArgs;


/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var contacts_pagination_component_1 = __webpack_require__(505);
	var ContactsPaginationItemComponent = (function () {
	    function ContactsPaginationItemComponent(_elRef, $) {
	        this._elRef = _elRef;
	        this.$ = $;
	        this.onSelect = new core_1.EventEmitter();
	    }
	    ContactsPaginationItemComponent.prototype.ngOnInit = function () {
	    };
	    ContactsPaginationItemComponent.prototype.ngOnChanges = function () {
	        if (this.clicked) {
	            this.$(this._elRef.nativeElement)
	                .find("a").addClass("active blue-grey lighten-2");
	        }
	        else {
	            this.$(this._elRef.nativeElement)
	                .find("a").removeClass("active blue-grey lighten-2");
	        }
	    };
	    ContactsPaginationItemComponent.prototype.selectPage = function () {
	        this.onSelect.emit(this.pageData);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ContactsPaginationItemComponent.prototype, "clicked", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof contacts_pagination_component_1.PageData !== 'undefined' && contacts_pagination_component_1.PageData) === 'function' && _a) || Object)
	    ], ContactsPaginationItemComponent.prototype, "pageData", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], ContactsPaginationItemComponent.prototype, "onSelect", void 0);
	    ContactsPaginationItemComponent = __decorate([
	        core_1.Component({
	            selector: "contacts-pagination-item",
	            styles: ["\n  "],
	            template: "\n  <li class=\"waves-effect\" (click)=\"selectPage()\">\n    <a>{{ pageData.index }}</a>\n  </li>\n  "
	        }),
	        __param(1, core_1.Inject("$")), 
	        __metadata('design:paramtypes', [(typeof (_c = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _c) || Object, Object])
	    ], ContactsPaginationItemComponent);
	    return ContactsPaginationItemComponent;
	    var _a, _b, _c;
	}());
	exports.ContactsPaginationItemComponent = ContactsPaginationItemComponent;


/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var contact_model_1 = __webpack_require__(504);
	var ContactsAddItemComponent = (function () {
	    function ContactsAddItemComponent() {
	        this.onAddContact = new core_1.EventEmitter();
	    }
	    ContactsAddItemComponent.prototype.ngOnInit = function () {
	        this.model = new contact_model_1.Contact("", "", "", "", "", "");
	    };
	    ContactsAddItemComponent.prototype.submit = function () {
	        var addContactArgs = new AddContactsArgs();
	        addContactArgs.submitted = true,
	            addContactArgs.canceled = false,
	            addContactArgs.contact = this.model;
	        this.onAddContact.emit(addContactArgs);
	    };
	    ContactsAddItemComponent.prototype.cancel = function () {
	        var addContactArgs = new AddContactsArgs();
	        addContactArgs.submitted = false,
	            addContactArgs.canceled = true,
	            addContactArgs.contact = null;
	        this.onAddContact.emit(addContactArgs);
	    };
	    ContactsAddItemComponent.prototype.resetContact = function () {
	        this.model = new contact_model_1.Contact("", "", "", "", "", "");
	    };
	    Object.defineProperty(ContactsAddItemComponent.prototype, "diagnostic", {
	        get: function () {
	            return JSON.stringify(this.model);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], ContactsAddItemComponent.prototype, "onAddContact", void 0);
	    ContactsAddItemComponent = __decorate([
	        core_1.Component({
	            selector: 'contacts-add-item',
	            styles: ["\n  .ng-valid[required] {\n    border-bottom: 1px solid #42A948; /* green */\n  }\n\n  .ng-invalid {\n    border-bottom: 1px solid #a94442; /* red */\n  }\n  "],
	            template: "\n  <div class=\"row z-depth-4\">\n    <form class=\"col s12\" (ngSubmit)=\"submit()\" #contactForm=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"name\" type=\"text\" class=\"validate\" required\n                  [(ngModel)]=\"model.Name\" name=\"name\"\n                  #name=\"ngModel\">  \n          <label for=\"name\" data-error=\"invalid\" data-success=\"valid\">Name</label>\n          <div [hidden]=\"name.valid\" \n                class=\"alert alert-danger\">\n            <sup style=\"color:red;\">Name is required</sup>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12 m6\">\n          <textarea id=\"email\" class=\"materialize-textarea\"\n                    [(ngModel)]=\"model.Email\" name=\"email\"></textarea>\n          <label for=\"email\">Email</label>\n        </div>\n\n        <div class=\"input-field col s12 m6\">\n          <textarea id=\"phone\" class=\"materialize-textarea\"\n                    [(ngModel)]=\"model.Phone\" name=\"phone\"></textarea>\n          <label for=\"phone\">Phone</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <textarea id=\"organization\" class=\"materialize-textarea\"\n                    [(ngModel)]=\"model.Organization\" name=\"organization\"></textarea>\n          <label for=\"organization\">Organization</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <textarea id=\"misc\" class=\"materialize-textarea\"\n                    [(ngModel)]=\"model.Misc\" name=\"misc\"></textarea>\n          <label for=\"misc\">Misc</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <input class=\"btn-flat\" type=\"submit\" [disabled]=\"!contactForm.form.valid\" value=\"Save\" />\n        <input class=\"btn-flat\" type=\"button\" value=\"Reset contact\" (click)=\"resetContact()\" />\n        <input class=\"btn-flat\" type=\"button\" value=\"Cancel\" (click)=\"cancel()\" />\n      </div>\n    </form>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactsAddItemComponent);
	    return ContactsAddItemComponent;
	    var _a;
	}());
	exports.ContactsAddItemComponent = ContactsAddItemComponent;
	var AddContactsArgs = (function () {
	    function AddContactsArgs() {
	    }
	    return AddContactsArgs;
	}());
	exports.AddContactsArgs = AddContactsArgs;


/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var ContactsListComponent = (function () {
	    function ContactsListComponent() {
	        this.onDeleteContact = new core_1.EventEmitter();
	        this.onEditContact = new core_1.EventEmitter();
	    }
	    ContactsListComponent.prototype.sendContactToDelete = function (contact) {
	        this.onDeleteContact.emit(contact);
	    };
	    ContactsListComponent.prototype.sendContactToEdit = function (contact) {
	        this.onEditContact.emit(contact);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], ContactsListComponent.prototype, "contacts", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], ContactsListComponent.prototype, "onDeleteContact", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], ContactsListComponent.prototype, "onEditContact", void 0);
	    ContactsListComponent = __decorate([
	        core_1.Component({
	            selector: 'contacts-list',
	            template: "\n  <contacts-item *ngFor=\"let contact of contacts\"\n              [contact]=\"contact\"\n              (onDeleteContact)=\"sendContactToDelete($event)\"\n              (onEditContact)=\"sendContactToEdit($event)\">\n  </contacts-item>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactsListComponent);
	    return ContactsListComponent;
	    var _a, _b;
	}());
	exports.ContactsListComponent = ContactsListComponent;


/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var contact_model_1 = __webpack_require__(504);
	var ContactsItemComponent = (function () {
	    function ContactsItemComponent() {
	        this.isEditable = false;
	        this.onDeleteContact = new core_1.EventEmitter();
	        this.onEditContact = new core_1.EventEmitter();
	    }
	    ContactsItemComponent.prototype.ngOnInit = function () {
	        this.cloneContact();
	    };
	    ContactsItemComponent.prototype.cloneContact = function () {
	        this._backupContact = new contact_model_1.Contact(this.contact.Name, this.contact.Email, this.contact.Phone, this.contact.Organization, this.contact.Misc, this.contact.OwnerId, this.contact.Id);
	    };
	    ContactsItemComponent.prototype.delete = function () {
	        this.onDeleteContact.emit(this.contact);
	    };
	    ContactsItemComponent.prototype.edit = function () {
	        this.isEditable = true;
	    };
	    ContactsItemComponent.prototype.submit = function () {
	        // TODO: Send to parent to save in the db.
	        this.cloneContact();
	        this.onEditContact.emit(this.contact);
	        // Save the changes on UI and close the editing form.
	        this.isEditable = false;
	    };
	    ContactsItemComponent.prototype.resetChanges = function () {
	        this.contact.Name = this._backupContact.Name;
	        this.contact.Email = this._backupContact.Email;
	        this.contact.Phone = this._backupContact.Phone;
	        this.contact.Organization = this._backupContact.Organization;
	        this.contact.Misc = this._backupContact.Misc;
	        this.contact.OwnerId = this._backupContact.OwnerId;
	        this.contact.Id = this._backupContact.Id;
	    };
	    ContactsItemComponent.prototype.cancelEditMode = function () {
	        this.resetChanges();
	        this.isEditable = false;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof contact_model_1.Contact !== 'undefined' && contact_model_1.Contact) === 'function' && _a) || Object)
	    ], ContactsItemComponent.prototype, "contact", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], ContactsItemComponent.prototype, "onDeleteContact", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
	    ], ContactsItemComponent.prototype, "onEditContact", void 0);
	    ContactsItemComponent = __decorate([
	        core_1.Component({
	            selector: "contacts-item",
	            styles: ["\n  div span {\n    color:#263238;\n  }  \n  div p {\n    color:#546e7a;\n  }\n  .ng-valid[required] {\n    border-bottom: 1px solid #42A948; /* green */\n  }\n\n  .ng-invalid {\n    border-bottom: 1px solid #a94442; /* red */\n  }\n\n  div.dbsp-footer {\n    padding-top: 20px;\n  }  \n  "],
	            template: "\n  <!--<div *ngIf=\"!isEditable\" class=\"card lime lighten-5\">\n    <div class=\"card-content\">\n      <span class=\"card-title\">{{ contact.Name }}</span>\n    </div> \n    <div class=\"card-action lime lighten-5\">\n      <input type=\"button\" class=\"btn-flat\" style=\"color:black;\" value=\"Edit\" (click)=\"edit()\" />\n      <input type=\"button\" class=\"btn-flat\" style=\"color:black;\" value=\"Delete\" (click)=\"delete()\" />\n    </div>\n  </div>\n\n  <div *ngIf=\"isEditable\" class=\"card lime lighten-5 z-depth-4\">\n    <div class=\"card-content row\" style=\"background-color:white;\">\n      <form class=\"col s12\" #contactForm=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"title\" type=\"text\" class=\"validate\" required\n                   [(ngModel)]=\"contact.Title\" name=\"title\"\n                   #title=\"ngModel\">  \n            <label class=\"active\" for=\"title\" data-error=\"invalid\" data-success=\"valid\">Title</label>\n            <div [hidden]=\"title.valid\" \n                class=\"alert alert-danger\">\n              <sup style=\"color:red;\">Title is required</sup>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          Diagnostic: contactForm.form.valid = {{ contactForm.form.valid }}\n        </div>\n      </form>\n    </div> \n    <div class=\"card-action blue-grey lighten-2\">\n      <input class=\"btn-flat\" type=\"button\" style=\"color:white;\" [disabled]=\"!contactForm.form.valid\" \n             value=\"Save\" (click)=\"submit()\" />\n      <input class=\"btn-flat\" type=\"button\" style=\"color:white;\" value=\"Reset\" (click)=\"resetChanges()\" />\n      <input class=\"btn-flat\" type=\"button\" style=\"color:white;\" value=\"Cancel\" (click)=\"cancelEditMode()\" />\n    </div>\n  </div>-->\n\n  <div *ngIf=\"!isEditable\" class=\"row card-panel blue-grey lighten-5\">\n    <div class=\"blue-grey-text text-darken-4 col s12 m12\">\n      Name: {{ contact.Name }}\n    </div>\n    <div class=\"blue-grey-text text-darken-4 col s12 m6\">\n      Email: {{ contact.Email }}\n    </div>\n    <div class=\"blue-grey-text text-darken-4 col s12 m6\">\n      Phone: {{ contact.Phone }}\n    </div>\n    <div class=\"blue-grey-text text-darken-4 col s12 m12\">\n      Organization: {{ contact.Organization }}\n    </div>\n    <div class=\"blue-grey-text text-darken-4 col s12 m12\">\n      Misc: {{ contact.Misc }}\n    </div>\n    <div class=\"dbsp-footer right\">\n      <input type=\"button\" class=\"btn-flat\" style=\"color:black;\" value=\"Edit\" (click)=\"edit()\" />\n      <input type=\"button\" class=\"btn-flat\" style=\"color:black;\" value=\"Delete\" (click)=\"delete()\" />\n    </div>\n  </div>\n\n  <div *ngIf=\"isEditable\" class=\"row card-panel blue-grey lighten-5 z-depth-4\">\n    <form class=\"col s12\" #contactForm=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"name\" type=\"text\" class=\"validate\" required\n                  [(ngModel)]=\"contact.Name\" name=\"name\"\n                  #name=\"ngModel\">  \n          <label class=\"active\" for=\"name\" data-error=\"invalid\" data-success=\"valid\">Name</label>\n          <div [hidden]=\"name.valid\" \n              class=\"alert alert-danger\">\n            <sup style=\"color:red;\">Name is required</sup>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"email\" type=\"text\"\n                    [(ngModel)]=\"contact.Email\" name=\"email\">\n          <label class=\"active\" for=\"email\">Email</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12 m6\">\n          <input id=\"phone\" type=\"text\"\n                    [(ngModel)]=\"contact.Phone\" name=\"phone\">\n          <label class=\"active\" for=\"phone\">Phone</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12 m6\">\n          <input id=\"organization\" type=\"text\"\n                    [(ngModel)]=\"contact.Organization\" name=\"organization\">\n          <label class=\"active\" for=\"organization\">Organization</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"misc\" type=\"text\"\n                    [(ngModel)]=\"contact.Misc\" name=\"misc\">\n          <label class=\"active\" for=\"misc\">Misc</label>\n        </div>\n      </div>\n    </form>\n    <div class=\"dbsp-footer right\">\n      <input class=\"btn-flat\" type=\"button\" style=\"color:black;\" [disabled]=\"!contactForm.form.valid\" \n             value=\"Save\" (click)=\"submit()\" />\n      <input class=\"btn-flat\" type=\"button\" style=\"color:black;\" value=\"Reset\" (click)=\"resetChanges()\" />\n      <input class=\"btn-flat\" type=\"button\" style=\"color:black;\" value=\"Cancel\" (click)=\"cancelEditMode()\" />\n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactsItemComponent);
	    return ContactsItemComponent;
	    var _a, _b, _c;
	}());
	exports.ContactsItemComponent = ContactsItemComponent;


/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var ContactsHelpComponent = (function () {
	    function ContactsHelpComponent() {
	    }
	    ContactsHelpComponent.prototype.ngOnInit = function () {
	    };
	    ContactsHelpComponent = __decorate([
	        core_1.Component({
	            selector: "contacts-help",
	            styles: ["\n  .content {\n    padding: 20px;\n  }\n  "],
	            template: "\n  <div class=\"blue-grey lighten-4 z-depth-1\">\n    <br />\n    <h3 class=\"center-align\">Contacts Help Section</h3>\n    <div class=\"content\">\n      Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, \n      iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.\n    </div>\n    <br />\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactsHelpComponent);
	    return ContactsHelpComponent;
	}());
	exports.ContactsHelpComponent = ContactsHelpComponent;


/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var contacts_filter_item_component_1 = __webpack_require__(512);
	var ContactsManagerComponent = (function () {
	    function ContactsManagerComponent(_elRef, $) {
	        this._elRef = _elRef;
	        this.$ = $;
	        this._isAddContactSectionEnabled = true;
	        this._isFilterContactSectionEnabled = true;
	        this.onOpenAddContactSection = new core_1.EventEmitter();
	        this.onOpenFilterContactSection = new core_1.EventEmitter();
	        this.onSendSearchString = new core_1.EventEmitter();
	    }
	    // Disabling native click event so that anchor element 
	    // is not able to navigate to "#" 
	    ContactsManagerComponent.prototype.ngOnInit = function () {
	        this.$(this._elRef.nativeElement)
	            .find("a").click(function () { return false; });
	    };
	    ContactsManagerComponent.prototype.openAddContactSection = function () {
	        this.onOpenAddContactSection.emit(this._isAddContactSectionEnabled);
	    };
	    ContactsManagerComponent.prototype.openFilterContactSection = function () {
	        this.onOpenFilterContactSection.emit(this._isFilterContactSectionEnabled);
	    };
	    // Sending search for all contacts (default).
	    ContactsManagerComponent.prototype.sendSearchString = function () {
	        var searchStringEventArgs = new contacts_filter_item_component_1.SearchStringEventArgs();
	        searchStringEventArgs.searchString = "";
	        searchStringEventArgs.filterType = "Name";
	        this.onSendSearchString.emit(searchStringEventArgs);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], ContactsManagerComponent.prototype, "onOpenAddContactSection", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], ContactsManagerComponent.prototype, "onOpenFilterContactSection", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
	    ], ContactsManagerComponent.prototype, "onSendSearchString", void 0);
	    ContactsManagerComponent = __decorate([
	        core_1.Component({
	            selector: "contacts-manager",
	            styles: ["  \n  div a {\n    color:#546e7a;\n  }  \n  "],
	            template: "\n  <div class=\"collection z-depth-1\">\n    <a href=\"#\" class=\"collection-item waves-effect waves-teal\" \n       (click)=\"openAddContactSection()\">Add contact</a>\n    <a href=\"#\" class=\"collection-item waves-effect waves-teal\"\n       (click)=\"sendSearchString()\">Show all</a>\n    <a href=\"#\" class=\"collection-item waves-effect waves-teal\"\n       (click)=\"openFilterContactSection()\">Filter contacts</a>\n  </div>\n  "
	        }),
	        __param(1, core_1.Inject("$")), 
	        __metadata('design:paramtypes', [(typeof (_d = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _d) || Object, Object])
	    ], ContactsManagerComponent);
	    return ContactsManagerComponent;
	    var _a, _b, _c, _d;
	}());
	exports.ContactsManagerComponent = ContactsManagerComponent;


/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var ContactsFilterItemComponent = (function () {
	    function ContactsFilterItemComponent() {
	        this.onSendSearchString = new core_1.EventEmitter();
	        this.searchString = "";
	    }
	    ContactsFilterItemComponent.prototype.ngOnInit = function () {
	    };
	    ContactsFilterItemComponent.prototype.sendSearchString = function (searchString) {
	        var searchStringEventArgs = new SearchStringEventArgs();
	        searchStringEventArgs.searchString = searchString;
	        searchStringEventArgs.filterType = this.filterType;
	        this.onSendSearchString.emit(searchStringEventArgs);
	        this.reset();
	    };
	    ContactsFilterItemComponent.prototype.reset = function () {
	        this.searchString = "";
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ContactsFilterItemComponent.prototype, "filterType", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], ContactsFilterItemComponent.prototype, "onSendSearchString", void 0);
	    ContactsFilterItemComponent = __decorate([
	        core_1.Component({
	            selector: "contacts-filter-item",
	            styles: ["\n  .btn-flat {\n    width: 100px;\n  }\n  "],
	            template: "\n  <div class=\"row\">\n    <div class=\"input-field col s12 m12\">\n      <input id=\"item\" type=\"text\" class=\"\" required\n             [(ngModel)]=\"searchString\" name=\"item\"\n             #item=\"ngModel\">  \n      <label for=\"item\"> \n        Filter by {{ filterType }}\n      </label>\n    </div>\n    <div class=\"center-btn col s12 m12\">\n      <input type=\"button\" class=\"btn-flat\" value=\"Search\"\n             [disabled]=\"!item.valid\" \n             (click)=\"sendSearchString(item.value)\" />    \n      <input type=\"button\" class=\"btn-flat\" value=\"Reset\"\n             [disabled]=\"!item.valid\" \n             (click)=\"reset()\" />  \n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactsFilterItemComponent);
	    return ContactsFilterItemComponent;
	    var _a;
	}());
	exports.ContactsFilterItemComponent = ContactsFilterItemComponent;
	var SearchStringEventArgs = (function () {
	    function SearchStringEventArgs() {
	    }
	    return SearchStringEventArgs;
	}());
	exports.SearchStringEventArgs = SearchStringEventArgs;


/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var ContactsFilterContainerComponent = (function () {
	    function ContactsFilterContainerComponent() {
	        this.onCloseFilterContactsSection = new core_1.EventEmitter();
	        this.onSendSearchString = new core_1.EventEmitter();
	        this._isFilterContactSectionEnabled = false;
	    }
	    ContactsFilterContainerComponent.prototype.ngOnInit = function () {
	    };
	    ContactsFilterContainerComponent.prototype.closeContactsFilterSection = function () {
	        this.onCloseFilterContactsSection.emit(this._isFilterContactSectionEnabled);
	    };
	    ContactsFilterContainerComponent.prototype.sendSearchString = function (searchStringEventArgs) {
	        this.onSendSearchString.emit(searchStringEventArgs);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], ContactsFilterContainerComponent.prototype, "onCloseFilterContactsSection", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], ContactsFilterContainerComponent.prototype, "onSendSearchString", void 0);
	    ContactsFilterContainerComponent = __decorate([
	        core_1.Component({
	            selector: "contacts-filter-container",
	            styles: ["\n  div.blue-grey {\n    padding: 20px;\n  }\n  "],
	            template: "\n  <div class=\"blue-grey lighten-4 z-depth-1\">\n    <contacts-filter-item [filterType]=\"'Name'\"\n                       (onSendSearchString)=\"sendSearchString($event)\">\n    </contacts-filter-item>\n\n    <br />\n\n    <contacts-filter-item [filterType]=\"'Email'\"\n                       (onSendSearchString)=\"sendSearchString($event)\">\n    </contacts-filter-item>\n\n    <br />\n\n    <contacts-filter-item [filterType]=\"'Phone'\"\n                       (onSendSearchString)=\"sendSearchString($event)\">\n    </contacts-filter-item>\n\n    <br />\n\n    <contacts-filter-item [filterType]=\"'Organization'\"\n                       (onSendSearchString)=\"sendSearchString($event)\">\n    </contacts-filter-item>\n\n    <br />\n\n    <contacts-filter-item [filterType]=\"'Misc'\"\n                       (onSendSearchString)=\"sendSearchString($event)\">\n    </contacts-filter-item>\n\n    <br />\n    \n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <input class=\"btn blue-grey lighten-2 right\" type=\"button\" value=\"Close\" \n               (click)=\"closeContactsFilterSection()\" />\n      </div>\n    </div>\n\n    <br />\n  </div> \n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactsFilterContainerComponent);
	    return ContactsFilterContainerComponent;
	    var _a, _b;
	}());
	exports.ContactsFilterContainerComponent = ContactsFilterContainerComponent;


/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var oidc_token_manager_service_1 = __webpack_require__(362);
	var UserInfoComponent = (function () {
	    function UserInfoComponent(_oidcmanager) {
	        this._oidcmanager = _oidcmanager;
	        this.mgr = this._oidcmanager.mgr;
	    }
	    UserInfoComponent.prototype.ngOnInit = function () {
	    };
	    UserInfoComponent = __decorate([
	        core_1.Component({
	            selector: "user-info",
	            styles: ["\n  .dbsp-content {\n    height: 300px;\n    padding: 20px;\n  }\n  "],
	            template: "\n  <div class=\"dbsp-content blue-grey lighten-5 z-depth-1\">\n    <br />\n    <h3 class=\"center-align\">User Information</h3>\n    <div *ngIf=\"!mgr.expired\">\n      Name: {{ mgr.profile.given_name }}<br /> \n      Last Name: {{ mgr.profile.family_name }}<br />\n      Address: {{ mgr.profile.address }}<br />\n      Role: {{ mgr.profile.role }}<br />\n    </div>\n    <div *ngIf=\"mgr.expired\">\n      Welcome Unknown user.\n    </div>\n    <br />\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof oidc_token_manager_service_1.OidcTokenManagerService !== 'undefined' && oidc_token_manager_service_1.OidcTokenManagerService) === 'function' && _a) || Object])
	    ], UserInfoComponent);
	    return UserInfoComponent;
	    var _a;
	}());
	exports.UserInfoComponent = UserInfoComponent;


/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var oidc_token_manager_service_1 = __webpack_require__(362);
	var HeadContainerComponent = (function () {
	    function HeadContainerComponent(_oidcmanager) {
	        this._oidcmanager = _oidcmanager;
	        this.mgr = this._oidcmanager.mgr;
	    }
	    HeadContainerComponent.prototype.ngOnInit = function () {
	    };
	    HeadContainerComponent = __decorate([
	        core_1.Component({
	            selector: "head-container",
	            styles: ["\n  .dbsp-header {\n    height: 300px;\n    padding: 20px;\n  }\n  "],
	            template: "\n  <div class=\"dbsp-header blue-grey lighten-5 z-depth-1\">\n    <br />\n    <h3 class=\"center-align\">Logo and/or important Reminders</h3>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof oidc_token_manager_service_1.OidcTokenManagerService !== 'undefined' && oidc_token_manager_service_1.OidcTokenManagerService) === 'function' && _a) || Object])
	    ], HeadContainerComponent);
	    return HeadContainerComponent;
	    var _a;
	}());
	exports.HeadContainerComponent = HeadContainerComponent;


/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(375);
	exports.routes = [
	    { path: "", redirectTo: "home", pathMatch: "full" },
	];
	exports.routing = router_1.RouterModule.forRoot(exports.routes);


/***/ }

});
//# sourceMappingURL=app.js.map