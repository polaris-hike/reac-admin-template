import { Col, Layout, Row, Statistic, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import classnames from 'classnames';
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import styles from './index.module.css';
import { profile } from '@/api/service/user';
import avator from '@/assets/avator.jpeg';
import SideBar from '@/components/SideBar';
import { UserProfileState, useUserProfileStore } from '@/stores';
import { RegisterFieldType } from '@/types/user';

const formatter: any = (value: number) => <CountUp end={value} separator="," />;

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
    <Layout hasSider>
      <SideBar />
      <Layout style={{ marginLeft: 200 }}>
        <Header
          className={styles.header}
          style={{
            padding: '32px 50px',
            height: '140px',
            background: colorBgContainer,
          }}>
          <div className={styles.headerLeft}>
            <img className={styles.avator} src={avator} alt="" />
            <div className={styles.welcome}>
              <h1 className={classnames('text-xl')}>
                Good morning, 超级管理员, Have a coffee break ☕
              </h1>
              <span className="text-sm">上次登录时间： 第一次登录系统</span>
            </div>
          </div>
          <Row className={styles.headerRight} gutter={16}>
            <Col span={12}>
              <Statistic
                title="Active Users"
                value={112893}
                formatter={formatter}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Account Balance (CNY)"
                value={112893}
                precision={2}
                formatter={formatter}
              />
            </Col>
          </Row>
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
  );
};

export default Home;
