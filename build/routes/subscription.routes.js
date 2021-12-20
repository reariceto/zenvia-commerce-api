"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Subscription_1 = require("../models/Subscription");
const Store_1 = require("../models/Store");
const subscriptionRouter = (0, express_1.Router)();
//POST
subscriptionRouter.post('/store/:storeId/product/:productId/variant/:variantId', async (req, res) => {
    const storeId = req.params.storeId;
    const productId = req.params.productId;
    const variantId = req.params.variantId;
    const { medium, phoneNumber, language } = req.body;
    try {
        const store = await Store_1.StoreModel.findOne({ storeId: storeId });
        if (!store) {
            throw new Error("Invalid store");
        }
        const subscription = {
            phoneNumber,
            productId,
            store: store._id,
            type: 'product:restock',
            variantId,
            language,
            medium,
        };
        await Subscription_1.SubscriptionModel.create(subscription);
        res.status(201).json({ message: 'subscription inserted.' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
//GET all
subscriptionRouter.get('/', async (req, res) => {
    try {
        const subs = await Subscription_1.SubscriptionModel.find();
        res.status(200).json(subs);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
//GET by storeId/productId/variantId
subscriptionRouter.get('/store/:storeId/product/:productId/variant/:variantId', async (req, res) => {
    const storeId = req.params.storeId;
    const productId = req.params.productId;
    const variantId = req.params.variantId;
    try {
        const subscriptions = await Subscription_1.SubscriptionModel.find({ store: storeId, productId: productId, variantId: variantId }).select({ phoneNumber: 1 });
        if (!subscriptions) {
            res.status(422).json({ message: 'subscription not found' });
            return;
        }
        res.status(200).json(subscriptions);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
//GET by id
subscriptionRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const subs = await Subscription_1.SubscriptionModel.findOne({ _id: id });
        if (!subs) {
            res.status(422).json({ message: 'subscriiption not found' });
            return;
        }
        res.status(200).json(subs);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
//PATCH
subscriptionRouter.patch('/:id', async (req, res) => {
    //todo
});
exports.default = subscriptionRouter;
//# sourceMappingURL=subscription.routes.js.map