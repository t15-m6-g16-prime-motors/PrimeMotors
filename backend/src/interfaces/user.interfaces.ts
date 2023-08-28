import { z } from 'zod';
import {
  createUserResponseSchema,
  updateUserResponseSchema,
  userListResponseSchema,
  createUserRequestSchema,
  userUpdateSchema
} from '../schemas/users.schemas';
import { DeepPartial } from 'typeorm';

type TUserResponse = z.infer<typeof createUserResponseSchema>;

type TCreateUserRequest = z.infer<typeof createUserRequestSchema>;
type TCreateUserResponse = z.infer<typeof createUserResponseSchema>;

type TUsersListResponse = z.infer<typeof userListResponseSchema>;

type TUserUpdate = z.infer<typeof userUpdateSchema>;
type TUserUpdateRequest = DeepPartial<TUserUpdate>;
type TUserUpdateResponse = z.infer<typeof updateUserResponseSchema>;

export {
  TUserResponse,
  TCreateUserRequest,
  TUsersListResponse,
  TCreateUserResponse,
  TUserUpdateRequest,
  TUserUpdateResponse
};
