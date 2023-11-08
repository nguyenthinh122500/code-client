import React, {  useState } from "react";
import { Button, Form, Input, notification  } from 'antd';

import { LoginAction } from "../../redux/action/LoginAction";
import { useDispatch } from "react-redux";
import { Checkbox } from 'antd';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Login = (props) => {
 const dispatch= useDispatch()


  const [checkbox,stCheckbox] = useState(true)
  const onChange = (e) => {
    stCheckbox(checkbox =>!checkbox)
  };

  const onFinish = (values) => {
    const {username, password} = values;
    const data ={
      username: username,
      password:password,
      isStudent:checkbox
    }
    console.log(data)
    const action = LoginAction(data, props);
    dispatch(action)
    
  };
  const onFinishFailed = (errorInfo) => {
    const {username, password} = errorInfo
    if(username !== 'admin' && password !== '123456'){
      notification.error({ 
        message: 'Đăng nhập thất bại', 
        description: 
          'Sai tài khoản hoặc mật khẩu', 
      }); 
    }
  };
  return (
    <>
    <Header/>
      <div className="login-body">
        <div className="container d-flex flex-column justify-content-center gap-12">
          <div className="title-login">
            Đăng nhập
          </div>
          <Form name="basic" 
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            <Form.Item>
            <Checkbox onChange={()=>{onChange()}}>Bạn là giáo viên</Checkbox>
            </Form.Item>
              <Form.Item
              >
                <Button type="primary" htmlType="submit" className="w-100">
                  Submit
                </Button>
              </Form.Item>
          </Form>
              
          <div className="warning d-flex flex-column justify-content-start gap-8">
              <div className="fst-italic">
                Chú ý:
              </div>
              <div className="fst-italic">
                Sinh viên sử dụng tài khoản trên cổng thông tin đào tạo Đại học hệ chính quy để đăng nhập vào hệ thống
              </div>
              <div className="fst-italic">
                Nếu gặp khó khăn khi đăng nhập sinh viên liên hệ email: phongdaotao@nuce.edu.vn Hotline: 096258435
              </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Login