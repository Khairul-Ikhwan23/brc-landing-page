import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-brc-light-gray">
      <div className="container-custom py-16 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brc-red hover:text-red-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-brc-red mb-6">
            Our History
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey of humanitarian service spanning over seven decades, 
            dedicated to serving the people of Brunei Darussalam.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-brc-red rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-montserrat font-bold text-2xl text-brc-red mb-4">1948</h3>
                <h4 className="font-semibold text-xl mb-3">Brunei Red Cross Branch Established</h4>
                <p className="text-gray-600 leading-relaxed">
                  The foundation of humanitarian work in Brunei begins with the establishment 
                  of the Red Cross branch. This marked the beginning of organized humanitarian 
                  assistance in the country, providing essential services to communities in need.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-brc-red rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-montserrat font-bold text-2xl text-brc-red mb-4">1990</h3>
                <h4 className="font-semibold text-xl mb-3">Incorporated as Brunei Darussalam Red Crescent</h4>
                <p className="text-gray-600 leading-relaxed">
                  Official incorporation as a national society under the name Brunei Darussalam 
                  Red Crescent. This formal recognition allowed the organization to expand its 
                  services and establish a stronger presence in the community.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-brc-red rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-montserrat font-bold text-2xl text-brc-red mb-4">1996</h3>
                <h4 className="font-semibold text-xl mb-3">Recognized by ICRC</h4>
                <p className="text-gray-600 leading-relaxed">
                  Gained recognition from the International Committee of the Red Cross (ICRC), 
                  the world&apos;s leading humanitarian organization. This recognition validated 
                  our commitment to international humanitarian standards and principles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-brc-red rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-montserrat font-bold text-2xl text-brc-red mb-4">1997</h3>
                <h4 className="font-semibold text-xl mb-3">Admitted into IFRC</h4>
                <p className="text-gray-600 leading-relaxed">
                  Became the 170th National Society admitted into the International Federation 
                  of Red Cross and Red Crescent Societies (IFRC). This membership connected 
                  us to a global network of humanitarian organizations and resources.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-brc-red rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-montserrat font-bold text-2xl text-brc-red mb-4">Today</h3>
                <h4 className="font-semibold text-xl mb-3">Humanitarian Services Nationwide</h4>
                <p className="text-gray-600 leading-relaxed">
                  Providing comprehensive humanitarian services across Brunei Darussalam 
                  with dedicated volunteers and staff. Our services include first aid training, 
                  emergency response, psychological support, wellness programs, and community 
                  care initiatives. We continue to grow and adapt to meet the evolving needs 
                  of our community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-brc-red text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Be Part of Our Future
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join us in continuing this legacy of humanitarian service and make a difference 
              in the lives of people across Brunei.
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSduyiv9lQ8zEV3bKR6q2_cqgSICVMhwuaR2EFcbB0EOlZUghQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-white text-brc-red hover:bg-gray-100 inline-flex items-center gap-2"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
