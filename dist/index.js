"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports2, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/vary/index.js
var require_vary = __commonJS({
  "node_modules/vary/index.js"(exports2, module2) {
    "use strict";
    module2.exports = vary;
    module2.exports.append = append;
    var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    function append(header, field) {
      if (typeof header !== "string") {
        throw new TypeError("header argument is required");
      }
      if (!field) {
        throw new TypeError("field argument is required");
      }
      var fields = !Array.isArray(field) ? parse(String(field)) : field;
      for (var j = 0; j < fields.length; j++) {
        if (!FIELD_NAME_REGEXP.test(fields[j])) {
          throw new TypeError("field argument contains an invalid header name");
        }
      }
      if (header === "*") {
        return header;
      }
      var val = header;
      var vals = parse(header.toLowerCase());
      if (fields.indexOf("*") !== -1 || vals.indexOf("*") !== -1) {
        return "*";
      }
      for (var i = 0; i < fields.length; i++) {
        var fld = fields[i].toLowerCase();
        if (vals.indexOf(fld) === -1) {
          vals.push(fld);
          val = val ? val + ", " + fields[i] : fields[i];
        }
      }
      return val;
    }
    function parse(header) {
      var end = 0;
      var list = [];
      var start = 0;
      for (var i = 0, len = header.length; i < len; i++) {
        switch (header.charCodeAt(i)) {
          case 32:
            if (start === end) {
              start = end = i + 1;
            }
            break;
          case 44:
            list.push(header.substring(start, end));
            start = end = i + 1;
            break;
          default:
            end = i + 1;
            break;
        }
      }
      list.push(header.substring(start, end));
      return list;
    }
    function vary(res, field) {
      if (!res || !res.getHeader || !res.setHeader) {
        throw new TypeError("res argument is required");
      }
      var val = res.getHeader("Vary") || "";
      var header = Array.isArray(val) ? val.join(", ") : String(val);
      if (val = append(header, field)) {
        res.setHeader("Vary", val);
      }
    }
  }
});

