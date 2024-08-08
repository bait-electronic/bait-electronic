import React from "react";
import "./BETop.scss";
import { GrLinkTop } from "react-icons/gr";

function BETop() {
  return (
    <div
      className="be-top"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <GrLinkTop />
    </div>
  );
}

export default BETop;
