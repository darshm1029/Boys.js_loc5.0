import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyDashboard from "./pages/Company/CompanyDashboard";
import Landing from "./pages/Landing";
import ExploreJobs from "./pages/User/ExploreJobs";
import ExplorePeople from "./pages/User/ExplorePeople";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
