import Link from 'next/link'
import { ArrowLeft, Heart, DollarSign, CreditCard, Building } from 'lucide-react'

export default function DonatePage() {
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
            Support Our Mission
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your donation helps us provide essential humanitarian services, 
            emergency response, and community support across Brunei Darussalam.
          </p>
        </div>

        {/* Donation Options */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Bank Transfer */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-brc-green/10">
                  <Building className="w-6 h-6 text-brc-green" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl">Bank Transfer</h3>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800">Bank Details:</p>
                  <p>Bank Name: Bank Islam Brunei Darussalam (BIBD)</p>
                  <p>Account Name: Brunei Red Crescent</p>
                  <p>Account Number: 00-001-01-009883-3</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800">Reference:</p>
                  <p>Please include &quot;BRC Donation&quot; in the reference field</p>
                </div>
              </div>
            </div>

            {/* Online Payment */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-brc-blue/10">
                  <CreditCard className="w-6 h-6 text-brc-blue" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl">Online Payment</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Secure online payment options will be available soon. 
                We&apos;re working on integrating payment gateways for your convenience.
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Coming Soon:</strong> Credit card, PayPal, and other digital payment methods.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="font-montserrat font-semibold text-2xl text-brc-red mb-6 text-center">
              How Your Donation Helps
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brc-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-brc-red" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Emergency Response</h4>
                <p className="text-gray-600 text-sm">
                  Support our emergency response teams and disaster relief efforts
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brc-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-brc-green" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Training Programs</h4>
                <p className="text-gray-600 text-sm">
                  Fund first aid training and community education programs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brc-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-brc-blue" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Community Care</h4>
                <p className="text-gray-600 text-sm">
                  Provide humanitarian aid and support to vulnerable communities
                </p>
              </div>
            </div>
          </div>

          {/* Contact for Receipt */}
          <div className="bg-brc-red text-white rounded-lg p-8 text-center">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Need a Receipt?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              For donation receipts or questions about your contribution, 
              please contact us with your transaction details.
            </p>
            <a
              href="mailto:info@bruneiredcrescent.org.bn"
              className="btn-secondary bg-white text-brc-red hover:bg-gray-100 inline-flex items-center gap-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
