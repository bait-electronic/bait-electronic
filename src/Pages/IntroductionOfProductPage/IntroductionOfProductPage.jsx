import React, { useEffect } from "react";
import "./IntroductionOfProductPage.scss";
import Footer from "../../Components/Global/Footer/Footer";
import MobMenu from "../../Components/Global/Menu/MobMenu/MobMenu";
import BEProduct from "../../Components/BEIntroductionOfProduct/BEProduct/BEProduct";
import BEHeader from "../../Components/Global/BEHeader/BEHeader";
import BENavbar from "../../Components/Global/BENavbar/BENavbar";
import { INTRODUCTIONOFPRODUCTNAVLIST } from "../../Constanst/constanst.Const";

function IntroductionOfProductPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="introduction-of-product-page">
      <MobMenu />
      <BEHeader />
      <BENavbar showNav={INTRODUCTIONOFPRODUCTNAVLIST} />
      <BEProduct />
      <Footer />
    </div>
  );
}

export default IntroductionOfProductPage;
