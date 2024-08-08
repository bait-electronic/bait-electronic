import React from "react";
import "./BECompanyServicesItems.scss";

function BECompanyServicesItems({ title, img, body, classname = " " }) {
  return (
    <div className={"be-company-services-items " + classname}>
      <div className="be-company-services-items__main-wrapper">
        <div className="be-company-services-items__main">
          <h4 className="be-company-services-items__title">{title}</h4>
          <div className="be-company-services-items__body"> {body}</div>
        </div>
        <div className="be-company-services-items__image-wrapper">
          <img src={img.src} alt={img.alt} />
        </div>
      </div>
    </div>
  );
}

export default BECompanyServicesItems;
