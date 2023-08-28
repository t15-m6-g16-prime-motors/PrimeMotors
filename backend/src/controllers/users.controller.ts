import { Request, Response } from 'express';
import createUsersService from '../services/users/createUsers.service';
import {
  TCreateUserRequest,
  TUserResponse,
  TUserUpdateRequest,
  TUsersListResponse
} from '../interfaces/user.interfaces';
import sendResetEmailPasswordService from '../services/users/usersResetPassword.service';
import resetPasswordService from '../services/users/resetPassword.service';
import listUsersService from '../services/users/listUsers.service';
import updateUsersService from '../services/users/updateUsers.service';
import { deleteUsersService } from '../services/users/deleteUsers.service';
import getByIdUsersService from '../services/users/getByIdUsers.service';

const createUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TCreateUserRequest = request.body;
  const newUser = await createUsersService(userData);

  return response.status(201).json(newUser);
};

const listUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const users: TUsersListResponse = await listUsersService();
  return response.status(200).json(users);
};

const updateUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);
  const userData: TUserUpdateRequest = request.body;
  const newUserData = await updateUsersService(userData, userId);

  return response.status(200).json(newUserData);
};

const getByIdUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);

  const user: TUserResponse = await getByIdUsersService(userId);

  return response.status(200).json(user);
};

const deleteUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);

  await deleteUsersService(userId);

  return response.status(204).send();
};

const sendResetEmailPasswordController = async (
  request: Request,
  response: Response
) => {
  const { email } = request.body;
  await sendResetEmailPasswordService(email);

  return response.json({ message: 'token send' });
};

const resetPasswordController = async (
  request: Request,
  response: Response
) => {
  const { password } = request.body;
  const { token } = request.params;
  await resetPasswordService(password, token);

  response.json({ message: 'password chenge with sucess' });
};

export {
  createUsersController,
  listUsersController,
  updateUsersController,
  deleteUsersController,
  getByIdUsersController,
  sendResetEmailPasswordController,
  resetPasswordController
};
