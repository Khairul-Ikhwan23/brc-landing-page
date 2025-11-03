'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, Clock, Award } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    number: 77,
    suffix: ' years',
    label: 'In Action',
    description: 'Serving Brunei since 1948'
  },
  {
    icon: Users,
    number: 1000,
    suffix: '+',
    label: 'Volunteers',
    description: 'Dedicated community members'
  },
  {
    icon: Award,
    number: 5000,
    suffix: '+',
    label: 'Certified First Aiders',
    description: 'By 2025 target'
  }
]

function Counter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const currentCount = Math.floor(progress * end)
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brc-red">
      {count.toLocaleString()}{suffix ? ` ${suffix.trim()}` : ''}
    </span>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="section-padding bg-brc-light-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-brc-red mb-6">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Through decades of dedicated service, we&apos;ve made a lasting impact on 
            communities across Brunei Darussalam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-brc-red/10">
                    <stat.icon className="w-8 h-8 text-brc-red" />
                  </div>
                </div>
                
                <div className="mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                
                <h3 className="font-montserrat font-semibold text-xl mb-2 text-gray-800">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600">
                  {stat.description}
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
          <div className="bg-brc-red text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Join Us. Make a Difference Today.
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Every volunteer, every donation, every hour of service contributes to our mission 
              of serving humanity and saving lives across Brunei.
            </p>
            <a
              href="https://docs.google.com/forms/d/1YA6J6U6Zgx_r-TlTWa0d20CPJtG5TYnjuPwxbtMmCNo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-white text-brc-red hover:bg-gray-100"
            >
              <Users className="w-4 h-4" />
              Volunteer Form
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
