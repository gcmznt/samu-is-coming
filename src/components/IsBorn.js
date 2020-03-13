import React from "react";
import ruler from "../images/ruler.svg";
import scale from "../images/scale.svg";

export default function IsBorn({ date, length, weight }) {
  return (
    <>
      <h2>E' nato!</h2>
      <time>
        {new Date(date).toLocaleString("it-IT", {
          hour12: false,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        })}
      </time>
      <ul className="info">
        {length ? (
          <li>
            <img src={ruler} alt="Ruler" />
            {length} cm
          </li>
        ) : null}
        {weight ? (
          <li>
            <img src={scale} alt="Scale" />
            {weight} Kg
          </li>
        ) : null}
      </ul>
    </>
  );
}
