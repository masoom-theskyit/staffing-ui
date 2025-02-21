import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const staticClientLogo = [
  { id: 1, name: "Navitas Solar", logo: "https://via.placeholder.com/100" },
  { id: 2, name: "Maruti Suzuki", logo: "https://via.placeholder.com/100" },
  { id: 3, name: "Tema India", logo: "https://via.placeholder.com/100" },
  { id: 4, name: "Zepto", logo: "https://via.placeholder.com/100" },
  { id: 5, name: "Blinkit", logo: "https://via.placeholder.com/100" },
  { id: 6, name: "Tata Motors", logo: "https://via.placeholder.com/100" },
  { id: 7, name: "Infosys", logo: "https://via.placeholder.com/100" },
];

const ClientLogo = () => {
  const [index, setIndex] = useState(0);
  const visibleImages = 4; // एक बार में कितनी इमेज दिखानी हैं

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? staticClientLogo.length - visibleImages : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex >= staticClientLogo.length - visibleImages ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full bg-[#f3f3f3] py-10 flex flex-col items-center">
      {/* Title */}
      <div className="mb-6">
        <h2 className="bg-[#96BE25] text-white p-3 rounded-lg text-2xl font-bold inline-block">
          Our Clients
        </h2>
      </div>

      {/* Slider Wrapper */}
      <div className="relative flex items-center justify-center w-3/4 mx-auto">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-4 bg-[#96BE25] text-white rounded-full shadow-md absolute left-[-50px] z-10"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Images Wrapper */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleImages)}%)`,
              width: `${(staticClientLogo.length / visibleImages) * 100}%`,
            }}
          >
            {[
              ...staticClientLogo,
              ...staticClientLogo.slice(0, visibleImages),
            ].map((client, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center w-1/4 mx-3"
              >
                <img
                  width="100"
                  height="100"
                  src={client.logo}
                  alt={client.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-4 bg-[#96BE25] text-white rounded-full shadow-md absolute right-[-50px] z-10"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ClientLogo;
