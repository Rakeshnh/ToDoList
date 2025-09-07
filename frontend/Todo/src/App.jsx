import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Manager from "./Manager";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/manager">Manager</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </Router>
  );
}

export default App;