// node_modules/cors/lib/index.js
var require_lib = __commonJS({
  "node_modules/cors/lib/index.js"(exports2, module2) {
    "use strict";
    (function() {
      "use strict";
      var assign = require_object_assign();
      var vary = require_vary();
      var defaults = {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
      };
      function isString(s) {
        return typeof s === "string" || s instanceof String;
      }
      function isOriginAllowed(origin, allowedOrigin) {
        if (Array.isArray(allowedOrigin)) {
          for (var i = 0; i < allowedOrigin.length; ++i) {
            if (isOriginAllowed(origin, allowedOrigin[i])) {
              return true;
            }
          }
          return false;
        } else if (isString(allowedOrigin)) {
          return origin === allowedOrigin;
        } else if (allowedOrigin instanceof RegExp) {
          return allowedOrigin.test(origin);
        } else {
          return !!allowedOrigin;
        }
      }
      function configureOrigin(options, req) {
        var requestOrigin = req.headers.origin, headers = [], isAllowed;
        if (!options.origin || options.origin === "*") {
          headers.push([{
            key: "Access-Control-Allow-Origin",
            value: "*"
          }]);
        } else if (isString(options.origin)) {
          headers.push([{
            key: "Access-Control-Allow-Origin",
            value: options.origin
          }]);
          headers.push([{
            key: "Vary",
            value: "Origin"
          }]);
        } else {
          isAllowed = isOriginAllowed(requestOrigin, options.origin);
          headers.push([{
            key: "Access-Control-Allow-Origin",
            value: isAllowed ? requestOrigin : false
          }]);
          headers.push([{
            key: "Vary",
            value: "Origin"
          }]);
        }
        return headers;
      }
      function configureMethods(options) {
        var methods = options.methods;
        if (methods.join) {
          methods = options.methods.join(",");
        }
        return {
          key: "Access-Control-Allow-Methods",
          value: methods
        };
      }
      function configureCredentials(options) {
        if (options.credentials === true) {
          return {
            key: "Access-Control-Allow-Credentials",
            value: "true"
          };
        }
        return null;
      }
      function configureAllowedHeaders(options, req) {
        var allowedHeaders = options.allowedHeaders || options.headers;
        var headers = [];
        if (!allowedHeaders) {
          allowedHeaders = req.headers["access-control-request-headers"];
          headers.push([{
            key: "Vary",
            value: "Access-Control-Request-Headers"
          }]);
        } else if (allowedHeaders.join) {
          allowedHeaders = allowedHeaders.join(",");
        }
        if (allowedHeaders && allowedHeaders.length) {
          headers.push([{
            key: "Access-Control-Allow-Headers",
            value: allowedHeaders
          }]);
        }
        return headers;
      }
      function configureExposedHeaders(options) {
        var headers = options.exposedHeaders;
        if (!headers) {
          return null;
        } else if (headers.join) {
          headers = headers.join(",");
        }
        if (headers && headers.length) {
          return {
            key: "Access-Control-Expose-Headers",
            value: headers
          };
        }
        return null;
      }
      function configureMaxAge(options) {
        var maxAge = (typeof options.maxAge === "number" || options.maxAge) && options.maxAge.toString();
        if (maxAge && maxAge.length) {
          return {
            key: "Access-Control-Max-Age",
            value: maxAge
          };
        }
        return null;
      }
      function applyHeaders(headers, res) {
        for (var i = 0, n = headers.length; i < n; i++) {
          var header = headers[i];
          if (header) {
            if (Array.isArray(header)) {
              applyHeaders(header, res);
            } else if (header.key === "Vary" && header.value) {
              vary(res, header.value);
            } else if (header.value) {
              res.setHeader(header.key, header.value);
            }
          }
        }
      }
      function cors2(options, req, res, next) {
        var headers = [], method = req.method && req.method.toUpperCase && req.method.toUpperCase();
        if (method === "OPTIONS") {
          headers.push(configureOrigin(options, req));
          headers.push(configureCredentials(options, req));
          headers.push(configureMethods(options, req));
          headers.push(configureAllowedHeaders(options, req));
          headers.push(configureMaxAge(options, req));
          headers.push(configureExposedHeaders(options, req));
          applyHeaders(headers, res);
          if (options.preflightContinue) {
            next();
          } else {
            res.statusCode = options.optionsSuccessStatus;
            res.setHeader("Content-Length", "0");
            res.end();
          }
        } else {
          headers.push(configureOrigin(options, req));
          headers.push(configureCredentials(options, req));
          headers.push(configureExposedHeaders(options, req));
          applyHeaders(headers, res);
          next();
        }
      }
      function middlewareWrapper(o) {
        var optionsCallback = null;
        if (typeof o === "function") {
          optionsCallback = o;
        } else {
          optionsCallback = function(req, cb) {
            cb(null, o);
          };
        }
        return function corsMiddleware(req, res, next) {
          optionsCallback(req, function(err, options) {
            if (err) {
              next(err);
            } else {
              var corsOptions = assign({}, defaults, options);
              var originCallback = null;
              if (corsOptions.origin && typeof corsOptions.origin === "function") {
                originCallback = corsOptions.origin;
              } else if (corsOptions.origin) {
                originCallback = function(origin, cb) {
                  cb(null, corsOptions.origin);
                };
              }
              if (originCallback) {
                originCallback(req.headers.origin, function(err2, origin) {
                  if (err2 || !origin) {
                    next(err2);
                  } else {
                    corsOptions.origin = origin;
                    cors2(corsOptions, req, res, next);
                  }
                });
              } else {
                next();
              }
            }
          });
        };
      }
      module2.exports = middlewareWrapper;
    })();
  }
});

// src/index.ts
var import_express = __toESM(require("express"));
var import_cors = __toESM(require_lib());
var import_dotenv3 = __toESM(require("dotenv"));

// src/controllers/user.controller.ts
var import_bcrypt = __toESM(require("bcrypt"));
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_email_validator = require("email-validator");

