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

// src/controllers/arena.controller.ts
var arena_controller_exports = {};
__export(arena_controller_exports, {
  addVideo: () => addVideo,
  create: () => create,
  deleteId: () => deleteId,
  getAll: () => getAll,
  getId: () => getId,
  getVideosByArenaId: () => getVideosByArenaId,
  login: () => login
});
module.exports = __toCommonJS(arena_controller_exports);
var import_bcrypt = __toESM(require("bcrypt"));
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));

// src/services/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

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
var getById = (id) => __async(void 0, null, function* () {
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
var getByEmail = (email) => __async(void 0, null, function* () {
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
var deleteById = (id) => __async(void 0, null, function* () {
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
var yup = __toESM(require("yup"));
var arenaValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8)
});

// src/controllers/arena.controller.ts
var login = (req, res) => __async(void 0, null, function* () {
  var _b;
  try {
    const { email, password } = req.body;
    email.toLowerCase();
    const arena = yield getByEmail(email);
    if (!arena) {
      throw new Error("Invalid email or password");
    }
    const verifyPass = yield import_bcrypt.default.compare(password, arena.password);
    if (!verifyPass) {
      throw new Error("Invalid email or password");
    }
    const _a = arena, { password: _ } = _a, arenaLogin = __objRest(_a, ["password"]);
    const token = import_jsonwebtoken.default.sign({ id: arena.id }, (_b = process.env.JWT_PASS) != null ? _b : "", {});
    res.status(200).json({ success: true, data: { arena: arenaLogin, token } });
  } catch (error) {
    handleError(error, res, "Error while logging in");
  }
});
var create = (req, res) => __async(void 0, null, function* () {
  try {
    const { name, email, password } = req.body;
    email.toLowerCase();
    const arenaExistent = yield getByEmail(email);
    if (arenaExistent) {
      throw new Error("Email already exists!");
    }
    const arenaByName = yield getByName(name);
    if (arenaByName) {
      throw new Error("It seems that this name is already being used!");
    }
    yield arenaValidation.validate(req.body);
    const hashPassword = yield import_bcrypt.default.hash(password, 10);
    req.body.password = hashPassword;
    const newArena = yield createArena(req.body);
    res.status(201).json({ success: true, data: newArena });
  } catch (error) {
    handleError(error, res, "Error creating arena");
  }
});
var getAll = (_req, res) => __async(void 0, null, function* () {
  try {
    const arena = yield getAllArenas();
    res.status(200).json({ success: true, data: arena });
  } catch (error) {
    handleError(error, res, "Error getting Arenas");
  }
});
var getId = (req, res) => __async(void 0, null, function* () {
  try {
    const arena = yield getById(req.params.id);
    if (!arena) {
      res.status(404).json({ success: false, error: "Arena not found" });
      return;
    }
    res.status(200).json({ success: true, data: arena });
  } catch (error) {
    handleError(error, res, "Error getting Arena");
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
    handleError(error, res, "Error adding video to arena");
  }
});
var getVideosByArenaId = (req, res) => __async(void 0, null, function* () {
  try {
    const arenaId = req.params.id;
    const arena = yield getById(arenaId);
    if (!arena) {
      res.status(404).json({ success: false, error: "Arena not found" });
      return;
    }
    const videos = yield getAllVideos(arenaId);
    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    handleError(error, res, "Error getting videos by arena ID");
  }
});
var deleteId = (req, res) => __async(void 0, null, function* () {
  try {
    const { deleted, message } = yield deleteById(req.params.id);
    if (!deleted) {
      res.status(404).json({ success: false, error: "Arena not found" });
      return;
    }
    res.status(200).json({ success: true, message });
  } catch (error) {
    handleError(error, res, "Error deleting Arena");
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addVideo,
  create,
  deleteId,
  getAll,
  getId,
  getVideosByArenaId,
  login
});
