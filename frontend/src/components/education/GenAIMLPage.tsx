import React from "react";
import EducationImage from "../img/ml.jpg";
import JadavpurLogo from "../img/jadavpur.png";
import GreenAILogo from "../img/logo.png";
import QRCodeImage from "../img/qcode.webp";

const GenAIMLPage = () => {
  return (
    <section id="gen-ai-ml" className="py-20 bg-green-100">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Internship on Essentials of
            <span className="text-green-500"> Gen AI</span> and ML
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Empowering the Next Generation of Innovators with AI and Machine
            Learning Mastery.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image Section (Hidden on Mobile) */}
          <div className="space-y-6 hidden md:block">
            <img
              src={EducationImage}
              alt="Education"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Cards Section */}
          <div className="space-y-6">
            {/* First Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-0">
                  Essentials of Gen AI and ML
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
                Online Classes Start From 15 Nov 2024. Are you a 3rd or final
                year undergraduate student looking to gain a significant edge in
                the job market? Join our program designed to equip you with the
                skills and knowledge needed to excel in leveraging artificial
                intelligence for innovative solutions.
              </p>
              <p className="text-gray-600 font-semibold mb-6">
                Interested Institutes may also contact to help their students
                join this program and become industry-ready.
              </p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <a
                  href="https://drive.google.com/uc?export=download&id=153VwgW3PePdfpk7y3qARO5Xhl8ve5Jev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium text-center"
                >
                  Download Brochure
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=19stOnK0VD_fDQRbfbabh1MZrHUhO_DCt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium text-center"
                >
                  Download Flyer
                </a>
              </div>
            </div>

            {/* Second Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 mb-2">
                    <strong>Email:</strong> education@greenai.services
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +91 89819 41888
                  </p>
                </div>
                <div>
                  <img
                    src={QRCodeImage}
                    alt="Scan to Apply"
                    className="h-16 w-16 md:h-20 md:w-20 object-contain"
                  />
                  <h4>Scan to Apply</h4>
                </div>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeRb7bsbJanS0902W82DT97nya85bhGknbnCXLPlbY86gw_mg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAIMLPage;
