import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '@/api/service/user';
import { UserProfileState, useUserProfileStore } from '@/stores';
import { LoginFieldType } from '@/types/user';

const LoginForm = () => {
  const { setUserName } = useUserProfileStore<UserProfileState>(
    (state) => state
  );
  const navigate = useNavigate();

  const toRegister = () => {
    navigate('/register');
  };

  const onFinish = async (values: LoginFieldType) => {
    try {
      const result = await login(values);
      localStorage.setItem('token', (result as any).token);
      message.success('登录成功，稍后跳转主页');
      setUserName('wuxuwei');
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    } catch (error) {
      console.error(error);
      message.error('登录失败，请稍后重试');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <div className="p-4 w-full flex">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item<LoginFieldType>
          label="Username"
          name="credential"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>

        <Form.Item<LoginFieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item<LoginFieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" onClick={toRegister}>
            to register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginForm;
