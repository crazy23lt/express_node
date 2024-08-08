import Result from "@src/utils/result";
import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  const ret = "Get all users";
  res.json(Result.success({ret}));
};
export const createUser = (req: Request, res: Response) => {
  const ret = "Create a new user";
  res.json(Result.success({ret}));
};
export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(Result.success({id}));
};
export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(Result.success({id}));
};
