import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import SignupCompany from "./pages/Authentication/SignupCompany";
import StudentSignUp from "./pages/Authentication/StudentSignUp";
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
          <Route path="/login" element={<Login/>} />
          <Route path="/signupcompany" element={<SignupCompany/>} />
          <Route path="/studentsignup" element={<StudentSignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
