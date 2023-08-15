import { z } from "zod";
import { loginSchema } from "../schemas/login.schemas";

export type TLoginRequest = z.infer<typeof loginSchema>
