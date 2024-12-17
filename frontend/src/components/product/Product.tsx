import React from "react";
import { useNavigate } from "react-router-dom";
import CCTV from "../img/CCTV.jpg";
import Health from "../img/Health.jpg";
import Surface from "../img/Surface.jpg";

const Product = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

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
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {/* Product 1 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              NEW
            </div>
            <img
              src={CCTV}
              alt="Product 1"
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
              <button
                onClick={() => handleNavigate("/product-cctv")}
                className="mt-4 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
          {/* Product 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              NEW
            </div>
            <img
              src={Health}
              alt="Product 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Optimize Conveyor Operations with AI-Powered Health Monitoring
                and Automation
              </h3>
              <p className="text-gray-600 mt-2">
                Prevent Downtime, Enhance Efficiency, and Maximize Productivity
                Introducing our AI-powered Conveyor Belt Health Monitoring
                System, a cutting-edge solution designed to ensure the seamless
                operation of conveyor systems in industrial environments.
              </p>
              <button
                onClick={() => handleNavigate("/product-health")}
                className="mt-4 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
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
              src={Surface}
              alt="Product 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Revolutionizing Surface Analysis with Precision and Innovation
              </h3>
              <p className="text-gray-600 mt-2">
                Surface Analyzer: Advanced AI-Powered Surface Inspection Welcome
                to Surface Analyzer, the next-generation tool for precise and
                efficient surface analysis. Built on cutting-edge AI technology
                and paired with the advanced Arducam 20MP USB camera module,
                Surface Analyzer sets a new benchmark in surface inspection and
                quality assurance.
              </p>
              <button
                onClick={() => handleNavigate("/product-surface")}
                className="mt-4 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
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
