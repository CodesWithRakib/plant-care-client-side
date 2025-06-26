import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaLeaf,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 dark:text-green-400 font-medium"
      : "hover:text-green-600 dark:hover:text-green-400 transition-colors";

  // Simple newsletter submit handler
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    // You can add your newsletter API call here
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Green Nest Logo"
                className="w-12 h-12 rounded-full border-2 border-green-500 dark:border-green-600"
              />
              <h3 className="pacifico text-2xl text-green-600 dark:text-green-500">
                Green Nest
              </h3>
            </div>
            <p className="text-sm">
              Built by plant lovers, for plant lovers. Join our growing
              community and never forget a watering day again. Let's grow
              together!
            </p>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
              <FaLeaf className="animate-pulse" />
              <span className="text-sm font-medium">Happy Planting!</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/all-plants" className={navLinkClass}>
                  All Plants
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-plants" className={navLinkClass}>
                  My Plants
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-plant" className={navLinkClass}>
                  Add Plant
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MdPhone className="text-green-600 dark:text-green-500 mt-1" />
                <span>+880 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <MdEmail className="text-green-600 dark:text-green-500 mt-1" />
                <span>info@greennest.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-green-600 dark:text-green-500 mt-1" />
                <span>
                  House 12, Road 1
                  <br />
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links + Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/CodesWithRakib/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/codeswithrakib/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://x.com/CodesWithRakib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/codeswithrakib/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <form onSubmit={handleNewsletterSubmit} className="mt-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 text-sm border border-gray-300 dark:border-zinc-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 w-full"
                  aria-required="true"
                  aria-describedby="newsletter-help"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-4 py-2 rounded-r-lg text-sm transition-colors"
                >
                  Join
                </button>
              </div>
              <p
                id="newsletter-help"
                className="text-xs text-gray-500 dark:text-gray-400 mt-1"
              >
                We respect your privacy.
              </p>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-zinc-700 mt-10 pt-6 text-center text-sm">
          <p>
            &copy; {currentYear} Green Nest. All rights reserved.
            <span className="mx-2">•</span>
            <Link
              to="/privacy-policy"
              className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="mx-2">•</span>
            <Link
              to="/terms-of-service"
              className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
