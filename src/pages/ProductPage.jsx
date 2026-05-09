import HeroProduct from '../components/product/HeroProduct'
import UniversityCarousel from '../components/product/UniversityCarousel'
import FeatureJourney from '../components/product/FeatureJourney'
import HowItWorks from '../components/product/HowItWorks'
import Testimonials from '../components/product/Testimonials'
import FAQ from '../components/product/FAQ'
import FinalCTA from '../components/product/FinalCTA'

export default function ProductPage() {
  return (
    <>
      <HeroProduct />
      <UniversityCarousel />
      <FeatureJourney />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
