import React from "react";
import useTitle from "../hooks/useTitle";

const Terms = () => {
  useTitle("Green Nest - Terms of Service");
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold mb-6 text-green-700 dark:text-green-400">
        Terms of Service
      </h1>
      <p className="mb-6">Last updated: June 2025</p>

      <section className="mb-6">
        <p>
          Welcome to Green Nest! By using our website and services, you agree to
          the following terms:
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing Green Nest, you agree to comply with these Terms of
          Service and our Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Use of the Website</h2>
        <p>
          You agree to use Green Nest responsibly and not engage in any harmful
          or unlawful activity.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
        <p>
          All content on Green Nest, including logos, text, and images, is owned
          by Green Nest or its licensors and is protected by copyright laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Content</h2>
        <p>
          If you submit any content (comments, photos, etc.), you grant us
          permission to use it to improve the site or promote our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Disclaimer</h2>
        <p>
          Green Nest provides content "as is" without warranties. We do not
          guarantee accuracy or uninterrupted access.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Limitation of Liability
        </h2>
        <p>
          We are not liable for any damages resulting from your use of the
          website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Privacy</h2>
        <p>Your use of the website is also governed by our Privacy Policy.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access if you
          violate these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
        <p>These terms are governed by the laws of Bangladesh.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
        <p>
          We may update these terms and will notify you by posting the new
          version on this page.
        </p>
      </section>

      <section className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400 italic">
        <p>
          Questions? Contact us at{" "}
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

export default Terms;
