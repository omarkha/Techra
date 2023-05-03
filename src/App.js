import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <div className="spinner-wrapper">
            <ScaleLoader
              className="spinner"
              loading={loading}
              color="#36d7b7"
            />
          </div>
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route element={<Homepage />} path="/" />
              <Route element={<Contactpage />} path="/contact" />
              <Route element={<Aboutpage />} path="/about" />
            </Routes>

            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
