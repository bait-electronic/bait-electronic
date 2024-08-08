/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import BEProductItem from "../BEProductItem/BEProductItem";
import {
  cElectronicProtector0,
  cElectronicProtector1,
  cElectronicProtector2,
  cElectronicProtector3,
  ELECTRONICBALLASTS0,
  ELECTRONICBALLASTS1,
  ELECTRONICBALLASTS2,
  TYPEOFSENSOR0,
  TYPEOFSENSOR1,
  TYPEOFSENSOR2,
  TYPEOFSENSOR3,
  OZONEGENERATION0,
  OZONEGENERATION1,
  OZONEGENERATION2,
  OZONEGENERATION3,
  OZONEGENERATION4,
  OZONEGENERATION5,
  OZONEGENERATION6,
  OZONEGENERATION7,
  OZONEGENERATION8,
  OZONEGENERATION9,
  OZONEGENERATION10,
  OZONEGENERATION11,
  OZONEGENERATION12,
} from "../../../Constanst/constanst.Const";
import BEDivider from "../../Global/BEDivider/BEDivider";
import BEPopup from "../../Global/BEPopup/BEPopup";
import "./BEProduct.scss";

function BEProduct() {
  const [showPopup, setShowPopup] = useState(false);
  const [itemDetail, setItemDetail] = useState([]);
  function handleShowPopup(child) {
    setItemDetail(child);
    setShowPopup(true);
  }
  return (
    <div>
      {showPopup && (
        <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
      )}
      <BEProductItem
        title="اوزون ژنراتور"
        desc="اوزون ژنراتور دستگاهی است که با استفاده از هوای عادی و یا گاز اکسیژن، گاز اوزون تولید می کند، که با توجه به ویژگی منحصر به فرد این گاز که باعث اکسایش سریع می گردد نتایجی  از جمله ضدعفونی کنندگی، از بین بردن باکتری و آلاینده های میکروبی، حذف یون های آهن و مس، کاهش موثر BOD و COD، جلوگیری از رشد جلبک و کپک، عدم تولید  محصولات جانبی مضر و... را در پی داشته که به واسطه ی این ویژگی از این گاز در کاربردهای مختلفی استفاده می شود."
        benefit={[
          "مجهز به فن های خنک کننده درونی",
          "دارای فیلتر جهت حذف گرد و غبار در ورودی هوا",
          "دارای سیستم حفاظت از ایجاد اتصال کوتاه و سیستم نشانگر ولتاژ و جریان مصرف",
          "دارای سیستم منبع تغذیه مقاوم در برابر نوسانات برق",
          "دارای پوشش مقاوم در برابر خوردگی بر روی مدارهای الکترونیکی و توانایی کار در محدوده دمایی 10- الی 50 درجه سانتی گراد و طوبت 80%.",
          "دارای فیوزهای سریع قطع جریان برق",
          "دارای چراغ سیگنال های ال ای دی نشانگر تولید ازون",
          "دارای پنل برنامه ریزی روزانه، هفتگی و ماهانه",
        ]}
        tableData={[
          {
            // row: 1,
            "Model number": "RM-35-50-11",
            "Ozone generation": "50 (g/h)",
            "Power consumption": "90(W)",
            Reactor: "RD6L20",
            Driver: "B4W40",
          },
          {
            row: 2,
            "Model number": "RM-35-50-21",
            "Ozone generation": "50 (g/h)",
            "Power consumption": "90(W)",
            Reactor: "RD6L20",
            Driver: "B4W40",
          },
          {
            row: 3,
            "Model number": "RM-70-50-21",
            "Ozone generation": "50 (g/h)",
            "Power consumption": "150(W)",
            Reactor: "RD6L10",
            Driver: "B4W40",
          },
          {
            row: 4,
            "Model number": "RMO-50-21",
            "Ozone generation": "50 (g/h)",
            "Power consumption": "700(W)",
            Reactor: "RD6L10",
            Driver: "B4W40",
          },
          {
            row: 5,
            "Model number": "RM-70-100-21",
            "Ozone generation": "100 (g/h)",
            "Power consumption": "120(W)",
            Reactor: "RD6L15",
            Driver: "DBW8",
          },
          {
            row: 6,
            "Model number": "RM-70-100-22",
            "Ozone generation": "100 (g/h)",
            "Power consumption": "120(W)",
            Reactor: "RD6L15",
            Driver: "DBW8",
          },
          {
            row: 7,
            "Model number": "RM-110-100-21",
            "Ozone generation": "100 (g/h)",
            "Power consumption": "250(W)",
            Reactor: "RD9L10",
            Driver: "DBW8",
          },
          {
            row: 8,
            "Model number": "RMO-100-22",
            "Ozone generation": "100 (g/h)",
            "Power consumption": "800(W)",
            Reactor: "RD9L10",
            Driver: "DBW8",
          },
          {
            row: 9,
            "Model number": "RM-110-200-42",
            "Ozone generation": "200 (g/h)",
            "Power consumption": "300(W)",
            Reactor: "RD9L10",
            Driver: "DBW10",
          },
          {
            row: 10,
            "Model number": "RMO-200-42",
            "Ozone generation": "200 (g/h)",
            "Power consumption": "900(W)",
            Reactor: "RD9L10",
            Driver: "DBW10",
          },
          {
            row: 11,
            "Model number": "RMO-300-42",
            "Ozone generation": "300 (g/h)",
            "Power consumption": "1(KW)",
            Reactor: "RD6L15",
            Driver: "DBW15",
          },
          {
            row: 12,
            "Model number": "RMO-400-42",
            "Ozone generation": "400 (g/h)",
            "Power consumption": "1.2(KW)",
            Reactor: "RD9L15",
            Driver: "DBW8-10",
          },
          {
            row: 13,
            "Model number": "RMO-500-42",
            "Ozone generation": "500 (g/h)",
            "Power consumption": "1.5(KW)",
            Reactor: "RD9L20",
            Driver: "DBW8-15",
          },
        ]}
        imagesList={[
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION0} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION0}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION1} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION1}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION2} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION2}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION3} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION3}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION4} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION4}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION5} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION5}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION6} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION6}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION7} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION7}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION8} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION8}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION9} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION9}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION10} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION10}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION11} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION11}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={OZONEGENERATION12} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={OZONEGENERATION12}
                alt=" "
              />
            ),
          },
        ]}
        usage={[
          "تصفیه آب و پساب های صنعتی و نیمه صنعتی",
          "کشتارگاه‌ها",
          "پرورش آبزیان",
          "دامداری",
          "کشاورزی",
          "صنایع غذایی و بسته بندی",
          "سردخانه و نگه‌داری مواد غذایی",
          "صنعت کاغذ و مقوا",
          "صنعت نساجی",
          "پزشکی و آرایشی بهداشتی",
          "ضدعفونی  و آنتی باکتریال نمودن",
        ]}
      />
      <BEDivider dividerId="introduction-of-product-page-item-1" />
      <BEProductItem
        title="انواع سنسور"
        desc={
          <span>
            امروزه هوشمند سازی و مانیتورینگ از راه دور نقش به سزایی در افزایش
            سطح ایمنی و هم چنین نظارت بر عملکرد تجهیزات داشته است. از این رو
            مجموعه ما با طراحی سنسورهای مختلف توانسته نیاز کاربران را تامین
            نماید.انواع سنسورهای دیجیتالی موجود در بازار به دلیل ضعف در طراحی و
            یا تاثیرپذیریی به واسطه نویز موجود در شبکه و حتی محیط اطراف به درستی
            و با سرعت مطمئنه عمل نکرده و از این رو در بیشتر مواقع مخاطراتی را در
            پی دارد.
            <br />
            واحد تحقیق و توسعه صنایع بیت الکترونیک با توجه به نیاز و حساسیت های
            موجود انواع مختلفی از سنسورهای کلیدی را جهت هوشمند سازی و مانیتورینگ
            خودکار استخرها و مجموعه های صنعتی و حتی مدل های خانگی طراحی کرده و
            ارائه نموده است. این سنسورها به صورت مجزا و یا به صورت ترکیبی طراحی
            شده است و قابلیت تشخیص متغییرهایی از جمله برق دار شدن آب استخر و یا
            تجهیزات متصل، صحت عملکرد موتور، ارتفاع سطح آب (کاهش و یا افزایش)،
            جریان آب در موتور و هم چنین قطع برق مجموعه را به صورت هم زمان و بدون
            تداخل داشته و به دلیل استفاده از تکنیک خاص و منحصر بفرد در بخش های
            طراحی وتولید از طول عمر و کیفیت بالایی برخوردار است. این سامانه
            هوشمند برای انواع تجهیزات سه فاز و تک فاز قابل استفاده بوده و دارای
            سرعت پاسخ بسیار بالایی در زمان مواجه با هر یک از تعییر پارامترها می
            باشد. از دیگر مزایای این سنسورها قابلیت نصب آسان تحت هر نوع شرایط
            محیطی می باشد. وروردی های مجزای به کاربر این امکان را می دهد تا
            بتواند هر نوع سیستمی را به آن متصل کرده و شرایط سلامت و عملکرد مناسب
            تجهیزات خود را کنترل نماید.
          </span>
        }
        benefit={[]}
        tableData={[
          {
            row: 1,
            "Model number": "SE1-3",
            "n.sensor": 1,
            "Power consumption": "50 (W)",
            description: "تشخیص برقدارشدن",
          },
          {
            row: 2,
            "Model number": "SM1-3",
            "n.sensor": 1,
            "Power consumption": "50 (W)",
            description: "تشخیص صحت عملکردموتور",
          },
          {
            row: 3,
            "Model number": "SH1-3",
            "n.sensor": 1,
            "Power consumption": "50 (W)",
            description: "تشخیص ارتفاع",
          },
          {
            row: 4,
            "Model number": "SF1-3",
            "n.sensor": 1,
            "Power consumption": "50 (W)",
            description: "تشخیص جریان آب",
          },
        ]}
        imagesList={[
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={TYPEOFSENSOR0} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={TYPEOFSENSOR0}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={TYPEOFSENSOR1} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={TYPEOFSENSOR1}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={TYPEOFSENSOR2} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={TYPEOFSENSOR2}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={TYPEOFSENSOR3} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={TYPEOFSENSOR3}
                alt=" "
              />
            ),
          },
        ]}
        usage={[]}
      />
      <BEDivider dividerId="introduction-of-product-page-item-2" />
      <BEProductItem
        title="بالاست‌های الکترونیکی"
        desc="یکی دیگر از محصولات مجموبه بیت الکترونیک بالاست های الکترونیکی این مجموعه بوده است؛ که در توان های مختلف با خروجی های متعدد طراحی و تولید شده است و به کاربر اجازه می دهد تا از یک مجموعه بالاست راه انداز، برای چندین لامپ FPL، FML، لامپ های مهتابی و حتی لامپ UV استفاده کند."
        benefit={[
          "قابلیت نصب آسان با بکارگیری سرپیچهای E27",
          "قابلیت تعویض و تعمیر و نگهداری مدار الکترونیکی (بالاست) بخاطر استفاده از بردهای کشویی کاملا قابل تعمیر یا تعویض بودن لامپ",
          "افزایش بهره و راندمان نور لامپ",
          "راه اندازی چند لامپ با استفاده از یک بالاست",
          "در صورت خرابی تعویض جداگانه هر لامپ توسط مصرف کننده امکان پذیر است",
        ]}
        tableData={[
          {
            row: 1,
            "Model.N": "BT20",
            "Power consumption": "20(W)",
            "Fluor.N": 1,
          },
          {
            row: 2,
            "Model.N": "BT20W2",
            "Power consumption": "20(W)",
            "Fluor.N": 2,
          },
          {
            row: 3,
            "Model.N": "BT40",
            "Power consumption": "40(W)",
            "Fluor.N": 1,
          },
          {
            row: 4,
            "Model.N": "BT40W2",
            "Power consumption": "40(W)",
            "Fluor.N": 2,
          },
          {
            row: 5,
            "Model.N": "BT60",
            "Power consumption": "60(W)",
            "Fluor.N": 1,
          },
        ]}
        imagesList={[
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={ELECTRONICBALLASTS0} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={ELECTRONICBALLASTS0}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={ELECTRONICBALLASTS1} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={ELECTRONICBALLASTS1}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={ELECTRONICBALLASTS2} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={ELECTRONICBALLASTS2}
                alt=" "
              />
            ),
          },
        ]}
        usage={[]}
      />
      <BEDivider dividerId="introduction-of-product-page-item-3" />
      <BEProductItem
        title={"محافظ الکترونیکی"}
        desc={
          <span>
            محافظ های برق یکی از پر مصرف‌ترین سیستم‌های ایمنی تجهیزات است که در
            هر خانه و یا اماکن عمومی صنعتی و نیمه صنعتی قابل بهره برداری بوده و
            با نوسانات شبکه برق یکی از اساسی ترین اقلام دستگاه های برقی می باشد.
            قطع به موقع مدار الکترونیکی برق رسانی به تجهیزات به موقع بروز
            نوسانات در شبکه برق از مهم ترین پارامترهای یک محافظ الکترونیکی است.
            در کنار عکس العمل به هنگام طول عمر و کیفیت قطعات مدار محافظ از اهمیت
            بالایی برخوردار است.
            <br />
            محافظ الکترونیکی از سال 1390 با برند ترز در مجموعه بیت الکترونیک
            تولید و به بازار عرضه شده و تا به امروز یکی از خطوط تولید این مجموعه
            را به خود اختصاص داده است.
          </span>
        }
        benefit={[]}
        tableData={[{}]}
        imagesList={[
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={cElectronicProtector0} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={cElectronicProtector0}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={cElectronicProtector1} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={cElectronicProtector1}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={cElectronicProtector2} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={cElectronicProtector2}
                alt=" "
              />
            ),
          },
          {
            renderItem: () => (
              <img
                onClick={() => {
                  handleShowPopup(() => {
                    return (
                      <div className="be-product__popup">
                        <img src={cElectronicProtector3} alt=" " />
                      </div>
                    );
                  });
                  return (
                    <BEPopup
                      itemDetail={itemDetail}
                      setShowPopup={setShowPopup}
                    />
                  );
                }}
                src={cElectronicProtector3}
                alt=" "
              />
            ),
          },
        ]}
        usage={[]}
      />
    </div>
  );
}

export default BEProduct;
{
  /*
    <BEProductItem
        id={"introduction-of-product-page-item-"}
        title=""
        desc=""
        benefit={[]}
        tableData={[{ id: 1,},]}
        imagesList={[]}
        usage={[]}
    />
*/
}
