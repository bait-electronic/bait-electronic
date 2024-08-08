import React from "react";
import "./BEBtn.scss";

function BEBtn({ target = "_self", file, text, onclick = () => {} }) {
  return (
    <div onClick={onclick} className="be-btn">
      <a target={target} href={file}>
        {text}
      </a>
    </div>
  );
}

export default BEBtn;
