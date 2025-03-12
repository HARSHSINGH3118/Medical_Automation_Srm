import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard";
import PatientDashboard from "./components/PatientDashboard/PatientDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
