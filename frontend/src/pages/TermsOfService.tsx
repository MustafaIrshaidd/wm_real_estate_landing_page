import { ArrowLeft, Shield, FileText, Gavel, Users, Globe, Phone, Mail } from 'lucide-react';
import { getBrandConfig } from '@/brand';
import { Link } from 'react-router';

export default function TermsOfService() {
  const brand = getBrandConfig();
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: [
        "These Terms of Service (\"Terms\") govern your use of WM Real Estate's website and services in Dubai, UAE.",
        "By accessing or using our services, you agree to be bound by these Terms.",
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility",
      content: [
        "You must be at least 18 years old and capable of entering into legally binding agreements to use our services.",
      ],
    },
    {
      id: "services-scope",
      title: "Scope of Services",
      content: [
        "We provide real estate services including property listings, consultancy, viewings, and transaction facilitation.",
        "We do not provide legal or financial advice; you should consult independent professionals for such matters.",
      ],
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information when communicating with us or submitting forms.",
        "Comply with applicable UAE laws and regulations when using our services.",
        "Do not misuse our website, attempt unauthorized access, or interfere with its operation.",
      ],
    },
    {
      id: "transactions",
      title: "Property Transactions",
      content: [
        "All property transactions are subject to verification, due diligence, and approval by relevant authorities.",
        "Any offers, listings, prices, or availability are subject to change without prior notice.",
      ],
    },
    {
      id: "fees-payments",
      title: "Fees and Payments",
      content: [
        "Service fees, commissions, and payment terms will be communicated prior to engagement and may vary by service.",
        "All payments must be made in accordance with the agreed invoicing and schedules.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: [
        "All content on this website, including logos, images, and text, is owned by or licensed to WM Real Estate.",
        "You may not copy, distribute, or use our content without prior written permission.",
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      content: [
        "Your use of our services is also governed by our Privacy Policy.",
        "Please review the Privacy Policy to understand how we collect and use your information.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, WM Real Estate is not liable for any indirect, incidental, or consequential damages arising from your use of our services.",
        "We do not guarantee the accuracy, completeness, or availability of property information on the website.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: [
        "These Terms are governed by the laws of the United Arab Emirates.",
        "Any disputes will be subject to the exclusive jurisdiction of the courts in Dubai, UAE.",
      ],
    },
    {
      id: "changes",
      title: "Changes to These Terms",
      content: [
        "We may update these Terms from time to time. Changes will be effective when posted on this website.",
        "Your continued use of the services after changes constitutes acceptance of the updated Terms.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Gavel className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
              <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Please read these Terms of Service carefully before using WM Real Estate's website and services.
            These Terms describe your rights and obligations when interacting with our platform and team.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={section.id} className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-lg text-lg font-bold">
                  {index + 1}
                </span>
                <span>{section.title}</span>
              </h2>

              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-400/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
            <Users className="w-6 h-6 text-red-400" />
            <span>Contact Us</span>
          </h2>

          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms, please contact {brand.brandName} using the following methods:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">{brand.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-300">{brand.phonePrimary}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-300">{brand.addressLines.join(', ')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-white font-medium">Compliance</p>
                  <p className="text-gray-300">{brand.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-black/30 rounded-lg border border-gray-700">
            <p className="text-sm text-gray-400">
              <FileText className="w-4 h-4 inline mr-1" />
              We typically respond within 48 hours. For urgent matters, please call our main office number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

