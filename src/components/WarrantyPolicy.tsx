import React from 'react';
import { Shield, AlertCircle, Wrench, Ruler, Globe, Mail, Phone, CheckCircle, XCircle } from 'lucide-react';

export default function WarrantyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4 mt-48">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-serif">Nymara Jewels</h1>
          </div>
          <p className="text-xl text-slate-300">Lifetime Manufacturing Warranty</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Quality Commitment</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            At Nymara Jewels, we are deeply committed to providing our customers with jewelry and lab-grown diamonds of the highest quality. We proudly guarantee that every piece purchased from our website will be free from manufacturing defects in both materials and workmanship at the time of delivery. Additionally, we assure you that the optical brilliance of our lab-grown diamonds will never fade or become cloudy over time.
          </p>
          <p className="text-slate-700 leading-relaxed">
            All of our diamonds and jewelry are produced to the strictest standards of craftsmanship, using only the finest materials. Each item undergoes multiple levels of inspection—both at our manufacturing facilities and at our distribution center—before being shipped to you.
          </p>
        </section>

        {/* Warranty Coverage */}
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <Shield className="w-10 h-10 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-2">Lifetime Manufacturing Warranty</h2>
              <p className="text-emerald-100 text-lg">
                Extended to every customer, regardless of the type or price of the item purchased.
              </p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-6">
            <p className="text-sm text-emerald-50">
              This warranty becomes effective from the date of purchase, applies only to pieces bought directly from Nymara Jewels, and is strictly non-transferable.
            </p>
          </div>
        </section>

        {/* Exclusions */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Warranty Exclusions</h2>
              <p className="text-slate-700 mb-6">
                Although we stand firmly behind the integrity of our products, the following situations are not covered under the Lifetime Manufacturing Warranty:
              </p>
              
              <div className="space-y-3">
                {[
                  'Normal wear and tear, scratches, accidental trauma, product loss, or theft.',
                  'Fading or discoloration of metals due to improper care (exposure to chlorinated pools, hot tubs, perfumes, lotions, or harsh chemicals).',
                  'Natural wearing down of precious metals and prongs over time, which may loosen stones with regular use. This is part of normal wear and not considered a defect.',
                  'The loss of any diamond or gemstone caused by damage, accident, or trauma.',
                  'Any jewelry repaired, resized, or serviced by a third-party jeweler not affiliated with Nymara Jewels. Such actions will void the warranty.'
                ].map((exclusion, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                    <XCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm">{exclusion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Claim */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">How to Claim a Warranty</h2>
          
          <div className="mb-6">
            <p className="text-slate-700 mb-4">
              If you believe that your jewelry has a manufacturing defect, please contact us by emailing <a href="mailto:business@nymarajewels.com" className="text-emerald-600 hover:text-emerald-700 font-medium">business@nymarajewels.com</a> with the following:
            </p>
            
            <div className="space-y-2 ml-4">
              {[
                'Your order number.',
                'Clear images and/or videos of the jewelry highlighting the concern.',
                'Additional details about when and how the issue was noticed.'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-700 text-white flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900 mb-1">If Confirmed as Manufacturing Defect</p>
                <p className="text-slate-700 text-sm">
                  Nymara Jewels will provide a prepaid, insured shipping label and all required documentation. We will repair it at no cost to you. All shipping costs for warrantied repairs will be borne entirely by Nymara Jewels.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900 mb-1">If Not a Manufacturing Defect</p>
                <p className="text-slate-700 text-sm">
                  We will send you an estimate for repair costs. Upon your approval and payment, we will provide shipping instructions, a prepaid insured shipping label, and paperwork for the repair service.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-slate-800 text-sm">
              <span className="font-medium">Processing Time:</span> Repairs will typically be completed within 1–3 weeks and returned to you in a new Nymara Jewels jewelry box. (Please note: your original packaging will not be returned.)
            </p>
          </div>
        </section>

        {/* Repairs & Maintenance */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Wrench className="w-8 h-8 text-slate-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Repairs & Maintenance</h2>
              <p className="text-slate-700 mb-6">
                Jewelry, like all precious possessions, may require maintenance due to normal wear over time. Nymara Jewels provides professional repair services at our facility to ensure the longevity and integrity of your jewelry. Our aim is to keep repair costs as minimal as possible while upholding the quality of craftsmanship.
              </p>
              
              <div>
                <p className="font-medium text-slate-900 mb-3">Common Services Include:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Replacement of side stones',
                    'Tightening or reinforcing prongs',
                    'Re-polishing and rhodium re-plating',
                    'Professional cleaning'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <p className="text-slate-700 text-sm">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-slate-800 text-sm font-medium">
                  ⚠️ Important: Repairs performed by any unauthorized third-party jeweler will void your warranty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ring Sizing */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Ruler className="w-8 h-8 text-slate-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Free Ring Sizing (Domestic Orders)</h2>
              
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200 mb-6">
                <p className="text-slate-800 font-medium mb-2">🇮🇳 For Orders in India</p>
                <p className="text-slate-700 text-sm">
                  Nymara Jewels offers a one-time free ring resizing service within 30 days of shipment. Simply ship the ring back to us, and we will resize and return it to you free of charge.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-slate-700 text-sm">
                    <span className="font-medium">Design Limitations:</span> If resizing is not possible due to design limitations, we will inform you and provide the option to either place a special order in the correct size or have the original piece returned.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-slate-700 text-sm">
                    <span className="font-medium">Eternity-Style Rings:</span> Cannot be resized; they must be remade in the required size. We offer this one-time within 30 days of shipment.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-slate-700 text-sm">
                    <span className="font-medium">Additional Resizing:</span> For additional resizings after the free service, a minimal resizing fee will be applicable.
                  </p>
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
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">International Orders – Repairs & Resizing</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
                  <p className="text-slate-800 font-medium mb-2">Ring Resizing</p>
                  <p className="text-slate-700 text-sm">
                    Due to duties and taxes levied during import/export, we cannot offer ring resizing services for international orders.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                  <p className="text-slate-800 font-medium mb-2">Repairs</p>
                  <p className="text-slate-700 text-sm">
                    Repairs for international orders can still be facilitated, but duties and logistics charges may apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Support */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Customer Support</h2>
          <p className="text-slate-300 mb-6">
            If you have any questions about our Lifetime Manufacturing Warranty, Repairs, or Free Ring Sizing, we are here to help.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 md:mx-auto">
            <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Email</p>
                <a href="mailto:business@nymarajewels.com" className="text-emerald-400 hover:text-emerald-300 text-sm">
                  business@nymarajewels.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Phone className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p className="text-emerald-400 text-sm">+44 7867089659</p>
                <p className="text-slate-400 text-xs mt-1">Mon–Sat, 11 AM – 5 PM IST</p>
              </div>
            </div>

            <div className="flex  items-start gap-4 p-4 bg-white/10 m backdrop-blur-sm rounded-lg">
              <svg
                className="w-5 h-5 text-emerald-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <a
                href="https://wa.me/447867089659"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white transition-colors"
              >
                <span className="hover:text-slate-400 text-sm">WhatsApp</span>
                <br className="p-2" />{" "}
                <span className="text-md text-emerald-400">
                  +44 7867089659
                </span>{" "}
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}