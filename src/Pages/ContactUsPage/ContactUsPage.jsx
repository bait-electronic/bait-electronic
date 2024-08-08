import React, { useEffect } from "react";
import "./ContactUsPage.scss";
import Footer from "../../Components/Global/Footer/Footer";
import MobMenu from "../../Components/Global/Menu/MobMenu/MobMenu";
import { cContactUsHeader } from "../../Constanst/constanst.Const";
import BEContactUsStaticImage from "../../Components/BEContactUs/BEContactUsStaticImage/BEContactUsStaticImage";

function ContactUsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="contact-us-page">
      <MobMenu />
      <div className="contact-us-page__header">
        <img src={cContactUsHeader} alt="بنر ارتباط با ما" />
      </div>
      <BEContactUsStaticImage />
      <Footer />
    </div>
  );
}

export default ContactUsPage;
