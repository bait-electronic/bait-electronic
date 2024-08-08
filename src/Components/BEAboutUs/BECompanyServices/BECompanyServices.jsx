import React from "react";
import "./BECompanyServices.scss";
import BECompanyServicesItems from "../BECompanyServicesItems/BECompanyServicesItems";
import {
  cExpertBeforeBuying,
  PROMOTIONAL0,
  PROMOTIONAL1,
  PROMOTIONAL2,
  cQuestionAndAnswer,
  SERVICESNEW,
  EXPERTBEFOREBUYINGBACKGROUND,
  CATALOGE,
  BROCHORE,
} from "../../../Constanst/constanst.Const";
import { Link } from "react-router-dom";
import { GiSmartphone } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";

function BECompanyServices() {
  return (
    <div className="be-company-services">
      <div className={"be-company-services__phone-services"}>
        <div className="be-company-services__phone-services-image">
          <img src={SERVICESNEW} alt="خدمات تلفنی" />
        </div>
        <div className="be-company-services__phone-services-body-wrapper">
          <h3>خدمات</h3>
          <h4>خدمات تلفنی:</h4>
          <div className="be-company-services__phone-services-body">
            <span>
              جهت استفاده از خدمات آنلاین و تلفنی از طریق روش های زیر با
              کارشناسان بخش فنی مجموعه در ارتباط باشید:
            </span>
            <div>
              <Link to="tel:+989115822601">
                <GiSmartphone />
                شماره تلفن: 09115822601
              </Link>
              <Link to="https://wa.me/+989910737885">
                <ImWhatsapp />
                واتس‌اَپ: 09910737885
              </Link>
              <Link to="mailto:bait.elec@yahoo.com">
                <FiMail />
                ایمیل: bait.elec@yahoo.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BECompanyServicesItems
        classname="expert-before-buying"
        title={"مشاوره پیش از خرید:"}
        img={{ src: cExpertBeforeBuying, alt: "مشاوره پیش از خرید" }}
        body={
          <>
            <div>
              <img src={EXPERTBEFOREBUYINGBACKGROUND} alt="notFound" />
              <span>
                کارشناسان واحد فروش و طراحی به صورت 24ساعته در خدمت کاربران
                گرامی می باشند؛ که عزیزان می توانند از طریق روش های زیر از
                مشاوره رایگان کارشناسان در زمینه های مختلف بهره مند گردند.
              </span>
            </div>
            <div>
              <Link to="tel:+989115822601">
                <GiSmartphone />
                شماره تلفن: 09115822601
              </Link>
              <Link to="https://wa.me/+989910737885">
                <ImWhatsapp />
                واتس‌اَپ: 09910737885
              </Link>
              <Link to="mailto:bait.elec@yahoo.com">
                <FiMail />
                ایمیل: bait.elec@yahoo.com
              </Link>
            </div>
          </>
        }
      />
      <div className="be-company-services__promotional-items">
        <h4>اقلام تبلیغاتی:</h4>
        <span>
          جهت دریافت اقلام تبلیغاتی و کاتالوگ محصولات به لینک زیر مراجعه کنید
        </span>
        <div className="be-company-services__promotional-img">
          <a href={CATALOGE}>
            <img src={PROMOTIONAL0} alt="PROMOTIONAL0" />
            <span>دانلود کاتالوگ</span>
          </a>
          <a href={BROCHORE}>
            <img src={PROMOTIONAL1} alt="PROMOTIONAL1" />
            <span>دانلود بورشور</span>
          </a>
          <a href={CATALOGE}>
            <img src={PROMOTIONAL2} alt="PROMOTIONAL2" />
            <span>دانلود تراکت</span>
          </a>
        </div>
      </div>
      <Link
        to="tel:+989115822601"
        className={"be-company-services__question-and-answer"}
      >
        <h4 className="be-company-services__question-and-answer-title">
          پرسش و پاسخ:
        </h4>
        <div className="be-company-services__question-and-answer-image-wrapper">
          <img src={cQuestionAndAnswer} alt="پرسش و پاسخ" />
        </div>
      </Link>
    </div>
  );
}

export default BECompanyServices;
