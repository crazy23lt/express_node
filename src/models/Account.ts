import { generateToken } from "@src/utils/auth";
import { v4 as uuidv4 } from "uuid";
export enum Role {
  ADMIN = "admin",
  GUEST = "guest",
}

class Account {
  public name: string;
  public uuid: string = uuidv4();
  public role: Role;
  public access_token: string;
  constructor(name: string, role: Role) {
    this.name = name;
    this.role = role;
    const payload = {
      name: this.name,
      role: this.role,
      uuid: this.uuid,
    };
    this.access_token = generateToken(payload);
  }
}
const AccountAdmin = new Account("liut_admin", Role.ADMIN);
const AccountGuest = new Account("liut_guest", Role.GUEST);
export default { AccountAdmin, AccountGuest };
