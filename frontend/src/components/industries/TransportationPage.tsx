import transportation from "../img/Transportations.png";

const TransportationPage = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={transportation}
                alt="Transportation Industry"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl text-green-700 font-bold">
                Transportation Industry
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Smart Transportation Solutions
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Smart transportation solutions.</p>
              <p>Predictive maintenance systems.</p>
              <p>Energy-efficient transportation management.</p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Smart Transportation Solutions
              </h3>
              <p className="text-gray-700">
                Implementation of advanced technologies to enhance
                transportation efficiency and sustainability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Predictive Maintenance Systems
              </h3>
              <p className="text-gray-700">
                AI-driven predictive maintenance to reduce downtime and improve
                transportation reliability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Energy-Efficient Transportation Management
              </h3>
              <p className="text-gray-700">
                Smart systems for managing energy consumption in transportation
                operations to reduce costs and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportationPage;
