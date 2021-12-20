import mongoose from 'mongoose'

export interface Store {
  connectedAt: Date
  platform: String
  storeId: string
  accessToken: string
  language: string
  adminUrl: string
  metadata: Object
  updatedAt: Date
}

const schema = new mongoose.Schema<Store>(
  {
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
  },
  {
    timestamps: {
      createdAt: false,
      updatedAt: true,
    },
  }
)

export const StoreModel = mongoose.model<Store>('Store', schema)
