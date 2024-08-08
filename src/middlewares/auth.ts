import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization === "Bearer my-secret-token") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export { authMiddleware };
