import React, { useState } from 'react';
import { Package, CheckCircle, XCircle, AlertCircle, Mail, Phone, ArrowRight } from 'lucide-react';

export default function ReturnPolicy() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 px-4 mt-48">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-3">Nymara Jewels</h1>
          <p className="text-slate-300 text-lg">15 Day Return Policy</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'exceptions', label: 'Exceptions' },
              { id: 'conditions', label: 'Conditions' },
              { id: 'process', label: 'Process' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-slate-900 border-b-2 border-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start gap-4 mb-6">
                <Package className="w-8 h-8 text-slate-700 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-serif text-slate-900 mb-3">Our Commitment to You</h2>
                  <p className="text-slate-700 leading-relaxed">
                    At Nymara Jewels, we want every purchase to be a perfect expression of love and elegance. 
                    To ensure your complete satisfaction, we offer a 15 Day Return Policy, giving you the flexibility 
                    to return a product within 15 days from the date of delivery if, for any reason, you are not 
                    entirely happy with it.
                  </p>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Processing Charges</h3>
                <p className="text-slate-700 mb-4">
                  When a product is returned under this policy, you will receive a refund for the full amount after 
                  deducting the following processing charges:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Domestic Orders</h4>
                    <p className="text-slate-700">Within India</p>
                    <p className="text-2xl font-bold text-slate-900 mt-2">₹1,000</p>
                    <p className="text-sm text-slate-600 mt-1">per product (delivery & processing)</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">International Orders</h4>
                    <p className="text-slate-700">Outside India</p>
                    <p className="text-2xl font-bold text-slate-900 mt-2">USD 300–350</p>
                    <p className="text-sm text-slate-600 mt-1">per product (delivery, logistics & processing)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Exceptions Section */}
        {activeTab === 'exceptions' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start gap-4 mb-6">
                <XCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-serif text-slate-900 mb-3">When the Policy Does Not Apply</h2>
                  <p className="text-slate-700">
                    Please note the following situations where the 15 Day Return Policy cannot be applied:
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">1. Already Exchanged Orders</h3>
                  <p className="text-slate-700">
                    If an order has already been exchanged once under the 15 Day Return Policy. The policy allows 
                    only one exchange within the 15-day period for the full value. A second request for exchange 
                    will instead fall under our Lifetime Exchange Policy.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">2. Personalized Products</h3>
                  <p className="text-slate-700">
                    Products that have been engraved, personalized, or custom-designed specifically for you.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">3. Specific Material Categories</h3>
                  <p className="text-slate-700 font-medium mb-2">
                    The following are NOT eligible for the 15-Day Return Policy and are final sale:
                  </p>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
                    <li>925 Sterling Silver Jewellery</li>
                    <li>Platinum Jewellery</li>
                    <li>Gold-Plated Vermeil Jewellery</li>
                  </ul>
                  <p className="text-sm text-slate-600 mt-3">
                    These items cannot be returned, exchanged, or refunded due to material-specific finishing processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conditions Section */}
        {activeTab === 'conditions' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-serif text-slate-900 mb-3">Return Conditions</h2>
                  <p className="text-slate-700">
                    To qualify for the 15 Day Return Policy, your jewelry must meet these requirements:
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    The jewelry must be returned in its original packaging, in saleable condition, without 
                    scratches, damage, wear, or alterations.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    The tags, stickers, and product packaging must remain intact. If tampered with, the product 
                    will no longer qualify under the 15 Day Return Policy and will instead be evaluated under 
                    the Buy-Back Policy.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    The original product certificate and invoice must be included in the return package.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Lost Certificate Fees</h3>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p>
                        <span className="font-medium">Domestic returns:</span> If the certificate is lost, 
                        an additional fee of ₹2,000 or ₹800 per carat (whichever is higher) will be charged.
                      </p>
                      <p>
                        <span className="font-medium">International returns:</span> Loss of certificate will 
                        result in an additional fee of USD 80.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mt-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Refund Process</h3>
                <div className="space-y-3 text-slate-700">
                  <p>Once your product is received, a thorough Quality Check will be performed.</p>
                  <p>Upon clearance, refunds will be processed within 10 business days.</p>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="font-medium text-slate-900 mb-2">For Prepaid orders:</p>
                    <p>Refund will be credited back to the original payment source (Credit/Debit Card, Net Banking, UPI, etc.).</p>
                  </div>
                  <p className="text-sm">
                    Products showing signs of wear, resizing by unauthorized jewelers, alterations, or damage 
                    will not qualify under this return policy.
                  </p>
                  <p className="text-sm">
                    For products purchased via EMI schemes, an additional charge equivalent to 2% of the Grand 
                    Total Amount will be deducted at the time of refund from the initial installment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process Section */}
        {activeTab === 'process' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start gap-4 mb-8">
                <ArrowRight className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-serif text-slate-900 mb-3">How to Return Your Product</h2>
                  <p className="text-slate-700">
                    Follow these simple steps to initiate a return within 15 days of delivery:
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  {
                    step: 1,
                    title: 'Initiate Return Request',
                    description: 'Place a return request by logging into your account on our website, or email us at business@nymarajewels.com within 15 days of delivery to schedule a return pickup.'
                  },
                  {
                    step: 2,
                    title: 'Receive Pickup Details',
                    description: 'Once your request is approved, Nymara Jewels will share the reverse pickup details and instructions.'
                  },
                  {
                    step: 3,
                    title: 'Pack Securely',
                    description: 'Securely pack your jewelry in its original packaging, include the invoice and product certificate, and hand it over to the logistics executive.'
                  },
                  {
                    step: 4,
                    title: 'Collect Acknowledgment',
                    description: 'Always collect a valid acknowledgment of pickup (paper receipt, tracking number photo, or SMS confirmation) for your records.'
                  },
                  {
                    step: 5,
                    title: 'Quality Inspection & Refund',
                    description: 'Upon receipt at our facility, the product undergoes a quality inspection. Once cleared, the refund will be processed to your account within 10 business days.'
                  }
                ].map(item => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow-lg p-8 mt-8 text-white">
          <h2 className="text-2xl font-serif mb-4">Need Assistance?</h2>
          <p className="text-slate-300 mb-6">
            We are here to help. If you have any questions, feedback, or suggestions, please reach out to us:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a href="mailto:business@nymarajewels.com" className="hover:text-slate-300 transition-colors">
                  business@nymarajewels.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <a href="tel:+919424827503" className="hover:text-slate-300 transition-colors">
                  +91 94248 27503
                </a>
                <p className="text-xs text-slate-400 mt-0.5">Mon–Sat, 11 am – 5 pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-slate-100 rounded-lg p-6 mt-6 text-center">
          <p className="text-sm text-slate-600">
            Nymara Jewels reserves the right to update or amend this Return Policy at any time. 
            Any changes will take effect immediately upon posting on{' '}
            <a href="https://www.nymarajewels.com" className="text-slate-900 underline hover:text-slate-700">
              www.nymarajewels.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}