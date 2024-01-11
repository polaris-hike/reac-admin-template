import { useNavigate } from 'react-router-dom';
import { UserProfileState, useUserProfileStore } from '@/stores';

const CredentialForm = () => {
  const { setUserName } = useUserProfileStore<UserProfileState>(
    (state) => state
  );
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setUserName('wuxuwei');
    navigate('/home');
  };

  return (
    <div className="p-4 w-full flex">
      <input type="text" placeholder="请输入用户名" />
      <input type="text" placeholder="请输入密码" name="" id="" />
      <button onClick={handleLoginClick}>登陆</button>
    </div>
  );
};
export default CredentialForm;
