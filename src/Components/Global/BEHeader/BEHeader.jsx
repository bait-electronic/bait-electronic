import React from "react";
import { HEADER } from "../../../Constanst/constanst.Const";
import "./BEHeader.scss";

function BEHeader() {
  return (
    <div className="be-header" id="header">
      <img src={HEADER} alt="header" />
    </div>
  );
}

export default BEHeader;
