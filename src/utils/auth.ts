import { Role } from "@src/models/Account";
import jwt from "jsonwebtoken";
const secretKey = "2394630102@qq.com";
interface Payload {
  name: string;
  role: Role;
  uuid: string;
}
const generateToken = (payload: Payload, expiresIn = "1h") => {
  return jwt.sign(payload, secretKey, { expiresIn });
};
const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
export { generateToken, verifyToken };
