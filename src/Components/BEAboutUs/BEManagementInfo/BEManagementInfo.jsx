import React from "react";
import BEBtn from "../../Global/BEBtn/BEBtn";
import "./BEManagementInfo.scss";

function BEManagementInfo({ img, name, side, expertise, faCv, enCv }) {
  return (
    <div className="be-management-info">
      <div className="be-management-info__main-wrapper">
        <div className="be-management-info__img">
          <img src={img} alt={name} />
        </div>
        <div className="be-management-info__desc">
          <div className="be-management-info__row-desc">
            <span>نام و نام خانوادگی:</span>
            <span>{name}</span>
          </div>
          <div className="be-management-info__row-desc">
            <span>سمت:</span>
            <span>{side}</span>
          </div>
          <div className="be-management-info__row-desc">
            <span>تخصص:</span>
            <span>{expertise}</span>
          </div>
        </div>
      </div>
      <div className="be-management-info__download-link">
        <BEBtn file={faCv} text={"لینک دانلود رزومه"} />
        <BEBtn file={enCv} text={"resume link"} />
      </div>
    </div>
  );
}

export default BEManagementInfo;
