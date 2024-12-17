import React from "react";
import { Lightbulb, Users, Brain, Settings } from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-500">
            WHY CHOOSE GREENAI
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            At GreenAI, we are committed to delivering innovative, tailor-made
            AI solutions. By leveraging the latest advancements in artificial
            intelligence, we ensure that our solutions not only meet the unique
            needs of your business but also align with the highest standards of
            integrity and responsibility.
          </p>
        </div>
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 shadow-lg">
              <span className="text-white font-bold text-xl">GreenAI</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Lightbulb, title: "Ethical Innovation" },
            { icon: Users, title: "Client-Centric Approach" },
            { icon: Brain, title: "Cutting-Edge Technologies" },
            { icon: Settings, title: "Tailor-Made Solutions" },
          ].map((item, index) => (
            <div
              key={index}
              className="feature-card group bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <item.icon className="w-12 h-12 text-green-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
