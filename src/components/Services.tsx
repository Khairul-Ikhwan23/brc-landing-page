'use client'

import { motion } from 'framer-motion'
import { Heart, Brain, Shield, Users, Zap, Stethoscope } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'First Aid & Medical Coverage',
    description: 'Providing essential first aid training and medical coverage for events.',
    color: 'text-brc-red'
  },
  {
    icon: Brain,
    title: 'Psychological Support & Mental Health',
    description: 'Offering mental health support and psychological assistance.',
    color: 'text-brc-blue'
  },
  {
    icon: Shield,
    title: 'Wellness & Road Safety Programs',
    description: 'Promoting wellness initiatives and road safety awareness.',
    color: 'text-brc-green'
  },
  {
    icon: Heart,
    title: 'BRC Care',
    description: 'Providing humanitarian aid, food assistance, and elderly care.',
    color: 'text-brc-red'
  },
  {
    icon: Zap,
    title: 'Emergency Response (CERT)',
    description: 'Community Emergency Response Team for disaster relief.',
    color: 'text-brc-blue'
  },
  {
    icon: Users,
    title: 'Volunteer Training',
    description: 'Comprehensive training programs for volunteers.',
    color: 'text-brc-green'
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-brc-red mb-6">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of humanitarian services addresses the diverse needs 
            of our community, from emergency response to long-term support programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-brc-red">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-100 group-hover:bg-brc-red/10 transition-colors duration-300">
                    <service.icon className={`w-6 h-6 ${service.color} group-hover:text-brc-red transition-colors duration-300`} />
                  </div>
                </div>
                
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-gray-800 group-hover:text-brc-red transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-brc-red text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join our team of dedicated volunteers and help us serve our community.
            </p>
            <a
              href="https://docs.google.com/forms/d/1YA6J6U6Zgx_r-TlTWa0d20CPJtG5TYnjuPwxbtMmCNo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-white text-brc-red hover:bg-gray-100"
            >
              <Heart className="w-4 h-4" />
              Join Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
