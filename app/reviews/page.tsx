import type { Metadata } from 'next'
import { Container, PageHeader } from '@/components/section-heading'
import { ReviewsGrid } from '@/components/sections/reviews'

export const metadata: Metadata = {
  title: 'Отзывы',
  description: 'Отзывы клиентов о ремонте квартир от студии «Основа».',
}

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Отзывы"
        title="Что говорят наши клиенты"
        description="Средняя оценка 4,9 из 5 по 312 отзывам на Яндекс Картах и Профи.ру."
      />
      <section className="py-16 md:py-24">
        <Container>
          <ReviewsGrid />
        </Container>
      </section>
    </>
  )
}
