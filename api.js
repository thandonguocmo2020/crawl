/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode

// Load the correct configuration file according to the 'NODE_ENV' variable

module.exports = __webpack_require__(6);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose-paginate");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mix-utils");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("hapi");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode


// Set the 'development' environment configuration object

module.exports = {

    port: {
        www: 8097,
        api: 8098,
        admin: 8099
    },
    db: 'mongodb://localhost/krawl',
    secret: '78ad3c62b2f44ec3b65f09ebf1236a6c3c56656d6593b39c250646ee375d2075',
    log: {
        collection: 'logs',
        level: 'all'
    },

    aws: {
        clientID: 'AKIAJGNVNF32R6UBI4XQ',
        clientSecret: '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',
        region: 'us-east-1',
        bucket: 'i.geekrill.com'

    },

    facebook: {
        clientID: '687615191258150',
        clientSecret: '4f09bd8ee3a6cff3711200f9ef2e1045',
        callbackURL: 'http://localhost:8080/auth/facebook/callback'
    },

    twitter: {
        clientID: 'XVuGpFDcCIfIVZfhqkMiNjSuu',
        clientSecret: '0wp1Q50DPjtlqX8LtgoBWCqRxpJtxKXwpmmplwhYDOEMJzXPGA',
        callbackURL: 'http://localhost:8080/auth/twitter/callback'
    },

    tumblr: {
        clientID: 'sC2hNnCfMHYFh84vEWB6icAuSkFdupIBo1cdrpGMMCPHBvskEP',
        clientSecret: 'ww3bd7R4o5LtOBFvTwnH0MkUx3UMGQuWLrm3LxCUYO5j3vUsuj',
        callbackURL: 'http://localhost:8080/auth/tumblr/callback'
    },
    google: {
        clientID: 'Google Application ID',
        clientSecret: 'Google Application Secret',
        callbackURL: 'http://localhost:8080/oauth/google/callback'
    },

    // mail
    mail: {
        website: {
            host: 'http://server.vi-facebook.com',
            name: 'website name'
        },
        smtp: {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // secure:true for port 465, secure:false for port 587
            auth: {
                user: 'hoanghiep1x30@gmail.com',
                pass: '131312htquynh'
            }
        },
        active: {
            send: 'thandonguocmo2020@gmail.com',
            sub: 'GEEKRILL SEND EMAIL TO YOUR',
            text: 'active acount from link '
        },
        password: {
            send: 'thandonguocmo2020@gmail.com',
            sub: 'GEEKRILL SEND EMAIL TO YOUR',
            text: 'reset password from link'
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("hapi-bodyparser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("nightmare");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var paginate = __webpack_require__(2);
var shortid = __webpack_require__(4);
var schema = new mongoose.Schema({
    // User Id
    _uid: mongoose.Schema.Types.ObjectId,
    // domain
    uri: String,
    // title
    tl: String,
    // title
    desc: String,
    // img
    img: String,
    // tag
    tag: String,
    // body html
    txt: String,
    // remove element
    rv: String,
    // độ sâu trang quét
    // deep: Number,
    // // site chạy ajax hay ko
    js: { type: Number, default: 0 },
    // sai cookie hay ko

    stt: {
        // string switch mới chạy 
        type: Number,
        default: 1
    },

    at: {
        type: Date,
        default: Date.now
    },

    crt: {
        type: Date,
        default: Date.now
    }

}, { collection: 'domains' }).plugin(paginate);

schema.index({ "uri": "text" });

module.exports = mongoose.model('domain', schema);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var mongoosePaginate = __webpack_require__(2);
var schema = new mongoose.Schema({
    _uid: mongoose.Schema.Types.ObjectId,
    // WebsiteId
    _wid: mongoose.Schema.Types.ObjectId,
    lnk: { type: String, index: true, unique: true },
    tl: String,
    htm: String,
    img: String,
    tags: [String],
    lv: { type: Number, default: 0 },
    // Type 0: Root | 1: Post | 2: Mail
    tp: { type: Number, default: 0 },
    // Retry
    rt: { type: Number, default: 0 },
    // Status
    stt: { type: Number, default: 0 },
    at: {
        type: Date,
        default: Date.now
    },
    crt: {
        type: Date,
        default: Date.now
    }

}, { collection: 'links' }).plugin(mongoosePaginate);

module.exports = mongoose.model('link', schema);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var paginate = __webpack_require__(2);
var shortid = __webpack_require__(4);
var schema = new mongoose.Schema({
    // User Id
    // User Id
    _uid: mongoose.Schema.Types.ObjectId,

    // Title
    token: String,

    stt: {
        type: Number,
        default: 1
    },

    at: {
        type: Date,
        default: Date.now
    },
    crt: {
        type: Date,
        default: Date.now
    }

}, { collection: 'tokens' }).plugin(paginate);

module.exports = mongoose.model('token', schema);

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var cluster = __webpack_require__(34);

if (cluster.isMaster) {
    var numWorkers = __webpack_require__(35).cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for (var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    'use strict';

    var Hapi = __webpack_require__(5),
        mongoose = __webpack_require__(0),
        parser = __webpack_require__(7),
        api = __webpack_require__(36),
        config = __webpack_require__(1);

    var server = new Hapi.Server();
    server.connection({ port: config.port.api, host: 'localhost' });

    // server.register([{ register: parser, options: { merge: true } }], function (err) {
    //     server.route(api);
    // });

    server.route(api);

    server.start(function (err) {
        if (err) {
            throw err;
        }
        // Create a new Mongoose connection instance
        mongoose.Promise = global.Promise;
        global.db = mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise });

        console.log('Server running at: ' + new Date() + ' ' + server.info.uri);
    });
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("cluster");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode


var async = __webpack_require__(8),
    cheerio = __webpack_require__(21),

// toMarkdown = require('to-markdown'),
url = __webpack_require__(22),
    _ = __webpack_require__(3),
    Wreck = __webpack_require__(37),
    Nightmare = __webpack_require__(23),
    Website = __webpack_require__(24),
    Link = __webpack_require__(25),
    Token = __webpack_require__(26);

// Define the routes module' method
module.exports = [{
    method: 'GET',
    path: '/{format?}',
    config: {
        // cors : true,
        cors: {
            origin: ['*'],
            additionalHeaders: ['content-type', 'cache-control', 'x-requested-with', 'x-krawl-token']
        }
    },
    handler: function handler(request, reply) {

        console.log(request.headers);

        var _lnk = request.query.url;
        var _f = request.params.format || 'html';
        var _ajax = request.query.ajax || false; //|| request.payload.ajax;
        var _markdown = request.query.markdown || false; //|| request.payload.markdown;
        var _id = request.headers['x-krawl-token'];

        if (_.isUrl(_lnk)) {
            // Token.findById(_id, (err, tk) => {
            //     if (tk) {
            // var _host = !_.isEmpty(tk.www) ? tk.www : config.shrink.domain;
            // new Link({
            //     _uid: tk._uid,
            //     fb: tk.fb,
            //     tw: tk.tw,
            //     ga: tk.ga,
            //     host: tk.www,
            //     lnk: _lnk
            // }).save((err, doc) => {
            //     var _url = _.format("http://{0}/{1}", _host, doc._sid);
            //     reply({ url: _url, stt: 1 });
            // });

            var _url = url.parse(_lnk);
            var _host = _url.hostname.replace('www.', '');

            async.parallel({
                website: function website(cb) {
                    if (_f == 'html') {
                        cb(null, null);
                    } else {
                        Website.findOne({ lnk: _host }, function (err, doc) {
                            cb(null, doc);
                        });
                    }
                },
                html: function html(cb) {

                    if (_ajax) {

                        var nightmare = Nightmare({
                            show: true
                            // webPreferences: {
                            //     images: false
                            // }
                            //electronPath: require('electron')
                            // images: false
                        });
                        nightmare.useragent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36 OPR/47.0.2631.83').viewport(1680, 845).goto(_lnk)
                        //.wait(() => document.readyState==="complete")
                        //.wait('DOMContentLoaded')
                        // .wait(function () {
                        //     // setInterval(function(){
                        //     //     if(document.readyState==="complete")
                        //     //         return true;
                        //     // }, 500);

                        //     // without jQuery (doesn't work in older IEs)
                        //     document.addEventListener('DOMContentLoaded', function () {
                        //         return true;
                        //     }, false);
                        // })

                        .evaluate(function () {
                            // console.log('Nightmare');
                            // return document.documentElement.innerHTML;

                            // document.addEventListener('DOMContentLoaded', function () {
                            //     return document.documentElement.outerHTML;
                            // }, false);

                            setInterval(function () {
                                if (document.readyState === "complete") return document.documentElement.outerHTML;
                            }, 500);

                            //return document.querySelector('html').innerHTML;
                        })
                        //.evaluate(() => document.documentElement.outerHTML)
                        .end().then(function (html) {
                            //console.log(html);
                            cb(null, html);
                        }).catch(function (error) {
                            console.error(error);
                            // cb(error, null);
                        });
                    } else {

                        Wreck.get(_lnk, {
                            redirects: 3,

                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36 OPR/47.0.2631.83',
                                'Content-Type': 'text/html; charset=utf-8',
                                'Accept': 'application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5',
                                'Connection': 'keep-alive'
                            }
                        }, function (err, res, body) {
                            if (err) {
                                cb(err, null);
                            } else {
                                cb(null, body);
                            }
                        });
                    } // end if

                }

            }, function (err, result) {

                if (err) console.error(err);

                try {

                    var _website = result.website;

                    if (_website && !_.isEmpty(result.html)) {

                        var _pattern = _website.crawl;
                        var $ = cheerio.load(result.html);
                        var _title = $(_pattern.title).text();
                        var _tags = [];
                        var _img = '',
                            _content = '';

                        if (!_.isEmpty(_pattern.remove)) {
                            $(_pattern.remove).remove();
                        }

                        $(_pattern.content).each(function (i, e) {
                            _content += $(this).html() + '<br />';
                        });

                        if (_markdown) {
                            _content = toMarkdown(_content, { gfm: true });
                        }

                        if (!_.isEmpty(_pattern.img)) {
                            if ($(_pattern.img).length > 0) {
                                _img = $(_pattern.img).attr('src');
                                if (_.isEmpty(_img)) _img = $(_pattern.img).attr('content');

                                _img = _.absoluteUrl(_url, _img);
                            }
                        }
                        if (!_.isEmpty(_pattern.tag)) {
                            $(_pattern.tag).each(function (i, e) {
                                _tags.push($(this).text());
                            });
                        }

                        return reply({
                            title: _title,
                            content: _content,
                            tags: _tags,
                            img: _img
                        });
                    } else {
                        return reply(result.html);
                    }
                } catch (error) {
                    return reply(error);
                }
            }); // end callback


            //     } else {
            //         reply({ msg: "Token is invalid!", stt: 0 });
            //     }
            // });
        } else {
            reply({ msg: 'The input is not a valid URL.', stt: 0 });
        }
    }
}];

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("wreck");

/***/ })
/******/ ]);