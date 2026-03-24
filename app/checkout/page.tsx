"use client"

import { useCallback, useState } from "react"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useCart } from "@/contexts/cart-context"
import { startCheckoutSession } from "@/app/actions/stripe"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const fetchClientSecret = useCallback(async () => {
    const cartItems = items.map(item => ({
      id: item.id,
      quantity: item.quantity,
    }))
    const clientSecret = await startCheckoutSession(cartItems)
    return clientSecret!
  }, [items])

  if (items.length === 0 && !showCheckout) {
    return (
      <main className="min-h-screen bg-background py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <ShoppingBag className="w-20 h-20 text-muted-foreground/30 mx-auto mb-6" />
          <h1 className="text-3xl font-light text-foreground mb-4">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-8">
            Explora nuestra colección de fragancias exclusivas
          </p>
          <Link href="/">
            <Button className="bg-primary text-primary-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a la Tienda
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Volver</span>
          </Link>
          <h1 className="text-2xl font-light tracking-wide">Checkout</h1>
          <div className="w-20" />
        </div>

        {!showCheckout ? (
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-card border border-border rounded-sm p-6">
              <h2 className="text-lg font-medium mb-6">Resumen del Pedido</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.size} · Cantidad: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-lg">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Calculando IVU (11.5%) y envío local en el próximo paso
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                100% Originales
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Envío Rápido PR
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Pago Seguro
              </span>
            </div>

            {/* Continue to Payment */}
            <Button
              onClick={() => {
                setIsLoading(true)
                setShowCheckout(true)
              }}
              disabled={isLoading}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base tracking-wide"
            >
              {isLoading ? "Cargando..." : `Pagar · $${subtotal.toFixed(2)}`}
            </Button>
          </div>
        ) : (
          <div id="checkout" className="bg-card border border-border rounded-sm overflow-hidden">
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ fetchClientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
        )}
      </div>
    </main>
  )
}
