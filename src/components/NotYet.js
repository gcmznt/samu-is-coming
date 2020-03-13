import React from "react";
import cactus from "../images/cactus.svg";
import love from "../images/love.svg";

export default function NotYet({ notify, off }) {
  return (
    <React.Fragment>
      <time>11/06/2020</time>

      <div className="meter"></div>
      <p className="loading">Loading</p>

      {notify ? (
        <aside className="notification">
          <img src={cactus} alt="Cactus" />
          <button onClick={notify} disabled={off}>
            {off ? <img src={love} alt="Love" /> : "Resta aggiornato"}
          </button>
        </aside>
      ) : null}
    </React.Fragment>
  );
}
