'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
]

export function LanguageSelector() {
    const router = useRouter()
    const pathname = usePathname()

    const currentLocale = pathname.split('/')[1] || 'en'

    const onLanguageChange = (lang: string) => {
        const segments = pathname.split('/')
        segments[1] = lang
        router.push(segments.join('/'))
    }

    return (
        <Select value={currentLocale} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-28">
                <SelectValue />
            </SelectTrigger>

            <SelectContent>
                {LANGUAGES.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                        {lang.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
