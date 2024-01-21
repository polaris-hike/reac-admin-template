import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme, App as AntdApp, Layout } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import { Routes } from 'react-router-dom';
import Router from './components/router';
import SideBar from './components/SideBar';
function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#00B96B',
        },
        components: {
          Layout: {
            colorBgBody: '',
          },
        },
      }}>
      <StyleProvider hashPriority="high">
        <AntdApp>
          <Router />
        </AntdApp>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default App;