// src/services/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/repositorys/user.repository.ts
var createUser = (data) => __async(void 0, null, function* () {
  const user = prisma.user.create({
    data,
    select: {
      id: true,
      profileImage: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
      premium: true,
      role: true
    }
  });
  return user;
});
var getAllUsers = () => __async(void 0, null, function* () {
  const users = yield prisma.user.findMany({
    select: {
      id: true,
      profileImage: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
      premium: true,
      role: true
    }
  });
  return users;
});
var getById = (id) => __async(void 0, null, function* () {
  const users = yield prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      profileImage: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
      premium: true,
      role: true
    }
  });
  return users;
});
var getByEmail = (email) => __async(void 0, null, function* () {
  const users = yield prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      profileImage: true,
      name: true,
      email: true,
      password: true,
      phone: true,
      createdAt: true,
      updatedAt: true,
      premium: true,
      role: true
    }
  });
  return users;
});
var updatedPassword = (email, password) => __async(void 0, null, function* () {
  const newUser = yield prisma.user.update({
    where: { email },
    data: { password }
  });
  return newUser;
});
var updateInfo = (data) => __async(void 0, null, function* () {
  const _a = data, { id } = _a, newData = __objRest(_a, ["id"]);
  const user = yield prisma.user.update({
    where: { id },
    data: newData
  });
  return user;
});
var deleteById = (id) => __async(void 0, null, function* () {
  const user = yield prisma.user.findUnique({
    where: { id }
  });
  if (user) {
    yield prisma.user.delete({
      where: { id }
    });
    return { deleted: true, message: "Usu\xE1rio deletado com sucesso!" };
  }
  return {
    deleted: false,
    message: "N\xE3o foi poss\xEDvel deletar o usu\xE1rio, verifique o id"
  };
});

// src/validations/user.validation.ts
var yup = __toESM(require("yup"));
var userValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  phone: yup.string().nullable().min(10).max(15)
});
var recoverPasswordValidation = yup.object({
  email: yup.string().required().email(),
  newPassword: yup.string().required().min(8)
});

// src/services/nodemailer/confirmEmail.service.ts
var import_nodemailer = __toESM(require("nodemailer"));
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var transporter = import_nodemailer.default.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD_EMAIL
  }
});
var sendConfirmationEmail = (email, confirmationToken) => __async(void 0, null, function* () {
  try {
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #FCFFFC; padding: 20px;">
        <h1 style="color: #040F0F;">Confirma\xE7\xE3o de E-mail</h1>
        <p style="color: #2BA84A;">Por favor, clique no link abaixo para confirmar seu e-mail:</p>
        <p style="color: #2BA84A;">Token: ${confirmationToken}</p>
        <a href="${process.env.URL_FRONTEND}/confirm-create/${confirmationToken}" style="margin: auto; background-color: #248232; color: #FCFFFC; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Confirmar E-mail</a>
      </div>
    `;
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Confirma\xE7\xE3o de E-mail",
      html: emailTemplate
    };
    yield transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Erro ao enviar e-mail de confirma\xE7\xE3o:", error);
    throw new Error("Erro ao enviar e-mail de confirma\xE7\xE3o");
  }
});

// src/services/nodemailer/recoverPassword.service.ts
var import_nodemailer2 = __toESM(require("nodemailer"));
var import_dotenv2 = __toESM(require("dotenv"));
import_dotenv2.default.config();
var transporter2 = import_nodemailer2.default.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD_EMAIL
  }
});
var sendRecoverPassword = (email, confirmationToken) => __async(void 0, null, function* () {
  try {
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #FCFFFC; padding: 20px;">
        <h1 style="color: #040F0F;">Recupera\xE7\xE3o de senha</h1>
        <p style="color: #2BA84A;">Por favor, clique no link abaixo para recuperar sua senha:</p>
        <p style="color: #2BA84A;">Token: ${confirmationToken}</p>
        <a href="${process.env.URL_FRONTEND}/confirm-recover-password/${confirmationToken}" style="margin: auto; background-color: #248232; color: #FCFFFC; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Confirmar E-mail</a>
      </div>
    `;
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Recupera\xE7\xE3o de senha",
      html: emailTemplate
    };
    yield transporter2.sendMail(mailOptions);
  } catch (error) {
    console.error("Erro ao enviar e-mail de recupera\xE7\xE3o:", error);
    throw new Error("Erro ao enviar e-mail de recupera\xE7\xE3o");
  }
});

