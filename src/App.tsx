import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme, App as AntdApp } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import Router from './components/router';
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
