import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { ContactUs } from "../data/MockData";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-2 right-5 p-4 bg-[#96be25] text-white rounded-full shadow-xl transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      ↑
    </button>
  );
};

function Footer() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    setContact(ContactUs);
  }, []);

  return (
    <footer className="bg-gray-200 text-gray-900 py-6 relative">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
        {/* Logo & Play Store */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold">The Sky It</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play Store"
            className="mt-4 w-40"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="font-semibold border-b-2 pb-2"
            style={{ borderColor: "#96be25" }}
          >
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              { name: "Candidate Login", path: "/candidate-login" },
              { name: "Client Login", path: "/client-login" },
            ].map((link, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-[#96be25]">→</span>
                <Link to={link.path} className="hover:text-[#96be25]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3
            className="font-semibold border-b-2 pb-2"
            style={{ borderColor: "#96be25" }}
          >
            Pages
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "About Us", path: "/about-us" },
            ].map((page, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-[#96be25]">→</span>
                <Link to={page.path} className="hover:text-[#96be25]">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3
            className="font-semibold border-b-2 pb-2"
            style={{ borderColor: "#96be25" }}
          >
            Contact Us
          </h3>
          <div className="mt-4 text-sm">
            <p className="font-bold">Corporate Office Address</p>
            {contact ? (
              <>
                <p>{contact.address}</p>
                <p>Email: {contact.emails[0]}</p>
                <p>Phone: {contact.phoneNumbers[0]}</p>
              </>
            ) : (
              <p>Loading contact details...</p>
            )}
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center space-x-4 mt-4">
        {contact ? (
          <>
            <a
              href={contact.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-gray-600 hover:text-blue-600 cursor-pointer text-lg" />
            </a>
            <a
              href={contact.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-600 hover:text-pink-600 cursor-pointer text-lg" />
            </a>
            <a
              href={contact.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-gray-600 hover:text-red-600 cursor-pointer text-lg" />
            </a>
            <a
              href={contact.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-600 hover:text-blue-400 cursor-pointer text-lg" />
            </a>
            <a
              href={contact.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-gray-600 hover:text-blue-700 cursor-pointer text-lg" />
            </a>
            <a
              href={contact.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-gray-600 hover:text-green-500 cursor-pointer text-lg" />
            </a>
          </>
        ) : (
          <p>Loading social media...</p>
        )}
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center text-gray-600 text-sm mt-4 border-t pt-4 px-6">
        <p>2025 © TheSkyIt. All rights reserved</p>
        <p className="mr-15">
          Developed by <span style={{ color: "#96be25" }}>TheSkyIt</span>
        </p>
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </footer>
  );
}

export default Footer;
