import React, { useEffect } from "react";
import MobMenu from "../../../Components/Global/Menu/MobMenu/MobMenu";
import BECarousel from "../../../Components/Global/BECarousel/BECarousel";
import BEDivider from "../../../Components/Global/BEDivider/BEDivider";
import BEBtn from "../../../Components/Global/BEBtn/BEBtn";
import "./CityProjectPage.scss";
import { PROJECT_LIST } from "../../../Models/Home.Model/CityProject.Model";
import { useParams } from "react-router-dom";
import { GiCow, GiLuckyFisherman } from "react-icons/gi";
import Footer from "../../../Components/Global/Footer/Footer";
import NotFound from "../../NotFound/NotFound";
import BEHeader from "../../../Components/Global/BEHeader/BEHeader";

function CityProjectPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { city } = useParams();
  return (
    <div className="city-project-page">
      <MobMenu />
      <BEHeader />
      <div className="city-project-page__wrapper">
        {PROJECT_LIST[city].length >= 1 ? (
          PROJECT_LIST[city].map((item, index) => {
            return (
              <div key={index} className="city-project-page__item">
                <div className="city-project-page__text-wrapper">
                  <span className="city-project-page__text">
                    {item.iconNumber === 1 ? (
                      <span className="city-project-page__icon">
                        <GiCow className="icon-style" />
                      </span>
                    ) : item.iconNumber === 0 ? (
                      <span className="city-project-page__icon">
                        <GiLuckyFisherman className="icon-style" />
                      </span>
                    ) : (
                      <span></span>
                    )}{" "}
                    {item.titre}
                  </span>
                  {item.videoLink !== undefined && (
                    <BEBtn file={item.videoLink} text={"دانلود فایل ویدیویی"} />
                  )}
                </div>
                <div className="city-project-page__carousel-wrapper">
                  <BECarousel imagesList={item.carouselImage} />
                </div>
                <BEDivider />
              </div>
            );
          })
        ) : (
          <NotFound />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CityProjectPage;
