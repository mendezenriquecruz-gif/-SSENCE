"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ShoppingBag, Check, Truck } from "lucide-react"

interface Fragrance {
  id: number
  name: string
  brand: string
  description: string
  price: number
  category: string
  image: string
}

const fragrances: Fragrance[] = [
  {
    id: 1,
    name: "Brisa del Caribe",
    brand: "ÉSSENCE Collection",
    description: "Cítricos frescos del amanecer caribeño, bergamota y un toque de sal marina que despierta los sentidos.",
    price: 145,
    category: "Cítrico Fresco",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Noche de San Juan",
    brand: "ÉSSENCE Collection",
    description: "Maderas profundas de oud y sándalo, envueltas en el misterio de la noche tropical más mágica.",
    price: 195,
    category: "Amaderado Profundo",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Amanecer Tropical",
    brand: "ÉSSENCE Collection",
    description: "Flores de jazmín y ylang-ylang bañadas en rocío matutino, dulzura que abraza el alma.",
    price: 165,
    category: "Floral Dulce",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Terciopelo Noir",
    brand: "ÉSSENCE Exclusive",
    description: "Vainilla de Madagascar y rosa negra, un abrazo cálido de sofisticación nocturna.",
    price: 225,
    category: "Gourmand Oriental",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Alba Mediterránea",
    brand: "ÉSSENCE Collection",
    description: "Limón de Amalfi y neroli, brisa de jardines costeros donde el tiempo se detiene.",
    price: 155,
    category: "Cítrico Aromático",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Ébano Imperial",
    brand: "ÉSSENCE Exclusive",
    description: "Cuero, ámbar gris y especias orientales, la esencia del poder silencioso.",
    price: 245,
    category: "Amaderado Especiado",
    image: "https://images.unsplash.com/photo-1547887538-047f814bfb64?w=600&h=800&fit=crop&q=80"
  }
]

export function ProductCatalog() {
  const { toast } = useToast()
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set())

  const handleAddToCart = (fragrance: Fragrance) => {
    setAddedItems(prev => new Set(prev).add(fragrance.id))
    
    toast({
      title: "Añadido al Carrito",
      description: `${fragrance.name} ha sido añadido a tu selección.`,
    })

    // Reset the button after 2 seconds
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev)
        newSet.delete(fragrance.id)
        return newSet
      })
    }, 2000)
  }

  return (
    <section id="catalogo" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4">
            Colección Exclusiva
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight text-balance">
            Nuestras <span className="italic">Fragancias</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Cada composición es una obra maestra olfativa, creada para quienes buscan expresar su esencia única
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fragrances.map((fragrance, index) => (
            <motion.article
              key={fragrance.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={fragrance.image}
                  alt={fragrance.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs tracking-wider uppercase">
                    {fragrance.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-2">
                  {fragrance.brand}
                </p>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {fragrance.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {fragrance.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-light text-foreground">
                    ${fragrance.price}
                  </span>
                  <span className="text-sm text-muted-foreground">USD</span>
                </div>

                {/* Local Shipping Badge */}
                <div className="flex items-center gap-2 text-accent mb-5">
                  <Truck className="w-4 h-4" />
                  <span className="text-xs tracking-wide">Envío Local Rápido (PR)</span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(fragrance)}
                  disabled={addedItems.has(fragrance.id)}
                  className={`w-full transition-all duration-300 ${
                    addedItems.has(fragrance.id)
                      ? "bg-green-600 hover:bg-green-600 text-primary-foreground"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {addedItems.has(fragrance.id) ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Añadido
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Añadir al Carrito
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
