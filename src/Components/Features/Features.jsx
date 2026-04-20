import React from "react";

const Features = () => {
  return (
    <section className="bg-[#0b0f19] text-white py-20 px-6 md:px-16" id="Features">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="relative">
          <img src="./WhatsApp Image 2026-04-17 at 7.05.29 PM.jpeg" alt="warehouse"
            className="rounded-2xl shadow-lg transition duration-300 transform hover:scale-105" />

          <div className="relative mt-4 sm:absolute sm:mt-0 sm:bottom-4 sm:start-4 sm:max-w-[250px] bg-[#121826] p-4 rounded-2xl shadow-xl">
            <h4 className="text-xs text-sky-400 mb-2">TECHNICAL CORE</h4>
            <p className="text-sm text-gray-300">
              Multi-spectral camera arrays feed real-time visual data into our neural framework.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8">
            Structured Intelligence <br />
            for <span className="text-purple-400">Chaotic</span> Spaces.
          </h2>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-cyan-500 opacity-90 p-3 rounded-lg">
              🎥
            </div>
            <div>
              <h4 className="font-semibold">Omni-Vision Cameras</h4>
              <p className="text-gray-400 text-sm">
                High-speed scanning capture every movement within the warehouse floor, detecting products with zero latency.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-red-400  p-3 rounded-lg">
              📍
            </div>
            <div>
              <h4 className="font-semibold">Neural Stand Logic</h4>
              <p className="text-gray-400 text-sm">
                AI segments storage into granular Stand and Section logic, transforming physical space into a digital queryable database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;