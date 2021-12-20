import { config } from 'dotenv'
config()

import { connect } from './mongo'
import express from 'express'
import cors from 'cors'
import indexRoutes from './routes/index'


async function start() {
    await connect()

    try {
        const app = express();

        app.use(express.json())

        const options: cors.CorsOptions = {
            allowedHeaders: [
                'Origin',
                'X-Requested-With',
                'Content-Type',
                'Accept',
                'X-Access-Token',
            ],
            credentials: true,
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            origin: '*',
            preflightContinue: false,
        };
          
        app.use(cors(options))
        app.use(indexRoutes)

        app.listen(process.env.PORT || 3000, () => {
            console.log(`App running on port ${process.env.PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
  
start()
