import React from "react";
import "./Testing.css";
import Coffee from "../../../src/assets/images/coffee.jpg";
import { MagicCard } from "../ProductCard/MagicCard";

export const Testing = () => {
  return (
    <MagicCard>
      <div class="hover-container">
        <img src={Coffee} alt="Example" />
        <div class="hover-content">
          <h3>Title</h3>
          <p>Description appears on hover</p>
        </div>
      </div>
    </MagicCard>
  );
};
