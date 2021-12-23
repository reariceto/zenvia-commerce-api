"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModel = exports.StorePlatform = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var StorePlatform;
(function (StorePlatform) {
    StorePlatform["Nuvemshop"] = "nuvemshop";
    StorePlatform["WooCommerce"] = "woocommerce";
})(StorePlatform = exports.StorePlatform || (exports.StorePlatform = {}));
const schema = new mongoose_1.default.Schema({
    storeId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    connectedAt: {
        type: Date,
        default: () => new Date(),
        required: true,
    },
    platform: {
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