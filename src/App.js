import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/Navbar";
import "aos/dist/aos.css";
import OurStory from "./pages/Home/OurStory";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
    const timeId = setTimeout(() => {
      // if loading is true, set it to false
      setLoading(false);
    }, 2000);
    return () => {
      // clear timeout here
      clearTimeout(timeId);
    };
  }, [AOS]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<OurStory />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
