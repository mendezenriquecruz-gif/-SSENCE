"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function OlfactoryQuiz() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold tracking-[0.3em] uppercase text-xs">
                Experiencia Personalizada
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-light text-foreground leading-tight">
                Tu Firma
                <br />
                <span className="italic">Olfativa</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Cada persona lleva consigo una historia única. Nuestro quiz de personalidad 
                descifra tus preferencias más profundas para revelarte la fragancia que 
                resonará con tu esencia.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Responde preguntas sobre tus recuerdos favoritos, los lugares que te inspiran 
                y las emociones que deseas evocar. En solo 3 minutos, descubrirás tu aroma ideal.
              </p>
              <Button 
                size="lg"
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 tracking-widest uppercase text-sm transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Comenzar el Quiz
              </Button>
            </motion.div>

            {/* Right side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-muted rounded-sm overflow-hidden relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Concentric circles */}
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border border-gold/20 rounded-full"
                        style={{
                          width: `${100 + i * 60}px`,
                          height: `${100 + i * 60}px`,
                          left: `${-30 * i}px`,
                          top: `${-30 * i}px`,
                        }}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                      />
                    ))}
                    
                    {/* Center icon */}
                    <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-gold" />
                    </div>
                  </div>
                </div>

                {/* Question preview cards */}
                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  {["¿Qué paisaje te inspira?", "¿Tu momento favorito del día?", "¿Qué textura te atrae?"].map((question, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="bg-card/90 backdrop-blur-sm px-4 py-3 rounded-sm border border-border"
                    >
                      <p className="text-sm text-foreground">{question}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
