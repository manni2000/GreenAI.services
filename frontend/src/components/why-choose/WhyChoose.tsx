import { Brain, Users, Lightbulb, Settings } from "lucide-react";

const WhyChoose = () => {
  return (
    <section id="why-greenai" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
              WHY CHOOSE GREENAI SERVICES AS YOUR AI PARTNER?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Discover how GreenAI seamlessly integrates ethical principles,
              cutting-edge technology, and a client-focused approach to deliver
              innovative, tailor-made AI solutions. By leveraging the latest
              advancements in artificial intelligence, we ensure that our
              solutions not only meet the unique needs of your business but also
              align with the highest standards of integrity and responsibility.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <span className="text-white font-bold text-xl">GreenAI</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Lightbulb, title: "Ethical Innovation" },
                { icon: Users, title: "Client-Centric Approach" },
                { icon: Brain, title: "Cutting-Edge Technologies" },
                { icon: Settings, title: "Tailor-Made Solutions" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="feature-card group border-2 border-green-600 p-4 rounded-lg"
                >
                  <item.icon className="w-8 h-8 text-green-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
