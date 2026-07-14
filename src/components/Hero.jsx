import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-32 pt-44 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
              Welcome to eProz Digital
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Print.
              <br />

              <span className="text-blue-600">
                Brand.
              </span>

              <br />

              <span className="text-red-600">
                Grow.
              </span>

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">
              We provide professional printing, branding, graphic design,
              photography, custom apparel, signage, corporate branding and
              cyber services that help businesses stand out and grow.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300"
              >
                Get a Free Quote
              </a>

              <a
                href="#portfolio"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
              >
                View Portfolio
              </a>

            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-4">

              <div className="bg-white rounded-2xl shadow-lg p-5">
                <h2 className="text-3xl font-bold text-blue-600">
                  500+
                </h2>
                <p className="text-gray-500">
                  Projects
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5">
                <h2 className="text-3xl font-bold text-red-600">
                  100%
                </h2>
                <p className="text-gray-500">
                  Quality
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5">
                <h2 className="text-3xl font-bold text-blue-600">
                  24/7
                </h2>
                <p className="text-gray-500">
                  Support
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <img
              src={heroImage}
              alt="Professional Printing Services"
              className="w-full max-w-2xl rounded-[35px] shadow-2xl hover:scale-105 transition duration-500 object-cover"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;