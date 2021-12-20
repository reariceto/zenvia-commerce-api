import {Router} from 'express'
import {SubscriptionModel} from '../models/Subscription'

const subscriptionRouter = Router()

//POST
subscriptionRouter.post('/store/:storeId/product/:productId/variantId/:variantId', async (req, res) =>{
    const storeId = req.params.storeId
    const productId = req.params.productId
    const variantId = req.params.variantId
    const {medium, phoneNumber, language} = req.body
    
    const subscription = {
        phoneNumber,
        productId,
        store: storeId,
        type: 'product:restock',
        variantId,
        language,
        medium,
    }

    try{

        await SubscriptionModel.create(subscription)
        res.status(201).json({ message: 'subscription inserted.'})

    }catch(error){
        res.status(500).json({error: error})
    }
})

//GET all
subscriptionRouter.get('/', async (req, res) => {
    try{
        const subs = await SubscriptionModel.find()
        res.status(200).json(subs)
    }catch(error){
        res.status(500).json({error: error})
    }
})

//GET by storeId/productId/variantId
subscriptionRouter.get('/store/:storeId/product/:productId/variantId/:variantId', async (req, res) => {
    const storeId = req.params.storeId
    const productId = req.params.productId
    const variantId = req.params.variantId

    try{
        const subscriptions = await SubscriptionModel.find({store: storeId, productId: productId, variantId: variantId})

        if(!subscriptions){
            res.status(422).json({ message: 'subscriiption not found'})
            return
        }
        res.status(200).json(subscriptions)
    }catch(error){
        res.status(500).json({error: error})
    }
})

//GET by id
subscriptionRouter.get('/:id', async (req, res) => {
    const id = req.params.id

    try{
        const subs = await SubscriptionModel.findOne({_id: id})

        if(!subs){
            res.status(422).json({ message: 'subscriiption not found'})
            return
        }
        res.status(200).json(subs)
    }catch(error){
        res.status(500).json({error: error})
    }
})

//PATCH
subscriptionRouter.patch('/:id', async (req, res) => {
    //todo
})

export default subscriptionRouter