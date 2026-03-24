"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingBag, Search, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Colección", href: "#coleccion" },
  { name: "Descubrimiento", href: "#descubrimiento" },
  { name: "Nuestra Historia", href: "#historia" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="relative z-10">
              <h1 className={`text-2xl tracking-[0.2em] uppercase font-light transition-colors ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}>
                Éssence
              </h1>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wider uppercase transition-colors hover:text-gold ${
                    isScrolled ? "text-foreground" : "text-cream/80"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                className={`p-2 transition-colors hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-cream"
                }`}
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                className={`p-2 transition-colors hover:text-gold hidden sm:block ${
                  isScrolled ? "text-foreground" : "text-cream"
                }`}
                aria-label="Mi cuenta"
              >
                <User className="w-5 h-5" />
              </button>
              <button 
                className={`p-2 transition-colors hover:text-gold relative ${
                  isScrolled ? "text-foreground" : "text-cream"
                }`}
                aria-label="Carrito"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-primary text-xs flex items-center justify-center rounded-full">
                  0
                </span>
              </button>

              {/* Mobile menu toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 md:hidden transition-colors ${
                  isScrolled ? "text-foreground" : "text-cream"
                }`}
                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-primary md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-cream tracking-wider uppercase hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="mt-8 bg-gold text-primary hover:bg-gold/90 px-10 py-6 tracking-widest uppercase"
              >
                Comenzar Quiz
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
