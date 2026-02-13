import React, { useState } from 'react';
import { Building2, Gift, Users, Star, CheckCircle, Mail, Phone, Package } from 'lucide-react';
import axios from 'axios';

export default function CorporateGifting() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    quantity: '',
    occasion: '',
    budget: '',
    message: ''
  });

  const [otherOccasion, setOtherOccasion] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOtherOccasionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherOccasion(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const submitData = {
        ...formData,
        occasion: formData.occasion === 'Other' ? otherOccasion : formData.occasion
      };
      const res = await axios.post("http://localhost:5000/api/corporate/inquiry", submitData);
      if (res.data.success) {
        alert("Your corporate gifting inquiry has been sent successfully!");
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          quantity: '',
          occasion: '',
          budget: '',
          message: ''
        });
        setOtherOccasion('');
      }
    } catch (err) {
      console.error("❌ Submit error:", err);
      alert("Failed to send inquiry. Please try again.");
    }
  };

  const occasions = [
    'Employee Recognition',
    'Client Appreciation',
    'Corporate Anniversary',
    'Holiday Gifts',
    'Milestone Achievements',
    'Executive Gifts',
    'Business Partners',
    'Retirement Gifts',
    'Other'
  ];

  const benefits = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Customizable Options',
      description: 'Personalize each piece with engravings, custom packaging, and bespoke designs that reflect your brand values.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Every piece features ethically sourced lab-grown diamonds and recycled gold, certified by IGI'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Elegant Packaging',
      description: 'Luxury presentation boxes with sustainable materials, perfect for creating memorable gifting experiences.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Bulk Pricing',
      description: 'Competitive rates for bulk orders with transparent pricing and flexible payment terms for corporate clients.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Dedicated Support',
      description: 'Personal account manager to handle your order from concept to delivery, ensuring seamless execution.'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Brand Integration',
      description: 'Add your company logo to packaging, include personalized cards, and create a cohesive brand experience.'
    }
  ];

  const giftCategories = [
    {
      category: 'Employee Recognition',
      items: ['Diamond Studs', 'Tennis Bracelets', 'Pendant Necklaces', 'Elegant Rings'],
    },
    {
      category: 'Client Appreciation',
      items: ['Premium Cufflinks', 'Statement Rings', 'Designer Bracelets', 'Luxury Watches'],
    },
    {
      category: 'Executive Gifts',
      items: ['Bespoke Jewelry', 'Large Carat Diamonds', 'Custom Creations', 'Rare Gemstones'],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mt-40">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full mb-6">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-serif text-gray-900 mb-6">Corporate Gifting Solutions</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Elevate your corporate relationships with exquisite lab-grown diamond jewelry from Nymara Jewels. 
            Whether celebrating achievements, expressing gratitude, or marking milestones, our ethically crafted pieces 
            make a lasting impression that reflects your company's values and sophistication.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-gray-900 text-center mb-12">Why Choose Nymara Jewels for Corporate Gifting</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-900">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gift Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-gray-900 text-center mb-12">Popular Corporate Gift Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {giftCategories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{cat.category}</h3>
                <ul className="space-y-2 mb-6">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-serif text-gray-900 text-center mb-12">Our Simple Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">Share your requirements, budget, and vision with our team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Curation</h3>
              <p className="text-sm text-gray-600">We curate personalized options tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Approval</h3>
              <p className="text-sm text-gray-600">Review and approve designs, packaging, and timeline</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-sm text-gray-600">Receive beautifully packaged gifts on schedule</p>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-md p-8 text-white">
            <h2 className="text-3xl font-serif mb-6">Make a Statement with Every Gift</h2>
            <div className="space-y-6">
              <p className="text-gray-300">
                At Nymara Jewels, we understand that corporate gifting is more than a transaction—it's an opportunity to strengthen relationships and express genuine appreciation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Sustainable Luxury</h4>
                    <p className="text-sm text-gray-300">100% lab-grown diamonds and recycled gold</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Certified Quality</h4>
                    <p className="text-sm text-gray-300">IGI certified with lifetime warranty</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Options</h4>
                    <p className="text-sm text-gray-300">From 10 to 1000+ pieces, we scale to your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Global Delivery</h4>
                    <p className="text-sm text-gray-300">Insured shipping worldwide with tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6">Request a Corporate Gifting Quote</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="e.g., 50"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Occasion</label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    {occasions.map(occ => (
                      <option key={occ} value={occ}>{occ}</option>
                    ))}
                  </select>
                  {formData.occasion === 'Other' && (
                    <input
                      type="text"
                      value={otherOccasion}
                      onChange={handleOtherOccasionChange}
                      placeholder="Please specify occasion"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent mt-2"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <input
                  type="text"
                  name="budget"
                  placeholder="e.g., $10,000 - $50,000"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your gifting needs, preferences, timeline, or any special requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Send Inquiry
              </button>

              <p className="text-xs text-gray-500 text-center">
                Our team will respond within 24 business hours with a customized proposal.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Let's Create Something Extraordinary Together</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Our dedicated corporate gifting team is ready to help you create memorable experiences that leave a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:business@nymarajewels.com" className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium">
              <Mail className="w-5 h-5" />
              <span>business@nymarajewels.com</span>
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a href="tel:+447867089659" className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium">
              <Phone className="w-5 h-5" />
              <span>+44 7867089659</span>
            </a>

              <span className="hidden sm:inline text-gray-400">|</span>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-700 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <a
                href="https://wa.me/447867089659"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-slate-400 "
              >
                
                
                <span className="text-md text-gray-900 font-medium hover:text-gray-900">
                  +44 7867089659
                </span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
