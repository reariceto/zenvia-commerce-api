import mongoose from 'mongoose'

interface Subscription {
  store: mongoose.Types.ObjectId
  type: 'product:restock' | 'product:launch' | 'new`sletter'
  medium: 'whatsapp' | 'sms'
  productId?: string
  variantId?: string
  phoneNumber: string
  language: string
  active: boolean
  startedAt: Date
  endedAt?: Date
  updatedAt: Date
}

const schema = new mongoose.Schema<Subscription>(
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