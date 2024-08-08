/* eslint-disable jsx-a11y/anchor-is-valid */
import { handleShowPopup } from "../../Components/BEHome/BEHonors/BEHonors";
import {
  HONORS0,
  HONORS1,
  HONORS2,
  HONORS3,
  HONORS4,
  HONORS5,
} from "../../Constanst/constanst.Const";

export const HONORE_IMAGE_LIST = [
  {
    renderItem: () => (
      <div className="be-carousel__item honore-images-list">
        <div
          onClick={() => {
            handleShowPopup({ itemDetail: HONORS0, setShowPopup: true });
          }}
        >
          <img src={HONORS0} alt="مقام برتر جشنواره ملی ایده اختراع کارآفرین" />
        </div>
        <a href="">
          <img
            src={HONORS1}
            alt="نوزدهمین نمایشگاه دستاوردهای پژوهش، فناوری و فن بازار"
          />
        </a>
        <a href="">
          <img src={HONORS2} alt="اولین کنفرانس ملی نانوتکنولوژی" />
        </a>
      </div>
    ),
  },
  {
    renderItem: () => (
      <div className="be-carousel__item honore-images-list">
        <a href="">
          <img src={HONORS3} alt="گواهی ثبت اختراع" />
        </a>
        <a href="">
          <img src={HONORS4} alt="جواز تاسیس" />
        </a>
        <a href="">
          <img src={HONORS5} alt="گواهی TRL" />
        </a>
      </div>
    ),
  },
];
