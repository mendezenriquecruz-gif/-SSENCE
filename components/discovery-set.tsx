"use client"

import { Button } from "@/components/ui/button"
import { Check, Package } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  "5 muestras de 2ml de nuestros bestsellers",
  "Envío gratuito a cualquier destino",
  "Crédito de 35€ en tu primera compra",
  "Guía olfativa personalizada incluida"
]

export function DiscoverySet() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-square bg-muted rounded-sm relative overflow-hidden">
                {/* Sample vials representation */}
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="w-8 h-32 bg-gradient-to-b from-gold/20 to-gold/5 rounded-full border border-gold/30"
                    />
                  ))}
                </div>

                {/* Decorative badge */}
                <div className="absolute top-6 right-6 bg-gold text-primary px-4 py-2 rounded-sm">
                  <span className="text-xs tracking-wider uppercase font-medium">Más Vendido</span>
                </div>

                {/* Package icon */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-card/90 backdrop-blur-sm px-4 py-3 rounded-sm">
                  <Package className="w-5 h-5 text-gold" />
                  <span className="text-sm text-foreground">Caja de regalo premium</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <span className="text-gold tracking-[0.3em] uppercase text-xs">
                Programa de Descubrimiento
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-light text-foreground leading-tight">
                Pruébalo en
                <br />
                <span className="italic">tu piel</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Las fragancias evolucionan de forma única en cada persona. Nuestro Set de 
                Descubrimiento te permite experimentar cómo interactúan con tu química 
                corporal antes de elegir tu favorita.
              </p>

              {/* Benefits */}
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Price and CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div>
                  <p className="text-sm text-muted-foreground">Set de Descubrimiento</p>
                  <p className="text-3xl font-light text-foreground">35€</p>
                </div>
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 tracking-widest uppercase text-sm transition-all duration-300 hover:scale-105"
                >
                  Pedir mi Set
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
