import React from "react";
import IoTImage from "../img/industries.jpg";
import JadavpurLogo from "../img/jadavpur.png";
import GreenAILogo from "../img/logo.png";

const Industry4IoTPage = () => {
  return (
    <section id="industry-4-iot" className="py-20 bg-green-100">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
            2-day Crash Course on{" "}
            <span className="text-green-500">Industry 4.0</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Integrating AI and IoT for Business Innovation and Strategic Growth.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:space-x-8 items-start">
          {/* Image Section (Hidden on Mobile) */}
          <div className="hidden md:block w-full md:w-1/2">
            <img
              src={IoTImage}
              alt="IoT Education Image"
              className="w-full h-auto max-h-[36rem] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Cards Section */}
          <div className="flex flex-col space-y-6 w-full md:w-1/2">
            {/* First Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300 flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-0">
                  Industry 4.0 AI Meets IoT
                </h3>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-500">Organised By:</p>
                  <img
                    src={GreenAILogo}
                    alt="GreenAI"
                    className="h-6 md:h-8 w-6 md:w-8 object-contain"
                  />
                  <img
                    src={JadavpurLogo}
                    alt="Jadavpur"
                    className="h-6 md:h-8 w-6 md:w-8 object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Are you looking to leverage IoT, AI, and Industry 4.0 to create
                new business opportunities, improve processes, and drive
                innovation in your organization? Join our specialized course
                designed to provide you with the essential skills and expertise
                for success.
              </p>
              <p className="text-gray-600 font-semibold mb-6">
                This unique program combines theoretical knowledge and practical
                lab experience, ensuring you're well-prepared for Industry 4.0.
              </p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <a
                  href="https://drive.google.com/uc?export=download&id=1qpROW2skc31gB22xMX81UkminXeg1adn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium text-center"
                >
                  Download Brochure
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1PBwhmYzstjLdH_USRTDu9hmXH3Ig8vUv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium text-center"
                >
                  Download Flyer
                </a>
              </div>
            </div>

            {/* Second Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300 flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 mb-2">
                    <strong>Email:</strong> education@greenai.services
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +91 89819 41888
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry4IoTPage;
