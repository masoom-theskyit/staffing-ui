import { useNavigate } from "react-router-dom";
import tele from "./telephone.png";
import whatsapp from "./whatsapp-logo.png";

const Contact = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    window.location.href = "https://wa.me/1234567890";
  };

  const handleSupportClick = () => {
    navigate("/ContactInfo");
  };

  return (
    <div className="bg-white flex flex-col items-center space-y-8 p-6 md:p-10">
      {/* Heading Section */}
      <div className="text-center space-y-4">
        <div
          className="relative font-extrabold text-5xl"
          style={{ color: "#96BE25" }}
        >
          BUSINESS HELP SERVICE
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Need Any Help?</h2>
      </div>

      {/* Contact Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl">
        {/* WhatsApp Card */}
        <div
          className="p-6 border border-gray-300 rounded-2xl shadow-lg text-center flex flex-col items-center space-y-4 bg-white 
                        hover:border-[#96BE25] transition duration-300 ease-in-out"
        >
          <img src={whatsapp} alt="WhatsApp" className="w-16 h-16" />
          <h2 className="text-xl font-semibold text-gray-900">
            Chat to Us Online
          </h2>
          <p className="text-gray-600">
            Chat to us online if you have <br /> any questions.
          </p>
          <button
            onClick={handleChatClick}
            className="bg-[#96BE25] hover:bg-[#85a71e] text-white font-medium py-2 px-6 rounded-lg mt-4 transition"
          >
            Click Here to Chat
          </button>
        </div>

        {/* Telephone Support Card */}
        <div
          className="p-6 border border-gray-300 rounded-2xl shadow-lg text-center flex flex-col items-center space-y-4 bg-white 
                        hover:border-[#96BE25] transition duration-300 ease-in-out"
        >
          <img src={tele} alt="Telephone" className="w-16 h-16" />
          <h2 className="text-xl font-semibold text-gray-900">
            Our Support Agent
          </h2>
          <p className="text-gray-600">
            Our support agent will work with <br /> you to meet your needs.
          </p>
          <button
            onClick={handleSupportClick} // ✅ ContactInfo Page Open on Click
            className="bg-[#96BE25] hover:bg-[#85a71e] text-white font-medium py-2 px-6 rounded-lg mt-4 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