// src/controllers/user.controller.ts
var login = (req, res) => __async(void 0, null, function* () {
  var _b;
  try {
    const { email, password } = req.body;
    email.toLowerCase();
    const user = yield getByEmail(email);
    if (!user) {
      throw new Error("Invalid email or password");
    }
    const verifyPass = yield import_bcrypt.default.compare(password, user.password);
    if (!verifyPass) {
      throw new Error("Invalid email or password");
    }
    const _a = user, { password: _ } = _a, userLogin = __objRest(_a, ["password"]);
    const token = import_jsonwebtoken.default.sign({ id: user.id }, (_b = process.env.JWT_PASS) != null ? _b : "");
    res.status(200).json({ success: true, data: { user: userLogin, token } });
  } catch (error) {
    handleError(error, res, "Error logging in");
  }
});
var getProfile = (req, res) => __async(void 0, null, function* () {
  var _a;
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("Authorization header not found!");
    }
    const token = authorization.split(" ")[1];
    const decodedToken = import_jsonwebtoken.default.verify(token, (_a = process.env.JWT_PASS) != null ? _a : "");
    const userId = decodedToken.id;
    const user = yield getById(userId);
    if (!user) {
      throw new Error("User not found!");
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    handleError(error, res, "Error getting user profile");
  }
});
var create = (req, res) => __async(void 0, null, function* () {
  var _a;
  try {
    const { email, password } = req.body;
    email.toLowerCase();
    if (!(0, import_email_validator.validate)(email)) {
      throw new Error("Invalid email!");
    }
    const userExists = yield getByEmail(email);
    if (userExists) {
      throw new Error("Email already exists!");
    }
    yield userValidation.validate(req.body);
    const hashPassword = yield import_bcrypt.default.hash(password, 10);
    req.body.password = hashPassword;
    const token = import_jsonwebtoken.default.sign({ user: req.body }, (_a = process.env.JWT_PASS) != null ? _a : "", {
      expiresIn: "10m"
    });
    yield sendConfirmationEmail(email, token);
    res.status(201).json({ success: true, token });
  } catch (error) {
    handleError(error, res, "Error creating user");
  }
});
var confirmCreate = (req, res) => __async(void 0, null, function* () {
  var _a;
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("Authorization header not found!");
    }
    const token = authorization.split(" ")[1];
    const decodedToken = import_jsonwebtoken.default.verify(token, (_a = process.env.JWT_PASS) != null ? _a : "");
    const { user } = decodedToken;
    if (!(0, import_email_validator.validate)(user.email)) {
      throw new Error("Invalid email!");
    }
    const userExists = yield getByEmail(user.email);
    if (userExists) {
      throw new Error("Email already exists!");
    }
    const newUser = yield createUser(user);
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    handleError(error, res, "Error confirming user creation");
  }
});
var recoverPassword = (req, res) => __async(void 0, null, function* () {
  var _a;
  try {
    const { email, newPassword } = req.body;
    email.toLowerCase();
    if (!(0, import_email_validator.validate)(email)) {
      throw new Error("Invalid email!");
    }
    const user = yield getByEmail(email);
    if (!user) {
      throw new Error("Email not found!");
    }
    yield recoverPasswordValidation.validate(req.body);
    const hashPassword = yield import_bcrypt.default.hash(newPassword, 10);
    user.password = hashPassword;
    const token = import_jsonwebtoken.default.sign({ user }, (_a = process.env.JWT_PASS) != null ? _a : "", {
      expiresIn: "10m"
      // Set token expiration time
    });
    yield sendRecoverPassword(email, token);
    res.status(201).json({
      success: true,
      message: "Password successfully recovered. Check your email for further instructions."
    });
  } catch (error) {
    handleError(error, res, "Error confirming user creation");
  }
});
var confirmRecoverPassword = (req, res) => __async(void 0, null, function* () {
  var _a;
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("Authorization header not found!");
    }
    const token = authorization.split(" ")[1];
    const decodedToken = import_jsonwebtoken.default.verify(token, (_a = process.env.JWT_PASS) != null ? _a : "");
    const { email, password } = decodedToken.user;
    email.toLowerCase();
    if (!(0, import_email_validator.validate)(email)) {
      throw new Error("Invalid email!");
    }
    const userExists = yield getByEmail(email);
    if (!userExists) {
      throw new Error("User not found");
    }
    const updatedUser = yield updatedPassword(email, password);
    res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    handleError(error, res, "Error confirming password recovery");
  }
});
var getAll = (_req, res) => __async(void 0, null, function* () {
  try {
    const users = yield getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    handleError(error, res, "Erro ao obter usu\xE1rios");
  }
});
var getId = (req, res) => __async(void 0, null, function* () {
  try {
    const user = yield getById(req.params.id);
    if (!user) {
      res.status(404).json({ success: false, error: "User not found" });
      return;
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    handleError(error, res, "Error getting user");
  }
});
var updateInfoUser = (req, res) => __async(void 0, null, function* () {
  try {
    const _a = req.body, { id, name: newName } = _a, restData = __objRest(_a, ["id", "name"]);
    console.log(restData);
    const currentUser = yield getById(id);
    if (!currentUser) {
      throw new Error("User not found");
    }
    if (newName && newName !== currentUser.name) {
      const existingUserWithName = yield getByEmail(newName);
      if (existingUserWithName && existingUserWithName.id !== id) {
        return res.status(400).json({ success: false, message: "Username is already in use." });
      }
    }
    const updatedUser = yield updateInfo(__spreadValues({
      id,
      name: newName
    }, restData));
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    handleError(error, res, "error when saving new information");
  }
});
var deleteId = (req, res) => __async(void 0, null, function* () {
  try {
    const { deleted, message } = yield deleteById(req.params.id);
    if (!deleted) {
      res.status(404).json({ success: false, error: "User not found" });
      return;
    }
    res.status(200).json({ success: true, message });
  } catch (error) {
    handleError(error, res, "Error deleting user");
  }
});
var handleError = (error, res, errorMessage) => {
  const status = 400;
  const defaultMessage = "Unknown error";
  const errorMessageToLog = `${errorMessage}: ${error.message}`;
  const errorMessageToSend = error instanceof Error ? error.message : defaultMessage;
  console.error(errorMessageToLog);
  res.status(status).json({ success: false, error: errorMessageToSend });
};

// src/services/middlewares/auth.middleware.ts
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"));
var authenticateToken = (req, res, next) => {
  var _a;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.sendStatus(401);
  import_jsonwebtoken2.default.verify(token, (_a = process.env.JWT_PASS) != null ? _a : "", (err, id) => {
    if (err)
      return res.sendStatus(403);
    req.id = id;
    next();
  });
};

// src/services/middlewares/admin.middleware.ts
var isAdmin = (req, res, next) => __async(void 0, null, function* () {
  if (!req.id) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const user = yield getById(req.id);
  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (user.role !== "ADMINISTRATOR") {
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
});

// src/routes/user.routes.ts
var userRoutes = (app2) => {
  app2.post("/user/create", create);
  app2.post("/user/confirm", confirmCreate);
  app2.post("/user/login", login);
  app2.post("/user/recover-password", recoverPassword);
  app2.post("/user/confirm-recover-password", confirmRecoverPassword);
  app2.post("/user/update-info", authenticateToken, updateInfoUser);
  app2.get("/users", getAll);
  app2.get("/user/:id", authenticateToken, isAdmin, getId);
  app2.get("/user/profile", authenticateToken, getProfile);
  app2.delete("/user/delete/:id", authenticateToken, isAdmin, deleteId);
};
var user_routes_default = userRoutes;

// src/controllers/arena.controller.ts
var import_bcrypt2 = __toESM(require("bcrypt"));
var import_jsonwebtoken3 = __toESM(require("jsonwebtoken"));

// src/repositorys/arena.repository.ts
var createArena = (data) => __async(void 0, null, function* () {
  const arena = yield prisma.arena.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      localization: true,
      password: false,
      createdAt: true,
      updatedAt: true
    }
  });
  return arena;
});
var getAllArenas = () => __async(void 0, null, function* () {
  const arenas = yield prisma.arena.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      localization: true,
      password: false,
      profileImage: true,
      profileBackgroundImage: true,
      createdAt: true,
      updatedAt: true
    }
  });
  return arenas;
});
var getById2 = (id) => __async(void 0, null, function* () {
  const arenas = yield prisma.arena.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      localization: true,
      password: false,
      profileImage: true,
      profileBackgroundImage: true,
      createdAt: true,
      updatedAt: true
    }
  });
  return arenas;
});
var getByEmail2 = (email) => __async(void 0, null, function* () {
  const arenas = yield prisma.arena.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      localization: true,
      password: true,
      profileImage: true,
      profileBackgroundImage: true,
      createdAt: true,
      updatedAt: true
    }
  });
  return arenas;
});
var getByName = (name) => __async(void 0, null, function* () {
  const arenas = yield prisma.arena.findUnique({
    where: { name },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      localization: true,
      password: false,
      profileImage: true,
      profileBackgroundImage: true,
      createdAt: true,
      updatedAt: true
    }
  });
  return arenas;
});
var addVideoToArena = (arenaId, videoData) => __async(void 0, null, function* () {
  const arena = yield prisma.arena.findUnique({
    where: { id: arenaId },
    include: { videos: true }
    // Incluindo a relação de vídeos
  });
  if (!arena) {
    throw new Error("Arena n\xE3o encontrada");
  }
  if (arena.videos.length >= arena.maxVideos) {
    throw new Error("A arena atingiu o limite m\xE1ximo de v\xEDdeos");
  }
  const video = yield prisma.video.create({
    data: __spreadProps(__spreadValues({}, videoData), {
      arena: { connect: { id: arenaId } }
    })
  });
  return video;
});
var getAllVideos = (arenaId) => __async(void 0, null, function* () {
  const videos = [
    "zVtcm1oSBZA",
    "bXRfMxquuP8",
    "OXn6LOc72Xw",
    "kxHTxMWyX9I",
    "RcmiIpqxORE",
    "f9KeRWrZ4O4",
    "em_aBSvxKng",
    "yki3DgBOb98",
    "3Vhe2oe-Oao",
    "V5_jU1klw1U"
  ];
  return videos;
});
var deleteById2 = (id) => __async(void 0, null, function* () {
  const arena = yield prisma.arena.findUnique({
    where: { id }
  });
  if (arena) {
    yield prisma.arena.delete({
      where: { id }
    });
    return { deleted: true, message: "Arena deletada com sucesso!" };
  }
  return {
    deleted: false,
    message: "N\xE3o foi poss\xEDvel deletar a Arena, verifique o id"
  };
});

