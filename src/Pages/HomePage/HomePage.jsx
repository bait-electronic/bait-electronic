import React, { useEffect } from "react";
import "./HomePage.scss";
import { HOMETITRE } from "../../Constanst/constanst.Const";
import Footer from "../../Components/Global/Footer/Footer";
import BeLastEvent from "../../Components/BEHome/BeLastEvent/BeLastEvent";
import BEDivider from "../../Components/Global/BEDivider/BEDivider";
import BECityProject from "../../Components/BEHome/BECityProject/BECityProject";
import BEHonors from "../../Components/BEHome/BEHonors/BEHonors";
import BEHeader from "../../Components/Global/BEHeader/BEHeader";
import MobMenu from "../../Components/Global/Menu/MobMenu/MobMenu";

function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="home-page">
      <MobMenu />
      <BEHeader />
      <div className="home-page__header">
        <div className="home-page__titre-wrapper">
          <img src={HOMETITRE} alt="" />
          <div className="home-page__titre">
            <p>صنایع بیت الکترونیک شمال</p>
            <span>
              تحقق ایده های ناب در صنایع بیت الکترونیک شمال از جمله اهداف این
              مجموعه می‌باشد. از این رو کادری مجرب و متخصص در حوزه های مختلف از
              جمله : برق الکترونیک، مکاترونیک، نانو تکنولوژی، مهندسی آب، علم
              مواد و متالوژی و... را در مجموعه خود پرورش داده و با تحقیق و توسعه
              محصولات و قدم نهادن در علوم نوین توانسته پیشرفت های چشم گیری در
              صنایع های تِک و نو ظهور داشته باشد.
            </span>
          </div>
        </div>
      </div>
      <BECityProject />
      <BEDivider />
      <BEHonors />
      <BEDivider />
      <BeLastEvent />
      <Footer />
    </div>
  );
}

export default HomePage;
