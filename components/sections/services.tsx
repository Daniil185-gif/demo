import { Check } from 'lucide-react'
import { services } from '@/lib/data'
import { Container, SectionHeading } from '@/components/section-heading'

export function ServicesGrid({ limit, detailed = false }: { limit?: number; detailed?: boolean }) {
  const list = limit ? services.slice(0, limit) : services

  return (
    <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <li key={s.id} id={s.id} className="group flex flex-col gap-5 bg-card p-8 transition-colors hover:bg-secondary/60">
          <div className="flex items-start justify-between">
            <span className="font-serif text-sm text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{s.term}</span>
          </div>
          <h3 className="font-serif text-2xl leading-tight">{s.title}</h3>
          <p className="leading-relaxed text-muted-foreground">{s.description}</p>
          {detailed && (
            <ul className="flex flex-col gap-2 text-sm">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-auto border-t border-border pt-5 font-semibold">{s.price}</p>
        </li>
      ))}
    </ul>
  )
}

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Услуги"
          title="Любой ремонт — от косметики до проекта мечты"
          description="Работаем со вторичным жильём и новостройками. Все виды работ выполняют штатные мастера."
          link={{ href: '/services', label: 'Все услуги' }}
        />
        <ServicesGrid limit={3} />
      </Container>
    </section>
  )
}
