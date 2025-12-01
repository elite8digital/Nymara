import React from 'react';
import { Package, Globe, Gift, Shield, Truck, Clock } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4 mt-48">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Nymara Jewels</h1>
          <p className="text-xl text-slate-300">Shipping Policy</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-8 h-8 text-slate-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Commitment to You</h2>
              <p className="text-slate-700 leading-relaxed">
                At Nymara Jewels, we take utmost care in ensuring that your jewelry reaches you safely, securely, and in a timely manner. Every item listed on our website is made-to-order, and it typically takes 2–4 weeks (25 business days) to dispatch once your order has been confirmed. This timeline applies to both domestic and international orders.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                Each order is shipped fully insured, and we strongly encourage customers to carefully inspect the package for any tampering, damage, or irregularities before accepting or signing the delivery receipt.
              </p>
            </div>
          </div>
        </section>

        {/* Production Timeline */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 text-slate-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Production & Dispatch</h2>
              <div className="bg-slate-50 border-l-4 border-slate-700 p-4 rounded">
                <p className="text-slate-700 font-medium">Made-to-Order Timeframe</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">2–4 Weeks</p>
                <p className="text-sm text-slate-600 mt-1">(25 business days)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Domestic Orders */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4">
            <Truck className="w-8 h-8 text-slate-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Domestic Orders (India)</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-slate-800 font-medium">Free Shipping across India</p>
                </div>
                <div>
                  <p className="text-slate-700 mb-2">Deliveries are handled through our trusted logistics partners, including:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Apex Courier', 'Ship Rocket', 'DTDC', 'Bluedart'].map((partner) => (
                      <span key={partner} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Orders */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4">
            <Globe className="w-8 h-8 text-slate-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">International Orders</h2>
              <p className="text-slate-700 mb-4">
                We are delighted to serve our global customers with worldwide shipping. All international orders are shipped on a fully insured basis and delivered securely to your doorstep.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-medium text-slate-800 mb-2">Trusted Global Carriers</p>
                  <div className="flex flex-wrap gap-2">
                    {['DHL', 'FedEx'].map((carrier) => (
                      <span key={carrier} className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200">
                        {carrier}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-slate-800 font-medium mb-1">No Hidden Costs</p>
                  <p className="text-sm text-slate-700">
                    Shipping charges and applicable taxes/custom duties are already included in the product price.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-slate-800 font-medium mb-1">International Returns</p>
                  <p className="text-sm text-slate-700">
                    A return handling fee of USD 300–350 will be deducted towards logistics, insurance, and processing charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packaging */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4">
            <Package className="w-8 h-8 text-slate-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Packaging</h2>
              <p className="text-slate-700 leading-relaxed">
                Each piece of Nymara Jewels is delivered in durable, tamper-proof packaging that ensures maximum safety during transit. Whether you purchase fine jewelry or solitaires, your order will arrive in an exclusive Nymara Jewels box, accompanied by the relevant certificates of authenticity.
              </p>
            </div>
          </div>
        </section>

        {/* Gift Packaging */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4">
            <Gift className="w-8 h-8 text-slate-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Gift Packaging</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If your purchase is intended as a gift, we are happy to provide complimentary gift packaging. You may also include a personalized message of your choice.
              </p>
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg border border-rose-200">
                <p className="text-slate-700 text-sm">
                  Whether the gift is delivered directly to the recipient or handed over personally, it will arrive in our distinctive Nymara Jewels gift box, sure to impress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="bg-slate-800 text-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
          <p className="text-slate-300 leading-relaxed">
            Nymara Jewels reserves the right to update, revise, or modify this shipping policy at any time. We encourage our customers to review this policy regularly. Any changes or clarifications will take effect immediately upon publication on our website. In the event of material changes, we will provide a clear notification on the policy page so that you remain fully informed of how we manage shipping, delivery timelines, and associated charges.
          </p>
        </section>

        
      </main>
    </div>
  );
}