import React from "react";
import EducationCard from "./EducationCard";
import EducationImage from "../img/education.webp";
import OrganisedByImg from "../img/jadavpur.png";

const AllEducationPage = () => {
  return (
    <section id="education" className="py-20 bg-green-100">
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            GREEN<span className="text-green-500">AI</span> EDUCATION
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer AI boot camps, which can provide significant benefits to
            learners by introducing them to the fundamentals of artificial
            intelligence (AI) and preparing them for future careers in this
            rapidly growing field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <img
              src={EducationImage}
              alt="Education Image"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <EducationCard
              title="Internship on Essentials of Gen AI and ML"
              subheading="Essentials of Gen AI and ML"
              description="Online Classes Start From 15 Nov 2024. Are you a 3rd or final year undergraduate student looking to gain a significant edge in the job market?"
              organisedByImg={OrganisedByImg}
            />
            <EducationCard
              title="2-days crash course on Industry 4.0 AI meets IoT"
              subheading="2-day Crash Course on Industry 4.0"
              description="Online Classes Start From 15 Nov 2024. Are you looking to leverage IoT, AI, and Industry 4.0 to create new business opportunities, improve processes, and drive innovation in your organization?"
              organisedByImg={OrganisedByImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllEducationPage;
