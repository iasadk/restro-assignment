import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "./language-selector"

export function Header() {
    return (
        <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                            <span className="text-lg font-bold text-primary-foreground">M</span>
                        </div>
                        <span className="text-xl font-semibold">Modern</span>
                    </Link>

                    <nav className="hidden gap-8 md:flex">
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Products
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Solutions
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Resources
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                            Sign In
                        </Button>
                        <Button size="sm">Get Started</Button>
                    </div> */}
                    <LanguageSelector />
                </div>
            </div>
        </header>
    )
}
