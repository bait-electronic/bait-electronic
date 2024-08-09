import { cDetectUserLanguage } from "../../Constanst/constanst.Const";
const initialState = {
    langList: localStorage.getItem('langLocalStorage')
      ? JSON.parse(localStorage.getItem('langLocalStorage'))
      : [{ lang: cDetectUserLanguage() }],
  }; 
export const LangReducer = (state = initialState, action) => {
  switch (action.type) {
    case "change-lang":
      return {
        ...state,
        langList: [{ lang: action.payload }],
      };
    default:
      return state;
  }
};
 