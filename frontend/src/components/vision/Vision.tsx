import VisionImg from '../img/vision.png';

const Vision = () => {
  return (
    <section id="vision" className="relative py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* AI Image */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src={VisionImg}
                alt="AI Vision"
                className="rounded-full w-full aspect-square object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>

          {/* Vision Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl text-green-700 font-bold">OUR VISION</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A GREENER FUTURE WITH AI
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                At Green AI, we are committed to blending cutting-edge artificial intelligence 
                with sustainable practices. Our mission is to develop innovative AI solutions 
                that promote a greener, cleaner, and more sustainable future. We envision a 
                world where AI and nature work together to solve some of the most pressing 
                global challenges.
              </p>
              <p>
                As technology progresses, we continue to explore and implement AI solutions 
                that are not only efficient but also eco-friendly. Our commitment to 
                sustainability ensures that our AI systems contribute to reducing environmental 
                impact and driving global change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;