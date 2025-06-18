export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="prose dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            TechCraft Solutions ${`("we," "our," or "us")`} is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Personal Data:</strong> Name, email address, phone number
              that you voluntarily provide when contacting us.
            </li>
            <li>
              <strong>Derivative Data:</strong> IP address, browser type,
              operating system when you access our site.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your
              experience on our site.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            3. Use of Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide and maintain our service</li>
            <li>Notify you about changes to our service</li>
            <li>Allow you to participate in interactive features</li>
            <li>Provide customer support</li>
            <li>Gather analysis to improve our website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your
            information. However, no method of transmission over the Internet is
            100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at privacy@techcraft.com.
          </p>
        </section>
      </div>
    </div>
  );
}
