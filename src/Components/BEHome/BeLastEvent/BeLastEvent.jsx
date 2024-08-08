import React from "react";
import "./BeLastEvent.scss";
import { Link } from "react-router-dom";
import { LAST_EVENT } from "../../../Models/Home.Model/LastEvent";

function BeLastEvent() {
  //////////////////// شیش تایی باشه ولی اگه سایز تغییر کرد سه تایی بشه توی یه خط
  // const mainRef = useRef(null);
  // const [showItems, setShowItems] = useState(true);
  // const [eventLength, setEventLength] = useState(eventItems);
  // const [visibleItems, setVisibleItems] = useState(6);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (mainRef.current.offsetWidth < 700) {
  //       setShowItems(false);
  //       setVisibleItems(3);
  //     } else {
  //       setShowItems(true);
  //       setVisibleItems(6);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="be-last-event">
      <h3>رویدادهای اخیر</h3>
      {/* <div className="be-last-event__main" ref={mainRef}> */}
      <div className="be-last-event__main">
        {LAST_EVENT.slice(0, 6).map((item, index) => (
          <Link
            className="be-last-event__items"
            key={index}
            to={"/last-event-page/" + item.id}
          >
            <div className="be-last-event__img-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <span className="be-last-event__item-text">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BeLastEvent;
