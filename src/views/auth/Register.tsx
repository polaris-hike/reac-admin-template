import classnames from 'classnames';
import $styles from './login.module.css';
import CredentialForm from './RegisterForm';
import bgimg from '@/assets/images/login-box-bg.svg';

const Login = () => {
  return (
    <div className={$styles.container}>
      <span className="-enter-x xl:hidden" />
      <div className={$styles.main}>
        <div className="flex h-full">
          <div className={$styles.leftBlock}>
            <div className="my-auto">
              {/* <img alt="title" src={bgimg} className="w-1/2 -mt-16 -enter-x" /> */}
              <div className="mt-10 font-medium -enter-x">
                <span className="mt-4 text-3xl inline-block">
                  基于Vite+React的管理面板
                </span>
              </div>
            </div>
          </div>
          <div className={classnames($styles.rightBlock, 'enter-x')}>
            <h2>Register</h2>
            <div className={$styles.formBlock}>
              <CredentialForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
