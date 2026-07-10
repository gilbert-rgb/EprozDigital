import {
    FaPrint,
    FaTshirt,
    FaPalette,
    FaCamera,
    FaLaptop,
    FaBullhorn,
  } from "react-icons/fa";
  
  const services = [
    {
      icon: <FaPrint size={40} />,
      title: "Printing",
      description: "Flyers, Posters, Business Cards, Banners & Brochures",
    },
    {
      icon: <FaTshirt size={40} />,
      title: "Apparel Printing",
      description: "T-Shirts, Hoodies, Jerseys, Caps & Uniform Branding",
    },
    {
      icon: <FaPalette size={40} />,
      title: "Graphic Design",
      description: "Logos, Posters, Social Media Designs & Branding",
    },
    {
      icon: <FaBullhorn size={40} />,
      title: "Branding",
      description: "Vehicle Branding, Roll-up Banners & Shop Signage",
    },
    {
      icon: <FaCamera size={40} />,
      title: "Photography",
      description: "Professional Photography & Photo Printing",
    },
    {
      icon: <FaLaptop size={40} />,
      title: "Cyber Services",
      description: "eCitizen, KRA, HELB, CV Writing & Online Applications",
    },
  ];
  
  function Services() {
    return (
        <section
        id="services"
        className="scroll-mt-24 py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-5">
  
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Services
            </h2>
  
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Everything you need under one roof—from professional printing
              and branding to digital and cyber services.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
  
                <h3 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
  
                <p className="text-gray-600">
                  {service.description}
                </p>
  
                <button className="mt-6 text-blue-600 font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            ))}
  
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;