import {SIDEBAR_ACTIVE,SIDEBAR_CLOSED} from "../reducer/actions"

const mainReducer = (state, action) => {
    if (action.type === SIDEBAR_ACTIVE){
        return {...state, sidebarActive: true}
    }
    if (action.type === SIDEBAR_CLOSED){
        return {...state, sidebarActive: false}
    }
    throw new Error(`No matching action type: ${action.type}`)
}

export default mainReducer