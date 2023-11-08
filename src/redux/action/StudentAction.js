import { http } from "../../api/response";

export const GetListMonHocAction = (id) => {
    return async (dispatch) => {
      try {
        let result = await http.get(`/SinhVien/MonHocDangKy?Masv=${id}`);
        // console.log(result.data)      
          const action = {
            type: "GET_LIST_MONHOC",
            arrMonHoc: result.data,
          };
          dispatch(action);
        
      } catch (error) {
        console.log(error);
      }
    };
  };


  export const GetListSinhVienDangKyAction = (id) => {
    return async (dispatch) => {
      try {
        let result = await http.get(`/SinhVien/SinhVienDangKy?masv=${id}`);
        // console.log(result.data)      
          const action = {
            type: "SINH_VIEN_DANG_KY",
            arrSinhVienDangKy: result.data.data, 
          };
          dispatch(action);
        
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const DangKyMonHocAction = (value) => {
    return async (dispatch) => {
      try {
          let result = await http.post(`/SinhVien/DangKyMonHoc`,value);
          console.log("responseMessage", result.data) 
          for(let item of value){
            const action = GetListSinhVienDangKyAction(item.maSV);
            dispatch(action)
          }
      } catch (error) {
        console.log(error);
      }
    };
      
  };
  export const HuyDangKyMonHocAction = (id,maMH) => {
    return async (dispatch) => {
      try {
        let result = await http.post(`/SinhVien/DeleteSinhVienDangKy?MaMonHoc=${maMH}&masv=${id}`);
        console.log(result.data) 
        const action = GetListSinhVienDangKyAction(id);
       dispatch(action)
      } catch (error) {
        console.log(error);
      }
    };
  };