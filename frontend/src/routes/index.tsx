import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { RegisterUserPage } from '../pages/RegisterUserPage';
import { UserProfilePage } from '../pages/UserProfilePage';
import { LoginPage } from '../pages/LoginPage';
import { ListingPage } from '../pages/ListingPage';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/profile' element={<UserProfilePage />} />
      <Route path='/listing' element={<ListingPage />} />
      <Route path='/register' element={<RegisterUserPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
};
