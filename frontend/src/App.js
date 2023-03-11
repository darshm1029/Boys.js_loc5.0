import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApplicationCompany from "./pages/Company/ApplicationCompany";
import CompanyDashboard from "./pages/Company/CompanyDashboard";
import CompanyPostVacancy from "./pages/Company/CompanyPostVacancy";
import Landing from "./pages/Landing";
import ExploreJobs from "./pages/User/ExploreJobs";
import ExplorePeople from "./pages/User/ExplorePeople";
import ScheduledMeetings from "./pages/User/ScheduledMeetings";
import UserDashboard from "./pages/User/UserDashboard";
import UserProfile from "./pages/User/UserProfile";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/companydashboard" element={<CompanyDashboard />} />
          <Route path="/explorepeople" element={<ExplorePeople />} />
          <Route path="/explorejobs" element={<ExploreJobs />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/companypostvacancy" element={<CompanyPostVacancy/>} />
          <Route path="/applicationcompany" element={<ApplicationCompany/>} />
          <Route path="/scheduledmeetings" element={<ScheduledMeetings/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
