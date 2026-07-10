import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300">
  
        {/* Top Footer */}
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
  
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
  
            {/* Company */}
            <div>
  
              <h2 className="text-3xl font-bold">
                <span className="text-blue-500">eProz</span>
                <span className="text-red-500">Digital</span>
              </h2>
  
              <p className="mt-5 leading-7">
                Your trusted partner in professional printing,
                branding, graphic design, photography,
                custom apparel, and cyber services.
              </p>
  
            </div>
  
            {/* Services */}
            <div>
  
              <h3 className="text-white text-xl font-semibold mb-5">
                Our Services
              </h3>
  
              <ul className="space-y-3">
  
                <li>Printing Services</li>
                <li>Graphic Design</li>
                <li>Branding</li>
                <li>T-Shirt Printing</li>
                <li>Photography</li>
                <li>Cyber Services</li>
  
              </ul>
  
            </div>
  
            {/* Quick Links */}
            <div>
  
              <h3 className="text-white text-xl font-semibold mb-5">
                Quick Links
              </h3>
  
              <ul className="space-y-3">
  
                <li>
                  <a href="#home" className="hover:text-blue-500 transition">
                    Home
                  </a>
                </li>
  
                <li>
                  <a href="#about" className="hover:text-blue-500 transition">
                    About
                  </a>
                </li>
  
                <li>
                  <a href="#services" className="hover:text-blue-500 transition">
                    Services
                  </a>
                </li>
  
                <li>
                  <a href="#portfolio" className="hover:text-blue-500 transition">
                    Portfolio
                  </a>
                </li>
  
                <li>
                  <a href="#contact" className="hover:text-blue-500 transition">
                    Contact
                  </a>
                </li>
  
              </ul>
  
            </div>
  
            {/* Contact */}
            <div>
  
              <h3 className="text-white text-xl font-semibold mb-5">
                Contact Us
              </h3>
  
              <div className="space-y-4">
  
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-500" />
                  <span>0743 143 013</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-red-500" />
                  <span>info@eprozdigital.co.ke</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span>Nairobi, Kenya</span>
                </div>
  
              </div>
  
              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
  
                <a
                  href="#"
                  className="bg-blue-600 p-3 rounded-full hover:scale-110 transition"
                >
                  <FaFacebookF className="text-white" />
                </a>
  
                <a
                  href="#"
                  className="bg-pink-600 p-3 rounded-full hover:scale-110 transition"
                >
                  <FaInstagram className="text-white" />
                </a>
  
                <a
                  href="https://wa.me/254743143013"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 p-3 rounded-full hover:scale-110 transition"
                >
                  <FaWhatsapp className="text-white" />
                </a>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
  
          <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center">
  
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} eProz Digital. All Rights Reserved.
            </p>
  
            <p className="text-sm mt-3 md:mt-0">
              Designed & Developed by <span className="text-blue-500 font-semibold">Gilbert Cheboi</span>
            </p>
  
          </div>
  
        </div>
  
      </footer>
    );
  }
  
  export default Footer;