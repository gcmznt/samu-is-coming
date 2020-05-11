import React from "react";
import { firebaseLog } from "../firebase";
import regalo from "../images/present.svg";

function action() {
  firebaseLog("wishlist");
}

export default function WishList() {
  return (
    <aside className="wishlist">
      <img src={regalo} alt="Regalo" />
      <a
        className="button"
        onClick={action}
        href="https://www.amazon.it/baby-reg/24IL1T6C7U0YX"
      >
        Lista nascita
      </a>
    </aside>
  );
}
