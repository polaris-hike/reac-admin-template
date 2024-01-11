import { UserProfileState, useUserProfileStore } from '@/stores';

const Home = () => {
  const { username } = useUserProfileStore<UserProfileState>((state) => state);
  return <div>Hello,{username},Weclome!</div>;
};

export default Home;
