import { Layout, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import React, { useEffect } from 'react';
import styles from './index.module.css';
import { profile } from '@/api/service/user';
import SideBar from '@/components/SideBar';
import { UserProfileState, useUserProfileStore } from '@/stores';
import { RegisterFieldType } from '@/types/user';

const Home = () => {
  const { username, setUserName } = useUserProfileStore<UserProfileState>(
    (state) => state
  );
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    profile().then((res: RegisterFieldType) => {
      setUserName(res.username);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Layout hasSider>
        <SideBar />
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div>Hello,{username},Weclome!</div>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}>
              <p>long content</p>
              {
                // indicates very long content
                Array.from({ length: 100 }, (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ))
              }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
