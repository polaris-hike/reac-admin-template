interface IConfig {
  projectName: string;
  commonServiceHost: string;
  env: 'prod' | 'staging' | 'dev' | 'test'; // | 'api-test' | 'press';
  cdnHost: string;
}

const config: IConfig = {
  projectName: 'admin',
  commonServiceHost: 'http://localhost:3200/api',
  env: 'dev',
  cdnHost: 'https://up.qbox.me',
};

export function getCurrentEnvironment() {
  const meta = window.document.querySelector('meta[name=environment]');
  if (meta) {
    const env = meta.getAttribute('content');
    if (env && env !== '__ENVIRONMENT__' && env !== 'undefined') {
      return env;
    }
  }
  const { hostname } = window.location;
  if (hostname.startsWith('dev')) {
    return 'development';
  } else if (hostname.startsWith('test')) {
    return 'test';
  } else if (hostname.startsWith('staging')) {
    return 'staging';
  } else if (hostname.endsWith('.codemao.cn')) {
    return 'production';
  } else if (hostname.endsWith('.codingcat.com')) {
    return 'intl-production'; // NOTE: 海外只有一个正式环境
  } else {
    return 'development';
  }
}

export function initializeConfig(environment: string) {
  let apiHostPrefix;
  let env: IConfig['env'];

  switch (environment) {
    case 'press':
    case 'pressure':
    case 'test':
      apiHostPrefix = 'test-api';
      env = 'test';
      break;
    case 'staging':
      apiHostPrefix = 'backend-test';
      env = 'staging';
      break;
    case 'prod':
    case 'production':
      apiHostPrefix = 'api';
      env = 'prod';
      break;
    case 'dev':
    case 'development':
    default:
      apiHostPrefix = 'backend-dev';
      env = 'dev';
      break;
  }

  config.env = env;

  if (environment === 'intl-production') {
    config.commonServiceHost =
      'https://intl-gateway.codingcat.com/platform-account-api';
    config.env = 'prod';
    config.projectName = 'intl-rokrok-turtle';
  }

  return config;
}

export function isDevTest() {
  return config.env === 'dev' || config.env === 'test';
}

initializeConfig(getCurrentEnvironment());
export default config;
