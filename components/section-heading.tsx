import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  link?: { href: string; label: string }
  className?: string
}

export function SectionHeading({ eyebrow, title, description, link, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between', className)}>
      <div className="flex max-w-2xl flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
        <h2 className="text-balance font-serif text-4xl leading-[1.05] md:text-5xl">{title}</h2>
        {description && <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      {link && (
        <Link
          href={link.href}
          className="group inline-flex items-center gap-2 self-start border-b border-foreground pb-1 text-sm font-semibold md:self-auto"
        >
          {link.label}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </div>
  )
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl text-balance font-serif text-5xl leading-[1.02] md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </section>
  )
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mx-auto max-w-7xl px-4 md:px-8', className)}>{children}</div>
}
