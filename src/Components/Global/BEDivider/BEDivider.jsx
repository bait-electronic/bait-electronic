import React from "react";
import "./BEDivider.scss";

function BEDivider({ dividerId = "" }) {
  return (
    <div id={dividerId} className="be-devider">
      <hr className="be-devider__custom" />
    </div>
  );
}

export default BEDivider;
