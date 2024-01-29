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
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }

const treeData = [
  {
    title: '北京万家灯火科技有限公司',
    key: '0-0',
    children: [
      {
        title: '运营部',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '市场部',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '语音部',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '重庆泛络科技有限公司',
    key: '0-1',
    children: [{ title: '开发部', key: '0-1-0-0' }],
  },
];
const UserPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

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
    //
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
              <TreeSelect
                showSearch
                style={{ width: '100%' }}
                // value={treeValue}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="机构"
                allowClear
                treeDefaultExpandAll
                // onChange={onChange}
                treeData={treeData}
                fieldNames={{ value: 'id' }}
              />
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
            <Button type="primary" onClick={() => onOpenFormHandler()}>
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
    </>
  );
};

export default UserPage;
