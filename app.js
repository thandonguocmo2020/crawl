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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mustache");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var paginate = __webpack_require__(2);
var shortid = __webpack_require__(4);
var schema = new mongoose.Schema({
     // User Id
     // User Id
     _uid: mongoose.Schema.Types.ObjectId,
     sid: {
          type: String,
          unique: true,
          index: true,
          'default': shortid.generate
     },

     slg: {
          type: String,
          unique: true,
          index: true
     },

     // Title
     tl: String,

     // Page Title
     pl: String,
     // Image
     img: String,

     // Source
     src: String,

     // Description 
     desc: String,

     // Html Content
     htm: String,

     tags: [String],

     v: { type: Number, default: 0 },

     stt: {
          type: Number,
          default: 0
     },
     at: {
          type: Date,
          default: Date.now
     },
     crt: {
          type: Date,
          default: Date.now
     }

}, { collection: 'posts' }).plugin(paginate);

schema.pre('save', function (next) {

     if (this.isNew) {
          this.sid = this.sid.replace(/^-|-$/g, 'i');
     }
     // do stuff
     next();
});

schema.index({ tl: 'text', tags: 'text' });

module.exports = mongoose.model('post', schema);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("inert");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode


// http://www.bigeng.io/oauth-authentication-and-session-management-in/
// https://github.com/adambrault/hapi-bell-twitter-cookie/blob/master/index.js


// Load the module dependencies

var Mustache = __webpack_require__(10),
    cookie = __webpack_require__(14),
    bell = __webpack_require__(15),
    parser = __webpack_require__(7),
    vision = __webpack_require__(16),
    seo = __webpack_require__(17),
    crumb = __webpack_require__(18),

// s3 = require('hapi-s3-uploader'),
config = __webpack_require__(1);

