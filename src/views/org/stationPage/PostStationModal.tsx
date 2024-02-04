import { Button, Form, Input, InputNumber, Modal, TreeSelect } from 'antd';
import { useState } from 'react';
import { PostStationModalState, usePostStationModalStore } from './store';
import { addOrgStation, useOrgTree } from '@/api/service/org';
import { transformData } from '@/utils';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function PostStationModal() {
  const [form] = Form.useForm();
  const { open, setOpen } = usePostStationModalStore<PostStationModalState>(
    (state) => state
  );
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { data: treeData, isLoading: orgTreeLoading } = useOrgTree();

  const handleOk = () => {
    form.validateFields();
    form.submit();
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const onFinish = async (values: any) => {
    console.log(values);
    await addOrgStation(values);
    setOpen(false);
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
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}>
          <Form.Item
            name={'name'}
            label="岗位名称"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={'orgId'} label="机构">
            {!orgTreeLoading && (
              <TreeSelect treeData={transformData(treeData)} />
            )}
          </Form.Item>
          <Form.Item name={'description'} label="描述">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default PostStationModal;
