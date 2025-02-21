import React from "react";

const Card = ({ image, number, text, title }) => {
  return (
    <div className="flex items-center bg-white shadow-lg  rounded-md overflow-hidden w-90 ">
 
      {image && (
        <div className="w-1/3">
          <img src={image} alt={title} className="w-full h-full object-cover p-5 " />
        </div>
      )}

      <div className="w-2/3 p-4  text-end">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{number}</h2>
        <h5 className="">{text}</h5>
      </div>
    </div>
  );
};

export default Card;
