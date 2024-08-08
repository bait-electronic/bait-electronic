import React from "react";
import "./BEPopup.scss";

function BEPopup({ itemDetail, setShowPopup }) {
  function statePopeup() {
    setShowPopup(false);
  }
  return (
    <div className="be-popup">
      <div
        className="be-popup__shadow"
        onClick={() => {
          statePopeup();
        }}
      ></div>
      <div className="be-popup__wrapper">{itemDetail}</div>
    </div>
  );
}

export default BEPopup;
