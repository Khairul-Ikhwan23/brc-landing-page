'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, DollarSign, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={process.env.NODE_ENV === 'production' ? '/brc-landing-page/assets/brccrew.jpg' : '/assets/brccrew.jpg'}
          alt="BRC Crew serving the community"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Serving Humanity, Saving Lives
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join Brunei Darussalam Red Crescent Society (BRC) in our mission to provide humanitarian aid, 
            emergency response, and community support across Brunei Darussalam.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSduyiv9lQ8zEV3bKR6q2_cqgSICVMhwuaR2EFcbB0EOlZUghQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              Volunteer Now
            </motion.a>
            
            <motion.a
              href="donate"
              className="btn-secondary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DollarSign className="w-5 h-5" />
              Donate
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn-secondary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
