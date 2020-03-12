import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App({ action }) {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={action}>Attiva notifiche</button>
      </header>
    </div>
  );
}

export default App;
