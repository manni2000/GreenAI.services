import ChatbotImage from "../img/Generative-AI-based.webp";

const GenerativeAIChatbotPage = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={ChatbotImage}
                alt="Generative AI-based Chatbot"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl text-green-700 font-bold">
                Generative AI-based Chatbot
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Personalized Responses and Automated Communication
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>AI-driven chatbots that generate personalized responses.</p>
              <p>Automate communication and enhance customer experiences.</p>
              <p>Innovative chatbot solutions for your business.</p>
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
                Personalized Responses
              </h3>
              <p className="text-gray-700">
                AI-powered chatbots that deliver tailored, context-aware
                responses, providing each customer with a unique and engaging
                experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Automated Communication
              </h3>
              <p className="text-gray-700">
                Streamlined communication processes through automation, boosting
                efficiency and ensuring consistent, timely interactions with
                customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Enhanced Customer Experiences
              </h3>
              <p className="text-gray-700">
                Elevate customer experiences with innovative chatbot solutions
                that are designed to provide seamless, responsive, and
                personalized service at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerativeAIChatbotPage;
