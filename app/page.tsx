import { Hero } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services'
import { PortfolioSection } from '@/components/sections/portfolio'
import { ProcessSteps, AboutSection } from '@/components/sections/about'
import { PricesSection } from '@/components/sections/prices'
import { Calculator } from '@/components/sections/calculator'
import { ReviewsSection } from '@/components/sections/reviews'
import { ContactSection } from '@/components/sections/contact-section'
import { Container, SectionHeading } from '@/components/section-heading'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <PricesSection />
      <ProcessSteps />
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Калькулятор"
            title="Узнайте примерную стоимость за минуту"
            link={{ href: '/calculator', label: 'Расширенный расчёт' }}
          />
          <Calculator compact />
        </Container>
      </section>
      <ReviewsSection />
      <AboutSection />
      <div className="border-t border-border">
        <ContactSection />
      </div>
    </>
  )
}
