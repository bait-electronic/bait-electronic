import React from "react";
import "./BeLatestNews.scss";
import { LOGO } from "../../../Constanst/constanst.Const";

function BeLatestNews() {
  // کلا پاک شه این قسمت
  return (
    <div className="be-latest-news">
      <title className="be-latest-news__header">آخرین اخبار</title>
      <hr />
      <div className="be-latest-news__news-wrapper">
        <div className="be-latest-news__item">
          <div className="be-latest-news__image-wrapper">
            <img src={LOGO} alt="عکس کوفتی" />
          </div>
          <div className="be-latest-news__text-wrapper">
            <div className="be-latest-news__title">تایتال خبر</div>
            <div className="be-latest-news__text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeLatestNews;
