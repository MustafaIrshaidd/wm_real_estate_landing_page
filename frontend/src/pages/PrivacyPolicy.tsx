import { ArrowLeft, Shield, Eye, Lock, Users, Globe, Phone, Mail } from 'lucide-react';
import { getBrandConfig } from '@/brand';
import { Link } from 'react-router';

export default function PrivacyPolicy() {
  const brand = getBrandConfig();
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      content: [
        "Personal information such as name, email address, phone number, and address when you contact us or fill out forms on our website.",
        "Property preferences and search criteria when you use our services.",
        "Financial information necessary for property transactions, including income verification and credit information.",
        "Communication records of your interactions with our team.",
        "Website usage data including IP address, browser type, and pages visited."
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: [
        "To provide real estate services including property searches, valuations, and transactions.",
        "To communicate with you about properties, market updates, and our services.",
        "To process and complete property transactions.",
        "To improve our website and services based on your feedback and usage patterns.",
        "To comply with legal obligations and regulatory requirements in the UAE.",
        "To send you marketing communications about our services (with your consent)."
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      content: [
        "With property developers, landlords, and other parties involved in your property transactions.",
        "With financial institutions and mortgage providers when facilitating property financing.",
        "With legal professionals and government authorities as required by UAE law.",
        "With trusted service providers who assist us in operating our business.",
        "We do not sell your personal information to third parties for marketing purposes."
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational security measures to protect your personal information.",
        "All sensitive data is encrypted during transmission and storage.",
        "Access to your information is restricted to authorized personnel only.",
        "We regularly review and update our security practices to ensure data protection.",
        "In the event of a data breach, we will notify affected users as required by applicable law."
      ]
    },
    {
      id: "user-rights",
      title: "Your Rights",
      content: [
        "Access: You have the right to request access to the personal information we hold about you.",
        "Correction: You can request correction of inaccurate or incomplete personal information.",
        "Deletion: You may request deletion of your personal information, subject to legal requirements.",
        "Portability: You can request a copy of your personal information in a structured format.",
        "Objection: You may object to the processing of your personal information for marketing purposes.",
        "Withdrawal of consent: You can withdraw your consent for data processing at any time."
      ]
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      content: [
        "We use cookies to enhance your website experience and analyze website traffic.",
        "Essential cookies are necessary for website functionality and cannot be disabled.",
        "Analytics cookies help us understand how visitors interact with our website.",
        "Marketing cookies may be used to show you relevant advertisements.",
        "You can manage your cookie preferences through your browser settings."
      ]
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      content: [
        "Our website may contain links to third-party websites not operated by us.",
        "We are not responsible for the privacy practices of third-party websites.",
        "We encourage you to review the privacy policies of any third-party websites you visit.",
        "Third-party services integrated into our website have their own privacy policies."
      ]
    },
    {
      id: "retention",
      title: "Data Retention",
      content: [
        "We retain your personal information for as long as necessary to provide our services.",
        "Transaction records are kept in accordance with UAE legal requirements.",
        "Marketing data is retained until you withdraw your consent or opt out.",
        "Website analytics data is typically retained for up to 2 years.",
        "We will securely delete your information when it is no longer needed."
      ]
    },
    {
      id: "minors",
      title: "Children's Privacy",
      content: [
        "Our services are not intended for individuals under the age of 18.",
        "We do not knowingly collect personal information from children.",
        "If you believe we have collected information from a child, please contact us immediately.",
        "We will delete any information from children as soon as we become aware of it."
      ]
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or applicable law.",
        "We will notify you of any material changes by posting the updated policy on our website.",
        "The date of the last update will be indicated at the top of this policy.",
        "Your continued use of our services after changes constitutes acceptance of the updated policy."
      ]
    }
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
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
              <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            {brand.brandName} is committed to protecting your privacy and personal information. 
            This privacy policy explains how we collect, use, and safeguard your information 
            when you visit our website or use our real estate services in Dubai, UAE.
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
            If you have any questions about this privacy policy or how we handle your personal information, 
            please contact us using the following methods:
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
                <Eye className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-white font-medium">Data Protection Officer</p>
                  <p className="text-gray-300">dpo@wmrealestate.ae</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-black/30 rounded-lg border border-gray-700">
            <p className="text-sm text-gray-400">
              <Lock className="w-4 h-4 inline mr-1" />
              We typically respond to privacy-related inquiries within 48 hours. 
              For urgent matters, please call our main office number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
