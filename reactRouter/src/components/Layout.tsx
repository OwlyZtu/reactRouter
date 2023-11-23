import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/user-context';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const logoutHandle = () => {
    setUser(undefined);
    navigate('/');
  };

  return (
    <>
      <h1>
        Layout <Link to='/me'>Me</Link>
      </h1>
      {children}
      <footer>
        Footer <button onClick={logoutHandle}>Log out</button>
      </footer>
    </>
  );
};

export default Layout;
