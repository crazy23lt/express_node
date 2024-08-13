import { Request, Response, NextFunction } from "express";
import etag from "etag";
const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // 设置 强缓存 Cache-Control
  // public:公开能被其他服务缓存
  // max-age:最大有效时间 s/秒
  res.setHeader("Cache-Control", "public, max-age=31536000");
  // 设置 强制缓存 Expires
  const expiresDate = new Date();
  expiresDate.setFullYear(expiresDate.getFullYear() + 1);
  res.setHeader("Expires", expiresDate.toUTCString());
  // 设置 etag => 文件修改hash值  if-None-Match
  res.setHeader("etag", etag(""));
  next();
};
export default cacheMiddleware;
