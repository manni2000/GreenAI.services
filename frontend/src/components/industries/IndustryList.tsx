import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import infrastructure from "../img/infrastructure.webp";
import Steel from "../img/steel.jpg";
import Automobile from "../img/automobile.png";
import Power from "../img/power.jpg";
import Transportation from "../img/infrastructure.webp";
import Mining from "../img/mining.jpeg";
import SurfaceAnalyzer from "../img/SurfaceAnalyzer.webp";

const industries = [
  {
    id: 1,
    name: "Steel",
    image: Steel,
    description: [
      "Innovative processes for efficient steel manufacturing.",
      "Use of AI and automation in the production lines.",
      "Sustainable practices in steel recycling.",
    ],
    path: "/steel",
  },
  {
    id: 2,
    name: "Infrastructure",
    image: infrastructure,
    description: [
      "Smart infrastructure solutions.",
      "Predictive maintenance systems.",
      "Energy-efficient building management.",
    ],
    path: "/infrastructure",
  },
  {
    id: 3,
    name: "Automobile",
    image: Automobile,
    description: [
      "Autonomous driving technologies.",
      "Manufacturing optimization.",
      "Quality control automation.",
    ],
    path: "/automobile",
  },
  {
    id: 4,
    name: "Power",
    image: Power,
    description: [
      "Renewable energy integration",
      "Carbon capture and storage.",
      "Smart grids and AI optimization.",
    ],
    path: "/power",
  },
  {
    id: 5,
    name: "Transportation",
    image: Transportation,
    description: [
      "Fleet management solutions.",
      "Route optimization.",
      "Predictive maintenance.",
    ],
    path: "/transportation",
  },
  {
    id: 6,
    name: "Mining",
    image: Mining,
    description: [
      "Automation and robotics.",
      "AI for exploration.",
      "Sustainable mining practices.",
    ],
    path: "/mining",
  },
  {
    id: 7,
    name: "SurfaceAnalyzer",
    image: SurfaceAnalyzer,
    description: [
      "Purpose-Built for Fabrics",
      "High-Resolution Inspection",
      "AI-Driven Detection",
    ],
    path: "/Surface-Analyzer",
  },
];

const IndustryList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize selected industry from location state or default to first industry
  const [selectedIndustry, setSelectedIndustry] = useState(() => {
    // Check if we have a saved industry from navigation state
    const locationState = location.state as {
      selectedIndustryId?: number;
    } | null;
    const initialIndustryId = locationState?.selectedIndustryId;
    return (
      industries.find((ind) => ind.id === initialIndustryId) || industries[0]
    );
  });

  // Restore scroll position and selected industry when returning to the page
  useEffect(() => {
    const locationState = location.state as {
      scrollPosition?: number;
      selectedIndustryId?: number;
    } | null;

    // Scroll to saved position if exists
    if (locationState?.scrollPosition) {
      window.scrollTo({
        top: locationState.scrollPosition,
        behavior: "instant",
      });
    }
  }, [location.state]);

  const handleReadMore = () => {
    // Smooth scroll to top before navigation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Navigate with state to remember selected industry and scroll position
    if (selectedIndustry) {
      navigate(selectedIndustry.path, {
        state: {
          selectedIndustryId: selectedIndustry.id,
          scrollPosition: window.scrollY,
        },
      });
    }
  };

  return (
    <section id="industries" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            OUR INDUSTRIES
          </h2>
          <p className="text-xl text-gray-600">
            Experience our revolutionary AI-driven services designed to elevate
            your success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                className="industry-item w-full text-left transition-all"
                onClick={() => setSelectedIndustry(industry)}
              >
                <div className="relative z-10 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gray-300/20 flex items-center justify-center mr-4 text-green-700">
                    {index + 1}
                  </span>
                  <span className="text-xl md:text-2xl font-medium text-gray-700">
                    {industry.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {selectedIndustry && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-7">
                <h3 className="text-4xl font-bold mb-9">
                  {selectedIndustry.name}
                </h3>
                <ul className="space-y-2">
                  {selectedIndustry.description.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-900 transition-colors text-lg font-bold"
                  onClick={handleReadMore}
                >
                  Read More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IndustryList;
