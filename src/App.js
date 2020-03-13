import React, { useState } from "react";
import regalo from "./images/present.svg";
import love from "./images/love.svg";
import star from "./images/star.svg";

import IsBorn from "./components/IsBorn";
import NotYet from "./components/NotYet";
import Share from "./components/Share";

function App({ action, hasPush, isTokenSentToServer }) {
  const {
    REACT_APP_DATE: date,
    REACT_APP_LENGTH: length,
    REACT_APP_WEIGHT: weight
  } = process.env;
  const [loading, setLoading] = useState(false);

  function notifyMe() {
    setLoading(true);
    action();
  }

  const notify = hasPush && !isTokenSentToServer() ? notifyMe : false;

  return (
    <main>
      <h1>Samuele</h1>

      {date ? (
        <IsBorn date={date} length={length} weight={weight} />
      ) : (
        <NotYet notify={notify} off={loading} />
      )}

      <aside className="wishlist">
        <img src={regalo} alt="Regalo" />
        <a
          className="button secondary"
          href="https://www.amazon.it/baby-reg/24IL1T6C7U0YX"
        >
          Lista nascita
        </a>
      </aside>

      <footer>
        Cate
        <img src={love} alt="Love" />
        Vale
        <img src={star} alt="Star" />
        Giko
      </footer>

      <Share />
    </main>
  );
}

export default App;
