import Link from 'next/link'
import { contacts, navLinks } from '@/lib/data'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            Ремонт квартир под ключ в Москве и Подмосковье. Фиксированная смета, личный прораб и гарантия до 5 лет.
          </p>
        </div>
        <nav aria-label="Навигация в подвале">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">Разделы</h2>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink-foreground/80 hover:text-ink-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">Контакты</h2>
          <address className="flex flex-col gap-2 text-sm not-italic text-ink-foreground/80">
            <a href={contacts.phoneHref} className="font-serif text-2xl text-ink-foreground">
              {contacts.phone}
            </a>
            <a href={`mailto:${contacts.email}`} className="hover:text-ink-foreground">
              {contacts.email}
            </a>
            <span>{contacts.address}</span>
            <span>{contacts.hours}</span>
          </address>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-ink-foreground/50 md:flex-row md:justify-between md:px-8">
          <span>© 2026 ООО «Основа». Все права защищены.</span>
          <span>Не является публичной офертой</span>
        </div>
      </div>
    </footer>
  )
}
