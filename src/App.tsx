import React from "react";
import styles from "./App.module.css";
import Header from "./compomemts/header/Header";
import Footer from "./compomemts/footer/Footer";
function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
