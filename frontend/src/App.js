import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Homepage from "./components/pages/Homepage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Homepage />
    </div>
  );
}

export default App;
