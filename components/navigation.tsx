"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("projects"), path: "/projects" },
    { name: t("inspiration"), path: "/blog" },
    { name: t("about"), path: "/about" },
  ]

  const languages = [
    { code: "es" as const, name: "ES", flag: "🇪🇸" },
    { code: "en" as const, name: "EN", flag: "🇬🇧" },
    { code: "ca" as const, name: "CAT", flag: "🏴󠁥󠁳󠁣󠁴󠁿" },
  ]

  const handleLanguageChange = (langCode: "es" | "en" | "ca") => {
    setLanguage(langCode)
    setIsLanguageOpen(false)
  }

  return (
    <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary glitch" data-text="NEONOIA">
            NEONOIA
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-8 mr-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`command-prompt hover:text-primary transition-colors ${
                      pathname === item.path ? "text-primary" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Switcher Dropdown - Desktop */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-white hover:text-primary transition-colors px-3 py-2 rounded-md border border-border hover:border-primary/50"
              >
                <span>{languages.find((lang) => lang.code === language)?.flag}</span>
                <span>{languages.find((lang) => lang.code === language)?.name}</span>
                <ChevronDown size={14} className={`transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-md shadow-lg z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center space-x-2 w-full text-left px-4 py-3 hover:bg-secondary transition-colors ${
                        language === lang.code ? "text-primary bg-secondary/50" : "text-white"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`command-prompt block hover:text-primary transition-colors ${
                      pathname === item.path ? "text-primary" : "text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Mobile language switcher */}
              <li className="pt-2 border-t border-border/40">
                <span className="block text-muted-foreground mb-2">Idioma:</span>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md border transition-colors ${
                        language === lang.code
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-secondary text-secondary-foreground border-border hover:border-primary/50"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
