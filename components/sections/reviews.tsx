import { Star } from 'lucide-react'
import { reviews } from '@/lib/data'
import { Container, SectionHeading } from '@/components/section-heading'

export function ReviewsGrid({ limit }: { limit?: number }) {
  const list = limit ? reviews.slice(0, limit) : reviews

  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((r) => (
        <li key={r.name} className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-8">
          <div className="flex gap-1" role="img" aria-label={`Оценка ${r.rating} из 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                aria-hidden="true"
                className={i < r.rating ? 'size-4 fill-primary text-primary' : 'size-4 text-border'}
              />
            ))}
          </div>
          <blockquote className="text-pretty font-serif text-xl leading-snug">
            {'«'}
            {r.text}
            {'»'}
          </blockquote>
          <footer className="mt-auto flex items-center gap-4 border-t border-border pt-6">
            <span
              aria-hidden="true"
              className="flex size-11 items-center justify-center rounded-full bg-secondary font-semibold"
            >
              {r.name.charAt(0)}
            </span>
            <div>
              <p className="font-semibold">{r.name}</p>
              <p className="text-sm text-muted-foreground">{r.project}</p>
            </div>
          </footer>
        </li>
      ))}
    </ul>
  )
}

export function ReviewsSection() {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Отзывы"
          title="Нам доверяют ключи от квартир"
          description="Средняя оценка 4,9 по 312 отзывам на Яндекс Картах и Профи.ру."
          link={{ href: '/reviews', label: 'Все отзывы' }}
        />
        <ReviewsGrid limit={3} />
      </Container>
    </section>
  )
}
