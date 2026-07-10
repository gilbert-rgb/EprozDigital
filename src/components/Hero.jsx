import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
  id="home"
  className="scroll-mt-24 pt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50"
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 min-h-[90vh]">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <img
              src={heroImage}
              alt="eProz Digital Printing Services"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              Welcome to eProz Digital
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Print.
              <br />
              Brand.
              <br />
              Grow.
            </h1>

            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 max-w-xl mx-auto lg:mx-0">
              Professional printing, branding, graphic design, photography,
              custom apparel and cyber services for businesses,
              schools and individuals.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition">
                Get a Quote
              </button>

              <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition">
                View Portfolio
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  500+
                </h2>
                <p className="text-gray-600 text-sm">Projects</p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  100%
                </h2>
                <p className="text-gray-600 text-sm">Quality</p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  24/7
                </h2>
                <p className="text-gray-600 text-sm">Support</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;