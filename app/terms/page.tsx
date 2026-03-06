import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Noa",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          &larr; Back to Noa
        </Link>

        <div className="rounded-2xl border border-primaryText/10 bg-card p-8 md:p-12">
          <h1 className="text-3xl font-semibold tracking-tight text-primaryText">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-secondaryText">
            Last updated: 6 March 2025
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-secondaryText">
            {/* 1 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                1. About these terms
              </h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access
                to and use of the Noa application, website and related services
                (collectively, the &ldquo;Service&rdquo;) operated by Noa
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By
                creating an account or using the Service you agree to be bound by
                these Terms. If you do not agree, do not use the Service.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                2. Eligibility
              </h2>
              <p>
                You must be at least 13 years old to use Noa. If you are under
                18, you confirm that you have the consent of a parent or
                guardian. By using the Service you represent that you meet these
                requirements.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                3. Your account
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  You are responsible for maintaining the security of your
                  account credentials.
                </li>
                <li>
                  You agree to provide accurate and up-to-date information when
                  creating your account.
                </li>
                <li>
                  You are responsible for all activity that occurs under your
                  account.
                </li>
                <li>
                  Notify us immediately at{" "}
                  <a
                    href="mailto:support@asknoa.app"
                    className="font-medium text-accent hover:underline"
                  >
                    support@asknoa.app
                  </a>{" "}
                  if you suspect unauthorised access.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                4. The Service
              </h2>
              <p>
                Noa provides calendar management, task tracking, lists,
                reminders and household coordination tools. You may interact with
                Noa through the iOS app and, on paid plans, via WhatsApp. We
                reserve the right to modify, suspend or discontinue any part of
                the Service at any time with reasonable notice.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                5. Subscriptions and payment
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Noa offers a free tier and paid subscription plans (Single and
                  Household). Pricing is displayed on our website and within the
                  app.
                </li>
                <li>
                  Paid subscriptions are billed monthly. You authorise us to
                  charge your chosen payment method on a recurring basis.
                </li>
                <li>
                  You may cancel your subscription at any time. Cancellation
                  takes effect at the end of the current billing period. No
                  partial refunds are provided for the remaining period.
                </li>
                <li>
                  We may change pricing with at least 30 days&apos; notice. If
                  you do not agree to a price change you may cancel before the
                  new price takes effect.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                6. Acceptable use
              </h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Use the Service for any unlawful purpose or in violation of any
                  applicable laws.
                </li>
                <li>
                  Attempt to gain unauthorised access to any part of the Service
                  or its infrastructure.
                </li>
                <li>
                  Interfere with or disrupt the Service or servers connected to
                  it.
                </li>
                <li>
                  Reverse-engineer, decompile or disassemble any part of the
                  Service.
                </li>
                <li>
                  Use automated means (bots, scrapers) to access the Service
                  without our written permission.
                </li>
                <li>
                  Upload or transmit malicious code, spam or harmful content.
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                7. Your content
              </h2>
              <p>
                You retain ownership of all content you create in Noa (events,
                tasks, lists, messages). By using the Service you grant us a
                limited licence to store, process and display your content solely
                for the purpose of providing the Service to you. We will not use
                your content for advertising or sell it to third parties.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                8. Third-party services
              </h2>
              <p>
                Noa integrates with third-party services including Apple
                Calendar, Google Calendar and WhatsApp. Your use of these
                services is subject to their respective terms and privacy
                policies. We are not responsible for the availability or conduct
                of third-party services.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                9. Intellectual property
              </h2>
              <p>
                The Service, including its design, branding, code and
                documentation, is owned by Noa and protected by intellectual
                property laws. These Terms do not grant you any rights to our
                trademarks, logos or other brand features.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                10. Disclaimer of warranties
              </h2>
              <p>
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; without warranties of any kind, whether express
                or implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose and
                non-infringement. We do not guarantee that the Service will be
                uninterrupted, error-free or secure.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                11. Limitation of liability
              </h2>
              <p>
                To the maximum extent permitted by law, Noa shall not be liable
                for any indirect, incidental, special, consequential or punitive
                damages, or any loss of profits, data or goodwill, arising out of
                or in connection with your use of the Service. Our total
                liability for any claim arising from these Terms shall not exceed
                the amount you have paid us in the 12 months preceding the claim.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                12. Termination
              </h2>
              <p>
                You may delete your account at any time through the app or by
                contacting us. We may suspend or terminate your access if you
                breach these Terms or if we are required to do so by law. Upon
                termination, your right to use the Service ceases immediately.
                Provisions that by their nature should survive termination
                (including sections on liability, intellectual property and
                governing law) will continue to apply.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                13. Changes to these terms
              </h2>
              <p>
                We may update these Terms from time to time. We will notify you
                of material changes via email or an in-app notice at least 14
                days before they take effect. Continued use of the Service after
                changes take effect constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                14. Governing law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of England and Wales. Any disputes arising from these Terms
                shall be subject to the exclusive jurisdiction of the courts of
                England and Wales.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                15. Contact
              </h2>
              <p>
                If you have questions about these Terms, please contact us at{" "}
                <a
                  href="mailto:support@asknoa.app"
                  className="font-medium text-accent hover:underline"
                >
                  support@asknoa.app
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
