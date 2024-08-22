const actions = {
    CHANGE_MENU_TAB_BEGIN: 'CHANGE_MENU_TAB_BEGIN',
    CHANGE_MENU_TAB_SUCCESS: 'CHANGE_MENU_TAB_SUCCESS',
    CHANGE_MENU_TAB_ERR: 'CHANGE_MENU_TAB_ERR',
  
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
  };
  
  export default actions;