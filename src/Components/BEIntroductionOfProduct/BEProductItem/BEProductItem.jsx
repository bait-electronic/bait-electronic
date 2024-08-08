import React from "react";
import "./BEProductItem.scss";
import BETable from "../../IntroductionOfProduct/BETable/BETable";
import BECarousel from "../../Global/BECarousel/BECarousel";

function BEProductItem({
  title = "",
  desc = "",
  benefit = [],
  tableData = [{}],
  imagesList = [],
  usage = [],
}) {
  return (
    <div className="be-product-item">
      {title !== "" && <h4>{title}</h4>}
      {desc !== "" && (
        <div className="be-product-item__desc">
          <p>{desc}</p>
        </div>
      )}
      {benefit.length > 1 && (
        <div className="be-product-item__benefit">
          <span className="be-product-item__titre">
            از جمله پارامترهای مهم در دستگاه های {title} صنایع بیت الکترونیک
            شامل موارد زیر می باشد:
          </span>
          <div>
            {benefit.map((item, index) => {
              return (
                <div key={index}>
                  ◄ <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {tableData.length > 1 && (
        <div className="be-product-item__table">
          <BETable tableData={tableData} />
        </div>
      )}
      {imagesList.length > 1 && (
        <div className="be-product-item__carousel">
          <BECarousel imagesList={imagesList} />
        </div>
      )}
      {usage.length > 1 && (
        <div className="be-product-item__usage">
          <span className="be-product-item__titre">کاربردها:</span>
          <div>
            {usage.map((item, index) => {
              return (
                <div key={index}>
                  ◄ <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default BEProductItem;
