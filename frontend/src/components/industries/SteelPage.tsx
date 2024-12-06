import SteelImage from "../img/steel.jpg";

const SteelPage = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={SteelImage}
                alt="Steel Industry"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl text-green-700 font-bold">
                Steel Industry
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Innovative Processes for Efficient Manufacturing
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Innovative processes for efficient steel manufacturing.</p>
              <p>Use of AI and automation in the production lines.</p>
              <p>Sustainable practices in steel recycling.</p>
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
                Innovative processes for efficient steel manufacturing
              </h3>
              <p className="text-gray-700">
                Implementation of advanced technologies to reduce energy
                consumption. Integration of lean manufacturing principles for
                optimized production flow.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Use of AI and automation in the production lines
              </h3>
              <p className="text-gray-700">
                AI-driven predictive maintenance to reduce downtime and improve
                productivity. Automation of repetitive tasks for faster and more
                accurate production.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Sustainable practices in steel recycling.
              </h3>
              <p className="text-gray-700">
                Use of electric arc furnaces for recycling scrap steel with
                lower carbon emissions. Closed-loop recycling systems to
                minimize waste and energy consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteelPage;
