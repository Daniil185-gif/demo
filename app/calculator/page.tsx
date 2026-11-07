import type { Metadata } from 'next'
import { Container, PageHeader } from '@/components/section-heading'
import { Calculator } from '@/components/sections/calculator'

export const metadata: Metadata = {
  title: 'Калькулятор стоимости ремонта',
  description: 'Рассчитайте примерную стоимость и срок ремонта квартиры онлайн.',
}

export default function CalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Калькулятор"
        title="Сколько стоит ваш ремонт"
        description="Укажите параметры квартиры — и сразу увидите ориентировочную стоимость работ и срок."
      />
      <section className="py-16 md:py-24">
        <Container>
          <Calculator />
        </Container>
      </section>
    </>
  )
}
