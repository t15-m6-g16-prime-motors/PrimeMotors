import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { RegisterUserPage } from '../pages/RegisterUserPage';
import { LoginPage } from '../pages/LoginPage';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterUserPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
};
