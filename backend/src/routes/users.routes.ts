import { Router } from "express";
import {
  createUsersController,
  deleteUsersController,
  getByIdUsersController,
  listUsersController,
  updateUsersController,
} from "../controllers/users.controller";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/users.schemas";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import ensureEmailNotExistsMiddleware from "../middlewares/ensureEmailNotExistsMiddleware";
import ensureCpfNotExistsMiddleware from "../middlewares/ensureCpfNotExistsMiddleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuthMiddleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import ensureUserIdExistsMiddleware from "../middlewares/ensureUserIdExists.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValid(userSchemaRequest),
  ensureEmailNotExistsMiddleware,
  ensureCpfNotExistsMiddleware,
  createUsersController
);

userRoutes.get("", ensureAuthMiddleware, listUsersController);

userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureUserIdExistsMiddleware,
  getByIdUsersController
);

userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureUserIdExistsMiddleware,
  ensureDataIsValid(userSchemaUpdateRequest),
  ensureEmailNotExistsMiddleware,
  updateUsersController
);

userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureUserIdExistsMiddleware,
  deleteUsersController
);

export default userRoutes;
