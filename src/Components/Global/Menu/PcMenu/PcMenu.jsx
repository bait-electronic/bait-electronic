import React from "react";
import "./PcMenu.scss";
import { Link } from "react-router-dom";

function PcMenu() {
  // const pageNumberDispatch = useDispatch();
  // const { visiblePageNumber } = useSelector((result) => {
  //   return result.visiblePageState;
  // });
  // function changePage(pageNumeber) {
  //   pageNumberDispatch(SetPageNumber(pageNumeber));
  // }
  const menuList = (
    <div className="pc-menu__nav-menu">
      <Link
        to="/contact-us-page"
        className="pc-menu__items pc-menu__contact-us pc-menu__box-0"
      >
        <span> ارتباط با ما</span>
      </Link>
      <Link
        to="/articles-page"
        className="pc-menu__items pc-menu__articles pc-menu__box-1"
      >
        <span> مقالات</span>
      </Link>
      <Link
        to="/introduction-of-product-page"
        className="pc-menu__items pc-menu__introduction-of-products pc-menu__box-2"
      >
        <span>معرفی محصولات</span>
      </Link>
      <Link
        to="/about-us-page"
        className="pc-menu__items pc-menu__about-us pc-menu__box-3"
      >
        <span>درباره ما</span>
      </Link>
      <Link to="/" className="pc-menu__items pc-menu__home pc-menu__box-4">
        <span>خانه</span>
      </Link>
    </div>
  );
  return <div className="pc-menu">{menuList}</div>;
}

export default PcMenu;
