import TextileImage from "../img/textile.webp";

const TextilePage = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={TextileImage}
                alt="Textile Analysis System"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl text-green-700 font-bold">
                Textile Analysis System
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI-Powered Precision
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>High-Resolution Imaging</p>
              <p>Real-Time AI Detection</p>
              <p>Tailored Insights</p>
              <p>Customizable analysis</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            <span className="border-b-4 border-green-500">What We Offer</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Purpose-Built for Textile Inspection
              </h3>
              <p className="text-gray-700">
                Engineered to identify defects like snags, stains, holes, and
                misweaves with unmatched accuracy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                High-Resolution Imaging
              </h3>
              <p className="text-gray-700">
                Integrated with 30MP industrial-grade cameras to capture even
                the finest textile details.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Real-Time AI Detection
              </h3>
              <p className="text-gray-700">
                Leverages cutting-edge machine learning models to detect
                anomalies invisible to human inspection, improving quality
                assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextilePage;
