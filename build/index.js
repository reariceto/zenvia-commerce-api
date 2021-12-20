"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const mongo_1 = require("./mongo");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
async function start() {
    await (0, mongo_1.connect)();
    try {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use(index_1.default);
        app.listen(process.env.PORT || 3000, () => {
            console.log(`App running on port ${process.env.PORT}`);
        });
    }
    catch (err) {
        console.log(err);
    }
}
start();
//# sourceMappingURL=index.js.map