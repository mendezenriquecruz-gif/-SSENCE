"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const fragrances = [
  {
    id: 1,
    name: "Alba Mediterránea",
    tagline: "Frescura que despierta el alma",
    description: "Rocío de bergamota sobre hojas de higuera al amanecer. Notas de limón siciliano danzan con jazmín blanco mientras la brisa marina acaricia la piel.",
    family: "Cítrica Aromática",
    price: "195€",
    color: "from-emerald-900/20 to-teal-900/30"
  },
  {
    id: 2,
    name: "Noches en Marrakech",
    tagline: "Misterio que seduce sin palabras",
    description: "Sándalo ahumado envuelto en ámbar intenso. El cuero envejecido susurra secretos mientras el incienso asciende en espirales doradas bajo la luna del desierto.",
    family: "Amaderada Oriental",
    price: "245€",
    color: "from-amber-900/20 to-orange-900/30"
  },
  {
    id: 3,
    name: "Terciopelo Noir",
    tagline: "Dulzura que cautiva en silencio",
    description: "Vainilla de Madagascar abrazada por pétalos de rosa negra. Caramelo tostado se funde con almizcle mientras el tonka susurra promesas de medianoche.",
    family: "Dulce Gourmand",
    price: "225€",
    color: "from-rose-900/20 to-purple-900/30"
  }
]

export function FeaturedFragrances() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % fragrances.length)
  const prev = () => setCurrent((prev) => (prev - 1 + fragrances.length) % fragrances.length)

  return (
    <section className="py-24 md:py-32 bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">
            Colección
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-light text-cream">
            Novedades <span className="italic">Destacadas</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Image/Visual placeholder */}
                <div className={`aspect-[3/4] bg-gradient-to-br ${fragrances[current].color} rounded-sm relative overflow-hidden`}>
                  {/* Bottle silhouette placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-64 bg-cream/5 rounded-t-full" />
                  </div>
                  
                  {/* Family badge */}
                  <div className="absolute top-6 left-6">
                    <span className="text-cream/80 text-xs tracking-[0.2em] uppercase bg-primary/50 px-3 py-2 rounded-sm backdrop-blur-sm">
                      {fragrances[current].family}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-6 right-6">
                    <span className="text-gold text-2xl font-light">
                      {fragrances[current].price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-cream">
                  <p className="text-gold tracking-[0.2em] uppercase text-xs mb-4">
                    {String(current + 1).padStart(2, "0")} / {String(fragrances.length).padStart(2, "0")}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-light mb-4">
                    {fragrances[current].name}
                  </h3>
                  <p className="text-xl text-cream/70 italic mb-6">
                    {fragrances[current].tagline}
                  </p>
                  <p className="text-cream/60 leading-relaxed text-lg mb-8">
                    {fragrances[current].description}
                  </p>
                  <Button 
                    className="bg-gold text-primary hover:bg-gold/90 px-8 py-6 tracking-widest uppercase text-sm transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Añadir al Carrito
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {fragrances.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-gold w-8" : "bg-cream/30 hover:bg-cream/50"
                    }`}
                    aria-label={`Ir a fragancia ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
