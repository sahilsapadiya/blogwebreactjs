import React from 'react'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-5 sm:px-10 md:px-16 lg:px-32 py-10 ">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 mt-[60px]">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-300 text-center mb-8">
        Last Updated: October 14, 2025
      </p>
      <section className="space-y-6 leading-relaxed text-gray-200">
        <p>
          Welcome to <strong>[OURBLOG WEB]</strong>. We value your privacy and are committed to protecting your personal information.
        </p>
        <h2 className="text-lg md:text-xl font-semibold mt-6">1. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Personal details like name, email, or login info (if provided).</li>
          <li>Usage data such as pages visited, time spent, and interactions.</li>
          <li>Device info like browser, OS, and IP address.</li>
          <li>Cookies and analytics to enhance experience.</li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold mt-6">2. How We Use Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To improve and maintain our services.</li>
          <li>To personalize your experience.</li>
          <li>To send important updates.</li>
          <li>To enhance security and prevent fraud.</li>
        </ul>

        <h2 className="text-lg md:text-xl font-semibold mt-6">3. Data Security</h2>
        <p>We take strong measures to protect your data, but no online method is 100% secure.</p>

        <h2 className="text-lg md:text-xl font-semibold mt-6">4. Third-Party Services</h2>
        <p>We may use <strong>Google Firebase</strong> or <strong>Google Analytics</strong> which follow their own privacy policies.</p>

        <h2 className="text-lg md:text-xl font-semibold mt-6">5. Children’s Privacy</h2>
        <p>We don’t knowingly collect data from children under 13. Contact us if such data was provided.</p>

        <h2 className="text-lg md:text-xl font-semibold mt-6">6. Changes to Policy</h2>
        <p>We may update this policy. Check the “Last Updated” date periodically.</p>

        <h2 className="text-lg md:text-xl font-semibold mt-6">7. Contact Us</h2>
        <p>Email: <strong>sapadiyagames@gmail.com</strong></p>
        <p>Website: <strong>sapadiya.shop</strong></p>

        <p className="mt-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} [OURBLOG] All rights reserved.
        </p>
      </section>
    </div>
  )
}

export default Privacy
