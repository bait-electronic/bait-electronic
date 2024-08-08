import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { GrInstagram, GrLinkedinOption, GrSkype } from "react-icons/gr";
import { RxTwitterLogo } from "react-icons/rx";
import { FiMail, FiMapPin } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { CVSAM, cFooter } from "../../../Constanst/constanst.Const";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__banner">
        {/* <img src={cFooter} className="footer__banner-bg-image" /> */}
        <span>طراحی، مشاوره و اجرای پروژه های خاص از جمله:</span>
        <span>
          دستگاه زباله سوز، تولید و کنترل انرژی الکتریکی، صنایع های‌تک
          <br className="footer__banner-br" /> در حوزه نانو تکنولوژی و علوم
          وابسطه
        </span>
      </div>
      <footer className="footer__footer-wrapper">
        <img src={cFooter} className="footer__footer-bg-image" alt="" />
        <div className="footer__info">
          <div className="footer__product">
            <div className="footer__product-column">
              <Link to={"/introduction-of-product-page"}>ازون ژنراتور</Link>
              <Link
                to={
                  "/introduction-of-product-page/#introduction-of-product-page-item-1"
                }
              >
                انواع سنسور
              </Link>
              <Link to={"/introduction-of-product-page"}>
                بالاست الکترونیکی
              </Link>
              <Link to={"/introduction-of-product-page"}>محافظ الکترونیکی</Link>
            </div>
            <div className="footer__product-column">
              <h3>صنایع بیت الکترونیک شمال</h3>
              <span>
                این مجموعه ترکیبی از تجربه و علم همراه با اخلاق مداری است.
                <br />
                تولید اصولی با توجه به نیاز سنجی واقی بازار، از پروژه هایی کوچک
                تا گام هایی فرا منطقه ای...
                <br />
                با تکیه بر حفظ منابع انرژی و زیستی در کنار ساخت تجهیزات مرتبط با
                توجه به تکنولوژی رو به رشد از سال 90تا کنون...
              </span>
            </div>
          </div>
          <div className="footer__social-media">
            <Link to="https://instagram.com/bait.elec?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
              <GrInstagram />
            </Link>
            <Link to="tel:+989115822601">
              <RxTwitterLogo />
            </Link>
            <Link to="tel:+989115822601">
              <GrLinkedinOption />
            </Link>
            <Link to="https://t.me/bait_electronic">
              <FaTelegramPlane />
            </Link>
            <Link to="tel:+989115822601">
              <GrSkype />
            </Link>
            <Link to="https://wa.me/+989910737885">
              <ImWhatsapp />
            </Link>
            <Link to="https://goo.gl/maps/YgveXmFkoaR4cXyE7">
              <FiMapPin />
            </Link>
            <Link to="mailto:bait.elec@yahoo.com">
              <FiMail />
            </Link>
            <Link to="tel:+989115822601">
              <GiSmartphone />
            </Link>
          </div>
        </div>
        <div className="footer__programer-info">
          © 1402 وب سایت رسمی شرکت صنایع بیت الکترونیک شمال. ||
          <a href="tel:+989369486468">
            <a href={CVSAM}>مجری طرح، تیم "سام" </a>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
