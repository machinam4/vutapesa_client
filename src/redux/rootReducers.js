import { combineReducers } from "@reduxjs/toolkit";
import appLayoutReducer from "./appLayout/reducers"

const rootReducers = combineReducers({
    appLayout: appLayoutReducer,
})

export default rootReducers;