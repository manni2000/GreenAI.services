import RoboticAutomationImage from "../img/Vision-Embedded-Robotic-Automation.webp";

const RoboticAutomationPage = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={RoboticAutomationImage}
                alt="Robotic Automation"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl text-green-700 font-bold">
                Robotic Automation
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Vision-Embedded Solutions
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                AI-powered robotic systems that combine vision and perception.
              </p>
              <p>Smarter automation and interaction.</p>
              <p>Innovative robotic automation solutions.</p>
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
                Vision-Embedded Systems
              </h3>
              <p className="text-gray-700">
                AI-powered systems that seamlessly integrate vision and
                perception technologies, driving smarter, more efficient
                automation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Smarter Automation
              </h3>
              <p className="text-gray-700">
                Advanced tools and solutions designed to enhance robotic
                automation, improving precision, efficiency, and adaptability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Innovative Solutions
              </h3>
              <p className="text-gray-700">
                Cutting-edge innovations that push the boundaries of robotic
                automation, delivering intelligent, scalable solutions for
                modern industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticAutomationPage;
