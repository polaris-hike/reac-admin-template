import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';

export function Root() {
  return (
    <Layout hasSider>
      <SideBar />
      <Layout style={{ height: '100vh', marginLeft: 200 }}>
        <Outlet />
      </Layout>
    </Layout>
  );
}
