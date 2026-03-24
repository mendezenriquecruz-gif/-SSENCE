"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Mail } from "lucide-react"

const footerLinks = {
  coleccion: [
    { name: "Novedades", href: "#" },
    { name: "Bestsellers", href: "#" },
    { name: "Sets de Regalo", href: "#" },
    { name: "Muestras", href: "#" },
  ],
  servicio: [
    { name: "Mi Cuenta", href: "#" },
    { name: "Envíos", href: "#" },
    { name: "Devoluciones", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  marca: [
    { name: "Nuestra Historia", href: "#" },
    { name: "Ingredientes", href: "#" },
    { name: "Sostenibilidad", href: "#" },
    { name: "Contacto", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl tracking-[0.2em] uppercase font-light text-foreground mb-4">
              Éssence
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Fragancias de nicho artesanales, elaboradas con ingredientes excepcionales 
              para quienes buscan trascender lo ordinario.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-sm text-foreground mb-3 tracking-wider uppercase">
                Únete a nuestra lista
              </p>
              <div className="flex gap-2 max-w-sm">
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="bg-muted border-border"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Recibe 10% de descuento en tu primera compra
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-foreground mb-4">
              Colección
            </h3>
            <ul className="space-y-3">
              {footerLinks.coleccion.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-foreground mb-4">
              Servicio
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicio.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-foreground mb-4">
              Marca
            </h3>
            <ul className="space-y-3">
              {footerLinks.marca.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Éssence. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
