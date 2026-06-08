const services = [
  "Full Stack MERN Web Apps",
  "React Frontend Development",
  "REST API Development",
  "MongoDB Database Design",
  "Bug Fixing",
  "Website Redesign",
  "n8n Automation Workflows",
  "Portfolio Websites",
  "Admin Dashboards",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#050816] text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-3">
          What I Can Do
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Services <span className="text-cyan-400">I Offer</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#0b1224] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <div className="text-cyan-400 text-2xl mb-4">✦</div>

              <h3 className="text-lg font-semibold leading-relaxed">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}