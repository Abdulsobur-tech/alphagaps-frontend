import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./homepage/Navbar";
import Signup from "./signup-page/Signup";
import Talk from "./add-talk/Talk";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route
            exact
            path="/home"
            element={<Navbar />}
          />
          <Route
            exact
            path="/register"
            element={<Signup />}
          />

          <Route
            exact
            path="/talk"
            element={<Talk />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
