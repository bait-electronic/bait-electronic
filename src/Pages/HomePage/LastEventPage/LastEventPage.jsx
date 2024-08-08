import React, { useEffect } from "react";
import "./LastEventPage.scss";
import { LAST_EVENT } from "../../../Models/Home.Model/LastEvent";
import { useParams } from "react-router-dom";
import BECarousel from "../../../Components/Global/BECarousel/BECarousel";
import Footer from "../../../Components/Global/Footer/Footer";
import MobMenu from "../../../Components/Global/Menu/MobMenu/MobMenu";
import BEHeader from "../../../Components/Global/BEHeader/BEHeader";
function LastEventPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { eventId } = useParams();
  const item = LAST_EVENT[eventId];

  return (
    <div>
      <MobMenu />
      <BEHeader />
      {item.id >= 0 && (
        <div className="last-event-page">
          <h3>{item.title}</h3>
          <div className="last-event-page__main-wrapper">
            <p>{item.body}</p>
            <video width="" height="" controls="controls">
              <source src={item.video} type="video/mp4" />
            </video>
          </div>
          {item.carouselImage.length >= 2 && (
            <div className="last-event-page__image-wrapper">
              <BECarousel imagesList={item.carouselImage} />
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default LastEventPage;
