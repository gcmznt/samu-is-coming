import React from "react";
import cactus from "./images/cactus.svg";
import regalo from "./images/present.svg";
// import "./App.css";

// process.env.REACT_APP_TITLE;
// process.env.REACT_APP_DATE;
// process.env.REACT_APP_LENGTH;
// process.env.REACT_APP_WEIGHT;

function share() {
  window.navigator.share({
    title: "È nato Samuele?",
    text:
      "Ti interessa sapere quando nascerà Samuele? Tieniti informato con questo link! Le linee telefoniche dei genitori sono intasate.",
    url: "https://samu.laricettadellafelicita.it"
  });
}

function App({ action, hasPush }) {
  return (
    <main>
      <h1>Samuele</h1>
      <time>11/06/2020</time>
      <div className="meter"></div>
      <p className="loading">Loading</p>

      {hasPush ? (
        <aside className="notification">
          <img src={cactus} alt="Cactus" />
          <button onClick={action}>Resta aggiornato</button>
        </aside>
      ) : null}

      <aside className="wishlist">
        <img src={regalo} alt="Regalo" />
        <a
          className="button secondary"
          href="https://www.amazon.it/baby-reg/24IL1T6C7U0YX"
        >
          Lista nascita
        </a>
      </aside>

      {window.navigator ? (
        <aside className="share">
          <img src={cactus} alt="Cactus" />
          <button onClick={share}>Condividi</button>
        </aside>
      ) : null}
    </main>
  );
}

export default App;
