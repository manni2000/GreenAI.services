import React from "react";

interface EducationCardProps {
  title: string;
  subheading: string;
  description: string;
  organisedByImg: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  subheading,
  description,
  organisedByImg,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <h4 className="text-xl text-gray-700 mb-4">{subheading}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-end items-center">
        <span className="text-gray-700 font-semibold mr-2">Organised By</span>
        <img src={organisedByImg} alt="Organised By" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default EducationCard;
