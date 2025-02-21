import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../assets/img3.jpeg";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { ContactUs } from "../../data/MockData";

const ContactInfo = () => {
  const [contact, setContact] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setContact(ContactUs);
    }, 500);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show toast message
    toast.success("Your message has been submitted successfully!", {
      position: "top-center",
      autoClose: 3000,
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-white ">
      <div className="">
        <div
          className="relative bg-cover bg-center text-white p-10 w-full h-[200px] flex items-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h2 className="text-3xl font-bold text-white text-center ml-50">
            Contact Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-4 m-10">
          {/* Left Section - Contact Info */}
          <div className="md:col-span-2">
            <div className="bg-gray-800 text-white p-4 text-lg font-semibold rounded-md flex items-center gap-2">
              <FaMapMarkerAlt /> Let's Connect With Us
            </div>
            <div className="bg-white shadow-md rounded-md p-6 mt-4">
              {contact ? (
                <>
                  <p className="font-semibold text-black">
                    <FaPhoneAlt className="inline-block text-blue-500 mr-2" />{" "}
                    Phone:
                  </p>
                  {contact.phoneNumbers.map((num, index) => (
                    <p key={index} className="text-gray-600">
                      {num}
                    </p>
                  ))}

                  <p className="font-semibold mt-3 text-black">
                    <FaEnvelope className="inline-block text-red-500 mr-2" />{" "}
                    E-Mail:
                  </p>
                  {contact.emails.map((email, index) => (
                    <p key={index} className="text-gray-600">
                      {email}
                    </p>
                  ))}

                  <p className="font-semibold mt-3 text-black">
                    <FaMapMarkerAlt className="inline-block text-blue-500 mr-2" />{" "}
                    Address:
                  </p>
                  <p className="text-gray-600">{contact.address}</p>

                  <p className="font-semibold mt-4">Social:</p>
                  <div className="flex gap-3 text-gray-600 text-lg">
                    <a
                      href={contact.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                    </a>
                    <a
                      href={contact.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="hover:text-pink-600 cursor-pointer" />
                    </a>
                    <a
                      href={contact.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="hover:text-red-600 cursor-pointer" />
                    </a>
                    <a
                      href={contact.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                    </a>
                    <a
                      href={contact.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                    </a>
                    <a
                      href={contact.socialLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
                    </a>
                  </div>
                </>
              ) : (
                <p>Loading contact details...</p>
              )}
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-gray-800 text-white p-4 text-lg font-semibold rounded-md flex items-center gap-2">
              <FaEnvelope /> Contact Form
            </div>
            <div className="bg-white shadow-md rounded-md p-6 mt-4">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="border border-gray-400 p-3 rounded-md w-full bg-gray-100 text-gray-800 placeholder-gray-600"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="border border-gray-400 p-3 rounded-md w-full bg-gray-100 text-gray-800 placeholder-gray-600"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border border-gray-400 p-3 rounded-md w-full bg-gray-100 text-gray-800 placeholder-gray-600"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="border border-gray-400 p-3 rounded-md w-full bg-gray-100 text-gray-800 placeholder-gray-600"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="border border-gray-400 p-3 rounded-md w-full mt-4 bg-gray-100 text-gray-800 placeholder-gray-600"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message..."
                  rows="4"
                  className="border border-gray-400 p-3 rounded-md w-full mt-4 bg-gray-100 text-gray-800 placeholder-gray-600"
                  required
                />
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="bg-[#96BE25] text-black px-6 py-3 rounded-md mt-4 w-auto hover:bg-blue-400 transition justify-center "
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
