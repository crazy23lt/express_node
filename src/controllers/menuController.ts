import Result from "@src/utils/result";
import { Request, Response } from "express";

export const getMenus = (req: Request, res: Response) => {
  res.json(Result.success());
};
