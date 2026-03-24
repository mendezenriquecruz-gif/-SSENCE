import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductCatalog } from "@/components/product-catalog"
import { OlfactoryQuiz } from "@/components/olfactory-quiz"
import { FeaturedFragrances } from "@/components/featured-fragrances"
import { MoodSearch } from "@/components/mood-search"
import { DiscoverySet } from "@/components/discovery-set"
import { SensoryReviews } from "@/components/sensory-reviews"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductCatalog />
      <OlfactoryQuiz />
      <FeaturedFragrances />
      <MoodSearch />
      <DiscoverySet />
      <SensoryReviews />
      <Footer />
      <Toaster />
    </main>
  )
}
