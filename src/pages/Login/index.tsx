import { useState } from "react";
import { Form, Input, Button } from 'antd';

const Login:React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values:', values);
      };
    
      return (
        <div className="border border-red-500 border-dashed rounded-lg p-4">
          <div style={{ maxWidth: '300px', margin: '0 auto' }}>
            <h2>Đăng nhập</h2>
            <Form
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="username"
                label="Tên đăng nhập"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên đăng nhập!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
      
              <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
      
              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    };
 
export default Login;