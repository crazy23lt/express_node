import { verifyToken } from "@src/utils/auth";
import Result from "@src/utils/result";
import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token) {
    try {
      const user = verifyToken(token);
      // req.user = user; // 将解码后的用户信息附加到请求对象上
      next();
    } catch (error) {
      res.status(403).json(Result.authorizeFailed());
    }
  } else {
    res.status(401).json(Result.authenticationFailed());
  }
};

export default authMiddleware;
