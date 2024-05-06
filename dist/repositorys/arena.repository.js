"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/repositorys/arena.repository.ts
var arena_repository_exports = {};
__export(arena_repository_exports, {
  addVideoToArena: () => addVideoToArena,
  createArena: () => createArena,
  deleteById: () => deleteById,
  getAllArenas: () => getAllArenas,
  getAllVideos: () => getAllVideos,
  getByEmail: () => getByEmail,
  getById: () => getById,
  getByName: () => getByName
});
module.exports = __toCommonJS(arena_repository_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addVideoToArena,
  createArena,
  deleteById,
  getAllArenas,
  getAllVideos,
  getByEmail,
  getById,
  getByName
});
