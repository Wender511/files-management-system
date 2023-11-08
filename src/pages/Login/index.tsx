import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import login, { update } from 'src/Redux/login';

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const onFinish = () => {
    const updateLogin = {
      login: true
    }
    dispatch(update(updateLogin))
  };
  return ( 
    <div className=''>
      <div className='border border-gray-300 p-2 rounded-lg w-1/4 mx-auto mt-12 bg-[#ffffff] h-full'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: '300px' }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!'}]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }} >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
    </div>
);
}
 
export default Login;