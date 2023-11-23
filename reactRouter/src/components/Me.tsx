import { useUserContext } from '../context/user-context';

const Me = () => {
  const { user } = useUserContext();

  return <code>{JSON.stringify(user, null, 2)}</code>;
};

export default Me;
