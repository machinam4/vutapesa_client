import actions from './actions';

const {
  changeMenuTabBegin,
  changeMenuTabSuccess,
  changeMenuTabErr,
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


export { changeMenuTab };