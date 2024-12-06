import IndustrialAutomationImage from "../img/Industrial-Automation.webp";

const IndustrialAutomationPage = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={IndustrialAutomationImage}
                alt="Industrial Automation"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl text-green-700 font-bold">
                Industrial Automation
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI-Driven Solutions
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                AI-driven industrial automation solutions that enhance
                efficiency.
              </p>
              <p>Improve accuracy and productivity with innovative tools.</p>
              <p>Transform your industrial processes with AI.</p>
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
                Enhanced Efficiency
              </h3>
              <p className="text-gray-700">
                AI-driven solutions designed to streamline industrial processes,
                maximizing operational efficiency and reducing resource wastage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Improved Accuracy
              </h3>
              <p className="text-gray-700">
                Precision tools that enhance accuracy and minimize errors,
                ensuring high-quality production standards and reducing costly
                mistakes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Increased Productivity
              </h3>
              <p className="text-gray-700">
                Advanced solutions to optimize workflows, boost productivity,
                and drive continuous improvement across all levels of
                production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialAutomationPage;
