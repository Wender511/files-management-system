import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};
const Login: React.FC = () => {
  const hanldeSubmitForm = async (values: any) => {
    console.log(values);

    const test = await axios.post(
      'https://datt-git-main-spideyhihi271.vercel.app/api/auth/signin',
      { ...values },
    );
    console.log(test);
  };
  const hadleFailed = (values: any) => {};
  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={hanldeSubmitForm}
      onFinishFailed={hadleFailed}
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
