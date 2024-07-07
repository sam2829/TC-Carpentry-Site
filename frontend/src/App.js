import styles from "./App.module.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
