import { Request, Response } from "express";
import { createTokenService } from "../services/login/createToken.service";
import { TLoginRequest } from "../interfaces/login.interface";

export const loginController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const payload: TLoginRequest = request.body;
  const token: string = await createTokenService(payload);

  return response.status(200).json({ token });
};
