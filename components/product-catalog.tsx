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
  size: string
  category: string
  stock: number
  image: string
}

const fragrances: Fragrance[] = [
  {
    id: 1,
    name: "Amber Oud Gold",
    brand: "Al Haramain",
    description: "Notas opulentas de oud y ámbar dorado, una fragancia oriental que evoca los palacios del desierto.",
    price: 37.25,
    size: "4.0 oz",
    category: "Oriental Amaderado",
    stock: 1174,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Club De Nuit Milestone",
    brand: "Armaf",
    description: "Elegancia masculina con notas frescas y amaderadas, inspirado en los clásicos de la alta perfumería.",
    price: 38.00,
    size: "6.8 oz",
    category: "Fresco Amaderado",
    stock: 655,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Asad Elixir",
    brand: "Lattafa",
    description: "Poderosa composición de especias y oud, el rugido del león capturado en un frasco.",
    price: 31.00,
    size: "3.4 oz",
    category: "Especiado Oriental",
    stock: 516,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 4,
    name: "9 AM",
    brand: "Afnan",
    description: "Frescura matutina con toques dulces y amaderados, el despertar perfecto para el hombre moderno.",
    price: 23.25,
    size: "3.4 oz",
    category: "Fresco Aromático",
    stock: 349,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Bharara King",
    brand: "Bharara",
    description: "Majestuosidad real en cada nota, oud y especias orientales para quien lleva corona invisible.",
    price: 42.25,
    size: "3.4 oz",
    category: "Oriental Real",
    stock: 417,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Ariana Cloud",
    brand: "Ariana Grande",
    description: "Nubes de lavanda, coco y vainilla cremosa, un sueño dulce hecho fragancia.",
    price: 43.75,
    size: "3.4 oz",
    category: "Dulce Floral",
    stock: 209,
    image: "https://images.unsplash.com/photo-1547887538-047f814bfb64?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 7,
    name: "360 Red",
    brand: "Perry Ellis",
    description: "Energía vibrante con notas cítricas y especiadas, para el hombre que vive sin límites.",
    price: 20.75,
    size: "3.4 oz",
    category: "Cítrico Especiado",
    stock: 215,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Club De Nuit Intense",
    brand: "Armaf",
    description: "Intensidad legendaria con limón, grosella negra y notas de cuero sofisticado.",
    price: 25.00,
    size: "3.6 oz",
    category: "Amaderado Cítrico",
    stock: 294,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 9,
    name: "Amber Oud Ruby Edition",
    brand: "Al Haramain",
    description: "Rubí líquido con oud precioso y ámbar cálido, joya olfativa del Medio Oriente.",
    price: 40.75,
    size: "3.4 oz",
    category: "Oriental Lujoso",
    stock: 110,
    image: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 10,
    name: "Art Of Universe",
    brand: "Lattafa",
    description: "Viaje cósmico de notas amaderadas y especiadas, el infinito capturado en cristal.",
    price: 34.75,
    size: "3.4 oz",
    category: "Amaderado Especiado",
    stock: 872,
    image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 11,
    name: "212 VIP Black",
    brand: "Carolina Herrera",
    description: "Sofisticación nocturna con lavanda oscura, caviar negro y notas de cuero exclusivo.",
    price: 55.50,
    size: "3.4 oz",
    category: "Aromático Especiado",
    stock: 18,
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&h=800&fit=crop&q=80"
  },
  {
    id: 12,
    name: "Bad Boy Cobalt",
    brand: "Carolina Herrera",
    description: "Rebeldía electrizante con salvia, cedro y notas acuáticas que despiertan los sentidos.",
    price: 64.00,
    size: "3.4 oz",
    category: "Aromático Acuático",
    stock: 32,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&h=800&fit=crop&q=80"
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
                <div className="flex items-center justify-between mb-2">
                  <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
                    {fragrance.brand}
                  </p>
                  <span className="text-xs text-muted-foreground">{fragrance.size}</span>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {fragrance.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {fragrance.description}
                </p>

                {/* Price and Stock */}
                <div className="flex items-baseline justify-between mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-light text-foreground">
                      ${fragrance.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground">USD</span>
                  </div>
                  <span className={`text-xs ${fragrance.stock > 50 ? 'text-green-600' : fragrance.stock > 10 ? 'text-amber-600' : 'text-red-500'}`}>
                    {fragrance.stock > 50 ? 'En Stock' : fragrance.stock > 10 ? `${fragrance.stock} disponibles` : fragrance.stock > 0 ? 'Últimas unidades' : 'Agotado'}
                  </span>
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
