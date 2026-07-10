import { FaPrint, FaPalette, FaCamera, FaLaptop } from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaPrint className="text-3xl text-blue-600" />,
      title: "Professional Printing",
    },
    {
      icon: <FaPalette className="text-3xl text-red-600" />,
      title: "Creative Branding",
    },
    {
      icon: <FaCamera className="text-3xl text-green-600" />,
      title: "Photography",
    },
    {
      icon: <FaLaptop className="text-3xl text-purple-600" />,
      title: "Cyber Services",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Your Trusted Printing & Branding Partner
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            At eProz Digital, we help businesses, schools and individuals
            create lasting impressions through high-quality printing,
            branding, photography, graphic design, custom apparel and
            cyber services.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="mt-5 font-semibold">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;