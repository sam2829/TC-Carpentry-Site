import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Homepage from "./pages/homepage/Homepage";
import ServicesPage from "./pages/services/ServicesPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        {/** display navbar */}
        <NavBar />
        {/** display all routes for other pages */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/portfolio" element={<PortfolioPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
        {/** display footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
