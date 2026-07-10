import businessCards from "../assets/images/business-cards.jpg";
import banners from "../assets/images/banners.jpg";
import tshirts from "../assets/images/tshirts.jpg";
import logoDesign from "../assets/images/logo-design.jpg";
import photography from "../assets/images/mounting.jpg";
import vehicleBranding from "../assets/images/vehicle-branding.jpg";
import flyers from "../assets/images/flyers.jpg";
import brochures from "../assets/images/brochures.jpg";
import mugs from "../assets/images/mugs.jpg";
import stickers from "../assets/images/stickers.jpg";
import stationery from "../assets/images/stationery.jpg";
import signboards from "../assets/images/signboards.jpg";

const portfolio = [
  {
    image: businessCards,
    title: "Business Cards",
    category: "Premium Printing",
    description:
      "High-quality business cards with premium finishes that leave a lasting first impression.",
  },
  {
    image: banners,
    title: "Roll-Up Banners",
    category: "Branding",
    description:
      "Professional roll-up banners for exhibitions, conferences, promotions, and events.",
  },
  {
    image: tshirts,
    title: "Custom T-Shirts",
    category: "Apparel Printing",
    description:
      "Custom branded t-shirts for schools, businesses, churches, and organizations.",
  },
  {
    image: logoDesign,
    title: "Logo Design",
    category: "Graphic Design",
    description:
      "Creative logos designed to build strong, memorable and recognizable brands.",
  },
  {
    image: photography,
    title: "Photography",
    category: "Studio & Events",
    description:
      "Professional photography services for products, corporate events and portraits.",
  },
  {
    image: vehicleBranding,
    title: "Vehicle Branding",
    category: "Outdoor Branding",
    description:
      "Eye-catching vehicle wraps that advertise your business everywhere you go.",
  },
  {
    image: flyers,
    title: "Flyers & Posters",
    category: "Marketing",
    description:
      "Creative flyers and posters designed to effectively market your business or event.",
  },
  {
    image: brochures,
    title: "Brochures",
    category: "Corporate Printing",
    description:
      "Beautiful brochures that professionally showcase your products and services.",
  },
  {
    image: mugs,
    title: "Branded Mugs",
    category: "Promotional Products",
    description:
      "Personalized mugs perfect for gifts, marketing campaigns and corporate branding.",
  },
  {
    image: stickers,
    title: "Vinyl Stickers",
    category: "Sticker Printing",
    description:
      "Durable waterproof stickers suitable for branding, packaging and decorations.",
  },
  {
    image: stationery,
    title: "Corporate Stationery",
    category: "Office Branding",
    description:
      "Letterheads, envelopes, notebooks and branded office stationery solutions.",
  },
  {
    image: signboards,
    title: "Shop Signboards",
    category: "Large Format Printing",
    description:
      "Modern indoor and outdoor signboards that increase your business visibility.",
  },
];

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center">

          <span className="text-blue-600 uppercase font-semibold tracking-widest">
            Portfolio
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Our Recent Projects
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            We take pride in delivering professional printing,
            branding, graphic design, photography and promotional
            products that help businesses stand out.
          </p>

        </div>

        {/* Portfolio Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">

          {portfolio.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <span className="text-blue-600 text-sm uppercase font-semibold">
                  {item.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-6">
                  {item.description}
                </p>

                <button className="mt-6 text-blue-600 font-semibold hover:text-red-600 transition">
                  View Project →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Portfolio;