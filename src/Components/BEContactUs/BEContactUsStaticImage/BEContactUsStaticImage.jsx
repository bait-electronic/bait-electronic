import React from "react";
import "./BEContactUsStaticImage.scss";
import { CONTACTUSSTATICIMAGE } from "../../../Constanst/constanst.Const";
import { Link } from "react-router-dom";
import { FiMail, FiMapPin } from "react-icons/fi";
import { GiSmartphone } from "react-icons/gi";

function BEContactUsStaticImage() {
  return (
    <div className="be-contact-us-static-image">
      <img src={CONTACTUSSTATICIMAGE} alt="contact-us" />
      <Link
        className="be-contact-us-static-image__map"
        to="https://goo.gl/maps/YgveXmFkoaR4cXyE7"
      >
        <FiMapPin />
        <span>
          مازندران/بابل/شهرک صنعتی منصور کنده/میدان صنعت خیابان
          نارنجستان/واحدتولیدی صنایع بیت الکترونیک شمال
        </span>
      </Link>
      <Link
        className="be-contact-us-static-image__mail"
        to="mailto:bait.elec@yahoo.com"
      >
        <FiMail />
        <span>bait.elec@yahoo.com</span>
      </Link>
      <Link
        className="be-contact-us-static-image__phone"
        to="tel:+989115822601"
      >
        <GiSmartphone />
        <span>09115822601</span>
      </Link>
    </div>
  );
}

export default BEContactUsStaticImage;
