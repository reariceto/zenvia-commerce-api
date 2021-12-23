import mongoose from 'mongoose'

export interface Subscription {
  store: mongoose.Types.ObjectId
  type: 'product:restock' | 'product:launch' | 'newsletter'
  medium: 'whatsapp' | 'sms'
  productId?: string
  variantId?: string
  productName?: string
  productUrl?: string
  phoneNumber: string
  language: string
  active: boolean
  startedAt: Date
  endedAt?: Date
  updatedAt: Date
}

const schema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: {
      createdAt: false,
      updatedAt: true,
    },
  }
)

export const SubscriptionModel = mongoose.model<Subscription>(
  'Subscription',
  schema
)
