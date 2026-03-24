"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { products, type Product } from "@/lib/inventory"
import { ShoppingBag, Check, Truck, Search, ChevronLeft, ChevronRight, Shield } from "lucide-react"

const ITEMS_PER_PAGE = 12

type GenderFilter = 'all' | 'M' | 'W' | 'U'

export function ProductCatalog() {
  const { addItem } = useCart()
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState("")
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('all')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter products based on search and gender
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesGender = genderFilter === 'all' || product.gender === genderFilter
      const inStock = product.stock > 0
      return matchesSearch && matchesGender && inStock
    })
  }, [searchQuery, genderFilter])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Reset to page 1 when filters change
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleGenderFilter = (gender: GenderFilter) => {
    setGenderFilter(gender)
    setCurrentPage(1)
  }

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
    <section id="catalogo" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4">
            Colección Completa
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight text-balance">
            Catálogo de <span className="italic">Fragancias</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Más de {products.length} fragancias originales disponibles con envío local rápido
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-10 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar fragancias..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            />
          </div>

          {/* Gender Filter */}
          <div className="flex justify-center gap-2">
            {[
              { value: 'all', label: 'Todos' },
              { value: 'M', label: 'Hombre' },
              { value: 'W', label: 'Mujer' },
              { value: 'U', label: 'Unisex' },
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => handleGenderFilter(value as GenderFilter)}
                className={`px-6 py-2 text-sm tracking-wide transition-all rounded-sm ${
                  genderFilter === value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-center text-muted-foreground text-sm">
            {filteredProducts.length} fragancias encontradas
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              {/* Text-based luxury card */}
              <div className="p-6 space-y-4">
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
                    100% Original
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

                {/* Price and Stock */}
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-light text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <span className={`text-xs ${
                    product.stock > 50 ? 'text-green-600' : 
                    product.stock > 10 ? 'text-amber-600' : 'text-red-500'
                  }`}>
                    {product.stock > 50 ? 'En Stock' : 
                     product.stock > 10 ? `${product.stock} disponibles` : 
                     'Últimas unidades'}
                  </span>
                </div>

                {/* Local Shipping Badge */}
                <div className="flex items-center gap-2 text-accent">
                  <Truck className="w-4 h-4" />
                  <span className="text-xs tracking-wide">Envío Local Rápido (PR)</span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  disabled={addedItems.has(product.id)}
                  className={`w-full transition-all duration-300 ${
                    addedItems.has(product.id)
                      ? "bg-green-600 hover:bg-green-600 text-white"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
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
                      Añadir al Carrito
                    </>
                  )}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum: number
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-sm text-sm transition-all ${
                      currentPage === pageNum
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}
            </div>

            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Page Info */}
        <p className="text-center text-muted-foreground text-sm mt-4">
          Página {currentPage} de {totalPages}
        </p>
      </div>
    </section>
  )
}
