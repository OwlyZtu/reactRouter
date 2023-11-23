import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/user-context';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const submitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).username.value;
    const password = (e.target as HTMLFormElement).password.value;
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
    setUser(data);
    navigate('/me');
  };
  return (
    <form onSubmit={submitHandle}>
      <label htmlFor='username'>Username</label>
      <input id='username' />
      <br />
      <label htmlFor='password'>Password</label>
      <input type='password' id='password' />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
