import React from "react";
import "./BECityProject.scss";
import {
  cCityImageGol,
  cCityImageMazand,
  cCityImageGil,
  cCityImageKerman,
  cCityImageZanjan,
} from "../../../Constanst/constanst.Const";
import { Link } from "react-router-dom";

function BECityProject() {
  const items = [
    { id: 0, cityImg: cCityImageGol, cityName: "گلستان" },
    { id: 1, cityImg: cCityImageMazand, cityName: "مازندران" },
    { id: 2, cityImg: cCityImageGil, cityName: "گیلان" },
    { id: 3, cityImg: cCityImageKerman, cityName: "کرمان" },
    { id: 4, cityImg: cCityImageZanjan, cityName: "زنجان" },
  ];
  return (
    <div className="be-city-project">
      <h3>پروژه‌ها</h3>
      <div className="be-city-project__main">
        {items.map((item) => {
          return (
            <div className="be-city-project__item" key={item.id}>
              <Link to={"/city-project-page/" + item.id}>
                <img src={item.cityImg} alt="logo" />
                <span>{item.cityName}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BECityProject;
