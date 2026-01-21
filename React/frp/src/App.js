import { useState } from "react";
import ironmanImg from "./assets/ironman.jpg";
import "./App.css";

function IronMan() {
  const [showIronMan, setShowIronMan] = useState(false);

  return (
    <div className="container">
      {!showIronMan ? (
        <button className="btn" onClick={() => setShowIronMan(true)}>
          Click Me
        </button>
      ) : (
        // Background area (clicking here closes page)
        <div
          className="ironman-page"
          onClick={() => setShowIronMan(false)}
        >
          {/* Image wrapper (prevents close) */}
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={ironmanImg}
              alt="Iron Man"
              className="ironman-img"
            />
            <h1 className="ironman-text">I am Iron Man</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default IronMan;
