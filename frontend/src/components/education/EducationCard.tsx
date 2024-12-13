import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface EducationCardProps {
  title: string;
  subheading: string;
  description: string;
  organisedByImgs: string[];
  link: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  subheading,
  description,
  organisedByImgs,
  link,
}) => {
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);

  const handleReadMore = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(link);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 md:text-2xl">
          {title}
        </h3>
        <h4 className="text-lg text-gray-700 mb-4 md:text-xl">{subheading}</h4>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed md:text-base">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleReadMore}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-900 transition-colors text-lg font-bold self-start"
        >
          Read More
        </button>

        <div className="flex flex-col items-end">
          <p className="text-xs text-gray-500 mb-2 md:text-sm">Organised By</p>
          <div className="flex space-x-2">
            {organisedByImgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Organised By"
                className="h-8 w-8 object-contain md:h-10 md:w-10"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
