import {Router} from 'express'
import storeRouter from './store.routes'
import subscriptionRouter from './subscription.routes'

const routes = Router();

routes.use('/store', storeRouter);
routes.use('/subscription', subscriptionRouter);

export default routes;