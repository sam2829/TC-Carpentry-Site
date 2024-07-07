import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Homepage />
    </div>
  );
}

export default App;
