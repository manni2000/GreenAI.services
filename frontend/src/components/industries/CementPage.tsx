import React from "react";
import CementImage from "../img/cement.png";

const CementPage = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={CementImage}
                alt="Smart Cement Solutions"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl text-green-700 font-bold">
                Smart Cement Solutions
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Advanced technology solutions for the cement industry.
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Predictive Maintenance Systems</p>
              <p>Concrete Quality Analysis</p>
              <p>Energy-Efficient Cement Management</p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            <span className="border-b-4 border-green-500">What We Offer</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Predictive Maintenance Systems
              </h3>
              <p className="text-gray-700">
                AI-driven predictive maintenance to prevent equipment failures,
                reduce downtime, and enhance operational reliability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Concrete Quality Analysis
              </h3>
              <p className="text-gray-700">
                Advanced tools and techniques for monitoring and improving the
                quality of concrete to meet industry standards and client
                expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Energy-Efficient Cement Management
              </h3>
              <p className="text-gray-700">
                Intelligent systems for managing energy usage, reducing costs,
                and minimizing the environmental impact of cement manufacturing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CementPage;
