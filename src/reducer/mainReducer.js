import {
  SIDEBAR_ACTIVE,
  SIDEBAR_CLOSED,
  SET_ACTIVE_PAGE,
} from "../reducer/actions";

const mainReducer = (state, action) => {
    if (action.type === SIDEBAR_ACTIVE){
        return {...state, sidebarActive: true}
    }
    if (action.type === SIDEBAR_CLOSED){
        return {...state, sidebarActive: false}
    }
    if (action.type === SET_ACTIVE_PAGE){
        return {...state, activePage: {...action.payload}}
    }
    throw new Error(`No matching action type: ${action.type}`);
}

export default mainReducer