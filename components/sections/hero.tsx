import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { stats } from '@/lib/data'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 md:px-8 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
        <div className="flex flex-col justify-center gap-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            Бесплатный замер на этой неделе
          </span>
          <h1 className="text-balance font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Ремонт квартиры, <em className="text-primary">который радует</em> годами
          </h1>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Делаем ремонт под ключ по фиксированной смете: от черновых работ до расстановки мебели. Вы получаете
            готовую квартиру — мы берём на себя всё остальное.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/calculator"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Рассчитать стоимость
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-4 font-semibold transition-colors hover:bg-secondary"
            >
              Смотреть работы
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs leading-snug text-muted-foreground">{s.label}</dt>
                <dd className="order-1 font-serif text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[620px]">
            <Image
              src="/images/hero.png"
              alt="Светлая гостиная после ремонта с дубовым паркетом и большим окном"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl bg-card/95 p-4 shadow-lg backdrop-blur sm:left-auto sm:max-w-xs">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <p className="text-sm leading-snug">
              <strong className="block font-semibold">Цена фиксируется в договоре</strong>
              <span className="text-muted-foreground">Никаких доплат в процессе ремонта</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
