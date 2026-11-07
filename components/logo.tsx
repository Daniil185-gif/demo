import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)} aria-label="Основа — на главную">
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center rounded-lg bg-primary font-serif text-lg font-bold text-primary-foreground"
      >
        О
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-tight">Основа</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-70">ремонт квартир</span>
      </span>
    </Link>
  )
}
