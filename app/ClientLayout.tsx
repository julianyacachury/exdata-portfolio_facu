"use client"

import type React from "react"

import { Inter } from "next/font/google"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

const inter = Inter({ subsets: ["latin"] })

function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.team"), href: "/team" },
    { name: t("nav.technologies"), href: "/technologies" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-brand-blue"></div>
          <span className="text-xl font-bold">Exdata</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-brand-blue"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <LanguageSelector />

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-brand-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded bg-brand-mint"></div>
              <span className="text-xl font-bold">Exdata</span>
            </div>
            <p className="text-slate-400">Transforming data into intelligent solutions through physics-powered AI.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("nav.services")}</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Advanced Analytics
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Data Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Predictive Modeling
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  {t("nav.team")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>exdata.co@gmail.com</li>
              <li>+54 9 11 6999-3080</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Exdata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <ScrollToTopButton />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
