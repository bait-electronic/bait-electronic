import React, { useEffect } from "react";
import "./NotFound.scss";
import { NOTFOUND } from "../../Constanst/constanst.Const";
import { useNavigate } from "react-router-dom";
import MobMenu from "../../Components/Global/Menu/MobMenu/MobMenu";
import Footer from "../../Components/Global/Footer/Footer";
import BEHeader from "../../Components/Global/BEHeader/BEHeader";

function NotFound() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="not-found" onClick={() => navigate(-1)}>
      <MobMenu />
      <BEHeader />
      <div className="not-found__image">
        <img src={NOTFOUND} alt=" Not Found Page" />
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
