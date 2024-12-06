import { Brain, Users, Lightbulb, Settings } from "lucide-react";

const AllWhygreenaiPage = () => {
  return (
    <section id="why-greenai" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-green-400 mb-6">
            WHY CHOOSE GREENAI SERVICES AS YOUR AI PARTNER?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Discover how GreenAI seamlessly integrates ethical principles,
            cutting-edge technology, and a client-focused approach to deliver
            innovative, tailor-made AI solutions. By leveraging the latest
            advancements in artificial intelligence, we ensure that our
            solutions not only meet the unique needs of your business but also
            align with the highest standards of integrity and responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              title: "Cutting-Edge Technologies",
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
              className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <item.icon className="w-8 h-8 text-green-400 mr-4" />
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllWhygreenaiPage;
