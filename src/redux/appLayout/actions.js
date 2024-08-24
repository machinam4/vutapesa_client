const actions = {
    CHANGE_MENU_TAB_BEGIN: 'CHANGE_MENU_TAB_BEGIN',
    CHANGE_MENU_TAB_SUCCESS: 'CHANGE_MENU_TAB_SUCCESS',
    CHANGE_MENU_TAB_ERR: 'CHANGE_MENU_TAB_ERR',

    OPEN_SIGNIN_MODAL_BEGIN: 'OPEN_SIGNIN_MODAL_BEGIN',
    OPEN_SIGNIN_MODAL_SUCCESS: 'OPEN_SIGNIN_MODAL_SUCCESS',
    OPEN_SIGNIN_MODAL_ERR: 'OPEN_SIGNIN_MODAL_ERR',
  
    changeMenuTabBegin: () => {
      return {
        type: actions.CHANGE_MENU_TAB_BEGIN,
      };
    },
  
    changeMenuTabSuccess: (data) => {
      return {
        type: actions.CHANGE_MENU_TAB_SUCCESS,
        data,
      };
    },
  
    changeMenuTabErr: (err) => {
      return {
        type: actions.CHANGE_MENU_TAB_ERR,
        err,
      };
    },

    //sign in modal methods
    openSigninModalBegin: () => {
      return {
        type: actions.OPEN_SIGNIN_MODAL_BEGIN,
      };
    },
  
    openSigninModalSuccess: (data) => {
      return {
        type: actions.OPEN_SIGNIN_MODAL_SUCCESS,
        data,
      };
    },
  
    openSigninModalErr: (err) => {
      return {
        type: actions.OPEN_SIGNIN_MODAL_ERR,
        err,
      };
    },
  };
  
  export default actions;