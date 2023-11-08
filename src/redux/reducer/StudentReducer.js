
const stateDefault = {
    arrMonHoc:[],
    arrSinhVienDangKy:[],
}


export const StudentReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_LIST_MONHOC': {
            state.arrMonHoc = action.arrMonHoc;
            return { ...state }
        }
        case 'SINH_VIEN_DANG_KY': {
            state.arrSinhVienDangKy = action.arrSinhVienDangKy;
            return { ...state }
        }
        default: return state;
    }
}