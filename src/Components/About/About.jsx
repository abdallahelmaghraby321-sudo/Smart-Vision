const About = () => {
  return (
    <section
      className="h-screen  bgimg  relative flex items-center "
      id="About"
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-cyan-400 text-sm border border-cyan-400 px-3 py-1 rounded-full">
            AI-POWERED LOGISTICS
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
            Smart Warehouse <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Controller
            </span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-lg">
            Revolutionizing inventory management with advanced Computer Vision
            and autonomous robotic coordination. Real-time precision at scale.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-cyan-300 transition-all duration-300 hover:scale-105  ">
              Explore System
            </button>

            <button className=" transition-all duration-300 hover:scale-105  bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
              Watch Demo
            </button>
          </div>
        </div>

        <div className=" relative bg-gray-900/70 backdrop-blur-md p-2 overflow-hidden mt-17 rounded-2xl shadow-lg ">
          <p className="text-gray-400 text-sm mb-4">SYSTEM STATUS</p>
          <p className=" absolute top-2 end-4  font-bold text-sky-500 text-xl mb-4">
            OPTIMIZED
          </p>

          <div className="flex gap-4 mb-4  ">
            <div className="bg-black p-4 rounded-lg flex-1">
              <p className="text-gray-400 text-sm">Active Scanners</p>
              <h2 className="text-white text-2xl font-bold">124</h2>
            </div>

            <div className="bg-black p-4 rounded-lg flex-1">
              <p className="text-gray-400 text-sm">AI Confidence</p>
              <h2 className="text-white text-2xl font-bold">99.8%</h2>
            </div>
          </div>

          <img
            src="/WhatsApp Image 2026-04-13 at 5.32.41 PM.jpeg"
            alt="chip"
            className="rounded-lg  mx-auto sizephoto transition duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
