import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import styles from './index.module.css';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('个人主页', '1', <PieChartOutlined />),
  getItem('组织机构', '2', <DesktopOutlined />, [
    getItem('机构管理', '2-1'),
    getItem('岗位管理', '2-2'),
    getItem('用户管理', '2-3'),
  ]),
  getItem('系统设置', '3', <ContainerOutlined />, [
    getItem('菜单管理', '3-1'),
    getItem('字典管理', '3-2'),
    getItem('参数管理', '3-3'),
  ]),

  getItem('权限管理', '4', <MailOutlined />, [getItem('角色管理', '4-1')]),

  getItem('基础配置', '5', <AppstoreOutlined />, [getItem('行政区划', '5-1')]),
  getItem('资源管理', '6', <AppstoreOutlined />, [getItem('对象存储', '6-1')]),
];

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}>
      <div className="demo-logo-vertical" />
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        className={styles.menuWrapper}
      />
    </Sider>
  );
};

export default SideBar;