module.exports = function (server, routes) {

    server.register([{
        register: cookie
    }, {
        register: bell
    }, {
        register: parser
    }, {
        register: vision
    }], function (err) {

        // Register Mustache Templates rendering 
        server.views({
            engines: {
                html: {
                    compile: function compile(template) {
                        Mustache.parse(template);
                        return function (context) {
                            return Mustache.render(template, context);
                        };
                    }
                }
            },
            //relativeTo: __dirname,
            path: './views'
        });

        //Setup the session strategy
        server.auth.strategy('session', 'cookie', {
            cookie: 'sid',
            password: config.secret, //Use something more secure in production
            //redirectTo: '/login', //If there is no session, redirect here
            appendNext: true,
            isSecure: false //Should be set to true (which is the default) in production
        });

        //Setup the social Twitter login strategy
        server.auth.strategy('twitter', 'bell', {
            provider: 'twitter',
            password: config.secret, //Use something more secure in production
            clientId: config.twitter.clientID,
            clientSecret: config.twitter.clientSecret,
            isSecure: false //Should be set to true (which is the default) in production
        });

        //Setup the social facebook login strategy
        server.auth.strategy('facebook', 'bell', {
            provider: 'facebook',
            password: config.secret, //Use something more secure in production
            clientId: config.facebook.clientID,
            clientSecret: config.facebook.clientSecret,
            isSecure: false //Should be set to true (which is the default) in production
        });

        //Setup the social google login strategy
        server.auth.strategy('google', 'bell', {
            provider: 'google',
            password: config.secret, //Use something more secure in production
            clientId: config.google.clientID,
            clientSecret: config.google.clientSecret,
            isSecure: false //Should be set to true (which is the default) in production
        });

        // for (var i = 1; i < arguments.length; i++) {
        //     var r = arguments[i];
        //     server.route(r);
        // }

        server.route(routes);
    });
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("hapi-auth-cookie");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("bell");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vision");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("hapi-seo");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("crumb");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0),
    mongoosePaginate = __webpack_require__(2);

module.exports = mongoose.model('member', new mongoose.Schema({
    uid: {
        type: String,
        index: true,
        unique: true
    },
    mail: {
        type: String,
        index: true,
        unique: true
    },
    pwd: String,
    fn: String,
    ln: String,
    bth: Date,
    sex: Number,
    //avata
    avt: String,

    phone: String,
    //cover
    cv: String,
    //website   
    www: String,
    bio: String,
    // twitter
    tw: {},
    // facebook
    fb: {},
    // github
    git: {},
    // google
    gg: {},
    stt: {
        type: Number,
        default: 0
    },

    crt: {
        type: Date,
        default: Date.now()
    }

}, { collection: 'members' }).plugin(mongoosePaginate));

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//const Blipp = require('blipp'); // module display all router

var Hapi = __webpack_require__(5),
    mongoose = __webpack_require__(0),
    Path = __webpack_require__(9),
    _ = __webpack_require__(3),
    config = __webpack_require__(1);

var server = new Hapi.Server();
server.connection({ port: config.port.www, host: 'localhost', routes: { cors: true } });

server.register({ register: __webpack_require__(12) }, function (err) {
    if (err) throw err;

    server.route([{
        method: 'GET',
        path: '/www/js/{file*}',

        handler: {
            directory: {
                path: './www/js'
            }
        }
    }, {
        method: 'GET',
        path: '/www/css/{file*}',
        handler: {
            directory: {
                path: './www/css'
            }
        }

    }, {
        method: 'GET',
        path: '/favicon/{file*}',
        handler: {
            directory: {
                path: './www/favicon'
            }
        }

    }]);
});

//var routes = _.concat(require('./routes/auth'), require('./routes/app'));

__webpack_require__(13)(server, __webpack_require__(30));

server.start(function (err) {
    if (err) {
        throw err;
    }
    // Create a new Mongoose connection instance
    mongoose.Promise = global.Promise;
    global.db = mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise });

    console.log('Server running at: ' + new Date() + ' ' + server.info.uri);
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode


var mongoose = __webpack_require__(0),
    _ = __webpack_require__(3),
    http = __webpack_require__(31),
    async = __webpack_require__(8),
    config = __webpack_require__(1),
    Joi = __webpack_require__(19),
    Boom = __webpack_require__(32),
    Member = __webpack_require__(20),
    Post = __webpack_require__(11);

// Define the routes module' method
module.exports = [{
    method: 'GET',
    path: '/p/{id}',
    config: {
        handler: function handler(request, reply) {
            reply.view('detail.html', { html: 'Hello seo' });
        }

    }

}, {
    method: 'POST',
    path: '/api/post/fetch',
    handler: function handler(request, reply) {

        var _kwd = request.payload.kwd;
        var _page = parseInt(request.payload.page) || 1;
        var _limit = parseInt(request.payload.limit) || 15;

        if (_limit > 50) {
            _limit = 50;
        }
        //let _tid = req.body.uid ? req.body.uid : req.body._tid;
        var _condition = [{ stt: { $gte: 1 } }];
        var _sort = { crt: -1 };
        var _series = [];

        switch (_kwd) {
            case 'hit':
                _condition = [{ stt: 2 }];
                break;
            case 'best':
                _condition = [{ stt: 2 }];
                _sort = { rd: 1 };
                break;
            default:

                if (!_.isEmpty(_kwd)) {

                    //_condition.push({ $text: { $search: _kwd } });
                    _condition.push({
                        $or: [{ "tags": new RegExp(_kwd, "i") }, { "tl": new RegExp(_kwd, "i") }]
                    });
                    _sort = { crt: -1 };
                }

                break;

        }

        Post.paginate({ $and: _condition }, {
            select: { tl: 1, img: 1, sid: 1, stt: 1, slg: 1 },
            page: _page,
            limit: _limit,
            sort: _sort
        }, function (err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                //  console.log(result);
                return reply(result);
            } else {
                return reply({ docs: [] });
            }
        });
    }

}, {
    method: '*',
    path: '/api/post/info',
    handler: function handler(req, reply) {
        var _id = req.payload.id;

        Post.findOne({ sid: _id }, function (err, doc) {
            if (doc) {
                //Update views + 1
                var _ran = Math.random();
                Post.update({ _id: doc._id }, { $set: { v: doc.v + 1, rd: _ran } }, function () {});

                console.log("1))=====>chay vao api/post/info");
                var _kwd = doc.tags.length > 0 ? doc.tags.join(' ') : doc.tl;
                var _tag = doc.tags.length > 0 ? doc.tags[0] : doc.tl;

                async.parallel({
                    suggest: function suggest(callback) {
                        console.log("2)=====>chay vao api/post/info");
                        Post.find({ $text: { $search: _kwd }, _id: { $ne: doc._id }, stt: { $gte: 1 } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: 'textScore' } }).select({ tl: 1, v: 1, img: 1, sid: 1, stt: 1, slg: 1 }).limit(6).exec(function (err, docs) {
                            if (err) console.log(err);

                            callback(null, docs);
                        });
                    },
                    recommended: function recommended(callback) {

                        // Post.find({ $text: { $search: _tag }, _id: { $ne: doc._id }, stt: { $gte: 1 }, })
                        Post.find({ $text: { $search: _tag }, _id: { $ne: doc._id }, stt: { $gte: 1 } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: 'textScore' } })
                        // .sort({ st: -1, crt: -1 })
                        .select({ tl: 1, v: 1, img: 1, sid: 1, stt: 1, slg: 1 }).limit(3).exec(function (err, docs) {
                            if (err) console.log(err);

                            callback(null, docs);
                        });
                    }

                }, function (err, results) {
                    if (err) console.log(err);

                    return reply({
                        info: doc,
                        suggest: results.suggest,
                        recommended: results.recommended
                    });
                });
            } else {
                return reply({});
            }
        });
    }
},

// path khac
{
    method: 'GET',
    //path: '/',
    path: '/{path*}',
    config: {
        plugins: {
            seo: { enabled: false }
        },
        handler: function handler(request, reply) {
            reply.view('index.html', {});
        }

    }

}];

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("boom");

/***/ })
/******/ ]);