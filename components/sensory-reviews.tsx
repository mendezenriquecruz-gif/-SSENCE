"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Elena M.",
    location: "Madrid",
    fragrance: "Noches en Marrakech",
    rating: 5,
    review: "La primera vez que lo usé, tres personas me detuvieron en la calle para preguntarme qué llevaba. La proyección es impresionante y dura más de 12 horas en mi piel. Es mi fragancia de firma ahora.",
    highlight: "3 personas me detuvieron"
  },
  {
    id: 2,
    name: "Carlos R.",
    location: "Barcelona",
    fragrance: "Alba Mediterránea",
    rating: 5,
    review: "Mi esposa no para de abrazarme desde que empecé a usarlo. Es fresco pero sofisticado, perfecto para el día a día. Después de 8 horas en la oficina, el aroma sigue intacto.",
    highlight: "8 horas de duración"
  },
  {
    id: 3,
    name: "María L.",
    location: "Valencia",
    fragrance: "Terciopelo Noir",
    rating: 5,
    review: "Cada vez que entro en una habitación, la gente pregunta de dónde viene ese aroma increíble. Es adictivo, sensual y único. He recibido más cumplidos con este perfume que con cualquier otro.",
    highlight: "Cumplidos garantizados"
  }
]

export function SensoryReviews() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-gold tracking-[0.3em] uppercase text-xs">
              Testimonios
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light text-cream">
              Experiencias <span className="italic">Sensoriales</span>
            </h2>
            <p className="mt-6 text-cream/60 max-w-2xl mx-auto text-lg">
              Descubre cómo nuestras fragancias transforman el día a día de quienes las llevan
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-sm p-8 relative"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-gold/30 mb-6" />

                {/* Highlight badge */}
                <div className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-sm text-xs tracking-wider uppercase mb-4">
                  {review.highlight}
                </div>

                {/* Review text */}
                <p className="text-cream/80 leading-relaxed mb-6">
                  &ldquo;{review.review}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Author */}
                <div className="border-t border-cream/10 pt-4 mt-auto">
                  <p className="text-cream font-medium">{review.name}</p>
                  <p className="text-cream/50 text-sm">{review.location}</p>
                  <p className="text-gold text-sm mt-1 italic">{review.fragrance}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-cream/10"
          >
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-light text-gold">98%</p>
              <p className="text-cream/60 mt-2 text-sm">Clientes satisfechos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-light text-gold">10h+</p>
              <p className="text-cream/60 mt-2 text-sm">Duración media</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-light text-gold">5.2K</p>
              <p className="text-cream/60 mt-2 text-sm">Reseñas verificadas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
