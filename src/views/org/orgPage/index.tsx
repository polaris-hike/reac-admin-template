import { Button, Card, Col, Form, Input, Row, Space, Tree } from 'antd';
import type { TreeDataNode, FormInstance } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import {
  addOrgTree,
  deleteOrgTreeById,
  getOrgTreeById,
  updateOrgTree,
  useOrgTree,
} from '@/api/service/org';

interface orgEditType {
  name: string;
  parent: string;
  id: string;
  parentId: string;
}

const SubmitButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const OrgPage: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([
    '0-0-0',
    '0-0-1',
  ]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(['0-0-0']);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  // const [treeData, setTreeData] = useState<TreeDataNode[]>([]);
  const [form] = Form.useForm<orgEditType>();
  const [cardStatus, setCardStatus] = useState<'add' | 'update' | 'delete'>(
    'add'
  );
  const {
    data: treeData,
    isLoading: treeDataLoading,
    refetch: treeDataRefetch,
  } = useOrgTree();

  console.log('treeDataLoading:', treeDataLoading);
  console.log('treeData:', treeData);
  const onExpand = (expandedKeysValue: React.Key[]) => {
    console.log('onExpand', expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue: React.Key[]) => {
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = async (selectedKeysValue: React.Key[], info: any) => {
    setSelectedKeys(selectedKeysValue);

    const detail = await getOrgTreeById(info.node.key);
    form.setFieldsValue({
      name: detail.name,
      parent: detail?.parent?.name || '',
      id: detail.id,
      parentId: detail?.parent?.id || '',
    });
    setCardStatus('update');
    console.log('detail:', detail);
  };

  const resetHandler = () => {
    //
  };

  const batchDelHandler = () => {
    setCardStatus('delete');
  };

  const addHandler = () => {
    setCardStatus('add');
  };

  const transformData = (data: any) => {
    const res: any = [];
    data.forEach((item: any) => {
      const newObj = {
        title: item.name,
        key: item.id,
        children: transformData(item.children),
      };
      res.push(newObj);
    });
    return res;
  };

  const onFinish = async (data: any) => {
    switch (cardStatus) {
      case 'add':
        await addOrgTree({
          name: data.name,
          parent: data.parentId || data.id || null,
        });
        treeDataRefetch();
        break;
      case 'update':
        await updateOrgTree({
          name: data.name,
          id: data.id,
        });
        treeDataRefetch();
        break;
      case 'delete':
        await deleteOrgTreeById(data.id);
        treeDataRefetch();
        break;
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <Col span={2}>
          {/* <Form.Item name="search"> */}
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
          {/* </Form.Item> */}
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={resetHandler}>
            重置
          </Button>
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={addHandler}>
            添加
          </Button>
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={batchDelHandler}>
            删除
          </Button>
        </Col>
      </div>

      <Row
        gutter={16}
        style={{
          margin: 0,
        }}>
        <Col className="gutter-row" span={12}>
          {treeDataLoading ? (
            <span>loading..</span>
          ) : (
            <Tree
              checkable
              checkStrictly
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              onCheck={onCheck}
              checkedKeys={checkedKeys}
              onSelect={onSelect}
              selectedKeys={selectedKeys}
              treeData={transformData(treeData)}
            />
          )}
        </Col>
        <Col className="gutter-row" span={12}>
          <Card title={cardStatus} bordered={false}>
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              onFinish={onFinish}>
              <Form.Item name="parentId" label="ParentId" hidden>
                <Input disabled />
              </Form.Item>
              <Form.Item name="id" label="ID" hidden>
                <Input disabled />
              </Form.Item>
              <Form.Item name="parent" label="Parent">
                <Input disabled />
              </Form.Item>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item>
                <Space>
                  <SubmitButton form={form} />
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrgPage;
