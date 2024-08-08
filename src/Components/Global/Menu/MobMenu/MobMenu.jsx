import React, { useState } from "react";
import "./MobMenu.scss";
import { LOGO } from "../../../../Constanst/constanst.Const";
import { Link } from "react-router-dom";

function MobMenu() {
  const [first, setfirst] = useState(true);
  function DynamicClass() {
    let dynamicClass = "show-nav-menu";
    if (first) {
      dynamicClass = "hidden-nav-menu";
    }
    return dynamicClass;
  }
  const menuList = (
    <div className="mob-menu__nav-menu" style={{ backgroundColor: "#eee" }}>
      <Link to="/" className="mob-menu__items mob-menu__home mob-menu__box-4">
        <span>خانه</span>
      </Link> 
      <Link
        to="/about-us-page"
        className="mob-menu__items mob-menu__about-us mob-menu__box-3"
      >
        <span>درباره ما</span>
      </Link>
      <Link
        to="/introduction-of-product-page"
        className="mob-menu__items mob-menu__introduction-of-products mob-menu__box-2"
      >
        <span>معرفی محصولات</span>
      </Link>
      <Link
        to="/articles-page"
        className="mob-menu__items mob-menu__articles mob-menu__box-1"
      >
        <span> مقالات</span>
      </Link>
      <Link
        to="/contact-us-page"
        className="mob-menu__items mob-menu__contact-us mob-menu__box-0"
      >
        <span> ارتباط با ما</span>
      </Link>
    </div>
  );
  return (
    <div className="mob-menu">
      <div className="mob-menu__header">
        <Link to={"/"} className="mob-menu__logo-wrapper">
          <img className="mob-menu__logo" src={LOGO} alt="logo" />
        </Link>
        <div className="mob-menu__hamburger-wrapper">
          <input
            className="mob-menu__hamburger-check-btn"
            id="toggle"
            type="checkbox"
          ></input>
          <label
            htmlFor="toggle"
            className="mob-menu__hamburger"
            onClick={() => {
              setfirst(!first);
            }}
          >
            <div className="mob-menu__hamburger-line-top-icon top-bun"></div>
            <div className="mob-menu__hamburger-line-bottom-icon"></div>
            <div className="mob-menu__hamburger-line-bottom-icon meat"></div>
          </label>
        </div>
      </div>
      <div className={"mob-menu__" + DynamicClass()}>
        <nav className="mob-menu__nav-wrapper">{menuList}</nav>
      </div>
    </div>
  );
}

export default MobMenu;
