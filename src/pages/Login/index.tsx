import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { loginSuccess } from 'src/Redux/authSlice';
import authApi from 'src/api/authApi';
type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};
const Login: React.FC = () => {
  const dispath = useDispatch();
  const hanldeSubmitForm = async (values: any) => {
    try {
      const res = await authApi.login(values);
      dispath(loginSuccess(res.data));
      localStorage.setItem('access_token', res.data.data.token);
    } catch (error) {
      console.log(error);
      console.log('Có lỗi xảy ra');
    }
  };
  const handleFailed = (values: any) => {};
  return (
    <div className="bg-url[url('https://example.com/your-image.jpg')] mt-16">
      <h1 className='text-center text-xl'>Đăng nhập</h1>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={hanldeSubmitForm}
        onFinishFailed={handleFailed}
        autoComplete='off'
        className='mx-auto space-y-4 rounded-md bg-white p-4 shadow-md'
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Must be a valid email' },
          ]}
        >
          <Input className='w-full' placeholder='Email' />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className='w-full' placeholder='Password' />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' className='w-full'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
