import React from "react";
import "./BENavItem.scss";

function BENavItem({ navbarList }) {
  function scrollToElement(id, gap) {
    ////////// dont clean
    const element = document.getElementById(id);
    const elementTopRect = element.getBoundingClientRect().top;
    const scrolledDistance = document.querySelector("html")?.scrollTop;
    const calculated = elementTopRect + scrolledDistance - gap;
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: calculated,
    });
  }
  return (
    <div className="be-nav-item">
      {navbarList.map((item) => {
        return (
          <a href={`#${item.id}`} className="be-nav-item__item" key={item.id}>
            {item.name}
          </a>
        );
      })}
    </div>
  );
}

export default BENavItem;
