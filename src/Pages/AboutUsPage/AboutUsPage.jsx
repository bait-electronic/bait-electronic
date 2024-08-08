import React, { useEffect } from "react";
import "./AboutUsPage.scss";
import Footer from "../../Components/Global/Footer/Footer";
import MobMenu from "../../Components/Global/Menu/MobMenu/MobMenu";
import {
  cBozorgi,
  cCvEnMalakdar,
  cCvFaMalakdar,
  cCvFaBozorgi,
  cMalakdar,
  COMPANYINTRODUCTION0,
  COMPANYINTRODUCTION1,
  COMPANYINTRODUCTION2,
  COMPANYINTRODUCTION3,
  COMPANYINTRODUCTION4,
  COMPANYINTRODUCTION5,
  COMPANYINTRODUCTION6,
  COMPANYINTRODUCTION7,
  COMPANYINTRODUCTION8,
  COMPANYINTRODUCTION9,
  COMPANYINTRODUCTION10,
  COMPANYINTRODUCTION11,
  ABOUTUSNAVLIST,
} from "../../Constanst/constanst.Const";
import BETextAndImg from "../../Components/Global/BETextAndImg/BETextAndImg";
import BEDivider from "../../Components/Global/BEDivider/BEDivider";
import BECompanyServices from "../../Components/BEAboutUs/BECompanyServices/BECompanyServices";
import BEHeader from "../../Components/Global/BEHeader/BEHeader";
import BENavbar from "../../Components/Global/BENavbar/BENavbar";
import BECarousel from "../../Components/Global/BECarousel/BECarousel";
import BEManagementInfo from "../../Components/BEAboutUs/BEManagementInfo/BEManagementInfo";

function AboutUsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const companyIntroductionImageList = [
    {
      original: COMPANYINTRODUCTION0,
    },
    {
      original: COMPANYINTRODUCTION1,
    },
    {
      original: COMPANYINTRODUCTION2,
    },
    {
      original: COMPANYINTRODUCTION3,
    },
    {
      original: COMPANYINTRODUCTION4,
    },
    {
      original: COMPANYINTRODUCTION5,
    },
    {
      original: COMPANYINTRODUCTION6,
    },
    {
      original: COMPANYINTRODUCTION7,
    },
    {
      original: COMPANYINTRODUCTION8,
    },
    {
      original: COMPANYINTRODUCTION9,
    },
    {
      original: COMPANYINTRODUCTION10,
    },
    {
      original: COMPANYINTRODUCTION11,
    },
  ];
  return (
    <div className="about-us-page">
      <MobMenu />
      <BEHeader />
      <div className="about-us-page__padding">
        <BENavbar showNav={ABOUTUSNAVLIST} />
        <div className="about-us-page__company-introduction">
          <h3>معرفی شرکت</h3>
          <p className="about-us-page__text-introduction">
            صنایع بیت الکترونیک کار خود را از سال 1390 با تولید بالاست های
            الکترونیکی و محافظ های برق تحت برند ترز در استان مازندران آغاز کرد و
            در سال 95 موفق به بومی سازی دستگاه ازون ساز گردید. واحد تحقیق و
            توسعه این مجموعه به واسطه کادر مجرب و خلاق خود توانسته در حوضه های
            مختلفی از جمله استریل و آنتی باکتریل نمودن، افزایش زمان ماندگاری و
            کیفیت محصولات، تصفیه آب و تصفیه هوا با تکیه بر سیستم های تولید گاز
            ازون در اشل خانگی و صنعتی، تولید انواع سیستم های هوشمند سازی و
            مانیتورینگ، انواع سیستم های تشخیص برقدار شدن تجهیزات خانگی و صنعتی،
            معدوم سازی زباله های تر و تولید خاک برگ از آن‌ها در وزن های مختلف،
            تولید انواع سنسور های الکترونیکی و... فعالیت داشته باشد.
            <br />
            این شرکت در حال حاضر با تولید محصولات دوستدار محیط زیست از جمله
            دستگاه زباله سوز، سیستم های ازون ژنراتور، سیستم های تولید برق، سیستم
            های کاهش مصرف انرژی و... توانسته گام های بلندی در راستای حفظ منابع
            طبیعی و هم چنین تولید انرژی و بازیافت انرژی داشته باشد.
            <br />
            چشم انداز مجموعه ما بومی سازی و تولید دانش فنی در زمینه های مختلف و
            نو ظهور علم است و سعی داریم با نوآوری و ایده پروری تکنولوژی های نوین
            را به منظر تولید انبوه رسانیم و با هدف ارتقاء و بهبود محصولات، ایران
            عزیزمان را به سمت قله های رشد و تعالی صنعتی سوق دهیم.
          </p>
          <BECarousel imagesList={companyIntroductionImageList} />
          <p className="about-us-page__text-introduction">
            مزایای برجسته محصولات تولیدی صنایع بیت الکترونیک نسبت به سایر
            محصولات:
            <br />◄ محصولات قبل از طراحی از لحاظ کیفیت و هم چنین هزینه تولید
            مورد بررسی قرار گرفته می شود تا بتواند با کیفیت بالا و هزینه پایین
            تری نسبت به محصولات موجود در بازار خدمت کاربران ارائه گردد. <br />
            ◄ بردهای الکترونیکی ساخت صنایع بیت الکترونیک شمال راندمان بالایی
            نسبت به محصولات مشابه داشته و مصرف انرژی بسیار پایین تری دارد.
            <br />◄ تمامی محصولات بسیار ساده بوده و تمامی کاربران حتی با داشتن
            اطلاعات اندک در حوزه مربوطه می توانند از سیستم‌ها استفاده کنند.
            <br />
            ◄تمامی محصولات قابلیت ارتقا طبق سفارش کاربران و هم چنین نیاز آن‌ها
            را داشته است.
          </p>
        </div>
        <BEDivider dividerId={"about-us-page-item-1"} />
        <BETextAndImg
          image={""}
          imageAlt={""}
          title={"معرفی اعضای هیئت مدیره"}
          body={
            <>
              <BEManagementInfo
                img={cMalakdar}
                name={"شهربانو ملک‌دار"}
                side={"مدیرعامل"}
                expertise={
                  <span>
                    کارشناس برق الکترونیک
                    <br />
                    کارشناس ارشد نانو تکنولوژی
                  </span>
                }
                faCv={cCvFaMalakdar}
                enCv={cCvEnMalakdar}
              />
              <br />
              <BEManagementInfo
                img={cBozorgi}
                name={"بیت‌الله بزرگی"}
                side={"رئیس هئیت مدیره"}
                expertise={"کارشناس برق الکترونیک"}
                faCv={cCvFaBozorgi}
                enCv={cCvFaBozorgi}
              />
            </>
          }
        />
        <BEDivider dividerId={"about-us-page-item-2"} />
        <BECompanyServices />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUsPage;
