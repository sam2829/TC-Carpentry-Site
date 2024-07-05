import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import image from "./images/mock-photo.jpg";

function App() {
  return (
    <>
      <div className={styles.App}>
        <NavBar />
        <main>
          <img src={image} alt="work example" />
        </main>
      </div>
    </>
  );
}

export default App;
