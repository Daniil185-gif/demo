'use client'

import { useState } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { contacts } from '@/lib/data'

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3.5 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 md:p-10">
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <h3 className="font-serif text-3xl">Заявка отправлена</h3>
        <p className="text-muted-foreground">Перезвоним в течение 15 минут, чтобы договориться о времени замера.</p>
        <button type="button" onClick={() => setSent(false)} className="text-sm font-semibold underline underline-offset-4">
          Отправить ещё одну
        </button>
      </div>
    )
  }

  return (
    <form
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 md:p-10"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <h3 className="font-serif text-3xl">Заявка на бесплатный замер</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Имя
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Как к вам обращаться" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+7 (___) ___-__-__"
            className={inputClass}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="text-sm font-medium">
          Вид ремонта
        </label>
        <select id="type" name="type" className={inputClass} defaultValue="capital">
          <option value="cosmetic">Косметический</option>
          <option value="capital">Капитальный</option>
          <option value="design">Дизайнерский</option>
          <option value="newbuild">В новостройке</option>
          <option value="bathroom">Ванная / санузел</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Комментарий
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Площадь, адрес, пожелания по срокам"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Отправить заявку
      </button>
      <p className="text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
      </p>
    </form>
  )
}

export function ContactDetails() {
  const items = [
    { icon: Phone, label: 'Телефон', value: contacts.phone, href: contacts.phoneHref },
    { icon: Mail, label: 'Почта', value: contacts.email, href: `mailto:${contacts.email}` },
    { icon: MapPin, label: 'Офис', value: contacts.address },
    { icon: Clock, label: 'Режим работы', value: contacts.hours },
  ]

  return (
    <ul className="flex flex-col">
      {items.map(({ icon: Icon, label, value, href }) => (
        <li key={label} className="flex items-start gap-5 border-b border-border py-6 first:pt-0">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            {href ? (
              <a href={href} className="font-serif text-2xl hover:text-primary">
                {value}
              </a>
            ) : (
              <p className="font-serif text-2xl">{value}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
