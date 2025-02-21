import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Landingpage/Header/Header";
import JobCategory from "./Landingpage/JobCategory/JobCategory";
import JobList from "./Landingpage/JobCategory/JobList";
import LatestJobs from "./Landingpage/LatestJobs/LatestJobs";
import JobDetail from "./Landingpage/LatestJobs/JobDetails";
import Download from "./Landingpage/Download";
import ClientLogo from "./Landingpage/ClientLogo";
import Contact from "./Landingpage/Contact/contact";
import ContactInfo from "./Landingpage/Contact/ContactInfo";

import Footer from "./Landingpage/Footer";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <JobCategory />
      <LatestJobs />
      <Download />
      <ClientLogo />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/browse/:jobId" element={<JobDetail />} />
        <Route path="/contactinfo" element={<ContactInfo />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
