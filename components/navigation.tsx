'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link
          className={`link ${
            pathname === '/' ? 'active' : ''
          } text-2xl leading-6 p-3 text-gray-900 `}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`link ${
            pathname === '/about' ? 'active' : ''
          } text-2xl leading-6 p-3 text-gray-900 `}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`link ${
            pathname === '/testimonials' ? 'active' : ''
          } text-2xl leading-6 p-3 text-gray-900 `}
          href="/testimonials"
        >
          Testimonials
        </Link>
        <Link
          className={`link ${
            pathname === '/contact' ? 'active' : ''
          } text-2xl leading-6 p-3 text-gray-900 `}
          href="/contact"
        >
          Services
        </Link>
      </div>
    </nav>
  )
}
