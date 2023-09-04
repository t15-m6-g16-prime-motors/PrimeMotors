import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { RegisterUserPage } from '../pages/RegisterUserPage';
import { UserProfilePage } from '../pages/UserProfilePage';
import { LoginPage } from '../pages/LoginPage';
import { SendEmailPage } from '../pages/ResetPasswordPage/sendEmailPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage/resetPasswordPage';
import { ListingPage } from '../pages/ListingPage';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/profile/:id' element={<UserProfilePage />} />
      <Route path='/listing/:id' element={<ListingPage />} />
      <Route path='/register' element={<RegisterUserPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/resetPassword' element={<SendEmailPage />} />
      <Route path='/resetPassword/:token' element={<ResetPasswordPage />} />
    </Routes>
  );
};
