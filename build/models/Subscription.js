"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    store: { type: 'ObjectId', ref: 'Store' },
    type: {
        type: String,
        enum: ['product:restock', 'product:launch', 'newsletter'],
        required: true,
    },
    medium: {
        type: String,
        enum: ['whatsapp', 'sms'],
        required: true,
    },
    productId: {
        type: String,
    },
    variantId: {
        type: String,
    },
    productName: {
        type: String,
    },
    productUrl: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
        required: true,
    },
    startedAt: {
        type: Date,
        default: () => new Date(),
        required: true,
    },
    endedAt: {
        type: Date,
    },
}, {
    timestamps: {
        createdAt: false,
        updatedAt: true,
    },
});
exports.SubscriptionModel = mongoose_1.default.model('Subscription', schema);
//# sourceMappingURL=Subscription.js.map