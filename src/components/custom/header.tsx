'use client'

import Link from 'next/link'
import { LanguageSelector } from './language-selector'
import { useTranslations } from 'next-intl'

export function Header() {
    const t = useTranslations('header')

    return (
        <header className="border-b border-border/40 bg-background/95 backdrop-blur">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                            <span className="text-lg font-bold text-primary-foreground">M</span>
                        </div>
                        <span className="text-xl font-semibold">
                            {t('brand')}
                        </span>
                    </Link>

                    <nav className="hidden gap-8 md:flex">
                        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            {t('products')}
                        </Link>
                        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            {t('solutions')}
                        </Link>
                        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            {t('resources')}
                        </Link>
                        <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            {t('contact')}
                        </Link>
                    </nav>

                    <LanguageSelector />
                </div>
            </div>
        </header>
    )
}
