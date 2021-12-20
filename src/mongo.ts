import mongoose from 'mongoose'

// import models
import './models'

export function connect() {
  return mongoose.connect(process.env.MONGODB_CONNECTION!)
}
