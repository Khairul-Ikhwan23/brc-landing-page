'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const timeline = [
  {
    year: '1948',
    title: 'Brunei Red Cross Branch Established',
    description: 'The foundation of humanitarian work in Brunei begins with the establishment of the Red Cross branch.'
  },
  {
    year: '1990',
    title: 'Incorporated as Brunei Darussalam Red Crescent',
    description: 'Official incorporation as a national society under the name Brunei Darussalam Red Crescent.'
  },
  {
    year: '1996',
    title: 'Recognized by ICRC',
    description: 'Gained recognition from the International Committee of the Red Cross (ICRC).'
  },
  {
    year: '1997',
    title: 'Admitted into IFRC',
    description: 'Became the 170th National Society admitted into the International Federation of Red Cross and Red Crescent Societies (IFRC).'
  },
  {
    year: 'Today',
    title: 'Humanitarian Services Nationwide',
    description: 'Providing comprehensive humanitarian services across Brunei Darussalam with dedicated volunteers and staff.'
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-brc-light-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-brc-red mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For over 75 years, Brunei Darussalam Red Crescent Society (BRC) has been at the forefront of humanitarian 
            assistance, serving the people of Brunei Darussalam with dedication and compassion.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brc-red transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-brc-red rounded-full border-4 border-white transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-montserrat font-bold text-brc-red text-lg">
                        {item.year}
                      </span>
                      {index < timeline.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-brc-red" />
                      )}
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="history"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Read More About Our History
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
