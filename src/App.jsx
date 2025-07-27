import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Events from "./pages/Events";
import Finance from "./pages/Finance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/finance" element={<Finance />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
