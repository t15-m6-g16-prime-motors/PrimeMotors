import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { RegisterUserPage } from '../pages/RegisterUserPage';
import { UserProfilePage } from '../pages/UserProfilePage';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/profile' element={<UserProfilePage />} />
      <Route path='/register' element={<RegisterUserPage />} />
    </Routes>
  );
};
