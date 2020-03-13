import React, { useState } from "react";

import Footer from "./components/Footer";
import IsBorn from "./components/IsBorn";
import NotYet from "./components/NotYet";
import Share from "./components/Share";
import WishList from "./components/WishList";

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

  const notify = hasPush() && !isTokenSentToServer() ? notifyMe : false;

  return (
    <main>
      <h1>Samuele</h1>

      {date ? (
        <IsBorn date={date} length={length} weight={weight} />
      ) : (
        <NotYet notify={notify} off={loading} />
      )}

      <WishList />
      <Footer />
      <Share />
    </main>
  );
}

export default App;
