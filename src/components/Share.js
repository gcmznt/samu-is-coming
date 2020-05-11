import React from "react";
import { firebaseLog } from "../firebase";

function action(e) {
  e.preventDefault();
  firebaseLog("share_intent");
  window.navigator
    .share({
      title: "È nato Samuele?",
      text:
        "Ti interessa sapere quando nascerà Samuele? Tieniti informato con questo link! Le linee telefoniche dei genitori sono intasate.",
      url: "https://samu.laricettadellafelicita.it",
    })
    .then(() => firebaseLog("shared"))
    .catch(() => {});
}

export default function Share() {
  return window.navigator.share ? (
    <aside className="share">
      <a href="#share" onClick={action}>
        Condividi
      </a>
    </aside>
  ) : null;
}
