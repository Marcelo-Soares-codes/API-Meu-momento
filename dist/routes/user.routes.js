"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/routes/user.routes.ts
var user_routes_exports = {};
__export(user_routes_exports, {
  default: () => user_routes_default
});
module.exports = __toCommonJS(user_routes_exports);

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
var userRoutes = (app) => {
  app.post("/user/create", create);
  app.post("/user/confirm", confirmCreate);
  app.post("/user/login", login);
  app.post("/user/recover-password", recoverPassword);
  app.post("/user/confirm-recover-password", confirmRecoverPassword);
  app.post("/user/update-info", authenticateToken, updateInfoUser);
  app.get("/users", getAll);
  app.get("/user/:id", authenticateToken, isAdmin, getId);
  app.get("/user/profile", authenticateToken, getProfile);
  app.delete("/user/delete/:id", authenticateToken, isAdmin, deleteId);
};
var user_routes_default = userRoutes;
