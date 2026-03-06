import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Noa",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-secondaryText">
            Last updated: 6 March 2025
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-secondaryText">
            {/* 1 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                1. Who we are
              </h2>
              <p>
                Noa (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is
                a personal productivity application operated from the United
                Kingdom. Our website is{" "}
                <span className="font-medium text-primaryText">asknoa.app</span>.
                For any privacy-related questions please contact us at{" "}
                <a
                  href="mailto:privacy@asknoa.app"
                  className="font-medium text-accent hover:underline"
                >
                  privacy@asknoa.app
                </a>
                .
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                2. Information we collect
              </h2>
              <p className="mb-3">We collect the following categories of data:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-primaryText">Account information</span>{" "}
                  — name, email address, and password when you create an account.
                </li>
                <li>
                  <span className="font-medium text-primaryText">Waitlist information</span>{" "}
                  — name and email address when you sign up for our waitlist.
                </li>
                <li>
                  <span className="font-medium text-primaryText">Calendar data</span>{" "}
                  — events and schedules from calendars you choose to connect
                  (e.g. Apple Calendar, Google Calendar).
                </li>
                <li>
                  <span className="font-medium text-primaryText">Tasks, lists and reminders</span>{" "}
                  — content you create within the app.
                </li>
                <li>
                  <span className="font-medium text-primaryText">WhatsApp messages</span>{" "}
                  — messages you send to Noa via WhatsApp for the purpose of
                  processing commands and queries.
                </li>
                <li>
                  <span className="font-medium text-primaryText">Usage data</span>{" "}
                  — device type, operating system, app version and general
                  interaction patterns to help us improve the product.
                </li>
                <li>
                  <span className="font-medium text-primaryText">Payment information</span>{" "}
                  — processed securely by our payment provider. We do not store
                  full card details on our servers.
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                3. How we use your information
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>To provide, maintain and improve the Noa service.</li>
                <li>To process natural language commands via WhatsApp and the app.</li>
                <li>To sync calendars, tasks, lists and reminders across your household.</li>
                <li>To send you reminders, nudges and daily summaries you have configured.</li>
                <li>To process payments and manage subscriptions.</li>
                <li>To communicate service updates, security alerts and support messages.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                4. Legal basis for processing (UK GDPR)
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-primaryText">Contract</span>{" "}
                  — processing necessary to provide the service you signed up for.
                </li>
                <li>
                  <span className="font-medium text-primaryText">Legitimate interest</span>{" "}
                  — analytics and product improvement, provided these do not
                  override your rights.
                </li>
                <li>
                  <span className="font-medium text-primaryText">Consent</span>{" "}
                  — marketing communications, which you can opt out of at any time.
                </li>
                <li>
                  <span className="font-medium text-primaryText">Legal obligation</span>{" "}
                  — where we are required by law to retain or disclose data.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                5. Data sharing
              </h2>
              <p>
                We do not sell your personal data. We share data only with:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-primaryText">Service providers</span>{" "}
                  — hosting, payment processing, analytics and messaging
                  infrastructure providers who act on our behalf under strict
                  data processing agreements.
                </li>
                <li>
                  <span className="font-medium text-primaryText">Calendar providers</span>{" "}
                  — Apple and Google, only to the extent required to sync your
                  calendars.
                </li>
                <li>
                  <span className="font-medium text-primaryText">Law enforcement</span>{" "}
                  — when required by applicable law or valid legal process.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                6. Data storage and security
              </h2>
              <p>
                Your data is stored on secure servers within the United Kingdom
                and/or the European Economic Area. We use encryption in transit
                (TLS) and at rest, along with access controls and regular
                security reviews, to protect your information.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                7. Data retention
              </h2>
              <p>
                We retain your data for as long as your account is active or as
                needed to provide the service. If you delete your account, we
                will remove your personal data within 30 days, except where we
                are legally required to retain it.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                8. Your rights
              </h2>
              <p className="mb-3">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data.</li>
                <li>Object to or restrict certain processing.</li>
                <li>Request data portability.</li>
                <li>Withdraw consent at any time (where consent is the legal basis).</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email{" "}
                <a
                  href="mailto:privacy@asknoa.app"
                  className="font-medium text-accent hover:underline"
                >
                  privacy@asknoa.app
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                9. Cookies
              </h2>
              <p>
                Our website uses only essential cookies required for the site to
                function. We do not use advertising or third-party tracking
                cookies.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                10. Children
              </h2>
              <p>
                Noa is not directed at children under 13. We do not knowingly
                collect personal data from children under 13. If you believe a
                child has provided us with personal data, please contact us and
                we will delete it promptly.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                11. Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. We will notify you
                of material changes via email or an in-app notice. Continued use
                of the service after changes take effect constitutes acceptance
                of the updated policy.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="mb-3 text-lg font-semibold text-primaryText">
                12. Contact
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to make a
                complaint, please contact us at{" "}
                <a
                  href="mailto:privacy@asknoa.app"
                  className="font-medium text-accent hover:underline"
                >
                  privacy@asknoa.app
                </a>
                . You also have the right to lodge a complaint with the
                Information Commissioner&apos;s Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  ico.org.uk
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
