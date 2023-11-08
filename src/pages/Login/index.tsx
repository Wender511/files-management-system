import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { loginSuccess } from 'src/Redux/authSlice';
type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};
const Login: React.FC = () => {
  const dispath = useDispatch();
  const hanldeSubmitForm = async (values: any) => {
    try {
      const res = await axios.post(
        'https://datt-git-main-spideyhihi271.vercel.app/api/auth/signin',
        { ...values },
      );
      console.log(res);
      dispath(loginSuccess(res.data));
    } catch (error) {
      console.log(error);
      console.log('Có lỗi xảy ra');
    }
  };
  const handleFailed = (values: any) => {};
  return (
    <div className="mt-16 bg-url[url('https://example.com/your-image.jpg')]">
      <h1 className='text-xl text-center'>Đăng nhập</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={hanldeSubmitForm}
        onFinishFailed={handleFailed}
        autoComplete="off"
        className="mx-auto p-4 space-y-4 bg-white shadow-md rounded-md"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Must be a valid email" },
          ]}
        >
          <Input className="w-full" placeholder="Email" />
        </Form.Item>
    
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
          ]}
        >
          <Input.Password className="w-full" placeholder="Password" />
        </Form.Item>
    
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
