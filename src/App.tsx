import React from "react";
import "./App.css";

function App() {
  
  const closeBlackbox = () => {
    const event = new CustomEvent("blackboxClosed", {
      detail: { type: "edit" },
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={closeBlackbox}>Close Blackbox</button>
      </header>
    </div>
  );
}

export default App;