import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import img from "../Header/img3.jpeg";
import UIButton from "../../Common/UIButton";
const technicalSkills = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React.js" },
  { value: "nodejs", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "sql", label: "SQL" },
  { value: "git", label: "Git" },
  { value: "docker", label: "Docker" },
];
const experienceOptions = [
  "Fresher",
  "1 Year",
  "2 Years",
  "3 Years",
  "4 Years",
  "5 Years",
  "6 Years",
  "7 Years",
  "8 Years",
  "9 Years",
  "10 Years",
];

const locationOptions = ["Indore, Madhya Pradesh"];

const Header = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");

  const handleSkillChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions || []);
  };

  return (
    <div
      className="relative w-full min-h-[500px] flex flex-col items-center justify-center bg-cover bg-center text-black px-4"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">Search Your Jobs</h1>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-full shadow-md gap-4 w-full">
          {/* Skills Input */}
          <div className="flex items-center flex-1 gap-2 w-full">
            <FaSearch className="text-gray-500" />
            <Select
              options={technicalSkills}
              isMulti
              placeholder="Enter Skills / Designation"
              value={selectedSkills}
              onChange={handleSkillChange}
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: "9999px",
                  borderColor: "white",
                  minHeight: "50px",
                }),
              }}
              className="w-full"
            />
          </div>

          {/* Experience Dropdown */}
          <select
            className="w-full md:w-[12rem] h-[50px] px-4 border border-gray-300 rounded-full focus:outline-none"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">Experience</option>
            {experienceOptions.map((exp, index) => (
              <option key={index} value={exp}>
                {exp}
              </option>
            ))}
          </select>

          {/* Location Dropdown */}
          <select
            className="w-full md:w-[12rem] h-[50px] px-4 border border-gray-300 rounded-full focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Enter Location</option>
            {locationOptions.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <UIButton
            text="Search Jobs"
            startIcon={<FaSearch />}
            style={{
              width: "100%",
              maxWidth: "180px",
              height: "50px",
              backgroundColor: "#96BE25 ",
              color: "white",
              fontWeight: "bold",
              borderRadius: "50px",
              border: "4px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => console.log("Search button clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
