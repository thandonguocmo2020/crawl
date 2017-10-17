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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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
/* 27 */
/***/ (function(module, exports) {

module.exports = require("mix-hash");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var Hapi = __webpack_require__(5),
    path = __webpack_require__(9),
    mongoose = __webpack_require__(0),
    _ = __webpack_require__(3),
    config = __webpack_require__(1);

var server = new Hapi.Server();
server.connection({ port: config.port.admin, host: 'localhost', routes: { cors: true } });

server.register({ register: __webpack_require__(12) }, function (err) {
    if (err) throw err;

    server.route([{
        method: 'GET',
        path: '/admin/js/{file*}',

        handler: {
            directory: {
                path: './admin/js'
            }
        }
    }, {
        method: 'GET',
        path: '/admin/css/{file*}',
        handler: {
            directory: {
                path: './admin/css'
            }
        }

    }]);
});

var routes = _.concat(__webpack_require__(39), __webpack_require__(46));

__webpack_require__(13)(server, routes);

server.start(function (err) {
    if (err) {
        throw err;
    }
    // Create a new Mongoose connection instance
    mongoose.Promise = global.Promise;
    global.db = mongoose.connect(config.db, { useMongoClient: true, promiseLibrary: global.Promise });

    console.log('Server running at: ' + server.info.uri);
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode


var Member = __webpack_require__(20),
    AWS = __webpack_require__(40),
    Hash = __webpack_require__(27),
    config = __webpack_require__(1);

var _require = __webpack_require__(41),
    active = _require.active,
    resetPwd = _require.resetPwd;
// Define the routes module' method


module.exports = [{
    method: 'POST',
    path: '/login',
    config: {
        // Use the 'session' auth strategy to allow bell to handle the oauth flow.
        //auth: { mode: 'try' },
        //auth: 'session',
        auth: false,
        //plugins: { 'hapi-auth-cookie': { redirectTo: false } },
        handler: function handler(request, reply) {
            // Here we take the profile that was kindly pulled in
            // by bell and set it to our cookie session.
            // This will set the cookie during the redirect and
            // log them into your application.

            //  console.log(request.payload);

            if (!request.payload.uid || !request.payload.pwd) {
                reply({ msg: 'Missing username or password', stt: 0 });
            } else {
                var _pwd = Hash.sha256(request.payload.pwd);

                var _uid = request.payload.uid || request.payload.mail;
                Member.findOne({ uid: _uid, pwd: _pwd }, function (err, doc) {
                    if (doc) {

                        if (doc.stt == 0) {
                            return reply({ stt: 0, msg: "Your account needs to be activated" });
                        } else {
                            //request.auth.session.set(doc);
                            request.cookieAuth.set(doc);
                            // User is now logged in, redirect them to their account area
                            return reply({ stt: 1, msg: "Login successfuly!" });
                        }
                    } else {
                        reply({ msg: 'Invalid username or password', stt: 0 });
                    }
                });
            }
        }
    }
},
// --------------Register----------------

{
    method: 'POST',
    path: '/register',
    config: {
        // Use the 'session' auth strategy to allow bell to handle the oauth flow.
        //auth: { mode: 'try' },
        //auth: 'session',
        auth: false,
        //plugins: { 'hapi-auth-cookie': { redirectTo: false } },
        handler: function handler(request, reply) {
            // Here we take the profile that was kindly pulled in
            // by bell and set it to our cookie session.
            // This will set the cookie during the redirect and
            // log them into your application.

            //  console.log(request.payload);

            if (!request.payload.uid || !request.payload.pwd) {
                reply({ msg: 'Missing username or password', stt: 0 });
            } else {
                var _pwd = Hash.sha256(request.payload.pwd);
                var _uid = request.payload.uid || request.payload.mail;
                Member.findOne({ uid: _uid }, function (err, doc) {
                    if (doc) {
                        return reply({ stt: -1, msg: "Email has been registered" });
                    } else {
                        var _obj = new Member({
                            fn: request.payload.fn,
                            ln: request.payload.ln,
                            pwd: _pwd,
                            uid: _uid,
                            mail: _uid
                        }).save(function (err, doc) {

                            active(doc);
                            return reply({ stt: 1, msg: "Congratulations on your successful registration" });
                        });
                    }
                });
            }
        }
    }
}, {
    method: 'POST',
    path: '/active/account',
    handler: function handler(req, reply) {
        if (req.payload.mail) {
            Member.findOneAndUpdate({ mail: req.payload.mail }, { $set: { stt: 1 } }, function (err, doc) {
                if (doc) {
                    reply({ stt: 1, msg: "Account has been activated completely" });
                }
            });
        }
    }
}, {
    method: 'POST',
    path: '/reset/password',
    handler: function handler(req, reply) {

        if (req.payload.mail) {
            Member.findOne({ mail: req.payload.mail }, function (err, account) {
                if (err) {
                    throw err;
                    return;
                }

                if (account) {
                    resetPwd(account).then(function (success) {
                        reply({ stt: 1, msg: "Send mail reset password success" });
                    }).catch(function (err) {
                        console.log(err);
                    });
                } else {
                    reply({ stt: 0 });
                }
            });
        }

        if (req.payload._id) {

            var pwd = Hash.sha256(req.payload.pwd);

            Member.findByIdAndUpdate(req.payload._id, { $set: { pwd: pwd } }, { new: true }, function (err, account) {
                if (err) {
                    throw err;
                    return;
                }
                if (account) {
                    reply({ stt: 1, msg: "Update password success", _data: account });
                }

                if (!account) {
                    reply({ stt: 0, msg: "Not update password" });
                }
            });
        }
    }
}, {
    method: 'POST',
    path: '/api/member/change-pwd',
    handler: function handler(req, reply) {

        if (req.payload._id) {
            var pwd = Hash.sha256(req.payload.pwd);
            var newpwd = Hash.sha256(req.payload.newpwd);
            Member.findOne({ _id: req.payload, pwd: pwd }, function (err, account) {
                if (err) {
                    throw err;
                    return;
                }
                if (account) {
                    Member.findByIdAndUpdate(req.payload._id, { $set: { pwd: newpwd } }, { new: true }, function (err, member) {
                        reply({ stt: 1, msg: "Update password success", _data: member });
                    });
                } else {
                    reply({ stt: 0, msg: "Password old not match" });
                }
            });
        }

        if (req.payload.mail) {
            Member.find({ mail: req.payload.mail }, function (err, account) {
                if (err) {
                    throw err;
                    return;
                }

                if (account.length > 0) {
                    reply({ stt: 1, _data: account });
                } else {
                    reply({ stt: 0 });
                }
            });
        }
    }
}, {
    method: 'POST',
    path: '/api/member/update',
    handler: function handler(request, reply) {

        var _uid = request.payload._id;
        var form = request.payload;
        Member.findByIdAndUpdate(_uid, { $set: form }, { new: true }, function (err, member) {
            if (member) {
                reply({ stt: 1, msg: "Member update success", _data: member });
            }
        });
    }

}, {
    method: 'POST',
    path: '/api/member/update-avata',
    config: {
        payload: {
            output: 'stream',
            parse: true,
            maxBytes: 209715200,
            allow: 'multipart/form-data'
        },
        handler: function handler(request, reply) {

            var id = request.payload.id;
            var file = request.payload.file;
            var contentType = file.hapi.headers['content-type'];
            var key = file.hapi.filename;

            Member.findById(id, function (err, member) {

                if (member) {
                    var s3 = new AWS.S3({
                        accessKeyId: config.aws.clientID,
                        secretAccessKey: config.aws.clientSecret,
                        region: config.aws.region
                    });
                    s3.upload({
                        Bucket: config.aws.bucket,
                        Key: key,
                        Body: file,
                        ContentType: contentType,
                        ACL: 'public-read'
                    }, function (err, _data) {
                        // console.log(member.cv);
                        if (_data.Location) {
                            Member.update({ _id: id }, { $set: { avt: _data.Location } }, function (err, member) {
                                if (member) {
                                    reply({ stt: 1, message: "upload avata success", img: _data.Location });
                                } else {
                                    reply({ stt: 0, message: "upload avata faild" });
                                }
                            });
                        }
                    });
                }
            });
        }
    }
},

// Use the 'twitter' authentication strategy to protect the
// endpoint handling the incoming authentication credentials.
// This endpoints usually looks up the third party account in
// the database and sets some application state (cookie) with
// the local application account information.
{
    method: ['GET', 'POST'], // Must handle both GET and POST
    path: '/auth/twitter', // The callback endpoint registered with the provider
    config: {
        auth: 'twitter',
        handler: function handler(request, reply) {

            if (!request.auth.isAuthenticated) {
                return reply('Authentication failed due to: ' + request.auth.error.message);
            }

            request.cookieAuth.set(request.auth.credentials.profile);

            // Perform any account lookup or registration, setup local session,
            // and redirect to the application. The third-party credentials are
            // stored in request.auth.credentials. Any query parameters from
            // the initial request are passed back via request.auth.credentials.query.
            return reply.redirect('/');
        }
    }
},

// Get credentials info

{
    method: ['GET', 'POST'],
    path: '/auth/session',
    config: {
        auth: {
            strategy: 'session',
            mode: 'try'
        },

        handler: function handler(request, reply) {

            if (request.auth.isAuthenticated) {
                var auth = request.auth.credentials;
                reply({
                    session: {
                        id: auth._id,
                        user_id: auth.uid,
                        mail: auth.mail,
                        fn: auth.fn,
                        ln: auth.ln,
                        avt: auth.avt,
                        cv: auth.cv,
                        name: [auth.fn, auth.ln].join(' ')
                    },
                    token: '',
                    authenticated: request.auth.isAuthenticated
                });
            } else {
                reply({
                    session: null,
                    authenticated: false
                });
            }
        }
    }
}, {
    method: ['POST'],
    path: '/auth/info',
    config: {
        auth: {
            strategy: 'session',
            mode: 'try'
        },

        handler: function handler(request, reply) {
            if (request.payload.id) {
                Member.findOne({ _id: request.payload.id }, function (err, member) {
                    if (member) {
                        reply({ stt: 1, _data: member });
                    }
                });
            }
        }
    }
},
// This route is used to the logout the user.  This will **not**
// logout the user from the provider they used to login.

{
    method: 'GET',
    path: '/logout',
    config: {

        handler: function handler(request, reply) {
            // Clear the cookie
            //request.auth.session.clear();
            request.cookieAuth.clear();
            return reply.redirect('/');
        }
    }
}];

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(42);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(28);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodemailer = __webpack_require__(43);
var config = __webpack_require__(1);
var Mustache = __webpack_require__(10);
// acount active

module.exports = {
    active: function active(data) {
        return new _promise2.default(function (res, rej) {
            // Config mail
            var transporter = nodemailer.createTransport(config.mail.smtp);

            var context = {
                host: config.mail.website.host,
                site: config.mail.website.name,
                mail: data.mail
            };

            var htmlTemplateEmail = Mustache.render(__webpack_require__(44), context);

            // console.log("send mail : "+email);
            // setup email data with unicode symbols
            var options = {
                from: config.mail.active.send, // sender address
                to: data.mail, // list of receivers
                subject: config.mail.active.sub, // Subject line
                text: config.mail.active.text, // plain text body
                html: htmlTemplateEmail // html body
            };

            transporter.sendMail(options, function (err, info) {
                if (err) {
                    console.log("ERROR SEND MAIL ACTIVE ====>" + (0, _stringify2.default)(err));
                    rej(err);
                }
                if (info) {
                    // console.log("send email success");
                    res({ stt: 1, msg: "send email active success" });
                }
            });
        });
    },


    // reset pwd
    resetPwd: function resetPwd(data) {

        return new _promise2.default(function (res, rej) {
            // Config mail
            var transporter = nodemailer.createTransport(config.mail.smtp);

            var context = {
                link: config.mail.website.host + '/forgetpwd/' + data._id
            };

            var htmlTemplateEmail = Mustache.render(__webpack_require__(45), context);

            // console.log("send mail : "+email);
            // setup email data with unicode symbols
            var options = {
                from: config.mail.password.send, // sender address
                to: data.mail, // list of receivers
                subject: config.mail.password.sub, // Subject line
                text: config.mail.password.text, // plain text body
                html: htmlTemplateEmail // html body
            };

            transporter.sendMail(options, function (err, info) {
                if (err) {
                    console.log("ERROR SEND MAIL RESET PWD ====>" + (0, _stringify2.default)(err));
                    rej(err);
                }
                if (info) {
                    // console.log("send email success");
                    res({ stt: 1, msg: "send email reset pwd success" });
                }
            });
        });
    }
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\r\n<head>\r\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n    <title>[REPLACE THIS WITH YOUR TITLE]</title>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\"\r\n        crossorigin=\"anonymous\">\r\n    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js\" integrity=\"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js\" integrity=\"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1\"\r\n        crossorigin=\"anonymous\"></script>\r\n</head>\r\n\r\n<body>\r\n    <a class=\"btn btn-primary\" href=\"{{host}}/account/{{mail}}\">Active Account</a>\r\n</body>\r\n\r\n</html>";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\r\n<head>\r\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n    <title>[REPLACE THIS WITH YOUR TITLE]</title>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\"\r\n        crossorigin=\"anonymous\">\r\n    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js\" integrity=\"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js\" integrity=\"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1\"\r\n        crossorigin=\"anonymous\"></script>\r\n</head>\r\n\r\n<body>\r\n    <a class=\"btn btn-primary\" href=\"{{link}}\">Reset Password Account</a>\r\n</body>\r\n\r\n</html>";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Invoke 'strict' JavaScript mode


var mongoose = __webpack_require__(0),
    moment = __webpack_require__(47),
    path = __webpack_require__(9),
    _ = __webpack_require__(3),
    Hash = __webpack_require__(27),
    async = __webpack_require__(8),
    Joi = __webpack_require__(19),
    url = __webpack_require__(22),
    config = __webpack_require__(1),
    Post = __webpack_require__(11),
    Token = __webpack_require__(26),
    Domain = __webpack_require__(24),
    Link = __webpack_require__(25);

var _require = __webpack_require__(48),
    sData = _require.sData;

// Define the routes module' method


module.exports = [

// -----------domain---------
{
    method: 'POST',
    path: '/api/domain/fetch',
    config: {

        auth: {
            strategy: 'session',
            mode: 'try'
        },

        handler: function handler(request, reply) {

            var _limit = parseInt(request.payload.limit || 18);
            var _offset = parseInt(request.payload.offset || 0);
            var _condition = [];
            var _sort = { crt: -1 };

            if (request.payload.search) {
                var _kwd = request.payload.search;

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
                                $or: [{ "uri": new RegExp(_kwd, "i") }]
                            });
                            _sort = { crt: -1 };
                        }

                        break;

                }
            }

            if (request.payload.token) {
                var _token2 = request.payload.token;
                Token.findOne({ token: _token2 }).then(function (tk) {

                    var _sort = { crt: -1 };
                    if (!tk) {
                        reply({ stt: 0, msg: "not token of user" });
                    }

                    if (tk) {

                        _condition.push({ _uid: tk._uid });

                        Domain.paginate({ $and: _condition }, {
                            offset: _offset,
                            limit: _limit,
                            // select: { _id: 1, nm: 1, user_id: 1, fl: 1, fr: 1, lk: 1, stt: 1, lnk: 1, tp: 1, img: 1, msg: 1 },
                            sort: _sort
                        }, function (err, result) {

                            if (result) {
                                reply({
                                    total: result.total,
                                    rows: result.docs
                                });
                            } else {
                                reply({ total: 0, rows: [] });
                            }
                        });
                    }
                });
            } else {
                var _uid = request.auth.credentials._id;
                _condition.push({ _uid: _uid });
                Domain.paginate({ $and: _condition }, {
                    offset: _offset,
                    limit: _limit,
                    // select: { _id: 1, nm: 1, user_id: 1, fl: 1, fr: 1, lk: 1, stt: 1, lnk: 1, tp: 1, img: 1, msg: 1 },
                    sort: _sort
                }, function (err, result) {

                    if (result) {
                        reply({
                            total: result.total,
                            rows: result.docs
                        });
                    } else {
                        reply({ total: 0, rows: [] });
                    }
                });
            }
        }
    }
},

// get website
{
    method: 'POST',
    path: '/api/domain',
    config: {

        auth: {
            strategy: 'session',
            mode: 'try'
        },
        validate: {
            options: {
                allowUnknown: true
            },
            payload: {
                _id: Joi.required()
            }
        },

        handler: function handler(request, reply) {

            if (request.payload.token) {
                var _token3 = request.payload.token;
                var _id2 = request.payload._id;
                Token.findOne({ token: _token3 }, function (err, tk) {

                    if (!tk) {
                        reply({ stt: 0, msg: "not token of user" });
                    }

                    if (tk) {
                        var _condition = [{ _uid: tk._uid }];
                        var _sort = { crt: -1 };

                        Domain.findById(_id2, function (err, result) {
                            if (result) {
                                reply({ stt: 1, msg: "find website success", data: result });
                            } else {
                                reply({ stt: 0, msg: "can not find website" });
                            }
                        });
                    }
                });
            } else {
                var _uid = request.auth.credentials._id;
                var _condition = [{ _uid: _uid }];
                var _sort = { crt: -1 };

                Domain.findById(_id, function (err, result) {
                    if (result) {
                        reply({ stt: 1, msg: "find website success", data: result });
                    } else {
                        reply({ stt: 0, msg: "can not find website" });
                    }
                });
            }
        }
    }
},

// // ------------PUT--------------

{
    method: 'POST',
    path: '/api/domain/save',
    config: {

        auth: {
            strategy: 'session',
            mode: 'try'
        },
        validate: {
            options: {
                allowUnknown: true
            },
            payload: {
                uri: Joi.required(),
                tl: Joi.required(),
                txt: Joi.required()
            }
        },
        handler: function handler(request, reply) {

            if (request.payload.token) {

                var _token4 = request.payload.token;

                Token.findOne({ token: _token4 }).then(function (token) {

                    if (!tk) {
                        reply({ stt: 0, msg: "not token of user" });
                    }

                    if (tk) {
                        var _obj = request.payload;
                        delete _obj.token;
                        _obj._uid = tk._uid;
                        _obj.uri = url.parse(request.payload.uri).host || request.payload.uri.indexOf("://") > 0 ? request.payload.uri.split('/')[2] : request.payload.uri.split('/')[0];

                        // save
                        if (!_obj._id) {
                            Domain.findOneAndUpdate({ _uid: _obj._uid, uri: _obj.uri }, _obj, { new: true, upsert: true, setDefaultsOnInsert: true }).then(function (domain) {
                                return reply({ stt: 1, msg: 'Save successfully.' });
                            });
                        } else {
                            // update
                            Domain.findByIdAndUpdate({ _uid: _obj._id, uri: _obj.uri }, _obj, { new: true, upsert: true, setDefaultsOnInsert: true }).then(function (domain) {
                                return reply({ stt: 1, msg: 'Update successfully.' });
                            });
                        }
                    }
                });
            } else {

                var _obj = request.payload;
                _obj._uid = request.auth.credentials._id;
                _obj.uri = url.parse(request.payload.uri).host || request.payload.uri.indexOf("://") > 0 ? request.payload.uri.split('/')[2] : request.payload.uri.split('/')[0];

                // save
                if (!_obj._id && _obj._uid) {
                    Domain.findOneAndUpdate({ _uid: _obj._uid, uri: _obj.uri }, _obj, { new: true, upsert: true, setDefaultsOnInsert: true }).then(function (domain) {
                        return reply({ stt: 1, msg: 'Save successfully.' });
                    });
                } else {
                    console.log(_obj);
                    // update
                    Domain.findByIdAndUpdate(_obj._id, _obj, { new: true, upsert: true, setDefaultsOnInsert: true }).then(function (domain) {
                        return reply({ stt: 1, msg: 'Update successfully.' });
                    });
                }
            }
        }
    }
},

// // ------------REMOVE--------------

{
    method: 'POST',
    path: '/api/domain/delete',
    config: {
        auth: {
            strategy: 'session',
            mode: 'try'
        },
        handler: function handler(request, reply) {

            // console.log(request.payload);

            if (request.payload.token) {

                Token.findOne({ token: _token }, function (err, tk) {
                    if (!tk) {
                        reply({ stt: 0, msg: "not token of user" });
                    }

                    if (tk) {
                        var _obj = request.payload;
                        delete _obj.token;
                        _obj._uid = tk._uid;

                        Domain.remove({ _id: { $in: _ids }, _uid: _obj._uid }, function (err, doc) {
                            if (doc) {
                                reply({ stt: 1, msg: "Item have been removed" });
                            } else {
                                reply({ msg: "Page not found!" });
                            }
                        });
                    }
                });
            } else {
                var _uid = request.auth.credentials._id;
                var _ids = request.payload.ids;

                Domain.remove({ _id: { $in: _ids }, _uid: _uid }, function (err, doc) {
                    if (doc) {
                        reply({ stt: 1, msg: "Item have been removed" });
                    } else {
                        reply({ msg: "Page not found!" });
                    }
                });
            }
        }
    }
}, {
    method: 'POST',
    path: '/api/domain/crawl',
    config: {
        auth: {
            strategy: 'session',
            mode: 'try'
        },
        handler: function handler(request, reply) {
            // var _uid = request.auth.credentials._id;
            if (request.payload.token) {
                var _token = request.payload.token;
                var link = request.payload.uri;
                var payload = request.payload;
                payload.uri = url.parse(request.payload.uri).host || link;

                // console.log(payload.uri);
                Token.findOne({
                    token: _token
                }).then(function (token) {
                    delete payload.token;

                    if (!token) {
                        reply({ stt: 0, msg: "not token of user" });
                    }

                    if (token) {

                        return Domain.findOne({ _uid: token._uid, uri: payload.uri });
                    }
                }).then(function (website) {

                    if (!website) {
                        reply({ stt: 0, msg: "Please add website to api scanner." });
                    }

                    if (website.stt == 0) {
                        reply({ stt: 0, msg: "this website can not scanner ." });
                    }

                    return sData(website, link);
                }).then(function (content) {

                    if (content.err) {
                        reply({ stt: 0, msg: content.err.message, content: content });
                    } else {

                        if (content.htm && content.tl) {

                            Post.findOneAndUpdate({ tl: content.tl, _uid: content._uid }, content, { new: true, upsert: true, setDefaultsOnInsert: true }, function (err, doc) {
                                if (doc) {
                                    console.log("create new post");
                                }
                            });
                            reply({ stt: 1, msg: "crawling success", data: content });
                        } else {
                            reply({ stt: 1, msg: "crawling success", data: content });
                        }
                    }
                });
            } else {
                reply({ stt: 0, msg: "not find token" });
            }
        }
    }
},

// // -----------domain---------


// -----------token---------
{
    method: 'POST',
    path: '/api/token/fetch',
    config: {

        auth: {
            strategy: 'session',
            mode: 'try'
        },

        handler: function handler(request, reply) {
            var _uid = request.auth.credentials._id;
            Token.find({ _uid: _uid }, function (err, result) {
                if (result) {
                    reply({
                        total: 1,
                        rows: result
                    });
                } else {
                    reply({ total: 0, rows: [] });
                }
            });
        }
    }
},

// ------------PUT--------------

{
    method: 'POST',
    path: '/api/token/save',
    config: {

        auth: {
            strategy: 'session',
            mode: 'try'
        },

        handler: function handler(request, reply) {

            var _uid = request.auth.credentials._id;

            // var _obj = request.payload;

            var _token = Hash.sha256(_uid);

            Token.findOne({ _uid: _uid }, function (err, token) {
                if (err) {
                    console.log(err);
                    return reply(err);
                }

                if (token) {
                    return reply({ stt: 1, msg: 'Token has exists' });
                } else {
                    Token.create({ _uid: _uid, token: _token, stt: 1 }, function (err, doc) {
                        if (err) {
                            console.log(err);
                            return reply(err);
                        }

                        if (doc) {

                            return reply({ stt: 1, msg: ' Create Token successfully.' });
                        }
                    });
                }
            });
        }
    }
},

// ------------REMOVE--------------

{
    method: 'POST',
    path: '/api/token/delete',
    config: {

        auth: {
            strategy: 'session',
            mode: 'try'
        },

        handler: function handler(request, reply) {
            var _uid = request.auth.credentials._id;

            Token.findOneAndRemove({ _uid: _uid }, function (err) {

                if (err) {
                    console.log(err);
                    return;
                }

                reply({ stt: 1, msg: "Remove Token Success" });
            });
        }
    }
},

// -----------link---------
{
    method: 'POST',
    path: '/api/post/fetch',
    config: {

        auth: {
            strategy: 'session',
            mode: 'try'
        },

        validate: {
            payload: {
                page: Joi.number(),
                pageSize: Joi.number(),
                limit: Joi.number(),
                offset: Joi.number(),
                sort: Joi.object().pattern(/.*/, Joi.alternatives().try(Joi.number(), Joi.boolean(), Joi.string())),
                search: Joi.string().allow('')
            }
        },

        handler: function handler(request, reply) {
            var _uid = request.auth.credentials._id;
            var _limit = request.payload.limit;
            var _offset = request.payload.offset;
            var _condition = [{ _uid: _uid }];
            var _sort = { crt: -1 };

            if (request.payload.search) {

                var _kwd = request.payload.search;

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
            }
            // console.log(request.payload);

            Post.paginate({ $and: _condition }, {
                offset: _offset,
                limit: _limit,
                // select: { _id: 1, nm: 1, user_id: 1, fl: 1, fr: 1, lk: 1, stt: 1, lnk: 1, tp: 1, img: 1, msg: 1 },
                sort: _sort
            }, function (err, result) {

                if (result) {
                    reply({
                        total: result.total,
                        rows: result.docs
                    });
                } else {
                    reply({ total: 0, rows: [] });
                }
            });
        }
    }
},
// ------------PUT--------------

{
    method: 'POST',
    path: '/api/post/save',
    config: {

        auth: {
            strategy: 'session',
            mode: 'try'
        },

        handler: function handler(request, reply) {
            var _uid = request.auth.credentials._id;
            var _obj = request.payload;

            if (!_obj._id) {
                _obj._id = new mongoose.Types.ObjectId();
            }

            Post.findOne({ $and: [{ slg: _obj.slg, _id: { $ne: _obj._id } }] }, function (err, doc) {

                if (doc) {
                    reply({ stt: 0, msg: "Message error Slug exists" });
                } else {

                    Post.findOneAndUpdate({ _id: _obj._id, _uid: _uid }, _obj, { new: true, upsert: true, setDefaultsOnInsert: true }, function (err, doc) {

                        if (err) {
                            console.log(err);
                            return reply(err);
                        }

                        return reply({ stt: 1, msg: 'Save successfully.' });
                    });
                }
            });
        }
    }
},

// ------------REMOVE--------------

{
    method: 'POST',
    path: '/api/post/delete',
    config: {

        auth: {
            strategy: 'session',
            mode: 'try'
        },

        handler: function handler(request, reply) {
            var _uid = request.auth.credentials._id;
            var _ids = request.payload.ids;

            Post.remove({ _id: { $in: _ids }, _uid: _uid }, function (err, doc) {
                if (doc) {
                    reply({ stt: 1, msg: "Item have been removed" });
                } else {
                    reply({ msg: "Page not found!" });
                }
            });
        }
    }
},

// ------------report dashboard----------

// {
//     method: 'POST',
//     path: '/api/report/dashboard',
//     config: {

//         auth: {
//             strategy: 'session',
//             mode: 'try'
//         },

//         handler: (request, reply) => {
//             //console.log(request.payload);

//             var _uid = new mongoose.Types.ObjectId(request.auth.credentials._id);

//             var _end = new Date();
//             var _start = moment.utc().add(-30, 'days').startOf('day').toDate();
//             //console.log(_uid);

//             async.parallel({
//                 links: function (cb) {
//                     Link.count({ _uid: _uid }, cb);
//                 },
//                 stats: function (cb) {
//                     Report.aggregate(
//                         { $match: { _uid: _uid, tp: conf.report.type.USER } },
//                         {
//                             $group: {
//                                 _id: "$_uid",
//                                 clicks: { $sum: '$cks' },
//                                 click: { $sum: '$ck' },
//                                 visitors: { $sum: '$vts' }

//                             }
//                         }, function (err, res) {
//                             cb(null, res && res.length > 0 ? res[0] : {
//                                 click: 0,
//                                 clicks: 0,
//                                 visitors: 0
//                             });
//                         });
//                 },
//                 days: function (cb) {
//                     Report.aggregate(
//                         { $match: { _uid: _uid, tp: conf.report.type.USER, crt: { $gte: _start, $lte: _end } } },
//                         { $project: { cks: '$cks', vts: '$vts', ck: '$ck', day: { $substr: ["$crt", 0, 10] } } },
//                         {
//                             $group: {
//                                 _id: "$day",
//                                 clicks: { $sum: '$cks' },
//                                 click: { $sum: '$ck' },
//                                 visitors: { $sum: '$vts' }
//                             }
//                         }, cb);
//                 },
//                 countries: function (cb) {
//                     Report.aggregate(
//                         { $match: { _uid: _uid, tp: conf.report.type.COUNTRY, crt: { $gte: _start, $lte: _end } } },
//                         {
//                             $group: {
//                                 _id: "$val",
//                                 clicks: { $sum: '$cks' },
//                                 click: { $sum: '$ck' },
//                                 visitors: { $sum: '$vts' }
//                             }
//                         },
//                         { $sort: { clicks: -1 } }, cb);
//                 },
//                 refs: function (cb) {
//                     Report.aggregate(
//                         { $match: { _uid: _uid, tp: conf.report.type.REFERER, crt: { $gte: _start, $lte: _end } } },
//                         {
//                             $group: {
//                                 _id: "$val",
//                                 clicks: { $sum: '$cks' },
//                                 click: { $sum: '$ck' },
//                                 visitors: { $sum: '$vts' }
//                             }
//                         },
//                         { $sort: { clicks: -1 } }, cb);
//                 },
//                 browsers: function (cb) {
//                     Report.aggregate(
//                         { $match: { _uid: _uid, tp: conf.report.type.BROWSER, crt: { $gte: _start, $lte: _end } } },
//                         {
//                             $group: {
//                                 _id: "$val",
//                                 clicks: { $sum: '$cks' },
//                                 click: { $sum: '$ck' },
//                                 visitors: { $sum: '$vts' }
//                             }
//                         },
//                         { $sort: { clicks: -1 } }, cb);
//                 },
//                 os: function (cb) {
//                     Report.aggregate(
//                         { $match: { _uid: _uid, tp: conf.report.type.OS, crt: { $gte: _start, $lte: _end } } },
//                         {
//                             $group: {
//                                 _id: "$val",
//                                 clicks: { $sum: '$cks' },
//                                 click: { $sum: '$ck' },
//                                 visitors: { $sum: '$vts' }
//                             }
//                         },
//                         { $sort: { clicks: -1 } }, cb);
//                 }
//             }, function (err, result) {

//                 if (err) {
//                     console.log(err);
//                 }

//                 //  console.log(result);

//                 reply(result);
//             });

//             // reply(request.payload);
//         }
//     }
// },

// default    
{
    method: 'GET',
    //path: '/',
    path: '/{path*}',
    config: {
        handler: function handler(request, reply) {
            reply.view('admin.html', {});
        }

    }

}];

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(49);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(28);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _promise2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _promise2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

__webpack_require__(50);

var Nightmare = __webpack_require__(23),
    cheerio = __webpack_require__(21),
    utils = __webpack_require__(3);
var TurndownService = __webpack_require__(51);
var turndownService = new TurndownService({
    headingStyle: 'setext',
    hr: '* * *',
    // bulletListMarker: '*',
    codeBlockStyle: 'fenced',
    fence: '```',
    emDelimiter: '_',
    strongDelimiter: '**',
    linkStyle: 'inlined',
    linkReferenceStyle: 'full',
    br: '  '
    // remove: ['head', 'link', 'meta', 'script', 'style']
});

var Post = __webpack_require__(11);

var config = __webpack_require__(1);

var nightmare = function nightmare(payload) {
    // uri + angent + cookie + proxy
    var ck = payload.ck,
        proxy = payload.proxy;

    var agent = ['Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2226.0 Safari/537.36', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/532.2 (KHTML, like Gecko) ChromePlus/4.0.222.3 Chrome/4.0.222.3 Safari/532.2', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.28.3 (KHTML, like Gecko) Version/3.2.3 ChromePlus/4.0.222.3 Chrome/4.0.222.3 Safari/525.28.3', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1', 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16', 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14', 'Mozilla/5.0 (Windows NT 6.0; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 12.14', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:47.0) Gecko/20100101 Firefox/47.0', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0) Opera 12.14'];

    // proxy
    // if (proxy) {

    //     const nightmare = Nightmare({
    //         switches: {
    //             'proxy-server': proxy,
    //             'ignore-certificate-errors': true
    //         }
    //     });

    // } else {

    //     var nightmare = Nightmare({
    //         waitTimeout: 10000, // chờ tải trang
    //         show: true  // show etronec
    //     });

    // } 

    var nightmare = Nightmare({
        waitTimeout: 60000, // chờ tải trang
        gotoTimeout: 70000,
        loadTimeout: 80000,
        show: false // show etronec
    });

    // console.log("chay vao day roi");
    // using agent

    nightmare = nightmare.useragent(agent[utils.random(0, agent.length - 1)]);

    // using cookie
    if (ck) {
        // console.log(ck);
        // nightmare = nightmare.cookies.set(cookies);
    }

    return nightmare;
};

var _checkUrl = function _checkUrl(payload, link) {

    var _fullUrl = void 0;

    var uri = payload.uri;


    var isUrlAbsolute = function isUrlAbsolute(_path) {
        return _path.indexOf('http://') === 0 ? true : _path.indexOf('https://') === 0 ? true : false;
    };

    if (payload.uri == link) {
        isUrlAbsolute(uri) ? _fullUrl = uri : _fullUrl = "http://" + uri;
        return _fullUrl;
    }

    if (link) {
        // define uri
        isUrlAbsolute(uri) ? uri.indexOf('http://') === 0 ? uri = "http://" + uri.replace("http://", '').split('/')[0] : uri = "http://" + uri.includes("'https://").replace("https://", '').split('/')[0] : uri = "http://" + uri.split('/')[0];
        // define full link
        isUrlAbsolute(link) ? _fullUrl = link : _fullUrl = uri + link;
        return _fullUrl;
    }
};

// scanner post data
var _sData = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(payload, link) {
        var ng, _uid, uri, tl, img, txt, tag, type, rv, js, _uri;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        ng = nightmare(payload);
                        _uid = payload._uid, uri = payload.uri, tl = payload.tl, img = payload.img, txt = payload.txt, tag = payload.tag, type = payload.type, rv = payload.rv, js = payload.js;
                        _uri = _checkUrl(payload, link);
                        _context.next = 5;
                        return ng.goto(_uri).evaluate(function () {
                            return document.querySelector('body').innerHTML;
                        }).end().then(function (document) {

                            console.log("Scan success =======>");

                            var $ = cheerio.load(document, { decodeEntities: false });

                            if (rv) {
                                $(rv).remove();
                            }

                            // title
                            var _tl = $(tl).text();
                            // desc 
                            var _desc = $('meta[name="description"]').attr("content") || '';
                            // img
                            var _img = $(img).css("background-image") ? $(img).css("background-image").slice(4, -1).replace(/"/g, "") : $(img).attr("src");
                            // content
                            var _content = '';

                            $(txt).each(function (i, e) {
                                _content += $(this).html();
                                // .replace(/\n/g, '') + '<br />';
                            });

                            // tag

                            var _tags = [];

                            // console.log(tag);
                            $(tag).each(function (i, value) {
                                _tags.push($(value).text());
                            });

                            // console.log("TITLE POST =======>");
                            // console.log(_tl);
                            // console.log(_txt);

                            var markdown = turndownService.turndown(_content);

                            var _obj = {
                                _uid: _uid,
                                tl: _tl,
                                slg: utils.slug(_tl),
                                stt: 1,
                                desc: _desc,
                                img: _img,
                                htm: markdown,
                                tags: _tags
                            };

                            console.log("end scanner");
                            // console.log(_obj);
                            return _obj;
                        }).catch(function (err) {
                            return { err: err };
                        });

                    case 5:
                        return _context.abrupt('return', _context.sent);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function _sData(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

module.exports.sData = _sData;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("turndown");

/***/ })
/******/ ]);