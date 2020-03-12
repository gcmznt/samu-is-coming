import React from "react";
import cactus from "./images/cactus.svg";
import regalo from "./images/present.svg";
// import "./App.css";

// process.env.REACT_APP_TITLE;
// process.env.REACT_APP_DATE;
// process.env.REACT_APP_LENGTH;
// process.env.REACT_APP_WEIGHT;

function App({ action }) {
  return (
    <main>
      <h1>Samuele</h1>
      <time>11/06/2020</time>
      <div className="meter"></div>
      <p className="loading">Loading</p>

      <aside className="notification">
        <img src={cactus} alt="Cactus" />
        <button onClick={action}>Resta aggiornato</button>
      </aside>
      <aside className="wishlist">
        <img src={regalo} alt="Regalo" />
        <a
          className="button secondary"
          href="https://www.amazon.it/baby-reg/24IL1T6C7U0YX"
        >
          Lista nascita
        </a>
      </aside>
    </main>
  );
}

export default App;
