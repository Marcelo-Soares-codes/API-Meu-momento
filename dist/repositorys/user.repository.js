"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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

// src/repositorys/user.repository.ts
var user_repository_exports = {};
__export(user_repository_exports, {
  createUser: () => createUser,
  deleteById: () => deleteById,
  getAllUsers: () => getAllUsers,
  getByEmail: () => getByEmail,
  getById: () => getById,
  updateInfo: () => updateInfo,
  updatedPassword: () => updatedPassword
});
module.exports = __toCommonJS(user_repository_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createUser,
  deleteById,
  getAllUsers,
  getByEmail,
  getById,
  updateInfo,
  updatedPassword
});
