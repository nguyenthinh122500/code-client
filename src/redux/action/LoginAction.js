import { http } from "../../api/response";


export const LoginAction = (data, props) => {
    return async (dispatch) => {
      try {
        let result = await http.post(`/Authenticate/Login`,data);
       if(result.data.role ==="Student"){
           
            localStorage.setItem('maSV',result.data.id)
            console.log(result.data.id)
            props.history.push('/student')
       }
       else if(result.data.role ==="Admin"){
           props.history.push('/admin')
       }
      } catch (error) {
        console.log(error);
      }
    };
  };

  