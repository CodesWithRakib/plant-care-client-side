import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import contactImage from "../assets/contact.jpg";
import { FaLeaf } from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with leaf pattern */}
      <div className="text-center mb-16 relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-20">
          <FaLeaf className="text-green-500 text-6xl rotate-12" />
          <FaLeaf className="text-green-400 text-4xl -ml-8 -mt-4 rotate-45" />
        </div>
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4 relative z-10">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Have questions about your plants or our services? We're here to help
          your garden grow!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form with organic shape */}
        <div className="relative">
          <div className="absolute -inset-4 bg-green-50 dark:bg-gray-700 rounded-3xl transform rotate-1 -z-10"></div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg relative overflow-hidden">
            {/* Floating leaves decoration */}
            <FaLeaf className="absolute -bottom-4 -right-4 text-green-100 dark:text-gray-600 text-8xl -rotate-45" />

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <FiSend className="mr-2 text-green-500" />
              Send Us a Message
            </h2>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
                Thank you! Your message has been sent. We'll get back to you
                soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition"
                  placeholder="Tell us about your plant needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white transition flex items-center justify-center ${
                  isSubmitting
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info with plant image */}
        <div className="flex flex-col">
          <div className="h-64 overflow-hidden rounded-2xl mb-8 shadow-lg">
            <img
              src={contactImage}
              alt="Contact us"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600 dark:text-green-400">
                <FiMail className="text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  support@greenthumb.app
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Typically reply within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600 dark:text-green-400">
                <FiPhone className="text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  Call Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +1 (555) 123-4567
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Mon-Fri, 9am-5pm EST
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600 dark:text-green-400">
                <FiMapPin className="text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  Visit Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  123 Garden Lane
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Botanical City, BC 10001
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                Follow Our Growth
              </h3>
              <div className="flex space-x-4">
                {["Instagram", "Twitter", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-green-50 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-gray-600 p-3 rounded-lg transition"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-5 w-5 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-24">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Common Questions
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Quick answers to some of our frequently asked questions
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              question: "How do I track my plant's growth?",
              answer:
                "Our dashboard provides automated growth tracking when you upload weekly photos.",
            },
            {
              question: "Can I share my plant collection?",
              answer:
                "Yes! You can create shareable links or connect with other users.",
            },
            {
              question: "What if I don't know my plant species?",
              answer:
                "Try our AI identification tool by uploading a clear photo.",
            },
            {
              question: "Is there a mobile app available?",
              answer:
                "Our web app works on all devices, with native apps coming soon.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-medium text-green-600 dark:text-green-400 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
