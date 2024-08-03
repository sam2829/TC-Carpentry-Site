import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Homepage from "./pages/homepage/Homepage";
import ServicesPage from "./pages/services/ServicesPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import AlertMessage, { useAlert } from "./components/AlertMessage";
import NotFoundPage from "./components/NotFoundPage";
import { useEffect } from "react";

// function to make sure new pages open at the top
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [location.pathname]); // Depend on location.pathname to trigger scroll

  return null;
}

function App() {
  // to show alert message
  const { alert, showAlert, hideAlert } = useAlert();

  return (
    <div className={styles.App}>
      <Router>
        {/** display navbar */}
        <NavBar />
        {/** Display the show alert message */}
        {alert && (
          <AlertMessage
            variant={alert.variant}
            message={alert.message}
            showAlert={showAlert}
            onClose={hideAlert}
          />
        )}
        {/** Scroll to top on route change */}
        <ScrollToTop />
        {/** display all routes for other pages */}
        <Routes>
          <Route exact path="/" element={<Homepage showAlert={showAlert} />} />
          <Route
            exact
            path="/services"
            element={<ServicesPage showAlert={showAlert} />}
          />
          <Route
            exact
            path="/portfolio"
            element={<PortfolioPage showAlert={showAlert} />}
          />
          <Route
            exact
            path="/about"
            element={<AboutPage showAlert={showAlert} />}
          />
          <Route
            exact
            path="/contact"
            element={<ContactPage showAlert={showAlert} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/** display footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
