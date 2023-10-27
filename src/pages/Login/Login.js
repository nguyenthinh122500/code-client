import React, {  useEffect } from "react";
import { Button, Form, Input, notification  } from 'antd';

import axios from "axios";
import { history } from "../../App";
const Login = (props) => {
 
  useEffect(()=> {
    axios.post('https://localhost:8000/user').then(res => {
      if(res.data.valid){
        history.push("/")
      }else{
        history.push("/login")
      }
    }).catch(err => console.log(err))
  })


  const onFinish = (values) => {
    const {username, password} = values
    if(username === 'hieu123' && password === '123456'){
      notification.success({ 
        message: 'Đăng nhập thành công', 
      }); 
      props.history.push("/admin")

    }
    
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
  )
}

export default Login