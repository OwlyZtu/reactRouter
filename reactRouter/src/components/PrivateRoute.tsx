import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/user-context';

const PrivateRoute = () => {
  const { user } = useUserContext();

  return user?.id ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
