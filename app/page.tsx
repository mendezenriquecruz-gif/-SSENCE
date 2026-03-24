import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { OlfactoryQuiz } from "@/components/olfactory-quiz"
import { FeaturedFragrances } from "@/components/featured-fragrances"
import { MoodSearch } from "@/components/mood-search"
import { DiscoverySet } from "@/components/discovery-set"
import { SensoryReviews } from "@/components/sensory-reviews"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <OlfactoryQuiz />
      <FeaturedFragrances />
      <MoodSearch />
      <DiscoverySet />
      <SensoryReviews />
      <Footer />
    </main>
  )
}
