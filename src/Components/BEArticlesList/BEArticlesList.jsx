import React, { useState } from "react";
import "./BEArticlesList.scss";
import { ARTICLE_ITEMS } from "../../Models/Article.Model/Article.Model";
import BEPopup from "../Global/BEPopup/BEPopup";
import BEBtn from "../Global/BEBtn/BEBtn";

function BEArticlesList() {
  const [showPopup, setShowPopup] = useState(false);
  const [itemDetail, setItemDetail] = useState([]);
  function showArticlePopup(id) {
    let getItem = ARTICLE_ITEMS.find((item) => {
      return item.id === id;
    });
    let showItem = (
      <div className="be-articles-list__popup">
        <div className="be-articles-list__header-popup">
          <div className="be-articles-list__title-popup">
            عنوان: <h3>{getItem.name}</h3>
          </div>
          <div className="be-articles-list__image-popup">
            <img src={getItem.image} alt={getItem.name} />
          </div>
        </div>
        <div className="be-articles-list__description-popup">
          <span>چکیده: </span>
          <p>{getItem.description}</p>
        </div>
        <div className="be-articles-list__download-btn-popup">
          <BEBtn target="_blank" file={getItem.file} text={"دانلود مقاله"} />
        </div>
      </div>
    );
    setItemDetail(showItem);
    setShowPopup(true);
  }
  return (
    <div className="be-articles-list">
      {showPopup && (
        <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
      )}

      {ARTICLE_ITEMS.map((item) => {
        return (
          <div
            key={item.id}
            className="be-articles-list__item-wrapper"
            onClick={() => {
              showArticlePopup(item.id);
            }}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default BEArticlesList;
