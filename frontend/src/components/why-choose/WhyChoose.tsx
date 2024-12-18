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
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Ethical Innovation",
              description:
                "We prioritize ethical practices in AI development, ensuring sustainable and responsible innovation.",
            },
            {
              icon: Users,
              title: "Client-Centric Approach",
              description:
                "Our solutions are tailored to meet client needs, focusing on delivering measurable results.",
            },
            {
              icon: Brain,
              title: "Cutting-Edge Technology",
              description:
                "We leverage the latest advancements in AI to stay ahead of the curve and deliver excellence.",
            },
            {
              icon: Settings,
              title: "Tailor-Made Solutions",
              description:
                "Every project is unique. Our bespoke solutions are designed to fit your specific goals and challenges.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="feature-card group bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <item.icon className="w-12 h-12 text-green-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
