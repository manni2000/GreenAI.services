import CarbonFootprintImage from "../img/Carbon-Footprint-Management.webp";

const CarbonFootprintPage = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={CarbonFootprintImage}
                alt="Carbon Footprint Management"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl text-green-700 font-bold">
                Carbon Footprint Management
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI-Driven Solutions
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                AI-driven solutions to estimate, reduce, and optimize your
                organization's carbon footprint.
              </p>
              <p>Innovative tools for carbon management.</p>
              <p>Sustainable practices for a greener future.</p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            <span className="border-b-4 border-green-500">What We Offer</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Estimate Carbon Footprint
              </h3>
              <p className="text-gray-700">
                Advanced tools to accurately estimate your organization’s carbon
                footprint, providing insights for better environmental impact
                management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Reduce Carbon Emissions
              </h3>
              <p className="text-gray-700">
                Tailored solutions to help organizations reduce carbon
                emissions, promoting sustainable practices and contributing to
                global environmental goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Optimize Carbon Management
              </h3>
              <p className="text-gray-700">
                Innovative tools and strategies to optimize carbon management
                practices, driving efficiency and sustainability across
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonFootprintPage;
