import React, { useState } from "react";
import {
  FiSearch,
  FiMessageSquare,
  FiLifeBuoy,
  FiChevronDown,
  FiChevronUp,
  FiMail,
  FiPhone,
  FiZap,
  FiUser,
  FiPlay,
  FiExternalLink,
} from "react-icons/fi";
import useTitle from "../hooks/useTitle";

const Support = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const title = "Green Nest - Support";
  useTitle(title);

  // FAQ categories
  const faqCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <FiZap className="text-blue-500 dark:text-blue-400" />,
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "Click the 'Sign Up' button in the top right corner and follow the prompts to register with your email or social account.",
        },
        {
          question: "Is there a mobile app available?",
          answer:
            "Our web app is fully responsive for mobile browsers. Native apps for iOS and Android are coming soon!",
        },
        {
          question: "What browsers are supported?",
          answer:
            "We support the latest versions of Chrome, Firefox, Safari, and Edge. For best performance, keep your browser updated.",
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: <FiLifeBuoy className="text-orange-500 dark:text-orange-400" />,
      questions: [
        {
          question: "Why can't I add new plants?",
          answer:
            "Ensure you're on the latest version of your browser. If issues persist, try clearing your cache or contact support.",
        },
        {
          question: "My plant data isn't syncing",
          answer:
            "Check your internet connection. If the problem continues, log out and back in to refresh your session.",
        },
        {
          question: "Images not uploading properly",
          answer:
            "Try resizing images to under 5MB. Supported formats are JPG, PNG, and WebP.",
        },
      ],
    },
    {
      id: "account",
      title: "Account & Billing",
      icon: <FiUser className="text-purple-500 dark:text-purple-400" />,
      questions: [
        {
          question: "How do I change my password?",
          answer:
            "Go to Account Settings > Security. You'll need to verify your current password before setting a new one.",
        },
        {
          question: "Where can I view my subscription?",
          answer:
            "Your plan details are available under Account Settings > Billing.",
        },
        {
          question: "How do I cancel my subscription?",
          answer:
            "You can manage your subscription in Account Settings > Billing. Cancellations take effect at the end of your billing period.",
        },
      ],
    },
  ];

  // Filter FAQs based on search query
  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-3 sm:mb-4">
          How can we help?
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Find answers to common questions or contact our support team
        </p>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400 dark:text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search help articles..."
            className="block w-full pl-10 pr-3 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center">
            <FiMessageSquare className="mr-2 text-green-500 dark:text-green-400" />
            Frequently Asked Questions
          </h2>

          {filteredCategories.length > 0 ? (
            <div className="space-y-3 sm:space-y-4">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{category.icon}</span>
                      <h3 className="text-base sm:text-lg font-medium text-left text-gray-800 dark:text-white">
                        {category.title} ({category.questions.length})
                      </h3>
                    </div>
                    {activeCategory === category.id ? (
                      <FiChevronUp className="text-gray-500 dark:text-gray-400" />
                    ) : (
                      <FiChevronDown className="text-gray-500 dark:text-gray-400" />
                    )}
                  </button>

                  {activeCategory === category.id && (
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {category.questions.map((faq, index) => (
                        <div key={index} className="p-4 sm:p-5">
                          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                            {faq.question}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow text-center">
              <p className="text-gray-600 dark:text-gray-300">
                No results found for "{searchQuery}". Try different keywords or
                contact our support team.
              </p>
            </div>
          )}
        </div>

        {/* Support Options Sidebar */}
        <div className="space-y-5 sm:space-y-6">
          {/* Contact Support Card */}
          <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-5">
              Contact Support
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/20 p-2 rounded-lg">
                  <FiMail className="text-green-600 dark:text-green-400 h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-medium text-gray-800 dark:text-white">
                    Email Us
                  </h4>
                  <a
                    href="mailto:support@greenthumb.app"
                    className="text-sm text-green-600 dark:text-green-400 hover:underline"
                  >
                    support@greenthumb.app
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg">
                  <FiPhone className="text-blue-600 dark:text-blue-400 h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-medium text-gray-800 dark:text-white">
                    Call Us
                  </h4>
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +1 (555) 123-4567
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Mon-Fri, 9am-5pm EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resources Card */}
          <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-5">
              Helpful Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center text-green-600 dark:text-green-400 hover:underline text-sm sm:text-base"
                >
                  <FiZap className="mr-2 flex-shrink-0" />
                  <span>Getting Started Guide</span>
                  <FiExternalLink className="ml-1.5 h-3 w-3 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-green-600 dark:text-green-400 hover:underline text-sm sm:text-base"
                >
                  <FiLifeBuoy className="mr-2 flex-shrink-0" />
                  <span>Troubleshooting Common Issues</span>
                  <FiExternalLink className="ml-1.5 h-3 w-3 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-green-600 dark:text-green-400 hover:underline text-sm sm:text-base"
                >
                  <FiUser className="mr-2 flex-shrink-0" />
                  <span>Account Management</span>
                  <FiExternalLink className="ml-1.5 h-3 w-3 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community Card */}
          <div className="bg-green-50 dark:bg-green-900/10 p-5 sm:p-6 rounded-lg border border-green-100 dark:border-green-900/20">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3">
              Join Our Community
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 sm:mb-5">
              Connect with other plant enthusiasts and get answers from our
              community.
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition flex items-center justify-center">
              <FiMessageSquare className="mr-2" />
              Visit Community Forum
            </button>
          </div>
        </div>
      </div>

      {/* Video Tutorials Section */}
      <div className="mt-12 md:mt-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-5 sm:mb-6">
          Video Tutorials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {[
            {
              title: "Getting Started with Plant Tracking",
              duration: "4:32",
            },
            {
              title: "Using the Plant Health Scanner",
              duration: "6:15",
            },
            {
              title: "Managing Your Plant Collection",
              duration: "5:48",
            },
          ].map((video, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden hover:shadow-md transition cursor-pointer border border-gray-200 dark:border-gray-700"
            >
              <div className="relative bg-gray-200 dark:bg-gray-700 h-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 hover:bg-black/20 dark:hover:bg-black/30 transition"></div>
                <div className="relative z-10 bg-white dark:bg-gray-600 rounded-full p-3 shadow-inner">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <FiPlay className="w-5 h-5 text-white ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-medium text-gray-800 dark:text-white mb-1 text-sm sm:text-base">
                  {video.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {video.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Still Need Help Section */}
      <div className="mt-12 md:mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3">
            Still need help?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-5 sm:mb-6">
            Can't find what you're looking for? Our team is ready to assist you
            with any questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition">
              Contact Support
            </button>
            <button className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 px-6 rounded-lg transition border border-gray-300 dark:border-gray-600">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
