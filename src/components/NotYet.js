import React from "react";
import cactus from "../images/cactus.svg";
import love from "../images/love.svg";

export default function NotYet({ notify, loading, subscribed }) {
  const btnText = subscribed ? (
    <img src={love} alt="Love" />
  ) : !loading ? (
    "Resta aggiornato"
  ) : null;

  return (
    <React.Fragment>
      <time>11/06/2020</time>

      <div className="meter"></div>
      <p className="loading">Loading</p>

      {notify ? (
        <aside className="notification">
          <img src={cactus} alt="Cactus" />
          <button
            onClick={notify}
            disabled={loading || subscribed}
            className={`secondary${loading ? " loading" : ""}`}
          >
            {btnText}
          </button>
        </aside>
      ) : null}
    </React.Fragment>
  );
}
