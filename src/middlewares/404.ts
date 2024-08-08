// src/middleware/handle404.ts
import Result from "@src/utils/result";
import { Request, Response, NextFunction } from "express";

const handle404 = (req: Request, res: Response, next: NextFunction) => {
  res.json(Result.notFound());
};

export default handle404;
