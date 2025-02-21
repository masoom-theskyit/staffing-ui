import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LatestJob } from "../../data/MockData";
import img from "../../assets/icon.png";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false); // 👈 State to control job visibility

  useEffect(() => {
    setJobs(LatestJob);
  }, []);

  // Agar showAll false hai to sirf pehle 4 jobs dikhao, warna saari dikhao
  const visibleJobs = showAll ? jobs : jobs.slice(0, 4);

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-4 mb-8">
          <div className="inline-block">
            <span className="bg-[#96BE25] text-white px-4 py-2 rounded-lg text-lg font-semibold">
              Latest Jobs Post
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Jobs You May Be Interested In
          </h3>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {visibleJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200 transition-all duration-200 hover:border-[#96BE25] flex justify-between items-center"
            >
              <div className="space-y-2">
                <span className="bg-[#96BE25] text-white text-sm px-3 py-1 rounded-full inline-block">
                  {job.jobType}
                </span>
                <h4 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>{job.department}</span>
                  <span>{job.salaryRange}</span>
                  <span>{job.experience}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <Link to={`/browse/${job.id}`}>
                <button className="bg-[#96BE25] hover:bg-[#86ae15] text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2">
                  Browse Job
                  <img
                    src={img}
                    alt="Check Icon"
                    className="w-6 h-6 rounded-full"
                  />
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Browse All Jobs Button */}
        {!showAll && ( // 👈 Jab showAll false ho tabhi ye button dikhaye
          <div className="text-center mt-8">
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(true)} // 👈 Click pe state change ho jayegi
                className="group bg-[#96BE25] hover:bg-[#86ae15] text-white px-10 py-4 text-lg rounded-lg font-medium flex items-center gap-3 transition-all duration-300"
              >
                <span className="group-hover:pr-2 transition-all duration-300">
                  Browse All Jobs
                </span>
                <span className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  &gt;
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
