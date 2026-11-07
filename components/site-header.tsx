'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { contacts, navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:h-20 md:px-8">
        <Logo />

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                      active ? 'text-primary' : 'text-foreground/80',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contacts.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold md:flex"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {contacts.phone}
          </a>
          <Link
            href="/calculator"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Рассчитать ремонт
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Мобильная навигация" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={cn(
                    'block border-b border-border/60 py-3 font-serif text-2xl',
                    pathname === link.href && 'text-primary',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <a href={contacts.phoneHref} className="flex items-center gap-2 font-semibold">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {contacts.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
