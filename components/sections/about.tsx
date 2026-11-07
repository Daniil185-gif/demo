import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { stats, steps } from '@/lib/data'
import { Container, SectionHeading } from '@/components/section-heading'

export function AboutIntro({ showLink = true }: { showLink?: boolean }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src="/images/team.png"
          alt="Мастера компании обсуждают план ремонта на объекте"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-6">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">О компании</span>
        <h2 className="text-balance font-serif text-4xl leading-[1.05] md:text-5xl">
          Своя команда мастеров, а не цепочка субподрядчиков
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          С 2014 года мы отремонтировали более 480 квартир. В штате — 60 мастеров, прорабы, дизайнеры и
          снабженцы. Поэтому мы отвечаем за результат целиком и даём гарантию по договору.
        </p>
        <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="text-sm text-muted-foreground">{s.label}</dt>
              <dd className="font-serif text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        {showLink && (
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 self-start border-b border-foreground pb-1 text-sm font-semibold"
          >
            Подробнее о нас
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>
    </div>
  )
}

export function ProcessSteps() {
  return (
    <section className="bg-ink py-20 text-ink-foreground md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Как мы работаем"
          title="Четыре шага до новой квартиры"
          className="[&_p]:text-ink-foreground/60"
        />
        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-4 border-t border-ink-foreground/20 pt-6">
              <span className="font-serif text-5xl text-primary">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="leading-relaxed text-ink-foreground/60">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <AboutIntro />
      </Container>
    </section>
  )
}
