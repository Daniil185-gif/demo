import type { Metadata } from 'next'
import { Container, PageHeader } from '@/components/section-heading'
import { ServicesGrid } from '@/components/sections/services'
import { ProcessSteps } from '@/components/sections/about'

export const metadata: Metadata = {
  title: 'Услуги',
  description: 'Косметический, капитальный и дизайнерский ремонт квартир, ремонт в новостройках, ванных и кухонь.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Услуги"
        title="Ремонт любой сложности — одной командой"
        description="Выполняем весь цикл работ: от демонтажа и инженерии до чистовой отделки и комплектации мебелью."
      />
      <section className="py-16 md:py-24">
        <Container>
          <ServicesGrid detailed />
        </Container>
      </section>
      <ProcessSteps />
    </>
  )
}
