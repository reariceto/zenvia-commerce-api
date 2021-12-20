"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    connectedAt: {
        type: Date,
        default: () => new Date(),
        required: true,
    },
    platform: {
        type: String,
        required: true,
    },
    storeId: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
        required: true,
    },
    language: String,
    adminUrl: String,
    metadata: {
        type: Object,
    },
}, {
    timestamps: {
        createdAt: false,
        updatedAt: true,
    },
});
exports.StoreModel = mongoose_1.default.model('Store', schema);
//# sourceMappingURL=Store.js.map