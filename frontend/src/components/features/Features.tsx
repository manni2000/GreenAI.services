import React from 'react';
import { Shield, BarChart, Globe } from 'lucide-react';

const features = [
  {
    title: 'Enterprise Security',
    description: 'Your data is protected with enterprise-grade security and encryption.',
    Icon: Shield
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our comprehensive analytics and reporting tools.',
    Icon: BarChart
  },
  {
    title: 'Ethical Innovation',
    description: 'We prioritize ethical AI development to ensure fairness and transparency.',
    Icon: Globe
  }
];

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon }) => {
  const getBorderColor = () => {
    switch (title) {
      case 'Ethical Innovation':
        return 'border-green-600';
      default:
        return 'border-green-400';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 ${getBorderColor()}`}>
      <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our sustainable AI solutions can transform your workflow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;