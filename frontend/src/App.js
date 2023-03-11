import { BrowserRouter as Router , Route,Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import UserDashboard from "./pages/User/UserDashboard";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={<Landing/>} />
      <Route path="/userdashboard" element={<UserDashboard/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
