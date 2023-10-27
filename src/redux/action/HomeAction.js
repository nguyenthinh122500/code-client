import { http } from "../../utils/response";


export const GetListBusinessAction = (id) => {
    return async (dispatch) => {
      try {
        let result = await http.get(`/bussiness/getlistbussiness`);
        const action = {
          type: "GET_LIST_HOME",
          arrBusiness: result.data.data,
        };
        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
  };