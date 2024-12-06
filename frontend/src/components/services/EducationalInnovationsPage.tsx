import EducationalImage from "../img/Educational-Innovations-for-the-Digital-Age.webp";

const EducationalInnovationsPage = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={EducationalImage}
                alt="Educational Innovations"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl text-green-700 font-bold">
                Educational Innovations
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                For the Digital Age
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Revolutionizing education with AI-driven tools to enhance
                personalized learning.
              </p>
              <p>Supporting educators and improving outcomes.</p>
              <p>Innovative solutions for the digital age.</p>
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
                Personalized Learning
              </h3>
              <p className="text-gray-700">
                Leveraging AI-powered tools, we provide tailored learning
                experiences that adapt to each student’s unique needs, helping
                them achieve their fullest potential.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Empowering Educators
              </h3>
              <p className="text-gray-700">
                Our platform offers a suite of intelligent resources designed to
                support teachers, streamline lesson planning, and make teaching
                more effective and engaging in the digital classroom.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Improved Educational Outcomes
              </h3>
              <p className="text-gray-700">
                With a focus on innovation, we deliver solutions that drive
                measurable improvements in student achievement, fostering
                success for learners at every stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalInnovationsPage;
