import React from "react";
import useTitle from "../hooks/useTitle";

const Privacy = () => {
  useTitle("Green Nest - Privacy Policy");
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold mb-6 text-green-700 dark:text-green-400">
        Privacy Policy
      </h1>
      <p className="mb-6">Last updated: June 2025</p>

      <section className="mb-6">
        <p>
          At Green Nest, we value your privacy. This policy explains how we
          collect, use, and protect your information when you use our website
          and services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Personal Information:</strong> When you sign up for our
            newsletter or create an account, we collect your email address and
            any other information you provide.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect data automatically, such
            as your IP address, browser type, and pages you visit, using cookies
            and analytics tools.
          </li>
          <li>
            <strong>Third-Party Services:</strong> We use third-party services
            like Google Analytics to help us understand how visitors use our
            site.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p>
          To send you newsletters, updates, and relevant notifications; to
          improve our website, products, and services; and to maintain security
          and prevent fraud.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your
          experience. You can manage cookie preferences through your browser
          settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Sharing Your Information
        </h2>
        <p>
          We do <em>not</em> sell or rent your personal data. We may share
          information only with trusted service providers to help operate our
          services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We implement security measures to protect your data but cannot
          guarantee 100% security due to inherent internet risks.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. Contact us anytime at{" "}
          <a
            href="mailto:info@greennest.com"
            className="text-green-600 dark:text-green-400 underline"
          >
            info@greennest.com
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
        <p>
          Our services are not directed to children under 13 years old, and we
          do not knowingly collect their personal information.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          8. Changes to this Policy
        </h2>
        <p>
          We may update this policy occasionally. We encourage you to review it
          periodically.
        </p>
      </section>

      <section className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400 italic">
        <p>
          For any questions or concerns, please email us at{" "}
          <a
            href="mailto:info@greennest.com"
            className="text-green-600 dark:text-green-400 underline"
          >
            info@greennest.com
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default Privacy;
