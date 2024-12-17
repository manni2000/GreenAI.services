import React from "react";
import CCTV from "../img/CCTV.jpg";
import Health from "../img/Health.jpg";

const Product = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Products</h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover our range of innovative products designed to enhance your
            business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {/* Product 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              NEW
            </div>
            <img
              src={CCTV}
              alt="Product 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Total Surveillance Smarter AI-Powered CCTV Monitoring and
                Automation
              </h3>
              <p className="text-gray-600 mt-2">
                Revolutionize Monitoring with Real-Time Insights and Automation
                Introducing Total Surveillance, an advanced AI-powered CCTV
                monitoring system designed to streamline asset tracking,
                counting, and security management.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          {/* Product 3 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              NEW
            </div>
            <img
              src={Health}
              alt="Product 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Optimize Conveyor Operations with AI-Powered Health Monitoring
              </h3>
              <p className="text-gray-600 mt-2">
                Prevent Downtime, Enhance Efficiency, and Maximize Productivity
                Introducing our AI-powered Conveyor Belt Health Monitoring
                System, a cutting-edge solution designed to ensure the seamless
                operation of conveyor systems in industrial environments.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
