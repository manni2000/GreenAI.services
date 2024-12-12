import React from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="service-card group bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className="flex justify-end">
          <button
            className="p-3 w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center text-green-400 group-hover:bg-green-400/30 transition-colors"
            aria-label="Read more"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
