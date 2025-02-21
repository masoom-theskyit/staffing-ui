import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { JobCategory, LatestJob } from "../../data/MockData";
import img from "../../assets/img3.jpeg";

const JobList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [industry, setIndustry] = useState("All");
  const [experience, setExperience] = useState("Any Experience");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [jobType, setJobType] = useState("Any Job Type");

  // Filtering & Sorting Logic
  useEffect(() => {
    let jobs = [...LatestJob];

    if (category) jobs = jobs.filter((job) => job.category === category);
    if (searchTerm)
      jobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    if (industry !== "All")
      jobs = jobs.filter((job) => job.industry === industry);
    if (experience !== "Any Experience")
      jobs = jobs.filter((job) => job.experience === experience);
    if (minSalary)
      jobs = jobs.filter((job) => job.salary.min >= parseInt(minSalary));
    if (maxSalary)
      jobs = jobs.filter((job) => job.salary.max <= parseInt(maxSalary));
    if (jobType !== "Any Job Type")
      jobs = jobs.filter((job) => job.type === jobType);

    // Sorting Logic (Only Newest & Oldest)
    jobs.sort((a, b) =>
      sortBy === "Newest"
        ? new Date(b.postedDate) - new Date(a.postedDate)
        : new Date(a.postedDate) - new Date(b.postedDate)
    );

    setFilteredJobs(jobs);
  }, [
    category,
    searchTerm,
    sortBy,
    industry,
    experience,
    minSalary,
    maxSalary,
    jobType,
  ]);

  return (
    <div className="bg-white min-h-screen flex justify-center">
      <div className="w-full max-w-7xl py-10 ">
        <div
          className="relative bg-cover bg-center text-white p-10 w-full h-[200px] flex items-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h2 className="text-3xl font-bold text-white text-center ml-50">
            Contact Us
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 px-20">
          {/* Filters Section */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Search Input */}
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-lg text-black border-b-2 border-[#96BE25] pb-1 mb-3">
                Search Jobs
              </h3>
              <input
                type="text"
                placeholder="Search Jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border rounded-md text-black"
              />
            </div>

            {/* Industry Filter */}
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-lg text-black border-b-2 border-[#96BE25] pb-1 mb-3">
                Industry
              </h3>
              <select
                className="w-full p-2 border rounded-md text-black"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option>All Industries</option>
                {[...new Set(JobCategory.map((job) => job.name))].map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-lg text-black border-b-2 border-[#96BE25] pb-1 mb-3">
                Min. Experience
              </h3>
              <select
                className="w-full p-2 border rounded-md text-black"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option>Any Experience</option>
                <option>Fresher</option>
                <option>1-3 Years</option>
                <option>3-5 Years</option>
              </select>
            </div>

            {/* Salary Filter */}
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-lg text-black border-b-2 border-[#96BE25] pb-1 mb-3">
                Salary
              </h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 p-2 border rounded-md text-black"
                  value={minSalary}
                  onChange={(e) => setMinSalary(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 p-2 border rounded-md text-black"
                  value={maxSalary}
                  onChange={(e) => setMaxSalary(e.target.value)}
                />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-lg text-black border-b-2 border-[#96BE25] pb-1 mb-3">
                Job Type
              </h3>
              <select
                className="w-full p-2 border rounded-md text-black"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option>Any Job Type</option>
                <option>Full Time Job (8 Hr.)</option>
                <option>Full Time Job (12 Hr.)</option>
                <option>Full Time 9-6 (8 Hr.)</option>
                <option>Shift (10 Hr.)</option>
              </select>
            </div>
          </div>

          {/* Job Listings Section */}
          <div className="w-full ">
            <div className="flex justify-between items-center mb-4 p-2 border-b border-gray-300">
              <span className="text-lg font-semibold text-black">
                Showing {filteredJobs.length} of {LatestJob.length} Job Results
              </span>
              <div className="dropdown dropdown-hover">
                <label
                  tabIndex={0}
                  className="btn btn-sm btn-outline text-black border-gray-400 hover:bg-gray-200 hover:border-gray-500"
                >
                  Sort By: {sortBy}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-30"
                >
                  {["Newest", "Oldest"].map((sort) => (
                    <li
                      key={sort}
                      onClick={() => setSortBy(sort)}
                      className=" rounded-md cursor-pointer"
                    >
                      <a>{sort}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {filteredJobs.length === 0 ? (
              <p className="text-center text-gray-500">No jobs found.</p>
            ) : (
              filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="w-full md:w-[80%] lg:w-[70%] bg-white shadow-lg rounded-lg p-6 border border-gray-300 hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="bg-[#96BE25] text-white px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                      <h2 className="text-lg font-bold text-gray-800 mt-2">
                        {job.title}
                      </h2>
                      <p className="text-sm text-gray-600">{job.department}</p>
                      <p className="text-sm text-gray-600">
                        {job.salaryRange} | {job.experience}
                      </p>
                      <p className="text-sm text-gray-600">{job.location}</p>
                    </div>
                    <button className="bg-[#96BE25] text-white px-4 py-2 rounded-lg hover:bg-[#7aa61e] transition-colors">
                      Browse Job
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
