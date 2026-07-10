import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 bg-blue-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Your Brand
          </h2>

          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for
            professional printing, branding and graphic design services.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white text-gray-800 rounded-2xl p-8 text-center">

            <FaPhoneAlt className="text-3xl text-blue-600 mx-auto" />

            <h3 className="font-bold mt-5">
              Call Us
            </h3>

            <p className="mt-2">
              +254704286251
            </p>

          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-8 text-center">

            <FaEnvelope className="text-3xl text-red-600 mx-auto" />

            <h3 className="font-bold mt-5">
              Email
            </h3>

            <p className="mt-2">
              info@eprozdigital.co.ke
            </p>

          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-8 text-center">

            <FaMapMarkerAlt className="text-3xl text-green-600 mx-auto" />

            <h3 className="font-bold mt-5">
              Location
            </h3>

            <p className="mt-2">
              Ruiru Bypass,Kenya
            </p>

          </div>

        </div>

        <div className="text-center mt-16">

          <a
            href="https://wa.me/254704286251"
            className="inline-block bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full text-lg font-semibold transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;