import React from "react";

const teamData = [
  {
    name: "Alex Thorne",
    role: "Lead AI Architect",
    desc: "Specialist in convolutional neural networks and spatial mapping.",
    img: "./item1.jpeg",
  },
  {
    name: "Sarah Chen",
    role: "Robotics Lead",
    desc: "Former aerospace engineer focusing on kinetic automation systems.",
    img: "./item2.jpeg",
  },
  {
    name: "Marcus Vane",
    role: "Systems Designer",
    desc: "Focused on human-AI interface design and data visualization systems.",
    img: "./item3.jpeg",
  }, 
];

export default function Team() {
  return (
    <section className="bg-[#05070d] py-20 px-6 text-white " id="Team">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Smart Vision{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Engineers.
            </span>
          </h2>
          <p className="text-gray-400 mt-3">
            The minds behind the neural framework.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-[#0b0f19] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 text-sm">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}