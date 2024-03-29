import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/Navbar";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurStory from "./pages/Home/OurStory";
import Spinner from "./components/spinner/Spinner";
import Venue from "./pages/Venue/Venue";
import Registry from "./pages/Registry/Registry";
import Rsvp from "./pages/RSVP/Rsvp";
import Contact from "./pages/Contact/Contact";
import ThankYou from "./pages/ThankYou/ThankYou";

function App() {
  const [loading, setLoading] = useState(true);

  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
    const timeId = setTimeout(() => {
      // if loading is true, set it to false
      setLoading(false);
    }, 3000);
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
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<OurStory />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
