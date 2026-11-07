import type { Metadata } from 'next'
import { Container, PageHeader } from '@/components/section-heading'
import { PortfolioGrid } from '@/components/sections/portfolio'

export const metadata: Metadata = {
  title: 'Портфолио',
  description: 'Фото реализованных проектов ремонта квартир студии «Основа».',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Портфолио"
        title="Реальные квартиры наших клиентов"
        description="Все фотографии сделаны после сдачи объекта. Покажем любой проект вживую — по договорённости с владельцами."
      />
      <section className="py-16 md:py-24">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>
    </>
  )
}
