"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const store_routes_1 = __importDefault(require("./store.routes"));
const subscription_routes_1 = __importDefault(require("./subscription.routes"));
const routes = (0, express_1.Router)();
routes.use('/store', store_routes_1.default);
routes.use('/subscription', subscription_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map