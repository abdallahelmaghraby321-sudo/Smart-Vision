export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-semibold mb-2">
            Smart Vision
          </h2>
          <p className="text-sm max-w-md">
            © 2024 Kinetic Intelligence Framework. All rights reserved.
            Engineering the future of autonomous logistics.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
          <a href="#About" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#Team" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#Team" className="hover:text-white transition">
            Security
          </a>
          <a href="#About" className="hover:text-white transition">
            API Documentation
          </a>
        </div>

      </div>
    </footer>
  );
}