export default function HowItWork() {
  return (
  <>
    <section className="bg-[#0B0F17] text-white py-20 px-6" id="How It Works">
      <h2 className=" text-4xl md:text-5xl font-bold  text-center mb-4 ">
        Operational Flow
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Witness the seamless transition from visual input to robotic execution.
      </p>

      <div className="grid md:grid-cols-2 gap-6 ">
        <div className="bg-[#111827] p-6 rounded-xl relative ">
          <span className="text-cyan-400 text-xl">01</span>
          <h3 className="mt-3 font-semibold">Scanning</h3>
          <p className="text-gray-400 text-sm mt-2">
            Advanced sensors scan barcodes and visual geometry.
          </p>
          <svg className="absolute  top-40 end-0" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 7V5C3 3.89543 3.89543 3 5 3H7" stroke="#495468" stroke-width="2" stroke-linecap="round"/>
  <path d="M17 3H19C20.1046 3 21 3.89543 21 5V7" stroke="#2D3748" stroke-width="2" stroke-linecap="round"/>
  <path d="M21 17V19C21 20.1046 20.1046 21 19 21H17" stroke="#495468" stroke-width="2" stroke-linecap="round"/>
  <path d="M7 21H5C3.89543 21 3 20.1046 3 19V17" stroke="#2D3748" stroke-width="2" stroke-linecap="round"/>
  <rect x="7" y="7" width="3" height="3" fill="#495468"/>
  <rect x="14" y="14" width="3" height="3" fill="#495468"/>
</svg>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl ">
          <span className="text-purple-400 text-xl">02</span>
          <h3 className="mt-3 font-semibold">Detection & Mapping</h3>
          <p className="text-gray-400 text-sm mt-2">
            AI engine locates items in 3D space.
          </p>
        </div>

        <div className="bg-[#0F172A] p-6 rounded-xl ">
          <span className="text-gray-400 text-xl">03</span>
          <h3 className="mt-3 font-semibold">Structured Storage</h3>
          <p className="text-gray-400 text-sm mt-2">
            Data stored securely in cloud.
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-400  to-purple-500 p-6 rounded-xl text-black">
          <span className="text-xl">04</span>
          <h3 className="mt-3 font-semibold">Robotic Action</h3>
          <p className="text-sm mt-2">
            Automated robotic arms execute actions.
          </p>
                   <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="18" width="16" height="2" rx="1" fill="#5e5e5e"/>
  <path d="M6 18L8 10L14 8L18 12" stroke="#5e5e5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="18" cy="12" r="2" fill="#5e5e5e"/>
</svg>
        </div>
      </div>
    </section>
     <section className=" bg-black  text-white py-20 px-6">
      <div className="grid md:grid-cols-2 container gap-10">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core Capabilities.
          </h2>
          <p className="text-gray-400 mb-5">
            The engine powering the next generation of<br/> logistics.
          </p>
          <div className="h-[4px] w-35 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-[#111827] p-6 rounded-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 3L17 11H7L12 3Z" fill="#4FD1C5"/>
  <circle cx="17.5" cy="16.5" r="2.5" fill="#4FD1C5"/>
  <circle cx="6.5" cy="16.5" r="2.5" fill="#4FD1C5"/>
</svg>
            <h3 className="font-semibold">Product Detection</h3>
            <p className="text-gray-400 text-sm mt-2">
              AI models trained for high accuracy.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="5" width="8" height="6" rx="1" fill="#F687B3"/>
  <rect x="13" y="5" width="8" height="6" rx="1" fill="#F687B3" fill-opacity="0.6"/>
  <rect x="3" y="13" width="8" height="6" rx="1" fill="#F687B3" fill-opacity="0.6"/>
  <rect x="13" y="13" width="8" height="6" rx="1" fill="#F687B3"/>
</svg>
            <h3 className="font-semibold">Shelf Segmentation</h3>
            <p className="text-gray-400 text-sm mt-2">
              Automated grid generation.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 9H20M20 9L17 6M20 9L17 12" stroke="#F687B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 15H4M4 15L7 12M4 15L7 18" stroke="#F687B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <h3 className="font-semibold">Real-time Updates</h3>
            <p className="text-gray-400 text-sm mt-2">
              Sync across all platforms.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="18" width="16" height="2" rx="1" fill="#db3113"/>
  <path d="M6 18L8 10L14 8L18 12" stroke="#db3113" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="18" cy="12" r="2" fill="#db3113"/>
</svg>
            <h3 className="font-semibold">Arm Automation</h3>
            <p className="text-gray-400 text-sm mt-2">
              Integration with robotic arms.
            </p>
          </div>
        </div>
      </div>
    </section>
 </>   
  );
  
}