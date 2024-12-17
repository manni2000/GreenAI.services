import React from "react";
import Health from "../img/Health.jpg";

const ProductHealth = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section with hover effect */}
          <div className="relative w-full max-w-xl mx-auto group">
            <img
              src={Health}
              alt="AI-Powered Healthcare Monitoring"
              className="rounded-lg w-full object-cover shadow-2xl transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-3xl"
            />
          </div>

          {/* Text Content Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Total Healthcare:{" "}
                <span className="text-green-700">
                  Smarter AI-Powered Patient Monitoring
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                Revolutionize Healthcare with Real-Time Insights and Automation
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Introducing Total Healthcare, an advanced AI-powered patient
              monitoring system designed to streamline patient tracking, vital
              monitoring, and safety management. Fully customizable to suit your
              unique needs, Total Healthcare redefines efficiency, accuracy, and
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
                Patient Tracking &amp; Monitoring
              </h3>
              <p className="text-gray-700">
                Monitor patient vitals and status in real time for improved care
                and responsiveness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Customizable Solutions
              </h3>
              <p className="text-gray-700">
                Tailored configurations to adapt to your healthcare facility's
                specific requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Real-Time Alerts
              </h3>
              <p className="text-gray-700">
                Receive SMS notifications, email updates, and live alarms for
                critical patient events.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Enhanced Patient Safety
              </h3>
              <p className="text-gray-700">
                Ensure continuous oversight and rapid intervention through
                AI-powered surveillance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Scalable Design
              </h3>
              <p className="text-gray-700">
                Perfect for a range of healthcare facilities, from small clinics
                to large hospitals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Advanced Analytics &amp; Reporting
              </h3>
              <p className="text-gray-700">
                Leverage data visualization and analytics to make informed
                decisions and optimize care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHealth;
