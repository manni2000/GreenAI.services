import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import homeImage from "../img/cover.webp";

const words = ["RELIABLE", "SEAMLESS", "SIMPLE", "ACCESSIBLE", "SCALABLE"];

const Hero = () => {
  useEffect(() => {
    const flipWord = document.querySelector(".flip-word");
    let index = 0;
    setInterval(() => {
      if (flipWord) {
        flipWord.textContent = words[index];
      }
      index = (index + 1) % words.length;
    }, 1000);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      id="home"
    >
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${homeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Animated Particles Effect */}
      <div className="absolute inset-0 z-1 opacity-30">
        <div
          className="absolute w-4 h-4 bg-green-400 rounded-full animate-ping"
          style={{ top: "20%", left: "10%" }}
        />
        <div
          className="absolute w-4 h-4 bg-green-400 rounded-full animate-ping"
          style={{ top: "60%", left: "80%", animationDelay: "1s" }}
        />
        <div
          className="absolute w-4 h-4 bg-green-400 rounded-full animate-ping"
          style={{ top: "80%", left: "30%", animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full mb-4">
            <span className="text-green-400 font-semibold">
              AI-Powered Solutions
            </span>
          </div>

          {/* GreenAI Text with Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-400 animate-color-motion">
            Green<span className="text-white">AI</span>
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
            Innovation Made{" "}
            <span className="flip-word" style={{ color: "rgb(68, 255, 210)" }}>
              RELIABLE
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-300">
            Transform your business with AI
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl">
            Reimagine your potential with Green AI. We craft cutting-edge AI
            solutions that don't just simplify innovation they redefine it.
            Elevate efficiency, spark growth, and uncover opportunities you
            didn't know existed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-medium text-base sm:text-lg transition-all transform hover:scale-105">
              GET STARTED
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium text-base sm:text-lg transition-all backdrop-blur-sm">
              LEARN MORE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
