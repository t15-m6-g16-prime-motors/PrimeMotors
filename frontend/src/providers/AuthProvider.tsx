/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { IRegisterUserRequest, TLoginUser } from '../interfaces';
import { IUserLogged } from '../interfaces/users.interfaces';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: TLoginUser) => Promise<void>;
  signUp: (data: IRegisterUserRequest) => Promise<void>;
  loading: boolean;
  user: IUserLogged | null;
  setUser: React.Dispatch<React.SetStateAction<IUserLogged | null>>;
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUserLogged | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

  
    const decodedToken: any = jwt_decode(token);
    const id = decodedToken.userId;

    
    userLogged(id);
  }, []);

  const signIn = async (data: TLoginUser) => {
    try {
      const response = await api.post('/login', data);
      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('@TOKEN', token);

     
      const decodedToken: any = jwt_decode(token);
      const id = decodedToken.userId;


      setLoading(true); 
      await userLogged(id);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const userLogged = async (id: number) => {
    try {
      const response = await api.get(`/users/${id}`);
      const userData: IUserLogged = response.data;
      setUser(userData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false); 
    }
  };

  const signUp = async (data: IRegisterUserRequest) => {
    try {
      const response = await api.post('/users', data);
      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('@TOKEN', token);
      setLoading(false);

      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, loading, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
