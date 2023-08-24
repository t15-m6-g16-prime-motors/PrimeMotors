import { z } from "zod";
import {
  createUserSchemaResponse,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUserResponse = z.infer<typeof userSchemaResponse>;

type TUsersResponse = z.infer<typeof usersSchemaResponse>;

type TCreateUserResponse = z.infer<typeof createUserSchemaResponse>;

type TUserUpdateRequest = DeepPartial<TUserRequest>;

export { TUserRequest, TUserResponse, TUsersResponse, TUserUpdateRequest, TCreateUserResponse };
