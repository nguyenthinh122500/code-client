


const stateDefault = {
    arrBusiness:[],
}


export const HomeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_LIST_HOME': {
            state.arrBusiness = action.arrBusiness;
            return { ...state }
        }
        default: return state;
    }
}