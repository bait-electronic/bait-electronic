export const AddTolangStore = (productData) => (dispatch, getState,userLang) => {
  const { langState } = getState();
  const langListData = [...langState.langList];

  langListData.push(productData);
  dispatch({
    type: "change-lang",
    payload: { langList: userLang },
  });
}; 
export const changeLanguage = (lang) => (dispatch) => {
    localStorage.setItem('langLocalStorage', JSON.stringify([{ lang }]));
    dispatch({
      type: 'change-lang',
      payload: lang,
    });
  };