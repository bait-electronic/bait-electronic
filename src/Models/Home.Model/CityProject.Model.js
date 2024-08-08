import {
  GOLS0E0,
  GOLS0E1,
  GOLS0VIDEO,
  MAZANDS0E0,
  MAZANDS0E1,
  MAZANDS1VIDEO,
  MAZANDS1E1,
  MAZANDS2E0,
  MAZANDS2E1,
  MAZANDS2E2,
  MAZANDS2E3,
  MAZANDS1E2,
  MAZANDS1E3,
  MAZANDS3E1,
  MAZANDS3E2,
  MAZANDS3E3,
  MAZANDS3VIDEO,
  MAZANDS0VIDEO,
  MAZANDS1E0,
  GILS0E0,
  GILS0E1,
  GILS0E2,
  GILS0E3,
  GILS0E4,
  GILS0E5,
  ZANJANS0VIDEO,
  ZANJANS0E0,
  ZANJANS0E1,
  ZANJANS0E2,
  ZANJANS0E3,
  ZANJANS0E4,
  ZANJANS0E5,
  ZANJANS1E0,
  ZANJANS1E1,
  ZANJANS1VIDEO,
  ZANJANS2VIDEO,
  ZANJANS2E0,
  ZANJANS2E1,
  ZANJANS2E2,
} from "../../Constanst/constanst.Const";

// PROJECT_LIST[0]
// [0] گلستان
// [1] مازندران
// [2] گیلان
// [3] کرمان
// [4] زنجان
// PROJECT_LIST = [
// [ // به تعداد استان ها هم باید از اینا باشه
//     { // به تعداد مکان هایی که کار شده باید از اینا بزاریم
//     iconNumber: 0,
//     titre:'' //توضیحات مکان
//         ,
//     videoLink:  , || undefined // لینک ویدیو
//     carouselImage: [
//         { original: }, //عکس اولعکس اول
//         { original:  }, //عکس هزارم
//     ],
//     },
// ],
// ];

export const PROJECT_LIST = [
  [
    //گلستان
    {
      iconNumber: 1,
      titre:
        "تصویه آب آبشخورها و استخر انباشت آب دامداری 2000 راٌس در منطقه آق‌قلا",
      videoLink: GOLS0VIDEO,
      carouselImage: [{ original: GOLS0E0 }, { original: GOLS0E1 }],
    },
  ],
  [
    //مازندران
    {
      iconNumber: 0,
      titre:
        "تصویه آب برگشت استخرهای پرورش ماهی اوزون برون (خاویار) در منطقه محمدآباد-جاده هراز با حجم آب برگشت 300لیتر بر ثانیه",
      videoLink: MAZANDS0VIDEO,
      carouselImage: [{ original: MAZANDS0E0 }, { original: MAZANDS0E1 }],
    },
    {
      iconNumber: 0,
      titre:
        "تصفیه آب  پرورشگاه ماهی قزل‌آلا و اوزون برون (خاویار) به صورت یکجا در منطقه جاده محموآباد به آمل با حجم آب 300 لیتر بر ثانیه",
      videoLink: MAZANDS1VIDEO,
      carouselImage: [
        { original: MAZANDS1E0 },
        { original: MAZANDS1E1 },
        { original: MAZANDS1E2 },
        { original: MAZANDS1E3 },
      ],
    },
    {
      iconNumber: 0,
      titre:
        "تصفیه آب چاه 10 لیتر بر ثانیه جهت تامین آب سایت های تکثیر و بچه ماهی قزل‌آلا در منطقه گزنک",
      videoLink: undefined,
      carouselImage: [
        { original: MAZANDS2E0 },
        { original: MAZANDS2E1 },
        { original: MAZANDS2E2 },
        { original: MAZANDS2E3 },
      ],
    },
    {
      iconNumber: 0,
      titre:
        "تصفیه آب اسخرهای پرورش ماهی قزل‌آلا در بخش بندپی شرقی شهرستان بابل- جاده حبیبی به صورت تزریق مستقیم گاز اوزون درون استخرها با دُز مشخص",
      videoLink: MAZANDS3VIDEO,
      carouselImage: [
        { original: MAZANDS3E1 },
        { original: MAZANDS3E2 },
        { original: MAZANDS3E3 },
      ],
    },
  ],
  [
    //گیلان
    {
      iconNumber: 0,
      titre:
        "تصفیه آب برگشت و آب چاه ورودی با حجم های به ترتیب 30 و 5 لیتر بر ثانیه جهت پرورش ماهی اوزون برون (خاویار)",
      videoLink: undefined,
      carouselImage: [
        { original: GILS0E0 },
        { original: GILS0E1 },
        { original: GILS0E2 },
        { original: GILS0E3 },
        { original: GILS0E4 },
        { original: GILS0E5 },
      ],
    },
  ],
  [
    //کرمان
    // {
    //   titre: "کرمان",
    //   videoLink:  undefined ,
    //   carouselImage: [
    //     { original: LOGO },
    //     { original: NOTFOUND },
    //     { original: LOGO },
    //   ],
    // },
  ],
  [
    //زنجان
    {
      iconNumber: 0,
      titre:
        "تصفیه آب برگشت استخرهای پرورش ماهی قزل‌آلا در منطقه ماه نشان با حجم 150 لیتر بر ثانیه",
      videoLink: ZANJANS0VIDEO,
      carouselImage: [
        { original: ZANJANS0E0 },
        { original: ZANJANS0E1 },
        { original: ZANJANS0E2 },
        { original: ZANJANS0E3 },
        { original: ZANJANS0E4 },
        { original: ZANJANS0E5 },
      ],
    },
    {
      iconNumber: 0,
      titre:
        "تصفیه آب برگشت استخرهای پرورش ماهی قزل‌آلا در منطقه ماه نشان با حجم 30 لیتر بر ثانیه",
      videoLink: ZANJANS1VIDEO,
      carouselImage: [{ original: ZANJANS1E0 }, { original: ZANJANS1E1 }],
    },
    {
      iconNumber: 0,
      titre:
        "تصفیه آب برگشت استخرهای پرورش ماهی قزل‌آلا در منطقه ماه نشان با حجم 10 لیتر بر ثانیه",
      videoLink: ZANJANS2VIDEO,
      carouselImage: [
        { original: ZANJANS2E0 },
        { original: ZANJANS2E1 },
        { original: ZANJANS2E2 },
      ],
    },
  ],
];