// src/validations/arena.validation.ts
var yup2 = __toESM(require("yup"));
var arenaValidation = yup2.object({
  name: yup2.string().required(),
  email: yup2.string().required().email(),
  password: yup2.string().required().min(8)
});

// src/controllers/arena.controller.ts
var login2 = (req, res) => __async(void 0, null, function* () {
  var _b;
  try {
    const { email, password } = req.body;
    email.toLowerCase();
    const arena = yield getByEmail2(email);
    if (!arena) {
      throw new Error("Invalid email or password");
    }
    const verifyPass = yield import_bcrypt2.default.compare(password, arena.password);
    if (!verifyPass) {
      throw new Error("Invalid email or password");
    }
    const _a = arena, { password: _ } = _a, arenaLogin = __objRest(_a, ["password"]);
    const token = import_jsonwebtoken3.default.sign({ id: arena.id }, (_b = process.env.JWT_PASS) != null ? _b : "", {});
    res.status(200).json({ success: true, data: { arena: arenaLogin, token } });
  } catch (error) {
    handleError2(error, res, "Error while logging in");
  }
});
var create2 = (req, res) => __async(void 0, null, function* () {
  try {
    const { name, email, password } = req.body;
    email.toLowerCase();
    const arenaExistent = yield getByEmail2(email);
    if (arenaExistent) {
      throw new Error("Email already exists!");
    }
    const arenaByName = yield getByName(name);
    if (arenaByName) {
      throw new Error("It seems that this name is already being used!");
    }
    yield arenaValidation.validate(req.body);
    const hashPassword = yield import_bcrypt2.default.hash(password, 10);
    req.body.password = hashPassword;
    const newArena = yield createArena(req.body);
    res.status(201).json({ success: true, data: newArena });
  } catch (error) {
    handleError2(error, res, "Error creating arena");
  }
});
var getAll2 = (_req, res) => __async(void 0, null, function* () {
  try {
    const arena = yield getAllArenas();
    res.status(200).json({ success: true, data: arena });
  } catch (error) {
    handleError2(error, res, "Error getting Arenas");
  }
});
var getId2 = (req, res) => __async(void 0, null, function* () {
  try {
    const arena = yield getById2(req.params.id);
    if (!arena) {
      res.status(404).json({ success: false, error: "Arena not found" });
      return;
    }
    res.status(200).json({ success: true, data: arena });
  } catch (error) {
    handleError2(error, res, "Error getting Arena");
  }
});
var addVideo = (req, res) => __async(void 0, null, function* () {
  var _a;
  try {
    const { title, id } = req.body;
    if (!title) {
      throw new Error("Title are missing in request body");
    }
    if (!id) {
      throw new Error("Id are missing in request body");
    }
    const videoBytes = (_a = req.file) == null ? void 0 : _a.buffer;
    if (!videoBytes) {
      throw new Error("Video file not found");
    }
    const newVideo = { title, file: videoBytes };
    addVideoToArena(id, newVideo);
    res.status(201).json({ success: true, data: newVideo });
  } catch (error) {
    handleError2(error, res, "Error adding video to arena");
  }
});
var getVideosByArenaId = (req, res) => __async(void 0, null, function* () {
  try {
    const arenaId = req.params.id;
    const arena = yield getById2(arenaId);
    if (!arena) {
      res.status(404).json({ success: false, error: "Arena not found" });
      return;
    }
    const videos = yield getAllVideos(arenaId);
    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    handleError2(error, res, "Error getting videos by arena ID");
  }
});
var deleteId2 = (req, res) => __async(void 0, null, function* () {
  try {
    const { deleted, message } = yield deleteById2(req.params.id);
    if (!deleted) {
      res.status(404).json({ success: false, error: "Arena not found" });
      return;
    }
    res.status(200).json({ success: true, message });
  } catch (error) {
    handleError2(error, res, "Error deleting Arena");
  }
});
var handleError2 = (error, res, errorMessage) => {
  const status = 400;
  const defaultMessage = "Unknown error";
  const errorMessageToLog = `${errorMessage}: ${error.message}`;
  const errorMessageToSend = error instanceof Error ? error.message : defaultMessage;
  console.error(errorMessageToLog);
  res.status(status).json({ success: false, error: errorMessageToSend });
};

// src/routes/arena.routes.ts
var arenaRoutes = (app2) => {
  app2.post("/arena/create", create2);
  app2.post("/arena/login", login2);
  app2.post("/arena/add-video", addVideo);
  app2.get("/arenas", authenticateToken, getAll2);
  app2.get("/arena/:id", authenticateToken, getId2);
  app2.get("/arena/:id/videos", authenticateToken, getVideosByArenaId);
  app2.delete("/arena/delete/:id", authenticateToken, isAdmin, deleteId2);
};
var arena_routes_default = arenaRoutes;

// src/routes/index.ts
var routes = (app2) => {
  user_routes_default(app2);
  arena_routes_default(app2);
};
var routes_default = routes;

// src/index.ts
import_dotenv3.default.config();
var app = (0, import_express.default)();
app.use((0, import_cors.default)());
app.use(import_express.default.json());
routes_default(app);
var PORT = process.env.PORT || 3e3;
var HOST = process.env.HOST || "localhost";
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

vary/index.js:
  (*!
   * vary
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
