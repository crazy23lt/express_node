import { Request, Response } from "express";
import Result from "@src/utils/result";

export const urlencodedParser = (req: Request, res: Response) => {
  const body = req.body;
  console.log(body)
  res.json(Result.success(body));
};

