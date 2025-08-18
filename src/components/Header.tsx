'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Heart } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/BRCLOGO.jpg"
              alt="Brunei Red Crescent Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-3 font-montserrat font-bold text-lg text-brc-red">
              BRC
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-brc-red transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-brc-red transition-colors">
              Services
            </a>
            <a href="#impact" className="text-gray-700 hover:text-brc-red transition-colors">
              Impact
            </a>
            <a href="#contact" className="text-gray-700 hover:text-brc-red transition-colors">
              Contact
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSduyiv9lQ8zEV3bKR6q2_cqgSICVMhwuaR2EFcbB0EOlZUghQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Heart className="w-4 h-4" />
              Volunteer
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-brc-red transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-4">
              <a
                href="#about"
                className="block text-gray-700 hover:text-brc-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block text-gray-700 hover:text-brc-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#impact"
                className="block text-gray-700 hover:text-brc-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-brc-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSduyiv9lQ8zEV3bKR6q2_cqgSICVMhwuaR2EFcbB0EOlZUghQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-4 h-4" />
                Volunteer
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
