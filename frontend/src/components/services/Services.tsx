import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Educational Innovations for the Digital Age",
    description:
      "Revolutionizing education with AI-driven tools to enhance personalized learning, and improve outcomes.",
    icon: <ArrowRight className="w-8 h-8 text-green-400" />,
    link: "/service/educational-innovations",
  },
  {
    id: 2,
    name: "Next-Generation Customer Experience",
    description:
      "Revolutionizing customer service through AI-powered solutions that enhance engagement, support",
    icon: <ArrowRight className="w-8 h-8 text-green-400" />,
    link: "/service/customer-experience",
  },
  {
    id: 3,
    name: "Vision-Embedded Robotic Automation",
    description:
      "AI-powered robotic systems that combine vision and perception for smarter automation.",
    icon: <ArrowRight className="w-8 h-8 text-green-400" />,
    link: "/service/robotic-automation",
  },
  {
    id: 4,
    name: "Carbon Footprint Management",
    description:
      "AI-driven solutions to estimate, reduce, and optimize your organization's carbon footprint.",
    icon: <ArrowRight className="w-8 h-8 text-green-400" />,
    link: "/service/carbon-footprint",
  },
  {
    id: 5,
    name: "Generative AI-based Chatbot",
    description:
      "AI-driven chatbots that generate personalized responses, automate communication, and enhance customer experiences.",
    icon: <ArrowRight className="w-8 h-8 text-green-400" />,
    link: "/service/generative-ai-chatbot",
  },
  {
    id: 6,
    name: "Industrial Automation",
    description:
      "AI-driven industrial automation solutions that enhance efficiency, accuracy, and productivity.",
    icon: <ArrowRight className="w-8 h-8 text-green-400" />,
    link: "/service/industrial-automation",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  const [selectedService, setSelectedService] = useState(() => {
    const locationState = location.state as {
      selectedServiceId?: number;
      scrollPosition?: number;
    } | null;
    const initialServiceId = locationState?.selectedServiceId;
    return (
      services.find((service) => service.id === initialServiceId) || services[0]
    );
  });

  useEffect(() => {
    const locationState = location.state as {
      selectedServiceId?: number;
      scrollPosition?: number;
    } | null;

    if (locationState?.scrollPosition && servicesRef.current) {
      window.scrollTo({
        top: locationState.scrollPosition,
        behavior: "instant",
      });
    }
  }, [location.state]);

  const handleServiceNavigation = (
    link: string,
    service: (typeof services)[0]
  ) => {
    if (servicesRef.current) {
      const sectionTop =
        servicesRef.current.getBoundingClientRect().top + window.scrollY;

      navigate(link, {
        state: {
          selectedServiceId: service.id,
          scrollPosition: sectionTop,
        },
      });
    }

    window.scrollTo(0, 0);
  };

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-20 bg-gradient-to-r from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-green-400 mb-4 decoration-4 underline-offset-8">
            OUR SERVICES
          </h2>
          <p className="text-2xl text-gray-300">
            Experience our revolutionary AI-driven services designed to elevate
            your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-green-400 p-6 flex flex-col justify-between ${
                selectedService.id === service.id
                  ? "border-2 border-green-400"
                  : ""
              }`}
              onClick={() => setSelectedService(service)}
              style={{ height: "300px" }}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() =>
                      handleServiceNavigation(service.link, service)
                    }
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                  >
                    {service.icon}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
