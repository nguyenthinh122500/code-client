import { http } from "../../api/response";


export const GetListBusinessAction = (id) => {
    return async (dispatch) => {
      try {
        let result = await http.post(`/Authenticate/Login`);
        const userRole = result.data.role;
        if (userRole === 'Admin') {
          const action = {
            type: "REDIRECT_TO_ADMIN_PAGE",
            arrUser: result,
          };
          dispatch(action);
        } else if (userRole === 'Student') {
          const action = {
            type: "REDIRECT_TO_STUDENT_PAGE",
            arrBusiness: result,
          };
          dispatch(action);
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  