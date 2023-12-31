/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { IRegisterUserRequest, TLoginUser } from '../interfaces';
import { IUserLogged, TSendEmail } from '../interfaces/users.interfaces';
import { IEditUser } from '../components/Modal/EditDeleteUser';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { IEditUserAddress } from '../components/Modal/EditUserAddress';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: TLoginUser) => Promise<void>;
  signUp: (data: IRegisterUserRequest) => Promise<void>;
  loading: boolean;
  user: IUserLogged | null;
  setUser: React.Dispatch<React.SetStateAction<IUserLogged | null>>;
  getTwoInitials: (name: string) => string;
  editUser: (patchedUserData: IEditUser) => Promise<void>;
  editAddress: (patchedUserData: IEditUserAddress) => Promise<void>;
  deleteUser: () => Promise<void>;
  handleLogout: () => void;
  sendResetPasswordEmail: (data: TSendEmail) => Promise<void>;
  getFirstAndLastName: (name: string) => string;
  getRandomColor: (userId: number) => number;
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUserLogged | null>(null);
  const navigate = useNavigate();
  const headersAuth = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`
    }
  };

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
      toast.success('Seja bem vindo!');

      navigate('/');
    } catch (error) {
      toast.error('Email ou senha inválidos!');
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
      toast.success('Cadastro realizado com sucesso!');
    } catch (error) {
      toast.error('Algo deu errado. Por favor, tente novamente.');
    }
  };

  const getTwoInitials = (name: string) => {
    if (!name) {
      return '';
    }
    const namesArray = name.split(' ');
    const firstName = namesArray[0];
    const lastName = namesArray[namesArray.length - 1];

    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  };

  const getFirstAndLastName = (name: string) => {
    const namesArray = name.split(' ');

    const firstName = namesArray[0];
    const lastName = namesArray[namesArray.length - 1];

    return `${firstName} ${lastName}`;
  };

  const editUser = async (patchedUserData: IEditUser) => {
    try {
      const token = localStorage.getItem('@TOKEN') || '{}';

      const decodedToken: any = jwt_decode(token);
      const id = decodedToken.userId;

      const editUserResponse: AxiosResponse = await api.patch(
        `/users/${id}`,
        patchedUserData,
        headersAuth
      );

      if (editUserResponse.status === 200) {
        userLogged(id);
        toast.success('Alteração efetuada!');
      }
    } catch (error) {
      console.log(error);
      toast.error('Algo deu errado. Revise as informações fornecidas.');
    }
  };

  const editAddress = async (patchedAddressData: IEditUserAddress) => {
    const addressData = {
      address: patchedAddressData
    };

    try {
      const token = localStorage.getItem('@TOKEN') || '{}';

      const decodedToken: any = jwt_decode(token);
      const id = decodedToken.userId;

      const editAddressResponse: AxiosResponse = await api.patch(
        `/users/${id}`,
        addressData,
        headersAuth
      );

      if (editAddressResponse.status === 200) {
        userLogged(id);
        toast.success('Alteração de endereço efetuada!');
      }
    } catch (error) {
      console.log(error);
      toast.error('Algo deu errado. Revise as informações fornecidas.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('@TOKEN');

    navigate('/login');
    toast.success('Logout realizado com sucesso!');
    setUser(null);
  };

  const deleteUser = async () => {
    try {
      const token = localStorage.getItem('@TOKEN') || '{}';

      const decodedToken: any = jwt_decode(token);
      const id = decodedToken.userId;

      const deleteUserResponse: AxiosResponse = await api.delete(
        `/users/${id}`,
        headersAuth
      );

      if (deleteUserResponse.status === 204) {
        toast.success('Usuário Deletado');
        navigate('/login');
        handleLogout();
      }
    } catch (error) {
      console.log(error);
      toast.error('Ops, algo deu errado...');
    }
  };

  const sendResetPasswordEmail = async (data: TSendEmail) => {
    try {
      await api.post('/users/resetPassword', data);
      toast.success('Email enviado!');
    } catch (error) {
      console.log(error);
      toast.warning('Algo deu errado! Reveja seu email e tente novamente.');
    }
  };

  const getRandomColor = (userId: number) => {
    let colorCode = userId % 12

    if (colorCode === 0) {
      colorCode += 1
    }

    return colorCode;
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        loading,
        user,
        setUser,
        getTwoInitials,
        editUser,
        editAddress,
        deleteUser,
        handleLogout,
        sendResetPasswordEmail,
        getFirstAndLastName,
        getRandomColor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
