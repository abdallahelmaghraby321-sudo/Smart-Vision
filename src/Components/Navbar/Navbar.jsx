const Navbar = () => {
  return (
    <nav className="w-full   z-50  bg-slate-950  fixed top-0  left-0 start-0 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className=" text-3xl   bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Smart Vision
        </h1>
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">
            <a href="#About">About</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#Features">Features</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#How It Works">How It Works</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#Dashbord">Dashboard</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#Team">Team</a>
          </li>
        </ul>
        <button className="transition-all duration-300 hover:scale-105 bg-cyan-400 text-black px-5 py-2 rounded-lg font-medium hover:bg-cyan-300 transition">
          <a href="#GetStarted">Get Started</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
