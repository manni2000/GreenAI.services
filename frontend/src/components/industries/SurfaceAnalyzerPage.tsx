import SurfaceAnalyzerImage from "../img/SurfaceAnalyzer.webp";

const SurfaceAnalyzerPage = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={SurfaceAnalyzerImage}
                alt="Surface Analyzer for the Fabric Industry"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl text-green-700 font-bold">
                Surface Analyzer for the Fabric Industry
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI-Driven Detection
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Purpose-built for fabrics.
              </p>
              <p>High-resolution inspection</p>
              <p>AI-driven detection</p>
              <p>Customizable analysis</p>
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
                Purpose-Built for Fabrics
              </h3>
              <p className="text-gray-700">
                Tailored specifically to detect surface defects in textiles, such as tears, stains, and irregular patterns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                High-Resolution Inspection
              </h3>
              <p className="text-gray-700">
                Utilizes a 20MP Arducam USB camera module for precise imaging, ensuring even the smallest imperfections are identified.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                AI-Driven Detection
              </h3>
              <p className="text-gray-700">
                Employs advanced image processing and machine learning algorithms to identify flaws that may be missed by the human eye.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfaceAnalyzerPage;