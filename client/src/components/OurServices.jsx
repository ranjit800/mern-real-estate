import service1 from "../assets/Images/service1.png"; // Residential
import service2 from "../assets/Images/service2.png"; // Commercial
import service3 from "../assets/Images/service3.png"; // Renovations

const services = [
  {
    image: service1,
    title: "Residential Spaces",
  },
  {
    image: service2,
    title: "Commercial Buildings",
    highlight: true,
  },
  {
    image: service3,
    title: "Renovations & Upgrades",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#0d2b66] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Services</h2>
          <p className="text-sm leading-relaxed max-w-md">
            Write a paragraph that talks about your construction company here.
            Convince your prospective clients to choose you and your team for their construction
            needs by talking about your unique services, as well as your commitment to getting the job done.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center border-4 ${
                service.highlight ? "border-[#b88ef7]" : "border-transparent"
              } rounded overflow-hidden bg-white text-black shadow-lg`}
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="bg-[#1976f2] w-full h-[6px]" />
              <div className="p-4 font-semibold text-sm">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
