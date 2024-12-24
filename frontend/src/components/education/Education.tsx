import React from "react";
import EducationCard from "./EducationCard";
import EducationImage from "../img/education1.avif";
import JadavpurLogo from "../img/jadavpur.png";
import GreenAILogo from "../img/logo.png";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-green-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            GREEN<span className="text-green-500">AI</span> EDUCATION
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer AI boot camps, which can provide significant benefits to
            learners by introducing them to the fundamentals of artificial
            intelligence (AI) and preparing them for future careers in this
            rapidly growing field.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:space-x-8 items-start">
          {/* Image Section */}
          <div className="hidden md:block w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={EducationImage}
              alt="Education Image"
              className="w-full h-auto max-h-[37rem] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Cards Section */}
          <div className="flex flex-col space-y-6 w-full md:w-1/2">
            <EducationCard
              title="Internship on Essentials of Gen AI and ML"
              subheading="Essentials of Gen AI and ML"
              description={
                <>
                  <h2>Online Classes Start From 15 March 2025.</h2>
                  <h3>
                    Are you a 3rd or final year undergraduate student looking to
                    gain a significant edge in the job market?
                  </h3>
                </>
              }
              organisedByImgs={[GreenAILogo, JadavpurLogo]}
              link="/education/gen-ai-ml"
            />
            <EducationCard
              title="2-days crash course on Industry 4.0 AI meets IoT"
              subheading="Industry 4.0 AI meets IoT"
              description="Join our 2-days crash course to learn about the intersection of AI and IoT in Industry 4.0."
              organisedByImgs={[GreenAILogo, JadavpurLogo]}
              link="/education/industry-4-ai-iot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
