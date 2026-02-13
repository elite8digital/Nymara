import React from 'react';
import { Shield, RefreshCw, Package, Phone, Mail, AlertCircle } from 'lucide-react';

export default function BuyBackPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-6 shadow-lg mt-48">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Nymara Jewels</h1>
          <p className="text-slate-300 mt-1">Where trust meets timeless elegance</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-amber-100">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-12 h-12 text-slate-700 flex-shrink-0" />
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Lifetime Buy-Back Policy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Nymara Jewels, we are committed to building lifelong relationships with our customers. 
                To honor this promise, we proudly offer a Lifetime Buy-Back Policy on every purchase made 
                directly from Nymara Jewels. You may return your product, along with the original product 
                certificate, for buy-back based on its current market value.
              </p>
              <p className="text-gray-600 mt-4">
                Please note, applicable deductions will be made towards making charges, taxes, and a standard 
                processing fee. In cases where you received a discount or complimentary gift during purchase, 
                the corresponding discount amount or gift value will also be deducted while determining the final value.
              </p>
            </div>
          </div>
        </div>

        {/* Buy-Back Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-amber-100">
          <div className="flex items-center gap-3 mb-6">
            <RefreshCw className="w-8 h-8 text-slate-700" />
            <h3 className="text-2xl font-serif font-bold text-gray-900">Lifetime Buy-Back</h3>
          </div>
          
          <p className="text-gray-700 mb-6">
            If you choose the buy-back option, the value of your jewelry will be calculated as per the 
            current market rates and transferred to you via bank transfer within 15 business days from 
            the date we receive the product.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 px-6 py-4 text-left font-semibold text-gray-900">
                    Category
                  </th>
                  <th className="border border-slate-200 px-6 py-4 text-left font-semibold text-gray-900">
                    Buy-Back Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-200 px-6 py-4 text-gray-800 font-medium">
                    Diamond Jewellery
                  </td>
                  <td className="border border-slate-200 px-6 py-4 text-gray-700">
                    100% of gold value at current market rate. 80% of diamond value at market rate.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-200 px-6 py-4 text-gray-800 font-medium">
                    Loose Solitaires
                  </td>
                  <td className="border border-slate-200 px-6 py-4 text-gray-700">
                    100% of gold value at current market rate. 80% of diamond value at market rate.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-200 px-6 py-4 text-gray-800 font-medium">
                    Plain Gold Jewellery
                  </td>
                  <td className="border border-slate-200 px-6 py-4 text-gray-700">
                    100% of gold value at current market rate.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 italic">
            * The current market value is always determined on the exact date of exchange or buy-back.
          </p>
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-rose-200">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-rose-600" />
            <h3 className="text-2xl font-serif font-bold text-gray-900">Important Notes</h3>
          </div>

          <div className="space-y-3">
            {[
              "Buy-back are not applicable on loose diamonds, baguettes, tapered diamonds.",
              "Buy-back are not applicable on polkis, pearls, and colored stones.",
              "Original invoice and product certificate must be presented at the time of return/exchange.",
              "If the certificate is lost, an additional fee of ₹2,000 or ₹800 per carat (whichever is higher) will be charged.",
              "Products purchased from sources other than official Nymara Jewels stores or our official website will not qualify for buy-back.",
              "In cases where discounts were applied on gold, diamonds, stones, or making charges during the original purchase, the equivalent value will be deducted before calculating the final buy-back or exchange amount.",
              "Any reward points, e-points, or benefits redeemed during the purchase will also be deducted from the final value.",
              "Buy-back is applicable only for purchases up to a maximum value of ₹4,99,999/- or 5000 Dollar.",
              "For products bought under EMI schemes, the value of any unpaid EMI will be deducted in addition to the above-mentioned charges."
            ].map((note, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-rose-600 font-bold flex-shrink-0">{index + 1}.</span>
                <p className="text-gray-700">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 bg-white rounded-xl border-2 border-rose-300">
            <p className="text-gray-800 font-semibold mb-2">Special Note:</p>
            <p className="text-gray-700">
              Products crafted in 925 Sterling Silver, Platinum, and Gold-Plated Vermeil are NOT eligible 
              for buy-back, exchange, or returns under any policy. These categories are strictly final sale 
              and do not qualify for Lifetime Buy-Back Policy, Lifetime Exchange Policy, or 15 Day Return Policy. 
              They remain covered only under the Lifetime Manufacturing Warranty, provided the issue is confirmed 
              as a manufacturing defect.
            </p>
          </div>
        </div>

        {/* Shipping and Insurance */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-amber-100">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-8 h-8 text-stale-600" />
            <h3 className="text-2xl font-serif font-bold text-gray-900">Shipping and Insurance</h3>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-stale-600 font-bold">•</span>
              <p className="text-gray-700">
                Shipping and insurance of new orders to the customer's address will be borne by Nymara Jewels.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-600 font-bold">•</span>
              <p className="text-gray-700">
                In case of returns, buy-back, or exchanges, reverse shipping will be scheduled and arranged by Nymara Jewels.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-600 font-bold">•</span>
              <p className="text-gray-700">
                A processing charge of ₹1,000 will be applicable at the time of return, which covers reverse logistics and insurance.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Updates */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-amber-100">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Policy Updates</h3>
          <p className="text-gray-700">
            Nymara Jewels reserves the right to revise or update these policies at any time. We encourage 
            our customers to review this page regularly to stay updated. Any changes will be effective 
            immediately once published on our website: <a href="https://www.nymarajewels.com" className="text-slate-600 hover:text-slate-700 underline font-medium">www.nymarajewels.com</a>. 
            In the case of material changes, we will provide a clear notification on the policy page itself.
          </p>
        </div>

        {/* Customer Support */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-serif font-bold mb-4">Customer Support</h3>
          <p className="text-amber-50 mb-6">
            At Nymara Jewels, we deeply value your trust and satisfaction. If you have any concerns, 
            suggestions, or feedback regarding our services or policies, we would be glad to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Mail className="w-6 h-6 text-slate-200" />
              <div>
                <p className="text-slate-100 text-sm">Email</p>
                <a href="mailto:business@nymarajewels.com" className="text-white font-medium hover:text-amber-200 transition-colors">
                  business@nymarajewels.com
                </a>
              </div>
            </div>
            
            
            
            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Phone className="w-6 h-6 text-slate-200" />
              <div>
                <p className="text-slate-100 text-sm">Phone</p>
                <a href="tel:+447867089659" className="text-white font-medium hover:text-amber-200 transition-colors">
                  +44 7867089659
                </a>
                <p className="text-slate-100 text-sm mt-1">Mon–Sat, 11 am – 5 pm</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Nymara Jewels. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Crafting timeless memories, one jewel at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}