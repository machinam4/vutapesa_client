

  import actions from './actions';

const initialState = {
  currentTab: "home",
  loading: false,
  rtlLoading: false,
  menuLoading: false,
  mainContentLoading: false,
  error: null,
};

const {
  CHANGE_MENU_TAB_BEGIN,
  CHANGE_MENU_TAB_SUCCESS,
  CHANGE_MENU_TAB_ERR,

} = actions;

const appLayoutReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CHANGE_MENU_TAB_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_MENU_TAB_SUCCESS:
      return {
        ...state,
        currentTab: data,
        loading: false,
      };
    case CHANGE_MENU_TAB_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default appLayoutReducer;