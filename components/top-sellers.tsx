"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { topSellers, type Product } from "@/lib/inventory"
import { ShoppingBag, Check, Truck, Star, Shield, TrendingUp } from "lucide-react"

export function TopSellers() {
  const { addItem } = useCart()
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const handleAddToCart = (product: Product) => {
    addItem(product)
    setAddedItems(prev => new Set(prev).add(product.id))

    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev)
        newSet.delete(product.id)
        return newSet
      })
    }, 2000)
  }

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-accent" />
            <p className="text-accent tracking-[0.3em] uppercase text-sm">
              Los Más Vendidos
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-tight text-balance">
            Top Ventas en <span className="italic">Puerto Rico</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto font-light">
            Las fragancias favoritas de nuestra comunidad, seleccionadas por su calidad, duración y éxito
          </p>
        </motion.div>

        {/* Top Sellers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topSellers.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-card border border-accent/20 rounded-sm overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all duration-300"
            >
              {/* Bestseller Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 text-xs tracking-wider uppercase rounded-sm">
                  <Star className="w-3 h-3 fill-current" />
                  #{index + 1}
                </span>
              </div>

              {/* Text-based luxury card */}
              <div className="p-6 pt-12 space-y-4">
                {/* Badge Row */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs tracking-wider uppercase ${
                    product.gender === 'M' ? 'text-blue-600' : 
                    product.gender === 'W' ? 'text-pink-600' : 'text-accent'
                  }`}>
                    {product.gender === 'M' ? 'Hombre' : product.gender === 'W' ? 'Mujer' : 'Unisex'}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <Shield className="w-3 h-3" />
                    Original
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-medium text-foreground leading-tight line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>

                {/* Size */}
                {product.size && (
                  <p className="text-sm text-muted-foreground">
                    {product.size}
                  </p>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-light text-foreground">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                {/* Local Shipping Badge */}
                <div className="flex items-center gap-2 text-accent">
                  <Truck className="w-4 h-4" />
                  <span className="text-xs tracking-wide">Envío Local Rápido</span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  disabled={addedItems.has(product.id)}
                  className={`w-full transition-all duration-300 ${
                    addedItems.has(product.id)
                      ? "bg-green-600 hover:bg-green-600 text-white"
                      : "bg-accent text-accent-foreground hover:bg-accent/90"
                  }`}
                >
                  {addedItems.has(product.id) ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Añadido
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Añadir
                    </>
                  )}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
