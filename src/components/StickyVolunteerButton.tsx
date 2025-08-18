'use client'

import { Heart } from 'lucide-react'

export default function StickyVolunteerButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:hidden">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSduyiv9lQ8zEV3bKR6q2_cqgSICVMhwuaR2EFcbB0EOlZUghQ/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brc-red text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
        aria-label="Volunteer Now"
      >
        <Heart className="w-6 h-6" />
      </a>
    </div>
  )
}
