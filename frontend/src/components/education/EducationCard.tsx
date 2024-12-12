import React from "react";

interface EducationCardProps {
  title: string;
  subheading: string;
  description: string;
  organisedByImgs: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  subheading,
  description,
  organisedByImgs,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <h4 className="text-xl text-gray-700 mb-4">{subheading}</h4>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium">
          Read More
        </button>

        <div className="flex flex-col items-end">
          <p className="text-sm text-gray-500 mb-2">Organised By</p>
          <div className="flex space-x-2">
            {organisedByImgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Organised By"
                className="h-10 w-10 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
