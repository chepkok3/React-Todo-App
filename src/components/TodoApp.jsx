import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';

import Home from '../routes/Home';
import About from '../routes/About';
import Login from '../routes/Login';
import Profile from '../routes/Profile';
import NotMatch from '../routes/NotMatch';
import SinglePage from '../routes/SinglePage';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="React-Todo-App/" element={<Home />} />
      <Route path="React-Todo-App/about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="React-Todo-App/login" element={<Login />} />
      <Route path="React-Todo-App/profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);
export default TodoApp;
