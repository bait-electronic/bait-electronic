import React from "react";
import "./BETextAndImg.scss";

function BETextAndImg({ image, imageAlt, title, body, bodyImg = "" }) {
  return (
    <div className="be-text-model">
      <div className="be-text-model__image-wrapper">
        {image === "" ? <></> : <img src={image} alt={imageAlt} />}
      </div>
      <div className="be-text-model__main-wrapper">
        {title === "" ? <></> : <h3>{title}</h3>}
        <div>
          {body}
          {bodyImg === "" ? <></> : <img src={bodyImg} alt={imageAlt} />}
        </div>
      </div>
    </div>
  );
}

export default BETextAndImg;
