import React from "react";
import { FaAndroid } from "react-icons/fa";

const Download = () => {
  return (
    <div className="bg-black py-16">
      <div className="relative flex items-center justify-between bg-cover bg-center px-10 py-20 max-w-7xl mx-auto rounded-lg">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl font-bold mb-4">
            Download & Browse Hundreds of Jobs
          </h1>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. it has servived not only five
            centuries, but also the leap into electronic type setting, remaining
            essentially unchanged. it was popularised.
          </p>

          <button className="border border-white text-white flex items-center px-6 py-3 rounded-lg hover:bg-[#96BE25] hover:text-white transition duration-300">
            {" "}
            <FaAndroid className="w-10 h-9" />
            Google Play <br />
            Get it On
            <span className="text-sm"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
