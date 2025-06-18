export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="prose dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            These Terms and Conditions (&qout;Terms&qout;) govern your use of
            the TechCraft Solutions website and services. By accessing or using
            our services, you agree to be bound by these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            software, is the property of TechCraft Solutions and protected by
            copyright laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Use our services for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper working of our services</li>
            <li>Use our content for commercial purposes without permission</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Service Modifications</h2>
          <p>
            We reserve the right to modify or discontinue our services at any
            time without notice. We shall not be liable for any modification,
            suspension, or discontinuance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            5. Limitation of Liability
          </h2>
          <p>
            TechCraft Solutions shall not be liable for any indirect,
            incidental, or consequential damages resulting from the use or
            inability to use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Delaware, without regard to its conflict of
            law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
          <p>
            For any questions about these Terms, please contact us at
            legal@techcraft.com.
          </p>
        </section>
      </div>
    </div>
  );
}
