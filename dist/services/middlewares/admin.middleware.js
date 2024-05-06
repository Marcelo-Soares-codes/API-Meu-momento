"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/services/middlewares/admin.middleware.ts
var admin_middleware_exports = {};
__export(admin_middleware_exports, {
  isAdmin: () => isAdmin
});
module.exports = __toCommonJS(admin_middleware_exports);

// src/services/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/repositorys/user.repository.ts
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isAdmin
});
