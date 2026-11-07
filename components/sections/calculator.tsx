'use client'

import Link from 'next/link'
import { useId, useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const repairTypes = [
  { id: 'cosmetic', label: 'Косметический', rate: 6500 },
  { id: 'capital', label: 'Капитальный', rate: 14000 },
  { id: 'design', label: 'Дизайнерский', rate: 22000 },
]

const propertyTypes = [
  { id: 'secondary', label: 'Вторичное жильё', factor: 1.1 },
  { id: 'new', label: 'Новостройка', factor: 1 },
]

const extras = [
  { id: 'demolition', label: 'Демонтаж старой отделки', perM2: 900 },
  { id: 'heated', label: 'Тёплый пол', perM2: 700 },
  { id: 'ceiling', label: 'Натяжные потолки', perM2: 850 },
  { id: 'project', label: 'Дизайн-проект', perM2: 2500 },
  { id: 'materials', label: 'Закупка и доставка материалов', perM2: 600 },
]

const formatter = new Intl.NumberFormat('ru-RU')

function roundTo(value: number, step: number) {
  return Math.round(value / step) * step
}

export function Calculator({ compact = false }: { compact?: boolean }) {
  const id = useId()
  const [area, setArea] = useState(60)
  const [rooms, setRooms] = useState(2)
  const [repair, setRepair] = useState('capital')
  const [property, setProperty] = useState('secondary')
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['demolition'])

  const result = useMemo(() => {
    const rate = repairTypes.find((r) => r.id === repair)!.rate
    const factor = propertyTypes.find((p) => p.id === property)!.factor
    const extrasPerM2 = extras.filter((e) => selectedExtras.includes(e.id)).reduce((sum, e) => sum + e.perM2, 0)
    const roomsAdd = Math.max(0, rooms - 1) * 25000
    const total = (area * rate + area * extrasPerM2) * factor + roomsAdd
    const weeks = Math.ceil((area / (repair === 'cosmetic' ? 20 : repair === 'capital' ? 9 : 6)) + 2)
    return {
      min: roundTo(total * 0.92, 10000),
      max: roundTo(total * 1.08, 10000),
      weeks,
    }
  }, [area, rooms, repair, property, selectedExtras])

  const toggleExtra = (extraId: string) =>
    setSelectedExtras((prev) => (prev.includes(extraId) ? prev.filter((x) => x !== extraId) : [...prev, extraId]))

  return (
    <div className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[1.4fr_1fr]">
      <form className="flex flex-col gap-10 p-6 md:p-10" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <label htmlFor={`${id}-area`} className="font-semibold">
              Площадь квартиры
            </label>
            <output htmlFor={`${id}-area`} className="font-serif text-3xl">
              {area} м²
            </output>
          </div>
          <input
            id={`${id}-area`}
            type="range"
            min={15}
            max={250}
            step={1}
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="h-2 w-full cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>15 м²</span>
            <span>250 м²</span>
          </div>
        </div>

        <fieldset className="flex flex-col gap-4">
          <legend className="mb-4 font-semibold">Тип ремонта</legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {repairTypes.map((r) => (
              <label
                key={r.id}
                className={cn(
                  'flex cursor-pointer flex-col gap-1 rounded-2xl border p-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring',
                  repair === r.id ? 'border-primary bg-primary/5' : 'border-border hover:border-foreground/30',
                )}
              >
                <input
                  type="radio"
                  name={`${id}-repair`}
                  value={r.id}
                  checked={repair === r.id}
                  onChange={() => setRepair(r.id)}
                  className="sr-only"
                />
                <span className="font-semibold">{r.label}</span>
                <span className="text-xs text-muted-foreground">от {formatter.format(r.rate)} ₽/м²</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className={cn('grid gap-10', !compact && 'md:grid-cols-2')}>
          <fieldset>
            <legend className="mb-4 font-semibold">Тип жилья</legend>
            <div className="flex gap-2 rounded-full bg-secondary p-1">
              {propertyTypes.map((p) => (
                <label
                  key={p.id}
                  className={cn(
                    'flex-1 cursor-pointer rounded-full px-4 py-2.5 text-center text-sm font-medium transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring',
                    property === p.id ? 'bg-card shadow-sm' : 'text-muted-foreground',
                  )}
                >
                  <input
                    type="radio"
                    name={`${id}-property`}
                    value={p.id}
                    checked={property === p.id}
                    onChange={() => setProperty(p.id)}
                    className="sr-only"
                  />
                  {p.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-4 font-semibold">Количество комнат</legend>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <label
                  key={n}
                  className={cn(
                    'flex size-11 cursor-pointer items-center justify-center rounded-full border text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring',
                    rooms === n ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-foreground/30',
                  )}
                >
                  <input
                    type="radio"
                    name={`${id}-rooms`}
                    value={n}
                    checked={rooms === n}
                    onChange={() => setRooms(n)}
                    className="sr-only"
                  />
                  {n === 5 ? '5+' : n}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {!compact && (
          <fieldset>
            <legend className="mb-4 font-semibold">Дополнительно</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {extras.map((e) => (
                <label
                  key={e.id}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-foreground/30 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                >
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(e.id)}
                    onChange={() => toggleExtra(e.id)}
                    className="size-4 accent-[var(--primary)]"
                  />
                  {e.label}
                </label>
              ))}
            </div>
          </fieldset>
        )}
      </form>

      <aside
        aria-live="polite"
        className="flex flex-col justify-between gap-10 bg-ink p-6 text-ink-foreground md:p-10"
      >
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
              Примерная стоимость работ
            </p>
            <p className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {formatter.format(result.min)} — {formatter.format(result.max)} ₽
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-ink-foreground/10 pt-8">
            <div>
              <dt className="text-xs text-ink-foreground/50">Срок</dt>
              <dd className="mt-1 font-serif text-2xl">~{result.weeks} нед.</dd>
            </div>
            <div>
              <dt className="text-xs text-ink-foreground/50">За м²</dt>
              <dd className="mt-1 font-serif text-2xl">
                ~{formatter.format(roundTo((result.min + result.max) / 2 / area, 100))} ₽
              </dd>
            </div>
          </dl>
          <p className="text-sm leading-relaxed text-ink-foreground/60">
            Расчёт ориентировочный. Точную смету подготовим после бесплатного замера — и зафиксируем её в договоре.
          </p>
        </div>
        <Link
          href="/contacts"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Заказать бесплатный замер
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </aside>
    </div>
  )
}
