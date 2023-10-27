
const stateDefault = {
    arrUser:[],
}


export const HomeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'REDIRECT_TO_ADMIN_PAGE': {
            state.arrUser = action.arrUser;
            return { ...state }
        }
        case 'REDIRECT_TO_STUDENT_PAGE': {
            state.arrUser = action.arrUser;
            return { ...state }
        }
        default: return state;
    }
}