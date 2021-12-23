import mongoose from 'mongoose'

export enum StorePlatform {
  Nuvemshop = 'nuvemshop',
  WooCommerce = 'woocommerce',
}

interface BaseStore {
  storeId: string
  name: string
  connectedAt: Date
  accessToken: string
  language: string
  adminUrl: string
  updatedAt: Date
}

interface NuvemshopStore extends BaseStore {
  platform: StorePlatform.Nuvemshop
  metadata: null //TODO
}

interface WooCommerceStore extends BaseStore {
  platform: StorePlatform.WooCommerce
  metadata: null // TODO
}

type Store = NuvemshopStore | WooCommerceStore

const schema = new mongoose.Schema<Store>(
  {
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
  },
  {
    timestamps: {
      createdAt: false,
      updatedAt: true,
    },
  }
)

export const StoreModel = mongoose.model<Store>('Store', schema)
