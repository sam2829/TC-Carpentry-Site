import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Slideshow from "./components/Slideshow";


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Slideshow />
    </div>
  );
}

export default App;
