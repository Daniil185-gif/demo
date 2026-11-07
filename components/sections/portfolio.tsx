import Image from 'next/image'
import { portfolio } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Container, SectionHeading } from '@/components/section-heading'

export function PortfolioGrid({ limit }: { limit?: number }) {
  const list = limit ? portfolio.slice(0, limit) : portfolio

  return (
    <ul className="grid gap-x-6 gap-y-10 md:grid-cols-6">
      {list.map((p, i) => (
        <li key={p.title} className={cn('group', i === 0 ? 'md:col-span-4' : 'md:col-span-2')}>
          <figure className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto md:h-[420px]">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes={i === 0 ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.type}</p>
              </div>
              <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs font-medium">{p.term}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}

export function PortfolioSection() {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Портфолио"
          title="Квартиры, которые мы уже сдали"
          link={{ href: '/portfolio', label: 'Все проекты' }}
        />
        <PortfolioGrid limit={2} />
      </Container>
    </section>
  )
}
