import {Router} from 'express'
import {StoreModel} from '../models/Store'

const storeRouter = Router()
//POST
storeRouter.post('/', async (req, res) =>{
    //todo
})

//GET all
storeRouter.get('/', async (req, res) => {
    try{
        const stores = await StoreModel.find()
        res.status(200).json(stores)
    }catch(error){
        res.status(500).json({error: error})
    }
})

//GET by id
storeRouter.get('/:id', async (req, res) => {
    const id = req.params.id

    try{
        const store = await StoreModel.findOne({storeId: id})

        if(!store){
            res.status(422).json({ message: 'store not found'})
            return
        }
        res.status(200).json(store)
    }catch(error){
        res.status(500).json({error: error})
    }
})

//PATCH
storeRouter.patch('/:id', async (req, res) => {
    //todo
})

export default storeRouter