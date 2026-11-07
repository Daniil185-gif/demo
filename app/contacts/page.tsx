import type { Metadata } from 'next'
import { PageHeader } from '@/components/section-heading'
import { ContactSection } from '@/components/sections/contact-section'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Телефон, адрес офиса и форма заявки на бесплатный замер.',
}

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Контакты"
        title="Свяжитесь с нами"
        description="Позвоните, напишите или оставьте заявку — перезвоним в течение 15 минут."
      />
      <ContactSection />
    </>
  )
}
