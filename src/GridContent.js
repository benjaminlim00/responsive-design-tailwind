import React from "react";
import vert from "./vert.jpg";
import hori from "./hori.jpg";

export default function GridContent() {
  return (
    <div className="flex justify-center self-center min-h-full bg-black">
      <div className="grid-container">
        <div className="grid-box">
          <div className="grid-Content">
            <img src={vert} />
            <p>some words</p>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-Content">
            <img src={hori} />
            <p>some words</p>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-Content">
            <img src={vert} />
            <p>some words</p>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-Content">
            <img src={vert} />
            <p>some words</p>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-Content">
            <img src={vert} />
            <p>some words</p>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-Content">
            <img src={vert} />
            <p>some words</p>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-Content">
            <img src={vert} />
            <p>some words</p>
          </div>
        </div>
      </div>
    </div>
  );
}
