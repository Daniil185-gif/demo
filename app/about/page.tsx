import type { Metadata } from 'next'
import { Award, FileCheck2, HardHat, Wallet } from 'lucide-react'
import { Container, PageHeader, SectionHeading } from '@/components/section-heading'
import { AboutIntro, ProcessSteps } from '@/components/sections/about'

export const metadata: Metadata = {
  title: 'О компании',
  description: 'Студия ремонта «Основа»: 12 лет опыта, 480+ квартир, собственная команда мастеров.',
}

const values = [
  { icon: FileCheck2, title: 'Работа по договору', text: 'Сроки, смета и гарантия прописаны в договоре и не меняются.' },
  { icon: HardHat, title: 'Штатные мастера', text: 'Без субподрядчиков: каждый специалист проходит аттестацию.' },
  { icon: Wallet, title: 'Поэтапная оплата', text: 'Платите только за выполненный и принятый этап работ.' },
  { icon: Award, title: 'Гарантия до 5 лет', text: 'Бесплатно устраняем любые недочёты в гарантийный срок.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="О компании"
        title="Делаем ремонт так, как сделали бы для себя"
        description="«Основа» — это команда из 60 мастеров, прорабов и дизайнеров, которая с 2014 года превращает квартиры в дома."
      />
      <section className="py-16 md:py-24">
        <Container>
          <AboutIntro showLink={false} />
        </Container>
      </section>
      <section className="bg-secondary/50 py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Принципы" title="Почему нам доверяют" />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ProcessSteps />
    </>
  )
}
