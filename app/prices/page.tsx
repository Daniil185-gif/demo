import type { Metadata } from 'next'
import { Container, PageHeader, SectionHeading } from '@/components/section-heading'
import { PriceTable, Tariffs } from '@/components/sections/prices'

export const metadata: Metadata = {
  title: 'Цены',
  description: 'Тарифы и прайс-лист на ремонтные работы. Фиксированная смета без доплат.',
}

export default function PricesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Цены"
        title="Честные цены, зафиксированные в договоре"
        description="Выберите тариф или посмотрите стоимость отдельных работ. Итоговую смету готовим после бесплатного замера."
      />
      <section className="py-16 md:py-24">
        <Container>
          <Tariffs />
        </Container>
      </section>
      <section className="bg-secondary/50 py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Прайс-лист" title="Стоимость отдельных работ" />
          <PriceTable />
        </Container>
      </section>
    </>
  )
}
