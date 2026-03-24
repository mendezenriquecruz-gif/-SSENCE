'use server'

import { stripe } from '@/lib/stripe'
import { products } from '@/lib/inventory'

interface CartItem {
  id: string
  quantity: number
}

export async function startCheckoutSession(cartItems: CartItem[]) {
  // Validate all products exist and calculate server-side
  const lineItems = cartItems.map(cartItem => {
    const product = products.find(p => p.id === cartItem.id)
    if (!product) {
      throw new Error(`Product with id "${cartItem.id}" not found`)
    }
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
          description: `${product.size || ''} · ${product.gender === 'M' ? 'Hombre' : product.gender === 'W' ? 'Mujer' : 'Unisex'} · 100% Original`,
        },
        unit_amount: product.priceInCents,
      },
      quantity: cartItem.quantity,
    }
  })

  // Create Checkout Session
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    redirect_on_completion: 'never',
    line_items: lineItems,
    mode: 'payment',
    shipping_address_collection: {
      allowed_countries: ['PR', 'US'],
    },
    phone_number_collection: {
      enabled: true,
    },
    custom_text: {
      submit: {
        message: 'Envío local rápido a Puerto Rico. El IVU (11.5%) será calculado según tu ubicación.',
      },
    },
  })

  return session.client_secret
}
