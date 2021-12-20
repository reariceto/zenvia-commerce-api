"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// import models
require("./models");
function connect() {
    return mongoose_1.default.connect(process.env.MONGODB_CONNECTION);
}
exports.connect = connect;
//# sourceMappingURL=mongo.js.map