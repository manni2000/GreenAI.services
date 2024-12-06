import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <div>
      <h4 className="text-2xl font-bold mb-4">{title}</h4>
      {children}
    </div>
  );
};

export default FooterSection;