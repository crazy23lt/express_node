import { Request, Response } from "express";
import Result from "@src/utils/result";
export const httpCacheFn = (req: Request, res: Response) => {
  res.json(Result.success("强制缓存"));
};
