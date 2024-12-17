import React from "react";
import CCTV from "../img/CCTV.jpg";

const ProductCCTV = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full max-w-xl mx-auto group">
            <img
              src={CCTV}
              alt="AI-Powered CCTV"
              className="rounded-lg w-full object-cover shadow-2xl transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-3xl"
            />
          </div>

          {/* Text Content Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Total Surveillance:{" "}
                <span className="text-green-700">
                  Smarter AI-Powered CCTV Monitoring
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                Revolutionize Monitoring with Real-Time Insights and Automation
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Introducing Total Surveillance, an advanced AI-powered CCTV
              monitoring system designed to streamline asset tracking, counting,
              and security management. Fully customizable to suit your unique
              needs, Total Surveillance redefines efficiency, accuracy, and
              control.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            <span className="border-b-4 border-green-500">Key Features</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Asset Tracking &amp; Counting
              </h3>
              <p className="text-gray-700">
                Monitor and manage your assets with precision in real time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Customizable Solutions
              </h3>
              <p className="text-gray-700">
                Tailored configurations to adapt to your specific requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Real-Time Alerts
              </h3>
              <p className="text-gray-700">
                SMS Notifications, Email Integration, Live Alarms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Enhanced Security
              </h3>
              <p className="text-gray-700">
                Ensure the safety of your premises with continuous AI-powered
                surveillance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Scalable Design
              </h3>
              <p className="text-gray-700">
                Perfect for industries ranging from manufacturing to retail,
                logistics, and more.
              </p>
            </div>

            {/* Additional Key Feature */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Advanced Analytics & Reporting
              </h3>
              <p className="text-gray-700">
                Gain valuable insights through data visualization and analytics
                dashboards, helping you make informed decisions and optimize
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCCTV;
