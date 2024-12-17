import React from "react";
import Surface from "../img/Surface.jpg";

const ProductSurface = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full max-w-xl mx-auto group">
            <img
              src={Surface}
              alt="AI-Powered Surface Analyzer"
              className="rounded-lg w-full object-cover shadow-2xl transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-3xl"
            />
          </div>

          {/* Text Content Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Revolutionizing Surface Analysis:{" "}
                <span className="text-green-700">
                  Advanced AI-Powered Surface Inspection
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                Precision and Innovation in Surface Analysis
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to Surface Analyzer, the next-generation tool for precise
              and efficient surface analysis. Built on cutting-edge AI
              technology and paired with the advanced Arducam 20MP USB camera
              module, Surface Analyzer sets a new benchmark in surface
              inspection and quality assurance.
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
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Advanced Analytics
              </h3>
              <p className="text-gray-700">
                Deep insights with comprehensive data analysis and reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSurface;
