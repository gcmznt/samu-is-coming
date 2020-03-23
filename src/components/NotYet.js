import React, { useEffect, useState, useRef } from "react";
import cactus from "../images/cactus.svg";
import love from "../images/love.svg";

export default function NotYet({ notify, loading, subscribed }) {
  const btnText = subscribed ? (
    <img src={love} alt="Love" />
  ) : !loading ? (
    "Resta aggiornato"
  ) : null;

  const [animated, setAnimated] = useState(true);

  const meter = useRef();

  const isBorn = () => {
    meter.current.addEventListener("animationiteration", () => {
      setAnimated(false);
      setTimeout(() => window.location.reload(), 2000);
    });
  };

  useEffect(() => {
    window.addEventListener("born", isBorn);

    return () => {
      window.removeEventListener("born", isBorn);
    };
  }, []);

  return (
    <React.Fragment>
      <time>11/06/2020</time>

      <div
        className={`meter ${animated ? "is-animated" : ""}`}
        ref={meter}
      ></div>
      <p className={`loading ${animated ? "is-animated" : ""}`}>Loading</p>

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
