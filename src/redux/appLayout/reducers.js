

  import actions from './actions';

const initialState = {
  currentTab: "home",
  loading: false,
  signinOpen: true,
  error: null,
};

const {
  CHANGE_MENU_TAB_BEGIN,
  CHANGE_MENU_TAB_SUCCESS,
  CHANGE_MENU_TAB_ERR,

  OPEN_SIGNIN_MODAL_BEGIN,
  OPEN_SIGNIN_MODAL_SUCCESS,
  OPEN_SIGNIN_MODAL_ERR,

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
      case OPEN_SIGNIN_MODAL_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case OPEN_SIGNIN_MODAL_SUCCESS:
      return {
        ...state,
        signinOpen: data,
        loading: false,
      };
    case OPEN_SIGNIN_MODAL_ERR:
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