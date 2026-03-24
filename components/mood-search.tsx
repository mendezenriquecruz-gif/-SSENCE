"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Flame, Heart, Moon, Sun, Zap, Wind } from "lucide-react"

const moods = [
  {
    id: "energia",
    name: "Energía",
    description: "Cítricos vibrantes y especias que despiertan",
    icon: Zap,
    gradient: "from-amber-500/10 to-orange-500/10",
    activeGradient: "from-amber-500/30 to-orange-500/30"
  },
  {
    id: "seduccion",
    name: "Seducción",
    description: "Notas sensuales de ámbar y almizcle",
    icon: Flame,
    gradient: "from-red-500/10 to-rose-500/10",
    activeGradient: "from-red-500/30 to-rose-500/30"
  },
  {
    id: "calma",
    name: "Calma",
    description: "Lavanda y maderas suaves para relajar",
    icon: Moon,
    gradient: "from-indigo-500/10 to-blue-500/10",
    activeGradient: "from-indigo-500/30 to-blue-500/30"
  },
  {
    id: "alegria",
    name: "Alegría",
    description: "Flores y frutas que inspiran felicidad",
    icon: Sun,
    gradient: "from-yellow-500/10 to-amber-500/10",
    activeGradient: "from-yellow-500/30 to-amber-500/30"
  },
  {
    id: "romance",
    name: "Romance",
    description: "Rosas y vainilla para momentos especiales",
    icon: Heart,
    gradient: "from-pink-500/10 to-rose-500/10",
    activeGradient: "from-pink-500/30 to-rose-500/30"
  },
  {
    id: "libertad",
    name: "Libertad",
    description: "Notas frescas de océano y naturaleza",
    icon: Wind,
    gradient: "from-teal-500/10 to-cyan-500/10",
    activeGradient: "from-teal-500/30 to-cyan-500/30"
  }
]

export function MoodSearch() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-gold tracking-[0.3em] uppercase text-xs">
              Búsqueda Emocional
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light text-foreground">
              ¿Qué <span className="italic">deseas sentir</span> hoy?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
              Explora nuestra colección según el estado de ánimo que quieras proyectar. 
              Cada emoción tiene su fragancia perfecta.
            </p>
          </div>

          {/* Mood Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {moods.map((mood, index) => {
              const Icon = mood.icon
              const isSelected = selectedMood === mood.id
              
              return (
                <motion.button
                  key={mood.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedMood(isSelected ? null : mood.id)}
                  className={`group relative p-6 md:p-8 rounded-sm border transition-all duration-300 text-left ${
                    isSelected 
                      ? "border-gold bg-gradient-to-br " + mood.activeGradient
                      : "border-border hover:border-gold/50 bg-gradient-to-br " + mood.gradient
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-4 transition-colors ${
                    isSelected ? "text-gold" : "text-muted-foreground group-hover:text-gold"
                  }`} />
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {mood.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {mood.description}
                  </p>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-4 right-4 w-3 h-3 bg-gold rounded-full"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* CTA */}
          {selectedMood && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-12"
            >
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-sm tracking-widest uppercase text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                Ver Fragancias de {moods.find(m => m.id === selectedMood)?.name}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
