'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Brunei Red Crescent Society, Bandar Seri Begawan, Brunei Darussalam',
    href: null
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+673 123 4567',
    href: 'tel:+6731234567'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'admin.inquiry@bruneiredcrescent.com',
    href: 'mailto:admin.inquiry@bruneiredcrescent.com'
  }
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' }
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to join our mission? Have questions about our services? 
            We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat font-semibold text-2xl mb-8 text-brc-red">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-brc-red/20">
                    <info.icon className="w-6 h-6 text-brc-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-800 hover:bg-brc-red transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-8 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">
                Interactive map will be embedded here
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Google Maps integration
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 Brunei Red Crescent Society. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
