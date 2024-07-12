import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
