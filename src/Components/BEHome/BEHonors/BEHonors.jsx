import { useState } from "react";
import {
  HONORS0,
  HONORS1,
  HONORS2,
  HONORS3,
  HONORS4,
  HONORS5,
  HONORS6,
  HONORS7,
  HONORS8,
  HONORS9,
  HONORS10,
  HONORS11,
  HONORS12,
  HONORS13,
  HONORS14,
} from "../../../Constanst/constanst.Const";
import BECarousel from "../../Global/BECarousel/BECarousel";
import BEPopup from "../../Global/BEPopup/BEPopup";
import "./BEHonors.scss";

function BEHonors() {
  const honoreImagesList2Items = [
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return (
                  <img
                    src={HONORS0}
                    alt="مقام برتر جشنواره ملی ایده اختراع کارآفرین"
                  />
                );
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS0}
            alt="مقام برتر جشنواره ملی ایده اختراع کارآفرین"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return (
                  <img
                    src={HONORS1}
                    alt="نوزدهمین نمایشگاه دستاوردهای پژوهش، فناوری و فن بازار"
                  />
                );
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS1}
            alt="نوزدهمین نمایشگاه دستاوردهای پژوهش، فناوری و فن بازار"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return (
                  <img
                    className="be-honors__rotate-img" ////////for route
                    src={HONORS2}
                    alt="اولین کنفرانس ملی نانوتکنولوژی"
                  />
                );
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS2}
            alt="اولین کنفرانس ملی نانوتکنولوژی"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS3} alt="گواهی ثبت اختراع" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS3}
            alt="گواهی ثبت اختراع"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS4} alt="جواز تاسیس" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS4}
            alt="جواز تاسیس"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS5} alt="گواهی TRL" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS5}
            alt="گواهی TRL"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS6} alt="گواهی ثبت اختراع" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS6}
            alt="گواهی ثبت اختراع"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS7} alt="جواز تاسیس" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS7}
            alt="جواز تاسیس"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS8} alt="گواهی TRL" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS8}
            alt="گواهی TRL"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS9} alt="گواهی ثبت اختراع" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS9}
            alt="گواهی ثبت اختراع"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS10} alt="جواز تاسیس" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS10}
            alt="جواز تاسیس"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS11} alt="گواهی TRL" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS11}
            alt="گواهی TRL"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS12} alt="گواهی ثبت اختراع" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS12}
            alt="گواهی ثبت اختراع"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS13} alt="جواز تاسیس" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS13}
            alt="جواز تاسیس"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS14} alt="گواهی TRL" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS14}
            alt="گواهی TRL"
          />
        </div>
      ),
    },
  ];
  const honoreImagesList3Items = [
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return (
                  <img
                    src={HONORS0}
                    alt="مقام برتر جشنواره ملی ایده اختراع کارآفرین"
                  />
                );
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS0}
            alt="مقام برتر جشنواره ملی ایده اختراع کارآفرین"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return (
                  <img
                    src={HONORS1}
                    alt="نوزدهمین نمایشگاه دستاوردهای پژوهش، فناوری و فن بازار"
                  />
                );
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS1}
            alt="نوزدهمین نمایشگاه دستاوردهای پژوهش، فناوری و فن بازار"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return (
                  <img
                    className="be-honors__rotate-img" ////////for route
                    src={HONORS2}
                    alt="اولین کنفرانس ملی نانوتکنولوژی"
                  />
                );
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS2}
            alt="اولین کنفرانس ملی نانوتکنولوژی"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS3} alt="گواهی ثبت اختراع" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS3}
            alt="گواهی ثبت اختراع"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS4} alt="جواز تاسیس" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS4}
            alt="جواز تاسیس"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS5} alt="گواهی TRL" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS5}
            alt="گواهی TRL"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS6} alt="گواهی ثبت اختراع" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS6}
            alt="گواهی ثبت اختراع"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS7} alt="جواز تاسیس" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS7}
            alt="جواز تاسیس"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS8} alt="گواهی TRL" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS8}
            alt="گواهی TRL"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS9} alt="گواهی ثبت اختراع" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS9}
            alt="گواهی ثبت اختراع"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS10} alt="جواز تاسیس" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS10}
            alt="جواز تاسیس"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS11} alt="گواهی TRL" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS11}
            alt="گواهی TRL"
          />
        </div>
      ),
    },
    {
      renderItem: () => (
        <div className="be-honors__item honore-images-list">
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS12} alt="گواهی ثبت اختراع" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS12}
            alt="گواهی ثبت اختراع"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS13} alt="جواز تاسیس" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS13}
            alt="جواز تاسیس"
          />
          <img
            onClick={() => {
              handleShowPopup(() => {
                return <img src={HONORS14} alt="گواهی TRL" />;
              });
              return (
                <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
              );
            }}
            src={HONORS14}
            alt="گواهی TRL"
          />
        </div>
      ),
    },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [itemDetail, setItemDetail] = useState([]);
  function handleShowPopup(child) {
    setItemDetail(child);
    setShowPopup(true);
  }
  return (
    <div className="be-honors">
      {showPopup && (
        <BEPopup itemDetail={itemDetail} setShowPopup={setShowPopup} />
      )}
      <h3>افتخارات</h3>
      <BECarousel
        classname="be-honors__3-item"
        imagesList={honoreImagesList3Items}
      />
      <BECarousel
        classname="be-honors__2-item"
        imagesList={honoreImagesList2Items}
      />
    </div>
  );
}

export default BEHonors;
