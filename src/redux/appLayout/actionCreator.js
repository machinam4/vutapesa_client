import actions from './actions';

const {
  changeMenuTabBegin,
  changeMenuTabSuccess,
  changeMenuTabErr,

  //signin modla
  openSigninModalBegin,
  openSigninModalSuccess,
  openSigninModalErr,
} = actions;

const changeMenuTab = (value) => {
  return async (dispatch) => {
    try {
      dispatch(changeMenuTabBegin());
      dispatch(changeMenuTabSuccess(value));
    } catch (err) {
      dispatch(changeMenuTabErr(err));
    }
  };

  
};
//signin modal
  const toggleSigninModal = (value) => {
    return async (dispatch) => {
      try {
        dispatch(openSigninModalBegin());
        dispatch(openSigninModalSuccess(value));
      } catch (err) {
        dispatch(openSigninModalErr(err));
      }
    };
  };

export { changeMenuTab, toggleSigninModal };