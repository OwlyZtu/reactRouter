import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Me from './components/Me';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/me' element={<Me />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
