import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { useState } from 'react';
import { PostModalState, usePostModalStore } from './store';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function PostUserModal() {
  const { open, setOpen } = usePostModalStore<PostModalState>((state) => state);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}>
          <Form.Item
            name={['user', 'name']}
            label="账号"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="姓名"
            rules={[{ type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'age']}
            label="密码"
            rules={[{ type: 'number', min: 0, max: 99 }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'website']} label="机构">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="岗位">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="邮箱">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="电话">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="性别">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="民族">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="学历">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="职位状态">
            <Input />
          </Form.Item>
          {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
}

export default PostUserModal;
