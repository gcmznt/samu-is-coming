import React from "react";
import regalo from "../images/present.svg";

export default function WishList() {
  return (
    <aside className="wishlist">
      <img src={regalo} alt="Regalo" />
      <a
        className="button secondary"
        href="https://www.amazon.it/baby-reg/24IL1T6C7U0YX"
      >
        Lista nascita
      </a>
    </aside>
  );
}
