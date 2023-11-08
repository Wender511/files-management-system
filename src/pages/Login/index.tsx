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
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={hanldeSubmitForm}
      onFinishFailed={handleFailed}
      autoComplete='off'
    >
      <Form.Item<FieldType>
        label='email'
        name='email'
        rules={[
          { required: true, message: 'Please input your username!' },
          { type: 'email', message: 'Must be email' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
