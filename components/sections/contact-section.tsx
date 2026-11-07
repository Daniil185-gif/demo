import { Container } from '@/components/section-heading'
import { ContactDetails, ContactForm } from '@/components/sections/contacts'

export function ContactSection() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Контакты</span>
            <h2 className="text-balance font-serif text-4xl leading-[1.05] md:text-5xl">
              Приедем на замер бесплатно — в удобное вам время
            </h2>
          </div>
          <ContactDetails />
        </div>
        <ContactForm />
      </Container>
    </section>
  )
}
