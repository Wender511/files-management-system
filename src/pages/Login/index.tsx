import {
  Form,
  Input,
  Button,
  Checkbox,
  Layout,
  Typography,
  message,
} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Content, Footer } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { loginSuccess } from 'src/Redux/authSlice';
import authApi from 'src/api/authApi';

const Login: React.FC = () => {
    const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispath = useDispatch();
  // const hanldeSubmitForm = async (values: any) => {
  //   try {
  //     const res = await authApi.login(values);
  //     console.log(res);
  //     dispath(loginSuccess(res.data));
  //     localStorage.setItem('access_token', res.data.data.token);
  //   } catch (error) {
  //     console.log(error);
  //     console.log('Có lỗi xảy ra');
  //   }
  // };
  const handleSubmitForm = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      const res = await authApi.login(values);
      console.log(res);
      if (res?.data) {
        localStorage.setItem('access_token', res.data.data.token);
        message.success('Đăng nhập thành công');
        dispath(loginSuccess(res.data));
      }
    } catch (error) {
      console.log('error:', error);
      message.error(
        'Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.',
      );
    }
  };
  return (
    <Layout className='flex min-h-screen flex-col'>
      <div className='mx-auto flex w-full max-w-large py-3'>
        {/* <Logo /> */}
        <div></div>
      </div>
      <Content className='m-auto mt-10 flex w-[350px] flex-col gap-2 rounded-sm pb-5'>
        <div className='block text-center'>
          <Typography.Title level={1}>Đăng nhập</Typography.Title>
        </div>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{ remember: true }}
          form={form}
        >
          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Email'
              size='large'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Mật khẩu'
              size='large'
            />
          </Form.Item>
          <div className='mb-3 flex justify-between'>
            {/* <Form.Item name='remember'> */}
            <Form.Item>
              <Checkbox className='text-sm'>Ghi nhớ</Checkbox>
            </Form.Item>
            <Link to='/forgot-password'>
              <Typography.Text className='text-sm'>
                Quên mật khẩu?
              </Typography.Text>
            </Link>
          </div>
        </Form>
        <Button
          type='primary'
          htmlType='submit'
          className='login-form-button mb-1 w-full'
          size='large'
          onClick={handleSubmitForm}
        >
          Đăng nhập
        </Button>
      </Content>
    </Layout>
  );
};

export default Login;
