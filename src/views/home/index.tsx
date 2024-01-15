import { useEffect } from 'react';
import { profile } from '@/api/service/user';
import { UserProfileState, useUserProfileStore } from '@/stores';

const Home = () => {
  const { username } = useUserProfileStore<UserProfileState>((state) => state);

  useEffect(() => {
    profile();
  }, []);

  return <div>Hello,{username},Weclome!</div>;
};

export default Home;
