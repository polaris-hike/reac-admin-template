import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { useState } from 'react';
import { PostStationModalState, usePostStationModalStore } from './store';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function PostStationModal() {
  const { open, setOpen } = usePostStationModalStore<PostStationModalState>(
    (state) => state
  );
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
            label="岗位名称"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="机构">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'detail']} label="描述">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default PostStationModal;
