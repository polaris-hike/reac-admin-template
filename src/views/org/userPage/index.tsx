import { DownOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Row,
  Table,
  TreeSelect,
} from 'antd';
import type { TableColumnsType } from 'antd';
import locale from 'antd/es/date-picker/locale/en_US';
import React, { useState } from 'react';
import styles from './index.module.css';
import PostUserModal from './PostUserModal';
import { PostModalState, usePostModalStore } from './store';
import { useOrgTree } from '@/api/service/org';
import { transformData } from '@/utils';

interface DataType {
  key: React.Key;
  avator: string;
  name: string;
  sex: number;
  email: string;
  nation: string;
  education: string;
  positionStatus: string;
  orgId: number;
  stationId: number;
  state: boolean;
  createdAt: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Sex',
    dataIndex: 'sex',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Nation',
    dataIndex: 'nation',
  },
  {
    title: 'Education',
    dataIndex: 'education',
  },
  {
    title: 'Position Status',
    dataIndex: 'positionStatus',
  },
  {
    title: 'Organization ID',
    dataIndex: 'orgId',
  },
  {
    title: 'Station ID',
    dataIndex: 'stationId',
  },
  {
    title: 'State',
    dataIndex: 'state',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
  },
];
const data: DataType[] = [];

const UserPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [form] = Form.useForm();
  const { setOpen } = usePostModalStore<PostModalState>((state) => state);
  const { data: treeData, isLoading: orgTreeLoading } = useOrgTree();

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const onFinishHandler = () => {
    //
  };
  const resetHandler = () => {
    //
  };
  const onOpenFormHandler = () => {
    setOpen(true);
  };
  const batchDelHandler = () => {
    //
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      {/* <div className={styles.header}> */}
      <Form form={form} onFinish={onFinishHandler}>
        <Row gutter={24}>
          <Col span={4}>
            <Form.Item name="name">
              <Input placeholder="账号" allowClear />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="orgId">
              {!orgTreeLoading && (
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  // value={treeValue}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  placeholder="机构"
                  allowClear
                  treeDefaultExpandAll
                  // onChange={onChange}
                  treeData={transformData(treeData)}
                  // fieldNames={{ value: 'id' }}
                />
              )}
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="rangePicker">
              <DatePicker.RangePicker
              // locale={locale}
              // onChange={dateChangeHandler}
              />
            </Form.Item>
          </Col>
          <Col span={2} />
          <Col span={2}>
            <Form.Item name="search">
              <Button type="primary" htmlType="submit">
                搜索
              </Button>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={resetHandler}>
              重置
            </Button>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={onOpenFormHandler}>
              添加
            </Button>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={batchDelHandler}>
              删除
            </Button>
          </Col>
          <Col span={2}>
            {/* <Dropdown menu={{ items }}> */}
            <Button>
              更多
              <DownOutlined />
            </Button>
            {/* </Dropdown> */}
          </Col>
        </Row>
      </Form>
      {/* <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div> */}
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />

      <PostUserModal />
    </>
  );
};

export default UserPage;
