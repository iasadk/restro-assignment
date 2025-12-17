import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-border/40 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="mb-4 font-semibold">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Security
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Enterprise
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="transition-colors hover:text-foreground">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    API Reference
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Guides
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="transition-colors hover:text-foreground">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 Modern. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
