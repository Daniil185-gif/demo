import Link from 'next/link'
import { Check } from 'lucide-react'
import { priceGroups, tariffs } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Container, SectionHeading } from '@/components/section-heading'

export function Tariffs() {
  return (
    <ul className="grid gap-6 lg:grid-cols-3">
      {tariffs.map((t) => (
        <li
          key={t.name}
          className={cn(
            'relative flex flex-col gap-6 rounded-3xl border p-8',
            t.highlighted ? 'border-ink bg-ink text-ink-foreground' : 'border-border bg-card',
          )}
        >
          {t.highlighted && (
            <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Выбирают чаще
            </span>
          )}
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-2xl">{t.name}</h3>
            <p className={cn('text-sm', t.highlighted ? 'text-ink-foreground/70' : 'text-muted-foreground')}>
              {t.description}
            </p>
          </div>
          <p className="flex items-baseline gap-2">
            <span className="text-sm">от</span>
            <span className="font-serif text-5xl">{t.price}</span>
            <span className="text-sm">₽/м²</span>
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/calculator"
            className={cn(
              'mt-auto inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors',
              t.highlighted
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'border border-foreground/20 hover:bg-secondary',
            )}
          >
            Рассчитать мой ремонт
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function PriceTable() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {priceGroups.map((g) => (
        <div key={g.title}>
          <h3 className="mb-4 font-serif text-2xl">{g.title}</h3>
          <table className="w-full text-left text-sm">
            <thead className="sr-only">
              <tr>
                <th scope="col">Работа</th>
                <th scope="col">Единица</th>
                <th scope="col">Цена, ₽</th>
              </tr>
            </thead>
            <tbody>
              {g.rows.map(([name, unit, price]) => (
                <tr key={name} className="border-b border-border">
                  <td className="py-3.5 pr-4">{name}</td>
                  <td className="py-3.5 pr-4 text-muted-foreground">{unit}</td>
                  <td className="whitespace-nowrap py-3.5 text-right font-semibold">{price} ₽</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export function PricesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Цены"
          title="Прозрачные тарифы без скрытых платежей"
          description="Стоимость указана за работы. Материалы закупаем по ценам поставщиков без наценки."
          link={{ href: '/prices', label: 'Подробный прайс' }}
        />
        <Tariffs />
      </Container>
    </section>
  )
}
